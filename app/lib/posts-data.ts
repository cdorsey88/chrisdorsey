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
      "Banks moved from AI pilots to production fleets of agents this year, and Wolters Kluwer says 44% of finance teams will use agentic AI in 2026, a 600%+ jump. The vendors winning regulated buyers aren't the flashiest models. They're the ones who shipped immutable audit logs, SOC 2, and EU AI Act alignment as table stakes. If you sell into financial services, compliance is your product surface now.",
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
      "Anthropic is reportedly closing a $30B round at a $900B+ valuation. PwC is certifying 30,000 professionals on Claude. The Big Four have placed their bets. The enterprise AI sale just changed: your buyers aren't asking if AI is real anymore. They're asking whether they picked the right platform. That changes your job.",
    tag: "AI",
    color: "from-blue-600 to-violet-600",
    tldr: "Anthropic is closing a $30B round at $900B+, PwC is all-in on Claude, and the Big Four have made their platform bets. The category sale — creating urgency around AI being real — is over. The new conversation is about platform choice, switching costs, and whether your buyer backed the right horse. Your pitch needs to change.",
  },
  {
    slug: "oura-ipo-not-every-company-should-go-public",
    title: "Oura just filed to go public. That's exactly when I'd bet against them.",
    date: "May 22, 2026",
    readTime: "7 min",
    excerpt:
      "Oura confidentially filed its S-1 yesterday — sold 5.5M rings, $11B Series E valuation, a category they invented. Here's why public-market gravity is the thing most likely to break them.",
    tag: "Business",
    color: "from-amber-600 to-orange-500",
    tldr: "Oura confidentially filed its S-1 yesterday — 5.5M rings sold at an $11B valuation in a category they invented. Public-market gravity is the thing most likely to break them. Fitbit is the case study, and Google relaunched the Fitbit Air this month as the explicit wedge against Oura.",
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
    title: "Publicis bought LiveRamp for $2.2B. The Trade Desk just lost more than LiveRamp did.",
    date: "May 18, 2026",
    readTime: "7 min",
    excerpt:
      "Press release landed Tuesday: Publicis is paying $2.167B for LiveRamp — $38.50 a share, 29.8% premium, all cash. Most of the coverage is treating this as another holdco land grab. The second-order effect is bigger: Publicis just bought the rails of the open internet, and The Trade Desk's identity story just got much harder to defend.",
    tag: "MadTech",
    color: "from-fuchsia-600 to-rose-500",
    tldr: "Publicis is paying $2.167B for LiveRamp — a 29.8% premium for the connectivity layer underneath modern programmatic. The biggest casualty isn't LiveRamp's customers; it's The Trade Desk's claim that UID2 is an independent identity standard. Brands have three things to do this week before close.",
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
