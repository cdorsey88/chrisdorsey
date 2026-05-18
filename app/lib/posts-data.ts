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
