import type { Post } from "./types";

export const post: Post = {
    slug: "astra-lean-proofs-verification-buyers",
    title: "OpenAI spent $2,000 on compute and got ten math proofs anyone can check",
    date: "Aug 3, 2026",
    readTime: "6 min",
    tag: "AI",
    color: "from-teal-700 to-indigo-500",
    tldr: "On August 1 OpenAI published results from Astra, an unreleased model: ten open problems in mathematics and theoretical computer science, including the first explicit construction of a non-sofic group, open since 1999, and an improvement to sphere-packing bounds that had stood since 1978. Inference cost roughly $2,000 at the lab's own API rates. How they published it is the commercially interesting move. Alongside a 249-page manuscript they shipped machine-checkable Lean 4 certificates on GitHub, so any skeptic can verify the proofs without access to the model and without trusting OpenAI. Enterprise AI deals have stalled for three years on one question: how does the buyer know the output is right. Benchmarks are chosen by the vendor and pilots are staffed by the vendor. An artifact the customer runs on their own hardware is a third answer. Find the parts of your product where one exists and lead with those.",
    content: (
      <div className="prose-content">
        <p>
          OpenAI published a paper on August 1 claiming an unreleased model called Astra produced ten new results in mathematics and theoretical computer science. Total inference cost, at the lab&rsquo;s own API rates, came to about $2,000. The list includes the first explicit construction of a non-sofic group, a question open since 1999, a disproof of Connes&rsquo;s rigidity conjecture, an improvement on sphere-packing bounds that had stood since 1978, and resolutions of three Erd&#337;s problems.
        </p>
        <p>
          The people who would know took it seriously. Thomas Bloom, who maintains erdosproblems.com, called it big news. Timothy Gowers, a Fields medalist, said he would recommend one of the proofs to the Annals of Mathematics without hesitation. S&eacute;bastien Bubeck, who runs math research at OpenAI, called the results beautiful, which is what you would expect him to say. Noam Brown pointed out there were no Millennium Prize Problems in the batch, which is not.
        </p>
        <h2>OpenAI did not ask anyone to take its word for it</h2>
        <p>
          Along with the manuscript and the model&rsquo;s reasoning walkthroughs, OpenAI shipped machine-checkable Lean 4 certificates to GitHub. Anyone with the Lean compiler can verify every proof mechanically, on their own machine, without access to Astra, without a demo call, without trusting a single claim in the press release. The assertion and the means of falsifying it arrived on the same day.
        </p>
        <p>
          I have spent fifteen years selling technology to people whose job is to not get fooled. Fastly&rsquo;s buyers were engineers who ran their own load tests before they would take a meeting about pricing. Oracle&rsquo;s buyers had procurement organizations whose entire function was structured distrust. Every AI deal since 2023 has hit the same wall: the buyer asks how they would know the output is correct, and the two answers on offer are both weak. Benchmarks are selected by the vendor. Pilots are staffed by the vendor&rsquo;s engineers, which makes them a test of the vendor&rsquo;s engineers.
        </p>
        <p>
          A verification artifact the customer runs themselves is a third answer, and it is rare because it is genuinely hard to build. It is also the only one of the three that survives a hostile procurement review.
        </p>
        <h2>Most enterprise work has no Lean compiler</h2>
        <p>
          The limit here is obvious and I want to state it before anyone over-reads the result. Mathematics has formal verification. Your pipeline forecast does not. There is no compiler that will tell you an AI-drafted account plan is correct, and there never will be.
        </p>
        <p>
          But some enterprise work does have a checkable oracle sitting right there, and those are the deals to lead with. Code that passes a test suite the customer wrote. Reconciliations that tie to the customer&rsquo;s general ledger. Contract clauses graded against the customer&rsquo;s own playbook. Support answers checked against a policy document the customer supplied. In each of those the buyer can grade your output without asking your permission or scheduling your solutions engineer. Sell into those categories first and let the fuzzier ones ride on the trust you earn there.
        </p>
        <p>
          Two things can be true. This is a real mathematical result with artifacts a stranger can verify, and it is still a lab announcing a breakthrough by press release about a model no outsider can touch. The Leiden Declaration, endorsed by the International Mathematical Union, exists partly because mathematicians got tired of that pattern. Astra has no public interface and no announced release date. OpenAI is giving 100,000 academic researchers free access through 2027, which is a good-faith gesture and a distribution strategy at the same time.
        </p>
        <h2>What this costs you to copy</h2>
        <p>
          Pick your product&rsquo;s central claim and ask what a hostile customer could run, on their own hardware, without your help, that would prove you wrong. If the answer is a slide, you have a positioning problem no amount of discounting will fix.
        </p>
        <p>
          OpenAI spent $2,000 on the compute and an unknowable amount on the 249 pages and the Lean files that let strangers check the work. The second number is the one that bought the credibility.
        </p>
      </div>
    ),
    sources: [
      { title: "Implicator.ai — OpenAI says Astra solved 10 math problems with Lean proofs (Aug 2026)", url: "https://www.implicator.ai/openai-astra-10-math-problems-lean-proofs/" },
      { title: "The Agent Report — OpenAI's Astra solves ten open math problems for $2,000, with machine-checkable proofs (Aug 2026)", url: "https://the-agent-report.com/2026/08/openai-astra-ten-math-problems-lean-proofs-2026/" },
      { title: "Forbes — OpenAI's Astra solved 10 decades-old math problems for just $2,000 (Aug 3, 2026)", url: "https://www.forbes.com/sites/jonmarkman/2026/08/03/openais-astra-solved-10-decades-old-math-problems-for-just-2000/" },
      { title: "The Next Web — OpenAI says its next model, Astra, has solved ten open problems in mathematics", url: "https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups" },
      { title: "TechTimes — OpenAI's Astra solves ten decade-old math problems with machine-checkable Lean proofs (Aug 2, 2026)", url: "https://www.techtimes.com/articles/322710/20260802/openais-astra-solves-ten-decades-old-math-problems-machine-checkable-lean-proofs.htm" },
    ],
};
