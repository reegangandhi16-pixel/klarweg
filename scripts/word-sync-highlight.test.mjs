/* Story / Reading / Listening word highlighting (public/audio/kw-word-sync.js).

   Regression (2026-11-03): since audio plays from the same-origin protected
   route, the engine reports the URL it requested as '/api/media/…' (relative)
   while the <audio> element reports it resolved ('https://klarweg.in/api/media/…').
   The sync compared the two as strings, took the clip's OWN play-start for
   "another clip started" and detached at once: no word was ever highlighted.
   These tests run the real file with a fake <audio> and the engine event bus. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SYNC = fs.readFileSync(path.join(ROOT, 'public/audio/kw-word-sync.js'), 'utf8');
const ENGINE = fs.readFileSync(path.join(ROOT, 'public/audio/kw-audio-engine.js'), 'utf8');
const HASH = 'abcdef0123456789';
const FILE = 'story/A1_002_S001.mp3';
const WORDS = ['Guten', 'Morgen', 'Anna'];

function span(text) {
  const cls = new Set();
  return { textContent: text, nextSibling: null, classList: { add: (c) => cls.add(c), remove: (c) => cls.delete(c), contains: (c) => cls.has(c) } };
}
function fakeAudio(src) {
  const on = {};
  return {
    src, currentSrc: src, currentTime: 0, duration: 3, paused: true, ended: false,
    addEventListener: (t, f) => { (on[t] = on[t] || []).push(f); },
    removeEventListener: (t, f) => { on[t] = (on[t] || []).filter((x) => x !== f); },
    fire(t) { (on[t] || []).slice().forEach((f) => f({})); }
  };
}
const sidecar = { v: 1, file: 'audio/' + FILE, duration: 3, words: [['Guten', 0.1, 0.6, 0, 1], ['Morgen', 0.7, 1.4, 0, 1], ['Anna', 1.6, 2.4, 0, 1]] };

function page({ payload = true } = {}) {
  const bus = [];
  const win = {
    location: { href: 'https://klarweg.in/chapter/chapter-a1-2-vokale.html' },
    document: { currentScript: null },
    fetch: () => Promise.resolve({ ok: false }),
    URL, Promise, setTimeout, clearTimeout,
    requestAnimationFrame: () => 0, cancelAnimationFrame: () => {},
    KW_onAudioEvent: (fn) => { bus.push(fn); return () => { const i = bus.indexOf(fn); if (i >= 0) bus.splice(i, 1); }; },
    KW_dialogueInfo: () => ({ contentHash: HASH })
  };
  win.window = win;
  if (payload) win.KW_CHAPTER_AUDIO = { chapter: 'a1-2-vokale', entries: {}, timing: { [HASH]: sidecar } };
  vm.runInNewContext(SYNC, win);
  return { win, emit: (ev) => bus.slice().forEach((f) => f(ev)) };
}
const tick = () => new Promise((r) => setImmediate(r));
async function play(emit, audio, url) {
  await tick(); await tick();                       // the sidecar resolves
  audio.paused = false;
  emit({ type: 'play-start', url, source: 'file' }); // engine, after play() resolves
  audio.fire('play');
}
const lit = (els) => els.filter((e) => e.classList.contains('speaking')).map((e) => e.textContent);

test('engine URL relative, element URL absolute: the clip keeps its own highlighting', async () => {
  const { win, emit } = page();
  const els = WORDS.map(span);
  const audio = fakeAudio('https://klarweg.in/api/media/' + FILE);
  let mode = null;
  win.KW_wordSync.syncFor(audio, els, { text: 'Guten Morgen, Anna.', onMode: (m) => { mode = m; } });
  await play(emit, audio, '/api/media/' + FILE);
  assert.equal(mode, 'exact');
  audio.currentTime = 0.9; audio.fire('timeupdate');
  assert.deepEqual(lit(els), ['Morgen']);
  audio.currentTime = 1.8; audio.fire('timeupdate');
  assert.deepEqual(lit(els), ['Anna']);
});

test('another clip starting still ends the highlighting', async () => {
  const { win, emit } = page();
  const els = WORDS.map(span);
  const audio = fakeAudio('https://klarweg.in/api/media/' + FILE);
  win.KW_wordSync.syncFor(audio, els, { text: 'Guten Morgen, Anna.' });
  await play(emit, audio, '/api/media/' + FILE);
  audio.currentTime = 0.9; audio.fire('timeupdate');
  assert.deepEqual(lit(els), ['Morgen']);
  emit({ type: 'play-start', url: '/api/media/story/A1_002_S002.mp3', source: 'file' });
  assert.deepEqual(lit(els), [], 'detached and cleared');
  audio.currentTime = 1.8; audio.fire('timeupdate');
  assert.deepEqual(lit(els), []);
});

test('a stop event ends the highlighting', async () => {
  const { win, emit } = page();
  const els = WORDS.map(span);
  const audio = fakeAudio('https://klarweg.in/api/media/' + FILE);
  win.KW_wordSync.syncFor(audio, els, { text: 'Guten Morgen, Anna.' });
  await play(emit, audio, '/api/media/' + FILE);
  audio.currentTime = 0.2; audio.fire('timeupdate');
  assert.deepEqual(lit(els), ['Guten']);
  emit({ type: 'stop' });
  assert.deepEqual(lit(els), []);
});

test('protected payload that runs after the sync script: its timing is still used', async () => {
  const { win, emit } = page({ payload: false });
  win.KW_CHAPTER_AUDIO = { chapter: 'a1-2-vokale', entries: {}, timing: { [HASH]: sidecar } };   // late payload
  const els = WORDS.map(span);
  const audio = fakeAudio('https://klarweg.in/api/media/' + FILE);
  let mode = null;
  win.KW_wordSync.syncFor(audio, els, { text: 'Guten Morgen, Anna.', onMode: (m) => { mode = m; } });
  await play(emit, audio, '/api/media/' + FILE);
  assert.equal(mode, 'exact');
  audio.currentTime = 0.9; audio.fire('timeupdate');
  assert.deepEqual(lit(els), ['Morgen']);
});

test('a sidecar for a different file is refused (no wrong mapping)', async () => {
  const { win, emit } = page();
  const els = WORDS.map(span);
  const audio = fakeAudio('https://klarweg.in/api/media/story/A1_009_S001.mp3');
  let mode = null;
  win.KW_wordSync.syncFor(audio, els, { text: 'Guten Morgen, Anna.', onMode: (m) => { mode = m; } });
  await play(emit, audio, '/api/media/story/A1_009_S001.mp3');
  assert.equal(mode, 'estimate');
});

test('the engine still emits play-start with the URL it requested (same-origin /api/media/)', () => {
  assert.match(ENGINE, /var AUDIO_ORIGIN = '\/api\/media\/';/);
  assert.match(ENGINE, /emit\('play-start', \{ url: url,/);
});
