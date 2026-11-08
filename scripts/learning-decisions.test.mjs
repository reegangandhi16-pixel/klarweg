import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {planStudy} from '../german-study-planner.js';
const read=f=>fs.readFileSync(new URL('../'+f,import.meta.url),'utf8');
test('study timetable uses clock hours, handles fractions and rounds weeks up',()=>{
 assert.deepEqual(planStudy(120,6),{hours:120,weekly:6,weeks:20});
 assert.equal(planStudy(120,3).weeks,40);
 assert.equal(planStudy(120,10).weeks,12);
 assert.equal(planStudy(10,3).weeks,4);
 assert.equal(planStudy(1.5,0.5).weeks,3);
 assert.equal(planStudy(1,2).weeks,1);
});
test('invalid or unbounded study budgets cannot produce a misleading result',()=>{
 for(const v of [0,-1,NaN,Infinity,undefined,'120',10001])assert.equal(planStudy(v,6),null);
 for(const v of [0,-1,NaN,Infinity,undefined,'6',169])assert.equal(planStudy(120,v),null);
 assert.ok(planStudy(10000,168));
 assert.doesNotMatch(read('german-study-planner.js'),/fetch\s*\(|localStorage|sessionStorage|sendBeacon|innerHTML/);
});
for(const f of ['german-language-levels.html','how-long-to-learn-german.html'])test(f+': discovery, schema, sources and factual course routes',()=>{
 const src=read(f);
 assert.ok(read('resources.html').includes('href="'+f+'"'));
 assert.ok(read('learn-german-from-hindi.html').includes('href="'+f+'"'));
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(f));
 assert.ok(read('sitemap.xml').includes('https://klarweg.in/'+f));
 assert.ok(src.includes('href="courses.html"'));
 assert.ok(src.includes('href="chapter/chapter-a1-1-alphabet.html"'));
 assert.match(src,/<h2 id="sources">/);
 assert.match(src,/Last checked 9 November 2026/);
 const objects=[...src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.ok(objects.some(o=>o['@type']==='Article'&&o.url==='https://klarweg.in/'+f));
 assert.ok(objects.some(o=>o['@type']==='BreadcrumbList'));
 assert.doesNotMatch(src,/₹|data-kw-buy|FAQPage/);
});
test('calculator has labelled inputs, a live result and a no-script alternative',()=>{
 const s=read('how-long-to-learn-german.html');
 for(const id of ['total','weekly']){assert.ok(s.includes('for="'+id+'"'));assert.ok(s.includes('id="'+id+'"'));}
 assert.match(s,/<output[^>]*aria-live="polite"/);
 assert.match(s,/<noscript>/);
 assert.match(s,/not a prediction of reaching a German level/);
 assert.match(s,/<script type="module" src="german-study-planner.js">/);
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes('german-study-planner.js'));
 assert.doesNotMatch(read('german-language-levels.html'),/<script[^>]*src=/);
});
