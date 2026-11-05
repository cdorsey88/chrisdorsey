"use client";

// Profile sections shared by the homepage, /about and /builds. Moved out of
// app/page.tsx (Nov 2026) when About and Builds became their own pages.

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";
const MAGENTA = "#0E9F86";

// Community picks are hidden for now (Sept 2026) to reduce clutter. Flip to true to restore.
const SHOW_COMMUNITY_PICKS = false;

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
export function Reveal({
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

export function ConnectorHub() {
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
      <div className="text-2xl md:text-4xl font-extrabold font-display leading-[0.95]" style={{ color: INK, maxWidth: "24ch" }}>
        Chances are, I already know who you should talk to.
      </div>
      <p className="text-base md:text-lg mt-4 max-w-2xl" style={{ color: "#4a4239" }}>
        Sixteen years across four industries means I know a lot of people, from Fortune 500 CMOs
        to the creatives who make the work. Tell me what you need and I&apos;ll make the
        introduction. No fee, no angle — I truly just enjoy connecting people.
        Things like that tend to come around.
      </p>
      <div className="font-display font-extrabold mt-4" style={{ fontSize: "clamp(20px,3vw,30px)", color: INK }}>
        I&apos;ll connect you with{" "}
        {/* Below lg the rotating phrase always sits on its own line (block + nowrap), so the
            line count is constant across words and the content below never shifts. */}
        <span className="block lg:inline whitespace-nowrap">
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
        </span>
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 920 360"
        className="w-full h-auto block mx-auto mt-6"
        style={{ maxWidth: 720 }}
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
          href="/#contact"
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
export function EvolutionMarquee() {
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
   Career timeline — era cards, warming gray→teal toward "now".
--------------------------------------------------------------------------- */
export function CareerEras() {
// Era cards — warming gray→teal toward "now".
const eras = [
  { title: "Creative & PR", year: "2010", desc: "Crispin Porter + Bogusky — Agency of the Decade. Built the first proactive new-business team, which won $100M+. Worked on Groupon's Super Bowl commercials.", bg: CREAM2, fg: INK, border: INK },
  { title: "Digital", year: "2013", desc: "First hire at an indie NYC shop. Grew revenue 300% in a year. With 8 people full-time, we beat legacy industry leaders for IMAX creative AOR, then repositioned the brand around intensity.", bg: ACID, fg: INK, border: INK },
  { title: "Data", year: "2018", desc: "Oracle Advertising — managed Amazon, J&J, PepsiCo. #1 US pharma seller for audience data and contextual targeting. Tapped by the exec team to represent all US sellers on roadmap feedback. Edge infrastructure at Fastly.", bg: BLUE, fg: "#fff", border: BLUE },
  { title: "AI acquisition", year: "2024", desc: "Zeta Global — first email-based AI customer-acquisition product to market, with opt-in permission to email 110M+ people for clients. Grew a $200K pilot into a $1M+ contract on performance.", bg: VIOLET, fg: "#fff", border: VIOLET },
  { title: "AI & agents", year: "now", desc: "Full-time: selling AI-driven audience modeling and closed-loop measurement to national consumer brands. Nights and weekends: live music, toddler playtime, and Campsite Ranger, live with over 600 users and more than 100 paying customers.", bg: TEAL, fg: "#fff", border: TEAL },
];


  return (
    <section className="px-7 py-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(28px,4vw,46px)", color: INK }}>
            I&apos;ve sold through every one of these shifts and helped clients come out ahead each time.
          </div>
          <p className="mt-3 mb-8 max-w-2xl" style={{ fontSize: 17, color: "#4a4239" }}>
            The job hasn&apos;t changed: figure out what&apos;s new, then help clients use it before their
            competitors do.
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

  );
}

/* ---------------------------------------------------------------------------
   About story. On /about it carries the page h1.
--------------------------------------------------------------------------- */
export function AboutStory({ asPage = false }: { asPage?: boolean }) {
  const H = asPage ? "h1" : "h2";
  return (
    <section id="about" className="relative pt-16 pb-10 px-7">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6 font-bold" style={{ color: INK, background: ACID }}>
          About
        </div>
        <H className="font-display font-extrabold mb-8 leading-[1.0]" style={{ fontSize: "clamp(30px,4vw,48px)", color: INK }}>
          I&apos;ve been the first seller in the building twice. And, once, an{" "}
          <span style={{ color: TEAL }}>international hand model.</span>
        </H>
        <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#3a332c", maxWidth: "62ch" }}>
          <p>
            My whole career comes down to this: figure out what a client needs, then help them get there. The deals I&apos;m proudest of took months of showing up before anyone signed,
            and the work kept going for years after. Most enterprise deals get decided in meetings the
            seller isn&apos;t invited to. What carries you through those is whether the client trusts you.
          </p>
          <p>
            The full 16 years, with the numbers, lives on the{" "}
            <Link href="/track-record" className="font-semibold" style={{ color: TEAL }}>
              track record page
            </Link>
            . The short version: I started at Crispin Porter + Bogusky when it was AdAge&apos;s Agency of the
            Decade, helping build its first proactive new-business function. I was the first hire at an indie
            NYC agency and helped grow it 300% in a year. I managed Amazon and Johnson &amp; Johnson for
            Oracle Advertising, then took Zeta Global&apos;s first AI customer-acquisition product to market before buyers
            had a budget line for it. Today I&apos;m at Epsilon, selling AI-driven audience modeling and closed-loop
            measurement to national brands, and I consult for a handful of companies on the side. Carrying a
            number is still the part I like&nbsp;most.
          </p>
          <p>
            I also build with the tools I sell. Lately that means Claude Code commands that compress prospect
            research from hours to minutes, and an agent that surfaces untapped opportunities inside existing
            accounts, building the expansion roadmap an account leader would otherwise piece together by hand. I don&apos;t think you can sell a product well until you&apos;ve used it yourself, so&nbsp;I&nbsp;do.
          </p>
        </div>
      </div>
    </section>

  );
}

/* ---------------------------------------------------------------------------
   Off the clock — ridgeline into an ink band: family, music, Main Street.
--------------------------------------------------------------------------- */
export function OffTheClock() {
  return (
    <>
      {/* Ridgeline divider — cream fades into the ink band like dusk over the Front Range */}
      <div aria-hidden="true" className="relative overflow-hidden" style={{ marginBottom: -1 }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block ridge-drift" style={{ height: 56, width: "104%", marginLeft: "-2%" }}>
          <path
            d="M0 64 L0 46 L90 28 L150 42 L260 16 L340 40 L430 24 L520 44 L610 20 L700 38 L820 12 L920 40 L1010 26 L1100 44 L1200 18 L1300 40 L1380 30 L1440 46 L1440 64 Z"
            fill={INK}
          />
        </svg>
      </div>

      {/* Off the clock — ink band, personality in color */}
      <section className="px-7 py-14" style={{ background: INK, color: PAPER, borderBottom: `3px solid ${INK}` }}>
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <h2 id="off-the-clock" className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
              Off the clock
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(242,236,221,0.88)", maxWidth: "62ch" }}>
              I&apos;m girl dad to Sloane, my adorable and rambunctious toddler, married to my incredible
              wife Alexis, and happiest somewhere above 8,000 feet with Berkeley, our trail dog. Elon
              University grad and Maryland native.
            </p>
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

    </>
  );
}

/* ---------------------------------------------------------------------------
   Builds — Campsite Ranger feature, build cards, (hidden) community picks.
   On /builds it carries the page h1.
--------------------------------------------------------------------------- */
export function BuildsSection({ asPage = false }: { asPage?: boolean }) {
  const H = asPage ? "h1" : "h2";
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
    title: "Verification Providers Missed Easy-To-Spot Bots, Says Adalytics",
    by: "AdExchanger",
    desc: "Adalytics documented verification vendors scoring self-declared bots as human traffic: IAS 77% of the time across a 2019–2024 dataset, DoubleVerify 21% on the same bots. The vendors dispute the methodology and the fight is now in litigation. Worth reading before your next media-quality renewal, because Nielsen just paid $2.15 billion for one side of this argument.",
    url: "https://www.adexchanger.com/platforms/verification-providers-missed-easy-to-spot-bots-says-adalytics-what-went-wrong/",
  },
  {
    title: "Lighthouse or Landgrab? How to Pick Your AI Sales Strategy",
    by: "Joe Schmidt × a16z",
    desc: "Two questions decide your enterprise AI motion: how exposed is the person who signs, and does social proof travel in that market. High exposure with traveling proof means you need marquee logos first; recoverable mistakes in a fragmented market means you should be selling on math in Ohio while a competitor courts the Fortune 100. The trap list at the end is the part to bring to your pipeline review.",
    url: "https://a16z.com/lighthouse-or-landgrab-how-to-pick-your-ai-sales-strategy/",
  },
];

// Each build card needs a clickable or concrete proof element before it ships.
// proofUrl renders a link; proofText renders an outcome line. See FILL-CHECKLIST.md.
const builds = [
  {
    title: "Call Butler — live call assistant for sellers",
    stack: "Claude API · Deepgram · Real-time · Shared with sellers",
    desc: "A real-time call assistant I built and share with other sellers. It transcribes the call live, catches the moment someone asks a real question or drops an unfamiliar term, and puts talking points in a side window, pulled from your prep notes and a live web lookup. Nothing is sent into the call; it's like a subject-matter expert sitting beside you while you talk.",
    proofText: "Built, live-tested, and in daily use.",
    proofUrl: null as string | null,
    proofLabel: null as string | null,
  },
  {
    title: "Soundcheck — brand QA for AI-generated audio ads",
    stack: "ElevenLabs Voice Design · TTS · Music · SFX · Dubbing · Scribe v2 · Python",
    desc: "An MVP I built using six ElevenLabs APIs. It turns a brand's guidelines into a machine-readable standard, generates a 12-spot, four-market campaign, then checks every render for script fidelity, pronunciation, pace, loudness, required disclosures, and voice drift, and prices each miss against the media plan. On the live run it flagged 5 of 12 spots, $1.82M of a simulated $2.8M plan, and caught a mispronounced founder name nobody had planted. As far as I can find, no vendor sells this for audio yet; the brand-compliance tools score pixels.",
    proofText: "MVP. Live run verified Aug 2026.",
    proofUrl: "/writing/soundcheck-audio-brand-qa" as string | null,
    proofLabel: "Read the write-up" as string | null,
  },
];


  return (
    <section id="builds" className="relative py-16 px-7">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
          Builds
        </div>
        <H className="font-display font-extrabold mb-3" style={{ fontSize: "clamp(28px,4vw,46px)", color: INK }}>
          Hands on the keyboard.
        </H>
        <p className="mb-10 max-w-2xl text-lg text-balance" style={{ color: "#4a4239" }}>
          Sellers who build with AI win. I use the tools I sell, every week. Here&apos;s what I&apos;m
          shipping.
        </p>

        {/* Campsite Ranger — launch feature */}
        <div id="campsite-ranger" className="rounded-2xl mb-14 overflow-hidden" style={{ background: INK, color: PAPER, border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${TEAL}` }}>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-7 md:p-9">
              <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ background: ACID, color: INK }}>
                Launched &middot; August 2026
              </div>
              <h3 className="font-display font-extrabold mb-3" style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.05, color: PAPER }}>
                Campsite Ranger is live.
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(242,236,221,0.85)" }}>
                A paying product, running around the clock. Campsite Ranger watches recreation.gov and emails Colorado campers a booking link the moment a sold-out campsite, timed-entry permit, or wilderness zone opens in their dates &mdash; then keeps watching wildfire, smoke, and closures so the trip is still worth the drive.
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(242,236,221,0.85)" }}>
                I designed, built, and shipped every piece of it myself, pairing with Claude Code: 337 commits from first line to launch, in seven weeks, on nights and weekends.
              </p>
              <a
                href="https://coloradosun.com/2026/10/08/new-websites-helps-campers-score-top-campsites-in-colorado/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl px-4 py-3 mb-5"
                style={{ border: "2px solid rgba(242,236,221,0.25)", background: "rgba(242,236,221,0.06)" }}
              >
                <span className="block text-xs uppercase tracking-widest font-bold mb-1" style={{ color: ACID }}>
                  In the press &middot; The Colorado Sun &middot; Oct 8, 2026
                </span>
                <span className="flex items-start gap-1.5 font-display font-bold leading-snug" style={{ fontSize: 17, color: PAPER }}>
                  &ldquo;A new website is helping campers score Colorado&rsquo;s most elusive campsites&rdquo;
                  <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              <div className="flex gap-3 flex-wrap items-center mb-5">
                <a
                  href="https://www.campsiteranger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold rounded-full lift"
                  style={{ fontSize: 15, padding: "11px 20px", background: ACID, color: INK, border: `2px solid ${ACID}` }}
                >
                  Visit campsiteranger.com <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/writing/how-i-built-campsite-ranger"
                  className="inline-flex items-center gap-1 font-semibold rounded-full"
                  style={{ fontSize: 15, padding: "11px 20px", border: `2px solid ${PAPER}`, color: PAPER }}
                >
                  Read the build story <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-xs font-mono rounded-lg px-3 py-2 inline-block" style={{ background: "rgba(242,236,221,0.1)", color: PAPER }}>
                Next.js &middot; Python &middot; Supabase &middot; Fly.io &middot; Lemon Squeezy &middot; Claude Code
              </div>
            </div>
            <div className="p-5 md:p-7">
              <a href="https://www.campsiteranger.com" target="_blank" rel="noopener noreferrer" className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/campsite-ranger-live.webp"
                  alt="Campsite Ranger homepage: cancellation alerts for sold-out Colorado campsites and permits"
                  loading="lazy"
                  className="w-full block rounded-xl transition-transform hover:-translate-y-1"
                  style={{ border: `3px solid ${PAPER}`, boxShadow: `8px 8px 0 ${ACID}`, transform: "rotate(-1deg)" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* My builds — bold color tiles, big numbers */}
        <p className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold" style={{ color: INK, background: ACID }}>What I&apos;m building</p>
        <div className={`grid md:grid-cols-2 gap-5 ${SHOW_COMMUNITY_PICKS ? "mb-14" : ""}`}>
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

                    {/* Community picks — hidden while SHOW_COMMUNITY_PICKS is false */}
        {SHOW_COMMUNITY_PICKS && (<>
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
        </>)}
      </div>
    </section>

  );
}
