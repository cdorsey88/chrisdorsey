# chrisdorsey.co

Personal site and writing of Christopher Dorsey — analytical op-eds on AI, GEO (Generative Engine Optimization), enterprise sales, and MadTech.

Built with the Next.js App Router and deployed on Vercel.

## Stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (production = `main`)
- **Source of truth:** this GitHub repo (`cdorsey88/chrisdorsey`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Type-check before committing:

```bash
npx tsc --noEmit
```

## How writing works

Each post lives in two places and must stay in sync:

1. **`app/lib/posts-data.ts`** — post metadata for listing pages: `slug`, `title`, `date`, `readTime`, `excerpt`, `tag`, `color`, `tldr`.
2. **`app/writing/[slug]/page.tsx`** — the full post: the same header fields plus the `content` JSX and an optional `sources` array.

To publish a post, prepend a new object to the `posts` array in **both** files (newest first), keeping the `slug` identical across the two. The `sources` array (on the `page.tsx` entry) renders a visible Sources list and emits machine-readable `citation` JSON-LD for GEO.

## Project layout

```
app/                 App Router pages, layouts, and the writing entries
app/lib/posts-data.ts   Post metadata (listing)
app/writing/[slug]/  Individual post pages + content
public/              Static assets
```

## Deploy

Production deploys from `main`. Pushing to `main` is the publish step:

```bash
git add -A
git commit -m "content: <what changed>"
git push origin main
```

Vercel builds and ships `main` automatically.
