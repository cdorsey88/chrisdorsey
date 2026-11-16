import { posts as postMeta } from "@/app/lib/posts-data";
import { posts } from "@/app/writing/posts";
import type { OgPost } from "./post-card";

export type OgPostInfo = OgPost & { ogImage?: string };

// Title, tag and date for a post's social card, plus its optional hand-made
// override (PostMeta.ogImage in app/lib/posts-data.ts).
export function findOgPost(slug: string): OgPostInfo | null {
  const meta = postMeta.find((p) => p.slug === slug);
  const post = posts.find((p) => p.slug === slug);
  const src = meta ?? post;
  if (!src) return null;
  return { title: src.title, tag: src.tag, date: src.date, ogImage: meta?.ogImage };
}
