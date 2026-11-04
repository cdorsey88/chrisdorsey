import type { Metadata } from "next";
import { Inter, Newsreader, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsEvents from "@/app/components/AnalyticsEvents";
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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisdorsey.co"),
  title: "Chris Dorsey — Enterprise Seller & AI-Native Builder",
  description:
    "Denver-based enterprise seller taking first-to-market AI and MadTech to Fortune 500 buyers. 16 years across CP+B, Oracle Advertising, Fastly and Zeta Global.",
  authors: [{ name: "Christopher Dorsey" }],
  keywords: [
    "Christopher Dorsey",
    "Chris Dorsey",
    "enterprise sales leader",
    "AI sales",
    "AI go-to-market",
    "first sales hire",
    "agentic AI sales",
    "MadTech",
    "Senior Account Executive",
    "Account Director",
    "Sales Director",
    "Client Lead",
    "first-to-market",
    "sales consultant",
    "Colorado",
    "Denver",
  ],
  alternates: {
    canonical: "https://chrisdorsey.co",
  },
  openGraph: {
    title: "Chris Dorsey — Enterprise Seller & AI-Native Builder",
    description:
      "16 years selling AI and MadTech to Fortune 500 buyers before the budget line existed. He builds with the same tools, and Campsite Ranger, his solo build, has paying customers.",
    url: "https://chrisdorsey.co",
    siteName: "Christopher Dorsey",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Dorsey, enterprise sales for first-to-market AI and MadTech",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dorsey — Enterprise Seller & AI-Native Builder",
    description: "16 years selling AI and MadTech to Fortune 500 buyers before the budget line existed. Based in Denver, Colorado.",
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
        "Enterprise sales leader who takes first-to-market AI and MadTech products to Fortune 500 buyers, often before a budget line exists for them. 16 years across agency creative, data, and enterprise SaaS, including agentic AI customer acquisition and edge infrastructure.",
      url: "https://chrisdorsey.co/",
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: ["Enterprise Sales Leader", "AI Go-To-Market Leader", "Startup Advisor", "Sales Strategy Advisor"],
      knowsAbout: [
        "AI Go-To-Market Strategy",
        "Enterprise Sales",
        "Agentic AI",
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
      sameAs: ["https://www.linkedin.com/in/cdorsey/", "https://github.com/cdorsey88"],
      subjectOf: {
        "@type": "NewsArticle",
        headline: "A new website is helping campers score Colorado's most elusive campsites",
        url: "https://coloradosun.com/2026/10/08/new-websites-helps-campers-score-top-campsites-in-colorado/",
        datePublished: "2026-10-08",
        publisher: { "@type": "NewsMediaOrganization", name: "The Colorado Sun", url: "https://coloradosun.com" },
        about: { "@id": "https://chrisdorsey.co/#campsite-ranger" },
      },
    },
    {
      "@type": "Organization",
      "@id": "https://chrisdorsey.co/#campsite-ranger",
      name: "Campsite Ranger",
      url: "https://www.campsiteranger.com",
      description: "Cancellation alerts for sold-out Colorado campsites, timed-entry permits, and wilderness zones.",
      foundingDate: "2026-08",
      founder: { "@id": "https://chrisdorsey.co/#person" },
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
        "Advisory on enterprise sales, go-to-market strategy, and sales motion design for AI and MadTech companies.",
      provider: { "@id": "https://chrisdorsey.co/#person" },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: [
        "Sales Strategy",
        "Go-To-Market Advisory",
        "Sales Leadership Mentoring",
      ],
      url: "https://chrisdorsey.co/#contact",
    },
    {
      "@type": "Blog",
      "@id": "https://chrisdorsey.co/#blog",
      name: "Notes from the field — Christopher Dorsey",
      description:
        "Writing on AI go-to-market, the future of advertising in LLMs, retail media, and selling AI to skeptical buyers.",
      author: { "@id": "https://chrisdorsey.co/#person" },
      publisher: { "@id": "https://chrisdorsey.co/#person" },
      url: "https://chrisdorsey.co/#writing",
    },
    {
      "@type": "FAQPage",
      "@id": "https://chrisdorsey.co/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Chris Dorsey do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chris Dorsey is an enterprise sales leader who sells first-to-market AI and MadTech (marketing and advertising technology), usually before buyers have a budget line for it. Across 16 years he has been the first seller in the building twice, sold three categories before budgets existed for them, and closed Fortune 500 accounts, from agency creative at Crispin Porter + Bogusky to data at Oracle Advertising, edge infrastructure at Fastly, and AI customer acquisition at Zeta Global. He also builds with AI: Campsite Ranger, a paid product he shipped solo, has paying customers.",
          },
        },
        {
          "@type": "Question",
          name: "Who does Chris work with, and who can he introduce you to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chris is a connector. After 16 years across four industries he knows Fortune 500 CMOs, AI founders, data leaders, investors, agency executives, and engineers and product managers. Tell him what you are trying to do and odds are he already knows who you should be talking to. He makes introductions freely — no fee, no catch.",
          },
        },
        {
          "@type": "Question",
          name: "Is Chris Dorsey available for roles or advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "He is always open to the right conversation, especially Senior Account Executive, Account Director, Sales Director or Client Lead seats at AI-native companies. He also advises startups taking a first product to market, and he responds to every note personally.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Chris Dorsey based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chris is based in Denver, Colorado, and works remotely or hybrid across the United States.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Chris cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI go-to-market, data, and MadTech (marketing and advertising technology), with deep roots in enterprise SaaS, retail media, AdTech, and agency creative. He has sold through every major marketing shift — broadcast, digital, social, programmatic, data, AI, and now agents — which is what lets him spot what is actually changing before everyone else catches up.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${bricolage.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <AnalyticsEvents />
        <SpeedInsights />
      </body>
    </html>
  );
}
