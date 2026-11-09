/* Sprechen exam room, Stage 1 (recorded prompts): pure rules — cast, scene, visemes, gating, bridge. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCast, castForPackage, speakerAt, sceneFor, statusText, packageAudioAssets } from '../js/room/cast.js';
import { buildTimeline, sampleTimeline, energyTimeline, ALL_KEYS } from '../js/room/visemes.js';
import { roomWanted, roomCapable, ROOM_PRODUCTION } from '../js/room/config.js';
import { createRoomBridge } from '../js/room/bridge.js';
import { segmentBounds } from '../../scripts/exam-room-cast.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const M0 = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/casts/m0.json'), 'utf8'));

const pkg = (ids) => ({ parts: [{ part: 1, tasks: [{ stimuli: ids.map((asset_id) => ({ kind: 'audio', asset_id })), items: [] }] }] });

test('ROOM: off in production until the owner approves (Stage 1 gate)', () => {
  assert.equal(ROOM_PRODUCTION, false);
  assert.equal(roomWanted({ hostname: 'klarweg.in', search: '?room=on' }), false, 'no URL switch on production');
  assert.equal(roomWanted({ hostname: 'localhost', search: '' }), false);
  assert.equal(roomWanted({ hostname: 'localhost', search: '?room=on' }), true);
  assert.equal(roomWanted({ hostname: 'localhost', search: '?room=on', stored: 'classic' }), false, 'classic view wins');
  assert.equal(roomWanted({ hostname: 'klarweg.in', production: true }), true);
  assert.equal(roomWanted({ hostname: 'klarweg.in', production: true, stored: 'classic' }), false);
  assert.deepEqual(roomCapable({ webgl: false }), { ok: false, reason: 'no_webgl' });
  assert.deepEqual(roomCapable({ webgl: true, saveData: true }), { ok: false, reason: 'save_data' });
  assert.deepEqual(roomCapable({ webgl: true }), { ok: true });
});

test('CAST: the M0 cast is valid, text-free, and covers every Sprechen audio asset of M0', () => {
  validateCast(M0);
  const raw = JSON.stringify(M0);
  assert.ok(!/[äöüß]|Hallo|Vielen|Thema/i.test(raw.replace(/"label":"[^"]*"/g, '')), 'no prompt text in the cast');
  for (const id of ['ast:m0-sp1-partner-1', 'ast:m0-sp1-partner-close', 'ast:m0-sp3-partner-talk', 'ast:m0-sp3-examiner-q-t1', 'ast:m0-sp3-partner-q-t2']) assert.ok(M0.assets[id], id);
  assert.equal(M0.people.examiner.role, 'examiner');
  // official roles: Teil 1 partner opposite; Teil 3 presenter opposite; the examiner is always present
  assert.equal(sceneFor(M0, 'teil1').front, 'partner');
  assert.equal(sceneFor(M0, 'partner').front, 'julia');
  assert.equal(sceneFor(M0, 'teil3').front, 'julia');
  assert.equal(sceneFor(M0, 'teil2').examiner, 'examiner');
});

test('CAST: speaker per time — the mixed Teil 3 clip switches examiner → Julia → examiner', () => {
  const id = 'ast:m0-sp3-partner-talk';
  assert.equal(speakerAt(M0, id, 1000), 'examiner');
  assert.equal(speakerAt(M0, id, 60000), 'julia');
  assert.equal(speakerAt(M0, id, 150000), 'examiner');
  assert.equal(speakerAt(M0, id, 999999), null);
  assert.equal(speakerAt(M0, 'ast:unknown', 0), null);
  assert.equal(speakerAt(M0, 'ast:m0-sp1-partner-2', 100), 'partner');
});

test('CAST: castForPackage needs every package audio asset (incl. per-topic prompts); otherwise the room stays off', () => {
  const ids = ['ast:m0-sp1-partner-1', 'ast:m0-sp3-partner-talk'];
  assert.equal(castForPackage([M0], pkg(ids)), M0);
  assert.equal(castForPackage([M0], pkg([...ids, 'ast:m1-sp1-partner-1'])), null);
  assert.equal(castForPackage([M0], pkg([])), null);
  const withTopic = { parts: [{ part: 3, tasks: [{ stimuli: [], items: [{ response_spec: { turns: [{ prompt_asset: 'ast:m0-sp3-examiner-q-t1', prompt_asset_by_topic: { t2: { asset_id: 'ast:x-not-in-cast' } } }] } }] }] }] };
  assert.deepEqual([...packageAudioAssets(withTopic)].sort(), ['ast:m0-sp3-examiner-q-t1', 'ast:x-not-in-cast']);
  assert.equal(castForPackage([M0], withTopic), null);
});

test('CAST: malformed casts are rejected (a broken cast disables the room instead of half-rendering)', () => {
  const ok = () => JSON.parse(JSON.stringify(M0));
  const c1 = ok(); delete c1.people.examiner; assert.throws(() => validateCast(c1));
  const c2 = ok(); c2.assets['ast:m0-sp1-partner-1'] = [[500, 100, 'partner']]; assert.throws(() => validateCast(c2));
  const c3 = ok(); c3.assets['ast:m0-sp1-partner-1'] = [[0, 100, 'ghost']]; assert.throws(() => validateCast(c3));
  const c4 = ok(); c4.front['1'] = 'examiner'; assert.throws(() => validateCast(c4));
  const c5 = ok(); c5.people.partner.avatar = '../x'; assert.throws(() => validateCast(c5));
});

test('STATUS: Stage 1 wording — recorded prompts; never "KI"/AI; the candidate turn is explicit', () => {
  assert.equal(statusText(M0, { speaker: 'julia' }), 'Julia (Teilnehmerin) spricht');
  assert.equal(statusText(M0, { recording: true, phaseId: 'teil1' }), 'Sie sind dran');
  assert.equal(statusText(M0, { recording: true, phaseId: 'teil2' }), 'Ihre Präsentation');
  assert.equal(statusText(M0, { prep: true }), 'Vorbereitungszeit');
  const room = fs.readFileSync(path.join(ROOT, 'exam/js/room/room.js'), 'utf8');
  assert.match(room, /aufgezeichneten Gesprächsimpulsen/);
  assert.match(room, /Keine KI/);
});

test('CAST TOOL: exact segment bounds from TTS segment lengths (edge 500, gap 700, tempo)', () => {
  // two segments of 1000 and 2000 ms at tempo 1: raw [500,1500] [2200,4200]; split mid-gap at 1850
  assert.deepEqual(segmentBounds([1000, 2000], 1, 4700), [[0, 1850], [1850, 4700]]);
  // tempo 0.5 doubles every position
  assert.deepEqual(segmentBounds([1000, 2000], 0.5, 9400), [[0, 3700], [3700, 9400]]);
});

test('VISEMES: timeline merges frames, drops silence and flicker; sampling ramps in and out', () => {
  const ev = (v, t) => ({ viseme: v, t, d: 0.02 });
  const runs = buildTimeline([ev(0, 0.1), ev(0, 0.12), ev(0, 0.14), ev(14, 0.2), ev(5, 0.3), ev(5, 0.32), ev(1, 0.34), ev(5, 0.36)]);
  assert.deepEqual(runs.map((r) => r.v), [0, 5]);   // the 20 ms "E" between two PP frames is absorbed
  const at = (ms) => sampleTimeline(runs, ms);
  assert.ok(at(130).viseme_aa > 0.8);
  assert.equal(Object.keys(at(1000)).length, 0, 'closed mouth long after speech');
  assert.ok(at(85).viseme_aa > 0 && at(85).viseme_aa < at(130).viseme_aa, 'attack ramp');
  for (const k of Object.keys(at(310))) assert.ok(ALL_KEYS.includes(k));
});

test('VISEMES: energy fallback opens the jaw only on sound', () => {
  const sr = 1000, s = new Float32Array(2000);
  for (let i = 500; i < 1000; i++) s[i] = Math.sin(i) * 0.5;
  const runs = energyTimeline(s, sr);
  assert.ok(runs.length >= 1);
  assert.ok(runs[0].a >= 480 && runs[runs.length - 1].b <= 1020);
});

test('BRIDGE: queues until ready, replays in order, never throws into the driver, and stays off after failure', () => {
  const calls = [];
  const fake = { prepare: (id, b) => calls.push(['prepare', id, b.byteLength]), attachAudio: () => calls.push(['attach']), phase: (p) => calls.push(['phase', p]), recording: (on) => calls.push(['rec', on]), destroy: () => calls.push(['destroy']) };
  const b = createRoomBridge();
  const bytes = new Uint8Array([1, 2, 3]);
  b.prepare('ast:a', bytes); b.attachAudio({}); b.phase('teil1'); b.recording(true, { part: 1 });
  bytes[0] = 9;   // the bridge kept its own copy
  b.ready(fake);
  assert.deepEqual(calls, [['prepare', 'ast:a', 3], ['attach'], ['phase', 'teil1'], ['rec', true]]);
  // a room that throws cannot break the caller
  const bad = createRoomBridge();
  bad.ready({ prepare() { throw new Error('x'); }, attachAudio() { throw new Error('x'); }, phase() { throw new Error('x'); }, recording() { throw new Error('x'); }, destroy() {} });
  assert.doesNotThrow(() => { bad.prepare('a', new ArrayBuffer(1)); bad.attachAudio({}); bad.phase('p'); bad.recording(false); });
  // off: ready(null) or destroy() → everything is a no-op, a late room is destroyed
  const off = createRoomBridge(); off.ready(null);
  let destroyed = false; off.ready({ destroy: () => { destroyed = true; } });
  assert.equal(destroyed, true); assert.equal(off.active, false);
});

test('MAIN: the room is wired only through the bridge hooks; driver, recorder, uploads and rating code are untouched', () => {
  const main = fs.readFileSync(path.join(ROOT, 'exam/js/main.js'), 'utf8');
  assert.match(main, /room\.prepare\(assetId, r\.bytes\)/);
  assert.match(main, /room\.attachAudio\(a\)/);
  assert.match(main, /ui: withRoom\(room, \{/);
  assert.match(main, /const r = ui\.recording\(on, opts\); room\.recording\(on, \{ part: opts\.part, stream: opts\.stream \}\); return r;/);
  assert.match(main, /try \{ try \{ await driver\.run\(\); \} finally \{ stopLevelMeter\(\); releaseMic\(\); \} \} finally \{ room\.destroy\(\); \}/);
  for (const f of ['sprechen-driver.js', 'speaking-audio.js', 'recorder.js', 'sprechen.js']) {
    assert.ok(!/room/i.test(fs.readFileSync(path.join(ROOT, 'exam/js', f), 'utf8')), f + ' must not know about the room');
  }
});

test('VENDOR: self-hosted, pinned, hash-checked; no bare specifiers left (CSP: no import map)', () => {
  const v = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/vendor/VERSIONS.json'), 'utf8'));
  assert.deepEqual(v.packages.map((p) => `${p.name}@${p.version}:${p.license}`), ['three@0.186.1:MIT', '@met4citizen/talkinghead@1.8.2:MIT', '@met4citizen/headaudio@1.0.0:MIT']);
  for (const [rel] of Object.entries(v.files)) {
    if (!/\.m?js$/.test(rel)) continue;
    const code = fs.readFileSync(path.join(ROOT, 'exam-room/vendor', rel), 'utf8');
    assert.ok(!/from\s*['"]three(['"/])/.test(code) && !/import\s*\(\s*['"]three/.test(code), rel + ' has a bare three import');
  }
  const csp = fs.readFileSync(path.join(ROOT, 'exam/index.html'), 'utf8').match(/Content-Security-Policy" content="([^"]+)"/)[1];
  assert.match(csp, /script-src 'self';/);
  assert.ok(!/unsafe-eval|wasm-unsafe-eval/.test(csp));
  assert.match(csp, /img-src 'self' data: blob:;/);
});

test('PUBLISHING: the Pages allowlist lists every vendored file and cast exactly (no exam-room glob); production needs every cast avatar', () => {
  const allow = fs.readFileSync(path.join(ROOT, '.github/pages-allowlist.txt'), 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const listed = allow.filter((l) => l.startsWith('exam-room/')).sort();
  const v = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/vendor/VERSIONS.json'), 'utf8'));
  const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/casts/index.json'), 'utf8'));
  const avatars = new Set(index.casts.flatMap((f) => Object.values(JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/casts', f), 'utf8')).people).map((p) => `exam-room/avatars/${p.avatar}.glb`)));
  const core = ['exam-room/casts/index.json', ...index.casts.map((f) => `exam-room/casts/${f}`), 'exam-room/vendor/VERSIONS.json', ...Object.keys(v.files).map((f) => `exam-room/vendor/${f}`)];
  for (const f of core) assert.ok(listed.includes(f), `allowlist: ${f}`);
  for (const f of listed) assert.ok(core.includes(f) || avatars.has(f) || /^exam-room\/avatars\/LICENSES\.md$/.test(f), `unexpected public room file ${f}`);
  if (ROOM_PRODUCTION) for (const a of avatars) assert.ok(listed.includes(a), `production room needs ${a} published`);
  assert.equal(allow.some((l) => /^GLOB:.*exam-room|^exam-room\/?$/.test(l)), false);
});
