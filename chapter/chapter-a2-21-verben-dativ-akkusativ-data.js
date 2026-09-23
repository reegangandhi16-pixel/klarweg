/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 21
   "Verben mit Dativ und Akkusativ" — two-object verbs: who
   receives (Dativ) + what is received (Akkusativ). Core verbs:
   geben, schenken, zeigen, erklären, bringen, schicken,
   verkaufen, leihen, empfehlen, schreiben, erzählen, senden.
   Also covers noun→pronoun word order (Ich gebe ihm das Buch. →
   Ich gebe es ihm.). No passive, no genitive objects, no
   double infinitives, no B1 verb patterns.
   Vocabulary source: uploaded chapter-21 list (~31 items; jobs/
   transport/media theme — Busfahrerin, Herzchirurg, Fernfahrer,
   Anrufbeantworter, Telefonkonferenz). Recycles Ch.7 (Possessiv-
   artikel im Dativ), Ch.13 (Dativ-Präp.), Ch.19–20 and A1 Dativ.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-20-was-fuer-ein-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js engine.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "zurück|kommen" → corrected to zurückkommen (separable verb,
     to return).
   • "nutzen - to take" → glossed more precisely as "to use, to
     make use of" (its real A2 meaning; "to take" was imprecise).
============================================================ */
const CHAPTER = {
  id: 'a2-21-verben-dativ-akkusativ',
  phase: 'A2 · Phase 2',
  number: 21,
  title: 'Verben mit Dativ und Akkusativ',
  titleEn: 'Verbs with Dative and Accusative',
  description: 'Ich gebe meinem Freund ein Buch — one verb, two objects. Meinem Freund is the receiver (Dativ); ein Buch is the thing received (Akkusativ). This chapter drills the core two-object verbs — geben, schenken, zeigen, erklären, schicken, leihen, empfehlen — the Dativ-before-Akkusativ word order, and the switch to pronoun order once both objects become pronouns.',
  xp: 180,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 22, title: 'Konjunktiv II: könnte', titleEn: 'Konjunktiv II: könnte' , href: 'chapter-a2-22-konjunktiv2-koennte.html' },

  prevChapter: { number: 20, title: 'Interrogativartikel: was für ein(e)', titleEn: 'The Interrogative was für ein(e)', href: 'chapter-a2-20-was-fuer-ein.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'It\'s Karla\'s birthday, and Timo is showing her the photo album he made — giving her the pictures, explaining the songs, promising the headphones next. Every two-object sentence puts Dativ before Akkusativ: Ich zeige dir das Album, ich schenke dir das Album.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear noun objects and pronoun objects side by side'
    ],
    scene: 'Karlas Geburtstag — Sprachschule Berlin',
    femaleSpeakers: ['Karla'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zeige', role: 'r-verb', en: 'show', hi: 'दिखाता हूँ', pron: 'TSY-guh', type: 'Verb · zeigen (ich)', why: 'zeigen + dative person + accusative thing (this chapter).', ex: 'Ich zeige dir das Album.', exEn: 'I show you the album.' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Album', role: 'r-akkusativ', en: 'album', hi: 'एल्बम', pron: 'AL-bum', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I show you the album.', hi: 'Main tumhe album dikhata hoon.' },
      { speaker: 'Karla', side: 'right', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Interjection' },
        { w: ',', plain: true },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Gibst', role: 'r-verb', en: 'do you give', hi: 'देते हो', pron: 'GEEPST', type: 'Verb · geben (du)', why: 'geben + dative + accusative (recycled).' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Album', role: 'r-akkusativ', en: 'album', hi: 'एल्बम', pron: 'AL-bum', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'Oh, nice! Do you give me the album?', hi: 'Oh, achha! Kya tum mujhe album doge?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schenke', role: 'r-verb', en: 'give as a gift', hi: 'उपहार देता हूँ', pron: 'SHEN-kuh', type: 'Verb · schenken (ich)', why: 'schenken + dative + accusative = to give as a gift (this chapter).', ex: 'Ich schenke dir das Album.', exEn: 'I give you the album as a gift.' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Album', role: 'r-akkusativ', en: 'album', hi: 'एल्बम', pron: 'AL-bum', type: 'Noun · neut.' },
        { w: 'zum', role: 'r-preposition', en: 'for the', hi: 'के लिए', pron: 'tsum', type: 'Preposition + place' },
        { w: 'Geburtstag', role: 'r-dativ', en: 'birthday', hi: 'जन्मदिन', pron: 'ge-BOORTS-tahk', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes! I give you the album as a birthday gift.', hi: 'Haan! Main tumhe janamdin par album uphaar deta hoon.' },
      { speaker: 'Karla', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Erklärst', role: 'r-verb', en: 'do you explain', hi: 'समझाओगे', pron: 'er-KLAIRST', type: 'Verb · erklären (du)', why: 'erklären + dative + accusative = to explain (recycled Ch40).' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Lieder', role: 'r-akkusativ', en: 'songs', hi: 'गाने', pron: 'LEE-der', type: 'Noun · plural' },
        { w: '?', plain: true }
      ], en: 'Thanks! Do you explain the songs to me?', hi: 'Dhanyavaad! Kya tum mujhe gaane samjhaoge?' },
      { speaker: 'Timo', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'erzähle', role: 'r-verb', en: 'tell', hi: 'बताता हूँ', pron: 'er-TSAY-luh', type: 'Verb · erzählen (ich)', why: 'erzählen + dative + accusative = to tell (recycled).' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Geschichte', role: 'r-akkusativ', en: 'story', hi: 'कहानी', pron: 'ge-SHIKH-tuh', type: 'Noun · fem.' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'की', pron: 'fon', type: 'Preposition + dative' },
        { w: 'jedem', role: 'r-dativ', en: 'every', hi: 'हर', pron: 'YAY-daym', type: 'Determiner · dative' },
        { w: 'Lied', role: 'r-dativ', en: 'song (dat.)', hi: 'गाने की', pron: 'leet', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, gladly. I tell you the story of every song.', hi: 'Haan, khushi se. Main tumhe har gaane ki kahaani bataata hoon.' },
      { speaker: 'Karla', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'super', role: 'r-adjective', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Bringst', role: 'r-verb', en: 'do you bring', hi: 'लाओगे', pron: 'BRINKST', type: 'Verb · bringen (du)', why: 'bringen + dative + accusative = to bring (recycled).' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kopfhörer', role: 'r-akkusativ', en: 'headphones', hi: 'हेडफ़ोन', pron: 'KOPF-hö-rer', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'That is great! Do you also bring me the headphones?', hi: 'Yeh badhiya hai! Kya tum mere liye headphone bhi laoge?' },
      { speaker: 'Timo', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'ख़रीदता हूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kopfhörer', role: 'r-akkusativ', en: 'headphones', hi: 'हेडफ़ोन', pron: 'KOPF-hö-rer', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Of course! I buy you the headphones tomorrow.', hi: 'Zaroor! Main tumhare liye kal headphone khareedta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Ich gebe meinem Freund ein Buch.</span> One verb, two objects: <span class="de r-dativ">meinem Freund</span> is the <strong>receiver</strong> (Dativ), <span class="de r-akkusativ">ein Buch</span> is the <strong>thing received</strong> (Akkusativ). With noun objects, Dativ comes before Akkusativ. Once both objects turn into pronouns, the order flips: <span class="de">Ich gebe es ihm.</span> — Akkusativ pronoun before Dativ pronoun.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TWO-OBJECT VERBS (Dativ + Akkusativ): geben, schenken, zeigen, erklären, bringen, schicken, verkaufen, leihen, empfehlen, schreiben, erzählen, senden. ' +
    'No passive, no genitive objects, no double infinitives, no B1 verb patterns. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- With two noun objects, Dativ (the receiver/person) comes before Akkusativ (the thing): "Ich gebe meinem Freund ein Buch." Flag reversed order or a nominative/accusative receiver ("Ich gebe meinen Freund ein Buch" should be "meinem Freund").\n' +
    '- With two pronoun objects, the order flips: Akkusativ pronoun before Dativ pronoun — "Ich gebe es ihm." Flag "Ich gebe ihm es" as wrong order.\n' +
    '- With one noun + one pronoun, the pronoun comes first regardless of case: "Ich gebe ihm das Buch." / "Ich gebe es meinem Freund."\n' +
    '- The receiver is always Dativ, never Akkusativ or the base form of a name — flag "Ich schicke mein Vater eine Nachricht" (should be "meinem Vater").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Word-order check:</b> one sentence on whether Dativ/Akkusativ (or pronoun order) landed correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You know exactly who receives (Dativ) and what is received (Akkusativ), and you switch the order correctly once pronouns take over. Next: soften requests with könnte.',
    mid: 'Good. Re-read the word-order card once (Dativ before Akkusativ with nouns, Akkusativ before Dativ with pronouns), then continue.',
    low: 'Worth another pass — remember: the person receiving is always Dativ, the thing given is Akkusativ, and pronouns flip the order. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'gebe', role: 'r-verb' },
    { w: 'meinem', role: 'r-dativ' }, { w: 'Freund', role: 'r-dativ' },
    { w: 'ein', role: 'r-akkusativ' }, { w: 'Buch', role: 'r-akkusativ' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the receiver-Dativ / thing-Akkusativ pattern.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A birthday full of giving, showing, lending and explaining.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Betrieb, der Herzchirurg, die Busfahrerin, lebenslang, verändern.' },
    { id: 'grammar',    label: 'Verben mit Dativ/Akk.', tag: 'core',
      objective: 'Master the verb list, noun word order, pronoun word order and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a birthday-gift story full of two-object verbs.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each Dativ + Akkusativ verb in a workplace phone call.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Practice giving, showing, lending and recommending things.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write short dialogues and an email using two-object verbs.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill noun word order, pronoun word order and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s jobs, transport and media words — der Herzchirurg, die Busfahrerin, der Fernfahrer, der Anrufbeantworter — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Dativ-before-Akkusativ drills, pronoun-order sorting, and an error-correction and email task.',
      pdfUrl: '/pdfs/homework.pdf', size: '7 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full verb list, the noun and pronoun word-order tables, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich gebe meinem Freund ein Buch.', text: 'Put the receiver (Dativ) before the thing (Akkusativ)' },
    { de: 'Ich gebe es ihm.', text: 'Switch the order once both objects are pronouns' },
    { de: 'Kannst du mir das erklären?', text: 'Ask someone to explain, show or lend something' },
    { de: 'Sie schickt ihrer Mutter eine Nachricht.', text: 'Use the core two-object verbs correctly' },
    { de: 'Wer bekommt es? Was wird gegeben?', text: 'Tell receiver from thing every time' }
  ],

  // ---------- Vocabulary (~31 items) ----------
  vocab: [
    { de: 'Album', art: 'das', gender: 'n', plural: 'Alben', pos: 'noun', en: 'album', hi: 'एल्बम', ex: 'Ich schenke dir ein Album.', exEn: 'I am giving you an album.' },
    { de: 'Anrufbeantworter', art: 'der', gender: 'm', plural: 'Anrufbeantworter', pos: 'noun', en: 'answering machine', hi: 'उत्तर देने वाली मशीन', ex: 'Er hat mir seinen Anrufbeantworter erklärt.', exEn: 'He explained his answering machine to me.' },
    { de: 'auf keinen Fall', pos: 'phrase', en: 'under no circumstances', hi: 'किसी भी हालत में नहीं', ex: 'Auf keinen Fall ohne Führerschein!', exEn: 'Under no circumstances without a driving licence!' },
    { de: 'außer Haus', pos: 'phrase', en: 'out of office', hi: 'दफ़्तर से बाहर', ex: 'Ich bin heute außer Haus.', exEn: 'I am out of office today.' },
    { de: 'beraten', pos: 'verb', en: 'to advise', hi: 'सलाह देना', ex: 'Kannst du mir einen guten Tarif beraten?', exEn: 'Can you advise me on a good rate?', conj: { praesens: 'berät', praeteritum: 'beriet', perfekt: 'hat beraten' } },
    { de: 'Betrieb', art: 'der', gender: 'm', plural: 'Betriebe', pos: 'noun', en: 'firm', hi: 'कंपनी', ex: 'Mein Betrieb schickt mir jeden Montag eine Telefonkonferenz.', exEn: 'My firm sends me a conference call every Monday.' },
    { de: 'Fahrgast', art: 'der', gender: 'm', plural: 'Fahrgäste', pos: 'noun', en: 'passenger', hi: 'यात्री', ex: 'Zeig mir die Fotos vom Fahrgast.', exEn: 'Show me the photos from the passenger.' },
    { de: 'Fahrkartenschalter', art: 'der', gender: 'm', plural: 'Fahrkartenschalter', pos: 'noun', en: 'booking office', hi: 'टिकट काउंटर', ex: 'Erklär ihm, wie der Fahrkartenschalter funktioniert.', exEn: 'Explain to him how the booking office works.' },
    { de: 'fantastisch', pos: 'adjective', en: 'fantastic', hi: 'शानदार', ex: 'Das Geschenk ist fantastisch!', exEn: 'The gift is fantastic!' },
    { de: 'genau', pos: 'adverb', en: 'exactly', hi: 'ठीक', ex: 'Erklär mir das genau.', exEn: 'Explain that to me exactly.' },
    { de: 'komisch', pos: 'adjective', en: 'funny, odd', hi: 'अजीब', ex: 'Das ist ein komisches Geschenk.', exEn: 'That is an odd gift.' },
    { de: 'konzentrieren (sich)', pos: 'verb', en: 'to concentrate', hi: 'ध्यान केंद्रित करना', ex: 'Konzentrier dich, bevor ich dir das erkläre.', exEn: 'Concentrate before I explain that to you.', conj: { praesens: 'konzentriert sich', praeteritum: 'konzentrierte sich', perfekt: 'hat sich konzentriert' } },
    { de: 'Kurspartnerin', art: 'die', gender: 'f', plural: 'Kurspartnerinnen', pos: 'noun', en: 'course partner (f.)', hi: 'कोर्स साथी (महिला)', ex: 'Ich zeige dir ein Foto von unserer Kurspartnerin.', exEn: 'I\'ll show you a photo of our course partner.' },
    { de: 'Lastwagen', art: 'der', gender: 'm', plural: 'Lastwagen', pos: 'noun', en: 'truck', hi: 'ट्रक', ex: 'Ich leihe dir meinen Lastwagen.', exEn: 'I\'ll lend you my truck.' },
    { de: 'lebenslang', pos: 'adjective', en: 'lifelong', hi: 'जीवनभर का', ex: 'Er spricht über sein lebenslanges Lernen.', exEn: 'He talks about his lifelong learning.' },
    { de: 'nutzen', pos: 'verb', en: 'to use, to make use of', hi: 'इस्तेमाल करना', ex: 'Sie nutzt jedes Risiko als Chance.', exEn: 'She makes use of every risk as an opportunity.', conj: { praesens: 'nutzt', praeteritum: 'nutzte', perfekt: 'hat genutzt' } },
    { de: 'Risiko', art: 'das', gender: 'n', plural: 'Risiken', pos: 'noun', en: 'risk', hi: 'जोखिम', ex: 'Ein Kletterkurs ist ein kleines Risiko.', exEn: 'A climbing course is a small risk.' },
    { de: 'Sänger', art: 'der', gender: 'm', plural: 'Sänger', pos: 'noun', en: 'singer', hi: 'गायक', ex: 'Ein Sänger aus meinem Kurs hat mir das erklärt.', exEn: 'A singer from my course explained that to me.' },
    { de: 'Trainerin', art: 'die', gender: 'f', plural: 'Trainerinnen', pos: 'noun', en: 'trainer (f.)', hi: 'प्रशिक्षक (महिला)', ex: 'Meine Trainerin schenkt mir einen Kletterkurs.', exEn: 'My trainer is giving me a climbing course as a gift.' },
    { de: 'verändern', pos: 'verb', en: 'to change', hi: 'बदलना', ex: 'Die Digitalisierung verändert viele Berufe.', exEn: 'Digitisation changes many professions.', conj: { praesens: 'verändert', praeteritum: 'veränderte', perfekt: 'hat verändert' } },
    { de: 'Wissen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'knowledge', hi: 'ज्ञान', ex: 'Der Herzchirurg teilt sein Wissen.', exEn: 'The heart surgeon shares his knowledge.' },
    { de: 'zurückkommen', pos: 'verb', en: 'to return, to call back (separable)', hi: 'वापस आना', ex: 'Ich komme zurück, wenn ich Zeit habe.', exEn: 'I\'ll call back when I have time.', conj: { praesens: 'kommt zurück', praeteritum: 'kam zurück', perfekt: 'ist zurückgekommen' } },
    { de: 'Ärger', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'anger', hi: 'गुस्सा', ex: 'Der Fahrgast hatte großen Ärger.', exEn: 'The passenger was very annoyed.' },
    { de: 'Busfahrerin', art: 'die', gender: 'f', plural: 'Busfahrerinnen', pos: 'noun', en: 'bus driver (f.)', hi: 'बस चालक (महिला)', ex: 'Die Busfahrerin zeigt dem Fahrgast die Fahrkarte.', exEn: 'The bus driver shows the passenger the ticket.' },
    { de: 'Fernfahrer', art: 'der', gender: 'm', plural: 'Fernfahrer', pos: 'noun', en: 'long-distance lorry driver', hi: 'लंबी दूरी का ट्रक चालक', ex: 'Ein Fernfahrer erzählt mir seine Geschichte.', exEn: 'A long-distance lorry driver tells me his story.' },
    { de: 'Herzchirurg', art: 'der', gender: 'm', plural: 'Herzchirurgen', pos: 'noun', en: 'heart surgeon', hi: 'हृदय शल्य चिकित्सक', ex: 'Ich empfehle dir ein Interview mit einem Herzchirurgen.', exEn: 'I recommend an interview with a heart surgeon to you.' },
    { de: 'Telefonkonferenz', art: 'die', gender: 'f', plural: 'Telefonkonferenzen', pos: 'noun', en: 'conference call', hi: 'फ़ोन कॉन्फ्रेंस', ex: 'Der Betrieb schickt mir eine Telefonkonferenz.', exEn: 'The firm sends me a conference call.' },
    { de: 'fest', pos: 'adjective', en: 'fixed', hi: 'निश्चित', ex: 'Wir haben einen festen Termin.', exEn: 'We have a fixed appointment.' },
    { de: 'Medizinerin', art: 'die', gender: 'f', plural: 'Medizinerinnen', pos: 'noun', en: 'doctor (f.)', hi: 'डॉक्टर (महिला)', ex: 'Die Medizinerin erklärt den Studenten die Diagnose.', exEn: 'The doctor explains the diagnosis to the students.' },
    { de: 'Tiertrainerin', art: 'die', gender: 'f', plural: 'Tiertrainerinnen', pos: 'noun', en: 'animal trainer (f.)', hi: 'पशु प्रशिक्षक (महिला)', ex: 'Meine Nachbarin ist eine Tiertrainerin.', exEn: 'My neighbour is an animal trainer.' }
  ],

  // ---------- Verben mit Dativ und Akkusativ (rule cards) ----------
  grammar: [
    {
      title: 'The core verbs and the pattern',
      goldenRule: 'With two nouns the usual order is person first, thing second: <b>Dativ \u2192 Akkusativ</b>.',
      formula: [
        'Ich gebe  <b>meinem Freund</b> (Dat.)  <b>ein Buch</b> (Akk.).',
        '          \u2191 kaun paata hai        \u2191 kya milta hai'
      ],
      memoryTrick: 'Do sawaal poochho: <b>kisko?</b> \u2192 Dativ. <b>kya?</b> \u2192 Akkusativ. English bhi wahi karti hai: "give <b>him</b> the book".',
      body: [
        'These verbs always take two objects: a Dativ object (who receives) and an Akkusativ object (what is received). The pattern never changes: Subjekt → Verb → Dativ → Akkusativ.'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['<span class="de">geben</span>', 'to give', '<span class="de">Ich gebe meinem Freund ein Buch.</span>'],
          ['<span class="de">schenken</span>', 'to give (as a gift)', '<span class="de">Sie schenkt ihm ein Album.</span>'],
          ['<span class="de">zeigen</span>', 'to show', '<span class="de">Er zeigt ihr die Hausaufgabe.</span>'],
          ['<span class="de">erklären</span>', 'to explain', '<span class="de">Ich erkläre dir die Grammatik.</span>'],
          ['<span class="de">bringen / schicken / senden</span>', 'to bring / send', '<span class="de">Wir schicken unserer Mutter eine Nachricht.</span>'],
          ['<span class="de">verkaufen / leihen</span>', 'to sell / to lend', '<span class="de">Ich leihe dir mein Auto.</span>'],
          ['<span class="de">empfehlen / erzählen / schreiben</span>', 'to recommend / tell / write', '<span class="de">Ich erzähle dir eine Geschichte.</span>']
        ]
      },
      note: 'Ask two questions for every one of these verbs: <strong>Who receives?</strong> → Dativ. <strong>What is received?</strong> → Akkusativ.',
      hinglish: 'In verbs ke saath usually do cheezein aati hain: <b>kisko?</b> \u2014 yaani Dativ, aur <b>kya?</b> \u2014 yaani Akkusativ. Normal sentence mein aksar order hota hai: Subjekt \u2192 Verb \u2192 Dativ \u2192 Akkusativ. Aage dekhoge ki pronouns aane par yeh order badal jaata hai.'
    },
    {
      title: 'Word order with two nouns',
      body: [
        'When both objects are nouns, the Dativ object (the person) comes before the Akkusativ object (the thing).'
      ],
      table: {
        head: ['Sentence', 'Dativ (who)', 'Akkusativ (what)'],
        rows: [
          ['<span class="de">Ich gebe <span class="r-dativ">meinem Bruder</span> <span class="r-akkusativ">das Geld</span>.</span>', 'meinem Bruder', 'das Geld'],
          ['<span class="de">Sie zeigt <span class="r-dativ">ihrem Lehrer</span> <span class="r-akkusativ">die Hausaufgabe</span>.</span>', 'ihrem Lehrer', 'die Hausaufgabe'],
          ['<span class="de">Wir schicken <span class="r-dativ">unserer Mutter</span> <span class="r-akkusativ">eine Nachricht</span>.</span>', 'unserer Mutter', 'eine Nachricht']
        ]
      },
      note: 'The receiver is always in the Dativ — never Nominativ or Akkusativ: <span class="de">meinem Bruder</span>, not <span class="de strike">meinen Bruder</span>.',
      hinglish: 'Jab dono objects noun hote hain, to insaan pehle aata hai (Dativ) aur cheez baad mein (Akkusativ). In verbs ke saath jo cheez paata hai, woh Dativ mein hi rehta hai.'
    },
    {
      title: 'Word order with pronouns',
      goldenRule: 'Both objects as pronouns? The order <b>flips</b>: Akkusativ before Dativ.',
      formula: [
        'nouns:     Ich gebe <b>ihm</b> das Buch.',
        'pronouns:  Ich gebe <b>es ihm</b>.        \u2190 Akk. first'
      ],
      why: 'German puts the shortest, most familiar information first. A pronoun is shorter than a noun, and <i>es</i> is the shortest of all \u2014 so it moves to the front of the pair.',
      memoryTrick: 'Noun ke saath: <b>insaan pehle</b>. Dono pronoun: <b>cheez pehle</b> (es ihm). Aur ek noun + ek pronoun ho to <b>pronoun usually pehle</b> aata hai.',
      recap: [
        'Two nouns \u2192 <b>Dativ</b> then <b>Akkusativ</b>.',
        'Two pronouns \u2192 <b>Akkusativ</b> then <b>Dativ</b>.',
        'Mixed \u2192 the pronoun comes first, whatever its case.'
      ],
      body: [
        'Once both objects turn into pronouns, the order flips: the Akkusativ pronoun comes before the Dativ pronoun.'
      ],
      table: {
        head: ['With a noun for the thing', 'Both objects as pronouns'],
        rows: [
          ['<span class="de">Ich gebe ihm das Buch.</span>', '<span class="de">Ich gebe <span class="r-akkusativ">es</span> <span class="r-dativ">ihm</span>.</span>'],
          ['<span class="de">Sie zeigt ihm die Fotos.</span>', '<span class="de">Sie zeigt <span class="r-akkusativ">sie</span> <span class="r-dativ">ihm</span>.</span>'],
          ['<span class="de">Kannst du mir das Buch geben?</span>', '<span class="de">Kannst du <span class="r-akkusativ">es</span> <span class="r-dativ">mir</span> geben?</span>']
        ]
      },
      note: 'With one noun and one pronoun, the pronoun always comes first, regardless of case: <span class="de">Ich gebe <b>ihm</b> das Buch.</span> / <span class="de">Ich gebe <b>es</b> meinem Freund.</span>',
      hinglish: 'Jab dono objects pronoun ban jaate hain, to order badal jaata hai \u2014 Akkusativ pronoun pehle aata hai aur Dativ pronoun baad mein. Aur agar ek noun aur ek pronoun ho, to pronoun aksar pehle aata hai, chahe uska case koi bhi ho.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Ich gebe meinen Freund ein Buch.</span> → <span class="de">Ich gebe meinem Freund ein Buch.</span> — the receiver must be Dativ (meinem), not Akkusativ (meinen).',
        '<span class="de strike">Ich erkläre die Grammatik den Studenten.</span> → <span class="de">Ich erkläre den Studenten die Grammatik.</span> — with two nouns, Dativ (the person) comes first.',
        '<span class="de strike">Ich schicke mein Vater eine Nachricht.</span> → <span class="de">Ich schicke meinem Vater eine Nachricht.</span> — Vater needs the Dativ ending on the possessive: meinem.',
        '<span class="de strike">Ich gebe ihm ihn.</span> → <span class="de">Ich gebe es ihm.</span> — with two pronouns, Akkusativ comes before Dativ, and check the pronoun\'s gender (es for das Buch, not ihn).'
      ],
      hinglish: 'Common galtiyaan: receiver Dativ mein hona chahiye; do noun ho toh Dativ pehle; possessive ko bhi Dativ ending do; do pronoun ho toh Akkusativ pehle aata hai.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'Two questions, every time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Who receives something?', '→ <span class="de r-dativ">Dativ</span>'],
          ['What is received/given?', '→ <span class="de r-akkusativ">Akkusativ</span>'],
          ['Both objects are nouns?', 'Dativ before Akkusativ'],
          ['Both objects are pronouns?', 'Akkusativ before Dativ'],
          ['One noun, one pronoun?', 'the pronoun goes first']
        ]
      },
      hinglish: 'Do sawaal se kaam ho jaata hai: kisko mil raha hai (Dativ) aur kya mil raha hai (Akkusativ). Uske baad order dekho \u2014 dono noun hain to Dativ pehle, dono pronoun hain to Akkusativ pehle, aur ek noun ek pronoun ho to pronoun pehle.'
    }
  ],

  // ---------- Reading passage (WhatsApp chat after the party, clickable) ----------
  reading: {
    title: 'Nach der Feier',
    titleEn: 'After the party',
    tokens: [
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Lieber', role: 'r-adjective', en: 'dear', hi: 'प्रिय', pron: 'LEE-ber', type: 'Adjective' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ',', plain: true },
      { w: 'alles', role: 'r-object', en: 'all', hi: 'सब', pron: 'A-les', type: 'Pronoun' },
      { w: 'Gute', role: 'r-object', en: 'the best', hi: 'शुभकामनाएँ', pron: 'GOO-tuh', type: 'Adjective (noun use)', why: '"Alles Gute!" — the fixed birthday phrase.', ex: 'Alles Gute zum Geburtstag!', exEn: 'All the best for your birthday!' },
      { w: 'nachträglich', role: 'r-adverb', en: 'belatedly', hi: 'देरी से', pron: 'NAHKH-trayk-likh', type: 'Adverb' },
      { w: '!', plain: true },
      { w: 'Wie', role: 'r-frage', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein (Präteritum)' },
      { w: 'deine', role: 'r-subject', en: 'your', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessivartikel' },
      { w: 'Feier', role: 'r-subject', en: 'party', hi: 'पार्टी', pron: 'FY-er', type: 'Noun · fem.' },
      { w: '?', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Total', role: 'r-adverb', en: 'totally', hi: 'बिल्कुल', pron: 'to-TAHL', type: 'Adverb' },
      { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छी', pron: 'shern', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
      { w: '!', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Perfekt)' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ', why: 'The receiver of schenken always stands in the Dativ (this chapter).', ex: 'Er hat mir ein Album geschenkt.', exEn: 'He gave me an album as a gift.' },
      { w: 'ein', role: 'r-akkusativ', en: 'an', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Album', role: 'r-akkusativ', en: 'album', hi: 'एल्बम', pron: 'AL-bum', type: 'Noun · neut.', why: 'das Album (this chapter). Dativ (mir) before Akkusativ (ein Album).', ex: 'Ich schenke dir ein Album.', exEn: 'I am giving you an album.' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition + dat.' },
      { w: 'alten', role: 'r-adjective', en: 'old', hi: 'पुराने', pron: 'AL-ten', type: 'Adjective' },
      { w: 'Fotos', role: 'r-object', en: 'photos', hi: 'फ़ोटो', pron: 'FOH-tohs', type: 'Noun · plural' },
      { w: 'geschenkt', role: 'r-verb', en: 'given (as a gift)', hi: 'भेंट किया', pron: 'guh-SHENKT', type: 'Partizip II · schenken' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Wie', role: 'r-frage', en: 'how', hi: 'कितना', pron: 'vee', type: 'Question word' },
      { w: 'süß', role: 'r-adjective', en: 'sweet', hi: 'प्यारा', pron: 'zoos', type: 'Adjective' },
      { w: '!', plain: true },
      { w: 'Schickst', role: 'r-verb', en: 'do (you) send', hi: 'भेजोगे', pron: 'SHIKST', type: 'Verb · schicken (du)', why: 'schicken + Dativ + Akkusativ (this chapter).', ex: 'Schickst du mir ein Foto?', exEn: 'Will you send me a photo?' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'ein', role: 'r-akkusativ', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Foto', role: 'r-akkusativ', en: 'photo', hi: 'फ़ोटो', pron: 'FOH-toh', type: 'Noun · neut.' },
      { w: 'davon', role: 'r-adverb', en: 'of it', hi: 'उसका', pron: 'da-FON', type: 'Pronominaladverb' },
      { w: '?', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'ज़रूर', pron: 'klar', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'schicke', role: 'r-verb', en: 'send', hi: 'भेजता हूँ', pron: 'SHI-kuh', type: 'Verb · schicken (ich)' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · Akk.', why: 'Both objects are now pronouns, so Akkusativ (es) comes before Dativ (dir) — the order flips (this chapter).', ex: 'Ich schicke es dir gleich.', exEn: 'I\u2019ll send it to you right away.' },
      { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · Dativ' },
      { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ',', plain: true },
      { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessivartikel' },
      { w: 'Trainerin', role: 'r-subject', en: 'trainer (f.)', hi: 'प्रशिक्षक', pron: 'TRAY-ner-in', type: 'Noun · fem.', why: 'die Trainerin (this chapter).', ex: 'Meine Trainerin empfiehlt mir einen Kletterkurs.', exEn: 'My trainer recommends a climbing course to me.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Perfekt)' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ' },
      { w: 'einen', role: 'r-akkusativ', en: 'a', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Kletterkurs', role: 'r-akkusativ', en: 'climbing course', hi: 'चढ़ाई कोर्स', pron: 'KLET-ter-koors', type: 'Noun · masc.', why: 'der Kletterkurs (this chapter). Dativ (mir) before Akkusativ (einen Kletterkurs).', ex: 'einen Kletterkurs empfehlen', exEn: 'to recommend a climbing course' },
      { w: 'empfohlen', role: 'r-verb', en: 'recommended', hi: 'सुझाया', pron: 'emp-FOH-len', type: 'Partizip II · empfehlen' },
      { w: '.', plain: true },
      { w: 'Den', role: 'r-akkusativ', en: 'that (masc. acc.)', hi: 'वह', pron: 'dayn', type: 'Pronoun · Akk.' },
      { w: 'würde', role: 'r-modalverb', en: 'would', hi: 'चाहूँगा', pron: 'VÜR-duh', type: 'Konjunktiv II · werden' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · Dativ', why: 'Both objects are pronouns: Akkusativ (den) before Dativ (dir).', ex: 'Den würde ich dir empfehlen.', exEn: 'I would recommend that to you.' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'empfehlen', role: 'r-verb', en: 'recommend', hi: 'सुझाना', pron: 'emp-FAY-len', type: 'Infinitive' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ach', role: 'r-subject', en: 'oh', hi: 'अरे', pron: 'akh', type: 'Interjection' },
      { w: 'interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
      { w: '!', plain: true },
      { w: 'Kannst', role: 'r-verb', en: 'can', hi: 'सकते हो', pron: 'kanst', type: 'Modalverb · können (du)' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article · acc.' },
      { w: 'Adresse', role: 'r-akkusativ', en: 'address', hi: 'पता', pron: 'a-DRE-suh', type: 'Noun · fem.' },
      { w: 'schicken', role: 'r-verb', en: 'send', hi: 'भेजना', pron: 'SHI-ken', type: 'Infinitive' },
      { w: '?', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'schicke', role: 'r-verb', en: 'send', hi: 'भेजता हूँ', pron: 'SHI-kuh', type: 'Verb · schicken (ich)' },
      { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'इसे', pron: 'zee', type: 'Pronoun · Akk.', why: 'die Adresse → sie. Both pronouns: Akkusativ (sie) before Dativ (dir).', ex: 'Ich schicke sie dir sofort.', exEn: 'I\u2019ll send it to you right away.' },
      { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · Dativ' },
      { w: 'sofort', role: 'r-adverb', en: 'right away', hi: 'तुरंत', pron: 'zoh-FORT', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AH-na', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Perfekt', role: 'r-adjective', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'तो', pron: 'dan', type: 'Adverb' },
      { w: 'leihe', role: 'r-verb', en: 'lend', hi: 'उधार देती हूँ', pron: 'LY-uh', type: 'Verb · leihen (ich)', why: 'leihen + Dativ + Akkusativ (this chapter).', ex: 'Ich leihe dir mein Kletterseil.', exEn: 'I\u2019ll lend you my climbing rope.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · Dativ' },
      { w: 'mein', role: 'r-akkusativ', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessivartikel' },
      { w: 'altes', role: 'r-adjective', en: 'old', hi: 'पुराना', pron: 'AL-tes', type: 'Adjective' },
      { w: 'Kletterseil', role: 'r-akkusativ', en: 'climbing rope', hi: 'चढ़ाई की रस्सी', pron: 'KLET-ter-zyl', type: 'Noun · neut.', why: 'Dativ (dir) before Akkusativ (mein altes Kletterseil) — both are nouns/possessives, not pronouns.', ex: 'Ich leihe dir mein Kletterseil.', exEn: 'I\u2019ll lend you my climbing rope.' },
      { w: ',', plain: true },
      { w: 'falls', role: 'r-conjunction', en: 'in case', hi: 'अगर', pron: 'fals', type: 'Conjunction' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'इसे', pron: 'es', type: 'Pronoun · Akk.' },
      { w: 'brauchst', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'browkhst', type: 'Verb · brauchen (du)' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ':', plain: true },
      { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
      { w: 'euch', role: 'r-dativ', en: 'to you (both)', hi: 'तुम दोनों को', pron: 'oykh', type: 'Pronoun · Dativ' },
      { w: 'beiden', role: 'r-dativ', en: 'both', hi: 'दोनों', pron: 'BY-den', type: 'Pronoun · Dativ' },
      { w: '!', plain: true },
      { w: 'Ihr', role: 'r-subject', en: 'you (both)', hi: 'तुम', pron: 'eer', type: 'Pronoun' },
      { w: 'seid', role: 'r-verb', en: 'are', hi: 'हो', pron: 'zyt', type: 'Verb · sein (ihr)' },
      { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Besten', role: 'r-object', en: 'best', hi: 'सबसे अच्छे', pron: 'BES-ten', type: 'Adjective (noun use)' },
      { w: '!', plain: true }
    ],
    translation: 'Anna: Dear Max, happy belated birthday! How was your party? — Max: Really nice, thanks! Rohan gave me an album with old photos as a gift. — Anna: How sweet! Will you also send me a photo of it? — Max: Sure, I\u2019ll send it to you right away. — Rohan: Max, my trainer recommended a climbing course to me. I\u2019d recommend it to you too. — Max: Oh, interesting! Can you send me the address? — Rohan: Yes, I\u2019ll send it to you right away. — Anna: Perfect. Then I\u2019ll lend you my old climbing rope, in case you need it. — Max: Thanks, both of you! You\u2019re the best.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_021_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Karla, ich schenke dir dieses Buch zum Geburtstag.', en: 'Karla, I\'m giving you this book for your birthday.' },
      { id: 'A2_021_L002', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Oh, danke! Zeigst du mir auch die Fotos vom letzten Sommer?', en: 'Oh, thanks! Will you also show me the photos from last summer?' },
      { id: 'A2_021_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, ich schicke sie dir heute Abend.', en: 'Sure, I\'ll send them to you tonight.' },
      { id: 'A2_021_L004', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Perfekt, ich freue mich schon!', en: 'Perfect, I\'m already looking forward to it!' }
    ],
    transcript: 'Karla, ich schenke dir dieses Buch zum Geburtstag. Oh, danke! Zeigst du mir auch die Fotos vom letzten Sommer? Klar, ich schicke sie dir heute Abend. Perfekt, ich freue mich schon!',
    translation: 'Karla, I\'m giving you this book for your birthday. Oh, thanks! Will you also show me the photos from last summer? Sure, I\'ll send them to you tonight. Perfect, I\'m already looking forward to it!',
    tokens: [
      { w: 'Karla' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'schenke' },
      { w: 'dir' },
      { w: 'dieses' },
      { w: 'Buch' },
      { w: 'zum' },
      { w: 'Geburtstag' },
      { w: '.', plain: true },
      { w: 'Oh' },
      { w: ',', plain: true },
      { w: 'danke' },
      { w: '!', plain: true },
      { w: 'Zeigst' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'auch' },
      { w: 'die' },
      { w: 'Fotos' },
      { w: 'vom' },
      { w: 'letzten' },
      { w: 'Sommer' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'schicke' },
      { w: 'sie' },
      { w: 'dir' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'freue' },
      { w: 'mich' },
      { w: 'schon' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was gibt Timo Karla?', qEn: 'What does Timo give Karla?', options: ['ein Foto', 'ein Buch', 'eine Karte', 'eine Blume'], optionsEn: ['a photo', 'a book', 'a card', 'a flower'], answer: 1,
        explain: '"Ich schenke dir dieses Buch."' },
      { q: 'Wann schickt Timo die Fotos?', qEn: 'When will Timo send the photos?', options: ['morgen früh', 'heute Abend', 'nächste Woche', 'jetzt sofort'], optionsEn: ['tomorrow morning', 'this evening', 'next week', 'right now'], answer: 1,
        explain: '"Ich schicke sie dir heute Abend."' }
    ]
  },

  speaking: [
    { task: "Dein Freund hat Geburtstag. Was schenkst du ihm?", taskEn: "It's your friend's birthday. What are you giving him?", de: "Ich schenke ihm ein Album von seinem Lieblingssänger.", en: "I'm giving him an album by his favourite singer." },
    { task: "Deine Kurspartnerin versteht die Aufgabe nicht. Was machst du?", taskEn: "Your course partner doesn't understand the task. What do you do?", de: "Ich erkläre ihr die Aufgabe noch einmal genau.", en: "I'll explain the task to her again carefully." },
    { task: "Am Fahrkartenschalter fragt ein Fahrgast nach dem Weg.", taskEn: "At the ticket counter a passenger asks the way.", de: "Ich zeige ihm den Weg und gebe ihm einen Plan.", en: "I'll show him the way and give him a map." },
    { task: "Deine Trainerin fragt nach deinen Zielen. Was erzählst du ihr?", taskEn: "Your coach asks about your goals. What do you tell her?", de: "Ich erzähle ihr von meinem Wissen und meinen Plänen.", en: "I'll tell her about my knowledge and my plans." },
    { task: "Dein Bruder braucht dein Auto. Was sagst du?", taskEn: "Your brother needs your car. What do you say?", de: "Ich leihe ihm den Lastwagen, aber nicht das Auto.", en: "I'll lend him the lorry, but not the car." },
    { task: "Ein Kollege fragt nach einem guten Betrieb. Berate ihn.", taskEn: "A colleague asks about a good company. Advise him.", de: "Ich empfehle ihm diesen Betrieb. Er berät die Leute gut.", en: "I recommend this company to him. They advise people well." },
    { task: "Dein Freund ruft nicht zurück. Was sagst du seiner Schwester?", taskEn: "Your friend isn't calling back. What do you tell his sister?", de: "Ich habe ihm eine Nachricht auf den Anrufbeantworter gesprochen.", en: "I left him a message on his answering machine." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short dialogue or email (six sentences) about a gift exchange, using at least four two-object verbs (geben, schenken, zeigen, erklären, schicken, leihen, empfehlen, erzählen). Use at least one sentence with two noun objects and one sentence with a pronoun object. Try this chapter\'s words: der Betrieb, lebenslang, verändern, fantastisch.',
    starters: ['Ich schenke …', 'Kannst du mir … zeigen?', 'Ich empfehle dir …', 'Sie schickt ihm …'],
    placeholder: 'Liebe Anna, ich schenke meinem Bruder ein Buch. Kannst du mir ein gutes Buch empfehlen? …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct sentence: "I am giving my friend a book."',
      options: ['Ich gebe meinen Freund ein Buch.', 'Ich gebe meinem Freund ein Buch.', 'Ich gebe mein Freund ein Buch.', 'Ich gebe meinem Freund einen Buch.'],
      answer: 1,
      explain: 'The receiver (Freund) must be Dativ: meinem Freund. Buch is neuter Akkusativ: ein Buch.'
    },
    gap: {
      sentence: ['Ich zeige ', ' das Foto von der Feier.'],
      gaps: [ { answer: 'ihm', accepts: ['ihm', 'ihr'] } ],
      explain: 'The receiver of zeigen is Dativ — ihm (to him) or ihr (to her).'
    },
    match: {
      q: 'Match each sentence to its correct pronoun version.',
      pairs: [
        { noun: 'Ich gebe ihm das Buch.', art: 'Ich gebe es ihm.' },
        { noun: 'Sie zeigt ihrem Lehrer die Hausaufgabe.', art: 'Sie zeigt sie ihm.' },
        { noun: 'Wir schicken unserer Mutter eine Nachricht.', art: 'Wir schicken sie ihr.' },
        { noun: 'Er erklärt den Studenten die Grammatik.', art: 'Er erklärt sie ihnen.' },
        { noun: 'Kannst du mir das sagen?', art: 'Kannst du es mir sagen?' }
      ]
    },
    builder: {
      target: 'Build: "Can you show it to me?"',
      bank: ['Kannst', 'du', 'es', 'mir', 'zeigen', '?'],
      answer: ['Kannst', 'du', 'es', 'mir', 'zeigen', '?'],
      roles: { 'Kannst': 'r-verb', 'du': 'r-subject', 'es': 'r-akkusativ', 'mir': 'r-dativ', 'zeigen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich gebe ___ Freund ein Buch." (Dativ)', options: ['mein', 'meinen', 'meinem'], answer: 2,
      explain: 'The receiver is always Dativ: meinem Freund.' },
    { q: 'Which order is correct with two noun objects?', options: ['Akkusativ before Dativ', 'Dativ before Akkusativ', 'Either order works'], answer: 1,
      explain: 'With two nouns, Dativ (the person) comes before Akkusativ (the thing).' },
    { q: 'Complete: "Ich gebe ___ ihm." (both objects are pronouns)', options: ['er', 'es', 'ihn'], answer: 1,
      explain: 'Das Buch → es. With two pronouns, Akkusativ comes before Dativ: Ich gebe es ihm.' },
    { q: 'Which sentence is correct?', options: ['Ich schicke mein Vater eine Nachricht.', 'Ich schicke meinem Vater eine Nachricht.', 'Ich schicke meinen Vater eine Nachricht.'], answer: 1,
      explain: 'Vater is the receiver, so it needs the Dativ ending: meinem Vater.' },
    { q: 'With one noun and one pronoun object, what comes first?', options: ['Always the noun', 'Always the pronoun', 'Whichever is Dativ'], answer: 1,
      explain: 'The pronoun always comes first, regardless of its case: Ich gebe ihm das Buch. / Ich gebe es meinem Freund.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dativ', html: 'Two-object verbs (<span class="de">geben, schenken, zeigen, erklären, schicken, leihen, empfehlen …</span>) always need a <b>Dativ</b> receiver and an <b>Akkusativ</b> thing.' },
    { c: 'r-dativ', html: 'With two nouns: <span class="de r-dativ">Dativ</span> before <span class="de r-akkusativ">Akkusativ</span> — <span class="de">Ich gebe meinem Freund ein Buch.</span>' },
    { c: 'r-akkusativ', html: 'With two pronouns, the order flips: <span class="de r-akkusativ">Akkusativ</span> before <span class="de r-dativ">Dativ</span> — <span class="de">Ich gebe es ihm.</span>' }
  ],
  revisionTips: [
    'Ask "who receives?" (Dativ) and "what is received?" (Akkusativ) for every two-object verb.',
    'Two nouns → Dativ before Akkusativ. Two pronouns → Akkusativ before Dativ. One of each → pronoun first.',
    'The receiver is never Nominativ or plain Akkusativ — always Dativ, even for names and possessives.'
  ]
};

window.CHAPTER = CHAPTER;
