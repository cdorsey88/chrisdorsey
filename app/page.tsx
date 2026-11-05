"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Calendar, Clock } from "lucide-react";
import { posts as allPosts } from "@/app/lib/posts-data";
import { CONTACT_EMAIL, SHOW_TESTIMONIALS } from "@/app/lib/site-config";
import MobileMenu from "@/app/components/MobileMenu";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import SiteFooter from "@/app/components/SiteFooter";

// Homepage, cut to six sections (Nov 2026): hero, Campsite Ranger band, proof strip,
// latest writing, references, contact. About, the career timeline, the keyword ticker,
// Off the clock and the connector hub moved to /about; the Builds section moved to /builds.

// Layered-range mark — three ridges (blue, teal, ink). Layers rise on load, drift on hover.
const MountainMark = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size} height={Math.round(size * (36 / 48))} viewBox="0 0 48 36"
    fill="none"
    aria-hidden="true"
    className="mountain-mark shrink-0"
  >
    <g className="range-back"><path d="M2 34 L14 12 L24 26 L32 10 L46 34 Z" fill="#334E8C" opacity="0.85" /></g>
    <g className="range-mid"><path d="M0 34 L12 20 L22 30 L34 16 L48 34 Z" fill="#0E9F86" opacity="0.9" /></g>
    <g className="range-front"><path d="M-2 35 L10 26 L20 33 L32 24 L50 35 Z" fill="#1A1613" /></g>
  </svg>
);

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";

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

/* ---------------------------------------------------------------------------
   Proof strip — the track-record stat tiles and the client logo row in one band.
   Stats render their final values in server HTML; the count-up runs client-side.
--------------------------------------------------------------------------- */
const bandStats: { num?: number; suffix?: string; text?: string; label: string }[] = [
  { num: 16, suffix: "+", label: "Years selling creativity, data, and technology" },
  { num: 2, suffix: "×", label: "First seller in the building" },
  { text: "7‑figure", label: "Deals closed, repeatedly" },
  { text: "8‑figure", label: "Client relationships managed" },
];

const clients: { name: string; domain: string; logoClass?: string }[] = [
  { name: "JPMorgan Chase",      domain: "jpmorganchase.com" },
  { name: "Microsoft",           domain: "microsoft.com" },
  { name: "Amazon",              domain: "amazon.com" },
  { name: "PepsiCo",             domain: "pepsico.com" },
  { name: "Johnson & Johnson",   domain: "jnj.com" },
  { name: "Merck",               domain: "merck.com" },
  { name: "Inspire Brands",      domain: "inspirebrands.com" },
  { name: "Vail Resorts",        domain: "vailresorts.com", logoClass: "h-12" },
  { name: "Stitch Fix",          domain: "stitchfix.com" },
  { name: "Groupon",             domain: "groupon.com" },
  { name: "JCPenney",            domain: "jcpenney.com" },
  { name: "JSX",                 domain: "jsx.com" },
];


function ProofStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tick, setTick] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / 1600, 1);
          setTick(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="proof" aria-label="Track record and clients" className="relative px-7 py-14" style={{ background: INK, color: PAPER, borderBottom: `3px solid ${INK}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold" style={{ color: INK, background: ACID }}>Track record</div>
          <Link
            href="/track-record"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm lift"
            style={{ background: TEAL, color: "#fff" }}
          >
            See the full track record <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-8">
          {bandStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-extrabold leading-none font-display whitespace-nowrap" style={{ color: ACID, fontSize: "clamp(1.6rem, 3.6vw, 2.5rem)" }}>
                {stat.text ?? `${Math.round((stat.num ?? 0) * tick)}${stat.suffix}`}
              </div>
              <div className="h-0.5 rounded-full mt-3 mb-2.5" style={{ background: TEAL, width: "2.25rem" }} />
              <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(242,236,221,0.65)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10" style={{ borderTop: "1px solid rgba(242,236,221,0.16)" }}>
          <p className="text-sm mb-6 text-balance" style={{ color: "rgba(242,236,221,0.82)" }}>
            <span className="font-bold uppercase tracking-widest text-xs mr-2" style={{ color: PAPER }}>Brands &amp; teams I&apos;ve advised.</span>
            Companies I&apos;ve sold to or built work for. Many of these relationships lasted well past the first deal.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-5 items-stretch justify-items-stretch">
            {clients.map((client) => (
              <a
                key={client.name}
                href={`https://www.${client.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl flex flex-col items-center justify-center gap-1.5 w-full p-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: PAPER, border: `2px solid ${INK}`, boxShadow: `4px 4px 0 ${TEAL}` }}
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
      </div>
    </section>
  );
}

// Fixed homepage nav. Holds its own scroll state (only flips at the 50px threshold)
// so scrolling no longer re-renders the whole page.
function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
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
        <div className="flex items-center gap-3 md:gap-7">
          <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: INK }}>
            <Link href="/writing" className="font-medium nav-link">Writing</Link>
            <Link href="/builds" className="font-medium nav-link">Builds</Link>
            <Link href="/track-record" className="font-medium nav-link">Track Record</Link>
            <Link href="/about" className="font-medium nav-link">About</Link>
          </div>
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded-full font-semibold font-display btn-sayhi"
          >
            Say hi.
          </a>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default function ChrisDorseySite() {
  // Campsite Ranger build story is pinned as the featured post; the rest follow newest-first.
  const pinnedPost = allPosts.find((p) => p.slug === "how-i-built-campsite-ranger");
  const posts = pinnedPost
    ? [pinnedPost, ...allPosts.filter((p) => p !== pinnedPost).slice(0, 2)]
    : allPosts.slice(0, 3);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden grain-overlay"
      style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}
    >
      {/* Scroll progress indicator — color shifts teal→blue→violet→acid */}
      <ScrollProgress />

      {/* Nav — own component so scrolling doesn't re-render the page */}
      <HomeNav />

      <main>

        {/* Hero */}
        <section className="relative pt-16 pb-9 px-7" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto grid items-center gap-8 md:gap-10 grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
            <div>
              <div className="font-semibold mb-4" style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#4a4239" }}>
                Enterprise sales · AI &amp; MadTech
              </div>
              <h1 id="hero-heading" className="font-display font-extrabold" style={{ fontSize: "clamp(36px,5.6vw,72px)", lineHeight: 0.95, maxWidth: "16ch", color: INK, isolation: "isolate" }}>
                I sell what buyers{" "}
                <span style={{ position: "relative", whiteSpace: "nowrap" }}>
                  don&apos;t have
                  <span aria-hidden="true" style={{ position: "absolute", left: -2, right: -2, bottom: "0.08em", height: "0.34em", background: ACID, zIndex: -1, transform: "skewX(-8deg)" }} />
                </span>{" "}
                <span style={{ color: TEAL }}>a budget for yet</span>.
              </h1>
              <p className="font-display font-extrabold mt-3.5" style={{ fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.1, maxWidth: "34ch", color: TEAL }}>
                AI-native builder, too. I built Campsite Ranger solo, and it has over 600 users, more than 100 of them paying.
              </p>
              <p className="mt-5 mb-5 leading-relaxed" style={{ fontSize: "clamp(15px,1.6vw,18px)", maxWidth: "54ch", color: "#3a332c" }}>
                16 years taking first-to-market AI and MadTech to Fortune 500 buyers, from Oracle Advertising&apos;s
                contextual targeting to Zeta Global&apos;s first AI acquisition product.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5 sm:items-center">
                <Link
                  href="/track-record"
                  className="font-semibold rounded-full lift text-center whitespace-nowrap w-full sm:w-auto"
                  style={{ fontSize: 16, padding: "15px 26px", background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
                >
                  See the track record
                </Link>
              </div>
            </div>
            {/* Boldly framed portrait */}
            <div className="justify-self-center w-full max-w-[200px] md:max-w-[340px]">
              <div className="relative overflow-hidden" style={{ border: `3px solid ${INK}`, borderRadius: 20, boxShadow: `12px 12px 0 ${ACID}`, transform: "rotate(1.5deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/headshot.jpg" alt="Christopher Dorsey" className="w-full block" />
              </div>
            </div>
          </div>

        </section>

        {/* Campsite Ranger launch band — sits directly under the hero, above the fold */}
        <aside
          aria-label="Campsite Ranger launch"
          className="px-7 py-4 md:py-5"
          style={{ background: ACID, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-5 md:gap-6">
            <a
              href="https://www.campsiteranger.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Campsite Ranger — visit the live site"
              className="shrink-0 block"
              style={{ width: 165 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/campsite-ranger-live.webp"
                alt="Campsite Ranger homepage: cancellation alerts for sold-out Colorado campsites and permits"
                loading="lazy"
                width={165}
                className="w-full block rounded-[10px] transition-transform hover:-translate-y-1"
                style={{ border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, transform: "rotate(-1.5deg)" }}
              />
            </a>
            <div className="flex-1" style={{ minWidth: 260 }}>
              <a
                href="https://coloradosun.com/2026/10/08/new-websites-helps-campers-score-top-campsites-in-colorado/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-2 transition-transform hover:-translate-y-0.5"
                style={{ background: INK, color: ACID }}
              >
                Featured in The Colorado Sun <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="font-display font-extrabold leading-tight mb-1" style={{ fontSize: "clamp(19px,2.2vw,22px)", color: INK }}>
                Campsite Ranger gets you into sold-out campgrounds.
              </p>
              <p className="leading-snug" style={{ fontSize: 15, color: "rgba(26,22,19,0.72)" }}>
                It emails you the moment a cancellation opens your dates on Colorado campsites and permits. A live
                product with over 600 users and more than 100 paying customers, designed and shipped solo in seven weeks.{" "}
                <Link href="/writing/how-i-built-campsite-ranger" className="font-semibold underline underline-offset-2" style={{ color: INK }}>
                  How I did it
                </Link>
              </p>
            </div>
            <a
              href="https://www.campsiteranger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold rounded-full lift shrink-0"
              style={{ fontSize: 15, padding: "12px 21px", background: INK, color: PAPER, border: `2px solid ${INK}` }}
            >
              See it live <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </aside>

        {/* Soundcheck band — sits directly under the Campsite Ranger band */}
        <aside
          aria-label="Soundcheck build"
          className="px-7 py-4 md:py-5"
          style={{ background: VIOLET, color: PAPER, borderBottom: `3px solid ${INK}` }}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-5 md:gap-6">
            <Link
              href="/writing/soundcheck-audio-brand-qa"
              aria-label="Soundcheck: read how I built it"
              className="shrink-0 block rounded-[10px] transition-transform hover:-translate-y-1"
              style={{ width: 165, height: 100, background: PAPER, border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, transform: "rotate(1.5deg)" }}
            >
              <svg viewBox="0 0 165 100" width="100%" height="100%" aria-hidden="true">
                {[10, 22, 34, 18, 46, 62, 40, 70, 52, 30, 56, 38, 20, 44, 26, 14].map((h, i) => (
                  <rect key={i} x={12 + i * 9.2} y={50 - h / 2} width={5} height={h} rx={2.5} fill={i === 7 ? "#E5484D" : INK} />
                ))}
              </svg>
            </Link>
            <div className="flex-1" style={{ minWidth: 260 }}>
              <span
                className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-2"
                style={{ background: PAPER, color: INK }}
              >
                MVP · built in August
              </span>
              <p className="font-display font-extrabold leading-tight mb-1" style={{ fontSize: "clamp(19px,2.2vw,22px)" }}>
                Soundcheck listens to AI-generated audio ads before they air.
              </p>
              <p className="leading-snug" style={{ fontSize: 15, color: "rgba(242,236,221,0.9)" }}>
                On its first live run it flagged 5 of 12 spots in a simulated campaign. My comments on the IAB&rsquo;s
                agent-buying spec led to changes in an open pull request on how audio ads record voice and provenance.{" "}
                <Link href="/writing/iab-openproposal-audio-format-registry" className="font-semibold underline underline-offset-2">
                  The IAB comment
                </Link>
              </p>
            </div>
            <Link
              href="/writing/soundcheck-audio-brand-qa"
              className="inline-flex items-center gap-1.5 font-semibold rounded-full lift shrink-0"
              style={{ fontSize: 15, padding: "12px 21px", background: PAPER, color: INK, border: `2px solid ${INK}` }}
            >
              How I built it <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>

        {/* Proof strip — stat tiles + client logos */}
        <ProofStrip />

        {/* Writing — teal band, bento layout */}
        <section id="writing" className="relative py-16 px-7" style={{ background: TEAL, borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
                  Writing
                </div>
                <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(28px,4vw,46px)", color: "#fff" }}>
                  Notes from the field.
                </h2>
              </div>
              <Link href="/writing" className="text-sm flex items-center gap-1 font-semibold" style={{ color: ACID }}>
                All {allPosts.length} posts <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.92)", maxWidth: "62ch" }}>
              My beat is advertising, marketing, tech, and AI. Same approach I take in sales:
              notice something other people haven&apos;t yet, say what I think about it, and get it out while
              it&apos;s still news, sources attached.
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

            {/* Remaining posts — two-up grid */}
            <div className="grid gap-4 md:grid-cols-2 md:auto-rows-fr">
              {posts.slice(1).map((post, i) => {
                // Cream / violet fills under the featured acid block.
                const fills = [
                  { bg: PAPER, fg: INK, tag: BLUE, tagText: "#fff" },
                  { bg: VIOLET, fg: "#fff", tag: ACID, tagText: INK },
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
            <NewsletterSignup source="home" className="mt-10" />
          </div>
        </section>

        {/* References — two quotes; the full set lives on /about */}
        {SHOW_TESTIMONIALS && <Testimonials featured />}

        {/* Contact */}
        <section id="contact" className="relative py-16 px-7">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ background: TEAL, color: "#fff", border: `3px solid ${INK}`, boxShadow: `10px 10px 0 ${INK}` }}>
              <div className="relative">
                <div className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>Get in touch</div>
                <h2 className="font-display font-extrabold mb-4 leading-[1.0]" style={{ fontSize: "clamp(30px,5vw,56px)" }}>
                  Hiring, building, or stuck on a deal?<br />Let&apos;s talk.
                </h2>
                <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>I respond to every note personally.</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition hover:opacity-90 lift"
                  style={{ background: "#fff", color: INK, border: `2px solid ${INK}` }}
                >
                  <Mail className="w-4 h-4" /> Email me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
