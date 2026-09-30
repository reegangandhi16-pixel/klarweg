#!/usr/bin/env node
/* ============================================================
   KLARWEG — upload a generated chapter-resource release to PRIVATE R2
   ------------------------------------------------------------
   Uploads exactly what scripts/generate-chapter-resources.mjs produced —
   nothing is regenerated. Layout under the release prefix:

     <release>/manifest.json                          (written LAST)
     <release>/pdfs/<level>/<chapter-id>/index.json
     <release>/pdfs/<level>/<chapter-id>/<type>.pdf

   Uses ONE wrangler session (getPlatformProxy) with an R2 binding — no
   per-object CLI processes, so there is a single authenticated client.
   Core rules live in scripts/chapter-resources/uploader.mjs: never
   overwrite, skip same-size objects on --resume, stop on any size
   mismatch or unexpected object, manifest last, 0 uploads when complete.

   node scripts/upload-chapter-resources.mjs [--out <dir>] [--release r2]
        dry run (default): verify the local set, touch nothing
        --local [--persist-to <dir>]          wrangler-dev local R2
        --remote --confirm-release=<release>  production bucket
        --resume                              complete a partial release
        --concurrency <n>                     default 2, max 3 for --remote
   ============================================================ */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { uploadRelease, listPrefix, redact } from './chapter-resources/uploader.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUCKET = 'klarweg-resources';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf('--' + n); return i >= 0 ? argv[i + 1] : undefined; };
const flag = (n) => argv.includes('--' + n);
const RELEASE = opt('release') || 'r1';
const OUT = path.resolve(ROOT, opt('out') || 'chapter-resources-out');
const MODE = flag('remote') ? 'remote' : flag('local') ? 'local' : 'dry-run';
const RESUME = flag('resume');
const confirm = (argv.find((a) => a.startsWith('--confirm-release=')) || '').split('=')[1];
let CONCURRENCY = Math.max(1, Number(opt('concurrency')) || 2);
if (MODE === 'remote') CONCURRENCY = Math.min(CONCURRENCY, 3);

const die = (m) => { console.error('✗ ' + redact(m)); process.exit(1); };
if (!/^r[0-9]{1,4}$/.test(RELEASE)) die(`Invalid release "${RELEASE}" — use r1, r2, …`);
if (MODE === 'remote' && confirm !== RELEASE) die(`Remote upload needs --confirm-release=${RELEASE}`);

/* ---------- 1. verify the local set before touching R2 ---------- */
const manifestPath = path.join(OUT, 'manifest.json');
if (!fs.existsSync(manifestPath)) die(`No manifest at ${manifestPath}. Run npm run generate:chapter-pdfs first.`);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex');
const entry = (key, file, contentType) => {
  const buf = fs.readFileSync(file);
  return { key, bytes: buf.length, sha256: sha(buf), contentType, read: () => fs.readFileSync(file) };
};

const objects = [];
const problems = [];
for (const [id, ch] of Object.entries(manifest.chapters)) {
  const dir = `pdfs/${ch.level}/${id}`;
  const idxFile = path.join(OUT, dir, 'index.json');
  if (!fs.existsSync(idxFile)) { problems.push(`missing ${dir}/index.json`); continue; }
  const idx = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
  for (const [type, r] of Object.entries(ch.resources)) {
    const file = path.join(OUT, r.file);
    if (!fs.existsSync(file)) { problems.push('missing ' + r.file); continue; }
    const o = entry(`${RELEASE}/${r.file}`, file, 'application/pdf');
    if (o.bytes !== r.bytes) problems.push(`size mismatch ${r.file}`);
    if (!fs.readFileSync(file).subarray(0, 5).equals(Buffer.from('%PDF-'))) problems.push(`not a PDF ${r.file}`);
    if (!idx.resources[type] || idx.resources[type].contentHash !== r.contentHash) problems.push(`index/manifest disagree ${id}/${type}`);
    objects.push(o);
  }
  objects.push(entry(`${RELEASE}/${dir}/index.json`, idxFile, 'application/json'));
}
const pdfCount = objects.filter((o) => o.contentType === 'application/pdf').length;
const expectedPdfs = Object.values(manifest.chapters).reduce((n, c) => n + Object.keys(c.resources).length, 0);
if (pdfCount !== expectedPdfs) problems.push(`PDF count ${pdfCount} ≠ manifest ${expectedPdfs}`);
if (problems.length) die('Local set failed verification:\n  ' + problems.slice(0, 20).join('\n  '));
const manifestObj = entry(`${RELEASE}/manifest.json`, manifestPath, 'application/json');

const mb = (objects.reduce((n, o) => n + o.bytes, 0) + manifestObj.bytes) / 1048576;
console.log(`local set verified: ${pdfCount} PDFs + ${objects.length - pdfCount} index files + manifest = ${objects.length + 1} objects · ${mb.toFixed(1)} MB · release ${RELEASE} · mode ${MODE}${RESUME ? ' (resume)' : ''}`);
if (MODE === 'dry-run') { console.log(`dry run — nothing uploaded. Use --local or --remote --confirm-release=${RELEASE}`); process.exit(0); }

/* ---------- 2. one wrangler session with an R2 binding ---------- */
function loadWrangler() {
  for (const base of [ROOT, path.join(ROOT, '..', 'klarweg (11)')]) {
    try { return createRequire(path.join(base, 'package.json')).resolve('wrangler'); } catch { /* next */ }
  }
  return null;
}
const wranglerPath = loadWrangler();
if (!wranglerPath) die('wrangler is not installed (npm install) — cannot open an R2 session.');
const { getPlatformProxy } = await import(pathToFileURL(wranglerPath).href);

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-upload-'));
const configPath = path.join(tmp, 'wrangler.json');
fs.writeFileSync(configPath, JSON.stringify({
  name: 'kw-resource-uploader',
  compatibility_date: '2024-11-06',
  r2_buckets: [{ binding: 'RES', bucket_name: BUCKET, ...(MODE === 'remote' ? { remote: true } : {}) }],
}));

let proxy;
try {
  proxy = await getPlatformProxy({
    configPath,
    ...(MODE === 'local' ? { persist: { path: path.resolve(opt('persist-to') || path.join(ROOT, 'access', 'worker', '.wrangler', 'state')) } } : {}),
    ...(MODE === 'remote' ? { remoteBindings: true } : {}),
  });
} catch (e) {
  fs.rmSync(tmp, { recursive: true, force: true });
  die('Could not open an R2 session' + (MODE === 'remote' ? ' (is `wrangler login` done?)' : '') + ':\n' + (e && (e.stack || e.message)));
}

let result;
try {
  result = await uploadRelease({
    bucket: proxy.env.RES,
    prefix: `${RELEASE}/`,
    objects,
    manifest: manifestObj,
    resume: RESUME,
    concurrency: CONCURRENCY,
    log: (m) => console.log(m),
  });
  const final = await listPrefix(proxy.env.RES, `${RELEASE}/`);
  result.remoteCount = final.size;
} catch (e) {
  result = { refused: 'upload aborted: ' + redact(e && (e.stack || e.message)), failures: [] };
} finally {
  await proxy.dispose().catch(() => {});
  fs.rmSync(tmp, { recursive: true, force: true });
}

/* ---------- 3. report ---------- */
for (const f of (result.failures || []).slice(0, 10)) console.error(`  ✗ ${f.key}\n${f.error.split('\n').map((l) => '      ' + l).join('\n')}`);
const summary = `uploaded ${result.uploaded || 0} · skipped (already present, same size) ${result.skipped || 0} · failed ${(result.failures || []).length} · byte-verified ${result.verified || 0} · manifest ${result.manifestWritten ? 'written' : (result.complete ? 'already present' : 'NOT written')} · remote objects under ${RELEASE}/: ${result.remoteCount ?? '?'} of ${objects.length + 1}`;
if (result.refused) die(result.refused + '\n' + summary);
console.log(`✓ release ${RELEASE} complete in ${BUCKET} (${MODE}) — ${summary}`);
