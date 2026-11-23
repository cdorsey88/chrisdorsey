import type { Post } from "./types";

export const post: Post = {
  slug: "ads-mcp-servers-agent-permissions",
  title: "Amazon and Meta let an AI agent create ad campaigns. Google's server can't touch a budget.",
  date: "Nov 23, 2026",
  readTime: "3 min",
  tag: "Future of Ads",
  color: "from-indigo-500 to-violet-600",
  tldr: "Amazon opened its Ads MCP server to partners in open beta on February 2, and an agent connected to it can create, update and delete campaigns and pull billing data. Meta's server launched on July 16 with the same kind of access to campaigns, ad sets and ads, plus rules an advertiser can set to limit what an agent may touch. Google's documentation, last updated on November 19, says its server can read reports and create assets and labels, and that it can't create or change a campaign, budget or bid. It's the same protocol with three different answers to how much a buyer's agent gets to do. Whichever platform an advertiser's agent connects to decides what's left for a person on the account. Google's docs are at version 0.0.6, so check whether the next one lets an agent near a budget.",
  content: (
    <div className="prose-content">
      <p>
        Amazon, Meta and Google each run an MCP server for their ad platforms now. MCP is the protocol that lets an AI agent like Claude or ChatGPT use a company&rsquo;s tools directly, so an agent connected to one of these servers can read your results or change your campaigns, depending on what that platform decided to allow. The three platforms decided differently.
      </p>

      <h2>
        Amazon and Meta said yes
      </h2>

      <p>
        Amazon&rsquo;s server <a href="https://advertising.amazon.com/en-us/library/news/amazon-ads-mcp-server-open-beta/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">went into open beta on February 2</a>{" "}for Amazon Ads partners with active API credentials, worldwide. The announcement says agents can create, update and delete campaigns, run performance reports and reach billing and financial data, and it names Claude, ChatGPT and Gemini as agents that can connect. The one safeguard I found in the post is a review step: a generated Sponsored Products campaign launches after a person approves it.
      </p>

      <p>
        Meta&rsquo;s server <a href="https://developers.facebook.com/blog/post/2026/07/16/meta-ads-mcp-server/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">shipped on July 16</a>{" "}and can create, edit and delete campaigns, ad sets and ads, build custom audiences and pull results like ROAS. Meta also put limits in the product. An advertiser can write rules that give an agent read access to performance data and bar it from changing budgets, campaigns or creative, and a newer endpoint sets those rules across many accounts at once.
      </p>

      <h2>
        Google said yes to the small stuff
      </h2>

      <p>
        Google&rsquo;s server <a href="https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">reads account lists and reporting data</a>. It can create standalone assets like text, images and sitelinks, and it can manage labels. The documentation says it cannot create, modify, pause or enable campaigns, ad groups, ads, budgets or bids.
      </p>

      <p>
        Every change it can make is a dry run first. The server returns a list of the proposed changes and a checksum, and the agent has to repeat the call with that checksum to make the change real. The docs are careful to say the checksum catches mistakes and isn&rsquo;t access control. Labels are the first thing any agency would hand a robot, since nobody has ever been fired over a label.
      </p>

      <h2>
        My own version of this
      </h2>

      <p>
        I run eight scheduled agents around my sales job and Campsite Ranger, and I <a href="/writing/seller-who-builds-agents-on-my-calendar" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">wrote up the setup earlier this month</a>. Most of them research or draft, and a person ships what they make. One sends customer email on its own, and it earned that by passing a preflight the day before, with automatic stops for bounces and complaints. Anything that writes to production data or speaks for me somewhere new waits for me.
      </p>

      <p>
        Google&rsquo;s server works like my research agents: it can look at everything and change very little. Meta built the part I had to build myself, a rulebook the agent reads before it gets the keys. Amazon&rsquo;s announcement lists what the agent can do and has one review step, and I didn&rsquo;t see a permissions feature like Meta&rsquo;s in it.
      </p>

      <h2>
        What it means on an account
      </h2>

      <p>
        An agency that wants an agent to build and launch campaigns can do that on Amazon and Meta today. On Google, the agent can report and tag, and a person still builds the campaign and sets the budget. A pitch for agent-run media buying lands differently depending on which of those three the customer spends the most on.
      </p>

      <p>
        Google&rsquo;s documentation was at version 0.0.6 as of November 19. Check whether the next version lets an agent near a budget.
      </p>
    </div>
  ),
  sources: [
    { title: "Amazon Ads: Amazon Ads MCP server open beta (Feb 2, 2026)", url: "https://advertising.amazon.com/en-us/library/news/amazon-ads-mcp-server-open-beta/" },
    { title: "Meta for Developers: Meta Ads MCP server (Jul 16, 2026, updated Sep 22, 2026)", url: "https://developers.facebook.com/blog/post/2026/07/16/meta-ads-mcp-server/" },
    { title: "Google Ads API docs: MCP server (v0.0.6, updated Nov 19, 2026)", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" },
  ],
};
