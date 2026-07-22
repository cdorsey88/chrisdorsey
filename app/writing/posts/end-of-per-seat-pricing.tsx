import type { Post } from "./types";

export const post: Post = {
    slug: "end-of-per-seat-pricing",
    title: "Per-seat software is dying. Your renewal is where you'll feel it first.",
    date: "Jun 9, 2026",
    readTime: "7 min",
    tag: "Sales",
    color: "from-violet-600 to-blue-600",
    tldr: "About $285B in software market cap evaporated in February (the 'SaaSpocalypse') as investors repriced SaaS for a world where AI agents don't buy seats. Gartner sees 40% of enterprise spend moving to usage or outcome pricing by 2030. The renewal conversation shifts from 'how many users' to 'what did this produce.' Start instrumenting the one outcome your buyer's CFO cares about now, not in Q4.",
    content: (
      <div className="prose-content">
        <p>
          In February, roughly $285 billion in software market value evaporated in a few weeks. Analysts are calling it the{" "}
          <a href="https://www.ainvest.com/news/ai-agents-force-rerating-saas-giants-outcome-based-pricing-models-hold-2604/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">SaaSpocalypse</a>. Strip away the nickname and the cause is unglamorous. Investors finally did the math on AI agents, and an agent doesn&apos;t log in, so it doesn&apos;t pay for a seat.
        </p>
        <p>
          <a href="https://www.softwareseni.com/saas-pricing-is-shifting-from-per-seat-to-usage-and-outcome-what-changes-at-your-next-renewal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Gartner now expects at least 40%</a>{" "}of enterprise software spend to move to usage, agent, or outcome pricing by 2030, with seat-based revenue share sliding from 21% to 15%. Intercom already{" "}
          <a href="https://www.mindstudio.ai/blog/saas-pricing-ai-agent-era" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">charges 99 cents per resolved ticket</a>. Zendesk prices automated resolutions at a buck-fifty to two dollars each. The model that built every SaaS empire of the last fifteen years, a price per human with a password, is being quietly retired.
        </p>
        <p>
          I&apos;ve watched a pricing model die before. At Fastly we sold infrastructure priced on bandwidth, and the per-gigabyte rate fell a little every year because the underlying thing kept commoditizing. You learn fast that when the meter you bill on is sliding toward zero, you don&apos;t win by defending the meter. You win on the stuff the customer can&apos;t get anywhere else, and you&apos;d better know what that is before the renewal.
        </p>

        <h2>What the seat was quietly hiding</h2>
        <p>
          Per-seat pricing was a beautiful accident. It let you bill for value you couldn&apos;t measure. A company bought 500 licenses, used maybe 300, and nobody audited the gap because the number felt fair. The seat was a proxy. It stood in for &ldquo;this software helps our people do their jobs,&rdquo; and as long as headcount grew, your revenue grew with it whether or not anyone opened the app.
        </p>
        <p>
          Agents break the proxy. When one agent closes a thousand tickets without a login, the &ldquo;how many users&rdquo; question stops describing reality, and your buyer&apos;s CFO can see it too. Two things can be true here. The software is creating more value than ever, and the seat count that used to capture that value is now meaningless.
        </p>

        <h2>The renewal is where it lands</h2>
        <p>
          If you sell software, the change shows up first at renewal, and it shows up as a harder question. The old renewal was a headcount reconciliation. Did you add users, did you churn any, here&apos;s the new number. The new renewal is an outcome audit. Your buyer arrives with usage data you both can see and asks what they actually got for the spend. If your answer is a feature list, you&apos;re in trouble. If your answer is a number tied to their P&amp;L, you keep the account and probably grow it.
        </p>
        <p>
          This is good news for one kind of seller and brutal for another. The rep who knows the customer&apos;s business, who can point to the dispute-resolution time that dropped or the pipeline that moved, walks into that audit holding the cards. The rep who sold a login and went quiet until renewal walks in empty-handed.
        </p>

        <h2>What to do before your next renewal</h2>
        <p>
          Start instrumenting outcomes now, not in Q4 when the contract is up. Pick the one metric your product moves that your buyer&apos;s finance team already cares about, and measure it from day one. Sit with your customer success counterpart and build the outcome story together, because in an outcome-priced world CS stops being a cost center and becomes where the revenue gets defended. And get honest about which of your accounts were only ever paying for seats they didn&apos;t use. A usage-based competitor will undercut those first.
        </p>

        <h2>The read</h2>
        <p>
          Two things can be true about the SaaSpocalypse. The selloff was probably an overreaction, and the repricing underneath it is real. What it rewards is a specific kind of seller: the one who can say, account by account, what the product produced this year, with a number a CFO would accept. Pull up your top five accounts and write down what each one got from you in the last twelve months. If the list is thin, that&apos;s the work between now and your next renewal.
        </p>
      </div>
    ),
    sources: [
      { title: "AInvest — AI Agents Force Re-Rating of SaaS Giants as Outcome-Based Pricing Takes Hold", url: "https://www.ainvest.com/news/ai-agents-force-rerating-saas-giants-outcome-based-pricing-models-hold-2604/" },
      { title: "MindStudio — SaaS Pricing Is Breaking: Why Per-Seat Models Don't Survive the AI Agent Era", url: "https://www.mindstudio.ai/blog/saas-pricing-ai-agent-era" },
      { title: "SoftwareSeni — SaaS Pricing Is Shifting From Per-Seat to Usage and Outcome (Gartner forecast)", url: "https://www.softwareseni.com/saas-pricing-is-shifting-from-per-seat-to-usage-and-outcome-what-changes-at-your-next-renewal/" },
    ],
};
