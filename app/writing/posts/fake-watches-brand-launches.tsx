import type { Post } from "./types";

export const post: Post = {
    slug: "fake-watches-brand-launches",
    title: "The fake watches were better — and that should terrify every brand",
    date: "May 20, 2026",
    readTime: "5 min",
    tag: "Brands",
    color: "from-violet-600 to-purple-500",
    tldr: "AI-generated renders of the Swatch x AP collab circulated for weeks before the real product dropped — and the internet preferred the imagined version. The white space between tease and reveal isn't yours anymore. Brands that figure out how to make that a feature instead of a bug will define the next decade of launches.",
    content: (
      <div className="prose-content">
        <p>
          Justin Taylor published a piece today on his Substack{" "}
          <a href="https://thelandingpad.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">The Landing Pad</a>{" "}
          that I haven&apos;t stopped thinking about. The short version: Swatch and Audemars Piguet teased
          a collab. Before the actual reveal, the internet generated and shared fifty AI versions of what it should
          be &mdash; colorful Royal Oaks in every Pantone shade you can imagine. When the real product dropped (a
          pocket watch), people were deflated. The imagined version had already won.
        </p>
        <p>
          <a href="https://thelandingpad.substack.com/p/the-fake-watches-were-better" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Go read the whole thing.</a>{" "}
          It&apos;s worth ten minutes.
        </p>
        <p>
          This part really stood out to me:
        </p>
        <div className="my-8 pl-6 border-l-4 border-violet-400">
          <p className="text-xl italic text-slate-700 leading-relaxed" style={{ fontFamily: "var(--font-fraunces)" }}>
            &ldquo;You&apos;re not launching a product anymore. You&apos;re correcting one.&rdquo;
          </p>
        </div>
        <p>
          The watch is almost beside the point. Every product launch is going to work like this now.
        </p>

        <h2>The economics of brand storytelling have flipped</h2>
        <p>
          For a long time, the asymmetry favored brands: they had the photographers, the budgets, the agencies, the
          distribution. A teaser bought you two weeks of anticipation because nobody else could fill that space at
          scale. Now anyone with a prompt and ten minutes can produce something that looks more polished than the
          official campaign and spreads faster than the brand&apos;s own channels. The white space between tease and
          reveal isn&apos;t white anymore. It&apos;s already full of someone else&apos;s version of your product.
        </p>
        <p>
          And it doesn&apos;t stop at the campaign. Justin points out that people are already designing third-party
          straps for the Royal Pop. Aftermarket used to be a slow, niche business that required CNC machines and
          distribution. Now it&apos;s a weekend project. Your audience has already designed their version of your
          product before you&apos;ve shipped it.
        </p>

        <h2>The move most brands won&apos;t make</h2>
        <p>
          The strongest moment in the piece is where Justin asks: what if you just stopped trying to outrun it? What if the tease was the invitation, and the brand built the campaign around the best community renders
          instead of trying to outrun them? You don&apos;t lose control of the narrative because you never claimed
          it. You hand it to the people who were going to take it anyway and let them feel like they made it with you.
        </p>
        <p>
          I think he&apos;s right, and I think the brands that figure this out first are going to look obvious in
          retrospect &mdash; the same way the early creator-economy brands look obvious now. The ones that don&apos;t
          are going to spend the next five years correcting launches instead of running them.
        </p>
        <p>
          This isn&apos;t a social media problem. It&apos;s not a community management problem. The window between
          announcement and arrival used to be yours. Now it belongs to your audience, and the only real question is
          whether you see that as a threat or an opening.
        </p>
        <p>
          The brands still building launch playbooks around tease-and-reveal cadences are writing strategy documents
          for a world that no longer exists.
        </p>
        <p>
          Read Justin&apos;s full piece:{" "}
          <a href="https://thelandingpad.substack.com/p/the-fake-watches-were-better" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2"><em>The fake watches were better</em></a>.
          Subscribe to{" "}
          <a href="https://thelandingpad.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">The Landing Pad</a>{" "}
          while you&apos;re there.
        </p>
      </div>
    ),
};
