import assert from 'node:assert/strict';
import fs from 'node:fs';
import { SITE_BASE } from './site-origin.mjs';
import { applyFooterSocial } from './footer-social.mjs';
import { escapeHtml } from './build-seo-practice.mjs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const outputDirectory = 'german-situations';
const source = 'docs/seo/german-situations.tsv';
const sitemap = read('sitemap.xml');
const allowlist = new Set(read('.github/pages-allowlist.txt').split(/\r?\n/));
const check = process.argv.includes('--check');

const lessons = read(source).trim().split(/\r?\n/).map(line => {
  const columns = line.split('|');
  assert.equal(columns.length, 9, line);
  assert.ok(columns.every(field => field.trim() === field && field.length > 0), line);
  const [group, level, slug, title, prompt, model, meaning, feedback, variation] = columns;
  return { group, level, slug, title, prompt, model, meaning, feedback, variation };
});

const chapters = {
  a1:'chapter-a1-1-alphabet', a2:'chapter-a2-1-genitiv',
  b1:'chapter-b1-1-infinitiv-mit-zu', b2:'chapter-b2-01-erweiterte-satzklammer',
  c1:'chapter-c1-01-tempusgebrauch-stilistische-tempuswahl',
  c2:'chapter-c2-01-zeitformen-der-verben'
};
const groupNames = [...new Set(lessons.map(lesson => lesson.group))];

assert.equal(lessons.length, 70);
for (const field of ['slug','title','prompt','model','meaning','feedback','variation']) {
  assert.equal(new Set(lessons.map(lesson => lesson[field])).size, lessons.length, 'Duplicate ' + field);
}
for (const lesson of lessons) {
  assert.match(lesson.slug, /^[a-z]+(?:-[a-z0-9]+)*$/);
  assert.ok(Object.hasOwn(chapters, lesson.level), lesson.slug);
}

const lessonPath = lesson => outputDirectory + '/' + lesson.slug + '.html';
const esc = escapeHtml;
const phrase = (text, lang) => `<p lang="${lang}">${esc(text)}</p>`;
const link = (url, label) => `<a href="${esc(url)}">${esc(label)}</a>`;
const topicLinks = groupNames.map(group => {
  const first = lessons.find(item => item.group === group);
  return `<li>${link(first.slug + '.html', group)}</li>`;
}).join('');

function render(lesson) {
  const { group, level, slug, title, prompt, model, meaning, feedback, variation } = lesson;
  const url = SITE_BASE + '/' + lessonPath(lesson);
  const pageTitle = title + ' in German';
  const metadataTitle = pageTitle + ' | Klarweg';
  const description = `${prompt} Compare your German with a model answer and try a second situation.`;
  const neighbours = lessons.filter(item => item.group === group && item.slug !== slug);
  const related = neighbours.map(item => `<li>${link(item.slug + '.html', item.title)} <small>${item.level.toUpperCase()}</small></li>`).join('');
  const path = `../chapter/${chapters[level]}.html`;
  assert.ok(sitemap.includes(`<loc>${SITE_BASE}/${path.slice(3)}</loc>`), path);
  const teacherLink = ['a1','a2','b1','b2'].includes(level) ? ' · ' + link('../live-classes.html#teachers','Practise with a live teacher') : '';
  const schema = JSON.stringify({
    '@context':'https://schema.org', '@type':'LearningResource', name:pageTitle,
    description, url, inLanguage:['en','de'], learningResourceType:'Exercise',
    educationalLevel:'CEFR ' + level.toUpperCase(), isAccessibleForFree:true,
    publisher:{'@type':'Organization',name:'Klarweg',url:SITE_BASE+'/'}
  }).replaceAll('<', '\\u003c');

  return `<!doctype html>
<!-- Generated from docs/seo/german-situations.tsv by scripts/build-german-situations.mjs. -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(metadataTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(metadataTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_BASE}/site-icon-512.png">
<link rel="stylesheet" href="../practice/practice.css">
<link rel="icon" href="../favicon.ico">
<script type="application/ld+json">${schema}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header><div class="top"><a class="brand" href="../index.html">Klarweg</a><nav class="nav" aria-label="Main navigation">${link('../courses.html','Courses')} ${link('../resources.html','Resources')} ${link('../live-classes.html','Live classes')}</nav></div></header>
<main class="wrap" id="main">
<nav class="crumb" aria-label="Breadcrumb">${link('../resources.html#german-situations','German practice scenarios')} / ${esc(group)}</nav>
<section class="hero">
<div class="eyebrow">${level.toUpperCase()} · ${esc(group)}</div>
<h1>${esc(pageTitle)}</h1>
<p class="lede">${esc(prompt)}</p>
</section>
<div class="content">
<div class="stack">
<section class="panel" aria-labelledby="model-heading">
<h2 id="model-heading">Try your response</h2>
<p>Say or write what you would use in this situation, then compare the wording.</p>
<details>
<summary>Show the German model and English meaning</summary>
<div class="answer">${phrase(model,'de')}${phrase(meaning,'en')}<p>${esc(feedback)}</p></div>
</details>
</section>
<section class="panel" aria-labelledby="variation">
<h2 id="variation">Try it with a change</h2>
<p>${esc(variation)}</p>
</section>
<section class="panel" aria-labelledby="continue">
<h2 id="continue">Continue at ${level.toUpperCase()}</h2>
<p>${link(path,`Try the free ${level.toUpperCase()} chapter`)}${teacherLink}</p>
</section>
</div>
<aside class="side panel" aria-labelledby="related">
<h2 id="related">${esc(group)} practice</h2>
<ul>${related}</ul>
<details><summary>Browse other scenarios</summary><ul>${topicLinks}</ul></details>
</aside>
</div>
</main>
<footer class="footer">Klarweg · ${link('../privacy.html','Privacy')}</footer>
</body>
</html>
`;
}

if (!check) fs.mkdirSync(new URL(outputDirectory, root), { recursive:true });
for (const lesson of lessons) {
  const file = lessonPath(lesson);
  assert.ok(allowlist.has(file), 'Missing allowlist entry: ' + file);
  assert.equal(sitemap.split(`<loc>${SITE_BASE}/${file}</loc>`).length, 2, 'Missing or repeated sitemap entry: ' + file);
  const page = applyFooterSocial(render(lesson));
  if (check) assert.equal(read(file), page, 'Stale generated lesson: ' + file);
  else fs.writeFileSync(new URL(file, root), page);
}
const resources = read('resources.html');
for (const group of groupNames) {
  assert.ok(resources.includes(`href="${lessonPath(lessons.find(item => item.group === group))}"`), 'Missing topic link: ' + group);
}
console.log(`German situations: ${lessons.length} lessons in ${groupNames.length} topics ${check ? 'checked' : 'generated'}`);
