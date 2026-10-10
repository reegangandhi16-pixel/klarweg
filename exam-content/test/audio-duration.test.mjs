/* AUDIO DURATION: real audio files are measured from their container; the declared duration must match; the Hören
   plan uses the measured value; the release builder ships exactly the validated files. Fixtures are generated in temp
   directories (tones / hand-built container structures); no binaries are committed. Real-encoder checks are opt-in:
   KW_FFMPEG=<path to ffmpeg> (and macOS afconvert/afinfo where present). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { audioDuration, AudioDurationError, DURATION_TOLERANCE_MS } from '../tools/audio-duration.mjs';
import { validateForm } from '../tools/validate.mjs';
import { buildRelease } from '../tools/build-release.mjs';
import { toneWav, hoerenPlan, loadLevelConfig } from '../tools/lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FORM = path.join(ROOT, 'forms/synthetic/b1-synthetic-s0');
const FILES = ['form.json', 'tasks.json', 'items.json', 'keys.json', 'assets.json'];
const tmp = (p) => fs.mkdtempSync(path.join(os.tmpdir(), p));
const code = (fn) => { try { fn(); } catch (e) { assert.ok(e instanceof AudioDurationError, `non-AudioDurationError: ${e}`); return e.code; } assert.fail('expected an AudioDurationError'); };
const u32le = (n) => { const b = Buffer.alloc(4); b.writeUInt32LE(n); return b; };
const u32be = (n) => { const b = Buffer.alloc(4); b.writeUInt32BE(n); return b; };

/* ---------- WAV fixtures ---------- */
function wav({ seconds, rate = 48000, bits = 24, channels = 1, format = 1, sub = 1, byteRate, extraChunk = false, dataFirst = false, truncate = 0 }) {
  const blockAlign = channels * bits / 8, dataBytes = Math.round(seconds * rate) * blockAlign;
  const ext = format === 0xfffe;
  const fmt = Buffer.alloc(8 + (ext ? 40 : 16)); fmt.write('fmt ', 0, 'latin1'); fmt.writeUInt32LE(ext ? 40 : 16, 4);
  fmt.writeUInt16LE(format, 8); fmt.writeUInt16LE(channels, 10); fmt.writeUInt32LE(rate, 12);
  fmt.writeUInt32LE(byteRate ?? rate * blockAlign, 16); fmt.writeUInt16LE(blockAlign, 20); fmt.writeUInt16LE(bits, 22);
  if (ext) { fmt.writeUInt16LE(22, 24); fmt.writeUInt16LE(sub, 32); }
  const list = extraChunk ? Buffer.concat([Buffer.from('LIST', 'latin1'), u32le(5), Buffer.from('INFOx'), Buffer.alloc(1)]) : Buffer.alloc(0);   // odd size + pad byte
  const data = Buffer.concat([Buffer.from('data', 'latin1'), u32le(dataBytes), Buffer.alloc(dataBytes - truncate)]);
  const body = Buffer.concat([Buffer.from('WAVE', 'latin1'), ...(dataFirst ? [list, data, fmt] : [fmt, list, data])]);
  return Buffer.concat([Buffer.from('RIFF', 'latin1'), u32le(body.length), body]);
}

/* ---------- MP4 fixtures ---------- */
const box = (type, ...parts) => { const body = Buffer.concat(parts); return Buffer.concat([u32be(8 + body.length), Buffer.from(type, 'latin1'), body]); };
const full = (type, version, body) => { const h = Buffer.alloc(4); h.writeUInt8(version, 0); return box(type, h, body); };
const ASC = { lc: '1188', lcSyncNoSbr: '118856e500', heImplicit: '118856e5a0', heExplicit: '2b0a' };   // AudioSpecificConfig hex
function esds(ascHex) {
  const asc = Buffer.from(ascHex, 'hex');
  const dsi = Buffer.concat([Buffer.from([0x05, asc.length]), asc]);
  const dcd = Buffer.concat([Buffer.from([0x04, 13 + dsi.length, 0x40, 0x15]), Buffer.alloc(11), dsi]);
  const es = Buffer.concat([Buffer.from([0x03, 3 + dcd.length + 3]), Buffer.from([0x00, 0x01, 0x00]), dcd, Buffer.from([0x06, 0x01, 0x02])]);
  return full('esds', 0, es);
}
function trak({ handler = 'soun', mediaScale = 48000, sampleRate = mediaScale, mediaDur = 0, elst = null, version = 0, frames = 2112, delta = 1024, stszCount, entryType = 'mp4a', asc = ASC.lc }) {
  const mdhd = version === 1 ? Buffer.alloc(28) : Buffer.alloc(20);
  if (version === 1) { mdhd.writeUInt32BE(mediaScale, 16); mdhd.writeBigUInt64BE(BigInt(mediaDur), 20); } else { mdhd.writeUInt32BE(mediaScale, 8); mdhd.writeUInt32BE(mediaDur, 12); }
  const hdlr = Buffer.alloc(20); hdlr.write(handler, 4, 'latin1');
  const entry = Buffer.alloc(28); entry.writeUInt16BE(1, 6); entry.writeUInt16BE(1, 16); entry.writeUInt16BE(16, 18); entry.writeUInt32BE((sampleRate << 16) >>> 0, 24);
  const stsd = full('stsd', 0, Buffer.concat([u32be(1), box(entryType, entry, ...(entryType === 'mp4a' ? [esds(asc)] : []))]));
  const stts = full('stts', 0, Buffer.concat([u32be(1), u32be(frames), u32be(delta)]));
  const stsz = full('stsz', 0, Buffer.concat([u32be(1), u32be(stszCount ?? frames)]));   // 1 byte per sample (fixture)
  const mdia = box('mdia', full('mdhd', version, mdhd), full('hdlr', 0, hdlr), box('minf', box('stbl', stsd, stts, stsz)));
  let edts = Buffer.alloc(0);
  if (elst) {
    const w = version === 1 ? 20 : 12;
    const rows = elst.map(([segDur, mediaTime, rate = 0x10000]) => {
      const r = Buffer.alloc(w);
      if (version === 1) { r.writeBigUInt64BE(BigInt(segDur), 0); r.writeBigInt64BE(BigInt(mediaTime), 8); r.writeInt32BE(rate, 16); }
      else { r.writeUInt32BE(segDur, 0); r.writeInt32BE(mediaTime, 4); r.writeInt32BE(rate, 8); }
      return r;
    });
    edts = box('edts', full('elst', version, Buffer.concat([u32be(elst.length), ...rows])));
  }
  return box('trak', box('tkhd', Buffer.alloc(84)), edts, mdia);
}
function smpbUdta({ priming, padding, valid, qt = false, raw }) {
  const str = raw ?? ` 00000000 ${priming.toString(16).padStart(8, '0')} ${padding.toString(16).padStart(8, '0')} ${valid.toString(16).padStart(16, '0')} 00000000`;
  const item = box('----', full('mean', 0, Buffer.from('com.apple.iTunes')), full('name', 0, Buffer.from('iTunSMPB')), box('data', u32be(1), u32be(0), Buffer.from(str, 'latin1')));
  const inner = Buffer.concat([box('hdlr', Buffer.alloc(25)), box('ilst', item)]);
  return box('udta', qt ? box('meta', inner) : full('meta', 0, inner));
}
function mp4({ movieScale = 1000, headerDur = 0, traks, udta = null, moov = true, mvhdVersion = 0, mdatBytes = 2200, mvex = false, moof = false }) {
  const ftyp = box('ftyp', Buffer.from('M4A ', 'latin1'), u32be(0), Buffer.from('M4A mp42isom', 'latin1'));
  const mvhd = mvhdVersion === 1 ? Buffer.alloc(28 + 80) : Buffer.alloc(16 + 80);
  if (mvhdVersion === 1) { mvhd.writeUInt32BE(movieScale, 16); mvhd.writeBigUInt64BE(BigInt(headerDur), 20); } else { mvhd.writeUInt32BE(movieScale, 8); mvhd.writeUInt32BE(headerDur, 12); }
  const moovBox = box('moov', full('mvhd', mvhdVersion, mvhd), ...traks, ...(udta ? [udta] : []), ...(mvex ? [box('mvex', full('trex', 0, Buffer.alloc(20)))] : []));
  return Buffer.concat([ftyp, box('free', Buffer.alloc(3)), moov ? moovBox : Buffer.alloc(0), ...(moof ? [box('moof', full('mfhd', 0, u32be(1)))] : []), box('mdat', Buffer.alloc(mdatBytes))]);
}
// a realistic AAC case: 45 s audible at 48 kHz, 2112 priming, padded to whole 1024-sample frames
const AAC = (() => { const valid = 48000 * 45, priming = 2112, frames = Math.ceil((valid + priming) / 1024); return { valid, priming, padding: frames * 1024 - valid - priming, total: frames * 1024 }; })();

/* ---------- WebM fixtures ---------- */
const ebmlSize = (n) => { if (n < 0x7f) return Buffer.from([0x80 | n]); const b = Buffer.alloc(8); b.writeBigUInt64BE(BigInt(n) | (1n << 56n)); return b; };
const el = (idHex, payload) => Buffer.concat([Buffer.from(idHex, 'hex'), ebmlSize(payload.length), payload]);
const uintEl = (idHex, n, bytes = 4) => { const b = Buffer.alloc(bytes); b.writeUIntBE(n, 0, bytes); return el(idHex, b); };
/* WebM with one Opus track whose media really spans `mediaMs` (20 ms CELT packets, TOC 0xF8), plus an Info Duration
   (`durationMs`, default = media end) to test metadata consistency. */
function webm({ mediaMs = 1000, durationMs, scaleNs = 1_000_000, float32 = false, withDuration = true, docType = 'webm', codec = 'A_OPUS',
  tracks = [{ type: 2, codecDelay: 0 }], discardMs = 0, laced = false, seekHeadFirst = false, tracksFirst = false, unknownCluster = false, unknownSegmentSize = false }) {
  const header = el('1a45dfa3', el('4282', Buffer.from(docType)));
  const end = Math.ceil(mediaMs / 20) * 20;
  const dTicks = (durationMs ?? end) * 1e6 / scaleNs;
  const dur = Buffer.alloc(float32 ? 4 : 8); float32 ? dur.writeFloatBE(dTicks) : dur.writeDoubleBE(dTicks);
  const info = el('1549a966', Buffer.concat([uintEl('2ad7b1', scaleNs), ...(withDuration ? [el('4489', dur)] : [])]));
  const tracksEl = el('1654ae6b', Buffer.concat(tracks.map((t, i) => el('ae', Buffer.concat([uintEl('d7', i + 1, 1), uintEl('83', t.type, 1),
    el('86', Buffer.from(t.codec ?? (t.type === 2 ? codec : 'V_VP9'))), ...(t.codecDelay ? [uintEl('56aa', t.codecDelay, 4)] : [])])))));
  const seek = el('114d9b74', el('4dbb', Buffer.alloc(2)));
  const block = (relTicks, last) => {
    const b = Buffer.concat([Buffer.from([0x81]), Buffer.alloc(2), Buffer.from([laced ? 0x82 : 0x80, 0xf8, 0x00])]); b.writeInt16BE(relTicks, 1);
    return last && discardMs ? el('a0', Buffer.concat([el('a1', b), el('75a2', (() => { const d = Buffer.alloc(4); d.writeInt32BE(discardMs * 1e6); return d; })())])) : el('a3', b);
  };
  const clusters = [];
  const perCluster = 30_000;   // ms per cluster (relative timecodes are int16)
  for (let c0 = 0; c0 < end; c0 += perCluster) {
    const blocks = [];
    for (let t = c0; t < Math.min(end, c0 + perCluster); t += 20) blocks.push(block(Math.round((t - c0) * 1e6 / scaleNs), t + 20 >= end));
    const payload = Buffer.concat([uintEl('e7', Math.round(c0 * 1e6 / scaleNs), 4), ...blocks]);
    clusters.push(unknownCluster ? Buffer.concat([Buffer.from('1f43b675', 'hex'), Buffer.from('01ffffffffffffff', 'hex'), payload]) : el('1f43b675', payload));
  }
  const payload = Buffer.concat([...(seekHeadFirst ? [seek] : []), ...(tracksFirst ? [tracksEl, info] : [info, tracksEl]), ...clusters]);
  const seg = unknownSegmentSize ? Buffer.concat([Buffer.from('18538067', 'hex'), Buffer.from('01ffffffffffffff', 'hex'), payload]) : el('18538067', payload);
  return Buffer.concat([header, seg]);
}

/* ---------- parser: WAV ---------- */
test('WAV: synthetic tones match toneWav exactly; 48 kHz/24-bit master; odd-sized extra chunk; data before fmt; extensible PCM', () => {
  for (const g of [{ seconds: 1.5, freq_hz: 440 }, { seconds: 3, freq_hz: 520 }, { seconds: 0.4, freq_hz: 330 }]) {
    const t = toneWav(g); assert.equal(audioDuration(t.bytes).duration_ms, t.duration_ms);
  }
  assert.deepEqual(audioDuration(wav({ seconds: 37.25 })), { container: 'wav', mime: 'audio/wav', duration_ms: 37250 });
  assert.equal(audioDuration(wav({ seconds: 2, extraChunk: true })).duration_ms, 2000);
  assert.equal(audioDuration(wav({ seconds: 2, dataFirst: true })).duration_ms, 2000);
  assert.equal(audioDuration(wav({ seconds: 1, format: 0xfffe, sub: 1 })).duration_ms, 1000);
});

test('WAV: float (plain or extensible), inconsistent byte rate, truncated, chunk-less, empty and sub-millisecond data are rejected', () => {
  assert.equal(code(() => audioDuration(wav({ seconds: 1, format: 3, bits: 32 }))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(wav({ seconds: 1, format: 0xfffe, sub: 3, bits: 32 }))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(wav({ seconds: 1, byteRate: 1 }))), 'audio_corrupt');
  assert.equal(code(() => audioDuration(wav({ seconds: 1, byteRate: 0 }))), 'audio_corrupt');
  assert.equal(code(() => audioDuration(wav({ seconds: 1, truncate: 10 }))), 'audio_corrupt');
  assert.equal(code(() => audioDuration(Buffer.concat([Buffer.from('RIFF', 'latin1'), u32le(4), Buffer.from('WAVE', 'latin1')]))), 'audio_corrupt');
  assert.equal(code(() => audioDuration(wav({ seconds: 0 }))), 'audio_no_duration');
  assert.equal(code(() => audioDuration(wav({ seconds: 1 / 48000 }))), 'audio_no_duration');   // one sample rounds to 0 ms
});

/* ---------- parser: MP4 ---------- */
test('MP4: exact length from the edit list (v0 and v1, movie ≠ media timescale, empty edits) or iTunSMPB (ISO and QuickTime meta)', () => {
  const header = Math.round(AAC.total / 48);   // inflated header, ms
  const a = (o) => audioDuration(mp4(o)).duration_ms;
  assert.equal(a({ headerDur: header, traks: [trak({ elst: [[45000, AAC.priming]] })] }), 45000);
  assert.equal(a({ movieScale: 600, headerDur: 27060, traks: [trak({ elst: [[27000, AAC.priming]] })] }), 45000);
  assert.equal(a({ headerDur: header, mvhdVersion: 1, traks: [trak({ version: 1, elst: [[45000, AAC.priming]] })] }), 45000);
  assert.equal(a({ headerDur: header, traks: [trak({ elst: [[1000, -1], [45000, AAC.priming]] })] }), 45000, 'empty edits are skipped');
  assert.equal(a({ headerDur: header, traks: [trak({})], udta: smpbUdta(AAC) }), 45000);
  assert.equal(a({ headerDur: header, traks: [trak({ version: 1 })], udta: smpbUdta(AAC) }), 45000);
  assert.equal(a({ headerDur: header, traks: [trak({})], udta: smpbUdta({ ...AAC, qt: true }) }), 45000, 'QuickTime-style meta');
  assert.equal(a({ headerDur: header, traks: [trak({ handler: 'text' }), trak({ elst: [[45000, AAC.priming]] })] }), 45000, 'non-sound track first');
  assert.ok(header > 45000, 'fixture sanity: the header duration is inflated');
});

test('MP4: header-only, dwell edits, timescale ≠ sample rate, video, multiple or no sound tracks, malformed iTunSMPB, missing moov are rejected', () => {
  const header = Math.round(AAC.total / 48);
  const c = (o) => code(() => audioDuration(mp4(o)));
  assert.equal(c({ headerDur: header, traks: [trak({})] }), 'audio_inexact_duration');
  assert.equal(c({ headerDur: header, traks: [trak({ elst: [[10000, 0, 0], [3000, 0]] })] }), 'audio_inexact_duration');
  assert.equal(c({ headerDur: header, traks: [trak({ mediaScale: 1000, sampleRate: 48000 })], udta: smpbUdta(AAC) }), 'audio_inexact_duration');
  assert.equal(c({ headerDur: header, traks: [trak({ handler: 'vide' }), trak({ elst: [[45000, AAC.priming]] })] }), 'audio_unsupported');
  assert.equal(c({ headerDur: header, traks: [trak({ elst: [[45000, 0]] }), trak({ elst: [[45000, 0]] })] }), 'audio_unsupported');
  assert.equal(c({ headerDur: header, traks: [trak({ handler: 'text' })] }), 'audio_no_duration');
  assert.equal(c({ headerDur: header, traks: [trak({})], udta: smpbUdta({ raw: ' 0 840 0 zzzz 0' }) }), 'audio_corrupt');
  assert.equal(c({ headerDur: 1, traks: [], moov: false }), 'audio_no_duration');
  assert.equal(c({ movieScale: 0, headerDur: 1, traks: [trak({ elst: [[1, 0]] })] }), 'audio_corrupt');
});

test('MP4: metadata cannot claim more media than the sample tables hold; inconsistent or oversized tables are rejected', () => {
  const header = Math.round(AAC.total / 48);
  const c = (o) => code(() => audioDuration(mp4(o)));
  assert.equal(c({ headerDur: header, traks: [trak({ elst: [[90000, AAC.priming]] })] }), 'audio_inexact_duration', 'edit list ×2');
  assert.equal(c({ headerDur: header, traks: [trak({})], udta: smpbUdta({ ...AAC, valid: AAC.valid * 2 }) }), 'audio_inexact_duration', 'iTunSMPB ×2');
  assert.equal(c({ headerDur: header, traks: [trak({ elst: [[45000, AAC.priming]], stszCount: 100 })] }), 'audio_corrupt', 'stts/stsz disagree');
  assert.equal(c({ headerDur: header, mdatBytes: 10, traks: [trak({ elst: [[45000, AAC.priming]] })] }), 'audio_corrupt', 'samples larger than the file');
});

test('MP4: only AAC-LC; HE-AAC (implicit or explicit), non-mp4a codecs, fragmented files and non-1.0 edit rates are rejected', () => {
  const header = Math.round(AAC.total / 48);
  const ok = (o) => audioDuration(mp4({ headerDur: header, ...o })).duration_ms;
  const c = (o) => code(() => audioDuration(mp4({ headerDur: header, ...o })));
  assert.equal(ok({ traks: [trak({ asc: ASC.lcSyncNoSbr, elst: [[45000, AAC.priming]] })] }), 45000, 'LC with an SBR extension flagged absent');
  assert.equal(c({ traks: [trak({ asc: ASC.heImplicit, elst: [[45000, AAC.priming]] })] }), 'audio_unsupported');
  assert.equal(c({ traks: [trak({ asc: ASC.heExplicit, elst: [[45000, AAC.priming]] })] }), 'audio_unsupported');
  assert.equal(c({ traks: [trak({ entryType: 'alac', elst: [[45000, AAC.priming]] })] }), 'audio_unsupported');
  assert.equal(c({ traks: [trak({ entryType: 'Opus', elst: [[45000, AAC.priming]] })] }), 'audio_unsupported');
  assert.equal(c({ mvex: true, traks: [trak({ elst: [[45000, AAC.priming]] })] }), 'audio_unsupported', 'mvex');
  assert.equal(c({ moof: true, traks: [trak({ elst: [[45000, AAC.priming]] })] }), 'audio_unsupported', 'moof');
  assert.equal(c({ traks: [trak({ elst: [[45000, AAC.priming, 0x18000]] })] }), 'audio_inexact_duration', 'rate 1.5');
});

/* ---------- parser: WebM ---------- */
test('WebM: media end from the Opus packets minus DiscardPadding and CodecDelay; float32 Duration; SeekHead/Tracks before Info; unknown-size Segment', () => {
  assert.deepEqual(audioDuration(webm({ mediaMs: 169440 })), { container: 'webm', mime: 'audio/webm;codecs=opus', duration_ms: 169440 });
  assert.equal(audioDuration(webm({ mediaMs: 31520, tracks: [{ type: 2, codecDelay: 6_500_000 }] })).duration_ms, 31514, 'Opus pre-skip removed (31513.5 rounds up)');
  assert.equal(audioDuration(webm({ mediaMs: 31520, discardMs: 12 })).duration_ms, 31508, 'end trimming (DiscardPadding) removed');
  assert.equal(audioDuration(webm({ mediaMs: 2000, float32: true })).duration_ms, 2000);
  assert.equal(audioDuration(webm({ mediaMs: 1240, seekHeadFirst: true, tracksFirst: true })).duration_ms, 1240);
  assert.equal(audioDuration(webm({ mediaMs: 1240, unknownSegmentSize: true })).duration_ms, 1240);
  assert.equal(audioDuration(webm({ mediaMs: 1240, durationMs: 1000 })).duration_ms, 1240, 'a short Duration does not shorten the measured media');
});

test('WebM: metadata that claims more than the packets, non-Opus, non-webm DocType, video, no audio, laced blocks, unknown-size clusters, missing Duration are rejected', () => {
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, durationMs: 2000 }))), 'audio_inexact_duration');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, codec: 'A_VORBIS' }))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, docType: 'matroska' }))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, tracks: [{ type: 1 }, { type: 2 }] }))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, tracks: [] }))), 'audio_no_duration');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, laced: true }))), 'audio_inexact_duration');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, unknownCluster: true }))), 'audio_inexact_duration');
  assert.equal(code(() => audioDuration(webm({ mediaMs: 1000, withDuration: false }))), 'audio_no_duration');
});

/* ---------- parser: robustness ---------- */
test('ROBUSTNESS: every truncation and random corruption of every fixture raises only AudioDurationError (or parses)', () => {
  const samples = [wav({ seconds: 0.05 }), mp4({ headerDur: 2000, traks: [trak({ elst: [[2000, 2112]] })] }), mp4({ headerDur: 2000, traks: [trak({})], udta: smpbUdta(AAC) }),
    webm({ mediaMs: 200, tracks: [{ type: 2, codecDelay: 6_500_000 }], seekHeadFirst: true, discardMs: 5 })];
  let rng = 12345; const rand = () => (rng = (rng * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const probe = (b) => { try { audioDuration(b); } catch (e) { assert.ok(e instanceof AudioDurationError, `${e.name}: ${e.message}`); } };
  for (const s of samples) {
    for (let n = 0; n < s.length; n++) probe(s.subarray(0, n));
    for (let i = 0; i < 400; i++) { const b = Buffer.from(s); for (let k = 0; k < 4; k++) b[Math.floor(rand() * b.length)] = Math.floor(rand() * 256); probe(b); }
  }
  assert.equal(code(() => audioDuration(Buffer.alloc(0))), 'audio_empty');
  assert.equal(code(() => audioDuration(Buffer.from('OggS\0\x02 not supported', 'latin1'))), 'audio_unsupported');
  assert.equal(code(() => audioDuration(Buffer.from('ID3\x04 mp3 not supported', 'latin1'))), 'audio_unsupported');
});

/* ---------- validator ---------- */
function formWithFile(assetId, { bytes, file = 'audio/clip.wav', declared, both = false, mutate } = {}) {
  const dir = tmp('kw-audio-form-');
  const d = Object.fromEntries(FILES.map((f) => [f.replace('.json', ''), JSON.parse(fs.readFileSync(path.join(FORM, f), 'utf8'))]));
  const a = d.assets.find((x) => x.id === assetId);
  const tone = toneWav(a.audio.generator);
  a.audio = { ...(both ? { generator: a.audio.generator } : {}), file, plays: null, ...(declared === undefined ? { duration_ms: tone.duration_ms } : declared === null ? {} : { duration_ms: declared }) };
  if (mutate) mutate(d, dir);
  for (const f of FILES) fs.writeFileSync(path.join(dir, f), JSON.stringify(d[f.replace('.json', '')]));
  if (bytes !== false) { const p = path.join(dir, file); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, bytes ?? tone.bytes); }
  return { dir, tone };
}
const codes = (dir) => validateForm(dir).errors.map((e) => e.code);
const ASSET = 'ast:syn-h2';   // Teil 2 stimulus, played once
const TONE_MS = toneWav({ seconds: 3, freq_hz: 520 }).duration_ms;

test('VALIDATOR: a real audio file with a correct declared duration passes, is reported in measured_audio, and gives the same plan as the tone', () => {
  const base = validateForm(FORM);
  const { dir, tone } = formWithFile(ASSET);
  const v = validateForm(dir);
  assert.deepEqual(v.errors, []);
  assert.equal(v.stats.hoeren_plan_seconds, base.stats.hoeren_plan_seconds);
  assert.deepEqual(v.measured_audio[ASSET], { file: 'audio/clip.wav', container: 'wav', mime: 'audio/wav', duration_ms: tone.duration_ms, bytes: tone.bytes.length, sha256: crypto.createHash('sha256').update(tone.bytes).digest('hex') });
});

test('VALIDATOR: declaration within ±50 ms passes; beyond is audio_duration_mismatch; missing is audio_duration_missing', () => {
  assert.deepEqual(codes(formWithFile(ASSET, { declared: TONE_MS + DURATION_TOLERANCE_MS }).dir), []);
  assert.deepEqual(codes(formWithFile(ASSET, { declared: TONE_MS - DURATION_TOLERANCE_MS }).dir), []);
  assert.ok(codes(formWithFile(ASSET, { declared: TONE_MS + DURATION_TOLERANCE_MS + 1 }).dir).includes('audio_duration_mismatch'));
  assert.ok(codes(formWithFile(ASSET, { declared: TONE_MS - DURATION_TOLERANCE_MS - 1 }).dir).includes('audio_duration_mismatch'));
  assert.ok(codes(formWithFile(ASSET, { declared: null }).dir).includes('audio_duration_missing'));
});

test('VALIDATOR: an optimistic declared duration cannot make the plan pass the timing gate — the measured file decides', () => {
  const real = validateForm(formWithFile(ASSET).dir).stats.hoeren_plan_seconds;
  const gateAboveReal = (d) => { d.form.timing_overrides.hoeren.total_seconds_gate = { min: real + 30, max: 900 }; };
  const c = codes(formWithFile(ASSET, { declared: TONE_MS + 60_000, mutate: gateAboveReal }).dir);
  assert.ok(c.includes('audio_duration_mismatch'), JSON.stringify(c));
  assert.ok(c.includes('timing_total'), 'the plan is built from the measured duration, so it still fails the gate');
});

test('VALIDATOR: missing file / path escape / absolute path / symlinked file or directory outside / invalid audio are reported once, without a derived timing error', () => {
  const only = (dir, want) => { const c = codes(dir); assert.ok(c.includes(want), JSON.stringify(c)); assert.ok(!c.includes('timing'), `no derived timing error: ${JSON.stringify(c)}`); };
  only(formWithFile(ASSET, { bytes: false }).dir, 'audio_file_missing');
  only(formWithFile(ASSET, { file: '../outside.wav', bytes: false }).dir, 'audio_path');
  only(formWithFile(ASSET, { file: '/etc/hosts', bytes: false }).dir, 'audio_path');
  const outDir = tmp('kw-outside-'); fs.writeFileSync(path.join(outDir, 'clip.wav'), toneWav({ seconds: 3, freq_hz: 520 }).bytes);
  only(formWithFile(ASSET, { bytes: false, mutate: (d, dir) => { fs.mkdirSync(path.join(dir, 'audio')); fs.symlinkSync(path.join(outDir, 'clip.wav'), path.join(dir, 'audio/clip.wav')); } }).dir, 'audio_path');
  only(formWithFile(ASSET, { bytes: false, mutate: (d, dir) => { fs.symlinkSync(outDir, path.join(dir, 'audio')); } }).dir, 'audio_path');
  only(formWithFile(ASSET, { bytes: Buffer.from('not audio at all') }).dir, 'audio_unsupported');
  only(formWithFile(ASSET, { bytes: wav({ seconds: 3, truncate: 99 }) }).dir, 'audio_corrupt');
});

test('VALIDATOR: a FIFO (named pipe) in place of the audio file is rejected without blocking', { skip: process.platform === 'win32' }, () => {
  const { dir } = formWithFile(ASSET, { bytes: false, mutate: (d, dir) => { fs.mkdirSync(path.join(dir, 'audio')); execFileSync('mkfifo', [path.join(dir, 'audio/clip.wav')]); } });
  assert.ok(codes(dir).includes('audio_file_missing'));
});

test('VALIDATOR: a symlinked form directory works; generator + file is an audio_source error; WAV in a non-synthetic form is audio_format', () => {
  const { dir } = formWithFile(ASSET);
  const link = path.join(tmp('kw-link-'), 'form'); fs.symlinkSync(dir, link);
  assert.deepEqual(codes(link), []);
  assert.ok(codes(formWithFile(ASSET, { both: true }).dir).includes('audio_source'));
  assert.ok(codes(formWithFile(ASSET, { mutate: (d) => { d.form.kind = 'mock'; delete d.form.timing_overrides; } }).dir).includes('audio_format'));
});

test('VALIDATOR: MP4 and WebM files are accepted when their declared duration matches', () => {
  assert.deepEqual(codes(formWithFile(ASSET, { file: 'audio/clip.m4a', bytes: mp4({ headerDur: TONE_MS + 64, traks: [trak({ elst: [[TONE_MS, 2112]] })] }) }).dir), []);
  assert.deepEqual(codes(formWithFile(ASSET, { file: 'audio/clip.webm', bytes: webm({ mediaMs: TONE_MS, tracks: [{ type: 2, codecDelay: 6_500_000 }] }) }).dir), []);   // measured 2994 ms vs declared 3000 ms
});

/* ---------- timing gate boundaries ---------- */
test('TIMING GATE: inclusive boundaries (min and max exactly at the plan total pass; 1 ms beyond fails)', () => {
  const lc = loadLevelConfig(path.join(ROOT, 'levels'), 'lc:b1@1');
  const read = (f) => JSON.parse(fs.readFileSync(path.join(FORM, f), 'utf8'));
  const form = read('form.json'), tasks = read('tasks.json'), items = read('items.json'), assets = read('assets.json');
  const durations = Object.fromEntries(assets.filter((a) => a.kind === 'audio').map((a) => [a.id, toneWav(a.audio.generator).duration_ms]));
  const T = hoerenPlan(lc, form, Object.fromEntries(tasks.map((t) => [t.id, t])), Object.fromEntries(items.map((i) => [i.id, i])), durations).total_ms;
  const withGate = (min, max) => formWithFile(ASSET, { mutate: (d) => { d.form.timing_overrides.hoeren.total_seconds_gate = { min, max }; } }).dir;
  assert.ok(!codes(withGate(T / 1000, 900)).includes('timing_total'));
  assert.ok(codes(withGate((T + 1) / 1000, 900)).includes('timing_total'));
  assert.ok(!codes(withGate(0, T / 1000)).includes('timing_total'));
  assert.ok(codes(withGate(0, (T - 1) / 1000)).includes('timing_total'));
});

test('TIMING GATE: with the published lc:b1@1 values (no overrides), a plan below 2160 s is a timing_total error', () => {
  const dir = formWithFile(ASSET, { file: 'audio/clip.m4a', bytes: mp4({ headerDur: TONE_MS, traks: [trak({ elst: [[TONE_MS, 2112]] })] }), mutate: (d) => { d.form.kind = 'mock'; delete d.form.timing_overrides; } }).dir;
  const t = validateForm(dir).errors.find((e) => e.code === 'timing_total');
  assert.ok(t, 'expected timing_total'); assert.match(t.msg, /outside 2160–2520 s/);
});

/* ---------- release builder ---------- */
test('BUILD: real audio is shipped as validated, with its MEASURED duration (not the declaration); synthetic tones unchanged', () => {
  const { dir, tone } = formWithFile(ASSET, { declared: TONE_MS + 40 });   // within tolerance, but not exact
  const b = buildRelease({ release: 'r000', formDirs: [dir], builtAt: '2026-10-04T00:00:00.000Z' });
  const meta = b.manifest.assets[ASSET];
  assert.equal(meta.duration_ms, tone.duration_ms); assert.equal(meta.test_audio, false); assert.equal(meta.mime, 'audio/wav');
  assert.ok(meta.key.endsWith('.wav')); assert.deepEqual(b.files.get(meta.key), tone.bytes);
  assert.equal(b.manifest.assets['ast:syn-h1-ex'].test_audio, true);
  const m4a = formWithFile(ASSET, { file: 'audio/clip.m4a', bytes: mp4({ headerDur: TONE_MS + 64, traks: [trak({ elst: [[TONE_MS, 2112]] })] }) });
  const b2 = buildRelease({ release: 'r000', formDirs: [m4a.dir], builtAt: '2026-10-04T00:00:00.000Z' });
  assert.ok(b2.manifest.assets[ASSET].key.endsWith('.m4a')); assert.equal(b2.manifest.assets[ASSET].mime, 'audio/mp4'); assert.equal(b2.manifest.assets[ASSET].duration_ms, TONE_MS);
  const hoeren = JSON.parse([...b2.files.entries()].find(([k]) => /module-hoeren/.test(k))[1].toString('utf8'));
  assert.equal(hoeren.timing.plan.phases.find((p) => p.asset_id === ASSET).ms, TONE_MS, 'the packaged plan uses the measured duration');
});

test('BUILD: a declared/actual duration mismatch blocks the release build', () => {
  const { dir } = formWithFile(ASSET, { declared: 60_000 });
  assert.throws(() => buildRelease({ release: 'r000', formDirs: [dir], builtAt: '2026-10-04T00:00:00.000Z' }), /audio_duration_mismatch/);
});

/* ---------- real encoders (opt-in) ---------- */
const FFMPEG = process.env.KW_FFMPEG;
test('REAL ENCODERS (opt-in, KW_FFMPEG): WAV, ffmpeg AAC-LC/M4A and Opus/WebM match the source length; tampered metadata, other codecs, fragmented MP4 and piped WebM are rejected', { skip: !FFMPEG && 'set KW_FFMPEG=<path to ffmpeg> to run' }, () => {
  const dir = tmp('kw-ff-');
  const gen = (seconds, args, out) => { const f = path.join(dir, out); execFileSync(FFMPEG, ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'lavfi', '-i', `sine=frequency=440:sample_rate=48000:duration=${seconds}`, ...args, f]); return f; };
  const decodedMs = (f) => execFileSync(FFMPEG, ['-v', 'error', '-i', f, '-f', 's32le', '-ac', '1', '-ar', '48000', '-'], { maxBuffer: 1 << 28 }).length / 4 / 48;
  const cases = [
    gen(37.25, ['-c:a', 'pcm_s24le', '-ac', '1'], 'master.wav'),
    gen(45.05, ['-c:a', 'aac', '-b:a', '96k', '-ac', '1'], 'aac.m4a'),
    gen(2.345, ['-c:a', 'aac', '-b:a', '96k', '-ac', '1'], 'aac-short.m4a'),
    gen(31.5, ['-c:a', 'libopus', '-b:a', '64k', '-ac', '1'], 'opus.webm'),
    gen(7.777, ['-c:a', 'libopus', '-b:a', '64k', '-ac', '1'], 'opus-short.webm'),
    gen(20.013, ['-c:a', 'libopus', '-b:a', '64k', '-ac', '1', '-frame_duration', '60'], 'opus-60ms.webm')];
  const source = [37250, 45050, 2345, 31500, 7777, 20013];   // generated lengths (ms)
  cases.forEach((f, i) => {
    const ours = audioDuration(fs.readFileSync(f)).duration_ms;
    assert.ok(Math.abs(ours - source[i]) <= 3, `${path.basename(f)}: parser ${ours} ms vs source ${source[i]} ms`);
    // ffmpeg's decoder does not trim AAC end padding, so the decoded length may exceed the true length by up to one frame
    const dec = decodedMs(f), frame = f.endsWith('.m4a') ? 1024 / 48 : 0;
    assert.ok(dec - ours >= -3 && dec - ours <= frame + 3, `${path.basename(f)}: parser ${ours} ms vs decoded ${dec} ms`);
  });
  // codecs that are not AUDIO-SPEC B5 delivery codecs are rejected
  for (const [args, out] of [[['-c:a', 'alac', '-ac', '1'], 'alac.m4a'], [['-c:a', 'libopus', '-b:a', '64k', '-ac', '1'], 'opus.mp4'], [['-c:a', 'libvorbis', '-ac', '1'], 'vorbis.webm']]) {
    assert.equal(code(() => audioDuration(fs.readFileSync(gen(2, args, out)))), 'audio_unsupported', out);
  }
  // metadata-only tampering of real files (claiming twice the length) must be rejected
  const webmT = Buffer.from(fs.readFileSync(cases[3])); const di = webmT.indexOf(Buffer.from([0x44, 0x89, 0x88]));
  webmT.writeDoubleBE(webmT.readDoubleBE(di + 3) * 2, di + 3);
  assert.equal(code(() => audioDuration(webmT)), 'audio_inexact_duration', 'WebM Duration ×2');
  const m4aT = Buffer.from(fs.readFileSync(cases[1])); const ei = m4aT.indexOf('elst');
  if (m4aT[ei + 4] === 0) m4aT.writeUInt32BE(m4aT.readUInt32BE(ei + 12) * 2, ei + 12); else m4aT.writeBigUInt64BE(m4aT.readBigUInt64BE(ei + 12) * 2n, ei + 12);
  assert.equal(code(() => audioDuration(m4aT)), 'audio_inexact_duration', 'MP4 edit list ×2');
  const frag = gen(12.5, ['-c:a', 'aac', '-b:a', '96k', '-ac', '1', '-movflags', 'frag_keyframe+empty_moov'], 'frag.m4a');
  assert.equal(code(() => audioDuration(fs.readFileSync(frag))), 'audio_unsupported', 'fragmented MP4');
  const piped = path.join(dir, 'piped.webm');
  fs.writeFileSync(piped, execFileSync(FFMPEG, ['-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', 'sine=frequency=440:sample_rate=48000:duration=9', '-c:a', 'libopus', '-b:a', '64k', '-ac', '1', '-f', 'webm', '-'], { maxBuffer: 1 << 26 }));
  assert.equal(code(() => audioDuration(fs.readFileSync(piped))), 'audio_no_duration');
});

const hasAf = (() => { try { execFileSync('which', ['afconvert', 'afinfo'], { stdio: 'pipe' }); return true; } catch { return false; } })();
test('REAL ENCODERS (opt-in, macOS): afconvert AAC-LC/M4A (iTunSMPB) agrees with afinfo; HE-AAC is rejected', { skip: !hasAf && 'afconvert/afinfo not available' }, () => {
  const dir = tmp('kw-af-');
  const w = path.join(dir, 't.wav'); fs.writeFileSync(w, toneWav({ seconds: 4.2, freq_hz: 440 }).bytes);
  const m = path.join(dir, 't.m4a'); execFileSync('afconvert', ['-f', 'm4af', '-d', 'aac', w, m], { stdio: 'pipe' });
  const afMs = (f) => Number(/estimated duration: ([0-9.]+) sec/.exec(execFileSync('afinfo', [f], { encoding: 'utf8' }))[1]) * 1000;
  for (const f of [w, m]) { const ours = audioDuration(fs.readFileSync(f)).duration_ms; assert.ok(Math.abs(ours - afMs(f)) <= 5, `${path.basename(f)}: parser ${ours} ms vs afinfo ${afMs(f)} ms`); }
  const he = path.join(dir, 'he.m4a'); execFileSync('afconvert', ['-f', 'm4af', '-d', 'aach', w, he], { stdio: 'pipe' });
  assert.equal(code(() => audioDuration(fs.readFileSync(he))), 'audio_unsupported', 'HE-AAC');
});
