// Per-post social preview cards (Open Graph / LinkedIn / X), 1200x630.
// Rendered at build time by app/writing/[slug]/opengraph-image.tsx and
// twitter-image.tsx through next/og ImageResponse.
//
// Three design directions live here. OG_DIRECTION picks the one that ships.
//   "a" Editorial   — ink field, big display title, one acid accent
//   "b" Topic motif — tag color field with a geometric motif, title on a paper panel
//   "c" Signature   — paper field, tag rule + chip, small circular headshot
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactElement } from "react";

export type OgDirection = "a" | "b" | "c";
export const OG_DIRECTION: OgDirection = "a";

export const OG_SIZE = { width: 1200, height: 630 };
const W = OG_SIZE.width;
const H = OG_SIZE.height;

// Brand tokens (app/globals.css)
const INK = "#1A1613";
const PAPER = "#F2ECDD";
const CREAM2 = "#E7DEC8";
const TEAL = "#0E9F86";
const BLUE = "#2B43E8";
const ACID = "#C7F03A";
const VIOLET = "#6B4BFF";
const RIDGE = "#334E8C"; // back ridge of the mountain mark
const MUTED_ON_INK = "#BDB3A1"; // secondary text on ink
const MUTED_ON_PAPER = "#5E554B"; // secondary text on paper

// Same per-tag accents as the post page (app/writing/[slug]/page.tsx).
// fg is the chip text color, picked for WCAG AA on that background.
type Accent = { bg: string; fg: string };
const TAG_ACCENTS: Record<string, Accent> = {
  Brands: { bg: VIOLET, fg: "#FFFFFF" },
  "Future of Ads": { bg: TEAL, fg: INK },
  GEO: { bg: TEAL, fg: INK },
  Macro: { bg: BLUE, fg: "#FFFFFF" },
  Sales: { bg: BLUE, fg: "#FFFFFF" },
  MadTech: { bg: VIOLET, fg: "#FFFFFF" },
  Security: { bg: INK, fg: ACID },
  "Enterprise AI": { bg: BLUE, fg: "#FFFFFF" },
  AI: { bg: VIOLET, fg: "#FFFFFF" },
  "AI & GTM": { bg: VIOLET, fg: "#FFFFFF" },
  Builds: { bg: TEAL, fg: INK },
  "Retail Media": { bg: BLUE, fg: "#FFFFFF" },
  Business: { bg: BLUE, fg: "#FFFFFF" },
};
export function tagAccent(tag: string): Accent {
  return TAG_ACCENTS[tag] ?? { bg: BLUE, fg: "#FFFFFF" };
}

export type OgPost = { title: string; tag: string; date: string };

// ---------------------------------------------------------------------------
// Assets (read once per build worker)
// ---------------------------------------------------------------------------
const asset = (f: string) => join(process.cwd(), "assets/og", f);
let assetsPromise: Promise<{
  fonts: { name: string; data: Buffer; weight: 500 | 600 | 700 | 800; style: "normal" }[];
  headshot: string;
}> | null = null;
function loadAssets() {
  if (!assetsPromise) {
    assetsPromise = Promise.all([
      readFile(asset("BricolageGrotesque-ExtraBold.ttf")),
      readFile(asset("Inter-Medium.ttf")),
      readFile(asset("Inter-SemiBold.ttf")),
      readFile(asset("Inter-Bold.ttf")),
      readFile(asset("headshot-circle.jpg")),
    ]).then(([brico, i500, i600, i700, head]) => ({
      fonts: [
        { name: "Bricolage", data: brico, weight: 800, style: "normal" },
        { name: "Inter", data: i500, weight: 500, style: "normal" },
        { name: "Inter", data: i600, weight: 600, style: "normal" },
        { name: "Inter", data: i700, weight: 700, style: "normal" },
      ],
      headshot: `data:image/jpeg;base64,${head.toString("base64")}`,
    }));
  }
  return assetsPromise;
}

const svgUri = (svg: string) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

// ---------------------------------------------------------------------------
// Title fitting. Advance widths (em) of Bricolage Grotesque ExtraBold, opsz 96.
// Picks the largest size whose estimated wrap fits the line and height budget.
// ---------------------------------------------------------------------------
const BRICO_W: Record<string, number> = {" ":0.203,"!":0.268,"\"":0.34,"#":0.613,"$":0.575,"%":0.948,"&":0.697,"'":0.174,"(":0.303,")":0.303,"*":0.457,"+":0.486,",":0.193,"-":0.313,".":0.246,"/":0.349,"0":0.594,"1":0.31,"2":0.551,"3":0.565,"4":0.607,"5":0.565,"6":0.592,"7":0.498,"8":0.608,"9":0.603,":":0.25,";":0.235,"?":0.396,"@":0.936,"A":0.659,"B":0.608,"C":0.631,"D":0.621,"E":0.54,"F":0.51,"G":0.649,"H":0.637,"I":0.243,"J":0.323,"K":0.623,"L":0.46,"M":0.822,"N":0.694,"O":0.661,"P":0.586,"Q":0.659,"R":0.615,"S":0.585,"T":0.516,"U":0.627,"V":0.632,"W":0.915,"X":0.623,"Y":0.595,"Z":0.55,"a":0.543,"b":0.576,"c":0.539,"d":0.576,"e":0.537,"f":0.376,"g":0.549,"h":0.562,"i":0.234,"j":0.244,"k":0.541,"l":0.234,"m":0.86,"n":0.562,"o":0.567,"p":0.574,"q":0.574,"r":0.4,"s":0.517,"t":0.368,"u":0.557,"v":0.53,"w":0.799,"x":0.543,"y":0.539,"z":0.483,"’":0.193,"‘":0.193,"“":0.382,"”":0.382,"—":0.775,"–":0.5,"…":0.757,"é":0.537};
const TRACK = -0.015; // title letter-spacing, em

function wordWidth(word: string, size: number) {
  let w = 0;
  for (const ch of word) w += (BRICO_W[ch] ?? 0.6) + TRACK;
  return w * size;
}
export function wrapLines(text: string, size: number, maxWidth: number) {
  const words = text.split(/\s+/).filter(Boolean);
  const space = (BRICO_W[" "] + TRACK) * size;
  const lines: string[] = [];
  let line = "";
  let lw = 0;
  for (const word of words) {
    const ww = wordWidth(word, size);
    if (!line) { line = word; lw = ww; continue; }
    if (lw + space + ww <= maxWidth) { line += " " + word; lw += space + ww; }
    else { lines.push(line); line = word; lw = ww; }
  }
  if (line) lines.push(line);
  return lines;
}
export function fitTitle(
  text: string,
  opts: { maxWidth: number; maxHeight: number; sizes: number[]; lineHeight: number; maxLines: number },
) {
  // 6% safety margin so the renderer's own wrap never adds a surprise line.
  const width = opts.maxWidth * 0.94;
  for (const size of opts.sizes) {
    const n = wrapLines(text, size, width).length;
    if (n <= opts.maxLines && n * size * opts.lineHeight <= opts.maxHeight) return { size, lines: n };
  }
  const size = opts.sizes[opts.sizes.length - 1];
  return { size, lines: wrapLines(text, size, width).length };
}

// ---------------------------------------------------------------------------
// Shared pieces
// ---------------------------------------------------------------------------
// Layered-range mark from SiteNav. `front` is the front ridge color (ink on
// light grounds, paper when reversed out of ink).
function mountainMark(front: string) {
  return svgUri(
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36" fill="none">` +
      `<path d="M2 34 L14 12 L24 26 L32 10 L46 34 Z" fill="${RIDGE}" opacity="0.85"/>` +
      `<path d="M0 34 L12 20 L22 30 L34 16 L48 34 Z" fill="${TEAL}" opacity="0.9"/>` +
      `<path d="M-2 35 L10 26 L20 33 L32 24 L50 35 Z" fill="${front}"/>` +
      `</svg>`,
  );
}

function Chip({ label, bg, fg, size = 24 }: { label: string; bg: string; fg: string; size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: bg,
        color: fg,
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: size * 0.06,
        textTransform: "uppercase",
        padding: `${Math.round(size * 0.42)}px ${Math.round(size * 0.8)}px`,
        borderRadius: 999,
        lineHeight: 1,
      }}
    >
      {label}
    </div>
  );
}

function Brand({ color, front, size = 26 }: { color: string; front: string; size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mountainMark(front)} width={Math.round(size * 1.85)} height={Math.round(size * 1.38)} alt="" />
      <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 600, fontSize: size, color, letterSpacing: -0.2 }}>
        chrisdorsey.co
      </div>
    </div>
  );
}

function Title({ text, size, color, maxWidth }: { text: string; size: number; color: string; maxWidth: number }) {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Bricolage",
        fontWeight: 800,
        fontSize: size,
        lineHeight: 1.06,
        letterSpacing: size * TRACK,
        color,
        maxWidth,
      }}
    >
      {text}
    </div>
  );
}

// ---------------------------------------------------------------------------
// A — Editorial
// ---------------------------------------------------------------------------
function DirectionA({ post }: { post: OgPost }) {
  const a = tagAccent(post.tag);
  // On ink, an ink chip disappears and an acid chip would be a second acid.
  const chip = a.bg === INK ? { bg: PAPER, fg: INK } : a;
  const PAD = 76;
  const titleW = W - PAD * 2;
  const fit = fitTitle(post.title, { maxWidth: titleW, maxHeight: 352, sizes: [92, 84, 76, 70, 64, 58, 52], lineHeight: 1.06, maxLines: 4 });
  return (
    <div style={{ width: W, height: H, display: "flex", flexDirection: "column", background: INK, padding: `68px ${PAD}px 66px` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <Chip label={post.tag} bg={chip.bg} fg={chip.fg} />
        <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 500, fontSize: 24, color: MUTED_ON_INK }}>{post.date}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
        <div style={{ display: "flex", width: 88, height: 8, background: ACID, borderRadius: 4, marginBottom: 26 }} />
        <Title text={post.title} size={fit.size} color={PAPER} maxWidth={titleW} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Brand color={PAPER} front={PAPER} />
        <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 500, fontSize: 22, color: MUTED_ON_INK }}>Chris Dorsey</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// B — Topic motif. Each motif is original geometry drawn in a 1200x630 box;
// the readable band is y 0–200 (the paper panel covers the rest).
// ---------------------------------------------------------------------------
function rng(seed: number) {
  let s = seed;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}
type MotifPaint = { line: string; soft: string; hot: string };

function motifSvg(tag: string, p: MotifPaint): string {
  const L = p.line, S = p.soft, A = p.hot;
  const parts: string[] = [];
  const r = rng(tag.length * 97 + tag.charCodeAt(0));
  switch (tag) {
    case "Future of Ads": {
      // Sound waveform: rounded vertical bars around a center line.
      for (let i = 0, x = 20; x < 1200; i++, x += 22) {
        const h = 24 + Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11)) * 130 + r() * 20;
        const c = i % 13 === 6 ? A : L;
        parts.push(`<rect x="${x}" y="${108 - h / 2}" width="12" height="${h}" rx="6" fill="${c}"/>`);
      }
      break;
    }
    case "Retail Media": {
      // Shelf grid: three shelves with product blocks standing on them.
      for (const y of [64, 132, 200]) {
        parts.push(`<rect x="0" y="${y}" width="1200" height="8" fill="${L}"/>`);
        let x = 10;
        while (x < 1200) {
          const w = 26 + Math.floor(r() * 40);
          const h = 22 + Math.floor(r() * 32);
          const hot = r() > 0.93;
          parts.push(`<rect x="${x}" y="${y - h - 4}" width="${w}" height="${h}" rx="4" fill="${hot ? A : S}"/>`);
          x += w + 10;
        }
      }
      break;
    }
    case "AI & GTM": {
      // Node graph: scattered nodes with nearest-neighbor edges.
      const nodes: [number, number][] = [];
      for (let i = 0; i < 26; i++) nodes.push([20 + i * 46 + r() * 30, 26 + r() * 160]);
      nodes.forEach(([x, y], i) => {
        for (const j of [i + 1, i + 2]) {
          if (nodes[j]) parts.push(`<line x1="${x}" y1="${y}" x2="${nodes[j][0]}" y2="${nodes[j][1]}" stroke="${S}" stroke-width="5"/>`);
        }
      });
      nodes.forEach(([x, y], i) => parts.push(`<circle cx="${x}" cy="${y}" r="${i % 9 === 4 ? 16 : 11}" fill="${i % 9 === 4 ? A : L}"/>`));
      break;
    }
    case "Builds": {
      // Commit-dot timeline: a main line, a branch that forks and merges back.
      parts.push(`<line x1="0" y1="140" x2="1200" y2="140" stroke="${L}" stroke-width="8"/>`);
      parts.push(`<path d="M300 140 C 360 140, 360 62, 430 62 L 820 62 C 890 62, 890 140, 950 140" stroke="${S}" stroke-width="8" fill="none"/>`);
      for (let x = 60; x < 1200; x += 80) parts.push(`<circle cx="${x}" cy="140" r="14" fill="${INK}" stroke="${L}" stroke-width="7"/>`);
      for (let x = 470; x <= 780; x += 78) parts.push(`<circle cx="${x}" cy="62" r="14" fill="${x === 704 ? A : INK}" stroke="${S}" stroke-width="7"/>`);
      break;
    }
    case "MadTech": {
      // Auction bars: a bid ladder, the winning bid lit.
      for (let i = 0; i < 6; i++) {
        const y = 14 + i * 30;
        const w = 300 + r() * 820;
        parts.push(`<rect x="${1200 - w}" y="${y}" width="${w}" height="20" rx="10" fill="${i === 2 ? A : i % 2 ? S : L}"/>`);
      }
      break;
    }
    case "Sales": {
      // Ascending steps.
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        const x = 380 + i * 94;
        const h = 34 + i * 20;
        parts.push(`<rect x="${x}" y="${196 - h}" width="80" height="${h + 40}" rx="6" fill="${i === steps - 1 ? A : i % 2 ? S : L}"/>`);
      }
      break;
    }
    case "AI": {
      // Neural mesh: layered columns, fully connected between neighbors.
      const cols = 9;
      const layers: [number, number][][] = [];
      for (let c = 0; c < cols; c++) {
        const n = c % 2 ? 4 : 3;
        const x = 340 + c * 104;
        layers.push(Array.from({ length: n }, (_, k) => [x, 30 + (k + 0.5) * (160 / n)] as [number, number]));
      }
      for (let c = 0; c < cols - 1; c++)
        for (const [x1, y1] of layers[c]) for (const [x2, y2] of layers[c + 1])
          parts.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${S}" stroke-width="3"/>`);
      layers.forEach((col, c) => col.forEach(([x, y], k) => parts.push(`<circle cx="${x}" cy="${y}" r="12" fill="${c === 6 && k === 1 ? A : L}"/>`)));
      break;
    }
    case "GEO": {
      // Search-result stack: a query bar and staggered result cards.
      parts.push(`<rect x="440" y="22" width="700" height="44" rx="22" fill="none" stroke="${L}" stroke-width="6"/>`);
      parts.push(`<circle cx="1100" cy="44" r="10" fill="none" stroke="${L}" stroke-width="5"/>`);
      parts.push(`<rect x="476" y="38" width="260" height="12" rx="6" fill="${A}"/>`);
      for (let i = 0; i < 3; i++) {
        const y = 86 + i * 40;
        parts.push(`<rect x="${440 + i * 24}" y="${y}" width="${700 - i * 24}" height="30" rx="8" fill="${i === 0 ? L : S}"/>`);
      }
      break;
    }
    case "Macro": {
      // Trend line over a grid, endpoint marked.
      for (let x = 0; x <= 1200; x += 100) parts.push(`<line x1="${x}" y1="0" x2="${x}" y2="210" stroke="${S}" stroke-width="2"/>`);
      for (let y = 30; y <= 200; y += 50) parts.push(`<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${S}" stroke-width="2"/>`);
      const pts: string[] = [];
      let y = 180;
      for (let x = 0; x <= 1120; x += 40) { y = Math.max(30, Math.min(190, y - 4 + (r() - 0.45) * 40)); pts.push(`${x},${y.toFixed(1)}`); }
      parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="${L}" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/>`);
      const last = pts[pts.length - 1].split(",");
      parts.push(`<circle cx="${last[0]}" cy="${last[1]}" r="16" fill="${A}"/>`);
      break;
    }
    case "Security": {
      // Shield lattice: tiled shield outlines, one filled.
      for (let row = 0; row < 3; row++)
        for (let i = 0; i < 16; i++) {
          const x = i * 80 + (row % 2) * 40 - 20;
          const y = row * 66 + 8;
          const d = `M${x} ${y} L${x + 30} ${y + 8} L${x + 30} ${y + 30} C${x + 30} ${y + 46} ${x + 15} ${y + 54} ${x} ${y + 60} C${x - 15} ${y + 54} ${x - 30} ${y + 46} ${x - 30} ${y + 30} L${x - 30} ${y + 8} Z`;
          const hot = row === 1 && i === 11;
          parts.push(`<path d="${d}" fill="${hot ? A : "none"}" stroke="${hot ? A : row === 1 ? L : S}" stroke-width="5"/>`);
        }
      break;
    }
    case "Brands": {
      // Identity system: a run of bold primitive marks.
      for (let i = 0; i < 12; i++) {
        const cx = 40 + i * 104, cy = 108, s = 40;
        const fill = i === 7 ? A : i % 2 ? S : L;
        const k = i % 3;
        if (k === 0) parts.push(`<circle cx="${cx}" cy="${cy}" r="${s}" fill="${fill}"/>`);
        if (k === 1) parts.push(`<rect x="${cx - s}" y="${cy - s}" width="${s * 2}" height="${s * 2}" rx="8" fill="${fill}"/>`);
        if (k === 2) parts.push(`<path d="M${cx} ${cy - s - 4} L${cx + s + 6} ${cy + s} L${cx - s - 6} ${cy + s} Z" fill="${fill}"/>`);
      }
      break;
    }
    case "Business": {
      // Quarterly columns on a baseline.
      parts.push(`<rect x="0" y="196" width="1200" height="6" fill="${L}"/>`);
      for (let i = 0; i < 20; i++) {
        const h = 40 + ((i * 37) % 120) + r() * 20;
        parts.push(`<rect x="${20 + i * 60}" y="${196 - h}" width="40" height="${h}" rx="4" fill="${i === 15 ? A : i % 4 === 3 ? L : S}"/>`);
      }
      break;
    }
    case "Enterprise AI": {
      // Rack of stacked units with status lights.
      for (let row = 0; row < 4; row++)
        for (let i = 0; i < 6; i++) {
          const x = 30 + i * 196, y = 14 + row * 46;
          parts.push(`<rect x="${x}" y="${y}" width="180" height="36" rx="6" fill="${S}"/>`);
          parts.push(`<circle cx="${x + 154}" cy="${y + 18}" r="7" fill="${row === 2 && i === 4 ? A : L}"/>`);
          parts.push(`<rect x="${x + 16}" y="${y + 14}" width="90" height="8" rx="4" fill="${L}"/>`);
        }
      break;
    }
    default: {
      for (let y = 20; y < 210; y += 36) for (let x = 20; x < 1200; x += 36) parts.push(`<circle cx="${x}" cy="${y}" r="6" fill="${S}"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>`;
}

function DirectionB({ post }: { post: OgPost }) {
  const a = tagAccent(post.tag);
  const field = a.bg;
  const onDark = field === INK || field === BLUE || field === VIOLET;
  const paint: MotifPaint =
    field === INK
      ? { line: TEAL, soft: "rgba(242,236,221,0.28)", hot: ACID }
      : onDark
        ? { line: "rgba(242,236,221,0.82)", soft: "rgba(242,236,221,0.38)", hot: ACID }
        : { line: INK, soft: "rgba(26,22,19,0.38)", hot: PAPER };
  const PX = 40; // panel inset from the canvas edge
  const PAD = 44; // text padding inside the panel (text sits 84px from the edge)
  const titleW = W - (PX + PAD) * 2;
  const fit = fitTitle(post.title, { maxWidth: titleW, maxHeight: 238, sizes: [78, 72, 66, 60, 56, 52, 48], lineHeight: 1.06, maxLines: 4 });
  return (
    <div style={{ width: W, height: H, display: "flex", position: "relative", background: field }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={svgUri(motifSvg(post.tag, paint))} width={W} height={H} alt="" style={{ position: "absolute", left: 0, top: 0 }} />
      <div style={{ position: "absolute", left: 84, top: 64, display: "flex" }}>
        <Chip label={post.tag} bg={PAPER} fg={INK} />
      </div>
      <div
        style={{
          position: "absolute",
          left: PX,
          right: PX,
          top: 214,
          bottom: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          borderRadius: 20,
          padding: `30px ${PAD}px 30px`,
        }}
      >
        <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Title text={post.title} size={fit.size} color={INK} maxWidth={titleW} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
          <Brand color={INK} front={INK} size={24} />
          <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 500, fontSize: 22, color: MUTED_ON_PAPER }}>{post.date}</div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// C — Signature
// ---------------------------------------------------------------------------
function DirectionC({ post, headshot }: { post: OgPost; headshot: string }) {
  const a = tagAccent(post.tag);
  const PAD = 76;
  const titleW = W - PAD * 2 - 24;
  const fit = fitTitle(post.title, { maxWidth: titleW, maxHeight: 300, sizes: [86, 78, 72, 66, 60, 54, 50], lineHeight: 1.06, maxLines: 4 });
  return (
    <div style={{ width: W, height: H, display: "flex", flexDirection: "column", background: PAPER, padding: `66px ${PAD}px 64px` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <Chip label={post.tag} bg={a.bg} fg={a.fg} />
        <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 500, fontSize: 24, color: MUTED_ON_PAPER }}>{post.date}</div>
      </div>
      <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <div style={{ display: "flex", alignSelf: "stretch", width: 10, background: a.bg, borderRadius: 5, margin: "30px 24px 30px 0" }} />
        <Title text={post.title} size={fit.size} color={INK} maxWidth={titleW} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `2px solid ${CREAM2}`, paddingTop: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={headshot} width={68} height={68} alt="" style={{ borderRadius: 34, border: `3px solid ${a.bg}` }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Bricolage", fontWeight: 800, fontSize: 30, color: INK, lineHeight: 1.1 }}>Chris Dorsey</div>
            <div style={{ display: "flex", fontFamily: "Inter", fontWeight: 500, fontSize: 20, color: MUTED_ON_PAPER, lineHeight: 1.3 }}>chrisdorsey.co</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mountainMark(INK)} width={64} height={48} alt="" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
export async function renderPostCard(post: OgPost, direction: OgDirection = OG_DIRECTION) {
  const { fonts, headshot } = await loadAssets();
  let el: ReactElement;
  if (direction === "b") el = <DirectionB post={post} />;
  else if (direction === "c") el = <DirectionC post={post} headshot={headshot} />;
  else el = <DirectionA post={post} />;
  return new ImageResponse(el, { ...OG_SIZE, fonts });
}

// Serve a hand-made override file from /public instead of the template.
export async function staticOgResponse(publicPath: string) {
  const data = await readFile(join(process.cwd(), "public", publicPath.replace(/^\//, "")));
  const type = /\.jpe?g$/i.test(publicPath) ? "image/jpeg" : "image/png";
  return new Response(new Uint8Array(data), { headers: { "Content-Type": type, "Cache-Control": "public, max-age=31536000, immutable" } });
}
