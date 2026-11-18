import type { Post } from "./types";

export const post: Post = {
    slug: "databricks-ai-index-enterprises-route-between-models",
    title: "Most enterprises now run AI the way they ran CDNs",
    date: "Nov 18, 2026",
    readTime: "5 min",
    tag: "AI",
    color: "from-cyan-500 to-blue-600",
    tldr: "On November 16, Databricks published the first edition of a weekly AI Index built from model traffic at more than 10,000 companies. The share of those companies relying on a single model provider fell from about 64% in July to 28% by November 2. Anthropic's token share rose to 68.8% over the same stretch, and open-weight models went from 7.3% of tokens to 30.9%. Most coverage went to the leaderboard, but for anyone selling or renewing an AI contract, the bigger change is that most enterprise accounts now sit behind a router that can move work between vendors any week. If you sell models, report your share of each account's traffic by workload, because that's the number your buyer is already watching.",
    content: (
      <div className="prose-content">
        <p>
          On November 16, Databricks <a href="https://www.databricks.com/blog/introducing-databricks-ai-index-state-enterprise-ai-tokenomics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">published the first edition of its AI Index</a>, a weekly read on how more than 10,000 companies use AI models through its Unity Gateway. The data runs from September 21 to November 7 and counts traffic to outside providers like Anthropic and OpenAI along with the open models companies host themselves. Spend is estimated at list prices, so treat the dollar figures as directional.
        </p>
        <p>
          Most of the coverage stopped at the leaderboard. Anthropic&rsquo;s share of tokens rose from 57.6% to 68.8% after Claude Opus 5.5 launched, and open-weight models from Zhipu, DeepSeek, Moonshot and others <a href="https://fourweekmba.com/ai-open-weight-ai-hits-31-of-enterprise-tokens-deepseek-rises/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">went from 7.3% of tokens in July to 30.9%</a> in November. Those are big moves.
        </p>
        <p>
          The same post says the share of companies relying on one model provider fell from about 64% in July to 28% by November 2. In four months, most of these accounts went from one vendor to several, with software in the middle deciding which model gets each request.
        </p>
        <h2>
          I&rsquo;ve sold into this setup before
        </h2>
        <p>
          Fastly sells a CDN, and big media and commerce customers commonly run two or three CDNs with traffic steering on top. That setup changes the seller&rsquo;s job. In a single-vendor account, the renewal is the event. You defend it once a year and the contract carries you in between. In a multi-CDN account, the customer can move a slice of traffic on a Tuesday afternoon because your latency slipped in one region or a competitor cut its rate on video. Your revenue is a share, and it moves every week.
        </p>
        <p>
          So the account team stops selling the platform and starts winning workloads. You learn which traffic you carry and why, which traffic you lost and why, and you go after the next slice with a specific reason: a region, a feature, a better price on one class of traffic.
        </p>
        <p>
          Two things can be true about a router in the account. It makes you easier to leave. It also makes you easier to try, because the customer can shift 10% of a workload to you without a procurement fight.
        </p>
        <h2>
          Price is only part of the routing
        </h2>
        <p>
          Databricks sells the gateway that does the switching, so it has a reason to show a lot of switching. Fair caveat. The rest of the index points the same way anyway. On Databricks&rsquo; own coding benchmark, GPT-6 Luna and Opus 5.5 both completed 89.1% of tasks, at an average of $0.05 a task for Luna and $1.62 for Opus 5.5. When two models tie on the result and differ more than 30x on cost, a buyer with a router will split the work.
        </p>
        <p>
          And yet Opus 5.5 gained share through the whole period. Buyers are routing on more than price. They&rsquo;re sending specific work to the model that handles it best, which helps a seller who can name the workloads they win and leaves the one who only knows the account total guessing.
        </p>
        <h2>
          The spend sits with a few people
        </h2>
        <p>
          Median user spend in the index is $2.49. The 99th percentile is $699.74, about 281 times higher. Inside a typical account, a small group of heavy users is running up most of the bill.
        </p>
        <p>
          Every expansion motion I&rsquo;ve run started by finding the people already using the product hardest and building the business case around their work. A 281x spread makes that group easy to find, and it&rsquo;s also the group a competitor will target first. If your QBR still opens with a total-tokens chart, assume the customer has a second chart showing the other vendors, and that one decides next month.
        </p>
        <h2>
          If you sell or buy models
        </h2>
        <p>
          If you sell, report share of traffic by workload, and know which workloads you&rsquo;ve lost and to whom. Build the expansion plan around the top 1% of users in each account, by name, with their workloads listed.
        </p>
        <p>
          If you buy, the 28% figure means most of your peers already have a router. If you don&rsquo;t, your next renewal has no live alternative on the table, and the vendor across from you knows it.
        </p>
        <p>
          Databricks says it will update the index weekly. Watch whether the single-provider share keeps falling below 28%, and whether Opus 5.5 holds its share once the next model ships.
        </p>
      </div>
    ),
  sources: [
    { title: "Databricks: Introducing the Databricks AI Index (Nov 16, 2026)", url: "https://www.databricks.com/blog/introducing-databricks-ai-index-state-enterprise-ai-tokenomics" },
    { title: "FourWeekMBA: Open-weight AI hits 31% of enterprise tokens (Nov 2026)", url: "https://fourweekmba.com/ai-open-weight-ai-hits-31-of-enterprise-tokens-deepseek-rises/" },
  ],
};
