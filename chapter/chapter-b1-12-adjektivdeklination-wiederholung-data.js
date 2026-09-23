/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 12
   "Adjektivdeklination (Wiederholung & Vertiefung)" — complete
   revision + deep-logic pass over adjective endings: weak
   (after der/die/das/die), mixed (after ein/kein/mein…), and
   strong (no article) declension, taught as a flowchart/logic
   system rather than memorized tables. Covers Nominativ,
   Akkusativ, Dativ, Genitiv.
   IMPORTANT: from this chapter onward, story dialogues use ONLY
   Anna (female voice) and Rohan (male voice) — no Max, no Frau
   Weber, per the two-voice audio system.
   Vocabulary source: uploaded chapter-12 list (112 items) —
   spans three natural clusters: (a) job-application vocabulary
   (Lebenslauf, Bewerbungsschreiben, Personalchef, Krankenkasse,
   Fortbildung, qualifiziert, seriös, aussagekräftig…), woven
   into the Anna/Rohan story dialogue about job-hunting; (b)
   fable/animal vocabulary (Fuchs, Rabe, Krokodil, Schildkröte,
   Giraffe, Ente, Mücke, brüllen, fressen, stehlen, loben,
   lügen, Beute, Moral, Fabel…), woven into the Reading passage
   as a retelling of "Der Fuchs und der Rabe" saturated with
   adjective endings in all three declension types; (c) a
   handful of meta-grammar terms (Pronominaladverb, Tempus,
   Satzteil, Temporalsatz, Markierung) included as vocabulary
   entries for forward compatibility with later grammar
   chapters.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-12-adjektivdeklination-wiederholung',
  phase: 'B1 · Phase 1',
  number: 12,
  title: 'Adjektivdeklination (Wiederholung & Vertiefung)',
  titleEn: 'Adjective declension — review & depth',
  description: 'ein großer Hund, der große Hund, großer Hund — same adjective, three different endings. This chapter stops asking you to memorize tables and instead teaches the LOGIC: the article and the adjective together must show gender, number, and case exactly once. Weak, mixed, and strong declension are three answers to the same question.',
  xp: 260,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 13, title: 'Goethe Mini 3', titleEn: 'Goethe Checkpoint 3 — Passiv, Relativsätze & Adjektivdeklination' , href: 'chapter-b1-13-goethe-mini-2.html' },

  prevChapter: { number: 11, title: 'Relativsätze im Dativ', titleEn: 'Relative clauses in the Dativ', href: 'chapter-b1-11-relativsaetze-dativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one system.</em>',
    intro: 'Antje has written a new job application — cover letter, CV, a photo Timo calls compelling — and every document needs one more certificate, one more adjective ending, weak, mixed or strong, all doing the same job: showing gender, number and case exactly once.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the SAME adjective take three different endings depending on the article in front of it'
    ],
    scene: 'Ein Café am Nachmittag — Antje zeigt Timo ihre Bewerbung',
    femaleSpeakers: ['Antje'],
    dialogue: [
      { speaker: 'Antje', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'लिखा है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'neues', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-es', type: 'Adjective' },
        { w: 'Bewerbungsschreiben', role: 'r-akkusativ', en: 'application letter', hi: 'आवेदन पत्र', pron: 'be-VAIR-bungs-shry-ben', type: 'Noun · neut.', why: 'das Bewerbungsschreiben (this chapter).', ex: 'ein neues Bewerbungsschreiben', exEn: 'a new application letter' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I have written a new application letter.', hi: 'Maine ek naya avedan patra likha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zeigst', role: 'r-verb', en: 'will you show', hi: 'दिखाओगी', pron: 'TSYKST', type: 'Verb · zeigen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'aktuellen', role: 'r-akkusativ', en: 'current', hi: 'हाल का', pron: 'ak-too-E-len', type: 'Adjective', why: 'aktuell (recycled Ch8).', ex: 'den aktuellen Lebenslauf', exEn: 'the current CV' },
        { w: 'Lebenslauf', role: 'r-akkusativ', en: 'CV', hi: 'जीवन-वृत्त', pron: 'LAY-benz-lowf', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Will you show me the current CV?', hi: 'Kya tum mujhe haal ka CV dikhaogi?' },
      { speaker: 'Antje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'vollständiger', role: 'r-subject', en: 'complete', hi: 'संपूर्ण', pron: 'FOL-shten-di-ger', type: 'Adjective', why: 'vollständig = complete (this chapter).', ex: 'ein vollständiger Lebenslauf', exEn: 'a complete CV' },
        { w: 'Lebenslauf', role: 'r-subject', en: 'CV', hi: 'जीवन-वृत्त', pron: 'LAY-benz-lowf', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes, here is my complete CV.', hi: 'Haan, yeh raha mera sampoorn CV.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'aussagekräftiges', role: 'r-subject', en: 'compelling', hi: 'प्रभावशाली', pron: 'OWS-zah-guh-kref-ti-ges', type: 'Adjective', why: 'aussagekräftig = compelling (this chapter).', ex: 'ein aussagekräftiges Foto', exEn: 'a compelling photo' },
        { w: 'Foto', role: 'r-subject', en: 'photo', hi: 'फ़ोटो', pron: 'FO-to', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'That is a compelling photo.', hi: 'Yeh ek prabhavshaali photo hai.' },
      { speaker: 'Antje', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'brauche', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khuh', type: 'Verb · brauchen (ich)' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'aktuelle', role: 'r-akkusativ', en: 'current', hi: 'हाल की', pron: 'ak-too-E-luh', type: 'Adjective' },
        { w: 'Bescheinigung', role: 'r-akkusativ', en: 'certificate', hi: 'प्रमाण पत्र', pron: 'be-SHY-ni-gung', type: 'Noun · fem.', why: 'die Bescheinigung (this chapter).', ex: 'eine aktuelle Bescheinigung', exEn: 'a current certificate' },
        { w: '.', plain: true }
      ], en: 'Thanks! I still need a current certificate.', hi: 'Dhanyavaad! Mujhe abhi aur ek haal ka pramaan patra chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Bescheinigung', role: 'r-akkusativ', en: 'certificate', hi: 'प्रमाण पत्र', pron: 'be-SHY-ni-gung', type: 'Noun · fem.' },
        { w: 'meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Which certificate do you mean?', hi: 'Tumhara kaunsa pramaan patra matlab hai?' },
      { speaker: 'Antje', tokens: [
        { w: 'Eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'alten', role: 'r-dativ', en: 'old', hi: 'पुरानी', pron: 'AL-ten', type: 'Adjective' },
        { w: 'Krankenkasse', role: 'r-dativ', en: 'health insurer (dat.)', hi: 'स्वास्थ्य बीमा से', pron: 'KRAN-ken-ka-suh', type: 'Noun · fem. dat.', why: 'die Krankenkasse (this chapter).', ex: 'eine Bescheinigung von meiner alten Krankenkasse', exEn: 'a certificate from my old health insurer' },
        { w: '.', plain: true }
      ], en: 'One from my old health insurer.', hi: 'Meri purani swasthya beema se ek.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ah', role: 'r-subject', en: 'ah', hi: 'आह', pron: 'ah', type: 'Interjection' },
        { w: 'ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'wichtige', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-ti-guh', type: 'Adjective' },
        { w: 'Voraussetzung', role: 'r-akkusativ', en: 'requirement', hi: 'शर्त', pron: 'for-OWS-zet-sung', type: 'Noun · fem.', why: 'die Voraussetzung (this chapter).', ex: 'eine wichtige Voraussetzung', exEn: 'an important requirement' },
        { w: '.', plain: true }
      ], en: 'Ah, yes. That is an important requirement.', hi: 'Aah, haan. Yeh ek zaroori shart hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every German adjective ending answers ONE question: <b>has the gender/case already been shown?</b> After <span class="de">der/die/das</span> the article already shows it, so the adjective barely needs to — <b>weak</b> (<span class="de">der große Hund</span>). After <span class="de">ein/kein/mein…</span> the article is ambiguous in three spots, so the adjective steps in there — <b>mixed</b> (<span class="de">ein großer Hund</span>). With no article at all, the adjective must show everything itself — <b>strong</b> (<span class="de">großer Hund</span>). Same word, same meaning — the ending just fills whatever gap the article leaves.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVDEKLINATION (B1 level, full review + depth): weak declension after definite articles (der/die/das/die), mixed declension after ein-words (ein/eine/ein/kein/mein/dein/sein/ihr/unser/euer), and strong declension with no article at all — across Nominativ, Akkusativ, Dativ, and Genitiv. Teach it as logic (does the article already show gender+case? if yes → weak; if partially → mixed; if no article → strong), not rote memorization. ' +
    'Do NOT expect adjective nominalisation, participle adjectives, or other B2 adjective structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Weak declension (after der/die/das/die): the adjective ending is -e in the Nominativ (all genders) and Akkusativ feminine/neuter, -en everywhere else (Akkusativ masculine, all Dativ, all Genitiv).\n' +
    '- Mixed declension (after ein/eine/ein/kein/mein…): Nominativ masculine takes -er, Nominativ/Akkusativ feminine and neuter take -e (except neuter Akkusativ/Nominativ is -es), everywhere else -en.\n' +
    '- Strong declension (no article): the adjective itself carries the signal the article would normally carry — -er (masc. Nom.), -e (fem. Nom./Akk., plural Nom./Akk.), -es (neut. Nom./Akk.), -en (masc./neut. Dat./Gen., plural Dat.), -em (masc./neut. Dat.), -er (fem. Dat./Gen., plural Gen.).\n' +
    '- Predicative adjectives (after sein, werden, bleiben, e.g. "Sie ist qualifiziert") NEVER take an ending — only attributive adjectives (directly before a noun) decline.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why (name weak/mixed/strong). If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Declension check:</b> one sentence on whether the learner correctly matched weak/mixed/strong to each article type used.</p>\n' +
    'Keep it under 140 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you can pick weak, mixed, or strong endings on the fly, in any case. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the flowchart once — especially the mixed-declension gaps (ein-Wörter in Nom. masc., Nom./Akk. neut.) — then continue.',
    low: 'Worth another pass through the Grammar section — build the habit of asking "does the article already show gender+case?" before choosing the ending.'
  },

  parserSentence: [
    { w: 'ein', role: 'plain' }, { w: 'großer', role: 'r-adjective' },
    { w: 'Hund', role: 'plain' }, { w: 'und', role: 'r-conjunction' },
    { w: 'der', role: 'plain' }, { w: 'große', role: 'r-adjective' },
    { w: 'Hund', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the article and the adjective together must show gender, number, and case exactly once.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Antje and Timo review a job application, full of weak, mixed, and strong adjective endings.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 112 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master weak, mixed, and strong declension as one logical system, not three tables to memorize.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a fable retelling saturated with adjective endings in all three declension types.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch weak, mixed, and strong adjective endings in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people, cities, apartments, and products using correct adjective endings.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a description using adjective declension naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Classify weak vs. mixed vs. strong, and drill endings across all four cases.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 112 chapter words — job-application vocabulary, fable/animal vocabulary, and grammar terms — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Weak/mixed/strong classification drills, ending-completion exercises, error correction, and a description-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full adjective-declension reference — logic flowchart, weak/mixed/strong tables across all four cases, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der große Hund', text: 'Apply weak declension after definite articles' },
    { de: 'ein großer Hund', text: 'Apply mixed declension after ein-words' },
    { de: 'großer Hund', text: 'Apply strong declension with no article' },
    { de: 'Nom · Akk · Dat · Gen', text: 'Choose the right ending in any of the four cases' },
    { de: 'Logik statt Tabellen', text: 'Reason through endings with the flowchart instead of memorizing' }
  ],

  // ---------- Vocabulary (112 items — full chapter-12 upload list) ----------
  vocab: [
    { de: 'Bewerbungsfoto', art: 'das', gender: 'n', plural: 'Bewerbungsfotos', pos: 'noun', level: 'B1', en: 'application photo', hi: 'आवेदन फ़ोटो', ex: 'Ich habe ein aktuelles Bewerbungsfoto mitgeschickt.', exEn: 'I sent along a current application photo.', exHi: 'Maine ek haaliya aavedan foto saath bheja.' },
    { de: 'Bewerbungsportal', art: 'das', gender: 'n', plural: 'Bewerbungsportale', pos: 'noun', level: 'B1', en: 'application website', hi: 'आवेदन वेबसाइट', ex: 'Das Bewerbungsportal war leicht zu bedienen.', exEn: 'The application portal was easy to use.', exHi: 'Aavedan portal use karne mein aasaan tha.' },
    { de: 'Bewerbungsschreiben', art: 'das', gender: 'n', plural: 'Bewerbungsschreiben', pos: 'noun', level: 'B1', en: 'cover letter', hi: 'आवेदन पत्र', ex: 'Ich habe endlich ein aussagekräftiges Bewerbungsschreiben fertig.', exEn: 'I finally have a meaningful cover letter finished.', exHi: 'Mera aakhirkaar ek saargarbhit aavedan patra taiyaar hai.' },
    { de: 'Bewerbungstraining', art: 'das', gender: 'n', plural: 'Bewerbungstrainings', pos: 'noun', level: 'B1', en: 'job application training', hi: 'नौकरी आवेदन प्रशिक्षण', ex: 'Das Bewerbungstraining half ihr sehr.', exEn: 'The application training helped her a lot.', exHi: 'Aavedan prashikshan ne uski bahut madad ki.' },
    { de: 'Konfliktgespräch', art: 'das', gender: 'n', plural: 'Konfliktgespräche', pos: 'noun', level: 'B1', en: 'argument, conflict talk', hi: 'विवाद वार्ता', ex: 'Das Konfliktgespräch mit dem Chef war schwierig.', exEn: 'The conflict talk with the boss was difficult.', exHi: 'Boss ke saath vivaad vaarta mushkil thi.' },
    { de: 'Arbeitnehmer', art: 'der', gender: 'm', plural: 'Arbeitnehmer', pos: 'noun', level: 'B1', en: 'worker', hi: 'कर्मचारी', ex: 'Jeder Arbeitnehmer hat bestimmte Rechte.', exEn: 'Every worker has certain rights.', exHi: 'Har karmchari ke kuch adhikaar hote hain.' },
    { de: 'Lebenslauf', art: 'der', gender: 'm', plural: 'Lebensläufe', pos: 'noun', level: 'B1', en: 'CV, résumé', hi: 'बायोडेटा', ex: 'Ist das der neue Lebenslauf?', exEn: 'Is that the new CV?', exHi: 'Kya yeh naya biodata hai?' },
    { de: 'Fortbildung', art: 'die', gender: 'f', plural: 'Fortbildungen', pos: 'noun', level: 'B1', en: 'further training', hi: 'आगे का प्रशिक्षण', ex: 'Die Firma bietet regelmäßige Fortbildungen an.', exEn: 'The company offers regular further training.', exHi: 'Company niyamit roop se aage ka prashikshan deti hai.' },
    { de: 'Krankenkasse', art: 'die', gender: 'f', plural: 'Krankenkassen', pos: 'noun', level: 'B1', en: 'insurance company', hi: 'बीमा कंपनी', ex: 'Ich muss noch eine seriöse Krankenkasse wählen.', exEn: 'I still need to choose a respectable insurance company.', exHi: 'Mujhe abhi bhi ek sammanit bima company chunni hai.' },
    { de: 'Personalabteilung', art: 'die', gender: 'f', plural: 'Personalabteilungen', pos: 'noun', level: 'B1', en: 'human resources (HR)', hi: 'मानव संसाधन विभाग', ex: 'Die Personalabteilung meldet sich nächste Woche.', exEn: 'HR will get in touch next week.', exHi: 'Manav sansaadhan vibhaag agle hafte sampark karega.' },
    { de: 'Voraussetzung', art: 'die', gender: 'f', plural: 'Voraussetzungen', pos: 'noun', level: 'B1', en: 'prerequisite, condition', hi: 'पूर्वापेक्षा', ex: 'Es kommt auf die relevanten Voraussetzungen der Stelle an.', exEn: 'It depends on the relevant prerequisites of the position.', exHi: 'Yeh pad ki prasangik poorvapekshaon par nirbhar karta hai.' },
    { de: 'jedoch', pos: 'conjunction', level: 'B1', en: 'however', hi: 'फिर भी', ex: 'Jedoch brauchst du auch ein überzeugendes Dokument.', exEn: 'However, you also need a convincing document.', exHi: 'Fir bhi, tumhein ek preraka dastavez bhi chahiye.' },
    { de: 'qualifiziert', pos: 'adjective', level: 'B1', en: 'qualified', hi: 'योग्य', ex: 'Meine Sorge ist, ob ich qualifiziert genug bin.', exEn: 'My worry is whether I\'m qualified enough.', exHi: 'Meri chinta yeh hai ki kya main kaafi yogya hoon.' },
    { de: 'zukünftig', pos: 'adjective', level: 'B1', en: 'future', hi: 'भविष्य का', ex: 'Ich hoffe, einen befriedigenden zukünftigen Job zu finden.', exEn: 'I hope to find a satisfying future job.', exHi: 'Mujhe ummeed hai ki main ek santoshjanak bhavishya ki naukri paunga.' },
    { de: 'überzeugen', pos: 'verb', level: 'B1', en: 'to convince (von + D.)', hi: 'यक़ीन दिलाना', ex: 'Sie überzeugte den Chef von ihrer Idee.', exEn: 'She convinced the boss of her idea.', exHi: 'Usne boss ko apne vichaar ka yakeen dilaya.', conj: { praesens: 'überzeugt', praeteritum: 'überzeugte', perfekt: 'hat überzeugt' } },
    { de: 'abschreiben', pos: 'verb', level: 'B1', en: 'to copy', hi: 'नक़ल करना', ex: 'Er hat den Satz einfach abgeschrieben.', exEn: 'He simply copied the sentence.', exHi: 'Usne bas vaakya ki nakal utaar li.', conj: { praesens: 'schreibt ab', praeteritum: 'schrieb ab', perfekt: 'hat abgeschrieben' } },
    { de: 'ankommen', pos: 'verb', level: 'B1', en: 'to depend on (auf + A.)', hi: 'निर्भर करना', ex: 'Es kommt auf die Voraussetzungen an.', exEn: 'It depends on the prerequisites.', exHi: 'Yeh poorvapekshaon par nirbhar karta hai.', conj: { praesens: 'kommt an', praeteritum: 'kam an', perfekt: 'ist angekommen' } },
    { de: 'beißen', pos: 'verb', level: 'B1', en: 'to bite', hi: 'काटना', ex: 'Der Fuchs biss in das Fleisch.', exEn: 'The fox bit into the meat.', exHi: 'Lomdi ne maas mein kaata.', conj: { praesens: 'beißt', praeteritum: 'biss', perfekt: 'hat gebissen' } },
    { de: 'danach', pos: 'adverb', level: 'B1', en: 'after that', hi: 'उसके बाद', ex: 'Du kümmerst dich am besten erst danach darum.', exEn: 'You\'d best take care of that only after that.', exHi: 'Iska sabse behtar tareeka hai ki tum uske baad hi iska dhyan do.' },
    { de: 'darum', pos: 'pronominal adverb', level: 'B1', en: '(sich darum kümmern: to take care of that)', hi: 'इस बारे में', ex: 'Darum kümmerst du dich am besten erst danach.', exEn: 'You\'d best take care of that only after that.', exHi: 'Iska tumhein baad mein dhyan dena chahiye.' },
    { de: 'darüber', pos: 'pronominal adverb', level: 'B1', en: 'about that', hi: 'उस बारे में', ex: 'Wir sollten darüber noch einmal sprechen.', exEn: 'We should talk about that once more.', exHi: 'Humein uske baare mein phir se baat karni chahiye.' },
    { de: 'PDF-Dokument', art: 'das', gender: 'n', plural: 'PDF-Dokumente', pos: 'noun', level: 'B1', en: 'PDF document', hi: 'पीडीएफ़ दस्तावेज़', ex: 'Du brauchst ein überzeugendes PDF-Dokument mit allen Bescheinigungen.', exEn: 'You need a convincing PDF document with all your certificates.', exHi: 'Tumhein sabhi prama patron ke saath ek preraka PDF dastavez chahiye.' },
    { de: 'Verständnis', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'sympathy, understanding', hi: 'समझ', ex: 'Sie zeigte großes Verständnis für meine Situation.', exEn: 'She showed great understanding for my situation.', exHi: 'Usne meri sthiti ke liye bahut samajh dikhayi.' },
    { de: 'decken', pos: 'verb', level: 'B1', en: 'to lay (den Tisch decken: lay the table)', hi: 'बिछाना', ex: 'Kannst du bitte den Tisch decken?', exEn: 'Could you please lay the table?', exHi: 'Kya tum kripya table laga sakte ho?', conj: { praesens: 'deckt', praeteritum: 'deckte', perfekt: 'hat gedeckt' } },
    { de: 'Bescheinigung', art: 'die', gender: 'f', plural: 'Bescheinigungen', pos: 'noun', level: 'B1', en: 'certificate', hi: 'प्रमाणपत्र', ex: 'Ich brauche eine Bescheinigung von meiner Universität.', exEn: 'I need a certificate from my university.', exHi: 'Mujhe apni university se ek prama patra chahiye.' },
    { de: 'Erhöhung', art: 'die', gender: 'f', plural: 'Erhöhungen', pos: 'noun', level: 'B1', en: 'increase', hi: 'वृद्धि', ex: 'Sie bat um eine Erhöhung ihres Gehalts.', exEn: 'She asked for an increase in her salary.', exHi: 'Usne apni tankhwaah mein vriddhi ki maang ki.' },
    { de: 'Forderung', art: 'die', gender: 'f', plural: 'Forderungen', pos: 'noun', level: 'B1', en: 'demand', hi: 'माँग', ex: 'Seine Forderung war den Mitarbeitern zu hoch.', exEn: 'His demand was too high for the employees.', exHi: 'Uski maang karmchariyon ke liye bahut zyada thi.' },
    { de: 'Gelegenheit', art: 'die', gender: 'f', plural: 'Gelegenheiten', pos: 'noun', level: 'B1', en: 'opportunity', hi: 'अवसर', ex: 'Das ist eine großartige Gelegenheit für dich.', exEn: 'That\'s a fantastic opportunity for you.', exHi: 'Yeh tumhare liye ek shaandaar avsar hai.' },
    { de: 'Institution', art: 'die', gender: 'f', plural: 'Institutionen', pos: 'noun', level: 'B1', en: 'institution', hi: 'संस्था', ex: 'Diese Institution bildet zukünftige Lehrer aus.', exEn: 'This institution trains future teachers.', exHi: 'Yeh sanstha bhavishya ke shikshakon ko prashikshit karti hai.' },
    { de: 'Lebensweisheit', art: 'die', gender: 'f', plural: 'Lebensweisheiten', pos: 'noun', level: 'B1', en: 'worldly wisdom', hi: 'व्यावहारिक ज्ञान', ex: 'Das ist eine gute Lebensweisheit.', exEn: 'That\'s good worldly wisdom.', exHi: 'Yeh achha vyavaharik gyaan hai.' },
    { de: 'Mahnung', art: 'die', gender: 'f', plural: 'Mahnungen', pos: 'noun', level: 'B1', en: 'reminder', hi: 'चेतावनी पत्र', ex: 'Ich habe eine Mahnung von der Krankenkasse bekommen.', exEn: 'I got a reminder from the insurance company.', exHi: 'Mujhe bima company se ek chetavani patra mila.' },
    { de: 'Versammlung', art: 'die', gender: 'f', plural: 'Versammlungen', pos: 'noun', level: 'B1', en: 'assembly', hi: 'सभा', ex: 'Die Versammlung fand im großen Saal statt.', exEn: 'The assembly took place in the large hall.', exHi: 'Sabha bade hall mein hui.' },
    { de: 'Vorstellung', art: 'die', gender: 'f', plural: 'Vorstellungen', pos: 'noun', level: 'B1', en: 'introduction', hi: 'परिचय', ex: 'Die Vorstellung des neuen Kollegen dauerte kurz.', exEn: 'The new colleague\'s introduction was short.', exHi: 'Naye sahkarmi ka parichay chota tha.' },
    { de: 'enthalten', pos: 'verb', level: 'B1', en: 'to contain', hi: 'शामिल होना', ex: 'Der Anhang enthält alle relevanten Dokumente.', exEn: 'The attachment contains all the relevant documents.', exHi: 'Anhang mein sabhi prasangik dastavez shaamil hain.', conj: { praesens: 'enthält', praeteritum: 'enthielt', perfekt: 'hat enthalten' } },
    { de: 'frühere', pos: 'adjective', level: 'B1', en: 'previous', hi: 'पिछला', ex: 'Meine frühere Stelle war weniger interessant.', exEn: 'My previous position was less interesting.', exHi: 'Meri pichli naukri kam dilchasp thi.' },
    { de: 'hassen', pos: 'verb', level: 'B1', en: 'to hate', hi: 'नफ़रत करना', ex: 'Er hasst lange Wartezeiten.', exEn: 'He hates long waiting times.', exHi: 'Use lambi pratiksha se nafrat hai.', conj: { praesens: 'hasst', praeteritum: 'hasste', perfekt: 'hat gehasst' } },
    { de: 'kleinmachen', pos: 'verb', level: 'B1', en: 'to belittle oneself', hi: 'खुद को छोटा दिखाना', ex: 'Mach dich im Gespräch nicht klein.', exEn: 'Don\'t belittle yourself in the conversation.', exHi: 'Baatcheet mein khud ko chhota mat dikhao.', conj: { praesens: 'macht klein', praeteritum: 'machte klein', perfekt: 'hat kleingemacht' } },
    { de: 'klären', pos: 'verb', level: 'B1', en: 'to settle, clarify', hi: 'स्पष्ट करना', ex: 'Wir müssen diese Frage noch klären.', exEn: 'We still need to settle this question.', exHi: 'Humein is sawaal ko abhi bhi spasht karna hai.', conj: { praesens: 'klärt', praeteritum: 'klärte', perfekt: 'hat geklärt' } },
    { de: 'mitschicken', pos: 'verb', level: 'B1', en: 'to send along', hi: 'साथ भेजना', ex: 'Ich habe ein aktuelles Bewerbungsfoto mitgeschickt.', exEn: 'I sent along a current application photo.', exHi: 'Maine ek haaliya aavedan foto saath bheja.', conj: { praesens: 'schickt mit', praeteritum: 'schickte mit', perfekt: 'hat mitgeschickt' } },
    { de: 'relevant', pos: 'adjective', level: 'B1', en: 'relevant', hi: 'प्रासंगिक', ex: 'Es kommt auf die relevanten Voraussetzungen an.', exEn: 'It depends on the relevant prerequisites.', exHi: 'Yeh prasangik poorvapekshaon par nirbhar karta hai.' },
    { de: 'schätzen', pos: 'verb', level: 'B1', en: 'to guess, value', hi: 'अनुमान लगाना / महत्व देना', ex: 'Die Personalchefin schätzt ehrliche Bewerber sehr.', exEn: 'The HR director values honest applicants a lot.', exHi: 'HR pramukh imandaar aavedakon ko bahut mahatva deti hai.', conj: { praesens: 'schätzt', praeteritum: 'schätzte', perfekt: 'hat geschätzt' } },
    { de: 'seriös', pos: 'adjective', level: 'B1', en: 'respectable', hi: 'सम्मानित', ex: 'Ich muss noch eine seriöse Krankenkasse wählen.', exEn: 'I still need to choose a respectable insurance company.', exHi: 'Mujhe abhi bhi ek sammanit bima company chunni hai.' },
    { de: 'sich verspäten', pos: 'verb', level: 'B1', en: 'to be late', hi: 'देर हो जाना', ex: 'Bitte verspäte dich nicht beim Vorstellungsgespräch.', exEn: 'Please don\'t be late for the job interview.', exHi: 'Kripya interview mein der mat karna.', conj: { praesens: 'verspätet sich', praeteritum: 'verspätete sich', perfekt: 'hat sich verspätet' } },
    { de: 'streiken', pos: 'verb', level: 'B1', en: 'to go on strike', hi: 'हड़ताल करना', ex: 'Die Arbeitnehmer streikten für höhere Löhne.', exEn: 'The workers went on strike for higher wages.', exHi: 'Karmchari zyada tankhwaah ke liye hadtaal par gaye.', conj: { praesens: 'streikt', praeteritum: 'streikte', perfekt: 'hat gestreikt' } },
    { de: 'sämtlich', pos: 'adjective', level: 'B1', en: 'all', hi: 'सभी', ex: 'Sämtliche Unterlagen wurden geprüft.', exEn: 'All the documents were checked.', exHi: 'Sabhi dastavezon ki jaanch ki gayi.' },
    { de: 'aussagekräftig', pos: 'adjective', level: 'B1', en: 'meaningful', hi: 'सारगर्भित', ex: 'Ich habe endlich ein aussagekräftiges Bewerbungsschreiben fertig.', exEn: 'I finally have a meaningful cover letter finished.', exHi: 'Mera aakhirkaar ek saargarbhit aavedan patra taiyaar hai.' },
    { de: 'befriedigend', pos: 'adjective', level: 'B1', en: 'satisfying', hi: 'संतोषजनक', ex: 'Ich hoffe, einen befriedigenden Job zu finden.', exEn: 'I hope to find a satisfying job.', exHi: 'Mujhe ummeed hai ki main santoshjanak naukri paunga.' },
    { de: 'brüllen', pos: 'verb', level: 'B1', en: 'to roar', hi: 'दहाड़ना', ex: 'Der Löwe brüllte laut über das Gelände.', exEn: 'The lion roared loudly over the site.', exHi: 'Sher zor se sthal par dahada.', conj: { praesens: 'brüllt', praeteritum: 'brüllte', perfekt: 'hat gebrüllt' } },
    { de: 'Gelände', art: 'das', gender: 'n', plural: 'Gelände', pos: 'noun', level: 'B1', en: 'site', hi: 'स्थल', ex: 'Das Gelände war groß und grün.', exEn: 'The site was large and green.', exHi: 'Sthal bada aur hara-bhara tha.' },
    { de: 'Institut', art: 'das', gender: 'n', plural: 'Institute', pos: 'noun', level: 'B1', en: 'institute', hi: 'संस्थान', ex: 'Das Institut liegt am Stadtrand.', exEn: 'The institute is on the edge of town.', exHi: 'Sansthan shahar ke kinaare hai.' },
    { de: 'Krokodil', art: 'das', gender: 'n', plural: 'Krokodile', pos: 'noun', level: 'B1', en: 'crocodile', hi: 'मगरमच्छ', ex: 'Das Krokodil lag ruhig im Wasser.', exEn: 'The crocodile lay calmly in the water.', exHi: 'Magarmach paani mein shaant leta tha.' },
    { de: 'Lagerfeuer', art: 'das', gender: 'n', plural: 'Lagerfeuer', pos: 'noun', level: 'B1', en: 'campfire', hi: 'शिविर की आग', ex: 'Am Lagerfeuer erzählten sie sich Fabeln.', exEn: 'By the campfire, they told each other fables.', exHi: 'Aag ke paas, unhone ek-doosre ko kahaniyaan sunayi.' },
    { de: 'davongehen', pos: 'verb', level: 'B1', en: 'to leave', hi: 'चले जाना', ex: 'Der Fuchs ging enttäuscht davon.', exEn: 'The fox left disappointed.', exHi: 'Lomdi nirash hokar chali gayi.', conj: { praesens: 'geht davon', praeteritum: 'ging davon', perfekt: 'ist davongegangen' } },
    { de: 'Anhang', art: 'der', gender: 'm', plural: 'Anhänge', pos: 'noun', level: 'B1', en: 'appendix, attachment', hi: 'अनुलग्नक', ex: 'Der Anhang enthält alle relevanten Dokumente.', exEn: 'The attachment contains all the relevant documents.', exHi: 'Anhang mein sabhi prasangik dastavez shaamil hain.' },
    { de: 'Download', art: 'der', gender: 'm', plural: 'Downloads', pos: 'noun', level: 'B1', en: 'download', hi: 'डाउनलोड', ex: 'Der Download des Formulars dauerte nur eine Minute.', exEn: 'Downloading the form only took a minute.', exHi: 'Form download hone mein sirf ek minute laga.' },
    { de: 'Eindruck', art: 'der', gender: 'm', plural: 'Eindrücke', pos: 'noun', level: 'B1', en: 'impression', hi: 'प्रभाव', ex: 'Sie hinterließ einen guten Eindruck.', exEn: 'She left a good impression.', exHi: 'Usne achha prabhaav chhoda.' },
    { de: 'Feind', art: 'der', gender: 'm', plural: 'Feinde', pos: 'noun', level: 'B1', en: 'enemy', hi: 'दुश्मन', ex: 'Der Fuchs war des Raben größter Feind.', exEn: 'The fox was the crow\'s biggest enemy.', exHi: 'Lomdi kauve ka sabse bada dushman thi.' },
    { de: 'Fuchs', art: 'der', gender: 'm', plural: 'Füchse', pos: 'noun', level: 'B1', en: 'fox', hi: 'लोमड़ी', ex: 'Ein schlauer Fuchs stand unter dem Baum.', exEn: 'A clever fox stood under the tree.', exHi: 'Ek chalak lomdi ped ke neeche khadi thi.' },
    { de: 'Grill', art: 'der', gender: 'm', plural: 'Grills', pos: 'noun', level: 'B1', en: 'grill', hi: 'ग्रिल', ex: 'Der Grill stand neben dem Lagerfeuer.', exEn: 'The grill stood next to the campfire.', exHi: 'Grill aag ke paas rakha tha.' },
    { de: 'Hirsch', art: 'der', gender: 'm', plural: 'Hirsche', pos: 'noun', level: 'B1', en: 'stag', hi: 'हिरण', ex: 'Ein stolzer Hirsch lief durch den Wald.', exEn: 'A proud stag ran through the forest.', exHi: 'Ek garvit hiran jungle se guzra.' },
    { de: 'Personalchef', art: 'der', gender: 'm', plural: 'Personalchefs', pos: 'noun', level: 'B1', en: 'HR director', hi: 'मानव संसाधन प्रमुख', ex: 'Der Personalchef stellte viele Fragen.', exEn: 'The HR director asked many questions.', exHi: 'HR pramukh ne kai sawaal poochhe.' },
    { de: 'Pinguin', art: 'der', gender: 'm', plural: 'Pinguine', pos: 'noun', level: 'B1', en: 'penguin', hi: 'पेंगुइन', ex: 'Der kleine Pinguin watschelte über das Eis.', exEn: 'The small penguin waddled over the ice.', exHi: 'Chhota penguin barf par lad-khada chalta tha.' },
    { de: 'Prof', art: 'der', gender: 'm', plural: 'Profs', pos: 'noun', level: 'B1', en: 'professor (informal)', hi: 'प्रोफ़ेसर', ex: 'Der Prof erklärte das Thema sehr gut.', exEn: 'The professor explained the topic very well.', exHi: 'Professor ne vishay bahut achhi tarah samjhaya.' },
    { de: 'Profi', art: 'der', gender: 'm', plural: 'Profis', pos: 'noun', level: 'B1', en: 'professional', hi: 'पेशेवर', ex: 'Sie arbeitet wie eine echte Profi.', exEn: 'She works like a true professional.', exHi: 'Woh ek sacchi peshevar ki tarah kaam karti hai.' },
    { de: 'Präsident', art: 'der', gender: 'm', plural: 'Präsidenten', pos: 'noun', level: 'B1', en: 'president', hi: 'राष्ट्रपति', ex: 'Der Präsident hielt eine lange Rede.', exEn: 'The president gave a long speech.', exHi: 'Rashtrapati ne lambaa bhaashan diya.' },
    { de: 'Rabe', art: 'der', gender: 'm', plural: 'Raben', pos: 'noun', level: 'B1', en: 'crow', hi: 'कौआ', ex: 'Der stolze Rabe saß auf dem Ast.', exEn: 'The proud crow sat on the branch.', exHi: 'Garvit kauwa daal par baitha tha.' },
    { de: 'Ratgeber', art: 'der', gender: 'm', plural: 'Ratgeber', pos: 'noun', level: 'B1', en: 'advisor, guide', hi: 'सलाहकार', ex: 'Dieser Ratgeber half vielen Bewerbern.', exEn: 'This guide helped many applicants.', exHi: 'Is salahkaar ne kai aavedakon ki madad ki.' },
    { de: 'Schatz', art: 'der', gender: 'm', plural: 'Schätze', pos: 'noun', level: 'B1', en: 'darling, treasure', hi: 'ख़ज़ाना / प्रिय', ex: 'Der versteckte Schatz lag tief im Wald.', exEn: 'The hidden treasure lay deep in the forest.', exHi: 'Chhipa hua khazana jungle mein gehra tha.' },
    { de: 'Schnabel', art: 'der', gender: 'm', plural: 'Schnäbel', pos: 'noun', level: 'B1', en: 'beak', hi: 'चोंच', ex: 'Im Schnabel des Raben lag ein Stück Käse.', exEn: 'In the crow\'s beak lay a piece of cheese.', exHi: 'Kauwe ki chonch mein cheese ka tukda tha.' },
    { de: 'Stand', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'status', hi: 'स्थिति', ex: 'Der aktuelle Stand der Bewerbung ist unklar.', exEn: 'The current status of the application is unclear.', exHi: 'Aavedan ki haaliya sthiti spasht nahi hai.' },
    { de: 'Zweck', art: 'der', gender: 'm', plural: 'Zwecke', pos: 'noun', level: 'B1', en: 'purpose', hi: 'उद्देश्य', ex: 'Der Zweck des Treffens war klar.', exEn: 'The purpose of the meeting was clear.', exHi: 'Meeting ka uddeshya spasht tha.' },
    { de: 'Arbeitnehmerin', art: 'die', gender: 'f', plural: 'Arbeitnehmerinnen', pos: 'noun', level: 'B1', en: 'worker (female)', hi: 'महिला कर्मचारी', ex: 'Die Arbeitnehmerin bekam eine Gehaltserhöhung.', exEn: 'The worker got a salary increase.', exHi: 'Karmchari ko tankhwaah mein vriddhi mili.' },
    { de: 'Beute', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'prey', hi: 'शिकार', ex: 'Der Fuchs sah seine Beute schon von Weitem.', exEn: 'The fox already saw its prey from afar.', exHi: 'Lomdi ne apna shikaar door se hi dekh liya tha.' },
    { de: 'Ente', art: 'die', gender: 'f', plural: 'Enten', pos: 'noun', level: 'B1', en: 'duck', hi: 'बत्तख', ex: 'Eine kleine Ente schwamm auf dem Teich.', exEn: 'A small duck swam on the pond.', exHi: 'Ek chhoti battakh talaab mein tairti thi.' },
    { de: 'Fabel', art: 'die', gender: 'f', plural: 'Fabeln', pos: 'noun', level: 'B1', en: 'fable', hi: 'नीति कथा', ex: 'Diese Fabel hat eine wichtige Moral.', exEn: 'This fable has an important moral.', exHi: 'Is katha ka ek mahatvapurna niti-vachan hai.' },
    { de: 'Feindin', art: 'die', gender: 'f', plural: 'Feindinnen', pos: 'noun', level: 'B1', en: 'enemy (female)', hi: 'दुश्मन (महिला)', ex: 'Die Feindin des Raben war schlau.', exEn: 'The crow\'s enemy was clever.', exHi: 'Kauwe ki dushman chalak thi.' },
    { de: 'Fliege', art: 'die', gender: 'f', plural: 'Fliegen', pos: 'noun', level: 'B1', en: 'fly', hi: 'मक्खी', ex: 'Eine Fliege flog um das Lagerfeuer.', exEn: 'A fly flew around the campfire.', exHi: 'Ek makkhi aag ke aas-paas udd rahi thi.' },
    { de: 'Geduld', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'patience', hi: 'धैर्य', ex: 'Bei der Jobsuche braucht man viel Geduld.', exEn: 'You need a lot of patience during job hunting.', exHi: 'Naukri ki khoj mein bahut dhairya chahiye.' },
    { de: 'Giraffe', art: 'die', gender: 'f', plural: 'Giraffen', pos: 'noun', level: 'B1', en: 'giraffe', hi: 'जिराफ़', ex: 'Eine große Giraffe stand am Gelände.', exEn: 'A tall giraffe stood at the site.', exHi: 'Ek lambi giraffe sthal par khadi thi.' },
    { de: 'Jagd', art: 'die', gender: 'f', plural: 'Jagden', pos: 'noun', level: 'B1', en: 'hunt', hi: 'शिकार', ex: 'Die Jagd des Fuchses dauerte den ganzen Tag.', exEn: 'The fox\'s hunt lasted the whole day.', exHi: 'Lomdi ka shikaar poora din chala.' },
    { de: 'Jobsuche', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'job search', hi: 'नौकरी की खोज', ex: 'Frischer Mut zahlt sich bei der aktuellen Jobsuche aus.', exEn: 'Fresh courage pays off during the current job search.', exHi: 'Taaza saahas haaliya naukri ki khoj mein phal deta hai.' },
    { de: 'Kabine', art: 'die', gender: 'f', plural: 'Kabinen', pos: 'noun', level: 'B1', en: 'cabin', hi: 'कैबिन', ex: 'Die kleine Kabine hatte ein schönes Fenster.', exEn: 'The small cabin had a beautiful window.', exHi: 'Chhote cabin mein ek sundar khidki thi.' },
    { de: 'Moral', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'moral', hi: 'नैतिक शिक्षा', ex: 'Die Moral der Fabel ist einfach: sei vorsichtig mit Lob.', exEn: 'The fable\'s moral is simple: be careful with praise.', exHi: 'Kahani ki niti seedhi hai: prashansa se saavdhaan raho.' },
    { de: 'Mücke', art: 'die', gender: 'f', plural: 'Mücken', pos: 'noun', level: 'B1', en: 'mosquito', hi: 'मच्छर', ex: 'Eine Mücke störte uns am Lagerfeuer.', exEn: 'A mosquito bothered us by the campfire.', exHi: 'Ek machhar ne aag ke paas humein pareshaan kiya.' },
    { de: 'Personalchefin', art: 'die', gender: 'f', plural: 'Personalchefinnen', pos: 'noun', level: 'B1', en: 'HR director (female)', hi: 'मानव संसाधन प्रमुख (महिला)', ex: 'Deine zukünftige Personalchefin schätzt ehrliche Bewerber.', exEn: 'Your future HR director values honest applicants.', exHi: 'Tumhari bhavishya ki HR pramukh imandaar aavedakon ko mahatva degi.' },
    { de: 'Personalien', pos: 'noun', level: 'B1', en: 'personal data', hi: 'व्यक्तिगत जानकारी', ex: 'Bitte geben Sie Ihre Personalien vollständig an.', exEn: 'Please provide your personal data in full.', exHi: 'Kripya apni poori vyaktigat jaankari dein.' },
    { de: 'Pflicht', art: 'die', gender: 'f', plural: 'Pflichten', pos: 'noun', level: 'B1', en: 'duty', hi: 'कर्तव्य', ex: 'Jeder Arbeitnehmer hat bestimmte Pflichten.', exEn: 'Every worker has certain duties.', exHi: 'Har karmchari ke kuch kartavya hote hain.' },
    { de: 'Präsidentin', art: 'die', gender: 'f', plural: 'Präsidentinnen', pos: 'noun', level: 'B1', en: 'president (female)', hi: 'राष्ट्रपति (महिला)', ex: 'Die Präsidentin eröffnete die Versammlung.', exEn: 'The president opened the assembly.', exHi: 'Rashtrapati ne sabha ka udghaatan kiya.' },
    { de: 'Rede', art: 'die', gender: 'f', plural: 'Reden', pos: 'noun', level: 'B1', en: 'speech', hi: 'भाषण', ex: 'Die Rede des Präsidenten war beeindruckend.', exEn: 'The president\'s speech was impressive.', exHi: 'Rashtrapati ka bhaashan prabhaavshaali tha.' },
    { de: 'Schildkröte', art: 'die', gender: 'f', plural: 'Schildkröten', pos: 'noun', level: 'B1', en: 'turtle', hi: 'कछुआ', ex: 'Eine langsame Schildkröte überquerte den Weg.', exEn: 'A slow turtle crossed the path.', exHi: 'Ek dheemi kachhua raste ko paar kar raha tha.' },
    { de: 'Spätschicht', art: 'die', gender: 'f', plural: 'Spätschichten', pos: 'noun', level: 'B1', en: 'late shift', hi: 'देर की पाली', ex: 'Sie arbeitet diese Woche die Spätschicht.', exEn: 'She\'s working the late shift this week.', exHi: 'Woh is hafte der ki pali mein kaam kar rahi hai.' },
    { de: 'Teilnahme', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'participation', hi: 'भागीदारी', ex: 'Die Teilnahme am Bewerbungstraining ist freiwillig.', exEn: 'Participation in the application training is voluntary.', exHi: 'Aavedan prashikshan mein bhaagidari ichchhik hai.' },
    { de: 'Vorlage', art: 'die', gender: 'f', plural: 'Vorlagen', pos: 'noun', level: 'B1', en: 'guideline, template', hi: 'दिशानिर्देश', ex: 'Ich habe eine gute Vorlage für den Lebenslauf gefunden.', exEn: 'I found a good template for the CV.', exHi: 'Maine biodata ke liye ek achha template dhoondh liya.' },
    { de: 'fressen', pos: 'verb', level: 'B1', en: 'to eat (of animals)', hi: 'खाना (जानवरों के लिए)', ex: 'Das Krokodil fraß seine Beute schnell.', exEn: 'The crocodile ate its prey quickly.', exHi: 'Magarmach ne apna shikaar jaldi kha liya.', conj: { praesens: 'frisst', praeteritum: 'fraß', perfekt: 'hat gefressen' } },
    { de: 'kraftlos', pos: 'adjective', level: 'B1', en: 'powerless', hi: 'शक्तिहीन', ex: 'Nach der langen Jagd fühlte sich der Hirsch kraftlos.', exEn: 'After the long hunt, the stag felt powerless.', exHi: 'Lambe shikaar ke baad, hiran ko shaktiheen mahsoos hua.' },
    { de: 'loben', pos: 'verb', level: 'B1', en: 'to praise', hi: 'प्रशंसा करना', ex: 'Der Fuchs lobte den schönen Gesang des Raben.', exEn: 'The fox praised the crow\'s beautiful singing.', exHi: 'Lomdi ne kauwe ke sundar gaane ki prashansa ki.', conj: { praesens: 'lobt', praeteritum: 'lobte', perfekt: 'hat gelobt' } },
    { de: 'lügen', pos: 'verb', level: 'B1', en: 'to lie', hi: 'झूठ बोलना', ex: 'Der Fuchs log, um das Fleisch zu bekommen.', exEn: 'The fox lied to get the meat.', exHi: 'Lomdi ne maas paane ke liye jhooth bola.', conj: { praesens: 'lügt', praeteritum: 'log', perfekt: 'hat gelogen' } },
    { de: 'scharf', pos: 'adjective', level: 'B1', en: 'sharp', hi: 'तीखा', ex: 'Das Krokodil hat scharfe Zähne.', exEn: 'The crocodile has sharp teeth.', exHi: 'Magarmach ke daant tez hote hain.' },
    { de: 'selbstverständlich', pos: 'adverb', level: 'B1', en: 'of course', hi: 'बेशक', ex: 'Selbstverständlich helfe ich dir bei der Bewerbung.', exEn: 'Of course I\'ll help you with the application.', exHi: 'Bilkul, main tumhari aavedan mein madad karunga.' },
    { de: 'sich beziehen', pos: 'verb', level: 'B1', en: 'to refer to (auf + A.)', hi: 'संदर्भित होना', ex: 'Der Satz bezieht sich auf die Fabel.', exEn: 'The sentence refers to the fable.', exHi: 'Vaakya kahani ka sandarbh deta hai.', conj: { praesens: 'bezieht sich', praeteritum: 'bezog sich', perfekt: 'hat sich bezogen' } },
    { de: 'sich eignen', pos: 'verb', level: 'B1', en: 'to be suitable for (für + A.)', hi: 'उपयुक्त होना', ex: 'Sie eignet sich sehr gut für diese Stelle.', exEn: 'She is very well suited for this position.', exHi: 'Woh is pad ke liye bahut uchit hai.', conj: { praesens: 'eignet sich', praeteritum: 'eignete sich', perfekt: 'hat sich geeignet' } },
    { de: 'sich erkundigen', pos: 'verb', level: 'B1', en: 'to inquire (nach + D.)', hi: 'पूछताछ करना', ex: 'Ich erkundige mich nach dem aktuellen Stand.', exEn: 'I\'m inquiring about the current status.', exHi: 'Main haaliya sthiti ke baare mein poochhtaachh kar raha hoon.', conj: { praesens: 'erkundigt sich', praeteritum: 'erkundigte sich', perfekt: 'hat sich erkundigt' } },
    { de: 'stecken', pos: 'verb', level: 'B1', en: 'to hide (in + D.)', hi: 'छिपाना', ex: 'Der Schatz steckte tief im Wald.', exEn: 'The treasure was hidden deep in the forest.', exHi: 'Khazana jungle mein gehra chhipa tha.', conj: { praesens: 'steckt', praeteritum: 'steckte', perfekt: 'hat gesteckt' } },
    { de: 'stehlen', pos: 'verb', level: 'B1', en: 'to steal', hi: 'चोरी करना', ex: 'Der Fuchs wollte das Fleisch stehlen.', exEn: 'The fox wanted to steal the meat.', exHi: 'Lomdi maas chori karna chahti thi.', conj: { praesens: 'stiehlt', praeteritum: 'stahl', perfekt: 'hat gestohlen' } },
    { de: 'vorsingen', pos: 'verb', level: 'B1', en: 'to sing (for someone)', hi: 'गाकर सुनाना', ex: 'Der Rabe sollte dem Fuchs vorsingen.', exEn: 'The crow was supposed to sing for the fox.', exHi: 'Kauwe ko lomdi ke liye gaana tha.', conj: { praesens: 'singt vor', praeteritum: 'sang vor', perfekt: 'hat vorgesungen' } },
    { de: 'zurückbrüllen', pos: 'verb', level: 'B1', en: 'to roar back', hi: 'वापस दहाड़ना', ex: 'Der Löwe brüllte zurück.', exEn: 'The lion roared back.', exHi: 'Sher ne vaapas dahaad diya.', conj: { praesens: 'brüllt zurück', praeteritum: 'brüllte zurück', perfekt: 'hat zurückgebrüllt' } },
    { de: 'zwischenmenschlich', pos: 'adjective', level: 'B1', en: 'interpersonal', hi: 'पारस्परिक', ex: 'Zwischenmenschliche Konflikte sind normal.', exEn: 'Interpersonal conflicts are normal.', exHi: 'Paarasparik vivaad saamaanya hain.' },
    { de: 'Pronominaladverb', art: 'das', gender: 'n', plural: 'Pronominaladverbien', pos: 'noun', level: 'B1', en: 'pronominal adverb', hi: 'सर्वनाम क्रियाविशेषण', ex: '"Darüber" und "darauf" sind Pronominaladverbien.', exEn: '"Darüber" and "darauf" are pronominal adverbs.', exHi: '"Darüber" aur "darauf" pronominal adverbs hain.' },
    { de: 'Tempus', art: 'das', gender: 'n', plural: 'Tempora', pos: 'noun', level: 'B1', en: 'tense', hi: 'काल', ex: 'Das Präteritum ist ein wichtiges Tempus.', exEn: 'The Präteritum is an important tense.', exHi: 'Präteritum ek mahatvapurna kaal hai.' },
    { de: 'Satzteil', art: 'der', gender: 'm', plural: 'Satzteile', pos: 'noun', level: 'B1', en: 'part of the sentence', hi: 'वाक्य का भाग', ex: 'Jeder Satzteil hat eine bestimmte Funktion.', exEn: 'Every sentence part has a specific function.', exHi: 'Vaakya ke har bhaag ka ek nishchit karya hota hai.' },
    { de: 'Temporalsatz', art: 'der', gender: 'm', plural: 'Temporalsätze', pos: 'noun', level: 'B1', en: 'temporal clause', hi: 'कालवाचक उपवाक्य', ex: 'Ein Temporalsatz gibt die Zeit an.', exEn: 'A temporal clause indicates the time.', exHi: 'Kaalvaachak upvaakya samay batata hai.' },
    { de: 'Markierung', art: 'die', gender: 'f', plural: 'Markierungen', pos: 'noun', level: 'B1', en: 'marking', hi: 'चिह्न', ex: 'Die Markierung im Text zeigt die Adjektivendung.', exEn: 'The marking in the text shows the adjective ending.', exHi: 'Text mein chihna adjective ki ending dikhata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Die Logik hinter den Endungen',
      body: [
        'German always needs to show gender, number, and case exactly once per noun phrase. If the article already shows it clearly, the adjective ending shrinks. If the article does not show enough, the adjective ending grows to compensate.'
      ],
      note: 'Don\'t memorize three tables — ask ONE question every time: how much information does the article in front of me already carry?',
      hinglish: 'German hamesha gender, number, aur case ek hi baar dikhana chahta hai. Agar article pehle se saaf dikhata hai, to adjective ki ending chhoti ho jaati hai. Agar article kaafi nahi dikhata, to adjective ki ending badi ho jaati hai.'
    },
    {
      title: 'Schwache Deklination — nach bestimmtem Artikel',
      body: [ 'After der/die/das/die, the article already carries the full signal, so the adjective mostly just adds -e or -en.' ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', 'der große Hund', 'die schöne Stadt', 'das kleine Kind', 'die roten Äpfel'],
          ['Akkusativ', 'den roten Apfel', 'die schöne Stadt', 'das kleine Kind', 'die roten Äpfel'],
          ['Dativ', 'dem netten Lehrer', 'der schönen Stadt', 'dem kleinen Kind', 'den roten Äpfeln'],
          ['Genitiv', 'des netten Lehrers', 'der schönen Stadt', 'des kleinen Kindes', 'der roten Äpfel']
        ]
      },
      hinglish: 'der/die/das/die ke baad, article pehle se poora signal deta hai, isliye adjective bas -e ya -en jodta hai.'
    },
    {
      title: 'Gemischte Deklination — nach ein-Wörtern',
      body: [ 'After ein/eine/ein, kein, mein/dein/sein/ihr/unser/euer, the article is ambiguous in exactly three spots (masc. Nom., neut. Nom./Akk.) — the adjective fills those gaps with a strong ending; everywhere else it matches weak.' ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', 'ein großer Hund', 'eine schöne Stadt', 'ein kleines Kind', 'meine roten Äpfel'],
          ['Akkusativ', 'einen roten Apfel', 'eine schöne Stadt', 'ein kleines Kind', 'meine roten Äpfel'],
          ['Dativ', 'meinem netten Lehrer', 'einer schönen Stadt', 'einem kleinen Kind', 'meinen roten Äpfeln'],
          ['Genitiv', 'meines netten Lehrers', 'einer schönen Stadt', 'meines kleinen Kindes', 'meiner roten Äpfel']
        ]
      },
      note: 'Only three cells differ from weak declension: masc. Nom. (-er instead of -e) and neut. Nom./Akk. (-es instead of -e). Everywhere else, mixed = weak.',
      hinglish: 'ein/kein/mein… ke baad, article sirf teen jagah ambiguous hai (masc. Nom., neut. Nom./Akk.) — adjective un jagahon ko strong ending se bharta hai; baaki jagah weak jaisa hi hota hai.'
    },
    {
      title: 'Starke Deklination — ohne Artikel',
      body: [ 'With no article at all, the adjective alone must carry gender, number, AND case — so it takes almost the same endings a der-word would.' ],
      table: {
        head: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', 'guter Wein', 'frische Milch', 'neues Auto', 'große Häuser'],
          ['Akkusativ', 'guten Wein', 'frische Milch', 'neues Auto', 'große Häuser'],
          ['Dativ', 'gutem Wein', 'frischer Milch', 'neuem Auto', 'großen Häusern'],
          ['Genitiv', 'guten Weins', 'frischer Milch', 'neuen Autos', 'großer Häuser']
        ]
      },
      note: 'The strong ending mirrors der/die/das/den almost exactly — the adjective steps into the article\'s shoes.',
      hinglish: 'Bina article ke, sirf adjective ko gender, number, AUR case dikhana padta hai — isliye yeh lagbhag der-word jaisi ending leta hai.'
    },
    {
      title: 'Ein Vergleich: schwach, gemischt, stark',
      body: [ 'Same adjective, same noun, three endings — because three different amounts of information are already on the table.' ],
      table: {
        head: ['Declension', 'Example'],
        rows: [
          ['Schwach (der)', '<span class="de">der große Hund</span>'],
          ['Gemischt (ein)', '<span class="de">ein großer Hund</span>'],
          ['Stark (—)', '<span class="de">großer Hund</span>']
        ]
      },
      hinglish: 'Same adjective, same noun, teen endings — kyunki teeno mein article pehle se alag-alag kitni jaankari de raha hai.'
    },
    {
      title: 'Die Klarweg-Entscheidungshilfe (Flowchart)',
      body: [ 'Solve every adjective ending like a flowchart, not a lookup table.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Is there an article at all?', 'No → Strong ending'],
          ['Does the article already show gender + case clearly? (der/die/das/die)', 'Yes → Weak ending'],
          ['Is the article an ein-word (ein/kein/mein…)?', 'Yes → Mixed ending (strong only in the 3 gap cells, else weak)']
        ]
      },
      hinglish: 'Har adjective ending ko flowchart ki tarah solve karo, lookup table ki tarah nahi. Teen sawaal poocho: article hai ki nahi? Agar hai, kya woh gender+case saaf dikhata hai? Agar ein-word hai, to sirf teen jagah strong ending chahiye.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from skipping the ending entirely, or using the wrong declension type.' ],
      mistakes: [
        { wrong: 'der groß Mann', right: 'der große Mann', why: 'Weak declension after der: the adjective always needs an ending (-e here), never bare.' },
        { wrong: 'ein großen Auto', right: 'ein großes Auto', why: 'Mixed declension: ein + Nominativ/Akkusativ neuter needs -es, not -en.' },
        { wrong: 'frische Brot', right: 'frisches Brot', why: 'Strong declension: no article, neuter Nominativ/Akkusativ needs -es.' },
        { wrong: 'gute Wein', right: 'guter Wein', why: 'Strong declension: no article, masculine Nominativ needs -er.' },
        { wrong: 'den groß Hund', right: 'den großen Hund', why: 'Weak declension after den (Akkusativ masc.): the adjective needs -en.' }
      ],
      hinglish: 'Yeh paanch galtiyaan ending skip karne se ya galat declension type use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Adjective endings appear in nearly every Goethe B1 sentence — apartment ads, product descriptions, restaurant reviews, city descriptions. Train the flowchart until it\'s automatic.' ],
      note: 'Quick check: article present? → what kind? → weak, mixed, or strong. Practise saying all three versions of one phrase out loud until the pattern feels natural.',
      hinglish: 'Adjective endings lagbhag har Goethe B1 sentence mein aate hain. Flowchart ko tab tak practise karo jab tak yeh automatic na ho jaaye.'
    }
  ],

  // ---------- Reading passage (fable, clickable words) ----------
  reading: {
    title: 'Der Fuchs und der Rabe',
    titleEn: 'The Fox and the Crow',
    tokens: [
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'hungriger', role: 'r-adjective', en: 'hungry', hi: 'भूखा', type: 'Adjective · stark · Nom.', why: 'Strong declension: no article, Nominativ masculine → -er.' },
      { w: 'Fuchs', role: 'plain', en: 'fox', hi: 'लोमड़ी', type: 'Noun · masc.', why: 'der Fuchs (this chapter).' },
      { w: 'stand', role: 'r-verb', en: 'stood (Präteritum)', hi: 'खड़ी थी (Präteritum)', type: 'Verb · stehen (Präteritum)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: 'unter', role: 'r-preposition', en: 'under', hi: 'नीचे', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dativ' },
      { w: 'hohen', role: 'r-adjective', en: 'tall', hi: 'ऊँचा', type: 'Adjective · gemischt · Dat.', why: 'Mixed declension: einem + Dativ → -en.' },
      { w: 'Baum', role: 'plain', en: 'tree', hi: 'पेड़', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'r-preposition', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Ast', role: 'plain', en: 'branch', hi: 'डाली', type: 'Noun · masc.' },
      { w: 'saß', role: 'r-verb', en: 'sat (Präteritum)', hi: 'बैठा था', type: 'Verb · sitzen (Präteritum)' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'stolzer', role: 'r-adjective', en: 'proud', hi: 'घमंडी', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er.' },
      { w: 'Rabe', role: 'plain', en: 'crow', hi: 'कौआ', type: 'Noun · masc.', why: 'der Rabe (this chapter).' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (masc. dat.)', hi: 'एक', type: 'Article · Dativ' },
      { w: 'großen', role: 'r-adjective', en: 'large', hi: 'बड़ा', type: 'Adjective · gemischt · Dat.', why: 'Mixed declension: einem + Dativ → -en.' },
      { w: 'Stück', role: 'plain', en: 'piece', hi: 'टुकड़ा', type: 'Noun · neut.' },
      { w: 'Käse', role: 'plain', en: 'cheese', hi: 'पनीर', type: 'Noun · masc.' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'scharfen', role: 'r-adjective', en: 'sharp', hi: 'तीखे', type: 'Adjective · schwach · Dat.', why: 'scharf (this chapter). Weak declension: im (in dem) + Dativ → -en.' },
      { w: 'Schnabel', role: 'plain', en: 'beak', hi: 'चोंच', type: 'Noun · masc.', why: 'der Schnabel (this chapter).' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'schlaue', role: 'r-adjective', en: 'clever', hi: 'चतुर', type: 'Adjective · schwach · Nom.', why: 'Weak declension: der + Nominativ masculine → -e.' },
      { w: 'Fuchs', role: 'plain', en: 'fox', hi: 'लोमड़ी', type: 'Noun · masc.' },
      { w: 'lobte', role: 'r-verb', en: 'praised (Präteritum)', hi: 'प्रशंसा की', type: 'Verb · loben (Präteritum)', why: 'loben (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'schöne', role: 'r-adjective', en: 'beautiful', hi: 'सुंदर', type: 'Adjective · schwach · Akk.', why: 'Weak declension: die + Akkusativ feminine → -e.' },
      { w: 'Stimme', role: 'plain', en: 'voice', hi: 'आवाज़', type: 'Noun · fem.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'stolzen', role: 'r-adjective', en: 'proud', hi: 'घमंडी', type: 'Adjective · schwach · Gen.', why: 'Weak declension: des + Genitiv → -en for every gender.' },
      { w: 'Raben', role: 'plain', en: 'crow (gen.)', hi: 'कौवे का', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'kleine', role: 'r-adjective', en: 'small', hi: 'छोटा', type: 'Adjective · schwach · Nom.', why: 'Weak declension: der + Nominativ masculine → -e.' },
      { w: 'Fuchs', role: 'plain', en: 'fox', hi: 'लोमड़ी', type: 'Noun · masc.' },
      { w: 'log', role: 'r-verb', en: 'lied (Satzende)', hi: 'झूठ बोला (Satzende)', type: 'Verb · lügen (Präteritum, Satzende)', why: 'lügen (this chapter).' },
      { w: ',', plain: true },
      { w: 'glaubte', role: 'r-verb', en: 'believed', hi: 'विश्वास किया', type: 'Verb · glauben (Präteritum)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'eitle', role: 'r-adjective', en: 'vain', hi: 'घमंडी', type: 'Adjective · schwach · Nom.', why: 'Weak declension: der + Nominativ masculine → -e.' },
      { w: 'Rabe', role: 'plain', en: 'crow', hi: 'कौआ', type: 'Noun · masc.' },
      { w: 'jedes', role: 'plain', en: 'every (neut.)', hi: 'हर', type: 'Determiner' },
      { w: 'Wort', role: 'plain', en: 'word', hi: 'शब्द', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', type: 'Pronoun' },
      { w: 'öffnete', role: 'r-verb', en: 'opened (Präteritum)', hi: 'खोला', type: 'Verb · öffnen (Präteritum)' },
      { w: 'seinen', role: 'plain', en: 'his (masc. acc.)', hi: 'उसकी', type: 'Possessivartikel · Akk.' },
      { w: 'scharfen', role: 'r-adjective', en: 'sharp', hi: 'तीखी', type: 'Adjective · gemischt · Akk.', why: 'Mixed declension: seinen + Akkusativ masculine → -en.' },
      { w: 'Schnabel', role: 'plain', en: 'beak', hi: 'चोंच', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'um', role: 'r-conjunction', en: 'in order to', hi: 'ताकि', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'lautes', role: 'r-adjective', en: 'loud', hi: 'ज़ोरदार', type: 'Adjective · gemischt · Akk.', why: 'Mixed declension: ein + Akkusativ neuter → -es.' },
      { w: 'Lied', role: 'plain', en: 'song', hi: 'गीत', type: 'Noun · neut.' },
      { w: 'vorzusingen', role: 'r-verb', en: 'to sing (Satzende)', hi: 'गाकर सुनाना', type: 'Trennbares Verb · vorsingen (Infinitiv, Satzende)', why: 'vorsingen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'große', role: 'r-adjective', en: 'large', hi: 'बड़ा', type: 'Adjective · schwach · Nom.', why: 'Weak declension: das + Nominativ neuter → -e.' },
      { w: 'Stück', role: 'plain', en: 'piece', hi: 'टुकड़ा', type: 'Noun · neut.' },
      { w: 'fiel', role: 'r-verb', en: 'fell (Satzende)', hi: 'गिर गया (Satzende)', type: 'Verb · fallen (Präteritum, Satzende)' },
      { w: 'direkt', role: 'r-adverb', en: 'directly', hi: 'सीधे', type: 'Adverb' },
      { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'hungrigen', role: 'r-adjective', en: 'hungry', hi: 'भूखे', type: 'Adjective · schwach · Akk.', why: 'Weak declension: den + Akkusativ masculine → -en.' },
      { w: 'Mund', role: 'plain', en: 'mouth', hi: 'मुँह', type: 'Noun · masc.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'schlauen', role: 'r-adjective', en: 'clever', hi: 'चतुर', type: 'Adjective · schwach · Gen.', why: 'Weak declension: des + Genitiv → -en.' },
      { w: 'Fuchses', role: 'plain', en: 'fox (gen.)', hi: 'लोमड़ी का', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'वह', type: 'Article' },
      { w: 'enttäuschte', role: 'r-adjective', en: 'disappointed', hi: 'निराश', type: 'Adjective · schwach · Nom.', why: 'Weak declension: der + Nominativ masculine → -e.' },
      { w: 'Rabe', role: 'plain', en: 'crow', hi: 'कौआ', type: 'Noun · masc.' },
      { w: 'ging', role: 'r-verb', en: 'left (Satzende)', hi: 'चला गया (Satzende)', type: 'Verb · davongehen (Präteritum, Satzende)', why: 'davongehen (this chapter).' },
      { w: 'still', role: 'r-adverb', en: 'silently', hi: 'चुपचाप', type: 'Adverb' },
      { w: 'davon', role: 'r-verb', en: '(davongehen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'lautet', role: 'r-verb', en: 'reads (Position 2)', hi: 'कहती है (Position 2)', type: 'Verb · lauten' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'einfache', role: 'r-adjective', en: 'simple', hi: 'साधारण', type: 'Adjective · schwach · Nom.', why: 'Weak declension: die + Nominativ feminine → -e.' },
      { w: 'Moral', role: 'plain', en: 'moral', hi: 'नैतिक शिक्षा', type: 'Noun · fem.', why: 'die Moral (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'alten', role: 'r-adjective', en: 'old', hi: 'पुरानी', type: 'Adjective · schwach · Gen.', why: 'Weak declension: der + Genitiv → -en.' },
      { w: 'Fabel', role: 'plain', en: 'fable', hi: 'नीति कथा', type: 'Noun · fem.', why: 'die Fabel (this chapter).' },
      { w: ':', plain: true },
      { w: 'schmeichelhafte', role: 'r-adjective', en: 'flattering', hi: 'चापलूसी भरे', type: 'Adjective · schwach · Nom.', why: 'Weak declension: die (unspoken subject, feminine) + Nominativ → -e.' },
      { w: 'Worte', role: 'plain', en: 'words', hi: 'शब्द', type: 'Noun · plural' },
      { w: 'kommen', role: 'r-verb', en: 'come (Satzende)', hi: 'आते हैं (Satzende)', type: 'Verb · kommen' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'falschen', role: 'r-adjective', en: 'false', hi: 'झूठे', type: 'Adjective · stark · Dat. Pl.', why: 'Strong declension: no article, Dativ plural → -en.' },
      { w: 'Freunden', role: 'plain', en: 'friends', hi: 'दोस्त', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'A hungry fox stood under a tall tree. On the branch sat a proud crow with a large piece of cheese in its sharp beak. The clever fox praised the proud crow\'s beautiful voice. Although the small fox lied, the vain crow believed every word. He opened his sharp beak to sing a loud song. The large piece fell directly into the clever fox\'s hungry mouth. The disappointed crow left silently. That\'s why the old fable\'s simple moral reads: flattering words often come from false friends.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_012_L001', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, welches Hemd soll ich zum Vorstellungsgespräch anziehen? Das blaue oder das weiße?', en: 'Timo, which shirt should I wear to the interview? The blue one or the white one?' },
      { id: 'B1_012_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das weiße wirkt seriöser, finde ich. Mit einer dunklen Hose sieht das super aus.', en: 'The white one looks more professional, I think. With dark pants it looks great.' },
      { id: 'B1_012_L003', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und die alte Tasche, die ich schon so lange habe — passt die noch?', en: 'And the old bag I\'ve had for so long — does it still fit?' },
      { id: 'B1_012_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ehrlich? Nimm lieber die neue. Ein guter erster Eindruck zählt viel.', en: 'Honestly? Better take the new one. A good first impression counts for a lot.' }
    ],
    transcript: 'Timo, welches Hemd soll ich zum Vorstellungsgespräch anziehen? Das blaue oder das weiße? Das weiße wirkt seriöser, finde ich. Mit einer dunklen Hose sieht das super aus. Und die alte Tasche, die ich schon so lange habe — passt die noch? Ehrlich? Nimm lieber die neue. Ein guter erster Eindruck zählt viel.',
    translation: 'Timo, which shirt should I wear to the interview? The blue one or the white one? The white one looks more professional, I think. With dark pants it looks great. And the old bag I\'ve had for so long — does it still fit? Honestly? Better take the new one. A good first impression counts for a lot.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'welches' },
      { w: 'Hemd' },
      { w: 'soll' },
      { w: 'ich' },
      { w: 'zum' },
      { w: 'Vorstellungsgespräch' },
      { w: 'anziehen' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'blaue' },
      { w: 'oder' },
      { w: 'das' },
      { w: 'weiße' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'weiße' },
      { w: 'wirkt' },
      { w: 'seriöser' },
      { w: ',', plain: true },
      { w: 'finde' },
      { w: 'ich' },
      { w: '.', plain: true },
      { w: 'Mit' },
      { w: 'einer' },
      { w: 'dunklen' },
      { w: 'Hose' },
      { w: 'sieht' },
      { w: 'das' },
      { w: 'super' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'alte' },
      { w: 'Tasche' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'ich' },
      { w: 'schon' },
      { w: 'so' },
      { w: 'lange' },
      { w: 'habe' },
      { w: '—', plain: true },
      { w: 'passt' },
      { w: 'die' },
      { w: 'noch' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: '?', plain: true },
      { w: 'Nimm' },
      { w: 'lieber' },
      { w: 'die' },
      { w: 'neue' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'guter' },
      { w: 'erster' },
      { w: 'Eindruck' },
      { w: 'zählt' },
      { w: 'viel' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Hemd empfiehlt Timo?', qEn: 'Which shirt does Timo recommend?', options: ['das blaue', 'das weiße', 'keins', 'ein rotes'], optionsEn: ['the blue one', 'the white one', 'none', 'a red one'], answer: 1,
        explain: '"Das weiße wirkt seriöser."' },
      { q: 'Was sagt Timo über die alte Tasche?', qEn: 'What does Timo say about the old bag?', options: ['Sie passt perfekt.', 'Nimm lieber die neue.', 'Sie ist zu klein.', 'Sie ist kaputt.'], optionsEn: ['It fits perfectly.', 'Better take the new one.', 'It is too small.', 'It is broken.'], answer: 1,
        explain: '"Nimm lieber die neue."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt, was du zum Vorstellungsgespräch anziehen sollst.", taskEn: "Your friend asks what you should wear to the interview.", de: "Das weiße Hemd mit einer dunklen Hose wirkt seriöser.", en: "The white shirt with dark trousers looks more serious." },
    { task: "Deine Kollegin fragt nach deinem neuen Lebenslauf.", taskEn: "Your colleague asks about your new CV.", de: "Ich habe ein aktuelles Bewerbungsfoto und einen kurzen Lebenslauf.", en: "I have a current application photo and a short CV." },
    { task: "Ein Freund fragt, wie das Bewerbungstraining war.", taskEn: "A friend asks how the interview training was.", de: "Das lange Konfliktgespräch war anstrengend, aber der neue Trainer war gut.", en: "The long conflict-resolution session was tiring, but the new trainer was good." },
    { task: "Man fragt dich nach deinen wichtigsten Voraussetzungen.", taskEn: "You're asked about your most important qualifications.", de: "Ich bin eine qualifizierte Arbeitnehmerin mit guter Fortbildung.", en: "I'm a qualified employee with good further training." },
    { task: "Deine Freundin sucht eine Wohnung. Beschreibe deine.", taskEn: "Your friend is looking for a flat. Describe yours.", de: "Ich habe eine kleine Küche und ein helles Zimmer mit großem Fenster.", en: "I have a small kitchen and a bright room with a big window." },
    { task: "Ein Kollege fragt, wie die Personalabteilung war.", taskEn: "A colleague asks how the HR department was.", de: "Die junge Mitarbeiterin war freundlich, aber das lange Verfahren war schwierig.", en: "The young member of staff was friendly, but the long process was difficult." },
    { task: "Rollenspiel: Ihr besprecht das Bewerbungsschreiben.", taskEn: "Role-play: you discuss the application letter.", de: "Der erste Satz ist zu lang. Nimm das kurze PDF-Dokument mit dem neuen Foto.", en: "The first sentence is too long. Take the short PDF with the new photo." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short description (six to eight sentences) — an apartment, a city, or a product review — using at least six declined adjectives across weak, mixed, and strong declension.',
    starters: ['Die Wohnung ist …', 'Ich suche ein(e) …', 'In der Stadt gibt es …'],
    placeholder: 'Die neue Wohnung hat ein großes Fenster und einen ruhigen Balkon …',
    minWords: 40
  },

  // ---------- Exercises (4 types + classification, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ groß___ Hund bellt." (kein Artikel)',
      options: ['Groß Hund', 'Großer Hund', 'Große Hund'],
      answer: 1,
      explain: 'Strong declension: no article, Nominativ masculine → -er (großer Hund).'
    },
    gap: {
      sentence: ['Ich habe ein', ' Auto gekauft.'],
      gaps: [ { answer: 'neues', accepts: ['neues'] } ],
      explain: 'Mixed declension: ein + Nominativ/Akkusativ neuter → -es.'
    },
    match: {
      q: 'Match each example to its declension type.',
      pairs: [
        { noun: 'der große Hund', art: 'schwach' },
        { noun: 'ein großer Hund', art: 'gemischt' },
        { noun: 'großer Hund', art: 'stark' }
      ]
    },
    builder: {
      target: 'Build: "The new employer values honest applicants."',
      bank: ['Der', 'neue', 'Arbeitgeber', 'schätzt', 'ehrliche', 'Bewerber', '.'],
      answer: ['Der', 'neue', 'Arbeitgeber', 'schätzt', 'ehrliche', 'Bewerber', '.'],
      roles: { 'neue': 'r-adjective', 'ehrliche': 'r-adjective', 'schätzt': 'r-verb' }
    },
    classification: {
      title: 'Weak, Mixed, or Strong?',
      items: [
        { phrase: 'die schöne Stadt', answer: 'schwach' },
        { phrase: 'ein kleines Kind', answer: 'gemischt' },
        { phrase: 'frisches Brot', answer: 'stark' },
        { phrase: 'meinem neuen Laptop', answer: 'gemischt' },
        { phrase: 'guter Wein', answer: 'stark' },
        { phrase: 'den roten Apfel', answer: 'schwach' }
      ]
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich trinke gute Wein.',
      right: 'Ich trinke guten Wein.',
      explain: 'Strong declension: no article, Akkusativ masculine → -en, not -e.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das ist der ___ Mann." (groß)', options: ['groß', 'große', 'großer'], answer: 1,
      explain: 'Weak declension: der + Nominativ masculine → -e.' },
    { q: 'Complete: "Ich habe ein___ Auto." (groß)', options: ['großer', 'großes', 'große'], answer: 1,
      explain: 'Mixed declension: ein + Nominativ/Akkusativ neuter → -es.' },
    { q: 'Complete: "___ Kaffee schmeckt gut." (frisch, kein Artikel)', options: ['Frisch', 'Frischer', 'Frische'], answer: 1,
      explain: 'Strong declension: no article, Nominativ masculine → -er.' },
    { q: 'Complete: "Ich helfe dem ___ Kind." (klein)', options: ['klein', 'kleine', 'kleinen'], answer: 2,
      explain: 'Weak declension: dem + Dativ → -en for every gender.' },
    { q: 'Which sentence contains an error?', options: ['der große Hund', 'ein großer Hund', 'frische Brot'], answer: 2,
      explain: 'Strong declension: no article, neuter Nominativ needs -es, not -e — it should be "frisches Brot."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-adjective', html: 'Ask ONE question every time: does the article already show gender+case? Yes and it\'s der/die/das → <b>weak</b>. Yes but only partly (ein-word) → <b>mixed</b>. No article at all → <b>strong</b>.' },
    { c: 'r-adjective', html: 'Mixed declension differs from weak in only THREE spots: masculine Nominativ (-er), and neuter Nominativ/Akkusativ (-es).' },
    { c: 'r-adjective', html: 'Predicative adjectives (after sein/werden/bleiben) never take an ending at all — only adjectives directly before a noun decline.' }
  ],
  revisionTips: [
    'Whenever you\'re unsure, say the phrase three ways out loud: der große Hund / ein großer Hund / großer Hund. The pattern becomes automatic with repetition.',
    'Focus extra practice on the three "gap" cells of mixed declension — they\'re the only place it differs from weak.',
    'When writing, check every noun phrase for exactly one signal of gender+case — either the article or the adjective ending, never neither.'
  ]
};

window.CHAPTER = CHAPTER;
