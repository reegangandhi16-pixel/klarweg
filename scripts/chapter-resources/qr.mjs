/* ============================================================
   KLARWEG — minimal QR encoder for chapter resource PDFs
   Byte mode, error correction M, versions 1–10 (up to 213 bytes —
   every chapter URL fits). Pure and dependency-free, like the rest
   of the generator; output is a vector SVG so print stays sharp.
   Follows ISO/IEC 18004 (structure after Nayuki's reference encoder).
============================================================ */

// Error correction level M, indexed by version (index 0 unused).
const ECC_PER_BLOCK = [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26];
const NUM_BLOCKS = [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5];
const ECL_FORMAT_BITS = 0;   // M
const MAX_VERSION = 10;

const bit = (x, i) => ((x >>> i) & 1) !== 0;

function rawDataModules(ver) {
  let n = (16 * ver + 128) * ver + 64;
  if (ver >= 2) {
    const align = Math.floor(ver / 7) + 2;
    n -= (25 * align - 10) * align - 55;
    if (ver >= 7) n -= 36;
  }
  return n;
}
const dataCodewords = (ver) => Math.floor(rawDataModules(ver) / 8) - ECC_PER_BLOCK[ver] * NUM_BLOCKS[ver];

/* ---------- Reed–Solomon over GF(256), polynomial 0x11D ---------- */
function gfMul(x, y) {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z;
}
function rsDivisor(degree) {
  const out = new Array(degree).fill(0);
  out[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < out.length; j++) {
      out[j] = gfMul(out[j], root);
      if (j + 1 < out.length) out[j] ^= out[j + 1];
    }
    root = gfMul(root, 0x02);
  }
  return out;
}
function rsRemainder(data, divisor) {
  const out = divisor.map(() => 0);
  for (const b of data) {
    const factor = b ^ out.shift();
    out.push(0);
    divisor.forEach((coef, i) => { out[i] ^= gfMul(coef, factor); });
  }
  return out;
}

/* ---------- data codewords (byte mode) ---------- */
function encodeData(bytes, ver) {
  const bits = [];
  const push = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
  push(0b0100, 4);
  push(bytes.length, ver <= 9 ? 8 : 16);
  bytes.forEach((b) => push(b, 8));
  const capacity = dataCodewords(ver) * 8;
  push(0, Math.min(4, capacity - bits.length));
  push(0, (8 - (bits.length % 8)) % 8);
  for (let pad = 0xec; bits.length < capacity; pad ^= 0xec ^ 0x11) push(pad, 8);
  const out = [];
  for (let i = 0; i < bits.length; i += 8) out.push(bits.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
  return out;
}

function addEccAndInterleave(data, ver) {
  const numBlocks = NUM_BLOCKS[ver];
  const eccLen = ECC_PER_BLOCK[ver];
  const rawCodewords = Math.floor(rawDataModules(ver) / 8);
  const numShort = numBlocks - (rawCodewords % numBlocks);
  const shortLen = Math.floor(rawCodewords / numBlocks);
  const divisor = rsDivisor(eccLen);
  const blocks = [];
  for (let i = 0, k = 0; i < numBlocks; i++) {
    const dat = data.slice(k, k + shortLen - eccLen + (i < numShort ? 0 : 1));
    k += dat.length;
    const ecc = rsRemainder(dat, divisor);
    if (i < numShort) dat.push(0);   // placeholder so every block has equal length
    blocks.push(dat.concat(ecc));
  }
  const out = [];
  for (let i = 0; i < blocks[0].length; i++) {
    blocks.forEach((block, j) => {
      if (i !== shortLen - eccLen || j >= numShort) out.push(block[i]);
    });
  }
  return out;
}

/* ---------- matrix ---------- */
function alignmentPositions(ver) {
  if (ver === 1) return [];
  const count = Math.floor(ver / 7) + 2;
  const step = Math.ceil((ver * 4 + 4) / (count * 2 - 2)) * 2;
  const out = [6];
  for (let pos = ver * 4 + 17 - 7; out.length < count; pos -= step) out.splice(1, 0, pos);
  return out;
}

function buildMatrix(codewords, ver, mask) {
  const size = ver * 4 + 17;
  const dark = Array.from({ length: size }, () => new Array(size).fill(false));
  const fixed = Array.from({ length: size }, () => new Array(size).fill(false));
  const set = (x, y, isDark) => { dark[y][x] = isDark; fixed[y][x] = true; };

  for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
  for (const [cx, cy] of [[3, 3], [size - 4, 3], [3, size - 4]]) {
    for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
      const d = Math.max(Math.abs(dx), Math.abs(dy));
      const x = cx + dx, y = cy + dy;
      if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4);
    }
  }
  const align = alignmentPositions(ver);
  align.forEach((ax, i) => align.forEach((ay, j) => {
    if ((i === 0 && j === 0) || (i === 0 && j === align.length - 1) || (i === align.length - 1 && j === 0)) return;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }));

  // format information
  const fdata = (ECL_FORMAT_BITS << 3) | mask;
  let rem = fdata;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  const fbits = ((fdata << 10) | rem) ^ 0x5412;
  for (let i = 0; i <= 5; i++) set(8, i, bit(fbits, i));
  set(8, 7, bit(fbits, 6));
  set(8, 8, bit(fbits, 7));
  set(7, 8, bit(fbits, 8));
  for (let i = 9; i < 15; i++) set(14 - i, 8, bit(fbits, i));
  for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(fbits, i));
  for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(fbits, i));
  set(8, size - 8, true);

  // version information (v7+)
  if (ver >= 7) {
    let vrem = ver;
    for (let i = 0; i < 12; i++) vrem = (vrem << 1) ^ ((vrem >>> 11) * 0x1f25);
    const vbits = (ver << 12) | vrem;
    for (let i = 0; i < 18; i++) {
      const a = size - 11 + (i % 3), b = Math.floor(i / 3);
      set(a, b, bit(vbits, i));
      set(b, a, bit(vbits, i));
    }
  }

  // data in the zigzag order, then the mask
  let i = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const y = ((right + 1) & 2) === 0 ? size - 1 - vert : vert;
        if (!fixed[y][x] && i < codewords.length * 8) {
          dark[y][x] = bit(codewords[i >>> 3], 7 - (i & 7));
          i++;
        }
      }
    }
  }
  const MASKS = [
    (x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x) => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
    (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => (x * y) % 2 + (x * y) % 3 === 0,
    (x, y) => ((x * y) % 2 + (x * y) % 3) % 2 === 0, (x, y) => ((x + y) % 2 + (x * y) % 3) % 2 === 0,
  ];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!fixed[y][x] && MASKS[mask](x, y)) dark[y][x] = !dark[y][x];
  return dark;
}

/* Penalty score (ISO/IEC 18004 §7.8.3) — picks the most readable mask. */
function penalty(m) {
  const size = m.length;
  let score = 0;
  const lines = [];
  for (let y = 0; y < size; y++) lines.push(m[y]);
  for (let x = 0; x < size; x++) lines.push(m.map((row) => row[x]));
  const FINDER_A = [true, false, true, true, true, false, true, false, false, false, false];
  const FINDER_B = [false, false, false, false, true, false, true, true, true, false, true];
  for (const line of lines) {
    for (let i = 0, run = 1; i < size; i++, run++) {
      if (i === size - 1 || line[i] !== line[i + 1]) { if (run >= 5) score += run - 2; run = 0; }
    }
    for (let i = 0; i + 11 <= size; i++) {
      if (FINDER_A.every((v, k) => line[i + k] === v) || FINDER_B.every((v, k) => line[i + k] === v)) score += 40;
    }
  }
  let darkCount = 0;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (m[y][x]) darkCount++;
    if (x < size - 1 && y < size - 1 && m[y][x] === m[y][x + 1] && m[y][x] === m[y + 1][x] && m[y][x] === m[y + 1][x + 1]) score += 3;
  }
  const total = size * size;
  score += Math.floor(Math.abs(darkCount * 20 - total * 10) / total) * 10;
  return score;
}

/* → { version, mask, size, modules: boolean[row][col] }. `mask` (0–7) is
   for tests; normally the lowest-penalty mask is chosen. */
export function qrMatrix(text, { mask } = {}) {
  const bytes = [...new TextEncoder().encode(String(text))];
  let ver = 1;
  while (ver <= MAX_VERSION && 4 + (ver <= 9 ? 8 : 16) + bytes.length * 8 > dataCodewords(ver) * 8) ver++;
  if (ver > MAX_VERSION) throw new Error(`QR: ${bytes.length} bytes is too long (max version ${MAX_VERSION})`);
  const codewords = addEccAndInterleave(encodeData(bytes, ver), ver);
  let best = null;
  for (const m of mask == null ? [0, 1, 2, 3, 4, 5, 6, 7] : [mask]) {
    const modules = buildMatrix(codewords, ver, m);
    const score = penalty(modules);
    if (!best || score < best.score) best = { version: ver, mask: m, size: modules.length, modules, score };
  }
  delete best.score;
  return best;
}

/* Vector QR: one path of dark runs on a white quiet zone (4 modules, as the
   standard requires). Sized by CSS; crispEdges keeps module edges exact. */
export function qrSvg(text, { quiet = 4, label = '' } = {}) {
  const { size, modules } = qrMatrix(text);
  const dim = size + quiet * 2;
  let d = '';
  modules.forEach((row, y) => {
    for (let x = 0; x < size; x++) {
      if (!row[x]) continue;
      let run = 1;
      while (x + run < size && row[x + run]) run++;
      d += `M${x + quiet} ${y + quiet}h${run}v1h-${run}z`;
      x += run - 1;
    }
  });
  const a11y = label ? ` role="img" aria-label="${label.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`)}"` : ' aria-hidden="true"';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dim} ${dim}" shape-rendering="crispEdges"${a11y}><rect width="${dim}" height="${dim}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
}
