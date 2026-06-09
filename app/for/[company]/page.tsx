import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { companyPages } from "../companies-data";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

const serif = { fontFamily: "var(--font-fraunces)" };

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
    { heading: "What I see in your market", body: page.market },
    { heading: "My first 90 days", body: page.ninetyDays },
    { heading: "Why my background maps", body: page.whyMe },
  ];

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)",
        fontFamily: "var(--font-inter)",
      }}
    >
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold" style={serif}>
            <span className="text-slate-900">Christopher </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Dorsey</span>
          </Link>
          <span className="text-xs text-slate-400 font-medium">Prepared for {page.company}</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-14">
          <div className="inline-block text-xs uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4 font-bold">
            Private · prepared for {page.company}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={serif}>
            How I&apos;d approach {page.role} at {page.company}.
          </h1>
        </div>

        <div className="space-y-8 mb-16">
          {sections.map((s) => (
            <section key={s.heading} className="bg-white/80 border border-sky-100 rounded-3xl p-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4" style={serif}>
                {s.heading}
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
          >
            <Mail className="w-4 h-4" /> Email me
          </a>
          <Link
            href="/track-record"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-full hover:border-blue-300 transition text-sm"
          >
            Full track record <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
