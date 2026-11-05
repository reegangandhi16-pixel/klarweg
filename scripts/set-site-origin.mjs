#!/usr/bin/env node
/* ============================================================
   KLARWEG · SITE ORIGIN SWITCH
   ------------------------------------------------------------
   Rewrites the public site base URL everywhere the STATIC site
   declares it — canonical links, Open Graph / Twitter URLs, JSON-LD,
   sitemap.xml, robots.txt, scripts/site-origin.mjs — and the
   path-prefixed 404.html links. The base it rewrites FROM is the
   current SITE_BASE in scripts/site-origin.mjs (the one authority),
   so the same command also rolls the switch back, e.g.
     --to https://reegangandhi16-pixel.github.io/klarweg
   Matches the exact base followed by a path boundary, so the
   separate audio CDN (…github.io/klarweg-audio-cdn) is never touched.

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
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FROM = SITE_BASE;
const FROM_PATH = new URL(FROM + '/').pathname; // "/klarweg/" on github.io, "/" on a root domain
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
  // root-relative and carry the site path ("/klarweg/…" or "/…"). Re-point them.
  const PATH_RE = new RegExp('(href|src)="' + FROM_PATH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?!/)', 'g');
  if (rel === '404.html' && FROM_PATH !== TO_PATH) out = out.replace(PATH_RE, `$1="${TO_PATH}`);
  const n = (src.match(BASE_RE) || []).length + (rel === '404.html' && FROM_PATH !== TO_PATH ? (src.match(PATH_RE) || []).length : 0);
  if (out !== src) {
    report.push([rel, n]);
    if (WRITE) fs.writeFileSync(file, out);
  }
}

console.log(`${WRITE ? 'UPDATED' : 'WOULD UPDATE'} ${report.length} files (${report.reduce((a, [, n]) => a + n, 0)} occurrences) → ${TO}`);
for (const [rel, n] of report.slice(0, 12)) console.log(`  ${rel}  (${n})`);
if (report.length > 12) console.log(`  … and ${report.length - 12} more`);

console.log(`
MANUAL, REVIEWED STEPS (not done by this script) — full sequence and
rollback in docs/DOMAIN-MIGRATION-KLARWEG-IN.md:
  1. GitHub → Settings → Pages: custom domain ${new URL(TO).hostname}, then Enforce
     HTTPS. The Actions deploy ignores the CNAME file; this setting is what counts.
  2. access/worker vars: ACCOUNT_RETURN_URL=${TO}/account/index.html and
     SITE_BASE_URL=${TO} (redeploy). CORS + checkout return_url already accept
     https://klarweg.in in the deployed Worker.
  3. report/worker: deploy with https://klarweg.in in ALLOWED_ORIGINS (also the
     Turnstile hostname check); add the hostname to the Turnstile widget if one
     is configured; SITE_BASE_URL=${TO}.
  4. Google Cloud console → OAuth client: add ${TO} to Authorized JavaScript origins.
  5. Cashfree (production, when it goes live): whitelist ${new URL(TO).hostname}.
  6. Search Console: verify ${TO}, submit ${TO}/sitemap.xml.
  7. Audio stays on the klarweg-audio-cdn origin — no change.
`);
