#!/usr/bin/env bash
# publish.sh — one-command publish for chrisdorsey.co
#
# Usage:
#   ./publish.sh "Short note about what you're publishing"
#
# What it does: commits everything that's changed and pushes it to GitHub's
# `main` branch. Vercel watches `main` and automatically builds + deploys the
# site. Your live site at https://chrisdorsey.co is whatever is on `main`.
#
# This is now the ONLY way the site should be published. Do not use
# `vercel deploy` / `vercel --prod` anymore — that uploads outside of git and
# is what caused the live-vs-GitHub drift.

set -euo pipefail
cd "$(dirname "$0")"

MSG="${*:-Update site content}"

# Make sure we're on main (the branch Vercel deploys)
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "You're on '$BRANCH', not 'main'. Switching to main first..."
  git checkout main
fi

# Grab any changes that exist on GitHub before we add ours
git pull --rebase --autostash origin main

# Stage and check whether there's anything to publish
git add -A
if git diff --cached --quiet; then
  echo "Nothing to publish — no changes detected."
  exit 0
fi

git commit -m "$MSG"
git push origin main

echo ""
echo "Pushed to GitHub. Vercel is building now."
echo "  Watch:  https://vercel.com/ctjdorsey-4314s-projects/chrisdorsey/deployments"
echo "  Live (~1 min):  https://chrisdorsey.co"
