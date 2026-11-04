import type { MetadataRoute } from "next";
import { posts } from "@/app/lib/posts-data";
import { SERIES } from "@/app/lib/series";

const BASE = "https://chrisdorsey.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newestPostDate = postEntries.length
    ? postEntries
        .map((entry) => entry.lastModified as Date)
        .reduce((a, b) => (a > b ? a : b))
    : new Date();

  return [
    {
      url: BASE,
      lastModified: newestPostDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/writing`,
      lastModified: newestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/track-record`,
      lastModified: new Date("2026-11-01"), // update when /track-record changes
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/work-with-me`,
      lastModified: new Date("2026-09-06"), // update when /work-with-me changes
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...SERIES.map((s) => ({
      url: `${BASE}/writing/series/${s.slug}`,
      lastModified: newestPostDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...postEntries,
  ];
}
