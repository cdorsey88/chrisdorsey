import { tagSlug } from "@/app/lib/tags";

// "Field notes" nameplate header for /writing. Every count and the dateline
// month come in as props computed from posts-data.ts.

const INK = "#1A1613";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";
const MUTED = "#4a4239";

export type HeaderData = {
  dek: string;
  total: number;
  topics: [string, number][]; // tag, post count; most posts first
  latestMonthLong: string; // newest post's month, e.g. "November 2026"
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

/* Field notes nameplate: newspaper double rules, a dateline row, the title
   as a nameplate under the mountain mark, the dek as the tagline, and a
   compact topic index. The acid Index tag is the one acid object. */
export default function WritingHeader({ data }: { data: HeaderData }) {
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
            {t}{" "}<span style={{ color: TEAL }}>{n}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
