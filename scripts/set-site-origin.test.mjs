/* Site origin (klarweg.in) consistency + switch/rollback rehearsal.
   scripts/site-origin.mjs is the one authority; every published URL,
   the sitemap, robots.txt and CNAME must agree with it. The rehearsal
   copies the working tree to a temp dir — the real tree is never modified. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OLD_BASE = 'https://reegangandhi16-pixel.github.io/klarweg';
const OLD_BASE_RE = /https:\/\/reegangandhi16-pixel\.github\.io\/klarweg(?=[/"'<\s]|$)/;
const AUDIO_CDN = 'https://reegangandhi16-pixel.github.io/klarweg-audio-cdn/';
const read = (f, dir = ROOT) => fs.readFileSync(path.join(dir, f), 'utf8');

/* The published file list, with the same semantics as deploy-pages.yml. */
function allowlist() {
  return read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
}
function publishedFiles() {
  const out = [];
  for (const l of allowlist()) {
    if (!l.startsWith('GLOB:')) { out.push(l); continue; }
    const pat = l.slice(5), dir = path.dirname(pat);
    const re = new RegExp('^' + path.basename(pat).replace(/[.]/g, '\\.').replace('*', '.*') + '$');
    fs.readdirSync(path.join(ROOT, dir)).filter((f) => re.test(f)).forEach((f) => out.push(dir + '/' + f));
  }
  return out;
}
const pageUrl = (rel) => SITE_BASE + '/' + (rel === 'index.html' ? '' : rel);

test('the site origin is klarweg.in at the domain root', () => {
  assert.equal(SITE_BASE, 'https://klarweg.in');
  assert.equal(new URL(SITE_BASE + '/').pathname, '/');
});

test('CNAME names the SITE_BASE host and is in the Pages artifact', () => {
  assert.equal(read('CNAME'), new URL(SITE_BASE).hostname + '\n');
  assert.ok(allowlist().includes('CNAME'), 'CNAME is allowlisted');
});

test('published pages declare canonical/OG/Twitter/JSON-LD URLs on SITE_BASE only', () => {
  const html = publishedFiles().filter((f) => f.endsWith('.html'));
  assert.equal(html.filter((f) => f.startsWith('chapter/')).length, 258, '258 chapter pages published');
  let canon = 0;
  for (const rel of html) {
    const src = read(rel);
    assert.ok(!OLD_BASE_RE.test(src), `${rel} still has the github.io site base`);
    assert.ok(!/(href|src|action)="\/klarweg[/"]/.test(src), `${rel} has a /klarweg/ root path`);
    const c = src.match(/<link rel="canonical" href="([^"]+)">/);
    if (c) { canon++; assert.equal(c[1], pageUrl(rel), `${rel} canonical is its own URL`); }
    const og = src.match(/property="og:url" content="([^"]+)"/);
    if (og) assert.equal(og[1], pageUrl(rel), `${rel} og:url`);
    for (const m of src.matchAll(/(?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
      assert.ok(m[1].startsWith(SITE_BASE + '/'), `${rel} share image on SITE_BASE`);
      assert.ok(fs.existsSync(path.join(ROOT, m[1].slice(SITE_BASE.length + 1))), `${rel} share image exists`);
    }
    for (const m of src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      JSON.parse(m[1]);
      for (const u of m[1].match(/https:\/\/[^"\s]+/g) || []) {
        if (u.startsWith('https://schema.org')) continue;
        assert.ok(u.startsWith(SITE_BASE + '/') || u === SITE_BASE, `${rel} JSON-LD URL ${u}`);
      }
    }
  }
  assert.ok(canon >= 24, 'indexable pages keep their canonical tags');
});

test('only 404.html uses root-relative paths, and they point at the domain root', () => {
  for (const rel of publishedFiles().filter((f) => f.endsWith('.html') && f !== '404.html')) {
    assert.ok(!/(href|src|action)="\/(?!\/)/.test(read(rel)), `${rel} uses a root-relative path (breaks if the base path changes)`);
  }
  for (const m of read('404.html').matchAll(/(?:href|src)="(\/[^/"][^"]*)"/g)) {
    assert.ok(fs.existsSync(path.join(ROOT, m[1].slice(1))), `404.html → ${m[1]} exists at the domain root`);
  }
});

test('sitemap and robots.txt agree with SITE_BASE and the canonical pages', () => {
  const published = new Set(publishedFiles());
  const locs = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length >= 24);
  const canonical = new Set(publishedFiles().filter((f) => f.endsWith('.html') && /<link rel="canonical"/.test(read(f))));
  for (const loc of locs) {
    assert.ok(loc.startsWith(SITE_BASE + '/'), `sitemap ${loc}`);
    const rel = loc.slice(SITE_BASE.length + 1) || 'index.html';
    assert.ok(published.has(rel), `sitemap ${loc} is a published file`);
    assert.ok(canonical.has(rel), `sitemap ${loc} is a canonical page`);
  }
  assert.equal(new Set(locs).size, canonical.size, 'every canonical page is in the sitemap');
  assert.match(read('robots.txt'), new RegExp('^Sitemap: ' + SITE_BASE.replace(/\./g, '\\.') + '/sitemap\\.xml$', 'm'));
});

test('published runtime JS has no /klarweg/ path assumptions; audio CDN unchanged', () => {
  for (const rel of publishedFiles().filter((f) => f.endsWith('.js'))) {
    const src = read(rel);
    assert.ok(!OLD_BASE_RE.test(src), `${rel} has the github.io site base`);
    // Block comments may still describe the old "/klarweg/…" paths; code may not.
    assert.ok(!/["'`]\/klarweg\//.test(src.replace(/\/\*[\s\S]*?\*\//g, '')), `${rel} has a /klarweg/ path literal`);
  }
  // The audio CDN is a separate repo/Pages site; the domain move leaves it alone.
  assert.ok(read('public/audio/kw-audio-engine.js').includes(AUDIO_CDN));
});

test('the origin switch is reversible (rollback rehearsal in a temp copy)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-origin-'));
  try {
    const files = execFileSync('git', ['-C', ROOT, 'ls-files', '-z']).toString().split('\0').filter((f) => f && fs.existsSync(path.join(ROOT, f)));
    files.push('CNAME');
    for (const f of new Set(files)) { fs.mkdirSync(path.join(dir, path.dirname(f)), { recursive: true }); fs.copyFileSync(path.join(ROOT, f), path.join(dir, f)); }
    const run = (to, write) => execFileSync(process.execPath, [path.join(dir, 'scripts/set-site-origin.mjs'), '--to', to, ...(write ? ['--write'] : [])]).toString();

    assert.match(run(SITE_BASE, false), /WOULD UPDATE 0 files/, 'tree is already fully on SITE_BASE');
    run(OLD_BASE, true);
    assert.match(read('index.html', dir), /<link rel="canonical" href="https:\/\/reegangandhi16-pixel\.github\.io\/klarweg\/">/);
    assert.match(read('404.html', dir), /href="\/klarweg\/courses\.html"/);
    assert.match(read('robots.txt', dir), /^Sitemap: https:\/\/reegangandhi16-pixel\.github\.io\/klarweg\/sitemap\.xml$/m);
    execFileSync(process.execPath, [path.join(dir, 'scripts/build-grammar-index.mjs'), '--check']);
    execFileSync(process.execPath, [path.join(dir, 'scripts/seo-chapter-meta.mjs'), '--check']);

    run(SITE_BASE, true);
    for (const f of new Set(files)) {
      if (fs.readFileSync(path.join(dir, f)).compare(fs.readFileSync(path.join(ROOT, f))) !== 0) assert.fail(`${f} differs after switch + switch back`);
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
