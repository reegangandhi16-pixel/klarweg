/* Exam shell — DOM wiring only (browser). All rules live on the server; all
   rendering lives in render.js; sequencing in engine.js. */
import { createApi, ExamApiError } from './api.js';
import { ServerClock, formatRemaining } from './clock.js';
import { idbStore } from './store.js';
import { Autosave } from './autosave.js';
import { createRenderer, startChoice, startScreen, header, resultPage, moduleNav, reviewPanel, itemReview, recordingsSection, ratedFeedback, attemptHistory, esc, MODULE_LABELS, saveAnnouncement, errorView, TAKEOVER_NOTE, breakApplies, breakPanel, BREAK_MS, moduleIntro, submittedNote, previousModule, adUsage, usedText, adMatches, notesPanel, RESULT_ACTIONS, partChoices, partPracticeSection } from './render.js';
import { CRITERION_LABELS } from './rating.js';
import { nextAction, assertSupported, partProgress } from './engine.js';
import { phaseAt, phaseLabel, ControlledPlayer, volumeControl, clampVolume, VOLUME_KEY } from './hoeren.js';
import { ChunkQueue, TurnRecorder } from './recorder.js';
import { speakingPhaseAt, prepEndsAt, topicItems, chosenTopic } from './sprechen.js';
import { createSpeakingDriver } from './sprechen-driver.js';
import { createSpeakingAudio } from './speaking-audio.js';
import { countWords } from './wordcount.js';
import { randomId } from './ids.js';
import { pasteAllowed, PASTE_REFUSED, DEFAULT_PASTE_POLICY } from './paste.js';
import { environmentNotes, missingFeatures, KEYBOARD_CHECK, keyboardNote, playTestTone, testMicrophone, MIC_FIX, AUDIO_CHECK, MIC_CHECK, CONNECTION_CHECK, measureDownload, downloadNote } from './precheck.js';
import { framePeak, levelPercent, createSilenceWatch, SILENCE_HINT } from './level.js';

const $ = (s, r = document) => r.querySelector(s);
const app = $('#kx-app');
const base = (document.querySelector('meta[name="kw-exam-api"]') || {}).content || '';
const clock = new ServerClock();
const api = createApi({ base, clock });
const renderer = createRenderer();
const S = { attempt: null, lease: null, pkg: null, answers: {}, autosave: null, module: null, timer: null, hb: null, store: null, locked: new Set(), flags: new Set(), sprechen: null, recordingUrls: [] };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function deviceId() {
  try { let d = localStorage.getItem('kx-device'); if (!d) { d = randomId('dev'); localStorage.setItem('kx-device', d); } return d; } catch { return randomId('dev'); }
}
function leaseKey(id) { return `kx-lease:${id}`; }
function rememberLease(id, l) { try { sessionStorage.setItem(leaseKey(id), l); } catch {} }

function screen(html) { app.innerHTML = html; const h = app.querySelector('h1, h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
function message(title, body, actions = '') { screen(`<main class="kx-card"><h1>${esc(title)}</h1><p>${esc(body)}</p><div class="kx-actions">${actions}</div></main>`); }
function showError(v) {
  const links = (v.links || []).map((l) => `<a class="kx-btn kx-btn-quiet" href="${esc(l.href)}"${l.newTab ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)}</a>`).join('');
  message(v.title, v.body, links + v.actions.map((a) => `<button class="kx-btn" data-act="${esc(a.act)}">${esc(a.label)}</button>`).join(''));
}
function fail(e) {
  const code = e instanceof ExamApiError ? e.code : 'network';
  showError(errorView(e instanceof ExamApiError ? { code, status: e.status } : { code }));
  // "signed out" may really be a blocked third-party cookie (until OD-20): only a definite answer replaces the screen
  if (code === 'auth_required') api.cookieCheck().then((received) => { if (received === false) showError(errorView({ code: 'cookies_blocked' })); });
}

async function boot() {
  S.store = await idbStore();
  try {
    const av = await api.availability();
    const open = av.open_attempts[0];
    if (open) return resume(open.attempt_id);
    const choice = startChoice(av);
    const parts = partPracticeSection(partChoices(av));
    if (!choice && !parts) return message('Nicht verfügbar', 'Der Prüfungsbereich ist für Ihr Konto noch nicht freigeschaltet.');
    let history = '';
    if (av.last_completed) { try { history = attemptHistory(await api.myAttempts()); } catch { /* the start screen works without it */ } }
    screen(startScreen(choice, { lastCompleted: av.last_completed, history, parts }));
  } catch (e) { fail(e); }
}

async function resume(attemptId, takeover = false) {
  let stored = null; try { stored = sessionStorage.getItem(leaseKey(attemptId)); } catch {}
  try {
    if (stored && !takeover) {
      const hb = await api.heartbeat(attemptId, stored);
      S.lease = stored; S.attempt = hb; return route();
    }
  } catch { /* fall through to a fresh lease */ }
  try {
    const r = await api.lease(attemptId, deviceId(), takeover);
    S.lease = r.lease.lease_id; rememberLease(attemptId, S.lease); S.attempt = r; route();
  } catch (e) {
    if (e.code === 'lease_held') return message('Bereits geöffnet', `Diese Prüfung ist in einem anderen Tab oder auf einem anderen Gerät geöffnet. ${TAKEOVER_NOTE}`, `<button class="kx-btn" data-act="takeover" data-attempt="${esc(attemptId)}">Hier fortsetzen</button>`);
    fail(e);
  }
}

/* An EXPIRED lease (no heartbeat for LEASE_TTL, e.g. after sleep, a throttled tab or a long network outage) is not a
   takeover: nobody else holds the attempt. Reacquire it exactly as a page reload would (no takeover; the server audits it
   as lease_reacquired), then resume saving the answers still queued locally. Single-flight: the heartbeat, autosave and
   any user action may notice at the same time. Resolves to null, or to the error (lease_held = another tab took the
   attempt meanwhile). staleLease: the lease the refused request carried; if it has already been replaced (a late
   response after another path reacquired), nothing is reacquired again: a second request would meet our own new lease
   and wrongly report lease_held. */
let reacquiring = null;
function reacquireLease(staleLease = null) {
  if (staleLease && staleLease !== S.lease && !reacquiring) return Promise.resolve(null);
  if (!reacquiring) reacquiring = (async () => {
    try {
      const r = await api.lease(S.attempt.attempt_id, deviceId(), false);
      S.lease = r.lease.lease_id; rememberLease(S.attempt.attempt_id, S.lease);
      if (S.autosave && S.autosave.hasPending()) S.autosave.schedule(0);
      return null;
    } catch (e) { return e; } finally { reacquiring = null; }
  })();
  return reacquiring;
}
/* Another tab holding the attempt now is the same situation as a superseded lease: offer "Hier fortsetzen". */
const leaseLost = (e) => (e && e.code === 'lease_held' ? new ExamApiError(409, 'lease_superseded') : e);
function onLeaseExpired(staleLease = null) { reacquireLease(staleLease).then((e) => { if (e) { clearInterval(S.hb); fail(leaseLost(e)); } }); }

/* Every call that carries the lease (signature (attemptId, lease, …)) is retried ONCE with a reacquired lease when the
   server says lease_expired. The refused request was not applied (the server stores only successful responses), so the
   retry, even with the same request id, is applied once. */
const LEASED_CALLS = ['pkg', 'answers', 'save', 'media', 'hoerenEvent', 'chunk', 'turn', 'speakingStatus', 'consent', 'start', 'submit', 'complete', 'integrity'];
for (const name of LEASED_CALLS) {
  const call = api[name];
  api[name] = async (id, lease, ...rest) => {
    try { return await call(id, lease, ...rest); } catch (e) {
      if (!e || e.code !== 'lease_expired') throw e;
      const err = await reacquireLease(lease);
      if (err) throw leaseLost(err);
      return call(id, S.lease, ...rest);
    }
  };
}

function startHeartbeat() {
  clearInterval(S.hb);
  S.hb = setInterval(async () => {
    const sent = S.lease;
    try { const r = await api.heartbeat(S.attempt.attempt_id, sent); const before = S.module; S.attempt = r; const m = r.modules.find((x) => x.module === before); if (before && m && m.status === 'submitted') route(); }
    catch (e) { if (e.code === 'lease_superseded' || e.code === 'auth_required' || e.code === 'exam_access_required') { clearInterval(S.hb); clearInterval(S.timer); fail(e); } else if (e.code === 'lease_expired') onLeaseExpired(sent); }
  }, 15_000);
}

async function route() {
  startHeartbeat();
  const a = nextAction(S.attempt);
  if (a.kind !== 'resume') releaseBackGuard();   // no module runs on these screens: Back behaves normally again
  if (a.kind === 'start') return intro(a.module);
  if (a.kind === 'resume') return openModule(a.module);
  // a single-module attempt has nothing left after its only module: the learner already confirmed the submission
  if (a.kind === 'complete' && S.attempt.module_scope) return completeAndShow();
  if (a.kind === 'complete') return screen(`<main class="kx-card"><h1>${S.attempt.module_scope ? 'Modul abgegeben' : 'Alle Module abgegeben'}</h1><p>Schließen Sie die Übung ab, um das Ergebnis zu sehen.</p><div class="kx-actions"><button class="kx-btn" data-act="complete">Abschließen</button></div></main>`);
  if (a.kind === 'result') return showResult();
  if (a.kind === 'wait') return message('Abgabe wird abgeschlossen', 'Ihre Abgabe ist gespeichert und wird gerade abgeschlossen.', '<button class="kx-btn" data-act="reload">Erneut prüfen</button>');
}

async function completeAndShow() {
  try { await api.complete(S.attempt.attempt_id, S.lease); S.attempt = await api.getAttempt(S.attempt.attempt_id); return showResult(); }
  catch (e) { fail(e); }
}

/* median round trip of the requests so far (connection-quality note) */
function medianRtt() { const r = (clock.samples || []).map((x) => x.rtt).sort((a, b) => a - b); return r.length ? r[Math.floor(r.length / 2)] : NaN; }

/* ENGINE §10 connection quality before Hören: a 1 MiB download, once per attempt (the result is kept for this tab). */
async function runConnectionCheck() {
  const el = () => $('#kx-conn-msg');
  const key = `kx-conn:${S.attempt.attempt_id}`;
  let r = null; try { r = JSON.parse(sessionStorage.getItem(key) || 'null'); } catch {}
  if (!r) {
    r = await measureDownload({ fetchImpl: (u, o) => fetch(u, o), url: `${base}/exam/v1/attempts/${encodeURIComponent(S.attempt.attempt_id)}/precheck/download?lease_id=${encodeURIComponent(S.lease)}`,
      saveData: !!(navigator.connection && navigator.connection.saveData) });
    if (r.state !== 'failed') { try { sessionStorage.setItem(key, JSON.stringify(r)); } catch {} }
  }
  if (el()) el().textContent = downloadNote(r);
}

/* the module submitted just before this one (counts only when it was submitted in this page) */
function prevNote(module) {
  const before = previousModule(module); const m = before && moduleState(before);
  if (!m || m.status !== 'submitted') return '';
  return submittedNote(S.lastSubmitted && S.lastSubmitted.module === before ? S.lastSubmitted : { module: before });
}
function intro(module) {
  const info = moduleIntro(module, (moduleState(module) || {}).intro);
  S.micOk = false;
  const notes = environmentNotes({ storageKind: S.store && S.store.kind, offsetMs: clock.offset, rttMs: medianRtt(), missing: missingFeatures(module) });
  const notesHtml = notes.length ? `<ul class="kx-precheck-notes">${notes.map((n) => `<li data-note="${esc(n.kind)}">${esc(n.text)}</li>`).join('')}</ul>` : '';
  const check = module === 'hoeren' ? AUDIO_CHECK + CONNECTION_CHECK : module === 'sprechen' ? MIC_CHECK : module === 'schreiben' ? KEYBOARD_CHECK : '';
  const extra = module === 'sprechen' ? '<p>Für dieses Modul werden Ihre Antworten aufgenommen und privat gespeichert. Ohne Ihre Zustimmung kann das Modul nicht beginnen.</p><label class="kx-consent"><input type="checkbox" id="kx-consent"> Ich stimme der Aufnahme zu.</label>' : '';
  screen(`<main class="kx-card">${prevNote(module)}<p class="kx-eyebrow">Nächstes Modul</p><h1>${esc(MODULE_LABELS[module] || module)}</h1><div id="kx-break-slot"></div>${info}${notesHtml}${check}${extra}<div class="kx-actions"><button class="kx-btn" data-act="start" data-module="${module}">Modul starten</button></div></main>`);
  if (module === 'hoeren') runConnectionCheck().catch(() => {});
  // OD-04 optional break: counted from the previous written module's submission (server time); never starts anything
  const since = breakApplies(S.attempt, module);
  clearInterval(S.breakTimer);
  if (since != null) {
    let last = null;
    const paint = () => {
      const slot = $('#kx-break-slot'); if (!slot) { clearInterval(S.breakTimer); return; }
      const rem = Math.max(0, since + BREAK_MS - clock.serverNow());
      const state = rem > 0 ? 'on' : 'over';
      if (state !== last) { slot.innerHTML = breakPanel(rem); last = state; }   // the region is rewritten only when its meaning changes
      else { const t = slot.querySelector('.kx-break-time'); if (t) t.textContent = formatRemaining(rem); }
      if (state === 'over') clearInterval(S.breakTimer);
    };
    paint(); S.breakTimer = setInterval(paint, 1000);
  }
}

/* Sprechen notes (SPEAKING §2, official: notes allowed and usable while speaking): one plain field beside the module,
   kept per attempt on this device only — never sent, never rated (server storage waits on the retention decision D7) */
const notesKey = (attemptId) => `kx-notes:${attemptId}`;
function loadNotes(attemptId) { try { return localStorage.getItem(notesKey(attemptId)) || ''; } catch { return ''; } }
function saveNotes(attemptId, text) { try { if (text) localStorage.setItem(notesKey(attemptId), text); else localStorage.removeItem(notesKey(attemptId)); } catch { /* this page only */ } }

/* Sprechen Teil 2 slide decks: one slide at a time; focus stays on the pressed control (or moves to the other one at an end) */
function stepSlide(deck, dir) {
  const slides = [...deck.querySelectorAll('.kx-slide')];
  const cur = slides.findIndex((x) => x.classList.contains('kx-current'));
  const next = Math.max(0, Math.min(slides.length - 1, cur + dir));
  if (next === cur) return;
  slides.forEach((x, i) => { x.classList.toggle('kx-current', i === next); x.hidden = i !== next; });
  deck.querySelector('.kx-deck-pos').textContent = `Folie ${next + 1} von ${slides.length}`;
  const prev = deck.querySelector('[data-act="slide-prev"]'), fwd = deck.querySelector('[data-act="slide-next"]');
  prev.disabled = next === 0; fwd.disabled = next === slides.length - 1;
  if (document.activeElement && document.activeElement.disabled) (next === 0 ? fwd : prev).focus();
}
/* the deck of the chosen topic is marked "Ihr Thema"; once the choice is locked only that deck stays (none chosen → both) */
function markTopicDecks(locked = false) {
  const decks = [...document.querySelectorAll('.kx-deck[data-topic]')]; if (!decks.length) return;
  const chosen = topicItems(S.pkg || { parts: [] }).map((it) => S.answers[it.item_id] && S.answers[it.item_id].option_id).find(Boolean) || null;
  for (const d of decks) {
    const mine = !!chosen && d.dataset.topic === chosen;
    d.classList.toggle('kx-deck-chosen', mine); d.querySelector('.kx-deck-mine').hidden = !mine;
    d.hidden = locked && !!chosen && !mine;
  }
}

/* tablet split pane: collapse or expand the texts column of one task (CSS applies it only at 768–1023 px) */
function setTextsExpanded(split, expanded) {
  split.classList.toggle('kx-collapsed', !expanded);
  const b = split.querySelector('.kx-split-collapse'); if (b) b.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

/* item flags live on this device only (per attempt); storage may be unavailable (private mode), then they last
   for this page only */
const flagKey = (attemptId) => `kx-flags:${attemptId}`;
function loadFlags(attemptId) {
  try { const v = JSON.parse(localStorage.getItem(flagKey(attemptId)) || '[]'); return new Set(Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []); } catch { return new Set(); }
}
function saveFlags(attemptId, flags) {
  try { if (flags.size) localStorage.setItem(flagKey(attemptId), JSON.stringify([...flags])); else localStorage.removeItem(flagKey(attemptId)); } catch { /* kept in memory */ }
}

async function openModule(module) {
  const id = S.attempt.attempt_id;
  S.module = module;
  S.locked = new Set(); S.sprechen = null; S.flags = loadFlags(id); S.paletteOpen = false;
  announced = {};
  const p = await api.pkg(id, S.lease, module);
  S.pkg = p.package;
  S.pastePolicy = p.paste_policy || DEFAULT_PASTE_POLICY;
  assertSupported(S.pkg, renderer.registry);
  const saved = await api.answers(id, S.lease, module);
  S.answers = Object.fromEntries(saved.answers.map((a) => [a.item_id, a.value]));
  S.saveState = 'saved'; S.saveTrouble = null;   // a new module starts with nothing unsaved (no stale "offline" from the previous one)
  S.autosave = new Autosave({
    key: `answers:${id}:${module}`, store: S.store,
    send: (batch, requestId, opts) => api.save(id, S.lease, module, batch, requestId, opts),
    onState: (st) => {
      /* autosave goes offline → saving → saved; remembering the trouble until the next save keeps "Wieder verbunden"
         (and avoids repeating "Offline" on every failed retry) */
      const prev = S.saveTrouble || S.saveState;
      if (st === 'offline') S.saveTrouble = 'offline'; else if (st === 'saved' || st === 'stopped') S.saveTrouble = null;
      const say = saveAnnouncement(prev, st, S.store && S.store.kind); S.saveState = st; if (say) announce(say); paintHeader(); }, onFatal: (code) => { console.warn('[kx-autosave]', 'stopped', { code }); if (code === 'lease_superseded') fail(new ExamApiError(409, code)); else if (code === 'lease_expired') onLeaseExpired();
      else if (code === 'auth_required' || code === 'exam_access_required') { clearInterval(S.hb); clearInterval(S.timer); fail(new ExamApiError(code === 'auth_required' ? 401 : 403, code)); } else refresh(); },
    onDropped: (code, batch) => syncFromServer(batch.map((b) => b.item_id)).then(() => {
      if (code === 'topic_locked') { announce('Die Themenwahl ist gesperrt. Ihre Änderung wurde nicht gespeichert.'); applyTopicLock(false); }
    }).catch(() => {})
  });
  await S.autosave.load(saved.answers);
  if (module === 'sprechen' && S.pkg.timing.kind === 'speaking_phases') {
    const m = moduleState();
    S.sprechen = { plan: S.pkg.timing.plan, startedAt: m.started_at, multiplier: S.attempt.time_multiplier || 1 };
    // after a refresh past the preparation the topic choice renders locked straight away
    if (clock.serverNow() >= prepEndsAt(S.sprechen.plan, m.started_at, S.sprechen.multiplier)) for (const t of topicItems(S.pkg)) S.locked.add(t.item_id);
  }
  // unsent local answers are shown again — except for locked items, whose server value is authoritative
  const local = (await S.store.get(`answers:${id}:${module}`)) || {};
  for (const v of Object.values(local.pending || {})) if (!S.locked.has(v.item_id)) S.answers[v.item_id] = v.value;
  paint();
  guardBack();
  if (S.locked.size) applyTopicLock(false);
  clearInterval(S.timer);
  S.timer = setInterval(tick, 250);
  const guard = (e) => { if (S.module === module) fail(e); };   // after submit, a stopped loop is not an error
  if (module === 'hoeren') runHoeren().catch(guard);
  if (module === 'sprechen') runSprechen().catch(guard);
}

function moduleState(module = S.module) { return S.attempt.modules.find((m) => m.module === module); }
/* Progress counts only for the item-based modules; Sprechen is phase-driven and has no navigation. */
function progress() { return S.pkg && S.module !== 'sprechen' ? partProgress(S.pkg, S.answers) : null; }
function paintHeader() {
  const m = S.module && moduleState();
  const h = $('#kx-head');
  if (h && m) h.innerHTML = header({ module: S.module, remainingMs: clock.remaining(m.deadline_at), saveState: S.autosave && S.autosave.state, progress: progress(), untimed: S.attempt.part_scope != null });
}
function paintNav() {
  const n = $('#kx-nav-slot'); if (!n) return;
  // a redraw (answer counts) must not drop keyboard focus from a part tab
  const focusedTab = document.activeElement && n.contains(document.activeElement) ? document.activeElement.dataset.tab : null;
  n.innerHTML = S.module === 'sprechen' ? '' : moduleNav(progress(), S.currentPart, { palette: !!S.paletteOpen, flags: S.flags, tabs: tabsMode() });
  if (focusedTab) { const tb = n.querySelector(`[data-tab="${CSS.escape(focusedTab)}"]`); if (tb) tb.focus({ preventScroll: true }); }
  // a phone shows the tabs as one scrollable row: keep the open part's tab in view (horizontally only)
  const sel = n.querySelector('[role="tab"][aria-selected="true"]'); const row = sel && sel.closest('ol');
  if (row && row.scrollWidth > row.clientWidth) { const r = sel.getBoundingClientRect(), rr = row.getBoundingClientRect(); if (r.left < rr.left || r.right > rr.right) row.scrollLeft += r.left - rr.left - 8; }
}
/* Part tabs (GOETHE-B1-DIGITAL §2.3, §4): Lesen and Schreiben with two or more parts show one part at a time. Every part
   stays in the page (hidden), so answers, autosave, the offline queue, flags and usage marks are untouched by switching.
   A switch moves focus to the part heading and is announced (§2.4); the open part is kept per attempt on this device. */
const TAB_MODULES = ['lesen', 'schreiben'];
const tabsMode = () => TAB_MODULES.includes(S.module) && document.querySelectorAll('#kx-main .kx-part').length > 1;
const tabKey = () => `kx-tab:${S.attempt && S.attempt.attempt_id}:${S.module}`;
function setupTabs() {
  if (!tabsMode()) return false;
  const secs = [...document.querySelectorAll('#kx-main .kx-part')];
  for (const sec of secs) { const n = sec.dataset.part; sec.id = `panel-part-${n}`; sec.setAttribute('role', 'tabpanel'); sec.setAttribute('aria-labelledby', `tab-part-${n}`); }
  let saved = null; try { saved = Number(localStorage.getItem(tabKey())) || null; } catch { /* first part */ }
  showPart(saved && secs.some((s) => Number(s.dataset.part) === saved) ? saved : Number(secs[0].dataset.part), { quiet: true });
  return true;
}
function showPart(n, { focus = false, quiet = false } = {}) {
  const secs = [...document.querySelectorAll('#kx-main .kx-part')];
  if (!secs.some((s) => Number(s.dataset.part) === n)) return;
  const changed = S.currentPart !== n;
  for (const s of secs) s.hidden = Number(s.dataset.part) !== n;
  S.currentPart = n;
  if (changed) flushSoon();   // §5: saved on part change
  try { localStorage.setItem(tabKey(), String(n)); } catch { /* this page only */ }
  paintNav();
  if (changed && !quiet) window.scrollTo(0, 0);
  if (focus) { const h = document.getElementById(`part-${n}`); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
  if (changed && !quiet) announceSr(`Teil ${n} geöffnet.`);
}
/* any jump to something inside a hidden part (overview, review list, resume) opens that part first */
function revealPart(el) {
  if (!tabsMode()) return;
  const sec = el && el.closest && el.closest('#kx-main .kx-part');
  if (sec && sec.hidden) { showPart(Number(sec.dataset.part), { quiet: true }); announceSr(`Teil ${sec.dataset.part} geöffnet.`); }
}
/* The part on screen (the last one whose heading has passed the sticky bar) is marked in the part navigation. */
/* The sticky bar's real height (it grows with a status line or an alert) drives where part jumps land and where the Lesen
   texts column sticks (CSS var --kx-bar-h). */
let barObserver = null;
function watchBar() {
  const bar = $('.kx-bar'); if (!bar || typeof ResizeObserver === 'undefined') return;
  if (barObserver) barObserver.disconnect();
  barObserver = new ResizeObserver(() => document.documentElement.style.setProperty('--kx-bar-h', `${Math.ceil(bar.getBoundingClientRect().height)}px`));
  barObserver.observe(bar);
}
let partFrame = 0;
/* "Resume at the same part and item" (GOETHE-B1-DIGITAL §10 refresh/crash, Lesen + Schreiben): the last item the learner
   answered or focused is kept per attempt and module on this device; after a reload it is brought back into view below
   the sticky bar (not focused: that would open a phone keyboard) and the part is announced. */
const POS_MODULES = ['lesen', 'schreiben'];
const posKey = () => `kx-pos:${S.attempt && S.attempt.attempt_id}:${S.module}`;
function rememberPosition(el) {
  if (!S.attempt || !POS_MODULES.includes(S.module)) return;
  const item = el && el.closest && el.closest('[id^="item-"]'); if (!item) return;
  try { localStorage.setItem(posKey(), item.id); } catch { /* this page only */ }
}
function restorePosition() {
  if (!S.attempt || !POS_MODULES.includes(S.module)) return;
  let id = null; try { id = localStorage.getItem(posKey()); } catch { return; }
  const item = id && document.getElementById(id); if (!item) return;
  if (tabsMode()) { const sec = item.closest('.kx-part'); if (sec) showPart(Number(sec.dataset.part), { quiet: true }); }
  // measured, not via scroll-margin: the bar-height variable is set by a ResizeObserver that may not have run yet
  // after layout: the next frame, or a short timer when frames are throttled (once either way)
  let done = false;
  const go = () => { if (done) return; done = true; const bar = $('.kx-bar'); const below = bar ? bar.getBoundingClientRect().bottom + 8 : 0; window.scrollTo(0, Math.max(0, window.scrollY + item.getBoundingClientRect().top - below)); };
  requestAnimationFrame(go); setTimeout(go, 100);
  const part = item.closest('.kx-part');
  if (part) announce(`Weiter in Teil ${part.dataset.part}, bei der zuletzt bearbeiteten Aufgabe.`);
}
app.addEventListener('focusin', (e) => rememberPosition(e.target));

function trackCurrentPart() {
  if (partFrame || tabsMode()) return;
  partFrame = requestAnimationFrame(() => {
    partFrame = 0;
    const bar = $('.kx-bar'); const parts = [...document.querySelectorAll('#kx-main .kx-part')]; if (!bar || !parts.length) return;
    const line = bar.getBoundingClientRect().bottom + 24;   // a part jump lands its heading at the 120 px scroll margin
    let cur = Number(parts[0].dataset.part);
    for (const p of parts) if (p.getBoundingClientRect().top <= line) cur = Number(p.dataset.part);
    if (cur === S.currentPart) return;
    S.currentPart = cur;
    for (const a of document.querySelectorAll('.kx-nav a')) {
      const on = a.getAttribute('href') === `#part-${cur}`;
      if (on) { a.setAttribute('aria-current', 'true'); a.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } else a.removeAttribute('aria-current');
    }
  });
}
window.addEventListener('scroll', trackCurrentPart, { passive: true });
/* An open review is redrawn whenever its counts or parts change. Focus moves only if it was inside the review, and then
   to the equivalent control (same button, or the same item link), else to the review title if that control is gone. */
/* time left for the submit review; none for an untimed single-part practice */
function reviewRemaining() { const m = moduleState(); return !m || S.attempt.part_scope != null || !m.deadline_at ? null : clock.remaining(m.deadline_at); }
function refreshReview() {
  const slot = $('#kx-review-slot'); if (!slot || !slot.innerHTML) return;
  const active = document.activeElement;
  const inside = !!active && active !== document.body && slot.contains(active);
  const key = !inside ? null : active.dataset.act ? `[data-act="${active.dataset.act}"]`
    : active.matches('a[data-review-jump]') ? `a[data-review-jump][href="${CSS.escape(active.getAttribute('href'))}"]` : null;
  slot.innerHTML = reviewPanel(progress() || [], S.flags, reviewRemaining());
  if (inside) { const t = (key && slot.querySelector(key)) || $('#kx-review-title'); if (t) t.focus({ preventScroll: true }); }
}
function updateProgress() { paintHeader(); paintNav(); refreshReview(); }
function closeReview(focusSubmit = true) {
  const slot = $('#kx-review-slot'); if (slot) slot.innerHTML = '';
  const foot = $('.kx-foot'); if (foot) foot.hidden = false;
  if (focusSubmit) { const b = $('[data-act="submit"]'); if (b) b.focus(); }
}
function paint() {
  const phaseTime = S.sprechen ? '<p class="kx-phase-time" id="kx-phase-time"></p>'
    + '<div class="kx-level" id="kx-level" hidden aria-hidden="true"><span class="kx-level-label">Mikrofon</span><span class="kx-level-bar"><span class="kx-level-fill"></span></span></div>'
    + '<p class="kx-silence" id="kx-silence" role="status" aria-live="polite"></p><div class="kx-alerts" id="kx-alerts"></div>'
    : S.module === 'hoeren' ? volumeControl(savedVolume() * 100) + '<div class="kx-alerts" id="kx-alerts"></div>' : '';
  // live status (Hören/Sprechen phase, "Audio starten", time warnings) lives in the sticky bar: it must stay visible
  // while the learner is scrolled down to the questions; empty elements take no space
  screen(`<div class="kx-bar"><div id="kx-head"></div><p class="kx-phase" id="kx-phase" aria-live="polite"></p>${phaseTime}<p class="kx-announce" id="kx-announce" role="status" aria-live="polite"></p><p class="kx-sr" id="kx-sr-announce" role="status" aria-live="polite"></p><div id="kx-nav-slot"></div></div>${S.module === 'sprechen' ? '<div class="kx-speak-layout">' : ''}<main class="kx-module" id="kx-main">${renderer.module(S.pkg, S.answers, { locked: S.locked, flags: S.flags, multiplier: S.attempt.time_multiplier || 1 })}</main>${S.module === 'sprechen' ? notesPanel(loadNotes(S.attempt.attempt_id)) + '</div>' : ''}`
    + `<div id="kx-review-slot"></div><footer class="kx-foot"><button class="kx-btn" data-act="submit">Modul abgeben</button></footer>`);
  S.currentPart = null;
  watchBar();
  updateProgress();
  markUsedOptions();
  markTopicDecks(S.locked.size > 0);
  if (!setupTabs()) trackCurrentPart();
  restorePosition();
}
/* Matching tasks (ENGINE §9.1 L3): each option and each ad card says which situations use it ("verwendet bei 15");
   nothing is blocked and no answer is ever changed here. A phone ad filter is re-applied after a change. */
function markUsedOptions(scope = document) {
  for (const task of scope.querySelectorAll('.kx-task')) {
    const selects = [...task.querySelectorAll('.kx-match select')];
    if (selects.length < 2) continue;
    const usage = adUsage(selects.map((el) => ({ no: el.dataset.no || '', value: el.value })));
    for (const el of selects) {
      for (const o of el.options) {
        if (o.dataset.label === undefined) continue;
        const others = (usage.get(o.value) || []).filter((no) => !(el.value === o.value && no === (el.dataset.no || '')));
        o.textContent = o.dataset.label + (others.length ? ` (${usedText(others)})` : '');
      }
    }
    for (const card of task.querySelectorAll('.kx-ad')) {
      const nos = usage.get(card.dataset.ad) || [];
      card.classList.toggle('kx-ad-is-used', nos.length > 0); card.classList.toggle('kx-ad-multi', nos.length > 1);
      card.querySelector('[data-ad-status]').textContent = usedText(nos) + (nos.length > 1 ? ' – jede Anzeige darf nur einmal gewählt werden' : '');
    }
    applyAdFilter(task);
  }
}
function applyAdFilter(task) {
  const box = task.querySelector('.kx-ad-filter'); if (!box) return;
  const q = box.querySelector('[data-ad-filter]').value, unused = box.querySelector('[data-ad-unused]').checked;
  let shown = 0; const cards = [...task.querySelectorAll('.kx-ad')];
  for (const card of cards) {
    const status = card.querySelector('[data-ad-status]').textContent;
    const ok = adMatches(card.textContent.replace(status, ''), q) && !(unused && card.classList.contains('kx-ad-is-used'));
    card.classList.toggle('kx-ad-out', !ok); if (ok) shown++;
  }
  box.querySelector('[data-ad-count]').textContent = !q.trim() && !unused ? ''
    : shown ? `${shown} von ${cards.length} Anzeigen` : 'Keine Anzeige passt zum Filter. Ihre Antworten bleiben unverändert.';
}
let announced = {};   // time warnings go to #kx-announce so they never overwrite the phase text
function tick() {
  const m = moduleState(); if (!m) return;
  const rem = clock.remaining(m.deadline_at);
  const t = $('.kx-timer'); if (t) t.textContent = formatRemaining(rem);
  const rv = $('[data-review-remaining]'); if (rv) rv.textContent = formatRemaining(rem);
  if (S.sprechen) {   // time left in the current Sprechen phase (server time)
    const at = speakingPhaseAt(S.sprechen.plan, S.sprechen.startedAt, clock.serverNow(), S.sprechen.multiplier);
    const pt = $('#kx-phase-time'); if (pt) pt.textContent = at.state === 'running' ? `Diese Phase: noch ${formatRemaining(at.remaining_ms)}` : '';
  }
  // ENGINE §10: 10- and 1-minute warnings — only for a module longer than the mark (a short module never starts with one)
  const total = m.deadline_at != null && m.started_at != null ? m.deadline_at - m.started_at : Infinity;
  if (S.attempt.part_scope == null) for (const mark of [600_000, 60_000]) if (total > mark && rem <= mark && !announced[mark]) { announced[mark] = true; const ph = $('#kx-announce'); if (ph) ph.textContent = `Noch ${mark / 60_000} Minute${mark > 60_000 ? 'n' : ''}.`; }
  if (rem === 0) { clearInterval(S.timer); setTimeout(refresh, 11_000); }   // server auto-submits after its grace
}
async function refresh() { try { S.attempt = await api.getAttempt(S.attempt.attempt_id); S.module = null; route(); } catch (e) { fail(e); } }

/* ---------- Hören ---------- */
/* AUDIO-SPEC A3: download and decode every Hören file before the schedule starts. A failed or stalled download (no
   answer within PRELOAD_TIMEOUT_MS) is reported once as an incident and offered for retry; only missing files are
   loaded again. The server starts the schedule after its readiness allowance even without the client — said plainly. */
const PRELOAD_TIMEOUT_MS = 30_000;
async function preloadHoeren(id, player, assets) {
  for (;;) {
    let failed = null;
    for (const a of assets) {
      if (player.isReady([a])) continue;
      const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), PRELOAD_TIMEOUT_MS);
      try { const m = await api.media(id, S.lease, a); await player.preload(a, await api.mediaBytes(m.url, { signal: ctl.signal })); }
      catch (e) {
        if (e instanceof ExamApiError && !/^media_/.test(e.code)) throw e;   // session, lease, access: the usual error screens
        failed = ctl.signal.aborted ? 'timeout' : (e instanceof ExamApiError ? e.code : 'network'); break;
      } finally { clearTimeout(timer); }
    }
    if (!failed) { clearAlert('preload'); return; }
    if (S.module !== 'hoeren') throw new Error('left_module');
    api.hoerenEvent(id, S.lease, { type: 'preload_failed', reason: failed }).catch(() => {});
    $('#kx-phase').textContent = 'Die Hördateien konnten nicht geladen werden.';
    await new Promise((resolve) => {
      const el = showAlert('preload', HOEREN_PRELOAD_FAILED, { act: 'hoeren-reload', label: 'Erneut laden' });
      const btn = el && el.querySelector('button'); if (btn) btn.focus({ preventScroll: true });
      S.preloadRetry = () => { S.preloadRetry = null; resolve(); };
    });
    $('#kx-phase').textContent = 'Prüftöne werden geladen …';
  }
}
const HOEREN_PRELOAD_FAILED = 'Die Hördateien konnten nicht vollständig geladen werden. Prüfen Sie Ihre Internetverbindung und wählen Sie „Erneut laden“. Ihre Antworten bleiben erhalten. Hinweis: Der Hörteil beginnt nach einer kurzen Ladezeit auch dann, wenn noch nicht alle Dateien geladen sind.';
function savedVolume() { try { const v = localStorage.getItem(VOLUME_KEY); return v == null ? 1 : clampVolume(v); } catch { return 1; } }
async function runHoeren() {
  const id = S.attempt.attempt_id;
  const plan = S.pkg.timing.plan;
  const lastPart = Math.max(...plan.phases.map((p) => p.part || 0));
  const assets = [...new Set(plan.phases.filter((p) => p.kind === 'play').map((p) => p.asset_id))];
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const player = new ControlledPlayer(ctx, savedVolume());
  S.player = player;
  const ph = $('#kx-phase');
  const rendered = new Set([...document.querySelectorAll('#kx-main .kx-part')].map((el) => Number(el.dataset.part)));
  ph.textContent = 'Prüftöne werden geladen …';
  await preloadHoeren(id, player, assets);
  /* Autoplay policy: a reloaded page has no user gesture, so the AudioContext can stay suspended and resume() may never
     settle. The module never waits on it: parts, answers and the schedule continue, and plays wait for one click on
     "Audio starten", then continue from their scheduled position. A blocked play is never reported as played. */
  const audioRunning = () => ctx.state === 'running';
  let unlocked = null;
  const unlockAudio = () => unlocked || (unlocked = new Promise((resolve) => {
    const el = showAlert('gesture', 'Ihr Browser hat die Wiedergabe blockiert. Bitte starten Sie das Audio.', { act: 'audio-start', label: 'Audio starten' });
    const btn = el && el.querySelector('button'); if (btn) btn.focus({ preventScroll: true });
    // resume() runs inside the click handler (user activation)
    S.gestureResolve = () => { ctx.resume().then(() => { if (audioRunning()) { S.gestureResolve = null; clearAlert('gesture'); resolve(); } }).catch(() => {}); };
  }));
  await Promise.race([ctx.resume().catch(() => {}), sleep(1500)]);
  // OD-05: report a genuine interruption of a running play (audio session interrupted / page torn down)
  const reportInterrupted = () => {
    const cp = S.currentPlay; if (!cp) return;
    S.currentPlay = null;
    api.hoerenEvent(id, S.lease, { type: 'interrupted', phase_seq: cp.seq, kind: cp.kind }, { keepalive: true }).catch(() => {});
  };
  ctx.onstatechange = () => { if (ctx.state !== 'running') { player.stop(); reportInterrupted(); } };
  S.onPageHide = reportInterrupted;
  if (!audioRunning()) {
    unlockAudio();
    if (moduleState().plan_started_at == null) await unlockAudio();   // first start: readiness waits for audible playback
  }
  const ready = await api.hoerenEvent(id, S.lease, { type: 'ready' });
  let m = moduleState(); m.plan_started_at = ready.plan_started_at; m.deadline_at = ready.deadline_at; m.plan_shift_ms = ready.plan_shift_ms || 0;

  /* OD-02: parts appear only when the server has opened them */
  let nextRefresh = 0;
  const refreshParts = async () => {
    const p = await api.pkg(id, S.lease, 'hoeren');
    S.pkg = p.package;
    const main = $('#kx-main');
    for (const part of S.pkg.parts) {
      if (rendered.has(part.part)) continue;
      rendered.add(part.part);
      main.insertAdjacentHTML('beforeend', renderer.part(part, S.answers, { flags: S.flags }));
    }
    updateProgress();   // also redraws an open review with the parts that are open now
  };
  const play = async (phase, kind, offsetMs) => {
    S.currentPlay = { seq: phase.seq, kind };
    await player.play(phase.asset_id, offsetMs);
    if (!S.currentPlay || S.currentPlay.seq !== phase.seq) return;   // interrupted meanwhile
    S.currentPlay = null;
    return api.hoerenEvent(id, S.lease, { type: 'play_end', phase_seq: phase.seq, kind });
  };
  const recover = async (seq) => {
    const phase = plan.phases.find((p) => p.seq === seq);
    const r = await api.hoerenEvent(id, S.lease, { type: 'play_start', phase_seq: seq, kind: 'recovery' });
    m.plan_shift_ms = r.plan_shift_ms; m.deadline_at = r.deadline_at;
    ph.textContent = 'Die unterbrochene Wiedergabe wird einmal wiederholt.';
    await play(phase, 'recovery', 0);
  };
  // a recovery replay owed after a reload is played only once audio actually runs (before any later normal play)
  let afterUnlock = null;
  if (ready.pending_recovery_seq != null) {
    if (audioRunning()) await recover(ready.pending_recovery_seq).catch(() => {});
    else afterUnlock = unlockAudio().then(() => recover(ready.pending_recovery_seq)).catch(() => {});
  }
  await refreshParts();

  let lastIndex = -2;
  const loop = async () => {
    if (S.module !== 'hoeren') { player.stop(); S.player = null; S.onPageHide = null; S.gestureResolve = null; return; }
    m = moduleState();
    const at = phaseAt(plan, m.plan_started_at, clock.serverNow(), m.plan_shift_ms || 0);
    const wanted = at.state === 'finished' ? lastPart : at.phase ? (at.phase.part ?? lastPart) : 0;
    if (wanted > Math.max(0, ...rendered) && Date.now() >= nextRefresh) { nextRefresh = Date.now() + 700; refreshParts().catch(() => {}); }
    if (at.index !== lastIndex) {
      lastIndex = at.index;
      ph.textContent = at.state === 'finished' ? 'Ende des Hörteils. Geben Sie das Modul ab.' : phaseLabel(at.phase);
      if (at.phase && at.phase.kind === 'play') playPhase(at).catch(() => {});
    }
    setTimeout(loop, 200);
  };
  const playPhase = async (at) => {
    if (!audioRunning() || afterUnlock) {   // also wait for a deferred recovery replay, so the two never overlap
      const seq = at.phase.seq;
      await (afterUnlock || unlockAudio());
      if (S.module !== 'hoeren') return;
      m = moduleState();
      at = phaseAt(plan, m.plan_started_at, clock.serverNow(), m.plan_shift_ms || 0);
      if (!at.phase || at.phase.seq !== seq) return;   // its slot ended before the click: missed, not reported as played
    }
    try { await api.hoerenEvent(id, S.lease, { type: 'play_start', phase_seq: at.phase.seq }); }
    catch (e) {
      if (e.code !== 'play_limit_reached') throw e;
      return recover(at.phase.seq);   // the server decides whether a recovery is owed (OD-05)
    }
    return play(at.phase, 'normal', at.elapsed_ms || 0);
  };
  loop();
}

/* ---------- Sprechen (SPEAKING-SPEC §2, §5) ---------- */
/* screen-reader-only status (part switches): focus already moves to the heading, so nothing visible is added to the bar */
const announceSr = (text) => { const el = $('#kx-sr-announce'); if (el) el.textContent = text; };
const announce = (text) => { const el = $('#kx-announce'); if (el) el.textContent = text; };
const safeId = (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '_');

/* Server answers for these items replace the local ones (after a refused save, e.g. topic_locked). */
async function syncFromServer(itemIds) {
  const saved = await api.answers(S.attempt.attempt_id, S.lease, S.module);
  for (const id of itemIds) {
    const row = saved.answers.find((a) => a.item_id === id);
    if (row) S.answers[id] = row.value; else delete S.answers[id];
    for (const el of document.querySelectorAll(`[data-item="${CSS.escape(id)}"]`)) {
      if (el.type === 'radio') el.checked = !!row && row.value.option_id === el.value;
      else if (el.tagName === 'SELECT') el.value = row ? row.value.option_id || '' : '';
    }
  }
}

/* Locks the Teil 2 topic choice: controls disabled, a note tied to the group (aria-describedby) says what was
   chosen — or that no topic was chosen (no default is assumed). With announce, the change is also announced. */
function applyTopicLock(withAnnouncement) {
  if (!S.pkg) return;
  for (const t of topicItems(S.pkg)) {
    S.locked.add(t.item_id);
    const inputs = [...document.querySelectorAll(`[data-item="${CSS.escape(t.item_id)}"]`)];
    for (const el of inputs) el.disabled = true;
    const chosen = inputs.find((el) => el.checked);
    const chosenLabel = chosen ? (chosen.closest('label')?.querySelector('.kx-opt-label')?.textContent || chosen.value) : null;
    const text = chosen ? `Die Themenwahl ist gesperrt. Gewählt: ${chosenLabel}.` : 'Die Themenwahl ist gesperrt. Es wurde kein Thema gewählt.';
    const group = document.getElementById(`item-${safeId(t.item_id)}`);
    if (group) {
      const noteId = `lock-${safeId(t.item_id)}`;
      let note = document.getElementById(noteId);
      if (!note) { note = document.createElement('p'); note.id = noteId; note.className = 'kx-lock-note'; group.appendChild(note); }
      note.textContent = text;
      group.setAttribute('aria-describedby', noteId);
    }
    if (withAnnouncement) announce(`Die Vorbereitung ist beendet. ${text}`);
  }
  markTopicDecks(true);
  if (S.autosave) S.autosave.flush().catch(() => {});   // send a last-second choice now (the server allows the save grace)
}

/* Accessible alerts above the module (role="alert"), one per kind, optionally with an action button. */
function showAlert(kind, text, action = null) {
  const box = $('#kx-alerts'); if (!box) return null;
  let el = box.querySelector(`[data-kind="${kind}"]`);
  if (!el) { el = document.createElement('div'); el.className = 'kx-alert'; el.dataset.kind = kind; el.setAttribute('role', 'alert'); box.appendChild(el); }
  el.innerHTML = `<p>${esc(text)}</p>` + (action ? `<button type="button" class="kx-btn" data-act="${esc(action.act)}">${esc(action.label)}</button>` : '');
  return el;
}
function clearAlert(kind) { const el = document.querySelector(`#kx-alerts [data-kind="${kind}"]`); if (el) el.remove(); }

/* Browser autoplay refused (e.g. after a reload without a click): ask for one click. Resolves 'clicked',
   'timeout' (the phase ended first) or 'cancelled' (module left). The click gives the page user activation, so the
   retried play() is allowed. */
function requestAudioGesture(endsAt) {
  return new Promise((resolve) => {
    const el = showAlert('gesture', 'Ihr Browser hat die Wiedergabe blockiert. Bitte starten Sie das Audio.', { act: 'audio-start', label: 'Audio starten' });
    const btn = el && el.querySelector('button'); if (btn) btn.focus({ preventScroll: true });
    let finished = false;
    const finish = (r) => { if (finished) return; finished = true; S.gestureResolve = null; clearAlert('gesture'); resolve(r); };
    S.gestureResolve = () => finish('clicked');
    (async () => { while (!finished) { if (S.module !== 'sprechen') return finish('cancelled'); if (clock.serverNow() >= endsAt) return finish('timeout'); await sleep(200); } })();
  });
}

/* Microphone: requested right before the first recording (not during the preparation). Errors are reported as
   microphone problems, with a retry; turns without a microphone are not recorded (nothing is fabricated). */
const MIC_MESSAGES = {
  NotAllowedError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff in Ihrem Browser und wählen Sie dann „Mikrofon erneut versuchen“.',
  SecurityError: 'Kein Zugriff auf das Mikrofon. Erlauben Sie den Mikrofonzugriff in Ihrem Browser und wählen Sie dann „Mikrofon erneut versuchen“.',
  NotFoundError: 'Es wurde kein Mikrofon gefunden. Schließen Sie ein Mikrofon an und wählen Sie dann „Mikrofon erneut versuchen“.',
  NotReadableError: 'Das Mikrofon wird von einer anderen Anwendung verwendet oder ist nicht bereit.'
};
async function getMic() {
  if (S.micStream && S.micStream.getAudioTracks().some((tr) => tr.readyState === 'live')) return S.micStream;
  try {
    S.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    clearAlert('mic');
    return S.micStream;
  } catch (e) {
    const name = (e && e.name) || 'Error';
    showAlert('mic', MIC_MESSAGES[name] || 'Das Mikrofon konnte nicht gestartet werden.', { act: 'mic-retry', label: 'Mikrofon erneut versuchen' });
    console.warn('[kx-sprechen]', 'microphone_unavailable', { name });
    return null;
  }
}
/* recording monitor: a level bar while a turn records; in Teil 2 (continuous talk) a polite hint after 15 s of silence.
   It only reads the microphone through an analyser — the recording itself is untouched. */
let meter = null;
function startLevelMeter(stream, watchSilence) {
  stopLevelMeter();
  const box = $('#kx-level'); if (!box || !stream) return;
  let ctx;
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  const an = ctx.createAnalyser(); an.fftSize = 512;
  try { ctx.createMediaStreamSource(stream).connect(an); } catch { ctx.close().catch(() => {}); return; }
  const buf = new Uint8Array(an.fftSize), silence = createSilenceWatch(), fill = box.querySelector('.kx-level-fill'), hint = $('#kx-silence');
  box.hidden = false;
  const timer = setInterval(() => {
    an.getByteTimeDomainData(buf);
    const peak = framePeak(buf);
    fill.style.width = `${levelPercent(peak)}%`;
    if (watchSilence && hint) { const quiet = silence.update(peak, Date.now()); if (quiet && !hint.textContent) hint.textContent = SILENCE_HINT; else if (!quiet && hint.textContent) hint.textContent = ''; }
  }, 100);
  meter = { ctx, timer };
}
function stopLevelMeter() {
  if (meter) { clearInterval(meter.timer); meter.ctx.close().catch(() => {}); meter = null; }
  const box = $('#kx-level'); if (box) { box.hidden = true; const f = box.querySelector('.kx-level-fill'); if (f) f.style.width = '0%'; }
  const hint = $('#kx-silence'); if (hint) hint.textContent = '';
}
function releaseMic() { if (S.micStream) { S.micStream.getTracks().forEach((tr) => tr.stop()); S.micStream = null; } }

/* Phase-driven Sprechen (sprechen-driver.js): the server plan and server time decide the phase; a refresh lands in
   the same phase with the same remaining time. This function only wires the DOM, API, recorder and audio. */
async function runSprechen() {
  const id = S.attempt.attempt_id;
  const { plan, startedAt, multiplier } = S.sprechen;
  const queue = new ChunkQueue({
    attemptId: id, store: S.store,
    upload: (q, bytes, mime) => api.chunk(id, S.lease, q, bytes, mime),
    completeTurn: (b) => api.turn(id, S.lease, b)
  });
  const status = await api.speakingStatus(id, S.lease);
  const audio = createSpeakingAudio({
    fetchAsset: async (assetId) => { const m = await api.media(id, S.lease, assetId); return { bytes: await api.mediaBytes(m.url), mime: m.mime }; },
    makeAudio: () => new Audio(),
    makeUrl: (bytes, mime) => URL.createObjectURL(new Blob([bytes], { type: mime })),
    now: () => clock.serverNow(), sleep, requestGesture: requestAudioGesture
  });
  const label = (key, text) => { const el = document.querySelector(`[data-turn="${CSS.escape(key)}"]`); if (el) el.textContent = text; };
  const driver = createSpeakingDriver({
    pkg: S.pkg, plan, startedAt, multiplier, now: () => clock.serverNow(), sleep, active: () => S.module === 'sprechen',
    status, queue, audio, getMic, recorder: (turn, stream) => new TurnRecorder({ stream, queue, turn }),
    ui: {
      phase: (text) => { const el = $('#kx-phase'); if (el) el.textContent = text; },
      turn: label, alert: (kind, text) => showAlert(kind, text), clear: clearAlert,
      lockTopics: () => applyTopicLock(true),
      recording: (on, { part, stream } = {}) => (on ? startLevelMeter(stream, part === 2) : stopLevelMeter())
    },
    topic: () => chosenTopic(S.pkg, S.answers),
    log: (event, detail) => console.warn('[kx-sprechen]', event, detail)
  });
  try { await driver.run(); } finally { stopLevelMeter(); releaseMic(); }
}

async function showResult() {
  clearInterval(S.hb); clearInterval(S.timer);
  const r = await api.result(S.attempt.attempt_id);
  // item review for the objectively scored modules, from the server; a module without a review simply shows none
  const reviews = [];
  for (const m of r.result.modules) {
    if (!m.counts) continue;
    try { reviews.push(itemReview(m.module, await api.review(S.attempt.attempt_id, m.module))); } catch { /* not available */ }
  }
  for (const m of r.result.modules) {   // criterion feedback once a rated module is final
    if ((m.module === 'schreiben' || m.module === 'sprechen') && m.status === 'final') {
      try { reviews.push(ratedFeedback(m.module, await api.feedback(S.attempt.attempt_id, m.module), CRITERION_LABELS)); } catch { /* not available */ }
    }
  }
  if (r.result.modules.some((m) => m.module === 'sprechen' && m.status !== 'not_taken')) {
    try { reviews.push(recordingsSection(await api.myRecordings(S.attempt.attempt_id))); } catch { /* not available */ }
  }
  for (const u of S.recordingUrls.splice(0)) URL.revokeObjectURL(u);
  screen(resultPage(r.result) + RESULT_ACTIONS + reviews.join('') + (reviews.length ? RESULT_ACTIONS : ''));
}

/* ---------- events ---------- */
app.addEventListener('change', (e) => {
  const el = e.target;
  if (el.matches && el.matches('[data-ad-unused]')) { applyAdFilter(el.closest('.kx-task')); return; }   // a view filter, never an answer
  // choices only: a textarea also fires 'change' when it loses focus, and its text is saved by the 'input' handler
  // below; treating it as a choice replaced the essay with { option_id: <text> } and the save was refused (A3)
  if (!el.dataset || !el.dataset.item || !S.autosave || el.tagName === 'TEXTAREA') return;
  rememberPosition(el);
  const value = { option_id: el.value === '' ? null : el.value };
  S.answers[el.dataset.item] = value; S.autosave.set(el.dataset.item, value);
  updateProgress();
  if (el.tagName === 'SELECT') { const task = el.closest('.kx-task'); if (task) markUsedOptions(task.parentElement || document); }
  if (S.module === 'sprechen') markTopicDecks(S.locked.size > 0);
});
app.addEventListener('input', (e) => {
  const el = e.target;
  if (el.matches && el.matches('[data-ad-filter]')) { applyAdFilter(el.closest('.kx-task')); return; }
  if (el.matches && el.matches('[data-kbd-test]')) { const msg = $('#kx-kbd-msg'); if (msg) msg.textContent = keyboardNote(el.value); return; }   // a practice field, never an answer
  if (el.matches && el.matches('[data-volume]')) {   // Hören master volume: never an answer, never a pause or seek
    const v = clampVolume(el.value / 100); if (S.player) S.player.setVolume(v);
    el.setAttribute('aria-valuetext', `${el.value} %`); const out = el.parentElement.querySelector('.kx-volume-val'); if (out) out.textContent = `${el.value} %`;
    try { localStorage.setItem(VOLUME_KEY, String(v)); } catch { /* this page only */ }
    return;
  }
  if (el.matches && el.matches('[data-notes]')) { saveNotes(S.attempt.attempt_id, el.value); return; }   // notes are never an answer
  if (el.tagName !== 'TEXTAREA' || !S.autosave) return;
  const wc = document.querySelector(`[data-wc-for="${CSS.escape(el.id)}"]`); if (wc) wc.textContent = countWords(el.value);
  S.answers[el.dataset.item] = { text: el.value }; S.autosave.set(el.dataset.item, { text: el.value });
  updateProgress();
});
/* tablist keyboard (manual activation): arrows / Home / End move focus between part tabs; Enter / Space activate */
app.addEventListener('keydown', (e) => {
  const tab = e.target.closest && e.target.closest('[role="tab"]'); if (!tab) return;
  const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
  const i = tabs.indexOf(tab);
  const to = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
  if (to === undefined) return;
  e.preventDefault();
  const next = tabs[(to + tabs.length) % tabs.length];
  for (const x of tabs) x.tabIndex = x === next ? 0 : -1;
  next.focus();
});
app.addEventListener('click', async (e) => {
  const anyJump = e.target.closest('a[href^="#"]');
  if (anyJump && anyJump.getAttribute('href').length > 1) { const target = document.getElementById(anyJump.getAttribute('href').slice(1)); if (target) revealPart(target); }
  /* a jump to a text inside a collapsed tablet panel opens the panel first (the default scroll then finds it) */
  const jump = e.target.closest('a[href^="#kx-"]');
  if (jump) {
    const target = document.getElementById(jump.getAttribute('href').slice(1));
    const split = target && target.closest('.kx-task-texts') && target.closest('.kx-split.kx-collapsed');
    if (split) setTextsExpanded(split, true);
    return;
  }
  /* item palette jump: close the palette, bring the item below the bar and put focus on its first control */
  const pj = e.target.closest('a[data-palette-jump]');
  if (pj) {
    e.preventDefault();
    const item = document.getElementById(pj.getAttribute('href').slice(1));
    S.paletteOpen = false; if (item) revealPart(item); paintNav();
    if (item) { item.scrollIntoView({ block: 'start' }); const c = item.querySelector('input:not([disabled]), select:not([disabled]), textarea:not([disabled])'); if (c) c.focus({ preventScroll: true }); }
    return;
  }
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.tab) { showPart(Number(b.dataset.tab), { focus: true }); return; }
  const act = b.dataset.act;
  try {
    if (act === 'slide-prev' || act === 'slide-next') { stepSlide(b.closest('.kx-deck'), act === 'slide-next' ? 1 : -1); return; }
    if (act === 'hoeren-reload') { if (S.preloadRetry) S.preloadRetry(); return; }
    if (act === 'palette') { S.paletteOpen = !S.paletteOpen; paintNav(); const tg = $('.kx-palette-toggle'); if (tg) tg.focus(); return; }
    if (act === 'toggle-texts') { const split = b.closest('.kx-split'); setTextsExpanded(split, split.classList.contains('kx-collapsed')); return; }
    if (b.dataset.flag) {   // "Zur Kontrolle markieren": local reminder only, nothing is sent
      const on = !S.flags.has(b.dataset.flag);
      if (on) S.flags.add(b.dataset.flag); else S.flags.delete(b.dataset.flag);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      saveFlags(S.attempt.attempt_id, S.flags); refreshReview(); if (S.paletteOpen) paintNav(); return;
    }
    if (b.dataset.insert) {
      const ta = document.getElementById(b.dataset.target); const { selectionStart: s, selectionEnd: en, value } = ta;
      ta.value = value.slice(0, s) + b.dataset.insert + value.slice(en); ta.selectionStart = ta.selectionEnd = s + 1; ta.focus();
      ta.dispatchEvent(new Event('input', { bubbles: true })); return;
    }
    if (act === 'reload') return location.reload();
    if (act === 'home') { S.attempt = null; S.module = null; S.pkg = null; clearInterval(S.hb); clearInterval(S.timer); return boot(); }
    if (act === 'audio-start') { if (S.gestureResolve) S.gestureResolve(); return; }
    if (act === 'mic-retry') { await getMic(); return; }
    if (act === 'last-result') { S.attempt = { attempt_id: b.dataset.attempt }; return showResult(); }
    if (act === 'my-recording') {
      const cell = b.closest('.kx-play-cell'); b.disabled = true; b.textContent = 'Wird geladen …';
      try {
        const url = URL.createObjectURL(await api.myRecording(S.attempt.attempt_id, b.dataset.part, b.dataset.turn)); S.recordingUrls.push(url);
        cell.innerHTML = `<audio controls preload="metadata" src="${url}" aria-label="Ihre Aufnahme Teil ${esc(b.dataset.part)}"></audio>`;
      } catch { b.disabled = false; b.textContent = 'Erneut versuchen'; }
      return;
    }
    if (act === 'create') { const r = await api.createAttempt({ mode: b.dataset.mode || 'synthetic_full', level: 'b1', ...(b.dataset.module ? { module: b.dataset.module } : {}), ...(b.dataset.part ? { part: Number(b.dataset.part) } : {}), device_id: deviceId() }); S.lease = r.lease.lease_id; rememberLease(r.attempt_id, S.lease); S.attempt = r; return route(); }
    if (act === 'takeover') return resume(b.dataset.attempt || S.attempt.attempt_id, true);
    if (act === 'tone-play') {
      b.disabled = true; const msg = $('#kx-tone-msg');
      try { await playTestTone(); if (msg) msg.textContent = 'Testton abgespielt. Haben Sie ihn gehört? Dann bestätigen Sie das unten.'; }
      catch { if (msg) msg.textContent = 'Der Testton konnte nicht abgespielt werden. Prüfen Sie die Audio-Ausgabe und versuchen Sie es erneut.'; }
      finally { b.disabled = false; }
      return;
    }
    if (act === 'mic-test') {
      b.disabled = true; const msg = $('#kx-mic-msg'); if (msg) msg.textContent = 'Mikrofon wird getestet … bitte kurz sprechen.';
      const r = await testMicrophone(); S.micOk = r.ok; b.disabled = false;
      if (msg) msg.textContent = r.ok ? 'Mikrofon funktioniert.' : (MIC_FIX[r.error] || 'Das Mikrofon konnte nicht gestartet werden. Prüfen Sie das Gerät und testen Sie erneut.');
      return;
    }
    if (act === 'start') {
      // ENGINE §10 pre-checks: a failed audio/microphone check leads to its fix, never to the start
      if (b.dataset.module === 'hoeren' && $('#kx-tone-heard') && !$('#kx-tone-heard').checked) {
        const msg = $('#kx-tone-msg'); if (msg) msg.textContent = 'Bitte spielen Sie den Testton ab und bestätigen Sie, dass Sie ihn gehört haben.';
        $('#kx-tone-heard').focus(); return;
      }
      if (b.dataset.module === 'sprechen' && $('#kx-mic-msg') && !S.micOk) {
        const msg = $('#kx-mic-msg'); if (msg) msg.textContent = 'Bitte testen Sie zuerst Ihr Mikrofon.';
        const t = $('[data-act="mic-test"]'); if (t) t.focus(); return;
      }
      b.disabled = true;
      if (b.dataset.module === 'sprechen') {
        if (!$('#kx-consent').checked) { b.disabled = false; $('#kx-consent').focus(); return; }
        await api.consent(S.attempt.attempt_id, S.lease, 'rec-consent@1');
      }
      await api.start(S.attempt.attempt_id, S.lease, b.dataset.module);
      S.attempt = await api.getAttempt(S.attempt.attempt_id);
      return openModule(b.dataset.module);
    }
    if (act === 'submit') {   // first step: an in-page review; nothing is submitted yet
      const slot = $('#kx-review-slot'); if (!slot) return;
      slot.innerHTML = reviewPanel(progress() || [], S.flags, reviewRemaining());
      const foot = $('.kx-foot'); if (foot) foot.hidden = true;
      const h = $('#kx-review-title'); if (h) { h.scrollIntoView({ block: 'start' }); h.focus({ preventScroll: true }); }
      return;
    }
    if (act === 'review-close') return closeReview();
    if (act === 'submit-confirm') {
      b.disabled = true;
      const pg = progress();   // for the interstitial on the next module's intro (§2.2)
      S.lastSubmitted = pg ? { module: S.module, answered: pg.reduce((n, x) => n + x.answered, 0), total: pg.reduce((n, x) => n + x.total, 0) } : { module: S.module };
      await S.autosave.flush();
      await api.submit(S.attempt.attempt_id, S.lease, S.module);
      clearInterval(S.timer); S.module = null;
      S.attempt = await api.getAttempt(S.attempt.attempt_id); return route();
    }
    if (act === 'complete') { await api.complete(S.attempt.attempt_id, S.lease); S.attempt = await api.getAttempt(S.attempt.attempt_id); return showResult(); }
  } catch (err) { fail(err); }
});
/* Schreiben paste policy (OD-06): text copied or cut inside the exam editor may be pasted back; anything else is refused
   (with a calm note) and reported for integrity analytics, never penalised. Drag-and-drop into the editor is disabled. */
const isEditor = (el) => el && el.tagName === 'TEXTAREA' && el.dataset && el.dataset.item;
function rememberCopy(e) {
  const t = e.target; if (!isEditor(t)) return;
  S.internalClip = t.value.slice(t.selectionStart, t.selectionEnd);
}
function reportIntegrity(type, el, length) {
  if (S.module !== 'schreiben' || !S.attempt) return;
  api.integrity(S.attempt.attempt_id, S.lease, { type, item_id: el.dataset.item, length, request_id: randomId('rq') }).catch(() => {});
}
app.addEventListener('copy', rememberCopy);
app.addEventListener('cut', rememberCopy);
app.addEventListener('paste', (e) => {
  const t = e.target; if (!isEditor(t)) return;
  const text = (e.clipboardData && e.clipboardData.getData('text/plain')) || '';
  if (pasteAllowed(S.pastePolicy, text, S.internalClip)) return;
  e.preventDefault(); announce(PASTE_REFUSED); reportIntegrity('paste_blocked', t, text.length);
});
app.addEventListener('dragover', (e) => { if (isEditor(e.target) && S.pastePolicy !== 'allow') e.preventDefault(); });
app.addEventListener('drop', (e) => {
  const t = e.target; if (!isEditor(t) || S.pastePolicy === 'allow') return;
  e.preventDefault(); announce(PASTE_REFUSED);
  reportIntegrity('drop_blocked', t, ((e.dataTransfer && e.dataTransfer.getData('text/plain')) || '').length);
});
/* GOETHE-B1-DIGITAL §4 (Global): "Browser Back MUST NOT leave the exam silently: intercept and show 'Leave the exam?
   Time keeps running.'" While a module runs, one history entry guards the page; Back opens a modal dialog. Staying
   restores the guard; leaving sends pending answers first and then opens the Klarweg home page. Nothing changes outside
   a running module. */
const moduleRunning = () => { const m = S.module && S.attempt && moduleState(); return !!m && m.status === 'running'; };
function guardBack() {
  if (!moduleRunning()) return;
  // the exam page's own entry is marked kxBase and a guard entry is pushed above it; in-page #links (fragment
  // navigations, which also fire popstate) add unmarked entries in between and are never mistaken for leaving
  if (!(history.state && history.state.kxGuard)) { history.replaceState({ kxBase: true }, '', location.href); history.pushState({ kxGuard: true }, '', location.href); }
}
/* once no module is running (submitted, time up), the guard entry is taken off again by stepping back onto the exam
   page's own entry (same document; the popstate handler ignores it because nothing is running), so a later Back leaves
   with one press. Only from the guard entry itself, never during a resume. */
// the page places the view itself (resume position, part tabs): a same-document history step (guard release, in-page
// #links) must not restore an old scroll position over it
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
function releaseBackGuard() { if (history.state && history.state.kxGuard && !moduleRunning()) history.back(); }
let leaving = false;
window.addEventListener('popstate', (e) => {
  if (leaving || !(e.state && e.state.kxBase) || !moduleRunning() || !$('#kx-main')) return;
  history.pushState({ kxGuard: true }, '', location.href);   // stay until the learner decides
  let d = document.getElementById('kx-leave');
  if (!d) { document.body.insertAdjacentHTML('beforeend', LEAVE_DIALOG); d = document.getElementById('kx-leave'); }
  if (!d.open) d.showModal();
  const stay = d.querySelector('[data-leave="stay"]'); if (stay) stay.focus();
});
document.addEventListener('click', async (e) => {
  const b = e.target.closest && e.target.closest('#kx-leave [data-leave]'); if (!b) return;
  const d = document.getElementById('kx-leave');
  if (b.dataset.leave === 'stay') { d.close(); return; }
  leaving = true; d.close();
  if (S.autosave) await S.autosave.flush().catch(() => {});
  // an explicit destination: counting history entries is unreliable after reloads and in-page #links
  location.assign('../');
});
const LEAVE_DIALOG = '<dialog class="kx-leave" id="kx-leave" aria-labelledby="kx-leave-title" aria-describedby="kx-leave-text">'
  + '<h2 id="kx-leave-title">Prüfung verlassen?</h2><p id="kx-leave-text">Die Zeit läuft weiter, auch wenn Sie die Seite verlassen. Ihre Antworten bleiben gespeichert; Sie können später hier fortsetzen.</p>'
  + '<div class="kx-actions"><button type="button" class="kx-btn" data-leave="stay">In der Prüfung bleiben</button><button type="button" class="kx-btn kx-btn-quiet" data-leave="go">Prüfung verlassen</button></div></dialog>';

window.addEventListener('beforeunload', (e) => { if (S.autosave && S.autosave.hasPending()) { S.autosave.flush(); e.preventDefault(); } });
window.addEventListener('online', () => S.autosave && S.autosave.flush());
/* GOETHE-B1-DIGITAL §5: answers go to the server not only after the debounce but also when the page is hidden (phones
   often end a hidden tab), on pagehide (a keepalive request that survives unload) and on every part change. Everything
   unsent also stays in IndexedDB and is sent on the next load. */
const flushSoon = (opts) => { if (S.autosave && S.autosave.hasPending()) S.autosave.flush(opts).catch(() => {}); };
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flushSoon(); });
window.addEventListener('pagehide', () => { flushSoon({ keepalive: true }); if (S.onPageHide) S.onPageHide(); });

boot();
