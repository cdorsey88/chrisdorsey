import type { Post } from "./types";

export const post: Post = {
  slug: "iab-artf-patch-log-stays-with-host",
  title: "The IAB's agent auction standard has an audit log, and the spec only promises it inside the platform running the agent",
  date: "Nov 23, 2026",
  readTime: "4 min",
  tag: "Future of Ads",
  color: "from-slate-700 to-sky-600",
  tldr: "IAB Tech Lab declared version 1.0 of its Agentic RTB Framework final on August 12. It puts third-party agents, packaged as containers, inside an exchange's or ad platform's own environment to propose changes to bid requests and responses. The platform that hosts the agent decides which fields it sees and which changes to accept, and the spec says each change is logged for auditability within that platform's environment. I searched the full text of the spec, and it doesn't use the words liability, accountability or attestation. A technical spec isn't a contract, so the question moves to the contract. If you buy or sell through a platform that hosts agents, ask who can read the patch log.",
  content: (
    <div className="prose-content">
      <p>
        IAB Tech Lab opened the Agentic RTB Framework (ARTF) for public comment on November 13, 2025, and <a href="https://iabtechlab.com/a-milestone-for-the-agentic-advertising-ecosystem/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">declared version 1.0 final</a>{" "}on August 12, 2026. The idea is that small AI agents, built by one company, run inside another company&rsquo;s ad exchange or bidding platform. Fraud detection and deal curation are two of the examples the spec gives.
      </p>

      <h2>
        How it works
      </h2>

      <p>
        Each agent is a container, a sealed package that runs in the host&rsquo;s infrastructure with no network access except to the host. <a href="https://github.com/IABTechLab/agentic-real-time-framework" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">The spec</a>{" "}calls the host the orchestrator, meaning an SSP, a DSP or an exchange. The agent never edits the auction directly. It proposes patches, each one a single change to a bid request or response, and the orchestrator accepts or rejects each patch on its own.
      </p>

      <p>
        The security section asks for signed images, an auditable build pipeline, and logging and monitoring with OpenTelemetry. On auditing the auction itself it says one thing: patches facilitate auditability &ldquo;within an orchestrator&rsquo;s environment&rdquo; by logging the requested and applied patches.
      </p>

      <h2>
        Who can read the log
      </h2>

      <p>
        So the platform hosting the agent holds the record of what the agent asked for and what got applied. The spec doesn&rsquo;t say a buyer or a publisher can read it. The only identity it gives an agent is the container&rsquo;s manifest and its signed image.
      </p>

      <p>
        I searched the full text. Liability, accountability and attestation don&rsquo;t appear, and the word audit shows up twice, once for the build pipeline and once for the patch log. Standards bodies and sales teams share a habit: the hard question goes in the other document.
      </p>

      <h2>
        Where my comment fits
      </h2>

      <p>
        In early November I commented on the Tech Lab&rsquo;s <a href="https://github.com/IABTechLab/OpenProposal/issues/5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">OpenProposal draft</a>, the part of AAMP 3.0 where a buyer&rsquo;s agent and a seller agree on a deal. I asked for a provenance block on assets, with fields for whether the audio is synthetic, which tool made it, a consent reference and a content hash. A maintainer replied that a pull request adds provenance as an optional asset field.
      </p>

      <p>
        OpenProposal puts a record on the ad itself, where the buyer can see it. ARTF keeps the record of an agent&rsquo;s behavior on the host&rsquo;s side. The ARTF spec never mentions OpenProposal or AAMP, and the OpenProposal README doesn&rsquo;t mention ARTF, so as far as I can tell nothing links what was agreed to what ran in the auction.
      </p>

      <h2>
        What to ask for
      </h2>

      <p>
        A technical standard isn&rsquo;t supposed to assign blame. Two things can be true: that&rsquo;s a reasonable place for the IAB to stop, and an auction that runs on this spec still needs someone who answers when an agent&rsquo;s patch costs a buyer money. That job falls to the contract between the buyer and the platform. PPC Land <a href="https://ppc.land/bedrock-becomes-first-dsp-to-run-its-bidder-inside-an-exchange/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">reported in April</a>{" "}that Bedrock became the first DSP to run its bidder inside an exchange, so those contracts are already being written.
      </p>

      <p>
        If you buy or sell through a platform that hosts agents, ask in the contract who can read the patch log.
      </p>

      <p>
        The Tech Lab says version 2.0 is under active discussion in the working group, and its standards page lists no open comment window.
      </p>
    </div>
  ),
  sources: [
    { title: "IAB Tech Lab: A milestone for the agentic advertising ecosystem (Aug 12, 2026)", url: "https://iabtechlab.com/a-milestone-for-the-agentic-advertising-ecosystem/" },
    { title: "IAB Tech Lab: Agentic RTB Framework (ARTF) v1.0 final, specification text", url: "https://github.com/IABTechLab/agentic-real-time-framework" },
    { title: "IAB Tech Lab: Announces Agentic RTB Framework v1.0 for public comment (Nov 13, 2025)", url: "https://iabtechlab.com/press-releases/iab-tech-lab-announces-agentic-rtb-framework-artf-v1-0-for-public-comment/" },
    { title: "IAB Tech Lab OpenProposal, issue #5 (provenance and audio format registry thread)", url: "https://github.com/IABTechLab/OpenProposal/issues/5" },
    { title: "PPC Land: Bedrock becomes first DSP to run its bidder inside an exchange (Apr 25, 2026)", url: "https://ppc.land/bedrock-becomes-first-dsp-to-run-its-bidder-inside-an-exchange/" },
  ],
};
