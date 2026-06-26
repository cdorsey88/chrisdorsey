import Link from "next/link";
import { Zap } from "lucide-react";

const serif = { fontFamily: "var(--font-fraunces)" };

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
    <nav className="bg-sky-50/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold whitespace-nowrap" style={serif}>
          <span className="text-slate-900">Christopher </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #334E8C, #0F6E56)" }}
          >
            Dorsey
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-700">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-blue-600 transition">
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            className="text-sm bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-1.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all flex items-center gap-1 font-medium whitespace-nowrap"
          >
            Say hi! <Zap className="w-3.5 h-3.5 fill-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
