import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "cloudflare-ai-crawler-defaults-brand-content",
    title: "Cloudflare’s new crawler defaults don’t touch most brand-owned content",
    date: "Aug 25, 2026",
    readTime: "6 min",
    tag: "MadTech",
    color: "from-indigo-800 to-amber-500",
    tldr: "On September 15, Cloudflare will start blocking Training and Agent crawlers by default on any page that carries ads, while Search crawlers stay allowed by default; the change applies as new domains onboard to a network Cloudflare says carries more than half of all web traffic. The same month, the Wall Street Journal reported that USA Today, Politico, Reuters and People Inc. are each weighing whether to block Google’s crawlers outright, after some publishers lost more than 40% of search traffic between June 2025 and June 2026 on Semrush data; Reddit is reevaluating a $60 million-a-year Google licensing deal, and Penske Media already sued Google over AI Overviews last year. USA Today CEO Mike Reed described the logic plainly: publishers with a licensing deal get crawled, everyone else gets blocked. Every one of those fights is about pages that carry ads, because that is the population Cloudflare’s new default targets and the population publishers monetize. Most brand-owned content, meaning blog posts, comparison pages, documentation and buying guides, doesn’t run third-party ads, so it sits outside the fight and stays open to the same crawlers by default. As the ad-funded web gets harder for AI answer engines to reach, whatever a brand already publishes on its own domain becomes a larger share of what is left to crawl and cite, without anyone touching a robots.txt file. The catch: any brand property that does carry ad script inherits the same default block, opting itself out of AI citations without anyone deciding to.",
    content: (
      <div className="prose-content">
        <p>
          Cloudflare is changing its default settings on September 15. For any page that carries ads, the network will block Training and Agent crawlers automatically, while Search crawlers stay allowed by default. Cloudflare describes an ad as a signal that a site owner wants a person to land on the page and see something monetizable, so on those pages it now keeps out the bots that compete with human attention for advertisers. The default doesn&rsquo;t touch pages without ads on them at all.
        </p>
        <p>
          That single word, ads, ends up doing most of the work in this story, because it splits the entire fight over AI crawlers into two populations that are getting treated completely differently, and almost nobody writing about the fight has said so.
        </p>
        <h2>The publisher fight is entirely about pages that carry ads</h2>
        <p>
          The Wall Street Journal reported this summer that USA Today, Politico, Reuters and People Inc. are each weighing whether to block Google&rsquo;s crawlers outright, on top of whatever Cloudflare changes by default. Some publishers lost more than 40% of their Google search traffic between June 2025 and June 2026, per Semrush data cited by the Journal, while The Guardian and the BBC gained. Reddit is reevaluating a $60 million-a-year licensing deal with Google. Penske Media sued Google over AI Overviews last year, arguing the feature repackages Rolling Stone and Variety journalism without permission.
        </p>
        <p>
          USA Today CEO Mike Reed put the logic in the plainest terms I&rsquo;ve seen from any publisher executive: &ldquo;For those with licensing agreements, they get our content. For those without, we block them.&rdquo; That is a company treating crawl access as inventory to be sold, which is exactly what it is once your page has ads on it and your traffic is the product.
        </p>
        <p>
          Every name on that list runs an ad-supported page. Cloudflare&rsquo;s new default and the publishers&rsquo; own blocking decisions are reactions to the same fact: an ad-monetized pageview is worth less once an AI answer replaces the click. Nobody is fighting over whether to let crawlers onto a page with no ad on it, because until this month there wasn&rsquo;t much reason to.
        </p>
        <h2>Most brand content was never part of this fight</h2>
        <p>
          Company blog posts, product comparison pages, documentation sites and buying guides mostly carry no third-party ad script. They exist to get found and read. Under Cloudflare&rsquo;s new default, none of that falls into the category getting blocked on September 15, and none of it is part of the licensing fight USA Today just picked with Google.
        </p>
        <p>
          As more of the ad-monetized web either gets blocked by Cloudflare&rsquo;s default or blocks itself on purpose, the pool of pages an AI answer engine can reach for a given question shrinks on the publisher side and stays exactly the same size on the brand side. Nobody has to win a negotiating position with Google for that to happen. It happens automatically, as a side effect of who is fighting and who isn&rsquo;t.
        </p>
        <p>
          I spent a stretch of my career on the AI-visibility side of this problem, and the part that never quite made it into the trade coverage is how much of citation share is decided by what&rsquo;s reachable at all, before you get anywhere near what&rsquo;s well-written or well-linked. I&rsquo;ve written before that{" "}
          <Link href="/writing/geo-citations-google-rankings-diverge" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            a page&rsquo;s AI citation rate and its Google ranking are already answering two different questions
          </Link>
          . This is the same mechanic one level up: the answer engines can only cite what they can still crawl, and the publisher fight is shrinking one side of that pool while leaving the other untouched.
        </p>
        <h2>The exception is the brand property that runs ads</h2>
        <p>
          Some brand-owned content isn&rsquo;t exempt at all. A media arm, a content hub monetized with programmatic display, a blog running a retargeting pixel through an ad network: all of that carries the same ad signal Cloudflare is now using to trigger the block, whether or not anyone on the marketing team thinks of it as a publisher. If your content sits on Cloudflare and carries even one ad script, you inherit the September 15 default along with every news site making headlines this month.
        </p>
        <p>
          That makes this a bigger decision than it looks. Running a single display unit on a blog to cover hosting costs could quietly opt that content out of AI citations the day the default flips, with no announcement and no vote.
        </p>
        <h2>Check your own pages before September 15</h2>
        <p>
          If you run brand content on Cloudflare, go find out which of your pages carry any ad script, not just the ones your team thinks of as monetized. For anything that does, decide on purpose whether you want the September 15 default or want to override it in your Content Signals settings. For everything that doesn&rsquo;t carry ads, you don&rsquo;t need to do anything to benefit from this, which is a strange position to be in during a month when an entire industry is renegotiating its relationship with Google over exactly this kind of access.
        </p>
      </div>
    ),
    sources: [
      { title: "Cloudflare — Content Independence Day: no AI crawl without compensation!", url: "https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/" },
      { title: "Cloudflare — Your site, your rules: new AI traffic options for all customers", url: "https://blog.cloudflare.com/content-independence-day-ai-options/" },
      { title: "Nieman Lab — Search traffic has declined so much that some publishers are considering opting out of Google entirely (Neel Dhanesha, Jul 22, 2026)", url: "https://www.niemanlab.org/2026/07/search-traffic-has-declined-so-much-that-some-publishers-are-considering-opting-out-of-google-entirely/" },
      { title: "Wall Street Journal — Search traffic decline pushes publishers toward blocking Google", url: "https://www.wsj.com/business/media/google-search-publishers-ai-content-0fb06e41" },
      { title: "Digiday — From lawsuits to lobbying: How publishers are fighting AI (Jessica Davies)", url: "https://digiday.com/media/from-lawsuits-to-lobbying-how-publishers-are-fighting-ai/" },
      { title: "Axios — Penske Media sues Google over AI Overviews (Sep 14, 2025)", url: "https://www.axios.com/2025/09/14/penske-media-sues-google-ai" },
    ],
};
