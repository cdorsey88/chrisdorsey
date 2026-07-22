import type { Post } from "./types";

export const post: Post = {
    slug: "ai-ipo-race-model-was-never-the-moat",
    title: "Two AI labs are about to go public. The model was never the moat.",
    date: "Jun 1, 2026",
    readTime: "7 min",
    tag: "Macro",
    color: "from-sky-600 to-indigo-600",
    tldr: "OpenAI (September) and Anthropic (October) are both racing to IPO, which forces the frontier labs into public-market transparency for the first time. Benedict Evans' thesis lands at the same moment: models trend toward commodity infrastructure, and value accrues to the application layer that owns distribution and workflow. For sellers, the takeaway is to stop selling the model and start selling the workflow it sits inside.",
    content: (
      <div className="prose-content">
        <p>
          For three years the AI labs have asked you to take their economics on faith. That ends this quarter.
        </p>
        <p>
          OpenAI just{" "}
          <a href="https://thenextweb.com/news/openai-ipo-confidential-filing-anthropic-race" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">filed a confidential IPO prospectus</a>
          {" "}targeting a September debut, and Anthropic is racing to follow in October &mdash; fresh off a{" "}
          <a href="https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$65B round at a $965B valuation</a>
          {" "}that briefly made it the most valuable AI startup on earth. Two of the most important companies of the decade are about to file S-1s within weeks of each other. And an S-1 doesn&apos;t care about your narrative. It shows gross margin, cost of revenue, and customer concentration in black and white.
        </p>
        <p>
          That is the real story here, and it isn&apos;t the valuations. It&apos;s that the AI industry is about to be forced into a level of financial transparency it has spent its entire existence avoiding.
        </p>

        <h2>What the S-1 will actually reveal</h2>
        <p>
          Private rounds let you sell a story. Public filings make you show the unit economics. The number every enterprise buyer and every competitor will be reading for is gross margin &mdash; because inference is expensive, frontier training runs are astronomically expensive, and the price war between OpenAI, Anthropic, and Google has been pushing per-token costs down for two years straight. When two labs are competing for revenue heading into a listing, they discount. Aggressively. That&apos;s great for you as a buyer this year. It&apos;s a flashing warning sign about the long-term margin structure of the thing you&apos;re betting on.
        </p>
        <p>
          I&apos;ve watched this movie before. At Fastly, I sold infrastructure into a market where the underlying capability &mdash; moving bytes fast &mdash; was relentlessly commoditizing. The lesson was brutal and clarifying: when the core thing you sell trends toward zero margin, you don&apos;t win on the core thing. You win on everything wrapped around it.
        </p>

        <h2>Benedict Evans said it plainly</h2>
        <p>
          The same week the IPO timelines leaked, Benedict Evans sat down with Lenny Rachitsky and made{" "}
          <a href="https://www.lennysnewsletter.com/p/a-rational-conversation-on-where" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the argument</a>
          {" "}I think every GTM leader should internalize: the model makers may end up as low-margin commodity infrastructure, and the real money flows to the application layer &mdash; the companies that embed AI into specific workflows, own distribution, and solve an actual business problem.
        </p>
        <p>
          He compared this moment to 1997. Not the dot-com crash &mdash; the part before it, where the technology is obviously real, obviously transformative, and nobody yet knows which layer of the stack captures the value. His bet is that it&apos;s not the layer everyone&apos;s currently valuing at a trillion dollars. It&apos;s the layer that owns the customer relationship and the workflow the customer can&apos;t rip out.
        </p>
        <p>
          If he&apos;s right &mdash; and the commoditization pressure showing up in those S-1s suggests he is &mdash; then the moat was never the model. The moat is distribution and workflow lock-in. The model is becoming electricity: indispensable, ubiquitous, and a terrible business to be the generic supplier of.
        </p>

        <h2>What this changes for how you sell</h2>
        <p>
          If you sell anything with AI inside it, stop leading with the model. &ldquo;We&apos;re built on the latest frontier model&rdquo; is now a statement with the strategic weight of &ldquo;we run on AWS.&rdquo; True, table stakes, and completely undifferentiated. Your buyer can get the same model from a dozen vendors and increasingly from a free tier. The model is not your value. It never was.
        </p>
        <p>
          Your value is the workflow you own. The proprietary data you enrich it with. The integration into the system of record where the work actually happens. The reason a customer would have to tear out three other tools to leave you. That&apos;s the conversation that survives a commodity price war, and it&apos;s the conversation that maps directly to retention and expansion &mdash; which, not coincidentally, is the part of revenue that public-market investors reward most.
        </p>
        <p>
          There&apos;s a defensive read here too. If you&apos;re an enterprise buyer locked into a frontier-lab contract you signed eighteen months ago, the IPO is your leverage. Margin pressure and a price war mean your renewal should cost less, not more. Walk into that conversation knowing the vendor needs your logo on the revenue line more than you need their specific model.
        </p>

        <h2>The takeaway</h2>
        <p>
          Watch the gross-margin line when those S-1s go public. It will tell you more about the next five years of this industry than any keynote. And whatever it says, plan as if Evans is right: the model is becoming a commodity, and the durable businesses are the ones built one layer up &mdash; in the workflow, in the distribution, in the relationship.
        </p>
        <p>
          Sell the workflow, not the model. The labs going public is the clearest signal yet that the model alone was never going to be enough.
        </p>
      </div>
    ),
};
