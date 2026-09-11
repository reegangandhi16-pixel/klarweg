/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 47
   "bekommen-/kriegen-Passiv" — the RECIPIENT becomes the
   grammatical subject: Recipient + bekommen/kriegen/erhalten +
   Partizip II. bekommen (neutral) / kriegen (informal) /
   erhalten (formal). Does NOT teach haben+zu, sein+zu,
   Funktionsverbgefüge.
   IMPORTANT: dialogue uses ONLY Wenke and Timo.
   Vocabulary source: uploaded Chapter 47 list (62 items).
============================================================ */
const CHAPTER = {
  id: 'b2-47-bekommen-kriegen-passiv',
  phase: 'B2 · Phase 5',
  number: 47,
  title: 'bekommen-/kriegen-Passiv',
  titleEn: 'The recipient passive',
  description: 'Ich bekomme den Vertrag geschickt — when the RECEIVER, not the action, is what matters.',
  xp: 550,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 48, title: 'Modalitätsersatz: haben + zu / sein + zu', titleEn: 'Modal-verb replacements: haben + zu / sein + zu' , href: 'chapter-b2-48-modalitaetsersatz-haben-sein-zu.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Who <em>receives</em> the action?',
    intro: 'Wenke gets her form filled out by the doctor and her results explained clearly, while Timo gets his appointment confirmed — every sentence built around the receiver, not the action, with bekommen/kriegen/erhalten + Partizip II.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how bekommen-Passiv shifts focus from the action to the person who receives it'
    ],
    scene: 'An der Universität',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KO-muh', type: 'Verb · bekommen (ich)', why: 'bekommen/kriegen + Partizip II = recipient passive, focuses on the receiver instead of the doer (this chapter).', ex: 'Ich bekomme das Formular ausgefüllt.', exEn: 'I get the form filled out.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Formular', role: 'r-akkusativ', en: 'form', hi: 'फ़ॉर्म', pron: 'for-moo-LAHR', type: 'Noun · neut.' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Ärztin', role: 'r-dativ', en: 'doctor (dat.)', hi: 'डॉक्टर से', pron: 'ERTS-tin', type: 'Noun · fem. dat.' },
        { w: 'ausgefüllt', role: 'r-verb', en: 'filled out', hi: 'भरा हुआ', pron: 'OWS-ge-fült', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I get the form filled out by the doctor.', hi: 'Mujhe form doctor se bhara hua milta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kriegst', role: 'r-verb', en: 'do you get', hi: 'मिलता है', pron: 'KREEKST', type: 'Verb · kriegen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Termin', role: 'r-akkusativ', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.' },
        { w: 'bestätigt', role: 'r-verb', en: 'confirmed', hi: 'पुष्टि', pron: 'be-SHTAY-tikt', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Do you also get the appointment confirmed?', hi: 'Kya tumhe appointment confirm bhi milta hai?' },
      { speaker: 'Wenke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KO-muh', type: 'Verb · bekommen (ich)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Nachricht', role: 'r-akkusativ', en: 'message', hi: 'संदेश', pron: 'NAKH-rikht', type: 'Noun · fem.' },
        { w: 'geschickt', role: 'r-verb', en: 'sent', hi: 'भेजा हुआ', pron: 'ge-SHIKT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, I get a message sent.', hi: 'Haan, mujhe sandesh bheja hua milta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kriege', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'KREE-guh', type: 'Verb · kriegen (ich)' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (pl.)', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'Blutwerte', role: 'r-akkusativ', en: 'blood values', hi: 'ख़ून की जांच', pron: 'BLOOT-vair-tuh', type: 'Noun · plural', why: 'die Blutwerte (recycled Ch45).', ex: 'meine Blutwerte' },
        { w: 'erklärt', role: 'r-verb', en: 'explained', hi: 'समझाया हुआ', pron: 'er-KLAIRT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I get my blood values explained.', hi: 'Mujhe mere khoon ki jaanch samjhaya hua milta hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'मिलता है', pron: 'be-KO-muh', type: 'Verb · bekommen (ich)' },
        { w: 'meistens', role: 'r-akkusativ', en: 'usually', hi: 'ज़्यादातर', pron: 'MYS-tens', type: 'Adverb' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'beschrieben', role: 'r-verb', en: 'described', hi: 'वर्णित', pron: 'be-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'That is good. I usually get everything precisely described.', hi: 'Yeh achha hai. Mujhe zyaadatar sab kuch theek se varnit hua milta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'beide', role: 'r-subject', en: 'both', hi: 'दोनों', pron: 'BY-duh', type: 'Pronoun' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
        { w: 'betreut', role: 'r-verb', en: 'cared for', hi: 'देखभाल में', pron: 'be-TROYT', type: 'Partizip II · Satzende', why: 'betreuen → betreut = to look after/care for (this chapter).', ex: 'Wir sind gut betreut.', exEn: 'We are well cared for.' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then we are both well cared for.', hi: 'Badhiya! Toh hum dono achhe se dekhbhaal mein hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Normal passive puts the ACTION in focus: <span class="de">Die Grammatik wird erklärt.</span> <span class="de r-bekommen">bekommen-Passiv</span> puts the RECEIVER in focus: <span class="de r-bekommen">Der Schüler bekommt die Grammatik erklärt.</span> Same event, different subject.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is BEKOMMEN-/KRIEGEN-/ERHALTEN-PASSIV (the recipient passive) at B2 level: Recipient + bekommen/kriegen/erhalten + Partizip II, where the RECIPIENT becomes the grammatical subject instead of the thing acted upon. Example: "Der Schüler bekommt die Grammatik erklärt" (the student gets the grammar explained), contrasted with Vorgangspassiv "Die Grammatik wird erklärt" (the grammar is explained). Register: bekommen = neutral, kriegen = informal/spoken, erhalten = formal (letters, business, academic). ' +
    'Do NOT expect or require haben+zu, sein+zu, or Funktionsverbgefüge — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that the recipient (the person who receives/experiences the action) is the grammatical subject, with bekommen/kriegen/erhalten conjugated to agree with it.\n' +
    '- Check that the Partizip II sits at the end of the clause, and that no extra "werden" is added (bekommen-Passiv never combines with werden).\n' +
    '- Check register consistency: kriegen in a formal email, or erhalten in casual speech, is a register mismatch worth a gentle note (not necessarily wrong, but worth flagging).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Recipient-focus check:</b> one sentence on whether the learner correctly shifted focus to the recipient rather than the action.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly shift focus to the recipient and choose the right register (bekommen/kriegen/erhalten). Ready for haben+zu / sein+zu next.',
    mid: 'Good. Re-read the Register Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: the RECIPIENT is the subject, and the Partizip II always comes last.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Schüler', role: 'plain' }, { w: 'bekommt', role: 'r-bekommen' },
    { w: 'die', role: 'plain' }, { w: 'Grammatik', role: 'plain' }, { w: 'erklärt', role: 'r-bekommen' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: bekommen-Passiv shifts focus from the action to the recipient.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wenke and Timo navigate a university admission and hospital visit using bekommen-/kriegen-/erhalten-Passiv.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 62 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the structure, choose between bekommen/kriegen/erhalten by register, and contrast with Vorgangspassiv.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university admission process and hospital patient information full of recipient-passive constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the recipient, the action, and the register (bekommen vs kriegen vs erhalten).' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain procedures and describe receiving documents, information, and assistance naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write formal emails and customer-service messages choosing the correct passive construction.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill recipient identification and bekommen/kriegen/erhalten register choice.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 550 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 62 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Recipient-identification drills, register selection, and a customer-service writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison table, register table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Der Schüler bekommt die Grammatik erklärt.', text: 'Form bekommen-Passiv, putting the recipient as subject' },
    { de: 'bekommen (neutral) / kriegen (informal) / erhalten (formal)', text: 'Choose the correct register for the situation' },
    { de: 'Ich bekomme den Vertrag geschickt.', text: 'Use bekommen-Passiv naturally in workplace and healthcare contexts' },
    { de: 'Die Grammatik wird erklärt. vs Der Schüler bekommt die Grammatik erklärt.', text: 'Distinguish Vorgangspassiv (action) from bekommen-Passiv (recipient)' },
    { de: 'Common in service, healthcare, and administrative German', text: 'Recognize the register where bekommen-Passiv thrives' }
  ],

  // ---------- Vocabulary (62 items — uploaded chapter-47 list) ----------
  vocab: [
    { de: 'Arbeitsbedingungen', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'working conditions', hi: 'कार्य स्थितियां', ex: 'Die Berufsanfänger bekommen die Arbeitsbedingungen genau beschrieben.', exEn: 'The career starters get the working conditions described precisely.', exHi: 'Career shuru karne waalon ko kaam ki sthiti bilkul batayi jaati hai.', ex2: 'Sie haben die Arbeitsbedingungen verbessert.', ex2En: 'They\'ve improved the working conditions.', ex2Hi: 'Unhone kaam ki sthiti behtar banaayi hai.' },
    { de: 'Bahn', art: 'die', gender: 'f', plural: 'Bahnen', pos: 'noun', level: 'B2', register: 'both', en: 'railway, track', hi: 'रेलवे', ex: 'Sie fuhren mit der Bahn.', exEn: 'They travelled by railway.', exHi: 'Woh railway se gaye.', ex2: 'Die Bahn hatte Verspätung.', ex2En: 'The train was delayed.', ex2Hi: 'Train der se aayi.' },
    { de: 'Beitrag', art: 'der', gender: 'm', plural: 'Beiträge', pos: 'noun', level: 'B2', register: 'written', en: 'contribution', hi: 'योगदान', ex: 'Bekommt sie den Beitrag auch gezeigt?', exEn: 'Does she also get shown the contribution?', exHi: 'Kya use bhi yogdaan dikhaaya jaata hai?', ex2: 'Sie haben einen wichtigen Beitrag geleistet.', ex2En: 'They\'ve made an important contribution.', ex2Hi: 'Unhone ek mahatvapurn yogdaan diya hai.' },
    { de: 'Bescheid', art: 'der', gender: 'm', plural: 'Bescheide', pos: 'noun', level: 'B2', register: 'written', en: 'notice, decision', hi: 'सूचना', ex: 'Ich bekomme den Bescheid morgen zugeschickt.', exEn: 'I\'ll be sent the notice tomorrow.', exHi: 'Mujhe kal soochna bheji jaayegi.', ex2: 'Sie haben den Bescheid erhalten.', ex2En: 'They\'ve received the notice.', ex2Hi: 'Unhein soochna mil gayi hai.' },
    { de: 'Forschungseinrichtung', art: 'die', gender: 'f', plural: 'Forschungseinrichtungen', pos: 'noun', level: 'B2', register: 'written', en: 'research institution', hi: 'शोध संस्थान', ex: 'Die Forschungseinrichtung erhält die Ergebnisse zugesandt.', exEn: 'The research institution receives the results sent.', exHi: 'Shodh sansthaan ko parinaam bheje jaate hain.', ex2: 'Sie haben eine neue Forschungseinrichtung gegründet.', ex2En: 'They\'ve founded a new research institution.', ex2Hi: 'Unhone ek nayi shodh sansthaan sthaapit ki hai.' },
    { de: 'geben', pos: 'verb', level: 'B2', register: 'both', en: 'to give, there is/are', hi: 'देना, होना', ex: 'Es gibt manchmal einen Beschwerdebrief.', exEn: 'There\'s sometimes a letter of complaint.', exHi: 'Kabhi kabhi ek shikaayat patra hota hai.', ex2: 'Sie hat ihm ein Buch gegeben.', ex2En: 'She\'s given him a book.', ex2Hi: 'Usne use ek kitaab di hai.', conj: { praesens: 'gibt', praeteritum: 'gab', perfekt: 'hat gegeben' } },
    { de: 'gleichermaßen', pos: 'adverb', level: 'B2', register: 'written', en: 'equally, in equal measure', hi: 'समान रूप से', ex: 'Das Geschäftsmodell ist gleichermaßen interessant für alle.', exEn: 'The business model is equally interesting for everyone.', exHi: 'Vyapaar model sabke liye samaan roop se dilchasp hai.', ex2: 'Beide Seiten profitieren gleichermaßen.', ex2En: 'Both sides benefit equally.', ex2Hi: 'Dono paksh samaan roop se labhaanvit hote hain.' },
    { de: 'Griff', art: 'der', gender: 'm', plural: 'Griffe', pos: 'noun', level: 'B2', register: 'both', en: 'grip, handle', hi: 'पकड़, हैंडल', ex: 'Der Griff war fest.', exEn: 'The handle was firm.', exHi: 'Handle majboot tha.', ex2: 'Sie haben den Griff repariert.', ex2En: 'They\'ve repaired the handle.', ex2Hi: 'Unhone handle theek kiya hai.' },
    { de: 'Ingenieurwissenschaft', art: 'die', gender: 'f', plural: 'Ingenieurwissenschaften', pos: 'noun', level: 'B2', register: 'written', en: 'engineering science', hi: 'इंजीनियरिंग विज्ञान', ex: 'Sie studiert Ingenieurwissenschaft.', exEn: 'She studies engineering science.', exHi: 'Woh engineering science padhti hai.', ex2: 'Sie haben in Ingenieurwissenschaft promoviert.', ex2En: 'They\'ve gotten a doctorate in engineering science.', ex2Hi: 'Unhone engineering science mein PhD ki hai.' },
    { de: 'Kommunikationsmittel', art: 'das', gender: 'n', plural: 'Kommunikationsmittel', pos: 'noun', level: 'B2', register: 'written', en: 'means of communication', hi: 'संचार का साधन', ex: 'Das Telefon ist ein wichtiges Kommunikationsmittel.', exEn: 'The phone is an important means of communication.', exHi: 'Phone sanchaar ka ek mahatvapurn saadhan hai.', ex2: 'Sie haben neue Kommunikationsmittel eingeführt.', ex2En: 'They\'ve introduced new means of communication.', ex2Hi: 'Unhone naye sanchaar saadhan laagu kiye hain.' },
    { de: 'Markt', art: 'der', gender: 'm', plural: 'Märkte', pos: 'noun', level: 'B2', register: 'both', en: 'market', hi: 'बाज़ार', ex: 'Der Zugang zum Markt wird erweitert.', exEn: 'Access to the market is being expanded.', exHi: 'Baazaar tak pahunch vistaarit ki jaa rahi hai.', ex2: 'Sie haben einen neuen Markt erschlossen.', ex2En: 'They\'ve opened up a new market.', ex2Hi: 'Unhone ek naya baazaar khola hai.' },
    { de: 'Naturwissenschaft', art: 'die', gender: 'f', plural: 'Naturwissenschaften', pos: 'noun', level: 'B2', register: 'written', en: 'natural science', hi: 'प्राकृतिक विज्ञान', ex: 'Er studiert Naturwissenschaft.', exEn: 'He studies natural science.', exHi: 'Woh prakritik vigyaan padhta hai.', ex2: 'Sie haben in Naturwissenschaft geforscht.', ex2En: 'They\'ve researched in natural science.', ex2Hi: 'Unhone prakritik vigyaan mein shodh kiya hai.' },
    { de: 'naturwissenschaftlich', pos: 'adjective', level: 'B2', register: 'written', en: 'scientific, of natural science', hi: 'वैज्ञानिक', ex: 'Die naturwissenschaftliche Methode ist streng.', exEn: 'The scientific method is strict.', exHi: 'Vaigyaanik vidhi sakht hai.', ex2: 'Sie haben eine naturwissenschaftliche Ausbildung.', ex2En: 'They have a scientific education.', ex2Hi: 'Unke paas vaigyaanik shiksha hai.' },
    { de: 'Standpunkt', art: 'der', gender: 'm', plural: 'Standpunkte', pos: 'noun', level: 'B2', register: 'written', en: 'point of view, standpoint', hi: 'दृष्टिकोण', ex: 'Sie erklärte ihren Standpunkt.', exEn: 'She explained her point of view.', exHi: 'Usne apna drishtikon samjhaaya.', ex2: 'Sie haben unterschiedliche Standpunkte.', ex2En: 'They have different points of view.', ex2Hi: 'Unke alag drishtikon hain.' },
    { de: 'Vordergrund', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'foreground', hi: 'अग्रभूमि', ex: 'Sicherheit steht im Vordergrund.', exEn: 'Safety is in the foreground.', exHi: 'Suraksha agrabhoomi mein hai.', ex2: 'Sie haben das Thema in den Vordergrund gerückt.', ex2En: 'They\'ve brought the topic to the foreground.', ex2Hi: 'Unhone vishay ko agrabhoomi mein laaya hai.' },
    { de: 'Wissenschaft', art: 'die', gender: 'f', plural: 'Wissenschaften', pos: 'noun', level: 'B2', register: 'written', en: 'science', hi: 'विज्ञान', ex: 'Die Wissenschaft entwickelt sich schnell.', exEn: 'Science is developing fast.', exHi: 'Vigyaan tezi se vikasit ho raha hai.', ex2: 'Sie haben zur Wissenschaft beigetragen.', ex2En: 'They\'ve contributed to science.', ex2Hi: 'Unhone vigyaan mein yogdaan diya hai.' },
    { de: 'abbauen', pos: 'verb', level: 'B2', register: 'written', en: 'to dismantle, reduce', hi: 'कम करना', ex: 'Sie bauten den Stress ab.', exEn: 'They reduced the stress.', exHi: 'Unhone tanaav kam kiya.', ex2: 'Die Firma hat Stellen abgebaut.', ex2En: 'The company has cut jobs.', ex2Hi: 'Company ne padein kam ki hain.', conj: { praesens: 'baut ab', praeteritum: 'baute ab', perfekt: 'hat abgebaut' } },
    { de: 'abwägen', pos: 'verb', level: 'B2', register: 'written', en: 'to weigh up', hi: 'तौलना', ex: 'Sie wog die Vor- und Nachteile ab.', exEn: 'She weighed up the pros and cons.', exHi: 'Usne faayde-nuksaan tole.', ex2: 'Sie haben die Optionen abgewogen.', ex2En: 'They\'ve weighed up the options.', ex2Hi: 'Unhone vikalpon ko tola hai.', conj: { praesens: 'wägt ab', praeteritum: 'wog ab', perfekt: 'hat abgewogen' } },
    { de: 'ansiedeln', pos: 'verb', level: 'B2', register: 'written', en: 'to settle (somewhere)', hi: 'बसना', ex: 'Die Firma siedelte sich in Berlin an.', exEn: 'The company settled in Berlin.', exHi: 'Company Berlin mein bas gayi.', ex2: 'Sie haben sich in der Region angesiedelt.', ex2En: 'They\'ve settled in the region.', ex2Hi: 'Woh us kshetra mein bas gaye hain.', conj: { praesens: 'siedelt an', praeteritum: 'siedelte an', perfekt: 'hat angesiedelt' } },
    { de: 'aufgeben', pos: 'verb', level: 'B2', register: 'both', en: 'to give up', hi: 'छोड़ देना', ex: 'Sie gab das Projekt nicht auf.', exEn: 'She did not give up the project.', exHi: 'Usne project nahi chhoda.', ex2: 'Er hat seinen Job aufgegeben.', ex2En: 'He\'s given up his job.', ex2Hi: 'Usne apni naukri chhod di hai.', conj: { praesens: 'gibt auf', praeteritum: 'gab auf', perfekt: 'hat aufgegeben' } },
    { de: 'aufhalten', pos: 'verb', level: 'B2', register: 'both', en: 'to stop, detain', hi: 'रोकना', ex: 'Sie wurde am Flughafen aufgehalten.', exEn: 'She was detained at the airport.', exHi: 'Use airport par roka gaya.', ex2: 'Er hat mich lange aufgehalten.', ex2En: 'He\'s kept me for a long time.', ex2Hi: 'Usne mujhe lambe samay tak roka hai.', conj: { praesens: 'hält auf', praeteritum: 'hielt auf', perfekt: 'hat aufgehalten' } },
    { de: 'aufrufen', pos: 'verb', level: 'B2', register: 'written', en: 'to call up', hi: 'आह्वान करना', ex: 'Sie rief zur Teilnahme auf.', exEn: 'She called for participation.', exHi: 'Usne bhaag lene ka aahvaan kiya.', ex2: 'Sie haben zum Streik aufgerufen.', ex2En: 'They\'ve called for a strike.', ex2Hi: 'Unhone hadtaal ka aahvaan kiya hai.', conj: { praesens: 'ruft auf', praeteritum: 'rief auf', perfekt: 'hat aufgerufen' } },
    { de: 'auftanken', pos: 'verb', level: 'B2', register: 'both', en: 'to refuel, recharge', hi: 'ईंधन भरना', ex: 'Sie tankte das Auto auf.', exEn: 'She refuelled the car.', exHi: 'Usne car mein indhan bhara.', ex2: 'Sie haben ihre Energie aufgetankt.', ex2En: 'They\'ve recharged their energy.', ex2Hi: 'Unhone apni oorja recharge ki hai.', conj: { praesens: 'tankt auf', praeteritum: 'tankte auf', perfekt: 'hat aufgetankt' } },
    { de: 'Technikkonzern', art: 'der', gender: 'm', plural: 'Technikkonzerne', pos: 'noun', level: 'B2', register: 'written', en: 'tech corporation', hi: 'टेक्नोलॉजी कंपनी', ex: 'Der Technikkonzern expandiert.', exEn: 'The tech corporation is expanding.', exHi: 'Technology company vistaarit ho rahi hai.', ex2: 'Sie arbeiten für einen Technikkonzern.', ex2En: 'They work for a tech corporation.', ex2Hi: 'Woh ek technology company ke liye kaam karte hain.' },
    { de: 'Technologie', art: 'die', gender: 'f', plural: 'Technologien', pos: 'noun', level: 'B2', register: 'written', en: 'technology', hi: 'प्रौद्योगिकी', ex: 'Die Technologie entwickelt sich rasant.', exEn: 'Technology is developing rapidly.', exHi: 'Technology tezi se vikasit ho rahi hai.', ex2: 'Sie haben neue Technologie eingeführt.', ex2En: 'They\'ve introduced new technology.', ex2Hi: 'Unhone nayi technology laagu ki hai.' },
    { de: 'Telemedizin', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'telemedicine', hi: 'टेलीमेडिसिन', ex: 'Die Telemedizin ist zukunftssicher.', exEn: 'Telemedicine is future-proof.', exHi: 'Telemedicine bhavishya-surakshit hai.', ex2: 'Sie haben Telemedizin genutzt.', ex2En: 'They\'ve used telemedicine.', ex2Hi: 'Unhone telemedicine ka upyog kiya hai.' },
    { de: 'Theaterstück', art: 'das', gender: 'n', plural: 'Theaterstücke', pos: 'noun', level: 'B2', register: 'written', en: 'play (theatre)', hi: 'नाटक', ex: 'Sie sahen ein spannendes Theaterstück.', exEn: 'They saw an exciting play.', exHi: 'Unhone ek rochak naatak dekha.', ex2: 'Er hat ein Theaterstück geschrieben.', ex2En: 'He\'s written a play.', ex2Hi: 'Usne ek naatak likha hai.' },
    { de: 'überaus', pos: 'adverb', level: 'B2', register: 'written', en: 'exceedingly, extremely', hi: 'अत्यधिक', ex: 'Ihr Verhandlungsgeschick ist überaus stark.', exEn: 'Her negotiating skill is exceedingly strong.', exHi: 'Uska baatcheet kaushal atyadhik majboot hai.', ex2: 'Das Ergebnis war überaus positiv.', ex2En: 'The result was exceedingly positive.', ex2Hi: 'Parinaam atyadhik sakaaraatmak tha.' },
    { de: 'umstritten', pos: 'adjective', level: 'B2', register: 'written', en: 'controversial, disputed', hi: 'विवादास्पद', ex: 'Das Thema ist umstritten.', exEn: 'The topic is controversial.', exHi: 'Vishay vivaadaaspad hai.', ex2: 'Sie haben eine umstrittene Entscheidung getroffen.', ex2En: 'They\'ve made a controversial decision.', ex2Hi: 'Unhone ek vivaadaaspad faisla kiya hai.' },
    { de: 'unangebracht', pos: 'adjective', level: 'B2', register: 'written', en: 'inappropriate, unsuitable', hi: 'अनुचित', ex: 'Klingt unangebracht.', exEn: 'Sounds inappropriate.', exHi: 'Anuchit lagta hai.', ex2: 'Ihre Bemerkung war unangebracht.', ex2En: 'Her remark was inappropriate.', ex2Hi: 'Uski tippani anuchit thi.' },
    { de: 'untertreiben', pos: 'verb', level: 'B2', register: 'written', en: 'to understate, play down', hi: 'कम आंकना', ex: 'Sie untertrieb ihre Erfolge.', exEn: 'She understated her successes.', exHi: 'Usne apni safaltaon ko kam aanka.', ex2: 'Er hat das Risiko untertrieben.', ex2En: 'He\'s played down the risk.', ex2Hi: 'Usne khatre ko kam aanka hai.', conj: { praesens: 'untertreibt', praeteritum: 'untertrieb', perfekt: 'hat untertrieben' } },
    { de: 'Verbrechen', art: 'das', gender: 'n', plural: 'Verbrechen', pos: 'noun', level: 'B2', register: 'written', en: 'crime', hi: 'अपराध', ex: 'Das Verbrechen wurde aufgeklärt.', exEn: 'The crime was solved.', exHi: 'Apraadh ka pata laga liya gaya.', ex2: 'Sie haben ein Verbrechen gemeldet.', ex2En: 'They\'ve reported a crime.', ex2Hi: 'Unhone ek apraadh ki soochna di hai.' },
    { de: 'Verfahren', art: 'das', gender: 'n', plural: 'Verfahren', pos: 'noun', level: 'B2', register: 'written', en: 'procedure, process', hi: 'प्रक्रिया', ex: 'Ich kriege das Verfahren gleich erklärt.', exEn: 'I get the procedure explained right away.', exHi: 'Mujhe prakriya turant samjhaayi jaati hai.', ex2: 'Sie haben ein neues Verfahren eingeführt.', ex2En: 'They\'ve introduced a new procedure.', ex2Hi: 'Unhone ek nayi prakriya laagu ki hai.' },
    { de: 'vermehrt', pos: 'adjective', level: 'B2', register: 'written', en: 'increased, more frequent', hi: 'बढ़ा हुआ', ex: 'Es gab vermehrt Beschwerden.', exEn: 'There were increased complaints.', exHi: 'Zyaada shikaayatein hui.', ex2: 'Sie haben vermehrt investiert.', ex2En: 'They\'ve invested more.', ex2Hi: 'Unhone zyaada nivesh kiya hai.' },
    { de: 'vorhersagen', pos: 'verb', level: 'B2', register: 'written', en: 'to predict, forecast', hi: 'भविष्यवाणी करना', ex: 'Sie sagte das Wetter vorher.', exEn: 'She predicted the weather.', exHi: 'Usne mausam ki bhavishyavaani ki.', ex2: 'Sie haben den Trend vorhergesagt.', ex2En: 'They\'ve predicted the trend.', ex2Hi: 'Unhone trend ki bhavishyavaani ki hai.', conj: { praesens: 'sagt vorher', praeteritum: 'sagte vorher', perfekt: 'hat vorhergesagt' } },
    { de: 'Vormund', art: 'der', gender: 'm', plural: 'Vormünder', pos: 'noun', level: 'B2', register: 'written', en: 'guardian', hi: 'संरक्षक', ex: 'Der Vormund unterschrieb die Papiere.', exEn: 'The guardian signed the papers.', exHi: 'Sanrakshak ne kaagazaat par hastaakshar kiye.', ex2: 'Sie haben einen Vormund bestellt.', ex2En: 'They\'ve appointed a guardian.', ex2Hi: 'Unhone ek sanrakshak niyukt kiya hai.' },
    { de: 'vorsprechen', pos: 'verb', level: 'B2', register: 'written', en: 'to audition, call in', hi: 'ऑडिशन देना', ex: 'Sie sprach für die Rolle vor.', exEn: 'She auditioned for the role.', exHi: 'Usne role ke liye audition diya.', ex2: 'Er hat beim Amt vorgesprochen.', ex2En: 'He\'s called in at the office.', ex2Hi: 'Usne daftar mein baat ki hai.', conj: { praesens: 'spricht vor', praeteritum: 'sprach vor', perfekt: 'hat vorgesprochen' } },
    { de: 'Waise', art: 'der/die', gender: 'm/f', plural: 'Waisen', pos: 'noun', level: 'B2', register: 'written', en: 'orphan', hi: 'अनाथ', ex: 'Die Waise wurde adoptiert.', exEn: 'The orphan was adopted.', exHi: 'Anaath ko god liya gaya.', ex2: 'Sie helfen Waisen.', ex2En: 'They help orphans.', ex2Hi: 'Woh anaathon ki madad karte hain.' },
    { de: 'Wartezimmer', art: 'das', gender: 'n', plural: 'Wartezimmer', pos: 'noun', level: 'B2', register: 'both', en: 'waiting room', hi: 'प्रतीक्षालय', ex: 'Der Patient im Wartezimmer bekommt ein Fieberthermometer gereicht.', exEn: 'The patient in the waiting room gets handed a clinical thermometer.', exHi: 'Pratikshaalya mein mareez ko bukhaar thermometer diya jaata hai.', ex2: 'Sie haben lange im Wartezimmer gesessen.', ex2En: 'They\'ve sat for a long time in the waiting room.', ex2Hi: 'Woh lambe samay tak pratikshaalya mein baithe rahe.' },
    { de: 'Werbeanzeige', art: 'die', gender: 'f', plural: 'Werbeanzeigen', pos: 'noun', level: 'B2', register: 'written', en: 'advertisement', hi: 'विज्ञापन', ex: 'Die Werbeanzeige war auffällig.', exEn: 'The advertisement was striking.', exHi: 'Vigyaapan aakarshak tha.', ex2: 'Sie haben eine neue Werbeanzeige gestaltet.', ex2En: 'They\'ve designed a new advertisement.', ex2Hi: 'Unhone ek naya vigyaapan banaaya hai.' },
    { de: 'wiedertreffen', pos: 'verb', level: 'B2', register: 'both', en: 'to meet again', hi: 'फिर मिलना', ex: 'Sie trafen sich nach Jahren wieder.', exEn: 'They met again after years.', exHi: 'Woh saalon baad phir mile.', ex2: 'Wir haben uns endlich wiedergetroffen.', ex2En: 'We\'ve finally met again.', ex2Hi: 'Hum aakhirkaar phir mile hain.', conj: { praesens: 'trifft wieder', praeteritum: 'traf wieder', perfekt: 'hat wiedergetroffen' } },
    { de: 'Windel', art: 'die', gender: 'f', plural: 'Windeln', pos: 'noun', level: 'B2', register: 'both', en: 'nappy, diaper', hi: 'डायपर', ex: 'Sie wechselte die Windel.', exEn: 'She changed the diaper.', exHi: 'Usne diaper badla.', ex2: 'Sie haben Windeln gekauft.', ex2En: 'They\'ve bought diapers.', ex2Hi: 'Unhone diapers khareede hain.' },
    { de: 'Wohnform', art: 'die', gender: 'f', plural: 'Wohnformen', pos: 'noun', level: 'B2', register: 'written', en: 'form of living', hi: 'निवास का रूप', ex: 'Diese Wohnform wird immer beliebter.', exEn: 'This form of living is becoming more popular.', exHi: 'Yeh nivaas ka roop lokapriya ho raha hai.', ex2: 'Sie haben eine neue Wohnform gewählt.', ex2En: 'They\'ve chosen a new form of living.', ex2Hi: 'Unhone nivaas ka naya roop chuna hai.' },
    { de: 'Zugang', art: 'der', gender: 'm', plural: 'Zugänge', pos: 'noun', level: 'B2', register: 'written', en: 'access', hi: 'पहुंच', ex: 'Der Zugang zum Markt wird erweitert.', exEn: 'Access to the market is being expanded.', exHi: 'Baazaar tak pahunch vistaarit ki jaa rahi hai.', ex2: 'Sie haben Zugang zu neuen Ressourcen.', ex2En: 'They have access to new resources.', ex2Hi: 'Unke paas naye sansaadhanon tak pahunch hai.' },
    { de: 'zukunftssicher', pos: 'adjective', level: 'B2', register: 'written', en: 'future-proof', hi: 'भविष्य-सुरक्षित', ex: 'Die Telemedizin ist zukunftssicher.', exEn: 'Telemedicine is future-proof.', exHi: 'Telemedicine bhavishya-surakshit hai.', ex2: 'Sie haben eine zukunftssichere Lösung gewählt.', ex2En: 'They\'ve chosen a future-proof solution.', ex2Hi: 'Unhone ek bhavishya-surakshit samaadhaan chuna hai.' },
    { de: 'zukunftsweisend', pos: 'adjective', level: 'B2', register: 'written', en: 'forward-looking, pioneering', hi: 'भविष्योन्मुखी', ex: 'Zukunftsweisend. Die Telemedizin ist zukunftssicher.', exEn: 'Forward-looking. Telemedicine is future-proof.', exHi: 'Bhavishyonmukhi. Telemedicine bhavishya-surakshit hai.', ex2: 'Sie haben ein zukunftsweisendes Projekt gestartet.', ex2En: 'They\'ve started a forward-looking project.', ex2Hi: 'Unhone ek bhavishyonmukhi project shuru kiya hai.' },
    { de: 'Zwischenfall', art: 'der', gender: 'm', plural: 'Zwischenfälle', pos: 'noun', level: 'B2', register: 'written', en: 'incident', hi: 'घटना', ex: 'Es gab einen kleinen Zwischenfall.', exEn: 'There was a small incident.', exHi: 'Ek chhoti ghatna hui.', ex2: 'Sie haben den Zwischenfall gemeldet.', ex2En: 'They\'ve reported the incident.', ex2Hi: 'Unhone ghatna ki soochna di hai.' },
    { de: 'Berufsanfänger/in', art: 'der/die', gender: 'm/f', plural: 'Berufsanfänger/innen', pos: 'noun', level: 'B2', register: 'written', en: 'career starter', hi: 'करियर की शुरुआत करने वाला', ex: 'Die Berufsanfänger bekommen die Arbeitsbedingungen genau beschrieben.', exEn: 'The career starters get the working conditions described precisely.', exHi: 'Career shuru karne waalon ko kaam ki sthiti bilkul batayi jaati hai.', ex2: 'Sie sind Berufsanfänger im IT-Bereich.', ex2En: 'They\'re career starters in the IT sector.', ex2Hi: 'Woh IT kshetra mein career shuru karne waale hain.' },
    { de: 'Beschwerdebrief', art: 'der', gender: 'm', plural: 'Beschwerdebriefe', pos: 'noun', level: 'B2', register: 'written', en: 'letter of complaint', hi: 'शिकायत पत्र', ex: 'Es gibt manchmal einen Beschwerdebrief.', exEn: 'There\'s sometimes a letter of complaint.', exHi: 'Kabhi kabhi ek shikaayat patra hota hai.', ex2: 'Sie haben einen Beschwerdebrief geschrieben.', ex2En: 'They\'ve written a letter of complaint.', ex2Hi: 'Unhone ek shikaayat patra likha hai.' },
    { de: 'Branchenverband', art: 'der', gender: 'm', plural: 'Branchenverbände', pos: 'noun', level: 'B2', register: 'written', en: 'industry association', hi: 'उद्योग संघ', ex: 'Erhält der Branchenverband auch einen Bescheid zugestellt?', exEn: 'Does the industry association also receive a notice delivered?', exHi: 'Kya udyog sangh ko bhi soochna pahunchaayi jaati hai?', ex2: 'Sie sind Mitglied im Branchenverband.', ex2En: 'They\'re a member of the industry association.', ex2Hi: 'Woh udyog sangh ke sadasya hain.' },
    { de: 'Fieberthermometer', art: 'das', gender: 'n', plural: 'Fieberthermometer', pos: 'noun', level: 'B2', register: 'written', en: 'clinical thermometer', hi: 'बुखार थर्मामीटर', ex: 'Der Patient bekommt ein Fieberthermometer gereicht.', exEn: 'The patient gets handed a clinical thermometer.', exHi: 'Mareez ko bukhaar thermometer diya jaata hai.', ex2: 'Sie haben ein digitales Fieberthermometer gekauft.', ex2En: 'They\'ve bought a digital clinical thermometer.', ex2Hi: 'Unhone ek digital bukhaar thermometer khareeda hai.' },
    { de: 'Generationenwohnprojekt', art: 'das', gender: 'n', plural: 'Generationenwohnprojekte', pos: 'noun', level: 'B2', register: 'written', en: 'intergenerational housing project', hi: 'बहु-पीढ़ी आवास परियोजना', ex: 'Das Generationenwohnprojekt war erfolgreich.', exEn: 'The intergenerational housing project was successful.', exHi: 'Bahu-peedhi aavaas pariyojana safal rahi.', ex2: 'Sie haben ein Generationenwohnprojekt gestartet.', ex2En: 'They\'ve started an intergenerational housing project.', ex2Hi: 'Unhone ek bahu-peedhi aavaas pariyojana shuru ki hai.' },
    { de: 'Geschäftsmodell', art: 'das', gender: 'n', plural: 'Geschäftsmodelle', pos: 'noun', level: 'B2', register: 'written', en: 'business model', hi: 'व्यापार मॉडल', ex: 'Das Geschäftsmodell ist gleichermaßen interessant für alle.', exEn: 'The business model is equally interesting for everyone.', exHi: 'Vyapaar model sabke liye samaan roop se dilchasp hai.', ex2: 'Sie haben ihr Geschäftsmodell verändert.', ex2En: 'They\'ve changed their business model.', ex2Hi: 'Unhone apna vyapaar model badla hai.' },
    { de: 'Gesundheitsgerät', art: 'das', gender: 'n', plural: 'Gesundheitsgeräte', pos: 'noun', level: 'B2', register: 'written', en: 'health device', hi: 'स्वास्थ्य उपकरण', ex: 'Bekomme ich auch ein Gesundheitsgerät angeboten?', exEn: 'Am I also offered a health device?', exHi: 'Kya mujhe bhi swasthya upkaran diya jaata hai?', ex2: 'Sie haben ein neues Gesundheitsgerät entwickelt.', ex2En: 'They\'ve developed a new health device.', ex2Hi: 'Unhone ek naya swasthya upkaran vikasit kiya hai.' },
    { de: 'Internetmanagement', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'internet management', hi: 'इंटरनेट प्रबंधन', ex: 'Das Internetmanagement wurde verbessert.', exEn: 'Internet management was improved.', exHi: 'Internet prabandhan behtar banaaya gaya.', ex2: 'Sie haben ins Internetmanagement investiert.', ex2En: 'They\'ve invested in internet management.', ex2Hi: 'Unhone internet prabandhan mein nivesh kiya hai.' },
    { de: 'Krankenhausaufenthalt', art: 'der', gender: 'm', plural: 'Krankenhausaufenthalte', pos: 'noun', level: 'B2', register: 'written', en: 'hospital stay', hi: 'अस्पताल में प्रवास', ex: 'Der Krankenhausaufenthalt dauerte eine Woche.', exEn: 'The hospital stay lasted a week.', exHi: 'Aspataal mein pravaas ek hafte tak chala.', ex2: 'Sie haben den Krankenhausaufenthalt gut überstanden.', ex2En: 'They\'ve gotten through the hospital stay well.', ex2Hi: 'Unhone aspataal ka pravaas achhi tarah jhela hai.' },
    { de: 'Sauerstoffanteil', art: 'der', gender: 'm', plural: 'Sauerstoffanteile', pos: 'noun', level: 'B2', register: 'written', en: 'oxygen content', hi: 'ऑक्सीजन का अंश', ex: 'Der Sauerstoffanteil wird automatisch gemessen.', exEn: 'The oxygen content is measured automatically.', exHi: 'Oxygen ka ansh swachalit roop se maapa jaata hai.', ex2: 'Sie haben den Sauerstoffanteil überprüft.', ex2En: 'They\'ve checked the oxygen content.', ex2Hi: 'Unhone oxygen ke ansh ki jaanch ki hai.' },
    { de: 'Überzeugungskraft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'persuasiveness', hi: 'प्रेरक शक्ति', ex: 'Ihre Überzeugungskraft war stark.', exEn: 'Her persuasiveness was strong.', exHi: 'Uski prerak shakti majboot thi.', ex2: 'Sie haben mit Überzeugungskraft argumentiert.', ex2En: 'They\'ve argued with persuasiveness.', ex2Hi: 'Unhone prerak shakti se tark diya hai.' },
    { de: 'Veranstalter/in', art: 'der/die', gender: 'm/f', plural: 'Veranstalter/innen', pos: 'noun', level: 'B2', register: 'written', en: 'organiser', hi: 'आयोजक', ex: 'Der Veranstalter plante das Event.', exEn: 'The organiser planned the event.', exHi: 'Aayojak ne event plan kiya.', ex2: 'Sie haben mit dem Veranstalter gesprochen.', ex2En: 'They\'ve spoken with the organiser.', ex2Hi: 'Unhone aayojak se baat ki hai.' },
    { de: 'Verhandlungsgeschick', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'negotiating skill', hi: 'बातचीत कौशल', ex: 'Ihr Verhandlungsgeschick ist überaus stark.', exEn: 'Her negotiating skill is exceedingly strong.', exHi: 'Uska baatcheet kaushal atyadhik majboot hai.', ex2: 'Sie haben ihr Verhandlungsgeschick verbessert.', ex2En: 'They\'ve improved their negotiating skill.', ex2Hi: 'Unhone apna baatcheet kaushal behtar banaaya hai.' },
    { de: 'Wissensmanager/in', art: 'der/die', gender: 'm/f', plural: 'Wissensmanager/innen', pos: 'noun', level: 'B2', register: 'written', en: 'knowledge manager', hi: 'ज्ञान प्रबंधक', ex: 'Sie ist Wissensmanagerin.', exEn: 'She\'s a knowledge manager.', exHi: 'Woh gyaan prabandhak hai.', ex2: 'Sie haben einen neuen Wissensmanager eingestellt.', ex2En: 'They\'ve hired a new knowledge manager.', ex2Hi: 'Unhone ek naya gyaan prabandhak niyukt kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist bekommen-Passiv?',
      body: [ 'Normally, Vorgangspassiv puts the action or thing acted upon in focus. bekommen-Passiv instead puts the RECEIVER — the person who receives or experiences the result — as the grammatical subject.' ],
      table: {
        head: ['Vorgangspassiv (action)', 'bekommen-Passiv (recipient)'],
        rows: [ ['Die Grammatik wird dem Schüler erklärt.', '<span class="de r-bekommen">Der Schüler bekommt die Grammatik erklärt.</span>'] ]
      },
      hinglish: 'Normal Vorgangspassiv mein focus us cheez par hota hai jispar kaam hua. <b>bekommen-Passiv</b> mein focus badal jaata hai \u2014 yahan <b>paane wala</b> subject ban jaata hai. Matlab baat us insaan ki hoti hai jise kuch mila.'
    },
    {
      title: 'Struktur',
      body: [ 'Recipient (subject) + bekommen/kriegen/erhalten + object + Partizip II at the end of the clause.' ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de r-bekommen">Ich bekomme den Vertrag geschickt.</span>', 'I get the contract sent.'],
          ['<span class="de r-bekommen">Sie bekommt die Aufgabe erklärt.</span>', 'She gets the task explained.'],
          ['<span class="de r-bekommen">Wir bekommen die Ergebnisse mitgeteilt.</span>', 'We get the results communicated.'],
          ['<span class="de r-bekommen">Der Kunde erhält die Rechnung zugesandt.</span>', 'The customer receives the invoice sent.']
        ]
      },
      hinglish: 'Order yeh hai: pehle paane wala (subject), phir <b>bekommen/kriegen/erhalten</b>, phir jo cheez mili, aur sabse end mein Partizip II. Dhyaan rakho ki Partizip II hamesha aakhir mein aata hai.'
    },
    {
      title: 'bekommen vs kriegen vs erhalten',
      body: [ 'All three mean the same thing grammatically, but differ in register: bekommen is neutral and most common; kriegen is informal and very common in spoken German; erhalten is formal — letters, business, authorities, academic German.' ],
      table: {
        head: ['Verb', 'Register'],
        rows: [
          ['bekommen', 'Neutral, most common'],
          ['kriegen', 'Informal, spoken'],
          ['erhalten', 'Formal, written']
        ]
      },
      hinglish: 'Teeno ka grammar ek jaisa hai, farak sirf register ka hai. <b>bekommen</b> neutral hai aur sabse zyada chalta hai. <b>kriegen</b> bolchaal mein aata hai \u2014 likhne mein ise avoid karo. Aur <b>erhalten</b> formal hai, isliye letters, business aur official writing mein aata hai.'
    },
    {
      title: 'Unterschied zum Vorgangspassiv',
      body: [ 'Vorgangspassiv focuses on the action; bekommen-Passiv focuses on the recipient. Students must clearly distinguish these two focuses.' ],
      table: {
        head: ['Vorgangspassiv', 'bekommen-Passiv'],
        rows: [ ['Der Vertrag wird geschickt. (focus: the action)', '<span class="de r-bekommen">Ich bekomme den Vertrag geschickt.</span> (focus: the recipient)'] ]
      },
      hinglish: 'Farak sirf focus ka hai \u2014 Vorgangspassiv kaam par dhyaan deta hai, aur bekommen-Passiv us insaan par jise kuch mila. Grammar dono mein sahi hai, bas baat kis par ho rahi hai woh badal jaata hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 workplace, healthcare, and administrative situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Teilnehmer bekommen eine E-Mail geschickt.', 'The participants get an email sent.'],
          ['Der Patient bekommt die Medikamente verabreicht.', 'The patient gets the medication administered.'],
          ['Die Bewerber erhalten eine Einladung zugeschickt.', 'The applicants receive an invitation sent.'],
          ['Wir bekommen alle Informationen erklärt.', 'We get all the information explained.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke office, hospital aur official kaam wale texts mein asli mein aate hain.'
    },
    {
      title: 'Häufige Verb-Kombinationen',
      body: [ 'Not every verb naturally forms bekommen-Passiv. These high-frequency combinations are the ones worth learning as fixed chunks.' ],
      table: {
        head: ['Kombination', 'Meaning'],
        rows: [
          ['geschickt bekommen', 'to get sent'],
          ['erklärt bekommen', 'to get explained'],
          ['mitgeteilt bekommen', 'to get communicated'],
          ['gezeigt bekommen', 'to get shown'],
          ['überreicht bekommen', 'to get handed over'],
          ['empfohlen bekommen', 'to get recommended'],
          ['angeboten bekommen', 'to get offered'],
          ['verabreicht bekommen', 'to get administered']
        ]
      },
      hinglish: 'Har verb se bekommen-Passiv nahi banta \u2014 yeh sirf un verbs ke saath chalta hai jinme kuch kisi ko diya ya bataya jaata hai. Isliye in common combinations ko poore chunk ki tarah yaad kar lo.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from wrong word order, mixing bekommen with werden, or using the wrong verb form.' ],
      mistakes: [
        { wrong: 'Ich bekomme geschickt den Vertrag.', right: 'Ich bekomme den Vertrag geschickt.', why: 'The object comes before the Partizip II, which sits at the very end of the clause.' },
        { wrong: 'Der Vertrag bekommt geschickt.', right: 'Ich bekomme den Vertrag geschickt.', why: 'The subject must be the RECEIVER \u2014 someone who can actually receive something (a person, or an organisation like <i>die Firma</i>). The thing being sent cannot be the subject here.' },
        { wrong: 'Ich werde den Vertrag bekommen geschickt.', right: 'Ich bekomme den Vertrag geschickt.', why: 'bekommen-Passiv never combines with "werden" — "bekommen" itself is the passive auxiliary here.' },
        { wrong: 'Ich bekomme schicken den Vertrag.', right: 'Ich bekomme den Vertrag geschickt.', why: 'The verb after "bekommen" must be Partizip II ("geschickt"), never the infinitive ("schicken").' },
        { wrong: 'Wir kriegen erklärt die Aufgabe.', right: 'Wir kriegen die Aufgabe erklärt.', why: 'The object ("die Aufgabe") comes before the Partizip II ("erklärt"), which stays at the end.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 object aur Partizip II ka order ulta kar dena, <b>bekommen</b> ke saath <b>werden</b> jod dena, ya Partizip II ki jagah infinitive laga dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Ask yourself: who is important — the action, or the receiver? If the receiver matters, use bekommen-/kriegen-/erhalten-Passiv and pick the register that fits the situation.' ],
      note: 'Memory trick: the action itself matters? → Vorgangspassiv. The receiver matters? → bekommen-/kriegen-Passiv. Register: bekommen (neutral), kriegen (spoken), erhalten (formal).',
      hinglish: 'Khud se poochho \u2014 baat kaam ki karni hai, ya us insaan ki jise kuch mila? Agar paane wale ki baat karni hai to <b>bekommen-Passiv</b> use karo, aur situation ke hisaab se register chuno: <b>bekommen</b> normal, <b>kriegen</b> bolne mein, <b>erhalten</b> formal writing mein.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsnachricht: Neue Arbeitsbedingungen in der Forschung',
    titleEn: 'Science news: new working conditions in research',
    tokens: [
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Forschungsteam', role: 'plain', en: 'research team', hi: 'शोध दल', type: 'Noun · neut.' },
      { w: 'bekommt', role: 'r-verb', en: 'gets (Bekommen-Passiv)', hi: 'मिलता है (Bekommen-Passiv)', type: 'Verb · bekommen (Rezipientenpassiv)', why: 'bekommen + Partizip II forms the recipient passive: the person receiving the action becomes the subject (this chapter).' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Universität', role: 'plain', en: 'university (Satzende)', hi: 'विश्वविद्यालय (Satzende)', type: 'Noun · fem.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'neues', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective' },
      { w: 'Labor', role: 'plain', en: 'laboratory (Satzende)', hi: 'प्रयोगशाला (Satzende)', type: 'Noun · neut.' },
      { w: 'zugewiesen', role: 'r-verb', en: 'assigned (Satzende, Bekommen-Passiv)', hi: 'सौंपा गया (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)', why: 'The team receives (bekommt) the assignment — the recipient passive highlights the RECEIVER, unlike werden-Passiv.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'bekommen', role: 'r-verb', en: 'get (Bekommen-Passiv)', hi: 'मिलता है', type: 'Verb · bekommen (Rezipientenpassiv)' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'अधिक', type: 'Adjective' },
      { w: 'Zeit', role: 'plain', en: 'time (Satzende)', hi: 'समय (Satzende)', type: 'Noun · fem.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Grundlagenforschung', role: 'plain', en: 'basic research (Satzende)', hi: 'मौलिक शोध (Satzende)', type: 'Noun · fem.' },
      { w: 'eingeräumt', role: 'r-verb', en: 'granted (Satzende, Bekommen-Passiv)', hi: 'दी गई (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'Berufsanfänger', role: 'plain', en: 'career starters', hi: 'नए पेशेवर', type: 'Noun · plural' },
      { w: 'bekommen', role: 'r-verb', en: 'get (Bekommen-Passiv)', hi: 'मिलता है', type: 'Verb · bekommen (Rezipientenpassiv)' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'faire', role: 'plain', en: 'fair', hi: 'निष्पक्ष', type: 'Adjective' },
      { w: 'Chance', role: 'plain', en: 'chance (Satzende)', hi: 'मौक़ा (Satzende)', type: 'Noun · fem.' },
      { w: 'geboten', role: 'r-verb', en: 'offered (Satzende, Bekommen-Passiv)', hi: 'दी जाती है (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'So', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'bekommt', role: 'r-verb', en: 'gets (Rezipientenpassiv)', hi: 'मिलती है', type: 'Verb · bekommen (Rezipientenpassiv)', why: 'bekommen-Passiv: the recipient, not the direct object, becomes the subject (this chapter).' },
      { w: 'jeder', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Mitarbeiter', role: 'plain', en: 'employee', hi: 'कर्मचारी', type: 'Noun · masc.' },
      { w: 'regelmäßig', role: 'plain', en: 'regularly', hi: 'नियमित रूप से', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'an (fem.)', hi: 'एक', type: 'Article' },
      { w: 'ehrliche', role: 'plain', en: 'honest', hi: 'ईमानदार', type: 'Adjective' },
      { w: 'Rückmeldung', role: 'plain', en: 'feedback (Satzende)', hi: 'प्रतिक्रिया (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'seiner', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Arbeit', role: 'plain', en: 'work (Satzende)', hi: 'काम (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Fachbereich', role: 'plain', en: 'department', hi: 'विभाग', type: 'Noun · masc.' },
      { w: 'kriegt', role: 'r-verb', en: 'gets (Kriegen-Passiv, umgangssprachlich)', hi: 'मिलता है (बोलचाल)', type: 'Verb · kriegen (Rezipientenpassiv)', why: 'kriegen is the more colloquial equivalent of bekommen in the recipient passive (this chapter).' },
      { w: 'dafür', role: 'plain', en: 'for this', hi: 'इसके लिए', type: 'Pronominaladverb' },
      { w: 'zusätzliche', role: 'plain', en: 'additional', hi: 'अतिरिक्त', type: 'Adjective' },
      { w: 'Fördergelder', role: 'plain', en: 'grant funding (Satzende)', hi: 'अनुदान (Satzende)', type: 'Noun · plural' },
      { w: 'bewilligt', role: 'r-verb', en: 'approved (Satzende, Bekommen-Passiv)', hi: 'मंज़ूर (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Dekan', role: 'plain', en: 'dean', hi: 'डीन', type: 'Noun · masc.' },
      { w: 'bekommt', role: 'r-verb', en: 'gets (Rezipientenpassiv)', hi: 'मिलती है', type: 'Verb · bekommen (Rezipientenpassiv)' },
      { w: 'daraufhin', role: 'plain', en: 'thereupon', hi: 'इसके बाद', type: 'Adverb' },
      { w: 'zahlreiche', role: 'plain', en: 'numerous', hi: 'कई', type: 'Adjective' },
      { w: 'Glückwünsche', role: 'plain', en: 'congratulations (Satzende)', hi: 'बधाइयाँ (Satzende)', type: 'Noun · plural' },
      { w: 'überreicht', role: 'r-verb', en: 'presented (Satzende, Bekommen-Passiv)', hi: 'दी जाती हैं (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Selbst', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'Praktikanten', role: 'plain', en: 'interns', hi: 'प्रशिक्षु', type: 'Noun · plural' },
      { w: 'bekommen', role: 'r-verb', en: 'get (Rezipientenpassiv)', hi: 'मिलती है', type: 'Verb · bekommen (Rezipientenpassiv)' },
      { w: 'so', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Chance', role: 'plain', en: 'chance (Satzende)', hi: 'अवसर (Satzende)', type: 'Noun · fem.' },
      { w: 'zugesprochen', role: 'r-verb', en: 'granted (Satzende, Bekommen-Passiv)', hi: 'दी जाती है (Satzende)', type: 'Verb · Partizip II (Rezipientenpassiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'aktiv', role: 'plain', en: 'actively', hi: 'सक्रिय रूप से', type: 'Adjective' },
      { w: 'einzubringen', role: 'plain', en: 'contribute (Satzende)', hi: 'योगदान देना (Satzende)', type: 'Verb · einbringen (Infinitiv mit zu)' },
      { w: '.', plain: true }
    ],
    translation: 'A research team is assigned a new laboratory by the university. The researchers are moreover granted more time for their basic research. Career starters are also offered a fair chance. This way, every employee regularly gets honest feedback on their work. The department gets additional grant funding approved for this. The dean thereupon receives numerous congratulations. Even interns are thus granted the chance to actively contribute.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_047_L001', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe endlich mein Formular vom Arzt ausgefüllt bekommen.', en: 'Timo, I finally got my form filled out by the doctor.' },
      { id: 'B2_047_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut. Hast du auch deine Ergebnisse erklärt bekommen?', en: 'Good. Did you also get your results explained?' },
      { id: 'B2_047_L003', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ganz klar erklärt bekommen, keine Fragen offen.', en: 'Yes, clearly explained, no questions left open.' },
      { id: 'B2_047_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich habe heute meinen Termin nur bestätigt gekriegt — immerhin.', en: 'I only got my appointment confirmed today — still, something.' }
    ],
    transcript: 'Timo, ich habe endlich mein Formular vom Arzt ausgefüllt bekommen. Gut. Hast du auch deine Ergebnisse erklärt bekommen? Ja, ganz klar erklärt bekommen, keine Fragen offen. Ich habe heute meinen Termin nur bestätigt gekriegt — immerhin.',
    translation: 'Timo, I finally got my form filled out by the doctor. Good. Did you also get your results explained? Yes, clearly explained, no questions left open. I only got my appointment confirmed today — still, something.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'endlich' },
      { w: 'mein' },
      { w: 'Formular' },
      { w: 'vom' },
      { w: 'Arzt' },
      { w: 'ausgefüllt' },
      { w: 'bekommen' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: '.', plain: true },
      { w: 'Hast' },
      { w: 'du' },
      { w: 'auch' },
      { w: 'deine' },
      { w: 'Ergebnisse' },
      { w: 'erklärt' },
      { w: 'bekommen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ganz' },
      { w: 'klar' },
      { w: 'erklärt' },
      { w: 'bekommen' },
      { w: ',', plain: true },
      { w: 'keine' },
      { w: 'Fragen' },
      { w: 'offen' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'heute' },
      { w: 'meinen' },
      { w: 'Termin' },
      { w: 'nur' },
      { w: 'bestätigt' },
      { w: 'gekriegt' },
      { w: '—', plain: true },
      { w: 'immerhin' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Wenke von der Ärztin bekommen?', qEn: 'What did Wenke get done by the doctor?', options: ['ein Rezept', 'ihr Formular ausgefüllt', 'eine Untersuchung', 'nichts'], optionsEn: ['a recipe', 'filled in her form', 'an investigation', 'nothing'], answer: 1,
        explain: '"Ich habe endlich mein Formular … ausgefüllt bekommen."' },
      { q: 'Was hat Timo heute bekommen?', qEn: 'What did Timo get today?', options: ['seine Ergebnisse', 'seinen Termin bestätigt', 'ein neues Formular', 'nichts'], optionsEn: ['his results', 'confirmed his appointment', 'a new form', 'nothing'], answer: 1,
        explain: '"Ich habe heute meinen Termin nur bestätigt gekriegt."' }
    ]
  },

  speaking: [
    { task: "Sag deinem Kollegen, was du beim Arzt erledigt hast.", taskEn: "Tell your colleague what you got done at the doctor's.", de: "Ich habe endlich mein Formular vom Arzt ausgefüllt bekommen.", en: "I finally got my form filled in by the doctor." },
    { task: "Er fragt, ob dir die Ergebnisse erklärt wurden.", taskEn: "He asks whether the results were explained to you.", de: "Ja, ich habe alles ganz klar erklärt bekommen.", en: "Yes, I had everything explained very clearly." },
    { task: "Eine Kollegin fragt, wie deine erste Woche lief.", taskEn: "A colleague asks how your first week went.", de: "Ich habe die Zugänge geschickt bekommen und alles gezeigt bekommen.", en: "I got the access details sent and had everything shown to me." },
    { task: "Ein Praktikant fragt, was in der Forschungseinrichtung passiert.", taskEn: "An intern asks what happens at the research institute.", de: "Du bekommst einen Bescheid zugeschickt und die Bedingungen erklärt.", en: "You'll be sent a notification and have the conditions explained." },
    { task: "Rollenspiel: Ihr erklärt einer Bewerberin das Verfahren.", taskEn: "Role-play: you explain the procedure to an applicant.", de: "Sie bekommen eine Bestätigung geschickt. — Und später bekommen Sie die Entscheidung mitgeteilt.", en: "You'll be sent a confirmation. — And later you'll be informed of the decision." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal email (6-8 sentences): Write to a customer describing what they will receive (invoice, confirmation, information), using erhalten-Passiv naturally.\n\nTASK 2 — Workplace update (6-8 sentences): Describe what new employees get during onboarding, using bekommen-Passiv naturally.',
    starters: ['Sie erhalten …', 'Der neue Mitarbeiter bekommt …'],
    placeholder: 'Sie erhalten die Rechnung zugesandt. Der neue Mitarbeiter bekommt …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly uses bekommen-Passiv?',
      options: ['Ich bekomme den Vertrag geschickt.', 'Ich bekomme geschickt den Vertrag.', 'Ich werde den Vertrag bekommen geschickt.'],
      answer: 0,
      explain: 'The object comes before the Partizip II, which sits at the end of the clause — and bekommen-Passiv never adds "werden".'
    },
    gap: {
      sentence: ['Der Schüler ', ' die Grammatik erklärt.'],
      gaps: [ { answer: 'bekommt', accepts: ['bekommt', 'kriegt'] } ],
      explain: '"bekommt" (or informally "kriegt") makes the recipient — "der Schüler" — the grammatical subject.'
    },
    match: {
      q: 'Match each verb to its register.',
      pairs: [
        { noun: 'bekommen', art: 'Neutral, most common' },
        { noun: 'kriegen', art: 'Informal, spoken' },
        { noun: 'erhalten', art: 'Formal, written' }
      ]
    },
    builder: {
      target: 'Build: "The customer receives the invoice sent." (erhalten-Passiv, formal)',
      bank: ['Der', 'Kunde', 'erhält', 'die', 'Rechnung', 'zugesandt', '.'],
      answer: ['Der', 'Kunde', 'erhält', 'die', 'Rechnung', 'zugesandt', '.'],
      roles: { 'erhält': 'r-bekommen', 'zugesandt': 'r-bekommen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Wir kriegen erklärt die Aufgabe.',
      right: 'Wir kriegen die Aufgabe erklärt.',
      explain: 'The object ("die Aufgabe") must come before the Partizip II ("erklärt"), which stays at the end of the clause.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does bekommen-Passiv express?', options: ['The recipient becomes the grammatical subject', 'The action itself is emphasised', 'A finished state'], answer: 0,
      explain: 'Unlike normal passive, bekommen-Passiv puts the RECEIVER — not the thing acted upon — as the subject.' },
    { q: 'How is bekommen-Passiv formed?', options: ['Recipient + bekommen/kriegen/erhalten + Partizip II', 'Recipient + werden + Partizip II', 'Recipient + sein + Partizip II'], answer: 0,
      explain: 'The structure uses bekommen, kriegen, or erhalten as the passive auxiliary — never werden or sein.' },
    { q: 'Which verb is the most formal?', options: ['erhalten', 'bekommen', 'kriegen'], answer: 0,
      explain: '"erhalten" is used in letters, business, authorities, and academic German.' },
    { q: 'Which verb is informal, spoken German?', options: ['kriegen', 'erhalten', 'bekommen'], answer: 0,
      explain: '"kriegen" is very common in everyday spoken German, but less appropriate in formal writing.' },
    { q: '"Ich bekomme den Vertrag geschickt" contrasts with which Vorgangspassiv sentence?', options: ['Der Vertrag wird geschickt.', 'Der Vertrag ist geschickt.', 'Der Vertrag wird schicken.'], answer: 0,
      explain: 'Vorgangspassiv focuses on the action ("Der Vertrag wird geschickt"); bekommen-Passiv shifts focus to the recipient ("Ich bekomme ... geschickt").' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-bekommen', html: 'bekommen-Passiv (Recipient + bekommen/kriegen/erhalten + Partizip II) makes the RECEIVER, not the action, the grammatical subject.' },
    { c: 'r-bekommen', html: 'Choose your register: bekommen (neutral) / kriegen (informal, spoken) / erhalten (formal, written).' },
    { c: 'r-bekommen', html: 'The Partizip II always sits at the end of the clause, and bekommen-Passiv never combines with "werden".' }
  ],
  revisionTips: [
    'For every Vorgangspassiv sentence you know, practise building its bekommen-Passiv counterpart, shifting focus to the recipient.',
    'Scan a formal letter or customer-service email for bekommen/kriegen/erhalten + Partizip II — note which register is used and why.',
    'Ask yourself before every passive sentence: is the action important, or is the receiver important? That answers Vorgangspassiv vs bekommen-Passiv.'
  ]
};

window.CHAPTER = CHAPTER;
