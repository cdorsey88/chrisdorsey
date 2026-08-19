#!/usr/bin/env python3
"""new-post.py — scaffold a post and register it EVERYWHERE at once.

Creates the .tsx, adds the import + array entry to index.ts, and adds the
metadata stub to posts-data.ts, so the three registration points can never
drift. Fill in the TODOs, then ./publish.sh.

Usage:
  python3 scripts/new-post.py <slug> "Post title"
  e.g. python3 scripts/new-post.py openai-devday-agents "OpenAI DevDay bets on agents"
"""

import re
import sys
from datetime import date
from pathlib import Path

if len(sys.argv) < 3:
    sys.exit(__doc__)

slug, title = sys.argv[1], sys.argv[2]
if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", slug):
    sys.exit(f"Slug must be lowercase-kebab-case, got: {slug}")

root = Path(__file__).resolve().parent.parent
posts_dir = root / "app" / "writing" / "posts"
post_file = posts_dir / f"{slug}.tsx"
index_ts = posts_dir / "index.ts"
posts_data = root / "app" / "lib" / "posts-data.ts"

if post_file.exists():
    sys.exit(f"{post_file} already exists.")

index_src = index_ts.read_text()
data_src = posts_data.read_text()

# Unique alias: p + initials of slug words (pODA for openai-devday-agents)
alias = "p" + "".join(w[0].upper() for w in slug.split("-"))
n = 2
while re.search(rf"\b{alias}\b", index_src):
    alias = alias.rstrip("0123456789") + str(n)
    n += 1

today = date.today().strftime("%b %-d, %Y")
esc_title = title.replace('"', '\\"')

post_file.write_text(f'''import type {{ Post }} from "./types";

export const post: Post = {{
    slug: "{slug}",
    title: "{esc_title}",
    date: "{today}",
    readTime: "TODO min",
    tag: "MadTech",
    color: "from-violet-700 to-orange-500",
    tldr: "TODO: 4-8 sentence TL;DR.",
    content: (
      <div className="prose-content">
        <p>
          TODO: write the post.
        </p>
      </div>
    ),
}};
''')

# index.ts — import after the types import, alias at top of the posts array
index_src = index_src.replace(
    'import type { Post } from "./types";',
    f'import type {{ Post }} from "./types";\nimport {{ post as {alias} }} from "./{slug}";',
    1,
)
index_src = re.sub(
    r"(export\s+const\s+posts\s*:\s*Post\[\]\s*=\s*\[\n)",
    rf"\g<1>  {alias},\n",
    index_src,
    count=1,
)
index_ts.write_text(index_src)

# posts-data.ts — metadata stub at top of the array (newest first)
stub = f'''  {{
    slug: "{slug}",
    title: "{esc_title}",
    date: "{today}",
    readTime: "TODO min",
    excerpt:
      "TODO: 2-3 sentence excerpt for the listing page.",
    tag: "MadTech",
    color: "from-violet-700 to-orange-500",
    tldr: "TODO: same TL;DR as the post file.",
  }},
'''
data_src = re.sub(
    r"(export\s+const\s+posts\s*:\s*PostMeta\[\]\s*=\s*\[\n)",
    r"\g<1>" + stub.replace("\\", "\\\\"),
    data_src,
    count=1,
)
posts_data.write_text(data_src)

print(f"Scaffolded and registered in all three places:")
print(f"  {post_file.relative_to(root)}  (write the post here)")
print(f"  app/writing/posts/index.ts     (import {alias} + array entry)")
print(f"  app/lib/posts-data.ts          (metadata stub)")
print(f"\nFill in the TODOs, then:  ./publish.sh \"New post: {title}\"")
