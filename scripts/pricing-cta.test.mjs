// Static guards for the roadmap pricing card + brand-green CTAs (PR #291 and follow-up).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const rule = (src, sel) => {
  const i = src.indexOf('\n' + sel + ' {');
  assert.ok(i >= 0, `missing rule ${sel}`);
  return src.slice(i, src.indexOf('}', i) + 1);
};
const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

for (const lvl of LEVELS) {
  test(`${lvl}.html: Lifetime "Limited Time" badge is not clipped by the card`, () => {
    const src = read(`${lvl}.html`);
    // The badge is ::before translated half above the card edge; .price-card
    // clips overflow, so the Lifetime card must opt out or the badge's top half is cut off.
    assert.match(rule(src, '.price-card'), /overflow: hidden;/);
    assert.match(rule(src, '.price-card.center'), /overflow: visible;/);
    assert.match(rule(src, '.price-card.center::before'), /content: 'Limited Time';/);
  });

  test(`${lvl}.html: Try Chapter 1 + Lifetime unlock use the brand CTA green`, () => {
    const src = read(`${lvl}.html`);
    assert.match(src, /--cta-green:\s+#1FA84B;/);
    assert.match(rule(src, '.btn-primary.btn-cta-green'), /background: var\(--cta-green\);/);
    assert.equal((src.match(/class="btn btn-primary btn-cta-green js-nav-cta"/g) || []).length, 2);
    assert.match(src, /class="btn btn-primary btn-cta-green" data-kw-buy="LIFETIME"/);
  });
}

test('courses.html: "Start with A1" uses the shared brand CTA green class', () => {
  assert.match(read('courses.html'), /<a href="a1\.html" class="btn btn-primary btn-cta-green">Start with A1/);
  const css = read('site.css');
  assert.match(css, /--cta-green: #1FA84B;/);
  assert.match(css, /\.btn-primary\.btn-cta-green \{ background: var\(--cta-green\); \}/);
});
