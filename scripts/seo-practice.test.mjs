/* SEO practice batch (November 2026): 50 unique exercises, hub and publication wiring. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const guides = ['a1','a2','b1','b2'].flatMap(l => JSON.parse(read('docs/seo/next50-practice-'+l+'.json')));
const sitemap = read('sitemap.xml');
const allow = read('.github/pages-allowlist.txt').split(/\r?\n/);
const resource = read('resources.html');
const hub = read('practice/index.html');

test('exactly 50 distinct practice lessons, eight unique learner tasks each', () => {
  assert.equal(guides.length, 50);
  assert.equal(new Set(guides.map(x=>x.slug)).size,50);
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
