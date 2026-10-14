#!/usr/bin/env node
/* OD-14 LISTENING-QUALITY REVIEW (formal MOS review; a technical audition is NOT this review). From a pilot manifest
   (tools/audio-pilot.mjs) it builds a BLIND package — clips renamed C01…, no vendor or voice names — with a seeded random
   clip order per rater and one rating sheet per rater; then it scores the returned sheets.

   Scoring rules (register OD-14, AUDIO-SPEC B3): exactly the required number of distinct raters (default 10), each a
   declared native German speaker; every clip rated by every rater, naturalness an integer 1–5, intelligible yes/no.
   Clip MOS = mean of its ratings; form MOS = mean of the clip MOS values; pass = form MOS ≥ 4.0 [PROVISIONAL]. The
   register defines no per-clip floor: per-clip results are reported for the owner, not used as a gate.
   It never fills in, completes or "repairs" a rating: an incomplete or invalid set is refused.

   Usage: node exam-content/tools/audio-review.mjs package --manifest <pilot>/manifest.json --out <dir> [--raters 10] [--seed s]
          node exam-content/tools/audio-review.mjs score --package <dir>  (reads <dir>/returned/*.csv) */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { assertOutsideRepo } from './audio-pilot.mjs';

export const MOS_THRESHOLD = 4.0;
const HEADER = 'rater_id,native_german,region,clip,naturalness_1_5,intelligible_yes_no,comment';

function seededOrder(items, seed) {   // deterministic Fisher–Yates from sha256(seed|i)
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = parseInt(crypto.createHash('sha256').update(`${seed}|${i}`).digest('hex').slice(0, 8), 16) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildPackage({ manifest, audioDir, out, raters = 10, seed = 'kx-review' }) {
  const dir = assertOutsideRepo(out);
  const clips = manifest.clips.filter((c) => c.file && !c.error);
  if (!clips.length) throw new Error('the manifest has no synthesized clips (dry run?)');
  const codes = clips.map((c, i) => ({ code: `C${String(i + 1).padStart(2, '0')}`, asset_id: c.asset_id, file: c.file, sha256: c.sha256 }));
  fs.mkdirSync(path.join(dir, 'clips'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'sheets'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'returned'), { recursive: true });
  for (const c of codes) {   // blind copies: raters see only the code
    const bytes = fs.readFileSync(path.join(audioDir, c.file));
    if (crypto.createHash('sha256').update(bytes).digest('hex') !== c.sha256) throw new Error(`${c.file} changed since synthesis`);
    fs.writeFileSync(path.join(dir, 'clips', `${c.code}.wav`), bytes);
  }
  // the key stays with the review organiser; raters only get clips/ and their own sheet
  fs.writeFileSync(path.join(dir, 'key.json'), JSON.stringify({ form: manifest.form, raters_required: raters, seed, threshold: MOS_THRESHOLD, clips: codes }, null, 2) + '\n');
  for (let r = 1; r <= raters; r++) {
    const order = seededOrder(codes.map((c) => c.code), `${seed}|R${r}`);
    fs.writeFileSync(path.join(dir, 'sheets', `rater-${String(r).padStart(2, '0')}.csv`), [HEADER, ...order.map((c) => `,,,${c},,,`)].join('\n') + '\n');
  }
  return { clips: codes.length, raters, dir };
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (lines[0] !== HEADER) throw new Error('unexpected header');
  return lines.slice(1).map((l) => { const [rater_id, native_german, region, clip, nat, intel, ...rest] = l.split(','); return { rater_id: rater_id.trim(), native_german: native_german.trim().toLowerCase(), region: region.trim(), clip: clip.trim(), naturalness: nat.trim(), intelligible: intel.trim().toLowerCase(), comment: rest.join(',').trim() }; });
}

export function score({ packageDir }) {
  const key = JSON.parse(fs.readFileSync(path.join(packageDir, 'key.json'), 'utf8'));
  const codes = key.clips.map((c) => c.code);
  const files = fs.existsSync(path.join(packageDir, 'returned')) ? fs.readdirSync(path.join(packageDir, 'returned')).filter((f) => f.endsWith('.csv')) : [];
  const errors = [], raters = new Map();
  for (const f of files) {
    let rows;
    try { rows = parseCsv(fs.readFileSync(path.join(packageDir, 'returned', f), 'utf8')); } catch (e) { errors.push(`${f}: ${e.message}`); continue; }
    const ids = [...new Set(rows.map((r) => r.rater_id))];
    if (ids.length !== 1 || !ids[0]) { errors.push(`${f}: one rater id per sheet required`); continue; }
    const id = ids[0];
    if (raters.has(id)) { errors.push(`${f}: rater ${id} returned more than one sheet`); continue; }
    if (rows.some((r) => r.native_german !== 'yes')) errors.push(`${f}: rater ${id} is not declared a native German speaker`);
    const got = rows.map((r) => r.clip).sort();
    if (JSON.stringify(got) !== JSON.stringify([...codes].sort())) errors.push(`${f}: must rate every clip exactly once`);
    for (const r of rows) {
      if (!/^[1-5]$/.test(r.naturalness)) errors.push(`${f}: clip ${r.clip} naturalness "${r.naturalness}" is not 1–5`);
      if (!['yes', 'no'].includes(r.intelligible)) errors.push(`${f}: clip ${r.clip} intelligible must be yes/no`);
    }
    raters.set(id, rows);
  }
  if (raters.size !== key.raters_required) errors.push(`${raters.size} raters returned sheets; ${key.raters_required} are required`);
  if (errors.length) return { complete: false, passed: false, errors };
  const perClip = codes.map((code) => {
    const rs = [...raters.values()].map((rows) => rows.find((r) => r.clip === code));
    const mos = rs.reduce((n, r) => n + Number(r.naturalness), 0) / rs.length;
    return { code, asset_id: key.clips.find((c) => c.code === code).asset_id, mos: Math.round(mos * 100) / 100, not_intelligible: rs.filter((r) => r.intelligible === 'no').length };
  });
  const formMos = Math.round((perClip.reduce((n, c) => n + c.mos, 0) / perClip.length) * 100) / 100;
  return { complete: true, raters: raters.size, form_mos: formMos, threshold: key.threshold, passed: formMos >= key.threshold, clips: perClip };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [cmd, ...a] = process.argv.slice(2), arg = (k) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
  try {
    if (cmd === 'package') console.log(JSON.stringify(buildPackage({ manifest: JSON.parse(fs.readFileSync(arg('--manifest'), 'utf8')), audioDir: path.dirname(path.resolve(arg('--manifest'))), out: arg('--out'), raters: Number(arg('--raters') || 10), seed: arg('--seed') || 'kx-review' })));
    else if (cmd === 'score') { const r = score({ packageDir: arg('--package') }); console.log(JSON.stringify(r, null, 2)); process.exit(r.complete ? 0 : 1); }
    else { console.error('usage: audio-review.mjs package|score …'); process.exit(2); }
  } catch (e) { console.error(e.message); process.exit(1); }
}
