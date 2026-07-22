import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "google-conversational-ads-keyword-casualty",
    title: "Google is turning search ads into a conversation. The keyword is the casualty.",
    date: "Jun 29, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-blue-600 to-violet-600",
    tldr: "At Google Marketing Live 2026, Google unveiled Gemini-powered conversational ad formats inside AI Mode and Search, as AI Mode moves from an opt-in experiment to the way Search works. Search ads were sold against keywords for twenty years; a conversation has no keyword, so targeting, placement control, and clean keyword-to-conversion attribution all weaken at once. If you buy media, get your reporting ready for a conversion you can't trace to a query, and treat your free presence in the AI answer as the other half of the buy. If you sell search tooling, 'we optimize keywords' ages fast in a channel leaving keywords behind.",
    content: (
      <div className="prose-content">
        <p>
          At Google Marketing Live this month, Google showed the next shape of the search ad:{" "}
          <a href="https://searchengineland.com/google-tests-new-conversational-ad-formats-in-ai-mode-and-search-478115" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Gemini-powered formats</a> that run inside AI Mode and inside the conversational responses Search now gives, instead of as a row of links above the results. AI Mode, the chat-style search Google introduced last year, is moving from an experiment you opt into to the way Search works. And{" "}
          <a href="https://blog.google/products/ads-commerce/google-marketing-live-search-ads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the ad is moving with it</a> &mdash; into the back-and-forth, alongside the answer, in the place the buyer is actually reading.
        </p>
        <p>
          For twenty years, the search ad was sold against a keyword. Someone typed a query, you bid on the words, and the match between the words and your ad set the price and the placement. That model built a couple-hundred-billion-dollar business and trained every marketer alive to think in keywords and intent. A conversation doesn&apos;t have a keyword. It has a thread, a follow-up, a clarifying question, a recommendation. When the query becomes a dialogue, the thing you were bidding on stops describing what&apos;s being bought.
        </p>
        <p>
          I came up partly on the agency side, at Crispin Porter + Bogusky, back when &ldquo;buying search&rdquo; meant a spreadsheet of keywords, match types, and bids you could reason about line by line. The buyer knew what each dollar was pointed at. That legibility is the thing now in question.
        </p>
        <h2>What a conversational placement breaks</h2>
        <p>
          Three things the keyword model gave you quietly go soft when the ad lives inside an answer. Targeting: you bid on intent expressed as words, but a model infers intent from a whole exchange, so you&apos;re bidding on its read of the conversation, not on a phrase you chose. Control: you knew where your ad sat and what it sat next to, and inside a generated answer the placement and the surrounding context get decided by the model turn by turn. And measurement: the clean line from keyword to click to conversion was the bedrock of search attribution, and a recommendation surfaced mid-conversation, maybe acted on three turns later, doesn&apos;t leave that trail. The pitch is ads that feel more helpful and contextual. The cost is that the levers you used to pull now sit inside a system you don&apos;t see.
        </p>
        <h2>If you buy media</h2>
        <p>
          Don&apos;t let keyword muscle memory carry you into this. Start auditing now for what your reporting looks like when the placement is a conversation and the conversion shows up untraceable to a query, because the attribution model your budget defends was built for a world of clicks on links. Push Google on which signals you can actually control and which you&apos;re handing to the model. And treat your presence in the organic AI answer as the other half of the same buy: if the assistant is going to recommend inside the conversation, being a brand it recommends for free is worth as much as the paid slot next to it. That ties straight to the{" "}
          <Link href="/writing/geo-citations-google-rankings-diverge" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">GEO problem</Link> &mdash; structured, trusted, clearly-stated content is what an answer engine reaches for, paid placement or not.
        </p>
        <h2>If you sell the tooling around search</h2>
        <p>
          If your product is bid management, attribution, or a keyword platform, the ground your category stands on is shifting, and &ldquo;we optimize keywords&rdquo; ages fast in a channel that&apos;s leaving keywords behind. The value moves to whoever can measure and influence a recommendation inside a conversation, which is a harder and more valuable problem than ranking a bid. Aim there.
        </p>
        <p>
          Google is the largest ad channel on earth, and it spent two decades teaching everyone to buy in keywords. It&apos;s now rebuilding the front door around a conversation, and the buying model will follow whether the tooling and the measurement are ready or not. Two things can be true: conversational ads will probably work, and the way you account for them is about to get much harder. Get your reporting ready for an answer you can&apos;t reduce to a keyword, before the budget review asks you to explain one.
        </p>
      </div>
    ),
    sources: [
      { title: "Search Engine Land — Google Tests New Conversational Ad Formats in AI Mode and Search", url: "https://searchengineland.com/google-tests-new-conversational-ad-formats-in-ai-mode-and-search-478115" },
      { title: "Google — New Ad Formats Built With Gemini Coming to Google Search (Google Marketing Live 2026)", url: "https://blog.google/products/ads-commerce/google-marketing-live-search-ads/" },
    ],
};
