import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "microsoft-frontier-company-deployment-is-the-product",
    title: "Microsoft spent $2.5 billion to put its own engineers inside your customer's building.",
    date: "Jul 8, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-blue-700 to-cyan-600",
    tldr: "On July 2 Microsoft launched Frontier Company, a unit with a $2.5 billion budget and 6,000 engineers and industry specialists whose job is to embed inside a customer and carry its AI from slide deck to production. Microsoft calls the practice forward-deployed engineering, the model Palantir made famous. Most coverage framed it as a rescue squad for the roughly 95% of enterprise gen-AI pilots that MIT's NANDA study found deliver no measurable profit-and-loss impact. The seller's read is different: the largest software vendor on earth just put a price on the work of making AI run inside a business, decided that work is where the durable revenue is, and started competing with the very consultancies — Accenture, PwC, EY, KPMG, Capgemini — it lists as partners. If you sell AI software or services, your deal now sits next to Microsoft's own embedded engineers, so own the specific workflow and outcome its generalists won't go deep on. If you buy, you can rent that muscle, but make portability a written requirement and make sure you own the runbook the day the team rotates off.",
    content: (
      <div className="prose-content">
        <p>
          On July 2 Microsoft launched{" "}
          <a href="https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Frontier Company</a>, a new unit with a $2.5 billion budget and 6,000 engineers and industry specialists whose job is to move into a customer&apos;s business and carry its AI from slide deck to production. Microsoft calls the practice forward-deployed engineering: you don&apos;t sell the software and leave, you station your own people inside the client until the thing works. Palantir built a company on it. Now the largest software vendor on earth is running the same play at the scale of 6,000 headcount, with a named executive, Rodrigo Kede Lima, brought over to run it as its own company. The reason it&apos;s worth your attention has little to do with Microsoft&apos;s stock.
        </p>
        <p>
          I&apos;ve sold the platform side of this. At Oracle and Fastly the contract closed on the technology, and then the real work, and the real money, showed up in the months after, in the people who made it run against a live business. The vendors who treated deployment as someone else&apos;s problem watched the account&apos;s budget flow to whoever did the integration. Microsoft has clearly done that math and decided to keep the second check for itself.
        </p>
        <h2>What the 95% number bought</h2>
        <p>
          The statistic driving this is MIT&apos;s NANDA finding that about{" "}
          <a href="https://www.techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">95% of enterprise generative-AI pilots</a> show no measurable impact on profit or loss. Most coverage read Frontier Company as Microsoft&apos;s answer to that failure rate, a squad for stalled projects. True, and it undersells what happened. Microsoft put a price on the gap between a working demo and a working business process, staffed it with 6,000 people, and stood it up as a standalone company. When the biggest platform on the market decides the durable revenue sits in deployment rather than in the model, that is a data point about where the whole industry&apos;s margin is heading. I&apos;ve made the argument here before that{" "}
          <Link href="/writing/ai-ipo-race-model-was-never-the-moat" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the model was never the moat</Link>. This is the most expensive vote yet for that thesis, and it came from the company with the most to lose if it were wrong.
        </p>
        <h2>Look at who Microsoft is now competing with</h2>
        <p>
          Read the partner list. Frontier Company will work alongside Accenture, PwC, EY, KPMG, and Capgemini, the systems integrators whose core business is precisely this: embedding consultants to stand up enterprise software. Microsoft is their supplier and, as of July 2, their competitor for the same deployment dollars. Those firms built practices worth billions implementing Microsoft&apos;s stack. Now Microsoft is selling the implementation directly, using its ownership of the model, the cloud, and the licensing to get in the door first. Two things can be true: the SIs still get plenty of overflow work, and their most profitable AI engagements just picked up a new bidder who controls the underlying product.
        </p>
        <h2>If you sell AI</h2>
        <p>
          Your deal has a new neighbor. If you sell AI software or services into a mid-to-large enterprise that runs on Azure or Microsoft 365, there&apos;s now a real chance Microsoft&apos;s own engineers are already inside that account, chartered to make AI work across the business, which is the same sentence you use in your pitch. You are not going to out-scale 6,000 forward-deployed people. What you can do is own a slice of the workflow Microsoft&apos;s generalists won&apos;t go deep on: the specific motion, the specific data, the outcome your buyer&apos;s CFO actually counts. Sell the result you can prove, not the generic capability Microsoft is now willing to staff as a loss leader to protect its cloud consumption.
        </p>
        <h2>If you buy AI</h2>
        <p>
          You can rent this muscle, and for a stalled project it may be the fastest route to a result. Go in clear-eyed on two things. First, an embedded team that reports to your model and cloud provider has every incentive to build the solution that deepens your Azure commit, so make portability a written requirement rather than a hope. Second, when Microsoft&apos;s engineers rotate off, the workflow they built has to belong to you and your people, documented and owned, or you&apos;ve traded a pilot problem for a dependency problem. Ask who holds the runbook the day the Frontier team leaves.
        </p>
        <p>
          For two years the pitch across this industry was that the model was the hard part and everything downstream would sort itself out. Microsoft just spent $2.5 billion betting the opposite, and staffed that bet with more people than most AI startups will ever hire. If you sell anything in this market, price your own value against that. The model is becoming a commodity someone will deploy for you, and the money is moving to whoever can make it change how a business actually runs. Microsoft intends for that someone to be Microsoft.
        </p>
      </div>
    ),
    sources: [
      { title: "Microsoft — Microsoft Frontier Company: AI engineering that amplifies and protects your intelligence (Jul 2, 2026)", url: "https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/" },
      { title: "CNBC — Microsoft commits $2.5 billion, 6,000 employees to AI implementation unit", url: "https://www.cnbc.com/2026/07/02/microsoft-commits-2point5-billion-6000-employees-ai-implementation-unit.html" },
      { title: "TechCrunch — Microsoft launches its own AI deployment company with $2.5 billion commitment", url: "https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/" },
      { title: "GeekWire — Microsoft unveils $2.5B 'Frontier Company' to embed AI engineers inside customers", url: "https://www.geekwire.com/2026/microsoft-announces-2-5b-frontier-company-to-embed-ai-engineers-inside-customers/" },
    ],
};
