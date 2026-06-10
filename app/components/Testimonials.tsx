// Testimonials section — gated behind SHOW_TESTIMONIALS in app/lib/site-config.ts.
// All four quotes below are real, excerpted verbatim from Chris's public
// LinkedIn recommendations (linkedin.com/in/cdorsey, pulled June 2026).

const serif = { fontFamily: "var(--font-fraunces)" };

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
  return (
    <section id="testimonials" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block text-xs uppercase tracking-widest text-violet-700 bg-violet-100 px-3 py-1 rounded-full mb-4 font-bold">
          What people say
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12" style={serif}>
          From the people I&apos;ve worked with.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <blockquote className="text-slate-700 leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-sm">
                <span className="font-bold text-slate-900">{t.name}</span>
                <span className="text-slate-500"> · {t.title}, {t.company}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{t.relationship}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
