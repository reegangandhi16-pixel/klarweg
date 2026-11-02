/* Audio origin = the protected same-origin route klarweg.in/api/media/
   (access Worker: free audio for anyone, paid audio only with a session that
   holds the purchase). There is NO fallback to any other host: the old public
   copies (audio Worker on workers.dev, jsDelivr, github.io) are closed. Runs
   the REAL public/audio/kw-audio-engine.js in a vm with a fake fetch/Audio. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const ORIGIN = '/api/media/';
const OLD_HOSTS = /klarweg-audio\.klarweg-issue-reports-2026\.workers\.dev|cdn\.jsdelivr\.net\/gh\/reegangandhi16-pixel\/klarweg-audio|reegangandhi16-pixel\.github\.io\/klarweg-audio-cdn/;
const ENGINE = read('public/audio/kw-audio-engine.js');

const SITE = 'https://klarweg.in/public/audio/';
// Keyed by the path under both the site's public/audio/ and the audio origin.
const MANIFESTS = {
  'vocab/manifest.json': {
    'der Apfel': { female: 'audio/female/der_Apfel.mp3', male: 'audio/male/der_Apfel.mp3' },
    'das Haus': { female: '/audio/words/female/haus.mp3', male: '/audio/words/male/haus.mp3' }   // root-relative inside the vocab manifest
  },
  'a1-words-manifest.json': { 'das Buch': { female: '/audio/words/female/abc.mp3', male: '/audio/words/male/abc.mp3' } },
  'a2-words-manifest.json': {}, 'b1-words-manifest.json': {},
  'vocab/manifest-word-form.json': {}, 'vocab/manifest-conjugation.json': {}
};
const LINES = { entries: { 'Guten Tag!': { id: 'A1_001_S002', file: 'audio/story/A1_001_S002.mp3' } } };

function load({ mediaStatus = 200, abort = false, siteMissing = [], audioBase } = {}) {
  const fetched = [], played = [], events = [];
  const json = (o) => ({ ok: true, status: 200, json: async () => o });
  const fetch = async (url) => {
    fetched.push(url);
    const miss = { ok: false, status: 404, json: async () => ({}) };
    if (url.startsWith(SITE)) {
      const name = url.slice(SITE.length);
      if (name === 'manifest-public.json') return json(LINES);
      return MANIFESTS[name] && !siteMissing.includes(name) ? json(MANIFESTS[name]) : miss;
    }
    if (url.startsWith(ORIGIN)) {
      const name = url.slice(ORIGIN.length);
      return MANIFESTS[name] ? json(MANIFESTS[name]) : miss;
    }
    return miss;
  };
  class FakeAudio {
    constructor(src) { this.src = src || ''; this.l = {}; this.error = null; this.currentTime = 0; this.playbackRate = 1; }
    addEventListener(t, f) { (this.l[t] = this.l[t] || []).push(f); }
    removeEventListener() {}
    fire(t) { (this.l[t] || []).splice(0).forEach((f) => f()); }
    load() {}
    pause() {}
    play() {
      played.push(this.src);
      if (abort) return Promise.reject(Object.assign(new Error('stopped'), { name: 'AbortError' }));
      if (mediaStatus !== 200) {                       // 401/403/404 from /api/media: the element cannot play it
        this.error = { code: 4 };
        setTimeout(() => this.fire('error'), 0);
        return Promise.reject(Object.assign(new Error('no source'), { name: 'NotSupportedError' }));
      }
      setTimeout(() => this.fire('ended'), 0);
      return Promise.resolve();
    }
  }
  const ctx = {
    console, setTimeout, clearTimeout, Promise, URL, fetch, Audio: FakeAudio,
    document: { currentScript: { src: 'https://klarweg.in/public/audio/kw-audio-engine.js?v=3' } },
    navigator: { userAgent: 'node' }, location: { href: 'https://klarweg.in/' }
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(read('public/audio/kw-tts-config.js').replace(/\(function \(\) \{[\s\S]*$/, ''), ctx);  // KW_AUDIO_BASE only
  if (audioBase !== undefined) ctx.KW_AUDIO_BASE = audioBase;
  vm.runInContext(ENGINE, ctx);
  ctx.KW_onAudioEvent((e) => events.push(e));
  return { w: ctx, fetched, played, events };
}
const tick = (ms = 20) => new Promise((r) => setTimeout(r, ms));

test('one audio origin: engine bases and KW_AUDIO_BASE are the protected /api/media/ route', () => {
  assert.ok(ENGINE.includes("var AUDIO_ORIGIN = '/api/media/';"));
  assert.match(read('public/audio/kw-tts-config.js'), /window\.KW_AUDIO_BASE = '\/api\/media\/';/);
  for (const name of ['WORDS_CDN_BASE = AUDIO_ORIGIN', "VOCAB_CDN_BASE = AUDIO_ORIGIN + 'vocab/'", 'WORD_FORM_CDN_BASE = VOCAB_CDN_BASE', 'CONJUGATION_CDN_BASE = VOCAB_CDN_BASE']) assert.ok(ENGINE.includes(name), name);
  assert.ok(!ENGINE.includes('LEGACY_AUDIO_HOSTS'), 'no legacy host map');
});

test('no published runtime file loads audio from the old public hosts', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.startsWith('GLOB:') && /\.(js|html)$/.test(l));
  assert.ok(allow.length > 0);
  for (const f of allow) assert.ok(!OLD_HOSTS.test(read(f)), `${f} references an old public audio host`);
});

test('manifests come from the site, every MP3 from /api/media/', async () => {
  const { w, fetched, played } = load();
  await w.KW_ensureVocab();
  await w.KW_ensureWordFormManifest(); await w.KW_ensureConjugation();
  assert.equal(w.KW_vocabUrl('der Apfel', 'female'), ORIGIN + 'vocab/audio/female/der_Apfel.mp3');
  assert.equal(w.KW_vocabUrl('das Buch', 'male'), ORIGIN + 'words/male/abc.mp3');
  assert.equal(await w.KW_speak('der Apfel', { gender: 'female' }), 'manifest');
  assert.deepEqual(played, [ORIGIN + 'vocab/audio/female/der_Apfel.mp3']);
  for (const f of Object.keys(MANIFESTS)) assert.ok(fetched.includes(SITE + f), 'site copy fetched: ' + f);
  assert.ok(!fetched.some((u) => OLD_HOSTS.test(u)), 'no request to an old host');
});

test('path fix: "/audio/words/…" in the vocab manifest plays words/…, not vocab/words/…', async () => {
  const { w } = load();
  await w.KW_ensureVocab();
  assert.equal(w.KW_vocabUrl('das Haus', 'female'), ORIGIN + 'words/female/haus.mp3');
});

test('lesson lines resolve on /api/media/, also with a stale cached config naming the old Worker', async () => {
  for (const audioBase of [undefined, 'https://klarweg-audio.klarweg-issue-reports-2026.workers.dev/']) {
    const { w } = load({ audioBase });
    for (let i = 0; i < 50 && !w.KW_audioReady(); i++) await tick(5);
    assert.equal(w.audioUrl('Guten Tag!'), ORIGIN + 'story/A1_001_S002.mp3', String(audioBase));
  }
});

test('site copy missing: that manifest is read from /api/media/ instead', async () => {
  const { w, fetched } = load({ siteMissing: ['a1-words-manifest.json'] });
  await w.KW_ensureVocab();
  assert.ok(fetched.includes(ORIGIN + 'a1-words-manifest.json'));
  assert.equal(w.KW_vocabUrl('das Buch', 'female'), ORIGIN + 'words/female/abc.mp3');
});

test('a refused file (signed out / not purchased) is never retried on another host', async () => {
  for (const status of [401, 403, 404, 503]) {
    const { w, played, fetched, events } = load({ mediaStatus: status });
    await w.KW_ensureVocab();
    await w.KW_speak('das Buch', { gender: 'female' });
    await tick();
    assert.ok(played.length >= 1 && played.every((u) => u.startsWith(ORIGIN)), 'only /api/media/ after ' + status);
    assert.ok(!fetched.some((u) => OLD_HOSTS.test(u)), 'no old host after ' + status);
    assert.equal(events.filter((e) => e.type === 'audio-legacy-fallback').length, 0);
  }
});

test('the site copies of the vocab manifests are published (allowlisted)', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of Object.keys(MANIFESTS)) assert.ok(allow.includes('public/audio/' + f), f);
  for (const f of Object.keys(MANIFESTS)) JSON.parse(read('public/audio/' + f));
});

test('a stop/abort never falls through to cache/TTS', async () => {
  const { w, played, events } = load({ abort: true });
  await w.KW_ensureVocab();
  const res = await w.KW_speak('der Apfel', { gender: 'female' });
  assert.equal(played.length, 1);
  assert.notEqual(res, 'error');
  assert.ok(!events.some((e) => e.type === 'cache-miss' || e.type === 'cache-hit'), 'fallback chain not entered after a pause/stop');
});

test('each site manifest is fetched once per page, however many plays', async () => {
  const { w, fetched } = load();
  await w.KW_ensureVocab(); await w.KW_ensureVocab();
  await w.KW_speak('der Apfel', { gender: 'female' }); await w.KW_speak('das Buch', { gender: 'male' });
  for (const f of ['vocab/manifest.json', 'a1-words-manifest.json']) assert.equal(fetched.filter((u) => u === SITE + f).length, 1, f);
});
