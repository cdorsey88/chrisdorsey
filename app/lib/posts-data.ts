export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tag: string;
  color: string;
  tldr: string;
};

export const posts: PostMeta[] = [
  {
    slug: "sales-stack-inside-the-assistant",
    title: "Gong is a Microsoft SKU now, and ZoomInfo lives inside Claude",
    date: "Jul 15, 2026",
    readTime: "6 min",
    excerpt:
      "In five weeks, ZoomInfo wired its database into Claude and OpenAI's Codex for Work, Clay put its workflows inside ChatGPT, and Gong became a transactable offer in the Microsoft Marketplace. The biggest names in sales tech are handing over the one thing they spent a decade fighting for, the rep's screen, and keeping the data and the workflows. Your renewal and your pitch are both about to be graded on what's left.",
    tag: "Sales",
    color: "from-teal-700 to-sky-500",
    tldr: "Between June 2 and July 1, ZoomInfo made its GTM Context Graph natively available in OpenAI's Codex for Work and shipped a Claude connector, Clay put its MCP live in Claude and ChatGPT so reps can run full enrichment workflows from a chat prompt, and Gong became a transactable offer in the Microsoft Marketplace, buyable under an existing Microsoft agreement and delivered inside Copilot, Dynamics 365 and Teams. Three of the biggest names in sales tech moved their products into somebody else's window, voluntarily, while growing. Two shifts are happening at once: the interface is dissolving into the assistant, and the purchase is moving inside pre-committed cloud budget. When nobody opens your UI, the renewal argument becomes the quality of what you feed the assistant, and seat pricing stops describing how the product is consumed. If you run a revenue org, audit which tools your reps now touch only through an assistant and reprice the renewal around records and workflows instead of seats. If you sell sales tech, get the marketplace listing and the connector story ready, because asking for net-new budget against a rival who draws down a commit is the losing position.",
  },
  {
    slug: "salesforce-m3ter-consumption-billing",
    title: "Salesforce bought the meter that will price your next renewal",
    date: "Jul 14, 2026",
    readTime: "6 min",
    excerpt:
      "Salesforce closed its acquisition of m3ter on July 1 — a London metering platform that gives Agentforce native usage- and outcome-based billing. The coverage filed it under monetization infrastructure. Underneath the plumbing story: consumption pricing rewires the sales org on both sides of the deal, starting with the comp plan and ending at a renewal where the vendor reads your usage curve in real time.",
    tag: "Sales",
    color: "from-violet-700 to-fuchsia-500",
    tldr: "Salesforce closed its acquisition of m3ter on July 1: a London-based metering and rating platform that will give Agentforce Revenue Management native usage- and outcome-based billing, terms undisclosed. Salesforce's own framing is that AI is moving software from subscriptions to consumption, and it wants the meter inside its walls. The coverage treated this as billing infrastructure. The unwritten part is what consumption pricing does to the people in the deal. Inside the vendor, the comp plan breaks first: a consumption contract signs small and pays out on adoption, so the rep's job no longer ends at signature. Onboarding, workload growth and expansion become the quota. I lived that model at Fastly, where the bill was traffic and the contract was a starting guess. Across the table, the vendor now watches your usage telemetry in near real time, wired into the same system that runs its renewal playbook, which means it may know your ramp flattened before your finance team does. If you sell: ask how comp treats the ramp before you take the job. If you buy: meter your own usage independently and walk into every renewal with your own numbers, because the other side is walking in with theirs.",
  },
  {
    slug: "alexa-agentic-ads-checkout-for-other-brands",
    title: "Amazon is now the checkout counter for Papa Johns and Ticketmaster",
    date: "Jul 14, 2026",
    readTime: "5 min",
    excerpt:
      "Alexa+ Agentic Ads, launched June 23 on Echo Show, take a shopper from seeing an ad to a completed purchase inside one conversation — pizza ordered, concert seats booked into a Ticketmaster account. The coverage called it agentic advertising's debut. The bigger move: none of those transactions live on Amazon's store. Amazon is running the register for other people's commerce, and an ad that closes the sale gets bought, and sold, like a sales channel.",
    tag: "Future of Ads",
    color: "from-orange-600 to-rose-500",
    tldr: "On June 23, the first morning of Prime Day, Amazon introduced Alexa+ Agentic Ads on Echo Show: sponsored prompts inside Alexa+ conversations where the shopper can ask questions, compare options and complete the purchase without leaving the ad. Launch partners are Papa Johns for food and ticket sales for Beck, Jill Scott and Omar Courtz, delivered straight into the buyer's Ticketmaster account. The trade press filed it as agentic advertising's arrival. The underweighted detail: these transactions never touch amazon.com. Amazon is operating checkout for merchants outside its own store, which extends its take beyond the marketplace, the reverse of Walmart's choice to let AI assistants sell while refusing to surrender the register. And when the ad completes the purchase, the economics stop looking like media. Reach and CPM give way to close rate, take rate, customer-record ownership and who eats the refund when the pizza shows up cold — channel-sales questions, negotiated by people who own revenue lines, which is who will end up buying and selling these placements. If you're a brand offered an agentic format, negotiate it like a channel deal: data rights, the customer record, CX liability, and the commission math against your own checkout margin. And bring whoever owns the revenue number into the room.",
  },
  {
    slug: "chatgpt-work-openai-app-layer",
    title: "OpenAI moved into the workflow layer it was supplying",
    date: "Jul 13, 2026",
    readTime: "6 min",
    excerpt:
      "OpenAI launched ChatGPT Work on July 9 — an agent that reads your Slack, Drive, email and CRM and hands back finished spreadsheets, decks, reports and web apps. Coverage called it a Copilot rival. The bigger story is what it does to the thousands of SaaS vendors who built the same product on top of OpenAI's models: the supplier just shipped their roadmap.",
    tag: "AI",
    color: "from-sky-700 to-indigo-600",
    tldr: "On July 9 OpenAI launched ChatGPT Work alongside the general release of GPT-5.6: an agent that connects to Slack, Teams, Google Drive, SharePoint, email, calendars and CRMs, and returns finished spreadsheets, decks, reports and working web apps. The coverage filed it as a Copilot rival. The bigger exposure sits with the app layer: thousands of SaaS companies spent two years building exactly this on top of OpenAI's models, and the supplier just shipped the product. When the agent owns the screen, the software underneath keeps the data and loses the interface, and the seat count was priced on the interface. Enterprise adoption will run slower than the demo, since permissions, security reviews and the Microsoft bundle all stand in the way. But the procurement question ships faster than the capability. 'Why are we paying for this tool when ChatGPT Work makes the same report' is coming to your next renewal. Answer it with an outcome you own, a workflow the generalist agent can't go deep on, and data it can't get elsewhere. A feature list won't survive the question.",
  },
  {
    slug: "instacart-immersive-feed-search-hedge",
    title: "Instacart's answer to the search problem is a feed of dinner videos",
    date: "Jul 13, 2026",
    readTime: "5 min",
    excerpt:
      "On June 22 Instacart introduced Immersive Feed — shoppable, TikTok-style vertical video inside its retailer storefronts, in pilot with brands like Hellmann's and Siete Foods. The trade coverage got its TikTok headline and moved on. The context that matters: more than 60% of retail media spend rides on sponsored search, an ad that needs a search bar shoppers are starting to skip. A feed is inventory that doesn't wait for a query.",
    tag: "Future of Ads",
    color: "from-lime-600 to-emerald-600",
    tldr: "Instacart's Immersive Feed, announced June 22, puts shoppable 9:16 vertical video — meals, recipes, add-to-cart mid-scroll — inside retailer storefronts, in early pilot with brands like Hellmann's, Rachael Ray Nutrish and Siete Foods from its 9,000+ brand partners. Coverage filed it as grocery's TikTok clone. The context that matters: more than 60% of US retail media spend is sponsored search, which only exists when a shopper types a query, and that behavior is moving into AI assistants. A feed is ad inventory that doesn't depend on the search bar; instead of harvesting intent a shopper announces, it tries to start some. The catch is that a grocery app now has to earn scroll time against TikTok itself, and brand clips for mayonnaise walk into that fight with a media kit. Instacart's own roadmap adds creator and organic content later this year because it knows this. If you're a brand in the pilot, measure baskets the feed started, not baskets it claimed: incrementality against a holdout, the share of feed-attributed purchases from households that already bought you, and your own scorecard, since the retailer grading the results also built the feed.",
  },
  {
    slug: "geo-chatgpt-sources-split-by-engine",
    title: "ChatGPT picks its sources somewhere other than Google",
    date: "Jul 13, 2026",
    readTime: "5 min",
    excerpt:
      "New CiteLens research: Google's AI Mode and Perplexity pull roughly 90% of their citations from Google's top-10 results. ChatGPT pulls about 30%. The GEO program you're funding is really two different games — and if your AI-visibility report is a single blended number, you can't tell which one you're losing.",
    tag: "GEO",
    color: "from-cyan-600 to-teal-500",
    tldr: "New CiteLens research finds Google's AI Mode and Perplexity draw roughly nine in ten citations from Google's top-10 results, while ChatGPT draws about three in ten; Ahrefs' crawl found only 12% of AI-cited URLs rank in Google's top 10 for the matching prompt. Two weeks ago I wrote that the pages AI cites and the pages Google ranks stopped being the same list. The new data splits the gap by engine, and the split changes the budget. Gemini and Perplexity are still won with classic SEO: rank, and they follow. ChatGPT is a different job: find the sources it pulls into your category's answers and earn a presence in them. Three moves: make your GEO vendor report by engine instead of a blended score, ask your sellers which assistant your buyers mention (in most B2B categories the answer is ChatGPT, the engine SEO buys you least access to), and run ten money queries per engine yourself before renewing any tooling. A single AI-visibility number averages two unrelated games and hides losing one of them.",
  },
  {
    slug: "delivery-apps-retail-media-third-pole",
    title: "There's a $4 billion retail media network hiding in your food-delivery app",
    date: "Jul 12, 2026",
    readTime: "5 min",
    excerpt:
      "Retail media gets tracked as an Amazon-and-Walmart story, and the two still take about 89% of new spend. Underneath, a third network formed: DoorDash, Uber Eats and Instacart now run past $4 billion in combined ad revenue, and on June 4 DoorDash merged DoorDash, Wolt and Deliveroo into one global platform with 400,000 advertisers. What they sell is a fresher signal than a loyalty card — what you want in the next thirty minutes, and who carried it to your door. If you buy retail media, you're probably underweight it.",
    tag: "Future of Ads",
    color: "from-rose-600 to-amber-500",
    tldr: "Retail media is still tracked as an Amazon-and-Walmart story — the two take roughly 89% of new spend in 2026. But a third network formed underneath: DoorDash, Uber Eats and Instacart now run past $4 billion in combined ad revenue, and on June 4 DoorDash stitched DoorDash, Wolt and Deliveroo into one Global Commerce Media Platform with 400,000 advertisers, Symbiosys offsite reach, and a LiveRamp clean room. The delivery apps sell a different signal than grocery retail media: what you want in the next thirty minutes, tied to who delivered it to your door, and it doesn't go stale the way purchase history does. If you buy retail media, add the delivery networks as their own line and grade them on incremental reach and the occasions grocery can't see, not against Amazon's scale. If you sell it, get honest about whether your data's edge is the shelf or the moment.",
  },
  {
    slug: "ai-labs-pe-deployment-guaranteed-return",
    title: "The AI labs are paying private equity a guaranteed 17.5% to sell for them",
    date: "Jul 12, 2026",
    readTime: "6 min",
    excerpt:
      "AWS put $1 billion into forward-deployed engineers on June 30; Microsoft stood up a $2.5 billion, 6,000-person Frontier unit two days later. The part that got missed sits back in May, when OpenAI and Anthropic built their deployment arms as private-equity joint ventures — and OpenAI guaranteed its PE backers a 17.5% annual return over five years. You don't guarantee a return on a services business. That floor is what you pay to rent a channel that can order thousands of portfolio companies to adopt from the top.",
    tag: "Sales",
    color: "from-indigo-700 to-blue-600",
    tldr: "Five of the biggest names in AI now run the same play: not selling a model, selling the people who install it. AWS put $1 billion into a forward-deployed engineering org on June 30; Microsoft stood up a $2.5 billion, 6,000-person Frontier unit two days later. The part that got missed is from May 4, when OpenAI and Anthropic built their deployment arms as private-equity joint ventures — OpenAI's $10B Deployment Company (TPG, Brookfield, Advent, Bain) and Anthropic's $1.5B venture with Blackstone, Hellman & Friedman and Goldman. OpenAI guaranteed its PE backers a 17.5% annual return over five years, which reads like a fixed-income product, not a services partnership. You don't guarantee a return on consulting revenue. The floor buys distribution: PE owners can order thousands of portfolio companies to adopt from the top, and the embedded team makes the model hard to rip out. If you sell AI into the enterprise, your next competitive deal may arrive as a board mandate with engineers already on-site — get to the same altitude and own a specific outcome. If you buy, take the help but put portability and ownership in writing.",
  },
  {
    slug: "expansion-is-the-whole-business-ai-gtm",
    title: "I closed my best deal four times",
    date: "Jul 11, 2026",
    readTime: "6 min",
    excerpt:
      "The whole AI-sales boom points at landing the customer — AI SDRs, PLG, ChatGPT ads, pilot-to-production. But once pricing moved to usage and outcomes, the vendor only earns when the deployment works in production, which puts the real money in the eighteen months after signing. The labs are hiring go-to-market faster than SaaS and staffing most of it for acquisition. The role that grows a live account is the one the new math rewards, and almost nobody's building it.",
    tag: "Sales",
    color: "from-emerald-600 to-teal-600",
    tldr: "The entire AI-sales gold rush is pointed at landing customers: AI SDRs, PLG funnels, GEO, ChatGPT ads, pilot-to-production. But usage and outcome pricing changed the math. A vendor only makes money once the customer succeeds in production, which means expansion — more seats, more use cases, deeper into the org — is the business, not the encore. The labs are hiring go-to-market faster than SaaS is, and staffing most of it for acquisition. The account leader who grows a live deployment is the role the new pricing rewards, and it's barely written about because it doesn't demo. If you run GTM, build the expansion motion before your next five SDRs. If you sell, the durable career is the book you grow, not the logos you land.",
  },
  {
    slug: "six-reinventions-same-sales-job-dies",
    title: "Six technology shifts later, the same sales job keeps dying",
    date: "Jul 11, 2026",
    readTime: "7 min",
    excerpt:
      "Broadcast, digital, social, programmatic, data, AI — I've carried a quota through all six. Up close they look like six different disruptions. They're one pattern on repeat: every shift automates the seller who runs the manual mechanic and pays a premium to the one who can turn a capability nobody understands yet into an approved budget. That pattern tells you which sales jobs AI takes next, and which it makes more valuable.",
    tag: "Sales",
    color: "from-amber-600 to-orange-500",
    tldr: "Broadcast to digital to social to programmatic to data to AI — I've carried a quota through all six shifts. Up close they look like six separate disruptions; they're the same one on repeat. Each wave automates the seller who runs a manual mechanic — the media buy, the campaign build, the list, the report — and pays more for the seller who can take a capability nobody understands yet, build the category in the buyer's head, and get a novel budget approved. The pattern predicts which sales jobs AI absorbs next: the executional ones. The safe ground is the ambiguous, trust-heavy, category-creating work, same as it's been every time. Point your career and your hiring there.",
  },
  {
    slug: "meta-addiction-machine-nobody-told-the-teens",
    title: "Meta Built the Perfect Addiction Machine. Nobody Told the Teens.",
    date: "Jul 10, 2026",
    readTime: "4 min",
    excerpt:
      "Brussels just ruled Facebook and Instagram are engineered to be addictive — as the exact users they're built to hook keep walking out the door. A note on what that means if your business runs on time-on-app.",
    tag: "Future of Ads",
    color: "from-blue-600 to-indigo-600",
    tldr: "The European Commission's preliminary findings say Facebook and Instagram are engineered for compulsion: infinite scroll, autoplay, notifications tuned to pull users back, with a potential fine near 6% of global revenue, around $12 billion. The strange part is the timing. Pew has U.S. teens on Facebook down from 71% in 2014-15 to 32% in 2024, only 3% report being on it \"almost constantly,\" and Meta's daily active users declined in Q1 for the first time in company history. GWI shows daily social use falling fastest among 16-to-24-year-olds, who give TikTok about 76 minutes a day instead. Brussels is locking down an attention machine its target users are already leaving. If your product, pitch, or quota leans on time-on-app, treat the case as a lab result: engagement is a rented asset, and the most engineered feed on the planet still lost the room.",
  },
  {
    slug: "microsoft-frontier-company-deployment-is-the-product",
    title: "Microsoft spent $2.5 billion to put its own engineers inside your customer's building.",
    date: "Jul 8, 2026",
    readTime: "6 min",
    excerpt:
      "Microsoft launched Frontier Company on July 2 — a $2.5 billion unit staffing 6,000 engineers to embed inside customers and drag their AI from pilot to production. Most coverage called it a rescue squad for the 95% of AI pilots that go nowhere. The seller's read is that the biggest platform on earth just priced where the money in AI really sits, and started competing with the consultancies it calls partners.",
    tag: "AI",
    color: "from-blue-700 to-cyan-600",
    tldr: "On July 2 Microsoft launched Frontier Company, a unit with a $2.5 billion budget and 6,000 engineers and industry specialists whose job is to embed inside a customer and carry its AI from slide deck to production. Microsoft calls the practice forward-deployed engineering, the model Palantir made famous. Most coverage framed it as a rescue squad for the roughly 95% of enterprise gen-AI pilots that MIT's NANDA study found deliver no measurable profit-and-loss impact. The seller's read is different: the largest software vendor on earth just put a price on the work of making AI run inside a business, decided that work is where the durable revenue is, and started competing with the very consultancies — Accenture, PwC, EY, KPMG, Capgemini — it lists as partners. If you sell AI software or services, your deal now sits next to Microsoft's own embedded engineers, so own the specific workflow and outcome its generalists won't go deep on. If you buy, you can rent that muscle, but make portability a written requirement and make sure you own the runbook the day the team rotates off.",
  },
  {
    slug: "claude-sonnet-5-tokenizer-cost-per-task",
    title: "Anthropic cut its agent price. Then the new tokenizer took part of it back.",
    date: "Jul 8, 2026",
    readTime: "5 min",
    excerpt:
      "Anthropic shipped Claude Sonnet 5 on June 30 at an introductory $2/$10 per million tokens, pitched as near-Opus performance at a third of the cost. The number almost no one caught: a new tokenizer maps the same input to as much as 1.35x more tokens, and Anthropic priced the switch to be \"roughly cost-neutral.\" If you buy AI by the token, your real number is cost per finished task, not the sticker.",
    tag: "Sales",
    color: "from-orange-600 to-amber-500",
    tldr: "On June 30 Anthropic shipped Claude Sonnet 5, its most agentic mid-tier model, at an introductory $2 per million input tokens and $10 per million output, holding through August 31 before stepping up to $3 and $15. Anthropic says it runs close to Opus 4.8 at about a third of the cost, and the coverage read it as an agent price war opening. Less covered: Sonnet 5 ships with a new tokenizer that maps the same input to roughly 1.0 to 1.35 times more tokens, and Anthropic set the intro price specifically to make the switch, in its words, roughly cost-neutral. A per-token price that fell while tokens-per-task rose means your real number is cost per finished task, not the sticker on the pricing page. If you resell agentic workflows, model the new tokenizer against your real traffic before you celebrate the cut. If you buy, evaluate on cost per completed task run through your own workload end to end, because that is the only figure a tokenizer change can't quietly move.",
  },
  {
    slug: "retail-media-passed-tv-sponsored-search-exposure",
    title: "Retail media just passed TV. Sixty percent of it rides on an ad shoppers are starting to skip.",
    date: "Jul 8, 2026",
    readTime: "6 min",
    excerpt:
      "Commerce media just passed TV and US retail media is tracking toward $70 billion in 2026. But more than 60% of that spend rides on sponsored search — promoted listings that only exist if a shopper uses the retailer's search bar. Shoppers are moving that behavior into AI assistants. The growth story and the disruption story are the same companies.",
    tag: "Future of Ads",
    color: "from-fuchsia-600 to-orange-500",
    tldr: "Commerce media overtook television in global ad spend for the first time, and US retail media is tracking toward roughly $70 billion in 2026 by eMarketer's forecast. The engine under that record is sponsored search, the promoted product listings that account for more than 60% of US retail media spend, and it works only as long as a shopper uses the retailer's search bar. They're starting not to: more than 70% of shoppers now fold an AI assistant into some part of buying, and long, conversational queries are climbing. The growth story and the disruption story are the same companies. If you sell retail media, do the exposure math on your own book and build the ad product for the agent-mediated buy before your search line softens. If you buy it, stop treating on-site search as the whole funnel and start measuring whether an AI assistant surfaces and recommends your product at all.",
  },
  {
    slug: "fable-5-returns-government-preclearance-model-continuity",
    title: "Anthropic's best model came back. Government pre-clearance came with it.",
    date: "Jul 1, 2026",
    readTime: "6 min",
    excerpt:
      "The US lifted its export controls on Anthropic's Fable 5 and Mythos 5, and the model that went dark for nearly three weeks is back online. But in the same two weeks, OpenAI released GPT-5.6 Sol only to government-vetted partners first. Sign-off before a frontier model ships is becoming the norm — and multi-cloud won't protect you from it.",
    tag: "AI",
    color: "from-slate-700 to-blue-600",
    tldr: "On June 30 the US Commerce Department lifted the export controls that had taken Anthropic's Fable 5 and Mythos 5 dark for nearly three weeks, and Fable 5 began rolling back out worldwide on July 1 under a capped quota through July 7. But in the same fortnight, OpenAI previewed GPT-5.6 Sol only to government-vetted \"trusted partners\" at Washington's request. Government pre-clearance of frontier models is becoming standard, built on the decades-old \"deemed export\" rule that took Fable 5 down globally because a control aimed at foreign nationals became an outage for everyone. Multi-cloud doesn't help — the restriction attaches to the model, so AWS, Google Cloud, and Foundry all went dark together. If you sell AI on a frontier model, your buyer inherited its regulatory exposure: build a real fallback, keep workflows portable, and raise it before the security review does. If you buy, add regulatory interruption to your evaluation and ask where the model is cleared and how fast it was restored last time.",
  },
  {
    slug: "starbucks-green-apron-creators-employee-influencers",
    title: "Starbucks is paying baristas to make TikToks. The strategy was sitting in plain sight for a decade.",
    date: "Jun 30, 2026",
    readTime: "6 min",
    excerpt:
      "At Cannes, Starbucks said it's the first brand to pilot a custom Creator Network inside TikTok, paying select baristas through ad revenue sharing to make the content many of them were already posting for free. It's overdue and it's smart — and it isn't new: Macy's built Style Crew on employee commissions in 2018, and Walmart's Spotlight has paid associates since 2020. Why the tactic stayed rare says more than the launch does.",
    tag: "Brands",
    color: "from-green-700 to-emerald-600",
    tldr: "At Cannes Lions, Starbucks said it will be the first brand to pilot a custom Creator Network inside TikTok, sending creative briefs to select baristas from its Green Apron Creators program and paying them through ad revenue sharing. Its employees already post about the job at three times the rate of peers at similar chains, so Starbucks is paying for behavior it was getting free. Overdue, yes, but not unprecedented: Macy's built Style Crew on employee sales commissions in 2018, and Walmart's Spotlight has paid associates since 2020. The tactic stayed rare because paying employees to post sets off real wage-and-hour, FTC-disclosure, and audience-ownership problems, and because marketing doesn't run the frontline. What changed is that Gen Z posts natively and TikTok is now building the rails. Where it heads: the employee-creator becomes a defined, paid role, comp blends wage and revenue share, and the following a barista builds is portable — brands are about to learn they're renting the creators they employ.",
  },
  {
    slug: "albertsons-pg-branded-entertainment-retail-media",
    title: "Albertsons made a scripted drama from its shopper data. P&G has been here since the 1930s.",
    date: "Jun 30, 2026",
    readTime: "5 min",
    excerpt:
      "Albertsons Media Collective and P&G premiered \"Rico's Tacos,\" a scripted microdrama built from Albertsons' loyalty-card data, at Cannes this month. A retail media network that spent years selling placements graded to the basket just moved into producing the content itself — and brought the one thing branded entertainment always lacked: a line from the show to a receipt. The catch is that the company telling you it worked is the company that made it.",
    tag: "Future of Ads",
    color: "from-amber-500 to-rose-600",
    tldr: "Albertsons Media Collective and P&G launched \"Rico's Tacos,\" a scripted \"Minivela\" microdrama built from Albertsons' shopper data, premiering June 23 across YouTube, social, and in-store screens and running through August, with an episode shown at Cannes. P&G invented the soap opera in the 1930s to sell laundry soap; now it's co-producing scripted drama again, with loyalty-card data writing the brief. The move takes retail media up-funnel into brand-building and brings the measurement branded content never had — a tie to actual purchases. But putting the brand inside the story muddies attribution, and the retailer makes the show, sells the placement, and grades the result. If you sell retail media or build for RMNs, the category is adding production to its skill set. If you're a brand, you can finally measure branded entertainment to a receipt, but the grader made the show — so bring your own scorecard.",
  },
  {
    slug: "kroger-tiktok-retail-media-data-offplatform",
    title: "Kroger is renting its shoppers to TikTok. Walmart spent a year making sure it never has to.",
    date: "Jun 30, 2026",
    readTime: "5 min",
    excerpt:
      "Kroger Precision Marketing launched self-service advertising with TikTok, letting brands target Kroger's purchase-data audiences inside TikTok's own platform. The same month, at the same Cannes festival, Walmart kept buying its own stack so its data and screens stay in-house. Two retail media networks, opposite bets on the same question: push your first-party data out to where the shoppers are, or keep it behind your own walls.",
    tag: "MadTech",
    color: "from-sky-600 to-violet-600",
    tldr: "Kroger Precision Marketing launched self-service advertising with TikTok, letting brands target Kroger's loyalty-based purchase audiences inside TikTok's ad platform. Same month, same Cannes festival, Walmart kept buying its own stack — VIZIO, Vibe — so its data, inventory, and measurement stay in-house. Two retail media networks made opposite bets on where a retailer's data is worth the most: pointed at the biggest outside audience, or kept behind its own walls. Kroger's move buys reach it can't build alone, and risks teaching the market to value the data over Kroger's owned media while TikTok learns which of its audiences convert. If you sell retail media, audience licensing is a real revenue line, but know whether you're selling reach or renting out your moat. If you buy, Kroger data inside TikTok is good targeting — just don't let TikTok be the only scorecard.",
  },
  {
    slug: "geo-citations-google-rankings-diverge",
    title: "The pages AI cites and the pages Google ranks are barely the same list anymore.",
    date: "Jun 29, 2026",
    readTime: "5 min",
    excerpt:
      "New 5W research, built on Brandlight data, says the overlap between the top Google results and the sources AI assistants cite has fallen from about 70% to under 20%. Ahrefs found roughly 28% of ChatGPT's most-cited pages don't rank on Google at all. The SEO you already paid for no longer buys a seat in the AI answer.",
    tag: "GEO",
    color: "from-emerald-500 to-cyan-600",
    tldr: "New 5W research, drawing on Brandlight data, says the overlap between the top Google results and the sources AI assistants cite has fallen from about 70% to under 20%, and Ahrefs found roughly 28% of ChatGPT's most-cited pages have no organic Google ranking at all. Search and AI answers are pulling from two increasingly different lists, and Google's own new guidance says most GEO 'hacks' don't work. If you market a brand, stop grading GEO on the SEO scoreboard: track whether the assistants cite and recommend you, find the sources they pull from, and get your brand into those. If you sell GEO tooling, a ranking dashboard isn't the product anymore.",
  },
  {
    slug: "google-conversational-ads-keyword-casualty",
    title: "Google is turning search ads into a conversation. The keyword is the casualty.",
    date: "Jun 29, 2026",
    readTime: "5 min",
    excerpt:
      "At Google Marketing Live, Google showed Gemini-powered ad formats that run inside AI Mode and conversational Search, not as a row of links. The keyword-and-intent model that priced search for twenty years stops describing what's being bought once the query becomes a dialogue — and targeting, control, and attribution all go soft with it.",
    tag: "Future of Ads",
    color: "from-blue-600 to-violet-600",
    tldr: "At Google Marketing Live 2026, Google unveiled Gemini-powered conversational ad formats inside AI Mode and Search, as AI Mode moves from an opt-in experiment to the way Search works. Search ads were sold against keywords for twenty years; a conversation has no keyword, so targeting, placement control, and clean keyword-to-conversion attribution all weaken at once. If you buy media, get your reporting ready for a conversion you can't trace to a query, and treat your free presence in the AI answer as the other half of the buy. If you sell search tooling, 'we optimize keywords' ages fast in a channel leaving keywords behind.",
  },
  {
    slug: "fox-roku-ctv-operating-system",
    title: "Fox didn't buy a streaming app. It bought the operating system inside 100 million TVs.",
    date: "Jun 29, 2026",
    readTime: "5 min",
    excerpt:
      "Fox agreed to buy Roku for about $22 billion, and most coverage filed it as a content company grabbing a streaming service. What changed hands is the operating system on the TV itself — the home screen, the default, the data on 100M+ households. The screen is the scarce thing, and Fox just went from tenant to landlord.",
    tag: "MadTech",
    color: "from-slate-700 to-rose-600",
    tldr: "Fox agreed this month to acquire Roku for about $22 billion ($160/share in cash and stock). The story isn't a content company adding a streaming channel — Roku is the operating system on the TV, the home screen and default layer with a first-party tie to 100M+ households. Whoever owns the screen sets the terms for every app and advertiser downstream. It's the same control Walmart is assembling from the retail side with VIZIO and Vibe, reached from the content side. If you buy CTV, take the reach but insist on independent measurement; if you sell around CTV, own what the screen owner can't replicate in-house.",
  },
  {
    slug: "spacex-cursor-neutrality-is-not-a-contract",
    title: "Cursor was the neutral choice. The company that just bought it owns a model.",
    date: "Jun 25, 2026",
    readTime: "5 min",
    excerpt:
      "SpaceX is buying Anysphere, the company behind Cursor, for about $60 billion in stock. A huge share of developers standardized on Cursor for one reason now in question: it was neutral, routing to Claude, GPT, or Gemini without caring which you used. The buyer owns Grok — and the lesson for anyone who sells or buys AI is that “neutral” and “independent” are marketing positions, not contracts.",
    tag: "Macro",
    color: "from-slate-800 to-orange-600",
    tldr: "SpaceX agreed June 16 to acquire Anysphere, maker of the AI coding tool Cursor, for roughly $60 billion in all-stock — four days after SpaceX’s IPO, with the deal expected to close in Q3. Cursor’s whole appeal was neutrality: it routed to Claude, GPT, Gemini, or its own model and didn’t take sides, a promise that carried it from about $100M to over $4B in ARR in eighteen months. But SpaceX merged with xAI and its Grok models in February, hasn’t committed to keeping Cursor model-agnostic, and has every reason to make Grok the default. For sellers, neutrality is a strong wedge and a weak moat — it wins deals against the platforms and makes you their acquisition target, so build durable value underneath it. For buyers, ask not whether a tool is model-agnostic today but what happens to you if it’s bought by someone with a model to push, and keep an exit.",
  },
  {
    slug: "qualcomm-modular-lock-in-software-moat",
    title: "Qualcomm paid $4 billion to attack a software moat. Yours is next.",
    date: "Jun 25, 2026",
    readTime: "5 min",
    excerpt:
      "Qualcomm is paying about $3.92 billion in stock for Modular, a startup that makes no chips — only software that runs an AI model across any vendor's silicon without a rewrite. The point of the deal is to break the software lock-in that's kept Nvidia on top. The lesson for anyone who sells: lock-in is now an asset someone will pay billions to dismantle, and you'd better know whether your moat is switching costs or real value.",
    tag: "Macro",
    color: "from-indigo-600 to-cyan-600",
    tldr: "Qualcomm announced an all-stock deal worth roughly $3.92 billion for Modular, whose MAX platform and Mojo language let developers write an AI model once and run it on Nvidia, AMD, Apple, or Qualcomm chips with no CUDA and no rewrite. The target isn't a chip; it's Nvidia's software moat — the switching cost that keeps developers from leaving. For sellers, the deal is a warning: lock-in and value look identical on a renewal report, but only one survives a competitor offering your customer a free way out. Find out which moat you have before someone runs the test for you, and spend the next year making the product worth keeping on its own merits.",
  },
  {
    slug: "walmart-vibe-self-serve-tv-advertising",
    title: "Walmart bought the self-serve button for TV. It's aimed at the advertisers TV always priced out.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    excerpt:
      "Walmart is acquiring Vibe.co, a self-serve connected-TV platform with 10,000+ mostly-SMB advertisers that lets you buy streaming TV like a paid-social ad. Folded into Walmart Connect, with VIZIO as the screen and Walmart's purchase data as the scoreboard, Walmart now owns the full TV-ad stack and is pointing it at the long tail TV never served.",
    tag: "Future of Ads",
    color: "from-violet-600 to-fuchsia-600",
    tldr: "Walmart is acquiring Vibe.co, a self-serve connected-TV platform with 10,000+ mostly-SMB advertisers that lets you buy streaming TV like a paid-social ad — fast, measurable, no agency. Folded into Walmart Connect, with VIZIO as the screen and Walmart's purchase data as the scoreboard, Walmart now owns the full TV-ad stack and is pointing it at the long tail TV never served, including its own marketplace sellers. For sellers, self-serve plus closed-loop-to-sales is the new bar. For advertisers, you finally get measurable TV without a six-figure minimum — bought inside a system where Walmart owns the screen, the tool, and the scorecard.",
  },
  {
    slug: "walmart-sparky-agentic-commerce-customer",
    title: "Walmart let ChatGPT and Gemini sell its products. It refused to let them own the customer.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    excerpt:
      "OpenAI's Instant Checkout converted about three times worse than Walmart.com, so Walmart pulled it and embedded its own Sparky agent inside ChatGPT and Gemini — and conversion climbed back to ~70% of its site rate. The lesson: take the platforms' reach, keep the data, identity, and checkout. Amazon stays walled; the AI platforms want the transaction; Walmart found a third path other brands can copy.",
    tag: "Future of Ads",
    color: "from-blue-600 to-cyan-500",
    tldr: "OpenAI's Instant Checkout promised native in-chat buying across Walmart, Shopify, and Etsy, then converted about three times worse than Walmart.com. Walmart pulled out and embedded its own Sparky agent inside ChatGPT and Gemini instead — and conversion climbed back to roughly 70% of its site rate. Walmart takes the platforms' reach while keeping its data, identity, and checkout. Amazon stays a walled garden; the AI platforms want to own the transaction; Walmart found a third path. If you sell commerce or retail-media tech, your pitch now has to answer who owns the customer after the agent. If you buy media, the shelf is becoming the agent's shortlist, and a new gatekeeper is forming.",
  },
  {
    slug: "ai-ipo-clock-price-it-into-contracts",
    title: "OpenAI and Anthropic are going public. Your AI contract should price that in.",
    date: "Jun 23, 2026",
    readTime: "5 min",
    excerpt:
      "Anthropic filed a confidential S-1; OpenAI followed, targeting a September debut around $730–850B. When your model vendor becomes a public company, its incentives change — firmer pricing, faster deprecation, tiered support. Negotiate continuity and price protection now, while a pre-IPO vendor still wants your logo.",
    tag: "Macro",
    color: "from-slate-700 to-emerald-600",
    tldr: "Anthropic filed a confidential S-1 in early June; OpenAI followed, targeting a September debut around $730–850B; SpaceX had just IPO'd near $2 trillion. When your model vendor becomes a public company, its incentives change — revenue discipline, firmer pricing, faster deprecation, tiered support. If you buy AI, negotiate continuity and price protection now, while a pre-IPO vendor still wants your logo. If you sell AI built on these models, you inherited their IPO timeline, so build for portability and bring the continuity story to customers before a repricing does it for you.",
  },
  {
    slug: "ai-sdr-boom-revolving-door-churn",
    title: "The AI SDR boom is real. Retention is the test it has to pass.",
    date: "Jun 18, 2026",
    readTime: "5 min",
    excerpt:
      "AI SDR tools are a multibillion-dollar category growing fast — and wrestling with retention, with some vendors losing a large share of buyers within a year. When teams over-automate prospecting, reply rates can slip and raw volume hides it. The lesson for anyone selling AI: win on converted pipeline, not activity, and the renewal takes care of itself.",
    tag: "Sales",
    color: "from-amber-600 to-rose-600",
    tldr: "AI SDR is a real, fast-growing category, but several vendors are wrestling with high first-year churn — largely because the tools get demoed on activity and judged on outcomes. When prospecting gets over-automated, reply rates can drop and raw volume masks it. The takeaway cuts both ways: if you buy one, write pilot criteria around converted pipeline, not meetings booked; if you sell one, anchor success on outcomes, not activity — that's what earns the renewal.",
  },
  {
    slug: "ai-labs-hiring-salespeople-which-sales-jobs-last",
    title: "The companies with the best AI on earth are hiring salespeople faster than SaaS is.",
    date: "Jun 17, 2026",
    readTime: "5 min",
    excerpt:
      "At OpenAI and Anthropic, go-to-market is the single largest category of open roles, about one in five, ahead of research and engineering. The firms most able to automate their own sales are staffing it harder than anyone. The shape of the deal explains which sales jobs are safe and which their products will absorb.",
    tag: "Sales",
    color: "from-sky-600 to-emerald-500",
    tldr: "At OpenAI and Anthropic, go-to-market is the single largest hiring category: roughly one in five open roles, more than any other department, and a higher share than a typical SaaS company runs. The firms most able to automate their own sales are staffing it harder than anyone. The shape of the deal explains which sales jobs are safe: once a purchase involves multiple stakeholders, a novel budget, and procurement, the work goes back to humans. Aim your career at the ambiguous, trust-heavy, category-creating motions and away from the transactional ones.",
  },
  {
    slug: "anthropic-model-pulled-vendor-continuity-risk",
    title: "The government pulled the best AI model on earth four days after launch. What's your fallback?",
    date: "Jun 15, 2026",
    readTime: "6 min",
    excerpt:
      "Anthropic shipped Fable 5 on June 9, its most capable model ever. By June 13 the Commerce Department had ordered it dark for every foreign national on the planet, and Anthropic shut the whole thing off to comply. If a frontier model can vanish in 96 hours by government order, model continuity just became a procurement category — and your buyer is about to start asking what happens when the model goes away.",
    tag: "AI",
    color: "from-rose-600 to-violet-600",
    tldr: "Anthropic launched Fable 5 on June 9 as the most capable model it had ever shipped, then suspended all access to it and Mythos 5 by June 13 to comply with a US directive barring foreign-national access. A best-in-class model went dark in four days for reasons outside the vendor's control. Model continuity is now a real risk category buyers will price. If you sell AI, answer the 'what if my model disappears' question before the security review asks it: build model-agnostic, keep a fallback path, and make portability a feature instead of a footnote.",
  },
  {
    slug: "openai-oracle-credits-cloud-commit",
    title: "OpenAI now takes Oracle credits. Your AI deal is competing with money that's already spent.",
    date: "Jun 12, 2026",
    readTime: "5 min",
    excerpt:
      "OpenAI's models can now be paid for with Oracle Universal Credits, and the announcement ends by sending buyers to their Oracle rep. Cloud commitments crossed $500 billion last year, and the path of least resistance for AI budget is money the CFO already spent. The deal is moving inside the commit, and sellers who can't transact there are about to feel it.",
    tag: "Sales",
    color: "from-red-600 to-orange-500",
    tldr: "OpenAI announced June 10 that its models and Codex can be bought with Oracle Universal Credits, the same day Oracle reported $638B in remaining performance obligations. Enterprise cloud commitments crossed $500B last year, and AI is increasingly bought by drawing down that pre-committed spend rather than through net-new deals. If your AI product can't be transacted inside your buyer's cloud commit, you're the expensive option at any price. Add one discovery question now: where does the money for this live, and which commit does it sit inside?",
  },
  {
    slug: "where-the-boomers-went",
    title: "The Boomers cut the cord too, and most media plans missed it",
    date: "Jun 10, 2026",
    readTime: "3 min",
    excerpt:
      "For three years the cord-cutting story has been about the young walking out on cable. The 50-plus crowd quietly did the same thing while everyone watched the kids. They went to FAST, and a lot of media plans haven't caught up.",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "The cord-cutting narrative says young viewers left cable for streaming and Boomers stayed loyal to linear. The Boomers left too. They went to FAST. Most media plans still treat the 50-plus audience as the loyal remainder, and being wrong about your most ad-tolerant audience is expensive.",
  },
  {
    slug: "private-equity-software-rollups",
    title: "When private equity buys your software vendor, the roadmap goes with it.",
    date: "Jun 10, 2026",
    readTime: "7 min",
    excerpt:
      "Thoma Bravo closed its ~$2B Verint deal and wrapped PROS, while Vista and Silver Lake circle the same profitable, sticky software now trading cheap after this year's SaaSpocalypse. When private equity buys your vendor, the roadmap you were promised gives way to margin math. A tool in your stack will likely change hands within 18 months. This is how buyers and sellers get ahead of the call.",
    tag: "Macro",
    color: "from-emerald-600 to-teal-600",
    tldr: "Thoma Bravo just closed Verint (~$2B) and PROS, and Vista and Silver Lake are circling profitable, sticky software trading cheap after the SaaSpocalypse. When PE buys your vendor, the roadmap you were promised gives way to margin, price increases, and portfolio cross-sell. Odds are a tool in your stack changes hands within 18 months. Buyers: lock support and roadmap commitments in writing at your next renewal. Sellers inside an acquired company: call your accounts first and re-earn the relationship before they draft their exit.",
  },
  {
    slug: "end-of-per-seat-pricing",
    title: "Per-seat software is dying. Your renewal is where you'll feel it first.",
    date: "Jun 9, 2026",
    readTime: "7 min",
    excerpt:
      "Roughly $285B in software market value vanished in February once investors did the math on AI agents that don't pay for seats. Gartner expects 40% of enterprise software spend to move to usage or outcome pricing by 2030. Your renewal is about to turn from a headcount reconciliation into an outcome audit, and the seller who can prove value wins the re-rate.",
    tag: "Sales",
    color: "from-violet-600 to-blue-600",
    tldr: "About $285B in software market cap evaporated in February (the 'SaaSpocalypse') as investors repriced SaaS for a world where AI agents don't buy seats. Gartner sees 40% of enterprise spend moving to usage or outcome pricing by 2030. The renewal conversation shifts from 'how many users' to 'what did this produce.' Start instrumenting the one outcome your buyer's CFO cares about now, not in Q4.",
  },
  {
    slug: "agentic-commerce-shopping-agents",
    title: "Your next big customer is a shopping agent that doesn't care about your brand.",
    date: "Jun 9, 2026",
    readTime: "6 min",
    excerpt:
      "By 2030, NielsenIQ expects about half of online shoppers to hand routine buying to an AI agent, and pegs the U.S. agentic-commerce prize near a trillion dollars. Google's cart now follows shoppers across Search, Gemini, YouTube and Gmail, and the agents inside ChatGPT and Amazon are good enough to research a product and just buy it. Those agents choose on price, availability, and clean product data, not your campaign, and the work this year is making your product legible to a machine without hollowing out the brand that still wins humans.",
    tag: "Future of Ads",
    color: "from-amber-500 to-orange-600",
    tldr: "By 2030, NielsenIQ expects roughly half of online shoppers to hand routine buying to an AI agent driving about a quarter of their spend, a near-$1T U.S. market. Agents pick on price, availability, and structured product data, not brand equity, and can form their own supplier preferences. Get your canonical product data clean and synced to every retailer API, treat 'is my product legible to an agent' as a board-level metric, and plan demand for two buyers at once: the human you win with story and the agent you win with structure.",
  },
  {
    slug: "financial-services-vertical-ai",
    title: "Banks are done piloting AI. What they're buying now is boring on purpose.",
    date: "Jun 9, 2026",
    readTime: "7 min",
    excerpt:
      "Banks moved from AI pilots to production fleets of agents this year, and Wolters Kluwer says 44% of finance teams will use agentic AI in 2026, a 600%+ jump. The vendors winning regulated buyers ship immutable audit logs, SOC 2, and EU AI Act alignment as the baseline, whether or not their model demos best. If you sell into financial services, compliance is your product surface now.",
    tag: "AI",
    color: "from-blue-600 to-cyan-500",
    tldr: "Banks shifted from AI pilots to production agent fleets in underwriting, fraud, KYC, and reconciliation, with 44% of finance teams using agentic AI in 2026 (up 600%+). Vertical AI is commanding premium multiples because it ships with the guardrails a risk committee needs: SOC 2, PCI-DSS, EU AI Act alignment, immutable audit trails. The economic buyer moved from the line-of-business leader to the chief risk officer. Bring the governance answer to the first meeting, not the security review.",
  },
  {
    slug: "commerce-media-passed-tv-agents-buying",
    title: "Commerce media just passed TV. And the agents are taking the keyboard.",
    date: "Jun 1, 2026",
    readTime: "7 min",
    excerpt:
      "WPP says commerce media hit $178B in global ad revenue and overtook TV for the first time. At the same moment, Amazon and Walmart are moving the actual campaign work to the platform side — Amazon's Ads Agent is posting 18% lower CPMs, Walmart's Marty runs onboarding and campaigns for you. The channel just got too big to ignore and too automated to staff the old way. Here's the seller's read.",
    tag: "Future of Ads",
    color: "from-orange-500 to-rose-500",
    tldr: "Commerce media ($178B) just passed global TV ($171B), and retail media is the bulk of it. Simultaneously, Amazon and Walmart are pushing campaign mechanics onto platform-side agents — which guts the value of selling manual campaign management and rewards whoever owns strategy, first-party data, and measurement. If you sell into or around RMNs, reprice your value now.",
  },
  {
    slug: "microsoft-shadow-ai-agent-gatekeeper",
    title: "Microsoft just made “shadow AI” the new shadow IT. Your agent has a new gatekeeper.",
    date: "Jun 1, 2026",
    readTime: "6 min",
    excerpt:
      "Microsoft took Agent 365 generally available and pointed it straight at “shadow AI” — unmanaged agents running inside the enterprise. It can already detect Claude Code and other agents on a Windows machine and govern them across AWS and Google Cloud. If you sell AI agents, the person who can kill your deal just changed.",
    tag: "AI",
    color: "from-slate-600 to-blue-600",
    tldr: "Microsoft Agent 365 is GA, treating unmanaged AI agents as the new shadow IT — it discovers and governs agents (including Claude Code) across clouds at $15/user/month. For anyone selling AI agents into the enterprise, security and governance just became a gate on every deal. Bring the IT/security answer to the first meeting, not the security review.",
  },
  {
    slug: "ai-ipo-race-model-was-never-the-moat",
    title: "Two AI labs are about to go public. The model was never the moat.",
    date: "Jun 1, 2026",
    readTime: "7 min",
    excerpt:
      "OpenAI is targeting a September IPO, Anthropic is racing to follow in October, and the S-1s will force both into a kind of financial transparency the AI industry has never had to show. Benedict Evans just made the argument out loud: the model makers are sliding toward commodity margins, and the money is moving to whoever owns the workflow. If you sell software, that's the most important sentence you'll read this month.",
    tag: "Macro",
    color: "from-sky-600 to-indigo-600",
    tldr: "OpenAI (September) and Anthropic (October) are both racing to IPO, which forces the frontier labs into public-market transparency for the first time. Benedict Evans' thesis lands at the same moment: models trend toward commodity infrastructure, and value accrues to the application layer that owns distribution and workflow. For sellers, the takeaway is to stop selling the model and start selling the workflow it sits inside.",
  },
  {
    slug: "anthropic-900b-category-sale-is-over",
    title: "Anthropic just crossed $900B. The AI category sale is over.",
    date: "May 26, 2026",
    readTime: "7 min",
    excerpt:
      "Anthropic is reportedly closing a $30B round at a $900B+ valuation. PwC is certifying 30,000 professionals on Claude. The Big Four have placed their bets. The enterprise AI sale just changed: your buyers have stopped asking if AI is real and started asking whether they picked the right platform. That changes your job.",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic is closing a $30B round at $900B+, PwC is all-in on Claude, and the Big Four have made their platform bets. The category sale — creating urgency around AI being real — is over. The new conversation is about platform choice, switching costs, and whether your buyer backed the right horse. Your pitch needs to change.",
  },
  {
    slug: "oura-ipo-not-every-company-should-go-public",
    title: "Oura just filed to go public. The hardest test comes after the IPO.",
    date: "May 22, 2026",
    readTime: "7 min",
    excerpt:
      "Oura confidentially filed its S-1 yesterday — 5.5M rings sold, an $11B valuation, a category it invented. The harder challenge isn't the debut; it's the public-market gravity that reshapes how a hardware company has to operate after the bell.",
    tag: "Business",
    color: "from-amber-600 to-orange-500",
    tldr: "Oura confidentially filed its S-1 yesterday — 5.5M rings sold at an $11B valuation in a category it invented. The real test comes after the IPO: public-market gravity reshapes how a hardware company operates. Fitbit is the cautionary case study, and Google relaunched the Fitbit Air this month as a direct competitor.",
  },
  {
    slug: "chatgpt-ads-manager-sellers-read",
    title: "Two weeks later: OpenAI shipped the Ads Manager. The seller's read.",
    date: "May 21, 2026",
    readTime: "3 min",
    excerpt:
      "Two weeks ago OpenAI opened self-serve ChatGPT ads. Today the actual Ads Manager UI shipped, with Dentsu, Omnicom, Publicis, WPP, Adobe, Criteo, and StackAdapt wired in and a $2.5B 2026 revenue target. The May 6 piece covered the brand-side playbook. This one is the read for anyone running a sales org whose buyers are increasingly researching inside ChatGPT.",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "OpenAI's Ads Manager UI went live today with holdco integrations and a $2.5B target. For sales orgs, three things change: the discovery question, defensive brand-bidding inside ChatGPT becomes a real budget line, and SDR pre-call research has to include an LLM check.",
  },
  {
    slug: "fake-watches-brand-launches",
    title: "The fake watches were better — and that should terrify every brand",
    date: "May 20, 2026",
    readTime: "5 min",
    excerpt:
      "Justin Taylor's piece on The Landing Pad asks a simple question about the Swatch x Audemars Piguet teaser: when AI fills the white space between tease and reveal with better versions than you shipped, what does a product launch actually mean anymore?",
    tag: "Brands",
    color: "from-violet-600 to-purple-500",
    tldr: "AI-generated renders of the Swatch x AP collab circulated for weeks before the real product dropped — and the internet preferred the imagined version. The white space between tease and reveal isn't yours anymore. Brands that figure out how to make that a feature instead of a bug will define the next decade of launches.",
  },
  {
    slug: "publicis-liveramp-acquisition",
    title: "Publicis bought LiveRamp for $2.2B. The real story is who controls identity now.",
    date: "May 18, 2026",
    readTime: "7 min",
    excerpt:
      "Press release landed Tuesday: Publicis is paying $2.167B for LiveRamp — $38.50 a share, 29.8% premium, all cash. Most coverage treats it as another holdco land grab. The bigger second-order effect: Publicis just bought a connectivity layer of the open internet, and the question of who owns independent identity is suddenly live.",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "Publicis is paying $2.167B for LiveRamp — a 29.8% premium for the connectivity layer underneath modern programmatic. The bigger question it raises is about identity independence across the open internet, including how UID2 is governed. Brands have three things to do this week before close.",
  },
  {
    slug: "claude-mythos-zero-day-security",
    title: "Claude autonomously found a 17-year-old zero-day. Pen-testing as a service has 12 months.",
    date: "May 17, 2026",
    readTime: "8 min",
    excerpt:
      "Anthropic gave Amazon, Apple, Cisco, Microsoft, and CrowdStrike early access to an unreleased model called Mythos. In limited testing it autonomously found and exploited a 17-year-old remote code execution flaw in FreeBSD — a bug that two decades of human red teams missed. Nobody trained it for that. The capability is emergent, and the entire security buying motion is about to flip.",
    tag: "Security",
    color: "from-rose-600 to-orange-500",
    tldr: "Anthropic's unreleased Mythos model autonomously discovered a 17-year-old FreeBSD RCE that human red teams missed for two decades. It wasn't trained on vulnerability research — the capability is emergent. The pen-test market, the bug bounty model, and the entire security buying motion are about to change inside 12 months.",
  },
  {
    slug: "stanford-agentic-ai-productivity-gap",
    title: "Stanford: agentic AI delivers 71% productivity gains. 80% of enterprises will miss them.",
    date: "May 16, 2026",
    readTime: "8 min",
    excerpt:
      "Stanford's 2026 AI Index Report dropped, and most of the coverage missed the actual story: 71% median productivity gain for enterprises using agentic AI, 20% of enterprises actually using it, and 95% of generative AI deployments showing no ROI — with 77% of those failures traced to change management and data architecture, not the model. This is a management failure on a cloud-transition scale.",
    tag: "Enterprise AI",
    color: "from-indigo-600 to-blue-500",
    tldr: "Stanford's 2026 AI Index shows agentic AI delivering 71% median productivity gains where deployed, with only 20% of enterprises actually deploying it. 77% of failures trace to change management and data architecture, not the model. Hire a change management lead before you hire another AI engineer.",
  },
  {
    slug: "agentic-ai-stops-being-demo",
    title: "The week agentic AI stopped being a demo",
    date: "May 15, 2026",
    readTime: "8 min",
    excerpt:
      "On May 5, Anthropic put Claude agents into production at JPMorgan Chase, Goldman Sachs, Citi, AIG, and Visa. Not pilots — production. Salesforce Agentforce is now autonomously managing pipeline records without a human in the loop. The demo phase is over. Here's what that means for how you run a sales team.",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic's Wall Street agent deployments and Salesforce Agentforce mark a genuine inflection — from AI as tool to AI as autonomous workflow executor. The organizations that treat this month as the starting gun will look very different in 24 months from the ones still running readiness webinars.",
  },
  {
    slug: "chatgpt-ad-platform",
    title: "OpenAI just turned ChatGPT into an ad platform. Here's what brands need to do in the next 90 days.",
    date: "May 6, 2026",
    readTime: "9 min",
    excerpt:
      "On May 5, OpenAI dropped the $50K minimum, opened self-serve to every U.S. advertiser, and added CPC bidding. The ChatGPT pilot is already pulling $100M+ in annualized revenue with a $102B target by 2030. This isn't a test anymore — it's the fastest platform-to-ad-network transition in digital history.",
    tag: "Future of Ads",
    color: "from-emerald-500 to-cyan-500",
    tldr: "OpenAI has opened ChatGPT ads to all U.S. advertisers. Build your organic GEO foundation before running a single paid placement — visibility without credibility converts poorly.",
  },
  {
    slug: "geo-new-seo",
    title: "GEO is the new SEO — and most brands are already losing",
    date: "Apr 28, 2026",
    readTime: "6 min",
    excerpt:
      "I searched \"best CRM for mid-market\" in ChatGPT and Claude this morning. The same three vendors came up. None of them were the category leader. Here's what that means for the next 18 months of B2B marketing — and why dashboards alone won't fix it.",
    tag: "GEO",
    color: "from-emerald-500 to-teal-500",
    tldr: "LLMs are consistently surfacing the same vendors for category queries, and they're rarely the category leaders. GEO is now the prerequisite for being found, and most brands haven't started.",
  },
  {
    slug: "ai-entry-level-jobs",
    title: "AI didn't kill the entry-level job. Interest rates and a tax change did.",
    date: "Apr 14, 2026",
    readTime: "8 min",
    excerpt:
      "The narrative is clean: AI is replacing humans, that's why nobody's hiring. The data is messier. A Federal Reserve study of one million firms found \"precisely-estimated null effects\" for AI on job postings. Meanwhile, 59% of hiring managers admit they cite AI in layoff messaging because it \"plays better with stakeholders.\"",
    tag: "Macro",
    color: "from-teal-500 to-emerald-600",
    tldr: "Federal Reserve research shows AI had null effects on job postings. Interest rates, Section 174, and post-pandemic normalization are the real story — and understanding that changes how you sell.",
  },
  {
    slug: "selling-ai-skeptical-buyers",
    title: "Selling AI to skeptical buyers (a field guide)",
    date: "Feb 11, 2026",
    readTime: "7 min",
    excerpt:
      "Marketers, agency leads, pharma commercial teams — the buyers I sell to are smart, busy, and have seen 50 AI demos this quarter. Here's how I frame the conversation so the technology gets out of the way and the business outcome leads.",
    tag: "Sales",
    color: "from-cyan-500 to-blue-600",
    tldr: "The enterprise buyers you're selling to have been burned before. Stop adding proof and start diagnosing the specific failure that created the skepticism.",
  },
];
