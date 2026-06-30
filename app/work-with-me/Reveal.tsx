"use client";

import { useEffect, useRef } from "react";

// Reveal-on-scroll wrapper (IntersectionObserver). Adds .in to trigger the
// `reveal` CSS transition from globals.css. Respects prefers-reduced-motion
// (globals.css forces .reveal visible under that media query).
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  style,
}: {
  as?: "div" | "section";
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
