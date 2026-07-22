import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "expansion-is-the-whole-business-ai-gtm",
    title: "I closed my best deal four times",
    date: "Jul 11, 2026",
    readTime: "6 min",
    tag: "Sales",
    color: "from-emerald-600 to-teal-600",
    tldr: "The entire AI-sales gold rush is pointed at landing customers: AI SDRs, PLG funnels, GEO, ChatGPT ads, pilot-to-production. But usage and outcome pricing changed the math. A vendor only makes money once the customer succeeds in production, which means expansion — more seats, more use cases, deeper into the org — is the business, not the encore. The labs are hiring go-to-market faster than SaaS is, and staffing most of it for acquisition. The account leader who grows a live deployment is the role the new pricing rewards, and it's barely written about because it doesn't demo. If you run GTM, build the expansion motion before your next five SDRs. If you sell, the durable career is the book you grow, not the logos you land.",
    content: (
      <div className="prose-content">
        <p>
          The best deal I ever closed, I closed four times. Same logo, same buyer, four years running, each renewal bigger than the last. Nobody wrote a case study about it, because &ldquo;seller keeps a happy customer and grows the account&rdquo; doesn&apos;t make a headline. Landing a brand-new logo makes the headline. It always has.
        </p>
        <p>
          That instinct is running the whole AI-sales boom right now. Look at where the energy and the money are going: AI SDRs that book the first meeting, product-led funnels that self-serve the first seat, GEO to get cited in the answer, ChatGPT ads to catch the buyer mid-question, the whole pilot-to-production sprint. All of it is about getting in the door. I&apos;ve written plenty of it myself. For a decade of SaaS that focus made sense, because the money showed up at signing and the renewal was a formality you didn&apos;t staff for.
        </p>
        <p>
          Then the pricing changed, and almost nobody has redrawn the org chart to match.
        </p>
        <h2>Usage pricing moved the money to after the signature</h2>
        <p>
          Per-seat licensing is{" "}
          <Link href="/writing/end-of-per-seat-pricing" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">on its way out</Link>, and usage and outcome pricing are taking its place. Under that model a vendor doesn&apos;t bank the value at close. It earns a little at a time, over the next year and a half, and only if the thing works in production and the customer leans on it harder every quarter. The contract you sign in Q1 is a down payment on a number you won&apos;t know until the account has either expanded &mdash; more seats, more workflows, deeper into the org &mdash; or quietly stalled and walked at the first renewal.
        </p>
        <p>
          So the expansion motion stopped being the encore. It is the business. The land is the cheap part now; the grow is where the revenue is decided.
        </p>
        <h2>I&apos;ve spent most of my career on the grow, not the land</h2>
        <p>
          At Oracle I carried Amazon and Johnson &amp; Johnson. The dollars that mattered didn&apos;t come from the first signature. They came from year two and year three, from finding the second and third use case, from being trusted enough to sit in a planning meeting I wasn&apos;t invited to and leave with a bigger footprint. That work is unglamorous, it doesn&apos;t demo, and it&apos;s the hardest thing in enterprise sales to fake, because it runs on a relationship you can&apos;t manufacture in a quarter.
        </p>
        <h2>The labs are hiring for the wrong half</h2>
        <p>
          The AI companies best positioned to see this are staffing against it. Go-to-market is already the{" "}
          <Link href="/writing/ai-labs-hiring-salespeople-which-sales-jobs-last" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">single largest category of open roles at OpenAI and Anthropic</Link> &mdash; they&apos;re hiring sellers faster than SaaS ever did. But most of those reqs are acquisition: SDRs, AEs, growth. The role the new pricing actually rewards barely exists on the org chart yet, because it doesn&apos;t fit either box. The classic AE is comped on new bookings and gone once the ink dries. Classic customer success is comped on retention and support tickets. What usage pricing needs is a person who carries a real number and a real relationship at the same time: the one who owns whether a live deployment produces value and grows.
        </p>
        <p>
          Skip that hire and here is how it goes. The AI SDR army books meetings, the AEs close pilots, everyone celebrates the logo, and then the deployment stalls in production because no one senior owns making it work and making it bigger. The customer renews small, or doesn&apos;t renew at all. You will have built a beautiful top of funnel bolted to a bucket with a hole in it.
        </p>
        <h2>This is the part AI doesn&apos;t take</h2>
        <p>
          Both of these hold at once. AI keeps making the first meeting cheaper &mdash; research, first-touch, list-building, the mechanical front of the funnel is exactly what it&apos;s good at. And that same wave makes the person who can grow a live account more valuable, not less, because expansion runs on things a model can&apos;t hold: standing in the room, judgment about which use case to push next, a champion who takes your call because you earned it over eighteen months. Madrona put it plainly this year &mdash; in enterprise AI, selling is easy and staying in is everything, and the renewal is effectively decided in the first ninety days of production. The tools automate the easy half. They raise the price of the hard one.
        </p>
        <h2>Build the expansion team before the next five SDRs</h2>
        <p>
          If you run go-to-market at an AI company, build the expansion motion before you hire your next five SDRs. Name the role, comp it on net revenue inside existing accounts, and put your most trusted seller on your best logos the day they go live, not the day they threaten to churn. And if you&apos;re a seller trying to work out where AI leaves you, the answer is the one it has always been for me: the durable career is the book you grow, not the logos you land. Anyone can be handed a fresh list. Far fewer people can walk into an account they&apos;ve run for three years and leave with a bigger one, and that&apos;s the person the next decade pays.
        </p>
      </div>
    ),
    sources: [
      { title: "Madrona — Enterprise AI Sales 2026: Selling Is Easy, Staying In Is Everything", url: "https://www.madrona.com/enterprise-ai-sales-2026-selling-is-easy-staying-in-is-everything/" },
    ],
};
