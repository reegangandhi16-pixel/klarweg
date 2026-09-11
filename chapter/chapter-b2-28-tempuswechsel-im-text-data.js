/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 2 · Chapter 28
   "Tempuswechsel im Text" — natural tense-switching WITHIN one
   text. Good German does not stay in one tense: Präsens (now),
   Perfekt (spoken narration of yesterday), Präteritum (written
   narration / background), with direct speech naturally
   returning to Perfekt/Präsens even inside Präteritum narration.
   Builds directly on Ch.27 (Perfekt vs Präteritum usage).
   Does NOT teach Plusquamperfekt, Futur, or Konjunktiv.
   IMPORTANT: dialogue uses ONLY Doris and Timo.
   Theme: German reunification / Berlin Wall history (continues
   Ch.27's theme) — ideal ground for narration + direct speech.
   Vocabulary source: uploaded chapter-28 list (53 items).
============================================================ */
const CHAPTER = {
  id: 'b2-28-tempuswechsel-im-text',
  phase: 'B2 · Phase 2',
  number: 28,
  title: 'Tempuswechsel im Text',
  titleEn: 'Tense-switching within a text',
  description: 'Good German does not stay in one tense — learn WHEN and WHY natives shift between Präsens, Perfekt, and Präteritum inside a single text.',
  xp: 450,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 29, title: 'Futur I für Vermutungen', titleEn: 'Futur I for assumptions' , href: 'chapter-b2-29-futur1-vermutungen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'One story, <em>three tenses.</em>',
    intro: 'Watching a documentary on German reunification, Doris and Timo drift between now, yesterday, and background history — 1961\'s division, 1989\'s fall of the wall, a grandmother\'s memory — one story moving naturally through three tenses.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how Präsens, Perfekt, and spoken-exception Präteritum interleave inside one conversation'
    ],
    scene: 'Die Dokumentation',
    femaleSpeakers: ['Doris'],
    dialogue: [
      { speaker: 'Doris', tokens: [
        { w: '1961', role: 'r-time', en: '1961', hi: '1961', pron: 'NOYN-tsayn-HOON-dert-ine-und-zeks-tsikh', type: 'Number · year', ex: 'neunzehnhunderteinundsechzig' },
        { w: 'begann', role: 'r-verb', en: 'began', hi: 'शुरू हुआ', pron: 'be-GAN', type: 'Verb · beginnen (Präteritum)', why: 'Präteritum for historical narration (this chapter).', ex: '1961 begann die Teilung.', exEn: 'In 1961 the division began.' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Teilung', role: 'r-subject', en: 'division', hi: 'विभाजन', pron: 'TY-lung', type: 'Noun · fem.', why: 'die Teilung (this chapter).', ex: 'die Teilung Berlins' },
        { w: 'Berlins', role: 'r-subject', en: 'of Berlin', hi: 'बर्लिन का', pron: 'ber-LEENS', type: 'Noun · genitive' },
        { w: '.', plain: true }
      ], en: 'In 1961 the division of Berlin began.', hi: '1961 mein Berlin ka vibhajan shuru hua.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Oma', role: 'r-subject', en: 'grandma', hi: 'दादी', pron: 'O-ma', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'देखी है', pron: 'hat', type: 'Verb · haben', why: 'Perfekt for personal recounting (this chapter).', ex: 'Meine Oma hat die Mauer gesehen.', exEn: 'My grandma has seen the wall.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Mauer', role: 'r-akkusativ', en: 'wall', hi: 'दीवार', pron: 'MOW-er', type: 'Noun · fem.' },
        { w: 'damals', role: 'r-time', en: 'back then', hi: 'उस समय', pron: 'DAH-mahls', type: 'Adverb · time' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखी', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'My grandma has seen the wall back then.', hi: 'Meri dadi ne us samay deewaar dekhi hai.' },
      { speaker: 'Doris', tokens: [
        { w: '1989', role: 'r-time', en: '1989', hi: '1989', pron: 'NOYN-tsayn-HOON-dert-noyn-und-akh-tsikh', type: 'Number · year', ex: 'neunzehnhundertneunundachtzig' },
        { w: 'fiel', role: 'r-verb', en: 'fell', hi: 'गिरी', pron: 'feel', type: 'Verb · fallen (Präteritum)', why: 'Präteritum for the historical fact (this chapter).', ex: '1989 fiel die Mauer.', exEn: 'In 1989 the wall fell.' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Mauer', role: 'r-subject', en: 'wall', hi: 'दीवार', pron: 'MOW-er', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Oma', role: 'r-subject', en: 'grandma', hi: 'दादी', pron: 'O-ma', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'जश्न मनाया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gefeiert', role: 'r-verb', en: 'celebrated', hi: 'जश्न', pron: 'ge-FY-ert', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'In 1989 the wall fell. My grandma has celebrated that.', hi: '1989 mein deewaar giri. Meri dadi ne uska jashn manaaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'erzählte', role: 'r-verb', en: 'told', hi: 'सुनाई', pron: 'er-TSAYL-tuh', type: 'Verb · erzählen (Präteritum)' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Geschichte', role: 'r-akkusativ', en: 'story', hi: 'कहानी', pron: 'ge-SHIKH-tuh', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'How did she tell you the story?', hi: 'Usne tumhe kahaani kaise sunaayi?' },
      { speaker: 'Doris', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'she', hi: 'उसने', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'कहा है', pron: 'hat', type: 'Verb · haben' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'gesagt', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ge-ZAHKT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'alle', role: 'r-subject', en: 'everyone', hi: 'सब', pron: 'A-luh', type: 'Pronoun · indefinite' },
        { w: 'weinten', role: 'r-verb', en: 'cried', hi: 'रोए', pron: 'VYN-ten', type: 'Verb · weinen (Präteritum)' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'tanzten', role: 'r-verb', en: 'danced', hi: 'नाचे', pron: 'TANTS-ten', type: 'Verb · tanzen (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'She has told me that everyone cried and danced.', hi: 'Usne mujhe kaha hai ki sabhi roye aur naache.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'होगा', pron: 'mus', type: 'Modal · müssen' },
        { w: 'ein', role: 'r-subject', en: 'an (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'unvergesslicher', role: 'r-subject', en: 'unforgettable', hi: 'अविस्मरणीय', pron: 'UN-fer-ges-li-kher', type: 'Adjective', why: 'unvergesslich = unforgettable (this chapter).', ex: 'ein unvergesslicher Moment' },
        { w: 'Moment', role: 'r-subject', en: 'moment', hi: 'पल', pron: 'mo-MENT', type: 'Noun · masc.' },
        { w: 'gewesen', role: 'r-verb', en: 'been', hi: 'रहा', pron: 'ge-VAY-zen', type: 'Partizip II · Satzende' },
        { w: 'sein', role: 'r-verb', en: 'have', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Konjunktiv II)' },
        { w: '.', plain: true }
      ], en: 'That must have been an unforgettable moment.', hi: 'Yeh ek avismarniya pal raha hoga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Good German does <em>not</em> stay in one tense. A single text naturally moves between <span class="de r-tempuswechsel">Präsens</span> (now), <span class="de r-tempuswechsel">Perfekt</span> (spoken narration of yesterday), and <span class="de r-tempuswechsel">Präteritum</span> (written background) — and direct speech always snaps back to the natural spoken tense, even inside a Präteritum-heavy narration.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPUSWECHSEL IM TEXT (B2 level): natural tense-switching WITHIN a single text. Präsens for "now", Perfekt for spoken narration of recent past, Präteritum for written background/history. Direct speech (quoted dialogue) naturally reverts to spoken Perfekt/Präsens even when surrounded by Präteritum narration. This builds directly on Ch.27 (Perfekt vs Präteritum usage) — the learner already knows WHEN to choose each tense; this chapter is about switching between them naturally within one text, according to context (not randomly). ' +
    'Do NOT expect or require Plusquamperfekt, Futur, or Konjunktiv — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- A tense shift is CORRECT when it follows a context change (now → yesterday → background → direct speech → back to now). Do not flag deliberate, context-driven tense shifts as errors.\n' +
    '- A tense shift is a PROBLEM only when it is random/unmotivated within the same context, or when an entire narrative awkwardly stays in only one tense throughout (e.g. an entire lively story only in Perfekt with no variation, or a whole spoken conversation entirely in Präteritum without the natural spoken exceptions).\n' +
    '- Do not flag "war", "hatte", or modal verbs in Präteritum as errors — those are the correct spoken exceptions from Ch.27.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Tense-flow check:</b> one sentence on whether the tense shifts follow the timeline naturally (now / yesterday / background / direct speech).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you switch tenses naturally according to context, and direct speech correctly returns to spoken register. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the timeline comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: change tense ONLY when the context changes (now, yesterday, background, direct speech), never randomly, and never stay in a single tense throughout an entire story.'
  },

  parserSentence: [
    { w: 'Ich', role: 'plain' }, { w: 'schaue', role: 'r-tempuswechsel' }, { w: 'gerade', role: 'plain' },
    { w: '.', plain: true }, { w: 'Gestern', role: 'plain' }, { w: 'habe', role: 'r-tempuswechsel' }, { w: 'ich', role: 'plain' }, { w: 'gearbeitet', role: 'r-tempuswechsel' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: good German shifts tense naturally according to context, never randomly.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Doris and Timo discuss a reunification documentary, drifting between now, yesterday, and background history.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 53 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the timeline logic behind tense-switching and the role of direct speech.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Compare a travel blog (natural switching) with a newspaper interview (Präteritum narration + direct speech).' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify tense changes, why they happened, and the underlying timeline.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Tell stories and interviews using natural tense changes.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a blog article and an experience report, switching tense naturally by context.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill tense choice, timeline exercises, and natural rewriting.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 450 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 53 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Tense-choice drills, timeline exercises, and a natural-switching writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete timeline logic reference — text-type comparison and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich schaue gerade... Gestern habe ich...', text: 'Move naturally between Präsens and Perfekt within one text' },
    { de: 'Vor der Wiedervereinigung errichtete man eine Mauer.', text: 'Use Präteritum for written background/history' },
    { de: 'Er sagte: "Ich habe geweint."', text: 'Let direct speech naturally return to spoken Perfekt/Präsens' },
    { de: 'Now → Yesterday → Background → Direct speech', text: 'Follow the timeline logic behind natural tense shifts' },
    { de: 'Konversation, Blog, Bericht, gemischte Geschichte', text: 'Recognize typical tense patterns per text type' }
  ],

  // ---------- Vocabulary (53 items — uploaded chapter-28 list; German-history theme) ----------
  vocab: [
    { de: 'Neutralität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'neutrality', hi: 'तटस्थता', ex: 'Die Neutralität des Landes wurde respektiert.', exEn: 'The country\'s neutrality was respected.', exHi: 'Desh ki tatasthata ka sammaan kiya gaya.', ex2: 'Sie hat ihre Neutralität bewahrt.', ex2En: 'She\'s preserved her neutrality.', ex2Hi: 'Usne apni tatasthata banaaye rakhi hai.' },
    { de: 'Öffnung', art: 'die', gender: 'f', plural: 'Öffnungen', pos: 'noun', level: 'B2', register: 'both', en: 'opening', hi: 'खुलना', ex: '"Die Öffnung ist eine Sensation", sagte der Erzähler.', exEn: '"The opening is a sensation," said the narrator.', exHi: '"Yeh khulna ek sansani hai," katha-vaachak ne kaha.', ex2: 'Die Öffnung hat viele überrascht.', ex2En: 'The opening has surprised many.', ex2Hi: 'Khulna ne kai logon ko chaunka diya hai.' },
    { de: 'Pressekonferenz', art: 'die', gender: 'f', plural: 'Pressekonferenzen', pos: 'noun', level: 'B2', register: 'written', en: 'press conference', hi: 'प्रेस कॉन्फ्रेंस', ex: 'Die Pressekonferenz fand am Abend statt.', exEn: 'The press conference took place in the evening.', exHi: 'Press conference shaam ko hui.', ex2: 'Sie hat viele Pressekonferenzen gegeben.', ex2En: 'She\'s given many press conferences.', ex2Hi: 'Usne kai press conferences di hain.' },
    { de: 'Protestaktion', art: 'die', gender: 'f', plural: 'Protestaktionen', pos: 'noun', level: 'B2', register: 'written', en: 'protest action', hi: 'विरोध प्रदर्शन', ex: 'Die Protestaktion verlief friedlich.', exEn: 'The protest action was peaceful.', exHi: 'Virodh pradarshan shaanti se hua.', ex2: 'Sie haben eine Protestaktion organisiert.', ex2En: 'They\'ve organised a protest action.', ex2Hi: 'Unhone ek virodh pradarshan aayojit kiya hai.' },
    { de: 'Regelung', art: 'die', gender: 'f', plural: 'Regelungen', pos: 'noun', level: 'B2', register: 'both', en: 'regulation, rule', hi: 'नियमन', ex: 'Die neue Regelung trat in Kraft.', exEn: 'The new regulation came into effect.', exHi: 'Naya niyam laagu hua.', ex2: 'Wir haben eine faire Regelung gefunden.', ex2En: 'We\'ve found a fair regulation.', ex2Hi: 'Humein ek nyaayasangat niyam mila hai.' },
    { de: 'Revolution', art: 'die', gender: 'f', plural: 'Revolutionen', pos: 'noun', level: 'B2', register: 'both', en: 'revolution', hi: 'क्रांति', ex: 'Die Revolution veränderte das Land.', exEn: 'The revolution changed the country.', exHi: 'Kranti ne desh ko badal diya.', ex2: 'Historiker haben die Revolution ausführlich untersucht.', ex2En: 'Historians have studied the revolution extensively.', ex2Hi: 'Itihaaskaaron ne kranti ka vistrit adhyayan kiya hai.' },
    { de: 'Rüstung', art: 'die', gender: 'f', plural: 'Rüstungen', pos: 'noun', level: 'B2', register: 'written', en: 'armament, armour', hi: 'शस्त्रीकरण', ex: 'Die Rüstung kostete viel Geld.', exEn: 'The armament cost a lot of money.', exHi: 'Shastreekaran mein bahut paisa laga.', ex2: 'Sie haben die Rüstung reduziert.', ex2En: 'They\'ve reduced the armament.', ex2Hi: 'Unhone shastreekaran kam kiya hai.' },
    { de: 'Säuglingssterblichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'infant mortality', hi: 'शिशु मृत्यु दर', ex: 'Die Säuglingssterblichkeit sank deutlich.', exEn: 'Infant mortality dropped significantly.', exHi: 'Shishu mrityu dar mein kaafi kami aayi.', ex2: 'Studien haben die Säuglingssterblichkeit dokumentiert.', ex2En: 'Studies have documented infant mortality.', ex2Hi: 'Adhyayanon ne shishu mrityu dar ko darj kiya hai.' },
    { de: 'Schließung', art: 'die', gender: 'f', plural: 'Schließungen', pos: 'noun', level: 'B2', register: 'both', en: 'closure', hi: 'बंद होना', ex: 'Die Schließung der Grenze überraschte alle.', exEn: 'The closure of the border surprised everyone.', exHi: 'Seemaa ke band hone ne sabko chaunkaaya.', ex2: 'Wir haben von der Schließung gehört.', ex2En: 'We\'ve heard about the closure.', ex2Hi: 'Humne band hone ke baare mein suna hai.' },
    { de: 'schlüpfen', pos: 'verb', level: 'B2', register: 'both', en: 'to slip (into)', hi: 'फिसलना', ex: 'Sie schlüpfte durch die Absperrung.', exEn: 'She slipped through the barrier.', exHi: 'Woh barrier se phisal gayi.', ex2: 'Er ist schnell in seine Jacke geschlüpft.', ex2En: 'He\'s quickly slipped into his jacket.', ex2Hi: 'Woh jaldi se apni jacket mein ghusa hai.', conj: { praesens: 'schlüpft', praeteritum: 'schlüpfte', perfekt: 'ist geschlüpft' } },
    { de: 'schnitzen', pos: 'verb', level: 'B2', register: 'both', en: 'to carve, whittle', hi: 'तराशना', ex: 'Er schnitzte eine kleine Figur.', exEn: 'He carved a small figure.', exHi: 'Usne ek chhoti moorti taraashi.', ex2: 'Sie hat ein Stück Holz geschnitzt.', ex2En: 'She\'s carved a piece of wood.', ex2Hi: 'Usne lakdi ka ek tukda taraasha hai.', conj: { praesens: 'schnitzt', praeteritum: 'schnitzte', perfekt: 'hat geschnitzt' } },
    { de: 'Sensation', art: 'die', gender: 'f', plural: 'Sensationen', pos: 'noun', level: 'B2', register: 'both', en: 'sensation', hi: 'सनसनी', ex: '"Die Öffnung ist eine Sensation", sagte der Erzähler.', exEn: '"The opening is a sensation," said the narrator.', exHi: '"Yeh khulna ek sansani hai," katha-vaachak ne kaha.', ex2: 'Die Nachricht wurde zur Sensation.', ex2En: 'The news became a sensation.', ex2Hi: 'Khabar ek sansani ban gayi.' },
    { de: 'staunen', pos: 'verb', level: 'B2', register: 'both', en: 'to be amazed, marvel', hi: 'चकित होना', ex: 'Die Zuschauer staunten über den Film.', exEn: 'The viewers were amazed by the film.', exHi: 'Darshak film se chakit the.', ex2: 'Ich habe über die Geschichte gestaunt.', ex2En: 'I\'ve marveled at the story.', ex2Hi: 'Main kahaani se chakit hui hoon.', conj: { praesens: 'staunt', praeteritum: 'staunte', perfekt: 'hat gestaunt' } },
    { de: 'stellvertretend', pos: 'adjective', level: 'B2', register: 'written', en: 'on behalf of, acting for', hi: 'की ओर से', ex: 'Sie sprach stellvertretend für die Gruppe.', exEn: 'She spoke on behalf of the group.', exHi: 'Usne samuh ki taraf se bola.', ex2: 'Er hat stellvertretend unterschrieben.', ex2En: 'He\'s signed on behalf of someone else.', ex2Hi: 'Usne kisi aur ki taraf se hastaakshar kiye hain.' },
    { de: 'streiken', pos: 'verb', level: 'B2', register: 'both', en: 'to strike, go on strike', hi: 'हड़ताल करना', ex: 'Die Arbeiter streikten für bessere Löhne.', exEn: 'The workers went on strike for better wages.', exHi: 'Mazdooron ne behtar vetan ke liye hadtaal ki.', ex2: 'Sie haben eine Woche lang gestreikt.', ex2En: 'They\'ve been on strike for a week.', ex2Hi: 'Unhone ek hafte tak hadtaal ki hai.', conj: { praesens: 'streikt', praeteritum: 'streikte', perfekt: 'hat gestreikt' } },
    { de: 'taufen', pos: 'verb', level: 'B2', register: 'both', en: 'to baptise, name', hi: 'नामकरण करना', ex: 'Sie tauften das Schiff auf einen neuen Namen.', exEn: 'They named the ship with a new name.', exHi: 'Unhone jahaaz ka naya naamkaran kiya.', ex2: 'Das Baby ist letzten Sonntag getauft worden.', ex2En: 'The baby was baptised last Sunday.', ex2Hi: 'Bachche ka pichhle Ravivaar ko baptism hua.', conj: { praesens: 'tauft', praeteritum: 'taufte', perfekt: 'hat getauft' } },
    { de: 'Teilung', art: 'die', gender: 'f', plural: 'Teilungen', pos: 'noun', level: 'B2', register: 'both', en: 'division, partition', hi: 'विभाजन', ex: 'Die Teilung dauerte fast dreißig Jahre.', exEn: 'The division lasted almost thirty years.', exHi: 'Vibhaajan lagbhag tees saal chala.', ex2: 'Die Teilung hat viele Familien betroffen.', ex2En: 'The division has affected many families.', ex2Hi: 'Vibhaajan ne kai parivaaron ko prabhaavit kiya hai.' },
    { de: 'Themen-Tour', art: 'die', gender: 'f', plural: 'Themen-Touren', pos: 'noun', level: 'B2', register: 'written', en: 'themed tour', hi: 'विषयगत यात्रा', ex: 'Die Themen-Tour war sehr informativ.', exEn: 'The themed tour was very informative.', exHi: 'Vishayagat yatra bahut soochanaaprad thi.', ex2: 'Wir haben eine Themen-Tour gebucht.', ex2En: 'We\'ve booked a themed tour.', ex2Hi: 'Humne ek vishayagat yatra book ki hai.' },
    { de: 'treffen', pos: 'verb', level: 'B2', register: 'both', en: 'to meet, hit, make (a decision)', hi: 'मिलना, निर्णय लेना', ex: 'Die Koalition traf eine schwierige Entscheidung.', exEn: 'The coalition made a difficult decision.', exHi: 'Gathbandhan ne ek mushkil faisla liya.', ex2: 'Wir haben uns gestern getroffen.', ex2En: 'We\'ve met yesterday.', ex2Hi: 'Hum kal mile the.', conj: { praesens: 'trifft', praeteritum: 'traf', perfekt: 'hat getroffen' } },
    { de: 'Unfreiheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'unfreedom, lack of freedom', hi: 'स्वतंत्रता का अभाव', ex: 'Die Unfreiheit prägte den Alltag.', exEn: 'The lack of freedom shaped everyday life.', exHi: 'Swatantrata ke abhaav ne roz-marra ki zindagi ko roop diya.', ex2: 'Sie haben lange unter der Unfreiheit gelitten.', ex2En: 'They\'ve suffered under the lack of freedom for a long time.', ex2Hi: 'Unhone lambe samay tak is abhaav ke kaaran dukh utha hai.' },
    { de: 'Unterteilung', art: 'die', gender: 'f', plural: 'Unterteilungen', pos: 'noun', level: 'B2', register: 'written', en: 'subdivision', hi: 'उप-विभाजन', ex: 'Die Unterteilung war klar erkennbar.', exEn: 'The subdivision was clearly recognisable.', exHi: 'Up-vibhaajan spasht roop se pehchaana ja sakta tha.', ex2: 'Sie haben eine neue Unterteilung vorgeschlagen.', ex2En: 'They\'ve proposed a new subdivision.', ex2Hi: 'Unhone ek naya up-vibhaajan prastaavit kiya hai.' },
    { de: 'Verabschiedung', art: 'die', gender: 'f', plural: 'Verabschiedungen', pos: 'noun', level: 'B2', register: 'written', en: 'farewell, passing (of a law)', hi: 'विदाई, पारित होना', ex: 'Die Verabschiedung des Gesetzes dauerte Monate.', exEn: 'The passing of the law took months.', exHi: 'Kaanoon paarit hone mein mahine lage.', ex2: 'Wir haben eine emotionale Verabschiedung erlebt.', ex2En: 'We\'ve experienced an emotional farewell.', ex2Hi: 'Humne ek bhaavuk vidaayi ka anubhav kiya hai.' },
    { de: 'vergangen', pos: 'adjective', level: 'B2', register: 'both', en: 'past, last', hi: 'बीता हुआ', ex: 'Im vergangenen Jahr änderte sich vieles.', exEn: 'Much changed in the past year.', exHi: 'Pichhle saal bahut kuch badla.', ex2: 'Die vergangene Woche war anstrengend.', ex2En: 'The past week has been exhausting.', ex2Hi: 'Pichhla hafta thakaane waala tha.' },
    { de: 'vergießen', pos: 'verb', level: 'B2', register: 'written', en: 'to shed (tears)', hi: 'बहाना', ex: 'Er vergoss Tränen bei der Abschiedsszene.', exEn: 'He shed tears at the farewell scene.', exHi: 'Usne vidaayi drishya mein aansu bahaaye.', ex2: 'Sie hat keine Träne vergossen.', ex2En: 'She hasn\'t shed a single tear.', ex2Hi: 'Usne ek bhi aansu nahi bahaaya.', conj: { praesens: 'vergießt', praeteritum: 'vergoss', perfekt: 'hat vergossen' } },
    { de: 'Versorgung', art: 'die', gender: 'f', plural: 'Versorgungen', pos: 'noun', level: 'B2', register: 'both', en: 'supply, provision', hi: 'आपूर्ति', ex: 'Die Versorgung mit Lebensmitteln war gesichert.', exEn: 'The supply of food was secured.', exHi: 'Khaadya aapoorti surakshit thi.', ex2: 'Sie haben die Versorgung verbessert.', ex2En: 'They\'ve improved the supply.', ex2Hi: 'Unhone aapoorti behtar ki hai.' },
    { de: 'Verständlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'comprehensibility', hi: 'समझ में आने की क्षमता', ex: 'Die Verständlichkeit des Textes war hoch.', exEn: 'The comprehensibility of the text was high.', exHi: 'Text ki samajh mein aane ki kshamata zyaada thi.', ex2: 'Wir haben die Verständlichkeit verbessert.', ex2En: 'We\'ve improved the comprehensibility.', ex2Hi: 'Humne samajh mein aane ki kshamata sudhaari hai.' },
    { de: 'verwalten', pos: 'verb', level: 'B2', register: 'both', en: 'to administer, manage', hi: 'प्रशासन करना', ex: 'Die Behörde verwaltete die Region.', exEn: 'The authority administered the region.', exHi: 'Adhikaari ne kshetra ka prashaasan kiya.', ex2: 'Sie hat das Projekt gut verwaltet.', ex2En: 'She\'s managed the project well.', ex2Hi: 'Usne project ko achhi tarah se sambhaala hai.', conj: { praesens: 'verwaltet', praeteritum: 'verwaltete', perfekt: 'hat verwaltet' } },
    { de: 'Verwandtschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'relatives, kinship', hi: 'रिश्तेदार', ex: 'Meine Verwandtschaft musste jahrelang getrennt leben.', exEn: 'My relatives had to live separated for years.', exHi: 'Mere rishtedaaron ko saalon tak alag rehna pada.', ex2: 'Ich habe meine ganze Verwandtschaft eingeladen.', ex2En: 'I\'ve invited all my relatives.', ex2Hi: 'Maine apne saare rishtedaaron ko bulaaya hai.' },
    { de: 'wach halten', pos: 'verb', level: 'B2', register: 'both', en: 'to keep awake, keep alive', hi: 'ज़िंदा रखना', ex: 'Solche Momente hielten die Erinnerung wach.', exEn: 'Such moments kept the memory alive.', exHi: 'Aise pal yaad ko zinda rakhte the.', ex2: 'Wir haben die Tradition wach gehalten.', ex2En: 'We\'ve kept the tradition alive.', ex2Hi: 'Humne parampara ko zinda rakha hai.', conj: { praesens: 'hält wach', praeteritum: 'hielt wach', perfekt: 'hat wach gehalten' } },
    { de: 'Wiedervereinigung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'reunification', hi: 'पुनर्मिलन', ex: 'Ich schaue gerade eine Dokumentation über die Wiedervereinigung.', exEn: 'I\'m watching a documentary about reunification right now.', exHi: 'Main abhi punarmilan ke baare mein ek vritt-chitra dekh rahi hoon.', ex2: 'Vor der Wiedervereinigung errichtete man eine Mauer.', ex2En: 'Before reunification, they built a wall.', ex2Hi: 'Punarmilan se pehle, logon ne ek deewaar banaayi.' },
    { de: 'zulassen', pos: 'verb', level: 'B2', register: 'both', en: 'to allow, permit', hi: 'अनुमति देना', ex: 'Die Regierung ließ die Demonstration zu.', exEn: 'The government allowed the demonstration.', exHi: 'Sarkaar ne pradarshan ki anumati di.', ex2: 'Sie haben mehr Ausnahmen zugelassen.', ex2En: 'They\'ve allowed more exceptions.', ex2Hi: 'Unhone zyaada apavaad ki anumati di hai.', conj: { praesens: 'lässt zu', praeteritum: 'ließ zu', perfekt: 'hat zugelassen' } },
    { de: 'zumauern', pos: 'verb', level: 'B2', register: 'written', en: 'to wall up, brick up', hi: 'दीवार से बंद करना', ex: 'Man mauerte den Eingang zu.', exEn: 'They walled up the entrance.', exHi: 'Logon ne pravesh dwaar ko deewaar se band kar diya.', ex2: 'Das Fenster ist zugemauert worden.', ex2En: 'The window has been bricked up.', ex2Hi: 'Khidki ko deewaar se band kar diya gaya hai.', conj: { praesens: 'mauert zu', praeteritum: 'mauerte zu', perfekt: 'hat zugemauert' } },
    { de: 'Abschiedsszene', art: 'die', gender: 'f', plural: 'Abschiedsszenen', pos: 'noun', level: 'B2', register: 'both', en: 'farewell scene', hi: 'विदाई दृश्य', ex: 'In der Dokumentation erzählte ein Bauarbeiter von der Abschiedsszene.', exEn: 'In the documentary, a construction worker told about the farewell scene.', exHi: 'Vritt-chitra mein, ek nirmaan mazdoor ne vidaayi drishya ke baare mein bataaya.', ex2: 'Die Abschiedsszene hat viele bewegt.', ex2En: 'The farewell scene has moved many.', ex2Hi: 'Vidaayi drishya ne kai logon ko bhaavuk kiya hai.' },
    { de: 'Amt', art: 'das', gender: 'n', plural: 'Ämter', pos: 'noun', level: 'B2', register: 'written', en: 'office, authority', hi: 'कार्यालय', ex: 'Sie bekleidete ein wichtiges Amt.', exEn: 'She held an important office.', exHi: 'Usne ek mahatvapurn pad sambhaala.', ex2: 'Er hat sein Amt niedergelegt.', ex2En: 'He\'s stepped down from his office.', ex2Hi: 'Usne apna pad chhod diya hai.' },
    { de: 'Amtsinhaber/in', art: 'der/die', gender: 'm/f', plural: 'Amtsinhaber/innen', pos: 'noun', level: 'B2', register: 'written', en: 'incumbent, office holder', hi: 'पदाधिकारी', ex: 'Der Amtsinhaber gewann die Wahl.', exEn: 'The incumbent won the election.', exHi: 'Padadhikaari ne chunaav jeeta.', ex2: 'Die Amtsinhaberin hat viel verändert.', ex2En: 'The incumbent has changed a lot.', ex2Hi: 'Padadhikaari ne bahut kuch badla hai.' },
    { de: 'Antike', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'antiquity', hi: 'प्राचीनता', ex: 'Die Antike faszinierte viele Gelehrte.', exEn: 'Antiquity fascinated many scholars.', exHi: 'Praacheenta ne kai vidwaanon ko aakarshit kiya.', ex2: 'Sie haben viel über die Antike gelesen.', ex2En: 'They\'ve read a lot about antiquity.', ex2Hi: 'Unhone praacheenta ke baare mein bahut padha hai.' },
    { de: 'arbeitsfrei', pos: 'adjective', level: 'B2', register: 'both', en: 'work-free, day off', hi: 'छुट्टी वाला', ex: 'Der Montag war arbeitsfrei.', exEn: 'Monday was a day off.', exHi: 'Somvaar chhutti tha.', ex2: 'Wir haben einen arbeitsfreien Tag genossen.', ex2En: 'We\'ve enjoyed a day off.', ex2Hi: 'Humne ek chhutti ke din ka aanand liya hai.' },
    { de: 'Ausbau', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'expansion, extension', hi: 'विस्तार', ex: 'Der Ausbau des Netzes dauerte lange.', exEn: 'The expansion of the network took a long time.', exHi: 'Network ke vistaar mein lamba samay laga.', ex2: 'Sie haben den Ausbau finanziert.', ex2En: 'They\'ve financed the expansion.', ex2Hi: 'Unhone vistaar ke liye vitt poshan kiya hai.' },
    { de: 'auseinanderreißen', pos: 'verb', level: 'B2', register: 'written', en: 'to tear apart', hi: 'अलग कर देना', ex: 'Der Krieg riss viele Familien auseinander.', exEn: 'The war tore many families apart.', exHi: 'Yudh ne kai parivaaron ko alag kar diya.', ex2: 'Die Entscheidung hat die Gruppe auseinandergerissen.', ex2En: 'The decision has torn the group apart.', ex2Hi: 'Faisle ne samuh ko alag kar diya hai.', conj: { praesens: 'reißt auseinander', praeteritum: 'riss auseinander', perfekt: 'hat auseinandergerissen' } },
    { de: 'Ausgangspunkt', art: 'der', gender: 'm', plural: 'Ausgangspunkte', pos: 'noun', level: 'B2', register: 'written', en: 'starting point', hi: 'शुरुआती बिंदु', ex: 'Das war der Ausgangspunkt der Bewegung.', exEn: 'That was the starting point of the movement.', exHi: 'Yeh andolan ka shuruaati bindu tha.', ex2: 'Wir haben einen neuen Ausgangspunkt gefunden.', ex2En: 'We\'ve found a new starting point.', ex2Hi: 'Humein ek naya shuruaati bindu mila hai.' },
    { de: 'ausgerechnet', pos: 'adverb', level: 'B2', register: 'both', en: 'of all things', hi: 'खासतौर पर', ex: 'Ausgerechnet heute regnete es.', exEn: 'Of all days, it rained today.', exHi: 'Aaj hi baarish hui, aur kisi din nahi.', ex2: 'Ausgerechnet er hat die Prüfung bestanden.', ex2En: 'Of all people, he passed the exam.', ex2Hi: 'Sabse zyaada usi ne pareeksha paas ki.' },
    { de: 'Ausreise', art: 'die', gender: 'f', plural: 'Ausreisen', pos: 'noun', level: 'B2', register: 'written', en: 'departure, emigration', hi: 'प्रस्थान', ex: 'Die Ausreise wurde genehmigt.', exEn: 'The departure was approved.', exHi: 'Prasthaan ko manzoori mili.', ex2: 'Sie haben ihre Ausreise geplant.', ex2En: 'They\'ve planned their emigration.', ex2Hi: 'Unhone apna prasthaan yojnaabaddh kiya hai.' },
    { de: 'Bauarbeiter/in', art: 'der/die', gender: 'm/f', plural: 'Bauarbeiter/innen', pos: 'noun', level: 'B2', register: 'both', en: 'construction worker', hi: 'निर्माण मजदूर', ex: 'In der Dokumentation erzählte ein Bauarbeiter von der Abschiedsszene.', exEn: 'In the documentary, a construction worker told about the farewell scene.', exHi: 'Vritt-chitra mein, ek nirmaan mazdoor ne vidaayi drishya ke baare mein bataaya.', ex2: 'Die Bauarbeiterin arbeitete den ganzen Tag.', ex2En: 'The construction worker worked all day.', ex2Hi: 'Nirmaan mazdoor ne poora din kaam kiya.' },
    { de: 'benachrichtigen', pos: 'verb', level: 'B2', register: 'both', en: 'to notify, inform', hi: 'सूचित करना', ex: 'Man benachrichtigte die Familien sofort.', exEn: 'The families were notified immediately.', exHi: 'Parivaaron ko turant soochit kiya gaya.', ex2: 'Sie hat ihre Kollegen benachrichtigt.', ex2En: 'She\'s notified her colleagues.', ex2Hi: 'Usne apne saathiyon ko soochit kiya hai.', conj: { praesens: 'benachrichtigt', praeteritum: 'benachrichtigte', perfekt: 'hat benachrichtigt' } },
    { de: 'Besatzungszone', art: 'die', gender: 'f', plural: 'Besatzungszonen', pos: 'noun', level: 'B2', register: 'written', en: 'occupation zone', hi: 'कब्ज़ा क्षेत्र', ex: 'Die Besatzungszone wurde streng verwaltet.', exEn: 'The occupation zone was strictly administered.', exHi: 'Kabza kshetra ka sakhti se prashaasan kiya gaya.', ex2: 'Historiker haben die Besatzungszone dokumentiert.', ex2En: 'Historians have documented the occupation zone.', ex2Hi: 'Itihaaskaaron ne kabza kshetra ko darj kiya hai.' },
    { de: 'Buchdruck', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'letterpress printing', hi: 'मुद्रण', ex: 'Der Buchdruck veränderte die Welt.', exEn: 'Letterpress printing changed the world.', exHi: 'Mudran ne duniya ko badal diya.', ex2: 'Sie haben viel über den Buchdruck gelernt.', ex2En: 'They\'ve learned a lot about letterpress printing.', ex2Hi: 'Unhone mudran ke baare mein bahut seekha hai.' },
    { de: 'Buchseite', art: 'die', gender: 'f', plural: 'Buchseiten', pos: 'noun', level: 'B2', register: 'both', en: 'book page', hi: 'किताब का पृष्ठ', ex: 'Er blätterte die Buchseite um.', exEn: 'He turned the book page.', exHi: 'Usne kitaab ka pana palta.', ex2: 'Ich habe jede Buchseite gelesen.', ex2En: 'I\'ve read every book page.', ex2Hi: 'Maine kitaab ka har pana padha hai.' },
    { de: 'Bundestag', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'Bundestag (German parliament)', hi: 'जर्मन संसद', ex: 'Der Bundestag verabschiedete das Gesetz.', exEn: 'The Bundestag passed the law.', exHi: 'Bundestag ne kaanoon paarit kiya.', ex2: 'Sie hat im Bundestag gesprochen.', ex2En: 'She\'s spoken in the Bundestag.', ex2Hi: 'Usne Bundestag mein bhaashan diya hai.' },
    { de: 'Bundestagswahl', art: 'die', gender: 'f', plural: 'Bundestagswahlen', pos: 'noun', level: 'B2', register: 'written', en: 'federal election', hi: 'संघीय चुनाव', ex: 'Die Bundestagswahl fand im Herbst statt.', exEn: 'The federal election took place in autumn.', exHi: 'Sangheey chunaav sharad ritu mein hua.', ex2: 'Wir haben zum ersten Mal an der Bundestagswahl teilgenommen.', ex2En: 'We\'ve taken part in the federal election for the first time.', ex2Hi: 'Humne pehli baar sangheey chunaav mein bhaag liya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Tempuswechsel?',
      body: [ 'A text may begin in one tense and naturally change to another. This is NOT a grammar mistake — it improves style.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Gestern bin ich nach Berlin gefahren. Dort war das Wetter wunderbar. Ich habe viele Fotos gemacht.</span>']
        ]
      },
      hinglish: 'Ek text ek tense mein shuru ho sakta hai aur naturally doosre mein badal sakta hai. Yeh grammar mistake NAHI hai — yeh style behtar banaata hai.'
    },
    {
      title: 'Gesprochene Erzählung (Spoken Narration)',
      body: [ 'In spoken German, Perfekt dominates. But sein, haben, and modal verbs often stay in Präteritum.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich habe viel gearbeitet. Danach war ich müde. Ich musste früh schlafen.</span>']
        ]
      },
      hinglish: 'Spoken German mein Perfekt haavi rehta hai. Lekin sein, haben, aur modal verbs aksar Präteritum mein rehte hain.'
    },
    {
      title: 'Geschriebene Erzählung (Written Narration)',
      body: [ 'Written texts often begin in Präteritum. Direct speech returns to spoken German — even inside a Präteritum narration.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Anna kam nach Hause. Sie sagte: "Ich habe heute viel gelernt."</span>']
        ]
      },
      hinglish: 'Written texts aksar Präteritum mein shuru hote hain. Direct speech spoken German mein wapas aata hai — Präteritum narration ke andar bhi.'
    },
    {
      title: 'Präsens + Vergangenheit',
      body: [ 'German often combines Präsens with a past tense.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Heute arbeite ich im Büro. Gestern habe ich zu Hause gearbeitet.</span>'],
          ['<span class="de">Ich lerne jetzt Deutsch. Letztes Jahr war ich Anfänger.</span>']
        ]
      },
      hinglish: 'German aksar Präsens ko ek past tense ke saath jodta hai.'
    },
    {
      title: 'Zeitstrahl-Logik (Timeline Thinking)',
      body: [ 'Understand WHY the tense changes by thinking of a timeline.' ],
      table: {
        head: ['Timeline', 'Preferred Tense'],
        rows: [
          ['Now', 'Präsens'],
          ['Yesterday (spoken)', 'Perfekt'],
          ['Background information', 'Präteritum']
        ]
      },
      hinglish: 'Tense kyun badalta hai, yeh samajhne ka sabse aasaan tarika hai timeline ki tarah sochna \u2014 abhi ki baat, kal ki baat, ya background \u2014 har ek apna tense leta hai.'
    },
    {
      title: 'Typische Textarten (Typical Text Types)',
      body: [ 'Different text types have typical, but not fixed, tense patterns.' ],
      table: {
        head: ['Text Type', 'Typical Tenses'],
        rows: [
          ['Conversation', 'Präsens + Perfekt'],
          ['Diary', 'Mostly Perfekt'],
          ['Newspaper', 'Mostly Präteritum'],
          ['Mixed Story', 'Natural tense changes']
        ]
      },
      hinglish: 'Alag-alag text types ke typical, lekin fixed nahi, tense patterns hote hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Each of these switches tense in a way the timeline does not support, or keeps a verb in a tense that sounds wrong for its register. Note that changing tense between sentences is not itself an error \u2014 it only becomes one when the context has not changed.' ],
      mistakes: [
        { wrong: 'Anna kam nach Hause. Sie sagte: "Ich lernte heute viel."', right: 'Anna kam nach Hause. Sie sagte: "Ich habe heute viel gelernt."', why: 'Inside direct speech the register switches back to spoken German, so Perfekt is used \u2014 even when the narration around it is in Pr\u00e4teritum.' },
        { wrong: 'Gestern bin ich nach Berlin gefahren. Dort ist das Wetter wunderbar gewesen.', right: 'Gestern bin ich nach Berlin gefahren. Dort war das Wetter wunderbar.', why: 'In spoken narration the surrounding verbs take Perfekt, but sein stays in Pr\u00e4teritum \u2014 war, not ist gewesen.' },
        { wrong: 'Ich habe viel gearbeitet. Ich habe früh schlafen gemusst.', right: 'Ich habe viel gearbeitet. Ich musste früh schlafen.', why: 'Modal verbs stay in Pr\u00e4teritum in spoken narration \u2014 and with a dependent infinitive the Perfekt would need the Ersatzinfinitiv anyway, never gemusst.' },
        { wrong: 'Heute arbeite ich im Büro. Gestern arbeite ich zu Hause.', right: 'Heute arbeite ich im Büro. Gestern habe ich zu Hause gearbeitet.', why: 'The time word decides the tense: gestern needs a past form, so the tense has to follow the timeline.' },
        { wrong: 'Letztes Jahr bin ich Anfänger gewesen. Jetzt lernte ich Deutsch.', right: 'Letztes Jahr war ich Anfänger. Jetzt lerne ich Deutsch.', why: 'jetzt refers to the present, so it needs Pr\u00e4sens \u2014 and sein again prefers war over bin gewesen.' }
      ],
      hinglish: 'In sab mein tense us tarah badla gaya hai jo timeline se match nahi karta, ya koi verb apne register ke hisaab se galat tense mein hai. Yaad rakho \u2014 sentences ke beech tense badalna khud mein galti nahi hai, galti tab hoti hai jab context badla hi na ho.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Natural, context-driven tense-switching is a hallmark of native-like Goethe B2 writing.' ],
      note: 'Memory trick: Good German does NOT stay in one tense. Change tense ONLY when the context changes.',
      hinglish: 'Natural, context-driven tense-switching Goethe B2 writing mein native jaisa hone ki nishaani hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsartikel: Als die Mauer fiel',
    titleEn: 'Newspaper article: when the Wall fell',
    tokens: [
      { w: 'Am', role: 'plain', en: 'on the', hi: 'को', type: 'Contraction · an dem' },
      { w: 'Abend', role: 'plain', en: 'evening', hi: 'शाम', type: 'Noun · masc.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: '9.', role: 'plain', en: '9th', hi: '9वीं', type: 'Number · Ordinal' },
      { w: 'November', role: 'plain', en: 'November (Satzende)', hi: 'नवंबर (Satzende)', type: 'Noun · masc.' },
      { w: 'hielt', role: 'r-verb', en: 'held (Präteritum, Erzählung)', hi: 'की (Präteritum)', type: 'Verb · halten (Präteritum)', why: 'The narrative backbone of a historical article stays in Präteritum (this chapter).' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Politbüromitglied', role: 'plain', en: 'Politburo member', hi: 'पोलित ब्यूरो सदस्य', type: 'Noun · neut.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Pressekonferenz', role: 'plain', en: 'press conference (Satzende)', hi: 'प्रेस कॉन्फ़्रेंस (Satzende)', type: 'Noun · fem.', why: 'die Pressekonferenz (this chapter).' },
      { w: '.', plain: true },
      { w: 'Er', role: 'plain', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'verkündete', role: 'plain', en: 'announced (Präteritum)', hi: 'घोषणा की (Präteritum)', type: 'Verb · verkünden (Präteritum)' },
      { w: 'versehentlich', role: 'plain', en: 'accidentally', hi: 'ग़लती से', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective' },
      { w: 'Regelung', role: 'plain', en: 'regulation (Satzende)', hi: 'नियमन (Satzende)', type: 'Noun · fem.', why: 'die Regelung (this chapter).' },
      { w: 'gelte', role: 'plain', en: 'was valid (Konjunktiv I, indirekte Rede)', hi: 'लागू है (Konjunktiv I)', type: 'Verb · gelten (Konjunktiv I)' },
      { w: '„sofort', role: 'plain', en: '"immediately', hi: '"तुरंत', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'unverzüglich', role: 'plain', en: 'without delay (Satzende)', hi: 'बिना देरी के (Satzende)', type: 'Adjective' },
      { w: '“', plain: true },
      { w: '.', plain: true },
      { w: 'Binnen', role: 'plain', en: 'within', hi: 'भीतर', type: 'Preposition · Genitiv' },
      { w: 'Minuten', role: 'plain', en: 'minutes', hi: 'मिनटों', type: 'Noun · plural' },
      { w: 'strömten', role: 'plain', en: 'streamed (Präteritum)', hi: 'उमड़ पड़े (Präteritum)', type: 'Verb · strömen (Präteritum)' },
      { w: 'Tausende', role: 'plain', en: 'thousands', hi: 'हज़ारों' , type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'की ओर', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Grenzübergängen', role: 'plain', en: 'border crossings (Satzende)', hi: 'सीमा चौकियों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Historiker', role: 'plain', en: 'historians', hi: 'इतिहासकार', type: 'Noun · plural' },
      { w: 'nennen', role: 'r-verb', en: 'call (Präsens, allgemeine Aussage)', hi: 'कहते हैं (Präsens)', type: 'Verb · nennen (Präsens)', why: 'Präsens is used for a timeless, general statement — the historian\'s judgement holds true regardless of tense (this chapter).' },
      { w: 'diesen', role: 'plain', en: 'this (masc. acc.)', hi: 'इस', type: 'Determiner · Akk.' },
      { w: 'Moment', role: 'plain', en: 'moment', hi: 'क्षण', type: 'Noun · masc.' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'heute', role: 'plain', en: 'today (Satzende)', hi: 'आज (Satzende)', type: 'Adverb' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Wendepunkt', role: 'plain', en: 'turning point (Satzende)', hi: 'मोड़ (Satzende)', type: 'Noun · masc.' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'europäischen', role: 'plain', en: 'European', hi: 'यूरोपीय', type: 'Adjective' },
      { w: 'Geschichte', role: 'plain', en: 'history (Satzende)', hi: 'इतिहास (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Rückblickend', role: 'plain', en: 'in retrospect', hi: 'पीछे मुड़कर देखने पर', type: 'Adverb' },
      { w: 'wirkt', role: 'r-verb', en: 'seems (Präsens, commentary)', hi: 'लगती है (Präsens)', type: 'Verb · wirken (Präsens)', why: 'Präsens: the text shifts to the present tense for present-day commentary (this chapter).' },
      { w: 'jene', role: 'plain', en: 'that', hi: 'वह', type: 'Determiner' },
      { w: 'Pressekonferenz', role: 'plain', en: 'press conference', hi: 'प्रेस कॉन्फ्रेंस', type: 'Noun · fem.' },
      { w: 'wie', role: 'plain', en: 'like', hi: 'जैसे', type: 'Preposition' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Zufall', role: 'plain', en: 'coincidence', hi: 'संयोग', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'that', hi: 'जिसने', type: 'Relativpronomen · Nom.' },
      { w: 'Geschichte', role: 'plain', en: 'history', hi: 'इतिहास', type: 'Noun · fem.' },
      { w: 'schrieb', role: 'r-verb', en: 'wrote (Präteritum, Satzende)', hi: 'लिखा (Präteritum)', type: 'Verb · schreiben (Präteritum, Nebensatz, Satzende)', why: 'Präteritum: back to the narrated past inside the relative clause (this chapter).' },
      { w: '.', plain: true },
      { w: 'Für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Zeitzeugen', role: 'plain', en: 'contemporary witnesses (Satzende)', hi: 'प्रत्यक्षदर्शी (Satzende)', type: 'Noun · plural' },
      { w: 'bleibt', role: 'r-verb', en: 'remains (Präsens, allgemeine Aussage)', hi: 'बनी रहती है (Präsens)', type: 'Verb · bleiben (Präsens)', why: 'Präsens again for a statement that still holds true today (this chapter).' },
      { w: 'jene', role: 'plain', en: 'that', hi: 'वह', type: 'Determiner' },
      { w: 'Nacht', role: 'plain', en: 'night', hi: 'रात', type: 'Noun · fem.' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'emotionalste', role: 'plain', en: 'most emotional (Satzende)', hi: 'सबसे भावुक (Satzende)', type: 'Adjective · Superlativ' },
      { w: 'Erinnerung', role: 'plain', en: 'memory (Satzende)', hi: 'याद (Satzende)', type: 'Noun · fem.' },
      { w: 'ihres', role: 'plain', en: 'of their', hi: 'उनके', type: 'Possessivartikel · Genitiv' },
      { w: 'Lebens', role: 'plain', en: 'life (Satzende)', hi: 'जीवन का (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true }
    ],
    translation: 'On the evening of 9 November, a Politburo member held a press conference. He accidentally announced that the new regulation was valid "immediately, without delay." Within minutes, thousands streamed to the border crossings. Historians call this moment a turning point in European history to this day. In retrospect, that press conference seems like a coincidence that wrote history. For many contemporary witnesses, that night remains the most emotional memory of their lives to this day.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_028_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Doris, verstehst du eigentlich, wie plötzlich die Wende damals kam?', en: 'Doris, do you actually understand how suddenly reunification came back then?' },
      { id: 'B2_028_L002', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, 1961 wurde Deutschland geteilt, und 1989 fiel die Mauer — fast niemand hatte das erwartet.', en: 'Yes, Germany was divided in 1961, and in 1989 the wall fell — almost nobody had expected that.' },
      { id: 'B2_028_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und heute, dreißig Jahre später, ist vieles noch spürbar.', en: 'And today, thirty years later, a lot is still noticeable.' },
      { id: 'B2_028_L004', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, meine Oma erinnert sich noch an jeden Moment davon.', en: 'Exactly, my grandma still remembers every moment of it.' }
    ],
    transcript: 'Doris, verstehst du eigentlich, wie plötzlich die Wende damals kam? Ja, 1961 wurde Deutschland geteilt, und 1989 fiel die Mauer — fast niemand hatte das erwartet. Und heute, dreißig Jahre später, ist vieles noch spürbar. Genau, meine Oma erinnert sich noch an jeden Moment davon.',
    translation: 'Doris, do you actually understand how suddenly reunification came back then? Yes, Germany was divided in 1961, and in 1989 the wall fell — almost nobody had expected that. And today, thirty years later, a lot is still noticeable. Exactly, my grandma still remembers every moment of it.',
    tokens: [
      { w: 'Doris' },
      { w: ',', plain: true },
      { w: 'verstehst' },
      { w: 'du' },
      { w: 'eigentlich' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'plötzlich' },
      { w: 'die' },
      { w: 'Wende' },
      { w: 'damals' },
      { w: 'kam' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: '1961', plain: true },
      { w: 'wurde' },
      { w: 'Deutschland' },
      { w: 'geteilt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: '1989', plain: true },
      { w: 'fiel' },
      { w: 'die' },
      { w: 'Mauer' },
      { w: '—', plain: true },
      { w: 'fast' },
      { w: 'niemand' },
      { w: 'hatte' },
      { w: 'das' },
      { w: 'erwartet' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'heute' },
      { w: ',', plain: true },
      { w: 'dreißig' },
      { w: 'Jahre' },
      { w: 'später' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'vieles' },
      { w: 'noch' },
      { w: 'spürbar' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'meine' },
      { w: 'Oma' },
      { w: 'erinnert' },
      { w: 'sich' },
      { w: 'noch' },
      { w: 'an' },
      { w: 'jeden' },
      { w: 'Moment' },
      { w: 'davon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wann wurde Deutschland geteilt?', qEn: 'When was Germany divided?', options: ['1945', '1961', '1989', '2001'], optionsEn: ['1945', '1961', '1989', '2001'], answer: 1,
        explain: '"1961 wurde Deutschland geteilt."' },
      { q: 'Was ist heute noch spürbar?', qEn: 'What is still noticeable today?', options: ['nichts', 'vieles', 'die Mauer selbst', 'nur die Sprache'], optionsEn: ['nothing', 'a lot', 'the Wall itself', 'only the language'], answer: 1,
        explain: '"… ist vieles noch spürbar."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, wie plötzlich die Wende kam.", taskEn: "A friend asks how suddenly the change came.", de: "1961 wurde Deutschland geteilt, und 1989 fiel die Mauer.", en: "In 1961 Germany was divided, and in 1989 the Wall fell." },
    { task: "Er fragt, was das heute bedeutet.", taskEn: "He asks what that means today.", de: "Damals war die Teilung normal. Heute ist die Öffnung selbstverständlich.", en: "Back then division was normal. Today the opening is taken for granted." },
    { task: "Eine Kollegin fragt nach einem Zeitzeugen aus der Ausstellung.", taskEn: "A colleague asks about a witness from the exhibition.", de: "Er sagt: Ich habe die ganze Nacht auf der Mauer gestanden.", en: "He says: I stood on the Wall the whole night." },
    { task: "Ein Bekannter fragt nach der Pressekonferenz von 1989.", taskEn: "An acquaintance asks about the 1989 press conference.", de: "Die Regelung wurde verkündet, und plötzlich strömen die Menschen zur Grenze.", en: "The regulation was announced, and suddenly people are streaming to the border." },
    { task: "Rollenspiel: Ihr stellt die Themen-Tour vor.", taskEn: "Role-play: you present the themed tour.", de: "Die Tour beginnt am Museum. 1989 protestierten hier Tausende, und heute stehen Fotos an der Wand.", en: "The tour starts at the museum. In 1989 thousands protested here, and today photos hang on the wall." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Blog article (8-10 sentences): Write about a visit to a historical site, naturally switching between Präsens (now), Perfekt (yesterday), and Präteritum (background history).\n\nTASK 2 — Experience report (6-8 sentences): Include at least one piece of direct speech (a quote) that naturally returns to Perfekt or Präsens, even if your narration is in Präteritum.',
    starters: ['Ich besuche gerade …', 'Vor Jahren …'],
    placeholder: 'Ich besuche gerade ein historisches Museum. Gestern habe ich …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which timeline shift is happening here: "Ich schaue gerade... Gestern habe ich..."?',
      options: ['Now (Präsens) → Yesterday (Perfekt)', 'Background (Präteritum) → Now (Präsens)', 'No shift at all'],
      answer: 0,
      explain: 'The text moves from the present moment to a recent past action spoken about — a natural Präsens → Perfekt shift.'
    },
    gap: {
      sentence: ['Vor der Wiedervereinigung ', ' man eine Mauer.'],
      gaps: [ { answer: 'errichtete', accepts: ['errichtete'] } ],
      explain: 'Background historical narration takes Präteritum — "errichtete" describes the state of things before the main event.'
    },
    match: {
      q: 'Match each context to its natural tense.',
      pairs: [
        { noun: 'Jetzt (now)', art: 'Präsens' },
        { noun: 'Gespräch über gestern', art: 'Perfekt' },
        { noun: 'Historischer Hintergrund', art: 'Präteritum' },
        { noun: 'Direkte Rede', art: 'Perfekt / Präsens (auch bei Präteritum-Erzählung)' }
      ]
    },
    builder: {
      target: 'Build: "He said: \'I have cried.\'" (direct speech returns to Perfekt)',
      bank: ['Er', 'sagte', ':', '"Ich', 'habe', 'geweint', '."'],
      answer: ['Er', 'sagte', ':', '"Ich', 'habe', 'geweint', '."'],
      roles: { 'habe': 'r-tempuswechsel', 'geweint': 'r-tempuswechsel' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der ganze Zeitungsbericht war nur im Perfekt geschrieben.',
      right: 'Der Zeitungsbericht sollte hauptsächlich im Präteritum geschrieben sein.',
      explain: 'Written journalism defaults to Präteritum as its base narration tense — Perfekt throughout sounds like a spoken transcript, not a report.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Is switching tense within a single text a grammar mistake?', options: ['No — it\'s natural and improves style', 'Yes, always', 'Only in spoken German'], answer: 0,
      explain: 'Good German naturally shifts tense according to context — this is a feature of authentic style, not an error.' },
    { q: 'What happens to direct speech inside Präteritum narration?', options: ['It naturally returns to spoken Perfekt/Präsens', 'It must also stay in Präteritum', 'It switches to Futur'], answer: 0,
      explain: 'Direct speech (quoted dialogue) naturally reverts to the spoken register, even inside written Präteritum narration.' },
    { q: 'When should you change tense inside a text?', options: ['Only when the context changes (timeline shift)', 'Randomly, for variety', 'Never — stay in one tense throughout'], answer: 0,
      explain: 'A tense change should always follow a genuine context/timeline shift — now, yesterday, background, or direct speech.' },
    { q: 'Which text type is typically mostly Präteritum?', options: ['Newspaper report', 'Casual conversation', 'Diary entry'], answer: 0,
      explain: 'Newspaper reports default to Präteritum as their base narration tense.' },
    { q: 'Which sentence shows a natural, well-motivated tense shift?', options: ['Ich schaue gerade einen Film. Gestern habe ich denselben Film gesehen.', 'Ich schaue gerade einen Film. Gestern schaue ich denselben Film.', 'Ich habe gerade einen Film gesehen. Gestern schaue ich denselben Film.'], answer: 0,
      explain: 'The first option correctly moves from Präsens (now) to Perfekt (yesterday, spoken narration) — a natural, motivated shift.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-tempuswechsel', html: 'Good German does not stay in one tense — it moves naturally between Präsens (now), Perfekt (spoken narration of the recent past), and Präteritum (written background).' },
    { c: 'r-tempuswechsel', html: 'Direct speech always returns to the natural spoken register (Perfekt/Präsens), even inside Präteritum-heavy narration.' },
    { c: 'r-tempuswechsel', html: 'Change tense ONLY when the context genuinely changes — never randomly, and never by staying locked in a single tense throughout an entire text.' }
  ],
  revisionTips: [
    'Read a travel blog or interview and mark every tense shift — ask yourself what context change triggered it.',
    'Practise writing one paragraph that deliberately moves through now → yesterday → background → a quote.',
    'Watch for direct speech in texts you read — notice how it snaps back to spoken register no matter what tense surrounds it.'
  ]
};

window.CHAPTER = CHAPTER;
