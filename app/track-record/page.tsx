import Link from "next/link";
import { Mail } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import Infographic from "./Infographic";

// Redesign palette — matches the homepage.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";

export const metadata: Metadata = {
  title: "Track Record — Christopher Dorsey",
  description:
    "The career scoreboard: 16 years taking new AI and enterprise technology to market, from first sales hire to Fortune 500 accounts. The numbers, in one screen.",
  alternates: {
    canonical: "https://chrisdorsey.co/track-record",
  },
};

// Current employer lives on this page only (site rule): merges into the #person node from layout.tsx.
const trackRecordJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://chrisdorsey.co/#person",
  name: "Christopher Dorsey",
  worksFor: { "@type": "Organization", name: "Epsilon", url: "https://www.epsilon.com" },
};

export default function TrackRecord() {
  return (
    <div
      className="min-h-screen grain-overlay"
      style={{
        background: PAPER,
        color: INK,
        fontFamily: "var(--font-inter)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trackRecordJsonLd) }}
      />
      {/* Nav */}
      <SiteNav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold"
            style={{ color: INK, background: ACID }}
          >
            Track record
          </div>
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.98] mb-4"
            style={{ fontSize: "clamp(34px,5.4vw,62px)", color: INK }}
          >
            Sixteen years, one screen.
          </h1>
          <p className="text-lg leading-relaxed mb-2" style={{ color: "#3a332c" }}>
            Senior enterprise sales leader who takes new AI products to market. First sales hire,
            category creator, Fortune 500 closer. The full details are in the resume. This page is the short version.
          </p>
          <p className="text-sm" style={{ color: "#6a6258" }}>Denver, CO</p>
        </div>

        <Infographic />

        <div className="text-center">
          <Link
            href="/deal-stories"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm lift"
            style={{ background: INK, color: PAPER, border: `2px solid ${INK}` }}
          >
            Read the deal stories
          </Link>
        </div>

        {/* Contact */}
        <div className="text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm lift"
            style={{ background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
          >
            <Mail className="w-4 h-4" /> Get in touch
          </Link>
        </div>
      </main>
    </div>
  );
}
