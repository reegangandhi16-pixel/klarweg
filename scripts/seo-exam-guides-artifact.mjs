#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {loadExamGuides,GUIDE_SOURCE,HUB} from './build-exam-guides.mjs';
import {SITE_BASE} from './site-origin.mjs';
import {cleanPath} from './clean-urls.mjs';
const root=fs.realpathSync(process.argv[2]||'_site'),guides=loadExamGuides(),files=[HUB,...guides.map(g=>g.path)];
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const resolve=u=>{let f=path.join(root,u.pathname);if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');else if(!fs.existsSync(f)&&fs.existsSync(f+'.html'))f+='.html';return f;};
const locs=[...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
let links=0,blocks=0;
for(const f of files){
 const s=read(f),canonical=SITE_BASE+'/'+cleanPath(f);
 assert.ok(locs.includes(canonical));assert.equal(s.match(/rel="canonical" href="([^"]+)"/)[1],canonical);
 assert.equal((s.match(/<h1\b/g)||[]).length,1);assert.ok(s.includes('14 November 2026'));
 assert.ok(!s.includes('noindex'));
 for(const [,href] of s.matchAll(/(?:href|src)="([^"]+)"/g)){
  const u=new URL(href,canonical);if(u.origin!==SITE_BASE)continue;
  assert.ok(!u.pathname.endsWith('.html'));const target=resolve(u);assert.ok(fs.existsSync(target),f+': '+href);
  if(u.hash)assert.ok(fs.readFileSync(target,'utf8').includes('id="'+u.hash.slice(1)+'"'),f+': '+href);links++;
 }
 for(const [,raw] of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  const data=JSON.parse(raw);blocks++;
  if(['Article','CollectionPage'].includes(data['@type']))assert.equal(data.url,canonical);
  const visit=x=>{if(typeof x==='string'&&x.startsWith(SITE_BASE+'/')){const u=new URL(x);assert.ok(!u.pathname.endsWith('.html'));assert.ok(fs.existsSync(resolve(u)),x);}else if(Array.isArray(x))x.forEach(visit);else if(x&&typeof x==='object')Object.values(x).forEach(visit);};visit(data);
 }
}
assert.deepEqual(fs.readdirSync(path.join(root,'telc')).sort(),guides.filter(g=>g.provider==='telc').map(g=>path.basename(g.path)).sort());
for(const privateFile of [GUIDE_SOURCE,'scripts/build-exam-guides.mjs','scripts/seo-exam-guides-browser.mjs'])assert.ok(!fs.existsSync(path.join(root,privateFile)));
console.log(JSON.stringify({examGuides:12,hub:1,sitemapUrls:locs.length,jsonBlocks:blocks,localLinksAndAssets:links,sourceFilesExcluded:true,result:'PASS'}));
