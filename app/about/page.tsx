import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Testimonials from "@/app/components/Testimonials";
import { AboutStory, CareerEras, ConnectorHub, EvolutionMarquee, OffTheClock } from "@/app/components/ProfileSections";
import { SHOW_TESTIMONIALS } from "@/app/lib/site-config";
import { FAQ } from "@/app/lib/faq";

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";

const DESCRIPTION =
  "Chris Dorsey is a Denver enterprise seller who has spent 16 years taking first-to-market AI and MadTech to Fortune 500 buyers, from CP+B to Oracle Advertising and Zeta Global. The full story and career timeline, plus references from clients and managers.";

export const metadata: Metadata = {
  title: "About — Christopher Dorsey",
  description: DESCRIPTION,
  alternates: { canonical: "https://chrisdorsey.co/about" },
  openGraph: {
    title: "About Chris Dorsey",
    description: DESCRIPTION,
    url: "https://chrisdorsey.co/about",
    type: "profile",
    siteName: "Christopher Dorsey",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Christopher Dorsey" }],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://chrisdorsey.co/about",
  url: "https://chrisdorsey.co/about",
  name: "About Christopher Dorsey",
  mainEntity: { "@id": "https://chrisdorsey.co/#person" },
  isPartOf: { "@id": "https://chrisdorsey.co/#website" },
};

// FAQPage markup lives here, on the page that shows the same items as visible copy.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://chrisdorsey.co/about#faq",
  url: "https://chrisdorsey.co/about#faq",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden grain-overlay" style={{ background: PAPER, color: INK, fontFamily: "var(--font-inter)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteNav />

      <main>
        <AboutStory asPage />

        <EvolutionMarquee />
        <div id="timeline">
          <CareerEras />
        </div>

        <OffTheClock />

        <section id="connect" className="px-7 pt-10 pb-12" style={{ background: CREAM2, borderBottom: `3px solid ${INK}` }}>
          <div className="max-w-5xl mx-auto">
            <ConnectorHub />
          </div>
        </section>

        {SHOW_TESTIMONIALS && <Testimonials />}

        {/* FAQ — visible copy for the FAQPage JSON-LD in app/layout.tsx. Edit in app/lib/faq.ts. */}
        <section id="faq" aria-labelledby="faq-heading" className="px-7 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
              FAQ
            </div>
            <h2 id="faq-heading" className="font-display font-extrabold tracking-tight mb-8" style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.05, color: INK }}>
              Quick answers.
            </h2>
            <dl>
              {FAQ.map(({ q, a }) => (
                <div key={q} className="py-5" style={{ borderTop: `2px solid ${INK}` }}>
                  <dt className="font-display font-bold text-lg mb-2" style={{ color: INK }}>{q}</dt>
                  <dd className="leading-relaxed" style={{ color: "#3a332c", maxWidth: "65ch" }}>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work with me */}
        <section className="px-7 pb-16">
          <div
            className="max-w-5xl mx-auto rounded-2xl p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-5"
            style={{ background: TEAL, color: "#fff", border: `3px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}
          >
            <div>
              <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.05 }}>
                Work with me
              </h2>
              <p className="mt-2" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "52ch" }}>
                I advise a small number of AI and data companies on enterprise sales and account growth.
              </p>
            </div>
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-1.5 font-semibold rounded-full lift shrink-0 self-start md:self-auto"
              style={{ fontSize: 15, padding: "12px 22px", background: "#fff", color: INK, border: `2px solid ${INK}` }}
            >
              See how I help <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
