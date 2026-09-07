import type { Post } from "./types";

export const post: Post = {
  slug: "soundcheck-audio-brand-qa",
  title: "I built Soundcheck, a brand check for AI-generated audio ads. On its first live run it caught problems in 5 of 12 spots.",
  date: "Sep 7, 2026",
  readTime: "3 min",
  tag: "Builds",
  color: "from-violet-700 to-orange-500",
  tldr: "AI voice platforms can render a thousand audio ads in an afternoon, and nothing checks whether all thousand sound like the brand. Ad verification listens to the content around the ad, script tools screen for regulatory words, and brand-compliance products score pixels. I built an MVP called Soundcheck that compiles a brand's guidelines into a machine-readable standard, generates a campaign through six ElevenLabs APIs, and runs six checks on every render, priced against the media plan. On its first live run it flagged 5 of 12 spots, $1.82M of a simulated $2.8M plan, and caught a mispronounced founder name nobody had planted. If something already does this, I want to hear about it.",
  content: (
    <div className="prose-content">
      <p>
        ElevenLabs will take your existing ads, localize them into{" "}
        <a href="https://elevenlabs.io/docs/overview/capabilities/ads-engine" target="_blank" rel="noopener noreferrer">50+ languages</a>, and push them back into Google, Meta, and LinkedIn. The only quality gate in that pipeline is an optional human approval step. Generation got cheap. Checking the output is still a person with headphones.
      </p>
      <p>
        In August I built an MVP of that check. It&rsquo;s called Soundcheck.
      </p>

      <h2>Somebody used to listen to the spot before it aired</h2>
      <p>
        At Crispin Porter + Bogusky, a radio spot went through a producer, a copywriter, the account team, and legal before a client heard it. Someone confirmed the brand name was pronounced the way the client says it. Someone timed the read. Someone checked the disclaimer made it in. That worked because a campaign was six spots. Now one person can render six hundred by Friday, and nothing checks six hundred.
      </p>

      <h2>Every vendor checks something. None of them listen to the ad.</h2>
      <p>
        DoubleVerify launched{" "}
        <a href="https://doubleverify.com/company/newsroom/doubleverify-launches-ai-powered-brand-suitability-reporting-for-youtube-audio-ads-campaigns-expanding-transparency-in-listening-first-environments" target="_blank" rel="noopener noreferrer">AI-powered brand suitability for audio</a>{" "}
        in June; it analyzes the podcast or playlist your ad runs inside, not the ad. AudioStack partnered with{" "}
        <a href="https://audiostack.ai/en/blog/audiostack-adclear-partnership-announcement" target="_blank" rel="noopener noreferrer">Adclear</a>{" "}
        to screen scripts for regulatory problems before the audio exists. Adobe GenStudio&rsquo;s{" "}
        <a href="https://business.adobe.com/products/genstudio-for-performance-marketing/brand-compliance.html" target="_blank" rel="noopener noreferrer">brand compliance</a>{" "}
        scores generated work against your guidelines, and its page doesn&rsquo;t mention audio once. CreativeX and Vidmob do the same for images and video. Nobody on that list listens to the rendered file that goes on air.
      </p>

      <h2>What the MVP does</h2>
      <p>
        It starts with the brand kit a client would already have: brand bible, pronunciation lexicon, campaign brief, media plan, talent consent scope. Soundcheck compiles those into one machine-readable standard, generates a 12-spot, four-market campaign for a fictional cold-brew brand through six ElevenLabs APIs (Voice Design, text-to-speech, Music, sound effects, Dubbing, and{" "}
        <a href="https://elevenlabs.io/docs/overview/capabilities/speech-to-text" target="_blank" rel="noopener noreferrer">Scribe v2</a>{" "}
        to transcribe every render back with word-level timestamps), then runs six checks on each spot: script fidelity, pronunciation against the lexicon, pace, loudness, whether the legal and AI-disclosure lines made it in, and voice drift.
      </p>
      <p>
        The disclosure check got more important on August 2, when{" "}
        <a href="https://artificialintelligenceact.eu/article/50/" target="_blank" rel="noopener noreferrer">Article 50 of the EU AI Act</a>{" "}
        started requiring deployers to disclose AI-generated audio. Every asset also gets a provenance entry (voice ID, model version, prompt, consent scope, file hash, timestamp), which is the audit trail a brand&rsquo;s counsel and the SAG-AFTRA digital-replica paperwork both ask for.
      </p>
      <p>
        Every finding rolls up against the media plan, because &ldquo;asset 7 has a pace violation&rdquo; gets ignored and &ldquo;$650,000 of the plan is sitting behind a mispronounced brand name&rdquo; gets a meeting.
      </p>

      <h2>What the live run caught</h2>
      <p>
        I seeded four defects into the twelve scripts: an invented retail claim, a mispronounced product term, a 107-word script jammed into a :30, and a missing AI-disclosure line. On August 13 I ran it against the live APIs. Seven passed, five failed. All four seeded defects were caught, and $1.82M of the fictional brand&rsquo;s $2.8M plan sat behind creative that would have shipped with a problem in it.
      </p>
      <p>
        The fifth failure was the one I hadn&rsquo;t planted. The brand voice couldn&rsquo;t say the founder&rsquo;s name: &ldquo;Renata Oyelaran&rdquo; came back as &ldquo;renata ollerenshaw,&rdquo; in the hero spot, on the placement with the most money behind it. The script was fine, so nobody reading it would have caught that.
      </p>
      <p>
        There was one miss. Scribe quietly corrected two of the staged mispronunciations before my check could see them. That&rsquo;s the ceiling on checking pronunciation through a transcript; a real version needs phoneme-level alignment.
      </p>

      <h2>What to ask before you buy</h2>
      <p>
        If a vendor is pitching you on volume, ask what happens between the render and the ad server. Who or what checks each file against your brand standard, and what does it cost per asset? If the answer is a person, ask how that works at a thousand assets. If the answer is nothing, that&rsquo;s the risk you&rsquo;re carrying, and it&rsquo;s biggest in the markets where you can&rsquo;t judge the audio yourself.
      </p>
      <p>
        This is an MVP, not a product. Thresholds are hand-set, drift is a loudness proxy, and pronunciation runs off transcripts. I&rsquo;m building it out from here, starting with phoneme-level scoring. And if you know of something that already solves this that I&rsquo;m not aware of, please let me know.
      </p>
    </div>
  ),
  sources: [
    { title: "ElevenLabs — Ads Engine documentation", url: "https://elevenlabs.io/docs/overview/capabilities/ads-engine" },
    { title: "ElevenLabs — Speech to Text (Scribe v2) documentation", url: "https://elevenlabs.io/docs/overview/capabilities/speech-to-text" },
    { title: "EU AI Act — Article 50: Transparency obligations (applies 2 Aug 2026)", url: "https://artificialintelligenceact.eu/article/50/" },
    { title: "DoubleVerify — AI-powered brand suitability reporting for YouTube audio ads (June 11, 2026)", url: "https://doubleverify.com/company/newsroom/doubleverify-launches-ai-powered-brand-suitability-reporting-for-youtube-audio-ads-campaigns-expanding-transparency-in-listening-first-environments" },
    { title: "AudioStack — Adclear partnership announcement (Oct 28, 2025)", url: "https://audiostack.ai/en/blog/audiostack-adclear-partnership-announcement" },
    { title: "Adobe — GenStudio for Performance Marketing: Brand Compliance", url: "https://business.adobe.com/products/genstudio-for-performance-marketing/brand-compliance.html" },
  ],
};
