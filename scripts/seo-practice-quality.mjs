#!/usr/bin/env node
// Report source-level coverage and overlap for all registered practice lessons.
// Similarity candidates support editorial review; they are not ranking scores.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadGuides, relatedGuides, PRACTICE_TOPICS } from './build-seo-practice.mjs';
const guides = loadGuides();
const normalise = s => s.normalize('NFKC').toLocaleLowerCase('de').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const ngrams = s => {
  const words = normalise(s).split(' ');
  return new Set(words.slice(0, -3).map((_, i) => words.slice(i, i + 4).join(' ')));
};
const incoming = new Map(guides.map(g => [g.slug, 0]));
const seen = Object.fromEntries(['title', 'description', 'prompt', 'sample', 'check'].map(k => [k, new Set()]));
const inventory = guides.map(g => {
  for (const key of Object.keys(seen)) {
    const value = normalise(g[key] || g.editorial[key]);
    assert.ok(!seen[key].has(value), `${g.slug}: duplicate ${key}`); seen[key].add(value);
  }
  const related = relatedGuides(g, guides);
  for (const peer of related) incoming.set(peer.slug, incoming.get(peer.slug) + 1);
  assert.ok((g.title + ' — Klarweg').length <= 70, g.slug + ': title too long');
  return { slug: g.slug, level: g.level, kind: g.kind || 'grammar', topic: PRACTICE_TOPICS[g.editorial.cluster], title: g.title, description: g.description, writingTask: g.editorial.prompt, related: related.map(x => x.slug) };
});
assert.ok([...incoming.values()].every(n => n > 0), 'every lesson needs an inbound topic link');
const sets = guides.map(g => ngrams(g.rule + ' ' + g.trap));
const overlaps = [];
for (let i = 0; i < guides.length; i++) for (let j = i + 1; j < guides.length; j++) {
  const intersection = [...sets[i]].filter(t => sets[j].has(t)).length;
  const containment = intersection / Math.min(sets[i].size, sets[j].size);
  if (containment >= 0.2) overlaps.push({ a: guides[i].slug, b: guides[j].slug, sharedFourWordPhrases: intersection, shorterTextContainment: Number(containment.toFixed(3)) });
}
overlaps.sort((a, b) => b.shorterTextContainment - a.shorterTextContainment);
const report = {
  lessons: guides.length, topics: Object.keys(PRACTICE_TOPICS).length,
  bespokeDescriptions: seen.description.size, contextualWritingTasks: seen.prompt.size,
  distinctModelResponses: seen.sample.size, distinctSelfCheckNotes: seen.check.size,
  priorModels: guides.reduce((n, g) => n + g.examples.length, 0),
  priorGapQuestions: guides.reduce((n, g) => n + g.quiz.length, 0),
  inboundTopicLinks: Object.fromEntries([...incoming]), overlapCandidates: overlaps,
  limitations: ['Internal text-overlap checks, not external originality verification.', 'Topic overlap is not proof of search cannibalisation; Search Console data is required.', 'AI-assisted editorial work; independent native German linguistic/pedagogic review pending.', 'No ranking, indexing, search-demand or human-authorship guarantee.'], inventory
};
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ ...report, inboundTopicLinks: { minimum: Math.min(...incoming.values()), maximum: Math.max(...incoming.values()) }, inventory: undefined }, null, 2));
