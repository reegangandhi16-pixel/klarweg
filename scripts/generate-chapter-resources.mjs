#!/usr/bin/env node
/* ============================================================
   KLARWEG — Chapter resource PDF generator

   Turns each chapter's authored Study Resources (C.resources) into real,
   chapter-specific PDFs built from that chapter's own data.

   npm run generate:chapter-pdfs                          every chapter
   npm run generate:chapter-pdfs -- --chapter a1-9-verben[,b2-14-…]
   npm run generate:chapter-pdfs -- --level b2
   options: --out <dir>       default: chapter-resources-out (git-ignored; PDFs
                              are never committed — publish a release to the
                              private R2 bucket with upload-chapter-resources.mjs)
            --force           rebuild even when the content hash is unchanged
            --dry-run         build + hash every resource, write nothing, no Chrome
            --concurrency <n> parallel tabs (default 4)

   Output (per resource):  <out>/pdfs/<level>/<chapter-id>/<type>.pdf
   Per chapter:            <out>/pdfs/<level>/<chapter-id>/index.json
   Whole run:              <out>/manifest.json
   <type> is the basename of the resource's authored pdfUrl
   (vocabulary, homework, grammar, mock-test, scoring, answer-key,
   revision-guide). Titles/descriptions stay as authored.
============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { findChrome, launchChrome } from './chapter-resources/chrome-pdf.mjs';
import { resourceFile, parseId, compareIds } from './chapter-resources/common.mjs';
import { TEMPLATE_VERSION } from './chapter-resources/templates.mjs';
import { planChapter, roleCssFrom, contentWarnings } from './chapter-resources/plan.mjs';
import { loadAllChapters } from './chapter-resources/load.mjs';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHAPTER_DIR = path.join(ROOT, 'chapter');
const RES_DIR = path.join(ROOT, 'scripts', 'chapter-resources');

/* ---------- args ---------- */
const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf('--' + name); return i >= 0 ? argv[i + 1] : undefined; };
const flag = (name) => argv.includes('--' + name);
const OUT = path.resolve(ROOT, opt('out') || 'chapter-resources-out');
const onlyChapters = (opt('chapter') || '').split(',').filter(Boolean);
const onlyLevel = opt('level');
const FORCE = flag('force');
const DRY = flag('dry-run');
const CONCURRENCY = Math.max(1, Number(opt('concurrency')) || 4);

const chapters = loadAllChapters(CHAPTER_DIR);

let targets = chapters;
if (onlyChapters.length) {
  const missing = onlyChapters.filter((id) => !chapters.some((C) => C.id === id));
  if (missing.length) { console.error('Unknown chapter id(s): ' + missing.join(', ')); process.exit(1); }
  targets = chapters.filter((C) => onlyChapters.includes(C.id));
}
if (onlyLevel) targets = targets.filter((C) => parseId(C.id).level === onlyLevel.toLowerCase());

/* ---------- styles: resource CSS + role colours taken live from chapter.css ---------- */
const css = fs.readFileSync(path.join(RES_DIR, 'resource.css'), 'utf8');
const roleCss = roleCssFrom(fs.readFileSync(path.join(CHAPTER_DIR, 'chapter.css'), 'utf8'));

// Chrome writes an uncompressed page tree; count leaf /Page objects.
const countPages = (buf) => (buf.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) || []).length || null;

/* ---------- plan ---------- */
const manifestFile = path.join(OUT, 'manifest.json');
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : { chapters: {} };

const jobs = [];
const plan = {};
const warnings = [];
for (const C of targets) {
  const entry = planChapter(C, { css, roleCss, siteBase: SITE_BASE });
  for (const [type, res] of Object.entries(entry.resources)) {
    const prev = manifest.chapters[C.id] && manifest.chapters[C.id].resources[type];
    const upToDate = !FORCE && prev && prev.contentHash === res.contentHash && fs.existsSync(path.join(OUT, res.file));
    if (upToDate) Object.assign(res, { pages: prev.pages, bytes: prev.bytes });
    else jobs.push({ C, type, res });
  }
  contentWarnings(C).forEach((w) => warnings.push(`${C.id}: ${w}`));
  plan[C.id] = entry;
}
if (warnings.length) { console.log(`content warnings (${warnings.length}) — fix in chapter data:`); warnings.forEach((w) => console.log('  ! ' + w)); }

const total = Object.values(plan).reduce((n, e) => n + Object.keys(e.resources).length, 0);
const skippedCount = Object.values(plan).reduce((n, e) => n + e.skipped.length, 0);
if (DRY) {
  console.log(`dry run: ${targets.length} chapters · ${total} PDFs · ${jobs.length} would (re)build · ${skippedCount} resource cards not generated`);
  for (const [id, e] of Object.entries(plan)) for (const s of e.skipped) console.log(`  skip ${id} ${s.type} (${s.title}): ${s.reason}`);
  process.exit(0);
}

/* ---------- render ---------- */
const buildDir = path.join(RES_DIR, '.build');   // beside fonts/ so relative url()s resolve
fs.mkdirSync(buildDir, { recursive: true });
let browser = null;
if (jobs.length) {
  const chromePath = findChrome();
  if (!chromePath) { console.error('Google Chrome not found. Set CHROME_PATH.'); process.exit(1); }
  browser = await launchChrome(chromePath);
}
const failures = [];
const queue = [...jobs];
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
  while (queue.length) {
    const { C, type, res } = queue.shift();
    try {
      const htmlFile = path.join(buildDir, `${C.id}--${type}.html`);
      fs.writeFileSync(htmlFile, res.html.replace(/url\(fonts\//g, 'url(../fonts/'));
      const buf = await browser.printToPdf(pathToFileURL(htmlFile).href);
      const pdfFile = path.join(OUT, res.file);
      fs.mkdirSync(path.dirname(pdfFile), { recursive: true });
      fs.writeFileSync(pdfFile, buf);
      res.pages = countPages(buf);
      res.bytes = buf.length;
      console.log(`pdf   ${res.file}  ${res.pages} pp  ${(buf.length / 1024).toFixed(0)} KB`);
    } catch (e) {
      failures.push(`${C.id}/${type}: ${e.message}`);
      console.error(`FAIL  ${C.id}/${type}: ${e.message}`);
    }
  }
}));
if (browser) await browser.close();

/* ---------- manifest + per-chapter index (deterministic: sorted, no timestamps) ---------- */
for (const [id, entry] of Object.entries(plan)) {
  for (const r of Object.values(entry.resources)) delete r.html;
  manifest.chapters[id] = entry;
  const index = { chapter: id, resources: {} };
  for (const [type, r] of Object.entries(entry.resources)) {
    if (r.bytes == null) continue;   // failed render
    index.resources[type] = { file: path.basename(r.file), pages: r.pages, bytes: r.bytes, contentHash: r.contentHash };
  }
  const idxFile = path.join(OUT, path.dirname(resourceFile(id, 'x')), 'index.json');
  fs.mkdirSync(path.dirname(idxFile), { recursive: true });
  fs.writeFileSync(idxFile, JSON.stringify(index, null, 2) + '\n');
}
const sorted = Object.fromEntries(Object.entries(manifest.chapters).sort(([a], [b]) => compareIds(a, b)));
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(manifestFile, JSON.stringify({ version: 1, templateVersion: TEMPLATE_VERSION, chapters: sorted }, null, 2) + '\n');

console.log(`\n${jobs.length - failures.length} built · ${total - jobs.length} unchanged · ${failures.length} failed · ${skippedCount} cards not generated · ${targets.length} chapters`);
if (failures.length) process.exit(1);
