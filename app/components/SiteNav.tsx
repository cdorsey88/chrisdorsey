import Link from "next/link";

// Redesign palette — matches the homepage nav.
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const TEAL = "#0E9F86";

// Mountain mark — mirrors the homepage logo glyph.
const MountainMark = ({ id = "nav-mtn" }: { id?: string }) => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 30 22"
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
      d="M1 21 L10.5 3 Q11 2 11.6 3 L16 11 L19 6 Q19.5 5.2 20 6 L29 21 Q29.3 21.8 28.4 21.8 L1.7 21.8 Q0.7 21.8 1 21Z"
      fill={`url(#${id}-grad)`}
    />
    <path d="M9 9 L11 5.5 L13 9 L11 12Z" fill="#F0F7FA" opacity="0.85" />
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
