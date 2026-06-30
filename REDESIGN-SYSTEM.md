# chrisdorsey.co — redesign system

_Locked June 27, 2026. Direction: "Connector + Evolution," bold art-directed. Reference mockup: `chrisdorsey website cowork project/My Website - chrisdorsey.co/mockups/connector-bold.html`. Build on branch `redesign`._

## The idea in one line
A bold, creative-agency-grade personal site that *shows* (never says) Chris is a different kind of seller: generous, connected, and battle-tested across every marketing revolution. Anti-sterile, anti-template, AI-forward but broad (AI · data · MadTech).

## Palette
- Paper `#F2ECDD` (warm cream base) · Cream2 `#E7DEC8` (section block)
- Ink `#1A1613` (near-black warm — primary text, frames, dark bands)
- Teal `#0E9F86` (primary accent / CTAs — the blue-green Chris chose)
- Electric blue `#2B43E8`
- Acid green `#C7F03A` (highlighter / pops)
- Violet `#6B4BFF` — used sparingly (one or two accents only)
- Texture: subtle film-grain overlay (SVG turbulence) over the paper. This is what kills the "sterile."

## Type
- Display: **Bricolage Grotesque** (700/800) — big, expressive headlines.
- Body/UI: **Inter** (400/500/600).
- (Newsreader serif optional for long-form post body if we want editorial warmth.)

## Motion & interaction principles
- Tasteful, not a showreel. Everything respects `prefers-reduced-motion`. Nothing hurts LCP.
- Signature vocabulary: draw-on lines, staggered fade-up reveals on scroll, count-up numbers, a live marquee, magnetic/underline-draw hovers, hard-offset "sticker" shadows, View Transitions for page changes.

### Delight moments (the fun stuff)
- **Connector hub**: Chris's photo at center, lines draw out to people, signals pulse along them; hovering a node lights its path. Rotating "I'll connect you with ___."
- **Era marquee**: "Broadcast → Digital → Data → AI → Agents" scrolls continuously.
- **Track-record counters** climb as they scroll into view; the evolution timeline draws its spine and warms gray→teal toward "now."
- **Magnetic buttons** nudge toward the cursor; nav links underline-draw.
- **Mountain mark easter egg**: click it → a quick "elevation gain" animation (extends the existing peak-rise).
- **"On rotation" music**: a tiny animated equalizer next to the band names.
- **Hand-model bit**: a wink on hover (small wave / cursor flourish).
- **Scroll progress as a summit climb** indicator (ties to the Colorado/elevation motif).
- **Intro request → satisfying confirmation** micro-interaction ("intro on the way").

## Page treatments

**Homepage** — hero (framed portrait + bold headline + AI/data/MadTech eyebrow) → connector hub section → era marquee → 5 color-coded era cards → selected writing → "off the clock" (ink band, personal in color) → warm anti-sales CTA.

**Track record** (`/track-record`) — the scoreboard: big count-up stats + the evolution timeline as the spine, era color-coding. Restyle the existing Infographic component in the new system; keep "no rounding up" honesty.

**Work with me** (`/work-with-me`) — three services as bold color blocks (GEO / enterprise advisory / startup advisory), the "how it works" steps with reveal motion, generous (not pitchy) CTA.

**Writing index** (`/writing`) — category filter chips (color-coded: Macro / Future of Ads / etc.), a big featured latest post, bold cards with hover. Pagination as it grows.

**Post template** (`/writing/[slug]`) — the one place to **dial boldness down for readability**: clean editorial column, category-color accents, pull quotes, reading-progress bar + time, styled Sources block, share row. Keep all current SEO/GEO (JSON-LD, citations).

**`/for/[company]`** — personalized bold landing ("Here's what I'd do at [Company] in 90 days"). Expand from 1 to a handful of target employers — doubles as a job-search tool.

## Foundational fixes to fold in (from the June 27 audit)
- Add **Vercel Web Analytics + Speed Insights** (currently none).
- Add a short **FAQ + FAQPage schema** (biggest GEO gap).
- Per-post **OG images** (LinkedIn CTR).
- Reconcile the `--font-fraunces` token mismatch.

## Positioning guardrails
- Lead with AI; always keep data + MadTech visible so no recruiter rules Chris out.
- Connector + "seen every revolution" are the differentiators. Generous posture throughout — value given freely, no hard pitch. Never *say* "I'm not a typical salesperson"; let the design and generosity prove it.
