import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "alexa-agentic-ads-checkout-for-other-brands",
    title: "Amazon is now the checkout counter for Papa Johns and Ticketmaster",
    date: "Jul 14, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-orange-600 to-rose-500",
    tldr: "On June 23, the first morning of Prime Day, Amazon introduced Alexa+ Agentic Ads on Echo Show: sponsored prompts inside Alexa+ conversations where the shopper can ask questions, compare options and complete the purchase without leaving the ad. Launch partners are Papa Johns for food and ticket sales for Beck, Jill Scott and Omar Courtz, delivered straight into the buyer's Ticketmaster account. The trade press filed it as agentic advertising's arrival. The underweighted detail: these transactions never touch amazon.com. Amazon is operating checkout for merchants outside its own store, which extends its take beyond the marketplace, the reverse of Walmart's choice to let AI assistants sell while refusing to surrender the register. And when the ad completes the purchase, the economics stop looking like media. Reach and CPM give way to close rate, take rate, customer-record ownership and who eats the refund when the pizza shows up cold — channel-sales questions, negotiated by people who own revenue lines, which is who will end up buying and selling these placements. If you're a brand offered an agentic format, negotiate it like a channel deal: data rights, the customer record, CX liability, and the commission math against your own checkout margin. And bring whoever owns the revenue number into the room.",
    content: (
      <div className="prose-content">
        <p>
          On June 23, the first morning of Prime Day, Amazon introduced Alexa+ Agentic Ads on Echo Show devices. The format works like this: an ad surfaces inside an Alexa+ conversation, you ask about the concert, check seat availability, pick a price, and the tickets land in your Ticketmaster account. Or the large pepperoni heads to your door, because Alexa remembers your toppings from past conversations. The purchase completes without the conversation ever ending. Launch partners: Papa Johns for food, and ticket sales for Beck, Jill Scott and Omar Courtz.
        </p>
        <p>
          Digiday called it a glimpse of advertising&rsquo;s agentic future, which is fair. But one detail deserves its own headline, and Adweek came closest to writing it: none of these transactions belong to Amazon&rsquo;s store. Papa Johns pizza and Ticketmaster seats were never marketplace items. Amazon is running the register for commerce that happens somewhere else entirely.
        </p>
        <h2>An ad that closes the sale gets graded like a channel</h2>
        <p>
          Media is priced on attention: reach, CPM, share of voice, and a long argument about attribution afterward. Channels are priced on transactions: close rate, take rate, commission, and who owns the customer when the money moves. For a hundred years the ad industry lived on the first list. An Alexa+ Agentic Ad runs on the second, because the ad and the transaction are the same object. Amazon&rsquo;s ad VP described the format as closing &ldquo;the gap between intent and action,&rdquo; which is a polite way of saying the ad now finishes the job the media plan used to hand off to a website.
        </p>
        <p>
          Once the ad completes the purchase, the negotiation behind it changes species. The questions stop sounding like a media buy and start sounding like a channel agreement: What&rsquo;s the commission on a completed order? Who owns the customer record, Amazon or Papa Johns? Who eats the refund when the pizza shows up cold and the customer yells at the speaker that sold it to them? Nobody asks those questions about a banner. Every retail media network cloning this format inherits every one of them.
        </p>
        <h2>Walmart kept the register. Amazon became one.</h2>
        <p>
          The contrast with Walmart is worth sitting on for a minute. Three weeks ago I wrote about{" "}
          <Link href="/writing/walmart-sparky-agentic-commerce-customer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Walmart letting ChatGPT and Gemini sell its products while refusing to hand over checkout</Link> &mdash; a retailer defending its register from the AI assistants. Amazon just ran the move in the other direction: it took its assistant and became the register for merchants who never sold through Amazon at all. Walmart is protecting a checkout. Amazon is exporting one, and collecting a position in every transaction it carries.
        </p>
        <p>
          Two things can be true. This is a closed beta with a hand-picked partner list, no public pricing, and one device family. You cannot buy this ad today, and betas die on the vine all the time. It is also the clearest statement of intent any ad platform has made this year: Amazon believes the ad unit of the agentic era is a completed transaction, and it would like a cut of transactions well beyond its own store.
        </p>
        <h2>The buyer of this ad owns a revenue number</h2>
        <p>
          At Zeta I sold customer-acquisition programs priced on outcomes, and the buying committee told you everything about the product. A media plan gets approved by marketing. A guaranteed outcome gets graded by whoever owns the revenue line, and that person shows up to the meeting with entirely different questions, mostly about margin. Agentic ad formats will pull budget the same direction: away from the media plan, toward the commerce and channel P&amp;L, bought by people who think in cost-of-sale rather than share-of-voice.
        </p>
        <p>
          If you sell for a retail media network, that&rsquo;s your heads-up. The person across the table from these formats will be a head of digital revenue, not a media planner, and the pitch that wins is channel math. If you&rsquo;re a brand and an agentic placement lands on your desk, negotiate it like the channel deal it is: data rights, customer-record ownership, CX liability, and the commission stacked against your own checkout margin. Papa Johns just agreed to let Amazon take the order, learn the customer&rsquo;s toppings and hold the relationship at the moment of purchase. That trade might be worth it. But price the whole trade, because the pizza is the smallest thing changing hands.
        </p>
      </div>
    ),
    sources: [
      { title: "Amazon Ads — Order a pizza or buy concert tickets: New Alexa+ Agentic Ads let shoppers purchase directly within an ad", url: "https://advertising.amazon.com/library/news/alexa-agentic-ads" },
      { title: "Adweek — Alexa Is Becoming a Shopping Agent for Advertisers Outside Amazon", url: "https://www.adweek.com/commerce/alexa-is-becoming-a-shopping-agent-for-advertisers-outside-amazon/" },
      { title: "Digiday — Amazon's latest ad format offers a glimpse of advertising's agentic future", url: "https://digiday.com/marketing/amazons-latest-ad-format-offers-a-glimpse-of-advertisings-agentic-future/" },
    ],
};
