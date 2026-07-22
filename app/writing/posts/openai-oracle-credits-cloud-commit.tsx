import type { Post } from "./types";

export const post: Post = {
    slug: "openai-oracle-credits-cloud-commit",
    title: "OpenAI now takes Oracle credits. Your AI deal is competing with money that's already spent.",
    date: "Jun 12, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-red-600 to-orange-500",
    tldr: "OpenAI announced June 10 that its models and Codex can be bought with Oracle Universal Credits, the same day Oracle reported $638B in remaining performance obligations. Enterprise cloud commitments crossed $500B last year, and AI is increasingly bought by drawing down that pre-committed spend rather than through net-new deals. If your AI product can't be transacted inside your buyer's cloud commit, you're the expensive option at any price. Add one discovery question now: where does the money for this live, and which commit does it sit inside?",
    content: (
      <div className="prose-content">
        <p>
          Two announcements came out of Oracle&apos;s world on Tuesday. The one that got covered: a
          record fourth quarter,{" "}
          <a href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$19.2 billion in revenue and remaining performance obligations of $638 billion, up 363% in a year</a>. The one that barely got covered ran{" "}
          <a href="https://openai.com/index/openai-on-oracle-cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">four paragraphs on OpenAI&apos;s blog</a>: Oracle customers will soon be able to pay for
          OpenAI&apos;s frontier models and Codex with their Oracle Universal Credits.
        </p>
        <p>
          Read the last line of that post. &ldquo;Contact your Oracle sales representative for
          details, timing, and availability.&rdquo; The most coveted product in software ends its own
          announcement by sending buyers to another company&apos;s rep. If you sell for a living, read it twice.
        </p>

        <h2>Money inside the commit is already spent</h2>
        <p>
          I sold at Oracle, and later at Fastly, where revenue lived and died by committed-use
          contracts. A commit changes the physics of every purchase near it. Money inside the commit
          is already spent in the CFO&apos;s head. Money outside the commit is a new ask, with a
          fresh approval chain, a fresh security review, and a fresh chance for procurement to say
          no. At Fastly, an expansion that drew down an existing commitment could close in weeks
          while a similar-sized net-new deal took quarters. Same product both times. The difference
          was which bucket the money came from.
        </p>
        <p>
          That&apos;s the lens for the OpenAI note. Enterprises have pre-paid for cloud on a scale
          that&apos;s hard to hold in your head:{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">commitments to the big clouds crossed $500 billion last year</a>. The marketplaces that let companies burn those commitments on
          third-party software{" "}
          <a href="https://itchanneloxygen.com/our-prediction-is-holding-tackle-io-ceo-doubles-down-on-100bn-cloud-marketplace-bet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">were a $16 billion channel in 2023, and Canalys expects $85 billion by 2028</a>. Tackle, which processes these transactions for software
          vendors, has stood by its prediction that $100 billion flows through this year.{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Among AWS&apos;s top 1,000 customers, 99% already have at least one active marketplace subscription</a>. Snowflake has moved $7 billion through AWS Marketplace
          alone. Salesforce passed $5 billion.
        </p>
        <p>
          AI made this the main event, because AI budgets are the least settled line item in the
          building. When nobody is sure which budget a new AI tool should come from, the path of
          least resistance is the budget that already exists. OpenAI{" "}
          <a href="https://techcrunch.com/2025/09/12/why-the-oracle-openai-deal-caught-wall-street-by-surprise/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">signed a $300 billion compute contract with Oracle last September</a>; this week&apos;s announcement closes the circuit. OpenAI buys
          Oracle&apos;s capacity, Oracle&apos;s customers buy OpenAI&apos;s models, and
          everyone&apos;s quota retires in the same currency.
        </p>

        <h2>Oracle&apos;s earnings whisper the same thing</h2>
        <p>
          One stat from Tuesday didn&apos;t make anyone&apos;s headline. Oracle grew revenue 21%
          last quarter while{" "}
          <a href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">sales and marketing expense fell 10%</a>. Read those two together. When $638 billion of future revenue is
          already under contract, you need fewer people creating demand and more people managing
          drawdown. Growth up, selling cost down is what a commit-based go-to-market looks like at
          scale, and every software board that saw Tuesday&apos;s print will want to know why their
          own company can&apos;t have that ratio.
        </p>

        <h2>Two things can be true</h2>
        <p>
          For buyers, this is mostly good. One bill, pre-cleared procurement, governance the risk
          committee already blessed.{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Forrester pegs the procurement time savings at 60%</a>. And the convenience carries a cost that won&apos;t show up for a
          few quarters. A commit was never free money. Your company promised a cloud provider a set
          amount of spend, in exchange for better pricing, based on a forecast somebody made years
          ago. Once that promise is signed, the pressure runs one direction: use it all. So when two
          tools are on the table and only one can be paid for out of the commitment, the lesser tool
          can win without anyone arguing for it. Nobody says &ldquo;let&apos;s buy the worse
          one&rdquo; in a meeting. They say &ldquo;this one counts against the cloud spend we
          already owe,&rdquo; and the meeting moves on. Each purchase routed this way also makes an
          eventual exit harder, because by the time the contract comes up for renewal, the provider
          can read your dependence right off its own invoices.
        </p>

        <h2>The read</h2>
        <p>
          If you carry a number, three changes are worth making before the quarter ends.
        </p>
        <p>
          Add one discovery question: where does the money for this live? Net-new budget, or inside
          a cloud commit, and which one? The answer tells you who your real competitor is, and a lot
          of the time the competitor is the drawdown itself, a vaguely comparable tool that happens
          to take your buyer&apos;s credits.
        </p>
        <p>
          Get transactable. If your product can&apos;t be bought with money your buyer already
          committed, you&apos;re the expensive option at any price. Private offers on the
          marketplaces your accounts use are table stakes now, and &ldquo;the AWS listing is on the
          roadmap&rdquo; is becoming the new &ldquo;SOC 2 in progress.&rdquo;
        </p>
        <p>
          Make friends with the cloud rep. Somewhere at Amazon, Microsoft, Google, or Oracle, a
          salesperson owns your buyer&apos;s cloud contract, and your deal counts toward that
          person&apos;s number when it runs through their marketplace. That person is inside the
          account every week and knows where the unspent money is. They also get paid when you win.
          Bring them in early and you&apos;ve added a seller to your team for free. Leave them out
          and they&apos;ll point that budget at a competitor who brought them in.
        </p>
        <p>
          The longer I sit with this announcement, the funnier the ending gets. The company whose
          product can write a rep&apos;s emails, and probably their forecast, decided that the
          fastest road into the enterprise is a human rep with a quota and an expense account.
          Software keeps eating the world, and the field seller keeps cashing the check. Ask where
          the money lives. The rest of the deal follows from the answer.
        </p>
      </div>
    ),
    sources: [
      { title: "OpenAI — Access OpenAI Models and Codex Through Your Oracle Cloud Commitment (June 10, 2026)", url: "https://openai.com/index/openai-on-oracle-cloud/" },
      { title: "Oracle — Q4 and FY 2026 Earnings Press Release (SEC Form 8-K, Exhibit 99.1, June 10, 2026)", url: "https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" },
      { title: "Partner Insight — One Chart Shows Cloud Marketplaces Going Mainstream (June 8, 2026)", url: "https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" },
      { title: "IT Channel Oxygen — Tackle.io CEO Doubles Down on $100bn Cloud Marketplace Bet (Canalys forecast)", url: "https://itchanneloxygen.com/our-prediction-is-holding-tackle-io-ceo-doubles-down-on-100bn-cloud-marketplace-bet/" },
      { title: "TechCrunch — Why the Oracle-OpenAI Deal Caught Wall Street by Surprise (September 2025)", url: "https://techcrunch.com/2025/09/12/why-the-oracle-openai-deal-caught-wall-street-by-surprise/" },
    ],
};
