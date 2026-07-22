import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "ai-fake-influencers-verified-humans",
    title: "A content farm can make 1,200 fake influencers a day",
    date: "Jul 22, 2026",
    readTime: "5 min",
    tag: "Brands",
    color: "from-purple-700 to-pink-500",
    tldr: "A New York Times investigation found hundreds of AI-generated avatars posing as doctors, naturopaths and wellness influencers across TikTok, Facebook and Instagram: fake diplomas, claims that herbal capsules beat prescription medication for kidney disease, targeting that skews toward older women. One supplement, Rosabella moringa, was sold almost entirely through TikTok Shop by unlabeled AI personas and ended up in an FDA Salmonella recall. Chinese content agencies produce as many as 1,200 of these videos a day for the US market, and no federal law restricts synthetic people in advertising. The coverage frames it as consumer harm, which it is. It is also a supply-side event in the channel brands are scaling into: creator-driven commerce, where the ad, the endorser and the checkout have collapsed into one video. Programmatic ran this experiment with bot traffic a decade ago, and the market's answer was a verification industry — Moat, IAS, DoubleVerify — selling proof that a human saw the ad. The sequel is proof a human made the ad. That hands employee-creator programs like Starbucks' Green Apron Creators a second rationale: provenance. If you buy creator media, get synthetic-content labeling and human verification into the insertion order. If you sell it, verification is part of the pitch now, the way viewability was in 2016.",
    content: (
      <div className="prose-content">
        <p>
          The New York Times spent months tracking hundreds of AI-generated avatars posing as doctors, naturopaths and wellness influencers across TikTok, Facebook and Instagram. The characters have fake diplomas on the wall, American flags in the yard, and medical advice in the script: herbal capsules that outperform prescription medication for kidney disease, &ldquo;age-reversing secrets&rdquo; from silver-haired women who do not exist. The targeting skews toward older women with real health problems.
        </p>
        <p>
          One product tells the whole story. Rosabella moringa capsules were marketed almost entirely through TikTok Shop by a rotating cast of unlabeled AI personas, different faces on the same synthetic voice. The FDA and CDC linked the capsules to a Salmonella recall. The influencers who sold them cannot be deposed and cannot be embarrassed, and they reposted the next day wearing new faces. Chinese content agencies produce as many as 1,200 of these videos a day for the US market, and no federal law restricts synthetic people in advertising.
        </p>
        <p>
          The Times framed all this as consumer harm, which it is. The same reporting also describes a supply-side event in the channel nearly every consumer brand is scaling into: creator-driven commerce, where the ad, the endorser and the checkout have collapsed into one video.
        </p>
        <h2>Programmatic already ran this experiment</h2>
        <p>
          I sold ad tech through the bot-traffic years. In the mid-2010s programmatic was the fast, cheap, exploding channel, and a meaningful share of its &ldquo;audience&rdquo; turned out to be servers in a data center clicking on one another; the Methbot operation alone was estimated to be stealing $3 to $5 million a day at its peak. Advertisers did not abandon the channel. They demanded referees, and an entire verification industry got built to sell proof that a human saw the ad. Moat went to Oracle for a reported $850 million. IAS and DoubleVerify went public.
        </p>
        <p>
          The fraud has now moved one seat over. Bot traffic faked the audience; this wave fakes the endorser. And the closed loop that makes TikTok Shop attractive to brands makes the problem heavier, because a synthetic influencer isn&rsquo;t skimming an impression fee, it is selling product with a checkout attached. When the ad completes the sale, fake advertising stops being a media-quality problem and becomes a product-safety problem, with an FDA recall to prove it.
        </p>
        <h2>Verified humans just became premium inventory</h2>
        <p>
          Three weeks ago I wrote about{" "}
          <Link href="/writing/starbucks-green-apron-creators-employee-influencers" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Starbucks paying baristas to make TikToks</Link>, and the argument was about comp and reach. This investigation adds a second rationale that may end up mattering more: provenance. A Green Apron creator has a name, a store, a manager and a work history. In a feed filling with synthetic nutritionists, a verifiable employee is the one endorser a shopper can confirm exists. Expect &ldquo;verified human&rdquo; to become a labeled, targetable, priced attribute on creator platforms, because every previous trust crisis in advertising ended with somebody selling the trust back as a product.
        </p>
        <p>
          If you buy creator media, get synthetic-content terms into the insertion order now: what the platform labels, what share of Shop content is AI-generated, and whether your spend can be restricted to verified humans. If you run a brand, make your real ambassadors easy to verify, with names, faces and workplaces a customer can check, because provenance only pays if shoppers can see it. And if you sell creator or commerce media, verification just became part of your pitch, the way viewability was in 2016.
        </p>
        <p>
          The moringa capsules got recalled. The influencers who sold them were back the next morning with new faces. That is the supply you are bidding against.
        </p>
      </div>
    ),
    sources: [
      { title: "The New York Times — AI-generated 'wellness influencers' investigation (July 2026, video)", url: "https://www.tiktok.com/@nytimes/video/7664945707240983821" },
      { title: "TechStartups (citing NYT) — AI-generated fake influencers flood social media with misleading wellness supplement ads (July 21, 2026)", url: "https://techstartups.com/2026/07/21/top-tech-news-today-july-21-2026-anthropic-blackrock-tesla/" },
      { title: "The Star (NYT syndication) — An Amish avatar and an AI monk are pitching supplements on social media (March 2026)", url: "https://www.thestar.com.my/tech/tech-news/2026/03/10/an-amish-avatar-and-an-ai-monk-are-pitching-supplements-on-social-media" },
      { title: "Media Matters — Scammers seem to be using deepfake and AI-generated influencers on TikTok to sell wellness products", url: "https://www.mediamatters.org/tiktok/scammers-seem-be-using-deepfake-and-ai-generated-influencers-tiktok-sell-you-wellness" },
    ],
};
