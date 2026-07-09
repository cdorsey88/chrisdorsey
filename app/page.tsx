"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight, Mail, Code2, Users, Calendar, Clock, Compass, ExternalLink,
} from "lucide-react";
import { posts as allPosts } from "@/app/lib/posts-data";
import { CONTACT_EMAIL, SHOW_TESTIMONIALS } from "@/app/lib/site-config";
import Testimonials from "@/app/components/Testimonials";

const MountainMark = ({ id = "mtn" }: { id?: string }) => (
  <svg
    width="30" height="22" viewBox="0 0 30 22"
    fill="none"
    aria-hidden="true"
    className="mountain-mark shrink-0"
  >
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#334E8C" />
        <stop offset="100%" stopColor="#0F6E56" />
      </linearGradient>
    </defs>
    <path
      d="M1 21 L10.5 3 Q11 2 11.6 3 L16 11 L19 6 Q19.5 5.2 20 6 L29 21 Q29.3 21.8 28.4 21.8 L1.7 21.8 Q0.7 21.8 1 21Z"
      fill={`url(#${id}-grad)`}
    />
    <path d="M9 9 L11 5.5 L13 9 L11 12Z" fill="#F0F7FA" opacity="0.85" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";
const MAGENTA = "#0E9F86";

/* ---------------------------------------------------------------------------
   Scroll progress bar — slim fixed indicator at the very top of the viewport.
   Width tracks document scroll 0→100%; color steps teal→blue→violet→acid via a
   fixed-attachment gradient on the bar. rAF-throttled scroll listener. The bar
   stays visible under prefers-reduced-motion (it's an indicator) — CSS just
   drops the width easing in that case.
--------------------------------------------------------------------------- */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = barRef.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}

// Reveal-on-scroll hook (IntersectionObserver). Adds .in to the element.
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// One reveal wrapper element.
function Reveal({
  as: Tag = "div",
  className = "",
  children,
  style,
}: {
  as?: "div" | "section";
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------------
   Connector hub — Chris at the center of a network. Lines draw out to people,
   pulses travel along them, and a rotating "I'll connect you with ___" line.
   Ported from the mockup; React-idiomatic + prefers-reduced-motion gated.
--------------------------------------------------------------------------- */
const ROTATOR_WORDS = [
  "creatives",
  "CMOs",
  "data leaders",
  "AI engineers",
  "investors",
  "agency execs",
  "the right buyer",
];

function ConnectorHub() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [rotWord, setRotWord] = useState(ROTATOR_WORDS[0]);
  const [rotVisible, setRotVisible] = useState(true);

  // Line draw-on + traveling pulses.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lines = Array.from(svg.querySelectorAll<SVGLineElement>(".cline"));
    const pulses = Array.from(svg.querySelectorAll<SVGCircleElement>(".cpulse"));

    lines.forEach((l, i) => {
      const len = Math.hypot(
        l.x2.baseVal.value - l.x1.baseVal.value,
        l.y2.baseVal.value - l.y1.baseVal.value
      );
      l.style.strokeDasharray = String(len);
      if (reduce) {
        l.style.strokeDashoffset = "0";
        return;
      }
      l.style.strokeDashoffset = String(len);
      l.style.transition = `stroke-dashoffset .9s ease ${i * 0.12}s`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          l.style.strokeDashoffset = "0";
        })
      );
    });

    if (reduce) return;

    let raf = 0;
    let startTimer = 0;
    const start = performance.now();
    const frame = (t: number) => {
      const elapsed = t - start;
      pulses.forEach((p, i) => {
        const L = lines[i];
        if (!L) return;
        const x2 = L.x2.baseVal.value;
        const y2 = L.y2.baseVal.value;
        const dur = 2600;
        const ph = i * 330;
        const tt = ((elapsed + ph) % dur) / dur;
        p.setAttribute("cx", (460 + (x2 - 460) * tt).toFixed(1));
        p.setAttribute("cy", (180 + (y2 - 180) * tt).toFixed(1));
        p.setAttribute(
          "opacity",
          (tt < 0.1 ? tt * 10 : tt > 0.9 ? (1 - tt) * 10 : 1).toFixed(2)
        );
      });
      raf = requestAnimationFrame(frame);
    };
    startTimer = window.setTimeout(() => {
      raf = requestAnimationFrame(frame);
    }, 900);

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Rotating word.
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let wi = 0;
    const id = window.setInterval(() => {
      wi = (wi + 1) % ROTATOR_WORDS.length;
      setRotVisible(false);
      window.setTimeout(() => {
        setRotWord(ROTATOR_WORDS[wi]);
        setRotVisible(true);
      }, 200);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Reveal as="section">
      <div className="text-3xl md:text-5xl font-extrabold font-display leading-[0.95]" style={{ color: INK, maxWidth: "20ch" }}>
        Chances are, I already know who you should talk to.
      </div>
      <p className="text-base md:text-lg mt-4 max-w-2xl" style={{ color: "#4a4239" }}>
        Four industries, fifteen years, one deep network — from Fortune 500 CMOs
        to the creatives who make the work. Tell me the gap and I&apos;ll make the
        introduction. No fee, no angle — I truly just enjoy connecting people.
        Things like that tend to come around.
      </p>
      <div className="font-display font-extrabold mt-5" style={{ fontSize: "clamp(22px,4vw,40px)", color: INK }}>
        I&apos;ll connect you with{" "}
        <span
          aria-live="polite"
          style={{
            color: TEAL,
            borderBottom: `6px solid ${ACID}`,
            display: "inline-block",
            transition: "opacity .2s ease",
            opacity: rotVisible ? 1 : 0,
          }}
        >
          {rotWord}
        </span>
        .
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 920 360"
        className="w-full h-auto block mx-auto mt-6"
        style={{ maxWidth: 940 }}
        role="img"
        aria-label="Chris at the center of a network, connected to Fortune 500 CMOs, creatives, data leaders, investors, agency execs, and engineers and product managers."
      >
        <g stroke={INK} strokeWidth={2} strokeLinecap="round">
          <line className="cline" x1="460" y1="180" x2="150" y2="64" />
          <line className="cline" x1="460" y1="180" x2="770" y2="64" />
          <line className="cline" x1="460" y1="180" x2="80" y2="180" />
          <line className="cline" x1="460" y1="180" x2="840" y2="180" />
          <line className="cline" x1="460" y1="180" x2="160" y2="300" />
          <line className="cline" x1="460" y1="180" x2="760" y2="300" />
        </g>
        <g>
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
          <circle className="cpulse" r="5" fill={INK} opacity="0" />
        </g>
        <g fontFamily="Inter,sans-serif" fontSize="15" fontWeight={600} textAnchor="middle">
          <g><rect x="75" y="46" width="150" height="36" rx="18" fill={BLUE} /><text x="150" y="69" fill="#fff">Fortune 500 CMOs</text></g>
          <g><rect x="712" y="46" width="116" height="36" rx="18" fill={VIOLET} /><text x="770" y="69" fill="#fff">Creatives</text></g>
          <g><rect x="16" y="162" width="128" height="36" rx="18" fill={ACID} /><text x="80" y="185" fill={INK}>Data leaders</text></g>
          <g><rect x="788" y="162" width="104" height="36" rx="18" fill={MAGENTA} /><text x="840" y="185" fill="#fff">Investors</text></g>
          <g><rect x="95" y="282" width="130" height="36" rx="18" fill={VIOLET} /><text x="160" y="305" fill="#fff">Agency execs</text></g>
          <g><rect x="684" y="282" width="152" height="36" rx="18" fill={BLUE} /><text x="760" y="305" fill="#fff">Engineers &amp; PMs</text></g>
        </g>
        <defs>
          <clipPath id="hubclip"><circle cx="460" cy="180" r="46" /></clipPath>
        </defs>
        <image href="/headshot.jpg" x="414" y="134" width="92" height="92" clipPath="url(#hubclip)" preserveAspectRatio="xMidYMid slice" />
        <circle cx="460" cy="180" r="46" fill="none" stroke={INK} strokeWidth={3} />
      </svg>

      <div className="text-center mt-2">
        <a
          href="#contact"
          className="inline-block font-semibold text-base px-7 py-3.5 rounded-full lift"
          style={{ background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
        >
          Tell me what you need →
        </a>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------------------
   Evolution band — scrolling marquee.
--------------------------------------------------------------------------- */
function EvolutionMarquee() {
  const stages = ["Advertising", "CTV", "Digital", "Social", "Programmatic", "Data", "Measurement", "AI", "Agents", "Marketing", "MadTech", "Consulting"];
  const Segment = () => (
    <span className="inline-flex items-center" style={{ gap: 40, paddingRight: 40 }}>
      {stages.map((s) => (
        <span key={s} className="inline-flex items-center" style={{ gap: 40 }}>
          {s}
          <i style={{ fontStyle: "normal", color: ACID }}>✦</i>
        </span>
      ))}
    </span>
  );
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden"
      style={{ background: INK, color: PAPER, padding: "14px 0", borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}
    >
      <div
        className="marquee-track font-display font-bold"
        style={{ fontSize: 28, gap: 40 }}
      >
        <Segment />
        <Segment />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Track-record band — count-up numbers (kept from original, re-skinned).
--------------------------------------------------------------------------- */
const bandStats: { num?: number; suffix?: string; text?: string; label: string }[] = [
  { num: 15, suffix: "+", label: "Years selling creativity, data, and technology" },
  { num: 2, suffix: "×", label: "First seller in the building" },
  { text: "7‑figure", label: "Deals closed, repeatedly" },
  { text: "8‑figure", label: "Client relationships managed" },
];

function TrackRecordBand() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [tick, setTick] = useState(0);

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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(1);
      return;
    }
    const t0 = performance.now();
    let raf: number;
    const step = (t: number) => {
      const p = Math.min((t - t0) / 2000, 1);
      setTick(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <section aria-label="Track record highlights" className="relative pt-2 pb-14 px-7">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div
          className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12"
          style={{
            background: INK,
            color: PAPER,
            border: `3px solid ${INK}`,
            boxShadow: `10px 10px 0 ${TEAL}`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 900ms ease, transform 900ms ease",
          }}
        >
          <div className="relative flex flex-col xl:flex-row xl:items-center gap-10">
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest font-bold mb-8" style={{ color: ACID }}>Track record</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-8">
                {bandStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 1000ms ease ${300 + i * 220}ms, transform 1000ms ease ${300 + i * 220}ms`,
                    }}
                  >
                    <div className="font-extrabold leading-none font-display whitespace-nowrap" style={{ color: ACID, fontSize: "clamp(1.25rem, 3.6vw, 2.5rem)" }}>
                      {stat.text ?? `${Math.round((stat.num ?? 0) * tick)}${stat.suffix}`}
                    </div>
                    <div
                      className="h-0.5 rounded-full mt-3 mb-2.5"
                      style={{
                        background: TEAL,
                        width: inView ? "2.25rem" : "0rem",
                        transition: `width 1400ms ease ${700 + i * 220}ms`,
                      }}
                    />
                    <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(242,236,221,0.65)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="shrink-0"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1000ms ease 1300ms, transform 1000ms ease 1300ms",
              }}
            >
              <Link
                href="/track-record"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm lift"
                style={{ background: TEAL, color: "#fff" }}
              >
                See the full track record <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ChrisDorseySite() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clients = [
    { name: "JPMorgan Chase",      domain: "jpmorganchase.com" },
    { name: "Microsoft",           domain: "microsoft.com" },
    { name: "Amazon",              domain: "amazon.com" },
    { name: "PepsiCo",             domain: "pepsico.com" },
    { name: "Johnson & Johnson",   domain: "jnj.com" },
    { name: "Merck",               domain: "merck.com" },
    { name: "Oracle",              domain: "oracle.com" },
    { name: "Vail Resorts",        domain: "vailresorts.com", logoClass: "h-12" },
    { name: "Stitch Fix",          domain: "stitchfix.com" },
    { name: "Groupon",             domain: "groupon.com" },
    { name: "JCPenney",            domain: "jcpenney.com" },
    { name: "JSX",                 domain: "jsx.com" },
  ];

  const posts = allPosts.slice(0, 4);

  // Era cards — warming gray→teal toward "now".
  const eras = [
    { title: "Creative & PR", year: "2009", desc: "Crispin Porter + Bogusky — Agency of the Decade. Built the first proactive new-business function.", bg: CREAM2, fg: INK, border: INK },
    { title: "Digital", year: "2013", desc: "First hire at an indie NYC shop. Grew it 300% in a year.", bg: ACID, fg: INK, border: INK },
    { title: "Data", year: "2018", desc: "Oracle — managed Amazon, J&J, PepsiCo. Edge infrastructure at Fastly.", bg: BLUE, fg: "#fff", border: BLUE },
    { title: "AI acquisition", year: "2024", desc: "Zeta Global — first email-based AI customer-acquisition product to market.", bg: VIOLET, fg: "#fff", border: VIOLET },
    { title: "AI & agents", year: "now", desc: "Advising founders, building with the AI tools I sell.", bg: TEAL, fg: "#fff", border: TEAL },
  ];

  const communityBuilds = [
    {
      title: "Clay Custom Signals",
      by: "Clay",
      desc: "Turn any data point Clay can reach into a buying signal, then auto-trigger personalized outreach off it. The operational backbone of signal-based selling: outreach fired on actual buyer behavior instead of static lists.",
      url: "https://www.clay.com/signals",
    },
    {
      title: "Selling AI in 2026: Selling Is Easy. Staying In Is Everything",
      by: "Matt McIlwain × Madrona",
      desc: "The best ground-level read on enterprise AI sales this year. Pilots are easy to land now; the renewal is the real sale, and it's effectively decided in the first 90 days of production. The 45-day pilot discipline alone is worth the click.",
      url: "https://www.madrona.com/enterprise-ai-sales-2026-selling-is-easy-staying-in-is-everything/",
    },
    {
      title: "Mission Andromeda: Gong Opens Its Revenue AI to Outside Agents",
      by: "Gong",
      desc: "Gong added native Model Context Protocol support, so agents living in Salesforce, Copilot, or your own stack can pull deal and conversation insight directly, with controls over what they see. If you run a revenue org, this is the reference for what an interoperable AI stack looks like instead of one more walled garden.",
      url: "https://www.gong.io/press/gong-launches-mission-andromeda-expanding-its-revenue-ai-os-to-enablement-and-account-management",
    },
    {
      title: "Sierra Raises $950M as the Race to Own Enterprise AI Gets Serious",
      by: "TechCrunch",
      desc: "Bret Taylor's Sierra raised $950M at roughly a $15.8B valuation, with more than 40% of the Fortune 50 already running its customer agents. The seller's read is in the model: this is the application-layer company built on top of OpenAI and Anthropic, capturing the enterprise relationship the model makers don't own. Worth studying for how an agent vendor lands the Fortune 50 and prices on outcomes instead of seats.",
      url: "https://techcrunch.com/2026/05/04/sierra-raises-950m-as-the-race-to-own-enterprise-ai-gets-serious/",
    },
  ];

  // Each build card needs a clickable or concrete proof element before it ships.
  // proofUrl renders a link; proofText renders an outcome line. See FILL-CHECKLIST.md.
  const builds = [
    {
      title: "SMB Business Operations Tools",
      stack: "Pro-bono · Claude API · Automation · Local SEO",
      desc: "Custom AI tools for main-street businesses, built pro bono. I automate the repetitive admin, sharpen how they show up in search and AI answers, and replace the bloated software they only half-use — so local operators can compete and stay in business.",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: null as string | null,
    },
    {
      title: "/client-brief slash command",
      stack: "Claude Code",
      desc: "A custom slash command that pulls public signals on a prospect and drafts a discovery-ready brief in under a minute.",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: "See it work",
    },
    {
      title: "AI category landscape mapping",
      stack: "Research · Synthesis · Sales Enablement",
      desc: "Living competitive maps and capability matrices for emerging AI categories — from agentic sales tools to answer-engine platforms — including a five-tier landscape with a 10-vendor capability matrix.",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: "See a sample",
    },
  ];

  // FAQ — plain extractable text (also mirrored in FAQPage JSON-LD in layout.tsx).
  const faqs = [
    {
      q: "What does Chris Dorsey do?",
      a: "Chris is a senior enterprise sales and go-to-market leader who takes new technology to market — AI first, then data and MadTech. Across fifteen years he has been the first seller in the building twice, created categories, and closed Fortune 500 accounts, from agency creative at Crispin Porter + Bogusky to data at Oracle, edge infrastructure at Fastly, and AI customer acquisition at Zeta Global.",
    },
    {
      q: "Who does Chris work with, and who can he introduce you to?",
      a: "Chris is a connector. Fifteen years across four industries put him a message away from Fortune 500 CMOs, creatives, data leaders, investors, agency execs, and engineers and PMs. Tell him what you're trying to do and odds are he already knows who you should talk to. Introductions are free — no fee, no catch.",
    },
    {
      q: "Is Chris available for roles or advisory?",
      a: "Yes. He's deliberately focused on senior individual-contributor go-to-market roles — Account Director, Strategic Account Manager, Director of Customer Success or Partnerships — at AI, retail media, AdTech/MarTech, and enterprise SaaS companies. He's led teams and chooses to be hands-on: carrying a number and owning the client relationships, not managing. He responds to every note personally.",
    },
    {
      q: "Where is Chris based?",
      a: "Denver, Colorado — working remotely or hybrid across the United States.",
    },
    {
      q: "What industries does Chris cover?",
      a: "AI go-to-market, data, and MadTech, with deep roots in enterprise SaaS, retail media, AdTech, and agency creative. He has sold through every major marketing shift — broadcast, digital, social, programmatic, data, AI, and now agents.",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-x-hidden grain-overlay"
      style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}
    >
      {/* Scroll progress indicator — color shifts teal→blue→violet→acid */}
      <ScrollProgress />

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrollY > 50
            ? { background: "rgba(242,236,221,0.85)", backdropFilter: "blur(8px)", borderBottom: `1px solid rgba(26,22,19,0.12)` }
            : { background: "transparent" }
        }
        aria-label="Primary navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 cursor-pointer select-none hover:opacity-80 transition-opacity"
          >
            <MountainMark />
            <span className="font-display whitespace-nowrap" style={{ fontSize: 21, fontWeight: 800, lineHeight: 1, color: INK, transform: "translateY(1px)" }}>
              Chris <span style={{ color: TEAL }}>Dorsey</span>
            </span>
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: INK }}>
              <a href="#about"   className="font-medium hover:opacity-60 transition">About</a>
              <Link href="/track-record" className="font-medium hover:opacity-60 transition">Track Record</Link>
              <a href="#now"     className="font-medium hover:opacity-60 transition">Now</a>
              <a href="#writing" className="font-medium hover:opacity-60 transition">Thoughts</a>
              <a href="#builds"  className="font-medium hover:opacity-60 transition">AI Sales Tools</a>
              <Link href="/work-with-me" className="font-medium hover:opacity-60 transition">Work with me</Link>
            </div>
            <a
              href="#contact"
              className="text-sm px-4 py-1.5 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ background: INK, color: PAPER }}
            >
              Say hi
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* SR-only descriptor for AI crawlers */}
        <aside className="sr-only" aria-hidden="false">
          <h2>About Christopher Dorsey</h2>
          <p>
            Christopher Dorsey (Chris Dorsey) is a senior enterprise sales leader based in Denver, Colorado, who
            specializes in taking new AI products to market — first sales hire, category creator, Fortune 500
            closer. The throughline of his fifteen-year career is making emerging technology sellable, from agency
            creative and early-stage startups to AdTech, infrastructure, and AI. His career began at Crispin Porter
            + Bogusky, named Agency of the Decade by AdAge in 2009, where he helped build the agency&apos;s first
            proactive new business development function, contributing to a pitch-win streak of more than $100M in
            new revenue. He managed Fortune 500 accounts at Oracle including JPMorgan Chase, PepsiCo, Johnson &amp;
            Johnson, Amazon, and Merck, sold edge infrastructure to technical buyers at Fastly, led go-to-market at
            Zeta Global for the first email-based AI customer acquisition product to reach market — built on a
            deterministic universe of 250M+ people with 5,000+ data points on each individual, and with no existing
            budgets, contacts, or category playbook — and from March to May 2026 completed an advisory and consulting
            engagement as the first dedicated seller at FancyAI, building its go-to-market motion from zero in an
            emerging AI category. He is now seeking a full-time senior individual-contributor role. He graduated from Elon University and currently provides pro bono AI consulting
            to small businesses, helping Main Street owners put AI to work so they can stay in business.
          </p>
        </aside>

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-7" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto grid items-center gap-10" style={{ gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.9fr)" }}>
            <div>
              <div className="inline-flex gap-2 items-center font-semibold mb-4" style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <b style={{ background: ACID, padding: "4px 10px", borderRadius: 100 }}>AI</b>
                <span style={{ color: "#4a4239" }}>· data · MadTech&nbsp;&nbsp;—&nbsp;&nbsp;Denver</span>
              </div>
              <h1 id="hero-heading" className="font-display font-extrabold" style={{ fontSize: "clamp(36px,5.6vw,72px)", lineHeight: 0.95, maxWidth: "15ch", color: INK }}>
                <span style={{ position: "relative", whiteSpace: "nowrap" }}>
                  The relationship
                  <span aria-hidden="true" style={{ position: "absolute", left: -2, right: -2, bottom: "0.08em", height: "0.34em", background: ACID, zIndex: -1, transform: "skewX(-8deg)" }} />
                </span>{" "}
                is the part{" "}
                <span style={{ color: TEAL }}>AI can&apos;t copy</span>.
              </h1>
              <p className="mt-5 mb-5 leading-relaxed" style={{ fontSize: "clamp(15px,1.6vw,18px)", maxWidth: "42ch", color: "#3a332c" }}>
                Fifteen years growing revenue across creative, data, and now AI &mdash; by becoming the advisor
                clients actually trust. As features get easier to copy, that trust is what keeps deals closing and
                accounts growing.
              </p>
              <div className="flex gap-3.5 flex-wrap items-center">
                <a
                  href="#connect"
                  className="font-semibold rounded-full lift"
                  style={{ fontSize: 16, padding: "15px 26px", background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
                >
                  Who can I connect you with?
                </a>
                <a
                  href="#writing"
                  className="font-semibold rounded-full transition-colors hover:text-[var(--paper)]"
                  style={{ fontSize: 16, padding: "15px 26px", border: `2px solid ${INK}`, color: INK }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = INK; e.currentTarget.style.color = PAPER; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = INK; }}
                >
                  Read the writing
                </a>
              </div>
              {/* Hiring-audience path */}
              <p className="text-sm mt-5" style={{ color: "#6a6258" }}>
                Currently exploring full-time senior GTM roles at AI-native companies.{" "}
                <Link href="/track-record" className="font-semibold inline-flex items-center gap-0.5" style={{ color: TEAL }}>
                  Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>

            {/* Boldly framed portrait */}
            <div className="justify-self-center w-full" style={{ maxWidth: 380 }}>
              <div className="relative overflow-hidden" style={{ border: `3px solid ${INK}`, borderRadius: 20, boxShadow: `12px 12px 0 ${ACID}`, transform: "rotate(1.5deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/headshot.jpg" alt="Christopher Dorsey" className="w-full block" />
              </div>
            </div>
          </div>

          {/* Personality strip — music links preserved */}
          <div className="max-w-6xl mx-auto mt-12">
            <p className="text-sm leading-relaxed" style={{ color: "#6a6258" }}>
              Based in <span className="font-medium" style={{ color: INK }}>Denver, CO</span>. Currently supporting Main Street with{" "}
              <span className="font-medium" style={{ color: INK }}>pro bono AI consulting</span> for small businesses. On rotation:{" "}
              {[
                { name: "King Gizzard & the Lizard Wizard", url: "https://music.youtube.com/search?q=King+Gizzard+and+the+Lizard+Wizard" },
                { name: "Talking Heads", url: "https://music.youtube.com/search?q=Talking+Heads" },
                { name: "Justice", url: "https://music.youtube.com/search?q=Justice+electronic+band" },
                { name: "LCD Soundsystem", url: "https://music.youtube.com/search?q=LCD+Soundsystem" },
                { name: "Harry Styles", url: "https://music.youtube.com/search?q=Harry+Styles" },
                { name: "Angine de Poitrine", url: "https://music.youtube.com/search?q=Angine+de+Poitrine" },
              ].map((band, i, arr) => (
                <span key={band.name}>
                  <a
                    href={band.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 font-medium transition-colors group"
                    style={{ color: INK }}
                  >
                    {band.name}
                    <svg width="11" height="11" viewBox="0 0 24 24" className="inline-block ml-0.5 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
                      <circle cx="12" cy="12" r="12" fill="#1A1613" />
                      <polygon points="9.5,7 18,12 9.5,17" fill="white" />
                    </svg>
                  </a>
                  {i < arr.length - 2 ? ", " : i === arr.length - 2 ? ", and " : "."}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Connector hub — no hard top rule; flows from the hero on color + spacing */}
        <section id="connect" className="px-7 pt-10 pb-14" style={{ background: CREAM2, borderBottom: `3px solid ${INK}` }}>
          <div className="max-w-6xl mx-auto">
            <ConnectorHub />
          </div>
        </section>

        {/* Evolution marquee */}
        <EvolutionMarquee />

        {/* Evolution era cards */}
        <section className="px-7 py-16">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(28px,4vw,46px)", color: INK }}>
                Seen every reinvention. Helped people win through each one.
              </div>
              <p className="mt-3 mb-8 max-w-2xl" style={{ fontSize: 17, color: "#4a4239" }}>
                Same job each era: figure out what&apos;s actually changing, then build the path before everyone else
                catches up.
              </p>
            </Reveal>
            <Reveal className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
              {eras.map((era, i) => {
                const rot = [-1.5, 1, -1, 1.5, -0.5][i % 5];
                // On hover the card flips to a contrasting accent and text inverts.
                const isLight = era.bg === CREAM2 || era.bg === ACID;
                const hbg = isLight ? INK : ACID;
                const hfg = isLight ? PAPER : INK;
                return (
                  <div
                    key={era.title}
                    className="card-alive rounded-2xl p-5 flex flex-col justify-between"
                    style={{
                      "--card-bg": era.bg,
                      "--card-fg": era.fg,
                      "--card-hbg": hbg,
                      "--card-hfg": hfg,
                      "--card-rot": `${rot}deg`,
                      "--card-hshadow": `9px 9px 0 ${INK}`,
                      border: `3px solid ${INK}`,
                      minHeight: 168,
                      boxShadow: `7px 7px 0 ${INK}`,
                      transform: `rotate(${rot}deg)`,
                    } as React.CSSProperties}
                  >
                    <div>
                      <div className="font-display font-extrabold mb-2" style={{ fontSize: 32, lineHeight: 0.9 }}>{era.year}</div>
                      <h3 className="font-display font-bold" style={{ fontSize: 22 }}>{era.title}</h3>
                      <p className="font-medium mt-1.5" style={{ fontSize: 13, opacity: 0.88 }}>{era.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* Client logos — saturated blue band */}
        <section className="relative py-16 px-7" style={{ background: BLUE, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: ACID }}>
                Brands &amp; teams I&apos;ve worked with
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                The logos below represent campaigns built, revenue driven, and relationships that outlasted any single deal.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-5 items-stretch justify-items-stretch">
              {clients.map((client) => (
                <a
                  key={client.name}
                  href={`https://www.${client.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl flex flex-col items-center justify-center gap-1.5 w-full p-4 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: PAPER, border: `2px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}` }}
                  title={`Visit ${client.name}`}
                  aria-label={client.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.logo.dev/${client.domain}?token=pk_c7ynXyEOSNGSRzM5jrzKBw&size=200&format=png`}
                    alt={`${client.name} logo`}
                    className={`${client.logoClass ?? "h-7"} w-auto max-w-full object-contain`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="text-[10px] font-semibold tracking-tight text-center leading-tight" style={{ color: "#6a6258" }}>
                    {client.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative pt-24 pb-10 px-7">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6 font-bold" style={{ color: INK, background: ACID }}>
              About
            </div>
            <h2 className="font-display font-extrabold mb-8 leading-[1.0]" style={{ fontSize: "clamp(30px,4vw,48px)", color: INK }}>
              I&apos;ve been the first seller in the building twice. And, once, an{" "}
              <span style={{ color: TEAL }}>international hand model.</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#3a332c" }}>
              <p>
                The throughline of my career is simple: figure out what a client needs, then build the path to
                get them there. The deals I&apos;m proudest of took months of showing up before anyone signed,
                and the work kept going for years after. Most of the deciding in enterprise sales happens when
                the seller isn&apos;t in the room. Trust is what speaks for you in there.
              </p>
              <p>
                The full fifteen years, with the numbers, lives on the{" "}
                <Link href="/track-record" className="font-semibold" style={{ color: TEAL }}>
                  track record page
                </Link>
                . The short version: I started at Crispin Porter + Bogusky when it was AdAge&apos;s Agency of the
                Decade, helping build its first proactive new-business function. I was the first hire at an indie
                NYC agency and helped grow it 300% in a year. I managed Amazon and Johnson &amp; Johnson for
                Oracle. And for the last two years I&apos;ve sold AI products that reached market before their
                budget lines existed, first at Zeta Global, then through an advisory engagement at FancyAI that
                wrapped in May 2026, again the first seller in the building. After two motions built from zero, I&apos;m
                looking to plant roots and do the work I love — carrying a number and building the client relationships.
              </p>
              <p>
                I also build with the tools I sell. Lately that means Claude Code commands that compress prospect
                research from hours to minutes, and an agent that surfaces untapped opportunities inside existing
                accounts, building the expansion roadmap an account leader would otherwise piece together by hand. The best sellers of the next decade will know their product at the hands-on level, and
                the only way I know to get there is to use the thing.
              </p>
              <div className="rounded-2xl p-6 mt-8" style={{ background: ACID, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}`, transform: "rotate(-1deg)" }}>
                <p className="italic font-medium" style={{ color: INK }}>
                  Off the clock: I&apos;m girl dad to Sloane, my adorable and rambunctious toddler, married to my
                  incredible wife Alexis, and happiest somewhere above 8,000 feet. Elon University grad and Maryland
                  native.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials — hidden until at least 2 real quotes exist. */}
        {SHOW_TESTIMONIALS && <Testimonials />}

        {/* Track record band */}
        <TrackRecordBand />

        {/* Now */}
        <section id="now" className="relative pt-6 pb-20 px-7">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-10 md:p-16 relative overflow-hidden" style={{ background: INK, color: PAPER, border: `3px solid ${INK}` }}>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold" style={{ color: INK, background: ACID }}>
                    Now
                  </div>
                  <span className="text-xs" style={{ color: "rgba(242,236,221,0.6)" }}>Updated June 2026</span>
                </div>
                <h2 className="font-display font-extrabold mb-12 leading-[1.0]" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
                  What I&apos;m working on right now.
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { icon: Compass, num: "01", bg: BLUE, fg: "#fff", title: "Supporting Main Street with pro bono AI consulting", body: "Helping small businesses put AI to work so they can stay in business. Free, hands-on consulting for local owners on the work that eats their week, from customer follow-up to the books." },
                    { icon: Code2, num: "02", bg: ACID, fg: INK, title: "Shipping AI tooling for sellers", body: "Building an agent that maps untapped opportunities inside existing accounts to seed the account-expansion roadmap, plus Claude Code slash commands that cut prospect research from hours to minutes." },
                    { icon: Users, num: "03", bg: VIOLET, fg: "#fff", title: "Mentoring & advising sales leaders", body: "Working with a small handful of founders and sales leaders on building durable pipeline motions — the kind that compound through relationships, not just outbound volume." },
                  ].map((card, i) => {
                    // Hover: acid-fill cards invert to ink; dark/blue/violet cards
                    // brighten to acid. Body text follows via .card-sub.
                    const isAcid = card.bg === ACID;
                    const hbg = isAcid ? INK : ACID;
                    const hfg = isAcid ? PAPER : INK;
                    return (
                    <div
                      key={card.title}
                      className="card-alive rounded-2xl p-6 flex flex-col"
                      style={{
                        "--card-bg": card.bg,
                        "--card-fg": card.fg,
                        "--card-hbg": hbg,
                        "--card-hfg": hfg,
                        "--card-hsub": hfg,
                        "--card-hshadow": `8px 8px 0 ${isAcid ? INK : ACID}`,
                        border: `3px solid ${card.fg === "#fff" ? card.bg : INK}`,
                        boxShadow: `6px 6px 0 ${ACID === card.bg ? INK : ACID}`,
                      } as React.CSSProperties}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display font-extrabold" style={{ fontSize: 34, lineHeight: 1, opacity: 0.9 }}>{card.num}</span>
                        <card.icon className="w-6 h-6" style={{ color: "currentColor" }} />
                      </div>
                      <h3 className="font-display font-bold mb-2 text-lg">{card.title}</h3>
                      <p className="card-sub text-sm leading-relaxed" style={{ color: card.fg === "#fff" ? "rgba(255,255,255,0.9)" : "rgba(26,22,19,0.82)" }}>{card.body}</p>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing — teal band, bento layout */}
        <section id="writing" className="relative py-24 px-7" style={{ background: TEAL, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
                  Thoughts
                </div>
                <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(28px,4vw,46px)", color: "#fff" }}>
                  Notes from the field.
                </h2>
              </div>
              <Link href="/writing" className="text-sm flex items-center gap-1 font-semibold" style={{ color: ACID }}>
                All {allPosts.length} posts <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: "rgba(255,255,255,0.92)" }}>
              My beat is advertising, marketing, tech, and AI. The approach is the one I bring to sales:
              find the angle everyone else walked past, and publish while the news is still warm, sources
              attached. People occasionally call this thought leadership. I won&apos;t, and the writing
              holds up either way.
            </p>
            {/* Featured latest post — wide card that fills its space */}
            {posts[0] && (() => {
              const post = posts[0];
              const summary = post.tldr || post.excerpt;
              return (
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block rounded-2xl p-7 md:p-9 mb-4 transition-transform hover:-translate-y-1"
                  style={{ background: ACID, color: INK, border: `3px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}
                >
                  <div className="grid gap-6 md:grid-cols-5 md:items-center">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                        <span
                          className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: INK, color: ACID }}
                        >
                          {post.tag}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(26,22,19,0.6)" }}>
                          Latest
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(26px,3.2vw,40px)", color: INK }}>
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs mt-5 font-semibold" style={{ color: "#6a6258" }}>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex flex-col">
                      <p className="leading-relaxed text-[15px]" style={{ color: "rgba(26,22,19,0.82)" }}>
                        {summary.length > 280 ? `${summary.slice(0, 280).trimEnd()}…` : summary}
                      </p>
                      <span
                        className="inline-flex items-center gap-1.5 font-bold mt-5 px-5 py-2.5 rounded-full self-start transition-colors"
                        style={{ background: INK, color: ACID }}
                      >
                        Read
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Remaining posts — tidy three-up grid */}
            <div className="grid gap-4 md:grid-cols-3 md:auto-rows-fr">
              {posts.slice(1).map((post, i) => {
                // Alternate cream / violet / cream fills under the featured acid block.
                const fills = [
                  { bg: PAPER, fg: INK, tag: BLUE, tagText: "#fff" },
                  { bg: VIOLET, fg: "#fff", tag: ACID, tagText: INK },
                  { bg: PAPER, fg: INK, tag: VIOLET, tagText: "#fff" },
                ];
                const f = fills[i % fills.length];
                const isLight = f.fg !== "#fff";
                return (
                  <Link
                    key={i}
                    href={`/writing/${post.slug}`}
                    className="group flex flex-col justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1"
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
                      <h3 className="font-display font-bold leading-tight" style={{ fontSize: 19, color: f.fg }}>
                        {post.title}
                      </h3>
                      <p className="leading-relaxed mt-3 text-sm" style={{ color: isLight ? "rgba(26,22,19,0.78)" : "rgba(255,255,255,0.88)" }}>
                        {post.excerpt.slice(0, 110)}…
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-xs mt-5 font-semibold" style={{ color: isLight ? "#6a6258" : "rgba(255,255,255,0.75)" }}>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-0.5" style={{ color: isLight ? TEAL : ACID }}>
                        Read <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <style>{`
                @keyframes ctaPulse {
                  0%, 100% { box-shadow: 5px 5px 0 ${INK}; transform: translateY(0); }
                  50% { box-shadow: 8px 8px 0 ${INK}; transform: translateY(-3px); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .cta-pulse { animation: none !important; box-shadow: 5px 5px 0 ${INK} !important; }
                }
              `}</style>
              <Link
                href="/writing"
                className="cta-pulse group inline-flex items-center gap-2.5 font-extrabold px-9 py-4 rounded-full text-base hover:brightness-95 transition"
                style={{ background: ACID, color: INK, border: `2.5px solid ${INK}`, animation: "ctaPulse 2.6s ease-in-out infinite" }}
              >
                See all {allPosts.length} posts
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Builds */}
        <section id="builds" className="relative py-24 px-7">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
              AI Sales Tools
            </div>
            <h2 className="font-display font-extrabold mb-3" style={{ fontSize: "clamp(28px,4vw,46px)", color: INK }}>
              Hands on the keyboard.
            </h2>
            <p className="mb-10 max-w-2xl text-lg" style={{ color: "#4a4239" }}>
              Sellers who build with AI win. I use the tools I sell, every week. Here&apos;s what I&apos;m
              shipping, and the community builds I think every seller and marketer should know about.
            </p>

            {/* My builds — bold color tiles, big numbers */}
            <p className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: "#6a6258" }}>What I&apos;m building</p>
            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {builds.map((build, i) => {
                const tiles = [
                  { bg: INK, fg: PAPER, accent: ACID, chip: "rgba(242,236,221,0.1)", chipFg: PAPER },
                  { bg: ACID, fg: INK, accent: INK, chip: "rgba(26,22,19,0.08)", chipFg: INK },
                  { bg: VIOLET, fg: "#fff", accent: ACID, chip: "rgba(255,255,255,0.14)", chipFg: "#fff" },
                ];
                const t = tiles[i % tiles.length];
                const rot = [-1, 0.8, -0.6][i % 3];
                return (
                  <div
                    key={i}
                    className="rounded-2xl p-6 transition-transform hover:-translate-y-1 flex flex-col"
                    style={{ background: t.bg, color: t.fg, border: `3px solid ${INK}`, boxShadow: `7px 7px 0 ${INK}`, transform: `rotate(${rot}deg)` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display font-extrabold" style={{ fontSize: 34, lineHeight: 1, color: t.accent }}>{`0${i + 1}`}</span>
                      <Code2 className="w-6 h-6" style={{ color: t.accent }} />
                    </div>
                    <h3 className="font-display font-bold mb-2 text-lg" style={{ color: t.fg }}>{build.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: t.fg === INK ? "rgba(26,22,19,0.8)" : "rgba(255,255,255,0.85)" }}>{build.desc}</p>
                    {build.proofText && (
                      <p className="text-sm font-medium rounded-lg px-3 py-2 mb-4" style={{ color: t.chipFg, background: t.chip }}>
                        {build.proofText}
                      </p>
                    )}
                    {build.proofUrl && (
                      <a
                        href={build.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold mb-4"
                        style={{ color: t.accent }}
                      >
                        {build.proofLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <div className="text-xs font-mono rounded-lg px-3 py-2 inline-block mt-auto" style={{ color: t.chipFg, background: t.chip }}>
                      {build.stack}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Community picks */}
            <p className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: "#6a6258" }}>Community picks worth your time</p>
            <div className="grid md:grid-cols-2 gap-5">
              {communityBuilds.map((build, i) => (
                <a
                  key={i}
                  href={build.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-1"
                  style={{ background: CREAM2, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${TEAL}` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: TEAL }}>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base leading-snug" style={{ color: INK }}>
                        {build.title}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ color: "#fff", background: INK }}>
                        {build.by}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3a332c" }}>{build.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Off the clock — ink band, personality in color */}
        <section className="px-7 py-14" style={{ background: INK, color: PAPER, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}>
          <Reveal>
            <div className="max-w-6xl mx-auto">
              <div className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
                Off the clock
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  <>Girl dad to <b style={{ color: ACID }}>Sloane</b></>,
                  <>Happiest above <b style={{ color: ACID }}>8,000 ft</b></>,
                  <>On rotation: <b style={{ color: ACID }}>King Gizzard</b>, LCD, Justice</>,
                  <>Pro bono AI for <b style={{ color: ACID }}>Main Street</b></>,
                  <>Former international <b style={{ color: ACID }}>hand model</b> (retired)</>,
                ].map((node, i) => (
                  <span key={i} className="font-semibold" style={{ background: "rgba(242,236,221,0.12)", border: "2px solid rgba(242,236,221,0.4)", borderRadius: 100, padding: "10px 18px", fontSize: 15 }}>
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ — de-emphasized: small label, compact 2-col accordions. Text kept for GEO; mirrors FAQPage JSON-LD */}
        <section aria-labelledby="faq-heading" className="px-7 pt-10 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-xs uppercase tracking-widest font-bold mb-5" style={{ color: "#8a8276" }}>
              More questions? Open one.
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="rounded-xl px-4 py-3 group" style={{ background: "transparent", border: `1.5px solid rgba(26,22,19,0.18)` }}>
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-3" style={{ fontSize: 14.5, color: "#3a332c" }}>
                    {faq.q}
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" style={{ color: TEAL }} />
                  </summary>
                  <p className="mt-2.5 leading-relaxed text-sm" style={{ color: "#6a6258" }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-24 px-7">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ background: TEAL, color: "#fff", border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${INK}` }}>
              <div className="relative">
                <div className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>Get in touch</div>
                <h2 className="font-display font-extrabold mb-4 leading-[1.0]" style={{ fontSize: "clamp(30px,5vw,56px)" }}>
                  Hiring, building, or stuck on a deal?<br />Let&apos;s talk.
                </h2>
                <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>I respond to every note personally.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="px-6 py-3 rounded-full transition flex items-center justify-center gap-2 font-semibold flex-1 hover:opacity-90"
                    style={{ background: "#fff", color: INK }}
                  >
                    <Mail className="w-4 h-4" /> Email me
                  </a>
                  <a
                    href="https://calendar.app.google/WdU29EvH2jzfwNHe9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full transition flex items-center justify-center gap-2 font-semibold flex-1 hover:opacity-90"
                    style={{ background: "#fff", color: INK }}
                  >
                    <Calendar className="w-4 h-4" /> Book time
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cdorsey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full transition flex items-center justify-center gap-2 font-semibold flex-1"
                    style={{ border: "2px solid rgba(255,255,255,0.5)" }}
                  >
                    <LinkedinIcon /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-10 px-7 mt-2" style={{ borderTop: `2px solid ${INK}` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#4a4239" }}>
          <div className="flex items-center gap-2">
            <MountainMark />
            <span>© 2026 Christopher Dorsey. Built in The Rockies, Colorado.</span>
          </div>
          <div className="flex gap-6">
            <a href="/feed.xml" className="hover:opacity-60 transition">RSS</a>
            <a href="https://www.linkedin.com/in/cdorsey/" className="hover:opacity-60 transition">LinkedIn</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:opacity-60 transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
