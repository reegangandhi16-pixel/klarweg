#!/usr/bin/env node
/* Lexicon split — the word-popup dictionary is no longer published whole.

   chapter/global-lexicon.js and chapter/story-lexicon.js stay the single
   source of truth (every chapter's meanings, Hindi, examples, forms). They are
   NOT published any more. This script derives from them:

     chapter/global-lexicon-public.js   KW_GLOBAL_LEXICON / KW_INFLECTIONS /
     chapter/story-lexicon-public.js    KW_GLOBAL_CAPS / KW_STORY_LEX entries that
                                        a FREE page needs (homepage + every
                                        Chapter 1), published on Pages
     chapterLexiconTail(chapter)        for chapter-lock.mjs: a PAID chapter's own
                                        slice (window.KW_CHAPTER_LEXICON), appended
                                        to its gated payload (/api/chapters/<id>.js)
     lexiconShards()                    the full lexicon in 64 shards for the
                                        review page's protected lookup
                                        (/api/saved-words/lexicon)

   The popup code is unchanged: each public file, and the gated payload, end
   with the same idempotent merge, so whichever loads last fills
   window.KW_GLOBAL_LEXICON & co. with the chapter's slice before the
   dictionary's onload fires — exactly the timing the popup has today.

     node scripts/lexicon-split.mjs            write the two public files
     node scripts/lexicon-split.mjs --check    exit 1 if they are out of date */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHAPTER_DIR = path.join(ROOT, "chapter");
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
export const PUBLIC_GLOBAL = "chapter/global-lexicon-public.js";
export const PUBLIC_STORY = "chapter/story-lexicon-public.js";
export const SHARDS = 64;

/* ---------- sources ---------- */
let lex = null;
export function loadLexicons() {
  if (lex) return lex;
  const w = {};
  vm.runInNewContext(read("chapter/global-lexicon.js") + "\n;" + read("chapter/story-lexicon.js"), { window: w, self: w });
  lex = { G: w.KW_GLOBAL_LEXICON, I: w.KW_INFLECTIONS, CAPS: w.KW_GLOBAL_CAPS, S: w.KW_STORY_LEX };
  for (const [k, v] of Object.entries(lex)) if (!v || typeof v !== "object") throw new Error("lexicon part missing: " + k);
  return lex;
}
export function chapterData(file) {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(CHAPTER_DIR, file), "utf8"), sandbox, { filename: file });
  return sandbox.window.CHAPTER;
}

/* ---------- the German a page shows ---------- */
export function stripHtml(s) {
  return String(s).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
}
/* Every string in the chapter object. Over-inclusive on purpose: an English
   word that happens to be a lexicon key only makes the slice a little larger;
   a missed German word would lose its popup meaning. */
export function allStrings(o, out = []) {
  if (typeof o === "string") { if (o.trim()) out.push(stripHtml(o)); return out; }
  if (Array.isArray(o)) { for (const x of o) allStrings(x, out); return out; }
  // A vocab entry's optional `img` (path + English alt text) is never German
  // text: skipped, so it cannot pull dictionary entries into the public file.
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (k !== "img") allStrings(v, out);
  return out;
}
export function homepageStrings(html) {
  const out = [];
  for (const m of html.matchAll(/data-word="([^"]+)"/g)) out.push(m[1]);
  for (const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
    for (const s of m[1].matchAll(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g)) out.push(s[1] || s[2] || "");
  }
  out.push(stripHtml(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")));
  return out.filter(Boolean);
}
export function words(s) {
  return String(s).match(/[A-Za-zÄÖÜäöüß]+(?:['’-][A-Za-zÄÖÜäöüß]+)*-?/g) || [];
}
/* chapter-app.js normWord() / storyNorm(). */
export function normWord(w) {
  return String(w || "").toLowerCase()
    .replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, "")
    .replace(/^['’-]+|['’-]+$/g, "")
    .trim();
}
export function storyNorm(w) { return normWord(w).replace(/['’\-]/g, ""); }

/* Lexicon keys a set of strings can reach through any popup lookup path:
   exact key, inflection → lemma, capitalised overlay (and its canonical
   entry), story lexicon, hyphen parts, compound split, multi-word keys. */
export function lexiconNeeds(strings, L = loadLexicons()) {
  const { G, I, CAPS, S } = L;
  const g = new Set(), inf = new Set(), caps = new Set(), story = new Set();
  const addG = (k) => { if (k && Object.prototype.hasOwnProperty.call(G, k)) g.add(k); };
  const one = (w) => {
    const nk = normWord(w);
    addG(nk);
    if (Object.prototype.hasOwnProperty.call(I, nk)) { inf.add(nk); addG(normWord(I[nk])); }
    const bare = String(w).replace(/[.,!?;:„“”‘’»«()]/g, "");
    if (Object.prototype.hasOwnProperty.call(CAPS, bare)) {
      caps.add(bare);
      const v = CAPS[bare];
      if (typeof v === "string") addG(normWord(v)); else if (v && typeof v.w === "string") addG(normWord(v.w));
    }
    const sk = storyNorm(w);
    if (Object.prototype.hasOwnProperty.call(S, sk)) story.add(sk);
    if (nk.length > 5 && !G[nk] && !I[nk]) {                         // compound split, as resolveLemma()
      for (let cut = 3; cut <= nk.length - 3; cut++) {
        const head = nk.slice(0, cut), tail = nk.slice(cut);
        for (const h of [head, head.replace(/[sn]$/, "")]) if (G[h] && G[tail]) { g.add(h); g.add(tail); }
      }
    }
  };
  for (const s of strings) {
    const ws = words(s);
    for (const w of ws) {
      one(w);
      if (/[-'’]/.test(w)) for (const part of w.split(/[-'’]/)) if (part) one(part);
    }
    for (let n = 2; n <= 4; n++) for (let i = 0; i + n <= ws.length; i++) addG(normWord(ws.slice(i, i + n).join(" ")));
  }
  return { g, inf, caps, story };
}

/* ---------- free vs paid ---------- */
let chaptersCache = null;
export function chapters() {
  if (chaptersCache) return chaptersCache;
  chaptersCache = fs.readdirSync(CHAPTER_DIR).filter((f) => /^chapter-.+-data\.js$/.test(f)).sort().map((file) => {
    const C = chapterData(file);
    const m = C.id.match(/^(a1|a2|b1|b2|c1|c2)-([0-9]{1,2})-/);
    return { id: C.id, number: Number(m[2]), file, C };
  });
  return chaptersCache;
}
let freeCache = null;
export function freeNeeds() {
  if (freeCache) return freeCache;
  const strings = [...homepageStrings(read("index.html"))];
  for (const c of chapters()) if (c.number === 1) allStrings(c.C, strings);
  freeCache = lexiconNeeds(strings);
  return freeCache;
}
const pick = (obj, keys) => Object.fromEntries([...keys].sort().map((k) => [k, obj[k]]));

/* The idempotent merge every carrier ends with (public files and paid payload). */
export const MERGE = "(function(w){var c=w.KW_CHAPTER_LEXICON;if(!c)return;" +
  "function m(n,s){var t=w[n];if(!s||!t)return;for(var k in s)if(Object.prototype.hasOwnProperty.call(s,k)&&!Object.prototype.hasOwnProperty.call(t,k))t[k]=s[k];}" +
  "m('KW_GLOBAL_LEXICON',c.G);m('KW_INFLECTIONS',c.I);m('KW_GLOBAL_CAPS',c.CAPS);m('KW_STORY_LEX',c.S);})(window);";
const literal = (v) => JSON.stringify(v).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

export function publicFiles() {
  const L = loadLexicons(), f = freeNeeds();
  const head = "/* GENERATED by scripts/lexicon-split.mjs from chapter/global-lexicon.js —\n" +
    "   do not edit. Only the entries the free pages (homepage, Chapter 1) need;\n" +
    "   a paid chapter's own entries arrive with its gated payload\n" +
    "   (window.KW_CHAPTER_LEXICON) and are merged below. */\n";
  const global = head +
    "window.KW_GLOBAL_LEXICON = " + literal(pick(L.G, f.g)) + ";\n" +
    "window.KW_INFLECTIONS = " + literal(pick(L.I, f.inf)) + ";\n" +
    "window.KW_GLOBAL_CAPS = " + literal(pick(L.CAPS, f.caps)) + ";\n" + MERGE + "\n";
  const story = head.replace("global-lexicon.js", "story-lexicon.js") +
    "window.KW_STORY_LEX = " + literal(pick(L.S, f.story)) + ";\n" + MERGE + "\n";
  return { [PUBLIC_GLOBAL]: global, [PUBLIC_STORY]: story };
}

/* A paid chapter's slice: what it needs that the public files do not carry. */
export function chapterSlice(C) {
  const L = loadLexicons(), f = freeNeeds(), n = lexiconNeeds(allStrings(C));
  const minus = (a, b) => new Set([...a].filter((k) => !b.has(k)));
  return {
    G: pick(L.G, minus(n.g, f.g)), I: pick(L.I, minus(n.inf, f.inf)),
    CAPS: pick(L.CAPS, minus(n.caps, f.caps)), S: pick(L.S, minus(n.story, f.story))
  };
}
export function chapterLexiconTail(C) {
  return "\n/* Word-popup dictionary entries for this chapter: delivered only with the gated chapter. */\n" +
    "window.KW_CHAPTER_LEXICON = " + literal(chapterSlice(C)) + ";\n" + MERGE + "\n";
}

/* Full lexicon in shards for the protected review lookup: key → shard by FNV-1a. */
export function shardOf(key, n = SHARDS) {
  let h = 0x811c9dc5;
  for (const ch of new TextEncoder().encode(key)) { h ^= ch; h = Math.imul(h, 0x01000193) >>> 0; }
  return h % n;
}
export function lexiconShards() {
  const { G, I } = loadLexicons();
  const shards = Array.from({ length: SHARDS }, () => ({ G: {}, I: {} }));
  for (const [k, v] of Object.entries(G)) shards[shardOf(k)].G[k] = v;
  for (const [k, v] of Object.entries(I)) shards[shardOf(k)].I[k] = v;
  return shards;
}

/* ---------- CLI ---------- */
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes("--check");
  let stale = 0;
  for (const [f, content] of Object.entries(publicFiles())) {
    const p = path.join(ROOT, f);
    const cur = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
    if (cur === content) continue;
    if (check) { console.error(`${f} is out of date: run node scripts/lexicon-split.mjs`); stale++; }
    else fs.writeFileSync(p, content);
  }
  const f = freeNeeds(), L = loadLexicons();
  console.log(JSON.stringify({ public: { global: f.g.size, inflections: f.inf.size, caps: f.caps.size, story: f.story.size },
    total: { global: Object.keys(L.G).length, inflections: Object.keys(L.I).length, caps: Object.keys(L.CAPS).length, story: Object.keys(L.S).length }, check }));
  if (stale) process.exit(1);
}
