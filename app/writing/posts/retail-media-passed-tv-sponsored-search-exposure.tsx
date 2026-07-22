import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "retail-media-passed-tv-sponsored-search-exposure",
    title: "Retail media just passed TV. Sixty percent of it rides on an ad shoppers are starting to skip.",
    date: "Jul 8, 2026",
    readTime: "6 min",
    tag: "Future of Ads",
    color: "from-fuchsia-600 to-orange-500",
    tldr: "Commerce media overtook television in global ad spend for the first time, and US retail media is tracking toward roughly $70 billion in 2026 by eMarketer's forecast. The engine under that record is sponsored search, the promoted product listings that account for more than 60% of US retail media spend, and it works only as long as a shopper uses the retailer's search bar. They're starting not to: more than 70% of shoppers now fold an AI assistant into some part of buying, and long, conversational queries are climbing. The growth story and the disruption story are the same companies. If you sell retail media, do the exposure math on your own book and build the ad product for the agent-mediated buy before your search line softens. If you buy it, stop treating on-site search as the whole funnel and start measuring whether an AI assistant surfaces and recommends your product at all.",
    content: (
      <div className="prose-content">
        <p>
          Commerce media passed television in global ad spend for the first time this year, and US retail media is tracking toward about{" "}
          <a href="https://www.emarketer.com/content/retail-media-ad-spending-forecast-h1-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$70 billion in 2026</a>, per eMarketer. I wrote in June that{" "}
          <Link href="/writing/commerce-media-passed-tv-agents-buying" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">commerce media had overtaken TV and the campaign work was moving to the platforms&apos; own agents</Link>. One piece of that story is worth pulling out on its own: the record retail media just set is concentrated in a single ad format, and it&apos;s the format most exposed to how people are starting to shop.
        </p>
        <p>
          I came up in adtech watching channels get reorganized around whatever the consumer did next. Display got remade when attention moved into feeds. Paid search spent twenty years as the safest line in the media plan because typing a query into a box was simply how people looked for things. Retail media inherited that safety and built its business on it. That inheritance is what&apos;s now in question.
        </p>
        <h2>The record rides on sponsored search</h2>
        <p>
          Break down where retail media dollars go and it&apos;s lopsided. Sponsored search, the promoted product listings you see when you search &ldquo;coffee maker&rdquo; on a retailer&apos;s site or app, accounts for{" "}
          <a href="https://www.emarketer.com/content/commerce-media-next-era-why-2026-will-year-of-organizational-evolution" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">more than 60% of US retail media spend</a>, by eMarketer&apos;s count. It&apos;s the entry point for nearly every advertiser and the profit center for nearly every retail media network. And it carries one dependency baked in: a shopper has to use the retailer&apos;s search bar for a sponsored listing to have anywhere to appear. Take away the query and the format has no inventory.
        </p>
        <h2>The shopper is drifting off the search bar</h2>
        <p>
          That dependency is loosening. More than{" "}
          <a href="https://rezolve.com/press-releases/rezolve-ai-data-reveals-seven-in-ten-shoppers-now-buy-after-a-single-search-in-the-new-era-of-conversational-commerce/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">70% of shoppers</a> now fold an AI assistant into some part of buying, whether for inspiration, price checks, or comparing features, and the queries are getting longer and more conversational, with three-plus-word searches climbing from about a quarter of searches in 2024 to roughly 40% by early 2026. When the research moves into ChatGPT, Gemini, or a retailer&apos;s own assistant, the shopper often lands on a product without ever scrolling a page of sponsored results. Elf Beauty&apos;s digital chief has already started describing the future buy in terms of{" "}
          <a href="https://www.thedrum.com/opinion/at-shoptalk-retail-media-s-agentic-anxiety-turned-into-action" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">cost per agent recommendation</a> instead of CPMs, the unit of retail media possibly shifting from the impression to the assistant&apos;s pick. Whether or not that exact phrase sticks, the direction is real: the more the assistant curates, the less the sponsored slot gets seen.
        </p>
        <h2>Two things can be true</h2>
        <p>
          The retailers aren&apos;t blind to this. The biggest ones are building the assistants themselves. Walmart put its{" "}
          <Link href="/writing/walmart-sparky-agentic-commerce-customer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Sparky agent inside ChatGPT and Gemini</Link>, and Amazon has its own, so some of the search spend migrates into surfaces they still control rather than evaporating. Two things can be true: retail media keeps growing in total, and its most profitable format gets reshaped underneath that growth. A retailer that owns the agent can move the money from a sponsored listing to a paid placement in the assistant&apos;s answer. A retailer that doesn&apos;t just loses the query to someone else&apos;s chatbot.
        </p>
        <h2>If you sell retail media</h2>
        <p>
          Do the exposure math on your own book. What share of your revenue is sponsored search tied to on-site queries, and what&apos;s your plan for the shopper who never runs one? If you&apos;re a retail media network, the work this year is building the ad product for the agent-mediated buy, sponsored recommendations inside your own assistant and clean structured product data the outside agents will actually surface, before your search line starts to soften. Selling more of a format whose foundation is thinning is how you get surprised at renewal.
        </p>
        <h2>If you buy it</h2>
        <p>
          Your sponsored-search dashboard is about to describe less of reality. Keep spending where it still converts, but stop treating on-site search as the whole funnel, and start measuring whether an AI assistant surfaces and recommends your product at all, because that&apos;s the shelf position forming next to the one you&apos;re bidding on. The brands that get their product data clean and legible to agents now will be the ones found when the query moves off the retailer&apos;s site.
        </p>
        <p>
          Retail media crossing TV is a real milestone and the growth is not fake. The vulnerability sits one level below the top line, in the concentration: an industry that just set a record leans on a single format that assumes a behavior, typing into a search box, that AI assistants are steadily absorbing. If you sell it or buy it, find out today how much of your retail media number depends on that box, because the shopper is already answering the question for you.
        </p>
      </div>
    ),
    sources: [
      { title: "eMarketer — Retail Media Ad Spending Forecast H1 2026", url: "https://www.emarketer.com/content/retail-media-ad-spending-forecast-h1-2026" },
      { title: "eMarketer — Commerce media's next era: why 2026 will be a year of 'organizational evolution'", url: "https://www.emarketer.com/content/commerce-media-next-era-why-2026-will-year-of-organizational-evolution" },
      { title: "The Drum — At Shoptalk, retail media's agentic anxiety turned into action", url: "https://www.thedrum.com/opinion/at-shoptalk-retail-media-s-agentic-anxiety-turned-into-action" },
      { title: "Rezolve AI — Seven in ten shoppers now buy after a single search in the new era of conversational commerce", url: "https://rezolve.com/press-releases/rezolve-ai-data-reveals-seven-in-ten-shoppers-now-buy-after-a-single-search-in-the-new-era-of-conversational-commerce/" },
    ],
};
