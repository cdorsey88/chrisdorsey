import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "alphabet-q2-search-ads-ai-mode",
    title: "Google's search ads grew 17% in the quarter AI Mode was supposed to eat them",
    date: "Jul 23, 2026",
    readTime: "6 min",
    tag: "Future of Ads",
    color: "from-sky-600 to-orange-500",
    tldr: "Alphabet reported Q2 on July 22: revenue of $119.8 billion, up 24%, Cloud up 82%, and a stock that fell anyway on another capex hike. The number worth staring at is in the ads table: Search and Other grew 17% to $63.3 billion in the same quarter AI Mode passed a billion monthly users. Philipp Schindler says ads in AI Overviews monetize at approximately the same rate as traditional search ads. I've published the disruption thesis myself, so this print deserves an honest reckoning: both can hold, because Google owns the answer layer it's disrupting itself with. Wherever the query moves, Google moves the auction with it and charges parity. The companies that should read this print nervously are the ones that monetize search behavior on surfaces they don't own: retail media networks with 60%+ of spend riding sponsored search, SEO and SEM tooling priced against keyword lists, publishers living on organic clicks. Alphabet's top line will be the last place the shift shows up. Run your ten money queries in AI Mode this week and look at which ads made the cut; that report says more about your exposure than the next ten earnings prints.",
    content: (
      <div className="prose-content">
        <p>
          Alphabet reported Q2 on July 22: revenue of $119.8 billion, up 24%, Google Cloud up 82% to $24.77 billion, and a stock that sold off anyway because investors looked at the capital-expenditure line and winced. Every writeup this morning is about the spending. The number worth staring at sits in the ads table. Search and Other grew 17% year over year, to $63.3 billion, in the same quarter AI Mode passed a billion monthly users.
        </p>
        <p>
          That was the quarter the search-ads apocalypse was scheduled for. AI answers were supposed to swallow the query, then the click, then the auction underneath both. I have made a version of that argument myself, more than once: when Google{" "}
          <Link href="/writing/google-conversational-ads-keyword-casualty" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">folded ads into conversations</Link>{" "}
          and the keyword lost its job description, and again when the citation data showed AI answers drifting away from Google&rsquo;s own rankings. So a 17% print two years into the AI-answer era deserves some self-interrogation from me before it gets a fresh coat of doom.
        </p>
        <p>
          Here is what Google said about it. Philipp Schindler, the chief business officer, told analysts that ads in AI Overviews monetize at approximately the same rate as ads in traditional search. Long conversational queries turn out to be more specific than keyword stubs, which makes the matching easier, and Google claims a 20% improvement in surfacing relevant shopping ads on some of them. AI Max came out of beta with 500,000 advertisers, and Google says its AI-driven campaign types are delivering roughly 15% more conversions at similar returns. Wherever the query has gone so far, the auction has followed it within the quarter.
        </p>
        <h2>I&rsquo;ve buried this patient before</h2>
        <p>
          I started my career at Crispin Porter + Bogusky while digital was supposed to be strangling television. The thesis was correct. Attention really was leaving, the young really weren&rsquo;t coming back, and everyone selling against TV had the charts. TV upfronts then set records for most of another decade, because the incumbent holding the audience gets first crack at repricing the new behavior, and buyers move budgets years after they move beliefs. The programmatic wave ran the same script on media sellers. The disruption was real both times. The incumbent&rsquo;s top line was the last place it showed.
        </p>
        <p>
          Two things can be true. The AI answer really is dismantling the twenty-year-old logic of the keyword auction, and Google&rsquo;s ad revenue can keep compounding through most of that dismantling, because Google is the one doing it. Disruption only shows up in your revenue line when someone else owns the new surface. Google built the new surface on top of its old one and kept the register.
        </p>
        <h2>The exposed parties don&rsquo;t report on Alphabet&rsquo;s calendar</h2>
        <p>
          When the query moves from a results page into an answer, Google loses nothing so long as both belong to Google. It moves the ad into the new surface and charges parity rates, which is exactly what Schindler described. Now run the same shift for everyone else who monetizes search behavior on a surface they don&rsquo;t own. Retail media networks book{" "}
          <Link href="/writing/retail-media-passed-tv-sponsored-search-exposure" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">more than 60% of their spend on sponsored search</Link>, an ad that exists only when a shopper types into the retailer&rsquo;s own search bar, a behavior already leaking into assistants the retailer doesn&rsquo;t control. SEO and SEM tooling is priced against keyword lists. Publishers arbitrage organic clicks that AI answers increasingly keep. None of them can do what Google just did, because none of them own the answer layer their customers are migrating to.
        </p>
        <p>
          So the Q2 print is two findings in one. The answer layer can carry a full ad load at rates advertisers accept; that question is settled, and it was the biggest open question in advertising. And the ability to collect on that finding belongs to whoever owns the answer. Google demonstrated the toll can be charged. It did not demonstrate that anyone else gets to charge it.
        </p>
        <h2>Watch the redistribution, not the total</h2>
        <p>
          The other reason a 17% aggregate tells you little: an AI answer carries fewer ads than a results page carried links, so a stable monetization rate means the auction is concentrating. Fewer slots at similar total revenue is a redistribution engine. Some advertisers are winning the answer box and taking share; the rest are funding it from below the fold. Google doesn&rsquo;t disclose ad load per query or paid-click trends by surface, which means the aggregate is the only number you get, and the aggregate is designed to look calm.
        </p>
        <p>
          If you buy media or run a brand, grade your own category instead of Google&rsquo;s totals. Run your ten money queries in AI Mode this week, log which ads and citations made the cut, and compare it against who wins the classic results page. If you sell for a retail media network or an SEO platform, do the harder version of the same audit on your own book: how much of your revenue depends on a search bar your company owns, and how much on search behavior that&rsquo;s free to leave. Alphabet&rsquo;s top line will be the last place this shift registers. Your category&rsquo;s answer page will show it quarters earlier, and nobody reports that number for you.
        </p>
      </div>
    ),
    sources: [
      { title: "CNBC — Alphabet Q2 2026 earnings: revenue beats, stock falls on capex hike (July 22, 2026)", url: "https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html" },
      { title: "9to5Google — Alphabet reports Q2 2026 revenue of $119.8 billion (July 22, 2026)", url: "https://9to5google.com/2026/07/22/alphabet-q2-2026-earnings/" },
      { title: "PPC Land — Google Search ads gain 17% to $63.3 billion while network drops 1%", url: "https://ppc.land/google-search-ads-gain-17-to-63-3-billion-while-network-drops-1/" },
      { title: "AdExchanger — Alphabet's revenue skyrockets, and AI Overviews gobble more of the search pie", url: "https://www.adexchanger.com/online-advertising/alphabets-revenue-skyrockets-and-ai-overviews-gobble-more-of-the-search-pie/" },
      { title: "Variety — YouTube ad sales increase 13% in Q2 2026 (July 22, 2026)", url: "https://variety.com/2026/digital/news/youtube-q2-2026-ad-sales-alphabet-google-earnings-results-1236818132/" },
    ],
};
