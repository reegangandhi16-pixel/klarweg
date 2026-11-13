#!/usr/bin/env node
/* Stage the PRIVATE paid vocabulary images for upload to R2 (release step,
   owner-run; see docs/visual-vocab/ROLLOUT.md).

     node scripts/vocab-images/release-r2.mjs            (check + write pairs files)
     node scripts/vocab-images/release-r2.mjs --upload [--local]

   Uploads $VOCAB_IMG_STORE/r2/vocab-img/<id>-<w>.<fmt> for every id in
   docs/visual-vocab/gated-images.json to the private bucket klarweg-audio
   under vocab-img/, then vocab-img/levels.json LAST (the Worker answers 503
   until the map exists, so a half-finished upload never serves anything).
   Refuses if any referenced file is missing or the store's levels.json
   differs from the committed map. Nothing is ever made public. */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT } from "./lib.mjs";
import { STORE } from "./budget.mjs";

const BUCKET = "klarweg-audio";
const DIR = path.join(STORE, "r2/vocab-img");
const OUT = path.join(STORE, "release");
const map = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/visual-vocab/gated-images.json"), "utf8"));
const storeMap = JSON.parse(fs.readFileSync(path.join(DIR, "levels.json"), "utf8"));
if (JSON.stringify(map) !== JSON.stringify(storeMap)) throw new Error("store levels.json ≠ docs/visual-vocab/gated-images.json — run pipeline apply/syncManifests");
const pairs = { avif: [], webp: [] };
let bytes = 0;
for (const id of Object.keys(map)) for (const w of [400, 800]) for (const f of ["avif", "webp"]) {
  const file = path.join(DIR, `${id}-${w}.${f}`);
  if (!fs.existsSync(file)) throw new Error("missing " + file);
  bytes += fs.statSync(file).size;
  pairs[f].push({ key: `vocab-img/${id}-${w}.${f}`, file });
}
fs.mkdirSync(OUT, { recursive: true });
for (const f of ["avif", "webp"]) fs.writeFileSync(path.join(OUT, `pairs-${f}.json`), JSON.stringify(pairs[f]));
console.log(JSON.stringify({ images: Object.keys(map).length, objects: pairs.avif.length + pairs.webp.length, mb: +(bytes / 1048576).toFixed(1), pairs: OUT }));

if (process.argv.includes("--upload")) {
  const where = process.argv.includes("--local") ? "--local" : "--remote";
  const run = (a) => execFileSync("npx", ["wrangler", ...a], { stdio: "inherit", cwd: path.join(ROOT, "access/worker") });
  for (const [f, ct] of [["avif", "image/avif"], ["webp", "image/webp"]]) run(["r2", "bulk", "put", BUCKET, "--filename", path.join(OUT, `pairs-${f}.json`), "--ct", ct, where, "--concurrency", "16"]);
  run(["r2", "object", "put", `${BUCKET}/vocab-img/levels.json`, "--file", path.join(DIR, "levels.json"), "--ct", "application/json", where]);
}
