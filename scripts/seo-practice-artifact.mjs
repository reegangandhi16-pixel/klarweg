#!/usr/bin/env node
/* Validate practice SEO and internal links in the real public artifact.
   Run after scripts/site-artifact.sh: node scripts/seo-practice-artifact.mjs _site */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const { loadGuides, PRACTICE_BATCHES } = await import('./build-seo-practice.mjs');
const guides=loadGuides();
const root=fs.realpathSync(process.argv[2] || '_site');
const { SITE_BASE: site } = await import('./site-origin.mjs');
const { cleanPath } = await import('./clean-urls.mjs');
const sitemap=fs.readFileSync(root+'/sitemap.xml','utf8');
const locs=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const source=fs.readFileSync(new URL('../sitemap.xml',import.meta.url),'utf8');
const expected=[...source.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>{const u=new URL(m[1]);if(u.pathname.endsWith('.html'))u.pathname='/'+cleanPath(u.pathname.slice(1));return u.href;});
assert.deepEqual(locs,expected,'artifact sitemap must match the cleaned source sitemap');
assert.equal(new Set(locs).size,locs.length);
const resolve=url=>{
 let file=path.join(root,url.pathname);
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 else if(!fs.existsSync(file)&&fs.existsSync(file+'.html'))file+='.html';
 return file;
};
const titles=new Set(),descs=new Set();let links=0,jsonBlocks=0;
for(const loc of locs){
 assert.ok(!loc.endsWith('.html'),loc);
 const file=resolve(new URL(loc)),s=fs.readFileSync(file,'utf8');
 const canon=s.match(/<link rel="canonical" href="([^"]+)"/)[1];assert.equal(canon,loc);
 if(!loc.includes('/practice/'))continue;
 const title=s.match(/<title>([^<]+)<\/title>/)[1],desc=s.match(/<meta name="description" content="([^"]+)"/)[1];
 assert.ok(title.length<=70);assert.ok(desc.length>=50);assert.ok(!titles.has(title));assert.ok(!descs.has(desc));titles.add(title);descs.add(desc);
 assert.equal(s.match(/property="og:url" content="([^"]+)"/)[1],canon);
 assert.ok(!s.includes('noindex'));
 for(const [,raw]of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  const j=JSON.parse(raw);jsonBlocks++;
  if(['LearningResource','CollectionPage'].includes(j['@type']))assert.equal(j.url,canon);
  const visit=x=>{if(typeof x==='string'&&x.startsWith(site+'/')){assert.ok(!x.endsWith('.html'));assert.ok(fs.existsSync(resolve(new URL(x))),x);}else if(Array.isArray(x))x.forEach(visit);else if(x&&typeof x==='object')Object.values(x).forEach(visit);};visit(j);
 }
 for(const [,href]of s.matchAll(/(?:href|src)="([^"]+)"/g)){
  const u=new URL(href,canon);if(u.origin!==site)continue;
  assert.ok(!u.pathname.endsWith('.html'),href);
  const target=resolve(u);assert.ok(fs.existsSync(target),href);
  if(u.hash)assert.ok(fs.readFileSync(target,'utf8').includes('id="'+u.hash.slice(1)+'"'),href);
  links++;
 }
}
assert.equal(titles.size,guides.length+1);
assert.deepEqual(fs.readdirSync(path.join(root,'practice')).filter(f=>f.endsWith('.html')).sort(), ['index.html',...guides.map(g=>g.slug+'.html')].sort());
for(const name of ['docs/seo/practice-batches.json',...PRACTICE_BATCHES.flatMap(b=>b.sources.map(s=>s.path)),'scripts/build-seo-practice.mjs','scripts/seo-practice/page.html','scripts/seo-practice/index.html'])assert.ok(!fs.existsSync(root+'/'+name));
console.log(JSON.stringify({sitemapUrls:locs.length,practicePages:titles.size,jsonBlocks,localLinksAndAssets:links,sourceFilesExcluded:true,result:'PASS'}));
