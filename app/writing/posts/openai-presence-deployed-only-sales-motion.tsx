import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "openai-presence-deployed-only-sales-motion",
    title: "OpenAI built an agent product you can't buy without its engineers",
    date: "Jul 23, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-slate-700 to-emerald-500",
    tldr: "OpenAI launched Presence on July 22: enterprise voice and chat agents with policies, guardrails, simulation testing, evaluations, approved actions, and a Codex-powered loop that rewrites the agent's weak spots after deployment. BBVA Mexico, SoftBank and IAG's Retail Insurance Australia are live, and it resolves 75% of OpenAI's own English-language support calls. The coverage files it as OpenAI versus Sierra and Agentforce. The detail that matters more sits in the availability section: Presence is sold only as a deployed product, installed by OpenAI's forward-deployed engineers and a short list of systems integrators. No self-serve, no pricing page. The company that built the largest self-serve funnel in software history decided that agents with authority over customer conversations get sold by hand, which splits the agent market into self-serve tools and deployed outcomes, with different buyers, different comp and different margins on each side. Outbound sales development is on the use-case list, so the AI SDR category now competes with its own model supplier, and the supplier brought engineers. If you sell agents on a self-serve motion, the accountability question is coming to your next bake-off; the revenue in this model gets made after the install, by whoever grows the live deployment.",
    content: (
      <div className="prose-content">
        <p>
          OpenAI launched Presence on July 22: a platform for running customer-facing voice and chat agents, wrapped in the full enterprise trust apparatus. Policies, guardrails, simulation testing, evaluations, approved actions, and a feedback loop where Codex studies the agent&rsquo;s failures and rewrites its weak spots. BBVA Mexico is using it with customers, SoftBank is running Japanese-language agents, and IAG&rsquo;s Retail Insurance Australia has it answering support. OpenAI also runs Presence on its own English-language phone line, where it resolves 75% of inbound calls, and the Codex loop cut human handoffs by 15 percentage points within ten days of going live.
        </p>
        <p>
          The coverage filed all this under competition: OpenAI moving in on Sierra, Decagon, and Salesforce&rsquo;s Agentforce. True, and worth a separate conversation about what happens when your model supplier ships your product. But the line in the announcement that stopped me is in the availability section. Presence is sold only as a deployed product, installed by OpenAI&rsquo;s forward-deployed engineers and a short list of global systems integrators. There is no self-serve tier and no pricing page. You cannot swipe a card.
        </p>
        <p>
          This from the company that built the largest self-serve funnel in the history of software. ChatGPT reached hundreds of millions of weekly users without a sales call, and OpenAI has spent two years converting that bottom-up gravity into enterprise seats. It knows more about what self-serve can carry than any vendor alive. And when the product became an agent with authority to talk to your customers, it decided self-serve couldn&rsquo;t carry it.
        </p>
        <h2>Trust turned out to be a services business</h2>
        <p>
          An agent that speaks for your brand, with approved actions behind it, gets bought the way outsourcing gets bought. The buyer question in those deals was never in the feature grid. It&rsquo;s who is accountable when the agent tells a BBVA customer the wrong thing about their mortgage at 2am, and who shows up to fix it. Guardrails and eval dashboards demo beautifully; accountability doesn&rsquo;t demo at all. It has to be staffed. OpenAI&rsquo;s answer is to put its own engineers inside the account, which is an answer software alone can&rsquo;t give.
        </p>
        <p>
          The forward-deployed wave has been building all year: Microsoft&rsquo;s{" "}
          <Link href="/writing/microsoft-frontier-company-deployment-is-the-product" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$2.5 billion Frontier unit</Link>, AWS&rsquo;s $1 billion FDE investment, the{" "}
          <Link href="/writing/ai-labs-pe-deployment-guaranteed-return" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">private-equity deployment ventures</Link>{" "}
          OpenAI and Anthropic stood up in May. Those were org charts and budgets. Presence is the first time the motion defines the product itself: the SKU is the software plus the humans, inseparable, and the vendor is telling you the second half is load-bearing.
        </p>
        <h2>The AI SDR category just met its supplier</h2>
        <p>
          Read the use-case list past customer support: outbound sales development, procurement, IT, HR. Outbound sales development is a category with dozens of funded startups, most of them selling self-serve or lightly assisted, most of them{" "}
          <Link href="/writing/ai-sdr-boom-revolving-door-churn" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">wrestling with first-year churn</Link>{" "}
          because the tools demo on activity and get judged on outcomes. Now the model vendor underneath many of them walks into the same buying committee with embedded engineers, a stay-and-tune Codex loop, and a 75% deflection number earned on its own phone line as the demo. A self-serve agent pitch against that is a rough Tuesday. The counter is the one generalists always leave open: depth in a workflow OpenAI won&rsquo;t staff, data it can&rsquo;t reach, and an outcome you own end to end. But the bar for &ldquo;we&rsquo;re a product, you figure out the rollout&rdquo; just moved.
        </p>
        <h2>The revenue gets made after the install</h2>
        <p>
          A deployed-only product signs small and earns on what happens next, which is the consumption math I&rsquo;ve been writing about all summer: signature is the starting gun, and the deal gets won across the eighteen months of expansion after the agent goes live. That 15-point handoff improvement in ten days is the pattern in miniature. The account got more valuable after the sale, because someone was standing in it, tuning. If you run a GTM org selling agents, that person is your scarcest hire, and your comp plan probably still pays as if the close were the finish line. If you carry a bag, notice which roles sit next to the deployment, because that&rsquo;s where this pricing model puts the money.
        </p>
        <p>
          OpenAI perfected the funnel where nobody talks to a human, looked at the agent market it created, and staffed the sale with people. They have more funnel data than anyone alive. Believe them.
        </p>
      </div>
    ),
    sources: [
      { title: "OpenAI — Introducing OpenAI Presence (July 22, 2026)", url: "https://openai.com/index/introducing-openai-presence/" },
      { title: "VentureBeat — OpenAI unveils Presence, a platform for realtime voice agents and chatbots (July 22, 2026)", url: "https://venturebeat.com/orchestration/openai-unveils-presence-a-new-platform-that-lets-enterprises-launch-and-manage-realtime-voice-agents-and-chatbots" },
      { title: "PYMNTS — OpenAI unveils product to hone AI voice and chat agents (July 22, 2026)", url: "https://www.pymnts.com/news/artificial-intelligence/2026/openai-unveils-product-to-hone-ai-voice-and-chat-agents/" },
      { title: "Help Net Security — OpenAI Presence connects AI agents to enterprise data with built-in guardrails (July 22, 2026)", url: "https://www.helpnetsecurity.com/2026/07/22/openai-presence-ai-agent-platform/" },
    ],
};
