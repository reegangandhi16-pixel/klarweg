#!/usr/bin/env node
// Optional live publisher audit. No logins, cached-file fallbacks or PDF storage.
// NODE_USE_ENV_PROXY=1 npm run check:book-sources
import assert from 'node:assert/strict';
import {loadBookGuides, BOOK_LEVELS, BOOK_SERIES} from './build-book-answer-guides.mjs';

const rows = loadBookGuides();
const normalise = s => s.replace(/<[^>]*>/g, ' ').replace(/&(?:amp|nbsp);/g, ' ').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();
const get = async url => {
  const r = await fetch(url, {headers:{'User-Agent':'Mozilla/5.0'}, signal:AbortSignal.timeout(45000)});
  assert.equal(r.status, 200, url + ': HTTP ' + r.status);
  return r;
};
const catalogues = await Promise.all(BOOK_SERIES.flatMap(series => BOOK_LEVELS.map(async level => {
  // Same guest GET used by the public level selector in the publisher catalogue.
  const query = new URLSearchParams({reiter:'mediathek', niveau:({a1:'2',a2:'9',b1:'15'})[level], dl_niveau_str:level.toUpperCase(), series_id:series === 'netzwerk' ? '187' : '605'});
  const url = 'https://www.klett-sprachen.de/ajax/downloads_seriesdetail?' + query;
  const s = await (await get(url)).text();
  const chunks = s.split(/<div class="download row">/).slice(1);
  const entries = rows.filter(g => g.series === series && g.level === level).flatMap(g => g.resources);
  const checks = entries.map(entry => {
    const chunk = chunks.find(c => {
      const h4 = /<h4\b[^>]*>([\s\S]*?)<\/h4>/.exec(c);
      return h4 && normalise(h4[1]) === normalise(entry.label);
    });
    assert.ok(chunk, 'Missing catalogue entry: ' + entry.label);
    const gated = chunk.includes('nur für registrierte Kunden und Kundinnen sichtbar');
    if (entry.status === 'registration') {
      assert.ok(gated, 'Access status changed: ' + entry.label);
      assert.ok(chunk.includes('/warenkorb/konto.html'), 'Missing official account route');
    } else {
      assert.ok(!gated, 'Public resource is now gated: ' + entry.label);
      assert.ok(chunk.includes('href="' + new URL(entry.url).pathname + '"'), 'PDF link changed: ' + entry.label);
    }
    return {label:entry.label, chapters:entry.chapters, status:entry.status, url:entry.url};
  });
  return {series, level, guestCatalogue:url, entries:checks};
})));
const urls = [...new Set(rows.flatMap(g => g.resources.filter(r => r.status === 'public-pdf').map(r => r.url)))];
const pdfs = [];
// Limit PDF requests to one at a time; stop reading as soon as the header is verified.
for (const url of urls) {
  const r = await get(url);
  const mime = r.headers.get('content-type');
  assert.match(mime || '', /^application\/pdf\b/i, url + ': not a PDF');
  const reader = r.body.getReader();
  let prefix = '';
  try {
    while (prefix.length < 5) { const next = await reader.read(); if (next.done) break; prefix += Buffer.from(next.value).toString('latin1'); }
  } finally { await reader.cancel(); }
  assert.ok(prefix.startsWith('%PDF-'), url + ': missing PDF header');
  pdfs.push({url, status:r.status, mime, pdfHeader:true});
}
console.log(JSON.stringify({checkedAt:new Date().toISOString(), guestCatalogues:catalogues, publicPdfs:pdfs, publicPdfCount:pdfs.length, registrationEntryCount:catalogues.flatMap(c => c.entries).filter(e => e.status === 'registration').length, pdfCopiesStored:false, result:'PASS'}, null, 2));
