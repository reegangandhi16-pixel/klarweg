/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 3
   "Informationsstruktur: Thema → Rhema" — known information
   (Thema) placed early, new/important information (Rhema)
   placed toward the end. Word order shifts change emphasis,
   not basic meaning. Does NOT introduce linguistic theory,
   Prague School terminology, or C1 discourse structures.
   IMPORTANT: dialogue uses ONLY Meret and Timo.
   Vocabulary source: uploaded chapter-3 list (34 items) — a
   multilingual-travel/official-language theme (Sprachregion,
   Amtssprache, Vielsprachigkeit, Sitzung, Abteil…) — a natural
   fit for demonstrating shifting emphasis across sentences.
============================================================ */
const CHAPTER = {
  id: 'b2-03-informationsstruktur-thema-rhema',
  phase: 'B2 · Phase 1',
  number: 3,
  title: 'Informationsstruktur: Thema → Rhema',
  titleEn: 'Information structure: theme → rheme',
  description: 'Start with what\'s known (Thema), end with what\'s new (Rhema) — the rhythm that makes German sound natural, not translated.',
  xp: 340,
  time: 50,
  difficulty: 'Advanced',
  nextChapter: { number: 4, title: 'Formales es (Subjekt-es)', titleEn: 'Formal es (dummy subject)' , href: 'chapter-b2-04-formales-es.html' },

  prevChapter: { number: 2, title: 'Mehrteilige Verben (Verbalkomplex)', titleEn: 'Multi-part verb clusters (Verbalkomplex)', href: 'chapter-b2-02-verbalkomplex.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Known first, <em>new information last.</em>',
    intro: 'On a train through changing language regions, Meret and Timo notice French becoming the official language, a work contract already signed — every sentence built from what\'s already known toward the new information at the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how moving Thema and Rhema shifts emphasis without changing meaning'
    ],
    scene: 'Eine mehrsprachige Zugreise',
    femaleSpeakers: ['Meret'],
    dialogue: [
      { speaker: 'Meret', tokens: [
        { w: 'Dieses', role: 'r-akkusativ', en: 'this (neut.)', hi: 'यह', pron: 'DEE-zes', type: 'Determiner' },
        { w: 'Abteil', role: 'r-akkusativ', en: 'compartment', hi: 'डिब्बा', pron: 'ap-TILE', type: 'Noun · neut.', why: 'das Abteil (this chapter).', ex: 'Thema-Rhema: known info (Thema) first, new info (Rhema) later in the sentence (this chapter).', exEn: 'Dieses Abteil teilen wir mit vielen Reisenden.' },
        { w: 'teilen', role: 'r-verb', en: 'share', hi: 'साझा करते हैं', pron: 'TY-len', type: 'Verb · teilen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'vielen', role: 'r-dativ', en: 'many', hi: 'कई', pron: 'FEE-len', type: 'Determiner · dative' },
        { w: 'Reisenden', role: 'r-dativ', en: 'travelers (dat.)', hi: 'यात्रियों के', pron: 'RY-zen-den', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'This compartment we share with many travelers.', hi: 'Yeh dabba hum kai yatriyon ke saath saajha karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Sprachregion', role: 'r-subject', en: 'language region', hi: 'भाषा क्षेत्र', pron: 'SHPRAHKH-ray-gyon', type: 'Noun · fem.', why: 'die Sprachregion (this chapter).', ex: 'Die Sprachregion wechselt bald.', exEn: 'The language region changes soon.' },
        { w: 'wechselt', role: 'r-verb', en: 'changes', hi: 'बदलेगा', pron: 'VEK-selt', type: 'Verb · wechseln' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'The language region changes soon.', hi: 'Bhasha kshetra jald badlega.' },
      { speaker: 'Meret', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Amtssprache', role: 'r-akkusativ', en: 'official language', hi: 'राजभाषा', pron: 'AMTS-shprah-khuh', type: 'Noun · fem.', why: 'die Amtssprache (this chapter).', ex: 'Wir hören dort die Amtssprache Französisch.', exEn: 'There we hear the official language French.' },
        { w: 'Französisch', role: 'r-akkusativ', en: 'French', hi: 'फ़्रेंच', pron: 'fran-TSÖ-zish', type: 'Noun · language' },
        { w: 'hören', role: 'r-verb', en: 'hear', hi: 'सुनते हैं', pron: 'HÖ-ren', type: 'Verb · hören (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'There we hear the official language French.', hi: 'Wahaan hum raajbhaasha French sunte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Vielsprachigkeit', role: 'r-akkusativ', en: 'multilingualism', hi: 'बहुभाषिकता', pron: 'FEEL-shprah-khikh-kite', type: 'Noun · fem.', why: 'die Vielsprachigkeit (this chapter).', ex: 'Die Vielsprachigkeit finde ich faszinierend.', exEn: 'I find the multilingualism fascinating.' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचता हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'faszinierend', role: 'r-akkusativ', en: 'fascinating', hi: 'आकर्षक', pron: 'fa-tsi-NEE-rent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The multilingualism I find really fascinating.', hi: 'Bahubhashikta mujhe sach mein aakarshak lagti hai.' },
      { speaker: 'Meret', tokens: [
        { w: 'Einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Arbeitsvertrag', role: 'r-akkusativ', en: 'work contract', hi: 'कार्य अनुबंध', pron: 'AR-byts-fer-trahk', type: 'Noun · masc.', why: 'der Arbeitsvertrag (this chapter).', ex: 'Einen Arbeitsvertrag habe ich hier unterschrieben.', exEn: 'A work contract I have signed here.' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'unterschrieben', role: 'r-verb', en: 'signed', hi: 'हस्ताक्षरित', pron: 'un-ter-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'A work contract I have signed here.', hi: 'Ek kaarya anubandh maine yahaan hastakshaarit kiya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'musst', role: 'r-modalverb', en: 'must', hi: 'ज़रूरत है', pron: 'MUST', type: 'Modal · müssen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mehrere', role: 'r-akkusativ', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'Sprachen', role: 'r-akkusativ', en: 'languages', hi: 'भाषाएँ', pron: 'SHPRAH-khen', type: 'Noun · plural' },
        { w: 'beherrschen', role: 'r-verb', en: 'master', hi: 'महारत रखना', pron: 'be-HAIR-shen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Really? Then you must master several languages.', hi: 'Sach mein? Toh tumhe kai bhashaon mein maharat honi chahiye.' },
      { speaker: 'Meret', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true }
      ], en: 'Yes, that is true.', hi: 'Haan, yeh sahi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every German sentence flows from <span class="de r-object">Thema</span> — what\'s already known — toward <span class="de r-rhema">Rhema</span> — the new, important information. Moving an element to sentence-start (like <span class="de">Aufgeregt bin ich…</span>) shifts EMPHASIS, not basic meaning. That flow is why native German sounds natural instead of translated.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INFORMATIONSSTRUKTUR: THEMA -> RHEMA (B2 level): known/already-discussed information (Thema) is placed early in the sentence, while new or important information (Rhema) is placed toward the end. Word order can shift for emphasis (fronting an element) without changing the basic meaning. ' +
    'Do NOT expect linguistic terminology, Prague School theory, or C1 discourse structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check whether known information sits early and new/important information sits later in each sentence — flag only clear violations, not stylistic choices.\n' +
    '- Word order variation for emphasis is correct German, not an error — do not flag natural fronting.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Information-flow check:</b> one sentence on whether known information came before new information in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you consistently move from known to new information, and use fronting naturally for emphasis. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Thema vs Rhema comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — practise asking "what\'s already known?" and "what\'s new?" before building each sentence.'
  },

  parserSentence: [
    { w: 'Anna', role: 'r-subject' }, { w: 'hat', role: 'r-verb' },
    { w: 'gestern', role: 'plain' }, { w: 'ein', role: 'plain' },
    { w: 'neues', role: 'plain' }, { w: 'Auto', role: 'r-rhema' },
    { w: 'gekauft', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: known information first, new information last.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meret and Timo travel through language regions, each sentence flowing from known to new.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Thema, Rhema, and how word order shifts create emphasis.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage with natural known-to-new information flow.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the speaker\'s emphasis and identify new information.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give presentations organizing information from Thema to Rhema naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and summaries with natural German information flow.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill identifying Thema/Rhema and shifting sentence focus.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 340 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words — multilingual travel vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Thema/Rhema identification drills, sentence-focus rewriting, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete information-structure reference — Thema/Rhema, emphasis shifts, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Thema', text: 'Identify known information and place it early' },
    { de: 'Rhema', text: 'Identify new information and place it toward the end' },
    { de: 'Betonung', text: 'Shift word order to change emphasis, not meaning' },
    { de: 'natürlicher Fluss', text: 'Build sentences that flow from known to new' },
    { de: 'gesprochen vs geschrieben', text: 'Recognize how spoken German uses fronting for emphasis' }
  ],

  // ---------- Vocabulary (34 items — full chapter-3 upload list) ----------
  vocab: [
    { de: 'regeln', pos: 'verb', level: 'B2', en: 'to regulate, settle', hi: 'सुलझाना', ex: 'Wir werden das gemeinsam regeln.', exEn: 'We\'ll settle that together.', exHi: 'Hum isko saath milkar suljhaayenge.', conj: { praesens: 'regelt', praeteritum: 'regelte', perfekt: 'hat geregelt' } },
    { de: 'riskieren', pos: 'verb', level: 'B2', en: 'to risk', hi: 'जोखिम उठाना', ex: 'Manche Menschen riskieren ein Missverständnis.', exEn: 'Some people risk a misunderstanding.', exHi: 'Kuchh log ek galatfahmi ka jokhim uthaate hain.', conj: { praesens: 'riskiert', praeteritum: 'riskierte', perfekt: 'hat riskiert' } },
    { de: 'schaffen', pos: 'verb', level: 'B2', en: 'to create, manage', hi: 'पैदा करना, संभालना', ex: 'Die Vielsprachigkeit schafft auch Unverständnis.', exEn: 'Multilingualism also creates a lack of understanding.', exHi: 'Bahubhaashita samajh ki kami bhi paida karti hai.', conj: { praesens: 'schafft', praeteritum: 'schuf', perfekt: 'hat geschaffen' } },
    { de: 'scheitern', pos: 'verb', level: 'B2', en: 'to fail', hi: 'असफल होना', ex: 'Das Projekt ist gescheitert.', exEn: 'The project failed.', exHi: 'Project asafal ho gaya.', conj: { praesens: 'scheitert', praeteritum: 'scheiterte', perfekt: 'ist gescheitert' } },
    { de: 'sehnsüchtig', pos: 'adjective', level: 'B2', en: 'longing, yearning', hi: 'तड़पता हुआ', ex: 'Sie reisen so sehnsüchtig.', exEn: 'They travel so longingly.', exHi: 'Woh itni tadap ke saath yatra karte hain.' },
    { de: 'Sitzung', art: 'die', gender: 'f', plural: 'Sitzungen', pos: 'noun', level: 'B2', en: 'session, meeting', hi: 'बैठक', ex: 'Ich bin aufgeregt wegen der nächsten Sitzung.', exEn: 'I\'m excited about the next meeting.', exHi: 'Main agli baithak ko lekar utsaahit hoon.' },
    { de: 'Sprachregion', art: 'die', gender: 'f', plural: 'Sprachregionen', pos: 'noun', level: 'B2', en: 'language region', hi: 'भाषा क्षेत्र', ex: 'Der Abstand zwischen den Sprachregionen ist kaum zu überbrücken.', exEn: 'The gap between the language regions is hardly bridgeable.', exHi: 'Bhaasha kshetron ke beech ki doori shaayad hi paati jaa sakti hai.' },
    { de: 'trösten', pos: 'verb', level: 'B2', en: 'to comfort, console', hi: 'तसल्ली देना', ex: 'Diese Vertrautheit tröstet mich wirklich.', exEn: 'This familiarity really comforts me.', exHi: 'Yeh parichitata sach mein mujhe tasalli deti hai.', conj: { praesens: 'tröstet', praeteritum: 'tröstete', perfekt: 'hat getröstet' } },
    { de: 'umarmen', pos: 'verb', level: 'B2', en: 'to embrace, hug', hi: 'गले लगाना', ex: 'Darf ich dich kurz umarmen?', exEn: 'May I briefly embrace you?', exHi: 'Kya main tumhein thodi der ke liye gale laga sakti hoon?', conj: { praesens: 'umarmt', praeteritum: 'umarmte', perfekt: 'hat umarmt' } },
    { de: 'Unverständnis', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'lack of understanding', hi: 'समझ की कमी', ex: 'Die Vielsprachigkeit schafft auch ein gewisses Unverständnis.', exEn: 'Multilingualism also creates a certain lack of understanding.', exHi: 'Bahubhaashita kuchh samajh ki kami bhi paida karti hai.' },
    { de: 'verbergen', pos: 'verb', level: 'B2', en: 'to hide, conceal', hi: 'छुपाना', ex: 'Du musst das nicht verbergen.', exEn: 'You don\'t need to hide that.', exHi: 'Tumhein isko chhupaane ki zaroorat nahi.', conj: { praesens: 'verbirgt', praeteritum: 'verbarg', perfekt: 'hat verborgen' } },
    { de: 'verfilmen', pos: 'verb', level: 'B2', en: 'to film, adapt for screen', hi: 'फ़िल्म बनाना', ex: 'Der Roman wurde verfilmt.', exEn: 'The novel was adapted for the screen.', exHi: 'Upanyaas par film banaayi gayi.', conj: { praesens: 'verfilmt', praeteritum: 'verfilmte', perfekt: 'hat verfilmt' } },
    { de: 'Verpackung', art: 'die', gender: 'f', plural: 'Verpackungen', pos: 'noun', level: 'B2', en: 'packaging', hi: 'पैकेजिंग', ex: 'Die Verpackung ist mehrsprachig beschriftet.', exEn: 'The packaging is labeled multilingually.', exHi: 'Packaging bahubhaashi roop se likhi hai.' },
    { de: 'Vertrautheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'familiarity', hi: 'परिचितता', ex: 'Diese Vertrautheit tröstet mich wirklich.', exEn: 'This familiarity really comforts me.', exHi: 'Yeh parichitata sach mein mujhe tasalli deti hai.' },
    { de: 'Vielsprachigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'multilingualism', hi: 'बहुभाषिता', ex: 'Die Vielsprachigkeit schafft jedoch auch ein Unverständnis.', exEn: 'Multilingualism, however, also creates a lack of understanding.', exHi: 'Bahubhaashita, halanki, samajh ki kami bhi paida karti hai.' },
    { de: 'vornehm', pos: 'adjective', level: 'B2', en: 'distinguished, refined', hi: 'शालीन', ex: 'Der Zugbegleiter wirkte sehr vornehm.', exEn: 'The train attendant seemed very refined.', exHi: 'Train karmachaari bahut shaaleen lag raha tha.' },
    { de: 'Vorstellung', art: 'die', gender: 'f', plural: 'Vorstellungen', pos: 'noun', level: 'B2', en: 'idea, imagination, performance', hi: 'विचार, प्रदर्शन', ex: 'Sie hatte eine klare Vorstellung von der Reise.', exEn: 'She had a clear idea of the trip.', exHi: 'Uske paas yatra ki spasht kalpana thi.' },
    { de: 'wagen', pos: 'verb', level: 'B2', en: 'to dare, venture', hi: 'साहस करना', ex: 'Sie wagte die weite Reise.', exEn: 'She dared the long journey.', exHi: 'Usne lambi yatra ka saahas kiya.', conj: { praesens: 'wagt', praeteritum: 'wagte', perfekt: 'hat gewagt' } },
    { de: 'zahlreich', pos: 'adjective', level: 'B2', en: 'numerous', hi: 'असंख्य', ex: 'Es gibt zahlreiche Sprachregionen.', exEn: 'There are numerous language regions.', exHi: 'Asankhya bhaasha kshetra hain.' },
    { de: 'zerrissen', pos: 'adjective', level: 'B2', en: 'torn', hi: 'फटा हुआ', ex: 'Die Karte war völlig zerrissen.', exEn: 'The map was completely torn.', exHi: 'Naksha bilkul phata hua tha.' },
    { de: 'abenteuerlich', pos: 'adjective', level: 'B2', en: 'adventurous', hi: 'साहसी', ex: 'Die Zugreise war sehr abenteuerlich.', exEn: 'The train journey was very adventurous.', exHi: 'Train yatra bahut saahasi thi.' },
    { de: 'Abstand', art: 'der', gender: 'm', plural: 'Abstände', pos: 'noun', level: 'B2', en: 'distance, gap', hi: 'दूरी', ex: 'Der Abstand zwischen den Sprachregionen ist kaum zu überbrücken.', exEn: 'The gap between the language regions is hardly bridgeable.', exHi: 'Bhaasha kshetron ke beech ki doori shaayad hi paati jaa sakti hai.' },
    { de: 'Abteil', art: 'das', gender: 'n', plural: 'Abteile', pos: 'noun', level: 'B2', en: 'compartment', hi: 'डिब्बा', ex: 'Zum Glück ist unser Abteil sehr ruhig.', exEn: 'Luckily, our compartment is very quiet.', exHi: 'Khushkismati se, hamaara dibba bahut shaant hai.' },
    { de: 'alkoholfrei', pos: 'adjective', level: 'B2', en: 'alcohol-free', hi: 'शराब रहित', ex: 'Sie bestellte ein alkoholfreies Getränk.', exEn: 'She ordered an alcohol-free drink.', exHi: 'Usne ek sharaab-rahit peya mangwaaya.' },
    { de: 'Alltagsprodukt', art: 'das', gender: 'n', plural: 'Alltagsprodukte', pos: 'noun', level: 'B2', en: 'everyday product', hi: 'रोज़मर्रा का उत्पाद', ex: 'Die Verpackung dieses Alltagsprodukts ist mehrsprachig.', exEn: 'The packaging of this everyday product is multilingual.', exHi: 'Is rozmarra ke utpaad ki packaging bahubhaashi hai.' },
    { de: 'amtlich', pos: 'adjective', level: 'B2', en: 'official', hi: 'आधिकारिक', ex: 'Zwei Sprachen sind hier amtlich anerkannt.', exEn: 'Two languages are officially recognised here.', exHi: 'Yahaan do bhaashaayein aadhikaarik roop se maanyata praapt hain.' },
    { de: 'Amtssprache', art: 'die', gender: 'f', plural: 'Amtssprachen', pos: 'noun', level: 'B2', en: 'official language', hi: 'राजभाषा', ex: 'Sprechen die Zugbegleiter hier die Amtssprache?', exEn: 'Do the train attendants here speak the official language?', exHi: 'Kya yahaan train ke karmachaari raajbhaasha bolte hain?' },
    { de: 'anerkennen', pos: 'verb', level: 'B2', en: 'to recognise, acknowledge', hi: 'मान्यता देना', ex: 'Zwei Sprachen sind amtlich anerkannt.', exEn: 'Two languages are officially recognised.', exHi: 'Do bhaashaayein aadhikaarik roop se maanyata praapt hain.', conj: { praesens: 'erkennt an', praeteritum: 'erkannte an', perfekt: 'hat anerkannt' } },
    { de: 'Anschluss', art: 'der', gender: 'm', plural: 'Anschlüsse', pos: 'noun', level: 'B2', en: 'connection', hi: 'कनेक्शन', ex: 'Unser Zug hat plötzlich den Anschluss verpasst.', exEn: 'Our train suddenly missed the connection.', exHi: 'Hamaari train achaanak connection chook gayi.' },
    { de: 'Arbeitsvertrag', art: 'der', gender: 'm', plural: 'Arbeitsverträge', pos: 'noun', level: 'B2', en: 'employment contract', hi: 'रोज़गार अनुबंध', ex: 'Sie unterschrieb den Arbeitsvertrag.', exEn: 'She signed the employment contract.', exHi: 'Usne rozgaar anubandh par hastakshar kiye.' },
    { de: 'Art', art: 'die', gender: 'f', plural: 'Arten', pos: 'noun', level: 'B2', en: 'kind, type, manner', hi: 'तरह, प्रकार', ex: 'Das ist eine besondere Art zu reisen.', exEn: 'That\'s a special kind of traveling.', exHi: 'Yeh yatra karne ka ek khaas tareeka hai.' },
    { de: 'aufgeregt', pos: 'adjective', level: 'B2', en: 'excited, agitated', hi: 'उत्साहित', ex: 'Aufgeregt bin ich wegen der nächsten Sitzung.', exEn: 'I am excited because of the next meeting.', exHi: 'Main agli baithak ki wajah se utsaahit hoon.' },
    { de: 'ausbremsen', pos: 'verb', level: 'B2', en: 'to slow down, hold back', hi: 'धीमा करना', ex: 'Den Anschluss haben wir schon ausbremsen sehen können.', exEn: 'We could already see the connection slowing us down.', exHi: 'Hum pehle hi dekh sakte the ki connection humein dheema kar raha hai.', conj: { praesens: 'bremst aus', praeteritum: 'bremste aus', perfekt: 'hat ausgebremst' } },
    { de: 'Ausländerquote', art: 'die', gender: 'f', plural: 'Ausländerquoten', pos: 'noun', level: 'B2', en: 'foreigner quota', hi: 'विदेशी कोटा', ex: 'Die Ausländerquote wird oft diskutiert.', exEn: 'The foreigner quota is often discussed.', exHi: 'Videshi kota par aksar charcha hoti hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Informationsstruktur?',
      body: [ 'Every sentence has known information (Thema) and new information (Rhema). Thema usually comes first, Rhema usually comes last.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Thema (bekannt)', '<span class="de">Anna</span>'],
          ['Rhema (neu)', '<span class="de">hat gestern ein neues Auto gekauft</span>']
        ]
      },
      hinglish: 'Har sentence mein known information (Thema) aur new information (Rhema) hota hai. Thema pehle, Rhema aakhir mein.'
    },
    {
      title: 'Thema',
      body: [ 'Answers "What are we talking about?" — a known person, object, place, or situation.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Anna arbeitet heute von zu Hause.</span>'],
          ['<span class="de">Der neue Lehrer spricht sehr gut Deutsch.</span>']
        ]
      },
      hinglish: '"Hum kis baare mein baat kar rahe hain?" ka jawaab deta hai.'
    },
    {
      title: 'Rhema',
      body: [ 'Answers "What is NEW?" — usually the most important message, placed toward the end.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Anna hat die Prüfung bestanden.</span>'],
          ['<span class="de">Der Zug kommt heute später.</span>']
        ]
      },
      hinglish: '"Kya naya hai?" ka jawaab deta hai — aksar sabse mahatvapurn baat, aakhir mein.'
    },
    {
      title: 'Wortstellung und Betonung',
      body: [ 'Moving an element to sentence-start shifts emphasis, not basic meaning.' ],
      table: {
        head: ['Focus', 'Example'],
        rows: [
          ['Fokus auf Anna', '<span class="de">Anna hat gestern in Berlin gearbeitet.</span>'],
          ['Fokus auf gestern', '<span class="de">Gestern hat Anna in Berlin gearbeitet.</span>'],
          ['Fokus auf Berlin', '<span class="de">In Berlin hat Anna gestern gearbeitet.</span>']
        ]
      },
      hinglish: 'Kisi element ko sentence-start mein le jaane se emphasis badalta hai, basic meaning nahi.'
    },
    {
      title: 'Typischer Informationsfluss',
      body: [ 'The natural German order: known information → time → place → new information → verb complex.' ],
      table: {
        head: ['Order', 'Example'],
        rows: [
          ['Bekannt → Zeit → Ort → Neu → Verbkomplex', '<span class="de">Anna hat gestern im Büro lange an ihrem Projekt gearbeitet.</span>']
        ]
      },
      hinglish: 'Natural German order: known information → time → place → new information → verb complex.'
    },
    {
      title: 'Gesprochen vs Geschrieben',
      body: [ 'Spoken German often fronts an element for spontaneous emphasis.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Deutsch spricht Anna wirklich gut.</span>'],
          ['<span class="de">Heute arbeitet Rohan nicht im Büro.</span>']
        ]
      },
      hinglish: 'Spoken German mein aksar ek element ko highlight karne ke liye aage kiya jaata hai.'
    },
    {
      title: 'Betonung durch Stress',
      body: [ 'Spoken stress can shift meaning even without changing word order.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de">ANNA hat das gemacht.</span>', 'not Rohan'],
          ['<span class="de">Anna hat DAS gemacht.</span>', 'not something else']
        ]
      },
      hinglish: 'Spoken stress meaning badal sakta hai bina word order badle.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These four mistakes all come from the same root: ignoring the known-to-new flow, so pronouns, time phrases and new information end up in the wrong order.' ],
      mistakes: [
        { wrong: 'Ich habe gestern ihn gesehen.', right: 'Ich habe ihn gestern gesehen.', why: 'A pronoun is already-known information, so it moves to the front of the Mittelfeld \u2014 before the time expression, not after it.' },
        { wrong: 'Gestern Anna hat in Berlin gearbeitet.', right: 'Gestern hat Anna in Berlin gearbeitet.', why: 'Fronting an element for emphasis does not move the finite verb \u2014 it stays in position 2, so the subject follows it.' },
        { wrong: 'Anna hat ein neues Auto gestern gekauft.', right: 'Anna hat gestern ein neues Auto gekauft.', why: 'The new information (ein neues Auto) belongs late in the Mittelfeld, after the time expression \u2014 that is the Thema \u2192 Rhema flow.' },
        { wrong: 'Der Zug kommt sp\u00e4ter heute.', right: 'Der Zug kommt heute sp\u00e4ter.', why: 'The time expression (heute) comes before the degree/manner element (sp\u00e4ter), following the usual Mittelfeld order.' },
        { wrong: 'Anna hat es gestern im B\u00fcro gekauft nicht.', right: 'Anna hat es gestern im B\u00fcro nicht gekauft.', why: 'nicht belongs directly before the right bracket (the Partizip II), never after it \u2014 nothing follows the verb complex.' }
      ],
      hinglish: 'Chaaron galtiyon ki jad ek hi hai \u2014 known-to-new flow ka dhyaan na rakhna. Pronoun jaisi jaani-pehchaani cheez Mittelfeld mein aage aati hai, aur nayi information baad mein. Aur yaad rakho ki kisi cheez ko aage laane se bhi finite verb position 2 par hi rehta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Natural information flow is a hallmark of fluent, native-like B2 writing and speaking — examiners notice it immediately.' ],
      note: 'Quick check: is this already known? Place it early (Thema). Is this new or important? Place it toward the end (Rhema).',
      hinglish: 'Natural information flow fluent, native-like B2 writing aur speaking ki pehchaan hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die Schweiz: ein Land, viele Sprachen',
    titleEn: 'Switzerland: one country, many languages',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Schweiz', role: 'r-subject', en: 'Switzerland (Thema)', hi: 'स्विट्ज़रलैंड (Thema)', type: 'Name (Thema — bekannte Info)', why: 'Thema-Rhema: known info (Switzerland, the topic) opens the sentence.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'berühmt', role: 'plain', en: 'famous', hi: 'प्रसिद्ध', type: 'Adjective' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'ihre', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Vielsprachigkeit', role: 'r-object', en: 'multilingualism (Rhema)', hi: 'बहुभाषिकता (Rhema)', type: 'Noun · fem. (Rhema — neue Info, Satzende)', why: 'die Vielsprachigkeit (this chapter). New info (Rhema) closes the sentence.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Land', role: 'plain', en: 'country', hi: 'देश', type: 'Noun · neut.' },
      { w: 'gibt', role: 'plain', en: 'there are', hi: 'हैं', type: 'Verb · es gibt' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'vier', role: 'plain', en: 'four', hi: 'चार', type: 'Number' },
      { w: 'Amtssprachen', role: 'r-object', en: 'official languages (Rhema)', hi: 'राजभाषाएँ (Rhema)', type: 'Noun · plural (Rhema)', why: 'die Amtssprache (this chapter).' },
      { w: ':', plain: true },
      { w: 'Deutsch', role: 'plain', en: 'German', hi: 'जर्मन', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'Französisch', role: 'plain', en: 'French', hi: 'फ़्रेंच', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'Italienisch', role: 'plain', en: 'Italian', hi: 'इतालवी', type: 'Noun · neut.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Rätoromanisch', role: 'plain', en: 'Romansh', hi: 'रोमांश', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Jede', role: 'r-subject', en: 'every (Thema)', hi: 'हर (Thema)', type: 'Determiner (Thema)' },
      { w: 'Sprachregion', role: 'r-subject', en: 'language region (Thema)', hi: 'भाषा क्षेत्र (Thema)', type: 'Noun · fem. (Thema)', why: 'die Sprachregion (this chapter).' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'ihre', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'eigene', role: 'plain', en: 'own', hi: 'अपनी', type: 'Adjective' },
      { w: 'Art', role: 'r-object', en: 'way of life (Rhema)', hi: 'जीने का तरीक़ा (Rhema)', type: 'Noun · fem. (Rhema)', why: 'die Art (this chapter).' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'leben', role: 'plain', en: 'live', hi: 'जीना', type: 'Infinitiv' },
      { w: ',', plain: true },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'das', role: 'r-subject', en: 'that (Thema, resumes prior Rhema)', hi: 'यह (Thema)', type: 'Pronoun (Thema)', why: 'Thema-Rhema: the previous Rhema ("own way of life") becomes this sentence\'s Thema, chaining the ideas together.' },
      { w: 'schafft', role: 'plain', en: 'creates', hi: 'पैदा करता है', type: 'Verb · schaffen', why: 'schaffen (this chapter).' },
      { w: 'manchmal', role: 'plain', en: 'sometimes', hi: 'कभी-कभी', type: 'Adverb' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'Unverständnis', role: 'r-object', en: 'misunderstanding (Rhema)', hi: 'ग़लतफ़हमी (Rhema)', type: 'Noun · neut. (Rhema)', why: 'das Unverständnis (this chapter).' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'बीच', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Regionen', role: 'plain', en: 'regions (Satzende)', hi: 'क्षेत्रों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'Beispiel', role: 'plain', en: 'example', hi: 'उदाहरण', type: 'Noun · neut.' },
      { w: ':', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Sitzung', role: 'plain', en: 'meeting', hi: 'बैठक', type: 'Noun · fem.', why: 'die Sitzung (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Bundeshaus', role: 'plain', en: 'Federal Palace', hi: 'संघीय भवन', type: 'Name' },
      { w: 'riskiert', role: 'plain', en: 'risks', hi: 'ख़तरा उठाता है', type: 'Verb · riskieren', why: 'riskieren (this chapter).' },
      { w: 'ein', role: 'r-subject', en: 'a (Thema, new but general)', hi: 'एक', type: 'Article' },
      { w: 'Politiker', role: 'r-subject', en: 'politician', hi: 'राजनेता', type: 'Noun · masc.' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Deutschschweiz', role: 'plain', en: 'German-speaking Switzerland', hi: 'जर्मन-भाषी स्विट्ज़रलैंड', type: 'Name' },
      { w: ',', plain: true },
      { w: 'missverstanden', role: 'plain', en: 'misunderstood', hi: 'ग़लत समझा जाना', type: 'Verb · Partizip II' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'werden', role: 'r-verb', en: 'be (Satzende, Rhema)', hi: 'होना (Satzende, Rhema)', type: 'Verb · werden (Infinitiv Passiv, Rhema)' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-connector', en: 'if', hi: 'अगर', type: 'Konjunktion · wenn' },
      { w: 'er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'schnell', role: 'plain', en: 'fast', hi: 'तेज़', type: 'Adjective' },
      { w: 'spricht', role: 'plain', en: 'speaks (Satzende)', hi: 'बोलता है (Satzende)', type: 'Verb · sprechen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (Thema)', hi: 'ये (Thema)', type: 'Article (Thema)' },
      { w: 'Westschweizer', role: 'r-subject', en: 'French-Swiss', hi: 'पश्चिमी स्विस', type: 'Adjective (undekliniert)' },
      { w: 'Kollegen', role: 'r-subject', en: 'colleagues', hi: 'सहयोगी', type: 'Noun · plural' },
      { w: 'wagen', role: 'plain', en: 'dare', hi: 'साहस करते हैं', type: 'Verb · wagen', why: 'wagen (this chapter).' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'dann', role: 'plain', en: 'then', hi: 'तब', type: 'Adverb' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'nachzufragen', role: 'r-object', en: 'to ask again (Satzende, Rhema)', hi: 'दोबारा पूछना (Satzende, Rhema)', type: 'Verb · nachfragen (Infinitiv mit zu, Rhema)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'Beobachter', role: 'plain', en: 'observers', hi: 'पर्यवेक्षक', type: 'Noun · plural' },
      { w: 'finden', role: 'plain', en: 'find', hi: 'मानते हैं', type: 'Verb · finden' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Land', role: 'plain', en: 'country', hi: 'देश', type: 'Noun · neut.' },
      { w: 'dadurch', role: 'plain', en: 'because of this', hi: 'इसकी वजह से', type: 'Pronominaladverb' },
      { w: 'zerrissen', role: 'r-object', en: 'torn apart (Rhema)', hi: 'बँटा हुआ (Rhema)', type: 'Adjective (Rhema)', why: 'zerrissen (this chapter).' },
      { w: ',', plain: true },
      { w: 'doch', role: 'r-connector', en: 'yet', hi: 'फिर भी', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the', hi: 'अधिकांश', type: 'Article' },
      { w: 'meisten', role: 'plain', en: 'most', hi: 'अधिकांश', type: 'Adjective' },
      { w: 'Schweizer', role: 'plain', en: 'Swiss people', hi: 'स्विस लोग', type: 'Noun · plural' },
      { w: 'sehen', role: 'plain', en: 'see', hi: 'देखते हैं', type: 'Verb · sehen' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. dat.)', hi: 'इस', type: 'Determiner · Dat.' },
      { w: 'Vielfalt', role: 'plain', en: 'diversity', hi: 'विविधता', type: 'Noun · fem.' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Stärke', role: 'r-object', en: 'strength (Rhema)', hi: 'ताक़त (Rhema)', type: 'Noun · fem. (Rhema)' },
      { w: '.', plain: true },
      { w: 'Ausländer', role: 'r-subject', en: 'foreigners (Thema)', hi: 'विदेशी (Thema)', type: 'Noun · plural (Thema)' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'who', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Arbeitsvertrag', role: 'plain', en: 'work contract', hi: 'कार्य अनुबंध', type: 'Noun · masc.', why: 'der Arbeitsvertrag (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Schweiz', role: 'plain', en: 'Switzerland', hi: 'स्विट्ज़रलैंड', type: 'Name' },
      { w: 'unterschreiben', role: 'plain', en: 'sign (Satzende)', hi: 'हस्ताक्षर करते हैं (Satzende)', type: 'Verb · unterschreiben (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'müssen', role: 'plain', en: 'must', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'zunächst', role: 'plain', en: 'first', hi: 'पहले', type: 'Adverb' },
      { w: 'an', role: 'plain', en: 'to', hi: 'के', type: 'Preposition · Akk.' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'jeweilige', role: 'plain', en: 'respective', hi: 'संबंधित', type: 'Adjective' },
      { w: 'Sprachregime', role: 'r-object', en: 'language regime (Rhema)', hi: 'भाषा-व्यवस्था (Rhema)', type: 'Noun · neut. (Rhema, Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Region', role: 'plain', en: 'region', hi: 'क्षेत्र', type: 'Noun · fem.' },
      { w: 'gewöhnen', role: 'r-verb', en: 'get used to (Satzende)', hi: 'अभ्यस्त होना (Satzende)', type: 'Verb · sich gewöhnen (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Switzerland is famous for its multilingualism. In the country there are four official languages: German, French, Italian, and Romansh. Every language region has its own way of life, and that sometimes creates misunderstanding between the regions. One example: in a meeting in the Federal Palace, a politician from German-speaking Switzerland risks being misunderstood if he speaks too fast. The French-Swiss colleagues then often dare to ask again immediately. Some observers find the country torn apart by this, yet most Swiss people see exactly this diversity as their strength. Foreigners who sign a work contract in Switzerland must first get used to the respective language regime of the region.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_003_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Meret, dieser Wagen hier — fährt der auch über die Grenze?', en: 'Meret, this train here — does it also go across the border?' },
      { id: 'B2_003_L002', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ab der nächsten Station wird hier offiziell Französisch gesprochen.', en: 'Yes, from the next station on, French is officially spoken here.' },
      { id: 'B2_003_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Interessant. Und den Vertrag, den du erwähnt hast — hast du den schon unterschrieben?', en: 'Interesting. And the contract you mentioned — have you already signed it?' },
      { id: 'B2_003_L004', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Den Vertrag habe ich gestern Abend unterschrieben, ja.', en: 'The contract, I signed last night, yes.' }
    ],
    transcript: 'Meret, dieser Wagen hier — fährt der auch über die Grenze? Ja, ab der nächsten Station wird hier offiziell Französisch gesprochen. Interessant. Und den Vertrag, den du erwähnt hast — hast du den schon unterschrieben? Den Vertrag habe ich gestern Abend unterschrieben, ja.',
    translation: 'Meret, this train here — does it also go across the border? Yes, from the next station on, French is officially spoken here. Interesting. And the contract you mentioned — have you already signed it? The contract, I signed last night, yes.',
    tokens: [
      { w: 'Meret' },
      { w: ',', plain: true },
      { w: 'dieser' },
      { w: 'Wagen' },
      { w: 'hier' },
      { w: '—', plain: true },
      { w: 'fährt' },
      { w: 'der' },
      { w: 'auch' },
      { w: 'über' },
      { w: 'die' },
      { w: 'Grenze' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ab' },
      { w: 'der' },
      { w: 'nächsten' },
      { w: 'Station' },
      { w: 'wird' },
      { w: 'hier' },
      { w: 'offiziell' },
      { w: 'Französisch' },
      { w: 'gesprochen' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'den' },
      { w: 'Vertrag' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'du' },
      { w: 'erwähnt' },
      { w: 'hast' },
      { w: '—', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'den' },
      { w: 'schon' },
      { w: 'unterschrieben' },
      { w: '?', plain: true },
      { w: 'Den' },
      { w: 'Vertrag' },
      { w: 'habe' },
      { w: 'ich' },
      { w: 'gestern' },
      { w: 'Abend' },
      { w: 'unterschrieben' },
      { w: ',', plain: true },
      { w: 'ja' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was passiert ab der nächsten Station?', qEn: 'What happens from the next station on?', options: ['der Zug hält', 'Französisch wird gesprochen', 'es gibt Essen', 'der Wagen wechselt'], optionsEn: ['the train stops', 'French is spoken', 'there is food', 'the carriage changes'], answer: 1,
        explain: '"… wird hier offiziell Französisch gesprochen."' },
      { q: 'Wann hat Meret den Vertrag unterschrieben?', qEn: 'When did Meret sign the contract?', options: ['heute Morgen', 'gestern Abend', 'letzte Woche', 'noch nicht'], optionsEn: ['this morning', 'yesterday evening', 'last week', 'not yet'], answer: 1,
        explain: '"Den Vertrag habe ich gestern Abend unterschrieben."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Im Zug fragt ein Reisender, ob der Wagen über die Grenze fährt.", taskEn: "On the train a passenger asks whether this carriage crosses the border.", de: "Ab der nächsten Station wird hier offiziell Französisch gesprochen.", en: "From the next station on, French is officially spoken here." },
    { task: "Ein Kollege fragt nach dem Vertrag von letzter Woche.", taskEn: "A colleague asks about last week's contract.", de: "Den Vertrag haben wir am Freitag unterschrieben.", en: "The contract we signed on Friday." },
    { task: "Stell in der Sitzung dein Thema vor.", taskEn: "Introduce your topic in the meeting.", de: "Die Vielsprachigkeit in der Region ist mein Thema. Sie prägt den Alltag hier stark.", en: "Multilingualism in the region is my topic. It strongly shapes daily life here." },
    { task: "Eine Bekannte fragt, was in der Sprachregion besonders ist.", taskEn: "An acquaintance asks what's special about the language region.", de: "Zwei Sprachen gehören hier zum Alltag. Beide werden in der Schule unterrichtet.", en: "Two languages belong to everyday life here. Both are taught at school." },
    { task: "Deine Kollegin versteht deinen Vortrag nicht. Ordne neu.", taskEn: "Your colleague doesn't follow your talk. Reorder it.", de: "Ich beginne mit dem Bekannten und stelle das Neue erst danach vor.", en: "I'll start with what's known and only present the new part afterwards." },
    { task: "Rollenspiel: Ihr stellt zusammen eine Studie vor.", taskEn: "Role-play: you present a study together.", de: "Die Region kennen alle. Neu ist, dass zahlreiche Familien beide Sprachen zu Hause sprechen.", en: "Everybody knows the region. What's new is that numerous families speak both languages at home." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or summary (six to eight sentences) about a trip or meeting — organizing each sentence from known information (Thema) to new information (Rhema), and using at least one fronted element for emphasis.',
    starters: ['… hat …', 'Aufgeregt bin ich, weil …', 'Diese/Dieser …, however, …', 'In dieser Region …'],
    placeholder: 'Unser Zug hat plötzlich den Anschluss verpasst. Zum Glück ist unser Abteil sehr ruhig …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'In "Anna hat gestern ein neues Auto gekauft," which part is the Rhema (new information)?',
      options: ['Anna', 'ein neues Auto gekauft', 'gestern'],
      answer: 1,
      explain: 'The Rhema (new/important information) is "ein neues Auto gekauft" — placed toward the end.'
    },
    gap: {
      sentence: ['___ bin ich wegen der nächsten Sitzung.', ''],
      gaps: [ { answer: 'Aufgeregt', accepts: ['Aufgeregt'] } ],
      explain: 'Fronting the adjective (Aufgeregt) adds emphasis without changing meaning.'
    },
    match: {
      q: 'Match each sentence part to Thema or Rhema.',
      pairs: [
        { noun: 'Anna (schon bekannt)', art: 'Thema' },
        { noun: 'ein neues Auto gekauft', art: 'Rhema' },
        { noun: 'Der Zug (schon bekannt)', art: 'Thema' },
        { noun: 'kommt heute später', art: 'Rhema' }
      ]
    },
    builder: {
      target: 'Build: "Our train suddenly missed the connection." (Thema first, Rhema last)',
      bank: ['Unser', 'Zug', 'hat', 'plötzlich', 'den', 'Anschluss', 'verpasst', '.'],
      answer: ['Unser', 'Zug', 'hat', 'plötzlich', 'den', 'Anschluss', 'verpasst', '.'],
      roles: { 'Zug': 'r-subject', 'Anschluss': 'r-rhema', 'verpasst': 'r-verb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich Ich Ich habe heute gearbeitet. Ich bin müde.',
      right: 'Ich habe heute gearbeitet und bin deshalb müde.',
      explain: 'Repeating "Ich" at the start of every sentence sounds unnatural — vary the flow instead.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is Thema?', options: ['Known information, usually early', 'New information, usually late', 'The verb complex'], answer: 0,
      explain: 'Thema is known/already-discussed information, placed early in the sentence.' },
    { q: 'What is Rhema?', options: ['Known information', 'New/important information, usually late', 'The subject only'], answer: 1,
      explain: 'Rhema is the new or important information, usually placed toward the end.' },
    { q: 'In "Gestern hat Anna in Berlin gearbeitet," what is emphasized?', options: ['Anna', 'gestern', 'in Berlin'], answer: 1,
      explain: 'Fronting "gestern" shifts the focus to yesterday.' },
    { q: 'Does moving an element to sentence-start change the basic meaning?', options: ['Yes, completely', 'No, only the emphasis changes', 'Only in questions'], answer: 1,
      explain: 'Word order shifts change emphasis, not the basic meaning.' },
    { q: 'Which is a common learner mistake?', options: ['Placing known information early', 'Always beginning every sentence with "Ich"', 'Placing new information late'], answer: 1,
      explain: 'Always starting with "Ich" ignores natural information flow and sounds unnatural.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'Thema (known information) usually comes early in a German sentence; Rhema (new/important information) usually comes toward the end.' },
    { c: 'r-rhema', html: 'Moving an element to sentence-start (fronting) shifts emphasis, not basic meaning — this is natural, correct German.' },
    { c: 'r-verb', html: 'Native-sounding German avoids repeating known information and avoids literal English word order — it flows from known to new.' }
  ],
  revisionTips: [
    'Before building a sentence, ask: what\'s already known (Thema), and what\'s new (Rhema)? Place them accordingly.',
    'Practise fronting different elements of the same sentence to feel how emphasis shifts without changing meaning.',
    'When writing longer texts, avoid starting every sentence the same way — vary Thema to keep the flow natural.'
  ]
};

window.CHAPTER = CHAPTER;
