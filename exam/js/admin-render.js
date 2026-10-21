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
    + '<form class="kx-admin-lookup" data-form="lookup"><label for="kx-user">Nutzer-ID</label>'
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

export const ADMIN_ERRORS = {
  exam_admin_required: 'Nur die Prüfungsverwaltung darf Zugänge verwalten.',
  invalid_user_id: 'Bitte eine gültige Nutzer-ID eingeben (usr_…).',
  reason_required: 'Bitte eine Begründung angeben (3–500 Zeichen).',
  invalid_valid_until: 'Das Ablaufdatum muss in der Zukunft liegen.',
  grant_exists: 'Für diesen Bereich besteht bereits ein aktiver Zugang.',
  already_revoked: 'Dieser Zugang ist bereits widerrufen.',
  grant_not_found: 'Dieser Zugang wurde nicht gefunden.',
  mfa_unavailable: 'Die Zwei-Faktor-Bestätigung ist zurzeit nicht verfügbar.'
};
