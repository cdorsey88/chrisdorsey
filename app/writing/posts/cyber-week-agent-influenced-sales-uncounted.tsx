import type { Post } from "./types";

export const post: Post = {
  slug: "cyber-week-agent-influenced-sales-uncounted",
  title: "Salesforce says AI and agents will influence $75.8 billion of Cyber Week. It doesn't say how many orders an agent paid for.",
  date: "Nov 23, 2026",
  readTime: "4 min",
  tag: "Retail Media",
  color: "from-rose-500 to-orange-500",
  tldr: "Salesforce forecasts that AI and agents will influence $75.8 billion of Cyber Week sales, 21% of a $357 billion global total, and that AI-driven traffic to retailer sites will rise 104%. The forecast doesn't say how that influence is measured or how many orders an agent completed. Talkdesk surveyed 1,048 US holiday shoppers in September: 74% plan to use AI assistants, and 15% would let an agent buy with their payment details, or 10% if there's no review step. Amazon's shopping agent shows sponsored products among the options it texts back, and Digiday reports that purchases the agent makes on its own will stay ad-free. So the number that decides how much holiday inventory can carry an ad is the share of orders an agent completes, and neither forecast publishes it. Cyber Monday is November 30, so check whether either company's results count it.",
  content: (
    <div className="prose-content">
      <p>
        Salesforce <a href="https://www.salesforce.com/news/?p=96868" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">published its Cyber Week forecast</a>{" "}on November 19. It puts global online sales for the seven days starting Tuesday at $357 billion, up 6%. Salesforce expects AI and agents to influence $75.8 billion of that, or 21%, up 13% from $67 billion last year, and AI-driven traffic to retailer sites to rise 104%.
      </p>

      <p>
        The release doesn&rsquo;t say how it measures influence, and it gives no count of orders an agent completed. The one agent-purchase figure in it comes from a consumer survey, where 8% of consumers say an agent has made a purchase for them. Adobe&rsquo;s <a href="https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">holiday forecast from September 28</a>{" "}measures something else: AI-referred traffic is up 130%, counted by shoppers clicking a link. That counts visits, and the release gives no purchase count.
      </p>

      <h2>
        What shoppers told Talkdesk
      </h2>

      <p>
        Talkdesk <a href="https://www.talkdesk.com/news-and-press/press-releases/2026-holiday-shopping-survey/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">surveyed 1,048 US holiday shoppers</a>{" "}through Centiment in September. 74% plan to use AI assistants this season. Only 15% would let an AI agent buy with their payment details after reviewing the transaction, and 10% would with no review step. Of the 312 retail decision-makers in the same study, 89% say they&rsquo;re preparing for agents that shop on a customer&rsquo;s behalf.
      </p>

      <p>
        Most shoppers want help finding things, and fewer want to hand over the card. Retailers are building for the second group anyway.
      </p>

      <h2>
        Where the ad goes
      </h2>

      <p>
        Digiday <a href="https://digiday.com/media-buying/amazons-shopping-agent-now-takes-orders-by-text-with-sponsored-product-ads-in-the-replies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">reported on November 6</a>{" "}that Amazon&rsquo;s shopping agent shows Sponsored Products among the options it texts back while a customer is looking around, free to advertisers for the time being. Purchases the agent makes on its own will stay ad-free. That follows from how the ad works. It needs a person looking at options, and an order an agent places from a rule the shopper set last week has nobody looking.
      </p>

      <p>
        So each order lands in one of two buckets. In one, a person saw options and an ad could have been in the mix. In the other, an agent bought and no ad had a place to go. Retail media gets sold on the first bucket, and AI-influenced sales as a headline number doesn&rsquo;t tell you how big either one is.
      </p>

      <h2>
        A count a buyer can check
      </h2>

      <p>
        At Zeta, an AI customer-acquisition pilot with no budget line grew from $200K to more than $1M on performance, and performance means a count the buyer can check. Retail media buyers should ask for the same thing in January. When a network reports holiday results, ask for the split between orders where a shopper saw an ad and orders an agent completed.
      </p>

      <p>
        Cyber Monday is November 30. When Adobe and Salesforce publish their results, check whether either one counts the orders an agent paid for.
      </p>
    </div>
  ),
  sources: [
    { title: "Salesforce: 2026 Cyber Week forecast (Nov 19, 2026)", url: "https://www.salesforce.com/news/?p=96868" },
    { title: "Adobe: US holiday shopping season to hit record (Sep 28, 2026)", url: "https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record" },
    { title: "Talkdesk: 2026 holiday shopping survey (Nov 4, 2026)", url: "https://www.talkdesk.com/news-and-press/press-releases/2026-holiday-shopping-survey/" },
    { title: "Digiday: Amazon's shopping agent now takes orders by text, with sponsored product ads in the replies (Nov 6, 2026)", url: "https://digiday.com/media-buying/amazons-shopping-agent-now-takes-orders-by-text-with-sponsored-product-ads-in-the-replies/" },
  ],
};
