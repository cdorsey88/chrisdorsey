// One source for the FAQ. /about renders it as visible copy, and app/layout.tsx
// turns the same items into the FAQPage JSON-LD, so the two can't drift apart.
// Edit the wording here, nowhere else.
//
// Register for the roles answer (approved Sept 2026): "always open to the right
// conversation". Never "looking for a role", "open to work" or "not looking".

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "What does Chris Dorsey do?",
    a: "Chris sells first-to-market AI and MadTech (marketing and advertising technology) to enterprise buyers, usually before they have a budget line for it. He's been the first seller in the building twice and has sold three categories before budgets existed for them. His Fortune 500 work runs from agency creative at Crispin Porter + Bogusky to data at Oracle Advertising, edge infrastructure at Fastly and AI customer acquisition at Zeta Global. He builds with AI too. Campsite Ranger, a product he shipped solo, has paying customers.",
  },
  {
    q: "Is Chris open to new roles?",
    a: "He's always open to the right conversation, especially Senior Account Executive, Account Director, Sales Director and Client Lead roles at AI-native companies. He also advises startups taking a first product to market, and he responds to every note personally.",
  },
  {
    q: "Who can Chris introduce you to?",
    a: "After 16 years across four industries, he knows Fortune 500 CMOs, AI founders, data leaders, investors, agency executives, engineers and product managers. Tell him what you're trying to do and he'll likely know who you should talk to. Introductions are free.",
  },
  {
    q: "Where is Chris based?",
    a: "Denver, Colorado. He works remotely or hybrid across the United States.",
  },
  {
    q: "What industries does Chris cover?",
    a: "AI go-to-market, data and MadTech, with deep roots in enterprise SaaS, retail media, AdTech and agency creative. He's sold through every major marketing shift: broadcast, digital, social, programmatic, data, AI and now agents.",
  },
];
