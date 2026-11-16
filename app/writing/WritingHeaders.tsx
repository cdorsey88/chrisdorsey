import NewsletterSignup from "@/app/components/NewsletterSignup";
import { tagSlug } from "@/app/lib/tags";

// Three header treatments for /writing. page.tsx picks one with WRITING_HEADER.
// Each uses acid green once, as its focal accent. Every count and date comes in
// as props computed from posts-data.ts.

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";
const MUTED = "#4a4239";

export type HeaderVariant = "a" | "b" | "c";

export type HeaderData = {
  dek: string;
  total: number;
  topics: [string, number][]; // tag, post count; most posts first
  firstMonth: string; // e.g. "Feb 2026"
  latestMonthLong: string; // e.g. "November 2026"
  seriesCount: number;
};

// Topic links do a full load so WritingList reads ?tag= on mount.
const topicHref = (tag: string) => `/writing?tag=${tagSlug(tag)}#every-post`;

// Layered-range mark, same glyph as the nav and footer.
const MountainMark = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size}
    height={Math.round(size * (36 / 48))}
    viewBox="0 0 48 36"
    fill="none"
    aria-hidden="true"
    className="mountain-mark shrink-0"
  >
    <g className="range-back"><path d="M2 34 L14 12 L24 26 L32 10 L46 34 Z" fill="#334E8C" opacity="0.85" /></g>
    <g className="range-mid"><path d="M0 34 L12 20 L22 30 L34 16 L48 34 Z" fill="#0E9F86" opacity="0.9" /></g>
    <g className="range-front"><path d="M-2 35 L10 26 L20 33 L32 24 L50 35 Z" fill="#1A1613" /></g>
  </svg>
);

/* A. Masthead: big display title with the hero's acid bar, ink eyebrow chip,
   the dek, and sticker chips for the top topics. */
function Masthead({ data }: { data: HeaderData }) {
  const topics = data.topics.slice(0, 6);
  return (
    <header className="max-w-5xl mx-auto px-7 pt-14 md:pt-20 pb-12">
      <div
        className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold"
        style={{ color: PAPER, background: INK }}
      >
        Writing
      </div>
      <h1
        className="font-display font-extrabold"
        style={{ fontSize: "clamp(46px,8.6vw,108px)", lineHeight: 0.92, color: INK, isolation: "isolate" }}
      >
        Notes from{" "}
        <span style={{ position: "relative", whiteSpace: "nowrap" }}>
          the field
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: -4,
              right: -4,
              bottom: "0.06em",
              height: "0.34em",
              background: ACID,
              zIndex: -1,
              transform: "skewX(-8deg)",
            }}
          />
        </span>
        <span style={{ color: TEAL }}>.</span>
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed" style={{ fontSize: "clamp(18px,1.9vw,21px)", color: MUTED }}>
        {data.dek}
      </p>
      <nav
        aria-label="Browse by topic"
        className="mt-9 pt-6 flex flex-wrap items-center gap-2.5"
        style={{ borderTop: `3px solid ${INK}` }}
      >
        <span className="text-xs uppercase tracking-widest font-bold mr-1.5" style={{ color: MUTED }}>
          Topics
        </span>
        <a
          href="#every-post"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-transform hover:-translate-y-0.5"
          style={{ background: INK, color: PAPER, border: `2px solid ${INK}`, boxShadow: `3px 3px 0 ${TEAL}` }}
        >
          All posts <span style={{ opacity: 0.65 }}>{data.total}</span>
        </a>
        {topics.map(([t, n]) => (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            key={t}
            href={topicHref(t)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-transform hover:-translate-y-0.5"
            style={{ background: PAPER, color: INK, border: `2px solid ${INK}`, boxShadow: `3px 3px 0 ${INK}` }}
          >
            {t} <span style={{ opacity: 0.55 }}>{n}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

/* B. Ink band: full-bleed ink, paper title, a stats strip in the proof-strip
   style, and the newsletter signup. Its acid button is the one acid object. */
function InkBand({ data }: { data: HeaderData }) {
  const stats = [
    { value: String(data.total), label: "Posts" },
    { value: data.firstMonth, label: "First post" },
    { value: String(data.seriesCount), label: "Series" },
  ];
  return (
    <header className="pt-14 md:pt-20 pb-14" style={{ background: INK, color: PAPER, borderBottom: `3px solid ${INK}` }}>
      <div className="max-w-5xl mx-auto px-7">
        <div
          className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5 font-bold"
          style={{ color: "#fff", background: TEAL }}
        >
          Writing
        </div>
        <h1
          className="font-display font-extrabold"
          style={{ fontSize: "clamp(46px,8.6vw,108px)", lineHeight: 0.92, color: PAPER }}
        >
          Notes from the <span style={{ color: TEAL }}>field.</span>
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed" style={{ fontSize: "clamp(18px,1.9vw,21px)", color: "rgba(242,236,221,0.82)" }}>
          {data.dek}
        </p>
        <dl className="mt-10 pt-8 flex flex-wrap gap-x-12 gap-y-6" style={{ borderTop: "1px solid rgba(242,236,221,0.16)" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="m-0">
                <span className="block font-display font-extrabold leading-none whitespace-nowrap" style={{ fontSize: "clamp(1.7rem,3.6vw,2.5rem)", color: PAPER }}>
                  {s.value}
                </span>
                <span aria-hidden="true" className="block h-0.5 rounded-full mt-3 mb-2.5" style={{ background: TEAL, width: "2.25rem" }} />
                <span aria-hidden="true" className="block text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(242,236,221,0.65)" }}>
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <NewsletterSignup
          source="writing-header"
          className="mt-10 bg-[#25201B]! border-[rgba(242,236,221,0.22)]!"
        />
      </div>
    </header>
  );
}

/* C. Field notes nameplate: newspaper double rules, a dateline row, the title
   as a nameplate under the mountain mark, the dek as the tagline, and a
   compact topic index. The acid Index tag is the one acid object. */
function Nameplate({ data }: { data: HeaderData }) {
  const topics = data.topics.slice(0, 8);
  return (
    <header className="max-w-5xl mx-auto px-7 pt-12 md:pt-16 pb-16">
      {/* top double rule */}
      <div aria-hidden="true" style={{ borderTop: `4px solid ${INK}`, borderBottom: `1px solid ${INK}`, height: 8 }} />
      <div
        className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2.5 font-bold uppercase"
        style={{ fontSize: 11, letterSpacing: "0.14em", color: INK, borderBottom: `1px solid ${INK}` }}
      >
        <span>Denver, Colorado · {data.latestMonthLong}</span>
        <span style={{ color: MUTED }}>{data.total} posts</span>
      </div>

      <div className="text-center pt-8 md:pt-10 pb-7">
        <div className="flex justify-center mb-3">
          <MountainMark size={64} />
        </div>
        <h1
          className="font-display font-extrabold"
          style={{ fontSize: "clamp(42px,8.2vw,100px)", lineHeight: 0.95, letterSpacing: "-0.035em", color: INK, textWrap: "balance" }}
        >
          Notes from the field.
        </h1>
        <p
          className="mx-auto mt-5 leading-snug"
          style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontSize: "clamp(19px,2.1vw,24px)", color: MUTED, maxWidth: "40ch", textWrap: "balance" }}
        >
          {data.dek}
        </p>
      </div>

      {/* bottom double rule */}
      <div aria-hidden="true" style={{ borderTop: `1px solid ${INK}`, borderBottom: `4px solid ${INK}`, height: 8 }} />
      <nav aria-label="Topic index" className="pt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
        <span
          className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold"
          style={{ color: INK, background: ACID }}
        >
          Index
        </span>
        {topics.map(([t, n]) => (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            key={t}
            href={topicHref(t)}
            className="text-xs font-bold uppercase tracking-wider whitespace-nowrap underline-offset-4 hover:underline"
            style={{ color: INK }}
          >
            {t} <span style={{ color: TEAL }}>{n}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default function WritingHeader({ variant, data }: { variant: HeaderVariant; data: HeaderData }) {
  if (variant === "b") return <InkBand data={data} />;
  if (variant === "c") return <Nameplate data={data} />;
  return <Masthead data={data} />;
}
