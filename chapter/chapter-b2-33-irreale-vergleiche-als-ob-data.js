/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 33
   "Irreale Vergleiche" — als ob / als wenn / als + Konjunktiv II
   express appearance, not reality: "Er spricht, als ob er alles
   wüsste" = "He talks as if he knew everything" (we don't know
   if he really does). als ob = most common, formal+spoken;
   als wenn = mostly spoken, less common; als + KII (verb moves
   right after als) = elegant, very common shortened form.
   Does NOT teach Irreale Bedingungssätze, Konjunktiv I, or als dass.
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
   Vocabulary source: uploaded chapter-33 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-33-irreale-vergleiche-als-ob',
  phase: 'B2 · Phase 3',
  number: 33,
  title: 'Irreale Vergleiche: als ob',
  titleEn: 'Unreal comparisons: as if',
  description: 'als ob, als wenn, als + Konjunktiv II — how Germans describe an appearance without claiming it\'s the truth.',
  xp: 480,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 34, title: 'Temporalsätze: während / seitdem', titleEn: 'Time clauses: while / since' , href: 'chapter-b2-34-temporalsaetze-waehrend-seitdem.html' },

  prevChapter: { number: 32, title: 'Konjunktiv II für Vermutungen', titleEn: 'Konjunktiv II for assumptions', href: 'chapter-b2-32-konjunktiv2-vermutungen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'It <em>looks</em> like — but is it?',
    intro: 'Timo notices Frauke acting as if nothing were stressful, while she admits she feels as if she\'d learned nothing at all — every appearance described without anyone claiming to know the truth, using als ob.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear als ob, als wenn, and the elegant shortened als + Konjunktiv II in natural conversation'
    ],
    scene: 'Der gestresste Kollege',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'tust', role: 'r-verb', en: 'act', hi: 'दिखाते हो', pron: 'toost', type: 'Verb · tun' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'ऐसे', pron: 'zo', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'als', role: 'r-conjunction', en: 'as if', hi: 'जैसे', pron: 'als', type: 'Conjunction · als ob / als', why: 'als ob (or als alone with inverted word order) + Konjunktiv II = unreal comparison (this chapter).', ex: 'Du tust so, als ob nichts stressig wäre.', exEn: 'You act as if nothing were stressful.' },
        { w: 'ob', role: 'r-conjunction', en: 'if', hi: 'जैसे कि', pron: 'op', type: 'Conjunction · part 2' },
        { w: 'nichts', role: 'r-subject', en: 'nothing', hi: 'कुछ नहीं', pron: 'NIKHTS', type: 'Pronoun · indefinite' },
        { w: 'stressig', role: 'r-subject', en: 'stressful', hi: 'तनावग्रस्त', pron: 'SHTRE-sikh', type: 'Adjective' },
        { w: 'wäre', role: 'r-verb', en: 'were', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II, Satzende)' },
        { w: '.', plain: true }
      ], en: 'You act as if nothing were stressful.', hi: 'Tum aise dikhaate ho jaise kuch bhi tanaavgrast nahi ho.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'fühle', role: 'r-verb', en: 'feel', hi: 'महसूस करता हूँ', pron: 'FÜ-luh', type: 'Verb · fühlen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: ',', plain: true },
        { w: 'als', role: 'r-conjunction', en: 'as if', hi: 'जैसे', pron: 'als', type: 'Conjunction · als ob / als' },
        { w: 'ob', role: 'r-conjunction', en: 'if', hi: 'जैसे कि', pron: 'op', type: 'Conjunction · part 2' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'wüsste', role: 'r-verb', en: 'knew', hi: 'जानता हूँ', pron: 'VÜS-tuh', type: 'Verb · wissen (Konjunktiv II, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I feel as if I already knew everything.', hi: 'Main aisa mehsoos karta hoon jaise mujhe sab kuch pehle se pata hai.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'nervös', role: 'r-akkusativ', en: 'nervous', hi: 'घबराई हुई', pron: 'ner-VÖS', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'als', role: 'r-conjunction', en: 'as if', hi: 'जैसे', pron: 'als', type: 'Conjunction · als ob / als' },
        { w: 'ob', role: 'r-conjunction', en: 'if', hi: 'जैसे कि', pron: 'op', type: 'Conjunction · part 2' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nichts', role: 'r-akkusativ', en: 'nothing', hi: 'कुछ भी', pron: 'NIKHTS', type: 'Pronoun · indefinite' },
        { w: 'gelernt', role: 'r-verb', en: 'learned', hi: 'सीखा', pron: 'ge-LAIRNT', type: 'Partizip II' },
        { w: 'hätte', role: 'r-verb', en: 'had', hi: 'होगा', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Really? I am so nervous as if I had learned nothing.', hi: 'Sach mein? Main itna ghabraaya hui hoon jaise maine kuch bhi nahi seekha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'hast', type: 'Verb · haben' },
        { w: 'doch', role: 'r-adverb', en: 'indeed', hi: 'ज़रूर', pron: 'dokh', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'geübt', role: 'r-verb', en: 'practised', hi: 'अभ्यास', pron: 'ge-ÜPT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Entspann', role: 'r-verb', en: 'relax', hi: 'आराम करो', pron: 'ent-SHPAN', type: 'Verb · imperative' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'You have indeed practised a lot. Simply relax.', hi: 'Tumne bahut abhyaas kiya hai. Bas aaraam karo.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'versuche', role: 'r-verb', en: 'try', hi: 'कोशिश करती हूँ', pron: 'fer-ZOO-khuh', type: 'Verb · versuchen (ich)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Thanks! I try it.', hi: 'Dhanyavaad! Main koshish karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'The speaker does NOT claim something is true — only that it appears to be. <span class="de r-irreale">als ob</span>, <span class="de r-irreale">als wenn</span>, and the shortened <span class="de r-irreale">als + Konjunktiv II</span> (verb moves right after "als") all say "it looks/sounds/seems AS IF..." without confirming reality.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is IRREALE VERGLEICHE (B2 level): als ob, als wenn, and the shortened als + Konjunktiv II (where the verb moves directly after "als" instead of waiting for "ob"), all expressing an unreal comparison — appearance, not confirmed reality. Example: "Er spricht, als ob er alles wüsste" = "He talks as if he knew everything" (we don\'t know if he really does). als ob is most common (formal + spoken); als wenn is mostly spoken and less common; als + Konjunktiv II is an elegant, very common shortened form. ' +
    'Do NOT expect or require Irreale Bedingungssätze (conditional clauses), Konjunktiv I, or "als dass" — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "als ob" and "als wenn" send the verb to the very end of the clause (Nebensatz word order).\n' +
    '- Check that the shortened "als + Konjunktiv II" form has the verb immediately after "als" (not at the end) — this is a DIFFERENT valid word order, not an error.\n' +
    '- Check that the verb after als ob/als wenn/als is in Konjunktiv II (e.g. wäre, hätte, wüsste, käme), not Präsens or Perfekt indicative.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Appearance vs reality check:</b> one sentence on whether the learner\'s comparisons clearly describe appearance rather than stating something as fact.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you naturally use als ob, als wenn, and the shortened als + Konjunktiv II to describe appearances. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the register comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: als ob/als wenn send the verb to the end; als + Konjunktiv II moves the verb right after "als" instead.'
  },

  parserSentence: [
    { w: 'Er', role: 'plain' }, { w: 'spricht', role: 'plain' }, { w: ',', plain: true },
    { w: 'als', role: 'r-irreale' }, { w: 'ob', role: 'r-irreale' }, { w: 'er', role: 'plain' }, { w: 'alles', role: 'plain' }, { w: 'wüsste', role: 'r-irreale' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: unreal comparisons describe appearance, not confirmed reality.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo describe a stressed colleague and a confident presenter using als ob, als wenn, and the shortened form.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master als ob, als wenn, and the shortened als + Konjunktiv II with their register differences.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an office situation and a university presentation full of unreal comparisons.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify appearance vs reality and the three unreal-comparison structures.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe impressions of people and situations using unreal comparisons.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write descriptions and reports using als ob, als wenn, and als + Konjunktiv II naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill completing, rewriting, and choosing between the three structures.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 480 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'als-ob/als-wenn/als+KII drills, rewriting exercises, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete comparison table, meaning diagram, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna sieht aus, als ob sie krank wäre.', text: 'Describe an appearance without claiming it\'s fact' },
    { de: 'Rohan tut so, als wenn er alles wüsste.', text: 'Use the mostly-spoken als wenn alternative' },
    { de: 'Er sieht aus, als wäre er müde.', text: 'Use the elegant shortened als + Konjunktiv II form' },
    { de: 'als ob (formal+spoken) > als + KII (elegant) > als wenn (spoken)', text: 'Choose the right register for context' },
    { de: 'Reality: unknown. Impression: strong comparison.', text: 'Distinguish appearance from confirmed fact' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-33 list) ----------
  vocab: [
    { de: 'steuern', pos: 'verb', level: 'B2', register: 'both', en: 'to steer, control', hi: 'नियंत्रित करना', ex: 'Er steuerte das Boot sicher an Land.', exEn: 'He steered the boat safely to shore.', exHi: 'Usne naav ko surakshit roop se kinaare tak chalaaya.', ex2: 'Sie haben das Projekt gut gesteuert.', ex2En: 'They\'ve managed the project well.', ex2Hi: 'Unhone project achhe se sanchaalit kiya hai.', conj: { praesens: 'steuert', praeteritum: 'steuerte', perfekt: 'hat gesteuert' } },
    { de: 'stressig', pos: 'adjective', level: 'B2', register: 'both', en: 'stressful', hi: 'तनावपूर्ण', ex: 'Die Woche war stressig.', exEn: 'The week was stressful.', exHi: 'Hafta tanaavpoorn tha.', ex2: 'Sie haben einen stressigen Tag gehabt.', ex2En: 'They\'ve had a stressful day.', ex2Hi: 'Unka din tanaavpoorn raha hai.' },
    { de: 'Übertreibung', art: 'die', gender: 'f', plural: 'Übertreibungen', pos: 'noun', level: 'B2', register: 'both', en: 'exaggeration', hi: 'अतिशयोक्ति', ex: 'Das war keine Übertreibung.', exEn: 'That was no exaggeration.', exHi: 'Yeh koi atishayokti nahi thi.', ex2: 'Sie haben die Übertreibung bemerkt.', ex2En: 'They\'ve noticed the exaggeration.', ex2Hi: 'Unhone atishayokti dekhi hai.' },
    { de: 'Unendlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'infinity', hi: 'अनंतता', ex: 'Der Weltraum symbolisiert Unendlichkeit.', exEn: 'Space symbolises infinity.', exHi: 'Antariksh anantata ka pratik hai.', ex2: 'Sie haben über die Unendlichkeit diskutiert.', ex2En: 'They\'ve discussed infinity.', ex2Hi: 'Unhone anantata par charcha ki hai.' },
    { de: 'Verarbeitung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'processing', hi: 'प्रसंस्करण', ex: 'Die Verarbeitung der Daten dauerte lange.', exEn: 'The processing of the data took a long time.', exHi: 'Data ka prasanskaran mein lamba samay laga.', ex2: 'Sie haben die Verarbeitung beschleunigt.', ex2En: 'They\'ve sped up the processing.', ex2Hi: 'Unhone prasanskaran tez kiya hai.' },
    { de: 'verärgern', pos: 'verb', level: 'B2', register: 'both', en: 'to annoy, anger', hi: 'नाराज़ करना', ex: 'Das verärgerte ihn sehr.', exEn: 'That angered him a lot.', exHi: 'Isse woh bahut naaraaz ho gaya.', ex2: 'Sie hat ihren Kollegen verärgert.', ex2En: 'She\'s annoyed her colleague.', ex2Hi: 'Usne apne sahkarmi ko naaraaz kiya hai.', conj: { praesens: 'verärgert', praeteritum: 'verärgerte', perfekt: 'hat verärgert' } },
    { de: 'vergolden', pos: 'verb', level: 'B2', register: 'written', en: 'to gild', hi: 'सोने का पानी चढ़ाना', ex: 'Sie vergoldeten den Rahmen.', exEn: 'They gilded the frame.', exHi: 'Unhone frame par sone ka paani chadhaaya.', ex2: 'Der Ring ist vergoldet worden.', ex2En: 'The ring has been gilded.', ex2Hi: 'Angoothi par sone ka paani chadhaaya gaya hai.', conj: { praesens: 'vergoldet', praeteritum: 'vergoldete', perfekt: 'hat vergoldet' } },
    { de: 'vertonen', pos: 'verb', level: 'B2', register: 'written', en: 'to set to music', hi: 'संगीतबद्ध करना', ex: 'Der Komponist vertonte das Gedicht.', exEn: 'The composer set the poem to music.', exHi: 'Sangeetkaar ne kavita ko sangeetbaddh kiya.', ex2: 'Sie haben den Film vertont.', ex2En: 'They\'ve scored the film.', ex2Hi: 'Unhone film ka sangeet banaaya hai.', conj: { praesens: 'vertont', praeteritum: 'vertonte', perfekt: 'hat vertont' } },
    { de: 'verwirklichen', pos: 'verb', level: 'B2', register: 'both', en: 'to realise, bring about', hi: 'साकार करना', ex: 'Sie verwirklichte ihren Traum.', exEn: 'She realised her dream.', exHi: 'Usne apna sapna saakaar kiya.', ex2: 'Er hat das Projekt verwirklicht.', ex2En: 'He\'s brought the project about.', ex2Hi: 'Usne project saakaar kiya hai.', conj: { praesens: 'verwirklicht', praeteritum: 'verwirklichte', perfekt: 'hat verwirklicht' } },
    { de: 'verzeihen', pos: 'verb', level: 'B2', register: 'both', en: 'to forgive', hi: 'माफ करना', ex: 'Sie verzieh ihm den Fehler.', exEn: 'She forgave him the mistake.', exHi: 'Usne uski galti maaf ki.', ex2: 'Er hat ihr verziehen.', ex2En: 'He\'s forgiven her.', ex2Hi: 'Usne use maaf kiya hai.', conj: { praesens: 'verzeiht', praeteritum: 'verzieh', perfekt: 'hat verziehen' } },
    { de: 'Verzweiflung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'despair', hi: 'निराशा', ex: 'Ihre Verzweiflung war spürbar.', exEn: 'Her despair was palpable.', exHi: 'Uski niraashaa mahsoos hoti thi.', ex2: 'Sie haben die Verzweiflung überwunden.', ex2En: 'They\'ve overcome the despair.', ex2Hi: 'Unhone niraashaa par kaabu paa liya hai.' },
    { de: 'vorhanden', pos: 'adjective', level: 'B2', register: 'both', en: 'available, present', hi: 'उपलब्ध', ex: 'Genug Wasser war vorhanden.', exEn: 'Enough water was available.', exHi: 'Paryaapt paani upalabdh tha.', ex2: 'Sie haben vorhandene Ressourcen genutzt.', ex2En: 'They\'ve used available resources.', ex2Hi: 'Unhone upalabdh sansaadhanon ka upyog kiya hai.' },
    { de: 'Vorlesung', art: 'die', gender: 'f', plural: 'Vorlesungen', pos: 'noun', level: 'B2', register: 'both', en: 'lecture', hi: 'व्याख्यान', ex: 'Die Vorlesung war sehr interessant.', exEn: 'The lecture was very interesting.', exHi: 'Vyaakhyaan bahut dilchasp tha.', ex2: 'Sie haben die Vorlesung besucht.', ex2En: 'They\'ve attended the lecture.', ex2Hi: 'Unhone vyaakhyaan mein bhaag liya hai.' },
    { de: 'Wahrnehmung', art: 'die', gender: 'f', plural: 'Wahrnehmungen', pos: 'noun', level: 'B2', register: 'written', en: 'perception', hi: 'धारणा', ex: 'Ihre Wahrnehmung war anders als seine.', exEn: 'Her perception was different from his.', exHi: 'Uski dhaarana uski se alag thi.', ex2: 'Sie haben ihre Wahrnehmung geändert.', ex2En: 'They\'ve changed their perception.', ex2Hi: 'Unhone apni dhaarana badli hai.' },
    { de: 'Wochenendbeziehung', art: 'die', gender: 'f', plural: 'Wochenendbeziehungen', pos: 'noun', level: 'B2', register: 'both', en: 'weekend relationship', hi: 'सप्ताहांत रिश्ता', ex: 'Sie führten eine Wochenendbeziehung.', exEn: 'They had a weekend relationship.', exHi: 'Unka saptaahant rishta tha.', ex2: 'Eine Wochenendbeziehung erfordert Vertrauen.', ex2En: 'A weekend relationship requires trust.', ex2Hi: 'Saptaahant rishte mein vishvaas chaahiye.' },
    { de: 'Zensur', art: 'die', gender: 'f', plural: 'Zensuren', pos: 'noun', level: 'B2', register: 'written', en: 'censorship', hi: 'सेंसरशिप', ex: 'Die Zensur beschränkte die Presse.', exEn: 'Censorship restricted the press.', exHi: 'Censorship ne press ko seemit kiya.', ex2: 'Sie haben gegen die Zensur protestiert.', ex2En: 'They\'ve protested against censorship.', ex2Hi: 'Unhone censorship ke khilaaf pradarshan kiya hai.' },
    { de: 'zugreifen', pos: 'verb', level: 'B2', register: 'both', en: 'to grab, access, help oneself', hi: 'पहुंच बनाना', ex: 'Sie griff schnell zu.', exEn: 'She quickly helped herself.', exHi: 'Usne jaldi se le liya.', ex2: 'Er hat auf die Daten zugegriffen.', ex2En: 'He\'s accessed the data.', ex2Hi: 'Usne data tak pahunch banaayi hai.', conj: { praesens: 'greift zu', praeteritum: 'griff zu', perfekt: 'hat zugegriffen' } },
    { de: 'Abbau', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'dismantling, reduction', hi: 'कटौती', ex: 'Der Abbau der Arbeitsplätze war schmerzhaft.', exEn: 'The reduction of jobs was painful.', exHi: 'Naukriyon ki katauti dardnaak thi.', ex2: 'Sie haben den Abbau gestoppt.', ex2En: 'They\'ve stopped the reduction.', ex2Hi: 'Unhone katauti roki hai.' },
    { de: 'abschreiben', pos: 'verb', level: 'B2', register: 'both', en: 'to copy, write off', hi: 'नकल करना, बट्टे खाते डालना', ex: 'Er schrieb die Hausaufgaben ab.', exEn: 'He copied the homework.', exHi: 'Usne homework ki nakal ki.', ex2: 'Sie haben den Verlust abgeschrieben.', ex2En: 'They\'ve written off the loss.', ex2Hi: 'Unhone nuksaan bata khaate mein daala hai.', conj: { praesens: 'schreibt ab', praeteritum: 'schrieb ab', perfekt: 'hat abgeschrieben' } },
    { de: 'abschwächen', pos: 'verb', level: 'B2', register: 'both', en: 'to weaken, tone down', hi: 'कमज़ोर करना', ex: 'Sie schwächten die Kritik ab.', exEn: 'They toned down the criticism.', exHi: 'Unhone aalochana kam ki.', ex2: 'Der Sturm hat sich abgeschwächt.', ex2En: 'The storm has weakened.', ex2Hi: 'Toofaan kamzor ho gaya hai.', conj: { praesens: 'schwächt ab', praeteritum: 'schwächte ab', perfekt: 'hat abgeschwächt' } },
    { de: 'Alzheimer', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'Alzheimer\'s', hi: 'अल्ज़ाइमर', ex: 'Ihr Großvater litt an Alzheimer.', exEn: 'Her grandfather suffered from Alzheimer\'s.', exHi: 'Uske dada ko Alzheimer tha.', ex2: 'Sie haben über Alzheimer geforscht.', ex2En: 'They\'ve researched Alzheimer\'s.', ex2Hi: 'Unhone Alzheimer par shodh kiya hai.' },
    { de: 'Ampelprinzip', art: 'das', gender: 'n', plural: 'Ampelprinzipien', pos: 'noun', level: 'B2', register: 'written', en: 'traffic-light principle', hi: 'सिग्नल सिद्धांत', ex: 'Das Ampelprinzip half bei der Bewertung.', exEn: 'The traffic-light principle helped with the evaluation.', exHi: 'Signal siddhaant se moolyaankan mein madad mili.', ex2: 'Sie haben das Ampelprinzip eingeführt.', ex2En: 'They\'ve introduced the traffic-light principle.', ex2Hi: 'Unhone signal siddhaant laagu kiya hai.' },
    { de: 'Badesee', art: 'der', gender: 'm', plural: 'Badeseen', pos: 'noun', level: 'B2', register: 'both', en: 'bathing lake', hi: 'नहाने वाली झील', ex: 'Der Badesee war überfüllt.', exEn: 'The bathing lake was overcrowded.', exHi: 'Nahaane wali jheel bhari hui thi.', ex2: 'Sie haben den Badesee besucht.', ex2En: 'They\'ve visited the bathing lake.', ex2Hi: 'Unhone nahaane waali jheel ka daura kiya hai.' },
    { de: 'Befehl', art: 'der', gender: 'm', plural: 'Befehle', pos: 'noun', level: 'B2', register: 'both', en: 'command, order', hi: 'आदेश', ex: 'Er gab den Befehl zum Rückzug.', exEn: 'He gave the order to retreat.', exHi: 'Usne peeche hatne ka aadesh diya.', ex2: 'Sie haben den Befehl befolgt.', ex2En: 'They\'ve followed the order.', ex2Hi: 'Unhone aadesh ka paalan kiya hai.' },
    { de: 'Befinden', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'state of health, well-being', hi: 'स्वास्थ्य की स्थिति', ex: 'Wie ist Ihr Befinden?', exEn: 'How is your state of health?', exHi: 'Aapki tabiyat kaisi hai?', ex2: 'Sie haben nach seinem Befinden gefragt.', ex2En: 'They\'ve asked about his well-being.', ex2Hi: 'Unhone uski tabiyat ke baare mein poochha hai.' },
    { de: 'beruhigend', pos: 'adjective', level: 'B2', register: 'both', en: 'reassuring, soothing', hi: 'शांतिदायक', ex: 'Ihre Stimme war beruhigend.', exEn: 'Her voice was soothing.', exHi: 'Uski aawaaz shaantidaayak thi.', ex2: 'Sie haben beruhigende Worte gefunden.', ex2En: 'They\'ve found reassuring words.', ex2Hi: 'Unhein shaantidaayak shabd mile hain.' },
    { de: 'beschweren', pos: 'verb', level: 'B2', register: 'both', en: 'to complain', hi: 'शिकायत करना', ex: 'Sie beschwerte sich beim Manager.', exEn: 'She complained to the manager.', exHi: 'Usne manager se shikaayat ki.', ex2: 'Er hat sich über den Lärm beschwert.', ex2En: 'He\'s complained about the noise.', ex2Hi: 'Usne shor ke baare mein shikaayat ki hai.', conj: { praesens: 'beschwert', praeteritum: 'beschwerte', perfekt: 'hat beschwert' } },
    { de: 'Betroffene/r', art: 'der/die', gender: 'm/f', plural: 'Betroffene', pos: 'noun', level: 'B2', register: 'written', en: 'affected person', hi: 'प्रभावित व्यक्ति', ex: 'Die Betroffenen erhielten Unterstützung.', exEn: 'The affected people received support.', exHi: 'Prabhaavit logon ko samarthan mila.', ex2: 'Sie haben mit den Betroffenen gesprochen.', ex2En: 'They\'ve spoken with the affected people.', ex2Hi: 'Unhone prabhaavit logon se baat ki hai.' },
    { de: 'Blaumann', art: 'der', gender: 'm', plural: 'Blaumänner', pos: 'noun', level: 'B2', register: 'spoken', en: 'work overalls, blue-collar worker', hi: 'कार्य वर्दी', ex: 'Er trug seinen Blaumann zur Arbeit.', exEn: 'He wore his work overalls to work.', exHi: 'Usne kaam par apni kaam vardi pehni.', ex2: 'Sie haben einen neuen Blaumann gekauft.', ex2En: 'They\'ve bought new work overalls.', ex2Hi: 'Unhone nayi kaam vardi khareedi hai.' },
    { de: 'Blutdruck', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'blood pressure', hi: 'रक्तचाप', ex: 'Ihr Blutdruck war zu hoch.', exEn: 'Her blood pressure was too high.', exHi: 'Uska raktachaap bahut zyaada tha.', ex2: 'Sie haben den Blutdruck gemessen.', ex2En: 'They\'ve measured the blood pressure.', ex2Hi: 'Unhone raktachaap maapa hai.' },
    { de: 'chronisch', pos: 'adjective', level: 'B2', register: 'written', en: 'chronic', hi: 'दीर्घकालिक', ex: 'Er litt an einer chronischen Krankheit.', exEn: 'He suffered from a chronic illness.', exHi: 'Usse deerghakaalik bimaari thi.', ex2: 'Sie haben chronische Schmerzen.', ex2En: 'They\'ve got chronic pain.', ex2Hi: 'Unhein deerghakaalik dard hai.' },
    { de: 'Date', art: 'das', gender: 'n', plural: 'Dates', pos: 'noun', level: 'B2', register: 'spoken', en: 'date', hi: 'डेट', ex: 'Sie hatte ein Date am Abend.', exEn: 'She had a date in the evening.', exHi: 'Uska shaam ko date tha.', ex2: 'Er hat ein Date vereinbart.', ex2En: 'He\'s arranged a date.', ex2Hi: 'Usne ek date tay ki hai.' },
    { de: 'depressiv', pos: 'adjective', level: 'B2', register: 'both', en: 'depressive, depressed', hi: 'अवसादग्रस्त', ex: 'Sie fühlte sich depressiv.', exEn: 'She felt depressed.', exHi: 'Woh avasaadagrast mahsoos kar rahi thi.', ex2: 'Er hat depressive Phasen durchgemacht.', ex2En: 'He\'s gone through depressive phases.', ex2Hi: 'Usne avasaad ke daur se guzra hai.' },
    { de: 'Dilemma', art: 'das', gender: 'n', plural: 'Dilemmas', pos: 'noun', level: 'B2', register: 'both', en: 'dilemma', hi: 'दुविधा', ex: 'Sie steckte in einem Dilemma.', exEn: 'She was stuck in a dilemma.', exHi: 'Woh ek duvidha mein phansi hui thi.', ex2: 'Sie haben das Dilemma gelöst.', ex2En: 'They\'ve resolved the dilemma.', ex2Hi: 'Unhone duvidha suljhaayi hai.' },
    { de: 'durchaus', pos: 'adverb', level: 'B2', register: 'both', en: 'thoroughly, definitely', hi: 'बिल्कुल, निश्चित रूप से', ex: 'Das ist durchaus möglich.', exEn: 'That is definitely possible.', exHi: 'Yeh bilkul sambhav hai.', ex2: 'Sie haben durchaus recht.', ex2En: 'They\'re quite right.', ex2Hi: 'Woh bilkul sahi hain.' },
    { de: 'einfrieren', pos: 'verb', level: 'B2', register: 'both', en: 'to freeze', hi: 'जमाना', ex: 'Sie fror das Gemüse ein.', exEn: 'She froze the vegetables.', exHi: 'Usne sabziyaan jama di.', ex2: 'Die Preise sind eingefroren worden.', ex2En: 'The prices have been frozen.', ex2Hi: 'Keematein jama di gayi hain.', conj: { praesens: 'friert ein', praeteritum: 'fror ein', perfekt: 'hat eingefroren' } },
    { de: 'Endorphin', art: 'das', gender: 'n', plural: 'Endorphine', pos: 'noun', level: 'B2', register: 'written', en: 'endorphin', hi: 'एंडोर्फिन', ex: 'Sport setzt Endorphine frei.', exEn: 'Sport releases endorphins.', exHi: 'Vyaayaam se endorphin nikalta hai.', ex2: 'Sie haben mehr Endorphine produziert.', ex2En: 'They\'ve produced more endorphins.', ex2Hi: 'Unhone zyaada endorphin utpaadit kiya hai.' },
    { de: 'erträglich', pos: 'adjective', level: 'B2', register: 'both', en: 'bearable, tolerable', hi: 'सहनीय', ex: 'Der Schmerz war erträglich.', exEn: 'The pain was bearable.', exHi: 'Dard sahaneey tha.', ex2: 'Sie haben es erträglich gefunden.', ex2En: 'They\'ve found it bearable.', ex2Hi: 'Unhein yeh sahaneey laga hai.' },
    { de: 'Feuerwerk', art: 'das', gender: 'n', plural: 'Feuerwerke', pos: 'noun', level: 'B2', register: 'both', en: 'fireworks', hi: 'आतिशबाज़ी', ex: 'Das Feuerwerk begeisterte alle.', exEn: 'The fireworks delighted everyone.', exHi: 'Aatishbaazi ne sabko khush kar diya.', ex2: 'Sie haben das Feuerwerk beobachtet.', ex2En: 'They\'ve watched the fireworks.', ex2Hi: 'Unhone aatishbaazi dekhi hai.' },
    { de: 'Gefahr', art: 'die', gender: 'f', plural: 'Gefahren', pos: 'noun', level: 'B2', register: 'both', en: 'danger', hi: 'खतरा', ex: 'Die Gefahr war real.', exEn: 'The danger was real.', exHi: 'Khatra vaastavik tha.', ex2: 'Sie haben die Gefahr erkannt.', ex2En: 'They\'ve recognised the danger.', ex2Hi: 'Unhone khatra pehchaana hai.' },
    { de: 'gemein', pos: 'adjective', level: 'B2', register: 'both', en: 'mean, common', hi: 'नीच, सामान्य', ex: 'Das war eine gemeine Bemerkung.', exEn: 'That was a mean remark.', exHi: 'Yeh ek neech tippani thi.', ex2: 'Sie haben sich gemein verhalten.', ex2En: 'They\'ve behaved meanly.', ex2Hi: 'Unhone neechta se vyavahaar kiya hai.' },
    { de: 'gesundheitsfördernd', pos: 'adjective', level: 'B2', register: 'written', en: 'health-promoting', hi: 'स्वास्थ्यवर्धक', ex: 'Sport ist gesundheitsfördernd.', exEn: 'Sport is health-promoting.', exHi: 'Vyaayaam swaasthyavardhak hai.', ex2: 'Sie haben gesundheitsfördernde Gewohnheiten entwickelt.', ex2En: 'They\'ve developed health-promoting habits.', ex2Hi: 'Unhone swaasthyavardhak aadatein vikasit ki hain.' },
    { de: 'Gewissen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'conscience', hi: 'अंतरात्मा', ex: 'Ihr Gewissen ließ sie nicht schlafen.', exEn: 'Her conscience wouldn\'t let her sleep.', exHi: 'Uski antaraatma use sone nahi de rahi thi.', ex2: 'Er hat ein reines Gewissen.', ex2En: 'He\'s got a clear conscience.', ex2Hi: 'Uski antaraatma saaf hai.' },
    { de: 'Grab', art: 'das', gender: 'n', plural: 'Gräber', pos: 'noun', level: 'B2', register: 'written', en: 'grave', hi: 'कब्र', ex: 'Sie legten Blumen aufs Grab.', exEn: 'They placed flowers on the grave.', exHi: 'Unhone kabr par phool rakhe.', ex2: 'Er hat das Grab besucht.', ex2En: 'He\'s visited the grave.', ex2Hi: 'Usne kabr ka daura kiya hai.' },
    { de: 'Hirnschaden', art: 'der', gender: 'm', plural: 'Hirnschäden', pos: 'noun', level: 'B2', register: 'written', en: 'brain damage', hi: 'मस्तिष्क क्षति', ex: 'Der Unfall verursachte einen Hirnschaden.', exEn: 'The accident caused brain damage.', exHi: 'Durghatna se mastishk kshati hui.', ex2: 'Sie haben den Hirnschaden behandelt.', ex2En: 'They\'ve treated the brain damage.', ex2Hi: 'Unhone mastishk kshati ka ilaaj kiya hai.' },
    { de: 'Hoch', art: 'das', gender: 'n', plural: 'Hochs', pos: 'noun', level: 'B2', register: 'written', en: 'high (pressure area)', hi: 'उच्च दबाव क्षेत्र', ex: 'Ein Hoch brachte sonniges Wetter.', exEn: 'A high pressure area brought sunny weather.', exHi: 'Ek uchch dabaav kshetra ne dhoop waala mausam laaya.', ex2: 'Sie haben das Hoch genossen.', ex2En: 'They\'ve enjoyed the high pressure weather.', ex2Hi: 'Unhone uchch dabaav ka mausam ka aanand liya hai.' },
    { de: 'Jobwechsel', art: 'der', gender: 'm', plural: 'Jobwechsel', pos: 'noun', level: 'B2', register: 'both', en: 'job change', hi: 'नौकरी बदलाव', ex: 'Der Jobwechsel war eine gute Entscheidung.', exEn: 'The job change was a good decision.', exHi: 'Naukri badlaav ek achha faisla tha.', ex2: 'Sie haben den Jobwechsel geplant.', ex2En: 'They\'ve planned the job change.', ex2Hi: 'Unhone naukri badlaav ki yojana banaayi hai.' },
    { de: 'Kleiderschrank', art: 'der', gender: 'm', plural: 'Kleiderschränke', pos: 'noun', level: 'B2', register: 'both', en: 'wardrobe, closet', hi: 'अलमारी', ex: 'Der Kleiderschrank war voll.', exEn: 'The wardrobe was full.', exHi: 'Almari bhari hui thi.', ex2: 'Sie haben einen neuen Kleiderschrank gekauft.', ex2En: 'They\'ve bought a new wardrobe.', ex2Hi: 'Unhone nayi almari khareedi hai.' },
    { de: 'Kontext', art: 'der', gender: 'm', plural: 'Kontexte', pos: 'noun', level: 'B2', register: 'written', en: 'context', hi: 'संदर्भ', ex: 'Der Kontext war wichtig für das Verständnis.', exEn: 'The context was important for understanding.', exHi: 'Samajhne ke liye sandarbh mahatvapurn tha.', ex2: 'Sie haben den Kontext erklärt.', ex2En: 'They\'ve explained the context.', ex2Hi: 'Unhone sandarbh spasht kiya hai.' },
    { de: 'Kundenkontakt', art: 'der', gender: 'm', plural: 'Kundenkontakte', pos: 'noun', level: 'B2', register: 'written', en: 'customer contact', hi: 'ग्राहक संपर्क', ex: 'Sie pflegte engen Kundenkontakt.', exEn: 'She maintained close customer contact.', exHi: 'Usne graahak se ghanishta sampark rakha.', ex2: 'Sie haben den Kundenkontakt verbessert.', ex2En: 'They\'ve improved the customer contact.', ex2Hi: 'Unhone graahak sampark behtar kiya hai.' },
    { de: 'Kurzvortrag', art: 'der', gender: 'm', plural: 'Kurzvorträge', pos: 'noun', level: 'B2', register: 'written', en: 'short talk, presentation', hi: 'संक्षिप्त वार्ता', ex: 'Sie hielt einen Kurzvortrag über das Thema.', exEn: 'She gave a short talk on the topic.', exHi: 'Usne vishay par ek sankshipt vaarta di.', ex2: 'Er hat einen Kurzvortrag vorbereitet.', ex2En: 'He\'s prepared a short talk.', ex2Hi: 'Usne ek sankshipt vaarta taiyaar ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein irrealer Vergleich?',
      body: [ 'The speaker does not claim something is true — only that it appears to be. "It looks as if..."' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Anna sieht aus, als ob sie krank wäre.</span> — She looks as if she were ill. We do NOT know whether she really is.']
        ]
      },
      hinglish: 'Yahan speaker yeh nahi keh raha ki baat sach hai \u2014 sirf yeh keh raha hai ki aisa <b>lagta</b> hai. Matlab "aisa lag raha hai jaise\u2026", par pakka pata nahi.'
    },
    {
      title: 'als ob',
      body: [ 'Structure: Main clause + als ob + Konjunktiv II, with the verb at the very end.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Er spricht, als ob er alles wüsste.</span>'],
          ['<span class="de">Anna lacht, als ob sie keine Sorgen hätte.</span>'],
          ['<span class="de">Der Mann läuft, als ob er es eilig hätte.</span>']
        ]
      },
      hinglish: 'Structure yeh hai: pehle main clause, phir comma, phir <b>als ob</b>, aur uske clause ka verb Konjunktiv II mein sentence ke end mein jaata hai.'
    },
    {
      title: 'als wenn',
      body: [ 'Almost the same meaning as als ob, but mostly spoken and slightly less common.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Sie tut so, als wenn sie alles wüsste.</span>'],
          ['<span class="de">Rohan spricht, als wenn er Professor wäre.</span>']
        ]
      },
      hinglish: 'Iska matlab <b>als ob</b> jaisa hi hai, bas yeh zyada-tar bolne mein aata hai aur kam common hai. Likhne mein <b>als ob</b> hi behtar rehta hai.'
    },
    {
      title: 'als + Konjunktiv II (shortened form)',
      body: [ 'Many native speakers shorten the structure: the verb moves directly after "als" instead of waiting for "ob".' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Er sieht aus, als wäre er müde.</span>'],
          ['<span class="de">Sie spricht, als hätte sie keine Zeit.</span>'],
          ['<span class="de">Es klingt, als käme der Zug gleich.</span>']
        ]
      },
      hinglish: 'Native speakers is structure ko chhota kar dete hain \u2014 <b>ob</b> hata dete hain aur verb seedha <b>als</b> ke turant baad aa jaata hai. Isliye <span class="de">als w\u00e4re er m\u00fcde</span> mein verb end mein nahi, shuru mein hai.'
    },
    {
      title: 'Register',
      body: [ 'All three structures express the same meaning but differ slightly in formality.' ],
      table: {
        head: ['Structure', 'Register'],
        rows: [
          ['als ob', 'Most common — formal and spoken'],
          ['als wenn', 'Mostly spoken, less common'],
          ['als + Konjunktiv II', 'Very elegant, extremely common in written German']
        ]
      },
      hinglish: 'Teeno ka matlab ek hi hai, farak sirf register ka hai. <b>als ob</b> sab jagah chalta hai, <b>als wenn</b> zyada-tar bolchaal mein, aur <b>als</b> + Konjunktiv II likhne mein sabse elegant lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from using the wrong word order or the wrong tense after als ob/als wenn/als.' ],
      mistakes: [
        { wrong: 'Er spricht als ob er weiß alles.', right: 'Er spricht, als ob er alles wüsste.', why: 'The verb after "als ob" must be in Konjunktiv II ("wüsste"), not Präsens indicative ("weiß"), and must go to the end.' },
        { wrong: 'Anna sieht aus als sie krank ist.', right: 'Anna sieht aus, als ob sie krank wäre. (or) Anna sieht aus, als wäre sie krank.', why: 'A comparison of appearance needs "als ob" or the shortened "als + Konjunktiv II" — not a plain "als" + indicative clause.' },
        { wrong: 'Er spricht als ob er ist Lehrer.', right: 'Er spricht, als ob er Lehrer wäre.', why: 'The verb must be Konjunktiv II ("wäre"), not Präsens indicative ("ist"), and must move to the end after "als ob".' },
        { wrong: 'Er tut so, als ob er krank war.', right: 'Er tut so, als ob er krank wäre.', why: 'Use Konjunktiv II (w\u00e4re), not Pr\u00e4teritum indicative (war) \u2014 this is an unreal comparison, not a statement about the real past.' },
        { wrong: 'Er spricht, wie ob er ein Lehrer wäre.', right: 'Er spricht, als ob er ein Lehrer wäre.', why: 'The unreal comparison uses "als ob", never "wie ob". Keep "wie" for a straightforward comparison \u2014 <span class="de">Er spricht wie ein Lehrer</span> is correct German too, but it says he really does sound like one.' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 <b>als ob</b> ke baad Konjunktiv II ki jagah normal Pr\u00e4sens ya Pr\u00e4teritum laga dena, ya verb ko clause ke end mein na bhejna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Using unreal comparisons naturally is a strong marker of sophisticated, native-like B2 German.' ],
      note: 'Memory trick: Looks like... Sounds like... Seems like... → use als ob, NOT reality.',
      hinglish: 'Yeh structure theek se use karna B2 par kaafi impressive lagta hai, kyunki isse tum bina dava kiye apna andaaza bata dete ho.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Gesundheitsmagazin: Warum Laufen glücklich macht',
    titleEn: 'Health magazine: why running makes you happy',
    tokens: [
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'langen', role: 'plain', en: 'long', hi: 'लंबी', type: 'Adjective' },
      { w: 'Lauf', role: 'plain', en: 'run (Satzende)', hi: 'दौड़ (Satzende)', type: 'Noun · masc.' },
      { w: 'fühlen', role: 'plain', en: 'feel', hi: 'महसूस करते हैं', type: 'Verb · fühlen' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Läufer', role: 'plain', en: 'runners', hi: 'धावक', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'als', role: 'r-connector', en: 'as if', hi: 'मानो', type: 'Konjunktion · als ob / als (irrealer Vergleich)', why: 'als (ob) + Konjunktiv II introduces an unreal comparison — describing a feeling AS IF something (not literally true) were the case (this chapter).' },
      { w: 'ob', role: 'r-connector', en: '(as if, cont.)', hi: '', type: 'Konjunktion · als ob' },
      { w: 'jeglicher', role: 'plain', en: 'any', hi: 'कोई भी', type: 'Determiner' },
      { w: 'Stress', role: 'plain', en: 'stress', hi: 'तनाव', type: 'Noun · masc.' },
      { w: 'verschwunden', role: 'plain', en: 'vanished (Satzende)', hi: 'ग़ायब हो गया (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wäre', role: 'plain', en: 'were (Konjunktiv II, Satzende)', hi: 'होता (Konjunktiv II, Satzende)', type: 'Verb · sein (Konjunktiv II Vergangenheit, Nebensatz-Satzende)' },
      { w: '.', plain: true },
      { w: 'Verantwortlich', role: 'plain', en: 'responsible', hi: 'ज़िम्मेदार', type: 'Adjective' },
      { w: 'dafür', role: 'plain', en: 'for this', hi: 'इसके लिए', type: 'Pronominaladverb' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'Endorphine', role: 'plain', en: 'endorphins (Satzende)', hi: 'एंडोर्फिन (Satzende)', type: 'Noun · plural', why: 'das Endorphin (this chapter).' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'that', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'der', role: 'plain', en: 'the (masc. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Körper', role: 'plain', en: 'body', hi: 'शरीर', type: 'Noun · masc.' },
      { w: 'bei', role: 'plain', en: 'during', hi: 'दौरान', type: 'Preposition · Dat.' },
      { w: 'Anstrengung', role: 'plain', en: 'exertion (Satzende)', hi: 'परिश्रम (Satzende)', type: 'Noun · fem.' },
      { w: 'ausschüttet', role: 'plain', en: 'releases (Satzende)', hi: 'छोड़ता है (Satzende)', type: 'Verb · ausschütten (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Studien', role: 'plain', en: 'studies', hi: 'अध्ययन', type: 'Noun · plural' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'दिखाते हैं', type: 'Verb · zeigen' },
      { w: 'außerdem', role: 'plain', en: 'furthermore', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'gesundheitsfördernden', role: 'plain', en: 'health-promoting', hi: 'स्वास्थ्यवर्धक', type: 'Adjective', why: 'gesundheitsfördernd (this chapter).' },
      { w: 'Effekt', role: 'plain', en: 'effect (Satzende)', hi: 'प्रभाव (Satzende)', type: 'Noun · masc.' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Blutdruck', role: 'plain', en: 'blood pressure (Satzende)', hi: 'रक्तचाप (Satzende)', type: 'Noun · masc.', why: 'der Blutdruck (this chapter).' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'depressiv', role: 'plain', en: 'depressive', hi: 'अवसादग्रस्त', type: 'Adjective', why: 'depressiv (this chapter).' },
      { w: 'veranlagte', role: 'plain', en: 'predisposed', hi: 'प्रवृत्त', type: 'Adjective' },
      { w: 'Patienten', role: 'plain', en: 'patients (Satzende)', hi: 'मरीज़ों (Satzende)', type: 'Noun · plural' },
      { w: 'berichten', role: 'plain', en: 'report', hi: 'बताते हैं', type: 'Verb · berichten' },
      { w: ',', plain: true },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'fühlten', role: 'plain', en: 'felt (Konjunktiv I/II, indirekte Rede)', hi: 'महसूस करते (Konjunktiv)', type: 'Verb · fühlen (Konjunktiv II)' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Laufen', role: 'plain', en: 'running (Satzende)', hi: 'दौड़ने (Satzende)', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'als', role: 'r-connector', en: 'as if', hi: 'मानो', type: 'Konjunktion · als (irrealer Vergleich, ohne ob)', why: 'als can introduce the same unreal comparison alone, moving the verb straight after als (this chapter).' },
      { w: 'hätte', role: 'plain', en: 'had (Konjunktiv II, Satzende)', hi: 'दिया होता (Konjunktiv II, Satzende)', type: 'Verb · haben (Konjunktiv II Vergangenheit)' },
      { w: 'ihnen', role: 'plain', en: 'them (dat.)', hi: 'उन्हें', type: 'Pronoun · Dat.' },
      { w: 'jemand', role: 'plain', en: 'someone', hi: 'किसी ने', type: 'Pronoun' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Energie', role: 'plain', en: 'energy (Satzende)', hi: 'ऊर्जा (Satzende)', type: 'Noun · fem.' },
      { w: 'geschenkt', role: 'plain', en: 'gifted (Satzende)', hi: 'भेंट की होती (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Pronoun' },
      { w: 'beschreiben', role: 'plain', en: 'describe', hi: 'बताते हैं', type: 'Verb · beschreiben' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Gefühl', role: 'plain', en: 'feeling', hi: 'एहसास', type: 'Noun · neut.' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इस तरह', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'als', role: 'r-connector', en: 'as if', hi: 'मानो', type: 'Konjunktion · als (Irrealer Vergleich)', why: 'als + Konjunktiv II: an unreal comparison, verb moves to position 2 (this chapter).' },
      { w: 'könnten', role: 'r-verb', en: 'could (Konjunktiv II)', hi: 'सकते हों', type: 'Verb · können (Konjunktiv II)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'danach', role: 'plain', en: 'afterwards', hi: 'उसके बाद', type: 'Adverb' },
      { w: 'jeden', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Berg', role: 'plain', en: 'mountain (Satzende)', hi: 'पहाड़ (Satzende)', type: 'Noun · masc.' },
      { w: 'besteigen', role: 'plain', en: 'climb (Satzende)', hi: 'चढ़ना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Ärzte', role: 'plain', en: 'doctors', hi: 'डॉक्टर', type: 'Noun · plural' },
      { w: 'raten', role: 'plain', en: 'advise', hi: 'सलाह देते हैं', type: 'Verb · raten' },
      { w: 'dennoch', role: 'plain', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'के लिए', type: 'Preposition · Dat.' },
      { w: 'Vorsicht', role: 'plain', en: 'caution (Satzende)', hi: 'सावधानी (Satzende)', type: 'Noun · fem.' },
      { w: ':', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'बहुत', type: 'Adverb' },
      { w: 'schnell', role: 'plain', en: 'fast', hi: 'तेज़', type: 'Adjective' },
      { w: 'steigert', role: 'plain', en: 'increases (Satzende)', hi: 'बढ़ाता है (Satzende)', type: 'Verb · steigern (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'riskiert', role: 'plain', en: 'risks', hi: 'ख़तरे में डालता है', type: 'Verb · riskieren' },
      { w: 'Verletzungen', role: 'plain', en: 'injuries (Satzende)', hi: 'चोटें (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'After a long run, many runners feel as if any stress had vanished. Responsible for this are endorphins, which the body releases during exertion. Studies also show a health-promoting effect on blood pressure. Some patients predisposed to depression report that after running they felt as if someone had gifted them new energy. Some even describe the feeling as if they could climb every mountain afterwards. Doctors nevertheless advise caution: whoever increases their pace too quickly risks injuries.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_033_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frauke, du tust so, als ob dich die Prüfung gar nicht stressen würde.', en: 'Frauke, you\'re acting as if the exam weren\'t stressing you out at all.' },
      { id: 'B2_033_L002', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich? Innerlich fühlt es sich an, als hätte ich seit Wochen nichts gelernt.', en: 'Honestly? Inside it feels as if I hadn\'t learned anything in weeks.' },
      { id: 'B2_033_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das überrascht mich total, du wirkst immer so ruhig.', en: 'That really surprises me, you always seem so calm.' },
      { id: 'B2_033_L004', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ich tue nur so, als wäre alles unter Kontrolle.', en: 'Yes, I just act as if everything were under control.' }
    ],
    transcript: 'Frauke, du tust so, als ob dich die Prüfung gar nicht stressen würde. Ehrlich? Innerlich fühlt es sich an, als hätte ich seit Wochen nichts gelernt. Das überrascht mich total, du wirkst immer so ruhig. Ja, ich tue nur so, als wäre alles unter Kontrolle.',
    translation: 'Frauke, you\'re acting as if the exam weren\'t stressing you out at all. Honestly? Inside it feels as if I hadn\'t learned anything in weeks. That really surprises me, you always seem so calm. Yes, I just act as if everything were under control.',
    tokens: [
      { w: 'Frauke' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'tust' },
      { w: 'so' },
      { w: ',', plain: true },
      { w: 'als' },
      { w: 'ob' },
      { w: 'dich' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: 'stressen' },
      { w: 'würde' },
      { w: '.', plain: true },
      { w: 'Ehrlich' },
      { w: '?', plain: true },
      { w: 'Innerlich' },
      { w: 'fühlt' },
      { w: 'es' },
      { w: 'sich' },
      { w: 'an' },
      { w: ',', plain: true },
      { w: 'als' },
      { w: 'hätte' },
      { w: 'ich' },
      { w: 'seit' },
      { w: 'Wochen' },
      { w: 'nichts' },
      { w: 'gelernt' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'überrascht' },
      { w: 'mich' },
      { w: 'total' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'wirkst' },
      { w: 'immer' },
      { w: 'so' },
      { w: 'ruhig' },
      { w: '.', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'tue' },
      { w: 'nur' },
      { w: 'so' },
      { w: ',', plain: true },
      { w: 'als' },
      { w: 'wäre' },
      { w: 'alles' },
      { w: 'unter' },
      { w: 'Kontrolle' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie verhält sich Frauke bei der Prüfung?', qEn: 'How does Frauke act about the exam?', options: ['als ob sie panisch wäre', 'als ob es sie nicht stressen würde', 'als ob sie es abgesagt hätte', 'als ob sie krank wäre'], optionsEn: ['as if she were panicking', 'as if it didn\'t stress her', 'as if she had cancelled it', 'as if she were ill'], answer: 1,
        explain: '"Du tust so, als ob dich die Prüfung gar nicht stressen würde."' },
      { q: 'Wie fühlt sich Frauke innerlich?', qEn: 'How does Frauke feel inside?', options: ['sehr sicher', 'als hätte sie nichts gelernt', 'froh', 'müde'], optionsEn: ['very certain', 'as if she had learnt nothing', 'glad', 'tired'], answer: 1,
        explain: '"… es fühlt sich an, als hätte ich seit Wochen nichts gelernt."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin sagt, du wirkst ruhig. Sag, wie es wirklich ist.", taskEn: "Your friend says you seem calm. Say how it really is.", de: "Innerlich fühlt es sich an, als hätte ich seit Wochen nichts gelernt.", en: "Inside it feels as if I hadn't studied for weeks." },
    { task: "Ein Kollege wirkt heute merkwürdig. Beschreib es.", taskEn: "A colleague seems odd today. Describe it.", de: "Er sieht aus, als ob er die ganze Nacht gearbeitet hätte.", en: "He looks as if he'd worked all night." },
    { task: "Eine Bekannte tut nach dem Streit so, als sei nichts passiert.", taskEn: "After the argument an acquaintance acts as if nothing happened.", de: "Sie tut, als wäre nichts passiert.", en: "She acts as if nothing had happened." },
    { task: "Ein Redner übertreibt in der Vorlesung. Sag es deinem Freund.", taskEn: "A speaker exaggerates in the lecture. Tell your friend.", de: "Er redet, als ob er alles selbst erforscht hätte.", en: "He talks as if he'd researched it all himself." },
    { task: "Rollenspiel: Ihr sprecht über Prüfungsstress.", taskEn: "Role-play: you talk about exam stress.", de: "Du wirkst, als ob dich nichts stressen würde. — Und du tust, als hättest du keine Angst.", en: "You seem as if nothing stressed you. — And you act as if you had no fear." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Description (6-8 sentences): Describe a person or situation using als ob, als wenn, and the shortened als + Konjunktiv II — focus on appearance, not confirmed fact.\n\nTASK 2 — Opinion text (6-8 sentences): Write about a workplace or university situation where something seemed true but you weren\'t sure, using unreal comparisons naturally.',
    starters: ['Er sieht aus, als ob …', 'Es klingt, als …'],
    placeholder: 'Rohan sieht aus, als ob er gestresst wäre. Es klingt, als käme …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which structure moves the verb directly after "als" instead of the end?',
      options: ['als + Konjunktiv II (shortened form)', 'als ob', 'als wenn'],
      answer: 0,
      explain: 'In the shortened form, the verb moves directly after "als" (e.g. "als wäre er müde"), instead of waiting at the end as with "als ob"/"als wenn".'
    },
    gap: {
      sentence: ['Er spricht, als ob er alles ', '.'],
      gaps: [ { answer: 'wüsste', accepts: ['wüsste'] } ],
      explain: 'The verb after "als ob" must be Konjunktiv II ("wüsste") and go to the end of the clause.'
    },
    match: {
      q: 'Match each structure to its register.',
      pairs: [
        { noun: 'als ob', art: 'Most common — formal and spoken' },
        { noun: 'als wenn', art: 'Mostly spoken, less common' },
        { noun: 'als + Konjunktiv II', art: 'Elegant, very common in writing' }
      ]
    },
    builder: {
      target: 'Build: "He looks as if he were tired." (shortened form)',
      bank: ['Er', 'sieht', 'aus', ',', 'als', 'wäre', 'er', 'müde', '.'],
      answer: ['Er', 'sieht', 'aus', ',', 'als', 'wäre', 'er', 'müde', '.'],
      roles: { 'als': 'r-irreale', 'wäre': 'r-irreale' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er spricht als ob er weiß alles.',
      right: 'Er spricht, als ob er alles wüsste.',
      explain: 'The verb after "als ob" must be Konjunktiv II ("wüsste"), not Präsens indicative ("weiß"), and must move to the end.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does an unreal comparison (als ob) express?', options: ['Appearance, not confirmed reality', 'A definite fact', 'A future plan'], answer: 0,
      explain: 'als ob/als wenn/als + KII describe how something appears, without claiming it is actually true.' },
    { q: 'Where does the verb go in "als ob" and "als wenn"?', options: ['At the end of the clause', 'Right after "als"', 'In first position'], answer: 0,
      explain: 'With "als ob" and "als wenn", the verb goes to the end, as in a normal Nebensatz.' },
    { q: 'Where does the verb go in the shortened "als + Konjunktiv II" form?', options: ['Right after "als"', 'At the end of the clause', 'It disappears'], answer: 0,
      explain: 'In the shortened form, the verb moves directly after "als" instead of waiting at the end.' },
    { q: 'Which tense must follow als ob/als wenn/als?', options: ['Konjunktiv II', 'Präsens indicative', 'Perfekt indicative'], answer: 0,
      explain: 'Unreal comparisons always require Konjunktiv II (wäre, hätte, wüsste, käme, etc.).' },
    { q: 'Which register is als wenn typically associated with?', options: ['Mostly spoken, less common than als ob', 'Only formal writing', 'Only Goethe exams'], answer: 0,
      explain: 'als wenn is mostly used in spoken German and is slightly less common than als ob.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-irreale', html: 'als ob, als wenn, and the shortened als + Konjunktiv II all describe an appearance without confirming reality.' },
    { c: 'r-irreale', html: 'als ob/als wenn send the verb to the end; the shortened als + Konjunktiv II moves the verb right after "als" instead.' },
    { c: 'r-irreale', html: 'als ob is the most common and versatile; als wenn is mostly spoken; als + Konjunktiv II is elegant and very common in writing.' }
  ],
  revisionTips: [
    'Practise describing people\'s appearances using all three structures on the same sentence — notice the word-order difference.',
    'Listen for "als ob" and the shortened form in conversations and notice how confident the speaker actually sounds.',
    'Keep Irreale Bedingungssätze, Konjunktiv I, and "als dass" for later — this chapter is only about unreal comparisons.'
  ]
};

window.CHAPTER = CHAPTER;
