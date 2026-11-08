import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const ROOT=new URL('../',import.meta.url);
const read=f=>fs.readFileSync(new URL(f,ROOT),'utf8');
const files=['telc-vs-goethe.html','goethe/certificate-validity-result.html','goethe/exam-centres-india.html'];
const review=read('docs/seo/TOP20-BATCH3-EXAM-DECISIONS-2026-11.md');
const plain=s=>s.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
for(const f of files)test(f+': brief metadata, original content, publication registries and review export',()=>{
 const s=read(f);
 const title=s.match(/<title>([^<]+)<\/title>/)[1].replace(/&amp;/g,'&');
 const description=s.match(/<meta name="description" content="([^"]+)"/)[1];
 assert.ok(title.length<=60);assert.ok(title.endsWith('— Klarweg'));
 assert.ok(description.length>=140&&description.length<=155);assert.ok(description.includes('Klarweg'));
 assert.ok(s.includes('https://klarweg.in/'+f));
 for(const type of ['og:image','twitter:image'])assert.ok(s.includes(`${type}" content="https://klarweg.in/site-icon-512.png"`));
 assert.ok(read('sitemap.xml').includes('<loc>https://klarweg.in/'+f+'</loc>'));
 assert.ok(read('.github/pages-allowlist.txt').split('\n').includes(f));
 assert.ok(read('scripts/seo-structured-data.mjs').includes("['"+f+"',"));
 assert.ok(read('goethe-exam.html').includes('href="'+f+'"'));
 const main=s.split('<main')[1].split('</main>')[0],words=plain(main).split(/\s+/).length;
 assert.ok(words>=1200&&words<=2000,`${f}: ${words} words`);
 assert.ok((main.match(/<h3>/g)||[]).length>=4);
 assert.match(main,/class="kg-summary"/);assert.match(main,/class="kg-toc"/);
 assert.match(main,/href="(?:\.\.\/)?courses.html">Find your free Chapter 1/);
 assert.match(main,/Official sources/);
 if(f.includes('validity')) { assert.match(main,/valid indefinitely/); assert.match(main,/invitation/); assert.doesNotMatch(main,/results (?:are|will be) (?:available|published) (?:within|in) \d/i); }
 if(f.includes('centres')) { assert.match(main,/does not guarantee/); for(const city of ['Bangalore','Chennai','Kolkata','Mumbai','New Delhi','Pune'])assert.ok(main.includes(city)); }
 if(f.includes('telc'))for(const domain of ['goethe.de','telc.net','osd.at'])assert.ok(main.includes(domain));
 assert.doesNotMatch(s,/<script[^>]*src=|<audio|<iframe|\bundefined\b|₹|data-kw-buy/);
 const objects=[...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.deepEqual(objects.map(x=>x['@type']).sort(),['Article','BreadcrumbList']);
 for(const [,raw] of s.matchAll(/<(?:span|p)\b[^>]*\blang="de"[^>]*>([\s\S]*?)<\/(?:span|p)>/g)){
  const entry=plain(raw);assert.ok(review.includes('- [ ] '+entry)||review.includes('- [x] '+entry),entry);
 }
 for(const [,raw,roman] of s.matchAll(/<span class="hi" lang="hi">([\s\S]*?)<\/span>\s*<span class="tr">([\s\S]*?)<\/span>/g)){
  const entry=plain(raw)+' '+roman;assert.ok(review.includes('- [ ] '+entry)||review.includes('- [x] '+entry));
 }
 for(const [,href] of s.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)){
  if(/^(https?:|mailto:|tel:)/.test(href))continue;
  const target=path.posix.normalize(path.posix.join(path.posix.dirname(f),href));
  assert.ok(fs.existsSync(new URL(target,ROOT)),target);
  if(target.startsWith('chapter/'))assert.match(target,/chapter-(a1|a2|b1|b2|c1|c2)-0?1-/);
 }
});
