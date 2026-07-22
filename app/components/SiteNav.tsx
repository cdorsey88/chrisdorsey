import Link from "next/link";

// Redesign palette — matches the homepage nav.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";

// Layered-range mark — mirrors the homepage logo glyph (three ridges: blue, teal, ink).
const MountainMark = () => (
  <svg
    width="48"
    height="36"
    viewBox="0 0 48 36"
    fill="none"
    aria-hidden="true"
    className="mountain-mark shrink-0"
  >
    <g className="range-back"><path d="M2 34 L14 12 L24 26 L32 10 L46 34 Z" fill="#334E8C" opacity="0.85" /></g>
    <g className="range-mid"><path d="M0 34 L12 20 L22 30 L34 16 L48 34 Z" fill="#0E9F86" opacity="0.9" /></g>
    <g className="range-front"><path d="M-2 35 L10 26 L20 33 L32 24 L50 35 Z" fill="#1A1613" /></g>
  </svg>
);

// Section links point back to the homepage (/#section) so they work from any page.
const links = [
  { label: "About", href: "/#about" },
  { label: "Track Record", href: "/track-record" },
  { label: "Now", href: "/#now" },
  { label: "Thoughts", href: "/#writing" },
  { label: "AI Sales Tools", href: "/#builds" },
  { label: "Work with me", href: "/work-with-me" },
];

export default function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "rgba(242,236,221,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid rgba(26,22,19,0.12)`,
      }}
      aria-label="Primary navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 whitespace-nowrap select-none hover:opacity-80 transition-opacity">
          <MountainMark />
          <span
            className="font-display"
            style={{ fontSize: 21, fontWeight: 800, lineHeight: 1, color: INK, transform: "translateY(1px)" }}
          >
            Chris <span style={{ color: TEAL }}>Dorsey</span>
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: INK }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="font-medium hover:opacity-60 transition">
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            className="text-sm px-4 py-1.5 rounded-full font-semibold transition-all hover:opacity-90 whitespace-nowrap"
            style={{ background: INK, color: PAPER }}
          >
            Say hi
          </Link>
        </div>
      </div>
    </nav>
  );
}
