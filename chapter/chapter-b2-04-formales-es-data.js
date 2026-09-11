/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 4
   "Formales es (Subjekt-es)" — the meaningless placeholder
   subject: weather (Es regnet), time (Es ist spät), es gibt,
   impersonal expressions (Es ist wichtig, ... zu ...). Does NOT
   introduce Korrelat-es, Objekt-es, or C1 discourse structures.
   IMPORTANT: dialogue uses ONLY Karla and Timo.
   Vocabulary source: uploaded chapter-4 list (34 items) — a
   film-award/screenwriting theme (Drehbuchpreis, Gangsterkino,
   Durchbruch, Elite, Flyer…) — a natural fit for impersonal
   opinion statements ("Es ist erstaunlich, dass...").
============================================================ */
const CHAPTER = {
  id: 'b2-04-formales-es',
  phase: 'B2 · Phase 1',
  number: 4,
  title: 'Formales es (Subjekt-es)',
  titleEn: 'Formal es (dummy subject)',
  description: 'Use the placeholder es as a grammatical subject with no meaning of its own: Es regnet, Es gibt, Es ist wichtig, zu ... — where English would have nothing at all.',
  xp: 340,
  time: 50,
  difficulty: 'Advanced',
  nextChapter: { number: 5, title: 'Korrelat-es (es freut mich, dass …)', titleEn: 'Correlative es (anticipatory es)' , href: 'chapter-b2-05-korrelat-es.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'A subject <em>with no meaning at all.</em>',
    intro: 'At a film-award ceremony, Karla and Timo marvel at the screenplay winner and the enthusiastic critics — every impersonal statement filled with the meaningless placeholder es: Es ist erstaunlich, dass…, es freut mich, dass…',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear formal es used in weather, time, es gibt, and impersonal expressions naturally'
    ],
    scene: 'Der Drehbuchpreis-Abend',
    femaleSpeakers: ['Karla'],
    dialogue: [
      { speaker: 'Karla', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es (dummy subject)', why: 'formal es fills the subject slot with no real meaning, often before dass-clauses or impersonal verbs (this chapter).', ex: 'Es ist erstaunlich, dass der Film gewonnen hat.', exEn: 'It is astonishing that the film won.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'erstaunlich', role: 'r-akkusativ', en: 'astonishing', hi: 'आश्चर्यजनक', pron: 'er-SHTOW-nlikh', type: 'Adjective', why: 'erstaunlich = astonishing (this chapter).', ex: 'Das ist erstaunlich.', exEn: 'That is astonishing.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Film', role: 'r-subject', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Drehbuchpreis', role: 'r-akkusativ', en: 'screenplay award', hi: 'पटकथा पुरस्कार', pron: 'DRAY-bookh-pryse', type: 'Noun · masc.', why: 'der Drehbuchpreis (this chapter).', ex: 'Er hat den Drehbuchpreis gewonnen.', exEn: 'He won the screenplay award.' },
        { w: 'gewonnen', role: 'r-verb', en: 'won', hi: 'जीता', pron: 'ge-VO-nen', type: 'Partizip II' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It is astonishing that the film won the screenplay award.', hi: 'Yeh aashcharyajanak hai ki film ne patkatha puraskaar jeeta.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'gibt', role: 'r-verb', en: 'there are', hi: 'हैं', pron: 'geept', type: 'Verb · geben', why: 'es gibt = there is/are, formal es (recycled A1).', ex: 'Es gibt viele gute Filme.', exEn: 'There are many good films.' },
        { w: 'viele', role: 'r-akkusativ', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Filme', role: 'r-akkusativ', en: 'films', hi: 'फ़िल्में', pron: 'FIL-muh', type: 'Noun · plural' },
        { w: 'dieses', role: 'r-akkusativ', en: 'this (neut.)', hi: 'इस', pron: 'DEE-zes', type: 'Determiner' },
        { w: 'Jahr', role: 'r-akkusativ', en: 'year', hi: 'साल', pron: 'yahr', type: 'Noun · neut.' },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'besonders', role: 'r-akkusativ', en: 'especially', hi: 'ख़ास तौर पर', pron: 'be-ZON-ders', type: 'Adverb' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, there are many good films this year, but this one is especially good.', hi: 'Haan, is saal kai achhi filmein hain, par yeh khaas taur par achhi hai.' },
      { speaker: 'Karla', tokens: [
        { w: 'Mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'fällt', role: 'r-verb', en: 'strikes', hi: 'ध्यान आता है', pron: 'felt', type: 'Verb · auffallen', lexicalUnit: 'auffallen', why: 'mir fällt auf = it strikes me, impersonal verb with dative (this chapter).', ex: 'Mir fällt auf, dass die Kritiker begeistert sind.', exEn: 'It strikes me that the critics are enthusiastic.' },
        { w: 'auf', role: 'r-verb', en: '(prefix of auffallen)', hi: '', pron: 'owf', type: 'Separable prefix', lexicalUnit: 'auffallen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Kritiker', role: 'r-subject', en: 'critics', hi: 'आलोचक', pron: 'KRI-ti-ker', type: 'Noun · plural' },
        { w: 'begeistert', role: 'r-subject', en: 'enthusiastic', hi: 'उत्साहित', pron: 'be-GYS-tert', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It strikes me that the critics are enthusiastic.', hi: 'Mujhe yeh dhyaan aata hai ki aalochak utsaahit hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen', why: 'es freut mich = it pleases me, impersonal verb (this chapter).', ex: 'Es freut mich, dass der Film erfolgreich ist.', exEn: 'It pleases me that the film is successful.' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Regisseur', role: 'r-subject', en: 'director', hi: 'निर्देशक', pron: 're-zhi-SÖR', type: 'Noun · masc.' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'bekannt', role: 'r-akkusativ', en: 'known', hi: 'प्रसिद्ध', pron: 'be-KANT', type: 'Adjective' },
        { w: 'geworden', role: 'r-verb', en: 'become', hi: 'हो गया', pron: 'ge-VOR-den', type: 'Partizip II · Satzende' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'है', pron: 'ist', type: 'Verb · sein (helper, Satzende)' },
        { w: '.', plain: true }
      ], en: 'It pleases me that the director has become so known.', hi: 'Mujhe khushi hai ki nirdeshak itna prasiddh ho gaya hai.' },
      { speaker: 'Karla', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'lohnt', role: 'r-verb', en: 'is worth', hi: 'लायक है', pron: 'LOHNT', type: 'Verb · sich lohnen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Film', role: 'r-akkusativ', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'sehen', role: 'r-verb', en: 'watch', hi: 'देखना', pron: 'ZAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Exactly! It is really worth watching the film.', hi: 'Bilkul! Film dekhna sach mein layak hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Sometimes German needs a subject even when there is no real subject — so it inserts <span class="de r-es">es</span>, a placeholder with NO meaning of its own: <span class="de">Es regnet.</span> <span class="de">Es gibt viele Probleme.</span> <span class="de">Es ist wichtig, Deutsch zu lernen.</span> This "es" never refers to anything — it just fills the empty subject position.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is FORMALES ES (SUBJEKT-ES) (B2 level): the meaningless placeholder subject "es" — required for weather verbs (Es regnet), time expressions (Es ist spät), the fixed structure "es gibt", and impersonal expressions (Es ist wichtig, ... zu ... / Es ist wichtig, dass ...). When a subordinate clause moves into subject position, the formal "es" disappears (Dass du lernst, ist wichtig). ' +
    'Do NOT expect Korrelat-es, Objekt-es, or C1 discourse structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Formal "es" is mandatory in weather/time/es-gibt/impersonal expressions unless a subordinate clause has already taken the subject position.\n' +
    '- Distinguish formal "es" (no meaning) from personal "es" (refers to a neuter noun) — do not confuse the two.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>es check:</b> one sentence on whether formal es was correctly included or correctly dropped in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use formal es in weather, time, es gibt, and impersonal expressions, and know exactly when it disappears. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the formal vs personal es comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: no real subject? Add "es".'
  },

  parserSentence: [
    { w: 'Es', role: 'r-es' }, { w: 'gibt', role: 'plain' },
    { w: 'viele', role: 'plain' }, { w: 'Probleme', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: es fills the subject position with no meaning of its own.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Karla and Timo discuss a film award ceremony, full of formal-es structures.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master weather/time/es-gibt/impersonal formal es, and when it disappears.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of formal-es structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch formal es in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Discuss weather, opinions, and recommendations using formal es naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and opinion texts using formal es correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill formal vs personal es, and adding/removing es correctly.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 340 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words — film-award vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Formal vs personal es drills, add/remove es exercises, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete formal-es reference — weather/time/es-gibt/impersonal, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es regnet.', text: 'Use formal es in weather expressions' },
    { de: 'Es ist spät.', text: 'Use formal es in time expressions' },
    { de: 'Es gibt …', text: 'Use the fixed es-gibt structure' },
    { de: 'Es ist wichtig, … zu …', text: 'Use formal es in impersonal expressions' },
    { de: 'Dass …, ist wichtig.', text: 'Know when formal es disappears' }
  ],

  // ---------- Vocabulary (34 items — full chapter-4 upload list) ----------
  vocab: [
    { de: 'äußerst', pos: 'adverb', level: 'B2', en: 'extremely, utmost', hi: 'अत्यधिक', ex: 'Es ist äußerst wichtig, ein Handwerk zu beherrschen.', exEn: 'It\'s extremely important to master a craft.', exHi: 'Kala mein maharat haasil karna atyadhik mahatvapurn hai.' },
    { de: 'auszeichnen', pos: 'verb', level: 'B2', en: 'to honour, award', hi: 'सम्मानित करना', ex: 'Es ist erstaunlich, einen jungen Regisseur auszeichnen zu sehen.', exEn: 'It\'s astonishing to see a young director being honoured.', exHi: 'Ek jawaan director ko samman dete dekhna aashcharyjanak hai.', conj: { praesens: 'zeichnet aus', praeteritum: 'zeichnete aus', perfekt: 'hat ausgezeichnet' } },
    { de: 'beantragen', pos: 'verb', level: 'B2', en: 'to apply for', hi: 'आवेदन करना', ex: 'Er hat ein Diplom beantragt.', exEn: 'He applied for a diploma.', exHi: 'Usne diploma ke liye aavedan kiya.', conj: { praesens: 'beantragt', praeteritum: 'beantragte', perfekt: 'hat beantragt' } },
    { de: 'Begleiter', art: 'der/die', gender: 'm/f', plural: 'Begleiter', pos: 'noun', level: 'B2', en: 'companion', hi: 'साथी', ex: 'Ihr Begleiter kam pünktlich.', exEn: 'Her companion arrived on time.', exHi: 'Uska saathi samay par aaya.' },
    { de: 'beherrschen', pos: 'verb', level: 'B2', en: 'to master, control', hi: 'महारत हासिल करना', ex: 'Es ist wichtig, das Drehbuchschreiben zu beherrschen.', exEn: 'It\'s important to master screenwriting.', exHi: 'Patkatha lekhan mein maharat haasil karna mahatvapurn hai.', conj: { praesens: 'beherrscht', praeteritum: 'beherrschte', perfekt: 'hat beherrscht' } },
    { de: 'beschriften', pos: 'verb', level: 'B2', en: 'to label, inscribe', hi: 'लेबल लगाना', ex: 'Der Flyer ist deutlich beschriftet.', exEn: 'The flyer is clearly labeled.', exHi: 'Flyer par saaf label lagaya hai.', conj: { praesens: 'beschriftet', praeteritum: 'beschriftete', perfekt: 'hat beschriftet' } },
    { de: 'Blog', art: 'der', gender: 'm', plural: 'Blogs', pos: 'noun', level: 'B2', en: 'blog', hi: 'ब्लॉग', ex: 'Er schreibt einen Blog über Filme.', exEn: 'He writes a blog about films.', exHi: 'Woh filmon ke baare mein blog likhta hai.' },
    { de: 'breit', pos: 'adjective', level: 'B2', en: 'wide, broad', hi: 'चौड़ा', ex: 'Der Film hat ein breites Publikum.', exEn: 'The film has a broad audience.', exHi: 'Film ka darshak samuh chaudaa hai.' },
    { de: 'bürgerlich', pos: 'adjective', level: 'B2', en: 'middle-class, civic', hi: 'मध्यमवर्गीय', ex: 'Viele Regisseure entstammen einem bürgerlichen Elternhaus.', exEn: 'Many directors descend from a middle-class family home.', exHi: 'Kai director madhyamvarg ke pariwaar se aate hain.' },
    { de: 'Desinteresse', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'lack of interest', hi: 'रुचि की कमी', ex: 'Dass so viel Desinteresse herrscht, ist schade.', exEn: 'That there is so much lack of interest is a pity.', exHi: 'Itni ruchi ki kami hona afsos ki baat hai.' },
    { de: 'Diplom', art: 'das', gender: 'n', plural: 'Diplome', pos: 'noun', level: 'B2', en: 'diploma', hi: 'डिप्लोमा', ex: 'Er hat ein Diplom beantragt.', exEn: 'He applied for a diploma.', exHi: 'Usne diploma ke liye aavedan kiya.' },
    { de: 'disqualifizieren', pos: 'verb', level: 'B2', en: 'to disqualify', hi: 'अयोग्य ठहराना', ex: 'Der Fehler disqualifizierte ihn.', exEn: 'The mistake disqualified him.', exHi: 'Galti ne use ayogya thehraaya.', conj: { praesens: 'disqualifiziert', praeteritum: 'disqualifizierte', perfekt: 'hat disqualifiziert' } },
    { de: 'Drehbuchpreis', art: 'der', gender: 'm', plural: 'Drehbuchpreise', pos: 'noun', level: 'B2', en: 'screenplay award', hi: 'पटकथा पुरस्कार', ex: 'Es gibt heute einen Drehbuchpreis für das beste Gangsterkino.', exEn: 'There is a screenplay award today for the best gangster cinema.', exHi: 'Aaj sabse achhe gangster cinema ke liye ek patkatha puraskaar hai.' },
    { de: 'Durchbruch', art: 'der', gender: 'm', plural: 'Durchbrüche', pos: 'noun', level: 'B2', en: 'breakthrough', hi: 'सफलता', ex: 'Gelegentlich gibt es einen echten Durchbruch.', exEn: 'Occasionally there is a real breakthrough.', exHi: 'Kabhi-kabhi ek asli safalta milti hai.' },
    { de: 'einheitlich', pos: 'adjective', level: 'B2', en: 'uniform, consistent', hi: 'एकसमान', ex: 'Die Regeln sind einheitlich.', exEn: 'The rules are consistent.', exHi: 'Niyam eksamaan hain.' },
    { de: 'Elite', art: 'die', gender: 'f', plural: 'Eliten', pos: 'noun', level: 'B2', en: 'elite', hi: 'अभिजात वर्ग', ex: 'Es liegt mir fern zu behaupten, dass nur die Elite gute Drehbücher schreibt.', exEn: 'It\'s far from my mind to claim that only the elite writes good screenplays.', exHi: 'Yeh dava karna mujhse door hai ki sirf abhijaat varg hi achhi patkathaayein likhta hai.' },
    { de: 'entscheidend', pos: 'adjective', level: 'B2', en: 'decisive, crucial', hi: 'निर्णायक', ex: 'Es entspricht einer entscheidenden Faustregel.', exEn: 'It corresponds to a decisive rule of thumb.', exHi: 'Yeh ek nirnaayak saamaanya niyam se mel khaata hai.' },
    { de: 'entsprechend', pos: 'adjective', level: 'B2', en: 'corresponding, accordingly', hi: 'तत्संबंधी', ex: 'Er hat die entsprechenden Unterlagen dabei.', exEn: 'He has the corresponding documents with him.', exHi: 'Uske paas tatsambandhi kaagazaat hain.' },
    { de: 'entstammen', pos: 'verb', level: 'B2', en: 'to descend, originate from', hi: 'निकलना, से आना', ex: 'Fälschlicherweise entstammen viele Regisseure einem bürgerlichen Elternhaus.', exEn: 'Mistakenly, many directors are said to descend from a middle-class family home.', exHi: 'Galti se, kai directoron ko madhyamvarg ke pariwaar se maana jaata hai.', conj: { praesens: 'entstammt', praeteritum: 'entstammte', perfekt: 'ist entstammt' } },
    { de: 'entwickeln', pos: 'verb', level: 'B2', en: 'to develop', hi: 'विकसित करना', ex: 'Er entwickelt ein neues Drehbuch.', exEn: 'He\'s developing a new screenplay.', exHi: 'Woh ek naya patkatha vikasit kar raha hai.', conj: { praesens: 'entwickelt', praeteritum: 'entwickelte', perfekt: 'hat entwickelt' } },
    { de: 'ermöglichen', pos: 'verb', level: 'B2', en: 'to enable, make possible', hi: 'संभव बनाना', ex: 'Hoffentlich ermöglicht uns der Veranstalter noch einen guten Platz.', exEn: 'Hopefully the organizer still enables us to get a good seat.', exHi: 'Ummeed hai ki aayojak humein achhi jagah dene mein saksham banaayega.', conj: { praesens: 'ermöglicht', praeteritum: 'ermöglichte', perfekt: 'hat ermöglicht' } },
    { de: 'erstaunlich', pos: 'adjective', level: 'B2', en: 'astonishing', hi: 'आश्चर्यजनक', ex: 'Es ist erstaunlich, so einen jungen Regisseur auszeichnen zu sehen.', exEn: 'It\'s astonishing to see such a young director being honoured.', exHi: 'Aise jawaan director ko samman dete dekhna aashcharyjanak hai.' },
    { de: 'fälschlicherweise', pos: 'adverb', level: 'B2', en: 'mistakenly, wrongly', hi: 'ग़लती से', ex: 'Fälschlicherweise entstammen viele Regisseure einem bürgerlichen Elternhaus.', exEn: 'Mistakenly, many directors are said to descend from a middle-class family home.', exHi: 'Galti se, kai directoron ko madhyamvarg ke pariwaar se maana jaata hai.' },
    { de: 'farbenfroh', pos: 'adjective', level: 'B2', en: 'colourful', hi: 'रंगीन', ex: 'Der Flyer ist sehr farbenfroh.', exEn: 'The flyer is very colourful.', exHi: 'Flyer bahut rangeen hai.' },
    { de: 'Faustregel', art: 'die', gender: 'f', plural: 'Faustregeln', pos: 'noun', level: 'B2', en: 'rule of thumb', hi: 'सामान्य नियम', ex: 'Es entspricht einer entscheidenden Faustregel.', exEn: 'It corresponds to a decisive rule of thumb.', exHi: 'Yeh ek nirnaayak saamaanya niyam se mel khaata hai.' },
    { de: 'fernliegen', pos: 'verb', level: 'B2', en: 'to be far from one\'s mind', hi: 'दूर होना', ex: 'Es liegt mir fern, das zu behaupten.', exEn: 'It\'s far from my mind to claim that.', exHi: 'Yeh dava karna mujhse door hai.', conj: { praesens: 'liegt fern', praeteritum: 'lag fern', perfekt: 'hat fernegelegen' } },
    { de: 'Fernweh', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'wanderlust', hi: 'यात्रा की चाह', ex: 'Der Film weckte in ihr Fernweh.', exEn: 'The film awakened wanderlust in her.', exHi: 'Film ne uske andar yatra ki chaah jagaayi.' },
    { de: 'Feuerholz', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'firewood', hi: 'जलाने की लकड़ी', ex: 'Sie sammelten Feuerholz für den Abend.', exEn: 'They collected firewood for the evening.', exHi: 'Unhone shaam ke liye lakadi jama ki.' },
    { de: 'Flyer', art: 'der', gender: 'm', plural: 'Flyer', pos: 'noun', level: 'B2', en: 'flyer', hi: 'फ़्लायर', ex: 'Der Flyer ist deutlich beschriftet.', exEn: 'The flyer is clearly labeled.', exHi: 'Flyer par saaf label lagaya hai.' },
    { de: 'Gangsterkino', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'gangster cinema', hi: 'गैंगस्टर सिनेमा', ex: 'Es gibt heute einen Drehbuchpreis für das beste Gangsterkino.', exEn: 'There is a screenplay award today for the best gangster cinema.', exHi: 'Aaj sabse achhe gangster cinema ke liye ek patkatha puraskaar hai.' },
    { de: 'Gegenüber', art: 'das', gender: 'n', plural: 'Gegenüber', pos: 'noun', level: 'B2', en: 'counterpart, person opposite', hi: 'सामने वाला व्यक्ति', ex: 'Ihr Gegenüber lächelte freundlich.', exEn: 'The person opposite her smiled kindly.', exHi: 'Uske saamne waala vyakti mitrata se muskaraaya.' },
    { de: 'gelegentlich', pos: 'adjective', level: 'B2', en: 'occasional, occasionally', hi: 'कभी-कभी', ex: 'Gelegentlich gibt es einen echten Durchbruch.', exEn: 'Occasionally there is a real breakthrough.', exHi: 'Kabhi-kabhi ek asli safalta milti hai.' },
    { de: 'Gemüsegeschäft', art: 'das', gender: 'n', plural: 'Gemüsegeschäfte', pos: 'noun', level: 'B2', en: 'greengrocer\'s', hi: 'सब्ज़ी की दुकान', ex: 'Das Gemüsegeschäft ist um die Ecke.', exEn: 'The greengrocer\'s is around the corner.', exHi: 'Sabzi ki dukaan kone par hai.' },
    { de: 'Geste', art: 'die', gender: 'f', plural: 'Gesten', pos: 'noun', level: 'B2', en: 'gesture', hi: 'इशारा', ex: 'Das war eine freundliche Geste.', exEn: 'That was a friendly gesture.', exHi: 'Yeh ek mitratapoorn ishaara tha.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist formales "es"?',
      body: [ 'Sometimes German needs a subject even though there is no real subject. German inserts "es" — a placeholder with NO meaning of its own.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Es regnet.</span>'],
          ['<span class="de">Es gibt viele Probleme.</span>']
        ]
      },
      hinglish: 'Kabhi German ko subject chahiye hota hai jab koi asli subject nahi hota. German "es" daalta hai — ek placeholder jiska koi matlab nahi.'
    },
    {
      title: 'Wetterausdrücke',
      body: [ 'Weather expressions almost always require formal "es".' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es regnet. Es schneit. Es friert. Es hagelt. Es donnert. Es blitzt. Es wird warm. Es ist windig.</span>']
        ]
      },
      hinglish: 'Weather expressions mein hamesha formal "es" chahiye hota hai.'
    },
    {
      title: 'Zeitausdrücke',
      body: [ 'Time expressions also require formal "es".' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es ist spät. Es ist Montag. Es ist zehn Uhr. Es wird dunkel. Es ist schon Mitternacht.</span>']
        ]
      },
      hinglish: 'Time expressions mein bhi formal "es" chahiye hota hai.'
    },
    {
      title: 'es gibt',
      body: [ 'One of the most common German structures — students must memorize it.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es gibt viele Studenten. Es gibt ein Problem. Es gibt keine Lösung.</span>']
        ]
      },
      hinglish: 'Sabse common German structures mein se ek — yaad karna zaroori hai.'
    },
    {
      title: 'Unpersönliche Ausdrücke',
      body: [ 'The infinitive or dass-clause is the real content; "es" only holds the subject position until it arrives.' ],
      note: 'Strictly speaking this use has its own name \u2014 <b>Korrelat-es</b> \u2014 because a real clause does follow, and the "es" vanishes if that clause moves to the front. Chapter 5 covers it in full. The weather, time and <i>es gibt</i> cases above are different: there no clause ever follows, so the "es" can never disappear.',
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Es ist wichtig, Deutsch zu lernen.</span>'],
          ['<span class="de">Es macht Spaß, Deutsch zu sprechen.</span>']
        ]
      },
      hinglish: 'Asli baat Infinitiv ya dass-clause mein hai; "es" sirf subject ki jagah pakad kar rakhta hai jab tak woh clause aa na jaaye. Is use ka apna naam hai \u2014 <b>Korrelat-es</b> \u2014 aur Chapter 5 mein ise detail mein dekhoge. Weather, time aur <i>es gibt</i> wale cases isse alag hain, kyunki wahan koi clause aati hi nahi, isliye wahan "es" kabhi gayab nahi hota.'
    },
    {
      title: 'Wann verschwindet "es"?',
      body: [ 'When the subordinate clause itself moves into the subject position, the formal "es" disappears.' ],
      table: {
        head: ['With es', 'es disappears'],
        rows: [
          ['<span class="de">Es ist wichtig, dass du lernst.</span>', '<span class="de">Dass du lernst, ist wichtig.</span>']
        ]
      },
      hinglish: 'Jab subordinate clause khud subject position mein aati hai, formal "es" gayab ho jaata hai.'
    },
    {
      title: 'Formales "es" vs Personal "es"',
      body: [ 'Formal es refers to nothing. Personal es refers back to a specific neuter noun.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Formal (kein Bezug)', '<span class="de">Es regnet.</span>'],
          ['Personal (bezieht sich auf "Auto")', '<span class="de">Das Auto? Es ist neu.</span>']
        ]
      },
      hinglish: 'Formal es kisi cheez ka reference nahi karta. Personal es kisi khaas neuter noun ki taraf ishaara karta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from dropping the mandatory "es", or misplacing it after a moved clause.' ],
      mistakes: [
        { wrong: 'Regnet heute.', right: 'Es regnet heute.', why: 'Weather expressions always require "es" — never drop it.' },
        { wrong: 'Ist wichtig Deutsch zu lernen.', right: 'Es ist wichtig, Deutsch zu lernen.', why: 'Impersonal expressions always require the formal "es".' },
        { wrong: 'Gibt viele Probleme.', right: 'Es gibt viele Probleme.', why: '"es gibt" is a fixed structure — "es" is mandatory.' },
        { wrong: 'Dass du lernst, es ist wichtig.', right: 'Dass du lernst, ist wichtig.', why: 'Once the dass-clause takes the subject position, "es" disappears entirely.' },
        { wrong: 'Es das Auto ist neu.', right: 'Das Auto ist neu. Es ist neu.', why: 'Personal "es" replaces the noun — it can\'t appear alongside it in the same clause.' }
      ],
      hinglish: 'Yeh galtiyaan mandatory "es" chhod dene se, ya moved clause ke baad galat jagah rakhne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Formal es appears constantly in Goethe B2 newspapers, presentations, and formal writing.' ],
      note: 'Quick check: is there no real subject (weather, time, es gibt, impersonal)? Add "es". Has a subordinate clause already taken the subject position? Then "es" disappears.',
      hinglish: 'Goethe B2 newspapers, presentations aur formal writing mein formal es lagataar aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Blogeintrag: Aufstieg im deutschen Gangsterkino',
    titleEn: 'Blog post: rise in German gangster cinema',
    tokens: [
      { w: 'Es', role: 'r-subject', en: 'there (formales es)', hi: 'यह (औपचारिक es)', type: 'Pronoun · formales es', why: 'Es gibt = there is/are: es is the dummy grammatical subject (this chapter).' },
      { w: 'gibt', role: 'plain', en: 'is', hi: 'है', type: 'Verb · es gibt' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Deutschland', role: 'plain', en: 'Germany', hi: 'जर्मनी', type: 'Name' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'kleine', role: 'plain', en: 'small', hi: 'छोटा', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'loyale', role: 'plain', en: 'loyal', hi: 'वफ़ादार', type: 'Adjective' },
      { w: 'Filmszene', role: 'plain', en: 'film scene', hi: 'फ़िल्म जगत', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'that', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'dem', role: 'plain', en: 'to the (neut. dat.)', hi: 'को', type: 'Article · Dat.' },
      { w: 'Gangsterkino', role: 'plain', en: 'gangster cinema', hi: 'गैंगस्टर सिनेमा', type: 'Noun · neut.', why: 'das Gangsterkino (this chapter).' },
      { w: 'verschrieben', role: 'plain', en: 'devoted (Satzende)', hi: 'समर्पित (Satzende)', type: 'Verb · sich verschreiben (Partizip II)' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'meinem', role: 'plain', en: 'my (masc. dat.)', hi: 'मेरे', type: 'Possessivartikel · Dat.' },
      { w: 'Blog', role: 'plain', en: 'blog', hi: 'ब्लॉग', type: 'Noun · masc.', why: 'der Blog (this chapter).' },
      { w: 'schreibe', role: 'plain', en: 'write', hi: 'लिखता हूँ', type: 'Verb · schreiben' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'सालों', type: 'Noun · plural' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'junge', role: 'plain', en: 'young', hi: 'युवा', type: 'Adjective' },
      { w: 'Regisseure', role: 'plain', en: 'directors', hi: 'निर्देशक', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'trotz', role: 'plain', en: 'despite', hi: 'के बावजूद', type: 'Preposition · Genitiv' },
      { w: 'des', role: 'plain', en: 'the (neut. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Desinteresses', role: 'plain', en: 'disinterest (gen.)', hi: 'उदासीनता का', type: 'Noun · neut.', why: 'das Desinteresse (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'großen', role: 'plain', en: 'big', hi: 'बड़े', type: 'Adjective · Genitiv' },
      { w: 'Studios', role: 'plain', en: 'studios', hi: 'स्टूडियो', type: 'Noun · plural' },
      { w: 'an', role: 'plain', en: 'to', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel · Dat.' },
      { w: 'Projekten', role: 'plain', en: 'projects', hi: 'परियोजनाओं', type: 'Noun · plural' },
      { w: 'festhalten', role: 'plain', en: 'hold on (Satzende)', hi: 'डटे रहते हैं (Satzende)', type: 'Verb · festhalten (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (formales es)', hi: 'यह (औपचारिक es)', type: 'Pronoun · formales es', why: 'Es ist + adjective + wie-Satz: es fills the subject slot while the real content follows (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'erstaunlich', role: 'plain', en: 'astonishing', hi: 'हैरान करने वाला', type: 'Adjective', why: 'erstaunlich (this chapter).' },
      { w: ',', plain: true },
      { w: 'wie', role: 'r-connector', en: 'how', hi: 'कैसे', type: 'Konjunktion · wie' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Talente', role: 'plain', en: 'talents', hi: 'प्रतिभाएँ', type: 'Noun · plural' },
      { w: 'ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Preposition · Akk.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Diplom', role: 'plain', en: 'diploma', hi: 'डिप्लोमा', type: 'Noun · neut.', why: 'das Diplom (this chapter).' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Filmhochschule', role: 'plain', en: 'film school', hi: 'फ़िल्म स्कूल', type: 'Noun · fem.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Durchbruch', role: 'plain', en: 'breakthrough (Satzende)', hi: 'सफलता (Satzende)', type: 'Noun · masc.', why: 'der Durchbruch (this chapter).' },
      { w: 'schaffen', role: 'plain', en: 'achieve (Satzende)', hi: 'हासिल करते हैं (Satzende)', type: 'Verb · schaffen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Neulich', role: 'plain', en: 'recently', hi: 'हाल ही में', type: 'Adverb' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Freund', role: 'plain', en: 'friend', hi: 'दोस्त', type: 'Noun · masc.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'mir', role: 'plain', en: 'mine', hi: 'मेरा', type: 'Pronoun · Dat.' },
      { w: 'völlig', role: 'plain', en: 'completely', hi: 'पूरी तरह', type: 'Adverb' },
      { w: 'überraschend', role: 'plain', en: 'surprisingly', hi: 'आश्चर्यजनक रूप से', type: 'Adverb' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Drehbuchpreis', role: 'plain', en: 'screenplay award (Satzende)', hi: 'पटकथा पुरस्कार (Satzende)', type: 'Noun · masc.', why: 'der Drehbuchpreis (this chapter).' },
      { w: 'gewonnen', role: 'plain', en: 'won (Satzende)', hi: 'जीता (Satzende)', type: 'Verb · gewinnen (Partizip II)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (formales es)', hi: 'यह (औपचारिक es)', type: 'Pronoun · formales es', why: 'Es fällt ihm leicht = it is easy for him: another fixed formales-es expression (this chapter).' },
      { w: 'fällt', role: 'plain', en: 'is (easy)', hi: 'आसान है', type: 'Verb · leichtfallen' },
      { w: 'ihm', role: 'plain', en: 'for him', hi: 'उसके लिए', type: 'Pronoun · Dat.' },
      { w: 'offenbar', role: 'plain', en: 'apparently', hi: 'जाहिर तौर पर', type: 'Adverb' },
      { w: 'leicht', role: 'plain', en: 'easy', hi: 'आसान', type: 'Adjective', why: 'leichtfallen (this chapter).' },
      { w: ',', plain: true },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'tristen', role: 'plain', en: 'dreary', hi: 'नीरस', type: 'Adjective' },
      { w: 'Alltag', role: 'plain', en: 'everyday life', hi: 'रोज़मर्रा की ज़िंदगी', type: 'Noun · masc.' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Kleinstadt', role: 'plain', en: 'small town', hi: 'छोटे शहर', type: 'Noun · fem.' },
      { w: 'farbenfroh', role: 'plain', en: 'colourfully', hi: 'रंगीन ढंग से', type: 'Adjective', why: 'farbenfroh (this chapter).' },
      { w: 'erzählte', role: 'plain', en: 'told', hi: 'कही गई', type: 'Verb · Partizip II' },
      { w: 'Geschichten', role: 'plain', en: 'stories (Satzende)', hi: 'कहानियाँ (Satzende)', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'entwickeln', role: 'plain', en: 'develop (Satzende)', hi: 'विकसित करना (Satzende)', type: 'Verb · Infinitiv mit zu (Satzende)', why: 'entwickeln (this chapter).' },
      { w: '.', plain: true },
      { w: 'Als', role: 'plain', en: 'as a', hi: 'रूप में', type: 'Preposition' },
      { w: 'Faustregel', role: 'plain', en: 'rule of thumb', hi: 'अंगूठे का नियम', type: 'Noun · fem.', why: 'die Faustregel (this chapter).' },
      { w: 'gilt', role: 'plain', en: 'holds', hi: 'लागू होता है', type: 'Verb · gelten' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Branche', role: 'plain', en: 'industry', hi: 'उद्योग', type: 'Noun · fem.' },
      { w: ':', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it (formales es)', hi: 'यह (औपचारिक es)', type: 'Pronoun · formales es', why: 'Es kommt an auf = it depends on: another fixed formales-es idiom (this chapter).' },
      { w: 'kommt', role: 'plain', en: 'depends', hi: 'निर्भर करता है', type: 'Verb · ankommen' },
      { w: 'weniger', role: 'plain', en: 'less', hi: 'कम', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Herkunft', role: 'plain', en: 'origin', hi: 'मूल', type: 'Noun · fem.' },
      { w: 'als', role: 'plain', en: 'than', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Ausdauer', role: 'plain', en: 'perseverance', hi: 'दृढ़ता', type: 'Noun · fem.' },
      { w: 'an', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · ankommen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Fälschlicherweise', role: 'plain', en: 'mistakenly', hi: 'ग़लती से', type: 'Adverb', why: 'fälschlicherweise (this chapter).' },
      { w: 'glauben', role: 'plain', en: 'believe', hi: 'मानते हैं', type: 'Verb · glauben' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'Absolventen', role: 'plain', en: 'graduates', hi: 'स्नातक', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'bürgerlichen', role: 'plain', en: 'upper-middle-class', hi: 'उच्च मध्यवर्गीय', type: 'Adjective', why: 'bürgerlich (this chapter).' },
      { w: 'Elitefamilien', role: 'plain', en: 'elite families', hi: 'कुलीन परिवारों', type: 'Noun · plural', why: 'die Elite (this chapter).' },
      { w: 'hätten', role: 'plain', en: 'would have (Satzende)', hi: 'रखते हैं (Satzende)', type: 'Verb · Konjunktiv II (Satzende)' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Chance', role: 'plain', en: 'chance', hi: 'मौक़ा', type: 'Noun · fem.' },
      { w: '–', plain: true },
      { w: 'dieser', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Fall', role: 'plain', en: 'case', hi: 'मामला', type: 'Noun · masc.' },
      { w: 'beweist', role: 'plain', en: 'proves', hi: 'साबित करता है', type: 'Verb · beweisen' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Gegenteil', role: 'plain', en: 'opposite', hi: 'विपरीत', type: 'Noun · neut.', why: 'das Gegenüber (this chapter, related word).' },
      { w: '.', plain: true }
    ],
    translation: 'There is a small but loyal film scene in Germany devoted to gangster cinema. On my blog I have written for years about young directors who hold on to their projects despite the big studios\' disinterest. It is astonishing how many talents achieve their breakthrough without a diploma from a film school. Recently a friend of mine surprisingly won a screenplay award. It apparently comes easily to him to develop colourfully told stories out of the dreary everyday life of a small town. As a rule of thumb in the industry: it depends less on origin than on perseverance. Many mistakenly believe only graduates from upper-middle-class elite families have a chance — this case proves the opposite.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_004_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Karla, es überrascht mich wirklich, dass dieses Drehbuch gewonnen hat.', en: 'Karla, it really surprises me that this screenplay won.' },
      { id: 'B2_004_L002', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Mich nicht — es war von Anfang an klar, dass die Kritiker es lieben würden.', en: 'Not me — it was clear from the start that the critics would love it.' },
      { id: 'B2_004_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Es freut mich trotzdem für die Autorin, sie hat lange darauf gewartet.', en: 'I\'m happy for the writer anyway, she waited a long time for this.' },
      { id: 'B2_004_L004', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es stimmt, sie hat es wirklich verdient.', en: 'That\'s true, she really deserved it.' }
    ],
    transcript: 'Karla, es überrascht mich wirklich, dass dieses Drehbuch gewonnen hat. Mich nicht — es war von Anfang an klar, dass die Kritiker es lieben würden. Es freut mich trotzdem für die Autorin, sie hat lange darauf gewartet. Es stimmt, sie hat es wirklich verdient.',
    translation: 'Karla, it really surprises me that this screenplay won. Not me — it was clear from the start that the critics would love it. I\'m happy for the writer anyway, she waited a long time for this. That\'s true, she really deserved it.',
    tokens: [
      { w: 'Karla' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'überrascht' },
      { w: 'mich' },
      { w: 'wirklich' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'dieses' },
      { w: 'Drehbuch' },
      { w: 'gewonnen' },
      { w: 'hat' },
      { w: '.', plain: true },
      { w: 'Mich' },
      { w: 'nicht' },
      { w: '—', plain: true },
      { w: 'es' },
      { w: 'war' },
      { w: 'von' },
      { w: 'Anfang' },
      { w: 'an' },
      { w: 'klar' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'die' },
      { w: 'Kritiker' },
      { w: 'es' },
      { w: 'lieben' },
      { w: 'würden' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'freut' },
      { w: 'mich' },
      { w: 'trotzdem' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Autorin' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'hat' },
      { w: 'lange' },
      { w: 'darauf' },
      { w: 'gewartet' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'stimmt' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'hat' },
      { w: 'es' },
      { w: 'wirklich' },
      { w: 'verdient' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum ist Karla nicht überrascht?', qEn: 'Why isn\'t Karla surprised?', options: ['Sie kennt die Autorin nicht.', 'Es war von Anfang an klar.', 'Sie hat den Film nicht gesehen.', 'Der Preis war ein Fehler.'], optionsEn: ['She doesn\'t know the author.', 'It was clear from the start.', 'She hasn\'t seen the film.', 'The price was a mistake.'], answer: 1,
        explain: '"Es war von Anfang an klar, dass die Kritiker es lieben würden."' },
      { q: 'Wie findet Timo den Preis für die Autorin?', qEn: 'How does Timo feel about the writer winning?', options: ['neidisch', 'es freut ihn', 'gleichgültig', 'enttäuscht'], optionsEn: ['envious', 'he is pleased', 'indifferent', 'disappointed'], answer: 1,
        explain: '"Es freut mich trotzdem für die Autorin."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Ein Freund erzählt, welches Drehbuch gewonnen hat. Reagiere.", taskEn: "A friend says which screenplay won. React.", de: "Es überrascht mich wirklich, dass dieses Drehbuch gewonnen hat.", en: "It really surprises me that this screenplay won." },
    { task: "Er sagt, es sei von Anfang an klar gewesen. Antworte.", taskEn: "He says it was clear from the start. Answer.", de: "Es war von Anfang an klar, dass die Kritiker es lieben würden.", en: "It was clear from the start that the critics would love it." },
    { task: "Deine Kollegin fragt, wie das Wetter beim Dreh war.", taskEn: "Your colleague asks what the weather was like during filming.", de: "Es war äußerst kalt, und es hat drei Tage geregnet.", en: "It was extremely cold, and it rained for three days." },
    { task: "Eine Bekannte fragt, ob sich das Diplom lohnt.", taskEn: "An acquaintance asks whether the diploma is worth it.", de: "Es lohnt sich, weil es entscheidend für die Bewerbung ist.", en: "It's worth it, because it's decisive for the application." },
    { task: "Ein Kollege fragt, wie viele beim Blog mitmachen.", taskEn: "A colleague asks how many people contribute to the blog.", de: "Es gibt mittlerweile breite Beteiligung, es schreiben zwanzig Leute.", en: "There's broad participation now, twenty people write for it." },
    { task: "Rollenspiel: Ihr besprecht die Preisverleihung.", taskEn: "Role-play: you discuss the award ceremony.", de: "Es freut mich, dass der Drehbuchpreis vergeben wurde. — Es ärgert mich, dass die Elite alles gewinnt.", en: "I'm glad the screenplay prize was awarded. — It annoys me that the elite wins everything." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion or report (six to eight sentences) about an event or the weather — using at least one weather expression, one es-gibt structure, and one impersonal expression with formal es, plus one sentence where es disappears because a dass-clause is the subject.',
    starters: ['Es regnet …', 'Es gibt …', 'Es ist wichtig, … zu …', 'Dass …, ist …'],
    placeholder: 'Es gibt heute einen wichtigen Drehbuchpreis. Es regnet draußen, aber im Saal ist es warm …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ regnet heute stark."',
      options: ['Es', 'Das', 'Er'],
      answer: 0,
      explain: 'Weather expressions require formal "es".'
    },
    gap: {
      sentence: ['', ' gibt viele Probleme.'],
      gaps: [ { answer: 'Es', accepts: ['Es'] } ],
      explain: '"es gibt" is a fixed structure — "es" is mandatory.'
    },
    match: {
      q: 'Match each type of formal es to its example.',
      pairs: [
        { noun: 'Wetter', art: 'Es regnet.' },
        { noun: 'Zeit', art: 'Es ist spät.' },
        { noun: 'es gibt', art: 'Es gibt viele Bücher.' },
        { noun: 'Unpersönlich', art: 'Es ist wichtig, ... zu ...' }
      ]
    },
    builder: {
      target: 'Build: "There is a screenplay award today."',
      bank: ['Es', 'gibt', 'heute', 'einen', 'Drehbuchpreis', '.'],
      answer: ['Es', 'gibt', 'heute', 'einen', 'Drehbuchpreis', '.'],
      roles: { 'Es': 'r-es', 'gibt': 'r-es' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Dass du lernst, es ist wichtig.',
      right: 'Dass du lernst, ist wichtig.',
      explain: 'Once the dass-clause takes the subject position, formal "es" disappears entirely.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ ist schon Mitternacht."', options: ['Es', 'Das', 'Sie'], answer: 0,
      explain: 'Time expressions require formal "es".' },
    { q: 'Which sentence uses "es gibt" correctly?', options: ['Es gibt keine Lösung.', 'Gibt es keine Lösung.', 'Keine Lösung es gibt.'], answer: 0,
      explain: '"Es gibt" is the fixed word order for this structure in a statement.' },
    { q: 'Complete: "___ ist wichtig, Deutsch zu lernen."', options: ['Es', 'Das', 'Er'], answer: 0,
      explain: 'Impersonal expressions require the formal "es".' },
    { q: 'When does formal "es" disappear?', options: ['Never', 'When a subordinate clause takes the subject position', 'Only in questions'], answer: 1,
      explain: 'When the subordinate/infinitive clause itself moves into subject position, "es" disappears.' },
    { q: 'Which sentence contains an error?', options: ['Es regnet heute.', 'Regnet heute.', 'Es gibt viele Probleme.'], answer: 1,
      explain: 'Weather expressions always require "es" — it should be "Es regnet heute."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-es', html: 'Formal "es" fills the subject position with no meaning of its own — required for weather, time, es gibt, and impersonal expressions.' },
    { c: 'r-es', html: 'When a subordinate clause (dass-clause or infinitive clause) moves into the subject position, the formal "es" disappears entirely.' },
    { c: 'r-es', html: 'Formal es (no meaning) is different from personal es (refers to a specific neuter noun) — never confuse the two.' }
  ],
  revisionTips: [
    'Before dropping "es", check: is there a real subject, or is this weather/time/es-gibt/impersonal? If the latter, "es" is mandatory.',
    'Practise transforming "Es ist wichtig, dass..." into "Dass..., ist wichtig." to feel exactly when "es" disappears.',
    'Watch for the difference between formal es (no meaning) and personal es (refers to a noun) in everyday speech.'
  ]
};

window.CHAPTER = CHAPTER;
