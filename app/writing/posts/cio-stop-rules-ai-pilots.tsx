import type { ReactNode } from "react";
import type { Post } from "./types";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export const post: Post = {
    slug: "cio-stop-rules-ai-pilots",
    title: "Only 31% of CIOs have a rule for killing an AI pilot. Sellers should bring one.",
    date: "Nov 23, 2026",
    readTime: "3 min",
    tag: "Sales",
    color: "from-blue-700 to-cyan-500",
    tldr: "Gartner surveyed 2,002 CIOs and technology executives. Only 13% say AI has delivered significant or transformational value so far, and only 31% have guidelines for when a pilot should not move to production. Just 17% have rules for pulling AI that’s already live. A pilot with no way to fail also has no way to win, and it sits in your forecast the whole time. A separate HFS Research and Rackspace survey found AI embedded in standard operations met its business case twice as often as AI spread across several functions. If you sell AI, write the stop rule with your buyer before the pilot starts.",
    content: (
      <div className="prose-content">
        <p>
          Gartner released its <A href="https://www.gartner.com/en/newsroom/press-releases/2026-10-19-gartner-survey-finds-only-13-percent-of-cios-say-their-enterprise-has-realized-significant-or-transformational-value-from-ai">CIO survey</A>{" "}on Oct 19, at its IT Symposium in Orlando. It covers 2,002 CIOs and technology executives. Thirteen percent say their company has gotten significant or transformational value from AI so far. The number I’d circle is smaller and further down: 31% have guidelines for when an AI pilot should not move to production. Only 17% have rules for abandoning low-value AI that’s already in production.
        </p>
        <p>
          Alicia Mullery, the Gartner VP analyst on the release, summed it up in four words: volume is not value.
        </p>

        <h2>The pilot nobody can end</h2>
        <p>
          Read that 31% from the seller’s chair. Only 31% have a guideline for ending a pilot, which means most of the buyers you pilot with don’t. That sounds like good news for about a week.
        </p>
        <p>
          Then the pilot runs past its date. The champion gets busy. Nobody kills it, because nobody agreed what killing it would look like, and nobody expands it either, because nobody agreed what winning looks like. It sits in your forecast at 50% until a new CFO asks what it’s for. I’ve forecast deals like that. Every seller has, and every seller has explained one on a pipeline call with a straight face.
        </p>

        <h2>Where I’ve seen it work</h2>
        <p>
          In 2025 at Zeta Global, I sold an AI-targeted email customer-acquisition pilot that had no budget line behind it. A VP of Growth and Media signed a $200K pilot, and it grew into a $1M+ contract on performance.
        </p>
        <p>
          We judged it on two numbers: cost per acquisition and incremental ROAS. CPA told us what a new customer cost. iROAS told us whether those customers would have shown up anyway, which is the question a CFO asks second and a seller should answer first.
        </p>
        <p>
          Both sides could check those two numbers, so when the results came in, nobody had to argue about what they meant.
        </p>

        <h2>Write the stop rule yourself</h2>
        <p>
          Most buyers won’t have one, so bring a draft. Keep it to a single page. It names the metric you’ll both judge the pilot on and the number below which you both walk away. Add the date you’ll look, and put the buyer’s name next to the decision.
        </p>
        <p>
          Scope it narrow. <A href="https://www.marketscale.com/industries/software-and-technology/hfs-survey-finds-only-a-third-of-enterprises-hit-their-ai-business-case">HFS Research and Rackspace surveyed 502 senior AI decision-makers</A>{" "}at companies with at least $100 million in revenue and asked whether their biggest AI program met its business case. Of those deploying AI across several functions, 28% said it met or beat the case. Among single-function users it was 37%, and where AI was embedded in standard operations, 56%. HFS says the data doesn’t show that operating maturity causes better returns, and the survey was a joint effort with Rackspace. The direction still matches every pilot I’ve watched grow. One workflow and one number are easier to say yes to twice.
        </p>
        <p>
          A stop rule gives the buyer a clean way to walk away, and some pilots that would have limped into a renewal will end on schedule instead. It also makes the good pilots expand faster, because the yes was written down before anyone saw the results.
        </p>

        <h2>What to check</h2>
        <p>
          Gartner says CIOs with pilot stop rules are 2.3 times more likely to be what it calls vanguards. I couldn’t find how many of the 31% have ever used theirs. Ask your buyer that on the next call, before you ask for a signature.
        </p>
      </div>
    ),
    sources: [
      { title: "Gartner press release, Oct 19, 2026: only 13% of CIOs say their enterprise has realized significant or transformational value from AI", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-19-gartner-survey-finds-only-13-percent-of-cios-say-their-enterprise-has-realized-significant-or-transformational-value-from-ai" },
      { title: "MarketScale: HFS Research and Rackspace survey finds only a third of enterprises hit their AI business case (Nov 15, 2026)", url: "https://www.marketscale.com/industries/software-and-technology/hfs-survey-finds-only-a-third-of-enterprises-hit-their-ai-business-case" },
    ],
};
