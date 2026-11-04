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

// NEWSLETTER (Beehiiv)
// Every <NewsletterSignup /> reads this. While beehiivPublicationId is empty, the
// component falls back to the old behavior: a "Sign me up" button that opens an
// email to CONTACT_EMAIL, and Chris adds people by hand. Nothing breaks before the
// Beehiiv account exists.
//
// To turn the real form on (both steps are required):
//   1. Paste the Beehiiv Publication ID below. It starts with "pub_".
//   2. Add BEEHIIV_API_KEY in Vercel (Project > Settings > Environment Variables,
//      Production + Preview), then redeploy. The key is a secret: never put it here.
// The form posts to /api/subscribe, which calls Beehiiv's Create Subscription API
// server-side, so the key never reaches the browser.
export const NEWSLETTER = {
  beehiivPublicationId: "",
  pitch: "One email when I publish. Usually weekly.",
};
