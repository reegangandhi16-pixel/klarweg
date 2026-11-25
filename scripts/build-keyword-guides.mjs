import assert from 'node:assert/strict';
import fs from 'node:fs';
import { SITE_BASE } from './site-origin.mjs';
import { applyFooterSocial } from './footer-social.mjs';
import { escapeHtml as esc } from './build-seo-practice.mjs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const guidesDirectory = 'docs/seo/keyword-guides/';
const batches = ['pages.json', 'batch-2.json', 'batch-3.json', 'batch-4.json', 'batch-5.json', 'batch-6.json'].map(file => JSON.parse(read(guidesDirectory + file)));
const answers = JSON.parse(read(guidesDirectory + 'direct-answers.json'));
const check = process.argv.includes('--check');
const sitemap = read('sitemap.xml');
const resources = read('resources.html');
const allowlist = new Set(read('.github/pages-allowlist.txt').split(/\r?\n/));

const link = (url, text, classes = '') => `<a${classes ? ` class="${classes}"` : ''} href="${esc(url)}">${esc(text)}</a>`;

for (const pages of batches) {
  assert.equal(pages.length, 10);
  for (const index of [0,2,3]) {
    assert.equal(new Set(pages.map(page => page[index])).size, pages.length);
  }
  for (const [slug, keyword, title, description, target, action] of pages) {
    assert.match(slug, /^[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*$/);
    assert.ok(keyword && target && action && answers[slug]);
    const file = slug + '.html';
    const url = SITE_BASE + '/' + file;
    assert.ok(allowlist.has(file) && sitemap.includes(`<loc>${url}</loc>`) && resources.includes(`href="${file}"`), file);
    assert.ok(fs.existsSync(new URL(target.split('#')[0],root)), target);
    const sections = [];
    const language = ['german-course-fees-in-hindi','german-questions-for-beginners-hindi','german-a1-word-order-in-hindi','german-a1-grammar-mistakes-hindi'].includes(slug) ? 'hi' : 'en';
    const content = read(guidesDirectory + file).trim()
      .replace(/<section class="panel"( lang="hi")?><h2>([^<]+)<\/h2>/g, (section, languageAttribute, heading) => {
        const id = 'guide-section-' + (sections.length + 1);
        sections.push({ id, heading, languageAttribute });
        return section.replace('<section class="panel"', `<section class="panel" id="${id}"`);
      })
      .replace(/<table>[\s\S]*?<\/table>/g, table =>
        `<div class="guide-table" tabindex="0" role="region" aria-label="Comparison table">${table}</div>`);
    assert.ok(sections.length >= 2, file);
    const contents = sections.filter(({ heading }) => heading !== 'Official references')
      .map(({ id, heading, languageAttribute }) => `<li><a href="#${id}"${languageAttribute || ''}>${heading}</a></li>`).join('');
    const related = pages.filter(page => page[0] !== slug).slice(0, 4);
    const schema = JSON.stringify({
      '@context':'https://schema.org', '@type':'Article', headline:title, description,
      url, mainEntityOfPage:url, inLanguage:language,
      publisher:{'@type':'Organization',name:'Klarweg',url:SITE_BASE+'/'}
    }).replaceAll('<','\\u003c');
    const page = applyFooterSocial(`<!doctype html>
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
.guide-hero h1{margin-top:0;text-wrap:balance}
.guide-hero .lede{margin:.35rem 0 0;color:var(--navy)}
.guide-answer{max-width:48rem;border-left:3px solid var(--green);padding:.3rem 0 .3rem 1rem}
.guide-answer strong{color:var(--forest)}
.guide-contents{margin-top:1.25rem;padding:1rem 1.25rem}
.guide-contents h2{font-size:1.125rem;margin-bottom:.35rem}
.guide-contents ul{display:flex;flex-wrap:wrap;gap:.25rem .75rem;margin:0;padding:0;list-style:none}
.guide-contents a{display:flex;align-items:center;min-height:44px;padding:.3rem .45rem;line-height:1.35}
.guide-content .panel{scroll-margin-top:1rem}
.guide-content .panel p,.guide-content .panel li{max-width:66ch}
.guide-table{overflow:auto;margin-block:1rem;border:1px solid var(--line);border-radius:.75rem}
.guide-table:focus-visible{outline:3px solid var(--forest);outline-offset:3px}
.guide-table table{width:100%;min-width:26rem;border-collapse:collapse}
.guide-table th,.guide-table td{padding:.7rem .8rem;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}
.guide-table th{background:#edf5ef;color:var(--forest)}
.guide-table tbody tr:nth-child(even){background:#f8faf9}
.guide-table tbody tr:last-child td{border-bottom:0}
.guide-content .panel ol,.guide-content .panel ul{padding-inline-start:1.3rem}
.guide-content .panel li+li{margin-top:.45rem}
.guide-content details{margin-top:1rem;padding:0 .8rem;border:1px solid var(--line);border-radius:.75rem;background:#f8faf9}
.guide-content summary{padding:.7rem 0;line-height:1.4}
.guide-content details .answer{margin-bottom:.8rem}
.guide-next .actions{align-items:center}
.guide-back{display:inline-flex;align-items:center;min-height:44px;font-weight:650}
@media(max-width:760px){.guide-contents ul{display:grid;grid-template-columns:minmax(0,1fr)}.guide-contents a{padding-left:0}}
@media(max-width:480px){.guide-hero .btn,.guide-next .btn{width:100%;text-align:center}.guide-table table{min-width:24rem}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}${content.includes('data-speak=') ? '\n[data-speak][hidden]{display:none}\n.guide-content .btn{min-height:44px}' : ''}${content.includes('data-guide-check') ? `
.guide-check fieldset{margin:1rem 0 0;padding:.8rem 1rem;border:1px solid var(--line);border-radius:.75rem}
.guide-check legend{padding:0 .3rem;font-weight:650;max-width:100%}
.guide-check label{display:flex;gap:.6rem;align-items:flex-start;min-height:44px;padding:.35rem 0;cursor:pointer}
.guide-check .btn{min-height:44px}
.guide-check input{margin-top:.45rem;flex:none;width:1.1rem;height:1.1rem;accent-color:var(--forest)}
.guide-check .is-right{border-color:var(--forest);background:#f1f8f3}
.guide-check .is-wrong{border-color:#b45309;background:#fff8ec}
.guide-check .check-verdict{margin:.4rem 0 0;font-weight:650}
.guide-check .check-why{margin:.3rem 0 0}
.guide-check .actions{margin-top:1rem}
.guide-check .check-score{font-weight:650;margin-top:.8rem}
.guide-check [hidden]{display:none}` : ''}
</style>
<script type="application/ld+json">${schema}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header><div class="top"><a class="brand" href="index.html">Klarweg</a><nav class="nav" aria-label="Main navigation">${link('courses.html','Courses')} ${link('resources.html','Resources')} ${link('live-classes.html','Live classes')}</nav></div></header>
<main class="wrap" id="main" tabindex="-1">
<nav class="crumb" aria-label="Breadcrumb">${link('resources.html#german-learning-guides','German learning guides')}</nav>
<section class="hero guide-hero"><h1>${esc(title)}</h1>
<div class="guide-answer"><strong>Quick answer</strong><p class="lede"${language === 'hi' ? ' lang="hi"' : ''}>${esc(answers[slug])}</p></div>
<div class="actions">${link(target,action,'btn')}</div></section>
<nav class="panel guide-contents" id="on-this-page" aria-labelledby="contents-title"><h2 id="contents-title">On this page</h2><ul>${contents}</ul></nav>
<div class="content guide-content"><div class="stack">
${content}
<section class="panel guide-next"><h2>Continue with Klarweg</h2><div class="actions">${link(target,action,'btn')} ${link('#on-this-page','Back to contents','guide-back')}</div></section>
</div><aside class="side panel" aria-labelledby="more"><h2 id="more">More German learning guides</h2>
<ul>${related.map(([path,,label])=>`<li>${link(path + '.html',label)}</li>`).join('')}</ul>
<p>${link('resources.html#german-learning-guides','See all German learning guides')}</p></aside></div>
</main>
<footer class="footer">Klarweg · ${link('privacy.html','Privacy')}</footer>
</body>
</html>
`);
    if (check) assert.equal(read(file),page,'Stale keyword guide: ' + file);
    else fs.writeFileSync(new URL(file,root),page);
  }
}
console.log(`Keyword guides: ${batches.flat().length} pages ${check ? 'checked' : 'generated'}`);
