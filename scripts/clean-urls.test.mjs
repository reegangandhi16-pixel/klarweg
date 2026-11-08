/* scripts/clean-urls.mjs: the published artifact advertises extensionless
   URLs, only for pages that exist, and the repo itself is never rewritten. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { rewrite, cleanPath } from './clean-urls.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const B = 'https://klarweg.in';
const pub = new Set(['index.html', 'a1.html', 'about.html', 'grammar/index.html', 'grammar/dativ.html', 'chapter/chapter-a1-1-alphabet.html', 'account/index.html']);
const exists = (p) => pub.has(p);

test('cleanPath', () => {
  assert.equal(cleanPath('index.html'), '');
  assert.equal(cleanPath('grammar/index.html'), 'grammar/');
  assert.equal(cleanPath('grammar/dativ.html'), 'grammar/dativ');
});

test('absolute URLs: canonical, JSON-LD, sitemap', () => {
  assert.equal(rewrite(`<link rel="canonical" href="${B}/a1.html">`, 'a1.html', exists), `<link rel="canonical" href="${B}/a1">`);
  assert.equal(rewrite(`"item": "${B}/grammar/dativ.html"`, 'x.html', exists), `"item": "${B}/grammar/dativ"`);
  assert.equal(rewrite(`<loc>${B}/index.html</loc><loc>${B}/grammar/index.html</loc>`, 'sitemap.xml', exists), `<loc>${B}/</loc><loc>${B}/grammar/</loc>`);
  assert.equal(rewrite(`"${B}/missing.html"`, 'x.html', exists), `"${B}/missing.html"`, 'unknown page untouched');
  assert.equal(rewrite(`"${B}/a1.html#pricing"`, 'x.html', exists), `"${B}/a1#pricing"`);
});

test('relative <a> links resolve against the file and keep ?/#', () => {
  const r = (html, f) => rewrite(html, f, exists);
  assert.equal(r('<a href="a1.html#pricing">', 'about.html'), '<a href="a1#pricing">');
  assert.equal(r('<a class="x" href="../index.html">', 'grammar/dativ.html'), '<a class="x" href="../">');
  assert.equal(r('<a href="index.html">', 'about.html'), '<a href="./">');
  assert.equal(r('<a href="dativ.html">', 'grammar/index.html'), '<a href="dativ">');
  assert.equal(r('<a href="../chapter/chapter-a1-1-alphabet.html?x=1">', 'grammar/dativ.html'), '<a href="../chapter/chapter-a1-1-alphabet?x=1">');
  assert.equal(r('<a href="/account/index.html">', 'about.html'), '<a href="/account/">');
  for (const keep of ['<a href="nope.html">', '<a href="https://goethe.de/x.html">', '<a href="#a.html">', '<a href="file.pdf">', '<link rel="stylesheet" href="a1.html">'])
    assert.equal(r(keep, 'about.html'), keep, keep);
  assert.equal(r('<a href="a1.html">', 'sitemap.xml'), '<a href="a1.html">', 'relative links only in HTML');
});

test('the real artifact advertises no .html page URL and the repo is unchanged', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kw-clean-'));
  try {
    const before = execFileSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' });
    execFileSync('bash', [path.join(ROOT, 'scripts/site-artifact.sh'), path.join(tmp, 'art')], { cwd: ROOT, stdio: 'ignore' });
    assert.equal(execFileSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' }), before, 'repo untouched');
    const art = path.join(tmp, 'art');
    const sitemap = fs.readFileSync(path.join(art, 'sitemap.xml'), 'utf8');
    assert.doesNotMatch(sitemap, /\.html</);
    const idx = fs.readFileSync(path.join(art, 'index.html'), 'utf8');
    assert.match(idx, /<link rel="canonical" href="https:\/\/klarweg\.in\/">/);
    const dativ = fs.readFileSync(path.join(art, 'grammar/dativ.html'), 'utf8');
    assert.match(dativ, /rel="canonical" href="https:\/\/klarweg\.in\/grammar\/dativ"/);
    assert.doesNotMatch(dativ, /https:\/\/klarweg\.in\/[\w\/.-]+\.html/);
    assert.equal(execFileSync('node', [path.join(ROOT, 'scripts/clean-urls.mjs'), art, '--check'], { encoding: 'utf8' }).includes('"changed":0'), true, 'idempotent');
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});
