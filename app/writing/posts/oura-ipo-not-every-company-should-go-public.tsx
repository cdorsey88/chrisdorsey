import type { Post } from "./types";

export const post: Post = {
    slug: "oura-ipo-not-every-company-should-go-public",
    title: "Oura just filed to go public. The hardest test comes after the IPO.",
    date: "May 22, 2026",
    readTime: "7 min",
    tag: "Business",
    color: "from-amber-600 to-orange-500",
    tldr: "Oura confidentially filed its S-1 yesterday — 5.5M rings sold at an $11B valuation in a category it invented. The real test comes after the IPO: public-market gravity reshapes how a hardware company operates. Fitbit is the cautionary case study, and Google relaunched the Fitbit Air this month as a direct competitor.",
    content: (
      <div className="prose-content">
        <p>
          Oura{" "}
          <a href="https://techcrunch.com/2026/05/22/smart-ring-maker-oura-files-to-go-public/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">confidentially filed its S-1 yesterday</a>. 5.5 million rings sold. An $11 billion valuation off the{" "}
          <a href="https://techcrunch.com/2025/09/22/oura-ring-maker-raising-875m-series-e-bringing-valuation-to-11b-report-says/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Series E last September</a>. A category they invented and still own. By every metric VCs care about, this is the victory lap.
        </p>
        <p>
          I think it&apos;s the beginning of the end of the company that got them here.
        </p>
        <p>
          Not because Oura is bad at what they do &mdash; they&apos;re great at it. <em>Because</em>{" "}they&apos;re great at it. The thing public markets are about to ask of them is incompatible with the thing that made them worth buying in the first place.
        </p>

        <h2>The growth math that breaks good companies</h2>
        <p>
          Public markets don&apos;t have a vocabulary for &ldquo;this company is the right size.&rdquo; They have one mode: bigger than last quarter, forever. That works for ad networks, cloud, or anything with effectively infinite demand expansion. It is brutal if you sell a $349 piece of hardware that goes on one finger and lasts several years.
        </p>
        <p>
          Oura roughly doubled rings sold in the last twelve months &mdash;{" "}
          <a href="https://techcrunch.com/2026/05/22/smart-ring-maker-oura-files-to-go-public/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">2.5M to 5.5M</a>. That&apos;s the kind of curve you can sell to public investors. The problem is what happens in year three, four, five, when the curve flattens because the people who want a sleep-tracking ring have bought one. The TAM is real but it isn&apos;t infinite, and the replacement cycle isn&apos;t an iPhone replacement cycle.
        </p>
        <p>
          When the curve flattens, three things happen, in order:
        </p>
        <p>
          <strong>First.</strong> The subscription gets squeezed harder. Price increases, features paywalled that weren&apos;t before, members nudged into longer commitments.
        </p>
        <p>
          <strong>Second.</strong> The product expands into adjacencies it has no business expanding into. Watches. Patches. Scales. Something with a screen.
        </p>
        <p>
          <strong>Third.</strong> The brand starts feeling like the brand of a company trying to grow instead of the brand of a company that knows what it is.
        </p>
        <p>
          Every quarter, the earnings call has to explain why growth is still there. Every quarter, the answer pulls the company one step further from what made the original product great.
        </p>

        <h2>Fitbit is sitting right there. Literally, this month.</h2>
        <p>
          We have the case study, and it&apos;s not even a historical one. Fitbit{" "}
          <a href="https://money.cnn.com/2015/06/17/investing/fitbit-ipo/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">IPO&apos;d in June 2015 at a $4.1B valuation</a>,{" "}
          <a href="https://www.businessofapps.com/data/fitbit-statistics/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">peaked at a $9.7B market cap that same summer</a>, then spent four years getting eaten &mdash; by Apple from the top, by cheap Chinese hardware from the bottom, and by its own attempts to chase smartwatch growth it was never going to win. Google{" "}
          <a href="https://techcrunch.com/2021/01/14/googles-fitbit-acquisition-is-official/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">bought what was left for $2.1B in 2021</a>. The brand became a ghost.
        </p>
        <p>
          Two weeks ago, Google{" "}
          <a href="https://blog.google/products-and-platforms/devices/fitbit/fitbit-air/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">launched the &ldquo;Fitbit Air&rdquo;</a> &mdash; a $99.99 screenless health tracker{" "}
          <a href="https://techcrunch.com/2026/05/07/google-unveils-whoop-like-screenless-fitbit-air/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">explicitly designed to compete with Whoop and Oura</a>, bundled with a $9.99/month Google Health Premium subscription. The Fitbit app is being{" "}
          <a href="https://thepixelcase.com/blogs/news/google-fitbit-air-review-complete-guide-the-99-screenless-tracker-that-changes-everything-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">retired entirely and rebranded as Google Health</a>. The Fitbit <em>brand</em>{" "}is a ghost, but the Fitbit <em>acquisition</em>{" "}is now Google&apos;s wedge against Oura specifically.
        </p>
        <p>
          The Fitbit failure wasn&apos;t &ldquo;wearables don&apos;t work.&rdquo; Wearables work fine &mdash; Apple sells tens of millions of Apple Watches. The failure was that a focused hardware company with a great single-purpose product got forced into a fight it couldn&apos;t win, by the gravitational pull of public-market expectations. By the time Google bought it, Fitbit was{" "}
          <a href="https://www.macrotrends.net/stocks/delisted/FIT/fitbit/market-cap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">worth less than a fifth of its peak</a>.
        </p>
        <p>
          Oura is in the same trap with extra dimensions. Apple is bigger and better-resourced than it was in 2015. Samsung is shipping a Galaxy Ring.{" "}
          <a href="https://techcrunch.com/2026/03/10/whoop-launches-a-new-blood-test-focused-on-womens-health/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Whoop just launched a women&apos;s health blood test</a>. Google&apos;s $100 Fitbit Air just hit the market. The competitive floor is rising at the exact moment Oura is about to take on quarterly disclosure obligations that tell every one of those competitors exactly where the soft spots are.
        </p>

        <h2>What &ldquo;going public&rdquo; actually buys you, and who it&apos;s for</h2>
        <p>
          The pitch for an IPO is liquidity, prestige, and capital. Be honest about each.
        </p>
        <p>
          <strong>Liquidity</strong> is for early investors and employees with vested equity. The customer, the product, and the long-term health of the company get nothing from it. It is an exit event for the people who funded you, dressed up in the language of a milestone.
        </p>
        <p>
          <strong>Prestige</strong> is real but cheap. Being a public company used to mean something. In 2026, with{" "}
          <a href="https://techcrunch.com/2026/05/20/the-spacex-ipo-filing-ai-bets-starship-dreams-elon-musk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">SpaceX dominating the IPO news cycle the same week on its own S-1</a>{" "}and a market full of AI infrastructure companies with no path to profitability, &ldquo;we went public&rdquo; is not the signal it was twenty years ago.
        </p>
        <p>
          <strong>Capital</strong> is the only honest one. Public markets give you a deeper pool to raise from. But Oura just{" "}
          <a href="https://techcrunch.com/2025/09/22/oura-ring-maker-raising-875m-series-e-bringing-valuation-to-11b-report-says/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">raised $875M from private investors</a>{" "}eight months ago. They don&apos;t need more money. They need an exit for the people who gave them money.
        </p>
        <p>
          That&apos;s a fine reason to IPO. It&apos;s just not the same reason as &ldquo;we are building a hundred-year company.&rdquo;
        </p>

        <h2>The companies that didn&apos;t, and what they got for it</h2>
        <p>
          <a href="https://en.wikipedia.org/wiki/Mailchimp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Mailchimp turned down acquisition offers for twenty years</a>{" "}as a bootstrapped company before selling to{" "}
          <a href="https://investors.intuit.com/news-events/press-releases/detail/162/intuit-to-acquire-mailchimp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Intuit in 2021 for $12 billion in cash and stock</a> &mdash; on their own terms, at their own valuation, with no quarterly earnings call pressure shaping the decade leading up to it. Basecamp/37signals has been making the same argument out loud for twenty years. Valve has built one of the most profitable software companies on earth without ever filing a single quarterly earnings report.
        </p>
        <p>
          Patagonia did something more extreme. In 2022,{" "}
          <a href="https://www.patagoniaworks.com/press/2022/9/14/patagonias-next-chapter-earth-is-now-our-only-shareholder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Yvon Chouinard transferred ownership</a>{" "}of the entire $3B company into a purpose trust and a nonprofit, with annual profits redirected to fighting climate change. His public statement on why he didn&apos;t take the company public is worth reading in full:
        </p>
        <div className="my-8 pl-6 border-l-4 border-amber-400">
          <p className="text-xl italic text-slate-700 leading-relaxed" style={{ fontFamily: "var(--font-fraunces)" }}>
            &ldquo;Taking the company public would have been a disaster. Even public companies with good intentions are under too much pressure to create short-term gain at the expense of long-term vitality and responsibility.&rdquo;
          </p>
          <p className="mt-3 text-sm text-slate-500 not-italic">
            &mdash;{" "}
            <a href="https://www.aljazeera.com/amp/news/2022/9/15/patagonia-owner-yvon-chouinard-gives-away-company-to-save-planet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Yvon Chouinard, founder of Patagonia</a>
          </p>
        </div>
        <p>
          The pattern: companies that resisted the IPO gravity well got to keep being the thing their customers fell in love with. The ones that didn&apos;t &mdash; Fitbit, GoPro, Peloton, Beyond Meat &mdash; became cautionary tales for the next cohort.
        </p>
        <p>
          I&apos;d add: the public companies that <em>did</em>{" "}go public and held it together &mdash; Apple, Costco, Netflix &mdash; almost all had two things in common. A founder who never lost control of the board, and a product category big enough to absorb a decade of growth pressure without forcing the company to become something it wasn&apos;t. Oura has neither.
        </p>

        <h2>What I&apos;d want to see, if I were them</h2>
        <p>
          If I were Oura&apos;s leadership, I&apos;d treat this filing as the moment to set a different kind of expectation, loudly, before the roadshow starts:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
          <li>A multi-year roadmap that explicitly does not include a watch, a scale, or a patch.</li>
          <li>A subscription pricing commitment with a public ceiling.</li>
          <li>A founder-controlled dual-class share structure. Snap did it. Meta did it. It is allowed.</li>
          <li>A clear statement of what &ldquo;winning&rdquo; looks like at $5B revenue that does not require entering three new categories.</li>
        </ul>
        <p>
          Will any of this happen? Probably not. The bankers won&apos;t let it. The institutional investors won&apos;t price it. The pre-IPO investors who funded the Series E at $11B need a story bigger than &ldquo;we stay in our lane and compound.&rdquo;
        </p>
        <p>
          So the more likely outcome is the Fitbit one, on a slightly longer timeline. Two strong years post-IPO. A growth scare in year three. An adjacency play in year four that doesn&apos;t work. An acquisition rumor in year five. The ring stays on the shelves. The company that made it stops existing in any meaningful sense.
        </p>

        <h2>What could prove me wrong</h2>
        <p>
          Worth saying plainly: this is a prediction, and there&apos;s a real version of the next five years where I&apos;m flat wrong. Three things could break this thesis.
        </p>
        <p>
          <strong>One: women&apos;s health becomes the moat.</strong> Oura already{" "}
          <a href="https://techcrunch.com/2026/02/24/oura-launches-a-proprietary-ai-model-focused-on-womens-health/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">launched a proprietary AI model for women&apos;s health</a>{" "}earlier this year, and they&apos;re{" "}
          <a href="https://techcrunch.com/2025/10/13/oura-is-winning-young-women-and-losing-gym-rats-and-its-fine-with-that/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">winning young women specifically</a>{" "}while losing the gym-bro segment. If that becomes a defensible category &mdash; cycle tracking, fertility, perimenopause, pregnancy &mdash; Apple and Google can&apos;t easily catch up because they don&apos;t have the form factor or the years of data. That&apos;s a genuine moat, and a much bigger TAM than &ldquo;sleep tracker.&rdquo;
        </p>
        <p>
          <strong>Two: the medical device pivot works.</strong> If Oura gets FDA-cleared diagnostics into the ring &mdash; atrial fibrillation, sleep apnea, glucose, anything insurance will reimburse &mdash; the unit economics flip from consumer hardware to medical device. That&apos;s a different multiple, a different growth story, and a story public markets will actually pay for.
        </p>
        <p>
          <strong>Three: founder control gets baked in.</strong> If the S-1, when it goes effective, includes a dual-class share structure that gives founders/leadership real control, most of what I wrote above gets weaker. Public-market pressure only works if the public market actually controls the votes.
        </p>
        <p>
          I&apos;d put my own odds at maybe 30% on at least one of those playing out. That&apos;s enough to be cautious on Oura &mdash; not bearish, but worth watching closely.
        </p>
        <p>
          The Oura ring is one of the few pieces of hardware I&apos;ve owned that does exactly what it says it does, and nothing more. That is rare and it is valuable, and public markets are about to teach Oura that &ldquo;exactly enough&rdquo; is not an answer they accept.
        </p>
        <p>
          The most interesting companies of the next decade might be the ones that figure out how to stay private long enough to stay themselves.
        </p>
      </div>
    ),
};
