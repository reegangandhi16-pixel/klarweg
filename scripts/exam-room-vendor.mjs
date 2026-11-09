#!/usr/bin/env node
/* Vendors the exam room's browser libraries into exam-room/vendor/ (self-hosted: the exam page's CSP allows
   only 'self' scripts, no inline import map, no WebAssembly).

   - Downloads pinned npm tarballs, verifies their registry integrity (sha512), extracts with the system tar.
   - Copies only the modules reachable from the entry points and rewrites bare specifiers ('three',
     'three/addons/...') to relative paths, so no import map is needed.
   - Refuses code that the CSP would block (eval / new Function / WebAssembly) in the shipped files.
   - Writes exam-room/vendor/VERSIONS.json (package, version, tarball integrity, sha256 per file) and keeps
     each package's LICENSE.

   Usage: node scripts/exam-room-vendor.mjs [--check]   (--check: verify VERSIONS.json against the files) */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'exam-room', 'vendor');
const PKGS = [
  { name: 'three', version: '0.186.1', dir: 'three' },
  { name: '@met4citizen/talkinghead', version: '1.8.2', dir: 'talkinghead' },
  { name: '@met4citizen/headaudio', version: '1.0.0', dir: 'headaudio' },
];
// entry modules (package-relative); everything they import is followed
const ENTRIES = [
  ['talkinghead', 'modules/talkinghead.mjs'],
  ['talkinghead', 'modules/lipsync-de.mjs'],
  ['headaudio', 'modules/processor.mjs'],
  ['headaudio', 'modules/training.mjs'],
];
const EXTRA = [['headaudio', 'dist/model-en-mixed.bin']];   // data files shipped as-is
const FORBIDDEN = [/\beval\s*\(/, /\bnew\s+Function\s*\(/, /\bWebAssembly\./];
// imported statically by TalkingHead but only executed for meshopt-compressed models; our avatars are not
// meshopt-compressed (CSP has no 'wasm-unsafe-eval'), so this code never runs
const UNUSED_OK = new Set(['three/examples/jsm/libs/meshopt_decoder.module.js']);

const sha256 = (b) => createHash('sha256').update(b).digest('hex');

function verifyOnly() {
  const v = JSON.parse(fs.readFileSync(path.join(OUT, 'VERSIONS.json'), 'utf8'));
  let bad = 0;
  for (const [rel, h] of Object.entries(v.files)) {
    const f = path.join(OUT, rel);
    if (!fs.existsSync(f) || sha256(fs.readFileSync(f)) !== h) { console.error('MISMATCH', rel); bad++; }
  }
  if (bad) process.exit(1);
  console.log(`vendor ok: ${Object.keys(v.files).length} files`);
}
if (process.argv.includes('--check')) { verifyOnly(); process.exit(0); }

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-room-vendor-'));
const src = {};
const meta = { generated_by: 'scripts/exam-room-vendor.mjs', packages: [], files: {} };
for (const p of PKGS) {
  const reg = JSON.parse(execFileSync('curl', ['-fsSL', `https://registry.npmjs.org/${p.name.replace('/', '%2f')}/${p.version}`]).toString());
  const tgz = path.join(tmp, p.dir + '.tgz');
  execFileSync('curl', ['-fsSL', '-o', tgz, reg.dist.tarball]);
  const want = reg.dist.integrity;   // "sha512-<base64>"
  const got = 'sha512-' + createHash('sha512').update(fs.readFileSync(tgz)).digest('base64');
  if (want !== got) throw new Error(`${p.name}@${p.version}: integrity mismatch`);
  const dir = path.join(tmp, p.dir); fs.mkdirSync(dir);
  execFileSync('tar', ['xzf', tgz, '-C', dir]);
  src[p.dir] = path.join(dir, 'package');
  meta.packages.push({ name: p.name, version: p.version, license: reg.license, integrity: want });
}

fs.rmSync(OUT, { recursive: true, force: true });
const IMPORT_RE = /(\bimport\s*(?:[\w*{}\s,]+from\s*)?|\bexport\s*(?:\*|\{[^}]*\})\s*from\s*|\bimport\s*\()\s*(['"])([^'"]+)\2/g;

// map a specifier from a file to [pkgDir, relPath]
function resolve(fromPkg, fromRel, spec) {
  if (spec === 'three') return ['three', 'build/three.module.js'];
  if (spec.startsWith('three/addons/')) return ['three', 'examples/jsm/' + spec.slice('three/addons/'.length)];
  if (spec.startsWith('.')) return [fromPkg, path.posix.normalize(path.posix.join(path.posix.dirname(fromRel), spec))];
  throw new Error(`unresolved import ${spec} in ${fromPkg}/${fromRel}`);
}
const done = new Set();
function copy(pkg, rel) {
  const key = pkg + '/' + rel;
  if (done.has(key)) return; done.add(key);
  const file = path.join(src[pkg], rel);
  let code = fs.readFileSync(file, 'utf8');
  if (/\.m?js$/.test(rel)) {
    if (!UNUSED_OK.has(key)) for (const re of FORBIDDEN) if (re.test(code)) throw new Error(`CSP-blocked construct ${re} in ${key}`);
    const deps = [];
    code = code.replace(IMPORT_RE, (m, head, q, spec) => {
      // dynamic imports with template paths (lipsync modules) are left alone; they are relative already
      const [dp, dr] = resolve(pkg, rel, spec);
      deps.push([dp, dr]);
      let r = path.posix.relative(path.posix.dirname(`${pkg}/${rel}`), `${dp}/${dr}`);
      if (!r.startsWith('.')) r = './' + r;
      return `${head}${q}${r}${q}`;
    });
    for (const [dp, dr] of deps) copy(dp, dr);
  }
  const out = path.join(OUT, pkg, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, code);
}
for (const [pkg, rel] of ENTRIES) copy(pkg, rel);
for (const [pkg, rel] of EXTRA) { const out = path.join(OUT, pkg, rel); fs.mkdirSync(path.dirname(out), { recursive: true }); fs.copyFileSync(path.join(src[pkg], rel), out); }
for (const p of PKGS) fs.copyFileSync(path.join(src[p.dir], 'LICENSE'), path.join(OUT, p.dir, 'LICENSE'));

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(OUT).sort()) meta.files[path.relative(OUT, f)] = sha256(fs.readFileSync(f));
fs.writeFileSync(path.join(OUT, 'VERSIONS.json'), JSON.stringify(meta, null, 1) + '\n');
fs.rmSync(tmp, { recursive: true, force: true });
const bytes = walk(OUT).reduce((a, f) => a + fs.statSync(f).size, 0);
console.log(`vendored ${Object.keys(meta.files).length} files, ${(bytes / 1024).toFixed(0)} KiB → exam-room/vendor/`);
