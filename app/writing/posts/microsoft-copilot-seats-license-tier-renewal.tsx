import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "microsoft-copilot-seats-license-tier-renewal",
    title: "Your AI deal is now a line item in someone's Microsoft renewal",
    date: "Jul 30, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-indigo-700 to-rose-500",
    tldr: "Microsoft reported FY26 Q4 on July 29: $90 billion in revenue up 18%, Azure past $100 billion for the fiscal year, and more than 30 million paid Microsoft 365 Copilot seats, up from 20 million last quarter and 15 million the quarter before. The coverage split into two camps, one calling it vindication and one pointing out that 30 million is under 7% of Microsoft's roughly 464 million commercial seats. Both are true and neither is the useful part. What changed this quarter is the mechanism: E7, the $99 tier bundling Copilot with E5, Entra and Agent 365, went from launch to hundreds of enterprise customers and millions of seats in two months, with EY deploying it to 400,000 employees. Copilot didn't win those accounts in a bake-off. It arrived attached to a license tier the customer was already renegotiating. Meanwhile the deployment gap that killed AI renewals is closing — Nadella says time to high usage went from months to days — and a consumption meter is going in underneath, with 40 million agents registered in Agent 365 and Dynamics 365 credit consumption up fourfold quarter over quarter. If you sell AI into enterprises, find out what license tier your account sits on and when the agreement renews, because your budget conversation may already be happening inside a Microsoft negotiation you weren't invited to.",
    content: (
      <div className="prose-content">
        <p>
          Microsoft closed its fiscal year on Wednesday with $90 billion in quarterly revenue, up 18%, Azure past $100 billion for the year, and commercial remaining performance obligation of $678 billion, up 84%. Somewhere in that pile of numbers, Satya Nadella said Microsoft now has more than 30 million paid Microsoft 365 Copilot seats, with net seat additions more than doubling quarter over quarter.
        </p>
        <p>
          That figure was 15 million in January and 20 million in April. Ten million seats added in a single quarter is the fastest the product has ever moved.
        </p>
        <p>
          The commentary split immediately. One camp read it as proof the $190 billion data-center buildout is converting. The other camp did the division. Microsoft stopped publishing a headline Microsoft 365 seat count, but it reported 6% seat growth for the year against the 450 million-plus it disclosed in January, which puts the installed base somewhere near 464 million. Thirty million of those is about 6.5%. After three years of promotion and Copilot being wedged into every surface in the suite, more than 93% of Microsoft&rsquo;s own paying customers still haven&rsquo;t bought it.
        </p>
        <p>
          Both readings are defensible and neither one helps you next quarter. How those ten million seats got booked does.
        </p>
        <h2>The bundle did most of the selling</h2>
        <p>
          Microsoft launched the E7 suite two months ago. It packages Copilot with E5, Entra and Agent 365 at $99 per seat. In its first two months on the market it was bought by hundreds of enterprise customers totaling millions of seats, and EY put it across 400,000 employees. The number of customers buying more than 50,000 Copilot seats grew more than sevenfold year over year. NHS England is extending Copilot to 505,000 clinicians and staff. KPMG is rolling it across more than 276,000 people. HSBC committed to 200,000.
        </p>
        <p>
          None of those are pilots that converted. They are enterprise agreements that moved up a tier. Amy Hood said as much on the call when she credited premium-tier upgrades, Copilot and E7 specifically, for the acceleration in Microsoft 365 commercial cloud revenue.
        </p>
        <p>
          That distinction decides who you are competing against. An AI product sold on its merits competes with other AI products, gets evaluated by the function that will use it, and wins on output. An AI capability sold as a license tier competes with the customer&rsquo;s renewal calendar, gets evaluated by procurement alongside identity and compliance, and wins because unbundling it costs more than accepting it. If your account is negotiating an E7 move, the AI budget conversation you thought you were leading has already happened in a room you weren&rsquo;t in, and the incumbent&rsquo;s marginal price is close to zero.
        </p>
        <h2>The deployment gap that was killing renewals is closing</h2>
        <p>
          The pattern that defined 2024 and 2025 was familiar to anyone who carried an AI number: the customer buys seats, adoption stalls at 15%, the champion goes quiet, and the renewal turns into a downsell. Microsoft claims that gap has compressed. Nadella told analysts that reaching high usage, meaning monthly active usage above 80% of the licensed base, &ldquo;used to be months&rdquo; and &ldquo;is days from when a license is bought.&rdquo; Conversations per user nearly doubled year over year, and weekly engagement now sits alongside Outlook and Teams, the two applications that stay open all day. The count of customers deploying Copilot to a majority of their workforce grew nearly 75% quarter over quarter.
        </p>
        <p>
          Take those numbers with the appropriate discount, since they come from the vendor and Microsoft has a habit of publishing metrics that sound larger than they measure. The 50 billion Copilot interactions audited by Purview tells you Purview is logging, not that anyone found the output useful. But the direction is consistent across enough independent measures, including named customers publishing their own results, that the &ldquo;nobody uses it&rdquo; objection is getting harder to lean on in a deal. NHS England ran a trial that found 43 minutes saved per employee per day, and that is now the number a competing vendor has to beat.
        </p>
        <h2>Microsoft is installing a meter under the seat</h2>
        <p>
          I&rsquo;ve argued before that <Link href="/writing/end-of-per-seat-pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">per-seat pricing was going to break under agents</Link>, and this quarter sharpens that rather than refuting it. The seat didn&rsquo;t die. It became the entry fee, with consumption stacked on top. Agent 365, which Microsoft shipped alongside E7, has nearly 40 million agents registered across tens of thousands of companies in two months. In Dynamics 365, usage-based credit consumption in customer service grew fourfold quarter over quarter. Microsoft now charges customers for token usage the same way it buys compute.
        </p>
        <p>
          That is the same shape as <Link href="/writing/openai-presence-deployed-only-sales-motion" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the deployed-only motion OpenAI chose for Presence</Link> last week, arrived at from the opposite direction. OpenAI is selling outcomes by hand and skipping the funnel. Microsoft is using a 464-million-seat funnel to place the license, then growing revenue on what the agents consume after. Both companies decided the money in agents gets made after the signature.
        </p>
        <p>
          Forrester&rsquo;s Tracy Woo put the caveat well: the results show the buildout starting to deliver returns without validating the strategy, and roughly 45% of Microsoft&rsquo;s commercial RPO is still tied to a single model provider. It&rsquo;s also worth remembering that large enterprise deals cluster in a vendor&rsquo;s fourth quarter, when the discounts are richest, so some of that ten million borrowed from the quarter ahead.
        </p>
        <p>
          Go find out what license tier your top ten accounts sit on and when their Microsoft agreement comes up. If E7 is on the table, write down the specific work your product does that a general-purpose assistant bundled into the suite cannot, attach a number to it, and get it in front of the person negotiating that renewal before the terms are set. &ldquo;Better than Copilot&rdquo; is a product argument. &ldquo;Already paid for&rdquo; is a procurement argument, and procurement wins that one by default.
        </p>
      </div>
    ),
    sources: [
      { title: "Microsoft — FY26 Q4 earnings press release and webcast (July 29, 2026)", url: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast" },
      { title: "Microsoft Source — Cloud and AI strength fuels fourth quarter results (July 29, 2026)", url: "https://news.microsoft.com/source/2026/07/29/microsoft-cloud-and-ai-strength-fuels-fourth-quarter-results-4/" },
      { title: "UC Today — Microsoft 365 Copilot passes 30 million paid seats (July 30, 2026)", url: "https://www.uctoday.com/unified-communications/microsoft-365-copilot-passes-30-million-paid-seats-as-cloud-and-ai-growth-power-record-quarter/" },
      { title: "Office 365 for IT Pros — Azure tops $100 billion as Microsoft reports FY26 Q4 results (July 30, 2026)", url: "https://office365itpros.com/2026/07/30/fy26-q4-microsoft-results/" },
      { title: "Fortune — Azure crosses $100 billion in annual revenue (July 29, 2026)", url: "https://fortune.com/2026/07/29/microsoft-azure-100-billion-annual-revenue-earnings-revenue-cloud-ai/" },
      { title: "CNBC — Microsoft (MSFT) Q4 earnings report 2026", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html" },
    ],
};
