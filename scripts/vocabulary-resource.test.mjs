import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=f=>fs.readFileSync(new URL('../'+f,import.meta.url),'utf8');
const data=JSON.parse(read('docs/seo/data/a1-starter-vocabulary.json'));
const page=read('german-a1-vocabulary.html');
test('starter vocabulary is complete across source, HTML and human-review export',()=>{
 assert.equal(data.length,24);assert.equal(new Set(data.map(r=>r.singular)).size,24);
 const review=read('docs/seo/A1-VOCABULARY-REVIEW-2026-11.md');
 for(const r of data){
  assert.match(r.singular,/^(der|die|das) /);assert.match(r.plural,/^die /);
  for(const word of [r.singular,r.plural])assert.ok(page.includes('<span class="de" lang="de">'+word+'</span>'));
  assert.ok(page.includes('<span class="hi" lang="hi">'+r.hindi+'</span>'));
  const entry=[r.singular,r.plural,r.english,r.hindi].join(' | ');
  assert.ok(review.includes('- [ ] '+entry)||review.includes('- [x] '+entry));
 }
 assert.equal((page.match(/class="kg-table vocab-table"/g)||[]).length,3);
 assert.match(review,/NOT READY TO MERGE/);
});
test('starter page and original PDF are discoverable without exposing paid downloads',()=>{
 const files=['german-a1-vocabulary.html','downloads/german-a1-starter-vocabulary.pdf'];
 for(const f of files)assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(f));
 assert.ok(read('sitemap.xml').includes('https://klarweg.in/german-a1-vocabulary.html'));
 for(const f of ['resources.html','free-german-learning-pdfs.html','learn-german-from-hindi.html'])assert.ok(read(f).includes('href="german-a1-vocabulary.html"'));
 assert.ok(page.includes('href="downloads/german-a1-starter-vocabulary.pdf"'));
 assert.ok(page.includes('href="chapter/chapter-a1-1-alphabet.html"'));
 assert.match(page,/not a complete A1 syllabus/);
 assert.match(page,/Hindi meanings are on this web page, not in the printable sheet/);
 assert.doesNotMatch(page,/<script[^>]*src=|data-kw-buy/);
 const bytes=fs.readFileSync(new URL('../'+files[1],import.meta.url));
 assert.equal(bytes.subarray(0,5).toString(),'%PDF-');assert.ok(bytes.length<200000);
});
