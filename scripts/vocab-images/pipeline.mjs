#!/usr/bin/env node
/* Visual Vocabulary pipeline — whole project (A1→C2), resumable, hard-capped.

   node scripts/vocab-images/pipeline.mjs plan
   node scripts/vocab-images/pipeline.mjs submit  --max-usd N --approved-by-owner [--limit K] [--job-size 400] [--level b1]
   node scripts/vocab-images/pipeline.mjs collect                 (poll jobs, save images, reconcile spend)
   node scripts/vocab-images/pipeline.mjs qa      [--parallel 4]  (vision QA of every new image)
   node scripts/vocab-images/pipeline.mjs encode                  (AVIF/WebP 400/800 of accepted images)
   node scripts/vocab-images/pipeline.mjs apply   --level a1      (write img into that level's chapters)
   node scripts/vocab-images/pipeline.mjs sheets  --keys-from FILE|--failed|--sample N [--out DIR]
   node scripts/vocab-images/pipeline.mjs status

   Store (outside the repo, never committed): $VOCAB_IMG_STORE, default
   ../vocab-img-store. Holds originals, ledger.jsonl (append-only spend),
   jobs/, qa.jsonl and r2/ (paid images + levels.json, uploaded to the private
   R2 bucket at release time).

   Decisions per concept (headword + meaning), in precedence order:
     1. an image already in the chapter data (A1·01 pilot) — kept;
     2. hand-reviewed overrides docs/visual-vocab/prompts/<batch>.json;
     3. the model review docs/visual-vocab/prompts/review.json;
     4. the deterministic classifier (text-only rules).
   One image per concept, shared by every chapter that uses it; "sameAs"
   points a near-identical meaning at that image.

   Public vs gated: a concept used by any FREE chapter (Chapter 1 of a level)
   is published on Pages (public/vocab-img/<id>-…). Every other image exists
   only in the private bucket and is served by the access Worker at
   /api/media/vocab-img/<id>-…, which checks the user's entitlement against
   the levels of the paid chapters that use it (gated-images.json = levels.json).
   <id> = first 20 hex of sha256(concept key): opaque, no word in the URL.

   Spend: paid calls happen only in `submit` (batch jobs, 50% list price) and
   `qa` (text+vision, a fraction of a cent). Both check budget.mjs's HARD CAP
   ($385, worst-case accounting: every image at the standard $0.039, every
   open job reserved in full) and --max-usd. At most 3 attempts per concept;
   a concept that fails QA three times stays text-only. */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { ROOT, LEVELS, loadChapters, classify, conceptKey, promptFor } from "./lib.mjs";
import { applyImages } from "./apply-lib.mjs";
import { STORE, rows, log, committedUsd, listUsd, assertCanSpend, textUsd, IMAGE_USD_WORST, IMAGE_USD_BATCH } from "./budget.mjs";

const PROMPTS_DIR = path.join(ROOT, "docs/visual-vocab/prompts");
const GATED_LIST = path.join(ROOT, "docs/visual-vocab/gated-images.json");
const ALLOWLIST = path.join(ROOT, ".github/pages-allowlist.txt");
const PROJ = path.join(STORE, "project");
const QA_LOG = path.join(STORE, "qa.jsonl");
const MAX_ATTEMPTS = 3;
const WIDTHS = [400, 800];
const FORMATS = ["avif", "webp"];
const IMAGE_MODEL = process.env.IMAGE_MODEL || "gemini-2.5-flash-image";
const QA_MODEL = process.env.QA_MODEL || "gemini-3.8-flash";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";
const PROJECT_NUM = process.env.VOCAB_IMG_GCP_PROJECT_NUM || "951775270820";
const GCS = process.env.VOCAB_IMG_GCS || "gs://klarweg/vocab-img-batch";
const REGION = "us-central1";

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : (args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true); };
const readJson = (p, d) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : d);
const writeJson = (p, v) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(v, null, 1) + "\n"); };
const readJsonl = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : []);
export const imageId = (key) => crypto.createHash("sha256").update(key).digest("hex").slice(0, 20);
const token = (() => { let t = null, at = 0; return (force) => { if (force || !t || Date.now() - at > 20 * 60e3) { t = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim(); at = Date.now(); } return t; }; })();
const gapi = async (url, init = {}) => {
  let r = await fetch(url, { ...init, headers: { Authorization: "Bearer " + token(), "Content-Type": "application/json", "x-goog-user-project": PROJECT, ...(init.headers || {}) } });
  if (r.status === 401) r = await fetch(url, { ...init, headers: { Authorization: "Bearer " + token(true), "Content-Type": "application/json", "x-goog-user-project": PROJECT, ...(init.headers || {}) } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`${r.status} ${JSON.stringify(j).slice(0, 300)}`);
  return j;
};

/* ---------------- decisions ---------------- */
function overrides() {
  const manual = {};
  for (const f of fs.readdirSync(PROMPTS_DIR).filter((f) => f.endsWith(".json") && f !== "review.json").sort()) Object.assign(manual, readJson(path.join(PROMPTS_DIR, f), {}));
  return { manual, review: readJson(path.join(PROMPTS_DIR, "review.json"), {}) };
}

/* ---------------- plan ---------------- */
export function buildPlan(chapters = loadChapters()) {
  const { manual, review } = overrides();
  const concepts = new Map();          // key → { key, v, uses: [{id, level, free}] , existing }
  for (const ch of chapters) for (const v of ch.C.vocab || []) {
    const key = conceptKey(v);
    if (!concepts.has(key)) concepts.set(key, { key, v, uses: [], existing: null });
    const c = concepts.get(key);
    c.uses.push({ id: ch.id, level: ch.level, free: ch.free });
    if (v.img && !c.existing) c.existing = v.img;
  }
  const items = new Map();
  for (const c of concepts.values()) {
    const cls = classify(c.v);
    const o = manual[c.key] || review[c.key] || null;
    const base = { key: c.key, de: c.v.de, art: c.v.art || "", en: c.v.en, pos: c.v.pos, kind: cls.kind, tier: cls.tier, exEn: c.v.exEn || "" };
    let it;
    if (c.existing) it = { ...base, status: "have", img: c.existing };
    else if (cls.tier === "text-only" && !(manual[c.key] && manual[c.key].subject)) it = { ...base, status: "text-only", why: "classifier" };
    else if (!o) it = { ...base, status: "text-only", why: "unreviewed" };
    else if (o.tier === "text-only") it = { ...base, status: "text-only", why: o.reason || "review" };
    else if (o.sameAs) it = { ...base, status: "alias", sameAs: o.sameAs };
    else if (o.subject) it = { ...base, status: "todo", subject: o.subject, alt: (o.alt || o.subject.replace(/^Show (an?|the|two|one) /i, "").replace(/\.$/, "")).slice(0, 120) };
    else it = { ...base, status: "text-only", why: "no subject" };
    it.uses = c.uses;
    items.set(c.key, it);
  }
  // resolve aliases to a root that has (or will have) an image
  for (const it of items.values()) {
    if (it.status !== "alias") continue;
    let r = items.get(it.sameAs), hops = 0;
    while (r && r.status === "alias" && hops++ < 5) r = items.get(r.sameAs);
    if (r && (r.status === "todo" || r.status === "have")) it.root = r.key;
    else { it.status = "text-only"; it.why = "alias without image"; }
  }
  // every image's audience = its own uses + the uses of its aliases
  for (const it of items.values()) if (it.status === "todo") { it.id = imageId(it.key); it.prompt = promptFor(it, it.subject); it.audience = [...it.uses]; }
  for (const it of items.values()) if (it.status === "alias" && items.get(it.root).status === "todo") items.get(it.root).audience.push(...it.uses);
  for (const it of items.values()) if (it.status === "todo") {
    it.public = it.audience.some((u) => u.free);
    it.levels = [...new Set(it.audience.filter((u) => !u.free).map((u) => u.level.toUpperCase()))].sort();
  }
  return [...items.values()];
}
function plan() {
  const items = buildPlan();
  writeJson(path.join(PROJ, "queue.json"), { createdAt: new Date().toISOString(), items });
  const n = (s) => items.filter((x) => x.status === s).length;
  const why = {}; items.filter((x) => x.status === "text-only").forEach((x) => (why[x.why] = (why[x.why] || 0) + 1));
  console.log(JSON.stringify({ concepts: items.length, todo: n("todo"), have: n("have"), alias: n("alias"), textOnly: n("text-only"), textOnlyWhy: Object.fromEntries(Object.entries(why).sort((a, b) => b[1] - a[1]).slice(0, 8)), public: items.filter((x) => x.public).length, worstCaseUsdOneAttempt: +(n("todo") * IMAGE_USD_WORST).toFixed(2) }));
}
const queue = () => { const q = readJson(path.join(PROJ, "queue.json")); if (!q) throw new Error("run plan first"); return q.items; };

/* ---------------- attempt state (from the ledger + QA log) ---------------- */
function state() {
  const gen = rows().filter((r) => r.batch === "gen");
  const qa = readJsonl(QA_LOG);
  const s = new Map();
  const get = (k) => { if (!s.has(k)) s.set(k, { attempts: 0, ok: [], qa: new Map(), inflight: false, accepted: null, lastFail: null, needsQa: [], billed: 0 }); return s.get(k); };
  for (const r of gen) {
    if (r.submitted) for (const k of r.keys || []) { const x = get(k.split("#")[0]); x.attempts = Math.max(x.attempts, Number(k.split("#")[1])); }
    if (r.status === "ok") get(r.key).ok.push(r);
    if (r.key && r.billed) get(r.key).billed++;      // attempts that cost money (cancelled/missing ones do not count)
  }
  const open = new Set(), closed = new Set();
  for (const r of gen) { if (r.job && r.reserveUsd) open.add(r.job); if (r.releaseJob) closed.add(r.releaseJob); }
  for (const r of gen) if (r.job && r.reserveUsd && !closed.has(r.job)) for (const k of r.keys || []) get(k.split("#")[0]).inflight = true;
  for (const q of qa) get(q.key).qa.set(q.attempt, q);
  for (const x of s.values()) {
    // accepted = latest ok attempt that passed QA
    x.accepted = [...x.ok].reverse().find((r) => x.qa.get(r.attempt)?.pass) || null;
    x.lastFail = [...x.ok].reverse().map((r) => x.qa.get(r.attempt)).find((q) => q && !q.pass) || null;
    x.needsQa = x.ok.filter((r) => !x.qa.has(r.attempt));
  }
  return { get, all: s };
}

/* Concepts that still need an image: not accepted, not in flight, QA done,
   fewer than MAX_ATTEMPTS billed attempts. A retry carries the QA reason. */
function pickWork(level, limit) {
  const st = state();
  const want = [];
  for (const it of queue()) {
    if (it.status !== "todo") continue;
    if (level && !it.audience.some((u) => u.level === level)) continue;
    const x = st.get(it.key);
    if (x.inflight || x.accepted || x.needsQa.length) continue;          // never pay twice; QA first
    if (x.billed >= MAX_ATTEMPTS) continue;
    const attempt = x.attempts + 1;
    const fix = x.lastFail ? ` Important correction from review of an earlier attempt: ${x.lastFail.reason}.` : "";
    want.push({ it, attempt, prompt: it.prompt.replace(" The cream background", fix + " The cream background") });
    if (want.length >= limit) break;
  }
  return want;
}

/* Exponential back-off with full jitter: 5 s · 2^attempt, capped at 5 min. */
export const backoffMs = (attempt, base = 5000, cap = 300000) => Math.round(Math.random() * Math.min(cap, base * 2 ** attempt));
/* Adaptive concurrency (AIMD): a 429 halves the allowed in-flight requests,
   20 clean responses in a row add one back, up to the --parallel ceiling. */
export function makeGate(max) {
  let limit = max, inFlight = 0, clean = 0; const waiters = [];
  const pump = () => { while (inFlight < limit && waiters.length) { inFlight++; waiters.shift()(); } };
  return {
    acquire: () => new Promise((r) => { waiters.push(r); pump(); }),
    release: () => { inFlight--; pump(); },
    backoff: () => { limit = Math.max(1, Math.floor(limit / 2)); clean = 0; },
    success: () => { if (++clean >= 20 && limit < max) { limit++; clean = 0; pump(); } },
    get limit() { return limit; },
  };
}
/* A request logged as submitted but never answered (process stopped) is
   counted as billed at the standard price — we cannot prove it was not. */
function markAbortedInteractive() {
  const open = new Map();
  for (const r of rows().filter((x) => x.batch === "gen" && x.interactive)) {
    if (r.submitted) for (const k of r.keys) open.set(k, r);
    else if (r.key) open.delete(r.key + "#" + r.attempt);
  }
  for (const k of open.keys()) { const [key, a] = k.split("#"); log({ batch: "gen", key, attempt: Number(a), status: "aborted", billed: true, billingUnknown: true, usd: IMAGE_USD_WORST, usdList: 0, interactive: true }); }
}

/* ---------------- generate (interactive, standard price) ----------------
   Same rules as submit, one request per image on the global endpoint, with
   rate-limited parallelism and back-off. Used when batch capacity is slow. */
async function generate() {
  const maxUsd = Number(opt("max-usd"));
  if (!(maxUsd > 0)) throw new Error("--max-usd required");
  if (opt("approved-by-owner") !== true) throw new Error("refusing paid generation without --approved-by-owner (owner budget approval)");
  const limit = Number(opt("limit", Infinity)), par = Number(opt("parallel", 4)), level = opt("level");
  markAbortedInteractive();
  const work = pickWork(level, limit);
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${IMAGE_MODEL}:generateContent`;
  console.log(JSON.stringify({ toGenerate: work.length, parallel: par }));
  let idx = 0, ok = 0, bad = 0, r429 = 0, stop = false; const t0 = Date.now();
  const gate = makeGate(par);
  async function worker() {
    while (!stop && idx < work.length) {
      const w = work[idx++];
      const committed = assertCanSpend(IMAGE_USD_WORST, "image");
      if (committed + IMAGE_USD_WORST > maxUsd) { stop = true; console.log(`--max-usd reached at $${committed}`); break; }
      const k = `${w.it.key}#${w.attempt}`;
      log({ batch: "gen", submitted: true, interactive: true, keys: [k], usd: 0, usdList: 0 });
      const body = { contents: [{ role: "user", parts: [{ text: w.prompt }] }], generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "4:3" } } };
      let res = null;
      for (let a = 0; a < 10; a++) {
        await gate.acquire();
        try { res = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token(a > 0 && res?.status === 401), "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) }); }
        finally { gate.release(); }
        if (res.status === 401) continue;
        if (res.status === 429 || res.status >= 500) { r429++; gate.backoff(); await new Promise((z) => setTimeout(z, backoffMs(a))); continue; }
        gate.success();
        break;
      }
      const j = await res.json().catch(() => ({}));
      const part = (j.candidates?.[0]?.content?.parts || []).find((x) => x.inlineData);
      const outTok = j.usageMetadata?.candidatesTokenCount || 0;
      if (res.ok && part) {
        const file = path.join(PROJ, "orig", `${w.it.key}--${w.attempt}.png`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, Buffer.from(part.inlineData.data, "base64"));
        log({ batch: "gen", key: w.it.key, attempt: w.attempt, status: "ok", billed: true, usd: IMAGE_USD_WORST, usdList: IMAGE_USD_WORST, file: path.relative(STORE, file), interactive: true });
        ok++;
      } else if (res.ok && outTok > 0) {
        log({ batch: "gen", key: w.it.key, attempt: w.attempt, status: "no_image:" + (j.candidates?.[0]?.finishReason || "?"), billed: true, usd: IMAGE_USD_WORST, usdList: IMAGE_USD_WORST, interactive: true }); bad++;
      } else { log({ batch: "gen", key: w.it.key, attempt: w.attempt, status: "failed:" + res.status, billed: false, usd: 0, usdList: 0, interactive: true }); bad++; }
      const pace = Number(opt("pace", 0)); if (pace) await new Promise((z) => setTimeout(z, pace));   // steady rate under the per-project cap
      if ((ok + bad) % 50 === 0) console.log(`gen ${ok + bad}/${work.length} ok ${ok} bad ${bad} 429s ${r429} ${((ok + bad) / ((Date.now() - t0) / 60000)).toFixed(1)}/min committed $${committedUsd()}`);
    }
  }
  await Promise.all(Array.from({ length: par }, worker));
  console.log(JSON.stringify({ generated: ok, failed: bad, r429, minutes: +((Date.now() - t0) / 60000).toFixed(1), committedUsd: committedUsd() }));
}

/* ---------------- submit (batch prediction jobs) ---------------- */
async function submit() {
  const maxUsd = Number(opt("max-usd"));
  if (!(maxUsd > 0)) throw new Error("--max-usd required");
  if (opt("approved-by-owner") !== true) throw new Error("refusing paid generation without --approved-by-owner (owner budget approval)");
  const limit = Number(opt("limit", Infinity)), jobSize = Number(opt("job-size", 400)), level = opt("level");
  const want = pickWork(level, limit);
  if (!want.length) { console.log(JSON.stringify({ submitted: 0 })); return; }
  for (let i = 0; i < want.length; i += jobSize) {
    const part = want.slice(i, i + jobSize);
    const reserve = +(part.length * IMAGE_USD_WORST).toFixed(4);
    const committed = assertCanSpend(reserve, `job of ${part.length} images`);
    if (committed + reserve > maxUsd) { console.log(`--max-usd reached: committed $${committed} + $${reserve} > $${maxUsd}`); break; }
    const tag = new Date().toISOString().replace(/[:.]/g, "-");
    const local = path.join(PROJ, "jobs", tag + ".jsonl");
    fs.mkdirSync(path.dirname(local), { recursive: true });
    fs.writeFileSync(local, part.map((w) => JSON.stringify({ key: `${w.it.key}#${w.attempt}`, request: { contents: [{ role: "user", parts: [{ text: w.prompt }] }], generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "4:3" } } } })).join("\n") + "\n");
    const gin = `${GCS}/${tag}/in.jsonl`, gout = `${GCS}/${tag}/out`;
    execFileSync("gcloud", ["storage", "cp", "--quiet", local, gin], { stdio: "pipe" });
    const job = await gapi(`https://${REGION}-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/${REGION}/batchPredictionJobs`, { method: "POST", body: JSON.stringify({
      displayName: "vocab-img-" + tag, model: `publishers/google/models/${IMAGE_MODEL}`,
      inputConfig: { instancesFormat: "jsonl", gcsSource: { uris: [gin] } },
      outputConfig: { predictionsFormat: "jsonl", gcsDestination: { outputUriPrefix: gout } } }) });
    log({ batch: "gen", job: job.name, submitted: true, reserveUsd: reserve, n: part.length, keys: part.map((w) => `${w.it.key}#${w.attempt}`), gcs: gout, usd: 0, usdList: 0 });
    console.log(`submitted ${job.name.split("/").pop()} n=${part.length} reserve $${reserve} committed $${committedUsd()}`);
  }
}

/* ---------------- collect ---------------- */
async function collect() {
  const all = rows().filter((r) => r.batch === "gen");
  const closed = new Set(all.filter((r) => r.releaseJob).map((r) => r.releaseJob));
  const open = all.filter((r) => r.job && r.reserveUsd && !closed.has(r.job));
  const states = {};
  for (const j of open) {
    let job;
    try { job = await gapi(`https://${REGION}-aiplatform.googleapis.com/v1/${j.job}`); }
    catch (e) { states.unreachable = (states.unreachable || 0) + 1; console.error("job lookup failed (will retry next cycle):", j.job.slice(-8), String(e.message || e).slice(0, 120)); continue; }
    states[job.state] = (states[job.state] || 0) + 1;
    // a collection interrupted half-way is resumed without logging any result twice
    const already = new Set(all.filter((r) => r.ofJob === j.job && r.key).map((r) => r.key + "#" + r.attempt));
    if (!["JOB_STATE_SUCCEEDED", "JOB_STATE_FAILED", "JOB_STATE_CANCELLED", "JOB_STATE_PARTIALLY_SUCCEEDED", "JOB_STATE_EXPIRED"].includes(job.state)) continue;
    const files = execFileSync("gcloud", ["storage", "ls", "-r", j.gcs], { encoding: "utf8" }).split("\n").filter((l) => l.endsWith(".jsonl"));
    const seen = new Set(); let ok = 0, billedNoImg = 0, failed = 0;
    for (const f of files) {
      const text = execFileSync("gcloud", ["storage", "cat", f], { encoding: "utf8", maxBuffer: 1 << 30 });
      for (const line of text.split("\n").filter(Boolean)) {
        const p = JSON.parse(line);
        const [key, attempt] = String(p.key).split("#");
        if (seen.has(p.key)) continue; seen.add(p.key);
        if (already.has(p.key)) continue;                   // logged by an interrupted earlier collection
        const parts = p.response?.candidates?.[0]?.content?.parts || [];
        const img = parts.find((x) => x.inlineData);
        const outTok = p.response?.usageMetadata?.candidatesTokenCount || 0;
        if (img) {
          const file = path.join(PROJ, "orig", `${key}--${attempt}.png`);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, Buffer.from(img.inlineData.data, "base64"));
          log({ batch: "gen", key, attempt: Number(attempt), status: "ok", billed: true, usd: IMAGE_USD_WORST, usdList: IMAGE_USD_BATCH, file: path.relative(STORE, file), job: undefined, ofJob: j.job });
          ok++;
        } else if (outTok > 0) {
          log({ batch: "gen", key, attempt: Number(attempt), status: "no_image:" + (p.response?.candidates?.[0]?.finishReason || "?"), billed: true, usd: IMAGE_USD_WORST, usdList: IMAGE_USD_BATCH, ofJob: j.job });
          billedNoImg++;
        } else { log({ batch: "gen", key, attempt: Number(attempt), status: "failed:" + String(p.status || "?").slice(0, 80), billed: false, usd: 0, usdList: 0, ofJob: j.job }); failed++; }
      }
    }
    const missing = (j.keys || []).filter((k) => !seen.has(k));
    for (const k of missing) log({ batch: "gen", key: k.split("#")[0], attempt: Number(k.split("#")[1]), status: "missing", billed: false, usd: 0, usdList: 0, ofJob: j.job });
    log({ batch: "gen", releaseJob: j.job, state: job.state, ok, billedNoImg, failed, missing: missing.length, usd: 0, usdList: 0 });
    console.log(`collected ${j.job.split("/").pop()} ${job.state} ok=${ok} noImg=${billedNoImg} failed=${failed} missing=${missing.length}`);
  }
  console.log(JSON.stringify({ openJobs: open.length, states, committedUsd: committedUsd(), listUsd: listUsd() }));
}

/* ---------------- QA (vision) ---------------- */
export const QA_RULES = `You check illustrations for a premium German vocabulary course for adult learners. Each picture must help a learner recognise ONE meaning.
FAIL the picture if ANY of these is true:
1. it does not clearly show the intended meaning (or shows a different sense of the word);
2. it contains any readable or pseudo text: letters, words, digits, gibberish glyphs, labels, signs with writing, watermarks or logos (even small or faint); national flags or emblems; banknotes or coins showing numbers;
3. there is a frame, border, rounded card, inset picture, or the background is not a plain light cream/off-white;
4. a creature, blob or mascot appears instead of a human, or objects/food/plants have faces, or there are extra tiny characters;
5. people are depicted disrespectfully, as a stereotype, or the scene is inappropriate, violent, frightening or sexual;
6. orange is a dominant colour;
7. it is visibly broken: distorted hands/faces, malformed objects, cut-off main subject.
Answer with ONE line only: "pass" or "fail | <short reason, max 15 words, phrased as an instruction for a corrected image>".`;

async function qa() {
  const sharp = loadSharp();
  const par = Number(opt("parallel", 4));
  const items = new Map(queue().map((x) => [x.key, x]));
  const st = state();
  const work = [];
  for (const [key, x] of st.all) { const it = items.get(key); if (it) for (const r of x.needsQa) work.push({ it, r }); }
  console.log(JSON.stringify({ toCheck: work.length }));
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/global/publishers/google/models/${QA_MODEL}:generateContent`;
  let idx = 0, done = 0, fails = 0, usd = 0;
  async function worker() {
    while (idx < work.length) {
      const { it, r } = work[idx++];
      assertCanSpend(0.01, "qa");
      const jpg = await sharp(path.join(STORE, r.file)).resize(512, 384, { fit: "cover" }).jpeg({ quality: 82 }).toBuffer();
      const body = { systemInstruction: { parts: [{ text: QA_RULES }] }, contents: [{ role: "user", parts: [
        { text: `Intended meaning: ${it.en} (${it.pos}). Intended scene: ${it.subject}` }, { inlineData: { mimeType: "image/jpeg", data: jpg.toString("base64") } }] }],
        generationConfig: { temperature: 0, maxOutputTokens: 2000, thinkingConfig: { thinkingLevel: "low" } } };
      let j = null;
      for (let a = 0; a < 6 && !j; a++) {
        const res = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token(), "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) });
        if (res.status === 401) { token(true); continue; }
        if (res.status === 429 || res.status >= 500) { await new Promise((z) => setTimeout(z, 10000 * (a + 1))); continue; }
        j = await res.json(); if (!res.ok) { console.error("qa http", res.status, JSON.stringify(j).slice(0, 200)); j = null; break; }
      }
      if (!j) continue;
      const cost = textUsd(QA_MODEL, j.usageMetadata);
      log({ batch: "qa", key: it.key, attempt: r.attempt, status: "ok", billed: true, usd: cost, usdList: cost });
      const text = (j.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("").trim().split("\n")[0].trim();
      const pass = /^pass\b/i.test(text);
      const reason = pass ? "" : (text.split("|")[1] || text).trim().slice(0, 160);
      fs.appendFileSync(QA_LOG, JSON.stringify({ ts: new Date().toISOString(), key: it.key, attempt: r.attempt, pass, reason, by: QA_MODEL }) + "\n");
      done++; usd += cost; if (!pass) fails++;
      if (done % 100 === 0) console.log(`qa ${done}/${work.length} fails ${fails} $${usd.toFixed(3)}`);
    }
  }
  await Promise.all(Array.from({ length: par }, worker));
  console.log(JSON.stringify({ checked: done, fails, usd: +usd.toFixed(4) }));
}
/* Manual verdicts from contact-sheet review override the model:
   node pipeline.mjs verdict --key K --attempt N --fail "reason" | --pass */
function verdict() {
  const key = opt("key"), attempt = Number(opt("attempt"));
  if (!key || !attempt) throw new Error("--key and --attempt required");
  const pass = opt("pass") === true;
  fs.appendFileSync(QA_LOG, JSON.stringify({ ts: new Date().toISOString(), key, attempt, pass, reason: pass ? "" : String(opt("fail")), by: "manual" }) + "\n");
}

/* ---------------- encode ---------------- */
function loadSharp() {
  const req = createRequire(import.meta.url);
  for (const p of [process.env.SHARP_PATH, "sharp"].filter(Boolean)) { try { return req(p); } catch {} }
  throw new Error("sharp not installed — set SHARP_PATH to a sharp install (dev tool only; not a site dependency)");
}
const outDirFor = (it) => (it.public ? path.join(ROOT, "public/vocab-img") : path.join(STORE, "r2/vocab-img"));
const encoded = (it) => WIDTHS.every((w) => FORMATS.every((f) => fs.existsSync(path.join(outDirFor(it), `${it.id}-${w}.${f}`))));
async function encode() {
  const sharp = loadSharp();
  const st = state();
  let done = 0, bytes = 0;
  const work = queue().filter((it) => it.status === "todo" && st.get(it.key).accepted);
  const marker = path.join(PROJ, "encoded.json");
  const encodedFrom = readJson(marker, {});            // key → attempt that was encoded
  for (const it of work) {
    const acc = st.get(it.key).accepted;
    if (encoded(it) && encodedFrom[it.key] === acc.attempt) continue;
    const dir = outDirFor(it); fs.mkdirSync(dir, { recursive: true });
    for (const w of WIDTHS) {
      const base = sharp(path.join(STORE, acc.file)).resize(w, (w * 3) / 4, { fit: "cover", position: "centre" });
      for (const f of FORMATS) {
        const p = path.join(dir, `${it.id}-${w}.${f}`);
        await (f === "avif" ? base.clone().avif({ quality: w === 800 ? 52 : 56, effort: 6 }) : base.clone().webp({ quality: w === 800 ? 74 : 78, effort: 6 })).toFile(p);
        bytes += fs.statSync(p).size;
      }
    }
    encodedFrom[it.key] = acc.attempt; done++;
    if (done % 200 === 0) { writeJson(marker, encodedFrom); console.log(`encoded ${done}`); }
  }
  writeJson(marker, encodedFrom);
  console.log(JSON.stringify({ encoded: done, kb: Math.round(bytes / 1024) }));
}

/* ---------------- apply ---------------- */
export const srcFor = (it) => (it.public ? "../public/vocab-img/" + it.id : "/api/media/vocab-img/" + it.id);
function apply() {
  const level = opt("level"); if (!level) throw new Error("--level required");
  const st = state();
  const items = queue(); const byKey = new Map(items.map((x) => [x.key, x]));
  const ready = (it) => it && it.status === "todo" && st.get(it.key).accepted && encoded(it);
  const imgFor = (key) => {
    let it = byKey.get(key); if (!it) return null;
    if (it.status === "alias") it = byKey.get(it.root);
    if (!ready(it)) return null;
    return { src: srcFor(it), formats: FORMATS, widths: WIDTHS, w: 4, h: 3, alt: it.alt };
  };
  let added = 0, files = 0;
  for (const ch of loadChapters().filter((x) => x.level === level)) {
    const updates = new Map();
    (ch.C.vocab || []).forEach((v, i) => { if (v.img) return; const img = imgFor(conceptKey(v)); if (img) updates.set(i, img); });
    if (!updates.size) continue;
    const p = path.join(ROOT, "chapter", ch.file);
    const res = applyImages(fs.readFileSync(p, "utf8"), updates, { filename: ch.file });
    fs.writeFileSync(p, res.src); added += res.added; files++;
  }
  const s = syncManifests();
  console.log(JSON.stringify({ level, chapterFiles: files, cardsIllustrated: added, ...s }));
}
/* gated-images.json / r2 levels.json and the Pages allowlist are DERIVED from
   the chapter data, so they can never drift from what the pages reference. */
export function syncManifests() {
  const gated = {}; const pub = new Set();
  for (const ch of loadChapters()) for (const v of ch.C.vocab || []) {
    const src = v.img && v.img.src; if (!src) continue;
    const g = /^\/api\/media\/vocab-img\/([0-9a-f]{20})$/.exec(src);
    if (g) { (gated[g[1]] ||= new Set()).add(ch.level.toUpperCase()); continue; }
    const p = /^\.\.\/public\/vocab-img\/([0-9a-f]{20})$/.exec(src);
    if (p) for (const w of WIDTHS) for (const f of FORMATS) pub.add(`public/vocab-img/${p[1]}-${w}.${f}`);
  }
  const map = Object.fromEntries(Object.keys(gated).sort().map((k) => [k, [...gated[k]].sort()]));
  fs.writeFileSync(GATED_LIST, JSON.stringify(map, null, 0).replace(/\],"/g, '],\n"').replace(/^\{/, "{\n").replace(/\}$/, "\n}") + "\n");
  writeJson(path.join(STORE, "r2/vocab-img/levels.json"), map);
  const lines = fs.readFileSync(ALLOWLIST, "utf8").split("\n");
  const keep = lines.filter((l) => !/^public\/vocab-img\/[0-9a-f]{20}-/.test(l));
  let anchor = keep.findIndex((l) => /^public\/vocab-img\//.test(l)); if (anchor < 0) anchor = keep.length - 1;
  while (anchor + 1 < keep.length && /^public\/vocab-img\//.test(keep[anchor + 1])) anchor++;
  keep.splice(anchor + 1, 0, ...[...pub].sort());
  fs.writeFileSync(ALLOWLIST, keep.join("\n"));
  return { gatedImages: Object.keys(map).length, publicFiles: pub.size };
}

/* ---------------- sheets (QA contact sheets) ---------------- */
async function sheets() {
  const sharp = loadSharp(); const st = state();
  const items = new Map(queue().map((x) => [x.key, x]));
  let pick = [];
  if (opt("failed")) for (const [k, x] of st.all) { for (const r of x.ok) { const q = x.qa.get(r.attempt); if (q && !q.pass && items.get(k)) pick.push({ it: items.get(k), r, note: q.reason }); } }
  else if (opt("keys-from")) for (const k of fs.readFileSync(opt("keys-from"), "utf8").split(/\s+/).filter(Boolean)) { const x = st.get(k); const r = x.accepted || x.ok.at(-1); if (r && items.get(k)) pick.push({ it: items.get(k), r, note: x.qa.get(r.attempt)?.reason || "" }); }
  else {
    const all = []; for (const [k, x] of st.all) if (x.accepted && items.get(k)) all.push({ it: items.get(k), r: x.accepted, note: "" });
    const n = Number(opt("sample", 48)); const seed = Number(opt("seed", 1));
    all.sort((a, b) => imageId(a.it.key + seed).localeCompare(imageId(b.it.key + seed))); pick = all.slice(0, n);
  }
  const out = opt("out", path.join(PROJ, "sheets")); fs.mkdirSync(out, { recursive: true });
  const W = 240, H = 180, cols = 5, per = 20;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  for (let s = 0; s * per < pick.length; s++) {
    const page = pick.slice(s * per, s * per + per); const rowsN = Math.ceil(page.length / cols);
    const tiles = await Promise.all(page.map(async ({ r }, i) => ({ input: await sharp(path.join(STORE, r.file)).resize(W, H, { fit: "cover" }).toBuffer(), left: (i % cols) * (W + 8), top: Math.floor(i / cols) * (H + 48) + 44 })));
    const labels = page.map(({ it, r, note }, i) => { const x = (i % cols) * (W + 8) + 2, y = Math.floor(i / cols) * (H + 48); return `<text x="${x}" y="${y + 14}" font-size="12" font-family="Helvetica" font-weight="bold">${esc(((it.art ? it.art + " " : "") + it.de).slice(0, 30))} #${r.attempt}</text><text x="${x}" y="${y + 27}" font-size="10" font-family="Helvetica">${esc(it.en.slice(0, 40))}</text><text x="${x}" y="${y + 40}" font-size="9" font-family="Helvetica" fill="#b00">${esc(note.slice(0, 48))}</text>`; }).join("");
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${cols * (W + 8)}" height="${rowsN * (H + 48) + 44}"><rect width="100%" height="100%" fill="#fff"/>${labels}</svg>`);
    const f = path.join(out, `sheet-${String(s + 1).padStart(3, "0")}.png`);
    await sharp(svg).composite(tiles).png().toFile(f); console.log(f);
  }
}

/* ---------------- status ---------------- */
function status() {
  const items = queue(); const st = state();
  const todo = items.filter((x) => x.status === "todo");
  const acc = todo.filter((x) => st.get(x.key).accepted).length;
  const exhausted = todo.filter((x) => { const s = st.get(x.key); return !s.accepted && !s.inflight && !s.needsQa.length && s.billed >= MAX_ATTEMPTS; }).length;
  const gen = rows().filter((r) => r.batch === "gen" && r.status === "ok").length;
  const qaFails = readJsonl(QA_LOG).filter((q) => !q.pass).length;
  console.log(JSON.stringify({ todo: todo.length, accepted: acc, exhausted, inflight: todo.filter((x) => st.get(x.key).inflight).length, needsQa: todo.reduce((a, x) => a + st.get(x.key).needsQa.length, 0), imagesGenerated: gen, qaFails, committedUsd: committedUsd(), listUsd: listUsd() }));
}

const run = { plan, submit, generate, collect, qa, verdict, encode, apply, sheets, status }[cmd];
if (!run) { console.error("usage: pipeline.mjs plan|submit|generate|collect|qa|verdict|encode|apply|sheets|status"); process.exit(2); }
await run();
