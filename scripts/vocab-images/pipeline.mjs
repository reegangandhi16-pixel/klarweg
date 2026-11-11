#!/usr/bin/env node
/* Visual Vocabulary pipeline — resumable, budget-gated, audited.

   node scripts/vocab-images/pipeline.mjs plan     --batch NAME --chapters ID[,ID…]|--level a1
   node scripts/vocab-images/pipeline.mjs generate --batch NAME --max-usd N --approved-by-owner [--limit K]
   node scripts/vocab-images/pipeline.mjs encode   --batch NAME
   node scripts/vocab-images/pipeline.mjs sheets   --batch NAME
   node scripts/vocab-images/pipeline.mjs apply    --batch NAME
   node scripts/vocab-images/pipeline.mjs status   [--batch NAME]

   Store (outside the repo, never committed): $VOCAB_IMG_STORE, default
   ../vocab-img-store next to the repo. It holds originals, the spend ledger
   (ledger.jsonl, append-only), per-batch queues and review decisions.

   Paid calls happen ONLY in `generate`, only with --approved-by-owner and a
   --max-usd cap, sequentially, and never twice for a concept that already has
   an image unless the review marked it "reject" (max 3 attempts). 429/5xx are
   not billed and are retried with back-off; every request is logged. */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { ROOT, PRICE_PER_IMAGE, loadChapters, classify, conceptKey, promptFor } from "./lib.mjs";
import { applyImages } from "./apply-lib.mjs";

const STORE = process.env.VOCAB_IMG_STORE || path.resolve(ROOT, "../vocab-img-store");
const LEDGER = path.join(STORE, "ledger.jsonl");
const PROMPTS_DIR = path.join(ROOT, "docs/visual-vocab/prompts");
const GATED_LIST = path.join(ROOT, "docs/visual-vocab/gated-images.json");
const ALLOWLIST = path.join(ROOT, ".github/pages-allowlist.txt");
const MAX_ATTEMPTS = 3;
const WIDTHS = [400, 800];
const FORMATS = ["avif", "webp"];
const MODEL = "gemini-2.5-flash-image";
const PROJECT = process.env.VOCAB_IMG_GCP_PROJECT || "klarweg-512108";

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (k, d) => { const i = args.indexOf("--" + k); return i < 0 ? d : (args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true); };
const batchDir = (b) => path.join(STORE, "batches", b);
const readJson = (p, d) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : d);
const writeJson = (p, v) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(v, null, 1) + "\n"); };

/* ---------------- plan ---------------- */
function plan() {
  const batch = opt("batch"); if (!batch) throw new Error("--batch required");
  const want = opt("chapters") ? new Set(String(opt("chapters")).split(",")) : null;
  const level = opt("level");
  const chapters = loadChapters();
  const inScope = chapters.filter((c) => (want ? want.has(c.id) : level ? c.level === level : false));
  if (!inScope.length) throw new Error("no chapters in scope");
  const overrides = readJson(path.join(PROMPTS_DIR, batch + ".json"), {});
  // concept → public? (any free chapter anywhere uses it)
  const usedFree = new Set();
  const existing = new Map();
  for (const ch of chapters) for (const v of ch.C.vocab || []) {
    const k = conceptKey(v);
    if (ch.free) usedFree.add(k);
    if (v.img && !existing.has(k)) existing.set(k, v.img);
  }
  const queue = new Map();
  let reuse = 0, textOnly = 0;
  for (const ch of inScope) for (const v of ch.C.vocab || []) {
    const key = conceptKey(v);
    if (queue.has(key)) { queue.get(key).uses.push(ch.id); continue; }
    const cls = classify(v);
    const o = overrides[key] || {};
    const tier = o.tier || cls.tier;
    const c = { key, de: v.de, art: v.art || "", en: v.en, pos: v.pos, kind: cls.kind, tier, exEn: v.exEn || "", public: usedFree.has(key), uses: [ch.id] };
    if (o.sameAs && existing.has(o.sameAs)) { c.status = "reuse"; c.img = existing.get(o.sameAs); reuse++; }   // alias to an earlier batch's image
    else if (o.sameAs) { c.status = "alias"; c.sameAs = o.sameAs; reuse++; }   // near-duplicate wording → one image
    else if (tier === "text-only") { c.status = "text-only"; textOnly++; }
    else if (existing.has(key)) { c.status = "reuse"; c.img = existing.get(key); reuse++; }
    else { c.status = "todo"; c.prompt = promptFor(c, o.subject); c.alt = o.alt || (o.subject ? o.subject.replace(/^Show (an?|the) /i, "").replace(/\.$/, "") : c.en + " — illustration"); }
    queue.set(key, c);
  }
  const items = [...queue.values()];
  const todo = items.filter((c) => c.status === "todo");
  writeJson(path.join(batchDir(batch), "queue.json"), { batch, chapters: inScope.map((c) => c.id), createdAt: new Date().toISOString(), items });
  const est = { todo: todo.length, reuse, textOnly, expectedImages: Math.round(todo.filter((c) => c.tier === "image").length * 1.2 + todo.filter((c) => c.tier === "concept").length * 1.5) };
  est.expectedUsd = +(est.expectedImages * PRICE_PER_IMAGE).toFixed(2);
  est.maxUsd = +(todo.length * MAX_ATTEMPTS * PRICE_PER_IMAGE).toFixed(2);
  console.log(JSON.stringify({ batch, chapters: inScope.length, cards: inScope.reduce((a, c) => a + (c.C.vocab || []).length, 0), ...est }));
}

/* ---------------- ledger ---------------- */
function ledger() { return fs.existsSync(LEDGER) ? fs.readFileSync(LEDGER, "utf8").trim().split("\n").filter(Boolean).map((l) => JSON.parse(l)) : []; }
function logLedger(row) { fs.mkdirSync(STORE, { recursive: true }); fs.appendFileSync(LEDGER, JSON.stringify(row) + "\n"); }
const spent = (rows) => +rows.reduce((a, r) => a + (r.usd || 0), 0).toFixed(4);

/* ---------------- generate ---------------- */
async function generate() {
  const batch = opt("batch"); const maxUsd = Number(opt("max-usd"));
  if (!batch || !(maxUsd > 0)) throw new Error("--batch and --max-usd required");
  if (opt("approved-by-owner") !== true) throw new Error("refusing paid generation without --approved-by-owner (owner budget approval)");
  const q = readJson(path.join(batchDir(batch), "queue.json")); if (!q) throw new Error("run plan first");
  const review = readJson(path.join(batchDir(batch), "review.json"), {});
  const limit = Number(opt("limit", Infinity));
  const rows = ledger();
  const batchRows = rows.filter((r) => r.batch === batch);
  const okFor = (k) => batchRows.filter((r) => r.key === k && r.status === "ok");
  const attemptsFor = (k) => batchRows.filter((r) => r.key === k && r.billed).length;
  const token = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim();
  const url = `https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/us-central1/publishers/google/models/${MODEL}:generateContent`;
  let n = 0;
  for (const c of q.items.filter((x) => x.status === "todo")) {
    if (n >= limit) break;
    const oks = okFor(c.key);
    const rejected = review[c.key] === "reject";
    if (oks.length && !rejected) continue;                         // never pay twice for an image we have
    if (rejected && oks.length >= MAX_ATTEMPTS) continue;
    if (attemptsFor(c.key) >= MAX_ATTEMPTS) continue;
    if (spent(batchRows) + PRICE_PER_IMAGE > maxUsd) { console.log(`budget reached: $${spent(batchRows)} of $${maxUsd}`); break; }
    const body = { contents: [{ role: "user", parts: [{ text: c.prompt }] }], generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "4:3" } } };
    let r, j, waited = 0;
    for (let a = 0; a < 6; a++) {
      r = await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json", "x-goog-user-project": PROJECT }, body: JSON.stringify(body) });
      if (r.status !== 429 && r.status < 500) break;
      logLedger({ ts: new Date().toISOString(), batch, key: c.key, status: "retry_" + r.status, billed: false, usd: 0 });
      await new Promise((z) => setTimeout(z, 30000)); waited++;
    }
    j = await r.json().catch(() => ({}));
    const part = (j.candidates?.[0]?.content?.parts || []).find((x) => x.inlineData);
    const outTokens = j.usageMetadata?.candidatesTokenCount || 0;
    const billed = r.ok && (Boolean(part) || outTokens > 0);
    const row = { ts: new Date().toISOString(), batch, key: c.key, attempt: attemptsFor(c.key) + 1, status: !r.ok ? "http_" + r.status : part ? "ok" : "no_image:" + (j.candidates?.[0]?.finishReason || "?"), billed, usd: billed ? PRICE_PER_IMAGE : 0, tokens: outTokens };
    if (part) {
      const f = path.join(batchDir(batch), "orig", `${c.key}--${row.attempt}.png`);
      fs.mkdirSync(path.dirname(f), { recursive: true });
      fs.writeFileSync(f, Buffer.from(part.inlineData.data, "base64"));
      row.file = path.relative(STORE, f);
    }
    logLedger(row); batchRows.push(row); n++;
    console.log(row.status.padEnd(10), c.key, `$${spent(batchRows)}`);
    await new Promise((z) => setTimeout(z, 4000));                   // stay under the per-minute quota
  }
  console.log(JSON.stringify({ batch, requests: n, batchSpendUsd: spent(batchRows), totalSpendUsd: spent(ledger()) }));
}

/* ---------------- encode ---------------- */
async function encode() {
  const batch = opt("batch");
  const sharp = loadSharp();
  const q = readJson(path.join(batchDir(batch), "queue.json"));
  const review = readJson(path.join(batchDir(batch), "review.json"), {});
  let done = 0, bytes = 0;
  for (const c of q.items.filter((x) => x.status === "todo")) {
    const pick = latestOk(batch, c.key); if (!pick || review[c.key] === "reject" || review[c.key] === "text-only") continue;
    const outDir = c.public ? path.join(ROOT, "public/vocab-img") : path.join(STORE, "r2/vocab-img");
    fs.mkdirSync(outDir, { recursive: true });
    for (const w of WIDTHS) {
      const base = sharp(path.join(STORE, pick.file)).resize(w, (w * 3) / 4, { fit: "cover", position: "centre" });
      for (const f of FORMATS) {
        const p = path.join(outDir, `${c.key}-${w}.${f}`);
        await (f === "avif" ? base.clone().avif({ quality: w === 800 ? 52 : 56, effort: 6 }) : base.clone().webp({ quality: w === 800 ? 74 : 78, effort: 6 })).toFile(p);
        bytes += fs.statSync(p).size;
      }
    }
    done++;
  }
  console.log(JSON.stringify({ batch, encoded: done, kb: Math.round(bytes / 1024) }));
}
function latestOk(batch, key) { return ledger().filter((r) => r.batch === batch && r.key === key && r.status === "ok").pop(); }
function loadSharp() {
  const req = createRequire(import.meta.url);
  for (const p of [process.env.SHARP_PATH, "sharp"].filter(Boolean)) { try { return req(p); } catch {} }
  throw new Error("sharp not installed — set SHARP_PATH to a sharp install (dev tool only; not a site dependency)");
}

/* ---------------- sheets (QA contact sheets) ---------------- */
async function sheets() {
  const batch = opt("batch"); const sharp = loadSharp();
  const q = readJson(path.join(batchDir(batch), "queue.json"));
  const items = q.items.filter((c) => c.status === "todo").map((c) => ({ c, pick: latestOk(batch, c.key) })).filter((x) => x.pick);
  const W = 300, H = 225, cols = 4, per = 16;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  for (let s = 0; s * per < items.length; s++) {
    const page = items.slice(s * per, s * per + per);
    const rows = Math.ceil(page.length / cols);
    const tiles = await Promise.all(page.map(async ({ pick }, i) => ({ input: await sharp(path.join(STORE, pick.file)).resize(W, H, { fit: "cover" }).toBuffer(), left: (i % cols) * (W + 10), top: Math.floor(i / cols) * (H + 44) + 40 })));
    const labels = page.map(({ c }, i) => `<text x="${(i % cols) * (W + 10) + 4}" y="${Math.floor(i / cols) * (H + 44) + 18}" font-size="15" font-family="Helvetica" font-weight="bold">${esc((c.art ? c.art + " " : "") + c.de)}</text><text x="${(i % cols) * (W + 10) + 4}" y="${Math.floor(i / cols) * (H + 44) + 34}" font-size="12" font-family="Helvetica">${esc(c.en).slice(0, 44)}</text>`).join("");
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${cols * (W + 10)}" height="${rows * (H + 44) + 40}"><rect width="100%" height="100%" fill="#fff"/>${labels}</svg>`);
    const out = path.join(batchDir(batch), "sheets", `sheet-${String(s + 1).padStart(3, "0")}.png`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await sharp(svg).composite(tiles).png().toFile(out);
    console.log(out);
  }
}

/* ---------------- apply ---------------- */
function apply() {
  const batch = opt("batch");
  const q = readJson(path.join(batchDir(batch), "queue.json"));
  const review = readJson(path.join(batchDir(batch), "review.json"), {});
  const imgFor = new Map();
  const gated = new Set(readJson(GATED_LIST, []));
  const publicFiles = [];
  for (const c of q.items) {
    if (c.status === "reuse") { imgFor.set(c.key, c.img); continue; }
    if (c.status !== "todo" || review[c.key] === "reject" || review[c.key] === "text-only" || !latestOk(batch, c.key)) continue;
    const src = c.public ? "../public/vocab-img/" + c.key : "/api/media/vocab-img/" + c.key;
    const have = (f) => fs.existsSync(c.public ? path.join(ROOT, "public/vocab-img", f) : path.join(STORE, "r2/vocab-img", f));
    if (!WIDTHS.every((w) => FORMATS.every((f) => have(`${c.key}-${w}.${f}`)))) continue;   // not encoded yet
    imgFor.set(c.key, { src, formats: FORMATS, widths: WIDTHS, w: 4, h: 3, alt: c.alt });
    if (c.public) for (const w of WIDTHS) for (const f of FORMATS) publicFiles.push(`public/vocab-img/${c.key}-${w}.${f}`);
    else gated.add(c.key);
  }
  for (const c of q.items) if (c.status === "alias" && imgFor.has(c.sameAs)) imgFor.set(c.key, imgFor.get(c.sameAs));
  let added = 0, files = 0;
  for (const ch of loadChapters().filter((x) => q.chapters.includes(x.id))) {
    const updates = new Map();
    (ch.C.vocab || []).forEach((v, i) => { const img = imgFor.get(conceptKey(v)); if (img && !v.img) updates.set(i, img); });
    if (!updates.size) continue;
    const p = path.join(ROOT, "chapter", ch.file);
    const res = applyImages(fs.readFileSync(p, "utf8"), updates, { filename: ch.file });
    fs.writeFileSync(p, res.src); added += res.added; files++;
  }
  if (publicFiles.length) {
    const lines = fs.readFileSync(ALLOWLIST, "utf8").split("\n");
    const anchor = lines.findIndex((l) => /^public\/vocab-img\//.test(l));
    const have = new Set(lines);
    const add = publicFiles.filter((f) => !have.has(f));
    lines.splice(anchor < 0 ? lines.length : anchor, 0, ...add);
    fs.writeFileSync(ALLOWLIST, lines.join("\n"));
  }
  writeJson(GATED_LIST, [...gated].sort());
  console.log(JSON.stringify({ batch, chapterFiles: files, cardsIllustrated: added, publicFiles: publicFiles.length, gatedConcepts: gated.size }));
}

/* ---------------- status ---------------- */
function status() {
  const rows = ledger(); const batch = opt("batch");
  const sel = batch ? rows.filter((r) => r.batch === batch) : rows;
  const by = {}; for (const r of sel) by[r.status] = (by[r.status] || 0) + 1;
  console.log(JSON.stringify({ store: STORE, requests: sel.length, byStatus: by, billed: sel.filter((r) => r.billed).length, usd: spent(sel) }));
}

const run = { plan, generate, encode, sheets, apply, status }[cmd];
if (!run) { console.error("usage: pipeline.mjs plan|generate|encode|sheets|apply|status --batch NAME"); process.exit(2); }
await run();
