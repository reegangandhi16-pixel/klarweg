#!/usr/bin/env node
/* Builds an exam-room cast file (who speaks when) for a form whose audio was made by
   klarweg-exam-content/tools/tts-google.mjs. The cast contains NO prompt text: only asset ids, time ranges and
   person keys (safe for this public repository).

   Exact boundaries: each multi-voice asset is EDGE + seg0 + GAP + seg1 + … + EDGE at 48 kHz, then slowed by
   --tempo (atempo). Segment lengths come from the TTS cache (sha256(voice\ntext).pcm), so nothing is re-synthesised.

   Usage:
     node scripts/exam-room-cast.mjs <formDir> --id m0 --prefix ast:m0-sp \
       --person examiner=Prüferin:examiner-f:examiner --person partner=Gesprächspartner:partner-m:partner \
       --person julia="Julia (Teilnehmerin)":partner-f:partner --front 1=partner --front 2=partner --front 3=julia \
       [--out exam-room/casts/m0.json] [--check]
   --check: compare with the existing file instead of writing (CI drift guard when the content repo is present). */
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCast } from '../exam/js/room/cast.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GAP_MS = 700, EDGE_MS = 500, RATE = 48000;   // must equal tools/tts-google.mjs

export function segmentBounds(lensMs, tempo, totalMs) {
  // raw positions (before atempo) of each segment, then scaled to the output timeline
  const out = []; let t = EDGE_MS;
  for (const [i, len] of lensMs.entries()) { if (i) t += GAP_MS; out.push([t, t + len]); t += len; }
  const k = 1 / tempo;
  const scaled = out.map(([a, b]) => [a * k, b * k]);
  // a person "speaks" from the middle of the gap before to the middle of the gap after (whole clip covered)
  return scaled.map(([a, b], i) => [
    i === 0 ? 0 : Math.round((scaled[i - 1][1] + a) / 2),
    i === scaled.length - 1 ? totalMs : Math.round((b + scaled[i + 1][0]) / 2),
  ]);
}

function main(argv) {
  const formDir = path.resolve(argv[0]);
  const opt = { person: [], front: [] };
  for (let i = 1; i < argv.length; i++) {
    const k = argv[i].replace(/^--/, '');
    if (k === 'check') { opt.check = true; continue; }
    const v = argv[++i];
    if (k === 'person' || k === 'front') opt[k].push(v); else opt[k] = v;
  }
  const plan = JSON.parse(fs.readFileSync(path.join(formDir, 'tts-plan.json'), 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(path.join(formDir, 'audio-manifest.json'), 'utf8'));
  const cacheDir = path.resolve(formDir, '../../../tmp/tts-cache');
  const voiceOf = Object.fromEntries(Object.entries(plan.voices).map(([name, voice]) => [voice, name]));
  const people = {};
  for (const spec of opt.person) {
    const [key, rest] = spec.split('='); const [label, avatar, role] = rest.split(':');
    people[key] = { role, label, avatar };
  }
  const cast = { id: opt.id, generated_by: 'scripts/exam-room-cast.mjs', people, front: Object.fromEntries(opt.front.map((f) => f.split('='))), assets: {} };
  for (const f of plan.files) {
    if (!f.asset_id.startsWith(opt.prefix)) continue;
    const m = manifest.files[f.file];
    if (!m) throw new Error(`${f.asset_id}: not in audio-manifest (audio not generated?)`);
    const who = f.segments.map((s) => voiceOf[s.voice]);
    for (const w of who) if (!people[w]) throw new Error(`${f.asset_id}: voice ${w} has no --person`);
    if (f.segments.length === 1) { cast.assets[f.asset_id] = [[0, m.duration_ms, who[0]]]; continue; }
    const lens = f.segments.map((s) => {
      const key = createHash('sha256').update(`${s.voice}\n${s.text}`).digest('hex');
      const pcm = path.join(cacheDir, key + '.pcm');
      if (!fs.existsSync(pcm)) throw new Error(`${f.asset_id}: TTS cache segment missing (${key.slice(0, 12)})`);
      return (fs.statSync(pcm).size / 2 / RATE) * 1000;
    });
    const bounds = segmentBounds(lens, m.tempo || 1, m.duration_ms);
    // merge neighbouring segments of the same person
    const segs = [];
    for (const [i, [a, b]] of bounds.entries()) {
      const last = segs[segs.length - 1];
      if (last && last[2] === who[i]) last[1] = b; else segs.push([a, b, who[i]]);
    }
    cast.assets[f.asset_id] = segs;
  }
  validateCast(cast);
  const out = path.resolve(ROOT, opt.out || `exam-room/casts/${opt.id}.json`);
  const text = JSON.stringify(cast, null, 1) + '\n';
  if (opt.check) {
    if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== text) { console.error('cast differs:', path.relative(ROOT, out)); process.exit(1); }
    console.log('cast ok:', path.relative(ROOT, out)); return;
  }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text);
  console.log(`wrote ${path.relative(ROOT, out)}: ${Object.keys(cast.assets).length} assets`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
