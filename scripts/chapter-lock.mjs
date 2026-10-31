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
     content, bump N, upload, then set CHAPTER_RELEASE to the new rN. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

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
    fs.copyFileSync(path.join(CHAPTER_DIR, c.file), path.join(dir, `${c.id}.js`));
    files.push(`${c.id}.js`);
  }
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
  } else if (cmd === "release") {
    const release = arg("--release") || "";
    const built = buildRelease({ release, out: path.resolve(arg("--out") || path.join(ROOT, "chapter-release-out")) });
    console.log(`Built ${built.files.length} objects in ${built.dir}`);
    if (process.argv.includes("--upload")) upload(built, release);
  } else {
    console.error("usage: chapter-lock.mjs pages [--check] | release --release rN [--out DIR] [--upload]");
    process.exit(2);
  }
}
