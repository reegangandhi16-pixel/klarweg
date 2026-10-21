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
  const tones = pkg.module === 'hoeren' || pkg.module === 'sprechen' ? ' Hörtexte werden als Prüftöne abgespielt.' : '';
  return `<p class="kx-banner" role="note">SYNTHETISCHE ÜBUNGSINHALTE — keine echte Prüfung.${tones}${adjusted}</p>`;
}

/* The facts a learner needs before pressing "Modul starten" (attempt view: modules[].intro from the form's package).
   Rules state what the engine really does: server time that keeps running, autosave, free navigation, review. */
export function moduleIntro(module, intro) {
  const facts = [];
  if (intro && intro.untimed) {   // single-part practice
    const f = [`Teil ${intro.part}`, `${intro.items} Aufgaben`, 'ohne Zeitlimit'];
    const rules = ['Es läuft keine Uhr. Sie können unterbrechen und später weitermachen; nach 24 Stunden wird die Übung automatisch abgegeben.',
      'Ihre Antworten werden automatisch gespeichert. Sie können sie bis zur Abgabe ändern.',
      'Nach der Abgabe sehen Sie jede Aufgabe mit Lösung und Erklärung. Eine Teilübung hat keine Modulpunkte.'];
    return `<p class="kx-intro-facts">${esc(f.join(' · '))}</p><ul class="kx-intro-rules">${rules.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`;
  }
  if (intro && intro.minutes) facts.push(`${intro.minutes} Minuten`);
  else if (intro && intro.approx_minutes) facts.push(`ca. ${intro.approx_minutes} ${intro.approx_minutes === 1 ? 'Minute' : 'Minuten'}`);
  if (intro && intro.parts) facts.push(`${intro.parts} ${intro.parts === 1 ? 'Teil' : 'Teile'}`);
  if (intro && intro.items) facts.push(`${intro.items} Aufgaben`);
  const head = facts.length ? `<p class="kx-intro-facts">${esc(facts.join(' · '))}</p>` : '';
  if (module === 'hoeren') {
    const hr = ['Die Prüftöne werden zuerst vollständig geladen. Danach läuft die Wiedergabe automatisch, ohne Pause, Vor- oder Zurückspulen.',
      'Die Teile erscheinen nacheinander, passend zur Wiedergabe. Wie oft Sie einen Text hören, steht in der Aufgabe.',
      'Ihre Antworten werden automatisch gespeichert. Sie können sie bis zur Abgabe ändern.'];
    return head + `<ul class="kx-intro-rules">${hr.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`;
  }
  if (module === 'sprechen') {
    const sr = [intro && intro.prep_minutes ? `Zuerst haben Sie ${intro.prep_minutes} ${intro.prep_minutes === 1 ? 'Minute' : 'Minuten'} Vorbereitungszeit. Wählen Sie darin Ihr Thema für Teil 2; danach ist die Wahl gesperrt.` : 'Zuerst haben Sie Vorbereitungszeit. Wählen Sie darin Ihr Thema für Teil 2; danach ist die Wahl gesperrt.',
      'Danach laufen die Teile automatisch nach Zeitplan. Ihr Mikrofon wird erst vor der ersten Aufnahme angefragt.',
      ...(intro && intro.partner_listen ? ['Die Präsentation Ihres Gesprächspartners hören Sie einmal; dabei wird nicht aufgenommen.'] : []),
      'Wenn Sie die Seite neu laden, geht es an derselben Stelle weiter.'];
    return head + `<ul class="kx-intro-rules">${sr.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`;
  }
  if (module !== 'lesen' && module !== 'schreiben') return head;
  const rules = ['Die Zeit beginnt, sobald Sie „Modul starten“ wählen. Sie läuft auf dem Server weiter, auch wenn Sie die Seite schließen oder neu laden.',
    'Ihre Antworten werden automatisch gespeichert.',
    'Sie können frei zwischen den Teilen wechseln und Antworten bis zur Abgabe ändern.',
    'Vor der Abgabe sehen Sie, welche Aufgaben noch ohne Antwort sind. Wenn die Zeit abläuft, wird das Modul automatisch abgegeben.'];
  return head + `<ul class="kx-intro-rules">${rules.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`;
}

/* Lesen Teil 3 style matching: which options are already chosen in another select of the same task (examples count).
   selects: [{ id, value }] → Map(option_id → number of OTHER selects using it), per select id. Nothing is ever blocked:
   the learner may still choose a used option; it is only marked. */
export function matchUsage(selects) {
  const count = new Map();
  for (const s of selects) if (s.value) count.set(s.value, (count.get(s.value) || 0) + 1);
  return new Map(selects.map((s) => [s.id, new Map([...count].map(([v, n]) => [v, n - (s.value === v ? 1 : 0)]).filter(([, n]) => n > 0))]));
}
export const USED_SUFFIX = ' (schon gewählt)';

export const RESULT_ACTIONS = '<div class="kx-actions kx-result-actions"><button type="button" class="kx-btn" data-act="home">Zur Übersicht</button></div>';

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
export const SIGN_IN_URL = '../account/index.html';   // the site's sign-in page, relative to /exam/
export function errorView({ code = 'network', status = 0 } = {}) {
  const overview = { act: 'reload', label: 'Zur Übersicht' };
  switch (code) {
    case 'lease_superseded': return { title: 'In einem anderen Fenster geöffnet', body: 'Diese Prüfung wird in einem anderen Tab oder auf einem anderen Gerät fortgesetzt.', actions: [{ act: 'takeover', label: 'Hier fortsetzen' }] };
    // ENGINE §8 (session cookie expired): sign in again in a new tab, then continue here — the exam tab stays open,
    // unsent answers stay queued on this device and the server time keeps running
    case 'auth_required': return { title: 'Bitte erneut anmelden', body: 'Ihre Anmeldung ist abgelaufen oder fehlt. Gespeicherte Antworten bleiben erhalten, und eine laufende Prüfungszeit läuft auf dem Server weiter. Melden Sie sich in einem neuen Tab an und wählen Sie dann „Weiter“.', actions: [{ act: 'reload', label: 'Weiter' }], links: [{ href: SIGN_IN_URL, label: 'In neuem Tab anmelden', newTab: true }] };
    // the probe showed that the browser does not send the sign-in cookie to the exam server (third-party cookies blocked)
    case 'cookies_blocked': return { title: 'Cookies blockiert', body: 'Ihr Browser blockiert die Cookies, die der Prüfungsbereich für die Anmeldung braucht (Cookies von Drittanbietern). Erlauben Sie in den Browser-Einstellungen Cookies für Klarweg oder verwenden Sie einen anderen Browser, und laden Sie die Seite dann neu.', actions: [{ act: 'reload', label: 'Erneut versuchen' }] };
    case 'attempt_closed': return { title: 'Prüfung bereits abgeschlossen', body: 'Diese Prüfung wurde bereits abgeschlossen, zum Beispiel in einem anderen Tab. Das Ergebnis finden Sie in der Übersicht.', actions: [overview] };
    case 'attempt_voided': return { title: 'Versuch ungültig', body: 'Dieser Versuch wurde für ungültig erklärt und kann nicht fortgesetzt werden.', actions: [overview] };
    case 'exam_access_required': case 'mode_disabled': return { title: 'Nicht verfügbar', body: 'Der Prüfungsbereich ist für Ihr Konto derzeit nicht freigeschaltet.', actions: [overview] };
    case 'release_unconfigured': case 'release_misconfigured': return { title: 'Vorübergehend nicht verfügbar', body: 'Die Übungen sind gerade nicht verfügbar. Bereits gespeicherte Antworten bleiben erhalten. Bitte versuchen Sie es später erneut.', actions: [{ act: 'reload', label: 'Erneut versuchen' }] };
    case 'form_not_in_release': return { title: 'Übung nicht mehr verfügbar', body: 'Diese Übungsform ist nicht mehr freigegeben und kann nicht fortgesetzt werden. Bereits abgeschlossene Ergebnisse bleiben in der Übersicht.', actions: [overview] };
    case 'rate_limited': return { title: 'Bitte kurz warten', body: 'Es wurden in kurzer Zeit zu viele Anfragen gesendet. Bereits gespeicherte Antworten bleiben erhalten. Versuchen Sie es in einer Minute erneut.', actions: [{ act: 'reload', label: 'Erneut versuchen' }] };
  }
  // an expired lease that could not be renewed automatically (e.g. no connection meanwhile): a reload renews it
  if (code === 'network' || code === 'lease_expired' || !status || status >= 500) return { title: 'Verbindung unterbrochen', body: `Ihre Antworten sind gespeichert oder lokal gesichert. (${code})`, actions: [{ act: 'reload', label: 'Erneut verbinden' }] };
  return { title: 'Aktion nicht möglich', body: `Diese Aktion konnte nicht ausgeführt werden. Bereits gespeicherte Antworten bleiben erhalten. (${code})`, actions: [{ act: 'reload', label: 'Seite neu laden' }] };
}

export function header({ module, remainingMs, saveState, progress = null, untimed = false }) {
  const save = { saved: 'Gespeichert', pending: 'Änderungen …', saving: 'Speichert …', offline: 'Offline — wird erneut versucht', stopped: 'Speichern gestoppt' }[saveState] || '';
  const total = progress ? progress.reduce((n, p) => n + p.total, 0) : 0;
  const done = progress ? progress.reduce((n, p) => n + p.answered, 0) : 0;
  return `<header class="kx-head"><h1 class="kx-title">${esc(MODULE_LABELS[module] || module)}</h1>`
    + (total ? `<p class="kx-progress" data-progress-total>${done} von ${total} beantwortet</p>` : '')
    + `<p class="kx-save">${esc(save)}</p>`   // visual only: the header is redrawn, so problems are announced via #kx-announce (saveAnnouncement)
    + (untimed ? '<p class="kx-untimed">Ohne Zeitlimit</p>' : `<p class="kx-timer" role="timer" aria-label="Verbleibende Zeit">${esc(formatRemaining(remainingMs))}</p>`) + '</header>';
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
  const opts = ['<option value="">– bitte wählen –</option>'].concat((it.options || []).map((o) => `<option value="${esc(o.option_id)}" data-label="${esc(o.label)}"${value && value.option_id === o.option_id ? ' selected' : ''}>${esc(o.label)}</option>`)).join('');
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

/* ENGINE §9: advisory time per part (level config advisory_seconds, scaled by an accommodation). A recommendation only:
   nothing ends a part; the module timer stays the only limit. */
export function advisory(p, ctx = {}) {
  if (!p || !(p.advisory_seconds > 0)) return '';
  const min = Math.max(1, Math.round((p.advisory_seconds * (ctx.multiplier || 1)) / 60));
  return `<p class="kx-advisory">Empfohlene Zeit: ca. ${esc(min)} ${min === 1 ? 'Minute' : 'Minuten'}</p>`;
}
/* Schreiben: a text under half the target length is scored 0 for the task (official criterion, ENGINE §9) */
export const LENGTH_RULE_NOTE = 'Hinweis: Unter 50 % der Wortzahl wird die Aufgabe mit 0 Punkten bewertet.';
export const belowHalf = (words, target) => !!(target && words * 2 < target);

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
  /* ctx.split (Lesen): texts and tasks side by side on wide screens — the texts scroll in their own column, so the
     learner keeps the text (or the ten ads of Teil 3) in view while answering. Narrow screens stack them (CSS). */
  function task(t, p, answers, ctx) {
    const instr = t.instructions ? `<div class="kx-instr">${paragraphs(t.instructions)}</div>` : '';
    const texts = t.stimuli.filter((s) => !(s.kind === 'text' && t.instructions && String(s.text || '').trim() === t.instructions.trim())).map(stimulus).join('');
    const items = t.items.map((it) => item(it, answers, ctx)).join('');
    if (ctx.split && texts && items && t.stimuli.some((s) => s.kind === 'text')) {
      return `<div class="kx-task kx-split">${instr}<div class="kx-split-grid"><div class="kx-task-texts" role="region" tabindex="0" aria-label="Texte zu Teil ${esc(p.part)}">${texts}</div>`
        + `<div class="kx-task-items">${items}</div></div></div>`;
    }
    return `<div class="kx-task">${instr}${texts}${items}</div>`;
  }
  function part(p, answers = {}, ctx = {}) {
    return `<section class="kx-part" data-part="${esc(p.part)}" aria-labelledby="part-${esc(p.part)}"><h2 id="part-${esc(p.part)}">Teil ${esc(p.part)}</h2>${advisory(p, ctx)}`
      + p.tasks.map((t) => task(t, p, answers, ctx)).join('') + '</section>';
  }
  /* Renders only the parts present in the package. For Hören the server sends
     only the parts that have opened (OD-02), so future parts never reach the DOM. */
  function module(pkg, answers = {}, ctx = {}) {
    const c = { ...ctx, split: ctx.split ?? pkg.module === 'lesen' };
    return testBanner(pkg) + pkg.parts.map((p) => part(p, answers, c)).join('');
  }
  return { module, part, item, registry };
}

/* Part navigation for a module page: one link per part present, with its answered count. */
export function moduleNav(progress, current = null) {
  if (!progress || progress.length < 2 || !progress.some((p) => p.total)) return '';
  return `<nav class="kx-nav" aria-label="Teile dieses Moduls"><ol>${progress.map((p) => `<li><a href="#part-${esc(p.part)}"${p.part === current ? ' aria-current="true"' : ''}>Teil ${esc(p.part)}`
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
      .map((r) => `<li${belowHalf(r.words, r.target_words) ? ' class="kx-review-warn"' : ''}>Text: ${esc(r.words)} Wörter${r.target_words ? ` (Ziel ca. ${esc(r.target_words)})` : ''}`
        + `${belowHalf(r.words, r.target_words) ? ` – weniger als die Hälfte. ${esc(LENGTH_RULE_NOTE)}` : ''}</li>`).join('');
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
const MODULE_ORDER = ['lesen', 'hoeren', 'schreiben', 'sprechen'];
/* Which attempt the start screen offers: the full simulation when available, else the first available single module
   (a Lesen-only self-practice release, EXAM_MODULE_ONLY). null = nothing available for this account. */
export function startChoice(av) {
  const ok = (av && av.modes || []).filter((m) => m.available && m.level === 'b1');
  const full = ok.find((m) => m.mode === 'synthetic_full');
  if (full) return { mode: full.mode, module: null };
  const one = ok.find((m) => m.mode === 'synthetic_module' && MODULE_LABELS[m.module]);
  return one ? { mode: one.mode, module: one.module } : null;
}

/* Single-part practice offered on the start screen: the available synthetic_part / practice_part entries with parts. */
export function partChoices(av) {
  return (av && av.modes || []).filter((m) => (m.mode === 'synthetic_part' || m.mode === 'practice_part') && m.available && m.level === 'b1' && MODULE_LABELS[m.module] && (m.parts || []).length);
}
export function partPracticeSection(choices) {
  if (!choices || !choices.length) return '';
  return choices.map((c) => `<section class="kx-part-practice" aria-labelledby="kx-pp-${esc(c.module)}"><h2 id="kx-pp-${esc(c.module)}">${esc(MODULE_LABELS[c.module])}: einzelne Teile üben</h2>`
    + '<p>Ohne Zeitlimit, mit Lösung und Erklärung zu jeder Aufgabe. Eine Teilübung hat keine Modulpunkte.</p><ul class="kx-part-list">'
    + c.parts.map((p) => `<li><button type="button" class="kx-btn kx-btn-quiet" data-act="create" data-mode="${esc(c.mode)}" data-module="${esc(c.module)}" data-part="${esc(p.part)}">`
      + `Teil ${esc(p.part)}<span class="kx-part-construct">${esc(p.construct || '')} · ${esc(p.items)} Aufgaben</span></button></li>`).join('')
    + '</ul></section>').join('');
}

export function startScreen(choice, { lastCompleted = null, history = '', parts = '' } = {}) {
  if (!choice) {   // only part practice is offered
    const last = lastCompleted ? `<div class="kx-actions"><button class="kx-btn kx-btn-quiet" data-act="last-result" data-attempt="${esc(lastCompleted)}">Letztes Ergebnis ansehen</button></div>` : '';
    return `<main class="kx-card"><p class="kx-eyebrow">Teilübungen</p><h1>Klarweg B1 – Teilübungen</h1>${parts}${last}${history}</main>`;
  }
  const last = lastCompleted ? `<button class="kx-btn kx-btn-quiet" data-act="last-result" data-attempt="${esc(lastCompleted)}">Letztes Ergebnis ansehen</button>` : '';
  if (!choice.module) {
    return `<main class="kx-card"><p class="kx-eyebrow">Übung · synthetische Inhalte</p><h1>Klarweg B1 Simulation</h1><p>Eine Übungsprüfung mit allen vier Modulen: Lesen, Hören, Schreiben, Sprechen. Die Inhalte sind synthetisch (keine echte Prüfung); die Hörtexte werden als Prüftöne abgespielt und sind nach der Abgabe zum Nachlesen da. Lesen und Schreiben laufen mit Prüfungszeit, Hören und Sprechen mit verkürzten Übungszeiten. Die Zeit läuft auf dem Server.</p><div class="kx-actions"><button class="kx-btn" data-act="create" data-mode="${esc(choice.mode)}">Übung starten</button>${last}</div>${parts}${history}</main>`;
  }
  const label = MODULE_LABELS[choice.module];
  const others = MODULE_ORDER.filter((m) => m !== choice.module).map((m) => MODULE_LABELS[m]);
  const tail = `${others.slice(0, -1).join(', ')} und ${others[others.length - 1]}`;
  return `<main class="kx-card"><p class="kx-eyebrow">Selbstlernübung · nur ${esc(label)} · synthetische Inhalte</p><h1>Klarweg B1 ${esc(label)} – Übung</h1>`
    + `<p>Eine Übung nur zum Modul ${esc(label)}, mit Prüfungszeit. Die Zeit läuft auf dem Server. ${esc(tail)} sind in dieser Version nicht verfügbar.</p>`
    + `<p>Nach der Abgabe sehen Sie Ihre Punkte für dieses Modul und jede Aufgabe mit Lösung und Erklärung. Das ist eine Übungsauswertung, kein Prüfungsergebnis und keine Vorhersage für die Prüfung.</p>`
    + `<div class="kx-actions"><button class="kx-btn" data-act="create" data-mode="${esc(choice.mode)}" data-module="${esc(choice.module)}">${esc(label)} üben</button>${last}</div>${parts}${history}</main>`;
}

/* The learner's completed practices, newest first: date, form, per-module result, and a way back into each result. */
export function attemptHistory(list, formatDate = (ms) => new Date(ms).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })) {
  // only modules someone actually took get a column (a Lesen-only history shows no empty Hören/Schreiben/Sprechen columns)
  const taken = MODULE_ORDER.filter((mod) => (list.attempts || []).some((a) => (a.modules || []).some((m) => m.module === mod && m.status !== 'not_taken')));
  const cols = taken.length ? taken : MODULE_ORDER;
  const rows = (list.attempts || []).map((a) => {
    const cell = (mod) => {
      const m = (a.modules || []).find((x) => x.module === mod);
      if (!m || m.status === 'not_taken') return '–';
      if (a.practice_part && m.counts && m.status === 'final') return `${esc(m.counts.correct)} / ${esc(m.max_points)} richtig`;
      return m.status === 'final' ? `${esc(m.points)} / ${esc(m.max_points)}` : 'in Bewertung';
    };
    return `<tr><th scope="row">${esc(formatDate(a.completed_at))}</th><td>${a.practice_part ? `Teilübung · ${esc(MODULE_LABELS[a.practice_part.module] || a.practice_part.module)} Teil ${esc(a.practice_part.part)}<br>` : ''}${esc(a.form_label)}</td>${cols.map((mod) => `<td>${cell(mod)}</td>`).join('')}`
      + `<td><button type="button" class="kx-btn kx-btn-quiet" data-act="last-result" data-attempt="${esc(a.attempt_id)}">Ergebnis ansehen</button></td></tr>`;
  }).join('');
  if (!rows) return '';
  return '<section class="kx-history" aria-labelledby="kx-history-title"><h2 id="kx-history-title">Ihre bisherigen Übungen</h2>'
    + `<div class="kx-table-wrap"><table class="kx-table"><caption>Abgeschlossene Übungen (neueste zuerst)</caption><thead><tr><th scope="col">Datum</th><th scope="col">Übung</th>`
    + cols.map((mod) => `<th scope="col">${esc(MODULE_LABELS[mod])}</th>`).join('') + '<th scope="col"><span class="kx-sr">Aktion</span></th></tr></thead>'
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
  const rows = review.items.map((it) => `<tr class="kx-rv-${esc(it.status)}"><th scope="row">${esc(it.display_no)}</th><td data-label="Ihre Antwort">${esc(answerText(it.your_answer))}</td>`
    + `<td data-label="Lösung">${esc(answerText(it.correct_answer))}</td><td><span class="kx-rv-status">${esc(REVIEW_STATUS[it.status] || it.status)}</span></td>`
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
/* A single-part practice (ENGINE §2 practice_part): correct answers out of the part's tasks. There is no official
   conversion for one part, so no points, no pass line and no grade are shown — those exist only for a whole module. */
function partResultPage(result) {
  const pp = result.practice_part;
  const m = result.modules.find((x) => x.module === pp.module) || {};
  const c = m.counts || { correct: 0, incorrect: 0, unanswered: 0 };
  return `<main class="kx-result" aria-labelledby="kx-result-title"><p class="kx-eyebrow">Teilübung${result.test_content ? ' · synthetische Inhalte' : ''}</p>`
    + `<h1 id="kx-result-title">${esc(RESULT_TITLE)}</h1>`
    + `<p class="kx-part-result-title">${esc(MODULE_LABELS[pp.module] || pp.module)} Teil ${esc(pp.part)}</p>`
    + `<p class="kx-part-result-score">${esc(c.correct)} von ${esc(m.max_points ?? c.correct + c.incorrect + c.unanswered)} richtig</p>`
    + `<p>falsch ${esc(c.incorrect)} · ohne Antwort ${esc(c.unanswered)}</p>`
    + '<p class="kx-meta">Eine Teilübung hat keine Modulpunkte und kein Bestehen. Punkte gibt es nur für ein ganzes Modul.</p>'
    + `<p class="kx-disclaimer">${esc(RESULT_DISCLAIMER)}</p></main>`;
}

export function resultPage(result) {
  if (result.practice_part) return partResultPage(result);
  const rows = result.modules.map((m) => {
    const pts = m.status === 'final' ? `${esc(m.points)} / ${esc(m.max_points)}` : '–';
    const verdict = m.status === 'final' ? (m.pass ? 'bestanden' : 'nicht bestanden') : m.status === 'not_taken' ? 'nicht abgelegt' : 'in Bewertung';
    const band = m.status === 'final' && m.predikat && m.predikat !== verdict ? ` · ${esc(m.predikat)}` : '';
    const counts = m.counts ? `richtig ${esc(m.counts.correct)} · falsch ${esc(m.counts.incorrect)} · ohne Antwort ${esc(m.counts.unanswered)}` : '';
    const note = [RESULT_NOTES[m.status] || '', m.submit_kind === 'auto_deadline' ? 'Zeit abgelaufen – automatisch abgegeben.' : ''].filter(Boolean).join(' ');
    return `<tr><th scope="row">${esc(MODULE_LABELS[m.module] || m.module)}</th><td>${pts}</td><td>${esc(verdict)}${band}</td><td>${[counts, esc(note)].filter(Boolean).join('<br>')}</td></tr>`;
  }).join('');
  return `<main class="kx-result" aria-labelledby="kx-result-title"><p class="kx-eyebrow">${result.test_content ? 'Übung · synthetische Inhalte' : 'Simulation'}</p>`
    + `<h1 id="kx-result-title">${esc(RESULT_TITLE)}</h1>`
    + `<table class="kx-table"><caption>Ergebnisse je Modul (kein Gesamtergebnis)</caption><thead><tr><th scope="col">Modul</th><th scope="col">Punkte</th><th scope="col">Status</th><th scope="col">Details</th></tr></thead><tbody>${rows}</tbody></table>`
    + (result.pass_points ? `<p class="kx-result-pass">Bestanden ab ${esc(result.pass_points)} Punkten je Modul.</p>` : '')
    + `<p class="kx-disclaimer">${esc(RESULT_DISCLAIMER)} Die Module werden einzeln ausgewiesen; es gibt kein Gesamtergebnis.</p></main>`;
}
