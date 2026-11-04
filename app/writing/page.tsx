import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import { posts } from "@/app/lib/posts-data";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import WritingList from "./WritingList";
import { SERIES, postsInSeries } from "@/app/lib/series";

// Redesign palette — matches the homepage + post pages.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const ACID = "#C7F03A";

export const metadata: Metadata = {
  title: "Writing — Christopher Dorsey",
  description: "Writing on AI, marketing, enterprise sales, and the future of how technology gets bought and sold.",
  alternates: {
    canonical: "https://chrisdorsey.co/writing",
  },
};

// Pinned "Start here" posts, in reading order. Edit slugs to change the row.
const START_HERE = [
  "how-i-built-campsite-ranger",
  "soundcheck-audio-brand-qa",
  "iab-openproposal-agents-read-every-proposal",
  "openai-dots-agent-reads-cold-email-first",
  "costco-velocity-membership-fee-retail-media",
];

export default function WritingIndex() {
  const pinned = START_HERE.map((slug) => posts.find((p) => p.slug === slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p)
  );
  const listPosts = posts.map(({ slug, title, date, readTime, excerpt, tag }) => ({ slug, title, date, readTime, excerpt, tag }));

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
            Writing
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

        {/* Start here — pinned row */}
        {pinned.length > 0 && (
          <section
            aria-labelledby="start-here"
            className="rounded-2xl p-6 md:p-8 mb-14"
            style={{ background: INK, color: PAPER, border: `3px solid ${INK}`, boxShadow: `8px 8px 0 ${ACID}` }}
          >
            <h2
              id="start-here"
              className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold"
              style={{ color: INK, background: ACID }}
            >
              Start here
            </h2>
            <ol className="grid gap-x-8 md:grid-cols-2">
              {pinned.map((p, i) => (
                <li key={p.slug} style={{ borderTop: "1px solid rgba(242,236,221,0.16)" }}>
                  <Link href={`/writing/${p.slug}`} className="group flex items-start gap-4 py-4">
                    <span className="font-display font-extrabold shrink-0" style={{ fontSize: 26, lineHeight: 1, color: ACID }}>
                      {`0${i + 1}`}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(242,236,221,0.6)" }}>
                        {p.tag} · {p.readTime}
                      </span>
                      <span className="font-display font-bold leading-snug group-hover:underline underline-offset-4" style={{ fontSize: 17, color: PAPER }}>
                        {p.title}
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 ml-auto" style={{ color: ACID }} />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Series */}
        <section aria-labelledby="series-heading" className="mb-14">
          <h2 id="series-heading" className="font-display font-extrabold mb-5" style={{ fontSize: "clamp(24px,3vw,32px)", color: INK }}>
            Series
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`/writing/series/${s.slug}`}
                className="group flex flex-col justify-between rounded-2xl p-5 transition-transform hover:-translate-y-1"
                style={{ background: s.color, color: s.fg, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}
              >
                <span>
                  <span className="block font-display font-extrabold leading-tight" style={{ fontSize: 21 }}>{s.title}</span>
                  <span className="block text-sm leading-relaxed mt-2" style={{ color: "rgba(255,255,255,0.86)" }}>{s.description}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest mt-4">
                  {postsInSeries(s.slug).length} posts <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* All posts, with tag filter chips */}
        <h2 className="font-display font-extrabold mb-5" style={{ fontSize: "clamp(24px,3vw,32px)", color: INK }}>
          Every post
        </h2>
        <WritingList posts={listPosts} />

        <NewsletterSignup source="writing-index" className="mt-14" />
      </main>
    </div>
  );
}
