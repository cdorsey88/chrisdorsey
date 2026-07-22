import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "google-ai-mode-citation-placement",
    title: "Google moved the recipe links to the top of the AI answer",
    date: "Jul 22, 2026",
    readTime: "5 min",
    tag: "GEO",
    color: "from-teal-600 to-lime-500",
    tldr: "Google started placing prominent links to original recipe pages at the top of AI Mode responses — creator name, ratings, ingredient count, images — after two years of recipe bloggers documenting lost traffic. The trade read it as a publisher-relations concession. The GEO read: Google just demonstrated that where a citation sits inside an AI answer is a dial it turns, category by category. Every results-page redesign since universal search has moved money to whoever adapted to the new layout first, and the AI answer now has a layout. A blended AI-visibility score already hid which engine you were losing; it now also hides where in the answer you land, and a named card at the top is a different asset than a footnote below the fold. The recipe cards pull the fields Google's systems can extract cleanly — mostly structured data publishers marked up years ago — which makes schema the cheapest GEO work available. And Gemini-powered ad formats already run inside AI Mode, so designed organic slots and paid formats share a canvas for the first time; Google's designed organic slots have historically grown sponsored siblings. Run your ten money queries in AI Mode and record placement, ask your GEO vendor for placement-level reporting by engine and category, and mark up the fields you'd want your category's card to show before that card gets designed without you.",
    content: (
      <div className="prose-content">
        <p>
          Google changed how recipes show up in AI Mode this week: prominent links to the original recipe pages now sit at the top of the response, in cards carrying the creator&rsquo;s name, the recipe&rsquo;s ratings, ingredient counts and images. The change followed two years of recipe bloggers documenting what AI answers were doing to their traffic. The reception was wary; Inspired Taste pointed out that Google still generates its own recipe summaries underneath, and those summaries can misrepresent the original.
        </p>
        <p>
          The story got filed as a peace offering in the Google-versus-publishers fight, which it is. It is also a product decision: where a citation sits inside an AI answer is a dial, Google&rsquo;s hand is on it, and the company just turned it for one category because that category complained loudest and best.
        </p>
        <h2>Every results-page redesign has moved money</h2>
        <p>
          I have been buying and selling around Google&rsquo;s results page since the ten-blue-links era, and the pattern holds across every layout change: universal search, featured snippets, position zero, the local pack. Each time Google redrew the page, clicks and budgets moved to whoever adapted first, while everyone else spent a year arguing about whether the change was fair. The AI answer just got its first layout revision. Recipes today; travel, local and product recommendations will each get their own treatment as the complaints and the usage data come in.
        </p>
        <p>
          That breaks the way most companies measure this. A blended AI-visibility score{" "}
          <Link href="/writing/geo-chatgpt-sources-split-by-engine" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">already hid which engine you were losing</Link>. Now it also hides where in the answer you land, and a named card at the top of the response is a different asset than a footnote below the fold, the same way position 1 and position 11 were never the same purchase.
        </p>
        <h2>The card fields are the new title tag</h2>
        <p>
          Look at what the recipe cards display: creator name, star ratings, number of ingredients. Those are the fields Google&rsquo;s systems can extract cleanly, which mostly means structured data recipe publishers marked up years ago to win rich results. The bloggers who invested in schema got cards. Whatever your category is, the version of this that arrives for you will be assembled from the fields machines can read off your pages today, and marking them up before your category&rsquo;s card gets designed is the cheapest GEO work available right now.
        </p>
        <h2>Organic cards and paid formats share a canvas now</h2>
        <p>
          <Link href="/writing/google-conversational-ads-keyword-casualty" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Gemini-powered ad formats already run inside AI Mode</Link>, which means the designed organic slot and the paid slot sit on the same surface for the first time. Google&rsquo;s record with designed organic slots is consistent: the shopping grid, the local pack and the top of the page all eventually grew sponsored siblings. Google has said nothing about selling citation placement, and it may never. But after twenty years of watching this company monetize real estate, I know which way to lean.
        </p>
        <p>
          The homework is short. Run your ten money queries in AI Mode and write down where you land: top card, in-text citation, or below the fold. Ask your GEO vendor for placement-level reporting by engine and category, and if all they sell is a blended score, pass. The recipe bloggers spent two years complaining to get their links moved up the page. Being markup-ready before your category&rsquo;s redesign ships is a lot cheaper.
        </p>
      </div>
    ),
    sources: [
      { title: "Search Engine Journal — Google puts recipe links at top of AI Mode responses (July 2026)", url: "https://www.searchenginejournal.com/google-puts-recipe-links-at-top-of-ai-mode-responses/581149/" },
      { title: "Search Engine Roundtable — Google AI Mode improves links for recipe bloggers (July 2026)", url: "https://www.seroundtable.com/google-ai-mode-improves-links-recipes-41600.html" },
      { title: "Android Authority — Google tweaks AI Mode to highlight recipe creators, but food writers remain wary (July 2026)", url: "https://www.androidauthority.com/google-search-ai-mode-recipe-update-3683495/" },
    ],
};
