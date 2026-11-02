#!/usr/bin/env node
/* ============================================================
   KLARWEG · ROOT-PAGE STRUCTURED DATA
   ------------------------------------------------------------
   Writes the KW-LD block (see scripts/seo-ld.mjs) into:
     index.html          Organization + WebSite
     courses.html        Breadcrumb  Klarweg › Courses
     a1.html … c2.html   Breadcrumb  Klarweg › Courses › level
   german-grammar.html gets its block from build-grammar-index.mjs,
   free chapters from seo-chapter-meta.mjs. Existing hand-written
   FAQPage blocks are left untouched.

   Idempotent. Usage: node scripts/seo-structured-data.mjs [--check]
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';
import { block, breadcrumb, withBlock, HOME, COURSES, levelCrumb, LEVEL_CRUMBS } from './seo-ld.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');

const org = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_BASE}/#organization`,
      name: 'Klarweg',
      url: `${SITE_BASE}/`,
      logo: `${SITE_BASE}/site-icon-512.png`, // the brand logo (#276); icon-512.png stays the coral-dot chapter share image
      email: 'klarwegofficial@gmail.com',
      description: 'German courses from A1 to C2 for Hindi-speaking learners, with color-coded grammar and Goethe exam preparation.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_BASE}/#website`,
      name: 'Klarweg',
      url: `${SITE_BASE}/`,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_BASE}/#organization` },
    },
  ],
};

const PAGES = {
  'index.html': [org],
  'courses.html': [breadcrumb([HOME, COURSES])],
};
for (const id of Object.keys(LEVEL_CRUMBS)) PAGES[`${id}.html`] = [breadcrumb([HOME, COURSES, levelCrumb(id)])];

const stale = [];
for (const [f, objs] of Object.entries(PAGES)) {
  const file = path.join(ROOT, f);
  const html = fs.readFileSync(file, 'utf8');
  const next = withBlock(html, block(objs));
  if (next === html) continue;
  stale.push(f);
  if (!CHECK) fs.writeFileSync(file, next);
}
if (CHECK && stale.length) { console.error(`structured data out of date (run node scripts/seo-structured-data.mjs): ${stale.join(', ')}`); process.exit(1); }
console.log(JSON.stringify({ pages: Object.keys(PAGES).length, changed: stale.length, check: CHECK }));
