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
};
