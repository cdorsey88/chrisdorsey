import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

const serif = { fontFamily: "var(--font-fraunces)" };
const sans  = { fontFamily: "var(--font-inter)" };

type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  color: string;
  tldr: string;
  content: React.ReactNode;
};

const posts: Post[] = [
  {
    slug: "oura-ipo-not-every-company-should-go-public",
    title: "Oura just filed to go public. That's exactly when I'd bet against them.",
    date: "May 22, 2026",
    readTime: "7 min",
    tag: "Business",
    color: "from-amber-600 to-orange-500",
    tldr: "Oura confidentially filed its S-1 yesterday — 5.5M rings sold at an $11B valuation in a category they invented. Public-market gravity is the thing most likely to break them. Fitbit is the case study, and Google relaunched the Fitbit Air this month as the explicit wedge against Oura.",
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
          Not because Oura is bad at what they do &mdash; they&apos;re great at it. <em>Because</em> they&apos;re great at it. The thing public markets are about to ask of them is incompatible with the thing that made them worth buying in the first place.
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
          <a href="https://thepixelcase.com/blogs/news/google-fitbit-air-review-complete-guide-the-99-screenless-tracker-that-changes-everything-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">retired entirely and rebranded as Google Health</a>. The Fitbit <em>brand</em> is a ghost, but the Fitbit <em>acquisition</em> is now Google&apos;s wedge against Oura specifically.
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
          <strong>Liquidity</strong> is for early investors and employees with vested equity. It is not for the customer, the product, or the long-term health of the company. It is an exit event for the people who funded you, dressed up in the language of a milestone.
        </p>
        <p>
          <strong>Prestige</strong> is real but cheap. Being a public company used to mean something. In 2026, with{" "}
          <a href="https://techcrunch.com/2026/05/20/the-spacex-ipo-filing-ai-bets-starship-dreams-elon-musk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">SpaceX dominating the IPO news cycle the same week on its own S-1</a> and a market full of AI infrastructure companies with no path to profitability, &ldquo;we went public&rdquo; is not the signal it was twenty years ago.
        </p>
        <p>
          <strong>Capital</strong> is the only honest one. Public markets give you a deeper pool to raise from. But Oura just{" "}
          <a href="https://techcrunch.com/2025/09/22/oura-ring-maker-raising-875m-series-e-bringing-valuation-to-11b-report-says/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">raised $875M from private investors</a> eight months ago. They don&apos;t need more money. They need an exit for the people who gave them money.
        </p>
        <p>
          That&apos;s a fine reason to IPO. It&apos;s just not the same reason as &ldquo;we are building a hundred-year company.&rdquo;
        </p>

        <h2>The companies that didn&apos;t, and what they got for it</h2>
        <p>
          <a href="https://en.wikipedia.org/wiki/Mailchimp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Mailchimp turned down acquisition offers for twenty years</a> as a bootstrapped company before selling to{" "}
          <a href="https://investors.intuit.com/news-events/press-releases/detail/162/intuit-to-acquire-mailchimp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Intuit in 2021 for $12 billion in cash and stock</a> &mdash; on their own terms, at their own valuation, with no quarterly earnings call pressure shaping the decade leading up to it. Basecamp/37signals has been making the same argument out loud for twenty years. Valve has built one of the most profitable software companies on earth without ever filing a single quarterly earnings report.
        </p>
        <p>
          Patagonia did something more extreme. In 2022,{" "}
          <a href="https://www.patagoniaworks.com/press/2022/9/14/patagonias-next-chapter-earth-is-now-our-only-shareholder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Yvon Chouinard transferred ownership</a> of the entire $3B company into a purpose trust and a nonprofit, with annual profits redirected to fighting climate change. His public statement on why he didn&apos;t take the company public is worth reading in full:
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
          I&apos;d add: the public companies that <em>did</em> go public and held it together &mdash; Apple, Costco, Netflix &mdash; almost all had two things in common. A founder who never lost control of the board, and a product category big enough to absorb a decade of growth pressure without forcing the company to become something it wasn&apos;t. Oura has neither.
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
          <a href="https://techcrunch.com/2026/02/24/oura-launches-a-proprietary-ai-model-focused-on-womens-health/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">launched a proprietary AI model for women&apos;s health</a> earlier this year, and they&apos;re{" "}
          <a href="https://techcrunch.com/2025/10/13/oura-is-winning-young-women-and-losing-gym-rats-and-its-fine-with-that/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">winning young women specifically</a> while losing the gym-bro segment. If that becomes a defensible category &mdash; cycle tracking, fertility, perimenopause, pregnancy &mdash; Apple and Google can&apos;t easily catch up because they don&apos;t have the form factor or the years of data. That&apos;s a genuine moat, and a much bigger TAM than &ldquo;sleep tracker.&rdquo;
        </p>
        <p>
          <strong>Two: the medical device pivot works.</strong> If Oura gets FDA-cleared diagnostics into the ring &mdash; atrial fibrillation, sleep apnea, glucose, anything insurance will reimburse &mdash; the unit economics flip from consumer hardware to medical device. That&apos;s a different multiple, a different growth story, and a story public markets will actually pay for.
        </p>
        <p>
          <strong>Three: founder control gets baked in.</strong> If the S-1, when it goes effective, includes a dual-class share structure that gives founders/leadership real control, most of what I wrote above gets weaker. Public-market pressure only works if the public market actually controls the votes.
        </p>
        <p>
          I&apos;d put my own odds at maybe 30% on at least one of those playing out. Which means I&apos;d bet against Oura &mdash; but not heavily, and not without watching closely.
        </p>
        <p>
          The Oura ring is one of the few pieces of hardware I&apos;ve owned that does exactly what it says it does, and nothing more. That is rare and it is valuable, and public markets are about to teach Oura that &ldquo;exactly enough&rdquo; is not an answer they accept.
        </p>
        <p>
          The most interesting companies of the next decade might be the ones that figure out how to stay private long enough to stay themselves.
        </p>
      </div>
    ),
  },
  {
    slug: "chatgpt-ads-manager-sellers-read",
    title: "Two weeks later: OpenAI shipped the Ads Manager. The seller's read.",
    date: "May 21, 2026",
    readTime: "3 min",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "OpenAI's Ads Manager UI went live today with holdco integrations and a $2.5B target. For sales orgs, three things change: the discovery question, defensive brand-bidding inside ChatGPT becomes a real budget line, and SDR pre-call research has to include an LLM check.",
    content: (
      <div className="prose-content">
        <p>
          A few weeks ago I wrote about{" "}
          <Link href="/writing/chatgpt-ad-platform" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            OpenAI opening ChatGPT ads to every U.S. advertiser through self-serve
          </Link>{" "}
          and adding CPC bidding. That was the policy change. Today is the product: OpenAI launched the
          actual Ads Manager UI inside ChatGPT, with the major holding companies &mdash; Dentsu, Omnicom,
          Publicis, WPP &mdash; wired in alongside Adobe, Criteo, and StackAdapt. The revenue target is
          now $2.5B for the year and $100B annually by 2030.
        </p>
        <p>
          The May 6 piece argued the brand-side playbook: audit organic GEO before spending a dollar, treat
          GEO as the prerequisite to paid, build for incrementality. All still true. This post is for the
          other side of the table &mdash; anyone running a sales org whose buyers are increasingly
          researching inside ChatGPT.
        </p>
        <p>
          Three things change for sellers when paid placements scale inside the answer layer.
        </p>

        <h2>1. The discovery question changes.</h2>
        <p>
          A prospect today already shows up partially educated by Google, LinkedIn, peer Slack groups, and
          what their team has tried. By the end of 2026, add &ldquo;and whatever ChatGPT showed them&rdquo;
          &mdash; except now some of that has been paid for. If a buyer arrives saying &ldquo;I&apos;ve heard
          great things about [competitor],&rdquo; I want to know where. Add one discovery question this
          quarter: &ldquo;When you were researching this, what tools did you use?&rdquo; The answer is now
          diagnostic.
        </p>

        <h2>2. Branded-prompt bidding will become a defensive line item.</h2>
        <p>
          The first thing that happened on Google Ads in 2005 was competitors bidding on each other&apos;s
          brand names. Expect the same here. When a prospect types &ldquo;alternatives to [your product],&rdquo;
          somebody will pay to be the answer. Talk to marketing now about who owns the &ldquo;defensive
          bidding inside ChatGPT&rdquo; budget line. The first time you lose a deal to a competitor named in
          an AI answer your buyer didn&apos;t research themselves, that conversation gets a lot more
          expensive.
        </p>

        <h2>3. SDR pre-call research has to include the LLM check.</h2>
        <p>
          If your reps prep a call by reading the prospect&apos;s LinkedIn and last earnings report,
          that&apos;s no longer sufficient. Five minutes inside ChatGPT &mdash; asking the model what it
          knows about the prospect&apos;s company, stated initiatives, and what tools are typical in their
          stack &mdash; surfaces what the prospect themselves was probably told this week. The buyer is
          taking advice from the same source your reps should be sanity-checking.
        </p>

        <p>
          The May 6 post worried about the answer layer becoming pay-to-play. Two weeks in, the
          infrastructure to make that real is shipping. The teams that build a feedback loop between deals
          lost, what the prospect &ldquo;knew&rdquo; coming in, and what the LLMs actually say about their
          category will spot pattern shifts six months before the marketing team does. Start the loop now.
        </p>
      </div>
    ),
  },
  {
    slug: "fake-watches-brand-launches",
    title: "The fake watches were better — and that should terrify every brand",
    date: "May 20, 2026",
    readTime: "5 min",
    tag: "Brands",
    color: "from-violet-600 to-purple-500",
    tldr: "AI-generated renders of the Swatch x AP collab circulated for weeks before the real product dropped — and the internet preferred the imagined version. The white space between tease and reveal isn't yours anymore. Brands that figure out how to make that a feature instead of a bug will define the next decade of launches.",
    content: (
      <div className="prose-content">
        <p>
          Justin Taylor published a piece today on his Substack{" "}
          <a href="https://thelandingpad.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">The Landing Pad</a>{" "}
          that I haven&apos;t stopped thinking about. The short version: Swatch and Audemars Piguet teased
          a collab. Before the actual reveal, the internet generated and shared fifty AI versions of what it should
          be &mdash; colorful Royal Oaks in every Pantone shade you can imagine. When the real product dropped (a
          pocket watch), people were deflated. The imagined version had already won.
        </p>
        <p>
          <a href="https://thelandingpad.substack.com/p/the-fake-watches-were-better" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Go read the whole thing.</a>{" "}
          It&apos;s worth ten minutes.
        </p>
        <p>
          This part really stood out to me:
        </p>
        <div className="my-8 pl-6 border-l-4 border-violet-400">
          <p className="text-xl italic text-slate-700 leading-relaxed" style={{ fontFamily: "var(--font-fraunces)" }}>
            &ldquo;You&apos;re not launching a product anymore. You&apos;re correcting one.&rdquo;
          </p>
        </div>
        <p>
          The watch is almost beside the point. Every product launch is going to work like this now.
        </p>

        <h2>The economics of brand storytelling have flipped</h2>
        <p>
          For a long time, the asymmetry favored brands: they had the photographers, the budgets, the agencies, the
          distribution. A teaser bought you two weeks of anticipation because nobody else could fill that space at
          scale. Now anyone with a prompt and ten minutes can produce something that looks more polished than the
          official campaign and spreads faster than the brand&apos;s own channels. The white space between tease and
          reveal isn&apos;t white anymore. It&apos;s already full of someone else&apos;s version of your product.
        </p>
        <p>
          And it doesn&apos;t stop at the campaign. Justin points out that people are already designing third-party
          straps for the Royal Pop. Aftermarket used to be a slow, niche business that required CNC machines and
          distribution. Now it&apos;s a weekend project. Your audience has already designed their version of your
          product before you&apos;ve shipped it.
        </p>

        <h2>The move most brands won&apos;t make</h2>
        <p>
          The best part of the piece is where Justin asks: what if you just stopped trying to outrun it? What if the tease was the invitation, and the brand built the campaign around the best community renders
          instead of trying to outrun them? You don&apos;t lose control of the narrative because you never claimed
          it. You hand it to the people who were going to take it anyway and let them feel like they made it with you.
        </p>
        <p>
          I think he&apos;s right, and I think the brands that figure this out first are going to look obvious in
          retrospect &mdash; the same way the early creator-economy brands look obvious now. The ones that don&apos;t
          are going to spend the next five years correcting launches instead of running them.
        </p>
        <p>
          This isn&apos;t a social media problem. It&apos;s not a community management problem. The window between
          announcement and arrival used to be yours. Now it belongs to your audience, and the only real question is
          whether you see that as a threat or an opening.
        </p>
        <p>
          The brands still building launch playbooks around tease-and-reveal cadences are writing strategy documents
          for a world that no longer exists.
        </p>
        <p>
          Read Justin&apos;s full piece:{" "}
          <a href="https://thelandingpad.substack.com/p/the-fake-watches-were-better" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2"><em>The fake watches were better</em></a>.
          Subscribe to{" "}
          <a href="https://thelandingpad.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">The Landing Pad</a>{" "}
          while you&apos;re there.
        </p>
      </div>
    ),
  },
  {
    slug: "publicis-liveramp-acquisition",
    title: "Publicis bought LiveRamp for $2.2B. The Trade Desk just lost more than LiveRamp did.",
    date: "May 18, 2026",
    readTime: "7 min",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "Publicis is paying $2.167B for LiveRamp — a 29.8% premium for the connectivity layer underneath modern programmatic. The biggest casualty isn't LiveRamp's customers; it's The Trade Desk's claim that UID2 is an independent identity standard. Brands have three things to do this week before close.",
    content: (
      <div className="prose-content">
        <p>
          <a href="https://liveramp.com/news/publicis-to-acquire-liveramp-to-accelerate-data-co-creation-for-smarter-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Press release</a> landed Tuesday morning. Publicis is paying $2.167 billion in cash for LiveRamp &mdash; $38.50 a
          share, 29.8% premium over Monday&apos;s close. By the time my second coffee was cold, three brand-side clients
          had texted me some version of the same question: should we be worried?
        </p>
        <p>
          Yes. But probably not for the reason most of the coverage is suggesting.
        </p>
        <p>
          Most of what I&apos;ve read so far treats this as another holdco land grab &mdash; Publicis stocking up on
          AI-era plumbing the same way they bought Epsilon in 2019 for $4.4B and Profiles a year ago. That framing isn&apos;t
          wrong. It&apos;s just incomplete. The second-order effect here is much bigger than the deal itself.
        </p>

        <h2>What Publicis actually bought</h2>
        <p>
          LiveRamp is not a CDP, and it is not really a &ldquo;data collaboration platform&rdquo; in the way the press
          release wants you to read it. What Publicis paid $2.2B for is the connectivity layer between data owners and
          the media supply chain &mdash; the RampID graph, the clean-room infrastructure, the integrations that sit
          between every major retailer&apos;s first-party data and the rest of the open internet.
        </p>
        <p>
          That is the substrate underneath modern programmatic. Publicis just bought the rails.
        </p>
        <p>
          Combine that with Epsilon, Profiles, and CoreAI &mdash; all already owned &mdash; and Publicis isn&apos;t a
          holding company anymore. They are a vertically integrated data and media operating system that happens to
          also own some agencies.
        </p>

        <h2>The Trade Desk just lost more than LiveRamp did</h2>
        <p>
          Here is the read I have not seen anyone make yet, and the one I think matters most.
        </p>
        <p>
          The Trade Desk&apos;s identity strategy for the last four years has been Unified ID 2.0 &mdash; the open-source
          alternative to walled-garden identity. UID2 was supposed to be the neutral standard for the open web. RampID
          was the named competitor. The pitch to brands was: choose UID2 if you want neutrality, RampID if you&apos;re
          already inside the LiveRamp ecosystem.
        </p>
        <p>
          As of yesterday, RampID is a Publicis-owned asset. Every brand running media through Publicis is now
          structurally incentivized to favor RampID over UID2. That is not a neutral identity standard anymore. That
          is an agency holdco&apos;s proprietary identity graph wearing the costume of an open standard.
        </p>
        <p>
          The Trade Desk stock didn&apos;t move much on the news. It should have. Brands are about to start asking
          pointed questions about whether their open-web ID strategy is sitting on top of a competitor&apos;s asset.
        </p>

        <h2>What brands should do this week</h2>
        <p>
          If you have meaningful media spend running through LiveRamp &mdash; and statistically you almost certainly
          do &mdash; three things to put in motion this week:
        </p>
        <p>
          First, map your exposure. Pull every contract where LiveRamp is a critical dependency: identity resolution,
          clean-room infrastructure, audience activation. Know what is load-bearing before close.
        </p>
        <p>
          Second, ask the LiveRamp account team about data portability post-close. Specifically: if a non-Publicis
          agency runs your media in 2027, can you take your audiences with you? Get the answer in writing now, while
          LiveRamp still has the incentive to retain you as a standalone enterprise customer.
        </p>
        <p>
          Third, get a written position from your non-Publicis agency. If WPP, the Omnicom-IPG combination, Dentsu, or
          your independent shop is running your buy, ask them in writing how they plan to use LiveRamp-dependent
          assets in 2026 and 2027. You will find out very quickly whether they have an actual plan or whether they are
          quietly hoping nobody asks.
        </p>

        <h2>The thing nobody is saying out loud</h2>
        <p>
          Independent adtech as a category did not die yesterday. It died a long time ago. Yesterday Publicis just
          hammered in the last nail &mdash; using the matched bookend of the same hammer they used on Epsilon six years
          ago. Acxiom sits inside IPG, now merged with Omnicom. LiveRamp sits inside Publicis. Profiles sits inside
          Publicis. Experian&apos;s marketing services arm is technically still independent and is probably making the
          next round of phone calls.
        </p>
        <p>
          The &ldquo;open&rdquo; internet has had its identity infrastructure quietly consolidated under three or four
          owners. There is no neutral middle anymore. There hasn&apos;t been for a while. Yesterday just made it
          impossible to keep pretending.
        </p>
        <p>
          If you are a brand, your job this quarter is to figure out what that means for your media plan. If you are a
          vendor selling into adtech, your job is to figure out which side of the consolidation you are on. And if you
          are The Trade Desk, your job is to come up with a much better answer to the question every CMO is about to
          ask: is UID2 actually independent anymore? Because the entire pitch deck got rewritten Tuesday morning,
          whether you wanted it to or not.
        </p>
      </div>
    ),
  },
  {
    slug: "claude-mythos-zero-day-security",
    title: "Claude autonomously found a 17-year-old zero-day. Pen-testing as a service has 12 months.",
    date: "May 17, 2026",
    readTime: "8 min",
    tag: "Security",
    color: "from-rose-600 to-orange-500",
    tldr: "Anthropic's unreleased Mythos model autonomously discovered a 17-year-old FreeBSD RCE that human red teams missed for two decades. It wasn't trained on vulnerability research — the capability is emergent. The pen-test market, the bug bounty model, and the entire security buying motion are about to change inside 12 months.",
    content: (
      <div className="prose-content">
        <p>
          A few weeks ago, Anthropic gave a small group of partners &mdash; Amazon, Apple, Cisco, Microsoft, CrowdStrike
          &mdash; early access to an unreleased model called Mythos. The program is called Glasswing. The technical
          writeup is sparse, the marketing is sparser still, and the part that should be on every security leader&apos;s
          desk this week is this:
        </p>
        <p>
          In limited testing, Mythos autonomously found and exploited a 17-year-old remote code execution flaw in
          FreeBSD that human red teams had crawled past for two decades. Nobody asked it to. Nobody trained it on
          vulnerability research. It looked at the codebase and figured it out.
        </p>
        <p>
          The trade press has been treating this as a curiosity. It is not a curiosity. It is the most important
          development in enterprise security buying since the SOC became a category.
        </p>

        <h2>Why &ldquo;emergent&rdquo; is the word that should keep you awake</h2>
        <p>
          Mythos finding zero-days is not a trained behavior. Anthropic did not sit down and fine-tune a model on CVE
          databases and exploit code with the explicit goal of producing a vulnerability researcher. The capability is
          a side effect of the model being better at general reasoning over large codebases.
        </p>
        <p>
          That distinction sounds academic. It isn&apos;t. Trained capabilities can be governed &mdash; you can decide
          not to ship the model with the vulnerability-research dataset attached. Emergent capabilities don&apos;t
          behave that way. They show up because the underlying reasoning got better. The only way to stop them is to
          make the model worse at everything else, which nobody is going to do.
        </p>
        <p>
          Translation: every frontier model from this point forward, regardless of how cautiously it ships, is going
          to be a vulnerability research tool. That is the bed, and the entire security industry is about to sleep in
          it.
        </p>

        <h2>What this does to the pen-test market</h2>
        <p>
          Here is the part nobody on the buy-side is internalizing yet. The pen-test motion is built around human-rate
          discovery. You hire a firm. They assign three to five engineers. They spend a couple of weeks crawling your
          environment. They write a report. You patch what they found. You wait until next quarter and run it again.
        </p>
        <p>
          That cadence existed because human attention was the bottleneck.
        </p>
        <p>
          The bottleneck is gone.
        </p>
        <p>
          What replaces it is continuous autonomous assessment &mdash; a model running against your codebase 24/7,
          finding issues faster than your humans can patch them. The product category that wins is &ldquo;continuous
          AI-driven security with managed remediation,&rdquo; not &ldquo;pen-test as a service.&rdquo; The vendors that
          end up owning that category are unlikely to be the names currently on your AOR. Anthropic, Google, OpenAI,
          and a small number of security-native specialists are about to become some of the most important enterprise
          infrastructure vendors on the planet, whether they wanted to be or not.
        </p>
        <p>
          If your CISO told you last quarter that AI in security was overhyped, ask them how they&apos;re sleeping this
          week.
        </p>

        <h2>The defender&apos;s dilemma you cannot ignore</h2>
        <p>
          A capability that finds vulnerabilities is, by definition, a capability that can be used to exploit them.
          The same Mythos that autonomously found the FreeBSD RCE could be pointed at any production codebase by
          anyone with sufficient access. Anthropic has serious safeguards. State actors are not waiting on Anthropic.
          Black-hat researchers will have access to comparable open-weight models inside six months.
        </p>
        <p>
          This means defense has to move first and at a cadence it has never moved at before. Quarterly red-team
          engagements aren&apos;t just slow &mdash; they are irrelevant. The window between vulnerability discovery and
          active exploitation in the wild is collapsing toward zero. If your remediation cycle takes 30 days, an
          adversary with a frontier model has 30 days to find every bug your last pen test missed and use them.
        </p>
        <p>
          The CISOs who win this transition are the ones who shift budget toward three things: continuous autonomous
          discovery and the infrastructure to run it safely; automated remediation pipelines that don&apos;t require a
          human in the loop for known issue classes; and faster patch cycles, even at the cost of some operational
          stability. That last one is going to be the hardest political fight in most enterprises, because the
          operations side has spent two decades optimizing for patch stability. They were right to. The constraint
          just changed, and nobody told them.
        </p>

        <h2>The controversial part</h2>
        <p>
          Bug bounty programs as currently structured are finished. They paid researchers for human-rate work. An
          attacker with a frontier model can do that work faster and cheaper than your bounty program pays &mdash; and
          adversaries don&apos;t disclose responsibly. The programs that survive will look very different: paying for
          novel attack classes, complex chained exploits, and adversarial AI behavior, not &ldquo;I found an XSS in
          your login flow.&rdquo;
        </p>
        <p>
          The pen-test firms that survive are going to look different too. The ones that thrive will be the ones who
          saw clearly in the first half of 2026 that their job changed from &ldquo;find bugs&rdquo; to &ldquo;interpret
          what the AI found and decide what humans need to do about it.&rdquo; Different product. Different headcount
          mix. Different pricing. Most legacy firms will not make this transition because they cannot &mdash; their
          business model is incompatible with the new economics. My over-under: three big-name security firms acquired
          or restructured by the end of 2027.
        </p>
        <p>
          If you are a security leader right now, this is the budget conversation of your year. The vendors you renew
          with in the next six months are the vendors your posture lives or dies on for the next three. Get this one
          right. Pretending Mythos is a curiosity is going to be the most expensive thing the security industry does
          this decade.
        </p>
      </div>
    ),
  },
  {
    slug: "stanford-agentic-ai-productivity-gap",
    title: "Stanford: agentic AI delivers 71% productivity gains. 80% of enterprises will miss them.",
    date: "May 16, 2026",
    readTime: "8 min",
    tag: "Enterprise AI",
    color: "from-indigo-600 to-blue-500",
    tldr: "Stanford's 2026 AI Index shows agentic AI delivering 71% median productivity gains where deployed, with only 20% of enterprises actually deploying it. 77% of failures trace to change management and data architecture, not the model. Hire a change management lead before you hire another AI engineer.",
    content: (
      <div className="prose-content">
        <p>
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Stanford&apos;s 2026 AI Index Report</a> dropped, and most of the coverage has fixated on the wrong numbers.
          Compute trends. Model evaluations. Country rankings. Useful, but not the story.
        </p>
        <p>
          The story is two numbers on the same page, and the 51-point gap between them.
        </p>
        <p>
          71%: median productivity gain reported by enterprises actively using agentic AI in production workflows.
        </p>
        <p>
          20%: percentage of enterprises actually doing it.
        </p>
        <p>
          Eighty percent of the enterprises in the world are watching a 71% productivity advantage compound at their
          competitors&apos; offices and doing none of the things that capture it. That isn&apos;t a technology gap. It
          is a management failure on a scale we haven&apos;t seen since the cloud transition.
        </p>

        <h2>The 95% number nobody wants to look at honestly</h2>
        <p>
          The same Stanford report tracks another statistic that is already getting weaponized in board decks all over
          the country: 95% of companies that have deployed generative AI report little to no measurable ROI. Cue
          every &ldquo;told you so&rdquo; think piece you have been seeing for six months.
        </p>
        <p>
          Then Stanford adds the part everyone is leaving off the slide.
        </p>
        <p>
          77% of those failures trace to change management and data architecture problems. Not the model. Not the
          prompt. Not the vendor.
        </p>
        <p>
          The model worked. The org around it didn&apos;t.
        </p>
        <p>
          I have been selling AI to enterprise buyers for three years. I have been in the room when this conversation
          happens. The dynamic is always the same. Procurement picks a vendor. IT integrates it. Marketing or sales or
          finance is told &ldquo;this will save you time.&rdquo; Six months later someone gives a board update where
          they explain that the tool is &ldquo;in use,&rdquo; but the team can&apos;t quite articulate the ROI. The
          vendor gets the blame. The org adjusts nothing. Then they buy the next thing.
        </p>
        <p>
          If 77% of your AI failures are change-management failures and you respond by switching vendors, you are
          going to spend the rest of this decade in the 95% bucket.
        </p>

        <h2>The actual playbook</h2>
        <p>
          I am going to be unfashionably direct here, because the soft version of this advice has not been working.
        </p>
        <p>
          Hire a change management lead before you hire another AI engineer.
        </p>
        <p>
          I know that is not what your CFO wants to hear. I know &ldquo;change management&rdquo; sounds like a 1998
          line item on a McKinsey deck that should have been retired a decade ago. The data is clear: that role is more
          load-bearing for your AI strategy than your next model upgrade. You can have GPT-7 and Claude Opus 6 and
          whatever Gemini ships next sitting in your tech stack and still produce zero ROI, because nobody on the
          business side has actually changed how the work gets done.
        </p>
        <p>
          The second move is auditing your data architecture before you pilot another agent. The reason most agentic
          workflows fail is that the agent is trying to act on data that lives in 14 different systems with 14
          different schemas and zero shared identity. The model is fine. The data is broken. Fixing your data
          architecture is unsexy, slow, expensive, and the precondition for any AI deployment that actually works.
        </p>
        <p>
          The third move is the one that gets the most pushback and is the most important. Put your agentic AI
          workstream under the COO or a dedicated transformation officer, not under the CTO. Agentic AI is not a
          technology deployment. It is an operating model change. Run it through the same org structure you used to
          deploy Salesforce in 2014 and you will get Salesforce-2014-quality results. Which is to say: mixed, on a
          good day.
        </p>

        <h2>The competitive math</h2>
        <p>
          The 20% of enterprises that captured the 71% productivity gain are not the ones with the biggest AI budget.
          They are the ones who treated the deployment as an operational redesign and staffed it that way.
        </p>
        <p>
          This part is brutal and worth saying out loud. If you are in a category where 20% of your competitors are
          running with a 71% productivity advantage and you are not, you have roughly 18 months before the structural
          cost gap becomes uncrossable without an acquisition. The companies in the leading 20% are reinvesting that
          differential into more product, more sales coverage, more AI deployment. The advantage compounds every
          quarter.
        </p>
        <p>
          The clean version of this story in two years reads: &ldquo;The companies that got AI right between 2024 and
          2026 are now an order of magnitude more efficient than the ones that didn&apos;t. The gap is no longer
          crossable without a strategic acquisition.&rdquo;
        </p>
        <p>
          The companies still debating whether agentic AI is overhyped have already lost. They just don&apos;t know it
          yet, because the productivity differential is invisible from the outside until it shows up as gross margin
          pressure two earnings cycles from now.
        </p>

        <h2>What I would do this week</h2>
        <p>
          If I had to give one piece of advice to a CEO or CRO this week, it would be this.
        </p>
        <p>
          Pick one workflow &mdash; just one &mdash; where agentic AI could plausibly cover 80% of the steps. Staff it
          as an operational redesign, not as a technology pilot. Give a single accountable owner a budget, a 90-day
          deadline, and the political cover to actually change how the work gets done. Then measure what changes.
        </p>
        <p>
          Most companies will not do this. They will keep buying tools, hoping the next vendor&apos;s demo is the one
          that finally works. The few who do this will look very different in 24 months &mdash; and the ones who
          didn&apos;t will be the case studies in the McKinsey deck that explains how the order book moved while
          everyone was looking at the dashboards.
        </p>
      </div>
    ),
  },
  {
    slug: "agentic-ai-stops-being-demo",
    title: "The week agentic AI stopped being a demo",
    date: "May 15, 2026",
    readTime: "8 min",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic&apos;s Wall Street agent deployments and Salesforce Agentforce mark a genuine inflection — from AI as tool to AI as autonomous workflow executor. The organizations that treat this month as the starting gun will look very different in 24 months from the ones still running readiness webinars.",
    content: (
      <div className="prose-content">
        <p>
          Something shifted this week, and I want to name it clearly.
        </p>
        <p>
          On May 5, <a href="https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Anthropic announced</a> that Claude agents are now in production at JPMorgan Chase, Goldman Sachs,
          Citi, AIG, and Visa. Not pilots. Not proofs of concept. Production deployments — agents running real
          workflows inside the largest financial institutions in the world. PwC followed on May 14 with a partnership
          to embed Claude agents into enterprise client work across finance and life sciences.
        </p>
        <p>
          At roughly the same time, Salesforce&apos;s Agentforce reached the point where it is not just suggesting
          pipeline updates — it is making them autonomously, watching for stale stages, pulling external signals, and
          updating records without a human in the loop.
        </p>
        <p>
          I have been selling AI products since before most people knew what an LLM was. I have watched three distinct
          waves of enterprise AI adoption. The first was &ldquo;let&apos;s explore.&rdquo; The second was
          &ldquo;let&apos;s pilot.&rdquo; The third — which is where we are right now — is &ldquo;let&apos;s run this
          in production.&rdquo; And the third wave changes everything about what sales leadership actually means.
        </p>

        <h2>What just changed</h2>
        <p>
          The distinction that matters here is not between AI tools and AI agents, even though that framing is
          everywhere right now. The distinction is between AI that assists a human decision and AI that executes a
          multi-step workflow autonomously.
        </p>
        <p>
          For the last two years, the enterprise AI story was mostly the first kind. AI that drafts your outreach.
          AI that summarizes a call. AI that suggests next steps. These are legitimately useful, and I use them every
          day. But they are still fundamentally about making a human faster at something a human was already doing.
        </p>
        <p>
          What Anthropic and Salesforce are shipping now is the second kind. Agents that watch a portfolio of deals
          in real time, identify the ones that have gone quiet, pull Gong transcripts and email threading data to
          understand why, update the CRM accordingly, and flag the rep when human judgment is actually required. The
          human is still in the loop — but the loop is much bigger. The agent handles the 80 percent that was just
          process; the human handles the 20 percent that actually requires relationship intelligence.
        </p>
        <p>
          That is a fundamentally different operating model for a sales team.
        </p>

        <h2>What this means for how you manage</h2>
        <p>
          If you are running a sales team right now and you are not actively thinking about which parts of your
          process should be handed to an agent, you are making the same mistake companies made in 2010 when they
          thought of email marketing as &ldquo;the thing marketing uses&rdquo; instead of the primary customer
          retention channel.
        </p>
        <p>
          The practical question is not &ldquo;how do I buy an AI product.&rdquo; The practical question is: what
          are the three most time-consuming things my reps do that do not require their specific relationship
          context? Those are the candidates for agent automation. Qualification follow-up, CRM hygiene, competitive
          research, initial outreach personalization — these are all in play. Sellers using AI are already 3.7x more
          likely to hit quota. The next delta is the ones whose entire workflow is agent-augmented versus the ones
          still using AI one prompt at a time.
        </p>
        <p>
          The deeper question, and the one I find more interesting, is: if agents handle the top-of-funnel process
          work, what does that do to your hiring model? The entry-level sales job has been under pressure for two
          years. If an agent can run 1,000+ qualified touches a day at a cost per contact an order of magnitude lower
          than a human rep, the SDR motion looks different. Not gone — but different. The humans who thrive are the
          ones who can manage agents, interpret what the agent is surfacing, and engage at the moments where
          relationship credibility actually matters.
        </p>
        <p>
          This is not science fiction. Anthropic is running it at Goldman Sachs right now.
        </p>

        <h2>The window is still open — but it&apos;s closing</h2>
        <p>
          What I keep telling the founders and sales leaders I work with is that we are in the narrowest window of
          competitive advantage from agentic AI, and most organizations are not moving fast enough through it.
        </p>
        <p>
          The companies that implement agentic workflows in the next 12 months will have a structural cost and speed
          advantage over the ones that wait until it becomes obvious. By the time it becomes obvious, the vendors
          will have raised their prices, the talent that knows how to implement this will be expensive and scarce,
          and the organizational habits needed to work alongside agents will take 18 months to build.
        </p>
        <p>
          The Anthropic&ndash;Wall Street story this week is not just a press release. It is a signal about where the
          enterprise AI adoption curve is. The largest, most compliance-heavy, most risk-averse institutions in the
          world just put AI agents into production. If JPMorgan can do it, there is no credible excuse for your
          RevOps team not to at least run a proof of concept this quarter.
        </p>
        <p>
          The concrete takeaway: pick one sales workflow this week — just one — where the output is predictable and
          the judgment required is low. Map the steps. Then ask whether an agent could run those steps with a human
          reviewing the exceptions. Qualification outreach. Competitive battlecard research. Deal hygiene
          notifications. If the answer is yes, you have just found your pilot. Start there, measure what changes,
          and build from that foundation.
        </p>
        <p>
          The demo phase is over. The organizations that treat this month as the starting gun will look very
          different in 24 months from the ones that are still running webinars about AI readiness.
        </p>
      </div>
    ),
  },
  {
    slug: "chatgpt-ad-platform",
    title: "OpenAI just turned ChatGPT into an ad platform. Here's what brands need to do in the next 90 days.",
    date: "May 6, 2026",
    readTime: "9 min",
    tag: "Future of Ads",
    color: "from-emerald-500 to-cyan-500",
    tldr: "OpenAI has opened ChatGPT ads to all U.S. advertisers. Build your organic GEO foundation before running a single paid placement — visibility without credibility converts poorly.",
    content: (
      <div className="prose-content">
        <p>
          On May 5, 2026, <a href="https://openai.com/index/new-ways-to-buy-chatgpt-ads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">OpenAI quietly did something</a> that will reshape the next decade of digital advertising. They
          dropped the $50,000 minimum spend requirement, opened ChatGPT Ads to every U.S. advertiser through
          self-serve, and added cost-per-click bidding. The pilot that started with a handful of enterprise
          brands is now open to everyone.
        </p>
        <p>
          The numbers already in market are not small. The ChatGPT ad business is pulling $100M+ in annualized
          revenue with an internal target of $102 billion by 2030. That is not a test. That is a land grab — and
          it is happening faster than any platform-to-ad-network transition in digital history, including Google&apos;s.
        </p>

        <h2>Why this matters more than the headlines suggest</h2>
        <p>
          Every major ad story gets covered the same way: platform launches ads, brands rejoice or panic, the cycle
          continues. But this one is structurally different, and most of the coverage is missing the point.
        </p>
        <p>
          The core difference is where in the purchase journey ChatGPT lives. Google Ads intercept a user who is
          already searching — intent already formed, query already typed. ChatGPT sits earlier and later than that.
          It&apos;s where people go to think through decisions, compare options, understand categories, and increasingly,
          to get a direct recommendation instead of a list of links.
        </p>
        <p>
          When a user asks ChatGPT &ldquo;what&apos;s the best project management tool for a 50-person team?&rdquo; — that is not
          a search. That is a buying conversation. The answer that comes back carries the weight of a trusted
          advisor, not a search result. Paid placement in that context is categorically different from a banner ad
          or even a sponsored link.
        </p>

        <h2>The 90-day playbook</h2>
        <p>
          Here is what I would actually do right now if I were running marketing or media strategy for an enterprise
          brand:
        </p>
        <p>
          First: audit your organic presence before touching paid. Run your category queries in ChatGPT, Claude,
          Perplexity, and Gemini. See what comes back. If your brand isn&apos;t appearing organically in the answer
          layer, paying for placement will help you show up — but without the surrounding context, the model has
          nothing to reinforce. You&apos;ll get visibility without credibility, which converts poorly.
        </p>
        <p>
          Second: treat GEO like the prerequisite it is. Generative Engine Optimization — structured data,
          authoritative citations, schema markup, content written for how LLMs retrieve and synthesize — is now
          table stakes before you run LLM advertising. The brands that will win paid placement in ChatGPT are the
          ones the model already trusts organically. This is not different from how Google Ads works at the quality
          score level. Organic authority amplifies paid.
        </p>
        <p>
          Third: start small, measure differently. Standard attribution models do not work here. ChatGPT ad
          interactions are conversational — a user might click a sponsored result mid-conversation, bounce, and
          return three days later through direct. Last-click attribution will undercount impact significantly.
          Build for incrementality testing from day one or you will pull budget from something that is actually
          working.
        </p>
        <p>
          Fourth: think about format. Early reports from the enterprise pilot suggest that sponsor callouts
          appearing within conversational responses outperform traditional display-style placements. This should
          surprise no one — the format that fits the container works better. Write ad copy that reads like a
          recommendation, not an ad.
        </p>

        <h2>The harder question</h2>
        <p>
          The thing nobody wants to say out loud: what happens when the answer layer becomes pay-to-play at scale?
        </p>
        <p>
          Right now, the brands appearing in ChatGPT responses are there because of content quality, schema,
          citations, and genuine authority. The moment heavy paid penetration hits, smaller brands and independent
          voices that built organic presence get crowded out — not because their content got worse, but because
          their budgets can&apos;t compete. We have seen this movie before, on every platform that started as a meritocracy
          and became a media buy.
        </p>
        <p>
          The window to build durable organic presence in the answer layer is closing. Not tomorrow, but within
          18-24 months. The brands treating GEO as a &ldquo;we&apos;ll get to it&rdquo; initiative will be in the same position
          in 2028 that brands who ignored SEO in 2004 found themselves in 2008.
        </p>
        <p>
          Build the organic foundation now. Run the paid experiments. Measure differently than you ever have before.
          The next 90 days are genuinely important.
        </p>
      </div>
    ),
  },
  {
    slug: "geo-new-seo",
    title: "GEO is the new SEO — and most brands are already losing",
    date: "Apr 28, 2026",
    readTime: "6 min",
    tag: "GEO",
    color: "from-emerald-500 to-teal-500",
    tldr: "LLMs are consistently surfacing the same vendors for category queries, and they're rarely the category leaders. GEO is now the prerequisite for being found, and most brands haven't started.",
    content: (
      <div className="prose-content">
        <p>
          I searched &ldquo;best CRM for mid-market companies&rdquo; in ChatGPT and Claude this morning.
          The same three vendors came up in both. None of them were Salesforce. None of them were HubSpot.
        </p>
        <p>
          Two of the three vendors that appeared are not the category leaders by revenue or by brand recognition.
          They are not the ones spending the most on Google Ads or sponsoring the most conferences. But they are
          the ones that LLMs have been trained to associate with credibility in that space — because of how they
          have structured their content, built their citation graph, and shown up in the sources that models
          actually learn from.
        </p>
        <p>
          That is Generative Engine Optimization. And most marketing teams have not started.
        </p>

        <h2>How LLMs decide what to surface</h2>
        <p>
          The mistake most people make when they first encounter GEO is assuming it works like SEO — that you can
          optimize a page title, stuff some keywords, and climb a ranking. It does not work like that.
        </p>
        <p>
          Language models build their understanding of your brand from the entire corpus of text they were trained
          on and, increasingly, from real-time retrieval from sources they trust. They are synthesizing a picture
          of who you are from: the quality and specificity of your public content, the sites that reference and
          cite you, the structured data that describes what you do, and how consistently you appear in authoritative
          third-party contexts.
        </p>
        <p>
          This means the question is not &ldquo;how do I rank for this keyword&rdquo; — it is &ldquo;what does
          the model believe about my brand, and what is the evidence base for that belief?&rdquo;
        </p>

        <h2>The three ways brands appear in LLM responses</h2>
        <p>
          In my experience auditing how brands appear across ChatGPT, Claude, Perplexity, and Gemini, there are
          three modes of presence:
        </p>
        <p>
          Cited presence: the model actively names your brand in a response and attributes a claim or capability
          to you. This is the highest-value placement — it carries implicit endorsement. It comes from being
          referenced in high-authority sources the model trusts.
        </p>
        <p>
          Contextual presence: your brand appears as part of a category when a user asks about the space broadly.
          &ldquo;Companies working on X include A, B, and C.&rdquo; Lower weight than a direct citation but still
          valuable for awareness and consideration.
        </p>
        <p>
          Absent: the model answers the question without mentioning you at all, or — worse — describes your
          category and explicitly names your competitors. This is where most brands are today.
        </p>

        <h2>What you can actually do</h2>
        <p>
          Three things that move the needle faster than almost anything else:
        </p>
        <p>
          Structured data and schema markup. JSON-LD on your site that clearly describes what you do, who you
          serve, and what you are known for gives models a reliable, machine-readable signal. Most brands have
          none. Implementing even a basic Person, Organization, and Product schema puts you ahead of the majority
          of your competitors.
        </p>
        <p>
          Third-party citation building. Models trust what authoritative sources say about you more than what you
          say about yourself. This means editorial coverage, analyst mentions, high-quality backlinks, and
          presence in industry-specific repositories that models are trained to treat as credible. The content
          strategy goal is not ranking — it is being cited.
        </p>
        <p>
          Specificity over volume. LLMs surface brands that are known for specific, concrete things — not brands
          with long lists of capabilities. &ldquo;Best project management tool for remote engineering
          teams&rdquo; returns different results than &ldquo;best project management tool.&rdquo; The brands
          that appear in the specific query are the ones that have published specific, high-quality content about
          that exact use case. Broad content that tries to own everything owns nothing in the answer layer.
        </p>

        <h2>The urgency is real</h2>
        <p>
          SEO took a decade to mature into a discipline that most marketing teams staffed for and budgeted around.
          GEO is moving faster because the adoption of AI-powered search is moving faster. The brands building
          presence in the answer layer right now are establishing positions that will be significantly harder
          to displace in 18 months.
        </p>
        <p>
          Run the audit first. Search for your category in each of the major LLMs. See where you appear, where
          you don&apos;t, and who is showing up in your place. That gap is the work.
        </p>
      </div>
    ),
  },
  {
    slug: "ai-entry-level-jobs",
    title: "AI didn't kill the entry-level job. Interest rates and a tax change did.",
    date: "Apr 14, 2026",
    readTime: "8 min",
    tag: "Macro",
    color: "from-teal-500 to-emerald-600",
    tldr: "Federal Reserve research shows AI had null effects on job postings. Interest rates, Section 174, and post-pandemic normalization are the real story — and understanding that changes how you sell.",
    content: (
      <div className="prose-content">
        <p>
          The story writes itself. AI arrived. Companies started laying people off. Therefore AI caused the layoffs.
          It is a clean narrative, it fits on a headline, and it is largely wrong.
        </p>
        <p>
          I have been selling AI products for three years. I have been in rooms with enterprise buyers who are
          simultaneously cutting headcount and buying AI software. And I can tell you that the causality is more
          complicated than the coverage suggests — and that understanding the real story matters enormously for
          how you think about your own career and how you sell into this market.
        </p>

        <h2>What the data actually says</h2>
        <p>
          A <a href="https://www.federalreserve.gov/econres/notes/feds-notes/ai-adoption-and-firms-job-posting-behavior-20260327.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Federal Reserve study</a> covering more than one million firms found what the researchers called
          &ldquo;precisely-estimated null effects&rdquo; for AI adoption on job postings. Not a small effect.
          Not a mixed effect. Null. A 2025 NBER paper tracking 25,000 workers across 7,000 workplaces found zero
          statistically significant effect on earnings or hours worked after AI tool adoption.
        </p>
        <p>
          These are not fringe studies. They are among the most rigorous examinations of AI&apos;s labor market
          impact conducted in the post-ChatGPT era. And they do not support the displacement narrative that has
          dominated the conversation.
        </p>
        <p>
          Here is what else the data shows: 59% of hiring managers in a recent survey admitted they cite AI
          in layoff messaging because it &ldquo;plays better with stakeholders than financial constraints.&rdquo;
          AI is being used as a narrative device to explain decisions that were made for entirely different
          reasons.
        </p>

        <h2>What actually happened</h2>
        <p>
          Three things converged to create the hiring freeze of 2024-2026, and none of them are named GPT-4.
        </p>
        <p>
          Interest rates. The Fed raised rates seventeen times between 2022 and 2024. The cost of capital for
          growth-stage companies went from effectively zero to 5–7%. Companies that had been hiring aggressively
          against cheap debt capital suddenly needed to show a path to profitability. The first place most
          companies cut when the cost of capital rises is headcount. This is not new — it happened in 2001, in
          2008, and it happened again.
        </p>
        <p>
          Section 174. This is the one almost nobody is talking about. A 2017 tax law change took effect in 2022
          that required companies to amortize R&amp;D expenses over five years rather than deducting them
          immediately. For technology companies that classify significant portions of engineering salary as
          R&amp;D expense — which is most of them — this dramatically changed the math on hiring engineers and
          developers. The entry-level tech jobs that disappeared fastest are concentrated in software engineering
          roles, which tracks directly with where Section 174 created the most acute cost pressure.
        </p>
        <p>
          Post-pandemic normalization. Companies over-hired in 2020 and 2021 against pandemic-driven demand that
          turned out to be temporary. E-commerce companies, streaming platforms, logistics companies — all hired
          for a world that looked different than the one that emerged. The layoffs of 2023 and 2024 were, in
          significant part, the correction of that over-hiring. The timing just happened to coincide with AI
          becoming publicly visible.
        </p>

        <h2>Why this matters for how you sell</h2>
        <p>
          If you are selling AI to enterprise buyers right now, and you understand the above, you have a
          significant advantage over competitors who have swallowed the displacement narrative whole.
        </p>
        <p>
          Enterprise buyers are not cutting jobs because AI is doing their work. They are cutting jobs because
          of capital costs and tax law. AI is being positioned as the justification, but the actual constraint
          is budget — and the actual question your buyer is asking is whether your product can help them do
          more with fewer people because they have to, not because the technology makes it inevitable.
        </p>
        <p>
          That is a very different sales conversation. It is a conversation about efficiency under constraint,
          not transformation for its own sake. The buyers who are approving AI purchases right now are doing it
          to solve a budget problem, not to replace a workforce.
        </p>
        <p>
          Lead with the outcome, not the technology. And when your buyer asks &ldquo;will this replace my team,&rdquo;
          understand that what they are often really asking is &ldquo;will this help me justify to my CFO why
          I&apos;m not growing headcount?&rdquo; Those are different questions, and they have different answers.
        </p>
        <p>
          The macro story in 2027 looks different from today. Rates are coming down. Section 174 is under
          political pressure. Post-pandemic normalization is largely complete. The companies that used the
          constraint period to build AI-powered workflows will come out on the other side with significant
          productivity advantages. The ones that waited will be hiring back into a more competitive landscape.
        </p>
        <p>
          That is the conversation worth having with your buyers right now.
        </p>
      </div>
    ),
  },
  {
    slug: "selling-ai-skeptical-buyers",
    title: "Selling AI to skeptical buyers (a field guide)",
    date: "Feb 11, 2026",
    readTime: "7 min",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "The enterprise buyers you're selling to have been burned before. Stop adding proof and start diagnosing the specific failure that created the skepticism.",
    content: (
      <div className="prose-content">
        <p>
          The enterprise buyer sitting across from you — or on the other side of your Zoom — has seen fifty AI
          demos in the past six months. They have heard &ldquo;it&apos;s like having a junior analyst on your team,&rdquo;
          &ldquo;it learns your workflow,&rdquo; and &ldquo;you&apos;ll save 40% of your time&rdquo; more times
          than they can count.
        </p>
        <p>
          They have also been burned. The tool that was going to transform their content pipeline is now a $30K
          line item that three people use occasionally. The AI email writer generates copy that sounds like it
          was written by a robot trying to sound human. They approved the budget, championed it internally, and
          now they own the failure.
        </p>
        <p>
          This is the room you are walking into. And it is actually a good room to be in — if you know what to
          do with it.
        </p>

        <h2>The instinct that kills deals</h2>
        <p>
          Most sellers respond to skepticism by adding more proof. More case studies. More ROI calculations. More
          demos that show additional features. The logic is: they don&apos;t believe me, so I need to show them
          more evidence.
        </p>
        <p>
          This almost always backfires. When a buyer is skeptical, more evidence lands as more noise. They are
          not evaluating your evidence — they are filtering for the catch. Every impressive stat triggers the
          internal question: &ldquo;Yes, but what&apos;s the part you&apos;re not telling me?&rdquo;
        </p>
        <p>
          The move that actually works is to stop selling and start diagnosing. Get curious about the specific
          failure that created the skepticism. The conversation shifts from &ldquo;let me show you what we can do&rdquo;
          to &ldquo;tell me about the thing that didn&apos;t work last time.&rdquo;
        </p>

        <h2>The framework I actually use</h2>
        <p>
          I call it proof of work, and it has three components.
        </p>
        <p>
          Acknowledge the failure first — not your product&apos;s failure, the category&apos;s failure.
          &ldquo;AI tools have massively overpromised in the past two years. The gap between what got demo&apos;d
          and what got delivered has been significant. I assume you&apos;ve experienced some version of
          that.&rdquo; This does two things: it signals that you understand their reality, and it separates you
          from the vendors they&apos;ve already tried. You are not pretending the category has been perfect.
        </p>
        <p>
          Get specific about the failure mode. &ldquo;When you think about the AI tools that have underdelivered
          for you — what was the gap? Was it that the output quality wasn&apos;t there? That the adoption never
          happened? That the ROI was real but impossible to attribute?&rdquo; Let them tell you exactly what went
          wrong. That answer tells you everything about what they need to hear from you.
        </p>
        <p>
          Match your story to their failure. If adoption was the problem, lead with implementation support and
          change management — not product features. If output quality was the problem, get into a working session
          where they see real output against their actual use case, not a generic demo. If attribution was the
          problem, talk about measurement before you talk about the product.
        </p>

        <h2>Handling "we're evaluating everything"</h2>
        <p>
          The most common stall in enterprise AI sales right now is the parallel evaluation. &ldquo;We&apos;re looking
          at six vendors, we&apos;ll make a decision in Q3.&rdquo; It sounds reasonable. It often means the buying
          process is stuck and no one has authority to move it.
        </p>
        <p>
          The right move is not to compete on the evaluation rubric — it is to get off the rubric entirely. Ask
          for a pilot on a specific, bounded use case with a defined success metric. &ldquo;Instead of a parallel
          evaluation across six tools, let us earn the right to compete. Give us one use case, thirty days, a
          clear definition of what success looks like. If we hit it, you have real evidence. If we don&apos;t,
          you have lost thirty days instead of six months.&rdquo;
        </p>
        <p>
          Most buyers say yes to this — because it is a better deal for them, and because you are the only one
          offering it.
        </p>

        <h2>The enterprise timeline reality</h2>
        <p>
          Enterprise AI deals are slow. Slower than you think they should be, slower than the buyer thinks they
          should be, and slower than your forecast says they will be. Security reviews, procurement, legal,
          IT integration, change management — each of these is a real gate, and treating them as obstacles
          rather than requirements is a mistake.
        </p>
        <p>
          The sellers I have seen close the most in this space are the ones who get ahead of the process instead
          of behind it. Who ask about procurement requirements in the discovery call. Who introduce their
          implementation team before the contract is signed. Who map the internal champion&apos;s career risk
          alongside their business case.
        </p>
        <p>
          Skeptical buyers are not blocked buyers. They are buyers who have been burned and need a different
          kind of evidence — evidence that you understand their situation, that you are not going to oversell
          them into another failure, and that you will still be there six months after the contract to make
          sure it works.
        </p>
        <p>
          That is a higher bar than most sellers want to clear. It is also why the sellers who clear it tend
          to own the accounts they win for a long time.
        </p>
      </div>
    ),
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Chris Dorsey`,
    description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
    authors: [{ name: "Christopher Dorsey", url: "https://chrisdorsey.co" }],
    openGraph: {
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      url: `https://chrisdorsey.co/writing/${post.slug}`,
      type: "article",
      authors: ["https://chrisdorsey.co"],
      siteName: "Chris Dorsey",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      creator: "@chrisdorsey",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const tagColors: Record<string, string> = {
    Brands:          "from-violet-600 to-purple-500",
    "Future of Ads": "from-emerald-500 to-cyan-500",
    GEO:             "from-emerald-500 to-teal-500",
    Macro:           "from-teal-500 to-emerald-600",
    Sales:           "from-cyan-500 to-blue-600",
    MadTech:         "from-fuchsia-600 to-rose-500",
    Security:        "from-rose-600 to-orange-500",
    "Enterprise AI": "from-indigo-600 to-blue-500",
  };
  const color = tagColors[post.tag] ?? "from-blue-500 to-cyan-500";

  const postUrl = `https://chrisdorsey.co/writing/${post.slug}`;
  const publishedISO = new Date(post.date).toISOString();
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.title,
    description: post.tldr,
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: { "@id": "https://chrisdorsey.co/#person" },
    publisher: { "@id": "https://chrisdorsey.co/#person" },
    isPartOf: { "@id": "https://chrisdorsey.co/#blog" },
    url: postUrl,
    articleSection: post.tag,
    keywords: [post.tag, "Christopher Dorsey", "AI", "MadTech", "GEO"].join(", "),
    image: "https://chrisdorsey.co/opengraph-image",
    inLanguage: "en-US",
  };

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        background: "linear-gradient(180deg, #F0F7FA 0%, #E8F4F8 100%)",
        fontFamily: "var(--font-inter)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Nav */}
      <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link href="/" className="font-bold" style={serif}>
            <span className="text-slate-900">Christopher </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Dorsey</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Tag + meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full bg-gradient-to-r ${color}`}
          >
            {post.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3 h-3" /> {post.readTime} read
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-10 text-slate-900"
          style={serif}
        >
          {post.title}
        </h1>

        {/* Author + top share icons */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Christopher Dorsey"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-sky-100"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Christopher Dorsey</p>
              <p className="text-xs text-slate-500">AI &amp; MadTech Advisor · Enterprise Sales Leader</p>
            </div>
          </div>
          {/* Icon-only share bar */}
          <div className="flex items-center gap-2">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 transition">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Threads" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 transition">
              <svg width="12" height="12" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
            </a>
            <a href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-600 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${color} mb-10`} />

        {/* TLDR */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">TL;DR</p>
          <p className="text-slate-700 leading-relaxed">{post.tldr}</p>
        </div>

        {/* Body */}
        <div
          className="text-lg text-slate-700 leading-relaxed space-y-6"
          style={sans}
        >
          <style>{`
            .prose-content p { margin-bottom: 1.5rem; line-height: 1.8; }
            .prose-content h2 {
              font-family: var(--font-fraunces);
              font-size: 1.5rem;
              font-weight: 800;
              color: #0f172a;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              line-height: 1.2;
            }
          `}</style>
          {post.content}
        </div>

        {/* Share — bottom */}
        <div className="mt-16 pt-8 border-t border-sky-200">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Share this post</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chrisdorsey.co/writing/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X
            </a>
            <a
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(`${post.title} https://chrisdorsey.co/writing/${post.slug}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 50 50" fill="currentColor"><text x="2" y="42" font-size="48" font-family="system-ui,sans-serif" font-weight="bold">@</text></svg>
              Threads
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(`https://chrisdorsey.co/writing/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm border border-slate-200 text-slate-600 hover:border-orange-400 hover:text-orange-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              Reddit
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Thought you'd find this interesting: https://chrisdorsey.co/writing/${post.slug}`)}`}
              className="text-sm border border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-600 px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
          </div>
        </div>

        {/* Author bio */}
        <div className="mt-16 pt-10 border-t border-sky-200">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">About the author</p>
          <div className="flex items-start gap-5 bg-white/70 border border-sky-100 rounded-2xl p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Christopher Dorsey"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-sky-100"
            />
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900" style={serif}>Christopher Dorsey</p>
              <p className="text-sm text-slate-500 mb-3">AI &amp; MadTech Advisor · Enterprise Sales Leader · GEO Consultant · Denver, CO</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Fifteen years selling technology to Fortune 500 brands across AI, advertising, and data infrastructure
                — most recently at Zeta Global, Oracle, and Fastly. Currently advising founders and sales leaders on
                AI go-to-market and Generative Engine Optimization.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="https://www.linkedin.com/in/cdorsey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium"
                >
                  LinkedIn
                </a>
                <span className="text-slate-300">·</span>
                <a
                  href="mailto:ctjdorsey@gmail.com"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium"
                >
                  ctjdorsey@gmail.com
                </a>
                <span className="text-slate-300">·</span>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Work with me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-10 border-t border-sky-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Keep reading</p>
            <div className="grid gap-4">
              {relatedPosts.map((rp) => {
                const rpColor = tagColors[rp.tag] ?? "from-blue-500 to-cyan-500";
                return (
                  <Link
                    key={rp.slug}
                    href={`/writing/${rp.slug}`}
                    className="group block bg-white/70 hover:bg-white border border-sky-100 hover:border-blue-200 rounded-xl p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap text-white px-2.5 py-0.5 rounded-full bg-gradient-to-r ${rpColor}`}
                      >
                        {rp.tag}
                      </span>
                      <span className="text-xs text-slate-400">{rp.date}</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400">{rp.readTime} read</span>
                    </div>
                    <h3
                      className="text-base md:text-lg font-bold tracking-tight group-hover:text-blue-600 transition leading-snug"
                      style={serif}
                    >
                      {rp.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-10 pt-8 border-t border-sky-200">
          <p className="text-slate-500 text-sm mb-4">
            Questions, pushback, or just want to compare notes?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ctjdorsey@gmail.com"
              className="text-sm bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition font-medium"
            >
              Get in touch
            </a>
            <Link
              href="/#writing"
              className="text-sm border border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 px-5 py-2.5 rounded-full transition font-medium"
            >
              More writing
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
