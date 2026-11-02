/* Media access policy (Stage 0): pure rules, key mapping, German-text extraction,
   and the player-driven resolver. Synthetic fixtures only — the real bucket
   listing and generated inventories never live in this repository. */
import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  compile, evaluate, sentenceRelToKey, vocabRelToKey, formRelToKey, wordsRelToKey, urlToKey,
  parseChapterId, chapterPrefixOfKey, AUDIO_ORIGIN, shardOf, toShards,
} from './media-policy/policy.mjs';
import { chapterGermanStrings, homepageGermanStrings, speakables, lexiconNeeds, normWord, OWNER_HOMEPAGE_WORDS, OWNER_FREE_GREETINGS, visibleText, words } from './media-policy/free-vocabulary.mjs';
import fs from 'node:fs';
import { enginePlayer, freeDataFiles, loadChapterFile } from './media-policy/build-media-policy.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const POLICY = compile({
  free: ['story/A1_001_S001.mp3', 'words/female/aaaa.mp3', 'sentences/x.mp3'],
  manifests: ['vocab/manifest.json'],
  denyListed: ['words/female/orphan.mp3'],
  chapters: { A1_001: 'a1-1-alphabet', A1_017: 'a1-17-goethe2' },
  freeChapters: ['a1-1-alphabet'],
});

test('policy: evaluation order and default deny', () => {
  assert.equal(evaluate(POLICY, 'story/A1_001_S001.mp3').cls, 'free');
  assert.equal(evaluate(POLICY, 'vocab/manifest.json').cls, 'manifest');
  assert.deepEqual(evaluate(POLICY, 'words/female/orphan.mp3'), { cls: 'deny', reason: 'unreferenced' });
  assert.deepEqual(evaluate(POLICY, 'story/A1_017_S003.mp3'), { cls: 'chapter', chapterId: 'a1-17-goethe2', level: 'A1' });
  assert.deepEqual(evaluate(POLICY, 'story/A1_017_S001_v2.mp3'), { cls: 'chapter', chapterId: 'a1-17-goethe2', level: 'A1' });
  assert.equal(evaluate(POLICY, 'words/male/bbbb.mp3').cls, 'word');
  assert.equal(evaluate(POLICY, 'vocab/public/audio/forms/cc.mp3').cls, 'word');
  assert.equal(evaluate(POLICY, 'story/B2_009_S001.mp3').reason, 'unknown-chapter');
  // a free chapter's file must be on the explicit free list, never free by pattern
  assert.equal(evaluate(POLICY, 'story/A1_001_S099.mp3').cls, 'deny');
  for (const k of ['manifest.json', 'dialogues/zz.mp3', '../story/A1_017_S003.mp3', 'story/A1_017_S003.mp3.bak', '']) {
    assert.equal(evaluate(POLICY, k).cls, 'deny', k);
  }
});

test('policy: manifest paths map to the same keys the player requests', () => {
  assert.equal(sentenceRelToKey('audio/story/A1_017_S003.mp3'), 'story/A1_017_S003.mp3');
  assert.equal(sentenceRelToKey('/audio/sentences/ab.mp3'), 'sentences/ab.mp3');
  assert.equal(wordsRelToKey('/audio/words/female/ab.mp3'), 'words/female/ab.mp3');
  assert.equal(vocabRelToKey('audio/male/der_Apfel.mp3'), 'vocab/audio/male/der_Apfel.mp3');
  assert.equal(vocabRelToKey('/audio/words/female/ab.mp3'), 'vocab/words/female/ab.mp3');   // player behaviour today
  assert.equal(formRelToKey('public/audio/forms/ab.mp3'), 'vocab/public/audio/forms/ab.mp3');
  assert.equal(formRelToKey('/audio/conjugation/female/x.mp3'), 'vocab/audio/conjugation/female/x.mp3');
  assert.equal(urlToKey(AUDIO_ORIGIN + 'words/female/a%C3%A4.mp3?v=1'), 'words/female/aä.mp3');
  assert.equal(urlToKey('https://cdn.jsdelivr.net/gh/x/y@main/a.mp3'), null);
});

test('policy: chapter ids and file prefixes', () => {
  assert.deepEqual(parseChapterId('b2-01-erweiterte-satzklammer'), { level: 'B2', number: 1 });
  assert.deepEqual(parseChapterId('a1-17-goethe2'), { level: 'A1', number: 17 });
  assert.equal(parseChapterId('homepage'), null);
  assert.deepEqual(chapterPrefixOfKey('speaking/C2_005_P002.mp3'), { prefix: 'C2_005', level: 'C2', number: 5 });
  assert.equal(chapterPrefixOfKey('story/A1_017.mp3'), null);
});

test('free vocabulary: only German fields count as evidence', () => {
  const s = chapterGermanStrings({
    title: 'Das Alphabet', titleEn: 'The alphabet',
    description: 'Learn the die and also the hat.',            // English: ignored
    story: { dialogue: [{ speaker: 'Frau Weber', tokens: [{ w: 'Herzlich', en: 'warm' }, { w: 'willkommen!' }] }] },
    vocab: [{ de: 'Apfel', art: 'der', en: 'apple', ex: 'Der Apfel ist rot.', exEn: 'The apple is red.' }],
    quiz: [{ q: 'How do you say W?', options: ['vay', 'way'] }],   // no qEn twin: English
    listening: { questions: [{ q: 'Welches Wort?', qEn: 'Which word?', options: ['Heft'], optionsEn: ['notebook'] }] },
  });
  for (const want of ['Das Alphabet', 'Herzlich willkommen!', 'der Apfel', 'Der Apfel ist rot.', 'Welches Wort?', 'Heft', 'Frau Weber']) assert.ok(s.includes(want), want);
  for (const not of ['The alphabet', 'apple', 'How do you say W?', 'vay', 'Learn the die and also the hat.']) assert.ok(!s.includes(not), not);
  assert.ok(speakables(['Der Apfel ist rot.']).includes('Apfel'));
});

test('free vocabulary: homepage sources are explicit German only', () => {
  const html = `<p>Learn German fast</p><span data-word="buch">Buch</span>
    <script>var t=[{ w:'Heute', en:'today' },{ de:"gehe" }];</script>
    <td class="pron-cell-word">Straße</td><p>Hallo! Ich bin Lena.</p>`;
  const r = homepageGermanStrings(html, ['Hallo! Ich bin Lena.', 'Nicht hier.']);
  assert.deepEqual(r.strings.sort(), ['Hallo! Ich bin Lena.', 'Heute', 'Straße', 'buch', 'gehe'].sort());
  assert.deepEqual(r.noChapterFound, ['Hallo! Ich bin Lena.']);
});

test('lexicon dry run: direct, inflection, caps, story and compound needs', () => {
  const L = {
    G: { apfel: { w: 'Apfel' }, saft: { w: 'Saft' }, gehen: { w: 'gehen' } },
    I: { ging: 'gehen' }, CAPS: { Abrufen: {} }, S: { weber: {} },
  };
  const n = lexiconNeeds(['Er ging', 'Apfelsaft', 'Abrufen', 'Frau Weber'], L);
  assert.deepEqual([...n.g].sort(), ['apfel', 'gehen', 'saft']);
  assert.deepEqual([...n.inf], ['ging']);
  assert.deepEqual([...n.caps], ['Abrufen']);
  assert.deepEqual([...n.story], ['weber']);
  assert.equal(normWord('„Haus,“'), 'haus');
});

test('free pages: the six allowlisted Chapter 1 data files', () => {
  const files = freeDataFiles();
  assert.equal(files.length, 6);
  const ids = files.map((f) => loadChapterFile(f).id);
  for (const id of ids) assert.equal(parseChapterId(id).number, 1, id);
});

test('player resolver: free Chapter 1 audio resolves on the audio origin', async () => {
  const p = await enginePlayer();
  const hits = p.resolve('Herzlich willkommen! Ich bin Frau Weber.');
  assert.ok(hits.some((h) => h.key === 'story/A1_001_S001.mp3'), JSON.stringify(hits));
  assert.equal(p.resolve('zzz-not-german-zzz').length, 0);
});

test('builder refuses to write its outputs inside the repository', () => {
  assert.throws(() => execFileSync(process.execPath, ['scripts/media-policy/build-media-policy.mjs', '--listing', 'x.json', '--out', 'tmp-out'], { cwd: ROOT, stdio: 'pipe' }),
    (e) => e.status === 2 && /inside the repository/.test(String(e.stderr)));
});

test('shardOf matches access/worker media.js on the same fixed vectors', () => {
  assert.equal(shardOf('', 64), 0x811c9dc5 % 64);
  assert.equal(shardOf('story/A1_017_S003.mp3', 64), 25);
  assert.equal(shardOf('vocab/audio/female/caf\u00e9.mp3', 64), 27);
});

test('toShards: head + 64 shards, every key once, in its own shard', () => {
  const policy = { free: ['a.mp3', 'b.mp3'], manifests: ['m.json'], denyListed: ['words/female/x.mp3'], chapters: { A1_017: 'a1-17-x' }, freeChapters: ['a1-1-alphabet'] };
  const files = toShards(policy, 'm1', 'abc');
  assert.equal(Object.keys(files).length, 65);
  const head = JSON.parse(files['head.json']);
  assert.deepEqual([head.schema, head.release, head.shards, head.policySha256], [1, 'm1', 64, 'abc']);
  const seen = [];
  for (const [n, b] of Object.entries(files)) if (n !== 'head.json') { const j = JSON.parse(b); for (const k of [...j.free, ...j.manifest, ...j.deny]) { seen.push(k); assert.equal(shardOf(k, 64), Number(n.slice(6, 8))); } }
  assert.deepEqual(seen.sort(), ['a.mp3', 'b.mp3', 'm.json', 'words/female/x.mp3']);
});

test('owner decisions: exactly 11 homepage words, all visible on the homepage; 11 greetings', () => {
  assert.deepEqual([...OWNER_HOMEPAGE_WORDS], ['Hören', 'Lesen', 'Schreiben', 'Sprechen', 'Akkusativ', 'Dativ', 'Nominativ', 'geben', 'gerne', 'trinke', 'Stück']);
  for (const w of ['Im', 'Start', 'Fit', 'Diplom', 'Adverb', 'See', 'Live']) assert.ok(!OWNER_HOMEPAGE_WORDS.includes(w), w);
  const vis = new Set(words(visibleText(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'))));
  for (const w of OWNER_HOMEPAGE_WORDS) assert.ok(vis.has(w), w);
  assert.equal(OWNER_FREE_GREETINGS.length, 11);
});
