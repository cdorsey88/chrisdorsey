import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "chatgpt-ads-manager-sellers-read",
    title: "Two weeks later: OpenAI shipped the Ads Manager. The seller's read.",
    date: "May 21, 2026",
    readTime: "3 min",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "OpenAI's Ads Manager UI went live today with holdco integrations and a $2.5B target. For sales orgs, three things change: the discovery question, defensive brand-bidding inside ChatGPT becomes a real budget line, and SDR pre-call research has to include an LLM check.",
    content: (
      <div className="prose-content">
        <p>
          A few weeks ago I wrote about{" "}
          <Link href="/writing/chatgpt-ad-platform" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            OpenAI opening ChatGPT ads to every U.S. advertiser through self-serve
          </Link>{" "}
          and adding CPC bidding. That was the policy change. Today is the product: OpenAI launched the
          actual Ads Manager UI inside ChatGPT, with the major holding companies &mdash; Dentsu, Omnicom,
          Publicis, WPP &mdash; wired in alongside Adobe, Criteo, and StackAdapt. The revenue target is
          now $2.5B for the year and $100B annually by 2030.
        </p>
        <p>
          The May 6 piece argued the brand-side playbook: audit organic GEO before spending a dollar, treat
          GEO as the prerequisite to paid, build for incrementality. All still true. This post is for the
          other side of the table &mdash; anyone running a sales org whose buyers are increasingly
          researching inside ChatGPT.
        </p>
        <p>
          Three things change for sellers when paid placements scale inside the answer layer.
        </p>

        <h2>1. The discovery question changes.</h2>
        <p>
          A prospect today already shows up partially educated by Google, LinkedIn, peer Slack groups, and
          what their team has tried. By the end of 2026, add &ldquo;and whatever ChatGPT showed them&rdquo;
          &mdash; except now some of that has been paid for. If a buyer arrives saying &ldquo;I&apos;ve heard
          great things about [competitor],&rdquo; I want to know where. Add one discovery question this
          quarter: &ldquo;When you were researching this, what tools did you use?&rdquo; The answer is now
          diagnostic.
        </p>

        <h2>2. Branded-prompt bidding will become a defensive line item.</h2>
        <p>
          The first thing that happened on Google Ads in 2005 was competitors bidding on each other&apos;s
          brand names. Expect the same here. When a prospect types &ldquo;alternatives to [your product],&rdquo;
          somebody will pay to be the answer. Talk to marketing now about who owns the &ldquo;defensive
          bidding inside ChatGPT&rdquo; budget line. The first time you lose a deal to a competitor named in
          an AI answer your buyer didn&apos;t research themselves, that conversation gets a lot more
          expensive.
        </p>

        <h2>3. SDR pre-call research has to include the LLM check.</h2>
        <p>
          If your reps prep a call by reading the prospect&apos;s LinkedIn and last earnings report,
          that&apos;s no longer sufficient. Five minutes inside ChatGPT &mdash; asking the model what it
          knows about the prospect&apos;s company, stated initiatives, and what tools are typical in their
          stack &mdash; surfaces what the prospect themselves was probably told this week. The buyer is
          taking advice from the same source your reps should be sanity-checking.
        </p>

        <p>
          The May 6 post worried about the answer layer becoming pay-to-play. Two weeks in, the
          infrastructure to make that real is shipping. The teams that build a feedback loop between deals
          lost, what the prospect &ldquo;knew&rdquo; coming in, and what the LLMs actually say about their
          category will spot pattern shifts six months before the marketing team does. Start the loop now.
        </p>
      </div>
    ),
};
