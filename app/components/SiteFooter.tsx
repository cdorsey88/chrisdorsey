import Link from "next/link";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

const INK = "#1A1613";

// Layered-range mark — same glyph as the nav.
const MountainMark = () => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" className="mountain-mark shrink-0">
    <g className="range-back"><path d="M2 34 L14 12 L24 26 L32 10 L46 34 Z" fill="#334E8C" opacity="0.85" /></g>
    <g className="range-mid"><path d="M0 34 L12 20 L22 30 L34 16 L48 34 Z" fill="#0E9F86" opacity="0.9" /></g>
    <g className="range-front"><path d="M-2 35 L10 26 L20 33 L32 24 L50 35 Z" fill="#1A1613" /></g>
  </svg>
);

// Site footer: entity bio (GEO), copyright, and the secondary links, including
// Work with me (it left the top nav in Nov 2026).
export default function SiteFooter() {
  return (
    <footer className="relative py-10 px-7 mt-2" style={{ borderTop: `2px solid ${INK}` }}>
      <p className="max-w-6xl mx-auto mb-6 text-sm leading-relaxed" style={{ color: "#4a4239", maxWidth: "72ch" }}>
        Christopher Dorsey is an enterprise seller based in Denver, Colorado. For 16 years he has taken
        first-to-market AI and MadTech products to Fortune 500 buyers, at Crispin Porter + Bogusky,
        Oracle Advertising, Fastly and Zeta Global. He built and runs Campsite Ranger, a paid
        cancellation-alert service for Colorado campers, and does pro bono AI work for small businesses.
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#4a4239" }}>
        <div className="flex items-center gap-2">
          <MountainMark />
          <span>© 2026 Christopher Dorsey. Built in The Rockies, Colorado.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/work-with-me" className="font-semibold hover:opacity-60 transition">Work with me</Link>
          <a href="/feed.xml" className="hover:opacity-60 transition">RSS</a>
          <a href="https://www.linkedin.com/in/cdorsey/" className="hover:opacity-60 transition">LinkedIn</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:opacity-60 transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
