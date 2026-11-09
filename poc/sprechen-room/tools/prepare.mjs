#!/usr/bin/env node
/* Local-only asset preparation for the Sprechen room PoC. Costs nothing: it re-uses the already
   generated M0 audio (klarweg-exam-content, gitignored) and the CC0 MPFB avatar shipped with
   TalkingHead v1.8.2 (MIT). Output goes to media/ and vendor/, both gitignored.
   Usage: node poc/sprechen-room/tools/prepare.mjs [path/to/forms/b1/mock-m0] */
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { align, speechFromSilences } from './align.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FORM = path.resolve(process.argv[2] || path.join(os.homedir(), 'klarweg-work/klarweg-exam-content/forms/b1/mock-m0'));
const MEDIA = path.join(ROOT, 'media'); const VENDOR = path.join(ROOT, 'vendor');
fs.mkdirSync(MEDIA, { recursive: true }); fs.mkdirSync(VENDOR, { recursive: true });

// Slices of existing M0 clips (seconds), with the exact words spoken in each slice.
const CLIPS = [
  { id: 'exam-intro', speaker: 'examiner', src: 'm0-sp3-partner-talk.webm', from: 1.30, to: 8.40,
    text: 'Vielen Dank. Jetzt hören Sie die Präsentation einer anderen Teilnehmerin. Hören Sie gut zu.' },
  { id: 'julia-talk', speaker: 'partner', src: 'm0-sp3-partner-talk.webm', from: 16.85, to: 35.95,
    text: 'Hallo zusammen! Mein Thema heute ist: „Sport im Verein oder lieber allein?“ Zuerst erzähle ich euch von meinen eigenen Erfahrungen. Dann sage ich etwas über die Situation in meinem Heimatland. Danach spreche ich über Vorteile und Nachteile, und am Ende sage ich meine Meinung.' },
  { id: 'julia-question', speaker: 'partner', src: 'm0-sp3-partner-q-t1.webm', from: 0, to: null,
    text: 'Mit wem verbringst du deinen Urlaub am liebsten?' },
  { id: 'exam-thanks', speaker: 'examiner', src: 'm0-sp3-examiner-q-t1.webm', from: 0.40, to: 1.45,
    text: 'Vielen Dank.' },
];

const probeMs = (f) => Math.round(parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString()) * 1000);
const manifest = { generated_at: new Date().toISOString(), source_form: 'frm:b1:mock-m0', clips: [] };
for (const c of CLIPS) {
  const src = path.join(FORM, 'audio', c.src);
  if (!fs.existsSync(src)) throw new Error('missing ' + src + ' — generate the M0 audio first');
  const out = path.join(MEDIA, c.id + '.m4a');   // AAC: decodes everywhere incl. iOS Safari
  const cut = ['-ss', String(c.from), ...(c.to ? ['-to', String(c.to)] : [])];
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', src, ...cut, '-af', 'afade=t=in:d=0.04,areverse,afade=t=in:d=0.06,areverse', '-ac', '1', '-c:a', 'aac', '-b:a', '96k', out]);
  const ms = probeMs(out);
  const det = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', out, '-af', 'silencedetect=n=-40dB:d=0.12', '-f', 'null', '-'], { encoding: 'utf8' });
  const speech = speechFromSilences(det.stderr, ms);
  manifest.clips.push({ id: c.id, speaker: c.speaker, file: 'media/' + c.id + '.m4a', duration_ms: ms, text: c.text, speech, ...align(c.text, speech) });
  console.log(c.id.padEnd(15), ms + ' ms', speech.length + ' segments');
}
fs.writeFileSync(path.join(MEDIA, 'manifest.json'), JSON.stringify(manifest, null, 1));

// Avatar: CC0 (TalkingHead README, "mpfb.glb … licensed under CC0"), pinned to tag v1.8.2.
const glb = path.join(VENDOR, 'mpfb.glb');
if (!fs.existsSync(glb)) {
  execFileSync('curl', ['-fsSL', '-o', glb, 'https://raw.githubusercontent.com/met4citizen/TalkingHead/v1.8.2/avatars/mpfb.glb']);
}
const buf = fs.readFileSync(glb);
if (buf.subarray(0, 4).toString() !== 'glTF') throw new Error('vendor/mpfb.glb is not a GLB file');
console.log('avatar mpfb.glb', buf.length, 'bytes sha256', createHash('sha256').update(buf).digest('hex').slice(0, 16));
