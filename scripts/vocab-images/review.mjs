#!/usr/bin/env node
/* Concept review (text model, cheap): for every illustrable concept decide
     image | text-only | same (as another meaning of the same headword)
   and write a concrete scene ("subject") + alt text, following the rules the
   owner approved for batch 1. Output: docs/visual-vocab/prompts/review.json.
   Manual per-batch files in docs/visual-vocab/prompts/ take precedence.

     node scripts/vocab-images/review.mjs --run [--parallel 4] [--limit N]
     node scripts/vocab-images/review.mjs --merge      (chunks → review.json)

   Resumable: one result file per chunk in $VOCAB_IMG_STORE/review/. Every
   request is ledgered with its token cost; the hard cap is checked first. */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, loadChapters, classify, conceptKey, headKey, headTerm } from "./lib.mjs";
import { STORE, log, assertCanSpend, textUsd } from "./budget.mjs";

const MODEL = process.env.REVIEW_MODEL || "gemini-3.8-flash";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";
const DIR = path.join(STORE, "review");
const OUT = path.join(ROOT, "docs/visual-vocab/prompts/review.json");
const CHUNK = 50;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true; };

export const RULES = `You are the visual editor of Klarweg, a premium German course for adult Indian learners (Hindi-first). Each vocabulary card may show ONE illustration (a soft matte-clay 3D render on a cream background) between the German headword and its meaning. A wrong or confusing picture is worse than none.

For EACH concept decide:
- "image": the meaning can be shown clearly and unambiguously in one simple scene. Objects, animals, food, places, weather, body parts, clothing, vehicles, professions and roles, concrete actions (verbs), visible states, emotions, and abstract nouns ONLY when one everyday scene makes the meaning obvious.
- "text-only" when ANY of these apply:
  * function words, connectors, discourse markers, particles, pronouns, articles, prepositions, conjunctions;
  * vague adverbs of time, degree, frequency, sequence or attitude (e.g. "however", "quite", "by now", "rather") unless a picture is genuinely unambiguous;
  * catch-all verbs with many senses (machen, haben, sein, werden, lassen, stellen, legen, setzen, geben, nehmen, kommen, gehen in abstract senses) unless the entry's meaning is one concrete action;
  * the entry lists several unrelated meanings that one picture would contradict;
  * grammar or linguistics terms;
  * sensitive topics where a picture risks stereotypes or offence: ethnicity, origin, migration, religion, discrimination, racism, disability, sexuality, politics, war, violence, crime, death, illness of a specific group;
  * anything whose picture needs readable text, digits, clocks showing a specific time, calendars with dates, money amounts, documents, forms, screens with content, signs, logos, brands, flags, maps;
  * highly academic, legal, administrative or abstract terms where any picture would be a stretch.
- Balance: learners remember words better with a picture, so PREFER "image" whenever one typical everyday scene makes the meaning recognisable, including times of day ("in the evening" → a quiet street at dusk with lit windows), feelings and character traits, everyday adjectives, and common verbs whose abstract word has a typical visible situation ("to reject" → a person politely declining an offered plate with a raised hand; "to complete" → a person placing the last piece into a jigsaw puzzle). Choose "text-only" only when a picture would be misleading, a stretch, or covered by a rule above.
- "same": this concept means the same as another concept of the SAME headword in this request (only the English wording differs). Give "sameAs" = that key. Use it only for genuinely identical meanings.

For "image" also give:
- "subject": ONE concrete English scene, max 35 words, starting with "Show". Depict EXACTLY the given meaning as used in the example sentence, never a different sense of the same German word (e.g. "abschließen" = to complete → a finished task, not a key in a lock). Verbs: a person clearly doing the action. Adjectives: an everyday subject obviously having the quality. Idioms/expressions: the INTENDED meaning, never a literal picture of the words. No readable text, letters, numbers, digits, clock times, flags, logos or brands. No orange objects (use other colours). People: stylised, respectful, varied genders, ages and skin tones, everyday modern clothing, no stereotypes; professions are not gender-stereotyped.
- "alt": short alt text, max 12 words, describing the picture (no "image of").
The visual style (clay render, cream background, lighting, no text, no orange) is added automatically: describe ONLY the content of the scene, never style, lighting or background.

OUTPUT FORMAT: exactly one line per input concept, in input order, fields separated by " | ", nothing else (no JSON, no headings, no blank lines):
key | image | <subject> | <alt>
key | text-only | <reason, max 8 words>
key | same | <other key>`;

const SCHEMA = { type: "ARRAY", items: { type: "OBJECT", properties: {
  key: { type: "STRING" }, decision: { type: "STRING", enum: ["image", "text-only", "same"] },
  sameAs: { type: "STRING", maxLength: 80 }, subject: { type: "STRING", maxLength: 260 }, alt: { type: "STRING", maxLength: 90 }, reason: { type: "STRING", maxLength: 60 } },
  required: ["key", "decision"] } };

function concepts() {
  const m = new Map();
  for (const ch of loadChapters()) for (const v of ch.C.vocab || []) {
    const key = conceptKey(v);
    if (m.has(key)) continue;
    if (v.img || classify(v).tier === "text-only") { m.set(key, null); continue; }
    m.set(key, { key, head: headKey(v), de: headTerm(v), en: v.en, pos: v.pos, ex: v.exEn || v.ex || "" });
  }
  return [...m.values()].filter(Boolean).sort((a, b) => a.head.localeCompare(b.head) || a.key.localeCompare(b.key));
}
export function chunks(list = concepts()) {
  const out = []; let cur = [];
  for (let i = 0; i < list.length; i++) {
    cur.push(list[i]);
    const nextSameHead = list[i + 1] && list[i + 1].head === list[i].head;
    if (cur.length >= CHUNK && !nextSameHead) { out.push(cur); cur = []; }
  }
  if (cur.length) out.push(cur);
  return out;
}

export function parseLines(text) {
  const out = [];
  for (const line of text.split("\n")) {
    const f = line.split(" | ").map((x) => x.trim());
    if (f.length < 2) continue;
    const [key, decision] = f;
    if (decision === "image" && f[2] && f[2].split(/\s+/).length <= 45) out.push({ key, decision, subject: f[2], alt: f[3] || "" });
    else if (decision === "text-only") out.push({ key, decision, reason: f[2] || "" });
    else if (decision === "same" && f[2]) out.push({ key, decision, sameAs: f[2] });
  }
  if (!out.length) throw new Error("no lines");
  return out;
}

async function call(tokenFn, items) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${MODEL}:generateContent`;
  const body = { systemInstruction: { parts: [{ text: RULES }] },
    contents: [{ role: "user", parts: [{ text: "Concepts:\n" + items.map((c) => JSON.stringify({ key: c.key, german: c.de, pos: c.pos, meaning: c.en, example: c.ex })).join("\n") }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 12000 } };
  let lastStatus = 0;
  for (let a = 0; a < 6; a++) {
    const r = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + tokenFn(a > 0 && lastStatus === 401), "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) });
    lastStatus = r.status;
    if (r.status === 401) continue;
    if (r.status === 429 || r.status >= 500) { await new Promise((z) => setTimeout(z, 15000 * (a + 1))); continue; }
    const j = await r.json();
    return { ok: r.ok, status: r.status, j };
  }
  return { ok: false, status: 429, j: {} };
}

async function run() {
  fs.mkdirSync(DIR, { recursive: true });
  const all = chunks();
  const limit = Number(opt("limit", Infinity)), par = Number(opt("parallel", 4));
  const pending = all.map((c, i) => ({ c, i })).filter(({ i }) => !fs.existsSync(path.join(DIR, `chunk-${String(i).padStart(4, "0")}.json`)));
  if (opt("reverse")) pending.reverse();
  pending.splice(limit);
  console.log(JSON.stringify({ chunks: all.length, pending: pending.length }));
  let token = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(), tokenAt = Date.now();
  let idx = 0, done = 0, usd = 0;
  async function worker() {
    while (idx < pending.length) {
      const { c, i } = pending[idx++];
      if (fs.existsSync(path.join(DIR, `chunk-${String(i).padStart(4, "0")}.json`))) continue;   // done by another runner
      assertCanSpend(0.05, "review chunk");
      const { ok, status, j } = await call((force) => { if (force || Date.now() - tokenAt > 20 * 60e3) { token = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); tokenAt = Date.now(); } return token; }, c);
      const cost = ok ? textUsd(MODEL, j.usageMetadata) : 0;
      log({ batch: "review", key: "chunk-" + i, status: ok ? "ok" : "http_" + status, billed: ok, usd: cost, usdList: cost, tokens: j.usageMetadata || null });
      if (!ok) { console.error("chunk", i, "failed", status, JSON.stringify(j).slice(0, 200)); continue; }
      let parsed;
      try { parsed = parseLines(j.candidates[0].content.parts.map((p) => p.text || "").join("")); if (j.candidates[0].finishReason !== "STOP") throw 0; }
      catch { fs.writeFileSync(path.join(DIR, `raw-${i}.json`), JSON.stringify(j)); console.error("chunk", i, "bad json", j.candidates?.[0]?.finishReason, JSON.stringify(j.usageMetadata)); continue; }
      const keys = new Set(c.map((x) => x.key));
      const res = parsed.filter((r) => keys.has(r.key));
      fs.writeFileSync(path.join(DIR, `chunk-${String(i).padStart(4, "0")}.json`), JSON.stringify(res));
      done++; usd += cost;
      if (done % 10 === 0) console.log(`done ${done}/${pending.length} $${usd.toFixed(3)}`);
    }
  }
  await Promise.all(Array.from({ length: par }, worker));
  console.log(JSON.stringify({ done, usd: +usd.toFixed(4) }));
}

function merge() {
  const all = chunks();
  const out = {}; let missing = 0;
  all.forEach((c, i) => {
    const f = path.join(DIR, `chunk-${String(i).padStart(4, "0")}.json`);
    const res = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : [];
    const by = new Map(res.map((r) => [r.key, r]));
    const heads = new Map(c.map((x) => [x.key, x.head]));
    for (const x of c) {
      const r = by.get(x.key);
      if (!r) { missing++; continue; }
      if (r.decision === "same" && r.sameAs && r.sameAs !== x.key && heads.get(r.sameAs) === x.head && by.get(r.sameAs)?.decision === "image") out[x.key] = { sameAs: r.sameAs };
      else if (r.decision === "image" && r.subject) out[x.key] = { subject: r.subject.trim(), alt: (r.alt || "").trim() };
      else if (r.decision === "same") out[x.key] = by.get(r.sameAs)?.decision === "text-only" ? { tier: "text-only" } : (r.subject ? { subject: r.subject, alt: r.alt || "" } : { tier: "text-only", reason: "unresolved same" });
      else out[x.key] = { tier: "text-only", reason: (r.reason || "").slice(0, 120) };
    }
  });
  fs.writeFileSync(OUT, "{\n" + Object.keys(out).sort().map((k) => JSON.stringify(k) + ": " + JSON.stringify(out[k])).join(",\n") + "\n}\n");
  const v = Object.values(out);
  console.log(JSON.stringify({ concepts: Object.keys(out).length, missing, image: v.filter((x) => x.subject).length, same: v.filter((x) => x.sameAs).length, textOnly: v.filter((x) => x.tier === "text-only").length }));
}

if (opt("run")) await run();
else if (opt("merge")) merge();
else console.log("usage: review.mjs --run [--parallel 4] [--limit N] | --merge");
