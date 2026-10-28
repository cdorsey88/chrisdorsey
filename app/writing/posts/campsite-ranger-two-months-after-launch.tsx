import type { ReactNode } from "react";
import type { Post } from "./types";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export const post: Post = {
    slug: "campsite-ranger-two-months-after-launch",
    title: "Campsite Ranger, two months after launch",
    date: "Oct 28, 2026",
    readTime: "7 min",
    tag: "Builds",
    color: "from-emerald-800 to-amber-500",
    tldr: "Campsite Ranger launched August 27 covering 49 Colorado locations. It now covers 89 campgrounds plus permits and wilderness zones, about 600 people have accounts, and 96 have paid $25 to become Founding Rangers. Most of that growth came from two newspaper stories in early October. Our cancellation data shows 96.8% of openings were still bookable about 93 seconds after we spotted them, which is why the product sends alerts and won’t ask for your recreation.gov password. The annual membership price increases to $40 when the last four Founding Ranger spots sell, and I’m deciding at the end of February whether this is a real business. (Regardless, I’ll maintain existing functionality. I just may not keep innovating.)",
    content: (
      <div className="prose-content">
        <p>
          I wrote about <a href="/writing/how-i-built-campsite-ranger">launching Campsite Ranger</a> on August 27, after seven weeks of nights and weekends building it with Claude Code and the help of a couple friends. A lot has happened in the eight weeks since, and I want it written down while I still remember how it felt.
        </p>
        <p>
          <strong>If you missed the first post:</strong> Campsite Ranger watches recreation.gov and emails you when a sold-out Colorado campsite or permit opens for your dates. It also flags inclement weather, wildfire, smoke and park closures near your trip so you know if it’s still worth going. If it isn’t, it proactively sends you the best alternatives within a three-hour drive of your original destination and offers to start watching those areas for cancellations.
        </p>
        <p>
          As of this morning, 96 of the 100 Founding Ranger spots are sold. When the last four go, the beta ends and the annual price moves from $25 to $40. I’ve written plenty of “limited time” copy in my career. This is the first deadline I’ve written that you can check by refreshing a page, which, for a company built to stop people refreshing pages, I’ll allow just in this instance.
        </p>

        <h2>What two newspaper stories did</h2>
        <p>
          For most of September I marketed Campsite Ranger the way I’d sell anything. I posted in Colorado camping Facebook groups, including one where the admin let me in on the condition that I not be salesy, which is the first time a prospect has set terms before I opened my mouth, haha! I commented on Reddit and emailed bloggers. People signed up, just painfully slowly.
        </p>
        <p>
          Then the <A href="https://www.arvadapress.com/news/environment/article_61a982d8-e3d1-48fd-9d67-5cae92ada02a.html">Arvada Press</A> ran a story on October 5, and <A href="https://woodallscm.com/colo-resident-launches-tool-to-monitor-park-cancellations/">Woodall’s Campground Magazine</A> picked it up the next day. Two days later <A href="https://coloradosun.com/2026/10/08/new-websites-helps-campers-score-top-campsites-in-colorado/">The Colorado Sun</A> ran Dan England’s piece, which <A href="https://www.hppr.org/hppr-news/2026-10-09/new-website-is-helping-campers-score-colorados-most-elusive-campsites">High Plains Public Radio</A> republished and the <A href="https://www.denvergazette.com/outtherecolorado/2026/10/09/new-website-makes-it-easier-to-book-a-spot-at-popular-campsites/">Denver Gazette</A> linked to. Accounts went from about 300 to more than 500 in a few days. Almost every sign-up I can’t trace to a friend came from one of those two stories.
        </p>
        <p>
          The Sun story barely gets to features until halfway down. Dan opened with Sloane, my daughter, who smacked the glass door to our deck before she could walk because she wanted outside. Then he told Kathryn’s story. She’s a close friend who had mostly given up on camping since becoming a parent to two children under three. She set a free watch on the east side of Rocky Mountain National Park, got an email the weekend before Labor Day about a cancellation, and booked the campsite. Two days later, she and her husband packed up the rooftop carrier, put the kids in the car, and made it an awesome, memory-filled weekend that would’ve been missed without Campsite Ranger.
        </p>
        <p>
          I know it sounds super fundamental, but if you’re pitching press for anything, start with the person who benefited. The reporter is going to build the story around a person whether you supply one or not. My pitches now lead with why I built this and run under 300 words. Dan England told it better than I ever could have, and I owe him for it, big time. The man has climbed every 14er in Colorado, he’s full of incredible advice and stories, and he cares about people.
        </p>
        <p>
          More coverage is coming. I talked with the Grand Junction Daily Sentinel on Tuesday, Rocky Mountain PBS is on Friday, and Mile High Mamas is running a guest post from me.
        </p>

        <h2>What shipped</h2>
        <p>
          Text alerts went live October 20, once the carrier registration Twilio requires finally cleared. Members can reply GOT or MISSED to an alert text, so I find out whether it led to a booking. Backup buddy lets an annual member add one friend who gets the same alerts, for the afternoon you’re stuck in a meeting when your site opens. In our promo videos my wife Alexis’s backup buddy is her mom, Simone, which was the most realistic casting available to me.
        </p>
        <p>
          If the forecast or a fire threatens your dates, you now get an email with nearby campgrounds that look clear for the same nights, each with a button that sets the watch. Coverage went from 49 locations to 89 campgrounds, partly because members asked for specific places, including a fire lookout tower. And any membership bought now, gift memberships included, doesn’t start counting its year until January 1.
        </p>

        <h2>What 5,483 openings taught me about booking</h2>
        <p>
          Because the system checks campgrounds around the clock, it also produces data. The <A href="https://campsiteranger.com/data/cancellations">first public report</A> covers 5,483 openings at 13 Colorado campgrounds from September 12 to October 19. The busiest hour was 8 a.m. Mountain, with 496 openings. Midnight to 6 a.m. accounted for about 3%. The typical opening appeared five days before arrival, and 61% landed within six days, which lines up with recreation.gov’s cancellation cutoff of zero to four days out. And 31% of site-nights opened more than once, so a site somebody already grabbed is still worth watching.
        </p>
        <p>
          The number that changed how I build is 96.8%. Before any alert goes out, the system reads the site a second time, a median of about 93 seconds later. Almost every opening was still there.
        </p>
        <p>
          The loudest idea in campsite tech this fall is automated booking. You give a service your recreation.gov username and password, and its bot books for you. I understand the appeal. I also sell marketing technology for a living and write about AI agents acting for consumers, most recently about <a href="/writing/salesforce-braze-personal-agents-channel">Salesforce naming personal agents as a channel</a> when it bought Braze. Building Campsite Ranger made one part of that story concrete for me in a way the sales side never did. Asking for someone’s password is a big ask, and for a federal reservation account the downside lands on the customer if the company holding it gets breached or goes under.
        </p>
        <p>
          My data says most people have about a minute and a half once they’re alerted, so I’m not storing anyone’s password. The work went into shrinking that minute and a half: alert links that open the recreation.gov app, a “Ready to Book” checklist so you’re signed in with payment saved before the alert lands, and home-screen notifications for members.
        </p>

        <h2>Running it with a day job and a toddler</h2>
        <p>
          I have a full-time job and a two-and-a-half-year-old, and Campsite Ranger gets nights and weekends. Running it turned out to be a different job from building it, mostly support email, making sure alerts still fire, and chasing press.
        </p>
        <p>
          A lot of that now runs on AI agents with a schedule. Each morning one checks that the system is healthy and another drafts press pitches and flags Reddit threads I might answer. A third turns the support inbox into a to-do list on Mondays, Wednesdays and Fridays. None of them sends anything to a customer or a reporter. I read it and I hit send.
        </p>
        <p>
          I stopped trusting my own status notes in September, when a piece of the system sat undeployed for 16 days while my docs said it was live. Now nothing counts as live until the running system confirms it.
        </p>
        <p>
          Some of the marketing has nothing to do with AI. There are flyers at Sloane’s daycare, at my parents’ 55+ community lodge and at my office.
        </p>
        <p>
          Early in my career a manager told me my highs were too high and my lows were too low. I still hear it. A one-person company makes it harder, because every sale and every bug lands on the same person, usually after 9 p.m. What helps is writing the decision down before I react and looking at the numbers again in the morning. Sloane still wants to be outside every day, and most evenings that means a walk around the lake by our house looking for foxes.
        </p>

        <h2>What’s next</h2>
        <p>
          When the last four Founding spots sell, the annual plan goes to $40 through December 31 and $49 after that. One watch stays free. I don’t know yet whether people who have never met me will pay $40 for what early users got for $25. Colorado’s summer booking season starts in January, and I’ve set February 28 as the day I look at the real numbers and decide whether Campsite Ranger is a business. The next cancellation report, built from more of the 89 campgrounds, should be out before then.
        </p>
        <p>
          <A href="https://www.campsiteranger.com/memberships">Claim one of the last Founding Ranger spots</A> or set a free watch at <A href="https://www.campsiteranger.com">www.campsiteranger.com</A>.
        </p>
      </div>
    ),
    sources: [
      { title: "The Colorado Sun — A new website is helping campers score Colorado’s most elusive campsites (Oct 8, 2026)", url: "https://coloradosun.com/2026/10/08/new-websites-helps-campers-score-top-campsites-in-colorado/" },
      { title: "High Plains Public Radio — republished Colorado Sun story (Oct 9, 2026)", url: "https://www.hppr.org/hppr-news/2026-10-09/new-website-is-helping-campers-score-colorados-most-elusive-campsites" },
      { title: "Arvada Press — Arvada dad builds website to help folks get outdoors (Oct 5, 2026)", url: "https://www.arvadapress.com/news/environment/article_61a982d8-e3d1-48fd-9d67-5cae92ada02a.html" },
      { title: "Woodall’s Campground Magazine — Colo. resident launches tool to monitor park cancellations", url: "https://woodallscm.com/colo-resident-launches-tool-to-monitor-park-cancellations/" },
      { title: "Campsite Ranger — cancellation data, Edition 2", url: "https://campsiteranger.com/data/cancellations" },
      { title: "recreation.gov — Rules and Reservation Policies", url: "https://www.recreation.gov/rules-reservation-policies" },
    ],
};
