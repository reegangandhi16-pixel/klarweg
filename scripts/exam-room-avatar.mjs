#!/usr/bin/env node
/* Shrinks a TalkingHead avatar GLB for the exam room without any decoder at runtime (the exam page's CSP has
   no WebAssembly, so Draco/meshopt are out):

   - textures: resized with macOS `sips`; JPEG for images without alpha, PNG only where a material needs alpha
     (MASK/BLEND); the largest texture (skin) keeps up to --skin px, all others up to --max px
   - morph targets: stored as sparse accessors (a face shape moves a few hundred of ~12 000 vertices)
   - everything else is re-packed tightly, one bufferView per accessor
   Output is a standard glTF 2.0 GLB that three.js GLTFLoader reads natively.

   Usage: node scripts/exam-room-avatar.mjs in.glb out.glb [--max 1024] [--skin 2048] [--jpeg 82] */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const COMP = { 5120: [Int8Array, 1], 5121: [Uint8Array, 1], 5122: [Int16Array, 2], 5123: [Uint16Array, 2], 5125: [Uint32Array, 4], 5126: [Float32Array, 4] };
const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };

export function readGlb(buf) {
  if (buf.toString('ascii', 0, 4) !== 'glTF') throw new Error('not a GLB');
  const jlen = buf.readUInt32LE(12);
  const json = JSON.parse(buf.subarray(20, 20 + jlen).toString('utf8'));
  const blen = buf.readUInt32LE(20 + jlen);
  const bin = buf.subarray(28 + jlen, 28 + jlen + blen);
  return { json, bin };
}

export function writeGlb(json, bin) {
  const pad = (b, c) => { const n = (4 - (b.length % 4)) % 4; return n ? Buffer.concat([b, Buffer.alloc(n, c)]) : b; };
  const j = pad(Buffer.from(JSON.stringify(json), 'utf8'), 0x20);
  const b = pad(bin, 0);
  const head = Buffer.alloc(12); head.write('glTF', 0); head.writeUInt32LE(2, 4); head.writeUInt32LE(12 + 8 + j.length + 8 + b.length, 8);
  const jh = Buffer.alloc(8); jh.writeUInt32LE(j.length, 0); jh.writeUInt32LE(0x4E4F534A, 4);
  const bh = Buffer.alloc(8); bh.writeUInt32LE(b.length, 0); bh.writeUInt32LE(0x004E4942, 4);
  return Buffer.concat([head, jh, j, bh, b]);
}

/** Dense element values of an accessor as a typed array (handles byteStride; sparse inputs expanded). */
export function readAccessor(json, bin, i) {
  const a = json.accessors[i];
  const [T, size] = COMP[a.componentType]; const n = NCOMP[a.type];
  const out = new T(a.count * n);
  if (a.bufferView != null) {
    const bv = json.bufferViews[a.bufferView];
    const stride = bv.byteStride || size * n;
    const base = (bv.byteOffset || 0) + (a.byteOffset || 0);
    const view = new DataView(bin.buffer, bin.byteOffset, bin.byteLength);
    const get = { 1: (o) => (T === Int8Array ? view.getInt8(o) : view.getUint8(o)), 2: (o) => (T === Int16Array ? view.getInt16(o, true) : view.getUint16(o, true)), 4: (o) => (T === Float32Array ? view.getFloat32(o, true) : view.getUint32(o, true)) }[size];
    for (let e = 0; e < a.count; e++) for (let c = 0; c < n; c++) out[e * n + c] = get(base + e * stride + c * size);
  }
  if (a.sparse) {
    const idx = readRaw(json, bin, a.sparse.indices, a.sparse.count, a.sparse.indices.componentType, 1);
    const val = readRaw(json, bin, a.sparse.values, a.sparse.count * n, a.componentType, 1);
    for (let k = 0; k < a.sparse.count; k++) for (let c = 0; c < n; c++) out[idx[k] * n + c] = val[k * n + c];
  }
  return out;
}
function readRaw(json, bin, ref, count, componentType) {
  const [T] = COMP[componentType]; const bv = json.bufferViews[ref.bufferView];
  const off = bin.byteOffset + (bv.byteOffset || 0) + (ref.byteOffset || 0);
  return new T(bin.buffer.slice(off, off + count * T.BYTES_PER_ELEMENT));
}

/** Rebuild: dense accessors re-packed, morph-target accessors sparse when that is smaller, images replaced. */
export function repack(json, bin, { images = null, eps = 1e-6, dropMorphNormals = true, quantizeMorphs = true, quantizeBase = true } = {}) {
  json = JSON.parse(JSON.stringify(json));
  if (dropMorphNormals) for (const m of json.meshes || []) for (const p of m.primitives) for (const t of p.targets || []) { delete t.NORMAL; delete t.TANGENT; }
  const morphAcc = new Set(), morphPos = new Set();
  for (const m of json.meshes || []) for (const p of m.primitives) for (const t of p.targets || []) for (const [k, a] of Object.entries(t)) { morphAcc.add(a); if (k === 'POSITION') morphPos.add(a); }
  const out = { ...json, bufferViews: [], accessors: [], buffers: [{ byteLength: 0 }] };
  const used = new Set();   // accessors still referenced (dropped morph normals are removed below)
  const mark = (i) => { if (i != null) used.add(i); };
  for (const m of json.meshes || []) for (const p of m.primitives) { Object.values(p.attributes).forEach(mark); mark(p.indices); for (const t of p.targets || []) Object.values(t).forEach(mark); }
  for (const sk of json.skins || []) mark(sk.inverseBindMatrices);
  for (const an of json.animations || []) for (const smp of an.samplers) { mark(smp.input); mark(smp.output); }
  const remap = new Map();
  const chunks = []; let len = 0;
  const push = (bytes, extra = {}) => {
    const padN = (4 - (len % 4)) % 4; if (padN) { chunks.push(Buffer.alloc(padN)); len += padN; }
    const bv = { buffer: 0, byteOffset: len, byteLength: bytes.length, ...extra };
    chunks.push(bytes); len += bytes.length; out.bufferViews.push(bv); return out.bufferViews.length - 1;
  };
  const targetOf = (i) => {   // ARRAY_BUFFER for vertex data, ELEMENT_ARRAY_BUFFER for indices
    for (const m of json.meshes || []) for (const p of m.primitives) if (p.indices === i) return 34963;
    return null;
  };
  let sparseCount = 0, quantized = 0;
  json.accessors.forEach((a, i) => {
    if (!used.has(i)) return;
    remap.set(i, out.accessors.length);
    const data = readAccessor(json, bin, i);
    const n = NCOMP[a.type];
    const acc = { ...a }; delete acc.bufferView; delete acc.byteOffset; delete acc.sparse;
    if (morphAcc.has(i) && a.componentType === 5126) {
      const idx = [];
      for (let e = 0; e < a.count; e++) { let nz = false; for (let c = 0; c < n; c++) if (Math.abs(data[e * n + c]) > eps) { nz = true; break; } if (nz) idx.push(e); }
      if (idx.length * (4 + n * 4) < a.count * n * 4) {
        // KHR_mesh_quantization: morph POSITION deltas as normalized int16 (|delta| < 1 m; step 0.03 mm)
        const q = quantizeMorphs && morphPos.has(i) && data.every((v) => Math.abs(v) < 1);
        const vals = q ? new Int16Array(idx.length * n) : new Float32Array(idx.length * n);
        idx.forEach((e, k) => { for (let c = 0; c < n; c++) vals[k * n + c] = q ? Math.round(data[e * n + c] * 32767) : data[e * n + c]; });
        if (q) { acc.componentType = 5122; acc.normalized = true; quantized++; }
        if (idx.length) {
          acc.sparse = { count: idx.length, indices: { bufferView: push(Buffer.from(new Uint32Array(idx).buffer)), componentType: 5125 }, values: { bufferView: push(Buffer.from(vals.buffer)) } };
        }
        const mm = minMax(data, n, a.count);
        Object.assign(acc, q ? { min: mm.min.map((v) => Math.round(v * 32767) / 32767), max: mm.max.map((v) => Math.round(v * 32767) / 32767) } : mm);
        out.accessors.push(acc); sparseCount++; return;
      }
    }
    const t = targetOf(i);
    const q = quantizeBase ? quantizeAttribute(json, i, data, acc) : null;
    const typed = q || data;
    if (q) quantized++;
    acc.bufferView = push(Buffer.from(typed.buffer, typed.byteOffset, typed.byteLength), t ? { target: t } : (json.bufferViews[a.bufferView]?.target ? { target: json.bufferViews[a.bufferView].target } : {}));
    out.accessors.push(acc);
  });
  // re-point every accessor reference to the new indices
  const re = (i) => remap.get(i);
  for (const m of out.meshes || []) for (const p of m.primitives) {
    for (const k of Object.keys(p.attributes)) p.attributes[k] = re(p.attributes[k]);
    if (p.indices != null) p.indices = re(p.indices);
    for (const t of p.targets || []) for (const k of Object.keys(t)) t[k] = re(t[k]);
  }
  for (const sk of out.skins || []) if (sk.inverseBindMatrices != null) sk.inverseBindMatrices = re(sk.inverseBindMatrices);
  for (const an of out.animations || []) for (const smp of an.samplers) { smp.input = re(smp.input); smp.output = re(smp.output); }
  if (quantized) {
    out.extensionsUsed = [...new Set([...(out.extensionsUsed || []), 'KHR_mesh_quantization'])];
    out.extensionsRequired = [...new Set([...(out.extensionsRequired || []), 'KHR_mesh_quantization'])];
  }
  out.images = (json.images || []).map((im, i) => {
    const bytes = images ? images[i].bytes : bin.subarray(json.bufferViews[im.bufferView].byteOffset || 0, (json.bufferViews[im.bufferView].byteOffset || 0) + json.bufferViews[im.bufferView].byteLength);
    const mime = images ? images[i].mime : im.mimeType;
    return { ...(im.name ? { name: im.name } : {}), mimeType: mime, bufferView: push(Buffer.from(bytes)) };
  });
  out.buffers[0].byteLength = len;
  return { json: out, bin: Buffer.concat(chunks), sparseCount, quantized };
}
/* Base attributes in KHR_mesh_quantization forms three.js reads natively. Mutates acc (componentType,
   normalized, min/max); returns the new typed array or null to keep the data as is. */
function quantizeAttribute(json, i, data, acc) {
  const sem = attributeSemantic(json, i);
  if (sem === 'NORMAL' && acc.componentType === 5126) {
    acc.componentType = 5120; acc.normalized = true; delete acc.min; delete acc.max;
    return Int8Array.from(data, (v) => Math.max(-127, Math.min(127, Math.round(v * 127))));
  }
  if (sem === 'TEXCOORD_0' && acc.componentType === 5126 && data.every((v) => v >= 0 && v <= 1)) {
    acc.componentType = 5123; acc.normalized = true; delete acc.min; delete acc.max;
    return Uint16Array.from(data, (v) => Math.round(v * 65535));
  }
  if (sem === 'WEIGHTS_0' && acc.componentType === 5126) {
    const out = new Uint8Array(data.length);
    for (let e = 0; e < data.length; e += 4) {   // keep each vertex's weights summing to exactly 255
      const w = [0, 1, 2, 3].map((c) => Math.round(data[e + c] * 255));
      let diff = 255 - (w[0] + w[1] + w[2] + w[3]);
      const big = w.indexOf(Math.max(...w)); w[big] += diff;
      for (let c = 0; c < 4; c++) out[e + c] = Math.max(0, w[c]);
    }
    acc.componentType = 5121; acc.normalized = true; delete acc.min; delete acc.max;
    return out;
  }
  if (sem === 'INDICES' && acc.componentType === 5125) {
    let max = 0; for (const v of data) if (v > max) max = v;
    if (max < 65535) { acc.componentType = 5123; return Uint16Array.from(data); }
  }
  return null;
}
function attributeSemantic(json, i) {
  for (const m of json.meshes || []) for (const p of m.primitives) {
    if (p.indices === i) return 'INDICES';
    for (const [k, a] of Object.entries(p.attributes)) if (a === i) return k;
  }
  return null;
}

function minMax(d, n, count) {
  const min = Array(n).fill(Infinity), max = Array(n).fill(-Infinity);
  for (let e = 0; e < count; e++) for (let c = 0; c < n; c++) { const v = d[e * n + c]; if (v < min[c]) min[c] = v; if (v > max[c]) max[c] = v; }
  return { min, max };
}

/** Which images need alpha: referenced as baseColorTexture by a MASK/BLEND material. */
function alphaImages(json) {
  const s = new Set();
  for (const m of json.materials || []) {
    const t = m.pbrMetallicRoughness?.baseColorTexture?.index;
    if (t != null && m.alphaMode && m.alphaMode !== 'OPAQUE') s.add(json.textures[t].source);
  }
  return s;
}

function main(argv) {
  const [inp, outp] = argv;
  const opt = { max: 1024, skin: 2048, jpeg: 82 };
  for (let i = 2; i < argv.length; i += 2) opt[argv[i].replace(/^--/, '')] = Number(argv[i + 1]);
  const { json, bin } = readGlb(fs.readFileSync(inp));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kx-avatar-'));
  const alpha = alphaImages(json);
  const sizes = (json.images || []).map((im) => json.bufferViews[im.bufferView].byteLength);
  const biggest = sizes.indexOf(Math.max(...sizes));
  const images = (json.images || []).map((im, i) => {
    const bv = json.bufferViews[im.bufferView];
    const src = path.join(tmp, `in${i}` + (im.mimeType === 'image/png' ? '.png' : '.jpg'));
    fs.writeFileSync(src, bin.subarray(bv.byteOffset || 0, (bv.byteOffset || 0) + bv.byteLength));
    const px = i === biggest ? opt.skin : opt.max;
    const keepAlpha = alpha.has(i);
    const dst = path.join(tmp, `out${i}` + (keepAlpha ? '.png' : '.jpg'));
    execFileSync('sips', ['-Z', String(px), ...(keepAlpha ? ['-s', 'format', 'png'] : ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(opt.jpeg)]), src, '--out', dst], { stdio: 'ignore' });
    return { bytes: fs.readFileSync(dst), mime: keepAlpha ? 'image/png' : 'image/jpeg' };
  });
  const r = repack(json, bin, { images });
  r.json.asset = { ...(json.asset || {}), generator: (json.asset?.generator || '') + ' + klarweg exam-room-avatar' };
  const glb = writeGlb(r.json, r.bin);
  fs.writeFileSync(outp, glb);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${path.basename(inp)} ${(fs.statSync(inp).size / 1e6).toFixed(1)} MB → ${path.basename(outp)} ${(glb.length / 1e6).toFixed(1)} MB (${r.sparseCount} sparse morph accessors)`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
