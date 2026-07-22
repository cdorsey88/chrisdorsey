import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "instacart-immersive-feed-search-hedge",
    title: "Instacart's answer to the search problem is a feed of dinner videos",
    date: "Jul 13, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-lime-600 to-emerald-600",
    tldr: "Instacart's Immersive Feed, announced June 22, puts shoppable 9:16 vertical video — meals, recipes, add-to-cart mid-scroll — inside retailer storefronts, in early pilot with brands like Hellmann's, Rachael Ray Nutrish and Siete Foods from its 9,000+ brand partners. Coverage filed it as grocery's TikTok clone. The context that matters: more than 60% of US retail media spend is sponsored search, which only exists when a shopper types a query, and that behavior is moving into AI assistants. A feed is ad inventory that doesn't depend on the search bar; instead of harvesting intent a shopper announces, it tries to start some. The catch is that a grocery app now has to earn scroll time against TikTok itself, and brand clips for mayonnaise walk into that fight with a media kit. Instacart's own roadmap adds creator and organic content later this year because it knows this. If you're a brand in the pilot, measure baskets the feed started, not baskets it claimed: incrementality against a holdout, the share of feed-attributed purchases from households that already bought you, and your own scorecard, since the retailer grading the results also built the feed.",
    content: (
      <div className="prose-content">
        <p>
          More than 60 cents of every US retail media dollar buys sponsored search, an ad that exists only when a shopper types into the retailer&rsquo;s search box. On June 22, Instacart introduced a surface that skips the box entirely. Immersive Feed is short-form shoppable vertical video inside its retailer storefronts: 9:16 clips, five to thirty seconds, meals and recipes you scroll and add to cart mid-video. It&rsquo;s in early pilot with brands like Hellmann&rsquo;s, Rachael Ray Nutrish and Siete Foods, drawn from more than 9,000 brand partners, bookable through Instacart&rsquo;s Ads Manager.
        </p>
        <p>
          The trade coverage got its TikTok headline and moved on. Fair enough, since the format is TikTok&rsquo;s down to the aspect ratio. But the reason this product exists has little to do with what&rsquo;s fashionable in video. Two weeks ago I did{" "}
          <Link href="/writing/retail-media-passed-tv-sponsored-search-exposure" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the exposure math on retail media&rsquo;s record year</Link>: the majority of the spend rides on an ad format that requires a search bar, and shoppers are moving that behavior into AI assistants. Immersive Feed is what a retail media network builds when it believes its own search data.
        </p>
        <h2>Inventory that doesn&rsquo;t wait for a query</h2>
        <p>
          Sponsored search is demand capture. The shopper announces intent, and the auction sells the announcement. Every retail media network shares the same weak point: no query, no auction, and when an assistant carries the intent, the retailer&rsquo;s box never gets typed into. A feed flips the dependency &mdash; instead of harvesting intent a shopper announces, it tries to start some. If people browse dinner videos at 5pm the way they browse TikTok at 5pm, Instacart owns ad inventory that exists whether or not anyone searches, measured to the receipt like everything else on the platform.
        </p>
        <h2>The feed has to earn the scroll</h2>
        <p>
          I started my career at Crispin Porter + Bogusky, where the product was advertising people chose to watch. It&rsquo;s the hardest brief in the business. An ad that interrupts entertainment can be mediocre and still work. An ad that has to be the entertainment gets no such mercy. A feed inside a grocery app is asking for time people currently give to TikTok, which has spent a decade and billions tuning an algorithm whose only job is keeping you there. A feed of brand-supplied clips for mayonnaise and tortillas walks into that fight holding a media kit.
        </p>
        <p>
          Instacart seems to know it. The launch leans on recipes and inspiration, and the roadmap adds creator and organic content later this year, an acknowledgment that brand clips alone won&rsquo;t hold a scroll. Retail apps have tried inspiration surfaces before, and most became the aisle nobody walks down. The feed only matters if it becomes a habit.
        </p>
        <h2>Grade it as a hedge, and bring your own scorecard</h2>
        <p>
          If you&rsquo;re a brand in the pilot, the test to run: did the feed start baskets, or did it collect credit for baskets your search ads were going to close anyway? Ask for incrementality against a holdout. Ask what share of feed-attributed purchases came from households that already bought you. And remember who&rsquo;s grading: the retailer that built the feed also runs the measurement,{" "}
          <Link href="/writing/albertsons-pg-branded-entertainment-retail-media" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the same conflict I flagged when Albertsons started producing its own shows</Link>. The searchless shelf is coming either way; when the assistant does the shopping, nobody types &ldquo;mayo&rdquo; into anyone&rsquo;s box. Instacart is at least building for that world while its search line still pays the bills. Watch whether the feed earns a habit. That&rsquo;s the whole bet, and for once it&rsquo;s measurable to the receipt.
        </p>
      </div>
    ),
    sources: [
      { title: "Instacart — Instacart Introduces New Shoppable Vertical Video Feed for Advertisers", url: "https://company.instacart.com/pressreleases/instacart-introduces-new-shoppable-vertical-video-feed-for-advertisers" },
      { title: "Supermarket News — Instacart comes out with 'snackable' video feed", url: "https://www.supermarketnews.com/grocery-technology/instacart-comes-out-with-snackable-video-feed" },
      { title: "Progressive Grocer — Instacart Launches Immersive Feed Feature for Advertisers", url: "https://progressivegrocer.com/instacart-launches-immersive-feed-feature-advertisers" },
    ],
};
