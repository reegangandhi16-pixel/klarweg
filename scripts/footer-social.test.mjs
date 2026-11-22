import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { SOCIALS, SOCIAL_HTML, SOCIAL_CSS, applyFooterSocial } from './footer-social.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

test('official accounts, in order Instagram → Facebook → Threads', () => {
  assert.deepEqual(SOCIALS.map((s) => s.url), [
    'https://www.instagram.com/klarwegofficial/',
    'https://www.facebook.com/klarweg',
    'https://www.threads.com/@klarwegofficial',
  ]);
  const links = [...SOCIAL_HTML.matchAll(/<a [^>]+>/g)].map((m) => m[0]);
  assert.equal(links.length, 3);
  for (const [i, a] of links.entries()) {
    assert.match(a, new RegExp(`href="${SOCIALS[i].url.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}"`));
    assert.match(a, / target="_blank"/);
    assert.match(a, / rel="noopener noreferrer"/);
    assert.match(a, new RegExp(`aria-label="Klarweg on ${SOCIALS[i].name} \\(opens in a new tab\\)"`));
  }
  assert.equal((SOCIAL_HTML.match(/<svg [^>]*aria-hidden="true"/g) || []).length, 3, 'icons are decorative');
});

test('styles: 44px targets, no orange, reduced motion respected, no scale()', () => {
  assert.match(SOCIAL_CSS, /width: 44px; height: 44px/);
  assert.doesNotMatch(SOCIAL_CSS, /scale\(/);
  assert.match(SOCIAL_CSS, /prefers-reduced-motion/);
  for (const hex of SOCIAL_CSS.match(/#[0-9A-Fa-f]{6}\b/g)) {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    assert.ok(!(r > 180 && g > 60 && g < 170 && b < 90), `orange-ish colour ${hex}`);
  }
});

test('applyFooterSocial replaces the old placeholder icons and is idempotent', () => {
  const old = '<html><head><link rel="stylesheet" href="site.css"></head><body><footer><div class="footer-bottom"><div>©</div><div class="footer-socials">\n<a href="#" aria-label="Instagram">◯</a>\n<a href="#" aria-label="X">✕</a>\n</div></div></footer></body></html>';
  const once = applyFooterSocial(old);
  assert.ok(once.includes(SOCIAL_HTML));
  assert.doesNotMatch(once, /footer-socials|aria-label="X"|href="#"/);
  assert.equal(applyFooterSocial(once), once);
  const bare = '<html><head><style>p{}</style></head><body><footer class="footer">Klarweg</footer></body></html>';
  const filled = applyFooterSocial(bare);
  assert.match(filled, /<style>p\{\}<\/style>\n<style id="kw-social-css">[\s\S]*<\/style><\/head>/, 'inline CSS after the page style when no shared stylesheet');
  assert.equal(applyFooterSocial(filled), filled);
  const none = '<html><head></head><body><main></main></body></html>';
  assert.equal(applyFooterSocial(none), none, 'never adds a footer');
});

test('every committed page footer carries exactly one current social block', () => {
  const files = execFileSync('git', ['ls-files', '-z', '*.html'], { cwd: ROOT, encoding: 'utf8' }).split('\0')
    .filter((f) => f && !/^(uploads|docs|scripts|tmp|audit|report|deliverables|review-packages|react-lib|exam-content|exam-worker|access|tutor)\//.test(f));
  let footers = 0;
  for (const f of files) {
    const html = read(f);
    if (!/<footer(?:\s+class="footer")?>/.test(html)) continue;
    footers++;
    assert.equal(html.split(SOCIAL_HTML).length, 2, `${f}: one current social block`);
    assert.doesNotMatch(html, /class="footer-socials"/, `${f}: old placeholder icons removed`);
  }
  assert.ok(footers > 700, `expected the sitewide footers, found ${footers}`);
  for (const css of ['site.css', 'practice/practice.css']) assert.ok(read(css).includes(SOCIAL_CSS), css);
});
