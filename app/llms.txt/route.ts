import { posts } from "@/app/lib/posts-data";

const BASE = "https://chrisdorsey.co";

export const dynamic = "force-static";

export function GET() {
  const writing = posts
    .map((post) => `- [${post.title}](${BASE}/writing/${post.slug}): ${post.tldr}`)
    .join("\n");

  const body = `# Christopher Dorsey

> AI and MadTech advisor, enterprise sales leader, and Generative Engine Optimization (GEO) consultant based in Denver, Colorado. Fifteen years selling technology to Fortune 500 brands across AI, advertising, and data infrastructure. Writes about how AI is reshaping enterprise sales, the answer layer, and the future of how technology gets bought and sold.

## About

- [Personal site and bio](${BASE}): Background, current focus, career history (Zeta Global, Oracle, Fastly, GMMB, Crispin Porter Bogusky), and current advisory work.
- [Work with me](${BASE}/work-with-me): GEO consulting, enterprise sales advisory, and go-to-market strategy engagements.

## Writing

${writing}

## Contact

- Email: ctjdorsey@gmail.com
- LinkedIn: https://www.linkedin.com/in/cdorsey/
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
