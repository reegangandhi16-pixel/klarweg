#!/usr/bin/env node
/* ============================================================
   KLARWEG — level bundle PDF generator

   One PDF per level and resource type with every chapter of that level, in
   course order, behind a cover and a contents page. Chapter pages are built
   by the same templates as the single-chapter PDFs, so each keeps its own
   running title and its own chapter QR; page numbers run across the bundle.

   npm run generate:combined-pdfs                          all 18 bundles
   npm run generate:combined-pdfs -- --level a1 --type homework
   options: --out <dir>   default: combined-resources-out (git-ignored; never
                          mixed with chapter-resources-out)

   Output:  <out>/<level>/Klarweg_<LEVEL>_All_Chapters_<Type>.pdf
            <out>/manifest.json   (chapters, start pages, page counts)
   The contents page numbers come from a measuring render (where each
   chapter's #anchor landed, read from the PDF's named destinations), then a
   second render; the run fails unless the two agree. Bundles print without
   a bookmark outline (see chrome-pdf.mjs); the contents page links instead.
============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { findChrome, launchChrome } from './chapter-resources/chrome-pdf.mjs';
import { LEVELS } from './chapter-resources/common.mjs';
import { TEMPLATE_VERSION } from './chapter-resources/templates.mjs';
import { roleCssFrom } from './chapter-resources/plan.mjs';
import { loadAllChapters } from './chapter-resources/load.mjs';
import { COMBINED_TYPES, combinedFile, collectLevel, buildCombined, namedDestPages } from './chapter-resources/combined.mjs';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHAPTER_DIR = path.join(ROOT, 'chapter');
const RES_DIR = path.join(ROOT, 'scripts', 'chapter-resources');

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf('--' + name); return i >= 0 ? argv[i + 1] : undefined; };
const OUT = path.resolve(ROOT, opt('out') || 'combined-resources-out');
const levels = (opt('level') || LEVELS.join(',')).toLowerCase().split(',').filter(Boolean);
const types = (opt('type') || Object.keys(COMBINED_TYPES).join(',')).toLowerCase().split(',').filter(Boolean);
const bad = [...levels.filter((l) => !LEVELS.includes(l)), ...types.filter((t) => !COMBINED_TYPES[t])];
if (bad.length) { console.error('Unknown level/type: ' + bad.join(', ')); process.exit(1); }

const chapters = loadAllChapters(CHAPTER_DIR);
const css = fs.readFileSync(path.join(RES_DIR, 'resource.css'), 'utf8');
const combinedCss = fs.readFileSync(path.join(RES_DIR, 'combined.css'), 'utf8');
const roleCss = roleCssFrom(fs.readFileSync(path.join(CHAPTER_DIR, 'chapter.css'), 'utf8'));

const chromePath = findChrome();
if (!chromePath) { console.error('Google Chrome not found. Set CHROME_PATH.'); process.exit(1); }
const buildDir = path.join(RES_DIR, '.build');   // beside fonts/ so relative url()s resolve
fs.mkdirSync(buildDir, { recursive: true });

// One browser per bundle: a print that times out can leave Chrome unable to
// open tabs, so a fresh one keeps a single bad bundle from failing the rest.
let browser = null;
const render = async (name, html) => {
  const file = path.join(buildDir, `combined--${name}.html`);
  fs.writeFileSync(file, html.replace(/url\(fonts\//g, 'url(../fonts/'));
  return browser.printToPdf(pathToFileURL(file).href, { outline: false, timeoutMs: 180000 });
};

const manifestFile = path.join(OUT, 'manifest.json');
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : { bundles: {} };
const failures = [];
for (const level of levels) for (const type of types) {
  const file = combinedFile(level, type);
  try {
    browser = await launchChrome(chromePath);
    const { included, missing } = collectLevel(chapters, level, type, { css, roleCss, siteBase: SITE_BASE });
    const opts = { level, type, included, missing, css, roleCss, combinedCss };
    // measure, then render with the numbers; repeat once if the numbers moved anything
    let starts = null;
    let buf;
    for (let pass = 0; pass < 3; pass++) {
      console.log(`  ${level}/${type}: render ${pass + 1}${starts ? ' (with contents page numbers)' : ' (measuring)'}`);
      buf = await render(`${level}-${type}`, buildCombined({ ...opts, startPages: starts }));
      const pdf = namedDestPages(buf);
      const found = included.map((c) => pdf.pageOf(`kw-ch-${c.number}`));
      if (starts && found.every((p, i) => p === starts[i])) { starts = found; break; }
      if (pass === 2) throw new Error('contents page numbers did not settle');
      starts = found;
    }
    const { pageCount } = namedDestPages(buf);
    const out = path.join(OUT, file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, buf);
    manifest.bundles[`${level}/${type}`] = {
      file, pages: pageCount, bytes: buf.length,
      chapters: included.map((c, i) => ({ id: c.id, number: c.number, start: starts[i], pages: (starts[i + 1] || pageCount + 1) - starts[i], url: c.chapterUrl })),
      notIncluded: missing.map((m) => m.id),
    };
    console.log(`pdf   ${file}  ${included.length} chapters  ${pageCount} pp  ${(buf.length / 1024 / 1024).toFixed(1)} MB`);
  } catch (e) {
    delete manifest.bundles[`${level}/${type}`];   // never leave a stale file or entry for a bundle that did not build
    fs.rmSync(path.join(OUT, file), { force: true });
    failures.push(`${file}: ${e.message}`);
    console.error(`FAIL  ${file}: ${e.message}`);
  } finally {
    if (browser) await browser.close();
    browser = null;
  }
}

const sorted = Object.fromEntries(Object.entries(manifest.bundles).sort(([a], [b]) => a.localeCompare(b)));
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(manifestFile, JSON.stringify({ version: 1, templateVersion: TEMPLATE_VERSION, bundles: sorted }, null, 2) + '\n');
if (failures.length) process.exit(1);
