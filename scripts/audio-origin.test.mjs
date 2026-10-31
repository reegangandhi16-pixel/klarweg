/* Audio origin = klarweg-audio Worker, with the previous public hosts as an
   automatic fallback. Runs the REAL public/audio/kw-audio-engine.js in a vm
   with a fake fetch/Audio: a Worker outage must fall back to jsDelivr /
   github.io (manifests and MP3s), never straight to browser TTS. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const ORIGIN = 'https://klarweg-audio.klarweg-issue-reports-2026.workers.dev/';
const JSD = 'https://cdn.jsdelivr.net/gh/reegangandhi16-pixel/klarweg-audio@main/public/audio/';
const GHIO = 'https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/';
const ENGINE = read('public/audio/kw-audio-engine.js');

const SITE = 'https://klarweg.in/public/audio/';
// Keyed by the path under both the site's public/audio/ and the audio origin.
const MANIFESTS = {
  'vocab/manifest.json': { 'der Apfel': { female: 'audio/female/der_Apfel.mp3', male: 'audio/male/der_Apfel.mp3' } },
  'a1-words-manifest.json': { 'das Buch': { female: '/audio/words/female/abc.mp3', male: '/audio/words/male/abc.mp3' } },
  'a2-words-manifest.json': {}, 'b1-words-manifest.json': {},
  'vocab/manifest-word-form.json': {}, 'vocab/manifest-conjugation.json': {}
};
const LEGACY_NAME = (u) => u.startsWith(GHIO) ? 'vocab/' + u.slice(GHIO.length) : u.slice(JSD.length);

function load({ workerDown = false, workerStatus = 503, errorDelay = 0, abort = false, siteMissing = [] } = {}) {
  const fetched = [], played = [], rates = [], events = [];
  const json = (o) => ({ ok: true, status: 200, json: async () => o });
  const fetch = async (url) => {
    fetched.push(url);
    const miss = { ok: false, status: 404, json: async () => ({}) };
    if (url.startsWith(SITE)) {
      const name = url.slice(SITE.length);
      if (name === 'manifest.json') return json({});  // sentence manifest
      return MANIFESTS[name] && !siteMissing.includes(name) ? json(MANIFESTS[name]) : miss;
    }
    if (url.startsWith(ORIGIN)) {
      if (workerDown) return { ok: false, status: workerStatus, json: async () => ({}) };
      const name = url.slice(ORIGIN.length);
      return MANIFESTS[name] ? json(MANIFESTS[name]) : miss;
    }
    if (url.startsWith(JSD) || url.startsWith(GHIO)) {
      const name = LEGACY_NAME(url);
      return MANIFESTS[name] ? json(MANIFESTS[name]) : miss;
    }
    return json({});
  };
  class FakeAudio {
    constructor(src) { this.src = src || ''; this.l = {}; this.error = null; this.currentTime = 0; this.playbackRate = 1; }
    addEventListener(t, f) { (this.l[t] = this.l[t] || []).push(f); }
    removeEventListener() {}
    fire(t) { (this.l[t] || []).splice(0).forEach((f) => f()); }
    load() {}
    pause() {}
    play() {
      played.push(this.src); rates.push(this.playbackRate);
      if (abort) return Promise.reject(Object.assign(new Error('stopped'), { name: 'AbortError' }));
      if (workerDown && this.src.startsWith(ORIGIN)) {
        this.error = { code: 4 };
        setTimeout(() => this.fire('error'), errorDelay);
        if (errorDelay) return Promise.resolve();   // still "loading" until the late error
        return Promise.reject(Object.assign(new Error('no source'), { name: 'NotSupportedError' }));
      }
      setTimeout(() => this.fire('ended'), 0);
      return Promise.resolve();
    }
  }
  const ctx = {
    console, setTimeout, clearTimeout, Promise, URL, fetch, Audio: FakeAudio,
    document: { currentScript: { src: 'https://klarweg.in/public/audio/kw-audio-engine.js' } },
    navigator: { userAgent: 'node' }, location: { href: 'https://klarweg.in/' }
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(read('public/audio/kw-tts-config.js').replace(/\(function \(\) \{[\s\S]*$/, ''), ctx);  // KW_AUDIO_BASE only
  vm.runInContext(ENGINE, ctx);
  ctx.KW_onAudioEvent((e) => events.push(e));
  return { w: ctx, fetched, played, rates, events };
}

test('one audio origin: engine bases and KW_AUDIO_BASE all point at the Worker', () => {
  assert.match(ENGINE, new RegExp(`var AUDIO_ORIGIN = '${ORIGIN.replace(/[.]/g, '\\.')}';`));
  assert.match(read('public/audio/kw-tts-config.js'), new RegExp(`window\\.KW_AUDIO_BASE =\\s*'${ORIGIN.replace(/[.]/g, '\\.')}';`));
  for (const name of ['WORDS_CDN_BASE = AUDIO_ORIGIN', "VOCAB_CDN_BASE = AUDIO_ORIGIN + 'vocab/'", 'WORD_FORM_CDN_BASE = VOCAB_CDN_BASE', 'CONJUGATION_CDN_BASE = VOCAB_CDN_BASE']) assert.ok(ENGINE.includes(name), name);
});

test('no published runtime file loads audio from jsDelivr/github.io except the legacy fallback map', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.startsWith('GLOB:') && /\.(js|html)$/.test(l));
  for (const f of allow) {
    const src = read(f).replace(/var LEGACY_AUDIO_HOSTS = \[[\s\S]*?\];/, '');
    assert.ok(!/cdn\.jsdelivr\.net\/gh\/reegangandhi16-pixel\/klarweg-audio|reegangandhi16-pixel\.github\.io\/klarweg-audio-cdn/.test(src), `${f} references an old audio host outside the fallback map`);
  }
});

test('Worker healthy: every manifest comes from the site, MP3s from the Worker', async () => {
  const { w, fetched, played, events } = load();
  await w.KW_ensureVocab();
  await w.KW_ensureWordFormManifest(); await w.KW_ensureConjugation();
  assert.equal(w.KW_vocabUrl('der Apfel', 'female'), ORIGIN + 'vocab/audio/female/der_Apfel.mp3');
  assert.equal(w.KW_vocabUrl('das Buch', 'male'), ORIGIN + 'words/male/abc.mp3', 'site-read manifest still resolves MP3s on the Worker');
  assert.equal(await w.KW_speak('der Apfel', { gender: 'female' }), 'manifest');
  assert.deepEqual(played, [ORIGIN + 'vocab/audio/female/der_Apfel.mp3']);
  for (const f of Object.keys(MANIFESTS)) assert.ok(fetched.includes(SITE + f), 'site copy fetched: ' + f);
  assert.equal(fetched.filter((u) => u.startsWith(ORIGIN)).length, 0, 'no manifest request reaches the audio Worker');
  assert.ok(!fetched.some((u) => u.startsWith(JSD) || u.startsWith(GHIO)), 'no request to the old hosts');
  assert.equal(events.filter((e) => e.type === 'audio-legacy-fallback').length, 0);
});

test('site copy missing: that manifest is read from the Worker instead', async () => {
  const { w, fetched } = load({ siteMissing: ['a1-words-manifest.json'] });
  await w.KW_ensureVocab();
  assert.ok(fetched.includes(ORIGIN + 'a1-words-manifest.json'));
  assert.equal(w.KW_vocabUrl('das Buch', 'female'), ORIGIN + 'words/female/abc.mp3');
});

test('Worker down: manifests still from the site; the MP3 falls back to the old host and plays', async () => {
  const { w, fetched, played, events } = load({ workerDown: true });
  await w.KW_ensureVocab();
  assert.equal(fetched.filter((u) => u.startsWith(ORIGIN)).length, 0);
  assert.equal(w.KW_vocabUrl('das Buch', 'female'), ORIGIN + 'words/female/abc.mp3');
  assert.equal(await w.KW_speak('das Buch', { gender: 'female' }), 'manifest');
  assert.deepEqual(played, [ORIGIN + 'words/female/abc.mp3', JSD + 'words/female/abc.mp3']);
  assert.ok(events.some((e) => e.type === 'audio-legacy-fallback' && e.kind === 'play'));
});

test('Worker down AND site copy missing: the manifest falls back to the old host', async () => {
  const { w, fetched, events } = load({ workerDown: true, siteMissing: ['vocab/manifest.json'] });
  await w.KW_ensureVocab();
  assert.ok(fetched.includes(GHIO + 'manifest.json'));
  assert.equal(w.KW_vocabUrl('der Apfel', 'male'), ORIGIN + 'vocab/audio/male/der_Apfel.mp3');
  assert.ok(events.some((e) => e.type === 'audio-legacy-fallback' && e.kind === 'manifest'));
});

test('the site copies of the vocab manifests are published (allowlisted)', () => {
  const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim());
  for (const f of Object.keys(MANIFESTS)) assert.ok(allow.includes('public/audio/' + f), f);
  for (const f of Object.keys(MANIFESTS)) JSON.parse(read('public/audio/' + f));
});

test('a stop/abort is not retried on another host and never falls through to cache/TTS', async () => {
  const { w, played, events } = load({ abort: true });
  await w.KW_ensureVocab();
  const res = await w.KW_speak('der Apfel', { gender: 'female' });
  assert.equal(played.filter((u) => u.startsWith(GHIO)).length, 0, 'no legacy retry after AbortError');
  assert.notEqual(res, 'error');
  assert.ok(!events.some((e) => e.type === 'cache-miss' || e.type === 'cache-hit'), 'fallback chain not entered after a pause/stop');
});

test('a Worker manifest answer of 403/404/429/5xx falls back to the old host', async () => {
  for (const status of [403, 404, 429, 500, 502, 503]) {
    const { w, fetched } = load({ workerDown: true, workerStatus: status, siteMissing: ['a1-words-manifest.json'] });
    await w.KW_ensureVocab();
    assert.ok(fetched.includes(JSD + 'a1-words-manifest.json'), 'legacy manifest after ' + status);
    assert.equal(w.KW_vocabUrl('das Buch', 'female'), ORIGIN + 'words/female/abc.mp3', 'MP3 base stays on the Worker after ' + status);
  }
});

test('each site manifest is fetched once per page, however many plays', async () => {
  const { w, fetched } = load();
  await w.KW_ensureVocab(); await w.KW_ensureVocab();
  await w.KW_speak('der Apfel', { gender: 'female' }); await w.KW_speak('das Buch', { gender: 'male' });
  for (const f of ['vocab/manifest.json', 'a1-words-manifest.json']) assert.equal(fetched.filter((u) => u === SITE + f).length, 1, f);
});

test('slow playback rate survives the legacy retry', async () => {
  const { w, played, rates } = load({ workerDown: true });
  await w.KW_ensureVocab();
  await w.KW_speak('das Buch', { gender: 'female', rate: 0.75 });
  assert.equal(played[1], JSD + 'words/female/abc.mp3');
  assert.deepEqual(rates, [0.75, 0.75]);
});

test('a late Worker error after stop, or after another clip started, is not replayed anywhere', async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  {
    const { w, played, events } = load({ workerDown: true, errorDelay: 30 });
    await w.KW_ensureVocab();
    const p = w.KW_speak('das Buch', { gender: 'female' });
    await wait(5); w.KW_stopAudio();
    const res = await p; await wait(40);
    assert.deepEqual(played, [ORIGIN + 'words/female/abc.mp3'], 'no legacy replay after stop');
    assert.ok(!events.some((e) => e.type === 'audio-legacy-fallback'));
    assert.notEqual(res, false, 'settled as handled, so no cache/TTS fallback starts');
  }
  {
    const { w, played } = load({ workerDown: true, errorDelay: 30 });
    await w.KW_ensureVocab();
    w.KW_speak('das Buch', { gender: 'female' });
    await wait(5);
    w.KW_speak('der Apfel', { gender: 'female' });
    await wait(80);
    assert.ok(!played.includes(JSD + 'words/female/abc.mp3'), 'the replaced clip is not replayed');
    assert.ok(played.includes(GHIO + 'audio/female/der_Apfel.mp3'), 'the current clip still falls back');
  }
});
