import type { Post } from "./types";

export const post: Post = {
  slug: "iab-openproposal-audio-format-registry",
  title: "An agent can buy a host-read ad under the IAB's new standard. Nothing in it says what the host has to say.",
  date: "Nov 3, 2026",
  readTime: "5 min",
  tag: "Future of Ads",
  color: "from-violet-700 to-orange-500",
  tldr: "IAB Tech Lab extended public comment on OpenProposal, the AAMP 3.0 spec that lets AI agents compare and buy media proposals, to November 10. The draft lists audio, CTV and DOOH as channels an agent can buy, but the format registry it relies on for creative specs has no entries for any of them, and the spec says so in its own open questions. For audio, that means an agent can commit budget to a host-read spot with no machine-readable way to say how the brand name is pronounced or whether the voice may be synthetic. I filed a comment proposing audio registry entries and a provenance field on every asset. If you sell or buy audio, file yours before November 10.",
  content: (
    <div className="prose-content">
      <p>
        IAB Tech Lab gave the industry 19 more days. Public comment on AAMP 3.0 and OpenProposal, the draft standard for AI agents that read and buy media proposals, now closes Tuesday, November 10, instead of October 22. Tech Lab&rsquo;s{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://iabtechlab.com/press-releases/iab-tech-lab-introduces-aamp-3-0-with-openproposal/">announcement</a>{" "}
        says the extension came &ldquo;due to overwhelming feedback,&rdquo; and{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://ppc.land/iab-tech-lab-extends-ai-ad-buying-standard-comments-to-november-10/">ppc.land</a>{" "}
        reported it from Tech Lab&rsquo;s LinkedIn on October 23. The{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal">README on GitHub</a>{" "}
        still says October 22, so the press release got updated before the documentation, which makes Tech Lab exactly like every company I&rsquo;ve worked for.
      </p>
      <p>
        In September I{" "}
        <a href="/writing/iab-openproposal-agents-read-every-proposal">wrote</a>{" "}
        that sellers should try filling out a Proposal object for their best package and note the fields they couldn&rsquo;t complete. I went back to it with audio in mind, since that&rsquo;s where I&rsquo;ve been building this year. The gap is in the creative.
      </p>

      <h2>The spec knows audio exists</h2>
      <p>
        The{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/blob/main/spec/openproposal-3.0.md">draft</a>{" "}
        has 71 fields, and a line item&rsquo;s <code>channel</code>{" "}can be display, video, audio, CTV, DOOH or native. There&rsquo;s a{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/blob/main/examples/line-item-audio.yaml">worked audio example</a>: a streaming line item with a produced :30 included, a host read available for $9.00 more per thousand, a frequency cap counted per listener, a seller-reported 92% completion rate and a $60,000 commitment. An agent could resolve that buy without a human on either side.
      </p>
      <p>
        What the agent can&rsquo;t resolve is what the spot is. A line item&rsquo;s <code>formats</code>{" "}field holds ids like <code>audio/host-read-30s</code>, and its <code>specs</code>{" "}field is &ldquo;as defined by the referenced format registry entry.&rdquo; The draft&rsquo;s fourth open question says the registry &ldquo;has no entries for <code>audio/*</code>, <code>ctv/*</code>{" "}or <code>dooh/*</code>&rdquo; and &ldquo;cannot currently answer for half the declared channels.&rdquo; Credit to the working group for writing that down. Most drafts leave it for the implementers to find.
      </p>
      <p>
        I expected to write that this draft lets agents buy TV and not audio. That&rsquo;s wrong. The CTV example points at <code>ctv/instream-15s</code>, which resolves to nothing too. The difference is what breaks when the spec is missing. Video ads have moved through VAST for well over a decade, and a 15-second instream file is a known shape. Tech Lab{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://iabcanada.com/?p=7388">folded audio into VAST 4.1</a>{" "}
        in 2018, so delivery is covered for audio as well. What the draft has no way to describe is how the spot has to sound.
      </p>

      <h2>Where an audio ad goes wrong</h2>
      <p>
        Most brand review happens on the script. Audio has a failure that kind of review can&rsquo;t catch.
      </p>
      <p>
        In August I built an MVP called{" "}
        <a href="/writing/soundcheck-audio-brand-qa">Soundcheck</a>{" "}
        that checks AI-generated audio ads against a brand&rsquo;s standards before they air. On its first live run it flagged 5 of 12 spots in a simulated campaign. The defect with the most media money behind it was one I hadn&rsquo;t planted: the synthetic voice turned the founder&rsquo;s name, Renata Oyelaran, into &ldquo;renata ollerenshaw&rdquo; in the hero spot. The script was correct. Anyone reviewing it on paper would have signed off.
      </p>
      <p>
        A host read has its own version of this with a human voice. The seller&rsquo;s talent performs the creative, so the brand&rsquo;s mandatory copy and the way it says its own name have to reach the host somehow. Today that lives in a brief or an email. The draft&rsquo;s line item has no field for it.
      </p>
      <p>
        The <code>assets[]</code>{" "}object is thin too. It carries an asset id, a format reference, a URL or tag, a submission timestamp and an approval status. Nothing records whether the voice was synthetic. Article 50 of the EU AI Act has{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://artificialintelligenceact.eu/article/50/">applied since August 2</a>. It requires providers of generative systems to mark synthetic audio in a machine-readable format and requires deployers to disclose deepfake audio. Generative systems already on the market before August 2{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live">have until December 2</a>{" "}
        to add the marking. An agent buying audio in Europe needs to know what it&rsquo;s buying before it commits, and right now the object has nowhere to put it.
      </p>

      <h2>What I asked for</h2>
      <p>
        My comment proposes seeding the registry with produced :15, :30 and :60 audio formats plus host-read :30 and :60, each declaring a duration tolerance, codec, sample rate, a loudness target with a true-peak ceiling, and VAST delivery. It adds a host-read requirements object the buyer supplies, with mandatory copy, prohibited claims, a pronunciation guide, verbatim or talking points, and whether a synthetic voice is allowed. And it adds a provenance object to every asset: synthetic or not, the generator and model version, a voice-consent reference, the disclosure method and a file hash.
      </p>
      <p>
        The last ask is a fallback rule. If a format id has no registry entry, the line item should carry its specs inline, and the agent should treat that format as <code>requestable</code>, which in this draft means the seller has to say yes. Only three of the 71 fields need that round trip today. An unregistered audio format looks just as settled to an agent as a 300x250 banner, and it shouldn&rsquo;t.
      </p>
      <p>
        CTV and DOOH need the same fallback. I left their registry entries to people who sell those channels every day.
      </p>

      <h2>If you sell or buy audio</h2>
      <p>
        You don&rsquo;t need to be a Tech Lab member to comment, just a GitHub account. Every comment gets a written disposition, and the{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/blob/main/docs/comment-process.md">comment process</a>{" "}
        says &ldquo;implementation feedback outranks opinion,&rdquo; so one specific host read that went sideways will carry more weight than a general objection. Say you&rsquo;re filing in the extended window, because that same process doc still labels anything after October 22 as <code>post-comment</code>. Leave out client names and rates. The repo is public.
      </p>
      <p>
        I{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/IABTechLab/OpenProposal/issues/5#issuecomment-6619455053">filed mine</a>{" "}
        on issue #5, the format registry thread. Comments close November 10.
      </p>
    </div>
  ),
  sources: [
    { title: "IAB Tech Lab: IAB Tech Lab Introduces AAMP 3.0 to Standardize the RFP-to-Buy Process for Agentic Advertising (Sept 22, 2026; extension banner added Oct 2026)", url: "https://iabtechlab.com/press-releases/iab-tech-lab-introduces-aamp-3-0-with-openproposal/" },
    { title: "ppc.land: IAB Tech Lab extends AI ad-buying standard comments to November 10", url: "https://ppc.land/iab-tech-lab-extends-ai-ad-buying-standard-comments-to-november-10/" },
    { title: "IAB Tech Lab: OpenProposal 3.0 draft specification (GitHub)", url: "https://github.com/IABTechLab/OpenProposal/blob/main/spec/openproposal-3.0.md" },
    { title: "IAB Tech Lab: OpenProposal audio line item example, spec § 6.4 (GitHub)", url: "https://github.com/IABTechLab/OpenProposal/blob/main/examples/line-item-audio.yaml" },
    { title: "IAB Tech Lab: OQ-4, the format registry has no entries for audio, CTV or DOOH (GitHub issue #5)", url: "https://github.com/IABTechLab/OpenProposal/issues/5" },
    { title: "IAB Tech Lab: OpenProposal public comment process (GitHub)", url: "https://github.com/IABTechLab/OpenProposal/blob/main/docs/comment-process.md" },
    { title: "IAB Canada: IAB Tech Lab releases VAST 4.1, integration of DAAST audio (2018)", url: "https://iabcanada.com/?p=7388" },
    { title: "EU AI Act, Article 50: Transparency obligations", url: "https://artificialintelligenceact.eu/article/50/" },
    { title: "Baker Botts: EU AI Act Article 50 transparency obligations go live (Sept 2026)", url: "https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live" },
  ],
};
