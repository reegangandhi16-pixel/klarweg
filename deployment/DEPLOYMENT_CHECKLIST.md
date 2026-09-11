# klarweg-audio-cdn Production Deployment — Checklist

Merges 2,633 verified A1/A2 vocabulary words (5,266 MP3 files) from
`klarweg-audio` into `klarweg-audio-cdn`, closing the manifest gap that left
every A1/A2 word falling back to browser TTS. No audio regenerated — every
file below was confirmed to exist and load (HTTP 200) before being queued.

## Files in this package
- `deployment/manifest.json` — final production manifest, 12,036 entries
  (9,403 existing CDN entries, untouched, + 2,633 newly merged A1/A2 entries,
  all relative-path `audio/female|male/<hash>.mp3`, matching the existing shape).
- `deployment/file-copy-list.csv` — all 5,266 files to copy, source → destination.
- `deployment/copy-files.sh` — macOS/Linux shell script that performs the copy.

## Pre-flight
- [ ] Clone or update both repos as sibling directories:
  ```
  git clone https://github.com/reegangandhi16-pixel/klarweg-audio.git
  git clone https://github.com/reegangandhi16-pixel/klarweg-audio-cdn.git
  ```
- [ ] Confirm you're on `main` in both, up to date (`git pull`).
- [ ] Copy this project's `deployment/` folder next to both clones (same parent dir).

## Step 1 — Copy files
- [ ] Run:
  ```
  chmod +x deployment/copy-files.sh
  ./deployment/copy-files.sh
  ```
- [ ] Confirm output: `Copied 5266 files.`
- [ ] Spot-check a few destinations exist:
  ```
  ls klarweg-audio-cdn/audio/female | wc -l
  ls klarweg-audio-cdn/audio/male | wc -l
  ```

## Step 2 — Replace the manifest
- [ ] Back up the current production manifest first:
  ```
  cp klarweg-audio-cdn/manifest.json klarweg-audio-cdn/manifest.json.bak
  ```
- [ ] Copy the new one in:
  ```
  cp deployment/manifest.json klarweg-audio-cdn/manifest.json
  ```

## Step 3 — Validate BEFORE committing
- [ ] From this project, run the validation script against the local
  `klarweg-audio-cdn` checkout:
  ```
  npx tsx scripts/validate-audio-deployment.ts --cdn-repo=../klarweg-audio-cdn --canon=scripts/out/vocab-canon.json
  ```
  (or `ts-node` if that's your project's runner — adjust to however you already
  run the other `scripts/*.ts` files)
- [ ] Confirm output ends with `✅ VALIDATION PASSED`. If it fails, STOP —
  do not commit. Re-check Step 1/2 output against the error list printed.

## Step 4 — Commit and push
- [ ] From inside `klarweg-audio-cdn`:
  ```
  cd klarweg-audio-cdn
  git add manifest.json audio/female audio/male
  git status   # sanity-check: ~5,266 new files + 1 modified manifest.json
  git commit -m "Merge verified A1/A2 vocabulary audio into production manifest

  - Adds 2,633 words (5,266 MP3s) previously only in klarweg-audio
  - All files verified present (HTTP 200) before merge, no audio regenerated
  - Closes A1/A2 browser-TTS-fallback gap (manifest never had these words)"
  git push origin main
  ```

## Step 5 — Confirm GitHub Pages redeploys
- [ ] Check the repo's Actions/Pages tab for a successful deploy of the new commit.
- [ ] Once live, fetch the manifest to confirm the new count:
  ```
  curl -s https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/manifest.json | python3 -c "import json,sys; print(len(json.load(sys.stdin)))"
  ```
  Expect: `12036`

## Step 6 — Live verification (I will do this once you confirm push is live)
Tell me when Step 5 is done and I will trace, on the live site, that these
now resolve to professional audio instead of browser TTS:
- der Apfel
- das Buch
- das Haus
- der Mann
- die Frau

## Rollback (if anything goes wrong)
```
cd klarweg-audio-cdn
git revert HEAD
git push origin main
```
(`manifest.json.bak` from Step 2 is also available locally as an immediate
non-git fallback if needed before you commit.)
