#!/usr/bin/env node
/* Q11 measurement evidence for audio files (AUDIO-SPEC B5/B7). Tooling only: it is not wired into validate.mjs or
   build-release.mjs and closes no gate (docs/exam/EXAM-AUDIO-Q11-PLAN.md).

   For each file it records: SHA-256 and size, container and MIME, the file duration (audio-duration.mjs, measured from
   the container), and, on the decoded PCM samples, integrated loudness, true peak, sample peak, channel count and
   sample rate (audio-signal.mjs). Each specified AUDIO-SPEC B5 value gets a status: pass / fail / not_measured /
   reported.

   Decoding: WAV (integer PCM) is read directly. AAC-LC/MP4 and Opus/WebM need an external decoder, given explicitly
   with --ffmpeg PATH or KW_FFMPEG (never looked up on PATH). Without one, compressed files are reported as not
   measured; nothing is guessed.
   - The decoder reads a private temporary copy of exactly the bytes that were hashed (file: protocol only, demuxer
     forced to the container already identified), so a renamed, replaced or protocol-like path cannot change what is
     measured.
   - It keeps the file's own channel count and sample rate (no -ac / -ar): the measurement is of what the decoder
     produces from the file, not of container metadata.
   - The decoded length must agree with the duration measured from the container (audio-duration.mjs) within
     DURATION_TOLERANCE_MS; otherwise the record is an error.
   - Decoder runs have a timeout. The decoder path, its SHA-256 and its version line are recorded, as are the SHA-256
     of this tool's own source files.

   Usage: node exam-content/tools/measure-audio.mjs [--ffmpeg PATH] FILE...
   Prints a JSON array of evidence records. Exit 0 = every specified check passed or was reported; 1 = a check
   failed or a file could not be measured; 2 = usage error. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { audioDuration, AudioDurationError, MAX_AUDIO_BYTES, DURATION_TOLERANCE_MS } from './audio-duration.mjs';
import { readPcmWav, measureSignal, checkSignal, AudioSignalError } from './audio-signal.mjs';

export const TOOL_VERSION = 'klarweg-measure-audio/2';
export const DECODE_TIMEOUT_MS = 120_000;
const VERSION_TIMEOUT_MS = 10_000;
const DEMUXER = Object.freeze({ mp4: 'mov', webm: 'matroska' });   // ffmpeg input formats for the identified container
const HERE = path.dirname(fileURLToPath(import.meta.url));
const sha256 = (b) => crypto.createHash('sha256').update(b).digest('hex');

/* SHA-256 of the source files that produce a measurement (this tool and the modules it measures with). */
export function toolSources() {
  return Object.fromEntries(['measure-audio.mjs', 'audio-signal.mjs', 'audio-duration.mjs'].map((f) => [`exam-content/tools/${f}`, sha256(fs.readFileSync(path.join(HERE, f)))]));
}

/* The decoder as identified for the record: resolved path, SHA-256 of the executable, first version line. */
export function describeDecoder(ffmpeg) {
  const real = fs.realpathSync(ffmpeg);
  const version = execFileSync(real, ['-hide_banner', '-version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: VERSION_TIMEOUT_MS }).split('\n')[0].trim();
  return { path: real, sha256: sha256(fs.readFileSync(real)), version };
}

/* Decodes the first audio stream of `bytes` (already identified as `container`) to 32-bit integer PCM WAV, keeping
   channels and sample rate. The decoder reads a private copy of exactly these bytes. */
export function decodeWithFfmpeg(ffmpeg, bytes, container, { timeoutMs = DECODE_TIMEOUT_MS } = {}) {
  const demuxer = DEMUXER[container];
  if (!demuxer) throw new Error(`no decoder input format for container ${container}`);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-measure-'));
  const input = path.join(dir, 'input'), out = path.join(dir, 'decoded.wav');
  try {
    fs.writeFileSync(input, bytes, { mode: 0o600 });
    execFileSync(ffmpeg, ['-nostdin', '-v', 'error', '-protocol_whitelist', 'file', '-f', demuxer, '-i', `file:${input}`,
      '-map', '0:a:0', '-c:a', 'pcm_s32le', '-f', 'wav', '-y', `file:${out}`],
    { stdio: ['ignore', 'ignore', 'pipe'], timeout: timeoutMs, killSignal: 'SIGKILL', maxBuffer: 4 * 1024 * 1024 });
    return fs.readFileSync(out);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}

export function measureAudioFile(file, { ffmpeg = null, timeoutMs = DECODE_TIMEOUT_MS } = {}) {
  const rec = { file, tool: TOOL_VERSION, tool_sources: toolSources(), node: process.version, measured_at: new Date().toISOString() };
  const error = (code, message) => ({ ...rec, error: { code, message }, ok: false });   // never a passing record
  let bytes;
  try {
    const st = fs.statSync(file);
    if (!st.isFile()) throw new Error('not a regular file');
    if (st.size > MAX_AUDIO_BYTES) throw new Error(`larger than ${MAX_AUDIO_BYTES} bytes`);
    bytes = fs.readFileSync(file);
  } catch (e) { return error('file', e.message); }
  rec.bytes = bytes.length;
  rec.sha256 = sha256(bytes);
  try { Object.assign(rec, audioDuration(bytes)); }
  catch (e) { if (e instanceof AudioDurationError) return error(e.code, e.message); throw e; }
  rec.role = rec.container === 'wav' ? 'master' : 'delivery';

  let pcm;
  try {
    if (rec.container === 'wav') { pcm = readPcmWav(bytes); rec.decoder = { name: 'built-in integer-PCM WAV reader' }; }
    else if (!ffmpeg) return { ...rec, signal: null, checks: { decode: { status: 'not_measured', reason: 'no decoder given (--ffmpeg or KW_FFMPEG)' } }, ok: false };
    else {
      rec.decoder = describeDecoder(ffmpeg);
      rec.decode_command = `ffmpeg -nostdin -v error -protocol_whitelist file -f ${DEMUXER[rec.container]} -i file:<copy of the hashed bytes> -map 0:a:0 -c:a pcm_s32le -f wav file:<out>`;
      pcm = readPcmWav(decodeWithFfmpeg(rec.decoder.path, bytes, rec.container, { timeoutMs }));
    }
  } catch (e) {
    if (e instanceof AudioSignalError) return error(e.code, `decoded output: ${e.message}`);
    if (e.code === 'ETIMEDOUT' || e.signal === 'SIGKILL') return error('decode_timeout', `decoder did not finish within ${timeoutMs} ms`);
    return error('decode_failed', String(e.stderr || e.message).trim().split('\n')[0] || 'decoder failed');
  }
  const decodedMs = (pcm.channels[0].length / pcm.sampleRate) * 1000;
  if (Math.abs(decodedMs - rec.duration_ms) > DURATION_TOLERANCE_MS) {
    return error('decode_length_mismatch', `decoded ${Math.round(decodedMs)} ms, container ${rec.duration_ms} ms (tolerance ${DURATION_TOLERANCE_MS} ms)`);
  }
  try {
    const m = measureSignal({ sampleRate: pcm.sampleRate, channels: pcm.channels });
    rec.signal = { ...m, decoded_bits: pcm.bits };
    const { checks, ok } = checkSignal(m, { role: rec.role, bits: pcm.bits });
    return { ...rec, checks, ok };
  } catch (e) {
    if (e instanceof AudioSignalError) return error(e.code, e.message);
    throw e;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  let ffmpeg = process.env.KW_FFMPEG || null;
  const files = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--ffmpeg') ffmpeg = args[++i];
    else if (args[i].startsWith('-')) { console.error(`unknown option ${args[i]}`); process.exit(2); }
    else files.push(args[i]);
  }
  if (!files.length || (ffmpeg !== null && !ffmpeg)) { console.error('usage: measure-audio.mjs [--ffmpeg PATH] FILE...'); process.exit(2); }
  const records = files.map((f) => measureAudioFile(f, { ffmpeg }));
  console.log(JSON.stringify(records, null, 2));
  process.exit(records.every((r) => r.ok) ? 0 : 1);
}
