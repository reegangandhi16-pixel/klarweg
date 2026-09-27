#!/usr/bin/env node
/* ============================================================
   KLARWEG · TUTOR CONTENT REGISTRY BUILDER
   ------------------------------------------------------------
   Generates the server-side content registry for the private
   klarweg-tutor Worker FROM the authoritative chapter sources:

     chapter/chapter-*-data.js   (the 258 chapter payloads)
     chapter/_curriculum-*.json  (level order + chapter vocab)

   Nothing here is hand-maintained. The output directory
   tutor/worker/src/registry/generated/ is gitignored and is
   rebuilt before every tutor deploy / test run, so the chapter
   files stay the single source of truth.

   Output:
     generated/index.js      chapterId -> lazy loader + level order
     generated/ch/<id>.js    one compact module per chapter

   Each chapter module is evaluated lazily (esbuild wraps dynamic
   imports in lazy initialisers), so a request only pays for the
   one chapter it touches.

   Usage:  node scripts/build-tutor-registry.mjs [--check]
     --check  build in memory, validate, print stats, write nothing
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHAPTER_DIR = path.join(ROOT, 'chapter');
const OUT_DIR = path.join(ROOT, 'tutor', 'worker', 'src', 'registry', 'generated');
const CHECK_ONLY = process.argv.includes('--check');

const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

/* ---------- helpers ---------- */
const strip = (s) => String(s == null ? '' : s)
  .replace(/<br\s*\/?>/gi, ' ')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const cap = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

function loadChapter(file) {
  const ctx = {};
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8') + '\n;this.__C = CHAPTER;', ctx, { timeout: 5000, filename: file });
  return ctx.__C;
}

/* The authored writingTutorPrompt mixes four things:
     1. a persona line ("You are a warm, encouraging … tutor")
        — superseded by the Klarweg AI identity (OS Part 14.3)
     2. the lesson scope ("The lesson is … Covered: …")      KEEP
     3. ACCURACY RULES                                       KEEP
     4. HTML output-format instructions ("Give concise …")
        — superseded by the strict JSON schema
   Only 2 + 3 are carried into the registry. */
function extractChapterRules(prompt) {
  if (!prompt) return '';
  let p = String(prompt);
  // 4. cut the output-format block (always after the rules)
  const fmt = p.search(/\n[^\n]*(Give concise feedback|Give feedback|compact HTML|Use exactly these parts)/i);
  if (fmt !== -1) p = p.slice(0, fmt);
  // the learner-text slot
  p = p.replace(/TEXT:\s*"""\{\{TEXT\}\}"""/g, ' ').replace(/\{\{TEXT\}\}/g, ' ');
  p = p.replace(/The learner wrote[^.\n]*\.?/gi, ' ');
  // 1. persona sentence
  p = p.replace(/^\s*You are an? [^.]*?\btutor\b[^.]*\.\s*/i, '');
  return p.replace(/[ \t]+/g, ' ').replace(/\n[ \t]*(?=\n)/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function grammarCardText(g) {
  const parts = [];
  if (g.whatIsIt) parts.push(strip(g.whatIsIt));
  (g.body || []).forEach((b) => parts.push(strip(b)));
  if (g.goldenRule) parts.push('Rule: ' + strip(g.goldenRule));
  if (g.why) parts.push('Why: ' + strip(g.why));
  if (g.formula) parts.push('Formula: ' + [].concat(g.formula).map(strip).join(' / '));
  if (g.table) {
    const head = (g.table.head || []).map(strip).join(' | ');
    const rows = (g.table.rows || []).map((r) => [].concat(r).map(strip).join(' | '));
    parts.push('Table: ' + [head, ...rows].filter(Boolean).join(' ; '));
  }
  (g.example || []).forEach((e) => parts.push('Example: ' + strip(e && (e.html || e.de || e))));
  (g.mistakes || []).forEach((m) => parts.push('Mistake: ' + strip(m.wrong) + ' → ' + strip(m.right) + (m.why ? ' (' + strip(m.why) + ')' : '')));
  if (g.compare) {
    if (g.compare.intro) parts.push('Compare: ' + strip(g.compare.intro));
    (g.compare.rows || []).forEach((r) => parts.push([].concat(r).map(strip).join(' | ')));
  }
  if (g.memoryTrick) parts.push('Memory trick: ' + strip(g.memoryTrick));
  if (g.recap) parts.push('Recap: ' + [].concat(g.recap).map(strip).join('; '));
  if (g.note) parts.push('Note: ' + strip(g.note));
  if (g.hinglish) parts.push('Hindi bridge (authored): ' + strip(g.hinglish));
  return cap(parts.filter(Boolean).join('\n'), 3200);
}

/* Authored prompt-style exercises (same key list chapter-app.js renders). */
const PROMPT_EXERCISE_KEYS = ['transform', 'transform1', 'transform2',
  'transformActiveToPassive', 'transformPassiveToActive', 'nominativToDativ', 'akkusativToDativ',
  'positiveToComparative', 'comparativeToSuperlative', 'praesensToFutur', 'umZuToDamit',
  'combineSentences', 'perfektToPlusquamperfekt', 'chooseConjunction', 'muessenToBrauchen',
  'genitivFill', 'dativToGenitiv', 'timelineOrdering'];

function isExamChapter(C) {
  return /goethe|halbzeit|mini-test|final/i.test(C.id || '') || !!C.isCheckpoint || !!C.scoring;
}

function levelOf(C) {
  const m = String(C.id || '').match(/^(a1|a2|b1|b2|c1|c2)-/i);
  return m ? m[1].toUpperCase() : String(C.phase || '').slice(0, 2).toUpperCase();
}

function buildRecord(C, ctx) {
  const E = C.exercises || {};
  const exercises = {};
  if (E.mcq) exercises.mcq = { q: strip(E.mcq.q), options: (E.mcq.options || []).map(strip), answer: E.mcq.answer, explain: strip(E.mcq.explain) };
  if (E.gap) {
    exercises.gap = {
      sentence: (E.gap.sentence || []).map((s) => String(s)),
      gaps: (E.gap.gaps || []).map((g) => ({ answer: String(g.answer), accepts: (g.accepts || []).map(String) })),
      explain: strip(E.gap.explain),
    };
  }
  if (E.builder) exercises.builder = { target: strip(E.builder.target), answer: (E.builder.answer || []).map(String) };
  if (E.errorCorrection && E.errorCorrection.wrong && E.errorCorrection.right) {
    exercises.errorCorrection = { title: strip(E.errorCorrection.title || ''), wrong: strip(E.errorCorrection.wrong), right: strip(E.errorCorrection.right), explain: strip(E.errorCorrection.explain || ''), accepts: (E.errorCorrection.accepts || []).map(strip) };
  }
  PROMPT_EXERCISE_KEYS.forEach((k) => {
    const ex = E[k];
    if (ex && typeof ex === 'object' && ex.prompt && ex.answer) {
      exercises[k] = { title: strip(ex.title || ''), prompt: strip(ex.prompt), answer: Array.isArray(ex.answer) ? ex.answer.map(strip) : strip(ex.answer), explain: strip(ex.explain || ''), accepts: (ex.accepts || []).map(strip) };
    }
  });
  if (Array.isArray(C.errorCorrectionSet)) {
    exercises.ecs = C.errorCorrectionSet.map((it) => ({ wrong: strip(it.wrong), right: strip(it.right), ref: strip(it.ref || '') }));
  }

  return {
    id: C.id,
    level: ctx.level,
    number: C.number,
    title: strip(C.title),
    titleEn: strip(C.titleEn),
    isExam: isExamChapter(C),
    sections: (C.sections || []).map((s) => ({ id: s.id, label: strip(s.label) })),
    outcomes: (C.outcomes || []).map((o) => strip((o.de ? o.de + ' — ' : '') + (o.text || o))).slice(0, 8),
    chapterRules: extractChapterRules(C.writingTutorPrompt),
    scope: {
      earlierThisLevel: ctx.earlier,
      laterThisLevel: ctx.later,
      completedLevels: ctx.completedLevels,
    },
    vocab: (C.vocab || []).map((v) => {
      const o = { de: strip(v.de) };
      if (v.art) o.art = strip(v.art);
      if (v.en) o.en = strip(v.en);
      if (v.hi) o.hi = strip(v.hi);
      if (v.gender) o.gender = v.gender;
      if (v.plural) o.plural = strip(v.plural);
      if (v.pos) o.pos = strip(v.pos);
      return o;
    }),
    grammar: (C.grammar || []).map((g, i) => ({ i, title: strip(g.title), text: grammarCardText(g) })),
    writing: C.writing ? { prompt: strip(C.writing.prompt), minWords: Number(C.writing.minWords) || 0 } : null,
    speaking: (C.speaking || []).map((s, i) => ({ i, de: strip(s.de), en: strip(s.en || ''), task: strip(s.task || '') })),
    exercises,
    quiz: [].concat(C.quiz || []).map((q, i) => ({ i, q: strip(q.q), options: (q.options || []).map(strip), answer: q.answer, explain: strip(q.explain || '') })),
    speakingEvaluation: C.speakingEvaluation && Array.isArray(C.speakingEvaluation.checklist) ? C.speakingEvaluation.checklist.map(strip) : null,
    tutorRecommendations: Array.isArray(C.tutorRecommendations) ? C.tutorRecommendations.map((r) => ({ weakArea: strip(r.weakArea), recommend: strip(r.recommend) })) : null,
  };
}

/* ---------- build ---------- */
const files = fs.readdirSync(CHAPTER_DIR).filter((f) => /^chapter-.*-data\.js$/.test(f));
const chapters = [];
const problems = [];
for (const f of files) {
  try {
    const C = loadChapter(path.join(CHAPTER_DIR, f));
    if (!C || !C.id) { problems.push(f + ': no CHAPTER.id'); continue; }
    chapters.push({ file: f, C });
  } catch (e) {
    problems.push(f + ': ' + e.message);
  }
}

// Level order from the curriculum files (authoritative), falling back to CHAPTER.number.
const order = {};
for (const lv of LEVELS) {
  const cur = path.join(CHAPTER_DIR, `_curriculum-${lv}.json`);
  const list = chapters.filter((x) => levelOf(x.C) === lv.toUpperCase());
  let ids = [];
  if (fs.existsSync(cur)) {
    try { ids = JSON.parse(fs.readFileSync(cur, 'utf8')).chapters.map((c) => c.id); } catch (e) { problems.push(`_curriculum-${lv}.json: ${e.message}`); }
  }
  const known = new Set(ids);
  const extras = list.filter((x) => !known.has(x.C.id)).sort((a, b) => a.C.number - b.C.number).map((x) => x.C.id);
  const present = new Set(list.map((x) => x.C.id));
  order[lv.toUpperCase()] = ids.filter((id) => present.has(id)).concat(extras);
}

const byId = new Map(chapters.map((x) => [x.C.id, x.C]));
const titleOf = (id) => { const C = byId.get(id); return C ? `${strip(C.title)}${C.titleEn ? ' (' + strip(C.titleEn) + ')' : ''}` : id; };

const records = [];
for (const { C } of chapters) {
  const level = levelOf(C);
  const seq = order[level] || [];
  const idx = seq.indexOf(C.id);
  const earlier = idx > 0 ? seq.slice(0, idx).map(titleOf) : [];
  const later = idx >= 0 ? seq.slice(idx + 1, idx + 13).map(titleOf) : [];
  const completedLevels = LEVELS.map((l) => l.toUpperCase()).slice(0, LEVELS.indexOf(level.toLowerCase()));
  records.push(buildRecord(C, { level, earlier, later, completedLevels }));
}

/* ---------- validate ---------- */
const stats = { chapters: records.length, withRules: 0, exam: 0, errorCorrection: 0, promptExercises: 0, bytes: 0 };
for (const r of records) {
  if (r.chapterRules) stats.withRules++;
  if (/\{\{TEXT\}\}|compact HTML|<span class=/i.test(r.chapterRules)) problems.push(r.id + ': chapterRules still contains prompt-format residue');
  if (/^You are/i.test(r.chapterRules)) problems.push(r.id + ': persona line not stripped');
  if (r.isExam) stats.exam++;
  if (r.exercises.errorCorrection) stats.errorCorrection++;
  stats.promptExercises += Object.keys(r.exercises).filter((k) => PROMPT_EXERCISE_KEYS.includes(k)).length;
  if (!r.level || !order[r.level]) problems.push(r.id + ': unknown level');
}

if (problems.length) {
  console.error('Registry problems:\n  ' + problems.join('\n  '));
  process.exitCode = 1;
}

/* ---------- write ---------- */
const moduleFor = (r) => '// GENERATED by scripts/build-tutor-registry.mjs — do not edit.\nexport default JSON.parse(' + JSON.stringify(JSON.stringify(r)) + ');\n';

if (!CHECK_ONLY && !problems.length) {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT_DIR, 'ch'), { recursive: true });
  const loaders = [];
  for (const r of records.sort((a, b) => a.id.localeCompare(b.id))) {
    const src = moduleFor(r);
    stats.bytes += src.length;
    fs.writeFileSync(path.join(OUT_DIR, 'ch', `${r.id}.js`), src);
    loaders.push(`  ${JSON.stringify(r.id)}: () => import(${JSON.stringify('./ch/' + r.id + '.js')}),`);
  }
  const index =
    '// GENERATED by scripts/build-tutor-registry.mjs — do not edit.\n' +
    '// Source of truth: chapter/chapter-*-data.js + chapter/_curriculum-*.json\n' +
    `export const BUILT_FROM = ${JSON.stringify({ chapters: records.length })};\n` +
    `export const LEVEL_ORDER = ${JSON.stringify(order)};\n` +
    'export const LOADERS = {\n' + loaders.join('\n') + '\n};\n';
  fs.writeFileSync(path.join(OUT_DIR, 'index.js'), index);
} else {
  for (const r of records) stats.bytes += moduleFor(r).length;
}

console.log(JSON.stringify({ ...stats, kb: Math.round(stats.bytes / 1024), wrote: !CHECK_ONLY && !problems.length }, null, 0));
