import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {rewrite} from './clean-urls.mjs';
const root=new URL('../',import.meta.url),read=f=>fs.readFileSync(new URL(f,root),'utf8');
const manifest=JSON.parse(read('docs/seo/NEXT50-MANIFEST.json'));
const data=JSON.parse(read('docs/seo/data/next50-learning-guides.json'));
const review=read('docs/seo/NEXT50-REVIEW-2026-11.md');
const plain=s=>s.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
test('exactly fifty distinct topics with original task material and a nonduplicated sitemap',()=>{
 assert.equal(manifest.length,50);assert.equal(data.length,50);
 assert.equal(new Set(data.map(d=>d.slug)).size,50);
 assert.equal(new Set(manifest.map(d=>d.title)).size,50);
 assert.equal(new Set(manifest.map(d=>d.description)).size,50);
 const counts=Object.fromEntries(['vocabulary','conversation','writing','reading'].map(k=>[k,data.filter(d=>d.kind===k).length]));
 assert.deepEqual(counts,{vocabulary:20,conversation:15,writing:10,reading:5});
 assert.equal(new Set(data.map(d=>d.note)).size,50);
 assert.equal(new Set(data.map(d=>d.text||JSON.stringify(d.model))).size,50);
 const locs=[...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
 assert.equal(new Set(locs).size,locs.length);
 for(const d of data){assert.ok(d.note.length>250);assert.ok(d.exercise.length>=3);for(const row of d.exercise)assert.ok(row.every(x=>typeof x==='string'&&x.length));if(d.kind==='vocabulary')assert.equal(d.words.length,12);if(d.kind==='conversation')assert.equal(d.model.length,8);}
});
for(const entry of manifest)test(entry.file+': discoverability, accessible practice, review export and clean canonical',()=>{
 const s=read(entry.file),main=s.split('<main')[1].split('</main>')[0];
 assert.equal((s.match(/<h1>/g)||[]).length,1);
 assert.equal((s.match(/<\/body>/g)||[]).length,1);assert.equal((s.match(/<\/html>/g)||[]).length,1);
 assert.ok(decode(s.match(/<title>(.*?)<\/title>/)[1]).length<=60);
 assert.ok(entry.description.length>=140&&entry.description.length<=155);
 assert.ok(read('resources.html').includes(`href="${entry.file}"`));
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(entry.file));
 assert.ok(read('scripts/seo-structured-data.mjs').includes(`['${entry.file}',`));
 assert.ok(main.includes('Find your free Chapter 1'));assert.ok(main.includes('<details'));assert.ok(main.includes('<summary>'));
 assert.ok(main.includes('lang="hi"'));assert.ok(main.includes('lang="de"'));
 assert.ok(main.includes('not official examination'));assert.ok(main.includes('Save as PDF'));
 assert.ok((main.match(/<h3>/g)||[]).length>=4);
 assert.ok(plain(main).split(/\s+/).length>=700);
 assert.doesNotMatch(s,/<script[^>]*src=|<audio|<iframe|\bundefined\b|₹|data-kw-buy/);
 const ids=new Set([...s.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,id] of main.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(id));
 for(const [,href] of s.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)){
  if(/^(https?:|mailto:|tel:)/.test(href))continue;
  const target=path.posix.normalize(path.posix.join(path.posix.dirname(entry.file),href.split('?')[0]));
  assert.ok(fs.existsSync(new URL(target,root)),target);
  if(target.startsWith('chapter/'))assert.match(target,/chapter-(a1|a2|b1|b2|c1|c2)-0?1-/);
 }
 const transformed=rewrite(s,entry.file,p=>fs.existsSync(new URL(p,root)));
 const canonical='https://klarweg.in/'+entry.file.slice(0,-5);
 assert.ok(transformed.includes(`rel="canonical" href="${canonical}"`));
 assert.ok(transformed.includes(`property="og:url" content="${canonical}"`));
 const objects=[...transformed.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.deepEqual(objects.map(x=>x['@type']).sort(),['Article','BreadcrumbList']);
 assert.ok(!JSON.stringify(objects).includes('.html'));
 for(const [,raw] of s.matchAll(/<(?:span|p)\b[^>]*\blang="de"[^>]*>([\s\S]*?)<\/(?:span|p)>/g))assert.ok(review.includes('- [ ] '+decode(plain(raw))),raw);
});
