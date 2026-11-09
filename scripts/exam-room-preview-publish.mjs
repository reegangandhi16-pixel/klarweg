#!/usr/bin/env node
/* Audit + (optionally) publish a BUILT non-production room preview to an isolated Cloudflare Pages preview URL.

     node scripts/exam-room-preview-publish.mjs <built dir>                 → audit + dry run (default, sends nothing)
     node scripts/exam-room-preview-publish.mjs <built dir> --confirm      → audit, then deploy (owner approval needed)

   The build comes from scripts/exam-room-preview.mjs. Deploy target is fixed: Pages project `klarweg-site`
   (direct upload, *.klarweg-site.pages.dev only, unrelated to klarweg.in), with a random `room-<16 hex>` preview
   branch. It can never be the production branch, so the URL is an unguessable preview alias.
   The audit refuses the deploy if anything other than demo/pilot room files is in the build. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const DIR = path.resolve(args.find((a) => !a.startsWith('--')) || '');
const CONFIRM = args.includes('--confirm');
const PROJECT = 'klarweg-site';
if (!args.find((a) => !a.startsWith('--')) || !fs.existsSync(path.join(DIR, 'exam-room/preview/index.html'))) {
  console.error('usage: exam-room-preview-publish.mjs <dir built by exam-room-preview.mjs> [--confirm]'); process.exit(1);
}

const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else files.push(path.relative(DIR, p)); } })(DIR);

const problems = [];
const bad = (m) => problems.push(m);

/* 1. only allowlisted paths (demo client + room + demo/pilot media); nothing that runs server-side */
const ALLOW = [/^index\.html$/, /^robots\.txt$/, /^_headers$/, /^exam\/exam\.css$/, /^exam\/js\/[\w/.-]+\.js$/,
  /^exam-room\/preview\/(index\.html|demo\.js|demo-pkg\.json|audio\/demo-[\w-]+\.mp3)$/, /^exam-room\/casts\/(index|demo)\.json$/,
  /^exam-room\/photoreal\/(room\.css|scene\.json|media\/[\w.-]+\.(jpg|png|svg|mp4|webp))$/,
  /^exam-room\/(vendor|avatars)\/[\w/.-]+$/, /^exam-room\/LICENSES-avatars\.md$/];
for (const f of files) if (!ALLOW.some((r) => r.test(f))) bad('not allowlisted: ' + f);
for (const f of ['_worker.js', '_redirects', '_routes.json', 'functions']) if (fs.existsSync(path.join(DIR, f))) bad('server-side/proxy file present: ' + f);

/* 2. headers: noindex, no referrer, microphone only for this origin; robots disallow */
const H = fs.existsSync(path.join(DIR, '_headers')) ? fs.readFileSync(path.join(DIR, '_headers'), 'utf8') : '';
for (const need of ['X-Robots-Tag: noindex', 'Referrer-Policy: no-referrer', 'microphone=(self)']) if (!H.includes(need)) bad('_headers missing ' + need);
if (!/Disallow: \/\s*$/m.test(fs.existsSync(path.join(DIR, 'robots.txt')) ? fs.readFileSync(path.join(DIR, 'robots.txt'), 'utf8') : '')) bad('robots.txt must disallow /');

/* 3. text scan: secrets, personal data, production endpoints, private exam content ids */
const PATTERNS = [
  [/sk-[A-Za-z0-9_-]{16,}|AIza[0-9A-Za-z_-]{30,}|ghp_[A-Za-z0-9]{20,}|-----BEGIN [A-Z ]*PRIVATE KEY|xox[bp]-|Bearer [A-Za-z0-9._-]{20,}/, 'secret-like token'],
  [/[A-Za-z0-9._%+-]+@(gmail|googlemail|outlook|yahoo)\.com/i, 'personal e-mail address'],
  [/klarweg-512108|klarwegofficial|reegangandhi/i, 'account / project identifier'],
  [/\bklarweg\.in\/(api|exam\/api)|workers\.dev|exam-api\.|access\.klarweg/i, 'production endpoint', 'code'],
  [/\bast:(m0|m\d{1,2}|mock)-|\bform\/mock-m|\br00\d\b|klarweg-exam-content/i, 'private exam content (M0/M1–M10/release) reference'],
];
for (const f of files) {
  if (!/\.(js|json|html|css|txt|md|svg)$|^_headers$/.test(f)) continue;
  const t = fs.readFileSync(path.join(DIR, f), 'utf8');
  const code = t.replace(/\/\*[\s\S]*?\*\//g, '');   // endpoint check ignores /* block comments */ (api.js documents the prod route)
  for (const [re, what, scope] of PATTERNS) { const m = (scope === 'code' ? code : t).match(re); if (m) bad(`${what} in ${f}: ${m[0].slice(0, 40)}`); }
}

/* 4. the production switch must still be off; preview hosts must stay *.klarweg-site.pages.dev / localhost */
const cfg = path.join(DIR, 'exam/js/room/config.js');
if (!fs.existsSync(cfg) || !/ROOM_PRODUCTION = false;/.test(fs.readFileSync(cfg, 'utf8'))) bad('ROOM_PRODUCTION is not false');

/* 5. media: every media file is referenced by scene.json (no stray takes); Pages limit 25 MiB per file */
const scenePath = path.join(DIR, 'exam-room/photoreal/scene.json');
if (fs.existsSync(scenePath)) {
  const scene = JSON.stringify(JSON.parse(fs.readFileSync(scenePath, 'utf8')));
  for (const f of files.filter((x) => x.startsWith('exam-room/photoreal/media/'))) if (!scene.includes('media/' + path.basename(f))) bad('media not referenced by scene.json: ' + f);
}
let bytes = 0;
for (const f of files) { const s = fs.statSync(path.join(DIR, f)).size; bytes += s; if (s > 25 * 1024 * 1024) bad('file over 25 MiB: ' + f); }

const branch = 'room-' + crypto.randomBytes(8).toString('hex');
const cmd = ['wrangler', 'pages', 'deploy', DIR, '--project-name', PROJECT, '--branch', branch, '--commit-dirty=true'];
const report = { dir: DIR, files: files.length, mb: +(bytes / 1e6).toFixed(1), problems, ok: !problems.length,
  mode: CONFIRM ? 'deploy' : 'dry-run', planned: 'npx ' + cmd.join(' '), preview_url: `https://${branch}.${PROJECT}.pages.dev/exam-room/preview/?room=on` };
console.log(JSON.stringify(report, null, 1));
if (problems.length) process.exit(2);
if (!CONFIRM) { console.error('dry run: nothing was uploaded. Re-run with --confirm only after owner approval.'); process.exit(0); }

if (!/^room-[0-9a-f]{16}$/.test(branch) || ['main', 'master', 'production'].includes(branch)) process.exit(3);
const r = spawnSync('npx', cmd, { stdio: 'inherit' });
process.exit(r.status ?? 1);
