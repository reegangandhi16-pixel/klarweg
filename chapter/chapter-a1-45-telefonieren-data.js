/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 45
   "Telefonieren & Nachfragen"  (phone calls & asking again)
   Vocabulary source: uploaded chapter-45 word list (34 words).
   Theme = a phone call about the missed class. Recycles Ch1–44.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-45-telefonieren',
  phase: 'A1 · Phase 5',
  number: 45,
  title: 'Telefonieren & Nachfragen',
  titleEn: 'Phone Calls',
  description: 'On the phone you can\u2019t see lips or gestures, so two skills matter most: opening a call politely (Hallo, hier ist \u2026 / Spreche ich mit \u2026?) and asking people to repeat (Wie bitte? / Kannst du das wiederholen? / langsamer, bitte). Plus the tech words for a video lesson.',
  xp: 170,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 46, title: 'Zeitangaben mit Dativ', titleEn: 'Time Expressions' , href: 'chapter-a1-46-zeitangaben.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Still sick, Ben misses class and phones Solveig to get the homework. The line is bad, she talks too fast, and half the call is him asking her to repeat, spell and slow down — exactly the phrases you need on a real German phone call.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the opening lines and the "say it again" phrases'
    ],
    scene: 'Ein Anruf \u2014 Ben ruft Solveig an, Berlin',
    femaleSpeakers: ['Solveig'],
    dialogue: [
      { speaker: 'Solveig', tokens: [
        { w: 'Hallo', role: 'r-subject', en: 'hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting' },
        { w: '?', plain: true },
        { w: 'Wie', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vee', type: 'Question word' },
        { w: 'bitte', role: 'r-adverb', en: 'sorry', hi: 'माफ़ करें', pron: 'BI-tuh', type: 'Fixed phrase', why: '"Wie bitte?" = sorry, could you repeat that? (this chapter).', ex: 'Wie bitte?', exEn: 'Sorry, what?' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझ पा रही हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'Hello? Sorry, what? I cannot understand you.', hi: 'Namaste? Maaf karein? Main tumhe samajh nahi paa rahi.' },
      { speaker: 'Ben', side: 'right', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Netz', role: 'r-subject', en: 'network', hi: 'नेटवर्क', pron: 'nets', type: 'Noun · neut.', why: 'das Netz (this chapter).', ex: 'Mein Netz ist schlecht.', exEn: 'My network is bad.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'schlecht', role: 'r-adjective', en: 'bad', hi: 'ख़राब', pron: 'SHLEKHT', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'My network is bad here.', hi: 'Yahaan mera network kharaab hai.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'WLAN', role: 'r-akkusativ', en: 'WiFi', hi: 'वाईफ़ाई', pron: 'VAY-lahn', type: 'Noun · neut.', why: 'das WLAN (this chapter).', ex: 'Hast du WLAN?', exEn: 'Do you have WiFi?' },
        { w: '?', plain: true }
      ], en: 'Do you not have WiFi?', hi: 'Kya tumhaare paas WiFi nahi hai?' },
      { speaker: 'Ben', side: 'right', tokens: [
        { w: 'Doch', role: 'r-adverb', en: 'yes I do', hi: 'हाँ है', pron: 'dokh', type: 'Reaction', why: 'doch = yes (contradicting a negative), this chapter.', ex: 'Doch, ich habe WLAN.', exEn: 'Yes, I do have WiFi.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Akku', role: 'r-subject', en: 'battery', hi: 'बैटरी', pron: 'A-koo', type: 'Noun · masc.', why: 'der Akku (this chapter).', ex: 'Mein Akku ist fast leer.', exEn: 'My battery is almost empty.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'fast', role: 'r-adverb', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: 'leer', role: 'r-adjective', en: 'empty', hi: 'ख़ाली', pron: 'lair', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes I do, but my battery is almost empty.', hi: 'Haan hai, par meri battery lagbhag khatam hai.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकते हो', pron: 'kanst', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'später', role: 'r-time', en: 'later', hi: 'बाद में', pron: 'SHPAY-ter', type: 'Adverb · time' },
        { w: 'noch', role: 'r-adverb', en: 'once', hi: 'फिर', pron: 'nokh', type: 'Adverb' },
        { w: 'mal', role: 'r-adverb', en: 'more', hi: 'से', pron: 'mahl', type: 'Adverb · particle' },
        { w: 'anrufen', role: 'r-verb', en: 'call', hi: 'फ़ोन करना', pron: 'AN-roo-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Oh! Can you call me once more later?', hi: 'Oh! Kya tum baad mein mujhe phir call kar sakte ho?' },
      { speaker: 'Ben', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'करूंगा', pron: 'ROO-fuh', type: 'Verb · anrufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'einer', role: 'r-dativ', en: 'an (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Stunde', role: 'r-dativ', en: 'hour', hi: 'घंटे', pron: 'SHTUN-duh', type: 'Noun · fem. dat.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, I will call you in an hour.', hi: 'Haan, main ek ghante mein tumhe call karunga.' },
      { speaker: 'Solveig', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Lade', role: 'r-verb', en: 'charge', hi: 'चार्ज करो', pron: 'LAH-duh', type: 'Verb · laden (imperative)', why: 'laden = to charge (this chapter).', ex: 'Lade dein Handy!', exEn: 'Charge your phone!' },
        { w: 'dein', role: 'r-akkusativ', en: 'your (neut.)', hi: 'अपना', pron: 'dine', type: 'Possessive' },
        { w: 'Handy', role: 'r-akkusativ', en: 'phone', hi: 'फ़ोन', pron: 'HEN-dee', type: 'Noun · neut.' },
        { w: '!', plain: true }
      ], en: 'Good! Charge your phone!', hi: 'Achha! Apna phone charge karo!' },
      { speaker: 'Ben', side: 'right', tokens: [
        { w: 'Mache', role: 'r-verb', en: 'will do', hi: 'करता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: '.', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'gleich', role: 'r-time', en: 'shortly', hi: 'जल्द', pron: 'glykh', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'Will do. See you shortly!', hi: 'Karta hoon. Jald milte hain!' },
      { speaker: 'Solveig', tokens: [
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'gleich', role: 'r-time', en: 'shortly', hi: 'जल्द', pron: 'glykh', type: 'Adverb · time' },
        { w: '!', plain: true }
      ], en: 'See you shortly!', hi: 'Jald milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A phone call has a fixed frame. You <strong>open</strong> it \u2014 <span class="de">Hallo, hier ist \u2026</span> / <span class="de">Spreche ich mit \u2026?</span> \u2014 and you <strong>close</strong> it with <span class="de">Auf Wiederhören!</span> In between, when you miss something, a handful of phrases save the day: <span class="de">Wie bitte? \u00b7 Kannst du das wiederholen? \u00b7 Kannst du langsamer sprechen? \u00b7 Ist das richtig?</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is PHONE CALLS & ASKING FOR CLARIFICATION (Telefonieren & Nachfragen): opening/closing a call and asking someone to repeat, spell or slow down. ' +
    'The learner wrote a short phone dialogue or clarification questions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Phone opening: "Hallo, hier ist [name]." / "Guten Tag, [name] am Apparat." / "Spreche ich mit [name]?". Phone closing: "Auf Wiederhören!" (NOT "Auf Wiedersehen" on the phone). Face-to-face uses Auf Wiedersehen.\n' +
    '- Clarification: "Wie bitte?", "Noch (ein)mal, bitte.", "Kannst du / Können Sie das wiederholen?", "Kannst du das buchstabieren?", "Kannst du langsamer sprechen?", "Ich habe das nicht verstanden.", "Ist das richtig?".\n' +
    '- "Wie bitte?" = pardon? (asking to repeat). Do not confuse with "Bitte" (please/you\u2019re welcome).\n' +
    '- Polite requests use können + infinitive at the end: "Können Sie das wiederholen?".\n' +
    '- verstehen → Perfekt: "Ich habe das nicht verstanden" (no ge-: verstanden). wiederholen takes no ge- either (wiederholt).\n' +
    '- Tech words: das WLAN, der Akku, das Netz (reception), die App, die Sprachnachricht, schicken, melden (sich).\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Phone check:</b> one sentence on whether the opening/closing and a clarification phrase were used correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — you can open, clarify and close a call. On to <span class="de">Zeitangaben mit Dativ</span>.',
    mid: 'Good. Re-read the clarification-phrases card once, then continue.',
    low: 'Worth another pass — memorise the opening/closing lines and "Wie bitte? / wiederholen", then retake.'
  },

  parserSentence: [
    { w: 'Kannst', role: 'r-modalverb' }, { w: 'du', role: 'r-subject' },
    { w: 'das', role: 'r-akkusativ' }, { w: 'wiederholen', role: 'r-verb' },
    { w: '?', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the frame of a call: open, clarify, close.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Sick Solveig phones Solveig for the homework on a bad line \u2014 clarification phrases everywhere.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the phone and tech words: Anruf, Netz, Akku, WLAN, Sprachnachricht and more.' },
    { id: 'grammar',    label: 'Phone & clarifying', tag: 'core',
      objective: 'Master opening and closing a call and the "say it again" phrases.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a phone-call text and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a phone call and catch the details, then answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Open a call, ask someone to repeat, confirm, and close politely.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short phone dialogue and a few clarification questions.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill phone phrases and clarification requests with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The phone & tech words and clarification phrases with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Phone-phrase matching, clarification practice, a roleplay script, and a dialogue-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Opening/closing a call, the clarification phrases, Auf Wiederhören vs Auf Wiedersehen, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hallo, hier ist …', text: 'Open a phone call' },
    { de: 'Wie bitte?', text: 'Ask someone to repeat' },
    { de: 'langsamer, bitte', text: 'Ask someone to slow down' },
    { de: 'Ist das richtig?', text: 'Confirm information' },
    { de: 'Auf Wiederhören!', text: 'End a call politely' }
  ],

  // ---------- Vocabulary (34 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'auf Wiederhören', pos: 'phrase', en: 'goodbye (on the phone)', hi: 'अलविदा (फ़ोन पर)', ex: 'Auf Wiederhören!', exEn: 'Goodbye!' },
    { de: 'Anruf', art: 'der', gender: 'm', plural: 'Anrufe', pos: 'noun', en: 'phone call', hi: 'फ़ोन कॉल', ex: 'Danke für den Anruf!', exEn: 'Thanks for the call!' },
    { de: 'telefonieren', pos: 'verb', en: 'to telephone', hi: 'फ़ोन करना', ex: 'Ich telefoniere mit Anna.', exEn: 'I\u2019m on the phone with Anna.', conj: { praesens: 'telefoniert', praeteritum: 'telefonierte', perfekt: 'hat telefoniert' } },
    { de: 'verbinden', pos: 'verb', en: 'to connect, put through', hi: 'जोड़ना', ex: 'Ich verbinde Sie.', exEn: 'I\u2019ll put you through.', conj: { praesens: 'verbindet', praeteritum: 'verband', perfekt: 'hat verbunden' } },
    { de: 'wie bitte', pos: 'phrase', en: 'pardon?, sorry?', hi: 'क्या? फिर से?', ex: 'Wie bitte? Noch einmal.', exEn: 'Pardon? Once more.' },
    // ===== Active Support =====
    { de: 'ausdrucken', pos: 'verb', en: 'to print out', hi: 'प्रिंट निकालना', ex: 'Ich drucke das Dokument aus.', exEn: 'I print out the document.', conj: { praesens: 'druckt aus', praeteritum: 'druckte aus', perfekt: 'hat ausgedruckt' } },
    { de: 'besetzt', pos: 'adjective', en: 'busy, engaged', hi: 'व्यस्त', ex: 'Die Leitung ist besetzt.', exEn: 'The line is busy.' },
    { de: 'Internet', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'internet', hi: 'इंटरनेट', ex: 'Das Internet ist langsam.', exEn: 'The internet is slow.' },
    { de: 'Netz', art: 'das', gender: 'n', plural: 'Netze', pos: 'noun', en: 'reception, network', hi: 'नेटवर्क', ex: 'Das Netz ist schlecht.', exEn: 'The reception is bad.' },
    { de: 'Passwort', art: 'das', gender: 'n', plural: 'Passwörter', pos: 'noun', en: 'password', hi: 'पासवर्ड', ex: 'Wie ist das Passwort?', exEn: 'What\u2019s the password?' },
    { de: 'Telefongespräch', art: 'das', gender: 'n', plural: 'Telefongespräche', pos: 'noun', en: 'phone conversation', hi: 'फ़ोन वार्तालाप', ex: 'Das Telefongespräch war kurz.', exEn: 'The phone conversation was short.' },
    { de: 'WLAN', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'Wi-Fi', hi: 'वाई-फ़ाई', ex: 'Hast du WLAN?', exEn: 'Do you have Wi-Fi?' },
    { de: 'Akku', art: 'der', gender: 'm', plural: 'Akkus', pos: 'noun', en: 'battery', hi: 'बैटरी', ex: 'Mein Akku ist leer.', exEn: 'My battery is empty.' },
    { de: 'Laptop', art: 'der', gender: 'm', plural: 'Laptops', pos: 'noun', en: 'laptop', hi: 'लैपटॉप', ex: 'Der Laptop ist neu.', exEn: 'The laptop is new.' },
    { de: 'App', art: 'die', gender: 'f', plural: 'Apps', pos: 'noun', en: 'app', hi: 'ऐप', ex: 'Ich schicke es über die App.', exEn: 'I\u2019ll send it via the app.' },
    { de: 'Sprachnachricht', art: 'die', gender: 'f', plural: 'Sprachnachrichten', pos: 'noun', en: 'voice message', hi: 'वॉइस मैसेज', ex: 'Schick mir eine Sprachnachricht!', exEn: 'Send me a voice message!' },
    { de: 'melden (sich)', pos: 'verb', en: 'to answer (the phone)', hi: 'फ़ोन उठाना', ex: 'Niemand meldet sich.', exEn: 'Nobody is answering.', conj: { praesens: 'meldet sich', praeteritum: 'meldete sich', perfekt: 'hat sich gemeldet' } },
    { de: 'nachfragen', pos: 'verb', en: 'to ask (again), check', hi: 'पूछना', ex: 'Ich frage noch einmal nach.', exEn: 'I\u2019ll ask again.', conj: { praesens: 'fragt nach', praeteritum: 'fragte nach', perfekt: 'hat nachgefragt' } },
    { de: 'noch mal', pos: 'phrase', en: 'again, once more', hi: 'फिर से', ex: 'Sag das noch mal, bitte.', exEn: 'Say that again, please.' },
    { de: 'schicken', pos: 'verb', en: 'to send', hi: 'भेजना', ex: 'Ich schicke dir die Datei.', exEn: 'I\u2019ll send you the file.', conj: { praesens: 'schickt', praeteritum: 'schickte', perfekt: 'hat geschickt' } },
    { de: 'wiederholen', pos: 'verb', en: 'to repeat', hi: 'दोहराना', ex: 'Kannst du das wiederholen?', exEn: 'Can you repeat that?', conj: { praesens: 'wiederholt', praeteritum: 'wiederholte', perfekt: 'hat wiederholt' } },
    // ===== Passive =====
    { de: 'Computerproblem', art: 'das', gender: 'n', plural: 'Computerprobleme', pos: 'noun', en: 'computer problem', hi: 'कंप्यूटर समस्या', ex: 'Ich habe ein Computerproblem.', exEn: 'I have a computer problem.' },
    { de: 'Anschluss', art: 'der', gender: 'm', plural: 'Anschlüsse', pos: 'noun', en: 'connection (line)', hi: 'कनेक्शन', ex: 'Kein Anschluss unter dieser Nummer.', exEn: 'No connection at this number.' },
    { de: 'Drucker', art: 'der', gender: 'm', plural: 'Drucker', pos: 'noun', en: 'printer', hi: 'प्रिंटर', ex: 'Der Drucker ist kaputt.', exEn: 'The printer is broken.' },
    { de: 'Handy-Akku', art: 'der', gender: 'm', plural: 'Handy-Akkus', pos: 'noun', en: 'phone battery', hi: 'मोबाइल बैटरी', ex: 'Der Handy-Akku ist leer.', exEn: 'The phone battery is empty.' },
    { de: 'Datei', art: 'die', gender: 'f', plural: 'Dateien', pos: 'noun', en: 'file', hi: 'फ़ाइल', ex: 'Ich öffne die Datei.', exEn: 'I open the file.' },
    { de: 'Durchwahl', art: 'die', gender: 'f', plural: 'Durchwahlen', pos: 'noun', en: 'extension (number)', hi: 'एक्सटेंशन', ex: 'Wie ist die Durchwahl?', exEn: 'What\u2019s the extension?' },
    { de: 'Fitness-App', art: 'die', gender: 'f', plural: 'Fitness-Apps', pos: 'noun', en: 'fitness app', hi: 'फ़िटनेस ऐप', ex: 'Ich nutze eine Fitness-App.', exEn: 'I use a fitness app.' },
    { de: 'drucken', pos: 'verb', en: 'to print', hi: 'प्रिंट करना', ex: 'Ich drucke das Foto.', exEn: 'I print the photo.', conj: { praesens: 'druckt', praeteritum: 'druckte', perfekt: 'hat gedruckt' } },
    { de: 'eingeben', pos: 'verb', en: 'to enter, input', hi: 'दर्ज करना', ex: 'Gib das Passwort ein!', exEn: 'Enter the password!', conj: { praesens: 'gibt ein', praeteritum: 'gab ein', perfekt: 'hat eingegeben' } },
    { de: 'hochfahren', pos: 'verb', en: 'to boot up', hi: 'चालू करना', ex: 'Der Laptop fährt hoch.', exEn: 'The laptop is booting up.', conj: { praesens: 'fährt hoch', praeteritum: 'fuhr hoch', perfekt: 'ist hochgefahren' } },
    { de: 'offline', pos: 'adjective', en: 'offline', hi: 'ऑफ़लाइन', ex: 'Ich bin gerade offline.', exEn: 'I\u2019m offline right now.' },
    { de: 'speichern', pos: 'verb', en: 'to save', hi: 'सेव करना', ex: 'Speicher die Datei!', exEn: 'Save the file!', conj: { praesens: 'speichert', praeteritum: 'speicherte', perfekt: 'hat gespeichert' } },
    // ===== Reference / System =====
    { de: 'verbinden (mit)', pos: 'verb', en: 'to connect (with)', hi: 'से जोड़ना', ex: 'Ich verbinde Sie mit Frau Weber.', exEn: 'I\u2019ll connect you with Frau Weber.', conj: { praesens: 'verbindet', praeteritum: 'verband', perfekt: 'hat verbunden' } }
  ],

  // ---------- Phone & clarifying (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Opening & closing a call',
      body: [
        'A German call starts and ends with set phrases. The big one to remember: on the phone you say <span class="de">Auf Wiederhören</span> (hear again), not Auf Wiedersehen (see again).'
      ],
      table: {
        head: ['Function', 'German'],
        rows: [
          ['answer', '<span class="de">Hallo? / [Name] am Apparat.</span>'],
          ['say who you are', '<span class="de">Hallo, hier ist Max.</span>'],
          ['check who you reached', '<span class="de">Spreche ich mit Anna?</span>'],
          ['say goodbye', '<span class="de">Auf Wiederhören!</span>']
        ]
      },
      note: 'Introduce yourself with <b>Hier ist …</b> (not "Ich bin …" on the phone). End with <b>Auf Wiederhören!</b> \u2014 the phone version of goodbye. Face-to-face you\u2019d say Auf Wiedersehen.',
      hinglish: 'Phone par apna naam <b>Hier ist …</b> se batao ("Ich bin …" nahi). Call khatam: <b>Auf Wiederhören!</b> (phone wala goodbye). Aamne-saamne Auf Wiedersehen.'
    },
    {
      title: 'Asking someone to repeat',
      body: [
        'The most useful skill on the phone: getting people to say it again. Keep these ready.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Wie bitte?</span>', 'Pardon? / Sorry?'],
          ['<span class="de">Noch (ein)mal, bitte.</span>', 'Once more, please.'],
          ['<span class="de">Kannst du das wiederholen?</span>', 'Can you repeat that?'],
          ['<span class="de">Ich habe das nicht verstanden.</span>', 'I didn\u2019t understand that.']
        ]
      },
      note: '<b>Wie bitte?</b> is the quick "pardon?". For more, use <b>können</b> + infinitive at the end: "Kannst du das <b>wiederholen</b>?" Note <b>verstehen → verstanden</b> (no ge-).',
      hinglish: '<b>Wie bitte?</b> = "kya? phir se?". Aur: <b>können</b> + infinitive end mein: "Kannst du das <b>wiederholen</b>?" Dhyaan: <b>verstehen → verstanden</b> (no ge-).'
    },
    {
      title: 'Slow down, spell, confirm',
      goldenRule: 'On the phone, ask with a modal + <b>bitte</b>: <span class="de">Können Sie das bitte wiederholen?</span>',
      memoryTrick: 'Teen phrases phone par bahut kaam aate hain: <b>Wie bitte?</b> (kya kaha), <b>langsamer, bitte</b> (thoda dheere), aur <b>Können Sie das buchstabieren?</b> (spell kar dijiye). Yahan Chapter 1 ka "A wie Apfel" kaam aata hai.',
      body: [
        'Three more rescue phrases \u2014 for speed, spelling and checking you got it right.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Kannst du langsamer sprechen?</span>', 'Can you speak more slowly?'],
          ['<span class="de">Kannst du das buchstabieren?</span>', 'Can you spell that?'],
          ['<span class="de">Ist das richtig?</span>', 'Is that right?'],
          ['<span class="de">Also: …, richtig?</span>', 'So: …, correct?']
        ]
      },
      note: 'Ask for slower speech with <b>langsamer sprechen</b>, for spelling with <b>buchstabieren</b> (great for names), and confirm with <b>Ist das richtig?</b> Repeat the key info back: "Also, Seite zwölf \u2014 richtig?"',
      hinglish: 'Dheeme bolne ke liye <b>langsamer sprechen</b>; spelling ke liye <b>buchstabieren</b> (naam ke liye badhiya); confirm karne ke liye <b>Ist das richtig?</b> Zaroori baat dohrao: "Also, Seite zwölf \u2014 richtig?"'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four phone traps to avoid.' ],
      mistakes: [
        { wrong: 'Auf Wiedersehen! (on the phone)', right: 'Auf Wiederhören!', why: 'On the phone you "hear again", not "see again".' },
        { wrong: 'Ich bin Max. (on the phone)', right: 'Hier ist Max.', why: 'Introduce yourself on the phone with "Hier ist …".' },
        { wrong: 'Bitte? (to mean pardon)', right: 'Wie bitte?', why: '"Wie bitte?" is the set phrase for "pardon?".' },
        { wrong: 'Kannst du wiederholen das?', right: 'Kannst du das wiederholen?', why: 'The infinitive goes to the very end after können.' }
      ],
      hinglish: 'Char galtiyan common hain. Phone par <b>Auf Wiederhören!</b> bolte hain, "Wiedersehen" nahi. Apna naam batane ke liye <b>Hier ist Max</b> aata hai. "Pardon" ke liye <b>Wie bitte?</b> use hota hai. Aur infinitive sentence ke end mein jaata hai: <b>Kannst du das wiederholen?</b>'
    }
  ],

  // ---------- Reading passage (a phone call, clickable) ----------
  reading: {
    title: 'Der Anruf',
    titleEn: 'The phone call',
    tokens: [
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'krank', role: 'r-adjective', en: 'ill', hi: 'बीमार', pron: 'krank', type: 'Adjective', why: 'krank (recycled — Imperativ & Modalverben 2).', ex: 'Max ist krank.', exEn: 'Max is ill.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction', why: 'und (recycled — Sätze verbinden).', ex: '…, und er ruft Anna an.', exEn: '…, and he calls Anna.' },
      { w: 'ruft', role: 'r-verb', en: 'calls', hi: 'फ़ोन करता है', pron: 'rooft', type: 'Verb · anrufen (er)', why: 'anrufen splits (recycled — Trennbare Verben).', ex: 'Er ruft Anna an.', exEn: 'He calls Anna.' },
      { w: 'Anna', role: 'r-object', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'an', role: 'r-verb', en: '(call)', hi: 'फ़ोन', pron: 'an', type: 'Separable prefix', why: 'an from anrufen (recycled — Trennbare Verben).', ex: '… an.', exEn: '… up.' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen', why: 'sagen (recycled — Verben).', ex: 'Er sagt: Hier ist Max.', exEn: 'He says: This is Max.' },
      { w: ':', plain: true },
      { w: '\u201eHier', role: 'r-place', en: '\u201cthis', hi: '"यह', pron: 'heer', type: 'Phone phrase', why: '"Hier ist …" (this chapter).', ex: 'Hier ist Max.', exEn: 'This is Max.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word', why: 'Was? (recycled — W-Fragen).', ex: 'Was ist die Hausaufgabe?', exEn: 'What is the homework?' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Hausaufgabe', role: 'r-subject', en: 'homework', hi: 'गृहकार्य', pron: 'HOWS-owf-gah-buh', type: 'Noun · fem.', why: 'die Hausaufgabe (recycled — Modalverben 1).', ex: 'Was ist die Hausaufgabe?', exEn: 'What is the homework?' },
      { w: '?', plain: true },
      { w: '\u201c', plain: true },
      { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'aber (recycled — Kein & Nicht).', ex: 'Aber das Netz ist schlecht.', exEn: 'But the reception is bad.' },
      { w: 'das', role: 'r-article', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Netz', role: 'r-subject', en: 'reception', hi: 'नेटवर्क', pron: 'nets', type: 'Noun · neut.', why: 'das Netz (this chapter).', ex: 'Das Netz ist schlecht.', exEn: 'The reception is bad.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'schlecht', role: 'r-adjective', en: 'bad', hi: 'ख़राब', pron: 'shlekht', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das Netz ist schlecht.', exEn: 'The reception is bad.' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'fragt', role: 'r-verb', en: 'asks', hi: 'पूछता है', pron: 'frahkt', type: 'Verb · fragen', why: 'fragen (recycled — Welcher & Dieser).', ex: 'Max fragt nach.', exEn: 'Max asks again.' },
      { w: ':', plain: true },
      { w: '\u201eWie', role: 'r-question', en: '\u201cpardon', hi: '"क्या', pron: 'vee', type: 'Question word', why: '"Wie bitte?" (this chapter).', ex: 'Wie bitte?', exEn: 'Pardon?' },
      { w: 'bitte', role: 'r-adverb', en: '(pardon)', hi: 'फिर से', pron: 'BI-tuh', type: 'Politeness', why: '"Wie bitte?" (this chapter).', ex: 'Wie bitte?', exEn: 'Sorry, what?' },
      { w: '?', plain: true },
      { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'kanst', type: 'Modal · können (du)', why: 'können; question → modal first (recycled — Modalverben 1).', ex: 'Kannst du das wiederholen?', exEn: 'Can you repeat that?' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
      { w: 'wiederholen', role: 'r-verb', en: 'repeat', hi: 'दोहराना', pron: 'vee-der-HOH-len', type: 'Verb · infinitive', why: 'wiederholen (this chapter); infinitive at the end (recycled — Modalverben 1).', ex: 'Kannst du das wiederholen?', exEn: 'Can you repeat that?' },
      { w: '?', plain: true },
      { w: '\u201c', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name' },
      { w: 'wiederholt', role: 'r-verb', en: 'repeats', hi: 'दोहराती है', pron: 'vee-der-HOHLT', type: 'Verb · wiederholen (sie)', why: 'wiederholen (this chapter).', ex: 'Anna wiederholt alles.', exEn: 'Anna repeats everything.' },
      { w: 'langsam', role: 'r-adverb', en: 'slowly', hi: 'धीरे', pron: 'LANG-zam', type: 'Adverb', why: 'langsam (this chapter).', ex: 'Sie spricht langsam.', exEn: 'She speaks slowly.' },
      { w: ':', plain: true },
      { w: 'Seite', role: 'r-object', en: 'page', hi: 'पृष्ठ', pron: 'ZY-tuh', type: 'Noun · fem.', why: 'die Seite.', ex: 'Seite zwölf', exEn: 'page twelve' },
      { w: 'zw\u00f6lf', role: 'r-object', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number', why: 'zwölf = 12 (recycled — Zahlen).', ex: 'Seite zwölf', exEn: 'page twelve' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann schickt sie …', exEn: 'Then she sends …' },
      { w: 'schickt', role: 'r-verb', en: 'sends', hi: 'भेजती है', pron: 'shikt', type: 'Verb · schicken (sie)', why: 'schicken (this chapter); verb position 2 (recycled — Satzposition).', ex: 'Dann schickt sie eine Sprachnachricht.', exEn: 'Then she sends a voice message.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'ihm', role: 'r-dativ', en: 'him', hi: 'उसे', pron: 'eem', type: 'Pronoun · dative', why: 'er → ihm (recycled — Dativpronomen).', ex: 'Sie schickt ihm …', exEn: 'She sends him …' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Sprachnachricht', role: 'r-object', en: 'voice message', hi: 'वॉइस मैसेज', pron: 'SHPRAHKH-nahkh-rikht', type: 'Noun · fem.', why: 'die Sprachnachricht (this chapter).', ex: 'eine Sprachnachricht schicken', exEn: 'send a voice message' },
      { w: '.', plain: true }
    ],
    translation: 'Max is ill and calls Anna. He says: "This is Max. What\u2019s the homework?" But the reception is bad. Max asks: "Pardon? Can you repeat that?" Anna repeats everything slowly: page twelve. Then she sends him a voice message.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair — never invented.
    dialogue: [
      { id: 'A1_045_L001', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sprachschule Berlin, guten Tag!', en: 'Berlin Language School, good day!' },
      { id: 'A1_045_L002', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag, hier ist Ben Meyer. Spreche ich mit dem Sekretariat?', en: 'Good day, this is Ben Meyer. Am I speaking with the office?' },
      { id: 'A1_045_L003', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja. Wie kann ich Ihnen helfen?', en: 'Yes. How can I help you?' },
      { id: 'A1_045_L004', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wann beginnt der Kurs am Montag?', en: 'When does the course begin on Monday?' },
      { id: 'A1_045_L005', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Um neun Uhr.', en: 'At nine o\'clock.' },
      { id: 'A1_045_L006', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie bitte? Können Sie das wiederholen?', en: 'Pardon? Can you repeat that?' },
      { id: 'A1_045_L007', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der Kurs beginnt um neun Uhr.', en: 'The course begins at nine o\'clock.' },
      { id: 'A1_045_L008', speaker: 'Ben', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielen Dank! Auf Wiederhören!', en: 'Many thanks! Goodbye!' }
    ],
    transcript: 'Sprachschule Berlin, guten Tag! Guten Tag, hier ist Ben Meyer. Spreche ich mit dem Sekretariat? Ja. Wie kann ich Ihnen helfen? Wann beginnt der Kurs am Montag? Um neun Uhr. Wie bitte? Können Sie das wiederholen? Der Kurs beginnt um neun Uhr. Vielen Dank! Auf Wiederhören!',
    translation: 'Berlin Language School, good day! Good day, this is Ben Meyer. Am I speaking with the office? Yes. How can I help you? When does the course begin on Monday? At nine o\'clock. Pardon? Can you repeat that? The course begins at nine o\'clock. Many thanks! Goodbye!',
    tokens: [
      { w: 'Sprachschule' },
      { w: 'Berlin' },
      { w: ',', plain: true },
      { w: 'guten' },
      { w: 'Tag' },
      { w: '!', plain: true },
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'hier' },
      { w: 'ist' },
      { w: 'Ben' },
      { w: 'Meyer' },
      { w: '.', plain: true },
      { w: 'Spreche' },
      { w: 'ich' },
      { w: 'mit' },
      { w: 'dem' },
      { w: 'Sekretariat' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'kann' },
      { w: 'ich' },
      { w: 'Ihnen' },
      { w: 'helfen' },
      { w: '?', plain: true },
      { w: 'Wann' },
      { w: 'beginnt' },
      { w: 'der' },
      { w: 'Kurs' },
      { w: 'am' },
      { w: 'Montag' },
      { w: '?', plain: true },
      { w: 'Um' },
      { w: 'neun' },
      { w: 'Uhr' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'bitte' },
      { w: '?', plain: true },
      { w: 'Können' },
      { w: 'Sie' },
      { w: 'das' },
      { w: 'wiederholen' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'Kurs' },
      { w: 'beginnt' },
      { w: 'um' },
      { w: 'neun' },
      { w: 'Uhr' },
      { w: '.', plain: true },
      { w: 'Vielen' },
      { w: 'Dank' },
      { w: '!', plain: true },
      { w: 'Auf' },
      { w: 'Wiederhören' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wie stellt sich Ben vor?', qEn: 'How does Ben introduce himself?', options: ['Ich bin Ben.', 'Hier ist Ben Meyer.', 'Mein Name Ben.', 'Ben hier sehen.'], optionsEn: ['I am Ben.', 'This is Ben Meyer.', 'My name Ben.', 'see Ben here.'], answer: 1,
        explain: 'On the phone: "hier ist Ben Meyer."' },
      { q: 'Mit welchem Satz bittet er um Wiederholung?', qEn: 'Which phrase does he use to ask for a repeat?', options: ['Bitte schön?', 'Wie bitte?', 'Wie geht\'s?', 'Wie viel?'], optionsEn: ['What can I get you?', 'Sorry?', 'How are you?', 'How much?'], answer: 1,
        explain: '"Wie bitte? Können Sie das wiederholen?"' },
      { q: 'Wann beginnt der Kurs?', qEn: 'When does the course begin?', options: ['um acht', 'um neun', 'um zehn', 'um elf'], optionsEn: ['at eight', 'at nine', 'at ten', 'at eleven'], answer: 1,
        explain: '"Der Kurs beginnt um neun Uhr."' }
    ]
  },

  // ---------- Speaking prompts ----------
  speaking: [
    { task: "Du rufst im Büro an. Melde dich und frag nach Frau Weber.", taskEn: "You call the office. Introduce yourself and ask for Mrs Weber.", de: "Guten Tag, hier ist David. Können Sie mich mit Frau Weber verbinden?", en: "Hello, this is David. Could you put me through to Mrs Weber?" },
    { task: "Du verstehst am Telefon das Passwort nicht. Was sagst du?", taskEn: "On the phone you don't catch the password. What do you say?", de: "Wie bitte? Können Sie das noch mal sagen?", en: "Sorry? Could you say that again?" },
    { task: "Das Gespräch ist zu Ende. Verabschiede dich am Telefon.", taskEn: "The call is over. Say goodbye on the phone.", de: "Vielen Dank für den Anruf. Auf Wiederhören!", en: "Thank you for your call. Goodbye!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short phone dialogue (8\u201310 lines). Open the call (Hallo, hier ist … / Spreche ich mit …?), ask for some information, use at least two clarification phrases (Wie bitte? / Kannst du das wiederholen? / langsamer, bitte / Ist das richtig?), confirm the information, and close with Auf Wiederhören!',
    starters: ['Hallo, hier ist …', 'Spreche ich mit …?', 'Wie bitte? Kannst du das wiederholen?', 'Also: …, richtig? — Auf Wiederhören!'],
    placeholder: 'Hallo, hier ist Max. Spreche ich mit Anna? …',
    minWords: 28
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'How do you end a phone call in German?',
      options: ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Bis dann sehen!', 'Tschüss sehen!'],
      answer: 1,
      explain: 'On the phone: "Auf Wiederhören!" (hear again).'
    },
    gap: {
      // clarification + repeat
      sentence: ['', ' bitte? Kannst du das ', '?'],
      gaps: [ { answer: 'Wie', accepts: ['wie'] }, { answer: 'wiederholen', accepts: ['wiederholen'] } ],
      explain: '"Wie bitte?" = pardon?; "Kannst du das wiederholen?" asks for a repeat.'
    },
    match: {
      q: 'Match each phone phrase to its function.',
      pairs: [
        { noun: 'Hier ist Max.', art: 'say who you are' },
        { noun: 'Wie bitte?', art: 'ask to repeat' },
        { noun: 'Ist das richtig?', art: 'confirm' },
        { noun: 'Auf Wiederhören!', art: 'say goodbye' }
      ]
    },
    builder: {
      target: 'Build: "Can you repeat that?"',
      bank: ['Kannst', 'du', 'das', 'wiederholen'],
      answer: ['Kannst', 'du', 'das', 'wiederholen'],
      roles: { 'Kannst': 'r-modalverb', 'du': 'r-subject', 'das': 'r-akkusativ', 'wiederholen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'How do you introduce yourself on the phone?', options: ['Ich sehe Max.', 'Hier ist Max.', 'Max geht.', 'Da ist Max.'], answer: 1,
      explain: 'On the phone: "Hier ist Max."' },
    { q: 'What does "Wie bitte?" mean?', options: ['You\u2019re welcome.', 'Pardon? / Sorry?', 'How much?', 'How are you?'], answer: 1,
      explain: '"Wie bitte?" = pardon? (please repeat).' },
    { q: 'Which ends a phone call?', options: ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Guten Tag!', 'Bis gleich sehen!'], answer: 1,
      explain: 'Auf Wiederhören! is the phone goodbye.' },
    { q: 'Complete: "Kannst du das ___?" (repeat)', options: ['wiederholen', 'wiederholst', 'wiederholt', 'gewiederholt'], answer: 0,
      explain: 'Infinitive at the end after können: wiederholen.' },
    { q: 'How do you ask someone to slow down?', options: ['Sprich lauter!', 'Kannst du langsamer sprechen?', 'Sprich mehr!', 'Wie viel sprichst du?'], answer: 1,
      explain: '"Kannst du langsamer sprechen?" = can you speak more slowly?' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Open & close: <span class="de">Hallo, hier ist … / Spreche ich mit …?</span> → <span class="de">Auf Wiederhören!</span>' },
    { c: 'r-question', html: 'Ask again: <span class="de">Wie bitte? · Kannst du das wiederholen? · langsamer, bitte · Ist das richtig?</span>' },
    { c: 'r-object', html: 'Tech words for a video lesson: <span class="de">das WLAN, der Akku, das Netz, die App, die Sprachnachricht</span>.' }
  ],
  revisionTips: [
    'Memorise the bookends: "Hier ist …" to open, "Auf Wiederhören!" to close.',
    'Keep three rescue phrases ready: "Wie bitte?", "Kannst du das wiederholen?", "langsamer, bitte".',
    'Confirm important details by repeating them: "Also, Seite zwölf — richtig?"'
  ]
};

window.CHAPTER = CHAPTER;
