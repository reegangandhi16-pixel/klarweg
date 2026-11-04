/* SEO guards for every page in sitemap.xml (the indexable set):
   unique titles (≤ 70 chars) and descriptions (Google truncates long
   descriptions but does not penalise them, so only a floor is enforced), one <h1>, a canonical
   equal to the sitemap URL, valid JSON-LD, and the grammar syllabus
   reachable from the homepage and each level page. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const locs = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const fileOf = (loc) => { const rel = loc.slice(SITE_BASE.length + 1); return rel === '' ? 'index.html' : rel; };
const pages = locs.map((loc) => ({ loc, f: fileOf(loc), html: read(fileOf(loc)) }));
const one = (re, s) => (s.match(re) || [])[1];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"');

test('every indexable page has a unique title (15–70 chars) and description (≥ 50 chars)', () => {
  const titles = new Map(), descs = new Map();
  for (const { f, html } of pages) {
    const t = decode(one(/<title>([^<]*)<\/title>/, html) || '');
    const d = decode(one(/<meta name="description" content="([^"]*)"/, html) || '');
    assert.ok(t.length >= 15 && t.length <= 70, `${f}: title length ${t.length} "${t}"`);
    assert.ok(d.length >= 50, `${f}: description length ${d.length}`);
    assert.ok(!titles.has(t), `${f}: duplicate title with ${titles.get(t)}`);
    assert.ok(!descs.has(d), `${f}: duplicate description with ${descs.get(d)}`);
    titles.set(t, f); descs.set(d, f);
  }
});

test('every indexable page: canonical = sitemap URL, not noindex, exactly one <h1>', () => {
  for (const { loc, f, html } of pages) {
    assert.equal(one(/<link rel="canonical" href="([^"]+)"/, html), loc, `${f}: canonical`);
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/, `${f}: noindex`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${f}: <h1> count`);
  }
});

test('every JSON-LD block on an indexable page parses and carries @context', () => {
  for (const { f, html } of pages) {
    for (const [, raw] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      let obj;
      assert.doesNotThrow(() => { obj = JSON.parse(raw); }, `${f}: invalid JSON-LD`);
      assert.equal(obj['@context'], 'https://schema.org', `${f}: @context`);
      for (const li of obj.itemListElement || []) assert.ok(li.item.startsWith(SITE_BASE + '/'), `${f}: breadcrumb item ${li.item}`);
    }
  }
});

test('the grammar syllabus is linked from the homepage and every level roadmap', () => {
  assert.match(read('index.html'), /href="german-grammar\.html"/);
  for (const l of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    assert.match(read(`${l}.html`), new RegExp(`href="german-grammar\\.html#${l}"`), `${l}.html`);
  }
});
