"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

// Tag-filtered post grid for /writing. The server HTML lists every post (crawlers and
// no-JS readers get the full archive); the filter runs client-side and mirrors the
// active tag in the URL as ?tag=<slug> so a filtered view can be shared.

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";
const BLUE = "#2B43E8";
const VIOLET = "#6B4BFF";

export type ListPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tag: string;
};

// Alternating bold card fills, cycled across the list for variety.
const fills: { bg: string; fg: string; tag: string; tagText: string }[] = [
  { bg: PAPER, fg: INK, tag: BLUE, tagText: "#fff" },
  { bg: BLUE, fg: "#fff", tag: ACID, tagText: INK },
  { bg: PAPER, fg: INK, tag: VIOLET, tagText: "#fff" },
  { bg: VIOLET, fg: "#fff", tag: ACID, tagText: INK },
  { bg: PAPER, fg: INK, tag: TEAL, tagText: "#fff" },
  { bg: INK, fg: PAPER, tag: ACID, tagText: INK },
];

export const tagSlug = (tag: string) =>
  tag.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function WritingList({ posts }: { posts: ListPost[] }) {
  // Tags ordered by how many posts carry them.
  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => counts.set(p.tag, (counts.get(p.tag) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [posts]);

  const [active, setActive] = useState<string | null>(null);

  // Read ?tag= after hydration (keeps the page static; no Suspense boundary needed).
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("tag");
    if (!fromUrl) return;
    const match = tags.find(([t]) => tagSlug(t) === fromUrl);
    if (match) setActive(match[0]);
  }, [tags]);

  function choose(tag: string | null) {
    setActive(tag);
    const url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tagSlug(tag));
    else url.searchParams.delete("tag");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  const shown = active ? posts.filter((p) => p.tag === active) : posts;

  const chip = (label: string, count: number, on: boolean, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-transform hover:-translate-y-0.5"
      style={{
        background: on ? INK : "transparent",
        color: on ? ACID : INK,
        border: `2px solid ${INK}`,
      }}
    >
      {label} <span style={{ opacity: 0.6 }}>{count}</span>
    </button>
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter posts by topic">
        {chip("All", posts.length, active === null, () => choose(null))}
        {tags.map(([t, n]) => chip(t, n, active === t, () => choose(active === t ? null : t)))}
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:auto-rows-fr">
        {shown.map((post, i) => {
          const f = fills[i % fills.length];
          const darkCard = f.fg !== INK;
          return (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex flex-col justify-between rounded-2xl p-6 md:p-7 transition-transform hover:-translate-y-1"
              style={{
                background: f.bg,
                color: f.fg,
                border: `3px solid ${INK}`,
                boxShadow: `7px 7px 0 ${INK}`,
              }}
            >
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3.5"
                  style={{ background: f.tag, color: f.tagText }}
                >
                  {post.tag}
                </span>
                <h2
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: "clamp(20px,2.2vw,24px)", color: f.fg }}
                >
                  {post.title}
                </h2>
                <p
                  className="leading-relaxed mt-3 text-sm"
                  style={{ color: darkCard ? "rgba(242,236,221,0.86)" : "rgba(26,22,19,0.78)" }}
                >
                  {post.excerpt.length > 150 ? `${post.excerpt.slice(0, 150).trimEnd()}…` : post.excerpt}
                </p>
              </div>
              <div
                className="flex items-center justify-between gap-4 text-xs mt-6 font-semibold"
                style={{ color: darkCard ? "rgba(242,236,221,0.72)" : "#6a6258" }}
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </span>
                <span className="inline-flex items-center gap-0.5" style={{ color: darkCard ? ACID : TEAL }}>
                  Read <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
