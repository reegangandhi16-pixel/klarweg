/* Visual Vocabulary — shared helpers (audit, plan, generate, encode, apply).
   Reads chapter/*-data.js (the single source of truth) without changing them.
   No network, no paid calls in this module. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const CHAPTER_DIR = path.join(ROOT, "chapter");
export const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
/* List price, Gemini 2.5 Flash Image (1290 output tokens × $30/M), as billed
   for the A1·01 pilot on Vertex (klarweg-512108), 2026-11-11. */
export const PRICE_PER_IMAGE = 0.039;
/* Measured on the pilot: 12 words → 48 files (AVIF+WebP × 400/800w) = 233.7 KB. */
export const BYTES_PER_WORD = Math.round((233.7 * 1024) / 12);

export function loadChapters() {
  return fs.readdirSync(CHAPTER_DIR)
    .filter((f) => /^chapter-[a-c][12]-.+-data\.js$/.test(f))
    .map((file) => {
      const sb = { window: {} };
      vm.runInNewContext(fs.readFileSync(path.join(CHAPTER_DIR, file), "utf8"), sb, { filename: file });
      const C = sb.window.CHAPTER || {};
      const m = String(C.id || "").match(/^([abc][12])-(\d{1,2})-/);
      return m ? { file, id: C.id, level: m[1], number: Number(m[2]), title: C.title || "", titleEn: C.titleEn || "", free: Number(m[2]) === 1, C } : null;
    })
    .filter(Boolean)
    .sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) || a.number - b.number);
}

/* ---------- classification ----------------------------------------------
   kind  : noun | verb | adjective | adverb | number | proper | expression | function
   tier  : image      — illustrate (concrete or depictable)
           concept    — illustrate with a contextual/conceptual scene (abstract
                        noun, idiom, collocation, abstract adverb); needs human QA
           text-only  — grammar/function words and constructions: an image would
                        mislead; the card stays as it is today
   Heuristic, from `pos` (free-text in the data). Every decision is visible in
   the inventory and can be overridden in overrides.json before generation. */
const FUNCTION_POS = /\b(preposition|präposition|conjunction|konjunktion|konnektor|connective|pronoun|article|determiner|particle|question word|possessive|negation|prefix|suffix|operator|contraction|grammar|quantifier|relative construction|passive|construction|discourse marker|korrelativ|pronominal adverb|ordinal|abbreviation)\b/i;
const EXPRESSION_POS = /\b(phrase|idiom|idiomatic|collocation|expression|funktionsverbgefüge|noun-verb|greeting|salutation|interjection)\b/i;
const ABSTRACT_SUFFIX = /(ung|heit|keit|schaft|ion|tät|ismus|nis|tum|ik|ität|anz|enz|ur)$/i;

const GRAMMAR_TERM = /(konjunktiv|indikativ|imperativ|präposition|kompositum|komposita|passiv|nominativ|akkusativ|dativ|genitiv|partizip|infinitiv|nebensatz|hauptsatz|relativsatz|konnektor|deklination|konjugation|artikel|plural|singular|präteritum|perfekt|plusquamperfekt|futur|modalverb|hilfsverb|adjektiv|adverb|substantiv|nomen|pronomen|satzklammer|verbklammer|grammatik|silbe|umlaut|buchstabe|präsens|tempus|zeitschicht|zeitform)/i;
const SMALL_NUMBER = /^(null|eins|ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf)$/i;
const words = (de) => String(de).replace(/^(der|die|das)(\/(der|die|das))?\s+/i, "").replace(/\([^)]*\)/g, "").trim().split(/\s+/).filter(Boolean);

export function classify(v) {
  const pos = String(v.pos || "").toLowerCase();
  const de = String(v.de || "");
  if (FUNCTION_POS.test(pos) || /\.\.\.|…/.test(de)) return { kind: "function", tier: "text-only", why: "function word / grammar construction" };
  if (/grammar term/.test(pos) || GRAMMAR_TERM.test(de)) return { kind: "grammar-term", tier: "text-only", why: "grammar terminology — text explains it better" };
  if (/^(country|language|region)$/.test(pos)) return { kind: "proper", tier: "text-only", why: "flags/maps from an image model are unreliable — would teach wrong facts" };
  if (/number/.test(pos)) return SMALL_NUMBER.test(de.trim())
    ? { kind: "number", tier: "image", why: "count of everyday objects (no digits)" }
    : { kind: "number", tier: "text-only", why: "large number — not countable in a picture, digits are forbidden" };
  if (EXPRESSION_POS.test(pos) || words(de).length >= 3) return { kind: "expression", tier: "concept", why: "expression — illustrate the intended meaning, never the literal one" };
  if (/verb/.test(pos) && !/adverb/.test(pos)) return { kind: "verb", tier: "image", why: "show the action" };
  if (/adverb/.test(pos)) return { kind: "adverb", tier: "concept", why: "adverb — contextual scene, QA" };
  if (/adjective|partizip|participle/.test(pos)) return { kind: "adjective", tier: "image", why: "show the quality on a clear subject" };
  if (/noun/.test(pos)) {
    const abstract = ABSTRACT_SUFFIX.test(de) || /nominaliz|substantiv|deverbal|abstract/.test(pos);
    return abstract ? { kind: "noun", tier: "concept", why: "abstract noun — contextual scene" } : { kind: "noun", tier: "image", why: "show the object" };
  }
  return { kind: "other", tier: "concept", why: "unclassified pos: " + (v.pos || "—") };
}

/* ---------- identity ---------------------------------------------------- */
const DIACRITIC = { "ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss", "Ä": "ae", "Ö": "oe", "Ü": "ue" };
export function slug(s) {
  return String(s).replace(/[äöüßÄÖÜ]/g, (c) => DIACRITIC[c]).toLowerCase()
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "x";
}
/* English meaning, normalised for "same meaning" comparison. */
export function normEn(en) {
  return String(en || "").toLowerCase()
    .replace(/\([^)]*\)/g, " ")          // drop glosses "(money)"
    .replace(/^\s*(to|a|an|the)\s+/, "")
    .replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
}
/* A concept = one German headword (with its article) + one meaning. Two
   vocab entries with the same concept key reuse ONE image. */
/* "art + de", never doubling the article when the data repeats it inside
   `de` (e.g. art 'die', de 'die Vermutung') — mirrors chapter-app vocabTerm(). */
export function headTerm(v) {
  const art = String(v.art || "").trim(), de = String(v.de || "").trim();
  return art && de.toLowerCase().startsWith(art.toLowerCase() + " ") ? de : (art + " " + de).trim();
}
export function conceptKey(v) { return slug(headTerm(v)) + "--" + slug(normEn(v.en)); }
export function headKey(v) { return slug(headTerm(v)); }

/* Where a concept's files live, by access tier of the FIRST chapter that
   uses it: free Chapter 1 pages → public Pages path; paid chapters → the
   gated media route (needs the access Worker image route — not live). */
export function imageSrcFor(conceptId, free) {
  return free ? "../public/vocab-img/" + conceptId : "/api/media/vocab-img/" + conceptId;
}

/* The A1·01 pilot style, verbatim (docs/visual-vocab/README.md). */
export const STYLE = "Premium stylised 3D educational illustration in a refined matte clay-render style (soft rounded forms, subtle texture, not photographic) with gentle studio lighting and a soft contact shadow, single clear subject centered and filling about 70 percent of the frame, plain very light warm cream seamless background (#F7F3EA), muted natural palette with deep teal and soft green accents, high detail, calm and minimal, no text, no letters, no numbers, no logos, no watermark, no orange tones.";
const PEOPLE = "Any people are stylised clay-render humans with natural human proportions, calm friendly faces, varied skin tones and everyday modern clothing (never photographic, never creatures, blobs or mascots). Objects, food and plants have no faces and no tiny characters on them. Show only what is described: no extra figures.";
const COMPOSE = "The cream background is seamless from edge to edge: no frame, no border, no rounded card, no inset picture, no vignette.";
const NUM = { null: 0, eins: 1, ein: 1, zwei: 2, drei: 3, vier: 4, "fünf": 5, sechs: 6, sieben: 7, acht: 8, neun: 9, zehn: 10, elf: 11, "zwölf": 12 };

export function promptFor(c, subject) {
  const term = headTerm(c);
  const ctx = c.exEn ? ` Context sentence: "${String(c.exEn).trim().replace(/[.!?]+$/, "")}".` : "";
  let guide;
  if (subject) guide = subject;
  else if (c.kind === "number") guide = `Show exactly ${NUM[c.de.toLowerCase()] ?? ""} identical simple everyday objects (for example apples) neatly arranged, nothing else.`;
  else if (c.kind === "verb") guide = `Show a person clearly performing the action "${c.en}" in a simple everyday setting.`;
  else if (c.kind === "adjective") guide = `Show one clear everyday subject that obviously has the quality "${c.en}".`;
  else if (c.kind === "expression") guide = `Show a simple scene that conveys the intended meaning "${c.en}" — never a literal picture of the individual words.`;
  else if (c.tier === "concept") guide = `Show a simple, calm everyday scene that makes the meaning "${c.en}" obvious at a glance.`;
  else guide = `Show the object itself: ${c.en}.`;
  void term;   // the German word is deliberately NOT in the prompt: quoted words invite rendered text
  return `Create one illustration for a vocabulary card (${c.pos}; meaning: ${c.en}).${ctx} ${guide} ${PEOPLE} ${COMPOSE} ${STYLE}`;
}

