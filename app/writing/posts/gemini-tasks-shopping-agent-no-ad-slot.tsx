import type { Post } from "./types";

export const post: Post = {
    slug: "gemini-tasks-shopping-agent-no-ad-slot",
    title: "Google's free shopping agent shipped with Visa, Mastercard and no ad slot",
    date: "Nov 18, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-amber-500 to-rose-600",
    tldr: "On November 17, Google made Tasks in Gemini free to hundreds of millions of users in six countries. It can call businesses and buy products through Google's Agent Payments Protocol, with a hard spending cap and an \"Always allow\" setting that skips the confirmation step. Google's announcement doesn't mention sponsored results. Eleven days earlier, Amazon let invited US customers text its shopping agent, which can buy automatically when a product hits a price the customer set. Retail media is priced on a shopper seeing an ad, and these agents act on rules the shopper set days earlier. If you sell retail media, find out what an agent sees when it queries your catalog, and start pricing that.",
    content: (
      <div className="prose-content">
        <p>
          On November 17, Google <a href="https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">made Tasks in Gemini free</a> for &ldquo;hundreds of millions&rdquo; of users in the US, Japan, Korea, Canada, Australia and India. Tasks can book appointments, call businesses (Google&rsquo;s example has it phoning two car dealerships at once) and buy things. Purchases run on Google&rsquo;s Agent Payments Protocol with Visa and Mastercard, American Express is &ldquo;coming soon,&rdquo; and receipts land in Google Wallet. Users can set a hard spending cap. Gemini asks before it clicks Buy unless the user turns on &ldquo;Always allow.&rdquo;
        </p>
        <p>
          The coverage treats this as a convenience and security story, and Google&rsquo;s post gives a lot of space to isolated virtual machines and prompt-injection filters. It gives none to ads. Sponsored results don&rsquo;t come up anywhere in the announcement.
        </p>
        <h2>
          Amazon went first, with ads
        </h2>
        <p>
          On November 6, Amazon <a href="https://thenextweb.com/news/amazon-alexa-for-shopping-text-message-agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">started letting invited US customers text</a> a contact called Alexa Shopping. It tracks prices, handles reorders and can buy automatically once a product hits a price the customer set. The Next Web, citing Digiday, reported that sponsored products can appear in the replies and are free to advertisers for now. <a href="https://ppc.land/amazons-alexa-for-shopping-takes-orders-by-text-invite-only-for-now/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">PPC Land reported</a> that Amazon hadn&rsquo;t said whether ads would appear in the conversations.
        </p>
        <p>
          So the two companies with the most shopping intent on the internet launched buying agents eleven days apart, and only one of them has shown where an ad might go.
        </p>
        <h2>
          The ad has to beat a rule
        </h2>
        <p>
          Retail media is priced on a person looking at a screen. A sponsored listing earns its money because a shopper sees it at the moment of choice. CPMs, CPCs and ROAS all assume that moment exists.
        </p>
        <p>
          Set a price target on Alexa, or turn on &ldquo;Always allow&rdquo; with a spending cap in Gemini, and the moment of choice moves. The shopper decided last Tuesday, when they set the rule, and the agent is carrying it out. A sponsored product in a text reply can still catch someone who&rsquo;s browsing. It has a much harder time with someone whose agent is waiting for one specific item to drop below $40.
        </p>
        <p>
          Most purchases won&rsquo;t run on autopilot anytime soon: Gemini asks for confirmation by default, and Amazon&rsquo;s text agent is still invite-only. But the purchases most likely to move to rules are the repeat ones, like groceries and household goods, where consumer packaged goods brands put a large share of their retail media money. Google&rsquo;s only named merchant in the launch post is Instacart.
        </p>
        <p>
          Nobody has worked out how to run a brand awareness campaign against a price alert yet, though I expect a deck about it by January.
        </p>
        <h2>
          What a retail media team can sell
        </h2>
        <p>
          Zeta&rsquo;s pitch when I was there was reaching the right person at the right moment with data about who they are. An agent working from a price rule doesn&rsquo;t need to be reached. It needs a product that qualifies.
        </p>
        <p>
          That points to a different product. An agent checks whether an item is eligible to buy, whether the price and stock data are current, and whether an offer applies. In Google&rsquo;s own example, Gemini compared chargers using the Shopping Graph and found a $10 discount code. A promotion an agent can find and apply is something a retail network can sell to a brand, and it&rsquo;s measured on completed orders, which is where retail media has always wanted to be measured anyway.
        </p>
        <p>
          Google says its Universal Commerce Protocol integration is &ldquo;up next,&rdquo; and that&rsquo;s the spec merchants will plug into.
        </p>
        <p>
          If you sell retail media, ask your product team what an agent sees when it queries your catalog, and price that before Google decides where its ad goes.
        </p>
      </div>
    ),
  sources: [
    { title: "Google: Tasks in Gemini, free with new features (Nov 17, 2026)", url: "https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/" },
    { title: "The Next Web: Amazon's Alexa for Shopping agent will now take your orders by text (Nov 6, 2026)", url: "https://thenextweb.com/news/amazon-alexa-for-shopping-text-message-agent" },
    { title: "PPC Land: Amazon's Alexa for Shopping takes orders by text, invite-only for now (Nov 7, 2026)", url: "https://ppc.land/amazons-alexa-for-shopping-takes-orders-by-text-invite-only-for-now/" },
  ],
};
