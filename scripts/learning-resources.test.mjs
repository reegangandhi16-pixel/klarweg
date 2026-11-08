import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=f=>fs.readFileSync(new URL('../'+f,import.meta.url),'utf8');
const files=['german-books-for-beginners.html','free-german-learning-pdfs.html','german-exam-practice-papers.html'];
for(const f of files) test(f+': published resource route and source integrity',()=>{
 const s=read(f);
 assert.ok(read('resources.html').includes('href="'+f+'"'));
 assert.ok(read('sitemap.xml').includes('https://klarweg.in/'+f));
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(f));
 assert.ok(s.includes('href="chapter/chapter-a1-1-alphabet.html"'));
 assert.ok(s.includes('href="a1.html"'));
 for(const other of files.filter(x=>x!==f))assert.ok(s.includes('href="'+other+'"'));
 const data=[...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.ok(data.some(x=>x['@type']==='Article'));
 const crumbs=data.find(x=>x['@type']==='BreadcrumbList');
 assert.equal(crumbs.itemListElement[1].item,'https://klarweg.in/resources.html');
 assert.doesNotMatch(s,/<script[^>]*src=|<audio|data-kw-buy/);
 for(const [,url] of s.matchAll(/href="([^"]+\.pdf)"/g))assert.equal(new URL(url).hostname,'www.goethe.de');
 assert.match(s,/Last checked 8 November 2026/);
});

test('self-study guide offers a public original planner without gated chapter resources',()=>{
 const f='learn-german-from-hindi.html', pdf='downloads/german-self-study-planner.pdf';
 const s=read(f), allow=read('.github/pages-allowlist.txt').split('\n');
 assert.ok(s.includes('href="'+pdf+'"'));
 assert.ok(allow.includes(pdf)); assert.ok(allow.includes(f));
 assert.ok(read('resources.html').includes('href="'+f+'"'));
 for(const parent of ['free-german-learning-pdfs.html','german-books-for-beginners.html'])assert.ok(read(parent).includes('href="'+f+'"'));
 const bytes=fs.readFileSync(new URL('../'+pdf,import.meta.url));
 assert.equal(bytes.subarray(0,5).toString(),'%PDF-');
 assert.ok(bytes.length<200000,'planner stays small enough for mobile downloads');
 assert.doesNotMatch(s,/<script[^>]*src=|data-kw-buy|guaranteed/i);
 assert.ok(s.includes('href="chapter/chapter-a1-1-alphabet.html"'));
});

test('resource hub presents discovery routes before reference tools',()=>{
 const s=read('resources.html');
 assert.ok(s.indexOf('id="books-and-pdfs"')<s.indexOf('<!-- GRAMMAR COLOUR KEY -->'));
 assert.match(s,/<h1[^>]*>Free German learning resources\.<\/h1>/);
 assert.equal((s.match(/class="resource-choice"/g)||[]).length,4);
 assert.ok(s.includes('href="downloads/german-self-study-planner.pdf"'));
 assert.ok(s.includes('id="chapter-downloads"'));
 assert.match(s,/Access to course chapter downloads follows/);
});
