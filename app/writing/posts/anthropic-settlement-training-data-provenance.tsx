import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "anthropic-settlement-training-data-provenance",
    title: "A judge just put a price on where training data comes from",
    date: "Jul 22, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-stone-700 to-amber-600",
    tldr: "On July 21 Judge Araceli Martínez-Olguín gave final approval to Anthropic's $1.5 billion settlement with authors: about $3,000 per book across more than 482,000 pirated titles, over 91% claimed, the largest copyright settlement in US history and the first of the major AI training cases to reach the end. The line that survives came from Judge Alsup's earlier ruling: training on lawfully acquired books is fair use; acquiring them from piracy sites is infringement no matter what you built. Anthropic paid for the acquisition, not the training. The coverage is authors and checks. The part that lands on anyone selling AI: procurement now has a reference price for the training-data provenance question, and it will show up in security reviews next to SOC 2. Indemnification splits the field — OpenAI, Microsoft, Google and Anthropic offer copyright indemnities with real caps and conditions attached, mostly covering outputs rather than training data; the 40-person AI app in the same bake-off offers a promise it couldn't survive honoring. If you sell AI, write the provenance answer down and put your indemnity chain in the standard security packet. If you buy, ask whether the indemnity covers the training data or only the outputs, and read the cap out loud before you rely on it.",
    content: (
      <div className="prose-content">
        <p>
          On July 21, Judge Araceli Mart&iacute;nez-Olgu&iacute;n gave final approval to Anthropic&rsquo;s $1.5 billion settlement with the authors whose books were pirated to train Claude: roughly $3,000 per book across more than 482,000 titles, with over 91% of them already claimed and $101 million in attorneys&rsquo; fees riding along. It is the largest copyright settlement in US history and the first of the big AI training cases to reach the end, while suits against OpenAI, Meta and others grind on.
        </p>
        <p>
          The legal line worth memorizing came earlier, from Judge William Alsup, before he retired: training a model on books you lawfully bought is fair use. Downloading them from piracy sites is infringement, and it stays infringement no matter how transformative the model that ate them. Anthropic paid $1.5 billion for how it acquired the data. The training itself was never the exposure.
        </p>
        <p>
          The coverage this week is authors and checks, and fair enough; $3,000 a book is real money for a working novelist. The settlement also handed a number to your buyer&rsquo;s procurement team, and that is where it starts changing deals.
        </p>
        <h2>I&rsquo;ve watched a footnote become a deal gate before</h2>
        <p>
          At Zeta I sold data-driven marketing through the years when GDPR and CCPA gave the question &ldquo;where did this data come from&rdquo; legal teeth. Before that, provenance lived in a footnote of the MSA. After, deals passed through privacy reviews that hadn&rsquo;t existed a year earlier, and vendors who couldn&rsquo;t produce a clean sourcing answer stopped making shortlists. Nobody announced the change. The checklists just grew a row.
        </p>
        <p>
          Training data is next, and this time the row arrives with a dollar figure attached. Statutory damages for willful copyright infringement run up to $150,000 per work, and Alsup&rsquo;s framework put Anthropic&rsquo;s theoretical exposure into numbers no board could sit with, which is why the case settled. Risk teams can&rsquo;t price &ldquo;maybe AI has a copyright problem.&rdquo; They can price a settled class action with a per-book rate. The security questionnaire that already asks about{" "}
          <Link href="/writing/microsoft-shadow-ai-agent-gatekeeper" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">agent governance</Link>{" "}
          is about to grow a provenance section.
        </p>
        <h2>Indemnity splits the field</h2>
        <p>
          The frontier labs saw this coming. OpenAI has offered its Copyright Shield to enterprise and API customers since 2023; Microsoft has the Copilot Copyright Commitment; Google indemnifies across much of its generative stack; Anthropic&rsquo;s commercial terms commit it to defend customers over authorized use. Read the fine print, though, and the protection is narrower than the press releases: most of these cover what the model outputs, not the vendor&rsquo;s own training-data liability, and the conditions and caps vary wildly from contract to contract.
        </p>
        <p>
          An indemnity is also only as good as the balance sheet behind it. Anthropic could write a $1.5 billion check and keep operating. The 40-person AI app in the same bake-off cannot, and its indemnity clause, if one exists, is a promise from a company that would not survive the claim. If you sell an AI product built on somebody else&rsquo;s model, you inherit the stack&rsquo;s provenance whether you like it or not, and your buyer&rsquo;s counsel will eventually map the chain: whose model, trained on what, indemnified by whom, up to how much. Map it first.
        </p>
        <h2>Get the answer in the packet</h2>
        <p>
          If you sell AI: write the provenance answer down before somebody makes you. Where the training data came from, what was licensed, what your model vendor indemnifies and to what cap, and what you cover on top. Put it in the standard security-review packet next to the SOC 2 report. The first vendor in a category to answer cleanly sets the bar the rest get graded against, and this question is cheap to answer today and expensive to answer under deadline in a stalled deal.
        </p>
        <p>
          If you buy AI: two additions to the evaluation. Ask whether the indemnity covers the training data or only the outputs. Then read the cap out loud in the meeting, because a $500,000 cap against a $150,000-per-work exposure is a coupon, not coverage. And ask the provenance question even when the demo is beautiful. Anthropic had the best model in the world and still wrote the largest copyright check in American history for the way it filled its bookshelf.
        </p>
      </div>
    ),
    sources: [
      { title: "Publishers Weekly — Judge gives final approval of $1.5 billion Anthropic settlement (July 21, 2026)", url: "https://www.publishersweekly.com/pw/by-topic/digital/copyright/article/100888-judge-gives-final-approval-in-1-5-billion-settlement-in-anthropic-copyright-case.html" },
      { title: "AP via US News — Judge approves a $1.5B Anthropic settlement over pirated books (July 21, 2026)", url: "https://www.usnews.com/news/business/articles/2026-07-21/judge-approves-a-1-5b-anthropic-settlement-over-pirated-books-used-to-train-the-claude-chatbot" },
      { title: "TechCrunch — Anthropic's landmark $1.5B copyright settlement is approved (July 20, 2026)", url: "https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/" },
      { title: "Runtime — AI vendors promised indemnification against lawsuits. The details are messy.", url: "https://www.runtime.news/ai-vendors-promised-indemnification-against-copyright-lawsuits-the-details-are-messy/" },
      { title: "Ropes & Gray — Anthropic's landmark copyright settlement: implications for AI developers and enterprise users (September 2025)", url: "https://www.ropesgray.com/en/insights/alerts/2025/09/anthropics-landmark-copyright-settlement-implications-for-ai-developers-and-enterprise-users" },
    ],
};
