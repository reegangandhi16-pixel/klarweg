/* Word count — identical to exam-content/schemas/content-model.mjs countWords
   and exam-worker/src/wordcount.js (a test enforces this). Advisory only:
   the server recounts on every save. */
export function countWords(text) {
  if (typeof text !== 'string' || !text.trim()) return 0;
  return text.trim().split(/\s+/u).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
}
