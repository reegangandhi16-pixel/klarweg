/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 10
   "Häufige B2-Verben (trennbar & untrennbar)" — a high-frequency
   vocabulary chapter reviewing the most common separable and
   inseparable B2 verbs, verb families (stellen, kommen, nehmen,
   führen …), synonyms, and collocations. Primarily vocabulary,
   not new grammar — builds directly on Chapter 9.
   IMPORTANT: dialogue uses ONLY Britta and Timo.
   Vocabulary source: uploaded chapter-10 list (34 items, user-edited
   general B2 vocabulary bank — workplace/negotiation/media themes).
============================================================ */
const CHAPTER = {
  id: 'b2-10-haeufige-b2-verben',
  phase: 'B2 · Phase 1',
  number: 10,
  title: 'Häufige B2-Verben (trennbar & untrennbar)',
  titleEn: 'High-frequency B2 verbs (separable & inseparable)',
  description: 'Lock in the verbs you\'ll meet again and again at B2 — separable and inseparable, in verb families, synonyms, and fixed collocations.',
  xp: 420,
  time: 60,
  difficulty: 'Advanced',
  nextChapter: { number: 11, title: 'Stellung von nicht (Satz- vs. Sondernegation)', titleEn: 'Position of nicht (sentence vs. special negation)' , href: 'chapter-b2-11-stellung-von-nicht.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The verbs you\'ll <em>meet everywhere.</em>',
    intro: 'Britta is considering a career retraining and Timo asks what it requires — patience, a good vocational school, a search that\'s becoming more common at her age — packed with the highest-frequency separable and inseparable B2 verbs.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the most common B2 verbs used naturally in workplace conversation'
    ],
    scene: 'Die Verhandlung',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überlege', role: 'r-verb', en: 'am considering', hi: 'सोच रही हूँ', pron: 'ü-ber-LAY-guh', type: 'Verb · überlegen (ich)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Umschulung', role: 'r-akkusativ', en: 'retraining', hi: 'पुनः प्रशिक्षण', pron: 'UM-shoo-lung', type: 'Noun · fem.', why: 'die Umschulung (this chapter).', ex: 'eine Umschulung machen' },
        { w: '.', plain: true }
      ], en: 'I am considering a retraining.', hi: 'Main punah prashikshan ke baare mein soch rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'verlangt', role: 'r-verb', en: 'requires', hi: 'मांगती है', pron: 'fer-LANKT', type: 'Verb · verlangen', why: 'verlangen = to require/demand (this chapter).', ex: 'Was verlangt die neue Ausbildung?', exEn: 'What does the new training require?' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'neue', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Ausbildung', role: 'r-subject', en: 'training', hi: 'प्रशिक्षण', pron: 'OWS-bil-dung', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'What does the new training require?', hi: 'Naya prashikshan kya maangta hai?' },
      { speaker: 'Britta', tokens: [
        { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'verlangt', role: 'r-verb', en: 'requires', hi: 'मांगती है', pron: 'fer-LANKT', type: 'Verb · verlangen' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Geduld', role: 'r-akkusativ', en: 'patience', hi: 'धैर्य', pron: 'ge-DULT', type: 'Noun · fem.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छे', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Berufsschule', role: 'r-akkusativ', en: 'vocational school', hi: 'व्यावसायिक स्कूल', pron: 'be-ROOFS-shoo-luh', type: 'Noun · fem.', why: 'die Berufsschule (this chapter).', ex: 'eine gute Berufsschule' },
        { w: '.', plain: true }
      ], en: 'It requires a lot of patience and a good vocational school.', hi: 'Ismein bahut dhairya aur ek achha vyavsayik school chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kommt', role: 'r-verb', en: 'does it come', hi: 'आता है', pron: 'komt', type: 'Verb · vorkommen', lexicalUnit: 'vorkommen', why: 'vorkommen = to occur/happen (this chapter).', ex: 'Kommt es oft vor, dass Leute wechseln?', exEn: 'Does it often occur that people switch?' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorkommen)', hi: '', pron: 'for', type: 'Separable prefix', lexicalUnit: 'vorkommen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'Leute', role: 'r-subject', en: 'people', hi: 'लोग', pron: 'LOY-tuh', type: 'Noun · plural' },
        { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'deinem', role: 'r-dativ', en: 'your (masc. dat.)', hi: 'तुम्हारे', pron: 'DY-naym', type: 'Possessive · dative' },
        { w: 'Alter', role: 'r-dativ', en: 'age (dat.)', hi: 'उम्र में', pron: 'AL-ter', type: 'Noun · neut. dat.' },
        { w: 'wechseln', role: 'r-verb', en: 'switch', hi: 'बदलते हैं', pron: 'VEK-seln', type: 'Verb · wechseln (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Does it often occur that people at your age switch?', hi: 'Kya yeh aksar hota hai ki tumhari umr ke log badalte hain?' },
      { speaker: 'Britta', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'kommt', role: 'r-verb', en: 'occurs', hi: 'होता है', pron: 'komt', type: 'Verb · vorkommen', lexicalUnit: 'vorkommen' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'häufiger', role: 'r-akkusativ', en: 'more often', hi: 'ज़्यादा बार', pron: 'HOY-fi-ger', type: 'Adjective · Komparativ' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorkommen)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorkommen' },
        { w: '.', plain: true }
      ], en: 'Yes, that occurs more and more often.', hi: 'Haan, yeh hamesha zyada baar hota hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'gehst', role: 'r-verb', en: 'do you proceed', hi: 'आगे बढ़ती हो', pron: 'GAYST', type: 'Verb · vorgehen', lexicalUnit: 'vorgehen', why: 'vorgehen = to proceed (this chapter).', ex: 'Wie gehst du bei der Suche vor?', exEn: 'How do you proceed with the search?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Suche', role: 'r-dativ', en: 'search (dat.)', hi: 'खोज में', pron: 'ZOO-khuh', type: 'Noun · fem. dat.' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorgehen)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorgehen' },
        { w: '?', plain: true }
      ], en: 'How do you proceed with the search?', hi: 'Tum khoj mein kaise aage badhti ho?' },
      { speaker: 'Britta', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nutze', role: 'r-verb', en: 'use', hi: 'इस्तेमाल करती हूँ', pron: 'NUT-suh', type: 'Verb · nutzen' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Austausch', role: 'r-akkusativ', en: 'exchange', hi: 'आदान-प्रदान', pron: 'OWS-towsh', type: 'Noun · masc.', why: 'der Austausch (this chapter).', ex: 'den Austausch nutzen' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'anderen', role: 'r-dativ', en: 'other', hi: 'अन्य', pron: 'AN-de-ren', type: 'Adjective · dative' },
        { w: 'Autorinnen', role: 'r-dativ', en: 'authors (dat.)', hi: 'लेखिकाओं के', pron: 'ow-to-RI-nen', type: 'Noun · plural dat.', why: 'die Autorin (this chapter).', ex: 'mit anderen Autorinnen' },
        { w: '.', plain: true }
      ], en: 'I use the exchange with other authors.', hi: 'Main anya lekhikaon ke saath aadaan-pradaan ka istemaal karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This chapter is a high-frequency <span class="de">vocabulary review</span> — the separable and inseparable B2 verbs you will meet again and again in Goethe reading, listening, writing, and speaking. Never memorize a verb alone: learn it with an example sentence, a collocation, and its verb family.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is HÄUFIGE B2-VERBEN (B2 level): a high-frequency vocabulary review of the most common separable (abschließen, ankommen, anmelden, aufstehen, einladen, mitteilen, teilnehmen, vorbereiten, vorstellen, zusammenarbeiten, vorgehen, vorkommen, vorgeben, daherkommen, ausstrecken …) and inseparable (beschreiben, behandeln, beobachten, begründen, bekommen, benutzen, besprechen, bestätigen, besuchen, entwickeln, entscheiden, erklären, erwarten, verbessern, verbieten, verdienen, vergleichen, verlieren, vermeiden, verstehen, versuchen, verwenden, zerstören, verlangen, verraten, berücksichtigen, weisen, werben …) B2 verbs, verb families (stellen→bestellen/darstellen/vorstellen/feststellen/herstellen/einstellen; kommen→ankommen/mitkommen/bekommen; etc.), synonyms (verbessern↔optimieren, beginnen↔anfangen), and collocations (eine Entscheidung treffen, einen Antrag stellen, eine Präsentation halten). This is primarily a vocabulary chapter, not new grammar. ' +
    'Do NOT expect C1 vocabulary or rare literary verbs — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Separable verbs must split correctly in main clauses; inseparable verbs must never split.\n' +
    '- Collocations must be used as fixed chunks (eine Entscheidung treffen, not eine Entscheidung machen).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Vocabulary check:</b> one sentence on whether the learner used high-frequency B2 verbs and collocations naturally.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you actively use high-frequency B2 verbs, verb families, and collocations naturally. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the verb family and collocation tables once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never memorize a verb alone, always with an example and a collocation.'
  },

  parserSentence: [
    { w: 'Wir', role: 'plain' }, { w: 'schließen', role: 'r-trenn' },
    { w: 'die', role: 'plain' }, { w: 'Verhandlung', role: 'plain' }, { w: 'ab', role: 'r-trenn' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: this chapter reviews the highest-frequency B2 verbs you\'ll meet everywhere.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Britta and Timo navigate a workplace negotiation, full of high-frequency B2 verbs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Review high-frequency separable/inseparable verbs, verb families, synonyms, and collocations.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage packed with high-frequency verbs.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch high-frequency verbs, prefixes, and collocations in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give presentations and hold workplace conversations using target verbs naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using high-frequency B2 verbs and collocations correctly.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb families, synonyms, prefix identification, and collocation matching.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 420 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words with translations, examples, and verb families.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb family matching, synonym matching, collocation drills, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete high-frequency B2 verb reference — separable/inseparable lists, verb families, collocations.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wir schließen die Verhandlung ab.', text: 'Use high-frequency separable B2 verbs correctly' },
    { de: 'Ich berücksichtige die Situation.', text: 'Use high-frequency inseparable B2 verbs correctly' },
    { de: 'stellen → bestellen, vorstellen, feststellen', text: 'Recognize common B2 verb families' },
    { de: 'eine Entscheidung treffen, einen Antrag stellen', text: 'Use fixed B2 collocations naturally' },
    { de: 'verbessern ↔ optimieren', text: 'Use high-frequency B2 synonyms' }
  ],

  // ---------- Vocabulary (34 items — uploaded chapter-10 list) ----------
  vocab: [
    { de: 'touren', pos: 'verb', level: 'B2', en: 'to tour', hi: 'दौरा करना', prefix: '(kein Präfix)', ex: 'Die Band tourt durch ganz Deutschland.', exEn: 'The band tours through all of Germany.', exHi: 'Band poore Germany mein daura karta hai.', conj: { praesens: 'tourt', praeteritum: 'tourte', perfekt: 'ist getourt' } },
    { de: 'umgehen', pos: 'verb', level: 'B2', en: 'to handle, deal with; to get around, avoid', hi: 'निपटाना; टालना', prefix: 'um- (untrennbar ODER trennbar, je nach Bedeutung)', ex: 'Manchmal muss man Konflikte geschickt umgehen.', exEn: 'Sometimes one must handle conflicts skillfully.', exHi: 'Kabhi-kabhi sangharshon ko kushalta se sambhaalna zaroori hota hai.', conj: { praesens: 'umgeht / geht … um', praeteritum: 'umging / ging … um', perfekt: 'hat umgangen / ist umgegangen' } },
    { de: 'Umschulung', art: 'die', gender: 'f', plural: 'Umschulungen', pos: 'noun', level: 'B2', en: 'retraining', hi: 'पुनर्प्रशिक्षण', ex: 'Trotzdem verrät die Aussicht auf eine Umschulung viel.', exEn: 'Nevertheless, the prospect of retraining reveals a lot.', exHi: 'Phir bhi, punarprashikshan ki sambhaavna bahut kuch bataati hai.' },
    { de: 'Unstimmigkeit', art: 'die', gender: 'f', plural: 'Unstimmigkeiten', pos: 'noun', level: 'B2', en: 'discrepancy, disagreement', hi: 'असहमति', ex: 'Ich muss zuerst eine Unstimmigkeit berücksichtigen.', exEn: 'First I must take a discrepancy into account.', exHi: 'Pehle mujhe ek asahamati ko dhyaan mein rakhna hoga.' },
    { de: 'Verbesserung', art: 'die', gender: 'f', plural: 'Verbesserungen', pos: 'noun', level: 'B2', en: 'improvement', hi: 'सुधार', ex: 'Die Verbesserung des Prozesses war notwendig.', exEn: 'The improvement of the process was necessary.', exHi: 'Prakriya mein sudhaar zaroori tha.' },
    { de: 'Verhandlung', art: 'die', gender: 'f', plural: 'Verhandlungen', pos: 'noun', level: 'B2', en: 'negotiation', hi: 'बातचीत', ex: 'Wir müssen die Verhandlung heute abschließen.', exEn: 'We must conclude the negotiation today.', exHi: 'Humein aaj baatcheet samaapt karni hogi.' },
    { de: 'verlangen', pos: 'verb', level: 'B2', en: 'to demand, require', hi: 'मांग करना', prefix: 'ver- (untrennbar)', ex: 'Der Autor verlangt eine faire Verteilung.', exEn: 'The author demands a fair distribution.', exHi: 'Lekhak ek nishpaksh vitaran ki maang karta hai.', conj: { praesens: 'verlangt', praeteritum: 'verlangte', perfekt: 'hat verlangt' } },
    { de: 'verraten', pos: 'verb', level: 'B2', en: 'to betray, reveal', hi: 'बताना, धोखा देना', prefix: 'ver- (untrennbar)', ex: 'Trotzdem verrät die Aussicht auf eine Umschulung viel.', exEn: 'Nevertheless, the prospect of retraining reveals a lot.', exHi: 'Phir bhi, punarprashikshan ki sambhaavna bahut kuch bataati hai.', conj: { praesens: 'verrät', praeteritum: 'verriet', perfekt: 'hat verraten' } },
    { de: 'Verteilung', art: 'die', gender: 'f', plural: 'Verteilungen', pos: 'noun', level: 'B2', en: 'distribution', hi: 'वितरण', ex: 'Der Autor verlangt eine faire Verteilung.', exEn: 'The author demands a fair distribution.', exHi: 'Lekhak ek nishpaksh vitaran ki maang karta hai.' },
    { de: 'vorgeben', pos: 'verb', level: 'B2', en: 'to pretend, specify', hi: 'दिखावा करना', prefix: 'vor- (trennbar)', ex: 'Manche geben allzu oft vor, interessiert zu sein.', exEn: 'Some all too often pretend to be interested.', exHi: 'Kuch log bahut zyada aksar rooci hone ka dikhaava karte hain.', conj: { praesens: 'gibt vor', praeteritum: 'gab vor', perfekt: 'hat vorgegeben' } },
    { de: 'vorgehen', pos: 'verb', level: 'B2', en: 'to proceed, go about, advance', hi: 'आगे बढ़ना', prefix: 'vor- (trennbar)', ex: 'Wie gehen wir am besten vor?', exEn: 'How do we best proceed?', exHi: 'Hum sabse acche tareeke se kaise aagey badhein?', conj: { praesens: 'geht vor', praeteritum: 'ging vor', perfekt: 'ist vorgegangen' } },
    { de: 'vorkommen', pos: 'verb', level: 'B2', en: 'to occur, happen; to seem, appear', hi: 'होना, लगना', prefix: 'vor- (trennbar)', ex: 'Es kommt oft vor, dass Kollegen aggressiv werben.', exEn: 'It often occurs that colleagues recruit aggressively.', exHi: 'Aksar aisa hota hai ki sahakarmi aakraamak roop se bharti karte hain.', conj: { praesens: 'kommt vor', praeteritum: 'kam vor', perfekt: 'ist vorgekommen' } },
    { de: 'weisen', pos: 'verb', level: 'B2', en: 'to point, show, direct', hi: 'दिखाना, इशारा करना', prefix: '(kein Präfix / untrennbar)', ex: 'Ich weise auf die Basis des Vertrags hin.', exEn: 'I point out the basis of the contract.', exHi: 'Main anubandh ka aadhaar bataata hoon.', conj: { praesens: 'weist', praeteritum: 'wies', perfekt: 'hat gewiesen' } },
    { de: 'werben', pos: 'verb', level: 'B2', en: 'to advertise, recruit', hi: 'विज्ञापन/भर्ती करना', prefix: '(kein Präfix / untrennbar)', ex: 'Es kommt oft vor, dass Kollegen aggressiv werben.', exEn: 'It often occurs that colleagues recruit aggressively.', exHi: 'Aksar aisa hota hai ki sahakarmi aakraamak roop se bharti karte hain.', conj: { praesens: 'wirbt', praeteritum: 'warb', perfekt: 'hat geworben' } },
    { de: 'Zeiterscheinung', art: 'die', gender: 'f', plural: 'Zeiterscheinungen', pos: 'noun', level: 'B2', en: 'phenomenon of the time', hi: 'समय की घटना', ex: 'Diese Zeiterscheinung betrifft viele Branchen.', exEn: 'This phenomenon of the time affects many industries.', exHi: 'Yeh samay ki ghatna kai udyogon ko prabhaavit karti hai.' },
    { de: 'aggressiv', pos: 'adjective', level: 'B2', en: 'aggressive', hi: 'आक्रामक', ex: 'Es kommt oft vor, dass Kollegen aggressiv werben.', exEn: 'It often occurs that colleagues recruit aggressively.', exHi: 'Aksar aisa hota hai ki sahakarmi aakraamak roop se bharti karte hain.' },
    { de: 'allzu', pos: 'adverb', level: 'B2', en: 'all too', hi: 'बहुत ज़्यादा', ex: 'Manche geben allzu oft vor, interessiert zu sein.', exEn: 'Some all too often pretend to be interested.', exHi: 'Kuch log bahut zyada aksar rooci hone ka dikhaava karte hain.' },
    { de: 'angemessen', pos: 'adjective', level: 'B2', en: 'appropriate, adequate', hi: 'उचित', ex: 'Es ist angemessen, den Ausgang gemeinsam zu besprechen.', exEn: 'It\'s appropriate to discuss the outcome together.', exHi: 'Parinaam par saath mein charcha karna uchit hai.' },
    { de: 'Anlass', art: 'der', gender: 'm', plural: 'Anlässe', pos: 'noun', level: 'B2', en: 'occasion', hi: 'अवसर', ex: 'Der Anlass kommt ganz unerwartet daher.', exEn: 'The occasion comes along quite unexpectedly.', exHi: 'Avsar bilkul apratyaashit roop se aata hai.' },
    { de: 'Ausgang', art: 'der', gender: 'm', plural: 'Ausgänge', pos: 'noun', level: 'B2', en: 'exit, outcome', hi: 'निकास, परिणाम', ex: 'Es ist angemessen, den Ausgang gemeinsam zu besprechen.', exEn: 'It\'s appropriate to discuss the outcome together.', exHi: 'Parinaam par saath mein charcha karna uchit hai.' },
    { de: 'Aussicht', art: 'die', gender: 'f', plural: 'Aussichten', pos: 'noun', level: 'B2', en: 'view, prospect', hi: 'दृश्य, संभावना', ex: 'Trotzdem verrät die Aussicht auf eine Umschulung viel.', exEn: 'Nevertheless, the prospect of retraining reveals a lot.', exHi: 'Phir bhi, punarprashikshan ki sambhaavna bahut kuch bataati hai.' },
    { de: 'ausstrecken', pos: 'verb', level: 'B2', en: 'to stretch out', hi: 'फैलाना', prefix: 'aus- (trennbar)', ex: 'Ein Austausch zwischen beiden Parteien streckt sich aus.', exEn: 'An exchange between both parties extends itself.', exHi: 'Dono paksho ke beech ek aadaan-pradaan phailta hai.', conj: { praesens: 'streckt aus', praeteritum: 'streckte aus', perfekt: 'hat ausgestreckt' } },
    { de: 'Austausch', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'exchange', hi: 'आदान-प्रदान', ex: 'Ein Austausch zwischen beiden Parteien streckt sich aus.', exEn: 'An exchange between both parties extends itself.', exHi: 'Dono paksho ke beech ek aadaan-pradaan phailta hai.' },
    { de: 'Auszeit', art: 'die', gender: 'f', plural: 'Auszeiten', pos: 'noun', level: 'B2', en: 'time out, break', hi: 'ब्रेक', ex: 'Ich brauche eine Auszeit, bevor ich die Basis des Vertrags weise.', exEn: 'I need a break before I point out the basis of the contract.', exHi: 'Anubandh ka aadhaar bataane se pehle mujhe ek break chahiye.' },
    { de: 'Autor/in', art: 'der/die', gender: 'm/f', plural: 'Autoren/Autorinnen', pos: 'noun', level: 'B2', en: 'author', hi: 'लेखक', ex: 'Der Autor verlangt eine faire Verteilung.', exEn: 'The author demands a fair distribution.', exHi: 'Lekhak ek nishpaksh vitaran ki maang karta hai.' },
    { de: 'Bank', art: 'die', gender: 'f', plural: 'Bänke/Banken', pos: 'noun', level: 'B2', en: 'bank, bench', hi: 'बैंक, बेंच', ex: 'Die Bank genehmigt den Kredit.', exEn: 'The bank approves the loan.', exHi: 'Bank loan ko manzoori deta hai.' },
    { de: 'Basis', art: 'die', gender: 'f', plural: 'Basen', pos: 'noun', level: 'B2', en: 'basis', hi: 'आधार', ex: 'Ich brauche eine Auszeit, bevor ich die Basis des Vertrags weise.', exEn: 'I need a break before I point out the basis of the contract.', exHi: 'Anubandh ka aadhaar bataane se pehle mujhe ek break chahiye.' },
    { de: 'berücksichtigen', pos: 'verb', level: 'B2', en: 'to take into account', hi: 'ध्यान में रखना', prefix: 'be- (untrennbar)', ex: 'Ich muss zuerst eine Unstimmigkeit berücksichtigen.', exEn: 'First I must take a discrepancy into account.', exHi: 'Pehle mujhe ek asahamati ko dhyaan mein rakhna hoga.', conj: { praesens: 'berücksichtigt', praeteritum: 'berücksichtigte', perfekt: 'hat berücksichtigt' } },
    { de: 'Berufsschule', art: 'die', gender: 'f', plural: 'Berufsschulen', pos: 'noun', level: 'B2', en: 'vocational school', hi: 'व्यावसायिक स्कूल', ex: 'Er besucht eine Berufsschule.', exEn: 'He attends a vocational school.', exHi: 'Woh ek vyaavasaayik school jaata hai.' },
    { de: 'bilingual', pos: 'adjective', level: 'B2', en: 'bilingual', hi: 'द्विभाषी', ex: 'Die Kinder werden bilingual erzogen.', exEn: 'The children are raised bilingually.', exHi: 'Bacchon ko dwibhaashi tarike se paala jaata hai.' },
    { de: 'Cello', art: 'das', gender: 'n', plural: 'Cellos', pos: 'noun', level: 'B2', en: 'cello', hi: 'सेलो', ex: 'Sie spielt seit Jahren Cello.', exEn: 'She has played the cello for years.', exHi: 'Woh saalon se cello bajaati hai.' },
    { de: 'daherkommen', pos: 'verb', level: 'B2', en: 'to come along, appear', hi: 'आना, प्रकट होना', prefix: 'daher- (trennbar)', ex: 'Der Anlass kommt ganz unerwartet daher.', exEn: 'The occasion comes along quite unexpectedly.', exHi: 'Avsar bilkul apratyaashit roop se aata hai.', conj: { praesens: 'kommt daher', praeteritum: 'kam daher', perfekt: 'ist dahergekommen' } },
    { de: 'Defizit', art: 'das', gender: 'n', plural: 'Defizite', pos: 'noun', level: 'B2', en: 'deficit', hi: 'घाटा', ex: 'Das Unternehmen hat ein großes Defizit.', exEn: 'The company has a large deficit.', exHi: 'Company ka bada ghaata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum diese Verben wichtig sind',
      body: [ 'These verbs appear repeatedly in Goethe B2 Reading, Listening, Writing, Speaking, newspapers, university texts, and workplace communication. Master them before moving further.' ],
      note: 'This is primarily a vocabulary chapter — no new grammar rules are introduced.'
    },
    {
      title: 'Häufige untrennbare B2-Verben',
      body: [ 'These common inseparable verbs appear constantly at B2 — the prefix never splits.' ],
      table: {
        head: ['Verbs'],
        rows: [
          ['<span class="de">beschreiben, behandeln, beobachten, beantragen, begründen, beklagen, bekommen, benutzen, berichten, besprechen, bestätigen, bestellen, besuchen, beweisen, empfehlen, empfinden, entwickeln, entdecken, entscheiden, entstehen, erklären, erkennen, erreichen, erwarten, erwähnen, verändern, verbessern, verbieten, verbinden, verdienen, vergleichen, verlieren, vermeiden, verstehen, versuchen, versichern, vertreten, verwenden, zerstören</span>']
        ]
      },
      hinglish: 'Yeh inseparable verbs B2 mein baar-baar aate hain, aur inka prefix kabhi alag nahi hota — chahe sentence kaisa bhi ho.'
    },
    {
      title: 'Häufige trennbare B2-Verben',
      body: [ 'These common separable verbs appear constantly at B2 — the prefix moves to the end of the main clause.' ],
      table: {
        head: ['Verbs'],
        rows: [
          ['<span class="de">abschließen, abholen, abweichen, anfangen, ankommen, anmelden, annehmen, anrufen, aufbauen, aufgeben, aufnehmen, aufstehen, ausfüllen, ausgeben, ausreichen, beitreten, darstellen, durchführen, einführen, einladen, einreichen, einstellen, festlegen, feststellen, fortsetzen, herstellen, mitbringen, mitteilen, nachweisen, teilnehmen, vorbereiten, vorstellen, vortragen, weiterentwickeln, zurückgeben, zusammenarbeiten, zusammenfassen</span>']
        ]
      },
      hinglish: 'Yeh separable verbs bhi B2 mein baar-baar aate hain. Inka prefix tootkar main clause ke end mein chala jaata hai.'
    },
    {
      title: 'Verbfamilien',
      body: [ 'One base verb creates many useful B2 verbs — learn them together as a family.' ],
      table: {
        head: ['Base verb', 'Family'],
        rows: [
          ['stellen', 'bestellen, darstellen, vorstellen, feststellen, herstellen, einstellen, abstellen, umstellen'],
          ['kommen', 'ankommen, mitkommen, zurückkommen, bekommen, entkommen'],
          ['nehmen', 'annehmen, aufnehmen, teilnehmen, zurücknehmen'],
          ['führen', 'durchführen, einführen, anführen'],
          ['geben', 'aufgeben, ausgeben, zurückgeben, vorgeben'],
          ['ziehen', 'anziehen, ausziehen, umziehen, erziehen']
        ]
      },
      hinglish: 'Ek hi base verb se kai kaam ke B2 verbs ban jaate hain. Inhe ek family ki tarah saath mein yaad karo \u2014 alag-alag yaad karne se confusion hoti hai.'
    },
    {
      title: 'Häufige Kollokationen',
      body: [ 'Memorize these as complete chunks — never build them word-for-word from scratch.' ],
      table: {
        head: ['Collocations'],
        rows: [
          ['<span class="de">eine Entscheidung treffen, einen Antrag stellen, eine Präsentation halten, ein Projekt durchführen, eine Aufgabe erledigen, an einem Seminar teilnehmen, eine E-Mail weiterleiten, ein Formular ausfüllen, eine Meinung vertreten, eine Lösung entwickeln</span>']
        ]
      },
      hinglish: 'In collocations ko poore chunk ki tarah yaad karo. Inhe shabd-dar-shabd khud se banane ki koshish mat karo, kyunki German mein yeh combinations fix hote hain.'
    },
    {
      title: 'Häufige Synonyme',
      body: [ 'These synonym pairs are common at B2 — use either naturally depending on context.' ],
      table: {
        head: ['Verb 1', 'Verb 2'],
        rows: [
          ['verbessern', 'optimieren'],
          ['beginnen', 'anfangen'],
          ['beenden', 'abschließen'],
          ['sagen', 'mitteilen'],
          ['bekommen', 'erhalten'],
          ['zeigen', 'darstellen']
        ]
      },
      hinglish: 'Yeh synonym pairs B2 mein common hain. Context ke hisaab se dono chal jaate hain, bas formal writing mein doosra wala aksar behtar lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong prepositions, wrong collocation verbs, or confusing separable/inseparable.' ],
      mistakes: [
        { wrong: 'Ich nehme teil das Seminar.', right: 'Ich nehme an dem Seminar teil.', why: '"teilnehmen" requires "an + Dativ" — never a direct object.' },
        { wrong: 'Ich verbessere mich Deutsch.', right: 'Ich verbessere mein Deutsch.', why: '"verbessern" here takes a direct Akkusativ object, not a reflexive construction.' },
        { wrong: 'Ich entwickle eine Entscheidung.', right: 'Ich treffe eine Entscheidung.', why: 'The fixed collocation is "eine Entscheidung treffen" — not "entwickeln".' },
        { wrong: 'Ich beschreibe über das Problem.', right: 'Ich beschreibe das Problem.', why: '"beschreiben" takes a direct Akkusativ object — no preposition needed.' },
        { wrong: 'Ich beantrage für ein Visum.', right: 'Ich beantrage ein Visum.', why: '"beantragen" takes a direct Akkusativ object — no preposition needed.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 galat preposition lagana, collocation mein galat verb chunna, ya separable aur inseparable ko mila dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Lernstrategie',
      body: [ 'These high-frequency verbs dominate Goethe B2 reading, listening, writing, and speaking tasks.' ],
      note: 'Memory strategy: never memorize a verb alone. Always memorize Verb + Example sentence + Collocation + Verb family — this increases long-term retention dramatically.',
      hinglish: 'Yeh high-frequency verbs Goethe B2 ke chaaron parts mein sabse zyada aate hain, isliye inhe pakka karna sabse zyada faayda deta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Interview: Von der Bank auf die Bühne',
    titleEn: 'Interview: from the bank to the stage',
    tokens: [
      { w: 'Interview', role: 'plain', en: 'interview', hi: 'साक्षात्कार', type: 'Noun · neut.' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Lena', role: 'plain', en: 'Lena', hi: 'लीना', type: 'Name' },
      { w: 'Fischer', role: 'plain', en: 'Fischer', hi: 'फ़िशर', type: 'Name' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'who', hi: 'जिसने', type: 'Relativpronomen · Nom.' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years', hi: 'सालों', type: 'Noun · plural' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Bankangestellte', role: 'plain', en: 'bank employee', hi: 'बैंक कर्मचारी', type: 'Noun · fem.', why: 'die Bank (this chapter).' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Umschulung', role: 'plain', en: 'retraining', hi: 'पुनर्प्रशिक्षण', type: 'Noun · fem.', why: 'die Umschulung (this chapter).' },
      { w: 'zur', role: 'plain', en: 'to become a', hi: 'बनने के लिए', type: 'Contraction · zu der' },
      { w: 'Musiklehrerin', role: 'plain', en: 'music teacher (Satzende)', hi: 'संगीत शिक्षिका (Satzende)', type: 'Noun · fem.' },
      { w: 'gemacht', role: 'plain', en: 'made (Satzende)', hi: 'की (Satzende)', type: 'Verb · machen (Partizip II)' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Frage', role: 'plain', en: 'question', hi: 'सवाल', type: 'Noun · fem.' },
      { w: ':', plain: true },
      { w: 'Was', role: 'plain', en: 'what', hi: 'क्या', type: 'Fragewort' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'Sie', role: 'plain', en: 'you', hi: 'आपको', type: 'Pronoun' },
      { w: 'dazu', role: 'plain', en: 'to this', hi: 'इसके लिए', type: 'Pronominaladverb' },
      { w: 'bewegt', role: 'plain', en: 'moved (Satzende)', hi: 'प्रेरित किया (Satzende)', type: 'Verb · bewegen (Partizip II)' },
      { w: '?', plain: true },
      { w: 'Lena', role: 'plain', en: 'Lena', hi: 'लीना', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'habe', role: 'plain', en: 'have', hi: 'है', type: 'Verb · haben' },
      { w: 'irgendwann', role: 'plain', en: 'at some point', hi: 'किसी समय', type: 'Adverb' },
      { w: 'gemerkt', role: 'plain', en: 'noticed (Satzende)', hi: 'देखा (Satzende)', type: 'Verb · merken (Partizip II)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'mein', role: 'plain', en: 'my', hi: 'मेरी', type: 'Possessivartikel' },
      { w: 'Alltag', role: 'plain', en: 'everyday life', hi: 'रोज़मर्रा की ज़िंदगी', type: 'Noun · masc.' },
      { w: 'an', role: 'plain', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Bank', role: 'plain', en: 'bank', hi: 'बैंक', type: 'Noun · fem.', why: 'die Bank (this chapter).' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अब भी', type: 'Adverb' },
      { w: 'aus', role: 'plain', en: 'of', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Verhandlungen', role: 'plain', en: 'negotiations', hi: 'वार्ताएँ', type: 'Noun · plural', why: 'die Verhandlung (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Zahlen', role: 'plain', en: 'numbers', hi: 'संख्याएँ', type: 'Noun · plural' },
      { w: 'bestand', role: 'plain', en: 'consisted (Satzende)', hi: 'बनी थी (Satzende)', type: 'Verb · bestehen aus (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Cello', role: 'plain', en: 'cello', hi: 'सेलो', type: 'Noun · neut.', why: 'das Cello (this chapter).' },
      { w: ',', plain: true },
      { w: 'das', role: 'plain', en: 'that', hi: 'जो', type: 'Relativpronomen · Akk.' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'रूप में', type: 'Preposition' },
      { w: 'Kind', role: 'plain', en: 'child', hi: 'बच्चा', type: 'Noun · neut.' },
      { w: 'gelernt', role: 'plain', en: 'learned (Satzende)', hi: 'सीखा (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hatte', role: 'plain', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'kam', role: 'r-verb', en: 'was lost to me (trennbar)', hi: 'खो गया था', type: 'Verb · abhandenkommen (trennbar)', why: '"mir abhanden kommen" = to get lost to me — a fixed high-frequency B2 idiom (this chapter).' },
      { w: 'mir', role: 'plain', en: 'to me', hi: 'मुझसे', type: 'Pronoun · Dat.' },
      { w: 'dabei', role: 'plain', en: 'in the process', hi: 'इस दौरान', type: 'Pronominaladverb' },
      { w: 'völlig', role: 'plain', en: 'completely', hi: 'पूरी तरह', type: 'Adverb' },
      { w: 'abhanden', role: 'r-verb', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · abhandenkommen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Also', role: 'plain', en: 'so', hi: 'तो', type: 'Adverb' },
      { w: 'habe', role: 'plain', en: 'have', hi: 'है', type: 'Verb · haben' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'mich', role: 'plain', en: 'myself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Berufsschule', role: 'plain', en: 'vocational school (Satzende)', hi: 'व्यावसायिक स्कूल (Satzende)', type: 'Noun · fem.', why: 'die Berufsschule (this chapter).' },
      { w: 'beworben', role: 'plain', en: 'applied (Satzende)', hi: 'आवेदन किया (Satzende)', type: 'Verb · sich bewerben (Partizip II)' },
      { w: '.', plain: true },
      { w: 'Frage', role: 'plain', en: 'question', hi: 'सवाल', type: 'Noun · fem.' },
      { w: ':', plain: true },
      { w: 'Verlangt', role: 'plain', en: 'does require', hi: 'माँग करता है', type: 'Verb · verlangen', why: 'verlangen (this chapter).' },
      { w: 'eine', role: 'plain', en: 'such a', hi: 'ऐसी', type: 'Article' },
      { w: 'solche', role: 'plain', en: 'such', hi: 'ऐसी', type: 'Determiner' },
      { w: 'Umschulung', role: 'plain', en: 'retraining', hi: 'पुनर्प्रशिक्षण', type: 'Noun · fem.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'viel', role: 'plain', en: 'a lot of', hi: 'बहुत', type: 'Adjective' },
      { w: 'Mut', role: 'plain', en: 'courage', hi: 'साहस', type: 'Noun · masc.' },
      { w: '?', plain: true },
      { w: 'Lena', role: 'plain', en: 'Lena', hi: 'लीना', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ja', role: 'plain', en: 'yes', hi: 'हाँ', type: 'Answer particle' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'wollte', role: 'plain', en: 'wanted', hi: 'चाहती थी', type: 'Verb · wollen' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'länger', role: 'plain', en: 'any longer', hi: 'अब और', type: 'Adjective · Komparativ' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'vorgeben', role: 'r-verb', en: 'pretend (trennbar, Satzende)', hi: 'दिखावा करना (Satzende)', type: 'Verb · vorgeben (trennbar, Satzende)', why: 'vorgeben (trennbar) = to pretend/claim — high-frequency B2 verb (this chapter).' },
      { w: ',', plain: true },
      { w: 'zufrieden', role: 'plain', en: 'satisfied', hi: 'संतुष्ट', type: 'Adjective' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'sein', role: 'plain', en: 'be', hi: 'होना', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Am', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Anfang', role: 'plain', en: 'beginning', hi: 'शुरुआत', type: 'Noun · masc.' },
      { w: 'kam', role: 'r-verb', en: 'seemed (trennbar)', hi: 'लगा', type: 'Verb · vorkommen (trennbar)', why: '"es kam mir vor" = it seemed to me — vorkommen (trennbar), this chapter.' },
      { w: 'es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'mir', role: 'plain', en: 'to me', hi: 'मुझे', type: 'Pronoun · Dat.' },
      { w: 'seltsam', role: 'plain', en: 'strange', hi: 'अजीब', type: 'Adjective' },
      { w: 'vor', role: 'r-verb', en: '(prefix)', hi: '', type: 'Separable prefix · vorkommen' },
      { w: ',', plain: true },
      { w: 'wieder', role: 'plain', en: 'again', hi: 'फिर से', type: 'Adverb' },
      { w: 'Schülerin', role: 'plain', en: 'student', hi: 'छात्रा', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'sein', role: 'plain', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'unterrichte', role: 'plain', en: 'teach', hi: 'पढ़ाती हूँ', type: 'Verb · unterrichten (untrennbar)' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'bilingual', role: 'plain', en: 'bilingually', hi: 'द्विभाषी रूप से', type: 'Adjective', why: 'bilingual (this chapter).' },
      { w: ',', plain: true },
      { w: 'auf', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Deutsch', role: 'plain', en: 'German', hi: 'जर्मन', type: 'Noun · neut.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Englisch', role: 'plain', en: 'English', hi: 'अंग्रेज़ी', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Aussicht', role: 'plain', en: 'prospect', hi: 'संभावना', type: 'Noun · fem.', why: 'die Aussicht (this chapter).' },
      { w: 'auf', role: 'plain', en: 'of', hi: 'की', type: 'Preposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'echte', role: 'plain', en: 'real', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'berufliche', role: 'plain', en: 'professional', hi: 'पेशेवर', type: 'Adjective' },
      { w: 'Verbesserung', role: 'plain', en: 'improvement', hi: 'सुधार', type: 'Noun · fem.', why: 'die Verbesserung (this chapter).' },
      { w: 'motiviert', role: 'plain', en: 'motivates', hi: 'प्रेरित करती है', type: 'Verb · motivieren' },
      { w: 'mich', role: 'plain', en: 'me', hi: 'मुझे', type: 'Pronoun · Akk.' },
      { w: 'jeden', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Tag', role: 'plain', en: 'day', hi: 'दिन', type: 'Noun · masc.' },
      { w: 'aufs', role: 'plain', en: 'anew', hi: 'नए सिरे से', type: 'Contraction · auf das' },
      { w: 'Neue', role: 'plain', en: 'new (Satzende)', hi: 'नया (Satzende)', type: 'Adjective (noun use)' },
      { w: '.', plain: true }
    ],
    translation: 'Interview with Lena Fischer, who after ten years as a bank employee retrained as a music teacher. Question: What moved you to do this? Lena: At some point I noticed that my everyday life at the bank consisted only of negotiations and numbers. The cello I had learned as a child was completely lost to me in the process. So I applied to a vocational school. Question: Doesn\'t such a retraining require a lot of courage? Lena: Yes, but I no longer wanted to merely pretend to be satisfied. At the beginning it seemed strange to me to be a student again. By now I even teach bilingually, in German and English, and the prospect of a real professional improvement motivates me anew every day.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_010_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich überlege wirklich, mich noch mal umschulen zu lassen.', en: 'Timo, I\'m really considering retraining.' },
      { id: 'B2_010_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das erfordert bestimmt viel Geduld in deinem Alter, oder?', en: 'That surely requires a lot of patience at your age, right?' },
      { id: 'B2_010_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber ich habe schon eine gute Berufsschule entdeckt, die genau das anbietet.', en: 'Yes, but I already discovered a good vocational school that offers exactly that.' },
      { id: 'B2_010_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das beeindruckt mich echt, du gibst nicht so schnell auf.', en: 'That really impresses me, you don\'t give up so quickly.' }
    ],
    transcript: 'Timo, ich überlege wirklich, mich noch mal umschulen zu lassen. Das erfordert bestimmt viel Geduld in deinem Alter, oder? Ja, aber ich habe schon eine gute Berufsschule entdeckt, die genau das anbietet. Das beeindruckt mich echt, du gibst nicht so schnell auf.',
    translation: 'Timo, I\'m really considering retraining. That surely requires a lot of patience at your age, right? Yes, but I already discovered a good vocational school that offers exactly that. That really impresses me, you don\'t give up so quickly.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'überlege' },
      { w: 'wirklich' },
      { w: ',', plain: true },
      { w: 'mich' },
      { w: 'noch' },
      { w: 'mal' },
      { w: 'umschulen' },
      { w: 'zu' },
      { w: 'lassen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'erfordert' },
      { w: 'bestimmt' },
      { w: 'viel' },
      { w: 'Geduld' },
      { w: 'in' },
      { w: 'deinem' },
      { w: 'Alter' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'schon' },
      { w: 'eine' },
      { w: 'gute' },
      { w: 'Berufsschule' },
      { w: 'entdeckt' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'genau' },
      { w: 'das' },
      { w: 'anbietet' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'beeindruckt' },
      { w: 'mich' },
      { w: 'echt' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'gibst' },
      { w: 'nicht' },
      { w: 'so' },
      { w: 'schnell' },
      { w: 'auf' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was zieht Britta in Erwägung?', qEn: 'What is Britta considering?', options: ['einen Umzug', 'eine Umschulung', 'einen Urlaub', 'eine Kündigung'], optionsEn: ['a move', 'a retraining course', 'a holiday', 'a resignation'], answer: 1,
        explain: '"… mich noch mal umschulen zu lassen."' },
      { q: 'Was hat Britta schon gefunden?', qEn: 'What did Britta already find?', options: ['einen neuen Job', 'eine gute Berufsschule', 'einen Kredit', 'eine WG'], optionsEn: ['a new job', 'a good vocational school', 'a loan', 'a shared flat'], answer: 1,
        explain: '"… ich habe schon eine gute Berufsschule entdeckt."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Du überlegst eine Umschulung. Sag es deinem Freund.", taskEn: "You're considering retraining. Tell your friend.", de: "Ich überlege, mich noch mal umschulen zu lassen.", en: "I'm considering retraining." },
    { task: "Er sagt, das erfordere Geduld. Antworte.", taskEn: "He says that takes patience. Answer.", de: "Ja, aber ich habe schon eine gute Berufserfahrung.", en: "Yes, but I already have good professional experience." },
    { task: "Deine Chefin fragt, wie du bei der Verhandlung vorgehst.", taskEn: "Your boss asks how you'll proceed in the negotiation.", de: "Ich gehe ruhig vor und verlange eine angemessene Verteilung.", en: "I'll proceed calmly and demand a reasonable distribution." },
    { task: "Eine Kollegin fragt, was bei der Unstimmigkeit vorgekommen ist.", taskEn: "A colleague asks what happened in the disagreement.", de: "Es ist vorgekommen, dass jemand zu aggressiv aufgetreten ist.", en: "It happened that somebody came across too aggressively." },
    { task: "Ein Kollege fragt, wie du mit Kritik umgehst.", taskEn: "A colleague asks how you deal with criticism.", de: "Ich gehe offen damit um und verrate nichts weiter.", en: "I deal with it openly and don't pass anything on." },
    { task: "Rollenspiel: Ihr besprecht eine Verbesserung im Ablauf.", taskEn: "Role-play: you discuss an improvement to the process.", de: "Ich schlage eine klare Verteilung vor. — Dann verlangen wir keine Überstunden mehr.", en: "I propose a clear distribution. — Then we'll no longer demand overtime." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short workplace report or email (eight to ten sentences) about a negotiation or project — using at least six different high-frequency B2 verbs (mix of separable and inseparable), at least two fixed collocations, and one synonym pair.',
    starters: ['Wir schließen … ab.', 'Ich berücksichtige …', 'Der Autor verlangt …', 'Wir treffen eine Entscheidung, …'],
    placeholder: 'Wir müssen die Verhandlung heute abschließen. Zuerst berücksichtige ich …',
    minWords: 60
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which verb family does "vorstellen" belong to?',
      options: ['stellen', 'kommen', 'nehmen'],
      answer: 0,
      explain: '"vorstellen" is built from the base verb "stellen".'
    },
    gap: {
      sentence: ['Wir müssen die Verhandlung heute ', '.'],
      gaps: [ { answer: 'abschließen', accepts: ['abschließen'] } ],
      explain: '"abschließen" (to conclude) is the correct high-frequency separable verb here.'
    },
    match: {
      q: 'Match each verb to its synonym.',
      pairs: [
        { noun: 'verbessern', art: 'optimieren' },
        { noun: 'beginnen', art: 'anfangen' },
        { noun: 'beenden', art: 'abschließen' },
        { noun: 'bekommen', art: 'erhalten' }
      ]
    },
    builder: {
      target: 'Build the collocation: "to make a decision"',
      bank: ['eine', 'Entscheidung', 'treffen'],
      answer: ['eine', 'Entscheidung', 'treffen'],
      roles: {}
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich nehme teil das Seminar.',
      right: 'Ich nehme an dem Seminar teil.',
      explain: '"teilnehmen" requires the fixed preposition "an" + Dativ — never a direct object.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the correct collocation for "to make a decision"?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung entwickeln'], answer: 0,
      explain: 'The fixed collocation is "eine Entscheidung treffen" — memorize it as a chunk.' },
    { q: 'What is a synonym for "verbessern"?', options: ['optimieren', 'verlieren', 'zerstören'], answer: 0,
      explain: '"verbessern" and "optimieren" are common B2 synonyms.' },
    { q: 'Which verb family includes "ankommen", "bekommen", and "entkommen"?', options: ['kommen', 'stellen', 'nehmen'], answer: 0,
      explain: 'All three verbs are built from the base verb "kommen".' },
    { q: 'Complete: "Ich ___ an dem Seminar teil."', options: ['nehme', 'mache', 'gebe'], answer: 0,
      explain: '"teilnehmen an" is the fixed collocation — "nehme ... teil" is correct.' },
    { q: 'Which sentence contains an error?', options: ['Ich beschreibe das Problem.', 'Ich beschreibe über das Problem.', 'Ich beantrage ein Visum.'], answer: 1,
      explain: '"beschreiben" takes a direct Akkusativ object — no preposition needed.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-trenn', html: 'This chapter reviewed the highest-frequency B2 verbs — both separable (abschließen, vorgehen, vorkommen) and inseparable (berücksichtigen, verlangen, verraten) — that appear constantly in Goethe B2 material.' },
    { c: 'r-trenn', html: 'Verb families (stellen, kommen, nehmen, führen, geben, ziehen) let you learn many related verbs efficiently by recognizing the shared base.' },
    { c: 'r-trenn', html: 'Never memorize a verb alone — always with an example sentence, a collocation, and its verb family.' }
  ],
  revisionTips: [
    'Build a personal flashcard deck grouping verbs by family (stellen, kommen, nehmen) rather than alphabetically.',
    'Practise the fixed collocations (eine Entscheidung treffen, einen Antrag stellen) as whole chunks until they feel automatic.',
    'Read a Goethe B2 text and count how many high-frequency verbs from this chapter you recognize.'
  ]
};

window.CHAPTER = CHAPTER;
