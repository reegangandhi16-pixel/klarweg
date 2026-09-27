#!/usr/bin/env node
/* ============================================================
   KLARWEG · SITE ORIGIN MIGRATION (github.io → klarweg.in)
   ------------------------------------------------------------
   DO NOT RUN WITH --write UNTIL THE DOMAIN MIGRATION DAY.

   Rewrites the public site base URL everywhere the STATIC site
   declares it — canonical links, Open Graph / Twitter URLs, JSON-LD,
   sitemap.xml, robots.txt, scripts/site-origin.mjs — and the
   project-path-specific 404.html links. Matches the exact base
   "https://reegangandhi16-pixel.github.io/klarweg" followed by a
   path boundary, so the separate audio CDN
   (…github.io/klarweg-audio-cdn) is never touched.

   It deliberately does NOT edit Worker code or Worker config; those
   are listed at the end as manual, reviewed steps (they deploy
   separately and some must change on a specific day).

   Usage:
     node scripts/set-site-origin.mjs --to https://klarweg.in          (dry run)
     node scripts/set-site-origin.mjs --to https://klarweg.in --write  (apply)
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FROM = 'https://reegangandhi16-pixel.github.io/klarweg';
const toArg = (process.argv.find((a) => a.startsWith('--to=')) || '').slice(5) || process.argv[process.argv.indexOf('--to') + 1];
const WRITE = process.argv.includes('--write');

if (!toArg || !/^https:\/\/[a-z0-9.-]+(\/[a-z0-9-]+)?$/i.test(toArg)) {
  console.error('Usage: node scripts/set-site-origin.mjs --to https://klarweg.in [--write]');
  process.exit(1);
}
const TO = toArg.replace(/\/+$/, '');
const TO_PATH = new URL(TO + '/').pathname; // "/" for a root domain

/* The exact base, followed by "/", a quote, "<", whitespace or end. */
const BASE_RE = new RegExp(FROM.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=[/"\'<\\s]|$)', 'g');

/* Files the static site publishes (from the Pages allowlist) plus the
   build-script constant. */
const allow = fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const files = new Set(['scripts/site-origin.mjs']);
for (const l of allow) {
  if (l.startsWith('GLOB:')) {
    const pat = l.slice(5), dir = path.dirname(pat);
    const re = new RegExp('^' + path.basename(pat).replace(/[.]/g, '\\.').replace('*', '.*') + '$');
    fs.readdirSync(path.join(ROOT, dir)).filter((f) => re.test(f)).forEach((f) => files.add(dir + '/' + f));
  } else if (/\.(html|xml|txt|json|mjs)$/.test(l)) files.add(l);
}

const report = [];
for (const rel of [...files].sort()) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  let out = src.replace(BASE_RE, TO);
  // GitHub Pages serves 404.html for any missing path, so its links are
  // absolute and project-prefixed ("/klarweg/…"). Re-point them.
  if (rel === '404.html') out = out.replace(/(href|src)="\/klarweg\//g, `$1="${TO_PATH}`);
  const n = (src.match(BASE_RE) || []).length + (rel === '404.html' ? (src.match(/(href|src)="\/klarweg\//g) || []).length : 0);
  if (out !== src) {
    report.push([rel, n]);
    if (WRITE) fs.writeFileSync(file, out);
  }
}

console.log(`${WRITE ? 'UPDATED' : 'WOULD UPDATE'} ${report.length} files (${report.reduce((a, [, n]) => a + n, 0)} occurrences) → ${TO}`);
for (const [rel, n] of report.slice(0, 12)) console.log(`  ${rel}  (${n})`);
if (report.length > 12) console.log(`  … and ${report.length - 12} more`);

console.log(`
MANUAL, REVIEWED STEPS (not done by this script):
  1. access/worker: set Worker var ACCOUNT_RETURN_URL=${TO}/account/index.html
     (iOS Google redirect sign-in destination) and SITE_BASE_URL=${TO};
     return_url for checkout already follows the request Origin for klarweg.in.
  2. access/worker/src/cors.js: klarweg.in is already allowed; add
     https://www.klarweg.in only if www will serve the site.
  3. report/worker/wrangler.toml: ALLOWED_ORIGINS and SITE_BASE_URL.
  4. Google Cloud console → OAuth client: add ${TO} to Authorized JavaScript origins.
  5. Cashfree dashboard: whitelist the new domain for checkout (production).
  6. Search Console: verify ${TO}, submit ${TO}/sitemap.xml; keep the old
     property to watch the redirect.
  7. GitHub Pages custom domain + enforce HTTPS; confirm the github.io URLs
     redirect to ${TO}.
  8. Audio stays on the klarweg-audio-cdn origin — no change.
`);
