import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import { BuildsSection } from "@/app/components/ProfileSections";

const INK = "#1A1613";
const PAPER = "#F2ECDD";

const DESCRIPTION =
  "What Chris Dorsey builds with AI: Campsite Ranger, a paid cancellation-alert service for Colorado campers, plus Soundcheck, a brand check for AI-generated audio ads, and Call Butler, a live call assistant for sellers.";

export const metadata: Metadata = {
  title: "Builds — Christopher Dorsey",
  description: DESCRIPTION,
  alternates: { canonical: "https://chrisdorsey.co/builds" },
  openGraph: {
    title: "Builds — Chris Dorsey",
    description: DESCRIPTION,
    url: "https://chrisdorsey.co/builds",
    type: "website",
    siteName: "Christopher Dorsey",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Builds by Christopher Dorsey" }],
  },
};

const buildsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://chrisdorsey.co/builds",
  url: "https://chrisdorsey.co/builds",
  name: "Builds by Christopher Dorsey",
  author: { "@id": "https://chrisdorsey.co/#person" },
  hasPart: [{ "@id": "https://chrisdorsey.co/#campsite-ranger" }],
};

export default function BuildsPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden grain-overlay" style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildsJsonLd) }} />
      <SiteNav />
      <main>
        <BuildsSection asPage />
        <div className="px-7 pb-16 text-center">
          <Link
            href="/writing/series/seller-who-builds"
            className="inline-flex items-center gap-1.5 font-semibold rounded-full lift"
            style={{ fontSize: 15, padding: "12px 22px", background: INK, color: PAPER, border: `2px solid ${INK}` }}
          >
            Read the build logs <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
