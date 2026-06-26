import React from "react";
import { CONTACT_EMAIL } from "@/app/lib/site-config";
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
  sources?: { title: string; url: string }[];
};

const posts: Post[] = [
  {
    slug: "qualcomm-modular-lock-in-software-moat",
    title: "Qualcomm paid $4 billion to attack a software moat. Yours is next.",
    date: "Jun 25, 2026",
    readTime: "5 min",
    tag: "Macro",
    color: "from-indigo-600 to-cyan-600",
    tldr: "Qualcomm announced an all-stock deal worth roughly $3.92 billion for Modular, whose MAX platform and Mojo language let developers write an AI model once and run it on Nvidia, AMD, Apple, or Qualcomm chips with no CUDA and no rewrite. The target isn't a chip; it's Nvidia's software moat — the switching cost that keeps developers from leaving. For sellers, the deal is a warning: lock-in and value look identical on a renewal report, but only one survives a competitor offering your customer a free way out. Find out which moat you have before someone runs the test for you, and spend the next year making the product worth keeping on its own merits.",
    content: (
      <div className="prose-content">
        <p>
          Qualcomm said Wednesday it&apos;s{" "}
          <a href="https://investor.qualcomm.com/news-events/press-releases/news-details/2026/Qualcomm-to-Acquire-Modular/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">acquiring Modular</a> in an all-stock deal worth about $3.92 billion. Qualcomm makes chips. Modular makes none. What Modular makes is software that runs an AI model across whatever silicon you have &mdash; Nvidia, AMD, Apple, Qualcomm &mdash; without rewriting the code for each one. Qualcomm just paid four billion dollars for the ability to not be locked into anyone. That price tag is the whole story.
        </p>
        <p>
          Nvidia&apos;s lead in AI was never only the chips. CUDA, its software layer, made Nvidia the default place developers build, and porting all that code to another vendor is expensive enough that most teams never bother. The chips are fast. The lock-in is what keeps the customer. Modular, started in 2022 by Chris Lattner &mdash; the engineer behind Apple&apos;s Swift language and the LLVM compiler &mdash; built the counter: a platform called MAX and a language called Mojo that let a team write once and run anywhere, no CUDA required. Buy Modular and you buy the way out of everyone else&apos;s lock-in, with your own hardware suddenly a real option for the customer.
        </p>
        <p>
          Cristiano Amon, Qualcomm&apos;s CEO, framed it as a bet on &ldquo;developer-friendly, horizontal platforms that can run across diverse compute environments and give customers real choice in how and where they deploy AI.&rdquo; Put plainly: the customer wants out of the trap, and Qualcomm will sell them the door. The money behind that is inference &mdash; running models in production, the bill that grows every month as usage climbs &mdash; where buyers are hunting for cheaper options and resent being unable to switch. Qualcomm is reportedly also circling chip startup Tenstorrent for $8 to $10 billion, so this isn&apos;t a one-off.
        </p>
        <h2>What this says about your own moat</h2>
        <p>
          Every seller has a moat, and it&apos;s one of two kinds. Either customers stay because leaving is painful &mdash; the data&apos;s trapped, the integrations run deep, the contract&apos;s long &mdash; or they stay because the thing is worth keeping. The two look identical on a renewal report. Both show retention. The difference only surfaces when someone offers the customer a clean way out. Nvidia is about to learn what its number really was.
        </p>
        <p>
          For years, switching costs were the safest asset a software company could own, and investors paid up for them. Now there&apos;s a buyer willing to spend four billion dollars to manufacture an exit for the customer, and AI keeps lowering the cost of rebuilding what used to be too expensive to touch. Anything you sell whose stickiness rests on &ldquo;it&apos;s a hassle to leave&rdquo; is a target. If your renewal conversation leans on the migration being awful, you&apos;re renting that customer, and the lease is getting shorter.
        </p>
        <h2>If you sell</h2>
        <p>
          Find out which moat you have before a competitor runs the test for you. Ask the uncomfortable version of the renewal question: if a rival offered to move your customer off you for free this quarter, would they go? If the answer is &ldquo;they&apos;d stay because switching is a nightmare,&rdquo; you have a lock-in moat with a clock on it. Spend the next year converting it into the other kind &mdash; make the product worth keeping on its own merits, get adoption deep enough that people would miss it, tie your price to an outcome the buyer can name out loud. None of that is new advice. The deadline is what&apos;s new.
        </p>
        <h2>If you buy</h2>
        <p>
          The flip side is a gift, and you should take it. The whole point of a deal like this is to hand you leverage you didn&apos;t have. Anywhere you&apos;re stuck with a vendor because moving is too expensive, the cost of moving is falling, and you can use that at the next renewal whether or not you ever actually leave. Ask your stickiest vendors what it would take to port off them today, and watch how they answer. The ones building real value will tell you and not flinch. The ones who&apos;ve been coasting on switching costs will get nervous, and that tells you where to push on price.
        </p>
        <p>
          Qualcomm just demonstrated, at four billion dollars, that lock-in has a price and someone will pay it to set your customers free. The sellers who sleep fine are the ones whose customers could leave tomorrow and choose not to. Build that, and the next acquisition aimed at prying open your category does nothing to your number.
        </p>
      </div>
    ),
    sources: [
      { title: "Qualcomm — Qualcomm to Acquire Modular (June 24, 2026)", url: "https://investor.qualcomm.com/news-events/press-releases/news-details/2026/Qualcomm-to-Acquire-Modular/default.aspx" },
      { title: "Tech Startups — Qualcomm acquires AI startup Modular in $4 billion deal to challenge Nvidia's CUDA dominance (June 24, 2026)", url: "https://techstartups.com/2026/06/24/qualcomm-acquires-ai-startup-modular-in-4-billion-deal-to-challenge-nvidias-cuda-dominance/" },
      { title: "SDxCentral — Qualcomm acquires AI startup Modular in open ecosystem bet to challenge CUDA", url: "https://www.sdxcentral.com/news/qualcomm-acquires-ai-startup-modular-in-open-ecosystem-bet-to-challenge-cuda/" },
    ],
  },
  {
    slug: "walmart-vibe-self-serve-tv-advertising",
    title: "Walmart bought the self-serve button for TV. It's aimed at the advertisers TV always priced out.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    tag: "Future of Ads",
    color: "from-violet-600 to-fuchsia-600",
    tldr: "Walmart is acquiring Vibe.co, a self-serve connected-TV platform with 10,000+ mostly-SMB advertisers that lets you buy streaming TV like a paid-social ad — fast, measurable, no agency. Folded into Walmart Connect, with VIZIO as the screen and Walmart's purchase data as the scoreboard, Walmart now owns the full TV-ad stack and is pointing it at the long tail TV never served, including its own marketplace sellers. For sellers, self-serve plus closed-loop-to-sales is the new bar. For advertisers, you finally get measurable TV without a six-figure minimum — bought inside a system where Walmart owns the screen, the tool, and the scorecard.",
    content: (
      <div className="prose-content">
        <p>
          Walmart said this week it&apos;s{" "}
          <a href="https://corporate.walmart.com/news/2026/06/23/walmart-to-acquire-vibe-co-to-expand-access-to-connected-tv-advertising" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">acquiring Vibe.co</a>, a self-serve connected-TV ad platform, and folding it into Walmart Connect. Vibe&apos;s co-founder said the quiet part out loud: the platform was built &ldquo;to run streaming TV the way they run paid social &mdash; measurable, fast to launch, and optimized for better outcomes.&rdquo; That sentence is the whole acquisition.
        </p>
        <p>
          Consider what self-serve plus measurement did to advertising the last time. Facebook and Google became trillion-dollar ad machines not because the creative was better, but because they let millions of small advertisers spend without ever talking to a salesperson, and see exactly what each dollar returned. Television never got that moment. It stayed gated behind agencies, insertion orders, and minimums that started where most businesses&apos; entire marketing budget ended. CTV inherited the reach of TV and most of its friction. Walmart just bought the piece that removes the friction.
        </p>
        <h2>Walmart now owns the whole TV-ad stack</h2>
        <p>
          Walmart owns VIZIO, the screen in the living room and the data about what plays on it. It&apos;s now buying Vibe, the self-serve tool that launches and optimizes the campaign. And it runs Walmart Connect, the commerce audiences and the closed-loop measurement that ties an ad to a purchase. Screen, buying tool, scoreboard, one owner. And Walmart can offer the one thing Meta and Google can&apos;t fully match for anyone selling physical products: a measured line from the TV ad to a Walmart receipt.
        </p>
        <p>
          The target is the long tail that never could afford TV &mdash; Vibe&apos;s ten thousand mostly-small advertisers, mid-market challengers, and Walmart&apos;s own third-party marketplace sellers. Those marketplace sellers matter most. Amazon built a forty-billion-dollar ad business largely by selling self-serve ads to its own sellers, and Walmart is doing the same thing with streaming TV, with a commerce-data edge Amazon has to work harder to match off its own platform.
        </p>
        <h2>If you sell</h2>
        <p>
          The bar just moved. &ldquo;We offer CTV&rdquo; stops being a differentiator when a small brand can launch a measured streaming campaign on a credit card. The wedge now is self-serve activation plus measurement that ends at a sale, and the growth is in the long tail that big-brand insertion orders ignored. If you sell retail media or CTV, the unmonetized base is the small and mid-market advertiser, not another upfront with a holding company. And if you&apos;re an agency whose value to a small client was &ldquo;we can buy TV for you,&rdquo; that value is the thing being automated away. Move toward strategy and creative, or get disintermediated at the bottom of the market.
        </p>
        <h2>If you buy</h2>
        <p>
          For a small or mid-market advertiser, this is a real gift. Measurable streaming TV without an agency or a six-figure minimum, tied to actual sales, is something the medium never offered you. Take it. Just go in with your eyes open about the conflict baked into it. You&apos;re buying inside a closed loop where Walmart owns the screen, the buying tool, and the measurement that grades the campaign. That&apos;s the same setup brands spent the last decade fighting inside the walled gardens. When the platform selling you the ad is also the one telling you it worked, the grade is never neutral &mdash; marketers stopped taking Meta&apos;s and Amazon&apos;s self-reported numbers at face value and brought in independent verification to check them, and the gap between the two was often large enough to change the plan. Convenience is the whole pitch of a closed loop, and it&apos;s worth something. It&apos;s also worth insisting on third-party measurement next to Walmart&apos;s, keeping your own first-party data, and remembering that every dollar here funds a platform that sells private label against you.
        </p>
        <h2>The shape underneath</h2>
        <p>
          Put today&apos;s Walmart moves next to each other: its shopping agent inside ChatGPT and Gemini, VIZIO, now Vibe, all wired to Walmart Connect. Walmart is assembling a self-serve, full-funnel, commerce-data-backed advertising machine that looks less like a retailer with an ad business and more like a media company with stores attached. The ad business carries retail-level margins on retailer-grade data. Of everything Walmart is building right now, that may be the most valuable company inside the company.
        </p>
      </div>
    ),
    sources: [
      { title: "Walmart — Walmart to Acquire Vibe.co to Expand Access to Connected TV Advertising (June 23, 2026)", url: "https://corporate.walmart.com/news/2026/06/23/walmart-to-acquire-vibe-co-to-expand-access-to-connected-tv-advertising" },
      { title: "Citybiz — Walmart Acquires Vibe.co to Strengthen Connected TV Advertising Platform", url: "https://www.citybiz.co/article/864270/walmart-acquires-vibe-co-to-strengthen-connected-tv-advertising-platform/" },
    ],
  },
  {
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
  },
  {
    slug: "ai-ipo-clock-price-it-into-contracts",
    title: "OpenAI and Anthropic are going public. Your AI contract should price that in.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    tag: "Macro",
    color: "from-slate-700 to-emerald-600",
    tldr: "Anthropic filed a confidential S-1 in early June; OpenAI followed, targeting a September debut around $730–850B; SpaceX had just IPO'd near $2 trillion. When your model vendor becomes a public company, its incentives change — revenue discipline, firmer pricing, faster deprecation, tiered support. If you buy AI, negotiate continuity and price protection now, while a pre-IPO vendor still wants your logo. If you sell AI built on these models, you inherited their IPO timeline, so build for portability and bring the continuity story to customers before a repricing does it for you.",
    content: (
      <div className="prose-content">
        <p>
          The AI IPO wave is here. Anthropic{" "}
          <a href="https://www.cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">filed confidentially with the SEC in early June</a>, beating OpenAI to it. OpenAI{" "}
          <a href="https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">filed days later</a>, aiming for a September listing in the $730 to $850 billion range, with some reports putting it past a trillion. SpaceX had just gone public near $2 trillion, the largest IPO ever. The coverage is about valuations and bragging rights. The part that matters if you run your business on these models is simpler: a private lab optimizes for growth and capability; a public one answers to quarters. That shift reaches all the way down to your contract.
        </p>
        <h2>What changes when your vendor answers to shareholders</h2>
        <p>
          A few things, predictably. Pricing firms up, as the generous startup credits and free tiers get rationalized to defend the margins the company just promised Wall Street. Anthropic already started charging usage credits for its top model this month; that&apos;s the direction, not the exception. Repricing mid-relationship becomes normal, with new usage meters alongside it. Deprecation speeds up, because a public company retires unprofitable models on a board&apos;s timeline, not yours, and the model you built a workflow on may sunset before you&apos;re ready. And support concentrates on the accounts that move the revenue number. None of this is villainy. It&apos;s what the public markets require. It just lands on the enterprises that bet their workflows on these vendors.
        </p>
        <h2>If you buy</h2>
        <p>
          Price the IPO, not just the model. Your leverage is highest right now, before the lockups expire and the margin pressure starts, while a pre-IPO vendor still wants your logo and your ARR for its S-1 story. Use it. Get price protection or caps in writing. Get deprecation notice periods and continuity terms that survive a roadmap change. Keep a tested fallback model so a sudden reprice isn&apos;t an emergency. Treat &ldquo;which models can this run on&rdquo; as a procurement question with the same weight as uptime. The vendor courting you today with startup generosity will be a different counterparty once it has shareholders and a margin to defend.
        </p>
        <h2>If you sell</h2>
        <p>
          If your product is built on one of these models, you just inherited its IPO calendar. Your cost of goods and your roadmap now move with someone else&apos;s quarterly pressure. Two moves protect you. Build model-agnostic, so a vendor&apos;s repricing doesn&apos;t wreck your margin or your customer&apos;s experience overnight. And get ahead of it with your accounts: bring the continuity story to the table &mdash; here&apos;s our primary model, here&apos;s the one we fail over to, here&apos;s how your price is insulated &mdash; rather than waiting for a reprice to detonate a renewal. The sellers who look like adults this year are the ones who priced the IPO before their vendor did.
        </p>
        <h2>The drift to watch</h2>
        <p>
          Two things can be true. Going public is good for the labs &mdash; capital, durability, the legitimacy that wins enterprise deals. And it adds a variable everyone downstream has to manage. Your relationship with an AI vendor doesn&apos;t get worse the day it rings the bell. It starts answering to a different set of masters, and the terms drift toward whoever those masters are. Build and buy as if that&apos;s already true, because in a quarter or two it will be.
        </p>
      </div>
    ),
    sources: [
      { title: "CNBC — Anthropic Confidentially Files IPO Prospectus with SEC (June 1, 2026)", url: "https://www.cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus.html" },
      { title: "TechCrunch — Following Anthropic, OpenAI Files Confidentially for IPO (June 8, 2026)", url: "https://techcrunch.com/2026/06/08/following-anthropic-openai-files-confidentially-for-ipo/" },
    ],
  },
  {
    slug: "ai-sdr-boom-revolving-door-churn",
    title: "The AI SDR boom is real. So is the revolving door behind it.",
    date: "Jun 18, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-amber-600 to-rose-600",
    tldr: "AI SDR tools are a multibillion-dollar category with annual churn of 50 to 70%, some losing most buyers within three months. When teams automated prospecting, reply rates fell from about 2.1% with human reps to 1.3%. Every touch got worse, and volume hid it. The churn is built in at the sale: these tools are demoed on activity and renewed on outcomes, so much of the category's growth is the same seat resold to the next believer. If you buy one, write pilot criteria around converted pipeline, not meetings booked; if you sell one, refuse activity-based success metrics.",
    content: (
      <div className="prose-content">
        <p>
          The pitch for an AI SDR is the cleanest in software. Fire the expensive humans who keep missing
          quota, hire an agent that prospects around the clock for a fraction of the price. It worked. The
          category is worth billions. It also loses customers faster than almost anything else you can buy:{" "}
          <a href="https://prospeo.io/s/ai-bdr-agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">annual churn runs 50 to 70%</a>, and some tools are down most of their buyers
          inside three months. A market that grows that fast while leaking that hard is running on a
          treadmill. Much of the &ldquo;growth&rdquo; is the same seat sold to the next believer after the
          last one quit.
        </p>
        <p>
          The category keeps one number off its landing pages. When teams handed prospecting to the
          machines,{" "}
          <a href="https://salesmotion.io/blog/ai-sdrs-vs-human-sdrs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">reply rates didn&apos;t hold steady at a lower cost. They dropped, from about 2.1% with human reps to 1.3%</a>. Every individual touch got worse. Volume buried the evidence, because ten
          thousand mediocre emails still book a handful of meetings, and a dashboard full of activity feels
          like progress right up until the quarter closes and the pipeline isn&apos;t there.
        </p>

        <h2>Churn that was built in at the sale</h2>
        <p>
          The same trap waits for anyone selling AI, not just outbound tools. These products get demoed on
          activity: emails sent, meetings booked, pipeline &ldquo;sourced.&rdquo; Activity closes the deal,
          because activity is visible in week two. Nobody renews on activity. They renew on whether
          qualified pipeline turned into revenue, and that verdict doesn&apos;t land until two quarters
          later, long after the contract was signed on a number that never predicted it. The vendor tuned
          the demo to the metric that wins the sale and ignored the one that wins the renewal. The customer
          churns out feeling burned and can&apos;t quite say why.
        </p>
        <p>
          I learned this the expensive way. At Zeta I sold an AI customer-acquisition product into brands
          that didn&apos;t have a budget line for it yet, and the lesson that stuck was that the renewal is
          the sale that counts, and it&apos;s mostly won or lost in the first 90 days of production. Spend
          that quarter celebrating activity instead of standing up the one outcome the buyer&apos;s CFO
          actually counts, and the renewal is already gone. You just don&apos;t find out for nine months.
        </p>

        <h2>Make the vendor live on the metric that renews</h2>
        <p>
          Two things can be true: AI belongs in outbound, and most of the way it&apos;s sold today is a
          churn machine wearing a growth chart. The teams getting real value run a hybrid, where the agent
          carries volume and a human owns judgment, qualification, and the relationship, and those teams
          report more pipeline, not less. If you&apos;re buying, write your pilot&apos;s success criteria
          around converted, qualified pipeline, not meetings booked, and make the vendor live or die on it.
          If you&apos;re selling, refuse activity-based success criteria even when the buyer offers them,
          because the easy yes in month one is the expensive goodbye in month twelve. Win the metric that
          renews, and let the demo be the smallest promise you make.
        </p>
      </div>
    ),
    sources: [
      { title: "Prospeo — AI BDR Agent: What It Costs & Why Most Fail (2026 churn data)", url: "https://prospeo.io/s/ai-bdr-agent" },
      { title: "Salesmotion — AI SDRs vs Human SDRs: The Real ROI Comparison for 2026 (reply-rate and hybrid data)", url: "https://salesmotion.io/blog/ai-sdrs-vs-human-sdrs" },
      { title: "Madrona — Selling AI in 2026: Selling Is Easy, Staying In Is Everything (the renewal is decided early)", url: "https://www.madrona.com/enterprise-ai-sales-2026-selling-is-easy-staying-in-is-everything/" },
    ],
  },
  {
    slug: "ai-labs-hiring-salespeople-which-sales-jobs-last",
    title: "The companies with the best AI on earth are hiring salespeople faster than SaaS is.",
    date: "Jun 17, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-sky-600 to-emerald-500",
    tldr: "At OpenAI and Anthropic, go-to-market is the single largest hiring category: roughly one in five open roles, more than any other department, and a higher share than a typical SaaS company runs. The firms most able to automate their own sales are staffing it harder than anyone. The shape of the deal explains which sales jobs are safe: once a purchase involves multiple stakeholders, a novel budget, and procurement, the work goes back to humans. Aim your career at the ambiguous, trust-heavy, category-creating motions and away from the transactional ones.",
    content: (
      <div className="prose-content">
        <p>
          If you want to know whether AI is coming for sales jobs, you can read another think piece, or
          you can look at what the two companies building the most capable AI on the planet do with their
          own hiring. At both OpenAI and Anthropic,{" "}
          <a href="https://gtmnow.com/anthropic-and-openai-are-hiring-gtm-roles-more-than-anything-else/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">go-to-market is the largest single category of open roles, around one in five</a>, ahead of research and ahead of engineering. The businesses best positioned to
          replace their own salespeople with their own models are hiring salespeople faster than ordinary
          SaaS does.
        </p>
        <p>
          That&apos;s the strongest evidence in the whole &ldquo;will AI replace sellers&rdquo; argument,
          and it points the other way. These are not companies that lack the technology or the nerve to
          automate. If a frontier lab could replace its sales org with its own model, it would do it
          loudly, as a case study. Instead they&apos;re building human go-to-market teams as fast as they
          can hire them.
        </p>

        <h2>Why the hardest AI sale still needs a human</h2>
        <p>
          The reason is in the shape of the deal. Once average contract value crosses the line where a
          purchase involves several stakeholders, a budget nobody planned for, and a procurement cycle,
          you need a human in the room. Frontier AI is the hardest thing in tech to sell right now: high
          trust, high ambiguity, a category the buyer didn&apos;t have last year, change management baked
          into every rollout, and a price tag that draws a crowd of approvers. Those are the conditions
          under which a human seller still beats any automation, including the seller&apos;s own product.
        </p>
        <p>
          Their own hiring tells you which sales work lasts. The transactional, single-threaded,
          self-serve motion, where a buyer could finish the purchase without ever speaking to a person, is
          the part their products will absorb. The seat that survives is the one selling ambiguity into the
          enterprise.
        </p>
        <p>
          I&apos;ve been the first seller in the building twice, carrying products that reached the market
          before a budget line existed for them. That kind of selling is the work the data now points to as
          lasting: high-trust, category-creating, human-heavy, where most of the deciding happens in rooms
          you&apos;re not in and trust is the only thing speaking for you.
        </p>

        <h2>Audit your own motion</h2>
        <p>
          If you carry a number, look hard at how much judgment and trust your motion really requires. If
          your day is mostly volume and your deals close without much human persuasion, that&apos;s the
          part most exposed to automation, and it&apos;s worth moving toward complexity on purpose. If you
          build or lead a sales org, concentrate your human firepower where ambiguity is highest and let
          the tooling handle the transactional tail. At the top of the market, this job concentrates into
          fewer, more valuable seats. That&apos;s where the sellers worth hiring will be.
        </p>
      </div>
    ),
    sources: [
      { title: "Lusha — Enterprise AI Still Needs a Rep, Here's Why (GTM as the largest hiring category at OpenAI/Anthropic)", url: "https://www.lusha.com/blog/enterprise-ai-gtm-hiring-sales-reps/" },
      { title: "GTMnow — Anthropic and OpenAI Are Hiring GTM Roles More Than Anything Else", url: "https://gtmnow.com/anthropic-and-openai-are-hiring-gtm-roles-more-than-anything-else/" },
    ],
  },
  {
    slug: "anthropic-model-pulled-vendor-continuity-risk",
    title: "The government pulled the best AI model on earth four days after launch. What's your fallback?",
    date: "Jun 15, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-rose-600 to-violet-600",
    tldr: "Anthropic launched Fable 5 on June 9 as the most capable model it had ever shipped, then suspended all access to it and Mythos 5 by June 13 to comply with a US directive barring foreign-national access. A best-in-class model went dark in four days for reasons outside the vendor's control. Model continuity is now a real risk category buyers will price. If you sell AI, answer the 'what if my model disappears' question before the security review asks it: build model-agnostic, keep a fallback path, and make portability a feature instead of a footnote.",
    content: (
      <div className="prose-content">
        <p>
          On June 9, Anthropic shipped{" "}
          <a href="https://techcrunch.com/2026/06/09/anthropics-claude-fable-5-is-a-version-of-mythos-the-public-can-access-today/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Claude Fable 5</a>, the most capable
          model it had ever put in front of the public, beating its own Opus 4.8 by double digits on
          some benchmarks. Four days later it was gone. The Commerce Department sent a directive
          ordering Anthropic to cut off Fable 5 and its restricted sibling Mythos 5 to{" "}
          <a href="https://www.cnn.com/2026/06/13/business/anthropic-mythos-model-national-security" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">every foreign national, inside or outside the United States</a>,
          on national-security grounds. Rather than try to firewall who got in,{" "}
          <a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Anthropic shut both models off for everyone</a>.
        </p>
        <p>
          Read that timeline again. Launch on Tuesday, dark by Saturday. The best model on the market
          became a model nobody could buy over a long weekend, and the company that built it had no
          say in the matter.
        </p>

        <h2>I&apos;ve sold the single point of failure before</h2>
        <p>
          At Fastly I sold infrastructure that sat under other companies&apos; entire businesses. The
          question that closed deals and the question that killed them was the same one: what happens
          when this goes down. Smart buyers never asked it about the good days. They asked it about
          the day something outside everyone&apos;s control took the thing offline, and they wanted to
          hear an answer that didn&apos;t depend on us being perfect. The buyers who didn&apos;t ask
          were the ones who got hurt later.
        </p>
        <p>
          For two years now I&apos;ve been on the other side of that, selling AI products that reached
          the market before anyone had a budget line for them. The objection was always about whether
          the thing worked. It was never about whether the thing would still be legal to use on
          Saturday. That just changed.
        </p>

        <h2>Model risk stopped being hypothetical</h2>
        <p>
          We&apos;ve spent two years arguing about model risk in the abstract: hallucinations,
          context limits, the cost per token creeping up. This is a different category. A frontier
          model can now be switched off by a government in 96 hours, and the vendor will comply,
          because the alternative is worse for the vendor. Anthropic{" "}
          <a href="https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">disputes the directive</a> and
          has said the standard, taken literally, would freeze every new frontier release in the
          industry. They complied anyway. That tells you which way the gravity runs.
        </p>
        <p>
          Two things can be true here. The government can have a real security concern, and the
          enterprise that wired Fable 5 into a production workflow on Wednesday can still be sitting
          on a dead dependency on Saturday with no recourse. Both are true. And the second one is the
          one your buyer is going to feel, because the buyer isn&apos;t Anthropic and isn&apos;t the
          Commerce Department. The buyer is a director of operations who told her boss this thing was
          ready.
        </p>
        <p>
          This doesn&apos;t exist in a vacuum. We&apos;ve already watched OpenAI and Anthropic tighten
          rate limits, reprice tokens mid-quarter, and deprecate models people had built on. Export
          controls are just the most violent version of the same lesson: the model is not yours, the
          model is rented, and the landlord answers to people you&apos;ve never met.
        </p>

        <h2>The read for anyone selling AI</h2>
        <p>
          Your buyer is about to start asking a question they weren&apos;t asking last week: what
          happens to my workflow when the model goes away. If your answer is a shrug, you lose the
          deal to whoever has a better one. So get a better one before the security review forces it
          out of you.
        </p>
        <p>
          Build and sell model-agnostic. If your product is welded to one provider&apos;s API, you
          inherited that provider&apos;s political risk, and now you get to explain it in every deal.
          The products that sleep well this month are the ones with an abstraction layer that can swap
          the model underneath without the customer noticing. That used to be an engineering nicety.
          It&apos;s a sales asset now, so put it on the slide.
        </p>
        <p>
          Make continuity part of the pitch, not the fine print. Bring the fallback story to the
          first meeting the way the smart vendors learned to bring the SOC 2 story: here&apos;s our
          primary model, here&apos;s the one we fail over to, here&apos;s what your experience looks
          like the day one of them disappears. The vendor who volunteers that answer looks like an
          adult. The vendor who waits to be asked looks like a risk.
        </p>
        <p>
          If you&apos;re the buyer, stop hardwiring a single model into anything you can&apos;t afford
          to lose for a week. Write the exit into the contract, keep a tested fallback, and treat
          &ldquo;which models can this run on&rdquo; as a procurement question with the same weight as
          uptime. You don&apos;t have to predict the next directive. You have to not be the company
          that bet a production system on a model being available on a Saturday.
        </p>

        <h2>Where the durable value actually sits</h2>
        <p>
          Benedict Evans has been making the case all year that{" "}
          <a href="https://www.startuphub.ai/ai-news/artificial-intelligence/2026/foundation-models-a-commodity-says-benedict-evans" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">foundation models are sliding toward commodity infrastructure</a>,
          and that the money flows to whoever owns the workflow, the data, and the distribution. This
          weekend was that thesis arriving as a headline instead of a slide. The single most capable
          model on the planet turned out to be the most fragile thing in the stack, and the workflow
          wrapped around it was the part that could have survived if it had been built to.
        </p>
        <p>
          I&apos;ve written before that the model was never the moat. I meant it as a comment on
          margins and competition. It reads a little differently now. The model is the part that can
          be taken away from you by people you&apos;ll never get on the phone. The workflow is the
          part you own. Sell that, and build it so the floor can drop out from under the model without
          taking your customer down with it. That&apos;s the whole job this quarter, and the
          government just gave you the demo.
        </p>
      </div>
    ),
    sources: [
      { title: "TechCrunch — Anthropic's Claude Fable 5 Is a Version of Mythos the Public Can Access Today (June 9, 2026)", url: "https://techcrunch.com/2026/06/09/anthropics-claude-fable-5-is-a-version-of-mythos-the-public-can-access-today/" },
      { title: "Anthropic — Statement on the US Government Directive to Suspend Access to Fable 5 and Mythos 5 (June 13, 2026)", url: "https://www.anthropic.com/news/fable-mythos-access" },
      { title: "CNN Business — Anthropic Suspends All Access to Mythos Model After US Government Bans Foreign Nationals' Use (June 13, 2026)", url: "https://www.cnn.com/2026/06/13/business/anthropic-mythos-model-national-security" },
      { title: "Fortune — Anthropic Disables Fable and Mythos AI Models After U.S. Government Bars Foreign Access (June 13, 2026)", url: "https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/" },
      { title: "StartupHub.ai — Foundation Models: A Commodity, Says Benedict Evans (2026)", url: "https://www.startuphub.ai/ai-news/artificial-intelligence/2026/foundation-models-a-commodity-says-benedict-evans" },
    ],
  },
  {
    slug: "openai-oracle-credits-cloud-commit",
    title: "OpenAI now takes Oracle credits. Your AI deal is competing with money that's already spent.",
    date: "Jun 12, 2026",
    readTime: "5 min",
    tag: "Sales",
    color: "from-red-600 to-orange-500",
    tldr: "OpenAI announced June 10 that its models and Codex can be bought with Oracle Universal Credits, the same day Oracle reported $638B in remaining performance obligations. Enterprise cloud commitments crossed $500B last year, and AI is increasingly bought by drawing down that pre-committed spend rather than through net-new deals. If your AI product can't be transacted inside your buyer's cloud commit, you're the expensive option at any price. Add one discovery question now: where does the money for this live, and which commit does it sit inside?",
    content: (
      <div className="prose-content">
        <p>
          Two announcements came out of Oracle&apos;s world on Tuesday. The one that got covered: a
          record fourth quarter,{" "}
          <a href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$19.2 billion in revenue and remaining performance obligations of $638 billion, up 363% in a year</a>. The one that barely got covered ran{" "}
          <a href="https://openai.com/index/openai-on-oracle-cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">four paragraphs on OpenAI&apos;s blog</a>: Oracle customers will soon be able to pay for
          OpenAI&apos;s frontier models and Codex with their Oracle Universal Credits.
        </p>
        <p>
          Read the last line of that post. &ldquo;Contact your Oracle sales representative for
          details, timing, and availability.&rdquo; The most coveted product in software ends its own
          announcement by sending buyers to another company&apos;s rep. If you sell for a living, read it twice.
        </p>

        <h2>Money inside the commit is already spent</h2>
        <p>
          I sold at Oracle, and later at Fastly, where revenue lived and died by committed-use
          contracts. A commit changes the physics of every purchase near it. Money inside the commit
          is already spent in the CFO&apos;s head. Money outside the commit is a new ask, with a
          fresh approval chain, a fresh security review, and a fresh chance for procurement to say
          no. At Fastly, an expansion that drew down an existing commitment could close in weeks
          while a similar-sized net-new deal took quarters. Same product both times. The difference
          was which bucket the money came from.
        </p>
        <p>
          That&apos;s the lens for the OpenAI note. Enterprises have pre-paid for cloud on a scale
          that&apos;s hard to hold in your head:{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">commitments to the big clouds crossed $500 billion last year</a>. The marketplaces that let companies burn those commitments on
          third-party software{" "}
          <a href="https://itchanneloxygen.com/our-prediction-is-holding-tackle-io-ceo-doubles-down-on-100bn-cloud-marketplace-bet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">were a $16 billion channel in 2023, and Canalys expects $85 billion by 2028</a>. Tackle, which processes these transactions for software
          vendors, has stood by its prediction that $100 billion flows through this year.{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Among AWS&apos;s top 1,000 customers, 99% already have at least one active marketplace subscription</a>. Snowflake has moved $7 billion through AWS Marketplace
          alone. Salesforce passed $5 billion.
        </p>
        <p>
          AI made this the main event, because AI budgets are the least settled line item in the
          building. When nobody is sure which budget a new AI tool should come from, the path of
          least resistance is the budget that already exists. OpenAI{" "}
          <a href="https://techcrunch.com/2025/09/12/why-the-oracle-openai-deal-caught-wall-street-by-surprise/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">signed a $300 billion compute contract with Oracle last September</a>; this week&apos;s announcement closes the circuit. OpenAI buys
          Oracle&apos;s capacity, Oracle&apos;s customers buy OpenAI&apos;s models, and
          everyone&apos;s quota retires in the same currency.
        </p>

        <h2>Oracle&apos;s earnings whisper the same thing</h2>
        <p>
          One stat from Tuesday didn&apos;t make anyone&apos;s headline. Oracle grew revenue 21%
          last quarter while{" "}
          <a href="https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">sales and marketing expense fell 10%</a>. Read those two together. When $638 billion of future revenue is
          already under contract, you need fewer people creating demand and more people managing
          drawdown. Growth up, selling cost down is what a commit-based go-to-market looks like at
          scale, and every software board that saw Tuesday&apos;s print will want to know why their
          own company can&apos;t have that ratio.
        </p>

        <h2>Two things can be true</h2>
        <p>
          For buyers, this is mostly good. One bill, pre-cleared procurement, governance the risk
          committee already blessed.{" "}
          <a href="https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Forrester pegs the procurement time savings at 60%</a>. And the convenience carries a cost that won&apos;t show up for a
          few quarters. A commit was never free money. Your company promised a cloud provider a set
          amount of spend, in exchange for better pricing, based on a forecast somebody made years
          ago. Once that promise is signed, the pressure runs one direction: use it all. So when two
          tools are on the table and only one can be paid for out of the commitment, the lesser tool
          can win without anyone arguing for it. Nobody says &ldquo;let&apos;s buy the worse
          one&rdquo; in a meeting. They say &ldquo;this one counts against the cloud spend we
          already owe,&rdquo; and the meeting moves on. Each purchase routed this way also makes an
          eventual exit harder, because by the time the contract comes up for renewal, the provider
          can read your dependence right off its own invoices.
        </p>

        <h2>The read</h2>
        <p>
          If you carry a number, three changes are worth making before the quarter ends.
        </p>
        <p>
          Add one discovery question: where does the money for this live? Net-new budget, or inside
          a cloud commit, and which one? The answer tells you who your real competitor is, and a lot
          of the time the competitor is the drawdown itself, a vaguely comparable tool that happens
          to take your buyer&apos;s credits.
        </p>
        <p>
          Get transactable. If your product can&apos;t be bought with money your buyer already
          committed, you&apos;re the expensive option at any price. Private offers on the
          marketplaces your accounts use are table stakes now, and &ldquo;the AWS listing is on the
          roadmap&rdquo; is becoming the new &ldquo;SOC 2 in progress.&rdquo;
        </p>
        <p>
          Make friends with the cloud rep. Somewhere at Amazon, Microsoft, Google, or Oracle, a
          salesperson owns your buyer&apos;s cloud contract, and your deal counts toward that
          person&apos;s number when it runs through their marketplace. That person is inside the
          account every week and knows where the unspent money is. They also get paid when you win.
          Bring them in early and you&apos;ve added a seller to your team for free. Leave them out
          and they&apos;ll point that budget at a competitor who brought them in.
        </p>
        <p>
          The longer I sit with this announcement, the funnier the ending gets. The company whose
          product can write a rep&apos;s emails, and probably their forecast, decided that the
          fastest road into the enterprise is a human rep with a quota and an expense account.
          Software keeps eating the world, and the field seller keeps cashing the check. Ask where
          the money lives. The rest of the deal follows from the answer.
        </p>
      </div>
    ),
    sources: [
      { title: "OpenAI — Access OpenAI Models and Codex Through Your Oracle Cloud Commitment (June 10, 2026)", url: "https://openai.com/index/openai-on-oracle-cloud/" },
      { title: "Oracle — Q4 and FY 2026 Earnings Press Release (SEC Form 8-K, Exhibit 99.1, June 10, 2026)", url: "https://www.sec.gov/Archives/edgar/data/1341439/000119312526265848/orcl-ex99_1.htm" },
      { title: "Partner Insight — One Chart Shows Cloud Marketplaces Going Mainstream (June 8, 2026)", url: "https://newsletter.partnerinsight.io/p/one-chart-shows-cloud-marketplaces" },
      { title: "IT Channel Oxygen — Tackle.io CEO Doubles Down on $100bn Cloud Marketplace Bet (Canalys forecast)", url: "https://itchanneloxygen.com/our-prediction-is-holding-tackle-io-ceo-doubles-down-on-100bn-cloud-marketplace-bet/" },
      { title: "TechCrunch — Why the Oracle-OpenAI Deal Caught Wall Street by Surprise (September 2025)", url: "https://techcrunch.com/2025/09/12/why-the-oracle-openai-deal-caught-wall-street-by-surprise/" },
    ],
  },
  {
    slug: "where-the-boomers-went",
    title: "The Boomers cut the cord too, and most media plans missed it",
    date: "Jun 10, 2026",
    readTime: "3 min",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "The cord-cutting narrative says young viewers left cable for streaming and Boomers stayed loyal to linear. The Boomers left too. They went to FAST. Most media plans still treat the 50-plus audience as the loyal remainder, and being wrong about your most ad-tolerant audience is expensive.",
    content: (
      <div className="prose-content">
        <p>
          For about three years now the story about television has barely changed. Cord-cutting.
          Streaming won. The young walked out on cable and the old stayed behind to keep the lights
          on at the networks.
        </p>
        <p>
          That story is half right, which is the most dangerous kind of wrong.
        </p>
        <p>
          The part everyone repeats is that streaming now eats the majority of ad-supported viewing
          time among 18-to-49 year olds. That&apos;s true. Nielsen&apos;s 2026 Upfront Planning Guide{" "}
          <a href="https://ppc.land/nielsens-2026-upfront-guide-reveals-streaming-now-owns-66-of-young-adult-tv-ad-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">puts it at 66.7%</a>, and in May 2025 streaming{" "}
          <a href="https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">passed broadcast and cable combined</a> for the first time,
          at 44.8% of all TV. What gets lost is what the 50-plus crowd
          was doing while the whole industry watched the kids. They left too. They just left
          quietly, and they didn&apos;t go where the headlines kept pointing.
        </p>
        <p>
          They went to FAST. Free ad-supported streaming, the Pluto and Tubi end of the dial. It
          feels like flipping through cable channels except the bill is gone. Some people in the
          business call it cord-relocating, which is an ugly word for a simple thing. Same lean-back
          habit, same comfort with ads, piped in over the internet instead of a coax cable. The
          behavior didn&apos;t change. The delivery did. And it isn&apos;t a niche move. Pluto, The
          Roku Channel and Tubi{" "}
          <a href="https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">combined for 5.7% of all TV viewing in May 2025</a>, more
          than any single broadcast network that month, and Nielsen&apos;s upfront data shows{" "}
          <a href="https://ppc.land/nielsens-2026-upfront-guide-reveals-streaming-now-owns-66-of-young-adult-tv-ad-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">FAST audiences skewing 35-to-64</a>, not 18-to-34. Viewers 65 and
          older are the fastest-growing group watching YouTube on a TV set, with watch time{" "}
          <a href="https://finance.yahoo.com/news/boomers-push-streaming-past-traditional-191532570.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">up 106% in two years</a>. <em>Gunsmoke</em>, a show that ended in
          1975, made it back onto the most-streamed lists.
        </p>
        <p>
          Most of the planning I&apos;ve seen still treats the older audience as the loyal remainder,
          the folks who&apos;ll be there as long as linear TV is still breathing. So the math
          underneath a lot of media plans goes: reach Boomers on traditional TV, reach everyone else
          on streaming. That split is now wrong. Cable viewing has fallen{" "}
          <a href="https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">39% since 2021</a>, and streaming set another record in
          December at <a href="https://www.nielsen.com/news-center/2026/streaming-shatters-multiple-records-in-december-2025-with-47-5-of-tv-viewing-according-to-nielsens-the-gauge/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">47.5% of all TV</a>. Being wrong about your most
          ad-tolerant, highest-spending audience is an expensive mistake to keep making month after
          month.
        </p>
        <p>
          I find the gap between the headline and the reality more interesting than either one on
          its own. &ldquo;Streaming won&rdquo; is a clean line. It fits in a slide. It also quietly
          tells you to write off a group of people as gone when they didn&apos;t go anywhere. They
          sat down in a different room.
        </p>
        <p>
          This is the part of any market I&apos;ve always trusted least: the number everybody
          already agrees on. Not because it&apos;s false, but because once a number becomes the
          consensus, people stop asking what&apos;s happening underneath it. The consensus said
          cord-cutting was a young person&apos;s exit. The behavior said something more boring and
          more useful. A huge, valuable audience switched pipes and kept watching ads, and a lot of
          plans haven&apos;t caught up.
        </p>
        <p>
          If you sell anything, the lesson sits right there. The topline tells you what happened. It
          rarely tells you who&apos;s still reachable and where they&apos;re sitting now. That second
          question is usually where the money is, and it&apos;s almost never in the headline.
        </p>
        <p>
          The Boomers didn&apos;t leave. Look for them on Tubi.
        </p>
      </div>
    ),
    sources: [
      { title: "Nielsen — Streaming Reaches Historic TV Milestone, Eclipses Combined Broadcast and Cable Viewing for First Time (The Gauge, May 2025)", url: "https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/" },
      { title: "Nielsen — Streaming Shatters Multiple Records in December 2025 with 47.5% of TV Viewing (The Gauge)", url: "https://www.nielsen.com/news-center/2026/streaming-shatters-multiple-records-in-december-2025-with-47-5-of-tv-viewing-according-to-nielsens-the-gauge/" },
      { title: "PPC Land — Nielsen's 2026 Upfront Guide Reveals Streaming Now Owns 66% of Young Adult TV Ad Time", url: "https://ppc.land/nielsens-2026-upfront-guide-reveals-streaming-now-owns-66-of-young-adult-tv-ad-time/" },
      { title: "Yahoo Finance / Benzinga — Boomers Push Streaming Past Traditional TV as YouTube Viewership Soars 106%", url: "https://finance.yahoo.com/news/boomers-push-streaming-past-traditional-191532570.html" },
    ],
  },
  {
    slug: "private-equity-software-rollups",
    title: "When private equity buys your software vendor, the roadmap goes with it.",
    date: "Jun 10, 2026",
    readTime: "7 min",
    tag: "Macro",
    color: "from-emerald-600 to-teal-600",
    tldr: "Thoma Bravo just closed Verint (~$2B) and PROS, and Vista and Silver Lake are circling profitable, sticky software trading cheap after the SaaSpocalypse. When PE buys your vendor, the roadmap you were promised gives way to margin, price increases, and portfolio cross-sell. Odds are a tool in your stack changes hands within 18 months. Buyers: lock support and roadmap commitments in writing at your next renewal. Sellers inside an acquired company: call your accounts first and re-earn the relationship before they draft their exit.",
    content: (
      <div className="prose-content">
        <p>
          Thoma Bravo spent the spring buying software. It{" "}
          <a href="https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-verint-a-leader-in-ai-driven-customer-experience-automation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">closed its acquisition of Verint</a>, an AI-driven customer-experience company, for around $2 billion and is folding it into a portfolio company it already owns. It wrapped up PROS Holdings too. Vista and Silver Lake are{" "}
          <a href="https://247wallst.com/investing/2026/06/02/as-software-ma-heats-up-these-3-acquisition-targets-are-in-the-spotlight/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">circling the same kind of target</a>: profitable, sticky enterprise software trading at a discount it hasn&apos;t seen in a decade. If one of your vendors fits that description, and a few of them do, you should plan for the email that opens with &ldquo;we&apos;ve been acquired.&rdquo;
        </p>
        <p>
          I spent years at Oracle, a company that has bought a sizable chunk of the enterprise software industry, and I sold for Fastly and Zeta through plenty of market cycles. The pattern I&apos;ve watched play out every time is the same. After the deal closes, the product stops being the point, and the margin becomes the point.
        </p>

        <h2>What a buy-and-build firm actually optimizes for</h2>
        <p>
          A private-equity roll-up runs a specific playbook, and the playbook is rational. Buy a profitable software company at a depressed multiple, cut the costs that don&apos;t touch renewal, raise prices where the contract allows, cross-sell the rest of the portfolio into the base, and sell the whole thing in five to seven years at a higher multiple. Every move in that sequence points at the financials, not your feature requests. The roadmap you were sold in the original pitch was built to win your business. The roadmap after the acquisition is built to widen EBITDA.
        </p>

        <h2>The SaaSpocalypse turned this into a wave</h2>
        <p>
          This doesn&apos;t exist in a vacuum. The same repricing that wiped hundreds of billions off software valuations this year handed buyout firms a discount aisle.{" "}
          <a href="https://www.bloomberg.com/news/articles/2026-02-11/thoma-bravo-seeks-software-bargains-in-ongoing-saaspocalypse" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Bloomberg reported Thoma Bravo hunting bargains</a>{" "}in the middle of the selloff, and the big firms are sitting on record dry powder. The odds that at least one tool in your stack changes hands in the next eighteen months are higher than they&apos;ve been in years. Treat it as a when, and get ready for it now.
        </p>

        <h2>What to do before the acquisition email lands</h2>
        <p>
          If you&apos;re the buyer, know which of your vendors are roll-up-shaped: single-product, profitable, and sticky. In your next renewal, ask what happens to support and the roadmap under a change of control, and get the answer in writing while you still have leverage. If you&apos;re the seller inside a company that just got acquired, get ahead of it. Your customers are reading the same press release and quietly drafting their exit options. The rep who calls first, names the change honestly, and re-earns the relationship keeps the account. The one who pretends nothing happened watches renewals slide while reciting synergy talking points.
        </p>

        <h2>The read</h2>
        <p>
          Consolidation isn&apos;t automatically bad for a customer. Two things can be true. A disciplined PE owner can give a neglected product the focus it always needed, and your priorities will still rank below the math. The job, on either side of the table, is to say the quiet part out loud before the other person does. Read the deal news like it&apos;s about your accounts, because before long it will be.
        </p>
      </div>
    ),
    sources: [
      { title: "24/7 Wall St. — As Software M&A Heats Up, These 3 Acquisition Targets Are in the Spotlight", url: "https://247wallst.com/investing/2026/06/02/as-software-ma-heats-up-these-3-acquisition-targets-are-in-the-spotlight/" },
      { title: "Bloomberg — Thoma Bravo Seeks Software Bargains in the Ongoing SaaSpocalypse", url: "https://www.bloomberg.com/news/articles/2026-02-11/thoma-bravo-seeks-software-bargains-in-ongoing-saaspocalypse" },
      { title: "Thoma Bravo — Completes Acquisition of Verint, a Leader in AI-Driven CX Automation", url: "https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-verint-a-leader-in-ai-driven-customer-experience-automation" },
    ],
  },
  {
    slug: "end-of-per-seat-pricing",
    title: "Per-seat software is dying. Your renewal is where you'll feel it first.",
    date: "Jun 9, 2026",
    readTime: "7 min",
    tag: "Sales",
    color: "from-violet-600 to-blue-600",
    tldr: "About $285B in software market cap evaporated in February (the 'SaaSpocalypse') as investors repriced SaaS for a world where AI agents don't buy seats. Gartner sees 40% of enterprise spend moving to usage or outcome pricing by 2030. The renewal conversation shifts from 'how many users' to 'what did this produce.' Start instrumenting the one outcome your buyer's CFO cares about now, not in Q4.",
    content: (
      <div className="prose-content">
        <p>
          In February, roughly $285 billion in software market value evaporated in a few weeks. Analysts are calling it the{" "}
          <a href="https://www.ainvest.com/news/ai-agents-force-rerating-saas-giants-outcome-based-pricing-models-hold-2604/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">SaaSpocalypse</a>. Strip away the nickname and the cause is unglamorous. Investors finally did the math on AI agents, and an agent doesn&apos;t log in, so it doesn&apos;t pay for a seat.
        </p>
        <p>
          <a href="https://www.softwareseni.com/saas-pricing-is-shifting-from-per-seat-to-usage-and-outcome-what-changes-at-your-next-renewal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Gartner now expects at least 40%</a>{" "}of enterprise software spend to move to usage, agent, or outcome pricing by 2030, with seat-based revenue share sliding from 21% to 15%. Intercom already{" "}
          <a href="https://www.mindstudio.ai/blog/saas-pricing-ai-agent-era" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">charges 99 cents per resolved ticket</a>. Zendesk prices automated resolutions at a buck-fifty to two dollars each. The model that built every SaaS empire of the last fifteen years, a price per human with a password, is being quietly retired.
        </p>
        <p>
          I&apos;ve watched a pricing model die before. At Fastly we sold infrastructure priced on bandwidth, and the per-gigabyte rate fell a little every year because the underlying thing kept commoditizing. You learn fast that when the meter you bill on is sliding toward zero, you don&apos;t win by defending the meter. You win on the stuff the customer can&apos;t get anywhere else, and you&apos;d better know what that is before the renewal.
        </p>

        <h2>What the seat was quietly hiding</h2>
        <p>
          Per-seat pricing was a beautiful accident. It let you bill for value you couldn&apos;t measure. A company bought 500 licenses, used maybe 300, and nobody audited the gap because the number felt fair. The seat was a proxy. It stood in for &ldquo;this software helps our people do their jobs,&rdquo; and as long as headcount grew, your revenue grew with it whether or not anyone opened the app.
        </p>
        <p>
          Agents break the proxy. When one agent closes a thousand tickets without a login, the &ldquo;how many users&rdquo; question stops describing reality, and your buyer&apos;s CFO can see it too. Two things can be true here. The software is creating more value than ever, and the seat count that used to capture that value is now meaningless.
        </p>

        <h2>The renewal is where it lands</h2>
        <p>
          If you sell software, the change shows up first at renewal, and it shows up as a harder question. The old renewal was a headcount reconciliation. Did you add users, did you churn any, here&apos;s the new number. The new renewal is an outcome audit. Your buyer arrives with usage data you both can see and asks what they actually got for the spend. If your answer is a feature list, you&apos;re in trouble. If your answer is a number tied to their P&amp;L, you keep the account and probably grow it.
        </p>
        <p>
          This is good news for one kind of seller and brutal for another. The rep who knows the customer&apos;s business, who can point to the dispute-resolution time that dropped or the pipeline that moved, walks into that audit holding the cards. The rep who sold a login and went quiet until renewal walks in empty-handed.
        </p>

        <h2>What to do before your next renewal</h2>
        <p>
          Start instrumenting outcomes now, not in Q4 when the contract is up. Pick the one metric your product moves that your buyer&apos;s finance team already cares about, and measure it from day one. Sit with your customer success counterpart and build the outcome story together, because in an outcome-priced world CS stops being a cost center and becomes where the revenue gets defended. And get honest about which of your accounts were only ever paying for seats they didn&apos;t use. A usage-based competitor will undercut those first.
        </p>

        <h2>The read</h2>
        <p>
          Two things can be true about the SaaSpocalypse. The selloff was probably an overreaction, and the repricing underneath it is real. What it rewards is a specific kind of seller: the one who can say, account by account, what the product produced this year, with a number a CFO would accept. Pull up your top five accounts and write down what each one got from you in the last twelve months. If the list is thin, that&apos;s the work between now and your next renewal.
        </p>
      </div>
    ),
    sources: [
      { title: "AInvest — AI Agents Force Re-Rating of SaaS Giants as Outcome-Based Pricing Takes Hold", url: "https://www.ainvest.com/news/ai-agents-force-rerating-saas-giants-outcome-based-pricing-models-hold-2604/" },
      { title: "MindStudio — SaaS Pricing Is Breaking: Why Per-Seat Models Don't Survive the AI Agent Era", url: "https://www.mindstudio.ai/blog/saas-pricing-ai-agent-era" },
      { title: "SoftwareSeni — SaaS Pricing Is Shifting From Per-Seat to Usage and Outcome (Gartner forecast)", url: "https://www.softwareseni.com/saas-pricing-is-shifting-from-per-seat-to-usage-and-outcome-what-changes-at-your-next-renewal/" },
    ],
  },
  {
    slug: "agentic-commerce-shopping-agents",
    title: "Your next big customer is a shopping agent that doesn't care about your brand.",
    date: "Jun 9, 2026",
    readTime: "6 min",
    tag: "Future of Ads",
    color: "from-amber-500 to-orange-600",
    tldr: "By 2030, NielsenIQ expects roughly half of online shoppers to hand routine buying to an AI agent driving about a quarter of their spend, a near-$1T U.S. market. Google's cart now follows shoppers across Search, Gemini, YouTube and Gmail, and the agents inside ChatGPT and Amazon are good enough to research a product and just buy it. Those agents pick on price, availability, and structured product data, not brand equity, and can form their own supplier preferences. Get your canonical product data clean and synced to every retailer API, treat 'is my product legible to an agent' as a board-level metric, and plan demand for two buyers at once: the human you win with story and the agent you win with structure.",
    content: (
      <div className="prose-content">
        <p>
          By 2030, NielsenIQ expects about half of online shoppers to hand routine buying to an AI agent, with that agent driving roughly a quarter of their spend, and it{" "}
          <a href="https://nielseniq.com/global/en/insights/analysis/2026/agentic-commerce-and-ai-in-cpg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">puts the U.S. agentic-commerce prize near a trillion dollars</a>. The plumbing is already going in. Google rolled out a cart that follows a shopper across Search, Gemini, YouTube and Gmail, and the shopping agents inside ChatGPT and Amazon got good enough to research a product and, more and more, just buy it. So picture the moment that decides your quarter. Someone tells their assistant to reorder the usual laundry detergent, and the assistant has to choose. It will never watch your ads. What decides the sale is whatever it can read in your product data.
        </p>
        <p>
          At Zeta I sold an AI acquisition product into retail and CPG brands, and the fight in the room was always the same. The brand team believed the logo did the work, and the performance data kept saying the offer and the product detail did most of it. Agentic shopping takes that old argument and turns it into a budget line you can&apos;t put off.
        </p>

        <h2>What an agent actually optimizes for</h2>
        <p>
          A shopping agent isn&apos;t sentimental. It weighs price, availability, delivery speed, and how cleanly it can read your product facts: size, count, ingredients, allergens, the certifications a household filters on. If your detergent&apos;s data is messy or your retailer feed is out of sync, the agent quietly routes around you to the option it can parse. Worse for you, it can{" "}
          <a href="https://www.foodnavigator-usa.com/Article/2026/02/18/why-cpg-brands-must-prepare-for-ai-shopping-agents/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">build its own supplier preferences</a>{" "}over time based on which brands behave well inside its system. You can lose a customer you never knew was in play.
        </p>

        <h2>The loyalty you built may not transfer</h2>
        <p>
          The uncomfortable part is for anyone who has spent a career building brand equity. Decades of that work went into winning a human standing in an aisle, scanning a shelf, feeling something. Two things can be true. That equity still moves the human-led purchases, and it&apos;s close to invisible to an agent executing a reorder. The agent inherits the loyalty you earned, but only if your product is the default in the data it reads. Lose that default and your moat is a feeling the buyer never stops to experience.
        </p>

        <h2>This is a demand-planning problem before it&apos;s a marketing one</h2>
        <p>
          Get your canonical product data clean and machine-readable, synced with every retailer API, down to variant-level detail. Treat &ldquo;is my product legible to an agent&rdquo; as a board-level metric, not an e-commerce chore that lives in someone&apos;s spreadsheet. Then plan for two buyers at once: the human you still win with story, and the agent you win with structure. The companies that staff for both will hold share. The ones still pouring the whole budget into the thirty-second spot will watch an agent reorder a competitor while their brand-tracking scores stay a comfortable green.
        </p>

        <h2>The read</h2>
        <p>
          None of this means brand is dead. The emotional, human side of this is exactly what an agent can&apos;t replicate, and it&apos;s still where premium pricing comes from. But a growing slice of your volume is about to be decided by software that has never seen your campaign and never will. The companies that come out ahead won&apos;t be the loudest ones. They&apos;ll be the ones whose pitch still held up after you took the personality out of it. Make your product the obvious answer in the data, then go win the humans. In that order, because the agent reorders first and asks questions never.
        </p>
      </div>
    ),
    sources: [
      { title: "NielsenIQ — Agentic Commerce and AI in CPG", url: "https://nielseniq.com/global/en/insights/analysis/2026/agentic-commerce-and-ai-in-cpg/" },
      { title: "FoodNavigator-USA — Why CPG Brands Must Prepare for AI Shopping Agents", url: "https://www.foodnavigator-usa.com/Article/2026/02/18/why-cpg-brands-must-prepare-for-ai-shopping-agents/" },
      { title: "PwC — Agentic Commerce Readiness", url: "https://www.pwc.com/us/en/services/consulting/business-transformation/library/agentic-commerce.html" },
    ],
  },
  {
    slug: "financial-services-vertical-ai",
    title: "Banks are done piloting AI. What they're buying now is boring on purpose.",
    date: "Jun 9, 2026",
    readTime: "7 min",
    tag: "AI",
    color: "from-blue-600 to-cyan-500",
    tldr: "Banks shifted from AI pilots to production agent fleets in underwriting, fraud, KYC, and reconciliation, with 44% of finance teams using agentic AI in 2026 (up 600%+). Vertical AI is commanding premium multiples because it ships with the guardrails a risk committee needs: SOC 2, PCI-DSS, EU AI Act alignment, immutable audit trails. The economic buyer moved from the line-of-business leader to the chief risk officer. Bring the governance answer to the first meeting, not the security review.",
    content: (
      <div className="prose-content">
        <p>
          Banks spent two years running AI pilots that never left the lab. That phase is over. In 2026 they&apos;re deploying fleets of specialized agents into underwriting, fraud, KYC, and reconciliation, and the spend is following.{" "}
          <a href="https://www.fintechfutures.com/ai-in-fintech/banking-in-2026-production-scale-ai-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Wolters Kluwer says 44% of finance teams will use agentic AI this year</a>, up more than 600%.{" "}
          <a href="https://investors.fiserv.com/news-releases/news-release-details/fiserv-launches-agentos-operating-system-agentic-ai-banking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Fiserv just launched an agent operating system for banking</a>{" "}with six institutions co-building it. The money moved from someday to this quarter.
        </p>
        <p>
          I spent years at Oracle inside accounts like JPMorgan Chase, where the difference between a deal that closed and one that died was rarely the technology. It was whether risk, compliance, and the audit function could live with what you were proposing. Selling into a regulated buyer teaches you a humbling lesson. The coolest capability in the room loses to the one with a clean control story.
        </p>

        <h2>Why vertical beats horizontal in a regulated buyer</h2>
        <p>
          This is why vertical AI is commanding premium multiples while horizontal tools fight on price. A general-purpose model is impressive and, to a bank&apos;s risk committee, a little terrifying, because nobody can fully explain what it will do on the edge case that becomes tomorrow&apos;s enforcement action. A vertical AI built for financial services ships with the domain knowledge and the guardrails baked in: SOC 2 Type II, PCI-DSS, alignment with the EU AI Act&apos;s high-risk classification, and an immutable audit trail for every decision an agent makes. In a bank, the audit trail is the product.
        </p>

        <h2>The buyer you have to win changed</h2>
        <p>
          If you&apos;re selling AI into financial services, the economic buyer shifted under your feet. A year ago you sold a line-of-business leader on a productivity win. Now the person who can kill your deal, the chief risk officer or the head of model governance, is in the first meeting, not the last. Your model can be genuinely better and still be unsellable because you can&apos;t produce the audit log a regulator will demand. Bring the governance answer to the opening conversation. Treating it as a procurement formality at the end is how good products die in the risk review.
        </p>

        <h2>What this means for the next year</h2>
        <p>
          The ROI is real enough to keep the budgets coming. Organizations are seeing an average 2.3x return on agentic AI inside about thirteen months, which is why the pilots turned into production lines. But the durable winners in financial-services AI over the next year will be the vendors who treated compliance as a feature to build, not a tax to pay. Regulated industries are where AI either grows up or gets banned, and banking is going first. Healthcare and insurance are watching, ready to copy whatever survives the bank&apos;s risk committee.
        </p>

        <h2>The read</h2>
        <p>
          If your roadmap still treats audit logging and regulatory alignment as the unglamorous work you&apos;ll add later, move it to the front. In financial services, the boring features are the deal. The vendors who figured that out are quietly signing eight-figure agreements while the flashier demos are still stuck in legal. Build the audit trail like it&apos;s the headline, because to your buyer it already is.
        </p>
      </div>
    ),
    sources: [
      { title: "FinTech Futures — Banking in 2026: Production-Scale AI Agents (Wolters Kluwer data)", url: "https://www.fintechfutures.com/ai-in-fintech/banking-in-2026-production-scale-ai-agents" },
      { title: "Fiserv — Launches agentOS: The Operating System for Agentic AI in Banking", url: "https://investors.fiserv.com/news-releases/news-release-details/fiserv-launches-agentos-operating-system-agentic-ai-banking" },
      { title: "Kore.ai — AI Agents in Finance and Banking: 12 Proven Use Cases (2026)", url: "https://www.kore.ai/blog/ai-agents-in-finance-banking-12-proven-use-cases-2026" },
    ],
  },
  {
    slug: "commerce-media-passed-tv-agents-buying",
    title: "Commerce media just passed TV. And the agents are taking the keyboard.",
    date: "Jun 1, 2026",
    readTime: "7 min",
    tag: "Future of Ads",
    color: "from-orange-500 to-rose-500",
    tldr: "Commerce media ($178B) just passed global TV ($171B), and retail media is the bulk of it. Simultaneously, Amazon and Walmart are pushing campaign mechanics onto platform-side agents — which guts the value of selling manual campaign management and rewards whoever owns strategy, first-party data, and measurement. If you sell into or around RMNs, reprice your value now.",
    content: (
      <div className="prose-content">
        <p>
          The biggest channel in advertising is no longer television. As of this year it&apos;s commerce media &mdash; and the people who built careers on managing it by hand are about to find out the platforms want that job back.
        </p>
        <p>
          WPP Media&apos;s latest forecast puts{" "}
          <a href="https://www.performancemarketingworld.com/article/1942423/commerce-media-surpasses-tv-advertising-first-time-wpp-reports" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">commerce media at $178.2B in global ad revenue, overtaking TV&apos;s $171.1B for the first time</a>. Retail media networks are the bulk of that &mdash; roughly $174B and growing double digits into 2026. Amazon and Walmart alone command about 88% of US retail media share. This stopped being an emerging channel a while ago. It&apos;s now the channel.
        </p>
        <p>
          But the headline number isn&apos;t the interesting part. The interesting part is what&apos;s happening to <em>who does the work.</em>
        </p>

        <h2>The platforms are eating the agency layer</h2>
        <p>
          For a decade, the retail media value chain had a comfortable middle: agencies, specialist shops, and an army of campaign managers who knew the quirks of each platform&apos;s ad console and charged for the labor of running it. That middle is being automated from the inside out. Amazon&apos;s Ads Agent beta is already posting{" "}
          <a href="https://www.pymnts.com/news/retail/2026/walmarts-retail-media-scores-wins-while-amazons-ai-goes-ambient" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">18% lower CPMs and 16% lower CPAs</a>
          {" "}by moving campaign mechanics onto the platform side. Walmart&apos;s Marty &mdash; an agentic assistant for suppliers and advertisers &mdash; now handles onboarding, orders, and campaign management directly.
        </p>
        <p>
          I&apos;ve lived the front edge of this. At Zeta I sold an AI customer-acquisition product into retail, e-commerce, and travel brands that didn&apos;t have a budget line for it yet. The hardest part was never the technology &mdash; it was convincing a brand to reallocate from a channel they understood to one they didn&apos;t. That objection is gone now. The budgets have moved. What hasn&apos;t caught up is the way most people in this ecosystem price their value, and that&apos;s the gap worth paying attention to.
        </p>

        <h2>What the agents commoditize — and what they don&apos;t</h2>
        <p>
          Be honest about what a platform-side agent is genuinely good at: bid management, budget pacing, keyword expansion, creative variant testing, the daily console babysitting that used to justify a retainer. If that&apos;s the core of what you or your team sells, the floor is dropping out, and it&apos;s dropping fast. Amazon and Walmart have every incentive to automate it &mdash; cheaper, faster execution on their own platform means more spend flows through them and the agency tax shrinks.
        </p>
        <p>
          Here&apos;s what the agent can&apos;t do, at least not yet. It can&apos;t tell a brand which retailers to bet on and which to abandon. It can&apos;t arbitrate the channel conflict between a CPG&apos;s shopper-marketing team and its brand team. It can&apos;t build a clean-room measurement story that ties Amazon spend to incremental sales the CFO will believe. And it has every reason <em>not</em> to give you honest cross-platform measurement &mdash; Amazon&apos;s agent will never tell you to move budget to Walmart. That last point is the whole game.
        </p>

        <h2>The seller&apos;s read</h2>
        <p>
          If you sell into or around retail media, reprice your value this quarter. Stop charging for execution the platforms are giving away and start charging for the three things they structurally can&apos;t provide: independent strategy across competing retailers, first-party data and clean-room measurement the platforms have a conflict of interest in obscuring, and the human judgment to decide where a finite budget actually goes. The agencies that survive this shift will look less like campaign shops and more like independent advisors who happen to be fluent in the consoles.
        </p>
        <p>
          And if you sell anything <em>else</em> &mdash; martech, measurement, CDPs, retail tech &mdash; the agentic shift is the opening. The $136B agentic-commerce market is{" "}
          <a href="https://www.adweek.com/agencies/commerce-media-surpasses-tv-globally-and-traditional-search-holds-ai-at-bay-for-now/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">forecast to hit $1.7T by 2030</a>, with Walmart&apos;s and Etsy&apos;s OpenAI partnerships as the early signals. Every brand suddenly relying on platform-side agents needs an independent layer of truth sitting above those agents. That layer is the product.
        </p>

        <h2>The takeaway</h2>
        <p>
          Commerce media passing TV is the kind of milestone that makes the trade press for a day and then gets forgotten. The thing to actually do something about is the automation happening underneath it. The platforms are taking the keyboard. Your value isn&apos;t the keystrokes anymore &mdash; it&apos;s the judgment about where to point the machine, and the honesty the machine has a reason to withhold.
        </p>
      </div>
    ),
  },
  {
    slug: "microsoft-shadow-ai-agent-gatekeeper",
    title: "Microsoft just made “shadow AI” the new shadow IT. Your agent has a new gatekeeper.",
    date: "Jun 1, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-slate-600 to-blue-600",
    tldr: "Microsoft Agent 365 is GA, treating unmanaged AI agents as the new shadow IT — it discovers and governs agents (including Claude Code) across clouds at $15/user/month. For anyone selling AI agents into the enterprise, security and governance just became a gate on every deal. Bring the IT/security answer to the first meeting, not the security review.",
    content: (
      <div className="prose-content">
        <p>
          The easiest enterprise AI deals of the last two years had a quiet thing in common: nobody in IT knew they were happening. That era just ended.
        </p>
        <p>
          Microsoft took{" "}
          <a href="https://venturebeat.com/technology/microsoft-takes-agent-365-out-of-preview-as-shadow-ai-becomes-an-enterprise-threat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Agent 365 generally available</a>
          {" "}and pointed it directly at what it&apos;s calling &ldquo;shadow AI&rdquo; &mdash; the unmanaged agents employees are running without IT&apos;s knowledge. Defender and Intune can now{" "}
          <a href="https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">detect agents like Claude Code running on a Windows device</a>, and the control plane governs agents across Microsoft, AWS, and Google Cloud. It&apos;s $15 per user per month, bundled into the new E7 suite. Microsoft is doing to AI agents exactly what it did to SaaS sprawl a decade ago: turning a chaotic, bottoms-up adoption wave into a governed, top-down line item it controls.
        </p>

        <h2>Why this matters more than another product launch</h2>
        <p>
          For two years, the dominant enterprise AI sales motion has been bottoms-up. A team adopts an agent, it works, usage spreads, and procurement formalizes a deal that already has momentum. That motion worked precisely <em>because</em> it flew under IT&apos;s radar. The champion didn&apos;t need permission &mdash; they needed a credit card and a result.
        </p>
        <p>
          Agent 365 is built to end exactly that. The whole pitch to a CIO is: you have agents running in your environment right now that you can&apos;t see, can&apos;t audit, and can&apos;t shut off. Here&apos;s the dashboard that surfaces all of them. The moment that dashboard exists, every unsanctioned agent in the building becomes a flagged risk, and the bottoms-up motion that got you in the door becomes the thing that gets you escorted out.
        </p>
        <p>
          I learned this distinction selling to engineers at Fastly. The people who could say yes and the people who could say no were different humans, and the person who could say <em>no</em> &mdash; security, compliance, platform ownership &mdash; almost always had the longer memory and the louder veto. AI agent selling is about to rediscover that lesson all at once.
        </p>

        <h2>What changes for anyone selling agents</h2>
        <p>
          The gatekeeper changed. It used to be the budget holder. Now it&apos;s whoever owns the governance dashboard. If your agent shows up as an unmanaged red flag in someone&apos;s Agent 365 console, you are no longer a productivity win &mdash; you are an incident. That means three things move to the front of your motion.
        </p>
        <p>
          <strong>First, bring the governance answer to the first meeting, not the security review.</strong> &ldquo;Here&apos;s how we register inside your control plane, here&apos;s the identity model, here&apos;s the audit log&rdquo; needs to be in your opening deck. Treating it as a late-stage procurement hurdle is how deals now die in month four.
        </p>
        <p>
          <strong>Second, get interoperable or get blocked.</strong> Microsoft built cross-cloud registry sync with AWS Bedrock and Google Cloud. The agents that survive enterprise governance are the ones that register cleanly into these control planes. &ldquo;Ungovernable&rdquo; is becoming a synonym for &ldquo;banned.&rdquo;
        </p>
        <p>
          <strong>Third, sell to security as a champion, not an obstacle.</strong> The CISO who was a blocker last year is the economic buyer this year. There&apos;s a real budget forming around agent governance &mdash; Microsoft just priced it at $15 a seat. If you can make a security leader look good in front of the board for having visibility and control over the agent sprawl, you&apos;ve found your new champion.
        </p>

        <h2>The takeaway</h2>
        <p>
          Shadow AI becoming a governed asset class is good for the category &mdash; it&apos;s what every technology has to survive to become real infrastructure. SaaS went through it. Cloud went through it. But the transition is brutal for any seller still running the permissionless, bottoms-up playbook that worked in 2024.
        </p>
        <p>
          Audit your own motion this week. If your deals depend on staying invisible to IT, you&apos;re selling against the single biggest enterprise software company on earth and its new favorite dashboard. Get governable, get in front of security early, and turn the gatekeeper into the champion before someone else&apos;s agent does.
        </p>
      </div>
    ),
  },
  {
    slug: "ai-ipo-race-model-was-never-the-moat",
    title: "Two AI labs are about to go public. The model was never the moat.",
    date: "Jun 1, 2026",
    readTime: "7 min",
    tag: "Macro",
    color: "from-sky-600 to-indigo-600",
    tldr: "OpenAI (September) and Anthropic (October) are both racing to IPO, which forces the frontier labs into public-market transparency for the first time. Benedict Evans' thesis lands at the same moment: models trend toward commodity infrastructure, and value accrues to the application layer that owns distribution and workflow. For sellers, the takeaway is to stop selling the model and start selling the workflow it sits inside.",
    content: (
      <div className="prose-content">
        <p>
          For three years the AI labs have asked you to take their economics on faith. That ends this quarter.
        </p>
        <p>
          OpenAI just{" "}
          <a href="https://thenextweb.com/news/openai-ipo-confidential-filing-anthropic-race" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">filed a confidential IPO prospectus</a>
          {" "}targeting a September debut, and Anthropic is racing to follow in October &mdash; fresh off a{" "}
          <a href="https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">$65B round at a $965B valuation</a>
          {" "}that briefly made it the most valuable AI startup on earth. Two of the most important companies of the decade are about to file S-1s within weeks of each other. And an S-1 doesn&apos;t care about your narrative. It shows gross margin, cost of revenue, and customer concentration in black and white.
        </p>
        <p>
          That is the real story here, and it isn&apos;t the valuations. It&apos;s that the AI industry is about to be forced into a level of financial transparency it has spent its entire existence avoiding.
        </p>

        <h2>What the S-1 will actually reveal</h2>
        <p>
          Private rounds let you sell a story. Public filings make you show the unit economics. The number every enterprise buyer and every competitor will be reading for is gross margin &mdash; because inference is expensive, frontier training runs are astronomically expensive, and the price war between OpenAI, Anthropic, and Google has been pushing per-token costs down for two years straight. When two labs are competing for revenue heading into a listing, they discount. Aggressively. That&apos;s great for you as a buyer this year. It&apos;s a flashing warning sign about the long-term margin structure of the thing you&apos;re betting on.
        </p>
        <p>
          I&apos;ve watched this movie before. At Fastly, I sold infrastructure into a market where the underlying capability &mdash; moving bytes fast &mdash; was relentlessly commoditizing. The lesson was brutal and clarifying: when the core thing you sell trends toward zero margin, you don&apos;t win on the core thing. You win on everything wrapped around it.
        </p>

        <h2>Benedict Evans said the quiet part out loud</h2>
        <p>
          The same week the IPO timelines leaked, Benedict Evans sat down with Lenny Rachitsky and made{" "}
          <a href="https://www.lennysnewsletter.com/p/a-rational-conversation-on-where" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">the argument</a>
          {" "}I think every GTM leader should internalize: the model makers may end up as low-margin commodity infrastructure, and the real money flows to the application layer &mdash; the companies that embed AI into specific workflows, own distribution, and solve an actual business problem.
        </p>
        <p>
          He compared this moment to 1997. Not the dot-com crash &mdash; the part before it, where the technology is obviously real, obviously transformative, and nobody yet knows which layer of the stack captures the value. His bet is that it&apos;s not the layer everyone&apos;s currently valuing at a trillion dollars. It&apos;s the layer that owns the customer relationship and the workflow the customer can&apos;t rip out.
        </p>
        <p>
          If he&apos;s right &mdash; and the commoditization pressure showing up in those S-1s suggests he is &mdash; then the moat was never the model. The moat is distribution and workflow lock-in. The model is becoming electricity: indispensable, ubiquitous, and a terrible business to be the generic supplier of.
        </p>

        <h2>What this changes for how you sell</h2>
        <p>
          If you sell anything with AI inside it, stop leading with the model. &ldquo;We&apos;re built on the latest frontier model&rdquo; is now a statement with the strategic weight of &ldquo;we run on AWS.&rdquo; True, table stakes, and completely undifferentiated. Your buyer can get the same model from a dozen vendors and increasingly from a free tier. The model is not your value. It never was.
        </p>
        <p>
          Your value is the workflow you own. The proprietary data you enrich it with. The integration into the system of record where the work actually happens. The reason a customer would have to tear out three other tools to leave you. That&apos;s the conversation that survives a commodity price war, and it&apos;s the conversation that maps directly to retention and expansion &mdash; which, not coincidentally, is the part of revenue that public-market investors reward most.
        </p>
        <p>
          There&apos;s a defensive read here too. If you&apos;re an enterprise buyer locked into a frontier-lab contract you signed eighteen months ago, the IPO is your leverage. Margin pressure and a price war mean your renewal should cost less, not more. Walk into that conversation knowing the vendor needs your logo on the revenue line more than you need their specific model.
        </p>

        <h2>The takeaway</h2>
        <p>
          Watch the gross-margin line when those S-1s go public. It will tell you more about the next five years of this industry than any keynote. And whatever it says, plan as if Evans is right: the model is becoming a commodity, and the durable businesses are the ones built one layer up &mdash; in the workflow, in the distribution, in the relationship.
        </p>
        <p>
          Sell the workflow, not the model. The labs going public is the clearest signal yet that the model alone was never going to be enough.
        </p>
      </div>
    ),
  },
  {
    slug: "anthropic-900b-category-sale-is-over",
    title: "Anthropic just crossed $900B. The AI category sale is over.",
    date: "May 26, 2026",
    readTime: "7 min",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic is closing a $30B round at $900B+, PwC is all-in on Claude, and the Big Four have made their platform bets. The category sale — creating urgency around AI being real — is over. The new conversation is about platform choice, switching costs, and whether your buyer backed the right horse. Your pitch needs to change.",
    content: (
      <div className="prose-content">
        <p>
          The sale I&apos;ve been running for two years just changed. If yours hasn&apos;t, read this.
        </p>
        <p>
          Anthropic is reportedly{" "}
          <a href="https://www.buildfastwithai.com/blogs/ai-news-today-may-25-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">closing a $30 billion round at a valuation north of $900 billion</a>
          {" "}&mdash; which, if it closes at the high end, would make it more valuable than OpenAI for the first time. The same week, PwC announced it&apos;s certifying 30,000 US professionals on Claude and embedding Anthropic engineers inside the firm to build an entirely new finance business group from scratch. Insurance underwriting that took ten weeks now takes ten days. Security tasks that took hours take minutes. The Big Four have made their bets.
        </p>
        <p>
          The enterprise AI sale &mdash; the one where you were creating category urgency, helping buyers understand why they couldn&apos;t afford to wait &mdash; is over. Your buyers made up their minds. The question now is whether you&apos;ve updated your pitch.
        </p>
        <p>
          I started my career at Crispin Porter + Bogusky when digital was the emerging channel nobody had a budget line for. Then I was at Oracle when mobile changed how enterprise buyers researched vendors. Then at Zeta when AI-powered acquisition was new enough that I had to explain what a model was before I could get to the demo. The pattern is always the same: there&apos;s a window where early category framing is the job, and then the window closes and the job becomes something else. Most sellers miss the transition.
        </p>
        <p>
          The window on &ldquo;AI is coming, you should get ready&rdquo; closed sometime in the last six months. Here&apos;s what replaced it.
        </p>

        <h2>The old conversation</h2>
        <p>
          The AI sales motion from 2023 through early 2025 was fundamentally a change-management sale. You were selling urgency. The objection was philosophical: our organization isn&apos;t ready, our data isn&apos;t clean, we don&apos;t have the talent to manage it, our legal team has concerns. The job was to dismantle those objections one by one while building a coalition of internal champions who understood that the cost of inaction was compounding.
        </p>
        <p>
          That was a real job, and I&apos;m proud of what I built doing it. But if you&apos;re still running that motion in May 2026, you&apos;re selling to a customer who already bought &mdash; or you&apos;re selling to the 3% who have genuinely decided to sit it out.
        </p>

        <h2>The new conversation</h2>
        <p>
          Here&apos;s what I&apos;m actually hearing now. &ldquo;We deployed a pilot, it worked, but we&apos;re not sure we picked the right platform.&rdquo; Or: &ldquo;We&apos;re locked into a contract but we don&apos;t think we&apos;re getting the outcomes the vendor promised.&rdquo; Or: &ldquo;Our biggest competitor just announced a major partnership, and our board wants to know if we&apos;re behind.&rdquo;
        </p>
        <p>
          This is a different sale. The category anxiety is gone. Platform anxiety replaced it. Your buyers aren&apos;t asking whether AI is real. They&apos;re asking whether they picked the right bet, whether the deal they signed two years ago aged well, and whether switching costs are lower than staying costs. That is a much more specific conversation, and it requires a completely different set of proof points.
        </p>
        <p>
          The PwC deal is instructive. PwC didn&apos;t announce a pilot. They announced a joint Center of Excellence, 30,000 professional certifications, and an entirely new finance business group built on top of Claude. That is not a buyer who is uncertain about the category. That is a buyer who has placed a long-duration bet and is building switching costs into their own workforce. The question their competitors are asking isn&apos;t &ldquo;should we use AI?&rdquo; It&apos;s &ldquo;are we as committed as PwC is, and if not, what does that cost us?&rdquo;
        </p>

        <h2>What changes in the room</h2>
        <p>
          Three things I&apos;ve noticed shift in the conversations I&apos;m having now.
        </p>
        <p>
          <strong>First, the discovery question changed.</strong> In 2024, the most useful opener was &ldquo;what&apos;s the cost of your team not having this?&rdquo; In 2026, it&apos;s &ldquo;what happened with the last AI deployment you ran?&rdquo; The answer tells you everything: whether they&apos;re in the platform-anxiety conversation, whether they&apos;re nursing a failed pilot, or whether they&apos;re genuinely looking to expand what&apos;s already working.
        </p>
        <p>
          <strong>Second, the proof that moves buyers changed.</strong> Case studies are less compelling than vendor stability signals. Buyers want to know: is this company going to exist in three years? Is the model I&apos;m betting on going to compound, or get left behind? A $900B valuation and a $30B round from blue-chip institutional investors sends a very specific message to enterprise procurement committees. It&apos;s not about the technology anymore &mdash; it&apos;s about whether this is a platform worth betting your career on.
        </p>
        <p>
          <strong>Third, the internal champion&apos;s job changed.</strong> In 2024, the champion was convincing the committee that AI was real. In 2026, they&apos;re defending a platform choice they already made or advocating for one that&apos;s better than what&apos;s already deployed. That&apos;s not persuasion &mdash; it&apos;s politics. Help them build the political case, not the category case.
        </p>

        <h2>The takeaway</h2>
        <p>
          If you&apos;re selling AI products right now, the next call you take should start with a diagnostic question: does your buyer need to be convinced the category is real, or do they need to be convinced your platform is the right one?
        </p>
        <p>
          Most enterprise buyers I talk to are firmly in the second conversation. They&apos;re past the &ldquo;should we do AI&rdquo; phase and into the &ldquo;which AI bet compounds for us&rdquo; phase. The moment you realize which conversation you&apos;re in, everything changes &mdash; the framing, the proof points, the champion strategy, the close.
        </p>
        <p>
          The category sale is over. The platform sale is just beginning. The sellers who figure that out this quarter will have a very different year than the ones still building decks around &ldquo;the AI imperative.&rdquo;
        </p>
      </div>
    ),
  },
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
          <strong>Liquidity</strong> is for early investors and employees with vested equity. It is not for the customer, the product, or the long-term health of the company. It is an exit event for the people who funded you, dressed up in the language of a milestone.
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
          <a href="https://liveramp.com/news/publicis-to-acquire-liveramp-to-accelerate-data-co-creation-for-smarter-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Press release</a>{" "}landed Tuesday morning. Publicis is paying $2.167 billion in cash for LiveRamp &mdash; $38.50 a
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
          <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Stanford&apos;s 2026 AI Index Report</a>{" "}dropped, and most of the coverage has fixated on the wrong numbers.
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
          On May 5, <a href="https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Anthropic announced</a>{" "}that Claude agents are now in production at JPMorgan Chase, Goldman Sachs,
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
          On May 5, 2026, <a href="https://openai.com/index/new-ways-to-buy-chatgpt-ads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">OpenAI quietly did something</a>{" "}that will reshape the next decade of digital advertising. They
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
    sources: [
      { title: "Aggarwal et al. — GEO: Generative Engine Optimization (KDD 2024)", url: "https://arxiv.org/abs/2311.09735" },
      { title: "Gartner — Search Engine Volume Will Drop 25% by 2026, Due to AI Chatbots and Other Virtual Agents", url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents" },
    ],
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
          A <a href="https://www.federalreserve.gov/econres/notes/feds-notes/ai-adoption-and-firms-job-posting-behavior-20260327.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Federal Reserve study</a>{" "}covering more than one million firms found what the researchers called
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
    sources: [
      { title: "Federal Reserve (FEDS Notes) — AI Adoption and Firms' Job Posting Behavior", url: "https://www.federalreserve.gov/econres/notes/feds-notes/ai-adoption-and-firms-job-posting-behavior-20260327.html" },
      { title: "Humlum & Vestergaard (NBER w33777) — Large Language Models, Small Labor Market Effects", url: "https://www.nber.org/papers/w33777" },
      { title: "ResumeBuilder survey via Metaintro — 59% of Hiring Managers Admit AI Is Their Go-To Layoff Excuse", url: "https://www.metaintro.com/blog/hiring-managers-admit-ai-layoff-excuse-survey-2026" },
      { title: "The Pragmatic Engineer — Will US Companies Hire Fewer Engineers Due to Section 174?", url: "https://blog.pragmaticengineer.com/section-174/" },
    ],
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
  const postUrl = `https://chrisdorsey.co/writing/${post.slug}`;
  const publishedISO = new Date(post.date).toISOString();
  return {
    title: `${post.title} — Chris Dorsey`,
    description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
    authors: [{ name: "Christopher Dorsey", url: "https://chrisdorsey.co" }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      url: postUrl,
      type: "article",
      publishedTime: publishedISO,
      modifiedTime: publishedISO,
      authors: ["https://chrisdorsey.co"],
      siteName: "Chris Dorsey",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `${post.tldr} — Chris Dorsey, AI & MadTech Advisor & Sales Leader`,
      creator: "@chrisdorsey",
      images: ["/og-image.jpg"],
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
    image: "https://chrisdorsey.co/og-image.jpg",
    inLanguage: "en-US",
    ...(post.sources?.length
      ? {
          citation: post.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.title,
            url: s.url,
          })),
        }
      : {}),
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
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #334E8C, #0F6E56)" }}>Dorsey</span>
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

        {/* Sources — GEO citations */}
        {post.sources?.length ? (
          <div className="mt-14 pt-8 border-t border-sky-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Sources</p>
            <ol className="space-y-2 list-decimal list-inside">
              {post.sources.map((s, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

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
              <p className="text-sm text-slate-500 mb-3">Enterprise Sales Leader · AI Go-To-Market · Startup Advisor · Denver, CO</p>
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium"
                >
                  {CONTACT_EMAIL}
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
              href={`mailto:${CONTACT_EMAIL}`}
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
