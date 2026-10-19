#!/usr/bin/env node
/* NON-PRODUCTION EXAM SITE BUILD (docs/exam/NONPROD-SETUP.md §3 step 8).
   Copies exam/ (without exam/test) to a directory OUTSIDE the repository and
   points the copy at the non-prod Access Worker:
     - <meta name="kw-exam-api" content="…">  → the non-prod Access origin;
     - the CSP connect-src                     → 'self' blob: <that origin> only
       (the production hosts are dropped, so the test site cannot reach them).
   The repository's exam/ is never modified, and nothing is uploaded.

   Usage:
     node exam-content/tools/build-nonprod-site.mjs --api https://klarweg-access-nonprod.<sub>.workers.dev --out <dir outside the repo>
   Then serve <dir> on the origin listed in CORS_EXTRA_ORIGINS
   (access/worker/wrangler.nonprod.toml), e.g.:
     npx http-server <dir> -p 8788      or      python3 -m http.server 8788 -d <dir>
   and open http://localhost:8788/index.html (learner) / rater.html (rater).

   Exit 0 = built, 1 = refused (reason printed). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const PAGES = ['index.html', 'rater.html'];
const API_META = /<meta name="kw-exam-api" content="[^"]*">/;
/* One line only: the CSP explanation comment above the meta also says "connect-src". */
const CONNECT_SRC = /connect-src [^;"\n]*;/;

/* An exact origin: https anywhere, http only for localhost / 127.0.0.1. */
export function checkApiOrigin(api) {
  if (typeof api !== 'string') return 'missing --api';
  if (!/^(https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)*|http:\/\/(localhost|127\.0\.0\.1))(:[0-9]{1,5})?$/.test(api)) {
    return '--api must be an exact origin (https://host[:port], or http://localhost[:port]), no path or trailing slash';
  }
  if (/^https:\/\/klarweg-access\.[a-z0-9-]+\.workers\.dev$/.test(api) || /(^|\.)klarweg\.in$/.test(new URL(api).hostname)) {
    return '--api points at the PRODUCTION Access Worker or domain; the non-prod site must use klarweg-access-nonprod';
  }
  return null;
}

/* Rewrites one page; throws if the page no longer has exactly the expected lines. */
export function rewritePage(html, api, name = 'page') {
  if ((html.match(new RegExp(API_META.source, 'g')) || []).length !== 1) throw new Error(`${name}: expected exactly one kw-exam-api meta`);
  if ((html.match(new RegExp(CONNECT_SRC.source, 'g')) || []).length !== 1) throw new Error(`${name}: expected exactly one CSP connect-src directive`);
  return html
    .replace(API_META, `<meta name="kw-exam-api" content="${api}">`)
    .replace(CONNECT_SRC, `connect-src 'self' blob: ${api};`);
}

export function checkOutDir(out, root = ROOT) {
  if (typeof out !== 'string' || out === '') return 'missing --out';
  const abs = path.resolve(out);
  const rel = path.relative(root, abs);
  if (rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel))) return '--out must be OUTSIDE the repository';
  if (fs.existsSync(abs) && fs.readdirSync(abs).length) return '--out must be empty or not exist yet';
  return null;
}

function copyTree(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (e.name === 'test' || e.name === '.DS_Store') continue;
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyTree(s, d); else fs.copyFileSync(s, d);
  }
}

export function build({ api, out, root = ROOT }) {
  const err = checkApiOrigin(api) || checkOutDir(out, root);
  if (err) throw new Error(err);
  const dst = path.resolve(out);
  const pages = PAGES.map((p) => [p, rewritePage(fs.readFileSync(path.join(root, 'exam', p), 'utf8'), api, p)]);
  copyTree(path.join(root, 'exam'), dst);
  for (const [p, html] of pages) fs.writeFileSync(path.join(dst, p), html);
  return dst;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const argv = process.argv.slice(2);
  const opt = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };
  try {
    const dst = build({ api: opt('--api'), out: opt('--out') });
    console.log(`Non-prod exam site written to ${dst} (API ${opt('--api')}). Serve it on the origin in CORS_EXTRA_ORIGINS.`);
  } catch (e) {
    console.error('✖ build-nonprod-site: ' + e.message + '\n  Nothing was written.');
    process.exit(1);
  }
}
