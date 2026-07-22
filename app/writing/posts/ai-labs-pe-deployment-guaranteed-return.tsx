import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "ai-labs-pe-deployment-guaranteed-return",
    title: "The AI labs are paying private equity a guaranteed 17.5% to sell for them",
    date: "Jul 12, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-indigo-700 to-blue-600",
    tldr: "Five of the biggest names in AI now run the same play: not selling a model, selling the people who install it. AWS put $1 billion into a forward-deployed engineering org on June 30; Microsoft stood up a $2.5 billion, 6,000-person Frontier unit two days later. The part that got missed is from May 4, when OpenAI and Anthropic built their deployment arms as private-equity joint ventures — OpenAI's $10B Deployment Company (TPG, Brookfield, Advent, Bain) and Anthropic's $1.5B venture with Blackstone, Hellman & Friedman and Goldman. OpenAI guaranteed its PE backers a 17.5% annual return over five years, which reads like a fixed-income product, not a services partnership. You don't guarantee a return on consulting revenue. The floor buys distribution: PE owners can order thousands of portfolio companies to adopt from the top, and the embedded team makes the model hard to rip out. If you sell AI into the enterprise, your next competitive deal may arrive as a board mandate with engineers already on-site — get to the same altitude and own a specific outcome. If you buy, take the help but put portability and ownership in writing.",
    content: (
      <div className="prose-content">
        <p>
          In one stretch of days, AWS put $1 billion into an organization that installs AI inside other companies, and Microsoft stood up a $2.5 billion one staffed with 6,000 engineers. AWS announced its Forward Deployed Engineering org on June 30. Microsoft&rsquo;s Frontier Company landed two days later. I already wrote the seller&rsquo;s read on the Microsoft move, that{" "}
          <Link href="/writing/microsoft-frontier-company-deployment-is-the-product" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the deployment work, not the model, is where the durable money sits</Link>. That still holds. But watching all five big AI names pile into the same idea in a single quarter, the document worth rereading is the one from May that nobody connected to this.
        </p>
        <p>
          On May 4, OpenAI and Anthropic each built their deployment arm as a private-equity joint venture. OpenAI&rsquo;s is called The Deployment Company, valued at $10 billion, funded with more than $4 billion from 19 investors including TPG, Brookfield, Advent and Bain. Anthropic paired with Blackstone, Hellman &amp; Friedman and Goldman Sachs for a $1.5 billion version. And OpenAI guaranteed its private-equity backers a 17.5% annual return over five years.
        </p>
        <h2>You don&rsquo;t guarantee a return on a services business</h2>
        <p>
          Read that term again, because it carries the whole story. A 17.5% floor over five years is what a fixed-income product looks like, not an operating partnership, and several PE analysts told Bloomberg exactly that. Consultancies don&rsquo;t promise their investors a number. Services revenue is lumpy, headcount-bound and margin-thin; you can&rsquo;t underwrite a guaranteed return on it. So OpenAI wasn&rsquo;t buying a consulting arm when it signed that term. It was paying, up front and expensively, for something a consulting arm can&rsquo;t deliver.
        </p>
        <h2>The asset is the org chart above the engineers</h2>
        <p>
          Here&rsquo;s what the money bought. TPG, Blackstone, Bain and the rest own thousands of portfolio companies between them, and a PE owner can do the one thing every enterprise software seller dreams about: tell the CEO to adopt, from the board seat, and mean it. The engineers are the visible part. The distribution is the part you pay a 17.5% guarantee to lock up, a standing channel into hundreds of companies where the adoption decision comes down from the top instead of clawing its way up from a pilot.
        </p>
        <p>
          I&rsquo;ve sold on both sides of that line. At Oracle and Fastly, the deals that died slow were the ones where a champion three levels down loved us and nobody above them had signed up for the outcome. The deals that moved had air cover from the top. The hardest thing to manufacture in enterprise sales is a mandate. OpenAI and Anthropic just rented thousands of them.
        </p>
        <h2>Two things can be true</h2>
        <p>
          The deployment work is real and valuable. That isn&rsquo;t in question, and it&rsquo;s the same reason{" "}
          <Link href="/writing/ai-ipo-race-model-was-never-the-moat" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the value in AI keeps sliding from the model to the layer that makes it work</Link>. Most companies can&rsquo;t get AI into production on their own, and someone will get paid well to help. But the reason these five moved in a quarter, and the reason two of them wrapped it in PE money, is that the deployment shop is also the delivery vehicle for the thing that decides an AI company&rsquo;s revenue: whether the customer keeps using it. The services get them in the door; the deeper the team embeds, the harder the model underneath is to replace.
        </p>
        <h2>What it means when your competitor arrives with a board mandate</h2>
        <p>
          If you sell AI into the enterprise, price this in now. Your next competitive deal may not come from another vendor&rsquo;s AE. It may arrive as a directive from a portfolio company&rsquo;s owner, with engineers already on-site and a model already chosen. You can&rsquo;t out-demo a mandate. What you can do is get to the same altitude: sell the economic buyer on a specific outcome the generalist pod won&rsquo;t go deep enough to own, and make yourself the person accountable for that number. If you&rsquo;re on the buying side and the mandate is landing on you, take the help, but put portability and ownership in writing, whose model, whose data, whose runbook the day the embedded team rotates off. A guaranteed 17.5% has to come from somewhere, and it isn&rsquo;t coming out of the vendor&rsquo;s margin.
        </p>
      </div>
    ),
    sources: [
      { title: "CNBC — AWS puts $1 billion into new AI unit to embed engineers with customers", url: "https://www.cnbc.com/2026/06/30/aws-amazon-ai-forward-deployed-engineers.html" },
      { title: "TechCrunch — Anthropic and OpenAI are both launching joint ventures for enterprise AI services", url: "https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/" },
      { title: "Reuters via Yahoo Finance — OpenAI Guarantees 17.5% Minimum Returns to Private Market Investors", url: "https://finance.yahoo.com/markets/stocks/articles/openai-guarantees-17-5-minimum-165757294.html" },
    ],
};
