"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

/**
 * Global, zero-touch event tracking.
 *
 * Mounted once in the root layout. Uses click delegation on document, so no
 * individual link or page needs to be edited — new posts and new CTAs are
 * picked up automatically. Keyed on pathname so it re-arms on client-side
 * navigation.
 *
 * Events emitted:
 *   contact_click   — email / calendar / linkedin CTA clicked, plus the page it came from
 *   campsite_click  — click through to campsiteranger.com (the builder proof point)
 *   share_click     — a post shared to a network
 *   source_click    — an outbound citation link inside a post
 *   outbound_click  — any other external link (client logos, misc)
 *   post_read       — scroll-depth milestones on a /writing/ post
 */

const SHARE_HOSTS: Record<string, string> = {
  "linkedin.com": "linkedin",
  "twitter.com": "x",
  "x.com": "x",
  "threads.net": "threads",
  "reddit.com": "reddit",
};

/** Normalize "www.foo.com" -> "foo.com" so hosts group cleanly in the dashboard. */
function bareHost(host: string): string {
  return host.replace(/^www\./, "").toLowerCase();
}

/** For /writing/<slug> return <slug>, else null. */
function postSlug(path: string): string | null {
  const m = path.match(/^\/writing\/([^/]+)\/?$/);
  return m ? m[1] : null;
}

export default function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const from = pathname || "/";
    const slug = postSlug(from);

    // ---------- click tracking ----------
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const raw = anchor.getAttribute("href");
      if (!raw) return;

      // --- contact intent: email ---
      if (raw.startsWith("mailto:")) {
        // A mailto carrying a subject/body is the "share by email" action.
        if (raw.includes("subject=")) {
          track("share_click", { network: "email", from });
        } else {
          track("contact_click", { method: "email", from });
        }
        return;
      }

      // Ignore in-page anchors and non-web protocols.
      if (raw.startsWith("#") || raw.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(raw, window.location.origin);
      } catch {
        return;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      const host = bareHost(url.hostname);

      // Internal navigation is already covered by page views.
      if (host === bareHost(window.location.hostname)) return;

      // --- share actions ---
      const shareNetwork = SHARE_HOSTS[host];
      const looksLikeShare =
        url.pathname.includes("/share") ||
        url.pathname.includes("/intent") ||
        url.pathname.includes("/submit") ||
        url.search.includes("chrisdorsey.co");

      if (shareNetwork && looksLikeShare) {
        track("share_click", { network: shareNetwork, from });
        return;
      }

      // --- Campsite Ranger: the builder proof point, tracked on its own ---
      if (host === "campsiteranger.com") {
        track("campsite_click", { from });
        return;
      }

      // --- contact intent: calendar / LinkedIn profile ---
      if (host === "calendar.app.google") {
        track("contact_click", { method: "calendar", from });
        return;
      }
      if (host === "linkedin.com" && url.pathname.startsWith("/in/")) {
        track("contact_click", { method: "linkedin", from });
        return;
      }

      // --- citation links inside a post ---
      if (slug) {
        track("source_click", { domain: host, from });
        return;
      }

      track("outbound_click", { domain: host, from });
    }

    document.addEventListener("click", onClick, { capture: true });

    // ---------- scroll depth on posts ----------
    let onScroll: (() => void) | null = null;

    if (slug) {
      const fired = new Set<number>();
      const milestones = [25, 50, 75, 100];
      let ticking = false;

      const measure = () => {
        ticking = false;
        const doc = document.documentElement;
        const scrolled = window.scrollY || doc.scrollTop;
        const scrollable = doc.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        // Treat "within a screen-edge of the bottom" as 100. Content that
        // renders late (related posts, images) grows the page after the reader
        // has already reached the end, which would otherwise strand them at 75.
        const atBottom = scrolled + window.innerHeight >= doc.scrollHeight - 48;
        const pct = atBottom ? 100 : Math.round((scrolled / scrollable) * 100);

        for (const m of milestones) {
          if (pct >= m && !fired.has(m)) {
            fired.add(m);
            track("post_read", { post: slug, depth: m });
          }
        }
        if (fired.size === milestones.length && onScroll) {
          window.removeEventListener("scroll", onScroll);
        }
      };

      onScroll = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(measure);
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, [pathname]);

  return null;
}
