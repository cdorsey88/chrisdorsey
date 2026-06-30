import { ArrowUpRight, Mail } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/app/lib/site-config";
import Reveal from "./Reveal";

// Redesign palette — matches the homepage.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";

export const metadata: Metadata = {
  title: "Work With Me — Christopher Dorsey",
  description:
    "Enterprise sales advisory, startup GTM counsel, and account-expansion strategy from a senior sales leader who takes new AI products to market. Based in Denver, working everywhere.",
  alternates: {
    canonical: "https://chrisdorsey.co/work-with-me",
  },
};

// Three services as bold color blocks: teal / blue / acid.
const offerings = [
  {
    label: "Enterprise Sales Advisory",
    headline: "Senior GTM leadership without the full-time overhead.",
    body:
      "I work with AI and data companies that need experienced enterprise sales leadership — someone who has carried a quota, built a BoB, and closed complex deals with legal, procurement, and skeptical buyers in the room. I can embed with your team as a fractional VP of Sales, advise your existing sales leadership, help build your ICP and outbound strategy, or take specific deals from stalled to signed. Especially useful for companies moving from product-led to enterprise.",
    tags: ["Fractional VP Sales", "Deal strategy", "ICP targeting", "Outbound build"],
    bg: BLUE,
    fg: "#fff",
    chipBg: "rgba(255,255,255,0.16)",
    chipFg: "#fff",
    num: "01",
  },
  {
    label: "Startup Advisory",
    headline: "The strategic partner you bring in when the path isn't obvious.",
    body:
      "I've advised companies from pre-seed through Series D — usually at the moment when product is ready but go-to-market is still a hypothesis. I help founders think through their first enterprise motion, avoid the mistakes that kill early deals, and build the trust with early customers that turns into reference-able revenue. I work with a small number of companies at a time and stay engaged long enough to actually matter.",
    tags: ["Pre-seed → Series D", "GTM strategy", "First enterprise sale", "Founder advisory"],
    bg: ACID,
    fg: INK,
    chipBg: "rgba(26,22,19,0.08)",
    chipFg: INK,
    num: "02",
  },
  {
    label: "Account Growth & Expansion",
    headline: "Turn the accounts you already have into your biggest growth channel.",
    body:
      "The work I'm best at: growing revenue inside existing accounts. I help teams build the expansion roadmap — mapping the untapped opportunities in a strategic account, deepening relationships beyond the original buyer, and turning a single deal into a durable, multi-year partnership. Built for sales and customer success leaders who know the next dollar is cheaper to earn from a current client than a cold one.",
    tags: ["Account expansion", "Upsell & cross-sell", "Strategic accounts", "Retention"],
    bg: TEAL,
    fg: "#fff",
    chipBg: "rgba(255,255,255,0.16)",
    chipFg: "#fff",
    num: "03",
  },
];

export default function WorkWithMe() {
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

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: INK, background: ACID }}
          >
            Work with me
          </div>
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.98] mb-6"
            style={{ fontSize: "clamp(34px,5.4vw,62px)", color: INK }}
          >
            The best outcomes start with the right conversation.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#3a332c" }}>
            I work with a small number of clients at a time — always on things where I can genuinely move
            the needle. If something below sounds like your situation, let&apos;s talk.
          </p>
        </div>

        {/* Offerings — bold color blocks */}
        <div className="space-y-6 mb-20">
          {offerings.map((o, i) => {
            const rot = [-0.6, 0.5, -0.4][i % 3];
            return (
              <Reveal key={o.label}>
                <div
                  className="rounded-3xl p-8 md:p-10"
                  style={{
                    background: o.bg,
                    color: o.fg,
                    border: `3px solid ${INK}`,
                    boxShadow: `8px 8px 0 ${INK}`,
                    transform: `rotate(${rot}deg)`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                    <div
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: o.chipBg, color: o.chipFg }}
                    >
                      {o.label}
                    </div>
                    <span className="font-display font-extrabold leading-none" style={{ fontSize: 38, opacity: 0.85 }}>
                      {o.num}
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold tracking-tight mb-4 leading-snug" style={{ fontSize: "clamp(22px,2.8vw,30px)" }}>
                    {o.headline}
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: o.fg === "#fff" ? "rgba(255,255,255,0.9)" : "rgba(26,22,19,0.82)" }}>
                    {o.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: o.chipBg, color: o.chipFg }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* How it works */}
        <div className="mb-20">
          <Reveal>
            <h2 className="font-display font-extrabold tracking-tight mb-8" style={{ fontSize: "clamp(24px,3.4vw,34px)", color: INK }}>
              How it typically works
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Start with a conversation",
                body: "No pitch deck, no RFP. A 30-minute call to understand your situation and whether I can actually help.",
              },
              {
                step: "02",
                title: "Agree on the scope",
                body: "Every engagement is different. Some are a single audit. Some are ongoing. We'll define what success looks like before we start.",
              },
              {
                step: "03",
                title: "Do the work",
                body: "I stay involved for the full duration — not just the kickoff. The best outcomes come from staying close to the problem.",
              },
            ].map((s, i) => {
              const accent = [BLUE, ACID, TEAL][i % 3];
              return (
                <Reveal key={s.step}>
                  <div
                    className="rounded-2xl p-6 h-full"
                    style={{ background: CREAM2, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${accent}` }}
                  >
                    <div className="font-display font-extrabold mb-3 leading-none" style={{ fontSize: 36, color: accent }}>
                      {s.step}
                    </div>
                    <h3 className="font-display font-bold mb-2" style={{ color: INK }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#3a332c" }}>{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* CTA — generous, not pushy */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: INK, color: PAPER, border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${TEAL}` }}
        >
          <div className="relative">
            <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold" style={{ color: INK, background: ACID }}>
              No pressure
            </div>
            <h2
              className="font-display font-extrabold tracking-tight mb-4 leading-tight"
              style={{ fontSize: "clamp(28px,4.4vw,42px)" }}
            >
              Want to talk it through?
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "rgba(242,236,221,0.82)" }}>
              I respond to every note personally. If it&apos;s a fit, we&apos;ll find time. If it&apos;s not, I&apos;ll
              probably know who you should talk to instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
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
