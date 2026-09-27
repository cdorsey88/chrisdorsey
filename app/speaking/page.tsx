import { ArrowUpRight, Mail, PlayCircle } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

// Redesign palette — matches the homepage + work-with-me.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";

export const metadata: Metadata = {
  title: "Speaking — Christopher Dorsey",
  description:
    "Talks on AI-native selling, category creation, and building without an engineering background, from a fifteen-year enterprise sales leader.",
  alternates: {
    canonical: "https://chrisdorsey.co/speaking",
  },
};

const talks = [
  {
    title: "The Relationship Is the Part AI Can't Copy",
    audience: "Sales leaders, GTM teams, RevOps evaluating AI tooling",
    abstract:
      "AI has compressed research, drafting, and outreach into minutes. What it hasn't touched is the part that actually closes deals: the trust between a buyer and the person selling to them. Drawing on fifteen years of selling technology that didn't have a category yet — including being the first seller in the building, twice — this talk is about what stays human when everything else gets faster.",
    bg: BLUE,
    fg: "#fff",
    chipBg: "rgba(255,255,255,0.16)",
    num: "01",
  },
  {
    title: "First Seller in the Building",
    audience: "Founders, GTM leaders making a first sales hire, category-creation teams",
    abstract:
      "There's no playbook, no budget line, and no case study when you're selling something the market hasn't named yet. This talk breaks down what it actually takes to sell into a category before it exists — twice — and what founders get wrong about hiring their first seller too early, or too late.",
    bg: ACID,
    fg: INK,
    chipBg: "rgba(26,22,19,0.08)",
    num: "02",
  },
  {
    title: "The Non-Engineer Who Ships",
    audience: "Sales and GTM audiences curious about AI-native building and technical enablement",
    abstract:
      "I'm not an engineer. I've also shipped a live paying product, a call assistant I use daily, and an audio QA tool that caught a defect a human reviewer missed — all built pairing with AI coding tools, nights and weekends. This talk is about what “technical” will mean for GTM roles now that building is no longer gated by a CS degree.",
    bg: TEAL,
    fg: "#fff",
    chipBg: "rgba(255,255,255,0.16)",
    num: "03",
  },
];

export default function Speaking() {
  return (
    <div
      className="min-h-screen grain-overlay"
      style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}
    >
      <SiteNav />
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: INK, background: ACID }}
          >
            Speaking
          </div>
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.98] mb-6"
            style={{ fontSize: "clamp(34px,5.4vw,62px)", color: INK }}
          >
            Talks on selling what didn&apos;t exist yet.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#3a332c" }}>
            Plainspoken, no slideware jargon, built from fifteen years of carrying a number through
            four technology shifts. Below are three talks I give often, and I&apos;ll tailor any of
            them to your audience.
          </p>
        </div>

        {/* Video placeholder — honest, not a broken embed */}
        <div
          className="rounded-3xl p-10 mb-16 flex flex-col items-center justify-center text-center"
          style={{ background: CREAM2, border: `3px dashed ${INK}`, minHeight: 220 }}
        >
          <PlayCircle className="w-10 h-10 mb-3" style={{ color: TEAL }} />
          <p className="font-semibold" style={{ color: INK }}>Talk video coming soon.</p>
          <p className="text-sm mt-1 max-w-md" style={{ color: "#6a6258" }}>
            A 3&ndash;5 minute clip goes here once one exists. Until then, the one-sheet and a short
            call cover the same ground.
          </p>
        </div>

        {/* Talks */}
        <div className="space-y-6 mb-16">
          {talks.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: t.bg,
                color: t.fg,
                border: `3px solid ${INK}`,
                boxShadow: `8px 8px 0 ${INK}`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: t.chipBg, color: t.fg }}
                >
                  {t.audience}
                </div>
                <span className="font-display font-extrabold leading-none" style={{ fontSize: 38, opacity: 0.85 }}>
                  {t.num}
                </span>
              </div>
              <h2 className="font-display font-extrabold tracking-tight mb-4 leading-snug" style={{ fontSize: "clamp(22px,2.8vw,30px)" }}>
                {t.title}
              </h2>
              <p className="leading-relaxed" style={{ color: t.fg === "#fff" ? "rgba(255,255,255,0.9)" : "rgba(26,22,19,0.82)" }}>
                {t.abstract}
              </p>
            </div>
          ))}
        </div>

        {/* One-sheet */}
        <div
          className="rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: VIOLET, color: "#fff", border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}
        >
          <div>
            <h3 className="font-display font-bold mb-1" style={{ fontSize: 22 }}>Speaker one-sheet</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              Bio, headshot, topics, and testimonials in one page. A downloadable PDF is in the works
              &mdash; email me and I&apos;ll send the current version directly.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Speaker one-sheet request")}`}
            className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm hover:opacity-90 whitespace-nowrap"
            style={{ background: "#fff", color: INK }}
          >
            <Mail className="w-4 h-4" />
            Request it
          </a>
        </div>

        {/* Contact CTA — separate from the general contact, subject-tagged */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: INK, color: PAPER, border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${TEAL}` }}
        >
          <div className="relative">
            <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold" style={{ color: INK, background: ACID }}>
              For organizers
            </div>
            <h2 className="font-display font-extrabold tracking-tight mb-4 leading-tight" style={{ fontSize: "clamp(28px,4.4vw,42px)" }}>
              Have an event in mind?
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "rgba(242,236,221,0.82)" }}>
              Tell me the audience and the slot length. I respond to every note personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Speaking inquiry")}`}
                className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm hover:opacity-90"
                style={{ background: "#fff", color: INK }}
              >
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://calendar.app.google/WdU29EvH2jzfwNHe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm hover:opacity-90"
                style={{ background: TEAL, color: "#fff" }}
              >
                Book 30 minutes <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
