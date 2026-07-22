// Testimonials section — gated behind SHOW_TESTIMONIALS in app/lib/site-config.ts.
// All four quotes below are real, excerpted verbatim from Chris's public
// LinkedIn recommendations (linkedin.com/in/cdorsey, pulled June 2026).

const display = { fontFamily: "var(--font-display)", letterSpacing: "-0.02em" };

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";
const BLUE = "#2B43E8";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "It's a pretty rare thing to be able to balance the exact right level of support, while being proactive and also not being pushy. Chris lands this so perfectly. I can speak from direct personal experience when I say Chris knows how to form a meaningful client relationship that's built on a foundation of trust and is built to last.",
    name: "Courtney King",
    title: "Audience and Media Lead",
    company: "Johnson & Johnson",
    relationship: "Client, Oracle Advertising",
  },
  {
    quote:
      "I was introduced to Chris when my team was looking for a programmatic audience provider and we're much better off for it. He was incredibly knowledgeable and kind as he worked with my team throughout the past year. Chris will be an asset to any org looking to improve their client relationships and outreach.",
    name: "Ben Field",
    title: "Sr. Transformation Lead",
    company: "Monks",
    relationship: "Client, Oracle Advertising",
  },
  {
    quote:
      "He continually challenges the status quo and is keenly focused on improving results. His ability to see the big picture, influence partners to test new ideas, collaborate across teams and find or create opportunities out of any situation makes him a valuable team member.",
    name: "Elizabeth Floyd",
    title: "AI Insights, Gemini",
    company: "Google",
    relationship: "Former manager, Oracle Data Cloud",
  },
  {
    quote:
      "Together, we collaborated to craft strong, customer-first stories that truly resonated, and his ability to connect strategy with impact consistently stood out. I would confidently recommend Chris to any company that prioritizes its customers.",
    name: "Carlos Vega",
    title: "Sr. Director, Partnership Marketing",
    company: "Zeta Global",
    relationship: "Colleague, Zeta Global",
  },
];

export default function Testimonials() {
  // Each card gets a different bold fill so the set reads as varied, not templated.
  const fills = [
    { bg: ACID, fg: INK, sub: "rgba(26,22,19,0.7)", chip: INK, chipFg: ACID, shadow: INK, rot: -1 },
    { bg: INK, fg: PAPER, sub: "rgba(242,236,221,0.7)", chip: ACID, chipFg: INK, shadow: TEAL, rot: 1 },
    { bg: BLUE, fg: "#fff", sub: "rgba(255,255,255,0.78)", chip: ACID, chipFg: INK, shadow: INK, rot: 0.8 },
    { bg: VIOLET, fg: "#fff", sub: "rgba(255,255,255,0.78)", chip: ACID, chipFg: INK, shadow: INK, rot: -0.8 },
  ];

  return (
    <section id="testimonials" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-bold" style={{ color: INK, background: ACID }}>
          References
        </div>
        <h2 className="font-display font-extrabold tracking-tight mb-3" style={{ ...display, fontSize: "clamp(30px,4.5vw,52px)", color: INK }}>
          They put their name on it.
        </h2>
        <p className="text-lg mb-12" style={{ color: "#4a4239" }}>
          Clients, executive leaders, and cross-functional peers who&apos;ll vouch for me, on the record.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => {
            const f = fills[i % fills.length];
            return (
              <figure
                key={i}
                className="rounded-2xl p-7 flex flex-col justify-between transition-transform hover:-translate-y-1"
                style={{ background: f.bg, color: f.fg, border: `3px solid ${INK}`, boxShadow: `7px 7px 0 ${f.shadow}`, transform: `rotate(${f.rot}deg)`, minHeight: 260 }}
              >
                <blockquote className="leading-relaxed mb-5" style={{ color: f.fg }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="text-sm">
                  <div>
                    <span className="font-bold" style={{ color: f.fg }}>{t.name}</span>
                    <span style={{ color: f.sub }}> · {t.title}, {t.company}</span>
                  </div>
                  <span className="inline-block text-xs font-semibold mt-3 px-2.5 py-0.5 rounded-full" style={{ background: f.chip, color: f.chipFg }}>{t.relationship}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/cdorsey/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold hover:opacity-70 transition-opacity"
            style={{ color: INK }}
          >
            See more from clients, executive leaders, and cross-functional colleagues
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
