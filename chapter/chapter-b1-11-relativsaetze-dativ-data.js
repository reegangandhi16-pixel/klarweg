/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 11
   "Relativsätze im Dativ" — Dativ relative clauses. Teaches
   ONLY: the Dativ relative pronoun (dem/der/dem/denen) as the
   indirect object ("Wem?") inside a relative clause, common
   Dativ verbs (helfen, danken, gehören, folgen, gefallen,
   gratulieren, antworten, vertrauen, begegnen, glauben), and
   simple Dativ-preposition relative clauses (mit dem, bei der).
   Builds on A2's Nominativ/Akkusativ relative clauses.
   Deliberately does NOT introduce Genitiv relative clauses,
   relative adverbs (wo, wohin, woher), or complex B2 relative
   constructions.
   Vocabulary source: uploaded chapter-11 list (22 items — a
   weather theme: Wettervorhersage, Sturm, Blitz, Donner, hageln,
   nieseln, schwül, …), woven into relative-clause examples about
   colleagues, neighbours, and forecasters.
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations}
   where natural — one full example per word (per this
   chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-11-relativsaetze-dativ',
  phase: 'B1 · Phase 1',
  number: 11,
  title: 'Relativsätze im Dativ',
  titleEn: 'Relative clauses in the Dativ',
  description: 'Das ist der Mann, dem ich helfe. Das ist die Frau, der ich danke. This chapter completes the relative-clause picture — after Nominativ (subject) and Akkusativ (direct object), the Dativ relative pronoun marks the indirect object: the person a verb like helfen, danken, or gratulieren points to.',
  xp: 250,
  time: 45,
  difficulty: 'Intermediate',
  nextChapter: { number: 12, title: 'Adjektivdeklination (Wiederholung & Vertiefung)', titleEn: 'Adjective declension — review & depth' , href: 'chapter-b1-12-adjektivdeklination-wiederholung.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A stormy forecast has Marret and Timo comparing who they trust — the weather forecast, the dark clouds, the storm neither of them quite believes — every description built on a Dativ relative clause: der Mann, dem ich vertraue; die Prognose, der ich glaube.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear dem/der/dem/denen marking the indirect object inside a relative clause'
    ],
    scene: 'Ein stürmischer Nachmittag im Büro',
    femaleSpeakers: ['Marret'],
    dialogue: [
      { speaker: 'Marret', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Sturm', role: 'r-subject', en: 'storm', hi: 'तूफ़ान', pron: 'shturm', type: 'Noun · masc.', why: 'der Sturm (this chapter).', ex: 'der Sturm, dem wir vertrauen', exEn: 'the storm which we trust' },
        { w: ',', plain: true },
        { w: 'dem', role: 'r-dativ', en: 'which', hi: 'जिस पर', pron: 'daym', type: 'Relativpronomen · dative', why: 'dem = dative masc./neut. relative pronoun (this chapter).', ex: 'der Sturm, dem wir nicht vertrauen', exEn: 'the storm which we do not trust' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'vertrauen', role: 'r-verb', en: 'trust', hi: 'भरोसा करते', pron: 'fer-TROW-en', type: 'Verb · vertrauen (Satzende)' },
        { w: ',', plain: true },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आ रहा है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'The storm, which we do not trust, comes tomorrow.', hi: 'Woh toofan, jispar hum bharosa nahi karte, kal aa raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Wettervorhersage', role: 'r-subject', en: 'weather forecast', hi: 'मौसम पूर्वानुमान', pron: 'VE-ter-for-hair-zah-guh', type: 'Noun · fem.', why: 'die Wettervorhersage (this chapter).', ex: 'die Wettervorhersage, der ich vertraue', exEn: 'the forecast which I trust' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-dativ', en: 'which', hi: 'जिस पर', pron: 'dair', type: 'Relativpronomen · dative', why: 'der = dative fem. relative pronoun (this chapter).', ex: 'die Wettervorhersage, der ich vertraue', exEn: 'the forecast which I trust' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vertraue', role: 'r-verb', en: 'trust', hi: 'भरोसा करता हूँ', pron: 'fer-TROW-uh', type: 'Verb · vertrauen (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen' },
        { w: 'Regen', role: 'r-akkusativ', en: 'rain', hi: 'बारिश', pron: 'RAY-gen', type: 'Noun · masc.' },
        { w: 'voraus', role: 'r-verb', en: 'ahead', hi: 'आगे', pron: 'for-OWS', type: 'Separable prefix · Satzende' },
        { w: '.', plain: true }
      ], en: 'The weather forecast, which I trust, predicts rain.', hi: 'Mausam poorvaanumaan, jispar main bharosa karta hoon, baarish batata hai.' },
      { speaker: 'Marret', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'वे', pron: 'dee', type: 'Article · plural' },
        { w: 'Wolken', role: 'r-subject', en: 'clouds', hi: 'बादल', pron: 'VOL-ken', type: 'Noun · plural', why: 'die Wolken (this chapter).', ex: 'die Wolken, denen wir folgen', exEn: 'the clouds which we follow' },
        { w: ',', plain: true },
        { w: 'denen', role: 'r-dativ', en: 'which (pl.)', hi: 'जिनका', pron: 'DAY-nen', type: 'Relativpronomen · dative', why: 'denen = dative plural relative pronoun (this chapter).', ex: 'die Wolken, denen wir folgen', exEn: 'the clouds which we follow' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'folgen', role: 'r-verb', en: 'follow', hi: 'अनुसरण करते हैं', pron: 'FOL-gen', type: 'Verb · folgen (Satzende)' },
        { w: ',', plain: true },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'dunkel', role: 'r-subject', en: 'dark', hi: 'धूसर', pron: 'DUN-kel', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The clouds, which we follow, are dark.', hi: 'Woh baadal, jinka hum anusaran karte hain, dhoosar hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'blitzen', role: 'r-verb', en: 'lightning', hi: 'बिजली चमकना', pron: 'BLI-tsen', type: 'Verb · infinitive (Satzende)', why: 'blitzen = to lightning (this chapter).', ex: 'Es wird blitzen.', exEn: 'It will lightning.' },
        { w: '?', plain: true }
      ], en: 'Will it still lightning today?', hi: 'Kya aaj abhi aur bijli chamkegi?' },
      { speaker: 'Marret', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'donnern', role: 'r-verb', en: 'thunder', hi: 'गरजना', pron: 'DO-nern', type: 'Verb · infinitive (Satzende)', why: 'donnern = to thunder (this chapter).', ex: 'Es wird donnern.', exEn: 'It will thunder.' },
        { w: '.', plain: true }
      ], en: 'Yes, and it will also thunder.', hi: 'Haan, aur garjega bhi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bleiben', role: 'r-verb', en: 'let us stay', hi: 'रहते हैं', pron: 'BLY-ben', type: 'Verb · bleiben (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'drinnen', role: 'r-place', en: 'inside', hi: 'अंदर', pron: 'DRI-nen', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Then let us rather stay inside.', hi: 'Phir hum andar rehte hain toh behtar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already know Nominativ relative clauses (the subject — <span class="de">der Mann, der arbeitet</span>) and Akkusativ ones (the direct object — <span class="de">der Mann, den ich sehe</span>). Now add the <b>indirect object</b>, answering <b>Wem?</b> (To whom?): <span class="de">der Mann, dem ich helfe</span> (der masc.), <span class="de">die Frau, der ich danke</span> (der fem.), <span class="de">das Kind, dem ich helfe</span> (dem neut.), <span class="de">die Studenten, denen ich helfe</span> (denen plural).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is RELATIVSÄTZE IM DATIV (B1 level only): the Dativ relative pronoun (dem masc., der fem., dem neut., denen plural) marks the indirect object inside a relative clause, answering "Wem?". Common Dativ verbs: helfen, danken, gehören, folgen, gefallen, gratulieren, antworten, vertrauen, begegnen, glauben. Simple Dativ-preposition relative clauses (mit dem, bei der) are also in scope. ' +
    'Do NOT expect or require Genitiv relative clauses, relative adverbs (wo/wohin/woher), or complex B2 relative constructions — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The Dativ relative pronoun\'s GENDER/NUMBER comes from the noun it refers to (the antecedent); its CASE comes from its function inside the relative clause. A masculine antecedent used as an indirect object needs dem, not der or den: "der Mann, dem ich helfe" not "der Mann, der ich helfe" or "der Mann, den ich helfe" (the latter would only be correct if helfen took Akkusativ, which it doesn\'t).\n' +
    '- Verbs like helfen, danken, gehören, folgen, gefallen, gratulieren, antworten, vertrauen, begegnen, glauben all take Dativ objects — the relative pronoun after them must be Dativ.\n' +
    '- The relative pronoun in the plural is always denen, never die, when it functions as a Dativ object: "die Studenten, denen der Lehrer hilft" not "die Studenten, die der Lehrer hilft".\n' +
    '- When a preposition governs the relative clause (mit, bei, von, zu…), the preposition comes immediately before the Dativ relative pronoun: "die Frau, mit der ich arbeite" not "die Frau, ich mit der arbeite" or dropping the preposition.\n' +
    '- The finite verb of the relative clause goes to the very end, as in any subordinate clause.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Dativ relative check:</b> one sentence on whether the relative pronoun\'s gender/number matched its antecedent and its case (Dativ) matched its function.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you handle Nominativ, Akkusativ, and Dativ relative clauses confidently, including with prepositions. Move on to <span class="de">Adjektivdeklination (Wiederholung & Vertiefung)</span>.',
    mid: 'Good. Re-read the full Nominativ/Akkusativ/Dativ comparison table once — especially denen for plural — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the Dativ verb list), then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'ist', role: 'r-verb' },
    { w: 'der', role: 'plain' }, { w: 'Mann', role: 'plain' },
    { w: ',', role: 'plain' }, { w: 'dem', role: 'r-dativ' },
    { w: 'ich', role: 'r-subject' }, { w: 'helfe', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: dem/der/dem/denen marks the indirect object inside a relative clause.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends describe colleagues, neighbours, and a weather forecast using Dativ relative clauses.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the Dativ relative pronoun table, common Dativ verbs, and prepositional relative clauses.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about neighbours and colleagues full of Dativ relative clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Dativ relative clauses in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe colleagues, teachers, neighbours, and family using Dativ relative clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a description or report using Dativ relative clauses naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Nominativ→Dativ and Akkusativ→Dativ transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words — Wettervorhersage, Sturm, Blitz, Donner, hageln, nieseln, schwül — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Nominativ/Akkusativ→Dativ transformation drills, Dativ-verb practice, error correction, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Relativsätze reference — Nominativ/Akkusativ/Dativ comparison table, Dativ verb list, prepositional relative clauses, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das ist der Mann, dem ich helfe.', text: 'Use the Dativ relative pronoun for masculine antecedents' },
    { de: 'Das ist die Frau, der ich danke.', text: 'Use the Dativ relative pronoun for feminine antecedents' },
    { de: 'Das sind die Studenten, denen ich helfe.', text: 'Use denen for plural Dativ relative clauses' },
    { de: 'Das ist die Frau, mit der ich arbeite.', text: 'Build prepositional Dativ relative clauses' },
    { de: 'Nominativ → Akkusativ → Dativ', text: 'Distinguish all three relative-clause cases' }
  ],

  // ---------- Vocabulary (22 items — full chapter-11 upload list) ----------
  vocab: [
    { de: 'Gedächtnis', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'memory', hi: 'याददाश्त', ex: 'Mein Gedächtnis für Wetterberichte ist gut.', exEn: 'My memory for weather reports is good.', exHi: 'Mausam ki reportein yaad rakhne ki meri yaddasht achhi hai.' },
    { de: 'Wetterbesserung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'weather improvement', hi: 'मौसम में सुधार', ex: 'Ab Mittwoch erwarten wir eine Wetterbesserung.', exEn: 'From Wednesday, we expect a weather improvement.', exHi: 'Budhvaar se, hum mausam mein sudhaar ki ummeed karte hain.' },
    { de: 'feucht', pos: 'adjective', level: 'B1', en: 'humid', hi: 'नम', ex: 'Die Luft war heute sehr feucht.', exEn: 'The air was very humid today.', exHi: 'Aaj hawa bahut nam thi.' },
    { de: 'mild', pos: 'adjective', level: 'B1', en: 'mild', hi: 'हल्का', ex: 'Der Winter war dieses Jahr sehr mild.', exEn: 'Winter was very mild this year.', exHi: 'Is saal sardi bahut halki thi.' },
    { de: 'neblig', pos: 'adjective', level: 'B1', en: 'foggy', hi: 'धुंधला', ex: 'Meine Kollegin hasst neblige Tage.', exEn: 'My colleague hates foggy days.', exHi: 'Meri sahkarmi dhundhle dinon se nafrat karti hai.' },
    { de: 'blitzen', pos: 'verb', level: 'B1', en: 'to flash lightning', hi: 'बिजली चमकना', ex: 'Draußen blitzte es die ganze Nacht.', exEn: 'Lightning flashed all night outside.', exHi: 'Baahar poori raat bijli chamakti rahi.', conj: { praesens: 'blitzt', praeteritum: 'blitzte', perfekt: 'hat geblitzt' } },
    { de: 'Traumwetter', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'dream weather', hi: 'सपनों जैसा मौसम', ex: 'Wir hatten Traumwetter für unseren Nachbarn.', exEn: 'We had dream weather for our neighbour.', exHi: 'Humare paas hamare padosi ke liye sapno jaisa mausam tha.' },
    { de: 'Blitz', art: 'der', gender: 'm', plural: 'Blitze', pos: 'noun', level: 'B1', en: 'lightning', hi: 'बिजली', ex: 'Der Meteorologe warnt vor Blitz und Donner.', exEn: 'The meteorologist warns of lightning and thunder.', exHi: 'Mausam vigyaani bijli aur garaj se chetavani deta hai.' },
    { de: 'Donner', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'thunder', hi: 'गरज', ex: 'Der Donner war so laut, dass ich aufwachte.', exEn: 'The thunder was so loud that I woke up.', exHi: 'Garaj itni tez thi ki main jaag gaya.' },
    { de: 'Herbststurm', art: 'der', gender: 'm', plural: 'Herbststürme', pos: 'noun', level: 'B1', en: 'autumn storm', hi: 'शरद ऋतु का तूफ़ान', ex: 'Der Herbststurm beschädigte viele Dächer.', exEn: 'The autumn storm damaged many roofs.', exHi: 'Sharad ritu ke toofan ne kai chhaton ko nuksaan pahunchaya.' },
    { de: 'Schneesturm', art: 'der', gender: 'm', plural: 'Schneestürme', pos: 'noun', level: 'B1', en: 'snowstorm', hi: 'बर्फ़ीला तूफ़ान', ex: 'Die Familie erlebte einen Schneesturm.', exEn: 'The family experienced a snowstorm.', exHi: 'Parivaar ne ek barfila toofan dekha.' },
    { de: 'Sturm', art: 'der', gender: 'm', plural: 'Stürme', pos: 'noun', level: 'B1', en: 'storm', hi: 'तूफ़ान', ex: 'Wegen des kommenden Sturms schließen wir die Fenster.', exEn: 'Because of the coming storm, we close the windows.', exHi: 'Aane wale toofan ki wajah se, hum khidkiyaan band karte hain.' },
    { de: 'Vorhersage', art: 'die', gender: 'f', plural: 'Vorhersagen', pos: 'noun', level: 'B1', en: 'forecast', hi: 'पूर्वानुमान', ex: 'Die Vorhersage war leider falsch.', exEn: 'Unfortunately, the forecast was wrong.', exHi: 'Durbhagya se, poorvanumaan galat tha.' },
    { de: 'Wettervorhersage', art: 'die', gender: 'f', plural: 'Wettervorhersagen', pos: 'noun', level: 'B1', en: 'weather forecast', hi: 'मौसम पूर्वानुमान', ex: 'Ich erkläre meinem Nachbarn oft die Wettervorhersage.', exEn: 'I often explain the weather forecast to my neighbour.', exHi: 'Main aksar apne padosi ko mausam ka poorvanumaan samjhaati hoon.' },
    { de: 'donnern', pos: 'verb', level: 'B1', en: 'to thunder', hi: 'गरजना', ex: 'Es donnerte den ganzen Abend.', exEn: 'It thundered the whole evening.', exHi: 'Poori shaam garaj hoti rahi.', conj: { praesens: 'donnert', praeteritum: 'donnerte', perfekt: 'hat gedonnert' } },
    { de: 'hageln', pos: 'verb', level: 'B1', en: 'to hail', hi: 'ओले गिरना', ex: 'Gestern hat es plötzlich gehagelt.', exEn: 'Yesterday it suddenly hailed.', exHi: 'Kal achanak ole gire.', conj: { praesens: 'hagelt', praeteritum: 'hagelte', perfekt: 'hat gehagelt' } },
    { de: 'nieseln', pos: 'verb', level: 'B1', en: 'to drizzle', hi: 'हल्की बारिश होना', ex: 'Es nieselt seit dem Morgen.', exEn: 'It has been drizzling since morning.', exHi: 'Subah se halki barish ho rahi hai.', conj: { praesens: 'nieselt', praeteritum: 'nieselte', perfekt: 'hat genieselt' } },
    { de: 'regnerisch', pos: 'adjective', level: 'B1', en: 'rainy', hi: 'बारिश वाला', ex: 'Der Herbst war dieses Jahr sehr regnerisch.', exEn: 'Autumn was very rainy this year.', exHi: 'Is saal sharad ritu bahut baarish wali thi.' },
    { de: 'schwül', pos: 'adjective', level: 'B1', en: 'muggy', hi: 'उमस भरा', ex: 'Obwohl das Wetter schwül war, hatten wir Traumwetter.', exEn: 'Although the weather was muggy, we had dream weather.', exHi: 'Halanki mausam umas bhara tha, humare paas sapno jaisa mausam tha.' },
    { de: 'stürmen', pos: 'verb', level: 'B1', en: 'to storm', hi: 'तूफ़ान आना', ex: 'Draußen stürmt es seit Stunden.', exEn: 'It has been storming outside for hours.', exHi: 'Baahar ghanton se toofan aa raha hai.', conj: { praesens: 'stürmt', praeteritum: 'stürmte', perfekt: 'hat gestürmt' } },
    { de: 'stürmisch', pos: 'adjective', level: 'B1', en: 'stormy', hi: 'तूफ़ानी', ex: 'Es war ein stürmischer Nachmittag im Büro.', exEn: 'It was a stormy afternoon at the office.', exHi: 'Office mein ek toofani dopahar thi.' },
    { de: 'wolkig', pos: 'adjective', level: 'B1', en: 'cloudy', hi: 'बादल भरा', ex: 'Dem Nachbarn gefällt wolkiges Wetter immer.', exEn: 'The neighbour always likes cloudy weather.', exHi: 'Padosi ko badal wala mausam hamesha pasand aata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Dativ-Relativsatz?',
      body: [
        'In a Dativ relative clause, the relative pronoun is the INDIRECT OBJECT — it answers <b>Wem?</b> (To whom?).'
      ],
      example: [
        { html: '<span class="de">Das ist der Mann. Ich helfe dem Mann.</span> → <span class="de">Das ist der Mann, dem ich helfe.</span>' },
        { html: '<span class="de">Das ist die Frau. Ich danke der Frau.</span> → <span class="de">Das ist die Frau, der ich danke.</span>' },
        { html: '<span class="de">Das ist das Kind. Ich gebe dem Kind ein Geschenk.</span> → <span class="de">Das ist das Kind, dem ich ein Geschenk gebe.</span>' },
        { html: '<span class="de">Das sind die Studenten. Ich erkläre den Studenten die Aufgabe.</span> → <span class="de">Das sind die Studenten, denen ich die Aufgabe erkläre.</span>' }
      ],
      hinglish: 'Dativ relative clause mein relative pronoun INDIRECT OBJECT hota hai — yeh Wem? (Kisko?) ka jawab deta hai.'
    },
    {
      title: 'Dativ-Relativpronomen',
      body: [ 'The gender/number depends on the antecedent noun; the case (here, always Dativ) depends on the pronoun\'s job inside the relative clause.' ],
      table: {
        head: ['Gender/Number', 'Dativ pronoun'],
        rows: [
          ['Masculine', 'dem'], ['Feminine', 'der'], ['Neuter', 'dem'], ['Plural', 'denen']
        ]
      },
      hinglish: 'Gender/number antecedent noun par depend karta hai; case (yahan hamesha Dativ) pronoun ke kaam par depend karta hai relative clause ke andar.'
    },
    {
      title: 'Vergleich: Nominativ, Akkusativ, Dativ',
      body: [ 'The full progression — students should see all three cases side by side.' ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', 'der', 'die', 'das', 'die'],
          ['Akkusativ', 'den', 'die', 'das', 'die'],
          ['Dativ', 'dem', 'der', 'dem', 'denen']
        ]
      },
      note: 'Only masculine changes between Nominativ and Akkusativ (der→den); Dativ changes ALL forms, and the plural becomes denen (not die).',
      hinglish: 'Sirf masculine Nominativ aur Akkusativ ke beech badalta hai (der→den); Dativ SAARE forms ko badal deta hai, aur plural denen ban jaata hai (die nahi).'
    },
    {
      title: 'Typische Dativ-Verben',
      body: [ 'These ten verbs naturally take a Dativ object — and so their relative pronoun is Dativ.' ],
      table: {
        head: ['Verb', 'Meaning'],
        rows: [
          ['helfen', 'to help'], ['danken', 'to thank'], ['gehören', 'to belong to'],
          ['folgen', 'to follow'], ['gefallen', 'to please'], ['gratulieren', 'to congratulate'],
          ['antworten', 'to answer'], ['vertrauen', 'to trust'], ['begegnen', 'to encounter'], ['glauben', 'to believe']
        ]
      },
      example: [
        { html: '<span class="de">Das ist die Lehrerin, der ich vertraue.</span>' },
        { html: '<span class="de">Das ist der Freund, dem ich geholfen habe.</span>' },
        { html: '<span class="de">Das sind die Studenten, denen der Lehrer gratuliert.</span>' },
        { html: '<span class="de">Das ist das Kind, dem ich ein Buch schenke.</span>' }
      ],
      hinglish: 'Yeh das verbs Dativ object lete hain — isliye inka relative pronoun bhi Dativ hota hai.'
    },
    {
      title: 'Relativsätze mit Präpositionen',
      body: [
        'Some Dativ verbs come with a fixed preposition — the preposition simply moves in front of the relative pronoun, unchanged.'
      ],
      example: [
        { html: '<span class="de">Das ist die Frau, mit der ich arbeite.</span>' },
        { html: '<span class="de">Das ist der Freund, mit dem ich spreche.</span>' },
        { html: '<span class="de">Das ist die Familie, bei der ich wohne.</span>' }
      ],
      note: 'Only simple B1 prepositional relative clauses are covered here — keep the preposition directly before dem/der/denen.',
      hinglish: 'Kuch Dativ verbs ke saath fixed preposition aata hai — preposition bas relative pronoun ke pehle chala jaata hai, bina badle.'
    },
    {
      title: 'Wer? Wen? Wem? — Entscheidungshilfe',
      body: [ 'Ask three questions to pick the right case.' ],
      table: {
        head: ['Question', 'Case'],
        rows: [
          ['Who does the action? (subject)', 'Nominativ (der/die/das/die)'],
          ['Who receives the direct action? (direct object)', 'Akkusativ (den/die/das/die)'],
          ['To/for whom does it happen? (indirect object)', 'Dativ (dem/der/dem/denen)']
        ]
      },
      note: 'Memory trick: Who? → der. Whom? → den. To whom? → dem. Plural? → denen.',
      hinglish: 'Teen sawaal poocho sahi case chunne ke liye: Kaun action karta hai? → Nominativ. Kis par seedha action hota hai? → Akkusativ. Kiske liye ya kisko hota hai? → Dativ.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes are extremely common at B1 — using the wrong case, wrong gender, or wrong verb agreement.' ],
      mistakes: [
        { wrong: 'der ich helfe', right: 'dem ich helfe', why: 'helfen takes Dativ — a masculine antecedent needs dem, not der (Nominativ) or den (Akkusativ, wrong case for this verb).' },
        { wrong: 'den ich danke', right: 'dem ich danke', why: 'danken takes Dativ — den is Akkusativ, the wrong case for this verb.' },
        { wrong: 'dem ich kenne', right: 'den ich kenne', why: 'kennen takes Akkusativ, not Dativ — a masculine antecedent here needs den.' },
        { wrong: 'die Leute, denen ich hilft', right: 'die Leute, denen ich helfe', why: 'The verb inside the relative clause agrees with its own subject (ich → helfe), not with the antecedent (die Leute).' },
        { wrong: 'mit dem ich arbeite Frau', right: 'die Frau, mit der ich arbeite', why: 'The noun (Frau) must come before the comma; the relative clause (with its preposition and pronoun) follows it.' }
      ],
      hinglish: 'Sabse aam galtiyaan: galat case use karna, galat gender, ya verb agreement galat hona. Hamesha verb check karo jo Dativ leta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'For the Goethe exam: Dativ relative clauses appear constantly when describing people — colleagues, teachers, family, neighbours. Recognising the Dativ verb quickly tells you the pronoun case.' ],
      note: 'Quick check: does the verb before the comma-clause take helfen/danken/gehören/folgen/gefallen/gratulieren/antworten/vertrauen/begegnen/glauben-style Dativ? If yes, use dem/der/dem/denen.',
      hinglish: 'Goethe exam ke liye: Dativ relative clauses logon ko describe karte waqt baar-baar aate hain — colleagues, teachers, family, padosi. Verb ko jaldi pehchaanna case batata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Nachbarn und Kollegen',
    titleEn: 'Neighbours and colleagues',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'Herr', role: 'r-subject', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Meier', role: 'r-subject', en: 'Meier', hi: 'मायर', type: 'Name' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'who (masc. nom.)', hi: 'जो', type: 'Relativpronomen · Nominativ', why: 'Nominativ relative pronoun (recycled from A2): der is the subject of its own clause.' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Nachbarhaus', role: 'r-place', en: 'neighbouring house', hi: 'पड़ोस का घर', type: 'Noun · neut.' },
      { w: 'wohnt', role: 'r-verb', en: 'lives (Satzende)', hi: 'रहता है (Satzende)', type: 'Verb · wohnen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'Nachbar', role: 'r-subject', en: 'neighbour', hi: 'पड़ोसी', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'dem', role: 'r-dativ', en: 'to whom', hi: 'जिसे', type: 'Relativpronomen · Dativ', why: 'Dativ relative pronoun (masc.): dem.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', type: 'Artikel · Akk.' },
      { w: 'Morgen', role: 'r-akkusativ', en: 'morning', hi: 'सुबह', type: 'Noun · masc.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Wettervorhersage', role: 'r-akkusativ', en: 'weather forecast', hi: 'मौसम पूर्वानुमान', type: 'Noun · fem.', why: 'die Wettervorhersage (this chapter).' },
      { w: 'erkläre', role: 'r-verb', en: 'explain (Satzende)', hi: 'समझाता हूँ (Satzende)', type: 'Verb · erklären (Satzende)' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · acc.' },
      { w: 'Kollegin', role: 'r-akkusativ', en: 'colleague', hi: 'सहकर्मी', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-dativ', en: 'to whom', hi: 'जिसे', type: 'Relativpronomen · Dativ', why: 'Dativ relative pronoun (fem.): der.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', type: 'Adverb' },
      { w: 'vertraut', role: 'r-verb', en: 'trusts (Satzende)', hi: 'भरोसा करता है (Satzende)', type: 'Verb · vertrauen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'वह', type: 'Article' },
      { w: 'Studenten', role: 'r-subject', en: 'students', hi: 'छात्र', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'denen', role: 'r-dativ', en: 'to whom (plural)', hi: 'जिन्हें', type: 'Relativpronomen · Dativ Plural', why: 'Dativ relative pronoun (plural): denen.' },
      { w: 'Herr', role: 'r-subject', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Meier', role: 'r-subject', en: 'Meier', hi: 'मायर', type: 'Name' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Wettervorhersage', role: 'r-akkusativ', en: 'weather forecast', hi: 'मौसम पूर्वानुमान', type: 'Noun · fem.' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'erklärt', role: 'r-verb', en: 'explains (Satzende)', hi: 'समझाता है (Satzende)', type: 'Verb · erklären (Satzende)' },
      { w: ',', plain: true },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', type: 'Adverb' },
      { w: 'dankbar', role: 'r-adjective', en: 'grateful', hi: 'कृतज्ञ', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'r-genitiv', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'kommenden', role: 'r-genitiv', en: 'coming', hi: 'आने वाला', type: 'Adjective · Genitiv' },
      { w: 'Herbststurms', role: 'r-genitiv', en: 'autumn storm (gen.)', hi: 'शरद तूफ़ान का', type: 'Noun · masc.', why: 'der Herbststurm (this chapter).' },
      { w: 'ruft', role: 'r-verb', en: 'calls', hi: 'फ़ोन करता है', type: 'Verb · rufen' },
      { w: 'Herr', role: 'r-subject', en: 'Mr', hi: 'श्री', type: 'Noun · masc.' },
      { w: 'Meier', role: 'r-subject', en: 'Meier', hi: 'मायर', type: 'Name' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · acc.' },
      { w: 'Familie', role: 'r-akkusativ', en: 'family', hi: 'परिवार', type: 'Noun · fem.' },
      { w: 'an', role: 'r-verb', en: '(anrufen)', hi: '—', type: 'Verbpartikel' },
      { w: ',', plain: true },
      { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के साथ', type: 'Preposition · Dat.', why: 'bei + Dativ relative pronoun.' },
      { w: 'der', role: 'r-dativ', en: 'whom', hi: 'जिसके पास', type: 'Relativpronomen · Dativ' },
      { w: 'seine', role: 'r-subject', en: 'his', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Tochter', role: 'r-subject', en: 'daughter', hi: 'बेटी', type: 'Noun · fem.' },
      { w: 'wohnt', role: 'r-verb', en: 'lives (Satzende)', hi: 'रहती है (Satzende)', type: 'Verb · wohnen (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'That\'s Mr. Meier, who lives in the neighbouring house. He is the neighbour to whom I explain the weather forecast every morning. He has a colleague whom he always trusts. The students to whom Mr. Meier often explains the weather forecast are always grateful. Because of the coming autumn storm, Mr. Meier calls the family with whom his daughter lives.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_011_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Marret, die Werkstatt, der du dein Fahrrad anvertraut hast — waren die gut?', en: 'Marret, the repair shop you entrusted your bike to — were they good?' },
      { id: 'B1_011_L002', speaker: 'Marret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich gesagt weiß ich es noch nicht. Der Mann, dem ich es gegeben habe, hat kaum etwas erklärt.', en: 'Honestly, I don\'t know yet. The man I gave it to barely explained anything.' },
      { id: 'B1_011_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das klingt nicht gut. Der Mechaniker, mit dem ich letztes Mal gesprochen habe, war viel geduldiger.', en: 'That doesn\'t sound good. The mechanic I talked to last time was much more patient.' },
      { id: 'B1_011_L004', speaker: 'Marret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht frage ich einfach direkt nach ihm. Einem Namen traue ich mehr als einem Gefühl.', en: 'Maybe I\'ll just ask for him directly. I trust a name more than a feeling.' }
    ],
    transcript: 'Marret, die Werkstatt, der du dein Fahrrad anvertraut hast — waren die gut? Ehrlich gesagt weiß ich es noch nicht. Der Mann, dem ich es gegeben habe, hat kaum etwas erklärt. Das klingt nicht gut. Der Mechaniker, mit dem ich letztes Mal gesprochen habe, war viel geduldiger. Vielleicht frage ich einfach direkt nach ihm. Einem Namen traue ich mehr als einem Gefühl.',
    translation: 'Marret, the repair shop you entrusted your bike to — were they good? Honestly, I don\'t know yet. The man I gave it to barely explained anything. That doesn\'t sound good. The mechanic I talked to last time was much more patient. Maybe I\'ll just ask for him directly. I trust a name more than a feeling.',
    tokens: [
      { w: 'Marret' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Werkstatt' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'du' },
      { w: 'dein' },
      { w: 'Fahrrad' },
      { w: 'anvertraut' },
      { w: 'hast' },
      { w: '—', plain: true },
      { w: 'waren' },
      { w: 'die' },
      { w: 'gut' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: 'weiß' },
      { w: 'ich' },
      { w: 'es' },
      { w: 'noch' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Mann' },
      { w: ',', plain: true },
      { w: 'dem' },
      { w: 'ich' },
      { w: 'es' },
      { w: 'gegeben' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'hat' },
      { w: 'kaum' },
      { w: 'etwas' },
      { w: 'erklärt' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'klingt' },
      { w: 'nicht' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Der' },
      { w: 'Mechaniker' },
      { w: ',', plain: true },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'ich' },
      { w: 'letztes' },
      { w: 'Mal' },
      { w: 'gesprochen' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'war' },
      { w: 'viel' },
      { w: 'geduldiger' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: 'frage' },
      { w: 'ich' },
      { w: 'einfach' },
      { w: 'direkt' },
      { w: 'nach' },
      { w: 'ihm' },
      { w: '.', plain: true },
      { w: 'Einem' },
      { w: 'Namen' },
      { w: 'traue' },
      { w: 'ich' },
      { w: 'mehr' },
      { w: 'als' },
      { w: 'einem' },
      { w: 'Gefühl' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Bei was ist sich Marret unsicher?', qEn: 'What is Marret unsure about?', options: ['ob sie ein neues Fahrrad braucht', 'ob sie der Werkstatt vertrauen kann', 'ob der Laden offen ist', 'ob das Fahrrad noch fahrbereit ist'], optionsEn: ['whether she needs a new bike', 'whether she can trust the garage', 'whether the shop is open', 'whether the bike is still roadworthy'], answer: 1,
        explain: '"… bin ich mir nicht sicher, ob ich ihr wirklich vertrauen kann."' },
      { q: 'Was sagt Timo über den Mechaniker?', qEn: 'What does Timo say about the mechanic?', options: ['Er wirkte unsicher.', 'Er wirkte sehr kompetent.', 'Er war unfreundlich.', 'Er hatte keine Zeit.'], optionsEn: ['He came across as unsure.', 'He came across as very competent.', 'He was unfriendly.', 'He had no time.'], answer: 1,
        explain: '"Der Mechaniker … wirkte sehr kompetent."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt nach der Werkstatt, der du dein Rad gegeben hast.", taskEn: "Your friend asks about the workshop you entrusted your bike to.", de: "Der Mann, dem ich es gegeben habe, hat kaum etwas erklärt.", en: "The man I gave it to barely explained anything." },
    { task: "Beschreibe eine Kollegin, der du gern hilfst.", taskEn: "Describe a colleague you like helping.", de: "Das ist die Kollegin, der ich immer bei den Berichten helfe.", en: "That's the colleague I always help with the reports." },
    { task: "Ein Freund fragt nach deinem Nachbarn.", taskEn: "A friend asks about your neighbour.", de: "Der Nachbar, dem ich die Post bringe, wohnt oben.", en: "The neighbour I bring the post to lives upstairs." },
    { task: "Deine Mutter fragt, wem du das Wetter erklärt hast.", taskEn: "Your mother asks who you explained the weather to.", de: "Das war der Kollege, dem ich die Vorhersage gezeigt habe.", en: "That was the colleague I showed the forecast to." },
    { task: "Beschreibe die Lehrerin, der du viel verdankst.", taskEn: "Describe the teacher you owe a lot to.", de: "Das ist die Lehrerin, der ich mein gutes Gedächtnis für Wörter verdanke.", en: "That's the teacher I owe my good memory for words to." },
    { task: "Ein Freund fragt nach den Leuten, denen du bei Sturm geholfen hast.", taskEn: "A friend asks about the people you helped during the storm.", de: "Das sind die Nachbarn, denen wir nach dem Herbststurm geholfen haben.", en: "Those are the neighbours we helped after the autumn storm." },
    { task: "Rollenspiel: Ihr sprecht über eine Werkstatt, die euch enttäuscht hat.", taskEn: "Role-play: you talk about a workshop that disappointed you.", de: "Die Werkstatt, der ich mein Rad anvertraut habe, hat schlecht gearbeitet. Der Mann, dem ich es gab, war unfreundlich.", en: "The workshop I entrusted my bike to did a bad job. The man I gave it to was unfriendly." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short description (six to eight sentences) of colleagues, neighbours, or family members — use at least four Dativ relative clauses (with helfen, danken, gehören, gefallen, gratulieren, vertrauen, or a Dativ preposition like mit/bei).',
    starters: ['Das ist …, dem/der ich …', 'Das sind …, denen …', 'Das ist die Person, mit der …'],
    placeholder: 'Das ist mein Nachbar, dem ich oft die Wettervorhersage erkläre …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Das ist der Mann, ___ ich helfe."',
      options: ['der', 'den', 'dem'],
      answer: 2,
      explain: 'helfen takes Dativ — a masculine antecedent needs dem.'
    },
    gap: {
      sentence: ['Das sind die Studenten, ', ' ich helfe.'],
      gaps: [ { answer: 'denen', accepts: ['denen'] } ],
      explain: 'The Dativ relative pronoun for plural is always denen.'
    },
    match: {
      q: 'Match each case to its relative pronoun (masculine).',
      pairs: [
        { noun: 'Nominativ', art: 'der' },
        { noun: 'Akkusativ', art: 'den' },
        { noun: 'Dativ', art: 'dem' }
      ]
    },
    builder: {
      target: 'Build: "That is the woman with whom I work."',
      bank: ['Das', 'ist', 'die', 'Frau', ',', 'mit', 'der', 'ich', 'arbeite', '.'],
      answer: ['Das', 'ist', 'die', 'Frau', ',', 'mit', 'der', 'ich', 'arbeite', '.'],
      roles: { 'der': 'r-dativ', 'ich': 'r-subject', 'arbeite': 'r-verb' }
    },
    nominativToDativ: {
      title: 'Transform: Nominativ → Dativ',
      prompt: 'Rewrite using Dativ: "Das ist der Mann, der hier arbeitet." (add: ich helfe ihm)',
      answer: 'Das ist der Mann, dem ich helfe.',
      explain: 'When the pronoun becomes the indirect object of helfen, it changes from der (Nominativ) to dem (Dativ).'
    },
    akkusativToDativ: {
      title: 'Transform: Akkusativ → Dativ',
      prompt: 'Rewrite using Dativ: "Das ist die Frau, die ich kenne." (add: ich danke ihr)',
      answer: 'Das ist die Frau, der ich danke.',
      explain: 'When the pronoun becomes the indirect object of danken, it changes from die (Akkusativ) to der (Dativ).'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das ist der Freund, den ich danke.',
      right: 'Das ist der Freund, dem ich danke.',
      explain: 'danken takes Dativ, not Akkusativ — the pronoun must be dem, not den.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das ist die Frau, ___ ich danke."', options: ['die', 'der', 'den'], answer: 1,
      explain: 'danken takes Dativ — a feminine antecedent needs der.' },
    { q: 'Complete: "Das sind die Studenten, ___ der Lehrer gratuliert."', options: ['die', 'denen', 'den'], answer: 1,
      explain: 'gratulieren takes Dativ — the plural Dativ relative pronoun is always denen.' },
    { q: 'Which sentence is correct?', options: ['Das ist der Mann, der ich helfe.', 'Das ist der Mann, dem ich helfe.', 'Das ist der Mann, den ich helfe.'], answer: 1,
      explain: 'helfen takes Dativ — a masculine antecedent needs dem.' },
    { q: 'Complete: "Das ist die Kollegin, mit ___ ich arbeite."', options: ['die', 'der', 'denen'], answer: 1,
      explain: 'mit takes Dativ — a feminine antecedent needs der.' },
    { q: 'Which sentence contains an error?', options: ['Das ist der Freund, dem ich geholfen habe.', 'Das ist die Familie, bei der ich wohne.', 'Das ist der Freund, den ich danke.'], answer: 2,
      explain: 'danken takes Dativ, not Akkusativ — it should be "dem ich danke."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'Use <span class="de r-dativ">dem/der/dem/denen</span> when the relative pronoun is the INDIRECT OBJECT, answering Wem?' },
    { c: 'r-dativ', html: 'Common Dativ verbs — helfen, danken, gehören, folgen, gefallen, gratulieren, antworten, vertrauen, begegnen, glauben — all trigger a Dativ relative pronoun.' },
    { c: 'r-dativ', html: 'With a preposition, it stays directly before the pronoun: <span class="de">die Frau, mit der ich arbeite.</span>' }
  ],
  revisionTips: [
    'Whenever you describe someone with a relative clause, check the verb first: does it take Dativ (helfen, danken…)? If yes, reach for dem/der/dem/denen.',
    'Remember: only the plural Dativ relative pronoun (denen) looks different from every other Dativ form you already know.',
    'Practise the three-case ladder out loud: der (who) → den (whom) → dem (to whom) → denen (plural, to whom).'
  ]
};

window.CHAPTER = CHAPTER;
