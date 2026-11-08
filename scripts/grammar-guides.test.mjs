/* Free grammar guides (grammar/*.html): published, indexable, linked,
   self-contained, and never a doorway into locked content. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE } from './site-origin.mjs';
import { GUIDES } from './grammar-guides/guides.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const allow = read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const published = (rel) => allow.includes(rel) || allow.some((l) => l.startsWith('GLOB:') && new RegExp('^' + l.slice(5).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*').replace(/\?/g, '.') + '$').test(rel));
const pages = GUIDES.map((g) => ({ g, rel: `grammar/${g.slug}.html`, html: read(`grammar/${g.slug}.html`) }));
const lds = (html) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));

test('every guide is allowlisted, in the sitemap, canonical, and indexable', () => {
  const sitemap = read('sitemap.xml');
  for (const { rel, html } of pages) {
    const url = `${SITE_BASE}/${rel}`;
    assert.ok(allow.includes(rel), `${rel} allowlisted`);
    assert.ok(sitemap.includes(`<loc>${url}</loc>`), `${rel} in sitemap`);
    assert.match(html, new RegExp(`<link rel="canonical" href="${url.replace(/\./g, '\\.')}">`), `${rel} canonical`);
    assert.doesNotMatch(html, /name="robots"/, `${rel} has no robots meta`);
  }
});

test('every local link and asset on a guide resolves to a published file and an existing anchor', () => {
  for (const { rel, html } of pages) {
    for (const [, attr, url] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
      const [file, anchor] = url.split('#');
      const target = file ? path.posix.normalize(path.posix.join(path.posix.dirname(rel), file.split('?')[0])) : rel;
      assert.ok(!target.startsWith('..'), `${rel}: ${url} leaves the site`);
      assert.ok(published(target) || target === rel, `${rel}: ${attr}="${url}" is not a published file`);
      if (anchor && target.endsWith('.html')) assert.ok(read(target).includes(`id="${anchor}"`), `${rel}: #${anchor} missing in ${target}`);
    }
  }
});

test('guides link only to free chapters, never to locked ones', () => {
  for (const { rel, html } of pages) {
    for (const [, ch] of html.matchAll(/href="[^"]*chapter\/(chapter-[^"#?]+\.html)/g)) {
      assert.match(ch, /^chapter-[abc][12]-0?1-/, `${rel} links locked chapter ${ch}`);
    }
  }
});

test('guides load no analytics, tracking or placement scripts', () => {
  for (const { rel, html } of pages) {
    assert.doesNotMatch(html, /gtag|googletagmanager|google-analytics|analytics\.js|clarity\.ms|facebook\.net|hotjar/i, rel);
    const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(scripts, ['../site.js', '../kw-config.js', '../kw-auth.js', '../kw-nav-auth.js?v=2'], `${rel} scripts`);
  }
});

test('each guide is a complete lesson: tables, mistakes, exercises with answers, German and Hindi marked up', () => {
  for (const { rel, html } of pages) {
    const exercises = (html.match(/<ol class="exercises">([\s\S]*?)<\/ol>/g) || []).join('');
    const items = (exercises.match(/<li>/g) || []).length;
    const answers = (exercises.match(/<details>/g) || []).length;
    assert.ok(items >= 10, `${rel}: ${items} exercises`);
    assert.equal(answers, items, `${rel}: every exercise has an answer`);
    assert.ok((html.match(/<table class="gg-table">/g) || []).length >= 2, `${rel}: tables`);
    assert.ok((html.match(/<ol class="mistakes">[\s\S]*?<\/ol>/)?.[0].match(/<li>/g) || []).length >= 5, `${rel}: common mistakes`);
    assert.ok((html.match(/lang="de"/g) || []).length >= 50, `${rel}: German marked lang="de"`);
    assert.ok((html.match(/lang="hi"/g) || []).length >= 3, `${rel}: Hindi marked lang="hi"`);
    assert.match(html, /href="\.\.\/a1\.html"/, `${rel}: links the A1 course`);
    assert.match(html, /href="\.\.\/german-grammar\.html/, `${rel}: links the syllabus`);
  }
});

test('structured data: breadcrumb to the syllabus and a free Article, matching the page', () => {
  for (const { g, rel, html } of pages) {
    const [crumbs, article] = lds(html).filter((o) => ['BreadcrumbList', 'Article'].includes(o['@type']));
    assert.equal(crumbs['@type'], 'BreadcrumbList');
    assert.deepEqual(crumbs.itemListElement.map((i) => i.item), [`${SITE_BASE}/`, `${SITE_BASE}/german-grammar.html`, `${SITE_BASE}/${rel}`]);
    assert.equal(article['@type'], 'Article');
    assert.equal(article.isAccessibleForFree, true);
    assert.equal(article.url, `${SITE_BASE}/${rel}`);
    assert.equal(article.description, g.description);
    assert.doesNotMatch(JSON.stringify(article), /aggregateRating|review|offers|price/i, `${rel}: no ratings or prices`);
  }
});

test('the grammar syllabus links every guide, from the hero and from its chapter row', () => {
  const idx = read('german-grammar.html');
  for (const g of GUIDES) {
    assert.ok((idx.match(new RegExp(`href="grammar/${g.slug}\\.html"`, 'g')) || []).length >= 2, g.slug);
  }
});

test('the guide hub (grammar/index.html) lists every guide once, is published, and is linked from the syllabus', () => {
  const hub = read('grammar/index.html');
  for (const g of GUIDES) {
    assert.equal((hub.match(new RegExp(`href="${g.slug}\\.html"`, 'g')) || []).length, 1, g.slug);
  }
  assert.match(hub, new RegExp(`<link rel="canonical" href="${SITE_BASE}/grammar/index\\.html">`));
  assert.doesNotMatch(hub, /<footer/, 'hub ships without a footer');
  assert.ok(read('.github/pages-allowlist.txt').split('\n').includes('grammar/index.html'), 'allowlisted');
  assert.ok(read('sitemap.xml').includes(`${SITE_BASE}/grammar/index.html`), 'in sitemap');
  assert.match(read('german-grammar.html'), /href="grammar\/index\.html"/);
  const lds = [...hub.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const items = lds.find((o) => o['@type'] === 'CollectionPage');
  assert.equal(items.mainEntity.numberOfItems, GUIDES.length);
});
