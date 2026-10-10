/* Read the playback duration of an audio file from its container, without decoding and without external tools.
   Supported containers (AUDIO-SPEC B5):
     - WAV / RIFF, integer PCM (masters; synthetic test tones): data-chunk bytes / byte rate (header cross-checked)
     - MP4 / M4A, one sound track (AAC delivery): the edit list, else iTunes gapless metadata (iTunSMPB). The
       movie/track header duration includes AAC encoder priming and frame padding, so a file with neither is rejected.
     - WebM (Opus delivery), audio only: Segment › Info › Duration × TimecodeScale, minus the track's CodecDelay
       (Opus pre-skip). A WebM without Duration (e.g. written to a pipe or live-recorded) is rejected.
   Anything else, and any file whose duration cannot be read exactly, throws an AudioDurationError with a stable
   `code`. Nothing here guesses a duration, and no input can raise any other error type. */

import fs from 'node:fs';
import path from 'node:path';

export class AudioDurationError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}
const fail = (code, msg) => { throw new AudioDurationError(code, msg); };

export const MIME = Object.freeze({ wav: 'audio/wav', mp4: 'audio/mp4', webm: 'audio/webm' });
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
      if (size === 1) { if (off + 16 > to) fail('audio_corrupt', 'mp4: truncated box header'); size = Number(buf.readBigUInt64BE(off + 8)); header = 16; }
      else if (size === 0) size = to - off;
      if (size < header || off + size > to) fail('audio_corrupt', `mp4: invalid box ${JSON.stringify(type)}`);
      out.push({ type, start: off + header, end: off + size });
      off += size;
    }
    return out;
  };
  const child = (b, type) => b && boxes(b.start, b.end).find((x) => x.type === type);
  const need = (b, n, what) => { if (b.start + n > b.end) fail('audio_corrupt', `mp4: ${what} box too short`); };

  const moov = boxes(0, buf.length).find((x) => x.type === 'moov');
  if (!moov) fail('audio_no_duration', 'mp4: no moov box (truncated file)');
  const mvhd = child(moov, 'mvhd');
  if (!mvhd) fail('audio_no_duration', 'mp4: no mvhd box');
  need(mvhd, 1, 'mvhd');
  const mvV = buf.readUInt8(mvhd.start);
  need(mvhd, mvV === 1 ? 24 : 16, 'mvhd');
  const movieScale = buf.readUInt32BE(mvhd.start + (mvV === 1 ? 20 : 12));
  if (!movieScale) fail('audio_corrupt', 'mp4: zero movie timescale');

  const handler = (tr) => { const h = child(child(tr, 'mdia'), 'hdlr'); if (!h) return null; need(h, 12, 'hdlr'); return buf.toString('latin1', h.start + 8, h.start + 12); };
  const traks = boxes(moov.start, moov.end).filter((x) => x.type === 'trak');
  const kinds = traks.map(handler);
  if (kinds.includes('vide')) fail('audio_unsupported', 'mp4: contains a video track');
  const sound = traks.filter((_, i) => kinds[i] === 'soun');
  if (sound.length !== 1) fail(sound.length ? 'audio_unsupported' : 'audio_no_duration', `mp4: expected exactly one sound track, found ${sound.length}`);
  const trak = sound[0];

  // 1. edit list (segment_duration in the MOVIE timescale; media_time only marks empty edits)
  const elst = child(child(trak, 'edts'), 'elst');
  if (elst) {
    need(elst, 8, 'elst');
    const v = buf.readUInt8(elst.start), n = buf.readUInt32BE(elst.start + 4), w = v === 1 ? 20 : 12;
    if (elst.start + 8 + n * w > elst.end) fail('audio_corrupt', 'mp4: truncated edit list');
    let ticks = 0;
    for (let i = 0; i < n; i++) {
      const e = elst.start + 8 + i * w;
      const segDur = v === 1 ? Number(buf.readBigUInt64BE(e)) : buf.readUInt32BE(e);
      const mediaTime = v === 1 ? Number(buf.readBigInt64BE(e + 8)) : buf.readInt32BE(e + 4);
      const rate = buf.readInt16BE(e + (v === 1 ? 16 : 8));   // media_rate_integer
      if (mediaTime < 0) continue;                             // empty edit: no media
      if (rate !== 1) fail('audio_inexact_duration', 'mp4: edit list with a media rate other than 1 (dwell or speed change)');
      ticks += segDur;
    }
    if (ticks > 0) return (ticks / movieScale) * 1000;
  }

  // 2. iTunes gapless metadata: valid samples / the audio sample rate (from the sample entry, which must equal the
  //    media timescale so that sample counts are unambiguous)
  const mdhd = child(child(trak, 'mdia'), 'mdhd');
  if (!mdhd) fail('audio_corrupt', 'mp4: sound track has no mdhd');
  need(mdhd, 1, 'mdhd');
  const mdV = buf.readUInt8(mdhd.start);
  need(mdhd, mdV === 1 ? 24 : 16, 'mdhd');
  const mediaScale = buf.readUInt32BE(mdhd.start + (mdV === 1 ? 20 : 12));
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
    return (valid / rate) * 1000;
  }
  fail('audio_inexact_duration', 'mp4: no edit list or iTunSMPB gapless info; the header duration includes encoder priming/padding and is not trusted');
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
    DURATION: 0x4489n, TRACKS: 0x1654ae6bn, TRACK_ENTRY: 0xaen, TRACK_TYPE: 0x83n, CODEC_DELAY: 0x56aan, CLUSTER: 0x1f43b675n };
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
  const uint = (el) => { if (el.end - el.start > 8) fail('audio_corrupt', 'webm: integer element too long'); let n = 0; for (let i = el.start; i < el.end; i++) n = n * 256 + buf[i]; return n; };
  const top = [...children(0, buf.length)];
  const ebml = top.find((e) => e.id === ID.EBML);
  const docType = ebml && [...children(ebml.start, ebml.end)].find((e) => e.id === ID.DOCTYPE);
  if (!docType || buf.toString('latin1', docType.start, docType.end).replace(/\0+$/, '') !== 'webm') fail('audio_unsupported', 'webm: DocType must be "webm"');
  const segment = top.find((e) => e.id === ID.SEGMENT);
  if (!segment) fail('audio_no_duration', 'webm: no Segment');

  let scale = null, duration = null, codecDelayNs = 0, audioTracks = 0, infoSeen = false;
  for (const el of children(segment.start, segment.end)) {
    if (el.id === ID.CLUSTER) break;   // metadata precedes clusters in seekable files
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
        const type = fields.find((f) => f.id === ID.TRACK_TYPE);
        const kind = type ? uint(type) : null;
        if (kind === 1) fail('audio_unsupported', 'webm: contains a video track');
        if (kind === 2) { audioTracks++; const cd = fields.find((f) => f.id === ID.CODEC_DELAY); if (cd) codecDelayNs = uint(cd); }
      }
    }
  }
  if (!infoSeen) fail('audio_no_duration', 'webm: no Info element before the first Cluster');
  if (duration === null) fail('audio_no_duration', 'webm: Info has no Duration (e.g. written to a pipe or live-recorded)');
  if (audioTracks !== 1) fail(audioTracks ? 'audio_unsupported' : 'audio_no_duration', `webm: expected exactly one audio track, found ${audioTracks}`);
  if (!scale) fail('audio_corrupt', 'webm: zero TimecodeScale');
  return (duration * scale - codecDelayNs) / 1e6;
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
  let fd;
  try { fd = fs.openSync(real, 'r'); } catch { fail('audio_file_missing', `audio ${asset.id}: file ${rel} cannot be opened`); }
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
