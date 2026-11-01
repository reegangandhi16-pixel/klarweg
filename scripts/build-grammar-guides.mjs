#!/usr/bin/env node
/* ============================================================
   KLARWEG · FREE GRAMMAR GUIDES (grammar/<slug>.html)
   ------------------------------------------------------------
   Each guide is hand-written: its body is the HTML fragment in
   scripts/grammar-guides/<slug>.html, its metadata the entry in
   scripts/grammar-guides/guides.mjs. This script only wraps the
   body in the site shell taken from courses.html (head conventions,
   nav, footer, scripts), the same way build-grammar-index.mjs builds
   german-grammar.html, so the guides cannot drift from the site.

   The pages live one folder down, so every relative URL in the
   shell gets a "../" prefix. Bodies are written with "../" already.

   Usage: node scripts/build-grammar-guides.mjs [--check]
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';
import { block, breadcrumb, withBlock, LD_BLOCK_RE, HOME } from './seo-ld.mjs';
import { GUIDES } from './grammar-guides/guides.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'scripts', 'grammar-guides');
const OUT = path.join(ROOT, 'grammar');
const CHECK = process.argv.includes('--check');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Relative href/src → one level up. Leaves absolute, root, anchor, mail and data URLs alone.
const up = (html) => html.replace(/\b(href|src)="(?!https?:|\/|#|mailto:|tel:|data:|\.\.\/)([^"]+)"/g, '$1="../$2"');

const tpl = fs.readFileSync(path.join(ROOT, 'courses.html'), 'utf8');
const headTpl = tpl.slice(0, tpl.indexOf('</head>')).replace(LD_BLOCK_RE, '');
const navStart = tpl.indexOf('</head>');
const mainStart = tpl.indexOf('<main id="main"');
const mainEnd = tpl.indexOf('</main>') + '</main>'.length;
const shell = up(tpl.slice(navStart, mainStart).replace(/ class="active"/g, ''));
// Shared scripts only: drop the courses-only level grid script and the
// placement quiz (no trigger on these pages).
const tail = up(tpl.slice(mainEnd)
  .replace(/<script>(?:(?!<\/script>)[\s\S])*?(levels-grid|features-grid)[\s\S]*?<\/script>\s*/g, '')
  .replace(/<script src="kw-placement\.js"><\/script>\n?/, ''));

const CSS = `<style>
.gg-crumbs { font-family: var(--font-mono); font-size: 12px; color: var(--ink-tertiary); margin-bottom: 24px; }
.gg-crumbs a { color: var(--ink-secondary); text-decoration: underline; text-decoration-color: var(--hairline-strong); text-underline-offset: 3px; }
.gg-crumbs span[aria-hidden] { margin: 0 8px; }
.gg-body { padding: 0 0 96px; }
.gg-prose { max-width: 680px; }
.gg-prose > h2 { font-family: var(--font-display); font-weight: 500; font-size: clamp(28px, 4vw, 36px); line-height: 1.2; letter-spacing: -0.02em; margin: 64px 0 16px; scroll-margin-top: 80px; }
.gg-prose > h3 { font-family: var(--font-ui); font-size: 18px; font-weight: 600; margin: 36px 0 12px; }
.gg-prose p, .gg-prose li { font-size: 17px; line-height: 1.65; color: var(--ink-secondary); }
.gg-prose p { margin: 0 0 16px; }
.gg-prose ul, .gg-prose ol { padding-left: 24px; margin: 0 0 16px; }
.gg-prose li { margin-bottom: 8px; }
.gg-prose strong { color: var(--ink-primary); font-weight: 600; }
.gg-prose a { color: var(--ink-primary); text-decoration: underline; text-decoration-color: var(--ink-tertiary); text-underline-offset: 3px; }
.gg-toc { margin: 36px 0 0; padding: 24px; border: 1px solid var(--hairline); border-radius: var(--r-lg); background: var(--bg-surface); }
.gg-toc h2 { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-tertiary); font-weight: 500; margin: 0 0 12px; }
.gg-toc ol { margin: 0; padding-left: 24px; columns: 2; column-gap: 36px; }
.gg-toc li { font-size: 15px; margin-bottom: 8px; break-inside: avoid; }
.gg-summary { margin: 24px 0; padding: 24px; border-radius: var(--r-lg); background: var(--bg-warm); border: 1px solid var(--hairline-light); }
.gg-summary p:last-child, .gg-note p:last-child { margin-bottom: 0; }
.gg-note { margin: 24px 0; padding: 16px 24px; border-left: 3px solid var(--hairline-strong); background: var(--bg-elevated); border-radius: 0 var(--r-md) var(--r-md) 0; }
.gg-note .gg-label { display: block; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-tertiary); margin-bottom: 8px; }
.de { font-family: var(--font-german); font-style: italic; font-weight: 500; color: var(--ink-primary); }
.hi { font-family: 'Noto Sans Devanagari', var(--font-ui); font-style: normal; color: var(--ink-primary); }
.rom { font-size: 0.9em; color: var(--ink-tertiary); }
.ex-list { list-style: none; padding: 0 !important; margin: 16px 0 24px !important; }
.ex-list li { padding: 12px 0; border-bottom: 1px solid var(--hairline-light); margin: 0 !important; }
.ex-list .de { display: block; font-size: 20px; line-height: 1.4; }
.ex-list .tr { display: block; font-size: 15px; color: var(--ink-tertiary); margin-top: 4px; }
/* Grammar colours (spec): meaning only. Case-coloured words are also
   underlined so the case never depends on colour alone. */
.g-nom { color: var(--g-subject); }
.g-verb { color: var(--g-verb); }
.g-akk { color: var(--g-akkusativ); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
.g-dat { color: var(--g-dativ); text-decoration: underline; text-decoration-style: double; text-underline-offset: 4px; }
.g-art { color: #B45309; }
.g-prep { color: #CA8A04; }
.gg-key { display: flex; flex-wrap: wrap; gap: 8px 16px; margin: 16px 0 0; padding: 0; list-style: none; font-size: 13px; color: var(--ink-tertiary); }
.gg-key li { margin: 0 !important; font-size: 13px !important; }
.gg-key .de { font-size: 15px; }
.gg-table-wrap { overflow-x: auto; margin: 16px 0 24px; border: 1px solid var(--hairline); border-radius: var(--r-md); background: var(--bg-surface); }
.gg-table { width: 100%; border-collapse: collapse; font-size: 15px; min-width: 480px; }
.gg-table caption { text-align: left; padding: 12px 16px 0; font-size: 13px; color: var(--ink-tertiary); }
.gg-table th, .gg-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--hairline-light); vertical-align: top; }
.gg-table thead th { font-family: var(--font-mono); font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-tertiary); }
.gg-table tbody th { font-weight: 600; color: var(--ink-primary); white-space: nowrap; }
.gg-table tr:last-child th, .gg-table tr:last-child td { border-bottom: 0; }
.gg-table td .de { font-size: 17px; }
.gg-table .chg { font-weight: 700; }
.mistakes { list-style: none; padding: 0 !important; counter-reset: m; }
.mistakes > li { counter-increment: m; padding: 16px 0 16px 36px !important; position: relative; border-bottom: 1px solid var(--hairline-light); }
.mistakes > li::before { content: counter(m); position: absolute; left: 0; top: 16px; font-family: var(--font-mono); font-size: 12px; color: var(--ink-tertiary); }
.mistakes .no, .mistakes .yes { display: block; }
.mistakes .no .de { text-decoration: line-through; text-decoration-color: var(--ink-tertiary); color: var(--ink-tertiary); }
.mistakes .tag { display: inline-block; min-width: 40px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-tertiary); }
.mistakes .why { display: block; font-size: 15px; margin-top: 8px; }
.exercises { padding-left: 24px !important; }
.exercises > li { padding: 8px 0; }
.exercises .q { font-size: 18px; }
.exercises details { margin-top: 8px; }
.exercises summary { cursor: pointer; font-size: 14px; color: var(--ink-tertiary); min-height: 44px; display: inline-flex; align-items: center; }
.exercises summary:focus-visible { outline: 2px solid var(--ink-primary); outline-offset: 2px; border-radius: var(--r-xs); }
.exercises details p { margin: 4px 0 0; font-size: 15px; }
.gap { display: inline-block; min-width: 64px; border-bottom: 1px solid var(--ink-tertiary); }
.gg-next { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0; }
.gg-next a { display: block; padding: 24px; border: 1px solid var(--hairline); border-radius: var(--r-lg); background: var(--bg-surface); text-decoration: none !important; transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease); }
.gg-next a:hover { transform: translateY(-1px); box-shadow: var(--shadow-soft); }
.gg-next .k { display: block; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-tertiary); margin-bottom: 8px; }
.gg-next .t { display: block; font-family: var(--font-display); font-size: 20px; color: var(--ink-primary); }
.gg-course { margin: 64px 0 0; padding: 36px; border-radius: var(--r-lg); background: var(--bg-warm); border: 1px solid var(--hairline-light); }
.gg-course h2 { font-family: var(--font-display); font-weight: 500; font-size: 28px; margin: 0 0 12px; }
.gg-course .hero-ctas { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; }
@media (max-width: 640px) {
  .gg-table { min-width: 0; font-size: 14px; }
  .gg-table th, .gg-table td { padding: 12px 8px; }
  .gg-table td .de { font-size: 16px; }
  .gg-table thead th { letter-spacing: 0.04em; }
  .gg-toc ol { columns: 1; }
  .gg-course { padding: 24px; }
  .gg-prose p, .gg-prose li { font-size: 16px; }
}
@media (prefers-reduced-motion: reduce) { .gg-next a { transition: none; } }
</style>
`;

function build(g) {
  const src = path.join(SRC, `${g.slug}.html`);
  const body = fs.readFileSync(src, 'utf8').trim();
  const url = `${SITE_BASE}/grammar/${g.slug}.html`;
  let head = headTpl
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(g.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(g.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, '$1article$2')
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(g.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(g.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(g.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(g.description)}$2`)
    // Hindi examples need the Devanagari face the chapters already use.
    .replace(/(family=JetBrains\+Mono:wght@400;500)(&display=swap)/, '$1&family=Noto+Sans+Devanagari:wght@400;500$2');
  head = up(head) + CSS;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title.replace(/ — Klarweg$/, ''),
    description: g.description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    image: `${SITE_BASE}/icon-512.png`,
    educationalLevel: `CEFR ${g.level}`,
    teaches: g.teaches,
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: 'Klarweg', url: `${SITE_BASE}/` },
    publisher: { '@type': 'Organization', name: 'Klarweg', url: `${SITE_BASE}/`, logo: { '@type': 'ImageObject', url: `${SITE_BASE}/icon-512.png` } },
  };
  const crumbs = breadcrumb([HOME, ['German grammar A1–C2', 'german-grammar.html'], [g.crumb, `grammar/${g.slug}.html`]]);
  let page = `${head}${shell}<main id="main" tabindex="-1">\n<!-- GENERATED by scripts/build-grammar-guides.mjs from scripts/grammar-guides/${g.slug}.html — edit the source, not this file. -->\n${body}\n</main>${tail}`;
  return withBlock(page, block([crumbs, article]));
}

const stale = [];
for (const g of GUIDES) {
  const out = path.join(OUT, `${g.slug}.html`);
  const page = build(g);
  const cur = fs.existsSync(out) ? fs.readFileSync(out, 'utf8') : '';
  if (cur === page) continue;
  stale.push(`grammar/${g.slug}.html`);
  if (!CHECK) { fs.mkdirSync(OUT, { recursive: true }); fs.writeFileSync(out, page); }
}
if (CHECK && stale.length) { console.error(`grammar guides out of date (run node scripts/build-grammar-guides.mjs): ${stale.join(', ')}`); process.exit(1); }
console.log(JSON.stringify({ guides: GUIDES.length, changed: stale.length, check: CHECK }));
