import type { Post } from "./types";

export const post: Post = {
    slug: "chatgpt-ad-destination-is-an-agent",
    title: "Your next ad's landing page is a conversation somebody has to staff",
    date: "Aug 4, 2026",
    readTime: "6 min",
    tag: "Future of Ads",
    color: "from-violet-700 to-cyan-500",
    tldr: "Anu Adegbola at Search Engine Land reported July 31 that OpenAI is testing a ChatGPT ad format that opens a conversation with the advertiser's own AI agent instead of sending the shopper to a website. AdExchanger picked it up Monday. In the same stretch OpenAI published its advertising credit terms: 90-day expiry, no stacking with other discounts, OpenAI's discretion over which fees qualify and whether credits get revoked. Amazon supplied the proof the format converts, with Andy Jassy telling analysts July 31 that shoppers using Sponsored Prompts in Alexa+ convert 48% more often and spend 21% more. The format works. It also moves the answering, the liability and the staffing onto the advertiser while the money still sits in a media line. Before you buy it, decide which team owns what the agent says about price, stock and returns, then go look at your product feed, because it just became your creative.",
    content: (
      <div className="prose-content">
        <p>
          Anu Adegbola at Search Engine Land reported on July 31 that OpenAI is testing an ad format in ChatGPT where the click doesn&rsquo;t end at a website. It opens a conversation with the advertiser&rsquo;s own AI agent, inside the chat, running on the advertiser&rsquo;s data feed. AdExchanger carried it Monday. This was found in the product rather than announced from a stage, so hold it loosely. Tests die all the time.
        </p>
        <p>
          What makes it worth reading now is that Amazon published the numbers for something close enough to serve as a preview. In its Q2 results on July 31, Amazon reported $19.8 billion in ad revenue, up 26%. Andy Jassy told analysts that shoppers who used Sponsored Prompts in Alexa+ and Alexa for Shopping converted 48% more often and spent 21% more on average. Its Ads Agent tool cut campaign setup from hours to minutes while delivering 8% lower cost per impression and 6% lower cost per acquisition.
        </p>
        <p>
          So the conversational ad converts, and it converts by a margin that will move budget. The question OpenAI&rsquo;s test raises is what you need to have ready on the other side of that click.
        </p>
        <h2>A media buy that answers questions is a support queue</h2>
        <p>
          A landing page is something you ship once and test against a variant. An agent is something that answers, in your brand&rsquo;s voice, at two in the morning, about price, stock, lead time, shipping windows, return policy, and whether the product works with the thing the shopper already owns. Someone has to decide what it may say. Someone has to be accountable when it quotes a number that turns out to be wrong. In most companies neither of those people reports to whoever bought the media.
        </p>
        <p>
          At Zeta I sold an AI customer acquisition product into brands that had no budget line for it yet. The technology objection was almost never what stalled a deal. What stalled deals was org design. Marketing held the budget, the outcome landed on sales or service, and no single person could sign without a second meeting that nobody had scheduled. This format walks straight into that same room, with a shorter fuse, because the media is bookable before the operating model exists.
        </p>
        <h2>Your product feed just became your creative</h2>
        <p>
          OpenAI has been building toward this in public. It added product feed ads to ChatGPT earlier this year, and the agent format reportedly runs on advertiser feeds. Which means feed quality stops being a merchandising chore and starts determining whether your ad can answer a question at all. Wrong price in the feed and the agent quotes the wrong price to a buyer who is one message from checkout. No stock field and the agent either guesses or stalls. At most brands I have sold into, the feed is maintained part-time by one person who inherited it from someone who left.
        </p>
        <p>
          Creative review boards spend six weeks on a thirty-second spot and zero minutes on the file that will now be doing the talking.
        </p>
        <h2>Read the credit terms before you plan a quarter around them</h2>
        <p>
          OpenAI also published formal policies for advertising credits this week. Credits expire after 90 days. They can&rsquo;t be combined with other discounts. OpenAI decides which fees they apply to and reserves the right to revoke them. None of that is unusual for a platform in its first year of selling ads, and both Google and Meta ran versions of the same terms early on. It is worth knowing before a media plan gets built on credits that can be pulled.
        </p>
        <p>
          Two things can be true. This is a better experience for a shopper who wants an answer rather than a page full of navigation, and it is a transfer of labor and risk from the platform to the advertiser with no matching transfer of budget. Amazon&rsquo;s 48% lift is the argument for saying yes. The staffing question is the reason to say yes with a plan.
        </p>
        <p>
          Try this before you commit a dollar to it. Write down the ten questions your buyers ask most often before they purchase, then try to answer all ten using only what is in your current product feed. Whatever you cannot answer, an agent built on that feed cannot answer either. That gap is the media plan.
        </p>
      </div>
    ),
    sources: [
      { title: "Search Engine Land — OpenAI appears to be building chatbot-native ads that launch AI agents (July 31, 2026)", url: "https://searchengineland.com/" },
      { title: "AdExchanger — Tokenizing Tokens; In OpenAI We Trust? (Aug 3, 2026)", url: "https://www.adexchanger.com/daily-news-roundup/monday-03082026/" },
      { title: "About Amazon — Q2 earnings: CEO Andy Jassy on what's driving Amazon Ads growth (July 31, 2026)", url: "https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-amazon-ads-growth-q2-2026-earnings" },
      { title: "Variety — Amazon Q2 ad revenue up 26% as profit booms to $62.6 billion", url: "https://variety.com/2026/digital/news/amazon-ad-sales-q2-profit-62-billion-anthropic-1236824567/" },
      { title: "Search Engine Land — OpenAI adds product feed ads to ChatGPT", url: "https://searchengineland.com/openai-adds-product-feed-ads-to-chatgpt-477208" },
    ],
};
