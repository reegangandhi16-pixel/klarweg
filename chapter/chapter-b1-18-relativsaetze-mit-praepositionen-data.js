/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 18
   "Relativsätze mit Präpositionen" — the preposition stays
   directly before the relative pronoun (dem/der/das/denen),
   whose case is governed by the verb+preposition combination,
   not by the antecedent. Covers common Dativ prepositions
   (mit, bei, nach, von, zu, aus), Akkusativ prepositions (für,
   durch, gegen, ohne, um), and a light touch of Wechselpräpositionen
   (in, vor, an) without re-teaching them in depth.
   IMPORTANT: dialogue uses ONLY Marlen and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-18 list (108 items) — a
   city/urban-planning theme (Stadtrat, Hochschule, Wohnbau,
   Tourismus, Trendviertel, Sozialarbeiter…) with a handful of
   Swiss-German items (parkieren, Billett, Velo, schweizerdeutsch),
   an excellent natural fit for describing people, places, and
   institutions with relative clauses.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-18-relativsaetze-mit-praepositionen',
  phase: 'B1 · Phase 1',
  number: 18,
  title: 'Relativsätze mit Präpositionen',
  titleEn: 'Relative clauses with prepositions',
  description: 'Das ist der Lehrer, mit dem ich Deutsch lerne. Das ist die Familie, bei der ich wohne. When a verb needs a preposition, the preposition never moves — it stays right before the relative pronoun, and the pronoun\'s case comes from the preposition, not the antecedent.',
  xp: 260,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 19, title: 'Goethe Halbzeit-Test', titleEn: 'Goethe Halfway Test — the B1 midpoint checkpoint' , href: 'chapter-b1-19-goethe-halbzeit-test.html' },

  prevChapter: { number: 17, title: 'Nebensätze mit damit & um ... zu', titleEn: 'Purpose clauses: damit & um ... zu', href: 'chapter-b1-17-nebensatz-damit-um-zu.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one preposition rule.</em>',
    intro: 'A walk through the city gives Marlen and Timo landmarks, monuments, and narrow alleys to describe — every one needing a relative clause where the preposition stays glued to the pronoun: der Turm, mit dem wir beginnen; die Gasse, in der wir stehen.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the preposition sit right before dem/der/das/denen, never moving elsewhere'
    ],
    scene: 'Ein Spaziergang durch die Stadt',
    femaleSpeakers: ['Marlen'],
    dialogue: [
      { speaker: 'Marlen', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Wahrzeichen', role: 'r-subject', en: 'landmark', hi: 'प्रतीक चिह्न', pron: 'VAHR-tsy-khen', type: 'Noun · neut.', why: 'das Wahrzeichen (this chapter).', ex: 'das Wahrzeichen, mit dem wir beginnen', exEn: 'the landmark with which we begin' },
        { w: ',', plain: true },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'जिससे', pron: 'mit', type: 'Preposition · fixed' },
        { w: 'dem', role: 'r-dativ', en: 'which', hi: 'साथ', pron: 'daym', type: 'Relativpronomen · dative', why: 'preposition + dem/der/denen forms a Relativsatz mit Präposition (this chapter).', ex: 'das Wahrzeichen, mit dem wir beginnen', exEn: 'the landmark with which we begin' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'beginnen', role: 'r-verb', en: 'begin', hi: 'शुरू करते हैं', pron: 'be-GI-nen', type: 'Verb · beginnen (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'alt', role: 'r-subject', en: 'old', hi: 'पुराना', pron: 'alt', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The landmark with which we begin is very old.', hi: 'Woh prateek chinh, jisse hum shuru karte hain, bahut purana hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'वह', pron: 'das', type: 'Article · neut.' },
        { w: 'Denkmal', role: 'r-subject', en: 'monument', hi: 'स्मारक', pron: 'DENK-mahl', type: 'Noun · neut.', why: 'das Denkmal (this chapter).', ex: 'das Denkmal, für das die Stadt bekannt ist', exEn: 'the monument for which the city is known' },
        { w: ',', plain: true },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'जिसके लिए', pron: 'für', type: 'Preposition · fixed' },
        { w: 'das', role: 'r-akkusativ', en: 'which', hi: 'जिसके लिए', pron: 'das', type: 'Relativpronomen · accusative', why: 'preposition + das (neut. acc.) forms a Relativsatz mit Präposition (this chapter).', ex: 'das Denkmal, für das die Stadt bekannt ist', exEn: 'the monument for which the city is known' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Stadt', role: 'r-subject', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
        { w: 'bekannt', role: 'r-akkusativ', en: 'known', hi: 'प्रसिद्ध', pron: 'be-KANT', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'steht', role: 'r-verb', en: 'stands', hi: 'खड़ा है', pron: 'shtayt', type: 'Verb · stehen' },
        { w: 'gleich', role: 'r-adverb', en: 'right', hi: 'ठीक', pron: 'glykh', type: 'Adverb' },
        { w: 'um', role: 'r-preposition', en: 'around', hi: 'के इर्द-गिर्द', pron: 'um', type: 'Preposition + place' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Ecke', role: 'r-akkusativ', en: 'corner', hi: 'कोना', pron: 'E-kuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'And the monument for which the city is known stands right around the corner.', hi: 'Aur woh smaarak, jiske liye shahar prasiddh hai, kone ke bilkul paas khada hai.' },
      { speaker: 'Marlen', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Gasse', role: 'r-subject', en: 'alley', hi: 'गली', pron: 'GA-suh', type: 'Noun · fem.', why: 'die Gasse (this chapter).', ex: 'die Gasse, in der wir stehen', exEn: 'the alley in which we stand' },
        { w: ',', plain: true },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'जिसमें', pron: 'in', type: 'Preposition · fixed' },
        { w: 'der', role: 'r-dativ', en: 'which', hi: 'जिसमें', pron: 'dair', type: 'Relativpronomen · dative', why: 'preposition + der (fem. dat.) forms a Relativsatz mit Präposition (this chapter).', ex: 'die Gasse, in der wir stehen', exEn: 'the alley in which we stand' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'stehen', role: 'r-verb', en: 'stand', hi: 'खड़े हैं', pron: 'SHTAY-en', type: 'Verb · stehen (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'schmal', role: 'r-subject', en: 'narrow', hi: 'संकरी', pron: 'shmahl', type: 'Adjective', why: 'schmal = narrow (this chapter).', ex: 'Die Gasse ist schmal.', exEn: 'The alley is narrow.' },
        { w: '.', plain: true }
      ], en: 'The alley in which we stand is very narrow.', hi: 'Woh gali, jismein hum khade hain, bahut sankri hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Leute', role: 'r-akkusativ', en: 'people', hi: 'लोग', pron: 'LOY-tuh', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'जिनसे', pron: 'fon', type: 'Preposition · fixed' },
        { w: 'denen', role: 'r-dativ', en: 'whom', hi: 'जिनसे', pron: 'DAY-nen', type: 'Relativpronomen · dative', why: 'preposition + denen (plural dat.) forms a Relativsatz mit Präposition (this chapter).', ex: 'die Leute, von denen ich das gehört habe', exEn: 'the people from whom I heard that' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gehört', role: 'r-verb', en: 'heard', hi: 'सुना', pron: 'ge-HÖRT', type: 'Partizip II' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you know the people from whom I heard that?', hi: 'Kya tum un logon ko jaanti ho jinse maine yeh suna?' },
      { speaker: 'Marlen', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'wohnen', role: 'r-verb', en: 'live', hi: 'रहते हैं', pron: 'VO-nen', type: 'Verb · wohnen' },
        { w: 'gleich', role: 'r-adverb', en: 'right', hi: 'ठीक', pron: 'glykh', type: 'Adverb' },
        { w: 'nebenan', role: 'r-place', en: 'next door', hi: 'बगल में', pron: 'NAY-ben-an', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Yes, they live right next door.', hi: 'Haan, woh bilkul bagal mein rehte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When a verb naturally comes with a preposition (<span class="de">sprechen mit</span>, <span class="de">wohnen bei</span>, <span class="de">kämpfen für</span>), that preposition simply moves in front of the relative pronoun and stays there — <span class="de r-prep-rel">mit dem</span>, <span class="de r-prep-rel">bei der</span>, <span class="de r-prep-rel">für den</span>. The pronoun\'s CASE comes from the preposition (Dativ: mit/bei/nach/von/zu/aus; Akkusativ: für/durch/gegen/ohne/um), and its GENDER/NUMBER comes from the noun it refers back to.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE MIT PRÄPOSITIONEN (B1 level only): when a verb requires a preposition, that preposition stays directly before the relative pronoun (dem/der/das/denen), never elsewhere in the sentence. Dativ prepositions in scope: mit, bei, nach, von, zu, aus. Akkusativ prepositions in scope: für, durch, gegen, ohne, um. A light touch of common Wechselpräpositionen (in, vor, an) is also acceptable, without deep re-teaching. ' +
    'Do NOT expect worüber/wofür/wobei/womit (prepositional adverbs for things), Genitiv relative clauses, or other B2 relative constructions — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The preposition ALWAYS comes immediately before the relative pronoun, never at the end of the clause or elsewhere: "der Mann, mit dem ich spreche" not "der Mann, den ich mit spreche" or "der Mann, ich mit dem spreche."\n' +
    '- The relative pronoun\'s CASE is governed by the preposition (mit/bei/nach/von/zu/aus → Dativ; für/durch/gegen/ohne/um → Akkusativ), not by the antecedent\'s role in the main clause.\n' +
    '- The relative pronoun\'s GENDER/NUMBER matches its antecedent, exactly as in simple relative clauses.\n' +
    '- The finite verb of the relative clause goes to the very end, as in any subordinate clause.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Preposition-placement check:</b> one sentence on whether the preposition stayed directly before the relative pronoun in every clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you keep the preposition glued to the relative pronoun and choose the right case automatically. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the Dativ vs. Akkusativ preposition lists once — especially für/durch/gegen/ohne/um — then continue.',
    low: 'Worth another pass through the Grammar section — practise combining two simple sentences into one relative clause for five different verb+preposition pairs.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'ist', role: 'plain' },
    { w: 'der', role: 'plain' }, { w: 'Mann', role: 'plain' },
    { w: ',', role: 'plain' }, { w: 'mit', role: 'r-prep-rel' },
    { w: 'dem', role: 'r-prep-rel' }, { w: 'ich', role: 'r-subject' },
    { w: 'spreche', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the preposition stays glued to the relative pronoun.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Marlen and Timo describe their city and colleagues using relative clauses with prepositions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 108 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Dativ and Akkusativ prepositions with relative pronouns.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about city life, full of relative clauses with prepositions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch relative clauses with prepositions in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people, places, and colleagues using relative clauses with prepositions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a description using relative clauses with prepositions naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill combining two sentences into one, and Dativ vs. Akkusativ classification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 108 chapter words — city and urban-planning vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '17 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Sentence-combination drills, Dativ vs. Akkusativ classification, error correction, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full preposition + relative pronoun reference — Dativ and Akkusativ tables, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'mit dem, bei der', text: 'Use Dativ prepositions with relative pronouns' },
    { de: 'für den, durch die', text: 'Use Akkusativ prepositions with relative pronouns' },
    { de: 'in dem, an dem', text: 'Recognize Wechselpräpositionen in relative clauses' },
    { de: 'Zwei Sätze → ein Satz', text: 'Combine two simple sentences into one relative clause' },
    { de: 'Goethe B1', text: 'Recognize prepositional relative clauses in exam texts' }
  ],

  // ---------- Vocabulary (108 items — full chapter-18 upload list) ----------
  vocab: [
    { de: 'Gesundheitssystem', art: 'das', gender: 'n', plural: 'Gesundheitssysteme', pos: 'noun', level: 'B1', en: 'healthcare system', hi: 'स्वास्थ्य प्रणाली', ex: 'Das Gesundheitssystem, über das wir sprachen, ist teuer.', exEn: 'The healthcare system we talked about is expensive.', exHi: 'Swasthya pranaali jiske baare mein humne baat ki, mehngi hai.' },
    { de: 'Arbeitslosigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'unemployment', hi: 'बेरोज़गारी', ex: 'Die Arbeitslosigkeit ist ein gesellschaftliches Problem.', exEn: 'Unemployment is a social problem.', exHi: 'Berozgaari ek saamajik samasya hai.' },
    { de: 'Diskussion', art: 'die', gender: 'f', plural: 'Diskussionen', pos: 'noun', level: 'B1', en: 'discussion', hi: 'चर्चा', ex: 'Die Diskussion, an der ich teilnahm, war lang.', exEn: 'The discussion I took part in was long.', exHi: 'Woh charcha jismein maine bhaag liya, lambi thi.' },
    { de: 'gesellschaftlich', pos: 'adjective', level: 'B1', en: 'social', hi: 'सामाजिक', ex: 'Das ist ein gesellschaftliches Thema.', exEn: 'That\'s a social topic.', exHi: 'Yeh ek saamajik vishay hai.' },
    { de: 'gesetzlich', pos: 'adjective', level: 'B1', en: 'statutory', hi: 'क़ानूनी', ex: 'Das ist gesetzlich vorgeschrieben.', exEn: 'That\'s legally mandatory.', exHi: 'Yeh kaanooni roop se anivaarya hai.' },
    { de: 'um … herum', pos: 'preposition', level: 'B1', en: 'around', hi: 'आस-पास', ex: 'Um das Denkmal herum stehen viele Bäume.', exEn: 'Around the monument, there are many trees.', exHi: 'Smarak ke aas-paas kai ped hain.' },
    { de: 'abbiegen', pos: 'verb', level: 'B1', en: 'to turn', hi: 'मुड़ना', ex: 'Wir müssen links abbiegen.', exEn: 'We need to turn left.', exHi: 'Humein baayen mudna hoga.', conj: { praesens: 'biegt ab', praeteritum: 'bog ab', perfekt: 'ist abgebogen' } },
    { de: 'abhängen', pos: 'verb', level: 'B1', en: 'to be dependent on (von + D.)', hi: 'निर्भर होना', ex: 'Das hängt vom Budget ab.', exEn: 'That depends on the budget.', exHi: 'Yeh budget par nirbhar karta hai.', conj: { praesens: 'hängt ab', praeteritum: 'hing ab', perfekt: 'hat abgehangen' } },
    { de: 'anschauen', pos: 'verb', level: 'B1', en: 'to look at', hi: 'देखना', ex: 'Wir schauen uns das Wahrzeichen an.', exEn: 'We\'re looking at the landmark.', exHi: 'Hum pratik chinh ko dekh rahe hain.', conj: { praesens: 'schaut an', praeteritum: 'schaute an', perfekt: 'hat angeschaut' } },
    { de: 'ausreden', pos: 'verb', level: 'B1', en: 'to finish speaking (jemanden ausreden lassen)', hi: 'बोलने देना', ex: 'Lass mich bitte ausreden.', exEn: 'Please let me finish speaking.', exHi: 'Kripya mujhe baat poori karne do.', conj: { praesens: 'redet aus', praeteritum: 'redete aus', perfekt: 'hat ausgeredet' } },
    { de: 'berücksichtigen', pos: 'verb', level: 'B1', en: 'to consider', hi: 'ध्यान में रखना', ex: 'Wir müssen das Budget berücksichtigen.', exEn: 'We need to consider the budget.', exHi: 'Humein budget ka dhyaan rakhna hoga.', conj: { praesens: 'berücksichtigt', praeteritum: 'berücksichtigte', perfekt: 'hat berücksichtigt' } },
    { de: 'betreffen', pos: 'verb', level: 'B1', en: 'to concern', hi: 'संबंधित होना', ex: 'Das betrifft uns alle.', exEn: 'That concerns all of us.', exHi: 'Yeh hum sabse sambandhit hai.', conj: { praesens: 'betrifft', praeteritum: 'betraf', perfekt: 'hat betroffen' } },
    { de: 'Tourismus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'tourism', hi: 'पर्यटन', ex: 'Wegen des starken Tourismus sind die Gassen voll.', exEn: 'Because of strong tourism, the alleys are full.', exHi: 'Zyada paryatan ki wajah se, galiyaan bhari hain.' },
    { de: 'Diversität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'diversity', hi: 'विविधता', ex: 'Die Diversität der Stadt gefällt mir.', exEn: 'I like the city\'s diversity.', exHi: 'Mujhe sheher ki vividhata pasand hai.' },
    { de: 'Intensität', art: 'die', gender: 'f', plural: 'Intensitäten', pos: 'noun', level: 'B1', en: 'intensity', hi: 'तीव्रता', ex: 'Die Intensität der Diskussion überraschte alle.', exEn: 'The intensity of the discussion surprised everyone.', exHi: 'Charcha ki teevrata ne sabko hairaan kar diya.' },
    { de: 'Kinderbetreuung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'childcare', hi: 'बाल देखभाल', ex: 'Die Kita, in der die Kinderbetreuung stattfindet, ist neu.', exEn: 'The kindergarten where the childcare takes place is new.', exHi: 'Kindergarten jahan baal dekhbhaal hoti hai, naya hai.' },
    { de: 'Renovierung', art: 'die', gender: 'f', plural: 'Renovierungen', pos: 'noun', level: 'B1', en: 'renovation', hi: 'नवीनीकरण', ex: 'Die Renovierung des Gebäudes dauert lange.', exEn: 'The building\'s renovation takes a long time.', exHi: 'Bhavan ka navinikaran lamba samay le raha hai.' },
    { de: 'eingehen', pos: 'verb', level: 'B1', en: 'to react to (auf + A.)', hi: 'प्रतिक्रिया देना', ex: 'Der Stadtrat geht auf die Kritik ein.', exEn: 'The city council member reacts to the criticism.', exHi: 'Nagar parishad sadasya alochana par pratikriya deta hai.', conj: { praesens: 'geht ein', praeteritum: 'ging ein', perfekt: 'ist eingegangen' } },
    { de: 'einliefern', pos: 'verb', level: 'B1', en: 'to admit (to hospital)', hi: 'भर्ती कराना', ex: 'Der Verletzte wurde ins Krankenhaus eingeliefert.', exEn: 'The injured person was admitted to hospital.', exHi: 'Ghayal vyakti ko aspataal mein bharti karaya gaya.', conj: { praesens: 'liefert ein', praeteritum: 'lieferte ein', perfekt: 'hat eingeliefert' } },
    { de: 'erwachen', pos: 'verb', level: 'B1', en: 'to awaken', hi: 'जागना', ex: 'Die Stadt erwacht früh am Morgen.', exEn: 'The city awakens early in the morning.', exHi: 'Sheher subah jaldi jaagta hai.', conj: { praesens: 'erwacht', praeteritum: 'erwachte', perfekt: 'ist erwacht' } },
    { de: 'fern', pos: 'adjective', level: 'B1', en: 'distant', hi: 'दूर', ex: 'Das Denkmal liegt in einer fernen Ecke der Stadt.', exEn: 'The monument lies in a distant corner of the city.', exHi: 'Smarak sheher ke ek door kone mein hai.' },
    { de: 'festlegen', pos: 'verb', level: 'B1', en: 'to determine', hi: 'निर्धारित करना', ex: 'Der Stadtrat legt das Budget fest.', exEn: 'The city council determines the budget.', exHi: 'Nagar parishad budget nirdhaarit karti hai.', conj: { praesens: 'legt fest', praeteritum: 'legte fest', perfekt: 'hat festgelegt' } },
    { de: 'fließen', pos: 'verb', level: 'B1', en: 'to flow', hi: 'बहना', ex: 'Der Fluss fließt durch das Zentrum.', exEn: 'The river flows through the centre.', exHi: 'Nadi kendra se hokar bahti hai.', conj: { praesens: 'fließt', praeteritum: 'floss', perfekt: 'ist geflossen' } },
    { de: 'fortsetzen', pos: 'verb', level: 'B1', en: 'to continue', hi: 'जारी रखना', ex: 'Wir setzen die Diskussion morgen fort.', exEn: 'We\'ll continue the discussion tomorrow.', exHi: 'Hum kal charcha jaari rakhenge.', conj: { praesens: 'setzt fort', praeteritum: 'setzte fort', perfekt: 'hat fortgesetzt' } },
    { de: 'herunterfahren', pos: 'verb', level: 'B1', en: 'to shut down', hi: 'बंद करना', ex: 'Wir müssen die Anlage herunterfahren.', exEn: 'We need to shut down the facility.', exHi: 'Humein system ko band karna hoga.', conj: { praesens: 'fährt herunter', praeteritum: 'fuhr herunter', perfekt: 'hat heruntergefahren' } },
    { de: 'hindern', pos: 'verb', level: 'B1', en: 'to hinder (an + D.)', hi: 'रोकना', ex: 'Der Verkehr hindert uns am Vorankommen.', exEn: 'Traffic hinders our progress.', exHi: 'Traffic humaari pragati ko rokta hai.', conj: { praesens: 'hindert', praeteritum: 'hinderte', perfekt: 'hat gehindert' } },
    { de: 'hineingehen', pos: 'verb', level: 'B1', en: 'to enter', hi: 'अंदर जाना', ex: 'Wir gehen in die Sporthalle hinein.', exEn: 'We\'re entering the gymnasium.', exHi: 'Hum gymnasium ke andar ja rahe hain.', conj: { praesens: 'geht hinein', praeteritum: 'ging hinein', perfekt: 'ist hineingegangen' } },
    { de: 'jeweilig', pos: 'adjective', level: 'B1', en: 'respective', hi: 'संबंधित', ex: 'Jeder hat seine jeweilige Aufgabe.', exEn: 'Everyone has their respective task.', exHi: 'Har ek ka apna sambandhit kaam hai.' },
    { de: 'laden', pos: 'verb', level: 'B1', en: 'to load (Körbe ins Auto laden)', hi: 'लादना', ex: 'Wir laden die Körbe ins Auto.', exEn: 'We\'re loading the baskets into the car.', exHi: 'Hum tokariyaan gaadi mein lad rahe hain.', conj: { praesens: 'lädt', praeteritum: 'lud', perfekt: 'hat geladen' } },
    { de: 'mittendrin', pos: 'adverb', level: 'B1', en: 'in the middle of', hi: 'बीच में', ex: 'Wir standen mittendrin im Trubel.', exEn: 'We stood in the middle of the hustle.', exHi: 'Hum halchal ke beech mein khade the.' },
    { de: 'nirgendwo', pos: 'adverb', level: 'B1', en: 'nowhere', hi: 'कहीं नहीं', ex: 'Diesen Fahrschein bekommt man nirgendwo billiger.', exEn: 'You can\'t get this ticket cheaper anywhere.', exHi: 'Yeh ticket kahin bhi sasta nahi milta.' },
    { de: 'parkieren', pos: 'verb', level: 'B1', en: 'to park (Swiss German)', hi: 'पार्क करना', ex: 'Wo kann ich hier parkieren?', exEn: 'Where can I park here?', exHi: 'Main yahan kahan park kar sakta hoon?', conj: { praesens: 'parkiert', praeteritum: 'parkierte', perfekt: 'hat parkiert' } },
    { de: 'recht geben', pos: 'idiom', level: 'B1', en: 'to agree', hi: 'सहमत होना', ex: 'Ich gebe dir recht.', exEn: 'I agree with you.', exHi: 'Main tumse sahmat hoon.' },
    { de: 'rechtlich', pos: 'adjective', level: 'B1', en: 'legal', hi: 'क़ानूनी', ex: 'Das ist rechtlich nicht erlaubt.', exEn: 'That\'s not legally allowed.', exHi: 'Yeh kaanooni roop se anumati prapt nahi hai.' },
    { de: 'schmal', pos: 'adjective', level: 'B1', en: 'narrow', hi: 'संकरा', ex: 'Die Gasse ist sehr schmal.', exEn: 'The alley is very narrow.', exHi: 'Gali bahut sankri hai.' },
    { de: 'schwer', pos: 'adjective', level: 'B1', en: 'severe (ein schwerer Unfall)', hi: 'गंभीर', ex: 'Es gab einen schweren Unfall.', exEn: 'There was a severe accident.', exHi: 'Ek gambheer durghatna hui.' },
    { de: 'sowie', pos: 'conjunction', level: 'B1', en: 'as well as', hi: 'साथ ही', ex: 'Die Stadt hat Parks sowie Museen.', exEn: 'The city has parks as well as museums.', exHi: 'Sheher mein parks ke saath saath museum bhi hain.' },
    { de: 'städtisch', pos: 'adjective', level: 'B1', en: 'urban', hi: 'शहरी', ex: 'Das städtische Leben ist hektisch.', exEn: 'Urban life is hectic.', exHi: 'Shahri jeevan vyast hai.' },
    { de: 'unruhig', pos: 'adjective', level: 'B1', en: 'restless, turbulent', hi: 'बेचैन', ex: 'Die Diskussion war unruhig.', exEn: 'The discussion was turbulent.', exHi: 'Charcha bechain thi.' },
    { de: 'unterbrechen', pos: 'verb', level: 'B1', en: 'to interrupt', hi: 'बीच में रोकना', ex: 'Bitte unterbrich mich nicht.', exEn: 'Please don\'t interrupt me.', exHi: 'Kripya mujhe beech mein mat roko.', conj: { praesens: 'unterbricht', praeteritum: 'unterbrach', perfekt: 'hat unterbrochen' } },
    { de: 'vermitteln', pos: 'verb', level: 'B1', en: 'to mediate', hi: 'मध्यस्थता करना', ex: 'Der Moderator sollte vermitteln.', exEn: 'The moderator should mediate.', exHi: 'Sanchaalak ko madhyasthata karni chahiye.', conj: { praesens: 'vermittelt', praeteritum: 'vermittelte', perfekt: 'hat vermittelt' } },
    { de: 'vorgeschrieben sein', pos: 'idiom', level: 'B1', en: 'to be mandatory', hi: 'अनिवार्य होना', ex: 'Das ist gesetzlich vorgeschrieben.', exEn: 'That\'s legally mandatory.', exHi: 'Yeh kaanooni roop se anivaarya hai.' },
    { de: 'werten', pos: 'verb', level: 'B1', en: 'to assess', hi: 'मूल्यांकन करना', ex: 'Die Jury wertet die Ergebnisse.', exEn: 'The jury assesses the results.', exHi: 'Jury pariṇaamon ka mulyaankan karti hai.', conj: { praesens: 'wertet', praeteritum: 'wertete', perfekt: 'hat gewertet' } },
    { de: 'außer Acht lassen', pos: 'idiom', level: 'B1', en: 'to disregard', hi: 'अनदेखा करना', ex: 'Wir dürfen das Budget nicht außer Acht lassen.', exEn: 'We mustn\'t disregard the budget.', exHi: 'Humein budget ko anadekha nahi karna chahiye.' },
    { de: 'Budget', art: 'das', gender: 'n', plural: 'Budgets', pos: 'noun', level: 'B1', en: 'budget', hi: 'बजट', ex: 'Das Budget, von dem wir sprachen, reicht nicht.', exEn: 'The budget we spoke of isn\'t enough.', exHi: 'Woh budget jiske baare mein humne baat ki, kaafi nahi hai.' },
    { de: 'Denkmal', art: 'das', gender: 'n', plural: 'Denkmäler', pos: 'noun', level: 'B1', en: 'memorial, monument', hi: 'स्मारक', ex: 'Um das Denkmal herum stehen viele Bäume.', exEn: 'Around the monument, there are many trees.', exHi: 'Smarak ke aas-paas kai ped hain.' },
    { de: 'Flussbad', art: 'das', gender: 'n', plural: 'Flussbäder', pos: 'noun', level: 'B1', en: 'river swimming pool', hi: 'नदी स्विमिंग पूल', ex: 'Das Flussbad, in dem wir schwammen, war kalt.', exEn: 'The river pool we swam in was cold.', exHi: 'Nadi pool jismein hum taire, thanda tha.' },
    { de: 'Garagentor', art: 'das', gender: 'n', plural: 'Garagentore', pos: 'noun', level: 'B1', en: 'garage door', hi: 'गैराज दरवाज़ा', ex: 'Das Garagentor öffnet sich automatisch.', exEn: 'The garage door opens automatically.', exHi: 'Garage darwaaza automatically khulta hai.' },
    { de: 'Industrieviertel', art: 'das', gender: 'n', plural: 'Industrieviertel', pos: 'noun', level: 'B1', en: 'industrial quarter', hi: 'औद्योगिक क्षेत्र', ex: 'Meine Geschäftspartnerin wohnt in diesem Industrieviertel.', exEn: 'My business partner lives in this industrial quarter.', exHi: 'Meri vyaavsayik saajhedaar is audyogik kshetra mein rehti hai.' },
    { de: 'Ranking', art: 'das', gender: 'n', plural: 'Rankings', pos: 'noun', level: 'B1', en: 'ranking', hi: 'रैंकिंग', ex: 'Die Stadt steht ganz oben im Ranking.', exEn: 'The city is at the top of the ranking.', exHi: 'Sheher ranking mein sabse upar hai.' },
    { de: 'Reinigungsfahrzeug', art: 'das', gender: 'n', plural: 'Reinigungsfahrzeuge', pos: 'noun', level: 'B1', en: 'street cleaning vehicle', hi: 'सफाई वाहन', ex: 'Das Reinigungsfahrzeug kommt jeden Morgen.', exEn: 'The street cleaning vehicle comes every morning.', exHi: 'Safai vaahan har subah aata hai.' },
    { de: 'Trendviertel', art: 'das', gender: 'n', plural: 'Trendviertel', pos: 'noun', level: 'B1', en: 'trending district', hi: 'चर्चित इलाका', ex: 'Das Trendviertel zieht viele Touristen an.', exEn: 'The trending district attracts many tourists.', exHi: 'Charchit ilaaka kai paryatakon ko aakarshit karta hai.' },
    { de: 'Wahrzeichen', art: 'das', gender: 'n', plural: 'Wahrzeichen', pos: 'noun', level: 'B1', en: 'landmark', hi: 'प्रतीक चिन्ह', ex: 'Das Wahrzeichen, an dem wir uns treffen, ist berühmt.', exEn: 'The landmark where we meet is famous.', exHi: 'Woh pratik chinh jahan hum milte hain, mashhoor hai.' },
    { de: 'Bauhof', art: 'der', gender: 'm', plural: 'Bauhöfe', pos: 'noun', level: 'B1', en: 'construction yard', hi: 'निर्माण यार्ड', ex: 'Der Bauhof, von dem die Fahrzeuge losfahren, liegt am Stadtrand.', exEn: 'The construction yard the vehicles depart from is at the edge of town.', exHi: 'Construction yard jahan se vaahan nikalte hain, sheher ke kinaare hai.' },
    { de: 'Dienst', art: 'der', gender: 'm', plural: 'Dienste', pos: 'noun', level: 'B1', en: 'duty, service', hi: 'सेवा', ex: 'Der Dienst beginnt um sechs Uhr.', exEn: 'The duty begins at six.', exHi: 'Seva chhe baje shuru hoti hai.' },
    { de: 'Fahrschein', art: 'der', gender: 'm', plural: 'Fahrscheine', pos: 'noun', level: 'B1', en: 'ticket', hi: 'टिकट', ex: 'Der Fahrschein, mit dem ich fahre, gilt einen Tag.', exEn: 'The ticket I travel with is valid for one day.', exHi: 'Woh ticket jise leke main safar karta hoon, ek din ke liye valid hai.' },
    { de: 'Favorit', art: 'der', gender: 'm', plural: 'Favoriten', pos: 'noun', level: 'B1', en: 'favourite', hi: 'पसंदीदा', ex: 'Dieses Restaurant ist mein Favorit.', exEn: 'This restaurant is my favourite.', exHi: 'Yeh restaurant mera pasandeeda hai.' },
    { de: 'Flüchtling', art: 'der', gender: 'm', plural: 'Flüchtlinge', pos: 'noun', level: 'B1', en: 'refugee', hi: 'शरणार्थी', ex: 'Der Sozialarbeiter hilft dem Flüchtling.', exEn: 'The social worker helps the refugee.', exHi: 'Samaajik kaaryakartaa sharanaarthi ki madad karta hai.' },
    { de: 'Geschäftspartner', art: 'der', gender: 'm', plural: 'Geschäftspartner', pos: 'noun', level: 'B1', en: 'business partner', hi: 'व्यावसायिक साझेदार', ex: 'Mein Geschäftspartner wohnt im Industrieviertel.', exEn: 'My business partner lives in the industrial quarter.', exHi: 'Mera vyaavsayik saajhedaar audyogik kshetra mein rehta hai.' },
    { de: 'Hauptgrund', art: 'der', gender: 'm', plural: 'Hauptgründe', pos: 'noun', level: 'B1', en: 'main reason', hi: 'मुख्य कारण', ex: 'Der Hauptgrund für den Umzug war die Arbeit.', exEn: 'The main reason for the move was work.', exHi: 'Shifting ka mukhya kaaran kaam tha.' },
    { de: 'Korb', art: 'der', gender: 'm', plural: 'Körbe', pos: 'noun', level: 'B1', en: 'basket', hi: 'टोकरी', ex: 'Wir laden die Körbe ins Auto.', exEn: 'We\'re loading the baskets into the car.', exHi: 'Hum tokariyaan gaadi mein lad rahe hain.' },
    { de: 'Magazinbericht', art: 'der', gender: 'm', plural: 'Magazinberichte', pos: 'noun', level: 'B1', en: 'magazine report', hi: 'पत्रिका रिपोर्ट', ex: 'Der Magazinbericht handelt vom Wohnbau.', exEn: 'The magazine report is about housing construction.', exHi: 'Patrika report aavaas nirmaan ke baare mein hai.' },
    { de: 'Mittelpunkt', art: 'der', gender: 'm', plural: 'Mittelpunkte', pos: 'noun', level: 'B1', en: 'centre', hi: 'केंद्र', ex: 'Das Denkmal steht im Mittelpunkt.', exEn: 'The monument stands at the centre.', exHi: 'Smarak kendra mein khada hai.' },
    { de: 'Nachtdienst', art: 'der', gender: 'm', plural: 'Nachtdienste', pos: 'noun', level: 'B1', en: 'night shift', hi: 'रात्रि पाली', ex: 'Der Sozialarbeiter, der den Nachtdienst hat, ist müde.', exEn: 'The social worker who has the night shift is tired.', exHi: 'Woh samaajik kaaryakartaa jiski raatri pali hai, thaka hua hai.' },
    { de: 'Radiobericht', art: 'der', gender: 'm', plural: 'Radioberichte', pos: 'noun', level: 'B1', en: 'radio report', hi: 'रेडियो रिपोर्ट', ex: 'Der Radiobericht handelt von der Kinderbetreuung.', exEn: 'The radio report is about childcare.', exHi: 'Radio report baal dekhbhaal ke baare mein hai.' },
    { de: 'Rand', art: 'der', gender: 'm', plural: 'Ränder', pos: 'noun', level: 'B1', en: 'edge', hi: 'किनारा', ex: 'Die Hochschule liegt am Rand der Stadt.', exEn: 'The university is at the edge of the city.', exHi: 'University sheher ke kinaare hai.' },
    { de: 'Sozialarbeiter', art: 'der', gender: 'm', plural: 'Sozialarbeiter', pos: 'noun', level: 'B1', en: 'social worker', hi: 'सामाजिक कार्यकर्ता', ex: 'Der Sozialarbeiter kämpft für Obdachlose.', exEn: 'The social worker fights for homeless people.', exHi: 'Samaajik kaaryakartaa beghar logon ke liye ladta hai.' },
    { de: 'Stadtbummel', art: 'der', gender: 'm', plural: 'Stadtbummel', pos: 'noun', level: 'B1', en: 'stroll through the city', hi: 'शहर की सैर', ex: 'Wir machen heute einen Stadtbummel.', exEn: 'We\'re taking a stroll through the city today.', exHi: 'Hum aaj sheher ki sair karenge.' },
    { de: 'Stadtrat', art: 'der', gender: 'm', plural: 'Stadträte', pos: 'noun', level: 'B1', en: 'city council member', hi: 'नगर परिषद सदस्य', ex: 'Das ist der Stadtrat, mit dem ich gesprochen habe.', exEn: 'That\'s the city council member with whom I spoke.', exHi: 'Yeh wahi nagar parishad sadasya hai jisse maine baat ki.' },
    { de: 'Umbau', art: 'der', gender: 'm', plural: 'Umbauten', pos: 'noun', level: 'B1', en: 'renovation, conversion', hi: 'पुनर्निर्माण', ex: 'Der Umbau des Bahnhofs dauert Monate.', exEn: 'The station\'s renovation takes months.', exHi: 'Station ka punarnirmaan mahino tak chalta hai.' },
    { de: 'Vordergrund', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'foreground (im Vordergrund stehen)', hi: 'अग्रभूमि', ex: 'Die Sicherheit steht im Vordergrund.', exEn: 'Safety is in the foreground.', exHi: 'Suraksha agrabhoomi mein hai.' },
    { de: 'Weg', art: 'der', gender: 'm', plural: 'Wege', pos: 'noun', level: 'B1', en: 'way', hi: 'रास्ता', ex: 'Der Weg, durch den wir gegangen sind, war schmal.', exEn: 'The way we walked through was narrow.', exHi: 'Woh raasta jisse hum guzre, sankra tha.' },
    { de: 'Wohnbau', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'housing construction', hi: 'आवास निर्माण', ex: 'Der Magazinbericht handelt vom Wohnbau.', exEn: 'The magazine report is about housing construction.', exHi: 'Patrika report aavaas nirmaan ke baare mein hai.' },
    { de: 'Zugang', art: 'der', gender: 'm', plural: 'Zugänge', pos: 'noun', level: 'B1', en: 'access', hi: 'पहुँच', ex: 'Der Zugang zur Sporthalle ist frei.', exEn: 'Access to the gymnasium is free.', exHi: 'Gymnasium tak pahunch mukt hai.' },
    { de: 'Einheimische', pos: 'noun', level: 'B1', en: 'native, local person', hi: 'स्थानीय व्यक्ति', ex: 'Die Einheimischen kennen die schmalen Gassen gut.', exEn: 'The locals know the narrow alleys well.', exHi: 'Sthaniya log sankri galiyon ko achhi tarah jaante hain.' },
    { de: 'Obdachlose', pos: 'noun', level: 'B1', en: 'homeless person', hi: 'बेघर व्यक्ति', ex: 'Der Sozialarbeiter kämpft für Obdachlose.', exEn: 'The social worker fights for homeless people.', exHi: 'Samaajik kaaryakartaa beghar logon ke liye ladta hai.' },
    { de: 'Autowerkstatt', art: 'die', gender: 'f', plural: 'Autowerkstätten', pos: 'noun', level: 'B1', en: 'garage (car repair)', hi: 'गैराज (मरम्मत)', ex: 'Die Autowerkstatt, in der ich arbeite, ist bekannt.', exEn: 'The garage where I work is well-known.', exHi: 'Woh garage jahan main kaam karta hoon, mashhoor hai.' },
    { de: 'Backstube', art: 'die', gender: 'f', plural: 'Backstuben', pos: 'noun', level: 'B1', en: 'bakery (workroom)', hi: 'बेकरी', ex: 'Aus der Backstube kommt ein herrlicher Duft.', exEn: 'A wonderful smell comes from the bakery.', exHi: 'Bakery se ek shaandaar khushbu aati hai.' },
    { de: 'Bootstour', art: 'die', gender: 'f', plural: 'Bootstouren', pos: 'noun', level: 'B1', en: 'boat trip', hi: 'नाव यात्रा', ex: 'Die Bootstour, an der wir teilnahmen, war schön.', exEn: 'The boat trip we took part in was beautiful.', exHi: 'Woh naav yatra jismein humne bhaag liya, sundar thi.' },
    { de: 'Elternzeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'parental leave', hi: 'माता-पिता की छुट्टी', ex: 'Sie nimmt Elternzeit für ein Jahr.', exEn: 'She\'s taking parental leave for a year.', exHi: 'Woh ek saal ke liye parental leave le rahi hai.' },
    { de: 'Fachleute', pos: 'noun', level: 'B1', en: 'specialists', hi: 'विशेषज्ञ', ex: 'Die Fachleute, mit denen wir sprachen, waren hilfreich.', exEn: 'The specialists we spoke with were helpful.', exHi: 'Woh visheshagya jinse humne baat ki, sahaayak the.' },
    { de: 'Fassade', art: 'die', gender: 'f', plural: 'Fassaden', pos: 'noun', level: 'B1', en: 'facade', hi: 'सामने का हिस्सा', ex: 'Die Fassade des Gebäudes wurde renoviert.', exEn: 'The building\'s facade was renovated.', exHi: 'Bhavan ka saamne ka hissa navinikrit kiya gaya.' },
    { de: 'Favoritin', art: 'die', gender: 'f', plural: 'Favoritinnen', pos: 'noun', level: 'B1', en: 'favourite (female)', hi: 'पसंदीदा (महिला)', ex: 'Sie ist die Favoritin der Jury.', exEn: 'She\'s the jury\'s favourite.', exHi: 'Woh jury ki pasandeeda hai.' },
    { de: 'Frühschicht', art: 'die', gender: 'f', plural: 'Frühschichten', pos: 'noun', level: 'B1', en: 'morning shift', hi: 'सुबह की पाली', ex: 'Die Frühschicht beginnt um fünf Uhr.', exEn: 'The morning shift starts at five.', exHi: 'Subah ki pali paanch baje shuru hoti hai.' },
    { de: 'Gasse', art: 'die', gender: 'f', plural: 'Gassen', pos: 'noun', level: 'B1', en: 'alley', hi: 'गली', ex: 'Die Gassen der Altstadt sind sehr schmal.', exEn: 'The old town\'s alleys are very narrow.', exHi: 'Purane sheher ki galiyaan bahut sankri hain.' },
    { de: 'Gender-Gerechtigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'gender equality', hi: 'लैंगिक समानता', ex: 'Gender-Gerechtigkeit ist ein wichtiges Thema.', exEn: 'Gender equality is an important topic.', exHi: 'Lainigik samanata ek mahatvapurna vishay hai.' },
    { de: 'Geschäftspartnerin', art: 'die', gender: 'f', plural: 'Geschäftspartnerinnen', pos: 'noun', level: 'B1', en: 'business partner (female)', hi: 'व्यावसायिक साझेदार (महिला)', ex: 'Meine Geschäftspartnerin arbeitet seit einem Jahr mit mir.', exEn: 'My business partner has worked with me for a year.', exHi: 'Meri vyaavsayik saajhedaar ek saal se mere saath kaam kar rahi hai.' },
    { de: 'Hochschule', art: 'die', gender: 'f', plural: 'Hochschulen', pos: 'noun', level: 'B1', en: 'institution of higher education', hi: 'उच्च शिक्षा संस्थान', ex: 'Die Hochschule, zu der ich gehe, liegt am Rand der Stadt.', exEn: 'The university I go to is at the edge of the city.', exHi: 'University jismein main jaata hoon, sheher ke kinaare hai.' },
    { de: 'Initiative', art: 'die', gender: 'f', plural: 'Initiativen', pos: 'noun', level: 'B1', en: 'initiative', hi: 'पहल', ex: 'Die Initiative hilft Obdachlosen.', exEn: 'The initiative helps homeless people.', exHi: 'Yeh pahal beghar logon ki madad karti hai.' },
    { de: 'Kita', art: 'die', gender: 'f', plural: 'Kitas', pos: 'noun', level: 'B1', en: 'kindergarten', hi: 'आंगनवाड़ी', ex: 'Die Kita ist in der Nähe.', exEn: 'The kindergarten is nearby.', exHi: 'Aanganwaadi paas mein hai.' },
    { de: 'Open-Air-Arena', art: 'die', gender: 'f', plural: 'Open-Air-Arenen', pos: 'noun', level: 'B1', en: 'open air arena', hi: 'खुले मैदान का मंच', ex: 'Das Konzert findet in der Open-Air-Arena statt.', exEn: 'The concert takes place in the open-air arena.', exHi: 'Concert khule maidan ke manch par hoga.' },
    { de: 'Rundfahrt', art: 'die', gender: 'f', plural: 'Rundfahrten', pos: 'noun', level: 'B1', en: 'round trip', hi: 'चक्कर यात्रा', ex: 'Die Rundfahrt durch die Stadt war interessant.', exEn: 'The round trip through the city was interesting.', exHi: 'Sheher ki chakkar yatra dilchasp thi.' },
    { de: 'Schicht', art: 'die', gender: 'f', plural: 'Schichten', pos: 'noun', level: 'B1', en: 'shift', hi: 'पाली', ex: 'Meine Schicht endet um zehn Uhr.', exEn: 'My shift ends at ten.', exHi: 'Meri pali das baje khatm hoti hai.' },
    { de: 'Sozialarbeiterin', art: 'die', gender: 'f', plural: 'Sozialarbeiterinnen', pos: 'noun', level: 'B1', en: 'social worker (female)', hi: 'सामाजिक कार्यकर्ता (महिला)', ex: 'Die Sozialarbeiterin hilft Flüchtlingen.', exEn: 'The social worker helps refugees.', exHi: 'Samaajik kaaryakartaa sharanaarthiyon ki madad karti hai.' },
    { de: 'Sporthalle', art: 'die', gender: 'f', plural: 'Sporthallen', pos: 'noun', level: 'B1', en: 'gymnasium', hi: 'व्यायामशाला', ex: 'Der Zugang zur Sporthalle ist frei.', exEn: 'Access to the gymnasium is free.', exHi: 'Vyayaamshaala tak pahunch mukt hai.' },
    { de: 'Stadträtin', art: 'die', gender: 'f', plural: 'Stadträtinnen', pos: 'noun', level: 'B1', en: 'city council member (female)', hi: 'नगर परिषद सदस्य (महिला)', ex: 'Die Stadträtin präsentierte den neuen Plan.', exEn: 'The city council member presented the new plan.', exHi: 'Nagar parishad sadasya ne naya plan prastut kiya.' },
    { de: 'Work-Life-Balance', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'work-life balance', hi: 'कार्य-जीवन संतुलन', ex: 'Eine gute Work-Life-Balance ist wichtig.', exEn: 'A good work-life balance is important.', exHi: 'Achha kaarya-jeevan santulan zaroori hai.' },
    { de: 'Übergabe', art: 'die', gender: 'f', plural: 'Übergaben', pos: 'noun', level: 'B1', en: 'handover', hi: 'हस्तांतरण', ex: 'Die Übergabe der Schlüssel fand heute statt.', exEn: 'The key handover took place today.', exHi: 'Chaabiyon ka hastaantaran aaj hua.' },
    { de: 'konzentriert', pos: 'adjective', level: 'B1', en: 'concentrated', hi: 'एकाग्र', ex: 'Sie arbeitet sehr konzentriert.', exEn: 'She works very concentratedly.', exHi: 'Woh bahut ekaagrata se kaam karti hai.' },
    { de: 'rollen', pos: 'verb', level: 'B1', en: 'to roll', hi: 'लुढ़कना', ex: 'Der Ball rollt über die Straße.', exEn: 'The ball rolls across the street.', exHi: 'Gaind sadak par ludhakti hai.', conj: { praesens: 'rollt', praeteritum: 'rollte', perfekt: 'ist gerollt' } },
    { de: 'springen', pos: 'verb', level: 'B1', en: 'to jump', hi: 'कूदना', ex: 'Die Kinder springen im Park.', exEn: 'The children jump in the park.', exHi: 'Bachhe park mein koodte hain.', conj: { praesens: 'springt', praeteritum: 'sprang', perfekt: 'ist gesprungen' } },
    { de: 'steigen', pos: 'verb', level: 'B1', en: 'to climb, rise', hi: 'चढ़ना', ex: 'Die Mieten steigen jedes Jahr.', exEn: 'Rents rise every year.', exHi: 'Kiraya har saal badhta hai.', conj: { praesens: 'steigt', praeteritum: 'stieg', perfekt: 'ist gestiegen' } },
    { de: 'Billett', art: 'das', gender: 'n', plural: 'Billette', pos: 'noun', level: 'B1', en: 'ticket (Swiss German)', hi: 'टिकट', ex: 'Hast du dein Billett dabei?', exEn: 'Do you have your ticket with you?', exHi: 'Kya tumhaare paas apna ticket hai?' },
    { de: 'Velo', art: 'das', gender: 'n', plural: 'Velos', pos: 'noun', level: 'B1', en: 'bicycle (Swiss German)', hi: 'साइकिल', ex: 'Ich fahre mit dem Velo zur Arbeit.', exEn: 'I ride my bicycle to work.', exHi: 'Main cycle se kaam par jaata hoon.' },
    { de: 'halbformell', pos: 'adjective', level: 'B1', en: 'semi-formal', hi: 'अर्ध-औपचारिक', ex: 'Der Brief war halbformell geschrieben.', exEn: 'The letter was written semi-formally.', exHi: 'Patra ardh-aupchaarik roop se likha gaya tha.' },
    { de: 'rauffahren', pos: 'verb', level: 'B1', en: 'to drive up', hi: 'ऊपर जाना (गाड़ी से)', ex: 'Wir fahren den Berg rauf.', exEn: 'We\'re driving up the mountain.', exHi: 'Hum pahaad par gaadi se chadh rahe hain.', conj: { praesens: 'fährt rauf', praeteritum: 'fuhr rauf', perfekt: 'ist raufgefahren' } },
    { de: 'rumfahren', pos: 'verb', level: 'B1', en: 'to drive around', hi: 'घूमना (गाड़ी से)', ex: 'Wir sind einfach durch die Stadt rumgefahren.', exEn: 'We just drove around the city.', exHi: 'Hum bas sheher mein gaadi se ghoome.', conj: { praesens: 'fährt rum', praeteritum: 'fuhr rum', perfekt: 'ist rumgefahren' } },
    { de: 'schweizerdeutsch', pos: 'adjective', level: 'B1', en: 'Swiss German', hi: 'स्विस जर्मन', ex: 'Er spricht schweizerdeutsch.', exEn: 'He speaks Swiss German.', exHi: 'Woh Swiss German bolta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Relativsatz mit Präposition?',
      body: [ 'When the verb requires a preposition, that preposition stays with the relative pronoun — it never moves elsewhere.' ],
      table: {
        head: ['Two sentences', 'One relative clause'],
        rows: [
          ['<span class="de">Das ist der Mann. Ich spreche mit dem Mann.</span>', '<span class="de">Das ist der Mann, mit dem ich spreche.</span>'],
          ['<span class="de">Das ist die Frau. Ich arbeite mit der Frau.</span>', '<span class="de">Das ist die Frau, mit der ich arbeite.</span>']
        ]
      },
      hinglish: 'Jab verb ko preposition chahiye, woh preposition relative pronoun ke saath rehta hai — kabhi kahin aur nahi jaata.'
    },
    {
      title: 'Dativ-Präpositionen',
      body: [ 'mit, bei, nach, von, zu, aus — these common B1 prepositions always take Dativ, so their relative pronoun is dem/der/dem/denen.' ],
      table: {
        head: ['Preposition', 'Example'],
        rows: [
          ['mit', '<span class="de">Das ist der Lehrer, mit dem ich Deutsch lerne.</span>'],
          ['bei', '<span class="de">Das ist die Familie, bei der ich wohne.</span>'],
          ['von', '<span class="de">Das ist der Kollege, von dem ich viel gelernt habe.</span>'],
          ['aus', '<span class="de">Das ist die Stadt, aus der ich komme.</span>'],
          ['zu', '<span class="de">Das ist die Universität, zu der Anna gehen möchte.</span>']
        ]
      },
      hinglish: 'mit, bei, nach, von, zu, aus — yeh common B1 prepositions hamesha Dativ lete hain, isliye inka relative pronoun dem/der/dem/denen hota hai.'
    },
    {
      title: 'Akkusativ-Präpositionen',
      body: [ 'für, durch, gegen, ohne, um — these prepositions always take Akkusativ, so their relative pronoun is den/die/das/die.' ],
      table: {
        head: ['Preposition', 'Example'],
        rows: [
          ['für', '<span class="de">Das ist der Freund, für den ich ein Geschenk gekauft habe.</span>'],
          ['durch', '<span class="de">Das ist die Straße, durch die wir gefahren sind.</span>'],
          ['gegen', '<span class="de">Das ist die Entscheidung, gegen die viele Studenten protestiert haben.</span>']
        ]
      },
      hinglish: 'für, durch, gegen, ohne, um — yeh prepositions hamesha Akkusativ lete hain, isliye inka relative pronoun den/die/das/die hota hai.'
    },
    {
      title: 'Wechselpräpositionen (kurzer Überblick)',
      body: [ 'A light review only — these two-way prepositions (in, an, vor…) can take Dativ or Akkusativ depending on meaning, but this chapter does not re-teach the full system.' ],
      table: {
        head: ['Preposition', 'Example'],
        rows: [
          ['in', '<span class="de">Das ist das Restaurant, in dem wir gegessen haben.</span>'],
          ['vor', '<span class="de">Das ist der Supermarkt, vor dem wir uns treffen.</span>'],
          ['an', '<span class="de">Das ist das Café, an dem wir vorbeigegangen sind.</span>']
        ]
      },
      note: 'The case with Wechselpräpositionen depends on meaning (location = Dativ, direction = Akkusativ) — this was covered in earlier levels and is only lightly reviewed here.',
      hinglish: 'Yeh two-way prepositions (in, an, vor…) meaning ke hisaab se Dativ ya Akkusativ lete hain. Is chapter mein inhe dobara poora nahi sikhaya jaa raha — sirf ek chhota review hai.'
    },
    {
      title: 'Vollständiger Vergleich: zwei Sätze → ein Satz',
      body: [ 'Practise seeing how two simple sentences merge into one relative clause.' ],
      table: {
        head: ['Two sentences', 'One clause'],
        rows: [
          ['<span class="de">Ich arbeite mit dem Lehrer.</span>', '<span class="de">Das ist der Lehrer, mit dem ich arbeite.</span>'],
          ['<span class="de">Ich wohne bei der Familie.</span>', '<span class="de">Das ist die Familie, bei der ich wohne.</span>'],
          ['<span class="de">Ich kaufe ein Geschenk für meinen Freund.</span>', '<span class="de">Das ist der Freund, für den ich ein Geschenk kaufe.</span>']
        ]
      },
      hinglish: 'Dekho ki do simple sentences milkar ek relative clause kaise ban jaate hain.'
    },
    {
      title: 'Präposition + Relativpronomen — komplette Tabelle',
      body: [ 'The gender/number of the pronoun matches the antecedent; the case matches the preposition.' ],
      table: {
        head: ['Gender/Number', 'mit (Dat.)', 'für (Akk.)', 'von (Dat.)'],
        rows: [
          ['Masculine', 'mit dem', 'für den', 'von dem'],
          ['Feminine', 'mit der', 'für die', 'von der'],
          ['Neuter', 'mit dem', 'für das', 'von dem'],
          ['Plural', 'mit denen', 'für die', 'von denen']
        ]
      },
      hinglish: 'Pronoun ka gender/number antecedent se match karta hai; case preposition se match karta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from dropping the preposition, moving it, using the wrong case, or wrong word order.' ],
      mistakes: [
        { wrong: 'der ich mit spreche', right: 'der Mann, mit dem ich spreche', why: 'The preposition must stay directly before the relative pronoun, and the pronoun must be dem (Dativ, since sprechen mit takes Dativ).' },
        { wrong: 'mit den ich spreche', right: 'mit dem ich spreche', why: 'sprechen mit takes Dativ — den is Akkusativ, the wrong case here.' },
        { wrong: 'für dem ich arbeite', right: 'für den ich arbeite', why: 'für takes Akkusativ, not Dativ — it should be für den, not für dem.' },
        { wrong: 'die Familie, mit der ich wohne', right: 'die Familie, bei der ich wohne', why: 'For living at someone\u2019s home German uses wohnen bei, not wohnen mit. The case is Dativ either way \u2014 only the preposition is wrong here.' },
        { wrong: 'Das ist der Mann ich mit spreche.', right: 'Das ist der Mann, mit dem ich spreche.', why: 'The preposition and relative pronoun must appear together right after the comma, not split apart in the clause.' }
      ],
      hinglish: 'Yeh paanch galtiyaan preposition chhodne se, use idhar-udhar rakhne se, ya galat case use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Relative clauses with prepositions appear constantly in Goethe B1 texts describing people, places, and institutions.' ],
      note: 'Quick check: does the verb need a preposition? If yes, keep it — put it directly before the relative pronoun, and let the preposition (not the antecedent) decide the case.',
      hinglish: 'Relative clauses with prepositions Goethe B1 texts mein logon, jagahon aur institutions ko describe karte waqt baar-baar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Rundgang durch die Stadt',
    titleEn: 'A tour through the city',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Trendviertel', role: 'plain', en: 'trending district', hi: 'चर्चित इलाका', type: 'Noun · neut.', why: 'das Trendviertel (this chapter).' },
      { w: ',', plain: true },
      { w: 'für', role: 'r-prep-rel', en: 'for', hi: 'के लिए', type: 'Präposition · Akkusativ', why: 'für + Akkusativ relative pronoun.' },
      { w: 'das', role: 'r-prep-rel', en: 'which', hi: 'जिसके लिए', type: 'Relativpronomen · Akkusativ' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Indefinitpronomen' },
      { w: 'Touristen', role: 'plain', en: 'tourists', hi: 'पर्यटक', type: 'Noun · plural' },
      { w: 'interessieren', role: 'r-verb', en: 'interest (Satzende)', hi: 'दिलचस्पी लेते हैं (Satzende)', type: 'Verb · sich interessieren (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Stadtrat', role: 'plain', en: 'city council member', hi: 'नगर परिषद सदस्य', type: 'Noun · masc.', why: 'der Stadtrat (this chapter).' },
      { w: ',', plain: true },
      { w: 'mit', role: 'r-prep-rel', en: 'with', hi: 'के साथ', type: 'Präposition · Dativ', why: 'mit + Dativ relative pronoun.' },
      { w: 'dem', role: 'r-prep-rel', en: 'whom', hi: 'जिसके साथ', type: 'Relativpronomen · Dativ' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'sprachen', role: 'r-verb', en: 'spoke (Satzende)', hi: 'बात की (Satzende)', type: 'Verb · sprechen (Präteritum, Satzende)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: ',', plain: true },
      { w: 'erklärte', role: 'r-verb', en: 'explained (Präteritum)', hi: 'समझाया', type: 'Verb · erklären (Präteritum)' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Wohnbau', role: 'plain', en: 'housing construction', hi: 'आवास निर्माण', type: 'Noun · masc.', why: 'der Wohnbau (this chapter).' },
      { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'Hochschule', role: 'plain', en: 'institution of higher education', hi: 'उच्च शिक्षा संस्थान', type: 'Noun · fem.', why: 'die Hochschule (this chapter).' },
      { w: ',', plain: true },
      { w: 'zu', role: 'r-prep-rel', en: 'to', hi: '—', type: 'Präposition · Dativ', why: 'zu + Dativ relative pronoun.' },
      { w: 'der', role: 'r-prep-rel', en: 'which', hi: 'जिसमें', type: 'Relativpronomen · Dativ' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Indefinitpronomen' },
      { w: 'Studenten', role: 'plain', en: 'students', hi: 'छात्र', type: 'Noun · plural' },
      { w: 'gehen', role: 'r-verb', en: 'go (Satzende)', hi: 'जाते हैं (Satzende)', type: 'Verb · gehen (Satzende)' },
      { w: ',', plain: true },
      { w: 'liegt', role: 'r-verb', en: 'is located', hi: 'स्थित है', type: 'Verb · liegen' },
      { w: 'am', role: 'r-place', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Rand', role: 'plain', en: 'edge', hi: 'किनारा', type: 'Noun · masc.', why: 'der Rand (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Stadt', role: 'plain', en: 'city', hi: 'शहर', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Industrieviertel', role: 'plain', en: 'industrial quarter', hi: 'औद्योगिक क्षेत्र', type: 'Noun · neut.', why: 'das Industrieviertel (this chapter).' },
      { w: 'laut', role: 'plain', en: 'loud (Satzende)', hi: 'शोरगुल वाला (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'ist', role: 'r-verb', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: ',', plain: true },
      { w: 'gibt', role: 'r-verb', en: 'is there', hi: 'है', type: 'Verb · geben' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'eine', role: 'plain', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Backstube', role: 'plain', en: 'bakery', hi: 'बेकरी', type: 'Noun · fem.', why: 'die Backstube (this chapter).' },
      { w: ',', plain: true },
      { w: 'aus', role: 'r-prep-rel', en: 'from', hi: 'से', type: 'Präposition · Dativ', why: 'aus + Dativ relative pronoun.' },
      { w: 'der', role: 'r-prep-rel', en: 'which', hi: 'जिससे', type: 'Relativpronomen · Dativ' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'herrlicher', role: 'plain', en: 'wonderful', hi: 'शानदार', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er (recycled — Ch.12).' },
      { w: 'Duft', role: 'plain', en: 'smell', hi: 'ख़ुशबू', type: 'Noun · masc.' },
      { w: 'kommt', role: 'r-verb', en: 'comes (Satzende)', hi: 'आती है (Satzende)', type: 'Verb · kommen (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'That\'s the trending district that many tourists are interested in. The city council member with whom we spoke explained the housing construction precisely. The university many students go to is located at the edge of the city. Although the industrial quarter is loud, there\'s a bakery, from which a wonderful smell comes.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_018_L001', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich zeige dir gleich den Park, in dem ich als Kind immer gespielt habe.', en: 'Timo, I\'ll show you the park I always played in as a child.' },
      { id: 'B1_018_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ist das der Park, über den du mir schon so oft erzählt hast?', en: 'Is that the park you\'ve told me about so often?' },
      { id: 'B1_018_L003', speaker: 'Marlen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau! Und daneben ist die Bank, auf der mein Großvater immer saß.', en: 'Exactly! And next to it is the bench my grandfather always sat on.' },
      { id: 'B1_018_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das ist wirklich ein besonderer Ort, an den man sich gern erinnert.', en: 'That\'s really a special place one likes to remember.' }
    ],
    transcript: 'Timo, ich zeige dir gleich den Park, in dem ich als Kind immer gespielt habe. Ist das der Park, über den du mir schon so oft erzählt hast? Genau! Und daneben ist die Bank, auf der mein Großvater immer saß. Das ist wirklich ein besonderer Ort, an den man sich gern erinnert.',
    translation: 'Timo, I\'ll show you the park I always played in as a child. Is that the park you\'ve told me about so often? Exactly! And next to it is the bench my grandfather always sat on. That\'s really a special place one likes to remember.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'zeige' },
      { w: 'dir' },
      { w: 'gleich' },
      { w: 'den' },
      { w: 'Park' },
      { w: ',', plain: true },
      { w: 'in' },
      { w: 'dem' },
      { w: 'ich' },
      { w: 'als' },
      { w: 'Kind' },
      { w: 'immer' },
      { w: 'gespielt' },
      { w: 'habe' },
      { w: '.', plain: true },
      { w: 'Ist' },
      { w: 'das' },
      { w: 'der' },
      { w: 'Park' },
      { w: ',', plain: true },
      { w: 'über' },
      { w: 'den' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'schon' },
      { w: 'so' },
      { w: 'oft' },
      { w: 'erzählt' },
      { w: 'hast' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: '!', plain: true },
      { w: 'Und' },
      { w: 'daneben' },
      { w: 'ist' },
      { w: 'die' },
      { w: 'Bank' },
      { w: ',', plain: true },
      { w: 'auf' },
      { w: 'der' },
      { w: 'mein' },
      { w: 'Großvater' },
      { w: 'immer' },
      { w: 'saß' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'wirklich' },
      { w: 'ein' },
      { w: 'besonderer' },
      { w: 'Ort' },
      { w: ',', plain: true },
      { w: 'an' },
      { w: 'den' },
      { w: 'man' },
      { w: 'sich' },
      { w: 'gern' },
      { w: 'erinnert' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welchen Park zeigt Marlen Timo?', qEn: 'What park is Marlen showing Timo?', options: ['einen neuen Park', 'den Park, in dem sie als Kind spielte', 'einen Park in ihrer neuen Stadt', 'einen Park ohne Erinnerung'], optionsEn: ['a new park', 'the park where she played as a child', 'a park in her new city', 'a park without memories'], answer: 1,
        explain: '"… den Park, in dem ich als Kind immer gespielt habe."' },
      { q: 'Wer saß auf der Bank?', qEn: 'Who sat on the bench?', options: ['Marlens Vater', 'Marlens Großvater', 'Timo', 'ein Fremder'], optionsEn: ['Marlen\'s father', 'Marlen\'s grandfather', 'Timo', 'a stranger'], answer: 1,
        explain: '"… die Bank, auf der mein Großvater immer saß."' }
    ]
  },

  speaking: [
    { task: "Zeig deinem Freund den Park aus deiner Kindheit.", taskEn: "Show your friend the park from your childhood.", de: "Das ist der Park, in dem ich als Kind immer gespielt habe.", en: "That's the park I always played in as a child." },
    { task: "Dein Freund fragt, ob das der Park ist, von dem du erzählt hast.", taskEn: "Your friend asks whether that's the park you told him about.", de: "Genau, das ist der Park, über den ich so oft erzählt habe.", en: "Exactly, that's the park I've talked about so often." },
    { task: "Zeig ihm die Bank, auf der du gesessen hast.", taskEn: "Show him the bench you used to sit on.", de: "Daneben ist die Bank, auf der wir immer gesessen haben.", en: "Next to it is the bench we always sat on." },
    { task: "Eine Kollegin fragt nach dem Kollegen, mit dem du arbeitest.", taskEn: "A colleague asks about the colleague you work with.", de: "Das ist der Kollege, mit dem ich das Projekt mache.", en: "That's the colleague I'm doing the project with." },
    { task: "Beschreibe die Nachbarin, auf die du dich verlassen kannst.", taskEn: "Describe the neighbour you can rely on.", de: "Das ist die Nachbarin, auf die ich mich immer verlassen kann.", en: "That's the neighbour I can always rely on." },
    { task: "Ein Freund fragt nach der Diskussion in den Nachrichten.", taskEn: "A friend asks about the discussion in the news.", de: "Das ist die Diskussion, über die alle im Moment sprechen.", en: "That's the discussion everybody is talking about right now." },
    { task: "Rollenspiel: Ihr zeigt euch euer altes Viertel.", taskEn: "Role-play: you show each other your old neighbourhood.", de: "Das ist das Haus, in dem ich gewohnt habe, und die Straße, durch die ich zur Schule ging.", en: "That's the house I lived in, and the street I walked through to school." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short description (six to eight sentences) — a city, a colleague, or a neighbourhood — using at least five relative clauses with prepositions (a mix of Dativ and Akkusativ).',
    starters: ['Das ist …, mit dem/der …', 'Das ist …, für den/die …', 'Das ist …, aus dem/der …'],
    placeholder: 'Das ist der Stadtrat, mit dem ich gesprochen habe. Das ist die Familie, bei der ich wohne …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Das ist der Mann, mit ___ ich spreche."',
      options: ['den', 'dem', 'der'],
      answer: 1,
      explain: 'sprechen mit takes Dativ — a masculine antecedent needs dem.'
    },
    gap: {
      sentence: ['Das ist der Freund, für ', ' ich ein Geschenk gekauft habe.'],
      gaps: [ { answer: 'den', accepts: ['den'] } ],
      explain: 'für takes Akkusativ — a masculine antecedent needs den.'
    },
    match: {
      q: 'Match each preposition to its case.',
      pairs: [
        { noun: 'mit', art: 'Dativ' },
        { noun: 'für', art: 'Akkusativ' },
        { noun: 'bei', art: 'Dativ' },
        { noun: 'durch', art: 'Akkusativ' }
      ]
    },
    builder: {
      target: 'Build: "That is the family with whom I live."',
      bank: ['Das', 'ist', 'die', 'Familie', ',', 'bei', 'der', 'ich', 'wohne', '.'],
      answer: ['Das', 'ist', 'die', 'Familie', ',', 'bei', 'der', 'ich', 'wohne', '.'],
      roles: { 'bei': 'r-prep-rel', 'der': 'r-prep-rel' }
    },
    combineSentences: {
      title: 'Combine two sentences into one',
      prompt: 'Combine: "Das ist die Stadt. Ich komme aus der Stadt."',
      answer: 'Das ist die Stadt, aus der ich komme.',
      explain: 'aus takes Dativ — a feminine antecedent needs der, right after aus.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das ist der Mann, ich mit spreche.',
      right: 'Das ist der Mann, mit dem ich spreche.',
      explain: 'The preposition must stay directly before the relative pronoun, right after the comma.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das ist die Frau, mit ___ ich arbeite."', options: ['dem', 'der', 'den'], answer: 1,
      explain: 'mit takes Dativ — a feminine antecedent needs der.' },
    { q: 'Complete: "Das ist die Entscheidung, gegen ___ viele protestiert haben."', options: ['der', 'die', 'dem'], answer: 1,
      explain: 'gegen takes Akkusativ — a feminine antecedent needs die.' },
    { q: 'Which sentence is correct?', options: ['der ich mit spreche', 'mit dem ich spreche', 'ich mit dem spreche'], answer: 1,
      explain: 'The preposition always comes directly before the relative pronoun.' },
    { q: 'Complete: "Das ist der Kollege, von ___ ich viel gelernt habe."', options: ['dem', 'den', 'der'], answer: 0,
      explain: 'von takes Dativ — a masculine antecedent needs dem.' },
    { q: 'Which sentence contains an error?', options: ['Das ist der Freund, für den ich etwas gekauft habe.', 'Das ist die Familie, bei der ich wohne.', 'Das ist der Lehrer, für dem ich lerne.'], answer: 2,
      explain: 'für takes Akkusativ, not Dativ — it should be "für den ich lerne."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-prep-rel', html: 'When a verb requires a preposition, that preposition stays directly before the relative pronoun — it never moves elsewhere in the clause.' },
    { c: 'r-prep-rel', html: 'The pronoun\'s CASE comes from the preposition (mit/bei/nach/von/zu/aus → Dativ; für/durch/gegen/ohne/um → Akkusativ), not from the antecedent\'s role in the main clause.' },
    { c: 'r-prep-rel', html: 'The pronoun\'s GENDER/NUMBER still matches its antecedent, exactly as in simple relative clauses.' }
  ],
  revisionTips: [
    'Whenever you build a relative clause, first ask: does the verb need a preposition? If yes, keep it and place it right before dem/der/das/denen.',
    'Practise the Dativ preposition list (mit, bei, nach, von, zu, aus) and Akkusativ list (für, durch, gegen, ohne, um) until you can sort any preposition instantly.',
    'Combine two simple sentences into one relative clause daily — it\'s the fastest way to internalize the pattern.'
  ]
};

window.CHAPTER = CHAPTER;
