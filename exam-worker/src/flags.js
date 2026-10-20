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

/* EXAM_RELEASE_FORMS → null (unset) | { ok: true, ids } | { ok: false } (malformed or duplicate ids) */
export function releaseForms(env) {
  const raw = env.EXAM_RELEASE_FORMS;
  if (raw === undefined || raw === null || String(raw).trim() === '') return null;
  const ids = String(raw).split(',').map((x) => x.trim()).filter(Boolean);
  if (!ids.length || ids.some((id) => !FORM_ID_RE.test(id)) || new Set(ids).size !== ids.length) return { ok: false, ids: [] };
  return { ok: true, ids };
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
  simulation_module: { kinds: ['set'], flag: 'production', access_scope: 'sets', family: 'simulation_full', single_module: true }
};

/* the API mode of a stored attempt */
export function apiMode(attempt) {
  if (!attempt.module_scope) return attempt.mode;
  const m = Object.entries(MODES).find(([, d]) => d.single_module && d.family === attempt.mode);
  return m ? m[0] : attempt.mode;
}

/* why a mode (and, for a single-module mode, a module) may not be used now; null = allowed */
export function modeBlock(env, def, module = null) {
  if (!flags(env)[def.flag]) return 'disabled';
  const only = moduleOnly(env);
  if (only && !only.ok) return 'misconfigured';
  if (!def.single_module) return only ? 'module_only' : null;
  if (!only) return 'disabled';
  if (module !== null && !only.modules.includes(module)) return 'module_disabled';
  return null;
}
