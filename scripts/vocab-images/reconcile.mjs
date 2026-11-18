#!/usr/bin/env node
/* Reconcile the Visual Vocabulary spend ledger with the generation state.
     node scripts/vocab-images/reconcile.mjs [--jobs]   (--jobs also asks Vertex for live job states)
   Reports: spend (worst-case committed vs list/actual), open reservations,
   per-concept overlap (a concept in two open jobs, or generated while one of
   its jobs was open, or billed twice without a QA rejection in between),
   observed throughput per path (last 60 min and since start) and 429 rate. */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { rows, committedUsd, listUsd, HARD_CAP_USD, STORE } from "./budget.mjs";

const all = rows();
const gen = all.filter((r) => r.batch === "gen");
const qa = fs.existsSync(path.join(STORE, "qa.jsonl")) ? fs.readFileSync(path.join(STORE, "qa.jsonl"), "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : [];
const qaBy = new Map(qa.map((q) => [q.key + "#" + q.attempt, q]));

// jobs
const jobs = new Map();
for (const r of gen) {
  if (r.job && r.reserveUsd) jobs.set(r.job, { job: r.job, ts: r.ts, n: r.n, reserve: r.reserveUsd, keys: r.keys || [], closed: null });
  if (r.releaseJob && jobs.has(r.releaseJob)) jobs.get(r.releaseJob).closed = r;
}
const open = [...jobs.values()].filter((j) => !j.closed);

// overlap checks
const issues = [];
const openKeyCount = new Map();
for (const j of open) for (const k of j.keys) { const c = k.split("#")[0]; openKeyCount.set(c, (openKeyCount.get(c) || 0) + 1); }
for (const [c, n] of openKeyCount) if (n > 1) issues.push(`in ${n} open jobs: ${c}`);
const openKeys = new Set(openKeyCount.keys());
const interactiveOpen = new Map();   // key → submitted without a result yet
for (const r of gen) {
  if (r.interactive && r.submitted) for (const k of r.keys) interactiveOpen.set(k, r);
  if (r.interactive && r.key && !r.submitted) interactiveOpen.delete(r.key + "#" + r.attempt);
}
for (const k of interactiveOpen.keys()) if (openKeys.has(k.split("#")[0])) issues.push(`interactive request while in an open batch job: ${k}`);
const billedBy = new Map();
for (const r of gen) if (r.key && r.billed) (billedBy.get(r.key) || billedBy.set(r.key, []).get(r.key)).push(r);
for (const [k, list] of billedBy) {
  for (let i = 1; i < list.length; i++) {
    const prev = qaBy.get(k + "#" + list[i - 1].attempt);
    if (list[i - 1].status === "ok" && !(prev && !prev.pass)) issues.push(`billed again without a QA rejection: ${k} attempts ${list[i - 1].attempt}→${list[i].attempt}`);
  }
  if (new Set(list.map((r) => r.attempt)).size !== list.length) issues.push(`same attempt billed twice: ${k}`);
}

// throughput
const now = Date.now();
const okRows = gen.filter((r) => r.status === "ok");
const rate = (filter, mins) => { const since = now - mins * 60e3; const n = okRows.filter((r) => filter(r) && Date.parse(r.ts) >= since).length; return { n, perMin: +(n / mins).toFixed(2) }; };
const isInt = (r) => !!r.interactive, isBatch = (r) => !r.interactive;
const r429 = (mins) => { const since = now - mins * 60e3; return gen.filter((r) => r.interactive && /429/.test(r.status || "") && Date.parse(r.ts) >= since).length; };
const firstBulk = gen.find((r) => r.job && r.n >= 200);
const bulkMins = firstBulk ? (now - Date.parse(firstBulk.ts)) / 60e3 : 0;

const summary = {
  at: new Date().toISOString(),
  spend: { committedWorstCaseUsd: committedUsd(all), listUsd: listUsd(all), capUsd: HARD_CAP_USD, headroomUsd: +(HARD_CAP_USD - committedUsd(all)).toFixed(2),
    byKind: Object.fromEntries(Object.entries(all.reduce((a, r) => { const k = r.batch === "gen" ? (r.interactive ? "gen-interactive" : "gen-batch") : r.batch; a[k] = (a[k] || 0) + (r.usdList ?? r.usd ?? 0); return a; }, {})).map(([k, v]) => [k, +v.toFixed(4)])) },
  jobs: { total: jobs.size, open: open.length, openImages: open.reduce((a, j) => a + j.n, 0), openReservedUsd: +open.reduce((a, j) => a + j.reserve, 0).toFixed(3),
    closed: [...jobs.values()].filter((j) => j.closed).map((j) => ({ id: j.job.slice(-8), state: j.closed.state, ok: j.closed.ok, failed: j.closed.failed, missing: j.closed.missing })) },
  interactive: { requestsInFlight: interactiveOpen.size, results: gen.filter((r) => r.interactive && r.key && !r.submitted).reduce((a, r) => { const s = r.status.split(":")[0] + (r.status.includes("429") ? ":429" : ""); a[s] = (a[s] || 0) + 1; return a; }, {}) },
  images: { ok: okRows.length, okBatch: okRows.filter(isBatch).length, okInteractive: okRows.filter(isInt).length, qaPass: qa.filter((q) => q.pass).length, qaFail: qa.filter((q) => !q.pass).length },
  throughput: { batchLast60: rate(isBatch, 60), interactiveLast60: rate(isInt, 60), batchSinceBulkStart: { minutes: Math.round(bulkMins), n: okRows.filter((r) => isBatch(r) && firstBulk && Date.parse(r.ts) >= Date.parse(firstBulk.ts)).length }, interactive429Last60: r429(60) },
  overlapIssues: issues.length, issues: issues.slice(0, 20),
};
if (process.argv.includes("--jobs")) {
  const tok = execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim();
  summary.live = [];
  for (const j of open) {
    const r = await fetch(`https://us-central1-aiplatform.googleapis.com/v1/${j.job}`, { headers: { Authorization: "Bearer " + tok, "x-goog-user-project": "klarweg-512108" } }).then((x) => x.json());
    summary.live.push({ id: j.job.slice(-8), n: j.n, state: (r.state || "").replace("JOB_STATE_", ""), done: Number(r.completionStats?.successfulCount || 0), failed: Number(r.completionStats?.failedCount || 0), started: r.startTime });
  }
  summary.liveDone = summary.live.reduce((a, x) => a + x.done, 0);
}
console.log(JSON.stringify(summary, null, 1));
