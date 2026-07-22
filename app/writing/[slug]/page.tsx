import React from "react";
import { CONTACT_EMAIL } from "@/app/lib/site-config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import SiteNav from "@/app/components/SiteNav";
import type { Metadata } from "next";
import { posts } from "@/app/writing/posts";

const sans  = { fontFamily: "var(--font-inter)" };



export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const postUrl = `https://chrisdorsey.co/writing/${post.slug}`;
  const publishedISO = new Date(post.date).toISOString();
  return {
    title: `${post.title} — Chris Dorsey`,
    description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
    authors: [{ name: "Christopher Dorsey", url: "https://chrisdorsey.co" }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      url: postUrl,
      type: "article",
      publishedTime: publishedISO,
      modifiedTime: publishedISO,
      authors: ["https://chrisdorsey.co"],
      siteName: "Chris Dorsey",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      creator: "@chrisdorsey",
      images: ["/og-image.jpg"],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Redesign palette
  const INK = "#1A1613";
  const PAPER = "#F2ECDD";
  const CREAM2 = "#E7DEC8";
  const TEAL = "#0E9F86";
  const BLUE = "#2B43E8";
  const ACID = "#C7F03A";
  const VIOLET = "#6B4BFF";

  // Per-category accent (a single solid palette color) used for tag chips,
  // the divider, h2 accents and links. Calm, not a wall of color.
  const tagAccents: Record<string, { bg: string; fg: string }> = {
    Brands:          { bg: VIOLET, fg: "#fff" },
    "Future of Ads": { bg: TEAL,   fg: "#fff" },
    GEO:             { bg: TEAL,   fg: "#fff" },
    Macro:           { bg: BLUE,   fg: "#fff" },
    Sales:           { bg: BLUE,   fg: "#fff" },
    MadTech:         { bg: VIOLET, fg: "#fff" },
    Security:        { bg: INK,    fg: ACID },
    "Enterprise AI": { bg: BLUE,   fg: "#fff" },
    AI:              { bg: VIOLET, fg: "#fff" },
  };
  const accent = tagAccents[post.tag] ?? { bg: BLUE, fg: "#fff" };
  const accentColor = accent.bg;

  const postUrl = `https://chrisdorsey.co/writing/${post.slug}`;
  const publishedISO = new Date(post.date).toISOString();
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.title,
    description: post.tldr,
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: { "@id": "https://chrisdorsey.co/#person" },
    publisher: { "@id": "https://chrisdorsey.co/#person" },
    isPartOf: { "@id": "https://chrisdorsey.co/#blog" },
    url: postUrl,
    articleSection: post.tag,
    keywords: [post.tag, "Christopher Dorsey", "AI", "MadTech", "GEO"].join(", "),
    image: "https://chrisdorsey.co/og-image.jpg",
    inLanguage: "en-US",
    ...(post.sources?.length
      ? {
          citation: post.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.title,
            url: s.url,
          })),
        }
      : {}),
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Nav */}
      <SiteNav />

      {/* Article — clean editorial reading column */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Back to writing */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#6a6258" }}
        >
          ← All writing
        </Link>

        {/* Tag + meta */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: accent.bg, color: accent.fg }}
          >
            {post.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: "#6a6258" }}>
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: "#6a6258" }}>
            <Clock className="w-3 h-3" /> {post.readTime} read
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-extrabold leading-[1.04] mb-9"
          style={{ fontSize: "clamp(30px,4.6vw,52px)", color: INK }}
        >
          {post.title}
        </h1>

        {/* Author + top share icons */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Christopher Dorsey"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              style={{ border: `2px solid ${INK}` }}
            />
            <div>
              <p className="text-sm font-semibold" style={{ color: INK }}>Christopher Dorsey</p>
              <p className="text-xs" style={{ color: "#6a6258" }}>AI &amp; MadTech Advisor · Enterprise Sales Leader</p>
            </div>
          </div>
          {/* Icon-only share bar */}
          <div className="flex items-center gap-2">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70" style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#6a6258" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70" style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#6a6258" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Threads" className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70" style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#6a6258" }}>
              <svg width="12" height="12" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
            </a>
            <a href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit" className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70" style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#6a6258" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 w-16 rounded-full mb-10" style={{ background: accentColor }} />

        {/* TLDR — styled with a category-color spine */}
        <div
          className="rounded-2xl px-6 py-5 mb-12"
          style={{ background: CREAM2, borderLeft: `5px solid ${accentColor}`, border: `1px solid rgba(26,22,19,0.1)`, borderLeftWidth: 5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>TL;DR</p>
          <p className="leading-relaxed" style={{ color: "#3a332c" }}>{post.tldr}</p>
        </div>

        {/* Body — calm, readable editorial column */}
        <div
          className="post-body"
          style={{ ...sans, color: "#2a2520" }}
        >
          <style>{`
            .post-body { font-size: 1.125rem; line-height: 1.8; }
            .post-body p { margin-bottom: 1.5rem; line-height: 1.8; }
            .post-body h2 {
              font-family: var(--font-display);
              letter-spacing: -0.02em;
              font-size: 1.6rem;
              font-weight: 800;
              color: ${INK};
              margin-top: 2.75rem;
              margin-bottom: 1rem;
              line-height: 1.15;
              padding-left: 0.9rem;
              border-left: 4px solid ${accentColor};
            }
            .post-body a {
              color: ${accentColor};
              text-decoration: underline;
              text-underline-offset: 2px;
              text-decoration-thickness: 1.5px;
              font-weight: 500;
            }
            .post-body a:hover { opacity: 0.78; }
          `}</style>
          {post.content}
        </div>

        {/* Sources — GEO citations */}
        {post.sources?.length ? (
          <div
            className="mt-14 rounded-2xl px-6 py-6"
            style={{ background: CREAM2, border: `1px solid rgba(26,22,19,0.12)`, borderLeft: `5px solid ${accentColor}`, borderLeftWidth: 5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Sources</p>
            <ol className="space-y-2.5 list-decimal list-inside">
              {post.sources.map((s, i) => (
                <li key={i} className="text-sm leading-relaxed" style={{ color: "#4a4239" }}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 font-medium hover:opacity-70 transition"
                    style={{ color: accentColor }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {/* Share — bottom */}
        <div className="mt-16 pt-8" style={{ borderTop: `1px solid rgba(26,22,19,0.14)` }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#8a8276" }}>Share this post</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
              style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
              style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X
            </a>
            <a
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
              style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
            >
              <svg width="14" height="14" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
              Threads
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
              style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              Reddit
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Thought you'd find this interesting: https://chrisdorsey.co/writing/${post.slug}`)}`}
              className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
              style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
          </div>
          <style>{`.share-chip:hover { border-color: ${accentColor} !important; color: ${accentColor} !important; }`}</style>
        </div>

        {/* Author bio */}
        <div className="mt-16 pt-10" style={{ borderTop: `1px solid rgba(26,22,19,0.14)` }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#8a8276" }}>About the author</p>
          <div
            className="flex items-start gap-5 rounded-2xl p-6"
            style={{ background: CREAM2, border: `2px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Christopher Dorsey"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              style={{ border: `2px solid ${INK}` }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold font-display" style={{ color: INK }}>Christopher Dorsey</p>
              <p className="text-sm mb-3" style={{ color: "#6a6258" }}>Enterprise Sales Leader · AI Go-To-Market · Startup Advisor · Denver, CO</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#3a332c" }}>
                Fifteen years selling technology to Fortune 500 brands across AI, advertising, and data infrastructure
                — most recently at Zeta Global, Oracle, and Fastly. Currently advising founders and sales leaders on
                AI go-to-market and Generative Engine Optimization.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="https://www.linkedin.com/in/cdorsey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold hover:opacity-70 transition"
                  style={{ color: accentColor }}
                >
                  LinkedIn
                </a>
                <span style={{ color: "rgba(26,22,19,0.3)" }}>·</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 font-semibold hover:opacity-70 transition"
                  style={{ color: accentColor }}
                >
                  {CONTACT_EMAIL}
                </a>
                <span style={{ color: "rgba(26,22,19,0.3)" }}>·</span>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center gap-1.5 font-semibold hover:opacity-70 transition"
                  style={{ color: accentColor }}
                >
                  Work with me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-10" style={{ borderTop: `1px solid rgba(26,22,19,0.14)` }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#8a8276" }}>Keep reading</p>
            <div className="grid gap-4">
              {relatedPosts.map((rp) => {
                const rpAccent = tagAccents[rp.tag] ?? { bg: BLUE, fg: "#fff" };
                return (
                  <Link
                    key={rp.slug}
                    href={`/writing/${rp.slug}`}
                    className="group block rounded-xl p-5 transition-transform hover:-translate-y-0.5"
                    style={{ background: CREAM2, border: `2px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}` }}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap px-2.5 py-0.5 rounded-full"
                        style={{ background: rpAccent.bg, color: rpAccent.fg }}
                      >
                        {rp.tag}
                      </span>
                      <span className="text-xs" style={{ color: "#8a8276" }}>{rp.date}</span>
                      <span className="text-xs" style={{ color: "#8a8276" }}>·</span>
                      <span className="text-xs" style={{ color: "#8a8276" }}>{rp.readTime} read</span>
                    </div>
                    <h3
                      className="text-base md:text-lg font-bold font-display tracking-tight leading-snug"
                      style={{ color: INK }}
                    >
                      {rp.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-10 pt-8" style={{ borderTop: `1px solid rgba(26,22,19,0.14)` }}>
          <p className="text-sm mb-4" style={{ color: "#6a6258" }}>
            Questions, pushback, or just want to compare notes?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="text-sm px-5 py-2.5 rounded-full transition font-semibold lift"
              style={{ background: TEAL, color: "#fff", border: `2px solid ${TEAL}` }}
            >
              Get in touch
            </Link>
            <Link
              href="/#writing"
              className="text-sm px-5 py-2.5 rounded-full transition font-semibold"
              style={{ border: `2px solid ${INK}`, color: INK }}
            >
              More writing
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
