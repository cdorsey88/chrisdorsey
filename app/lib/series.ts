import { posts, type PostMeta } from "@/app/lib/posts-data";

// Reading series. A post joins a series through the optional `series` field in
// app/lib/posts-data.ts. "Seller Who Builds" also picks up every Builds-tag post
// automatically, so new build logs join without an edit here.

export type SeriesSlug = NonNullable<PostMeta["series"]>;

export type Series = {
  slug: SeriesSlug;
  title: string;
  description: string;
  color: string; // accent from the site palette
  fg: string;
};

export const SERIES: Series[] = [
  {
    slug: "seller-who-builds",
    title: "Seller Who Builds",
    description:
      "I sell AI for a living and build with it on nights and weekends. These are the build logs, with the numbers left in.",
    color: "#0E9F86",
    fg: "#fff",
  },
  {
    slug: "agents-in-the-funnel",
    title: "Agents in the Funnel",
    description:
      "Software agents now read the proposal before the media buyer does, and the cold email before the prospect. These posts track where agents sit in the funnel and what that changes for whoever is selling.",
    color: "#6B4BFF",
    fg: "#fff",
  },
  {
    slug: "before-the-budget-line",
    title: "Before the Budget Line",
    description:
      "Most of my career has been selling things buyers had no budget for yet. These posts are about how that sale works and how it changes once the category is real.",
    color: "#2B43E8",
    fg: "#fff",
  },
];

export function getSeries(slug: string | undefined | null): Series | undefined {
  return slug ? SERIES.find((s) => s.slug === slug) : undefined;
}

export function seriesOf(meta: Pick<PostMeta, "series" | "tag"> | undefined): Series | undefined {
  if (!meta) return undefined;
  return getSeries(meta.series ?? (meta.tag === "Builds" ? "seller-who-builds" : undefined));
}

export function seriesForPost(postSlug: string): Series | undefined {
  return seriesOf(posts.find((p) => p.slug === postSlug));
}

// Members in reading order: oldest first.
export function postsInSeries(slug: SeriesSlug): PostMeta[] {
  return posts
    .filter((p) => seriesOf(p)?.slug === slug)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
