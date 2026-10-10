/* Pure string renderers (no DOM access) — testable in Node. All content is
   escaped; every control has a programmatic label; examples are read-only. */
import { formatRemaining } from './clock.js';
import { countWords } from './wordcount.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const idSafe = (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '_');

export const MODULE_LABELS = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };
export const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
export const RESULT_TITLE = 'KLARWEG B1 SIMULATION — TEST RESULT';

export function paragraphs(md) {
  return String(md || '').split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
}

export function testBanner(pkg) {
  return pkg && pkg.test_content ? '<p class="kx-banner" role="note">SYNTHETISCHER SYSTEMTEST — keine echte Prüfungsaufgabe. TEST AUDIO = Prüftöne.</p>' : '';
}

export function header({ module, remainingMs, saveState }) {
  const save = { saved: 'Gespeichert', pending: 'Änderungen …', saving: 'Speichert …', offline: 'Offline — wird erneut versucht', stopped: 'Speichern gestoppt' }[saveState] || '';
  return `<header class="kx-head"><h1 class="kx-title">${esc(MODULE_LABELS[module] || module)}</h1>`
    + `<p class="kx-save" aria-live="polite">${esc(save)}</p>`
    + `<p class="kx-timer" role="timer" aria-label="Verbleibende Zeit">${esc(formatRemaining(remainingMs))}</p></header>`;
}

function choice(it, value, disabled) {
  const name = `i_${idSafe(it.item_id)}`;
  const opts = (it.options || []).map((o) => {
    const id = `${name}_${idSafe(o.option_id)}`;
    const checked = value && value.option_id === o.option_id ? ' checked' : '';
    return `<label class="kx-opt" for="${id}"><input type="radio" id="${id}" name="${name}" value="${esc(o.option_id)}" data-item="${esc(it.item_id)}"${checked}${disabled ? ' disabled' : ''}>`
      + `<span class="kx-opt-label">${esc(o.label)}</span>${o.text ? ` <span class="kx-opt-text">${esc(o.text)}</span>` : ''}</label>`;
  }).join('');
  return `<fieldset class="kx-item${it.is_example ? ' kx-example' : ''}" id="item-${idSafe(it.item_id)}"><legend>${it.is_example ? '<span class="kx-ex">Beispiel</span> ' : ''}${esc(it.stem)}</legend><div class="kx-opts">${opts}</div></fieldset>`;
}

function matching(it, value, disabled) {
  const id = `i_${idSafe(it.item_id)}`;
  const opts = ['<option value="">– bitte wählen –</option>'].concat((it.options || []).map((o) => `<option value="${esc(o.option_id)}"${value && value.option_id === o.option_id ? ' selected' : ''}>${esc(o.label)}</option>`)).join('');
  return `<div class="kx-item kx-match${it.is_example ? ' kx-example' : ''}" id="item-${idSafe(it.item_id)}"><label for="${id}">${it.is_example ? '<span class="kx-ex">Beispiel</span> ' : ''}${esc(it.stem)}</label>`
    + `<select id="${id}" data-item="${esc(it.item_id)}"${disabled ? ' disabled' : ''}>${opts}</select></div>`;
}

function writing(it, value) {
  const id = `i_${idSafe(it.item_id)}`;
  const text = (value && value.text) || '';
  const target = it.response_spec && it.response_spec.target_words;
  return `<div class="kx-item kx-writing" id="item-${idSafe(it.item_id)}"><label for="${id}" class="kx-wlabel">${esc(it.stem)}${target ? ` <span class="kx-meta">(ca. ${esc(target)} Wörter)</span>` : ''}</label>`
    + `<div class="kx-chars" role="group" aria-label="Sonderzeichen einfügen">${UMLAUTS.map((c) => `<button type="button" class="kx-char" data-insert="${c}" data-target="${id}" aria-label="${c} einfügen">${c}</button>`).join('')}</div>`
    + `<textarea id="${id}" data-item="${esc(it.item_id)}" lang="de" spellcheck="false" autocomplete="off" autocapitalize="sentences" rows="10" aria-describedby="${id}_wc">${esc(text)}</textarea>`
    + `<p class="kx-wc" id="${id}_wc" aria-live="polite"><span data-wc-for="${id}">${countWords(text)}</span> Wörter</p></div>`;
}

function speaking(it, _value, _disabled, ctx = {}) {
  const turns = (it.response_spec && it.response_spec.turns) || [];
  const st = ctx.turnStatus || {};
  return `<section class="kx-item kx-speak" id="item-${idSafe(it.item_id)}" aria-label="${esc(it.stem)}"><h3>${esc(it.stem)}</h3><ol class="kx-turns">`
    + turns.map((t) => `<li><span>Gesprächsbeitrag ${esc(t.turn.slice(1))} · max. ${esc(t.seconds)} s</span> <span class="kx-turn-status" data-turn="${esc(it.item_id)}:${esc(t.turn)}">${esc(st[`${it.item_id}:${t.turn}`] || 'offen')}</span></li>`).join('')
    + '</ol></section>';
}

const DEFAULT_RENDERERS = { binary_choice: choice, mcq_single: choice, speaker_assignment: choice, topic_choice: choice, matching_pool: matching, text_response: writing, spoken_response: speaking };

export function createRenderer(extra = {}) {
  const registry = { ...DEFAULT_RENDERERS, ...extra };
  /* ctx.locked: Set of item ids that are read-only now (e.g. the Sprechen topic choice after the preparation). */
  function item(it, answers, ctx = {}) {
    const fn = registry[it.interaction];
    if (!fn) return `<p class="kx-error">Nicht unterstützter Aufgabentyp: ${esc(it.interaction)}</p>`;
    const value = it.is_example ? { option_id: it.example_answer } : answers[it.item_id];
    return fn(it, value, !!it.is_example || !!(ctx.locked && ctx.locked.has(it.item_id)), ctx);
  }
  function stimulus(s) {
    if (s.kind === 'text') return `<article class="kx-stim">${s.label ? `<h3 class="kx-stim-label">${esc(s.label)}</h3>` : ''}${paragraphs(s.text)}</article>`;
    if (s.kind === 'audio') return `<p class="kx-audio-label"><span class="kx-meta">${esc(s.label || 'Audio')}</span></p>`;
    if (s.kind === 'image') return `<p class="kx-meta">${esc(s.label || 'Bild')}</p>`;
    return '';
  }
  function part(p, answers = {}, ctx = {}) {
    return `<section class="kx-part" data-part="${esc(p.part)}" aria-labelledby="part-${esc(p.part)}"><h2 id="part-${esc(p.part)}">Teil ${esc(p.part)}</h2>`
      + p.tasks.map((t) => `<div class="kx-task">${t.instructions ? `<div class="kx-instr">${paragraphs(t.instructions)}</div>` : ''}`
        + t.stimuli.filter((s) => !(s.kind === 'text' && t.instructions && String(s.text || '').trim() === t.instructions.trim())).map(stimulus).join('') + t.items.map((it) => item(it, answers, ctx)).join('') + '</div>').join('')
      + '</section>';
  }
  /* Renders only the parts present in the package. For Hören the server sends
     only the parts that have opened (OD-02), so future parts never reach the DOM. */
  function module(pkg, answers = {}, ctx = {}) {
    return testBanner(pkg) + pkg.parts.map((p) => part(p, answers, ctx)).join('');
  }
  return { module, part, item, registry };
}

export function resultPage(result) {
  const rows = result.modules.map((m) => {
    const pts = m.status === 'final' ? `${esc(m.points)} / ${esc(m.max_points)}` : '–';
    const verdict = m.status === 'final' ? (m.pass ? 'bestanden' : 'nicht bestanden') : m.status === 'not_taken' ? 'nicht abgelegt' : 'in Bewertung';
    return `<tr><th scope="row">${esc(MODULE_LABELS[m.module] || m.module)}</th><td>${pts}</td><td>${esc(verdict)}${m.predikat && m.status === 'final' ? ` · ${esc(m.predikat)}` : ''}</td><td>${esc(m.note || '')}</td></tr>`;
  }).join('');
  return `<main class="kx-result" aria-labelledby="kx-result-title"><p class="kx-eyebrow">${result.test_content ? 'Systemtest · synthetische Inhalte' : 'Simulation'}</p>`
    + `<h1 id="kx-result-title">${esc(RESULT_TITLE)}</h1>`
    + `<table class="kx-table"><caption>Ergebnisse je Modul (kein Gesamtergebnis)</caption><thead><tr><th scope="col">Modul</th><th scope="col">Punkte</th><th scope="col">Status</th><th scope="col">Hinweis</th></tr></thead><tbody>${rows}</tbody></table>`
    + `<p class="kx-disclaimer">${esc(result.disclaimer)}</p></main>`;
}
