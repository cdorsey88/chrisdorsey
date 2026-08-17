import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "criteo-two-clients-retail-media-concentration",
    title: "Two customers Criteo won't name took a third of its retail media profit",
    date: "Aug 10, 2026",
    readTime: "6 min",
    tag: "MadTech",
    color: "from-orange-800 to-slate-600",
    tldr: "Criteo reported Q2 on August 5. Revenue $428 million, down 11%. Retail Media contribution ex-TAC fell 21% to $47.2 million, carrying a $21 million headwind from what the company calls scope changes with two specific Retail Media clients. It has never named them. Take those two out and the rest of the retail media book grew 20% with take rates intact. Full-year guidance moved to a 10-12% contribution ex-TAC decline at constant currency, against the low-single-digit decline guided on May 6. Q3 is guided to $237-241 million, down 14-15%. Adjusted EBITDA margin guidance went from 32-34% to about 30%. The stock fell 28%, and CFO Sarah Glickman is out after six years, with Connor McGogney starting today. Criteo monetizes retail media for a couple hundred retailers and ran $4.5 billion of media spend over the last twelve months, and two accounts still moved the whole year. The concentration was disclosed in May and repriced in August anyway. If you run a monetization business, pull the contribution concentration on your top five retail accounts this week and write down what happens when one of them insources. If you're a retailer on the other side of that contract, you have more room than your rate card implies.",
    content: (
      <div className="prose-content">
        <p>
          Criteo reported second-quarter results on August 5. Revenue of $428 million, down 11% year over year. Contribution ex-TAC of $255 million, down 13%. Adjusted EBITDA of $73 million against $89 million a year ago. The stock dropped 28%.
        </p>
        <p>
          The line I&rsquo;d stare at is in the segment breakdown. Retail Media contribution ex-TAC came in at $47.2 million, down 21% from $60 million, &ldquo;reflecting a $21 million headwind from previously communicated scope changes with two specific Retail Media clients.&rdquo;
        </p>
        <p>
          Two clients. Twenty-one million dollars out of a segment that produced sixty million in the year-ago quarter. Roughly a third of the gross profit of Criteo&rsquo;s retail media business walked out the door attached to two customers the company has still not named in a press release.
        </p>
        <p>
          And the rest of the book was fine. Criteo says that excluding those two, retail media contribution ex-TAC grew 20% in the quarter with take rates holding. It added Loblaw Advance in Canada, Monoprix and Druni in EMEA, Olive Young and Golf Digest Online in APAC. Two things can be true: the product is working across a couple hundred retail partners, and the year still got decided by two accounts.
        </p>
        <h2>Nobody was hiding this, and it repriced anyway</h2>
        <p>
          Criteo disclosed the scope reductions back on May 6, sizing them at roughly $75 million for the full year and guiding to a low-single-digit contribution ex-TAC decline, with underlying growth in the mid single digits once you backed the two clients out. The market had the number for three months.
        </p>
        <p>
          Then on August 5 the full-year guide went to a decline of 10% to 12% at constant currency, Q3 came in at $237 to $241 million against a 14-15% decline, and the EBITDA margin target dropped from 32-34% to about 30%. Sarah Glickman, CFO for six years, is stepping back to an advisor role, and Connor McGogney took the job today. Michael Komasinski called the top-line performance disappointing and said the Commerce Intelligence strategy is unchanged.
        </p>
        <p>
          So the disclosure was there in May and the repricing happened in August. Investors will tell you that&rsquo;s soft performance media demand from large US enterprise clients showing up on top of the retail media hole, and they&rsquo;re right, Performance Media contribution ex-TAC fell 10%. But a disclosed concentration risk that costs you a quarter of your market value on the day it fully lands was never really priced. It was just known.
        </p>
        <h2>What a &ldquo;scope change&rdquo; means</h2>
        <p>
          Nobody in an earnings release writes the sentence &ldquo;our client decided to do this themselves.&rdquo; They write scope change.
        </p>
        <p>
          A retailer signs a monetization partner when it wants an ad business and has no ad sales organization, no self-serve platform, no measurement, and no relationships with the brand teams holding the budget. Three or four years later it has a category-management team that talks to those brands weekly, a demand roster, and a CFO who has noticed that a large share of the gross profit on its own shelf is being shared with a vendor. Then the scope narrows. Onsite search comes in house first, because it&rsquo;s the highest margin and the easiest to staff. Offsite and measurement stay outsourced a while longer.
        </p>
        <p>
          I sold expansion at Oracle and Fastly, and the pattern is identical in infrastructure. The accounts that grow the most are the accounts most capable of replacing you, because sophistication cuts both ways. A customer that can articulate exactly what your product does for them is a customer that can scope a build. Months before anyone mentions the contract, their technical questions get more specific and their strategic ones stop.
        </p>
        <p>
          If you run a business where a partner monetizes an asset they own, that dynamic is your whole risk model. It doesn&rsquo;t show up in net revenue retention until it&rsquo;s done, because the account looks healthy the entire time it&rsquo;s preparing to leave.
        </p>
        <h2>The concentration nobody reports</h2>
        <p>
          Criteo&rsquo;s public numbers look diversified. Media spend of $1.1 billion in the quarter, $4.5 billion over twelve months, retail partners across North America, EMEA and APAC, a Leader placement in somebody&rsquo;s matrix. A reader would reasonably assume no single relationship matters much.
        </p>
        <p>
          The revenue was diversified. The contribution was not. Retail media monetization deals are share-of-revenue arrangements, so a handful of large-format retailers with real basket volume can generate most of the profit while hundreds of smaller banners generate the logo count. That gap between how many customers you have and how few of them fund your quarter is the number companies rarely publish and buyers rarely ask for.
        </p>
        <p>
          It applies well past Criteo. Every commerce media platform, retail media SaaS vendor and clean-room company selling into grocery, pharmacy and big-box has the same shape, and the category&rsquo;s customer list is finite in a way software categories usually aren&rsquo;t. There are maybe forty US retailers with enough scale to fund a real ad business. When two of them change their minds in the same year, that isn&rsquo;t bad luck.
        </p>
        <h2>The awkward part is that Criteo is early on the next surface</h2>
        <p>
          In March, Criteo became OpenAI&rsquo;s first advertising technology partner, and it now has more than 2,000 brands advertising on ChatGPT across seven countries, with Mexico and Brazil coming. That inventory is available through Criteo GO, its self-serve platform. It also launched sponsored products into AI-powered conversational search with Albertsons.
        </p>
        <p>
          I&rsquo;ve written that{" "}
          <Link href="/writing/retail-media-passed-tv-sponsored-search-exposure" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">more than 60% of retail media spend rides on sponsored search</Link>{" "}
          while the query itself moves into assistants. Criteo is further into that transition than almost anyone selling retail media, and it&rsquo;s a plausible bet that the company running ads inside ChatGPT for 2,000 brands is holding a better 2028 than the retailer that just insourced its onsite search.
        </p>
        <p>
          None of that changes what happened this quarter. A company can be correctly positioned for the next surface and still lose a third of a segment&rsquo;s profit to two customers on the current one. Being right about where the category is going doesn&rsquo;t pay a Q3 number.
        </p>
        <h2>What to do with this before your next QBR</h2>
        <p>
          If you sell monetization or managed services into large retailers, go build the version of this table nobody asks you for: contribution, not revenue, by account, top five as a share of the total. Then, for each of those five, write down what the customer would need to hire and buy to run it themselves, and how close they are. If the answer is &ldquo;two directors and a platform they already license,&rdquo; you have a renewal problem with a date on it, and the fix is owning something they can&rsquo;t staff, usually offsite demand or cross-retailer measurement.
        </p>
        <p>
          If you&rsquo;re the retailer, you have more room than you think. Criteo just showed the market what two customers changing scope does to a vendor&rsquo;s stock. That&rsquo;s a fact your next renegotiation can use, and it argues for splitting the pieces you could eventually run yourself from the ones you never will.
        </p>
        <p>
          And if you&rsquo;re an investor or an operator reading commerce media disclosures generally, treat &ldquo;200+ retail partners&rdquo; as a marketing statistic until somebody shows you which five pay for the company. Criteo&rsquo;s two unnamed clients were in the filings for three months before they cost a quarter of the market cap.
        </p>
      </div>
    ),
    sources: [
      { title: "Criteo — Criteo Reports Second Quarter 2026 Results (Aug 5, 2026)", url: "https://criteo.investorroom.com/2026-08-05-CRITEO-REPORTS-SECOND-QUARTER-2026-RESULTS" },
      { title: "Criteo — Criteo Reports First Quarter 2026 Results (May 6, 2026)", url: "https://criteo.investorroom.com/2026-05-06-CRITEO-REPORTS-FIRST-QUARTER-2026-RESULTS" },
      { title: "PPC Land — Criteo cuts full-year guidance as Q2 revenue falls 11% to $428 million", url: "https://ppc.land/criteo-cuts-full-year-guidance-as-q2-revenue-falls-11-to-428-million/" },
      { title: "Investing.com — Criteo Q2 2026 slides: AI ambitions clash with enterprise spending cuts", url: "https://www.investing.com/news/company-news/criteo-q2-2026-slides-ai-ambitions-clash-with-enterprise-spending-cuts-93CH-4837866" },
      { title: "PPC Land — Criteo cuts full-year guidance again as ad tech earnings split in two", url: "https://ppc.land/criteo-cuts-full-year-guidance-again-as-ad-tech-earnings-split-in-two/" },
    ],
};
