#!/usr/bin/env node
/* Applies human-reviewed example-sentence corrections (ex / exEn of chapter
   vocabulary cards) from a resolved review file. Locates each literal by
   sentinel evaluation (so identical sentences in one file are told apart),
   rewrites only that literal, and verifies that nothing else in any chapter
   changed. Every change is listed in docs/visual-vocab/example-corrections.md.
     node scripts/vocab-images/apply-example-fixes.mjs <resolved.json> [--dry] */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { CHAPTER_DIR } from "./lib.mjs";

const [file, ...rest] = process.argv.slice(2); const dry = rest.includes("--dry");
const { apply } = JSON.parse(fs.readFileSync(file, "utf8"));
const evalChapter = (src) => { const sb = { window: {} }; sb.self = sb.window; vm.runInNewContext(src, sb); return sb.window.CHAPTER; };
const lit = (s) => "'" + s.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
const uesc = (q, up) => q.replace(/[\u0080-\uffff]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")[up ? "toUpperCase" : "toLowerCase"]());
const forms = (s) => { const base = [lit(s), JSON.stringify(s)]; return [...new Set([...base, ...base.map((b) => uesc(b, 0)), ...base.map((b) => uesc(b, 1))])]; };
const byFile = new Map();
const files = fs.readdirSync(CHAPTER_DIR).filter((f) => /^chapter-.*-data\.js$/.test(f));
const idOf = new Map(); for (const f of files) { const C = evalChapter(fs.readFileSync(path.join(CHAPTER_DIR, f), "utf8")); if (C?.id) idOf.set(C.id, f); }
for (const r of apply) { const [cid, i] = r.id.split("#"); const f = idOf.get(cid); if (!f) throw new Error("no file for " + r.id); (byFile.get(f) || byFile.set(f, []).get(f)).push({ ...r, idx: +i }); }
// replace the occurrence of `oldLit` (any form) that evaluates into vocab[idx][field]
function swap(src, idx, field, oldVal, newVal) {
  for (const form of forms(oldVal)) {
    let at = -1;
    while ((at = src.indexOf(form, at + 1)) >= 0) {
      const test = src.slice(0, at) + lit("\u0000SENTINEL") + src.slice(at + form.length);
      let C; try { C = evalChapter(test); } catch { continue; }
      if (C.vocab?.[idx]?.[field] === "\u0000SENTINEL") return src.slice(0, at) + lit(newVal) + src.slice(at + form.length);
    }
  }
  throw new Error(`literal not found: vocab[${idx}].${field} = ${oldVal}`);
}
let n = 0; const strip = (C, set) => JSON.stringify({ ...C, vocab: C.vocab.map((v, i) => set.has(i) ? { ...v, ex: 0, exEn: 0 } : v) });
for (const [f, list] of byFile) {
  const p = path.join(CHAPTER_DIR, f); let src = fs.readFileSync(p, "utf8"); const before = evalChapter(src);
  for (const r of list) {
    const v = before.vocab[r.idx]; if (v.ex !== r.oldEx || (v.exEn || "") !== r.oldEn) throw new Error("stale finding " + r.id);
    if (r.newEx !== r.oldEx) src = swap(src, r.idx, "ex", r.oldEx, r.newEx);
    if (r.newEn !== r.oldEn) src = swap(src, r.idx, "exEn", r.oldEn, r.newEn);
  }
  const after = evalChapter(src); const set = new Set(list.map((r) => r.idx));
  for (const r of list) if (after.vocab[r.idx].ex !== r.newEx || after.vocab[r.idx].exEn !== r.newEn) throw new Error("verify failed " + r.id);
  if (strip(before, set) !== strip(after, set)) throw new Error("unexpected change in " + f);
  if (!dry) fs.writeFileSync(p, src); n += list.length;
}
console.log(JSON.stringify({ files: byFile.size, cards: n, dry }));
