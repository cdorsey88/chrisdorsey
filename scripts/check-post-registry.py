#!/usr/bin/env python3
"""check-post-registry.py — verify the three post-registration points agree.

A post is live only when THREE things exist and match:
  1. app/writing/posts/<slug>.tsx          (the post itself)
  2. an import + array entry in app/writing/posts/index.ts
  3. a metadata entry in app/lib/posts-data.ts

Forgetting any one of these is the #1 cause of "the post didn't go live".
This script checks all directions and fails loudly with the exact fix.

Usage:
  python3 scripts/check-post-registry.py            # check the working tree
  python3 scripts/check-post-registry.py --root DIR # check an exported tree
"""

import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
if len(sys.argv) == 3 and sys.argv[1] == "--root":
    root = Path(sys.argv[2])

posts_dir = root / "app" / "writing" / "posts"
index_ts = posts_dir / "index.ts"
posts_data = root / "app" / "lib" / "posts-data.ts"

errors = []

# 1. Post files on disk (index.ts and types.ts are infrastructure, not posts)
files = sorted(
    p.stem for p in posts_dir.glob("*.tsx")
) if posts_dir.is_dir() else []
if not files:
    print(f"registry-check: no post files found under {posts_dir} — skipping.")
    sys.exit(0)

index_src = index_ts.read_text() if index_ts.is_file() else ""
data_src = posts_data.read_text() if posts_data.is_file() else ""

# 2. Imports in index.ts:  import { post as pXYZ } from "./<slug>";
imports = dict(re.findall(r'import\s*{\s*post\s+as\s+(\w+)\s*}\s*from\s*"\./([\w-]+)"', index_src))
imported_slugs = set(imports.values())

# 3. Aliases actually listed in the posts array
array_m = re.search(r'export\s+const\s+posts\s*:\s*Post\[\]\s*=\s*\[(.*?)\]', index_src, re.S)
array_aliases = set(re.findall(r'\b(p\w+)\b', array_m.group(1))) if array_m else set()

# 4. Slugs in posts-data.ts
data_slugs = set(re.findall(r'slug:\s*"([\w-]+)"', data_src))

for slug in files:
    if slug not in imported_slugs:
        errors.append(f'{slug}.tsx exists but has NO import in index.ts\n    fix: import {{ post as pNEW }} from "./{slug}"; and add pNEW to the posts array')
    if slug not in data_slugs:
        errors.append(f'{slug}.tsx exists but has NO entry in app/lib/posts-data.ts\n    fix: add a PostMeta entry with slug: "{slug}"')
    # internal slug must match the filename
    src = (posts_dir / f"{slug}.tsx").read_text()
    m = re.search(r'slug:\s*"([\w-]+)"', src)
    if m and m.group(1) != slug:
        errors.append(f'{slug}.tsx declares slug "{m.group(1)}" — must match its filename')

for alias, slug in imports.items():
    if slug not in files:
        errors.append(f'index.ts imports "./{slug}" but {slug}.tsx does not exist (deleted? never committed?)')
    if array_aliases and alias not in array_aliases:
        errors.append(f'index.ts imports {alias} ("{slug}") but never lists it in the posts array — the post is invisible')

for slug in data_slugs - set(files):
    errors.append(f'posts-data.ts has slug "{slug}" but no matching {slug}.tsx — /writing/{slug} will 404')

if errors:
    print(f"registry-check: {len(errors)} problem(s) found:\n")
    for e in errors:
        print(f"  ✗ {e}")
    sys.exit(1)

print(f"registry-check: {len(files)} posts, all three registration points agree.")
