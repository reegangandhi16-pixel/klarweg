#!/usr/bin/env bash
# site-publish.sh <artifactDir> <siteRemote> [sourceSha]
#
# Publishes a built, leak-checked artifact (scripts/site-artifact.sh) to the
# PUBLIC site repository (reegangandhi16-pixel/klarweg-site), whose GitHub
# Pages (branch main, /) serves https://klarweg.in. The source repository
# (klarweg) is private; nothing but the artifact ever reaches the site repo.
#
#   CI:     .github/workflows/deploy-pages.yml (deploy key SITE_DEPLOY_KEY)
#   Manual: scripts/site-artifact.sh /tmp/kw-site &&
#           SITE_CNAME="" scripts/site-publish.sh /tmp/kw-site https://github.com/reegangandhi16-pixel/klarweg-site.git
#
# The site repo tree = artifact + .nojekyll (+ CNAME only if SITE_CNAME is non-empty; required,
# CI sets it from vars.SITE_CNAME, empty until the domain move). Files no
# longer in the artifact are deleted from the site. The leak check runs again
# on the exact tree being pushed. Prints file names/counts only.
set -euo pipefail
ART="${1:?usage: site-publish.sh <artifactDir> <siteRemote> [sourceSha]}"
REMOTE="${2:?usage: site-publish.sh <artifactDir> <siteRemote> [sourceSha]}"
SRC_SHA="${3:-$(git -C "$(dirname "$0")/.." rev-parse HEAD)}"
: "${SITE_CNAME?SITE_CNAME must be set: empty before the domain move, klarweg.in after it}"
ROOT="$(cd "$(dirname "$0")/.." && pwd -P)"
ART="$(cd "$ART" && pwd -P)"
[ -f "$ART/index.html" ] || { echo "artifact has no index.html: $ART"; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
# Fetch the current site history. Git errors are never hidden: a failed clone
# used to fall back silently to `git init`, and the history-less push was then
# rejected as "fetch first" (2026-11-04, during a GitHub Git Operations
# incident), which hid the real error. Now:
#   - transient failures are retried (PUBLISH_RETRIES, default 3);
#   - an unreachable/unauthorised remote stops the publish with git's error;
#   - a fresh repo is created only when the remote is reachable AND has no
#     main branch yet (the very first publish).
RETRIES="${PUBLISH_RETRIES:-3}"
DELAY="${PUBLISH_RETRY_DELAY:-10}"
retry() {
  local n=1
  until "$@"; do
    if [ "$n" -ge "$RETRIES" ]; then echo "site-publish: '$1 $2' failed after $n attempt(s)" >&2; return 1; fi
    echo "site-publish: '$1 $2' attempt $n failed; retrying in $((n * DELAY))s" >&2
    sleep $((n * DELAY)); n=$((n + 1))
  done
}
clone_site() { rm -rf "$WORK/site"; git clone --quiet --depth 1 --branch main "$REMOTE" "$WORK/site"; }

HEADS="$(retry git ls-remote --heads "$REMOTE" main)" \
  || { echo "site-publish: cannot reach the site repository (git error above); nothing published" >&2; exit 1; }
if [ -n "$HEADS" ]; then
  retry clone_site || { echo "site-publish: cannot clone the site repository (git error above); nothing published" >&2; exit 1; }
else
  echo "site-publish: site repository has no main branch yet; first publish"
  git init --quiet -b main "$WORK/site"
  git -C "$WORK/site" remote add origin "$REMOTE"
fi
cd "$WORK/site"
git checkout --quiet -B main

# Replace the tree with the artifact (keep .git only).
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$ART"/. .
# Custom domain file. SITE_CNAME must be given explicitly (no default):
#   SITE_CNAME=""            no CNAME (before the domain moves to this repo)
#   SITE_CNAME=klarweg.in    after the domain move
# A CNAME in this repo makes GitHub Pages claim that domain, so never guess.
rm -f CNAME
if [ -n "$SITE_CNAME" ]; then printf '%s\n' "$SITE_CNAME" > CNAME; fi
: > .nojekyll

# Second, independent check on exactly what will be pushed.
git add -A
TREE="$WORK/tree"; mkdir -p "$TREE"
git ls-files --cached -z | (cd "$WORK/site" && xargs -0 -I{} sh -c 'mkdir -p "$1/$(dirname "$2")" && cp "$2" "$1/$2"' _ "$TREE" {})
rm -f "$TREE/CNAME" "$TREE/.nojekyll"
(cd "$ROOT" && node scripts/site-leak-check.mjs "$TREE")

if git diff --cached --quiet; then echo "site unchanged (klarweg@${SRC_SHA:0:12})"; exit 0; fi
git -c user.name="klarweg-deploy" -c user.email="deploy@klarweg.in" commit --quiet -m "Deploy klarweg@${SRC_SHA:0:12}"
git push --quiet origin main
echo "published $(git ls-files | wc -l | tr -d ' ') files → $(git rev-parse --short HEAD) (klarweg@${SRC_SHA:0:12})"
