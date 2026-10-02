// Word Match scorer (A1·01 Whisper pilot): the browser scorer in chapter-app.js
// must give exactly the same alignment as the reference scorer
// (speech/score_reference.py) on every benchmark transcript, and the pilot
// flag must stay off everywhere except an explicitly configured A1·01.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const APP = fs.readFileSync(new URL('../chapter/chapter-app.js', import.meta.url), 'utf8');
const START = APP.indexOf('  // ---- Word Match scorer (deterministic) ----');
const END = APP.indexOf('  // ---- end Word Match scorer ----');
const CASES = JSON.parse(fs.readFileSync(new URL('./fixtures/speech-word-match-cases.json', import.meta.url), 'utf8'));

function scorer() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(APP.slice(START, END) + '\nthis.wordMatch = wordMatch;', ctx);
  return (t, h) => JSON.parse(JSON.stringify(ctx.wordMatch(t, h)));   // plain objects across the VM realm
}

test('scorer block is present and self-contained', () => {
  assert.ok(START > 0 && END > START);
  assert.equal(typeof scorer(), 'function');
});

test(`browser scorer matches the reference on all ${CASES.length} benchmark cases`, () => {
  const wordMatch = scorer();
  const diffs = [];
  for (const c of CASES) {
    const r = wordMatch(c.target, c.heard);
    const ops = r.words.map((w) => [w.result, w.target, w.heard]);
    if (r.matched !== c.matched || r.targetWords !== c.targetWords || JSON.stringify(ops) !== JSON.stringify(c.ops)) diffs.push({ c, got: { matched: r.matched, targetWords: r.targetWords, ops } });
  }
  assert.equal(diffs.length, 0, JSON.stringify(diffs.slice(0, 3), null, 1));
});

test('a grammar error stays an error: "ein" for "einen"', () => {
  const r = scorer()('Ich möchte einen Kaffee.', 'Ich möchte ein Kaffee.');
  assert.deepEqual(r.words.map((w) => w.result), ['match', 'match', 'substitution', 'match']);
  assert.equal(r.words[2].heard, 'ein');
  assert.equal(`${r.matched}/${r.targetWords}`, '3/4');
  assert.equal(r.percent, 75);
});

test('German normalisation: ß/ss, umlauts, digits, letter names, spelled words', () => {
  const wm = scorer();
  assert.equal(wm('Die Straße ist lang.', 'Die Strasse ist lang').percent, 100);
  assert.equal(wm('Der Käse ist gut.', 'Der Kaese ist gut').percent, 100);
  assert.equal(wm('Ich bin fünfundzwanzig Jahre alt.', 'Ich bin 25 Jahre alt').percent, 100);
  assert.equal(wm('B-U-C-H. Buch.', 'BUCH Buch').percent, 100);
  assert.equal(wm('B-U-C-H. Buch.', 'be u ce ha Buch').percent, 100);
  assert.equal(wm('B-U-C-H. Buch.', 'Buch Buch').matched, 1, 'a lowercase word is not taken as a spelling');
});

test('missing and extra words are classified, extras do not lower the score', () => {
  const wm = scorer();
  const miss = wm('Die Zeit ist da.', 'Die Zeit');
  assert.deepEqual(miss.missing.map((w) => w.target), ['ist', 'da']);
  assert.equal(miss.percent, 50);
  const extra = wm('Ich heiße Rohan.', 'Ich heiße Rohan Kumar');
  assert.deepEqual(extra.extra.map((w) => w.heard), ['Kumar']);
  assert.equal(extra.percent, 100);
  assert.equal(wm('Die Zeit ist da.', '').matched, 0);
});

test('pilot flag: off unless configured, A1·01 only, loopback-only URL override', () => {
  const s = APP.indexOf('  function speechPilotEndpoint() {');
  const e = APP.indexOf('  // Stop by itself after');
  const run = (id, { cfg, search = '', host = 'reegangandhi16-pixel.github.io' } = {}) => {
    const ctx = { C: { id }, URL, window: cfg ? { KW_SPEECH_API: cfg } : {}, location: { search, hostname: host } };
    vm.createContext(ctx);
    vm.runInContext("const SPEECH_PILOT_CHAPTER = 'a1-1-alphabet';\n" + APP.slice(s, e) + '\nthis.f = speechPilotEndpoint;', ctx);
    return ctx.f();
  };
  assert.equal(run('a1-1-alphabet'), null, 'no config → off (production today)');
  assert.equal(run('a1-2-vokale', { cfg: 'https://speech.example' }), null, 'other chapters stay off even when configured');
  assert.equal(run('a1-1-alphabet', { cfg: 'https://speech.example/' }), 'https://speech.example');
  assert.equal(run('a1-1-alphabet', { cfg: 'http://speech.example' }), null, 'config must be https');
  assert.equal(run('a1-1-alphabet', { search: '?kwspeech=http://127.0.0.1:8901', host: '127.0.0.1' }), 'http://127.0.0.1:8901');
  assert.equal(run('a1-1-alphabet', { search: '?kwspeech=https://evil.example', host: '127.0.0.1' }), null, 'URL override only for a loopback service');
  assert.equal(run('a1-1-alphabet', { search: '?kwspeech=http://127.0.0.1:8901' }), null, 'URL override ignored on the live site');
});
