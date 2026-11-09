#!/usr/bin/env node
/* PLACEHOLDER media for the photoreal room engine test (proto/exam-room-photoreal).
     node scripts/exam-room-photoreal-media.mjs --out <dir>
   Rasterises exam-room/photoreal/placeholder-plate.svg (headless Chrome) and cuts, per person in scene.json, an idle
   loop and a speaking loop from exactly the plate pixels of their rect (so patch edges match the plate). The
   animation is a schematic mouth/blink marker only: it tests switching, sync and camera, not realism.
   Real media replaces these files 1:1 (same names, same rects): see exam-room/photoreal/DESIGN.md. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const i = process.argv.indexOf('--out'); if (i < 0) throw new Error('--out <dir> required');
const OUT = path.resolve(process.argv[i + 1]); fs.mkdirSync(OUT, { recursive: true });
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const scene = JSON.parse(fs.readFileSync(path.join(ROOT, 'exam-room/photoreal/scene.json'), 'utf8'));
const { w: W, h: H } = scene.plate;
const plate = path.join(OUT, 'plate.png');
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'kxv-chrome-'));
execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${prof}`, `--window-size=${W},${H}`, `--screenshot=${plate}`,
  'file://' + path.join(ROOT, 'exam-room/photoreal/placeholder-plate.svg')], { stdio: 'ignore' });
fs.rmSync(prof, { recursive: true, force: true });

const even = (v) => 2 * Math.round(v / 2);
const enc = ['-c:v', 'libx264', '-profile:v', 'main', '-pix_fmt', 'yuv420p', '-crf', '26', '-r', '30', '-an', '-movflags', '+faststart'];
for (const [id, p] of Object.entries(scene.people)) {
  const [x, y, w, h] = [even(p.rect[0] * W), even(p.rect[1] * H), even(p.rect[2] * W), even(p.rect[3] * H)];
  // face centre in patch coordinates: heads sit ~38% down the patch, centred
  const mx = Math.round(w * 0.5 - w * 0.07), my = Math.round(h * (id === 'partner' ? 0.62 : 0.5)), mw = Math.round(w * 0.14);
  const ey = my - Math.round(h * (id === 'partner' ? 0.16 : 0.14));
  const crop = `crop=${w}:${h}:${x}:${y}`;
  const blink = `drawbox=x=${mx - mw / 2}:y=${ey}:w=${mw * 2}:h=4:color=0x2a2a2a:t=fill:enable='lt(mod(t\\,4.3)\\,0.15)'`;
  const mouth = `drawbox=x=${mx}:y=${my}:w=${mw}:h='3+${Math.round(h * 0.05)}*abs(sin(t*11))*abs(sin(t*3.7))':color=0x5a2a2a:t=fill`;
  const run = (vf, secs, name) => execFileSync('ffmpeg', ['-v', 'error', '-y', '-loop', '1', '-i', plate, '-t', String(secs), '-vf', `${crop},${vf}`, ...enc, path.join(OUT, name)]);
  run(blink, 8.6, `${id}-idle.mp4`);
  run(`${blink},${mouth}`, 6, `${id}-speak.mp4`);
}
console.log(JSON.stringify({ out: OUT, files: fs.readdirSync(OUT) }));
