import type { ReactNode } from "react";
import type { Post } from "./types";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export const post: Post = {
    slug: "vibe-code-objection-month-three",
    title: "Your prospect thinks they can vibe-code your product. Here's month three of mine.",
    date: "Nov 23, 2026",
    readTime: "3 min",
    tag: "Builds",
    color: "from-teal-700 to-amber-500",
    tldr: "In a July report from Fullcast, 65% of nearly 100 senior revenue operators said they had postponed a software purchase because they thought they could build it faster with AI. They’re half right. I built Campsite Ranger with Claude Code in seven weeks of nights and weekends, and the build was the cheap part. Month three has been a payments migration, a privacy policy rewrite and a suspended phone account. If a prospect tells you they’ll build it, ask who owns it in month three.",
    content: (
      <div className="prose-content">
        <p>
          “We’ll just build it” used to be a stall. Now it’s a plan, and the buyer saying it has probably shipped a prototype over a weekend to prove it. <A href="https://www.fullcast.com/ebooks/builder-buyer-both-ebook/">Fullcast’s July report</A>{" "}found that 65% of the nearly 100 senior revenue operators it surveyed had already postponed a software purchase for exactly that reason. I read it in <A href="https://www.gotomarketalliance.com/the-vibe-coding-question-every-gtm-stack-now-has-to-answer/">a GTM Alliance write-up</A>{" "}from Oct 28, a piece the site marks as sponsored.
        </p>
        <p>
          I get it. I’m one of those people.
        </p>

        <h2>They’re right about the first part</h2>
        <p>
          Campsite Ranger emails you when a cancellation opens up at a sold-out Colorado campsite. I built it with Claude Code on nights and weekends: more than 300 commits in seven weeks, live Aug 27, and more than 590 since. It has over 600 users now, more than 100 of them paying. I wrote up <a href="/writing/campsite-ranger-two-months-after-launch">the first two months</a>{" "}in October.
        </p>
        <p>
          So when a buyer says AI makes building fast, I don’t argue. It does. I’d be a hypocrite with a GitHub history.
        </p>

        <h2>Month three</h2>
        <p>
          The prototype never had a checkout bug. The live product had one on day two. A paying customer’s money came through, found no account to attach to, and switched nothing on. I fixed it by hand, then fixed the cause the same day. Nobody demos the part where you email a customer to apologize for your own code.
        </p>
        <p>
          On Oct 20, Twilio suspended the account that sends Campsite Ranger’s text alerts because the balance ran out. Text alerts are a paid feature. No prototype I’ve ever built came with a phone bill.
        </p>
        <p>
          Two days later I rewrote the privacy policy and terms so campsite alerts and membership emails became separate switches. On Nov 21 the beta ended and I repriced: one free watch stays free, and members pay $35 a year for everything else.
        </p>
        <p>
          Then the big one. On Nov 16, Lemon Squeezy, the company that runs my checkout, said it <A href="https://www.lemonsqueezy.com/blog/saying-goodbye-to-lemon-squeezy">stops processing payments on March 31, 2027</A>. Its migration tools open Dec 2. It says most migrations take four to eight weeks and recommends starting by mid-January. I didn’t pick that deadline, and I can’t ship around it. Every subscription I sell between now and then is one more customer I have to move without breaking their renewal.
        </p>

        <h2>What I’d ask on the call</h2>
        <p>
          Don’t fight the objection. Agree with it, then ask two questions. Who owns this in month three? What happens when one of the vendors under it shuts down?
        </p>
        <p>
          GTM Alliance’s own advice lands in the same place: keep systems of record bought, and build only what runs on your own data, with a named owner. It also cites UserGems putting retraining alone at 15% to 30% ongoing overhead on top of the original build. I don’t have a number for my own month three, but that range doesn’t surprise me.
        </p>

        <h2>When they should build</h2>
        <p>
          Some of it should be built. Lead scoring on your own data, routing rules, an internal tool three people use. A seller who says so earns the right to be believed about the rest.
        </p>
        <p>
          Campsite Ranger is worth maintaining because it’s the product. For most of your buyers, the thing they’re tempted to build is a tool next to the product. Ask them which one it is.
        </p>
        <p>
          Lemon Squeezy stops processing payments on March 31, 2027, so I’ll be migrating by then. Before your next call with a prospect who plans to build, find out whether their build has a date like that on it, and who will be holding it.
        </p>
      </div>
    ),
    sources: [
      { title: "Fullcast: Builder, Buyer, or Both? How RevOps leaders are navigating build vs. buy in the age of AI (July 2026 report)", url: "https://www.fullcast.com/ebooks/builder-buyer-both-ebook/" },
      { title: "GTM Alliance: The vibe-coding question every GTM stack now has to answer (Oct 28, 2026, marked sponsored)", url: "https://www.gotomarketalliance.com/the-vibe-coding-question-every-gtm-stack-now-has-to-answer/" },
      { title: "Lemon Squeezy: Saying goodbye to Lemon Squeezy (Nov 2026)", url: "https://www.lemonsqueezy.com/blog/saying-goodbye-to-lemon-squeezy" },
    ],
};
