/* Migration rehearsal: export the committed tree to a temp dir, run
   set-site-origin.mjs --write there, and check every published file.
   The real worktree is never modified. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('klarweg.in migration rewrites the site origin everywhere and nothing else', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-mig-'));
  try {
    execFileSync('sh', ['-c', `git -C "${ROOT}" archive HEAD | tar -x -C "${dir}"`]);
    const audioBefore = fs.readFileSync(path.join(dir, 'public/audio/kw-audio-engine.js'), 'utf8');
    const dry = execFileSync(process.execPath, [path.join(dir, 'scripts/set-site-origin.mjs'), '--to', 'https://klarweg.in']).toString();
    assert.match(dry, /WOULD UPDATE/);
    assert.equal(fs.readFileSync(path.join(dir, 'sitemap.xml'), 'utf8').includes('klarweg.in'), false, 'dry run writes nothing');

    execFileSync(process.execPath, [path.join(dir, 'scripts/set-site-origin.mjs'), '--to', 'https://klarweg.in', '--write']);
    const read = (f) => fs.readFileSync(path.join(dir, f), 'utf8');
    const published = ['index.html', 'a1.html', 'c2.html', 'courses.html', 'german-grammar.html', 'privacy.html', 'sitemap.xml', 'robots.txt', 'chapter/chapter-a1-1-alphabet.html'];
    for (const f of published) assert.ok(!/https:\/\/reegangandhi16-pixel\.github\.io\/klarweg(?=[/"'<\s]|$)/.test(read(f)), `${f} still has the old site base`);
    assert.match(read('index.html'), /<link rel="canonical" href="https:\/\/klarweg\.in\/">/);
    assert.match(read('a1.html'), /property="og:url" content="https:\/\/klarweg\.in\/a1\.html"/);
    assert.match(read('chapter/chapter-a1-1-alphabet.html'), /rel="canonical" href="https:\/\/klarweg\.in\/chapter\/chapter-a1-1-alphabet\.html"/);
    assert.match(read('robots.txt'), /^Sitemap: https:\/\/klarweg\.in\/sitemap\.xml$/m);
    assert.ok(!read('404.html').includes('"/klarweg/'), '404 project-path links re-pointed');
    assert.match(read('404.html'), /href="\/courses\.html"/);
    assert.match(read('scripts/site-origin.mjs'), /SITE_BASE = 'https:\/\/klarweg\.in'/);
    for (const m of read('index.html').matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
    assert.equal(fs.readFileSync(path.join(dir, 'public/audio/kw-audio-engine.js'), 'utf8'), audioBefore, 'audio engine untouched');
    // Workers are deliberately not rewritten (reviewed, separate deploy).
    assert.match(read('access/worker/src/cashfree-config.js'), /reegangandhi16-pixel\.github\.io\/klarweg/);
    // regenerated pages stay consistent with the new origin
    execFileSync(process.execPath, [path.join(dir, 'scripts/build-grammar-index.mjs'), '--check']);
    execFileSync(process.execPath, [path.join(dir, 'scripts/seo-chapter-meta.mjs'), '--check']);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
