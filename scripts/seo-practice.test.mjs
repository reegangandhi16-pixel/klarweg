/* SEO practice batch (November 2026): practice datasets, hub and publication wiring. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const { loadGuides, validateGuides, renderPractice, escapeHtml, CHAPTERS, PRACTICE_BATCHES } = await import('./build-seo-practice.mjs');
const guides = loadGuides();
const sitemap = read('sitemap.xml');
const allow = read('.github/pages-allowlist.txt').split(/\r?\n/);
const resource = read('resources.html');
const hub = read('practice/index.html');

test('exactly 150 distinct practice lessons, eight unique learner tasks each', () => {
  assert.equal(guides.length, 150);
  assert.equal(new Set(guides.map(x=>x.slug)).size,150);
  for (const g of guides) {
    assert.equal(g.examples.length, 4, g.slug);
    assert.equal(g.quiz.length, 4, g.slug);
    assert.ok(g.rule.length >= 80, g.slug);
    assert.ok(g.trap.length >= 35, g.slug);
    assert.equal(new Set(g.quiz.map(x=>x[0])).size,4,g.slug);
    for (const q of g.quiz) assert.ok(q.every(s=>s.length>=1),g.slug);
  }
});

test('all practice pages publicly registered, discoverable and directly accessible from hub', () => {
  assert.match(resource,/href="practice\/index\.html"/);
  assert.ok(allow.includes('practice/index.html'));
  assert.ok(sitemap.includes('<loc>https:\/\/klarweg.in\/practice\/index.html<\/loc>'));
  for (const g of guides) {
    const file='practice/'+g.slug+'.html';
    const html=read(file);
    assert.ok(allow.includes(file),file+' missing allowlist');
    assert.ok(sitemap.includes('<loc>https:\/\/klarweg.in\/'+file+'<\/loc>'),file+' missing sitemap');
    assert.ok(hub.includes('href="'+g.slug+'.html"'),file+' missing hub link');
    assert.ok(html.includes('href="../'+g.guide+'"'),file+' missing source-guide link');
    assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,file+' H1');
    assert.equal((html.match(/<details>/g)||[]).length,4,file+' answer keys');
    assert.ok(html.includes('<link rel="canonical" href="https://klarweg.in/'+file+'">'),file+' canonical');
    assert.doesNotMatch(html,/<meta name="robots" content="[^"]*noindex/,file+' noindex');
  }
});

// These checks catch stale edits, unsafe dataset paths and broken publication wiring.
const sourceGuides = loadGuides();
const generated = renderPractice(sourceGuides);
const jsonld = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));

test('practice output is reproducible; all source material and metadata remain distinct', () => {
  assert.equal(generated.size, 151);
  assert.deepEqual(fs.readdirSync(path.join(root, 'practice')).filter(f => f.endsWith('.html')).sort(), [...generated.keys()].map(f => path.basename(f)).sort(), 'no stale or orphaned practice pages');
  for (const [file, html] of generated) {
    assert.equal(read(file), html, `${file}: run npm run generate:practice`);
    assert.doesNotMatch(html, /\{\{\w+\}\}/);
  }
  for (const key of ['title', 'rule', 'trap']) assert.equal(new Set(guides.map(g => g[key])).size, 150, key);
  for (const key of ['examples', 'quiz']) assert.equal(new Set(guides.flatMap(g => g[key].map(x => x[0]))).size, 600, key);
});

test('generator rejects unsafe paths, missing answers, duplicate material and malformed gaps', () => {
  const check = (change, pattern) => {
    const copy = structuredClone(sourceGuides);
    change(copy);
    assert.throws(() => validateGuides(copy), pattern);
  };
  check(g => g[0].slug = '../private', /slug/);
  check(g => g[0].kind = 'unsupported', /practice kind/);
  check(g => g[0].guide = 'chapter/chapter-a1-2-data.js', /guide/);
  check(g => g[0].quiz[0][1] = '', /Invalid quiz/);
  check(g => g[1].examples[0] = g[0].examples[0], /Duplicate examples/);
  check(g => g[1].quiz[0] = g[0].quiz[0], /Duplicate quiz/);
  check(g => g[0].quiz[0][0] = 'No gap here', /one gap/);
  const copy = structuredClone(sourceGuides);
  copy[0].rule += ' <script>alert("x")</script> & more';
  const rendered = renderPractice(copy).get('practice/' + copy[0].slug + '.html');
  assert.ok(rendered.includes('&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; more'));
  assert.doesNotMatch(rendered, /<script>alert/);
  assert.equal(escapeHtml('<>&"\''), '&lt;&gt;&amp;&quot;&#39;');
});

test('all local practice links and assets resolve to allowlisted public files and valid fragments', () => {
  for (const [file, html] of generated) {
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length, file + ' duplicate id');
    for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const u = new URL(href, 'https://klarweg.in/' + file);
      if (u.hostname !== 'klarweg.in') continue;
      const target = u.pathname.slice(1);
      assert.ok(fs.existsSync(path.join(root, target)), `${file}: missing ${target}`);
      assert.ok(allow.includes(target) || allow.some(x => x.startsWith('GLOB:') && path.matchesGlob(target, x.slice(5))), `${file}: unpublished ${target}`);
      if (u.hash) assert.ok(read(target).includes('id="' + u.hash.slice(1) + '"'), `${file}: broken ${href}`);
    }
  }
});

test('lesson schema, metadata, chapter and related links match visible content', () => {
  const inbound = new Set();
  for (const g of sourceGuides) {
    const file = `practice/${g.slug}.html`, html = read(file), url = 'https://klarweg.in/' + file;
    const data = jsonld(html), resource = data.find(x => x['@type'] === 'LearningResource');
    assert.equal(resource.name, g.title);
    assert.equal(resource.educationalLevel, 'CEFR ' + g.level.toUpperCase());
    assert.equal(resource.isAccessibleForFree, true);
    assert.deepEqual(resource.inLanguage, ['en', 'de']);
    assert.equal(resource.url, url);
    assert.equal(resource.mainEntityOfPage, url);
    const crumbs = data.find(x => x['@type'] === 'BreadcrumbList').itemListElement;
    assert.equal(crumbs[1].item, 'https://klarweg.in/practice/index.html');
    assert.equal(crumbs.at(-1).item, url);
    assert.ok(html.includes(`property="og:url" content="${url}"`));
    assert.match(html, /name="twitter:card"/);
    assert.ok(html.includes('href="../' + CHAPTERS[g.level] + '"'));
    assert.ok(html.includes('Try ' + g.level.toUpperCase() + ' Chapter 1 free'));
    assert.equal((html.match(/<span class="de" lang="de">/g) || []).length, 4);
    const related = html.match(/aria-label="Related exercises">([\s\S]*?)<\/nav>/)[1];
    for (const [, slug] of related.matchAll(/href="([^"/]+)\.html"/g)) {
      assert.notEqual(slug, g.slug);
      assert.ok(sourceGuides.some(x => x.slug === slug && x.level === g.level));
      inbound.add(slug);
    }
  }
  assert.equal(inbound.size, 150, 'every lesson receives a contextual link from a peer');
});

test('hub schema enumerates exactly the 150 visible lessons, and the stylesheet is explicitly published', () => {
  const collection = jsonld(hub).find(x => x['@type'] === 'CollectionPage');
  assert.equal(collection.url, 'https://klarweg.in/practice/index.html');
  assert.equal(collection.mainEntity.numberOfItems, 150);
  assert.deepEqual(collection.mainEntity.itemListElement.map(x => x.url), sourceGuides.map(g => 'https://klarweg.in/practice/' + g.slug + '.html'));
  assert.ok(allow.includes('practice/practice.css'));
  assert.equal(allow.filter(x => x.startsWith('practice/')).length, 152, 'only 151 pages and shared CSS');
  assert.equal((resource.match(/id="free-grammar-practice"/g) || []).length, 1);
  assert.equal((resource.match(/<!-- PRACTICE50:START -->[\s\S]*?<!-- PRACTICE50:END -->/g) || []).length, 1);
  const css = read('practice/practice.css');
  assert.match(css, /--navy:#0f172a;--green:#1fa84b/);
  for (const hex of css.match(/#[\da-f]{6}/gi) || []) {
    const [r,g,b] = [1,3,5].map(i => parseInt(hex.slice(i,i+2), 16));
    assert.ok(!(r > 150 && r > g + 30 && g > b && b < 120), 'orange/amber family: ' + hex);
  }
});


test('a second 50-lesson batch extends the first without renaming its datasets', () => {
  assert.equal(PRACTICE_BATCHES.length, 3);
  assert.equal(guides.filter(g => g.batch === 'practice50').length, 50);
  assert.equal(guides.filter(g => g.batch === 'practice50-expansion').length, 50);
  assert.deepEqual(PRACTICE_BATCHES[0].sources.map(s => s.path), ['a1','a2','b1','b2'].map(l => `docs/seo/next50-practice-${l}.json`));
  const counts = Object.fromEntries(['a1','a2','b1','b2'].map(l => [l, guides.filter(g => g.level === l).length]));
  assert.deepEqual(counts, { a1: 32, a2: 44, b1: 46, b2: 28 });
  const additions = guides.filter(g => g.batch === 'practice50-expansion');
  assert.equal(new Set(additions.map(g => g.description)).size, 50);
  for (const g of additions) {
    assert.ok(g.description.length >= 100 && g.description.length <= 170, g.slug);
    assert.ok(g.instructions.length >= 40, g.slug);
  }
  assert.match(hub, /150 focused practice sets/);
  assert.match(resource, /Browse all 150 free German practice sets/);
});

test('batch inventory rejects repeated ids, unsafe sources and incorrect declared counts', () => {
  const check = (change, pattern) => {
    const copy = structuredClone(PRACTICE_BATCHES);
    change(copy);
    assert.throws(() => loadGuides(copy), pattern);
  };
  check(b => b[1].id = b[0].id, /batch id/);
  check(b => b[1].sources[0].path = '../private.json', /dataset path/);
  check(b => b[1].count = 49, /expected 49/);
  check(b => b[1].levels.a1 = 9, /unexpected a1/);
});


test('word-choice batch adds 50 distinct usage lessons with suitable headings and descriptions', () => {
  const usage = guides.filter(g => g.batch === 'word-choice50');
  assert.equal(usage.length, 50);
  assert.deepEqual(Object.fromEntries(['a1','a2','b1','b2'].map(l => [l, usage.filter(g => g.level === l).length])), { a1: 8, a2: 16, b1: 20, b2: 6 });
  for (const g of usage) {
    assert.equal(g.kind, 'word-choice');
    assert.ok(g.slug.endsWith('-word-choice-exercises'));
    const html = read(`practice/${g.slug}.html`);
    assert.match(html, />Understand the difference<\/h2>/);
    assert.match(html, />Practice: choose the right word<\/h2>/);
    assert.ok(html.includes(`<p class="lede">${escapeHtml(g.description)}</p>`));
    assert.ok(html.includes(escapeHtml(g.guideLabel)));
  }
  for (const g of guides.filter(g => g.kind !== 'word-choice')) {
    const html = read(`practice/${g.slug}.html`);
    assert.match(html, />Understand the rule<\/h2>/);
    assert.match(html, />Practice: fill in the gaps<\/h2>/);
  }
});
