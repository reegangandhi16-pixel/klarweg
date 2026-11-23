import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { findChrome, launchChrome } from './chapter-resources/chrome-pdf.mjs';

const root = new URL('../', import.meta.url);
const source = await fs.readFile(new URL('docs/seo/keyword-guides/german-a1-worksheet-hindi.html', root), 'utf8');
const lists = [...source.matchAll(/<ol>[\s\S]*?<\/ol>/g)].map(([list]) => list);
assert.equal(lists.length, 2, 'The worksheet must have an exercise list and an answer list.');

const worksheet = lists[0].replaceAll('</li>', '<div class="write-line"></div></li>');
const html = `<!doctype html><html lang="en"><meta charset="utf-8">
<title>Klarweg A1 German Worksheet with Hindi Cues</title>
<style>
@page { size: A4; margin: 18mm; }
body { color:#172537; font:11pt/1.4 "Helvetica Neue",Arial,sans-serif; }
[lang=hi] { font-family:"Kohinoor Devanagari","Devanagari Sangam MN",sans-serif; }
section { break-after:page; }
section:last-child { break-after:auto; }
header { border-top:4px solid #14634d; padding-top:8mm; }
.brand { margin:0;color:#14634d;font-weight:700;letter-spacing:.05em; }
h1,h2 { color:#143f34;line-height:1.16; }
h1 { margin:.3em 0; font-size:24pt; }
h2 { margin:.45em 0; font-size:25pt; }
ol { padding-left:7mm; }
li { break-inside:avoid; padding-left:2mm;margin:0 0 2.2mm; }
.write-line { height:6.5mm; border-bottom:1px solid #8a9f98; }
footer { border-top:1px solid #a7b9b2;padding-top:3mm;margin-top:8mm;font-size:10pt;color:#38534b; }
a { color:inherit; }
</style><body>
<section><header><p class="brand">Klarweg · A1 practice</p><h1>German A1 Worksheet</h1><p lang="hi">हिंदी संकेतों के साथ 20 अभ्यास</p></header>
<p>Name: ________________________ &nbsp; Date: __________________</p>
<p>Write your answers first. Compare them with the answer key on the last page.</p>${worksheet}
<footer><a href="https://klarweg.in/german-a1-worksheet-hindi">Klarweg A1 Worksheet Online</a></footer></section>
<section><header><p class="brand">Klarweg · A1 practice</p><h2>Answer Key</h2></header>
<p>Circle the wording you missed. Cover the model, then say or write the corrected answer again.</p>${lists[1]}
<footer><a href="https://klarweg.in/german-a1-worksheet-hindi">Klarweg A1 Worksheet Online</a></footer></section>
</body></html>`;

const chrome = findChrome();
assert.ok(chrome, 'Chrome is required to print the worksheet.');
const scratch = await fs.mkdtemp(path.join(os.tmpdir(), 'klarweg-worksheet-'));
const browser = await launchChrome(chrome);
try {
  const file = path.join(scratch, 'worksheet.html');
  await fs.writeFile(file, html);
  const pdf = await browser.printToPdf(pathToFileURL(file).href);
  await fs.writeFile(new URL('downloads/klarweg-a1-worksheet-hindi.pdf', root), pdf);
} finally {
  await browser.close();
  await fs.rm(scratch, { recursive: true, force: true });
}
