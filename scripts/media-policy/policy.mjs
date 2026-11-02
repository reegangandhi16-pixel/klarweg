/* Media access policy: pure helpers shared by the builder, the validator and
 * the tests. A policy decides, for one object key in the private R2 bucket
 * `klarweg-audio`, who may receive it:
 *
 *   free         anyone (audio reachable from a confirmed free page)
 *   manifest     a full lookup list; replaced by split lists in Stage 2
 *   deny-listed  an unreferenced object under a paid prefix: never served
 *   chapter      a paid lesson clip: needs access to that chapter
 *   word         paid word / form / conjugation audio: any active purchase
 *   deny         everything else (default)
 *
 * Evaluation order is fixed: free → manifest → deny-listed → chapter → word → deny.
 */

export const AUDIO_ORIGIN = 'https://klarweg-audio.klarweg-issue-reports-2026.workers.dev/';

/* Paid lesson clips: <kind>/<LEVEL>_<NNN>_<LINE>[_vN].mp3, e.g. story/A1_017_S003.mp3 */
export const CHAPTER_KEY = /^(story|listening|reading|speaking)\/([ABC][12])_(\d{3})_[A-Z]+\d+(?:_v\d+)?\.mp3$/;

/* Word-level audio prefixes (word lists, word forms, conjugations). */
export const WORD_PREFIXES = [
  'words/female/', 'words/male/',
  'vocab/audio/female/', 'vocab/audio/male/',
  'vocab/public/audio/forms/', 'vocab/audio/conjugation/',
];

/* Manifest paths → R2 keys. Each manifest family stores paths differently. */
export function sentenceRelToKey(rel) {
  if (typeof rel !== 'string' || !rel) return null;
  return rel.replace(/^\/+/, '').replace(/^audio\//, '');
}
/* vocab/manifest.json, as the player's resolveVocabUrl(): a root-relative
   "/audio/x" resolves against the vocab base ("vocab/x"); anything else is
   appended to it. */
export function vocabRelToKey(rel) {
  if (typeof rel !== 'string' || !rel) return null;
  if (rel.charAt(0) === '/') return 'vocab/' + rel.replace(/^\/audio\//, '').replace(/^\/+/, '');
  return 'vocab/' + rel;
}
/* manifest-word-form.json and manifest-conjugation.json, as wordFormUrl() /
   conjugationUrl(): leading slashes dropped, appended to the vocab base. */
export function formRelToKey(rel) {
  if (typeof rel !== 'string' || !rel) return null;
  return 'vocab/' + rel.replace(/^\/+/, '');
}
export function wordsRelToKey(rel) {             // a1/a2/b1-words-manifest.json ("/audio/words/…")
  if (typeof rel !== 'string' || !rel) return null;
  return rel.replace(/^\/+/, '').replace(/^audio\//, '');
}
export function urlToKey(url) {
  if (typeof url !== 'string' || url.indexOf(AUDIO_ORIGIN) !== 0) return null;
  return decodeURIComponent(url.slice(AUDIO_ORIGIN.length).split(/[?#]/)[0]);
}

/* "a1-17-goethe2" → { level: 'A1', number: 17 } */
export function parseChapterId(id) {
  const m = /^([abc][12])-0*(\d+)-/.exec(String(id || ''));
  return m ? { level: m[1].toUpperCase(), number: Number(m[2]) } : null;
}
export function chapterPrefixOfKey(key) {
  const m = CHAPTER_KEY.exec(key);
  return m ? { prefix: m[2] + '_' + m[3], level: m[2], number: Number(m[3]) } : null;
}

/* policy = { free: [...keys], manifests: [...keys], denyListed: [...keys],
 *            chapters: { "A1_017": "a1-17-goethe2", ... }, freeChapters: [...ids] } */
export function compile(policy) {
  return {
    free: new Set(policy.free),
    manifests: new Set(policy.manifests),
    denyListed: new Set(policy.denyListed),
    chapters: policy.chapters,
    freeChapters: new Set(policy.freeChapters),
  };
}
export function evaluate(compiled, key) {
  if (compiled.free.has(key)) return { cls: 'free' };
  if (compiled.manifests.has(key)) return { cls: 'manifest' };
  if (compiled.denyListed.has(key)) return { cls: 'deny', reason: 'unreferenced' };
  const c = chapterPrefixOfKey(key);
  if (c) {
    const chapterId = compiled.chapters[c.prefix];
    if (!chapterId) return { cls: 'deny', reason: 'unknown-chapter' };
    if (compiled.freeChapters.has(chapterId)) return { cls: 'deny', reason: 'free-chapter-file-not-on-free-list' };
    return { cls: 'chapter', chapterId, level: c.level };
  }
  if (WORD_PREFIXES.some((p) => key.startsWith(p))) return { cls: 'word' };
  return { cls: 'deny', reason: 'default' };
}
