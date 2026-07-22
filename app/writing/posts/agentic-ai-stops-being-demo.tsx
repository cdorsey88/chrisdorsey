import type { Post } from "./types";

export const post: Post = {
    slug: "agentic-ai-stops-being-demo",
    title: "The week agentic AI stopped being a demo",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic&apos;s Wall Street agent deployments and Salesforce Agentforce mark a genuine inflection — from AI as tool to AI as autonomous workflow executor. The organizations that treat this month as the starting gun will look very different in 24 months from the ones still running readiness webinars.",
    content: (
      <div className="prose-content">
        <p>
          Something shifted this week, and I want to name it clearly.
        </p>
        <p>
          On May 5, <a href="https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Anthropic announced</a>{" "}that Claude agents are now in production at JPMorgan Chase, Goldman Sachs,
          Citi, AIG, and Visa. These are full production deployments: agents running real
          workflows inside the largest financial institutions in the world. No pilots, no proofs of concept. PwC followed on May 14 with a partnership
          to embed Claude agents into enterprise client work across finance and life sciences.
        </p>
        <p>
          At roughly the same time, Salesforce&apos;s Agentforce reached the point where it is not just suggesting
          pipeline updates — it is making them autonomously, watching for stale stages, pulling external signals, and
          updating records without a human in the loop.
        </p>
        <p>
          I have been selling AI products since before most people knew what an LLM was. I have watched three distinct
          waves of enterprise AI adoption. The first was &ldquo;let&apos;s explore.&rdquo; The second was
          &ldquo;let&apos;s pilot.&rdquo; The third — which is where we are right now — is &ldquo;let&apos;s run this
          in production.&rdquo; And the third wave changes everything about what sales leadership actually means.
        </p>

        <h2>What just changed</h2>
        <p>
          The distinction that matters here is not between AI tools and AI agents, even though that framing is
          everywhere right now. The distinction is between AI that assists a human decision and AI that executes a
          multi-step workflow autonomously.
        </p>
        <p>
          For the last two years, the enterprise AI story was mostly the first kind. AI that drafts your outreach.
          AI that summarizes a call. AI that suggests next steps. These are legitimately useful, and I use them every
          day. But they are still fundamentally about making a human faster at something a human was already doing.
        </p>
        <p>
          What Anthropic and Salesforce are shipping now is the second kind. Agents that watch a portfolio of deals
          in real time, identify the ones that have gone quiet, pull Gong transcripts and email threading data to
          understand why, update the CRM accordingly, and flag the rep when human judgment is actually required. The
          human is still in the loop — but the loop is much bigger. The agent handles the 80 percent that was just
          process; the human handles the 20 percent that actually requires relationship intelligence.
        </p>
        <p>
          That is a fundamentally different operating model for a sales team.
        </p>

        <h2>What this means for how you manage</h2>
        <p>
          If you are running a sales team right now and you are not actively thinking about which parts of your
          process should be handed to an agent, you are making the same mistake companies made in 2010 when they
          thought of email marketing as &ldquo;the thing marketing uses&rdquo; instead of the primary customer
          retention channel.
        </p>
        <p>
          The practical question is not &ldquo;how do I buy an AI product.&rdquo; The practical question is: what
          are the three most time-consuming things my reps do that do not require their specific relationship
          context? Those are the candidates for agent automation. Qualification follow-up, CRM hygiene, competitive
          research, initial outreach personalization — these are all in play. Sellers using AI are already 3.7x more
          likely to hit quota. The next delta is the ones whose entire workflow is agent-augmented versus the ones
          still using AI one prompt at a time.
        </p>
        <p>
          The deeper question, and the one I find more interesting, is: if agents handle the top-of-funnel process
          work, what does that do to your hiring model? The entry-level sales job has been under pressure for two
          years. If an agent can run 1,000+ qualified touches a day at a cost per contact an order of magnitude lower
          than a human rep, the SDR motion looks different. Not gone — but different. The humans who thrive are the
          ones who can manage agents, interpret what the agent is surfacing, and engage at the moments where
          relationship credibility actually matters.
        </p>
        <p>
          This is not science fiction. Anthropic is running it at Goldman Sachs right now.
        </p>

        <h2>The window is still open — but it&apos;s closing</h2>
        <p>
          What I keep telling the founders and sales leaders I work with is that we are in the narrowest window of
          competitive advantage from agentic AI, and most organizations are not moving fast enough through it.
        </p>
        <p>
          The companies that implement agentic workflows in the next 12 months will have a structural cost and speed
          advantage over the ones that wait until it becomes obvious. By the time it becomes obvious, the vendors
          will have raised their prices, the talent that knows how to implement this will be expensive and scarce,
          and the organizational habits needed to work alongside agents will take 18 months to build.
        </p>
        <p>
          Read the Anthropic&ndash;Wall Street story this week as a signal about where the
          enterprise AI adoption curve sits. The largest, most compliance-heavy, most risk-averse institutions in the
          world just put AI agents into production. If JPMorgan can do it, there is no credible excuse for your
          RevOps team not to at least run a proof of concept this quarter.
        </p>
        <p>
          The concrete takeaway: pick one sales workflow this week — just one — where the output is predictable and
          the judgment required is low. Map the steps. Then ask whether an agent could run those steps with a human
          reviewing the exceptions. Qualification outreach. Competitive battlecard research. Deal hygiene
          notifications. If the answer is yes, you have just found your pilot. Start there, measure what changes,
          and build from that foundation.
        </p>
        <p>
          The demo phase is over. The organizations that treat this month as the starting gun will look very
          different in 24 months from the ones that are still running webinars about AI readiness.
        </p>
      </div>
    ),
};
