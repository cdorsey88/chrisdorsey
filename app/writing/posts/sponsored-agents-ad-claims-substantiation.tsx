import type { Post } from "./types";

export const post: Post = {
  slug: "sponsored-agents-ad-claims-substantiation",
  title: "OpenAI's fine print makes every Sponsored Agent reply your ad claim, and nobody gets to approve it first",
  date: "Sep 22, 2026",
  readTime: "5 min",
  tag: "Future of Ads",
  color: "from-violet-700 to-orange-500",
  tldr: "OpenAI started testing Sponsored Agents on September 16. You tap an ad in ChatGPT and a labeled chat opens with the brand's own AI rep. The coverage has been about labels and user trust. The detail that matters to advertisers is in OpenAI's Ad Tools Terms: any claim tied to a Sponsored Agent, including what it says and does, counts as a claim tied to an ad, and that holds even when OpenAI builds the agent for you. U.S. advertising law has required proof for a claim before it runs since 1984. Every ad approval process I've worked with depends on seeing the words first, and an agent writes its words after the shopper asks. You can't approve the replies, so you approve what the agent is allowed to claim and you attack it before launch. The format is in a limited test right now, which is the cheapest time to build that.",
  content: (
    <div className="prose-content">
      <p>
        <a href="https://www.seroundtable.com/openai-chatgpt-sponsored-agents-42104.html" target="_blank" rel="noopener noreferrer">OpenAI announced Sponsored Agents on September 16</a>. After seeing a relevant ad, a ChatGPT user can open a labeled conversation with a business-sponsored agent, ask follow-up questions, and click through to the brand&rsquo;s site when they&rsquo;re ready. <a href="https://thedeepdive.ca/sponsored-ai-agents-entered-the-chat-angi-among-first-chatgpt-testers/" target="_blank" rel="noopener noreferrer">Angi confirmed it&rsquo;s in the pilot</a>, and OpenAI&rsquo;s help center <a href="https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads" target="_blank" rel="noopener noreferrer">describes the format as a limited alpha</a>{" "}for selected advertisers. The ad business behind it hit a <a href="https://www.artificialintelligence-news.com/news/chatgpt-ads-passes-1b-run-rate-in-200-days/" target="_blank" rel="noopener noreferrer">$1 billion annualized run rate in under 200 days</a>.
      </p>
      <p>
        Most of what&rsquo;s been written since asks whether shoppers will understand that the friendly agent is selling to them. That&rsquo;s a fair question for users. Advertisers should be reading the contract.
      </p>
      <h2>The contract puts every reply on you</h2>
      <p>
        <a href="https://openai.com/policies/ad-tools-terms/" target="_blank" rel="noopener noreferrer">OpenAI&rsquo;s Ad Tools Terms say</a>{" "}that for indemnification purposes, any claim related to a Sponsored Agent, including its content, configuration, actions and output, will be deemed a claim related to an ad. <a href="https://searchenginewatch.com/openai-sponsored-agents/" target="_blank" rel="noopener noreferrer">Search Engine Watch caught the second half</a>: even when OpenAI creates or configures the agent, the advertiser is responsible for it as if they&rsquo;d built it themselves. <a href="https://openai.com/policies/advertising-terms/" target="_blank" rel="noopener noreferrer">The main Advertising Terms</a>{" "}add that you warrant each campaign complies with the law on truthfulness and substantiation of claims.
      </p>
      <p>
        In plain English: if the agent tells a shopper a sofa ships in three days, or a contractor is licensed, or a jacket is waterproof, that&rsquo;s your ad saying it. If someone relies on it and it&rsquo;s wrong, the bill comes to you.
      </p>
      <p>
        <a href="/writing/chatgpt-ad-destination-is-an-agent">I wrote in August</a>{" "}that this format moves the answering and the staffing onto the advertiser. The terms settle the legal half of that.
      </p>
      <h2>The law assumes you saw the ad before it ran</h2>
      <p>
        The FTC&rsquo;s <a href="https://www.ftc.gov/sites/default/files/attachments/training-materials/policy_substantiation.pdf" target="_blank" rel="noopener noreferrer">advertising substantiation policy dates to 1984</a>{" "}and it&rsquo;s short on ambiguity. Advertisers need a reasonable basis for a claim before it&rsquo;s disseminated, and a firm that lacks one at that moment is in violation of Section 5 of the FTC Act, whatever evidence turns up later.
      </p>
      <p>
        Every approval process I&rsquo;ve been part of is built on that order of operations. At Crispin Porter + Bogusky, a spot went through the copywriter, the account team and legal before the client ever heard it. Legal worked from a finished script and a claims file that backed every line. It was slow, and it worked because the ad had a final version.
      </p>
      <p>
        A Sponsored Agent doesn&rsquo;t have a final version. It writes its answer after the shopper types the question, differently for each shopper, and nobody at the brand sees that answer until it&rsquo;s already been read.
      </p>
      <h2>A chatbot has already lost this argument</h2>
      <p>
        In 2024, Jake Moffatt asked Air Canada&rsquo;s website chatbot about bereavement fares. It told him he could apply for the discount after he traveled. The airline&rsquo;s actual policy said otherwise. Air Canada argued before British Columbia&rsquo;s Civil Resolution Tribunal that the chatbot was responsible for its own statements. <a href="https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot" target="_blank" rel="noopener noreferrer">The tribunal disagreed</a>{" "}and held that a company has to take reasonable care that its representations are accurate, whether they come from a static page or a bot.
      </p>
      <p>
        That was a support bot on the airline&rsquo;s own site, and Air Canada had no contract saying it owned the bot&rsquo;s output. Sponsored Agent advertisers signed one.
      </p>
      <h2>Approve the claims, then try to break the agent</h2>
      <p>
        You can&rsquo;t pre-approve a conversation that hasn&rsquo;t happened, so the review has to move upstream to the things you can see in advance.
      </p>
      <p>
        Start with a claims list. Write down every objective statement the agent is allowed to make, such as price, stock, delivery windows, warranty terms, certifications and compatibility, and attach the proof for each one the same way legal would for a TV spot. Anything that isn&rsquo;t on the list, the agent should decline or hand to a person. A short list is fine, and it&rsquo;s one legal can sign.
      </p>
      <p>
        Then attack it before it goes live. Give someone who never saw the brief an afternoon to get the agent to promise a discount, name a competitor it beats, commit to a delivery date, or describe a product feature that doesn&rsquo;t exist. Save every transcript. Rerun the same attacks every time the product feed changes or OpenAI updates the model underneath, because either one can change what the agent says without anyone at your company touching it.
      </p>
      <p>
        Keep reading real conversations after launch, too. A weekly sample of transcripts, checked against the claims list, is the closest thing this format has to a trafficking review.
      </p>
      <p>
        <a href="/writing/soundcheck-audio-brand-qa">I built a small version of this idea</a>{" "}for AI-generated audio ads this summer, a tool that checks each rendered file against the brand&rsquo;s standard, because approving the script no longer tells you what the audio says. An agent has the same problem at a larger scale, since every reply is effectively a new render.
      </p>
      <p>
        OpenAI is testing Sponsored Agents with a small group of U.S. advertisers right now, with no published pricing or launch date. A signed claims list and a first round of attack transcripts take a few weeks to put together, so the time to start is before your brand gets the invite.
      </p>
    </div>
  ),
  sources: [
    { title: "OpenAI — Ad Tools Terms (Sponsored Agent definitions and indemnification)", url: "https://openai.com/policies/ad-tools-terms/" },
    { title: "OpenAI — Advertising Terms", url: "https://openai.com/policies/advertising-terms/" },
    { title: "OpenAI Help Center — Sponsored Agents in ChatGPT Ads", url: "https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads" },
    { title: "Search Engine Roundtable — OpenAI Testing Sponsored Agents For ChatGPT Ads (Sept 16, 2026)", url: "https://www.seroundtable.com/openai-chatgpt-sponsored-agents-42104.html" },
    { title: "Search Engine Watch — OpenAI's Sponsored Agents turn ads into chats", url: "https://searchenginewatch.com/openai-sponsored-agents/" },
    { title: "The Deep Dive — Angi among first ChatGPT Sponsored Agent testers", url: "https://thedeepdive.ca/sponsored-ai-agents-entered-the-chat-angi-among-first-chatgpt-testers/" },
    { title: "AI News — ChatGPT Ads passes $1B run rate in 200 days (Sept 1, 2026)", url: "https://www.artificialintelligence-news.com/news/chatgpt-ads-passes-1b-run-rate-in-200-days/" },
    { title: "FTC — Policy Statement Regarding Advertising Substantiation (1984)", url: "https://www.ftc.gov/sites/default/files/attachments/training-materials/policy_substantiation.pdf" },
    { title: "McCarthy Tétrault — Moffatt v. Air Canada, 2024 BCCRT 149", url: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot" },
  ],
};
