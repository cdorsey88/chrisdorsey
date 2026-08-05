import type { Post } from "./types";

export const post: Post = {
    slug: "ai-tokens-principal-buying-agency-margin",
    title: "Your agency wants to sell you AI tokens the way it sells you media",
    date: "Aug 5, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-rose-700 to-amber-500",
    tldr: "Digiday reported this week that marketers are being offered free AI tokenization in exchange for signing a principal buying and data services contract. Omnicom's third-party service costs ran $2.9 billion in the first half, up from $1.7 billion a year earlier, and its margin still improved to 15.5%. Meanwhile the input keeps getting cheaper: Cloudflare cut token costs about 80% by serving Markdown instead of HTML, and Alphabet says Gemini serving costs fell 78% through 2025. Seven agencies have seven different pricing models for the same line item, and Ebiquity says token usage audits are headed into contracts. If you buy: get compute quoted at cost, separately from media, with an audit right, before it gets bundled into anything undisclosed. If you sell AI: your unit cost is about to be somebody's audit finding.",
    content: (
      <div className="prose-content">
        <p>
          Digiday ran two pieces this week on what agencies are doing with the cost of AI compute, and the sentence that stopped me came from an unnamed consultant. Marketers, he said, are being offered &ldquo;free AI tokenization in exchange for signing up to principal buying and a data services contract.&rdquo; Free in the sense that a printer is free when you commit to the cartridges.
        </p>
        <p>
          The numbers underneath explain the offer. Omnicom reported third-party service costs of $2.9 billion in the first half of 2026, up from $1.7 billion in the same period last year, and improved its margin to 15.5% anyway. John Wren told analysts that &ldquo;the marketplace hasn&rsquo;t seen what the cost of this AI is.&rdquo; Cyd Falkson at MediaSense put it less gently: agencies &ldquo;don&rsquo;t know how to price and sell their technology.&rdquo; WPP reports August 6 and Dentsu on the 14th, so there will be more to look at inside two weeks.
        </p>
        <p>
          I sold metered infrastructure at Fastly. Bandwidth and requests, billed on consumption, invoices that moved every month with a customer&rsquo;s traffic. Every renewal eventually turned into the same conversation about whether we were marking the meter up. Customers weren&rsquo;t being paranoid. They couldn&rsquo;t see the meter, and anything a buyer can&rsquo;t see, a buyer assumes is padded. The only thing that ever settled it was handing them the raw usage data and letting them do their own math.
        </p>
        <h2>The cost is real, and it is falling fast</h2>
        <p>
          Agencies did not invent this problem. IAB Europe demoed a single task running across three agents in April and burned roughly 50 euros doing it. Draft Digital hit Claude usage limits several times inside one working day while building agentic systems. Ruben Schreurs at Ebiquity is right that agencies &ldquo;can&rsquo;t afford to continue to subsidize all those costs&rdquo; out of a retainer priced before anyone knew what an agent costs to run.
        </p>
        <p>
          The other half of the picture cuts the opposite direction. Cloudflare&rsquo;s Markdown for Agents cut token consumption about 80% against serving the same content as HTML. Alphabet said Gemini serving costs dropped 78% over the course of 2025. Lock a fixed percentage markup onto an input falling at that rate and within a year the markup is worth more than the work it was attached to. That is the whole reason the media transparency fights of the last decade happened, and it took the ANA the better part of two years and a forensic accounting firm to prove it.
        </p>
        <h2>Seven agencies, seven answers</h2>
        <p>
          There is no market standard yet, and the spread is wide. Merge and Big Spaceship meter tokens case by case, treating compute like equipment rental on a shoot. Lerma/ includes them at cost with no markup. RPA absorbs them entirely, with leadership saying &ldquo;we can&rsquo;t expect to charge our client for something we don&rsquo;t know is actually going to work,&rdquo; which is the most candid sentence in either article. Brandtech&rsquo;s Pencil negotiates volume rates with Anthropic and OpenAI and resells generation credits against committed tiers. Horizon&rsquo;s Blu charges what it calls a nominal fee, &ldquo;cost recovery, not revenue.&rdquo; Kepler folds tokens into retainer deliverables and reports on outcomes instead of usage. Silverside sells seats, Salesforce style.
        </p>
        <p>
          Seven approaches to one input, which is what a market looks like about eighteen months before somebody commissions a study about it.
        </p>
        <h2>Ebiquity is already drafting the audit clause</h2>
        <p>
          Ebiquity has said token usage audits are likely to become a standard contract requirement. Get ahead of that rather than waiting for the clause to arrive in someone else&rsquo;s paper. If you buy: ask for compute quoted at cost, on its own line, separate from media, with the right to audit usage and the markup stated in writing. And treat any bundle that trades free tokens for principal buying the way you would treat a free equipment upgrade that requires a five-year lease.
        </p>
        <p>
          Two things can be true. Agencies have a legitimate cost problem that nobody priced for, and wrapping that cost inside an undisclosed-markup vehicle is precisely how the last transparency fight started. A client who demands at-cost tokens and refuses any fee increase is asking the agency to fund the client&rsquo;s AI strategy, which is not a serious position either. The workable version is a stated cost, a stated fee, and visibility into the meter.
        </p>
        <p>
          For scale, Magnite&rsquo;s Michael Barrett put protocol-based advertising spend at $600 to $700 million a year in 2027, a rounding error against total programmatic volume. Small pool for now. The argument happening this month is about who holds the meter when it stops being small.
        </p>
        <p>
          Go pull your current agency agreement and search it for the word &ldquo;compute.&rdquo; If it doesn&rsquo;t appear anywhere, you are already on one of those seven pricing models. Nobody has told you which one.
        </p>
      </div>
    ),
    sources: [
      { title: "Digiday — Agencies grapple with the economics of a new marketing currency: the AI token", url: "https://digiday.com/marketing/agencies-grapple-with-economics-of-a-new-marketing-currency-the-ai-token/" },
      { title: "Digiday — The case for and against agencies betting on tokens the way they bet on media (Aug 3, 2026)", url: "https://digiday.com/media-buying/the-case-for-and-against-agencies-betting-on-tokens-the-way-they-bet-on-media/" },
      { title: "PPC Land — Agencies turn AI tokens into a margin business as agentic spend stalls", url: "https://ppc.land/agencies-turn-ai-tokens-into-a-margin-business-as-agentic-spend-stalls/" },
      { title: "AdExchanger — Tokenizing Tokens; In OpenAI We Trust? (Aug 3, 2026)", url: "https://www.adexchanger.com/daily-news-roundup/monday-03082026/" },
      { title: "Digiday — Media Buying Briefing: the latest lures holding companies are using to grow principal media", url: "https://digiday.com/media-buying/media-buying-briefing-the-latest-lures-holding-companies-are-using-to-grow-principal-media/" },
    ],
};
