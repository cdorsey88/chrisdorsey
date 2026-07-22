import type { Post } from "./types";

export const post: Post = {
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
};
