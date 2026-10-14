/* Shared builder for the SYNTHETIC B1 PRACTICE forms (P1, P2, …): original, fictional Klarweg texts on the
   unchanged engine and schema. A content file (make-practice-form.mjs, make-practice-form-p2.mjs) calls these
   helpers to add assets, tasks and items, then `finish()` assembles the form exactly like the system-test form S0
   (tools/make-synthetic-form.mjs). Outputs are registered in SYNTHETIC_FORMS and byte-checked by
   check-public-boundary.mjs. Hören stimuli are TEST AUDIO tones: each tone asset carries the German script it stands
   for in `script_de` (server-side content data, never shipped in a module package). Every scored item gets a
   one-sentence `feedback.explanation_de` and an evidence `anchors` span, computed from a quote in its text or script
   (EXAM-ITEM-SCHEMA §5: server only, released in the review after submission); a quote that is not in its source
   fails the build. */
import { countWords } from '../schemas/content-model.mjs';

export function createPracticeBuilder({ formId, date }) {
  const provenance = () => ({
    author_ids: ['klarweg-engineering'], created_at: date, reference_material_used: 'none',
    originality_check: { method: 'synthetic_fixture', max_overlap: 0, corpus_versions: [], passed: true, checked_at: date },
    reviews: [], standard_refs: ['synthetic practice form — original Klarweg text, not exam content']
  });
  const itemInd = () => ({ synthetic: true, reasoning_steps: 1, inference_demand: 2, distractor_strength: 2 });

  const assets = [], tasks = [], items = [], keys = {};
  function textAsset(id, body, label) {
    assets.push({ id, kind: 'text', label: label || null, text: { lang: 'de', body_md: body }, licence: { kind: 'synthetic_test' }, creator: 'klarweg-engineering' });
    return id;
  }
  function toneAsset(id, seconds, freqHz, label, script) {
    assets.push({ id, kind: 'audio', label: `TEST AUDIO – ${label}`, audio: { generator: { type: 'tone', seconds, freq_hz: freqHz, beep_ms: 250 }, plays: null },
      script_de: script, licence: { kind: 'synthetic_test' }, creator: 'klarweg-engineering' });
    return id;
  }
  function item(o) {
    const it = {
      id: o.id, rev: 1, meta_version: 1, level: 'B1', module: o.module, part: o.part, task_id: o.task, is_example: !!o.example,
      interaction: o.interaction, stem: o.stem, options: o.options || undefined, response_spec: o.response_spec || { type: 'choice' },
      indicators: o.indicators || itemInd(), topic: ['practice'], provenance: provenance(), status: 'live'
    };
    if (o.example) it.example_answer = o.key;
    items.push(it);
    keys[o.id] = o.keyspec || { kind: 'single', correct: o.key };
    return o.id;
  }
  function task(o) {
    const words = (o.stimuli || []).filter((s) => s.text).reduce((n, s) => n + countWords(s.text), 0);
    tasks.push({
      id: o.id, level: 'B1', module: o.module, part: o.part, interaction: o.interaction,
      instructions: { text_de: o.instructions, source: 'klarweg_paraphrase' },
      context_line: o.context || undefined, frame: 'synthetic',
      stimuli: (o.stimuli || []).map((s, i) => ({ role: s.role, asset_id: s.asset, label: s.label || null, order: i + 1, speaker_ids: s.speakers || undefined })),
      items: o.items, indicators: { synthetic: true, words, ...(o.indicators || {}) }, topic: ['practice'], provenance: provenance(),
      turns: o.turns || undefined
    });
    return o.id;
  }
  const choice = (id, part, tsk, interaction, options, stem, key, example = false) => item({ id, module: part.m, part: part.p, task: tsk, interaction, options, stem, key, example });

  /* explain: { item_id: [asset_id, evidence quote, one-sentence explanation] } for EVERY scored objective item */
  function explain(table) {
    const sourceText = (assetId) => { const a = assets.find((x) => x.id === assetId); return a && (a.kind === 'text' ? a.text.body_md : a.script_de); };
    for (const it of items) {
      if (it.is_example || !['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment'].includes(it.interaction)) continue;
      const e = table[it.id];
      if (!e) throw new Error(`no explanation for ${it.id}`);
      const [assetId, quote, explanation] = e;
      const start = (sourceText(assetId) || '').indexOf(quote);
      if (start < 0) throw new Error(`${it.id}: evidence not found in ${assetId}`);
      it.anchors = [{ kind: 'text_span', asset_id: assetId, start, end: start + quote.length }];
      it.feedback = { explanation_de: explanation };
    }
    const unknown = Object.keys(table).filter((id) => !items.some((it) => it.id === id));
    if (unknown.length) throw new Error(`explanations for unknown items: ${unknown.join(', ')}`);
  }

  const byPart = (module, part) => tasks.filter((t) => t.module === module && t.part === part);
  const placement = (module, part) => {
    const ts = byPart(module, part);
    const order = ts.flatMap((t) => t.items).map((id) => {
      const it = items.find((x) => x.id === id);
      const productive = ['topic_choice', 'text_response', 'spoken_response'].includes(it.interaction);
      const display = productive ? null
        : it.is_example ? (id.endsWith('-01') ? '01' : id.endsWith('-02') ? '02' : '0')
          : it.stem.match(/^(\d+)\./)[1];
      return { item_id: id, display_no: display };
    });
    return { part, task_ids: ts.map((t) => t.id), item_order: order };
  };

  /* Assemble the five form files. hoerenInstructions: { part: asset_id } spoken part instructions. */
  function finish({ rel, label, releaseNote, hoerenInstructions = {}, timingOverrides }) {
    const form = {
      id: formId, level_config: 'lc:b1@1', kind: 'synthetic', purpose: 'practice', label, status: 'live', rev: 1,
      release_note: releaseNote,
      modules: [
        { module: 'lesen', parts: [1, 2, 3, 4, 5].map((p) => placement('lesen', p)) },
        { module: 'hoeren', parts: [1, 2, 3, 4].map((p) => (hoerenInstructions[p] ? { ...placement('hoeren', p), instruction_asset_id: hoerenInstructions[p] } : placement('hoeren', p))) },
        { module: 'schreiben', parts: [1, 2, 3].map((p) => placement('schreiben', p)) },
        { module: 'sprechen', parts: [1, 2, 3].map((p) => placement('sprechen', p)) }
      ],
      topic_map: { lesen: ['practice'], hoeren: ['practice'], schreiben: ['practice'], sprechen: ['practice'] },
      timing_overrides: timingOverrides,
      authored_by: ['klarweg-engineering'], reviewed_by: [], created_at: date
    };
    const files = {
      'form.json': form, 'tasks.json': tasks, 'items.json': items,
      'keys.json': { form_id: formId, note: 'SERVER ONLY — synthetic practice keys; never served to browsers', keys },
      'assets.json': assets
    };
    return {
      rel, form_id: formId,
      files: Object.fromEntries(Object.entries(files).map(([name, data]) => [name, JSON.stringify(data, null, 2) + '\n'])),
      counts: { tasks: tasks.length, items: items.length, assets: assets.length }
    };
  }

  return {
    textAsset, toneAsset, item, task, choice, explain, finish,
    RF: [{ option_id: 'richtig', label: 'Richtig' }, { option_id: 'falsch', label: 'Falsch' }],
    JN: [{ option_id: 'ja', label: 'Ja' }, { option_id: 'nein', label: 'Nein' }],
    abc: (a, b, c) => [{ option_id: 'a', label: 'a', text: a }, { option_id: 'b', label: 'b', text: b }, { option_id: 'c', label: 'c', text: c }]
  };
}

/* Shared practice timing (allowed for kind=synthetic only): Hören runs on short TEST AUDIO tones, so its reading and
   answer pauses are shortened but usable; Sprechen keeps the exam's Teil 2/3 durations with a short preparation. */
export const PRACTICE_TIMING = {
  note: 'Allowed for kind=synthetic only. Hören runs on short TEST AUDIO tones; the reading and answer pauses are longer than in S0 so the practice is usable.',
  hoeren: { example_preread_seconds: 10, item_preread_seconds_per_text: 10, gap_between_plays_seconds: 2, answer_seconds_after_text: 5,
    part_preread_seconds: { 2: 30, 3: 30, 4: 30 }, part_answer_seconds: { 2: 10, 3: 10, 4: 10 }, part_gap_seconds: { 4: 2 }, review_seconds: 60, total_seconds_gate: { min: 0, max: 900 } },
  sprechen: { prep_seconds: 120, phases: [{ id: 'intro', seconds: 5, rated: false }, { id: 'teil1', seconds: 180 }, { id: 'teil2', seconds: 240 }, { id: 'partner', seconds: 5, listen_only: true }, { id: 'teil3', seconds: 150 }] }
};
