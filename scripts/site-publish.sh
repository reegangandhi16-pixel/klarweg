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
#           scripts/site-publish.sh /tmp/kw-site https://github.com/reegangandhi16-pixel/klarweg-site.git
#
# The site repo tree = artifact + CNAME (SITE_CNAME, default klarweg.in) + .nojekyll. Files no
# longer in the artifact are deleted from the site. The leak check runs again
# on the exact tree being pushed. Prints file names/counts only.
set -euo pipefail
ART="${1:?usage: site-publish.sh <artifactDir> <siteRemote> [sourceSha]}"
REMOTE="${2:?usage: site-publish.sh <artifactDir> <siteRemote> [sourceSha]}"
SRC_SHA="${3:-$(git -C "$(dirname "$0")/.." rev-parse HEAD)}"
ROOT="$(cd "$(dirname "$0")/.." && pwd -P)"
ART="$(cd "$ART" && pwd -P)"
[ -f "$ART/index.html" ] || { echo "artifact has no index.html: $ART"; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
git clone --quiet --depth 1 "$REMOTE" "$WORK/site" 2>/dev/null || { git init --quiet -b main "$WORK/site"; git -C "$WORK/site" remote add origin "$REMOTE"; }
cd "$WORK/site"
git checkout --quiet -B main

# Replace the tree with the artifact (keep .git only).
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$ART"/. .
# Custom domain file: SITE_CNAME (default klarweg.in). SITE_CNAME="" publishes
# with NO CNAME (e.g. before the domain moves to this repo).
rm -f CNAME
SITE_CNAME="${SITE_CNAME-klarweg.in}"
if [ -n "$SITE_CNAME" ]; then printf '%s\n' "$SITE_CNAME" > CNAME; fi
: > .nojekyll

# Second, independent check on exactly what will be pushed.
TREE="$WORK/tree"; mkdir -p "$TREE"
git ls-files --others --cached --exclude-standard -z | (cd "$WORK/site" && xargs -0 -I{} sh -c 'mkdir -p "$1/$(dirname "$2")" && cp "$2" "$1/$2"' _ "$TREE" {})
rm -f "$TREE/CNAME" "$TREE/.nojekyll"
(cd "$ROOT" && node scripts/site-leak-check.mjs "$TREE")

git add -A
if git diff --cached --quiet; then echo "site unchanged (klarweg@${SRC_SHA:0:12})"; exit 0; fi
git -c user.name="klarweg-deploy" -c user.email="deploy@klarweg.in" commit --quiet -m "Deploy klarweg@${SRC_SHA:0:12}"
git push --quiet origin main
echo "published $(git ls-files | wc -l | tr -d ' ') files → $(git rev-parse --short HEAD) (klarweg@${SRC_SHA:0:12})"
