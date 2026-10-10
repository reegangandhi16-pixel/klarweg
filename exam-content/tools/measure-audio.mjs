#!/usr/bin/env node
/* Q11 measurement evidence for audio files (AUDIO-SPEC B5/B7). Tooling only: it is not wired into validate.mjs or
   build-release.mjs and closes no gate (docs/exam/EXAM-AUDIO-Q11-PLAN.md).

   For each file it records: SHA-256 and size, container and MIME, the file duration (audio-duration.mjs, measured from
   the container), and, on the decoded PCM samples, integrated loudness, true peak, sample peak, channel count and
   sample rate (audio-signal.mjs). Each specified AUDIO-SPEC B5 value gets a status: pass / fail / not_measured /
   reported.

   Decoding: WAV (integer PCM) is read directly. AAC-LC/MP4 and Opus/WebM need an external decoder, given explicitly
   with --ffmpeg PATH or KW_FFMPEG. Without one, compressed files are reported as not measured; nothing is guessed.
   The decoder keeps the file's own channel count and sample rate (no -ac / -ar), so the measurement is of what the
   decoder produces from the file, not of container metadata.

   Usage: node exam-content/tools/measure-audio.mjs [--ffmpeg PATH] FILE...
   Prints a JSON array of evidence records. Exit 0 = every specified check passed or was reported; 1 = a check
   failed or a file could not be measured; 2 = usage error. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { audioDuration, AudioDurationError, MAX_AUDIO_BYTES } from './audio-duration.mjs';
import { readPcmWav, measureSignal, checkSignal, AudioSignalError } from './audio-signal.mjs';

export const TOOL_VERSION = 'klarweg-measure-audio/1';

export function ffmpegVersion(ffmpeg) {
  return execFileSync(ffmpeg, ['-hide_banner', '-version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).split('\n')[0].trim();
}

/* Decodes the first audio stream to a temporary 32-bit integer PCM WAV, keeping channels and sample rate. */
export function decodeWithFfmpeg(ffmpeg, file) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-measure-'));
  const out = path.join(dir, 'decoded.wav');
  try {
    execFileSync(ffmpeg, ['-nostdin', '-v', 'error', '-i', file, '-map', '0:a:0', '-c:a', 'pcm_s32le', '-f', 'wav', '-y', out], { stdio: ['ignore', 'ignore', 'pipe'] });
    return fs.readFileSync(out);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}

export function measureAudioFile(file, { ffmpeg = null } = {}) {
  const rec = { file, tool: TOOL_VERSION, node: process.version, measured_at: new Date().toISOString() };
  let bytes;
  try {
    const st = fs.statSync(file);
    if (!st.isFile()) throw new Error('not a regular file');
    if (st.size > MAX_AUDIO_BYTES) throw new Error(`larger than ${MAX_AUDIO_BYTES} bytes`);
    bytes = fs.readFileSync(file);
  } catch (e) { return { ...rec, error: { code: 'file', message: e.message } }; }
  rec.bytes = bytes.length;
  rec.sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
  try { Object.assign(rec, audioDuration(bytes)); }
  catch (e) { if (e instanceof AudioDurationError) return { ...rec, error: { code: e.code, message: e.message } }; throw e; }
  rec.role = rec.container === 'wav' ? 'master' : 'delivery';

  let pcm;
  try {
    if (rec.container === 'wav') { pcm = readPcmWav(bytes); rec.decoder = 'built-in integer-PCM WAV reader'; }
    else if (!ffmpeg) return { ...rec, signal: null, checks: { decode: { status: 'not_measured', reason: 'no decoder given (--ffmpeg or KW_FFMPEG)' } }, ok: false };
    else {
      rec.decoder = ffmpegVersion(ffmpeg);
      rec.decode_command = `ffmpeg -nostdin -v error -i <file> -map 0:a:0 -c:a pcm_s32le -f wav <out>`;
      pcm = readPcmWav(decodeWithFfmpeg(ffmpeg, file));
    }
  } catch (e) {
    if (e instanceof AudioSignalError) return { ...rec, error: { code: e.code, message: e.message } };
    return { ...rec, error: { code: 'decode_failed', message: String(e.stderr || e.message).trim().split('\n')[0] } };
  }
  try {
    const m = measureSignal({ sampleRate: pcm.sampleRate, channels: pcm.channels });
    rec.signal = { ...m, decoded_bits: pcm.bits };
    const { checks, ok } = checkSignal(m, { role: rec.role, bits: pcm.bits });
    return { ...rec, checks, ok };
  } catch (e) {
    if (e instanceof AudioSignalError) return { ...rec, error: { code: e.code, message: e.message } };
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
