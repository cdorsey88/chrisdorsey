import type { Post } from "./types";

export const post: Post = {
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
};
