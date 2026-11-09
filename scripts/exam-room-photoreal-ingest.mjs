#!/usr/bin/env node
/* Ingest REAL pilot media for the photoreal room (local, ffmpeg only; no network).
     node scripts/exam-room-photoreal-ingest.mjs --plate <plate.png|jpg> --person examiner --idle <idle.mp4>
       [--clip "<asset_id>#<segment>=<take.mp4>" ...] --out <media dir>
   - plate: scaled to the scene plate size (scene.json), written as plate.jpg (q≈85) + plate.png kept if given as png.
   - every video: scaled to the person's patch rect in plate pixels, H.264 Main 30 fps, no audio, faststart.
   - seam check: PSNR of each video's FIRST frame against the plate pixels under the patch. Generated clips that
     start from the plate crop should score high; a low score means visible seams (colour/position drift).
   Prints JSON (sizes, durations, psnr) — the numbers go into the pilot report. */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const one = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const many = (k) => args.flatMap((a, i) => (a === k ? [args[i + 1]] : []));
const [plateIn, person, idleIn, outDir] = [one('--plate'), one('--person'), one('--idle'), one('--out')];
if (!plateIn || !person || !idleIn || !outDir) throw new Error('usage: --plate <img> --person <id> --idle <mp4> [--clip "<asset>#<i>=<mp4>"] --out <dir>');
const scene = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/photoreal/scene.json'), 'utf8'));
const P = scene.people[person]; if (!P) throw new Error('unknown person ' + person);
const { w: W, h: H } = scene.plate;
const even = (v) => 2 * Math.round(v / 2);
const [x, y, w, h] = [even(P.rect[0] * W), even(P.rect[1] * H), even(P.rect[2] * W), even(P.rect[3] * H)];
fs.mkdirSync(outDir, { recursive: true });
const run = (a) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...a], { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
const probe = (f) => Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim());

const plate = path.join(outDir, 'plate.png');
run(['-i', plateIn, '-vf', `scale=${W}:${H}:flags=lanczos`, plate]);
run(['-i', plate, '-q:v', '3', path.join(outDir, 'plate.jpg')]);

function encode(src, name) {
  const out = path.join(outDir, name);
  run(['-i', src, '-vf', `scale=${w}:${h}:flags=lanczos,fps=30,format=yuv420p`, '-c:v', 'libx264', '-profile:v', 'main', '-crf', '22', '-an', '-movflags', '+faststart', out]);
  return out;
}
const report = { person, rect_px: [x, y, w, h], files: [] };
const add = (file, role) => {
  const r = execFileSync('sh', ['-c', `ffmpeg -v info -i "$1" -i "$2" -filter_complex "[0:v]trim=end_frame=1,setpts=PTS-STARTPTS[a];[1:v]crop=${w}:${h}:${x}:${y},format=yuv420p[b];[a][b]psnr" -f null - 2>&1 | grep -o 'average:[0-9.inf]*' | tail -1`, 'sh', file, plate]).toString().trim();
  report.files.push({ file: path.basename(file), role, kb: Math.round(fs.statSync(file).size / 1024), seconds: +probe(file).toFixed(2), first_frame_psnr_db: r.replace('average:', '') || null });
};
add(encode(idleIn, `${person}-idle.mp4`), 'idle');
const clips = {};
for (const spec of many('--clip')) {
  const [key, src] = spec.split('=');
  if (!/^ast:[a-z0-9:-]+#\d+$/.test(key)) throw new Error('bad clip key ' + key);
  const name = `${person}-${key.replace(/^ast:/, '').replace(/[^a-z0-9-]/g, '-')}.mp4`;
  add(encode(src, name), 'take ' + key);
  clips[key] = 'media/' + name;
}
report.scene_clips = clips;
report.note = 'PSNR ≥ 30 dB: seam invisible after feathering; 25–30: check on device; < 25: regenerate from the plate crop';
console.log(JSON.stringify(report, null, 1));
