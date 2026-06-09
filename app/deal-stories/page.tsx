import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

const serif = { fontFamily: "var(--font-fraunces)" };

export const metadata: Metadata = {
  title: "Deal Stories — Christopher Dorsey",
  description:
    "Three enterprise deals, start to finish: closing the first clients in a brand-new AI category, landing first accounts for a first-to-market product, and getting a complex deal past procurement and skeptical buyers.",
  alternates: {
    canonical: "https://chrisdorsey.co/deal-stories",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// All story bodies are placeholders. Each story should be ~150–250 words and
// end with a one-line result containing a number. Anonymize where flagged.
// See FILL-CHECKLIST.md.
// ─────────────────────────────────────────────────────────────────────────────

const stories = [
  {
    label: "FancyAI · New category, no budget line",
    title: "Closing the first agency clients in a category with no budget line",
    color: "#0F6E56",
    bg: "#E1F5EE",
    anonymize: "[FILL: anonymize? Y/N]",
    situation: "[FILL: Situation — what was true when you started; the GEO category was new enough that buyers had no budget line, ~2–4 sentences]",
    obstacle: "[FILL: Obstacle — what made this deal hard, specifically]",
    action: "[FILL: What I did — concrete moves, in order]",
    result: "[FILL: Result — one line, must contain a number]",
  },
  {
    label: "Zeta Global · First-to-market agentic AI",
    title: "Landing the first accounts for a first-to-market agentic AI product",
    color: "#185FA5",
    bg: "#E6F1FB",
    anonymize: "[FILL: anonymize? Y/N]",
    situation: "[FILL: Situation — first email-based AI customer acquisition product to reach market, no contacts or category playbook, ~2–4 sentences]",
    obstacle: "[FILL: Obstacle — what made this deal hard, specifically]",
    action: "[FILL: What I did — concrete moves, in order]",
    result: "[FILL: Result — one line, must contain a number]",
  },
  {
    label: "[FILL: Oracle or Fastly] · Complex enterprise",
    title: "A complex enterprise deal with procurement, legal, and skeptical technical buyers",
    color: "#534AB7",
    bg: "#EEEDFE",
    anonymize: "[FILL: anonymize? Y/N]",
    situation: "[FILL: Situation — pick the Oracle or Fastly deal, ~2–4 sentences]",
    obstacle: "[FILL: Obstacle — procurement, legal, technical skepticism; what specifically]",
    action: "[FILL: What I did — concrete moves, in order]",
    result: "[FILL: Result — one line, must contain a number]",
  },
];

export default function DealStories() {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Nav */}
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link href="/" className="font-bold" style={serif}>
            <span className="text-slate-900">Christopher </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Dorsey</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-14 max-w-2xl">
          <div className="inline-block text-xs uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-4 font-bold">
            Deal stories
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5" style={serif}>
            Three deals, start to finish.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The hard ones. What the situation was, what stood in the way, what I actually did, and what it
            produced.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {stories.map((s) => (
            <article key={s.title} className="bg-white/80 border border-sky-100 rounded-3xl p-8 md:p-10">
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: s.bg, color: s.color }}
              >
                {s.label}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 leading-snug" style={serif}>
                {s.title}
              </h2>
              <div className="space-y-5 text-slate-700 leading-relaxed">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1.5">Situation</p>
                  <p>{s.situation}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1.5">Obstacle</p>
                  <p>{s.obstacle}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1.5">What I did</p>
                  <p>{s.action}</p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-5">
                  <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-1.5">Result</p>
                  <p className="font-semibold text-slate-900">{s.result}</p>
                </div>
              </div>
              {/* Anonymization decision: {s.anonymize} — resolve before publishing */}
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/track-record"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            See the full track record <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
