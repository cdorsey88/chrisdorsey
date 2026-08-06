import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "iab-ai-visibility-decision-grade-procurement",
    title: "The IAB's new AI visibility rules contain exactly one hard number",
    date: "Aug 5, 2026",
    readTime: "6 min",
    tag: "GEO",
    color: "from-amber-600 to-cyan-600",
    tldr: "On August 3 the IAB published “Measuring Visibility in the AI Era,” 36 pages sorting AI visibility metrics into four categories and two quality tiers: directional, for internal briefings, and decision-grade, the tier it says you should use for budget allocation and picking a vendor. Nine dimensions separate the two. Exactly one carries a number: fewer than 50 queries is “exploratory” and cannot characterize a category. Decision-grade query volume is “large, diverse.” Decision-grade platform coverage is “a substantial majority” of consumer AI traffic. No figures for either, no certification program to check, only a “potential future” one with no date. So any of the 20-plus companies selling AI visibility tools can put decision-grade on a slide, and IAB says up front the document “does not rate measurement providers.” The useful part is the disclosure list underneath. Three dimensions are checkable today: coverage of all four query intent types with results segmented by intent, a weekly or faster testing cadence, and per-platform results reported separately with the weighting disclosed. Put those three in your next GEO renewal by name. A vendor selling you a blended monthly score is selling directional data, and IAB just wrote down what directional is for, which is not your budget.",
    content: (
      <div className="prose-content">
        <p>
          The IAB published its AI visibility guidance on Monday, 36 pages called &ldquo;Measuring Visibility in the AI Era.&rdquo; It sorts metrics into four categories: presence (do you show up), prominence (where in the answer), portrayal (in what context, and is it accurate), and persuasion (does any of it drive a click). Then it grades every measurement claim as either directional, which IAB says is fine for competitive awareness and internal briefings, or decision-grade, which is what you&rsquo;re supposed to require before you allocate budget or pick a provider.
        </p>
        <p>
          Nine dimensions separate those two tiers. One of them has a number in it. Fewer than 50 queries per measurement program is &ldquo;exploratory,&rdquo; a rung below even directional, because query volumes under that floor &ldquo;cannot meaningfully characterize a category.&rdquo; That&rsquo;s the whole quantitative content of the document.
        </p>
        <h2>Decision-grade is defined in words nobody can check</h2>
        <p>
          Look at what the top tier asks for. Decision-grade query volume is a &ldquo;large, diverse query set with category and subcategory coverage.&rdquo; Decision-grade platform coverage is platforms &ldquo;collectively representing a substantial majority of consumer AI traffic in the target market.&rdquo; Decision-grade sample size is &ldquo;enough responses per query to establish a stable distribution.&rdquo; Large. Substantial. Enough. IAB&rsquo;s own working group flagged that the acceptable variability ranges are still an open question, which is honest and also means the range you&rsquo;d test a vendor against doesn&rsquo;t exist yet.
        </p>
        <p>
          IAB is candid about the limits, to its credit. The document says plainly that it &ldquo;does not rate measurement providers, prescribe tools, or build measurement systems.&rdquo; A provider certification program is described as a &ldquo;potential future&rdquo; thing, with no date attached anywhere I could find. So starting this week, any of the more than 20 companies selling AI visibility tools can put &ldquo;decision-grade&rdquo; on a slide, and the marketer holding that slide has no mechanism to disagree.
        </p>
        <p>
          Two things can be true. Caroline Giegerich, IAB&rsquo;s VP of AI, told AdExchanger this deliberately isn&rsquo;t a standard, because a standard requires stability and the market is in a mass transition. She&rsquo;s right, and the document is better than what buyers had a week ago. It&rsquo;s also going to get used as a badge long before it can function as a bar. Both of those land on the same buyer.
        </p>
        <h2>I&rsquo;ve seen guidance arrive before the audit before</h2>
        <p>
          Digital advertising ran this sequence a decade ago with viewability. The industry agreed on what a viewable impression was well before it agreed on who was allowed to count one, and the gap between those two moments ran for years. What filled it was a verification business, and a lot of meetings where a brand and an agency compared two vendors&rsquo; numbers for the same campaign and discovered they weren&rsquo;t comparing anything. I sat in those meetings. Nobody was lying. Everybody was measuring a slightly different thing and calling it the same word.
        </p>
        <p>
          The setup right now rhymes. Similarweb found only 11% of citations overlap between major AI platforms, and that citation sets churn roughly half every month. Semrush tracked 126 million US prompts from January through April and found 36 brands out of more than 1,200 that showed up in the top-100 most-mentioned on every platform every month. That&rsquo;s the underlying instability two vendors are both trying to sell you a stable number about. IAB&rsquo;s own summary puts the buyer&rsquo;s position bluntly: &ldquo;Buyers have budgets ready to spend. They have no basis for evaluating what they are buying.&rdquo;
        </p>
        <p>
          The scale is why this is worth your Monday. ChatGPT is over 900 million weekly actives, Google&rsquo;s AI Overviews reach more than 2.5 billion people a month, and only 16% of brands systematically track their visibility inside any of it. McKinsey&rsquo;s projection, cited in the IAB doc, is that unprepared brands could see traditional search traffic fall 20 to 50%.
        </p>
        <h2>Three of the nine dimensions are checkable today</h2>
        <p>
          The document earns its keep below the tier labels. Underneath them sits a disclosure list, and disclosure is verifiable even when the threshold isn&rsquo;t. Three items in particular you can write into a contract this quarter and hold a vendor to without waiting on anybody&rsquo;s certification.
        </p>
        <p>
          Query intent coverage. IAB defines four types: informational (&ldquo;what is X&rdquo;), comparison (&ldquo;X vs. Y&rdquo;), recommendation (&ldquo;best X for Y&rdquo;), and transactional (&ldquo;where to buy X&rdquo;). Directional requires two. Decision-grade requires all four, with the distribution disclosed and results segmented by intent type. That segmentation is the most useful thing in the framework for anyone running a category, because &ldquo;best running shoes for flat feet&rdquo; and &ldquo;where to buy X&rdquo; are different problems with different owners and different budgets, and a blended score buries which one you&rsquo;re losing.
        </p>
        <p>
          Testing cadence. Monthly or quarterly is directional. Weekly or more frequent is decision-grade. Given citation sets that turn over half their contents in a month, a quarterly report is a photo of something that already left.
        </p>
        <p>
          Per-platform reporting. Decision-grade providers must report each platform separately, show how much results vary across platforms, and document the weighting. I wrote in July that{" "}
          <Link href="/writing/geo-chatgpt-sources-split-by-engine" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">a blended AI-visibility number averages two unrelated games</Link>{" "}
          and hides losing one of them. The IAB has now made the split a condition of its top tier, which is a good outcome and also means your current vendor&rsquo;s single number is, by IAB&rsquo;s own definition, directional data.
        </p>
        <p>
          The prominence category is the other quiet win. Placement inside an answer is now a named metric with ranking order and depth of citation attached, which is the thing I argued was{" "}
          <Link href="/writing/google-ai-mode-citation-placement" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">a dial Google turns category by category</Link>{" "}
          when it moved recipe links to the top of AI Mode. If your report says &ldquo;cited&rdquo; and stops there, it&rsquo;s answering the 2025 question.
        </p>
        <h2>What to do before your next renewal</h2>
        <p>
          Stop asking vendors whether they&rsquo;re decision-grade. They&rsquo;ll say yes, and under this document they&rsquo;re entitled to. Ask for the disclosures instead: total query volume and the count per subcategory, the intent-type distribution, responses per query, results broken out by platform with the weighting basis, and the variation range they&rsquo;ll commit to inside a seven-day window. A provider running a real program produces that in a few days. A provider running a dashboard over a thin query set will negotiate about it, and the negotiation is your answer.
        </p>
        <p>
          One small thing I noticed and can&rsquo;t unsee. The only outside voice IAB put in its own press release is a senior product manager at Microsoft Clarity, a company that ships an AI visibility product. It doesn&rsquo;t make the guidance wrong. It does tell you who was paying attention on day one, and how fast the word &ldquo;decision-grade&rdquo; is going to travel.
        </p>
        <p>
          Send your GEO vendor one email this week asking for last quarter&rsquo;s results segmented by the four intent types and broken out by platform. Whatever comes back, and however long it takes, you&rsquo;ll know which tier you&rsquo;ve been buying.
        </p>
      </div>
    ),
    sources: [
      { title: "IAB — Measuring Visibility in the AI Era (guidelines)", url: "https://www.iab.com/guidelines/measuring-visibility-in-the-ai-era/" },
      { title: "IAB — Press release: Measuring Visibility in the AI Era", url: "https://www.prnewswire.com/news-releases/iab-releases-measuring-visibility-in-the-ai-era-to-help-brands-publishers-and-agencies-navigate-ai-powered-discovery-302840611.html" },
      { title: "AdExchanger — IAB's New Advice On How To Measure AI Search Visibility", url: "https://www.adexchanger.com/ai/iabs-new-advice-on-how-to-measure-ai-search-visibility/" },
      { title: "PPC Land — Only 16% of brands track AI visibility as IAB sets measurement standard", url: "https://ppc.land/only-16-of-brands-track-ai-visibility-as-iab-sets-measurement-standard/" },
      { title: "Marketing Dive — As AI reshapes brand visibility, IAB attempts to clean up measurement", url: "https://www.marketingdive.com/news/iab-shares-playbook-for-measuring-brand-visibility-in-ai-powered-platforms/826830/" },
    ],
};
