/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 7
   "Präpositionen mit Genitiv" — formal/academic/legal Genitive
   prepositions (trotz, während, wegen, aufgrund, infolge,
   mittels, anhand, hinsichtlich, zugunsten, kraft, etc.),
   register scale, and stylistic alternatives. NOT basic
   Genitive case or article declension.
   Dialogue: Frau Bruns and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-07-praepositionen-mit-genitiv',
  phase: 'C1 · Kasus & Präpositionen',
  number: 7,
  title: 'Präpositionen mit Genitiv',
  titleEn: 'Genitive prepositions in formal German',
  description: 'B2 asks "Which preposition fits?" C1 asks "Which Genitive preposition sounds the most formal and precise?" Formal German is recognized instantly through correct Genitive prepositions.',
  xp: 350,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 8, title: 'Anspruchsvolle Präpositionen', titleEn: 'Advanced prepositional expressions' , href: 'chapter-c1-08-anspruchsvolle-praepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Formal German is recognized <em>instantly</em> through Genitive prepositions.',
    intro: 'Timo\'s application was rejected due to the noise, and Frau Bruns explains the construction regulations behind it — every objection and justification dressed in a formal Genitiv preposition: aufgrund, hinsichtlich, ungeachtet.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See trotz, während, aufgrund, hinsichtlich, mittels, zugunsten and more used correctly in formal register'
    ],
    scene: 'Verfassen eines Forschungsberichts',
    femaleSpeakers: ['Frau Bruns'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Aufgrund', role: 'r-preposition', en: 'due to', hi: 'के कारण', pron: 'OWF-grunt', type: 'Preposition + genitive', why: 'aufgrund + Genitiv = due to, formal genitive preposition (this chapter).', ex: 'Aufgrund des Lärms wurde der Antrag abgelehnt.', exEn: 'Due to the noise, the application was rejected.' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Lärms', role: 'r-dativ', en: 'noise (gen.)', hi: 'शोर के', pron: 'LAIRMS', type: 'Noun · masc. genitive' },
        { w: 'wurde', role: 'r-verb', en: 'was', hi: 'किया गया', pron: 'VUR-duh', type: 'Verb · werden (Passiv Präteritum)' },
        { w: 'mein', role: 'r-subject', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Antrag', role: 'r-subject', en: 'application', hi: 'अनुरोध', pron: 'AN-trahk', type: 'Noun · masc.' },
        { w: 'abgelehnt', role: 'r-verb', en: 'rejected', hi: 'अस्वीकृत', pron: 'AP-ge-laynt', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Due to the noise, was my application rejected?', hi: 'Shor ke kaaran, kya mera anurodh asveekrit kar diya gaya?' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'hinsichtlich', role: 'r-preposition', en: 'regarding', hi: 'के संबंध में', pron: 'hin-ZIKHT-likh', type: 'Preposition + genitive', why: 'hinsichtlich + Genitiv = regarding, formal genitive preposition (this chapter).', ex: 'Hinsichtlich der Bauvorschriften gibt es Bedenken.', exEn: 'Regarding the construction regulations there are concerns.' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Bauvorschriften', role: 'r-dativ', en: 'construction regulations (gen.)', hi: 'निर्माण नियमों के', pron: 'BOW-for-shrif-ten', type: 'Noun · plural genitive', why: 'die Bauvorschrift (this chapter).', ex: 'die Bauvorschriften' },
        { w: 'gibt', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'ebenfalls', role: 'r-akkusativ', en: 'likewise', hi: 'साथ ही', pron: 'AY-ben-fals', type: 'Adverb' },
        { w: 'Bedenken', role: 'r-akkusativ', en: 'concerns', hi: 'चिंताएं', pron: 'be-DEN-ken', type: 'Noun · plural', why: 'das Bedenken (this chapter).', ex: 'Bedenken haben' },
        { w: '.', plain: true }
      ], en: 'Yes, regarding the construction regulations there are likewise concerns.', hi: 'Haan, nirmaan niyamon ke sambandh mein saath hi chintaayen hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Mittels', role: 'r-preposition', en: 'by means of', hi: 'के ज़रिए', pron: 'MI-tels', type: 'Preposition + genitive', why: 'mittels + Genitiv = by means of, formal genitive preposition (this chapter).', ex: 'Mittels eines Gutachtens könnte ich das klären.', exEn: 'By means of an expert report I could clarify that.' },
        { w: 'eines', role: 'r-dativ', en: 'an (neut. gen.)', hi: 'एक', pron: 'EYE-nes', type: 'Article · genitive' },
        { w: 'Gutachtens', role: 'r-dativ', en: 'expert report (gen.)', hi: 'विशेषज्ञ रिपोर्ट के', pron: 'GOOT-akh-tens', type: 'Noun · neut. genitive', why: 'das Gutachten (this chapter).', ex: 'ein Gutachten' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'सकता हूँ', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'klären', role: 'r-verb', en: 'clarify', hi: 'स्पष्ट कर सकता', pron: 'KLAI-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'By means of an expert report I could clarify that.', hi: 'Vishesagya report ke zariye main yeh spasht kar sakta hoon.' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Ungeachtet', role: 'r-preposition', en: 'regardless of', hi: 'के बावजूद', pron: 'UN-ge-akh-tet', type: 'Preposition + genitive', why: 'ungeachtet + Genitiv = regardless of, formal genitive preposition (this chapter).', ex: 'Ungeachtet eines Gutachtens bleibt die Entscheidung bestehen.', exEn: 'Regardless of an expert report, the decision remains.' },
        { w: 'eines', role: 'r-dativ', en: 'an (neut. gen.)', hi: 'एक', pron: 'EYE-nes', type: 'Article · genitive' },
        { w: 'Gutachtens', role: 'r-dativ', en: 'expert report (gen.)', hi: 'विशेषज्ञ रिपोर्ट के', pron: 'GOOT-akh-tens', type: 'Noun · neut. genitive' },
        { w: 'bleibt', role: 'r-verb', en: 'remains', hi: 'बनी रहती है', pron: 'BLYPT', type: 'Verb · bleiben' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Entscheidung', role: 'r-subject', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: 'bestehen', role: 'r-verb', en: 'stand', hi: 'बना रहना', pron: 'be-SHTAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Regardless of an expert report, the decision remains standing.', hi: 'Vishesagya report ke bawajood, faisla bana rehta hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Kraft', role: 'r-preposition', en: 'by virtue of', hi: 'के बल पर', pron: 'kraft', type: 'Preposition + genitive', why: 'kraft + Genitiv = by virtue of, very formal legal genitive preposition (this chapter).', ex: 'Kraft ihres Amtes kann sie das entscheiden.', exEn: 'By virtue of her office she can decide that.' },
        { w: 'welchen', role: 'r-dativ', en: 'which (neut. gen.)', hi: 'किस', pron: 'VEL-khen', type: 'Determiner · genitive' },
        { w: 'Gesetzes', role: 'r-dativ', en: 'law (gen.)', hi: 'कानून के', pron: 'ge-ZAY-tses', type: 'Noun · neut. genitive', why: 'das Gesetz (recycled B2/C1).', ex: 'kraft welchen Gesetzes' },
        { w: 'darf', role: 'r-modalverb', en: 'may', hi: 'सकते हैं', pron: 'darf', type: 'Modal · dürfen' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Stadt', role: 'r-subject', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'ablehnen', role: 'r-verb', en: 'reject', hi: 'अस्वीकार करना', pron: 'AP-lay-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'By virtue of which law may the city reject that?', hi: 'Kis kaanoon ke bal par shahar ise asveekaar kar sakta hai?' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Anlässlich', role: 'r-preposition', en: 'on the occasion of', hi: 'के अवसर पर', pron: 'AN-les-likh', type: 'Preposition + genitive', why: 'anlässlich + Genitiv = on the occasion of, formal genitive preposition (this chapter).', ex: 'Anlässlich der letzten Sitzung wurde das Gesetz erklärt.', exEn: 'On the occasion of the last meeting the law was explained.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'letzten', role: 'r-dativ', en: 'last', hi: 'पिछली', pron: 'LETS-ten', type: 'Adjective · genitive' },
        { w: 'Sitzung', role: 'r-dativ', en: 'meeting (gen.)', hi: 'बैठक के', pron: 'ZIT-sung', type: 'Noun · fem. genitive' },
        { w: 'wurde', role: 'r-verb', en: 'was', hi: 'था', pron: 'VUR-duh', type: 'Verb · werden (Passiv Präteritum)' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Gesetz', role: 'r-subject', en: 'law', hi: 'कानून', pron: 'ge-ZETS', type: 'Noun · neut.' },
        { w: 'erklärt', role: 'r-verb', en: 'explained', hi: 'समझाया गया', pron: 'er-KLAIRT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'On the occasion of the last meeting the law was explained.', hi: 'Pichhli baithak ke avsar par kaanoon samjhaya gaya tha.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'करूंगा', pron: 'VAIR-duh', type: 'Verb · werden (Futur I)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'meinem', role: 'r-dativ', en: 'my (masc. dat.)', hi: 'मेरे', pron: 'MY-naym', type: 'Possessive · dative' },
        { w: 'Anwalt', role: 'r-dativ', en: 'lawyer (dat.)', hi: 'वकील के साथ', pron: 'AN-valt', type: 'Noun · masc. dat.' },
        { w: 'besprechen', role: 'r-verb', en: 'discuss', hi: 'चर्चा करना', pron: 'be-SHPRE-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I will discuss that with my lawyer.', hi: 'Dhanyavaad! Main yeh apne vakeel ke saath charcha karunga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks: <b>"Which preposition fits?"</b> C1 asks: <b>"Which Genitive preposition sounds the most formal and precise?"</b> Formal German is recognized instantly through correct <span class="de r-genitiv">Genitivpräpositionen</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PRÄPOSITIONEN MIT GENITIV at C1 level — formal/academic/legal Genitive prepositions, NOT basic Genitive case or article declension (already mastered). Covered prepositions: trotz, während, wegen, aufgrund, infolge, mittels, anhand, innerhalb, außerhalb, oberhalb, unterhalb, diesseits, jenseits, beiderseits, längs, kraft, ungeachtet, hinsichtlich, anlässlich, zugunsten — each with meaning, register (neutral/formal/academic/legal), and common collocations (aufgrund der Studie, während des Gesprächs, trotz des Erfolgs, zugunsten der Umwelt, anlässlich des Jubiläums, hinsichtlich der Qualität, kraft Gesetzes, mittels einer Analyse). Key stylistic point: formal/academic writing prefers Genitive prepositions over colloquial Dativ alternatives (e.g. "aufgrund des Wetters" not "wegen dem Wetter" in formal register). ' +
    'Do NOT expect or require basic Genitive case explanations or article declension tables — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: "wegen dem" / "trotz den" (colloquial Dativ after a Genitive preposition, wrong in formal register); "mittels von" (redundant — mittels already takes Genitive, no "von" needed); "innerhalb zu" or "außerhalb von + Genitiv" (wrong case-marking combinations); wrong article case after any of these prepositions. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag colloquial Dativ forms after Genitive prepositions (wegen dem, trotz den) ONLY when the register is meant to be formal/academic — acknowledge that "wegen dem" is common and acceptable in casual spoken German.\n' +
    '- Check that the noun phrase after each Genitive preposition is in the Genitive case with correct article/adjective endings.\n' +
    '- Flag "mittels von", "innerhalb von + Genitiv" (redundant von), or other case-marking redundancies.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner used Genitive prepositions consistently for the formal register the text calls for.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your writing is instantly recognizable as formal, precise German. Ready for adjective and participial constructions next.',
    mid: 'Good. Re-read the Master Table of Genitive prepositions once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: correct Genitive prepositions are one of the strongest signals of advanced written German.'
  },

  parserSentence: [
    { w: 'Aufgrund', role: 'r-genitiv' }, { w: 'des', role: 'plain' }, { w: 'schlechten', role: 'plain' }, { w: 'Wetters', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: correct Genitive prepositions are one of the strongest signals of advanced written German.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frau Bruns and Timo upgrade their research report from colloquial phrasing into formal Genitive prepositions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master core Genitive prepositions, register differences, and stylistic alternatives.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university research article and a newspaper report, identifying Genitive prepositions and register.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Genitive prepositions and register in a university lecture and an official radio report.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give formal presentations and discuss research using authentic Genitive prepositions.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2 text into formal C1 German, and write a 350-word formal report.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct Genitive preposition, register selection, and collocation matching.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 350 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 8 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Genitive preposition selection drills, collocation matching, and a full formal report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Register Scale, Decision Flowchart, and collocation reference sheet.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Aufgrund des schlechten Wetters fiel die Veranstaltung aus.', text: 'Replace colloquial "wegen dem" with formal "aufgrund + Genitiv"' },
    { de: 'Trotz der methodischen Einschränkungen bleiben die Ergebnisse überzeugend.', text: 'Express concession formally with "trotz + Genitiv"' },
    { de: 'Mittels einer quantitativen Analyse untersuchten sie den Trend.', text: 'Express method with the academic "mittels + Genitiv"' },
    { de: 'Hinsichtlich der Qualität gibt es noch Fragen.', text: 'Introduce a topic formally with "hinsichtlich + Genitiv"' },
    { de: 'Zugunsten der Klarheit sollten wir die Struktur vereinfachen.', text: 'Express benefit/preference with "zugunsten + Genitiv"' }
  ],

  vocab: [
    { de: 'aufgrund', pos: 'preposition', level: 'C1', register: 'written', en: 'on the basis of, because of', hi: 'के आधार पर', ex: 'Aufgrund der Studie wurde das Verfahren geändert.', exEn: 'On the basis of the study, the procedure was changed.', exHi: 'Adhyayan ke aadhaar par, prakriya badli gayi.', ex2: 'Sie haben aufgrund der Ergebnisse neu entschieden.', ex2En: 'They\'ve made a new decision on the basis of the results.', ex2Hi: 'Unhone parinaamon ke aadhaar par naya faisla liya hai.' },
    { de: 'hinsichtlich', pos: 'preposition', level: 'C1', register: 'written', en: 'regarding, with respect to', hi: 'के संबंध में', ex: 'Hinsichtlich der Kosten gibt es noch offene Fragen.', exEn: 'Regarding the costs, there are still open questions.', exHi: 'Lagat ke sambandh mein abhi bhi khule sawaal hain.', ex2: 'Sie haben hinsichtlich des Projekts Bedenken geäußert.', ex2En: 'They\'ve raised concerns regarding the project.', ex2Hi: 'Unhone project ke sambandh mein chintaayein vyakt ki hain.' },
    { de: 'mittels', pos: 'preposition', level: 'C1', register: 'written', en: 'by means of', hi: 'के माध्यम से', ex: 'Mittels einer neuen Methode konnte das Problem gelöst werden.', exEn: 'By means of a new method, the problem could be solved.', exHi: 'Ek nayi vidhi ke maadhyam se, samasya hal ki jaa saki.', ex2: 'Sie haben das Ergebnis mittels statistischer Analyse überprüft.', ex2En: 'They\'ve verified the result by means of statistical analysis.', ex2Hi: 'Unhone sankhyaki vishleshan ke maadhyam se parinaam ki jaanch ki hai.' },
    { de: 'zugunsten', pos: 'preposition', level: 'C1', register: 'written', en: 'in favour of', hi: 'के पक्ष में', ex: 'Die Entscheidung fiel zugunsten der Mitarbeiter aus.', exEn: 'The decision was made in favour of the employees.', exHi: 'Faisla employees ke paksha mein aaya.', ex2: 'Sie haben zugunsten der Umwelt gehandelt.', ex2En: 'They\'ve acted in favour of the environment.', ex2Hi: 'Unhone paryaavaran ke paksha mein kaam kiya hai.' },
    { de: 'ungeachtet', pos: 'preposition', level: 'C1', register: 'written', en: 'regardless of', hi: 'की परवाह किए बिना', ex: 'Ungeachtet der Kritik setzte das Team die Arbeit fort.', exEn: 'Regardless of the criticism, the team continued the work.', exHi: 'Aalochana ki parvaah kiye bina, team ne kaam jaari rakha.', ex2: 'Sie haben ungeachtet der Risiken weitergemacht.', ex2En: 'They\'ve continued regardless of the risks.', ex2Hi: 'Unhone jokhimon ki parvaah kiye bina jaari rakha hai.' },
    { de: 'anlässlich', pos: 'preposition', level: 'C1', register: 'written', en: 'on the occasion of', hi: 'के अवसर पर', ex: 'Anlässlich des Jubiläums fand eine Feier statt.', exEn: 'On the occasion of the anniversary, a celebration took place.', exHi: 'Varshgaanth ke avsar par, ek samaaroh hua.', ex2: 'Sie haben anlässlich der Konferenz einen Vortrag gehalten.', ex2En: 'They\'ve given a talk on the occasion of the conference.', ex2Hi: 'Unhone sammelan ke avsar par ek vyaakhyaan diya hai.' },
    { de: 'kraft', pos: 'preposition', level: 'C1', register: 'written', en: 'by virtue of', hi: 'के बल पर', ex: 'Kraft seines Amtes unterzeichnete er den Vertrag.', exEn: 'By virtue of his office, he signed the contract.', exHi: 'Apne pad ke bal par, usne anubandh par hastaakshar kiye.', ex2: 'Sie haben kraft Gesetzes gehandelt.', ex2En: 'They\'ve acted by virtue of the law.', ex2Hi: 'Unhone kaanoon ke bal par kaam kiya hai.' },
    { de: 'die Einschränkung', art: 'die', gender: 'f', plural: 'Einschränkungen', pos: 'noun', level: 'C1', register: 'written', en: 'limitation, restriction', hi: 'सीमा', ex: 'Trotz methodischer Einschränkungen bleiben die Ergebnisse gültig.', exEn: 'Despite methodological limitations, the results remain valid.', exHi: 'Kaaryapranaali seemaaon ke bawajood, parinaam valid rehte hain.', ex2: 'Sie haben die Einschränkung deutlich benannt.', ex2En: 'They\'ve clearly named the limitation.', ex2Hi: 'Unhone seema ko spasht roop se naam diya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum Genitivpräpositionen zählen',
      body: [ 'Spoken German → Formal German → Academic German → Legal German. Genitive prepositions appear far more frequently in written C1 German than in conversation.' ],
      hinglish: 'Yeh prepositions bolchaal mein kam aate hain aur likhi hui German mein bahut. Isliye inhe sabse pehle <b>pehchaanne</b> ke liye seekho \u2014 reading mein yeh har jagah milenge \u2014 aur phir writing mein use karo, kyunki wahin se formal tone banta hai.'
    },
    {
      title: 'Kern-Genitivpräpositionen',
      body: [ 'Core set: trotz, während, wegen, aufgrund, infolge, mittels, anhand, innerhalb, außerhalb, oberhalb, unterhalb, diesseits, jenseits, beiderseits, längs, kraft, ungeachtet, hinsichtlich, anlässlich, zugunsten — each with distinct meaning, register, and collocations.' ],
      hinglish: 'Bees prepositions hain, par sab ek jaise zaroori nahi. Rozmarra ki formal writing mein <b>trotz, w\u00e4hrend, wegen, aufgrund, innerhalb, au\u00dferhalb</b> hi sabse zyada kaam aate hain \u2014 inhe likhne ke liye pakka karo. <b>kraft</b> aur <b>ungeachtet</b> legal texts mein aate hain, aur unhe sirf samajhna kaafi hai.'
    },
    {
      title: 'Die Genitivformen selbst',
      body: [
        'Choosing the right preposition is only half the work \u2014 the noun phrase after it has to be built correctly, and that is where most marks are lost.',
        'Masculine and neuter take <b>des</b> plus <b>-s</b> or <b>-es</b> on the noun. Feminine and plural take <b>der</b> and the noun stays unchanged.'
      ],
      table: {
        head: ['Gender', 'Article', 'Noun', 'Example'],
        rows: [
          ['masculine', 'des', '+ -s / -es', '<span class="de">aufgrund des Bericht<b>s</b></span>'],
          ['neuter', 'des', '+ -s / -es', '<span class="de">innerhalb des Geb\u00e4ude<b>s</b></span>'],
          ['feminine', 'der', 'unchanged', '<span class="de">w\u00e4hrend der Sitzung</span>'],
          ['plural', 'der', 'unchanged', '<span class="de">trotz der Probleme</span>'],
          ['no article (indefinite pl.)', '\u2014', 'often <b>von</b> + Dativ', '<span class="de">aufgrund von Problemen</span>']
        ]
      },
      note: 'Use <b>-es</b> after one-syllable nouns and those ending in -s, -\u00df, -z, -tz (<i>des Kindes</i>, <i>des Gesetzes</i>); otherwise <b>-s</b>. And when there is no article to carry the Genitiv \u2014 a bare plural or a number \u2014 German switches to <b>von</b> + Dativ: <i>aufgrund von Problemen</i>, <i>innerhalb von drei Tagen</i>.',
      hinglish: 'Sahi preposition chun lena aadha kaam hai \u2014 uske baad wala noun phrase bhi sahi banana padta hai, aur asli marks yahin katte hain. Masculine aur neuter mein <b>des</b> aata hai aur noun par <b>-s</b> ya <b>-es</b> lagta hai. Feminine aur plural mein <b>der</b> aata hai aur noun waisa hi rehta hai. Ek kaam ki baat \u2014 jab article hai hi nahi (khaali plural ya koi number), tab German <b>von</b> + Dativ par chala jaata hai: <span class="de">aufgrund von Problemen</span>, <span class="de">innerhalb von drei Tagen</span>. Isliye <i>von</i> hamesha galat nahi hota; galat tab hai jab uske saath Genitiv article bhi laga do.'
    },
    {
      title: 'Formell vs Gesprochen',
      body: [ 'Compare: wegen des Unwetters (formal) vs wegen dem Unwetter (colloquial) vs aufgrund des Unwetters (most formal/academic). Goethe C1 expects the formal Genitive forms.' ],
      hinglish: 'Teeno ko saath dekho: <span class="de">wegen des Unwetters</span> formal hai, <span class="de">wegen dem Unwetter</span> bolchaal mein bilkul normal hai (galat nahi, bas casual), aur <span class="de">aufgrund des Unwetters</span> sabse formal. Exam ki writing mein Genitiv wala form hi likho.'
    },
    {
      title: 'Stilistische Alternativen',
      body: [ 'wegen → aufgrund → infolge → angesichts → hinsichtlich — each carries subtle differences in meaning and formality.' ],
      hinglish: 'Yeh sirf formality ki seedhi nahi hai \u2014 matlab bhi badalta hai. <b>wegen</b> aam wajah batata hai, <b>aufgrund</b> kisi thos aadhaar par (data, report), <b>infolge</b> ek nateeja jo kisi cheez ke baad aaya, <b>angesichts</b> kisi haalat ko dekhte hue, aur <b>hinsichtlich</b> wajah nahi balki <b>vishay</b> batata hai \u2014 isliye woh is list mein thoda alag hai.'
    },
    {
      title: 'Häufige Kollokationen',
      body: [ 'Yeh asli combinations hain jo texts mein baar-baar aate hain \u2014 inhe poore chunk ki tarah yaad karo, kyunki phir article aur ending apne aap sahi aa jaayenge. Dhyaan do ki <span class="de">kraft Gesetzes</span> mein article hai hi nahi; kuch fixed legal phrases aise hi chalte hain.' ],
      hinglish: 'Yeh asli combinations hain jo texts mein baar-baar aate hain \u2014 inhe poore chunk ki tarah yaad karo, kyunki phir article aur ending apne aap sahi aa jaayenge. Dhyaan do ki <span class="de">kraft Gesetzes</span> mein article hai hi nahi; kuch fixed legal phrases aise hi chalte hain.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'A quick-reference table of preposition, meaning, and register.' ],
      table: {
        head: ['Preposition', 'Meaning', 'Register'],
        rows: [
          ['trotz', 'despite', 'Neutral/Formal'],
          ['während', 'during', 'Neutral/Formal'],
          ['wegen', 'because of', 'Neutral'],
          ['aufgrund', 'on the basis of', 'Formal'],
          ['infolge', 'as a consequence of', 'Formal'],
          ['hinsichtlich', 'regarding', 'Academic'],
          ['anlässlich', 'on the occasion of', 'Formal'],
          ['zugunsten', 'in favor of', 'Formal'],
          ['mittels', 'by means of', 'Academic'],
          ['kraft', 'by virtue of', 'Legal']
        ]
      },
      hinglish: 'Preposition, matlab aur register ka table \u2014 likhne se pehle yeh dekh lo ki tumhara text kis register ka hai, phir usi hisaab se preposition chuno.'
    },
    {
      title: 'Registerskala',
      body: [ 'Conversation → Formal Conversation → Business German → Academic German → Legal German. Genitive prepositions concentrate at the formal end of this scale.' ],
      hinglish: 'Jitna formal text hoga, utne zyada Genitiv prepositions milenge. Baatcheet mein yeh kam aate hain, business aur academic writing mein bahut, aur legal texts mein sabse zyada.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Two patterns account for all six: a spoken Dativ carried into formal writing, or a redundant <i>von</i> marking the case a second time.' ],
      mistakes: [
        { wrong: 'Wegen dem schlechten Wetter wurde das Spiel abgesagt.', right: 'Wegen des schlechten Wetters wurde das Spiel abgesagt.', why: 'In writing <b>wegen</b> takes the Genitiv \u2014 article and noun both change. (In speech <i>wegen dem</i> is normal, but Goethe C1 expects the written form.)' },
        { wrong: 'Trotz den Problemen wurde das Projekt fortgesetzt.', right: 'Trotz der Probleme wurde das Projekt fortgesetzt.', why: '<b>trotz</b> takes the Genitiv, so the plural article is <b>der</b> and the noun loses its Dativ <i>-n</i>.' },
        { wrong: 'Die Daten wurden mittels von einer Analyse ausgewertet.', right: 'Die Daten wurden mittels einer Analyse ausgewertet.', why: '<b>mittels</b> governs the Genitiv on its own \u2014 adding <i>von</i> both duplicates the marking and forces the wrong case.' },
        { wrong: 'Innerhalb zwei Wochen liegt das Ergebnis vor.', right: 'Innerhalb zweier Wochen / Innerhalb von zwei Wochen liegt das Ergebnis vor.', why: 'A bare number cannot show the Genitiv. Either use the Genitiv form <b>zweier</b>, or switch to <b>innerhalb von</b> + Dativ \u2014 which is what most writers do.' },
        { wrong: 'Außerhalb von des Gebäudes ist das Rauchen erlaubt.', right: 'Außerhalb des Gebäudes ist das Rauchen erlaubt.', why: 'Choose one construction: <b>au\u00dferhalb</b> + Genitiv, or <b>au\u00dferhalb von</b> + Dativ. Putting <i>von</i> in front of a Genitiv article marks the case twice.' },
        { wrong: 'Aufgrund der Berichts wurde entschieden.', right: 'Aufgrund des Berichts wurde entschieden.', why: '<i>der Bericht</i> is masculine, so its Genitiv article is <b>des</b>. Only feminine and plural nouns take <b>der</b> in the Genitiv.' }
      ],
      hinglish: 'Chhe mein se saari galtiyan do wajah se hoti hain \u2014 ya to bolchaal wala Dativ formal writing mein aa jaata hai, ya ek extra <i>von</i> lag jaata hai jo case ko do baar mark kar deta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need a formal expression? Cause? wegen/aufgrund/infolge. Topic? hinsichtlich. Method? mittels. Occasion? anlässlich. Benefit? zugunsten.' ],
      note: 'Memory trick: B2 asks "Which preposition fits?" C1 asks "Which Genitive preposition sounds the most formal and precise?" Formal German is often recognized immediately through correct Genitive prepositions.',
      hinglish: 'Formal expression chahiye? Wajah ke liye <b>wegen/aufgrund/infolge</b>, vishay ke liye <b>hinsichtlich</b>, tarike ke liye <b>mittels</b>, mauke ke liye <b>anl\u00e4sslich</b>, aur faayde ke liye <b>zugunsten</b>. Preposition chunne ke baad ek baar noun phrase check karo \u2014 article sahi hai aur masculine/neuter par <b>-s</b> laga hai?'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Universität Leipzig: Bericht zur Zulassungsstatistik',
    titleEn: 'Reading A — University admissions report',
    tokens: [
      { w: 'Aufgrund', role: 'r-genitiv', en: 'due to (formal Genitiv preposition)', hi: 'के कारण', type: 'Präposition · Gen.', why: '"Aufgrund" + Genitiv gives a formal cause, typical of administrative reports (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (plural gen.)', hi: 'इन', type: 'Article · Gen.' },
      { w: 'stark', role: 'plain', en: 'sharply', hi: 'तेज़ी से', type: 'Adverb' },
      { w: 'gestiegenen', role: 'plain', en: 'risen', hi: 'बढ़ी हुई', type: 'Adjective (Partizip II) · Gen.' },
      { w: 'Bewerberzahlen', role: 'plain', en: 'applicant numbers (Satzende)', hi: 'आवेदकों की संख्या (Satzende)', type: 'Noun · plural' },
      { w: 'musste', role: 'plain', en: 'had to', hi: 'पड़ा', type: 'Verb · müssen (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Universität', role: 'plain', en: 'university', hi: 'विश्वविद्यालय', type: 'Noun · fem.' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'ये', type: 'Article · Akk.' },
      { w: 'Zulassungskriterien', role: 'plain', en: 'admission criteria (Satzende)', hi: 'प्रवेश मानदंड (Satzende)', type: 'Noun · plural' },
      { w: 'verschärfen', role: 'plain', en: 'tighten (Satzende)', hi: 'सख़्त करना पड़ा (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Hinsichtlich', role: 'r-genitiv', en: 'regarding (formal Genitiv preposition)', hi: 'के संबंध में', type: 'Präposition · Gen.', why: '"Hinsichtlich" introduces the specific dimension being discussed (this chapter).' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Wartezeit', role: 'plain', en: 'waiting period (Satzende)', hi: 'प्रतीक्षा अवधि (Satzende)', type: 'Noun · fem.' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाता है', type: 'Verb · zeigen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'allerdings', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'kaum', role: 'plain', en: 'hardly', hi: 'मुश्किल से', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'कोई', type: 'Article' },
      { w: 'Verbesserung', role: 'plain', en: 'improvement (Satzende)', hi: 'सुधार (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Trotz', role: 'r-genitiv', en: 'despite (Genitiv preposition, concession)', hi: 'के बावजूद', type: 'Präposition · Gen.' },
      { w: 'zusätzlicher', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective · Gen.' },
      { w: 'Studienplätze', role: 'plain', en: 'study places (Satzende)', hi: 'अध्ययन स्थान (Satzende)', type: 'Noun · plural' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'बनी रहती है', type: 'Verb · bleiben' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Situation', role: 'plain', en: 'situation', hi: 'स्थिति', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'gefragten', role: 'plain', en: 'sought-after', hi: 'लोकप्रिय', type: 'Adjective · Dat.' },
      { w: 'Studiengängen', role: 'plain', en: 'degree programmes (Satzende)', hi: 'कोर्सों (Satzende)', type: 'Noun · plural' },
      { w: 'angespannt', role: 'plain', en: 'tense (Satzende)', hi: 'तनावपूर्ण (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Innerhalb', role: 'r-genitiv', en: 'within (Genitiv preposition, precise time span)', hi: 'के भीतर', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'अगले', type: 'Article · Gen.' },
      { w: 'nächsten', role: 'plain', en: 'next', hi: 'दो', type: 'Adjective · Gen.' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'सालों', type: 'Number' },
      { w: 'Jahre', role: 'plain', en: 'years (Satzende)', hi: '(Satzende)', type: 'Noun · plural · Gen.' },
      { w: 'sollen', role: 'plain', en: 'are meant to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'weitere', role: 'plain', en: 'further', hi: 'अतिरिक्त', type: 'Adjective' },
      { w: 'Hörsäle', role: 'plain', en: 'lecture halls (Satzende)', hi: 'लेक्चर हॉल (Satzende)', type: 'Noun · plural' },
      { w: 'entstehen', role: 'plain', en: 'be built (Satzende)', hi: 'बनाए जाने चाहिए (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Due to the sharply risen number of applicants, the university had to tighten its admission criteria. Regarding the waiting period, however, hardly any improvement is apparent. Despite additional study places, the situation remains tense in sought-after degree programmes. Within the next two years, further lecture halls are meant to be built.',
    comprehension: [
      { q: 'Welche Funktion hat "Aufgrund" hier?', options: ['Formaler Grund', 'Zeit', 'Ort'], answer: 0 },
      { q: 'Welche Funktion hat "Trotz"?', options: ['Konzession (Einräumung eines Gegenarguments)', 'Addition', 'Vergleich'], answer: 0 },
      { q: 'Welchen Kasus verlangen alle vier Präpositionen im Text?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsbericht',
    titleEn: 'Reading B — Newspaper report',
    tokens: [
      { w: 'Trotz', role: 'r-genitiv', en: 'despite (Genitive preposition)', hi: 'iske bawajood (Genitive preposition)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (plural gen.)', hi: 'in', type: 'Article · Gen.' },
      { w: 'Proteste', role: 'plain', en: 'protests (Satzende)', hi: 'pradarshan (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'wurde', role: 'plain', en: 'was', hi: 'thi', type: 'Verb · werden (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Reform', role: 'plain', en: 'reform (Satzende)', hi: 'sudhar (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'verabschiedet', role: 'plain', en: 'passed (Satzende)', hi: 'paarit ki gayi (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Infolge', role: 'r-genitiv', en: 'as a consequence of (formal Genitive preposition)', hi: 'ke parinaamsvaroop (formal Genitive preposition)', type: 'Präposition · Gen.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. gen.)', hi: 'iss', type: 'Demonstrativpronomen · Gen.' },
      { w: 'Entscheidung', role: 'plain', en: 'decision (Satzende)', hi: 'faisle ke (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'entstanden', role: 'plain', en: 'arose (Satzende)', hi: 'utpann hui (Satzende)', type: 'Verb (Präteritum, Satzende)' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'nayi', type: 'Adjective · Nom.' },
      { w: 'Diskussionen', role: 'plain', en: 'discussions (Satzende)', hi: 'charchaayein (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Despite the protests, the reform was passed. As a consequence of this decision, new discussions arose.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_007_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frau Bruns, warum genau wurde mein Antrag abgelehnt?', en: 'Frau Bruns, why exactly was my application rejected?' },
      { id: 'C1_007_L002', speaker: 'Frau Bruns', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Aufgrund des Lärms in der Umgebung erfüllt Ihr Vorhaben die Bauvorschriften nicht.', en: 'Due to the noise in the area, your project does not meet the building regulations.' },
      { id: 'C1_007_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und hinsichtlich der Fristen — bleibt mir noch Zeit für einen neuen Antrag?', en: 'And regarding the deadlines — do I still have time for a new application?' },
      { id: 'C1_007_L004', speaker: 'Frau Bruns', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ungeachtet der Verzögerung können Sie innerhalb von vier Wochen erneut einreichen.', en: 'Regardless of the delay, you can resubmit within four weeks.' }
    ],
    transcript: 'Frau Bruns, warum genau wurde mein Antrag abgelehnt? Aufgrund des Lärms in der Umgebung erfüllt Ihr Vorhaben die Bauvorschriften nicht. Und hinsichtlich der Fristen — bleibt mir noch Zeit für einen neuen Antrag? Ungeachtet der Verzögerung können Sie innerhalb von vier Wochen erneut einreichen.',
    translation: 'Frau Bruns, why exactly was my application rejected? Due to the noise in the area, your project does not meet the building regulations. And regarding the deadlines — do I still have time for a new application? Regardless of the delay, you can resubmit within four weeks.',
    tokens: [
      { w: 'Frau' },
      { w: 'Bruns' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'genau' },
      { w: 'wurde' },
      { w: 'mein' },
      { w: 'Antrag' },
      { w: 'abgelehnt' },
      { w: '?', plain: true },
      { w: 'Aufgrund' },
      { w: 'des' },
      { w: 'Lärms' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Umgebung' },
      { w: 'erfüllt' },
      { w: 'Ihr' },
      { w: 'Vorhaben' },
      { w: 'die' },
      { w: 'Bauvorschriften' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'hinsichtlich' },
      { w: 'der' },
      { w: 'Fristen' },
      { w: '—', plain: true },
      { w: 'bleibt' },
      { w: 'mir' },
      { w: 'noch' },
      { w: 'Zeit' },
      { w: 'für' },
      { w: 'einen' },
      { w: 'neuen' },
      { w: 'Antrag' },
      { w: '?', plain: true },
      { w: 'Ungeachtet' },
      { w: 'der' },
      { w: 'Verzögerung' },
      { w: 'können' },
      { w: 'Sie' },
      { w: 'innerhalb' },
      { w: 'von' },
      { w: 'vier' },
      { w: 'Wochen' },
      { w: 'erneut' },
      { w: 'einreichen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum wurde der Antrag abgelehnt?', qEn: 'Why was the application rejected?', options: ['wegen der Kosten', 'aufgrund des Lärms', 'wegen des Wetters', 'ohne Grund'], optionsEn: ['because of the costs', 'because of the noise', 'because of the weather', 'for no reason'], answer: 1,
        explain: '"Aufgrund des Lärms in der Umgebung erfüllt Ihr Vorhaben die Bauvorschriften nicht."' },
      { q: 'Wie viel Zeit hat Timo für einen neuen Antrag?', qEn: 'How much time does Timo have to reapply?', options: ['zwei Wochen', 'vier Wochen', 'ein Monat', 'ein Jahr'], optionsEn: ['two weeks', 'four weeks', 'a month', 'a year'], answer: 1,
        explain: '"… können Sie innerhalb von vier Wochen erneut einreichen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Frau Bruns lehnt deinen Antrag ab. Frag nach dem Grund und gib ihn wieder.", taskEn: "Mrs Bruns rejects your application. Ask why and restate it.", de: "Aufgrund des Lärms in der Umgebung erfüllt das Vorhaben die Vorschriften nicht.", en: "Owing to the noise in the area the project doesn't meet the regulations." },
    { task: "Die Behörde fragt nach den Kosten. Antworte förmlich.", taskEn: "The authority asks about the costs. Answer formally.", de: "Hinsichtlich der Kosten liegt noch keine Entscheidung vor.", en: "With regard to the costs no decision has yet been made." },
    { task: "Erklär im Methodenteil, wie erhoben wurde.", taskEn: "Explain in the methods section how the data was gathered.", de: "Die Werte wurden mittels eines standardisierten Fragebogens erhoben.", en: "The values were collected by means of a standardised questionnaire." },
    { task: "Halte eine kurze Rede zum Jubiläum des Instituts.", taskEn: "Give a short speech for the institute's anniversary.", de: "Anlässlich des Jubiläums danke ich allen Beteiligten.", en: "On the occasion of the anniversary I thank all involved." },
    { task: "Nenne die Einschränkung deines Antrags trotz der Kritik.", taskEn: "State your application's limitation despite the criticism.", de: "Ungeachtet der Kritik wurde das Vorhaben zugunsten der Anwohner geändert.", en: "Notwithstanding the criticism the project was changed in favour of the residents." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text using colloquial expressions and rewrite it into formal C1 German using Genitive prepositions (aufgrund, trotz, hinsichtlich, mittels).\n\nTASK 2 — Formal report (350 words): Write a report naturally incorporating multiple Genitive prepositions across different meaning categories.',
    starters: ['Aufgrund der aktuellen Ergebnisse lässt sich ein klarer Trend feststellen.', 'Trotz methodischer Einschränkungen bleiben die Schlussfolgerungen gültig.'],
    placeholder: 'Aufgrund der vorliegenden Daten lässt sich ein eindeutiger Trend erkennen. Trotz einiger Einschränkungen bleiben die Ergebnisse überzeugend...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the correct formal alternative to "wegen dem schlechten Wetter"?',
      options: ['aufgrund des schlechten Wetters', 'aufgrund dem schlechten Wetter', 'aufgrund das schlechte Wetter'],
      answer: 0,
      explain: '"Aufgrund" formally governs the Genitive: "aufgrund des schlechten Wetters".'
    },
    gap: {
      sentence: ['Trotz ', ' methodischen Einschränkungen bleiben die Ergebnisse überzeugend.'],
      gaps: [ { answer: 'der', accepts: ['der'] } ],
      explain: '"Trotz" takes the Genitive; "der" is the correct Genitive plural article here.'
    },
    match: {
      q: 'Match each Genitive preposition to its register/meaning.',
      pairs: [
        { noun: 'aufgrund', art: 'on the basis of (formal)' },
        { noun: 'hinsichtlich', art: 'regarding (academic)' },
        { noun: 'mittels', art: 'by means of (academic)' },
        { noun: 'kraft', art: 'by virtue of (legal)' }
      ]
    },
    builder: {
      target: 'Build: "By means of a quantitative analysis." (formal/academic Genitive preposition)',
      bank: ['Mittels', 'einer', 'quantitativen', 'Analyse', '.'],
      answer: ['Mittels', 'einer', 'quantitativen', 'Analyse', '.'],
      roles: { 'Mittels': 'r-genitiv' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Mittels von einer neuen Methode konnte das Problem gelöst werden.',
      right: 'Mittels einer neuen Methode konnte das Problem gelöst werden.',
      explain: '"Mittels" already governs the Genitive directly — adding "von" is redundant and incorrect.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What case do Genitive prepositions like "trotz" and "während" require?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0,
      explain: 'These prepositions formally govern the Genitive case.' },
    { q: 'Which is the more formal alternative to "wegen"?', options: ['aufgrund', 'trotz', 'mittels'], answer: 0,
      explain: '"Aufgrund" is a more formal/academic alternative to "wegen" for expressing cause.' },
    { q: 'What does "hinsichtlich" introduce?', options: ['A topic being discussed (regarding)', 'A method', 'A contrast'], answer: 0,
      explain: '"Hinsichtlich + Genitiv" is common in academic writing to introduce a topic.' },
    { q: 'Is "mittels von" correct?', options: ['No — "von" is redundant after "mittels"', 'Yes, always required', 'Only in legal texts'], answer: 0,
      explain: '"Mittels" already governs the Genitive directly; adding "von" is a common learner mistake.' },
    { q: 'What is the C1 memory trick for Genitive prepositions?', options: ['Formal German is recognized instantly through correct Genitive prepositions', 'They should be avoided in writing', 'They only appear in spoken German'], answer: 0,
      explain: 'Correct Genitive prepositions are one of the strongest signals of advanced written German.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-genitiv', html: 'Genitive prepositions (aufgrund, trotz, während, hinsichtlich, mittels, zugunsten, anlässlich, kraft, ungeachtet) signal formal, academic, or legal register instantly.' },
    { c: 'r-genitiv', html: 'Colloquial Dativ shortcuts (wegen dem, trotz den) are common in speech but should become correct Genitiv (wegen des, trotz der) in formal C1 writing.' },
    { c: 'r-genitiv', html: 'Never add redundant "von" after prepositions that already govern the Genitive directly (mittels, innerhalb, außerhalb).' }
  ],
  revisionTips: [
    'Rewrite five colloquial "wegen dem/der" sentences into formal "aufgrund + Genitiv" sentences.',
    'Read a German newspaper or academic article and underline every Genitive preposition you find, noting its register.',
    'Practise the collocations list (aufgrund der Studie, während des Gesprächs, trotz des Erfolgs, etc.) until they feel automatic.'
  ]
};

window.CHAPTER = CHAPTER;
