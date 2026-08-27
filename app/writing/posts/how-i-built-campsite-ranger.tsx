import type { Post } from "./types";

export const post: Post = {
    slug: "how-i-built-campsite-ranger",
    title: "337 commits in seven weeks: I built and launched Campsite Ranger solo with Claude Code",
    date: "Aug 27, 2026",
    readTime: "5 min",
    tag: "Builds",
    color: "from-emerald-800 to-amber-500",
    tldr: "Campsite Ranger is live at campsiteranger.com. It watches recreation.gov around the clock and emails you a booking link the moment a sold-out Colorado campsite, timed-entry permit, or wilderness zone opens in your dates, then keeps watching wildfire, smoke, and closure feeds so the trip is still worth the drive. It covers 49 Colorado locations: 43 campgrounds, 3 timed-entry permits, and 3 wilderness overnight zones. I designed, built, and launched it alone, 337 commits between July 8 and August 27, pairing with Claude Code across a Python monitoring worker on Fly.io, a Next.js and TypeScript web app backed by Supabase, email through Resend, and payments through Lemon Squeezy. A watch is free during the beta, a Trip Pass is $7, and the first hundred members lock in $25 a year for life. The larger point for anyone selling AI right now: the tools are good enough that the gap between a demo and a business is finishing.",
    content: (
      <div className="prose-content">
        <p>
          If you&rsquo;ve ever tried to book a summer weekend at a Colorado campground, you know the drill. The good sites release months out and are gone in minutes. After that, your only shot is a cancellation, and catching one means refreshing recreation.gov at odd hours like it owes you money. People do this for weeks. I did this for weeks.
        </p>
        <p>
          So I built the thing that refreshes for you. It&rsquo;s called Campsite Ranger, it went live this month at{" "}
          <a href="https://www.campsiteranger.com" target="_blank" rel="noopener noreferrer">campsiteranger.com</a>, and I built every piece of it myself: product, design, code, infrastructure, payments, and the support inbox. My co-builder was{" "}
          <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>. The git log says 337 commits between July 8 and August 27.
        </p>
        <h2>It started as the friends-and-family edition</h2>
        <p>
          The first version was a favor. A Python script polled{" "}
          <a href="https://www.recreation.gov" target="_blank" rel="noopener noreferrer">recreation.gov</a>, diffed availability against the last check, matched openings to what each person wanted, and sent an email with a booking link. Poller, diff engine, matcher, email. SQLite underneath. My camping group got alerts; nobody paid anything; it worked.
        </p>
        <p>
          Then it kept working. Sites that had been sold out for months opened for our exact dates, and we booked them while everyone else was asleep. That is the moment a script starts wanting to be a product, and I decided to find out what it would take to get it there alone.
        </p>
        <h2>What shipped</h2>
        <p>
          Campsite Ranger now watches 49 Colorado locations: 43 campgrounds from Rocky Mountain National Park to the Great Sand Dunes, the timed-entry permits for RMNP, Mount Blue Sky, and Brainard Lake, and 3 wilderness overnight zones in the Maroon Bells, including Conundrum Hot Springs. When a cancellation opens inside your dates, you get an email with the booking link before the next person refreshes.
        </p>
        <p>
          The half no other tracker does: it keeps watching after you book. Active wildfires from the National Interagency Fire Center&rsquo;s WFIGS feed within 40 miles of an RMNP trip, official NPS closure and danger alerts, smoke and weather. Grabbing the site is step one. Knowing the trailhead closed on Thursday is what saves the weekend.
        </p>
        <p>
          Setting a watch is free during the beta. A Trip Pass is $7. The first hundred members lock in a Founding Ranger rate of $25 a year forever, and the price goes to $49 after that. Payments run through Lemon Squeezy, sign-in is a one-tap email link with no password, and the coverage map is drawn by MapLibre on a Next.js and TypeScript app backed by Supabase, with the monitoring worker running around the clock on Fly.io.
        </p>
        <h2>Claude Code wrote most of the code. The business was still the hard part.</h2>
        <p>
          I&rsquo;ve spent fifteen years selling technology other people built: agency work at Crispin Porter + Bogusky, data at Oracle, edge infrastructure at Fastly, an AI acquisition product at Zeta. There was always an engineering team on the other side of the wall. This time there was a terminal.
        </p>
        <p>
          The working loop was plain. I described what should exist, Claude Code wrote it, I read it, tested it, and shipped it or sent it back. It carried the syntax and the boilerplate and most of the debugging. What it couldn&rsquo;t carry was any of the deciding. Which 49 locations, out of hundreds. What an alert says at 6 a.m. so a groggy human taps the right link. What to cut, which was most things. What it costs. When a payment webhook failed during launch prep, the model helped me read the logs, but the person on the hook for the fix was the same person who wrote the marketing copy. I was the product manager, the designer, the QA team, and the guy the QA team escalates to.
        </p>
        <p>
          That loop is also the most useful sales training I have had in years. I sell AI for a living, and I now know exactly where these tools stop and a person has to start, because I hit that line a few hundred times in seven weeks. When a technical buyer asks what the model handles and what their team will still own, I can answer from my own git log.
        </p>
        <h2>The read for sellers</h2>
        <p>
          You don&rsquo;t need permission, a budget line, or an engineering org to ship something real anymore. Pick a gripe you already understand better than anyone, and build with the tools you sell until the thing runs at 2 a.m. without you. The coding has stopped being the moat. Deciding and finishing still are, and those you can only learn by shipping.
        </p>
        <p>
          The ranger in the logo is my dog, Berkeley. She&rsquo;s the only other member of the team, and she slept through every deploy.
        </p>
      </div>
    ),
    sources: [
      { title: "Campsite Ranger — live site", url: "https://www.campsiteranger.com" },
      { title: "Recreation.gov — federal campground and permit reservations", url: "https://www.recreation.gov" },
      { title: "Claude Code — Anthropic", url: "https://claude.com/claude-code" },
      { title: "NIFC — Wildland Fire Interagency Geospatial Services (WFIGS)", url: "https://data-nifc.opendata.arcgis.com" },
      { title: "NPS — Rocky Mountain National Park alerts & conditions", url: "https://www.nps.gov/romo/planyourvisit/conditions.htm" },
    ],
};
