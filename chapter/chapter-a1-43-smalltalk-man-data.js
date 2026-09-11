/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 5 · Chapter 43
   "Small Talk & man"  (small talk + the impersonal pronoun man)
   Vocabulary source: uploaded chapter-43 word list (105 words).
   Theme = a café chat about weather, the weekend & Berlin life.
   Recycles Ch1–42. NOTE: content only — existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-43-smalltalk-man',
  phase: 'A1 · Phase 5',
  number: 43,
  title: 'Small Talk & man',
  titleEn: 'Small Talk & man',
  description: 'The glue of everyday conversation. Learn the weather words and small-talk phrases that open and carry a chat — and the impersonal pronoun man ("one / you / people in general"), which always takes the er/sie/es verb form. In Deutschland trinkt man viel Kaffee.',
  xp: 180,
  time: 35,
  difficulty: 'Beginner',
  nextChapter: { number: 44, title: 'Imperativ & Modalverben 2', titleEn: 'Commands · dürfen & sollen' , href: 'chapter-a1-44-imperativ-modal2.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A rainy afternoon in the café. While they wait out the weather, Yvonne and Georg drift into easy small talk \u2014 how\u2019s it going, what\u2019s the weekend look like, what\u2019s Berlin like \u2014 and Yvonne keeps slipping in sentences with man to explain how things are done in Germany.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear man + the er/sie/es verb form in real speech'
    ],
    scene: 'Im Caf\u00e9 \u2014 ein verregneter Nachmittag, Berlin',
    femaleSpeakers: ['Yvonne'],
    dialogue: [
      { speaker: 'Yvonne', tokens: [
        { w: 'Schrecklich', role: 'r-adjective', en: 'terrible', hi: 'भयानक', pron: 'SHREK-likh', type: 'Adjective', why: 'schrecklich = terrible (this chapter).', ex: 'Das Wetter ist schrecklich!', exEn: 'The weather is terrible!' },
        { w: 'Wetter', role: 'r-subject', en: 'weather', hi: 'मौसम', pron: 'VE-ter', type: 'Noun · neut.' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'right', hi: 'ना', pron: 'OH-der', type: 'Tag question' },
        { w: '?', plain: true }
      ], en: 'Terrible weather today, right?', hi: 'Aaj mausam bahut bura hai, na?' },
      { speaker: 'Georg', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'man', role: 'r-subject', en: 'one', hi: 'आदमी', pron: 'mahn', type: 'Pronoun · impersonal', why: 'man = one/people in general (this chapter).', ex: 'Man braucht einen Schirm.', exEn: 'One needs an umbrella.' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'चाहिए', pron: 'browkht', type: 'Verb · brauchen (man)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'einen', role: 'r-akkusativ', en: 'an (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Schirm', role: 'r-akkusativ', en: 'umbrella', hi: 'छाता', pron: 'shirm', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes, one needs an umbrella today.', hi: 'Haan, aaj chhata chahiye.' },
      { speaker: 'Yvonne', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'regnet', role: 'r-verb', en: 'rains', hi: 'बारिश हो रही है', pron: 'RAYK-net', type: 'Verb · regnen', why: 'regnen = to rain (this chapter).', ex: 'Es regnet.', exEn: 'It is raining.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zyte', type: 'Preposition + dative', why: 'seit + dative names a starting point in time (recycled, Ch37).', ex: 'seit dem Morgen', exEn: 'since morning' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Morgen', role: 'r-dativ', en: 'morning (dat.)', hi: 'सुबह से', pron: 'MOR-gen', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Exactly! It has been raining since the morning.', hi: 'Bilkul! Subah se baarish ho rahi hai.' },
      { speaker: 'Georg', side: 'right', tokens: [
        { w: 'Man', role: 'r-subject', en: 'one', hi: 'लोग', pron: 'mahn', type: 'Pronoun · impersonal' },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहते हैं', pron: 'zahkt', type: 'Verb · sagen (man)' },
        { w: ',', plain: true },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'scheint', role: 'r-verb', en: 'shines', hi: 'चमकेगा', pron: 'SHYNT', type: 'Verb · scheinen', why: 'scheinen = to shine (this chapter).', ex: 'Die Sonne scheint.', exEn: 'The sun shines.' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Sonne', role: 'r-subject', en: 'sun', hi: 'सूरज', pron: 'ZO-nuh', type: 'Noun · fem.' },
        { w: 'wieder', role: 'r-adverb', en: 'again', hi: 'फिर से', pron: 'VEE-der', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'They say tomorrow the sun shines again.', hi: 'Kehte hain, kal phir dhoop niklegi.' },
      { speaker: 'Yvonne', tokens: [
        { w: 'Zum', role: 'r-preposition', en: 'fortunately', hi: 'आख़िर', pron: 'tsoom', type: 'Fixed phrase' },
        { w: 'Glück', role: 'r-akkusativ', en: 'luck', hi: 'किस्मत', pron: 'glük', type: 'Noun · neut.', why: 'zum Glück = fortunately (this chapter).', ex: 'Zum Glück!', exEn: 'Fortunately!' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'kein', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Negation' },
        { w: 'Regen', role: 'r-akkusativ', en: 'rain', hi: 'बारिश', pron: 'RAY-gen', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Fortunately! I do not like rain.', hi: 'Aakhir! Mujhe baarish pasand nahi.' },
      { speaker: 'Georg', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'by', type: 'Preposition + dative' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc./neut. dat.)', hi: 'ऐसे', pron: 'DEE-zem', type: 'Determiner · dative' },
        { w: 'Wetter', role: 'r-dativ', en: 'weather (dat.)', hi: 'मौसम', pron: 'VE-ter', type: 'Noun · neut. dat.' },
        { w: 'bleibe', role: 'r-verb', en: 'stay', hi: 'रहता हूँ', pron: 'BLY-buh', type: 'Verb · bleiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'में', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: '.', plain: true }
      ], en: 'Me neither. But in this weather I would rather stay at home.', hi: 'Main bhi nahi. Par aise mausam mein main ghar par rehna pasand karta hoon.' },
      { speaker: 'Yvonne', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Da', role: 'r-adverb', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb' },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आ रही है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'gerade', role: 'r-adverb', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'unser', role: 'r-subject', en: 'our', hi: 'हमारी', pron: 'UN-zer', type: 'Possessive' },
        { w: 'Bus', role: 'r-subject', en: 'bus', hi: 'बस', pron: 'bus', type: 'Noun · masc.' },
        { w: '!', plain: true }
      ], en: 'Good idea! There right now comes our bus!', hi: 'Achha vichaar! Woh dekho, hamaari bus aa rahi hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German conversation runs on two things: <strong>small talk</strong> (weather, weekend, how-are-you) and the little word <span class="de r-subject">man</span>. <span class="de">man</span> means "one / you / people in general" \u2014 NOT <span class="de">Mann</span> (a man, two n\u2019s). It always takes the <strong>er/sie/es verb form</strong>: <span class="de">Man trinkt, man fährt, man kann</span>. Use it for customs and general truths: <span class="de">In Deutschland trinkt man viel Kaffee.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is SMALL TALK & the impersonal pronoun MAN: weather and conversation phrases, plus "man" (one / you / people in general). ' +
    'The learner wrote sentences with man and small talk below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "man" = one / you / people in general (impersonal). It is ALWAYS the subject and ALWAYS takes the 3rd-person singular (er/sie/es) verb form: "man trinkt", "man fährt", "man kann", "man muss".\n' +
    '- "man" (one) is NOT "Mann" (a man, capitalised, two n\u2019s). Never write the pronoun with a capital M or double n.\n' +
    '- man stays in the nominative as the subject; do not give it plural verb endings ("man trinken" is wrong → "man trinkt").\n' +
    '- Weather uses impersonal "es": "Es regnet", "Es schneit", "Die Sonne scheint", "Es ist kalt/heiß/windig/sonnig/bewölkt".\n' +
    '- Small-talk phrases: "Wie geht\u2019s?", "Alles gut?", "Was gibt\u2019s Neues?", "Schönes Wetter heute!", "Was machst du am Wochenende?", reactions "Echt?", "Wirklich?", "Das klingt interessant.", closings "Bis später!", "Viel Spaß!".\n' +
    '- Verb-second rule still holds: a front phrase keeps the verb second ("In Deutschland trinkt man …").\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>man check:</b> one sentence on whether man took the er/sie/es verb form (and is not "Mann").</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — man takes the er/sie/es form and your small talk flows. On to Goethe Mini 5.',
    mid: 'Good. Re-read the man card and the small-talk phrases once, then continue.',
    low: 'Worth another pass — remember man ≠ Mann and always uses the er/sie/es verb form, then retake.'
  },

  parserSentence: [
    { w: 'In', role: 'r-preposition' }, { w: 'Deutschland', role: 'r-place' },
    { w: 'trinkt', role: 'r-verb' }, { w: 'man', role: 'r-subject' },
    { w: 'viel', role: 'r-object' }, { w: 'Kaffee', role: 'r-object' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'Meet small talk and the impersonal pronoun man.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A rainy café chat — weather, weekend, and man for German customs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn man, the weather words, and the small-talk phrases.' },
    { id: 'grammar',    label: 'Small Talk & man', tag: 'core',
      objective: 'Master man (er/sie/es form), weather with es, and conversation phrases.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a small-talk text full of man and weather, and tap any word.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a café conversation and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Greet, talk weather and weekend, and make general statements with man.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write man sentences and a short small-talk dialogue.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill man verb forms and small-talk phrases with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'man, the weather words and small-talk phrases with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'man sentence drills, small-talk completion, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'man (er/sie/es form), weather with es, conversation starters, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'man trinkt / fährt / kann', text: 'Use man with the er/sie/es form' },
    { de: 'man ≠ Mann', text: 'Tell "one" from "a man"' },
    { de: 'Es regnet / Die Sonne scheint', text: 'Talk about the weather' },
    { de: 'Wie geht\u2019s? / Echt?', text: 'Open and react in small talk' },
    { de: 'In Deutschland trinkt man …', text: 'Describe customs and habits' }
  ],

  // ---------- Vocabulary (105 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Wetter', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'weather', hi: 'मौसम', ex: 'Wie ist das Wetter heute?', exEn: 'What\u2019s the weather like today?' },
    { de: 'Regen', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'rain', hi: 'बारिश', ex: 'Der Regen ist stark.', exEn: 'The rain is heavy.' },
    { de: 'Sonne', art: 'die', gender: 'f', plural: 'Sonnen', pos: 'noun', en: 'sun', hi: 'सूरज', ex: 'Die Sonne scheint.', exEn: 'The sun is shining.' },
    { de: 'man', pos: 'pronoun', en: 'one, you (impersonal)', hi: 'लोग, कोई', ex: 'In Deutschland trinkt man viel Kaffee.', exEn: 'In Germany people drink a lot of coffee.' },
    { de: 'regnen', pos: 'verb', en: 'to rain', hi: 'बारिश होना', ex: 'Es regnet schon wieder.', exEn: 'It\u2019s raining yet again.', conj: { praesens: 'regnet', praeteritum: 'regnete', perfekt: 'hat geregnet' } },
    { de: 'sonnig', pos: 'adjective', en: 'sunny', hi: 'धूप वाला', ex: 'Heute ist es sonnig.', exEn: 'Today it\u2019s sunny.' },
    // ===== Active Support =====
    { de: 'also', pos: 'adverb', en: 'well, so', hi: 'तो', ex: 'Also, was machen wir jetzt?', exEn: 'Well, what do we do now?' },
    { de: 'anders', pos: 'adjective', en: 'different', hi: 'अलग', ex: 'In Indien ist das anders.', exEn: 'In India it\u2019s different.' },
    { de: 'auf jeden Fall', pos: 'phrase', en: 'in any case, definitely', hi: 'हर हाल में', ex: 'Ich komme auf jeden Fall.', exEn: 'I\u2019ll come in any case.' },
    { de: 'bestimmt', pos: 'adverb', en: 'certainly, surely', hi: 'ज़रूर', ex: 'Er kommt bestimmt.', exEn: 'He\u2019ll surely come.' },
    { de: 'bewölkt', pos: 'adjective', en: 'cloudy', hi: 'बादल वाला', ex: 'Heute ist es bewölkt.', exEn: 'Today it\u2019s cloudy.' },
    { de: 'Fernsehen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'television', hi: 'टेलीविज़न', ex: 'Im Fernsehen kommt eine Serie.', exEn: 'There\u2019s a series on TV.' },
    { de: 'Gesprächsthema', art: 'das', gender: 'n', plural: 'Gesprächsthemen', pos: 'noun', en: 'conversation topic', hi: 'बातचीत का विषय', ex: 'Das Wetter ist ein gutes Gesprächsthema.', exEn: 'The weather is a good conversation topic.' },
    { de: 'Leben', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'life', hi: 'जीवन', ex: 'Das Leben in Berlin ist gut.', exEn: 'Life in Berlin is good.' },
    { de: 'Thema', art: 'das', gender: 'n', plural: 'Themen', pos: 'noun', en: 'topic', hi: 'विषय', ex: 'Welches Thema interessiert dich?', exEn: 'Which topic interests you?' },
    { de: 'Berg', art: 'der', gender: 'm', plural: 'Berge', pos: 'noun', en: 'mountain', hi: 'पहाड़', ex: 'Im Süden gibt es Berge.', exEn: 'In the south there are mountains.' },
    { de: 'Grad', art: 'der', gender: 'm', plural: 'Grad', pos: 'noun', en: 'degree', hi: 'डिग्री', ex: 'Es sind zwanzig Grad.', exEn: 'It\u2019s twenty degrees.' },
    { de: 'Nachteil', art: 'der', gender: 'm', plural: 'Nachteile', pos: 'noun', en: 'disadvantage', hi: 'नुक़सान', ex: 'Das ist ein Nachteil.', exEn: 'That\u2019s a disadvantage.' },
    { de: 'Norden', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'north', hi: 'उत्तर', ex: 'Hamburg ist im Norden.', exEn: 'Hamburg is in the north.' },
    { de: 'Osten', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'east', hi: 'पूर्व', ex: 'Berlin ist im Osten.', exEn: 'Berlin is in the east.' },
    { de: 'Schnee', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'snow', hi: 'बर्फ़', ex: 'Im Winter gibt es Schnee.', exEn: 'In winter there is snow.' },
    { de: 'Small Talk', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'small talk', hi: 'हल्की-फुल्की बातचीत', ex: 'Small Talk ist wichtig.', exEn: 'Small talk is important.' },
    { de: 'Süden', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'south', hi: 'दक्षिण', ex: 'München ist im Süden.', exEn: 'Munich is in the south.' },
    { de: 'Traum', art: 'der', gender: 'm', plural: 'Träume', pos: 'noun', en: 'dream', hi: 'सपना', ex: 'Das ist mein Traum.', exEn: 'That\u2019s my dream.' },
    { de: 'Vorschlag', art: 'der', gender: 'm', plural: 'Vorschläge', pos: 'noun', en: 'suggestion', hi: 'सुझाव', ex: 'Ich habe einen Vorschlag.', exEn: 'I have a suggestion.' },
    { de: 'Vorteil', art: 'der', gender: 'm', plural: 'Vorteile', pos: 'noun', en: 'advantage', hi: 'फ़ायदा', ex: 'Das ist ein Vorteil.', exEn: 'That\u2019s an advantage.' },
    { de: 'Westen', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'west', hi: 'पश्चिम', ex: 'Köln ist im Westen.', exEn: 'Cologne is in the west.' },
    { de: 'Wetterbericht', art: 'der', gender: 'm', plural: 'Wetterberichte', pos: 'noun', en: 'weather report', hi: 'मौसम समाचार', ex: 'Der Wetterbericht sagt Regen.', exEn: 'The weather report says rain.' },
    { de: 'Wind', art: 'der', gender: 'm', plural: 'Winde', pos: 'noun', en: 'wind', hi: 'हवा', ex: 'Der Wind ist stark.', exEn: 'The wind is strong.' },
    { de: 'Entscheidung', art: 'die', gender: 'f', plural: 'Entscheidungen', pos: 'noun', en: 'decision', hi: 'निर्णय', ex: 'Das ist eine gute Entscheidung.', exEn: 'That\u2019s a good decision.' },
    { de: 'Geschichte', art: 'die', gender: 'f', plural: 'Geschichten', pos: 'noun', en: 'story; history', hi: 'कहानी', ex: 'Erzähl mir die Geschichte!', exEn: 'Tell me the story!' },
    { de: 'Himmelsrichtung', art: 'die', gender: 'f', plural: 'Himmelsrichtungen', pos: 'noun', en: 'compass direction', hi: 'दिशा', ex: 'Norden ist eine Himmelsrichtung.', exEn: 'North is a compass direction.' },
    { de: 'Kultur', art: 'die', gender: 'f', plural: 'Kulturen', pos: 'noun', en: 'culture', hi: 'संस्कृति', ex: 'Die Kultur ist interessant.', exEn: 'The culture is interesting.' },
    { de: 'Kälte', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'the cold', hi: 'ठंड', ex: 'Die Kälte ist schlimm.', exEn: 'The cold is bad.' },
    { de: 'Landschaft', art: 'die', gender: 'f', plural: 'Landschaften', pos: 'noun', en: 'landscape', hi: 'परिदृश्य', ex: 'Die Landschaft ist schön.', exEn: 'The landscape is beautiful.' },
    { de: 'Lust', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'desire, to feel like', hi: 'इच्छा', ex: 'Ich habe Lust auf Kaffee.', exEn: 'I feel like a coffee.' },
    { de: 'die meisten', pos: 'phrase', en: 'most (people)', hi: 'ज़्यादातर', ex: 'Die meisten trinken Kaffee.', exEn: 'Most people drink coffee.' },
    { de: 'Nachrichten', art: 'die', gender: 'pl', plural: 'Nachrichten', pos: 'noun', en: 'the news', hi: 'समाचार', ex: 'Ich sehe die Nachrichten.', exEn: 'I watch the news.' },
    { de: 'Natur', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'nature', hi: 'प्रकृति', ex: 'Ich liebe die Natur.', exEn: 'I love nature.' },
    { de: 'Politik', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'politics', hi: 'राजनीति', ex: 'Politik ist ein schweres Thema.', exEn: 'Politics is a difficult topic.' },
    { de: 'Religion', art: 'die', gender: 'f', plural: 'Religionen', pos: 'noun', en: 'religion', hi: 'धर्म', ex: 'Religion ist ein privates Thema.', exEn: 'Religion is a private topic.' },
    { de: 'Rolle', art: 'die', gender: 'f', plural: 'Rollen', pos: 'noun', en: 'role', hi: 'भूमिका', ex: 'Das spielt keine Rolle.', exEn: 'That doesn\u2019t matter.' },
    { de: 'Serie', art: 'die', gender: 'f', plural: 'Serien', pos: 'noun', en: 'series', hi: 'धारावाहिक', ex: 'Diese Serie ist gut.', exEn: 'This series is good.' },
    { de: 'Welt', art: 'die', gender: 'f', plural: 'Welten', pos: 'noun', en: 'world', hi: 'दुनिया', ex: 'Die Welt ist groß.', exEn: 'The world is big.' },
    { de: 'Wolke', art: 'die', gender: 'f', plural: 'Wolken', pos: 'noun', en: 'cloud', hi: 'बादल', ex: 'Am Himmel sind Wolken.', exEn: 'There are clouds in the sky.' },
    { de: 'doch', pos: 'particle', en: 'indeed, after all', hi: 'तो', ex: 'Komm doch mit!', exEn: 'Do come along!' },
    { de: 'echt', pos: 'adverb', en: 'really? (Echt?)', hi: 'सच में?', ex: 'Echt? Das wusste ich nicht.', exEn: 'Really? I didn\u2019t know that.' },
    { de: 'egal', pos: 'adjective', en: 'whatever, doesn\u2019t matter', hi: 'कोई फ़र्क नहीं', ex: 'Das ist mir egal.', exEn: 'I don\u2019t mind.' },
    { de: 'gerade', pos: 'adverb', en: 'at the moment, just now', hi: 'अभी', ex: 'Ich lerne gerade Deutsch.', exEn: 'I\u2019m learning German right now.' },
    { de: 'heiß', pos: 'adjective', en: 'hot', hi: 'गरम', ex: 'Im Sommer ist es heiß.', exEn: 'In summer it\u2019s hot.' },
    { de: 'interessieren', pos: 'verb', en: 'to interest', hi: 'दिलचस्पी होना', ex: 'Das interessiert mich.', exEn: 'That interests me.', conj: { praesens: 'interessiert', praeteritum: 'interessierte', perfekt: 'hat interessiert' } },
    { de: 'jemand', pos: 'pronoun', en: 'someone', hi: 'कोई', ex: 'Jemand klopft an die Tür.', exEn: 'Someone is knocking at the door.' },
    { de: 'kaum', pos: 'adverb', en: 'barely, hardly', hi: 'मुश्किल से', ex: 'Ich habe kaum Zeit.', exEn: 'I hardly have time.' },
    { de: 'kennenlernen', pos: 'verb', en: 'to get to know', hi: 'जान-पहचान करना', ex: 'Ich möchte dich kennenlernen.', exEn: 'I\u2019d like to get to know you.', conj: { praesens: 'lernt kennen', praeteritum: 'lernte kennen', perfekt: 'hat kennengelernt' } },
    { de: 'klar', pos: 'adverb', en: 'of course, sure', hi: 'ज़रूर', ex: 'Klar, machen wir das!', exEn: 'Sure, let\u2019s do that!' },
    { de: 'Alles klar', pos: 'phrase', en: 'all good / okay', hi: 'सब ठीक है', ex: 'Alles klar bei dir?', exEn: 'All good with you?' },
    { de: 'leben', pos: 'verb', en: 'to live', hi: 'रहना', ex: 'Man lebt hier gut.', exEn: 'One lives well here.', conj: { praesens: 'lebt', praeteritum: 'lebte', perfekt: 'hat gelebt' } },
    { de: 'los sein', pos: 'verb', en: 'to be happening', hi: 'हो रहा होना', ex: 'Was ist los?', exEn: 'What\u2019s going on?', conj: { praesens: 'ist los', praeteritum: 'war los', perfekt: 'ist los gewesen' } },
    { de: 'mal', pos: 'particle', en: 'sometime; just', hi: 'ज़रा', ex: 'Komm mal her!', exEn: 'Come here a sec!' },
    { de: 'meinen', pos: 'verb', en: 'to think, mean', hi: 'मानना', ex: 'Was meinst du?', exEn: 'What do you think?', conj: { praesens: 'meint', praeteritum: 'meinte', perfekt: 'hat gemeint' } },
    { de: 'negativ', pos: 'adjective', en: 'negative', hi: 'नकारात्मक', ex: 'Das ist negativ.', exEn: 'That\u2019s negative.' },
    { de: 'oder', pos: 'particle', en: 'right? (tag)', hi: 'है ना?', ex: 'Das Wetter ist schön, oder?', exEn: 'The weather\u2019s nice, right?' },
    { de: 'positiv', pos: 'adjective', en: 'positive', hi: 'सकारात्मक', ex: 'Das ist positiv.', exEn: 'That\u2019s positive.' },
    { de: 'reden', pos: 'verb', en: 'to talk', hi: 'बात करना', ex: 'Wir reden über das Wetter.', exEn: 'We talk about the weather.', conj: { praesens: 'redet', praeteritum: 'redete', perfekt: 'hat geredet' } },
    { de: 'schauen', pos: 'verb', en: 'to look', hi: 'देखना', ex: 'Schau mal!', exEn: 'Look!', conj: { praesens: 'schaut', praeteritum: 'schaute', perfekt: 'hat geschaut' } },
    { de: 'scheinen', pos: 'verb', en: 'to shine', hi: 'चमकना', ex: 'Die Sonne scheint.', exEn: 'The sun is shining.', conj: { praesens: 'scheint', praeteritum: 'schien', perfekt: 'hat geschienen' } },
    { de: 'schneien', pos: 'verb', en: 'to snow', hi: 'बर्फ़ गिरना', ex: 'Im Winter schneit es.', exEn: 'In winter it snows.', conj: { praesens: 'schneit', praeteritum: 'schneite', perfekt: 'hat geschneit' } },
    { de: 'schon wieder', pos: 'phrase', en: 'yet again', hi: 'फिर से', ex: 'Es regnet schon wieder!', exEn: 'It\u2019s raining yet again!' },
    { de: 'selbst', pos: 'pronoun', en: 'oneself, even', hi: 'खुद', ex: 'Ich mache das selbst.', exEn: 'I do that myself.' },
    { de: 'so', pos: 'adverb', en: 'so, such', hi: 'इतना', ex: 'So ein Pech!', exEn: 'Such bad luck!' },
    { de: 'total', pos: 'adverb', en: 'totally', hi: 'बिल्कुल', ex: 'Das ist total anders.', exEn: 'That\u2019s totally different.' },
    { de: 'wieder', pos: 'adverb', en: 'again', hi: 'फिर', ex: 'Die Sonne scheint wieder.', exEn: 'The sun is shining again.' },
    { de: 'windig', pos: 'adjective', en: 'windy', hi: 'हवादार', ex: 'Heute ist es windig.', exEn: 'Today it\u2019s windy.' },
    { de: 'zum Glück', pos: 'phrase', en: 'luckily', hi: 'सौभाग्य से', ex: 'Zum Glück scheint die Sonne.', exEn: 'Luckily the sun is shining.' },
    { de: 'überall', pos: 'adverb', en: 'everywhere', hi: 'हर जगह', ex: 'Überall gibt es Cafés.', exEn: 'There are cafés everywhere.' },
    // ===== Passive =====
    { de: 'aktuell', pos: 'adjective', en: 'current, topical', hi: 'मौजूदा', ex: 'Das ist ein aktuelles Thema.', exEn: 'That\u2019s a topical subject.' },
    { de: 'Mistwetter', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'awful weather', hi: 'घटिया मौसम', ex: 'So ein Mistwetter!', exEn: 'Such awful weather!' },
    { de: 'Pech', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'bad luck', hi: 'दुर्भाग्य', ex: 'So ein Pech!', exEn: 'Such bad luck!' },
    { de: 'Studio', art: 'das', gender: 'n', plural: 'Studios', pos: 'noun', en: 'studio', hi: 'स्टूडियो', ex: 'Das Studio ist klein.', exEn: 'The studio is small.' },
    { de: 'dazu', pos: 'adverb', en: 'to that, about it', hi: 'उस बारे में', ex: 'Was meinst du dazu?', exEn: 'What do you think about it?' },
    { de: 'denn', pos: 'particle', en: 'then (in questions)', hi: 'तो', ex: 'Was machst du denn?', exEn: 'So what are you doing?' },
    { de: 'Individualist', art: 'der', gender: 'm', plural: 'Individualisten', pos: 'noun', en: 'individualist (m)', hi: 'व्यक्तिवादी', ex: 'Er ist ein Individualist.', exEn: 'He is an individualist.' },
    { de: 'Mist', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'darn, rubbish', hi: 'धत्', ex: 'Mist, es regnet!', exEn: 'Darn, it\u2019s raining!' },
    { de: 'Quatsch', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'nonsense', hi: 'बकवास', ex: 'Das ist Quatsch!', exEn: 'That\u2019s nonsense!' },
    { de: 'Zufall', art: 'der', gender: 'm', plural: 'Zufälle', pos: 'noun', en: 'coincidence', hi: 'संयोग', ex: 'So ein Zufall!', exEn: 'What a coincidence!' },
    { de: 'Atmosphäre', art: 'die', gender: 'f', plural: 'Atmosphären', pos: 'noun', en: 'atmosphere', hi: 'माहौल', ex: 'Die Atmosphäre ist gut.', exEn: 'The atmosphere is good.' },
    { de: 'Begeisterung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'enthusiasm', hi: 'उत्साह', ex: 'Mit Begeisterung lernen.', exEn: 'To learn with enthusiasm.' },
    { de: 'Heimat', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'homeland', hi: 'मातृभूमि', ex: 'Indien ist meine Heimat.', exEn: 'India is my homeland.' },
    { de: 'Individualistin', art: 'die', gender: 'f', plural: 'Individualistinnen', pos: 'noun', en: 'individualist (f)', hi: 'व्यक्तिवादी', ex: 'Sie ist eine Individualistin.', exEn: 'She is an individualist.' },
    { de: 'Medien', art: 'die', gender: 'pl', plural: 'Medien', pos: 'noun', en: 'media', hi: 'मीडिया', ex: 'Die Medien berichten viel.', exEn: 'The media report a lot.' },
    { de: 'Radiosendung', art: 'die', gender: 'f', plural: 'Radiosendungen', pos: 'noun', en: 'radio show', hi: 'रेडियो कार्यक्रम', ex: 'Die Radiosendung ist gut.', exEn: 'The radio show is good.' },
    { de: 'Reaktion', art: 'die', gender: 'f', plural: 'Reaktionen', pos: 'noun', en: 'reaction', hi: 'प्रतिक्रिया', ex: 'Seine Reaktion war positiv.', exEn: 'His reaction was positive.' },
    { de: 'Szene', art: 'die', gender: 'f', plural: 'Szenen', pos: 'noun', en: 'scene', hi: 'दृश्य', ex: 'Die Szene ist lustig.', exEn: 'The scene is funny.' },
    { de: 'Äußerung', art: 'die', gender: 'f', plural: 'Äußerungen', pos: 'noun', en: 'remark', hi: 'टिप्पणी', ex: 'Das war eine nette Äußerung.', exEn: 'That was a nice remark.' },
    { de: 'diskutieren', pos: 'verb', en: 'to discuss', hi: 'चर्चा करना', ex: 'Wir diskutieren über Politik.', exEn: 'We discuss politics.', conj: { praesens: 'diskutiert', praeteritum: 'diskutierte', perfekt: 'hat diskutiert' } },
    { de: 'echt (wirklich)', pos: 'adverb', en: 'really, genuinely', hi: 'सचमुच', ex: 'Das ist echt schön.', exEn: 'That\u2019s really nice.' },
    { de: 'eigentlich', pos: 'adverb', en: 'actually', hi: 'असल में', ex: 'Eigentlich habe ich keine Zeit.', exEn: 'Actually I have no time.' },
    { de: 'gar', pos: 'adverb', en: 'at all', hi: 'बिल्कुल', ex: 'Das ist gar nicht schlecht.', exEn: 'That\u2019s not bad at all.' },
    { de: 'ja', pos: 'particle', en: '(modal particle)', hi: 'तो', ex: 'Das ist ja toll!', exEn: 'That\u2019s great!' },
    { de: 'klingen', pos: 'verb', en: 'to sound', hi: 'लगना', ex: 'Das klingt interessant.', exEn: 'That sounds interesting.', conj: { praesens: 'klingt', praeteritum: 'klang', perfekt: 'hat geklungen' } },
    { de: 'nerven', pos: 'verb', en: 'to annoy', hi: 'परेशान करना', ex: 'Der Regen nervt.', exEn: 'The rain is annoying.', conj: { praesens: 'nervt', praeteritum: 'nervte', perfekt: 'hat genervt' } },
    { de: 'neutral', pos: 'adjective', en: 'neutral', hi: 'तटस्थ', ex: 'Das Wetter ist ein neutrales Thema.', exEn: 'The weather is a neutral topic.' },
    { de: 'schrecklich', pos: 'adjective', en: 'terrible', hi: 'भयानक', ex: 'Das Wetter ist schrecklich.', exEn: 'The weather is terrible.' },
    { de: 'schütten', pos: 'verb', en: 'to pour (rain)', hi: 'मूसलाधार बारिश', ex: 'Es schüttet draußen.', exEn: 'It\u2019s pouring outside.', conj: { praesens: 'schüttet', praeteritum: 'schüttete', perfekt: 'hat geschüttet' } },
    // ===== Reference / System =====
    { de: 'Missfallen', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'disapproval', hi: 'नापसंदगी', ex: 'Er zeigt sein Missfallen.', exEn: 'He shows his disapproval.' }
  ],

  // ---------- Small Talk & man (rule cards → accordion) ----------
  grammar: [
    {
      title: 'man — one, you, people',
      body: [
        'The pronoun <span class="de r-subject">man</span> means "one / you / people in general" \u2014 a vague, everybody-subject. It is NOT <span class="de">Mann</span> (a man, capital M, two n\u2019s).'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Man trinkt hier viel Kaffee.</span>', 'People drink a lot of coffee here.'],
          ['<span class="de">Man sagt oft \u201aHallo\u2018.</span>', 'You often say \u201chello\u201d.'],
          ['<span class="de">Wie sagt man das?</span>', 'How do you say that?'],
          ['<span class="de">der Mann</span> (different!)', 'the man (a person)']
        ]
      },
      note: 'Use <b>man</b> for customs, rules and general truths \u2014 like English "you/one/people" when you don\u2019t mean anyone specific. Spelling matters: <b>man</b> (pronoun) ≠ <b>Mann</b> (a man).',
      hinglish: '<b>man</b> = log / koi bhi / aam taur par \u2014 koi khaas person nahi. Customs aur aam baaton ke liye. Dhyaan: <b>man</b> (pronoun) ≠ <b>Mann</b> (aadmi, capital M, do "n").'
    },
    {
      title: 'man always takes the er/sie/es form',
      body: [
        'Grammatically <span class="de r-subject">man</span> behaves exactly like <span class="de r-subject">er/sie/es</span> \u2014 third person singular. Use the same verb ending.'
      ],
      table: {
        head: ['Verb', 'er/sie/es', 'man'],
        rows: [
          ['trinken', 'er trinkt', '<span class="de">man trinkt</span>'],
          ['fahren', 'er fährt', '<span class="de">man fährt</span>'],
          ['können', 'er kann', '<span class="de">man kann</span>'],
          ['lernen', 'er lernt', '<span class="de">man lernt</span>']
        ]
      },
      note: 'Whatever ending er/sie/es takes, <b>man</b> takes too: man trink<b>t</b>, man fähr<b>t</b> (with the stem change!), man kann. Never add a plural ending: "man trinken" is wrong.',
      hinglish: '<b>man</b> bilkul <b>er/sie/es</b> ki tarah chalta hai (third person singular). Jo ending er/sie/es leta hai, wahi man bhi: man trink<b>t</b>, man fähr<b>t</b> (stem change ke saath!), man kann. Plural ending kabhi nahi: "man trinken" galat.'
    },
    {
      title: 'Weather: the impersonal es',
      goldenRule: 'Weather has no real subject — German uses a placeholder <b>es</b>: <span class="de">Es regnet.</span>',
      memoryTrick: 'Hindi "baarish ho rahi hai" mein bhi koi karne wala nahi hai. German ko ek subject chahiye hota hai, isliye khaali jagah <b>es</b> se bhar deta hai.',
      body: [
        'Weather sentences use the impersonal subject <span class="de r-subject">es</span> ("it") or a weather noun as the subject.'
      ],
      table: {
        head: ['German', 'Meaning'],
        rows: [
          ['<span class="de">Es regnet. / Es schneit.</span>', 'It\u2019s raining. / It\u2019s snowing.'],
          ['<span class="de">Die Sonne scheint.</span>', 'The sun is shining.'],
          ['<span class="de">Es ist kalt / heiß / windig.</span>', 'It\u2019s cold / hot / windy.'],
          ['<span class="de">Heute ist es sonnig / bewölkt.</span>', 'Today it\u2019s sunny / cloudy.']
        ]
      },
      note: 'Use <b>es</b> + weather verb (es regnet, es schneit, es schüttet) or <b>es ist</b> + adjective (es ist kalt). "Die Sonne scheint" names the sun directly. Add temperature with <b>Grad</b>: "Es sind 20 Grad."',
      hinglish: 'Mausam ke liye <b>es</b> + weather verb (es regnet, es schneit) ya <b>es ist</b> + adjective (es ist kalt). "Die Sonne scheint" = sooraj chamak raha hai. Temperature: <b>Grad</b> \u2014 "Es sind 20 Grad."'
    },
    {
      title: 'Small-talk phrases',
      body: [
        'The fixed phrases that open, carry and close a casual chat. Learn them as whole units.'
      ],
      table: {
        head: ['Function', 'German'],
        rows: [
          ['opener', '<span class="de">Wie geht\u2019s? / Alles klar? / Was gibt\u2019s Neues?</span>'],
          ['weather', '<span class="de">Schönes Wetter heute! / So ein Mistwetter!</span>'],
          ['react', '<span class="de">Echt? / Wirklich? / Das klingt interessant.</span>'],
          ['close', '<span class="de">Bis später! / Viel Spaß! / Mach\u2019s gut!</span>']
        ]
      },
      note: 'Keep a tag question handy: <b>…, oder?</b> ("…, right?"). React with <b>Echt?</b>, <b>Wirklich?</b>, <b>Das klingt interessant.</b> Avoid heavy topics (Politik, Religion) \u2014 weather and weekend are safe.',
      hinglish: 'Ek tag question paas rakho: <b>…, oder?</b> ("…, hai na?"). Reaction: <b>Echt?</b>, <b>Wirklich?</b>, <b>Das klingt interessant.</b> Bhaari topics (Politik, Religion) se bacho \u2014 mausam aur weekend safe hain.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four small-talk / man traps to avoid.' ],
      mistakes: [
        { wrong: 'Man trinken viel Kaffee.', right: 'Man trinkt viel Kaffee.', why: 'man takes the er/sie/es form: trinkt.' },
        { wrong: 'Der Mann spricht Deutsch. (meaning "one speaks")', right: 'Man spricht Deutsch.', why: 'man (one) ≠ Mann (a man).' },
        { wrong: 'Es ist regnet.', right: 'Es regnet.', why: 'regnen is already the verb — no extra "ist".' },
        { wrong: 'Heute ist sonnig.', right: 'Heute ist es sonnig.', why: 'Weather needs the subject es: "Heute ist es sonnig."' }
      ],
      hinglish: 'Char galtiyan common hain. <b>man</b> ke saath <b>er/sie/es</b> wali form aati hai: <b>man trinkt</b>. <b>man</b> (koi bhi) aur <b>Mann</b> (aadmi) do alag shabd hain. Baarish ke liye <b>Es regnet</b> aata hai, "ist" nahi. Aur mausam ki baat karte waqt subject <b>es</b> chahiye: <b>Heute ist es sonnig</b>.'
    }
  ],

  // ---------- Reading passage (small-talk blog note, clickable) ----------
  reading: {
    title: 'Kleiner Talk, große Wirkung',
    titleEn: 'Small talk, big effect',
    tokens: [
      { w: 'Man', role: 'r-subject', en: 'one / people', hi: 'लोग', pron: 'man', type: 'Pronoun · impersonal', why: 'man = people in general (this chapter).', ex: 'Man redet oft über das Wetter.', exEn: 'People often talk about the weather.' },
      { w: 'redet', role: 'r-verb', en: 'talks', hi: 'बात करते हैं', pron: 'RAY-det', type: 'Verb · reden (man)', why: 'man + er/sie/es-form: man redet (this chapter).', ex: 'Man redet oft über das Wetter.', exEn: 'People often talk about the weather.' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'Deutschland', role: 'r-place', en: 'Germany', hi: 'जर्मनी', pron: 'DOYTCH-lant', type: 'Place', why: 'Deutschland (recycled).', ex: 'in Deutschland', exEn: 'in Germany' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb', why: 'oft (recycled — Berufe).', ex: 'oft', exEn: 'often' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
      { w: 'das', role: 'r-article', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article' },
      { w: 'Wetter', role: 'r-object', en: 'weather', hi: 'मौसम', pron: 'VE-ter', type: 'Noun · neut.', why: 'das Wetter (this chapter).', ex: 'über das Wetter reden', exEn: 'talk about the weather' },
      { w: '.', plain: true },
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'Indien', role: 'r-place', en: 'India', hi: 'भारत', pron: 'IN-dyen', type: 'Place', why: 'Indien (recycled).', ex: 'in Indien', exEn: 'in India' },
      { w: 'redet', role: 'r-verb', en: 'talks', hi: 'बात करते हैं', pron: 'RAY-det', type: 'Verb · reden (man)', why: 'man + er/sie/es-form (this chapter).', ex: 'In Indien redet man über Cricket.', exEn: 'In India people talk about cricket.' },
      { w: 'man', role: 'r-subject', en: 'one / people', hi: 'लोग', pron: 'man', type: 'Pronoun · impersonal' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
      { w: 'Cricket', role: 'r-object', en: 'cricket', hi: 'क्रिकेट', pron: 'KRI-ket', type: 'Noun · neut.', why: 'das Cricket.', ex: 'über Cricket reden', exEn: 'talk about cricket' },
      { w: '.', plain: true },
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time', why: 'heute (recycled — Verben).', ex: 'Heute regnet es.', exEn: 'Today it’s raining.' },
      { w: 'regnet', role: 'r-verb', en: 'rains', hi: 'बारिश होती है', pron: 'RAYG-net', type: 'Verb · regnen', why: 'es regnet; verb position 2 (this chapter).', ex: 'Heute regnet es.', exEn: 'Today it’s raining.' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun', why: 'impersonal es for weather (this chapter).', ex: 'Es regnet.', exEn: 'It’s raining.' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + dat.' },
      { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Place' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction', why: 'Joins a contrast between the rain and the sun.', ex: 'es regnet, aber zum Glück scheint die Sonne', exEn: 'it’s raining, but luckily the sun is shining' },
      { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsoom', type: 'Contraction', why: '"zum Glück" = luckily (this chapter).', ex: 'Zum Glück …', exEn: 'Luckily …' },
      { w: 'Glück', role: 'r-object', en: 'luck', hi: 'सौभाग्य', pron: 'glük', type: 'Noun · neut.', why: '"zum Glück" (this chapter).', ex: 'Zum Glück scheint die Sonne.', exEn: 'Luckily the sun is shining.' },
      { w: 'scheint', role: 'r-verb', en: 'shines', hi: 'चमकता है', pron: 'shynt', type: 'Verb · scheinen', why: 'scheinen; verb position 2 (this chapter).', ex: 'Zum Glück scheint die Sonne.', exEn: 'Luckily the sun is shining.' },
      { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
      { w: 'Sonne', role: 'r-subject', en: 'sun', hi: 'सूरज', pron: 'ZO-nuh', type: 'Noun · fem.' },
      { w: 'am', role: 'r-time', en: 'in the', hi: 'को', pron: 'am', type: 'Preposition · time', why: 'am Nachmittag (recycled — Uhrzeit).', ex: 'am Nachmittag', exEn: 'in the afternoon' },
      { w: 'Nachmittag', role: 'r-time', en: 'afternoon', hi: 'दोपहर', pron: 'NAHKH-mi-tahk', type: 'Noun · time', why: 'der Nachmittag (recycled — Uhrzeit).', ex: 'am Nachmittag', exEn: 'in the afternoon' },
      { w: 'wieder', role: 'r-adverb', en: 'again', hi: 'फिर', pron: 'VEE-der', type: 'Adverb', why: 'wieder (this chapter).', ex: 'scheint wieder', exEn: 'shines again' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'तो', pron: 'dan', type: 'Adverb', why: 'dann (recycled — Modalverben 1).', ex: 'Dann kann man rausgehen.', exEn: 'Then one can go out.' },
      { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'kan', type: 'Modal · können (man)', why: 'man + können → man kann; verb position 2 (this chapter).', ex: 'Dann kann man rausgehen.', exEn: 'Then one can go out.' },
      { w: 'man', role: 'r-subject', en: 'one / you', hi: 'लोग', pron: 'man', type: 'Pronoun · impersonal' },
      { w: 'wieder', role: 'r-adverb', en: 'again', hi: 'फिर', pron: 'VEE-der', type: 'Adverb' },
      { w: 'spazieren', role: 'r-verb', en: 'for a walk', hi: 'टहलने', pron: 'shpa-TSEE-ren', type: 'Verb', why: '"spazieren gehen" (recycled — Hobbies).', ex: 'spazieren gehen', exEn: 'go for a walk' },
      { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive', why: 'infinitive at the end after a modal (recycled — Modalverben 1).', ex: 'Man kann spazieren gehen.', exEn: 'One can go for a walk.' },
      { w: '.', plain: true }
    ],
    translation: 'People in Germany often talk about the weather. In India people often talk about cricket. Today it’s raining in Berlin, but luckily the sun shines again in the afternoon. Then one can go for a walk again.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_043_L001', speaker: 'Georg', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hallo Yvonne, lange Wartezeit heute, oder?', en: 'Hi Yvonne, long wait today, right?' },
      { id: 'A1_043_L002', speaker: 'Yvonne', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, der Bus kommt oft spät. Aber die Sonne scheint wenigstens.', en: 'Yes, the bus is often late. But at least the sun is shining.' },
      { id: 'A1_043_L003', speaker: 'Georg', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Was machst du heute noch?', en: 'What else are you doing today?' },
      { id: 'A1_043_L004', speaker: 'Yvonne', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wenn der Bus kommt, fährt man ja schnell in die Stadt. Ich kaufe noch ein.', en: 'When the bus comes, people get into the city fast. I\'m going shopping.' },
      { id: 'A1_043_L005', speaker: 'Georg', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klingt gut! Bis bald!', en: 'Sounds good! See you soon!' }
    ],
    transcript: 'Hallo Yvonne, lange Wartezeit heute, oder? Ja, der Bus kommt oft spät. Aber die Sonne scheint wenigstens. Was machst du heute noch? Wenn der Bus kommt, fährt man ja schnell in die Stadt. Ich kaufe noch ein. Klingt gut! Bis bald!',
    translation: 'Hi Yvonne, long wait today, right? Yes, the bus is often late. But at least the sun is shining. What else are you doing today? When the bus comes, people get into the city fast. I\'m going shopping. Sounds good! See you soon!',
    tokens: [
      { w: 'Hallo' },
      { w: 'Yvonne' },
      { w: ',', plain: true },
      { w: 'lange' },
      { w: 'Wartezeit' },
      { w: 'heute' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Bus' },
      { w: 'kommt' },
      { w: 'oft' },
      { w: 'spät' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'die' },
      { w: 'Sonne' },
      { w: 'scheint' },
      { w: 'wenigstens' },
      { w: '.', plain: true },
      { w: 'Was' },
      { w: 'machst' },
      { w: 'du' },
      { w: 'heute' },
      { w: 'noch' },
      { w: '?', plain: true },
      { w: 'Wenn' },
      { w: 'der' },
      { w: 'Bus' },
      { w: 'kommt' },
      { w: ',', plain: true },
      { w: 'fährt' },
      { w: 'man' },
      { w: 'ja' },
      { w: 'schnell' },
      { w: 'in' },
      { w: 'die' },
      { w: 'Stadt' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'kaufe' },
      { w: 'noch' },
      { w: 'ein' },
      { w: '.', plain: true },
      { w: 'Klingt' },
      { w: 'gut' },
      { w: '!', plain: true },
      { w: 'Bis' },
      { w: 'bald' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wo sind Yvonne und Georg?', qEn: 'Where are Yvonne and Georg?', options: ['im Café', 'an der Bushaltestelle', 'im Kino', 'im Park'], optionsEn: ['at the café', 'at the bus stop', 'at the cinema', 'in the park'], answer: 1,
        explain: 'They talk about the bus being late — they are at a bus stop.' },
      { q: 'Was macht Yvonne heute?', qEn: 'What is Yvonne doing today?', options: ['schlafen', 'einkaufen', 'arbeiten', 'kochen'], optionsEn: ['sleep', 'go shopping', 'work', 'cook'], answer: 1,
        explain: '"Ich kaufe noch ein."' }
    ]
  },

  speaking: [
    { task: "Eine Nachbarin fragt an der Haltestelle: Wie ist das Wetter heute?", taskEn: "A neighbour at the bus stop asks: what's the weather like today?", de: "Es ist bewölkt und es regnet ein bisschen.", en: "It's cloudy and raining a little." },
    { task: "Deine Kollegin fragt: Was macht man hier am Wochenende?", taskEn: "Your colleague asks: what do people do here at the weekend?", de: "Man geht in den Berg oder man sieht Fernsehen.", en: "People go to the mountains or watch TV." },
    { task: "Dein Nachbar fragt: Wie war dein Wochenende?", taskEn: "Your neighbour asks: how was your weekend?", de: "Es war schön, denn es war sonnig. Und bei dir?", en: "It was nice, because it was sunny. And you?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short small-talk dialogue (6\u20138 lines). Greet and ask how someone is, comment on the weather (Es regnet / Die Sonne scheint / Schönes Wetter, oder?), ask about the weekend, and use at least two "man" sentences about customs ("In … trinkt/fährt/sagt man …"). Close with Bis später! or Viel Spaß!',
    starters: ['Hallo! Wie geht\u2019s?', 'Schönes Wetter heute, oder?', 'In … trinkt man …', 'Bis später! / Viel Spaß!'],
    placeholder: 'Hallo! Wie geht\u2019s? — Mir geht\u2019s gut …',
    minWords: 25
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "In Deutschland ___ man viel Kaffee."',
      options: ['trinken', 'trinkt', 'trinke', 'trinkst'],
      answer: 1,
      explain: 'man takes the er/sie/es form: trinkt.'
    },
    gap: {
      // man + er/es form, weather es
      sentence: ['Hier ', ' man oft Fahrrad, aber heute ', ' es.'],
      gaps: [ { answer: 'fährt', accepts: ['fährt','faehrt'] }, { answer: 'regnet', accepts: ['regnet'] } ],
      explain: 'man fährt (er/sie/es form with stem change); es regnet (weather).'
    },
    match: {
      q: 'Match each small-talk phrase to its function.',
      pairs: [
        { noun: 'Wie geht\u2019s?', art: 'opener' },
        { noun: 'Echt?', art: 'reaction' },
        { noun: 'Schönes Wetter!', art: 'weather' },
        { noun: 'Bis später!', art: 'closing' }
      ]
    },
    builder: {
      target: 'Build: "In Germany people drink a lot of coffee."',
      bank: ['In Deutschland', 'trinkt', 'man', 'viel', 'Kaffee'],
      answer: ['In Deutschland', 'trinkt', 'man', 'viel', 'Kaffee'],
      roles: { 'In Deutschland': 'r-place', 'trinkt': 'r-verb', 'man': 'r-subject', 'viel': 'r-object', 'Kaffee': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "man" mean?', options: ['a man', 'one / people in general', 'my', 'with'], answer: 1,
      explain: 'man = one / you / people in general (not Mann).' },
    { q: 'Complete: "Man ___ hier viel Kaffee."', options: ['trinken', 'trinkt', 'trinke', 'trinkst'], answer: 1,
      explain: 'man takes the er/sie/es form: trinkt.' },
    { q: 'How do you say "it\u2019s raining"?', options: ['Es ist regnet.', 'Es regnet.', 'Man regnet.', 'Der Regen.'], answer: 1,
      explain: 'regnen is the verb: "Es regnet."' },
    { q: 'Which is a reaction in small talk?', options: ['Guten Morgen.', 'Echt?', 'Ich heiße …', 'Wo wohnst du?'], answer: 1,
      explain: '"Echt?" (really?) reacts to what someone said.' },
    { q: 'Which sentence is correct?', options: ['Heute ist sonnig.', 'Heute ist es sonnig.', 'Heute man ist sonnig.', 'Heute sonnig ist.'], answer: 1,
      explain: 'Weather needs the subject es: "Heute ist es sonnig."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: '<span class="de">man</span> = one / you / people in general (NOT <span class="de">Mann</span>), and always takes the <strong>er/sie/es</strong> verb form: <span class="de">man trinkt, man fährt, man kann</span>.' },
    { c: 'r-verb', html: 'Weather uses impersonal <span class="de">es</span>: <span class="de">Es regnet, es schneit, es ist kalt</span> \u2014 or <span class="de">Die Sonne scheint</span>.' },
    { c: 'r-object', html: 'Small talk: open <span class="de">Wie geht\u2019s?</span>, react <span class="de">Echt? / Das klingt interessant.</span>, close <span class="de">Bis später! / Viel Spaß!</span>' }
  ],
  revisionTips: [
    'Treat man exactly like er/sie/es: same verb ending, every time.',
    'Spell it carefully: man (one) has one n; Mann (a man) has two and a capital M.',
    'Keep three small-talk phrases ready: a greeting, a weather line, and a closing.'
  ]
};

window.CHAPTER = CHAPTER;
