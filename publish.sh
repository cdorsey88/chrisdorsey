#!/usr/bin/env bash
# publish.sh — one-command publish for chrisdorsey.co
#
# Usage:
#   ./publish.sh "Short note about what you're publishing"
#
# What it does, in order:
#   1. Makes sure you're on `main` (the branch Vercel deploys) and up to date.
#   2. PREFLIGHT (blocking, no override):
#        a. registry check — every post exists in all 3 registration points
#        b. type-check   — the exact check Vercel's build will run
#   3. VOICE CHECK on every changed post. Hard "AI tells" prompt before
#      continuing, so you can cancel and fix BEFORE anything is committed.
#   4. Commits everything and pushes. The pre-push hook re-verifies the
#      COMMITTED tree (catches files you forgot to `git add`).
#   5. VERIFIES THE DEPLOY: polls https://chrisdorsey.co/version until the
#      live site reports the commit we just pushed. Prints LIVE or FAILED.
#
# This is the ONLY way the site should be published. Do not use
# `vercel deploy` / `vercel --prod` — that uploads outside of git and is what
# caused the live-vs-GitHub drift.

set -uo pipefail
cd "$(dirname "$0")"

MSG="${*:-Update site content}"
SITE="https://chrisdorsey.co"

# 1) Make sure we're on main (the branch Vercel deploys)
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "You're on '$BRANCH', not 'main'. Switching to main first..."
  git checkout main || exit 1
fi

# Grab any changes that exist on GitHub before we add ours
git pull --rebase --autostash origin main || exit 1

# 2) PREFLIGHT — blocking, no override ---------------------------------------
echo ""
echo "── Preflight ─────────────────────────────────────────────"
if ! python3 scripts/check-post-registry.py; then
  echo ""
  echo "Publish cancelled — fix the registration above and run ./publish.sh again."
  exit 1
fi

echo "type-checking (what Vercel will build)..."
if ! npx --no-install tsc --noEmit; then
  echo ""
  echo "Publish cancelled — the site does not compile. Vercel's build would fail"
  echo "and NOTHING would go live. Fix the errors above first."
  exit 1
fi
echo "type-check: clean."

# 3) VOICE CHECK — always runs before publishing -----------------------------
echo ""
echo "── Voice check ───────────────────────────────────────────"
git fetch origin main --quiet 2>/dev/null || true
CHANGED=$( { git diff --name-only origin/main 2>/dev/null; \
             git diff --name-only --staged 2>/dev/null; \
             git diff --name-only 2>/dev/null; } | sort -u )
# Lint posts only. Exclude repo docs/config (CLAUDE.md, README, etc.) — they
# document the banned patterns as examples and would always trip the linter.
POSTS=$(echo "$CHANGED" | grep -Ei '\.(md|mdx)$|/(writing|posts|blog|content)/.*\.(tsx|ts)$' \
        | grep -viE '(^|/)(CLAUDE|README|CONTRIBUTING|AGENTS)\.mdx?$' || true)

LINT_FAIL=0
if [ -n "$POSTS" ]; then
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    [ -f "$f" ] || continue
    python3 scripts/voice-lint.py "$f" || LINT_FAIL=1
  done <<< "$POSTS"
else
  echo "No post files changed — nothing to voice-check."
fi
echo "──────────────────────────────────────────────────────────"

if [ "$LINT_FAIL" -ne 0 ]; then
  printf "\nvoice-lint found HARD-ban tells above. Publish anyway? [y/N] "
  read -r ans
  case "$ans" in
    y|Y|yes|YES) echo "Publishing despite tells." ;;
    *) echo "Publish cancelled. Fix the tells and run ./publish.sh again."; exit 1 ;;
  esac
fi
# ---------------------------------------------------------------------------

# 4) Stage, commit, push
git add -A
if git diff --cached --quiet; then
  echo "Nothing to publish — no changes detected."
  exit 0
fi

echo ""
echo "Committing:"
git diff --cached --name-status | sed 's/^/  /'

git commit -m "$MSG" || exit 1

# The pre-push hook re-verifies the COMMITTED tree (build + registry). That is
# the gate that catches "wrote the file but never git-added it". Voice check
# already ran above, so tell the hook to skip only that duplicate step.
SKIP_VOICE_LINT=1 git push origin main || exit 1

# 5) VERIFY THE DEPLOY -------------------------------------------------------
SHA="$(git rev-parse HEAD)"
echo ""
echo "Pushed ${SHA:0:7}. Waiting for Vercel to build and serve it..."
echo "  Watch:  https://vercel.com/ctjdorsey-4314s-projects/chrisdorsey/deployments"

DEADLINE=$((SECONDS + 300))   # give Vercel up to 5 minutes
while [ "$SECONDS" -lt "$DEADLINE" ]; do
  GOT="$(curl -fsS --max-time 10 "$SITE/version" 2>/dev/null | grep -oE '[0-9a-f]{40}' | head -1 || true)"
  if [ "$GOT" = "$SHA" ]; then
    echo ""
    echo "LIVE ✓  $SITE is serving commit ${SHA:0:7}."
    # Print direct links to any posts that changed in this publish
    echo "$CHANGED" | grep -oE 'app/writing/posts/[a-z0-9-]+\.tsx' \
      | sed -E "s#app/writing/posts/(.+)\.tsx#  $SITE/writing/\1#" | sort -u || true
    exit 0
  fi
  sleep 15
done

echo ""
echo "FAILED ✗  5 minutes passed and $SITE/version still isn't serving ${SHA:0:7}."
echo "The deploy likely failed. Check the build log:"
echo "  https://vercel.com/ctjdorsey-4314s-projects/chrisdorsey/deployments"
echo "The previous version of the site is still live — nothing is broken publicly,"
echo "but this publish DID NOT go out."
exit 1
