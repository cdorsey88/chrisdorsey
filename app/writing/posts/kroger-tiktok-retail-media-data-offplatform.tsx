import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "kroger-tiktok-retail-media-data-offplatform",
    title: "Kroger is renting its shoppers to TikTok. Walmart spent a year making sure it never has to.",
    date: "Jun 30, 2026",
    readTime: "5 min",
    tag: "MadTech",
    color: "from-sky-600 to-violet-600",
    tldr: "Kroger Precision Marketing launched self-service advertising with TikTok, letting brands target Kroger's loyalty-based purchase audiences inside TikTok's ad platform. Same month, same Cannes festival, Walmart kept buying its own stack — VIZIO, Vibe — so its data, inventory, and measurement stay in-house. Two retail media networks made opposite bets on where a retailer's data is worth the most: pointed at the biggest outside audience, or kept behind its own walls. Kroger's move buys reach it can't build alone, and risks teaching the market to value the data over Kroger's owned media while TikTok learns which of its audiences convert. If you sell retail media, audience licensing is a real revenue line, but know whether you're selling reach or renting out your moat. If you buy, Kroger data inside TikTok is good targeting — just don't let TikTok be the only scorecard.",
    content: (
      <div className="prose-content">
        <p>
          Kroger Precision Marketing, the retail-media arm of the grocery chain, just{" "}
          <a href="https://www.krogerprecisionmarketing.com/media-hub/blog/kroger-precision-marketing-announces-self-service-advertising-with-tiktok/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">launched self-service advertising with TikTok</a>. Brands can now target Kroger shoppers, matched by actual purchase data from millions of loyalty-card transactions a day, inside TikTok&apos;s ad platform, bought through self-serve tools. Kroger&apos;s pitch is that its data finds the buyer and TikTok&apos;s feed reaches them where their attention already is. The stat it leads with: 68% of Kroger shoppers say they bought a grocery or household product in the last six months because of something they saw on social.
        </p>
        <p>
          What makes the move worth a second look is what a different retailer did the same month, at the same Cannes festival, in the opposite direction. Walmart spent the spring buying its own stack &mdash;{" "}
          <Link href="/writing/walmart-vibe-self-serve-tv-advertising" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">VIZIO for the screen, Vibe for the self-serve buying tool</Link> &mdash; and wiring both into Walmart Connect so the data, the inventory, and the measurement all stay inside the building. Kroger is doing the reverse: taking its most valuable asset, the purchase data, and pushing it out onto a platform it doesn&apos;t own. Same business, two theories of where a retailer&apos;s data is worth the most.
        </p>
        <p>
          I&apos;ve spent enough time around data partnerships to have watched how this tends to go for the smaller party. You bring the data that makes the targeting work, the platform brings the reach, and over a couple of renewal cycles the platform learns exactly which of your audiences convert and quietly internalizes the value you walked in with. The side that owns the destination usually ends up owning the relationship.
        </p>
        <h2>Kroger&apos;s bet is rational anyway</h2>
        <p>
          Two things are true at once. Kroger doesn&apos;t have a destination at Walmart&apos;s scale &mdash; no living-room screen it owns, and a website pulling a fraction of the traffic Amazon or Walmart.com command. Meeting shoppers inside TikTok, where they already spend hours, is a clear-eyed read of that position: borrow the reach you can&apos;t build yourself. And every off-platform activation is data leaving the building. TikTok gets to see which Kroger-defined audiences respond, which sharpens TikTok&apos;s own model and makes Kroger a little more replaceable inside it each time. The reach is real today. The dependency compounds in the background.
        </p>
        <h2>The measurement question rides along</h2>
        <p>
          There&apos;s also the closed-loop problem that shadows every retail-media deal. When the campaign runs inside TikTok, TikTok&apos;s pixel and TikTok&apos;s attribution do a lot of the grading. Kroger&apos;s purchase data can close part of the loop on the sales end, which is genuinely useful and more than most networks can offer, but the platform selling the impressions is still heavily involved in telling you those impressions worked. Brands have spent a decade learning not to take Meta&apos;s and Amazon&apos;s self-reported numbers at face value. The same caution applies here.
        </p>
        <h2>If you sell</h2>
        <p>
          If you run or sell into a retail media network, licensing your audiences onto the big social platforms is a fast, real revenue line, and the reach argument holds up. Be honest internally about which thing you&apos;re doing: selling reach your owned media can&apos;t match, or renting out the first-party data that was supposed to be your durable advantage. Both can be worth it. They have very different five-year endings, and the smaller you are next to the platform, the more the second one costs you down the road.
        </p>
        <h2>If you buy</h2>
        <p>
          Kroger purchase-data audiences inside TikTok is a good targeting tool, and for a brand that sells through Kroger it&apos;s worth testing now while it&apos;s fresh. Bring your own measurement. Don&apos;t let TikTok&apos;s attribution be the only scorecard, push for the sales read tied to Kroger&apos;s loyalty data, and run a holdout so you can separate what the campaign drove from what would have sold regardless.
        </p>
        <p>
          Walmart and Kroger answered the same question two different ways in the same week. Walmart is betting a retailer&apos;s data is worth the most when the retailer controls the screen it runs on. Kroger is betting it&apos;s worth the most pointed at the largest audience it can reach, wherever that audience happens to live. Both will make money this year. The one to watch is whose data is still their own advantage in five years, and whose has quietly become a feature of somebody else&apos;s platform.
        </p>
      </div>
    ),
    sources: [
      { title: "Kroger Precision Marketing — Kroger Precision Marketing Announces Self-Service Advertising with TikTok (June 2026)", url: "https://www.krogerprecisionmarketing.com/media-hub/blog/kroger-precision-marketing-announces-self-service-advertising-with-tiktok/" },
      { title: "Grocery Dive — Kroger links with TikTok on targeted ads", url: "https://www.grocerydive.com/news/kroger-tiktok-retail-media-social-media-grocery-supermarkets-advertising/823589/" },
      { title: "Progressive Grocer — Kroger Precision Marketing Launches Self-Service Advertising With TikTok", url: "https://progressivegrocer.com/kroger-precision-marketing-launches-self-service-advertising-tiktok" },
    ],
};
