import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "salesforce-m3ter-consumption-billing",
    title: "Salesforce bought the meter that will price your next renewal",
    date: "Jul 14, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-violet-700 to-fuchsia-500",
    tldr: "Salesforce closed its acquisition of m3ter on July 1: a London-based metering and rating platform that will give Agentforce Revenue Management native usage- and outcome-based billing, terms undisclosed. Salesforce's own framing is that AI is moving software from subscriptions to consumption, and it wants the meter inside its walls. The coverage treated this as billing infrastructure. The unwritten part is what consumption pricing does to the people in the deal. Inside the vendor, the comp plan breaks first: a consumption contract signs small and pays out on adoption, so the rep's job no longer ends at signature. Onboarding, workload growth and expansion become the quota. I lived that model at Fastly, where the bill was traffic and the contract was a starting guess. Across the table, the vendor now watches your usage telemetry in near real time, wired into the same system that runs its renewal playbook, which means it may know your ramp flattened before your finance team does. If you sell: ask how comp treats the ramp before you take the job. If you buy: meter your own usage independently and walk into every renewal with your own numbers, because the other side is walking in with theirs.",
    content: (
      <div className="prose-content">
        <p>
          Salesforce closed its acquisition of m3ter on July 1. If you&rsquo;ve never heard of m3ter, that&rsquo;s roughly the point: it&rsquo;s a London company that does one unglamorous job at enterprise scale: ingest product usage data, rate it, and turn it into a bill. Terms weren&rsquo;t disclosed. The technology goes into Agentforce Revenue Management, where Salesforce customers will be able to launch, track and bill usage-based and outcome-based pricing without leaving the platform.
        </p>
        <p>
          Salesforce&rsquo;s executive framing was unusually direct: AI is moving software &ldquo;from traditional subscriptions to consumption-based models,&rdquo; and Salesforce wants that billing to run inside its walls. In June I wrote that{" "}
          <Link href="/writing/end-of-per-seat-pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">per-seat pricing was dying and your renewal is where you&rsquo;d feel it</Link>. A month later, the largest subscription-software company on the planet bought itself a usage meter. That argument is settled. What&rsquo;s still wide open is what the meter does to the people in the deal, on both sides of it.
        </p>
        <h2>Salesforce keeps buying parts for the agent economy&rsquo;s cash register</h2>
        <p>
          Look at the acquisition run as one project. Informatica for data, closed at $8 billion. Contentful for content. Qualified, Momentum and Cimulate for pipeline, conversation capture and simulation. Now m3ter for metering. Every one of those fills in something an agent workforce needs and a seat-based platform never did. An AI agent doesn&rsquo;t occupy a seat; it burns compute, completes tasks and produces outcomes in volumes that swing week to week. You can&rsquo;t bill that on a headcount grid. You bill it on a meter, and as of July 1 Salesforce owns one.
        </p>
        <h2>The comp plan breaks before the pricing page does</h2>
        <p>
          Here is what the trade coverage skipped. When pricing moves to consumption, the first thing that stops working inside the vendor is the comp plan. A seat deal pays the rep at signature: the number is known, the quota retires, everyone goes to dinner. A consumption deal signs small and becomes real later, based on adoption the rep may or may not stick around to drive. Pay on the commit and you&rsquo;ve invited sandbagging&rsquo;s evil twin, the inflated ramp nobody hits. Pay on actuals and your best closer is suddenly holding a twelve-month bet on a customer&rsquo;s engineering roadmap.
        </p>
        <p>
          I sold at Fastly, where the bill was traffic. The contract was a starting guess, and the real number showed up months later in the customer&rsquo;s usage curve. What that teaches you fast: the sale doesn&rsquo;t end at the signature, because most of the money hasn&rsquo;t happened yet. The job becomes onboarding, workload growth, expansion &mdash;{" "}
          <Link href="/writing/expansion-is-the-whole-business-ai-gtm" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the account work I&rsquo;ve argued is the whole business now</Link>, except with the comp plan finally wired to agree. Snowflake and the cloud providers have run this play for years. The rest of enterprise software is about to discover what their sellers already know: consumption comp turns every AE into an account manager, whether the org chart admits it or not.
        </p>
        <h2>The meter tells the vendor more than it tells you</h2>
        <p>
          Now sit on the buyer&rsquo;s side of the table. m3ter ingests usage telemetry in near real time, and it now lives inside the same platform that runs the vendor&rsquo;s pipeline, account plans and renewal alerts. The account team selling to you can watch your consumption curve the way a trader watches a position. If your ramp flattened in March, they knew in March, possibly before your own finance team did, because your finance team sees the invoice and they see the telemetry behind it.
        </p>
        <p>
          Outcome-based pricing sharpens this further. If the vendor bills on results, the vendor instruments the results, and whoever runs the instruments frames the conversation. None of this is sinister; it&rsquo;s just leverage, and leverage flows to the side with better data. For two decades that was occasionally the buyer, armed with a spreadsheet of shelfware seats. Consumption billing hands the information advantage back to the vendor, permanently, unless you do something about it.
        </p>
        <h2>Bring your own numbers</h2>
        <p>
          If you carry a bag at a company moving to consumption pricing, get two answers before you sign the offer letter: does comp pay on committed spend or on actuals, and who owns adoption after the ink dries. The gap between those answers is where a year of your earnings lives. If the answer to the second one is &ldquo;customer success, mostly,&rdquo; ask how the last three reps who believed that did against quota.
        </p>
        <p>
          If you buy software, start metering yourself. Pull your own usage data, keep your own curve, and model the unit rates at two and five times your current volume before the QBR, because the volume discounts you didn&rsquo;t negotiate at signature are the ones you&rsquo;ll never get. Your vendor paid real money to know your consumption better than you do. The least you can do is show up to the renewal knowing it as well as they do.
        </p>
      </div>
    ),
    sources: [
      { title: "Salesforce — Salesforce Signs Definitive Agreement to Acquire m3ter (completed July 1, 2026)", url: "https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-m3ter/" },
      { title: "CIO — Salesforce to acquire usage-based billing specialist m3ter", url: "https://www.cio.com/article/4183667/salesforce-to-acquire-usage-based-billing-specialist-m3ter.html" },
      { title: "Futurum Group — Salesforce Bets on Usage-Based Billing", url: "https://futurumgroup.com/insights/salesforce-bets-on-usage-based-billing-will-m3ter-acquisition-redefine-enterprise-monetization/" },
    ],
};
