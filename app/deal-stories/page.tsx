import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";

const DESCRIPTION =
  "Short accounts of enterprise deals Chris Dorsey closed before the budget line existed, starting with a $200K pilot that became a contract worth more than $1M.";

export const metadata: Metadata = {
  title: "Deal stories — Christopher Dorsey",
  description: DESCRIPTION,
  alternates: { canonical: "https://chrisdorsey.co/deal-stories" },
  openGraph: {
    title: "Deal stories — Chris Dorsey",
    description: DESCRIPTION,
    url: "https://chrisdorsey.co/deal-stories",
    type: "website",
    siteName: "Christopher Dorsey",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Deal stories by Christopher Dorsey" }],
  },
};

type Story = {
  id: string;
  title: string;
  meta: string;
  paragraphs: string[];
};

const STORIES: Story[] = [
  {
    id: "pilot-no-budget-line",
    title: "A pilot nobody had a budget line for",
    meta: "Zeta Global · 2025 · a national consumer retail brand",
    paragraphs: [
      "I was selling the first email customer-acquisition product that used AI to decide who to target. Every client I pitched said some version of the same thing: nobody had done this before, so nobody had a budget line for it.",
      "A national consumer retail brand agreed to try it, and its VP of Growth and Media signed a $200K pilot.",
      "The pilot performed, and the brand expanded it into a contract worth more than $1M on that performance.",
      "The budget line didn't exist when I started. It did by the time the contract closed.",
    ],
  },
];

const storiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://chrisdorsey.co/deal-stories",
  url: "https://chrisdorsey.co/deal-stories",
  name: "Deal stories by Christopher Dorsey",
  author: { "@id": "https://chrisdorsey.co/#person" },
};

export default function DealStoriesPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden grain-overlay" style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storiesJsonLd) }} />
      <SiteNav />
      <main className="max-w-3xl mx-auto px-7 pt-28 pb-16">
        <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold mb-5" style={{ color: INK, background: ACID }}>
          Deal stories
        </div>
        <h1 className="font-display font-extrabold" style={{ fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.0 }}>
          Deals with no budget line yet
        </h1>
        <p className="mt-4" style={{ fontSize: 18, lineHeight: 1.5, color: "#4a4239" }}>
          Short accounts of enterprise deals where the budget line didn&apos;t exist when I started. Client names are left out where the client hasn&apos;t cleared them.
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              id={story.id}
              className="rounded-2xl p-7"
              style={{ background: "#FBF8EF", border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${TEAL}` }}
            >
              <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(22px,3vw,30px)", lineHeight: 1.1 }}>
                {story.title}
              </h2>
              <p className="mt-2 font-mono uppercase" style={{ fontSize: 12, letterSpacing: "0.06em", color: "#6a6258" }}>
                {story.meta}
              </p>
              <div className="mt-5 flex flex-col gap-4" style={{ fontSize: 17, lineHeight: 1.6 }}>
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="m-0">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/track-record"
            className="inline-flex items-center gap-1.5 font-semibold rounded-full lift"
            style={{ fontSize: 15, padding: "12px 22px", background: INK, color: PAPER, border: `2px solid ${INK}` }}
          >
            See the full track record
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
