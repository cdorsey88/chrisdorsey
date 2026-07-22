import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "delivery-apps-retail-media-third-pole",
    title: "There's a $4 billion retail media network hiding in your food-delivery app",
    date: "Jul 12, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-rose-600 to-amber-500",
    tldr: "Retail media is still tracked as an Amazon-and-Walmart story — the two take roughly 89% of new spend in 2026. But a third network formed underneath: DoorDash, Uber Eats and Instacart now run past $4 billion in combined ad revenue, and on June 4 DoorDash stitched DoorDash, Wolt and Deliveroo into one Global Commerce Media Platform with 400,000 advertisers, Symbiosys offsite reach, and a LiveRamp clean room. The delivery apps sell a different signal than grocery retail media: what you want in the next thirty minutes, tied to who delivered it to your door, and it doesn't go stale the way purchase history does. If you buy retail media, add the delivery networks as their own line and grade them on incremental reach and the occasions grocery can't see, not against Amazon's scale. If you sell it, get honest about whether your data's edge is the shelf or the moment.",
    content: (
      <div className="prose-content">
        <p>
          There&rsquo;s a retail media network with 400,000 advertisers hiding inside your dinner order, and most media plans still don&rsquo;t have a line for it. On June 4, DoorDash pulled DoorDash, Wolt and Deliveroo into one Global Commerce Media Platform. Add Uber Eats and Instacart and the food-delivery apps now run past $4 billion in combined annual ad revenue. That stopped being a rounding error on the retail media story. It&rsquo;s the third pole.
        </p>
        <p>
          The trade coverage filed it the way it files everything: a scrappy second tier splitting scraps while Amazon and Walmart take roughly 89% of new retail media spend in 2026. That concentration number is real. It also grades the delivery apps on the one thing they&rsquo;re worst at, raw reach, and skips the thing they have that no grocer does.
        </p>
        <h2>What a delivery order knows that a loyalty card doesn&rsquo;t</h2>
        <p>
          A grocery loyalty card tells a brand what you bought, eventually, after the receipt clears. A delivery order tells a brand what you want in the next thirty minutes, where you are when you want it, and who carried it to your door. At Zeta I spent years selling intent data into brands that didn&rsquo;t have a budget line for it yet, and the hardest part was always freshness. Most &ldquo;intent&rdquo; was a week stale by the time it reached a campaign. A hunger signal doesn&rsquo;t get stale. It converts inside the hour or it doesn&rsquo;t.
        </p>
        <p>
          That&rsquo;s a different product than sponsored search on a grocery site, which is{" "}
          <Link href="/writing/retail-media-passed-tv-sponsored-search-exposure" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the soft spot under retail media&rsquo;s record numbers</Link>. Sponsored search only fires when a shopper types into the retailer&rsquo;s box. A delivery order is the shopper already at the register, mid-decision, with the app watching the whole thing.
        </p>
        <h2>DoorDash built the part the grocers are still stitching together</h2>
        <p>
          The June 4 launch matters for what it assembled, not just what it announced. One platform now spans the US through DoorDash and the rest of the world through Wolt and Deliveroo. Symbiosys, the offsite adtech DoorDash bought in 2025, pushes those audiences out across search, social and display, with media dollars on it nearly doubled since the deal. A LiveRamp clean room integration found more than 80% of the consumers a brand reached this way were new to it. So: global reach, plus a closed loop back to a real order, sold to 400,000 advertisers in one place. Kroger and Albertsons are{" "}
          <Link href="/writing/kroger-tiktok-retail-media-data-offplatform" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">still negotiating that kind of reach deal by deal</Link>.
        </p>
        <h2>Two things can be true here</h2>
        <p>
          Amazon and Walmart still own retail media, and they will for years. The delivery basket is narrower, heavy on CPG, restaurants and convenience, light on the big general-merchandise categories that fund the giants. Measurement across three delivery brands and an offsite network is younger and messier than a walled Amazon report. None of this says move your budget. It says you&rsquo;re probably underweight a network whose signal is fresher than anything in your current mix, and that gap widens as more buying runs through an app that already knows you&rsquo;re hungry.
        </p>
        <h2>Where this leaves your budget</h2>
        <p>
          If you buy retail media, add the delivery networks as their own line and grade them on their own merit: incremental reach through the LiveRamp clean room, and conversion on the occasions grocery can&rsquo;t see, like the Friday-night order or the last-minute convenience run. Don&rsquo;t make them audition against Amazon&rsquo;s scale; that&rsquo;s a test they lose and the wrong test to run. If you sell retail media, get honest about whether your data&rsquo;s edge is the shelf or the moment. DoorDash is betting the moment travels, that a hunger signal, cleaned and matched, is worth more offsite than a stale purchase history. If that bet pays, the retailers whose whole pitch is &ldquo;we know what they bought&rdquo; are selling the weaker half of the signal.
        </p>
      </div>
    ),
    sources: [
      { title: "DoorDash — DoorDash Ads Becomes a Global Commerce Media Platform", url: "https://about.doordash.com/en-us/news/doordash-ads-becomes-a-global-commerce-media-platform" },
      { title: "eMarketer — Best Buy, Instacart, DoorDash expand retail media offerings to entice reluctant advertisers", url: "https://www.emarketer.com/content/best-buy-instacart-doordash-expand-retail-media-offerings-entice-reluctant-advertisers" },
      { title: "PPC Land — DoorDash Ads becomes a global commerce media platform with 400,000 advertisers", url: "https://ppc.land/doordash-ads-becomes-a-global-commerce-media-platform-with-400-000-advertisers/" },
    ],
};
