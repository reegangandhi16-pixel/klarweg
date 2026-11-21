#!/usr/bin/env node
/* FILLABLE EX-03 REVIEW FORM: one self-contained, offline HTML file per form and module scope. A reviewer opens it in any
   browser (no network, no installation), chooses the slot, records verdicts and ratings next to each item with its
   text, key, explanation and evidence, sees what is still missing, and downloads the finished record
   (<form>-<slot>.json, the unchanged ex03-review@2 template with the answers filled in). Progress is kept in the
   browser (localStorage) and can be resumed from a downloaded record. The page approves nothing, and
   tools/review-status.mjs remains the judge. Like the review sheets it contains keys, so it is written ONLY outside
   this repository.

   Usage: node exam-content/tools/review-form.mjs <out-dir outside the repo> [--module lesen] [p3 …] */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRACTICE_FORMS } from './practice-forms.mjs';
import { reviewRecord, RECORD_VERSION, REVIEW_MODULES } from './review-sheet.mjs';
import { fillRecord, progress } from './review-form-logic.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OBJECTIVE = new Set(['binary_choice', 'mcq_single', 'matching_pool', 'speaker_assignment']);
const MODULE_DE = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const radios = (name, values, labels = values) => values.map((v, i) => `<label class="opt"><input type="radio" name="${esc(name)}" value="${esc(v)}"> ${esc(labels[i])}</label>`).join('');
const scale = (name) => `<select name="${esc(name)}"><option value="">–</option>${[1, 2, 3, 4, 5].map((n) => `<option value="${n}">${n}</option>`).join('')}</select>`;

export function reviewFormHtml(form, { modules = REVIEW_MODULES } = {}) {
  const j = (n) => JSON.parse(form.files[n]);
  const items = j('items.json'), tasks = j('tasks.json'), assets = j('assets.json'), keys = j('keys.json').keys;
  const template = reviewRecord(form);
  const inScope = (it) => modules.includes(it.module);
  const scopeIds = items.filter((it) => inScope(it) && !it.is_example && (OBJECTIVE.has(it.interaction) || ['text_response', 'spoken_response'].includes(it.interaction))).map((it) => it.id);
  const scopeLabel = modules.length < REVIEW_MODULES.length ? modules.map((m) => MODULE_DE[m]).join(', ') : 'alle Module';
  const asset = (id) => assets.find((a) => a.id === id);
  const sourceOf = (a) => (a.kind === 'text' ? a.text.body_md : a.script_de);
  const body = [];
  for (const m of REVIEW_MODULES.filter((x) => modules.includes(x))) {
    for (const t of tasks.filter((x) => x.module === m)) {
      body.push(`<section class="task"><h2>${esc(MODULE_DE[m])} Teil ${esc(t.part)}</h2><p class="instr">${esc(t.instructions.text_de)}</p>${t.context_line ? `<p class="ctx">${esc(t.context_line)}</p>` : ''}`);
      for (const s of t.stimuli) { const a = asset(s.asset_id); const src = a && sourceOf(a); if (src) body.push(`<details class="stim" open><summary>${esc(s.label || s.role)}${a.kind === 'audio' ? ' (Skript; Audio = Testton)' : ''}</summary><div class="src">${esc(src)}</div></details>`); }
      for (const id of t.items) {
        const it = items.find((x) => x.id === id);
        if (it.is_example) { body.push(`<p class="ex">Beispiel: ${esc(it.stem)} → ${esc(it.example_answer)}</p>`); continue; }
        if (!scopeIds.includes(id)) continue;
        const n = (s) => `${id}::${s}`;
        if (OBJECTIVE.has(it.interaction)) {
          const k = keys[id].correct, an = it.anchors[0];
          const opts = it.options.map((o) => `<li${o.option_id === k ? ' class="key"' : ''}>${esc(o.label)}${o.text ? ' ' + esc(o.text) : ''}${o.option_id === k ? ' <span aria-label="Lösung">✔ Lösung</span>' : ''}</li>`).join('');
          body.push(`<fieldset class="item" data-id="${esc(id)}"><legend>${esc(it.stem)}</legend><ul class="opts">${opts}</ul>
<p class="expl"><b>Erklärung:</b> ${esc(it.feedback.explanation_de)}</p><p class="evid"><b>Beleg:</b> „${esc(sourceOf(asset(an.asset_id)).slice(an.start, an.end))}“</p>
<div class="row"><span class="lab">Verdict</span>${radios(n('verdict'), ['approve', 'revise', 'reject'])}</div>
<div class="row ab"><span class="lab">ambiguity_risk</span>${radios(n('ambiguity_risk'), ['0', '1', '2'], ['0 none', '1 minor', '2 must fix'])}</div>
<div class="row ab"><label>inference_demand ${scale(n('inference_demand'))}</label> <label>distractor_strength ${scale(n('distractor_strength'))}</label></div>
<div class="row c"><span class="lab">Accessibility (C)</span>${radios(n('accessibility'), ['approve', 'revise', 'reject'])}</div>
<label class="notes">Notes (required for revise, reject, ambiguity ≥ 1) <textarea name="${esc(n('notes'))}" rows="2"></textarea></label>
<p class="miss" aria-live="polite"></p></fieldset>`);
        } else if (it.interaction !== 'topic_choice') {
          body.push(`<fieldset class="item task-item" data-id="${esc(id)}"><legend>${esc(it.stem)} (${esc(keys[id].rubric_id)})</legend>
<div class="row"><span class="lab">Verdict</span>${radios(n('verdict'), ['approve', 'revise', 'reject'])}</div>
<div class="row c"><span class="lab">Accessibility (C)</span>${radios(n('accessibility'), ['approve', 'revise', 'reject'])}</div>
<label class="notes">Notes <textarea name="${esc(n('notes'))}" rows="2"></textarea></label><p class="miss" aria-live="polite"></p></fieldset>`);
        }
      }
      body.push('</section>');
    }
  }
  const data = JSON.stringify({ template, scopeIds, form: form.name, scope: scopeLabel, storeKey: `kx-ex03:${template.form_id}:${template.content_sha256}:${modules.join('+')}` }).replace(/</g, '\\u003c');
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>EX-03 Review ${esc(form.name)} – ${esc(scopeLabel)}</title>
<style>
:root{--ink:#111;--muted:#555;--line:#bbb;--bg:#fafaf7;--key:#1f4e4a;--warn:#9a3412}
body{font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;margin:0;color:var(--ink);background:var(--bg)}
main{max-width:920px;margin:0 auto;padding:16px}
h1{font-size:22px;margin:8px 0}h2{font-size:18px;margin:28px 0 6px;border-bottom:1px solid var(--line)}
.bar{position:sticky;top:0;background:#fff;border-bottom:1px solid var(--line);padding:8px 16px;z-index:2;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center}
.who{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px 16px;background:#fff;border:1px solid var(--line);padding:12px;margin:12px 0}
.who label{display:flex;flex-direction:column;font-size:13px;color:var(--muted)}
.src{white-space:pre-wrap;background:#f1f0ea;padding:8px;margin:4px 0}
.item{background:#fff;border:1px solid var(--line);margin:12px 0;padding:8px 12px}.item legend{font-weight:600;padding:0 4px}
.opts{margin:4px 0 8px}.key{color:var(--key);font-weight:600}.row{margin:6px 0;display:flex;flex-wrap:wrap;gap:4px 12px;align-items:center}
.lab{min-width:150px;color:var(--muted);font-size:13px}.opt{display:inline-flex;gap:4px;align-items:center;min-height:32px}
.notes{display:flex;flex-direction:column;font-size:13px;color:var(--muted)}textarea{font:inherit}
.miss{color:var(--warn);font-size:13px;margin:4px 0 0}.done .miss{color:var(--key)}
body:not(.slot-C) .c{display:none}body.slot-C .ab{display:none}
button{font:inherit;padding:6px 12px;min-height:36px}
input:focus-visible,select:focus-visible,textarea:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid var(--key);outline-offset:2px}
input[type=date]:focus,input[type=date]:focus-within{outline:3px solid var(--key);outline-offset:2px}.status{font-weight:600}
@media print{.bar{position:static}}
</style></head><body>
<div class="bar"><span class="status" id="kx-progress" aria-live="polite"></span><button type="button" id="kx-download">Download record (JSON)</button>
<label>Resume from a record: <input type="file" id="kx-load" accept="application/json,.json"></label></div>
<main><h1>EX-03 Review — ${esc(form.name)} — ${esc(scopeLabel)}</h1>
<p><b>Confidential</b> (keys and explanations). Klarweg practice material, not an official exam. Record version ${esc(RECORD_VERSION)}, content fingerprint <code>${esc(template.content_sha256)}</code>.</p>
<p>Fill in your own slot only. Work independently: do not discuss items before all three slots have recorded their verdicts (EX-03/O7). Your entries are saved in this browser as you go. When the counter says complete, download the record and return it, named <code>${esc(form.name)}-&lt;slot&gt;.json</code>.</p>
<div class="who" id="kx-who">
<label>Slot<select name="reviewer::slot"><option value="">choose …</option><option value="A">A — B1 teacher</option><option value="B">B — second B1 teacher</option><option value="C">C — native linguist</option></select></label>
<label>Reviewer id (a pseudonym is fine)<input name="reviewer::reviewer_id" autocomplete="off"></label>
<label>Date<input type="date" name="reviewer::date"></label>
<label>Native German speaker<select name="reviewer::native_german"><option value="">choose …</option><option value="true">yes</option><option value="false">no</option></select></label>
</div>
${body.join('\n')}
<section class="c"><h2>Originality sign-off (slot C, whole form)</h2><p>No passage, item or topic copies or closely paraphrases published exam material.</p>
<div class="row">${radios('originality::verdict', ['approve', 'revise', 'reject'])}</div><label class="notes">Notes <textarea name="originality::notes" rows="2"></textarea></label></section>
</main>
<script type="application/json" id="kx-data">${data}</script>
<script>
"use strict";
const fillRecord = ${fillRecord.toString()};
const progress = ${progress.toString()};
(function () {
  const D = JSON.parse(document.getElementById('kx-data').textContent);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  function read() {
    const st = { reviewer: {}, items: {}, tasks: {}, originality: {} };
    const taskIds = new Set(D.template.tasks.map((t) => t.item_id));
    for (const el of $$('input, select, textarea')) {
      if (!el.name || (el.type === 'radio' && !el.checked) || el.type === 'file') continue;
      const [a, f] = el.name.split('::');
      let v = el.value;
      if (a === 'reviewer') { st.reviewer[f] = f === 'native_german' ? (v === '' ? null : v === 'true') : v; continue; }
      if (a === 'originality') { st.originality[f] = v; continue; }
      const bucket = taskIds.has(a) ? st.tasks : st.items;
      (bucket[a] = bucket[a] || {})[f] = v;
    }
    st.reviewer.role = st.reviewer.slot === 'C' ? 'originality' : st.reviewer.slot ? 'content' : '';
    return st;
  }
  function write(rec) {
    const set = (name, v) => { for (const el of $$('[name="' + CSS.escape(name) + '"]')) { if (el.type === 'radio') el.checked = el.value === String(v); else el.value = v === null || v === undefined ? '' : String(v); } };
    const r = rec.reviewer || {};
    set('reviewer::slot', r.slot); set('reviewer::reviewer_id', r.reviewer_id); set('reviewer::date', r.date);
    set('reviewer::native_german', typeof r.native_german === 'boolean' ? String(r.native_german) : '');
    for (const it of [...(rec.items || []), ...(rec.tasks || [])]) for (const f of ['verdict', 'ambiguity_risk', 'inference_demand', 'distractor_strength', 'accessibility', 'notes']) if (f in it) set(it.item_id + '::' + f, it[f]);
    if (rec.originality_signoff) { set('originality::verdict', rec.originality_signoff.verdict); set('originality::notes', rec.originality_signoff.notes); }
  }
  function update() {
    const st = read();
    document.body.className = st.reviewer.slot ? 'slot-' + st.reviewer.slot : '';
    const rec = fillRecord(D.template, st);
    const p = progress(rec, D.scopeIds);
    const byId = Object.fromEntries(p.missing.map((m) => [m.id, m.fields]));
    for (const fs of $$('fieldset.item')) {
      const id = fs.dataset.id, miss = byId[id], notes = p.needNotes.includes(id);
      fs.classList.toggle('done', !miss && !notes);
      fs.querySelector('.miss').textContent = miss ? 'Still empty: ' + miss.join(', ') : notes ? 'Please add a note.' : 'Complete';
    }
    const extra = [];
    if (p.reviewerMissing.length) extra.push('your details: ' + p.reviewerMissing.join(', '));
    if (p.originalityMissing) extra.push('originality sign-off');
    if (p.needNotes.length) extra.push(p.needNotes.length + ' note(s)');
    document.getElementById('kx-progress').textContent = (p.complete ? 'Complete: ' : '') + p.done + ' of ' + p.total + ' entries done' + (extra.length ? ' · missing ' + extra.join('; ') : '');
    try { localStorage.setItem(D.storeKey, JSON.stringify(rec)); } catch (e) { /* private mode: the page still works */ }
    return { rec, p };
  }
  document.addEventListener('input', update); document.addEventListener('change', update);
  document.getElementById('kx-download').addEventListener('click', function () {
    const { rec, p } = update();
    if (!p.complete && !confirm('The record is not complete yet (' + p.done + ' of ' + p.total + '). Download anyway to continue later?')) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(rec, null, 2) + '\\n'], { type: 'application/json' }));
    a.download = D.form + '-' + (rec.reviewer.slot || 'draft') + '.json';
    document.body.appendChild(a); a.click(); a.remove();
  });
  document.getElementById('kx-load').addEventListener('change', function (e) {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(function (t) {
      let rec; try { rec = JSON.parse(t); } catch (err) { alert('This file is not a valid record.'); return; }
      if (rec.content_sha256 !== D.template.content_sha256) { alert('This record belongs to a different version of the form and cannot be resumed here.'); return; }
      write(rec); update();
    });
  });
  try { const saved = localStorage.getItem(D.storeKey); if (saved) write(JSON.parse(saved)); } catch (e) { /* nothing saved */ }
  update();
})();
</script></body></html>`;
}

export function writeReviewForms(outDir, names = [], { modules = REVIEW_MODULES } = {}) {
  const dir = path.resolve(outDir);
  if (dir === REPO || dir.startsWith(REPO + path.sep)) throw new Error('refusing to write review forms inside the repository (they contain keys)');
  if (!modules.length || modules.some((m) => !REVIEW_MODULES.includes(m))) throw new Error(`unknown module in ${modules.join(',')} (${REVIEW_MODULES.join('|')})`);
  fs.mkdirSync(dir, { recursive: true });
  const forms = PRACTICE_FORMS.filter((f) => !names.length || names.includes(f.name.toLowerCase()));
  const suffix = modules.length < REVIEW_MODULES.length ? `-${modules.join('-')}` : '';
  for (const f of forms) fs.writeFileSync(path.join(dir, `${f.name}-review-form${suffix}.html`), reviewFormHtml(f, { modules }));
  return forms.map((f) => f.name);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2);
  const mi = a.indexOf('--module');
  const modules = mi >= 0 ? String(a[mi + 1] || '').split(',').filter(Boolean) : REVIEW_MODULES;
  const [out, ...names] = a.filter((x, i) => !(mi >= 0 && (i === mi || i === mi + 1)));
  if (!out || out.startsWith('--')) { console.error('usage: review-form.mjs <out-dir outside the repo> [--module lesen] [p3 …]'); process.exit(2); }
  try { console.log(JSON.stringify({ written: writeReviewForms(out, names.map((n) => n.toLowerCase()), { modules }), modules, dir: path.resolve(out) })); }
  catch (e) { console.error(`review-form: ${e.message}`); process.exit(1); }
}
