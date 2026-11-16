import { OG_SIZE, renderPostCard, staticOgResponse } from "@/app/lib/og/post-card";
import { findOgPost } from "@/app/lib/og/og-post";

// Same card as opengraph-image.tsx, emitted as twitter:image (summary_large_image).
export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const post = findOgPost(params.slug);
  const isJpeg = post?.ogImage ? /\.jpe?g$/i.test(post.ogImage) : false;
  return [
    {
      id: "card",
      alt: post?.title ?? "Chris Dorsey",
      size: OG_SIZE,
      contentType: isJpeg ? "image/jpeg" : "image/png",
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findOgPost(slug);
  if (!post) return new Response("Not found", { status: 404 });
  if (post.ogImage) return staticOgResponse(post.ogImage);
  return renderPostCard(post);
}
