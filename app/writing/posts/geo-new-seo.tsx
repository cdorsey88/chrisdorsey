import type { Post } from "./types";

export const post: Post = {
    slug: "geo-new-seo",
    title: "GEO is the new SEO — and most brands are already losing",
    date: "Apr 28, 2026",
    readTime: "6 min",
    tag: "GEO",
    color: "from-emerald-500 to-teal-500",
    tldr: "LLMs are consistently surfacing the same vendors for category queries, and they're rarely the category leaders. GEO is now the prerequisite for being found, and most brands haven't started.",
    content: (
      <div className="prose-content">
        <p>
          I searched &ldquo;best CRM for mid-market companies&rdquo; in ChatGPT and Claude this morning.
          The same three vendors came up in both. None of them were Salesforce. None of them were HubSpot.
        </p>
        <p>
          Two of the three vendors that appeared are not the category leaders by revenue or by brand recognition.
          They are not the ones spending the most on Google Ads or sponsoring the most conferences. But they are
          the ones that LLMs have been trained to associate with credibility in that space — because of how they
          have structured their content, built their citation graph, and shown up in the sources that models
          actually learn from.
        </p>
        <p>
          That is Generative Engine Optimization. And most marketing teams have not started.
        </p>

        <h2>How LLMs decide what to surface</h2>
        <p>
          The mistake most people make when they first encounter GEO is assuming it works like SEO — that you can
          optimize a page title, stuff some keywords, and climb a ranking. It does not work like that.
        </p>
        <p>
          Language models build their understanding of your brand from the entire corpus of text they were trained
          on and, increasingly, from real-time retrieval from sources they trust. They are synthesizing a picture
          of who you are from: the quality and specificity of your public content, the sites that reference and
          cite you, the structured data that describes what you do, and how consistently you appear in authoritative
          third-party contexts.
        </p>
        <p>
          This means the question is not &ldquo;how do I rank for this keyword&rdquo; — it is &ldquo;what does
          the model believe about my brand, and what is the evidence base for that belief?&rdquo;
        </p>

        <h2>The three ways brands appear in LLM responses</h2>
        <p>
          In my experience auditing how brands appear across ChatGPT, Claude, Perplexity, and Gemini, there are
          three modes of presence:
        </p>
        <p>
          Cited presence: the model actively names your brand in a response and attributes a claim or capability
          to you. This is the highest-value placement — it carries implicit endorsement. It comes from being
          referenced in high-authority sources the model trusts.
        </p>
        <p>
          Contextual presence: your brand appears as part of a category when a user asks about the space broadly.
          &ldquo;Companies working on X include A, B, and C.&rdquo; Lower weight than a direct citation but still
          valuable for awareness and consideration.
        </p>
        <p>
          Absent: the model answers the question without mentioning you at all, or — worse — describes your
          category and explicitly names your competitors. This is where most brands are today.
        </p>

        <h2>What you can actually do</h2>
        <p>
          Three things that move the needle faster than almost anything else:
        </p>
        <p>
          Structured data and schema markup. JSON-LD on your site that clearly describes what you do, who you
          serve, and what you are known for gives models a reliable, machine-readable signal. Most brands have
          none. Implementing even a basic Person, Organization, and Product schema puts you ahead of the majority
          of your competitors.
        </p>
        <p>
          Third-party citation building. Models trust what authoritative sources say about you more than what you
          say about yourself. This means editorial coverage, analyst mentions, high-quality backlinks, and
          presence in industry-specific repositories that models are trained to treat as credible. The content
          strategy goal is not ranking — it is being cited.
        </p>
        <p>
          Specificity over volume. LLMs surface brands that are known for specific, concrete things — not brands
          with long lists of capabilities. &ldquo;Best project management tool for remote engineering
          teams&rdquo; returns different results than &ldquo;best project management tool.&rdquo; The brands
          that appear in the specific query are the ones that have published specific, high-quality content about
          that exact use case. Broad content that tries to own everything owns nothing in the answer layer.
        </p>

        <h2>The urgency is real</h2>
        <p>
          SEO took a decade to mature into a discipline that most marketing teams staffed for and budgeted around.
          GEO is moving faster because the adoption of AI-powered search is moving faster. The brands building
          presence in the answer layer right now are establishing positions that will be significantly harder
          to displace in 18 months.
        </p>
        <p>
          Run the audit first. Search for your category in each of the major LLMs. See where you appear, where
          you don&apos;t, and who is showing up in your place. That gap is the work.
        </p>
      </div>
    ),
    sources: [
      { title: "Aggarwal et al. — GEO: Generative Engine Optimization (KDD 2024)", url: "https://arxiv.org/abs/2311.09735" },
      { title: "Gartner — Search Engine Volume Will Drop 25% by 2026, Due to AI Chatbots and Other Virtual Agents", url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents" },
    ],
};
