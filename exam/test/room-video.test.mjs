import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateScene, shotFor, frameTransform, transformFor, moveMs, orientationOf, SHOT_NAMES } from '../js/room-video/director.js';
import { validateCast } from '../js/room/cast.js';

const scene = JSON.parse(fs.readFileSync(new URL('../../exam-room/photoreal/scene.json', import.meta.url)));

test('scene: valid, every shot for both orientations, patches inside the plate', () => {
  validateScene(scene);
  for (const n of SHOT_NAMES) assert.ok(scene.shots[n].landscape && scene.shots[n].portrait);
  for (const p of Object.values(scene.people)) { assert.ok(p.rect[0] + p.rect[2] <= 1); assert.ok(p.rect[1] + p.rect[3] <= 1); }
  assert.throws(() => validateScene({ ...scene, shots: { ...scene.shots, partner: { landscape: [0.5, 0.5, 0.9], portrait: [0.5, 0.5, 1] } } }), /shot partner/);
});

test('scene matches the demo cast: one partner, two examiners', () => {
  const demo = JSON.parse(fs.readFileSync(new URL('../../exam-room/preview/demo-script.json', import.meta.url)));
  const cast = validateCast({ id: 'demo', assets: {}, ...demo.cast });
  assert.deepEqual(Object.keys(cast.people).sort(), Object.keys(scene.people).sort());
  assert.equal(Object.values(cast.people).filter((p) => p.role === 'examiner').length, 2);
  assert.deepEqual(new Set(Object.values(cast.front)), new Set(['partner']));
});

test('shots: speaker first, then whom the candidate addresses', () => {
  assert.equal(shotFor(scene, { speaker: 'partner' }), 'partner');
  assert.equal(shotFor(scene, { speaker: 'examiner' }), 'examiners');
  assert.equal(shotFor(scene, { speaker: 'assessor', recording: true, part: 1 }), 'examiners');
  assert.equal(shotFor(scene, { recording: true, part: 1 }), 'address_partner');
  assert.equal(shotFor(scene, { recording: true, part: 3 }), 'address_partner');
  assert.equal(shotFor(scene, { recording: true, part: 2 }), 'address_examiners');
  assert.equal(shotFor(scene, { prep: true }), 'establish');
  assert.equal(shotFor(scene, {}), 'establish');
});

test('frameTransform: plate always covers the viewport (no empty edges), any shot, any size', () => {
  for (const [w, h] of [[1280, 720], [960, 440], [390, 488], [360, 640], [1024, 1366]]) for (const n of SHOT_NAMES) {
    const t = transformFor(scene, n, w, h);
    assert.ok(t.tx <= 0 && t.ty <= 0, `${n} ${w}x${h} origin`);
    assert.ok(t.tx + scene.plate.w * t.s >= w - 0.2 && t.ty + scene.plate.h * t.s >= h - 0.2, `${n} ${w}x${h} far edge`);
  }
  const t = frameTransform({ plate: { w: 100, h: 100 }, w: 100, h: 100, cx: 0.5, cy: 0.5, zoom: 2 });
  assert.deepEqual(t, { tx: -50, ty: -50, s: 2 });
});

test('camera: partner shot is left of the examiners shot; moves are slow and eased (no cuts)', () => {
  for (const [w, h] of [[1280, 720], [390, 488]]) {
    const pc = transformFor(scene, 'partner', w, h), ex = transformFor(scene, 'examiners', w, h);
    assert.ok(pc.tx > ex.tx, `${w}x${h}: panning to the partner moves the plate right`);
  }
  assert.equal(orientationOf(390, 488), 'portrait'); assert.equal(orientationOf(1280, 720), 'landscape');
  const a = transformFor(scene, 'partner', 1280, 720), b = transformFor(scene, 'examiners', 1280, 720);
  const ms = moveMs(a, b, 1280);
  assert.ok(ms >= 1400 && ms <= 2200, String(ms));
  assert.equal(moveMs(null, b, 1280), 0);
});
