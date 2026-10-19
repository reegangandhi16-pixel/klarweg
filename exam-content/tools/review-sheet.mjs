#!/usr/bin/env node
/* EX-03 REVIEW SHEETS for the practice library: one printable HTML sheet and one JSON record template per form, for the
   native B1 reviewers (register §C.1: slots A and B = content/teacher, C = native linguist, also originality and
   item-level accessibility). Per scored item the reviewer records the SCHEMA §10 verdict (approve | revise | reject) and
   the §8 ratings ambiguity_risk (0–2), inference_demand (1–5) and distractor_strength (1–5) with notes; productive tasks
   get a verdict and notes; slot C signs off originality per form. Nothing is approved by generating a sheet.

   The sheets contain keys, explanations and listening scripts, so they are written ONLY outside this repository
   (the public-repository boundary forbids answer-key-shaped data in it).

   TRACEABILITY (EX-03/O6, no carry-forward): every record carries the form's content fingerprint and one fingerprint per
   item/task (item + key + its task + the task's stimuli). tools/review-status.mjs only counts a returned record whose
   fingerprint matches the current content; a record of an older revision is stale. Slot C also records the item-level
   accessibility verdict (EX-03/O4) per item and task.

   Usage: node exam-content/tools/review-sheet.mjs <out-dir outside the repo> [p3 …] */
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from './practice-forms.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OBJECTIVE = new Set(['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment']);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const MODULE = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };

export const RECORD_VERSION = 'ex03-review@2';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');

/* Fingerprint of everything a reviewer judges on the sheet: all form files, in a fixed order. */
export function formFingerprint(form) {
  return sha(Object.keys(form.files).sort().map((n) => `${n}\n${form.files[n]}`).join('\n\u0000\n'));
}

/* Per item/task: the item, its key, the task it sits in and that task's stimuli (texts, scripts). */
export function itemFingerprints(form) {
  const j = (n) => JSON.parse(form.files[n]);
  const items = j('items.json'), tasks = j('tasks.json'), assets = j('assets.json'), keys = j('keys.json').keys;
  const out = {};
  for (const it of items) {
    const task = tasks.find((t) => t.items.includes(it.id));
    const stim = task ? task.stimuli.map((s) => assets.find((a) => a.id === s.asset_id) || null) : [];
    out[it.id] = sha(JSON.stringify([it, keys[it.id] ?? null, task ?? null, stim]));
  }
  return out;
}

export function reviewRecord(form) {
  const items = JSON.parse(form.files['items.json']), fp = itemFingerprints(form);
  return {
    record_version: RECORD_VERSION, form_id: form.form_id, content_sha256: formFingerprint(form),
    reviewer: { slot: '', reviewer_id: '', role: '', native_german: null, date: '' },
    items: items.filter((it) => !it.is_example && OBJECTIVE.has(it.interaction)).map((it) => ({ item_id: it.id, item_sha256: fp[it.id], verdict: '', ambiguity_risk: null, inference_demand: null, distractor_strength: null, accessibility: '', notes: '' })),
    tasks: items.filter((it) => ['text_response', 'spoken_response'].includes(it.interaction)).map((it) => ({ item_id: it.id, item_sha256: fp[it.id], verdict: '', accessibility: '', notes: '' })),
    originality_signoff: { slot_c_only: true, verdict: '', notes: '' }
  };
}

export function reviewSheetHtml(form) {
  const j = (n) => JSON.parse(form.files[n]);
  const items = j('items.json'), tasks = j('tasks.json'), assets = j('assets.json'), keys = j('keys.json').keys;
  const asset = (id) => assets.find((a) => a.id === id);
  // OD-32: which Teil 3 talk / examiner question a learner hears depends on their Teil 2 topic choice
  const promptTopic = {};
  for (const it of items) for (const turn of it.response_spec?.turns || []) for (const [k, id] of Object.entries(turn.prompt_asset_by_topic || {})) promptTopic[id] = k;
  const topicNote = (s) => { const k = s.for_topic || promptTopic[s.asset_id]; return k ? ` — für Lernende mit Thema ${k.slice(1)}` : ''; };
  const sourceOf = (a) => (a.kind === 'text' ? a.text.body_md : a.script_de);
  const out = [`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>EX-03 Review ${esc(form.name)}</title>
<style>body{font:14px/1.45 system-ui,sans-serif;margin:24px;color:#111}h1{font-size:20px}h2{margin-top:28px;border-bottom:1px solid #999}
.stim{white-space:pre-wrap;background:#f4f4f0;padding:8px;margin:6px 0}.key{font-weight:600}table{border-collapse:collapse;width:100%;margin:6px 0}
td,th{border:1px solid #bbb;padding:4px;vertical-align:top}.box{display:inline-block;min-width:110px;border-bottom:1px solid #000}@media print{h2{break-before:page}}</style></head><body>
<h1>EX-03 Review — ${esc(form.name)} (${esc(form.form_id)})</h1>
<p>Klarweg synthetic practice, not an official exam. CONFIDENTIAL review material (keys, explanations, listening scripts). Do not share.</p>
<p>Reviewer slot (A/B/C): <span class="box"></span> Reviewer id: <span class="box"></span> Role (content/language/teacher/originality/accessibility): <span class="box"></span> Native German speaker (yes/no): <span class="box"></span> Date: <span class="box"></span></p>
<p>Content fingerprint: <code>${formFingerprint(form)}</code> — copy it unchanged into your record; a review of another version does not count (EX-03/O6).</p>
<p>Per item: verdict <b>approve / revise / reject</b>; ambiguity_risk <b>0</b> none · <b>1</b> minor · <b>2</b> must fix; inference_demand and distractor_strength <b>1–5</b> (anchors: GOETHE-B1-DIFFICULTY-BENCHMARK §2.2). Slot C also gives the item-level accessibility verdict (EX-03/O4).</p>`];
  for (const m of ['lesen', 'hoeren', 'schreiben', 'sprechen']) {
    for (const t of tasks.filter((x) => x.module === m)) {
      out.push(`<h2>${MODULE[m]} Teil ${t.part} — ${esc(t.id)}</h2><p>${esc(t.instructions.text_de)}</p>${t.context_line ? `<p><i>${esc(t.context_line)}</i></p>` : ''}`);
      for (const s of t.stimuli) { const a = asset(s.asset_id); const src = sourceOf(a); if (src) out.push(`<div class="stim"><b>${esc(s.label || s.role)}${esc(topicNote(s))}</b>${a.kind === 'audio' ? ' (script; audio is TEST AUDIO)' : ''}\n${esc(src)}</div>`); }
      for (const id of t.items) {
        const it = items.find((x) => x.id === id);
        if (it.is_example) { out.push(`<p>Beispiel: ${esc(it.stem)} → ${esc(it.example_answer)}</p>`); continue; }
        if (OBJECTIVE.has(it.interaction)) {
          const k = keys[id].correct, an = it.anchors[0];
          const opts = it.options.map((o) => `${o.option_id === k ? '<span class="key">' : ''}${esc(o.label)}${o.text ? ' ' + esc(o.text) : ''}${o.option_id === k ? ' ✔</span>' : ''}`).join(' · ');
          out.push(`<table><tr><th colspan="6">${esc(it.stem)}</th></tr><tr><td colspan="6">${opts}</td></tr>
<tr><td colspan="6">Erklärung: ${esc(it.feedback.explanation_de)}<br>Beleg: „${esc(sourceOf(asset(an.asset_id)).slice(an.start, an.end))}“</td></tr>
<tr><td>verdict ☐ approve ☐ revise ☐ reject</td><td>ambiguity_risk ☐0 ☐1 ☐2</td><td>inference_demand ___</td><td>distractor_strength ___</td><td>accessibility (C) ☐ approve ☐ revise ☐ reject</td><td>notes</td></tr></table>`);
        } else if (it.interaction !== 'topic_choice') out.push(`<table><tr><th>${esc(it.stem)} (${esc(keys[id].rubric_id)})</th></tr><tr><td>verdict ☐ approve ☐ revise ☐ reject · accessibility (C) ☐ approve ☐ revise ☐ reject · notes:</td></tr></table>`);
      }
    }
  }
  out.push('<h2>Originality sign-off (slot C only)</h2><p>☐ approve ☐ revise ☐ reject · notes:</p></body></html>');
  return out.join('\n');
}

export function writeReviewSheets(outDir, names = []) {
  const dir = path.resolve(outDir);
  if (dir === REPO || dir.startsWith(REPO + path.sep)) throw new Error('refusing to write review sheets inside the repository (they contain keys)');
  fs.mkdirSync(dir, { recursive: true });
  const forms = PRACTICE_FORMS.filter((f) => !names.length || names.includes(f.name.toLowerCase()));
  for (const f of forms) {
    fs.writeFileSync(path.join(dir, `${f.name}-review.html`), reviewSheetHtml(f));
    fs.writeFileSync(path.join(dir, `${f.name}-review.json`), JSON.stringify(reviewRecord(f), null, 2) + '\n');
  }
  return forms.map((f) => f.name);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [out, ...names] = process.argv.slice(2);
  if (!out) { console.error('usage: review-sheet.mjs <out-dir outside the repo> [p3 …]'); process.exit(2); }
  console.log(JSON.stringify({ written: writeReviewSheets(out, names.map((n) => n.toLowerCase())), dir: path.resolve(out) }));
}
