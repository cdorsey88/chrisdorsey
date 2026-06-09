// Central site configuration.
// Flags and values here gate changes that should not ship until they're real.

// CONTACT EMAIL
// Swap to chris@chrisdorsey.co ONLY after the address actually receives mail.
// [ACTION OUTSIDE CODE: set up chris@chrisdorsey.co forwarding/inbox via domain DNS — not a code change]
// To flip: comment the gmail line, uncomment the chrisdorsey.co line. One change, applies site-wide.
export const CONTACT_EMAIL = "ctjdorsey@gmail.com";
// export const CONTACT_EMAIL = "chris@chrisdorsey.co";

// TESTIMONIALS
// Never ship placeholder testimonials live. Flip to true once at least 2 real quotes
// exist in app/components/Testimonials.tsx. See TESTIMONIALS-TODO.md.
export const SHOW_TESTIMONIALS = false;
