import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif-brand",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisdorsey.co"),
  title: "Chris Dorsey — Enterprise Sales Leader | Taking AI Products to Market",
  description:
    "Christopher Dorsey is a senior enterprise sales leader specializing in taking AI products to market — from first sales hire to Fortune 500 accounts. Based in Denver, Colorado. Fifteen years building long-term client relationships across AI and MadTech for brands including JPMorgan Chase, Microsoft, Amazon, PepsiCo, Johnson & Johnson, Merck, Oracle, Vail Resorts, Stitch Fix, Groupon, JCPenney, and JSX.",
  authors: [{ name: "Christopher Dorsey" }],
  keywords: [
    "Christopher Dorsey",
    "Chris Dorsey",
    "enterprise sales leader",
    "AI sales",
    "AI go-to-market",
    "first sales hire",
    "agentic AI sales",
    "Generative Engine Optimization",
    "GEO consultant",
    "MadTech",
    "account director",
    "sales consultant",
    "Colorado",
    "Denver",
  ],
  alternates: {
    canonical: "https://chrisdorsey.co",
  },
  openGraph: {
    title: "Chris Dorsey — Enterprise Sales Leader Taking AI to Market. Girl Dad.",
    description:
      "Senior enterprise sales leader specializing in taking AI products to market — first sales hire, category creator, Fortune 500 closer. Fifteen years across AI, MadTech, and enterprise SaaS.",
    url: "https://chrisdorsey.co",
    siteName: "Christopher Dorsey",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Dorsey — AI & MadTech Advisor, Enterprise Sales Leader",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dorsey — Enterprise Sales Leader Taking AI to Market. Girl Dad.",
    description: "Senior enterprise sales leader specializing in taking AI products to market. Based in Denver, Colorado.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://chrisdorsey.co/#person",
      name: "Christopher Dorsey",
      alternateName: ["Chris Dorsey", "CT Dorsey"],
      description:
        "Senior enterprise sales leader specializing in taking AI products to market — first sales hire, category creator, Fortune 500 closer. 15 years selling AI, MadTech, and enterprise SaaS, including Generative Engine Optimization (GEO), agentic AI customer acquisition, and edge infrastructure.",
      url: "https://chrisdorsey.co/",
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: ["Enterprise Sales Leader", "AI Go-To-Market Leader", "Startup Advisor", "Sales Strategy Advisor", "GEO Consultant"],
      knowsAbout: [
        "AI Go-To-Market Strategy",
        "Enterprise Sales",
        "Agentic AI",
        "Generative Engine Optimization",
        "GEO",
        "MadTech",
        "AdTech",
        "Account Management",
        "Sales Consulting",
        "B2B SaaS Sales",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "CO",
        addressCountry: "US",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Elon University",
        sameAs: "https://www.elon.edu/",
      },
      sameAs: ["https://www.linkedin.com/in/cdorsey/"],
      worksFor: {
        "@type": "Organization",
        name: "Independent AI Sales & GTM Advisor",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://chrisdorsey.co/#website",
      url: "https://chrisdorsey.co/",
      name: "Christopher Dorsey",
      description:
        "The personal site, writing, and builds of Christopher Dorsey — enterprise sales leader who takes new AI products to market.",
      publisher: { "@id": "https://chrisdorsey.co/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://chrisdorsey.co/#service",
      name: "AI Sales & GTM Advisory — Christopher Dorsey",
      description:
        "Advisory on enterprise sales, go-to-market strategy, and sales motion design for AI and MadTech companies, including Generative Engine Optimization (GEO) strategy.",
      provider: { "@id": "https://chrisdorsey.co/#person" },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: [
        "Sales Strategy",
        "Go-To-Market Advisory",
        "GEO Consulting",
        "Sales Leadership Mentoring",
      ],
      url: "https://chrisdorsey.co/#contact",
    },
    {
      "@type": "Blog",
      "@id": "https://chrisdorsey.co/#blog",
      name: "Notes from the field — Christopher Dorsey",
      description:
        "Writing on AI go-to-market, the future of advertising in LLMs, Generative Engine Optimization, and selling AI to skeptical buyers.",
      author: { "@id": "https://chrisdorsey.co/#person" },
      publisher: { "@id": "https://chrisdorsey.co/#person" },
      url: "https://chrisdorsey.co/#writing",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
