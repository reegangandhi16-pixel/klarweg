#!/usr/bin/env node
/* Example-sentence audit (owner 2026-11-19): every vocabulary card's German
   example now sits under a visual and carries the highlighted word, so it must
   be correct and actually show the word in the card's sense. A strict text
   model REPORTS problems only; nothing is changed here. Findings go to
   $VOCAB_IMG_STORE/example-audit/*.json for human review; accepted fixes are
   applied separately and documented in docs/visual-vocab/example-corrections.md.
     node scripts/vocab-images/example-audit.mjs --run [--parallel 6]
     node scripts/vocab-images/example-audit.mjs --report */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { loadChapters } from "./lib.mjs";
import { STORE, log, assertCanSpend, textUsd } from "./budget.mjs";

const MODEL = process.env.REVIEW_MODEL || "gemini-3.8-flash";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";
const DIR = path.join(STORE, "example-audit");
const CHUNK = 40;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true; };

const RULES = `You are a meticulous native German teacher reviewing example sentences on vocabulary cards of a CEFR-levelled course (A1–C2) for adult learners. For each card you get the headword, its meaning, the card's level and chapter topic, the German example sentence and its English translation.
Report ONLY real problems:
- "error": grammar, spelling, case, gender, agreement, word order, wrong preposition, or a non-existent/incorrect German form;
- "sense": the example uses the headword in a different sense than the card's meaning, or does not contain the headword (or a form of it) at all;
- "translation": the English translation is wrong or misleading;
- "weak": the sentence is unnatural/odd for a native speaker or meaningless for a learner (only clear cases; NOT for metalinguistic sentences that are intentional in grammar chapters, and NOT for style preferences).
Do not report correct sentences. Do not report level mismatches unless extreme. Quotation marks in metalinguistic sentences are fine either way.
For each problem give a minimal corrected German sentence that keeps the chapter's teaching point (same structure, same headword in the card's sense, same level) and its English translation.
Return ONLY a JSON array (empty if no problems): {"id":..., "kind":"error|sense|translation|weak", "issue":"max 15 words", "ex":"corrected German", "exEn":"corrected English"}`;

function cards() {
  const out = [];
  for (const ch of loadChapters()) (ch.C.vocab || []).forEach((v, i) => out.push({ id: `${ch.id}#${i}`, word: [v.art, v.de].filter(Boolean).join(" "), meaning: v.en, level: ch.level.toUpperCase(), chapter: ch.titleEn || ch.title, ex: v.ex || "", exEn: v.exEn || "" }));
  return out;
}
async function call(token, items) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${MODEL}:generateContent`;
  const body = { systemInstruction: { parts: [{ text: RULES }] }, contents: [{ role: "user", parts: [{ text: "Cards:\n" + items.map((c) => JSON.stringify(c)).join("\n") }] }],
    generationConfig: { temperature: 0, maxOutputTokens: 24000, responseMimeType: "application/json" } };
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
async function run() {
  fs.mkdirSync(DIR, { recursive: true });
  const all = cards(); const chunks = []; for (let i = 0; i < all.length; i += CHUNK) chunks.push(all.slice(i, i + CHUNK));
  const name = (i) => path.join(DIR, `chunk-${String(i).padStart(4, "0")}.json`);
  const pending = chunks.map((c, i) => ({ c, i })).filter(({ i }) => !fs.existsSync(name(i)));
  console.log(JSON.stringify({ cards: all.length, chunks: chunks.length, pending: pending.length }));
  let tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(), at = Date.now();
  const token = (f) => { if (f || Date.now() - at > 20 * 60e3) { tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); at = Date.now(); } return tok; };
  let idx = 0, done = 0, usd = 0;
  async function worker() {
    while (idx < pending.length) {
      const { c, i } = pending[idx++];
      assertCanSpend(0.05, "example audit");
      const { ok, status, j } = await call(token, c);
      const cost = ok ? textUsd(MODEL, j.usageMetadata) : 0;
      log({ batch: "example-audit", key: `chunk-${i}`, status: ok ? "ok" : "http_" + status, billed: ok, usd: cost, usdList: cost });
      if (!ok) { console.error("chunk", i, "http", status); continue; }
      let arr; try { arr = JSON.parse(j.candidates[0].content.parts.map((p) => p.text || "").join("")); if (!Array.isArray(arr)) throw 0; } catch { console.error("chunk", i, "unparseable"); continue; }
      const ids = new Set(c.map((x) => x.id));
      fs.writeFileSync(name(i), JSON.stringify(arr.filter((x) => x && ids.has(x.id))));
      done++; usd += cost; if (done % 25 === 0) console.log(`done ${done}/${pending.length} $${usd.toFixed(3)}`);
    }
  }
  await Promise.all(Array.from({ length: Number(opt("parallel", 6)) }, worker));
  console.log(JSON.stringify({ done, usd: +usd.toFixed(4) }));
}
function report() {
  const byId = new Map(cards().map((c) => [c.id, c])); const f = [];
  for (const n of fs.readdirSync(DIR).filter((n) => n.endsWith(".json")).sort()) for (const x of JSON.parse(fs.readFileSync(path.join(DIR, n), "utf8"))) f.push({ ...x, card: byId.get(x.id) });
  const by = {}; for (const x of f) by[x.kind] = (by[x.kind] || 0) + 1;
  console.log(JSON.stringify({ findings: f.length, byKind: by }));
  fs.writeFileSync(path.join(STORE, "example-audit-findings.json"), JSON.stringify(f, null, 1));
}
if (opt("run")) await run(); else if (opt("report")) report(); else console.log("usage: --run | --report");
