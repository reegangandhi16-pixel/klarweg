#!/usr/bin/env node
/* chapter-release-verify.mjs — READ-ONLY check that an uploaded chapter
   release in the private R2 bucket is byte-identical to the local build.

   node scripts/chapter-release-verify.mjs --release r3 [--out DIR] [--only id,id]

   Rebuilds the release locally (scripts/chapter-lock.mjs buildRelease), then
   downloads every object with `wrangler r2 object get --remote --pipe` and
   compares SHA-256. Exit 1 on any missing or different object. Never writes
   to R2. Run it after `chapter-lock.mjs release --upload` and BEFORE the
   Worker's CHAPTER_RELEASE points at the release. */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { buildRelease } from "./chapter-lock.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (n) => { const i = process.argv.indexOf(n); return i === -1 ? null : process.argv[i + 1]; };
const release = arg("--release") || "";
const only = arg("--only") ? new Set(arg("--only").split(",").map((s) => s.trim() + ".js")) : null;
const out = path.resolve(arg("--out") || fs.mkdtempSync(path.join(os.tmpdir(), "kw-verify-")));
const built = buildRelease({ release, out });
const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
let ok = 0;
const bad = [];
for (const f of built.files) {
  if (only && !only.has(f)) continue;
  const local = fs.readFileSync(path.join(built.dir, f));
  let remote;
  try {
    remote = execFileSync("npx", ["wrangler", "r2", "object", "get", `klarweg-resources/chapters/${release}/${f}`, "--remote", "--pipe"], {
      cwd: path.join(ROOT, "access", "worker"), stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64 * 1024 * 1024,
    });
  } catch {
    bad.push(`${f}: MISSING in R2`);
    continue;
  }
  if (sha(remote) === sha(local)) ok++;
  else bad.push(`${f}: DIFFERENT (R2 ${remote.length} B, local ${local.length} B)`);
  process.stdout.write(".");
}
process.stdout.write("\n");
for (const b of bad) console.error("✖ " + b);
console.log(`${ok} identical, ${bad.length} problem(s) in chapters/${release}/`);
process.exit(bad.length ? 1 : 0);
