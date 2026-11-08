#!/usr/bin/env node
/* ============================================================
   KLARWEG · CLEAN URLS (publish-time only)
   ------------------------------------------------------------
   GitHub Pages already serves every page without its extension
   (/about → about.html, /grammar/ → grammar/index.html), but our
   pages *advertise* the .html form, so Google and the address bar
   show "…/about.html". This step rewrites the PUBLIC ARTIFACT only
   (never the repo) so every advertised URL is the clean one:

     - absolute https://klarweg.in/<page>.html anywhere in an .html
       file or sitemap.xml (canonical, og:url, JSON-LD, links)
     - relative <a href="<page>.html"> links

   A URL is rewritten only when <page>.html exists in the artifact,
   so links to anything else are left alone. <dir>/index.html becomes
   <dir>/. Query strings and #fragments are kept. JavaScript files
   are not touched: their .html links keep working (Pages serves both).

   Usage: node scripts/clean-urls.mjs <artifactDir> [--check]
   --check exits 1 if a rewrite would still change something.
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const posix = path.posix;

/* "grammar/index.html" → "grammar/", "index.html" → "", "a1.html" → "a1" */
export function cleanPath(p) {
  if (p === 'index.html') return '';
  if (p.endsWith('/index.html')) return p.slice(0, -'index.html'.length);
  return p.slice(0, -'.html'.length);
}

const ABS = (base) => new RegExp(`${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/((?:[\\w.-]+/)*[\\w.-]+\\.html)(?=[?#"'<\\s)\\],]|$)`, 'g');
const A_HREF = /(<a\b[^>]*?\bhref=")([^"]+)(")/g;

/* Rewrite one file's text. `file` is its artifact-relative path,
   `exists(p)` says whether artifact-relative p is a published file. */
export function rewrite(text, file, exists, base = SITE_BASE) {
  let out = text.replace(ABS(base), (m, p) => (exists(p) ? `${base}/${cleanPath(p)}` : m));
  if (!file.endsWith('.html')) return out;
  out = out.replace(A_HREF, (m, pre, href, post) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) return m;
    const mm = /^([^?#]*\.html)([?#].*)?$/.exec(href);
    if (!mm) return m;
    const [, rel, rest = ''] = mm;
    const target = rel.startsWith('/')
      ? posix.normalize(rel.slice(1))
      : posix.normalize(posix.join(posix.dirname(file), rel));
    if (target.startsWith('..') || !exists(target)) return m;
    let clean = rel.slice(0, -'.html'.length);
    if (posix.basename(rel) === 'index.html') clean = rel.slice(0, -'index.html'.length) || './';
    return pre + clean + rest + post;
  });
  return out;
}

function walk(dir, root = dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, root, acc);
    else acc.push(path.relative(root, abs).split(path.sep).join('/'));
  }
  return acc;
}

export function cleanArtifact(dir, { check = false } = {}) {
  const files = walk(dir);
  const published = new Set(files);
  const exists = (p) => published.has(p);
  let changed = 0;
  for (const f of files) {
    if (!f.endsWith('.html') && f !== 'sitemap.xml') continue;
    const abs = path.join(dir, f);
    const before = fs.readFileSync(abs, 'utf8');
    const after = rewrite(before, f, exists);
    if (after === before) continue;
    changed++;
    if (!check) fs.writeFileSync(abs, after);
  }
  return changed;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = process.argv[2];
  if (!dir) { console.error('usage: clean-urls.mjs <artifactDir> [--check]'); process.exit(2); }
  const check = process.argv.includes('--check');
  const changed = cleanArtifact(dir, { check });
  console.log(JSON.stringify({ cleanUrls: true, changed, check }));
  if (check && changed) process.exit(1);
}
