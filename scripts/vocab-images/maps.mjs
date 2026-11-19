#!/usr/bin/env node
/* Locator maps for map-type visuals (second visual strategy, 2026-11-19).
   One small static SVG per distinct set of ISO 3166-1 alpha-2 codes, written to
   public/vocab-map/<sha1-12>.svg (name = pipeline mapSrc()). Data: Natural Earth
   via world-atlas (public domain). No labels or text in the SVG: country and
   language names are rendered by the card UI. Calm palette: land #E7E4DA,
   borders #FAFAF7, highlight #1F4E4A; tiny states get a ring marker.
   Libraries are loaded from $VOCAB_IMG_STORE/tools (not a site dependency).
     node scripts/vocab-images/maps.mjs            (all map visuals in the queue)
     node scripts/vocab-images/maps.mjs --iso DE,AT,CH */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { ROOT } from "./lib.mjs";
import { STORE } from "./budget.mjs";

const req = createRequire(path.join(STORE, "tools", "package.json"));
const d3 = req("d3-geo"), topo = req("topojson-client"), countries = req("i18n-iso-countries");
const OUT = path.join(ROOT, "public/vocab-map");
const W = 400, H = 300, PAD = 18;
const LAND = "#E7E4DA", EDGE = "#FAFAF7", HI = "#1F4E4A";
const atlas = (res) => JSON.parse(fs.readFileSync(req.resolve(`world-atlas/countries-${res}.json`), "utf8"));
const num = (a2) => countries.alpha2ToNumeric(a2);               // "DE" → "276"

export const fileFor = (iso) => crypto.createHash("sha1").update([...iso].sort().join(",")).digest("hex").slice(0, 12) + ".svg";

/* Framing uses each highlighted country's LARGEST polygon (France's overseas
   departments must not pull the frame to South America). */
function mainland(f) {
  if (f.geometry.type !== "MultiPolygon") return f;
  let best = null, area = -1;
  for (const c of f.geometry.coordinates) { const g = { type: "Polygon", coordinates: c }; const a = d3.geoArea(g); if (a < 2 * Math.PI && a > area) { area = a; best = g; } }
  return { type: "Feature", geometry: best };
}
export function render(iso) {
  const ids = new Set(iso.map(num).filter(Boolean));
  const t110 = atlas("110m"); const hi110 = topo.feature(t110, t110.objects.countries).features.filter((f) => ids.has(f.id));
  if (!hi110.length) throw new Error("no geometry for " + iso.join(","));
  const [[x0, y0], [x1, y1]] = d3.geoBounds({ type: "FeatureCollection", features: hi110.map(mainland) });
  const wide = x1 - x0 > 100 || x1 < x0 || y1 - y0 > 60;
  const t = atlas(wide ? "110m" : "50m");
  const fc = topo.feature(t, t.objects.countries);
  const hi = fc.features.filter((f) => ids.has(f.id));
  let proj;
  if (wide) proj = d3.geoEqualEarth().fitExtent([[PAD, PAD], [W - PAD, H - PAD]], { type: "Sphere" });
  else {
    // frame = highlighted mainlands, then zoom out (projected space) so neighbours give context
    const corners = { type: "MultiPoint", coordinates: [[x0, y0], [x1, y1], [x0, y1], [x1, y0]] };
    proj = d3.geoMercator().fitExtent([[PAD, PAD], [W - PAD, H - PAD]], corners);
    const c = [(x0 + x1) / 2, (y0 + y1) / 2], zoomOut = Math.max(1.6, Math.min(4, 6 / Math.max(1e-6, Math.sqrt((x1 - x0) * (y1 - y0)) / 4)));
    proj.scale(proj.scale() / Math.min(zoomOut, 2.6));
    const [px, py] = proj(c), [tx, ty] = proj.translate(); proj.translate([tx + W / 2 - px, ty + H / 2 - py]);
  }
  proj.clipExtent([[0, 0], [W, H]]);
  const gp = d3.geoPath(proj).digits(0);
  // whole-pixel coordinates; drop repeated points and countries outside the frame
  const squeeze = (d) => d.replace(/L(-?\d+),(-?\d+)(?=(?:L\1,\2)+)/g, "").replace(/(L-?\d+,-?\d+)(?:\1)+/g, "$1");
  const visible = (f) => { const [[a, b], [c, e]] = gp.bounds(f); return c >= 0 && a <= W && e >= 0 && b <= H && (c - a) * (e - b) > 0.5; };
  const parts = [];
  for (const f of fc.features) { if (!visible(f)) continue; const d = gp(f); if (d) parts.push(`<path d="${squeeze(d)}" fill="${ids.has(f.id) ? HI : LAND}"/>`); }
  // states too small to see get a ring marker at their centroid
  for (const f of hi) { const a = gp.area(f); if (a < 30) { const [x, y] = gp.centroid(f); if (isFinite(x)) parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="none" stroke="${HI}" stroke-width="2.5"/>`); } }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"><g stroke="${EDGE}" stroke-width="0.6" stroke-linejoin="round">${parts.join("")}</g></svg>\n`;
}

const args = process.argv.slice(2);
if (import.meta.url === `file://${process.argv[1]}`) {
  fs.mkdirSync(OUT, { recursive: true });
  let sets;
  const i = args.indexOf("--iso");
  if (i >= 0) sets = [args[i + 1].split(",")];
  else {
    const q = JSON.parse(fs.readFileSync(path.join(STORE, "project/queue.json"), "utf8")).items;
    sets = q.filter((x) => x.status === "vis" && x.vis.kind === "map").map((x) => x.vis.iso);
  }
  const seen = new Set(); let n = 0, bytes = 0;
  for (const iso of sets) { const f = fileFor(iso); if (seen.has(f)) continue; seen.add(f);
    const svg = render(iso); fs.writeFileSync(path.join(OUT, f), svg); n++; bytes += svg.length;
    console.log(f, iso.join(","), (svg.length / 1024).toFixed(1) + " KB"); }
  console.log(JSON.stringify({ maps: n, totalKB: +(bytes / 1024).toFixed(1) }));
}
