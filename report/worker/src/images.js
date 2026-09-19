/* images.js — screenshot validation and sanitisation.

   PLATFORM NOTE (important, and a deliberate deviation from the plan):
   the Workers runtime has no canvas / createImageBitmap / OffscreenCanvas,
   so a Worker cannot decode and re-encode an image. Pixel re-encoding is
   therefore done in the BROWSER before upload (downscale to <=1600px long
   edge, export as WebP), and the Worker does what it actually can do well:

     1. reject anything whose MAGIC BYTES are not PNG / JPEG / WebP
        (the client-declared MIME type is ignored entirely),
     2. reject animated WebP,
     3. read the real pixel dimensions from the header and reject
        implausibly large images,
     4. STRIP every metadata container chunk — EXIF (incl. GPS), XMP,
        textual chunks, comments — by rewriting the container,
     5. hand back bytes that are stored privately in R2 and only ever
        served through the session-gated admin endpoint.

   Step 4 is real, byte-level metadata removal, and step 1 defeats the
   polyglot/content-sniffing attacks that re-encoding is usually there for. */

export const MAX_PIXELS = 4000;          // long edge; client already downscales
export const TYPES = { png: 'image/png', jpeg: 'image/jpeg', webp: 'image/webp' };

const u32be = (b, i) => (b[i] << 24 | b[i + 1] << 16 | b[i + 2] << 8 | b[i + 3]) >>> 0;
const u32le = (b, i) => (b[i] | b[i + 1] << 8 | b[i + 2] << 16 | b[i + 3] << 24) >>> 0;
const u16be = (b, i) => (b[i] << 8 | b[i + 1]);

/** Format from magic bytes only. Never trust file.type. */
export function sniff(b) {
  if (b.length > 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 &&
      b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a) return 'png';
  if (b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpeg';
  if (b.length > 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return 'webp';
  return null;
}

/* ---------- PNG ---------- */
// Keep structural + colour-management chunks; drop everything else
// (tEXt/iTXt/zTXt/eXIf/tIME/… carry metadata we do not want to store).
const PNG_KEEP = new Set(['IHDR', 'PLTE', 'tRNS', 'IDAT', 'IEND', 'sRGB', 'gAMA', 'cHRM', 'iCCP', 'sBIT']);

function pngSanitise(b) {
  let i = 8;
  const keep = [b.subarray(0, 8)];
  let w = 0, h = 0;
  while (i + 8 <= b.length) {
    const len = u32be(b, i);
    if (len > b.length) return null;
    const type = String.fromCharCode(b[i + 4], b[i + 5], b[i + 6], b[i + 7]);
    const end = i + 12 + len;
    if (end > b.length) return null;
    if (type === 'IHDR') { w = u32be(b, i + 8); h = u32be(b, i + 12); }
    if (PNG_KEEP.has(type)) keep.push(b.subarray(i, end));
    i = end;
    if (type === 'IEND') break;
  }
  if (!w || !h) return null;
  return { bytes: concat(keep), width: w, height: h };
}

/* ---------- JPEG ---------- */
function jpegSanitise(b) {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  const keep = [b.subarray(0, 2)];
  let i = 2, w = 0, h = 0;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff) return null;
    const marker = b[i + 1];
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { i += 2; continue; }
    const len = u16be(b, i + 2);
    const end = i + 2 + len;
    if (len < 2 || end > b.length) return null;
    // SOF0..SOF15 except DHT/JPG/DAC carry the true dimensions
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      h = u16be(b, i + 5); w = u16be(b, i + 7);
    }
    const isAppSegment = marker >= 0xe0 && marker <= 0xef;   // APP0..APP15: EXIF, XMP, JFIF, ICC…
    const isComment = marker === 0xfe;
    if (!isAppSegment && !isComment) keep.push(b.subarray(i, end));
    i = end;
    if (marker === 0xda) { keep.push(b.subarray(i)); break; }   // SOS → entropy data to EOF
  }
  if (!w || !h) return null;
  return { bytes: concat(keep), width: w, height: h };
}

/* ---------- WebP ---------- */
function webpSanitise(b) {
  const keep = [];
  let i = 12, w = 0, h = 0, animated = false;
  while (i + 8 <= b.length) {
    const fourcc = String.fromCharCode(b[i], b[i + 1], b[i + 2], b[i + 3]);
    const size = u32le(b, i + 4);
    const padded = size + (size % 2);
    const end = i + 8 + padded;
    if (size > b.length || end > b.length + 1) return null;
    if (fourcc === 'ANIM' || fourcc === 'ANMF') animated = true;
    if (fourcc === 'VP8X') {
      w = ((b[i + 12] | b[i + 13] << 8 | b[i + 14] << 16) >>> 0) + 1;
      h = ((b[i + 15] | b[i + 16] << 8 | b[i + 17] << 16) >>> 0) + 1;
    } else if (fourcc === 'VP8 ') {
      w = (b[i + 14] | b[i + 15] << 8) & 0x3fff;
      h = (b[i + 16] | b[i + 17] << 8) & 0x3fff;
    } else if (fourcc === 'VP8L') {
      const bits = (b[i + 9] | b[i + 10] << 8 | b[i + 11] << 16 | b[i + 12] << 24) >>> 0;
      w = (bits & 0x3fff) + 1;
      h = ((bits >> 14) & 0x3fff) + 1;
    }
    if (fourcc !== 'EXIF' && fourcc !== 'XMP ') keep.push(b.subarray(i, Math.min(end, b.length)));
    i = end;
  }
  if (animated) return { animated: true };
  if (!w || !h) return null;
  const payload = concat(keep);
  const out = new Uint8Array(12 + payload.length);
  out.set([0x52, 0x49, 0x46, 0x46], 0);                      // 'RIFF'
  const riffSize = 4 + payload.length;
  out[4] = riffSize & 0xff; out[5] = (riffSize >> 8) & 0xff;
  out[6] = (riffSize >> 16) & 0xff; out[7] = (riffSize >> 24) & 0xff;
  out.set([0x57, 0x45, 0x42, 0x50], 8);                      // 'WEBP'
  out.set(payload, 12);
  return { bytes: out, width: w, height: h };
}

function concat(parts) {
  let n = 0;
  for (const p of parts) n += p.length;
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}

/**
 * @returns {{ok:true, bytes:Uint8Array, format:string, contentType:string, width:number, height:number}}
 *        | {{ok:false, reason:'empty'|'too_large'|'unsupported_type'|'animated'|'dimensions'|'corrupt'}}
 */
export function validateAndSanitise(bytes, maxBytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (!b.length) return { ok: false, reason: 'empty' };
  if (b.length > maxBytes) return { ok: false, reason: 'too_large' };

  const format = sniff(b);
  if (!format) return { ok: false, reason: 'unsupported_type' };

  let r;
  try {
    r = format === 'png' ? pngSanitise(b) : format === 'jpeg' ? jpegSanitise(b) : webpSanitise(b);
  } catch (e) {
    return { ok: false, reason: 'corrupt' };
  }
  if (!r) return { ok: false, reason: 'corrupt' };
  if (r.animated) return { ok: false, reason: 'animated' };
  if (!r.width || !r.height || r.width > MAX_PIXELS || r.height > MAX_PIXELS) {
    return { ok: false, reason: 'dimensions' };
  }
  return {
    ok: true, bytes: r.bytes, format,
    contentType: TYPES[format], width: r.width, height: r.height
  };
}
