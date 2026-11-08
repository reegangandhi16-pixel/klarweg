import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=f=>fs.readFileSync(new URL('../'+f,import.meta.url),'utf8');
const files=['german-listening-practice.html','german-speaking-practice.html','german-writing-practice.html'];
for(const f of files)test(f+': discoverable practice guide with honest boundaries',()=>{
 const s=read(f);
 for(const parent of ['resources.html','learn-german-from-hindi.html'])assert.ok(read(parent).includes('href="'+f+'"'));
 for(const other of files.filter(x=>x!==f))assert.ok(s.includes('href="'+other+'"'));
 assert.ok(read('sitemap.xml').includes('https://klarweg.in/'+f));
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(f));
 assert.ok(s.includes('href="courses.html"'));
 assert.ok(s.includes('href="chapter/chapter-a1-1-alphabet.html"'));
 assert.match(s,/Last checked 9 November 2026/);
 assert.match(s,/href="https:\/\/www.goethe.de\//);
 assert.match(s,/not official|not an official|not a phrasebook/);
 assert.doesNotMatch(s,/<script[^>]*src=|<audio|<iframe|data-kw-buy|₹/);
 const objects=[...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.ok(objects.some(o=>o['@type']==='Article'&&o.url==='https://klarweg.in/'+f));
 assert.ok(objects.some(o=>o['@type']==='BreadcrumbList'));
 for(const [,raw] of s.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/g)){assert.match(raw,/<caption>/);assert.match(raw,/<th scope="col">/);}
});
