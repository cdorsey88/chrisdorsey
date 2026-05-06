"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight, Mail, MapPin, Mountain, Music, Sparkles,
  Code2, Users, TrendingUp, Calendar, Clock, Heart, Compass
} from "lucide-react";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const serif = { fontFamily: "var(--font-fraunces)" };
const sans  = { fontFamily: "var(--font-inter)" };

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
    {
      name: "JPMorgan Chase",
      svg: (
        <svg viewBox="0 0 180 32" className="h-7 w-auto max-w-full">
          <text x="0" y="22" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#0F4C81" letterSpacing="0.5">J.P.Morgan</text>
        </svg>
      ),
    },
    {
      name: "Microsoft",
      svg: (
        <svg viewBox="0 0 150 28" className="h-6 w-auto max-w-full">
          <rect x="0"  y="2"  width="11" height="11" fill="#F25022" />
          <rect x="13" y="2"  width="11" height="11" fill="#7FBA00" />
          <rect x="0"  y="15" width="11" height="11" fill="#00A4EF" />
          <rect x="13" y="15" width="11" height="11" fill="#FFB900" />
          <text x="30" y="20" fontFamily="Segoe UI, sans-serif" fontSize="17" fontWeight="600" fill="#737373">Microsoft</text>
        </svg>
      ),
    },
    {
      name: "Amazon",
      svg: (
        <svg viewBox="0 0 130 36" className="h-7 w-auto max-w-full">
          <text x="2" y="22" fontFamily="Helvetica, sans-serif" fontSize="22" fontWeight="700" fill="#232F3E">amazon</text>
          <path d="M 8 28 Q 50 36 96 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 88 26 L 98 28 L 91 33" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: "PepsiCo",
      svg: (
        <svg viewBox="0 0 140 36" className="h-8 w-auto max-w-full">
          <circle cx="18" cy="18" r="14" fill="#004B93" />
          <path d="M 8 18 Q 18 10 28 18 Q 18 14 8 18" fill="#E32934" />
          <path d="M 8 18 Q 18 26 28 18 Q 18 22 8 18" fill="#FFFFFF" />
          <text x="40" y="23" fontFamily="Helvetica, sans-serif" fontSize="14" fontWeight="700" fill="#004B93" letterSpacing="0.5">PEPSICO</text>
        </svg>
      ),
    },
    {
      name: "Johnson & Johnson",
      svg: (
        <svg viewBox="0 0 200 32" className="h-7 w-auto max-w-full">
          <text x="0" y="24" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fill="#CC0000" fontStyle="italic" letterSpacing="-0.5">Johnson&nbsp;&amp;&nbsp;Johnson</text>
        </svg>
      ),
    },
    {
      name: "Merck",
      svg: (
        <svg viewBox="0 0 110 32" className="h-7 w-auto max-w-full">
          <text x="2" y="24" fontFamily="Helvetica, sans-serif" fontSize="24" fontWeight="800" fill="#00857C">MERCK</text>
        </svg>
      ),
    },
    {
      name: "Oracle",
      svg: (
        <svg viewBox="0 0 120 32" className="h-7 w-auto max-w-full">
          <text x="2" y="22" fontFamily="Helvetica, sans-serif" fontSize="22" fontWeight="700" fill="#C74634" letterSpacing="-0.5">ORACLE</text>
        </svg>
      ),
    },
    {
      name: "Vail Resorts",
      svg: (
        <svg viewBox="0 0 170 32" className="h-7 w-auto max-w-full">
          <path d="M 4 8 L 14 26 L 24 8 Z" fill="#003F7F" />
          <text x="32" y="22" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#003F7F" letterSpacing="1.5">VAIL RESORTS</text>
        </svg>
      ),
    },
    {
      name: "Stitch Fix",
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 w-auto max-w-full">
          <text x="2" y="22" fontFamily="Georgia, serif" fontSize="19" fontWeight="600" fill="#1F1F1F" letterSpacing="-0.3">Stitch Fix</text>
        </svg>
      ),
    },
    {
      name: "Groupon",
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 w-auto max-w-full">
          <text x="2" y="24" fontFamily="Helvetica, sans-serif" fontSize="24" fontWeight="700" fill="#53A318" fontStyle="italic">groupon</text>
        </svg>
      ),
    },
    {
      name: "JCPenney",
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 w-auto max-w-full">
          <text x="2" y="22" fontFamily="Helvetica, sans-serif" fontSize="18" fontWeight="700" fill="#CC0000" letterSpacing="0.3">JCPenney</text>
        </svg>
      ),
    },
    {
      name: "JSX Airlines",
      svg: (
        <svg viewBox="0 0 100 32" className="h-7 w-auto max-w-full">
          <text x="2" y="24" fontFamily="Helvetica, sans-serif" fontSize="24" fontWeight="800" fill="#1F1F1F" letterSpacing="2">JSX</text>
        </svg>
      ),
    },
  ];

  const posts = [
    {
      title: "OpenAI just turned ChatGPT into an ad platform. Here's what brands need to do in the next 90 days.",
      date: "May 6, 2026",
      readTime: "9 min",
      excerpt:
        "On May 5, OpenAI dropped the $50K minimum, opened self-serve to every U.S. advertiser, and added CPC bidding. The ChatGPT pilot is already pulling $100M+ in annualized revenue with a $102B target by 2030. This isn't a test anymore — it's the fastest platform-to-ad-network transition in digital history. Here's the playbook for the next quarter, and the harder question of what happens when the answer layer becomes pay-to-play.",
      tag: "Future of Ads",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "GEO is the new SEO — and most brands are already losing",
      date: "Apr 28, 2026",
      readTime: "6 min",
      excerpt:
        "I searched \"best CRM for mid-market\" in ChatGPT and Claude this morning. The same three vendors came up. None of them were the category leader. Here's what that means for the next 18 months of B2B marketing — and why dashboards alone won't fix it.",
      tag: "GEO",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "AI didn't kill the entry-level job. Interest rates and a tax change did.",
      date: "Apr 14, 2026",
      readTime: "8 min",
      excerpt:
        "The narrative is clean: AI is replacing humans, that's why nobody's hiring. The data is messier. A Federal Reserve study of one million firms found \"precisely-estimated null effects\" for AI on job postings. A 2025 NBER paper of 25,000 workers across 7,000 workplaces found zero effect on earnings or hours. Meanwhile, 59% of hiring managers admit they cite AI in layoff messaging because it \"plays better with stakeholders than financial constraints.\" Here's what's actually correlating with the hiring freeze — and why the answer matters for how you sell into 2027.",
      tag: "Macro",
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Selling AI to skeptical buyers (a field guide)",
      date: "Feb 11, 2026",
      readTime: "7 min",
      excerpt:
        "Marketers, agency leads, pharma commercial teams — the buyers I sell to are smart, busy, and have seen 50 AI demos this quarter. Here's how I frame the conversation so the technology gets out of the way and the business outcome leads.",
      tag: "Sales",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const builds = [
    {
      title: "LLM Visibility Audit Agent",
      stack: "Playwright · Claude API · Clay · Instantly",
      desc: "An agentic layer that screenshots how prospects appear in ChatGPT, Claude, and Perplexity, then routes the gaps into outbound sequences.",
      accent: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200",
    },
    {
      title: "/client-brief slash command",
      stack: "Claude Code",
      desc: "A custom slash command that pulls public signals on a prospect and drafts a discovery-ready brief in under a minute.",
      accent: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-200",
    },
    {
      title: "GEO Competitive Intelligence Refresh",
      stack: "Research · Synthesis · Sales Enablement",
      desc: "A living five-tier landscape map of the GEO space — Profound, Evertune, Goodie, Gauge, Qwairy — with a 10-vendor capability matrix.",
      accent: "bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border-teal-200",
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
          <div className="font-bold tracking-tight flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white text-xs font-black">
              CD
            </div>
            <span>Christopher Dorsey</span>
          </div>
          <div className="hidden md:flex gap-7 text-sm text-slate-700">
            <a href="#about"   className="hover:text-blue-600 transition">About</a>
            <a href="#now"     className="hover:text-blue-600 transition">Now</a>
            <a href="#writing" className="hover:text-blue-600 transition">Writing</a>
            <a href="#builds"  className="hover:text-blue-600 transition">Builds</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-sm bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-1 font-medium"
          >
            Say Hi <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </nav>

      <main>
        {/* SR-only descriptor for AI crawlers */}
        <aside className="sr-only" aria-hidden="false">
          <h2>About Christopher Dorsey</h2>
          <p>
            Christopher Dorsey (Chris Dorsey) is a senior enterprise sales leader and Generative Engine Optimization
            (GEO) consultant based in Denver, Colorado, with fifteen years of experience spanning agency creative,
            early-stage startups, and Fortune 500 enterprise sales. His career began at Crispin Porter + Bogusky,
            named Agency of the Decade by AdAge in 2009, where he helped build the agency&apos;s first proactive new
            business development function, contributing to a pitch-win streak of more than $100M in new revenue. He
            managed Fortune 500 accounts at Oracle including JPMorgan Chase, PepsiCo, Johnson &amp; Johnson, Amazon,
            and Merck, led go-to-market for the first agentic AI email acquisition product at Zeta Global, and most
            recently served as VP of Sales at FancyAI. He graduated from Elon University and currently consults
            independently on Generative Engine Optimization go-to-market and sales strategy.
          </p>
        </aside>

        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center relative">
            <div className="md:col-span-3 space-y-6">
              <h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]"
                style={serif}
              >
                <span className="block">Enterprise seller.</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent italic">
                  AI tinkerer.
                </span>
                <span className="block text-slate-700">Relationship-first.</span>
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                Fifteen years building long-term client relationships across every kind of room — from
                agency-of-the-decade creative shops to scrappy NYC startups to Fortune 500 enterprise floors. I close
                by solving problems alongside my clients, and lately, by building the tools that help me do it faster.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#writing"
                  className="bg-slate-900 text-slate-50 px-5 py-2.5 rounded-full hover:bg-slate-700 transition flex items-center gap-2 text-sm font-medium"
                >
                  Read the writing <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Photo composition */}
            <div className="md:col-span-2 relative pt-8 md:pt-0">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 via-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl" />

                {/* Family Flatirons — bottom left */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center text-slate-500 text-[10px] text-center px-2 font-medium">
                    Family at<br />the Flatirons
                  </div>
                </div>

                {/* Sloane airborne — top right */}
                <div className="absolute -top-4 -right-2 sm:-right-6 w-20 h-28 sm:w-28 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center text-slate-500 text-[10px] text-center px-2 font-medium">
                    Sloane,<br />airborne
                  </div>
                </div>

                {/* Main headshot circle */}
                <div className="relative aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center text-slate-400 text-sm">
                    [Headshot]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personality strip */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="bg-white/70 backdrop-blur-md border border-sky-200/60 rounded-2xl shadow-sm divide-y md:divide-y-0 md:divide-x divide-sky-200/60 grid md:grid-cols-3">
              <div className="flex items-start gap-3 px-6 py-5">
                <MapPin className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <div className="text-sm">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Location</div>
                  <div className="text-slate-800 font-semibold">Denver, CO</div>
                </div>
              </div>
              <div className="flex items-start gap-3 px-6 py-5">
                <Compass className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <div className="text-sm">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Currently</div>
                  <div className="text-slate-800 font-semibold">Consulting in the Generative Engine Optimization space</div>
                </div>
              </div>
              <div className="flex items-start gap-3 px-6 py-5">
                <Music className="w-4 h-4 text-cyan-600 mt-1 shrink-0" />
                <div className="text-sm">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">On rotation</div>
                  <div className="text-slate-800 font-semibold">
                    King Gizzard &amp; the Lizard Wizard, Talking Heads, Justice, LCD Soundsystem, Harry Styles&apos; new album, Angine de Poitrine
                  </div>
                </div>
              </div>
            </div>
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
                Across fifteen years in agency creative, early-stage startups, and enterprise tech, I&apos;ve partnered
                with these teams on advertising strategy, MadTech, AdTech, and AI — driving new revenue, winning new
                customers, and building the kind of long-term relationships that turn into repeat business.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-7 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 flex items-center justify-center w-full h-10"
                  title={client.name}
                >
                  {client.svg}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6 font-bold">
              About
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 leading-[1.1]" style={serif}>
              Fifteen years of figuring out what people actually need — and then, occasionally, building it for them
              at{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent italic">
                2 a.m.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                The throughline of my career has been the same from day one: figure out what a client actually needs,
                then go build the path to get them there. I don&apos;t run pitch cycles — I run relationships. The
                deals I&apos;m proudest of weren&apos;t won on the first call; they were earned over months of being
                the person who showed up, asked better questions, and stayed in it long after the contract was signed.
              </p>
              <p>
                My first job out of college was at{" "}
                <span className="font-semibold text-slate-900">Crispin Porter + Bogusky</span> — AdAge&apos;s Agency
                of the Decade — where I helped build the agency&apos;s first proactive new-business function and
                contributed to a $100M+ pitch-win streak. I worked an unholy number of all-nighters to keep the best
                creative going out the door, and yes, I also hand-modeled internationally for Best Buy and Burger King.
                Genuinely.
              </p>
              <p>
                From there I went smaller and scrappier. As the first hire at{" "}
                <span className="font-semibold text-slate-900">Cooke + Wax</span>, an indie NYC ad agency, I helped
                grow the company more than 300% in one year past $2M (and assembled a heroic number of IKEA chairs
                along the way). I then advised{" "}
                <span className="font-semibold text-slate-900">Lunarpad</span>, a bootstrapped no-code mobile
                platform, on bringing the product to market — onboarding top-tier creative agencies as Beta partners
                and leading BD on mobile dev contracts. One of those was{" "}
                <span className="font-semibold text-slate-900">Cord</span>, a voice messaging app with 1M+ users that{" "}
                <span className="font-semibold text-slate-900">Spotify acquired in 2016</span>.
              </p>
              <p>
                Then enterprise:{" "}
                <span className="font-semibold text-slate-900">Oracle</span> (JPMorgan Chase, PepsiCo, J&amp;J,
                Amazon, Merck),{" "}
                <span className="font-semibold text-slate-900">Fastly</span> (selling to engineers who don&apos;t
                care about your slides), and{" "}
                <span className="font-semibold text-slate-900">Zeta Global</span> — where I led GTM for the first
                agentic AI email acquisition product to hit the market, with brands like Vail Resorts, Groupon,
                JCPenney, Stitch Fix, and JSX. Most recently, VP of Sales at{" "}
                <span className="font-semibold text-slate-900">FancyAI</span>, helping brands compete in the answer
                layer with implementation-ready GEO outputs instead of dashboards that just tell you you&apos;re
                losing.
              </p>
              <p>
                Startup of one to Fortune 500. Scrappy NYC walkup to enterprise war room. The constant:{" "}
                <span className="font-semibold text-slate-900">
                  be the person clients want in the room when something hard needs solving.
                </span>
              </p>
              <p>
                The other half of how I work:{" "}
                <span className="font-semibold text-slate-900">I build.</span> I write Claude Code commands to
                automate the boring parts of selling. I wire up Playwright agents that audit how prospects show up in
                LLMs. I read the docs. I think the best sellers in the next decade are the ones who actually
                understand what they&apos;re selling — and the only way to do that is to put your hands on it
                alongside your clients.
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

        {/* Now */}
        <section id="now" className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-slate-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="text-xs uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 font-bold">
                    Now
                  </div>
                  <span className="text-xs text-slate-400">Updated May 2026</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 leading-tight" style={serif}>
                  What I&apos;m working on right now.
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg" style={serif}>Consulting in the GEO space</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Partnering with brands and agencies on go-to-market and sales strategy for Generative Engine
                      Optimization — helping teams own the answer layer with implementation-ready content, schema, and
                      pipeline motion that actually closes.
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
                  Writing
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={serif}>
                  Notes from the field.
                </h2>
              </div>
              <a href="#" className="text-sm text-slate-700 hover:text-blue-600 flex items-center gap-1 font-medium">
                All posts <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid gap-5">
              {posts.map((post, i) => (
                <a
                  key={i}
                  href="#"
                  className="group block bg-white rounded-2xl p-7 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-200 hover:border-blue-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="flex items-baseline justify-between gap-6 mb-3 flex-wrap">
                    <h3
                      className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-blue-600 transition leading-tight"
                      style={serif}
                    >
                      {post.title}
                    </h3>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap text-white px-3 py-1 rounded-full bg-gradient-to-r ${post.color}`}
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
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Builds */}
        <section id="builds" className="relative py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full mb-4 font-bold">
              Builds
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3" style={serif}>
              Hands on the keyboard.
            </h2>
            <p className="text-slate-600 mb-12 max-w-2xl text-lg">
              I think the best sellers in the next decade are the ones who actually use the tools. Here&apos;s what
              I&apos;m shipping for myself and the teams I work with.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
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
                  <div className="text-xs text-slate-600 font-mono bg-white/60 rounded-lg px-3 py-2 inline-block">
                    {build.stack}
                  </div>
                </div>
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
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight" style={serif}>
                  The best deals start with a real conversation.
                </h2>
                <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                  Need a senior account leader? Looking for a GEO consulting partner? Want to compare notes on selling
                  AI to skeptical buyers? I&apos;d love to talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:ctjdorsey@gmail.com"
                    className="bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-slate-100 transition flex items-center justify-center gap-2 font-semibold"
                  >
                    <Mail className="w-4 h-4" /> ctjdorsey@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cdorsey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/40 backdrop-blur px-6 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2 font-semibold"
                  >
                    <LinkedinIcon /> Connect on LinkedIn
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
            <a href="#" className="hover:text-blue-600 transition">RSS</a>
            <a href="https://www.linkedin.com/in/cdorsey/" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href="mailto:ctjdorsey@gmail.com" className="hover:text-blue-600 transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
