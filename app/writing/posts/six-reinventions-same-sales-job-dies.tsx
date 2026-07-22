import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "six-reinventions-same-sales-job-dies",
    title: "Six technology shifts later, the same sales job keeps dying",
    date: "Jul 11, 2026",
    readTime: "7 min",
    tag: "Sales",
    color: "from-amber-600 to-orange-500",
    tldr: "Broadcast to digital to social to programmatic to data to AI — I've carried a quota through all six shifts. Up close they look like six separate disruptions; they're the same one on repeat. Each wave automates the seller who runs a manual mechanic — the media buy, the campaign build, the list, the report — and pays more for the seller who can take a capability nobody understands yet, build the category in the buyer's head, and get a novel budget approved. The pattern predicts which sales jobs AI absorbs next: the executional ones. The safe ground is the ambiguous, trust-heavy, category-creating work, same as it's been every time. Point your career and your hiring there.",
    content: (
      <div className="prose-content">
        <p>
          I started selling when &ldquo;digital&rdquo; was the scary word, the thing agency people said in meetings to sound ahead of it right before it ran them over. Since then the ground under the job has moved six times: broadcast to digital to social to programmatic to data to AI. Every one of those waves arrived with a chorus of smart people announcing the salesperson was finished. Every one of them was half right. A specific kind of seller was finished each time, and a different kind woke up more valuable. After the sixth round you stop counting six disruptions and start seeing one pattern.
        </p>
        <p>
          When programmatic hit display, the media seller who had built a career on knowing the manual buy &mdash; who to call at which publisher, how to hand-negotiate a placement over lunch &mdash; watched the machine do in milliseconds the thing that made them worth their number. That seller didn&apos;t get more efficient. They got replaced, because the value they sold was the mechanic, and the mechanic got automated.
        </p>
        <h2>The job that dies is always the mechanic</h2>
        <p>
          Same casualty every time. The role that gets automated is the one paid to run a manual process a machine can now run: the hand-placed media buy, the list built by hand, the campaign trafficked by hand, the report pulled by hand. Broadcast rewarded the person who owned the relationships and the rate card. Digital automated the trafficking. Social rewarded whoever could work the platforms, programmatic automated the buying, data automated the targeting. Each wave ate the executional layer under the one before it. If your value was doing the thing quickly and correctly, the machine eventually did it more quickly and more correctly, and your leverage left with it.
        </p>
        <h2>The one that survives sold it before it had a name</h2>
        <p>
          The seller who came out ahead every time did the opposite work. They took a capability the buyer didn&apos;t understand yet, that had no line in anyone&apos;s budget, and turned it into an outcome someone would sign for. At Zeta I sold the first email-based AI acquisition product into brands that had no category for it, let alone a budget. The demo was never the hard part. The hard part was building the idea in the buyer&apos;s head until the money appeared, convincing a CMO to bet a number on something none of her peers had bought yet. No wave of automation has touched that job in thirty years of me watching, because it runs on trust and judgment in a room, and those don&apos;t come off an assembly line.
        </p>
        <h2>Point AI at the same pattern and read the result</h2>
        <p>
          AI SDRs are automating first-touch prospecting, and the{" "}
          <Link href="/writing/ai-sdr-boom-revolving-door-churn" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">churn numbers show what happens</Link> when you over-automate it. GEO is chipping at demand gen. Agents are drafting the email, the deck, the follow-up. That is the mechanic again, one layer up. What it isn&apos;t reaching is the multi-stakeholder, novel-budget, nobody-owns-this-yet deal, which is exactly why go-to-market is the{" "}
          <Link href="/writing/ai-labs-hiring-salespeople-which-sales-jobs-last" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">biggest hiring category at the labs</Link>: once a purchase involves five nervous people, a budget that doesn&apos;t exist, and procurement, the work goes back to a human. Same prediction as programmatic, same as data. The transactional single-mechanic roles get thinner, the ambiguous category-creating ones get richer.
        </p>
        <h2>This time the mechanic sits higher up</h2>
        <p>
          I&apos;m not going to pretend this wave is a carbon copy. Two things can be true. The pattern holds, and AI climbs the skill ladder faster and higher than programmatic did &mdash; it doesn&apos;t just run the buy, it drafts the pitch, models the account, writes the first version of the strategy. The mechanic it&apos;s automating this time sits well above the one programmatic took. That should make anyone whose value is &ldquo;I produce competent sales output&rdquo; nervous, because competent output is getting cheap. But the top of the ladder, a person getting a room full of skeptical stakeholders to commit real money to something unproven, is still the last rung to automate, because it was never a skill you could write down. It is a relationship someone chooses to extend to you.
        </p>
        <h2>Where to stand</h2>
        <p>
          If you&apos;re building a sales career, move toward the ambiguous end every time the tools get better. Sell the things that don&apos;t have a budget line yet. Get good at creating a category in a buyer&apos;s mind, not at running a motion someone can hand to an agent next year. And if you&apos;re hiring sellers for an AI company, stop over-indexing on people who ran the old mechanic cleanly. Screen for the ones who&apos;ve sold something before the market had a name for it. That&apos;s the one sales skill that has survived all six reinventions I&apos;ve worked through, and it&apos;ll survive this one too.
        </p>
      </div>
    ),
};
