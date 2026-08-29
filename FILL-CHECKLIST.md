# FILL Checklist — updated Jul 22, 2026

Nearly everything from the original reposition-branch checklist has shipped. Verified against the
live code on this date: track-record page has zero placeholders, testimonials are live
(`SHOW_TESTIMONIALS = true` with 4 real quotes), the hero headline is final ("The relationship is
the part AI can't copy."), and the deal-stories page was cut. What remains:

## Still open

- [ ] **Builds proof links** — two "What I'm building" cards still have `proofUrl: null`
      (Call Butler, /client-brief). Add a Loom/gist link when ready; cards render fine without.
- [ ] **`app/for/companies-data.ts`** — the `[FILL]` blocks there are intentional: it's the
      per-opportunity template. Copy the `example` entry and write each block per company.

## Done (for the record)

Track-record stats and role bullets · hero headline · testimonials (4, live) · deal-stories
(descoped) · TESTIMONIALS-TODO list · resume link.

**Custom email — done Aug 29, 2026.** `CONTACT_EMAIL` in `app/lib/site-config.ts` now reads
chris@chrisdorsey.co, so every mailto on the site (header, footer, contact section, work-with-me,
`/for/[company]`, post pages), the `llms.txt` route, and the Person JSON-LD in `layout.tsx` follow
from that one constant. Inbound delivery verified before the flip: chrisdorsey.co publishes a
Cloudflare Email Routing MX (`route1.mx.cloudflare.net`) and roughly 200 messages have already been
delivered to chris@ and forwarded into the Gmail inbox, most recently a Lemon Squeezy sale on
Aug 28. Note the domain has no SPF TXT record — that affects *sending* as chris@, not receiving,
so it is worth adding before using the address as a From: on any bulk mail.
