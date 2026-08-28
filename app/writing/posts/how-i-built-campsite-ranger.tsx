import type { Post } from "./types";

export const post: Post = {
  slug: "how-i-built-campsite-ranger",
  title: "337 commits in seven weeks: I built and launched Campsite Ranger solo with Claude Code",
  date: "Aug 27, 2026",
  readTime: "4 min",
  tag: "Builds",
  color: "from-emerald-800 to-amber-500",
  tldr: "Campsite Ranger is live at campsiteranger.com. It watches recreation.gov around the clock and emails you a booking link the moment a sold-out Colorado campsite, timed-entry permit, or wilderness zone opens in your dates, then keeps watching wildfire, smoke, and closure feeds so the trip is still worth the drive. It covers 49 Colorado locations: 43 campgrounds, 3 timed-entry permits, and 3 wilderness overnight zones. I designed, built, and launched it alone, 337 commits between July 8 and August 27, pairing with Claude Code across a Python monitoring worker on Fly.io, a Next.js and TypeScript web app backed by Supabase, email through Resend, and payments through Lemon Squeezy. A watch is free during the beta, a Trip Pass is $7, and the first hundred members lock in $25 a year for life. The larger point for anyone selling AI right now: the tools are good enough that the gap between a demo and a business is finishing.",
  content: (
    <div className="prose-content">
      <p>
        If you&rsquo;ve ever tried to book a summer weekend at a Colorado campground, you know the drill. The good sites release months out and are gone in minutes. After that your only shot is a cancellation, and catching one means refreshing recreation.gov at odd hours like it owes you money. I did that for weeks.
      </p>
      <p>
        So I built the thing that refreshes for you. Campsite Ranger went live this month at{" "}
        <a href="https://www.campsiteranger.com" target="_blank" rel="noopener noreferrer">campsiteranger.com</a>. I built every piece of it myself, with{" "}
        <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a> as my co-builder. The git log says 337 commits between July 8 and August 27.
      </p>
      <h2>It started as the friends-and-family edition</h2>
      <p>
        The first version was a favor. A Python script polled{" "}
        <a href="https://www.recreation.gov" target="_blank" rel="noopener noreferrer">recreation.gov</a>, diffed availability against the last check, and emailed my camping group a booking link when something matched. Nobody paid anything. Then sites that had been sold out for months opened for our exact dates and we booked them while everyone else was asleep. That&rsquo;s when a script starts wanting to be a product.
      </p>
      <h2>What shipped</h2>
      <p>
        Campsite Ranger watches 49 Colorado locations: 43 campgrounds from Rocky Mountain National Park to the Great Sand Dunes, timed-entry permits for RMNP, Mount Blue Sky, and Brainard Lake, and 3 wilderness zones in the Maroon Bells. When a cancellation opens inside your dates, you get an email with the booking link before the next person refreshes.
      </p>
      <p>
        The half no other tracker does: it keeps watching after you book. Active wildfires within 40 miles of your trip, official NPS closure alerts, smoke and weather. Grabbing the site is step one. Knowing the trailhead closed on Thursday is what saves the weekend.
      </p>
      <p>
        A watch is free during the beta. A Trip Pass is $7. The first hundred members lock in $25 a year for life, and the price goes to $49 after that.
      </p>
      <h2>Claude Code wrote most of the code. The business was still the hard part.</h2>
      <p>
        I&rsquo;ve spent fifteen years selling technology other people built: agency work at Crispin Porter + Bogusky, data at Oracle, edge infrastructure at Fastly, an AI acquisition product at Zeta. There was always an engineering team on the other side of the wall. This time there was a terminal.
      </p>
      <p>
        The loop was plain. I described what should exist, Claude Code wrote it, I read it, tested it, and shipped it or sent it back. It carried the syntax, the boilerplate, and most of the debugging. It couldn&rsquo;t carry any of the deciding. Which 49 locations out of hundreds. What an alert says at 6 a.m. so a groggy human taps the right link. What to cut, which was most things. What it costs. I was the product manager, the designer, the QA team, and the guy the QA team escalates to.
      </p>
      <p>
        That loop is the most useful sales training I&rsquo;ve had in years. I now know where these tools stop and a person has to start, because I hit that line a few hundred times in seven weeks. When a technical buyer asks what the model handles and what their team will still own, I can answer from my own git log.
      </p>
      <h2>The read for sellers</h2>
      <p>
        You don&rsquo;t need permission or an engineering org to ship something real. Pick a gripe you already understand better than anyone and build with the tools you sell until the thing runs at 2 a.m. without you. Writing the code got cheap this year. Deciding what to build and finishing it did not, and you only get better at those by shipping.
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
