import type { Post } from "./types";

export const post: Post = {
    slug: "private-equity-software-rollups",
    title: "When private equity buys your software vendor, the roadmap goes with it.",
    date: "Jun 10, 2026",
    readTime: "7 min",
    tag: "Macro",
    color: "from-emerald-600 to-teal-600",
    tldr: "Thoma Bravo just closed Verint (~$2B) and PROS, and Vista and Silver Lake are circling profitable, sticky software trading cheap after the SaaSpocalypse. When PE buys your vendor, the roadmap you were promised gives way to margin, price increases, and portfolio cross-sell. Odds are a tool in your stack changes hands within 18 months. Buyers: lock support and roadmap commitments in writing at your next renewal. Sellers inside an acquired company: call your accounts first and re-earn the relationship before they draft their exit.",
    content: (
      <div className="prose-content">
        <p>
          Thoma Bravo spent the spring buying software. It{" "}
          <a href="https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-verint-a-leader-in-ai-driven-customer-experience-automation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">closed its acquisition of Verint</a>, an AI-driven customer-experience company, for around $2 billion and is folding it into a portfolio company it already owns. It wrapped up PROS Holdings too. Vista and Silver Lake are{" "}
          <a href="https://247wallst.com/investing/2026/06/02/as-software-ma-heats-up-these-3-acquisition-targets-are-in-the-spotlight/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">circling the same kind of target</a>: profitable, sticky enterprise software trading at a discount it hasn&apos;t seen in a decade. If one of your vendors fits that description, and a few of them do, you should plan for the email that opens with &ldquo;we&apos;ve been acquired.&rdquo;
        </p>
        <p>
          I spent years at Oracle, a company that has bought a sizable chunk of the enterprise software industry, and I sold for Fastly and Zeta through plenty of market cycles. The pattern I&apos;ve watched play out every time is the same. After the deal closes, the product stops being the point, and the margin becomes the point.
        </p>

        <h2>What a buy-and-build firm actually optimizes for</h2>
        <p>
          A private-equity roll-up runs a specific playbook, and the playbook is rational. Buy a profitable software company at a depressed multiple, cut the costs that don&apos;t touch renewal, raise prices where the contract allows, cross-sell the rest of the portfolio into the base, and sell the whole thing in five to seven years at a higher multiple. Every move in that sequence points at the financials, not your feature requests. The roadmap you were sold in the original pitch was built to win your business. The roadmap after the acquisition is built to widen EBITDA.
        </p>

        <h2>The SaaSpocalypse turned this into a wave</h2>
        <p>
          This doesn&apos;t exist in a vacuum. The same repricing that wiped hundreds of billions off software valuations this year handed buyout firms a discount aisle.{" "}
          <a href="https://www.bloomberg.com/news/articles/2026-02-11/thoma-bravo-seeks-software-bargains-in-ongoing-saaspocalypse" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Bloomberg reported Thoma Bravo hunting bargains</a>{" "}in the middle of the selloff, and the big firms are sitting on record dry powder. The odds that at least one tool in your stack changes hands in the next eighteen months are higher than they&apos;ve been in years. Treat it as a when, and get ready for it now.
        </p>

        <h2>What to do before the acquisition email lands</h2>
        <p>
          If you&apos;re the buyer, know which of your vendors are roll-up-shaped: single-product, profitable, and sticky. In your next renewal, ask what happens to support and the roadmap under a change of control, and get the answer in writing while you still have leverage. If you&apos;re the seller inside a company that just got acquired, get ahead of it. Your customers are reading the same press release and quietly drafting their exit options. The rep who calls first, names the change honestly, and re-earns the relationship keeps the account. The one who pretends nothing happened watches renewals slide while reciting synergy talking points.
        </p>

        <h2>The read</h2>
        <p>
          Consolidation isn&apos;t automatically bad for a customer. Two things can be true. A disciplined PE owner can give a neglected product the focus it always needed, and your priorities will still rank below the math. The job, on either side of the table, is to name the trade-off out loud before the other person does. Read the deal news like it&apos;s about your accounts, because before long it will be.
        </p>
      </div>
    ),
    sources: [
      { title: "24/7 Wall St. — As Software M&A Heats Up, These 3 Acquisition Targets Are in the Spotlight", url: "https://247wallst.com/investing/2026/06/02/as-software-ma-heats-up-these-3-acquisition-targets-are-in-the-spotlight/" },
      { title: "Bloomberg — Thoma Bravo Seeks Software Bargains in the Ongoing SaaSpocalypse", url: "https://www.bloomberg.com/news/articles/2026-02-11/thoma-bravo-seeks-software-bargains-in-ongoing-saaspocalypse" },
      { title: "Thoma Bravo — Completes Acquisition of Verint, a Leader in AI-Driven CX Automation", url: "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-verint-a-leader-in-ai-driven-customer-experience-automation" },
    ],
};
