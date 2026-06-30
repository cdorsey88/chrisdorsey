import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import { posts } from "@/app/lib/posts-data";

// Redesign palette — matches the homepage + post pages.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";
const BLUE = "#2B43E8";
const VIOLET = "#6B4BFF";

export const metadata: Metadata = {
  title: "Thoughts — Christopher Dorsey",
  description: "Writing on AI, marketing, enterprise sales, and the future of how technology gets bought and sold.",
  alternates: {
    canonical: "https://chrisdorsey.co/writing",
  },
};

// Alternating bold card fills, cycled across the full list for variety.
const fills: { bg: string; fg: string; tag: string; tagText: string }[] = [
  { bg: PAPER, fg: INK, tag: BLUE, tagText: "#fff" },
  { bg: BLUE, fg: "#fff", tag: ACID, tagText: INK },
  { bg: PAPER, fg: INK, tag: VIOLET, tagText: "#fff" },
  { bg: VIOLET, fg: "#fff", tag: ACID, tagText: INK },
  { bg: PAPER, fg: INK, tag: TEAL, tagText: "#fff" },
  { bg: INK, fg: PAPER, tag: ACID, tagText: INK },
];

export default function WritingIndex() {
  return (
    <div
      className="min-h-screen grain-overlay"
      style={{
        background: PAPER,
        color: INK,
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Nav */}
      <SiteNav />

      <main className="max-w-5xl mx-auto px-7 py-16">
        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: INK, background: ACID }}
          >
            Thoughts
          </div>
          <h1
            className="font-display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(34px,5.2vw,60px)", lineHeight: 0.98, color: INK }}
          >
            Notes from the field.
          </h1>
          <p className="text-lg mt-4 max-w-2xl leading-relaxed" style={{ color: "#4a4239" }}>
            On AI, marketing, enterprise sales, and the future of how technology gets bought and sold.
          </p>
        </div>

        {/* Posts grid — bold cards matching the new system */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:auto-rows-fr">
          {posts.map((post, i) => {
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
      </main>
    </div>
  );
}
