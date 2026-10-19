/* NON-PRODUCTION SITE BUILD (tools/build-nonprod-site.mjs, docs/exam/NONPROD-SETUP.md).
   The copy points at the non-prod Access Worker only, the production API is refused,
   the output never lands inside the repository, and the repository's exam/ is untouched. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkApiOrigin, rewritePage, checkOutDir, build } from '../tools/build-nonprod-site.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const TOOL = path.join(REPO, 'exam-content', 'tools', 'build-nonprod-site.mjs');
const API = 'https://klarweg-access-nonprod.example-sub.workers.dev';
const PROD_HOSTS = ['https://klarweg.in', 'https://*.klarweg.in', 'klarweg-access.klarweg-issue-reports-2026.workers.dev'];

function tmp() { return fs.mkdtempSync(path.join(os.tmpdir(), 'kw-nonprod-site-')); }
function hashTree(dir) {
  const h = crypto.createHash('sha256');
  const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(d, e.name); h.update(path.relative(dir, p));
    if (e.isDirectory()) walk(p); else h.update(fs.readFileSync(p));
  } };
  walk(dir); return h.digest('hex');
}
const cspOf = (html) => html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]*)">/)[1];

test('NONPROD SITE: API origin must be exact and must not be production', () => {
  assert.equal(checkApiOrigin(API), null);
  assert.equal(checkApiOrigin('http://localhost:8787'), null);
  for (const bad of [undefined, '', 'klarweg-access-nonprod.x.workers.dev', API + '/', API + '/exam', 'http://example.com', "https://x.example.com; connect-src *"]) {
    assert.match(String(checkApiOrigin(bad)), /missing|exact origin/, `rejects ${JSON.stringify(bad)}`);
  }
  for (const bad of [API + ':443', API + ':65536', API + ':99999', API + ':0', 'https://u:p@klarweg-access-nonprod.x.workers.dev', API + '?x', API + '#x']) {
    assert.match(String(checkApiOrigin(bad)), /exact origin/, `rejects ${bad}`);
  }
  assert.equal(checkApiOrigin(API + ':8443'), null);
  for (const prod of ['https://klarweg-access.klarweg-issue-reports-2026.workers.dev', 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev:8443',
    'https://abc123-klarweg-access.klarweg-issue-reports-2026.workers.dev', 'https://klarweg-access.other-sub.workers.dev',
    'https://klarweg.in', 'https://api.klarweg.in', 'https://klarweg.in:8443']) {
    assert.match(String(checkApiOrigin(prod)), /PRODUCTION/, `refuses ${prod}`);
  }
});

test('NONPROD SITE: the real pages rewrite to the non-prod API and drop every production host from connect-src', () => {
  for (const page of ['index.html', 'rater.html']) {
    const src = fs.readFileSync(path.join(REPO, 'exam', page), 'utf8');
    const out = rewritePage(src, API, page);
    assert.match(out, new RegExp(`<meta name="kw-exam-api" content="${API.replace(/\./g, '\\.')}">`));
    const csp = cspOf(out);
    assert.match(csp, new RegExp(`connect-src 'self' blob: ${API.replace(/\./g, '\\.')};`));
    for (const h of PROD_HOSTS) assert.ok(!csp.includes(h), `${page}: ${h} removed from CSP`);
    assert.equal(csp.replace(/connect-src [^;]*;/, ''), cspOf(src).replace(/connect-src [^;]*;/, ''), `${page}: the rest of the CSP is unchanged`);
    assert.equal(out.split('\n').length, src.split('\n').length, `${page}: only in-line replacements`);
  }
});

test('NONPROD SITE: a page without exactly one api meta / connect-src is refused', () => {
  assert.throws(() => rewritePage('<html></html>', API, 'x'), /kw-exam-api/);
  const meta = '<meta name="kw-exam-api" content="">';
  assert.throws(() => rewritePage(meta + meta + 'connect-src a;', API, 'x'), /kw-exam-api/);
  assert.throws(() => rewritePage(meta, API, 'x'), /connect-src/);
});

test('NONPROD SITE: --out must be outside the repository and empty', () => {
  assert.match(String(checkOutDir(REPO, REPO)), /OUTSIDE/);
  assert.match(String(checkOutDir(path.join(REPO, 'exam'), REPO)), /OUTSIDE/);
  assert.match(String(checkOutDir(path.join(REPO, 'nonprod-out'), REPO)), /OUTSIDE/);
  assert.match(String(checkOutDir('', REPO)), /missing/);
  const d = tmp();
  assert.match(String(checkOutDir(path.join(REPO, '..nonprod-out'), REPO)), /OUTSIDE/, 'a "..name" folder inside the repo is inside');
  assert.match(String(checkOutDir(path.join(REPO, 'exam', '..', '..', path.basename(REPO), 'x'), REPO)), /OUTSIDE/, 'dot-dot back into the repo');
  try {
    assert.equal(checkOutDir(d, REPO), null, 'empty temp dir is fine');
    assert.equal(checkOutDir(path.join(d, 'new', 'site'), REPO), null, 'a not-yet-existing dir outside is fine');
    fs.symlinkSync(REPO, path.join(d, 'link-to-repo'));
    assert.match(String(checkOutDir(path.join(d, 'link-to-repo', 'nonprod-out'), REPO)), /OUTSIDE/, 'a path through a symlink into the repo is inside');
    fs.mkdirSync(path.join(d, 'empty'));
    fs.symlinkSync(path.join(d, 'empty'), path.join(d, 'link-to-empty'));
    assert.match(String(checkOutDir(path.join(d, 'link-to-empty'), REPO)), /directory/, 'the output itself must not be a symlink');
    fs.writeFileSync(path.join(d, 'afile'), '');
    assert.match(String(checkOutDir(path.join(d, 'afile'), REPO)), /directory/, 'a file is refused');
    fs.rmSync(path.join(d, 'afile'));
    fs.rmSync(path.join(d, 'link-to-empty')); fs.rmSync(path.join(d, 'link-to-repo')); fs.rmSync(path.join(d, 'empty'), { recursive: true });
    fs.writeFileSync(path.join(d, 'x'), '');
    assert.match(String(checkOutDir(d, REPO)), /empty/);
  } finally { fs.rmSync(d, { recursive: true, force: true }); }
});

test('NONPROD SITE: a real build writes a full copy outside the repo and leaves exam/ untouched', () => {
  const before = hashTree(path.join(REPO, 'exam'));
  const d = tmp(), out = path.join(d, 'site');
  try {
    build({ api: API, out, root: REPO });
    assert.ok(!fs.existsSync(path.join(out, 'test')), 'exam/test is not copied');
    assert.ok(fs.existsSync(path.join(out, 'exam.css')) && fs.existsSync(path.join(out, 'js')));
    for (const f of fs.readdirSync(path.join(REPO, 'exam', 'js'))) {
      assert.ok(fs.readFileSync(path.join(out, 'js', f)).equals(fs.readFileSync(path.join(REPO, 'exam', 'js', f))), `js/${f} copied byte-for-byte`);
    }
    for (const page of ['index.html', 'rater.html']) {
      const html = fs.readFileSync(path.join(out, page), 'utf8');
      assert.ok(html.includes(`content="${API}"`) && !cspOf(html).includes('klarweg.in'), `${page} rewritten`);
    }
  } finally { fs.rmSync(d, { recursive: true, force: true }); }
  assert.equal(hashTree(path.join(REPO, 'exam')), before, 'repository exam/ unchanged');
});

test('NONPROD SITE: CLI refuses the production API and writes nothing', () => {
  const d = tmp(), out = path.join(d, 'site');
  try {
    const r = spawnSync(process.execPath, [TOOL, '--api', 'https://klarweg-access.klarweg-issue-reports-2026.workers.dev', '--out', out], { encoding: 'utf8' });
    assert.equal(r.status, 1);
    assert.match(r.stderr, /PRODUCTION/);
    assert.ok(!fs.existsSync(out), 'nothing written');
  } finally { fs.rmSync(d, { recursive: true, force: true }); }
});
