import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "paypal-bid-ad-network-transaction-graph",
    title: "The $53 billion PayPal bid includes an ad network nobody is pricing",
    date: "Jul 16, 2026",
    readTime: "6 min",
    tag: "MadTech",
    color: "from-blue-700 to-amber-500",
    tldr: "Stripe and Advent International offered $60.50 a share for PayPal on July 15, roughly $53 billion at a 28% premium, with about $50 billion in committed financing; PayPal hasn't responded. The coverage is all payments: Venmo, checkout, Stripe finally getting a consumer business. Buried in the same company is PayPal Ads, the commerce-media business Mark Grether (Uber Advertising, Xaxis) has been building since 2024 on a transaction graph PayPal says covers 430 million consumer accounts, more than 30 million merchants and about a third of global transactions. In January it shipped cross-merchant Transaction Graph Insights and Measurement, the view no retail media network can offer because each only sees its own store. Stripe co-built the checkout rails under agentic commerce and would gain the consumer-side purchase record across rival merchants, the ground truth that's left when conversational buying breaks click attribution. A PE co-owner tends to treat a high-margin ad line the way PE treats everything: as a lever to pull harder. If you buy commerce media, put PayPal Ads on the evaluation list while the company is in play and price the cross-merchant measurement. If you're a merchant feeding that graph, re-read the data clause in your agreement, because change of control hands your customers' purchase history to whoever wins the bid.",
    content: (
      <div className="prose-content">
        <p>
          Stripe and the private equity firm Advent International offered $60.50 a share for PayPal on July 15, per Reuters: roughly $53 billion, a 28% premium, with about $50 billion in committed financing behind it and equal ownership stakes if it closes. PayPal hasn&rsquo;t responded. The stories so far are payments stories, and fair enough. It would be one of the largest take-privates ever attempted, it would hand Stripe the consumer business it never built, and the combined company would process an estimated $3.7 trillion a year.
        </p>
        <p>
          Almost none of the coverage mentions that PayPal also runs an ad network.
        </p>
        <h2>A commerce media business built on receipts</h2>
        <p>
          PayPal hired Mark Grether in 2024 to build PayPal Ads. Grether built Uber&rsquo;s advertising business before that, and ran WPP&rsquo;s Xaxis before that, which makes him one of a small number of people who have stood up a media business inside a company that does something else for a living. What he got to work with at PayPal: a transaction graph the company says covers 430 million consumer accounts, more than 30 million merchants, and about a third of global transactions. In January, PayPal Ads shipped Transaction Graph Insights and Measurement, which gives advertisers a cross-merchant view of real shopper behavior and campaign results.
        </p>
        <p>
          Cross-merchant is the word doing the work. Retail media&rsquo;s{" "}
          <Link href="/writing/retail-media-passed-tv-sponsored-search-exposure" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$70 billion engine</Link>{" "}
          runs on networks that each see one store. Amazon knows what you bought on Amazon. Kroger knows what you bought at Kroger. Every network grades its own homework, which is why I keep telling brands to{" "}
          <Link href="/writing/albertsons-pg-branded-entertainment-retail-media" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">bring their own scorecard</Link>. PayPal sits underneath tens of millions of checkouts and sees the purchase wherever it happens. That answers the question every commerce media pitch dodges: did the ad move a sale anywhere, or did it just claim one that was already coming. The{" "}
          <Link href="/writing/delivery-apps-retail-media-third-pole" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">delivery apps built a $4 billion ad business</Link>{" "}
          on knowing what you want in the next thirty minutes. PayPal&rsquo;s version of the pitch is knowing what you bought everywhere, verified by money changing hands.
        </p>
        <h2>Stripe would own both sides of the receipt</h2>
        <p>
          Now look at who&rsquo;s bidding. Stripe is the merchant-side rail under a huge share of internet checkout, and it co-built the Agentic Commerce Protocol with OpenAI, the plumbing underneath in-chat buying. I&rsquo;ve written about what agent-mediated shopping does to measurement:{" "}
          <Link href="/writing/google-conversational-ads-keyword-casualty" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">when the query becomes a conversation, click attribution goes soft</Link>. There&rsquo;s no keyword, no search session, no clean trail from impression to cart. What survives that collapse is the payment. The receipt is the one event in the funnel that can&rsquo;t be hallucinated, and a Stripe that owns PayPal would hold the largest independent pool of them on both the merchant side and the consumer side.
        </p>
        <p>
          Advent&rsquo;s half of the math is simpler. An ad network is high-margin revenue attached to an asset that already exists, and{" "}
          <Link href="/writing/private-equity-software-rollups" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the PE playbook</Link>{" "}
          treats a lever like that as something you pull harder. Whatever pace PayPal was monetizing its data at as a public company answering to payments analysts, expect the pace to change under owners who bought at a premium and need the return.
        </p>
        <h2>The merchants feeding the graph get a vote, eventually</h2>
        <p>
          The graph is built from merchants&rsquo; transactions, and the ad business monetizes it, sometimes against the very merchants who supplied it. Sound familiar? It&rsquo;s the{" "}
          <Link href="/writing/kroger-tiktok-retail-media-data-offplatform" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Kroger-and-TikTok question</Link>{" "}
          again: are you selling reach, or renting out your moat. Merchants have tolerated it from PayPal because PayPal was a processor at arm&rsquo;s length. Under Stripe, their core infrastructure vendor, or under PE ownership with a return to hit, that tolerance gets tested. And the data rights in every merchant agreement were negotiated with a payments company, then inherited by whoever wins the bid.
        </p>
        <p>
          Two things to do while the lawyers are busy. If you buy commerce media, put PayPal Ads on the evaluation list this quarter and make the cross-merchant measurement prove itself against a holdout, because an asset in play tends to be an asset selling hard. If you&rsquo;re a merchant on PayPal or Stripe rails, pull your agreement and read what happens to your customers&rsquo; transaction data on a change of control. The offer prices PayPal at $60.50 a share. Nobody has published a number for the transaction graph, and it may turn out to be the part of the company that was worth the premium.
        </p>
      </div>
    ),
    sources: [
      { title: "CNBC — Stripe, Advent make $53 billion takeover offer for PayPal, sending stock soaring (July 15, 2026)", url: "https://www.cnbc.com/2026/07/15/stripe-advent-offer-to-buy-paypal-for-more-than-53-billion-reuters.html" },
      { title: "PayPal Newsroom — PayPal Ads Launches Transaction Graph Insights and Measurement (January 6, 2026)", url: "https://newsroom.paypal-corp.com/2026-01-06-PayPal-Ads-Launches-Transaction-Graph-Insights-and-Measurement-to-Improve-Commerce-Advertising-Outcomes" },
      { title: "The Current — Mark Grether's next build: Turning PayPal's data into an off-site media engine", url: "https://www.thecurrent.com/marketing/retail-mark-grether-next-build-turning-paypals-data-off-site-media-engine" },
      { title: "AdExchanger — How PayPal Ads Proves Retail Media ROI With Cross-Merchant Data (Cannes 2026)", url: "https://www.adexchanger.com/content-studio/paypal-ads-mark-grether-retail-media-cannes-2026/" },
    ],
};
