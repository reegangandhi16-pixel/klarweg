/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 11
   "Stellung von nicht (Satz- vs. Sondernegation)" — where nicht
   goes depends entirely on WHAT you're negating: the whole
   statement (Satznegation, nicht placed late) or one specific
   element (Sondernegation, nicht placed directly before it,
   often with a following "sondern" clause). Does NOT reteach
   kein vs nicht, double negation, or nuanced negation words.
   IMPORTANT: dialogue uses ONLY Nadine and Timo.
   Vocabulary source: uploaded chapter-11 list (33 items, user-edited
   general B2 vocabulary bank — conflict/workplace/media themes).
============================================================ */
const CHAPTER = {
  id: 'b2-11-stellung-von-nicht',
  phase: 'B2 · Phase 1',
  number: 11,
  title: 'Stellung von nicht (Satz- vs. Sondernegation)',
  titleEn: 'Position of nicht (sentence vs. special negation)',
  description: 'Where "nicht" goes depends on what you\'re negating: the whole sentence (placed late) or one specific word (placed directly before it) — a single decision that changes meaning entirely.',
  xp: 390,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 12, title: 'Doppelte Verneinung & Litotes', titleEn: 'Double negation & litotes' , href: 'chapter-b2-12-doppelte-verneinung-litotes.html' },

  prevChapter: { number: 10, title: 'Häufige B2-Verben (trennbar & untrennbar)', titleEn: 'High-frequency B2 verbs (separable & inseparable)', href: 'chapter-b2-10-haeufige-b2-verben.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One word, <em>two very different meanings.</em>',
    intro: 'After a hectic day in the open-plan office, Nadine clears up a misunderstanding with Timo — she wasn\'t stressed because of him, but because of the pressure — correcting exactly what "nicht" is and isn\'t negating.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how moving "nicht" changes what is actually being denied'
    ],
    scene: 'Das Missverständnis im Großraumbüro',
    femaleSpeakers: ['Nadine'],
    dialogue: [
      { speaker: 'Nadine', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Großraumbüro', role: 'r-subject', en: 'open-plan office', hi: 'बड़ा कार्यालय', pron: 'GROHS-rowm-bü-ro', type: 'Noun · neut.', why: 'das Großraumbüro (this chapter).', ex: 'Das Großraumbüro ist hektisch.', exEn: 'The open-plan office is hectic.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'hektisch', role: 'r-akkusativ', en: 'hectic', hi: 'अफ़रा-तफ़री भरा', pron: 'HEK-tish', type: 'Adjective', why: 'hektisch = hectic (this chapter).', ex: 'Es war hektisch.', exEn: 'It was hectic.' },
        { w: '.', plain: true }
      ], en: 'The open-plan office was very hectic today.', hi: 'Bada karyalaya aaj bahut afra-tafri bhara tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht at Satzende negates the whole predicate (this chapter).', ex: 'Ich war heute nicht gestresst.', exEn: 'I was not stressed today.' },
        { w: 'gestresst', role: 'r-akkusativ', en: 'stressed', hi: 'तनावग्रस्त', pron: 'ge-SHTRAYST', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I was not stressed.', hi: 'Main tanaavgrast nahi tha.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht before a preposition phrase negates just that phrase (this chapter).', ex: 'Ich war nicht wegen dir gestresst.', exEn: 'I was not stressed because of you.' },
        { w: 'wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'gestresst', role: 'r-akkusativ', en: 'stressed', hi: 'तनावग्रस्त', pron: 'ge-SHTRAYST', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Drucks', role: 'r-dativ', en: 'pressure (gen.)', hi: 'दबाव के', pron: 'druks', type: 'Noun · masc. genitive', why: 'der Druck (this chapter).', ex: 'wegen des Drucks' },
        { w: '.', plain: true }
      ], en: 'I was not stressed because of you, but because of the pressure.', hi: 'Main tumhaare kaaran nahi, balki dabaav ke kaaran tanaavgrast tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझता हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Kritik', role: 'r-subject', en: 'criticism', hi: 'आलोचना', pron: 'kri-TEEK', type: 'Noun · fem.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'nicht before an adjective negates just that word (this chapter).', ex: 'Deine Kritik war nicht konstruktiv.', exEn: 'Your criticism was not constructive.' },
        { w: 'konstruktiv', role: 'r-akkusativ', en: 'constructive', hi: 'रचनात्मक', pron: 'kon-struk-TEEF', type: 'Adjective', why: 'konstruktiv = constructive (this chapter).', ex: 'Deine Kritik war konstruktiv.', exEn: 'Your criticism was constructive.' },
        { w: '.', plain: true }
      ], en: 'I understand that. Your criticism was not constructive.', hi: 'Main yeh samajhta hoon. Tumhaari aalochana rachnaatmak nahi thi.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'सही', pron: 'hast', type: 'Verb · haben' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Nächstes', role: 'r-akkusativ', en: 'next', hi: 'अगली', pron: 'NEKS-tes', type: 'Adjective' },
        { w: 'Mal', role: 'r-akkusativ', en: 'time', hi: 'बार', pron: 'mahl', type: 'Noun · neut.' },
        { w: 'gebe', role: 'r-verb', en: 'give', hi: 'दूंगी', pron: 'GAY-buh', type: 'Verb · geben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'konkretes', role: 'r-akkusativ', en: 'concrete', hi: 'ठोस', pron: 'kon-KRAY-tes', type: 'Adjective', why: 'konkret = concrete (this chapter).', ex: 'ein konkretes Beispiel' },
        { w: 'Feedback', role: 'r-akkusativ', en: 'feedback', hi: 'प्रतिक्रिया', pron: 'FEET-bek', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'You are right. Next time I give you concrete feedback.', hi: 'Tum sahi ho. Agli baar main tumhe thos feedback dungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'finden', role: 'r-verb', en: 'let us find', hi: 'ढूंढते हैं', pron: 'FIN-den', type: 'Verb · finden (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Konsens', role: 'r-akkusativ', en: 'consensus', hi: 'सहमति', pron: 'kon-ZENS', type: 'Noun · masc.', why: 'der Konsens (this chapter).', ex: 'einen Konsens finden' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then we surely find a consensus.', hi: 'Badhiya! Toh hum zaroor sahmati dhoondh lenge.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The position of <span class="de r-satz">nicht</span> depends on what you\'re negating. Deny the WHOLE statement (<span class="r-satz">Satznegation</span>) and "nicht" goes late: <span class="de">Ich arbeite heute nicht.</span> Deny just ONE part (<span class="r-sonder">Sondernegation</span>) and "nicht" goes directly before it, usually followed by "sondern": <span class="de">Ich arbeite nicht heute, sondern morgen.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is STELLUNG VON NICHT — SATZ- VS. SONDERNEGATION (B2 level): the position of "nicht" depends entirely on what is being negated. Satznegation (whole-sentence negation) places "nicht" as late as possible, usually just before the second verb or the right sentence bracket (Ich arbeite heute nicht. / Anna hat den Film nicht gesehen.). Sondernegation (special/partial negation) places "nicht" directly before the ONE element being negated, often followed by "sondern" (Nicht Anna kommt, sondern Rohan. / Ich fahre nicht heute, sondern morgen.). The SAME sentence with "nicht" in a different position can mean something completely different. ' +
    'Do NOT expect kein vs nicht distinctions (already taught earlier), double negation, Litotes, or nuanced negation words (kaum, keineswegs, keinesfalls) — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- If the whole sentence is meant to be negative, "nicht" should be placed late (Satznegation).\n' +
    '- If only one specific element is meant to be negated/contrasted, "nicht" should be placed directly before that element, often with a "sondern" clause (Sondernegation).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Negation check:</b> one sentence on whether each "nicht" was placed correctly for the intended meaning (Satz- vs Sondernegation).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly place "nicht" for both whole-sentence and single-element negation. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Satznegation vs Sondernegation comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: what exactly am I negating?'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'arbeite', role: 'plain' },
    { w: 'nicht', role: 'r-sonder' }, { w: 'heute', role: 'r-sonder' },
    { w: ',', plain: true }, { w: 'sondern', role: 'r-connector' }, { w: 'morgen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the position of "nicht" depends entirely on what you\'re negating.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nadine and Timo clear up workplace misunderstandings using precise nicht placement.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 33 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Satznegation vs Sondernegation and where "nicht" belongs in each.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of both negation types.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify what is being negated in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Correct misunderstandings and emphasize information using nicht naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using correct nicht placement.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Satz- vs Sondernegation, placement, and meaning-change comparisons.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 390 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 33 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Satz- vs Sondernegation drills, placement exercises, meaning comparisons, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete nicht-placement reference — comparison tables, sentence bracket diagrams, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich arbeite heute nicht.', text: 'Place nicht correctly for whole-sentence negation' },
    { de: 'Ich fahre nicht heute, sondern morgen.', text: 'Place nicht correctly for single-element negation' },
    { de: 'Nicht ich habe angerufen.', text: 'Front the negated element for emphasis' },
    { de: 'Anna hat das Buch nicht gelesen.', text: 'Place nicht correctly with Perfekt and modal verbs' },
    { de: 'Was will ich eigentlich negieren?', text: 'Ask the right question before placing nicht' }
  ],

  // ---------- Vocabulary (33 items — uploaded chapter-11 list) ----------
  vocab: [
    { de: 'destruktiv', pos: 'adjective', level: 'B2', en: 'destructive', hi: 'विनाशकारी', ex: 'Manche Kritik ist leider nicht konstruktiv, sondern destruktiv.', exEn: 'Some criticism, unfortunately, isn\'t constructive, but destructive.', exHi: 'Kuch aalochana durbhaagya se rachnaatmak nahi, balki vinaashkaari hai.' },
    { de: 'draufhauen', pos: 'verb', level: 'B2', en: 'to hit, bash', hi: 'दे मारना', ex: 'Manche Kollegen hauen einfach drauf, statt einen Konsens zu suchen.', exEn: 'Some colleagues simply bash away, instead of seeking a consensus.', exHi: 'Kuch sahakarmi bas de maarte hain, sehmati talaash karne ke bajaay.', conj: { praesens: 'haut drauf', praeteritum: 'haute drauf', perfekt: 'hat draufgehauen' } },
    { de: 'dreckig', pos: 'adjective', level: 'B2', en: 'dirty', hi: 'गंदा', ex: 'Der Tisch ist dreckig.', exEn: 'The table is dirty.', exHi: 'Mez gandi hai.' },
    { de: 'Druck', art: 'der', gender: 'm', plural: 'Drücke', pos: 'noun', level: 'B2', en: 'pressure, print, printing', hi: 'दबाव', ex: 'Der Druck im Büro wird nicht weniger.', exEn: 'The pressure in the office isn\'t becoming less.', exHi: 'Office mein dabaav kam nahi ho raha.' },
    { de: 'eilig', pos: 'adjective', level: 'B2', en: 'hurried, urgent', hi: 'जल्दी में', ex: 'Sie ist immer eilig unterwegs.', exEn: 'She is always in a hurry.', exHi: 'Woh hamesha jaldi mein hoti hai.' },
    { de: 'eindeutig', pos: 'adjective', level: 'B2', en: 'clear, unambiguous', hi: 'स्पष्ट', ex: 'Ich kann jedes Körpersignal nicht eindeutig deuten.', exEn: 'I can\'t interpret every body signal clearly.', exHi: 'Main har shaareerik sanket ko spasht roop se vyaakhya nahi kar sakti.' },
    { de: 'einsprachig', pos: 'adjective', level: 'B2', en: 'monolingual', hi: 'एकभाषी', ex: 'Er ist einsprachig aufgewachsen.', exEn: 'He grew up monolingual.', exHi: 'Woh ekbhaashi ban ke bada hua.' },
    { de: 'einstecken', pos: 'verb', level: 'B2', en: 'to pocket, put in', hi: 'जेब में रखना', ex: 'Sie steckt ihr Handy ein.', exEn: 'She pockets her phone.', exHi: 'Woh apna phone jeb mein rakhti hai.', conj: { praesens: 'steckt ein', praeteritum: 'steckte ein', perfekt: 'hat eingesteckt' } },
    { de: 'entspannt', pos: 'adjective', level: 'B2', en: 'relaxed', hi: 'तनावमुक्त', ex: 'Nach dem Urlaub fühlt sie sich entspannt.', exEn: 'After the vacation she feels relaxed.', exHi: 'Chhutti ke baad woh tanaavmukt mehsoos karti hai.' },
    { de: 'fehlerlos', pos: 'adjective', level: 'B2', en: 'flawless, error-free', hi: 'त्रुटिरहित', ex: 'Die Präsentation war fehlerlos.', exEn: 'The presentation was flawless.', exHi: 'Prastuti trutirahit thi.' },
    { de: 'feststellen', pos: 'verb', level: 'B2', en: 'to establish, determine', hi: 'निर्धारित करना', ex: 'Wir müssen die Ursache feststellen.', exEn: 'We must determine the cause.', exHi: 'Humein kaaran ka nirdhaaran karna hoga.', conj: { praesens: 'stellt fest', praeteritum: 'stellte fest', perfekt: 'hat festgestellt' } },
    { de: 'Gegner/in', art: 'der/die', gender: 'm/f', plural: 'Gegner/innen', pos: 'noun', level: 'B2', en: 'opponent', hi: 'प्रतिद्वंद्वी', ex: 'Der Gegner war stark.', exEn: 'The opponent was strong.', exHi: 'Pratidwandi majboot tha.' },
    { de: 'Gehirn', art: 'das', gender: 'n', plural: 'Gehirne', pos: 'noun', level: 'B2', en: 'brain', hi: 'दिमाग़', ex: 'Das Gehirn verarbeitet Informationen schnell.', exEn: 'The brain processes information quickly.', exHi: 'Dimaag jaankaari ko jaldi processes karta hai.' },
    { de: 'Großraumbüro', art: 'das', gender: 'n', plural: 'Großraumbüros', pos: 'noun', level: 'B2', en: 'open-plan office', hi: 'खुला कार्यालय', ex: 'Ich arbeite heute nicht im Großraumbüro.', exEn: 'I\'m not working in the open-plan office today.', exHi: 'Main aaj open-plan office mein kaam nahi kar raha hoon.' },
    { de: 'gründlich', pos: 'adjective', level: 'B2', en: 'thorough, thoroughly', hi: 'गहनता से', ex: 'Sie hat die Arbeit gründlich erledigt.', exEn: 'She completed the work thoroughly.', exHi: 'Usne kaam gehnata se poora kiya.' },
    { de: 'Gunst', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'favour, goodwill', hi: 'कृपा', ex: 'Er genießt die Gunst des Chefs.', exEn: 'He enjoys the boss\'s favour.', exHi: 'Usse boss ki kripa praapt hai.' },
    { de: 'hektisch', pos: 'adjective', level: 'B2', en: 'hectic', hi: 'व्यस्त', ex: 'Es ist ziemlich hektisch.', exEn: 'It\'s quite hectic.', exHi: 'Yeh kaafi vyast hai.' },
    { de: 'hervorragend', pos: 'adjective', level: 'B2', en: 'outstanding, excellent', hi: 'उत्कृष्ट', ex: 'Die Leistung war hervorragend.', exEn: 'The performance was outstanding.', exHi: 'Pradarshan utkrisht tha.' },
    { de: 'hitzig', pos: 'adjective', level: 'B2', en: 'heated, fierce', hi: 'गरमागरम', ex: 'Die Diskussion wurde hitzig.', exEn: 'The discussion became heated.', exHi: 'Charcha garmaagaram ho gayi.' },
    { de: 'Indie-Pop', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'indie pop', hi: 'इंडी पॉप', ex: 'Sie hört gern Indie-Pop.', exEn: 'She likes listening to indie pop.', exHi: 'Use indie pop sunna pasand hai.' },
    { de: 'instinktiv', pos: 'adjective', level: 'B2', en: 'instinctive, instinctively', hi: 'सहज रूप से', ex: 'Instinktiv lese ich die Körpersprache.', exEn: 'Instinctively I read body language.', exHi: 'Sahaj roop se main shaareerik bhaasha padhti hoon.' },
    { de: 'Kabarettist/in', art: 'der/die', gender: 'm/f', plural: 'Kabarettisten/Kabarettistinnen', pos: 'noun', level: 'B2', en: 'cabaret artist', hi: 'कैबरे कलाकार', ex: 'Der Kabarettist machte viele Witze.', exEn: 'The cabaret artist made many jokes.', exHi: 'Cabaret kalaakaar ne kai chutkule sunaaye.' },
    { de: 'kinderleicht', pos: 'adjective', level: 'B2', en: 'child\'s play, dead easy', hi: 'बहुत आसान', ex: 'Das ist kinderleicht für dich, aber nicht für mich.', exEn: 'That\'s child\'s play for you, but not for me.', exHi: 'Yeh tumhaare liye bahut aasaan hai, lekin mere liye nahi.' },
    { de: 'Kleinkind', art: 'das', gender: 'n', plural: 'Kleinkinder', pos: 'noun', level: 'B2', en: 'toddler, small child', hi: 'नन्हा बच्चा', ex: 'Das Kleinkind lernt schnell.', exEn: 'The toddler learns quickly.', exHi: 'Nanha baccha jaldi seekhta hai.' },
    { de: 'Komponist/in', art: 'der/die', gender: 'm/f', plural: 'Komponisten/Komponistinnen', pos: 'noun', level: 'B2', en: 'composer', hi: 'संगीतकार', ex: 'Der Komponist schrieb ein neues Stück.', exEn: 'The composer wrote a new piece.', exHi: 'Sangeetkaar ne ek nayi rachna likhi.' },
    { de: 'konkret', pos: 'adjective', level: 'B2', en: 'concrete, specific', hi: 'ठोस', ex: 'Wir brauchen einen konkreten Plan.', exEn: 'We need a concrete plan.', exHi: 'Humein ek thos yojana chahiye.' },
    { de: 'Konsens', art: 'der', gender: 'm', plural: 'Konsense', pos: 'noun', level: 'B2', en: 'consensus', hi: 'सहमति', ex: 'Manche Kollegen hauen einfach drauf, statt einen Konsens zu suchen.', exEn: 'Some colleagues simply bash away, instead of seeking a consensus.', exHi: 'Kuch sahakarmi bas de maarte hain, sehmati talaash karne ke bajaay.' },
    { de: 'konstruktiv', pos: 'adjective', level: 'B2', en: 'constructive', hi: 'रचनात्मक', ex: 'Das ist konstruktiv.', exEn: 'That\'s constructive.', exHi: 'Yeh rachnaatmak hai.' },
    { de: 'Körpersignal', art: 'das', gender: 'n', plural: 'Körpersignale', pos: 'noun', level: 'B2', en: 'body signal', hi: 'शारीरिक संकेत', ex: 'Ich kann jedes Körpersignal nicht eindeutig deuten.', exEn: 'I can\'t interpret every body signal clearly.', exHi: 'Main har shaareerik sanket ko spasht roop se vyaakhya nahi kar sakti.' },
    { de: 'Körpersprache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'body language', hi: 'शारीरिक भाषा', ex: 'Instinktiv lese ich die Körpersprache.', exEn: 'Instinctively I read body language.', exHi: 'Sahaj roop se main shaareerik bhaasha padhti hoon.' },
    { de: 'Kritik', art: 'die', gender: 'f', plural: 'Kritiken', pos: 'noun', level: 'B2', en: 'criticism, review', hi: 'आलोचना', ex: 'Manche Kritik ist leider nicht konstruktiv, sondern destruktiv.', exEn: 'Some criticism, unfortunately, isn\'t constructive, but destructive.', exHi: 'Kuch aalochana durbhaagya se rachnaatmak nahi, balki vinaashkaari hai.' },
    { de: 'Last', art: 'die', gender: 'f', plural: 'Lasten', pos: 'noun', level: 'B2', en: 'burden, load', hi: 'बोझ', ex: 'Ich habe die Last nicht allein getragen.', exEn: 'I haven\'t carried the burden alone.', exHi: 'Maine bojh akele nahi uthaaya.' },
    { de: 'lexikalisch', pos: 'adjective', level: 'B2', en: 'lexical', hi: 'शाब्दिक', ex: 'Das ist eine lexikalische Frage.', exEn: 'That is a lexical question.', exHi: 'Yeh ek shaabdik sawaal hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was negiert "nicht"?',
      body: [ 'The position of "nicht" depends on the question: "What do you want to negate?" There are two possibilities: the WHOLE sentence, or just ONE part.' ],
      table: {
        head: ['Type', 'Question'],
        rows: [
          ['Satznegation', 'Is everything negative?'],
          ['Sondernegation', 'Is only one word negative?']
        ]
      },
      hinglish: '"nicht" kahaan rakhna hai, yeh ek hi baat par depend karta hai \u2014 tum kya negate karna chahte ho. Do hi options hain: poora sentence, ya sirf ek hissa. Isliye position sochne se pehle yeh decide karo.'
    },
    {
      title: 'Satznegation',
      body: [ 'If the entire statement is negative, place "nicht" as late as possible — usually before the second verb or the right sentence bracket.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich arbeite heute nicht.</span>'],
          ['<span class="de">Anna hat den Film nicht gesehen.</span>'],
          ['<span class="de">Wir werden morgen nicht kommen.</span>'],
          ['<span class="de">Er kann heute nicht arbeiten.</span>']
        ]
      },
      hinglish: 'Agar poori baat negative hai, to "nicht" ko sentence mein jitna aage ho sake rakho \u2014 aksar woh doosre verb ya right bracket ke theek pehle baithta hai.'
    },
    {
      title: 'Sondernegation',
      body: [ 'Only ONE element is negated. "nicht" comes directly before that element, usually followed by "sondern".' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Nicht Anna kommt, sondern Rohan.</span>'],
          ['<span class="de">Ich fahre nicht heute, sondern morgen.</span>'],
          ['<span class="de">Wir wohnen nicht in Berlin, sondern in Hamburg.</span>']
        ]
      },
      hinglish: 'Yahan sirf ek hissa negate hota hai. Aise case mein "nicht" us hisse ke seedhe pehle aata hai, aur aksar uske baad "sondern" se sahi baat batayi jaati hai.'
    },
    {
      title: 'Positionsregeln',
      body: [ 'Compare where "nicht" goes depending on what\'s being negated.' ],
      table: {
        head: ['Negating', 'Example'],
        rows: [
          ['Verb phrase', '<span class="de">Ich arbeite heute nicht.</span>'],
          ['Object', '<span class="de">Ich kaufe nicht das rote Auto.</span>'],
          ['Time', '<span class="de">Ich komme nicht morgen.</span>'],
          ['Place', '<span class="de">Wir wohnen nicht in München.</span>'],
          ['Adjective', '<span class="de">Das Auto ist nicht teuer.</span>'],
          ['Adverb', '<span class="de">Er spricht nicht langsam.</span>']
        ]
      },
      hinglish: 'Neeche dekho ki jo cheez negate ho rahi hai, uske hisaab se "nicht" ki jagah kaise badalti hai.'
    },
    {
      title: 'Satzklammer und "nicht"',
      body: [ 'In Perfekt and with modal verbs, "nicht" sits inside the sentence bracket, just before the final verb element.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich werde morgen nicht arbeiten.</span>'],
          ['<span class="de">Anna hat das Buch nicht gelesen.</span>'],
          ['<span class="de">Wir können heute nicht kommen.</span>']
        ]
      },
      hinglish: 'Perfekt aur modal verbs ke saath "nicht" bracket ke andar rehta hai, matlab aakhri verb se theek pehle. Uske baad kuch nahi aata.'
    },
    {
      title: 'Nebensätze',
      body: [ '"nicht" works the same way inside subordinate clauses — placed relative to what it negates.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">..., weil ich heute nicht arbeiten kann.</span>'],
          ['<span class="de">..., obwohl Anna nicht gekommen ist.</span>'],
          ['<span class="de">..., dass wir morgen nicht fahren.</span>']
        ]
      },
      hinglish: 'Subordinate clause mein bhi rule wahi rehta hai \u2014 "nicht" us cheez ke hisaab se rakha jaata hai jise tum negate kar rahe ho.'
    },
    {
      title: 'Bedeutungsänderungen',
      body: [ 'The SAME words with "nicht" in a different position mean something completely different.' ],
      table: {
        head: ['Sentence', 'Meaning'],
        rows: [
          ['<span class="de">Ich habe Maria nicht angerufen.</span>', 'I didn\'t call Maria.'],
          ['<span class="de">Nicht ich habe Maria angerufen.</span>', 'Someone else called Maria.'],
          ['<span class="de">Ich habe nicht Maria angerufen.</span>', 'I called someone else (not Maria).']
        ]
      },
      hinglish: 'Yahan dhyaan do \u2014 shabd wahi hain, bas "nicht" ki jagah badli hai, aur matlab poora badal gaya hai. Isliye B2 par iski position itni important hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five are genuinely wrong \u2014 wrong position, or the wrong contrast word. Note that <span class="de">Ich komme nicht morgen</span> is NOT a mistake: that is Sondernegation, and it simply means something narrower than <span class="de">Ich komme morgen nicht</span>.' ],
      mistakes: [
        { wrong: 'Ich nicht komme.', right: 'Ich komme nicht.', why: '"nicht" cannot go directly after the subject in a normal statement — it belongs later in the sentence.' },
        { wrong: 'Nicht ich komme morgen, aber Rohan.', right: 'Nicht ich komme morgen, sondern Rohan.', why: 'After a Sondernegation the correction is introduced with "sondern", never with "aber".' },
        { wrong: 'Ich habe gesehen nicht.', right: 'Ich habe nicht gesehen.', why: '"nicht" must sit inside the sentence bracket, before the final participle — not after it.' },
        { wrong: 'Ich kann kommen nicht.', right: 'Ich kann nicht kommen.', why: '"nicht" stays inside the sentence bracket, before the final infinitive \u2014 nothing may follow the verb at the end.' },
        { wrong: 'Anna hat nicht gearbeitet gestern.', right: 'Anna hat gestern nicht gearbeitet.', why: 'The time expression belongs in the Mittelfeld, and nothing can follow the Partizip II at the end of the bracket.' }
      ],
      hinglish: 'Yeh paanch sach mein galat hain \u2014 ya to "nicht" galat jagah par hai, ya contrast ke liye galat shabd use hua hai. Ek baat clear rakho: <span class="de">Ich komme nicht morgen</span> galat nahi hai, woh Sondernegation hai aur uska matlab thoda alag hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Precise nicht placement is essential for expressing subtle meaning differences in Goethe B2 writing and speaking.' ],
      note: 'Memory trick: ask yourself "What do I want to negate?" Everything? → Satznegation → place nicht late. Only one word? → Sondernegation → place nicht directly before that word.',
      hinglish: '"nicht" ki sahi jagah Goethe B2 mein bahut kaam aati hai, kyunki isse tum chhote-chhote meaning differences saaf bata sakte ho.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ratgeber: Körpersprache im Großraumbüro lesen',
    titleEn: 'Guide: reading body language in the open-plan office',
    tokens: [
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Großraumbüro', role: 'plain', en: 'open-plan office', hi: 'बड़ा साझा दफ़्तर', type: 'Noun · neut.', why: 'das Großraumbüro (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Körpersprache', role: 'plain', en: 'body language', hi: 'शारीरिक भाषा', type: 'Noun · fem.', why: 'die Körpersprache (this chapter).' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'eindeutig', role: 'plain', en: 'unambiguous', hi: 'स्पष्ट', type: 'Adjective', why: 'eindeutig (this chapter).' },
      { w: 'nicht', role: 'r-negation', en: 'not (Satzklammer-Negation)', hi: 'नहीं (Satzklammer-Negation)', type: 'Negation', why: 'Sentence negation "nicht" stands late, right before the adjective it negates at Satzende — its correct position (this chapter).' },
      { w: '.', plain: true },
      { w: 'Kollegen', role: 'plain', en: 'colleagues', hi: 'सहयोगी', type: 'Noun · plural' },
      { w: 'senden', role: 'plain', en: 'send', hi: 'भेजते हैं', type: 'Verb · senden' },
      { w: 'ständig', role: 'plain', en: 'constantly', hi: 'लगातार', type: 'Adverb' },
      { w: 'Körpersignale', role: 'plain', en: 'body signals', hi: 'शारीरिक संकेत', type: 'Noun · plural', why: 'das Körpersignal (this chapter).' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'that', hi: 'जो', type: 'Relativpronomen · Akk.' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'nicht', role: 'r-negation', en: 'not (Verbnegation)', hi: 'नहीं (क्रिया-निषेध)', type: 'Negation', why: 'Here "nicht" negates the whole verb phrase (übersehen), so it stands right before the finite/infinitive verb — different position, different scope than the adjective negation above.' },
      { w: 'übersehen', role: 'plain', en: 'overlook (Satzende)', hi: 'अनदेखा करना (Satzende)', type: 'Verb · übersehen (Nebensatz, Satzende)' },
      { w: 'sollte', role: 'plain', en: 'should (Satzende)', hi: 'चाहिए (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Relativpronomen (indefinit)' },
      { w: 'unter', role: 'plain', en: 'under', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Druck', role: 'plain', en: 'pressure', hi: 'दबाव', type: 'Noun · masc.', why: 'der Druck (this chapter).' },
      { w: 'steht', role: 'plain', en: 'stands (Satzende)', hi: 'है (Satzende)', type: 'Verb · stehen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'wirkt', role: 'plain', en: 'seems', hi: 'लगता है', type: 'Verb · wirken' },
      { w: 'meist', role: 'plain', en: 'usually', hi: 'ज़्यादातर', type: 'Adverb' },
      { w: 'hektisch', role: 'plain', en: 'hectic', hi: 'हड़बड़ी में', type: 'Adjective', why: 'hektisch (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'nicht', role: 'r-negation', en: 'not (Adjektivnegation)', hi: 'नहीं', type: 'Negation', why: 'Again "nicht" sits directly before the adjective it negates (entspannt), not at the end of the whole clause.' },
      { w: 'entspannt', role: 'plain', en: 'relaxed (Satzende)', hi: 'शांत (Satzende)', type: 'Adjective', why: 'entspannt (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'gutes', role: 'plain', en: 'good', hi: 'अच्छा', type: 'Adjective' },
      { w: 'Beispiel', role: 'plain', en: 'example', hi: 'उदाहरण', type: 'Noun · neut.' },
      { w: 'liefern', role: 'plain', en: 'provide', hi: 'देते हैं', type: 'Verb · liefern' },
      { w: 'hitzige', role: 'plain', en: 'heated', hi: 'गरमागरम', type: 'Adjective', why: 'hitzig (this chapter).' },
      { w: 'Diskussionen', role: 'plain', en: 'discussions', hi: 'बहसें', type: 'Noun · plural' },
      { w: ':', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो', type: 'Relativpronomen' },
      { w: 'instinktiv', role: 'plain', en: 'instinctively', hi: 'सहज रूप से', type: 'Adverb', why: 'instinktiv (this chapter).' },
      { w: 'draufhaut', role: 'r-verb', en: 'bangs (on the table) (trennbar, Satzende)', hi: 'मेज़ पर मारता है (Satzende)', type: 'Verb · draufhauen (trennbar, Nebensatz, Satzende)', why: 'draufhauen (this chapter): a colourful separable verb for a strong physical reaction.' },
      { w: ',', plain: true },
      { w: 'wirkt', role: 'plain', en: 'seems', hi: 'लगता है', type: 'Verb · wirken' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adjective' },
      { w: 'destruktiv', role: 'plain', en: 'destructive', hi: 'विनाशकारी', type: 'Adjective', why: 'destruktiv (this chapter).' },
      { w: ',', plain: true },
      { w: 'nicht', role: 'r-negation', en: 'not (Satzklammer-Negation)', hi: 'नहीं', type: 'Negation', why: 'Sentence negation once more before the adjective it scopes over (konstruktiv), keeping the contrast tight.' },
      { w: 'konstruktiv', role: 'plain', en: 'constructive (Satzende)', hi: 'रचनात्मक (Satzende)', type: 'Adjective', why: 'konstruktiv (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'erfahrener', role: 'plain', en: 'experienced', hi: 'अनुभवी', type: 'Adjective' },
      { w: 'Teamleiter', role: 'plain', en: 'team leader', hi: 'टीम प्रमुख', type: 'Noun · masc.' },
      { w: 'stellt', role: 'plain', en: 'establishes', hi: 'बनाता है', type: 'Verb · feststellen', why: 'feststellen (this chapter).' },
      { w: 'lieber', role: 'plain', en: 'rather', hi: 'बेहतर', type: 'Adverb' },
      { w: 'gründlich', role: 'plain', en: 'thoroughly', hi: 'गहराई से', type: 'Adverb', why: 'gründlich (this chapter).' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Konsens', role: 'plain', en: 'consensus (Satzende)', hi: 'सहमति (Satzende)', type: 'Noun · masc.', why: 'der Konsens (this chapter).' },
      { w: 'fest', role: 'r-verb', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · feststellen' },
      { w: ',', plain: true },
      { w: 'statt', role: 'plain', en: 'instead of', hi: 'के बजाय', type: 'Präposition/Konjunktion' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Kritik', role: 'plain', en: 'criticism', hi: 'आलोचना', type: 'Noun · fem.', why: 'die Kritik (this chapter).' },
      { w: 'einfach', role: 'plain', en: 'simply', hi: 'बस', type: 'Adverb' },
      { w: 'einzustecken', role: 'plain', en: 'to take (Satzende)', hi: 'सहन करना (Satzende)', type: 'Verb · einstecken (Infinitiv mit zu, Satzende)', why: 'einstecken (this chapter): idiomatically, to take criticism without responding.' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'this way', hi: 'इस तरह', type: 'Adverb' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Last', role: 'plain', en: 'burden', hi: 'बोझ', type: 'Noun · fem.', why: 'die Last (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'niemanden', role: 'plain', en: 'no one (Satzende)', hi: 'किसी के लिए नहीं (Satzende)', type: 'Pronoun · Akk.' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'groß', role: 'plain', en: 'big (Satzende)', hi: 'बड़ा (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation · Satznegation', why: 'Satznegation: nicht at the front negates the whole sentence, not just one word (this chapter).' },
      { w: 'jeder', role: 'plain', en: 'everyone', hi: 'हर कोई', type: 'Pronoun · indefinite' },
      { w: 'erkennt', role: 'plain', en: 'recognizes', hi: 'पहचानता है', type: 'Verb · erkennen' },
      { w: 'diese', role: 'plain', en: 'these', hi: 'ये', type: 'Determiner' },
      { w: 'Signale', role: 'plain', en: 'signals', hi: 'संकेत', type: 'Noun · plural' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'aufmerksam', role: 'plain', en: 'attentive', hi: 'सतर्क', type: 'Adjective' },
      { w: 'bleibt', role: 'plain', en: 'stays', hi: 'रहता है', type: 'Verb · bleiben' },
      { w: ',', plain: true },
      { w: 'lernt', role: 'plain', en: 'learns', hi: 'सीखता है', type: 'Verb · lernen' },
      { w: 'sie', role: 'plain', en: 'them', hi: 'उन्हें', type: 'Pronoun · Akk.' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'deuten', role: 'plain', en: 'interpret (Satzende)', hi: 'समझना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'In the open-plan office, body language is often not ambiguous. Colleagues constantly send body signals that one should not overlook. Whoever is under pressure usually seems hectic and not relaxed. Heated discussions provide a good example: whoever instinctively bangs on the table seems quickly destructive, not constructive. An experienced team leader would rather thoroughly establish a consensus, instead of simply taking the criticism without responding. This way, the burden stays too big for no one. Not everyone recognizes these signals immediately, but whoever stays attentive quickly learns to interpret them.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_011_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nadine, du wirkst heute ziemlich angespannt im Büro.', en: 'Nadine, you seem pretty tense in the office today.' },
      { id: 'B2_011_L002', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich bin nicht wegen dir gestresst, sondern wegen des Termindrucks von oben.', en: 'I\'m not stressed because of you, but because of the deadline pressure from above.' },
      { id: 'B2_011_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ach, das habe ich total falsch verstanden, sorry.', en: 'Oh, I totally misunderstood that, sorry.' },
      { id: 'B2_011_L004', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kein Problem, ich hätte es früher klarstellen sollen.', en: 'No problem, I should have clarified it earlier.' }
    ],
    transcript: 'Nadine, du wirkst heute ziemlich angespannt im Büro. Ich bin nicht wegen dir gestresst, sondern wegen des Termindrucks von oben. Ach, das habe ich total falsch verstanden, sorry. Kein Problem, ich hätte es früher klarstellen sollen.',
    translation: 'Nadine, you seem pretty tense in the office today. I\'m not stressed because of you, but because of the deadline pressure from above. Oh, I totally misunderstood that, sorry. No problem, I should have clarified it earlier.',
    tokens: [
      { w: 'Nadine' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'wirkst' },
      { w: 'heute' },
      { w: 'ziemlich' },
      { w: 'angespannt' },
      { w: 'im' },
      { w: 'Büro' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'nicht' },
      { w: 'wegen' },
      { w: 'dir' },
      { w: 'gestresst' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'wegen' },
      { w: 'des' },
      { w: 'Termindrucks' },
      { w: 'von' },
      { w: 'oben' },
      { w: '.', plain: true },
      { w: 'Ach' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'habe' },
      { w: 'ich' },
      { w: 'total' },
      { w: 'falsch' },
      { w: 'verstanden' },
      { w: ',', plain: true },
      { w: 'sorry' },
      { w: '.', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hätte' },
      { w: 'es' },
      { w: 'früher' },
      { w: 'klarstellen' },
      { w: 'sollen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum ist Nadine gestresst?', qEn: 'Why is Nadine stressed?', options: ['wegen Timo', 'wegen des Termindrucks', 'wegen des Wetters', 'wegen der Kollegen'], optionsEn: ['because of Timo', 'because of the deadline pressure', 'because of the weather', 'because of the colleagues'], answer: 1,
        explain: '"Ich bin nicht wegen dir gestresst, sondern wegen des Termindrucks."' },
      { q: 'Was hat Timo missverstanden?', qEn: 'What did Timo misunderstand?', options: ['den Termin', 'den Grund für ihren Stress', 'ihre Pläne', 'ihre Position'], optionsEn: ['the appointment', 'the reason for her stress', 'her plans', 'her position'], answer: 1,
        explain: '"Das habe ich total falsch verstanden."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Deine Kollegin denkt, du seist wegen ihr gestresst. Korrigiere.", taskEn: "Your colleague thinks you're stressed because of her. Correct her.", de: "Ich bin nicht wegen dir gestresst, sondern wegen des Termindrucks.", en: "I'm not stressed because of you, but because of the deadline pressure." },
    { task: "Ein Kollege fragt, ob du das Großraumbüro nicht magst.", taskEn: "A colleague asks whether you dislike the open-plan office.", de: "Ich mag das Büro nicht, aber die Kollegen sehr.", en: "I don't like the office, but I like the colleagues a lot." },
    { task: "Deine Chefin fragt, ob du den Bericht nicht gelesen hast.", taskEn: "Your boss asks whether you haven't read the report.", de: "Ich habe nicht den Bericht gelesen, sondern nur die Zusammenfassung.", en: "I didn't read the report, only the summary." },
    { task: "Ein Kollege glaubt, du seist gegen ihn. Stell es klar.", taskEn: "A colleague thinks you're against him. Set it straight.", de: "Ich bin nicht dein Gegner, ich sehe es nur anders.", en: "I'm not your opponent, I just see it differently." },
    { task: "Eine Praktikantin fragt, ob sie eilig arbeiten soll.", taskEn: "An intern asks whether she should work fast.", de: "Arbeite nicht eilig, sondern gründlich.", en: "Don't work in a hurry, but thoroughly." },
    { task: "Rollenspiel: Ihr klärt ein Missverständnis im Büro.", taskEn: "Role-play: you clear up a misunderstanding in the office.", de: "Ich habe das nicht so gemeint. — Und ich war nicht sauer auf dich, sondern auf den Druck.", en: "I didn't mean it that way. — And I wasn't angry at you, but at the pressure." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short workplace email or report (six to eight sentences) clarifying a misunderstanding — using at least two examples of Satznegation and at least two examples of Sondernegation (with "sondern"), showing clearly what is and isn\'t true.',
    starters: ['Ich arbeite heute nicht …', 'Ich arbeite nicht …, sondern …', 'Der Druck wird nicht …', 'Nicht … , sondern …'],
    placeholder: 'Ich arbeite heute nicht im Großraumbüro. Ich arbeite nicht im Büro, sondern von zu Hause …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses Sondernegation correctly?',
      options: ['Ich fahre nicht heute, sondern morgen.', 'Ich fahre heute nicht.', 'Ich nicht fahre heute.'],
      answer: 0,
      explain: '"nicht" is placed directly before "heute", the negated element, followed by "sondern morgen".'
    },
    gap: {
      sentence: ['Anna hat das Buch ', ' gelesen.'],
      gaps: [ { answer: 'nicht', accepts: ['nicht'] } ],
      explain: 'Satznegation: "nicht" sits inside the sentence bracket, just before the final participle "gelesen".'
    },
    match: {
      q: 'Match each sentence to its negation type.',
      pairs: [
        { noun: 'Ich arbeite heute nicht.', art: 'Satznegation' },
        { noun: 'Ich fahre nicht heute, sondern morgen.', art: 'Sondernegation' },
        { noun: 'Wir können heute nicht kommen.', art: 'Satznegation' },
        { noun: 'Nicht Anna kommt, sondern Rohan.', art: 'Sondernegation' }
      ]
    },
    builder: {
      target: 'Build (Sondernegation): "I don\'t live in Berlin, but in Hamburg."',
      bank: ['Ich', 'wohne', 'nicht', 'in', 'Berlin', ',', 'sondern', 'in', 'Hamburg', '.'],
      answer: ['Ich', 'wohne', 'nicht', 'in', 'Berlin', ',', 'sondern', 'in', 'Hamburg', '.'],
      roles: { 'nicht': 'r-sonder', 'in Berlin': 'r-sonder', 'sondern': 'r-connector' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich kann nicht heute kommen.',
      right: 'Ich kann heute nicht kommen.',
      explain: 'If Satznegation (the whole action) is intended, "nicht" should be placed as late as possible, not right after the modal verb.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete for Satznegation: "Ich arbeite heute ___."', options: ['nicht', 'kein', 'keine'], answer: 0,
      explain: '"nicht" negates the whole statement here, placed at the end.' },
    { q: 'Which sentence shows Sondernegation?', options: ['Ich fahre nicht heute, sondern morgen.', 'Ich fahre heute nicht.', 'Ich werde nicht fahren.'], answer: 0,
      explain: 'Only "heute" is negated here, contrasted with "morgen" via "sondern".' },
    { q: 'Where does "nicht" go in "Anna hat das Buch [nicht] gelesen"?', options: ['Just before the final participle', 'At the very start', 'Right after "Anna"'], answer: 0,
      explain: '"nicht" sits inside the sentence bracket, just before "gelesen".' },
    { q: 'What changes between "Ich habe Maria nicht angerufen" and "Ich habe nicht Maria angerufen"?', options: ['Nothing changes', 'Who was called changes', 'The tense changes'], answer: 1,
      explain: 'The first says "I didn\'t call Maria"; the second implies "I called someone else, not Maria."' },
    { q: 'Which sentence contains an error?', options: ['Ich komme morgen nicht.', 'Ich nicht komme.', 'Wir können heute nicht kommen.'], answer: 1,
      explain: '"nicht" cannot go directly after the subject — it should be "Ich komme nicht."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-satz', html: 'Satznegation (whole-sentence negation) places "nicht" as late as possible — usually just before the final verb element.' },
    { c: 'r-sonder', html: 'Sondernegation (special negation) places "nicht" directly before the ONE element being negated, often followed by "sondern".' },
    { c: 'r-satz', html: 'The exact same words with "nicht" in a different position can mean something completely different — always ask "What am I actually negating?"' }
  ],
  revisionTips: [
    'Before placing "nicht", always ask: am I negating the whole sentence, or just one element?',
    'Practise minimal pairs (same words, different nicht position) until the meaning shift feels obvious.',
    'When correcting a misunderstanding, reach for "nicht ..., sondern ..." — it\'s the clearest way to show exactly what was wrong.'
  ]
};

window.CHAPTER = CHAPTER;
