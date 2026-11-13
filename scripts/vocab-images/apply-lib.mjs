/* Insert `img` fields into hand-authored chapter data files — safely.
   A small JS-aware scanner (strings, template literals, comments) finds the
   top-level `vocab: [ … ]` array and each entry object in it. `img` is added
   as the entry's last property. The result is then EVALUATED and compared with
   the original: everything must be identical except the requested `img`
   fields, or nothing is written. */
import vm from "node:vm";
import { isDeepStrictEqual } from "node:util";

/* Spans of code outside strings/comments: yields [index, char] for code chars. */
function* codeChars(src, from = 0) {
  let i = from;
  const n = src.length;
  while (i < n) {
    const c = src[i], d = src[i + 1];
    if (c === "/" && d === "/") { const e = src.indexOf("\n", i); i = e < 0 ? n : e; continue; }
    if (c === "/" && d === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? n : e + 2; continue; }
    if (c === "'" || c === '"' || c === "`") {
      let j = i + 1;
      while (j < n && src[j] !== c) { if (src[j] === "\\") j++; j++; }
      i = j + 1; continue;
    }
    yield [i, c];
    i++;
  }
}

/* Character ranges [start, end] (inclusive braces) of each vocab entry. */
export function vocabEntrySpans(src) {
  // find `vocab` key followed by `:` and `[` in code (not inside a string)
  let at = -1;
  for (const [i] of codeChars(src)) {
    if (src.startsWith("vocab", i) && !/[\w$]/.test(src[i - 1] || "") && /^vocab\s*:\s*\[/.test(src.slice(i, i + 40))) { at = src.indexOf("[", i); break; }
  }
  if (at < 0) return null;
  const spans = [];
  let depth = 0, start = -1;
  for (const [i, c] of codeChars(src, at)) {
    if (c === "[" || c === "{" || c === "(") {
      depth++;
      if (c === "{" && depth === 2) start = i;
    } else if (c === "]" || c === "}" || c === ")") {
      if (c === "}" && depth === 2) spans.push([start, i]);
      depth--;
      if (depth === 0) return { arrayStart: at, arrayEnd: i, spans };
    }
  }
  throw new Error("unterminated vocab array");
}

const q = (s) => "'" + String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
export function imgLiteral(img) {
  const parts = [`src: ${q(img.src)}`];
  if (img.formats) parts.push(`formats: [${img.formats.map(q).join(", ")}]`);
  if (img.widths) parts.push(`widths: [${img.widths.join(", ")}]`);
  if (img.w) parts.push(`w: ${+img.w}, h: ${+img.h}`);
  parts.push(`alt: ${q(img.alt)}`);
  return `img: { ${parts.join(", ")} }`;
}

export function evalChapter(src, filename = "chapter.js") {
  const sb = { window: {} };
  vm.runInNewContext(src, sb, { filename });
  return JSON.parse(JSON.stringify(sb.window.CHAPTER));
}

/* updates: Map(vocabIndex → img). Entries that already carry an img are left
   unless `replace` is set. Returns { src, added, skipped }. Throws on any
   verification mismatch. */
export function applyImages(src, updates, { replace = false, filename } = {}) {
  const before = evalChapter(src, filename);
  const found = vocabEntrySpans(src);
  if (!found) throw new Error(filename + ": no vocab array");
  if (found.spans.length !== (before.vocab || []).length) throw new Error(`${filename}: scanner found ${found.spans.length} entries, data has ${(before.vocab || []).length}`);
  const edits = [];
  let skipped = 0;
  for (const [idx, img] of updates) {
    const [s, e] = found.spans[idx];
    const body = src.slice(s, e + 1);
    if (before.vocab[idx].img) {
      if (!replace) { skipped++; continue; }
      throw new Error(`${filename}: replacing an existing img is not supported in-place (entry ${idx})`);
    }
    // insert before the closing brace, after the last non-space char
    let k = e - 1;
    while (k > s && /\s/.test(src[k])) k--;
    const needsComma = src[k] !== "," && src[k] !== "{";
    const multiline = body.includes("\n");
    const ins = (needsComma ? "," : "") + (multiline ? "\n      " : " ") + imgLiteral(img) + (multiline ? "\n    " : " ");
    edits.push([k + 1, e, ins]);
  }
  edits.sort((a, b) => b[0] - a[0]);
  let out = src;
  for (const [from, to, ins] of edits) out = out.slice(0, from) + ins + out.slice(to);
  // verify: identical except the img fields we added
  const after = evalChapter(out, filename);
  const expected = JSON.parse(JSON.stringify(before));
  for (const [idx, img] of updates) if (!before.vocab[idx].img) expected.vocab[idx].img = JSON.parse(JSON.stringify(img));
  const strip = (C) => { const c = JSON.parse(JSON.stringify(C)); c.vocab.forEach((v) => { if (v.img) v.img = JSON.stringify(v.img, Object.keys(v.img).sort()); }); return c; };
  if (!isDeepStrictEqual(strip(after), strip(expected))) throw new Error(`${filename}: verification failed — data would change beyond img`);
  return { src: out, added: edits.length, skipped };
}
