// Per-company interview pages (/for/[company]).
// To create a new one: copy the "example" entry, change the key to the company slug
// (lowercase, hyphenated — it becomes the URL, e.g. "ibotta" → /for/ibotta),
// and write each [FILL] block for that specific opportunity.
// These pages are noindex/nofollow and excluded from the sitemap. Share the URL privately.

export type CompanyPage = {
  company: string; // display name
  role: string; // the role you're interviewing for
  market: string; // "What I see in your market"
  ninetyDays: string; // "My first 90 days"
  whyMe: string; // "Why my background maps"
};

export const companyPages: Record<string, CompanyPage> = {
  example: {
    company: "[FILL: Company Name]",
    role: "[FILL: Role Title]",
    market:
      "[FILL: What I see in your market — 2–3 short paragraphs. Specific observations about their category, competitors, buyer behavior, and where the opening is. This is the section that proves you did the homework.]",
    ninetyDays:
      "[FILL: My first 90 days — 2–3 short paragraphs. Concrete, sequenced: what you'd learn, who you'd talk to, what you'd ship by day 30/60/90. Numbers where honest.]",
    whyMe:
      "[FILL: Why my background maps — 2–3 short paragraphs. Connect specific past wins to their specific situation. Pull from /track-record and /deal-stories, but make it about them.]",
  },
  "openevidence": {
    company: "OpenEvidence",
    role: "Account Director, Pharma Advertising",
    market:
      "OpenEvidence says its tool reaches nearly two-thirds of US physicians. The FT reported that claim in October, and an eMarketer survey in March found 36% of physicians using it. Either number is a large share of the doctors pharma wants to reach. The ads run while an answer generates and then disappear, labeled and kept apart from the answer. I expect a brand's medical, legal and regulatory reviewers to ask about that separation first.\n\nThe nearest competitors sell reach by different routes. Doximity reported 4% revenue growth on November 5 and has said it plans to monetize its AI search for pharma. Sermo sells self-serve ads by specialty to more than a million verified providers. Havas wrote in May that measurement in this category is immature, and floated a pricing idea built on the moment a physician makes a decision: cost per clinical decision.\n\nPharma buyers still have two open problems. Script and new-to-brand prescription attribution lag by months, so brand teams are looking for a middle layer of query-level intent. And EVERSANA said in August that FDA and FTC questions about ads in AI assistants are unresolved. I'd expect the first large budgets to come from brands whose compliance teams get a clear answer before the campaign starts.",
    ninetyDays:
      "Days 1 to 30. Learn the ad product and the pharma buyers you already have. I'd sit in on current pitches and renewals and read the last year of lost deals. I'd also ask your clinical and compliance leads what a brand's reviewers push back on most.\n\nDays 31 to 60. Choose two or three therapeutic areas and build the pitch around one result a brand team can show its own leadership. I'd write it with your compliance team so it clears review the first time.\n\nDays 61 to 90. Run the first pilots. Each one gets a success measure that the brand and your team agree on before it starts. Then I'd turn what we learn into a repeatable pitch for the rest of the sales team.",
    whyMe:
      "I was the #1 seller in the US for the pharma vertical at Oracle Advertising, selling audience data and contextual targeting to the brand teams you sell to. I know how a pharma media plan gets built, who signs it and where it stalls in review.\n\nI've also sold categories before the budget line existed. At Zeta Global in 2025, no client I pitched had bought email customer acquisition with AI targeting. A national retail brand signed a $200K pilot, and it grew into a contract worth more than $1M on performance. The pharma version is a small, measurable test a brand team can defend to its leadership.\n\nAcross my second stint at Oracle Advertising I attained 124% of quota. I build with AI myself, too. Campsite Ranger is a product I built solo, and it has over 600 users, more than 100 of them paying.",
  },
  "sierra": {
    company: "Sierra",
    role: "Enterprise Sales Director, Majors, Healthcare",
    market:
      "Sierra says it works with almost half of the Fortune 50 and passed $400M in annual recurring revenue on October 30, adding more than $150M in the third quarter alone. It also says it works with 8 of the 10 largest healthcare companies. Those are company-reported figures, and they tell me the healthcare motion is already running. I read this role as winning the major accounts that aren't customers yet.\n\nOutcome pricing is the sharpest edge in the product and the hardest thing to sell into a health system. Sierra charges when a task is completed. Procurement and finance teams told TechTarget in October that outcome fees are hard to forecast, and Verdantix says agreeing on what counts as a resolution adds finance and legal reviewers to the deal. Decagon and Sierra publish similar-looking percentages that measure different things, so buyers comparing them need definitions in writing.\n\nHealthcare adds its own friction. A survey sponsored by Sinch of more than 470 healthcare leaders found that 75% of those with agents in production had rolled one back over governance failures. Private data exposure caused a third of those failures. Sierra's Compliance Console and its new head of clinical look like the answer. The CMS prior-authorization rule due January 1, 2027 will put payers under deadline pressure too.",
    ninetyDays:
      "Days 1 to 30. Learn the product by shadowing live healthcare deployments and reviewing the last year of major wins and losses. I'd also sit with your clinical and compliance team to hear what buyers ask in governance reviews.\n\nDays 31 to 60. Build a plan for named accounts with a buying-committee map for each. That means the operations executive who owns the call center and the finance partner who has to sign an outcome-based fee.\n\nDays 61 to 90. Open the first conversations with a proposed definition of a resolved outcome in hand, so pricing gets written with the buyer before procurement raises it.",
    whyMe:
      "I sell what buyers don't have a budget for yet. At Zeta Global in 2025, a national retail brand signed a $200K pilot of an AI product no client I pitched had bought before. It grew into a contract worth more than $1M on performance. That is outcome-linked selling on a small scale.\n\nAt Fastly I carried a number that moved with customer usage, and net revenue retention ran at 108%. Across my second stint at Oracle Advertising I attained 124% of quota, and I was the #1 seller in the US for the pharma vertical.\n\nMy vertical was pharma, not payers or providers. I'd learn those buying committees from your team in the first month.",
  },
  "openai": {
    company: "OpenAI",
    role: "Client Partner, Ads Solutions",
    market:
      "OpenAI's October 21 announcement, as reported by The Next Web, put ChatGPT ads in 89 countries with more than 100,000 advertisers since launch. That count is cumulative. A late-August report put active advertisers near 20,000. The gap between those two numbers is the job: turning trial budgets into standing ones.\n\nAgencies say measurement is what keeps budgets at test level. Digiday reported in October that conversions arrive 24 to 36 hours late and that delivery can swing from thousands of impressions one week to under 100 the next. Many advertisers' legal teams won't accept the tracking terms. One executive described clients spending $10M a month on Google and under $100K a month on ChatGPT. OpenAI has answered with a pixel, a Conversions API, 20 named measurement partners and brand-suitability pilots with DoubleVerify and IAS.\n\nThe competitive picture helps. Perplexity pulled its ads over user-trust concerns, according to the FT. Meta's Muse assistant carries none, and Google's Philipp Schindler cited lower monetization in AI Mode. Each advertiser's first six months decide whether a test budget becomes a standing one.",
    ninetyDays:
      "Days 1 to 30. Learn the product and read every renewal and churn note for the accounts I'd cover. I'd ask your measurement team where advertisers' numbers and OpenAI's numbers disagree most often.\n\nDays 31 to 60. Pick the accounts that already have a test budget and plan how to move each one past it. That means a measurement setup agreed before the first dollar and a written definition of success that the advertiser's finance team signs off on.\n\nDays 61 to 90. Run the first scaled campaigns and write down what moved each test into a standing budget, so the team can repeat it.",
    whyMe:
      "I sold advertising technology to Fortune 500 marketers at Oracle Advertising for years. Across my second stint I attained 124% of quota, and I was the #1 seller in the US for the pharma vertical.\n\nI've sold two categories before the budget line existed. At Zeta Global in 2025, a $200K pilot of an AI customer-acquisition product grew into a contract worth more than $1M on performance. I was also an early advisor to a generative-engine-optimization platform, which is the category advertisers now ask about next to ads.\n\nI use AI to build and run my own work. Campsite Ranger is a product I built solo, and it has over 600 users, more than 100 of them paying.",
  },
};
