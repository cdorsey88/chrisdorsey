import type { Post } from "./types";

export const post: Post = {
    slug: "elevenlabs-voice-payouts-residual-returns",
    title: "ElevenLabs pays voice talent per use. Advertising spent 30 years buying its way out of that.",
    date: "Aug 18, 2026",
    readTime: "4 min",
    tag: "MadTech",
    color: "from-violet-700 to-orange-500",
    tldr: "ElevenLabs has paid $22 million to the 10,400 people who lend their voices to its Voice Library, double the figure from November, and the money is paid per use, every six to eight days. Advertising stopped paying voice talent per use decades ago for a bookkeeping reason: working out how often an ad ran cost more than the check. AI platforms count every character because that is how they bill, so the counting is free. Right as Meta asks for up to 50 pieces of creative per ad set and Unilever makes 400 assets per product, that flips volume from the actor’s problem into the actor’s paycheck, and puts the brand and the talent on the same side for the first time.",
    content: (
      <div className="prose-content">
        <p>
          ElevenLabs put out a number in May that got almost no pickup in the ad trades. It has now paid $22 million to the people who lend their voices to its Voice Library: 10,400 of them, across 32 languages. In November the figure was $11 million. It doubled in six months.
        </p>
        <p>
          Most of what has been written about ElevenLabs this year is about Michael Caine licensing his voice. Good story. But the payout number is the one that matters to anyone who has ever paid a voice actor for an ad, and I have not seen anyone connect it to how that payment normally works.
        </p>
        <p>
          Here is how it works on ElevenLabs. A voice actor records once and puts the voice in the library. Every time someone uses it, the actor earns a small cut, a few cents per thousand characters of text turned into speech, which is roughly ninety seconds of audio. The money lands in their account every six to eight days. One creator ElevenLabs featured on its blog, Jessica Anne Bogart, says she has made more from the marketplace than from her previous five years of acting combined.
        </p>
        <p>
          Nobody in advertising has been paid like that in a long time.
        </p>

        <h2>Advertising stopped paying per use because the bookkeeping cost more than the check</h2>
        <p>
          When a brand hires a voice actor for a commercial, it pays for two things. A session fee covers the recording day. A much bigger fee covers permission to run the ad: for how long, in which countries, on which channels. That permission is called the usage window, or a buyout if the brand pays once to use the recording forever. When I was at Crispin Porter + Bogusky, the session fee got settled on a phone call. The window took weeks and always went to legal, especially when a campaign did well and the client wanted another eighteen months.
        </p>
        <p>
          Advertising landed on windows for a dull reason. Decades ago, working out where a thirty-second spot actually ran, in how many versions, across how many markets, and then cutting a proportional check for it, cost more than the check itself. So the industry stopped counting and started selling time instead. Even the union contract works this way. The 2025 SAG-AFTRA commercials deal raised rates and was a real win for performers, but it still pays a session fee plus a fee for a fixed run window, now capped at two years. The actor is paid for how long the ad is allowed to run, not for how many times it does.
        </p>

        <h2>AI platforms count for free</h2>
        <p>
          Generative platforms have the opposite situation. They meter every character of text they turn into speech, because that is how they bill their own customers. The counting that made per-use payment uneconomic in advertising is already happening as a byproduct of the invoice. Paying the voice actor a share of it is one more column in a spreadsheet.
        </p>
        <p>
          This would be a curiosity if brands still made one ad and ran it for a year. They don&rsquo;t. Meta now asks advertisers for 20 to 50 pieces of creative per ad set, refreshed every few weeks. Unilever told Digiday its AI studios turn out 400 assets per product, where the old norm was 20 per campaign. Every retail media network, and there are more than 200 of them, wants its own sizes and formats.
        </p>
        <p>
          Under a buyout, that volume is all downside for the actor. More versions means more exposure, more chances a spot turns up still running six months past its window, and the same flat fee either way. Under a meter, the same volume is their paycheck. Thirty markets is thirty times the usage. That used to mean a renegotiation and a nervous call to legal. Now it shows up in the next payout.
        </p>
        <p>
          For the first time in my career, the brand that wants to scale a campaign and the person who voiced it want the same thing.
        </p>

        <h2>Why this is hard for Meta and Google to copy</h2>
        <p>
          Meta and Google are both moving toward generating ad creative for free, to protect the media spend behind it. Meta has said it wants ad creation fully automated inside its own walls by the end of this year. What neither has is a talent side: a pool of real people who have consented, get credited, and get paid every time their voice is used. AI voice quality is going to be roughly the same everywhere soon. A working royalty ledger with 10,400 people on it is harder to build in a quarter. And with the EU&rsquo;s AI transparency rules live as of August and New York&rsquo;s synthetic-performer disclosure law in effect since June, a paid, consenting human in the loop is worth more than it was a year ago.
        </p>
        <p>
          Ten thousand people are now getting a payout statement every six to eight days, and metering is turning into a normal way voice work gets paid. Most voice agreements sitting in a brand or agency file today still contain a term and a territory and nothing else, because that was all anybody could enforce back when usage was counted by hand. That constraint is gone. If you are writing one of those agreements this fall, a clause that asks for usage reporting costs almost nothing to add now, and it lines the brand and the talent up on the same side of the invoice.
        </p>
      </div>
    ),
    sources: [
      { title: "ElevenLabs — $22 million earned by voice creators", url: "https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs" },
      { title: "ElevenLabs — Voice actor payouts (docs)", url: "https://elevenlabs.io/docs/eleven-creative/voices/payouts" },
      { title: "SAG-AFTRA — 2025 Commercials Contracts", url: "https://www.sagaftra.org/contracts-industry-resources/commercials/2025-commercials-contracts" },
      { title: "Digiday — Inside Unilever's AI beauty marketing assembly line", url: "https://digiday.com/marketing/inside-unilevers-ai-beauty-marketing-assembly-line-and-its-implications-for-agencies/" },
      { title: "eMarketer — AI-driven ad creation could decrease need for agencies", url: "https://www.emarketer.com/content/ai-driven-ad-creation-could-give-meta-more-control-decrease-need-agencies" },
      { title: "Manatt — New York synthetic performer law: what advertisers need to know", url: "https://www.manatt.com/insights/newsletters/client-alert/new-york-synthetic-performer-law-what-advertisers-need-to-know" },
      { title: "EU AI Act — Article 50 transparency obligations", url: "https://artificialintelligenceact.eu/transparency-rules-article-50/" },
    ],
};
