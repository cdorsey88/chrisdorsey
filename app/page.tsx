"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight, Mail, Code2, Users, Calendar, Clock, Compass, ExternalLink, Zap
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

const serif = { fontFamily: "var(--font-fraunces)" };
const sans  = { fontFamily: "var(--font-inter)" };

const bandStats: { num?: number; suffix?: string; text?: string; label: string }[] = [
  { num: 15, suffix: "+", label: "Years selling technology" },
  { text: "7-figure", label: "Deals closed, repeatedly" },
  { text: "8-figure", label: "Client relationships managed" },
  { num: 2, suffix: "\u00d7", label: "First seller in the building" },
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
    <section aria-label="Track record highlights" className="relative pt-2 pb-12 px-6">
      <style>{`
        @keyframes band-drift {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(40px, -20px) scale(1.15); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes band-drift-2 {
          0%   { transform: translate(0, 0) scale(1.1); }
          50%  { transform: translate(-30px, 15px) scale(1); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .band-orb { animation: none !important; }
        }
      `}</style>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-12 text-slate-100 shadow-2xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1200ms ease, transform 1200ms ease",
          }}
        >
          <div
            className="band-orb absolute -top-24 -right-16 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)", animation: "band-drift 9s ease-in-out infinite" }}
          />
          <div
            className="band-orb absolute -bottom-28 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.22), transparent 70%)", animation: "band-drift-2 11s ease-in-out infinite" }}
          />
          <div
            className="absolute top-0 left-0 h-[3px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #38BDF8, #34D399)",
              width: inView ? "100%" : "0%",
              transition: "width 2200ms ease 300ms",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-8">Track record</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
                {bandStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="group/stat"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 1000ms ease ${300 + i * 220}ms, transform 1000ms ease ${300 + i * 220}ms`,
                    }}
                  >
                    <div
                      className="text-4xl md:text-5xl font-black leading-none bg-clip-text text-transparent transition-transform duration-500 group-hover/stat:scale-105 origin-left"
                      style={{ ...serif, backgroundImage: "linear-gradient(120deg, #E0F2FE, #7DD3FC 55%, #6EE7B7)" }}
                    >
                      {stat.text ?? `${Math.round((stat.num ?? 0) * tick)}${stat.suffix}`}
                    </div>
                    <div
                      className="h-0.5 rounded-full mt-3 mb-2.5"
                      style={{
                        background: "linear-gradient(90deg, #38BDF8, #34D399)",
                        width: inView ? "2.25rem" : "0rem",
                        transition: `width 1400ms ease ${700 + i * 220}ms`,
                      }}
                    />
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-bold group-hover/stat:text-slate-200 transition-colors duration-500">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
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
  const [scrollY, setScrollY]   = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse  = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
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
      stack: "Pro-bono · Claude API · Automation · SEO & GEO",
      desc: "Custom AI tools for main-street businesses, built pro bono. I automate the repetitive admin, sharpen their SEO and GEO, and replace the bloated software they only half-use — so local operators can compete and stay in business.",
      accent: "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-200",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: null as string | null,
    },
    {
      title: "/client-brief slash command",
      stack: "Claude Code",
      desc: "A custom slash command that pulls public signals on a prospect and drafts a discovery-ready brief in under a minute.",
      accent: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-200",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: "See it work",
    },
    {
      title: "AI category landscape mapping",
      stack: "Research · Synthesis · Sales Enablement",
      desc: "Living competitive maps and capability matrices for emerging AI categories. Current example: a five-tier landscape of the GEO space — Profound, Evertune, Goodie, Gauge, Qwairy — with a 10-vendor capability matrix.",
      accent: "bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border-teal-200",
      proofText: null as string | null,
      proofUrl: null as string | null,
      proofLabel: "See a sample",
    },
  ];

  return (
    <div
      className="min-h-screen text-slate-900 relative overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E0F0F5 50%, #F0F7FA 100%)",
        ...sans,
      }}
    >
      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #10B981 0%, transparent 70%)",
            top: "600px",
            left: "-150px",
            transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * 0.015}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #14B8A6 0%, transparent 70%)",
            bottom: "200px",
            right: "20%",
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50" : "bg-transparent"
        }`}
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
            <span
              className="text-slate-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "21px", fontWeight: 600, lineHeight: 1, transform: "translateY(1px)" }}
            >
              Chris{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #334E8C, #0F6E56)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Dorsey
              </span>
            </span>
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7 text-sm text-slate-700">
              <a href="#about"         className="hover:text-blue-600 transition">About</a>
              <Link href="/track-record" className="hover:text-blue-600 transition">Track Record</Link>
              <a href="#now"           className="hover:text-blue-600 transition">Now</a>
              <a href="#writing"       className="hover:text-blue-600 transition">Thoughts</a>
              <a href="#builds"        className="hover:text-blue-600 transition">AI Sales Tools</a>
              <Link href="/work-with-me" className="hover:text-blue-600 transition">Work with me</Link>
            </div>
            <a
              href="#contact"
              className="text-sm bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-1.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all flex items-center gap-1 font-medium"
            >
              Say hi! <Zap className="w-3.5 h-3.5 fill-white" />
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
            budgets, contacts, or category playbook — and most recently completed an advisory and consulting engagement
            as FancyAI&apos;s first dedicated seller, where he built the go-to-market motion from zero in Generative Engine
            Optimization (GEO), one of several AI categories he has sold. He graduated from Elon University and currently provides pro bono AI consulting
            to small businesses, helping Main Street owners put AI to work so they can stay in business.
          </p>
        </aside>

        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center relative">
            <div className="md:col-span-3 space-y-6">
              <h1
                id="hero-heading"
                className="tracking-tight"
                style={serif}
              >
                {/*
                  Headline: fact-based, no first-person claim. Chris rejected
                  tagline-style lines as too self-promotional. Plan: swap in a
                  client quote from LinkedIn recommendations when testimonials land.
                */}
                <span className="block text-5xl md:text-7xl font-black leading-[1.05] mb-5">
                  Fifteen years selling new technology to the{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent italic">
                    Fortune 500.
                  </span>
                </span>
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                Twice the first seller in the building, selling technology that buyers didn&apos;t have a budget line
                for yet, and building with the AI tools I sell. Clients tend to keep me around long
                after the contract is signed.
              </p>
              {/* Hiring-audience path (Task 3) */}
              <p className="text-sm text-slate-600">
                Currently exploring full-time senior GTM roles at AI-native companies.{" "}
                <Link
                  href="/track-record"
                  className="font-semibold text-blue-600 hover:text-emerald-600 transition inline-flex items-center gap-0.5"
                >
                  Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>

            {/* Photo composition */}
            <div className="md:col-span-2 relative pt-8 md:pt-0">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 via-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl" />

                {/* Family Flatirons — bottom left */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/family-flatirons.jpg"
                    alt="The Dorsey family at the Flatirons"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sloane airborne — top right */}
                <div className="absolute -top-4 -right-2 sm:-right-6 w-20 h-28 sm:w-28 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/sloane-airborne.jpg"
                    alt="Chris lifting Sloane in the air with the Flatirons behind them"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main headshot circle */}
                <div className="relative aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/headshot.jpg"
                    alt="Christopher Dorsey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Personality strip */}
          <div className="max-w-6xl mx-auto mt-14">
            <p className="text-sm text-slate-500 leading-relaxed">
              Based in <span className="text-slate-700 font-medium">Denver, CO</span>. Currently supporting Main Street with{" "}
              <span className="text-slate-700 font-medium">pro bono AI consulting</span> for small businesses. On rotation:{" "}
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
                    className="inline-flex items-center gap-0.5 text-slate-700 font-medium hover:text-red-500 transition-colors group"
                  >
                    {band.name}
                    <svg width="11" height="11" viewBox="0 0 24 24" className="inline-block ml-0.5 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
                      <circle cx="12" cy="12" r="12" fill="#FF0000" />
                      <polygon points="9.5,7 18,12 9.5,17" fill="white" />
                    </svg>
                  </a>
                  {i < arr.length - 2 ? ", " : i === arr.length - 2 ? ", and " : "."}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Client logos */}
        <section className="relative py-16 px-6 bg-white/60 backdrop-blur-sm border-y border-sky-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-widest text-blue-700 mb-3 font-bold">
                Brands &amp; teams I&apos;ve worked with
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The logos below represent campaigns built, revenue driven, and relationships that outlasted any single deal.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-7 items-center justify-items-center">
              {clients.map((client) => (
                <a
                  key={client.name}
                  href={`https://www.${client.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0 flex flex-col items-center justify-center gap-1.5 w-full"
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
                  <span className="text-[10px] font-semibold text-slate-400 tracking-tight text-center leading-tight">
                    {client.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative pt-28 pb-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6 font-bold">
              About
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 leading-[1.1]" style={serif}>
              I&apos;ve been the first seller in the building twice. And, once, an{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent italic">
                international hand model.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                The throughline of my career is simple: figure out what a client needs, then build the path to
                get them there. The deals I&apos;m proudest of took months of showing up before anyone signed,
                and the work kept going for years after. Most of the deciding in enterprise sales happens when
                the seller isn&apos;t in the room. Trust is what speaks for you in there.
              </p>
              <p>
                The full fifteen years, with the numbers, lives on the{" "}
                <Link href="/track-record" className="font-semibold text-blue-600 hover:text-emerald-600 transition">
                  track record page
                </Link>
                . The short version: I started at Crispin Porter + Bogusky when it was AdAge&apos;s Agency of the
                Decade, helping build its first proactive new-business function. I was the first hire at an indie
                NYC agency and helped grow it 300% in a year. I managed Amazon and Johnson &amp; Johnson for
                Oracle. And for the last two years I&apos;ve sold AI products that reached market before their
                budget lines existed, first at Zeta Global, then in an advisory engagement at FancyAI as the
                first seller in the building.
              </p>
              <p>
                I also build with the tools I sell. Lately that means Claude Code commands that compress prospect
                research from hours to minutes, and a Playwright agent that audits how brands show up in LLM
                answers. The best sellers of the next decade will know their product at the hands-on level, and
                the only way I know to get there is to use the thing.
              </p>
              <div className="bg-gradient-to-br from-sky-50 to-emerald-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mt-8">
                <p className="text-slate-700 italic">
                  Off the clock: I&apos;m girl dad to Sloane, my adorable and rambunctious toddler, married to my
                  incredible wife Alexis, and happiest somewhere above 8,000 feet. Elon University grad and Maryland
                  native.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials — hidden until at least 2 real quotes exist. See TESTIMONIALS-TODO.md */}
        {SHOW_TESTIMONIALS && <Testimonials />}

        {/* Track record band */}
        <TrackRecordBand />

        {/* Now */}
        <section id="now" className="relative pt-6 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-slate-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="text-xs uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 font-bold">
                    Now
                  </div>
                  <span className="text-xs text-slate-400">Updated June 2026</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 leading-tight" style={serif}>
                  What I&apos;m working on right now.
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg" style={serif}>Supporting Main Street with pro bono AI consulting</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Helping small businesses put AI to work so they can stay in business. Free, hands-on consulting
                      for local owners on the work that eats their week, from customer follow-up to the books.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg" style={serif}>Shipping AI tooling for sellers</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Building out a Playwright audit agent and a set of Claude Code slash commands that compress
                      prospect research from hours to minutes.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg" style={serif}>Mentoring &amp; advising sales leaders</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Working with a small handful of founders and sales leaders on building durable pipeline motions
                      — the kind that compound through relationships, not just outbound volume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="relative py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="inline-block text-xs uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-4 font-bold">
                  Thoughts
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={serif}>
                  Notes from the field.
                </h2>
              </div>
              <Link href="/writing" className="text-sm text-blue-600 hover:text-emerald-600 flex items-center gap-1 font-semibold">
                All {allPosts.length} posts <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-12 -mt-4">
              My beat is advertising, marketing, tech, and AI. The approach is the one I bring to sales:
              find the angle everyone else walked past, and publish while the news is still warm, sources
              attached. People occasionally call this thought leadership. I won&apos;t, and the writing
              holds up either way.
            </p>
            <div className="grid gap-5">
              {posts.map((post, i) => (
                <Link
                  key={i}
                  href={`/writing/${post.slug}`}
                  className="group block bg-white rounded-2xl p-7 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-200 hover:border-blue-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="flex items-baseline justify-between gap-6 mb-3">
                    <h3
                      className="flex-1 text-xl md:text-2xl font-bold tracking-tight group-hover:text-blue-600 transition leading-tight"
                      style={serif}
                    >
                      {post.title}
                    </h3>
                    <span
                      className={`flex-none text-xs font-bold uppercase tracking-wider whitespace-nowrap text-white px-3 py-1 rounded-full bg-gradient-to-r ${post.color}`}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href="/writing"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
              >
                See all {allPosts.length} posts
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Builds */}
        <section id="builds" className="relative py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full mb-4 font-bold">
              AI Sales Tools
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3" style={serif}>
              Hands on the keyboard.
            </h2>
            <p className="text-slate-600 mb-12 max-w-2xl text-lg">
              Sellers who build with AI win. I use the tools I sell, every week. Here&apos;s what I&apos;m
              shipping, and the community builds I think every seller and marketer should know about.
            </p>

            {/*
              Future demo video embed (Task 7). Uncomment and fill when a clip exists.
              [FILL: Loom/YouTube URL — live selling/demo clip, ~2 minutes]

            <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 aspect-video">
              <iframe
                src="[FILL: Loom/YouTube embed URL]"
                title="Live demo — selling with AI tools"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            */}

            {/* My builds */}
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-5">What I&apos;m building</p>
            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {builds.map((build, i) => (
                <div
                  key={i}
                  className={`${build.accent} backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center mb-5">
                    <Code2 className="w-5 h-5 text-slate-900" />
                  </div>
                  <h3 className="font-bold mb-2 tracking-tight text-lg">{build.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">{build.desc}</p>
                  {build.proofText && (
                    <p className="text-sm text-slate-700 font-medium bg-white/70 rounded-lg px-3 py-2 mb-4">
                      {build.proofText}
                    </p>
                  )}
                  {build.proofUrl && (
                    <a
                      href={build.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-emerald-600 transition mb-4"
                    >
                      {build.proofLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div className="text-xs text-slate-600 font-mono bg-white/60 rounded-lg px-3 py-2 inline-block">
                    {build.stack}
                  </div>
                </div>
              ))}
            </div>

            {/* Community picks */}
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-5">Community picks worth your time</p>
            <div className="grid md:grid-cols-2 gap-5">
              {communityBuilds.map((build, i) => (
                <a
                  key={i}
                  href={build.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition text-base leading-snug">
                        {build.title}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                        {build.by}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{build.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-white/80 mb-4 font-bold">Get in touch</div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight" style={serif}>
                  Whether you&apos;re hiring, building, or stuck on a deal.
                </h2>
                <p className="text-white/85 text-lg mb-10">I respond to every note personally.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-slate-100 transition flex items-center justify-center gap-2 font-semibold flex-1"
                  >
                    <Mail className="w-4 h-4" /> Email me
                  </a>
                  <a
                    href="https://calendar.app.google/WdU29EvH2jzfwNHe9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-slate-100 transition flex items-center justify-center gap-2 font-semibold flex-1"
                  >
                    <Calendar className="w-4 h-4" /> Book time
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cdorsey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/40 backdrop-blur px-6 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2 font-semibold flex-1"
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
      <footer className="relative border-t border-sky-200/50 py-10 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-600 to-emerald-500" />
            © 2026 Christopher Dorsey. Built in The Rockies, Colorado.
          </div>
          <div className="flex gap-6">
            <a href="/feed.xml" className="hover:text-blue-600 transition">RSS</a>
            <a href="https://www.linkedin.com/in/cdorsey/" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-600 transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
