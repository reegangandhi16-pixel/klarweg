/* One spend ledger for the whole Visual Vocabulary project.
   $VOCAB_IMG_STORE/ledger.jsonl — append-only, one row per paid request or
   batch job. Every module checks the HARD CAP before spending.

   Accounting is deliberately pessimistic: images count at the STANDARD price
   even when a batch job is billed at half (list $0.039 vs $0.0195), and a
   submitted batch job reserves its full worst-case cost until it is
   reconciled. So the cap cannot be crossed even if the discount does not
   apply. Actual list-price spend is recorded alongside (usdList). */
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./lib.mjs";

export const STORE = process.env.VOCAB_IMG_STORE || path.resolve(ROOT, "../vocab-img-store");
export const LEDGER = path.join(STORE, "ledger.jsonl");
export const HARD_CAP_USD = 385;
export const IMAGE_USD_WORST = 0.039;        // standard price, gemini-2.5-flash-image (checked 2026-11-11)
export const IMAGE_USD_BATCH = 0.0195;       // batch list price
export const TEXT_PRICES = {                  // per 1M tokens, standard (checked 2026-11-11)
  "gemini-2.5-flash": { in: 0.30, out: 2.50 },
  "gemini-2.5-flash-lite": { in: 0.10, out: 0.40 },
  "gemini-3.5-flash-lite": { in: 0.30, out: 2.50 },   // checked 2026-11-11 (2.5 text models not enabled on this project)
  "gemini-3.1-flash-lite": { in: 0.25, out: 1.50 },
  "gemini-3.8-flash": { in: 0.75, out: 3.75 },        // through 2026-12-31 (then 1.50 / 7.50)
};

export function rows() {
  return fs.existsSync(LEDGER) ? fs.readFileSync(LEDGER, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : [];
}
export function log(row) {
  fs.mkdirSync(STORE, { recursive: true });
  fs.appendFileSync(LEDGER, JSON.stringify({ ts: new Date().toISOString(), ...row }) + "\n");
}
/* Committed = worst-case spend of everything billed + every open reservation. */
export function committedUsd(all = rows()) {
  let usd = 0;
  const open = new Map();
  for (const r of all) {
    if (r.reserveUsd && r.job) open.set(r.job, r.reserveUsd);
    if (r.releaseJob) open.delete(r.releaseJob);
    usd += r.usd || 0;                        // usd = worst-case accounted amount
  }
  for (const v of open.values()) usd += v;
  return +usd.toFixed(4);
}
export function listUsd(all = rows()) { return +all.reduce((a, r) => a + (r.usdList ?? r.usd ?? 0), 0).toFixed(4); }
export function assertCanSpend(usd, what) {
  const c = committedUsd();
  if (c + usd > HARD_CAP_USD) throw new Error(`HARD CAP: ${what} would take committed spend to $${(c + usd).toFixed(2)} > $${HARD_CAP_USD}`);
  return c;
}
export function textUsd(model, usage) {
  const p = TEXT_PRICES[model]; if (!p || !usage) return 0;
  const out = (usage.candidatesTokenCount || 0) + (usage.thoughtsTokenCount || 0);
  return ((usage.promptTokenCount || 0) * p.in + out * p.out) / 1e6;
}
