"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { track } from "@vercel/analytics";
import { CONTACT_EMAIL, NEWSLETTER } from "@/app/lib/site-config";

// Newsletter signup, used on the homepage, /writing, and the end of every post.
// Driven by NEWSLETTER in app/lib/site-config.ts:
//   - beehiivPublicationId empty → the old "send a note" mailto (no list yet).
//   - beehiivPublicationId set   → a real email form that posts to /api/subscribe.
// Same ink card as the original /writing block: INK fill, TEAL offset shadow, ACID button.

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";

type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterSignup({
  source = "site",
  className = "",
}: {
  source?: string;
  className?: string;
}) {
  const live = NEWSLETTER.beehiivPublicationId.trim() !== "";
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Add me to the list")}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      track("newsletter_signup", { from: source });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={`rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ${className}`}
      style={{ background: INK, color: PAPER, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${TEAL}` }}
    >
      <div className="min-w-0">
        <h3 className="font-display font-bold mb-1" style={{ fontSize: 20 }}>Get new posts by email</h3>
        <p className="text-sm" style={{ color: "rgba(242,236,221,0.78)" }}>
          {NEWSLETTER.pitch}
          {!live && <> The list isn&apos;t live yet, so send a note and I&apos;ll add you by hand.</>}
        </p>
      </div>

      {!live ? (
        <a
          href={mailto}
          className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm hover:opacity-90 whitespace-nowrap shrink-0"
          style={{ background: ACID, color: INK }}
        >
          <Mail className="w-4 h-4" />
          Sign me up
        </a>
      ) : status === "done" ? (
        <p className="font-semibold text-sm shrink-0" role="status" style={{ color: ACID }}>
          You&apos;re on the list. Check your inbox.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="w-full md:w-auto shrink-0">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <label htmlFor={`nl-email-${source}`} className="sr-only">Email address</label>
            <input
              id={`nl-email-${source}`}
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full px-5 py-3 text-sm w-full sm:w-64"
              style={{ background: PAPER, color: INK, border: `2px solid ${PAPER}` }}
            />
            {/* Honeypot: hidden from people, filled by bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm hover:opacity-90 whitespace-nowrap disabled:opacity-60"
              style={{ background: ACID, color: INK }}
            >
              <Mail className="w-4 h-4" />
              {status === "sending" ? "Adding you…" : "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-xs mt-2" role="alert" style={{ color: "rgba(242,236,221,0.85)" }}>
              That didn&apos;t go through.{" "}
              <a href={mailto} className="underline underline-offset-2" style={{ color: ACID }}>Email me</a>{" "}
              and I&apos;ll add you by hand.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
