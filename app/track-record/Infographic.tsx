"use client";

import { useEffect, useRef, useState } from "react";

const serif = { fontFamily: "var(--font-fraunces)" };

// ── Scoreboard ───────────────────────────────────────────────────────────────
// All numbers below are real, sourced from resume (Jan 2026) and LinkedIn.

type Stat = { prefix: string; end: number; suffix: string; label: string; sub: string; text?: string };

const stats: Stat[] = [
  { prefix: "", end: 15, suffix: "+", label: "Years selling technology", sub: "Agency, enterprise, AI frontier" },
  { prefix: "", end: 7, suffix: "-figure", text: "7-figure", label: "Deals closed, repeatedly", sub: "Enterprise pilots through multi-year" },
  { prefix: "", end: 8, suffix: "-figure", text: "8-figure", label: "Client relationships managed", sub: "Fortune 500 books of business" },
  { prefix: "", end: 3, suffix: "", label: "Categories sold before budget lines existed", sub: "AI acquisition, GEO, contextual" },
  { prefix: "$", end: 100, suffix: "M+", label: "Pitch-win streak", sub: "CP+B, first proactive new-business function" },
  { prefix: "", end: 108, suffix: "%", label: "Net revenue retention", sub: "Fastly, technical buyers" },
  { prefix: "", end: 60, suffix: "%", label: "Book growth in one year", sub: "Oracle, $3.1M to $4.9M" },
  { prefix: "$", end: 4, suffix: "M+", label: "Enterprise RFPs led and won", sub: "Oracle, Fortune 500 evaluations" },
  { prefix: "", end: 2, suffix: "×", label: "First seller in the building", sub: "Cooke + Wax hire, FancyAI advisory" },
];

function CountUp({ stat, started }: { stat: Stat; started: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started || stat.text) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVal(stat.end);
      return;
    }
    const dur = 900;
    const t0 = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(stat.end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, stat.end]);
  if (stat.text) return <span>{stat.text}</span>;
  return (
    <span>
      {stat.prefix}
      {val}
      {stat.suffix}
    </span>
  );
}

// ── Career arc ───────────────────────────────────────────────────────────────

type Chapter = {
  company: string;
  years: string;
  era: "agency" | "enterprise" | "ai";
  headline: string;
  detail: string;
  number: string;
  numberLabel: string;
};

const chapters: Chapter[] = [
  {
    company: "CP+B",
    years: "2010–12",
    era: "agency",
    headline: "Where the throughline started",
    detail:
      "Chosen for the team that built the first proactive new-business function at AdAge's Agency of the Decade, when CP+B was one of the best agencies in the world. Creating demand where none existed has been the job ever since. Clients included Microsoft Windows 8, Groupon, and Vail Resorts. Also hand-modeled internationally for Best Buy and Burger King. Seriously.",
    number: "$100M+",
    numberLabel: "pitch-win streak",
  },
  {
    company: "SS+K",
    years: "2012–13",
    era: "agency",
    headline: "The Obama campaign's agency",
    detail:
      "New business development at the agency behind the Obama 2008 and 2012 campaigns. Worked across Chevrolet, J.P. Morgan, and MSNBC.",
    number: "2",
    numberLabel: "presidential campaigns in the building",
  },
  {
    company: "Cooke + Wax",
    years: "2013–14",
    era: "agency",
    headline: "First hire, fastest year",
    detail:
      "First full-time hire at an indie NYC ad agency. Grew the company past $2M in a single year, and assembled a heroic amount of IKEA furniture along the way.",
    number: "300%+",
    numberLabel: "growth in one year",
  },
  {
    company: "GMMB",
    years: "2015–18",
    era: "agency",
    headline: "Pitches that paid the bills",
    detail:
      "Senior digital strategist and new-business lead at the largest Democratic paid-media firm in the US. Reframed client strategies around performance and scale, lifting annual contract values 25–40%.",
    number: "$4M+",
    numberLabel: "net-new business won",
  },
  {
    company: "Oracle",
    years: "2018–19",
    era: "enterprise",
    headline: "The mid-market sprint",
    detail:
      "New logos against entrenched competitors: GoPro, Intuit, MetLife, Farmers. Grew the book from $3.1M to $4.9M in a year.",
    number: "60%",
    numberLabel: "YoY book growth",
  },
  {
    company: "Fastly",
    years: "2020",
    era: "enterprise",
    headline: "Selling to engineers",
    detail:
      "Edge infrastructure for 25 accounts including Condé Nast, The New York Times, and MLS. Technical buyers don't reward decks; they reward credibility.",
    number: "108%",
    numberLabel: "net revenue retention",
  },
  {
    company: "Oracle",
    years: "2021–24",
    era: "enterprise",
    headline: "The biggest room",
    detail:
      "Ran Oracle Advertising's largest enterprise relationship (Amazon), driving $1M+ in incremental revenue through joint business plans. Expanded Pepsi, J&J, and GSK. Led enterprise RFPs exceeding $4M. Tapped by NA executive leadership to represent all North American sellers, carrying market feedback on contextual audience, third-party data, and measurement products back to the people building them.",
    number: "#1",
    numberLabel: "largest client relationship at Oracle Advertising",
  },
  {
    company: "Zeta Global",
    years: "2024–26",
    era: "ai",
    headline: "A product with no category",
    detail:
      "Took the first email-based AI acquisition product to market, built on a 250M+ person opted-in universe. No budgets existed for it, so the job was creating them. Closed $1.5M+ in pilot and follow-on revenue with new enterprise logos.",
    number: "$1.5M+",
    numberLabel: "closed on a first-to-market product",
  },
  {
    company: "FancyAI",
    years: "2026–",
    era: "ai",
    headline: "First seller in the building, again",
    detail:
      "An advisory and consulting engagement as FancyAI's first seller: building the go-to-market motion from zero in Generative Engine Optimization, a category most buyers don't have a budget line for yet. The second time starting a sales motion from scratch.",
    number: "0→1",
    numberLabel: "building the playbook in real time",
  },
];

const eraStyles: Record<Chapter["era"], { dot: string; ring: string; label: string }> = {
  agency: { dot: "bg-violet-500", ring: "ring-violet-300", label: "Agency years" },
  enterprise: { dot: "bg-emerald-500", ring: "ring-emerald-300", label: "Enterprise data & infrastructure" },
  ai: { dot: "bg-cyan-500", ring: "ring-cyan-300", label: "AI frontier" },
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function Infographic() {
  const [active, setActive] = useState(7);
  const score = useInView<HTMLDivElement>();
  const arc = useInView<HTMLDivElement>();
  const chapter = chapters[active];
  const era = eraStyles[chapter.era];

  return (
    <>
      {/* Scoreboard */}
      <div className="mb-16" ref={score.ref}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={serif}>
          By the numbers
        </h2>
        <p className="text-sm text-slate-500 mb-6">Every figure below is from the resume. No rounding up.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white/80 border border-sky-100 rounded-2xl p-6 transition-all duration-500"
              style={{
                opacity: score.inView ? 1 : 0,
                transform: score.inView ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div className="text-3xl font-black text-slate-900 mb-1 leading-none" style={serif}>
                <CountUp stat={s} started={score.inView} />
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">{s.label}</div>
              <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Career arc */}
      <div className="mb-16" ref={arc.ref}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={serif}>
          The arc
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Fifteen years in three acts. Tap a chapter; one number per stop.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5 text-xs text-slate-500">
          {(Object.keys(eraStyles) as Chapter["era"][]).map((k) => (
            <span key={k} className="inline-flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${eraStyles[k].dot}`} />
              {eraStyles[k].label}
            </span>
          ))}
        </div>

        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-[9px] h-0.5 bg-slate-200" aria-hidden="true" />
          <div
            className="absolute left-0 top-[9px] h-0.5 bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400 transition-all duration-1000"
            style={{ width: arc.inView ? "100%" : "0%" }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-3 sm:grid-cols-9 gap-y-6">
            {chapters.map((c, i) => {
              const st = eraStyles[c.era];
              const isActive = i === active;
              return (
                <button
                  key={`${c.company}-${c.years}`}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
                  style={{
                    opacity: arc.inView ? 1 : 0,
                    transition: "opacity 400ms",
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <span
                    className={`w-[18px] h-[18px] rounded-full border-2 border-white shadow ${st.dot} transition-transform ${
                      isActive ? `scale-125 ring-2 ${st.ring}` : "group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`text-[11px] leading-tight text-center font-semibold ${
                      isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  >
                    {c.company}
                    <span className="block font-normal text-slate-400">{c.years}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={active}
          className="bg-white/80 border border-sky-100 rounded-2xl p-7 grid sm:grid-cols-[1fr_auto] gap-6 items-center"
          style={{ animation: "tr-fade 350ms ease both" }}
        >
          <div>
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <h3 className="text-xl font-bold tracking-tight" style={serif}>
                {chapter.headline}
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {chapter.company} · {chapter.years}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed text-[15px]">{chapter.detail}</p>
          </div>
          <div className="text-center sm:text-right sm:pl-6 sm:border-l sm:border-sky-100">
            <div className="text-4xl font-black text-slate-900 leading-none" style={serif}>
              {chapter.number}
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2 max-w-[160px] sm:ml-auto">
              {chapter.numberLabel}
            </div>
          </div>
        </div>
        <style>{`@keyframes tr-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`}</style>
      </div>

      {/* Receipts */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6" style={serif}>
          Receipts
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Agency of the Decade alum",
            "Fortune 500 closer",
            "NA sellers' voice to Oracle product leadership",
            "Two presidential campaigns' agency",
            "Sells AI, builds with AI",
            "International hand model (retired)",
          ].map((b) => (
            <span
              key={b}
              className="text-sm font-medium text-slate-700 bg-white/80 border border-sky-100 rounded-full px-4 py-2"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
