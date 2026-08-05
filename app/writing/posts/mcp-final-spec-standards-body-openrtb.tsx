import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "mcp-final-spec-standards-body-openrtb",
    title: "The most important AI document this week is a deprecation policy",
    date: "Jul 30, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-emerald-700 to-slate-600",
    tldr: "The Model Context Protocol published its final 2026-07-28 specification on Tuesday, the largest revision since launch. Every writeup is a migration guide: the initialize handshake is gone, session IDs are gone, Roots and Sampling and Logging are deprecated. Three things in the release have nothing to do with code. A formal deprecation policy gives every feature an Active, Deprecated, Removed lifecycle with at least twelve months between deprecation and any removal. A public conformance suite now gates whether a proposal can reach Final status, and scores official SDKs. And MCP Apps, the flagship new extension, was co-authored by Anthropic, OpenAI and the community MCP-UI maintainers. Anthropic donated MCP to the Linux Foundation in December, where it anchors the Agentic AI Foundation alongside Block's goose and OpenAI's AGENTS.md, backed by Google, Microsoft, AWS, Cloudflare and Bloomberg. I watched advertising do this in 2010 and 2011, when direct competitors agreed on OpenRTB and the IAB adopted it in January 2012. Integration stopped being a reason to pick a vendor, margin compressed on the companies whose product was the connection, and value concentrated with whoever held unique data or real demand. MCP Apps complicates the story I told on July 15: servers can render interactive UI back inside Claude and ChatGPT, but on the host's terms, with templates security-reviewed up front and every action routed through the host's consent path. If you sell software that plugs into an assistant, find out which spec version you conform to and whether you pass the suite, then stop selling the integration. If you buy, the twelve-month deprecation window is a procurement answer you didn't have in April.",
    content: (
      <div className="prose-content">
        <p>
          The Model Context Protocol published its final <code>2026-07-28</code> specification on Tuesday, the largest revision since it launched. Every writeup I could find is a migration guide: what breaks, how to move off sessions, which SDK to upgrade. Fair enough. The release deletes the <code>initialize</code> handshake, removes the session ID header, and deprecates three core features on the way to a stateless protocol.
        </p>
        <p>
          Three other things shipped that have nothing to do with code.
        </p>
        <p>
          A formal deprecation policy, giving every feature an Active, Deprecated and Removed lifecycle, with a minimum of twelve months between deprecation and the earliest possible removal. A public conformance suite, which a Standards Track proposal now has to satisfy before it can reach Final status, and which official SDKs get scored against under a new tier system. And MCP Apps, the release&rsquo;s flagship extension, co-authored by Anthropic, OpenAI and the maintainers of the community MCP-UI project.
        </p>
        <p>
          Anthropic and OpenAI wrote a standard together, and attached a warranty to it. None of that happened in a vacuum: Anthropic donated MCP to the Linux Foundation last December, where it anchors the new Agentic AI Foundation alongside Block&rsquo;s goose and OpenAI&rsquo;s AGENTS.md, with Google, Microsoft, AWS, Cloudflare and Bloomberg signed on. The companies competing hardest in AI have agreed on a plug and handed a standards body the keys.
        </p>
        <h2>I watched this happen to advertising</h2>
        <p>
          In December 2010, a group of ad tech companies published OpenRTB 1.0. Buy-side firms like DataXu and [X+1] sat down with sell-side companies like Nexage, PubMatic and Smaato, all of them competing for the same dollars, and agreed on what a bid request should look like. Version 2.0 unified display, video and mobile in June 2011. The IAB made it an official standard in January 2012.
        </p>
        <p>
          I was at Crispin Porter + Bogusky then, and I can tell you precisely how much attention that spec got inside an agency. None. Nobody read it. It was a document for engineers at companies we bought from, filed under things that were not our problem. A couple of years later, the media planners who used to pick sites for a living had different job titles, and a large share of the value in the supply chain had moved somewhere else.
        </p>
        <p>
          The sequence is worth remembering because it repeats. First, integration stopped being a reason to choose a vendor, because everyone spoke the protocol and buyers could verify it. Then the number of counterparties exploded, since connecting got cheap. Margin compressed hardest on the companies in the middle, the ones whose actual product was the connection. And the money settled at the two ends: whoever held data nobody else had, and whoever controlled real demand.
        </p>
        <p>
          Standardization also did something the trade press underrated at the time. It made the whole system auditable, and auditability is what let the large, cautious budgets in. That part is coming here too, and it&rsquo;s mostly good news.
        </p>
        <h2>&ldquo;We have an MCP integration&rdquo; is about to stop selling</h2>
        <p>
          Until this week, an MCP integration was a legitimate differentiator. You&rsquo;d built one, your competitor hadn&rsquo;t, and the buyer had no practical way to judge whose was better. A public conformance suite ends that argument. So does an SDK tier system that scores implementations against the same tests. When a buyer can look up whether you conform, conformance becomes a floor.
        </p>
        <p>
          On <Link href="/writing/sales-stack-inside-the-assistant" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">July 15 I wrote that ZoomInfo, Clay and Gong had kept their data and given up their interface</Link>, and that the renewal argument becomes the quality of what you feed the assistant. This release sharpens that. There are thousands of public MCP servers now. A connection is not scarce. A connection to something nobody else has is the entire remaining case.
        </p>
        <p>
          So the slide has to change. If your differentiation section still says you integrate with ChatGPT and Claude, you are describing a floor your competitor also meets, in a document your buyer will fact-check against a public test suite. Say what comes through the pipe instead, and why it can&rsquo;t come through anyone else&rsquo;s.
        </p>
        <h2>MCP Apps hands the interface back, on the host&rsquo;s terms</h2>
        <p>
          Two things can be true, and my July piece needs a correction. MCP Apps lets a server ship interactive HTML that the assistant renders in a sandboxed iframe: charts, forms, dashboards, a real surface inside Claude or ChatGPT. The interface isn&rsquo;t gone after all. Vendors get one back.
        </p>
        <p>
          Read the conditions, though. Tools declare their UI templates ahead of time so the host can prefetch, cache and security-review them before anything renders. Every action the rendered UI takes goes back over the same JSON-RPC path as a direct tool call, through the same audit and consent flow. You get a storefront in somebody else&rsquo;s mall, and the mall reads every receipt.
        </p>
        <p>
          That is still worth having, and I&rsquo;d take it. It restores product experience as something you can compete on, which looked dead six weeks ago. What it doesn&rsquo;t restore is control. Your interface now renders at the discretion of a host that also sells competing capabilities, under a security review you don&rsquo;t administer. Asana users reportedly move faster on project updates through MCP Apps because they stop switching windows, which is a real gain and also a reminder of whose window they stopped leaving.
        </p>
        <h2>Two questions to have answers for</h2>
        <p>
          If you sell software that plugs into an assistant, find out today which spec version you target and whether you pass the conformance suite. That is now a question with a checkable answer, and the first time a buyer asks it in a bake-off is a bad time to learn yours. Then take the integration off the differentiation slide and put it in the requirements table where it belongs.
        </p>
        <p>
          If you buy, the deprecation policy is the most useful paragraph in the release and nobody has told you about it. Twelve months of written notice before a capability can disappear is a continuity commitment you did not have in April, and it is the kind of thing that belongs in your next security review next to the questions you already ask about model availability. Ask your AI vendors which spec version they build against, and what their plan is when it moves.
        </p>
        <p>
          I never read the OpenRTB spec. The people who did read it went on to build the companies that took our media budgets.
        </p>
      </div>
    ),
    sources: [
      { title: "Model Context Protocol — The 2026-07-28 MCP Specification (spec finalized July 28, 2026)", url: "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/" },
      { title: "Linux Foundation — Formation of the Agentic AI Foundation, anchored by MCP, goose and AGENTS.md (December 2025)", url: "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" },
      { title: "GitHub Blog — MCP joins the Linux Foundation: what this means for developers", url: "https://github.blog/open-source/maintainers/mcp-joins-the-linux-foundation-what-this-means-for-developers-building-the-next-era-of-ai-tools-and-agents/" },
      { title: "IAB Tech Lab — OpenRTB standards and version history", url: "https://iabtechlab.com/standards/openrtb/" },
      { title: "The Register — Claude supports MCP Apps, presents UI within chat window (January 26, 2026)", url: "https://theregister.com/2026/01/26/claude_mcp_apps_arrives" },
    ],
};
