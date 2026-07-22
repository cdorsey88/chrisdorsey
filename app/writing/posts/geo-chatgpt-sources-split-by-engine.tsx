import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "geo-chatgpt-sources-split-by-engine",
    title: "ChatGPT picks its sources somewhere other than Google",
    date: "Jul 13, 2026",
    readTime: "5 min",
    tag: "GEO",
    color: "from-cyan-600 to-teal-500",
    tldr: "New CiteLens research finds Google's AI Mode and Perplexity draw roughly nine in ten citations from Google's top-10 results, while ChatGPT draws about three in ten; Ahrefs' crawl found only 12% of AI-cited URLs rank in Google's top 10 for the matching prompt. Two weeks ago I wrote that the pages AI cites and the pages Google ranks stopped being the same list. The new data splits the gap by engine, and the split changes the budget. Gemini and Perplexity are still won with classic SEO: rank, and they follow. ChatGPT is a different job: find the sources it pulls into your category's answers and earn a presence in them. Three moves: make your GEO vendor report by engine instead of a blended score, ask your sellers which assistant your buyers mention (in most B2B categories the answer is ChatGPT, the engine SEO buys you least access to), and run ten money queries per engine yourself before renewing any tooling. A single AI-visibility number averages two unrelated games and hides losing one of them.",
    content: (
      <div className="prose-content">
        <p>
          Ask Perplexity and ChatGPT the same question and you&rsquo;ll often get similar answers built from different corners of the web. New research from CiteLens puts numbers on that: Google&rsquo;s AI Mode and Perplexity pull roughly nine of every ten citations from Google&rsquo;s top-10 results. ChatGPT pulls about three. Ahrefs, working from its own crawl, found only 12% of AI-cited URLs rank in Google&rsquo;s top 10 for the matching prompt.
        </p>
        <p>
          Two weeks ago I wrote that{" "}
          <Link href="/writing/geo-citations-google-rankings-diverge" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the pages AI cites and the pages Google ranks stopped being the same list</Link>. The new data adds the part that changes what you do about it: the size of the gap depends on which engine you&rsquo;re looking at.
        </p>
        <h2>Where each engine shops for sources</h2>
        <p>
          AI Mode and Perplexity behave like readers of Google&rsquo;s rankings. When roughly 90% of what they cite already sits in the top 10, the SEO you&rsquo;ve been paying for since 2015 still buys you a seat in their answers. ChatGPT behaves like something else: seventy percent of its citations come from pages outside Google&rsquo;s top 10, and a meaningful share of its favorite pages hold no ranking for the query at all. Nobody outside OpenAI knows the retrieval recipe, and I won&rsquo;t pretend to. What the outside data shows is the output: ChatGPT&rsquo;s reading list and Google&rsquo;s rankings are mostly different pages.
        </p>
        <h2>One line item, two different games</h2>
        <p>
          I spent part of the past year selling GEO measurement into brands, and the most common setup I saw was one dashboard, one AI-visibility score, one budget line. That made sense when every answer engine looked like a flavor of search. The citation data breaks the frame. Winning Gemini and Perplexity is the game you already know how to play: rank, and the engines follow you there. Winning ChatGPT means figuring out which sources it pulls into your category&rsquo;s answers &mdash; documentation, community threads, independent reviews, trade press &mdash; and earning a presence in those, whether or not they ever rank. So the budget question is now engine-specific: how much of your category&rsquo;s asking happens in ChatGPT, and what would it take to show up there?
        </p>
        <h2>Split the scorecard</h2>
        <p>
          Three moves this quarter. Make your GEO vendor report by engine; a blended score averages two unrelated games and hides losing one of them. Ask your sellers which assistant your buyers mention on calls; in most B2B categories the answer is ChatGPT, which happens to be the engine your SEO buys you the least access to. And before renewing any tooling, run ten of your money queries in each engine yourself and write down the sources. Twenty minutes of that beats most dashboards I sold against. If your AI-visibility report is a single number, ask for the split. You may find you&rsquo;ve been winning the wrong engine all quarter.
        </p>
      </div>
    ),
    sources: [
      { title: "MarTech Series — CiteLens Study: SEO Decides AI Citations on Google and Perplexity, Not ChatGPT", url: "https://martechseries.com/predictive-ai/ai-platforms-machine-learning/citelens-study-seo-decides-ai-citations-on-google-and-perplexity-not-chatgpt/" },
      { title: "Ahrefs — Only 12% of AI Cited URLs Rank in Google's Top 10 for the Original Prompt", url: "https://ahrefs.com/blog/ai-search-overlap/" },
      { title: "Whitehat SEO — Perplexity vs ChatGPT vs Gemini: AI Citations", url: "https://whitehat-seo.co.uk/blog/ai-engines-comparison-citations" },
    ],
};
