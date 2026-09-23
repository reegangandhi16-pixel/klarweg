/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 2 · Chapter 17
   "Goethe Mini 2"  (Integrated revision & checkpoint)
   Same shape as chapter-data.js — the page renders from CHAPTER.
   Vocabulary source: uploaded chapter-17 word list (23 words).
   Theme = Goethe registration form. AGGRESSIVELY recycles Ch1–16.
============================================================ */
const CHAPTER = {
  id: 'a1-17-goethe2',
  phase: 'A1 · Phase 2',
  number: 17,
  title: 'Goethe Mini 2',
  titleEn: 'Goethe Checkpoint 2',
  description: 'A Goethe-style consolidation checkpoint. Fill out a real registration form while you bring everything from Chapters 1–16 together — introductions, numbers, questions, articles, negation, Akkusativ, food, café and hobbies — and finish with a mixed mini-exam.',
  xp: 180,
  time: 35,
  difficulty: 'Checkpoint',
  nextChapter: { number: 18, title: 'Unregelmäßige Verben', titleEn: 'Irregular Verbs' , href: 'chapter-a1-18-irregular.html' },

  prevChapter: { number: 16, title: 'Hobbies & Freizeit', titleEn: 'Hobbies & Free Time', href: 'chapter-a1-16-hobbies.html' },
  heroAnimationPath: null,

  // ---------- Story Dialogue (signature section — before vocab/grammar) ----------
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Jan signs up for the Goethe exam. Frau Roth helps him fill out the registration form line by line — family name, address, postcode, email — so every piece of personal info from Chapters 1\u201316 gets one more workout.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Recycles names, numbers, addresses & questions you already know'
    ],
    scene: 'Anmeldung \u2014 Sprachschule, Berlin',
    femaleSpeakers: ['Frau Roth'],
    dialogue: [
      { speaker: 'Frau Roth', tokens: [
        { w: 'Hier', role: 'r-adverb', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-article', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
        { w: 'Formular', role: 'r-subject', en: 'form', hi: 'फ़ॉर्म', pron: 'for-mu-LAR', type: 'Noun · neut.', why: 'das Formular (this chapter).', ex: 'Das Formular ist lang.', exEn: 'The form is long.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'foor', type: 'Preposition + acc.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.' },
        { w: 'Kurs', role: 'r-object', en: 'course', hi: 'कोर्स', pron: 'koors', type: 'Noun · masc.', why: 'der Kurs (recycled — Ch4).', ex: 'Der Kurs ist gut.', exEn: 'The course is good.' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
        { w: 'füllen', role: 'r-verb', en: 'fill', hi: 'भरते हैं', pron: 'FÜ-len', type: 'Verb · ausfüllen', lexicalUnit: 'ausfüllen', why: 'ausfüllen — to fill in; aus splits to the end (this chapter).', ex: 'Wir füllen das Formular aus.', exEn: 'We fill out the form.' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'एक साथ', pron: 'tsu-ZA-men', type: 'Adverb', why: 'zusammen = together (recycled — Im Café).', ex: 'Wir zahlen zusammen.', exEn: 'We pay together.' },
        { w: 'aus', role: 'r-verb', en: '(fill) in', hi: 'पूरा', pron: 'ows', type: 'Separable prefix', lexicalUnit: 'ausfüllen', why: 'aus from ausfüllen lands at the end.', ex: '… aus.', exEn: '… out.' },
        { w: '.', plain: true }
      ], en: 'Here is the form for the course. We fill it out together.', hi: 'Yahaan course ka form hai. Hum ise saath mein bharte hain.' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Okay', role: 'r-adverb', en: 'okay', hi: 'ठीक है', pron: 'o-KAY', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word', why: 'Was? (Chapter 6).', ex: 'Was schreibe ich?', exEn: 'What do I write?' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)', why: 'schreiben (recycled — Verben).', ex: 'Ich schreibe meinen Namen.', exEn: 'I write my name.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'zuerst', role: 'r-adverb', en: 'first', hi: 'सबसे पहले', pron: 'tsu-AIRST', type: 'Adverb', why: 'zuerst = first of all.', ex: 'Zuerst der Name.', exEn: 'First the name.' },
        { w: '?', plain: true }
      ], en: 'Okay. What do I write first?', hi: 'Theek hai. Sabse pehle kya likhoon?' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'सबसे पहले', pron: 'tsu-AIRST', type: 'Adverb' },
        { w: 'der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
        { w: 'Familienname', role: 'r-subject', en: 'family name', hi: 'उपनाम', pron: 'fa-MEEL-yen-nah-muh', type: 'Noun · masc.', why: 'der Familienname (this chapter).', ex: 'Mein Familienname ist Berger.', exEn: 'My family name is Berger.' },
        { w: '.', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how/what', hi: 'क्या', pron: 'vee', type: 'Question word', why: 'Wie heißt du? (Chapter 4).', ex: 'Wie heißt du?', exEn: 'What\u2019s your name?' },
        { w: 'heißt', role: 'r-verb', en: 'are called', hi: 'नाम है', pron: 'hyst', type: 'Verb · heißen (du)', why: 'heißen (recycled — Hallo!).', ex: 'Wie heißt du?', exEn: 'What are you called?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
        { w: '?', plain: true }
      ], en: 'First, the family name. What\u2019s your name?', hi: 'Sabse pehle upnaam. Tumhaara naam kya hai?' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Mein', role: 'r-article', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Familienname', role: 'r-subject', en: 'family name', hi: 'उपनाम', pron: 'fa-MEEL-yen-nah-muh', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Berger', role: 'r-object', en: 'Berger', hi: 'बर्गर', pron: 'BAIR-ger', type: 'Name' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
        { w: 'Vorname', role: 'r-subject', en: 'first name', hi: 'पहला नाम', pron: 'FOR-nah-muh', type: 'Noun · masc.', why: 'der Vorname (recycled — Wer bist du?).', ex: 'Mein Vorname ist Jan.', exEn: 'My first name is Jan.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Jan', role: 'r-object', en: 'Jan', hi: 'यान', pron: 'yahn', type: 'Name' },
        { w: '.', plain: true }
      ], en: 'My family name is Berger. And the first name is Rohan.', hi: 'Mera upnaam Berger hai. Aur pehla naam Rohan hai.' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'deine', role: 'r-article', en: 'your (fem.)', hi: 'तुम्हारा', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Adresse', role: 'r-subject', en: 'address', hi: 'पता', pron: 'a-DRE-suh', type: 'Noun · fem.', why: 'die Adresse (this chapter).', ex: 'Wie ist deine Adresse?', exEn: 'What\u2019s your address?' },
        { w: '?', plain: true },
        { w: 'Wohnort', role: 'r-subject', en: 'place of residence', hi: 'निवास स्थान', pron: 'VOHN-ort', type: 'Noun · masc.', why: 'der Wohnort (this chapter).', ex: 'Mein Wohnort ist Berlin.', exEn: 'My place of residence is Berlin.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Hausnummer', role: 'r-subject', en: 'house number', hi: 'मकान संख्या', pron: 'HOWS-nu-mer', type: 'Noun · fem.', why: 'die Hausnummer (this chapter).', ex: 'Die Hausnummer ist zwölf.', exEn: 'The house number is twelve.' },
        { w: '.', plain: true }
      ], en: 'Good. And your address? Place of residence and house number.', hi: 'Achha. Aur tumhaara pata? Nivaas sthaan aur makaan number.' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
        { w: 'wohne', role: 'r-verb', en: 'live', hi: 'रहता हूँ', pron: 'VOH-nuh', type: 'Verb · wohnen (ich)', why: 'wohnen (recycled — Wer bist du?).', ex: 'Ich wohne in Berlin.', exEn: 'I live in Berlin.' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Place' },
        { w: ',', plain: true },
        { w: 'Hauptstraße', role: 'r-place', en: 'Hauptstraße', hi: 'हाउप्टश्ट्रासे', pron: 'HOWPT-shtrah-suh', type: 'Noun · street', why: 'die Straße (recycled — Akkusativ).', ex: 'in der Hauptstraße', exEn: 'on the main street' },
        { w: 'zwölf', role: 'r-object', en: 'twelve', hi: 'बारह', pron: 'tsvölf', type: 'Number', why: 'zwölf = 12 (recycled — Zahlen).', ex: 'Hausnummer zwölf', exEn: 'house number twelve' },
        { w: '.', plain: true }
      ], en: 'I live in Berlin, Hauptstraße twelve.', hi: 'Main Berlin mein rehta hoon, Hauptstraße baarah.' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
        { w: 'Postleitzahl', role: 'r-subject', en: 'postcode', hi: 'पिन कोड', pron: 'POST-lyt-tsahl', type: 'Noun · fem.', why: 'die Postleitzahl (this chapter).', ex: 'Die Postleitzahl ist 10115.', exEn: 'The postcode is 10115.' },
        { w: '?', plain: true }
      ], en: 'And the postcode?', hi: 'Aur pin code?' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Eins', role: 'r-object', en: 'one', hi: 'एक', pron: 'ines', type: 'Number', why: 'Postcodes are read digit by digit (recycled — Zahlen).', ex: 'eins, null, eins …', exEn: 'one, zero, one …' },
        { w: '-', plain: true },
        { w: 'null', role: 'r-object', en: 'zero', hi: 'शून्य', pron: 'nool', type: 'Number', why: 'null = 0 (recycled — Zahlen).', ex: 'null', exEn: 'zero' },
        { w: '-', plain: true },
        { w: 'eins', role: 'r-object', en: 'one', hi: 'एक', pron: 'ines', type: 'Number' },
        { w: '-', plain: true },
        { w: 'eins', role: 'r-object', en: 'one', hi: 'एक', pron: 'ines', type: 'Number' },
        { w: '-', plain: true },
        { w: 'fünf', role: 'r-object', en: 'five', hi: 'पाँच', pron: 'fünf', type: 'Number', why: 'fünf = 5 (recycled — Zahlen).', ex: 'fünf', exEn: 'five' },
        { w: '.', plain: true }
      ], en: 'One-zero-one-one-five.', hi: 'Ek-shoonya-ek-ek-paanch.' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)', why: 'haben (recycled — Akkusativ).', ex: 'Hast du eine E-Mail?', exEn: 'Do you have an email?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.', why: 'eine — fem. accusative (Chapter 12).', ex: 'eine E-Mail', exEn: 'an email' },
        { w: 'E-Mail-Adresse', role: 'r-object', en: 'email address', hi: 'ईमेल पता', pron: 'EE-mayl-a-dre-suh', type: 'Noun · fem.', why: 'die E-Mail (this chapter).', ex: 'Meine E-Mail-Adresse ist …', exEn: 'My email address is …' },
        { w: '?', plain: true }
      ], en: 'Do you have an email address?', hi: 'Kya tumhaare paas ek email address hai?' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer', why: 'ja (Chapter 7).', ex: 'Ja, klar.', exEn: 'Yes, of course.' },
        { w: '.', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mein', role: 'r-article', en: 'my (masc.)', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Kontakt', role: 'r-object', en: 'contact', hi: 'संपर्क', pron: 'kon-TAKT', type: 'Noun · masc.', why: 'der Kontakt (this chapter).', ex: 'Das ist mein Kontakt.', exEn: 'That\u2019s my contact.' },
        { w: '.', plain: true }
      ], en: 'Yes. That\u2019s my contact.', hi: 'Haan. Yahi mera contact hai.' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Perfekt', role: 'r-adjective', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Männlich', role: 'r-adjective', en: 'male', hi: 'पुरुष', pron: 'MEN-likh', type: 'Adjective', why: 'männlich (this chapter).', ex: 'männlich oder weiblich?', exEn: 'male or female?' },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'OH-der', type: 'Conjunction', why: 'oder (recycled — Ja oder Nein).', ex: 'Tee oder Kaffee?', exEn: 'Tea or coffee?' },
        { w: 'weiblich', role: 'r-adjective', en: 'female', hi: 'महिला', pron: 'VYP-likh', type: 'Adjective', why: 'weiblich (this chapter).', ex: 'männlich oder weiblich', exEn: 'male or female' },
        { w: '?', plain: true }
      ], en: 'Perfect. Male or female?', hi: 'Badhiya. Purush ya mahila?' },
      { speaker: 'Jan', side: 'right', tokens: [
        { w: 'Männlich', role: 'r-adjective', en: 'male', hi: 'पुरुष', pron: 'MEN-likh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'the', hi: 'यह', pron: 'das', type: 'Article' },
        { w: 'Formular', role: 'r-subject', en: 'form', hi: 'फ़ॉर्म', pron: 'for-mu-LAR', type: 'Noun · neut.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'ठीक', pron: 'goot', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das Formular ist gut.', exEn: 'The form is good.' },
        { w: '?', plain: true }
      ], en: 'Male. Is the form good now?', hi: 'Purush. Kya form ab theek hai?' },
      { speaker: 'Frau Roth', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'richtig', role: 'r-adjective', en: 'correct', hi: 'सही', pron: 'RIKH-tikh', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das ist richtig.', exEn: 'That is correct.' },
        { w: '.', plain: true },
        { w: 'Willkommen', role: 'r-verb', en: 'welcome', hi: 'स्वागत है', pron: 'vil-KO-men', type: 'Greeting', why: 'willkommen (recycled — Hallo!).', ex: 'Willkommen!', exEn: 'Welcome!' },
        { w: 'an', role: 'r-preposition', en: 'at', hi: 'में', pron: 'an', type: 'Preposition' },
        { w: 'der', role: 'r-article', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article' },
        { w: 'Sprachschule', role: 'r-place', en: 'language school', hi: 'भाषा विद्यालय', pron: 'SHPRAHKH-shoo-luh', type: 'Noun · fem.', why: 'die Sprachschule (this chapter).', ex: 'Willkommen an der Sprachschule!', exEn: 'Welcome to the language school!' },
        { w: '!', plain: true }
      ], en: 'Yes! That is correct. Welcome to the language school!', hi: 'Haan! Yeh sahi hai. Sprachschule mein swaagat hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Revision works by <em>retrieval</em> — pulling words back out, not reading them again. This checkpoint makes you produce everything from Chapters 1\u201316: your <span class="de r-subject">Name</span>, your <span class="de r-object">Adresse</span>, your <span class="de r-object">Postleitzahl</span>, your hobbies and a café order — all on one registration form.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'This is a GOETHE-STYLE CHECKPOINT (Chapters 1\u201316): introductions, personal data, numbers, W-Fragen, ja/nein questions, verbs, articles, negation, Akkusativ, sein + adjective, food/café, and hobbies. ' +
    'The learner wrote a short self-introduction / form-style profile below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Introductions: "Ich heiße …", "Mein Name ist …", "Ich komme aus …", "Ich wohne in …", "Ich bin … Jahre alt."\n' +
    '- Personal-data nouns: der Familienname, der Vorname, der Wohnort, die Adresse, die Hausnummer, die Postleitzahl, die E-Mail, der Kontakt. All capitalised.\n' +
    '- Postcodes and phone numbers are read digit by digit; house numbers as normal numbers.\n' +
    '- W-Fragen put the verb in position 2: "Wie heißt du?", "Wo wohnst du?", "Woher kommst du?". Ja/Nein questions put the verb first: "Hast du eine E-Mail?"\n' +
    '- Akkusativ: masculine ein→einen, der→den; feminine/neuter unchanged. Negation: kein/keine before a noun, nicht otherwise.\n' +
    '- sein + adjective takes no ending: "Das Formular ist fertig." Hobbies: verb + gern, ranked gern < lieber < am liebsten; sports take no article.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Checkpoint check:</b> one sentence on whether the introduction would pass a Goethe A1 form task.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Checkpoint cleared — you can handle introductions, numbers, questions and forms. On to <span class="de">Mein Tag</span>.',
    mid: 'Solid. Re-read the Grammar Review once and redo the weakest exercise, then continue.',
    low: 'Take another pass through Chapters 1\u201316\u2019s grammar, then retake this checkpoint.'
  },

  parserSentence: [
    { w: 'Wie', role: 'r-question' }, { w: 'ist', role: 'r-verb' },
    { w: 'deine', role: 'r-article' }, { w: 'Adresse', role: 'r-subject' },
    { w: '?', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how this checkpoint pulls Chapters 1\u201316 together.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Help Frau Roth fill out his Goethe registration form — every line recycles something you know.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the form & personal-data words: Adresse, Formular, Postleitzahl, männlich/weiblich and more.' },
    { id: 'grammar',    label: 'Grammar Review', tag: 'core',
      objective: 'Reactivate introductions, numbers, W-Fragen, ja/nein, articles, negation, Akkusativ, sein + adjective.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a completed Goethe registration form and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a Goethe-style registration conversation and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Run a Goethe-style self-introduction and a partner registration roleplay.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short profile / form-style self-introduction using data from several chapters.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed-skill drills: matching, numbers, question formation, error correction.' },
    { id: 'quiz',       label: 'Goethe Mini Test', tag: 'assess',
      objective: 'A mixed mini-exam across Chapters 1\u201316. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review achievements, strongest skills, and what to revisit.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download checkpoint resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📋', title: 'Goethe Checkpoint PDF',
      desc: 'A printable Goethe A1-style mini-test covering reading, listening, writing and personal data.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Assessment' },
    { icon: '📚', title: 'Vocabulary Review PDF',
      desc: 'The form & personal-data words plus a recall sheet drawing on Chapters 1\u201316.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Grammar Recap PDF',
      desc: 'One-page recaps of introductions, numbers, W-Fragen, articles, negation and Akkusativ.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anmeldung', text: 'Fill out a registration form' },
    { de: 'Ich heiße …', text: 'Introduce yourself fully' },
    { de: 'Postleitzahl', text: 'Give numbers, address & contact' },
    { de: 'W-Fragen', text: 'Ask & answer personal questions' },
    { de: 'Goethe A1', text: 'Pass a mixed-skill checkpoint' }
  ],

  // ---------- Vocabulary (23 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Adresse', art: 'die', gender: 'f', plural: 'Adressen', pos: 'noun', en: 'address', hi: 'पता', ex: 'Wie ist deine Adresse?', exEn: 'What is your address?' },
    { de: 'E-Mail', art: 'die', gender: 'f', plural: 'E-Mails', pos: 'noun', en: 'email', hi: 'ईमेल', ex: 'Meine E-Mail ist rohan@mail.de.', exEn: 'My email is rohan@mail.de.' },
    // ===== Active Support =====
    { de: 'ausfüllen', pos: 'verb', en: 'to fill in', hi: 'भरना', ex: 'Ich fülle das Formular aus.', exEn: 'I fill out the form.', conj: { praesens: 'füllt aus', praeteritum: 'füllte aus', perfekt: 'hat ausgefüllt' } },
    { de: 'Formular', art: 'das', gender: 'n', plural: 'Formulare', pos: 'noun', en: 'form', hi: 'फ़ॉर्म', ex: 'Das Formular ist lang.', exEn: 'The form is long.' },
    { de: 'Familienname', art: 'der', gender: 'm', plural: 'Familiennamen', pos: 'noun', en: 'family name, surname', hi: 'उपनाम', ex: 'Mein Familienname ist Sharma.', exEn: 'My surname is Sharma.' },
    { de: 'Kontakt', art: 'der', gender: 'm', plural: 'Kontakte', pos: 'noun', en: 'contact', hi: 'संपर्क', ex: 'Das ist mein Kontakt.', exEn: 'That is my contact.' },
    { de: 'Wohnort', art: 'der', gender: 'm', plural: 'Wohnorte', pos: 'noun', en: 'place of residence', hi: 'निवास स्थान', ex: 'Mein Wohnort ist Berlin.', exEn: 'My place of residence is Berlin.' },
    { de: 'Daten', art: 'die', gender: 'pl', plural: 'Daten', pos: 'noun', en: 'data, details', hi: 'जानकारी', ex: 'Die Daten sind richtig.', exEn: 'The data is correct.' },
    { de: 'Firma', art: 'die', gender: 'f', plural: 'Firmen', pos: 'noun', en: 'company, firm', hi: 'कंपनी', ex: 'Die Firma ist in München.', exEn: 'The company is in Munich.' },
    { de: 'Hausnummer', art: 'die', gender: 'f', plural: 'Hausnummern', pos: 'noun', en: 'house number', hi: 'मकान संख्या', ex: 'Die Hausnummer ist zwölf.', exEn: 'The house number is twelve.' },
    { de: 'Information', art: 'die', gender: 'f', plural: 'Informationen', pos: 'noun', en: 'information', hi: 'सूचना', ex: 'Die Information ist wichtig.', exEn: 'The information is important.' },
    { de: 'Mail', art: 'die', gender: 'f', plural: 'Mails', pos: 'noun', en: 'mail, email', hi: 'मेल', ex: 'Ich schreibe eine Mail.', exEn: 'I write an email.' },
    { de: 'Postleitzahl', art: 'die', gender: 'f', plural: 'Postleitzahlen', pos: 'noun', en: 'postcode, zip code', hi: 'पिन कोड', ex: 'Die Postleitzahl ist 10115.', exEn: 'The postcode is 10115.' },
    { de: 'Schule', art: 'die', gender: 'f', plural: 'Schulen', pos: 'noun', en: 'school', hi: 'विद्यालय', ex: 'Die Schule ist groß.', exEn: 'The school is big.' },
    { de: 'männlich', pos: 'adjective', en: 'male', hi: 'पुरुष', ex: 'Männlich oder weiblich?', exEn: 'Male or female?' },
    { de: 'persönlich', pos: 'adjective', en: 'personal', hi: 'व्यक्तिगत', ex: 'Das sind persönliche Daten.', exEn: 'These are personal details.' },
    { de: 'weiblich', pos: 'adjective', en: 'female', hi: 'महिला', ex: 'Anna ist weiblich.', exEn: 'Anna is female.' },
    { de: 'wählen', pos: 'verb', en: 'to choose, select', hi: 'चुनना', ex: 'Ich wähle E-Mail als Kontakt.', exEn: 'I choose email as contact.', conj: { praesens: 'wählt', praeteritum: 'wählte', perfekt: 'hat gewählt' } },
    // ===== Passive =====
    { de: 'Mitglied', art: 'das', gender: 'n', plural: 'Mitglieder', pos: 'noun', en: 'member', hi: 'सदस्य', ex: 'Ich bin Mitglied.', exEn: 'I am a member.' },
    { de: 'Sprachinstitut', art: 'das', gender: 'n', plural: 'Sprachinstitute', pos: 'noun', en: 'language institute', hi: 'भाषा संस्थान', ex: 'Das Sprachinstitut ist bekannt.', exEn: 'The language institute is well known.' },
    { de: 'Angabe', art: 'die', gender: 'f', plural: 'Angaben', pos: 'noun', en: 'detail, piece of info', hi: 'विवरण', ex: 'Alle Angaben sind richtig.', exEn: 'All details are correct.' },
    { de: 'Sprachschule', art: 'die', gender: 'f', plural: 'Sprachschulen', pos: 'noun', en: 'language school', hi: 'भाषा विद्यालय', ex: 'Die Sprachschule ist in Berlin.', exEn: 'The language school is in Berlin.' },
    { de: 'zusammenpassen', pos: 'verb', en: 'to match, go together', hi: 'मेल खाना', ex: 'Die Daten passen zusammen.', exEn: 'The data matches.', conj: { praesens: 'passt zusammen', praeteritum: 'passte zusammen', perfekt: 'hat zusammengepasst' } }
  ],

  // ---------- Grammar Review (application, not new theory) ----------
  grammar: [
    {
      title: 'Introductions & personal data',
      goldenRule: 'Read a <b>Postleitzahl</b> digit by digit, but a <b>Hausnummer</b> as a normal number.',
      memoryTrick: 'Pin code = ek-ek digit (eins-null-eins-eins-fünf). Ghar ka number = poora number (zwölf). Yahi farak form bharte waqt bachata hai.',
      body: [
        'A registration form is just an introduction in writing. Everything from Chapters 4\u20135 comes back: name, origin, residence, age — plus the new form words.'
      ],
      table: {
        head: ['Field', 'You say / write'],
        rows: [
          ['Familienname / Vorname', '<span class="de">Mein Familienname ist Sharma, mein Vorname Rohan.</span>'],
          ['Wohnort + Adresse', '<span class="de">Ich wohne in Berlin, Hauptstraße 12.</span>'],
          ['Postleitzahl', '<span class="de">Die Postleitzahl ist 10115.</span>'],
          ['E-Mail / Kontakt', '<span class="de">Meine E-Mail-Adresse ist rohan@mail.de.</span>']
        ]
      },
      note: 'Read a <b>Postleitzahl</b> digit by digit (eins-null-eins-eins-fünf), but a <b>Hausnummer</b> as a normal number (zwölf). All nouns are capitalised.',
      hinglish: 'Form bharna likhit introduction hi hai. <b>Familienname</b> = upnaam, <b>Vorname</b> = pehla naam, <b>Wohnort</b> = jahaan rehte ho. <b>Postleitzahl</b> ek-ek digit padho (eins-null-eins-eins-fünf), par <b>Hausnummer</b> normal number (zwölf).'
    },
    {
      title: 'Numbers on the form',
      body: [
        'Numbers (Chapter 3) are everywhere on a form — age, house number, postcode, phone. Quick recall:'
      ],
      table: {
        head: ['Number', 'German', 'Used for'],
        rows: [
          ['0 / 1 / 5', '<span class="de">null / eins / fünf</span>', 'postcode digits'],
          ['12', '<span class="de">zwölf</span>', 'house number'],
          ['21', '<span class="de">einundzwanzig</span>', 'age'],
          ['10115', '<span class="de">eins-null-eins-eins-fünf</span>', 'postcode (digit by digit)']
        ]
      },
      note: 'Two-digit numbers flip: <b>einundzwanzig</b> = "one-and-twenty" (Chapter 3). Phone numbers and postcodes are spoken one digit at a time.',
      hinglish: 'Form pe numbers har jagah hain. Do-ank ke numbers ulte hote hain: <b>einundzwanzig</b> = 21 ("ek-aur-bees"). Phone aur pin code ek-ek digit bole jaate hain.'
    },
    {
      title: 'W-Fragen & Ja/Nein questions',
      body: [
        'Forms get filled by asking. Reactivate both question types from Chapters 6\u20137.'
      ],
      table: {
        head: ['Question', 'Type'],
        rows: [
          ['<span class="de">Wie heißt du?</span>', 'W-Frage — verb position 2'],
          ['<span class="de">Wo wohnst du?</span>', 'W-Frage — verb position 2'],
          ['<span class="de">Woher kommst du?</span>', 'W-Frage — origin'],
          ['<span class="de">Hast du eine E-Mail?</span>', 'Ja/Nein — verb first']
        ]
      },
      note: '<b>W-Fragen</b> (wer, was, wie, wo, woher, wann) keep the verb in position 2. <b>Ja/Nein</b> questions put the verb first and are answered ja / nein.',
      hinglish: '<b>W-Fragen</b> (wer, was, wie, wo, woher, wann) mein verb doosri jagah pe. <b>Ja/Nein</b> sawaal mein verb sabse pehle: "Hast du …?" — jawab ja / nein.'
    },
    {
      title: 'Articles, negation & Akkusativ — quick recall',
      body: [
        'The grammar engine from Chapters 10\u201312 still runs under every sentence. One combined recap:'
      ],
      table: {
        head: ['Rule', 'Example'],
        rows: [
          ['der/die/das (Ch10)', '<span class="de">der Wohnort · die Adresse · das Formular</span>'],
          ['Akkusativ (Ch12)', '<span class="de">Ich habe <u>einen</u> Kontakt.</span> (ein→einen, masc.)'],
          ['kein (Ch11)', '<span class="de">Ich habe <u>keine</u> Firma.</span>'],
          ['nicht (Ch11)', '<span class="de">Die Angabe ist <u>nicht</u> richtig.</span>']
        ]
      },
      note: 'Masculine is the only one that changes in the Akkusativ: <b>ein → einen</b>, <b>der → den</b>. Use <b>kein/keine</b> before a noun, <b>nicht</b> for everything else.',
      hinglish: 'Sirf masculine Akkusativ mein badalta hai: <b>ein → einen</b>, <b>der → den</b>. Noun ke saath <b>kein/keine</b>, baaki sab ke liye <b>nicht</b>.'
    },
    {
      title: 'Checkpoint mistakes to avoid',
      body: [ 'The four errors that cost easy marks on a Goethe A1 form task.' ],
      mistakes: [
        { wrong: 'Meine Adresse ist Berlin.', right: 'Mein Wohnort ist Berlin.', why: 'Adresse = the full street + number; Wohnort = the town/city.' },
        { wrong: 'Ich fülle aus das Formular.', right: 'Ich fülle das Formular aus.', why: 'Separable aus goes to the very end of the sentence.' },
        { wrong: 'Meine Postleitzahl ist zehntausendhundertfünfzehn.', right: 'Meine Postleitzahl ist eins-null-eins-eins-fünf.', why: 'Postcodes are read digit by digit, not as one big number.' },
        { wrong: 'Ich habe ein Kontakt.', right: 'Ich habe einen Kontakt.', why: 'Masculine accusative: ein → einen after haben.' }
      ],
      hinglish: 'Char galtiyan common hain. <b>Wohnort</b> ka matlab sirf sheher hai, aur <b>Adresse</b> ka matlab poora pata. Separable verb ka prefix end mein jaata hai: <b>\u2026 das Formular aus</b>. Pin code ek-ek digit bola jaata hai, ek bade number ki tarah nahi. Aur masculine accusative mein <b>ein</b> se <b>einen</b> ban jaata hai: <b>einen Kontakt</b>.'
    }
  ],

  // ---------- Reading passage (a filled-out form, clickable) ----------
  reading: {
    title: 'Das Anmeldeformular',
    titleEn: 'The registration form',
    tokens: [
      { w: 'Das', role: 'r-subject', en: 'this', hi: 'यह', pron: 'das', type: 'Pronoun' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'das', role: 'r-article', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Formular', role: 'r-subject', en: 'form', hi: 'फ़ॉर्म', pron: 'for-mu-LAR', type: 'Noun · neut.', why: 'das Formular (this chapter).', ex: 'Das Formular ist fertig.', exEn: 'The form is finished.' },
      { w: 'von', role: 'r-preposition', en: 'of/from', hi: 'का', pron: 'fon', type: 'Preposition' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Familienname', role: 'r-subject', en: 'surname', hi: 'उपनाम', pron: 'fa-MEEL-yen-nah-muh', type: 'Noun · masc.', why: 'der Familienname (this chapter).', ex: 'Der Familienname ist Sharma.', exEn: 'The surname is Sharma.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Sharma', role: 'r-object', en: 'Sharma', hi: 'शर्मा', pron: 'SHAR-ma', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-article', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Wohnort', role: 'r-subject', en: 'residence', hi: 'निवास स्थान', pron: 'VOHN-ort', type: 'Noun · masc.', why: 'der Wohnort (this chapter).', ex: 'Der Wohnort ist Berlin.', exEn: 'The residence is Berlin.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Place' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-article', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Postleitzahl', role: 'r-subject', en: 'postcode', hi: 'पिन कोड', pron: 'POST-lyt-tsahl', type: 'Noun · fem.', why: 'die Postleitzahl (this chapter).', ex: 'Die Postleitzahl ist 10115.', exEn: 'The postcode is 10115.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: '10115', role: 'r-object', en: '10115', hi: '१०११५', pron: 'ines-nool-ines-ines-fünf', type: 'Number', why: 'Read digit by digit (recycled — Zahlen).', ex: 'eins-null-eins-eins-fünf', exEn: 'one-zero-one-one-five' },
      { w: '.', plain: true },
      { w: 'Seine', role: 'r-article', en: 'his (fem.)', hi: 'उसका', pron: 'ZY-nuh', type: 'Possessive' },
      { w: 'E-Mail-Adresse', role: 'r-subject', en: 'email address', hi: 'ईमेल पता', pron: 'EE-mayl-a-dre-suh', type: 'Noun · fem.', why: 'die E-Mail (this chapter).', ex: 'Seine E-Mail-Adresse ist …', exEn: 'His email address is …' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'sein', role: 'r-article', en: 'his (masc.)', hi: 'उसका', pron: 'zine', type: 'Possessive' },
      { w: 'Kontakt', role: 'r-object', en: 'contact', hi: 'संपर्क', pron: 'kon-TAKT', type: 'Noun · masc.', why: 'der Kontakt (this chapter).', ex: 'Das ist sein Kontakt.', exEn: 'That is his contact.' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'RO-han', type: 'Name' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: 'männlich', role: 'r-adjective', en: 'male', hi: 'पुरुष', pron: 'MEN-likh', type: 'Adjective', why: 'männlich (this chapter).', ex: 'Rohan ist männlich.', exEn: 'Rohan is male.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'Mitglied', role: 'r-object', en: 'a member', hi: 'सदस्य', pron: 'MIT-gleet', type: 'Noun · neut.', why: 'das Mitglied (this chapter).', ex: 'Er ist Mitglied.', exEn: 'He is a member.' },
      { w: 'der', role: 'r-article', en: 'the (fem. gen.)', hi: 'इस', pron: 'dair', type: 'Article' },
      { w: 'Sprachschule', role: 'r-place', en: 'language school', hi: 'भाषा विद्यालय', pron: 'SHPRAHKH-shoo-luh', type: 'Noun · fem.', why: 'die Sprachschule (this chapter). "Mitglied der Sprachschule" — Mitglied takes a genitive, not an.', ex: 'Mitglied der Sprachschule', exEn: 'a member of the language school' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'r-article', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
      { w: 'Angaben', role: 'r-subject', en: 'details', hi: 'जानकारी', pron: 'AN-gah-ben', type: 'Noun · plural', why: 'die Angabe → die Angaben (this chapter).', ex: 'Alle Angaben sind richtig.', exEn: 'All details are correct.' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
      { w: 'richtig', role: 'r-adjective', en: 'correct', hi: 'सही', pron: 'RIKH-tikh', type: 'Adjective', why: 'sein + adjective (Chapter 13).', ex: 'Das ist richtig.', exEn: 'That is correct.' },
      { w: '.', plain: true }
    ],
    translation: 'This is Rohan\u2019s form. The surname is Sharma. The residence is Berlin, the postcode is 10115. His email address is his contact. Rohan is male and a member of the language school. All the details are correct.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_017_L001', speaker: 'Jan', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guten Tag, ich habe eine Frage zu meiner Anmeldung.', en: 'Good day, I have a question about my registration.' },
      { id: 'A1_017_L002', speaker: 'Frau Roth', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gern. Wie ist Ihr Name?', en: 'Sure. What is your name?' },
      { id: 'A1_017_L003', speaker: 'Jan', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Jan Müller.', en: 'Jan Müller.' },
      { id: 'A1_017_L004', speaker: 'Frau Roth', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Einen Moment ... Ja, Ihre Anmeldung ist da. Alles ist in Ordnung.', en: 'One moment ... Yes, your registration is here. Everything is fine.' },
      { id: 'A1_017_L005', speaker: 'Jan', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Super, vielen Dank!', en: 'Great, many thanks!' }
    ],
    transcript: 'Guten Tag, ich habe eine Frage zu meiner Anmeldung. Gern. Wie ist Ihr Name? Jan Müller. Einen Moment ... Ja, Ihre Anmeldung ist da. Alles ist in Ordnung. Super, vielen Dank!',
    translation: 'Good day, I have a question about my registration. Sure. What is your name? Jan Müller. One moment ... Yes, your registration is here. Everything is fine. Great, many thanks!',
    tokens: [
      { w: 'Guten' },
      { w: 'Tag' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'eine' },
      { w: 'Frage' },
      { w: 'zu' },
      { w: 'meiner' },
      { w: 'Anmeldung' },
      { w: '.', plain: true },
      { w: 'Gern' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'ist' },
      { w: 'Ihr' },
      { w: 'Name' },
      { w: '?', plain: true },
      { w: 'Jan' },
      { w: 'Müller' },
      { w: '.', plain: true },
      { w: 'Einen' },
      { w: 'Moment' },
      { w: '...', plain: true, spaceBefore: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'Ihre' },
      { w: 'Anmeldung' },
      { w: 'ist' },
      { w: 'da' },
      { w: '.', plain: true },
      { w: 'Alles' },
      { w: 'ist' },
      { w: 'in' },
      { w: 'Ordnung' },
      { w: '.', plain: true },
      { w: 'Super' },
      { w: ',', plain: true },
      { w: 'vielen' },
      { w: 'Dank' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Warum ruft Jan Frau Roth an?', qEn: 'Why does Jan call Frau Roth?', options: ['Um eine Rechnung zu bezahlen', 'Um nach seiner Anmeldung zu fragen', 'Um ein Hotel zu buchen', 'Um einen Kurs abzusagen'], optionsEn: ['To pay a bill', 'To ask about his registration', 'To book a hotel', 'To cancel a course'], answer: 1,
        explain: '"Ich habe eine Frage zu meiner Anmeldung."' },
      { q: 'Was bestätigt Frau Roth?', qEn: 'What does Frau Roth confirm?', options: ['Die Anmeldung fehlt.', 'Alles ist in Ordnung.', 'Der Kurs ist voll.', 'Jan muss neu anmelden.'], optionsEn: ['The registration is missing.', 'Everything is fine.', 'The course is full.', 'Jan has to register again.'], answer: 1,
        explain: '"Ihre Anmeldung ist da. Alles ist in Ordnung."' }
    ]
  },

  speaking: [
    { task: "Prüfung, Teil 1: Stell dich vor — Name, Land, Wohnort.", taskEn: "Exam, Part 1: introduce yourself — name, country, place of residence.", de: "Ich heiße Jan Müller. Ich komme aus Indien und ich wohne in Berlin.", en: "My name is Jan Müller. I'm from India and I live in Berlin." },
    { task: "Im Sprachinstitut brauchen sie deine Adresse für das Formular.", taskEn: "At the language institute they need your address for the form.", de: "Meine Adresse ist Hauptstraße 12, Postleitzahl 10115.", en: "My address is Hauptstraße 12, postcode 10115." },
    { task: "Am Telefon fragt die Schule: Wie ist Ihr Kontakt?", taskEn: "On the phone the school asks: what's your contact?", de: "Meine E-Mail ist mein Kontakt. Meine Hausnummer ist zwölf.", en: "My email is my contact. My house number is twelve." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short profile / form-style self-introduction (6\u20138 sentences). Include your name (Familienname + Vorname), Wohnort and Adresse, Postleitzahl, E-Mail/Kontakt, whether you are männlich or weiblich, and one hobby. Use full sentences.',
    starters: ['Mein Familienname ist …', 'Ich wohne in …, Postleitzahl …', 'Meine E-Mail-Adresse ist …', 'In der Freizeit …'],
    placeholder: 'Mein Familienname ist … und mein Vorname ist …',
    minWords: 25
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly fills out the form?',
      options: ['Ich fülle aus das Formular.', 'Ich fülle das Formular aus.', 'Ich ausfülle das Formular.', 'Ich das Formular fülle aus.'],
      answer: 1,
      explain: 'Separable verb: the prefix aus goes to the end — "… das Formular aus."'
    },
    gap: {
      // recall personal-data fields
      sentence: ['Mein ', ' ist Berlin und meine ', ' ist 10115.'],
      gaps: [ { answer: 'Wohnort', accepts: ['wohnort'] }, { answer: 'Postleitzahl', accepts: ['postleitzahl'] } ],
      explain: 'Wohnort = town/city; Postleitzahl = postcode.'
    },
    match: {
      q: 'Match each form field to its meaning.',
      pairs: [
        { noun: 'Adresse', art: 'address' },
        { noun: 'Familienname', art: 'surname' },
        { noun: 'Postleitzahl', art: 'postcode' },
        { noun: 'männlich', art: 'male' }
      ]
    },
    builder: {
      target: 'Build the question: "What is your address?"',
      bank: ['Wie', 'ist', 'deine', 'Adresse'],
      answer: ['Wie', 'ist', 'deine', 'Adresse'],
      roles: { 'Wie': 'r-question', 'ist': 'r-verb', 'deine': 'r-article', 'Adresse': 'r-subject' }
    }
  },

  // ---------- Goethe Mini Test (5 mixed questions) ----------
  quiz: [
    { q: 'Wie fragt man nach dem Familiennamen?', options: ['Wie alt bist du?', 'Wie heißt du?', 'Wo wohnst du?', 'Was machst du?'], answer: 1,
      explain: '"Wie heißt du?" asks for the name.' },
    { q: 'How do you read the postcode 10115 aloud?', options: ['zehntausend…', 'eins-null-eins-eins-fünf', 'einhundert…', 'elf-fünf'], answer: 1,
      explain: 'Postcodes are read digit by digit.' },
    { q: 'Choose the correct accusative: "Ich habe ___ Kontakt."', options: ['ein', 'einen', 'eine', 'der'], answer: 1,
      explain: 'Masculine accusative: ein → einen.' },
    { q: 'Which word means "place of residence"?', options: ['Adresse', 'Wohnort', 'Hausnummer', 'Formular'], answer: 1,
      explain: 'der Wohnort = the town/city where you live; Adresse is the full street address.' },
    { q: '"männlich oder weiblich?" asks about…', options: ['age', 'gender', 'address', 'job'], answer: 1,
      explain: 'männlich = male, weiblich = female.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: 'Give full personal data: <span class="de">Mein Familienname ist …, mein Wohnort ist …</span>' },
    { c: 'r-object', html: 'Forms reuse numbers: <span class="de">Postleitzahl</span> digit by digit, <span class="de">Hausnummer</span> as a number.' },
    { c: 'r-question', html: 'Drive a form with questions: <span class="de">Wie heißt du? Wo wohnst du? Hast du eine E-Mail?</span>' }
  ],
  revisionTips: [
    'Say your full registration out loud: name, Wohnort, Adresse, Postleitzahl, E-Mail — without looking.',
    'Read any postcode or phone number you see digit by digit in German.',
    'Re-test the weakest of Chapters 1\u201316 from its own quiz before moving to Mein Tag.'
  ]
};

window.CHAPTER = CHAPTER;
