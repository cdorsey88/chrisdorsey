import type { Post } from "./types";

export const post: Post = {
  slug: "openai-dots-agent-reads-cold-email-first",
  title: "Your cold email now has a first reader with its own browser",
  date: "Sep 29, 2026",
  readTime: "4 min",
  tag: "AI & GTM",
  color: "from-violet-700 to-orange-500",
  tldr: "OpenAI announced dots at DevDay on September 29: always-on agents with their own cloud computer and browser, connected to more than 4,000 apps, included with Pro and Business Premium. The day before, Instinct raised $1 billion at a $10 billion valuation for a personal agent that texts, calls and cancels subscriptions for its users, and Meta's Muse has 2.5 million downloads since September 8. Nobody has said how these agents treat mail from senders they do not know. Open rates and click rates may soon count software, and a first email has to make sense when a machine summarizes it before a person sees it.",
  content: (
    <div className="prose-content">
      <p>
        OpenAI announced{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://thenextweb.com/news/openai-dots-always-on-ai-agents-cloud-computers-devday">dots</a>{" "}
        at DevDay on September 29. A dot is an always-on agent that runs on its own cloud computer with its own browser, connects to more than 4,000 apps, learns the user&rsquo;s preferences and does research in the background while the user is away. It runs on GPT-6 Astra, and the first one is included with Pro and Business Premium plans. Sensitive actions, such as changing a password, need the user&rsquo;s approval.
      </p>
      <p>
        The day before,{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.businesswire.com/news/home/20260928153437/en/Instinct-Raises-$1-Billion-in-Series-C-Funding-from-Sequoia-Benchmark-and-Coatue-at-$10-Billion-Valuation">Instinct raised $1 billion at a $10 billion valuation</a>{" "}
        from Sequoia, Benchmark and Coatue for a personal agent that uses its own phone and computer to text, call, order groceries and cancel subscriptions. Meta&rsquo;s Muse has 2.5 million downloads since September 8. The coverage treats all of this as convenience for the person who has the assistant.
      </p>

      <h2>Sellers are on the receiving end of these agents</h2>
      <p>
        Sales has spent twenty years arguing that nobody reads cold email. A dot is a reader that never skips one. It works when the user is not looking, it can open links in its own browser, and it is built to summarize and act. Whether it reads mail from senders it has never seen is not answered in anything I found. OpenAI has said only that some actions require approval.
      </p>
      <p>
        OpenAI is also testing specialist dots with their own credentials and access to company systems, for work like procurement, invoice processing and customer support. Those are the functions on the other end of a vendor&rsquo;s renewal quote and a support escalation. A seller&rsquo;s counterpart on those threads may soon be an agent working from a checklist.
      </p>

      <h2>Open rate and click rate may start counting software</h2>
      <p>
        If an agent opens a message in its own browser and follows the link to check it, the open and the click get logged the same way a person&rsquo;s would. That is an inference, and no vendor has confirmed it, but it is the mechanism sellers should assume. A sequence that reports a 45% open rate and a 6% click rate may be reporting how many of its recipients run an agent. Meanwhile the reply rate could drop, because an agent that summarizes for its owner has no reason to answer a stranger.
      </p>
      <p>
        At Zeta and Oracle I sold into marketing teams that judged a program on those top-of-funnel numbers, and I watched what happened when Apple&rsquo;s mail privacy change inflated opens. Teams kept optimizing subject lines against a number that had stopped measuring people. Agents can do the same thing again, at larger scale.
      </p>

      <h2>A first email that survives a summary</h2>
      <p>
        A machine summary keeps the claim, the number, the named customer and the ask. It drops the warm-up line, the flattering reference to the prospect&rsquo;s recent post and the three-paragraph story. So the email should state one specific result with a figure and a customer name, and make one request that a person needs to decide. A booked meeting that a human accepted is a better metric than either an open or a click.
      </p>
      <p>
        Two things can be true. Plenty of buyers will be relieved to stop reading emails from strangers, and sellers will have to earn the reply by being worth a human&rsquo;s attention once the agent flags it. The prospects who ignore their agent&rsquo;s summary of your email will be the same ones who ignored the original.
      </p>
      <p>
        OpenAI has not said how dots handle mail from unknown senders. That answer will affect reply rates more than any subject-line test you run this quarter.
      </p>
    </div>
  ),
  sources: [
    { title: "The Next Web — OpenAI launches dots, always-on AI agents with their own cloud computers", url: "https://thenextweb.com/news/openai-dots-always-on-ai-agents-cloud-computers-devday" },
    { title: "Digit — OpenAI dots announced at DevDay 2026", url: "https://www.digit.in/news/general/openai-dots-announced-at-devday-2026-how-this-always-on-ai-agent-will-handle-tasks-on-your-behalf.html" },
    { title: "Business Wire — Instinct Raises $1 Billion in Series C Funding (Sept 28, 2026)", url: "https://www.businesswire.com/news/home/20260928153437/en/Instinct-Raises-$1-Billion-in-Series-C-Funding-from-Sequoia-Benchmark-and-Coatue-at-$10-Billion-Valuation" },
    { title: "Techloy — Meta Launches Enterprise AI Platform with Muse (Muse downloads)", url: "https://www.techloy.com/meta-enterprise-platform-muse-ai/" },
  ],
};
