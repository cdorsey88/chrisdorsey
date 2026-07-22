import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "ibm-warning-ai-capex-software-budgets",
    title: "IBM's lost deals went to the data center budget",
    date: "Jul 16, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-blue-800 to-slate-500",
    tldr: "IBM warned on July 14 that second-quarter revenue will land near $17.2 billion against the $17.86 billion analysts expected, with adjusted EPS around $2.93 versus estimates near $3.02. CEO Arvind Krishna said customers redirected capital toward servers, storage and memory late in the quarter, that numerous large deals failed to close, and that IBM didn't anticipate the magnitude of the reprioritization. The stock lost roughly a quarter of its value, its worst day since 1987, and the selloff spread to Microsoft, Salesforce, ServiceNow and Intuit. February's SaaSpocalypse was investors repricing software for a world of AI agents; Tuesday was customers doing the same thing with actual budget dollars, moving money from software opex to infrastructure capex mid-quarter. The competitor that killed those IBM deals was the customer's own AI infrastructure program, a loss reason no CRM picklist tracks. Requalify every deal on where the money physically sits: which line item, opex or capex, whether the AI program has touched it since scoping, and who defends it when the GPU cluster runs over. Expect renewals to get shaved for the same reason, and expect 'no decision' to lead your loss report this year.",
    content: (
      <div className="prose-content">
        <p>
          IBM told investors on July 14 that its second quarter had gone sideways: revenue up about 1% to $17.2 billion, against the $17.86 billion Wall Street expected, and adjusted earnings around $2.93 a share against estimates near $3.02. A miss of that size is survivable. The explanation was the problem. CEO Arvind Krishna said customers moved capital into servers, storage and memory late in the quarter, and that numerous large deals IBM expected to close didn&rsquo;t.
        </p>
        <p>
          The market treated the explanation as the real news. IBM lost roughly a quarter of its value in a day, its worst session since 1987, and the selling jumped the fence: Microsoft, Salesforce, ServiceNow and Intuit all fell with it. If the budget shift Krishna described is real, it was never just an IBM problem.
        </p>
        <h2>Customers are doing what investors did in February</h2>
        <p>
          In February, investors wiped about $285 billion off software market caps in a week once they did the math on AI agents that don&rsquo;t buy seats. I wrote about it then:{" "}
          <Link href="/writing/end-of-per-seat-pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the SaaSpocalypse was a repricing of software&rsquo;s future</Link> by the people who trade it. What IBM described on Tuesday is the same repricing done by the people who buy it. Enterprises don&rsquo;t have unlimited capital. Memory and server prices are climbing on AI demand, and a company standing up an AI cluster this year has to take the money from somewhere. The somewhere, it turns out, includes the software line.
        </p>
        <p>
          There&rsquo;s a third side to this squeeze. In June I wrote that{" "}
          <Link href="/writing/openai-oracle-credits-cloud-commit" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">AI purchases increasingly draw down pre-committed cloud spend</Link>{" "}
          instead of arriving as new line items. Put the pieces together and a software seller in 2026 is squeezed from three directions at once: the buyer&rsquo;s discretionary money is migrating to capex, the AI money that does exist lives inside commits you may not be able to transact against, and the seat-based model underneath it all is being repriced by the market. IBM sells AI, runs an AI consulting arm, and positioned its whole story around this transition. It still got caught. Having AI in the pitch deck protects nobody from the budget math.
        </p>
        <h2>&ldquo;No decision&rdquo; is about to lead your loss report</h2>
        <p>
          A capex raid, seen from inside a deal, goes like this. The champion still loves you and the business case is still approved. Procurement answers your emails the same day. And the money is gone, reallocated in a planning meeting you weren&rsquo;t invited to, to an infrastructure program nobody in your deal even works on. I sat through versions of this at Oracle and Fastly, and the disorienting part is that nothing in the deal looks broken. Your CRM has a loss-reason picklist with your top three competitors on it and nothing that says &ldquo;lost to the customer&rsquo;s own data center.&rdquo;
        </p>
        <p>
          Krishna&rsquo;s most useful sentence was the admission: IBM expected some impact and didn&rsquo;t anticipate the magnitude. If the vendor with a hundred-year enterprise franchise and its own consultants inside these accounts misread how fast the budget was moving, the average seller&rsquo;s forecast is misreading it too. The deals most exposed are the ones that look safest: approved, committed, waiting on a signature that keeps sliding one more week.
        </p>
        <h2>Requalify on where the money physically sits</h2>
        <p>
          Budget qualification used to be one box: is there budget, yes or no. This quarter it needs three questions. Which line item funds this deal, opex or capex? Has that line been touched by the AI infrastructure program since we scoped this? And who defends it in the room when the GPU cluster runs over, because every infrastructure program runs over. If your champion can&rsquo;t answer the third one, you don&rsquo;t have a deal yet. You have a place in line behind a server rack.
        </p>
        <p>
          Renewals deserve the same treatment. The path of least resistance for a CFO funding new infrastructure is shaving ten percent off every software renewal that crosses the desk, and this week handed every CFO in America the cover story. Walk into the renewal with consolidation math and an outcome number before they walk in with the haircut.
        </p>
        <p>
          IBM found out how fast the budget was moving on a Tuesday morning, in public, down 25 percent. A discovery question costs less.
        </p>
      </div>
    ),
    sources: [
      { title: "Reuters — IBM warns AI boom squeezing software budgets; shares sink in sector rout (July 14, 2026)", url: "https://finance.yahoo.com/markets/stocks/articles/ibm-expects-second-quarter-revenue-111029599.html" },
      { title: "Business Insider — IBM's warning shows AI's biggest winners are draining tech budgets (July 2026)", url: "https://www.businessinsider.com/ibm-ai-biggest-winners-draining-tech-budgets-memory-prices-2026-7" },
    ],
};
