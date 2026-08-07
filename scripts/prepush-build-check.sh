#!/usr/bin/env bash
# Verify the COMMITTED tree compiles — not the working tree.
#
# Why this exists: on Aug 6 2026 a commit shipped app/writing/posts/index.ts with
# imports for two post files that were never `git add`ed. Local builds passed
# (the files existed on disk), voice-lint passed (it reads the working tree), the
# push succeeded, and Vercel failed on module-not-found. Three finished posts sat
# behind a broken deploy for two days with no signal.
#
# This checks out HEAD into a throwaway worktree and type-checks it, which is the
# same thing Vercel does. Catches missing files, bad imports, and type errors.

set -uo pipefail
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$REPO_ROOT" || exit 0

[ -f "$REPO_ROOT/tsconfig.json" ] || exit 0
[ -d "$REPO_ROOT/node_modules" ] || { echo "build-check: no node_modules, skipping."; exit 0; }

TMP="$(mktemp -d -t chrisdorsey-prepush-XXXXXX)" || exit 0
cleanup() {
  git worktree remove --force "$TMP" >/dev/null 2>&1
  rm -rf "$TMP" >/dev/null 2>&1
}
trap cleanup EXIT

echo "build-check: type-checking the committed tree (what Vercel will build)..."

if ! git worktree add --detach --quiet "$TMP" HEAD >/dev/null 2>&1; then
  echo "build-check: could not create worktree, skipping (not blocking push)."
  exit 0
fi

# Reuse the real node_modules instead of reinstalling.
ln -s "$REPO_ROOT/node_modules" "$TMP/node_modules" 2>/dev/null

OUT="$(cd "$TMP" && npx --no-install tsc --noEmit 2>&1)"
STATUS=$?

if [ $STATUS -eq 0 ]; then
  echo "build-check: committed tree compiles."
  exit 0
fi

echo ""
echo "build-check: THE COMMITTED TREE DOES NOT COMPILE."
echo "This is what Vercel will try to build. Pushing now means a failed deploy."
echo ""
echo "$OUT" | head -25
echo ""

# Most common cause: a new file was written but never committed.
UNTRACKED="$(git ls-files --others --exclude-standard -- app/ 2>/dev/null)"
if [ -n "$UNTRACKED" ]; then
  echo "Untracked files under app/ — one of these is probably the missing import:"
  echo "$UNTRACKED" | sed 's/^/  /'
  echo ""
  echo "Fix:  git add app/ && git commit --amend --no-edit"
  echo ""
fi

exit 1
