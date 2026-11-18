#!/usr/bin/env node
/* Visual Vocabulary — full inventory of every vocab card, A1 → C2.
     node scripts/vocab-images/audit.mjs [--check]
   Writes docs/visual-vocab/inventory/{concepts.json,chapters.json,INVENTORY.md}.
   --check: exit 1 if the committed inventory is stale (chapter data changed).
   Reads chapter data only; no network, no paid calls. */
import fs from "node:fs";
import path from "node:path";
import { ROOT, LEVELS, PRICE_PER_IMAGE, BYTES_PER_WORD, loadChapters, classify, conceptKey, headKey, normEn } from "./lib.mjs";

const OUT = path.join(ROOT, "docs/visual-vocab/inventory");
const OVERRIDES = path.join(OUT, "overrides.json");
const check = process.argv.includes("--check");

const overrides = fs.existsSync(OVERRIDES) ? JSON.parse(fs.readFileSync(OVERRIDES, "utf8")) : {};
const chapters = loadChapters();
const concepts = new Map();   // conceptKey → concept
const heads = new Map();      // headKey → Set(conceptKey)   (polysemy / near-duplicates)
const chapterRows = [];

for (const ch of chapters) {
  const vocab = ch.C.vocab || [];
  const row = { id: ch.id, level: ch.level, number: ch.number, title: ch.title, access: ch.free ? "free" : "paid",
    cards: vocab.length, checkpoint: !vocab.length && Array.isArray(ch.C.vocabularyReview), withImage: 0, tiers: { image: 0, concept: 0, "text-only": 0 } };
  for (const v of vocab) {
    const key = conceptKey(v);
    const cls = Object.assign(classify(v), overrides[key] || {});
    if (v.img) row.withImage++;
    row.tiers[cls.tier]++;
    let c = concepts.get(key);
    if (!c) {
      c = { key, de: v.de, art: v.art || "", en: v.en, pos: v.pos, kind: cls.kind, tier: cls.tier, why: cls.why,
        firstUse: ch.id, public: false, uses: [], img: null };
      concepts.set(key, c);
    }
    c.uses.push(ch.id);
    if (ch.free) c.public = true;   // used on a free page → must be a public file
    if (v.img && !c.img) c.img = v.img.src;
    const h = headKey(v);
    if (!heads.has(h)) heads.set(h, new Set());
    heads.get(h).add(key);
  }
  chapterRows.push(row);
}

/* ---------- summary ---------- */
const all = [...concepts.values()];
const sum = (xs, f) => xs.reduce((a, x) => a + f(x), 0);
const byLevel = {};
for (const lv of LEVELS) {
  const rows = chapterRows.filter((r) => r.level === lv);
  byLevel[lv] = { chapters: rows.length, withCards: rows.filter((r) => r.cards).length, checkpoints: rows.filter((r) => r.checkpoint).length,
    cards: sum(rows, (r) => r.cards), image: sum(rows, (r) => r.tiers.image), concept: sum(rows, (r) => r.tiers.concept), textOnly: sum(rows, (r) => r.tiers["text-only"]),
    // concepts whose FIRST use is in this level = new images this level needs
    newConcepts: all.filter((c) => c.firstUse.startsWith(lv + "-") && c.tier !== "text-only" && !c.img).length };
}
const cards = sum(chapterRows, (r) => r.cards);
const illustrable = all.filter((c) => c.tier !== "text-only");
const needed = illustrable.filter((c) => !c.img);
const reusedUses = sum(illustrable, (c) => c.uses.length - 1);
const polysemy = [...heads.entries()].filter(([, s]) => s.size > 1).map(([h, s]) => ({ head: h, meanings: [...s].map((k) => concepts.get(k).en) }));
/* Same headword, different English wording but probably one meaning
   ("to go" / "to go, walk"): flagged for a human merge, not merged automatically. */
const nearDup = polysemy.filter((p) => {
  const firsts = p.meanings.map((m) => normEn(m).split(" ")[0]);
  return new Set(firsts).size < firsts.length;
}).length;

const summary = {
  levels: LEVELS.length, chapters: chapterRows.length, chaptersWithCards: chapterRows.filter((r) => r.cards).length,
  checkpointChapters: chapterRows.filter((r) => r.checkpoint).map((r) => r.id),
  cards, uniqueConcepts: all.length, uniqueHeadwords: heads.size,
  illustrableConcepts: illustrable.length, textOnlyConcepts: all.length - illustrable.length,
  alreadyIllustrated: illustrable.length - needed.length, imagesNeeded: needed.length,
  cardsServedByReuse: reusedUses, polysemousHeadwords: polysemy.length, nearDuplicateHeadwords: nearDup,
  byTier: { image: needed.filter((c) => c.tier === "image").length, concept: needed.filter((c) => c.tier === "concept").length },
  publicImages: needed.filter((c) => c.public).length, gatedImages: needed.filter((c) => !c.public).length,
  cost: {
    pricePerImage: PRICE_PER_IMAGE,
    // image tier: ~20 % re-rolls; concept tier: ~50 % re-rolls (pilot: 4 re-rolls / 12 words, abstract worst)
    expectedImages: Math.round(needed.filter((c) => c.tier === "image").length * 1.2 + needed.filter((c) => c.tier === "concept").length * 1.5),
  },
  storage: { bytesPerWord: BYTES_PER_WORD, files: needed.length * 4 },
  byLevel
};
summary.cost.expectedUsd = +(summary.cost.expectedImages * PRICE_PER_IMAGE).toFixed(2);
summary.cost.batchApiUsd = +(summary.cost.expectedUsd / 2).toFixed(2);
summary.storage.mb = +((needed.length * BYTES_PER_WORD) / 1048576).toFixed(1);

/* ---------- write ---------- */
// Compact rows: [key, tier, kind, firstUse, uses, public, img]. Text lives in the chapter data.
const conceptsOut = all.map((c) => [c.key, c.tier, c.kind, c.firstUse, c.uses.length, c.public ? 1 : 0, c.img]);
const files = {
  "summary.json": JSON.stringify(summary, null, 1) + "\n",
  "chapters.json": JSON.stringify(chapterRows) .replace(/\},\{/g, "},\n{") + "\n",
  "concepts.json": "[\n" + conceptsOut.map((c) => JSON.stringify(c)).join(",\n") + "\n]\n",
  "polysemy.json": JSON.stringify(polysemy, null, 0).replace(/\},\{/g, "},\n{") + "\n",
  "INVENTORY.md": markdown()
};
let stale = false;
fs.mkdirSync(OUT, { recursive: true });
for (const [name, body] of Object.entries(files)) {
  const p = path.join(OUT, name);
  const cur = fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
  if (cur !== body) { stale = true; if (!check) fs.writeFileSync(p, body); }
}
if (!fs.existsSync(OVERRIDES) && !check) fs.writeFileSync(OVERRIDES, "{}\n");
if (check && stale) { console.error("vocab image inventory is stale — run node scripts/vocab-images/audit.mjs"); process.exit(1); }
console.log(JSON.stringify({ cards, uniqueConcepts: all.length, imagesNeeded: needed.length, expectedUsd: summary.cost.expectedUsd, wrote: !check }));

function markdown() {
  const L = (lv) => byLevel[lv];
  const rows = LEVELS.map((lv) => `| ${lv.toUpperCase()} | ${L(lv).chapters} | ${L(lv).withCards} | ${L(lv).checkpoints} | ${L(lv).cards} | ${L(lv).image} | ${L(lv).concept} | ${L(lv).textOnly} | ${L(lv).newConcepts} |`).join("\n");
  const ch = chapterRows.map((r) => `| ${r.id} | ${r.access} | ${r.cards}${r.checkpoint ? " (review quiz)" : ""} | ${r.tiers.image} | ${r.tiers.concept} | ${r.tiers["text-only"]} | ${r.withImage} |`).join("\n");
  return `# Visual Vocabulary — inventory (generated)

Generated by \`node scripts/vocab-images/audit.mjs\` from \`chapter/*-data.js\`. Do not edit by hand;
tier decisions can be overridden per concept in \`overrides.json\` (key → { "tier": "text-only" | "image" | "concept" }).

## Totals
| | |
|---|---|
| Levels | ${summary.levels} |
| Chapters | ${summary.chapters} (${summary.chaptersWithCards} with word cards; ${summary.checkpointChapters.length} checkpoint chapters use a review quiz) |
| Vocabulary cards | ${cards} |
| Unique headwords | ${summary.uniqueHeadwords} |
| Unique concepts (headword + meaning) | ${summary.uniqueConcepts} |
| Text-only (function words / grammar constructions) | ${summary.textOnlyConcepts} |
| Illustrable concepts | ${summary.illustrableConcepts} |
| Chapters without word cards | ${chapterRows.filter((r) => !r.cards).map((r) => r.id + (r.checkpoint ? " (review quiz)" : " (none)")).join(", ")} |
| Already illustrated (A1·01 pilot) | ${summary.alreadyIllustrated} |
| **New images needed** | **${summary.imagesNeeded}** (${summary.byTier.image} direct, ${summary.byTier.concept} conceptual) |
| …used on a free Chapter 1 page (public files) | ${summary.publicImages} |
| …used only in paid chapters (gated files) | ${summary.gatedImages} |
| Cards served by reusing another card's image | ${summary.cardsServedByReuse} |
| Headwords with several meanings | ${summary.polysemousHeadwords} (${summary.nearDuplicateHeadwords} look like the same meaning worded differently — review) |

## Cost and storage (estimate)
- Expected generations incl. re-rolls: **${summary.cost.expectedImages}** × $${PRICE_PER_IMAGE} = **$${summary.cost.expectedUsd}** (interactive) · **$${summary.cost.batchApiUsd}** if the 50 % batch mode is available for this model (to verify).
- Assets: ${summary.storage.files} files ≈ **${summary.storage.mb} MB** (AVIF+WebP × 400/800w, pilot average ${(BYTES_PER_WORD / 1024).toFixed(1)} KB per word); a learner downloads only one variant per card (≈ 3–6 KB).

## Per level
| Level | Chapters | With cards | Checkpoints | Cards | Image | Concept | Text-only | New images (first use here) |
|---|---|---|---|---|---|---|---|---|
${rows}

## Per chapter
| Chapter | Access | Cards | Image | Concept | Text-only | Illustrated |
|---|---|---|---|---|---|---|
${ch}
`;
}
