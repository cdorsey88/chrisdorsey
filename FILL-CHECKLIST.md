# FILL Checklist — updated Jul 22, 2026

Nearly everything from the original reposition-branch checklist has shipped. Verified against the
live code on this date: track-record page has zero placeholders, testimonials are live
(`SHOW_TESTIMONIALS = true` with 4 real quotes), the hero headline is final ("The relationship is
the part AI can't copy."), and the deal-stories page was cut. What remains:

## Still open

- [ ] **Custom email** — `[ACTION OUTSIDE CODE]` set up chris@chrisdorsey.co forwarding/inbox via
      domain DNS, then flip `CONTACT_EMAIL` in `app/lib/site-config.ts` (the swap is already
      staged there as a comment). Until then the site keeps ctjdorsey@gmail.com.
- [ ] **Builds proof links** — two "What I'm building" cards still have `proofUrl: null`
      (Call Butler, /client-brief). Add a Loom/gist link when ready; cards render fine without.
- [ ] **`app/for/companies-data.ts`** — the `[FILL]` blocks there are intentional: it's the
      per-opportunity template. Copy the `example` entry and write each block per company.

## Done (for the record)

Track-record stats and role bullets · hero headline · testimonials (4, live) · deal-stories
(descoped) · TESTIMONIALS-TODO list · resume link.
