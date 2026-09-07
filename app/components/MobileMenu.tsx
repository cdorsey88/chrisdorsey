"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Mobile-only navigation: a hamburger button in the sticky bar (upper right,
// next to "Say hi.") that opens a full-screen ink overlay with the same links
// the desktop nav shows. Hidden at md and up. Section links use /#hash so they
// work from every page, including the homepage.

const INK = "#1A1613";
const PAPER = "#F2ECDD";
const ACID = "#C8F135";
const TEAL = "#0E9F86";

const links = [
  { label: "About", href: "/#about" },
  { label: "Track Record", href: "/track-record" },
  { label: "Thoughts", href: "/#writing" },
  { label: "AI Sales Tools", href: "/#builds" },
  { label: "Work with me", href: "/work-with-me" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the overlay is up; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-full"
        style={{ width: 40, height: 40, border: `2px solid ${INK}`, background: open ? INK : "transparent", color: open ? PAPER : INK }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: INK, color: PAPER }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-display" style={{ fontSize: 21, fontWeight: 800, lineHeight: 1 }}>
              Chris <span style={{ color: TEAL }}>Dorsey</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full"
              style={{ width: 40, height: 40, border: `2px solid ${PAPER}`, color: PAPER }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 pt-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display font-extrabold py-3"
                style={{ fontSize: 30, lineHeight: 1.05, color: PAPER, borderBottom: "1px solid rgba(242,236,221,0.14)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="font-display font-extrabold rounded-full text-center mt-6 py-4"
              style={{ fontSize: 20, background: ACID, color: INK }}
            >
              Say hi.
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
