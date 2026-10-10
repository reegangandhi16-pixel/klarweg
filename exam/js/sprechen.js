/* Sprechen schedule (SPEAKING-SPEC §2). The phase plan comes from the server
   package (timing.speaking_phases: prep_ms + ordered phases); the server fixes
   the module start (started_at) and the attempt's time multiplier, which
   applies to the preparation only (the server deadline uses the same rule).
   The client derives "where are we" from server time only, so a refresh or
   reconnect lands in the same phase with the same remaining time.

   Phase ids "teil<N>" map to Sprechen part N. A listen_only phase plays the
   partner presentation of the part that follows it (the first stimulus with
   role partner_audio) and records nothing. Pure functions: testable in Node. */

/* Ordered schedule: preparation first, then the configured phases. */
export function speakingSchedule(plan, multiplier = 1) {
  const out = [];
  let start = 0;
  const prepMs = Math.round((plan.prep_ms || 0) * (multiplier || 1));
  if (prepMs > 0) { out.push({ seq: -1, id: 'prep', kind: 'prep', start_ms: 0, ms: prepMs }); start = prepMs; }
  for (const p of plan.phases || []) {
    out.push({ ...p, kind: p.listen_only ? 'listen' : 'speak', start_ms: start, ms: p.ms });
    start += p.ms;
  }
  return out;
}

/* Time when the preparation ends (= when the Teil 2 topic choice locks). */
export function prepEndsAt(plan, startedAt, multiplier = 1) {
  return startedAt + Math.round((plan.prep_ms || 0) * (multiplier || 1));
}

export function speakingPhaseAt(plan, startedAt, serverNow, multiplier = 1) {
  if (startedAt == null) return { index: -1, phase: null, state: 'not_started', elapsed_ms: 0, remaining_ms: null };
  const schedule = speakingSchedule(plan, multiplier);
  const t = serverNow - startedAt;
  if (t < 0) return { index: -1, phase: null, state: 'not_started', elapsed_ms: 0, remaining_ms: -t };
  for (let i = 0; i < schedule.length; i++) {
    const p = schedule[i];
    if (t < p.start_ms + p.ms) return { index: i, phase: p, state: 'running', elapsed_ms: t - p.start_ms, remaining_ms: p.start_ms + p.ms - t, ends_at: startedAt + p.start_ms + p.ms };
  }
  return { index: schedule.length, phase: null, state: 'finished', elapsed_ms: 0, remaining_ms: 0 };
}

export function partOfPhase(phase) {
  const m = /^teil([0-9]+)$/.exec((phase && phase.id) || '');
  return m ? Number(m[1]) : null;
}

/* The part a listen_only phase belongs to: the next speaking phase with a part. */
export function partForListenPhase(plan, phaseSeq) {
  for (const p of plan.phases || []) if (p.seq > phaseSeq && !p.listen_only && partOfPhase(p) != null) return partOfPhase(p);
  return null;
}

const partById = (pkg, n) => (pkg.parts || []).find((p) => Number(p.part) === n);

/* Spoken-response items of a part, in package order. */
export function speakingItemsForPart(pkg, n) {
  const part = partById(pkg, n);
  if (!part) return [];
  return part.tasks.flatMap((t) => t.items).filter((it) => it.interaction === 'spoken_response');
}

/* The partner presentation for a listen_only phase: { asset_id, duration_ms } or null. */
export function partnerAssetFor(pkg, plan, phase) {
  if (!phase || !phase.listen_only) return null;
  const part = partById(pkg, partForListenPhase(plan, phase.seq));
  if (!part) return null;
  for (const t of part.tasks) for (const s of t.stimuli || []) if (s.role === 'partner_audio' && s.asset_id) return { asset_id: s.asset_id, duration_ms: s.duration_ms ?? null };
  return null;
}

/* Every asset played in a listen_only phase (a later turn must not replay it). */
export function listenPhaseAssets(pkg, plan) {
  const out = new Set();
  for (const p of plan.phases || []) { const a = partnerAssetFor(pkg, plan, p); if (a) out.add(a.asset_id); }
  return out;
}

/* Topic-choice items: changeable during the preparation, locked afterwards. */
export function topicItems(pkg) {
  return (pkg.parts || []).flatMap((p) => p.tasks.flatMap((t) => t.items)).filter((it) => it.interaction === 'topic_choice');
}

/* Where to (re)start a partner presentation: from its scheduled position, at most once in total.
   Returns null when the presentation has already finished for this phase. */
export function partnerPlayOffset(at, durationMs) {
  if (!at || !at.phase || !at.phase.listen_only) return null;
  if (Number.isFinite(durationMs) && at.elapsed_ms >= durationMs) return null;
  return Math.max(0, at.elapsed_ms);
}

/* Recording window for one turn: the configured seconds, capped at the end of the phase.
   Returns 0 when less than minMs remains (the turn is then not started). */
export function turnWindowMs(turnSeconds, nowMs, phaseEndsAt, { reserveMs = 0, minMs = 1000 } = {}) {
  const left = phaseEndsAt - nowMs - reserveMs;
  const ms = Math.min(Math.round(turnSeconds * 1000), left);
  return ms >= minMs ? ms : 0;
}

/* Turn state after a reload (SPEAKING-SPEC §5): complete turns are skipped; a turn with uploaded or
   buffered chunks was interrupted and is finalised with the contiguous chunks 0..n-1 (the part then
   resumes at the next turn); a turn without chunks is still open. */
export function resumeAction(turnStatus, serverSeqs, localSeqs = []) {
  if (turnStatus === 'complete') return { kind: 'done' };
  const all = new Set([...serverSeqs, ...localSeqs]);
  if (!all.size) return { kind: 'record' };
  let n = 0;
  while (all.has(n)) n++;
  return n > 0 ? { kind: 'finalize', chunks: n } : { kind: 'record' };
}

/* Visible phase label (German UI copy, calm and factual). */
export function speakingPhaseLabel(phase) {
  if (!phase) return '';
  if (phase.kind === 'prep') return 'Vorbereitung: Lesen Sie die Aufgaben und wählen Sie ein Thema für Teil 2. Die Wahl ist bis zum Ende der Vorbereitung änderbar.';
  if (phase.listen_only) return 'Hören Sie die Präsentation Ihres Gesprächspartners. Es wird nichts aufgenommen.';
  const n = partOfPhase(phase);
  if (n != null) return `Teil ${n}`;
  if (phase.id === 'intro') return 'Einführung';
  return '';
}
