import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "netflix-3b-ads-commerce-media-yardstick",
    title: "Netflix doubled its ad business to $3 billion, and commerce media barely noticed",
    date: "Jul 21, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-red-600 to-slate-800",
    tldr: "Netflix's Q2 letter on July 16 confirmed revenue of $12.6 billion, up 13%, and ad revenue on track to roughly double to approximately $3 billion in 2026, with US upfront commitments expected to close within weeks. Every earnings writeup graded that against television, where it looks like the fastest ad launch in memory. Against commerce media it lands mid-table: Walmart booked nearly $6.4 billion in ads in fiscal 2026, up 46%; DoorDash, Uber Eats and Instacart run past $4 billion combined; Amazon's $68.6 billion in 2025 works out to roughly three Netflixes of ad revenue per quarter. The gap is the sales motion. Netflix sells like a broadcast network: upfronts, insertion orders, a few thousand large brands, and a manual workflow its own letter concedes 'has historically limited access for smaller buyers.' Retail media sells like search: self-serve, closed-loop to a receipt, an advertiser long tail in the hundreds of thousands. Netflix is extending programmatic access to Pause Ads and live inventory this summer, the right direction and years late. If you buy CTV, use Netflix for premium reach and make it prove outcomes against a holdout. If you sell streaming ads, the bar Walmart set with Vibe applies to you now: the next $3 billion has to come from advertisers who can launch a campaign without ever meeting a salesperson.",
    content: (
      <div className="prose-content">
        <p>
          Netflix&rsquo;s shareholder letter on July 16 was a victory lap with numbers to back it: Q2 revenue of $12.6 billion, up 13%, operating margin of 33%, and the ads business &ldquo;on track to deliver approximately $3 billion in ads revenue in 2026,&rdquo; roughly double last year. US upfront commitments close in the next few weeks. The Women&rsquo;s World Cup, an expanded NFL slate, and WWE are pulling advertisers in the door.
        </p>
        <p>
          Every earnings writeup I read graded that number against television, and against television it deserves the applause. Ad tiers at streaming services have flopped for a decade, and Netflix built a real one in four years. But television is the wrong yardstick, because television is no longer where the ad money is going.{" "}
          <Link href="/writing/commerce-media-passed-tv-agents-buying" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Commerce media passed TV in global ad revenue</Link>{" "}
          before this year started. Measure Netflix against the channel that&rsquo;s winning and the picture changes.
        </p>
        <h2>Mid-table in the league that matters</h2>
        <p>
          Walmart&rsquo;s ad business booked nearly $6.4 billion in fiscal 2026, up 46%, which means Walmart added more ad revenue last year than Netflix&rsquo;s entire ads business will bring in this year. The{" "}
          <Link href="/writing/delivery-apps-retail-media-third-pole" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">food-delivery apps</Link>, a category that barely existed as ad sellers five years ago, run past $4 billion combined. Amazon booked $68.6 billion in 2025, about three Netflixes per quarter. The most scrutinized ad launch in entertainment history, the one with the earnings-call standing ovation, would not crack the top tier of retail media networks.
        </p>
        <p>
          That comparison sounds unfair. Netflix sells thirty seconds of premium attention; Walmart sells a spot on a digital shelf. But the brand dollars funding both come from the same budgets, and CFOs have spent two years moving those budgets toward whatever can prove a sale happened. The channel that grades itself with a receipt has been beating the channel that grades itself with a panel.
        </p>
        <h2>Netflix still sells like a broadcast network</h2>
        <p>
          The structural gap is in the motion, not the inventory. Netflix runs upfronts, sales teams, insertion orders, and negotiated commitments with a few thousand of the world&rsquo;s biggest brands. Retail media runs like search: log in, set a budget, launch. Amazon&rsquo;s long tail of advertisers numbers in the hundreds of thousands, most of whom have never spoken to a human at Amazon. That long tail is what compounds. Big-brand budgets get negotiated annually; small-advertiser spend grows every week nobody is watching.
        </p>
        <p>
          Don&rsquo;t take my word for the diagnosis, take Netflix&rsquo;s. Buried in the letter: extending programmatic access to Pause Ads and live inventory this summer &ldquo;reduces the manual effort that has historically limited access for smaller buyers, opening Netflix to a broader range of advertisers over time.&rdquo; The company just told you, in an SEC exhibit, that its own workflow has been keeping smaller advertisers out. Walmart saw the same wall from the other side and{" "}
          <Link href="/writing/walmart-vibe-self-serve-tv-advertising" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">bought Vibe to put a self-serve button on TV</Link>{" "}
          for advertisers who will never sit in an upfront. Ten thousand small advertisers buying streaming TV like a paid-social ad: that is the motion pointed directly at the money Netflix can&rsquo;t yet touch.
        </p>
        <h2>What to do with this</h2>
        <p>
          If you buy media, Netflix has something retail media doesn&rsquo;t: scarce, premium, lean-back attention, live sports included, at global scale. Buy it for that. Just grade it honestly, insist on incrementality against a holdout rather than panel math, and resist paying commerce-media prices for broadcast-style proof. If you&rsquo;re a smaller advertiser, watch the programmatic expansion this summer; early inventory in a channel opening to the long tail tends to be underpriced for a while.
        </p>
        <p>
          If you sell streaming ads, at Netflix or anywhere, the uncomfortable sentence in your own shareholder letter is the roadmap. The first $3 billion came from the biggest brands on earth, hand-sold by an excellent sales team. The next $3 billion has to come from advertisers who can launch a campaign without ever meeting one.
        </p>
      </div>
    ),
    sources: [
      { title: "Netflix — Q2 2026 Shareholder Letter (July 16, 2026)", url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000211/ex991_q226.htm" },
      { title: "Marketing Dive — Walmart raked in $6.4B from ads last year (February 2026)", url: "https://www.marketingdive.com/news/walmart-raked-in-64b-from-ads-last-year-execs-see-plenty-runway-ahead/812669/" },
      { title: "Marketing Dive — Amazon's annual ad revenue passes $68B (February 2026)", url: "https://www.marketingdive.com/news/amazon-annual-ad-revenue-passes-68b-boosted-by-full-funnel-strategy/811569/" },
    ],
};
