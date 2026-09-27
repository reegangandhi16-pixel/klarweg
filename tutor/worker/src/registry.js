/* ============================================================
   klarweg-tutor · CONTENT REGISTRY ACCESS
   ------------------------------------------------------------
   Resolves the IDs a browser sends ({chapterId, sectionId,
   itemId}) into authoritative authored content. The browser never
   sends prompts, answer keys or lesson text — the server looks
   them up here.

   Item IDs:
     writing                 the chapter writing task
     speaking.<i>            a speaking card
     ex.gap                  the gap-fill
     ex.errorCorrection      the authored error-correction item
     ex.ecs.<i>              a checkpoint error-correction sentence
     ex.<promptKey>          an authored transform/prompt exercise
     grammar.<i>             a grammar card
     quiz                    the chapter quiz (post-submission review)
   ============================================================ */
import { LOADERS } from './registry/generated/index.js';

const CHAPTER_ID = /^(a1|a2|b1|b2|c1|c2)-[0-9]{1,2}[a-z0-9-]*$/;

export function isChapterId(id) {
  return typeof id === 'string' && id.length <= 80 && CHAPTER_ID.test(id);
}

const cache = new Map();

export async function getChapter(chapterId) {
  if (!isChapterId(chapterId)) return null;
  const load = LOADERS[chapterId];
  if (!load) return null;
  if (!cache.has(chapterId)) cache.set(chapterId, (await load()).default);
  return cache.get(chapterId);
}

const SECTION_FOR = {
  writing: 'writing',
  speaking: 'speaking',
  ex: 'exercises',
  grammar: 'grammar',
  quiz: 'quiz',
};

/**
 * Resolve an item inside a chapter. Returns null when the id does not
 * name real authored content, or when sectionId disagrees with it.
 */
export function resolveItem(C, sectionId, itemId) {
  if (typeof itemId !== 'string' || itemId.length > 60) return null;
  const parts = itemId.split('.');
  const kind = parts[0];
  if (SECTION_FOR[kind] !== sectionId) return null;

  switch (kind) {
    case 'writing':
      return parts.length === 1 && C.writing ? { kind: 'writing', item: C.writing } : null;
    case 'quiz':
      return parts.length === 1 && C.quiz.length ? { kind: 'quiz', item: C.quiz } : null;
    case 'speaking': {
      const i = Number(parts[1]);
      return parts.length === 2 && Number.isInteger(i) && C.speaking[i] ? { kind: 'speaking', item: C.speaking[i] } : null;
    }
    case 'grammar': {
      const i = Number(parts[1]);
      return parts.length === 2 && Number.isInteger(i) && C.grammar[i] ? { kind: 'grammar', item: C.grammar[i] } : null;
    }
    case 'ex': {
      const E = C.exercises || {};
      if (parts.length === 3 && parts[1] === 'ecs') {
        const i = Number(parts[2]);
        const it = Array.isArray(E.ecs) && Number.isInteger(i) ? E.ecs[i] : null;
        return it ? { kind: 'correction', key: itemId, item: { prompt: it.wrong, answer: it.right, explain: it.ref ? `Topic: ${it.ref}` : '', task: 'Correct the sentence.' } } : null;
      }
      if (parts.length !== 2) return null;
      const key = parts[1];
      if (key === 'errorCorrection' && E.errorCorrection) {
        const it = E.errorCorrection;
        return { kind: 'correction', key: itemId, item: { prompt: it.wrong, answer: it.right, accepts: it.accepts || [], explain: it.explain, task: it.title || 'Correct the sentence.' } };
      }
      if (key === 'gap' && E.gap) {
        return { kind: 'gap', key: itemId, item: E.gap };
      }
      if (key !== 'mcq' && key !== 'builder' && key !== 'ecs' && E[key] && E[key].prompt) {
        const it = E[key];
        return { kind: 'transform', key: itemId, item: { prompt: it.prompt, answer: it.answer, accepts: it.accepts || [], explain: it.explain, task: it.title || 'Transform the sentence.' } };
      }
      return null;
    }
    default:
      return null;
  }
}

/* Human-readable titles for "recent mistakes" context — resolved
   server-side from item ids, never taken from the client as text. */
export function describeItem(C, itemId) {
  const [kind, a] = String(itemId).split('.');
  if (kind === 'grammar' && C.grammar[Number(a)]) return `Grammar: ${C.grammar[Number(a)].title}`;
  if (kind === 'ex') return `Exercise: ${a}`;
  if (kind === 'speaking') return 'Speaking task';
  if (kind === 'writing') return 'Writing task';
  return null;
}
