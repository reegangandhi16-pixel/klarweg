#!/usr/bin/env node
/* Build the NON-PRODUCTION Sprechen room preview (a self-contained static site; never part of klarweg.in).

     node scripts/exam-room-preview.mjs --out <empty dir outside the repo>

   Contents: the real exam client modules (exam/js, exam.css), the room (exam-room/vendor, avatars), and a demo page
   (exam-room/preview/demo.html + demo.js) that runs the real Sprechen driver, recorder and room against an in-browser
   stand-in for the server. No API, no login, no exam content: the package is the public synthetic s0 Sprechen module
   with the original demo dialogue of exam-room/preview/demo-script.json, spoken offline by the macOS voices
   (`say`, free, local; for this internal preview only). Recordings never leave the browser.
   Deploy (owner-approved preview only): npx wrangler pages deploy <out> --project-name klarweg-site --branch <name> */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { syntheticBuild, pkgFor } from '../exam-worker/test/harness.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const OUT = path.resolve(arg('--out') || '');
if (!arg('--out')) throw new Error('--out <dir> required');
if (OUT.startsWith(ROOT + path.sep) || OUT === ROOT) throw new Error('--out must be outside the repo');
if (fs.existsSync(OUT) && fs.readdirSync(OUT).length) throw new Error('--out must be empty');
fs.mkdirSync(OUT, { recursive: true });

const script = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/preview/demo-script.json'), 'utf8'));
const tmp = fs.mkdtempSync(path.join(OUT, '.tmp-'));
const run = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
const durMs = (f) => Math.round(1000 * Number(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).trim()));

/* 1. audio: one AIFF per segment (say), 350 ms pauses between speakers, one MP3 (mono 24 kHz) per asset */
const GAP = 350;
const audioDir = path.join(OUT, 'exam-room/preview/audio');
fs.mkdirSync(audioDir, { recursive: true });
const castAssets = {}, durations = {}, files = {};
let n = 0;
for (const [id, segs] of Object.entries(script.assets)) {
  const wavs = []; const marks = []; let t = 0;
  for (const [who, text] of segs) {
    const aiff = path.join(tmp, `s${n++}.aiff`), wav = aiff.replace('.aiff', '.wav');
    run('say', ['-v', script.voices[who], '-r', String(script.rate), '-o', aiff, text]);
    run('ffmpeg', ['-v', 'error', '-y', '-i', aiff, '-ac', '1', '-ar', '24000', wav]);
    const d = durMs(wav);
    if (wavs.length) { const gap = path.join(tmp, `g${n}.wav`); run('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', String(GAP / 1000), gap]); wavs.push(gap); t += GAP; }
    wavs.push(wav); marks.push([t, t + d, who]); t += d;
  }
  const list = path.join(tmp, `l${n}.txt`); fs.writeFileSync(list, wavs.map((w) => `file '${w}'`).join('\n'));
  const name = id.replace(/^ast:/, '') + '.mp3';
  run('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', list, '-c:a', 'libmp3lame', '-b:a', '64k', path.join(audioDir, name)]);
  const total = durMs(path.join(audioDir, name));
  marks[marks.length - 1][1] = Math.max(marks[marks.length - 1][1], total);   // MP3 padding belongs to the last speaker
  castAssets[id] = marks; durations[id] = total; files[id] = 'audio/' + name;
}
fs.rmSync(tmp, { recursive: true, force: true });

/* 2. demo package: the synthetic s0 Sprechen module, demo asset ids, demo texts, real durations */
const pkg = pkgFor(syntheticBuild(), 'sprechen');
const ren = { 'ast:syn-sp1-partner-1': 'ast:demo-sp1-partner-1', 'ast:syn-sp1-partner-2': 'ast:demo-sp1-partner-2', 'ast:syn-sp1-partner-3': 'ast:demo-sp1-partner-3',
  'ast:syn-sp3-partner-talk': 'ast:demo-sp3-partner-talk', 'ast:syn-sp3-examiner-q': 'ast:demo-sp3-examiner-q' };
const tx = script.text;
for (const part of pkg.parts) for (const task of part.tasks) {
  const T = tx[task.task_id] || {};
  if (T.instructions) task.instructions = T.instructions;
  let slide = 0;
  for (const s of task.stimuli || []) {
    if (s.asset_id in ren) { s.asset_id = ren[s.asset_id]; s.duration_ms = durations[s.asset_id]; s.label = 'Demo-Audio'; }
    if (s.role === 'planning_card' && T.card) s.text = T.card;
    if (s.role === 'slide' && T.slides) { s.text = `${s.label}: ${T.topics[s.label]} – Folie ${(slide % 5) + 1}: ${T.slides[slide % 5]}`; slide++; }
  }
  for (const it of task.items) {
    if (it.interaction === 'topic_choice' && T.topics) it.options.forEach((o, i) => { const k = `Thema ${i + 1}`; o.label = `${k}: ${T.topics[k]}`; });
    for (const turn of (it.response_spec && it.response_spec.turns) || []) if (turn.prompt_asset in ren) { turn.prompt_asset = ren[turn.prompt_asset]; turn.prompt_ms = durations[turn.prompt_asset]; }
  }
}
// the partner phase must hold Julia's whole presentation (+ 3 s); the total follows
const plan = pkg.timing.plan;
const partner = plan.phases.find((p) => p.id === 'partner');
partner.ms = Math.ceil((durations['ast:demo-sp3-partner-talk'] + 3000) / 1000) * 1000; partner.seconds = partner.ms / 1000;
plan.total_ms = plan.prep_ms + plan.phases.reduce((a, p) => a + p.ms, 0);
pkg.demo = true;

/* 3. files */
const copy = (rel, dest = rel) => fs.cpSync(path.join(ROOT, rel), path.join(OUT, dest), { recursive: true });
copy('exam/exam.css'); copy('exam/js');
copy('exam-room/vendor'); copy('exam-room/avatars');
fs.rmSync(path.join(OUT, 'exam-room/avatars/LICENSES.md')); copy('exam-room/avatars/LICENSES.md', 'exam-room/LICENSES-avatars.md');
copy('exam-room/preview/demo.html', 'exam-room/preview/index.html'); copy('exam-room/preview/demo.js', 'exam-room/preview/demo.js');
const w = (rel, obj) => { fs.mkdirSync(path.dirname(path.join(OUT, rel)), { recursive: true }); fs.writeFileSync(path.join(OUT, rel), typeof obj === 'string' ? obj : JSON.stringify(obj)); };
w('exam-room/casts/index.json', { casts: ['demo.json'] });
w('exam-room/casts/demo.json', { id: 'demo', generated_by: 'scripts/exam-room-preview.mjs', ...script.cast, assets: castAssets });
w('exam-room/preview/demo-pkg.json', { package: pkg, audio: files });
w('index.html', '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=/exam-room/preview/?room=on"><title>Vorschau</title>');
w('robots.txt', 'User-agent: *\nDisallow: /\n');
w('_headers', '/*\n  X-Robots-Tag: noindex, nofollow\n  Referrer-Policy: no-referrer\n  X-Content-Type-Options: nosniff\n  Permissions-Policy: microphone=(self), camera=(), geolocation=()\n/exam-room/preview/*\n  Cache-Control: no-cache\n/exam-room/casts/*\n  Cache-Control: no-cache\n');

let bytes = 0, count = 0;
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else { bytes += fs.statSync(p).size; count++; } } })(OUT);
console.log(JSON.stringify({ out: OUT, files: count, mb: +(bytes / 1e6).toFixed(1), durations, partnerPhaseMs: partner.ms, totalMs: plan.total_ms }));
