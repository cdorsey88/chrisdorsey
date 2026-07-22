import type { Post } from "./types";

export const post: Post = {
    slug: "publicis-liveramp-acquisition",
    title: "Publicis bought LiveRamp for $2.2B, and with it the identity layer of the open internet",
    date: "May 18, 2026",
    readTime: "7 min",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "Publicis is paying $2.167B for LiveRamp — a 29.8% premium for the connectivity layer underneath modern programmatic. The bigger question it raises is about identity independence across the open internet, including how UID2 is governed. Brands have three things to do this week before close.",
    content: (
      <div className="prose-content">
        <p>
          <a href="https://liveramp.com/news/publicis-to-acquire-liveramp-to-accelerate-data-co-creation-for-smarter-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Press release</a>{" "}landed Tuesday morning. Publicis is paying $2.167 billion in cash for LiveRamp &mdash; $38.50 a
          share, 29.8% premium over Monday&apos;s close. By the time my second coffee was cold, three brand-side clients
          had texted me some version of the same question: should we be worried?
        </p>
        <p>
          Yes. But probably not for the reason most of the coverage is suggesting.
        </p>
        <p>
          Most of what I&apos;ve read so far treats this as another holdco land grab &mdash; Publicis stocking up on
          AI-era plumbing the same way they bought Epsilon in 2019 for $4.4B and Profiles a year ago. That framing isn&apos;t
          wrong. It&apos;s just incomplete. The second-order effect here is much bigger than the deal itself.
        </p>

        <h2>What Publicis actually bought</h2>
        <p>
          LiveRamp is not a CDP, and it is not really a &ldquo;data collaboration platform&rdquo; in the way the press
          release wants you to read it. What Publicis paid $2.2B for is the connectivity layer between data owners and
          the media supply chain &mdash; the RampID graph, the clean-room infrastructure, the integrations that sit
          between every major retailer&apos;s first-party data and the rest of the open internet.
        </p>
        <p>
          That is the substrate underneath modern programmatic. Publicis just bought the rails.
        </p>
        <p>
          Combine that with Epsilon, Profiles, and CoreAI &mdash; all already owned &mdash; and Publicis isn&apos;t a
          holding company anymore. They are a vertically integrated data and media operating system that happens to
          also own some agencies.
        </p>

        <h2>The bigger shift is about who controls &ldquo;independent&rdquo; identity</h2>
        <p>
          Here is the read I have not seen anyone make yet, and the one I think matters most.
        </p>
        <p>
          The Trade Desk&apos;s identity strategy for the last four years has been Unified ID 2.0 &mdash; the open-source
          alternative to walled-garden identity. UID2 was supposed to be the neutral standard for the open web. RampID
          was the named competitor. The pitch to brands was: choose UID2 if you want neutrality, RampID if you&apos;re
          already inside the LiveRamp ecosystem.
        </p>
        <p>
          As of yesterday, RampID is a Publicis-owned asset. Every brand running media through Publicis is now
          structurally incentivized to favor RampID over UID2. That is not a neutral identity standard anymore. That
          is an agency holdco&apos;s proprietary identity graph wearing the costume of an open standard.
        </p>
        <p>
          The Trade Desk stock didn&apos;t move much on the news, but the questions this raises are real: brands are
          about to start asking whether their open-web ID strategy is sitting on top of a competitor&apos;s asset.
        </p>

        <h2>What brands should do this week</h2>
        <p>
          If you have meaningful media spend running through LiveRamp &mdash; and statistically you almost certainly
          do &mdash; three things to put in motion this week:
        </p>
        <p>
          First, map your exposure. Pull every contract where LiveRamp is a critical dependency: identity resolution,
          clean-room infrastructure, audience activation. Know what is load-bearing before close.
        </p>
        <p>
          Second, ask the LiveRamp account team about data portability post-close. Specifically: if a non-Publicis
          agency runs your media in 2027, can you take your audiences with you? Get the answer in writing now, while
          LiveRamp still has the incentive to retain you as a standalone enterprise customer.
        </p>
        <p>
          Third, get a written position from your non-Publicis agency. If WPP, the Omnicom-IPG combination, Dentsu, or
          your independent shop is running your buy, ask them in writing how they plan to use LiveRamp-dependent
          assets in 2026 and 2027. You will find out very quickly whether they have an actual plan or whether they are
          quietly hoping nobody asks.
        </p>

        <h2>The thing nobody is saying out loud</h2>
        <p>
          Independent adtech as a category did not die yesterday. It died a long time ago. Yesterday Publicis just
          hammered in the last nail &mdash; using the matched bookend of the same hammer they used on Epsilon six years
          ago. Acxiom sits inside IPG, now merged with Omnicom. LiveRamp sits inside Publicis. Profiles sits inside
          Publicis. Experian&apos;s marketing services arm is technically still independent and is probably making the
          next round of phone calls.
        </p>
        <p>
          The &ldquo;open&rdquo; internet has had its identity infrastructure quietly consolidated under three or four
          owners. There is no neutral middle anymore. There hasn&apos;t been for a while. Yesterday just made it
          impossible to keep pretending.
        </p>
        <p>
          If you are a brand, your job this quarter is to figure out what that means for your media plan. If you are a
          vendor selling into adtech, your job is to figure out which side of the consolidation you are on. And if you
          are The Trade Desk, your job is to come up with a much better answer to the question every CMO is about to
          ask: is UID2 actually independent anymore? Because the entire pitch deck got rewritten Tuesday morning,
          whether you wanted it to or not.
        </p>
      </div>
    ),
};
