# Testimonials — TODO

The testimonials section is built (`app/components/Testimonials.tsx`) but **hidden** behind the
`SHOW_TESTIMONIALS` flag in `app/lib/site-config.ts`.

**Do not flip the flag until at least 2 real quotes are in place. Never ship placeholder testimonials.**

## How to ship it

1. Ask the people below for a 1–3 sentence quote.
2. Replace the `[FILL: ...]` placeholders in `app/components/Testimonials.tsx` (delete unused cards).
3. Set `SHOW_TESTIMONIALS = true` in `app/lib/site-config.ts`.
4. Deploy.

## Suggested people to ask

- [FILL: name 1]
- [FILL: name 2]
- [FILL: name 3]
- [FILL: name 4]
- [FILL: name 5]

Aim for a mix of relationships: a founder you advised, a former client, a former manager.
