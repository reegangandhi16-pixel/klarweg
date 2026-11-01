/* Level bundles: every chapter's Vocabulary / Homework / Grammar Rules PDF of
   one level in a single document, in course order, behind a cover and a
   contents page. Each chapter is the exact body of its own resource (same
   builder, same CSS), on its own named page so its footer keeps the chapter's
   running title and its own chapter QR. Page numbers run across the bundle.
   Pure (no fs, no Chrome) so it is unit-testable. */
import { listResources, parseId, compareIds, esc, cssString } from './common.mjs';
import { buildResource, QR_LABEL, qrDataUri } from './templates.mjs';

export const COMBINED_TYPES = { vocabulary: 'Vocabulary', homework: 'Homework', grammar: 'Grammar Rules' };

export const combinedFile = (level, type) =>
  `${level}/Klarweg_${level.toUpperCase()}_All_Chapters_${COMBINED_TYPES[type].replace(/ /g, '_')}.pdf`;

const chapterUrlOf = (siteBase, id) => `${siteBase}/chapter/chapter-${id}.html`;
const pad2 = (n) => String(n).padStart(2, '0');
const displayTitle = (t) => String(t || '').replace(/\s+PDF$/i, '');

/* → { included: [{ id, number, title, titleEn, resourceTitle, body, running, chapterUrl }], missing: [{ id, number, title }] } */
export function collectLevel(chapters, level, type, { css, roleCss, siteBase }) {
  const included = [];
  const missing = [];
  const ofLevel = chapters.filter((C) => parseId(C.id).level === level).sort((a, b) => compareIds(a.id, b.id));
  for (const C of ofLevel) {
    const r = listResources(C).find((x) => x.type === type);
    const chapterUrl = chapterUrlOf(siteBase, C.id);
    const built = r && r.template ? buildResource(C, r, { css, roleCss, chapterUrl }) : null;
    if (!built) { missing.push({ id: C.id, number: C.number, title: C.title }); continue; }
    included.push({ id: C.id, number: C.number, title: C.title, titleEn: C.titleEn || '', resourceTitle: displayTitle(r.title), body: built.body, running: built.running, chapterUrl });
  }
  return { included, missing };
}

/* startPages: null on the measuring pass, else one bundle page number per included chapter. */
export function buildCombined({ level, type, included, missing, css, roleCss, combinedCss, startPages = null }) {
  const L = level.toUpperCase();
  const kind = COMBINED_TYPES[type];
  const range = included.length ? `Chapters ${included[0].number}–${included[included.length - 1].number}` : '';
  const front = `Klarweg · ${L} · ${kind} · All Chapters`;

  const cover = `<section class="kw-cover"><div class="kw-cover-in">
  <div class="kw-cover-top"><span class="wordmark">Klarweg</span><span class="mast-tag">German · ${esc(L)}</span></div>
  <div class="kw-cover-main">
    <div class="mast-eyebrow">Level ${esc(L)}</div>
    <div class="kw-cover-title">${esc(kind)}</div>
    <div class="kw-cover-sub">All Chapters</div>
  </div>
  <div class="kw-cover-meta">${included.length} chapters · ${esc(range)} · klarweg.in</div>
</div></section>`;

  const row = (c, i) => `<li><a href="#kw-ch-${c.number}"><span class="tnum">${pad2(c.number)}</span><span class="kw-toc-t"><span class="de">${esc(c.title)}</span>${c.titleEn ? ` <span class="muted">— ${esc(c.titleEn)}</span>` : ''}${c.resourceTitle !== kind ? `<span class="kw-toc-r">${esc(c.resourceTitle)}</span>` : ''}</span><span class="kw-toc-p">${startPages ? startPages[i] : ''}</span></a></li>`;
  const notIncluded = missing.length
    ? `<div class="kw-toc-missing"><div class="lbl">Not included</div><p class="muted">These chapters of ${esc(L)} have no ${esc(kind)} resource; their own materials are on each chapter page.</p><ul>${missing.map((m) => `<li><span class="tnum">${pad2(m.number)}</span> <span class="de">${esc(m.title)}</span></li>`).join('')}</ul></div>`
    : '';
  const toc = `<section class="kw-toc"><h1>Contents</h1>
  <p class="muted kw-toc-intro">${esc(L)} · ${esc(kind)} · ${included.length} chapters in course order. Every page carries the QR code of its own chapter.</p>
  <ol class="kw-toc-list">${included.map(row).join('')}</ol>${notIncluded}</section>`;

  const pageRules = included.map((c) => `.kw-ch-${c.number} { page: kw-ch${c.number}; }
@page kw-ch${c.number} { @bottom-left { content: ${cssString(c.running)}; }
  @bottom-right { content: counter(page) " / " counter(pages) "\\A " ${cssString(QR_LABEL)}; background-image: url("${qrDataUri(c.chapterUrl)}"); } }`).join('\n');
  const chaptersHtml = included.map((c) => `<section class="kw-ch kw-ch-${c.number}" id="kw-ch-${c.number}">${c.body}</section>`).join('\n');

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(`Klarweg ${L} — ${kind} — All Chapters`)}</title>
<style>${css}
${roleCss}
${combinedCss}
@page kw-front { @bottom-left { content: ${cssString(front)}; } }
${pageRules}
</style></head>
<body>${cover}
${toc}
${chaptersHtml}</body></html>`;
}

/* Chrome writes the page tree and the named destinations (one per
   same-document link target) uncompressed. → { pageCount, pageOf(name) }:
   the 1-based page each #anchor landed on. */
export function namedDestPages(buf) {
  const s = Buffer.isBuffer(buf) ? buf.toString('latin1') : String(buf);
  const objs = new Map();
  for (const m of s.matchAll(/(\d+) 0 obj\s*(<<[\s\S]*?>>)\s*(?:stream|endobj)/g)) objs.set(Number(m[1]), m[2]);
  const ref = (dict, key) => { const m = dict.match(new RegExp(`/${key}\\s+(\\d+) 0 R`)); return m ? Number(m[1]) : null; };
  const catalog = [...objs.values()].find((d) => /\/Type\s*\/Catalog/.test(d));
  if (!catalog) throw new Error('PDF: no catalog');
  const pages = [];
  const walk = (n) => {
    const d = objs.get(n);
    if (!d) throw new Error(`PDF: missing page-tree object ${n}`);
    if (/\/Type\s*\/Pages/.test(d)) { for (const k of d.match(/\/Kids\s*\[([^\]]*)\]/)[1].matchAll(/(\d+) 0 R/g)) walk(Number(k[1])); }
    else pages.push(n);
  };
  walk(ref(catalog, 'Pages'));
  const index = new Map(pages.map((n, i) => [n, i + 1]));
  const destsObj = ref(catalog, 'Dests');
  const dests = new Map();
  if (destsObj != null) {
    for (const m of objs.get(destsObj).matchAll(/\/([A-Za-z0-9#._-]+)\s*\[\s*(\d+) 0 R/g)) dests.set(m[1], index.get(Number(m[2])));
  }
  return {
    pageCount: pages.length,
    pageOf: (name) => {
      const p = dests.get(name);
      if (p == null) throw new Error(`PDF: no page destination for #${name}`);
      return p;
    },
  };
}
