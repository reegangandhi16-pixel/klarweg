/* Exam room cast + scene rules (pure; tested in Node).

   The room is a presentation layer over the unchanged Sprechen driver: it never decides timing, never
   records, never uploads. It only answers "who is on stage, who is speaking right now, what label is shown".

   Cast file (exam-room/casts/<id>.json) — contains no prompt text:
     { "id", "assets": { "<asset_id>": [[startMs, endMs, "<person>"], ...] },
       "people": { "<person>": { "role": "examiner"|"partner", "label", "avatar" } },
       "front": { "1": "<person>", "2": "<person>", "3": "<person>" } }   who sits opposite the candidate per Teil
*/

export const PHASE_PART = Object.freeze({ intro: 1, teil1: 1, teil2: 2, partner: 3, teil3: 3 });

/** Throws on a malformed cast (a broken cast must disable the room, not half-render it). */
export function validateCast(c) {
  const fail = (m) => { throw new Error('cast: ' + m); };
  if (!c || typeof c !== 'object') fail('not an object');
  if (!c.people || typeof c.people !== 'object') fail('people missing');
  const people = Object.keys(c.people);
  if (!people.some((p) => c.people[p].role === 'examiner')) fail('no examiner');
  for (const [k, p] of Object.entries(c.people)) {
    if (!['examiner', 'partner'].includes(p.role)) fail(`${k}: bad role`);
    if (typeof p.label !== 'string' || !p.label) fail(`${k}: label`);
    if (typeof p.avatar !== 'string' || !/^[a-z0-9-]+$/.test(p.avatar)) fail(`${k}: avatar`);
  }
  for (const [id, segs] of Object.entries(c.assets || {})) {
    if (!Array.isArray(segs) || !segs.length) fail(`${id}: no segments`);
    let last = -1;
    for (const s of segs) {
      if (!Array.isArray(s) || s.length !== 3) fail(`${id}: segment shape`);
      const [a, b, who] = s;
      if (!(Number.isFinite(a) && Number.isFinite(b) && a >= last && b > a)) fail(`${id}: segment order`);
      if (!people.includes(who)) fail(`${id}: unknown person ${who}`);
      last = b;
    }
  }
  for (const [part, who] of Object.entries(c.front || {})) {
    if (!['1', '2', '3'].includes(part)) fail(`front: part ${part}`);
    if (!people.includes(who) || c.people[who].role !== 'partner') fail(`front ${part}: ${who}`);
  }
  return c;
}

/** Audio assets of the Sprechen package (stimuli + turn prompts, incl. per-topic prompts). */
export function packageAudioAssets(pkg) {
  const ids = new Set();
  for (const p of pkg.parts || []) for (const t of p.tasks || []) {
    for (const s of t.stimuli || []) if (s.kind === 'audio' && s.asset_id) ids.add(s.asset_id);
    for (const it of t.items || []) for (const turn of (it.response_spec && it.response_spec.turns) || []) {
      if (turn.prompt_asset) ids.add(turn.prompt_asset);
      for (const v of Object.values(turn.prompt_asset_by_topic || {})) if (v && v.asset_id) ids.add(v.asset_id);
    }
  }
  return ids;
}

/** The cast that covers every audio asset of the package, or null (then the room stays off). */
export function castForPackage(casts, pkg) {
  const need = packageAudioAssets(pkg);
  if (!need.size) return null;
  for (const c of casts) {
    const have = new Set(Object.keys(c.assets || {}));
    if ([...need].every((id) => have.has(id))) return c;
  }
  return null;
}

/** Person speaking in asset `assetId` at `ms` (null in a gap or for an unknown asset). */
export function speakerAt(cast, assetId, ms) {
  const segs = cast.assets[assetId];
  if (!segs) return null;
  for (const [a, b, who] of segs) if (ms >= a && ms < b) return who;
  return null;
}

export const examinerOf = (cast) => Object.keys(cast.people).find((k) => cast.people[k].role === 'examiner');

/** Who is in the room for a phase: the examiner always; opposite the candidate, the partner of that Teil. */
export function sceneFor(cast, phaseId) {
  const part = PHASE_PART[phaseId] || null;
  const front = part ? (cast.front || {})[String(part)] || null : (cast.front || {})['1'] || null;
  return { part, front, examiner: examinerOf(cast) };
}

/** Status line shown in the room (Stage 1 wording: recorded prompts, never "AI"). */
export function statusText(cast, { speaker = null, recording = false, phaseId = null, prep = false } = {}) {
  if (prep) return 'Vorbereitungszeit';
  if (speaker) return `${cast.people[speaker].label} spricht`;
  if (recording) return phaseId === 'teil2' ? 'Ihre Präsentation' : 'Sie sind dran';
  if (phaseId === 'partner') return 'Präsentation';
  return phaseId ? 'Bitte warten' : 'Prüfungsraum';
}
