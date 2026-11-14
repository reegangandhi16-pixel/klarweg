#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {SITE_BASE} from './site-origin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const BOOK_SOURCE = 'docs/seo/netzwerk-answer-guides-20261115.json';
export const BOOK_HUB = 'netzwerk-answer-keys.html';
export const BOOK_LEVELS = ['a1', 'a2', 'b1'];
export const BOOK_SERIES = ['netzwerk', 'netzwerk-neu'];
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const para = s => '<p>' + esc(s) + '</p>';
const link = (file, label, prefix = '') => `<a href="${esc(prefix + file)}">${esc(label)}</a>`;
const url = file => SITE_BASE + '/' + file;
const publisher = {'@type':'Organization', name:'Klarweg', url:SITE_BASE + '/'};
const jsonld = obj => '<script type="application/ld+json">\n' + JSON.stringify({'@context':'https://schema.org', ...obj}, null, 2).replace(/</g, '\\u003c') + '\n</script>';
const section = (id, title, body) => `<section class="panel" id="${id}" aria-labelledby="${id}-title"><h2 id="${id}-title">${esc(title)}</h2>${body}</section>`;
const text = (s, name) => { if (typeof s !== 'string' || !s.trim() || s.includes('{{')) throw new Error('Invalid ' + name); };

export function validateBookGuides(rows) {
  if (!Array.isArray(rows) || rows.length !== 12) throw new Error('Expected twelve book guides');
  const paths = new Set(), titles = new Set(), descriptions = new Set();
  for (const g of rows) {
    if (!BOOK_SERIES.includes(g.series) || !BOOK_LEVELS.includes(g.level)) throw new Error('Invalid book series/level');
    const neu = g.series === 'netzwerk-neu';
    const components = neu ? ['kursbuch', 'uebungsbuch'] : ['kursbuch', 'arbeitsbuch'];
    if (!components.includes(g.component)) throw new Error('Invalid book component');
    const expected = `book-answers/${g.series}-${g.level}-${g.component}-answers.html`;
    if (g.path !== expected || paths.has(g.path)) throw new Error('Unsafe/duplicate book path');
    paths.add(g.path);
    if (g.name !== (neu ? 'Netzwerk neu' : 'Netzwerk') || g.book !== ({kursbuch:'Kursbuch', arbeitsbuch:'Arbeitsbuch', uebungsbuch:'Übungsbuch'})[g.component]) throw new Error('Incorrect publisher terminology');
    if (g.checked !== '2026-11-15') throw new Error('Unexpected source check date');
    for (const key of ['title', 'description', 'intro', 'match', 'problem']) text(g[key], key);
    if ((g.title + ' — Klarweg').length > 70 || g.description.length < 100 || g.description.length > 170) throw new Error('Invalid book metadata');
    if (titles.has(g.title) || descriptions.has(g.description)) throw new Error('Duplicate book metadata');
    titles.add(g.title); descriptions.add(g.description);
    const official = `https://www.klett-sprachen.de/${g.series}/r-1/${neu ? 605 : 187}`;
    if (g.official !== official || g.route !== official + '#reiter=mediathek&dl_niveau_str=' + g.level.toUpperCase()) throw new Error('Invalid publisher route');
    const ranges = !neu && g.component === 'kursbuch' ? ['1–12'] : ['1–6', '7–12'];
    if (!Array.isArray(g.resources) || g.resources.length !== ranges.length) throw new Error('Missing chapter coverage');
    g.resources.forEach((r, i) => {
      text(r.label, 'resource label');
      if (r.chapters !== ranges[i]) throw new Error('Incorrect chapter coverage');
      if (neu) {
        if (r.status !== 'registration' || r.url !== g.route) throw new Error('Restricted resources must use publisher access');
      } else {
        const u = new URL(r.url);
        if (r.status !== 'public-pdf' || u.origin !== 'https://www.klett-sprachen.de' || !/^\/downloads\/\d+\/loesungen-zum-(kursbuch|arbeitsbuch)-[ab][12](?:-[12])?\/pdf$/.test(u.pathname) || u.search || u.hash) throw new Error('Invalid public PDF source');
        const slug = `loesungen-zum-${g.component}-${g.level}` + (g.component === 'kursbuch' ? '' : '-' + (i + 1));
        if (!u.pathname.endsWith('/' + slug + '/pdf')) throw new Error('PDF does not match book');
      }
    });
    for (const [key, min] of [['method', 3], ['faq', 2]]) {
      if (!Array.isArray(g[key]) || g[key].length < min) throw new Error('Missing ' + key);
      for (const pair of g[key]) { if (!Array.isArray(pair) || pair.length !== 2) throw new Error('Malformed ' + key); pair.forEach(s => text(s, key)); }
    }
  }
}

export function loadBookGuides() { const rows = JSON.parse(read(BOOK_SOURCE)); validateBookGuides(rows); return rows; }

function crumbs(g) {
  return {'@type':'BreadcrumbList', itemListElement:[
    {name:'Klarweg', item:SITE_BASE + '/'},
    {name:'Resources', item:url('resources.html')},
    {name:'Netzwerk answer keys', item:url(BOOK_HUB)},
    ...(g ? [{name:`${g.name} ${g.level.toUpperCase()} ${g.book}`, item:url(g.path)}] : [])
  ].map((x, i) => ({'@type':'ListItem', position:i + 1, ...x}))};
}

function layout({title, description, file, body, schema, prefix = ''}) {
  const metaTitle = title + ' — Klarweg';
  return `<!DOCTYPE html>
<!-- Generated by scripts/build-book-answer-guides.mjs; edit ${BOOK_SOURCE}. -->
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(metaTitle)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${url(file)}"><meta property="og:type" content="${file === BOOK_HUB ? 'website' : 'article'}"><meta property="og:site_name" content="Klarweg"><meta property="og:title" content="${esc(metaTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url(file)}"><meta property="og:image" content="${SITE_BASE}/site-icon-512.png"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(metaTitle)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${SITE_BASE}/site-icon-512.png"><meta name="theme-color" content="#0f172a"><link rel="icon" href="${prefix}favicon.ico"><link rel="stylesheet" href="${prefix}practice/practice.css"><link rel="stylesheet" href="${prefix}book-answers.css">${schema.map(jsonld).join('\n')}</head><body><a class="skip" href="#main">Skip to content</a><header><div class="top"><a class="brand" href="${prefix}index.html">Klarweg</a><nav class="nav" aria-label="Main navigation">${link(BOOK_HUB, 'Book answer keys', prefix)}${link('practice/index.html', 'Practice library', prefix)}${link('resources.html', 'Resources', prefix)}</nav></div></header><main class="wrap" id="main"><nav class="crumb" aria-label="Breadcrumb">${link('index.html', 'Home', prefix)} / ${link('resources.html', 'Resources', prefix)} / ${file === BOOK_HUB ? 'Netzwerk answer keys' : link(BOOK_HUB, 'Netzwerk answer keys', prefix)}</nav>${body}</main><footer class="footer">Klarweg · Independent resource guidance · ${link('contact.html', 'Report a correction', prefix)} · ${link('privacy.html', 'Privacy', prefix)}</footer></body></html>\n`;
}

function resourceCards(g) {
  return `<div class="ba-resource-grid">${g.resources.map(r => `<article class="ba-resource" data-access="${r.status}"><span class="pill">${r.status === 'public-pdf' ? 'Public publisher PDF' : 'Publisher registration required'}</span><h3 lang="de">${esc(r.label)}</h3><p>Coverage: <span lang="de">Kapitel ${r.chapters}</span> · ${esc(g.book)} · ${g.level.toUpperCase()}</p><p>${r.status === 'public-pdf' ? 'Opens a PDF on Klett’s website. Your browser may display it before offering a save option.' : 'Opens Klett’s resource page, not a direct PDF. Select ' + g.level.toUpperCase() + ', then the ' + g.book + ' solutions for this chapter range; sign in or register as instructed by the publisher.'}</p><a class="btn ${r.status === 'registration' ? 'secondary' : ''} ba-source" href="${esc(r.url)}">${r.status === 'public-pdf' ? 'Open official PDF: Kapitel ' + r.chapters : 'Find Kapitel ' + r.chapters + ' on Klett'}</a></article>`).join('')}</div>`;
}

export function renderBookGuides(rows = loadBookGuides()) {
  validateBookGuides(rows);
  const outputs = new Map();
  for (const g of rows) {
    const L = g.level.toUpperCase(), neu = g.series === 'netzwerk-neu';
    const counterpart = rows.find(x => x.series === g.series && x.level === g.level && x.component !== g.component);
    const alternative = rows.find(x => x.series !== g.series && x.level === g.level && (x.component === 'kursbuch') === (g.component === 'kursbuch'));
    const label = `${g.name} ${L} ${g.book}`;
    const contents = [['edition','Match your book'],['downloads','Official answer resources'],['method','Use the key effectively'],['troubleshooting','If answers do not match'],['questions','Common questions'],['next','Related books and practice'],['sources','Sources and review status']];
    const sections = section('edition', 'Match your book before checking answers', para(g.match) + `<p>${link(g.official, 'Check the edition and ISBN in Klett’s catalogue')}.</p>`)
      + section('downloads', neu ? 'Official answer entries and publisher access' : 'Official answer-key PDFs by chapter range', resourceCards(g) + '<p class="mini">Klarweg links to the publisher. PDF copies and textbook answer content are not hosted on this page.</p>')
      + section('method', 'Use the answer key effectively', '<ol class="ba-method">' + g.method.map(([h,p]) => `<li><h3>${esc(h)}</h3>${para(p)}</li>`).join('') + '</ol>')
      + section('troubleshooting', 'If the answers do not match', para(g.problem) + `<p>${link('../' + counterpart.path, 'Check the ' + counterpart.book + ' guide')} · ${link('../' + alternative.path, 'Compare the ' + alternative.name + ' edition')}. The same level or chapter number does not make these keys interchangeable.</p>`)
      + section('questions', 'Common questions', g.faq.map(([q,a]) => '<h3>' + esc(q) + '</h3>' + para(a)).join(''))
      + section('next', 'Related books and independent practice', `<ul>${rows.filter(x => x.series === g.series && x.component === g.component && x.level !== g.level).map(x => '<li>' + link('../' + x.path, `${x.name} ${x.level.toUpperCase()} ${x.book} answers`) + '</li>').join('')}<li>${link('../' + BOOK_HUB, 'Compare all twelve book guides')}</li><li>${link('../practice/index.html#' + g.level, 'Try original Klarweg ' + L + ' practice')}</li><li>${link('../german-exam-guidance.html#' + g.level, 'Goethe and telc ' + L + ' exam guidance')}</li></ul>`)
      + section('sources', 'Sources and review status', `<p>Source check: <time datetime="${g.checked}">15 November 2026</time>. ${neu ? 'Both solution entries above showed the registered-customer notice in the publisher’s guest catalogue.' : 'The linked solution endpoints returned PDF files without signing in during the check.'} Availability and access conditions may change.</p><p>${link(g.route, 'Official ' + g.name + ' resource catalogue — select ' + L)} · ${link(g.official, 'Official series and book listings')}.</p><p>Independent Klarweg guidance, prepared with AI assistance and source checks. Netzwerk and Netzwerk neu are publisher book titles; Klarweg is not affiliated with Klett. ${link('../contact.html', 'Report an incorrect link or edition mismatch')}.</p>`);
    const body = `<section class="hero"><div class="eyebrow">Book answer guide · ${L} · <span lang="de">${esc(g.book)}</span></div><h1>${esc(label)} answers <span class="ba-subtitle" lang="de">Lösungen &amp; ${neu ? 'Zugang beim Verlag' : 'offizielle PDFs'}</span></h1><p class="lede">${esc(g.intro)}</p><p class="mini">${neu ? 'Publisher registration required for the listed keys' : 'Public PDF links on the publisher’s site'} · Checked 15 November 2026</p><div class="actions"><a class="btn" href="#downloads">${neu ? 'See official access route' : 'Choose an official PDF'}</a><a class="btn secondary" href="#edition">Check your edition</a></div></section><div class="content"><div class="stack">${sections}</div><aside class="side panel" aria-label="Guide navigation"><h2 class="ba-small-heading">On this page</h2><ul>${contents.map(([id,h]) => `<li><a href="#${id}">${esc(h)}</a></li>`).join('')}</ul><p>${link('../' + BOOK_HUB, 'Choose another book')}</p></aside></div>`;
    outputs.set(g.path, layout({title:g.title, description:g.description, file:g.path, body, prefix:'../', schema:[crumbs(g), {'@type':'Article', headline:g.title, description:g.description, url:url(g.path), mainEntityOfPage:url(g.path), inLanguage:'en', educationalLevel:'CEFR ' + L, isAccessibleForFree:true, author:publisher, publisher, dateModified:g.checked}]}));
  }
  const title = 'Netzwerk & Netzwerk neu Answers A1–B1: Official Links';
  const description = 'Choose Netzwerk or Netzwerk neu A1–B1 coursebook and workbook answer guides. Find official PDF links, chapter ranges and clear publisher access requirements.';
  const groups = BOOK_SERIES.map(series => {
    const neu = series === 'netzwerk-neu', name = neu ? 'Netzwerk neu' : 'Netzwerk';
    return section(series, name + ' answers: A1, A2 and B1', para(neu ? 'The publisher calls the workbook Übungsbuch. The twelve solution entries across these six book guides required a registered customer account when checked. Each guide explains the official access route for the two chapter groups.' : 'The original edition uses Kursbuch and Arbeitsbuch. Its nine public solution PDFs are linked from these six book guides: one coursebook key and two workbook keys for each level.') + BOOK_LEVELS.map(level => `<div class="ba-level"><h3>${level.toUpperCase()}</h3><div class="level-grid">${rows.filter(g => g.series === series && g.level === level).map(g => `<article class="ba-book-card"><h4>${link(g.path, g.name + ' ' + level.toUpperCase() + ' ' + g.book + ' answers')}</h4><p>${g.component === 'kursbuch' ? 'Coursebook' : 'Workbook'} · ${neu ? 'Kapitel 1–6 and 7–12 · Publisher registration required' : g.component === 'kursbuch' ? 'Kapitel 1–12 · One official PDF' : 'Kapitel 1–6 and 7–12 · Two official PDFs'}</p></article>`).join('')}</div></div>`).join(''));
  }).join('');
  const body = `<section class="hero"><div class="eyebrow">Independent book-resource directory · A1–B1</div><h1>Netzwerk and Netzwerk neu answer keys: A1–B1</h1><p class="lede">Find the guide for your exact coursebook or workbook. The original Netzwerk edition has public publisher PDF links; Netzwerk neu solution entries currently require publisher registration. Choose the series before the level.</p><nav class="actions" aria-label="Choose your book series"><a class="btn" href="#netzwerk">Original Netzwerk</a><a class="btn secondary" href="#netzwerk-neu">Netzwerk neu</a></nav><p class="mini">Twelve book guides · Official publisher sources checked 15 November 2026</p></section><div class="stack ba-spacing">${section('choose', 'Which book do you have?', '<p><span lang="de">Kursbuch</span> means coursebook. The original Netzwerk workbook is called <span lang="de">Arbeitsbuch</span>; Netzwerk neu calls it <span lang="de">Übungsbuch</span>. Searches such as “Netzwerk Übung neu” or “Arbeitsbuch neu” can mix these names, so read the cover and title page first.</p><p>A full A1, A2 or B1 volume and a combined .1/.2 half-volume can use different section layouts. Match the series, level, component, chapter range and exercise instruction. Compare your ISBN with the publisher catalogue; do not assume an answer fits because the chapter number is familiar.</p>')}${groups}${section('access', 'What the resource links provide', '<p>A button marked “Open official PDF” points to a PDF endpoint on Klett’s website. A button marked “Find … on Klett” opens the official catalogue, where you select the level and resource and follow any account requirements. This directory does not host PDF copies, textbook scans or answer text.</p><p>The public availability of a file is separate from permission to republish it. Availability can also change. If a link fails, use the official series catalogue linked in the relevant book guide and look for the exact component and chapter range.</p>')}${section('study', 'Use a key after an independent attempt', '<p>Finish a small task before opening its solution. Compare the instruction, identify the reason for a correction and retry a few mistakes later with the key closed. For open writing or speaking, models illustrate possibilities; they do not assess every valid response or certify a CEFR level.</p><p>' + link('practice/index.html', 'Explore Klarweg’s original language practice') + ' · ' + link('german-exam-guidance.html', 'Choose Goethe or telc exam guidance') + ' · ' + link('german-books-for-beginners.html', 'Compare beginner book formats') + '.</p><p class="mini">Independent, AI-assisted editorial guidance with source checks. No human linguistic review or publisher affiliation is claimed. ' + link('contact.html', 'Report a correction') + '.</p>')}</div>`;
  outputs.set(BOOK_HUB, layout({title, description, file:BOOK_HUB, body, schema:[crumbs(), {'@type':'CollectionPage', name:title, description, url:url(BOOK_HUB), inLanguage:'en', isAccessibleForFree:true, publisher, mainEntity:{'@type':'ItemList', numberOfItems:rows.length, itemListElement:rows.map((g,i) => ({'@type':'ListItem', position:i + 1, name:`${g.name} ${g.level.toUpperCase()} ${g.book} answers`, url:url(g.path)}))}}]}));
  return outputs;
}

export function buildBookGuides({check = false} = {}) {
  const outputs = renderBookGuides();
  let changed = 0;
  for (const [file, html] of outputs) {
    if (fs.existsSync(path.join(ROOT, file)) && read(file) === html) continue;
    changed++;
    if (check) throw new Error('Stale generated book guide: ' + file);
    fs.mkdirSync(path.dirname(path.join(ROOT, file)), {recursive:true});
    fs.writeFileSync(path.join(ROOT, file), html);
  }
  console.log(`Book answer guides: ${outputs.size} files; ${changed} ${check ? 'stale' : 'updated'}`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) buildBookGuides({check:process.argv.includes('--check')});
