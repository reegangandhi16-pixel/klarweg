/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 19
   "Indirekte Frage (W-Frage & ob)"  — reporting/asking questions
   politely. Teaches ONLY indirect questions: W-word clauses
   (wo, wann, warum, wie, wer, was, wohin, woher, wie viel,
   wie lange, welcher) and ob-clauses (yes/no). No Konjunktiv I,
   no reported speech, no relative clauses.
   Vocabulary source: uploaded chapter-19 list (~64 items; language
   school / travel / hospital & office jobs theme). Recycles Ch.11
   (wenn), Ch.13 (Dativ-Präp.), Ch.17 (werden), Ch.18 (Ortsangaben)
   and Phase 1 (weil, dass, Perfekt, modal past, Komparativ).
   NOTE: content only — existing audio engine, no new assets.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "ob - if would like to know if I can park the car anywhere.)"
     → the gloss is simply ob = whether/if; a stray example
     fragment ("… would like to know if I can park the car
     anywhere") had been merged into the entry and is dropped.
   • "kommen - (see glossary)" → kommen = to come (already
     well-established from A1; kept as a plain recap entry).
   • "unter - at" → corrected to unter = under; among (its real
     meanings as a Wechselpräposition, recycled from Ch.14).
   • "die Direktorin - headmaster" → glossed as headmistress /
     director (f.) to reflect the feminine form correctly.
============================================================ */
const CHAPTER = {
  id: 'a2-19-indirekte-fragen',
  phase: 'A2 · Phase 2',
  number: 19,
  title: 'Indirekte Frage (W-Frage & ob)',
  titleEn: 'Indirect Questions (W-word & ob)',
  description: 'A direct question is blunt: Wo wohnst du? Wrap it in a polite frame — Kannst du mir sagen, …? Ich weiß nicht, … — and it becomes an indirect question: Kannst du mir sagen, wo du wohnst? Two rules make it work every time: the W-word (or ob for a yes/no question) opens the clause, and the verb moves all the way to the end. No inversion, ever.',
  xp: 170,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 20, title: 'Interrogativartikel: was für ein(e)', titleEn: 'The Interrogative was für ein(e)' , href: 'chapter-a2-20-was-fuer-ein.html' },

  prevChapter: { number: 18, title: 'Ortsangaben: Pr\u00e4positionen', titleEn: 'Location Expressions', href: 'chapter-a2-18-ortsangaben.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Between a delayed train, a doctor’s appointment and a mountain of admin, Timo needs information — and does not want to sound rude asking for it. Franka shows him the trick: wrap any question in Kannst du mir sagen, …? or Ich weiß nicht, … and it turns polite and indirect, with the verb sliding to the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear indirect W-questions and ob-questions side by side'
    ],
    scene: 'Ein voller Terminkalender — Sprachschule Berlin',
    femaleSpeakers: ['Franka'],
    dialogue: [
      { speaker: 'Franka', tokens: [
        { w: 'Weißt', role: 'r-verb', en: 'do you know', hi: 'पता है', pron: 'VYSST', type: 'Verb · wissen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob', why: 'ob introduces an indirect yes/no question; verb goes to the end (this chapter).', ex: 'Weißt du, ob er kommt?', exEn: 'Do you know whether he is coming?' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Anrufer', role: 'r-subject', en: 'caller', hi: 'फ़ोन करने वाला', pron: 'AN-roo-fer', type: 'Noun · masc.', why: 'der Anrufer (this chapter).', ex: 'Der Anrufer war nett.', exEn: 'The caller was nice.' },
        { w: 'kommt', role: 'r-verb', en: 'is coming', hi: 'आ रहा है', pron: 'komt', type: 'Verb · kommen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you know whether the caller is coming?', hi: 'Tumhe pata hai ki caller aa raha hai ya nahi?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'weiß', role: 'r-verb', en: 'know', hi: 'जानता हूँ', pron: 'vise', type: 'Verb · wissen (ich)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'kommt', role: 'r-verb', en: 'is coming', hi: 'आ रहा है', pron: 'komt', type: 'Verb · kommen (Satzende)' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'पूछा', pron: 'hat', type: 'Verb · haben (helper)' },
        { w: 'gefragt', role: 'r-verb', en: 'asked', hi: 'पूछा', pron: 'ge-FRAHKT', type: 'Partizip II', why: 'fragen → gefragt (recycled).' },
        { w: ',', plain: true },
        { w: 'wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word', why: 'indirect question with W-word: verb also goes to the end (this chapter).', ex: 'Er fragte, wann wir öffnen.', exEn: 'He asked when we open.' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'öffnen', role: 'r-verb', en: 'open', hi: 'खुलते हैं', pron: 'ÖF-nen', type: 'Verb · öffnen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I do not know whether he is coming. But he asked when we open.', hi: 'Mujhe nahi pata ki woh aa raha hai. Par usne poocha ki hum kab khulte hain.' },
      { speaker: 'Franka', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'कहा', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'geantwortet', role: 'r-verb', en: 'answered', hi: 'जवाब दिया', pron: 'ge-ANT-vor-tet', type: 'Partizip II', why: 'antworten → geantwortet (recycled).' },
        { w: '?', plain: true }
      ], en: 'And what did you answer?', hi: 'Aur tumne kya jawaab diya?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'कहा', pron: 'HAH-buh', type: 'Verb · haben (helper)' },
        { w: 'gesagt', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ge-ZAHKT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock time' },
        { w: 'neun', role: 'r-time', en: 'nine', hi: 'नौ', pron: 'noyn', type: 'Number' },
        { w: 'öffnen', role: 'r-verb', en: 'open', hi: 'खुलते हैं', pron: 'ÖF-nen', type: 'Verb · öffnen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I said that we open at nine.', hi: 'Maine kaha ki hum nau baje khulte hain.' },
      { speaker: 'Franka', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wusstest', role: 'r-verb', en: 'did you know', hi: 'पता था', pron: 'VUS-test', type: 'Verb · wissen (Präteritum, du)', why: 'wissen in the past: du wusstest (this chapter).', ex: 'Wusstest du, was er will?', exEn: 'Did you know what he wants?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'wants', hi: 'चाहता है', pron: 'vil', type: 'Modal · wollen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Good. And did you know what he wants?', hi: 'Achha. Aur tumhe pata tha ki woh kya chahta hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'will', role: 'r-modalverb', en: 'wants', hi: 'चाहता है', pron: 'vil', type: 'Modal · wollen (er)' },
        { w: 'einen', role: 'r-akkusativ', en: 'an (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Termin', role: 'r-akkusativ', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes! He wants an appointment.', hi: 'Haan! Woh ek appointment chahta hai.' },
      { speaker: 'Franka', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'rufen', role: 'r-verb', en: 'let us call', hi: 'फ़ोन करते हैं', pron: 'ROO-fen', type: 'Verb · anrufen (wir)', lexicalUnit: 'anrufen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसे', pron: 'een', type: 'Pronoun · acc.' },
        { w: 'zurück', role: 'r-verb', en: 'back', hi: 'वापस', pron: 'tsu-RÜK', type: 'Separable prefix · Satzende', lexicalUnit: 'zurückrufen' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then let us call him back.', hi: 'Badhiya! Toh use wapas call karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A direct question stands alone: <span class="de">Wo wohnst du?</span> Wrap it inside a polite frame — <span class="de">Kannst du mir sagen, …?</span> or <span class="de">Ich weiß nicht, …</span> — and it becomes an <strong>indirect question</strong>: <span class="de">Kannst du mir sagen, <span class="r-frage">wo</span> du wohnst?</span> Two fixed rules, no exceptions: a <strong>W-word</strong> (wer, was, wann, wo, wohin, woher, warum, wie, wie viel, wie lange, welcher) opens the clause when the original question had one; <span class="de r-frage">ob</span> opens it when the original was a plain yes/no question. Either way, the <strong>conjugated verb moves to the very end</strong> — exactly like weil, dass and wenn. There is no inversion after the question word: never <span class="de" style="text-decoration:line-through">wo wohnst du</span> inside the frame, always <span class="de">wo du wohnst</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INDIRECT QUESTIONS: W-word clauses (wo, wann, warum, wie, wer, was, wohin, woher, wie viel, wie lange, welcher) and ob-clauses (yes/no). Verb-final, no inversion. ' +
    'No Konjunktiv I, no reported speech with subjunctive. The learner wrote polite questions/requests below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Indirect question = frame (Kannst du mir sagen, / Ich weiß nicht, / Weißt du, / Er fragt, / Ich frage mich, / Sie möchte wissen,) + W-word or ob + conjugated verb at the END: "Kannst du mir sagen, wo der Bahnhof ist?" "Ich weiß nicht, wann der Kurs beginnt." "Sie fragt, ob wir heute Unterricht haben."\n' +
    '- NO inversion after the question word: flag "wo ist der Bahnhof" used inside a frame (should be "wo der Bahnhof ist"); flag "ob kommt er" (should be "ob er kommt").\n' +
    '- ob is used ONLY for yes/no questions (no question word in the original); a W-word question keeps its own W-word, never "ob" instead.\n' +
    '- In the Perfekt or with modals inside the indirect clause, the conjugated helper/modal is truly last, after the participle/infinitive: "…, ob sie den Vorschlag genehmigt hat." "…, ob sie einen Tarif geben kann."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Indirect-question check:</b> one sentence on whether the verb landed at the end with no inversion.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You wrap any question politely — W-word or ob, verb always at the end. Next: ask "what kind of" with <span class="de">was für ein(e)</span>.',
    mid: 'Good. Re-read the direct-vs-indirect card once (no inversion after the question word), then continue.',
    low: 'Worth another pass — remember: keep the W-word if there was one, use ob if there wasn’t, and always send the verb to the end. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Kannst', role: 'r-verb' }, { w: 'du', role: 'r-subject' },
    { w: 'mir', role: 'r-dativ' }, { w: 'sagen', role: 'r-verb' },
    { w: 'ob', role: 'r-frage' }, { w: 'der', role: 'r-subject' },
    { w: 'Kurs', role: 'r-subject' }, { w: 'beginnt', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the frame + W-word/ob + verb-at-the-end pattern.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A busy schedule full of polite indirect questions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Direktorin, der Tarif, die Monatskarte, flexibel, möglich.' },
    { id: 'grammar',    label: 'Indirekte Frage', tag: 'core',
      objective: 'Master the W-word table, ob-clauses, verb position and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a polite email to the language school — W-words and ob throughout.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each indirect question in a workplace phone call.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Ask politely for information, directions and schedules.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a polite information request using W-words and ob.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill direct-to-indirect conversion and verb position.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter’s office, travel and hospital words — die Direktorin, der Tarif, die Monatskarte, der Stau, flexibel — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '13 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Direct-to-indirect conversion drills, ob vs W-word sorting, verb-position practice, and a polite-email task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full W-word table, the ob rule, the verb-to-the-end pattern, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Kannst du mir sagen, wo …?', text: 'Turn a W-question into a polite indirect one' },
    { de: 'Ich weiß nicht, ob …', text: 'Turn a yes/no question into an ob-clause' },
    { de: '…, wann der Kurs beginnt.', text: 'Send the verb to the end — no inversion' },
    { de: 'Er fragt, ob …', text: 'Report a question someone else asked' },
    { de: 'wo? → wo · ja/nein? → ob', text: 'Choose the right opener every time' }
  ],

  // ---------- Vocabulary (~64 items) ----------
  vocab: [
    { de: 'direkt', pos: 'adjective', en: 'direct', hi: 'सीधा', ex: 'Das ist eine direkte Frage.', exEn: 'That is a direct question.' },
    { de: 'indirekt', pos: 'adjective', en: 'indirect', hi: 'अप्रत्यक्ष', ex: 'Das ist eine indirekte Frage.', exEn: 'That is an indirect question.' },
    { de: 'Fragesatz', art: 'der', gender: 'm', plural: 'Fragesätze', pos: 'noun', en: 'interrogative clause, question sentence', hi: 'प्रश्न वाक्य', ex: 'Der Fragesatz beginnt mit einem W-Wort.', exEn: 'The interrogative clause begins with a W-word.' },
    { de: 'Redewiedergabe', art: 'die', gender: 'f', plural: 'Redewiedergaben', pos: 'noun', en: 'rendition, reporting (of speech)', hi: 'कथन का पुनरुत्पादन', ex: 'Die Redewiedergabe braucht keinen Konjunktiv hier.', exEn: 'The rendition of speech doesn’t need a subjunctive here.' },
    { de: 'ob', pos: 'conjunction', en: 'whether, if', hi: 'क्या', ex: 'Ich weiß nicht, ob er kommt.', exEn: 'I don’t know whether he’s coming.' },
    { de: 'kommen', pos: 'verb', en: 'to come', hi: 'आना', ex: 'Weißt du, ob sie heute kommt?', exEn: 'Do you know whether she’s coming today?', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'Übersetzer', art: 'der', gender: 'm', plural: 'Übersetzer', pos: 'noun', en: 'translator (m.)', hi: 'अनुवादक', ex: 'Fragst du den Übersetzer, wie das Wort heißt?', exEn: 'Will you ask the translator what the word is called?' },
    { de: 'Anrufer', art: 'der', gender: 'm', plural: 'Anrufer', pos: 'noun', en: 'caller', hi: 'फ़ोन करने वाला', ex: 'Der Anrufer fragt, ob wir geöffnet haben.', exEn: 'The caller asks whether we’re open.' },
    { de: 'Direktor', art: 'der', gender: 'm', plural: 'Direktoren', pos: 'noun', en: 'headmaster, director (m.)', hi: 'निदेशक', ex: 'Weißt du, wann der Direktor kommt?', exEn: 'Do you know when the headmaster is coming?' },
    { de: 'Direktorin', art: 'die', gender: 'f', plural: 'Direktorinnen', pos: 'noun', en: 'headmistress, director (f.)', hi: 'निदेशक (महिला)', ex: 'Ich weiß nicht, ob die Direktorin heute da ist.', exEn: 'I don’t know whether the director is here today.' },
    { de: 'Expertin', art: 'die', gender: 'f', plural: 'Expertinnen', pos: 'noun', en: 'expert (f.)', hi: 'विशेषज्ञ (महिला)', ex: 'Frag die Expertin, ob sie helfen kann.', exEn: 'Ask the expert whether she can help.' },
    { de: 'Leiterin', art: 'die', gender: 'f', plural: 'Leiterinnen', pos: 'noun', en: 'director, manager (f.)', hi: 'प्रमुख (महिला)', ex: 'Weißt du, wer die Leiterin ist?', exEn: 'Do you know who the director is?' },
    { de: 'Oberärztin', art: 'die', gender: 'f', plural: 'Oberärztinnen', pos: 'noun', en: 'consultant, senior physician (f.)', hi: 'वरिष्ठ चिकित्सक (महिला)', ex: 'Ich frage die Oberärztin, wann die Untersuchung ist.', exEn: 'I’ll ask the consultant when the examination is.' },
    { de: 'Radfahrerin', art: 'die', gender: 'f', plural: 'Radfahrerinnen', pos: 'noun', en: 'cyclist (f.)', hi: 'साइकिल चालक (महिला)', ex: 'Frag die Radfahrerin, wohin sie fährt.', exEn: 'Ask the cyclist where she’s riding to.' },
    { de: 'Herzzentrum', art: 'das', gender: 'n', plural: 'Herzzentren', pos: 'noun', en: 'cardiac centre', hi: 'हृदय केंद्र', ex: 'Weißt du, wo das Herzzentrum ist?', exEn: 'Do you know where the cardiac centre is?' },
    { de: 'Untersuchung', art: 'die', gender: 'f', plural: 'Untersuchungen', pos: 'noun', en: 'examination, check-up', hi: 'जांच', ex: 'Ich frage, wie lange die Untersuchung dauert.', exEn: 'I’m asking how long the examination takes.' },
    { de: 'schwanger', pos: 'adjective', en: 'pregnant', hi: 'गर्भवती', ex: 'Sie fragt, ob man als Schwangere hier warten muss.', exEn: 'She asks whether pregnant women have to wait here.' },
    { de: 'Arbeitstag', art: 'der', gender: 'm', plural: 'Arbeitstage', pos: 'noun', en: 'workday', hi: 'कार्यदिवस', ex: 'Weißt du, wie viele Arbeitstage noch bleiben?', exEn: 'Do you know how many workdays are left?' },
    { de: 'Hausarbeit', art: 'die', gender: 'f', plural: 'Hausarbeiten', pos: 'noun', en: 'housework', hi: 'घर का काम', ex: 'Er fragt, ob wir die Hausarbeit teilen können.', exEn: 'He asks whether we can share the housework.' },
    { de: 'Tätigkeit', art: 'die', gender: 'f', plural: 'Tätigkeiten', pos: 'noun', en: 'occupation, activity', hi: 'कार्य', ex: 'Sie fragt, welche Tätigkeit mir am besten gefällt.', exEn: 'She asks which occupation I like best.' },
    { de: 'Zusammenarbeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'cooperation', hi: 'सहयोग', ex: 'Ich frage mich, ob die Zusammenarbeit funktioniert.', exEn: 'I wonder whether the cooperation works.' },
    { de: 'Digitalisierung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'digitisation', hi: 'डिजिटलीकरण', ex: 'Weißt du, wie die Digitalisierung funktioniert?', exEn: 'Do you know how digitisation works?' },
    { de: 'Vernetzung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'networking, connection', hi: 'नेटवर्किंग', ex: 'Ich frage, ob die Vernetzung schon steht.', exEn: 'I’m asking whether the network is already set up.' },
    { de: 'Kombination', art: 'die', gender: 'f', plural: 'Kombinationen', pos: 'noun', en: 'combination', hi: 'संयोजन', ex: 'Weißt du, welche Kombination richtig ist?', exEn: 'Do you know which combination is correct?' },
    { de: 'Blatt', art: 'das', gender: 'n', plural: 'Blätter', pos: 'noun', en: 'sheet of paper', hi: 'काग़ज़ की शीट', ex: 'Frag ihn, wie viele Blätter er braucht.', exEn: 'Ask him how many sheets of paper he needs.' },
    { de: 'Bahn', art: 'die', gender: 'f', plural: 'Bahnen', pos: 'noun', en: 'train, railway', hi: 'रेल', ex: 'Weißt du, wann die Bahn fährt?', exEn: 'Do you know when the train leaves?' },
    { de: 'Fahrt', art: 'die', gender: 'f', plural: 'Fahrten', pos: 'noun', en: 'journey, ride', hi: 'यात्रा', ex: 'Ich frage, wie lange die Fahrt dauert.', exEn: 'I’m asking how long the journey takes.' },
    { de: 'Monatskarte', art: 'die', gender: 'f', plural: 'Monatskarten', pos: 'noun', en: 'monthly ticket, season ticket', hi: 'मासिक टिकट', ex: 'Weißt du, wo man eine Monatskarte kauft?', exEn: 'Do you know where you buy a monthly ticket?' },
    { de: 'hin und zurück', pos: 'phrase', en: 'there and back, round trip', hi: 'आने-जाने', ex: 'Sie fragt, ob das Ticket hin und zurück gilt.', exEn: 'She asks whether the ticket is valid there and back.' },
    { de: 'Stau', art: 'der', gender: 'm', plural: 'Staus', pos: 'noun', en: 'traffic jam', hi: 'ट्रैफ़िक जाम', ex: 'Ich frage mich, ob es heute einen Stau gibt.', exEn: 'I wonder whether there’s a traffic jam today.' },
    { de: 'E-Scooter', art: 'der', gender: 'm', plural: 'E-Scooter', pos: 'noun', en: 'e-scooter, electric scooter', hi: 'ई-स्कूटर', ex: 'Frag ihn, ob ein E-Scooter praktisch ist.', exEn: 'Ask him whether an e-scooter is practical.' },
    { de: 'Garage', art: 'die', gender: 'f', plural: 'Garagen', pos: 'noun', en: 'garage', hi: 'गैराज', ex: 'Weißt du, wo die Garage ist?', exEn: 'Do you know where the garage is?' },
    { de: 'Tankstelle', art: 'die', gender: 'f', plural: 'Tankstellen', pos: 'noun', en: 'petrol station', hi: 'पेट्रोल पंप', ex: 'Ich frage, ob die Tankstelle noch offen ist.', exEn: 'I’m asking whether the petrol station is still open.' },
    { de: 'Benzin', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'petrol', hi: 'पेट्रोल', ex: 'Weißt du, wie viel Benzin wir noch haben?', exEn: 'Do you know how much petrol we still have?' },
    { de: 'Diesel', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'diesel', hi: 'डीज़ल', ex: 'Frag, ob sie auch Diesel verkaufen.', exEn: 'Ask whether they also sell diesel.' },
    { de: 'Motor', art: 'der', gender: 'm', plural: 'Motoren', pos: 'noun', en: 'engine, motor', hi: 'इंजन', ex: 'Ich weiß nicht, warum der Motor so laut ist.', exEn: 'I don’t know why the engine is so loud.' },
    { de: 'Reifen', art: 'der', gender: 'm', plural: 'Reifen', pos: 'noun', en: 'tyre', hi: 'टायर', ex: 'Frag den Mechaniker, ob der Reifen kaputt ist.', exEn: 'Ask the mechanic whether the tyre is broken.' },
    { de: 'Schalter', art: 'der', gender: 'm', plural: 'Schalter', pos: 'noun', en: 'counter, switch', hi: 'काउंटर', ex: 'Weißt du, wo der Schalter ist?', exEn: 'Do you know where the counter is?' },
    { de: 'Tarif', art: 'der', gender: 'm', plural: 'Tarife', pos: 'noun', en: 'rate, tariff', hi: 'दर', ex: 'Ich frage, welcher Tarif am günstigsten ist.', exEn: 'I’m asking which rate is cheapest.' },
    { de: 'mobil', pos: 'adjective', en: 'mobile', hi: 'गतिशील', ex: 'Sie fragt, ob ich mobil bleiben kann.', exEn: 'She asks whether I can stay mobile.' },
    { de: 'Kursort', art: 'der', gender: 'm', plural: 'Kursorte', pos: 'noun', en: 'course location', hi: 'कोर्स स्थान', ex: 'Weißt du, wo der Kursort ist?', exEn: 'Do you know where the course location is?' },
    { de: 'Stadtbesichtigung', art: 'die', gender: 'f', plural: 'Stadtbesichtigungen', pos: 'noun', en: 'sightseeing tour', hi: 'शहर दर्शन', ex: 'Frag, wann die Stadtbesichtigung beginnt.', exEn: 'Ask when the sightseeing tour begins.' },
    { de: 'Stadtprogramm', art: 'das', gender: 'n', plural: 'Stadtprogramme', pos: 'noun', en: 'city programme', hi: 'शहर कार्यक्रम', ex: 'Ich weiß nicht, was im Stadtprogramm steht.', exEn: 'I don’t know what’s in the city programme.' },
    { de: 'Gewitter', art: 'das', gender: 'n', plural: 'Gewitter', pos: 'noun', en: 'thunderstorm', hi: 'तूफ़ान', ex: 'Weißt du, ob ein Gewitter kommt?', exEn: 'Do you know whether a thunderstorm is coming?' },
    { de: 'ewig', pos: 'adjective', en: 'forever, eternal', hi: 'हमेशा के लिए', ex: 'Der Stau dauert ewig.', exEn: 'The traffic jam takes forever.' },
    { de: 'erleben', pos: 'verb', en: 'to experience', hi: 'अनुभव करना', ex: 'Ich frage mich, was wir dort erleben werden.', exEn: 'I wonder what we’ll experience there.', conj: { praesens: 'erlebt', praeteritum: 'erlebte', perfekt: 'hat erlebt' } },
    { de: 'stören', pos: 'verb', en: 'to disturb', hi: 'परेशान करना', ex: 'Weißt du, ob das Lärm die Nachbarn stört?', exEn: 'Do you know whether the noise disturbs the neighbours?', conj: { praesens: 'stört', praeteritum: 'störte', perfekt: 'hat gestört' } },
    { de: 'setzen', pos: 'verb', en: 'to sit down; to set', hi: 'बैठना; रखना', ex: 'Frag, ob wir uns hier setzen dürfen.', exEn: 'Ask whether we’re allowed to sit here.', conj: { praesens: 'setzt', praeteritum: 'setzte', perfekt: 'hat gesetzt' } },
    { de: 'einzeichnen', pos: 'verb', en: 'to draw in, to mark (separable)', hi: 'अंकित करना', ex: 'Ich frage, ob du den Weg einzeichnen kannst.', exEn: 'I’m asking whether you can draw in the route.', conj: { praesens: 'zeichnet ein', praeteritum: 'zeichnete ein', perfekt: 'hat eingezeichnet' } },
    { de: 'vorhaben', pos: 'verb', en: 'to plan (separable)', hi: 'योजना बनाना', ex: 'Weißt du, was sie am Wochenende vorhat?', exEn: 'Do you know what she’s planning for the weekend?', conj: { praesens: 'hat vor', praeteritum: 'hatte vor', perfekt: 'hat vorgehabt' } },
    { de: 'dafür sein', pos: 'phrase', en: 'to approve, to be in favour', hi: 'पक्ष में होना', ex: 'Ich frage, ob sie dafür ist.', exEn: 'I’m asking whether she’s in favour.' },
    { de: 'beruflich', pos: 'adjective', en: 'professional, work-related', hi: 'व्यावसायिक', ex: 'Sie fragt, was ich beruflich mache.', exEn: 'She asks what I do professionally.' },
    { de: 'Bier', art: 'das', gender: 'n', plural: 'Biere', pos: 'noun', en: 'beer', hi: 'बीयर', ex: 'Frag, ob es hier Bier gibt.', exEn: 'Ask whether there’s beer here.' },
    { de: 'dafür', pos: 'adverb', en: 'for that, for it', hi: 'उसके लिए', ex: 'Ich weiß nicht, ob ich dafür Zeit habe.', exEn: 'I don’t know whether I have time for that.' },
    { de: 'dorthin', pos: 'adverb', en: 'there, to that place', hi: 'वहाँ', ex: 'Weißt du, wie man dorthin kommt?', exEn: 'Do you know how you get there?' },
    { de: 'einige', pos: 'pronoun', en: 'some, several', hi: 'कुछ', ex: 'Ich frage mich, ob einige Leute schon da sind.', exEn: 'I wonder whether some people are already there.' },
    { de: 'finanziell', pos: 'adjective', en: 'financial', hi: 'आर्थिक', ex: 'Sie fragt, ob es finanziell möglich ist.', exEn: 'She asks whether it’s financially possible.' },
    { de: 'flexibel', pos: 'adjective', en: 'flexible', hi: 'लचीला', ex: 'Weißt du, ob die Zeiten flexibel sind?', exEn: 'Do you know whether the times are flexible?' },
    { de: 'hintereinander', pos: 'adverb', en: 'one after another, consecutively', hi: 'लगातार', ex: 'Frag, ob wir hintereinander sprechen sollen.', exEn: 'Ask whether we should speak one after another.' },
    { de: 'in Ordnung', pos: 'phrase', en: 'all right, okay', hi: 'ठीक है', ex: 'Ich weiß nicht, ob das in Ordnung ist.', exEn: 'I don’t know whether that’s all right.' },
    { de: 'möglich', pos: 'adjective', en: 'possible', hi: 'संभव', ex: 'Sie fragt, ob ein späterer Termin möglich ist.', exEn: 'She asks whether a later appointment is possible.' },
    { de: 'nervig', pos: 'adjective', en: 'annoying', hi: 'खीजने वाला', ex: 'Ich frage mich, warum das so nervig ist.', exEn: 'I wonder why that’s so annoying.' },
    { de: 'schon mal', pos: 'phrase', en: 'before, already once', hi: 'पहले भी', ex: 'Weißt du, ob er das schon mal gemacht hat?', exEn: 'Do you know whether he’s done that before?' },
    { de: 'sogar', pos: 'adverb', en: 'even', hi: 'यहाँ तक कि', ex: 'Ich frage, ob es sogar heute möglich ist.', exEn: 'I’m asking whether it’s even possible today.' },
    { de: 'unpraktisch', pos: 'adjective', en: 'impractical', hi: 'अव्यावहारिक', ex: 'Sie fragt sich, ob das unpraktisch ist.', exEn: 'She wonders whether that’s impractical.' },
    { de: 'unter', pos: 'preposition', en: 'under; among', hi: 'नीचे; में से', ex: 'Weißt du, ob der Schlüssel unter der Matte liegt?', exEn: 'Do you know whether the key lies under the mat?' },
    { de: 'vorn', pos: 'adverb', en: 'at the front', hi: 'सामने', ex: 'Frag, ob wir vorn sitzen dürfen.', exEn: 'Ask whether we’re allowed to sit at the front.' }
  ],

  // ---------- Indirekte Frage (rule cards) ----------
  grammar: [
    {
      title: 'Direct vs. indirect — the frame',
      goldenRule: 'Add a polite frame + comma, and the question\u2019s verb moves to the <b>end</b>.',
      formula: [
        'direct:    <b>Wo wohnst du?</b>',
        'indirect:  Kannst du mir sagen, <b>wo du wohnst</b>?',
        '                                        \u2191 verb last'
      ],
      why: 'The moment you put the question inside a bigger sentence, it stops being a question of its own \u2014 it becomes a piece of the main sentence. German marks that with verb-final order, exactly as it does after <b>weil</b>, <b>dass</b> and <b>wenn</b>.',
      memoryTrick: 'Yeh koi naya rule nahi \u2014 wahi <b>weil/dass/wenn</b> wala verb-last order hai. Bas frame naya hai.',
      recap: [
        'Frame + comma + question word (or <b>ob</b>) + \u2026 + verb <b>last</b>.',
        'No inversion \u2014 the subject stays before the verb.',
        'Common frames: <span class="de">Kannst du mir sagen, \u2026 / Ich wei\u00df nicht, \u2026</span>'
      ],
      body: [
        'Wrap a direct question in a polite frame, and it becomes an indirect question. Two things change: the question word (or ob) starts a subordinate clause, and the verb slides to the end.'
      ],
      table: {
        head: ['Direct question', 'Indirect question'],
        rows: [
          ['<span class="de">Wo wohnst du?</span>', '<span class="de">Kannst du mir sagen, <span class="r-frage">wo</span> du wohnst?</span>'],
          ['<span class="de">Wann beginnt der Kurs?</span>', '<span class="de">Ich weiß nicht, <span class="r-frage">wann</span> der Kurs beginnt.</span>'],
          ['<span class="de">Kommt er?</span>', '<span class="de">Ich weiß nicht, <span class="r-frage">ob</span> er kommt.</span>'],
          ['<span class="de">Hat sie Zeit?</span>', '<span class="de">Er fragt, <span class="r-frage">ob</span> sie Zeit hat.</span>']
        ]
      },
      note: 'Common frames: <span class="de">Kannst du mir sagen, … / Ich weiß nicht, … / Weißt du, … / Er/Sie fragt, … / Ich frage mich, … / … möchte wissen, …</span>. A comma always separates the frame from the indirect clause.',
      hinglish: 'Direct sawaal ko ek polite frame mein daal do \u2014 jaise <b>Kannst du mir sagen,</b> ya <b>Ich weiß nicht,</b> ya <b>Weißt du,</b> \u2014 aur woh indirect ban jaata hai. Uske baad question word ya <b>ob</b> clause shuru karta hai, aur verb sentence ke end mein chala jaata hai.'
    },
    {
      title: 'W-word questions — keep the same word',
      body: [
        'If the direct question had a W-word, that <strong>same word</strong> opens the indirect clause — and the verb still goes to the end.'
      ],
      table: {
        head: ['W-word', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-frage">wer</span>', 'who', '<span class="de">Weißt du, wer die Leiterin ist?</span>'],
          ['<span class="de r-frage">was</span>', 'what', '<span class="de">Ich weiß nicht, was sie vorhat.</span>'],
          ['<span class="de r-frage">wann</span>', 'when', '<span class="de">Sag mir, wann die Bahn fährt.</span>'],
          ['<span class="de r-frage">wo / wohin / woher</span>', 'where / to / from', '<span class="de">Weißt du, wo der Kursort ist?</span>'],
          ['<span class="de r-frage">warum</span>', 'why', '<span class="de">Weißt du, warum Anna fehlt?</span>'],
          ['<span class="de r-frage">wie / wie viel / wie lange</span>', 'how / how much / how long', '<span class="de">Er erklärt, wie das funktioniert.</span>'],
          ['<span class="de r-frage">welcher/-e/-es</span>', 'which', '<span class="de">Ich weiß nicht, welcher Tarif günstiger ist.</span>']
        ]
      },
      note: 'Never swap a W-word question for ob — ob is only for yes/no questions with no question word.',
      hinglish: 'Agar direct sawaal mein W-word tha, to wahi word indirect clause mein bhi rehta hai, aur verb sentence ke end mein jaata hai. <b>ob</b> sirf haan/na wale sawaalon ke liye hai, W-questions ke liye nahi.'
    },
    {
      title: 'ob-questions — for yes/no',
      goldenRule: 'No question word in the direct question? Use <b>ob</b>.',
      memoryTrick: 'W-word tha to wahi W-word rakho. W-word nahi tha (sirf haan/na) to <b>ob</b> lagao. Aur <b>ob</b> ko <b>wenn</b> se mat milao \u2014 wenn shart ke liye hai, ob reported sawaal ke liye.',
      recap: [
        'Yes/no question \u2192 <b>ob</b>.',
        'W-question \u2192 keep the same W-word.',
        '<b>ob</b> = whether; <b>wenn</b> = if (condition). Different jobs.'
      ],
      body: [
        'If the direct question has <strong>no question word</strong> (a plain yes/no question), open the indirect clause with <span class="de r-frage">ob</span>.'
      ],
      table: {
        head: ['Direct (yes/no)', 'Indirect (ob)'],
        rows: [
          ['<span class="de">Hat sie Zeit?</span>', '<span class="de">Kannst du mir sagen, <span class="r-frage">ob</span> sie Zeit hat?</span>'],
          ['<span class="de">Ist das Restaurant geöffnet?</span>', '<span class="de">Er möchte wissen, <span class="r-frage">ob</span> das Restaurant geöffnet ist.</span>'],
          ['<span class="de">Haben wir heute Unterricht?</span>', '<span class="de">Sie fragt, <span class="r-frage">ob</span> wir heute Unterricht haben.</span>']
        ]
      },
      note: 'ob translates as "whether" or "if" — but never confuse it with wenn (if = condition, recycled from Ch.11). Here ob only introduces a reported yes/no question.',
      hinglish: 'Agar direct sawaal mein koi question word nahi (sirf haan/na), toh ob se shuru karo. ob = whether/if, lekin wenn (condition) se alag hai.'
    },
    {
      title: 'Verb position — no inversion, ever',
      body: [
        'The single biggest trap: after the question word or ob, do <strong>not</strong> invert the verb and subject. Send the conjugated verb to the very end, just like weil/dass/wenn.'
      ],
      table: {
        head: ['Wrong (inverted)', 'Right (verb-final)'],
        rows: [
          ['<span class="de strike">Ich weiß nicht, wo wohnst du.</span>', '<span class="de">Ich weiß nicht, wo du wohnst.</span>'],
          ['<span class="de strike">Kannst du sagen, ob kommt er?</span>', '<span class="de">Kannst du sagen, ob er kommt?</span>'],
          ['<span class="de strike">Ich frage, warum bist du müde?</span>', '<span class="de">Ich frage, warum du müde bist.</span>']
        ]
      },
      note: 'In the Perfekt or with a modal, the conjugated helper is truly last, after the participle/infinitive: <span class="de">…, ob sie den Vorschlag genehmigt hat.</span>',
      hinglish: 'Sabse badi galti yeh hai ki log question word ya <b>ob</b> ke baad verb aur subject ko ulta kar dete hain. Aisa nahi karna \u2014 verb ko sentence ke end mein bhejna hai, bilkul jaise <b>weil</b>, <b>dass</b> aur <b>wenn</b> ke saath karte ho. Perfekt ya modal ho to bhi conjugated verb sabse end mein aayega.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'One question decides the opener every time.' ],
      table: {
        head: ['Does the direct question have a W-word?', 'Answer', 'Use'],
        rows: [
          ['yes (wer, was, wo …)', 'yes', 'keep that <span class="de r-frage">W-word</span>'],
          ['no (a plain yes/no question)', 'no', 'use <span class="de r-frage">ob</span>']
        ]
      },
      note: 'Whichever you choose, the rule never changes: the conjugated <b>verb goes to the end</b>.',
      hinglish: 'Ek sawaal poochho: direct sawaal mein W-word tha ya nahi? Agar tha, to wahi W-word rakho. Agar nahi tha, to <b>ob</b> use karo. Dono cases mein verb sentence ke end mein aata hai.'
    }
  ],

  // ---------- Reading passage (E-Mail an die Sprachschule, clickable) ----------
  reading: {
    title: 'E-Mail an die Sprachschule',
    titleEn: 'Email to the language school',
    tokens: [
      { w: 'Sehr', role: 'r-adjective', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'geehrte', role: 'r-adjective', en: 'dear (formal)', hi: 'प्रिय', pron: 'guh-AIR-tuh', type: 'Adjective', why: 'Sehr geehrte — formal salutation (recycled — A1).', ex: 'Sehr geehrte Frau Weber', exEn: 'Dear Ms Weber' },
      { w: 'Frau', role: 'r-subject', en: 'Ms', hi: 'श्रीमती', pron: 'frow', type: 'Noun · fem.' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article · acc.' },
      { w: 'Frage', role: 'r-object', en: 'question', hi: 'सवाल', pron: 'FRAH-guh', type: 'Noun · fem.' },
      { w: 'zum', role: 'r-preposition', en: 'about the', hi: 'बारे में', pron: 'tsoom', type: 'Preposition · contraction' },
      { w: 'Stadtprogramm', role: 'r-object', en: 'city programme', hi: 'शहर कार्यक्रम', pron: 'SHTAT-pro-gram', type: 'Noun · neut.', why: 'das Stadtprogramm (this chapter).', ex: 'zum Stadtprogramm', exEn: 'about the city programme' },
      { w: '.', plain: true },
      { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modalverb · können' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
      { w: 'sagen', role: 'r-verb', en: 'tell', hi: 'बताना', pron: 'ZAH-gen', type: 'Infinitive' },
      { w: ',', plain: true },
      { w: 'wann', role: 'r-frage', en: 'when', hi: 'कब', pron: 'van', type: 'W-word · indirect', why: 'wann opens the indirect clause, verb at the end (this chapter).', ex: 'wann die Stadtbesichtigung beginnt', exEn: 'when the sightseeing tour begins' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Stadtbesichtigung', role: 'r-subject', en: 'sightseeing tour', hi: 'शहर दर्शन', pron: 'SHTAT-buh-zikh-ti-gung', type: 'Noun · fem.', why: 'die Stadtbesichtigung (this chapter).', ex: 'die Stadtbesichtigung', exEn: 'the sightseeing tour' },
      { w: 'beginnt', role: 'r-verb', en: 'begins', hi: 'शुरू होता है', pron: 'buh-GINT', type: 'Verb · beginnen', why: 'conjugated verb (beginnt) at the end of the wann-clause (this chapter).', ex: '…, wann … beginnt.', exEn: '… when … begins.' },
      { w: '?', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'weiß', role: 'r-verb', en: 'know', hi: 'पता', pron: 'vys', type: 'Verb · wissen' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-frage', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob', why: 'ob opens an indirect yes/no question (this chapter).', ex: 'ob die Monatskarte gültig ist', exEn: 'whether the monthly ticket is valid' },
      { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Monatskarte', role: 'r-subject', en: 'monthly ticket', hi: 'मासिक टिकट', pron: 'MO-nahts-kar-tuh', type: 'Noun · fem.' },
      { w: 'dafür', role: 'r-adverb', en: 'for that', hi: 'उसके लिए', pron: 'da-FÜR', type: 'Adverb', why: 'dafür (this chapter).', ex: 'dafür gültig sein', exEn: 'to be valid for that' },
      { w: 'gültig', role: 'r-adjective', en: 'valid', hi: 'वैध', pron: 'GÜL-tikh', type: 'Adjective · Positiv', why: 'gültig (recycled — A1).', ex: 'gültig sein', exEn: 'to be valid' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein', why: 'conjugated verb (ist) at the end of the ob-clause (this chapter).', ex: '…, ob … gültig ist.', exEn: '… whether … is valid.' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'चाहूँगी', pron: 'VÜR-duh', type: 'Verb · werden (Konj.)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'शौक से', pron: 'gairn', type: 'Adverb' },
      { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानना', pron: 'VI-sen', type: 'Verb · wissen' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-frage', en: 'how', hi: 'कैसे', pron: 'vee', type: 'W-word · indirect', why: 'wie viel = how much (this chapter).', ex: 'wie viel der Kurs kostet', exEn: 'how much the course costs' },
      { w: 'viel', role: 'r-frage', en: 'much', hi: 'कितना', pron: 'feel', type: 'Determiner', why: 'wie viel = how much (this chapter).', ex: 'wie viel', exEn: 'how much' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Kurs', role: 'r-subject', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.', why: 'der Kurs (recycled — A1).', ex: 'der Kurs', exEn: 'the course' },
      { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'क़ीमत है', pron: 'KOS-tet', type: 'Verb · kosten', why: 'conjugated verb (kostet) at the end (recycled — A1).', ex: '…, wie viel … kostet.', exEn: '… how much … costs.' },
      { w: '.', plain: true },
      { w: 'Vielen', role: 'r-akkusativ', en: 'many (masc. acc.)', hi: 'बहुत', pron: 'FEE-len', type: 'Determiner' },
      { w: 'Dank', role: 'r-object', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Noun · masc.', why: 'Vielen Dank (recycled — A1).', ex: 'Vielen Dank!', exEn: 'Thank you very much!' },
      { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition' },
      { w: 'Voraus', role: 'r-object', en: 'advance', hi: 'पहले से', pron: 'FOH-rows', type: 'Noun · masc.', why: 'im Voraus = in advance (recycled — A1).', ex: 'im Voraus', exEn: 'in advance' },
      { w: '.', plain: true }
    ],
    translation: 'Dear Ms Weber, I have a question about the city programme. Can you tell me when the sightseeing tour begins? I also don’t know whether my monthly ticket is valid for that. I would also like to know how much the course costs. Thank you very much in advance. — Watch the two indirect clauses: wann … beginnt (W-word, verb-final) and ob … gültig ist (ob, verb-final) — both send the verb straight to the end.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_019_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Franka, weißt du, ob der Zug heute pünktlich kommt?', en: 'Franka, do you know whether the train is on time today?' },
      { id: 'A2_019_L002', speaker: 'Franka', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich weiß nicht, ob er pünktlich ist, aber die App zeigt zehn Minuten Verspätung.', en: 'I don\'t know if it\'s on time, but the app shows a ten-minute delay.' },
      { id: 'A2_019_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kannst du mir sagen, wo die App das anzeigt?', en: 'Can you tell me where the app shows that?' },
      { id: 'A2_019_L004', speaker: 'Franka', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Klar, ich zeige es dir gleich.', en: 'Sure, I\'ll show you right away.' }
    ],
    transcript: 'Franka, weißt du, ob der Zug heute pünktlich kommt? Ich weiß nicht, ob er pünktlich ist, aber die App zeigt zehn Minuten Verspätung. Kannst du mir sagen, wo die App das anzeigt? Klar, ich zeige es dir gleich.',
    translation: 'Franka, do you know whether the train is on time today? I don\'t know if it\'s on time, but the app shows a ten-minute delay. Can you tell me where the app shows that? Sure, I\'ll show you right away.',
    tokens: [
      { w: 'Franka' },
      { w: ',', plain: true },
      { w: 'weißt' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'der' },
      { w: 'Zug' },
      { w: 'heute' },
      { w: 'pünktlich' },
      { w: 'kommt' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'er' },
      { w: 'pünktlich' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'App' },
      { w: 'zeigt' },
      { w: 'zehn' },
      { w: 'Minuten' },
      { w: 'Verspätung' },
      { w: '.', plain: true },
      { w: 'Kannst' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'sagen' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'die' },
      { w: 'App' },
      { w: 'das' },
      { w: 'anzeigt' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'zeige' },
      { w: 'es' },
      { w: 'dir' },
      { w: 'gleich' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was weiß Franka nicht?', qEn: 'What does Franka not know?', options: ['ob der Zug pünktlich ist', 'wo der Bahnhof ist', 'wie spät es ist', 'wer kommt'], optionsEn: ['whether the train is on time', 'where the station is', 'what time it is', 'who is coming'], answer: 0,
        explain: '"Ich weiß nicht, ob er pünktlich ist."' },
      { q: 'Was zeigt die App?', qEn: 'What does the app show?', options: ['keine Verspätung', 'zehn Minuten Verspätung', 'eine Stunde Verspätung', 'Zugausfall'], optionsEn: ['no delay', 'ten minutes\' delay', 'an hour\'s delay', 'train cancellation'], answer: 1,
        explain: '"… die App zeigt zehn Minuten Verspätung."' }
    ]
  },

  speaking: [
    { task: "Du bist neu in der Stadt und sprichst höflich einen Passanten an.", taskEn: "You're new in town and politely approach a passer-by.", de: "Kannst du mir sagen, wo der Bahnhof ist?", en: "Can you tell me where the station is?" },
    { task: "Ein Mitschüler fragt, ob der Kurs heute läuft. Du bist nicht sicher.", taskEn: "A classmate asks whether the class is on today. You're not sure.", de: "Ich weiß nicht, ob der Kurs heute stattfindet.", en: "I don't know whether the class is on today." },
    { task: "Am Bahnsteig fragst du eine Mitreisende nach der Fahrzeit.", taskEn: "On the platform you ask a fellow traveller about the journey time.", de: "Weißt du, wie lange die Fahrt dauert?", en: "Do you know how long the journey takes?" },
    { task: "Du stehst am Bahnhof und weißt das Gleis nicht. Frag höflich.", taskEn: "You're at the station and don't know the platform. Ask politely.", de: "Können Sie mir sagen, von welchem Gleis der Zug fährt?", en: "Can you tell me which platform the train leaves from?" },
    { task: "Im Herzzentrum weißt du nicht, wann die Untersuchung ist. Frag die Oberärztin.", taskEn: "At the heart centre you don't know when the examination is. Ask the consultant.", de: "Wissen Sie, wann die Untersuchung ist?", en: "Do you know when the examination is?" },
    { task: "Ihr wollt früher gehen. Sag, was du im Sekretariat klären wirst.", taskEn: "You want to leave early. Say what you'll check at the office.", de: "Ich frage, ob die Direktorin dafür ist, dass wir früher gehen.", en: "I'll ask whether the head is in favour of us leaving early." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short polite email or message (six sentences) asking the language school for information. Use at least three indirect questions — two with a W-word (wann, wo, wie, wie lange, wie viel …) and one with ob. Try this chapter’s words: die Direktorin, der Tarif, die Monatskarte, möglich, flexibel.',
    starters: ['Kannst du mir sagen, …?', 'Ich weiß nicht, ob …', 'Weißt du, wann/wo/wie …?', 'Ich möchte wissen, …'],
    placeholder: 'Sehr geehrte Frau Weber, ich habe eine Frage. Können Sie mir sagen, wann der Kurs beginnt? Ich weiß auch nicht, ob …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct indirect question: "Ich weiß nicht, ___."',
      options: ['wo ist der Bahnhof', 'wo der Bahnhof ist', 'ist wo der Bahnhof', 'der Bahnhof wo ist'],
      answer: 1,
      explain: 'No inversion after wo; the verb (ist) goes to the end: wo der Bahnhof ist.'
    },
    gap: {
      sentence: ['Kannst du mir sagen, ', ' der Kurs heute ', '?'],
      gaps: [ { answer: 'ob', accepts: ['ob'] }, { answer: 'beginnt', accepts: ['beginnt', 'stattfindet'] } ],
      explain: 'A yes/no question uses ob; the conjugated verb (beginnt) goes to the end.'
    },
    match: {
      q: 'Match each direct question to its correct indirect form.',
      pairs: [
        { noun: 'Wo wohnst du?', art: 'wo du wohnst' },
        { noun: 'Wann beginnt der Kurs?', art: 'wann der Kurs beginnt' },
        { noun: 'Kommt er?', art: 'ob er kommt' },
        { noun: 'Wie viel kostet das?', art: 'wie viel das kostet' },
        { noun: 'Ist das Restaurant offen?', art: 'ob das Restaurant offen ist' }
      ]
    },
    builder: {
      target: 'Build: "Do you know whether she’s coming?"',
      bank: ['Weißt', 'du', ',', 'ob', 'sie', 'kommt', '?'],
      answer: ['Weißt', 'du', ',', 'ob', 'sie', 'kommt', '?'],
      roles: { 'Weißt': 'r-verb', 'du': 'r-subject', 'ob': 'r-frage', 'sie': 'r-subject', 'kommt': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which word opens an indirect yes/no question?', options: ['wenn', 'ob', 'weil', 'dass'], answer: 1,
      explain: 'ob opens an indirect yes/no question (no W-word in the original).' },
    { q: 'What happens to the verb in an indirect question?', options: ['it stays in position 2', 'it moves to the end', 'it disappears', 'it moves to the front'], answer: 1,
      explain: 'The conjugated verb always moves to the end — no inversion.' },
    { q: 'Which is the correct indirect form of "Wo ist der Bahnhof?"', options: ['wo ist der Bahnhof', 'wo der Bahnhof ist', 'ist wo der Bahnhof', 'der Bahnhof ist wo'], answer: 1,
      explain: 'No inversion: wo der Bahnhof ist.' },
    { q: 'Complete: "Sie fragt, ___ wir heute Unterricht haben." (yes/no question)', options: ['wenn', 'dass', 'ob', 'wie'], answer: 2,
      explain: 'A plain yes/no question uses ob.' },
    { q: 'Complete: "Ich weiß nicht, ___ der Kurs beginnt." (there was a W-word: wann)', options: ['ob', 'dass', 'wann', 'wenn'], answer: 2,
      explain: 'Keep the original W-word (wann) — don’t replace it with ob.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-frage', html: 'Wrap a direct question in a polite frame (<span class="de">Kannst du mir sagen, …? / Ich weiß nicht, …</span>) to make it an <b>indirect question</b>.' },
    { c: 'r-frage', html: 'Keep the original <span class="de r-frage">W-word</span> if there was one; use <span class="de r-frage">ob</span> for a plain yes/no question.' },
    { c: 'r-frage', html: 'The conjugated verb always moves to the <b>end</b> — no inversion, ever: <span class="de">…, wo du wohnst.</span> <span class="de">…, ob er kommt.</span>' }
  ],
  revisionTips: [
    'Was there a question word? Keep it. Was it yes/no? Use ob.',
    'Never invert after the question word — the verb always goes to the end.',
    'In the Perfekt/with a modal, the conjugated helper is truly last: "…, ob sie … genehmigt hat."'
  ]
};

window.CHAPTER = CHAPTER;
