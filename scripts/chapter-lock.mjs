#!/usr/bin/env node
/* chapter-lock.mjs — paid chapter content is served by the Access Worker,
   never by GitHub Pages (access/worker/src/chapters.js).

   chapter/chapter-*-data.js stay the single source of truth. This script
   only derives two things from them:

   node scripts/chapter-lock.mjs pages [--check]
     Points every chapter page except Chapter 1 of a level at
       <KW_ACCESS_API>/chapters/<chapter-id>.js
     instead of its static data file. Chapter 1 pages keep the static file.
     --check: change nothing, exit 1 if any page is not in that state.

   node scripts/chapter-lock.mjs release --release rN [--out DIR] [--upload]
     Writes the private R2 release the Worker reads:
       DIR/chapters/rN/index.json        { chapters: { <id>: { title } } }
       DIR/chapters/rN/<chapter-id>.js   the data file, byte for byte
     --upload puts every object into the klarweg-resources bucket with
     wrangler (needs `wrangler login`). A release prefix is immutable: change
     content, bump N, upload, then set CHAPTER_RELEASE to the new rN.
     Each PAID chapter object is the data file followed by that chapter's
     audio lines and word timing (window.KW_CHAPTER_AUDIO), so transcripts
     of paid lessons are delivered only with the gated chapter.

   node scripts/chapter-lock.mjs audio [--check]
     Derives the PUBLIC audio files from public/audio/manifest.json (the
     full corpus, never published) and audio-timing/:
       public/audio/manifest-public.json   free Chapter 1, homepage and
                                           legacy entries only
       .github/pages-allowlist.txt         the generated audio-timing block:
                                           free Chapter 1 + homepage files only
     --check: change nothing, exit 1 if either is stale. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chapterData, chapterLexiconTail, lexiconShards } from "./lexicon-split.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHAPTER_DIR = path.join(ROOT, "chapter");
const BUCKET = "klarweg-resources";
const FREE_CHAPTER_NUMBER = 1;
const RELEASE = /^r[0-9]{1,4}$/;
const DATA_TAG = /<script src="(chapter-[a-z0-9-]+-data\.js)(?:\?v=[0-9]+)?"><\/script>/g;

/* The Worker origin, read from the one place the site defines it. */
export function accessApi() {
  const src = fs.readFileSync(path.join(ROOT, "kw-config.js"), "utf8");
  const m = src.match(/global\.KW_ACCESS_API = '(https:\/\/[^']+)';/);
  if (!m) throw new Error("kw-config.js: production KW_ACCESS_API not found");
  return m[1];
}

/* Every chapter: id, number, title and its data file, from the data files. */
export function loadChapters() {
  const out = [];
  for (const file of fs.readdirSync(CHAPTER_DIR).filter((f) => /^chapter-.+-data\.js$/.test(f)).sort()) {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(CHAPTER_DIR, file), "utf8"), sandbox, { filename: file });
    const C = sandbox.window.CHAPTER;
    const m = C && typeof C.id === "string" && C.id.match(/^(a1|a2|b1|b2|c1|c2)-([0-9]{1,2})-[a-z0-9-]+$/);
    if (!m) throw new Error(`${file}: window.CHAPTER.id missing or malformed`);
    out.push({ id: C.id, number: Number(m[2]), title: typeof C.title === "string" ? C.title : "", file });
  }
  return out;
}

/* The data file behind a chapter, from its id or its page name. Tests read
   chapter content through this, not through a page's <script src>, which
   for a paid chapter is the Worker URL. */
let dataFiles = null;
export function dataFileFor(pageOrId) {
  if (!dataFiles) dataFiles = new Map(loadChapters().map((c) => [c.id, c.file]));
  const id = String(pageOrId).replace(/^chapter-/, "").replace(/\.html$/, "");
  const file = dataFiles.get(id);
  if (!file) throw new Error(`no chapter data for ${pageOrId}`);
  return file;
}

const isFree = (c) => c.number === FREE_CHAPTER_NUMBER;

/* ---------- audio lines + word timing of paid chapters ---------- */
const MANIFEST = path.join(ROOT, "public", "audio", "manifest.json");
const PUBLIC_MANIFEST = path.join(ROOT, "public", "audio", "manifest-public.json");
const TIMING_DIR = path.join(ROOT, "audio-timing");
const ALLOWLIST = path.join(ROOT, ".github", "pages-allowlist.txt");
const TIMING_BEGIN = "# BEGIN generated: public audio-timing (scripts/chapter-lock.mjs audio) - do not edit";
const TIMING_END = "# END generated: public audio-timing";
const freeId = (id) => { const m = /^(a1|a2|b1|b2|c1|c2)-([0-9]{1,2})-/.exec(id); return !!m && Number(m[2]) === FREE_CHAPTER_NUMBER; };

/* Splits the full manifest: what may be public, and per paid chapter its
   entries and timing sidecars. A timing file belongs to the entry whose
   contentHash names it; files no entry names (homepage demos) are public. */
export function splitAudio() {
  const full = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  const { counts, ...meta } = full;
  const pub = { ...meta, publicSubset: "Free Chapter 1, homepage and legacy entries only. Paid chapter lines are delivered with each chapter by the Access Worker (scripts/chapter-lock.mjs).", entries: {} };
  const paid = new Map();
  const paidHashes = new Set();
  const pubHashes = new Set();
  for (const [text, v] of Object.entries(full.entries)) {
    const ch = v && typeof v === "object" && typeof v.chapter === "string" ? v.chapter : null;
    if (ch && !freeId(ch)) {
      if (!paid.has(ch)) paid.set(ch, { entries: {}, timing: {} });
      paid.get(ch).entries[text] = v;
      if (v.contentHash) paidHashes.add(v.contentHash);
    } else {
      pub.entries[text] = v;
      if (v && typeof v === "object" && v.contentHash) pubHashes.add(v.contentHash);
    }
  }
  for (const h of paidHashes) if (pubHashes.has(h)) throw new Error(`timing ${h} is shared by a free and a paid line`);
  const timingFiles = fs.readdirSync(TIMING_DIR).filter((f) => /^[0-9a-f]+\.json$/.test(f)).sort();
  for (const [, c] of paid) {
    for (const v of Object.values(c.entries)) {
      const f = v.contentHash && path.join(TIMING_DIR, v.contentHash + ".json");
      if (f && fs.existsSync(f)) c.timing[v.contentHash] = JSON.parse(fs.readFileSync(f, "utf8"));
    }
  }
  const publicTiming = timingFiles.filter((f) => !paidHashes.has(f.slice(0, -5)));
  return { pub, paid, publicTiming, paidTimingCount: timingFiles.length - publicTiming.length };
}

let split = null;
const audioSplit = () => (split ||= splitAudio());

// "<", U+2028 and U+2029 escaped so the literal is inert in any JS context.
const literal = (v) => JSON.stringify(v).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

/* What the Worker serves for a chapter: the data file, and for a paid
   chapter its audio appendix and its word-popup dictionary slice
   (scripts/lexicon-split.mjs). Free chapters stay byte-identical. */
export function releasePayload(c) {
  const data = fs.readFileSync(path.join(CHAPTER_DIR, c.file));
  if (isFree(c)) return data;
  const a = audioSplit().paid.get(c.id) || { entries: {}, timing: {} };
  const tail = "\n/* Audio lines and word timing for this chapter: delivered only with the gated chapter. */\n" +
    "window.KW_CHAPTER_AUDIO = " + literal({ chapter: c.id, entries: a.entries, timing: a.timing }) + ";\n" +
    chapterLexiconTail(chapterData(c.file));
  return Buffer.concat([data, Buffer.from(tail, "utf8")]);
}

export function publicAudio({ check = false } = {}) {
  const { pub, publicTiming, paidTimingCount } = audioSplit();
  const problems = [];
  const json = JSON.stringify(pub, null, 2) + "\n";
  const cur = fs.existsSync(PUBLIC_MANIFEST) ? fs.readFileSync(PUBLIC_MANIFEST, "utf8") : null;
  if (cur !== json) { if (check) problems.push("public/audio/manifest-public.json is stale (run: node scripts/chapter-lock.mjs audio)"); else fs.writeFileSync(PUBLIC_MANIFEST, json); }
  const allow = fs.readFileSync(ALLOWLIST, "utf8");
  const block = [TIMING_BEGIN, ...publicTiming.map((f) => "audio-timing/" + f), TIMING_END].join("\n");
  const re = new RegExp(TIMING_BEGIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\\s\\S]*?" + TIMING_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  let next;
  if (re.test(allow)) next = allow.replace(re, block);
  else if (allow.includes("GLOB:audio-timing/[0-9a-f]*.json")) next = allow.replace("GLOB:audio-timing/[0-9a-f]*.json", block);
  else { problems.push("pages-allowlist.txt: audio-timing block not found"); next = allow; }
  if (next !== allow) { if (check) problems.push("pages-allowlist.txt audio-timing block is stale (run: node scripts/chapter-lock.mjs audio)"); else fs.writeFileSync(ALLOWLIST, next); }
  return { problems, publicEntries: Object.keys(pub.entries).length, publicTiming: publicTiming.length, paidTimingCount };
}
const workerTag = (api, id) => `<script src="${api}/chapters/${id}.js"></script>`;

export function lockPages({ check = false } = {}) {
  const api = accessApi();
  const problems = [];
  let changed = 0;
  for (const c of loadChapters()) {
    const page = path.join(CHAPTER_DIR, `chapter-${c.id}.html`);
    if (!fs.existsSync(page)) { problems.push(`${c.id}: page chapter-${c.id}.html not found`); continue; }
    const html = fs.readFileSync(page, "utf8");
    const tag = workerTag(api, c.id);
    const staticTags = [...html.matchAll(DATA_TAG)];
    if (isFree(c)) {
      if (staticTags.length !== 1 || staticTags[0][1] !== c.file) problems.push(`${c.id}: free chapter must load ${c.file}`);
      continue;
    }
    if (staticTags.some((t) => t[1] !== c.file)) problems.push(`${c.id}: loads another chapter's data file`);
    if (staticTags.length === 0 && html.split(tag).length === 2) continue;
    if (check || staticTags.length !== 1 || html.includes(`${api}/chapters/`)) {
      problems.push(`${c.id}: must load its content from ${api}/chapters/${c.id}.js (run: node scripts/chapter-lock.mjs pages)`);
      continue;
    }
    fs.writeFileSync(page, html.replace(staticTags[0][0], tag));
    changed++;
  }
  return { changed, problems };
}

export function buildRelease({ release, out }) {
  if (!RELEASE.test(release)) throw new Error("--release must look like r1, r2, …");
  const dir = path.join(out, "chapters", release);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const chapters = {};
  const files = [];
  for (const c of loadChapters()) {
    chapters[c.id] = { title: c.title };
    fs.writeFileSync(path.join(dir, `${c.id}.js`), releasePayload(c));
    files.push(`${c.id}.js`);
  }
  /* The full dictionary in 64 shards, for the review page's protected lookup
     (access Worker GET /saved-words/lexicon; scripts/lexicon-split.mjs). */
  fs.mkdirSync(path.join(dir, "lexicon"), { recursive: true });
  lexiconShards().forEach((s, i) => {
    const f = `lexicon/${String(i).padStart(2, "0")}.json`;
    fs.writeFileSync(path.join(dir, f), JSON.stringify(s));
    files.push(f);
  });
  fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify({ release, chapters }) + "\n");
  return { dir, files: [...files, "index.json"] };
}

function upload({ dir, files }, release) {
  for (const f of files) {
    const key = `${BUCKET}/chapters/${release}/${f}`;
    const type = f.endsWith(".json") ? "application/json" : "text/javascript; charset=utf-8";
    /* A dropped connection must not abort a 259-object upload: re-putting
       the same bytes is harmless, and index.json goes last, so the Worker
       never serves a release that is only partly uploaded. */
    for (let attempt = 1; ; attempt++) {
      try {
        execFileSync("npx", ["wrangler", "r2", "object", "put", key, "--file", path.join(dir, f), "--content-type", type, "--remote"], {
          cwd: path.join(ROOT, "access", "worker"), stdio: ["ignore", "ignore", attempt < 4 ? "ignore" : "inherit"]
        });
        break;
      } catch (err) {
        if (attempt >= 4) throw err;
        process.stdout.write(`(retry ${f})`);
        execFileSync("sleep", [String(attempt * 5)]);
      }
    }
    process.stdout.write(".");
  }
  process.stdout.write(`\nUploaded ${files.length} objects to ${BUCKET}/chapters/${release}/\n`);
}

function arg(name) {
  const i = process.argv.indexOf(name);
  return i === -1 ? null : process.argv[i + 1];
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const cmd = process.argv[2];
  if (cmd === "pages") {
    const check = process.argv.includes("--check");
    const { changed, problems } = lockPages({ check });
    for (const p of problems) console.error("✖ " + p);
    if (problems.length) process.exit(1);
    console.log(check ? "chapter pages: paid content loads from the Access Worker ✓" : `chapter pages: ${changed} rewritten`);
  } else if (cmd === "audio") {
    const check = process.argv.includes("--check");
    const r = publicAudio({ check });
    for (const p of r.problems) console.error("✖ " + p);
    if (r.problems.length) process.exit(1);
    console.log(`public audio: ${r.publicEntries} manifest entries, ${r.publicTiming} timing files public; ${r.paidTimingCount} paid timing files Worker-only ✓`);
  } else if (cmd === "release") {
    const release = arg("--release") || "";
    const built = buildRelease({ release, out: path.resolve(arg("--out") || path.join(ROOT, "chapter-release-out")) });
    console.log(`Built ${built.files.length} objects in ${built.dir}`);
    if (process.argv.includes("--upload")) upload(built, release);
  } else {
    console.error("usage: chapter-lock.mjs pages [--check] | audio [--check] | release --release rN [--out DIR] [--upload]");
    process.exit(2);
  }
}
