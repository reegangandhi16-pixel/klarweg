/* OD-14 pilot tooling: SSML from the recording plan with an owner cast, synthesis gates (licence reference, credentials,
   output outside the repo), manifest evidence; and the formal MOS review package and scoring. Network is stubbed;
   the WAV bytes and ratings here are test fixtures, never review evidence. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from '../tools/practice-forms.mjs';
import { planForm } from '../tools/audio-plan.mjs';
import { rolesOf, checkCast, ssmlFor, runPilot, wavDurationMs } from '../tools/audio-pilot.mjs';
import { buildPackage, score } from '../tools/audio-review.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const P3 = PRACTICE_FORMS.find((f) => f.name === 'P3');
const plan = planForm(P3);
const VOICES = ['de-DE-KatjaNeural', 'de-DE-ConradNeural', 'de-DE-AmalaNeural', 'de-DE-BerndNeural', 'de-DE-ChristophNeural', 'de-DE-ElkeNeural', 'de-DE-KasperNeural',
  'de-DE-KillianNeural', 'de-DE-KlarissaNeural', 'de-DE-KlausNeural', 'de-DE-LouisaNeural', 'de-DE-MajaNeural', 'de-AT-IngridNeural', 'de-AT-JonasNeural', 'de-CH-LeniNeural', 'de-CH-JanNeural'];
const cast = { voices: Object.fromEntries(rolesOf(plan).map((r, i) => [r, VOICES[i % VOICES.length]])) };   // a TEST cast, not a chosen cast
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'kx-pilot-'));
function silentWav(ms) {   // 48 kHz 16-bit mono silence (test fixture)
  const n = Math.round(48000 * ms / 1000) * 2, b = Buffer.alloc(44 + n);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
  b.writeUInt32LE(48000, 24); b.writeUInt32LE(96000, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n, 40);
  return b;
}

test('PILOT: P3 has 16 roles; the cast check needs every role, German voices, and distinct voices within a dialogue', () => {
  assert.equal(rolesOf(plan).length, 16);
  assert.deepEqual(checkCast(plan, cast), []);
  const missing = { voices: { ...cast.voices } }; delete missing.voices.Elif;
  assert.match(checkCast(plan, missing).join(), /no voice for role "Elif"/);
  assert.match(checkCast(plan, { voices: { ...cast.voices, Sebastian: 'en-US-JennyNeural' } }).join(), /not a German/);
  assert.match(checkCast(plan, { voices: { ...cast.voices, Elif: cast.voices.Sebastian } }).join(), /Hören 3: two speakers share a voice/);
});

test('PILOT: SSML speaks only the lines (no stage directions), one <voice> per line, XML-escaped', () => {
  const h1 = ssmlFor(plan, 'ast:p3-h1-t2', cast);
  assert.equal(/Wetterbericht:/.test(h1), false, 'stage direction is not spoken');
  assert.match(h1, /^<speak version="1.0" xmlns="http:\/\/www.w3.org\/2001\/10\/synthesis" xml:lang="de-DE"><voice name="de-/);
  const h3 = ssmlFor(plan, 'ast:p3-h3', cast);
  assert.equal((h3.match(/<voice /g) || []).length, plan.segments.filter((s) => s.asset_id === 'ast:p3-h3').length);
  const odd = { segments: [{ asset_id: 'x', speaker: 'A', text: 'a < b & "c"' }] };
  assert.match(ssmlFor(odd, 'x', { voices: { A: 'de-DE-KatjaNeural' } }), /a &lt; b &amp; &quot;c&quot;/);
});

test('PILOT: synthesis is gated (licence reference, credentials, output outside the repo); dry run makes no call', async () => {
  let calls = 0; const fetchImpl = async () => { calls++; throw new Error('no network in tests'); };
  await assert.rejects(runPilot({ form: 'p3', cast, out: path.join(REPO, 'pilot-out'), fetchImpl }), /inside the repository/);
  assert.equal(fs.existsSync(path.join(REPO, 'pilot-out')), false);
  await assert.rejects(runPilot({ form: 'p3', cast, out: tmp(), dryRun: false, env: { AZURE_SPEECH_KEY: 'k', AZURE_SPEECH_REGION: 'r' }, fetchImpl }), /licence-ref/);
  await assert.rejects(runPilot({ form: 'p3', cast, out: tmp(), dryRun: false, licenceRef: 'EX06-test', env: {}, fetchImpl }), /AZURE_SPEECH_KEY/);
  const dir = tmp();
  const m = await runPilot({ form: 'p3', cast, out: dir, dryRun: true, fetchImpl });
  assert.equal(calls, 0); assert.equal(m.clips.length, new Set(plan.segments.map((s) => s.asset_id)).size); assert.equal(m.dry_run, true);
  assert.ok(m.clips.every((c) => /^[0-9a-f]{64}$/.test(c.script_sha256) && /^[0-9a-f]{64}$/.test(c.ssml_sha256) && !c.file));
});

test('PILOT: stubbed synthesis writes WAV + manifest evidence; the key is sent only as a header and stored nowhere', async () => {
  const dir = tmp(), seen = [];
  const fetchImpl = async (url, init) => { seen.push({ url, headers: init.headers }); return { ok: true, status: 200, arrayBuffer: async () => silentWav(1500) }; };
  const m = await runPilot({ form: 'p3', cast, out: dir, dryRun: false, licenceRef: 'EX06-test', only: ['ast:p3-h1-t1', 'ast:p3-h3'], env: { AZURE_SPEECH_KEY: 'secret-test-key', AZURE_SPEECH_REGION: 'westeurope' }, fetchImpl });
  assert.equal(seen[0].url, 'https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1');
  assert.equal(seen[0].headers['X-Microsoft-OutputFormat'], 'riff-48khz-16bit-mono-pcm');
  assert.deepEqual(m.clips.map((c) => [c.asset_id, c.duration_ms, c.rate, c.bits]), [['ast:p3-h1-t1', 1500, 48000, 16], ['ast:p3-h3', 1500, 48000, 16]]);
  assert.equal(m.licence_ref, 'EX06-test');
  for (const f of fs.readdirSync(dir)) assert.equal(fs.readFileSync(path.join(dir, f)).includes('secret-test-key'), false, `${f} must not contain the key`);
  assert.throws(() => wavDurationMs(Buffer.from('not a wav')), /RIFF/);
});

test('REVIEW: blind package (codes only), a different seeded order per rater, every clip on every sheet', async () => {
  const audio = tmp();
  const fetchImpl = async () => ({ ok: true, status: 200, arrayBuffer: async () => silentWav(800) });
  const m = await runPilot({ form: 'p3', cast, out: audio, dryRun: false, licenceRef: 'EX06-test', only: ['ast:p3-h1-t1', 'ast:p3-h1-t2', 'ast:p3-h3', 'ast:p3-h4'], env: { AZURE_SPEECH_KEY: 'k', AZURE_SPEECH_REGION: 'r' }, fetchImpl });
  const out = tmp();
  assert.throws(() => buildPackage({ manifest: m, audioDir: audio, out: path.join(REPO, 'review-out') }), /inside the repository/);
  buildPackage({ manifest: m, audioDir: audio, out, raters: 10, seed: 's1' });
  assert.deepEqual(fs.readdirSync(path.join(out, 'clips')).sort(), ['C01.wav', 'C02.wav', 'C03.wav', 'C04.wav']);
  const sheets = fs.readdirSync(path.join(out, 'sheets'));
  assert.equal(sheets.length, 10);
  const orders = sheets.map((s) => fs.readFileSync(path.join(out, 'sheets', s), 'utf8'));
  for (const o of orders) { assert.equal(/Neural|azure|ast:/i.test(o), false, 'sheets are blind'); assert.equal((o.match(/,C0\d,/g) || []).length, 4); }
  assert.ok(new Set(orders).size > 1, 'orders differ between raters');
});

function returned(out, rows) {   // rows: [[rater, native, [scores per C01..]]]
  for (const [id, native, scores] of rows) fs.writeFileSync(path.join(out, 'returned', `${id}.csv`),
    ['rater_id,native_german,region,clip,naturalness_1_5,intelligible_yes_no,comment', ...scores.map((s, i) => `${id},${native},DE,C0${i + 1},${s},yes,`)].join('\n') + '\n');
}

test('REVIEW: scoring — MOS per clip and form against 4.0; incomplete, invalid or non-native sets are refused, never completed', async () => {
  const audio = tmp();
  const m = await runPilot({ form: 'p3', cast, out: audio, dryRun: false, licenceRef: 'EX06-test', only: ['ast:p3-h1-t1', 'ast:p3-h1-t2'], env: { AZURE_SPEECH_KEY: 'k', AZURE_SPEECH_REGION: 'r' },
    fetchImpl: async () => ({ ok: true, status: 200, arrayBuffer: async () => silentWav(500) }) });
  const out = tmp(); buildPackage({ manifest: m, audioDir: audio, out, raters: 10 });
  returned(out, Array.from({ length: 9 }, (_, i) => [`R${i}`, 'yes', [4, 5]]));
  let r = score({ packageDir: out });
  assert.equal(r.complete, false); assert.match(r.errors.join(), /9 raters returned sheets; 10 are required/);
  returned(out, [['R9', 'no', [4, 5]]]);
  r = score({ packageDir: out }); assert.match(r.errors.join(), /not declared a native/);
  returned(out, [['R9', 'yes', [4, 6]]]);
  r = score({ packageDir: out }); assert.match(r.errors.join(), /naturalness "6"/);
  returned(out, [['R9', 'yes', [3, 4]]]);
  r = score({ packageDir: out });
  assert.equal(r.complete, true); assert.deepEqual(r.clips.map((c) => c.mos), [3.9, 4.9]); assert.equal(r.form_mos, 4.4); assert.equal(r.passed, true);
  returned(out, Array.from({ length: 10 }, (_, i) => [`R${i}`, 'yes', [4, 3]]));
  r = score({ packageDir: out }); assert.equal(r.form_mos, 3.5); assert.equal(r.passed, false);
});
