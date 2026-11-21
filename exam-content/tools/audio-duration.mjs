/* Read the playback duration of an audio file from its container, without decoding and without external tools.
   Supported containers (AUDIO-SPEC B5):
     - WAV / RIFF, integer PCM (masters; synthetic test tones): data-chunk bytes / byte rate (header cross-checked)
     - MP4 / M4A, one AAC-LC sound track (AAC delivery; HE-AAC, ALAC, Opus-in-MP4 and fragmented MP4 are rejected): the edit list, else iTunes gapless metadata (iTunSMPB). The
       movie/track header duration includes AAC encoder priming and frame padding, so a file with neither is rejected.
       The claimed length must be backed by the sample tables (stts/stsz): metadata cannot claim more media than the
       file contains.
     - WebM (Opus delivery), one Opus track: the end of the last Opus packet found by scanning the clusters (block
       timecode + packet duration from the Opus TOC), minus that block's DiscardPadding and the track's CodecDelay.
       Info › Duration must be present and must not claim more than the packets contain. Laced blocks, unknown-size
       clusters (live or pipe-written files) and non-Opus codecs are rejected.
   Anything else, and any file whose duration cannot be read exactly, throws an AudioDurationError with a stable
   `code`. Nothing here guesses a duration, and no input can raise any other error type. */

import fs from 'node:fs';
import path from 'node:path';

export class AudioDurationError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}
const fail = (code, msg) => { throw new AudioDurationError(code, msg); };

export const MIME = Object.freeze({ wav: 'audio/wav', mp4: 'audio/mp4', webm: 'audio/webm;codecs=opus' });   // EXAM-ITEM-SCHEMA §7
/* Maximum allowed difference between a declared `audio.duration_ms` and the duration read from the file. */
export const DURATION_TOLERANCE_MS = 50;
/* Largest audio file read (a 5-minute 48 kHz / 24-bit mono WAV master is about 43 MB). */
export const MAX_AUDIO_BYTES = 200 * 1024 * 1024;

export function sniffContainer(buf) {
  if (buf.length >= 12 && buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WAVE') return 'wav';
  if (buf.length >= 8 && buf.toString('latin1', 4, 8) === 'ftyp') return 'mp4';
  if (buf.length >= 4 && buf.readUInt32BE(0) === 0x1a45dfa3) return 'webm';
  return null;
}

/* Returns { container, mime, duration_ms } (duration rounded to whole milliseconds, always ≥ 1). */
export function audioDuration(buf) {
  if (!Buffer.isBuffer(buf) || buf.length === 0) fail('audio_empty', 'empty audio file');
  const container = sniffContainer(buf);
  if (!container) fail('audio_unsupported', 'unsupported audio container (expected WAV, MP4/M4A or WebM)');
  let ms;
  try { ms = container === 'wav' ? wavMs(buf) : container === 'mp4' ? mp4Ms(buf) : webmMs(buf); }
  catch (e) {
    if (e instanceof AudioDurationError) throw e;
    fail('audio_corrupt', `${container}: malformed file (${e.code || e.name})`);   // backstop: never leak RangeError etc.
  }
  const rounded = Math.round(ms);
  if (!Number.isFinite(ms) || rounded < 1) fail('audio_no_duration', `${container}: no positive duration`);
  return { container, mime: MIME[container], duration_ms: rounded };
}

/* ---------- WAV ---------- */
function wavMs(buf) {
  let off = 12, fmt = null, dataBytes = null;
  while (off + 8 <= buf.length) {
    const id = buf.toString('latin1', off, off + 4);
    const size = buf.readUInt32LE(off + 4);
    const body = off + 8;
    if (body + size > buf.length) {
      if (id === 'data') fail('audio_corrupt', 'wav: data chunk exceeds file length (truncated or streaming WAV)');
      fail('audio_corrupt', `wav: chunk ${JSON.stringify(id)} exceeds file length`);
    }
    if (id === 'fmt ') {
      if (size < 16) fail('audio_corrupt', 'wav: fmt chunk too short');
      const format = buf.readUInt16LE(body), channels = buf.readUInt16LE(body + 2), rate = buf.readUInt32LE(body + 4);
      const byteRate = buf.readUInt32LE(body + 8), blockAlign = buf.readUInt16LE(body + 12), bits = buf.readUInt16LE(body + 14);
      let pcm = format === 1;
      if (format === 0xfffe) {   // WAVE_FORMAT_EXTENSIBLE: SubFormat GUID starts with the format tag
        if (size < 40) fail('audio_corrupt', 'wav: extensible fmt chunk too short');
        pcm = buf.readUInt16LE(body + 24) === 1;
      }
      if (!pcm) fail('audio_unsupported', `wav: only integer PCM is supported (format ${format})`);
      if (!channels || !rate || !bits || bits % 8) fail('audio_corrupt', 'wav: invalid channels, sample rate or bit depth');
      if (blockAlign !== channels * bits / 8 || byteRate !== rate * blockAlign) fail('audio_corrupt', 'wav: byte rate / block align inconsistent with the sample format');
      fmt = { byteRate };
    } else if (id === 'data') {
      dataBytes = size;
    }
    off = body + size + (size % 2);   // chunks are word-aligned
  }
  if (!fmt) fail('audio_corrupt', 'wav: missing fmt chunk');
  if (dataBytes === null) fail('audio_corrupt', 'wav: missing data chunk');
  return (dataBytes / fmt.byteRate) * 1000;
}

/* ---------- MP4 / M4A ---------- */
function mp4Ms(buf) {
  const boxes = (from, to) => {
    const out = [];
    for (let off = from; off + 8 <= to; ) {
      let size = buf.readUInt32BE(off);
      const type = buf.toString('latin1', off + 4, off + 8);
      let header = 8;
      if (size === 1) { if (off + 16 > to) fail('audio_corrupt', 'mp4: truncated box header'); const big = buf.readBigUInt64BE(off + 8); if (big > BigInt(to - off)) fail('audio_corrupt', 'mp4: box exceeds file'); size = Number(big); header = 16; }
      else if (size === 0) size = to - off;
      if (size < header || off + size > to) fail('audio_corrupt', `mp4: invalid box ${JSON.stringify(type)}`);
      out.push({ type, start: off + header, end: off + size });
      off += size;
    }
    return out;
  };
  const child = (b, type) => b && boxes(b.start, b.end).find((x) => x.type === type);
  const need = (b, n, what) => { if (b.start + n > b.end) fail('audio_corrupt', `mp4: ${what} box too short`); };

  const top = boxes(0, buf.length);
  const moov = top.find((x) => x.type === 'moov');
  if (!moov) fail('audio_no_duration', 'mp4: no moov box (truncated file)');
  if (top.some((x) => x.type === 'moof') || child(moov, 'mvex')) fail('audio_unsupported', 'mp4: fragmented MP4 is not supported');
  const mvhd = child(moov, 'mvhd');
  if (!mvhd) fail('audio_no_duration', 'mp4: no mvhd box');
  need(mvhd, 1, 'mvhd');
  const mvV = buf.readUInt8(mvhd.start);
  need(mvhd, mvV === 1 ? 24 : 16, 'mvhd');
  const safe = (big) => { if (big > BigInt(Number.MAX_SAFE_INTEGER) || big < -BigInt(Number.MAX_SAFE_INTEGER)) fail('audio_corrupt', 'mp4: value out of range'); return Number(big); };
  const movieScale = buf.readUInt32BE(mvhd.start + (mvV === 1 ? 20 : 12));
  if (!movieScale) fail('audio_corrupt', 'mp4: zero movie timescale');

  const handler = (tr) => { const h = child(child(tr, 'mdia'), 'hdlr'); if (!h) return null; need(h, 12, 'hdlr'); return buf.toString('latin1', h.start + 8, h.start + 12); };
  const traks = boxes(moov.start, moov.end).filter((x) => x.type === 'trak');
  const kinds = traks.map(handler);
  if (kinds.includes('vide')) fail('audio_unsupported', 'mp4: contains a video track');
  const sound = traks.filter((_, i) => kinds[i] === 'soun');
  if (sound.length !== 1) fail(sound.length ? 'audio_unsupported' : 'audio_no_duration', `mp4: expected exactly one sound track, found ${sound.length}`);
  const trak = sound[0];
  const mdhd = child(child(trak, 'mdia'), 'mdhd');
  if (!mdhd) fail('audio_corrupt', 'mp4: sound track has no mdhd');
  need(mdhd, 1, 'mdhd');
  const mdV = buf.readUInt8(mdhd.start);
  need(mdhd, mdV === 1 ? 24 : 16, 'mdhd');
  const mediaScale = buf.readUInt32BE(mdhd.start + (mdV === 1 ? 20 : 12));
  if (!mediaScale) fail('audio_corrupt', 'mp4: zero media timescale');
  const stbl = child(child(child(trak, 'mdia'), 'minf'), 'stbl');
  requireAacLc(buf, stbl, child, need, boxes);
  const media = sampleTables(buf, stbl, child, need);   // what the file really contains

  // 1. edit list (segment_duration in the MOVIE timescale; media_time only marks empty edits)
  const elst = child(child(trak, 'edts'), 'elst');
  if (elst) {
    need(elst, 8, 'elst');
    const v = buf.readUInt8(elst.start), n = buf.readUInt32BE(elst.start + 4), w = v === 1 ? 20 : 12;
    if (elst.start + 8 + n * w > elst.end) fail('audio_corrupt', 'mp4: truncated edit list');
    let ticks = 0, mediaEnd = 0;
    for (let i = 0; i < n; i++) {
      const e = elst.start + 8 + i * w;
      const segDur = v === 1 ? safe(buf.readBigUInt64BE(e)) : buf.readUInt32BE(e);
      const mediaTime = v === 1 ? safe(buf.readBigInt64BE(e + 8)) : buf.readInt32BE(e + 4);
      const rate = buf.readInt32BE(e + (v === 1 ? 16 : 8));   // media_rate 16.16 (integer + fraction)
      if (mediaTime < 0) continue;                             // empty edit: no media
      if (rate !== 0x10000) fail('audio_inexact_duration', 'mp4: edit list with a media rate other than 1.0 (dwell or speed change)');
      ticks += segDur;
      mediaEnd = Math.max(mediaEnd, mediaTime + (segDur * mediaScale) / movieScale);
    }
    if (ticks > 0) {
      if (mediaEnd > media.ticks + Math.ceil(mediaScale / movieScale)) fail('audio_inexact_duration', 'mp4: edit list claims more media than the sample tables contain');
      return (ticks / movieScale) * 1000;
    }
  }

  // 2. iTunes gapless metadata: valid samples / the audio sample rate (from the sample entry, which must equal the
  //    media timescale so that sample counts are unambiguous)
  const udtaMeta = child(child(moov, 'udta'), 'meta');
  let ilst = null;
  if (udtaMeta) {   // ISO 'meta' is a full box (+4 version/flags); QuickTime-style 'meta' is not
    const qt = udtaMeta.start + 8 <= udtaMeta.end && buf.toString('latin1', udtaMeta.start + 4, udtaMeta.start + 8) === 'hdlr';
    ilst = boxes(udtaMeta.start + (qt ? 0 : 4), udtaMeta.end).find((x) => x.type === 'ilst');
  }
  for (const item of ilst ? boxes(ilst.start, ilst.end).filter((x) => x.type === '----') : []) {
    const parts = boxes(item.start, item.end);
    const name = parts.find((x) => x.type === 'name');
    if (!name || name.start + 4 > name.end || buf.toString('latin1', name.start + 4, name.end) !== 'iTunSMPB') continue;
    const data = parts.find((x) => x.type === 'data');
    if (!data || data.start + 8 > data.end) fail('audio_corrupt', 'mp4: malformed iTunSMPB');
    const fields = buf.toString('latin1', data.start + 8, data.end).trim().split(/\s+/);
    if (fields.length < 4 || !/^[0-9a-f]{1,16}$/i.test(fields[3])) fail('audio_corrupt', 'mp4: malformed iTunSMPB');
    const valid = Number(BigInt('0x' + fields[3]));
    const rate = sampleEntryRate(buf, trak, child, need);
    if (!rate || rate !== mediaScale) fail('audio_inexact_duration', `mp4: iTunSMPB needs the media timescale (${mediaScale}) to equal the sample rate (${rate})`);
    if (!(valid > 0)) fail('audio_corrupt', 'mp4: iTunSMPB has no valid sample count');
    const priming = /^[0-9a-f]{1,8}$/i.test(fields[1]) ? parseInt(fields[1], 16) : 0;
    if (priming + valid > media.ticks) fail('audio_inexact_duration', 'mp4: iTunSMPB claims more samples than the sample tables contain');
    return (valid / rate) * 1000;
  }
  fail('audio_inexact_duration', 'mp4: no edit list or iTunSMPB gapless info; the header duration includes encoder priming/padding and is not trusted');
}
/* The sound track must be AAC-LC in an 'mp4a' sample entry (AUDIO-SPEC B5). HE-AAC (SBR/PS, explicit or implicit
   via the 0x2B7 sync extension) is rejected: decoders that ignore iTunSMPB play it noticeably longer than measured. */
function requireAacLc(buf, stbl, child, need, boxes) {
  const stsd = child(stbl, 'stsd');
  if (!stsd) fail('audio_corrupt', 'mp4: no stsd');
  need(stsd, 16, 'stsd');
  const entries = boxes(stsd.start + 8, stsd.end);
  if (entries.length !== 1 || entries[0].type !== 'mp4a') fail('audio_unsupported', `mp4: only AAC-LC ('mp4a') is supported (found ${entries[0]?.type || 'none'})`);
  need(entries[0], 28, 'mp4a');
  if (buf.readUInt16BE(entries[0].start + 8) !== 0) fail('audio_unsupported', 'mp4: QuickTime sound description (v1/v2) is not supported; use an ISO MP4/M4A');
  const esds = boxes(entries[0].start + 28, entries[0].end).find((x) => x.type === 'esds');
  if (!esds) fail('audio_unsupported', 'mp4: mp4a entry without esds');
  // ES_Descriptor (0x03) › DecoderConfigDescriptor (0x04) › DecoderSpecificInfo (0x05) = AudioSpecificConfig
  let p = esds.start + 4;
  const desc = (tag) => {
    if (p >= esds.end || buf[p] !== tag) fail('audio_unsupported', `mp4: unexpected esds layout (descriptor 0x${tag.toString(16)})`);
    p++; let len = 0;
    for (let k = 0; k < 4; k++) { if (p >= esds.end) fail('audio_corrupt', 'mp4: truncated esds'); const c = buf[p++]; len = (len << 7) | (c & 0x7f); if (!(c & 0x80)) break; }
    if (p + len > esds.end) fail('audio_corrupt', 'mp4: truncated esds');
    return len;
  };
  desc(0x03);
  if (p + 3 > esds.end) fail('audio_corrupt', 'mp4: truncated esds');
  const flags = buf[p + 2]; p += 3;
  if (flags & 0x80) p += 2;                        // dependsOn_ES_ID
  if (flags & 0x40) { if (p >= esds.end) fail('audio_corrupt', 'mp4: truncated esds'); p += 1 + buf[p]; }   // URL
  if (flags & 0x20) p += 2;                        // OCR_ES_Id
  desc(0x04);
  if (p + 13 > esds.end) fail('audio_corrupt', 'mp4: truncated esds');
  if (buf[p] !== 0x40) fail('audio_unsupported', 'mp4: not MPEG-4 audio');
  p += 13;
  const len = desc(0x05);
  const asc = buf.subarray(p, p + len);
  let bit = 0;
  const read = (n) => { let v = 0; for (let i = 0; i < n; i++, bit++) { if (bit >= asc.length * 8) fail('audio_corrupt', 'mp4: truncated AudioSpecificConfig'); v = (v << 1) | ((asc[bit >> 3] >> (7 - (bit & 7))) & 1); } return v; };
  const aot = read(5);
  if (aot !== 2) fail('audio_unsupported', `mp4: only AAC-LC is supported (audio object type ${aot})`);
  if (read(4) === 15) read(24);                    // sampling frequency
  read(4);                                         // channel configuration
  read(1); if (read(1)) read(14); read(1);         // GASpecificConfig: frameLength, dependsOnCoreCoder, extensionFlag
  if (asc.length * 8 - bit >= 16 && read(11) === 0x2b7) {
    const ext = read(5);
    if ((ext === 5 && read(1)) || ext === 29) fail('audio_unsupported', 'mp4: HE-AAC (SBR/PS) is not supported; use AAC-LC');
  }
}

/* Totals of the sound track's sample tables: duration in media-timescale ticks (stts), sample count and byte total
   (stsz). The counts must agree and the sample bytes must fit in the file. */
function sampleTables(buf, stbl, child, need) {
  const stts = child(stbl, 'stts'), stsz = child(stbl, 'stsz');
  if (!stts || !stsz) fail('audio_inexact_duration', 'mp4: no stts/stsz sample tables (fragmented or unusual file)');
  need(stts, 8, 'stts');
  const n = buf.readUInt32BE(stts.start + 4);
  if (stts.start + 8 + n * 8 > stts.end) fail('audio_corrupt', 'mp4: truncated stts');
  let samples = 0, ticks = 0;
  for (let i = 0; i < n; i++) { const c = buf.readUInt32BE(stts.start + 8 + i * 8), d = buf.readUInt32BE(stts.start + 12 + i * 8); samples += c; ticks += c * d; }
  need(stsz, 12, 'stsz');
  const size = buf.readUInt32BE(stsz.start + 4), count = buf.readUInt32BE(stsz.start + 8);
  if (count !== samples) fail('audio_corrupt', 'mp4: stts and stsz sample counts differ');
  let bytes = size * count;
  if (!size) {
    if (stsz.start + 12 + count * 4 > stsz.end) fail('audio_corrupt', 'mp4: truncated stsz');
    bytes = 0; for (let i = 0; i < count; i++) bytes += buf.readUInt32BE(stsz.start + 12 + i * 4);
  }
  if (!samples) fail('audio_inexact_duration', 'mp4: no samples in the movie box (fragmented MP4 is not supported)');
  if (bytes > buf.length) fail('audio_corrupt', 'mp4: sample tables describe more data than the file holds');
  return { samples, ticks, bytes };
}

/* Sample rate of the first AudioSampleEntry in stsd (16.16 fixed point at entry offset 24). */
function sampleEntryRate(buf, trak, child, need) {
  const stsd = child(child(child(child(trak, 'mdia'), 'minf'), 'stbl'), 'stsd');
  if (!stsd) return 0;
  need(stsd, 8 + 8 + 28, 'stsd');
  const entry = stsd.start + 8;   // full box header (4) + entry_count (4)
  return buf.readUInt32BE(entry + 8 + 24) >>> 16;
}

/* ---------- WebM (EBML) ---------- */
function vint(buf, off, keepMarker) {
  const first = buf[off];
  if (first === undefined) fail('audio_corrupt', 'webm: truncated element');
  let len = 1;
  while (len <= 8 && !(first & (0x80 >> (len - 1)))) len++;
  if (len > 8 || off + len > buf.length) fail('audio_corrupt', 'webm: invalid variable-length integer');
  let value = BigInt(keepMarker ? first : first & (0xff >> len));
  for (let i = 1; i < len; i++) value = (value << 8n) | BigInt(buf[off + i]);
  const unknown = !keepMarker && value === (1n << BigInt(7 * len)) - 1n;   // all-ones size = unknown
  return { value, len, unknown };
}
function webmMs(buf) {
  const ID = { EBML: 0x1a45dfa3n, DOCTYPE: 0x4282n, SEGMENT: 0x18538067n, INFO: 0x1549a966n, TIMECODE_SCALE: 0x2ad7b1n,
    DURATION: 0x4489n, TRACKS: 0x1654ae6bn, TRACK_ENTRY: 0xaen, TRACK_NUMBER: 0xd7n, TRACK_TYPE: 0x83n, CODEC_ID: 0x86n, CODEC_DELAY: 0x56aan,
    CLUSTER: 0x1f43b675n, CLUSTER_TIMECODE: 0xe7n, SIMPLE_BLOCK: 0xa3n, BLOCK_GROUP: 0xa0n, BLOCK: 0xa1n, DISCARD_PADDING: 0x75a2n };
  const children = function* (from, to) {
    for (let off = from; off < to; ) {
      const id = vint(buf, off, true); const sz = vint(buf, off + id.len, false);
      const start = off + id.len + sz.len;
      const end = sz.unknown ? to : start + Number(sz.value);
      if (end > buf.length || end > to) fail('audio_corrupt', 'webm: element exceeds its parent');
      yield { id: id.value, start, end, unknown: sz.unknown };
      if (sz.unknown) return;
      off = end;
    }
  };
  const sint = (el) => { const n = el.end - el.start; if (!n || n > 6) fail('audio_corrupt', 'webm: signed integer element size'); return buf.readIntBE(el.start, n); };
  const uint = (el) => { if (el.end - el.start > 8) fail('audio_corrupt', 'webm: integer element too long'); let n = 0; for (let i = el.start; i < el.end; i++) n = n * 256 + buf[i]; if (n > Number.MAX_SAFE_INTEGER) fail('audio_corrupt', 'webm: integer out of range'); return n; };
  const top = [...children(0, buf.length)];
  const ebml = top.find((e) => e.id === ID.EBML);
  const docType = ebml && [...children(ebml.start, ebml.end)].find((e) => e.id === ID.DOCTYPE);
  if (!docType || buf.toString('latin1', docType.start, docType.end).replace(/\0+$/, '') !== 'webm') fail('audio_unsupported', 'webm: DocType must be "webm"');
  const segment = top.find((e) => e.id === ID.SEGMENT);
  if (!segment) fail('audio_no_duration', 'webm: no Segment');

  let scale = null, duration = null, codecDelayNs = 0, infoSeen = false;
  const audio = [];   // { number, codec, codecDelayNs }
  let lastEndNs = -1, lastDiscardNs = 0, clusters = 0;
  for (const el of children(segment.start, segment.end)) {
    if (el.id === ID.INFO) {
      infoSeen = true; scale = 1_000_000;   // TimecodeScale default: 1 ms in ns
      for (const f of children(el.start, el.end)) {
        if (f.id === ID.TIMECODE_SCALE) scale = uint(f);
        if (f.id === ID.DURATION) {
          const n = f.end - f.start;
          duration = n === 4 ? buf.readFloatBE(f.start) : n === 8 ? buf.readDoubleBE(f.start) : fail('audio_corrupt', 'webm: bad Duration size');
        }
      }
    }
    if (el.id === ID.TRACKS) {
      for (const t of children(el.start, el.end)) {
        if (t.id !== ID.TRACK_ENTRY) continue;
        const fields = [...children(t.start, t.end)];
        const get = (id) => fields.find((f) => f.id === id);
        const kind = get(ID.TRACK_TYPE) ? uint(get(ID.TRACK_TYPE)) : null;
        if (kind === 1) fail('audio_unsupported', 'webm: contains a video track');
        if (kind === 2) {
          const codec = get(ID.CODEC_ID) ? buf.toString('latin1', get(ID.CODEC_ID).start, get(ID.CODEC_ID).end).replace(/\0+$/, '') : '';
          audio.push({ number: get(ID.TRACK_NUMBER) ? uint(get(ID.TRACK_NUMBER)) : null, codec, codecDelayNs: get(ID.CODEC_DELAY) ? uint(get(ID.CODEC_DELAY)) : 0 });
        }
      }
    }
    if (el.id === ID.CLUSTER) {
      if (el.unknown) fail('audio_inexact_duration', 'webm: unknown-size cluster (live or pipe-written file)');
      if (!scale || audio.length !== 1) break;   // reported below
      clusters++;
      let tc = null;
      for (const c of children(el.start, el.end)) {
        if (c.id === ID.CLUSTER_TIMECODE) tc = uint(c);
        let block = null, discard = 0;
        if (c.id === ID.SIMPLE_BLOCK) block = c;
        if (c.id === ID.BLOCK_GROUP) for (const g of children(c.start, c.end)) {
          if (g.id === ID.BLOCK) block = g;
          if (g.id === ID.DISCARD_PADDING) discard = sint(g);
        }
        if (!block) continue;
        if (tc === null) fail('audio_corrupt', 'webm: block before the cluster timecode');
        const tn = vint(buf, block.start, false);
        if (Number(tn.value) !== audio[0].number) continue;
        const h = block.start + tn.len;
        if (h + 3 > block.end) fail('audio_corrupt', 'webm: truncated block');
        if (buf[h + 2] & 0x06) fail('audio_inexact_duration', 'webm: laced blocks are not supported');
        const startNs = (tc + buf.readInt16BE(h)) * scale;
        const endNs = startNs + opusPacketNs(buf, h + 3, block.end);
        if (endNs >= lastEndNs) { lastEndNs = endNs; lastDiscardNs = discard; }
      }
    }
  }
  if (!infoSeen) fail('audio_no_duration', 'webm: no Info element');
  if (duration === null) fail('audio_no_duration', 'webm: Info has no Duration (e.g. written to a pipe or live-recorded)');
  if (audio.length !== 1) fail(audio.length ? 'audio_unsupported' : 'audio_no_duration', `webm: expected exactly one audio track, found ${audio.length}`);
  if (audio[0].codec !== 'A_OPUS') fail('audio_unsupported', `webm: only Opus audio is supported (found ${audio[0].codec || 'no codec id'})`);
  if (!scale) fail('audio_corrupt', 'webm: zero TimecodeScale');
  if (!clusters || lastEndNs < 0) fail('audio_no_duration', 'webm: no audio packets');
  if (duration * scale > lastEndNs + scale) fail('audio_inexact_duration', 'webm: Info Duration claims more than the audio packets contain');
  codecDelayNs = audio[0].codecDelayNs;
  return (lastEndNs - Math.max(0, lastDiscardNs) - codecDelayNs) / 1e6;
}

/* Duration of one Opus packet in ns, from its TOC byte (RFC 6716 §3.1). */
function opusPacketNs(buf, start, end) {
  if (start >= end) fail('audio_corrupt', 'webm: empty Opus packet');
  const toc = buf[start], config = toc >> 3, code = toc & 3;
  const frameUs = config < 12 ? [10000, 20000, 40000, 60000][config % 4] : config < 16 ? [10000, 20000][config % 2] : [2500, 5000, 10000, 20000][config % 4];
  let frames = code === 0 ? 1 : code === 3 ? 0 : 2;
  if (code === 3) { if (start + 1 >= end) fail('audio_corrupt', 'webm: truncated Opus packet'); frames = buf[start + 1] & 0x3f; }
  if (!frames || frames * frameUs > 120000) fail('audio_corrupt', 'webm: invalid Opus packet');
  return frames * frameUs * 1000;
}

/* ---------- asset files (shared by validator and release builder) ---------- */

/* Reads a non-generated audio asset (`audio.file`, relative to the form directory) and measures it. The file is
   opened once; size, type and bytes come from that one descriptor. Returns { bytes, container, mime, duration_ms,
   file }. Throws AudioDurationError with a stable code. */
export function readAssetAudio(formDir, asset) {
  const rel = asset?.audio?.file;
  if (typeof rel !== 'string' || !rel) fail('audio_source', `audio ${asset?.id} has no file`);
  const root = fs.realpathSync(path.resolve(formDir));
  if (path.isAbsolute(rel)) fail('audio_path', `audio ${asset.id}: file must be a relative path inside the form directory`);
  const file = path.resolve(root, rel);
  if (!file.startsWith(root + path.sep)) fail('audio_path', `audio ${asset.id}: file must be inside the form directory`);
  let real;
  try { real = fs.realpathSync(file); } catch { fail('audio_file_missing', `audio ${asset.id}: file ${rel} not found`); }
  if (!real.startsWith(root + path.sep)) fail('audio_path', `audio ${asset.id}: file resolves outside the form directory`);
  let st0;
  try { st0 = fs.statSync(real); } catch { fail('audio_file_missing', `audio ${asset.id}: file ${rel} not found`); }
  if (!st0.isFile()) fail('audio_file_missing', `audio ${asset.id}: ${rel} is not a regular file`);   // before open: a FIFO would block
  let fd;
  try { fd = fs.openSync(real, fs.constants.O_RDONLY | (fs.constants.O_NONBLOCK || 0)); } catch { fail('audio_file_missing', `audio ${asset.id}: file ${rel} cannot be opened`); }
  try {
    const st = fs.fstatSync(fd);
    if (!st.isFile()) fail('audio_file_missing', `audio ${asset.id}: ${rel} is not a file`);
    if (st.size > MAX_AUDIO_BYTES) fail('audio_too_large', `audio ${asset.id}: ${rel} is larger than ${MAX_AUDIO_BYTES} bytes`);
    const bytes = Buffer.alloc(st.size);
    let got = 0;
    while (got < st.size) { const n = fs.readSync(fd, bytes, got, st.size - got, got); if (!n) break; got += n; }
    if (got !== st.size) fail('audio_corrupt', `audio ${asset.id}: ${rel} changed while being read`);
    try { return { bytes, file: rel, ...audioDuration(bytes) }; }
    catch (e) { if (e instanceof AudioDurationError) throw new AudioDurationError(e.code, `audio ${asset.id} (${rel}): ${e.message}`); throw e; }
  } finally { fs.closeSync(fd); }
}
