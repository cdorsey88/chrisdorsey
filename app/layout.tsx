import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherdorsey.com"),
  title: "Christopher Dorsey — Enterprise Seller, AI Tinkerer, GEO Consultant",
  description:
    "Christopher Dorsey is a senior enterprise sales leader and Generative Engine Optimization (GEO) consultant based in Denver, Colorado. Fifteen years building long-term client relationships across MadTech and AI for brands including JPMorgan Chase, Microsoft, Amazon, PepsiCo, Johnson & Johnson, Merck, Oracle, Vail Resorts, Stitch Fix, Groupon, JCPenney, and JSX.",
  authors: [{ name: "Christopher Dorsey" }],
  keywords: [
    "Christopher Dorsey",
    "Chris Dorsey",
    "GEO consultant",
    "Generative Engine Optimization",
    "enterprise sales leader",
    "MadTech",
    "AI sales",
    "account director",
    "sales consultant",
    "Colorado",
    "Denver",
  ],
  alternates: {
    canonical: "https://christopherdorsey.com",
  },
  openGraph: {
    title: "Christopher Dorsey — Enterprise Seller, AI Tinkerer, GEO Consultant",
    description:
      "Senior enterprise sales leader and GEO consultant. Fifteen years driving revenue across MadTech and AI for Fortune 500 brands and category-leading agencies.",
    url: "https://christopherdorsey.com",
    siteName: "Christopher Dorsey",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Dorsey",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Dorsey — Enterprise Seller, AI Tinkerer, GEO Consultant",
    description: "Senior enterprise sales leader and GEO consultant based in Denver, Colorado.",
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
      "@id": "https://christopherdorsey.com/#person",
      name: "Christopher Dorsey",
      alternateName: ["Chris Dorsey", "CT Dorsey"],
      description:
        "Senior enterprise sales leader and Generative Engine Optimization (GEO) consultant with 15 years of experience selling MadTech and AI solutions to Fortune 500 brands.",
      url: "https://christopherdorsey.com/",
      email: "mailto:ctjdorsey@gmail.com",
      jobTitle: ["Enterprise Sales Leader", "GEO Consultant", "Sales Strategy Advisor"],
      knowsAbout: [
        "Generative Engine Optimization",
        "GEO",
        "Enterprise Sales",
        "MadTech",
        "AdTech",
        "AI Go-To-Market Strategy",
        "Account Management",
        "Sales Consulting",
        "Agentic AI",
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
        name: "Independent GEO & Sales Consultant",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://christopherdorsey.com/#website",
      url: "https://christopherdorsey.com/",
      name: "Christopher Dorsey",
      description:
        "The personal site, writing, and builds of Christopher Dorsey — enterprise seller, AI tinkerer, GEO consultant.",
      publisher: { "@id": "https://christopherdorsey.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://christopherdorsey.com/#service",
      name: "GEO & Sales Strategy Consulting — Christopher Dorsey",
      description:
        "Consulting on Generative Engine Optimization (GEO), go-to-market strategy, and enterprise sales motion design for AI and MadTech companies.",
      provider: { "@id": "https://christopherdorsey.com/#person" },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: [
        "GEO Consulting",
        "Sales Strategy",
        "Go-To-Market Advisory",
        "Sales Leadership Mentoring",
      ],
      url: "https://christopherdorsey.com/#contact",
    },
    {
      "@type": "Blog",
      "@id": "https://christopherdorsey.com/#blog",
      name: "Notes from the field — Christopher Dorsey",
      description:
        "Writing on Generative Engine Optimization, the future of advertising in LLMs, and selling AI to skeptical buyers.",
      author: { "@id": "https://christopherdorsey.com/#person" },
      publisher: { "@id": "https://christopherdorsey.com/#person" },
      url: "https://christopherdorsey.com/#writing",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
