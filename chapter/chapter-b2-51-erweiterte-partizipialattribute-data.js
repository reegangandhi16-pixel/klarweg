/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 51
   "Erweiterte Partizipialattribute" — compact formal noun
   descriptions built from Partizip I (active/ongoing) or
   Partizip II (passive/completed), with everything preceding
   the noun. Relative clause ↔ Partizipialattribut
   transformation. Does NOT teach absolute participle clauses
   or C1 literary constructions.
   IMPORTANT: dialogue uses ONLY Marret and Timo.
   Vocabulary source: uploaded Chapter 51 list (61 items).
============================================================ */
const CHAPTER = {
  id: 'b2-51-erweiterte-partizipialattribute',
  phase: 'B2 · Phase 5',
  number: 51,
  title: 'Erweiterte Partizipialattribute',
  titleEn: 'Extended participial attributes',
  description: 'Der Student, der im Labor arbeitet → Der im Labor arbeitende Student. Compressing a relative clause before the noun.',
  xp: 620,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 52, title: 'Komplexe Nominalgruppen', titleEn: 'Complex noun phrases' , href: 'chapter-b2-52-komplexe-nominalgruppen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Everything <em>before</em> the noun.',
    intro: 'In a sleep laboratory, Marret and Timo describe a participant sleepless for three nights and data collected carefully by the team — every relative clause compressed into a compact participial phrase set right before the noun.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear relative clauses transform into compact participial attributes before the noun'
    ],
    scene: 'Im Schlaflabor',
    femaleSpeakers: ['Marret'],
    dialogue: [
      { speaker: 'Marret', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zyte', type: 'Preposition + dative' },
        { w: 'drei', role: 'r-dativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Nächten', role: 'r-dativ', en: 'nights (dat.)', hi: 'रातों से', pron: 'NEKH-ten', type: 'Noun · plural dat.' },
        { w: 'schlaflose', role: 'r-subject', en: 'sleepless', hi: 'अनिद्रा से पीड़ित', pron: 'SHLAHF-lo-zuh', type: 'Adjective', why: 'erweitertes Partizipialattribut: adverbial phrase inserted before the adjective/participle, both before the noun (this chapter).', ex: 'die seit drei Nächten schlaflose Probandin', exEn: 'the participant sleepless for three nights' },
        { w: 'Probandin', role: 'r-subject', en: 'participant (f)', hi: 'प्रतिभागी', pron: 'pro-BAN-din', type: 'Noun · fem.', why: 'die Probandin (this chapter).', ex: 'die Probandin' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'चाहिए', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'dringend', role: 'r-akkusativ', en: 'urgently', hi: 'तुरंत', pron: 'DRIN-gent', type: 'Adverb' },
        { w: 'Ruhe', role: 'r-akkusativ', en: 'rest', hi: 'आराम', pron: 'ROO-uh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The participant, sleepless for three nights, urgently needs rest.', hi: 'Teen raaton se anidra se peedit pratibhaagi ko turant aaraam chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'vom', role: 'r-preposition', en: 'by the', hi: 'द्वारा', pron: 'fom', type: 'Preposition + dative' },
        { w: 'Forschungsteam', role: 'r-dativ', en: 'research team (dat.)', hi: 'शोध टीम', pron: 'FOR-shungs-teem', type: 'Noun · neut. dat.' },
        { w: 'betreute', role: 'r-subject', en: 'cared for', hi: 'देखभाल की गई', pron: 'be-TROY-tuh', type: 'Partizip II · Attribut', why: 'erweitertes Partizipialattribut: agent phrase (vom Team) inserted before the participle (this chapter).', ex: 'die vom Team betreute Probandin', exEn: 'the participant cared for by the team' },
        { w: 'Probandin', role: 'r-subject', en: 'participant (f)', hi: 'प्रतिभागी', pron: 'pro-BAN-din', type: 'Noun · fem.' },
        { w: 'fühlt', role: 'r-verb', en: 'feels', hi: 'महसूस करती है', pron: 'FÜLT', type: 'Verb · fühlen' },
        { w: 'sich', role: 'r-akkusativ', en: 'herself', hi: 'ख़ुद को', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'The participant, cared for by the research team, already feels better.', hi: 'Shodh team dwara dekhbhaal ki gayi pratibhaagi pehle se behtar mehsoos kar rahi hai.' },
      { speaker: 'Marret', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'von', role: 'r-preposition', en: 'by', hi: 'द्वारा', pron: 'fon', type: 'Preposition + dative' },
        { w: 'uns', role: 'r-dativ', en: 'us (dat.)', hi: 'हमारे', pron: 'uns', type: 'Pronoun · dative' },
        { w: 'entwickelte', role: 'r-subject', en: 'developed', hi: 'विकसित', pron: 'ent-VI-kel-tuh', type: 'Partizip II · Attribut', why: 'entwickeln → entwickelt = developed (this chapter, erweitertes Partizipialattribut).', ex: 'der von uns entwickelte Test', exEn: 'the test developed by us' },
        { w: 'Test', role: 'r-subject', en: 'test', hi: 'टेस्ट', pron: 'test', type: 'Noun · masc.' },
        { w: 'funktioniert', role: 'r-verb', en: 'works', hi: 'काम करता है', pron: 'funk-tsyo-NEERT', type: 'Verb · funktionieren' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The test, developed by us, works well.', hi: 'Humaare dwara vikasit test achhe se kaam karta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'froh', role: 'r-akkusativ', en: 'glad', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'lange', role: 'r-subject', en: 'long', hi: 'लंबी', pron: 'LANG-uh', type: 'Adjective' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'endet', role: 'r-verb', en: 'ends', hi: 'समाप्त होगा', pron: 'EN-det', type: 'Verb · enden (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am glad that the long study soon ends.', hi: 'Mujhe khushi hai ki lambaa adhyayan jald samaapt hoga.' },
      { speaker: 'Marret', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'von', role: 'r-preposition', en: 'by', hi: 'द्वारा', pron: 'fon', type: 'Preposition + dative' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Probanden', role: 'r-dativ', en: 'participants (dat.)', hi: 'प्रतिभागियों', pron: 'pro-BAN-den', type: 'Noun · plural dat.' },
        { w: 'gesammelten', role: 'r-subject', en: 'collected', hi: 'एकत्रित', pron: 'ge-ZA-mel-ten', type: 'Partizip II · Attribut', why: 'sammeln → gesammelt = collected (this chapter, erweitertes Partizipialattribut).', ex: 'die gesammelten Daten', exEn: 'the collected data' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'आंकड़े', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'wertvoll', role: 'r-akkusativ', en: 'valuable', hi: 'मूल्यवान', pron: 'VAIRT-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Exactly! The data collected by the participants is very valuable.', hi: 'Bilkul! Pratibhaagiyon dwara ekatrit aankde bahut moolyavaan hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German often replaces long relative clauses with compact attributes. <span class="de">Der Student, der im Labor arbeitet</span> → <span class="de r-partizip">Der im Labor arbeitende Student</span>. Everything the relative clause said now sits BEFORE the noun, ending in a Partizip I or Partizip II.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ERWEITERTE PARTIZIPIALATTRIBUTE (extended participial attributes) at B2 level: replacing relative clauses with compact attributes placed before the noun, built from Partizip I (active/ongoing, e.g. "arbeitend" → "der arbeitende Student") or Partizip II (passive/completed, e.g. "unterschrieben" → "die unterschriebenen Dokumente"). Extended versions move whole prepositional phrases and adverbs before the participle too, e.g. "Der im Labor arbeitende Student" or "Die gestern vom Professor unterschriebenen Unterlagen". ' +
    'Do NOT expect or require absolute participle constructions or C1 literary participial forms — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that the participle used as attribute has the correct adjective ending (agreeing in gender, case, and number with the noun).\n' +
    '- Check that Partizip I is used for active/ongoing meaning and Partizip II for passive/completed meaning — flag genuine mismatches, but do not require a participial attribute where a relative clause is equally natural.\n' +
    '- Check that all the extending elements (prepositional phrases, adverbs, objects) sit BEFORE the participle, not after it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Compactness check:</b> one sentence on whether the learner used participial attributes to shorten formal sentences where appropriate, instead of relying only on relative clauses.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you fluidly compress relative clauses into extended participial attributes. Ready for the Phase 5 checkpoint next.',
    mid: 'Good. Re-read the Master Transformation Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: everything moves BEFORE the noun, ending in the participle.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'im', role: 'r-partizip' }, { w: 'Labor', role: 'r-partizip' },
    { w: 'arbeitende', role: 'r-partizip' }, { w: 'Student', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: relative clauses compress into a compact attribute before the noun.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marret and Timo prepare a research presentation and report about a sleep laboratory study.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 61 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Partizip I vs Partizip II as attributes, and the extended participial attribute structure.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific journal article and a business project report full of participial attributes.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Partizip I vs Partizip II attributes and their relative-clause equivalents.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people and projects using participial attributes naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a report replacing relative clauses with participial attributes, and write a short scientific article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill relative-clause-to-participial-attribute transformation in both directions.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 620 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 61 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Relative-clause transformation drills and a scientific-article writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full transformation table, Partizip I vs II comparison, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Der Student, der im Labor arbeitet → Der im Labor arbeitende Student', text: 'Compress a relative clause into a compact participial attribute' },
    { de: 'arbeitend (Partizip I, active) vs unterschrieben (Partizip II, completed)', text: 'Choose Partizip I vs Partizip II correctly by meaning' },
    { de: 'Die gestern vom Professor unterschriebenen Unterlagen', text: 'Build extended attributes with prepositional phrases and adverbs' },
    { de: 'Adjective endings agree with gender, case, and number', text: 'Decline the participial attribute correctly' },
    { de: 'Common in newspapers, academic papers, and Goethe B2 Reading', text: 'Recognize the register where this structure dominates' }
  ],

  // ---------- Vocabulary (61 items — uploaded chapter-51 list) ----------
  vocab: [
    { de: 'Mittagspause', art: 'die', gender: 'f', plural: 'Mittagspausen', pos: 'noun', level: 'B2', register: 'both', en: 'lunch break', hi: 'दोपहर का ब्रेक', ex: 'Sie machte eine kurze Mittagspause.', exEn: 'She took a short lunch break.', exHi: 'Usne ek chhota dopahar ka break liya.', ex2: 'Sie haben ihre Mittagspause verlängert.', ex2En: 'They\'ve extended their lunch break.', ex2Hi: 'Unhone apna dopahar ka break badhaaya hai.' },
    { de: 'Mittagsschlaf', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'afternoon nap', hi: 'दोपहर की नींद', ex: 'Sie hielt einen Mittagsschlaf.', exEn: 'She took an afternoon nap.', exHi: 'Usne dopahar ki neend li.', ex2: 'Sie haben den Mittagsschlaf empfohlen.', ex2En: 'They\'ve recommended the afternoon nap.', ex2Hi: 'Unhone dopahar ki neend ki sifaarish ki hai.' },
    { de: 'Mittelalter', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'Middle Ages', hi: 'मध्य युग', ex: 'Das Mittelalter dauerte Jahrhunderte.', exEn: 'The Middle Ages lasted centuries.', exHi: 'Madhya yug saikadon saal chala.', ex2: 'Sie haben das Mittelalter erforscht.', ex2En: 'They\'ve researched the Middle Ages.', ex2Hi: 'Unhone madhya yug par shodh kiya hai.' },
    { de: 'mittelalterlich', pos: 'adjective', level: 'B2', register: 'written', en: 'medieval', hi: 'मध्ययुगीन', ex: 'Die mittelalterliche Burg war beeindruckend.', exEn: 'The medieval castle was impressive.', exHi: 'Madhyayugeen kila prabhaavshaali tha.', ex2: 'Sie haben mittelalterliche Manuskripte gefunden.', ex2En: 'They\'ve found medieval manuscripts.', ex2Hi: 'Unhein madhyayugeen paandulipiyaan mili hain.' },
    { de: 'Mitternacht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'midnight', hi: 'आधी रात', ex: 'Sie kamen um Mitternacht an.', exEn: 'They arrived at midnight.', exHi: 'Woh aadhi raat ko pahunche.', ex2: 'Sie haben bis Mitternacht gearbeitet.', ex2En: 'They\'ve worked until midnight.', ex2Hi: 'Woh aadhi raat tak kaam karte rahe hain.' },
    { de: 'Mücke', art: 'die', gender: 'f', plural: 'Mücken', pos: 'noun', level: 'B2', register: 'both', en: 'mosquito', hi: 'मच्छर', ex: 'Die Mücke störte sie die ganze Nacht.', exEn: 'The mosquito bothered her all night.', exHi: 'Machhar ne poori raat use pareshaan kiya.', ex2: 'Sie haben Mücken bekämpft.', ex2En: 'They\'ve fought mosquitoes.', ex2Hi: 'Unhone macharon se ladaai ki hai.' },
    { de: 'müdegearbeitet', pos: 'adjective', level: 'B2', register: 'spoken', en: 'worn out from work', hi: 'काम से थका हुआ', ex: 'Sie war völlig müdegearbeitet.', exEn: 'She was completely worn out from work.', exHi: 'Woh bilkul kaam se thaki hui thi.', ex2: 'Sie haben sich müdegearbeitet.', ex2En: 'They\'ve worn themselves out from work.', ex2Hi: 'Woh kaam se thak gaye hain.' },
    { de: 'Murmeltier', art: 'das', gender: 'n', plural: 'Murmeltiere', pos: 'noun', level: 'B2', register: 'both', en: 'marmot', hi: 'मार्मोट', ex: 'Das Murmeltier schlief den ganzen Winter.', exEn: 'The marmot slept the whole winter.', exHi: 'Marmot poori sardi soya raha.', ex2: 'Sie haben ein Murmeltier beobachtet.', ex2En: 'They\'ve observed a marmot.', ex2Hi: 'Unhone ek marmot dekha hai.' },
    { de: 'Nachteule', art: 'die', gender: 'f', plural: 'Nachteulen', pos: 'noun', level: 'B2', register: 'both', en: 'night owl', hi: 'रात में जागने वाला', ex: 'Er ist eine echte Nachteule.', exEn: 'He is a real night owl.', exHi: 'Woh sach mein raat mein jaagne waala hai.', ex2: 'Sie sind Nachteulen.', ex2En: 'They are night owls.', ex2Hi: 'Woh raat mein jaagne waale hain.' },
    { de: 'Nachwuchskraft', art: 'die', gender: 'f', plural: 'Nachwuchskräfte', pos: 'noun', level: 'B2', register: 'written', en: 'young talent, junior staff', hi: 'नया प्रतिभाशाली कर्मचारी', ex: 'Die gut qualifizierte Nachwuchskraft unterstützt uns.', exEn: 'The well-qualified junior staff member supports us.', exHi: 'Achhi tarah yogya junior staff member humaari madad karta hai.', ex2: 'Sie haben neue Nachwuchskräfte eingestellt.', ex2En: 'They\'ve hired new junior staff.', ex2Hi: 'Unhone naye junior staff niyukt kiye hain.' },
    { de: 'Nervenzelle', art: 'die', gender: 'f', plural: 'Nervenzellen', pos: 'noun', level: 'B2', register: 'written', en: 'nerve cell', hi: 'तंत्रिका कोशिका', ex: 'Die Software analysiert die Nervenzellen.', exEn: 'The software analyses the nerve cells.', exHi: 'Software nerve cells ka vishleshan karta hai.', ex2: 'Sie haben Nervenzellen untersucht.', ex2En: 'They\'ve examined nerve cells.', ex2Hi: 'Unhone nerve cells ki jaanch ki hai.' },
    { de: 'Nickerchen', art: 'das', gender: 'n', plural: 'Nickerchen', pos: 'noun', level: 'B2', register: 'spoken', en: 'nap', hi: 'झपकी', ex: 'Sie hielt ein kurzes Nickerchen.', exEn: 'She took a short nap.', exHi: 'Usne ek chhoti jhapki li.', ex2: 'Sie haben ein Nickerchen gemacht.', ex2En: 'They\'ve taken a nap.', ex2Hi: 'Unhone jhapki li hai.' },
    { de: 'Nobelpreis', art: 'der', gender: 'm', plural: 'Nobelpreise', pos: 'noun', level: 'B2', register: 'written', en: 'Nobel Prize', hi: 'नोबेल पुरस्कार', ex: 'Der Physiker hat den Nobelpreis gewonnen.', exEn: 'The physicist has won the Nobel Prize.', exHi: 'Physicist ne Nobel Prize jeeta hai.', ex2: 'Sie haben den Nobelpreis verliehen.', ex2En: 'They\'ve awarded the Nobel Prize.', ex2Hi: 'Unhone Nobel Prize diya hai.' },
    { de: 'Notlüge', art: 'die', gender: 'f', plural: 'Notlügen', pos: 'noun', level: 'B2', register: 'both', en: 'white lie', hi: 'सफेद झूठ', ex: 'Sie erzählte eine kleine Notlüge.', exEn: 'She told a small white lie.', exHi: 'Usne ek chhota safed jhooth bola.', ex2: 'Sie haben eine Notlüge benutzt.', ex2En: 'They\'ve used a white lie.', ex2Hi: 'Unhone ek safed jhooth ka istemaal kiya hai.' },
    { de: 'oftmals', pos: 'adverb', level: 'B2', register: 'written', en: 'often, frequently', hi: 'अक्सर', ex: 'Sie besuchte oftmals das Labor.', exEn: 'She often visited the laboratory.', exHi: 'Woh aksar prayogshala jaati thi.', ex2: 'Sie haben oftmals zusammengearbeitet.', ex2En: 'They\'ve frequently worked together.', ex2Hi: 'Woh aksar milkar kaam karte hain.' },
    { de: 'ohnehin', pos: 'adverb', level: 'B2', register: 'both', en: 'anyway, in any case', hi: 'वैसे भी', ex: 'Sie war ohnehin müde.', exEn: 'She was tired anyway.', exHi: 'Woh vaise bhi thaki hui thi.', ex2: 'Sie haben ohnehin recht.', ex2En: 'They are right anyway.', ex2Hi: 'Woh vaise bhi sahi hain.' },
    { de: 'Olivenöl', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'olive oil', hi: 'जैतून का तेल', ex: 'Sie kochte mit Olivenöl.', exEn: 'She cooked with olive oil.', exHi: 'Usne zaitoon ke tel se khaana banaaya.', ex2: 'Sie haben Olivenöl importiert.', ex2En: 'They\'ve imported olive oil.', ex2Hi: 'Unhone zaitoon ka tel import kiya hai.' },
    { de: 'Organ', art: 'das', gender: 'n', plural: 'Organe', pos: 'noun', level: 'B2', register: 'written', en: 'organ', hi: 'अंग', ex: 'Das Herz ist ein wichtiges Organ.', exEn: 'The heart is an important organ.', exHi: 'Dil ek mahatvapurn ang hai.', ex2: 'Sie haben das Organ untersucht.', ex2En: 'They\'ve examined the organ.', ex2Hi: 'Unhone ang ki jaanch ki hai.' },
    { de: 'Partylöwe', art: 'der', gender: 'm', plural: 'Partylöwen', pos: 'noun', level: 'B2', register: 'spoken', en: 'party animal', hi: 'पार्टी में मस्त रहने वाला', ex: 'Er war früher ein echter Partylöwe.', exEn: 'He used to be a real party animal.', exHi: 'Woh pehle sach mein party animal tha.', ex2: 'Sie sind bekannte Partylöwen.', ex2En: 'They are well-known party animals.', ex2Hi: 'Woh prasiddh party animals hain.' },
    { de: 'Phänomen', art: 'das', gender: 'n', plural: 'Phänomene', pos: 'noun', level: 'B2', register: 'written', en: 'phenomenon', hi: 'घटना', ex: 'Das gerade entdeckte Phänomen ist revolutionär.', exEn: 'The just-discovered phenomenon is revolutionary.', exHi: 'Abhi khoji gayi ghatna kraantikaari hai.', ex2: 'Sie haben ein seltenes Phänomen beobachtet.', ex2En: 'They\'ve observed a rare phenomenon.', ex2Hi: 'Unhone ek durlabh ghatna dekhi hai.' },
    { de: 'physikalisch', pos: 'adjective', level: 'B2', register: 'written', en: 'physical, of physics', hi: 'भौतिक', ex: 'Das physikalische Gesetz gilt überall.', exEn: 'The physical law applies everywhere.', exHi: 'Bhautik niyam har jagah laagu hota hai.', ex2: 'Sie haben ein physikalisches Experiment durchgeführt.', ex2En: 'They\'ve carried out a physics experiment.', ex2Hi: 'Unhone ek bhautik prayog kiya hai.' },
    { de: 'Physiker/in', art: 'der/die', gender: 'm/f', plural: 'Physiker/innen', pos: 'noun', level: 'B2', register: 'written', en: 'physicist', hi: 'भौतिक विज्ञानी', ex: 'Der an einem internationalen Projekt arbeitende Physiker hat den Nobelpreis gewonnen.', exEn: 'The physicist working on an international project has won the Nobel Prize.', exHi: 'Ek antarrashtriya project par kaam karne waale physicist ne Nobel Prize jeeta hai.', ex2: 'Sie haben mit dem Physiker gesprochen.', ex2En: 'They\'ve spoken with the physicist.', ex2Hi: 'Unhone physicist se baat ki hai.' },
    { de: 'Pipette', art: 'die', gender: 'f', plural: 'Pipetten', pos: 'noun', level: 'B2', register: 'written', en: 'pipette', hi: 'पिपेट', ex: 'Sie benutzte eine Pipette.', exEn: 'She used a pipette.', exHi: 'Usne ek pipette ka istemaal kiya.', ex2: 'Sie haben Pipetten gereinigt.', ex2En: 'They\'ve cleaned pipettes.', ex2Hi: 'Unhone pipettes saaf ki hain.' },
    { de: 'Planet', art: 'der', gender: 'm', plural: 'Planeten', pos: 'noun', level: 'B2', register: 'written', en: 'planet', hi: 'ग्रह', ex: 'Der Planet umkreist die Sonne.', exEn: 'The planet orbits the sun.', exHi: 'Grah sooraj ki parikrama karta hai.', ex2: 'Sie haben einen neuen Planeten entdeckt.', ex2En: 'They\'ve discovered a new planet.', ex2Hi: 'Unhone ek naya grah khoja hai.' },
    { de: 'Plastiktüte', art: 'die', gender: 'f', plural: 'Plastiktüten', pos: 'noun', level: 'B2', register: 'both', en: 'plastic bag', hi: 'प्लास्टिक बैग', ex: 'Sie vermied Plastiktüten.', exEn: 'She avoided plastic bags.', exHi: 'Usne plastic bags se bacha.', ex2: 'Sie haben Plastiktüten reduziert.', ex2En: 'They\'ve reduced plastic bags.', ex2Hi: 'Unhone plastic bags kam kiye hain.' },
    { de: 'Plutonium', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'plutonium', hi: 'प्लूटोनियम', ex: 'Plutonium ist radioaktiv.', exEn: 'Plutonium is radioactive.', exHi: 'Plutonium radioactive hai.', ex2: 'Sie haben Plutonium gelagert.', ex2En: 'They\'ve stored plutonium.', ex2Hi: 'Unhone plutonium sangrahit kiya hai.' },
    { de: 'Präsident/in', art: 'der/die', gender: 'm/f', plural: 'Präsidenten/Präsidentinnen', pos: 'noun', level: 'B2', register: 'written', en: 'president', hi: 'राष्ट्रपति', ex: 'Der Präsident hielt eine Rede.', exEn: 'The president gave a speech.', exHi: 'Rashtrapati ne bhaashan diya.', ex2: 'Sie haben eine neue Präsidentin gewählt.', ex2En: 'They\'ve elected a new president.', ex2Hi: 'Unhone ek nayi rashtrapati chuni hai.' },
    { de: 'Proband/in', art: 'der/die', gender: 'm/f', plural: 'Probanden/Probandinnen', pos: 'noun', level: 'B2', register: 'written', en: 'test subject', hi: 'परीक्षण विषय', ex: 'Die schlafenden Probanden wurden beobachtet.', exEn: 'The sleeping test subjects were observed.', exHi: 'Sote hue test subjects ko nirikshit kiya gaya.', ex2: 'Sie haben die Probanden befragt.', ex2En: 'They\'ve interviewed the test subjects.', ex2Hi: 'Unhone test subjects se saval poochhe hain.' },
    { de: 'Prognose', art: 'die', gender: 'f', plural: 'Prognosen', pos: 'noun', level: 'B2', register: 'written', en: 'forecast, prognosis', hi: 'पूर्वानुमान', ex: 'Können wir jetzt die Prognose schreiben?', exEn: 'Can we write the forecast now?', exHi: 'Kya hum ab poorvaanumaan likh sakte hain?', ex2: 'Sie haben eine positive Prognose gegeben.', ex2En: 'They\'ve given a positive prognosis.', ex2Hi: 'Unhone ek sakaaraatmak poorvaanumaan diya hai.' },
    { de: 'Psyche', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'psyche', hi: 'मानस', ex: 'Die Psyche des Menschen ist komplex.', exEn: 'The human psyche is complex.', exHi: 'Manushya ka maanas jatil hai.', ex2: 'Sie haben die Psyche untersucht.', ex2En: 'They\'ve examined the psyche.', ex2Hi: 'Unhone maanas ki jaanch ki hai.' },
    { de: 'Pubertierende', art: 'der/die', gender: 'm/f', plural: 'Pubertierenden', pos: 'noun', level: 'B2', register: 'both', en: 'adolescent, teenager', hi: 'किशोर', ex: 'Die Pubertierende brauchte mehr Schlaf.', exEn: 'The teenager needed more sleep.', exHi: 'Kishore ko zyaada neend ki zaroorat thi.', ex2: 'Sie haben mit den Pubertierenden gesprochen.', ex2En: 'They\'ve spoken with the teenagers.', ex2Hi: 'Unhone kishoron se baat ki hai.' },
    { de: 'publizieren', pos: 'verb', level: 'B2', register: 'written', en: 'to publish', hi: 'प्रकाशित करना', ex: 'Der Forscher hat die Ergebnisse publiziert.', exEn: 'The researcher has published the results.', exHi: 'Shodhkarta ne parinaam prakaashit kiye hain.', ex2: 'Sie haben ein Buch publiziert.', ex2En: 'They\'ve published a book.', ex2Hi: 'Unhone ek kitaab prakaashit ki hai.', conj: { praesens: 'publiziert', praeteritum: 'publizierte', perfekt: 'hat publiziert' } },
    { de: 'Pumpe', art: 'die', gender: 'f', plural: 'Pumpen', pos: 'noun', level: 'B2', register: 'both', en: 'pump', hi: 'पंप', ex: 'Die Pumpe funktionierte nicht.', exEn: 'The pump did not work.', exHi: 'Pump kaam nahi kar raha tha.', ex2: 'Sie haben eine neue Pumpe installiert.', ex2En: 'They\'ve installed a new pump.', ex2Hi: 'Unhone ek naya pump lagaaya hai.' },
    { de: 'qualifizieren', pos: 'verb', level: 'B2', register: 'written', en: 'to qualify', hi: 'योग्य बनाना', ex: 'Die Ausbildung qualifizierte sie für die Stelle.', exEn: 'The training qualified her for the position.', exHi: 'Prashikshan ne use pad ke liye yogya banaaya.', ex2: 'Sie haben sich weiter qualifiziert.', ex2En: 'They\'ve further qualified themselves.', ex2Hi: 'Unhone khud ko aur yogya banaaya hai.', conj: { praesens: 'qualifiziert', praeteritum: 'qualifizierte', perfekt: 'hat qualifiziert' } },
    { de: 'Quiz', art: 'das', gender: 'n', plural: 'Quiz', pos: 'noun', level: 'B2', register: 'both', en: 'quiz', hi: 'प्रश्नोत्तरी', ex: 'Sie gewann das Quiz.', exEn: 'She won the quiz.', exHi: 'Usne quiz jeeta.', ex2: 'Sie haben ein Quiz organisiert.', ex2En: 'They\'ve organised a quiz.', ex2Hi: 'Unhone ek quiz organize kiya hai.' },
    { de: 'radioaktiv', pos: 'adjective', level: 'B2', register: 'written', en: 'radioactive', hi: 'रेडियोधर्मी', ex: 'Plutonium ist radioaktiv.', exEn: 'Plutonium is radioactive.', exHi: 'Plutonium radioactive hai.', ex2: 'Sie haben radioaktives Material entsorgt.', ex2En: 'They\'ve disposed of radioactive material.', ex2Hi: 'Unhone radioactive saamagri nipataayi hai.' },
    { de: 'Radiofeature', art: 'das', gender: 'n', plural: 'Radiofeatures', pos: 'noun', level: 'B2', register: 'written', en: 'radio feature', hi: 'रेडियो फीचर', ex: 'Sie produzierten ein Radiofeature.', exEn: 'They produced a radio feature.', exHi: 'Unhone ek radio feature banaaya.', ex2: 'Sie haben ein Radiofeature gehört.', ex2En: 'They\'ve listened to a radio feature.', ex2Hi: 'Unhone ek radio feature suna hai.' },
    { de: 'Rahmen', art: 'der', gender: 'm', plural: 'Rahmen', pos: 'noun', level: 'B2', register: 'both', en: 'frame, framework', hi: 'ढांचा', ex: 'Im Rahmen des Projekts arbeiteten sie zusammen.', exEn: 'Within the framework of the project, they worked together.', exHi: 'Project ke daayre mein, unhone milkar kaam kiya.', ex2: 'Sie haben einen neuen Rahmen entwickelt.', ex2En: 'They\'ve developed a new framework.', ex2Hi: 'Unhone ek naya daayra vikasit kiya hai.' },
    { de: 'Rand', art: 'der', gender: 'm', plural: 'Ränder', pos: 'noun', level: 'B2', register: 'both', en: 'edge, margin', hi: 'किनारा', ex: 'Sie saß am Rand des Tisches.', exEn: 'She sat at the edge of the table.', exHi: 'Woh table ke kinaare baithi.', ex2: 'Sie haben den Rand markiert.', ex2En: 'They\'ve marked the margin.', ex2Hi: 'Unhone kinaare ko chihnit kiya hai.' },
    { de: 'rastlos', pos: 'adjective', level: 'B2', register: 'written', en: 'restless', hi: 'बेचैन', ex: 'Sie war rastlos vor der Prüfung.', exEn: 'She was restless before the exam.', exHi: 'Pareeksha se pehle woh bechain thi.', ex2: 'Sie haben rastlos gearbeitet.', ex2En: 'They\'ve worked restlessly.', ex2Hi: 'Woh bechaini se kaam karte rahe hain.' },
    { de: 'Ratte', art: 'die', gender: 'f', plural: 'Ratten', pos: 'noun', level: 'B2', register: 'both', en: 'rat', hi: 'चूहा', ex: 'Die Ratte lief über den Boden.', exEn: 'The rat ran across the floor.', exHi: 'Chuha farsh par daudaa.', ex2: 'Sie haben Ratten im Labor verwendet.', ex2En: 'They\'ve used rats in the laboratory.', ex2Hi: 'Unhone prayogshala mein chuhon ka istemaal kiya hai.' },
    { de: 'realisieren', pos: 'verb', level: 'B2', register: 'written', en: 'to realise, implement', hi: 'साकार करना', ex: 'Sie realisierten das Projekt.', exEn: 'They implemented the project.', exHi: 'Unhone project ko saakaar kiya.', ex2: 'Sie haben ihre Ziele realisiert.', ex2En: 'They\'ve realised their goals.', ex2Hi: 'Unhone apne lakshya poore kiye hain.', conj: { praesens: 'realisiert', praeteritum: 'realisierte', perfekt: 'hat realisiert' } },
    { de: 'regulieren', pos: 'verb', level: 'B2', register: 'written', en: 'to regulate', hi: 'विनियमित करना', ex: 'Die Behörde regulierte den Markt.', exEn: 'The authority regulated the market.', exHi: 'Adhikaari ne baazaar ko viniyamit kiya.', ex2: 'Sie haben die Temperatur reguliert.', ex2En: 'They\'ve regulated the temperature.', ex2Hi: 'Unhone taapmaan viniyamit kiya hai.', conj: { praesens: 'reguliert', praeteritum: 'regulierte', perfekt: 'hat reguliert' } },
    { de: 'revolutionieren', pos: 'verb', level: 'B2', register: 'written', en: 'to revolutionise', hi: 'क्रांति लाना', ex: 'Die Entdeckung könnte die Forschung revolutionieren.', exEn: 'The discovery could revolutionise research.', exHi: 'Khoj shodh mein kraanti laa sakti hai.', ex2: 'Sie haben die Branche revolutioniert.', ex2En: 'They\'ve revolutionised the industry.', ex2Hi: 'Unhone kshetra mein kraanti laayi hai.', conj: { praesens: 'revolutioniert', praeteritum: 'revolutionierte', perfekt: 'hat revolutioniert' } },
    { de: 'romantisch', pos: 'adjective', level: 'B2', register: 'both', en: 'romantic', hi: 'रोमांटिक', ex: 'Sie hatten ein romantisches Abendessen.', exEn: 'They had a romantic dinner.', exHi: 'Unhone ek romantic dinner kiya.', ex2: 'Sie haben einen romantischen Film gesehen.', ex2En: 'They\'ve seen a romantic film.', ex2Hi: 'Unhone ek romantic film dekhi hai.' },
    { de: 'Rubrik', art: 'die', gender: 'f', plural: 'Rubriken', pos: 'noun', level: 'B2', register: 'written', en: 'category, section', hi: 'श्रेणी', ex: 'Der Artikel stand in einer neuen Rubrik.', exEn: 'The article was in a new section.', exHi: 'Lekh ek nayi shreni mein tha.', ex2: 'Sie haben die Rubriken sortiert.', ex2En: 'They\'ve sorted the categories.', ex2Hi: 'Unhone shreniyaan chhaanti hain.' },
    { de: 'Ruf', art: 'der', gender: 'm', plural: 'Rufe', pos: 'noun', level: 'B2', register: 'both', en: 'reputation, call', hi: 'प्रतिष्ठा, आवाज़', ex: 'Sie hatte einen guten Ruf.', exEn: 'She had a good reputation.', exHi: 'Uski achhi pratishtha thi.', ex2: 'Sie haben einen Ruf gehört.', ex2En: 'They\'ve heard a call.', ex2Hi: 'Unhone ek awaaz suni hai.' },
    { de: 'Ruheraum', art: 'der', gender: 'm', plural: 'Ruheräume', pos: 'noun', level: 'B2', register: 'written', en: 'rest room, quiet room', hi: 'विश्राम कक्ष', ex: 'Der Ruheraum war ruhig.', exEn: 'The rest room was quiet.', exHi: 'Vishraam kaksh shaant tha.', ex2: 'Sie haben einen Ruheraum eingerichtet.', ex2En: 'They\'ve set up a rest room.', ex2Hi: 'Unhone ek vishraam kaksh banaaya hai.' },
    { de: 'Ruhezeit', art: 'die', gender: 'f', plural: 'Ruhezeiten', pos: 'noun', level: 'B2', register: 'written', en: 'rest period', hi: 'विश्राम समय', ex: 'Die Ruhezeit dauerte eine Stunde.', exEn: 'The rest period lasted an hour.', exHi: 'Vishraam samay ek ghante tak chala.', ex2: 'Sie haben die Ruhezeit eingehalten.', ex2En: 'They\'ve observed the rest period.', ex2Hi: 'Unhone vishraam samay ka paalan kiya hai.' },
    { de: 'sanft', pos: 'adjective', level: 'B2', register: 'both', en: 'gentle, soft', hi: 'कोमल', ex: 'Sie sprach mit sanfter Stimme.', exEn: 'She spoke with a gentle voice.', exHi: 'Usne komal aawaaz mein baat ki.', ex2: 'Sie haben sanfte Musik gehört.', ex2En: 'They\'ve listened to soft music.', ex2Hi: 'Unhone komal sangeet suna hai.' },
    { de: 'Scheu', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'shyness', hi: 'शर्मीलापन', ex: 'Ihre Scheu verschwand mit der Zeit.', exEn: 'Her shyness disappeared over time.', exHi: 'Uska sharmeelapan samay ke saath khatam ho gaya.', ex2: 'Sie haben ihre Scheu überwunden.', ex2En: 'They\'ve overcome their shyness.', ex2Hi: 'Unhone apna sharmeelapan door kiya hai.' },
    { de: 'Schläfchen', art: 'das', gender: 'n', plural: 'Schläfchen', pos: 'noun', level: 'B2', register: 'spoken', en: 'little nap', hi: 'छोटी झपकी', ex: 'Sie machte ein kurzes Schläfchen.', exEn: 'She took a little nap.', exHi: 'Usne ek chhoti jhapki li.', ex2: 'Sie haben ein Schläfchen gehalten.', ex2En: 'They\'ve taken a little nap.', ex2Hi: 'Unhone chhoti jhapki li hai.' },
    { de: 'Schlaflabor', art: 'das', gender: 'n', plural: 'Schlaflabore', pos: 'noun', level: 'B2', register: 'written', en: 'sleep laboratory', hi: 'नींद प्रयोगशाला', ex: 'Der im Schlaflabor arbeitende Forscher heißt Dr. Weber.', exEn: 'The researcher working in the sleep laboratory is called Dr. Weber.', exHi: 'Sleep laboratory mein kaam karne waale shodhkarta ka naam Dr. Weber hai.', ex2: 'Sie haben ein neues Schlaflabor eröffnet.', ex2En: 'They\'ve opened a new sleep laboratory.', ex2Hi: 'Unhone ek nayi sleep laboratory kholi hai.' },
    { de: 'schlaflos', pos: 'adjective', level: 'B2', register: 'both', en: 'sleepless', hi: 'नींद रहित', ex: 'Sie verbrachte eine schlaflose Nacht.', exEn: 'She spent a sleepless night.', exHi: 'Usne ek neend rahit raat bitaayi.', ex2: 'Sie haben schlaflose Nächte gehabt.', ex2En: 'They\'ve had sleepless nights.', ex2Hi: 'Unki kai raatein neend rahit rahi hain.' },
    { de: 'Schlafmangel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'lack of sleep', hi: 'नींद की कमी', ex: 'Der Schlafmangel beeinträchtigte ihre Leistung.', exEn: 'The lack of sleep affected her performance.', exHi: 'Neend ki kami ne uske pradarshan ko prabhaavit kiya.', ex2: 'Sie haben den Schlafmangel untersucht.', ex2En: 'They\'ve studied the lack of sleep.', ex2Hi: 'Unhone neend ki kami ka adhyayan kiya hai.' },
    { de: 'Schlafraum', art: 'der', gender: 'm', plural: 'Schlafräume', pos: 'noun', level: 'B2', register: 'written', en: 'sleeping room, dormitory', hi: 'शयन कक्ष', ex: 'Der Schlafraum war ruhig eingerichtet.', exEn: 'The sleeping room was quietly furnished.', exHi: 'Shayan kaksh shaanti se sajaaya gaya tha.', ex2: 'Sie haben einen neuen Schlafraum gebaut.', ex2En: 'They\'ve built a new dormitory.', ex2Hi: 'Unhone ek naya shayan kaksh banaaya hai.' },
    { de: 'Schlag', art: 'der', gender: 'm', plural: 'Schläge', pos: 'noun', level: 'B2', register: 'both', en: 'blow, strike', hi: 'प्रहार', ex: 'Der Schlag traf sie unerwartet.', exEn: 'The blow hit her unexpectedly.', exHi: 'Prahaar ne use achaanak lagi.', ex2: 'Sie haben den Schlag abgewehrt.', ex2En: 'They\'ve fended off the blow.', ex2Hi: 'Unhone prahaar ko roka hai.' },
    { de: 'Schneeball', art: 'der', gender: 'm', plural: 'Schneebälle', pos: 'noun', level: 'B2', register: 'both', en: 'snowball', hi: 'बर्फ का गोला', ex: 'Sie warf einen Schneeball.', exEn: 'She threw a snowball.', exHi: 'Usne ek barf ka gola phenka.', ex2: 'Sie haben Schneebälle gemacht.', ex2En: 'They\'ve made snowballs.', ex2Hi: 'Unhone barf ke gole banaaye hain.' },
    { de: 'Schnitt', art: 'der', gender: 'm', plural: 'Schnitte', pos: 'noun', level: 'B2', register: 'both', en: 'cut, edit, average', hi: 'कटौती, औसत', ex: 'Der Schnitt der Note war gut.', exEn: 'The grade average was good.', exHi: 'Grade ka ausat achha tha.', ex2: 'Sie haben einen sauberen Schnitt gemacht.', ex2En: 'They\'ve made a clean cut.', ex2Hi: 'Unhone ek saaf katautar ki hai.' },
    { de: 'schrumpfen', pos: 'verb', level: 'B2', register: 'both', en: 'to shrink', hi: 'सिकुड़ना', ex: 'Der Pullover schrumpfte in der Wäsche.', exEn: 'The sweater shrank in the wash.', exHi: 'Sweater dhulaai mein sikud gaya.', ex2: 'Der Markt ist geschrumpft.', ex2En: 'The market has shrunk.', ex2Hi: 'Baazaar sikud gaya hai.', conj: { praesens: 'schrumpft', praeteritum: 'schrumpfte', perfekt: 'ist geschrumpft' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Erweitertes Partizipialattribut?',
      body: [ 'German often replaces long relative clauses with compact participial attributes, moving all the information BEFORE the noun instead of after it.' ],
      table: {
        head: ['Relative clause', 'Partizipialattribut'],
        rows: [
          ['Der Student, der im Labor arbeitet,', '<span class="de r-partizip">Der im Labor arbeitende Student</span>'],
          ['Die Dokumente, die gestern unterschrieben wurden,', '<span class="de r-partizip">Die gestern unterschriebenen Dokumente</span>']
        ]
      },
      hinglish: 'German aksar lambe relative clause ki jagah ek compact structure use karta hai. Isme saari jaankaari noun ke <b>baad</b> nahi, balki <b>pehle</b> aa jaati hai. Isliye reading mein aisa lagta hai ki article ke baad bahut kuch aa gaya aur noun kaafi der baad aaya \u2014 aur yahi ise mushkil banata hai.'
    },
    {
      title: 'Partizip I als Attribut',
      body: [ 'Partizip I (verb stem + -end + adjective ending) expresses an ACTIVE, ongoing action — the noun is DOING something.' ],
      table: {
        head: ['Verb', 'Partizip I', 'Example'],
        rows: [
          ['arbeiten', 'arbeitend', 'der arbeitende Student'],
          ['singen', 'singend', 'die singende Frau'],
          ['schlafen', 'schlafend', 'das schlafende Kind']
        ]
      },
      hinglish: 'Partizip I banane ka tarika simple hai \u2014 infinitive ke aage seedha <b>-d</b> lagao (arbeiten \u2192 arbeitend), phir adjective ending. Iska matlab hota hai ki noun khud kaam <b>kar raha hai</b>.'
    },
    {
      title: 'Partizip II als Attribut',
      body: [ 'Partizip II expresses a COMPLETED action or resulting state — the noun HAS BEEN acted upon.' ],
      table: {
        head: ['Verb', 'Partizip II', 'Example'],
        rows: [
          ['unterschreiben', 'unterschrieben', 'der unterschriebene Vertrag'],
          ['schließen', 'geschlossen', 'die geschlossene Tür'],
          ['kaufen', 'gekauft', 'das gekaufte Auto']
        ]
      },
      hinglish: 'Partizip II wahi form hai jo tum Perfekt mein use karte ho (unterschrieben, geschlossen, gekauft). Yahan iska matlab hota hai ki noun ke <b>saath</b> kaam ho chuka hai \u2014 isliye matlab passive lagta hai.'
    },
    {
      title: 'Erweiterte Partizipialattribute',
      body: [ 'The "extended" version moves entire prepositional phrases, adverbs, and objects before the participle — everything that would have been in the relative clause.' ],
      table: {
        head: ['Relative clause', 'Extended participial attribute'],
        rows: [
          ['Der Student, der an einem internationalen Forschungsprojekt arbeitet,', 'Der an einem internationalen Forschungsprojekt arbeitende Student'],
          ['Die Unterlagen, die gestern vom Professor unterschrieben wurden,', 'Die gestern vom Professor unterschriebenen Unterlagen']
        ]
      },
      hinglish: '"Extended" ka matlab hai ki jo bhi relative clause mein hota \u2014 prepositional phrases, adverbs, objects \u2014 woh sab participle se <b>pehle</b> aa jaata hai. Padhne ka tarika yeh hai: pehle article dekho, phir seedha noun dhoondo, aur beech ka hissa baad mein samjho.'
    },
    {
      title: 'Partizip I oder II? Die Entscheidung',
      body: [
        'This is the decision that matters most. Ask one question: is the noun DOING the action, or is the action being done TO it?',
        'Doing it \u2192 <b>Partizip I</b> (stem + <b>-end</b>). Having it done to it \u2192 <b>Partizip II</b>. Both then take a normal adjective ending.'
      ],
      table: {
        head: ['Question', 'Participle', 'Example', 'Means'],
        rows: [
          ['The noun acts', 'Partizip I', '<span class="de">der lesende Student</span>', 'the student who is reading'],
          ['The noun is acted on', 'Partizip II', '<span class="de">das gelesene Buch</span>', 'the book that was read'],
          ['The noun acts', 'Partizip I', '<span class="de">die pr\u00fcfende Kommission</span>', 'the commission that checks'],
          ['The noun is acted on', 'Partizip II', '<span class="de">der gepr\u00fcfte Vertrag</span>', 'the contract that was checked']
        ]
      },
      note: 'A small group of movement verbs works differently: with <i>ankommen, einschlafen</i> and similar, Partizip II describes a completed state, not a passive one \u2014 <span class="de">der angekommene Zug</span> (the train that has arrived), <span class="de">das eingeschlafene Kind</span> (the child that has fallen asleep).',
      hinglish: 'Yahi sabse important faisla hai, aur ek hi sawaal se ho jaata hai \u2014 noun kaam <b>kar raha hai</b>, ya uske <b>saath</b> kaam ho raha hai? Agar noun khud kar raha hai to <b>Partizip I</b> (stem + <b>-end</b>): <span class="de">der lesende Student</span>. Aur agar uske saath kuch kiya gaya hai to <b>Partizip II</b>: <span class="de">das gelesene Buch</span>. Uske baad normal adjective ending lagti hai. Ek chhota exception \u2014 movement wale verbs mein Partizip II passive nahi, balki poora ho chuka state batata hai: <span class="de">der angekommene Zug</span>.'
    },
    {
      title: 'Relativsatz vs Partizipialattribut',
      body: [ 'Both express the same idea; the participial attribute is shorter and more formal.' ],
      table: {
        head: ['Relative clause', 'Partizipialattribut'],
        rows: [
          ['Die Frau, die im Krankenhaus arbeitet,', 'Die im Krankenhaus arbeitende Frau'],
          ['Der Bericht, der gestern veröffentlicht wurde,', 'Der gestern veröffentlichte Bericht']
        ]
      },
      hinglish: 'Dono ka matlab ek hi hai \u2014 participial attribute bas chhota aur zyada formal hai. Bolne mein log relative clause hi use karte hain; yeh structure zyada-tar likhne mein aata hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These noun phrases appear constantly in Goethe B2 reading — newspapers, product descriptions, and academic writing.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['die neu entwickelte Software', 'the newly developed software'],
          ['der international anerkannte Forscher', 'the internationally recognised researcher'],
          ['die sorgfältig vorbereitete Präsentation', 'the carefully prepared presentation'],
          ['die erfolgreich abgeschlossene Ausbildung', 'the successfully completed training'],
          ['das im Labor getestete Material', 'the material tested in the laboratory']
        ]
      },
      hinglish: 'Yeh noun phrases Goethe B2 ki reading mein bahut aate hain \u2014 newspapers, product descriptions aur academic texts mein. Inhe pehchaan lo to lambe sentences kaafi aasaan lagne lagte hain.'
    },
    {
      title: 'Register',
      body: [ 'Extended participial attributes appear constantly in newspapers, academic papers, scientific articles, company reports, official documents, and product descriptions.' ],
      hinglish: 'Yeh structure newspapers, academic papers, company reports aur official documents mein bahut aata hai. Padhne ke liye ise samajhna zaroori hai; khud likhte waqt ek hi kaafi hota hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from choosing the wrong participle, dropping the adjective ending, using a bare infinitive, or leaving a conjugated auxiliary inside the attribute.' ],
      mistakes: [
        { wrong: 'Der geschriebene Student.', right: 'Der schreibende Student.', why: 'Partizip I (schreibend) for an ACTIVE meaning \u2014 the student is writing. Partizip II would mean the student had been written, which makes no sense.' },
        { wrong: 'Die unterschrieben Dokumente.', right: 'Die unterschriebenen Dokumente.', why: 'Plural attributive adjectives need the ending "-en": "unterschriebenen", not the bare participle "unterschrieben".' },
        { wrong: 'Der im Labor arbeiten Student.', right: 'Der im Labor arbeitende Student.', why: 'The word must be the Partizip I "arbeitend" with an ending, not the bare infinitive "arbeiten".' },
        { wrong: 'Die gestern unterschrieben wurde Dokumente.', right: 'Die gestern unterschriebenen Dokumente.', why: 'The extended attribute never contains a conjugated auxiliary like "wurde" — only the participle with its adjective ending.' },
        { wrong: 'Das entwickelt Software.', right: 'Die entwickelte Software.', why: 'The participle needs both the correct article/gender and the attributive ending: "die entwickelte", not "das entwickelt".' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 galat participle chunna, adjective ending chhod dena, plain infinitive laga dena, ya attribute ke andar <i>wurde</i> jaisa conjugated verb chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need a short, everyday description? Use a relative clause. Need a compact, formal style? Move everything before the noun and use a Partizipialattribut.' ],
      note: 'Memory trick: relative clause is long and formal text wants it SHORTER — move everything before the noun, ending in the participle.',
      hinglish: 'Everyday baat mein relative clause hi use karo \u2014 woh natural lagta hai. Aur formal writing mein compact style chahiye to sab kuch noun se pehle le jaao aur Partizipialattribut use karo. Bolchaal mein ise avoid karo, warna bhaari lagta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Reportage: Eine Nacht im Schlaflabor',
    titleEn: 'Report: a night in the sleep laboratory',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'letzte', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective' },
      { w: 'Nacht', role: 'plain', en: '(agrees with "der" via feminine—correcting) night', hi: 'रात', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Schlaflabor', role: 'plain', en: 'sleep laboratory (Satzende)', hi: 'नींद प्रयोगशाला (Satzende)', type: 'Noun · neut.', why: 'das Schlaflabor (this chapter).' },
      { w: 'verbrachte', role: 'plain', en: 'spent', hi: 'बिताई', type: 'Verb · verbringen (Präteritum)' },
      { w: 'Tobias', role: 'plain', en: 'Tobias', hi: 'टोबियास', type: 'Name' },
      { w: 'zwischen', role: 'plain', en: 'among', hi: 'बीच', type: 'Preposition · Dat.' },
      { w: 'zahlreichen', role: 'plain', en: 'numerous', hi: 'अनेक', type: 'Adjective · Dat. (erweitertes Partizipialattribut)' },
      { w: 'an', role: 'plain', en: '(part of extended attribute)', hi: '', type: 'Präposition (im erweiterten Attribut)' },
      { w: 'seinen', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Kopf', role: 'plain', en: 'head', hi: 'सिर', type: 'Noun · masc.' },
      { w: 'angeschlossenen', role: 'r-verb', en: 'connected (erweitertes Partizipialattribut)', hi: 'जुड़े हुए (विस्तृत Partizipialattribut)', type: 'Verb · Partizip II (erweitertes Attribut, vor dem Nomen)', why: 'An extended participial attribute packs a whole relative-clause meaning ("die an seinen Kopf angeschlossen waren") into a single adjective-like phrase before the noun (this chapter).' },
      { w: 'Kabeln', role: 'plain', en: 'cables (Satzende)', hi: 'तारों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'kurzes', role: 'plain', en: 'short', hi: 'छोटा', type: 'Adjective' },
      { w: 'Nickerchen', role: 'plain', en: 'nap (Satzende)', hi: 'झपकी (Satzende)', type: 'Noun · neut.', why: 'das Nickerchen (this chapter).' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Nachmittag', role: 'plain', en: 'afternoon (Satzende)', hi: 'दोपहर (Satzende)', type: 'Noun · masc.' },
      { w: 'hatte', role: 'plain', en: 'had', hi: 'था', type: 'Verb · haben' },
      { w: 'seinen', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel · Akk.' },
      { w: 'zuvor', role: 'plain', en: 'previously', hi: 'पहले', type: 'Adverb (erweitertes Partizipialattribut)' },
      { w: 'aufgebauten', role: 'r-verb', en: 'accumulated (erweitertes Partizipialattribut)', hi: 'जमा हुआ (विस्तृत Attribut)', type: 'Verb · Partizip II (erweitertes Attribut)', why: 'Another extended attribute: "seinen zuvor aufgebauten Schlafmangel" packs "der zuvor aufgebaut worden war" into one noun phrase.' },
      { w: 'Schlafmangel', role: 'plain', en: 'sleep deprivation (Satzende)', hi: 'नींद की कमी (Satzende)', type: 'Noun · masc.', why: 'der Schlafmangel (this chapter).' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'ausgeglichen', role: 'plain', en: 'balanced out (Satzende)', hi: 'संतुलित (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'die', role: 'plain', en: 'the (fem., relativ)', hi: 'जो', type: 'Relativpronomen' },
      { w: 'ganze', role: 'plain', en: 'whole', hi: 'पूरी', type: 'Adjective' },
      { w: 'Nacht', role: 'plain', en: 'night (Satzende)', hi: 'रात (Satzende)', type: 'Noun · fem.' },
      { w: 'aufgezeichnete', role: 'r-verb', en: 'recorded (erweitertes Partizipialattribut)', hi: 'रिकॉर्ड की गई (विस्तृत Attribut)', type: 'Verb · Partizip II (erweitertes Attribut)', why: 'A third extended attribute: "die ganze Nacht aufgezeichnete Bericht" = "der Bericht, der die ganze Nacht aufgezeichnet wurde".' },
      { w: 'Bericht', role: 'plain', en: 'report (Satzende)', hi: 'रिपोर्ट (Satzende)', type: 'Noun · masc.' },
      { w: 'überraschte', role: 'plain', en: 'surprised', hi: 'हैरान किया', type: 'Verb · überraschen (Präteritum)' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Ärzte', role: 'plain', en: 'doctors (Satzende)', hi: 'डॉक्टर (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Morgen', role: 'plain', en: 'morning', hi: 'सुबह', type: 'Noun · masc.' },
      { w: 'ausgewertete', role: 'r-verb', en: 'evaluated (erweitertes Partizipialattribut)', hi: 'विश्लेषित', type: 'Partizip II · erweitertes Attribut', why: 'An extended participial attribute: "der [am Morgen ausgewertete] Bericht" packs a whole clause before the noun (this chapter).' },
      { w: 'Bericht', role: 'plain', en: 'report', hi: 'रिपोर्ट', type: 'Noun · masc.' },
      { w: 'bestätigte', role: 'plain', en: 'confirmed', hi: 'पुष्टि की', type: 'Verb · bestätigen (Präteritum)' },
      { w: 'schließlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'was', role: 'plain', en: 'what', hi: 'जो', type: 'Relativpronomen' },
      { w: 'Tobias', role: 'plain', en: 'Tobias', hi: 'टोबियास', type: 'Name' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'lange', role: 'plain', en: 'long', hi: 'लंबे समय से', type: 'Adverb' },
      { w: 'vermutet', role: 'plain', en: 'suspected (Satzende)', hi: 'शक किया (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'nächsten', role: 'plain', en: 'next', hi: 'अगले', type: 'Adjective' },
      { w: 'Tag', role: 'plain', en: 'day', hi: 'दिन', type: 'Noun · masc.' },
      { w: 'geplante', role: 'r-verb', en: 'planned (erweitertes Partizipialattribut)', hi: 'योजनाबद्ध', type: 'Verb · Partizip II (erweitertes Attribut)' },
      { w: 'Auswertung', role: 'plain', en: 'evaluation (Satzende)', hi: 'विश्लेषण (Satzende)', type: 'Noun · fem.' },
      { w: 'musste', role: 'plain', en: 'had to', hi: 'पड़ा', type: 'Verb · müssen (Präteritum)' },
      { w: 'deshalb', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'verschoben', role: 'plain', en: 'postponed (Satzende)', hi: 'स्थगित (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Folgetag', role: 'plain', en: 'following day', hi: 'अगले दिन', type: 'Noun · masc.' },
      { w: 'stattfindende', role: 'r-verb', en: 'taking place (erweitertes Partizipialattribut, Partizip I)', hi: 'होने वाली', type: 'Partizip I · erweitertes Attribut' },
      { w: 'Nachbesprechung', role: 'plain', en: 'follow-up meeting (Satzende)', hi: 'अनुवर्ती बैठक (Satzende)', type: 'Noun · fem.' },
      { w: 'soll', role: 'plain', en: 'is supposed to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'nun', role: 'plain', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'seine', role: 'plain', en: 'his', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Frau', role: 'plain', en: 'wife (Satzende)', hi: 'पत्नी (Satzende)', type: 'Noun · fem.' },
      { w: 'einbeziehen', role: 'plain', en: 'include (Satzende)', hi: 'शामिल करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Last night in the sleep laboratory, Tobias spent it among numerous cables connected to his head. A short nap in the afternoon had hardly balanced out his previously accumulated sleep deprivation. The report recorded throughout the whole night even surprised the doctors. The report evaluated that morning finally confirmed what Tobias had long suspected. The evaluation planned for the next day therefore had to be postponed. The follow-up meeting taking place the following day is now also supposed to include his wife.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_051_L001', speaker: 'Marret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, der seit drei Nächten schlaflose Teilnehmer macht mir wirklich Sorgen.', en: 'Timo, the participant who\'s been sleepless for three nights really worries me.' },
      { id: 'B2_051_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich. Sind die vom Team sorgfältig gesammelten Daten schon ausgewertet?', en: 'Understandable. Have the data carefully collected by the team already been evaluated?' },
      { id: 'B2_051_L003', speaker: 'Marret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Noch nicht ganz, aber die ersten, gestern Abend geprüften Werte sehen gut aus.', en: 'Not quite yet, but the first values, checked yesterday evening, look good.' },
      { id: 'B2_051_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, dann sprechen wir morgen mit dem erschöpft wirkenden Teilnehmer.', en: 'Good, then we\'ll talk tomorrow with the participant who seems exhausted.' }
    ],
    transcript: 'Timo, der seit drei Nächten schlaflose Teilnehmer macht mir wirklich Sorgen. Verständlich. Sind die vom Team sorgfältig gesammelten Daten schon ausgewertet? Noch nicht ganz, aber die ersten, gestern Abend geprüften Werte sehen gut aus. Gut, dann sprechen wir morgen mit dem erschöpft wirkenden Teilnehmer.',
    translation: 'Timo, the participant who\'s been sleepless for three nights really worries me. Understandable. Have the data carefully collected by the team already been evaluated? Not quite yet, but the first values, checked yesterday evening, look good. Good, then we\'ll talk tomorrow with the participant who seems exhausted.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'seit' },
      { w: 'drei' },
      { w: 'Nächten' },
      { w: 'schlaflose' },
      { w: 'Teilnehmer' },
      { w: 'macht' },
      { w: 'mir' },
      { w: 'wirklich' },
      { w: 'Sorgen' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Sind' },
      { w: 'die' },
      { w: 'vom' },
      { w: 'Team' },
      { w: 'sorgfältig' },
      { w: 'gesammelten' },
      { w: 'Daten' },
      { w: 'schon' },
      { w: 'ausgewertet' },
      { w: '?', plain: true },
      { w: 'Noch' },
      { w: 'nicht' },
      { w: 'ganz' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'ersten' },
      { w: ',', plain: true },
      { w: 'gestern' },
      { w: 'Abend' },
      { w: 'geprüften' },
      { w: 'Werte' },
      { w: 'sehen' },
      { w: 'gut' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sprechen' },
      { w: 'wir' },
      { w: 'morgen' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'erschöpft' },
      { w: 'wirkenden' },
      { w: 'Teilnehmer' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Marret Sorgen?', qEn: 'What worries Marret?', options: ['ein neuer Kollege', 'der seit drei Nächten schlaflose Teilnehmer', 'das Wetter', 'der Zeitplan'], optionsEn: ['a new colleague', 'the participant, sleepless for three nights', 'the weather', 'the schedule'], answer: 1,
        explain: '"Der seit drei Nächten schlaflose Teilnehmer macht mir wirklich Sorgen."' },
      { q: 'Wie sehen die gestern Abend kontrollierten Werte aus?', qEn: 'How do the values checked yesterday evening look?', options: ['schlecht', 'gut', 'unklar', 'fehlend'], optionsEn: ['bad', 'good', 'unclear', 'missing'], answer: 1,
        explain: '"… die ersten, gestern Abend geprüften Werte sehen gut aus."' }
    ]
  },

  speaking: [
    { task: "Ein Teilnehmer schläft seit drei Nächten nicht. Sag es deinem Kollegen.", taskEn: "A participant hasn't slept for three nights. Tell your colleague.", de: "Der seit drei Nächten schlaflose Teilnehmer macht mir Sorgen.", en: "The participant who's been sleepless for three nights worries me." },
    { task: "Er fragt nach den Daten des Teams.", taskEn: "He asks about the team's data.", de: "Die vom Team sorgfältig gesammelten Daten sind schon ausgewertet.", en: "The data carefully collected by the team has already been analysed." },
    { task: "Beschreib einer Kollegin die Szene in der Mittagspause.", taskEn: "Describe the scene in the lunch break to a colleague.", de: "Die seit Stunden arbeitenden Kollegen machen ein kurzes Nickerchen.", en: "The colleagues, who have been working for hours, are taking a short nap." },
    { task: "Deine Betreuerin findet den Satz zu lang. Sag ihr die kürzere Fassung.", taskEn: "Your supervisor finds the sentence too long. Tell her the shorter version.", de: "Ich würde die letztes Jahr erschienene Studie schreiben, das ist kürzer.", en: "I'd write 'the study published last year', that's shorter." },
    { task: "Rollenspiel: Ihr stellt euer Schlafprojekt vor.", taskEn: "Role-play: you present your sleep project.", de: "Die im Labor untersuchten Nachteulen schlafen später. — Und die tagsüber arbeitenden Teilnehmer schlafen besser.", en: "The night owls examined in the lab sleep later. — And the participants working during the day sleep better." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite a report (6-8 sentences): Take a text full of relative clauses and replace them with participial attributes.\n\nTASK 2 — Short scientific article (8-10 sentences): Write about a research topic using at least 10 extended participial attributes.',
    starters: ['Der im Labor arbeitende ...', 'Die gestern veröffentlichte ...'],
    placeholder: 'Der im Labor arbeitende Forscher hat die Ergebnisse publiziert. Die gestern veröffentlichte Studie zeigt ...',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the correct participial attribute for "Der Student, der im Labor arbeitet"?',
      options: ['Der im Labor arbeitende Student', 'Der im Labor arbeitet Student', 'Der arbeitende im Labor Student'],
      answer: 0,
      explain: 'The prepositional phrase "im Labor" goes BEFORE the participle "arbeitende", which carries the attributive ending.'
    },
    gap: {
      sentence: ['Die gestern ', ' Dokumente sind bereit.'],
      gaps: [ { answer: 'unterschriebenen', accepts: ['unterschriebenen'] } ],
      explain: 'Plural attributive Partizip II needs the ending "-en": "unterschriebenen".'
    },
    match: {
      q: 'Match each relative clause to its participial attribute.',
      pairs: [
        { noun: 'Die Frau, die in Berlin wohnt', art: 'Die in Berlin wohnende Frau' },
        { noun: 'Das Auto, das repariert wurde', art: 'Das reparierte Auto' },
        { noun: 'Der Student, der im Labor arbeitet', art: 'Der im Labor arbeitende Student' },
        { noun: 'Die Dokumente, die gestern unterschrieben wurden', art: 'Die gestern unterschriebenen Dokumente' }
      ]
    },
    builder: {
      target: 'Build: "the newly developed software" (extended participial attribute)',
      bank: ['die', 'neu', 'entwickelte', 'Software'],
      answer: ['die', 'neu', 'entwickelte', 'Software'],
      roles: { 'neu': 'r-partizip', 'entwickelte': 'r-partizip' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der im Labor arbeiten Student.',
      right: 'Der im Labor arbeitende Student.',
      explain: 'The bare infinitive "arbeiten" cannot function as an attribute — use the Partizip I with its ending: "arbeitende".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does an extended participial attribute replace?', options: ['A relative clause', 'A conditional clause', 'A modal verb'], answer: 0,
      explain: 'Extended participial attributes are a compact, formal alternative to relative clauses.' },
    { q: 'Which participle expresses an active, ongoing action?', options: ['Partizip I (e.g. arbeitend)', 'Partizip II (e.g. gearbeitet)', 'Neither'], answer: 0,
      explain: 'Partizip I describes the noun actively DOING something.' },
    { q: 'Which participle expresses a completed action or result?', options: ['Partizip II (e.g. unterschrieben)', 'Partizip I (e.g. unterschreibend)', 'Neither'], answer: 0,
      explain: 'Partizip II describes an action that HAS BEEN done to the noun.' },
    { q: 'Where does the extending information (prepositional phrases, adverbs) go?', options: ['Before the participle', 'After the participle', 'At the end of the sentence'], answer: 0,
      explain: 'Everything from the original relative clause moves BEFORE the participle, which then carries the adjective ending closest to the noun.' },
    { q: 'Which is correct?', options: ['Die gestern unterschriebenen Dokumente', 'Die gestern unterschrieben Dokumente', 'Die gestern unterschrieben wurde Dokumente'], answer: 0,
      explain: 'Plural attributive Partizip II needs the ending "-en", and no conjugated auxiliary like "wurde" belongs inside the attribute.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-partizip', html: 'Extended participial attributes compress relative clauses into a compact phrase before the noun: Der im Labor arbeitende Student.' },
    { c: 'r-partizip', html: 'Partizip I (arbeitend) = active/ongoing. Partizip II (unterschrieben) = passive/completed. Choose by meaning.' },
    { c: 'r-partizip', html: 'All extending elements — prepositional phrases, adverbs, objects — move BEFORE the participle, which carries the attributive adjective ending closest to the noun.' }
  ],
  revisionTips: [
    'For every relative clause you build, practise compressing it into an extended participial attribute.',
    'Scan a newspaper article or academic paper for noun phrases ending in "-end" or Partizip II — count how many you find.',
    'Ask yourself: is the noun doing something (Partizip I) or has something been done to it (Partizip II)? That answers which participle to use.'
  ]
};

window.CHAPTER = CHAPTER;
