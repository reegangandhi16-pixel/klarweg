/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 53
   "Goethe Mini 4" — CHECKPOINT chapter, no new grammar or
   vocabulary. Recycles and integrates Chapters 44–52:
   Zustandspassiv, sich lassen, Unpersönliches Passiv,
   bekommen-/kriegen-Passiv, haben+zu/sein+zu, Passiv in
   Wissenschaft & Beruf, Nominalisierung, Erweiterte
   Partizipialattribute, Komplexe Nominalgruppen.
   IMPORTANT: dialogue/speaking use ONLY Nadine and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-53-goethe-mini-4',
  phase: 'B2 · Phase 5',
  number: 53,
  title: 'Goethe Mini 4',
  titleEn: 'Phase 5 checkpoint exam',
  description: 'A Goethe-style checkpoint across Chapters 44–52: every B2 passive alternative, Nominalisierung, and complex noun phrases — together.',
  xp: 260,
  time: 90,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 54, title: 'Funktionsverbgefüge', titleEn: 'Noun + light verb constructions' , href: 'chapter-b2-54-funktionsverbgefuege.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Checkpoint',
    headline: 'Nine chapters. <em>One</em> exam.',
    intro: 'The night before the B2 checkpoint, Nadine has her documents prepared and Timo still has questions explained by his teacher — moving fluidly from Zustandspassiv all the way to complex noun groups, one last time.',
    outcomes: [
      'No new grammar or vocabulary — pure integration and recall',
      'Every structure from Chapters 44–52 tested in context',
      'A realistic Goethe-Zertifikat B2 exam experience'
    ],
    scene: 'Letzte Wiederholung',
    femaleSpeakers: ['Nadine'],
    dialogue: [
      { speaker: 'Nadine', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bereit', role: 'r-akkusativ', en: 'ready', hi: 'तैयार', pron: 'be-RYT', type: 'Adjective' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Test', role: 'r-akkusativ', en: 'test', hi: 'टेस्ट', pron: 'test', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Are you ready for the test?', hi: 'Kya tum test ke liye taiyaar ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Fast', role: 'r-adverb', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Unterlagen', role: 'r-subject', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Partizip II · Zustandspassiv', why: 'sein + Partizip II = Zustandspassiv (recycled B2 Ch44).', ex: 'Die Unterlagen sind vorbereitet.', exEn: 'The documents are prepared.' },
        { w: '.', plain: true }
      ], en: 'Almost. The documents are prepared.', hi: 'Lagbhag. Dastaavez taiyaar hain.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen', why: 'sich lassen (recycled B2 Ch45).', ex: 'Der Stoff lässt sich wiederholen.', exEn: 'The material can be reviewed.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Stoff', role: 'r-subject', en: 'material', hi: 'सामग्री', pron: 'shtof', type: 'Noun · masc.' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dative' },
        { w: 'einer', role: 'r-dativ', en: 'one (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Nacht', role: 'r-dativ', en: 'night (dat.)', hi: 'रात में', pron: 'nakht', type: 'Noun · fem. dat.' },
        { w: 'wiederholen', role: 'r-verb', en: 'review', hi: 'दोहराना', pron: 'vee-der-HO-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can the material be reviewed in one night?', hi: 'Kya saamagri ek raat mein dohraayi ja sakti hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kaum', role: 'r-akkusativ', en: 'hardly', hi: 'मुश्किल से', pron: 'kowm', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · unpersönliches Passiv' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'हो रहा है', pron: 'virt', type: 'Verb · werden', why: 'unpersönliches Passiv (recycled B2 Ch46).', ex: 'Es wird viel gelernt.', exEn: 'A lot of studying happens.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'gelernt', role: 'r-verb', en: 'studied', hi: 'पढ़ाई की जाती है', pron: 'ge-LAIRNT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Hardly. A lot of studying happens today.', hi: 'Mushkil se. Aaj bahut padhaai ho rahi hai.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KO-muh', type: 'Verb · bekommen (ich)', why: 'bekommen-Passiv (recycled B2 Ch47).', ex: 'Ich bekomme die Fragen erklärt.', exEn: 'I get the questions explained.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Fragen', role: 'r-akkusativ', en: 'questions', hi: 'सवाल', pron: 'FRAH-gen', type: 'Noun · plural' },
        { w: 'erklärt', role: 'r-verb', en: 'explained', hi: 'समझाए हुए', pron: 'er-KLAIRT', type: 'Partizip II · Satzende' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · dative' },
        { w: 'Lehrerin', role: 'r-dativ', en: 'teacher (dat.)', hi: 'शिक्षिका से', pron: 'LAY-re-rin', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I get the questions explained by my teacher.', hi: 'Mujhe savaal meri shikshika se samjhaaye hue milte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben', why: 'haben+zu (recycled B2 Ch48).', ex: 'Ich habe noch viel zu üben.', exEn: 'I still have a lot to practise.' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'üben', role: 'r-verb', en: 'practise', hi: 'अभ्यास करना', pron: 'Ü-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I still have a lot to practise.', hi: 'Mujhe abhi bahut abhyaas karna hai.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verbesserung', role: 'r-subject', en: 'improvement', hi: 'सुधार', pron: 'fer-BE-se-rung', type: 'Noun · fem.', why: 'Nominalisierung (recycled B2 Ch50): verbessern → die Verbesserung.', ex: 'die Verbesserung deiner Noten' },
        { w: 'deiner', role: 'r-dativ', en: 'your (pl. gen.)', hi: 'तुम्हारे', pron: 'DY-ner', type: 'Possessive · genitive' },
        { w: 'Noten', role: 'r-dativ', en: 'grades (gen.)', hi: 'ग्रेड के', pron: 'NO-ten', type: 'Noun · plural genitive' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देती है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'The improvement of your grades pleases me.', hi: 'Tumhaare gredon mein sudhaar mujhe khushi deta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'von', role: 'r-preposition', en: 'by', hi: 'द्वारा', pron: 'fon', type: 'Preposition + dative' },
        { w: 'uns', role: 'r-dativ', en: 'us (dat.)', hi: 'हमारे', pron: 'uns', type: 'Pronoun · dative' },
        { w: 'vorbereiteten', role: 'r-subject', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-te-ten', type: 'Partizip II · erweitertes Attribut', why: 'erweitertes Partizipialattribut (recycled B2 Ch51).', ex: 'die von uns vorbereiteten Notizen' },
        { w: 'Notizen', role: 'r-subject', en: 'notes', hi: 'नोट्स', pron: 'no-TEE-tsen', type: 'Noun · plural' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करते हैं', pron: 'HEL-fen', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! The notes prepared by us help me a lot.', hi: 'Dhanyavaad! Humaare dwara taiyaar note mujhe bahut madad karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is a checkpoint, not a lesson. No new grammar — every structure from Chapters 44–52 (Zustandspassiv, sich lassen, Unpersönliches Passiv, bekommen-Passiv, haben+zu/sein+zu, Nominalisierung, Partizipialattribute, Komplexe Nominalgruppen) is tested together, the way the real Goethe-Zertifikat B2 exam mixes everything.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 44–52: Zustandspassiv (sein + Partizip II), Passiversatz mit sich lassen, Unpersönliches Passiv, bekommen-/kriegen-/erhalten-Passiv, Modalitätsersatz (haben+zu/sein+zu), Nominalisierung (Verb/Adjektiv → Nomen), Erweiterte Partizipialattribute, and Komplexe Nominalgruppen. No new grammar is introduced here — evaluate the learner\'s ability to CHOOSE and COMBINE the right structures for context. ' +
    'The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check each structure against its own formation rules (correct auxiliary, participle form, "zu" placement, adjective endings in noun phrases, Genitiv attachment).\n' +
    '- Check that the learner chose an appropriate structure for the apparent register (academic/business vs casual) — but do not penalise legitimate stylistic choices.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Integration check:</b> one sentence on how many distinct Phase 5 structures the learner used, and whether the mix felt natural.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Phase 5. Ready to begin Phase 6: Konjunktiv I in Berichten.',
    mid: 'Good, but review the chapters flagged in your weak areas before moving to Phase 6.',
    low: 'Revisit Chapters 44–52 — especially the structure you missed most — before attempting Phase 6.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Unterlagen', role: 'plain' }, { w: 'sind', role: 'r-zustand' },
    { w: 'vorbereitet', role: 'r-zustand' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'This is a checkpoint: no new grammar, full integration of Chapters 44–52.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nadine and Timo revise for the checkpoint using every Phase 5 structure together.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Two Goethe-style passages (scientific article, corporate report) integrating all nine chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'A university lecture and business meeting testing passive type, register, and head-noun identification.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Four Goethe-style speaking tasks on AI in education, sustainable business, healthcare, and research.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'A formal email and a discussion essay combining passive, Nominalstil, and complex noun phrases naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed drills across all nine Phase 5 topics: passive selection, transformation, error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Ten questions across the full Phase 5 scope. Pass to complete the checkpoint.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your Phase 5 readiness and get a recommendation before Phase 6.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the full Phase 5 master comparison table for revision.' }
  ],

  resources: [
    { icon: '📖', title: 'Phase 5 Master Comparison PDF',
      desc: 'All nine structures side by side: Zustandspassiv, sich lassen, Unpersönliches Passiv, bekommen-Passiv, haben+zu/sein+zu, Nominalisierung, Partizipialattribute, Komplexe Nominalgruppen.',
      pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' },
    { icon: '📝', title: 'Checkpoint Practice PDF',
      desc: 'Extra mixed drills across all nine chapters, with a full answer key.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' }
  ],

  outcomes: [
    { de: 'Zustandspassiv, sich lassen, Unpersönliches Passiv, bekommen-Passiv', text: 'Choose the right passive structure for process, result, possibility, general activity, or recipient' },
    { de: 'haben + zu (responsibility) vs sein + zu (task)', text: 'Select the correct Modalitätsersatz for formal instructions' },
    { de: 'Nominalisierung: analysieren → die Analyse', text: 'Shift fluidly between Verbalstil and Nominalstil' },
    { de: 'Der im Labor arbeitende Student', text: 'Compress relative clauses into extended participial attributes' },
    { de: 'der gestern veröffentlichte wissenschaftliche Forschungsbericht', text: 'Find the head noun in any complex noun phrase' }
  ],

  vocab: [],

  // ---------- Grammar (Phase 5 master review) ----------
  grammar: [
    {
      title: 'Master-Vergleichstabelle: Alle Passiv-Alternativen',
      body: [ 'This checkpoint tests the same decision from Chapter 49: which passive structure fits which situation?' ],
      table: {
        head: ['Situation', 'Structure', 'Example'],
        rows: [
          ['Process', 'Vorgangspassiv', 'Die Daten werden analysiert.'],
          ['Result', 'Zustandspassiv', 'Die Daten sind analysiert.'],
          ['Possibility', 'sich lassen', 'Die Daten lassen sich analysieren.'],
          ['General activity', 'Unpersönliches Passiv', 'Hier wird gearbeitet.'],
          ['Recipient', 'bekommen-/kriegen-/erhalten-Passiv', 'Der Kunde bekommt die Rechnung geschickt.'],
          ['Responsibility', 'haben + zu', 'Ich habe den Bericht zu schreiben.'],
          ['Required task', 'sein + zu', 'Der Bericht ist zu schreiben.']
        ]
      },
      hinglish: 'Yeh checkpoint wahi faisla test karta hai jo Chapter 49 mein tha \u2014 kis situation mein kaunsa passive structure lagta hai. Neeche saare saat ek jagah hain, isliye exam se pehle ise ek baar dekh lo.'
    },
    {
      title: 'Nominalisierung Recap',
      body: [ 'Verbs and adjectives become formal nouns: analysieren → die Analyse; wichtig → die Wichtigkeit. Nominalstil dominates formal writing.' ],
      hinglish: 'Chapter 50 se yaad karo \u2014 verbs aur adjectives formal nouns ban jaate hain: <b>analysieren</b> se <b>die Analyse</b>, aur <b>wichtig</b> se <b>die Wichtigkeit</b>. Aur uska object Genitiv mein chala jaata hai: <span class="de">die Analyse der Daten</span>.'
    },
    {
      title: 'Partizipialattribute Recap',
      body: [ 'Relative clauses compress into a compact attribute before the noun: Der Student, der im Labor arbeitet → Der im Labor arbeitende Student.' ],
      hinglish: 'Chapter 51 se yaad karo \u2014 relative clause chhota hokar noun se pehle aa jaata hai: <span class="de">Der Student, der im Labor arbeitet</span> se <span class="de">Der im Labor arbeitende Student</span>. Aur faisla ek sawaal se hota hai \u2014 noun kaam kar raha hai (Partizip I) ya uske saath kaam hua (Partizip II)?'
    },
    {
      title: 'Komplexe Nominalgruppen Recap',
      body: [ 'Find the head noun first. Everything else — article, adjective, Partizipialattribut, Genitiv, prepositional phrase — describes that one noun.' ],
      hinglish: 'Chapter 52 se yaad karo \u2014 pehle head noun dhoondo. Baaki sab kuch usi ek noun ko describe karta hai: article, adjectives aur Partizipialattribut noun se pehle, aur Genitiv aur prepositional phrase uske baad.'
    },
    {
      title: 'Goethe-Prüfungstipps',
      body: [ 'In the real exam, texts mix all nine structures freely. Don\'t look for ONE pattern — ask, for each sentence: process, result, possibility, activity, recipient, responsibility, task, formal noun, or compressed clause?' ],
      note: 'Memory trick: the exam rewards RECOGNITION speed, not memorization of rules. Practice spotting each structure quickly.',
      hinglish: 'Asli exam mein texts in saare structures ko mila kar use karte hain. Isliye ek hi pattern mat dhoondo \u2014 har sentence par ruk kar poochho: yahan process ki baat hai, result ki, possibility ki, activity ki, paane wale ki, zimmedaari ki, kaam ki, formal noun ki, ya compress kiye gaye clause ki? Yeh sawaal poochhna aa gaya to reading kaafi tez ho jaayegi.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftlicher Artikel (Checkpoint)',
    titleEn: 'Reading A — Scientific journal article',
    tokens: [
      { w: 'Der', role: 'r-nominalgruppe', en: 'the (masc. nom.)', hi: '(noun phrase ka hissa)', type: 'Article' },
      { w: 'gestern', role: 'r-partizip', en: 'yesterday (Partizipialattribut)', hi: '(Partizipialattribut)', type: 'Adverb' },
      { w: 'veröffentlichte', role: 'r-partizip', en: 'published (Partizip II, attributive)', hi: 'प्रकाशित (Partizip II, attributive)', type: 'Partizip II · attributiv' },
      { w: 'Forschungsbericht', role: 'r-head', en: 'research report (HEAD NOUN)', hi: 'शोध रिपोर्ट (HEAD NOUN)', type: 'Noun · masc.' },
      { w: 'ist', role: 'r-zustand', en: 'is (Zustandspassiv auxiliary)', hi: '(Zustandspassiv auxiliary)', type: 'Verb · sein (Präsens)' },
      { w: 'fertiggestellt', role: 'r-zustand', en: 'completed (Satzende, result)', hi: 'पूर्ण (Satzende, result)', type: 'Zustandspassiv · Satzende' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Analyse', role: 'plain', en: 'analysis (nominalisiert)', hi: 'विश्लेषण (nominalisiert)', type: 'Noun · fem.' },
      { w: 'lässt', role: 'r-lassen', en: 'lets (Passiversatz auxiliary)', hi: '(Passiversatz auxiliary)', type: 'Verb · lassen (Präsens)' },
      { w: 'sich', role: 'r-lassen', en: 'itself (reflexive)', hi: '(reflexive)', type: 'Reflexivpronomen · Akk.' },
      { w: 'leicht', role: 'plain', en: 'easily', hi: 'aasaani se', type: 'Adverb' },
      { w: 'wiederholen', role: 'r-lassen', en: 'repeat (Satzende, = can be repeated)', hi: 'दोहराया (Satzende, = dohraaya ja sakta hai)', type: 'Infinitiv · Satzende' },
      { w: '.', plain: true }
    ],
    translation: 'The research report published yesterday is completed. The analysis can be easily repeated.',
    comprehension: [
      { q: 'Welche Struktur ist "ist fertiggestellt"?', options: ['Zustandspassiv (result)', 'Vorgangspassiv (process)', 'Unpersönliches Passiv'], answer: 0 },
      { q: 'Was ist der Kernnomen in "Der gestern veröffentlichte Forschungsbericht"?', options: ['Forschungsbericht', 'gestern', 'veröffentlichte'], answer: 0 },
      { q: 'Welche Struktur ist "lässt sich wiederholen"?', options: ['Passiversatz mit sich lassen', 'bekommen-Passiv', 'sein + zu'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Geschäftsbericht (Checkpoint)',
    titleEn: 'Reading B — Corporate annual report',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Kunde', role: 'plain', en: 'customer', hi: 'ग्राहक', type: 'Noun · masc.' },
      { w: 'bekommt', role: 'r-bekommen', en: 'gets (bekommen-Passiv auxiliary)', hi: '(bekommen-Passiv auxiliary)', type: 'Verb · bekommen (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Rechnung', role: 'plain', en: 'invoice', hi: 'बिल', type: 'Noun · fem.' },
      { w: 'zugeschickt', role: 'r-bekommen', en: 'sent (Satzende, Partizip II)', hi: 'भेजी जाएगी (Satzende, Partizip II)', type: 'Partizip II · Satzende' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'plain', en: 'all', hi: 'सभी', type: 'Adjective' },
      { w: 'Dokumente', role: 'plain', en: 'documents', hi: 'दस्तावेज़', type: 'Noun · plural' },
      { w: 'sind', role: 'r-seinzu', en: 'are (sein+zu auxiliary, plural)', hi: '(sein+zu auxiliary, plural)', type: 'Verb · sein (Präsens, plural)' },
      { w: 'bis', role: 'plain', en: 'until', hi: 'तक', type: 'Präposition · Akk.' },
      { w: 'Freitag', role: 'plain', en: 'Friday (Satzende)', hi: 'shukravaar (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'einzureichen', role: 'r-seinzu', en: 'to submit (Satzende, Infinitiv, trennbar)', hi: 'जमा (Satzende, Infinitiv, trennbar)', type: 'Infinitiv · Satzende' },
      { w: '.', plain: true }
    ],
    translation: 'The customer gets the invoice sent. All documents are to be submitted by Friday.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_053_L001', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe alle Unterlagen für morgen vorbereitet.', en: 'Timo, I\'ve prepared all the documents for tomorrow.' },
      { id: 'B2_053_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, mir hat unser Lehrer noch ein paar Fragen zum Zustandspassiv erklärt.', en: 'Good, our teacher explained a few questions about the Zustandspassiv to me.' },
      { id: 'B2_053_L003', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und die komplexen Nominalgruppen? Die finde ich immer noch schwierig.', en: 'And the complex noun groups? I still find those difficult.' },
      { id: 'B2_053_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Lass uns die zusammen noch einmal durchgehen, bevor wir schlafen gehen.', en: 'Let\'s go through those together once more before we go to sleep.' }
    ],
    transcript: 'Timo, ich habe alle Unterlagen für morgen vorbereitet. Gut, mir hat unser Lehrer noch ein paar Fragen zum Zustandspassiv erklärt. Und die komplexen Nominalgruppen? Die finde ich immer noch schwierig. Lass uns die zusammen noch einmal durchgehen, bevor wir schlafen gehen.',
    translation: 'Timo, I\'ve prepared all the documents for tomorrow. Good, our teacher explained a few questions about the Zustandspassiv to me. And the complex noun groups? I still find those difficult. Let\'s go through those together once more before we go to sleep.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'alle' },
      { w: 'Unterlagen' },
      { w: 'für' },
      { w: 'morgen' },
      { w: 'vorbereitet' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'mir' },
      { w: 'hat' },
      { w: 'unser' },
      { w: 'Lehrer' },
      { w: 'noch' },
      { w: 'ein' },
      { w: 'paar' },
      { w: 'Fragen' },
      { w: 'zum' },
      { w: 'Zustandspassiv' },
      { w: 'erklärt' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'komplexen' },
      { w: 'Nominalgruppen' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'finde' },
      { w: 'ich' },
      { w: 'immer' },
      { w: 'noch' },
      { w: 'schwierig' },
      { w: '.', plain: true },
      { w: 'Lass' },
      { w: 'uns' },
      { w: 'die' },
      { w: 'zusammen' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'durchgehen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'schlafen' },
      { w: 'gehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Nadine vorbereitet?', qEn: 'What has Nadine prepared?', options: ['das Essen', 'alle Unterlagen', 'ihr Zimmer', 'einen Vortrag'], optionsEn: ['the food', 'all the documents', 'her room', 'a talk'], answer: 1,
        explain: '"Ich habe alle Unterlagen für morgen vorbereitet."' },
      { q: 'Was fällt Nadine noch schwer?', qEn: 'What does Nadine still find difficult?', options: ['das Passiv', 'die komplexen Nominalgruppen', 'die Aussprache', 'das Hören'], optionsEn: ['the passive', 'the complex noun phrases', 'the pronunciation', 'the listening part'], answer: 1,
        explain: '"Und die komplexen Nominalgruppen? Die finde ich immer noch schwierig."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Sag, was du für morgen vorbereitet hast.", taskEn: "Exam, Part 1: say what you've prepared for tomorrow.", de: "Alle Unterlagen sind vorbereitet und die Fragen sind geklärt.", en: "All the documents are prepared and the questions are settled." },
    { task: "Prüfung, Teil 2: Sprich über KI in der Bildung.", taskEn: "Exam, Part 2: talk about AI in education.", de: "Aufgaben werden automatisch korrigiert, aber die Bewertung ist noch nicht geklärt.", en: "Tasks are corrected automatically, but assessment hasn't been settled." },
    { task: "Prüfung, Teil 3: Beschreibe eine Maßnahme für Nachhaltigkeit.", taskEn: "Exam, Part 3: describe a measure for sustainability.", de: "Die Senkung des Verbrauchs lässt sich mit einfachen Schritten erreichen.", en: "Reducing consumption can be achieved with simple steps." },
    { task: "Prüfung, Teil 4: Stell ein Forschungsprojekt kurz vor.", taskEn: "Exam, Part 4: present a research project briefly.", de: "Die vom Institut betreute Untersuchung wird nächstes Jahr veröffentlicht.", en: "The study supervised by the institute will be published next year." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (8-10 sentences): Apply for a research internship, using at least one Zustandspassiv, one bekommen-Passiv, and one haben+zu or sein+zu construction.\n\nTASK 2 — Discussion essay (10-12 sentences): Should companies use artificial intelligence to improve productivity? Use passive structures, Nominalisierung, and at least one complex noun phrase.',
    starters: ['Sehr geehrte Damen und Herren, ich bewerbe mich ...', 'Die Frage, ob Unternehmen ...'],
    placeholder: 'Ich bewerbe mich um das Forschungspraktikum. Die Unterlagen sind vorbereitet. Ich bekomme eine Rückmeldung geschickt.',
    minWords: 90
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which structure best fits: "The problem cannot be avoided" (task, impersonal)?',
      options: ['Das Problem ist nicht zu vermeiden.', 'Das Problem hat nicht zu vermeiden.', 'Das Problem lässt vermeiden.'],
      answer: 0,
      explain: '"sein + zu" (negated) puts the impersonal task in focus: "ist nicht zu vermeiden".'
    },
    gap: {
      sentence: ['Der Kunde ', ' die Rechnung geschickt.'],
      gaps: [ { answer: 'bekommt', accepts: ['bekommt', 'kriegt'] } ],
      explain: 'bekommen-Passiv puts the recipient ("der Kunde") as subject.'
    },
    match: {
      q: 'Match each example to its Phase 5 structure.',
      pairs: [
        { noun: 'Die Daten sind analysiert.', art: 'Zustandspassiv' },
        { noun: 'Das Problem lässt sich lösen.', art: 'Passiversatz mit sich lassen' },
        { noun: 'Hier wird gearbeitet.', art: 'Unpersönliches Passiv' },
        { noun: 'die Wichtigkeit des Themas', art: 'Nominalisierung' }
      ]
    },
    builder: {
      target: 'Build: "The report published yesterday is finished." (Partizipialattribut + Zustandspassiv)',
      bank: ['Der', 'gestern', 'veröffentlichte', 'Bericht', 'ist', 'fertig', '.'],
      answer: ['Der', 'gestern', 'veröffentlichte', 'Bericht', 'ist', 'fertig', '.'],
      roles: { 'gestern': 'r-partizip', 'veröffentlichte': 'r-partizip' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Ergebnisse sind analysiert worden.',
      right: 'Die Ergebnisse sind analysiert.',
      explain: 'Zustandspassiv never adds "worden" — that belongs to Vorgangspassiv Perfekt, not a present state.'
    }
  },

  // ---------- Quiz (10 questions — checkpoint scope) ----------
  quiz: [
    { q: '"Die Tür ist geöffnet" is which structure?', options: ['Zustandspassiv', 'Vorgangspassiv', 'Unpersönliches Passiv'], answer: 0, explain: 'sein + Partizip II describes the finished result.' },
    { q: '"Das Problem lässt sich lösen" means:', options: ['The problem can be solved', 'The problem solves itself alone', 'The problem is being solved'], answer: 0, explain: '"sich lassen" = "kann ... werden", expressed more elegantly.' },
    { q: '"Hier wird nicht geraucht" has:', options: ['No named subject — general rule', 'A clear named subject', 'A recipient as subject'], answer: 0, explain: 'Unpersönliches Passiv focuses only on the activity.' },
    { q: '"Ich bekomme den Brief geschickt" focuses on:', options: ['The recipient', 'The action itself', 'A finished result'], answer: 0, explain: 'bekommen-Passiv makes the recipient the grammatical subject.' },
    { q: '"Ich habe den Bericht zu schreiben" focuses on:', options: ['Who is responsible', 'What must be done, impersonally', 'A finished state'], answer: 0, explain: 'haben + zu emphasises the responsible person.' },
    { q: '"Der Bericht ist zu schreiben" focuses on:', options: ['The task, impersonally', 'Who is responsible', 'A recipient'], answer: 0, explain: 'sein + zu emphasises the task regardless of who does it.' },
    { q: '"die Wichtigkeit" derives from which adjective?', options: ['wichtig', 'wichtiger', 'unwichtig'], answer: 0, explain: 'Nominalisierung: wichtig → die Wichtigkeit.' },
    { q: '"Der im Labor arbeitende Student" replaces which structure?', options: ['A relative clause', 'A conditional clause', 'A modal verb'], answer: 0, explain: 'Extended participial attributes compress relative clauses before the noun.' },
    { q: 'In a long noun phrase, what should you find FIRST?', options: ['The head noun', 'The first word', 'The last word'], answer: 0, explain: 'Everything else in the phrase describes the head noun.' },
    { q: 'Does academic/professional German usually rely on just ONE passive structure?', options: ['No — it mixes all seven by context', 'Yes, always Vorgangspassiv', 'Yes, always Zustandspassiv'], answer: 0, explain: 'Native academic and business German fluidly chooses the structure that fits each sentence.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-zustand', html: 'Seven passive-family structures, one decision each time: Vorgangspassiv, Zustandspassiv, sich lassen, Unpersönliches Passiv, bekommen-Passiv, haben+zu, sein+zu.' },
    { c: 'r-nominal', html: 'Nominalisierung shifts formal writing from Verbalstil to Nominalstil; Partizipialattribute compress relative clauses before the noun.' },
    { c: 'r-head', html: 'Komplexe Nominalgruppen pack a whole sentence into one noun phrase — always find the head noun first.' }
  ],
  revisionTips: [
    'For each Phase 5 chapter, write one example sentence from memory before moving to Phase 6.',
    'Scan any German news article and label every passive-family structure and noun phrase you find.',
    'If any quiz question felt hard, reopen that specific chapter (44–52) before starting Phase 6.'
  ]
};

window.CHAPTER = CHAPTER;
