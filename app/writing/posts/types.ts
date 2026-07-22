import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  color: string;
  tldr: string;
  content: ReactNode;
  sources?: { title: string; url: string }[];
};
