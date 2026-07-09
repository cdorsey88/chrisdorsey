import type { Metadata } from "next";
import { Inter, Newsreader, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Chris Dorsey — Enterprise Sales Leader | Growing Revenue in AI & MadTech",
  description:
    "Christopher Dorsey is a senior enterprise sales leader who grows revenue for AI and MadTech companies by building the trusted client relationships that outlast any feature. Based in Denver, Colorado. Fifteen years growing revenue across creative, data, and AI for brands including JPMorgan Chase, Microsoft, Amazon, PepsiCo, Johnson & Johnson, Merck, Oracle, Vail Resorts, Stitch Fix, Groupon, JCPenney, and JSX.",
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
    "account director",
    "sales consultant",
    "Colorado",
    "Denver",
  ],
  alternates: {
    canonical: "https://chrisdorsey.co",
  },
  openGraph: {
    title: "Chris Dorsey — Enterprise Sales Leader Clients Trust. Girl Dad.",
    description:
      "Senior enterprise sales leader who grows revenue for AI and MadTech companies through trusted, long-term client relationships. Fifteen years across creative, data, and AI.",
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
    title: "Chris Dorsey — Enterprise Sales Leader Clients Trust. Girl Dad.",
    description: "Senior enterprise sales leader who grows revenue through trusted client relationships. Based in Denver, Colorado.",
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
        "Senior enterprise sales leader who grows revenue for AI and MadTech companies by building trusted, long-term client relationships. 15 years across creative, data, and enterprise SaaS, including agentic AI customer acquisition and edge infrastructure.",
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
            text: "Chris Dorsey is a senior enterprise sales and go-to-market leader who takes new technology to market — AI first, then data and MadTech (marketing and advertising technology). Across fifteen years he has been the first seller in the building twice, created categories, and closed Fortune 500 accounts, from agency creative at Crispin Porter + Bogusky to data at Oracle, edge infrastructure at Fastly, and AI customer acquisition at Zeta Global. His throughline is making emerging technology sellable for the people who have to buy it.",
          },
        },
        {
          "@type": "Question",
          name: "Who does Chris work with, and who can he introduce you to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chris is a connector. After fifteen years across four industries he knows Fortune 500 CMOs, AI founders, data leaders, investors, agency executives, and engineers and product managers. Tell him what you are trying to do and odds are he already knows who you should be talking to. He makes introductions freely — no fee, no catch.",
          },
        },
        {
          "@type": "Question",
          name: "Is Chris Dorsey available for roles or advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Chris is deliberately focused on senior individual-contributor go-to-market roles at AI, retail media, AdTech/MarTech, and enterprise SaaS companies — Account Director, Strategic Account Manager, and Director of Customer Success or Partnerships. He has led teams and chooses to stay hands-on: carrying a number and owning client relationships rather than managing. He responds to every note personally.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
