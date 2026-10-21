/* Exam-access management screen (exam_admin). DOM wiring only: every rule — role, fresh second factor, validation,
   audit — is enforced by the exam Worker; this page only shows what the server answers. */
import { createApi, ExamApiError } from './api.js';
import { lookupForm, accessView, accommodationSection, ADMIN_ERRORS } from './admin-render.js';

const app = document.getElementById('kx-app');
const base = (document.querySelector('meta[name="kw-exam-api"]') || {}).content || '';
const api = createApi({ base });
const screen = (html) => { app.innerHTML = html; };
const text = (e) => { const code = e instanceof ExamApiError ? e.code : 'network'; return ADMIN_ERRORS[code] || `Fehler (${code}).`; };

function mfaScreen() {
  screen('<main class="kx-card"><h1>Zweiter Faktor nötig</h1><p>Für die Verwaltung muss Ihre Sitzung den zweiten Faktor bestätigt haben (gültig 12 Stunden).</p>'
    + '<div class="kx-actions"><a class="kx-btn" href="rater.html">Zweiten Faktor bestätigen</a><button class="kx-btn kx-btn-quiet" type="button" data-act="reload">Danach hier neu laden</button></div></main>');
}
async function show(userId, message = '') {
  try { const [access, acc] = await Promise.all([api.accessInspect(userId), api.accommodationInspect(userId)]); screen(accessView(access, { message }) + accommodationSection(acc)); }
  catch (e) {
    if (e instanceof ExamApiError && e.code === 'mfa_required') return mfaScreen();
    screen(lookupForm(userId, text(e)));
  }
}

app.addEventListener('submit', async (e) => {
  const f = e.target.closest('form'); if (!f) return;
  e.preventDefault();
  const data = Object.fromEntries(new FormData(f).entries());
  const userId = (app.querySelector('#kx-user') || {}).value || '';
  const btn = f.querySelector('button[type="submit"]'); if (btn) btn.disabled = true;
  try {
    if (f.dataset.form === 'lookup') return await show(data.user_id.trim());
    if (f.dataset.form === 'grant') {
      const until = data.valid_until ? Math.floor(Date.parse(`${data.valid_until}T23:59:59Z`) / 1000) : null;
      await api.accessGrant({ user_id: userId, level: 'b1', scope: data.scope, reason: data.reason, ...(until ? { valid_until: until } : {}) });
      return await show(userId, 'Zugang erteilt.');
    }
    if (f.dataset.form === 'revoke') { await api.accessRevoke(f.dataset.grant, data.reason); return await show(userId, 'Zugang widerrufen.'); }
    if (f.dataset.form === 'acc-set') {
      const until = data.valid_until ? Math.floor(Date.parse(`${data.valid_until}T23:59:59Z`) / 1000) : null;
      await api.accommodationSet({ user_id: userId, time_multiplier: Number(data.time_multiplier), reason: data.reason, ...(until ? { valid_until: until } : {}) });
      return await show(userId, 'Nachteilsausgleich gesetzt.');
    }
    if (f.dataset.form === 'acc-remove') { await api.accommodationRemove(userId, data.reason); return await show(userId, 'Nachteilsausgleich entfernt.'); }
  } catch (err) {
    if (err instanceof ExamApiError && err.code === 'mfa_required') return mfaScreen();
    await show(userId, text(err));
  } finally { if (btn && btn.isConnected) btn.disabled = false; }
});
app.addEventListener('click', (e) => { const b = e.target.closest('[data-act="reload"]'); if (b) location.reload(); });

const q = new URLSearchParams(location.search).get('user');
if (q) show(q); else screen(lookupForm());
