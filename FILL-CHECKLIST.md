# FILL Checklist — reposition-ai-seller branch

Every `[FILL]` placeholder on this branch, by file. **Nothing placeholder-shaped ships to production.**
Pages with placeholders are live routes, so fill these before merging to main (or keep the branch in
preview until done). Testimonials are the exception: that section is hidden behind a flag.

## app/track-record/page.tsx

- [ ] `[FILL: link to PDF resume]` — header resume button href
- [ ] `[FILL: quota attainment % by year, last 3–4 years]` — stat grid
- [ ] `[FILL: total ARR closed / influenced]` — stat grid
- [ ] `[FILL: average deal size and largest deal]` — stat grid
- [ ] `[FILL: FancyAI — first clients closed, count + days from start]` — stat grid AND FancyAI bullet 1
- [ ] `[FILL: Zeta — first accounts closed for net-new AI product, value]` — stat grid AND Zeta bullet 1
- [ ] ⚠️ `[FILL: exact FancyAI title — must match LinkedIn and resume verbatim]` — do NOT copy from elsewhere on the site
- [ ] `[FILL: FancyAI dates]`
- [ ] `[FILL: second FancyAI bullet with a number]`
- [ ] `[FILL: Zeta title]` / `[FILL: Zeta dates]` / `[FILL: second Zeta bullet with a number]`
- [ ] `[FILL: Fastly title]` / `[FILL: Fastly dates]` / `[FILL: Fastly metric]` / `[FILL: second Fastly bullet]`
- [ ] `[FILL: Oracle title]` / `[FILL: Oracle dates]` / `[FILL: Oracle metric]` / `[FILL: second Oracle bullet]`
- [ ] `[FILL: Cooke + Wax title]` / `[FILL: Cooke + Wax dates]` / optional second bullet
- [ ] `[FILL: CP+B title]` / `[FILL: CP+B dates]` / optional second bullet
- [ ] `[FILL: target role types, e.g., Director/VP, Strategic AE; fully remote; AI-native companies]` — "What I'm looking for"

## app/deal-stories/page.tsx

Three stories, each needs: Situation, Obstacle, What I did, Result (one line, with a number), and an anonymize Y/N decision.

- [ ] FancyAI story — `[FILL: Situation]`, `[FILL: Obstacle]`, `[FILL: What I did]`, `[FILL: Result]`, `[FILL: anonymize? Y/N]`
- [ ] Zeta story — same five
- [ ] `[FILL: Oracle or Fastly]` story — pick the deal, then same five

## app/page.tsx (homepage)

- [ ] Hero headline — confirm Option A ("I make new AI products sellable.") or swap for B/C; alternates are in a comment above the `<h1>`
- [ ] Builds: `[FILL: 1–2 sentence anonymized outcome, e.g., "cut a bakery's weekly admin by X hours"]` — SMB tools card
- [ ] Builds: `[FILL: link to GitHub gist or repo, or 60-second Loom]` — /client-brief card proofUrl
- [ ] Builds: `[FILL: link to a sample landscape map or capability matrix]` — landscape mapping card proofUrl
- [ ] Builds: `[FILL: Loom/YouTube URL — live selling/demo clip]` — commented-out embed slot, uncomment when ready

## app/components/Testimonials.tsx (hidden behind flag)

- [ ] 3–4 testimonial cards, each: quote, name, title, company (relationship pre-set)
- [ ] Then flip `SHOW_TESTIMONIALS = true` in `app/lib/site-config.ts` — only with 2+ real quotes

## TESTIMONIALS-TODO.md

- [ ] `[FILL: 5 names]` — people to ask

## app/for/companies-data.ts

- [ ] The `example` entry is the template: company, role, market, ninetyDays, whyMe — copy per opportunity

## Actions outside code

- [ ] `[ACTION OUTSIDE CODE: set up chris@chrisdorsey.co forwarding/inbox via domain DNS — not a code change]`
      Then flip the email in `app/lib/site-config.ts`. Until then the site keeps ctjdorsey@gmail.com live.
