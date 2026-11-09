import type { ReactNode } from "react";
import type { Post } from "./types";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export const post: Post = {
    slug: "seller-who-builds-agents-on-my-calendar",
    title: "I run eight AI agents. One of them is allowed to email my customers.",
    date: "Nov 8, 2026",
    readTime: "4 min",
    tag: "Builds",
    color: "from-emerald-800 to-amber-500",
    tldr: "I run eight scheduled AI agents around my sales job and my side business. Most of them research or draft, and a person ships what they make. One sends customer email by itself, and it earned that by passing a preflight the day before, with automatic stops for bounces and complaints. Anything that writes to production data or speaks for me somewhere new still waits for me. Enterprise buyers are trying to draw this same line right now. If you sell agents, draw yours first.",
    content: (
      <div className="prose-content">
        <h2>The selling problem</h2>
        <p>
          Every buyer I talk to about AI wants two answers. What will it do on its own, and what happens when it&apos;s wrong? The first one is easy to answer with a demo. The second is where deals stall.
        </p>
        <p>
          Hiring managers have noticed. Betts Recruiting <A href="https://bettsrecruiting.com/blog/how-to-evaluate-ai-fluency-when-hiring-gtm-candidates/">wrote in June</A>{" "}that &ldquo;individual reps are increasingly responsible for managing multiple AI agents,&rdquo; and that pay for GTM roles requiring AI fluency is running at least 20% above average salaries. In February, Vanta CRO Stevie Case <A href="https://review.firstround.com/executive-function-stevie-case-cro-vanta">described senior leaders</A>{" "}&ldquo;watching it and speaking to it, but not participating.&rdquo; You can&apos;t answer the buyer&apos;s second question from the bleachers.
        </p>
        <p>
          I&apos;ve sold for 16 years, starting on the creative side at CP+B and moving through Oracle Advertising, Fastly and Zeta Global. I sell what buyers don&apos;t have a budget for yet, and agents fit that description for most of the companies I call on. So I built some and put them to work on my own week.
        </p>

        <h2>What&apos;s on the calendar</h2>
        <p>
          Every one of these is a Claude scheduled task. Each runs on a timer and leaves its output where I&apos;ll find it in the morning.
        </p>
        <p>
          For my day job, a weekday brief reads trade press, earnings and people moves across my book of accounts. Each finding gets a &ldquo;so what&rdquo; and a next action, and the agent drafts the outreach. It never sends. I&apos;ve read enough AI-written prospecting email to want my name kept off that pile.
        </p>
        <p>
          Most of the crew works for Campsite Ranger, the Colorado campsite-cancellation alert service I built solo with Claude Code (337 commits in seven weeks, launched in August). A daily watcher catches press coverage and drafts a thank-you note to the reporter. A weekly social strategist plans posts and writes them onto my calendar, and I post them myself. A weekly refresher turns cancellation data into stats a reporter can quote. Then there&apos;s customer email, which gets its own section, and a one-time production database change to end the beta.
        </p>
        <p>
          The last two are for my own writing. One refreshes voice-lint, the linter I wrote to flag AI-writing tells, twice a month. Yes, I built a robot to catch me sounding like a robot. The other is a weekly content strategist for this site.
        </p>
        {/* COST-LINE: pending Chris's monthly cost number. Insert as a short paragraph here, or delete this comment if he says cut it. */}

        <h2>Where I draw the line</h2>
        <p>
          Research and drafting run without me. If the account brief gets something wrong, I catch it before anyone else reads it, so the worst case is five wasted minutes.
        </p>
        <p>
          Customer email was the hard call. At first, every campaign waited for my approval. Then I added a preflight that runs the day before the send, plus automatic stops. If the bounce rate goes over 2% or complaints go over 0.1%, the send halts without asking me. Once that existed, my approval step was me clicking yes on a report I&apos;d already read. So I took it out, and the campaigns send themselves now.
        </p>
        <p>
          The database change that ends the beta still waits for my explicit OK. So does anything that speaks for me in a way I haven&apos;t done before, like a first note to a new reporter or a post in a new channel. The test I use has two questions. Can I undo it? Has the agent done this exact job before, behind a gate that would have caught a failure? If either answer is no, a person signs.
        </p>

        <h2>What it taught me about selling agents</h2>
        <p>
          Enterprise buyers are drawing the same line, mostly in security reviews and procurement calls. Since I started running my own, I&apos;ve changed how those calls go. I spend less time on what the agent can do and more on which of the buyer&apos;s tasks can be undone, and what number would stop a send automatically. That conversation gets to a pilot faster than any demo I&apos;ve given.
        </p>
        <p>
          It changes the pilot too. At Zeta Global I turned a $200K pilot into a $1M+ contract on performance, and that worked because the pilot had a result both sides could check. An agent pilot needs that plus a stop rule with a number on it, and the buyer should be the one who picks the number. Mine are 2% and 0.1%. Theirs will come from whatever their compliance team loses sleep over.
        </p>
        <p>
          Sellers who&apos;ve drawn the line on their own work can answer the buyer&apos;s second question with specifics. Before your next agent pitch, pick one task you&apos;d let run without you and write down the number that would stop it.
        </p>
      </div>
    ),
    sources: [
      { title: "Betts Recruiting: How to Evaluate AI Fluency When Hiring GTM Candidates (June 4, 2026)", url: "https://bettsrecruiting.com/blog/how-to-evaluate-ai-fluency-when-hiring-gtm-candidates/" },
      { title: "First Round Review: Why 90% of CROs will fall behind in the next 2 years, Stevie Case, Vanta (Feb 19, 2026)", url: "https://review.firstround.com/executive-function-stevie-case-cro-vanta" },
    ],
};
