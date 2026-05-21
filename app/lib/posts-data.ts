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
