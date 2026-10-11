/* Sprechen phase driver (SPEAKING-SPEC §2, §5). All I/O is injected, so the driver runs in the browser
   (main.js wires the DOM, API, MediaRecorder and <audio>) and in Node tests with a fake clock.

   Rules:
   - Server plan + server time decide the phase (sprechen.js); the driver never waits on the network to move on:
     turn uploads/finalisation run in the background, audio is preloaded and stopped at the phase boundary.
   - An error inside one phase is surfaced and logged; the next server-scheduled phase still starts.
   - Recorded chunks are never discarded: they stay in the local queue until the server has them; a turn whose
     upload cannot finish now stays recoverable (a reload resends the buffered chunks).
   - After a reload, interrupted turns are finalised only if their chunks are contiguous (server rule); a gap is
     surfaced and the turn stays open — nothing is fabricated.

   deps:
     pkg, plan, startedAt, multiplier          package + server timing
     now(), sleep(ms)                          server clock + timer
     active()                                  false once the module is left (submit, error screen)
     status                                    /sprechen/status snapshot { turns, chunks }
     queue                                     ChunkQueue (pending, drain, finish)
     audio                                     createSpeakingAudio(...) instance (preload, play)
     getMic()                                  resolves a stream, or null when the microphone is unavailable
     recorder(turn, stream)                    { start(), stop() → { chunks, duration_ms } }
     ui: { phase(text), turn(key, text), alert(kind, text), clear(kind), lockTopics() }
     log(event, detail)                        client-side incident log (console in the browser)
     finalizeRetries, finalizeBackoffMs        background finalisation policy (defaults below) */
import { speakingPhaseAt, prepEndsAt, partOfPhase, speakingItemsForPart, partnerAssetFor, listenPhaseAssets,
  partnerPlayOffset, turnWindowMs, resumeAction, speakingPhaseLabel } from './sprechen.js';

/* Server refusals that retrying cannot change. The chunks stay in the local queue (recoverable on reload). */
export const FINALIZE_STOP_CODES = ['checksum_mismatch', 'chunk_conflict', 'turn_closed', 'upload_window_closed', 'consent_required',
  'recording_quota_exceeded', 'chunk_count_mismatch', 'invalid_chunk_count', 'invalid_duration', 'lease_superseded'];

export function createSpeakingDriver(deps) {
  const { pkg, plan, startedAt, multiplier, now, sleep, active, status, queue, audio, ui, log = () => {} } = deps;
  const retries = deps.finalizeRetries ?? 12;
  const backoff = deps.finalizeBackoffMs ?? ((i) => Math.min(30_000, 1000 * 2 ** i));
  const done = new Set();
  const background = new Map();   // key → finalisation promise (never awaited by the phase loop)
  const heard = listenPhaseAssets(pkg, plan);
  const turnRow = (part, turn) => status.turns.find((t) => t.part === part && t.turn === turn);
  const serverSeqs = (part, turn) => status.chunks.filter((c) => c.part === part && c.turn === turn).map((c) => c.seq);
  const localSeqs = async (t) => (await queue.pending(t)).map((k) => Number(k.split(':').pop()));
  const keyOf = (t) => `${t.item_id}:${t.turn}`;

  /* Background: upload the turn's chunks and complete it. Retries network failures with backoff; stops on a
     definitive refusal. Never deletes local chunks itself (ChunkQueue deletes a chunk only once the server has it). */
  function finalize(t, chunks, durationMs, { interrupted = false } = {}) {
    const key = keyOf(t);
    if (background.has(key)) return background.get(key);
    const run = (async () => {
      for (let i = 0; ; i++) {
        try {
          await queue.finish(t, chunks, durationMs);
          done.add(key);
          ui.turn(key, interrupted ? 'gespeichert (unterbrochen)' : 'gespeichert');
          return 'complete';
        } catch (e) {
          const code = (e && e.code) || 'network';
          if (FINALIZE_STOP_CODES.includes(code)) {
            ui.turn(key, 'nicht abgeschlossen');
            ui.alert('upload', `Ein Gesprächsbeitrag konnte nicht abgeschlossen werden (${code}). Die Aufnahme bleibt auf diesem Gerät gespeichert.`);
            log('turn_finalize_refused', { key, code });
            return 'refused';
          }
          if (i >= retries) {
            ui.turn(key, 'Upload ausstehend');
            ui.alert('upload', 'Aufnahmen konnten noch nicht vollständig gesendet werden. Sie bleiben auf diesem Gerät gespeichert und werden beim nächsten Laden nachgesendet.');
            log('turn_finalize_pending', { key, code, attempts: i + 1 });
            return 'pending';
          }
          ui.turn(key, 'Upload ausstehend …');
          ui.alert('upload', 'Verbindung unterbrochen. Aufnahmen werden auf diesem Gerät gespeichert und automatisch nachgesendet.');
          await sleep(backoff(i));
        }
      }
    })().finally(() => background.delete(key)).then((r) => { if (r === 'complete' && ![...background.keys()].length) ui.clear('upload'); return r; });
    background.set(key, run);
    return run;
  }

  /* After a reload: complete turns are skipped; interrupted turns with contiguous chunks are finalised in the
     background; a gap is surfaced and the turn stays open. One turn's failure never stops the others. */
  async function settleTurns() {
    for (const p of pkg.parts) {
      const part = Number(p.part);
      for (const it of speakingItemsForPart(pkg, part)) for (const turn of it.response_spec.turns) {
        const t = { item_id: it.item_id, turn: turn.turn }, key = keyOf(t);
        try {
          const row = turnRow(part, turn.turn);
          const action = resumeAction(row && row.status, serverSeqs(part, turn.turn), await localSeqs(t));
          if (action.kind === 'done') { done.add(key); ui.turn(key, 'gespeichert'); }
          else if (action.kind === 'finalize') {
            done.add(key);   // not recorded again; the part resumes at the next turn
            ui.turn(key, 'wird hochgeladen …');
            // duration of an interrupted turn: estimate from the 1 s chunks (TurnRecorder timeslice), capped at the turn length
            finalize(t, action.chunks, Math.min(action.chunks * 1000, turn.seconds * 1000), { interrupted: true });
          } else if (action.kind === 'gap') {
            done.add(key);   // not re-recorded over the existing chunks (that would conflict); stays open on the server
            ui.turn(key, 'unterbrochen – unvollständig');
            ui.alert('recovery', 'Ein unterbrochener Gesprächsbeitrag ist unvollständig. Die vorhandenen Teile bleiben gespeichert; der Beitrag wird nicht abgeschlossen.');
            log('turn_incomplete_after_reload', { key, have: action.have, missing: action.missing });
            queue.drain(t, new Set(serverSeqs(part, turn.turn))).catch((e) => log('turn_resend_failed', { key, code: e && e.code }));
          }
        } catch (e) {
          log('turn_settle_failed', { key, code: (e && e.code) || (e && e.name) || 'error' });
        }
      }
    }
  }

  async function runListen(at) {
    const asset = partnerAssetFor(pkg, plan, at.phase);
    if (!asset) return;
    // offset recomputed right before playback (after loading / after a click): a late start continues, never restarts
    const offsetMs = () => partnerPlayOffset(speakingPhaseAt(plan, startedAt, now(), multiplier), asset.duration_ms);
    const r = await audio.play(asset.asset_id, { offsetMs, endsAt: at.ends_at });
    if (r.status === 'missed' || r.status === 'error') {
      ui.alert('audio', r.status === 'error' ? 'Die Präsentation konnte nicht abgespielt werden.' : 'Die Präsentation konnte nicht rechtzeitig abgespielt werden.');
      log('partner_audio_' + r.status, { asset: asset.asset_id, reason: r.reason, detail: r.detail });
    }
  }

  const waitUntil = async (serverT) => { while (active() && now() < serverT) await sleep(Math.min(200, Math.max(10, serverT - now()))); };

  async function runTurns(at) {
    const part = partOfPhase(at.phase);
    if (part == null) return;
    const items = speakingItemsForPart(pkg, part);
    if (!items.some((it) => it.response_spec.turns.some((turn) => !done.has(keyOf({ item_id: it.item_id, turn: turn.turn }))))) return;
    const stream = await deps.getMic();   // requested right before recording is needed, not during the preparation
    for (const it of items) for (const turn of it.response_spec.turns) {
      if (!active() || now() >= at.ends_at) return;
      const t = { item_id: it.item_id, turn: turn.turn }, key = keyOf(t);
      if (done.has(key)) continue;
      if (turn.prompt_asset && !heard.has(turn.prompt_asset)) {
        ui.phase(`Teil ${part}: Hören Sie den Gesprächsimpuls.`);
        const r = await audio.play(turn.prompt_asset, { offsetMs: 0, endsAt: at.ends_at });
        if (r.status === 'missed' || r.status === 'error') {
          ui.alert('audio', 'Der Gesprächsimpuls konnte nicht abgespielt werden.');
          log('prompt_audio_' + r.status, { asset: turn.prompt_asset, reason: r.reason, detail: r.detail });
        }
      }
      const mic = stream || await deps.getMic();
      if (!mic) { ui.turn(key, 'keine Aufnahme (Mikrofon)'); continue; }
      const windowMs = turnWindowMs(turn.seconds, now(), at.ends_at);
      if (!windowMs || !active()) return;
      ui.phase(`Teil ${part}: Aufnahme läuft — sprechen Sie jetzt (max. ${Math.round(windowMs / 1000)} s).`);
      ui.turn(key, 'Aufnahme …');
      const rec = deps.recorder(t, mic);
      rec.start();
      await waitUntil(now() + windowMs);
      const res = await rec.stop();
      if (res.chunks > 0) { done.add(key); ui.turn(key, 'wird hochgeladen …'); finalize(t, res.chunks, res.duration_ms); }
      else ui.turn(key, 'offen');
    }
    if (active() && now() < at.ends_at) ui.phase(`Teil ${part} beendet. Der nächste Teil beginnt automatisch.`);
  }

  async function run() {
    for (const p of pkg.parts) for (const task of p.tasks) {   // preload every Sprechen audio in the background
      for (const s of task.stimuli || []) if (s.kind === 'audio' && s.asset_id) audio.preload(s.asset_id).catch(() => {});
    }
    await settleTurns();
    const prepEnd = prepEndsAt(plan, startedAt, multiplier);
    let topicsLocked = false, lastIndex = -2;
    while (active()) {
      if (!topicsLocked && now() >= prepEnd) { topicsLocked = true; ui.lockTopics(); }
      const at = speakingPhaseAt(plan, startedAt, now(), multiplier);
      if (at.state === 'finished') { ui.phase('Alle Teile beendet. Geben Sie das Modul ab.'); break; }
      if (at.state === 'running' && at.index !== lastIndex) {
        lastIndex = at.index;
        ui.phase(speakingPhaseLabel(at.phase));
        try {
          if (at.phase.kind === 'listen') await runListen(at);
          else if (at.phase.kind === 'speak') await runTurns(at);
        } catch (e) {
          const code = (e && e.code) || (e && e.name) || 'error';
          ui.alert('phase', `In diesem Teil ist ein Fehler aufgetreten (${code}). Die Prüfung läuft mit dem nächsten Teil weiter.`);
          log('phase_error', { phase: at.phase.id, code });
        }
        continue;   // re-evaluate immediately: the phase may have ended meanwhile
      }
      await sleep(200);
    }
  }

  return { run, settleTurns, finalize, pending: () => [...background.values()], done };
}
