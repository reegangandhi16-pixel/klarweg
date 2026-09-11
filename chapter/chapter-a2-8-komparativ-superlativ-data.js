/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 8
   "Komparativ & Superlativ"  (comparing & ranking: schnell \u2192
   schneller \u2192 am schnellsten). Teaches ONLY Komparativ, Superlativ,
   als, am ...-sten, der/die/das ...-ste. No adjective declension
   beyond the fixed der/die/das ...-ste, no B1 comparison clauses.
   Vocabulary source: uploaded chapter-08 list (~73 items; school /
   work / media / survey theme). Recycles Ch.4-7 (weil/dass, modal
   Pr\u00e4t., Dativ possessives), Ch.3 (Artikel), and A1 adjectives.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "abllehnen" \u2192 ablehnen (to refuse)
   • "weiterlleiten" \u2192 weiterleiten (to forward)
   • "weiter]fl\u00fcstern" \u2192 weiterfl\u00fcstern (to pass on quietly)
   • "entertoiner" \u2192 die Entertainerin (entertainer, f.)
   • "der/die Letzte - last" kept as the nominalised adjective
     (the last one); "das Dings" kept as colloquial "thingy".
   • "Traum-" and "S\u00fcd-" are combining prefixes \u2014 taught as
     Traumjob / S\u00fcddeutschland.
============================================================ */
const CHAPTER = {
  id: 'a2-8-komparativ-superlativ',
  phase: 'A2 · Phase 1',
  number: 8,
  title: 'Komparativ & Superlativ',
  titleEn: 'Comparative & Superlative',
  description: 'Three steps of every adjective: schnell (positive), schneller (comparative), am schnellsten (superlative). Add -er to compare, add am ...-sten to top the list, and use als for "than". Most short adjectives even take an umlaut \u2014 gro\u00df \u2192 gr\u00f6\u00dfer, alt \u2192 \u00e4lter. A handful are irregular and worth memorising: gut \u2192 besser \u2192 am besten, gern \u2192 lieber \u2192 am liebsten. With this you can rank cities, jobs, languages and films like a native.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 9, title: 'Vergleiche mit als / wie', titleEn: 'Comparisons with als / wie' , href: 'chapter-a2-9-vergleiche-als-wie.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Sina and Timo argue over which school suits their son better — bigger, with a shorter walk, or the one with the best gym — and every argument reaches for a comparison: größer als, am schönsten, der beste.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear gr\u00f6\u00dfer als, am besten, am liebsten in real comparisons'
    ],
    scene: 'Die gro\u00dfe Klassenumfrage \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Sina'],
    dialogue: [
      { speaker: 'Sina', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Schule', role: 'r-akkusativ', en: 'school', hi: 'स्कूल', pron: 'SHOO-luh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'besser', role: 'r-adjective', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ', why: 'gut → besser (irregular comparative, this chapter).', ex: 'Diese Schule ist besser.', exEn: 'This school is better.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'unseren', role: 'r-akkusativ', en: 'our (masc. acc.)', hi: 'हमारे', pron: 'UN-ze-ren', type: 'Possessive · acc.' },
        { w: 'Sohn', role: 'r-akkusativ', en: 'son', hi: 'बेटे', pron: 'zohn', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Which school is better for our son?', hi: 'Hamare bete ke liye kaunsi school behtar hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Gesamtschule', role: 'r-subject', en: 'comprehensive school', hi: 'सामान्य स्कूल', pron: 'ge-ZAMT-shoo-luh', type: 'Noun · fem.', why: 'die Gesamtschule (this chapter).', ex: 'Die Gesamtschule ist größer.', exEn: 'The comprehensive school is bigger.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'größer', role: 'r-adjective', en: 'bigger', hi: 'बड़ा', pron: 'GRÖ-ser', type: 'Adjective · Komparativ', why: 'groß → größer (this chapter).', ex: 'Die Schule ist größer.', exEn: 'The school is bigger.' },
        { w: 'als', role: 'r-conjunction', en: 'than', hi: 'से', pron: 'als', type: 'Conjunction · als', why: 'als = than in comparisons (this chapter).', ex: 'größer als die andere', exEn: 'bigger than the other' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Gymnasium', role: 'r-subject', en: 'grammar school', hi: 'व्याकरण स्कूल', pron: 'güm-NAH-zyum', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'The comprehensive school is bigger than the grammar school.', hi: 'Samany school vyakaran school se bada hai.' },
      { speaker: 'Sina', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'welche', role: 'r-subject', en: 'which (fem.)', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'beste', role: 'r-subject', en: 'best', hi: 'सबसे अच्छी', pron: 'BES-tuh', type: 'Adjective · Superlativ', why: 'gut → am besten / die beste (irregular superlative, this chapter).', ex: 'Das ist die beste Schule.', exEn: 'That is the best school.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Sport', role: 'r-akkusativ', en: 'sport', hi: 'खेल', pron: 'shport', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'And which is the best for sport?', hi: 'Aur khel ke liye sabse achhi kaunsi hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Gymnasium', role: 'r-subject', en: 'grammar school', hi: 'व्याकरण स्कूल', pron: 'güm-NAH-zyum', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'सबसे बड़ा', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'größte', role: 'r-akkusativ', en: 'biggest', hi: 'सबसे बड़ा', pron: 'GRÖS-tuh', type: 'Adjective · Superlativ', why: 'groß → am größten / die größte (this chapter).', ex: 'die größte Turnhalle', exEn: 'the biggest gym' },
        { w: 'Turnhalle', role: 'r-akkusativ', en: 'gym', hi: 'जिमखाना', pron: 'TOORN-ha-luh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The grammar school has the biggest gym.', hi: 'Vyakaran school mein sabse bada gym hai.' },
      { speaker: 'Sina', tokens: [
        { w: 'Interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Schulweg', role: 'r-subject', en: 'way to school', hi: 'स्कूल का रास्ता', pron: 'SHOOL-vayk', type: 'Noun · masc.', why: 'der Schulweg (this chapter).', ex: 'Der Schulweg ist kurz.', exEn: 'The way to school is short.' },
        { w: 'kürzer', role: 'r-subject', en: 'shorter', hi: 'ज़्यादा छोटा', pron: 'KÜR-tser', type: 'Adjective · Komparativ', why: 'kurz → kürzer (this chapter).', ex: 'Der Weg ist kürzer.', exEn: 'The way is shorter.' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'की ओर', pron: 'tsoor', type: 'Preposition' },
        { w: 'Gesamtschule', role: 'r-dativ', en: 'comprehensive school (dat.)', hi: 'सामान्य स्कूल', pron: 'ge-ZAMT-shoo-luh', type: 'Noun · fem. dat.' },
        { w: '?', plain: true }
      ], en: 'Interesting! Is the way to school shorter to the comprehensive school?', hi: 'Dilchasp! Kya samany school ka rasta chhota hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'viel', role: 'r-adverb', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'kürzer', role: 'r-akkusativ', en: 'shorter', hi: 'ज़्यादा छोटा', pron: 'KÜR-tser', type: 'Adjective · Komparativ' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'wichtigste', role: 'r-subject', en: 'most important', hi: 'सबसे ज़रूरी', pron: 'VIKH-tig-stuh', type: 'Adjective · Superlativ', why: 'wichtig → am wichtigsten / der wichtigste (this chapter).', ex: 'der wichtigste Punkt', exEn: 'the most important point' },
        { w: 'Punkt', role: 'r-subject', en: 'point', hi: 'बिंदु', pron: 'punkt', type: 'Noun · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मेरे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Yes, much shorter. That is the most important point for me.', hi: 'Haan, kaafi chhota. Yeh mere liye sabse zaroori baat hai.' },
      { speaker: 'Sina', tokens: [
        { w: 'Für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मेरे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Also', role: 'r-adverb', en: 'so', hi: 'तो', pron: 'AL-zo', type: 'Adverb' },
        { w: 'nehmen', role: 'r-verb', en: 'let us take', hi: 'लेते हैं', pron: 'NAY-men', type: 'Verb · nehmen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Gesamtschule', role: 'r-akkusativ', en: 'comprehensive school', hi: 'सामान्य स्कूल', pron: 'ge-ZAMT-shoo-luh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'For me too! So let us take the comprehensive school.', hi: 'Mere liye bhi! Toh hum samany school lete hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'beste', role: 'r-subject', en: 'best', hi: 'सबसे अच्छी', pron: 'BES-tuh', type: 'Adjective · Superlativ' },
        { w: 'Entscheidung', role: 'r-subject', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.', why: 'die Entscheidung (recycled).' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'ihn', role: 'r-akkusativ', en: 'him', hi: 'उसके', pron: 'een', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Perfect! That is the best decision for him.', hi: 'Badhiya! Yeh uske liye sabse achha faisla hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every adjective has three steps. The <strong>Positiv</strong> is the plain form (<span class="de">schnell</span>). The <strong>Komparativ</strong> adds <strong>-er</strong> and pairs with <span class="de r-vergleich">als</span> ("than"): <span class="de">schnell<span class="r-adjective">er</span> als der Bus</span>. The <strong>Superlativ</strong> tops the list \u2014 either <span class="de r-superlativ">am schnellsten</span> (after a verb) or <span class="de">der/die/das schnellste</span> (before a noun). Most short adjectives also take an <strong>umlaut</strong>: <span class="de">gro\u00df \u2192 gr\u00f6\u00dfer \u2192 am gr\u00f6\u00dften</span>, <span class="de">alt \u2192 \u00e4lter</span>, <span class="de">jung \u2192 j\u00fcnger</span>. Four irregulars carry the load in real speech and are worth memorising cold: <span class="de">gut \u2192 besser \u2192 am besten</span>, <span class="de">viel \u2192 mehr \u2192 am meisten</span>, <span class="de">gern \u2192 lieber \u2192 am liebsten</span>, <span class="de">hoch \u2192 h\u00f6her \u2192 am h\u00f6chsten</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is the KOMPARATIV and SUPERLATIV (comparing and ranking). No adjective declension beyond fixed der/die/das + -ste. ' +
    'The learner wrote comparisons below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Komparativ = adjective + -er, and "than" = als: "Berlin ist gr\u00f6\u00dfer als M\u00fcnchen." Never use "wie" for than at A2 standard.\n' +
    '- Superlativ = am + adjective + -sten (after a verb: "Er l\u00e4uft am schnellsten") OR der/die/das + adjective + -ste before a noun ("der schnellste Zug").\n' +
    '- Umlaut on many one-syllable adjectives: gro\u00df\u2192gr\u00f6\u00dfer\u2192am gr\u00f6\u00dften, alt\u2192\u00e4lter, jung\u2192j\u00fcnger, lang\u2192l\u00e4nger, kurz\u2192k\u00fcrzer, warm\u2192w\u00e4rmer, kalt\u2192k\u00e4lter, stark\u2192st\u00e4rker. But NOT on e.g. sch\u00f6n (sch\u00f6ner) if the learner omits it, gently note only real umlaut errors.\n' +
    '- Adjectives ending -d/-t/-s/-\u00df/-z add -esten in the superlative: am \u00e4ltesten, am k‚\u00fcrzesten? (kurz\u2192am k\u00fcrzesten), am hei\u00dfesten.\n' +
    '- Irregulars (must be exact): gut\u2192besser\u2192am besten; viel\u2192mehr\u2192am meisten; gern\u2192lieber\u2192am liebsten; hoch\u2192h\u00f6her\u2192am h\u00f6chsten; nah\u2192n\u00e4her\u2192am n\u00e4chsten.\n' +
    '- Do NOT double-compare ("mehr besser", "am besten-sten"). If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Comparison check:</b> one sentence on the -er/als and am ...-sten forms.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You compare and rank like a pro \u2014 schneller als, am besten, all clean. Next: nail the als-vs-wie split in <span class="de">Vergleiche mit als / wie</span>.',
    mid: 'Good. Re-read the irregulars card once (gut/viel/gern/hoch), then continue.',
    low: 'Worth another pass \u2014 three steps: +er for the comparative (with als), am ...-sten for the superlative. Memorise the four irregulars. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Berlin', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'gr\u00f6\u00dfer', role: 'r-adjective' }, { w: 'als', role: 'r-vergleich' },
    { w: 'M\u00fcnchen', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the three steps: Positiv, Komparativ, Superlativ.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A class survey \u2014 cities, jobs, languages and films compared.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the survey/school/media words: der Vergleich, die Umfrage, n\u00fctzlich, schwierig.' },
    { id: 'grammar',    label: 'Vergleich',  tag: 'core',
      objective: 'Master -er + als, am ...-sten, umlaut changes and the four irregulars.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a blog comparing two schools \u2014 comparison after comparison.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow which city, film and job each person ranks highest.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare two cities, jobs, languages and films out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short comparison text with als and am ...-sten.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the endings, umlauts and irregulars with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s survey, school and media words \u2014 der Vergleich, die Umfrage, die Fremdsprache, n\u00fctzlich, schwierig \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Komparativ/Superlativ drills, umlaut practice, the four irregulars, and a compare-two-things task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The three steps, -er/als, am ...-sten vs der/die/das ...-ste, umlaut list, irregulars, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'schneller als \u2026', text: 'Compare two things with -er + als' },
    { de: 'am schnellsten', text: 'Top the list with am ...-sten' },
    { de: 'der/die/das beste', text: 'Rank before a noun with der ...-ste' },
    { de: 'gro\u00df \u2192 gr\u00f6\u00dfer', text: 'Add the umlaut on short adjectives' },
    { de: 'gut \u2192 besser \u2192 am besten', text: 'Use the four key irregulars' }
  ],

  // ---------- Vocabulary (73 items) ----------
  vocab: [
    // ===== Comparison core =====
    { de: 'Vergleich', art: 'der', gender: 'm', plural: 'Vergleiche', pos: 'noun', en: 'comparison', hi: 'तुलना', ex: 'Der Vergleich zwischen Berlin und M\u00fcnchen ist spannend.', exEn: 'The comparison between Berlin and Munich is exciting.' },
    { de: 'als', pos: 'conjunction', en: 'than (after a comparative)', hi: 'से', ex: 'Berlin ist gr\u00f6\u00dfer als M\u00fcnchen.', exEn: 'Berlin is bigger than Munich.' },
    { de: 'Superlativ', art: 'der', gender: 'm', plural: 'Superlative', pos: 'noun', en: 'superlative', hi: 'सर्वोत्तम रूप', ex: 'Der Superlativ ist die dritte Stufe: am sch\u00f6nsten.', exEn: 'The superlative is the third step: am sch\u00f6nsten.' },
    { de: 'betonen', pos: 'verb', en: 'to emphasize', hi: 'ज़ोर देना', ex: 'Man kann den Superlativ betonen: am allerbesten!', exEn: 'You can emphasize the superlative: the very best!', conj: { praesens: 'betont', praeteritum: 'betonte', perfekt: 'hat betont' } },
    { de: 'Hauptsache', art: 'die', gender: 'f', plural: 'Hauptsachen', pos: 'noun', en: 'main point, main thing', hi: 'मुख्य बात', ex: 'Die Hauptsache sind die drei Stufen.', exEn: 'The main point is the three steps.' },
    { de: 'Detail', art: 'das', gender: 'n', plural: 'Details', pos: 'noun', en: 'detail', hi: 'ब्योरा', ex: 'Ein kleines Detail: viele Adjektive bekommen einen Umlaut.', exEn: 'A small detail: many adjectives take an umlaut.' },
    { de: 'kritisch', pos: 'adjective', en: 'critical', hi: 'आलोचनात्मक', ex: 'Anna ist kritischer als Max.', exEn: 'Anna is more critical than Max.' },
    { de: 'logisch', pos: 'adjective', en: 'logical', hi: 'तार्किक', ex: 'Die Grammatik ist logischer als in England.', exEn: 'The grammar is more logical than in England.' },
    { de: 'n\u00fctzlich', pos: 'adjective', en: 'useful', hi: 'उपयोगी', ex: 'Der Vergleich ist super n\u00fctzlich.', exEn: 'The comparison is really useful.' },
    { de: 'schwierig', pos: 'adjective', en: 'difficult', hi: 'कठिन', ex: 'Deutsch ist schwieriger als Englisch.', exEn: 'German is more difficult than English.' },
    { de: 'streng', pos: 'adjective', en: 'strict', hi: 'सख़्त', ex: 'Diese Schule ist strenger als die andere.', exEn: 'This school is stricter than the other.' },
    { de: 'w\u00fctend', pos: 'adjective', en: 'angry', hi: 'गुस्सा', ex: 'Er ist w\u00fctender als gestern.', exEn: 'He is angrier than yesterday.' },
    { de: 'privat', pos: 'adjective', en: 'private', hi: 'निजी', ex: 'Eine private Schule ist oft teurer.', exEn: 'A private school is often more expensive.' },
    { de: 'super', pos: 'adverb', en: 'really, super', hi: 'बहुत', ex: 'Das Talent ist super gro\u00df.', exEn: 'The talent is really big.' },
    { de: 'Traum-', pos: 'prefix', en: 'dream- (as in Traumjob)', hi: 'सपनों का', ex: 'Mein Traumjob ist ein Start-Up.', exEn: 'My dream job is a start-up.' },
    { de: 'S\u00fcd-', pos: 'prefix', en: 'south- (as in S\u00fcddeutschland)', hi: 'दक्षिण', ex: 'S\u00fcddeutschland ist w\u00e4rmer als der Norden.', exEn: 'Southern Germany is warmer than the north.' },
    { de: 'worum', pos: 'adverb', en: 'about what (worum geht es?)', hi: 'किस बारे में', ex: 'Worum geht es in der Umfrage?', exEn: 'What is the survey about?' },
    { de: 'wor\u00fcber', pos: 'adverb', en: 'about what', hi: 'किस विषय पर', ex: 'Wor\u00fcber schreibst du den Blogbeitrag?', exEn: 'What are you writing the blog post about?' },
    { de: 'dass', pos: 'conjunction', en: 'that (subordinator)', hi: 'कि', ex: 'Ich finde, dass Pizza am besten schmeckt.', exEn: 'I think that pizza tastes the best.' },
    { de: 'Letzte', art: 'der/die', gender: 'mf', plural: 'Letzten', pos: 'noun', en: 'the last one', hi: 'आख़िरी', ex: 'Wer als Letzte kommt, r\u00e4umt auf.', exEn: 'Whoever comes last tidies up.' },
    // ===== School & study =====
    { de: 'Abschluss', art: 'der', gender: 'm', plural: 'Abschl\u00fcsse', pos: 'noun', en: 'degree, qualification', hi: 'उपाधि', ex: 'Ein guter Abschluss ist wichtiger als Geld.', exEn: 'A good degree is more important than money.' },
    { de: 'Hauptschulabschluss', art: 'der', gender: 'm', plural: 'Hauptschulabschl\u00fcsse', pos: 'noun', en: 'basic secondary school certificate', hi: 'बुनियादी माध्यमिक उपाधि', ex: 'Nach dem Hauptschulabschluss begann seine Ausbildung.', exEn: 'After the basic certificate his training began.' },
    { de: 'Berufsschule', art: 'die', gender: 'f', plural: 'Berufsschulen', pos: 'noun', en: 'vocational school', hi: 'व्यावसायिक स्कूल', ex: 'Die Berufsschule ist praktischer als die Uni.', exEn: 'The vocational school is more practical than university.' },
    { de: 'Gesamtschule', art: 'die', gender: 'f', plural: 'Gesamtschulen', pos: 'noun', en: 'comprehensive school', hi: 'समग्र स्कूल', ex: 'Die Gesamtschule ist gr\u00f6\u00dfer als meine alte Schule.', exEn: 'The comprehensive school is bigger than my old school.' },
    { de: 'Schulsystem', art: 'das', gender: 'n', plural: 'Schulsysteme', pos: 'noun', en: 'school system', hi: 'शिक्षा प्रणाली', ex: 'Das Schulsystem in Deutschland ist anders als in Indien.', exEn: 'The school system in Germany is different from India.' },
    { de: 'Schulweg', art: 'der', gender: 'm', plural: 'Schulwege', pos: 'noun', en: 'way to school', hi: 'स्कूल का रास्ता', ex: 'Mein Schulweg war l\u00e4nger als deiner.', exEn: 'My way to school was longer than yours.' },
    { de: 'Sch\u00fcler', art: 'der', gender: 'm', plural: 'Sch\u00fcler', pos: 'noun', en: 'pupil (m.)', hi: 'छात्र', ex: 'Der beste Sch\u00fcler sitzt vorne.', exEn: 'The best pupil sits at the front.' },
    { de: 'Abitur', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'A-levels', hi: 'बारहवीं की परीक्षा', ex: 'Das Abitur ist schwieriger als der Realschulabschluss.', exEn: 'The Abitur is harder than the secondary certificate.' },
    { de: 'AG', art: 'die', gender: 'f', plural: 'AGs', pos: 'noun', en: 'club, working group (at school)', hi: 'क्लब', ex: 'In der Theater-AG habe ich das meiste Talent gezeigt.', exEn: 'In the drama club I showed the most talent.' },
    { de: 'Azubi', art: 'der', gender: 'm', plural: 'Azubis', pos: 'noun', en: 'trainee, apprentice', hi: 'प्रशिक्षु', ex: 'Als Azubi verdient man weniger als ein Chef.', exEn: 'As a trainee you earn less than a boss.' },
    { de: 'Physik', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'physics', hi: 'भौतिकी', ex: 'Physik finde ich schwieriger als Chemie.', exEn: 'I find physics harder than chemistry.' },
    { de: 'Geschichte', art: 'die', gender: 'f', plural: 'Geschichten', pos: 'noun', en: 'history; story', hi: 'इतिहास; कहानी', ex: 'Geschichte ist interessanter als Physik.', exEn: 'History is more interesting than physics.' },
    { de: 'Talent', art: 'das', gender: 'n', plural: 'Talente', pos: 'noun', en: 'talent', hi: 'प्रतिभा', ex: 'Sie hat das gr\u00f6\u00dfte Talent in der Klasse.', exEn: 'She has the biggest talent in the class.' },
    { de: 'Umfrage', art: 'die', gender: 'f', plural: 'Umfragen', pos: 'noun', en: 'survey, poll', hi: 'सर्वेक्षण', ex: 'Die Umfrage war die beste Idee des Tages.', exEn: 'The survey was the best idea of the day.' },
    // ===== Work & careers =====
    { de: 'Arbeitswelt', art: 'die', gender: 'f', plural: 'Arbeitswelten', pos: 'noun', en: 'working world, work environment', hi: 'कार्य जगत', ex: 'Die Arbeitswelt im Start-Up ist moderner.', exEn: 'The working world in a start-up is more modern.' },
    { de: 'Start-Up', art: 'das', gender: 'n', plural: 'Start-Ups', pos: 'noun', en: 'start-up', hi: 'स्टार्ट-अप', ex: 'Ein Start-Up ist kleiner als eine gro\u00dfe Firma.', exEn: 'A start-up is smaller than a big company.' },
    { de: 'Reiseb\u00fcro', art: 'das', gender: 'n', plural: 'Reiseb\u00fcros', pos: 'noun', en: 'travel agency', hi: 'ट्रैवल एजेंसी', ex: 'Im Reiseb\u00fcro findet man die billigsten Reisen.', exEn: 'At the travel agency you find the cheapest trips.' },
    { de: 'G\u00e4rtner', art: 'der', gender: 'm', plural: 'G\u00e4rtner', pos: 'noun', en: 'gardener', hi: 'माली', ex: 'Der G\u00e4rtner arbeitet lieber drau\u00dfen als drinnen.', exEn: 'The gardener prefers working outside to inside.' },
    { de: 'Krankenschwester', art: 'die', gender: 'f', plural: 'Krankenschwestern', pos: 'noun', en: 'nurse (f.)', hi: 'नर्स', ex: 'Eine Krankenschwester hat den wichtigsten Job.', exEn: 'A nurse has the most important job.' },
    { de: 'Hotelkauffrau', art: 'die', gender: 'f', plural: 'Hotelkauffrauen', pos: 'noun', en: 'hotel management assistant (f.)', hi: 'होटल प्रबंधन सहायक', ex: 'Als Hotelkauffrau reist sie am meisten.', exEn: 'As a hotel assistant she travels the most.' },
    { de: 'Entertainerin', art: 'die', gender: 'f', plural: 'Entertainerinnen', pos: 'noun', en: 'entertainer (f.)', hi: 'मनोरंजनकर्ता', ex: 'Die Entertainerin hat den lautesten Humor.', exEn: 'The entertainer has the loudest humour.' },
    { de: 'Enkelin', art: 'die', gender: 'f', plural: 'Enkelinnen', pos: 'noun', en: 'granddaughter', hi: 'पोती', ex: 'Ihre Enkelin ist j\u00fcnger als mein Sohn.', exEn: 'Her granddaughter is younger than my son.' },
    { de: 'Humor', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'humour', hi: 'हास्य', ex: 'Sein Humor ist besser als seine Noten.', exEn: 'His humour is better than his grades.' },
    { de: 'Schicksal', art: 'das', gender: 'n', plural: 'Schicksale', pos: 'noun', en: 'fate, destiny', hi: 'भाग्य', ex: 'Der Film erz\u00e4hlt ein trauriges Schicksal.', exEn: 'The film tells a sad fate.' },
    { de: 'Rollstuhl', art: 'der', gender: 'm', plural: 'Rollst\u00fchle', pos: 'noun', en: 'wheelchair', hi: 'व्हीलचेयर', ex: 'Der neue Rollstuhl ist leichter als der alte.', exEn: 'The new wheelchair is lighter than the old one.' },
    // ===== Media & tech =====
    { de: 'Webseite', art: 'die', gender: 'f', plural: 'Webseiten', pos: 'noun', en: 'website', hi: 'वेबसाइट', ex: 'Diese Webseite ist schneller als die alte.', exEn: 'This website is faster than the old one.' },
    { de: 'Blogbeitrag', art: 'der', gender: 'm', plural: 'Blogbeitr\u00e4ge', pos: 'noun', en: 'blog post', hi: 'ब्लॉग पोस्ट', ex: 'Mein Blogbeitrag ist l\u00e4nger als deiner.', exEn: 'My blog post is longer than yours.' },
    { de: 'Bildschirm', art: 'der', gender: 'm', plural: 'Bildschirme', pos: 'noun', en: 'screen', hi: 'स्क्रीन', ex: 'Der Bildschirm ist gr\u00f6\u00dfer als mein altes Handy.', exEn: 'The screen is bigger than my old phone.' },
    { de: 'Smartphone', art: 'das', gender: 'n', plural: 'Smartphones', pos: 'noun', en: 'smartphone', hi: 'स्मार्टफ़ोन', ex: 'Mein Smartphone ist teurer als sein Tablet.', exEn: 'My smartphone is more expensive than his tablet.' },
    { de: 'E-Book-Reader', art: 'der', gender: 'm', plural: 'E-Book-Reader', pos: 'noun', en: 'e-book reader', hi: 'ई-बुक रीडर', ex: 'Der E-Book-Reader ist leichter als ein Buch.', exEn: 'The e-book reader is lighter than a book.' },
    { de: 'Maus', art: 'die', gender: 'f', plural: 'M\u00e4use', pos: 'noun', en: 'mouse (computer/animal)', hi: 'माउस', ex: 'Diese Maus funktioniert besser als die alte.', exEn: 'This mouse works better than the old one.' },
    { de: 'Radio', art: 'das', gender: 'n', plural: 'Radios', pos: 'noun', en: 'radio', hi: 'रेडियो', ex: 'Im Radio l\u00e4uft die beste Filmmusik.', exEn: 'The best film music plays on the radio.' },
    { de: 'Filmmusik', art: 'die', gender: 'f', plural: 'Filmmusiken', pos: 'noun', en: 'film music, soundtrack', hi: 'फ़िल्म संगीत', ex: 'Die Filmmusik ist sch\u00f6ner als der Film.', exEn: 'The film music is nicer than the film.' },
    { de: 'Kom\u00f6die', art: 'die', gender: 'f', plural: 'Kom\u00f6dien', pos: 'noun', en: 'comedy', hi: 'कॉमेडी', ex: 'Eine Kom\u00f6die ist lustiger als ein Liebesfilm.', exEn: 'A comedy is funnier than a romantic film.' },
    { de: 'Liebesfilm', art: 'der', gender: 'm', plural: 'Liebesfilme', pos: 'noun', en: 'romantic film', hi: 'प्रेम फ़िल्म', ex: 'Der Liebesfilm war l\u00e4nger als die Kom\u00f6die.', exEn: 'The romantic film was longer than the comedy.' },
    { de: 'Autobiografie', art: 'die', gender: 'f', plural: 'Autobiografien', pos: 'noun', en: 'autobiography', hi: 'आत्मकथा', ex: 'Ihre Autobiografie ist interessanter als der Roman.', exEn: 'Her autobiography is more interesting than the novel.' },
    { de: 'Dings', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'thingy, whatsit (colloquial)', hi: 'वो चीज़', ex: 'Wie hei\u00dft das Dings da? Der E-Book-Reader?', exEn: 'What\u2019s that thingy called? The e-book reader?' },
    // ===== Concepts / people =====
    { de: 'Fremdsprache', art: 'die', gender: 'f', plural: 'Fremdsprachen', pos: 'noun', en: 'foreign language', hi: 'विदेशी भाषा', ex: 'Deutsch ist meine sch\u00f6nste Fremdsprache.', exEn: 'German is my most beautiful foreign language.' },
    { de: 'Freundschaft', art: 'die', gender: 'f', plural: 'Freundschaften', pos: 'noun', en: 'friendship', hi: 'दोस्ती', ex: 'Eine alte Freundschaft ist st\u00e4rker als eine neue.', exEn: 'An old friendship is stronger than a new one.' },
    { de: 'Gemeinsamkeit', art: 'die', gender: 'f', plural: 'Gemeinsamkeiten', pos: 'noun', en: 'similarity, common ground', hi: 'समानता', ex: 'Wir haben mehr Gemeinsamkeiten als Unterschiede.', exEn: 'We have more similarities than differences.' },
    { de: 'Erinnerung', art: 'die', gender: 'f', plural: 'Erinnerungen', pos: 'noun', en: 'memory', hi: 'स्मृति', ex: 'Meine sch\u00f6nste Erinnerung ist die Klassenfahrt.', exEn: 'My nicest memory is the class trip.' },
    { de: 'England', pos: 'noun', en: 'England', hi: 'इंग्लैंड', ex: 'In England ist das Wetter k\u00fchler als in Indien.', exEn: 'In England the weather is cooler than in India.' },
    // ===== Verbs =====
    { de: 'vergleichen', pos: 'verb', en: 'to compare', hi: 'तुलना करना', ex: 'Wir vergleichen zwei St\u00e4dte.', exEn: 'We compare two cities.', conj: { praesens: 'vergleicht', praeteritum: 'verglich', perfekt: 'hat verglichen' } },
    { de: 'anklicken', pos: 'verb', en: 'to click (on) (separable)', hi: 'क्लिक करना', ex: 'Klick die beste Antwort an!', exEn: 'Click the best answer!', conj: { praesens: 'klickt an', praeteritum: 'klickte an', perfekt: 'hat angeklickt' } },
    { de: 'ablehnen', pos: 'verb', en: 'to refuse, to reject (separable)', hi: 'अस्वीकार करना', ex: 'Er lehnt den schlechteren Vorschlag ab.', exEn: 'He rejects the worse suggestion.', conj: { praesens: 'lehnt ab', praeteritum: 'lehnte ab', perfekt: 'hat abgelehnt' } },
    { de: 'kommentieren', pos: 'verb', en: 'to comment (on)', hi: 'टिप्पणी करना', ex: 'Viele Leute kommentieren meinen Blogbeitrag.', exEn: 'Many people comment on my blog post.', conj: { praesens: 'kommentiert', praeteritum: 'kommentierte', perfekt: 'hat kommentiert' } },
    { de: 'kopieren', pos: 'verb', en: 'to copy', hi: 'नक़ल करना', ex: 'Kopier den Text und f\u00fcg ihn ein.', exEn: 'Copy the text and paste it.', conj: { praesens: 'kopiert', praeteritum: 'kopierte', perfekt: 'hat kopiert' } },
    { de: 'tippen', pos: 'verb', en: 'to type', hi: 'टाइप करना', ex: 'Sie tippt schneller als ich.', exEn: 'She types faster than me.', conj: { praesens: 'tippt', praeteritum: 'tippte', perfekt: 'hat getippt' } },
    { de: 'chatten', pos: 'verb', en: 'to chat (online)', hi: 'चैट करना', ex: 'Wir chatten lieber, als zu telefonieren.', exEn: 'We\u2019d rather chat than call.', conj: { praesens: 'chattet', praeteritum: 'chattete', perfekt: 'hat gechattet' } },
    { de: 'mitteilen', pos: 'verb', en: 'to share, to communicate (separable)', hi: 'बताना, साझा करना', ex: 'Teil mir dein Ergebnis mit!', exEn: 'Share your result with me!', conj: { praesens: 'teilt mit', praeteritum: 'teilte mit', perfekt: 'hat mitgeteilt' } },
    { de: 'weiterleiten', pos: 'verb', en: 'to forward (separable)', hi: 'आगे भेजना', ex: 'Leite die Umfrage an deine Freunde weiter.', exEn: 'Forward the survey to your friends.', conj: { praesens: 'leitet weiter', praeteritum: 'leitete weiter', perfekt: 'hat weitergeleitet' } },
    { de: 'weiterfl\u00fcstern', pos: 'verb', en: 'to pass on quietly, to whisper on (separable)', hi: 'चुपके से आगे बताना', ex: 'Fl\u00fcster die Antwort nicht weiter!', exEn: 'Don\u2019t whisper the answer on!', conj: { praesens: 'fl\u00fcstert weiter', praeteritum: 'fl\u00fcsterte weiter', perfekt: 'hat weitergefl\u00fcstert' } },
    { de: 'entwickeln', pos: 'verb', en: 'to develop', hi: 'विकसित करना', ex: 'Das Start-Up entwickelt die beste App.', exEn: 'The start-up develops the best app.', conj: { praesens: 'entwickelt', praeteritum: 'entwickelte', perfekt: 'hat entwickelt' } },
    { de: 'ausschlafen', pos: 'verb', en: 'to sleep in, to have a lie-in (separable)', hi: 'देर तक सोना', ex: 'Am Wochenende schlafe ich am liebsten aus.', exEn: 'On the weekend I most like to sleep in.', conj: { praesens: 'schl\u00e4ft aus', praeteritum: 'schlief aus', perfekt: 'hat ausgeschlafen' } },
    { de: '\u00fcben', pos: 'verb', en: 'to practise', hi: 'अभ्यास करना', ex: 'Wer mehr \u00fcbt, spricht besser.', exEn: 'Whoever practises more speaks better.', conj: { praesens: '\u00fcbt', praeteritum: '\u00fcbte', perfekt: 'hat ge\u00fcbt' } },
    { de: 'spielen', pos: 'verb', en: 'here: to be set in (a film)', hi: 'यहाँ: घटित होना', ex: 'Der Film spielt in S\u00fcddeutschland.', exEn: 'The film is set in southern Germany.', conj: { praesens: 'spielt', praeteritum: 'spielte', perfekt: 'hat gespielt' } }
  ],

  // ---------- Komparativ & Superlativ (rule cards) ----------
  grammar: [
    {
      title: 'Three steps: Positiv \u2192 Komparativ \u2192 Superlativ',
      goldenRule: 'Compare with <b>-er</b>, top it with <b>am \u2026-sten</b>.',
      formula: [
        'schnell  \u2192  schnell<b>er</b>  \u2192  am schnell<b>sten</b>',
        'billig   \u2192  billig<b>er</b>   \u2192  am billig<b>sten</b>'
      ],
      memoryTrick: 'English "-er / the -est" ka seedha jodi hai: German <b>-er</b> aur <b>am \u2026-sten</b>. Aur <b>-d/-t/-s/-\u00df/-z</b> ke baad ek extra <b>e</b> aa jaata hai (am \u00e4lt<b>e</b>sten) \u2014 sirf bolne mein aasaani ke liye.',
      body: [
        'Every adjective climbs the same ladder. Add <strong>-er</strong> to compare, and <strong>am ...-sten</strong> to reach the top.'
      ],
      table: {
        head: ['Positiv', 'Komparativ (+ -er)', 'Superlativ (am ...-sten)'],
        rows: [
          ['<span class="de">schnell</span>', '<span class="de r-adjective">schneller</span>', '<span class="de r-superlativ">am schnellsten</span>'],
          ['<span class="de">billig</span>', '<span class="de r-adjective">billiger</span>', '<span class="de r-superlativ">am billigsten</span>'],
          ['<span class="de">sch\u00f6n</span>', '<span class="de r-adjective">sch\u00f6ner</span>', '<span class="de r-superlativ">am sch\u00f6nsten</span>'],
          ['<span class="de">interessant</span>', '<span class="de r-adjective">interessanter</span>', '<span class="de r-superlativ">am interessantesten</span>']
        ]
      },
      note: 'After -d, -t, -s, -\u00df, -z the superlative adds <b>-esten</b> for easy speech: am interessant<b>esten</b>, am \u00e4lt<b>esten</b>, am hei\u00df<b>esten</b>.',
      hinglish: 'Har adjective teen step par chalta hai: Positiv (<b>schnell</b>), Komparativ mein <b>-er</b> (<b>schneller</b>), aur Superlativ mein <b>am \u2026-sten</b> (<b>am schnellsten</b>). Agar adjective <b>-d, -t, -s, -\u00df</b> ya <b>-z</b> par khatam hota hai, to Superlativ mein ek extra <b>e</b> aa jaata hai, jaise <b>am \u00e4ltesten</b> \u2014 sirf bolne ki aasaani ke liye.'
    },
    {
      title: '\u201cthan\u201d = als',
      goldenRule: 'After a Komparativ, "than" is always <b>als</b> \u2014 never <i>wie</i>.',
      memoryTrick: 'Komparativ dikha (<b>-er</b> wala)? To <b>als</b> hi aayega. Yeh sabse aam galti hai, aur sabse aasaan bhi.',
      body: [
        'To compare two things, use the Komparativ with <span class="de r-vergleich">als</span>. The word <em>als</em> here always means <strong>than</strong>.'
      ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de">Berlin ist gr\u00f6\u00dfer <span class="r-vergleich">als</span> M\u00fcnchen.</span>', 'Berlin is bigger than Munich.'],
          ['<span class="de">Deutsch ist schwieriger <span class="r-vergleich">als</span> Englisch.</span>', 'German is more difficult than English.'],
          ['<span class="de">Der Zug ist schneller <span class="r-vergleich">als</span> der Bus.</span>', 'The train is faster than the bus.'],
          ['<span class="de">Ich chatte lieber <span class="r-vergleich">als</span> zu telefonieren.</span>', 'I\u2019d rather chat than call.']
        ]
      },
      note: 'At A2 standard, "than" after a comparative is always <b>als</b> \u2014 never "wie". (You\u2019ll meet <b>so \u2026 wie</b> for "as \u2026 as" in the next chapter.)',
      hinglish: 'Do cheezein compare karne ke liye Komparativ ke saath <b>als</b> lagta hai. Yahan <b>als</b> ka matlab \u201cse\u201d ya \u201cthan\u201d hai. Standard German mein Komparativ ke baad <b>als</b> hi aata hai, <b>wie</b> nahi \u2014 aur yeh sabse common galti hai.'
    },
    {
      title: 'Superlativ: am ...-sten vs. der/die/das ...-ste',
      goldenRule: 'Noun right after it? <b>der/die/das \u2026-ste</b>. No noun? <b>am \u2026-sten</b>.',
      formula: [
        'Der Zug f\u00e4hrt <b>am schnellsten</b>.   \u2190 no noun after',
        'der <b>schnellste</b> Zug              \u2190 noun after'
      ],
      memoryTrick: 'Ek sawaal: aage <b>noun</b> hai ya nahi? Noun hai \u2192 der/die/das \u2026-ste. Noun nahi \u2192 am \u2026-sten.',
      recap: [
        'Before a noun: <b>der/die/das \u2026-ste</b>, matching gender.',
        'After a verb or alone: <b>am \u2026-sten</b>.',
        'One question decides it \u2014 is a noun coming?'
      ],
      body: [
        'The superlative has two shapes. After a verb (or standing alone) use <span class="de r-superlativ">am ...-sten</span>. Directly before a noun use <span class="de">der/die/das ...-ste</span>.'
      ],
      table: {
        head: ['Shape', 'Example', 'Use'],
        rows: [
          ['<span class="de r-superlativ">am ...-sten</span>', '<span class="de">Der Zug f\u00e4hrt am schnellsten.</span>', 'after a verb'],
          ['<span class="de">der ...-ste</span>', '<span class="de">der schnellste Zug</span>', 'before a masc. noun'],
          ['<span class="de">die ...-ste</span>', '<span class="de">die beste Umfrage</span>', 'before a fem. noun'],
          ['<span class="de">das ...-ste</span>', '<span class="de">das wichtigste Detail</span>', 'before a neut. noun']
        ]
      },
      note: 'Rule of thumb: no noun right after \u2192 <b>am ...-sten</b>; a noun right after \u2192 <b>der/die/das ...-ste</b> (matching its gender).',
      hinglish: 'Superlativ ke do roop hote hain. Verb ke baad <b>am \u2026-sten</b> aata hai: <b>Er f\u00e4hrt am schnellsten</b>. Aur noun se pehle <b>der/die/das \u2026-ste</b> aata hai: <b>der schnellste Zug</b>. Faisla karne ke liye sirf yeh dekho ki aage noun aa raha hai ya nahi.'
    },
    {
      title: 'Umlaut on short adjectives',
      goldenRule: 'Many one-syllable adjectives add an umlaut: <b>alt \u2192 \u00e4lter</b>, <b>gro\u00df \u2192 gr\u00f6\u00dfer</b>, <b>jung \u2192 j\u00fcnger</b>.',
      memoryTrick: 'Chhote adjectives raste mein <b>do dots</b> utha lete hain. Par sab nahi \u2014 <b>sch\u00f6n \u2192 sch\u00f6ner</b> waisa hi rehta hai. Isliye ise ek chhoti list ki tarah yaad karo, rule ki tarah nahi.',
      body: [
        'Many one-syllable adjectives take an <strong>umlaut</strong> in the Komparativ and Superlativ. The vowel a/o/u gains two dots.'
      ],
      table: {
        head: ['Positiv', 'Komparativ', 'Superlativ'],
        rows: [
          ['<span class="de">gro\u00df</span>', '<span class="de r-adjective">gr\u00f6\u00dfer</span>', '<span class="de r-superlativ">am gr\u00f6\u00dften</span>'],
          ['<span class="de">alt</span>', '<span class="de r-adjective">\u00e4lter</span>', '<span class="de r-superlativ">am \u00e4ltesten</span>'],
          ['<span class="de">jung</span>', '<span class="de r-adjective">j\u00fcnger</span>', '<span class="de r-superlativ">am j\u00fcngsten</span>'],
          ['<span class="de">lang</span>', '<span class="de r-adjective">l\u00e4nger</span>', '<span class="de r-superlativ">am l\u00e4ngsten</span>'],
          ['<span class="de">warm</span>', '<span class="de r-adjective">w\u00e4rmer</span>', '<span class="de r-superlativ">am w\u00e4rmsten</span>']
        ]
      },
      note: 'Not all short adjectives do this \u2014 e.g. <b>sch\u00f6n \u2192 sch\u00f6ner</b> (no umlaut). Learn the umlaut ones as a small set: gro\u00df, alt, jung, lang, kurz, warm, kalt, stark, schwach, klug.',
      hinglish: 'Bahut se chhote adjectives Komparativ aur Superlativ mein umlaut le lete hain: <b>gro\u00df</b> se <b>gr\u00f6\u00dfer</b>, <b>alt</b> se <b>\u00e4lter</b>, <b>jung</b> se <b>j\u00fcnger</b>, <b>lang</b> se <b>l\u00e4nger</b>, <b>warm</b> se <b>w\u00e4rmer</b>. Lekin sab nahi lete \u2014 jaise <b>sch\u00f6n</b> se <b>sch\u00f6ner</b> banta hai, bina umlaut. Isliye ise ek chhoti list ki tarah yaad karo, rule ki tarah nahi.'
    },
    {
      title: 'The four irregulars (memorise cold)',
      body: [
        'A few very common words don\u2019t follow the pattern at all. These four appear constantly \u2014 learn them by heart.'
      ],
      table: {
        head: ['Positiv', 'Komparativ', 'Superlativ'],
        rows: [
          ['<span class="de">gut</span>', '<span class="de r-adjective">besser</span>', '<span class="de r-superlativ">am besten</span>'],
          ['<span class="de">viel</span>', '<span class="de r-adjective">mehr</span>', '<span class="de r-superlativ">am meisten</span>'],
          ['<span class="de">gern</span>', '<span class="de r-adjective">lieber</span>', '<span class="de r-superlativ">am liebsten</span>'],
          ['<span class="de">hoch</span>', '<span class="de r-adjective">h\u00f6her</span>', '<span class="de r-superlativ">am h\u00f6chsten</span>']
        ]
      },
      note: '<b>gern \u2192 lieber \u2192 am liebsten</b> is about what you like doing: <span class="de">Ich esse am liebsten Pizza</span> = Pizza is my favourite. One more handy one: <b>nah \u2192 n\u00e4her \u2192 am n\u00e4chsten</b>.',
      hinglish: 'Chaar irregular zaroor yaad karo: gut\u2192besser\u2192am besten, viel\u2192mehr\u2192am meisten, gern\u2192lieber\u2192am liebsten, hoch\u2192h\u00f6her\u2192am h\u00f6chsten. "am liebsten" = sabse pasand.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four comparison traps to avoid.' ],
      mistakes: [
        { wrong: 'Berlin ist mehr gro\u00df als M\u00fcnchen.', right: 'Berlin ist gr\u00f6\u00dfer als M\u00fcnchen.', why: 'German adds -er to the adjective; it does not use "mehr" (more) like English.' },
        { wrong: 'Deutsch ist schwieriger wie Englisch.', right: 'Deutsch ist schwieriger als Englisch.', why: 'After a comparative, "than" is als, not wie.' },
        { wrong: 'Er ist der gutste Sch\u00fcler.', right: 'Er ist der beste Sch\u00fcler.', why: 'gut is irregular: besser / der beste (never "gutste").' },
        { wrong: 'Sie l\u00e4uft am schnellste.', right: 'Sie l\u00e4uft am schnellsten.', why: 'The am-form ends in -sten: am schnellsten.' }
      ],
      hinglish: 'Char galtiyan common hain. English ki tarah <b>mehr</b> lagane ki zaroorat nahi \u2014 seedha <b>-er</b> lagao: <b>gr\u00f6\u00dfer</b>. \u201cThan\u201d ke liye <b>als</b> aata hai, <b>wie</b> nahi. <b>gut</b> irregular hai, isliye <b>der beste</b> sahi hai, <b>gutste</b> nahi. Aur <b>am</b>-form <b>-sten</b> par khatam hoti hai: <b>am schnellsten</b>.'
    }
  ],

  // ---------- Reading passage (Zwei Schulen im Vergleich, clickable) ----------
  reading: {
    title: 'Zwei Schulen im Vergleich',
    titleEn: 'Two schools compared',
    tokens: [
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'meinem', role: 'r-dativ', en: 'my (masc. dat.)', hi: 'अपने', pron: 'MY-nem', type: 'Possessive \u00b7 dative', why: 'in + Dativ; mein \u2192 meinem (recycled \u2014 Possessiv Dativ).', ex: 'in meinem Blogbeitrag', exEn: 'in my blog post' },
      { w: 'Blogbeitrag', role: 'r-place', en: 'blog post', hi: 'ब्लॉग पोस्ट', pron: 'BLOK-by-trahk', type: 'Noun \u00b7 masc.', why: 'der Blogbeitrag (this chapter).', ex: 'mein Blogbeitrag', exEn: 'my blog post' },
      { w: 'vergleiche', role: 'r-verb', en: 'compare', hi: 'तुलना करती हूँ', pron: 'fair-GLY-khuh', type: 'Verb \u00b7 vergleichen', why: 'vergleichen (this chapter).', ex: 'Ich vergleiche zwei Schulen.', exEn: 'I compare two schools.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number' },
      { w: 'Schulen', role: 'r-object', en: 'schools', hi: 'स्कूल', pron: 'SHOO-len', type: 'Noun \u00b7 plural', why: 'die Schule \u2192 die Schulen (recycled \u2014 Schule).', ex: 'zwei Schulen', exEn: 'two schools' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'alte', role: 'r-adjective', en: 'old', hi: 'पुराना', pron: 'AL-tuh', type: 'Adjective' },
      { w: 'Gesamtschule', role: 'r-subject', en: 'comprehensive school', hi: 'समग्र स्कूल', pron: 'guh-ZAMT-shoo-luh', type: 'Noun \u00b7 fem.', why: 'die Gesamtschule (this chapter).', ex: 'die Gesamtschule', exEn: 'the comprehensive school' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'gr\u00f6\u00dfer', role: 'r-adjective', en: 'bigger', hi: 'ज़्यादा बड़ा', pron: 'GR\u00d6-ser', type: 'Komparativ \u00b7 gro\u00df', why: 'gro\u00df \u2192 gr\u00f6\u00dfer with umlaut (this chapter).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison word', why: 'als = than (this chapter).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'neue', role: 'r-adjective', en: 'new', hi: 'नई', pron: 'NOY-uh', type: 'Adjective' },
      { w: 'Berufsschule', role: 'r-object', en: 'vocational school', hi: 'व्यावसायिक स्कूल', pron: 'buh-ROOFS-shoo-luh', type: 'Noun \u00b7 fem.', why: 'die Berufsschule (this chapter).', ex: 'die Berufsschule', exEn: 'the vocational school' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'strenger', role: 'r-adjective', en: 'stricter', hi: 'ज़्यादा सख़्त', pron: 'SHTRENG-er', type: 'Komparativ \u00b7 streng', why: 'streng \u2192 strenger (this chapter).', ex: 'strenger als \u2026', exEn: 'stricter than \u2026' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Schulweg', role: 'r-subject', en: 'way to school', hi: 'स्कूल का रास्ता', pron: 'SHOOL-vayk', type: 'Noun \u00b7 masc.', why: 'der Schulweg (this chapter).', ex: 'der Schulweg', exEn: 'the way to school' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb \u00b7 time' },
      { w: 'k\u00fcrzer', role: 'r-adjective', en: 'shorter', hi: 'छोटा', pron: 'K\u00dcR-tser', type: 'Komparativ \u00b7 kurz', why: 'kurz \u2192 k\u00fcrzer with umlaut (this chapter).', ex: 'k\u00fcrzer als \u2026', exEn: 'shorter than \u2026' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Schulsystem', role: 'r-subject', en: 'school system', hi: 'शिक्षा प्रणाली', pron: 'SHOOL-z\u00fcs-taym', type: 'Noun \u00b7 neut.', why: 'das Schulsystem (this chapter).', ex: 'das Schulsystem', exEn: 'the school system' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'praktischer', role: 'r-adjective', en: 'more practical', hi: 'ज़्यादा व्यावहारिक', pron: 'PRAK-ti-sher', type: 'Komparativ \u00b7 praktisch', why: 'praktisch \u2192 praktischer (this chapter).', ex: 'praktischer als \u2026', exEn: 'more practical than \u2026' },
      { w: '.', plain: true },
      { w: 'Physik', role: 'r-subject', en: 'physics', hi: 'भौतिकी', pron: 'f\u00fc-ZEEK', type: 'Noun \u00b7 fem.', why: 'die Physik (this chapter).', ex: 'Physik', exEn: 'physics' },
      { w: 'finde', role: 'r-verb', en: 'find', hi: 'लगती है', pron: 'FIN-duh', type: 'Verb \u00b7 finden' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'schwieriger', role: 'r-adjective', en: 'more difficult', hi: 'ज़्यादा कठिन', pron: 'SHVEE-ri-ger', type: 'Komparativ \u00b7 schwierig', why: 'schwierig \u2192 schwieriger (this chapter).', ex: 'schwieriger als \u2026', exEn: 'more difficult than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison word' },
      { w: 'Geschichte', role: 'r-object', en: 'history', hi: 'इतिहास', pron: 'guh-SHIKH-tuh', type: 'Noun \u00b7 fem.', why: 'die Geschichte (this chapter).', ex: 'Geschichte', exEn: 'history' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
      { w: 'Talent', role: 'r-subject', en: 'talent', hi: 'प्रतिभा', pron: 'ta-LENT', type: 'Noun \u00b7 neut.', why: 'das Talent (this chapter).', ex: 'mein Talent', exEn: 'my talent' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Informatik', role: 'r-object', en: 'computer science', hi: 'कंप्यूटर विज्ञान', pron: 'in-for-MAH-tik', type: 'Noun \u00b7 fem.', why: 'die Informatik (recycled \u2014 weil).', ex: 'die Informatik', exEn: 'computer science' },
      { w: '.', plain: true },
      { w: 'Am', role: 'r-superlativ', en: 'the (most)', hi: 'सबसे', pron: 'am', type: 'Superlativ marker', why: 'am liebsten \u2014 favourite (this chapter).', ex: 'am liebsten', exEn: 'the most / favourite' },
      { w: 'liebsten', role: 'r-superlativ', en: 'most (gladly)', hi: 'सबसे ज़्यादा', pron: 'LEEP-sten', type: 'Superlativ \u00b7 gern (irreg.)', why: 'gern \u2192 am liebsten: irregular (this chapter).', ex: 'am liebsten', exEn: 'favourite' },
      { w: 'mag', role: 'r-verb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Verb \u00b7 m\u00f6gen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Theater-AG', role: 'r-object', en: 'drama club', hi: 'नाटक क्लब', pron: 'tay-AH-ter-ah-gay', type: 'Noun \u00b7 fem.', why: 'die AG = school club (this chapter).', ex: 'die Theater-AG', exEn: 'the drama club' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn (recycled \u2014 S\u00e4tze verbinden).', ex: '\u2026, denn dort \u2026', exEn: '\u2026, because there \u2026' },
      { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb \u00b7 place' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'der', role: 'r-superlativ', en: 'the (masc.)', hi: 'सबसे', pron: 'dair', type: 'Superlativ article' },
      { w: 'Humor', role: 'r-subject', en: 'humour', hi: 'हास्य', pron: 'hu-MOR', type: 'Noun \u00b7 masc.', why: 'der Humor (this chapter).', ex: 'der Humor', exEn: 'the humour' },
      { w: 'am', role: 'r-superlativ', en: 'the', hi: 'सबसे', pron: 'am', type: 'Superlativ marker' },
      { w: 'besten', role: 'r-superlativ', en: 'best', hi: 'सबसे अच्छा', pron: 'BES-ten', type: 'Superlativ \u00b7 gut (irreg.)', why: 'gut \u2192 am besten: irregular (this chapter).', ex: 'am besten', exEn: 'the best' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'sch\u00f6nste', role: 'r-superlativ', en: 'nicest', hi: 'सबसे सुंदर', pron: 'SH\u00d6N-stuh', type: 'Superlativ \u00b7 sch\u00f6n', why: 'die sch\u00f6nste \u2014 der/die/das + -ste before a noun (this chapter).', ex: 'meine sch\u00f6nste Erinnerung', exEn: 'my nicest memory' },
      { w: 'Erinnerung', role: 'r-subject', en: 'memory', hi: 'स्मृति', pron: 'air-I-nuh-rung', type: 'Noun \u00b7 fem.', why: 'die Erinnerung (this chapter).', ex: 'meine sch\u00f6nste Erinnerung', exEn: 'my nicest memory' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Freundschaft', role: 'r-subject', en: 'friendship', hi: 'दोस्ती', pron: 'FROYNT-shaft', type: 'Noun \u00b7 fem.', why: 'die Freundschaft (this chapter).', ex: 'die Freundschaft', exEn: 'the friendship' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition \u00b7 Dativ' },
      { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'अपनी', pron: 'MY-ner', type: 'Possessive \u00b7 dative', why: 'mit + Dativ; mein \u2192 meiner (recycled \u2014 Possessiv Dativ).', ex: 'mit meiner Freundin', exEn: 'with my friend' },
      { w: 'besten', role: 'r-superlativ', en: 'best', hi: 'सबसे अच्छी', pron: 'BES-ten', type: 'Superlativ \u00b7 gut (irreg.)', why: 'meiner besten Freundin (this chapter).', ex: 'meine beste Freundin', exEn: 'my best friend' },
      { w: 'Freundin', role: 'r-dativ', en: 'friend (f.)', hi: 'सहेली', pron: 'FROYN-din', type: 'Noun \u00b7 fem. \u00b7 dat.', why: 'die Freundin (recycled \u2014 Familie).', ex: 'meine beste Freundin', exEn: 'my best friend' },
      { w: '.', plain: true }
    ],
    translation: 'In my blog post I compare two schools. My old comprehensive school was bigger than my new vocational school, but also stricter. The way to school is shorter now, and the school system is more practical. I find physics more difficult than history, but my talent is computer science. My favourite thing is the drama club, because the humour there is the best. My nicest memory is the friendship with my best friend. \u2014 Count the comparisons: gr\u00f6\u00dfer, strenger, k\u00fcrzer, praktischer, schwieriger (Komparativ + als) and am liebsten, am besten, die sch\u00f6nste, besten (Superlativ).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_008_L001', speaker: 'Sina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, welche Wohnung ist besser für uns?', en: 'Timo, which apartment is better for us?' },
      { id: 'A2_008_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Die neue ist größer, aber die alte ist billiger.', en: 'The new one is bigger, but the old one is cheaper.' },
      { id: 'A2_008_L003', speaker: 'Sina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und welche hat den kürzeren Weg zur Arbeit?', en: 'And which one has the shorter way to work?' },
      { id: 'A2_008_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Die neue! Aber die alte hat den schönsten Balkon.', en: 'The new one! But the old one has the nicest balcony.' }
    ],
    transcript: 'Timo, welche Wohnung ist besser für uns? Die neue ist größer, aber die alte ist billiger. Und welche hat den kürzeren Weg zur Arbeit? Die neue! Aber die alte hat den schönsten Balkon.',
    translation: 'Timo, which apartment is better for us? The new one is bigger, but the old one is cheaper. And which one has the shorter way to work? The new one! But the old one has the nicest balcony.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'welche' },
      { w: 'Wohnung' },
      { w: 'ist' },
      { w: 'besser' },
      { w: 'für' },
      { w: 'uns' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'neue' },
      { w: 'ist' },
      { w: 'größer' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'alte' },
      { w: 'ist' },
      { w: 'billiger' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'welche' },
      { w: 'hat' },
      { w: 'den' },
      { w: 'kürzeren' },
      { w: 'Weg' },
      { w: 'zur' },
      { w: 'Arbeit' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'neue' },
      { w: '!', plain: true },
      { w: 'Aber' },
      { w: 'die' },
      { w: 'alte' },
      { w: 'hat' },
      { w: 'den' },
      { w: 'schönsten' },
      { w: 'Balkon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Wohnung ist größer?', qEn: 'Which apartment is bigger?', options: ['die alte', 'die neue', 'beide gleich', 'keine'], optionsEn: ['the old one', 'the new one', 'both the same', 'none'], answer: 1,
        explain: '"Die neue ist größer."' },
      { q: 'Welche Wohnung hat den schönsten Balkon?', qEn: 'Which apartment has the nicest balcony?', options: ['die neue', 'die alte', 'beide', 'keine'], optionsEn: ['the new one', 'the old one', 'both', 'none'], answer: 1,
        explain: '"Die alte hat den schönsten Balkon."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt: Ist Deutsch schwieriger als Englisch?", taskEn: "Your friend asks: is German harder than English?", de: "Deutsch ist schwieriger als Englisch, aber nicht am schwierigsten.", en: "German is harder than English, but not the hardest." },
    { task: "Deine Partnerin fragt: Welche Stadt gefällt dir am besten?", taskEn: "Your partner asks: which city do you like best?", de: "Berlin gefällt mir am besten, denn es ist größer und privater.", en: "I like Berlin best, because it's bigger and more private." },
    { task: "Dein Freund fragt: Welcher Film war der beste?", taskEn: "Your friend asks: which film was the best?", de: "Der letzte Film war der beste. Er war nützlicher als das Buch.", en: "The last film was the best. It was more useful than the book." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short comparison text (six sentences) about two things you know \u2014 two cities, two jobs, two languages or two films. Use at least two Komparativ + als sentences (gr\u00f6\u00dfer als, besser als \u2026), one am ...-sten superlative, one der/die/das ...-ste, and one of the irregulars (gut/viel/gern/hoch). Try this chapter\u2019s words: der Vergleich, die Fremdsprache, n\u00fctzlich, schwierig, die Erinnerung.',
    starters: ['\u2026 ist gr\u00f6\u00dfer als \u2026', 'Ich finde \u2026 besser als \u2026', 'Am sch\u00f6nsten ist \u2026', 'Der/die/das beste \u2026 ist \u2026'],
    placeholder: 'Berlin ist gr\u00f6\u00dfer als M\u00fcnchen, aber M\u00fcnchen ist sch\u00f6ner. Am liebsten \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct comparison: "Der Zug ist ___ der Bus."',
      options: ['schnell als', 'schneller wie', 'schneller als', 'am schnellsten als'],
      answer: 2,
      explain: 'Komparativ + als: schneller als der Bus.'
    },
    gap: {
      // comparative of groß (umlaut) then superlative of gut (irregular)
      sentence: ['Berlin ist ', ' als M\u00fcnchen, aber in Neapel schmeckt die Pizza am ', '.'],
      gaps: [ { answer: 'gr\u00f6\u00dfer', accepts: ['gr\u00f6\u00dfer', 'groesser'] }, { answer: 'besten', accepts: ['besten'] } ],
      explain: 'gro\u00df \u2192 gr\u00f6\u00dfer (umlaut); gut \u2192 am besten (irregular).'
    },
    match: {
      q: 'Match each Positiv to its Komparativ.',
      pairs: [
        { noun: 'gut', art: 'besser' },
        { noun: 'viel', art: 'mehr' },
        { noun: 'gern', art: 'lieber' },
        { noun: 'hoch', art: 'h\u00f6her' },
        { noun: 'gro\u00df', art: 'gr\u00f6\u00dfer' },
        { noun: 'alt', art: '\u00e4lter' }
      ]
    },
    builder: {
      target: 'Build: "Berlin is bigger than Munich."',
      bank: ['Berlin', 'ist', 'gr\u00f6\u00dfer', 'als', 'M\u00fcnchen'],
      answer: ['Berlin', 'ist', 'gr\u00f6\u00dfer', 'als', 'M\u00fcnchen'],
      roles: { 'Berlin': 'r-subject', 'ist': 'r-verb', 'gr\u00f6\u00dfer': 'r-adjective', 'als': 'r-vergleich', 'M\u00fcnchen': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you form the Komparativ of a regular adjective?', options: ['put "mehr" before it', 'add -er', 'add -sten', 'add -e'], answer: 1,
      explain: 'Add -er: schnell \u2192 schneller. German does not use "mehr".' },
    { q: 'Which means "than" after a comparative?', options: ['wie', 'als', 'wenn', 'dass'], answer: 1,
      explain: 'After a comparative, "than" = als: gr\u00f6\u00dfer als.' },
    { q: 'What is the Superlativ of "gut"?', options: ['am gutsten', 'am besten', 'am guten', 'am meisten'], answer: 1,
      explain: 'gut is irregular: besser \u2192 am besten.' },
    { q: 'Complete: "M\u00fcnchen ist im Sommer ___." (nicest)', options: ['am sch\u00f6nste', 'am sch\u00f6nsten', 'der sch\u00f6nste', 'sch\u00f6ner'], answer: 1,
      explain: 'After a verb, the superlative is am ...-sten: am sch\u00f6nsten.' },
    { q: 'Which shows the correct umlaut change?', options: ['gro\u00df \u2192 grosser', 'alt \u2192 alter', 'jung \u2192 j\u00fcnger', 'lang \u2192 langer'], answer: 2,
      explain: 'Short adjectives take an umlaut: jung \u2192 j\u00fcnger (also gro\u00df\u2192gr\u00f6\u00dfer, alt\u2192\u00e4lter, lang\u2192l\u00e4nger).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adjective', html: 'Three steps: <span class="de">schnell</span> \u2192 <span class="de r-adjective">schneller</span> (+ -er, with <span class="r-vergleich">als</span>) \u2192 <span class="de r-superlativ">am schnellsten</span> (am ...-sten).' },
    { c: 'r-superlativ', html: 'Superlative has two shapes: <span class="de r-superlativ">am ...-sten</span> after a verb, <span class="de">der/die/das ...-ste</span> before a noun.' },
    { c: 'r-adjective', html: 'Short adjectives add an umlaut (<span class="de">gro\u00df\u2192gr\u00f6\u00dfer</span>); four irregulars are must-knows: <span class="de">gut\u2192besser\u2192am besten</span>, <span class="de">viel\u2192mehr</span>, <span class="de">gern\u2192lieber</span>, <span class="de">hoch\u2192h\u00f6her</span>.' }
  ],
  revisionTips: [
    'Chant it: schnell, schneller, am schnellsten \u2014 the ladder never changes.',
    '"than" is always als after a comparative, never wie.',
    'Memorise the four wild ones: gut/besser/am besten, viel/mehr/am meisten, gern/lieber/am liebsten, hoch/h\u00f6her/am h\u00f6chsten.'
  ]
};

window.CHAPTER = CHAPTER;
