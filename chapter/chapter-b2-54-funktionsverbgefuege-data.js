/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 54
   "Funktionsverbgefüge" — Noun + light verb (Funktionsverb)
   replacing a simple lexical verb for formal register:
   entscheiden → eine Entscheidung treffen; analysieren → eine
   Analyse durchführen. The noun carries the meaning; the light
   verb carries the grammar. Does NOT teach idioms or C1
   bureaucratic language.
   IMPORTANT: dialogue uses ONLY Karla and Timo.
   Vocabulary source: uploaded Chapter 54 list (23 items).
============================================================ */
const CHAPTER = {
  id: 'b2-54-funktionsverbgefuege',
  phase: 'B2 · Phase 6',
  number: 54,
  title: 'Funktionsverbgefüge',
  titleEn: 'Noun + light verb constructions',
  description: 'entscheiden → eine Entscheidung treffen. The noun carries the meaning; the light verb carries the grammar.',
  xp: 660,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 55, title: 'Modalpartikeln: doch / ja', titleEn: 'Modal particles: doch / ja' , href: 'chapter-b2-55-modalpartikeln-doch-ja.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The noun carries the <em>meaning</em>.',
    intro: 'Before a meeting, Karla takes consideration of Timo\'s arguments and he puts his trust in the discussion ahead — every plain verb swapped for the formal noun + light-verb construction German prefers: eine Entscheidung treffen, Rücksicht nehmen.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear simple verbs transform into formal Funktionsverbgefüge'
    ],
    scene: 'Vor der Besprechung',
    femaleSpeakers: ['Karla'],
    dialogue: [
      { speaker: 'Karla', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)' },
        { w: 'Rücksicht', role: 'r-akkusativ', en: 'consideration', hi: 'ख़्याल', pron: 'RÜK-zikht', type: 'Noun · fem.', why: 'Funktionsverbgefüge: Rücksicht nehmen auf = to take consideration of, a fixed noun+verb unit (this chapter).', ex: 'Rücksicht nehmen auf' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition · fixed' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Argumente', role: 'r-akkusativ', en: 'arguments', hi: 'तर्क', pron: 'ar-goo-MEN-tuh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'I take consideration of your arguments.', hi: 'Main tumhaare tarkon ka khyaal rakhti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'KO-men', type: 'Verb · kommen' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'पर', pron: 'tsoor', type: 'Preposition · fixed' },
        { w: 'Diskussion', role: 'r-dativ', en: 'discussion (dat.)', hi: 'चर्चा', pron: 'dis-ku-SYON', type: 'Noun · fem. dat.', why: 'zur Diskussion kommen = to come up for discussion (this chapter).', ex: 'zur Diskussion kommen' },
        { w: '.', plain: true }
      ], en: 'Thanks! We come to the discussion.', hi: 'Dhanyavaad! Hum charcha par aate hain.' },
      { speaker: 'Karla', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'setzen', role: 'r-verb', en: 'put', hi: 'डालते हैं', pron: 'ZE-tsen', type: 'Verb · setzen (wir)' },
        { w: 'unser', role: 'r-akkusativ', en: 'our (neut.)', hi: 'अपना', pron: 'UN-zer', type: 'Possessive · acc.' },
        { w: 'Vertrauen', role: 'r-akkusativ', en: 'trust', hi: 'भरोसा', pron: 'fer-TROW-en', type: 'Noun · neut.' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition · fixed' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Politik', role: 'r-akkusativ', en: 'politics', hi: 'राजनीति', pron: 'po-li-TEEK', type: 'Noun · fem.', why: 'Vertrauen setzen in = to put trust in (this chapter).', ex: 'Vertrauen setzen in' },
        { w: '.', plain: true }
      ], en: 'We put our trust in politics.', hi: 'Hum apna bharosa rajniti mein daalte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'darauf', role: 'r-akkusativ', en: 'on it', hi: 'उस पर', pron: 'da-ROWF', type: 'Pronoun · adverbial' },
        { w: 'angewiesen', role: 'r-verb', en: 'dependent', hi: 'निर्भर', pron: 'AN-ge-vee-zen', type: 'Adjective', why: 'angewiesen sein auf = to be dependent on, fixed phrase (this chapter).', ex: 'angewiesen sein auf' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Bereitschaft', role: 'r-subject', en: 'willingness', hi: 'तैयारी', pron: 'be-RYT-shaft', type: 'Noun · fem.', why: 'die Bereitschaft (this chapter).', ex: 'die Bereitschaft' },
        { w: 'groß', role: 'r-akkusativ', en: 'great', hi: 'बड़ी', pron: 'grohs', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am dependent on the willingness being great.', hi: 'Main is par nirbhar hoon ki taiyaari badi ho.' },
      { speaker: 'Karla', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ziehen', role: 'r-verb', en: 'draw', hi: 'निकालते हैं', pron: 'TSEE-en', type: 'Verb · ziehen (wir)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Vergleich', role: 'r-akkusativ', en: 'comparison', hi: 'तुलना', pron: 'fer-GLYKH', type: 'Noun · masc.' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition' },
        { w: 'beiden', role: 'r-dativ', en: 'both (dat.)', hi: 'दोनों', pron: 'BY-den', type: 'Pronoun · dative' },
        { w: 'Systemen', role: 'r-dativ', en: 'systems (dat.)', hi: 'प्रणालियों', pron: 'züs-TAY-men', type: 'Noun · plural dat.', why: 'einen Vergleich ziehen = to draw a comparison (this chapter).', ex: 'einen Vergleich ziehen' },
        { w: '.', plain: true }
      ], en: 'We draw a comparison between both systems.', hi: 'Hum dono pranaliyon ke beech tulna karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'bringt', role: 'r-verb', en: 'brings', hi: 'लाता है', pron: 'BRINKT', type: 'Verb · bringen' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमें', pron: 'uns', type: 'Pronoun · acc.' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Erfolg', role: 'r-akkusativ', en: 'success', hi: 'सफलता', pron: 'er-FOLK', type: 'Noun · masc.' },
        { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Preposition + akkusativ' },
        { w: 'der', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dair', type: 'Article · fem.' },
        { w: 'Debatte', role: 'r-akkusativ', en: 'debate', hi: 'वाद-विवाद', pron: 'de-BA-tuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'That brings us a lot of success in the debate.', hi: 'Yeh humein vaad-vivaad mein bahut safalta laata hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German often prefers noun + light verb over one lexical verb in formal contexts: <span class="de">entscheiden</span> → <span class="de r-fvg">eine Entscheidung treffen</span>. The noun carries the meaning; the light verb ("treffen", "führen", "geben", "stellen"...) just carries the grammar.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is FUNKTIONSVERBGEFÜGE (noun + light-verb constructions) at B2 level: fixed combinations like "eine Entscheidung treffen" (= entscheiden), "eine Analyse durchführen" (= analysieren), "eine Diskussion führen" (= diskutieren), "einen Antrag stellen" (= beantragen), "eine Frage stellen" (= fragen), "eine Antwort geben" (= antworten), "Kontakt aufnehmen" (= kontaktieren), "Einfluss haben" (= beeinflussen), "zur Verfügung stehen" (= verfügbar sein), "in Kraft treten" (= beginnen/gelten), "in Betracht ziehen" (= erwägen), "Verantwortung übernehmen", "unter Druck stehen", "zur Anwendung kommen", "eine Rolle spielen". These replace a simple verb for a more formal, objective register. ' +
    'Do NOT expect or require idioms without productive grammar, or C1 bureaucratic language — those are out of scope; do not flag their absence, and do not penalise simple verbs used in casual/informal contexts (Funktionsverbgefüge is a REGISTER choice, not a correctness requirement). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each Funktionsverbgefüge uses its FIXED light verb (e.g. "eine Entscheidung treffen", never "eine Entscheidung machen").\n' +
    '- Check the correct case/article on the noun component (e.g. "einen Antrag stellen" — Akkusativ, masculine).\n' +
    '- If the learner used a simple verb where a Funktionsverbgefüge would sound more formal, do not flag it as wrong unless the text is clearly meant to be formal/academic — this is a stylistic upgrade, not an error correction.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner used Funktionsverbgefüge naturally where the text called for formal register.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use the correct fixed light verb every time. Ready for Konjunktiv I in reports next.',
    mid: 'Good. Re-read the Master Transformation Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: the noun carries the meaning, the light verb just carries the grammar.'
  },

  parserSentence: [
    { w: 'Wir', role: 'plain' }, { w: 'treffen', role: 'r-fvg' }, { w: 'eine', role: 'r-fvg' },
    { w: 'Entscheidung', role: 'r-fvg' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: noun + light verb replaces a simple verb for formal register.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Karla and Timo prepare a research project and company meeting using authentic Funktionsverbgefüge.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 23 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the most important Funktionsverbgefüge and the light verbs that pair with them.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific project report and corporate strategy report full of Funktionsverbgefüge.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Funktionsverbgefüge, their base verb, and register in a project meeting and business meeting.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present research and discuss business decisions using Funktionsverbgefüge naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite an informal email formally and write a company report using at least 12 Funktionsverbgefüge.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Verb→FVG and FVG→Verb transformation and choosing the correct light verb.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 660 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 23 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb-to-Funktionsverbgefüge drills, light-verb matching, and a formal-report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full transformation table, light-verb reference, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'entscheiden → eine Entscheidung treffen', text: 'Transform simple verbs into formal Funktionsverbgefüge' },
    { de: 'treffen, führen, stellen, geben, aufnehmen, ziehen, übernehmen', text: 'Pair the correct light verb with each noun' },
    { de: 'Kontakt aufnehmen, zur Verfügung stehen, in Kraft treten', text: 'Recognize fixed Funktionsverbgefüge in workplace and academic German' },
    { de: 'eine Entscheidung machen ❌ → eine Entscheidung treffen ✓', text: 'Avoid the most common learner mistake: wrong light verb' },
    { de: 'Common in reports, contracts, and Goethe B2 formal writing', text: 'Recognize the register where Funktionsverbgefüge dominate' }
  ],

  // ---------- Vocabulary (23 items — uploaded chapter-54 list) ----------
  vocab: [
    { de: 'Auskunft', art: 'die', gender: 'f', plural: 'Auskünfte', pos: 'noun', level: 'B2', register: 'written', en: 'information', hi: 'जानकारी', ex: 'Sie gab uns eine ausführliche Auskunft.', exEn: 'She gave us detailed information.', exHi: 'Usne humein vistrit jaankaari di.', ex2: 'Sie haben nach Auskunft gefragt.', ex2En: 'They\'ve asked for information.', ex2Hi: 'Unhone jaankaari maangi hai.' },
    { de: 'Diskussionsbedarf', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'need for discussion', hi: 'चर्चा की आवश्यकता', ex: 'Dann haben wir keinen Diskussionsbedarf mehr.', exEn: 'Then we have no need for further discussion.', exHi: 'Tab humein aur charcha ki zaroorat nahi hai.', ex2: 'Es gibt noch Diskussionsbedarf.', ex2En: 'There is still a need for discussion.', ex2Hi: 'Abhi bhi charcha ki zaroorat hai.' },
    { de: 'Geschäftsbedingungen', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'terms and conditions', hi: 'व्यापार शर्तें', ex: 'Sie akzeptierte die Geschäftsbedingungen.', exEn: 'She accepted the terms and conditions.', exHi: 'Usne vyapaar sharton ko sweekaar kiya.', ex2: 'Sie haben die Geschäftsbedingungen geändert.', ex2En: 'They\'ve changed the terms and conditions.', ex2Hi: 'Unhone vyapaar sharton mein badlaav kiya hai.' },
    { de: 'Kommunikationsfähigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'communication skill', hi: 'संचार कौशल', ex: 'Die Kommunikationsfähigkeit unseres Teams spielt eine wichtige Rolle.', exEn: 'Our team\'s communication skill plays an important role.', exHi: 'Hamaari team ka sanchaar kaushal ek mahatvapurn bhoomika nibhaata hai.', ex2: 'Sie haben ihre Kommunikationsfähigkeit verbessert.', ex2En: 'They\'ve improved their communication skill.', ex2Hi: 'Unhone apna sanchaar kaushal behtar banaaya hai.' },
    { de: 'konstant', pos: 'adjective', level: 'B2', register: 'written', en: 'constant, steady', hi: 'स्थिर', ex: 'Die Ergebnisse blieben konstant.', exEn: 'The results remained steady.', exHi: 'Parinaam sthir rahe.', ex2: 'Sie haben konstante Werte gemessen.', ex2En: 'They\'ve measured constant values.', ex2Hi: 'Unhone sthir moolyon ko maapa hai.' },
    { de: 'Lager', art: 'das', gender: 'n', plural: 'Lager', pos: 'noun', level: 'B2', register: 'both', en: 'warehouse, camp', hi: 'गोदाम', ex: 'Steht das Lager zur Verfügung?', exEn: 'Is the warehouse available?', exHi: 'Kya godaam upalabdh hai?', ex2: 'Sie haben ein neues Lager gebaut.', ex2En: 'They\'ve built a new warehouse.', ex2Hi: 'Unhone ek naya godaam banaaya hai.' },
    { de: 'Mühe', art: 'die', gender: 'f', plural: 'Mühen', pos: 'noun', level: 'B2', register: 'both', en: 'effort, trouble', hi: 'प्रयास', ex: 'Sie gab sich viel Mühe.', exEn: 'She made a lot of effort.', exHi: 'Usne bahut prayaas kiya.', ex2: 'Sie haben sich die Mühe gemacht.', ex2En: 'They\'ve taken the trouble.', ex2Hi: 'Unhone prayaas kiya hai.' },
    { de: 'Ohr', art: 'das', gender: 'n', plural: 'Ohren', pos: 'noun', level: 'B2', register: 'both', en: 'ear', hi: 'कान', ex: 'Sie hielt sich die Ohren zu.', exEn: 'She covered her ears.', exHi: 'Usne apne kaan band kiye.', ex2: 'Sie haben ein gutes Ohr für Musik.', ex2En: 'They have a good ear for music.', ex2Hi: 'Unke paas sangeet ke liye achha kaan hai.' },
    { de: 'Politikwissenschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'political science', hi: 'राजनीति विज्ञान', ex: 'Sie studierte Politikwissenschaft.', exEn: 'She studied political science.', exHi: 'Usne rajniti vigyaan padha.', ex2: 'Sie haben in Politikwissenschaft promoviert.', ex2En: 'They\'ve gotten a doctorate in political science.', ex2Hi: 'Unhone rajniti vigyaan mein PhD ki hai.' },
    { de: 'vielmehr', pos: 'adverb', level: 'B2', register: 'written', en: 'rather, instead', hi: 'बल्कि', ex: 'Es geht vielmehr um die Qualität.', exEn: 'It is rather about the quality.', exHi: 'Yeh bulki gunwatta ke baare mein hai.', ex2: 'Sie haben vielmehr auf Fakten vertraut.', ex2En: 'They\'ve rather relied on facts.', ex2Hi: 'Unhone bulki tathyon par bharosa kiya hai.' },
    { de: 'anfühlen', pos: 'verb', level: 'B2', register: 'both', en: 'to feel (like)', hi: 'महसूस होना', ex: 'Der Stoff fühlte sich weich an.', exEn: 'The material felt soft.', exHi: 'Saamagri narm mahsoos hui.', ex2: 'Es hat sich richtig angefühlt.', ex2En: 'It has felt right.', ex2Hi: 'Yeh sahi mahsoos hua hai.', conj: { praesens: 'fühlt an', praeteritum: 'fühlte an', perfekt: 'hat angefühlt' } },
    { de: 'angewiesen sein', pos: 'verb', level: 'B2', register: 'written', en: 'to be dependent on', hi: 'निर्भर होना', ex: 'Wir sind stark auf gute Daten angewiesen.', exEn: 'We are strongly dependent on good data.', exHi: 'Hum achhe data par bahut nirbhar hain.', ex2: 'Sie sind auf Hilfe angewiesen.', ex2En: 'They are dependent on help.', ex2Hi: 'Woh madad par nirbhar hain.', conj: { praesens: 'ist angewiesen', praeteritum: 'war angewiesen', perfekt: 'ist angewiesen gewesen' } },
    { de: 'anstehen', pos: 'verb', level: 'B2', register: 'written', en: 'to be pending, due', hi: 'लंबित होना', ex: 'Die Entscheidung steht noch an.', exEn: 'The decision is still pending.', exHi: 'Nirnay abhi bhi lambit hai.', ex2: 'Wichtige Aufgaben stehen an.', ex2En: 'Important tasks are due.', ex2Hi: 'Mahatvapurn kaam lambit hain.', conj: { praesens: 'steht an', praeteritum: 'stand an', perfekt: 'hat angestanden' } },
    { de: 'Arbeitssituation', art: 'die', gender: 'f', plural: 'Arbeitssituationen', pos: 'noun', level: 'B2', register: 'written', en: 'work situation', hi: 'कार्य स्थिति', ex: 'Die Arbeitssituation verbesserte sich.', exEn: 'The work situation improved.', exHi: 'Kaam ki sthiti behtar hui.', ex2: 'Sie haben die Arbeitssituation analysiert.', ex2En: 'They\'ve analysed the work situation.', ex2Hi: 'Unhone kaam ki sthiti ka vishleshan kiya hai.' },
    { de: 'argumentieren', pos: 'verb', level: 'B2', register: 'written', en: 'to argue, reason', hi: 'तर्क देना', ex: 'Sie argumentierte überzeugend.', exEn: 'She argued convincingly.', exHi: 'Usne manaane waala tark diya.', ex2: 'Sie haben gut argumentiert.', ex2En: 'They\'ve argued well.', ex2Hi: 'Unhone achha tark diya hai.', conj: { praesens: 'argumentiert', praeteritum: 'argumentierte', perfekt: 'hat argumentiert' } },
    { de: 'aufheben', pos: 'verb', level: 'B2', register: 'both', en: 'to lift, abolish, keep', hi: 'हटाना, रखना', ex: 'Sie hoben die Regel auf.', exEn: 'They abolished the rule.', exHi: 'Unhone niyam hataaya.', ex2: 'Sie haben den Brief aufgehoben.', ex2En: 'They\'ve kept the letter.', ex2Hi: 'Unhone patra sambhaal kar rakha hai.', conj: { praesens: 'hebt auf', praeteritum: 'hob auf', perfekt: 'hat aufgehoben' } },
    { de: 'ausfüllen', pos: 'verb', level: 'B2', register: 'both', en: 'to fill in', hi: 'भरना', ex: 'Sie füllte das Formular aus.', exEn: 'She filled in the form.', exHi: 'Usne form bhara.', ex2: 'Sie haben alle Felder ausgefüllt.', ex2En: 'They\'ve filled in all the fields.', ex2Hi: 'Unhone saare khaane bhare hain.', conj: { praesens: 'füllt aus', praeteritum: 'füllte aus', perfekt: 'hat ausgefüllt' } },
    { de: 'ausmalen', pos: 'verb', level: 'B2', register: 'both', en: 'to picture, imagine', hi: 'कल्पना करना', ex: 'Sie malte sich die Zukunft aus.', exEn: 'She pictured the future.', exHi: 'Usne bhavishya ki kalpana ki.', ex2: 'Sie haben sich das Ergebnis ausgemalt.', ex2En: 'They\'ve imagined the result.', ex2Hi: 'Unhone parinaam ki kalpana ki hai.', conj: { praesens: 'malt aus', praeteritum: 'malte aus', perfekt: 'hat ausgemalt' } },
    { de: 'befehlen', pos: 'verb', level: 'B2', register: 'written', en: 'to command, order', hi: 'आदेश देना', ex: 'Der General befahl den Rückzug.', exEn: 'The general ordered the retreat.', exHi: 'General ne peechhe hatne ka aadesh diya.', ex2: 'Sie haben nichts befohlen.', ex2En: 'They\'ve ordered nothing.', ex2Hi: 'Unhone kuch aadesh nahi diya hai.', conj: { praesens: 'befiehlt', praeteritum: 'befahl', perfekt: 'hat befohlen' } },
    { de: 'benehmen', pos: 'verb', level: 'B2', register: 'both', en: 'to behave', hi: 'व्यवहार करना', ex: 'Sie benahm sich höflich.', exEn: 'She behaved politely.', exHi: 'Usne vinamr vyavahaar kiya.', ex2: 'Sie haben sich gut benommen.', ex2En: 'They\'ve behaved well.', ex2Hi: 'Unhone achha vyavahaar kiya hai.', conj: { praesens: 'benimmt sich', praeteritum: 'benahm sich', perfekt: 'hat sich benommen' } },
    { de: 'benommen', pos: 'adjective', level: 'B2', register: 'written', en: 'dazed, numb', hi: 'सुन्न', ex: 'Sie fühlte sich benommen.', exEn: 'She felt dazed.', exHi: 'Usne sunn mahsoos kiya.', ex2: 'Sie waren nach dem Unfall benommen.', ex2En: 'They were dazed after the accident.', ex2Hi: 'Durghatna ke baad woh sunn the.' },
    { de: 'Bequemlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'comfort, convenience', hi: 'सुविधा', ex: 'Sie schätzte die Bequemlichkeit.', exEn: 'She valued the convenience.', exHi: 'Usne suvidha ki kadar ki.', ex2: 'Sie haben auf Bequemlichkeit verzichtet.', ex2En: 'They\'ve foregone comfort.', ex2Hi: 'Unhone suvidha chhodi hai.' },
    { de: 'Bereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'willingness, readiness', hi: 'तत्परता', ex: 'Die Bereitschaft des Teams ist hoch.', exEn: 'The team\'s willingness is high.', exHi: 'Team ki tatparata zyaada hai.', ex2: 'Sie haben ihre Bereitschaft gezeigt.', ex2En: 'They\'ve shown their willingness.', ex2Hi: 'Unhone apni tatparata dikhaayi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Funktionsverbgefüge?',
      body: [ 'Instead of one full verb, German often uses noun + light verb. The meaning mainly comes from the noun, while the light verb carries little lexical meaning of its own.' ],
      table: {
        head: ['Simple verb', 'Funktionsverbgefüge'],
        rows: [
          ['entscheiden', '<span class="de r-fvg">eine Entscheidung treffen</span>'],
          ['diskutieren', '<span class="de r-fvg">eine Diskussion führen</span>'],
          ['antworten', '<span class="de r-fvg">eine Antwort geben</span>']
        ]
      },
      hinglish: 'Ek poora verb use karne ki jagah German aksar <b>noun + light verb</b> use karta hai. Asli matlab noun mein hota hai, aur light verb ka apna koi khaas matlab nahi hota \u2014 woh sirf grammar ka kaam karta hai. Isliye <b>eine Entscheidung treffen</b> mein matlab "Entscheidung" se aata hai, "treffen" se nahi.'
    },
    {
      title: 'Struktur',
      body: [ 'Simple verb → formal noun + light verb, showing that the noun is the semantic center.' ],
      table: {
        head: ['Simple Verb', 'Formal'],
        rows: [
          ['entscheiden', 'eine Entscheidung treffen'],
          ['analysieren', 'eine Analyse durchführen'],
          ['beantragen', 'einen Antrag stellen (auf + Akk.)']
        ]
      },
      hinglish: 'Pattern yeh hai: simple verb ko noun banao, aur uske saath ek light verb lagao. Dhyaan do ki har noun ka apna fixed light verb hota hai \u2014 usse badla nahi jaa sakta, aur guess karne se galti ho jaati hai.'
    },
    {
      title: 'Die wichtigsten Funktionsverbgefüge',
      body: [ 'These high-frequency B2 combinations are worth memorising as fixed chunks.' ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['eine Entscheidung treffen', 'to make a decision'],
          ['eine Diskussion führen', 'to hold a discussion'],
          ['eine Analyse durchführen', 'to carry out an analysis'],
          ['einen Antrag stellen', 'to submit an application'],
          ['eine Frage stellen', 'to ask a question'],
          ['eine Antwort geben', 'to give an answer'],
          ['Kontakt aufnehmen', 'to make contact'],
          ['Einfluss haben', 'to have influence'],
          ['zur Verfügung stehen', 'to be available'],
          ['in Kraft treten', 'to come into effect'],
          ['in Betracht ziehen', 'to take into consideration'],
          ['Verantwortung übernehmen', 'to take on responsibility'],
          ['unter Druck stehen', 'to be under pressure'],
          ['zur Anwendung kommen', 'to be applied'],
          ['eine Rolle spielen', 'to play a role']
        ]
      },
      hinglish: 'Yeh combinations B2 mein bahut aate hain. Inhe poore chunk ki tarah yaad karo \u2014 noun aur uska light verb saath mein, kyunki light verb ka koi logic nahi hota.'
    },
    {
      title: 'Verb vs Funktionsverbgefüge',
      body: [ 'Comparing full sentences shows how the register shifts from everyday to formal without changing the core meaning.' ],
      table: {
        head: ['Everyday', 'Formal'],
        rows: [
          ['Wir entscheiden morgen.', 'Wir treffen morgen eine Entscheidung.'],
          ['Die Firma analysiert die Daten.', 'Die Firma führt eine Analyse der Daten durch.'],
          ['Er beantragt ein Visum.', 'Er stellt einen Antrag auf ein Visum.']
        ]
      },
      hinglish: 'Poore sentences saath rakh kar dekho \u2014 matlab wahi rehta hai, bas register everyday se formal ho jaata hai. Bolne mein simple verb hi natural lagta hai; yeh structure likhne ke liye hai.'
    },
    {
      title: 'Wie sich das Gef\u00fcge im Satz verh\u00e4lt',
      body: [
        'Two mechanical points the examples above quietly depend on. First, the light verb is the one that conjugates and takes the normal verb position \u2014 the noun just sits in the Mittelfeld as its object. Second, most of these keep an article on the noun (<i>eine</i> Entscheidung, <i>einen</i> Antrag), but the fixed prepositional ones drop it entirely (<i>in Kraft</i>, <i>zur Verf\u00fcgung</i>, <i>unter Druck</i>).'
      ],
      table: {
        head: ['Type', 'Article?', 'Example in a sentence'],
        rows: [
          ['noun + light verb', 'yes', '<span class="de">Wir treffen morgen <b>eine</b> Entscheidung.</span>'],
          ['noun + light verb', 'yes', '<span class="de">Die Firma stellt <b>einen</b> Antrag.</span>'],
          ['fixed prepositional phrase', 'no', '<span class="de">Der Vertrag tritt <b>in Kraft</b>.</span>'],
          ['fixed prepositional phrase', 'no', '<span class="de">Die Daten stehen <b>zur Verf\u00fcgung</b>.</span>']
        ]
      },
      note: 'If the light verb is separable, it still splits normally: <span class="de">Wir nehmen morgen Kontakt <b>auf</b>.</span> And in the Perfekt only the light verb changes: <span class="de">Wir haben eine Entscheidung <b>getroffen</b>.</span>',
      hinglish: 'Do mechanical baatein dhyaan mein rakho. Pehli, conjugate sirf light verb hota hai aur wahi apni normal verb position leta hai \u2014 noun Mittelfeld mein uske object ki tarah baithta hai. Doosri, zyada-tar mein noun par article rehta hai (<i>eine</i> Entscheidung, <i>einen</i> Antrag), par jo fixed prepositional wale hain unme article bilkul nahi lagta (<i>in Kraft</i>, <i>zur Verf\u00fcgung</i>, <i>unter Druck</i>). Aur agar light verb separable hai to woh normal tarike se tootta hai: <span class="de">Wir nehmen Kontakt auf.</span>'
    },
    {
      title: 'Akademisches Deutsch',
      body: [ 'These expressions dominate scientific writing because they sound objective and precise.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Untersuchung wurde durchgeführt.', 'The investigation was carried out.'],
          ['Die Ergebnisse kamen zur Anwendung.', 'The results were applied.'],
          ['Die Analyse führte zu neuen Erkenntnissen.', 'The analysis led to new insights.'],
          ['Die Entscheidung wurde getroffen.', 'The decision was made.']
        ]
      },
      hinglish: 'Yeh expressions scientific writing mein bahut aate hain, kyunki inse baat objective lagti hai \u2014 focus kaam par hota hai, karne wale par nahi.'
    },
    {
      title: 'Berufliches Deutsch',
      body: [ 'These examples reflect realistic B2 workplace situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Wir nehmen Kontakt auf.', 'We make contact.'],
          ['Die Firma stellt einen Antrag.', 'The company submits an application.'],
          ['Der Vertrag tritt morgen in Kraft.', 'The contract comes into effect tomorrow.'],
          ['Die Abteilung führt Gespräche.', 'The department holds talks.'],
          ['Das Unternehmen übernimmt Verantwortung.', 'The company takes on responsibility.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo office ke asli kaam mein aate hain \u2014 emails, meetings aur contracts mein.'
    },
    {
      title: 'Register',
      body: [ 'Funktionsverbgefüge appear constantly in scientific papers, reports, business communication, meetings, administration, legal German, contracts, and newspapers.' ],
      hinglish: 'Yeh structure scientific papers, reports, business communication, administration aur contracts mein bahut aata hai. Reading mein inhe pehchaanna zaroori hai, aur formal writing mein thoda use karo to German mature lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'The most common mistake is using "machen" or "sein" instead of the fixed light verb.' ],
      mistakes: [
        { wrong: 'eine Entscheidung machen', right: 'eine Entscheidung treffen', why: 'The fixed light verb for "Entscheidung" is "treffen", never "machen".' },
        { wrong: 'einen Antrag machen', right: 'einen Antrag stellen', why: 'The fixed light verb for "Antrag" is "stellen".' },
        { wrong: 'eine Diskussion machen', right: 'eine Diskussion führen', why: 'The fixed light verb for "Diskussion" is "führen".' },
        { wrong: 'Kontakt machen', right: 'Kontakt aufnehmen', why: 'The fixed light verb for "Kontakt" is "aufnehmen".' },
        { wrong: 'zur Verfügung sein', right: 'zur Verfügung stehen', why: 'The fixed light verb for "zur Verfügung" is "stehen", not "sein".' }
      ],
      hinglish: 'Sabse badi galti yeh hai ki har jagah <b>machen</b> ya <b>sein</b> laga diya jaata hai. German mein har noun ka apna light verb hota hai \u2014 Entscheidung ke saath <b>treffen</b>, Antrag ke saath <b>stellen</b>, Diskussion ke saath <b>f\u00fchren</b>. Yeh jodiyan yaad karni padti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Writing to a friend? Use the simple verb. Writing a report, thesis, business email, or official document? Use an appropriate Funktionsverbgefüge — but never overuse them.' ],
      note: 'Memory trick: simple verb = everyday speech. Noun + light verb = formal German. The noun carries the meaning; the verb carries the grammar.',
      hinglish: 'Dost ko likh rahe ho? Simple verb hi theek hai. Report, thesis ya business email likh rahe ho? To Funktionsverbgef\u00fcge use karo \u2014 par har sentence mein nahi, warna text bhaari aur bureaucratic lagne lagta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Bürokommunikation: Wie man professionell Auskunft gibt',
    titleEn: 'Office communication: how to give professional information',
    tokens: [
      { w: 'Kundenanfragen', role: 'plain', en: 'customer inquiries', hi: 'ग्राहक पूछताछ', type: 'Noun · plural' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'stets', role: 'plain', en: 'always', hi: 'हमेशा', type: 'Adverb', why: 'stets (this chapter, recycled).' },
      { w: 'zeitnah', role: 'plain', en: 'promptly', hi: 'शीघ्र', type: 'Adjective' },
      { w: 'Auskunft', role: 'r-verb', en: 'information (Funktionsverbgefüge)', hi: 'जानकारी (Funktionsverbgefüge)', type: 'Noun · fem. (Teil des Funktionsverbgefüges)', why: '"Auskunft geben" = to inform: a fixed noun+light-verb combination (Funktionsverbgefüge) that functions like a single verb (this chapter).' },
      { w: 'erhalten', role: 'plain', en: 'receive (Satzende)', hi: 'प्राप्त करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Diskussionsbedarf', role: 'plain', en: 'need for discussion (Satzende)', hi: 'चर्चा की आवश्यकता (Satzende)', type: 'Noun · masc.', why: 'der Diskussionsbedarf (this chapter).' },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'unmittelbar', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adjective' },
      { w: 'in', role: 'r-verb', en: '(Funktionsverbgefüge)', hi: '(Funktionsverbgefüge)', type: 'Preposition (Teil des Funktionsverbgefüges)', why: '"in Kontakt treten" = to make contact: another noun+verb pairing that acts as one meaningful unit (this chapter).' },
      { w: 'Kontakt', role: 'r-verb', en: 'contact (Funktionsverbgefüge)', hi: 'संपर्क (Funktionsverbgefüge)', type: 'Noun · masc. (Teil des Funktionsverbgefüges)' },
      { w: 'treten', role: 'plain', en: 'come into (Satzende)', hi: 'में आना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Führungskräfte', role: 'plain', en: 'managers', hi: 'प्रबंधक', type: 'Noun · plural' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'ihren', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Mitarbeitern', role: 'plain', en: 'employees', hi: 'कर्मचारियों', type: 'Noun · plural' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'Unterstützung', role: 'r-verb', en: 'support (Funktionsverbgefüge)', hi: 'सहायता (Funktionsverbgefüge)', type: 'Noun · fem. (Teil des Funktionsverbgefüges)', why: '"Unterstützung anbieten" — a further Funktionsverbgefüge, common in formal workplace language (this chapter).' },
      { w: 'anbieten', role: 'plain', en: 'offer (Satzende)', hi: 'प्रदान करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'gute', role: 'plain', en: 'good', hi: 'अच्छी', type: 'Adjective' },
      { w: 'Kommunikationsfähigkeit', role: 'plain', en: 'communication ability (Satzende)', hi: 'संचार क्षमता (Satzende)', type: 'Noun · fem.', why: 'die Kommunikationsfähigkeit (this chapter).' },
      { w: 'nimmt', role: 'r-verb', en: '(Funktionsverbgefüge)', hi: '(Funktionsverbgefüge)', type: 'Verb (Teil des Funktionsverbgefüges)', why: '"Rücksicht nehmen" = to take consideration: another light-verb construction (this chapter).' },
      { w: 'dabei', role: 'plain', en: 'in doing so', hi: 'इस दौरान', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Bereitschaft', role: 'plain', en: 'willingness (Satzende)', hi: 'तत्परता (Satzende)', type: 'Noun · fem.', why: 'die Bereitschaft (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Gegenübers', role: 'plain', en: 'counterpart (gen., Satzende)', hi: 'सामने वाले (gen., Satzende)', type: 'Noun · neut.' },
      { w: 'Rücksicht', role: 'r-verb', en: 'consideration (Funktionsverbgefüge, Satzende)', hi: 'ध्यान (Funktionsverbgefüge, Satzende)', type: 'Noun · fem. (Teil des Funktionsverbgefüges, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'Verantwortung', role: 'r-verb', en: 'responsibility (Funktionsverbgefüge)', hi: 'ज़िम्मेदारी', type: 'Noun · fem. (Teil des Funktionsverbgefüges)', why: '"Verantwortung übernehmen" is a fixed noun+verb pair (Funktionsverbgefüge) meaning simply "to take responsibility" (this chapter).' },
      { w: 'übernimmt', role: 'r-verb', en: 'takes on (Satzende)', hi: 'लेता है (Satzende)', type: 'Verb · übernehmen (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'bringt', role: 'r-verb', en: 'expresses (Funktionsverbgefüge)', hi: 'व्यक्त करता है', type: 'Verb · zum Ausdruck bringen', why: '"zum Ausdruck bringen" = to express — another Funktionsverbgefüge (this chapter).' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'eigene', role: 'plain', en: 'own', hi: 'अपने', type: 'Adjective' },
      { w: 'Ideen', role: 'plain', en: 'ideas', hi: 'विचार', type: 'Noun · plural' },
      { w: 'zum', role: 'r-verb', en: 'to (Funktionsverbgefüge)', hi: '', type: 'Contraction · zu dem' },
      { w: 'Ausdruck', role: 'r-verb', en: 'expression (Satzende, Funktionsverbgefüge)', hi: '(Satzende)', type: 'Noun · masc. (Teil des Funktionsverbgefüges, Satzende)' },
      { w: '.', plain: true },
      { w: 'Am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'trifft', role: 'r-verb', en: '(Funktionsverbgefüge)', hi: '(Funktionsverbgefüge)', type: 'Verb (Teil des Funktionsverbgefüges)', why: '"eine Entscheidung treffen" = to make a decision — one more common Funktionsverbgefüge (this chapter).' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'seine', role: 'plain', en: 'its', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Entscheidung', role: 'r-verb', en: 'decision (Funktionsverbgefüge, Satzende)', hi: 'फ़ैसला (Satzende)', type: 'Noun · fem. (Teil des Funktionsverbgefüges, Satzende)' },
      { w: 'gemeinsam', role: 'plain', en: 'together (Satzende)', hi: 'साथ में (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Vorschläge', role: 'plain', en: 'suggestions', hi: 'सुझाव', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Belegschaft', role: 'plain', en: 'workforce (Satzende)', hi: 'कर्मचारियों (Satzende)', type: 'Noun · fem.' },
      { w: 'finden', role: 'r-verb', en: 'find (Funktionsverbgefüge)', hi: 'ध्यान पाते हैं', type: 'Verb · Berücksichtigung finden', why: '"Berücksichtigung finden" = to be taken into account — a further fixed noun+verb pair (this chapter).' },
      { w: 'dabei', role: 'plain', en: 'thereby', hi: 'इसमें', type: 'Adverb' },
      { w: 'stets', role: 'plain', en: 'always', hi: 'हमेशा', type: 'Adverb' },
      { w: 'Berücksichtigung', role: 'r-verb', en: 'consideration (Satzende, Funktionsverbgefüge)', hi: '(Satzende)', type: 'Noun · fem. (Teil des Funktionsverbgefüges, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Customer inquiries should always be answered promptly. If discussion is needed, one should make contact immediately. Managers should moreover offer their employees support. Good communication ability takes into consideration the counterpart\u2019s willingness. Whoever takes on responsibility in a team also expresses their own ideas. In the end, every team makes its decisions together. Suggestions from the workforce are always taken into account in this.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_054_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Karla, bevor wir in die Besprechung gehen — nimmst du meine Argumente überhaupt in Betracht?', en: 'Karla, before we go into the meeting — are you even taking my arguments into consideration?' },
      { id: 'B2_054_L002', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Natürlich nehme ich Rücksicht darauf, aber ich muss auch eine Entscheidung treffen.', en: 'Of course I\'m taking that into account, but I also have to make a decision.' },
      { id: 'B2_054_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verständlich. Ich setze mein Vertrauen einfach in die Diskussion.', en: 'Understandable. I\'ll just put my trust in the discussion.' },
      { id: 'B2_054_L004', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, dann lass uns einen Beitrag zur Lösung leisten, statt uns zu streiten.', en: 'Good, then let\'s make a contribution to the solution instead of arguing.' }
    ],
    transcript: 'Karla, bevor wir in die Besprechung gehen — nimmst du meine Argumente überhaupt in Betracht? Natürlich nehme ich Rücksicht darauf, aber ich muss auch eine Entscheidung treffen. Verständlich. Ich setze mein Vertrauen einfach in die Diskussion. Gut, dann lass uns einen Beitrag zur Lösung leisten, statt uns zu streiten.',
    translation: 'Karla, before we go into the meeting — are you even taking my arguments into consideration? Of course I\'m taking that into account, but I also have to make a decision. Understandable. I\'ll just put my trust in the discussion. Good, then let\'s make a contribution to the solution instead of arguing.',
    tokens: [
      { w: 'Karla' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'in' },
      { w: 'die' },
      { w: 'Besprechung' },
      { w: 'gehen' },
      { w: '—', plain: true },
      { w: 'nimmst' },
      { w: 'du' },
      { w: 'meine' },
      { w: 'Argumente' },
      { w: 'überhaupt' },
      { w: 'in' },
      { w: 'Betracht' },
      { w: '?', plain: true },
      { w: 'Natürlich' },
      { w: 'nehme' },
      { w: 'ich' },
      { w: 'Rücksicht' },
      { w: 'darauf' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'muss' },
      { w: 'auch' },
      { w: 'eine' },
      { w: 'Entscheidung' },
      { w: 'treffen' },
      { w: '.', plain: true },
      { w: 'Verständlich' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'setze' },
      { w: 'mein' },
      { w: 'Vertrauen' },
      { w: 'einfach' },
      { w: 'in' },
      { w: 'die' },
      { w: 'Diskussion' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'einen' },
      { w: 'Beitrag' },
      { w: 'zur' },
      { w: 'Lösung' },
      { w: 'leisten' },
      { w: ',', plain: true },
      { w: 'statt' },
      { w: 'uns' },
      { w: 'zu' },
      { w: 'streiten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss Karla ihrer Aussage nach machen?', qEn: 'What does Karla say she must do?', options: ['eine Entscheidung treffen', 'nichts tun', 'sich streiten', 'warten'], optionsEn: ['make a decision', 'do nothing', 'argue', 'wait'], answer: 0,
        explain: '"Ich muss auch eine Entscheidung treffen."' },
      { q: 'Was bringt Timo in die Diskussion ein?', qEn: 'What does Timo put in the discussion?', options: ['sein Geld', 'sein Vertrauen', 'seine Zeit', 'seine Meinung'], optionsEn: ['his money', 'his trust', 'his time', 'his opinion'], answer: 1,
        explain: '"Ich setze mein Vertrauen einfach in die Diskussion."' }
    ]
  },

  speaking: [
    { task: "Frag deine Kollegin vor der Besprechung nach deinen Argumenten.", taskEn: "Before the meeting, ask your colleague about your arguments.", de: "Nimmst du meine Argumente überhaupt in Betracht?", en: "Are you taking my arguments into consideration at all?" },
    { task: "Sie sagt, sie nehme Rücksicht darauf. Antworte in ihrem Ton.", taskEn: "She says she's taking them into account. Answer in her tone.", de: "Ich nehme Rücksicht darauf, aber ich muss auch eine Entscheidung treffen.", en: "I'm taking that into account, but I also have to make a decision." },
    { task: "Deine Chefin fragt, wie ihr im Projekt vorgegangen seid.", taskEn: "Your boss asks how you proceeded in the project.", de: "Wir haben eine Untersuchung durchgeführt und Kritik geübt.", en: "We carried out a study and voiced criticism." },
    { task: "Ein Kollege fragt, was in der Sitzung ansteht.", taskEn: "A colleague asks what's coming up in the meeting.", de: "Ich stelle einen Antrag, und dann treffen wir eine Vereinbarung.", en: "I'll put forward a motion, and then we'll make an agreement." },
    { task: "Rollenspiel: Ihr leitet die Besprechung.", taskEn: "Role-play: you chair the meeting.", de: "Wir ziehen zwei Standorte in Betracht. — Und wir übernehmen die Verantwortung für das Lager.", en: "We're considering two locations. — And we'll take responsibility for the warehouse." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite formally (6-8 sentences): Take an informal email and rewrite it using appropriate Funktionsverbgefüge.\n\nTASK 2 — Company report (8-10 sentences): Write a formal report using at least 12 different Funktionsverbgefüge (e.g. eine Entscheidung treffen, eine Analyse durchführen, Kontakt aufnehmen, Verantwortung übernehmen).',
    starters: ['Wir treffen ...', 'Die Firma führt ...'],
    placeholder: 'Wir treffen morgen eine Entscheidung. Die Firma führt eine Analyse durch. Wir nehmen Kontakt auf.',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the correct Funktionsverbgefüge for "entscheiden"?',
      options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung sein'],
      answer: 0,
      explain: '"treffen" is the fixed light verb for "Entscheidung" — never "machen" or "sein".'
    },
    gap: {
      sentence: ['Wir ', ' Kontakt mit dem Kunden auf.'],
      gaps: [ { answer: 'nehmen', accepts: ['nehmen'] } ],
      explain: '"Kontakt aufnehmen" uses "nehmen" as the light verb, with "auf" as the separable prefix.'
    },
    match: {
      q: 'Match each noun to its fixed light verb.',
      pairs: [
        { noun: 'Entscheidung', art: 'treffen' },
        { noun: 'Antrag', art: 'stellen' },
        { noun: 'Diskussion', art: 'führen' },
        { noun: 'Antwort', art: 'geben' }
      ]
    },
    builder: {
      target: 'Build: "We take on responsibility." (Funktionsverbgefüge)',
      bank: ['Wir', 'übernehmen', 'Verantwortung', '.'],
      answer: ['Wir', 'übernehmen', 'Verantwortung', '.'],
      roles: { 'übernehmen': 'r-fvg', 'Verantwortung': 'r-fvg' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wir nehmen Kontakt.',
      right: 'Wir nehmen Kontakt auf.',
      explain: '"Kontakt aufnehmen" is a separable-verb Funktionsverbgefüge — the prefix "auf" must appear at the end of the clause.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is a Funktionsverbgefüge?', options: ['A noun + light verb combination replacing a simple verb', 'A type of modal verb', 'An idiom with no productive grammar'], answer: 0,
      explain: 'Funktionsverbgefüge are fixed noun + light-verb combinations used for formal register.' },
    { q: 'Which light verb pairs with "Entscheidung"?', options: ['treffen', 'machen', 'sein'], answer: 0,
      explain: '"eine Entscheidung treffen" is the fixed, correct combination.' },
    { q: 'Which light verb pairs with "Antrag"?', options: ['stellen', 'machen', 'geben'], answer: 0,
      explain: '"einen Antrag stellen" is the fixed, correct combination.' },
    { q: 'What does "zur Verfügung stehen" mean?', options: ['To be available', 'To stand somewhere', 'To provide something'], answer: 0,
      explain: 'This is a fixed Funktionsverbgefüge meaning "to be available".' },
    { q: 'Where do Funktionsverbgefüge appear most often?', options: ['Formal writing: reports, contracts, academic papers', 'Casual conversations with close friends', 'Text messages'], answer: 0,
      explain: 'They dominate scientific, business, and administrative German.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-fvg', html: 'Funktionsverbgefüge (noun + light verb) replace a simple verb for formal register: entscheiden → eine Entscheidung treffen.' },
    { c: 'r-fvg', html: 'Each noun has its OWN fixed light verb — never substitute "machen" or "sein" (eine Entscheidung treffen, not eine Entscheidung machen).' },
    { c: 'r-fvg', html: 'Funktionsverbgefüge dominate scientific papers, reports, business communication, and Goethe B2 formal writing — but should never replace every verb.' }
  ],
  revisionTips: [
    'For every common B2 verb you know, practise finding its Funktionsverbgefüge equivalent and building a formal sentence.',
    'Scan a business report or academic article for noun + light-verb combinations — count how many you find and identify the base verb.',
    'Practise the most common light verbs (treffen, führen, stellen, geben, aufnehmen, ziehen, übernehmen) and which nouns they pair with.'
  ]
};

window.CHAPTER = CHAPTER;
