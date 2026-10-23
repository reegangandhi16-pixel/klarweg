/* Exam-access management screen — pure string renderers (testable in Node). All values are escaped. */
import { esc } from './render.js';

export const SCOPE_LABELS = { synthetic: 'Übungen (synthetisch)', mock: 'Mock-Prüfung', sets: 'Prüfungssätze' };
const STATUS_LABELS = { active: 'aktiv', expired: 'abgelaufen', revoked: 'widerrufen' };
const ACTION_LABELS = { access_granted: 'Zugang erteilt', access_revoked: 'Zugang widerrufen' };
const fmt = (sec) => (sec ? new Date(sec * 1000).toISOString().replace('T', ' ').slice(0, 16) + ' UTC' : '–');
const fmtMs = (ms) => (ms ? new Date(ms).toISOString().replace('T', ' ').slice(0, 16) + ' UTC' : '–');

export function lookupForm(userId = '', error = '') {
  return '<main class="kx-card kx-admin"><p class="kx-eyebrow">Verwaltung</p><h1>Prüfungszugang</h1>'
    + '<p>Zugang wird einzeln erteilt und widerrufen, immer mit Begründung. Jede Änderung wird protokolliert. Es gibt keine automatische Freischaltung.</p>'
    + '<form class="kx-admin-lookup" data-form="email"><label for="kx-email">E-Mail-Adresse der lernenden Person</label>'
    + '<input id="kx-email" name="email" type="email" required maxlength="254" autocomplete="off" spellcheck="false" placeholder="name@beispiel.de">'
    + '<button class="kx-btn" type="submit">Suchen</button></form>'
    + '<form class="kx-admin-lookup" data-form="lookup"><label for="kx-user">Oder Nutzer-ID</label>'
    + `<input id="kx-user" name="user_id" required pattern="usr_[0-9a-f-]{36}" autocomplete="off" spellcheck="false" value="${esc(userId)}" placeholder="usr_…">`
    + '<button class="kx-btn" type="submit">Anzeigen</button></form>'
    + `<p class="kx-error" role="alert"${error ? '' : ' hidden'}>${esc(error)}</p></main>`;
}

export function accessView(v, { message = '' } = {}) {
  const rows = v.grants.map((g) => `<tr><td>${esc(g.level)} · ${esc(SCOPE_LABELS[g.scope] || g.scope)}</td><td>${esc(STATUS_LABELS[g.status] || g.status)}</td>`
    + `<td>${esc(fmt(g.granted_at))}<br><span class="kx-meta">${esc(g.granted_by || 'nicht erfasst')}</span></td><td>${esc(g.valid_until ? fmt(g.valid_until) : 'unbegrenzt')}</td>`
    + `<td>${esc(g.reason || 'nicht erfasst')}${g.status === 'revoked' ? `<br><span class="kx-meta">widerrufen ${esc(fmt(g.revoked_at))}: ${esc(g.revoke_reason || '–')}</span>` : ''}</td>`
    + `<td>${g.status === 'active' ? `<form class="kx-admin-revoke" data-form="revoke" data-grant="${esc(g.grant_id)}"><label class="kx-sr" for="kx-rr-${esc(g.grant_id)}">Begründung für den Widerruf</label>`
      + `<input id="kx-rr-${esc(g.grant_id)}" name="reason" required minlength="3" maxlength="500" placeholder="Begründung"><button class="kx-btn kx-btn-quiet" type="submit">Widerrufen</button></form>` : ''}</td></tr>`).join('');
  const eff = Object.entries(v.effective).map(([lvl, s]) => `${esc(lvl)}: ${Object.entries(s).filter(([, on]) => on).map(([k]) => esc(SCOPE_LABELS[k] || k)).join(', ') || 'kein Zugang'}`).join(' · ');
  const audit = v.audit.map((a) => `<li>${esc(fmtMs(a.at))} · ${esc(ACTION_LABELS[a.action] || a.action)} · ${esc(a.detail.level)} ${esc(SCOPE_LABELS[a.detail.scope] || a.detail.scope)} · ${esc(a.actor)}: ${esc(a.detail.reason || '')}</li>`).join('');
  return lookupForm(v.user_id)
    + `<section class="kx-card kx-admin" aria-labelledby="kx-access-title"><h2 id="kx-access-title">Zugang von ${esc(v.user_id)}</h2>`
    + `<p class="kx-admin-effective">Wirksam: ${eff}${v.is_exam_admin ? ' · Prüfungsverwaltung (Rolle)' : ''}</p>`
    + `<p class="kx-announce" role="status">${esc(message)}</p>`
    + (rows ? `<div class="kx-table-wrap"><table class="kx-table"><caption>Erteilte Zugänge (neueste zuerst)</caption><thead><tr><th scope="col">Bereich</th><th scope="col">Status</th><th scope="col">Erteilt</th><th scope="col">Gültig bis</th><th scope="col">Begründung</th><th scope="col"><span class="kx-sr">Aktion</span></th></tr></thead><tbody>${rows}</tbody></table></div>` : '<p>Noch kein Zugang erteilt.</p>')
    + '<h3>Zugang erteilen</h3><form class="kx-admin-grant" data-form="grant">'
    + '<label for="kx-scope">Bereich</label><select id="kx-scope" name="scope">' + Object.entries(SCOPE_LABELS).map(([k, l]) => `<option value="${esc(k)}">B1 · ${esc(l)}</option>`).join('') + '</select>'
    + '<label for="kx-until">Gültig bis (optional)</label><input id="kx-until" name="valid_until" type="date">'
    + '<label for="kx-reason">Begründung</label><input id="kx-reason" name="reason" required minlength="3" maxlength="500">'
    + '<button class="kx-btn" type="submit">Zugang erteilen</button></form>'
    + `<h3>Protokoll</h3>${audit ? `<ul class="kx-admin-audit">${audit}</ul>` : '<p>Keine Einträge.</p>'}</section>`;
}

const pct = (m) => `+${Math.round((m - 1) * 100)} %`;
/* Accommodations (OD-41): extra time per user, copied into attempts created afterwards. */
export function accommodationSection(a) {
  const cur = a.accommodation;
  const audit = a.audit.map((x) => `<li>${esc(fmtMs(x.at))} · ${x.action === 'accommodation_set' ? 'gesetzt' : 'entfernt'} · ${esc(pct(x.detail.time_multiplier))} · ${esc(x.actor)}: ${esc(x.detail.reason || '')}</li>`).join('');
  return `<section class="kx-card kx-admin" aria-labelledby="kx-acc-title"><h2 id="kx-acc-title">Nachteilsausgleich (Zeitverlängerung)</h2>`
    + '<p>Gilt für Versuche, die danach begonnen werden; laufende Versuche behalten ihre Zeit. Nachweise selbst werden hier nicht gespeichert.</p>'
    + (cur ? `<p class="kx-admin-effective">Aktuell: ${esc(pct(cur.time_multiplier))} · ${esc(cur.status === 'active' ? 'aktiv' : 'abgelaufen')} · gültig bis ${esc(cur.valid_until ? fmt(cur.valid_until) : 'unbegrenzt')} · ${esc(cur.reason || 'nicht erfasst')}</p>`
      + '<form class="kx-admin-revoke" data-form="acc-remove"><label class="kx-sr" for="kx-acc-rm">Begründung für das Entfernen</label><input id="kx-acc-rm" name="reason" required minlength="3" maxlength="500" placeholder="Begründung"><button class="kx-btn kx-btn-quiet" type="submit">Entfernen</button></form>'
      : '<p>Kein Nachteilsausgleich.</p>')
    + '<form class="kx-admin-grant" data-form="acc-set"><label for="kx-acc-m">Zeitverlängerung</label><select id="kx-acc-m" name="time_multiplier">'
    + a.allowed_multipliers.map((m) => `<option value="${esc(m)}">${esc(pct(m))}</option>`).join('') + '</select>'
    + '<label for="kx-acc-until">Gültig bis (optional)</label><input id="kx-acc-until" name="valid_until" type="date">'
    + '<label for="kx-acc-reason">Begründung (z. B. Nachweis geprüft, Referenz)</label><input id="kx-acc-reason" name="reason" required minlength="3" maxlength="500">'
    + `<button class="kx-btn" type="submit">${cur ? 'Ersetzen' : 'Setzen'}</button></form>`
    + `<h3>Protokoll</h3>${audit ? `<ul class="kx-admin-audit">${audit}</ul>` : '<p>Keine Einträge.</p>'}</section>`;
}

const fmtDate = (sec) => (sec ? new Date(sec * 1000).toISOString().slice(0, 10) : 'unbekannt');
/* The match for an email search: shown for confirmation before anything is managed (only email, account date, id). */
export function lookupResult(email, r) {
  return '<section class="kx-card kx-admin" aria-labelledby="kx-found-title"><h2 id="kx-found-title">Konto gefunden</h2>'
    + `<p>${esc(email)} · Konto seit ${esc(fmtDate(r.account_created))}</p><p class="kx-meta">${esc(r.user_id)}</p>`
    + `<div class="kx-actions"><button class="kx-btn" type="button" data-act="manage" data-user="${esc(r.user_id)}">Zugang dieser Person verwalten</button></div></section>`;
}

export const ADMIN_ERRORS = {
  invalid_email: 'Bitte eine gültige E-Mail-Adresse eingeben.',
  user_not_found: 'Kein Klarweg-Konto mit dieser E-Mail-Adresse.',
  rate_limited: 'Zu viele Suchen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.',
  invalid_time_multiplier: 'Bitte eine der angebotenen Zeitverlängerungen wählen.',
  accommodation_not_found: 'Es besteht kein Nachteilsausgleich.',
  exam_admin_required: 'Nur die Prüfungsverwaltung darf Zugänge verwalten.',
  invalid_user_id: 'Bitte eine gültige Nutzer-ID eingeben (usr_…).',
  reason_required: 'Bitte eine Begründung angeben (3–500 Zeichen).',
  invalid_valid_until: 'Das Ablaufdatum muss in der Zukunft liegen.',
  grant_exists: 'Für diesen Bereich besteht bereits ein aktiver Zugang.',
  already_revoked: 'Dieser Zugang ist bereits widerrufen.',
  grant_not_found: 'Dieser Zugang wurde nicht gefunden.',
  mfa_unavailable: 'Die Zwei-Faktor-Bestätigung ist zurzeit nicht verfügbar.'
};

/* Support view (GET /admin/attempts): a user's latest attempts, module status and incidents — no answers or scores. */
export const INCIDENT_LABELS = { lease_takeover: 'Auf anderem Gerät/Tab übernommen', listening_play_interrupted: 'Hören: Wiedergabe unterbrochen',
  listening_recovery_replay: 'Hören: Wiederholung nach Unterbrechung', listening_preload_failed: 'Hören: Hördateien nicht geladen' };
const MODULE_DE = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' };
const MOD_STATUS = { locked: 'gesperrt', available: 'bereit', running: 'läuft', submitting: 'wird abgegeben', submitted: 'abgegeben' };
const ATT_STATUS = { created: 'nicht begonnen', in_progress: 'läuft', completed: 'abgeschlossen', voided: 'ungültig' };
const SUBMIT_DE = { manual: 'selbst', auto_deadline: 'Zeitablauf', admin: 'Verwaltung' };
const detailText = (d) => Object.entries(d || {}).filter(([, v]) => ['string', 'number', 'boolean'].includes(typeof v)).map(([k, v]) => `${k}: ${v}`).join(', ');
export function attemptsButton() {
  return '<section class="kx-card kx-admin" aria-labelledby="kx-att-title"><h2 id="kx-att-title">Versuche und Vorfälle</h2>'
    + '<p>Zeigt die letzten Versuche mit Status der Module und technischen Vorfällen – ohne Antworten oder Ergebnisse. Jeder Abruf wird protokolliert.</p>'
    + '<div class="kx-actions"><button class="kx-btn kx-btn-quiet" type="button" data-act="attempts">Versuche und Vorfälle anzeigen</button></div><div id="kx-att-slot"></div></section>';
}
export function attemptsList(v) {
  if (!v.attempts.length) return '<p role="status">Keine Versuche.</p>';
  return `<p role="status">${v.attempts.length} Versuch${v.attempts.length === 1 ? '' : 'e'} (neueste zuerst, höchstens ${esc(v.limit)}).</p>` + v.attempts.map((a) => {
    const scope = [a.module_scope ? `nur ${MODULE_DE[a.module_scope] || a.module_scope}` : '', a.part_scope != null ? `Teil ${a.part_scope}` : '', a.time_multiplier > 1 ? `Zeit +${Math.round((a.time_multiplier - 1) * 100)} %` : ''].filter(Boolean).join(' · ');
    const mods = a.modules.map((m) => `<tr><th scope="row">${esc(MODULE_DE[m.module] || m.module)}</th><td>${esc(MOD_STATUS[m.status] || m.status)}</td><td>${esc(fmtMs(m.started_at))}</td>`
      + `<td>${esc(fmtMs(m.submitted_at))}${m.submit_kind ? ` (${esc(SUBMIT_DE[m.submit_kind] || m.submit_kind)})` : ''}</td><td>${m.recovery_used ? 'ja' : '–'}</td></tr>`).join('');
    const inc = a.incidents.map((i) => `<li>${esc(fmtMs(i.at))} · ${esc(INCIDENT_LABELS[i.kind] || i.kind)}${detailText(i.detail) ? ` <span class="kx-admin-detail">(${esc(detailText(i.detail))})</span>` : ''}</li>`).join('');
    return `<article class="kx-admin-attempt"><h3>${esc(a.attempt_id)}</h3><p class="kx-admin-detail">${esc(a.mode)} · ${esc(a.level)} · ${esc(ATT_STATUS[a.status] || a.status)} · angelegt ${esc(fmtMs(a.created_at))}${scope ? ` · ${esc(scope)}` : ''}</p>`
      + (mods ? `<div class="kx-table-wrap"><table class="kx-table"><caption>Module</caption><thead><tr><th scope="col">Modul</th><th scope="col">Status</th><th scope="col">Begonnen</th><th scope="col">Abgegeben</th><th scope="col">Hören-Wiederholung</th></tr></thead><tbody>${mods}</tbody></table></div>` : '')
      + `<h4>Vorfälle</h4>${inc ? `<ul class="kx-admin-audit">${inc}</ul>` : '<p>Keine.</p>'}</article>`;
  }).join('');
}

/* ENGINE §7.6 form usage (GET /admin/forms/usage): aggregates per form, loaded on request (audited) */
export function formUsageButton() {
  return '<section class="kx-card kx-admin" aria-labelledby="kx-fu-title"><h2 id="kx-fu-title">Formularnutzung</h2>'
    + '<p>Wie oft jedes Formular zugewiesen wurde – nur Zahlen, keine Lernenden. Jeder Abruf wird protokolliert.</p>'
    + '<div class="kx-actions"><button class="kx-btn kx-btn-quiet" type="button" data-act="form-usage">Formularnutzung anzeigen</button></div><div id="kx-fu-slot"></div></section>';
}
const FORM_STATUS = { draft: 'Entwurf', review: 'in Prüfung', pilot: 'Pilot', live: 'aktiv', retired: 'zurückgezogen' };
export function formUsageTable(v) {
  const set = v.release_set && v.release_set.ids ? `Lernfreigabe: ${v.release_set.ids.length} Formular(e)` : `Lernfreigabe: keine (${esc((v.release_set && v.release_set.block) || 'nicht gesetzt')})`;
  const rows = v.forms.map((f) => `<tr><th scope="row">${esc(f.label)}<br><span class="kx-admin-detail">${esc(f.form_id)}</span></th>`
    + `<td>${esc(FORM_STATUS[f.status] || f.status)}</td><td>${f.in_release_set ? 'ja' : '–'}</td><td>${f.in_practice_pool ? 'ja' : '–'}</td>`
    + `<td>${esc(f.attempts)}</td><td>${esc(f.by_status.in_progress || 0)} / ${esc(f.by_status.completed || 0)}</td>`
    + `<td>${esc(f.by_kind.full)} / ${esc(f.by_kind.module)} / ${esc(f.by_kind.part)}</td><td>${esc(f.by_assignment.unseen)} / ${esc(f.by_assignment.least_seen)}</td>`
    + `<td>${esc(f.learners)}</td><td>${esc(fmtMs(f.last_assigned_at))}</td></tr>`).join('');
  return `<p role="status">${esc(v.forms.length)} Formulare · ${esc(set)}</p><div class="kx-table-wrap"><table class="kx-table"><caption>Zuweisungen je Formular</caption>`
    + '<thead><tr><th scope="col">Formular</th><th scope="col">Status</th><th scope="col">Lernfreigabe</th><th scope="col">Teilübungs-Pool</th><th scope="col">Versuche</th>'
    + '<th scope="col">laufend / abgeschlossen</th><th scope="col">ganz / Modul / Teil</th><th scope="col">neu / wiederholt</th><th scope="col">Lernende</th><th scope="col">Zuletzt</th></tr></thead>'
    + `<tbody>${rows}</tbody></table></div>`;
}
