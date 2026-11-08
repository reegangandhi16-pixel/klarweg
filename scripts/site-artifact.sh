#!/usr/bin/env bash
# site-artifact.sh <outDir> — build the PUBLIC site artifact.
#
# The ONLY thing that decides what is published. Used by
# .github/workflows/deploy-pages.yml and by scripts/site-publish.sh (manual
# fallback). Reads .github/pages-allowlist.txt and copies exactly those paths
# (plus GLOB: lines) into a clean directory, then hard-fails if anything
# private is present: prohibited path prefixes, unexpected chapter/ or
# report/ files, the full audio manifest, extra timing files, dotfiles
# (path checks), and finally scripts/site-leak-check.mjs (content checks:
# paid chapter data, full dictionary, paid timing, any audio, gated-payload
# markers). Run from the repository root. Prints file names only.
set -euo pipefail
shopt -s nullglob
OUT_ARG="${1:?usage: site-artifact.sh <outDir>}"
mkdir -p "$OUT_ARG"
OUT_ABS="$(cd "$OUT_ARG" && pwd -P)"
cd "$(dirname "$0")/.."
ROOT_ABS="$(pwd -P)"
# Safety: the out dir is wiped; never the repo itself, a parent of it, or /.
case "$OUT_ABS" in /|/*/|"") echo "refusing to use $OUT_ABS as the artifact dir"; exit 2 ;; esac
[ "$(printf '%s' "$OUT_ABS" | tr -cd '/' | wc -c)" -ge 3 ] || { echo "refusing shallow artifact dir $OUT_ABS"; exit 2; }
case "$ROOT_ABS/" in "$OUT_ABS"/*) echo "refusing to use $OUT_ABS as the artifact dir"; exit 2 ;; esac
if [ "$OUT_ABS" != "$ROOT_ABS/_site" ] && [ "${OUT_ABS#"$ROOT_ABS"/}" != "$OUT_ABS" ]; then
  echo "artifact dir inside the repo must be _site"; exit 2
fi

ARTIFACT_DIR="$OUT_ABS"
ALLOWLIST=".github/pages-allowlist.txt"

rm -rf "$ARTIFACT_DIR"
mkdir -p "$ARTIFACT_DIR"

copy_path() {
  local src="$1"
  if [ ! -f "$src" ]; then
    echo "::error::Allowlisted path does not exist in repo: $src"
    exit 1
  fi
  mkdir -p "$ARTIFACT_DIR/$(dirname "$src")"
  cp "$src" "$ARTIFACT_DIR/$src"
}

total=0
while IFS= read -r line; do
  [ -z "$line" ] && continue
  case "$line" in
    \#*) continue ;;
  esac

  if [[ "$line" == GLOB:* ]]; then
    pattern="${line#GLOB:}"
    matched=0
    for f in $pattern; do
      copy_path "$f"
      matched=$((matched + 1))
      total=$((total + 1))
    done
    if [ "$matched" -eq 0 ]; then
      echo "::error::Glob pattern matched zero files (was something renamed/deleted?): $pattern"
      exit 1
    fi
    echo "Glob $pattern -> $matched files"
  else
    copy_path "$line"
    total=$((total + 1))
  fi
done < "$ALLOWLIST"

echo "----------------------------------------"
echo "PUBLIC FILE COUNT (from allowlist): $total"
echo "TOTAL ARTIFACT FILE COUNT: $(find "$ARTIFACT_DIR" -type f | wc -l)"
echo "----------------------------------------"

# ---------- path assertions ----------
FAIL=0

# Directories that must never appear in the artifact at all.
# "report" is NOT listed here: report/kw-report.js and
# report/kw-report.css are intentionally published (see the
# allowlist), and the dedicated report/ assertion below enforces
# that nothing else from that directory ever leaks - the same
# selective-carve-out pattern the chapter/ assertion already uses.
PROHIBITED_PREFIXES=(
  "access"
  "admin"
  "audit"
  "uploads"
  "scripts"
  "content"
  "audio-manifests"
  "deployment"
  "deliverables"
  "lib"
  "react-lib"
  "app"
  "screenshots"
  "tutor"
  "audio"
)
for prefix in "${PROHIBITED_PREFIXES[@]}"; do
  if [ -e "$ARTIFACT_DIR/$prefix" ]; then
    echo "::error::PROHIBITED PATH PRESENT IN ARTIFACT: $prefix"
    FAIL=1
  fi
done

# chapter/ is the one directory where public and private files
# are interleaved in the source repo. Every file that ends up
# in the artifact's chapter/ must match one of the known-good
# patterns - anything else is a leak of an internal doc/script.
if [ -d "$ARTIFACT_DIR/chapter" ]; then
  while IFS= read -r f; do
    base="$(basename "$f")"
    case "$base" in
      chapter-app.js|chapter.css|chapter-tutor.js) ;;
      tokenizer.js|chapter-story.js) ;;
      global-lexicon-public.js|story-lexicon-public.js) ;;
      # Free Chapter 1 payloads only - paid chapter content
      # is served by the Access Worker, never by Pages.
      chapter-a1-1-data.js|chapter-a2-1-genitiv-data.js|chapter-b1-1-infinitiv-mit-zu-data.js) ;;
      chapter-b2-01-erweiterte-satzklammer-data.js|chapter-c1-01-tempusgebrauch-stilistische-tempuswahl-data.js|chapter-c2-01-zeitformen-der-verben-data.js) ;;
      chapter-*.html) ;;
      *)
        echo "::error::UNEXPECTED FILE IN chapter/ ARTIFACT: $f"
        FAIL=1
        ;;
    esac
  done < <(find "$ARTIFACT_DIR/chapter" -type f)
fi

# report/ is the other directory (besides chapter/) where public
# and private files are interleaved in the source repo:
# report/worker/ is a separate, complete Cloudflare Worker
# (source, wrangler.toml, an admin-credential hashing tool, an
# admin dashboard) and report/_dev-*.html / _dev-mocks.js are
# internal dev harnesses - none of it may ever be published.
# Only the 2 named files below may appear in the artifact's
# report/ - anything else is a leak.
if [ -d "$ARTIFACT_DIR/report" ]; then
  while IFS= read -r f; do
    base="$(basename "$f")"
    case "$base" in
      kw-report.js|kw-report.css) ;;
      *)
        echo "::error::UNEXPECTED FILE IN report/ ARTIFACT: $f"
        FAIL=1
        ;;
    esac
  done < <(find "$ARTIFACT_DIR/report" -type f)
fi

# Paid lesson text: the full audio manifest and any timing sidecar
# not named in the allowlist's generated block must never ship.
if [ -e "$ARTIFACT_DIR/public/audio/manifest.json" ]; then
  echo "::error::FULL AUDIO MANIFEST (paid lesson text) IN ARTIFACT"
  FAIL=1
fi
if [ -d "$ARTIFACT_DIR/audio-timing" ]; then
  allowed_timing="$(grep -c '^audio-timing/' "$ALLOWLIST")"
  shipped_timing="$(find "$ARTIFACT_DIR/audio-timing" -type f | wc -l | tr -d ' ')"
  if [ "$shipped_timing" -gt "$allowed_timing" ]; then
    echo "::error::audio-timing: $shipped_timing files shipped, only $allowed_timing are public"
    FAIL=1
  fi
fi

# No dotfiles or .env-shaped files should ever be in the
# artifact - the allowlist should never have listed one, but
# assert it explicitly rather than relying on that.
if find "$ARTIFACT_DIR" -name ".*" -type f | grep -q .; then
  echo "::error::Dotfile present in artifact - should never be listed in the allowlist:"
  find "$ARTIFACT_DIR" -name ".*" -type f
  FAIL=1
fi

if [ "$FAIL" -eq 1 ]; then
  echo "::error::Deployment artifact must not contain any prohibited private path. Failing build - Pages will NOT be updated."
  exit 1
fi

echo "Assertion passed: no prohibited private paths found in artifact."

# ---------- clean URLs ----------
# Advertise /about instead of /about.html (canonical, sitemap, JSON-LD,
# links) in the published copy only; Pages serves both forms.
node scripts/clean-urls.mjs "$ARTIFACT_DIR"

# ---------- content assertions ----------
node scripts/site-leak-check.mjs "$ARTIFACT_DIR"
