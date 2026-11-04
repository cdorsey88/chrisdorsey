import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import SiteNav from "@/app/components/SiteNav";
import NewsletterSignup from "@/app/components/NewsletterSignup";
import { SERIES, getSeries, postsInSeries } from "@/app/lib/series";

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const ACID = "#C7F03A";

export function generateStaticParams() {
  return SERIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeries(slug);
  if (!series) return {};
  const url = `https://chrisdorsey.co/writing/series/${series.slug}`;
  return {
    title: `${series.title}: a series by Chris Dorsey`,
    description: series.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${series.title}: a series by Chris Dorsey`,
      description: series.description,
      url,
      type: "website",
      siteName: "Chris Dorsey",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: series.title }],
    },
  };
}

export default async function SeriesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const series = getSeries(slug);
  if (!series) notFound();
  const members = postsInSeries(series.slug);
  const others = SERIES.filter((s) => s.slug !== series.slug);
  const url = `https://chrisdorsey.co/writing/series/${series.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    url,
    name: series.title,
    description: series.description,
    isPartOf: { "@id": "https://chrisdorsey.co/#blog" },
    author: { "@id": "https://chrisdorsey.co/#person" },
    hasPart: members.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://chrisdorsey.co/writing/${p.slug}`,
    })),
  };

  return (
    <div className="min-h-screen grain-overlay" style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#6a6258" }}
        >
          ← All writing
        </Link>

        <div className="mb-12">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: series.fg, background: series.color }}
          >
            Series · {members.length} posts
          </div>
          <h1
            className="font-display font-extrabold tracking-tight"
            style={{ fontSize: "clamp(34px,5.2vw,58px)", lineHeight: 0.98, color: INK }}
          >
            {series.title}
          </h1>
          <p className="text-lg mt-4 leading-relaxed" style={{ color: "#4a4239", maxWidth: "60ch" }}>
            {series.description}
          </p>
        </div>

        <ol className="grid gap-4">
          {members.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/writing/${p.slug}`}
                className="group flex gap-5 rounded-2xl p-5 md:p-6 transition-transform hover:-translate-y-0.5"
                style={{ background: i % 2 ? CREAM2 : PAPER, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}
              >
                <span className="font-display font-extrabold shrink-0" style={{ fontSize: 30, lineHeight: 1, color: series.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display font-bold leading-snug" style={{ fontSize: "clamp(18px,2.2vw,21px)", color: INK }}>
                    {p.title}
                  </span>
                  <span className="block text-sm leading-relaxed mt-2" style={{ color: "rgba(26,22,19,0.75)" }}>
                    {p.excerpt.length > 170 ? `${p.excerpt.slice(0, 170).trimEnd()}…` : p.excerpt}
                  </span>
                  <span className="flex items-center gap-3 text-xs mt-3 font-semibold" style={{ color: "#6a6258" }}>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {p.readTime}</span>
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0 mt-1" style={{ color: series.color }} />
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#8a8276" }}>Other series</p>
          <div className="flex flex-wrap gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/writing/series/${s.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-sm px-4 py-2 rounded-full lift"
                style={{ background: s.color, color: s.fg, border: `2px solid ${INK}` }}
              >
                {s.title} <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <NewsletterSignup source={`series-${series.slug}`} className="mt-14" />
      </main>
    </div>
  );
}
