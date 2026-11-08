#!/usr/bin/env node
/* ============================================================
   KLARWEG · ROOT-PAGE STRUCTURED DATA
   ------------------------------------------------------------
   Writes the KW-LD block (see scripts/seo-ld.mjs) into:
     index.html          Organization + WebSite
     courses.html        Breadcrumb  Klarweg › Courses
     a1.html … c2.html   Breadcrumb  Klarweg › Courses › level
     goethe-exam.html, ausbildung.html   Breadcrumb (hubs)
     goethe/*.html, german-certificate-*.html, german-course-cost-india.html
                         Breadcrumb + Article (see GUIDES below)
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
      logo: `${SITE_BASE}/site-icon-512.png`, // the brand logo (#276); also the share/structured-data image (old coral-dot icon-512.png retired)
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

/* Free exam / Ausbildung / study guides: BreadcrumbList + Article.
   Headline and description are read from the page's own <title> and
   meta description, so the markup can never disagree with what the
   page shows. Hub pages (goethe-exam, ausbildung) keep their FAQPage
   blocks and only gain a breadcrumb. */
const GOETHE = ['Goethe exam', 'goethe-exam.html'];
const AUSBILDUNG = ['Ausbildung', 'ausbildung.html'];
PAGES['goethe-exam.html'] = [breadcrumb([HOME, GOETHE])];
PAGES['ausbildung.html'] = [breadcrumb([HOME, AUSBILDUNG])];
const RESOURCES = ['Resources', 'resources.html'];
PAGES['resources.html'] = [breadcrumb([HOME, RESOURCES])];
const GUIDES = [
  ['goethe/exam-centres-india.html', 'Exam centres in India', GOETHE, null],
  ['goethe/certificate-validity-result.html', 'Certificate validity and results', GOETHE, null],
  ['telc-vs-goethe.html', 'telc, Goethe and ÖSD', GOETHE, null],
  ['german-a1-for-spouse-visa.html', 'A1 for spouse visa', RESOURCES, 'A1'],
  ['german-b1-vocabulary.html', 'B1 vocabulary', RESOURCES, 'B1'],
  ['german-a2-vocabulary.html', 'A2 vocabulary', RESOURCES, 'A2'],
  ['goethe/a2-schreiben.html', 'A2 Schreiben', GOETHE, 'A2'],
  ['goethe/a1-schreiben.html', 'A1 Schreiben', GOETHE, 'A1'],
  ['goethe/a2-sprechen.html', 'A2 Sprechen', GOETHE, 'A2'],
  ['goethe/a1-sprechen.html', 'A1 Sprechen', GOETHE, 'A1'],
  ['german-a1-vocabulary.html', 'A1 vocabulary', RESOURCES, 'A1'],
  ['learn-german-from-hindi.html', 'Beginner self-study', RESOURCES, 'A1'],
  ['german-books-for-beginners.html', 'German books for beginners', RESOURCES, null],
  ['free-german-learning-pdfs.html', 'Free German learning PDFs', RESOURCES, null],
  ['german-exam-practice-papers.html', 'Official German exam practice papers', RESOURCES, null],

  // [file, breadcrumb name, parent crumb, CEFR level or null]
  ['goethe/a1-exam.html', 'A1 exam', GOETHE, 'A1'],
  ['goethe/a2-exam.html', 'A2 exam', GOETHE, 'A2'],
  ['goethe/b1-exam.html', 'B1 exam', GOETHE, 'B1'],
  ['goethe/b1-schreiben.html', 'B1 Schreiben', GOETHE, 'B1'],
  ['goethe/b1-sprechen.html', 'B1 Sprechen', GOETHE, 'B1'],
  ['goethe/b2-exam-preparation.html', 'B2 exam', GOETHE, 'B2'],
  ['goethe/b2-schreiben.html', 'B2 Schreiben', GOETHE, 'B2'],
  ['goethe/b2-sprechen.html', 'B2 Sprechen', GOETHE, 'B2'],
  ['goethe/c1-exam-preparation.html', 'C1 exam', GOETHE, 'C1'],
  ['goethe/c2-exam-preparation.html', 'C2 exam', GOETHE, 'C2'],
  ['goethe/exam-modules-retake.html', 'Retaking a module', GOETHE, null],
  ['goethe/paper-vs-digital-exam.html', 'Paper vs digital', GOETHE, null],
  ['goethe/exam-fees-registration-india.html', 'Fees and registration in India', GOETHE, null],
  ['german-certificate-ausbildung.html', 'German level for Ausbildung', AUSBILDUNG, null],
  ['german-for-nursing-germany.html', 'German for nurses', AUSBILDUNG, null],
  ['german-certificate-study-germany.html', 'German certificate for study', COURSES, null],
  ['german-course-cost-india.html', 'Cost of learning German in India', COURSES, null],
];
const meta = (html, re, f) => {
  const m = html.match(re);
  if (!m) throw new Error(`${f}: missing ${re}`);
  return m[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"');
};
for (const [f, name, parent, level] of GUIDES) {
  const html = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const url = `${SITE_BASE}/${f}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta(html, /<title>([^<]*)<\/title>/, f).replace(/ — Klarweg$/, ''),
    description: meta(html, /<meta name="description" content="([^"]*)"/, f),
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    image: `${SITE_BASE}/site-icon-512.png`,
    ...(level ? { educationalLevel: `CEFR ${level}` } : {}),
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: 'Klarweg', url: `${SITE_BASE}/` },
    publisher: { '@type': 'Organization', name: 'Klarweg', url: `${SITE_BASE}/`, logo: { '@type': 'ImageObject', url: `${SITE_BASE}/site-icon-512.png` } },
  };
  PAGES[f] = [breadcrumb([HOME, parent, [name, f]]), article];
}

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
