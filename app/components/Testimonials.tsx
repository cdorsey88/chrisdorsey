// Testimonials section — gated behind SHOW_TESTIMONIALS in app/lib/site-config.ts.
// NEVER ship placeholder testimonials live. Flip the flag only when at least 2
// real quotes below have been replaced. See TESTIMONIALS-TODO.md at the repo root.

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
    quote: "[FILL: testimonial 1 — founder advised]",
    name: "[FILL: name]",
    title: "[FILL: title]",
    company: "[FILL: company]",
    relationship: "founder I advised",
  },
  {
    quote: "[FILL: testimonial 2 — former client]",
    name: "[FILL: name]",
    title: "[FILL: title]",
    company: "[FILL: company]",
    relationship: "former client",
  },
  {
    quote: "[FILL: testimonial 3 — former manager]",
    name: "[FILL: name]",
    title: "[FILL: title]",
    company: "[FILL: company]",
    relationship: "former manager",
  },
  {
    quote: "[FILL: testimonial 4 — optional, remove if unused]",
    name: "[FILL: name]",
    title: "[FILL: title]",
    company: "[FILL: company]",
    relationship: "[FILL: relationship]",
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
