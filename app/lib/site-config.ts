// Central site configuration.
// Flags and values here gate changes that should not ship until they're real.

// CONTACT EMAIL
// Flipped to chris@chrisdorsey.co on Aug 29, 2026 after verifying inbound delivery
// (Cloudflare Email Routing MX on chrisdorsey.co; test message delivered end to end).
// One change here applies site-wide: header, footer, contact section, work-with-me,
// per-company pages, post pages, llms.txt, and the Person JSON-LD in layout.tsx.
export const CONTACT_EMAIL = "chris@chrisdorsey.co";

// TESTIMONIALS
// Never ship placeholder testimonials live. Flip to true once at least 2 real quotes
// exist in app/components/Testimonials.tsx. See TESTIMONIALS-TODO.md.
export const SHOW_TESTIMONIALS = true;
