import type { Post } from "./types";

export const post: Post = {
  slug: "iab-openproposal-agents-read-every-proposal",
  title: "Media buyers read 10 to 20 proposals per campaign. The IAB wants an agent to read all of them.",
  date: "Sep 25, 2026",
  readTime: "4 min",
  tag: "Future of Ads",
  color: "from-violet-700 to-orange-500",
  tldr: "IAB Tech Lab published AAMP 3.0 on September 22 with OpenProposal, a draft standard that turns a seller's RFP response into a machine-readable object a buying agent can compare against hundreds of others. Comments close October 22. Tech Lab's own blog says media teams evaluate 10 to 20 publisher proposals per campaign while hundreds go unread, and blames over-reliance on familiar relationships. Those relationships are how mid-sized sellers win. The long tail, including the 80-plus U.S. retail media networks nobody has time to read, gets into the comparison for the first time. If you sell media, try filling out the Proposal object for your best package this week and see which fields you can't complete.",
  content: (
    <div className="prose-content">
      <p>
        IAB Tech Lab{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://iabtechlab.com/press-releases/iab-tech-lab-introduces-aamp-3-0-with-openproposal/">published AAMP 3.0</a>{" "}
        on Monday. The new piece is OpenProposal, a draft standard for the part of a media buy that has never been automated: the stretch between a buyer&rsquo;s brief and a signed order. CEO Anthony Katsur: &ldquo;OpenProposal fills a major gap between a buyer&rsquo;s brief and a buy commitment, giving buyer and seller agents a standardized way to exchange and evaluate opportunities.&rdquo; Comments are open on{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/issues/11">GitHub</a>{" "}
        until October 22. You don&rsquo;t need to be a Tech Lab member, just an account.
      </p>
      <p>
        The{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/blob/v3.0-draft-1/spec/openproposal-3.0.md">spec</a>{" "}
        defines a Proposal object and a list of line items. Each line item carries a pricing array, committed metrics, a shortfall remedy, availability, and a buying route that maps to OpenDirect, the Deals API or OpenRTB. The Proposal itself has fields called <em>best_for</em> and <em>not_suitable_for</em>. I&rsquo;ve been in advertising fifteen years and have never seen a seller fill in <em>not_suitable_for</em> voluntarily.
      </p>

      <h2>The relationship is now listed as the problem</h2>
      <p>
        At Crispin Porter + Bogusky, an RFP response was a creative product. At Oracle Advertising, the deck was the product, and we won when someone on our side knew what the buyer&rsquo;s boss needed to see. Tech Lab&rsquo;s{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://iabtechlab.com/bringing-agentic-advertising-into-media-planning-with-openproposal/">launch blog</a>{" "}
        names that exact thing. Media teams evaluate 10 to 20 publisher proposals per campaign, it says, while hundreds go unconsidered, and the cause is &ldquo;over-reliance on familiar relationships.&rdquo; That is the seller&rsquo;s edge, written up as a defect.
      </p>
      <p>
        If you buy media, look at it from the other side. Your agency&rsquo;s planners cannot read 300 proposals, so they read the 15 from people they know, and you pay for the planner&rsquo;s contact list as if it were analysis. An agent that reads all 300 against the same fields is cheaper and probably better. PMG&rsquo;s Mike Treon, quoted in the release, said &ldquo;the reasoning travels with the proposal.&rdquo; WPP Media is in the release too. The walled gardens already skipped this step inside their own walls: Google shipped agentic planning at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://blog.google/products/ads-commerce/google-marketing-live-2026-collection/">Marketing Live in May</a>, Amazon&rsquo;s Ads Agent is in beta with a{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://advertising.amazon.com/library/news/unboxed-toronto-2026">median 18% CPM reduction</a>, and Meta is{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.adweek.com/media/meta-wants-brands-to-create-ads-using-ai-by-end-of-2026/">reportedly targeting</a>{" "}
        fully automated ad creation by the end of this year. OpenProposal is the open market trying to keep up.
      </p>

      <h2>The long tail gets read. The middle loses the dinner.</h2>
      <p>
        Who wins: sellers who never got the meeting. Mimbi counts{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.mimbi.io/retail-media-networks-list/retail-media-networks-usa">more than 80 U.S. commerce media networks</a>, and eMarketer puts Amazon at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.emarketer.com/content/faq-on-retail-media-networks-how-marketers-should-allocate-budgets-2026">roughly 80% of a $71 billion market</a>. Most of those networks are the hundreds that go unread. A compliant Proposal object puts a regional grocer&rsquo;s network in the same table as Walmart&rsquo;s for the first time. I{" "}
        <a href="/writing/ana-retail-media-measurement-long-tail">argued last month</a>{" "}
        that the ANA&rsquo;s new measurement rules are hardest on the networks that just launched. This spec cuts the other way, and it&rsquo;s the first thing this year that does.
      </p>
      <p>
        Who loses: the mid-sized seller who wins on the relationship. The agent doesn&rsquo;t take the call, doesn&rsquo;t come to the dinner, and has a field for shortfall remedy where your handshake used to be. The proposal still has to persuade. It now has to persuade a reader that doesn&rsquo;t remember you.
      </p>
      <p>
        It is a draft. Nothing is ratified, Tech Lab&rsquo;s agent registry had{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://ppc.land/iab-tech-labs-agent-registry-hits-10-with-amazon-and-new-deployment-types/">ten entries in March</a>, and I could not find a single retail media network that has signed on. Standards bodies write plenty of specs that publishers ignore until a big buyer makes them a requirement. WPP Media being in the press release is how that usually starts.
      </p>

      <h2>What to do before October 22</h2>
      <p>
        If you sell media, open the spec, take your best package, and try to fill out one Proposal object for it. Note the fields you can&rsquo;t complete without fudging. Those are the parts of your pitch that were a relationship. Then leave a comment, because the thread right now is mostly buyers and platforms, and the sellers who show up get to argue about what <em>committed_metrics</em> should mean.
      </p>
      <p>
        If you run a retail media network, your joint business plan packages need to become line items with committed metrics and a stated remedy when you miss. That is a bigger change than the spec makes it sound, and most networks will find out about it when an agency&rsquo;s agent can&rsquo;t read them.
      </p>
      <p>
        The spec has a field for everything a seller used to say over lunch. Comments close October 22.
      </p>
    </div>
  ),
  sources: [
    { title: "IAB Tech Lab: Introduces AAMP 3.0 with OpenProposal (Sept 22, 2026)", url: "https://iabtechlab.com/press-releases/iab-tech-lab-introduces-aamp-3-0-with-openproposal/" },
    { title: "IAB Tech Lab: OpenProposal 3.0 draft specification (GitHub)", url: "https://github.com/IABTechLab/OpenProposal/blob/v3.0-draft-1/spec/openproposal-3.0.md" },
    { title: "IAB Tech Lab: OpenProposal public comment thread (GitHub)", url: "https://github.com/IABTechLab/OpenProposal/issues/11" },
    { title: "IAB Tech Lab blog: Bringing agentic advertising into media planning with OpenProposal (Sept 22, 2026)", url: "https://iabtechlab.com/bringing-agentic-advertising-into-media-planning-with-openproposal/" },
    { title: "Adweek: Meta wants brands to create ads using AI by end of 2026 (Jun 2025)", url: "https://www.adweek.com/media/meta-wants-brands-to-create-ads-using-ai-by-end-of-2026/" },
    { title: "MediaPost: Tech Lab proposes RFP-to-buy process for agentic ads, seeks comment (Sept 22, 2026)", url: "https://www.mediapost.com/publications/article/418182/tech-lab-proposes-rfp-to-buy-process-for-agentic-a.html" },
    { title: "Google: Google Marketing Live 2026 announcements (May 20, 2026)", url: "https://blog.google/products/ads-commerce/google-marketing-live-2026-collection/" },
    { title: "Amazon Ads: unBoxed Toronto 2026 announcements, Ads Agent beta", url: "https://advertising.amazon.com/library/news/unboxed-toronto-2026" },
    { title: "Mimbi: U.S. retail media networks list", url: "https://www.mimbi.io/retail-media-networks-list/retail-media-networks-usa" },
    { title: "eMarketer: FAQ on retail media networks and 2026 budget allocation", url: "https://www.emarketer.com/content/faq-on-retail-media-networks-how-marketers-should-allocate-budgets-2026" },
    { title: "ppc.land: IAB Tech Lab's agent registry hits 10 with Amazon (Mar 11, 2026)", url: "https://ppc.land/iab-tech-labs-agent-registry-hits-10-with-amazon-and-new-deployment-types/" },
  ],
};
