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

/* Declarative practice form (P3 …): the same task, item and asset layout as P2 (tools/make-practice-form-p2.mjs), but a
   content file supplies only its own original texts, items, keys and explanations. Item and asset ids, instructions,
   numbering, Hören tones and Sprechen turns are produced here, identically for every form, so forms differ only in
   content. Every scored item is a tuple ending in [evidence quote, one-sentence explanation]; the quote must occur
   verbatim in its own text or script, or the build fails (explain()). Lesen Teil 3: the evidence of a situation comes
   from the ad its key names; for the "0" situation the tuple names the nearest ad as a fifth element. */
export function buildPracticeForm(spec) {
  const n = spec.n;
  const P = `p${n}`;
  const formId = `frm:b1:synthetic-${P}@1`;
  const { textAsset, toneAsset, item, task, choice, explain, finish, RF, JN, abc } = createPracticeBuilder({ formId, date: spec.date });
  const ex = {};   // item id → [asset id, quote, explanation]
  const lesenInd = { inference_demand: 2, distractor_strength: 2, info_units: 7 };
  const opts3 = (o) => abc(o[0], o[1], o[2]);
  const two = (i) => String(i).padStart(2, '0');
  const need = (what, arr, len) => { if (!Array.isArray(arr) || arr.length !== len) throw new Error(`${P}: ${what} needs ${len} entries (got ${arr && arr.length})`); };
  const { lesen: L, hoeren: H, schreiben: S, sprechen: SP } = spec;

  /* ---- Lesen Teil 1: one personal text, example + 6 richtig/falsch ---- */
  need('lesen.t1.items', L.t1.items, 6);
  const l1 = textAsset(`ast:${P}-l1-text`, L.t1.text, L.t1.label);
  task({ id: `tsk:b1:${P}-l1`, module: 'lesen', part: 1, interaction: 'binary_choice',
    instructions: 'Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch?',
    stimuli: [{ role: 'text', asset: l1, text: L.t1.text }], indicators: lesenInd,
    items: [
      choice(`itm:b1:${P}-l1-00`, { m: 'lesen', p: 1 }, `tsk:b1:${P}-l1`, 'binary_choice', RF, `Beispiel: ${L.t1.example[0]}`, L.t1.example[1], true),
      ...L.t1.items.map(([stem, key, quote, why], i) => {
        const id = `itm:b1:${P}-l1-${two(i + 1)}`; ex[id] = [l1, quote, why];
        return choice(id, { m: 'lesen', p: 1 }, `tsk:b1:${P}-l1`, 'binary_choice', RF, `${i + 1}. ${stem}`, key);
      })
    ] });

  /* ---- Lesen Teil 2: two press texts, example on the first, 3 + 3 a/b/c ---- */
  need('lesen.t2', L.t2, 2);
  L.t2.forEach((t, k) => {
    need(`lesen.t2[${k}].items`, t.items, 3);
    const sfx = 'ab'[k], from = 7 + 3 * k;
    const label = t.label || 'aus einer Lokalzeitung (erfunden)';
    const a = textAsset(`ast:${P}-l2${sfx}-text`, t.text, label);
    const its = t.items.map(([stem, o, key, quote, why], i) => {
      const id = `itm:b1:${P}-l2-${two(from + i)}`; ex[id] = [a, quote, why];
      return choice(id, { m: 'lesen', p: 2 }, `tsk:b1:${P}-l2${sfx}`, 'mcq_single', opts3(o), `${from + i}. ${stem}`, key);
    });
    if (k === 0) its.unshift(choice(`itm:b1:${P}-l2-00`, { m: 'lesen', p: 2 }, `tsk:b1:${P}-l2a`, 'mcq_single', opts3(t.example[1]), `Beispiel: ${t.example[0]}`, t.example[2], true));
    task({ id: `tsk:b1:${P}-l2${sfx}`, module: 'lesen', part: 2, interaction: 'mcq_single',
      instructions: `Lesen Sie den Text aus der Zeitung und die Aufgaben ${from} bis ${from + 2}. Wählen Sie a, b oder c.`,
      stimuli: [{ role: 'text', asset: a, text: t.text, label }], indicators: lesenInd, items: its });
  });

  /* ---- Lesen Teil 3: ten ads, example + 7 situations, one without an ad ---- */
  need('lesen.t3.ads', L.t3.ads, 10); need('lesen.t3.situations', L.t3.situations, 7);
  const POOL = 'abcdefghij'.split('');
  const poolOptions = [...POOL.map((l) => ({ option_id: l, label: l })), { option_id: '0', label: '0 – keine passende Anzeige' }];
  const adAsset = (l) => `ast:${P}-l3-ad-${l}`;
  const adStimuli = L.t3.ads.map((t, i) => ({ role: 'ad', asset: textAsset(adAsset(POOL[i]), t), text: t, label: POOL[i] }));
  task({ id: `tsk:b1:${P}-l3`, module: 'lesen', part: 3, interaction: 'matching_pool',
    instructions: 'Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Jede Anzeige darf nur einmal gewählt werden. Für eine Situation gibt es keine passende Anzeige; wählen Sie dann 0.',
    stimuli: adStimuli, indicators: { ...lesenInd, info_units: 10 },
    items: [
      choice(`itm:b1:${P}-l3-00`, { m: 'lesen', p: 3 }, `tsk:b1:${P}-l3`, 'matching_pool', poolOptions, `Beispiel: ${L.t3.example[0]}`, L.t3.example[1], true),
      ...L.t3.situations.map(([stem, key, quote, why, near], i) => {
        const id = `itm:b1:${P}-l3-${13 + i}`; ex[id] = [adAsset(key === '0' ? near : key), quote, why];
        return choice(id, { m: 'lesen', p: 3 }, `tsk:b1:${P}-l3`, 'matching_pool', poolOptions, `${13 + i}. ${stem}`, key);
      })
    ] });

  /* ---- Lesen Teil 4: eight comments (the first is the example), Ja / Nein ---- */
  need('lesen.t4.comments', L.t4.comments, 8);
  const cAssets = L.t4.comments.map(([who, text], i) => textAsset(`ast:${P}-l4-c${i}`, `${who}: ${text}`));
  task({ id: `tsk:b1:${P}-l4`, module: 'lesen', part: 4, interaction: 'binary_choice',
    instructions: `${L.t4.topic} Lesen Sie die Kommentare 20 bis 26. ${L.t4.question} Wählen Sie Ja oder Nein.`,
    stimuli: L.t4.comments.map(([who, text], i) => ({ role: 'text', asset: cAssets[i], text: `${who}: ${text}`, label: who })), indicators: lesenInd,
    items: L.t4.comments.map(([who, , key, quote, why], i) => {
      const id = `itm:b1:${P}-l4-${i === 0 ? '00' : 19 + i}`;
      if (i) ex[id] = [cAssets[i], quote, why];
      return choice(id, { m: 'lesen', p: 4 }, `tsk:b1:${P}-l4`, 'binary_choice', JN, i === 0 ? `Beispiel: ${who}` : `${19 + i}. ${who}`, key, i === 0);
    }) });

  /* ---- Lesen Teil 5: rules / instructions, 4 a/b/c ---- */
  need('lesen.t5.items', L.t5.items, 4);
  const l5 = textAsset(`ast:${P}-l5-text`, L.t5.text);
  task({ id: `tsk:b1:${P}-l5`, module: 'lesen', part: 5, interaction: 'mcq_single',
    instructions: 'Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie a, b oder c.', context: L.t5.context,
    stimuli: [{ role: 'text', asset: l5, text: L.t5.text }], indicators: lesenInd,
    items: L.t5.items.map(([stem, o, key, quote, why], i) => {
      const id = `itm:b1:${P}-l5-${27 + i}`; ex[id] = [l5, quote, why];
      return choice(id, { m: 'lesen', p: 5 }, `tsk:b1:${P}-l5`, 'mcq_single', opts3(o), `${27 + i}. ${stem}`, key);
    }) });

  /* ---- Hören (TEST AUDIO tones; the German script each tone stands for is server-only script_de) ---- */
  const hInd = (plays, details, speakers = 1) => ({ speech_rate_wpm: null, speaker_count: speakers, plays, relevant_details: details, distractor_details: 0 });
  need('hoeren.t1.texts', H.t1.texts, 5);
  const h1Ex = toneAsset(`ast:${P}-h1-ex`, 1.5, 440, 'Hören Teil 1 Beispiel', H.t1.example.script);
  task({ id: `tsk:b1:${P}-h1-ex`, module: 'hoeren', part: 1, interaction: 'audio_item_pairs',
    instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. (Übungsform: die Hörtexte werden als Prüftöne abgespielt.)',
    stimuli: [{ role: 'audio', asset: h1Ex }], indicators: hInd(1, 2), items: [
      choice(`itm:b1:${P}-h1-01`, { m: 'hoeren', p: 1 }, `tsk:b1:${P}-h1-ex`, 'binary_choice', RF, `01 Beispiel: ${H.t1.example.rf[0]}`, H.t1.example.rf[1], true),
      choice(`itm:b1:${P}-h1-02`, { m: 'hoeren', p: 1 }, `tsk:b1:${P}-h1-ex`, 'mcq_single', opts3(H.t1.example.mc[1]), `02 Beispiel: ${H.t1.example.mc[0]}`, H.t1.example.mc[2], true)
    ] });
  H.t1.texts.forEach(({ script, rf, mc }, i) => {
    const t = i + 1;
    const a = toneAsset(`ast:${P}-h1-t${t}`, 2, 440 + t * 60, `Hören Teil 1 Text ${t}`, script);
    const rfId = `itm:b1:${P}-h1-${two(2 * t - 1)}x`, mcId = `itm:b1:${P}-h1-${two(2 * t)}x`;
    ex[rfId] = [a, rf[2], rf[3]]; ex[mcId] = [a, mc[3], mc[4]];
    task({ id: `tsk:b1:${P}-h1-t${t}`, module: 'hoeren', part: 1, interaction: 'audio_item_pairs', instructions: `Text ${t}`,
      stimuli: [{ role: 'audio', asset: a }], indicators: hInd(2, 2), items: [
        choice(rfId, { m: 'hoeren', p: 1 }, `tsk:b1:${P}-h1-t${t}`, 'binary_choice', RF, `${2 * t - 1}. ${rf[0]}`, rf[1]),
        choice(mcId, { m: 'hoeren', p: 1 }, `tsk:b1:${P}-h1-t${t}`, 'mcq_single', opts3(mc[1]), `${2 * t}. ${mc[0]}`, mc[2])
      ] });
  });
  need('hoeren.t2.items', H.t2.items, 5);
  const h2 = toneAsset(`ast:${P}-h2`, 3, 520, 'Hören Teil 2', H.t2.script);
  const h2Instr = toneAsset(`ast:${P}-h2-instr`, 1, 330, 'Hören Teil 2 Anweisung', 'Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben.');
  task({ id: `tsk:b1:${P}-h2`, module: 'hoeren', part: 2, interaction: 'mcq_single', context: H.t2.context,
    instructions: 'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben (11 bis 15). Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
    stimuli: [{ role: 'audio', asset: h2 }], indicators: hInd(1, 5),
    items: H.t2.items.map(([stem, o, key, quote, why], i) => {
      const id = `itm:b1:${P}-h2-${11 + i}`; ex[id] = [h2, quote, why];
      return choice(id, { m: 'hoeren', p: 2 }, `tsk:b1:${P}-h2`, 'mcq_single', opts3(o), `${11 + i}. ${stem}`, key);
    }) });
  need('hoeren.t3.items', H.t3.items, 7);
  const h3 = toneAsset(`ast:${P}-h3`, 3, 600, 'Hören Teil 3', H.t3.script);
  task({ id: `tsk:b1:${P}-h3`, module: 'hoeren', part: 3, interaction: 'binary_choice', context: H.t3.context,
    instructions: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben (16 bis 22). Wählen Sie: Sind die Aussagen richtig oder falsch?',
    stimuli: [{ role: 'audio', asset: h3, speakers: ['spk:a', 'spk:b'] }], indicators: hInd(1, 7, 2),
    items: H.t3.items.map(([stem, key, quote, why], i) => {
      const id = `itm:b1:${P}-h3-${16 + i}`; ex[id] = [h3, quote, why];
      return choice(id, { m: 'hoeren', p: 3 }, `tsk:b1:${P}-h3`, 'binary_choice', RF, `${16 + i}. ${stem}`, key);
    }) });
  need('hoeren.t4.speakers', H.t4.speakers, 3); need('hoeren.t4.items', H.t4.items, 8);
  const speakers = H.t4.speakers.map((label, i) => ({ option_id: 'abc'[i], label }));
  const h4 = toneAsset(`ast:${P}-h4`, 3, 660, 'Hören Teil 4', H.t4.script);
  task({ id: `tsk:b1:${P}-h4`, module: 'hoeren', part: 4, interaction: 'speaker_assignment',
    instructions: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben (23 bis 30). Wer sagt was?',
    stimuli: [{ role: 'audio', asset: h4, speakers: ['spk:m', 'spk:g1', 'spk:g2'] }], indicators: hInd(2, 8, 3), items: [
      choice(`itm:b1:${P}-h4-00`, { m: 'hoeren', p: 4 }, `tsk:b1:${P}-h4`, 'speaker_assignment', speakers, `Beispiel: ${H.t4.example[0]}`, H.t4.example[1], true),
      ...H.t4.items.map(([stem, key, quote, why], i) => {
        const id = `itm:b1:${P}-h4-${23 + i}`; ex[id] = [h4, quote, why];
        return choice(id, { m: 'hoeren', p: 4 }, `tsk:b1:${P}-h4`, 'speaker_assignment', speakers, `${23 + i}. ${stem}`, key);
      })
    ] });

  /* ---- Schreiben: e-mail (80), opinion on a post (80), formal message (40) ---- */
  [[1, 80, S.t1], [2, 80, S.t2], [3, 40, S.t3]].forEach(([p, target, t]) => {
    const stimuli = [{ role: 'prompt', asset: textAsset(`ast:${P}-s${p}-prompt`, t.prompt), text: t.prompt }];
    if (p === 2) stimuli.push({ role: 'guestbook_post', asset: textAsset(`ast:${P}-s2-post`, t.post), text: t.post, label: t.postLabel || 'Online-Gästebuch' });
    const id = item({ id: `itm:b1:${P}-s${p}`, module: 'schreiben', part: p, task: `tsk:b1:${P}-s${p}`, interaction: 'text_response', stem: `Schreiben Teil ${p}`,
      response_spec: { type: 'text', target_words: target, min_words_target: Math.ceil(target / 2), editor: 'plain' }, indicators: { synthetic: true },
      keyspec: { kind: 'rubric', rubric_id: `rub:b1:schreiben:p${p}@1` } });
    task({ id: `tsk:b1:${P}-s${p}`, module: 'schreiben', part: p, interaction: 'text_response', instructions: t.prompt, stimuli, items: [id],
      indicators: { functions: t.functions, function_count: t.functions.length, planning_demand: p === 2 ? 3 : 2, register: t.register, target_words: target, stimulus_words: stimuli.reduce((m, s) => m + countWords(s.text), 0) } });
  });

  /* ---- Sprechen: plan together (3 partner turns), present one of two topics, react and answer ---- */
  need('sprechen.t1.partner', SP.t1.partner, 3); need('sprechen.t2.topics', SP.t2.topics, 2);
  const partner = SP.t1.partner.map((script, k) => toneAsset(`ast:${P}-sp1-partner-${k + 1}`, 1, 740 + k * 40, `Sprechen Teil 1 Partner-Turn ${k + 1}`, script));
  const sp1 = item({ id: `itm:b1:${P}-sp1`, module: 'sprechen', part: 1, task: `tsk:b1:${P}-sp1`, interaction: 'spoken_response', stem: 'Sprechen Teil 1',
    response_spec: { type: 'audio', max_seconds: 210, turns: partner.map((a, i) => ({ turn: `t${i + 1}`, prompt_asset: a, seconds: 30 })) },
    indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p1@1' } });
  task({ id: `tsk:b1:${P}-sp1`, module: 'sprechen', part: 1, interaction: 'spoken_response',
    instructions: 'Teil 1: Etwas gemeinsam planen. Sprechen Sie mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge.',
    stimuli: [{ role: 'planning_card', asset: textAsset(`ast:${P}-sp1-card`, SP.t1.card), text: SP.t1.card }, ...partner.map((a) => ({ role: 'partner_audio', asset: a }))], items: [sp1],
    indicators: { functions: ['propose', 'react', 'negotiate', 'plan'], function_count: 4, planning_demand: 2, interaction_demand: 4, prep_seconds: 900 } });
  const SLIDES = (title) => [`${title}: Thema vorstellen`, 'Meine persönlichen Erfahrungen', 'Die Situation in meinem Heimatland', 'Vor- und Nachteile & meine Meinung', 'Abschluss & Dank'];
  const slides = SP.t2.topics.map((title, k) => SLIDES(title).map((s, i) => textAsset(`ast:${P}-sp2-t${k + 1}-slide${i + 1}`, `Thema ${k + 1} – Folie ${i + 1}: ${s}`)));
  const topic = item({ id: `itm:b1:${P}-sp2-topic`, module: 'sprechen', part: 2, task: `tsk:b1:${P}-sp2`, interaction: 'topic_choice', stem: 'Wählen Sie ein Thema (Thema 1 oder Thema 2).',
    options: SP.t2.topics.map((title, k) => ({ option_id: `t${k + 1}`, label: `Thema ${k + 1}: ${title}` })),
    response_spec: { type: 'choice' }, indicators: { synthetic: true }, keyspec: { kind: 'none' } });
  const sp2 = item({ id: `itm:b1:${P}-sp2`, module: 'sprechen', part: 2, task: `tsk:b1:${P}-sp2`, interaction: 'spoken_response', stem: 'Sprechen Teil 2',
    response_spec: { type: 'audio', max_seconds: 240, turns: [{ turn: 't1', seconds: 240 }] }, indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p2@1' } });
  task({ id: `tsk:b1:${P}-sp2`, module: 'sprechen', part: 2, interaction: 'spoken_response',
    instructions: 'Teil 2: Ein Thema präsentieren. Stellen Sie Ihr Thema anhand der fünf Folien vor: Thema, persönliche Erfahrungen, Situation in Ihrem Heimatland, Vor- und Nachteile mit Ihrer Meinung, Abschluss.',
    stimuli: slides.flatMap((ss, k) => ss.map((a) => ({ role: 'slide', asset: a, label: `Thema ${k + 1}` }))), items: [topic, sp2],
    indicators: { functions: ['present', 'narrate', 'compare', 'opine', 'conclude'], function_count: 5, planning_demand: 3, interaction_demand: 0, prep_seconds: 900 } });
  const partnerTalk = toneAsset(`ast:${P}-sp3-partner-talk`, 2, 780, 'Sprechen Teil 3 Partner-Präsentation', SP.t3.partnerTalk);
  const examinerQ = toneAsset(`ast:${P}-sp3-examiner-q`, 1, 840, 'Sprechen Teil 3 Prüferfrage', SP.t3.examinerQuestion);
  const sp3 = item({ id: `itm:b1:${P}-sp3`, module: 'sprechen', part: 3, task: `tsk:b1:${P}-sp3`, interaction: 'spoken_response', stem: 'Sprechen Teil 3',
    response_spec: { type: 'audio', max_seconds: 150, turns: [{ turn: 't1', seconds: 60, prompt_asset: partnerTalk }, { turn: 't2', seconds: 45, prompt_asset: examinerQ }] },
    indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p3@1' } });
  task({ id: `tsk:b1:${P}-sp3`, module: 'sprechen', part: 3, interaction: 'spoken_response',
    instructions: `Teil 3: Über ein Thema sprechen. Geben Sie nach der Präsentation ${SP.t3.partnerFemale ? 'Ihrer Gesprächspartnerin' : 'Ihres Gesprächspartners'} eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie danach die Frage der Prüferin.`,
    stimuli: [{ role: 'partner_audio', asset: partnerTalk }, { role: 'examiner_audio', asset: examinerQ }], items: [sp3],
    indicators: { functions: ['react', 'ask', 'answer'], function_count: 3, planning_demand: 1, interaction_demand: 3, prep_seconds: 900 } });

  explain(ex);
  return finish({
    rel: `forms/synthetic/b1-synthetic-${P}`, label: `Synthetische Übungsform P${n} (Klarweg-Übung, kein Original)`,
    releaseNote: 'SYNTHETIC PRACTICE CONTENT — original Klarweg texts; Hören as TEST AUDIO tones',
    hoerenInstructions: { 2: h2Instr }, timingOverrides: PRACTICE_TIMING
  });
}
