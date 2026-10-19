/* Pure string renderers (no DOM access) — testable in Node. All content is
   escaped; every control has a programmatic label; examples are read-only. */
import { formatRemaining } from './clock.js';
import { countWords } from './wordcount.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const idSafe = (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '_');

export const MODULE_LABELS = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };
export const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
/* OD-45 (LOCKED): student-facing title and mandatory disclaimer; never "Goethe score / Goethe-Ergebnis". */
export const RESULT_TITLE = 'Klarweg B1 Simulation – Ergebnis';
export const RESULT_DISCLAIMER = 'Klarweg-Simulation – kein offizielles Ergebnis des Goethe-Instituts.';

export function paragraphs(md) {
  return String(md || '').split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
}

export function testBanner(pkg) {
  if (!pkg || !pkg.test_content) return '';
  const adjusted = pkg.timing && pkg.timing.adjusted ? ' Verkürzte Übungszeiten – nicht die Zeiten der Prüfung.' : '';
  return `<p class="kx-banner" role="note">SYNTHETISCHE ÜBUNGSINHALTE — keine echte Prüfung. Hörtexte werden als Prüftöne abgespielt.${adjusted}</p>`;
}

/* What a screen reader should hear about saving: only trouble and the recovery from it, never the routine
   "Speichert … / Gespeichert" after each pause. Announced in the persistent #kx-announce status region. */
export function saveAnnouncement(prev, next) {
  if (next === prev) return null;
  if (next === 'offline') return 'Speichern zurzeit nicht möglich. Es wird automatisch erneut versucht.';
  if (next === 'stopped') return 'Speichern gestoppt. Ihre letzten Änderungen wurden nicht gespeichert.';
  if (next === 'saved' && prev === 'offline') return 'Wieder verbunden. Alle Antworten sind gespeichert.';
  return null;
}

/* What the learner is told when an action fails ({ code, status } from ExamApiError; no status = network). Only a
   network or server failure is described as an interrupted connection, because only then can answers still be waiting
   in the local queue. States that end the attempt here (finished elsewhere, voided, no access) say so plainly instead of
   offering a reconnect that cannot succeed. actions: [{ act, label }]. */
export function errorView({ code = 'network', status = 0 } = {}) {
  const overview = { act: 'reload', label: 'Zur Übersicht' };
  switch (code) {
    case 'lease_superseded': return { title: 'In einem anderen Fenster geöffnet', body: 'Diese Prüfung wird in einem anderen Tab oder auf einem anderen Gerät fortgesetzt.', actions: [{ act: 'takeover', label: 'Hier fortsetzen' }] };
    case 'auth_required': return { title: 'Bitte anmelden', body: 'Melden Sie sich bei Klarweg an, um fortzufahren.', actions: [] };
    // the probe showed that the browser does not send the sign-in cookie to the exam server (third-party cookies blocked)
    case 'cookies_blocked': return { title: 'Cookies blockiert', body: 'Ihr Browser blockiert die Cookies, die der Prüfungsbereich für die Anmeldung braucht (Cookies von Drittanbietern). Erlauben Sie in den Browser-Einstellungen Cookies für Klarweg oder verwenden Sie einen anderen Browser, und laden Sie die Seite dann neu.', actions: [{ act: 'reload', label: 'Erneut versuchen' }] };
    case 'attempt_closed': return { title: 'Prüfung bereits abgeschlossen', body: 'Diese Prüfung wurde bereits abgeschlossen, zum Beispiel in einem anderen Tab. Das Ergebnis finden Sie in der Übersicht.', actions: [overview] };
    case 'attempt_voided': return { title: 'Versuch ungültig', body: 'Dieser Versuch wurde für ungültig erklärt und kann nicht fortgesetzt werden.', actions: [overview] };
    case 'exam_access_required': case 'mode_disabled': return { title: 'Nicht verfügbar', body: 'Der Prüfungsbereich ist für Ihr Konto derzeit nicht freigeschaltet.', actions: [overview] };
    case 'rate_limited': return { title: 'Bitte kurz warten', body: 'Es wurden in kurzer Zeit zu viele Anfragen gesendet. Bereits gespeicherte Antworten bleiben erhalten. Versuchen Sie es in einer Minute erneut.', actions: [{ act: 'reload', label: 'Erneut versuchen' }] };
  }
  // an expired lease that could not be renewed automatically (e.g. no connection meanwhile): a reload renews it
  if (code === 'network' || code === 'lease_expired' || !status || status >= 500) return { title: 'Verbindung unterbrochen', body: `Ihre Antworten sind gespeichert oder lokal gesichert. (${code})`, actions: [{ act: 'reload', label: 'Erneut verbinden' }] };
  return { title: 'Aktion nicht möglich', body: `Diese Aktion konnte nicht ausgeführt werden. Bereits gespeicherte Antworten bleiben erhalten. (${code})`, actions: [{ act: 'reload', label: 'Seite neu laden' }] };
}

export function header({ module, remainingMs, saveState, progress = null }) {
  const save = { saved: 'Gespeichert', pending: 'Änderungen …', saving: 'Speichert …', offline: 'Offline — wird erneut versucht', stopped: 'Speichern gestoppt' }[saveState] || '';
  const total = progress ? progress.reduce((n, p) => n + p.total, 0) : 0;
  const done = progress ? progress.reduce((n, p) => n + p.answered, 0) : 0;
  return `<header class="kx-head"><h1 class="kx-title">${esc(MODULE_LABELS[module] || module)}</h1>`
    + (total ? `<p class="kx-progress" data-progress-total>${done} von ${total} beantwortet</p>` : '')
    + `<p class="kx-save">${esc(save)}</p>`   // visual only: the header is redrawn, so problems are announced via #kx-announce (saveAnnouncement)
    + `<p class="kx-timer" role="timer" aria-label="Verbleibende Zeit">${esc(formatRemaining(remainingMs))}</p></header>`;
}

/* Example items already get a visible "Beispiel" label, so a leading "Beispiel:" in their stem is dropped to avoid
   "Beispiel Beispiel: …". Non-example stems are returned unchanged. The caller still escapes the result. */
export function displayStem(it) {
  const stem = String(it.stem ?? '');
  return it.is_example ? stem.replace(/^\s*Beispiel:\s*/, '') : stem;
}

function choice(it, value, disabled) {
  const name = `i_${idSafe(it.item_id)}`;
  const opts = (it.options || []).map((o) => {
    const id = `${name}_${idSafe(o.option_id)}`;
    const checked = value && value.option_id === o.option_id ? ' checked' : '';
    return `<label class="kx-opt" for="${id}"><input type="radio" id="${id}" name="${name}" value="${esc(o.option_id)}" data-item="${esc(it.item_id)}"${checked}${disabled ? ' disabled' : ''}>`
      + `<span class="kx-opt-label">${esc(o.label)}</span>${o.text ? ` <span class="kx-opt-text">${esc(o.text)}</span>` : ''}</label>`;
  }).join('');
  return `<fieldset class="kx-item${it.is_example ? ' kx-example' : ''}" id="item-${idSafe(it.item_id)}"><legend>${it.is_example ? '<span class="kx-ex">Beispiel</span> ' : ''}${esc(displayStem(it))}</legend><div class="kx-opts">${opts}</div></fieldset>`;
}

function matching(it, value, disabled) {
  const id = `i_${idSafe(it.item_id)}`;
  const opts = ['<option value="">– bitte wählen –</option>'].concat((it.options || []).map((o) => `<option value="${esc(o.option_id)}"${value && value.option_id === o.option_id ? ' selected' : ''}>${esc(o.label)}</option>`)).join('');
  return `<div class="kx-item kx-match${it.is_example ? ' kx-example' : ''}" id="item-${idSafe(it.item_id)}"><label for="${id}">${it.is_example ? '<span class="kx-ex">Beispiel</span> ' : ''}${esc(displayStem(it))}</label>`
    + `<select id="${id}" data-item="${esc(it.item_id)}"${disabled ? ' disabled' : ''}>${opts}</select></div>`;
}

function writing(it, value) {
  const id = `i_${idSafe(it.item_id)}`;
  const text = (value && value.text) || '';
  const target = it.response_spec && it.response_spec.target_words;
  return `<div class="kx-item kx-writing" id="item-${idSafe(it.item_id)}"><label for="${id}" class="kx-wlabel">${esc(it.stem)}${target ? ` <span class="kx-meta">(ca. ${esc(target)} Wörter)</span>` : ''}</label>`
    + `<div class="kx-chars" role="group" aria-label="Sonderzeichen einfügen">${UMLAUTS.map((c) => `<button type="button" class="kx-char" data-insert="${c}" data-target="${id}" aria-label="${c} einfügen">${c}</button>`).join('')}</div>`
    + `<textarea id="${id}" data-item="${esc(it.item_id)}" lang="de" spellcheck="false" autocomplete="off" autocapitalize="sentences" rows="10" aria-describedby="${id}_wc">${esc(text)}</textarea>`
    + `<p class="kx-wc" id="${id}_wc"><span data-wc-for="${id}">${countWords(text)}</span> Wörter</p></div>`;   // read with the textarea (aria-describedby), not on every keystroke
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

/* Part navigation for a module page: one link per part present, with its answered count. */
export function moduleNav(progress) {
  if (!progress || progress.length < 2 || !progress.some((p) => p.total)) return '';
  return `<nav class="kx-nav" aria-label="Teile dieses Moduls"><ol>${progress.map((p) => `<li><a href="#part-${esc(p.part)}">Teil ${esc(p.part)}`
    + (p.total ? ` <span class="kx-nav-count" data-progress-part="${esc(p.part)}">${p.answered}/${p.total}</span>` : '') + '</a></li>').join('')}</ol></nav>`;
}

/* In-page review before the final module submission (replaces a browser confirm dialog). The module page stays in
   place underneath — the timer and, in Hören, the playback keep running. */
export function reviewPanel(progress) {
  const total = progress.reduce((n, p) => n + p.total, 0), done = progress.reduce((n, p) => n + p.answered, 0), open = total - done;
  const summary = !total ? 'In diesem Modul gibt es keine Aufgaben zum Ankreuzen.'
    : open ? `${open} von ${total} Aufgaben sind noch ohne Antwort.` : `Alle ${total} Aufgaben sind beantwortet.`;
  const parts = progress.filter((p) => p.total).map((p) => {
    const missing = p.items.filter((r) => !r.answered);
    const writing = p.items.filter((r) => r.interaction === 'text_response')
      .map((r) => `<li>Text: ${esc(r.words)} Wörter${r.target_words ? ` (Ziel ca. ${esc(r.target_words)})` : ''}</li>`).join('');
    return `<li><span class="kx-review-part">Teil ${esc(p.part)}: ${p.answered} von ${p.total} beantwortet</span>`
      + (missing.length ? `<span class="kx-review-open"> · ohne Antwort: ${missing.map((r) => `<a href="#item-${idSafe(r.item_id)}" data-review-jump>Aufgabe ${esc(r.no)}</a>`).join(', ')}</span>` : '')
      + (writing ? `<ul class="kx-review-words">${writing}</ul>` : '') + '</li>';
  }).join('');
  return `<section class="kx-review" id="kx-review" aria-labelledby="kx-review-title"><h2 id="kx-review-title" tabindex="-1">Abgabe prüfen</h2>`
    + `<p class="kx-review-summary">${esc(summary)}</p>${parts ? `<ul class="kx-review-list">${parts}</ul>` : ''}`
    + '<p class="kx-meta">Nach der Abgabe sind keine Änderungen mehr möglich. Die Zeit läuft weiter.</p>'
    + '<div class="kx-actions"><button type="button" class="kx-btn kx-btn-quiet" data-act="review-close">Weiter bearbeiten</button>'
    + '<button type="button" class="kx-btn" data-act="submit-confirm">Endgültig abgeben</button></div></section>';
}

/* Item review after submission (server data only: GET …/modules/<m>/review). Numbers as shown in the test. */
const REVIEW_STATUS = { correct: 'richtig', incorrect: 'falsch', unanswered: 'ohne Antwort' };
const answerText = (a) => (a ? `${a.label}${a.text ? ` – ${a.text}` : ''}` : '–');
/* The learner's completed practices, newest first: date, form, per-module result, and a way back into each result. */
const MODULE_ORDER = ['lesen', 'hoeren', 'schreiben', 'sprechen'];
export function attemptHistory(list, formatDate = (ms) => new Date(ms).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })) {
  const rows = (list.attempts || []).map((a) => {
    const cell = (mod) => {
      const m = (a.modules || []).find((x) => x.module === mod);
      if (!m || m.status === 'not_taken') return '–';
      return m.status === 'final' ? `${esc(m.points)} / ${esc(m.max_points)}` : 'in Bewertung';
    };
    return `<tr><th scope="row">${esc(formatDate(a.completed_at))}</th><td>${esc(a.form_label)}</td>${MODULE_ORDER.map((mod) => `<td>${cell(mod)}</td>`).join('')}`
      + `<td><button type="button" class="kx-btn-quiet" data-act="last-result" data-attempt="${esc(a.attempt_id)}">Ergebnis ansehen</button></td></tr>`;
  }).join('');
  if (!rows) return '';
  return '<section class="kx-history" aria-labelledby="kx-history-title"><h2 id="kx-history-title">Ihre bisherigen Übungen</h2>'
    + `<div class="kx-table-wrap"><table class="kx-table"><caption>Abgeschlossene Übungen (neueste zuerst)</caption><thead><tr><th scope="col">Datum</th><th scope="col">Übung</th>`
    + MODULE_ORDER.map((mod) => `<th scope="col">${esc(MODULE_LABELS[mod])}</th>`).join('') + '<th scope="col"><span class="kx-sr">Aktion</span></th></tr></thead>'
    + `<tbody>${rows}</tbody></table></div></section>`;
}

/* The learner's own Sprechen recordings after submission: each is loaded only on request (no autoplay). */
export function recordingsSection(list) {
  const rows = (list.recordings || []).map((r) => `<li class="kx-rec-row"><span>Teil ${esc(r.part)}, Beitrag ${esc(String(r.turn).replace(/^t/, ''))}`
    + `${r.duration_ms ? ` · ${esc(Math.round(r.duration_ms / 1000))} s` : ''}${r.complete ? '' : ' · unvollständig übertragen'}</span>`
    + (r.available ? `<span class="kx-play-cell"><button type="button" class="kx-btn kx-btn-quiet" data-act="my-recording" data-part="${esc(r.part)}" data-turn="${esc(r.turn)}">Anhören</button></span>`
      : '<span class="kx-meta">nicht mehr verfügbar</span>') + '</li>').join('');
  return `<section class="kx-my-recordings" aria-labelledby="rv-rec"><h2 id="rv-rec">Sprechen: Ihre Aufnahmen</h2>`
    + (rows ? `<ul class="kx-queue">${rows}</ul>` : '<p>Es sind keine Aufnahmen verfügbar.</p>') + '</section>';
}

const num = (x) => String(x).replace('.', ',');
const PRON_LABEL = 'Aussprache (ganze Prüfung)';
/* Rated feedback for a FINAL Schreiben/Sprechen module: mean points of the two ratings per criterion and task. */
export function ratedFeedback(module, fb, criterionLabels = {}) {
  const label = MODULE_LABELS[module] || module;
  const units = fb.units.map((u) => {
    const title = u.part ? `${label} Teil ${esc(u.part)}` : PRON_LABEL;
    const rows = u.criteria.map((c) => `<tr><th scope="row">${esc(criterionLabels[c.criterion] || c.criterion)}</th><td>${esc(num(c.points))} / ${esc(num(c.max))}</td></tr>`).join('');
    const text = u.text != null ? `<details class="kx-transcripts"><summary>Ihr Text (${esc(u.words)} Wörter${u.target_words ? `, Ziel ca. ${esc(u.target_words)}` : ''})</summary><p class="kx-written" lang="de">${esc(u.text).replace(/\n/g, '<br>')}</p></details>` : '';
    return `<div class="kx-table-wrap"><table class="kx-table"><caption>${title}: ${esc(num(u.total))} / ${esc(num(u.max))} Punkte</caption>`
      + `<thead><tr><th scope="col">Kriterium</th><th scope="col">Punkte</th></tr></thead><tbody>${rows}</tbody></table></div>`
      + (u.zero_rule ? '<p class="kx-meta">Die Aufgabe wurde nicht erfüllt (Erfüllung E): Diese Bewertung zählt mit 0 Punkten.</p>' : '') + text;
  }).join('');
  return `<section class="kx-rated" aria-labelledby="rv-fb-${esc(module)}"><h2 id="rv-fb-${esc(module)}">${esc(label)}: Bewertung je Teil</h2>`
    + '<p>Mittelwert aus zwei unabhängigen Bewertungen.</p>' + units + '</section>';
}

export function itemReview(module, review) {
  const s = review.summary;
  const rows = review.items.map((it) => `<tr class="kx-rv-${esc(it.status)}"><th scope="row">${esc(it.display_no)}</th><td>${esc(answerText(it.your_answer))}</td>`
    + `<td>${esc(answerText(it.correct_answer))}</td><td><span class="kx-rv-status">${esc(REVIEW_STATUS[it.status] || it.status)}</span></td>`
    + `<td>${esc(it.points)} / ${esc(it.max_points)}</td></tr>`
    + (it.explanation ? `<tr class="kx-rv-explain"><td colspan="5">${esc(it.explanation)}${(it.evidence || []).map((e) => ` <q>${esc(e.text)}</q>`).join('')}</td></tr>` : '')).join('');
  const label = MODULE_LABELS[module] || module;
  // listening scripts, released by the server only with the review (after this module was submitted)
  const scripts = (review.transcripts || []).length
    ? `<details class="kx-transcripts"><summary>Hörtexte zum Nachlesen (${esc(review.transcripts.length)})</summary>`
      + review.transcripts.map((t) => `<h3>Teil ${esc(t.part)}</h3>${paragraphs(t.text)}`).join('') + '</details>' : '';
  const parts = [...new Set(review.items.map((it) => it.part))].map((p) => {
    const its = review.items.filter((it) => it.part === p);
    return `Teil ${esc(p)}: ${esc(its.filter((it) => it.status === 'correct').length)} von ${esc(its.length)}`;
  }).join(' · ');
  return `<section class="kx-review-items" aria-labelledby="rv-${esc(module)}"><h2 id="rv-${esc(module)}">${esc(label)}: Ihre Antworten</h2>`
    + `<p>richtig ${esc(s.correct)} · falsch ${esc(s.incorrect)} · ohne Antwort ${esc(s.unanswered)} (von ${esc(s.total)})</p>`
    + (parts ? `<p class="kx-meta kx-rv-parts">${parts}</p>` : '')
    + `<div class="kx-table-wrap"><table class="kx-table"><caption>${esc(label)}: Antworten je Aufgabe</caption><thead><tr><th scope="col">Nr.</th><th scope="col">Ihre Antwort</th>`
    + `<th scope="col">Lösung</th><th scope="col">Ergebnis</th><th scope="col">Punkte</th></tr></thead><tbody>${rows}</tbody></table></div>${scripts}</section>`;
}

const RESULT_NOTES = { pending_rating: 'Wartet auf zwei unabhängige Bewertungen.', pending_rule: 'Bewertet; die Punkteregel ist noch nicht festgelegt.' };
export function resultPage(result) {
  const rows = result.modules.map((m) => {
    const pts = m.status === 'final' ? `${esc(m.points)} / ${esc(m.max_points)}` : '–';
    const verdict = m.status === 'final' ? (m.pass ? 'bestanden' : 'nicht bestanden') : m.status === 'not_taken' ? 'nicht abgelegt' : 'in Bewertung';
    const band = m.status === 'final' && m.predikat && m.predikat !== verdict ? ` · ${esc(m.predikat)}` : '';
    const counts = m.counts ? `richtig ${esc(m.counts.correct)} · falsch ${esc(m.counts.incorrect)} · ohne Antwort ${esc(m.counts.unanswered)}` : '';
    const note = RESULT_NOTES[m.status] || '';
    return `<tr><th scope="row">${esc(MODULE_LABELS[m.module] || m.module)}</th><td>${pts}</td><td>${esc(verdict)}${band}</td><td>${[counts, esc(note)].filter(Boolean).join('<br>')}</td></tr>`;
  }).join('');
  return `<main class="kx-result" aria-labelledby="kx-result-title"><p class="kx-eyebrow">${result.test_content ? 'Übung · synthetische Inhalte' : 'Simulation'}</p>`
    + `<h1 id="kx-result-title">${esc(RESULT_TITLE)}</h1>`
    + `<table class="kx-table"><caption>Ergebnisse je Modul (kein Gesamtergebnis)</caption><thead><tr><th scope="col">Modul</th><th scope="col">Punkte</th><th scope="col">Status</th><th scope="col">Details</th></tr></thead><tbody>${rows}</tbody></table>`
    + `<p class="kx-disclaimer">${esc(RESULT_DISCLAIMER)} Die Module werden einzeln ausgewiesen; es gibt kein Gesamtergebnis.</p></main>`;
}
