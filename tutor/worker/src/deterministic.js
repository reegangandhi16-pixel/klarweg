/* ============================================================
   klarweg-tutor · DETERMINISTIC CHECKS
   ------------------------------------------------------------
   Everything that can be decided without a model is decided here,
   first. A correct answer never costs an AI call, and the hint
   ladder still works (rule pointer → focus on the differing word
   → authored answer) when the AI is disabled or failing.

   The same normalisation is mirrored in chapter-app.js
   (kwNormAnswer) so the browser's instant check and the server
   agree.
   ============================================================ */

export function normalizeAnswer(s) {
  return String(s == null ? '' : s)
    .normalize('NFC')
    .replace(/[„“”«»‚‘’]/g, '"')
    .replace(/[‐‑–—]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim();
}

/* Authored answers may be a string or an ordered array (rendered
   as "a → b → c"). The learner may type either the arrow form or a
   comma-separated list. */
export function answerVariants(answer) {
  if (Array.isArray(answer)) {
    return [answer.join(' → '), answer.join(', '), answer.join(' ')].map(normalizeAnswer);
  }
  return [normalizeAnswer(answer)];
}

export function isExactMatch(input, answer) {
  const got = normalizeAnswer(input);
  if (!got) return false;
  return answerVariants(answer).includes(got);
}

/* Case-only difference ("ich sehe den mann" vs "Ich sehe den Mann").
   German capitalisation is meaningful, so this is NOT accepted — it
   is reported so the hint can say exactly what is wrong. */
export function isCaseOnlyDifference(input, answer) {
  const got = normalizeAnswer(input).toLowerCase();
  return !!got && answerVariants(answer).some((a) => a.toLowerCase() === got) && !isExactMatch(input, answer);
}

export function gapIsCorrect(value, gap) {
  const v = String(value == null ? '' : value).trim().toLowerCase();
  return [gap.answer].concat(gap.accepts || []).map((s) => String(s).trim().toLowerCase()).includes(v);
}

const tokens = (s) => normalizeAnswer(s).split(' ').filter(Boolean);

/* First differing region between the learner's answer and the key,
   expressed in the LEARNER's words — hint 2 points at it without
   revealing the correct form. */
export function firstDifference(input, answer) {
  const a = tokens(input);
  const b = tokens(Array.isArray(answer) ? answer.join(' ') : answer);
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  let ja = a.length - 1, jb = b.length - 1;
  while (ja >= i && jb >= i && a[ja] === b[jb]) { ja--; jb--; }
  if (i >= a.length) return { fragment: '', position: 'end', missing: true };
  return { fragment: a.slice(i, Math.max(i + 1, ja + 1)).slice(0, 4).join(' '), position: i === 0 ? 'start' : 'middle', missing: false };
}

/* Token-overlap ratio used to sanity-check an "acceptable variant"
   verdict: a model may accept a reordering, never a different sentence. */
export function overlapRatio(input, answer) {
  const a = new Set(tokens(input).map((t) => t.toLowerCase()));
  const b = new Set(tokens(Array.isArray(answer) ? answer.join(' ') : answer).map((t) => t.toLowerCase()));
  if (!a.size || !b.size) return 0;
  let inter = 0;
  a.forEach((t) => { if (b.has(t)) inter++; });
  return inter / Math.max(a.size, b.size);
}

/* Does the text contain the answer (so an explanation would give it
   away before the learner has earned it)? */
export function revealsAnswer(text, answer) {
  const t = normalizeAnswer(text).toLowerCase();
  return answerVariants(answer).some((a) => a.length > 3 && t.includes(a.toLowerCase()));
}

/* Is `fragment` really present in the learner's text? Corrections that
   quote words the learner never wrote are dropped as hallucinations. */
export function occursIn(fragment, text) {
  const f = normalizeAnswer(fragment).toLowerCase().replace(/["]/g, '');
  const t = normalizeAnswer(text).toLowerCase().replace(/["]/g, '');
  return f.length > 0 && t.includes(f);
}

export function countWords(text) {
  const t = String(text || '').trim();
  return t ? t.split(/\s+/).length : 0;
}
