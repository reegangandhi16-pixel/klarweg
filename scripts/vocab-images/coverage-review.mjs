#!/usr/bin/env node
/* Coverage review v2 (owner goal 2026-11-19: a useful visual for as many cards as
   possible, contextual images allowed). For every concept that still has NO image
   (text-only or failed QA) a cheap text model, given the card's example sentence,
   chapter topic, earlier QA failures and any image the same headword already has,
   decides ONE of:
     reuse  — an existing image of the same headword shows exactly this sense
     image  — a scene (with a strategy: direct | context | sentence | action |
              emotion | contrast | symbolic) + alt text
     none   — no picture can teach this meaning without misleading (last resort)
   Output: docs/visual-vocab/prompts/coverage-2.json (a manual override file, so
   it wins over review.json and the classifier), merged from resumable chunks in
   $VOCAB_IMG_STORE/review-v2/. Text tokens only; ledgered; hard cap checked first.
     node scripts/vocab-images/coverage-review.mjs --run [--parallel 4] [--limit N] [--only failed]
     node scripts/vocab-images/coverage-review.mjs --merge
     node scripts/vocab-images/coverage-review.mjs --stats */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, loadChapters, conceptKey, headKey, headTerm } from "./lib.mjs";
import { STORE, log, assertCanSpend, textUsd } from "./budget.mjs";

const MODEL = process.env.REVIEW_MODEL || "gemini-3.8-flash";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";
const DIR = path.join(STORE, "review-v2");
const OUT = path.join(ROOT, "docs/visual-vocab/prompts/coverage-2.json");
const QUEUE = path.join(STORE, "project/queue.json");
const QA_LOG = path.join(STORE, "qa.jsonl");
const CHUNK = 40;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true; };

export const RULES = `You are the visual editor of Klarweg, a premium German course for adult Indian learners. Every vocabulary card should now get ONE illustration (a soft matte-clay 3D render on a plain cream background) that helps the learner understand and remember THIS meaning. Abstract words, verbs, adverbs, connectors and even function words are NOT automatically excluded: find the clearest visual teaching aid.

For each concept, read the German word, its meaning, the example sentence (it fixes WHICH sense is meant), the chapter topic and any earlier failed attempts. Then pick the FIRST strategy that works:
1 direct   — the thing itself, clearly.
2 context  — a natural everyday scene in which the meaning is obvious.
3 sentence — illustrate the situation of the example sentence (or a short neutral sentence you imagine) so the word's role is visible.
4 action   — verbs: a person clearly doing the action.
5 emotion  — adjectives/adverbs/feelings/states: facial expression, body language, situation.
6 contrast — two things side by side in ONE scene (no split panels) showing the difference: e.g. "aber" → a sunny day yet a person shivering in a coat; "schon" vs "noch nicht" → one plate finished, one still full.
7 symbolic — only if nothing above works: the clearest real-world symbolic scene (prefer real situations over icons).

Hard limits (an image that breaks them will fail QA anyway, so design around them):
- NO readable text, letters, numbers, digits, clock faces with times, calendars, money with amounts, documents with writing, screens with content, signs, logos, brands, flags, maps. Show quantities as counted objects (max 12), time as light/activities, money as a wallet or handing over a card.
- People: stylised, respectful, varied genders/ages/skin tones, everyday clothes, no stereotypes, no gender-stereotyped professions.
- Sensitive topics (religion, ethnicity, migration, politics, war, violence, crime, death, illness, disability, sexuality): only calm, respectful, non-graphic, non-stereotyped real-world scenes with no religious or national symbols, no weapons, no injuries (e.g. "die Wahl" → a person placing a folded blank paper into a plain box; "die Trauer" → a person sitting quietly with a hand over their heart beside a bunch of white flowers). If no respectful scene exists, answer none.
- Never draw the literal words of an idiom; draw the intended meaning.
- Never a different sense of the same German word than the example sentence uses.
- If an EXISTING image of the same headword (listed under "existing") shows exactly this sense, answer reuse with its key instead of a new scene.
- Earlier attempts failed QA for the reasons listed: design the new scene so those problems cannot happen (simpler composition, fewer objects, no surfaces that invite text).
- "none" ONLY when every strategy would mislead a learner (e.g. a bare article like "der", the letter name "Ypsilon", a pure abbreviation). Be ambitious: most words can be taught with a sentence/contrast scene.

OUTPUT: exactly one line per input concept, input order, fields separated by " | ", nothing else:
key | image | <strategy> | <scene: ONE English description starting with "Show", max 40 words; content only, never style/background/lighting> | <alt text, max 12 words>
key | reuse | <existing key>
key | none | <reason, max 10 words>`;

export const CRITIC = `You are the strict second editor of Klarweg's visual vocabulary (adult learners of German). A first editor proposed ONE illustration scene per word. Judge each proposal as a teacher: imagine the learner sees ONLY the picture next to the German word and its meaning. Does the picture make THIS meaning (in the example sentence's sense) easier to grasp and remember?
- keep: the scene clearly evokes the meaning (or its sentence situation) and would not suggest a different, more obvious word.
- fix: the idea is weak, generic, cluttered, needs text/digits/flags/signs, uses the wrong sense, or would rather teach another word. Give a better scene (same rules: ONE scene, no split panels, no text, respectful people). For connectors/particles show the LOGICAL relation in one situation (because → cause visibly leading to effect in one scene; although/however → an expectation visibly contradicted; so that → an action plainly done for a visible purpose).
- none: no picture can honestly help; a learner would be misled (prefer this over a vague picture).
OUTPUT exactly one line per input, input order, " | " separated, nothing else:
key | keep
key | fix | <strategy: direct|context|sentence|action|emotion|contrast|symbolic> | <scene starting with "Show", max 40 words> | <alt, max 12 words>
key | none | <reason, max 10 words>`;
const CDIR = path.join(STORE, "review-v2-critic");
export const RESCUE = `You are the senior editor of Klarweg's visual vocabulary (adult learners of German, picture = memory aid next to the German word and its meaning, never a definition). A strict reviewer rejected the proposed scene for each word below and gave a reason. Make the final call with these calibrated standards:
- A picture that also fits a close synonym is FINE (e.g. schildern ≈ erzählen, der Respekt ≈ politeness, klingen ≈ listening to a pleasant sound): the learner reads the meaning next to it and the scene still anchors it. Do NOT reject for that.
- A picture is NOT acceptable when it would teach a clearly different meaning, when the meaning only exists through readable text/digits/flags/maps (numbers above twelve, dates, country/language names, abbreviations, grammar terminology), or when it is a pure function word whose scene could equally illustrate anything (articles, personal pronouns, case prepositions).
- For logic words (connectors, time adverbs, particles) accept a scene only if the logical relation is plainly visible (before→after, expectation contradicted, cause→effect, purpose).
Decide per word:
key | keep                                         (the original scene is acceptable)
key | fix | <strategy> | <scene starting with "Show", max 40 words> | <alt, max 12 words>   (a clearly better acceptable scene; strategies: direct|context|sentence|action|emotion|contrast|symbolic; one scene, no split panels, no text)
key | none | <reason, max 10 words>              (no honest picture)
Exactly one line per input, input order, nothing else.`;
const RDIR = path.join(STORE, "review-v2-rescue");

const J = (f) => (fs.existsSync(f) ? fs.readFileSync(f, "utf8").split("\n").filter(Boolean).map(JSON.parse) : []);

export function concepts() {
  const queue = new Map(JSON.parse(fs.readFileSync(QUEUE, "utf8")).items.map((x) => [x.key, x]));
  const qa = {}; for (const r of J(QA_LOG)) (qa[r.key] ??= []).push(r);
  const passed = (k) => (qa[k] || []).some((r) => r.pass);
  const hasImg = (it) => it && (it.status === "have" || (it.status === "todo" && passed(it.key)));
  const byHead = new Map(); for (const it of queue.values()) if (hasImg(it)) { const h = headKey(it); (byHead.get(h) || byHead.set(h, []).get(h)).push(it); }
  const m = new Map();
  for (const ch of loadChapters()) for (const v of ch.C.vocab || []) {
    if (v.img) continue;
    const key = conceptKey(v); const it = queue.get(key);
    if (m.has(key) || !it || hasImg(it)) continue;
    if (it.status === "alias" && hasImg(queue.get(it.root))) continue;
    const fails = (qa[key] || []).filter((r) => !r.pass).slice(-3).map((r) => r.reason).filter(Boolean);
    const existing = (byHead.get(headKey(v)) || []).filter((x) => x.key !== key).slice(0, 4).map((x) => ({ key: x.key, meaning: x.en, picture: x.alt || (x.img && x.img.alt) || x.subject || "" }));
    m.set(key, { key, group: it.status === "todo" || it.status === "alias" ? "failed" : "text-only", head: headKey(v), de: headTerm(v), pos: v.pos, meaning: v.en,
      example: [v.ex, v.exEn].filter(Boolean).join(" — "), chapter: `${ch.level.toUpperCase()} · ${ch.titleEn || ch.title}`, failedBecause: fails, existing });
  }
  return [...m.values()].sort((a, b) => a.head.localeCompare(b.head) || a.key.localeCompare(b.key));
}

function chunked(list) { const out = []; for (let i = 0; i < list.length; i += CHUNK) out.push(list.slice(i, i + CHUNK)); return out; }

const STRATS = new Set(["direct", "context", "sentence", "action", "emotion", "contrast", "symbolic"]);
export function parseLines(text) {
  const out = [];
  for (const line of text.split("\n")) {
    const f = line.split(" | ").map((x) => x.trim()); if (f.length < 3) continue;
    const [key, d] = f;
    if (d === "image" && STRATS.has(f[2]) && /^show\b/i.test(f[3] || "") && f[3].split(/\s+/).length <= 50) out.push({ key, decision: "image", strategy: f[2], subject: f[3], alt: (f[4] || "").slice(0, 90) });
    else if (d === "reuse" && f[2]) out.push({ key, decision: "reuse", sameAs: f[2] });
    else if (d === "none") out.push({ key, decision: "none", reason: (f[2] || "").slice(0, 80) });
  }
  if (!out.length) throw new Error("no lines");
  return out;
}

export function parseCritic(text) {
  const out = [];
  for (const line of text.split("\n")) {
    const f = line.split(" | ").map((x) => x.trim()); if (f.length < 2) continue;
    const [key, d] = f;
    if (d === "keep") out.push({ key, verdict: "keep" });
    else if (d === "fix" && STRATS.has(f[2]) && /^show\b/i.test(f[3] || "") && f[3].split(/\s+/).length <= 50) out.push({ key, verdict: "fix", strategy: f[2], subject: f[3], alt: (f[4] || "").slice(0, 90) });
    else if (d === "none") out.push({ key, verdict: "none", reason: (f[2] || "").slice(0, 80) });
  }
  if (!out.length) throw new Error("no lines");
  return out;
}

async function call(token, items, system = RULES, render = null) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${MODEL}:generateContent`;
  const text = render ? render(items) : "Concepts:\n" + items.map((c) => JSON.stringify({ key: c.key, german: c.de, pos: c.pos, meaning: c.meaning, example: c.example, chapter: c.chapter, failedBecause: c.failedBecause, existing: c.existing })).join("\n");
  const body = { systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: { temperature: 0.4, maxOutputTokens: 32000 } };
  let last = 0;
  for (let a = 0; a < 6; a++) {
    let r; try { r = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token(a > 0 && last === 401), "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) }); }
    catch { await new Promise((z) => setTimeout(z, 10000 * (a + 1))); continue; }
    last = r.status;
    if (r.status === 401) continue;
    if (r.status === 429 || r.status >= 500) { await new Promise((z) => setTimeout(z, 15000 * (a + 1))); continue; }
    return { ok: r.ok, status: r.status, j: await r.json() };
  }
  return { ok: false, status: last || 599, j: {} };
}

async function run() {
  fs.mkdirSync(DIR, { recursive: true });
  let list = concepts(); if (opt("only")) list = list.filter((c) => c.group === opt("only"));
  let tag = opt("only") ? opt("only") + "-" : "";
  if (opt("gaps")) { const have = results(); list = list.filter((c) => !have.has(c.key)); tag = `gaps-${Date.now()}-`; }   // keys a model reply skipped
  const all = chunked(list);
  const name = (i) => path.join(DIR, `${tag}chunk-${String(i).padStart(4, "0")}.json`);
  const pending = all.map((c, i) => ({ c, i })).filter(({ i }) => !fs.existsSync(name(i))).slice(0, Number(opt("limit", Infinity)));
  console.log(JSON.stringify({ concepts: list.length, chunks: all.length, pending: pending.length }));
  let tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(), at = Date.now();
  const token = (force) => { if (force || Date.now() - at > 20 * 60e3) { tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); at = Date.now(); } return tok; };
  let idx = 0, done = 0, usd = 0;
  async function worker() {
    while (idx < pending.length) {
      const { c, i } = pending[idx++];
      assertCanSpend(0.05, "coverage review chunk");
      const { ok, status, j } = await call(token, c);
      const cost = ok ? textUsd(MODEL, j.usageMetadata) : 0;
      log({ batch: "review-v2", key: `${tag}chunk-${i}`, status: ok ? "ok" : "http_" + status, billed: ok, usd: cost, usdList: cost });
      if (!ok) { console.error("chunk", i, "failed", status); continue; }
      let parsed;
      try { parsed = parseLines(j.candidates[0].content.parts.map((p) => p.text || "").join("")); if (j.candidates[0].finishReason !== "STOP") throw 0; }
      catch { console.error("chunk", i, "unparseable", j.candidates?.[0]?.finishReason); continue; }
      const keys = new Set(c.map((x) => x.key));
      fs.writeFileSync(name(i), JSON.stringify(parsed.filter((r) => keys.has(r.key))));
      done++; usd += cost;
      if (done % 10 === 0) console.log(`done ${done}/${pending.length} $${usd.toFixed(3)}`);
    }
  }
  await Promise.all(Array.from({ length: Number(opt("parallel", 4)) }, worker));
  console.log(JSON.stringify({ done, usd: +usd.toFixed(4) }));
}

async function critic(rescue = false) {
  const DIRX = rescue ? RDIR : CDIR; fs.mkdirSync(DIRX, { recursive: true });
  const res = results(); const byKey = new Map(concepts().map((c) => [c.key, c]));
  const crit = criticResults(); const seen = rescue ? criticResults(RDIR) : crit;
  const list = [...res.values()].filter((x) => x.decision === "image" && byKey.has(x.key) && !seen.has(x.key) && (!rescue || crit.get(x.key)?.verdict === "none")).sort((a, b) => a.key.localeCompare(b.key));
  const run = Date.now();
  const all = chunked(list); const name = (i) => path.join(DIRX, `r${run}-chunk-${String(i).padStart(4, "0")}.json`);
  const pending = all.map((c, i) => ({ c, i })).filter(({ i }) => !fs.existsSync(name(i))).slice(0, Number(opt("limit", Infinity)));
  console.log(JSON.stringify({ proposals: list.length, chunks: all.length, pending: pending.length }));
  let tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(), at = Date.now();
  const token = (force) => { if (force || Date.now() - at > 20 * 60e3) { tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); at = Date.now(); } return tok; };
  const render = (items) => "Proposals:\n" + items.map((x) => { const c = byKey.get(x.key); return JSON.stringify({ key: x.key, german: c.de, pos: c.pos, meaning: c.meaning, example: c.example, chapter: c.chapter, strategy: x.strategy, scene: x.subject, ...(rescue ? { rejectedBecause: crit.get(x.key).reason } : {}) }); }).join("\n");
  let idx = 0, done = 0, usd = 0;
  async function worker() {
    while (idx < pending.length) {
      const { c, i } = pending[idx++];
      assertCanSpend(0.05, "coverage critic chunk");
      const { ok, status, j } = await call(token, c, rescue ? RESCUE : CRITIC, render);
      const cost = ok ? textUsd(MODEL, j.usageMetadata) : 0;
      log({ batch: "review-v2", key: `critic-chunk-${i}`, status: ok ? "ok" : "http_" + status, billed: ok, usd: cost, usdList: cost });
      if (!ok) { console.error("critic", i, "failed", status); continue; }
      let parsed;
      try { parsed = parseCritic(j.candidates[0].content.parts.map((p) => p.text || "").join("")); if (j.candidates[0].finishReason !== "STOP") throw 0; }
      catch { console.error("critic", i, "unparseable", j.candidates?.[0]?.finishReason); continue; }
      const keys = new Set(c.map((x) => x.key));
      fs.writeFileSync(name(i), JSON.stringify(parsed.filter((r) => keys.has(r.key))));
      done++; usd += cost;
      if (done % 10 === 0) console.log(`critic ${done}/${pending.length} $${usd.toFixed(3)}`);
    }
  }
  await Promise.all(Array.from({ length: Number(opt("parallel", 4)) }, worker));
  console.log(JSON.stringify({ done, usd: +usd.toFixed(4) }));
}
function criticResults(dir = CDIR) {
  const r = new Map();
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) for (const x of JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"))) r.set(x.key, x);
  return r;
}

function results() {
  const r = new Map();
  if (fs.existsSync(DIR)) for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).sort()) for (const x of JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"))) r.set(x.key, x);
  return r;
}

function merge() {
  const queue = new Map(JSON.parse(fs.readFileSync(QUEUE, "utf8")).items.map((x) => [x.key, x]));
  const out = {}; let img = 0, reuse = 0, none = 0, badReuse = 0;
  const crit = criticResults(); let fixed = 0, vetoed = 0;
  for (const [k, x] of criticResults(RDIR)) crit.set(k, x);   // the calibrated rescue verdict is final
  for (const [k, x0] of results()) {
    let x = x0; const c = crit.get(k);
    if (x.decision === "image" && c && c.verdict === "fix") { x = { ...x, strategy: c.strategy, subject: c.subject, alt: c.alt || x.alt }; fixed++; }
    else if (x.decision === "image" && c && c.verdict === "none") { x = { decision: "none", reason: "critic: " + c.reason }; vetoed++; }
    if (x.decision === "image") { out[k] = { subject: x.subject, alt: x.alt, strategy: x.strategy }; img++; }
    else if (x.decision === "reuse") {
      const root = queue.get(x.sameAs);
      if (root && headKey(root) === headKey(queue.get(k) || {})) { out[k] = { sameAs: x.sameAs }; reuse++; } else badReuse++;
    } else { out[k] = { tier: "text-only", reason: "coverage review: " + x.reason }; none++; }
  }
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
  console.log(JSON.stringify({ written: Object.keys(out).length, image: img, reuse, none, rejectedReuse: badReuse, criticFixed: fixed, criticVetoed: vetoed, out: path.relative(ROOT, OUT) }));
}

function stats() {
  const list = concepts(), res = results(); const by = {}, strat = {};
  for (const c of list) { const x = res.get(c.key); const d = x ? x.decision : "pending"; (by[c.group] ??= {})[d] = (by[c.group][d] || 0) + 1; if (x?.strategy) strat[x.strategy] = (strat[x.strategy] || 0) + 1; }
  console.log(JSON.stringify({ concepts: list.length, byGroup: by, strategies: strat }, null, 1));
}

if (opt("run")) await run();
else if (opt("critic")) await critic();
else if (opt("rescue")) await critic(true);
else if (opt("merge")) merge();
else if (opt("stats")) stats();
else console.log("usage: --run [--parallel N] [--limit N] [--only failed|text-only] | --merge | --stats");
