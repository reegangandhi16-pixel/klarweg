/* Rater screen for Schreiben / Sprechen. Thin client over the existing staff API: the server decides who may rate
   (rater / lead_rater role, never one's own attempt, one rater per round, no duplicate round, module submitted) and
   validates every band. This page only renders what /admin/… returns and posts one rating per rubric unit. */
import { createApi, ExamApiError } from './api.js';
import { esc } from './render.js';
import { ratingRound, unitRatedByMe, missingCriteria, CRITERION_LABELS, ERROR_TEXT } from './rating.js';

const $ = (s, r = document) => r.querySelector(s);
const app = $('#kx-app');
const api = createApi({ base: (document.querySelector('meta[name="kw-exam-api"]') || {}).content || '' });
const MODULE_LABELS = { schreiben: 'Schreiben', sprechen: 'Sprechen' };
const STATUS = { pending_rating: 'wartet auf Bewertung', pending_rule: 'bewertet – Punkteregel offen', final: 'abgeschlossen' };
const points = (n) => String(n).replace('.', ',');
let current = null;
let renderSeq = 0;   // overlapping saves re-render out of order: only the latest started render may paint

const audioUrls = [];   // object URLs of loaded recordings, released on every re-render
function screen(html) { for (const u of audioUrls.splice(0)) URL.revokeObjectURL(u); app.innerHTML = html; const h = app.querySelector('h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
function errorText(e) { const code = e instanceof ExamApiError ? e.code : 'network'; return ERROR_TEXT[code] || `Fehler (${code}).`; }

async function showQueue(note = '') {
  let q;
  try { q = await api.ratingQueue(); } catch (e) { return screen(`<main class="kx-card"><h1>Bewertung</h1><p class="kx-error" role="alert">${esc(errorText(e))}</p></main>`); }
  const rows = q.attempts.map((a) => `<li class="kx-queue-row"><span class="kx-meta">${esc(a.attempt_id.slice(0, 12))}…</span> `
    + a.modules.map((m) => `${esc(MODULE_LABELS[m.module])}: ${esc(STATUS[m.score_status] || m.score_status)}${m.my_rounds.length ? ` (Sie: Runde ${esc(m.my_rounds.join(', '))})` : ''}`).join(' · ')
    + ` <button type="button" class="kx-btn kx-btn-quiet" data-act="open" data-attempt="${esc(a.attempt_id)}">Öffnen</button></li>`).join('');
  screen(`<main class="kx-rater"><p class="kx-eyebrow">Nur für Bewertende · synthetische Versuche</p><h1>Bewertung</h1>`
    + (note ? `<p class="kx-announce" role="status">${esc(note)}</p>` : '')
    + (rows ? `<ul class="kx-queue">${rows}</ul>` : '<p>Keine Versuche warten auf Bewertung.</p>') + '</main>');
}

function unitForm(u, round, data) {
  const mine = unitRatedByMe(u, round);
  const crit = Object.entries(u.criteria).map(([c, values]) => {
    const id = `b_${u.item_id.replace(/[^a-z0-9]/gi, '_')}_${c}`;
    const opts = ['<option value="">– Band wählen –</option>'].concat(values.map((v, i) => `<option value="${data.bands[i]}">${data.bands[i]} (${points(v)} P.)</option>`)).join('');
    return `<div class="kx-item"><label for="${id}">${esc(CRITERION_LABELS[c] || c)}</label><select id="${id}" data-crit="${esc(c)}" required${mine ? ' disabled' : ''}>${opts}</select></div>`;
  }).join('');
  const title = u.item_id === 'sprechen:pron' ? 'Aussprache (ganzes Modul)' : `Teil ${esc(u.part)}${u.stem ? ` – ${esc(u.stem)}` : ''}`;
  return `<form class="kx-task kx-rate" data-unit="${esc(u.item_id)}" novalidate><fieldset class="kx-item"><legend>${title}</legend>${crit}`
    + (u.zero_rule === 'erfuellung_E' ? '<p class="kx-meta">Erfüllung E → Aufgabe insgesamt 0 Punkte.</p>' : '')
    + `<p class="kx-rate-msg" role="status" aria-live="polite">${mine ? `Von Ihnen bewertet (Runde ${esc(round)}).` : ''}</p>`
    + `<div class="kx-actions"><button type="submit" class="kx-btn"${mine ? ' disabled' : ''}>Bewertung speichern</button></div></fieldset></form>`;
}

async function showAttempt(attemptId, note = '') {
  const seq = ++renderSeq;
  let d;
  try { d = await api.productive(attemptId); } catch (e) { if (seq === renderSeq) showQueue(errorText(e)); return; }
  if (seq !== renderSeq) return;   // a later render has fresher data; never paint an older state over it
  current = d;
  const parts = d.modules.map((m) => {
    const units = d.units.filter((u) => u.module === m.module);
    const round = ratingRound(d, m.module);
    const status = m.status !== 'submitted' ? 'noch nicht abgegeben' : STATUS[m.score_status] || 'wartet auf Bewertung';
    const material = m.module === 'schreiben'
      ? d.writing.map((w) => `<article class="kx-stim"><h3 class="kx-stim-label">${esc((units.find((u) => u.item_id === w.item_id) || {}).stem || w.item_id)}</h3>`
        + `<p class="kx-meta">${esc(w.words)} Wörter${w.target_words ? ` (Ziel ca. ${esc(w.target_words)})` : ''}${w.below_half_target ? ' · unter der Hälfte des Ziels' : ''}</p>`
        + `<p class="kx-written" lang="de">${esc(w.text).replace(/\n/g, '<br>')}</p></article>`).join('') || '<p>Kein Text abgegeben.</p>'
      : `<div class="kx-table-wrap"><table class="kx-table"><caption>Aufnahmen</caption><thead><tr><th scope="col">Teil</th><th scope="col">Beitrag</th><th scope="col">Status</th><th scope="col">Dauer</th><th scope="col">Anhören</th></tr></thead><tbody>`
        + d.recordings.map((r) => `<tr><td>${esc(r.part)}</td><td>${esc(r.turn)}</td><td>${esc(r.status)}</td><td>${r.duration_ms ? esc(Math.round(r.duration_ms / 1000)) + ' s' : '–'}</td>`
          + `<td class="kx-play-cell">${m.status === 'submitted' && r.chunks > 0 ? `<button type="button" class="kx-btn kx-btn-quiet" data-act="play" data-part="${esc(r.part)}" data-turn="${esc(r.turn)}">Aufnahme laden</button>` : '–'}</td></tr>`).join('')
        + '</tbody></table></div><p class="kx-meta">Fehlende Teile einer Aufnahme sind technische Lücken, kein Schweigen.</p>';
    const forms = m.status === 'submitted' && m.score_status !== 'final'
      ? `<p>Ihre Runde: <strong>${esc(round)}</strong></p>${units.map((u) => unitForm(u, round, d)).join('')}` : '';
    return `<section class="kx-part" data-module="${esc(m.module)}"><h2>${esc(MODULE_LABELS[m.module])}</h2><p class="kx-rate-status">Status: ${esc(status)}`
      + `${m.points != null ? ` · ${esc(m.points)} / ${esc(m.max_points)} Punkte` : ''}</p>${material}${forms}</section>`;
  }).join('');
  screen(`<main class="kx-rater"><p class="kx-eyebrow">Versuch ${esc(d.attempt_id.slice(0, 12))}… · synthetisch</p><h1>Bewertung</h1>`
    + (note ? `<p class="kx-announce" role="status">${esc(note)}</p>` : '')
    + `${parts}<div class="kx-actions"><button type="button" class="kx-btn kx-btn-quiet" data-act="queue">Zur Liste</button></div></main>`);
}

app.addEventListener('submit', async (e) => {
  const f = e.target.closest('form.kx-rate'); if (!f) return;
  e.preventDefault();
  const u = current.units.find((x) => x.item_id === f.dataset.unit);
  const bands = Object.fromEntries([...f.querySelectorAll('select[data-crit]')].map((s) => [s.dataset.crit, s.value]));
  const msg = f.querySelector('.kx-rate-msg');
  const missing = missingCriteria(u, bands);
  if (missing.length) { msg.textContent = `Bitte für jedes Kriterium ein Band wählen (${missing.map((c) => CRITERION_LABELS[c] || c).join(', ')}).`; f.querySelector(`select[data-crit="${missing[0]}"]`).focus(); return; }
  const btn = f.querySelector('button[type=submit]'); btn.disabled = true;
  try {
    const r = await api.rate({ attempt_id: current.attempt_id, item_id: u.item_id, round: ratingRound(current, u.module), bands });
    await showAttempt(current.attempt_id, `Gespeichert: ${points(r.total)} Punkte (Runde ${r.round}).`);
  } catch (err) { msg.textContent = errorText(err); btn.disabled = false; }
});
app.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.act === 'open') return showAttempt(b.dataset.attempt);
  if (b.dataset.act === 'queue') return showQueue();
  if (b.dataset.act === 'play') return loadRecording(b);
});

async function loadRecording(b) {
  const cell = b.closest('td');
  b.disabled = true; b.textContent = 'Wird geladen …';
  try {
    const blob = await api.recording(current.attempt_id, b.dataset.part, b.dataset.turn);
    const url = URL.createObjectURL(blob); audioUrls.push(url);
    cell.innerHTML = `<audio controls preload="metadata" src="${url}" aria-label="Aufnahme Teil ${esc(b.dataset.part)}, ${esc(b.dataset.turn)}"></audio>`;
  } catch (err) { b.disabled = false; b.textContent = 'Aufnahme laden'; cell.insertAdjacentHTML('beforeend', `<p class="kx-rate-msg" role="status">${esc(errorText(err))}</p>`); }
}

showQueue();
