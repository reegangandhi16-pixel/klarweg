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
// One registry drives validation, lesson copy and hub grouping.
export const PRACTICE_KINDS = {
  grammar: { label: 'Grammar', ruleNavText: 'One clear rule', ruleHeading: 'Understand the rule', exerciseHeading: 'Practice: fill in the gaps' },
  'word-choice': { label: 'Word choice', ruleNavText: 'One clear rule', ruleHeading: 'Understand the difference', exerciseHeading: 'Practice: choose the right word' },
  communication: { label: 'Everyday and workplace communication', ruleNavText: 'Phrase patterns', ruleHeading: 'Useful phrases and patterns', exerciseHeading: 'Practice: complete the phrases', wordBank: true },
  vocabulary: { label: 'Vocabulary and collocations', ruleNavText: 'Words in context', ruleHeading: 'Vocabulary and usage', exerciseHeading: 'Practice: choose the matching word', wordBank: true }
};
export const PRACTICE_TOPICS = {
  cases: 'Articles, cases and noun forms', verbs: 'Verb forms and sentence patterns',
  people: 'People, relationships and everyday life', questions: 'Asking questions',
  negation: 'Negation', shopping: 'Shopping, prices and services', time: 'Time and dates',
  places: 'Places, location and movement', past: 'Talking about the past',
  clauses: 'Linking clauses', comparison: 'Comparing and contrasting',
  passive: 'Passive forms and alternatives', requests: 'Requests and permission',
  evidence: 'Sources, evidence and uncertainty', text: 'Writing and explaining',
  descriptions: 'Describing things', work: 'Work, responsibilities and planning',
  discussion: 'Discussion and agreement', learning: 'Learning and education',
  tools: 'Objects, tools and practical actions', travel: 'Travel and transport'
};
export const EDITORIAL_SOURCE = 'docs/seo/practice-editorial-20261114.json';
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

const normalise = s => s.normalize('NFKC').toLocaleLowerCase('de').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
export function attachEditorial(guides, entries = JSON.parse(read(EDITORIAL_SOURCE))) {
  if (!Array.isArray(entries) || entries.length !== guides.length) throw new Error('Editorial inventory must match lessons');
  const bySlug = new Map();
  for (const entry of entries) {
    if (!entry || bySlug.has(entry.slug) || !guides.some(g => g.slug === entry.slug)) throw new Error('Unknown/duplicate editorial lesson');
    bySlug.set(entry.slug, entry);
  }
  return guides.map(g => ({ ...g, editorial: bySlug.get(g.slug) }));
}

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
  const enriched = attachEditorial(guides);
  validateGuides(enriched);
  return enriched;
}

export function validateGuides(guides) {
  const unique = Object.fromEntries(['slug', 'title', 'rule', 'trap', 'examples', 'quiz'].map(k => [k, new Set()]));
  const editorialText = Object.fromEntries(['prompt', 'sample', 'check'].map(k => [k, new Set()]));
  const descriptions = new Set();
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
    const kind = g.kind === undefined ? 'grammar' : g.kind;
    if (typeof kind !== 'string' || !Object.hasOwn(PRACTICE_KINDS, kind)) throw new Error('Invalid practice kind');
    if (PRACTICE_KINDS[kind].wordBank && !Array.isArray(g.wordBank)) throw new Error(`${kind} practice requires a word bank`);
    if (g.wordBank !== undefined) {
      if (!Array.isArray(g.wordBank) || !g.wordBank.length || g.wordBank.length > 4) throw new Error('Invalid word bank');
      g.wordBank.forEach(s => text(s, 'word bank'));
      const bank = new Set(g.wordBank), answers = new Set(g.quiz.map(q => q[1]));
      if (bank.size !== g.wordBank.length || bank.size !== answers.size || [...answers].some(a => !bank.has(a))) throw new Error('Word bank must match the exercise answers');
    }
    text(g.description, 'description');
    if (g.description.length < 100 || g.description.length > 170) throw new Error('Description must be 100–170 characters');
    if (descriptions.has(normalise(g.description))) throw new Error('Duplicate description');
    descriptions.add(normalise(g.description));
    if (!g.editorial || g.editorial.slug !== g.slug || !Object.hasOwn(PRACTICE_TOPICS, g.editorial.cluster)) throw new Error('Missing/invalid editorial task');
    for (const key of ['prompt', 'sample', 'check']) {
      text(g.editorial[key], 'editorial ' + key);
      const value = normalise(g.editorial[key]);
      if (editorialText[key].has(value)) throw new Error('Duplicate editorial ' + key);
      editorialText[key].add(value);
    }
    if (g.instructions !== undefined) text(g.instructions, 'instructions');
    if (g.guideLabel !== undefined) text(g.guideLabel, 'guide label');
  }
  const models = new Set(guides.flatMap(g => g.examples.map(row => normalise(row[0]))));
  for (const g of guides) if (models.has(normalise(g.editorial.sample))) throw new Error('Editorial sample repeats a worked example');
}

// A topic-based learning path guarantees an inbound peer link for every lesson.
// A second link favours shared grammar foundations within that topic.
export function relatedGuides(g, guides) {
  const topic = guides.filter(x => x.editorial.cluster === g.editorial.cluster)
    .sort((a, b) => a.level.localeCompare(b.level) || (a.kind || 'grammar').localeCompare(b.kind || 'grammar') || a.slug.localeCompare(b.slug));
  if (topic.length < 2) throw new Error('Practice topic needs at least two lessons');
  const i = topic.findIndex(x => x.slug === g.slug);
  const next = topic[(i + 1) % topic.length];
  const terms = x => new Set((x.slug + ' ' + x.title).toLowerCase().match(/[\p{L}]+/gu).filter(w => w.length > 3 && !['german', 'practice', 'exercises', 'answers', 'vocabulary', 'communication', 'word', 'choice'].includes(w)));
  const own = terms(g);
  const score = x => [...terms(x)].filter(w => own.has(w)).length * 3 + (x.guide === g.guide ? 2 : 0) + (x.level === g.level ? 1 : 0);
  const extra = topic.filter(x => x.slug !== g.slug && x.slug !== next.slug)
    .sort((a, b) => score(b) - score(a) || a.slug.localeCompare(b.slug))[0];
  return extra ? [next, extra] : [next];
}

export function renderPrompt(q) {
  const match = /^(.*?)(\s*\([^()]*\))$/.exec(q);
  return match ? `<span lang="de">${escapeHtml(match[1])}</span><span class="cue" lang="en">${escapeHtml(match[2])}</span>` : `<span lang="de">${escapeHtml(q)}</span>`;
}

export function renderPractice(guides = loadGuides()) {
  const outputs = new Map();
  for (const g of guides) {
    const kind = PRACTICE_KINDS[g.kind || 'grammar'];
    const level = g.level.toUpperCase(), url = pageUrl(g.slug);
    const description = g.description;
    const related = relatedGuides(g, guides);
    const guidance = {
      grammar: ['Notice the form that changes and the role it plays in each sentence.', 'Change the subject or noun in one model sentence. Check the verb form, case and word order before comparing it with the rule.'],
      'word-choice': ['Compare the meaning and sentence pattern, rather than choosing by English translation alone.', 'Write a new context for each word. Explain which meaning or object pattern makes your choice natural; some contexts allow both.'],
      communication: ['Notice what the speaker wants to do, the level of politeness and the details the listener needs.', 'Adapt a model to a different listener or situation. Keep the request, time reference and formal or informal address consistent.'],
      vocabulary: ['Notice each word’s meaning, article and common word partners in context.', 'Recall the words without the bank. Use nouns with their articles and verbs with their usual sentence patterns, then write a new context.']
    }[g.kind || 'grammar'];
    const values = Object.fromEntries(Object.entries({ ...g, level, levelId: g.level, url, siteBase: SITE_BASE, description, chapter: CHAPTERS[g.level],
      guideLabel: g.guideLabel || 'Review the related grammar guide',
      ruleNavText: kind.ruleNavText,
      ruleHeading: kind.ruleHeading,
      exerciseHeading: kind.exerciseHeading,
      modelGuidance: guidance[0], revisionGuidance: guidance[1],
      heroText: description,
      topicLabel: PRACTICE_TOPICS[g.editorial.cluster],
      transferPrompt: g.editorial.prompt, transferSample: g.editorial.sample, transferCheck: g.editorial.check,
      gapGuidance: g.quiz.some(q => q[1] === '—') ? ' A dash (—) means no word is needed.' : '',
      instructions: g.instructions || 'Complete each gap using the rule above and any cue in brackets.'
    }).filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, escapeHtml(v)]));
    values.structuredData = ld(breadcrumb(g, url)) + '\n' + ld({ '@type': 'LearningResource', name: g.title, description, url, mainEntityOfPage: url, inLanguage: ['en', 'de'], educationalLevel: 'CEFR ' + level, learningResourceType: 'Practice exercises', educationalUse: 'Practice', teaches: g.editorial.prompt, isAccessibleForFree: true, publisher, about: g.title, isPartOf: { '@type': 'CollectionPage', name: 'Free German practice A1–B2', url: hubUrl } });
    values.examples = g.examples.map(([de, en], i) => `<div class="model"><span class="tag">Worked example ${i + 1}</span><span class="de" lang="de">${escapeHtml(de)}</span><span class="translation">${escapeHtml(en)}</span></div>`).join('\n');
    values.quiz = g.quiz.map(([q, a, why], i) => `<div class="exercise"><p><strong>Question ${i + 1}.</strong> ${renderPrompt(q)}</p><details><summary>Show answer and explanation<span class="sr-only"> for question ${i + 1}</span></summary><div class="answer"><p><strong>Answer:</strong> <span lang="de">${escapeHtml(a)}</span></p><p>${escapeHtml(why)}</p></div></details></div>`).join('\n');
    values.wordBank = g.wordBank ? `<p class="mini"><strong>Word bank:</strong> <span lang="de">${g.wordBank.map(escapeHtml).join(' · ')}</span></p>` : '';
    values.related = related.slice(0, 2).map(x => `<li><a href="${x.slug}.html">${escapeHtml(x.title)}</a></li>`).join('');
    outputs.set(`practice/${g.slug}.html`, template('page', values));
  }
  const kinds = Object.entries(PRACTICE_KINDS).map(([id, { label }]) => ({ id, label }));
  const orderedGuides = [];
  const levels = LEVELS.map(l => {
    const group = guides.filter(g => g.level === l), level = l.toUpperCase();
    const groups = kinds.map(k => ({ ...k, rows: group.filter(g => (g.kind || 'grammar') === k.id) })).filter(k => k.rows.length);
    const nav = groups.map(k => `<a class="btn secondary" href="#${l}-${k.id}">${k.label} (${k.rows.length})</a>`).join('');
    const content = groups.map(k => {
      orderedGuides.push(...k.rows);
      return `<section class="practice-group" id="${l}-${k.id}" aria-labelledby="${l}-${k.id}-title"><h3 id="${l}-${k.id}-title">${k.label} · ${k.rows.length} lessons</h3><div class="level-grid">${k.rows.map(g => `<a class="topic" href="${g.slug}.html"><small>${level} · 4 exercises</small><b>${escapeHtml(g.title)}</b></a>`).join('\n')}</div></section>`;
    }).join('\n');
    return `<section class="panel" id="${l}" aria-label="${level} practice"><h2>${level} German practice · ${group.length} lessons</h2><p>Choose grammar, word choice, communication or vocabulary practice. Each set includes worked examples and four self-check exercises with explanations.</p><nav class="actions" aria-label="${level} practice types">${nav}</nav>${content}</section>`;
  }).join('\n');
  const hubTitle = 'Free German Practice A1–B2: Exercises and Answers — Klarweg';
  const hubDescription = `${guides.length} free German practice sets for A1–B2: grammar, vocabulary, word choice and communication. Study translated examples and check explained answers.`;
  outputs.set('practice/index.html', template('index', { url: hubUrl, siteBase: SITE_BASE, levels, total: String(guides.length), hubTitle: escapeHtml(hubTitle), hubDescription: escapeHtml(hubDescription),
    structuredData: ld(breadcrumb()) + '\n' + ld({ '@type': 'CollectionPage', name: hubTitle, description: hubDescription, url: hubUrl, inLanguage: ['en', 'de'], isAccessibleForFree: true, publisher,
      mainEntity: { '@type': 'ItemList', numberOfItems: guides.length, itemListElement: orderedGuides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: pageUrl(g.slug) })) }
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
