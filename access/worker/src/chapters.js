/* chapters.js — protected delivery of paid chapter content.

   A chapter page loads its payload with a classic, synchronous
     <script src="<this Worker>/chapters/<chapter-id>.js">
   so window.CHAPTER is set before chapter-app.js runs, exactly as the old
   static chapter-*-data.js did. The payloads live in the PRIVATE R2 bucket
   (binding env.RESOURCES, the same bucket as resources.js) under an
   immutable release prefix chosen by one Worker var:

     chapters/<CHAPTER_RELEASE>/index.json       { chapters: { <id>: { title } } }
     chapters/<CHAPTER_RELEASE>/<chapter-id>.js  the chapter-*-data.js file, byte for byte

   built by `scripts/chapter-lock.mjs release`.

   Access = the chapter is free (Chapter 1 of every level) or the signed-in
   user holds the level entitlement (resources.js canAccessChapterResources,
   which honours expiry and Lifetime). Anyone else gets a stub that carries
   only the public id and title plus the reason:
     window.CHAPTER = { id, title, kwLocked: "signed_out" | "not_entitled" | "unavailable" }
   and kw-access.js guardChapterPage() renders the locked screen from it.
   A stub is a 200, because a script answered with an error status never
   runs and the page would be left with no window.CHAPTER at all.

   A <script> request carries the session cookie but no Origin, and any site
   can embed it. A Referer from a foreign site is refused; a missing one is
   allowed, because privacy tools strip it and the payload is course content
   only, never account data. Every answer is no-store: entitlement changes
   with a purchase or an expiry. */
import { getSessionToken, findSessionUser } from "./sessions.js";
import { parseChapterId } from "./ai.js";
import { isFreeChapter, canAccessChapterResources } from "./resources.js";
import { isAllowedOrigin } from "./cors.js";

export const CHAPTER_ROUTE = /^\/chapters\/([a-z0-9-]{4,80})\.js$/;
const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}-[a-z0-9-]{1,72}$/;
const RELEASE = /^r[0-9]{1,4}$/;

const HEADERS = {
  "content-type": "text/javascript; charset=utf-8",
  "cache-control": "private, no-store",
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer"
};

function configured(env) {
  return !!(env.RESOURCES && typeof env.RESOURCES.get === "function" && RELEASE.test(String(env.CHAPTER_RELEASE || "")));
}
const prefix = (env) => `chapters/${env.CHAPTER_RELEASE}/`;

/* The index is immutable per release, so one copy per isolate is enough.
   A failed read is never cached. */
let indexCache = { release: null, index: null };
async function readIndex(env) {
  if (indexCache.release === env.CHAPTER_RELEASE) return indexCache.index;
  const obj = await env.RESOURCES.get(prefix(env) + "index.json");
  if (!obj) return null;
  const data = await obj.json();
  const index = data && typeof data.chapters === "object" && data.chapters ? data.chapters : null;
  if (index) indexCache = { release: env.CHAPTER_RELEASE, index };
  return index;
}

// "<", U+2028 and U+2029 escaped so the literal is inert in any JS context.
const literal = (v) => JSON.stringify(v).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

/* The fields every chapter has, EMPTY. The chapter runtime reads some of them
   while it loads, before guardChapterPage() runs (chapter-app.js:
   C.sections.filter, C.xp), so a stub without them would crash the page
   instead of showing the locked screen. Empty values only: no content. */
const EMPTY_CHAPTER = Object.freeze({
  sections: [], resources: [], outcomes: [], vocab: [], grammar: [], speaking: [], quiz: [],
  takeaways: [], revisionTips: [], parserSentence: [],
  reading: {}, listening: {}, writing: {}, exercises: {}, overviewIntro: {}, quizRecommendation: {},
  story: null, nextChapter: null, prevChapter: null, xp: 0, time: 0
});

function stub(chapterId, title, reason) {
  const meta = { ...EMPTY_CHAPTER, id: chapterId, number: parseChapterId(chapterId).number, kwLocked: reason };
  if (typeof title === "string" && title) meta.title = title;
  return new Response(`window.CHAPTER = ${literal(meta)};\n`, { status: 200, headers: HEADERS });
}

function foreignReferer(request) {
  const ref = request.headers.get("Referer");
  if (!ref) return false;
  let origin = null;
  try { origin = new URL(ref).origin; } catch {}
  return !isAllowedOrigin(origin);
}

// GET /chapters/<chapter-id>.js
export async function chapterScript(request, env, chapterId) {
  if (!CHAPTER_ID.test(chapterId) || !parseChapterId(chapterId)) {
    return new Response("/* unknown chapter */\n", { status: 404, headers: HEADERS });
  }
  if (!configured(env)) return stub(chapterId, null, "unavailable");

  let index;
  try {
    index = await readIndex(env);
  } catch {
    index = null;
  }
  if (!index) {
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "chapter_index_missing", release: env.CHAPTER_RELEASE }));
    return stub(chapterId, null, "unavailable");
  }
  const entry = Object.prototype.hasOwnProperty.call(index, chapterId) ? index[chapterId] : null;
  if (!entry) return new Response("/* unknown chapter */\n", { status: 404, headers: HEADERS });
  const title = typeof entry.title === "string" ? entry.title : null;

  if (foreignReferer(request)) return stub(chapterId, title, "unavailable");

  if (!isFreeChapter(parseChapterId(chapterId))) {
    const user = await findSessionUser(env.DB, getSessionToken(request));
    if (!user) return stub(chapterId, title, "signed_out");
    if (!(await canAccessChapterResources(env, user.id, chapterId))) return stub(chapterId, title, "not_entitled");
  }

  const obj = await env.RESOURCES.get(prefix(env) + chapterId + ".js");
  if (!obj) {
    console.log(JSON.stringify({ svc: "klarweg-access", evt: "chapter_object_missing", release: env.CHAPTER_RELEASE }));
    return stub(chapterId, title, "unavailable");
  }
  return new Response(obj.body, { status: 200, headers: { ...HEADERS, "content-length": String(obj.size) } });
}
