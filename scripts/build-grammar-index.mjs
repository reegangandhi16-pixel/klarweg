#!/usr/bin/env node
/* ============================================================
   KLARWEG · GERMAN GRAMMAR SYLLABUS PAGE (german-grammar.html)
   ------------------------------------------------------------
   A static, crawlable index of every topic in the course, A1→C2,
   generated from the authoritative chapter sources — never
   hand-written, so it cannot drift from the course:

     chapter/chapter-*.html    → which page (and data file) each chapter is
     chapter/*-data.js         → title, English title, phase, description
     chapter/_curriculum-*.json → chapter order per level

   The page shell (head conventions, nav, footer, scripts) is taken
   from courses.html so it matches the site exactly.

   Usage: node scripts/build-grammar-index.mjs [--check]
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CH = path.join(ROOT, 'chapter');
const OUT = path.join(ROOT, 'german-grammar.html');
const CHECK = process.argv.includes('--check');

const LEVELS = [
  { id: 'a1', name: 'A1', label: 'Foundations', page: 'a1.html' },
  { id: 'a2', name: 'A2', label: 'Elementary', page: 'a2.html' },
  { id: 'b1', name: 'B1', label: 'Intermediate', page: 'b1.html' },
  { id: 'b2', name: 'B2', label: 'Upper-intermediate', page: 'b2.html' },
  { id: 'c1', name: 'C1', label: 'Advanced', page: 'c1.html' },
  { id: 'c2', name: 'C2', label: 'Mastery', page: 'c2.html' },
];

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

function load(file) {
  const ctx = {};
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8') + '\n;this.__C = CHAPTER;', ctx, { timeout: 5000 });
  return ctx.__C;
}

/* page ↔ data file, from each chapter page's own <script src>. */
const chapters = [];
for (const page of fs.readdirSync(CH).filter((f) => /^chapter-[abc][12]-.*\.html$/.test(f))) {
  const html = fs.readFileSync(path.join(CH, page), 'utf8');
  const m = html.match(/<script src="(chapter-[^"]+-data\.js)(?:\?[^"]*)?"><\/script>/);
  if (!m) continue;
  const C = load(path.join(CH, m[1]));
  chapters.push({ page, C });
}

const byLevel = {};
for (const lv of LEVELS) {
  const cur = JSON.parse(fs.readFileSync(path.join(CH, `_curriculum-${lv.id}.json`), 'utf8')).chapters.map((c) => c.id);
  const list = chapters.filter((x) => String(x.C.id).startsWith(lv.id + '-'));
  list.sort((a, b) => {
    const ia = cur.indexOf(a.C.id), ib = cur.indexOf(b.C.id);
    return (ia === -1 ? 1e3 + a.C.number : ia) - (ib === -1 ? 1e3 + b.C.number : ib);
  });
  byLevel[lv.id] = list;
}
const total = Object.values(byLevel).reduce((n, l) => n + l.length, 0);
if (total !== chapters.length || total < 250) {
  console.error(`grammar index: expected every chapter once, got ${total} of ${chapters.length}`);
  process.exit(1);
}

const isCheckpoint = (C) => /goethe|halbzeit|mini-test|final/i.test(C.id) || !!C.isCheckpoint || !!C.scoring;
const phaseOf = (C) => { const m = String(C.phase || '').match(/Phase\s*(\d+)/i); return m ? Number(m[1]) : 0; };

/* ---------- content ---------- */
let body = '';
body += `
<section class="page-hero">
  <div class="container">
    <div class="eyebrow-row">
      <span class="eyebrow">Syllabus · A1 → C2</span>
      <span class="pill"><span class="pill-dot" style="background: var(--g-object);"></span> ${total} chapters</span>
    </div>
    <h1 class="display-xl">German grammar, <span class="accent">A1 to C2.</span></h1>
    <p class="lede">Every grammar topic in the Klarweg course, in the order you learn it — from the alphabet and the nominative case to Nominalstil and C2 register. Each chapter teaches one topic with colour-coded grammar, clickable German, audio, practice and a quiz. Chapter 1 of every level is free.</p>
    <nav class="gi-jump" aria-label="Jump to level">
      ${LEVELS.map((lv) => `<a href="#${lv.id}">${lv.name} · ${byLevel[lv.id].length}</a>`).join('\n      ')}
    </nav>
  </div>
</section>
`;

for (const lv of LEVELS) {
  const list = byLevel[lv.id];
  const free = list.find((x) => Number(x.C.number) === 1);
  body += `
<section class="gi-level" id="${lv.id}">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${lv.name} · ${lv.label}</span>
      <h2 class="display-md">${lv.name} German grammar — ${list.length} chapters</h2>
      <p class="lede">${lv.name} topics in course order.${free ? ` Start with <a href="chapter/${free.page}">Chapter 1: ${esc(plain(free.C.title))}</a> — free.` : ''} See the <a href="${lv.page}">${lv.name} roadmap</a> for phases and progress.</p>
    </div>
    <ol class="gi-list">`;
  let lastPhase = null;
  for (const { page, C } of list) {
    const ph = phaseOf(C);
    if (ph && ph !== lastPhase) {
      body += `\n      <li class="gi-phase" aria-hidden="true">Phase ${ph}</li>`;
      lastPhase = ph;
    }
    const title = esc(plain(C.title));
    const en = plain(C.titleEn);
    const desc = esc(plain(C.description));
    const isFree = Number(C.number) === 1;
    const tag = isCheckpoint(C) ? '<span class="gi-tag">Checkpoint</span>' : isFree ? '<span class="gi-tag gi-free">Free</span>' : '';
    const heading = isFree
      ? `<a class="gi-title" href="chapter/${page}" lang="de">${title}</a>`
      : `<span class="gi-title" lang="de">${title}</span>`;
    body += `
      <li class="gi-item">
        <div class="gi-num">${esc(lv.name)}·${esc(C.number)}</div>
        <div class="gi-body">
          <h3 class="gi-h">${heading}${en && en.toLowerCase() !== plain(C.title).toLowerCase() ? ` <span class="gi-en">${esc(en)}</span>` : ''} ${tag}</h3>
          <p class="gi-desc">${desc}</p>
        </div>
      </li>`;
  }
  body += `
    </ol>
  </div>
</section>
`;
}

body += `
<section class="cta-band">
  <div class="container">
    <div class="inner">
      <h2 class="display-md">See how one chapter teaches.</h2>
      <p class="lede">Chapter 1 of every level is the full chapter, free: grammar, story, audio, exercises and quiz.</p>
      <div class="hero-ctas">
        <a href="chapter/chapter-a1-1-alphabet.html" class="btn btn-primary">Try A1 Chapter 1 free</a>
        <a href="courses.html" class="btn btn-secondary">Compare levels</a>
      </div>
    </div>
  </div>
</section>
`;

/* ---------- shell from courses.html ---------- */
const tpl = fs.readFileSync(path.join(ROOT, 'courses.html'), 'utf8');
const title = 'German Grammar A1 to C2 · Every Topic in Order — Klarweg';
const desc = `All ${total} German grammar topics in the Klarweg course, A1 to C2, in the order you learn them — with what each chapter covers. Chapter 1 of every level is free.`;
const url = `${SITE_BASE}/german-grammar.html`;

let head = tpl.slice(0, tpl.indexOf('</head>'));
head = head
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
  .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
head += `<style>
.gi-jump { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.gi-jump a { font-family: var(--font-mono); font-size: 13px; padding: 10px 14px; min-height: 44px; display: inline-flex; align-items: center; border: 1px solid var(--hairline); border-radius: 999px; color: var(--ink-primary); text-decoration: none; background: var(--surface, #fff); }
.gi-jump a:hover { border-color: var(--ink-tertiary); }
.gi-level { padding-top: 64px; scroll-margin-top: 72px; }
.gi-list { list-style: none; margin: 24px 0 0; padding: 0; max-width: 820px; }
.gi-phase { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-tertiary); padding: 24px 0 8px; border-bottom: 1px solid var(--hairline); }
.gi-item { display: grid; grid-template-columns: 64px 1fr; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--hairline); }
.gi-num { font-family: var(--font-mono); font-size: 12px; color: var(--ink-tertiary); padding-top: 4px; }
.gi-h { margin: 0 0 4px; font-size: 18px; font-weight: 500; line-height: 1.35; overflow-wrap: anywhere; }
.gi-title { font-family: var(--font-display); font-style: italic; color: var(--ink-primary); }
a.gi-title { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.gi-en { font-family: var(--font-ui); font-size: 14px; font-weight: 400; color: var(--ink-secondary); }
.gi-tag { font-family: var(--font-ui); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--hairline); color: var(--ink-secondary); white-space: nowrap; }
.gi-free { color: var(--g-object); border-color: currentColor; }
.gi-desc { margin: 0; font-size: 15px; line-height: 1.6; color: var(--ink-secondary); max-width: 680px; }
@media (max-width: 560px) { .gi-item { grid-template-columns: 1fr; gap: 4px; } }
</style>
`;

const navStart = tpl.indexOf('</head>');
const mainStart = tpl.indexOf('<main id="main"');
const mainEnd = tpl.indexOf('</main>') + '</main>'.length;
let shell = tpl.slice(navStart, mainStart).replace(/ class="active"/g, '');
// Keep the shared scripts (site.js, auth, nav, hamburger); drop inline
// blocks that render courses.html-only elements.
const tail = tpl.slice(mainEnd).replace(/<script>(?:(?!<\/script>)[\s\S])*?(levels-grid|features-grid)[\s\S]*?<\/script>\s*/g, '');
const page = `${head}${shell}<main id="main" tabindex="-1">\n<!-- GENERATED by scripts/build-grammar-index.mjs from chapter data — do not edit by hand. -->\n${body}\n</main>${tail}`;

if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (current !== page) { console.error('german-grammar.html is out of date — run node scripts/build-grammar-index.mjs'); process.exit(1); }
  console.log('german-grammar.html is up to date');
} else {
  fs.writeFileSync(OUT, page);
  console.log(JSON.stringify({ wrote: 'german-grammar.html', chapters: total, bytes: page.length }));
}
