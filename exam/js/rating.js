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
