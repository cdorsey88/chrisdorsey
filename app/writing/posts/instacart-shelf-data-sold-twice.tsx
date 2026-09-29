import type { Post } from "./types";

export const post: Post = {
  slug: "instacart-shelf-data-sold-twice",
  title: "Instacart built a live map of every grocery aisle. It is selling the same map to both sides of the table.",
  date: "Sep 28, 2026",
  readTime: "5 min",
  tag: "MadTech",
  color: "from-emerald-700 to-orange-500",
  tldr: "Instacart launched two products off one data feed. Grocers buy Inventory Intelligence, a live view of their own shelves. CPG brands buy a Store Excellence Portal that estimates, in dollars and refreshed daily, what a retailer's out-of-stocks cost them by store and by UPC, plus which competitor won the substitution. That second product hands suppliers a weapon to carry into their next negotiation with the retailer. If you run a banner, a number about your stores is about to show up on the supplier's side of the table, and nobody asked you how it should be calculated.",
  content: (
    <div className="prose-content">
      <p>
        On September 21 Instacart put out a{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://company.instacart.com/pressreleases/instacart-gives-grocers-and-cpg-brands-a-live-view-of-every-store">press release</a>{" "}
        announcing two new software products. A week later it paid to put the same announcement in front of grocery executives as{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.grocerydive.com/spons/instacart-gives-grocers-and-cpg-brands-a-live-view-of-every-store/831392/">sponsored content on Grocery Dive</a>. Everything published since has been that release with a different logo on top.
      </p>
      <p>
        The mechanism deserves better. Instacart says roughly 600,000 shoppers walk into stores more than 15 times a day and generate over 10 million data points daily, on top of 1.6 billion lifetime orders. Layer in computer vision from Arpalus running on Caper Carts and you get what the company calls a live, actionable map of a physical store, down to the individual product.
      </p>
      <p>
        Grocers get Inventory Intelligence: real-time shelf visibility that updates as shoppers move through the store, merchandising signals flagging fast movers that deserve more space, and forecasting meant to catch a stockout before it happens.
      </p>
      <p>
        CPG brands get a Store Excellence Portal: daily store-level shelf visibility, an estimate of lost sales in dollars by store and by UPC refreshed every day, substitution tracking showing which competitor a shopper switched to, and seasonal flags on products likely to run dry.
      </p>
      <p>
        Read those two paragraphs next to each other.
      </p>

      <h2>Two products, one shelf</h2>
      <p>
        The grocer is buying a view of its own stores. The brands competing for space in those stores are buying a view of the same stores, with a competitive layer on top that the grocer does not get.
      </p>
      <p>
        Retailers have spent the better part of a decade arguing that the shopper relationship is theirs. That argument built every retail media network on the market. The pitch to suppliers was always the same: we own the store, we own the basket, if you want to know what happens at the shelf you buy it from us. A delivery partner just went around the side of that and sold the aisle to the supplier directly.
      </p>
      <p>
        There is a real case for the grocer here, and it deserves saying. A supplier who can see a gap at store 4471 on Tuesday morning can fix it faster than a category manager who finds out at the end of the month. Out-of-stocks cost the retailer margin too. Everybody in the building wants product on the shelf.
      </p>
      <p>
        The friction sits in the substitution file. When a brand can see which rival picked up the sale during a gap, that brand now has a monthly report card on the retailer&rsquo;s execution, scored by a vendor the retailer also pays.
      </p>

      <h2>The supplier now walks in with better data than the retailer</h2>
      <p>
        A supplier and a retailer sit down a couple of times a year to negotiate the year ahead. The brand wants more shelf facings, better display placement, promotional support, a spot in the circular. The retailer wants trade dollars and a media commitment. Both sides argue with data, and whoever brings the more specific data usually walks out with more.
      </p>
      <p>
        Historically the retailer held the better hand. The brand showed up with syndicated measurement bought from Circana or NielsenIQ, aggregated, a few weeks stale, thin at store level. The retailer showed up with its own point-of-sale data and could dispute almost anything the brand claimed about execution.
      </p>
      <p>
        Now the brand walks in with a figure current as of yesterday. Across these 340 stores, your out-of-stocks cost us this many dollars last month, here is the store list ranked worst to best, and here is where the shopper went instead. That is a different meeting. The retailer spends it answering.
      </p>
      <p>
        It also sets up a fight nobody has had yet, because the estimate is a model. Lost sales is an inference about a purchase that did not occur, built by a company that sells software to the brand, sells software to the retailer, and sells advertising to both. When the two sides disagree about the number, the arbiter is the vendor with revenue riding on both answers.
      </p>

      <h2>The moat is people, and I rent a very small version of it</h2>
      <p>
        I run{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://campsiteranger.com">Campsite Ranger</a>, which watches Colorado campground and permit systems and tells people when a cancellation opens up. The alerting was the easy part. The expensive, fragile, never-finished part is holding a current picture of physical inventory I do not own and cannot see directly, at a refresh rate frequent enough to be worth paying for. That is one state&rsquo;s reservation system, and it still takes constant maintenance.
      </p>
      <p>
        Instacart has 600,000 people who physically walk into the buildings, paid for on a different line item. Competitors can buy the same computer vision. Kroger and Walmart can put cameras and sensors on their own shelves, and are. Nobody else has a distributed workforce already standing in the aisle for another reason entirely.
      </p>
      <p>
        That workforce is the asset nobody can copy, and the software is how Instacart finally bills for it.
      </p>

      <h2>Somebody took the pictures</h2>
      <p>
        Instacart already told us what this work is worth, because it used to buy it retail. Starting in late 2024 the company tested{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://finance.yahoo.com/news/instacart-launches-shelve-checking-job-133000815.html">brand tasks</a>, paying shoppers to photograph displays and check stock on behalf of manufacturers. One Pennsylvania shopper was paid about $12 for a ten-minute assignment shooting a Dove body care display.
      </p>
      <p>
        These new products do not run on brand tasks. They run on the 10 million data points a day that fall out of ordinary deliveries. Item-not-found taps, substitution choices, barcode scans, whatever the Caper Cart camera sees on the way past. Work that cost $12 when Instacart had to ask for it costs nothing when it arrives as exhaust from a trip somebody was already making.
      </p>
      <p>
        Shoppers are paid for the delivery, the terms cover the data, and nobody is being tricked here. What stands out is the pricing history. Instacart established what a person looking at a shelf and reporting back is worth, then built a business that gets a version of the same thing free, at a scale no paid program could ever have reached.
      </p>
      <p>
        You can see why it matters to the P&amp;L. Advertising and other revenue was{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://investors.instacart.com/news-releases/news-release-details/instacart-announces-second-quarter-2026-financial-results">$297 million in the second quarter of 2026</a>, up 16% year over year, against $1.043 billion in total revenue. Call it 29 cents of every revenue dollar, off 2.9% of gross transaction value. Software licensed to grocers and brands lands on that same side of the ledger. The delivery business is starting to look like the thing that generates raw material for the businesses that carry the margin.
      </p>

      <h2>What to do with this</h2>
      <p>
        If you sell for a brand, the Store Excellence Portal is worth a look before your competitors get comfortable with it, and worth a hard question about methodology before you put its output in a deck. A number you cannot defend in the meeting is worse than no number.
      </p>
      <p>
        If you run a banner, there are two questions worth raising at your next Instacart review. Who else can buy a picture of your stores, and does your private label show up in anyone&rsquo;s substitution report.
      </p>
      <p>
        Instacart says the portal is rolling out with select partners first. Whoever is in that first group gets a daily read on your stores. You will meet it across the table before you ever see it.
      </p>
    </div>
  ),
  sources: [
    { title: "Instacart — Instacart Gives Grocers and CPG Brands a Live View of Every Store (Sept 21, 2026)", url: "https://company.instacart.com/pressreleases/instacart-gives-grocers-and-cpg-brands-a-live-view-of-every-store" },
    { title: "Grocery Dive — Instacart gives grocers and CPG brands a live view of every store (sponsored content, Sept 28, 2026)", url: "https://www.grocerydive.com/spons/instacart-gives-grocers-and-cpg-brands-a-live-view-of-every-store/831392/" },
    { title: "Instacart — Instacart Announces Second Quarter 2026 Financial Results", url: "https://investors.instacart.com/news-releases/news-release-details/instacart-announces-second-quarter-2026-financial-results" },
    { title: "Yahoo Finance — Instacart Launches 'Shelf Checking' Job For Gig Workers", url: "https://finance.yahoo.com/news/instacart-launches-shelve-checking-job-133000815.html" },
  ],
};
