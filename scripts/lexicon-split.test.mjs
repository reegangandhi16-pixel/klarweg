/* Lexicon split: the published dictionary holds only what free pages need;
   each paid chapter's entries travel only inside its gated payload, and the
   popup still sees one merged dictionary whatever the load order. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import {
  loadLexicons, chapters, freeNeeds, lexiconNeeds, allStrings, chapterSlice, publicFiles,
  lexiconShards, shardOf, SHARDS, PUBLIC_GLOBAL, PUBLIC_STORY, MERGE
} from './lexicon-split.mjs';
import { releasePayload, loadChapters } from './chapter-lock.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const L = loadLexicons();
const run = (...srcs) => { const w = {}; for (const s of srcs) vm.runInNewContext(s, { window: w, self: w }); return w; };

test('the committed public files are up to date', () => {
  for (const [f, content] of Object.entries(publicFiles())) assert.equal(read(f), content, f + ' — run node scripts/lexicon-split.mjs');
});

test('the public dictionary is only the free pages\' entries — a small part of the whole', () => {
  const w = run(read(PUBLIC_GLOBAL), read(PUBLIC_STORY));
  const f = freeNeeds();
  assert.deepEqual(Object.keys(w.KW_GLOBAL_LEXICON).sort(), [...f.g].sort());
  assert.deepEqual(Object.keys(w.KW_STORY_LEX).sort(), [...f.story].sort());
  assert.ok(Object.keys(w.KW_GLOBAL_LEXICON).length < Object.keys(L.G).length * 0.2, 'public global lexicon is under 20% of the entries');
  assert.ok(Object.keys(w.KW_INFLECTIONS).length < Object.keys(L.I).length * 0.05);
  // Chapter 1 words are there (free pages keep their popups)
  for (const k of ['apfel', 'buch', 'hund']) assert.ok(w.KW_GLOBAL_LEXICON[k], k);
});

test('every paid chapter reaches every entry it needs: public ∪ its own slice; the slice never repeats public entries', () => {
  const f = freeNeeds();
  let paid = 0, onlyPaid = 0;
  for (const c of chapters()) {
    if (c.number === 1) continue;
    paid++;
    const n = lexiconNeeds(allStrings(c.C)), s = chapterSlice(c.C);
    for (const k of n.g) assert.ok(f.g.has(k) || k in s.G, `${c.id}: ${k}`);
    for (const k of n.inf) assert.ok(f.inf.has(k) || k in s.I, `${c.id}: infl ${k}`);
    for (const k of n.story) assert.ok(f.story.has(k) || k in s.S, `${c.id}: story ${k}`);
    for (const k of Object.keys(s.G)) assert.ok(!f.g.has(k), `${c.id}: ${k} duplicated`);
    onlyPaid += Object.keys(s.G).length;
  }
  assert.equal(paid, 252);
  assert.ok(onlyPaid > 1000, 'paid-only entries really moved out of the public file');
});

test('a paid payload carries its slice; the merge works in either load order and is idempotent', () => {
  const c = loadChapters().find((x) => /^b1-10-/.test(x.id));
  const payload = releasePayload(c).toString('utf8');
  assert.match(payload, /window\.KW_CHAPTER_LEXICON = /);
  assert.ok(payload.includes(MERGE));
  const slice = chapterSlice(chapters().find((x) => x.id === c.id).C);
  const someKey = Object.keys(slice.G)[0];
  assert.ok(someKey, 'chapter has paid-only entries');
  const pub = read(PUBLIC_GLOBAL), story = read(PUBLIC_STORY);
  const stub = 'window.CHAPTER = window.CHAPTER || {};';
  const tail = payload.slice(payload.indexOf('\n/* Word-popup dictionary'));
  for (const order of [[stub + tail, story, pub], [pub, story, stub + tail], [story, stub + tail, pub, tail]]) {
    const w = run(...order);
    assert.equal(JSON.stringify(w.KW_GLOBAL_LEXICON[someKey]), JSON.stringify(L.G[someKey]), 'merged entry equals the source');
    assert.ok(w.KW_GLOBAL_LEXICON.apfel, 'public entries kept');
  }
  // Without the payload (a free page, or signed out) the paid entry is absent.
  assert.equal(run(pub).KW_GLOBAL_LEXICON[someKey], undefined);
});

test('a free chapter payload stays byte-identical to its data file', () => {
  const c = loadChapters().find((x) => x.number === 1);
  assert.equal(releasePayload(c).toString('utf8'), read('chapter/' + c.file));
});

test('shards hold the whole lexicon exactly once (protected review lookup)', () => {
  const shards = lexiconShards();
  assert.equal(shards.length, SHARDS);
  assert.equal(shards.reduce((n, s) => n + Object.keys(s.G).length, 0), Object.keys(L.G).length);
  assert.equal(shards.reduce((n, s) => n + Object.keys(s.I).length, 0), Object.keys(L.I).length);
  assert.ok(shards[shardOf('apfel')].G.apfel);
  // fixed vectors, shared with access/worker (saved-words lexicon lookup)
  assert.deepEqual(['apfel', 'haus', 'größe', 'ab und zu'].map((k) => shardOf(k)), [31, 18, 26, 44]);
});

test('published pages load only the public dictionary files', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of [PUBLIC_GLOBAL, PUBLIC_STORY]) assert.ok(allow.includes(f), f);
  for (const f of ['chapter/global-lexicon.js', 'chapter/story-lexicon.js']) assert.ok(!allow.includes(f), f + ' (full dictionary) must not be published');
  const wf = read('.github/workflows/deploy-pages.yml');
  assert.ok(!/[|( ]global-lexicon\.js[|)]/.test(wf) && !/[|( ]story-lexicon\.js[|)]/.test(wf), 'deploy workflow does not accept the full dictionary');
  assert.match(read('chapter/chapter-app.js'), /'global-lexicon-public\.js'/);
  assert.ok(read('account/review.html').includes('../chapter/global-lexicon-public.js'));
  assert.ok(read('account/review.html').includes("'/saved-words/lexicon'"));
  for (const f of fs.readdirSync(path.join(ROOT, 'chapter')).filter((x) => /^chapter-.+\.html$/.test(x))) {
    const h = read('chapter/' + f);
    assert.ok(!h.includes('src="story-lexicon.js"') && !h.includes('global-lexicon.js"'), f);
  }
});

test('a release carries the 64 lexicon shards, written before index.json', async () => {
  const { buildRelease } = await import('./chapter-lock.mjs');
  const os = await import('node:os');
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-rel-'));
  try {
    const b = buildRelease({ release: 'r999', out });
    const lex = b.files.filter((f) => f.startsWith('lexicon/'));
    assert.equal(lex.length, SHARDS);
    assert.equal(b.files[b.files.length - 1], 'index.json');
    const s = JSON.parse(fs.readFileSync(path.join(b.dir, 'lexicon', String(shardOf('apfel')).padStart(2, '0') + '.json'), 'utf8'));
    assert.equal(JSON.stringify(s.G.apfel), JSON.stringify(L.G.apfel));
  } finally { fs.rmSync(out, { recursive: true, force: true }); }
});
