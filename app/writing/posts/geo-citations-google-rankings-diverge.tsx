import type { Post } from "./types";

export const post: Post = {
    slug: "geo-citations-google-rankings-diverge",
    title: "The pages AI cites and the pages Google ranks are barely the same list anymore.",
    date: "Jun 29, 2026",
    readTime: "5 min",
    tag: "GEO",
    color: "from-emerald-500 to-cyan-600",
    tldr: "New 5W research, drawing on Brandlight data, says the overlap between the top Google results and the sources AI assistants cite has fallen from about 70% to under 20%, and Ahrefs found roughly 28% of ChatGPT's most-cited pages have no organic Google ranking at all. Search and AI answers are pulling from two increasingly different lists, and Google's own new guidance says most GEO 'hacks' don't work. If you market a brand, stop grading GEO on the SEO scoreboard: track whether the assistants cite and recommend you, find the sources they pull from, and get your brand into those. If you sell GEO tooling, a ranking dashboard isn't the product anymore.",
    content: (
      <div className="prose-content">
        <p>
          For about a decade the bargain was clear: earn a spot on Google&apos;s first page and you&apos;d get found. New research from 5W, built on{" "}
          <a href="https://www.prnewswire.com/news-releases/new-5w-research-overlap-between-top-google-rankings-and-ai-cited-sources-has-collapsed-from-70-to-under-20-302760132.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Brandlight&apos;s data</a>, says that bargain is coming apart. The overlap between the pages that rank at the top of Google and the pages AI assistants cite in their answers has fallen from roughly 70% to under 20%, and it keeps sliding. Ahrefs ran the question separately and found that{" "}
          <a href="https://ahrefs.com/blog/chatgpt-google-citations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">around 28% of the pages ChatGPT cites most often don&apos;t rank organically on Google at all</a>. Two systems people use to find things, pulling from two increasingly different lists.
        </p>
        <p>
          If you market a brand, that gap is your problem now. The SEO you already paid for &mdash; the rankings, the backlinks, the content calendar &mdash; was supposed to be the thing that got you discovered. A growing share of discovery now happens inside ChatGPT, Gemini, Perplexity, and Google&apos;s own AI Mode, and the page that wins the blue link isn&apos;t necessarily the source the model quotes back to your buyer. You can be winning search and losing the answer.
        </p>
        <p>
          I&apos;ve spent the recent stretch of my career working on exactly this problem &mdash; getting brands surfaced inside AI answers rather than just search results &mdash; and what surprised me was how little the old playbook transferred. The instinct is to point your SEO team at it and assume the same work pays off in the new channel. Mostly it doesn&apos;t.
        </p>
        <h2>Why the two lists drifted apart</h2>
        <p>
          A search engine ranks pages. A language model assembles an answer, and it reaches for sources that make that answer easy to write and safe to stand behind: clear definitions, content structured as direct answers, consistent mentions of your brand across places the model already trusts &mdash; Reddit threads, Wikipedia, review sites, trade coverage, established publications. Backlinks and keyword density, the currency of SEO, barely register. So a page engineered to rank can be invisible to the model, and a Reddit comment or a third-party roundup you don&apos;t even own can be the thing it quotes. The signals that win each system were never the same, and at the scale of millions of queries the two lists pull apart.
        </p>
        <h2>The mistake is grading GEO on the SEO scoreboard</h2>
        <p>
          A whole tooling market has grown up promising to fix your AI visibility, and most of it sells the same dashboard SEO always sold: a number that goes up. Google itself just published{" "}
          <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">guidance on optimizing for its generative features</a>, and the blunt version is that a lot of the GEO &ldquo;hacks&rdquo; making the rounds don&apos;t do anything, because generative visibility still rides on the same fundamentals as search quality. Two things can be true: AI visibility is real and worth chasing, and a meaningful slice of what&apos;s being sold to chase it is the old game with a new label. If your GEO report is really a rankings report wearing a costume, you&apos;re paying to measure the wrong list.
        </p>
        <h2>If you market a brand</h2>
        <p>
          Stop asking where you rank and start asking whether the assistants cite you and recommend you for the queries that matter, and which sources they pull when they do. Run your real buying questions through ChatGPT, Gemini, and Perplexity, write down who gets named, and go find the pages those answers lean on. Often they&apos;re not yours &mdash; a comparison post, a Reddit thread, an analyst&apos;s roundup &mdash; and the work is getting your brand accurately represented in those places, not polishing a landing page the model never reads. Clean, answer-shaped content on your own site still matters. It&apos;s the floor, not the whole building.
        </p>
        <h2>If you sell GEO tooling</h2>
        <p>
          The ranking dashboard isn&apos;t the product anymore. A buyer can tell within a quarter whether your tool moved an actual citation or just charted a vanity score, and the divergence in this research is exactly what makes that bluff easy to call. Sell the thing that ties to a model citation a buyer can see, name the sources you got them into, and let the score be the smallest promise you make.
        </p>
        <p>
          The two lists used to be close enough that winning one won you the other. They aren&apos;t anymore, and the brands that keep grading themselves on Google&apos;s page while their buyers get answers somewhere else will think they&apos;re winning right up until they wonder why the pipeline went quiet. Check both lists this quarter. They no longer agree.
        </p>
      </div>
    ),
    sources: [
      { title: "5W / PR Newswire — Overlap Between Top Google Rankings and AI-Cited Sources Has Collapsed From 70% to Under 20% (2026)", url: "https://www.prnewswire.com/news-releases/new-5w-research-overlap-between-top-google-rankings-and-ai-cited-sources-has-collapsed-from-70-to-under-20-302760132.html" },
      { title: "Ahrefs — ChatGPT May Scrape Google, but the Results Don't Match", url: "https://ahrefs.com/blog/chatgpt-google-citations/" },
      { title: "Google Search Central — Optimizing Your Website for Generative AI Features on Google Search", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
    ],
};
