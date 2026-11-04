#!/usr/bin/env node
/* post-deploy-chapter-check.mjs — READ-ONLY live checks of the access
   Worker's chapter route and API baseline. Sends only anonymous requests
   (plus one deliberately forged cookie); never a real session.

   node scripts/post-deploy-chapter-check.mjs [--base https://klarweg.in/api]

   Exit 1 if any check fails → roll back:
     npx wrangler versions deploy <previous version>@100% --yes            */
import crypto from "node:crypto";
import vm from "node:vm";

const i = process.argv.indexOf("--base");
const API = i === -1 ? "https://klarweg.in/api" : process.argv[i + 1];
const SITE = "https://klarweg.in";
const PAID = "a1-17-goethe2";
const FREE = "a1-1-alphabet";
const FREE_SHA = "b8b93b200604678976fbc5e4fae6d4e1ced41f1317bb9e6296dee59ecd8dd2dd"; // = chapter/chapter-a1-1-data.js = r1 = r3 object
const FREE_BYTES = 56411;
const CONTENT_KEYS = ["sections", "resources", "outcomes", "vocab", "grammar", "speaking", "quiz", "takeaways", "revisionTips", "parserSentence"];
const results = [];

async function get(path, headers = {}) {
  const res = await fetch(API + path, { headers: { "cache-control": "no-cache", ...headers }, redirect: "manual" });
  const buf = Buffer.from(await res.arrayBuffer());
  return { status: res.status, type: res.headers.get("content-type") || "", cache: res.headers.get("cache-control") || "", buf, text: buf.toString("utf8"), sha: crypto.createHash("sha256").update(buf).digest("hex") };
}
function check(name, expected, observed, pass) {
  results.push({ name, expected, observed, pass });
}
function stubFacts(r) {
  const sb = { window: {} };
  try { vm.runInNewContext(r.text, sb, { timeout: 1000 }); } catch (e) { return { error: String(e) }; }
  const C = sb.window.CHAPTER || {};
  const nonEmpty = CONTENT_KEYS.filter((k) => Array.isArray(C[k]) && C[k].length);
  const objs = ["reading", "listening", "writing", "exercises", "overviewIntro", "quizRecommendation"].filter((k) => C[k] && Object.keys(C[k]).length);
  return { kwLocked: C.kwLocked, id: C.id, title: C.title, nonEmpty: [...nonEmpty, ...objs, ...(C.story ? ["story"] : [])], audio: "KW_CHAPTER_AUDIO" in sb.window };
}
function stubCheck(name, r, reason) {
  const f = stubFacts(r);
  const ok = r.status === 200 && r.type.startsWith("text/javascript") && r.cache.includes("no-store") && r.buf.length < 700 && f.kwLocked === reason && f.id === PAID && f.nonEmpty.length === 0 && !f.audio;
  check(name, `200 text/javascript no-store, <700 B, kwLocked=${reason}, id=${PAID}, no lesson fields, no KW_CHAPTER_AUDIO`,
    `${r.status} ${r.type.split(";")[0]} ${r.cache}, ${r.buf.length} B, kwLocked=${f.kwLocked}, id=${f.id}, lesson fields=${f.nonEmpty.join(",") || "none"}, audio=${f.audio}, sha256=${r.sha.slice(0, 12)}…`, ok);
}

const ref = { referer: `${SITE}/chapter/chapter-${PAID}.html` };
stubCheck("1 signed-out paid chapter", await get(`/chapters/${PAID}.js`, ref), "signed_out");
stubCheck("1b signed-out paid chapter, no Referer", await get(`/chapters/${PAID}.js`), "signed_out");

const free = await get(`/chapters/${FREE}.js`, { referer: `${SITE}/chapter/chapter-${FREE}.html` });
check("2 free A1·1 byte-identical", `200, ${FREE_BYTES} B, sha256 ${FREE_SHA.slice(0, 12)}…, no KW_CHAPTER_AUDIO`,
  `${free.status}, ${free.buf.length} B, sha256 ${free.sha.slice(0, 12)}…, audio=${free.text.includes("KW_CHAPTER_AUDIO")}`,
  free.status === 200 && free.buf.length === FREE_BYTES && free.sha === FREE_SHA && !free.text.includes("KW_CHAPTER_AUDIO"));

stubCheck("5a forged session cookie", await get(`/chapters/${PAID}.js`, { ...ref, cookie: "kw_session=forged-" + crypto.randomBytes(16).toString("hex") }), "signed_out");
stubCheck("5b foreign Referer", await get(`/chapters/${PAID}.js`, { referer: "https://evil.example/page.html" }), "unavailable");
const unknown = await get(`/chapters/a1-2-does-not-exist.js`, ref);
check("5c unknown chapter id", "404, no content", `${unknown.status}, ${unknown.buf.length} B: ${unknown.text.trim().slice(0, 40)}`, unknown.status === 404 && unknown.buf.length < 100);
const malformed = await get(`/chapters/zz-1-nope.js`, ref);
check("5d malformed chapter id", "404, no content", `${malformed.status}, ${malformed.buf.length} B: ${malformed.text.trim().slice(0, 40)}`, malformed.status === 404 && malformed.buf.length < 100);

const me = await get("/auth/me");
check("6a /api/auth/me", '401 {"ok":false,"authenticated":false}', `${me.status} ${me.text.trim()}`, me.status === 401 && me.text.trim() === '{"ok":false,"authenticated":false}');
const nf = await get("/does-not-exist");
check("6b /api/does-not-exist", '404 {"ok":false,"error":"Not found"}', `${nf.status} ${nf.text.trim()}`, nf.status === 404 && nf.text.trim() === '{"ok":false,"error":"Not found"}');
const pr = await get("/progress");
check("6c /api/progress", '401 {"ok":false,"error":"auth_required"}', `${pr.status} ${pr.text.trim()}`, pr.status === 401 && pr.text.trim() === '{"ok":false,"error":"auth_required"}');

for (const r of results) console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}\n      expected: ${r.expected}\n      observed: ${r.observed}`);
const failed = results.filter((r) => !r.pass).length;
console.log(`\n${results.length - failed}/${results.length} passed against ${API}`);
process.exit(failed ? 1 : 0);
