/* Pure helpers for the rater screen (testable in Node). The server re-validates everything. */
export const CRITERION_LABELS = { erfuellung: 'Erfüllung', kohaerenz: 'Kohärenz', wortschatz: 'Wortschatz', strukturen: 'Strukturen', interaktion: 'Interaktion', aussprache: 'Aussprache' };
export const ERROR_TEXT = {
  rater_role_required: 'Kein Zugriff: Diese Seite ist nur für berechtigte Bewertende.',
  auth_required: 'Bitte melden Sie sich an.',
  cannot_rate_own_attempt: 'Eigene Versuche können nicht bewertet werden.',
  rater_not_independent: 'Sie haben dieses Modul bereits in einer anderen Runde bewertet.',
  already_rated: 'Diese Runde ist für diese Aufgabe bereits bewertet.',
  lead_rater_required: 'Runde 3 ist der leitenden Bewertung vorbehalten.',
  module_not_submitted: 'Das Modul ist noch nicht abgegeben.',
  recording_not_found: 'Für diesen Beitrag gibt es keine Aufnahme.',
  recording_unavailable: 'Die Aufnahme ist im Speicher nicht verfügbar.',
  recording_integrity: 'Die Aufnahme hat die Integritätsprüfung nicht bestanden.',
  invalid_bands: 'Ungültige Bänder.',
  not_rateable: 'Diese Aufgabe kann nicht bewertet werden.',
  attempt_not_found: 'Versuch nicht gefunden.',
  cookies_blocked: 'Ihr Browser blockiert die Cookies, die für die Anmeldung beim Prüfungsserver nötig sind (Cookies von Drittanbietern). Bitte Cookies für Klarweg erlauben oder einen anderen Browser verwenden und die Seite neu laden.',
  mfa_required: 'Bitte bestätigen Sie die Anmeldung mit Ihrem zweiten Faktor.',
  mfa_invalid_code: 'Der Code ist nicht gültig oder wurde schon verwendet. Bitte den aktuellen Code eingeben.',
  mfa_rate_limited: 'Zu viele falsche Codes. Bitte warten Sie einige Minuten.',
  mfa_locked: 'Nach zu vielen falschen Codes ist die Bestätigung 30 Minuten gesperrt.',
  mfa_unavailable: 'Die Zwei-Faktor-Bestätigung ist zurzeit nicht verfügbar. Bitte wenden Sie sich an die Prüfungsleitung.',
  mfa_not_enrolled: 'Für Ihr Konto ist noch kein zweiter Faktor eingerichtet.',
  mfa_no_pending_enrolment: 'Die Einrichtung ist abgelaufen. Bitte neu beginnen.',
  mfa_reset_required: 'Ihr zweiter Faktor kann nicht mehr geprüft werden und muss von der Prüfungsleitung zurückgesetzt werden. Ein Wiederherstellungscode funktioniert weiterhin.',
  rate_limited: 'Zu viele Anfragen in kurzer Zeit. Bitte in einer Minute erneut versuchen.',
  network: 'Keine Verbindung zum Server. Bitte die Seite neu laden; bereits gespeicherte Bewertungen werden dann angezeigt.'
};
/* The round this rater rates a module in: the round they already used for it (one rater, one round), else the lowest
   of rounds 1 and 2 still free for every unit of the module, else 3 (lead raters only; the server enforces that). */
export function ratingRound(data, module) {
  const units = data.units.filter((u) => u.module === module);
  const mine = units.flatMap((u) => u.rounds_taken.filter((r) => r.mine).map((r) => r.round));
  if (mine.length) return Math.min(...mine);
  for (const round of [1, 2]) if (units.every((u) => !u.rounds_taken.some((r) => r.round === round))) return round;
  for (const round of [1, 2]) if (units.some((u) => !u.rounds_taken.some((r) => r.round === round))) return round;
  return 3;
}
export const unitRatedByMe = (u, round) => u.rounds_taken.some((r) => r.mine && r.round === round);
export const missingCriteria = (u, bands) => Object.keys(u.criteria).filter((c) => !bands[c]);

/* ---------- second factor (OD-19) — pure renderers; esc is passed in to keep this module DOM-free ---------- */
const MFA_INPUT = (id, label, extra) => `<div class="kx-item"><label for="${id}">${label}</label><input id="${id}" name="${id}" ${extra} required></div>`;
export function mfaVerifyView(esc, { error = '', recovery = false } = {}) {
  const field = recovery
    ? MFA_INPUT('kx-mfa-recovery', 'Wiederherstellungscode', 'type="text" autocomplete="off" spellcheck="false" autocapitalize="off"')
    : MFA_INPUT('kx-mfa-code', '6-stelliger Code aus Ihrer Authenticator-App', 'type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6"');
  return `<main class="kx-card"><p class="kx-eyebrow">Nur für Bewertende</p><h1>Anmeldung bestätigen</h1>`
    + `<p>Für die Bewertung ist ein zweiter Faktor nötig. Die Bestätigung gilt 12 Stunden für diese Anmeldung.</p>`
    + `<form class="kx-mfa" data-mfa="${recovery ? 'recovery' : 'verify'}" novalidate>${field}`
    + `<p class="kx-rate-msg" role="alert">${esc(error)}</p>`
    + `<div class="kx-actions"><button type="submit" class="kx-btn">Bestätigen</button>`
    + `<button type="button" class="kx-btn kx-btn-quiet" data-act="mfa-${recovery ? 'use-code' : 'use-recovery'}">${recovery ? 'Code aus der App verwenden' : 'Wiederherstellungscode verwenden'}</button></div></form></main>`;
}
export function mfaEnrolStartView(esc, { error = '' } = {}) {
  return `<main class="kx-card"><p class="kx-eyebrow">Nur für Bewertende</p><h1>Zweiten Faktor einrichten</h1>`
    + `<p>Für die Bewertung brauchen Sie eine Authenticator-App (zum Beispiel auf dem Smartphone). Sie richten sie einmal ein und geben danach höchstens alle 12 Stunden einen 6-stelligen Code ein.</p>`
    + `<p class="kx-rate-msg" role="alert">${esc(error)}</p><div class="kx-actions"><button type="button" class="kx-btn" data-act="mfa-enrol">Einrichtung beginnen</button></div></main>`;
}
export function mfaEnrolView(esc, { secret, uri, error = '' }) {
  const grouped = String(secret).replace(/(.{4})/g, '$1 ').trim();
  return `<main class="kx-card"><p class="kx-eyebrow">Nur für Bewertende</p><h1>Authenticator-App verbinden</h1>`
    + `<ol><li>Öffnen Sie Ihre Authenticator-App und fügen Sie ein Konto hinzu.</li>`
    + `<li>Geben Sie diesen Schlüssel ein (Zeitbasiert, 6 Stellen) oder öffnen Sie auf diesem Gerät den <a href="${esc(uri)}">Einrichtungslink</a>:<br><code class="kx-mfa-secret" aria-label="Schlüssel">${esc(grouped)}</code></li>`
    + `<li>Geben Sie den Code ein, den die App jetzt anzeigt.</li></ol>`
    + `<form class="kx-mfa" data-mfa="confirm" novalidate>${MFA_INPUT('kx-mfa-code', '6-stelliger Code', 'type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6"')}`
    + `<p class="kx-rate-msg" role="alert">${esc(error)}</p><div class="kx-actions"><button type="submit" class="kx-btn">Einrichtung abschließen</button></div></form></main>`;
}
export function mfaCodesView(esc, codes) {
  return `<main class="kx-card"><p class="kx-eyebrow">Nur für Bewertende</p><h1>Wiederherstellungscodes</h1>`
    + `<p>Der zweite Faktor ist eingerichtet. Diese 10 Codes werden <strong>nur jetzt</strong> angezeigt. Jeder Code funktioniert einmal, falls Sie keinen Zugriff auf Ihre App haben. Bewahren Sie sie sicher auf (nicht per E-Mail versenden).</p>`
    + `<ul class="kx-mfa-codes">${codes.map((c) => `<li><code>${esc(c)}</code></li>`).join('')}</ul>`
    + `<form class="kx-mfa" data-mfa="codes-saved" novalidate><div class="kx-item"><label><input type="checkbox" id="kx-mfa-saved" required> Ich habe die Codes sicher gespeichert.</label></div>`
    + `<p class="kx-rate-msg" role="alert"></p><div class="kx-actions"><button type="submit" class="kx-btn">Weiter zur Bewertung</button></div></form></main>`;
}
