import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import type { Metadata } from "next";

const serif = { fontFamily: "var(--font-fraunces)" };

export const metadata: Metadata = {
  title: "Work With Me — Christopher Dorsey",
  description:
    "GEO strategy, enterprise sales advisory, and startup counsel from a 15-year GTM leader. Based in Denver, working everywhere.",
  alternates: {
    canonical: "https://chrisdorsey.co/work-with-me",
  },
};

const offerings = [
  {
    label: "GEO Strategy",
    headline: "Make your brand findable in the AI answer layer.",
    body:
      "Most brands have no idea how they appear — or don't appear — when buyers ask ChatGPT, Claude, or Perplexity about their category. I audit how you show up, diagnose the gaps, and build a structured plan to establish and grow your presence before the window closes. This includes schema implementation, citation strategy, content restructuring, and ongoing monitoring. Built for marketing leaders and CMOs who understand that the next SEO moment is already here.",
    tags: ["GEO audit", "LLM visibility", "Content strategy", "Schema markup"],
    color: "#0F6E56",
    bg: "#E1F5EE",
  },
  {
    label: "Enterprise Sales Advisory",
    headline: "Senior GTM leadership without the full-time overhead.",
    body:
      "I work with AI and data companies that need experienced enterprise sales leadership — someone who has carried a quota, built a BoB, and closed complex deals with legal, procurement, and skeptical buyers in the room. I can embed with your team as a fractional VP of Sales, advise your existing sales leadership, help build your ICP and outbound strategy, or take specific deals from stalled to signed. Especially useful for companies moving from product-led to enterprise.",
    tags: ["Fractional VP Sales", "Deal strategy", "ICP targeting", "Outbound build"],
    color: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    label: "Startup Advisory",
    headline: "The strategic partner you bring in when the path isn't obvious.",
    body:
      "I've advised companies from pre-seed through Series D — usually at the moment when product is ready but go-to-market is still a hypothesis. I help founders think through their first enterprise motion, avoid the mistakes that kill early deals, and build the trust with early customers that turns into reference-able revenue. I work with a small number of companies at a time and stay engaged long enough to actually matter.",
    tags: ["Pre-seed → Series D", "GTM strategy", "First enterprise sale", "Founder advisory"],
    color: "#534AB7",
    bg: "#EEEDFE",
  },
];

export default function WorkWithMe() {
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
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
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

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4 font-bold">
            Work with me
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={serif}
          >
            The best outcomes start with the right conversation.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I work with a small number of clients at a time — always on things where I can genuinely move
            the needle. If something below sounds like your situation, let&apos;s talk.
          </p>
        </div>

        {/* Offerings */}
        <div className="space-y-6 mb-20">
          {offerings.map((o) => (
            <div
              key={o.label}
              className="bg-white/80 border border-sky-100 rounded-3xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ background: o.bg, color: o.color }}
                  >
                    {o.label}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug" style={serif}>
                    {o.headline}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{o.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {o.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8" style={serif}>
            How it typically works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
            ].map((s) => (
              <div key={s.step} className="bg-white/60 border border-sky-100 rounded-2xl p-6">
                <div className="text-3xl font-black text-slate-200 mb-3" style={serif}>
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight"
              style={serif}
            >
              Ready to talk?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              I respond to every note personally. If it sounds like a fit, we&apos;ll find time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:ctjdorsey@gmail.com"
                className="flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition text-sm"
              >
                <Mail className="w-4 h-4" />
                ctjdorsey@gmail.com
              </a>
              <a
                href="https://calendar.app.google/WdU29EvH2jzfwNHe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition text-sm"
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
