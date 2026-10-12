import type { Post } from "./types";

export const post: Post = {
  slug: "safari-blocklist-trade-desk-appeal-bug-ticket",
  title: "The Trade Desk's appeal to Apple is a bug ticket with no assignee",
  date: "Oct 12, 2026",
  readTime: "5 min",
  tag: "MadTech",
  color: "from-slate-700 to-cyan-600",
  tldr: "Safari on iOS 27 blocks requests to adsrvr.org, the domain The Trade Desk uses to request and deliver ads, along with domains belonging to UID2, ID5, LiveRamp, Permutive and Audigent. Apple has not published the list. The Trade Desk filed a WebKit bug on September 21, and Apple's only public step since was asking it on October 5 to test an iOS 27.2 beta. In The Trade Desk's own test, Safari blocked its bids and let Google's through. Publishers are moving ad calls onto their own servers with IAB Tech Lab's Trusted Server. If you buy or sell ad tech, ask each vendor which of its domains a browser could block and what keeps working if one is.",
  content: (
    <div className="prose-content">
      <p>
        Safari on iOS 27, released September 14, stopped loading ads bought through The Trade Desk. The browser now refuses requests to adsrvr.org, which The Trade Desk&rsquo;s Ian Meyers described in a WebKit bug report as &ldquo;The Trade Desk&rsquo;s core ad request and delivery domain, not identity,&rdquo; according to <a target="_blank" rel="noopener noreferrer" href="https://www.adexchanger.com/platforms/apples-latest-operating-system-blocks-the-trade-desk-from-serving-ads-on-safari">AdExchanger</a>. The same block covers Unified ID 2.0, ID5, LiveRamp, Permutive and Audigent. Apple has not published the list. Meyers reproduced nine entries in his ticket, and the code that enforces them is <a target="_blank" rel="noopener noreferrer" href="https://ppc.land/safari-27-blocks-the-trade-desks-ads-via-11-lines-webkit-merged-in-february/">11 lines merged into WebKit in February</a>, pointing at a file Apple keeps private.
      </p>

      <h2>The appeal process is a bug tracker</h2>
      <p>
        Meyers filed bug 324771 on September 21 and marked it P1. Apple&rsquo;s John Wilander said the next day that Apple was looking into it. On October 5 he asked The Trade Desk to <a target="_blank" rel="noopener noreferrer" href="https://ppc.land/apple-asks-the-trade-desk-to-test-an-ios-27-2-build-that-may-unblock-ads/">test an iOS 27.2 beta</a>, and Meyers replied about 15 minutes later. Apple has not said what the beta changes. At last report the ticket still had no assignee, so a public company that booked $715 million in revenue last quarter is waiting on Apple the same way the rest of us wait on a bug report.
      </p>
      <p>
        Meyers attached a test from a yahoo.com page. Safari blocked The Trade Desk&rsquo;s bids and let Google&rsquo;s through ad.doubleclick.net, which is not on the list. Apple may well be aiming at cross-site identity in good faith. The result on that page was still one DSP&rsquo;s ads failing to load on iPhones while its largest competitor&rsquo;s loaded fine.
      </p>

      <h2>Publishers are moving the ad call off the phone</h2>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://digiday.com/media/apples-safari-ad-tech-blocklist-sends-publishers-back-to-iab-tech-labs-trusted-server/">Digiday reports</a> that publishers are turning to Trusted Server, an open-source framework from IAB Tech Lab that runs ad processing on servers the publisher controls. Safari then sees requests to the news site and nothing else, so blocking the vendor would mean blocking the whole site. Paradium, which owns Parade and Men&rsquo;s Journal, has rerouted its Permutive code through Trusted Server and is testing whether audience data flows again. Tech Lab says its first live publisher is close. The catch is that it takes engineers to run, it is close to a prototype, and earlier server-side auctions lowered what publishers earned.
      </p>

      <h2>Ad tech contracts assume the browser will load the vendor</h2>
      <p>
        At Oracle and Zeta I sold products that ran on identity and data signals. Buyers pushed hard on match rates, data sources and price. A browser refusing to load the vendor&rsquo;s domain wasn&rsquo;t a scenario anyone priced, because it had not happened at this scale to a company this size.
      </p>
      <p>
        It has now, and it belongs in the next renewal. Ask each vendor which of its domains handle delivery and which handle identity, and whether those are separate. Ask which calls can run server-side today, through Trusted Server, Prebid Server or the vendor&rsquo;s own setup. Ask what its Safari fill rate did the week of September 14, and what the contract says about service levels when a browser blocks delivery. If you sell ad tech, have those answers ready before the buyer asks, because the buyer reading this week&rsquo;s trade press is about to.
      </p>
      <p>
        Whatever the 27.2 beta does for adsrvr.org, the other eight domains are still on a list nobody outside Apple can read, and the next iOS update can add a tenth.
      </p>
    </div>
  ),
  sources: [
    { title: "AdExchanger — Apple's latest operating system blocks The Trade Desk from serving ads on Safari (Sept 29, 2026)", url: "https://www.adexchanger.com/platforms/apples-latest-operating-system-blocks-the-trade-desk-from-serving-ads-on-safari" },
    { title: "PPC Land — Safari 27 blocks The Trade Desk's ads via 11 lines WebKit merged in February", url: "https://ppc.land/safari-27-blocks-the-trade-desks-ads-via-11-lines-webkit-merged-in-february/" },
    { title: "PPC Land — Apple asks The Trade Desk to test an iOS 27.2 build that may unblock ads", url: "https://ppc.land/apple-asks-the-trade-desk-to-test-an-ios-27-2-build-that-may-unblock-ads/" },
    { title: "Digiday — Apple's Safari ad tech blocklist sends publishers back to IAB Tech Lab's Trusted Server (Oct 8, 2026)", url: "https://digiday.com/media/apples-safari-ad-tech-blocklist-sends-publishers-back-to-iab-tech-labs-trusted-server/" },
  ],
};
