#!/usr/bin/env node
/* Render the registered practice datasets through the extracted November 2026
   templates. No content creation or changes to protected course/exam payloads.
   node scripts/build-seo-practice.mjs [--check] */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const LEVELS = ['a1', 'a2', 'b1', 'b2'];
export const CHAPTERS = {
  a1: 'chapter/chapter-a1-1-alphabet.html',
  a2: 'chapter/chapter-a2-1-genitiv.html',
  b1: 'chapter/chapter-b1-1-infinitiv-mit-zu.html',
  b2: 'chapter/chapter-b2-01-erweiterte-satzklammer.html'
};
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
export const escapeHtml = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ld = data => '<script type="application/ld+json">\n' + JSON.stringify({ '@context': 'https://schema.org', ...data }, null, 2).replace(/</g, '\\u003c') + '\n</script>';
const publisher = { '@type': 'Organization', name: 'Klarweg', url: SITE_BASE + '/' };
const pageUrl = slug => `${SITE_BASE}/practice/${slug}.html`;
const hubUrl = pageUrl('index');
const breadcrumb = (g, url) => ({ '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Klarweg', item: SITE_BASE + '/' },
  { '@type': 'ListItem', position: 2, name: 'Free German practice', item: hubUrl },
  ...(g ? [{ '@type': 'ListItem', position: 3, name: g.title, item: url }] : [])
] });
const template = (name, values) => read(`scripts/seo-practice/${name}.html`).replace(/\{\{(\w+)\}\}/g, (_, key) => {
  if (!(key in values)) throw new Error(`Missing template value: ${key}`);
  return values[key];
});

export const PRACTICE_BATCHES = JSON.parse(read('docs/seo/practice-batches.json'));

export function loadGuides(batches = PRACTICE_BATCHES) {
  const ids = new Set(), paths = new Set();
  const guides = batches.flatMap(batch => {
    if (!/^[a-z0-9-]+$/.test(batch.id) || ids.has(batch.id)) throw new Error('Invalid/duplicate batch id');
    ids.add(batch.id);
    if (!Number.isInteger(batch.count) || batch.count < 1 || !Array.isArray(batch.sources) || !batch.sources.length) throw new Error('Invalid batch inventory');
    const rows = batch.sources.flatMap(source => {
      if (!/^docs\/seo\/[a-z0-9-]+\.json$/.test(source.path) || paths.has(source.path)) throw new Error('Invalid/duplicate dataset path');
      paths.add(source.path);
      const data = JSON.parse(read(source.path));
      if (!Array.isArray(data)) throw new Error('Dataset must be an array');
      return data.map(g => ({ ...g, level: source.level || g.level, batch: batch.id }));
    });
    if (rows.length !== batch.count) throw new Error(`${batch.id}: expected ${batch.count} lessons`);
    if (!batch.levels || Object.keys(batch.levels).some(l => !LEVELS.includes(l))) throw new Error('Invalid batch levels');
    for (const level of LEVELS) {
      if (rows.filter(g => g.level === level).length !== (batch.levels[level] || 0)) throw new Error(`${batch.id}: unexpected ${level} count`);
    }
    return rows;
  });
  validateGuides(guides);
  return guides;
}

export function validateGuides(guides) {
  const unique = Object.fromEntries(['slug', 'title', 'rule', 'trap', 'examples', 'quiz'].map(k => [k, new Set()]));
  const text = (s, label) => { if (typeof s !== 'string' || !s.trim() || s.includes('{{')) throw new Error(`Invalid ${label}`); };
  for (const g of guides) {
    if (!LEVELS.includes(g.level) || !new RegExp(`^${g.level}-[a-z0-9]+(?:-[a-z0-9]+)*$`).test(g.slug)) throw new Error(`Invalid slug/level: ${g.slug}`);
    for (const key of ['slug', 'title', 'rule', 'trap']) {
      text(g[key], key);
      if (unique[key].has(g[key])) throw new Error(`Duplicate ${key}: ${g.slug}`);
      unique[key].add(g[key]);
    }
    if (!/^grammar\/[a-z0-9-]+\.html$/.test(g.guide) || !fs.existsSync(path.join(ROOT, g.guide))) throw new Error(`Invalid guide: ${g.guide}`);
    for (const [key, width] of [['examples', 2], ['quiz', 3]]) {
      if (!Array.isArray(g[key]) || g[key].length !== 4) throw new Error(`${g.slug}: expected four ${key}`);
      for (const row of g[key]) {
        if (!Array.isArray(row) || row.length !== width) throw new Error(`${g.slug}: malformed ${key}`);
        row.forEach(s => text(s, key));
        if (key === 'quiz' && (row[0].match(/___/g) || []).length !== 1) throw new Error(`${g.slug}: question must contain one gap`);
        if (unique[key].has(row[0])) throw new Error(`Duplicate ${key}: ${g.slug}`);
        unique[key].add(row[0]);
      }
    }
    if (g.kind !== undefined && !['grammar','word-choice'].includes(g.kind)) throw new Error('Invalid practice kind');
    if (g.description !== undefined) { text(g.description, 'description'); if (g.description.length < 100 || g.description.length > 170) throw new Error('Description must be 100–170 characters'); }
    if (g.instructions !== undefined) text(g.instructions, 'instructions');
    if (g.guideLabel !== undefined) text(g.guideLabel, 'guide label');
  }
}

export function renderPractice(guides = loadGuides()) {
  const outputs = new Map();
  for (const g of guides) {
    const level = g.level.toUpperCase(), url = pageUrl(g.slug);
    const description = g.description || `${level} German practice: ${g.title.replace(/\s*\(A[12]\)|\s*\(B[12]\)/g, '').replace(/\.$/, '')}. Four examples, four exercises and explained answers.`;
    const peers = guides.filter(x => x.level === g.level);
    const index = peers.findIndex(x => x.slug === g.slug);
    const next = peers[(index + 1) % peers.length];
    const related = [next, ...peers.filter(x => x.slug !== g.slug && x.slug !== next.slug && x.guide === g.guide), peers[(index + peers.length - 1) % peers.length]];
    const values = Object.fromEntries(Object.entries({ ...g, level, levelId: g.level, url, siteBase: SITE_BASE, description, chapter: CHAPTERS[g.level],
      guideLabel: g.guideLabel || 'Review the related grammar guide',
      ruleHeading: g.kind === 'word-choice' ? 'Understand the difference' : 'Understand the rule',
      exerciseHeading: g.kind === 'word-choice' ? 'Practice: choose the right word' : 'Practice: fill in the gaps',
      heroText: g.kind === 'word-choice' ? description : 'Study four German examples with English meanings, then try four questions and check the explained answers.',
      instructions: g.instructions || 'Complete each gap using the rule above and any cue in brackets.'
    }).filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, escapeHtml(v)]));
    values.structuredData = ld(breadcrumb(g, url)) + '\n' + ld({ '@type': 'LearningResource', name: g.title, description, url, mainEntityOfPage: url, inLanguage: ['en', 'de'], educationalLevel: 'CEFR ' + level, learningResourceType: 'Practice exercises', isAccessibleForFree: true, publisher, about: g.title });
    values.examples = g.examples.map(([de, en], i) => `<div class="model"><span class="tag">Worked example ${i + 1}</span><span class="de" lang="de">${escapeHtml(de)}</span><span class="translation">${escapeHtml(en)}</span></div>`).join('\n');
    values.quiz = g.quiz.map(([q, a, why], i) => `<div class="exercise"><p><strong>Question ${i + 1}.</strong> <span lang="de">${escapeHtml(q)}</span></p><details><summary>Show answer and explanation<span class="sr-only"> for question ${i + 1}</span></summary><div class="answer"><p><strong>Answer:</strong> <span lang="de">${escapeHtml(a)}</span></p><p>${escapeHtml(why)}</p></div></details></div>`).join('\n');
    values.related = related.slice(0, 2).map(x => `<li><a href="${x.slug}.html">${escapeHtml(x.title)}</a></li>`).join('');
    outputs.set(`practice/${g.slug}.html`, template('page', values));
  }
  const levels = LEVELS.map(l => {
    const group = guides.filter(g => g.level === l), level = l.toUpperCase();
    return `<section class="panel" id="${l}" aria-label="${level} practice"><h2>${level} German practice · ${group.length} lessons</h2><p>Choose a specific topic. Each practice set includes worked sentences and four self-check exercises with explanations.</p><div class="level-grid">${group.map(g => `<a class="topic" href="${g.slug}.html"><small>${level} · 4 exercises</small><b>${escapeHtml(g.title)}</b></a>`).join('\n')}</div></section>`;
  }).join('\n');
  const hubTitle = 'German Grammar and Word Choice Exercises A1–B2 — Klarweg';
  const hubDescription = `${guides.length} free German grammar and word choice practice sets for A1–B2. Study examples with English meanings and check explained exercise answers.`;
  outputs.set('practice/index.html', template('index', { url: hubUrl, siteBase: SITE_BASE, levels, total: String(guides.length), hubTitle: escapeHtml(hubTitle), hubDescription: escapeHtml(hubDescription),
    structuredData: ld(breadcrumb()) + '\n' + ld({ '@type': 'CollectionPage', name: hubTitle, description: hubDescription, url: hubUrl, inLanguage: ['en', 'de'], isAccessibleForFree: true, publisher,
      mainEntity: { '@type': 'ItemList', numberOfItems: guides.length, itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: pageUrl(g.slug) })) }
    })
  }));
  return outputs;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.slice(2).some(a => a !== '--check')) throw new Error('Usage: build-seo-practice.mjs [--check]');
  const check = process.argv.includes('--check');
  let stale = 0;
  const outputs = renderPractice();
  for (const [file, html] of outputs) {
    if (fs.existsSync(path.join(ROOT, file)) && read(file) === html) continue;
    if (check) { console.error(`Stale: ${file} (run npm run generate:practice)`); stale++; }
    else fs.writeFileSync(path.join(ROOT, file), html);
  }
  console.log(stale ? `${stale} stale practice pages` : `Practice pages ${check ? 'checked' : 'generated'}: ${outputs.size - 1} lessons + hub`);
  process.exitCode = stale ? 1 : 0;
}
