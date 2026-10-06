/* Klarweg exam content model — machine-readable contract used by the
   validator (tools/validate.mjs) and the release builder (tools/build-release.mjs).
   Normative description: docs/exam/EXAM-ITEM-SCHEMA.md. Level-specific numbers
   (item counts, timings, rubric points) live in levels/<level>/level-config.json,
   never here. */

export const MODULES = Object.freeze(['lesen', 'hoeren', 'schreiben', 'sprechen']);
export const LEVELS = Object.freeze(['A1', 'A2', 'B1', 'B2']);
export const FORM_KINDS = Object.freeze(['synthetic', 'mock', 'set', 'anchor_form']);
export const FORM_STATUS = Object.freeze(['draft', 'review', 'pilot', 'live', 'retired']);
export const ITEM_STATUS = Object.freeze(['draft', 'reviewed', 'piloted', 'live', 'retired']);

/* Item-level interaction types (scorable or productive units). */
export const ITEM_INTERACTIONS = Object.freeze([
  'binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment', 'text_response', 'spoken_response', 'topic_choice'
]);
/* Part-level interaction types additionally allow composite parts. */
export const PART_INTERACTIONS = Object.freeze([...ITEM_INTERACTIONS, 'audio_item_pairs']);

export const STIMULUS_ROLES = Object.freeze([
  'text', 'ad', 'image', 'audio', 'guestbook_post', 'slide', 'planning_card', 'partner_audio', 'examiner_audio', 'prompt'
]);
export const ASSET_KINDS = Object.freeze(['text', 'image', 'audio']);
export const LICENCE_KINDS = Object.freeze(['klarweg_original', 'commissioned', 'stock_licensed', 'cc0', 'synthetic_test']);
export const FRAMES = Object.freeze([
  'blog', 'email', 'forum', 'social_post', 'press', 'brochure', 'ad', 'rules', 'announcement', 'voicemail', 'radio',
  'tour', 'conversation', 'discussion', 'guestbook', 'planning_card', 'slides', 'synthetic'
]);
export const TRAP_MECHANISMS = Object.freeze([
  'referent_swap', 'temporal', 'frequency', 'arithmetic', 'hedge_modal', 'causal', 'unstated_restriction',
  'absolute_quantifier', 'polarity', 'counterfactual', 'premise', 'lexical_association', 'figurative_literal',
  'attributed_belief', 'option_not_taken', 'negation_construction', 'perspective_inversion', 'exclusion_clause',
  'granularity', 'near_number', 'speaker_swap', 'partial_match', 'none'
]);
export const REFERENCE_USE = Object.freeze(['none', 'benchmark_only']);

export const ID = Object.freeze({
  form: /^frm:(a1|a2|b1|b2):[a-z0-9-]+@([1-9][0-9]*)$/,
  levelConfig: /^lc:(a1|a2|b1|b2)@[1-9][0-9]*$/,
  task: /^tsk:(a1|a2|b1|b2):[a-z0-9-]+$/,
  item: /^itm:(a1|a2|b1|b2):[a-z0-9-]+$/,
  asset: /^ast:[a-z0-9-]+$/,
  rubric: /^rub:(a1|a2|b1|b2):(schreiben|sprechen):(p[1-9]|pron)@[1-9][0-9]*$/,
  release: /^r[0-9]{3,4}$/
});

/* Fields that must NEVER appear in an authored item record: keys live in
   keys.json only, so a keyless package can never leak them by accident. */
export const FORBIDDEN_ITEM_FIELDS = Object.freeze(['key', 'correct', 'answer', 'solution', 'correct_option']);

/* Fields stripped from every browser package (EXAM-ITEM-SCHEMA §11). */
export const SERVER_ONLY_FIELDS = Object.freeze([
  'key', 'scoring', 'anchors', 'distractors', 'indicators', 'calibration', 'provenance', 'feedback', 'notes', 'topic',
  'lexical_domains', 'grammar_domains', 'status', 'rev', 'meta_version', 'supersedes'
]);

/* Required indicator fields per module (difficulty metadata is mandatory,
   never only easy/medium/hard). Values may be null only for synthetic forms. */
export const TASK_INDICATORS = Object.freeze({
  lesen: ['words', 'inference_demand', 'distractor_strength', 'info_units'],
  hoeren: ['speech_rate_wpm', 'speaker_count', 'plays', 'relevant_details', 'distractor_details'],
  schreiben: ['functions', 'function_count', 'planning_demand', 'register', 'target_words', 'stimulus_words'],
  sprechen: ['functions', 'function_count', 'planning_demand', 'interaction_demand', 'prep_seconds']
});
export const ITEM_INDICATORS_OBJECTIVE = Object.freeze(['reasoning_steps', 'inference_demand', 'distractor_strength']);

export const REQUIRED = Object.freeze({
  form: ['id', 'level_config', 'kind', 'label', 'status', 'rev', 'modules', 'topic_map', 'authored_by'],
  task: ['id', 'level', 'module', 'part', 'interaction', 'instructions', 'stimuli', 'items', 'indicators', 'topic', 'provenance'],
  item: ['id', 'rev', 'level', 'module', 'part', 'task_id', 'is_example', 'interaction', 'response_spec', 'indicators', 'provenance', 'status'],
  asset: ['id', 'kind', 'licence', 'creator']
});

/* Word count rule shared with the exam frontend (exam/js/wordcount.js) and
   the Worker: whitespace-separated tokens that contain a letter or digit;
   hyphenated compounds and numbers count as one word. */
export function countWords(text) {
  if (typeof text !== 'string' || !text.trim()) return 0;
  return text.trim().split(/\s+/u).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
}
