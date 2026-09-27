#!/usr/bin/env node
/* ============================================================
   KLARWEG · CHAPTER PAGE INDEXING META
   ------------------------------------------------------------
   Chapter 1 of every level is free: crawlers see the full chapter,
   so it gets a canonical URL and Open Graph/Twitter tags.

   Every other chapter is paid: a crawler (no session) sees only the
   access screen, which is thin, near-duplicate content. Those pages
   get <meta name="robots" content="noindex, follow"> — links on them
   are still followed, the lock screen is simply not indexed. The
   level roadmaps and german-grammar.html are the indexable entry
   points for those topics.

   Idempotent: the block between the KW-SEO markers is rewritten on
   every run. Usage: node scripts/seo-chapter-meta.mjs [--check]
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CH = path.join(ROOT, 'chapter');
const CHECK = process.argv.includes('--check');
const START = '<!-- KW-SEO:start (scripts/seo-chapter-meta.mjs) -->';
const END = '<!-- KW-SEO:end -->';

const attr = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, '&amp;').replace(/"/g, '&quot;');
let changed = 0, free = 0, paid = 0;
const stale = [];
for (const f of fs.readdirSync(CH).filter((x) => /^chapter-[abc][12]-.*\.html$/.test(x))) {
  const file = path.join(CH, f);
  const html = fs.readFileSync(file, 'utf8');
  const num = Number((f.match(/^chapter-[abc][12]-0*(\d+)/) || [])[1]);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || 'Klarweg';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const anchor = /(<meta name="description" content="[^"]*"\s*\/?>\n?)/;
  if (!html.includes(START) && !anchor.test(html)) { console.error('no description meta to anchor on: ' + f); process.exit(1); }
  const url = `${SITE_BASE}/chapter/${f}`;
  const block = num === 1
    ? [START,
       `<link rel="canonical" href="${url}">`,
       '<meta property="og:type" content="article">',
       '<meta property="og:site_name" content="Klarweg">',
       `<meta property="og:title" content="${attr(title)}">`,
       `<meta property="og:description" content="${attr(desc)}">`,
       `<meta property="og:url" content="${url}">`,
       `<meta property="og:image" content="${SITE_BASE}/icon-512.png">`,
       '<meta name="twitter:card" content="summary">',
       END].join('\n')
    : [START, '<meta name="robots" content="noindex, follow">', END].join('\n');
  num === 1 ? free++ : paid++;
  let next;
  if (html.includes(START)) next = html.replace(new RegExp(START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?' + END), block);
  else next = html.replace(anchor, `$1${block}\n`);
  if (next === html) continue;
  stale.push(f);
  if (!CHECK) { fs.writeFileSync(file, next); changed++; }
}
if (CHECK && stale.length) { console.error(`${stale.length} chapter pages need scripts/seo-chapter-meta.mjs`); process.exit(1); }
console.log(JSON.stringify({ free, paid, changed, check: CHECK }));
