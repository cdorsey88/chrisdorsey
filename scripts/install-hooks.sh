#!/usr/bin/env bash
# One-time installer for the pre-push hook. Run:  bash scripts/install-hooks.sh
#
# Installs two gates:
#   1. build-check  — type-checks the COMMITTED tree (blocks; catches missing files)
#   2. voice-lint   — checks changed posts for AI tells (asks; style only)
#
# Cowork sessions can't write to .git/hooks, so this lives in scripts/ and you
# run it from your terminal.

set -euo pipefail
REPO_ROOT="$(git rev-parse --show-toplevel)"
HOOK="$REPO_ROOT/.git/hooks/pre-push"

if [ -f "$HOOK" ]; then
  cp "$HOOK" "$HOOK.bak.$(date +%Y%m%d%H%M%S)"
  echo "Backed up existing hook."
fi

cat > "$HOOK" <<'HOOK_EOF'
#!/usr/bin/env bash
# Git pre-push hook. Two gates before anything ships to GitHub -> Vercel.
#   Bypass everything with:  git push --no-verify

set -uo pipefail
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

# --- Gate 1: does the COMMITTED tree compile? --------------------------------
# voice-lint reads the WORKING tree, so it can't catch a file written but never
# `git add`ed. This gate type-checks HEAD the way Vercel will, and blocks.
BUILD_CHECK="$REPO_ROOT/scripts/prepush-build-check.sh"
if [ -f "$BUILD_CHECK" ]; then
  if ! bash "$BUILD_CHECK"; then
    echo "Push aborted — fix the build first (or: git push --no-verify)."
    exit 1
  fi
fi

# --- Gate 2: prose/voice lint ------------------------------------------------
LINTER="$REPO_ROOT/scripts/voice-lint.py"
[ -f "$LINTER" ] || exit 0

git fetch origin main --quiet 2>/dev/null || true
BASE="origin/main"
git rev-parse --verify "$BASE" >/dev/null 2>&1 || BASE=""
if [ -n "$BASE" ]; then
  CHANGED=$(git diff --name-only "$BASE"...HEAD 2>/dev/null)
else
  CHANGED=$(git diff --name-only HEAD~1...HEAD 2>/dev/null)
fi

POSTS=$(echo "$CHANGED" | grep -Ei '\.(md|mdx)$|/(writing|posts|blog|content)/.*\.(tsx|ts)$' | grep -Ev '^(CLAUDE|AGENTS|README)\.md$' || true)
[ -z "$POSTS" ] && exit 0

echo "voice-lint: checking changed posts for AI tells..."
FAIL=0
while IFS= read -r f; do
  [ -z "$f" ] && continue
  [ -f "$REPO_ROOT/$f" ] || continue
  if ! python3 "$LINTER" "$REPO_ROOT/$f"; then
    FAIL=1
  fi
done <<< "$POSTS"

if [ "$FAIL" -eq 0 ]; then
  echo "voice-lint: clean. Pushing."
  exit 0
fi

if [ -t 1 ] && [ -r /dev/tty ]; then
  printf "\nvoice-lint found HARD-ban tells above. Push anyway? [y/N] "
  read -r ans </dev/tty
  case "$ans" in
    y|Y|yes|YES) echo "Pushing despite tells."; exit 0 ;;
    *) echo "Push aborted. Fix the tells (or: git push --no-verify)."; exit 1 ;;
  esac
else
  echo "voice-lint: hard bans found (non-interactive run) — warning only, not blocking."
  exit 0
fi
HOOK_EOF

chmod +x "$HOOK"
chmod +x "$REPO_ROOT/scripts/prepush-build-check.sh" 2>/dev/null || true
echo "Installed pre-push hook with build-check + voice-lint."
