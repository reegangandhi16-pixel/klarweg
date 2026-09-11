/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 21
   "sowohl ... als auch" — a two-part connector emphasizing that
   BOTH elements are equally true (stronger than plain "und").
   Does NOT introduce weder...noch, nicht nur...sondern auch, or
   einerseits...andererseits (later chapters).
   IMPORTANT: dialogue uses ONLY Svenja and Timo.
   Vocabulary source: uploaded chapter-21 list (55 items, user-edited
   general B2 vocabulary bank — social/employment/administration themes).
============================================================ */
const CHAPTER = {
  id: 'b2-21-sowohl-als-auch',
  phase: 'B2 · Phase 1',
  number: 21,
  title: 'sowohl ... als auch',
  titleEn: 'both ... and ...',
  description: 'Not just "und" — sowohl...als auch insists that both things are equally, simultaneously true.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 22, title: 'weder ... noch', titleEn: 'neither ... nor ...' , href: 'chapter-b2-22-weder-noch.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not one or the other — <em>both.</em>',
    intro: 'At a consulting agency, Svenja and Timo discuss a family that\'s both financially and socially disadvantaged — offering both money and counselling, both state help and private donations — every fact doubled with sowohl … als auch.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear sowohl...als auch emphasize two equally true things'
    ],
    scene: 'Die Beratungsagentur',
    femaleSpeakers: ['Svenja'],
    dialogue: [
      { speaker: 'Svenja', tokens: [
        { w: 'Diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Familie', role: 'r-subject', en: 'family', hi: 'परिवार', pron: 'fa-MEE-lyuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch' },
        { w: 'finanziell', role: 'r-akkusativ', en: 'financially', hi: 'आर्थिक रूप से', pron: 'fi-nan-tsyel', type: 'Adjective' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'sozial', role: 'r-akkusativ', en: 'socially', hi: 'सामाजिक रूप से', pron: 'zo-TSYAHL', type: 'Adjective' },
        { w: 'benachteiligt', role: 'r-akkusativ', en: 'disadvantaged', hi: 'वंचित', pron: 'be-NAHKH-ty-likht', type: 'Adjective', why: 'benachteiligt = disadvantaged (this chapter).', ex: 'Sie ist benachteiligt.', exEn: 'It is disadvantaged.' },
        { w: '.', plain: true }
      ], en: 'This family is both financially and socially disadvantaged.', hi: 'Yeh parivaar aarthik aur samajik roop se dono vanchit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'tun', role: 'r-verb', en: 'do', hi: 'करना', pron: 'toon', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'What can we do?', hi: 'Hum kya kar sakte hain?' },
      { speaker: 'Svenja', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch' },
        { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Beratung', role: 'r-akkusativ', en: 'counseling', hi: 'सलाह', pron: 'be-RAH-tung', type: 'Noun · fem.', why: 'die Beratung (this chapter).', ex: 'Beratung anbieten' },
        { w: 'anbieten', role: 'r-verb', en: 'offer', hi: 'देना', pron: 'AN-bee-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We can offer both money and counseling.', hi: 'Hum paisa aur salaah dono de sakte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Erhalten', role: 'r-verb', en: 'do they receive', hi: 'मिलते हैं', pron: 'er-HAL-ten', type: 'Verb · erhalten', why: 'erhalten = to receive (this chapter).', ex: 'Erhalten sie Unterstützung?', exEn: 'Do they receive support?' },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch' },
        { w: 'staatliche', role: 'r-akkusativ', en: 'state', hi: 'सरकारी', pron: 'SHTAHT-li-khuh', type: 'Adjective' },
        { w: 'Hilfe', role: 'r-akkusativ', en: 'help', hi: 'मदद', pron: 'HIL-fuh', type: 'Noun · fem.' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'private', role: 'r-akkusativ', en: 'private', hi: 'निजी', pron: 'pri-VAH-tuh', type: 'Adjective' },
        { w: 'Spenden', role: 'r-akkusativ', en: 'donations', hi: 'दान', pron: 'SHPEN-den', type: 'Noun · plural' },
        { w: '?', plain: true }
      ], en: 'Do they receive both state help and private donations?', hi: 'Kya unhe sarkari madad aur niji daan dono milte hain?' },
      { speaker: 'Svenja', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Behörde', role: 'r-subject', en: 'authority', hi: 'सरकारी दफ़्तर', pron: 'be-HÖ-ruh', type: 'Noun · fem.' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-subject', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'mehrere', role: 'r-subject', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'Beratungsagenturen', role: 'r-subject', en: 'counseling agencies', hi: 'सलाह एजेंसियों', pron: 'be-RAH-tungs-a-gen-too-ren', type: 'Noun · plural', why: 'die Beratungsagentur (this chapter).', ex: 'mehrere Beratungsagenturen' },
        { w: 'unterstützen', role: 'r-verb', en: 'support', hi: 'मदद करती हैं', pron: 'un-ter-SHTÜ-tsen', type: 'Verb · unterstützen (Satzende)' },
        { w: 'sie', role: 'r-akkusativ', en: 'them', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Yes, both the authority and several counseling agencies support them.', hi: 'Haan, sarkari daftar aur kayi salaah agency dono unki madad karti hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'nach', role: 'r-preposition', en: 'like', hi: 'जैसा', pron: 'nahkh', type: 'Preposition' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'guten', role: 'r-dativ', en: 'good', hi: 'अच्छी', pron: 'GOO-ten', type: 'Adjective · dative' },
        { w: 'Grundlage', role: 'r-dativ', en: 'foundation (dat.)', hi: 'आधार', pron: 'GRUNT-lah-guh', type: 'Noun · fem. dat.', why: 'die Grundlage (this chapter).', ex: 'eine gute Grundlage' },
        { w: '.', plain: true }
      ], en: 'That sounds like a good foundation.', hi: 'Yeh ek achhe aadhaar jaisa lagta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-sowohl">sowohl ... als auch</span> means "both ... and ..." — it emphasizes that BOTH elements are equally, simultaneously true. <span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span> is stronger and more expressive than the neutral <span class="de">Anna spricht Deutsch und Englisch.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is SOWOHL ... ALS AUCH (B2 level): a two-part connector meaning "both ... and ..." that emphasizes both elements are equally true (Anna spricht sowohl Deutsch als auch Englisch. / Die Firma verkauft sowohl Computer als auch Smartphones.). It can connect people, nouns, verbs, adjectives, or prepositional phrases. It is stronger and more expressive/formal than plain "und", and common in reports, presentations, newspaper articles, and workplace communication. The finite verb still follows normal German word order (V2) even when "sowohl" starts the sentence. ' +
    'Do NOT expect weder...noch, nicht nur...sondern auch, or einerseits...andererseits — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "sowohl" and "als auch" must both appear, each immediately before its own element — never combine "sowohl" with "und" or drop "als" before "auch".\n' +
    '- The two connected elements should be grammatically parallel (both nouns, both verbs, etc.).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Emphasis check:</b> one sentence on whether "sowohl ... als auch" was a stylistically good choice here versus plain "und".</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "sowohl ... als auch" to emphasize two equally true elements. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the sowohl...als auch vs und comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: sowohl + Element 1 + als auch + Element 2, both equally true.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'spricht', role: 'plain' },
    { w: 'sowohl', role: 'r-sowohl' }, { w: 'Deutsch', role: 'plain' }, { w: 'als', role: 'r-sowohl' }, { w: 'auch', role: 'r-sowohl' }, { w: 'Englisch', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: sowohl...als auch emphasizes that both elements are equally true.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Svenja and Timo discuss a consulting agency\'s dual social work approach.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master sowohl...als auch structure, what it can connect, and comparison to und.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of sowohl...als auch constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the two connected elements and the emphasis they create.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare options and describe abilities using sowohl...als auch naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and presentations using sowohl...als auch appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill und-to-sowohl-als-auch transformation, sentence building, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 420 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'und-to-sowohl-als-auch transformation, sentence building, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete sowohl...als auch reference — what it can connect, und comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna spricht sowohl Deutsch als auch Englisch.', text: 'Use sowohl...als auch to emphasize two equal elements' },
    { de: 'Sowohl Anna als auch Rohan kommen heute.', text: 'Front sowohl...als auch correctly with V2 word order' },
    { de: 'sowohl...als auch (emphasis) vs. und (neutral)', text: 'Distinguish stylistic emphasis from a simple connection' },
    { de: 'People, nouns, verbs, adjectives, prepositional phrases', text: 'Know what sowohl...als auch can connect' },
    { de: 'Formal reports, presentations, newspapers', text: 'Use sowohl...als auch naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-21 list) ----------
  vocab: [
    { de: 'Aufregung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'excitement', hi: 'उत्साह', ex: 'Die Aufregung vor der Prüfung war groß.', exEn: 'The excitement before the exam was great.', exHi: 'Pariksha se pehle utsaah bahut tha.', ex2: 'Vor Aufregung konnte sie nicht schlafen.', ex2En: 'She couldn\'t sleep from excitement.', ex2Hi: 'Utsaah ke kaaran woh so nahi paayi.' },
    { de: 'Ausgrenzung', art: 'die', gender: 'f', plural: 'Ausgrenzungen', pos: 'noun', level: 'B2', en: 'exclusion, marginalisation', hi: 'बहिष्कार', ex: 'Soziale Ausgrenzung ist ein ernstes Problem.', exEn: 'Social exclusion is a serious problem.', exHi: 'Saamaajik bahishkaar ek gambhir samasya hai.', ex2: 'Die Organisation kämpft gegen Ausgrenzung.', ex2En: 'The organization fights against exclusion.', ex2Hi: 'Sangathan bahishkaar ke khilaaf ladta hai.' },
    { de: 'ausleihen', pos: 'verb', level: 'B2', en: 'to lend, borrow', hi: 'उधार लेना/देना', ex: 'Ich leihe mir ein Buch aus.', exEn: 'I borrow a book.', exHi: 'Main ek kitaab udhaar leta hoon.', ex2: 'Sie leiht ihr Auto nicht gern aus.', ex2En: 'She doesn\'t like lending her car.', ex2Hi: 'Woh apni gaadi udhaar dena pasand nahi karti.', conj: { praesens: 'leiht aus', praeteritum: 'lieh aus', perfekt: 'hat ausgeliehen' } },
    { de: 'ausmachen', pos: 'verb', level: 'B2', en: 'to make up, account for, arrange, settle', hi: 'तय करना, हिस्सा होना', ex: 'Frauen machen die Hälfte der Belegschaft aus.', exEn: 'Women make up half of the workforce.', exHi: 'Mahilaayein karmchaariyon ka aadha hissa hain.', ex2: 'Wir haben einen Termin ausgemacht.', ex2En: 'We arranged an appointment.', ex2Hi: 'Humne ek appointment tay ki.', conj: { praesens: 'macht aus', praeteritum: 'machte aus', perfekt: 'hat ausgemacht' } },
    { de: 'bauen', pos: 'verb', level: 'B2', en: 'to build', hi: 'बनाना', ex: 'Sie bauen ein neues Haus.', exEn: 'They are building a new house.', exHi: 'Woh ek naya ghar bana rahe hain.', ex2: 'Das Unternehmen baut moderne Fabriken.', ex2En: 'The company builds modern factories.', ex2Hi: 'Company aadhunik factories banaati hai.', conj: { praesens: 'baut', praeteritum: 'baute', perfekt: 'hat gebaut' } },
    { de: 'bedürftig', pos: 'adjective', level: 'B2', en: 'needy, in need of', hi: 'ज़रूरतमंद', ex: 'Die Beratungsagentur hilft sowohl Bedürftigen als auch Benachteiligten.', exEn: 'The consulting agency helps both needy people and disadvantaged people.', exHi: 'Paraamarsh agency zaroorat-mand aur vanchit dono logon ki madad karti hai.', ex2: 'Bedürftige Familien erhalten Unterstützung.', ex2En: 'Needy families receive support.', ex2Hi: 'Zaroorat-mand parivaaron ko sahaayata milti hai.' },
    { de: 'begründen', pos: 'verb', level: 'B2', en: 'to justify, give reasons', hi: 'औचित्य साबित करना', ex: 'Sie begründete ihre Entscheidung ausführlich.', exEn: 'She justified her decision in detail.', exHi: 'Usne apne faisle ka vistaar se karan diya.', ex2: 'Bitte begründen Sie Ihre Meinung.', ex2En: 'Please justify your opinion.', ex2Hi: 'Kripya apni raay ka karan dein.', conj: { praesens: 'begründet', praeteritum: 'begründete', perfekt: 'hat begründet' } },
    { de: 'Behandlungsmöglichkeit', art: 'die', gender: 'f', plural: 'Behandlungsmöglichkeiten', pos: 'noun', level: 'B2', en: 'treatment option', hi: 'उपचार विकल्प', ex: 'Sowohl die Infrastruktur als auch die Behandlungsmöglichkeiten müssen verbessert werden.', exEn: 'Both the infrastructure and the treatment options must be improved.', exHi: 'Buniyaadi dhaancha aur upchaar vikalp, dono ko behtar banaana hoga.', ex2: 'Es gibt neue Behandlungsmöglichkeiten für diese Krankheit.', ex2En: 'There are new treatment options for this disease.', ex2Hi: 'Is bimaari ke liye naye upchaar vikalp hain.' },
    { de: 'beliebt', pos: 'adjective', level: 'B2', en: 'popular', hi: 'लोकप्रिय', ex: 'Das Café ist bei Studenten sehr beliebt.', exEn: 'The café is very popular among students.', exHi: 'Cafe vidyaarthiyon mein bahut lokpriya hai.', ex2: 'Sie ist eine beliebte Lehrerin.', ex2En: 'She is a popular teacher.', ex2Hi: 'Woh ek lokpriya shikshika hai.' },
    { de: 'benachteiligt', pos: 'adjective', level: 'B2', en: 'disadvantaged', hi: 'वंचित', ex: 'Die Beratungsagentur hilft sowohl Bedürftigen als auch Benachteiligten.', exEn: 'The consulting agency helps both needy people and disadvantaged people.', exHi: 'Paraamarsh agency zaroorat-mand aur vanchit dono logon ki madad karti hai.', ex2: 'Benachteiligte Schüler brauchen mehr Unterstützung.', ex2En: 'Disadvantaged students need more support.', ex2Hi: 'Vanchit vidyaarthiyon ko zyada sahaayata chaahiye.' },
    { de: 'Beratungsagentur', art: 'die', gender: 'f', plural: 'Beratungsagenturen', pos: 'noun', level: 'B2', en: 'consulting agency', hi: 'परामर्श एजेंसी', ex: 'Die Beratungsagentur hilft sowohl Bedürftigen als auch Benachteiligten.', exEn: 'The consulting agency helps both needy people and disadvantaged people.', exHi: 'Paraamarsh agency zaroorat-mand aur vanchit dono logon ki madad karti hai.', ex2: 'Die Beratungsagentur wurde vor fünf Jahren gegründet.', ex2En: 'The consulting agency was founded five years ago.', ex2Hi: 'Paraamarsh agency paanch saal pehle sthaapit hui thi.' },
    { de: 'Bestellung', art: 'die', gender: 'f', plural: 'Bestellungen', pos: 'noun', level: 'B2', en: 'order', hi: 'ऑर्डर', ex: 'Die Bestellung kommt morgen an.', exEn: 'The order arrives tomorrow.', exHi: 'Order kal aayega.', ex2: 'Ich möchte meine Bestellung stornieren.', ex2En: 'I would like to cancel my order.', ex2Hi: 'Main apna order radd karna chaahta hoon.' },
    { de: 'Bevölkerungswachstum', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'population growth', hi: 'जनसंख्या वृद्धि', ex: 'Die Korruption wirkt sich sowohl auf die Erwerbstätigkeit als auch auf das Bevölkerungswachstum aus.', exEn: 'Corruption affects both employment and population growth.', exHi: 'Bhrashtachaar rozgaar aur jansankhya vriddhi, dono ko prabhaavit karta hai.', ex2: 'Das Bevölkerungswachstum verlangsamt sich.', ex2En: 'Population growth is slowing down.', ex2Hi: 'Jansankhya vriddhi dheemi ho rahi hai.' },
    { de: 'Beweis', art: 'der', gender: 'm', plural: 'Beweise', pos: 'noun', level: 'B2', en: 'proof, evidence', hi: 'सबूत', ex: 'Der Beweis zeigt sowohl die Entstehung als auch die Grundlage des Programms.', exEn: 'The evidence shows both the origin and the foundation of the programme.', exHi: 'Saboot kaaryakram ki utpatti aur aadhaar, dono dikhaata hai.', ex2: 'Es gibt keinen eindeutigen Beweis.', ex2En: 'There is no clear proof.', ex2Hi: 'Koi spasht saboot nahi hai.' },
    { de: 'beziehungsweise', pos: 'adverb', level: 'B2', en: 'or rather, respectively', hi: 'या यूँ कहें कि', ex: 'Anna, beziehungsweise Rohan, kommt später.', exEn: 'Anna, or rather Rohan, is coming later.', exHi: 'Anna, ya yun kahein Rohan, baad mein aayegi.', ex2: 'Die Preise sind fünf beziehungsweise zehn Euro.', ex2En: 'The prices are five and ten euros respectively.', ex2Hi: 'Daam paanch aur das euro, kramashah hain.' },
    { de: 'bleiben', pos: 'verb', level: 'B2', en: 'to stay, remain', hi: 'रहना', ex: 'Wir bleiben heute zu Hause.', exEn: 'We are staying home today.', exHi: 'Hum aaj ghar par rahenge.', ex2: 'Sie blieb ruhig trotz des Stresses.', ex2En: 'She remained calm despite the stress.', ex2Hi: 'Tanav ke baavjood woh shaant rahi.', conj: { praesens: 'bleibt', praeteritum: 'blieb', perfekt: 'ist geblieben' } },
    { de: 'dennoch', pos: 'adverb', level: 'B2', en: 'nevertheless, yet', hi: 'फिर भी', ex: 'Dennoch ergreift die Regierung sowohl kurzfristige als auch langfristige Maßnahmen.', exEn: 'Nevertheless, the government takes both short-term and long-term measures.', exHi: 'Phir bhi, sarkaar alpkaalik aur deerghkaalik dono upaay karti hai.', ex2: 'Es regnete, dennoch gingen wir spazieren.', ex2En: 'It rained, yet we went for a walk.', ex2Hi: 'Baarish ho rahi thi, phir bhi hum tehalne gaye.' },
    { de: 'ebenfalls', pos: 'adverb', level: 'B2', en: 'likewise, also', hi: 'इसी तरह', ex: 'Sie kommt ebenfalls zur Party.', exEn: 'She is likewise coming to the party.', exHi: 'Woh bhi party mein aa rahi hai.', ex2: 'Das gilt ebenfalls für dich.', ex2En: 'That applies to you likewise.', ex2Hi: 'Yeh tum par bhi lagoo hota hai.' },
    { de: 'einarbeiten', pos: 'verb', level: 'B2', en: 'to train, familiarise on a job', hi: 'प्रशिक्षित करना', ex: 'Der Kollege arbeitet die neue Mitarbeiterin ein.', exEn: 'The colleague trains the new employee.', exHi: 'Sahakarmi nayi karmchaari ko prashikshit karta hai.', ex2: 'Es dauert Zeit, sich einzuarbeiten.', ex2En: 'It takes time to get familiar with the job.', ex2Hi: 'Kaam mein prashikshit hone mein samay lagta hai.', conj: { praesens: 'arbeitet ein', praeteritum: 'arbeitete ein', perfekt: 'hat eingearbeitet' } },
    { de: 'Eintragung', art: 'die', gender: 'f', plural: 'Eintragungen', pos: 'noun', level: 'B2', en: 'entry, registration', hi: 'प्रविष्टि', ex: 'Die Eintragung im Register war fehlerhaft.', exEn: 'The entry in the register was faulty.', exHi: 'Register mein pravishti galat thi.', ex2: 'Bitte prüfen Sie die Eintragung.', ex2En: 'Please check the entry.', ex2Hi: 'Kripya pravishti jaanchein.' },
    { de: 'einwerfen', pos: 'verb', level: 'B2', en: 'to throw in, post a letter', hi: 'डालना, पोस्ट करना', ex: 'Sie wirft den Brief in den Briefkasten ein.', exEn: 'She posts the letter in the mailbox.', exHi: 'Woh patra dakiya baske mein daalti hai.', ex2: 'Er warf eine Bemerkung ein.', ex2En: 'He threw in a remark.', ex2Hi: 'Usne ek tippani daali.', conj: { praesens: 'wirft ein', praeteritum: 'warf ein', perfekt: 'hat eingeworfen' } },
    { de: 'Entstehung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'emergence, origin', hi: 'उत्पत्ति', ex: 'Der Beweis zeigt sowohl die Entstehung als auch die Grundlage des Programms.', exEn: 'The evidence shows both the origin and the foundation of the programme.', exHi: 'Saboot kaaryakram ki utpatti aur aadhaar, dono dikhaata hai.', ex2: 'Die Entstehung des Universums ist faszinierend.', ex2En: 'The origin of the universe is fascinating.', ex2Hi: 'Brahmaand ki utpatti aakarshak hai.' },
    { de: 'erachten', pos: 'verb', level: 'B2', en: 'to regard, deem', hi: 'मानना', ex: 'Ich erachte diese Arbeit als wichtig, weil sie sowohl der Gesellschaft als auch dem Einzelnen nützt.', exEn: 'I regard this work as important, because it benefits both society and the individual.', exHi: 'Main is kaam ko mahatvapurn maanti hoon, kyunki yeh samaaj aur vyakti, dono ko laabh pahunchaata hai.', ex2: 'Er erachtet den Vorschlag als sinnvoll.', ex2En: 'He deems the proposal reasonable.', ex2Hi: 'Woh sujhaav ko uchit maanta hai.', conj: { praesens: 'erachtet', praeteritum: 'erachtete', perfekt: 'hat erachtet' } },
    { de: 'erfassen', pos: 'verb', level: 'B2', en: 'to grasp, record, capture', hi: 'दर्ज करना, समझना', ex: 'Sie erfasst sowohl die Lebenslage als auch die Notlage der Familien.', exEn: 'She records both the life situation and the plight of the families.', exHi: 'Woh parivaaron ki jeevan sthiti aur sankatpurn sthiti dono darj karti hai.', ex2: 'Er erfasste die Situation sofort.', ex2En: 'He grasped the situation immediately.', ex2Hi: 'Usne sthiti ko turant samjha.', conj: { praesens: 'erfasst', praeteritum: 'erfasste', perfekt: 'hat erfasst' } },
    { de: 'Ergebnis', art: 'das', gender: 'n', plural: 'Ergebnisse', pos: 'noun', level: 'B2', en: 'result', hi: 'परिणाम', ex: 'Das Ergebnis war überraschend.', exEn: 'The result was surprising.', exHi: 'Parinaam aashcharyajanak tha.', ex2: 'Wir warten auf das Ergebnis.', ex2En: 'We are waiting for the result.', ex2Hi: 'Hum parinaam ka intezaar kar rahe hain.' },
    { de: 'ergreifen', pos: 'verb', level: 'B2', en: 'to seize, take measures', hi: 'उपाय करना', ex: 'Dennoch ergreift die Regierung sowohl kurzfristige als auch langfristige Maßnahmen.', exEn: 'Nevertheless, the government takes both short-term and long-term measures.', exHi: 'Phir bhi, sarkaar alpkaalik aur deerghkaalik dono upaay karti hai.', ex2: 'Sie ergriff sofort die Gelegenheit.', ex2En: 'She seized the opportunity immediately.', ex2Hi: 'Usne turant avsar ko pakad liya.', conj: { praesens: 'ergreift', praeteritum: 'ergriff', perfekt: 'hat ergriffen' } },
    { de: 'erhalten', pos: 'verb', level: 'B2', en: 'to receive, preserve, obtain', hi: 'प्राप्त करना, संरक्षित रखना', ex: 'Sie erhielt einen Preis für ihre Arbeit.', exEn: 'She received an award for her work.', exHi: 'Use apne kaam ke liye ek puraskaar mila.', ex2: 'Wir müssen die Natur erhalten.', ex2En: 'We must preserve nature.', ex2Hi: 'Humein prakriti ko samrakshit rakhna hoga.', conj: { praesens: 'erhält', praeteritum: 'erhielt', perfekt: 'hat erhalten' } },
    { de: 'ermutigen', pos: 'verb', level: 'B2', en: 'to encourage', hi: 'प्रोत्साहित करना', ex: 'Wir ermutigen sowohl Familien als auch Einzelpersonen, neue Fähigkeiten zu erwerben.', exEn: 'We encourage both families and individuals to acquire new skills.', exHi: 'Hum parivaaron aur vyaktiyon, dono ko nayi kaushal haasil karne ke liye protsaahit karte hain.', ex2: 'Sie ermutigte ihn, weiterzumachen.', ex2En: 'She encouraged him to continue.', ex2Hi: 'Usne use jaari rakhne ke liye protsaahit kiya.', conj: { praesens: 'ermutigt', praeteritum: 'ermutigte', perfekt: 'hat ermutigt' } },
    { de: 'erwerben', pos: 'verb', level: 'B2', en: 'to acquire', hi: 'हासिल करना', ex: 'Wir ermutigen sowohl Familien als auch Einzelpersonen, neue Fähigkeiten zu erwerben.', exEn: 'We encourage both families and individuals to acquire new skills.', exHi: 'Hum parivaaron aur vyaktiyon, dono ko nayi kaushal haasil karne ke liye protsaahit karte hain.', ex2: 'Er erwarb ein Haus in der Stadt.', ex2En: 'He acquired a house in the city.', ex2Hi: 'Usne shahar mein ek ghar haasil kiya.', conj: { praesens: 'erwirbt', praeteritum: 'erwarb', perfekt: 'hat erworben' } },
    { de: 'Erwerbstätigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'employment, gainful activity', hi: 'रोज़गार', ex: 'Die Korruption wirkt sich sowohl auf die Erwerbstätigkeit als auch auf das Bevölkerungswachstum aus.', exEn: 'Corruption affects both employment and population growth.', exHi: 'Bhrashtachaar rozgaar aur jansankhya vriddhi, dono ko prabhaavit karta hai.', ex2: 'Erwerbstätigkeit sichert den Lebensunterhalt.', ex2En: 'Employment secures the livelihood.', ex2Hi: 'Rozgaar jeevan-yaapan sunishchit karta hai.' },
    { de: 'erwischen', pos: 'verb', level: 'B2', en: 'to catch, get', hi: 'पकड़ना', ex: 'Die Polizei erwischte den Dieb.', exEn: 'The police caught the thief.', exHi: 'Police ne chor ko pakad liya.', ex2: 'Ich habe gerade noch den Zug erwischt.', ex2En: 'I just caught the train.', ex2Hi: 'Maine abhi abhi train pakad li.', conj: { praesens: 'erwischt', praeteritum: 'erwischte', perfekt: 'hat erwischt' } },
    { de: 'Familiengründung', art: 'die', gender: 'f', plural: 'Familiengründungen', pos: 'noun', level: 'B2', en: 'starting a family', hi: 'परिवार शुरू करना', ex: 'Viele Paare planen eine Familiengründung.', exEn: 'Many couples plan to start a family.', exHi: 'Kai jode parivaar shuru karne ki yojana banaate hain.', ex2: 'Die Familiengründung bringt viele Veränderungen.', ex2En: 'Starting a family brings many changes.', ex2Hi: 'Parivaar shuru karna kai badlaav laata hai.' },
    { de: 'fluchen', pos: 'verb', level: 'B2', en: 'to curse, swear', hi: 'गाली देना', ex: 'Er fluchte vor Wut.', exEn: 'He cursed out of anger.', exHi: 'Woh gusse mein gaali de raha tha.', ex2: 'Sie flucht selten.', ex2En: 'She rarely swears.', ex2Hi: 'Woh kabhi-kabhaar gaali deti hai.', conj: { praesens: 'flucht', praeteritum: 'fluchte', perfekt: 'hat geflucht' } },
    { de: 'Führungszeugnis', art: 'das', gender: 'n', plural: 'Führungszeugnisse', pos: 'noun', level: 'B2', en: 'certificate of good conduct', hi: 'चरित्र प्रमाण पत्र', ex: 'Für die Stelle brauchen Sie ein Führungszeugnis.', exEn: 'For the position you need a certificate of good conduct.', exHi: 'Is pad ke liye aapko charitra pramaan patra chaahiye.', ex2: 'Er beantragte ein Führungszeugnis.', ex2En: 'He applied for a certificate of good conduct.', ex2Hi: 'Usne charitra pramaan patra ke liye aavedan kiya.' },
    { de: 'gebürtig', pos: 'adjective', level: 'B2', en: 'native, born in', hi: 'मूल निवासी', ex: 'Sie ist gebürtige Berlinerin.', exEn: 'She is a native of Berlin.', exHi: 'Woh Berlin ki mool nivaasi hai.', ex2: 'Er ist gebürtiger Inder.', ex2En: 'He is native Indian.', ex2Hi: 'Woh mool roop se Bhaartiya hai.' },
    { de: 'gedacht', pos: 'adjective', level: 'B2', en: 'intended, meant', hi: 'इच्छित', ex: 'Das Geschenk war für dich gedacht.', exEn: 'The gift was meant for you.', exHi: 'Tohfa tumhaare liye tha.', ex2: 'Der Kurs ist für Anfänger gedacht.', ex2En: 'The course is intended for beginners.', ex2Hi: 'Course shuruaati logon ke liye hai.' },
    { de: 'Gewohnheit', art: 'die', gender: 'f', plural: 'Gewohnheiten', pos: 'noun', level: 'B2', en: 'habit', hi: 'आदत', ex: 'Das ist eine alte Gewohnheit von mir.', exEn: 'That is an old habit of mine.', exHi: 'Yeh meri purani aadat hai.', ex2: 'Gewohnheiten sind schwer zu ändern.', ex2En: 'Habits are hard to change.', ex2Hi: 'Aadatein badalna mushkil hota hai.' },
    { de: 'Grundlage', art: 'die', gender: 'f', plural: 'Grundlagen', pos: 'noun', level: 'B2', en: 'basis, foundation', hi: 'आधार', ex: 'Der Beweis zeigt sowohl die Entstehung als auch die Grundlage des Programms.', exEn: 'The evidence shows both the origin and the foundation of the programme.', exHi: 'Saboot kaaryakram ki utpatti aur aadhaar, dono dikhaata hai.', ex2: 'Vertrauen ist die Grundlage jeder Beziehung.', ex2En: 'Trust is the basis of every relationship.', ex2Hi: 'Vishvaas har rishte ka aadhaar hai.' },
    { de: 'haben', pos: 'verb', level: 'B2', en: 'to have', hi: 'रखना', ex: 'Wir haben viel zu tun.', exEn: 'We have a lot to do.', exHi: 'Humaare paas bahut kaam hai.', ex2: 'Sie hat keine Zeit.', ex2En: 'She has no time.', ex2Hi: 'Uske paas samay nahi hai.', conj: { praesens: 'hat', praeteritum: 'hatte', perfekt: 'hat gehabt' } },
    { de: 'holen', pos: 'verb', level: 'B2', en: 'to fetch, get', hi: 'लाना', ex: 'Kannst du Brot holen?', exEn: 'Can you fetch bread?', exHi: 'Kya tum roti la sakte ho?', ex2: 'Er holt seine Tochter von der Schule ab.', ex2En: 'He picks up his daughter from school.', ex2Hi: 'Woh apni beti ko school se le aata hai.', conj: { praesens: 'holt', praeteritum: 'holte', perfekt: 'hat geholt' } },
    { de: 'ideal', pos: 'adjective', level: 'B2', en: 'ideal', hi: 'आदर्श', ex: 'Das ist die ideale Lösung.', exEn: 'That is the ideal solution.', exHi: 'Yeh aadarsh samaadhaan hai.', ex2: 'Der Ort ist ideal für ein Picknick.', ex2En: 'The place is ideal for a picnic.', ex2Hi: 'Yeh jagah picnic ke liye aadarsh hai.' },
    { de: 'individuell', pos: 'adjective', level: 'B2', en: 'individual', hi: 'व्यक्तिगत', ex: 'Individuell gestaltete Programme fördern sowohl die Leistungsbereitschaft als auch das Selbstvertrauen.', exEn: 'Individually designed programmes promote both willingness to perform and self-confidence.', exHi: 'Vyaktigat roop se banaaye gaye kaaryakram, pradarshan ki ichha aur aatmavishvaas dono ko badhaava dete hain.', ex2: 'Jeder Kunde bekommt eine individuelle Beratung.', ex2En: 'Every customer receives individual consultation.', ex2Hi: 'Har graahak ko vyaktigat paraamarsh milta hai.' },
    { de: 'Infrastruktur', art: 'die', gender: 'f', plural: 'Infrastrukturen', pos: 'noun', level: 'B2', en: 'infrastructure', hi: 'बुनियादी ढांचा', ex: 'Sowohl die Infrastruktur als auch die Behandlungsmöglichkeiten müssen verbessert werden.', exEn: 'Both the infrastructure and the treatment options must be improved.', exHi: 'Buniyaadi dhaancha aur upchaar vikalp, dono ko behtar banaana hoga.', ex2: 'Die Infrastruktur des Landes ist veraltet.', ex2En: 'The country\'s infrastructure is outdated.', ex2Hi: 'Desh ka buniyaadi dhaancha puraana hai.' },
    { de: 'Kindererziehung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'child-rearing', hi: 'बाल पालन-पोषण', ex: 'Kindererziehung ist eine große Verantwortung.', exEn: 'Child-rearing is a big responsibility.', exHi: 'Baal paalan-poshan ek badi zimmedaari hai.', ex2: 'Sie liest viele Bücher über Kindererziehung.', ex2En: 'She reads many books about child-rearing.', ex2Hi: 'Woh baal paalan-poshan ke baare mein kai kitaabein padhti hai.' },
    { de: 'klauen', pos: 'verb', level: 'B2', en: 'to swipe, steal (slang)', hi: 'चुराना (बोलचाल)', ex: 'Jemand hat mein Fahrrad geklaut.', exEn: 'Someone stole my bike.', exHi: 'Kisi ne meri cycle chura li.', ex2: 'Er klaut nie etwas.', ex2En: 'He never steals anything.', ex2Hi: 'Woh kabhi kuch nahi churaata.', conj: { praesens: 'klaut', praeteritum: 'klaute', perfekt: 'hat geklaut' } },
    { de: 'Korruption', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'corruption', hi: 'भ्रष्टाचार', ex: 'Die Korruption wirkt sich sowohl auf die Erwerbstätigkeit als auch auf das Bevölkerungswachstum aus.', exEn: 'Corruption affects both employment and population growth.', exHi: 'Bhrashtachaar rozgaar aur jansankhya vriddhi, dono ko prabhaavit karta hai.', ex2: 'Korruption schadet der ganzen Gesellschaft.', ex2En: 'Corruption harms the whole society.', ex2Hi: 'Bhrashtachaar poore samaaj ko nuksaan pahunchaata hai.' },
    { de: 'Lagerhaltung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'warehousing, inventory', hi: 'गोदाम प्रबंधन', ex: 'Die Lagerhaltung wurde digitalisiert.', exEn: 'The warehousing was digitized.', exHi: 'Godaam prabandhan digital ho gaya.', ex2: 'Effiziente Lagerhaltung spart Kosten.', ex2En: 'Efficient warehousing saves costs.', ex2Hi: 'Kushal godaam prabandhan lagat bachaata hai.' },
    { de: 'Lebenslage', art: 'die', gender: 'f', plural: 'Lebenslagen', pos: 'noun', level: 'B2', en: 'life situation', hi: 'जीवन स्थिति', ex: 'Sie erfasst sowohl die Lebenslage als auch die Notlage der Familien.', exEn: 'She records both the life situation and the plight of the families.', exHi: 'Woh parivaaron ki jeevan sthiti aur sankatpurn sthiti dono darj karti hai.', ex2: 'Jede Lebenslage erfordert eine andere Lösung.', ex2En: 'Every life situation requires a different solution.', ex2Hi: 'Har jeevan sthiti ko alag samaadhaan chaahiye.' },
    { de: 'Leistungsbereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'willingness to perform', hi: 'प्रदर्शन की इच्छा', ex: 'Individuell gestaltete Programme fördern sowohl die Leistungsbereitschaft als auch das Selbstvertrauen.', exEn: 'Individually designed programmes promote both willingness to perform and self-confidence.', exHi: 'Vyaktigat roop se banaaye gaye kaaryakram, pradarshan ki ichha aur aatmavishvaas dono ko badhaava dete hain.', ex2: 'Ihre Leistungsbereitschaft beeindruckte den Chef.', ex2En: 'Her willingness to perform impressed the boss.', ex2Hi: 'Uski pradarshan ki ichha ne boss ko prabhaavit kiya.' },
    { de: 'meckern', pos: 'verb', level: 'B2', en: 'to grumble, moan', hi: 'शिकायत करना', ex: 'Manche Menschen meckern, obwohl die Agentur sowohl schnell als auch zuverlässig arbeitet.', exEn: 'Some people grumble, although the agency works both quickly and reliably.', exHi: 'Kuch log shikaayat karte hain, halaanki agency tezi aur bharosemand tarike se, dono se kaam karti hai.', ex2: 'Er meckert über alles.', ex2En: 'He grumbles about everything.', ex2Hi: 'Woh har cheez ke baare mein shikaayat karta hai.', conj: { praesens: 'meckert', praeteritum: 'meckerte', perfekt: 'hat gemeckert' } },
    { de: 'Notlage', art: 'die', gender: 'f', plural: 'Notlagen', pos: 'noun', level: 'B2', en: 'emergency, plight', hi: 'संकटपूर्ण स्थिति', ex: 'Sie erfasst sowohl die Lebenslage als auch die Notlage der Familien.', exEn: 'She records both the life situation and the plight of the families.', exHi: 'Woh parivaaron ki jeevan sthiti aur sankatpurn sthiti dono darj karti hai.', ex2: 'Die Organisation hilft Menschen in Notlagen.', ex2En: 'The organization helps people in emergencies.', ex2Hi: 'Sangathan sankatpurn sthiti mein logon ki madad karta hai.' },
    { de: 'nutzlos', pos: 'adjective', level: 'B2', en: 'useless', hi: 'बेकार', ex: 'Der alte Computer ist nutzlos geworden.', exEn: 'The old computer has become useless.', exHi: 'Puraana computer bekaar ho gaya hai.', ex2: 'Es ist nutzlos, weiter zu diskutieren.', ex2En: 'It\'s useless to keep discussing.', ex2Hi: 'Aage charcha karna bekaar hai.' },
    { de: 'obwohl', pos: 'grammar', level: 'B2', en: 'although', hi: 'हालांकि', ex: 'Manche Menschen meckern, obwohl die Agentur sowohl schnell als auch zuverlässig arbeitet.', exEn: 'Some people grumble, although the agency works both quickly and reliably.', exHi: 'Kuch log shikaayat karte hain, halaanki agency tezi aur bharosemand tarike se, dono se kaam karti hai.', ex2: 'Obwohl es spät war, arbeitete sie weiter.', ex2En: 'Although it was late, she kept working.', ex2Hi: 'Halaanki der ho gayi thi, woh kaam karti rahi.' },
    { de: 'plagen', pos: 'verb', level: 'B2', en: 'to plague, torment', hi: 'सताना', ex: 'Zweifel plagten ihn ständig.', exEn: 'Doubts constantly plagued him.', exHi: 'Shak use lagataar sataata raha.', ex2: 'Kopfschmerzen plagen sie seit Tagen.', ex2En: 'Headaches have been tormenting her for days.', ex2Hi: 'Sir dard usse kai dinon se pareshaan kar raha hai.', conj: { praesens: 'plagt', praeteritum: 'plagte', perfekt: 'hat geplagt' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "sowohl ... als auch"?',
      body: [ '"sowohl ... als auch" means "both ... and ..." It connects two equally important ideas.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span>'],
          ['<span class="de">Rohan arbeitet sowohl im Büro als auch im Homeoffice.</span>']
        ]
      },
      hinglish: '"sowohl ... als auch" ka matlab hai "dono \u2014 yeh bhi aur woh bhi". Yeh do cheezon ko jodta hai aur dono ko barabar important dikhata hai.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Pattern seedha hai: <b>sowohl</b> ke baad pehli cheez, phir <b>als auch</b>, phir doosri cheez. Dono hisse jodi mein aate hain \u2014 ek ke bina doosra adhoora hai.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich mag sowohl Kaffee als auch Tee.</span>'],
          ['<span class="de">Die Firma verkauft sowohl Computer als auch Smartphones.</span>'],
          ['<span class="de">Anna besucht sowohl Berlin als auch München.</span>']
        ]
      },
      hinglish: 'Pattern seedha hai: <b>sowohl</b> ke baad pehli cheez, phir <b>als auch</b>, phir doosri cheez. Dono hisse jodi mein aate hain \u2014 ek ke bina doosra adhoora hai.'
    },
    {
      title: 'Was kann es verbinden?',
      body: [ '"sowohl ... als auch" can connect people, nouns, verbs, adjectives, or prepositional phrases.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['People', 'sowohl Anna als auch Rohan'],
          ['Nouns', 'sowohl Kaffee als auch Tee'],
          ['Verbs', 'sowohl lesen als auch schreiben'],
          ['Adjectives', 'sowohl freundlich als auch hilfsbereit'],
          ['Prepositional phrases', 'sowohl im Büro als auch zu Hause']
        ]
      },
      hinglish: 'Isse tum kai tarah ki cheezein jod sakte ho \u2014 log, nouns, verbs, adjectives, ya poore prepositional phrases. Bas dono taraf ek hi tarah ka element aana chahiye.'
    },
    {
      title: '"sowohl ... als auch" vs "und"',
      body: [ '"sowohl ... als auch" gives stronger emphasis than the neutral "und".' ],
      table: {
        head: ['und (neutral)', 'sowohl ... als auch (emphasis)'],
        rows: [
          ['<span class="de">Anna spricht Deutsch und Englisch.</span>', '<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span> (emphasizes BOTH)']
        ]
      },
      hinglish: '<b>und</b> seedha jod deta hai, bas. <b>sowohl ... als auch</b> mein zor aata hai \u2014 matlab "dono hi", aur yahi writing mein zyada strong lagta hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show sowohl...als auch in business and education contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das Unternehmen investiert sowohl in Forschung als auch in Innovation.</span>'],
          ['<span class="de">Viele Studenten lernen sowohl online als auch vor Ort.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki yeh structure asli mein kahan aata hai \u2014 business reports aur education wale texts mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"sowohl ... als auch" is common in reports, presentations, newspaper articles, academic writing, and workplace communication. It makes writing more varied and professional.' ]
    },
    {
      title: 'Wortstellung',
      body: [ 'The finite verb still follows normal German word order (V2), even when "sowohl" starts the sentence.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Sowohl Anna als auch Rohan kommen heute.</span>'],
          ['<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span>']
        ]
      },
      hinglish: 'Word order par koi asar nahi padta \u2014 verb apni normal doosri position par hi rehta hai, chahe sentence <b>sowohl</b> se shuru ho. Aur do cheezein jud rahi hain, isliye verb plural aata hai: <span class="de">Sowohl Anna als auch Rohan kommen</span>.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from mixing "sowohl" with "und", dropping "als", or misplacing the connector.' ],
      mistakes: [
        { wrong: 'Sowohl Svenja und Timo kommen.', right: 'Sowohl Svenja als auch Timo kommen.', why: '"sowohl" is always completed by "als auch" \u2014 it cannot be paired with "und".' },
        { wrong: 'Sie lernt sowohl Deutsch und Englisch.', right: 'Sie lernt sowohl Deutsch als auch Englisch.', why: 'Same rule inside a full sentence: the second half must be "als auch", not "und".' },
        { wrong: 'Anna spricht sowohl Deutsch auch Englisch.', right: 'Anna spricht sowohl Deutsch als auch Englisch.', why: '"als" cannot be dropped — the full phrase is "als auch", not just "auch".' },
        { wrong: 'Sowohl ich mag Kaffee als auch Tee.', right: 'Ich mag sowohl Kaffee als auch Tee.', why: '"sowohl" should directly precede the first connected element, not the subject/verb of the whole sentence.' },
        { wrong: 'Sowohl Anna als Rohan kommen.', right: 'Sowohl Anna als auch Rohan kommen.', why: '"auch" cannot be dropped — the fixed phrase is "als auch", not just "als".' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 <b>als auch</b> ki jagah <b>und</b> laga dena, <b>als</b> ya <b>auch</b> mein se ek chhod dena, ya <b>sowohl</b> ko galat jagah rakhna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"sowohl ... als auch" appears frequently in Goethe B2 writing to add stylistic variety and emphasis.' ],
      note: 'Memory trick: sowohl = first element, als auch = second element, both equally important. Need to connect TWO equally important ideas with emphasis? Use sowohl...als auch. Need only a simple connection? Use und.',
      hinglish: 'Goethe B2 ki writing mein yeh structure kaam aata hai, kyunki isse variety aati hai aur baat mein zor bhi lag jaata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Zeitungsartikel: Familie und Beruf unter einen Hut bringen',
    titleEn: 'Newspaper article: balancing family and career',
    tokens: [
      { w: 'Immer', role: 'plain', en: 'ever', hi: 'हमेशा', type: 'Adverb' },
      { w: 'mehr', role: 'plain', en: 'more', hi: 'अधिक', type: 'Adjective' },
      { w: 'Eltern', role: 'plain', en: 'parents', hi: 'माता-पिता', type: 'Noun · plural' },
      { w: 'wollen', role: 'plain', en: 'want', hi: 'चाहते हैं', type: 'Verb · wollen' },
      { w: 'sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konjunktion · sowohl … als auch', why: 'sowohl … als auch = both … and: connects two equally important elements (this chapter).' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Erwerbstätigkeit', role: 'plain', en: 'employment', hi: 'रोज़गार', type: 'Noun · fem.', why: 'die Erwerbstätigkeit (this chapter).' },
      { w: 'als', role: 'r-connector', en: 'as', hi: 'साथ ही', type: 'Konjunktion · als auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: '', type: 'Konjunktion · als auch' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Kindererziehung', role: 'plain', en: 'child-rearing (Satzende)', hi: 'बच्चों का पालन-पोषण (Satzende)', type: 'Noun · fem.', why: 'die Kindererziehung (this chapter).' },
      { w: 'aktiv', role: 'plain', en: 'actively', hi: 'सक्रिय रूप से', type: 'Adjective' },
      { w: 'gestalten', role: 'plain', en: 'shape (Satzende)', hi: 'आकार देना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Unternehmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'reagieren', role: 'plain', en: 'react', hi: 'प्रतिक्रिया देती हैं', type: 'Verb · reagieren' },
      { w: 'darauf', role: 'plain', en: 'to this', hi: 'इस पर', type: 'Pronominaladverb' },
      { w: ',', plain: true },
      { w: 'indem', role: 'plain', en: 'by', hi: 'द्वारा', type: 'Modalkonjunktion · indem (recycled)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konjunktion · sowohl … als auch' },
      { w: 'flexible', role: 'plain', en: 'flexible', hi: 'लचीले', type: 'Adjective' },
      { w: 'Arbeitszeiten', role: 'plain', en: 'working hours', hi: 'कार्य समय', type: 'Noun · plural' },
      { w: 'als', role: 'r-connector', en: 'as', hi: 'साथ ही', type: 'Konjunktion · als auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: '', type: 'Konjunktion · als auch' },
      { w: 'Betreuungsplätze', role: 'plain', en: 'childcare spots (Satzende)', hi: 'देखभाल स्थान (Satzende)', type: 'Noun · plural' },
      { w: 'anbieten', role: 'plain', en: 'offer (Satzende)', hi: 'प्रदान करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Familiengründung', role: 'plain', en: 'family founding', hi: 'परिवार स्थापना', type: 'Noun · fem.', why: 'die Familiengründung (this chapter).' },
      { w: 'spielt', role: 'plain', en: 'plays', hi: 'भूमिका निभाती है', type: 'Verb · spielen' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Balance', role: 'plain', en: 'balance (Satzende)', hi: 'संतुलन (Satzende)', type: 'Noun · fem.' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'zentrale', role: 'plain', en: 'central', hi: 'केंद्रीय', type: 'Adjective' },
      { w: 'Rolle', role: 'plain', en: 'role (Satzende)', hi: 'भूमिका (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konjunktion · sowohl … als auch (Satzanfang)' },
      { w: 'Mütter', role: 'plain', en: 'mothers', hi: 'माताएँ', type: 'Noun · plural' },
      { w: 'als', role: 'r-connector', en: 'as', hi: 'साथ ही', type: 'Konjunktion · als auch' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: '', type: 'Konjunktion · als auch' },
      { w: 'Väter', role: 'plain', en: 'fathers (Satzende)', hi: 'पिता (Satzende)', type: 'Noun · plural' },
      { w: 'wünschen', role: 'plain', en: 'wish', hi: 'चाहते हैं', type: 'Verb · wünschen' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद के लिए', type: 'Reflexivpronomen' },
      { w: 'deshalb', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'saubereres', role: 'plain', en: 'cleaner', hi: 'साफ़-सुथरा', type: 'Adjective · Komparativ' },
      { w: 'Führungszeugnis', role: 'plain', en: 'certificate of good conduct (metaphorically: track record) (Satzende)', hi: 'चरित्र प्रमाणपत्र (Satzende)', type: 'Noun · neut.', why: 'das Führungszeugnis (this chapter).' },
      { w: 'ihrer', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel · Genitiv' },
      { w: 'Arbeitgeber', role: 'plain', en: 'employers\' (Satzende)', hi: 'नियोक्ताओं का (Satzende)', type: 'Noun · plural' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'Sachen', role: 'plain', en: 'matters of', hi: 'मामलों में', type: 'Noun · plural' },
      { w: 'Ausgrenzung', role: 'plain', en: 'exclusion (Satzende)', hi: 'बहिष्करण (Satzende)', type: 'Noun · fem.', why: 'die Ausgrenzung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konjunktion · sowohl … als auch', why: 'sowohl … als auch: two equal things connected (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'großen', role: 'plain', en: 'large', hi: 'बड़े', type: 'Adjective' },
      { w: 'Konzernen', role: 'plain', en: 'corporations', hi: 'निगमों', type: 'Noun · plural' },
      { w: 'als', role: 'r-connector', en: 'as', hi: 'जैसे', type: 'Konjunktion' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konjunktion' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'kleinen', role: 'plain', en: 'small', hi: 'छोटे', type: 'Adjective' },
      { w: 'Betrieben', role: 'plain', en: 'businesses', hi: 'व्यवसायों', type: 'Noun · plural' },
      { w: 'wächst', role: 'plain', en: 'is growing', hi: 'बढ़ रहा है', type: 'Verb · wachsen' },
      { w: 'inzwischen', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Bewusstsein', role: 'plain', en: 'awareness (Satzende)', hi: 'जागरूकता (Satzende)', type: 'Noun · neut.' },
      { w: 'dafür', role: 'plain', en: 'for this (Satzende)', hi: 'इसके लिए (Satzende)', type: 'Pronominaladverb' },
      { w: '.', plain: true }
    ],
    translation: 'More and more parents want to actively shape both their employment and their child-rearing. Companies react to this by offering both flexible working hours and childcare spots. Even when founding a family, this balance plays a central role. Both mothers and fathers therefore wish for a cleaner record from their employers when it comes to matters of exclusion. Awareness of this is meanwhile growing both in large corporations and in small businesses.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_021_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Svenja, wie geht es der Familie, die wir letzte Woche besucht haben?', en: 'Svenja, how is the family we visited last week doing?' },
      { id: 'B2_021_L002', speaker: 'Svenja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Schwierig. Sie sind sowohl finanziell als auch sozial ziemlich isoliert.', en: 'It\'s difficult. They\'re quite isolated both financially and socially.' },
      { id: 'B2_021_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was können wir ihnen anbieten?', en: 'What can we offer them?' },
      { id: 'B2_021_L004', speaker: 'Svenja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sowohl finanzielle Hilfe als auch eine feste Beratungsstelle — beides zusammen wirkt am besten.', en: 'Both financial help and a fixed counseling office — both together work best.' }
    ],
    transcript: 'Svenja, wie geht es der Familie, die wir letzte Woche besucht haben? Schwierig. Sie sind sowohl finanziell als auch sozial ziemlich isoliert. Was können wir ihnen anbieten? Sowohl finanzielle Hilfe als auch eine feste Beratungsstelle — beides zusammen wirkt am besten.',
    translation: 'Svenja, how is the family we visited last week doing? It\'s difficult. They\'re quite isolated both financially and socially. What can we offer them? Both financial help and a fixed counseling office — both together work best.',
    tokens: [
      { w: 'Svenja' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'geht' },
      { w: 'es' },
      { w: 'der' },
      { w: 'Familie' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'wir' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'besucht' },
      { w: 'haben' },
      { w: '?', plain: true },
      { w: 'Schwierig' },
      { w: '.', plain: true },
      { w: 'Sie' },
      { w: 'sind' },
      { w: 'sowohl' },
      { w: 'finanziell' },
      { w: 'als' },
      { w: 'auch' },
      { w: 'sozial' },
      { w: 'ziemlich' },
      { w: 'isoliert' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'können' },
      { w: 'wir' },
      { w: 'ihnen' },
      { w: 'anbieten' },
      { w: '?', plain: true },
      { w: 'Sowohl' },
      { w: 'finanzielle' },
      { w: 'Hilfe' },
      { w: 'als' },
      { w: 'auch' },
      { w: 'eine' },
      { w: 'feste' },
      { w: 'Beratungsstelle' },
      { w: '—', plain: true },
      { w: 'beides' },
      { w: 'zusammen' },
      { w: 'wirkt' },
      { w: 'am' },
      { w: 'besten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie ist die Familie isoliert?', qEn: 'How is the family isolated?', options: ['nur finanziell', 'nur sozial', 'sowohl finanziell als auch sozial', 'gar nicht'], optionsEn: ['only financially', 'only socially', 'both financially and socially', 'not at all'], answer: 2,
        explain: '"Sie sind sowohl finanziell als auch sozial ziemlich isoliert."' },
      { q: 'Was funktioniert laut Svenja am besten?', qEn: 'What works best according to Svenja?', options: ['nur Geld', 'nur Beratung', 'beides zusammen', 'keine Hilfe'], optionsEn: ['only money', 'only advice', 'both together', 'no help'], answer: 2,
        explain: '"… beides zusammen wirkt am besten."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, wie es der Familie geht, die ihr besucht habt.", taskEn: "A friend asks how the family you visited is doing.", de: "Sie sind sowohl finanziell als auch sozial ziemlich isoliert.", en: "They're rather isolated both financially and socially." },
    { task: "Er fragt, was man tun könnte.", taskEn: "He asks what could be done.", de: "Wir brauchen sowohl eine Beratungsagentur als auch praktische Hilfe.", en: "We need both an advice service and practical help." },
    { task: "Deine Chefin fragt nach deinen Stärken.", taskEn: "Your boss asks about your strengths.", de: "Ich kann sowohl beraten als auch organisieren.", en: "I can both advise and organise." },
    { task: "Eine Kollegin fragt, wer benachteiligt ist.", taskEn: "A colleague asks who is disadvantaged.", de: "Sowohl bedürftige Familien als auch alleinstehende Ältere.", en: "Both families in need and single older people." },
    { task: "Ein Bekannter fragt nach den Behandlungsmöglichkeiten.", taskEn: "An acquaintance asks about the treatment options.", de: "Es gibt sowohl eine ambulante als auch eine stationäre Möglichkeit.", en: "There's both an outpatient and an inpatient option." },
    { task: "Rollenspiel: Ihr stellt euer Hilfsprojekt vor.", taskEn: "Role-play: you present your aid project.", de: "Wir bieten sowohl Beratung als auch Kleidung. — Und wir brauchen sowohl Geld als auch Helfer.", en: "We offer both advice and clothing. — And we need both money and helpers." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short company profile or opinion text (six to eight sentences) about a topic of your choice — using "sowohl ... als auch" at least three times, connecting different types of elements (people, nouns, verbs, or prepositional phrases).',
    starters: ['… hilft sowohl … als auch …', 'Sowohl … als auch … müssen …'],
    placeholder: 'Die Beratungsagentur hilft sowohl Bedürftigen als auch Benachteiligten …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "sowohl ... als auch" correctly?',
      options: ['Anna spricht sowohl Deutsch als auch Englisch.', 'Anna spricht sowohl Deutsch und Englisch.', 'Anna spricht sowohl Deutsch auch Englisch.'],
      answer: 0,
      explain: '"sowohl" must be paired with the full phrase "als auch" — never "und" or just "auch".'
    },
    gap: {
      sentence: ['Die Firma verkauft sowohl Computer ', ' Smartphones.'],
      gaps: [ { answer: 'als auch', accepts: ['als auch'] } ],
      explain: '"als auch" is the fixed second half of the connector.'
    },
    match: {
      q: 'Match each connector to its emphasis level.',
      pairs: [
        { noun: 'und', art: 'neutral' },
        { noun: 'sowohl ... als auch', art: 'emphasizes both' }
      ]
    },
    builder: {
      target: 'Build: "Anna visits both Berlin and Munich."',
      bank: ['Anna', 'besucht', 'sowohl', 'Berlin', 'als', 'auch', 'München', '.'],
      answer: ['Anna', 'besucht', 'sowohl', 'Berlin', 'als', 'auch', 'München', '.'],
      roles: { 'sowohl': 'r-sowohl', 'als': 'r-sowohl', 'auch': 'r-sowohl' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Sowohl Svenja und Timo kommen.',
      right: 'Sowohl Anna als auch Rohan kommen.',
      explain: '"sowohl" must be paired with "als auch" — never combine it with "und".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "sowohl ... als auch" mean?', options: ['both ... and ...', 'either ... or ...', 'neither ... nor ...'], answer: 0,
      explain: '"sowohl ... als auch" means "both ... and ..." — emphasizing that both elements are true.' },
    { q: 'Which sentence is correct?', options: ['Sowohl Anna als auch Rohan kommen.', 'Sowohl Svenja und Timo kommen.', 'Sowohl Anna als Rohan kommen.'], answer: 0,
      explain: 'The full, correct phrase is "sowohl ... als auch" — never shortened or combined with "und".' },
    { q: 'Which is stronger emphasis?', options: ['sowohl ... als auch', 'und', 'Both equally strong'], answer: 0,
      explain: '"sowohl ... als auch" emphasizes both elements more strongly than the neutral "und".' },
    { q: 'What can "sowohl ... als auch" connect?', options: ['People, nouns, verbs, adjectives, prepositional phrases', 'Only nouns', 'Only verbs'], answer: 0,
      explain: 'It can connect many different grammatical elements, as long as they are parallel.' },
    { q: 'Which sentence contains an error?', options: ['Ich mag sowohl Kaffee als auch Tee.', 'Anna spricht sowohl Deutsch auch Englisch.', 'Die Firma verkauft sowohl Computer als auch Smartphones.'], answer: 1,
      explain: '"als" cannot be dropped — the correct phrase is "als auch", not just "auch".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-sowohl', html: '"sowohl ... als auch" means "both ... and ..." — it emphasizes that BOTH elements are equally true, more strongly than plain "und".' },
    { c: 'r-sowohl', html: 'It can connect people, nouns, verbs, adjectives, or prepositional phrases — as long as the two elements are grammatically parallel.' },
    { c: 'r-sowohl', html: '"als auch" is a fixed phrase — never drop "als" or "auch", and never combine "sowohl" with "und".' }
  ],
  revisionTips: [
    'Practise rewriting neutral "und" sentences with "sowohl ... als auch" to add emphasis and stylistic variety.',
    'Always check that both connected elements are grammatically parallel (both nouns, both verbs, etc.).',
    'Use "sowohl ... als auch" in formal writing (reports, presentations) to sound more professional and expressive.'
  ]
};

window.CHAPTER = CHAPTER;
