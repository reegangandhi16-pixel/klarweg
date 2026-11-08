// Regression guards for the independently reviewed B1/B2 receptive-module cluster.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const files = ['b1-lesen', 'b1-hoeren', 'b2-lesen', 'b2-hoeren', 'b2-exam-preparation'].map(f => `goethe/${f}.html`);
const chapters = { b1: 'chapter-b1-1-infinitiv-mit-zu.html', b2: 'chapter-b2-01-erweiterte-satzklammer.html' };
const strip = s => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const review = read('docs/seo/GOETHE-B1-B2-MODULES-2026-11.md');
const referenceBytes = Buffer.byteLength(read('goethe/b1-exam.html'));
const allow = read('.github/pages-allowlist.txt').split(/\r?\n/);
const sitemap = read('sitemap.xml');
for (const f of files) {
  const src = read(f), level = f.includes('/b1-') ? 'b1' : 'b2';
  test(`${f}: discoverable, canonical and generated structured data`, () => {
    assert.ok(allow.includes(f));
    assert.ok(sitemap.includes(`<loc>${SITE_BASE}/${f}</loc>`));
    assert.ok(read('scripts/seo-structured-data.mjs').includes(`['${f}',`));
    assert.ok(src.includes(`<link rel="canonical" href="${SITE_BASE}/${f}">`));
    assert.equal((src.match(/<h1\b/g) || []).length, 1);
    const title = src.match(/<title>([^<]+)<\/title>/)[1];
    const description = src.match(/<meta name="description" content="([^"]+)"/)[1];
    assert.ok(title.length >= 15 && title.length <= 70);
    assert.ok(description.length >= 50);
    for (const other of files.filter(x => x !== f)) {
      assert.ok(!read(other).includes(`<title>${title}</title>`));
      assert.ok(!read(other).includes(`name="description" content="${description}"`));
    }
    const objects = [...src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    for (const type of ['BreadcrumbList', 'Article']) assert.equal(objects.filter(o => o['@type'] === type).length, 1);
    assert.ok(objects.every(o => o['@context'] === 'https://schema.org'));
    const article = objects.find(o => o['@type'] === 'Article');
    assert.equal(article.url, `${SITE_BASE}/${f}`);
    assert.equal(article.description, description.replace(/&amp;/g, '&').replace(/&quot;/g, '"'));
    assert.ok(!objects.some(o => o['@type'] === 'FAQPage'));
  });
  test(`${f}: useful navigation, factual CTAs and original practice boundary`, () => {
    assert.ok(src.includes(`href="../${level}.html"`));
    assert.ok(src.includes(`href="../chapter/${chapters[level]}"`));
    const nav = src.match(/<nav class="kg-module-nav"[\s\S]*?<\/nav>/)?.[0];
    assert.ok(nav);
    for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) {
      const target = `${level}-${m}.html`;
      if (f.endsWith('/' + target)) assert.match(nav, /aria-current="page"/);
      else assert.ok(nav.includes(`href="${target}"`));
    }
    const overview = level === 'b1' ? 'b1-exam.html' : 'b2-exam-preparation.html';
    if (!f.endsWith('/' + overview)) assert.ok(nav.includes(`href="${overview}"`));
    const sources = src.slice(src.indexOf('<h2 id="sources">'), src.indexOf('</main>'));
    assert.match(sources, /href="https:\/\/www\.goethe\.de\//);
    assert.match(src, /class="kg-meta">Checked against[^<]*Last checked/);
    assert.ok(src.includes('Klarweg is an independent learning platform and is not affiliated with or endorsed by the Goethe-Institut.'));
    assert.doesNotMatch(src, /₹|lifetime|lesen-practice|<audio\b|<script\b[^>]*\bsrc\s*=/i);
    assert.equal((src.match(/<script\b/g) || []).length, 2, 'only generated JSON-LD scripts');
    if (!f.includes('exam-preparation')) {
      const count = f.includes('hoeren') ? 4 : 5;
      assert.equal((src.match(/<details>/g) || []).length, count, 'an answer key per part');
      assert.match(src, /not official exam items|not official recordings/);
    }
  });
  test(`${f}: accessible tables, language tags, valid links and size budget`, () => {
    for (const [, table] of src.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)) {
      assert.match(table, /<th scope="col">/);
      assert.match(table, /<caption>/);
    }
    for (const [, attrs] of src.matchAll(/<(?:span|p)\b([^>]*\bclass="[^"]*\bde\b[^"]*"[^>]*)>/g)) assert.match(attrs, /lang="de"/);
    for (const [, href] of src.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      const target = path.resolve(ROOT, path.dirname(f), href);
      assert.ok(fs.existsSync(target), `${f}: broken local link ${href}`);
    }
    assert.ok(Buffer.byteLength(src) <= referenceBytes * 1.3, `${f}: exceeds 130% reference budget`);
    assert.match(src, /prefers-reduced-motion/);
    assert.match(src, /\.kg p, \.kg li \{ font-size: 17px; \}/);
    assert.match(src, /min-height: 44px/);
    assert.match(src, /class="skip-link" href="#main"/);
    // Every German/Hindi example and answer must be exported for academic review.
    for (const [, attrs, raw] of src.matchAll(/<(?:span|p)\b([^>]*\blang="(?:de|hi)"[^>]*)>([\s\S]*?)<\/(?:span|p)>/g)) {
      const text = strip(raw);
      assert.ok((review.includes(`- [ ] ${text}`) || review.includes(`- [x] ${text}`)), `missing review entry: ${text}`);
    }
  });
}
test('level overview pages link every module; academic review record exists', () => {
  for (const level of ['b1', 'b2']) {
    const src = read(`goethe/${level === 'b1' ? 'b1-exam' : 'b2-exam-preparation'}.html`);
    for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) assert.ok(src.includes(`href="${level}-${m}.html"`));
  }
  assert.match(review, /^NOT READY TO MERGE until the German and Hindi checklists are signed off by the owner's reviewers\./);
  assert.match(review, /German reviewer:/);
  assert.match(review, /Hindi reviewer:/);
});
