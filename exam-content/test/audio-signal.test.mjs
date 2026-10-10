/* AUDIO SIGNAL (Q11 tooling): BS.1770-4 / EBU R128 loudness and true peak on decoded PCM, the AUDIO-SPEC B5 checks,
   and the measure-audio evidence records. Fixtures are synthetic tones generated in temp directories (no binaries are
   committed, no exam audio). Real-encoder checks are opt-in: KW_FFMPEG=<path to ffmpeg> (set in CI). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { readPcmWav, measureSignal, checkSignal, kWeightingCoefficients, AudioSignalError, B5_LIMITS } from '../tools/audio-signal.mjs';
import { measureAudioFile } from '../tools/measure-audio.mjs';

const FFMPEG = process.env.KW_FFMPEG || null;
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'kw-signal-'));
const code = (fn) => { try { fn(); } catch (e) { assert.ok(e instanceof AudioSignalError, `non-AudioSignalError: ${e}`); return e.code; } assert.fail('expected an AudioSignalError'); };
const near = (a, b, tol, what) => assert.ok(Math.abs(a - b) <= tol, `${what}: ${a} not within ${tol} of ${b}`);
const dbfs = (d) => 10 ** (d / 20);

/* Sine segments: [{ seconds, dbfs (peak) | null for silence }], per channel identical. */
function tone(segments, { rate = 48000, channels = 1, freq = 997, phase = 0 } = {}) {
  const n = segments.reduce((s, g) => s + Math.round(g.seconds * rate), 0);
  const x = new Float64Array(n);
  let i = 0;
  for (const g of segments) {
    const m = Math.round(g.seconds * rate), a = g.dbfs === null ? 0 : dbfs(g.dbfs);
    for (let k = 0; k < m; k++, i++) x[i] = a * Math.sin(2 * Math.PI * freq * i / rate + phase);
  }
  return { sampleRate: rate, channels: Array.from({ length: channels }, () => x) };
}

/* Integer-PCM WAV writer (fmt + data, optional extra chunk), little-endian, clipped. */
function wavBytes({ sampleRate, channels }, { bits = 24, format = 1, extra = null } = {}) {
  const n = channels[0].length, bytes = bits / 8, blockAlign = channels.length * bytes;
  const data = Buffer.alloc(n * blockAlign);
  const max = 2 ** (bits - 1) - 1, min = -(2 ** (bits - 1));
  for (let i = 0, p = 0; i < n; i++) for (const c of channels) {
    const v = Math.max(min, Math.min(max, Math.round(c[i] * 2 ** (bits - 1))));
    if (bits === 8) data[p] = v + 128; else if (bits === 16) data.writeInt16LE(v, p); else if (bits === 24) data.writeIntLE(v, p, 3); else data.writeInt32LE(v, p);
    p += bytes;
  }
  const fmt = Buffer.alloc(24); fmt.write('fmt ', 0, 'latin1'); fmt.writeUInt32LE(16, 4); fmt.writeUInt16LE(format, 8); fmt.writeUInt16LE(channels.length, 10);
  fmt.writeUInt32LE(sampleRate, 12); fmt.writeUInt32LE(sampleRate * blockAlign, 16); fmt.writeUInt16LE(blockAlign, 20); fmt.writeUInt16LE(bits, 22);
  const head = Buffer.alloc(8); head.write('data', 0, 'latin1'); head.writeUInt32LE(data.length, 4);
  const body = Buffer.concat([Buffer.from('WAVE', 'latin1'), fmt, ...(extra ? [extra] : []), head, data]);
  const riff = Buffer.alloc(8); riff.write('RIFF', 0, 'latin1'); riff.writeUInt32LE(body.length, 4);
  return Buffer.concat([riff, body]);
}

/* ---------- K-weighting and loudness ---------- */
test('SIGNAL: K-weighting coefficients at 48 kHz equal the BS.1770-4 Annex 1 table', () => {
  const { shelf, highpass } = kWeightingCoefficients(48000);
  const table = { shelf: { b: [1.53512485958697, -2.69169618940638, 1.19839281085285], a: [1, -1.69065929318241, 0.73248077421585] }, highpass: { b: [1, -2, 1], a: [1, -1.99004745483398, 0.99007225036621] } };
  for (const [f, ref] of [[shelf, table.shelf], [highpass, table.highpass]]) for (const k of ['b', 'a']) ref[k].forEach((v, i) => near(f[k][i], v, 1e-10, `${k}${i}`));
});

test('SIGNAL: a 997 Hz sine at -23 dBFS reads -23.0 LUFS in stereo (EBU Tech 3341 case 1) and -26.0 LUFS in mono', () => {
  near(measureSignal(tone([{ seconds: 5, dbfs: -23 }], { channels: 2 })).integrated_lufs, -23.0, 0.05, 'stereo');
  near(measureSignal(tone([{ seconds: 5, dbfs: -23 }])).integrated_lufs, -26.01, 0.05, 'mono');
  near(measureSignal(tone([{ seconds: 5, dbfs: -23 }], { rate: 44100 })).integrated_lufs, -26.01, 0.05, 'mono 44.1 kHz');
  near(measureSignal(tone([{ seconds: 5, dbfs: -33 }], { channels: 2 })).integrated_lufs, -33.0, 0.05, 'stereo -33 (Tech 3341 case 2)');
});

test('SIGNAL: gating — the relative gate removes quiet passages (EBU Tech 3341 case 3) and the absolute gate removes silence', () => {
  const quietLoudQuiet = measureSignal(tone([{ seconds: 10, dbfs: -36 }, { seconds: 60, dbfs: -23 }, { seconds: 10, dbfs: -36 }], { channels: 2 }));
  near(quietLoudQuiet.integrated_lufs, -23.0, 0.1, 'quiet-loud-quiet');
  // Blocks entirely in digital silence fall below the -70 LUFS absolute gate and are dropped. Blocks that straddle an
  // edge are partly filled and stay (as BS.1770 specifies), so the tone is long enough for them to matter < 0.1 LU.
  const alone = measureSignal(tone([{ seconds: 20, dbfs: -20 }])).integrated_lufs;
  const pm = measureSignal(tone([{ seconds: 5, dbfs: null }, { seconds: 20, dbfs: -20 }, { seconds: 5, dbfs: null }]));
  near(pm.integrated_lufs, alone, 0.1, 'silence padding');
  assert.ok(pm.gated_blocks <= pm.gating_blocks - 2 * 46, `silent blocks gated out (${pm.gated_blocks} of ${pm.gating_blocks})`);
  const m = measureSignal(tone([{ seconds: 1, dbfs: -20 }]));
  assert.equal(m.gating_blocks, 7);   // (1000 - 400) / 100 + 1 complete blocks
});

test('SIGNAL: under 400 ms or silent → no loudness value; the check is not_measured, never a pass', () => {
  const short = measureSignal(tone([{ seconds: 0.399, dbfs: -20 }]));
  assert.equal(short.integrated_lufs, null); assert.equal(short.gating_blocks, 0);
  const sc = checkSignal(short, { role: 'delivery' });
  assert.equal(sc.checks.loudness.status, 'not_measured'); assert.equal(sc.ok, false, 'an unmeasured specified check is not ok');
  const silent = measureSignal(tone([{ seconds: 2, dbfs: null }]));
  assert.equal(silent.integrated_lufs, null); assert.equal(silent.true_peak_dbtp, null);
  const c = checkSignal(silent, { role: 'delivery' });
  assert.equal(c.checks.loudness.status, 'not_measured'); assert.equal(c.checks.true_peak.status, 'not_measured'); assert.equal(c.ok, false);
});

/* ---------- true peak ---------- */
test('SIGNAL: true peak finds inter-sample peaks (fs/4 sine at 45°: samples at -3.01 dBFS, true peak 0 dBTP)', () => {
  const m = measureSignal(tone([{ seconds: 1, dbfs: 0 }], { freq: 12000, phase: Math.PI / 4 }));
  near(m.sample_peak_dbfs, -3.01, 0.01, 'sample peak');
  assert.ok(m.true_peak_dbtp >= -0.05 && m.true_peak_dbtp <= 0.15, `true peak ${m.true_peak_dbtp}`);
  const plain = measureSignal(tone([{ seconds: 1, dbfs: -1 }]));
  near(plain.true_peak_dbtp, -1.0, 0.1, '997 Hz at -1 dBFS');
  assert.ok(plain.true_peak_dbtp >= plain.sample_peak_dbfs, 'true peak is never below the sample peak');
});

/* ---------- checks against AUDIO-SPEC B5 ---------- */
test('SIGNAL: B5 checks — loudness -18 ± 1 LUFS and true peak ≤ -1.0 dBTP at their exact boundaries', () => {
  const base = { channels: 1, sample_rate: 48000, gating_blocks: 10, true_peak_dbtp: -3 };
  const st = (lufs, tp = -3) => checkSignal({ ...base, integrated_lufs: lufs, true_peak_dbtp: tp }, { role: 'delivery' }).checks;
  for (const v of [-17, -18, -19]) assert.equal(st(v).loudness.status, 'pass', `${v}`);
  for (const v of [-16.99, -19.01, -10, -30]) assert.equal(st(v).loudness.status, 'fail', `${v}`);
  assert.equal(st(-18, -1.0).true_peak.status, 'pass');
  assert.equal(st(-18, -0.99).true_peak.status, 'fail');
  assert.deepEqual(B5_LIMITS.loudness_lufs, { target: -18, tolerance: 1 });
  assert.equal(B5_LIMITS.true_peak_max_dbtp, -1.0);
});

test('SIGNAL: B5 checks — mono required; master 48 kHz / 24-bit; delivery sample rate only reported; unspecified methods not measured', () => {
  const m = { integrated_lufs: -18, true_peak_dbtp: -3, gating_blocks: 10, channels: 1, sample_rate: 48000 };
  const ok = checkSignal(m, { role: 'master', bits: 24 });
  assert.equal(ok.ok, true);
  assert.equal(checkSignal({ ...m, channels: 2 }, { role: 'delivery' }).checks.channels.status, 'fail');
  assert.equal(checkSignal({ ...m, sample_rate: 44100 }, { role: 'master', bits: 24 }).checks.sample_rate.status, 'fail');
  assert.equal(checkSignal(m, { role: 'master', bits: 16 }).checks.bit_depth.status, 'fail');
  const d = checkSignal({ ...m, sample_rate: 44100 }, { role: 'delivery' });
  assert.equal(d.checks.sample_rate.status, 'reported'); assert.equal(d.ok, true);
  for (const k of ['noise_floor', 'leading_trailing_silence']) assert.equal(d.checks[k].status, 'not_measured');
  assert.equal(code(() => checkSignal(m, { role: 'stimulus' })), 'signal_corrupt');
});

/* ---------- PCM reader and input validation ---------- */
test('SIGNAL: readPcmWav decodes 8/16/24/32-bit PCM and de-interleaves stereo', () => {
  const sig = { sampleRate: 48000, channels: [Float64Array.from([0, 0.5, -0.5, 0.25]), Float64Array.from([0.125, -0.25, 0.75, -1])] };
  for (const bits of [8, 16, 24, 32]) {
    const r = readPcmWav(wavBytes(sig, { bits }));
    assert.equal(r.bits, bits); assert.equal(r.sampleRate, 48000); assert.equal(r.channels.length, 2);
    const tol = 2 / 2 ** (bits - 1);
    sig.channels.forEach((c, ci) => c.forEach((v, i) => near(r.channels[ci][i], v, tol, `${bits}-bit ch${ci}[${i}]`)));
  }
  const withList = Buffer.concat([Buffer.from('LIST', 'latin1'), Buffer.from([3, 0, 0, 0]), Buffer.from('abc'), Buffer.alloc(1)]);   // odd chunk + pad byte
  assert.equal(readPcmWav(wavBytes(sig, { extra: withList })).channels[0].length, 4);
});

test('SIGNAL: malformed or unsupported input is rejected with a stable code, never measured', () => {
  const good = wavBytes(tone([{ seconds: 0.01, dbfs: -20 }]));
  assert.equal(code(() => readPcmWav(Buffer.from('not audio at all'))), 'signal_unsupported');
  assert.equal(code(() => readPcmWav(wavBytes(tone([{ seconds: 0.01, dbfs: -20 }]), { format: 3 }))), 'signal_unsupported');   // float
  assert.equal(code(() => readPcmWav(good.subarray(0, good.length - 7))), 'signal_corrupt');                                     // truncated data chunk
  const noData = Buffer.from(good.subarray(0, 36)); noData.writeUInt32LE(28, 4);
  assert.equal(code(() => readPcmWav(noData)), 'signal_corrupt');
  const badAlign = Buffer.from(good); badAlign.writeUInt16LE(5, 32);
  assert.equal(code(() => readPcmWav(badAlign)), 'signal_corrupt');
  const partial = Buffer.from(good); partial.writeUInt32LE(partial.readUInt32LE(40) - 1, 40);                                     // data size not whole frames
  assert.equal(code(() => readPcmWav(partial)), 'signal_corrupt');
  const s = tone([{ seconds: 0.5, dbfs: -20 }]);
  assert.equal(code(() => measureSignal({ sampleRate: 48000, channels: [s.channels[0], s.channels[0], s.channels[0]] })), 'signal_unsupported');
  assert.equal(code(() => measureSignal({ sampleRate: 48000, channels: [s.channels[0], s.channels[0].subarray(1)] })), 'signal_corrupt');
  assert.equal(code(() => measureSignal({ sampleRate: 48000, channels: [Float64Array.from([0, NaN])] })), 'signal_corrupt');
  assert.equal(code(() => measureSignal({ sampleRate: 0, channels: [s.channels[0]] })), 'signal_corrupt');
  assert.equal(code(() => measureSignal({ sampleRate: 48000, channels: [] })), 'signal_corrupt');
});

/* ---------- measure-audio evidence records ---------- */
const MASTER_AMP = -15.0;   // mono 997 Hz: -15 dBFS peak ≈ -18.0 LUFS
function writeTmp(dir, name, bytes) { const f = path.join(dir, name); fs.writeFileSync(f, bytes); return f; }

test('MEASURE: a 48 kHz / 24-bit mono WAV master at -18 LUFS passes; the record carries hash, duration, method and tool versions', () => {
  const dir = tmp();
  const bytes = wavBytes(tone([{ seconds: 3, dbfs: MASTER_AMP }]));
  const r = measureAudioFile(writeTmp(dir, 'master.wav', bytes));
  assert.equal(r.ok, true, JSON.stringify(r.checks));
  assert.equal(r.sha256, crypto.createHash('sha256').update(bytes).digest('hex'));
  assert.equal(r.checks.noise_floor.status, 'not_measured');   // reported, not counted as a pass
  const tiny = measureAudioFile(writeTmp(dir, 'tiny.wav', wavBytes(tone([{ seconds: 0.3, dbfs: MASTER_AMP }]))));
  assert.equal(tiny.checks.loudness.status, 'not_measured'); assert.equal(tiny.ok, false);
  assert.equal(r.container, 'wav'); assert.equal(r.role, 'master'); assert.equal(r.duration_ms, 3000); assert.equal(r.signal.duration_ms, 3000);
  near(r.signal.integrated_lufs, -18.0, 0.1, 'loudness');
  assert.match(r.signal.method.standard, /BS\.1770-4/); assert.ok(r.tool && r.node && r.measured_at);
});

test('MEASURE: stereo, 44.1 kHz or 16-bit masters, and off-target loudness fail the matching check only', () => {
  const dir = tmp();
  const st = (name, sig, opts) => measureAudioFile(writeTmp(dir, name, wavBytes(sig, opts)));
  const stereo = st('s.wav', tone([{ seconds: 2, dbfs: MASTER_AMP }], { channels: 2 }));
  assert.equal(stereo.checks.channels.status, 'fail'); assert.equal(stereo.ok, false);
  assert.equal(st('r.wav', tone([{ seconds: 2, dbfs: MASTER_AMP }], { rate: 44100 })).checks.sample_rate.status, 'fail');
  assert.equal(st('b.wav', tone([{ seconds: 2, dbfs: MASTER_AMP }]), { bits: 16 }).checks.bit_depth.status, 'fail');
  const loud = st('l.wav', tone([{ seconds: 2, dbfs: -6 }]));   // ≈ -9 LUFS, true peak -6 dBTP
  assert.equal(loud.checks.loudness.status, 'fail'); assert.equal(loud.checks.true_peak.status, 'pass');
  const hot = st('h.wav', tone([{ seconds: 2, dbfs: -0.5 }]));
  assert.equal(hot.checks.true_peak.status, 'fail');
});

test('MEASURE: a declared loudness in the file metadata is ignored; only the samples count', () => {
  const dir = tmp();
  const tag = Buffer.from('ISFT loudness=-18.0 LUFS true_peak=-3 dBTP', 'latin1');
  const list = Buffer.concat([Buffer.from('LIST', 'latin1'), Buffer.from([tag.length + 4, 0, 0, 0]), Buffer.from('INFO', 'latin1'), tag]);
  const r = measureAudioFile(writeTmp(dir, 'tagged.wav', wavBytes(tone([{ seconds: 2, dbfs: -30 }]), { extra: list })));
  assert.equal(r.checks.loudness.status, 'fail');
  assert.ok(r.signal.integrated_lufs < -30);
});

test('MEASURE: unreadable, corrupt and compressed-without-decoder files are never reported as passing', () => {
  const dir = tmp();
  assert.equal(measureAudioFile(path.join(dir, 'missing.wav')).error.code, 'file');
  assert.equal(measureAudioFile(writeTmp(dir, 'x.wav', Buffer.from('RIFF\0\0\0\0WAVEjunk'))).error.code, 'audio_corrupt');
  const fakeMp4 = writeTmp(dir, 'x.m4a', Buffer.concat([Buffer.from([0, 0, 0, 16]), Buffer.from('ftypM4A \0\0\0\0', 'latin1')]));
  const r = measureAudioFile(fakeMp4);
  assert.ok(r.error || r.ok === false);
});

/* ---------- real encoders (opt-in) ---------- */
/* ffmpeg's own EBU R128 meter (0.1 LU resolution), used only as an independent reference. */
function ffmpegSummary(file) {
  const r = spawnSync(FFMPEG, ['-nostdin', '-hide_banner', '-i', file, '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(r.stderr);
  const summary = r.stderr.slice(r.stderr.lastIndexOf('Summary:'));
  return { I: Number(/I:\s+(-?[\d.]+) LUFS/.exec(summary)[1]), TP: Number(/Peak:\s+(-?[\d.]+) dBFS/.exec(summary)[1]) };
}

test('MEASURE (KW_FFMPEG): Opus/WebM and AAC-LC/MP4 are decoded and measured; values agree with ffmpeg ebur128', { skip: !FFMPEG && 'set KW_FFMPEG to run' }, () => {
  const dir = tmp();
  const master = writeTmp(dir, 'm.wav', wavBytes(tone([{ seconds: 1, dbfs: null }, { seconds: 6, dbfs: MASTER_AMP }, { seconds: 1, dbfs: null }])));
  const enc = (out, args) => { execFileSync(FFMPEG, ['-nostdin', '-v', 'error', '-i', master, ...args, '-y', path.join(dir, out)]); return path.join(dir, out); };
  const files = { wav: master, webm: enc('d.webm', ['-c:a', 'libopus', '-b:a', '64k', '-ac', '1']), m4a: enc('d.m4a', ['-c:a', 'aac', '-b:a', '96k', '-ac', '1']) };
  for (const [kind, f] of Object.entries(files)) {
    const r = measureAudioFile(f, { ffmpeg: FFMPEG });
    assert.ok(!r.error, `${kind}: ${JSON.stringify(r.error)}`);
    assert.equal(r.signal.channels, 1, kind);
    const ref = ffmpegSummary(f);
    near(r.signal.integrated_lufs, ref.I, 0.15, `${kind} loudness vs ebur128`);
    near(r.signal.true_peak_dbtp, ref.TP, 0.3, `${kind} true peak vs ebur128`);
    near(r.signal.integrated_lufs, -18.0, 0.3, `${kind} loudness`);
    assert.equal(r.checks.loudness.status, 'pass', kind); assert.equal(r.checks.true_peak.status, 'pass', kind);
    if (kind !== 'wav') { assert.equal(r.role, 'delivery'); assert.equal(r.checks.sample_rate.status, 'reported'); assert.match(r.decoder, /ffmpeg version/); }
  }
  const stereo = measureAudioFile(enc('s.m4a', ['-c:a', 'aac', '-ac', '2']), { ffmpeg: FFMPEG });
  assert.equal(stereo.checks.channels.status, 'fail');
  const noDecoder = measureAudioFile(files.webm);
  assert.equal(noDecoder.checks.decode.status, 'not_measured'); assert.equal(noDecoder.ok, false);
});

test('MEASURE (KW_FFMPEG): the Opus header output gain is applied by the decoder, so a +6 dB header edit is measured as +6 dB', { skip: !FFMPEG && 'set KW_FFMPEG to run' }, () => {
  const dir = tmp();
  const master = writeTmp(dir, 'm.wav', wavBytes(tone([{ seconds: 4, dbfs: MASTER_AMP }])));
  const webm = path.join(dir, 'd.webm');
  execFileSync(FFMPEG, ['-nostdin', '-v', 'error', '-i', master, '-c:a', 'libopus', '-b:a', '64k', '-ac', '1', '-y', webm]);
  const bytes = fs.readFileSync(webm);
  const head = bytes.indexOf(Buffer.from('OpusHead', 'latin1'));
  assert.ok(head > 0, 'OpusHead in CodecPrivate');
  const edited = Buffer.from(bytes); edited.writeInt16LE(6 * 256, head + 16);   // output gain, Q7.8 dB
  const f2 = writeTmp(dir, 'gain.webm', edited);
  const a = measureAudioFile(webm, { ffmpeg: FFMPEG }), b = measureAudioFile(f2, { ffmpeg: FFMPEG });
  near(b.signal.integrated_lufs - a.signal.integrated_lufs, 6, 0.2, 'output gain');
  assert.equal(b.checks.loudness.status, 'fail');
  assert.notEqual(a.sha256, b.sha256);
});
