#!/usr/bin/env bash
# publish.sh — one-command publish for chrisdorsey.co
#
# Usage:
#   ./publish.sh "Short note about what you're publishing"
#
# What it does, in order:
#   1. Makes sure you're on `main` (the branch Vercel deploys).
#   2. Runs the VOICE CHECK on every changed post and shows the results.
#      If any hard "AI tell" is found, it asks before continuing — so you
#      can cancel and fix BEFORE anything is committed or pushed.
#   3. Commits everything and pushes to GitHub `main`, which Vercel builds
#      and deploys automatically. Live in ~1 minute.
#
# This is the ONLY way the site should be published. Do not use
# `vercel deploy` / `vercel --prod` — that uploads outside of git and is what
# caused the live-vs-GitHub drift.

set -uo pipefail
cd "$(dirname "$0")"

MSG="${*:-Update site content}"

# 1) Make sure we're on main (the branch Vercel deploys)
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "You're on '$BRANCH', not 'main'. Switching to main first..."
  git checkout main || exit 1
fi

# Grab any changes that exist on GitHub before we add ours
git pull --rebase --autostash origin main || exit 1

# 2) VOICE CHECK — always runs before publishing -----------------------------
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

# 3) Stage, commit, push
git add -A
if git diff --cached --quiet; then
  echo "Nothing to publish — no changes detected."
  exit 0
fi

git commit -m "$MSG" || exit 1
# Voice check already ran above, so skip the duplicate pre-push prompt.
git push --no-verify origin main || exit 1

echo ""
echo "Pushed to GitHub. Vercel is building now."
echo "  Watch:  https://vercel.com/ctjdorsey-4314s-projects/chrisdorsey/deployments"
echo "  Live (~1 min):  https://chrisdorsey.co"
