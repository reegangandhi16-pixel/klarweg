/* Feature flags — every one defaults OFF. Only the exact string "on" enables.
     EXAM_ENABLED            the exam Worker answers at all (else 503 exam_disabled)
     EXAM_SYNTHETIC_FORMS    synthetic engine-test forms may be assigned
     EXAM_MOCK_FORMS         Mock M0 forms may be assigned           (no content yet)
     EXAM_PRODUCTION_FORMS   production simulation sets may be assigned (no content yet)
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

/* mode → which form kinds may be assigned and which flag gates it */
export const MODES = {
  synthetic_full: { kinds: ['synthetic'], flag: 'synthetic', access_scope: 'synthetic' },
  mock_m0: { kinds: ['mock'], flag: 'mock', access_scope: 'mock' },
  simulation_full: { kinds: ['set'], flag: 'production', access_scope: 'sets' }
};
