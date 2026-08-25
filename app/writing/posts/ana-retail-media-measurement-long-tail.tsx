import Link from "next/link";
import type { Post } from "./types";

export const post: Post = {
    slug: "ana-retail-media-measurement-long-tail",
    title: "The ANA's new retail media rules are hardest on the networks that just launched",
    date: "Aug 25, 2026",
    readTime: "6 min",
    tag: "MadTech",
    color: "from-teal-800 to-rose-500",
    tldr: "On August 18 the ANA issued its Retail Media Measurement Standardization report, built by a subcommittee of more than 40 brand heads of media including Mondelez, PepsiCo, Hershey, Colgate-Palmolive, Clorox and Intel. The recommendations: third-party measurement and validation, transparency into methods and definitions, a standardized 14-day loopback window, performance context beyond attributed sales, and one shared definition of an outcome. Walmart Connect, Sam's Club Connect, CVS Media Exchange, Instacart, Albertsons Media Collective, BJ's Media Edge and Roundel gave feedback. Amazon never responded. Coverage went to the checklist and to Amazon's absence. The part that matters more: an ID-linked impression and third-party validation are scale tests, and the same fortnight produced two new networks that will struggle to pass them. Academy Sports launched on August 8, and Circle K relaunched Full Circle Media across 6,600 stores with up to 200 million monthly impressions from fuel pumps, checkout screens and in-store displays. If you run a network, sort your surfaces this quarter into the ones that can produce an ID-linked impression and the ones that cannot, and price the second group as something other than retail media before a buyer does it for you.",
    content: (
      <div className="prose-content">
        <p>
          The ANA published its Retail Media Measurement Standardization report on August 18. A subcommittee of the Media Measurement Leadership Council pulled it together with more than 40 brand heads of media, including Mondelez, PepsiCo, Hershey, Colgate-Palmolive, Clorox and Intel, then ran the framework past Walmart Connect and Sam&rsquo;s Club Connect, CVS Media Exchange, Instacart, Albertsons Media Collective, BJ&rsquo;s Media Edge and Roundel for feedback.
        </p>
        <p>
          The asks are short. Get valid third-party measurement and validation. Demand transparency into measurement methods, logic and definitions. Standardize a 14-day loopback window. Ask for performance context beyond attributed sales. And agree on what an outcome means. Jackson Bazley, the ANA&rsquo;s evp of measurement for marketers, described the problem it solves as comparing networks being &ldquo;like evaluating purple to bananas to 9.7 stars.&rdquo;
        </p>
        <p>
          The trade coverage went to the recommendations themselves and to the fact that Amazon isn&rsquo;t in the document, which the ANA says is because it never heard back. Fair enough. But a common definition is also a filter, and it arrived in the same fortnight as two networks that will have a hard time getting through it.
        </p>
        <h2>Two launches, two weeks, one standard</h2>
        <p>
          Academy Sports launched Academy Retail Media on August 8, promising targeted advertising across stores, site and digital channels with measurement from exposure through to purchase. On August 18, Alimentation Couche-Tard announced the relaunch of Circle K&rsquo;s network as Full Circle Media: more than 6,600 U.S. convenience stores, roughly 2.9 billion annual customer visits, and up to 200 million monthly impressions delivered through fuel pump media, in-store digital screens, checkout displays, the Circle K app, the Inner Circle loyalty program, SMS and email. Chief Digital Officer Erica Fortune, presenting the strategy in February, called retail media &ldquo;a $150 billion business across the globe&rdquo; and said Circle K has a right to win in it.
        </p>
        <p>
          Read those inventory descriptions against the ANA&rsquo;s asks. A logged-in app session and a loyalty scan can produce an impression tied to an identity, which can then be tied to a basket inside a 14-day window and handed to a third party for validation. A screen above a fuel pump cannot. Neither can most checkout displays. That inventory has real value and real reach, and under one shared definition of an outcome it is closer to signage than to what a media buyer is grading when she compares networks.
        </p>
        <p>
          Nobody is going to say that out loud in a launch release. It will show up as a line item that moves budgets.
        </p>
        <h2>I have watched a common grade reprice a category before</h2>
        <p>
          At Oracle I sold data and measurement into brand teams during the years the industry settled on viewability and invalid-traffic standards. The pattern was consistent. Before a common grade exists, every seller tells its own story and buyers keep a long list, because there is no defensible reason to cut anyone. After the grade exists, the list gets short fast, and quality has very little to do with who survives the cut. What decides it is whether you can produce the input the standard requires. Sellers who could hand over clean logs kept their budgets. Sellers who could not got bundled into somebody else&rsquo;s package at a worse rate, or bought.
        </p>
        <p>
          Retail media is more exposed to that dynamic than display ever was, because the required input is harder. Viewability needed a measurement tag. An attributed sale inside a 14-day window needs identity resolution between an exposure and a transaction, and most of the networks that launched in the last three years built the ad server first and the identity graph never.
        </p>
        <p>
          There are somewhere north of 200 retail media networks in the U.S. now. The ANA framework was reviewed by seven of them.
        </p>
        <h2>The transparency argument cuts the other way too</h2>
        <p>
          Liz Roche at Albertsons Media Collective made the sharpest point in the Digiday piece: standardization has to start with a common foundation and a commitment to transparency, not an expectation that every network operates the same way, because otherwise marketers end up with false precision from numbers that look comparable and aren&rsquo;t.
        </p>
        <p>
          She&rsquo;s right, and it protects the smaller networks more than it looks. A convenience chain reaching a shopper eight times a week at the pump is doing something a grocery banner can&rsquo;t, and forcing that into a metric built for onsite search would undersell it. The ANA also has no enforcement power. This is a set of recommendations from the buy side, and buy-side recommendations become real only when a large enough advertiser refuses to spend without them.
        </p>
        <p>
          Which is roughly what happened with viewability, over about four years.
        </p>
        <p>
          One more piece worth watching: the third-party validators most likely to sit in the middle of this are IAS and DoubleVerify, and DoubleVerify is currently being acquired by Nielsen. I wrote three weeks ago about{" "}
          <Link href="/writing/doubleverify-nielsen-verification-independence-repriced" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">what that deal did to the price of independence</Link>{" "}
          in verification. If retail media standardization routes through those two companies, that ownership question stops being an ad tech story and becomes a retail media one.
        </p>
        <h2>What to do this quarter</h2>
        <p>
          If you sell a retail media network, take an afternoon and sort every surface you monetize into two columns: the ones where an impression can be tied to an identity and then to a transaction inside 14 days, and the ones where it can&rsquo;t. Price and package the second column as something other than retail media, on your own terms, while you still control the framing. Your fuel pump screens, endcap displays and in-store audio are worth buying. They are not worth buying under a definition they were never built to satisfy.
        </p>
        <p>
          If you buy retail media, pick three networks you already spend with and ask each for the same campaign restated on a 14-day loopback with the methodology attached. The gap between what comes back and how quickly it comes back will tell you more about who to consolidate into than any deck you get this fall.
        </p>
      </div>
    ),
    sources: [
      { title: "Digiday — ANA updates efforts to standardize retail media network measurement (Aug 18, 2026)", url: "https://digiday.com/marketing/ana-updates-efforts-to-standardize-retail-media-network-measurement/" },
      { title: "C-Store Dive — Circle K relaunches its retail media network (Aug 20, 2026)", url: "https://www.cstoredive.com/news/circle-k-relaunches-its-retail-media-network/828306/" },
      { title: "Alimentation Couche-Tard — Circle K Strengthens Retail Media Offering with Full Circle Media Relaunch", url: "https://corporate.couche-tard.com/Circle-K-Strengthens-Retail-Media-Offering-with-Full-Circle-Media-Relaunch" },
      { title: "invidis — Academy Sports Launches Retail Media Network (Aug 2026)", url: "https://invidis.com/news/2026/08/retail-academy-sports-launches-retail-media-network/" },
    ],
};
