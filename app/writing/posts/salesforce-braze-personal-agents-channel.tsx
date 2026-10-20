import type { Post } from "./types";

export const post: Post = {
  slug: "salesforce-braze-personal-agents-channel",
  title: "Salesforce paid $5.66 billion to reach your customers at the right moment. It also listed their AI agents as a channel.",
  date: "Oct 20, 2026",
  readTime: "4 min",
  tag: "Future of Ads",
  color: "from-violet-700 to-orange-500",
  tldr: "Salesforce agreed on October 20 to buy Braze for about $5.66 billion in cash, a 58% premium. On the investor call, Patrick Stokes listed personal agents as a channel alongside SMS and WhatsApp. Braze's value has been timing: reaching a distracted person at the right moment. An agent doesn't get distracted and reads every offer, and Braze's own survey projects agent use for brand interactions going from 19% to 46% of consumers by the end of 2026. The asset that holds up is Braze's SDK, sitting inside 2,789 brands' apps and recording what happens there. If you're renewing Braze or Marketing Cloud, ask whether you can publish offers an agent can read and whether the decisioning model knows when it's talking to software.",
  content: (
    <div className="prose-content">
      <p>
        On October 20, Salesforce agreed to buy Braze for about $5.66 billion in cash, $47.50 a share, roughly{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://thenextweb.com/news/salesforce-to-buy-marketing-platform-braze-for-5-7bn">58% above Monday&rsquo;s close</a>. Most of the coverage stopped at the premium and the overlap with Marketing Cloud.
      </p>
      <p>
        The line I&rsquo;d circle came on the investor call. Patrick Stokes, who runs applications and marketing at Salesforce, said the deal is about engaging consumers in real time across apps, the web, email, SMS, WhatsApp and{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://finance.yahoo.com/technology/ai/articles/salesforce-buy-braze-5-66b-140217976.html">personal agents</a>.
      </p>
      <p>
        Personal agents. Listed right next to SMS. That&rsquo;s your customer&rsquo;s own AI, the one rebooking the flight and reordering the dog food, and Salesforce called it a channel on day one.
      </p>
      <p>
        At Zeta Global, Braze competed with parts of what I sold. We were probably in some of the same pitches and never knew it. Everyone in that category sells a version of the same promise: you know the customer, and you reach them at the right moment.
      </p>
      <h2>Braze sells timing</h2>
      <p>
        Stokes said it in the{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.sec.gov/Archives/edgar/data/1108524/000119312526425881/d516983dex991.htm">press release</a>: most of the wow comes from knowing your customer and responding at just the right moment. Braze&rsquo;s{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.businesswire.com/news/home/20250930440783/en">decisioning agents</a>{" "}
        pick the channel, message, creative, offer and frequency for each person. It&rsquo;s a machine built around someone who ignores most of what you send and opens the one that shows up while the train is late.
      </p>
      <p>
        Salesforce paid about{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.marketbeat.com/instant-alerts/event-salesforce-to-buy-braze-for-566b-expanding-real-time-ai-marketing-2026-10-20/">five times Braze&rsquo;s expected fiscal 2028 revenue</a>{" "}
        for that machine.
      </p>
      <h2>An agent doesn&rsquo;t have a 7:40</h2>
      <p>
        A personal agent doesn&rsquo;t get bored. It doesn&rsquo;t see a push notification at a bad time and swipe it away. It reads your offer, the fine print and your competitor&rsquo;s offer, then does what its owner told it to do. Picking the perfect send time for a bot is like dressing up for a phone call.
      </p>
      <p>
        Braze saw this coming. Its{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.braze.com/press-releases/the-2026-braze-customer-engagement-review-ai-innovation-meets-the-trust-plateau">2026 Customer Engagement Review</a>{" "}
        predicted &ldquo;bot-to-bot&rdquo; engagement and projected the share of consumers using agents for brand interactions would go from 19% to 46% by the end of this year. The same survey found 35% of consumers want agents so they can negotiate better deals. Your customers are telling you the agent&rsquo;s job is to get a discount out of you.
      </p>
      <p>
        In January, Braze&rsquo;s CFO told a Needham conference the company was{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.marketbeat.com/instant-alerts/braze-highlights-chatgpt-sdk-agent-console-and-ai-personalization-push-at-needham-conference-2026-01-14/">preparing for ChatGPT</a>{" "}
        to grow into a broader platform for customer-brand engagement. I made a similar point about{" "}
        <a href="/writing/iab-openproposal-agents-read-every-proposal">the IAB&rsquo;s OpenProposal spec</a>: once agents do the reading, every proposal gets read, and the relationship that used to win the meeting counts for less.
      </p>
      <h2>What Salesforce bought that still works</h2>
      <p>
        The same CFO named Braze&rsquo;s moat as its stream-processing foundation and the SDK embedded in native apps. That SDK is the piece I&rsquo;d pay for. It sits inside apps like Canva, Instacart, Equinox and Venmo and records what people do as they do it. Agents still have to buy somewhere, and when one checks out inside a brand&rsquo;s app, the SDK still sees it happen.
      </p>
      <p>
        So the $5.66 billion buys two different things. One is a live feed of customer behavior across{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://secure.businesswire.com/news/home/20260908586699/en/Braze-Reports-Strong-Fiscal-Second-Quarter-2027-Results">2,789 brands</a>, and it keeps its value no matter who&rsquo;s shopping. The other is a layer that decides when to buzz someone&rsquo;s phone, and it was tuned for a reader who&rsquo;s starting to send a bot instead.
      </p>
      <p>
        Braze has already wired up the marketer&rsquo;s side. At Forge, three weeks before the deal, it let marketers{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.cmswire.com/customer-experience/why-is-salesforce-buying-braze-and-what-happens-to-marketing-cloud/">build campaigns from Claude, ChatGPT and Copilot</a>. That&rsquo;s the brand&rsquo;s agent talking to Braze. Salesforce&rsquo;s own channel list says the customer&rsquo;s agent is next.
      </p>
      <h2>If you buy or sell this stuff</h2>
      <p>
        If you&rsquo;re renewing Braze or Marketing Cloud in the next year, ask your rep two things. Can you publish offers in a format an agent can read and compare? Does the decisioning model know when it&rsquo;s talking to software? If the answer is a roadmap slide, write down the date on it.
      </p>
      <p>
        If you sell against either one, those two questions are your first meeting.
      </p>
      <p>
        Braze published this year&rsquo;s review on February 24. If next year&rsquo;s lands on a similar schedule, it&rsquo;ll show whether that 46% showed up, and Braze will probably still be reporting as an independent company. The deal isn&rsquo;t expected to close until Salesforce&rsquo;s fiscal 2028, which starts February 1.
      </p>
    </div>
  ),
  sources: [
    { title: "Salesforce: Salesforce Signs Definitive Agreement to Acquire Braze, 8-K Exhibit 99.1 (Oct 20, 2026)", url: "https://www.sec.gov/Archives/edgar/data/1108524/000119312526425881/d516983dex991.htm" },
    { title: "Yahoo Finance: Salesforce to Buy Braze for $5.66B, Expanding Real-Time AI Marketing (Oct 20, 2026)", url: "https://finance.yahoo.com/technology/ai/articles/salesforce-buy-braze-5-66b-140217976.html" },
    { title: "MarketBeat: Salesforce to Buy Braze for $5.66B, investor webinar (Oct 20, 2026)", url: "https://www.marketbeat.com/instant-alerts/event-salesforce-to-buy-braze-for-566b-expanding-real-time-ai-marketing-2026-10-20/" },
    { title: "The Next Web: Salesforce agrees $5.7bn deal for customer messaging firm Braze (Oct 20, 2026)", url: "https://thenextweb.com/news/salesforce-to-buy-marketing-platform-braze-for-5-7bn" },
    { title: "Braze: The 2026 Braze Customer Engagement Review (Feb 24, 2026)", url: "https://www.braze.com/press-releases/the-2026-braze-customer-engagement-review-ai-innovation-meets-the-trust-plateau" },
    { title: "MarketBeat: Braze highlights ChatGPT SDK and Agent Console at Needham conference (Jan 14, 2026)", url: "https://www.marketbeat.com/instant-alerts/braze-highlights-chatgpt-sdk-agent-console-and-ai-personalization-push-at-needham-conference-2026-01-14/" },
    { title: "Braze: Braze Reports Strong Fiscal Second Quarter 2027 Results (Sept 8, 2026)", url: "https://secure.businesswire.com/news/home/20260908586699/en/Braze-Reports-Strong-Fiscal-Second-Quarter-2027-Results" },
    { title: "Braze: BrazeAI Agent Console and Decisioning Studio agents (Sept 30, 2025)", url: "https://www.businesswire.com/news/home/20250930440783/en" },
    { title: "CMSWire: Why Is Salesforce Buying Braze, and What Happens to Marketing Cloud? (Oct 20, 2026)", url: "https://www.cmswire.com/customer-experience/why-is-salesforce-buying-braze-and-what-happens-to-marketing-cloud/" },
  ],
};
