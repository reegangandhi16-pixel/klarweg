/* The 3-D exam room (browser). One WebGL renderer and one scene for everybody (mobile memory), avatars as
   TalkingHead "avatarOnly" armatures. The candidate's seat is the camera.

   Layout (metres): table centre at z = -0.55; the partner sits opposite the candidate, slightly left; the
   examiner sits at the right end of the table, turned towards the candidate. Bright, neutral room:
   warm white walls, daylight window on the left, light oak table, name cards.

   Performance: frame cap (30 desktop / 24 mobile), pixel ratio cap, rendering pauses while the stage is
   off-screen, collapsed or the tab is hidden. prefers-reduced-motion keeps the camera still and halves idle
   head motion. */
import * as THREE from '/exam-room/vendor/three/build/three.module.js';
import { RoomEnvironment } from '/exam-room/vendor/three/examples/jsm/environments/RoomEnvironment.js';

const AVATAR_BASE = '/exam-room/avatars/';
const SEATS = {
  front: { pos: [-0.42, 0, -1.05], rotY: 0.18 },
  examiner: { pos: [0.78, 0, -0.92], rotY: -0.55 },
};
const EYE = new THREE.Vector3(0, 1.2, 0.55);   // candidate's eyes

export async function createStage(mount, { people, mobile = false, reduced = false, log = () => {} }) {
  const { TalkingHead } = await import('/exam-room/vendor/talkinghead/modules/talkinghead.mjs');
  const canvasBox = document.createElement('div'); canvasBox.className = 'kx-room-canvas';
  mount.appendChild(canvasBox);

  const renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  canvasBox.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#EEEBE3');
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(mobile ? 36 : 32, 1, 0.05, 30);
  camera.position.copy(EYE);
  buildRoom(scene, people, mobile);

  // lights: soft fill + daylight from the window (left), no shadow maps (cost)
  scene.add(new THREE.HemisphereLight('#FFFFFF', '#D8CFC0', 0.9));
  const sun = new THREE.DirectionalLight('#FFF6E8', 1.6); sun.position.set(-3, 3, 0.5); scene.add(sun);
  const fill = new THREE.DirectionalLight('#FFFFFF', 0.45); fill.position.set(2, 2, 2); scene.add(fill);

  // avatars
  const heads = {};
  for (const [key, p] of Object.entries(people)) {
    if (!p.seat) continue;
    const head = new TalkingHead(canvasBox, {
      avatarOnly: true, avatarOnlyCamera: camera, avatarOnlyScene: scene,
      lipsyncModules: [], cameraRotateEnable: false, modelFPS: mobile ? 24 : 30,
      avatarIdleEyeContact: 0.35, avatarIdleHeadMove: reduced ? 0.15 : 0.35,
      avatarSpeakingEyeContact: 0.7, avatarSpeakingHeadMove: reduced ? 0.2 : 0.5,
      avatarListeningEyeContact: 0.6,
    });
    try { head.audioCtx && head.audioCtx.close(); } catch { /* never plays audio: speech comes from the exam's <audio> */ }
    const started = performance.now();
    await head.showAvatar({ url: AVATAR_BASE + p.avatar + '.glb', body: p.body || 'F', avatarMood: 'neutral', lipsyncLang: 'de' });
    const seat = SEATS[p.seat];
    head.armature.position.set(seat.pos[0], seat.pos[1] - 0.42, seat.pos[2]);   // lowered: "seated" behind the table
    head.armature.rotation.y = seat.rotY;
    heads[key] = head;
    log('room_avatar_loaded', { person: key, ms: Math.round(performance.now() - started) });
  }

  // framing from the avatars' real eye positions (model heights differ): wide screens fit everybody visible at the
  // table; portrait phones follow the person in focus (the speaker, else the person opposite) at conversation distance
  let focus = null;
  const aim = new THREE.Vector3(0.15, 1.15, -1.0), aimTarget = aim.clone();
  const camTarget = camera.position.clone();
  function eyeOf(h) {
    if (!h.armature.visible || !h.objectLeftEye) return null;
    h.objectLeftEye.updateMatrixWorld(true);
    return new THREE.Vector3().setFromMatrixPosition(h.objectLeftEye.matrixWorld);
  }
  function frame() {
    const eyes = Object.entries(heads).map(([k, h]) => [k, eyeOf(h)]).filter(([, e]) => e);
    if (!eyes.length) return;
    const narrow = camera.aspect < 1.1;
    const pick = narrow && focus && eyes.find(([k]) => k === focus) ? eyes.filter(([k]) => k === focus) : eyes;
    let minX = Infinity, maxX = -Infinity, y = 0, z = 0;
    for (const [, e] of pick) { minX = Math.min(minX, e.x); maxX = Math.max(maxX, e.x); y += e.y; z += e.z; }
    y /= pick.length; z /= pick.length;
    const cx = (minX + maxX) / 2;
    const halfW = (maxX - minX) / 2 + (narrow ? 0.34 : 0.5);        // shoulders + a little room either side
    const vHalf = THREE.MathUtils.degToRad(camera.fov / 2);
    const hHalf = Math.atan(Math.tan(vHalf) * camera.aspect);
    const dist = THREE.MathUtils.clamp(Math.max(halfW / Math.tan(hHalf), 0.62 / Math.tan(vHalf)), 1.2, 3.4);
    // the candidate sits on the near side of the table, eyes level with the others (seated eye height)
    camTarget.set(narrow ? cx * 0.6 : cx * 0.5, y + 0.02, Math.min(2.6, z + dist));
    aimTarget.set(cx, y - (narrow ? 0.1 : 0.16), z);
  }

  function resize() {
    const w = canvasBox.clientWidth || 1, h = canvasBox.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(canvasBox); resize();

  const host = mount.closest('.kx-room') || mount;
  let visible = true, running = true, framed = false, last = performance.now(), acc = 0;
  const frameMs = 1000 / (mobile ? 24 : 30);
  const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { threshold: 0.02 });
  io.observe(canvasBox);
  let onFrame = null;
  function loop(now) {
    if (!running) return;
    requestAnimationFrame(loop);
    if (!visible || document.hidden || host.dataset.collapsed === 'true') { last = now; return; }
    acc += now - last; last = now;
    if (acc < frameMs) return;
    const dt = Math.min(acc, 100); acc = 0;
    if (onFrame) onFrame(dt);
    for (const h of Object.values(heads)) h.animate(dt);
    frame();
    const k = reduced || !framed ? 1 : Math.min(1, dt / 500);   // first frame: no swoop in
    framed = true;
    aim.lerp(aimTarget, k); camera.position.lerp(camTarget, k);
    camera.lookAt(aim);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(loop);

  return {
    heads, camera,
    setFocus(key) { focus = key; },
    setFrameHook(fn) { onFrame = fn; },
    destroy() {
      running = false; ro.disconnect(); io.disconnect();
      for (const h of Object.values(heads)) { try { h.dispose(); } catch {} }
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); });
      renderer.dispose(); canvasBox.remove();
    },
  };
}

/* ---------- room geometry (procedural; no external textures) ---------- */
function mat(color, rough = 0.85, metal = 0) { return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal }); }
function box(w, h, d, m, x, y, z) { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); return o; }

function labelTexture(text) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, 512, 128);
  g.fillStyle = '#0E0E10'; g.font = '500 54px Inter, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 256, 66);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function buildRoom(scene, people, mobile) {
  const wall = mat('#F3F0E8', 0.95), floor = mat('#C9B79C', 0.7), oak = mat('#D8C4A2', 0.55), frame = mat('#FFFFFF', 0.6);
  const room = new THREE.Group();
  room.add(box(9, 0.02, 9, floor, 0, 0, -1.5));                     // floor
  room.add(box(9, 3, 0.05, wall, 0, 1.5, -3.2));                    // back wall
  room.add(box(0.05, 3, 9, wall, -2.4, 1.5, -1.5));                 // left wall (window)
  room.add(box(0.05, 3, 9, wall, 2.6, 1.5, -1.5));                  // right wall
  room.add(box(9, 0.04, 9, mat('#FAF8F3', 1), 0, 3, -1.5));         // ceiling
  // window: frame + daylight panes (emissive, so the room reads as daylit)
  const pane = new THREE.MeshStandardMaterial({ color: '#EAF3F8', emissive: '#EAF3F8', emissiveIntensity: 0.9, roughness: 1 });
  room.add(box(0.04, 1.5, 1.9, frame, -2.37, 1.55, -1.6));
  for (const z of [-2.05, -1.15]) room.add(box(0.05, 1.36, 0.82, pane, -2.35, 1.55, z));
  // whiteboard on the back wall, ceiling light panels
  room.add(box(1.6, 0.9, 0.03, mat('#FFFFFF', 0.35), 0.6, 1.65, -3.16));
  room.add(box(1.64, 0.03, 0.06, mat('#B8B8B8', 0.4, 0.6), 0.6, 1.18, -3.12));
  const lamp = new THREE.MeshStandardMaterial({ color: '#FFFFFF', emissive: '#FFFFFF', emissiveIntensity: 0.7 });
  for (const x of [-0.8, 0.8]) room.add(box(1.0, 0.02, 0.5, lamp, x, 2.98, -1.4));
  // table (light oak) between candidate and the examiners, with papers and name cards
  room.add(box(2.4, 0.04, 1.0, oak, 0.15, 0.74, -0.6));
  for (const x of [-0.95, 1.25]) for (const z of [-0.15, -1.05]) room.add(box(0.05, 0.72, 0.05, mat('#9C8A70', 0.6), x, 0.37, z));
  const paper = mat('#FFFFFF', 0.9);
  const p1 = box(0.21, 0.004, 0.297, paper, -0.15, 0.763, -0.25); p1.rotation.y = 0.06; room.add(p1);
  const p2 = box(0.21, 0.004, 0.297, paper, 0.7, 0.763, -0.7); p2.rotation.y = -0.4; room.add(p2);
  for (const [key, p] of Object.entries(people)) {
    if (!p.seat || !p.card) continue;
    const tex = labelTexture(p.card);
    const card = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.06), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
    const s = SEATS[p.seat];
    card.position.set(s.pos[0] + 0.05, 0.79, s.pos[2] + 0.5); card.rotation.set(-0.35, s.rotY * 0.6, 0);
    room.add(card);
  }
  // water glasses (examiner side)
  const glass = new THREE.MeshPhysicalMaterial({ color: '#FFFFFF', roughness: 0.05, transmission: mobile ? 0 : 0.9, transparent: true, opacity: mobile ? 0.35 : 1, thickness: 0.01 });
  const g = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.03, 0.11, 24), glass); g.position.set(0.95, 0.815, -0.45); room.add(g);
  scene.add(room);
}
