import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "sales-stack-inside-the-assistant",
    title: "Gong is a Microsoft SKU now, and ZoomInfo lives inside Claude",
    date: "Jul 15, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-teal-700 to-sky-500",
    tldr: "Between June 2 and July 1, ZoomInfo made its GTM Context Graph natively available in OpenAI's Codex for Work and shipped a Claude connector, Clay put its MCP live in Claude and ChatGPT so reps can run full enrichment workflows from a chat prompt, and Gong became a transactable offer in the Microsoft Marketplace, buyable under an existing Microsoft agreement and delivered inside Copilot, Dynamics 365 and Teams. Three of the biggest names in sales tech moved their products into somebody else's window, voluntarily, while growing. Two shifts are happening at once: the interface is dissolving into the assistant, and the purchase is moving inside pre-committed cloud budget. When nobody opens your UI, the renewal argument becomes the quality of what you feed the assistant, and seat pricing stops describing how the product is consumed. If you run a revenue org, audit which tools your reps now touch only through an assistant and reprice the renewal around records and workflows instead of seats. If you sell sales tech, get the marketplace listing and the connector story ready, because asking for net-new budget against a rival who draws down a commit is the losing position.",
    content: (
      <div className="prose-content">
        <p>
          On June 2, OpenAI announced that ZoomInfo&rsquo;s GTM Context Graph &mdash; identity-resolved records on more than 100 million companies and 500 million contacts &mdash; is natively available inside Codex for Work. Three days later, ZoomInfo shipped a connector that puts the same data inside Claude. Clay&rsquo;s MCP is live in Claude and ChatGPT, so a rep can run a full enrichment workflow from a chat prompt without ever opening Clay. And on July 1, Gong became a transactable offer in the Microsoft Marketplace: bought under the Microsoft agreement your company already signed, with its deal and conversation insight delivered inside Copilot, Dynamics 365 and Teams.
        </p>
        <p>
          Four announcements, five weeks, three of the biggest names in sales tech. Each one moved its product into somebody else&rsquo;s window.
        </p>
        <h2>The login was the moat until about a month ago</h2>
        <p>
          For a decade, sales tech competed for the rep&rsquo;s screen. The tab you kept open was the product. Usage reports counted logins, logins justified seats, and seats were the renewal. Every vendor deck had a version of the same slide: we become your team&rsquo;s operating system.
        </p>
        <p>
          Now look at what these three just did. ZoomInfo hands verified records to a rep inside Claude who never visits a ZoomInfo screen. Clay&rsquo;s ops-built workflows fire from ChatGPT, with permissioning and credit budgets, so the rep never touches the table view. Gong&rsquo;s insight surfaces inside Copilot and Teams. In each case the vendor kept the data and the workflow logic and gave up the interface. Voluntarily, and from strength: Gong is past $500 million in ARR and growing more than 55% a year. This is the strongest player in its category choosing the channel, not a struggling one grasping for distribution.
        </p>
        <p>
          I sold data at Oracle for years, into Amazon, J&amp;J and PepsiCo, and one lesson from that era holds up: the data products that grew were the ones that showed up where the buyer already worked. The ones that made you come to their dashboard got politely admired and then unplugged. A UI is a rental. Records, signals and workflow logic are the asset, and the sales-tech incumbents just repriced themselves accordingly.
        </p>
        <h2>The purchase is moving inside the Microsoft agreement</h2>
        <p>
          The Gong announcement carries a second shift that has nothing to do with interfaces. As a marketplace offer, Gong can now be bought with money your company already committed to Microsoft &mdash; the Enterprise Agreement, the Azure spend the CFO signed two years ago. In June I wrote about{" "}
          <Link href="/writing/openai-oracle-credits-cloud-commit" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">OpenAI taking Oracle credits</Link>: AI purchases increasingly draw down pre-committed cloud budget instead of arriving as net-new line items. Revenue AI just joined that list.
        </p>
        <p>
          If you sell sales tech, that changes the buying moment more than any feature war. The bake-off still matters, but the structural position matters more: their offer draws down a commit your buyer already signed, yours needs fresh budget and a full procurement review. The expensive option at any price, as I put it then. Expect a line of vendors to file into AppSource and the AWS and Google marketplaces behind Gong, because the alternative is asking for new money in a year when nobody has any.
        </p>
        <h2>When nobody opens your UI, the renewal argument is the data</h2>
        <p>
          Inside a chat window, every vendor&rsquo;s output looks identical: text in a reply. The rep can&rsquo;t see your interface polish, your onboarding flow or your Chrome extension, because none of it renders. What&rsquo;s left to compete on is whether the answer was right. ZoomInfo leans on the word &ldquo;verified&rdquo; in nearly every sentence of both announcements, and that emphasis reads the new game correctly: wrong data and right data look the same in a chat reply until six weeks later, when the deal built on the wrong one dies.
        </p>
        <p>
          Seat pricing has the same problem. A seat priced the screen. When the screen goes away and the product becomes a connector the whole team hits through one assistant, per-seat math stops describing anything real. Clay charging through credit budgets inside ChatGPT is the preview:{" "}
          <Link href="/writing/end-of-per-seat-pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">consumption pricing follows the connector</Link> the way it followed the cloud.
        </p>
        <h2>Two audits worth running this month</h2>
        <p>
          If you run a revenue org, list the tools your reps now touch only through an assistant. You are probably paying twice: seats for screens nobody opens, plus the assistant that replaced them. That&rsquo;s no reason to rip anything out, since the records and workflows still earn their keep. But it is the right frame for the renewal: pay for the data and the logic, stop paying for the furniture.
        </p>
        <p>
          If you sell sales tech, or any software that lives one layer below an assistant, run the harder audit. What does your renewal deck say when the usage report shows logins down 60 percent while the value delivered went up? If the answer still leans on the dashboard, you have about two quarters to build a better one. Gong didn&rsquo;t wait for a shrinking usage report to force the move; it walked into Microsoft&rsquo;s marketplace at $500 million in ARR, while the numbers were still pointing up. Make the move while you still get to choose it.
        </p>
      </div>
    ),
    sources: [
      { title: "Gong — Gong partnering with Microsoft to enable enterprises to automate workflows, act faster, and win more revenue with AI (July 1, 2026)", url: "https://www.gong.io/press/gong-partnering-with-microsoft-to-enable-enterprises-to-automate-workflows-act-faster-and-win-more-revenue-with-ai" },
      { title: "Business Wire — OpenAI Announces Native Availability of ZoomInfo's GTM Context Graph, GTM.AI, in Codex for Work (June 2, 2026)", url: "https://www.businesswire.com/news/home/20260602139627/en/OpenAI-Announces-Native-Availability-of-ZoomInfos-GTM-Context-Graph-GTM.AI-in-Codex-for-Work" },
      { title: "Business Wire — Claude Now Enabled by ZoomInfo's GTM Context Graph, Powered by GTM.AI (June 5, 2026)", url: "https://www.businesswire.com/news/home/20260605707107/en/Claude-Now-Enabled-by-ZoomInfos-GTM-Context-Graph-Powered-by-GTM.AI" },
      { title: "Clay — Clay MCP: Prospect target accounts in ChatGPT and Claude", url: "https://www.clay.com/mcp" },
    ],
};
