import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { companyPages } from "../companies-data";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

// Redesign palette — matches the homepage.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";

// Mountain mark — mirrors the homepage logo glyph.
const MountainMark = ({ id = "for-mtn" }: { id?: string }) => (
  <svg width="26" height="19" viewBox="0 0 30 22" fill="none" aria-hidden="true" className="shrink-0">
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334E8C" />
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

// Only pre-render the slugs defined in companies-data.ts; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(companyPages).map((company) => ({ company }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> {
  const { company } = await params;
  const page = companyPages[company];
  if (!page) return {};
  return {
    title: `Chris Dorsey × ${page.company}`,
    description: `How I'd approach ${page.role} at ${page.company}.`,
    // Private interview pages. Never index, never follow, no sitemap entry.
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const page = companyPages[company];
  if (!page) notFound();

  const sections = [
    { heading: "What I see in your market", body: page.market, accent: BLUE },
    { heading: "My first 90 days", body: page.ninetyDays, accent: TEAL },
    { heading: "Why my background maps", body: page.whyMe, accent: VIOLET },
  ];

  return (
    <div
      className="min-h-screen grain-overlay"
      style={{
        background: PAPER,
        color: INK,
        fontFamily: "var(--font-inter)",
      }}
    >
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(242,236,221,0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid rgba(26,22,19,0.12)`,
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 whitespace-nowrap hover:opacity-80 transition-opacity">
            <MountainMark />
            <span className="font-display" style={{ fontSize: 20, fontWeight: 800, lineHeight: 1, color: INK, transform: "translateY(1px)" }}>
              Chris <span style={{ color: TEAL }}>Dorsey</span>
            </span>
          </Link>
          <span className="text-xs font-semibold" style={{ color: "#6a6258" }}>Prepared for {page.company}</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-14">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: INK, background: ACID }}
          >
            Private · prepared for {page.company}
          </div>
          <h1
            className="font-display font-extrabold tracking-tight leading-[1.0]"
            style={{ fontSize: "clamp(32px,5vw,54px)", color: INK }}
          >
            How I&apos;d approach{" "}
            <span style={{ color: TEAL }}>{page.role}</span> at {page.company}.
          </h1>
        </div>

        <div className="space-y-6 mb-16">
          {sections.map((s) => (
            <section
              key={s.heading}
              className="rounded-3xl p-8 md:p-9"
              style={{ background: CREAM2, border: `3px solid ${INK}`, boxShadow: `7px 7px 0 ${s.accent}` }}
            >
              <h2
                className="font-display font-extrabold tracking-tight mb-4 leading-snug"
                style={{ fontSize: "clamp(22px,2.8vw,28px)", color: INK, paddingLeft: "0.9rem", borderLeft: `4px solid ${s.accent}` }}
              >
                {s.heading}
              </h2>
              <p className="leading-relaxed whitespace-pre-line" style={{ color: "#2a2520", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm lift"
            style={{ background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
          >
            <Mail className="w-4 h-4" /> Email me
          </a>
          <Link
            href="/track-record"
            className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition text-sm"
            style={{ background: PAPER, border: `2px solid ${INK}`, color: INK }}
          >
            Full track record <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
