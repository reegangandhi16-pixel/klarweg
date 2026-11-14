import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {loadExamGuides,validateExamGuides,renderExamGuides,updateGoethePage,GUIDE_SOURCE,HUB,CHAPTERS,EXAM_LEVELS} from './build-exam-guides.mjs';
const root=new URL('../',import.meta.url),read=f=>fs.readFileSync(new URL(f,root),'utf8');
const rows=loadExamGuides(),generated=renderExamGuides(rows),allow=read('.github/pages-allowlist.txt').split(/\r?\n/),sitemap=read('sitemap.xml');
const ld=s=>[...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"');
test('exam guidance covers both providers at all six levels without duplicate Goethe routes',()=>{
 assert.equal(rows.length,12);assert.equal(generated.size,7);
 for(const level of EXAM_LEVELS)assert.deepEqual(rows.filter(g=>g.level===level).map(g=>g.provider).sort(),['goethe','telc']);
 for(const [f,s] of generated)assert.equal(read(f),s,f+' must be generated');
 for(const g of rows.filter(g=>g.provider==='goethe')){
  const s=read(g.path);assert.equal(updateGoethePage(s,g),s);
  assert.equal((s.match(/id="provider-planning"/g)||[]).length,1);
  assert.ok(s.includes('../telc/'+g.level+'-exam.html'));
  assert.ok(s.includes('../exam-guidance.css'));
 }
 assert.ok(!allow.includes(GUIDE_SOURCE));
});
test('exam guides reject unsafe routes, repeated pairs, unverified sources and malformed task records',()=>{
 const check=(fn,re)=>{const copy=structuredClone(rows);fn(copy);assert.throws(()=>validateExamGuides(copy),re);};
 check(g=>g.pop(),/twelve/);check(g=>g[1]=g[0],/Duplicate/);
 check(g=>g[6].path='../exam/index.html',/Unsafe/);
 check(g=>g[6].official='https://example.org/exam',/official source/);
 check(g=>g[6].mock='http://www.telc.net/test.zip',/official source/);
 check(g=>g[6].timing[0]=['one'],/Malformed/);
 check(g=>g[6].checked='2030-01-01',/check date/);
 const copy=structuredClone(rows);copy[6].scope+='<script>alert(1)</script>';
 const s=renderExamGuides(copy).get(copy[6].path);assert.ok(s.includes('&lt;script&gt;'));assert.doesNotMatch(s,/<script>alert/);
 assert.throws(()=>updateGoethePage('<!-- EXAM-GUIDANCE:START --><!-- EXAM-GUIDANCE:END --><!-- EXAM-GUIDANCE:START --><!-- EXAM-GUIDANCE:END -->',rows[0]),/Duplicate/);
});
test('all twelve routes are indexable, linked, source-backed and have matching metadata',()=>{
 const titles=new Set(),descs=new Set(),hub=read(HUB);
 for(const g of rows){
  const s=read(g.path),url='https://klarweg.in/'+g.path;
  assert.ok(allow.includes(g.path));assert.ok(sitemap.includes('<loc>'+url+'</loc>'));
  assert.ok(hub.includes('href="'+g.path+'"'));
  assert.equal((s.match(/<h1\b/g)||[]).length,1);
  assert.ok(s.includes('<link rel="canonical" href="'+url+'">'));
  const title=decode(s.match(/<title>([^<]+)<\/title>/)[1]),desc=decode(s.match(/<meta name="description" content="([^"]+)"/)[1]);
  assert.ok(title.length<=70);assert.ok(desc.length>=100&&desc.length<=170);
  assert.ok(!titles.has(title));titles.add(title);assert.ok(!descs.has(desc));descs.add(desc);
  assert.equal(decode(s.match(/property="og:description" content="([^"]+)"/)[1]),desc);
  assert.equal(decode(s.match(/name="twitter:description" content="([^"]+)"/)[1]),desc);
  assert.doesNotMatch(s,/<meta name="robots" content="[^"]*noindex/);
  assert.ok(s.includes(g.official));assert.ok(s.includes('14 November 2026'));
  const article=ld(s).find(j=>j['@type']==='Article');assert.equal(article.url,url);assert.equal(article.description,desc);assert.equal(article.educationalLevel,'CEFR '+g.level.toUpperCase());
  assert.ok(s.includes('../'+CHAPTERS[g.level]));
  if(g.provider==='telc'){assert.ok(s.includes(g.mock));assert.doesNotMatch(s,/<script[^>]+src=|data-kw-buy|kw-auth|kw-enrol|<form\b/);}
 }
 for(const f of ['resources.html','goethe-exam.html','telc-vs-goethe.html','german-exam-practice-papers.html'])assert.ok(read(f).includes('href="'+HUB+'"'));
 const collection=ld(hub).find(j=>j['@type']==='CollectionPage');assert.equal(collection.mainEntity.numberOfItems,12);
 const actual=[...hub.matchAll(/<h3><a href="([^"]+)"/g)].map(m=>'https://klarweg.in/'+m[1]);assert.deepEqual(collection.mainEntity.itemListElement.map(x=>x.url),actual);
});
test('provider distinctions remain explicit, including C1 variants and integrated C2 tasks',()=>{
 const g=(p,l)=>rows.find(x=>x.provider===p&&x.level===l);
 assert.match(g('telc','a1').score,/36 points/);assert.match(g('goethe','a1').score,/60\/100/);
 assert.match(g('goethe','a2').score,/45\/75/);assert.match(g('telc','a2').timing[1][1],/50 minutes/);
 assert.match(g('telc','b1').score,/135/);assert.match(g('telc','b2').score,/45/);
 assert.match(g('telc','c1').scope,/C1 Hochschule/);assert.match(read('telc/c1-exam.html'),/telc-german-c1-university/);
 assert.equal(g('telc','c2').timing[1][0],'Listening and writing');assert.equal(g('telc','c2').timing[1][1],'60 minutes combined');
 assert.match(g('telc','c2').score,/72 written points and 24 oral/);
 assert.ok(!read('goethe/b2-exam-preparation.html').includes('Wann beginnt der Film?'));
 assert.match(read('goethe/b2-exam-preparation.html'),/presentation and discussion/);
});
test('all generated links and refreshed Goethe fragments resolve to explicit public files',()=>{
 const files=[...generated.keys(),...rows.filter(g=>g.provider==='goethe').map(g=>g.path)];
 for(const f of files){
  const s=read(f),ids=[...s.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,f);
  for(const [,href] of s.matchAll(/(?:href|src)="([^"]+)"/g)){
   const u=new URL(href,'https://klarweg.in/'+f);if(u.origin!=='https://klarweg.in')continue;
   const target=u.pathname.slice(1)||'index.html';assert.ok(fs.existsSync(new URL(target,root)),f+': '+href);
   assert.ok(allow.includes(target)||allow.some(x=>x.startsWith('GLOB:')&&path.matchesGlob(target,x.slice(5))),f+': '+target+' not published');
   if(u.hash)assert.ok(read(target).includes('id="'+u.hash.slice(1)+'"'),f+': broken fragment '+href);
  }
 }
 const css=read('exam-guidance.css');assert.match(css,/#0f172a/);assert.match(css,/#1fa84b/);
 for(const hex of css.match(/#[\da-f]{6}/gi)||[]){const [r,g,b]=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));assert.ok(!(r>150&&r>g+30&&g>b&&b<120),'orange colour '+hex);}
});
