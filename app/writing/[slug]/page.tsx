import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

const serif = { fontFamily: "var(--font-fraunces)" };
const sans  = { fontFamily: "var(--font-inter)" };

type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  color: string;
  tldr: string;
  content: React.ReactNode;
};

const posts: Post[] = [
  {
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
          On May 5, Anthropic announced that Claude agents are now in production at JPMorgan Chase, Goldman Sachs,
          Citi, AIG, and Visa. Not pilots. Not proofs of concept. Production deployments — agents running real
          workflows inside the largest financial institutions in the world. PwC followed on May 14 with a partnership
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
          The Anthropic&ndash;Wall Street story this week is not just a press release. It is a signal about where the
          enterprise AI adoption curve is. The largest, most compliance-heavy, most risk-averse institutions in the
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
  },
  {
    slug: "chatgpt-ad-platform",
    title: "OpenAI just turned ChatGPT into an ad platform. Here's what brands need to do in the next 90 days.",
    date: "May 6, 2026",
    readTime: "9 min",
    tag: "Future of Ads",
    color: "from-emerald-500 to-cyan-500",
    tldr: "OpenAI has opened ChatGPT ads to all U.S. advertisers. Build your organic GEO foundation before running a single paid placement — visibility without credibility converts poorly.",
    content: (
      <div className="prose-content">
        <p>
          On May 5, 2026, OpenAI quietly did something that will reshape the next decade of digital advertising. They
          dropped the $50,000 minimum spend requirement, opened ChatGPT Ads to every U.S. advertiser through
          self-serve, and added cost-per-click bidding. The pilot that started with a handful of enterprise
          brands is now open to everyone.
        </p>
        <p>
          The numbers already in market are not small. The ChatGPT ad business is pulling $100M+ in annualized
          revenue with an internal target of $102 billion by 2030. That is not a test. That is a land grab — and
          it is happening faster than any platform-to-ad-network transition in digital history, including Google&apos;s.
        </p>

        <h2>Why this matters more than the headlines suggest</h2>
        <p>
          Every major ad story gets covered the same way: platform launches ads, brands rejoice or panic, the cycle
          continues. But this one is structurally different, and most of the coverage is missing the point.
        </p>
        <p>
          The core difference is where in the purchase journey ChatGPT lives. Google Ads intercept a user who is
          already searching — intent already formed, query already typed. ChatGPT sits earlier and later than that.
          It&apos;s where people go to think through decisions, compare options, understand categories, and increasingly,
          to get a direct recommendation instead of a list of links.
        </p>
        <p>
          When a user asks ChatGPT &ldquo;what&apos;s the best project management tool for a 50-person team?&rdquo; — that is not
          a search. That is a buying conversation. The answer that comes back carries the weight of a trusted
          advisor, not a search result. Paid placement in that context is categorically different from a banner ad
          or even a sponsored link.
        </p>

        <h2>The 90-day playbook</h2>
        <p>
          Here is what I would actually do right now if I were running marketing or media strategy for an enterprise
          brand:
        </p>
        <p>
          First: audit your organic presence before touching paid. Run your category queries in ChatGPT, Claude,
          Perplexity, and Gemini. See what comes back. If your brand isn&apos;t appearing organically in the answer
          layer, paying for placement will help you show up — but without the surrounding context, the model has
          nothing to reinforce. You&apos;ll get visibility without credibility, which converts poorly.
        </p>
        <p>
          Second: treat GEO like the prerequisite it is. Generative Engine Optimization — structured data,
          authoritative citations, schema markup, content written for how LLMs retrieve and synthesize — is now
          table stakes before you run LLM advertising. The brands that will win paid placement in ChatGPT are the
          ones the model already trusts organically. This is not different from how Google Ads works at the quality
          score level. Organic authority amplifies paid.
        </p>
        <p>
          Third: start small, measure differently. Standard attribution models do not work here. ChatGPT ad
          interactions are conversational — a user might click a sponsored result mid-conversation, bounce, and
          return three days later through direct. Last-click attribution will undercount impact significantly.
          Build for incrementality testing from day one or you will pull budget from something that is actually
          working.
        </p>
        <p>
          Fourth: think about format. Early reports from the enterprise pilot suggest that sponsor callouts
          appearing within conversational responses outperform traditional display-style placements. This should
          surprise no one — the format that fits the container works better. Write ad copy that reads like a
          recommendation, not an ad.
        </p>

        <h2>The harder question</h2>
        <p>
          The thing nobody wants to say out loud: what happens when the answer layer becomes pay-to-play at scale?
        </p>
        <p>
          Right now, the brands appearing in ChatGPT responses are there because of content quality, schema,
          citations, and genuine authority. The moment heavy paid penetration hits, smaller brands and independent
          voices that built organic presence get crowded out — not because their content got worse, but because
          their budgets can&apos;t compete. We have seen this movie before, on every platform that started as a meritocracy
          and became a media buy.
        </p>
        <p>
          The window to build durable organic presence in the answer layer is closing. Not tomorrow, but within
          18-24 months. The brands treating GEO as a &ldquo;we&apos;ll get to it&rdquo; initiative will be in the same position
          in 2028 that brands who ignored SEO in 2004 found themselves in 2008.
        </p>
        <p>
          Build the organic foundation now. Run the paid experiments. Measure differently than you ever have before.
          The next 90 days are genuinely important.
        </p>
      </div>
    ),
  },
  {
    slug: "geo-new-seo",
    title: "GEO is the new SEO — and most brands are already losing",
    date: "Apr 28, 2026",
    readTime: "6 min",
    tag: "GEO",
    color: "from-emerald-500 to-teal-500",
    tldr: "LLMs are consistently surfacing the same vendors for category queries, and they're rarely the category leaders. GEO is now the prerequisite for being found, and most brands haven't started.",
    content: (
      <div className="prose-content">
        <p>
          I searched &ldquo;best CRM for mid-market companies&rdquo; in ChatGPT and Claude this morning.
          The same three vendors came up in both. None of them were Salesforce. None of them were HubSpot.
        </p>
        <p>
          Two of the three vendors that appeared are not the category leaders by revenue or by brand recognition.
          They are not the ones spending the most on Google Ads or sponsoring the most conferences. But they are
          the ones that LLMs have been trained to associate with credibility in that space — because of how they
          have structured their content, built their citation graph, and shown up in the sources that models
          actually learn from.
        </p>
        <p>
          That is Generative Engine Optimization. And most marketing teams have not started.
        </p>

        <h2>How LLMs decide what to surface</h2>
        <p>
          The mistake most people make when they first encounter GEO is assuming it works like SEO — that you can
          optimize a page title, stuff some keywords, and climb a ranking. It does not work like that.
        </p>
        <p>
          Language models build their understanding of your brand from the entire corpus of text they were trained
          on and, increasingly, from real-time retrieval from sources they trust. They are synthesizing a picture
          of who you are from: the quality and specificity of your public content, the sites that reference and
          cite you, the structured data that describes what you do, and how consistently you appear in authoritative
          third-party contexts.
        </p>
        <p>
          This means the question is not &ldquo;how do I rank for this keyword&rdquo; — it is &ldquo;what does
          the model believe about my brand, and what is the evidence base for that belief?&rdquo;
        </p>

        <h2>The three ways brands appear in LLM responses</h2>
        <p>
          In my experience auditing how brands appear across ChatGPT, Claude, Perplexity, and Gemini, there are
          three modes of presence:
        </p>
        <p>
          Cited presence: the model actively names your brand in a response and attributes a claim or capability
          to you. This is the highest-value placement — it carries implicit endorsement. It comes from being
          referenced in high-authority sources the model trusts.
        </p>
        <p>
          Contextual presence: your brand appears as part of a category when a user asks about the space broadly.
          &ldquo;Companies working on X include A, B, and C.&rdquo; Lower weight than a direct citation but still
          valuable for awareness and consideration.
        </p>
        <p>
          Absent: the model answers the question without mentioning you at all, or — worse — describes your
          category and explicitly names your competitors. This is where most brands are today.
        </p>

        <h2>What you can actually do</h2>
        <p>
          Three things that move the needle faster than almost anything else:
        </p>
        <p>
          Structured data and schema markup. JSON-LD on your site that clearly describes what you do, who you
          serve, and what you are known for gives models a reliable, machine-readable signal. Most brands have
          none. Implementing even a basic Person, Organization, and Product schema puts you ahead of the majority
          of your competitors.
        </p>
        <p>
          Third-party citation building. Models trust what authoritative sources say about you more than what you
          say about yourself. This means editorial coverage, analyst mentions, high-quality backlinks, and
          presence in industry-specific repositories that models are trained to treat as credible. The content
          strategy goal is not ranking — it is being cited.
        </p>
        <p>
          Specificity over volume. LLMs surface brands that are known for specific, concrete things — not brands
          with long lists of capabilities. &ldquo;Best project management tool for remote engineering
          teams&rdquo; returns different results than &ldquo;best project management tool.&rdquo; The brands
          that appear in the specific query are the ones that have published specific, high-quality content about
          that exact use case. Broad content that tries to own everything owns nothing in the answer layer.
        </p>

        <h2>The urgency is real</h2>
        <p>
          SEO took a decade to mature into a discipline that most marketing teams staffed for and budgeted around.
          GEO is moving faster because the adoption of AI-powered search is moving faster. The brands building
          presence in the answer layer right now are establishing positions that will be significantly harder
          to displace in 18 months.
        </p>
        <p>
          Run the audit first. Search for your category in each of the major LLMs. See where you appear, where
          you don&apos;t, and who is showing up in your place. That gap is the work.
        </p>
      </div>
    ),
  },
  {
    slug: "ai-entry-level-jobs",
    title: "AI didn't kill the entry-level job. Interest rates and a tax change did.",
    date: "Apr 14, 2026",
    readTime: "8 min",
    tag: "Macro",
    color: "from-teal-500 to-emerald-600",
    tldr: "Federal Reserve research shows AI had null effects on job postings. Interest rates, Section 174, and post-pandemic normalization are the real story — and understanding that changes how you sell.",
    content: (
      <div className="prose-content">
        <p>
          The story writes itself. AI arrived. Companies started laying people off. Therefore AI caused the layoffs.
          It is a clean narrative, it fits on a headline, and it is largely wrong.
        </p>
        <p>
          I have been selling AI products for three years. I have been in rooms with enterprise buyers who are
          simultaneously cutting headcount and buying AI software. And I can tell you that the causality is more
          complicated than the coverage suggests — and that understanding the real story matters enormously for
          how you think about your own career and how you sell into this market.
        </p>

        <h2>What the data actually says</h2>
        <p>
          A Federal Reserve study covering more than one million firms found what the researchers called
          &ldquo;precisely-estimated null effects&rdquo; for AI adoption on job postings. Not a small effect.
          Not a mixed effect. Null. A 2025 NBER paper tracking 25,000 workers across 7,000 workplaces found zero
          statistically significant effect on earnings or hours worked after AI tool adoption.
        </p>
        <p>
          These are not fringe studies. They are among the most rigorous examinations of AI&apos;s labor market
          impact conducted in the post-ChatGPT era. And they do not support the displacement narrative that has
          dominated the conversation.
        </p>
        <p>
          Here is what else the data shows: 59% of hiring managers in a recent survey admitted they cite AI
          in layoff messaging because it &ldquo;plays better with stakeholders than financial constraints.&rdquo;
          AI is being used as a narrative device to explain decisions that were made for entirely different
          reasons.
        </p>

        <h2>What actually happened</h2>
        <p>
          Three things converged to create the hiring freeze of 2024-2026, and none of them are named GPT-4.
        </p>
        <p>
          Interest rates. The Fed raised rates seventeen times between 2022 and 2024. The cost of capital for
          growth-stage companies went from effectively zero to 5–7%. Companies that had been hiring aggressively
          against cheap debt capital suddenly needed to show a path to profitability. The first place most
          companies cut when the cost of capital rises is headcount. This is not new — it happened in 2001, in
          2008, and it happened again.
        </p>
        <p>
          Section 174. This is the one almost nobody is talking about. A 2017 tax law change took effect in 2022
          that required companies to amortize R&amp;D expenses over five years rather than deducting them
          immediately. For technology companies that classify significant portions of engineering salary as
          R&amp;D expense — which is most of them — this dramatically changed the math on hiring engineers and
          developers. The entry-level tech jobs that disappeared fastest are concentrated in software engineering
          roles, which tracks directly with where Section 174 created the most acute cost pressure.
        </p>
        <p>
          Post-pandemic normalization. Companies over-hired in 2020 and 2021 against pandemic-driven demand that
          turned out to be temporary. E-commerce companies, streaming platforms, logistics companies — all hired
          for a world that looked different than the one that emerged. The layoffs of 2023 and 2024 were, in
          significant part, the correction of that over-hiring. The timing just happened to coincide with AI
          becoming publicly visible.
        </p>

        <h2>Why this matters for how you sell</h2>
        <p>
          If you are selling AI to enterprise buyers right now, and you understand the above, you have a
          significant advantage over competitors who have swallowed the displacement narrative whole.
        </p>
        <p>
          Enterprise buyers are not cutting jobs because AI is doing their work. They are cutting jobs because
          of capital costs and tax law. AI is being positioned as the justification, but the actual constraint
          is budget — and the actual question your buyer is asking is whether your product can help them do
          more with fewer people because they have to, not because the technology makes it inevitable.
        </p>
        <p>
          That is a very different sales conversation. It is a conversation about efficiency under constraint,
          not transformation for its own sake. The buyers who are approving AI purchases right now are doing it
          to solve a budget problem, not to replace a workforce.
        </p>
        <p>
          Lead with the outcome, not the technology. And when your buyer asks &ldquo;will this replace my team,&rdquo;
          understand that what they are often really asking is &ldquo;will this help me justify to my CFO why
          I&apos;m not growing headcount?&rdquo; Those are different questions, and they have different answers.
        </p>
        <p>
          The macro story in 2027 looks different from today. Rates are coming down. Section 174 is under
          political pressure. Post-pandemic normalization is largely complete. The companies that used the
          constraint period to build AI-powered workflows will come out on the other side with significant
          productivity advantages. The ones that waited will be hiring back into a more competitive landscape.
        </p>
        <p>
          That is the conversation worth having with your buyers right now.
        </p>
      </div>
    ),
  },
  {
    slug: "selling-ai-skeptical-buyers",
    title: "Selling AI to skeptical buyers (a field guide)",
    date: "Feb 11, 2026",
    readTime: "7 min",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "The enterprise buyers you're selling to have been burned before. Stop adding proof and start diagnosing the specific failure that created the skepticism.",
    content: (
      <div className="prose-content">
        <p>
          The enterprise buyer sitting across from you — or on the other side of your Zoom — has seen fifty AI
          demos in the past six months. They have heard &ldquo;it&apos;s like having a junior analyst on your team,&rdquo;
          &ldquo;it learns your workflow,&rdquo; and &ldquo;you&apos;ll save 40% of your time&rdquo; more times
          than they can count.
        </p>
        <p>
          They have also been burned. The tool that was going to transform their content pipeline is now a $30K
          line item that three people use occasionally. The AI email writer generates copy that sounds like it
          was written by a robot trying to sound human. They approved the budget, championed it internally, and
          now they own the failure.
        </p>
        <p>
          This is the room you are walking into. And it is actually a good room to be in — if you know what to
          do with it.
        </p>

        <h2>The instinct that kills deals</h2>
        <p>
          Most sellers respond to skepticism by adding more proof. More case studies. More ROI calculations. More
          demos that show additional features. The logic is: they don&apos;t believe me, so I need to show them
          more evidence.
        </p>
        <p>
          This almost always backfires. When a buyer is skeptical, more evidence lands as more noise. They are
          not evaluating your evidence — they are filtering for the catch. Every impressive stat triggers the
          internal question: &ldquo;Yes, but what&apos;s the part you&apos;re not telling me?&rdquo;
        </p>
        <p>
          The move that actually works is to stop selling and start diagnosing. Get curious about the specific
          failure that created the skepticism. The conversation shifts from &ldquo;let me show you what we can do&rdquo;
          to &ldquo;tell me about the thing that didn&apos;t work last time.&rdquo;
        </p>

        <h2>The framework I actually use</h2>
        <p>
          I call it proof of work, and it has three components.
        </p>
        <p>
          Acknowledge the failure first — not your product&apos;s failure, the category&apos;s failure.
          &ldquo;AI tools have massively overpromised in the past two years. The gap between what got demo&apos;d
          and what got delivered has been significant. I assume you&apos;ve experienced some version of
          that.&rdquo; This does two things: it signals that you understand their reality, and it separates you
          from the vendors they&apos;ve already tried. You are not pretending the category has been perfect.
        </p>
        <p>
          Get specific about the failure mode. &ldquo;When you think about the AI tools that have underdelivered
          for you — what was the gap? Was it that the output quality wasn&apos;t there? That the adoption never
          happened? That the ROI was real but impossible to attribute?&rdquo; Let them tell you exactly what went
          wrong. That answer tells you everything about what they need to hear from you.
        </p>
        <p>
          Match your story to their failure. If adoption was the problem, lead with implementation support and
          change management — not product features. If output quality was the problem, get into a working session
          where they see real output against their actual use case, not a generic demo. If attribution was the
          problem, talk about measurement before you talk about the product.
        </p>

        <h2>Handling "we're evaluating everything"</h2>
        <p>
          The most common stall in enterprise AI sales right now is the parallel evaluation. &ldquo;We&apos;re looking
          at six vendors, we&apos;ll make a decision in Q3.&rdquo; It sounds reasonable. It often means the buying
          process is stuck and no one has authority to move it.
        </p>
        <p>
          The right move is not to compete on the evaluation rubric — it is to get off the rubric entirely. Ask
          for a pilot on a specific, bounded use case with a defined success metric. &ldquo;Instead of a parallel
          evaluation across six tools, let us earn the right to compete. Give us one use case, thirty days, a
          clear definition of what success looks like. If we hit it, you have real evidence. If we don&apos;t,
          you have lost thirty days instead of six months.&rdquo;
        </p>
        <p>
          Most buyers say yes to this — because it is a better deal for them, and because you are the only one
          offering it.
        </p>

        <h2>The enterprise timeline reality</h2>
        <p>
          Enterprise AI deals are slow. Slower than you think they should be, slower than the buyer thinks they
          should be, and slower than your forecast says they will be. Security reviews, procurement, legal,
          IT integration, change management — each of these is a real gate, and treating them as obstacles
          rather than requirements is a mistake.
        </p>
        <p>
          The sellers I have seen close the most in this space are the ones who get ahead of the process instead
          of behind it. Who ask about procurement requirements in the discovery call. Who introduce their
          implementation team before the contract is signed. Who map the internal champion&apos;s career risk
          alongside their business case.
        </p>
        <p>
          Skeptical buyers are not blocked buyers. They are buyers who have been burned and need a different
          kind of evidence — evidence that you understand their situation, that you are not going to oversell
          them into another failure, and that you will still be there six months after the contract to make
          sure it works.
        </p>
        <p>
          That is a higher bar than most sellers want to clear. It is also why the sellers who clear it tend
          to own the accounts they win for a long time.
        </p>
      </div>
    ),
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Chris Dorsey`,
    description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
    authors: [{ name: "Christopher Dorsey", url: "https://chrisdorsey.co" }],
    openGraph: {
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      url: `https://chrisdorsey.co/writing/${post.slug}`,
      type: "article",
      authors: ["https://chrisdorsey.co"],
      siteName: "Chris Dorsey",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      creator: "@chrisdorsey",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const tagColors: Record<string, string> = {
    "Future of Ads": "from-emerald-500 to-cyan-500",
    GEO:             "from-emerald-500 to-teal-500",
    Macro:           "from-teal-500 to-emerald-600",
    Sales:           "from-cyan-500 to-blue-600",
  };
  const color = tagColors[post.tag] ?? "from-blue-500 to-cyan-500";

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Nav */}
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link href="/" className="font-bold" style={serif}>
            <span className="text-slate-900">Christopher </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Dorsey</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Tag + meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full bg-gradient-to-r ${color}`}
          >
            {post.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3 h-3" /> {post.readTime} read
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-10 text-slate-900"
          style={serif}
        >
          {post.title}
        </h1>

        {/* Author + top share icons */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Christopher Dorsey"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-sky-100"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Christopher Dorsey</p>
              <p className="text-xs text-slate-500">AI &amp; MadTech Advisor · Enterprise Sales Leader</p>
            </div>
          </div>
          {/* Icon-only share bar */}
          <div className="flex items-center gap-2">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 transition">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Threads" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 transition">
              <svg width="12" height="12" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
            </a>
            <a href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-600 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${color} mb-10`} />

        {/* TLDR */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">TL;DR</p>
          <p className="text-slate-700 leading-relaxed">{post.tldr}</p>
        </div>

        {/* Body */}
        <div
          className="text-lg text-slate-700 leading-relaxed space-y-6"
          style={sans}
        >
          <style>{`
            .prose-content p { margin-bottom: 1.5rem; line-height: 1.8; }
            .prose-content h2 {
              font-family: var(--font-fraunces);
              font-size: 1.5rem;
              font-weight: 800;
              color: #0f172a;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              line-height: 1.2;
            }
          `}</style>
          {post.content}
        </div>

        {/* Share — bottom */}
        <div className="mt-16 pt-8 border-t border-sky-200">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Share this post</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X
            </a>
            <a
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
              Threads
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              Reddit
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Thought you'd find this interesting: https://chrisdorsey.co/writing/${post.slug}`)}`}
              className="text-sm border border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 pt-8 border-t border-sky-200">
          <p className="text-slate-500 text-sm mb-4">
            Questions, pushback, or just want to compare notes?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ctjdorsey@gmail.com"
              className="text-sm bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition font-medium"
            >
              Get in touch
            </a>
            <Link
              href="/#writing"
              className="text-sm border border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 px-5 py-2.5 rounded-full transition font-medium"
            >
              More writing
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
