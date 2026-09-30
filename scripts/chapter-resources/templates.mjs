/* ============================================================
   KLARWEG — Chapter resource PDF templates
   buildResource(C, resource, ctx) → { html, sections } | null
   Every block is drawn from authored chapter data; a builder
   returns null when the chapter has nothing for that resource.
============================================================ */
import {
  esc, html, cssString, nonEmpty, parseId, chapterTag, isInternalBlock, isWellFormedGap,
  joinTokens, stableShuffle, isAssessmentKind,
} from './common.mjs';

// Bump when layout or content rules change so every PDF regenerates.
export const TEMPLATE_VERSION = 12;

const label = (t) => `<div class="lbl">${esc(t)}</div>`;
// Wrong/right marks are drawn, not typed: ✕/✓ exist in none of the embedded
// faces, and a glyph fallback would embed a system (or Type3) font.
const MARK_X = '<svg viewBox="0 0 10 10" width="7" height="7" aria-hidden="true"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
const MARK_OK = '<svg viewBox="0 0 10 10" width="8" height="8" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 4.5-6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const lines = (n) => `<div class="write-lines">${'<div class="wl"></div>'.repeat(n)}</div>`;

/* Writing space from the authored word target (writing.minWords): about
   8 handwritten words per line, at least 6 lines, at most 24 (one page with
   its prompt). Above the cap the learner is told to continue on another
   sheet — the authored target is always the one printed. */
export const WRITING = { wordsPerLine: 8, minLines: 6, maxLines: 24, defaultWords: 40 };
export function writingLines(minWords) {
  const target = Number(minWords) > 0 ? Number(minWords) : WRITING.defaultWords;
  const needed = Math.ceil(target / WRITING.wordsPerLine);
  return { lines: Math.min(WRITING.maxLines, Math.max(WRITING.minLines, needed)), overflow: needed > WRITING.maxLines };
}
function writingBlock(W) {
  const { lines: n, overflow } = writingLines(W.minWords);
  return `<div class="writing-area">` +
    (W.prompt ? `<p>${esc(W.prompt)}</p>` : '') +
    (W.minWords ? `<p class="muted mono-sm">At least ${esc(W.minWords)} words.</p>` : '') +
    (nonEmpty(W.starters) ? `<div class="lbl">Sentence starters</div><div class="bank">${W.starters.map((st) => `<span class="chip de">${esc(st)}</span>`).join('')}</div>` : '') +
    lines(n) +
    (overflow ? `<p class="muted mono-sm cont">Continue on a separate sheet to reach ${esc(W.minWords)} words.</p>` : '') +
    '</div>';
}
const displayTitle = (t) => String(t || '').replace(/\s+PDF$/i, '');

// Tables of up to 8 rows stay on one page; longer ones may split naturally.
export const KEEP_TABLE_MAX_ROWS = 8;
function table(head, rows, { rowHead = true } = {}) {
  const keep = rows.length <= KEEP_TABLE_MAX_ROWS ? ' keep-table' : '';
  return `<table class="tbl${keep}"><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` +
    `<tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td${rowHead && i === 0 ? ' class="rh"' : ''}>${html(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

/* A section = heading kept together with its first block, so a heading
   can never end a page on its own. */
function makeSections() {
  const titles = [];
  const parts = [];
  return {
    titles,
    parts,
    add(title, blocks, { intro = '' } = {}) {
      const list = blocks.filter(Boolean);
      if (!list.length) return;
      titles.push(title);
      const n = String(titles.length).padStart(2, '0');
      const head = `<div class="eyebrow">${n}</div><h2>${esc(title)}</h2>${intro}`;
      parts.push({ head, list });
    },
    /* The closing note travels with the last block, so it can never sit alone
       on a final page. */
    render(footer) {
      return parts.map(({ head, list }, i) => {
        const last = i === parts.length - 1;
        const blocks = [...list];
        if (last) blocks[blocks.length - 1] = `<div class="keep">${blocks[blocks.length - 1]}${footer}</div>`;
        // A one-line lead-in ("Structure mapped to function.") belongs to what it
        // introduces: keep heading + short paragraph + next block together.
        // (Only when that block is itself unsplittable — a long table may split.)
        const leadIn = blocks.length > 1 && /^<p>[^]{0,160}<\/p>$/.test(blocks[0]) && !blocks[1].startsWith('<table class="tbl">') ? 2 : 1;
        return `<section class="sec"><div class="keep">${head}${blocks.slice(0, leadIn).join('')}</div>${blocks.slice(leadIn).join('')}</section>`;
      }).join('\n');
    },
  };
}

/* ---------- Grammar (mirrors bodyGrammar() field order in chapter-app.js) ---------- */
// Grammar mistakes carry authored inline markup (<b> marks the faulty word).
function mistakeRows(ms) {
  return `<div class="mk-list">` + ms.map((m) =>
    `<div class="mk"><div class="mk-line"><span class="mk-mark x">${MARK_X}</span><span class="de strike">${html(m.wrong)}</span></div>` +
    `<div class="mk-line"><span class="mk-mark ok">${MARK_OK}</span><span class="de">${html(m.right)}</span></div>` +
    (m.why ? `<div class="mk-why">${html(m.why)}</div>` : '') + '</div>').join('') + '</div>';
}

function grammarBlocks(g) {
  const blocks = [];
  if (g.whatIsIt) blocks.push(`<p class="what">${html(g.whatIsIt)}</p>`);
  (g.body || []).forEach((p) => blocks.push(`<p>${html(p)}</p>`));
  if (g.goldenRule) blocks.push(`<div class="co co-rule">${label('Golden rule')}<div class="co-text">${html(g.goldenRule)}</div></div>`);
  if (g.why) blocks.push(`<div class="co co-why">${label('Why German does this')}<p>${html(g.why)}</p></div>`);
  if (nonEmpty(g.formula)) blocks.push(`<div class="co co-formula">${label('Formula')}${g.formula.map((l) => `<div class="fline">${html(l)}</div>`).join('')}</div>`);
  if (g.table && nonEmpty(g.table.rows)) blocks.push(table(g.table.head || [], g.table.rows));
  if (g.note) blocks.push(`<p class="note">${html(g.note)}</p>`);
  if (g.hinglish) blocks.push(`<div class="co co-hinglish">${label('Hinglish mein')}<p>${html(g.hinglish)}</p></div>`);
  if (nonEmpty(g.example)) blocks.push(`<div class="examples">${g.example.map((ex) => `<div class="exline">${html(ex.html)}</div>`).join('')}</div>`);
  if (nonEmpty(g.mistakes)) blocks.push(`<div class="keep">${label(g.mistakes.length > 1 ? 'Common mistakes' : 'Common mistake')}${mistakeRows(g.mistakes.slice(0, 1))}</div>` + (g.mistakes.length > 1 ? mistakeRows(g.mistakes.slice(1)) : ''));
  if (g.compare) blocks.push(`<div class="co co-compare">${label('Compare')}${g.compare.intro ? `<p>${html(g.compare.intro)}</p>` : ''}${g.compare.head ? table(g.compare.head, g.compare.rows || []) : ''}</div>`);
  if (g.connect) blocks.push(`<div class="co co-connect">${label(g.connect.from ? 'Remember from ' + g.connect.from : 'Connects back')}<p>${html(g.connect.text || g.connect)}</p></div>`);
  if (g.memoryTrick) blocks.push(`<div class="co co-trick">${label('Memory trick')}<div class="co-text">${html(g.memoryTrick)}</div></div>`);
  if (nonEmpty(g.recap)) blocks.push(`<div class="co co-recap">${label('10-second recap')}<ul>${g.recap.map((li) => `<li>${html(li)}</li>`).join('')}</ul></div>`);
  return blocks;
}

function buildGrammar(C) {
  const grammar = (C.grammar || []).filter((g) => !isInternalBlock(g));
  if (!grammar.length) return null;
  const S = makeSections();
  grammar.forEach((g) => S.add(g.title, grammarBlocks(g)));
  return { S, meta: [grammar.length === 1 ? '1 topic' : grammar.length + ' topics'] };
}

/* ---------- Vocabulary ---------- */
const GENDER = { m: 'masculine', f: 'feminine', n: 'neuter', pl: 'plural only' };

function conjLine(conj) {
  // Each label + form is one unbreakable unit ("Perf. hat sich gefreut").
  const part = (lbl, form) => (form ? `<span class="nb"><span class="clbl">${lbl}</span> <span class="de">${esc(form)}</span></span>` : '');
  const pres = conj.praesens && typeof conj.praesens === 'object'
    ? ['ich', 'du', 'er', 'wir', 'ihr', 'sie'].filter((p) => conj.praesens[p]).map((p) => `<span class="de nb">${esc(conj.praesens[p])}</span>`).join(', ')
    : null;
  return [pres ? `<span class="nb"><span class="clbl">Präs.</span></span> ${pres}` : part('Präs.', conj.praesens), part('Prät.', conj.praeteritum), part('Perf.', conj.perfekt)]
    .filter(Boolean).join(' · ');
}

/* Authored vocab examples come in two shapes: string triples
   (ex/exEn/exHi, ex2/ex2En/ex2Hi) or, in some C1 chapters, objects
   (ex1/ex2 = {de, en, hi}). Normalise both; anything else prints nothing. */
function vocabExamples(v) {
  const fromObj = (o) => (o && typeof o === 'object' && typeof o.de === 'string' ? [o.de, o.en, o.hi] : null);
  const first = typeof v.ex === 'string' ? [v.ex, v.exEn, v.exHi] : fromObj(v.ex) || fromObj(v.ex1);
  const second = typeof v.ex2 === 'string' ? [v.ex2, v.ex2En, v.ex2Hi] : fromObj(v.ex2);
  return [first, second].filter((e) => e && e[0]);
}

function example(de, en, hi) {
  if (typeof de !== 'string' || !de) return '';
  return `<div class="vex"><div class="de">${esc(de)}</div>${en ? `<div class="ex-en">${esc(en)}</div>` : ''}${hi ? `<div class="ex-hi">${esc(hi)}</div>` : ''}</div>`;
}

function vocabEntry(v) {
  // Article in the semantic article colour. Most levels author it in `art`;
  // C2 nouns carry it inside `de` ("das Abkommen") — split it off for colour only.
  let art = v.art ? String(v.art).trim() : '';
  let head = String(v.de);
  const lead = /^(der|die|das)\s+(.+)$/i.exec(head);
  if (lead && v.pos && /noun/i.test(v.pos) && (!art || art.toLowerCase() === lead[1].toLowerCase())) { art = lead[1]; head = lead[2]; }
  else if (art && head.toLowerCase().startsWith(art.toLowerCase() + ' ')) head = head.slice(art.length + 1);
  const word = `${art ? `<span class="de art r-article">${esc(art)}</span> ` : ''}<span class="de vde">${esc(head)}</span>`;
  const facts = [
    v.pos ? esc(v.pos) : '',
    v.gender && GENDER[v.gender] ? GENDER[v.gender] : '',
    v.register ? esc(v.register) : '',
  ].filter(Boolean).map((t) => `<span class="tag">${t}</span>`).join('');
  const forms = [];
  // A plural authored as a bare dash ("—") means "no plural": omit the line.
  const plural = typeof v.plural === 'string' ? v.plural.trim() : '';
  if (plural && !/^[—–-]$/.test(plural) && plural !== v.de && v.gender !== 'pl') forms.push(`<span class="nb"><span class="clbl">Pl.</span> <span class="de">${esc(plural)}</span></span>`);
  if (v.conj) forms.push(conjLine(v.conj));
  const rel = [];
  if (v.synonyms) rel.push(`<span class="clbl">Synonyme</span> ${esc(v.synonyms)}`);
  if (v.antonyms) rel.push(`<span class="clbl">Gegenteil</span> ${esc(v.antonyms)}`);
  return `<div class="ventry"><div class="vhead"><div class="vword">${word}</div><div class="vtags">${facts}</div>` +
    (forms.length ? `<div class="vforms">${forms.join('<br>')}</div>` : '') + '</div>' +
    `<div class="vbody"><div class="vmean"><span class="ven">${esc(v.en)}</span>${v.hi ? `<span class="vhi" lang="hi">${esc(v.hi)}</span>` : ''}</div>` +
    (rel.length ? `<div class="vrel">${rel.join(' &nbsp;·&nbsp; ')}</div>` : '') +
    vocabExamples(v).map((e) => example(...e)).join('') + '</div></div>';
}

function buildVocabulary(C) {
  const vocab = (C.vocab || []).filter((v) => v && v.de);
  if (!vocab.length) return null;
  const S = makeSections();
  S.add('Word list', vocab.map(vocabEntry), { intro: `<p class="muted intro">${vocab.length} ${vocab.length === 1 ? 'word' : 'words'} from this chapter, in the order they are taught.</p>` });
  return { S, meta: [vocab.length + (vocab.length === 1 ? ' word' : ' words')] };
}

/* ---------- Practice (Homework / Mock test / Checkpoint practice) ---------- */
/* Short option sets sit on one line; if any option is long, or the set
   would not fit one line, print one option per line. (~96 characters fit
   the answer column at 9.5pt; each option adds ~7 for its letter and gap.) */
export function stackOptions(options) {
  const lens = (options || []).map((o) => String(o).length);
  return Math.max(0, ...lens) > 40 || lens.reduce((a, b) => a + b, 0) + 7 * lens.length > 96;
}
const opts = (options) => `<ol class="opts${stackOptions(options) ? ' stack' : ''}">${options.map((o, i) => `<li><span class="opt-l">${letters[i]}</span><span class="opt-t">${esc(o)}</span></li>`).join('')}</ol>`;
/* The app shows MCQ options in authored order, and authored answers sit
   overwhelmingly on the first option — on paper that would give answers
   away, so print order is a stable per-question shuffle (wording unchanged). */
/* Test Paper only: some authored checkpoint options end in a chapter hint —
   "Sehr stark (Ch.13)", "Nicht unmöglich, aber schwierig (Litotes, Ch.12)" —
   and in every case only the correct option carries it. On a paper test that
   gives the answer away, so a trailing parenthetical whose last item is a
   chapter reference is dropped. Nothing else is touched ("(Script B)",
   "(yes/no question)", "(auf/über)" all stay), and chapter data never changes. */
// Covers (Ch.13) · (Litotes, Ch.12) · (Ch.1–2) · (Ch.15/25) · (Ch.37/38, nested).
export const CHAPTER_HINT = /\s*\((?:[^()]*,\s*)?Ch\.\s*\d+(?:\s*[–\/-]\s*\d+)*(?:,\s*[^()]*)?\)\s*$/;
export const stripChapterHint = (o) => String(o).replace(CHAPTER_HINT, '');
const printOpts = (options, seed, { stripHints = false } = {}) => {
  const shuffled = stableShuffle(options || [], seed);
  return opts(stripHints ? shuffled.map(stripChapterHint) : shuffled);
};
const q = (n, body) => `<div class="task"><span class="tnum">${n}</span><div class="tbody">${body}</div></div>`;

function mcqList(items, seed, { withEn = false, stripHints = false } = {}) {
  return items.map((it, i) => q(i + 1,
    `<div class="tq">${esc(it.q)}</div>${withEn && it.qEn ? `<div class="tq-en">${esc(it.qEn)}</div>` : ''}${printOpts(it.options, `${seed}:${i}:${it.q}`, { stripHints })}`));
}

function exerciseTasks(C, { stripHints = false } = {}) {
  const E = C.exercises || {};
  const tasks = [];
  const seed = C.id;
  if (E.mcq && nonEmpty(E.mcq.options)) tasks.push(['Choose the right answer', `<div class="tq">${esc(E.mcq.q)}</div>${printOpts(E.mcq.options, seed + ':mcq', { stripHints })}`]);
  if (isWellFormedGap(E.gap)) {
    const s = E.gap.sentence.map((p, i) => esc(p) + (i < E.gap.gaps.length ? '<span class="blank"></span>' : '')).join('');
    tasks.push(['Fill the gaps', `<div class="de tq gapline">${s}</div>`]);
  }
  if (E.match && nonEmpty(E.match.pairs)) {
    const answers = E.match.pairs.map((p) => p.art);
    const pool = stableShuffle([...new Set(answers)], seed + ':match', answers);
    tasks.push(['Match', `<div class="tq">${esc(E.match.q)}</div><div class="match"><ol class="match-l">${E.match.pairs.map((p) => `<li><span class="de">${esc(p.noun)}</span><span class="blank sm"></span></li>`).join('')}</ol>` +
      `<ol class="match-r">${pool.map((o, i) => `<li><span class="opt-l">${letters[i]}</span>${esc(o)}</li>`).join('')}</ol></div>`]);
  }
  if (E.builder && nonEmpty(E.builder.bank)) {
    const bank = stableShuffle(E.builder.bank, seed + ':builder', E.builder.answer || E.builder.bank);
    tasks.push(['Build the sentence', `<div class="tq">Put the words in the right order.</div><div class="bank">${bank.map((w) => `<span class="chip de">${esc(w)}</span>`).join('')}</div>${lines(1)}`]);
  }
  if (E.errorCorrection && E.errorCorrection.wrong) {
    tasks.push([E.errorCorrection.title || 'Correct the mistake', `<div class="tq">Find and correct the mistake.</div><div class="de tq wrongline">${esc(E.errorCorrection.wrong)}</div>${lines(1)}`]);
  }
  // One-off authored exercise types (mostly B1): {title, prompt, answer} / {title, items}
  const known = new Set(['mcq', 'gap', 'match', 'builder', 'errorCorrection']);
  for (const [key, x] of Object.entries(E)) {
    if (known.has(key) || !x || typeof x !== 'object') continue;
    if (x.prompt && !nonEmpty(x.items)) {
      tasks.push([x.title || key, `<div class="tq">${esc(x.prompt)}</div>${lines(1)}`]);
    } else if (nonEmpty(x.items)) {
      const hasBool = x.items.some((it) => typeof it.isNNoun === 'boolean');
      const choices = hasBool ? ['ja', 'nein'] : [...new Set(x.items.map((it) => it.answer).filter(Boolean))].sort();
      tasks.push([x.title || key, `<div class="tq">Label each item: ${choices.map((c) => `<span class="de">${esc(c)}</span>`).join(' / ')}.</div>` +
        `<ol class="items">${x.items.map((it) => `<li><span class="de">${esc(it.phrase)}</span><span class="blank sm"></span></li>`).join('')}</ol>`]);
    }
  }
  return tasks.map(([title, body], i) => `<div class="task"><span class="tnum">${i + 1}</span><div class="tbody"><div class="tlbl">${esc(title)}</div>${body}</div></div>`);
}

function buildPractice(C, resource) {
  const S = makeSections();
  const assessment = isAssessmentKind(resource.kind);
  const r = C.reading || {};
  if (nonEmpty(r.comprehension) && nonEmpty(r.tokens)) {
    S.add('Reading', [
      `<div class="passage">${r.title ? `<div class="p-title de">${esc(r.title)}</div>` : ''}<p class="de">${esc(joinTokens(r.tokens))}</p></div>`,
      ...mcqList(r.comprehension, C.id + ':reading'),
    ]);
  }
  const L = C.listening || {};
  if (assessment && nonEmpty(L.questions)) {
    S.add('Listening', mcqList(L.questions, C.id + ':listening', { withEn: true }), { intro: '<p class="muted intro">Play the listening audio in this chapter on Klarweg, then answer.</p>' });
  }
  S.add('Exercises', exerciseTasks(C));
  if (nonEmpty(C.grammarReview)) S.add('Grammar review', mcqList(C.grammarReview, C.id + ':grammarReview'));
  if (nonEmpty(C.vocabularyReview)) S.add('Vocabulary review', mcqList(C.vocabularyReview, C.id + ':vocabularyReview'));
  if (nonEmpty(C.errorCorrectionSet)) S.add('Correct the mistakes', C.errorCorrectionSet.map((e, i) => q(i + 1, `<div class="de tq wrongline">${esc(e.wrong)}</div>${lines(1)}`)));
  if (nonEmpty(C.quiz)) S.add('Quiz', mcqList(C.quiz, C.id + ':quiz'));
  if (nonEmpty(C.speaking)) {
    S.add('Speaking', C.speaking.map((s, i) => q(i + 1, `<div class="de tq">${esc(s.task)}</div>${s.taskEn ? `<div class="tq-en">${esc(s.taskEn)}</div>` : ''}`)),
      { intro: '<p class="muted intro">Answer each prompt aloud in full sentences.</p>' });
  }
  const W = C.writing || {};
  if (W.prompt || nonEmpty(W.starters)) {
    // One block: heading, prompt and every line stay together (the section's
    // first block is kept with its heading), moving to a new page if needed.
    S.add('Writing', [writingBlock(W)]);
  }
  if (!S.titles.length) return null;
  return { S, meta: [], worksheet: true, footerNote: 'Check your answers in the Exercises and Quiz sections of this chapter on Klarweg.' };
}

/* ---------- Checkpoint: scoring, answer key, revision guide ---------- */
function buildScoring(C) {
  const sc = C.scoring;
  if (!sc || !nonEmpty(sc.sections)) return null;
  const S = makeSections();
  S.add('Points by section', [
    `<table class="tbl score"><thead><tr><th>Section</th><th>Points</th><th>Your score</th></tr></thead><tbody>` +
    sc.sections.map((s) => `<tr><td class="rh">${esc(s.name)}</td><td>${esc(s.points)}</td><td class="fill"></td></tr>`).join('') +
    (sc.total != null ? `<tr class="total"><td class="rh">Total</td><td>${esc(sc.total)}</td><td class="fill"></td></tr>` : '') + '</tbody></table>',
  ]);
  if (nonEmpty(sc.grades)) S.add('Result bands', [table(['Score', 'Result'], sc.grades.map((g) => [esc(g.range), esc(g.label)]))]);
  if (C.speakingEvaluation && nonEmpty(C.speakingEvaluation.checklist)) {
    S.add('Speaking checklist', [`<ul class="checklist">${C.speakingEvaluation.checklist.map((c) => `<li><span class="box"></span>${esc(c)}</li>`).join('')}</ul>`]);
  }
  return { S, meta: [] };
}

function keyMcq(items, { explain = true } = {}) {
  return items.map((it, i) => {
    const ok = (it.options || [])[it.answer];
    return q(i + 1, `<div class="tq">${esc(it.q)}</div>` +
      `<div class="key"><span class="mk-mark ok">${MARK_OK}</span><span>${esc(ok)}</span>${it.ref ? `<span class="ref">${esc(it.ref)}</span>` : ''}</div>` +
      (explain && it.explain ? `<div class="kexp">${esc(it.explain)}</div>` : ''));
  });
}

function buildAnswerKey(C) {
  const S = makeSections();
  if (C.reading && nonEmpty(C.reading.comprehension)) S.add('Reading', keyMcq(C.reading.comprehension));
  if (C.listening && nonEmpty(C.listening.questions)) S.add('Listening', keyMcq(C.listening.questions));
  if (nonEmpty(C.grammarReview)) S.add('Grammar review', keyMcq(C.grammarReview));
  if (nonEmpty(C.vocabularyReview)) S.add('Vocabulary review', keyMcq(C.vocabularyReview));
  if (nonEmpty(C.errorCorrectionSet)) {
    S.add('Error correction', C.errorCorrectionSet.map((e, i) => q(i + 1,
      `<div class="mk-line"><span class="mk-mark x">${MARK_X}</span><span class="de strike">${esc(e.wrong)}</span></div>` +
      `<div class="mk-line"><span class="mk-mark ok">${MARK_OK}</span><span class="de">${esc(e.right)}</span>${e.ref ? `<span class="ref">${esc(e.ref)}</span>` : ''}</div>`)));
  }
  const E = C.exercises || {};
  const ex = [];
  if (E.mcq && nonEmpty(E.mcq.options)) ex.push(['Choose the right answer', `<div class="tq">${esc(E.mcq.q)}</div><div class="key"><span class="mk-mark ok">${MARK_OK}</span>${esc(E.mcq.options[E.mcq.answer])}</div>${E.mcq.explain ? `<div class="kexp">${esc(E.mcq.explain)}</div>` : ''}`]);
  if (isWellFormedGap(E.gap)) ex.push(['Fill the gaps', `<div class="de tq">${E.gap.sentence.map((p, i) => esc(p) + (i < E.gap.gaps.length ? `<span class="fill-in">${esc(E.gap.gaps[i].answer)}</span>` : '')).join('')}</div>${E.gap.explain ? `<div class="kexp">${esc(E.gap.explain)}</div>` : ''}`]);
  if (E.match && nonEmpty(E.match.pairs)) ex.push(['Match', `<div class="tq">${esc(E.match.q)}</div>` + `<table class="tbl"><tbody>${E.match.pairs.map((p) => `<tr><td class="de">${esc(p.noun)}</td><td>${esc(p.art)}</td></tr>`).join('')}</tbody></table>`]);
  if (E.builder && nonEmpty(E.builder.answer)) ex.push(['Build the sentence', `<div class="de key-line">${esc(joinTokens(E.builder.answer.map((w) => ({ w }))))}</div>`]);
  if (E.errorCorrection && E.errorCorrection.right) ex.push([E.errorCorrection.title || 'Correct the mistake', `<div class="mk-line"><span class="mk-mark x">${MARK_X}</span><span class="de strike">${esc(E.errorCorrection.wrong)}</span></div><div class="mk-line"><span class="mk-mark ok">${MARK_OK}</span><span class="de">${esc(E.errorCorrection.right)}</span></div>${E.errorCorrection.explain ? `<div class="kexp">${esc(E.errorCorrection.explain)}</div>` : ''}`]);
  if (ex.length) S.add('Exercises', ex.map(([t, b], i) => `<div class="task"><span class="tnum">${i + 1}</span><div class="tbody"><div class="tlbl">${esc(t)}</div>${b}</div></div>`));
  if (nonEmpty(C.quiz)) S.add('Quiz', keyMcq(C.quiz));
  if (!S.titles.length) return null;
  return { S, meta: [] };
}

function buildRevisionGuide(C) {
  const S = makeSections();
  if (nonEmpty(C.tutorRecommendations)) {
    S.add('What to revisit', [table(['If this was your weak area', 'Revisit'], C.tutorRecommendations.map((t) => [esc(t.weakArea), esc(t.recommend)]))]);
  }
  (C.grammar || []).filter((g) => !isInternalBlock(g)).forEach((g) => S.add(g.title, grammarBlocks(g)));
  if (nonEmpty(C.takeaways)) S.add('Key takeaways', [`<ul class="takeaways">${C.takeaways.map((t) => `<li>${html(t.html || t)}</li>`).join('')}</ul>`]);
  if (nonEmpty(C.revisionTips)) S.add('How to revise', [`<ol class="tips">${C.revisionTips.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>`]);
  if (!S.titles.length) return null;
  return { S, meta: [] };
}

/* ---------- Checkpoint Test Paper ----------
   The same authored questions the Complete Answer Key answers, in the same
   section order and with the same numbering, as a paper to sit offline:
   options shuffled deterministically, no answers, no explanations. */
function readingPassage(r) {
  return `<div class="passage">${r.title ? `<div class="p-title de">${esc(r.title)}</div>` : ''}<p class="de">${esc(joinTokens(r.tokens))}</p></div>`;
}
function buildTestPaper(C) {
  const S = makeSections();
  const r = C.reading || {};
  if (nonEmpty(r.comprehension)) {
    const passages = [];
    if (nonEmpty(r.tokens)) passages.push(readingPassage(r));
    // Some authored questions refer to "Text B"; its authored passage is the
    // chapter's reading B text, printed only when a question needs it.
    const B = C.readingBArchive;
    if (B && nonEmpty(B.tokens) && r.comprehension.some((it) => /\bText B\b/.test(it.q))) passages.push(readingPassage(B));
    S.add('Reading', [...passages, ...mcqList(r.comprehension, C.id + ':reading', { stripHints: true })]);
  }
  const L = C.listening || {};
  if (nonEmpty(L.questions)) {
    S.add('Listening', mcqList(L.questions, C.id + ':listening', { withEn: true, stripHints: true }),
      { intro: '<p class="muted intro">Play the listening audio in this chapter on Klarweg, then answer.</p>' });
  }
  if (nonEmpty(C.grammarReview)) S.add('Grammar review', mcqList(C.grammarReview, C.id + ':grammarReview', { stripHints: true }));
  if (nonEmpty(C.vocabularyReview)) S.add('Vocabulary review', mcqList(C.vocabularyReview, C.id + ':vocabularyReview', { stripHints: true }));
  if (nonEmpty(C.errorCorrectionSet)) {
    S.add('Error correction', C.errorCorrectionSet.map((e, i) => q(i + 1, `<div class="de tq wrongline">${esc(e.wrong)}</div>${lines(1)}`)),
      { intro: '<p class="muted intro">Each sentence contains one mistake. Write the corrected sentence.</p>' });
  }
  S.add('Exercises', exerciseTasks(C, { stripHints: true }));
  if (nonEmpty(C.quiz)) S.add('Quiz', mcqList(C.quiz, C.id + ':quiz', { stripHints: true }));
  const W = C.writing || {};
  if (W.prompt || nonEmpty(W.starters)) S.add('Writing', [writingBlock(W)]);
  if (nonEmpty(C.speaking)) {
    S.add('Speaking', C.speaking.map((s, i) => q(i + 1, `<div class="de tq">${esc(s.task)}</div>${s.taskEn ? `<div class="tq-en">${esc(s.taskEn)}</div>` : ''}`)),
      { intro: '<p class="muted intro">Answer each prompt aloud in full sentences.</p>' });
  }
  if (!S.titles.length) return null;
  return { S, meta: [], worksheet: true, footerNote: 'Next: score your test with the Scoring Table, then check every answer with the Complete Answer Key.' };
}

export { vocabExamples };

const BUILDERS = {
  vocabulary: buildVocabulary,
  grammar: buildGrammar,
  practice: buildPractice,
  scoring: buildScoring,
  'answer-key': buildAnswerKey,
  'revision-guide': buildRevisionGuide,
  'test-paper': buildTestPaper,
};

/* ---------- document shell ---------- */
const NAME_DATE = '<div class="namedate"><span class="nd"><span class="nd-l">Name</span><span class="nd-line"></span></span><span class="nd"><span class="nd-l">Date</span><span class="nd-line"></span></span></div>';

export function buildResource(C, resource, { css, roleCss, chapterUrl }) {
  const builder = BUILDERS[resource.template];
  if (!builder) return null;
  const built = builder(C, resource);
  if (!built) return null;
  const { S, meta = [], footerNote, worksheet = false } = built;
  const { level, number } = parseId(C.id);
  const tag = chapterTag(C.id);
  const title = displayTitle(resource.title);

  const masthead = `<header class="mast">
    <div class="mast-top"><span class="wordmark">Klarweg</span><span class="mast-tag">${esc(tag)}${resource.kind ? ' · ' + esc(resource.kind) : ''}</span></div>
    <div class="mast-eyebrow">${esc(C.phase || level.toUpperCase())} · Chapter ${String(number).padStart(2, '0')}</div>
    <h1>${esc(title)}</h1>
    <div class="mast-chapter"><span class="de">${esc(C.title)}</span>${C.titleEn ? ` <span class="muted">— ${esc(C.titleEn)}</span>` : ''}</div>
    ${resource.desc ? `<p class="mast-desc">${esc(resource.desc)}</p>` : ''}
    ${meta.length ? `<div class="mast-meta">${meta.map(esc).join(' · ')}</div>` : ''}
  </header>${worksheet ? NAME_DATE : ''}`;

  const footer = `<footer class="doc-end">${footerNote ? `<p>${esc(footerNote)}</p>` : ''}<p class="url"><a href="${esc(chapterUrl)}">${esc(chapterUrl)}</a></p></footer>`;
  const running = `Klarweg · ${tag} ${C.title} · ${title}`;

  const doc = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(`${tag} ${C.title} — ${title}`)}</title>
<style>${css}
${roleCss}
@page { @bottom-left { content: ${cssString(running)}; } }
</style></head>
<body>${masthead}<main>${S.render(footer)}</main></body></html>`;
  return { html: doc, sections: S.titles };
}
