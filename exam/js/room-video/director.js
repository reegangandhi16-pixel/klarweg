/* Photoreal exam room — virtual camera director (pure; tested in Node).

   The room is one wide, high-resolution "plate" (photo of the room with everyone seated) plus small video patches
   where people move. The "camera" is a slow, eased reframing of that plate (CSS transform, GPU-composited): it
   leans toward whoever speaks, toward the person the candidate addresses while recording, and back to the
   established framing otherwise. No shake, no fast cuts; prefers-reduced-motion keeps one fixed framing.

   Scene (exam-room/photoreal/scene.json):
     { plate: { w, h, src }, people: { <id>: { role, label, rect: [x, y, w, h] } },   rect = video patch, 0..1 of the plate
       shots: { <name>: { landscape: [cx, cy, zoom], portrait: [cx, cy, zoom] } } }
   Required shots: establish, examiners, partner, address_partner, address_examiners. */

export const SHOT_NAMES = ['establish', 'examiners', 'partner', 'address_partner', 'address_examiners'];

export function validateScene(s) {
  const fail = (m) => { throw new Error('scene: ' + m); };
  if (!s || !s.plate || !(s.plate.w > 0 && s.plate.h > 0)) fail('plate');
  if (!s.people || !Object.keys(s.people).length) fail('people');
  for (const [k, p] of Object.entries(s.people)) {
    if (!['examiner', 'partner'].includes(p.role)) fail(`${k}: role`);
    if (!Array.isArray(p.rect) || p.rect.length !== 4 || p.rect.some((v) => !(v >= 0 && v <= 1))) fail(`${k}: rect`);
  }
  for (const n of SHOT_NAMES) for (const o of ['landscape', 'portrait']) {
    const v = s.shots && s.shots[n] && s.shots[n][o];
    if (!Array.isArray(v) || v.length !== 3 || !(v[2] >= 1)) fail(`shot ${n}.${o}`);
  }
  return s;
}

/** Which shot fits the moment. Teil 1 and Teil 3 are talks with the partner; Teil 2 is presented to the examiners. */
export function shotFor(scene, { speaker = null, recording = false, part = null, prep = false } = {}) {
  if (speaker) return scene.people[speaker] && scene.people[speaker].role === 'partner' ? 'partner' : 'examiners';
  if (recording) return part === 2 ? 'address_examiners' : 'address_partner';
  if (prep) return 'establish';
  return part === 2 ? 'address_examiners' : 'establish';
}

/** CSS transform (translate px, scale) that frames plate point (cx, cy) at `zoom` × cover scale in a w×h viewport,
    clamped so the plate always covers the viewport (no empty edges). */
export function frameTransform({ plate, w, h, cx, cy, zoom = 1 }) {
  const s = Math.max(w / plate.w, h / plate.h) * Math.max(1, zoom);
  const pw = plate.w * s, ph = plate.h * s;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const tx = clamp(w / 2 - cx * pw, w - pw, 0);
  const ty = clamp(h / 2 - cy * ph, h - ph, 0);
  return { tx: Math.round(tx * 10) / 10, ty: Math.round(ty * 10) / 10, s: Math.round(s * 10000) / 10000 };
}

export const orientationOf = (w, h) => (w / h < 1.1 ? 'portrait' : 'landscape');

export function transformFor(scene, shot, w, h) {
  const [cx, cy, zoom] = scene.shots[shot][orientationOf(w, h)];
  return frameTransform({ plate: scene.plate, w, h, cx, cy, zoom });
}

/** Camera move duration: longer moves take a little longer (1.4–2.2 s), always eased, never a cut. */
export function moveMs(from, to, w) {
  if (!from) return 0;
  const d = Math.hypot(to.tx - from.tx, to.ty - from.ty) / Math.max(1, w);
  return Math.round(Math.min(2200, 1400 + d * 2400));
}
