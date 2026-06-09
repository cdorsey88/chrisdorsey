import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, FileText } from "lucide-react";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

const serif = { fontFamily: "var(--font-fraunces)" };

export const metadata: Metadata = {
  title: "Track Record — Christopher Dorsey",
  description:
    "The career scoreboard: 15 years taking new AI and enterprise technology to market, from first sales hire to Fortune 500 accounts. Numbers, roles, and results.",
  alternates: {
    canonical: "https://chrisdorsey.co/track-record",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALL metrics below are placeholders. Nothing here ships until Chris fills them
// in with real, verifiable numbers. See FILL-CHECKLIST.md at the repo root.
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "[FILL: quota attainment % by year, last 3–4 years]", label: "Quota attainment" },
  { value: "[FILL: total ARR closed / influenced]", label: "ARR closed / influenced" },
  { value: "[FILL: average deal size and largest deal]", label: "Deal sizes" },
  { value: "[FILL: FancyAI — first clients closed, count + days from start]", label: "FancyAI: zero to first clients" },
  { value: "[FILL: Zeta — first accounts closed for net-new AI product, value]", label: "Zeta: net-new category, first accounts" },
];

const roles = [
  {
    company: "FancyAI",
    // ⚠️ Title must match LinkedIn and resume verbatim. Do not copy from elsewhere on the site.
    title: "[FILL: exact FancyAI title — must match LinkedIn and resume verbatim]",
    dates: "[FILL: FancyAI dates]",
    bullets: [
      "First sales hire. Built the go-to-market motion from zero in Generative Engine Optimization, a category most buyers didn't have a budget line for yet. [FILL: first clients closed — count, days from start]",
      "[FILL: second FancyAI bullet with a number — e.g., pipeline built, win rate, ACV]",
    ],
  },
  {
    company: "Zeta Global",
    title: "[FILL: Zeta title]",
    dates: "[FILL: Zeta dates]",
    bullets: [
      "Led GTM for the first email-based AI customer acquisition product to reach market, built on an opted-in email universe of up to 135M US adults. No existing budgets, contacts, or category playbook. [FILL: first accounts closed — count + value]",
      "[FILL: second Zeta bullet with a number — e.g., pipeline generated, verticals opened]",
    ],
  },
  {
    company: "Fastly",
    title: "[FILL: Fastly title]",
    dates: "[FILL: Fastly dates]",
    bullets: [
      "Sold edge infrastructure to technical buyers — engineers who care about credibility, not decks. [FILL: Fastly metric — e.g., book of business size, notable wins]",
      "[FILL: second Fastly bullet with a number]",
    ],
  },
  {
    company: "Oracle",
    title: "[FILL: Oracle title]",
    dates: "[FILL: Oracle dates]",
    bullets: [
      "Managed Fortune 500 relationships including JPMorgan Chase, PepsiCo, Johnson & Johnson, Amazon, and Merck inside one of the largest sales organizations in the world. [FILL: Oracle metric — e.g., portfolio value, attainment]",
      "[FILL: second Oracle bullet with a number]",
    ],
  },
  {
    company: "Cooke + Wax",
    title: "[FILL: Cooke + Wax title]",
    dates: "[FILL: Cooke + Wax dates]",
    bullets: [
      "First hire at an indie NYC ad agency. Helped grow the company more than 300% in one year, past $2M.",
      "[FILL: optional second bullet, or remove]",
    ],
  },
  {
    company: "Crispin Porter + Bogusky",
    title: "[FILL: CP+B title]",
    dates: "[FILL: CP+B dates]",
    bullets: [
      "Helped build the agency's first proactive new-business function at AdAge's Agency of the Decade, contributing to a pitch-win streak of more than $100M in new revenue.",
      "[FILL: optional second bullet, or remove]",
    ],
  },
];

export default function TrackRecord() {
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
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4 font-bold">
            Track record
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4" style={serif}>
            Christopher Dorsey
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-2">
            Senior enterprise sales leader who takes new AI products to market. First sales hire,
            category creator, Fortune 500 closer.
          </p>
          <p className="text-sm text-slate-500 mb-6">Denver, CO · Open to remote</p>
          <a
            href="[FILL: link to PDF resume]"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            <FileText className="w-4 h-4" /> Download resume (PDF)
          </a>
        </div>

        {/* By the numbers */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={serif}>
            By the numbers
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/80 border border-sky-100 rounded-2xl p-6">
                <div className="text-xl font-black text-slate-900 mb-1 leading-snug" style={serif}>
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Role by role */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={serif}>
            Role by role
          </h2>
          <div className="space-y-5">
            {roles.map((r) => (
              <div key={r.company} className="bg-white/80 border border-sky-100 rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold tracking-tight" style={serif}>
                    {r.company} <span className="text-slate-500 font-medium text-base">· {r.title}</span>
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">{r.dates}</span>
                </div>
                <ul className="space-y-2">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="text-slate-700 leading-relaxed text-[15px] flex gap-2.5">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Deal stories cross-link */}
        <div className="mb-16">
          <Link
            href="/deal-stories"
            className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-blue-600 transition" style={serif}>
                Three deals, start to finish.
              </h3>
              <p className="text-slate-600 text-sm">How the hard ones actually got closed. Situation, obstacle, what I did, result.</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition shrink-0" />
          </Link>
        </div>

        {/* What I'm looking for */}
        <div className="mb-16 bg-gradient-to-br from-sky-50 to-emerald-50 border-l-4 border-blue-500 rounded-r-2xl p-7">
          <h2 className="text-xl font-bold tracking-tight mb-3" style={serif}>
            What I&apos;m looking for
          </h2>
          <p className="text-slate-700 leading-relaxed">
            [FILL: target role types, e.g., Director/VP, Strategic AE; fully remote; AI-native companies — 2–3 sentences]
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
        </div>
      </main>
    </div>
  );
}
