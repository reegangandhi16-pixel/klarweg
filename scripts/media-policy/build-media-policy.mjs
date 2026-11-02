#!/usr/bin/env node
/* Builds the media access policy for the private R2 bucket `klarweg-audio`.
 *
 *   node scripts/media-policy/build-media-policy.mjs --listing <r2-listing.json> --out <dir>
 *
 * Inputs (all read-only): this checkout's audio manifests, the free chapter data
 * files named in .github/pages-allowlist.txt, index.html, the lexicons, the
 * paid chapter data files, and a JSON listing of the bucket ({objects:[{key,size,etag}]}).
 * Free word audio is decided by the PLAYER ITSELF: kw-audio-engine.js runs in a
 * sandbox with the production manifests, and every German string on a free page
 * is resolved through it; whatever file it would play is free.
 * Outputs (keep OUT of the public repo): policy.json, report.json, free-words.tsv,
 * free-pages.tsv, lexicon-dryrun.json. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  AUDIO_ORIGIN, WORD_PREFIXES, sentenceRelToKey, vocabRelToKey, formRelToKey, wordsRelToKey, urlToKey,
  parseChapterId, chapterPrefixOfKey, compile, evaluate,
} from './policy.mjs';
import { chapterGermanStrings, homepageGermanStrings, visibleText, speakables, words, lexiconNeeds } from './free-vocabulary.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const readJson = (p) => JSON.parse(read(p));

export function loadChapterFile(rel) {
  const sb = { window: {} }; sb.self = sb.window;
  vm.runInNewContext(read(rel) + '\n;this.__C = typeof CHAPTER !== "undefined" ? CHAPTER : window.CHAPTER;', sb);
  return sb.__C;
}
export function freeDataFiles() {
  return read('.github/pages-allowlist.txt').split('\n').map((l) => l.trim())
    .filter((l) => /^chapter\/chapter-[a-z0-9-]+-data\.js$/.test(l));
}
export function loadLexicons() {
  const w = {};
  vm.runInNewContext(read('chapter/global-lexicon.js') + '\n;' + read('chapter/story-lexicon.js'), { window: w, self: w });
  return { G: w.KW_GLOBAL_LEXICON, I: w.KW_INFLECTIONS, CAPS: w.KW_GLOBAL_CAPS, S: w.KW_STORY_LEX };
}

/* Run the real player in a sandbox with production manifests (the site's
 * public/audio copies, which the player tries first). */
export async function enginePlayer() {
  const timers = [];
  const local = (u) => {
    let rel = null;
    if (u.startsWith(AUDIO_ORIGIN)) rel = u.slice(AUDIO_ORIGIN.length);
    else { const i = u.lastIndexOf('/audio/'); if (i >= 0) rel = u.slice(i + '/audio/'.length); }
    rel = rel && rel.split('?')[0];
    const p = rel && path.join(ROOT, 'public/audio', rel);
    return p && fs.existsSync(p) && rel !== 'manifest.json' ? p : null;   // full manifest is NOT published
  };
  const win = {
    document: { currentScript: { src: 'https://klarweg.in/public/audio/kw-audio-engine.js?v=1' }, addEventListener() {}, querySelectorAll: () => [], createElement: () => ({ style: {}, setAttribute() {}, addEventListener() {} }) },
    location: { origin: 'https://klarweg.in', href: 'https://klarweg.in/' },
    navigator: { userAgent: 'node' },
    setTimeout: (f) => { timers.push(f); return timers.length; }, clearTimeout() {}, setInterval: () => 0, clearInterval() {},
    addEventListener() {}, dispatchEvent() {}, CustomEvent: function () {},
    localStorage: { getItem: () => null, setItem() {} }, sessionStorage: { getItem: () => null, setItem() {} },
    AbortController: globalThis.AbortController, URL, Promise, console: { log() {}, warn() {}, info() {}, error() {}, debug() {} },
    fetch: (u) => {
      const p = local(String(u));
      return Promise.resolve(p
        ? { ok: true, status: 200, json: () => Promise.resolve(JSON.parse(fs.readFileSync(p, 'utf8'))) }
        : { ok: false, status: 404, json: () => Promise.reject(new Error('404')) });
    },
  };
  win.window = win;
  vm.runInNewContext(read('public/audio/kw-tts-config.js'), win);
  vm.runInNewContext(read('public/audio/kw-audio-engine.js'), win);
  const settle = async () => {
    for (let round = 0; round < 50; round++) {
      while (timers.length) { try { timers.shift()(); } catch { /* engine timer */ } }
      for (let i = 0; i < 10; i++) await new Promise((r) => setImmediate(r));
      if (!timers.length) break;
    }
  };
  await settle();
  await Promise.all([win.KW_ensureVocab(), win.KW_ensureConjugation(), win.KW_ensureWordFormManifest()]);
  await settle();
  if (!win.KW_audioReady()) throw new Error('engine manifest did not load');
  return {
    win,
    /* Every file the player could play for this exact text, by layer. */
    resolve(text) {
      const hits = [];
      const add = (layer, url) => { const key = urlToKey(url); if (key) hits.push({ layer, key }); };
      const plain = win.KW_resolveInfo(text);
      if (plain && plain.url) add(plain.source, plain.url);
      for (const g of ['female', 'male']) { const r = win.KW_resolveInfo(text, g); if (r && r.url) add(r.source + ':' + g, r.url); }
      const wf = win.KW_wordFormDebug(text);
      if (wf && wf.mapped) add('word-form', wf.mapped);
      return hits;
    },
  };
}

function sha256(buf) { return crypto.createHash('sha256').update(buf).digest('hex'); }

export async function build({ listing }) {
  const objects = listing.objects;
  const r2 = new Map(objects.map((o) => [o.key, o]));
  const full = readJson('public/audio/manifest.json').entries;
  const pub = readJson('public/audio/manifest-public.json').entries;

  /* 1. Sentence lines and chapters. */
  const chapterOfPrefix = {}, prefixConflicts = [], lineMismatch = [];
  const lines = { paid: 0, freeChapter: 0, noChapter: 0 };
  const freeData = freeDataFiles();
  const freeChapterIds = freeData.map((f) => loadChapterFile(f).id);
  const freeChapterSet = new Set(freeChapterIds);
  const freeEvidence = new Map();                    // key → [{source, text, layer}]
  const addFree = (key, ev) => { if (!freeEvidence.has(key)) freeEvidence.set(key, []); freeEvidence.get(key).push(ev); };
  const referenced = new Map();                      // key → Set(manifest family)
  const ref = (key, fam) => { if (!key) return; if (!referenced.has(key)) referenced.set(key, new Set()); referenced.get(key).add(fam); };

  const noChapter = [];
  for (const [text, v] of Object.entries(full)) {
    const rel = typeof v === 'string' ? v : (v.file || v.audio);
    const key = sentenceRelToKey(rel);
    ref(key, 'sentence');
    const chapter = typeof v === 'object' ? v.chapter : null;
    if (!chapter) { lines.noChapter++; noChapter.push({ text, key }); addFree(key, { source: 'homepage/no-chapter line', text, layer: 'manifest' }); continue; }
    if (freeChapterSet.has(chapter)) { lines.freeChapter++; addFree(key, { source: chapter, text, layer: 'manifest' }); continue; }
    lines.paid++;
    const c = chapterPrefixOfKey(key), p = parseChapterId(chapter);
    if (!c || !p || c.level !== p.level || c.number !== p.number || (v.level && v.level !== c.level)) { lineMismatch.push({ text, key, chapter, level: v.level }); continue; }
    if (chapterOfPrefix[c.prefix] && chapterOfPrefix[c.prefix] !== chapter) prefixConflicts.push({ prefix: c.prefix, a: chapterOfPrefix[c.prefix], b: chapter });
    chapterOfPrefix[c.prefix] = chapter;
  }
  // Free chapters' own prefixes are recorded too (so a stray free-chapter file is caught).
  for (const [, v] of Object.entries(full)) {
    if (typeof v === 'object' && v.chapter && freeChapterSet.has(v.chapter)) {
      const c = chapterPrefixOfKey(sentenceRelToKey(v.file));
      if (c) chapterOfPrefix[c.prefix] = chapterOfPrefix[c.prefix] || v.chapter;
    }
  }

  /* 2. Word / form / conjugation references and the manifests themselves. */
  const wordManifests = {
    'vocab/manifest.json': { rel: vocabRelToKey, fam: 'vocab-cdn' },
    'a1-words-manifest.json': { rel: wordsRelToKey, fam: 'a1-words' },
    'a2-words-manifest.json': { rel: wordsRelToKey, fam: 'a2-words' },
    'b1-words-manifest.json': { rel: wordsRelToKey, fam: 'b1-words' },
  };
  for (const [file, { rel, fam }] of Object.entries(wordManifests)) {
    for (const v of Object.values(readJson('public/audio/' + file))) {
      if (typeof v === 'string') ref(rel(v), fam);
      else if (v) { ref(rel(v.female), fam); ref(rel(v.male), fam); }
    }
  }
  for (const v of Object.values(readJson('public/audio/vocab/manifest-word-form.json'))) ref(formRelToKey(v), 'word-form');
  for (const v of Object.values(readJson('public/audio/vocab/manifest-conjugation.json'))) ref(formRelToKey(v), 'conjugation');
  for (const m of read('public/audio/kw-reading-exceptions.js').matchAll(/"file":\s*"([^"]+)"/g)) ref(sentenceRelToKey(m[1]), 'reading-exceptions');
  for (const m of read('public/audio/kw-story-exceptions.js').matchAll(/file:\s*'([^']+)'/g)) ref(sentenceRelToKey(m[1]), 'story-exceptions');
  const manifestKeys = objects.map((o) => o.key).filter((k) => k.endsWith('.json'));

  /* 3. Free pages → strings → the player's own resolution. */
  const player = await enginePlayer();
  const pages = [];
  const freeWordRows = [];
  const pageStrings = {};
  for (const f of freeData) {
    const c = loadChapterFile(f);
    pageStrings[c.id] = chapterGermanStrings(c);
    pages.push({ page: f.replace('-data.js', '').replace(/^chapter\/chapter-/, 'chapter/chapter-') + ' (' + c.id + ')', status: 'free (Chapter 1)' });
  }
  const html = read('index.html');
  const hp = homepageGermanStrings(html, noChapter.map((x) => x.text));
  pageStrings['index.html'] = hp.strings;
  pages.unshift({ page: 'index.html', status: 'free (homepage)' });

  const resolvedFromFree = new Set();
  for (const [page, strings] of Object.entries(pageStrings)) {
    for (const s of speakables(strings)) {
      for (const h of player.resolve(s)) {
        resolvedFromFree.add(h.key);
        if (h.layer === 'manifest') { if (!freeEvidence.has(h.key)) addFree(h.key, { source: page, text: s, layer: 'manifest(resolved)' }); continue; }
        addFree(h.key, { source: page, text: s, layer: h.layer });
        freeWordRows.push([s, h.layer, h.key, page]);
      }
    }
  }

  /* Visible homepage English copy that would resolve to word audio: flagged, not freed. */
  const germanTokens = new Set(Object.values(pageStrings).flatMap((a) => a.flatMap(words)));
  const flaggedCopy = [];
  for (const w of new Set(words(visibleText(html)))) {
    if (germanTokens.has(w)) continue;
    const hits = player.resolve(w).filter((h) => h.layer !== 'manifest' && !freeEvidence.has(h.key));
    if (hits.length) flaggedCopy.push({ word: w, keys: [...new Set(hits.map((h) => h.key))] });
  }

  /* No-chapter lines that may come from paid content: text found in a paid chapter, not on the homepage. */
  const paidFiles = execFileSync('git', ['ls-files', 'chapter/chapter-*-data.js'], { cwd: ROOT, encoding: 'utf8' })
    .split('\n').filter(Boolean).filter((f) => !freeData.includes(f));
  const paidStrings = {};
  for (const f of paidFiles) { const c = loadChapterFile(f); if (c && c.id) paidStrings[c.id] = chapterGermanStrings(c); }
  const paidBlob = Object.entries(paidStrings).map(([id, a]) => [id, a.join('\n')]);
  const hpFound = new Set(hp.noChapterFound);
  const noChapterFlags = noChapter.filter((x) => !hpFound.has(x.text)).map((x) => ({
    text: x.text, key: x.key, alsoInPaidChapters: paidBlob.filter(([, b]) => b.includes(x.text)).map(([id]) => id).slice(0, 5),
  }));

  /* Pre-existing player path bug: vocab/manifest.json root-relative entries
     ("/audio/words/…") resolve to vocab/words/… which does not exist; the
     recording lives at words/…. Record the real file as referenced (and free
     when the free page asks for it) so a later path fix needs no policy change. */
  const aliases = [];
  for (const k of [...referenced.keys()]) {
    if (!r2.has(k) && k.startsWith('vocab/words/') && r2.has(k.slice('vocab/'.length))) {
      aliases.push(k); ref(k.slice('vocab/'.length), 'vocab-cdn(alias)');
      if (freeEvidence.has(k)) for (const ev of freeEvidence.get(k)) addFree(k.slice('vocab/'.length), { ...ev, layer: ev.layer + '(alias)' });
    }
  }

  /* 4. Classify every object. */
  const freeKeys = [...freeEvidence.keys()].filter((k) => r2.has(k)).sort();
  const denyListed = objects.map((o) => o.key)
    .filter((k) => !freeEvidence.has(k) && !referenced.has(k) && !k.endsWith('.json')
      && (WORD_PREFIXES.some((p) => k.startsWith(p)) || chapterPrefixOfKey(k)))
    .sort();
  const policy = {
    schema: 1,
    bucket: 'klarweg-audio',
    free: freeKeys,
    manifests: manifestKeys.sort(),
    denyListed,
    chapters: Object.fromEntries(Object.entries(chapterOfPrefix).sort()),
    freeChapters: [...freeChapterIds].sort(),
  };
  const compiled = compile(policy);
  const classCounts = {}, byPrefixClass = {};
  for (const o of objects) {
    const r = evaluate(compiled, o.key);
    const label = r.cls + (r.reason ? ':' + r.reason : '');
    classCounts[label] = (classCounts[label] || 0) + 1;
    const top = o.key.split('/').slice(0, o.key.startsWith('vocab/') ? 3 : 1).join('/');
    byPrefixClass[top] = byPrefixClass[top] || {};
    byPrefixClass[top][label] = (byPrefixClass[top][label] || 0) + 1;
  }

  /* 5. Lexicon dry run. */
  const L = loadLexicons();
  const freeNeeds = lexiconNeeds(Object.values(pageStrings).flat(), L);
  const perChapter = {};
  const paidUnionG = new Set(), paidUnionS = new Set();
  for (const [id, a] of Object.entries(paidStrings)) {
    const n = lexiconNeeds(a, L);
    perChapter[id] = { global: n.g.size, inflections: n.inf.size, caps: n.caps.size, story: n.story.size };
    n.g.forEach((k) => paidUnionG.add(k)); n.story.forEach((k) => paidUnionS.add(k));
  }
  const gKeys = Object.keys(L.G), sKeys = Object.keys(L.S);
  const sizes = Object.values(perChapter).map((x) => x.global).sort((a, b) => a - b);
  const lexicon = {
    global: {
      total: gKeys.length,
      publicKeep: freeNeeds.g.size,
      neededByPaidChapters: paidUnionG.size,
      paidOnly: [...paidUnionG].filter((k) => !freeNeeds.g.has(k)).length,
      usedNowhere: gKeys.filter((k) => !freeNeeds.g.has(k) && !paidUnionG.has(k)).length,
      perChapterSlice: { chapters: sizes.length, min: sizes[0], median: sizes[Math.floor(sizes.length / 2)], max: sizes[sizes.length - 1] },
    },
    inflections: { total: Object.keys(L.I).length, publicKeep: freeNeeds.inf.size },
    caps: { total: Object.keys(L.CAPS).length, publicKeep: freeNeeds.caps.size },
    story: {
      total: sKeys.length, publicKeep: freeNeeds.story.size, neededByPaidChapters: paidUnionS.size,
      paidOnly: [...paidUnionS].filter((k) => !freeNeeds.story.has(k)).length,
      usedNowhere: sKeys.filter((k) => !freeNeeds.story.has(k) && !paidUnionS.has(k)).length,
    },
  };

  /* Engine pages: everything that loads the player, for review. */
  const enginePages = execFileSync('git', ['grep', '-l', 'kw-audio-engine', '--', '*.html'], { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  const allow = read('.github/pages-allowlist.txt');
  const published = (p) => allow.split('\n').some((l) => l.trim() === p) || (/^chapter\/chapter-.*\.html$/.test(p) && allow.includes('GLOB:chapter/chapter-*.html'));
  const freeHtml = new Set(['index.html', ...freeChapterIds.map((id) => 'chapter/chapter-' + id + '.html')]);
  const pageList = enginePages.map((p) => ({
    page: p,
    published: published(p),
    status: freeHtml.has(p) ? 'free (confirmed)' : /^chapter\/chapter-/.test(p) ? 'paid chapter' : 'needs owner review',
  }));

  const policyJson = JSON.stringify(policy);
  const report = {
    inputs: {
      repoHead: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim(),
      listingSha256: sha256(JSON.stringify(listing.objects)), listingCount: objects.length, listedAt: listing.listedAt,
    },
    policySha256: sha256(policyJson),
    lines, distinctSentenceFiles: new Set(Object.values(full).map((v) => sentenceRelToKey(typeof v === 'string' ? v : v.file))).size,
    publicManifestEntries: Object.keys(pub).length,
    freeChapters: freeChapterIds,
    chapterPrefixes: Object.keys(chapterOfPrefix).length,
    classCounts, byPrefixClass,
    freeKeys: freeKeys.length,
    freeByLayer: Object.fromEntries(Object.entries(freeWordRows.reduce((a, r) => { a[r[1]] = a[r[1]] || new Set(); a[r[1]].add(r[2]); return a; }, {})).map(([k, s]) => [k, s.size])),
    freeWordTexts: new Set(freeWordRows.map((r) => r[0])).size,
    mismatches: {
      lineFilenameVsChapter: lineMismatch,
      prefixConflicts,
      referencedButMissingInR2: [...referenced.keys()].filter((k) => !r2.has(k) && !aliases.includes(k)),
      playerPathBugAliases: aliases.length,
      freeEvidenceMissingInR2: [...freeEvidence.keys()].filter((k) => !r2.has(k) && !aliases.includes(k)),
      unreferencedObjects: denyListed.length,
      unreferencedSample: denyListed.slice(0, 20),
      otherUnclassified: objects.map((o) => o.key).filter((k) => !referenced.has(k) && !freeEvidence.has(k) && !k.endsWith('.json') && !denyListed.includes(k)),
    },
    noChapterLinesNotOnHomepage: noChapterFlags,
    homepageEnglishCopyFlagged: flaggedCopy,
    pages: pageList,
    lexicon,
    lexiconPerChapter: perChapter,
    siteVsR2Manifests: Object.fromEntries(['a1-words-manifest.json', 'a2-words-manifest.json', 'b1-words-manifest.json', 'vocab/manifest.json', 'vocab/manifest-word-form.json', 'vocab/manifest-conjugation.json']
      .map((f) => [f, { site: fs.statSync(path.join(ROOT, 'public/audio', f)).size, r2: r2.get(f) ? r2.get(f).size : null }])),
  };
  const evidence = Object.fromEntries(freeKeys.map((k) => [k, freeEvidence.get(k).slice(0, 3)]));
  return { policy, policyJson, report, freeWordRows, evidence, pageStrings, player };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const arg = (n) => { const i = process.argv.indexOf(n); return i > 0 ? process.argv[i + 1] : null; };
  const listingPath = arg('--listing'), out = arg('--out');
  if (!listingPath || !out) { console.error('usage: --listing <file> --out <dir>'); process.exit(2); }
  if (path.resolve(out).startsWith(ROOT + path.sep)) { console.error('refusing to write outputs inside the repository'); process.exit(2); }
  fs.mkdirSync(out, { recursive: true });
  const { policyJson, report, freeWordRows, evidence } = await build({ listing: JSON.parse(fs.readFileSync(listingPath, 'utf8')) });
  fs.writeFileSync(path.join(out, 'policy.json'), policyJson);
  fs.writeFileSync(path.join(out, 'free-evidence.json'), JSON.stringify(evidence));
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(out, 'free-words.tsv'), 'text\tlayer\tkey\tpage\n' + [...new Map(freeWordRows.map((r) => [r.join('\t'), r])).values()].map((r) => r.join('\t')).sort().join('\n') + '\n');
  fs.writeFileSync(path.join(out, 'free-pages.tsv'), 'page\tpublished\tstatus\n' + report.pages.map((p) => [p.page, p.published, p.status].join('\t')).join('\n') + '\n');
  fs.writeFileSync(path.join(out, 'lexicon-dryrun.json'), JSON.stringify({ summary: report.lexicon, perChapter: report.lexiconPerChapter }, null, 2));
  console.log(JSON.stringify({ policySha256: report.policySha256, classCounts: report.classCounts, freeKeys: report.freeKeys }, null, 1));
}
