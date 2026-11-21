import assert from 'node:assert/strict';
import fs from 'node:fs';
import { SITE_BASE } from './site-origin.mjs';
import { escapeHtml as esc } from './build-seo-practice.mjs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const guidesDirectory = 'docs/seo/keyword-guides/';
const pages = JSON.parse(read(guidesDirectory + 'pages.json'));
const check = process.argv.includes('--check');
const sitemap = read('sitemap.xml');
const resources = read('resources.html');
const allowlist = new Set(read('.github/pages-allowlist.txt').split(/\r?\n/));

assert.equal(pages.length, 10);
for (const index of [0,1,2,3]) {
  assert.equal(new Set(pages.map(page => page[index])).size, pages.length);
}
const link = (url, text, classes = '') => `<a${classes ? ` class="${classes}"` : ''} href="${esc(url)}">${esc(text)}</a>`;

for (const [slug, keyword, title, description, target, action] of pages) {
  assert.match(slug, /^[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*$/);
  assert.ok(keyword && target && action);
  const file = slug + '.html';
  const url = SITE_BASE + '/' + file;
  assert.ok(allowlist.has(file) && sitemap.includes(`<loc>${url}</loc>`) && resources.includes(`href="${file}"`), file);
  assert.ok(fs.existsSync(new URL(target.split('#')[0],root)), target);
  const content = read(guidesDirectory + file).trim();
  const related = pages.filter(page => page[0] !== slug).slice(0, 4);
  const schema = JSON.stringify({
    '@context':'https://schema.org', '@type':'Article', headline:title, description,
    url, mainEntityOfPage:url, inLanguage:'en',
    publisher:{'@type':'Organization',name:'Klarweg',url:SITE_BASE+'/'}
  }).replaceAll('<','\\u003c');
  const page = `<!doctype html>
<!-- Generated from ${guidesDirectory + file} by scripts/build-keyword-guides.mjs. -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — Klarweg</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)} — Klarweg">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_BASE}/site-icon-512.png">
<link rel="stylesheet" href="practice/practice.css">
<link rel="icon" href="favicon.ico">
<style>
.panel table{width:100%;border-collapse:collapse;margin-block:1rem;table-layout:fixed}
.panel th,.panel td{padding:.6rem .45rem;text-align:left;vertical-align:top;overflow-wrap:anywhere;border-bottom:1px solid var(--line)}
.panel th{background:#f1f8f3;color:var(--forest)}
.panel ol,.panel ul{padding-inline-start:1.3rem}
.panel li+li{margin-top:.45rem}
@media(max-width:420px){.panel th,.panel td{padding-inline:.25rem;font-size:.9rem}}
</style>
<script type="application/ld+json">${schema}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header><div class="top"><a class="brand" href="index.html">Klarweg</a><nav class="nav" aria-label="Main navigation">${link('courses.html','Courses')} ${link('resources.html','Resources')} ${link('live-classes.html','Live classes')}</nav></div></header>
<main class="wrap" id="main">
<nav class="crumb" aria-label="Breadcrumb">${link('resources.html#german-learning-guides','German learning guides')}</nav>
<section class="hero"><h1>${esc(title)}</h1><p class="lede">${esc(description)}</p><div class="actions">${link(target,action,'btn')}</div></section>
<div class="content"><div class="stack">
${content}
<section class="panel"><h2>Put it into practice</h2><div class="actions">${link(target,action,'btn')}</div></section>
</div><aside class="side panel" aria-labelledby="more"><h2 id="more">More German learning guides</h2>
<ul>${related.map(([path,,label])=>`<li>${link(path + '.html',label)}</li>`).join('')}</ul>
<p>${link('resources.html#german-learning-guides','See all ten guides')}</p></aside></div>
</main>
<footer class="footer">Klarweg · ${link('privacy.html','Privacy')}</footer>
</body>
</html>
`;
  if (check) assert.equal(read(file),page,'Stale keyword guide: ' + file);
  else fs.writeFileSync(new URL(file,root),page);
}
console.log(`Keyword guides: ${pages.length} pages ${check ? 'checked' : 'generated'}`);
