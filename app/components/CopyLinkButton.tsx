"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";

// Copy-link control for the post share rows. "icon" matches the round icon-only
// buttons at the top of a post; "chip" matches the labeled share chips at the bottom.
// Shows "Copied" for 2 seconds after a successful copy.

const LinkIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const CheckIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the textarea fallback
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyLinkButton({
  url,
  variant = "chip",
}: {
  url: string;
  variant?: "icon" | "chip";
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  async function onClick() {
    const ok = await copyText(url);
    if (!ok) return;
    setCopied(true);
    track("share_click", { network: "copy_link", from: window.location.pathname });
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Copied" : "Copy link"}
        className="h-8 rounded-full flex items-center justify-center gap-1.5 transition hover:opacity-70 text-xs font-semibold"
        style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#6a6258", minWidth: 32, padding: copied ? "0 10px" : 0 }}
      >
        {copied ? <><CheckIcon size={12} /> Copied</> : <LinkIcon size={13} />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={copied ? "Link copied" : "Copy link"}
      className="share-chip text-sm px-4 py-2 rounded-full transition font-medium flex items-center gap-2"
      style={{ border: `1.5px solid rgba(26,22,19,0.2)`, color: "#4a4239" }}
    >
      {copied ? <CheckIcon size={14} /> : <LinkIcon size={14} />}
      <span aria-live="polite">{copied ? "Copied" : "Copy link"}</span>
    </button>
  );
}
