import type { Post } from "./types";

export const post: Post = {
    slug: "ai-sdr-boom-revolving-door-churn",
    title: "The AI SDR boom is real. Retention is the test it has to pass.",
    date: "Jun 18, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-amber-600 to-rose-600",
    tldr: "AI SDR is a real, fast-growing category, but several vendors are wrestling with high first-year churn — largely because the tools get demoed on activity and judged on outcomes. When prospecting gets over-automated, reply rates can drop and raw volume masks it. The takeaway cuts both ways: if you buy one, write pilot criteria around converted pipeline, not meetings booked; if you sell one, anchor success on outcomes, not activity — that's what earns the renewal.",
    content: (
      <div className="prose-content">
        <p>
          The pitch for an AI SDR is the cleanest in software. Fire the expensive humans who keep missing
          quota, hire an agent that prospects around the clock for a fraction of the price. It worked. The
          category is worth billions. It also loses customers faster than almost anything else you can buy:{" "}
          <a href="https://prospeo.io/s/ai-bdr-agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">annual churn runs 50 to 70%</a>, and some tools are down most of their buyers
          inside three months. A market that grows that fast while leaking that hard is running on a
          treadmill. Much of the &ldquo;growth&rdquo; is the same seat sold to the next believer after the
          last one quit.
        </p>
        <p>
          The category keeps one number off its landing pages. When teams handed prospecting to the
          machines,{" "}
          <a href="https://salesmotion.io/blog/ai-sdrs-vs-human-sdrs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">reply rates didn&apos;t hold steady at a lower cost. They dropped, from about 2.1% with human reps to 1.3%</a>. Every individual touch got worse. Volume buried the evidence, because ten
          thousand mediocre emails still book a handful of meetings, and a dashboard full of activity feels
          like progress right up until the quarter closes and the pipeline isn&apos;t there.
        </p>

        <h2>Churn that was built in at the sale</h2>
        <p>
          The same trap waits for anyone selling AI, not just outbound tools. These products get demoed on
          activity: emails sent, meetings booked, pipeline &ldquo;sourced.&rdquo; Activity closes the deal,
          because activity is visible in week two. Nobody renews on activity. They renew on whether
          qualified pipeline turned into revenue, and that verdict doesn&apos;t land until two quarters
          later, long after the contract was signed on a number that never predicted it. The vendor tuned
          the demo to the metric that wins the sale and ignored the one that wins the renewal. The customer
          churns out feeling burned and can&apos;t quite say why.
        </p>
        <p>
          I learned this the expensive way. At Zeta I sold an AI customer-acquisition product into brands
          that didn&apos;t have a budget line for it yet, and the lesson that stuck was that the renewal is
          the sale that counts, and it&apos;s mostly won or lost in the first 90 days of production. Spend
          that quarter celebrating activity instead of standing up the one outcome the buyer&apos;s CFO
          actually counts, and the renewal is already gone. You just don&apos;t find out for nine months.
        </p>

        <h2>Make the vendor live on the metric that renews</h2>
        <p>
          Two things can be true: AI belongs in outbound, and most of the way it&apos;s sold today is a
          churn machine wearing a growth chart. The teams getting real value run a hybrid, where the agent
          carries volume and a human owns judgment, qualification, and the relationship, and those teams
          report more pipeline, not less. If you&apos;re buying, write your pilot&apos;s success criteria
          around converted, qualified pipeline, not meetings booked, and make the vendor live or die on it.
          If you&apos;re selling, refuse activity-based success criteria even when the buyer offers them,
          because the easy yes in month one is the expensive goodbye in month twelve. Win the metric that
          renews, and let the demo be the smallest promise you make.
        </p>
      </div>
    ),
    sources: [
      { title: "Prospeo — AI BDR Agent: What It Costs & Why Most Fail (2026 churn data)", url: "https://prospeo.io/s/ai-bdr-agent" },
      { title: "Salesmotion — AI SDRs vs Human SDRs: The Real ROI Comparison for 2026 (reply-rate and hybrid data)", url: "https://salesmotion.io/blog/ai-sdrs-vs-human-sdrs" },
      { title: "Madrona — Selling AI in 2026: Selling Is Easy, Staying In Is Everything (the renewal is decided early)", url: "https://www.madrona.com/enterprise-ai-sales-2026-selling-is-easy-staying-in-is-everything/" },
    ],
};
