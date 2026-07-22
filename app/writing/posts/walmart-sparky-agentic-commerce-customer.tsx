import type { Post } from "./types";

export const post: Post = {
    slug: "walmart-sparky-agentic-commerce-customer",
    title: "Walmart let ChatGPT and Gemini sell its products. It refused to let them own the customer.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-blue-600 to-cyan-500",
    tldr: "OpenAI's Instant Checkout promised native in-chat buying across Walmart, Shopify, and Etsy, then converted about three times worse than Walmart.com. Walmart pulled out and embedded its own Sparky agent inside ChatGPT and Gemini instead — and conversion climbed back to roughly 70% of its site rate. Walmart takes the platforms' reach while keeping its data, identity, and checkout. Amazon stays a walled garden; the AI platforms want to own the transaction; Walmart found a third path. If you sell commerce or retail-media tech, your pitch now has to answer who owns the customer after the agent. If you buy media, the shelf is becoming the agent's shortlist, and a new gatekeeper is forming.",
    content: (
      <div className="prose-content">
        <p>
          Agentic commerce was the buzzword everyone carried into 2026: AI agents that shop, compare, and check out for you. OpenAI planted the flag with{" "}
          <a href="https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Instant Checkout</a> &mdash; buy inside ChatGPT from Walmart, Shopify merchants, and Etsy sellers without leaving the chat. Walmart put roughly 200,000 products into it last November. Then the numbers came in. Conversion ran about three times lower than when shoppers clicked through to Walmart.com, partly because the flow forced single-item purchases, every recommendation its own order and its own box, and OpenAI hadn&apos;t even built sales-tax collection yet.
        </p>
        <p>
          So Walmart pulled OpenAI&apos;s checkout and put its own agent, Sparky, inside both ChatGPT and Google&apos;s Gemini instead, as a plugin where the platforms never touch the transaction.{" "}
          <a href="https://www.techbuzz.ai/articles/walmart-dumps-openai-checkout-plugs-sparky-into-chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Conversion climbed back to roughly 70% of Walmart.com&apos;s rate</a>, more than double what the platform-owned checkout managed. Walmart keeps the data, the identity, and the sale, and still shows up wherever the shopper&apos;s agent lives.
        </p>
        <h2>Three postures, and only one most brands can copy</h2>
        <p>
          There are now three ways to play this. Amazon runs a walled garden: its own agent, its own app, its own data. The AI platforms want the opposite, to own the checkout and the customer relationship across every merchant that plugs in. Walmart split the difference, borrowing the platforms&apos; distribution without handing over the customer. Amazon&apos;s posture takes scale most retailers don&apos;t have. The platforms&apos; posture turns you into a commodity SKU in someone else&apos;s funnel. Walmart&apos;s is the one a brand can actually imitate: present everywhere the agents are, without giving up the data and the customer that make it a relationship.
        </p>
        <p>
          That&apos;s the question every retailer now faces. When an agent stands between you and the shopper, who owns the customer? Rent that to the platform and you&apos;re one interchangeable option the agent ranks. Wall it off and you forfeit the reach. The move is to take the reach and keep the relationship.
        </p>
        <h2>If you sell</h2>
        <p>
          Whatever you sell into this &mdash; retail media, commerce tooling, the brand&apos;s own roadmap &mdash; the pitch that lands answers the new question directly: after the agent, who holds the customer and the data? &ldquo;We connect you to the AI apps&rdquo; is the floor, not the differentiator. Be inside the AI apps, but keep the customer data, the identity, and the checkout on the brand&apos;s side, and in the pitch, say plainly where that data lives, because that&apos;s the question buyers will actually press on.
        </p>
        <h2>If you buy</h2>
        <p>
          For the marketer, discovery is moving from the human&apos;s eyeballs to the agent&apos;s recommendation. Your retail-media dollars increasingly buy influence over what the agent surfaces and ranks, not just impressions a person scrolls past. Plan for two things. Getting recommended by the agent is the new shelf placement, and it rewards clean product data, reviews, and the sources the models trust, the same dynamic as showing up in an AI answer. And concentration risk: if most shoppers route through a couple of agent platforms, those platforms become the gatekeeper, with the pricing power and rule-making that follows. Anyone who built a demand engine on a platform they didn&apos;t control knows how that story tends to go.
        </p>
        <h2>The line worth holding</h2>
        <p>
          Walmart can dictate terms because it has the scale to be its own destination and the leverage to make OpenAI and Google take Sparky on Walmart&apos;s terms. Most brands have neither. So the move for everyone smaller is to decide now what you will never rent &mdash; customer identity, first-party data, the direct line to the buyer &mdash; and treat platform distribution as borrowed reach, not a home. The agents are coming to stand between you and your customer. Walmart just showed you can let them in without giving them the house.
        </p>
      </div>
    ),
    sources: [
      { title: "TechBuzz — Walmart Dumps OpenAI Checkout, Plugs Sparky Into ChatGPT (2026)", url: "https://www.techbuzz.ai/articles/walmart-dumps-openai-checkout-plugs-sparky-into-chatgpt" },
      { title: "CNBC — OpenAI's First Try at Agentic Shopping Stumbled. It's Trying Again (March 20, 2026)", url: "https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html" },
      { title: "The Paypers — Walmart Drops OpenAI Checkout and Deploys Sparky on AI Platforms", url: "https://thepaypers.com/payments/news/walmart-drops-openai-checkout-and-deploys-sparky-on-ai-platforms" },
    ],
};
