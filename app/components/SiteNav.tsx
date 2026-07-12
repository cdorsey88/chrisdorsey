import Link from "next/link";

// Redesign palette — matches the homepage nav.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";

// Berkeley + mountain mark — mirrors the homepage logo glyph (Berkeley the dog at the base of the peak).
const MountainMark = ({ id = "nav-mtn" }: { id?: string }) => (
  <svg
    width="42"
    height="31"
    viewBox="0 0 46 34"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334E8C" />
        <stop offset="100%" stopColor="#0F6E56" />
      </linearGradient>
    </defs>
    <path
      d="M1 32 L13 8 Q13.7 6.6 14.5 8 L19.5 17 L23 11 Q23.6 10 24.2 11 L36 31 Q36.4 31.9 35.3 31.9 L1.9 31.9 Q0.6 31.9 1 32Z"
      fill={`url(#${id}-grad)`}
    />
    <path d="M10.8 15.5 L13.7 10 L16.6 15.5 L13.7 19Z" fill="#F0F7FA" opacity="0.85" />
    <g transform="translate(29.5 16)">
      <path d="M0.9 2.4 Q0 2.5 0 3.4 Q0 4.3 0.9 4.4 L3 4.5 Q3.1 5.6 3.9 6.3 L3.7 16 L5.6 16 L5.8 11.2 Q6.6 12.6 8 13 Q8.3 16 10.6 16 L12.3 16 Q13.9 14.2 13.9 11.9 Q13.9 9 11.3 7.6 L7.3 5.4 Q7.5 3.4 6.4 2.2 Q5 0.8 3.2 1.3 Q1.6 1.6 0.9 2.4 Z" fill="#1A1613" />
      <path d="M5.8 1.9 Q7.3 1.7 7.8 3 Q8.2 4.1 7.4 5.1 Q6.3 4.6 5.9 3.5 Q5.7 2.6 5.8 1.9 Z" fill="#1A1613" />
      <path d="M12.8 9.6 Q14.8 8.8 15 6.6 Q15.1 5.4 14.4 4.6 Q14.5 6.1 13.5 7.2 Q12.7 8 11.7 8.3 Q12.3 9 12.8 9.6 Z" fill="#1A1613" />
      <path d="M4.3 6.8 Q4.1 8.8 4.6 10.6 Q4.8 11.4 5.3 12 Q5.9 9.9 5.6 8 Q5.45 7.1 5.1 6.6 Z" fill="#F2ECDD" />
      <rect x="0.4" y="3.8" width="1.3" height="0.5" rx="0.25" fill="#F2ECDD" />
    </g>
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
