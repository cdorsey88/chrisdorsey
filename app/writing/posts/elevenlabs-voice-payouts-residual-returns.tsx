import type { Post } from "./types";

export const post: Post = {
    slug: "elevenlabs-voice-payouts-residual-returns",
    title: "ElevenLabs pays voice talent per use. Advertising spent 30 years buying its way out of that.",
    date: "Aug 18, 2026",
    readTime: "6 min",
    tag: "MadTech",
    color: "from-violet-700 to-orange-500",
    tldr: "ElevenLabs said in May it has paid $22 million to voice creators through its Voice Library — 10,400 people, 32 languages, cleared every six to eight days on usage. That number was $11 million in November, so it doubled in six months. Advertising has spent three decades moving talent the other way, toward flat buyouts, for a boring reason: counting where a spot ran cost more than the check. Generative platforms count usage by default, because metering is how they bill. Meanwhile Meta wants 20 to 50 assets per ad set refreshed every few weeks and Unilever is producing 400 assets per product. A buyout turns that volume into pure exposure with no upside for the talent; metering it turns the same volume into their earnings. For the first time the brand scaling a campaign and the person who voiced it want the same thing, and most voice agreements on file still carry only a term and a territory — worth fixing while you are the one bringing it up.",
    content: (
      <div className="prose-content">
        <p>
          ElevenLabs put out a number in May that got almost no pickup in the ad trades. It has now paid $22 million to voice creators through its Voice Library, spread across 10,400 people and 32 languages. In November the figure was $11 million. It doubled in six months.
        </p>
        <p>
          Nearly everything written about ElevenLabs this year has been about Michael Caine. That is a good story, and the Iconic Voice Marketplace deserves the attention it got. But the payout line is the one that lands on anybody who runs a production department, and I have not seen a single trade piece connect it to how talent actually gets paid.
        </p>
        <p>
          Here is the mechanic. Voices in the library earn a default rate of three cents per thousand characters, roughly ninety seconds of audio, rising to twenty cents for distinctive or high-quality voices. Earnings clear through Stripe every six to eight days once you pass a ten dollar threshold, and free-tier usage doesn&rsquo;t count. Jessica Anne Bogart, one of the creators ElevenLabs put on its own blog, says she has made more from the marketplace than from her previous five years of acting combined.
        </p>
        <p>
          Nobody in advertising has been paid like that in a long time.
        </p>
        <h2>Advertising stopped paying per use because counting got too expensive</h2>
        <p>
          When I was at Crispin Porter + Bogusky, the talent line in a production budget was one of the few items that reliably went to legal. Session fees got handled on a phone call. What took weeks was the window &mdash; how long, which territories, which channels, whether it renewed, and what happened if the campaign outperformed and the client wanted another eighteen months. A few hundred dollars bought the recording. A much larger number bought permission to keep using it, and that second number was what everyone argued about.
        </p>
        <p>
          Advertising ended up there because tracking usage was uneconomic. Working out where a thirty-second spot ran, in how many cuts, across how many markets, and then cutting a proportional check, cost more than the check. So the industry bought windows instead. The non-union rate cards still read that way — local at one times base, regional at one and a half to two, national two to three, worldwide three to five, perpetuity another two to three on top of that, category exclusivity another fifty to a hundred percent.
        </p>
        <p>
          Even the union deal, the best version of this arrangement, works the same way. The 2025 SAG-AFTRA Commercials Contract was a real win for performers: raises of 12.5% compounding over three years, a package worth $218 million, ratified 96.9% to 3.1%. But look at how it pays. A voice actor gets a flat session fee, $588.90 for a TV session and $379.60 for a solo audio spot, plus use fees that buy the advertiser the right to run the spot for a fixed window, which the contract now caps at 24 months. If a brand wants to clone the voice instead, the contract prices that at one and a half times the session fee, plus the same use fees. So the raise moved the numbers up, but what is being sold did not change. The actor is still paid for a period of time the ad can run, not for how many times it actually runs.
        </p>
        <h2>The window is why your brand runs seven markets instead of thirty</h2>
        <p>
          When a brand localizes a campaign into seven markets instead of thirty, the constraint usually isn&rsquo;t creative capacity. Every additional market re-buys a talent window, re-runs clearance, and re-opens a legal review. Transcreation runs two to five thousand dollars per asset per language, two to three weeks standard, with rush premiums of 25% to 100%. Thirty markets across display, video, and email is roughly $150,000 and a month before you have made anything anyone can look at.
        </p>
        <p>
          ElevenLabs published numbers on this in July, measured on its own marketing spend, which is worth knowing going in. A four-person, English-speaking team took seven international markets to $3.78 million in incremental conversion value at a 7.16 ROAS, with a 17.6% conversion lift on the non-English campaigns, and won a 2026 Google Ads Impact Award doing it. Their framing was results that normally require &ldquo;significantly larger teams, dedicated localization vendors, and months of production infrastructure.&rdquo;
        </p>
        <p>
          Note the noun they chose. Vendors. They have been careful with that distinction all year. WPP Open sat on a panel at their London summit in February, and Stagwell&rsquo;s platform powered the Adweek AI radio station at Cannes. Whatever this technology ends up doing to production budgets, the company is building itself as something agencies buy rather than something that competes with them.
        </p>
        <h2>Then the asset count went vertical</h2>
        <p>
          Meta&rsquo;s Advantage+ guidance asks for 20 to 50 assets per ad set, up to 150 for Shopping campaigns, refreshed every two to four weeks. Google&rsquo;s Performance Max wants about 20 core assets per asset group and recommends at least three groups. Unilever told Digiday its AI beauty studios now turn out 400 assets per product, against a prior norm of 20 per campaign. There are more than 200 retail media networks, and each one has its own specs for onsite, offsite, in-store screens, and audio.
        </p>
        <p>
          A buyout makes that volume all downside. More usage means more exposure, more clearance risk, and more chances that someone turns up a spot still running six months past its window, while the person who voiced it collects the same flat fee either way. Metering it changes who benefits when a campaign gets big.
        </p>
        <p>
          For the first time in my career, a brand scaling a campaign and the person who voiced it are pulling in the same direction. Thirty markets is thirty times the usage. That used to mean a renegotiation and a nervous call to legal. Now it turns up in the next payout.
        </p>
        <p>
          A licensed, credited, paid human in the loop is also the one thing Meta and Google can&rsquo;t easily copy. Both are moving toward giving ad creative generation away free to protect media spend, and Meta has said it wants full automation of ad creation inside its own walls by the end of this year. Neither has a talent supply side. No rights business, no payment rail, no consenting human anywhere in the stack. Model quality is going to commoditize. A working royalty ledger with 10,400 people on it is harder to stand up in a quarter.
        </p>
        <h2>The legal floor is moving underneath all of it</h2>
        <p>
          The regulatory floor is moving in the same direction. EU AI Act transparency obligations went live on August 2, with penalties up to fifteen million euros or 3% of global turnover. New York&rsquo;s synthetic performer disclosure law took effect June 9, and it exempts audio-only advertising and exempts AI translation of a human performer, which is a friendlier read for dubbing and localization work than most people assume. The NO FAKES Act cleared Senate Judiciary on a unanimous voice vote in June and is waiting on floor time.
        </p>
        <p>
          Meanwhile the IPA census in February put creative agency employment down 14.3% year over year. Those two facts are related, and the people leaving are disproportionately the ones who used to do versioning by hand.
        </p>
        <p>
          Ten thousand people are now getting a payout statement from ElevenLabs every six to eight days, and metering is turning into the normal way voice work gets paid. Most voice agreements sitting in a brand or agency file today still contain a term and a territory and nothing else, because that was all anybody could enforce back when usage was counted by hand. That constraint is gone. If you are writing one of those agreements this fall, a usage-reporting clause costs almost nothing to add now, and it lines the brand and the talent up on the same side of the invoice.
        </p>
      </div>
    ),
    sources: [
      { title: "ElevenLabs — $22 million earned by voice creators", url: "https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs" },
      { title: "ElevenLabs — Voice actor payouts (docs)", url: "https://elevenlabs.io/docs/eleven-creative/voices/payouts" },
      { title: "ElevenLabs — How we solved multilingual advertising and built Ads Engine", url: "https://elevenlabs.io/blog/how-we-solved-multilingual-advertising-internally-and-why-we-are-launching-it-as-ads-engine" },
      { title: "SAG-AFTRA — 2025 Commercials Contracts", url: "https://www.sagaftra.org/contracts-industry-resources/commercials/2025-commercials-contracts" },
      { title: "Wrapbook — Essential guide to SAG rates (2026–27)", url: "https://www.wrapbook.com/blog/essential-guide-sag-rates" },
      { title: "Digiday — Inside Unilever's AI beauty marketing assembly line", url: "https://digiday.com/marketing/inside-unilevers-ai-beauty-marketing-assembly-line-and-its-implications-for-agencies/" },
      { title: "eMarketer — AI-driven ad creation could decrease need for agencies", url: "https://www.emarketer.com/content/ai-driven-ad-creation-could-give-meta-more-control-decrease-need-agencies" },
      { title: "Manatt — New York synthetic performer law: what advertisers need to know", url: "https://www.manatt.com/insights/newsletters/client-alert/new-york-synthetic-performer-law-what-advertisers-need-to-know" },
      { title: "EU AI Act — Article 50 transparency obligations", url: "https://artificialintelligenceact.eu/transparency-rules-article-50/" },
      { title: "The Drum — Agency leaders on the IPA's 14% agency job loss findings", url: "https://www.thedrum.com/news/a-structural-shift-not-a-blip-agency-leaders-on-ipa-14-agency-job-loss-findings" },
    ],
};
