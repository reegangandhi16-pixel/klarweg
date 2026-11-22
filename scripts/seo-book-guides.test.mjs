import fs from 'node:fs';
import { SOCIAL_HTML } from './footer-social.mjs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {loadBookGuides, renderBookGuides, validateBookGuides, BOOK_SOURCE, BOOK_HUB, BOOK_SERIES, BOOK_LEVELS} from './build-book-answer-guides.mjs';
import {SITE_BASE} from './site-origin.mjs';
const root = new URL('../', import.meta.url), read = f => fs.readFileSync(new URL(f, root), 'utf8');
const rows = loadBookGuides(), generated = renderBookGuides(rows);
const allow = read('.github/pages-allowlist.txt').split(/\r?\n/), sitemap = read('sitemap.xml');
const blocks = s => [...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

test('book generator covers the complete twelve-book matrix without split-volume duplicate pages', () => {
  assert.equal(generated.size, 13);
  for (const series of BOOK_SERIES) for (const level of BOOK_LEVELS) assert.equal(rows.filter(g => g.series === series && g.level === level).length, 2);
  for (const [file, s] of generated) assert.equal(read(file), s, file);
  assert.ok(!allow.includes(BOOK_SOURCE));
  assert.deepEqual(fs.readdirSync(new URL('book-answers/', root)).sort(), rows.map(g => path.basename(g.path)).sort());
  const hub = read(BOOK_HUB), collection = blocks(hub).find(x => x['@type'] === 'CollectionPage');
  assert.equal(collection.mainEntity.numberOfItems, 12);
  assert.deepEqual(collection.mainEntity.itemListElement.map(x => x.url), rows.map(g => SITE_BASE + '/' + g.path));
  rows.forEach(g => assert.ok(hub.includes('href="' + g.path + '"')));
});

test('resource selection preserves public PDFs and publisher registration without bypass links', () => {
  assert.equal(rows.flatMap(g => g.resources).filter(r => r.status === 'public-pdf').length, 9);
  assert.equal(rows.flatMap(g => g.resources).filter(r => r.status === 'registration').length, 12);
  for (const g of rows) {
    const s = read(g.path);
    const resources = s.slice(s.indexOf('id="downloads"'), s.indexOf('id="method"'));
    assert.equal((resources.match(/class="btn[^\"]* ba-source"/g) || []).length, g.resources.length);
    if (g.series === 'netzwerk-neu') {
      assert.match(resources, /Publisher registration required/);
      assert.match(resources, /not a direct PDF/);
      assert.doesNotMatch(s, /href="[^\"]*\/downloads?\//);
      assert.doesNotMatch(resources, /Open official PDF/);
    } else assert.match(resources, /Open official PDF/);
    assert.doesNotMatch(s, /<a[^>]+\sdownload(?:\s|=|>)/);
    assert.doesNotMatch(s, /<script[^>]+src=|<form\b|kw-auth|kw-enrol|data-kw-buy|<iframe\b|<audio\b/);
    /* the sitewide footer social links are the only other external links */
    for (const [,href] of s.replace(SOCIAL_HTML, '').matchAll(/href="(https:[^\"]+)"/g)) {
      const u = new URL(decode(href));
      assert.ok([new URL(SITE_BASE).hostname, 'www.klett-sprachen.de'].includes(u.hostname));
    }
  }
});

test('book metadata and structured data describe the free guide, with one canonical and no ranking claims', () => {
  const titles = new Set(), descriptions = new Set();
  for (const [file, s] of generated) {
    const canonical = SITE_BASE + '/' + file;
    assert.ok(allow.includes(file)); assert.ok(sitemap.includes('<loc>' + canonical + '</loc>'));
    assert.equal((s.match(/<h1\b/g) || []).length, 1);
    assert.equal((s.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(s.includes('rel="canonical" href="' + canonical + '"'));
    const title = decode(s.match(/<title>([^<]+)<\/title>/)[1]);
    const description = decode(s.match(/name="description" content="([^"]+)"/)[1]);
    assert.ok(title.length <= 70); assert.ok(description.length >= 100 && description.length <= 170);
    assert.ok(!titles.has(title)); titles.add(title); assert.ok(!descriptions.has(description)); descriptions.add(description);
    assert.equal(decode(s.match(/property="og:description" content="([^"]+)"/)[1]), description);
    assert.equal(decode(s.match(/name="twitter:description" content="([^"]+)"/)[1]), description);
    assert.doesNotMatch(s, /noindex|100%|guaranteed rank|human-written|native-reviewed/i);
    const article = blocks(s).find(x => ['Article','CollectionPage'].includes(x['@type']));
    assert.equal(article.url, canonical); assert.equal(article.description, description);
    assert.ok(article.isAccessibleForFree); assert.equal(article.publisher.name, 'Klarweg');
    assert.match(s, /AI assist|AI-assisted/);
  }
});

test('generator rejects swapped components, unsafe routes, mirror PDFs and anonymous gated-key fallbacks', () => {
  const bad = (change, pattern) => {const copy = structuredClone(rows); change(copy); assert.throws(() => validateBookGuides(copy), pattern);};
  bad(g => g.pop(), /twelve/); bad(g => g[1] = g[0], /duplicate/);
  bad(g => g[0].path = '../exam/index.html', /Unsafe/);
  bad(g => g[6].component = 'arbeitsbuch', /component/);
  bad(g => g[0].resources[0].url = 'https://thelanguageoffice.com/file.pdf', /PDF source/);
  bad(g => g[0].resources[0].url = 'https://www.klett-sprachen.de/downloads/6901/loesungen-zum-kursbuch-a2/pdf', /match book/);
  bad(g => g[6].resources[0].url = 'https://www.klett-sprachen.de/download/22310/old.pdf', /publisher access/);
  bad(g => g[6].resources[0].status = 'public-pdf', /publisher access/);
  bad(g => g[1].resources[0].chapters = '1–12', /chapter coverage/);
  bad(g => g[0].method[0] = ['one'], /Malformed/);
  const copy = structuredClone(rows); copy[0].intro += '<script>alert(1)</script>';
  const s = renderBookGuides(copy).get(copy[0].path); assert.ok(s.includes('&lt;script&gt;')); assert.doesNotMatch(s, /<script>alert/);
});

test('book links, fragments and assets resolve to explicit public files, with navy and green styles', () => {
  for (const [file, s] of generated) {
    const ids = [...s.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]); assert.equal(new Set(ids).size, ids.length);
    for (const [,h] of s.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const u = new URL(decode(h), SITE_BASE + '/' + file); if (u.origin !== SITE_BASE) continue;
      const target = u.pathname.slice(1) || 'index.html';
      assert.ok(fs.existsSync(new URL(target, root)), file + ': ' + h);
      assert.ok(allow.includes(target) || allow.some(p => p.startsWith('GLOB:') && path.matchesGlob(target, p.slice(5))), target);
      if (u.hash) assert.ok(read(target).includes('id="' + u.hash.slice(1) + '"'), file + ': ' + h);
    }
  }
  for (const file of ['resources.html', 'german-books-for-beginners.html', 'free-german-learning-pdfs.html']) assert.ok(read(file).includes('href="' + BOOK_HUB + '"'));
  const css = read('book-answers.css'); assert.match(css, /#0f172a/); assert.match(css, /#1fa84b/);
  for (const hex of css.match(/#[\da-f]{6}/gi) || []) {const [r,g,b] = [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)); assert.ok(!(r > 150 && r > g + 30 && g > b && b < 120), 'orange ' + hex);}
});
