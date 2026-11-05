#!/usr/bin/env node
/* site-leak-check.mjs — content-level guard for the PUBLIC site artifact.

   node scripts/site-leak-check.mjs <artifactDir>

   The path allowlist (.github/pages-allowlist.txt) decides what is copied;
   this check decides what may NEVER be published, whatever its path or name.
   It fails (exit 1) if the artifact contains:

     - a file byte-identical to a private-only source file: every paid
       chapter data file, the full word-popup dictionary (global-lexicon.js,
       story-lexicon.js), the full audio manifest (paid lesson text), every
       paid timing sidecar, every tracked MP3/WAV/ZIP (uploads/ etc.)
     - any audio file (.mp3/.wav/.ogg/.m4a) or archive (.zip) at all
     - gated-payload markers (window.KW_CHAPTER_AUDIO / KW_CHAPTER_LEXICON
       assignments)
     - a dictionary larger than the public subset (KW_INFLECTIONS entries)
     - paid stale-tail transcript text in kw-reading-exceptions.js
     - a timing sidecar named in the paid set

   Prints file NAMES only (never contents), so it is safe in public logs. */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { splitAudio } from "./chapter-lock.mjs";
import { freeNeeds } from "./lexicon-split.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
const MEDIA = /\.(mp3|wav|ogg|m4a|aac|flac|zip)$/i;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.isFile()) out.push(p);
  }
  return out;
}

/* Private-only source files: hash → repo path. */
export function privateFiles() {
  const tracked = execFileSync("git", ["ls-files", "-z"], { cwd: ROOT, encoding: "utf8", maxBuffer: 256 << 20 }).split("\0").filter(Boolean);
  const paidTiming = new Set();
  for (const [, c] of splitAudio().paid) for (const v of Object.values(c.entries)) if (v && v.contentHash) paidTiming.add(`audio-timing/${v.contentHash}.json`);
  const sensitive = tracked.filter((f) =>
    (/^chapter\/chapter-.+-data\.js$/.test(f) && !/^chapter\/chapter-(a1|a2|b1|b2|c1|c2)-0?1-/.test(f)) ||
    f === "chapter/global-lexicon.js" || f === "chapter/story-lexicon.js" ||
    f === "public/audio/manifest.json" || paidTiming.has(f) || MEDIA.test(f));
  const byHash = new Map();
  for (const f of sensitive) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p)) byHash.set(sha(fs.readFileSync(p)), f);
  }
  return { byHash, paidTiming, count: sensitive.length };
}

export function checkArtifact(dir) {
  const problems = [];
  const files = walk(dir);
  const { byHash, paidTiming } = privateFiles();
  const maxInflections = freeNeeds().inf.size;
  for (const p of files) {
    const rel = path.relative(dir, p).split(path.sep).join("/");
    const buf = fs.readFileSync(p);
    const hit = byHash.get(sha(buf));
    if (hit) problems.push(`${rel}: identical to private source ${hit}`);
    if (MEDIA.test(rel)) problems.push(`${rel}: audio/archive file in the public artifact`);
    if (paidTiming.has(rel)) problems.push(`${rel}: paid timing sidecar`);
    if (/\.(js|html|json)$/.test(rel)) {
      const s = buf.toString("utf8");
      if (/window\.KW_CHAPTER_AUDIO\s*=/.test(s)) problems.push(`${rel}: gated audio payload marker (KW_CHAPTER_AUDIO)`);
      if (/window\.KW_CHAPTER_LEXICON\s*=/.test(s)) problems.push(`${rel}: gated dictionary payload marker (KW_CHAPTER_LEXICON)`);
      if (/window\.KW_INFLECTIONS\s*=/.test(s)) {
        const w = {};
        try { vm.runInNewContext(s, { window: w, self: w }, { timeout: 5000 }); } catch { /* not runnable alone */ }
        const n = w.KW_INFLECTIONS ? Object.keys(w.KW_INFLECTIONS).length : 0;
        if (n > maxInflections) problems.push(`${rel}: dictionary larger than the public subset (${n} > ${maxInflections} inflections)`);
      }
      if (/kw-reading-exceptions\.js$/.test(rel) && (s.match(/"staleTail"/g) || []).length > 1) problems.push(`${rel}: paid transcript text (staleTail)`);
    }
  }
  return { files: files.length, problems };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const dir = process.argv[2];
  if (!dir || !fs.existsSync(dir)) { console.error("usage: site-leak-check.mjs <artifactDir>"); process.exit(2); }
  const { files, problems } = checkArtifact(path.resolve(dir));
  for (const p of problems) console.error("::error::LEAK: " + p);
  console.log(problems.length ? `site leak check FAILED: ${problems.length} problem(s) in ${files} files` : `site leak check passed: ${files} files, no private content`);
  process.exit(problems.length ? 1 : 0);
}
