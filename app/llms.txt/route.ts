import { posts } from "@/app/lib/posts-data";
import { CONTACT_EMAIL } from "@/app/lib/site-config";

const BASE = "https://chrisdorsey.co";

export const dynamic = "force-static";

export function GET() {
  const writing = posts
    .map((post) => `- [${post.title}](${BASE}/writing/${post.slug}): ${post.tldr}`)
    .join("\n");

  const body = `# Christopher Dorsey

> Senior enterprise sales leader based in Denver, Colorado, specializing in taking new AI products to market — first sales hire, category creator, Fortune 500 closer. Fifteen years selling technology to Fortune 500 brands across AI, advertising, and data infrastructure. Writes about how AI is reshaping enterprise sales and the future of how technology gets bought and sold.

## About

- [Personal site and bio](${BASE}): Background, current focus, career history (Zeta Global, Oracle, Fastly, GMMB, Crispin Porter Bogusky), and current advisory work.
- [Work with me](${BASE}/work-with-me): Enterprise sales advisory, startup GTM counsel, and account-expansion strategy.
- [Track record](${BASE}/track-record): Career scoreboard — roles, numbers, and results across 15 years.

## Writing

${writing}

## Contact

- Email: ${CONTACT_EMAIL}
- LinkedIn: https://www.linkedin.com/in/cdorsey/
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
