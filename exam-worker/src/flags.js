/* Feature flags — every one defaults OFF. Only the exact string "on" enables.
     EXAM_ENABLED            the exam Worker answers at all (else 503 exam_disabled)
     EXAM_SYNTHETIC_FORMS    synthetic engine-test forms may be assigned
     EXAM_MOCK_FORMS         Mock M0 forms may be assigned           (no content yet)
     EXAM_PRODUCTION_FORMS   production simulation sets may be assigned (no content yet)
     EXAM_MODULE_ONLY        unset (default): full attempts only, single-module attempts refused.
                             A comma list of modules (e.g. "lesen"): ONLY single-module attempts of those modules;
                             full four-module attempts are refused. Any unknown entry disables every mode (fail closed).
                             Requires EXAM_RELEASE_FORMS.
     EXAM_RELEASE_FORMS      unset (default): every live form of the mode's kinds may be assigned (test/dev releases).
                             A comma list of form ids: ONLY those forms may be assigned or continued. Every listed id
                             must be a live form, and a synthetic one must have purpose 'practice' (never a system-test
                             fixture such as S0); otherwise nothing is assigned (fail closed, release_misconfigured).
     EXAM_PRACTICE_PARTS     unset (default): no single-part practice (ENGINE §2 practice_part). A comma list of modules
                             whose parts may be practised one at a time, untimed. Only "lesen" is supported (Hören parts
                             share one audio plan; Schreiben/Sprechen are rated). Any other entry disables it (fail
                             closed). Requires EXAM_PRACTICE_PART_FORMS. Independent of EXAM_MODULE_ONLY.
     EXAM_PRACTICE_PART_FORMS the PRACTICE POOL: a comma list of form ids used only for single-part practice. Every listed
                             id must be a live form, synthetic ones with purpose 'practice', and NONE may be in
                             EXAM_RELEASE_FORMS (live simulation forms never enter the pool). Otherwise no part practice
                             is assigned or continued (fail closed, pool_misconfigured).
   EXAM_ROUTES lives in klarweg-access (the /exam/* proxy). */

const on = (v) => v === 'on';

export function flags(env) {
  return {
    enabled: on(env.EXAM_ENABLED),
    synthetic: on(env.EXAM_SYNTHETIC_FORMS),
    mock: on(env.EXAM_MOCK_FORMS),
    production: on(env.EXAM_PRODUCTION_FORMS)
  };
}

const FORM_ID_RE = /^frm:(a1|a2|b1|b2):[a-z0-9-]+@([1-9][0-9]*)$/;

/* a comma list of form ids → null (unset) | { ok: true, ids } | { ok: false } (malformed or duplicate ids) */
function formList(raw) {
  if (raw === undefined || raw === null || String(raw).trim() === '') return null;
  const ids = String(raw).split(',').map((x) => x.trim()).filter(Boolean);
  if (!ids.length || ids.some((id) => !FORM_ID_RE.test(id)) || new Set(ids).size !== ids.length) return { ok: false, ids: [] };
  return { ok: true, ids };
}
export const releaseForms = (env) => formList(env.EXAM_RELEASE_FORMS);
export const practicePartForms = (env) => formList(env.EXAM_PRACTICE_PART_FORMS);

/* modules whose parts can be practised one at a time (ENGINE §2 practice_part) */
export const PART_PRACTICE_MODULES = Object.freeze(['lesen']);
/* EXAM_PRACTICE_PARTS → null (unset: off) | { ok: true, modules } | { ok: false } (misconfigured) */
export function practiceParts(env) {
  const raw = env.EXAM_PRACTICE_PARTS;
  if (raw === undefined || raw === null || String(raw).trim() === '') return null;
  const list = String(raw).split(',').map((x) => x.trim()).filter(Boolean);
  if (!list.length || list.some((m) => !PART_PRACTICE_MODULES.includes(m))) return { ok: false, modules: [] };
  return { ok: true, modules: PART_PRACTICE_MODULES.filter((m) => list.includes(m)) };
}

export const EXAM_MODULES = Object.freeze(['lesen', 'hoeren', 'schreiben', 'sprechen']);

/* EXAM_MODULE_ONLY → null (unset: full attempts as before) | { ok: true, modules } | { ok: false } (misconfigured) */
export function moduleOnly(env) {
  const raw = env.EXAM_MODULE_ONLY;
  if (raw === undefined || raw === null || String(raw).trim() === '') return null;
  const list = String(raw).split(',').map((x) => x.trim()).filter(Boolean);
  if (!list.length || list.some((m) => !EXAM_MODULES.includes(m))) return { ok: false, modules: [] };
  return { ok: true, modules: EXAM_MODULES.filter((m) => list.includes(m)) };
}

/* API mode → which form kinds may be assigned and which flag gates it. A single-module mode (ENGINE §2
   simulation_module) assigns a form exactly like its full family and keeps only the chosen module; it is stored with
   the family's mode (attempts.mode) plus attempts.module_scope, so one practice attempt per family is open at a time. */
export const MODES = {
  synthetic_full: { kinds: ['synthetic'], flag: 'synthetic', access_scope: 'synthetic' },
  mock_m0: { kinds: ['mock'], flag: 'mock', access_scope: 'mock' },
  simulation_full: { kinds: ['set'], flag: 'production', access_scope: 'sets' },
  synthetic_module: { kinds: ['synthetic'], flag: 'synthetic', access_scope: 'synthetic', family: 'synthetic_full', single_module: true },
  simulation_module: { kinds: ['set'], flag: 'production', access_scope: 'sets', family: 'simulation_full', single_module: true },
  /* ENGINE §2 practice_part: one part of one module, untimed, from the practice pool (EXAM_PRACTICE_PART_FORMS), never
     from the learner release set. Stored like a single-module attempt plus attempts.part_scope. */
  synthetic_part: { kinds: ['synthetic'], flag: 'synthetic', access_scope: 'synthetic', family: 'synthetic_full', single_module: true, single_part: true },
  practice_part: { kinds: ['set'], flag: 'production', access_scope: 'sets', family: 'simulation_full', single_module: true, single_part: true }
};

/* the API mode of a stored attempt */
export function apiMode(attempt) {
  if (!attempt.module_scope) return attempt.mode;
  const part = attempt.part_scope !== null && attempt.part_scope !== undefined;
  const m = Object.entries(MODES).find(([, d]) => d.single_module && !!d.single_part === part && d.family === attempt.mode);
  return m ? m[0] : attempt.mode;
}

/* why a mode (and, for a single-module mode, a module) may not be used now; null = allowed */
export function modeBlock(env, def, module = null) {
  if (!flags(env)[def.flag]) return 'disabled';
  if (def.single_part) {   // its own switch and its own form pool; a misconfigured EXAM_MODULE_ONLY still disables it (fail closed)
    const mo = moduleOnly(env);
    if (mo && !mo.ok) return 'misconfigured';
    const pp = practiceParts(env);
    if (!pp) return 'disabled';
    if (!pp.ok) return 'misconfigured';
    if (module !== null && !pp.modules.includes(module)) return 'module_disabled';
    return null;
  }
  const only = moduleOnly(env);
  if (only && !only.ok) return 'misconfigured';
  if (!def.single_module) return only ? 'module_only' : null;
  if (!only) return 'disabled';
  if (module !== null && !only.modules.includes(module)) return 'module_disabled';
  return null;
}
