#!/usr/bin/env node
/* Second visual teaching strategy (owner 2026-11-19): every card gets a
   meaningful visual learning component. For the concepts the coverage review
   left without a standalone picture, a text model proposes ONE of:
     scene   — an AI image + short English caption (+ highlight of the word in
               the card's own German example sentence, rendered by the UI)
     pair    — two AI images side by side with short UI labels (connectors)
     number  — UI-rendered numeral + dot grid (no image)
     grammar — UI-rendered German model sentence, target part highlighted in
               its grammar-role colour + caption (no image)
     map     — UI-rendered locator map (Natural Earth, public domain) + caption
     none
   German text NEVER goes into an image; every German string the model writes
   (grammar model sentences) is verified by a second pass (--verify).
     node scripts/vocab-images/second-review.mjs --run [--parallel 4]
     node scripts/vocab-images/second-review.mjs --verify
     node scripts/vocab-images/second-review.mjs --merge | --stats */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, loadChapters, conceptKey, headTerm } from "./lib.mjs";
import { STORE, log, assertCanSpend, textUsd } from "./budget.mjs";

const MODEL = process.env.REVIEW_MODEL || "gemini-3.8-flash";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";
const DIR = path.join(STORE, "review-second"), VDIR = path.join(STORE, "review-second-verify");
const OUT = path.join(ROOT, "docs/visual-vocab/prompts/second-strategy.json");
const QUEUE = path.join(STORE, "project/queue.json");
const CHUNK = 25;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true; };
export const ROLES = ["subject", "verb", "object", "time", "place", "akkusativ", "dativ", "genitiv", "modalverb", "article", "preposition", "negation", "adjective", "adverb", "question"];

export const RULES = `You design the visual learning component of a German vocabulary card (Klarweg, adult learners). These words were judged impossible to show as ONE standalone picture. The card UI already shows the German word, English + Hindi meaning and the card's German example sentence. A picture does not have to explain the word alone: picture + example sentence + a short caption together must teach it.
Choose ONE type per word (prefer the first that is genuinely useful and accurate):
- "scene": one illustration of the example sentence's situation or a typical situation of the word, plus "cap" (English, max 70 chars, explains how the picture relates to the word) and "hl" (the EXACT form of the word as it appears in the given example sentence, copied character for character, or "" if it does not appear). Good for adverbs, prepositions, pronouns, abstract nouns, administrative words, "needs text" words (show the real-world situation, e.g. "die Adresse" → a person writing on an envelope seen from the side, no readable writing), and non-graphic medical words ("bluten" → a person calmly putting a plaster on a small cut on a fingertip, no visible blood pools).
- "pair": for connectors and contrasts (aber, obwohl, trotzdem, während, sondern, entweder…oder, bevor, nachdem, seit, bis…): two simple illustrations side by side, "a" and "b", each with "scene" and a "label" (English, max 24 chars, e.g. "expected: sunny walk" / "but: it is raining"), plus "cap" (English, max 70 chars) and "hl".
- "number": for cardinal/ordinal numbers: "n" (integer).
- "grammar": for grammar terminology and pure function words where a highlighted German model sentence is the clearest visual: "de" (a short, natural, grammatically PERFECT German sentence at the card's level that demonstrates the term; prefer the card's own example sentence if it already demonstrates it), "hl" (exact substring of "de" to highlight), "role" (one of: ${ROLES.join(", ")}), "cap" (English, max 70 chars).
- "map": for countries, regions, nationalities and languages tied to a place: "iso" (array of ISO 3166-1 alpha-2 codes of the country/countries to highlight; for a language: the main countries where it is an official language, max 4) and "cap" (English, max 70 chars, e.g. "Spoken mainly in Portugal and Brazil"). Never for languages without a clear territory.
- "none": only if nothing above is accurate and useful.
Scene rules: no text, letters, digits, flags or logos INSIDE the image; respectful varied people; no stereotypes; nothing graphic. Scenes are English descriptions starting with "Show", max 40 words, content only.
Return ONLY a JSON array, one object per input word, in input order: {"key":..., "type":..., ...fields}.`;

export const VERIFY = `You are a meticulous German teacher (native level) checking learning material. For each item you get the card's word and meaning plus a proposed visual component. Check: (1) every German string is grammatically and orthographically correct, natural and at most the stated CEFR level; (2) "hl" is exactly present and is really the target word/part; (3) the highlighted role is the correct grammatical role; (4) the caption is factually correct and not misleading (maps: the ISO codes are right); (5) for numbers, n matches the German word.
Return ONLY a JSON array in input order: {"key":..., "ok": true} or {"key":..., "ok": false, "fix": {corrected fields only, same names} , "why": "max 12 words"}. If it cannot be fixed, {"key":..., "ok": false, "why": ...} with no fix.`;

const J = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : null);
function concepts() {
  const q = JSON.parse(fs.readFileSync(QUEUE, "utf8")).items.filter((x) => x.status === "text-only");
  const keys = new Set(q.map((x) => x.key)); const m = new Map();
  for (const ch of loadChapters()) for (const v of ch.C.vocab || []) {
    const key = conceptKey(v); if (!keys.has(key) || m.has(key) || v.img) continue;
    m.set(key, { key, german: [v.art, headTerm(v)].filter(Boolean).join(" "), pos: v.pos, meaning: v.en, level: ch.level.toUpperCase(), example: v.ex || "", exampleEn: v.exEn || "", chapter: ch.titleEn || ch.title, why: q.find((x) => x.key === key).why });
  }
  return [...m.values()].sort((a, b) => a.key.localeCompare(b.key));
}
async function call(token, system, text) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${MODEL}:generateContent`;
  const body = { systemInstruction: { parts: [{ text: system }] }, contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 32000, responseMimeType: "application/json" } };
  let last = 0;
  for (let a = 0; a < 6; a++) {
    let r; try { r = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token(a > 0 && last === 401), "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) }); }
    catch { await new Promise((z) => setTimeout(z, 10000 * (a + 1))); continue; }
    last = r.status; if (r.status === 401) continue;
    if (r.status === 429 || r.status >= 500) { await new Promise((z) => setTimeout(z, 15000 * (a + 1))); continue; }
    return { ok: r.ok, status: r.status, j: await r.json() };
  }
  return { ok: false, status: last || 599, j: {} };
}
function tokenFn() {
  let tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(), at = Date.now();
  return (force) => { if (force || Date.now() - at > 20 * 60e3) { tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); at = Date.now(); } return tok; };
}
const hashOf = (x) => { const { key, ...rest } = x; return JSON.stringify(rest); };
const readDir = (d) => { const r = new Map(); if (fs.existsSync(d)) for (const f of fs.readdirSync(d).filter((f) => f.endsWith(".json")).sort()) for (const x of JSON.parse(fs.readFileSync(path.join(d, f), "utf8"))) if (x && x.key) r.set(x.key, x); return r; };

async function pass(dir, system, list, render, label) {
  fs.mkdirSync(dir, { recursive: true });
  const chunks = []; for (let i = 0; i < list.length; i += CHUNK) chunks.push(list.slice(i, i + CHUNK));
  const run = Date.now(); const token = tokenFn(); let idx = 0, done = 0, usd = 0;
  console.log(JSON.stringify({ label, items: list.length, chunks: chunks.length }));
  async function worker() {
    while (idx < chunks.length) {
      const i = idx++; const c = chunks[i];
      assertCanSpend(0.05, label);
      const { ok, status, j } = await call(token, system, render(c));
      const cost = ok ? textUsd(MODEL, j.usageMetadata) : 0;
      log({ batch: "review-second", key: `${label}-${i}`, status: ok ? "ok" : "http_" + status, billed: ok, usd: cost, usdList: cost });
      if (!ok) { console.error(label, i, "http", status); continue; }
      let arr; try { arr = JSON.parse(j.candidates[0].content.parts.map((p) => p.text || "").join("")); if (!Array.isArray(arr)) throw 0; } catch { console.error(label, i, "unparseable", j.candidates?.[0]?.finishReason); continue; }
      const keys = new Set(c.map((x) => x.key));
      const stamp = label === "verify" ? (x) => ({ ...x, proposal: hashOf(c.find((y) => y.key === x.key).proposal) }) : (x) => x;
      fs.writeFileSync(path.join(dir, `r${run}-${String(i).padStart(4, "0")}.json`), JSON.stringify(arr.filter((x) => x && keys.has(x.key)).map(stamp)));
      done++; usd += cost;
    }
  }
  await Promise.all(Array.from({ length: Number(opt("parallel", 4)) }, worker));
  console.log(JSON.stringify({ done, usd: +usd.toFixed(4) }));
}

/* Structural validation: anything malformed is dropped (and re-asked on the next --run). */
export function valid(x, c) {
  const s = (v, n) => typeof v === "string" && v.trim() && v.length <= n;
  const scene = (v) => s(v, 320) && /^show\b/i.test(v);
  const hlOk = (hl, text) => hl === "" || hl == null || (typeof hl === "string" && text.includes(hl));
  switch (x.type) {
    case "scene": return scene(x.scene) && s(x.cap, 90) && hlOk(x.hl, c.example);
    case "pair": return x.a && x.b && scene(x.a.scene) && scene(x.b.scene) && s(x.a.label, 32) && s(x.b.label, 32) && s(x.cap, 90) && hlOk(x.hl, c.example);
    case "number": return Number.isInteger(x.n) && x.n >= 0 && x.n <= 1e9;
    case "grammar": return s(x.de, 140) && s(x.hl, 60) && x.de.includes(x.hl) && ROLES.includes(x.role) && s(x.cap, 90);
    case "map": return Array.isArray(x.iso) && x.iso.length >= 1 && x.iso.length <= 50 && x.iso.every((i) => /^[A-Z]{2}$/.test(i)) && s(x.cap, 90);
    case "week": return Number.isInteger(x.day) && x.day >= 1 && x.day <= 7 && s(x.cap, 90);     // UI strip Mo–So
    case "year": return Number.isInteger(x.month) && x.month >= 1 && x.month <= 12 && s(x.cap, 90); // UI strip Jan–Dez
    case "none": return true;
    default: return false;
  }
}

async function run() {
  const all = concepts(); const have = readDir(DIR); const byKey = new Map(all.map((c) => [c.key, c]));
  const ver = readDir(VDIR);
  const rejected = (k) => { const v = ver.get(k); return v && (v.proposal ?? hashOf(have.get(k))) === hashOf(have.get(k)) && !v.ok && !(v.fix && valid({ ...have.get(k), ...v.fix }, byKey.get(k))); };
  const list = all.filter((c) => !(have.has(c.key) && valid(have.get(c.key), c)) || rejected(c.key))
    .map((c) => (rejected(c.key) ? { ...c, previousProposalRejected: ver.get(c.key).why } : c));
  await pass(DIR, RULES, list, (items) => "Words:\n" + items.map((c) => JSON.stringify(c)).join("\n"), "second");
  void byKey;
}
async function verify() {
  const all = new Map(concepts().map((c) => [c.key, c])); const res = readDir(DIR); const ver = readDir(VDIR);
  // Everything that carries German text or a factual claim is verified.
  const list = [...res.values()].filter((x) => all.has(x.key) && valid(x, all.get(x.key)) && x.type !== "none" && !(ver.has(x.key) && (ver.get(x.key).proposal ?? hashOf(x)) === hashOf(x)));
  const wrapped = list.map((x) => ({ key: x.key, proposal: x }));
  await pass(VDIR, VERIFY, wrapped, (items) => "Items:\n" + items.map(({ key, proposal: x }) => { const c = all.get(key); return JSON.stringify({ key, word: c.german, meaning: c.meaning, level: c.level, example: c.example, proposal: x }); }).join("\n"), "verify");
}
function final() {
  const all = new Map(concepts().map((c) => [c.key, c])); const res = readDir(DIR); const ver = readDir(VDIR);
  const out = {}; const stat = { fixed: 0, rejected: 0, unverified: 0 };
  for (const [k, c] of all) {
    let x = res.get(k); if (!x || !valid(x, c)) { stat.unverified++; continue; }
    let v = ver.get(k); if (v && v.proposal && v.proposal !== hashOf(x)) v = null;
    if (x.type !== "none") {
      if (!v) { stat.unverified++; continue; }
      if (!v.ok) { if (v.fix && typeof v.fix === "object") { const y = { ...x, ...v.fix }; if (valid(y, c)) { x = y; stat.fixed++; } else { stat.rejected++; continue; } } else { stat.rejected++; continue; } }
    }
    out[k] = x;
  }
  // Hand-checked corrections (German reviewed by Claude, 2026-11-19) win over the model.
  const manual = J(path.join(ROOT, "docs/visual-vocab/prompts/second-strategy-manual.json")) || {};
  for (const [k, x] of Object.entries(manual)) { if (all.has(k) && valid(x, all.get(k))) { out[k] = x; stat.manual = (stat.manual || 0) + 1; } else console.error("manual entry invalid or unknown:", k); }
  return { out, stat };
}
function merge() {
  const { out, stat } = final();
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
  const by = {}; for (const x of Object.values(out)) by[x.type] = (by[x.type] || 0) + 1;
  console.log(JSON.stringify({ written: Object.keys(out).length, byType: by, ...stat, out: path.relative(ROOT, OUT) }));
}
function stats() {
  const all = concepts(); const res = readDir(DIR); const ver = readDir(VDIR); const by = {}; let bad = 0, vok = 0, vbad = 0;
  for (const c of all) { const x = res.get(c.key); if (!x) { by.pending = (by.pending || 0) + 1; continue; } if (!valid(x, c)) { bad++; continue; } by[x.type] = (by[x.type] || 0) + 1; const v = ver.get(c.key); if (v) v.ok ? vok++ : vbad++; }
  console.log(JSON.stringify({ concepts: all.length, byType: by, invalid: bad, verifiedOk: vok, verifiedFail: vbad }));
}
if (opt("run")) await run(); else if (opt("verify")) await verify(); else if (opt("merge")) merge(); else if (opt("stats")) stats();
else console.log("usage: --run | --verify | --merge | --stats");
