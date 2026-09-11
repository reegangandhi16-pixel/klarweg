/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 30
   "Verben mit Präpositionen" — fixed verb-preposition pairs,
   Akkusativ (warten auf, denken an, sich erinnern an, sich
   freuen auf, glauben an, sich interessieren für, sich
   entscheiden für, bitten um, sich kümmern um) and Dativ
   (sprechen mit, reden mit, telefonieren mit, anfangen mit,
   aufhören mit, träumen von, erzählen von, handeln von, gehören
   zu, passen zu). Question-word forms (worauf, woran, mit wem)
   kept simple — no full Präpositionaladverbien system, no
   relative clauses, no B1 combinations.
   Vocabulary source: uploaded chapter-30 list (~56 items;
   Unterhaltung & Medien theme — die Anruferin, das Telefonat,
   der Musiker, live). Recycles A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-29-indefinitpronomen-data.js exactly
   (flat vocab[], grammar[] rule cards, tokenized reading, etc.)
   so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "klappen - to work" mislabelled "Adverb/Other" in the source
     sheet — klappen is a verb (to work out, to go well);
     corrected accordingly.
   • "netto - nett" — garbled gloss → corrected to netto = net (as
     in net salary/price, its standard A2 meaning; distinct from
     nett = nice).
   • "der Berufswunsch" mislabelled "Adverb/Other" — corrected to
     noun (masc.), career goal/aspiration.
   • "unter anderem" kept as a fixed phrase (amongst other things).
============================================================ */
const CHAPTER = {
  id: 'a2-30-verben-praepositionen',
  phase: 'A2 · Phase 2',
  number: 30,
  title: 'Verben mit Präpositionen',
  titleEn: 'Verbs with fixed prepositions',
  description: 'Ich warte auf den Bus. Ich denke an dich. Ich spreche mit meiner Lehrerin. Many German verbs always pair with one specific preposition and one specific case — the preposition can never be swapped. This chapter drills the most common Goethe A2 pairs, split cleanly into Akkusativ verbs and Dativ verbs, with their question-word forms.',
  xp: 200,
  time: 35,
  difficulty: 'Elementary',
  nextChapter: { number: 31, title: 'W-Fragen mit Präpositionen', titleEn: 'Question words with prepositions' , href: 'chapter-a2-31-w-fragen-praepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Wibke is waiting for a call in the station hall, dreaming about a career change, while Timo waits with her. Every fixed verb-preposition pair does the talking: warten auf, sich freuen auf, sich interessieren für, glauben an.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear Akkusativ verb-prepositions (auf, an, für, um) and Dativ verb-prepositions (mit, von, zu) side by side'
    ],
    scene: 'Bahnhofshalle — Sprachschule Berlin',
    femaleSpeakers: ['Wibke'],
    dialogue: [
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'denke', role: 'r-verb', en: 'am thinking', hi: 'सोच रही हूँ', pron: 'DEN-kuh', type: 'Verb · denken (ich)' },
        { w: 'an', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'an', type: 'Preposition · fixed with denken' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Berufswechsel', role: 'r-akkusativ', en: 'career change', hi: 'करियर बदलाव', pron: 'be-ROOFS-vek-sel', type: 'Noun · masc.', why: 'der Berufswechsel (this chapter).', ex: 'Ich denke an einen Berufswechsel.', exEn: 'I am thinking about a career change.' },
        { w: '.', plain: true }
      ], en: 'I am thinking about a career change.', hi: 'Main career badlav ke baare mein soch rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Worauf', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-ROWF', type: 'Question word', why: 'worauf/wofür ask about a fixed-preposition object (this chapter).', ex: 'Worauf freust du dich?', exEn: 'What are you looking forward to?' },
        { w: 'freust', role: 'r-verb', en: 'are you looking forward', hi: 'उत्साहित हो', pron: 'FROYST', type: 'Verb · sich freuen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: '?', plain: true }
      ], en: 'Really? What are you looking forward to the most?', hi: 'Sach mein? Tumhe sabse zyada kis baat ka intezaar hai?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition · fixed with freuen' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Freiheit', role: 'r-akkusativ', en: 'freedom', hi: 'आज़ादी', pron: 'FRY-hite', type: 'Noun · fem.', why: 'die Freiheit (this chapter).', ex: 'Ich freue mich auf mehr Freiheit.', exEn: 'I look forward to more freedom.' },
        { w: '.', plain: true }
      ], en: 'I look forward to more freedom.', hi: 'Mujhe zyada aazadi ka intezaar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wofür', role: 'r-question', en: 'for what', hi: 'किसके लिए', pron: 'vo-FÜR', type: 'Question word' },
        { w: 'interessierst', role: 'r-verb', en: 'are you interested', hi: 'दिलचस्पी है', pron: 'in-te-RE-seerst', type: 'Verb · sich interessieren (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'अपनी', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'meisten', role: 'r-dativ', en: 'most', hi: 'ज़्यादा', pron: 'MY-sten', type: 'Superlative' },
        { w: '?', plain: true }
      ], en: 'And what are you interested in the most?', hi: 'Aur tumhe sabse zyada kis mein dilchaspi hai?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'interessiere', role: 'r-verb', en: 'am interested', hi: 'दिलचस्पी है', pron: 'in-te-RE-see-ruh', type: 'Verb · sich interessieren (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'अपनी', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'für', role: 'r-preposition', en: 'in', hi: 'में', pron: 'für', type: 'Preposition · fixed with interessieren' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'warte', role: 'r-verb', en: 'am waiting', hi: 'इंतज़ार कर रही हूँ', pron: 'VAR-tuh', type: 'Verb · warten (ich)' },
        { w: 'auf', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'owf', type: 'Preposition · fixed with warten' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Antwort', role: 'r-akkusativ', en: 'answer', hi: 'जवाब', pron: 'ANT-vort', type: 'Noun · fem.' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Musikschule', role: 'r-dativ', en: 'music school (dat.)', hi: 'संगीत स्कूल से', pron: 'mu-ZEEK-shoo-luh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I am interested in music. I am waiting for an answer from the music school.', hi: 'Mujhe sangeet mein dilchaspi hai. Main sangeet school se jawaab ka intezaar kar rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानता हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)' },
        { w: 'an', role: 'r-preposition', en: 'in', hi: 'पर', pron: 'an', type: 'Preposition · fixed with glauben' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम पर', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'That sounds good. I believe in you.', hi: 'Yeh achha lagta hai. Mujhe tum par vishwaas hai.' },
      { speaker: 'Wibke', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करता है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! That really helps me.', hi: 'Dhanyavaad! Yeh sach mein meri madad karta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Some German verbs come glued to one specific preposition — and that preposition can never change. <span class="de">Ich warte <b>auf</b> den Bus.</span> Never "warten für". <span class="de">Ich denke <b>an</b> dich.</span> Never "denken über". Learn each verb together with its fixed preposition and the case it demands (Akkusativ: auf, an, für, um · Dativ: mit, von, zu), plus the matching question word: <span class="de r-question">worauf</span>, <span class="de r-question">woran</span>, <span class="de r-question">mit wem</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERBEN MIT PRÄPOSITIONEN — fixed verb-preposition pairs. Akkusativ: warten auf, denken an, sich erinnern an, sich freuen auf, glauben an, sich interessieren für, sich entscheiden für, bitten um, sich kümmern um. Dativ: sprechen mit, reden mit, telefonieren mit, anfangen mit, aufhören mit, träumen von, erzählen von, handeln von, gehören zu, passen zu. ' +
    'No Präpositionaladverbien beyond simple question forms (worauf, woran, mit wem), no relative clauses, no B1 combinations. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Each verb has ONE fixed preposition that never changes: warten auf (NOT für), sprechen mit (NOT zu), sich interessieren für (NOT an), träumen von (NOT über), denken an (NOT über). Flag any wrong preposition swap.\n' +
    '- Flag wrong case after the fixed preposition: auf/an/für/um take Akkusativ; mit/von/zu take Dativ.\n' +
    '- Reflexive verbs (sich freuen auf, sich interessieren für, sich entscheiden für, sich kümmern um, sich erinnern an) need the reflexive pronoun (mich/dich/sich) — flag if missing.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Verb-preposition check:</b> one sentence on whether the learner used the fixed prepositions and correct case.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle fixed verb-preposition pairs — Akkusativ and Dativ — confidently. Next: ask about them with worauf, woran, and mit wem.',
    mid: 'Good. Re-read the Akkusativ and Dativ verb tables once, then continue.',
    low: 'Worth another pass — remember: the preposition after each verb never changes, and it fixes the case too. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'warte', role: 'r-verb' },
    { w: 'auf', role: 'r-preposition' }, { w: 'den', role: 'r-akkusativ' },
    { w: 'Bus', role: 'r-akkusativ' }, { w: ',', role: 'plain' },
    { w: 'und', role: 'r-conjunction' }, { w: 'ich', role: 'r-subject' },
    { w: 'spreche', role: 'r-verb' }, { w: 'mit', role: 'r-preposition' },
    { w: 'meiner', role: 'r-dativ' }, { w: 'Lehrerin', role: 'r-dativ' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: fixed verb + preposition + case.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A station hall catch-up full of verb-preposition pairs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Anruferin, der Musiker, das Telefonat, der Roman.' },
    { id: 'grammar',    label: 'Verb + Präposition', tag: 'core',
      objective: 'Master the Akkusativ and Dativ verb-preposition tables and their question words.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a story full of fixed verb-preposition pairs.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each verb-preposition pair in a station-hall conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about what you wait for, think about, and dream of.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write about hobbies, plans and daily routines using verb-preposition pairs.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the correct preposition and case for each verb.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 200 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s media and entertainment words — die Anruferin, der Musiker, das Telefonat, der Roman — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb-preposition matching drills, case-choice exercises, and an email-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Akkusativ and Dativ verb-preposition cheat sheet, question-word forms, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich warte auf den Bus. Worauf wartest du?', text: 'Say what you\'re waiting for, and ask about it' },
    { de: 'Ich denke an dich. Ich glaube an einen Neuanfang.', text: 'Use the fixed Akkusativ verb-prepositions: an, auf, für, um' },
    { de: 'Ich spreche mit meiner Lehrerin. Ich träume von Berlin.', text: 'Use the fixed Dativ verb-prepositions: mit, von, zu' },
    { de: 'Ich freue mich auf das Wochenende.', text: 'Use reflexive verb-preposition pairs correctly' },
    { de: 'warten für? Nein — warten auf.', text: 'Avoid the classic preposition-swap mistakes' }
  ],

  // ---------- Vocabulary (~56 items) ----------
  vocab: [
    { de: 'Anruferin', art: 'die', gender: 'f', plural: 'Anruferinnen', pos: 'noun', en: 'caller (f.)', hi: 'फोन करने वाली', ex: 'Ich warte auf die Anruferin.', exEn: 'I\'m waiting for the caller (f.).' },
    { de: 'Audioguide', art: 'der', gender: 'm', plural: 'Audioguides', pos: 'noun', en: 'audio guide', hi: 'ऑडियो गाइड', ex: 'Ich interessiere mich für den Audioguide im Museum.', exEn: 'I\'m interested in the museum\'s audio guide.' },
    { de: 'Austausch', art: 'der', gender: 'm', plural: 'Austausche', pos: 'noun', en: 'exchange', hi: 'आदान-प्रदान', ex: 'Ich freue mich auf den Austausch mit dir.', exEn: 'I\'m looking forward to the exchange with you.' },
    { de: 'Bahnhofshalle', art: 'die', gender: 'f', plural: 'Bahnhofshallen', pos: 'noun', en: 'station hall', hi: 'स्टेशन हॉल', ex: 'Ich warte in der Bahnhofshalle auf dich.', exEn: 'I\'m waiting for you in the station hall.' },
    { de: 'Berufswechsel', art: 'der', gender: 'm', plural: 'Berufswechsel', pos: 'noun', en: 'career change', hi: 'करियर बदलाव', ex: 'Ich interessiere mich für einen Berufswechsel.', exEn: 'I\'m interested in a career change.' },
    { de: 'Berufswunsch', art: 'der', gender: 'm', plural: 'Berufswünsche', pos: 'noun', en: 'career goal', hi: 'करियर लक्ष्य', ex: 'Das passt gut zu deinem Berufswunsch.', exEn: 'That fits well with your career goal.' },
    { de: 'deutlich', pos: 'adjective', en: 'distinct, clear', hi: 'स्पष्ट', ex: 'Erzähl deutlich von deinem Plan.', exEn: 'Tell clearly about your plan.' },
    { de: 'Einsatz', art: 'der', gender: 'm', plural: 'Einsätze', pos: 'noun', en: 'assignment, effort', hi: 'तैनाती', ex: 'Ich freue mich auf den nächsten Einsatz.', exEn: 'I\'m looking forward to the next assignment.' },
    { de: 'erreichbar', pos: 'adjective', en: 'reachable', hi: 'पहुंच योग्य', ex: 'Bist du morgen telefonisch erreichbar?', exEn: 'Will you be reachable by phone tomorrow?' },
    { de: 'Freiheit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'freedom', hi: 'स्वतंत्रता', ex: 'Ich träume von mehr Freiheit im Job.', exEn: 'I dream of more freedom in the job.' },
    { de: 'Gewalt', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'violence', hi: 'हिंसा', ex: 'Dieser Roman handelt nicht von Gewalt.', exEn: 'This novel is not about violence.' },
    { de: 'inklusive', pos: 'preposition', en: 'including', hi: 'सहित', ex: 'Der Preis ist inklusive Frühstück.', exEn: 'The price includes breakfast.' },
    { de: 'klappen', pos: 'verb', en: 'to work out, to go well', hi: 'सफल होना', ex: 'Ich hoffe, das klappt mit dem neuen Job.', exEn: 'I hope it works out with the new job.', conj: { praesens: 'klappt', praeteritum: 'klappte', perfekt: 'hat geklappt' } },
    { de: 'König', art: 'der', gender: 'm', plural: 'Könige', pos: 'noun', en: 'king', hi: 'राजा', ex: 'Der Roman handelt von einem König.', exEn: 'The novel is about a king.' },
    { de: 'live', pos: 'adjective', en: 'live', hi: 'लाइव', ex: 'Der Musiker hat live gespielt.', exEn: 'The musician played live.' },
    { de: 'Lkw', art: 'der', gender: 'm', plural: 'Lkws', pos: 'noun', en: 'truck', hi: 'ट्रक', ex: 'Ich warte auf den Lkw mit den Kisten.', exEn: 'I\'m waiting for the truck with the boxes.' },
    { de: 'Meldung', art: 'die', gender: 'f', plural: 'Meldungen', pos: 'noun', en: 'announcement', hi: 'सूचना', ex: 'Ich warte auf eine Meldung von der Bahn.', exEn: 'I\'m waiting for an announcement from the railway.' },
    { de: 'Musiker', art: 'der', gender: 'm', plural: 'Musiker', pos: 'noun', en: 'musician', hi: 'संगीतकार', ex: 'Ich denke oft an den Musiker vom Konzert.', exEn: 'I often think of the musician from the concert.' },
    { de: 'nebeneinander', pos: 'adverb', en: 'next to each other', hi: 'एक-दूसरे के बगल में', ex: 'Wir sitzen nebeneinander im Zug.', exEn: 'We sit next to each other on the train.' },
    { de: 'netto', pos: 'adverb', en: 'net (amount)', hi: 'शुद्ध राशि', ex: 'Wie viel verdienst du netto?', exEn: 'How much do you earn net?' },
    { de: 'Neuanfang', art: 'der', gender: 'm', plural: 'Neuanfänge', pos: 'noun', en: 'fresh start', hi: 'नई शुरुआत', ex: 'Ich glaube an einen Neuanfang.', exEn: 'I believe in a fresh start.' },
    { de: 'Pop', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'pop (music)', hi: 'पॉप संगीत', ex: 'Ich interessiere mich für Pop und Rock.', exEn: 'I\'m interested in pop and rock.' },
    { de: 'preiswert', pos: 'adjective', en: 'cheap, good value', hi: 'सस्ता', ex: 'Die Fahrkarte ist sehr preiswert.', exEn: 'The ticket is very good value.' },
    { de: 'problemlos', pos: 'adjective', en: 'unproblematic, smooth', hi: 'बिना किसी समस्या के', ex: 'Der Berufswechsel verlief problemlos.', exEn: 'The career change went smoothly.' },
    { de: 'Roman', art: 'der', gender: 'm', plural: 'Romane', pos: 'noun', en: 'novel', hi: 'उपन्यास', ex: 'Ich muss mit dem Roman anfangen.', exEn: 'I have to start with the novel.' },
    { de: 'Schritt', art: 'der', gender: 'm', plural: 'Schritte', pos: 'noun', en: 'step', hi: 'कदम', ex: 'Ich entscheide mich für einen neuen Schritt.', exEn: 'I\'m deciding on a new step.' },
    { de: 'Sitzplatz', art: 'der', gender: 'm', plural: 'Sitzplätze', pos: 'noun', en: 'seat', hi: 'सीट', ex: 'Dieser Sitzplatz gehört zu diesem Wagen.', exEn: 'This seat belongs to this train car.' },
    { de: 'Stimme', art: 'die', gender: 'f', plural: 'Stimmen', pos: 'noun', en: 'voice', hi: 'आवाज़', ex: 'Ich erinnere mich an die Stimme des Musikers.', exEn: 'I remember the musician\'s voice.' },
    { de: 'Tagesgast', art: 'der', gender: 'm', plural: 'Tagesgäste', pos: 'noun', en: 'day visitor', hi: 'एक दिवसीय अतिथि', ex: 'Der Tagesgast wartet auf den Audioguide.', exEn: 'The day visitor is waiting for the audio guide.' },
    { de: 'Telefonat', art: 'das', gender: 'n', plural: 'Telefonate', pos: 'noun', en: 'telephone call', hi: 'फोन कॉल', ex: 'Wann hörst du mit dem Telefonat auf?', exEn: 'When will you stop the telephone call?' },
    { de: 'unter anderem', pos: 'phrase', en: 'amongst other things', hi: 'अन्य बातों के अलावा', ex: 'Der Roman handelt unter anderem von Freiheit.', exEn: 'The novel is, amongst other things, about freedom.' },
    { de: 'verrückt', pos: 'adjective', en: 'crazy', hi: 'पागल', ex: 'Das ist verrückt — der Musiker hat live gespielt!', exEn: 'That\'s crazy — the musician played live!' },
    { de: 'Vokabel', art: 'die', gender: 'f', plural: 'Vokabeln', pos: 'noun', en: 'word', hi: 'शब्द', ex: 'Ich erinnere mich nicht an jede Vokabel.', exEn: 'I don\'t remember every word.' },
    { de: 'Wagen', art: 'der', gender: 'm', plural: 'Wagen', pos: 'noun', en: 'car, train car', hi: 'डिब्बा', ex: 'Dieser Sitzplatz gehört zu diesem Wagen.', exEn: 'This seat belongs to this train car.' },
    { de: 'Warenkorb', art: 'der', gender: 'm', plural: 'Warenkörbe', pos: 'noun', en: 'shopping cart', hi: 'शॉपिंग कार्ट', ex: 'Ich kümmere mich noch um den Warenkorb.', exEn: 'I\'m still taking care of the shopping cart.' },
    { de: 'wild', pos: 'adjective', en: 'wild', hi: 'जंगली', ex: 'Der Roman handelt von einer wilden Reise.', exEn: 'The novel is about a wild journey.' },
    { de: 'wofür', pos: 'adverb', en: 'what … for', hi: 'किसके लिए', ex: 'Wofür interessierst du dich genau?', exEn: 'What exactly are you interested in?' },
    { de: 'Überweisung', art: 'die', gender: 'f', plural: 'Überweisungen', pos: 'noun', en: 'bank transfer', hi: 'बैंक ट्रांसफर', ex: 'Kümmerst du dich um die Überweisung?', exEn: 'Are you taking care of the bank transfer?' },
    { de: 'Englisch-Studium', art: 'das', gender: 'n', plural: 'Englisch-Studien', pos: 'noun', en: 'English degree', hi: 'अंग्रेजी की डिग्री', ex: 'Ich interessiere mich für ein Englisch-Studium.', exEn: 'I\'m interested in an English degree.' },
    { de: 'Ermäßigung', art: 'die', gender: 'f', plural: 'Ermäßigungen', pos: 'noun', en: 'discount', hi: 'छूट', ex: 'Ich frage nach einer Ermäßigung für den Audioguide.', exEn: 'I\'m asking about a discount for the audio guide.' },
    { de: 'Hintergrund', art: 'der', gender: 'm', plural: 'Hintergründe', pos: 'noun', en: 'background', hi: 'पृष्ठभूमि', ex: 'Der Musiker steht im Hintergrund.', exEn: 'The musician stands in the background.' },
    { de: 'Jahrhundert', art: 'das', gender: 'n', plural: 'Jahrhunderte', pos: 'noun', en: 'century', hi: 'सदी', ex: 'Der Roman handelt von einem König im 18. Jahrhundert.', exEn: 'The novel is about a king in the 18th century.' },
    { de: 'Jobwechsel', art: 'der', gender: 'm', plural: 'Jobwechsel', pos: 'noun', en: 'job change', hi: 'नौकरी बदलाव', ex: 'Ich freue mich auf den Jobwechsel.', exEn: 'I\'m looking forward to the job change.' },
    { de: 'Kriminalität', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'crime', hi: 'अपराध', ex: 'Der Roman handelt nicht von Kriminalität.', exEn: 'The novel is not about crime.' },
    { de: 'Kunstexperte', art: 'der', gender: 'm', plural: 'Kunstexperten', pos: 'noun', en: 'art expert', hi: 'कला विशेषज्ञ', ex: 'Ich spreche mit einem Kunstexperten über den Roman.', exEn: 'I\'m talking with an art expert about the novel.' },
    { de: 'Musikfestival', art: 'das', gender: 'n', plural: 'Musikfestivals', pos: 'noun', en: 'music festival', hi: 'संगीत महोत्सव', ex: 'Ich freue mich auf das nächste Musikfestival.', exEn: 'I\'m looking forward to the next music festival.' },
    { de: 'Operationssaal', art: 'der', gender: 'm', plural: 'Operationssäle', pos: 'noun', en: 'operating theatre', hi: 'ऑपरेशन थिएटर', ex: 'Der Roman handelt von einem Arzt im Operationssaal.', exEn: 'The novel is about a doctor in the operating theatre.' },
    { de: 'Radiosprecherin', art: 'die', gender: 'f', plural: 'Radiosprecherinnen', pos: 'noun', en: 'radio announcer (f.)', hi: 'रेडियो उद्घोषक (महिला)', ex: 'Ich denke oft an die Stimme der Radiosprecherin.', exEn: 'I often think of the radio announcer\'s voice.' },
    { de: 'Rückmeldung', art: 'die', gender: 'f', plural: 'Rückmeldungen', pos: 'noun', en: 'response', hi: 'प्रतिक्रिया', ex: 'Ich warte auf eine Rückmeldung von der Anruferin.', exEn: 'I\'m waiting for a response from the caller (f.).' },
    { de: 'Tiermalerei', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'animal painting', hi: 'पशु चित्रकला', ex: 'Ich interessiere mich für Tiermalerei.', exEn: 'I\'m interested in animal painting.' },
    { de: 'Verpflegung', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'provisions, catering', hi: 'भोजन व्यवस्था', ex: 'Der Preis ist inklusive Verpflegung.', exEn: 'The price includes provisions.' },
    { de: 'Videokonferenz', art: 'die', gender: 'f', plural: 'Videokonferenzen', pos: 'noun', en: 'video conference', hi: 'वीडियो कॉन्फ्रेंस', ex: 'Ich spreche mit meinem Team in einer Videokonferenz.', exEn: 'I talk with my team in a video conference.' },
    { de: 'Vordergrund', art: 'der', gender: 'm', plural: 'Vordergründe', pos: 'noun', en: 'foreground', hi: 'अग्रभूमि', ex: 'Im Vordergrund steht der König.', exEn: 'In the foreground stands the king.' },
    { de: 'Übersetzerin', art: 'die', gender: 'f', plural: 'Übersetzerinnen', pos: 'noun', en: 'translator (f.)', hi: 'अनुवादक (महिला)', ex: 'Ich spreche mit einer Übersetzerin über den Roman.', exEn: 'I talk with a translator (f.) about the novel.' },
    { de: 'Schlüsselwort', art: 'das', gender: 'n', plural: 'Schlüsselwörter', pos: 'noun', en: 'keyword', hi: 'मुख्य शब्द', ex: 'Worauf achtest du bei einem Schlüsselwort?', exEn: 'What do you pay attention to with a keyword?' },
    { de: 'Datenschutzbestimmung', art: 'die', gender: 'f', plural: 'Datenschutzbestimmungen', pos: 'noun', en: 'data protection regulation', hi: 'डेटा सुरक्षा नियम', ex: 'Ich lese die Datenschutzbestimmung, bevor ich mich entscheide.', exEn: 'I read the data protection regulation before deciding.' }
  ],

  // ---------- Verben mit Präpositionen (rule cards) ----------
  grammar: [
    {
      title: 'Akkusativ-Verben: auf, an, für, um',
      body: [
        'These common verbs always pair with an Akkusativ preposition. The preposition never changes, no matter what the verb means elsewhere.'
      ],
      table: {
        head: ['Verb + Präp.', 'Meaning', 'Example', 'Question'],
        rows: [
          ['warten auf', 'to wait for', '<span class="de">Ich warte auf den Bus.</span>', '<span class="de r-question">Worauf</span> wartest du? → Auf den Bus.'],
          ['denken an', 'to think of/about', '<span class="de">Ich denke an dich.</span>', '<span class="de r-question">Woran</span> denkst du? → An dich.'],
          ['sich erinnern an', 'to remember', '<span class="de">Ich erinnere mich an die Stimme.</span>', '<span class="de r-question">Woran</span> erinnerst du dich? → An die Stimme.'],
          ['sich freuen auf', 'to look forward to', '<span class="de">Ich freue mich auf das Festival.</span>', '<span class="de r-question">Worauf</span> freust du dich? → Auf das Festival.'],
          ['glauben an', 'to believe in', '<span class="de">Ich glaube an einen Neuanfang.</span>', '<span class="de r-question">Woran</span> glaubst du? → An einen Neuanfang.'],
          ['sich interessieren für', 'to be interested in', '<span class="de">Ich interessiere mich für Pop.</span>', '<span class="de r-question">Wofür</span> interessierst du dich? → Für Pop.'],
          ['sich entscheiden für', 'to decide on', '<span class="de">Ich entscheide mich für den Schritt.</span>', '<span class="de r-question">Wofür</span> entscheidest du dich? → Für den Schritt.'],
          ['bitten um', 'to ask for', '<span class="de">Ich bitte um Rat.</span>', 'Worum bittest du? → Um Rat.'],
          ['sich kümmern um', 'to take care of', '<span class="de">Ich kümmere mich um die Überweisung.</span>', 'Worum kümmerst du dich? → Um die Überweisung.']
        ]
      },
      hinglish: 'In verbs ke saath Akkusativ wali preposition aati hai: <b>auf, an, für, um</b>. Har verb ki apni preposition fix hoti hai, isliye use badla nahi jaa sakta \u2014 chahe English mein alag preposition lagti ho.'
    },
    {
      title: 'Dativ-Verben: mit, von, zu',
      body: [
        'These common verbs always pair with a Dativ preposition.'
      ],
      table: {
        head: ['Verb + Präp.', 'Meaning', 'Example', 'Question'],
        rows: [
          ['sprechen mit', 'to speak with', '<span class="de">Ich spreche mit meiner Lehrerin.</span>', 'Mit wem sprichst du? → Mit meiner Lehrerin.'],
          ['reden mit', 'to talk with', '<span class="de">Ich rede mit dem Kollegen.</span>', 'Mit wem redest du? → Mit dem Kollegen.'],
          ['telefonieren mit', 'to phone with', '<span class="de">Ich telefoniere mit meiner Mutter.</span>', 'Mit wem telefonierst du? → Mit meiner Mutter.'],
          ['anfangen mit', 'to start with', '<span class="de">Ich fange mit dem Roman an.</span>', 'Womit fängst du an? → Mit dem Roman.'],
          ['aufhören mit', 'to stop', '<span class="de">Ich höre mit dem Telefonat auf.</span>', 'Womit hörst du auf? → Mit dem Telefonat.'],
          ['träumen von', 'to dream of', '<span class="de">Ich träume von Freiheit.</span>', 'Wovon träumst du? → Von Freiheit.'],
          ['erzählen von', 'to tell about', '<span class="de">Ich erzähle von meinem Berufswechsel.</span>', 'Wovon erzählst du? → Von meinem Berufswechsel.'],
          ['handeln von', 'to be about', '<span class="de">Der Roman handelt von einem König.</span>', 'Wovon handelt der Roman? → Von einem König.'],
          ['gehören zu', 'to belong to', '<span class="de">Der Sitzplatz gehört zum Wagen.</span>', 'Zu wem/was gehört das? → Zum Wagen.'],
          ['passen zu', 'to fit/suit', '<span class="de">Das passt zu deinem Berufswunsch.</span>', 'Zu wem/was passt das? → Zu deinem Berufswunsch.']
        ]
      },
      hinglish: 'In verbs ke saath Dativ wali preposition aati hai: <b>mit, von, zu</b>. Yahan bhi preposition aur case dono fix hote hain.'
    },
    {
      title: 'The preposition never changes',
      body: [
        'Some German verbs always require one specific preposition — and that preposition cannot be swapped for a "similar" one, even if English uses a different word.'
      ],
      table: {
        head: ['English', 'Wrong (❌)', 'Correct (✓)'],
        rows: [
          ['to wait for', '<span class="de strike">warten für</span>', '<span class="de">warten auf</span>'],
          ['to speak to', '<span class="de strike">sprechen zu</span>', '<span class="de">sprechen mit</span>'],
          ['interested in', '<span class="de strike">interessieren an</span>', '<span class="de">interessieren für</span>'],
          ['to dream about', '<span class="de strike">träumen über</span>', '<span class="de">träumen von</span>'],
          ['to think about', '<span class="de strike">denken über</span> (when meaning "of/about" a person)', '<span class="de">denken an</span>']
        ]
      },
      note: 'Learn each verb together with its preposition as one unit — never translate the English preposition word-for-word.',
      hinglish: 'English ki preposition dekh kar guess karna kaam nahi karega, kyunki German apni hi preposition leta hai. Isliye verb aur preposition ko ek hi unit ki tarah yaad karo, jaise ek shabd.'
    },
    {
      title: 'Memory tips & mini reference',
      body: [
        'Group by preposition, not by verb, to memorise faster.'
      ],
      table: {
        head: ['Need…', 'Use'],
        rows: [
          ['warten', '→ auf + Akk.'],
          ['denken, sich erinnern, glauben', '→ an + Akk.'],
          ['sich freuen', '→ auf (freuen auf = look forward) + Akk.'],
          ['sich interessieren, sich entscheiden', '→ für + Akk.'],
          ['bitten, sich kümmern', '→ um + Akk.'],
          ['sprechen, reden, telefonieren, anfangen, aufhören', '→ mit + Dativ'],
          ['träumen, erzählen, handeln', '→ von + Dativ'],
          ['gehören, passen', '→ zu + Dativ']
        ]
      },
      hinglish: 'Inhe yaad karne ka aasaan tarika yeh hai ki preposition ke hisaab se group banao, verb ke hisaab se nahi \u2014 phir ek saath kai verbs yaad rehte hain.'
    },
    {
      title: 'Cheat sheet — all A2 verb-preposition pairs',
      body: [
        'One page, both cases, for quick review before the quiz.'
      ],
      table: {
        head: ['Akkusativ', 'Dativ'],
        rows: [
          ['warten auf', 'sprechen mit'],
          ['denken an', 'reden mit'],
          ['sich erinnern an', 'telefonieren mit'],
          ['sich freuen auf', 'anfangen mit'],
          ['glauben an', 'aufhören mit'],
          ['sich interessieren für', 'träumen von'],
          ['sich entscheiden für', 'erzählen von'],
          ['bitten um', 'handeln von'],
          ['sich kümmern um', 'gehören zu / passen zu']
        ]
      },
      hinglish: 'Yeh poora cheat sheet quiz se pehle ek baar zaroor dekh lo — Akkusativ aur Dativ verbs alag columns mein.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Ein Nachmittag in der Bahnhofshalle',
    titleEn: 'An afternoon in the station hall',
    tokens: [
      { w: 'In', role: 'r-place', en: 'in', hi: 'में', pron: 'in', type: 'Preposition · Dat.' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'यह', pron: 'dair', type: 'Article · dat.' },
      { w: 'Bahnhofshalle', role: 'r-dativ', en: 'station hall', hi: 'स्टेशन हॉल', pron: 'BAHN-hohfs-ha-luh', type: 'Noun · fem.', why: 'die Bahnhofshalle (this chapter).' },
      { w: 'wartet', role: 'r-verb', en: 'waits', hi: 'इंतज़ार करती है', pron: 'VAR-tet', type: 'Verb · warten auf (+Akk.)' },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'AN-na', type: 'Name' },
      { w: 'auf', role: 'r-preposition', en: 'for', hi: 'का', pron: 'owf', type: 'Preposition · Akk. (fest)', why: 'warten auf (this chapter).', ex: 'auf einen Anruf warten', exEn: 'to wait for a call' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'wichtigen', role: 'r-akkusativ', en: 'important', hi: 'महत्वपूर्ण', pron: 'VIKH-ti-gen', type: 'Adjective' },
      { w: 'Anruf', role: 'r-akkusativ', en: 'call', hi: 'फोन कॉल', pron: 'AN-roof', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'interessiert', role: 'r-verb', en: 'is interested', hi: 'रुचि रखती है', pron: 'in-tair-e-SEERT', type: 'Verb · sich interessieren für (+Akk.)' },
      { w: 'sich', role: 'r-reflexiv', en: 'herself', hi: 'खुद', pron: 'zikh', type: 'Reflexivpronomen' },
      { w: 'für', role: 'r-preposition', en: 'in', hi: 'में', pron: 'fuer', type: 'Preposition · Akk. (fest)', why: 'sich interessieren für (this chapter).' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Berufswechsel', role: 'r-akkusativ', en: 'career change', hi: 'करियर बदलाव', pron: 'buh-ROOFS-vek-sel', type: 'Noun · masc.', why: 'der Berufswechsel (this chapter).' },
      { w: '.', plain: true },
      { w: 'Neben', role: 'r-place', en: 'next to', hi: 'के बगल में', pron: 'NAY-ben', type: 'Preposition · Dat.' },
      { w: 'ihr', role: 'r-dativ', en: 'her (dat.)', hi: 'उसका', pron: 'eer', type: 'Pronoun · Dat.' },
      { w: 'sitzt', role: 'r-verb', en: 'sits', hi: 'बैठा है', pron: 'zitst', type: 'Verb · sitzen' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'who', hi: 'जो', pron: 'dair', type: 'Pronoun' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
      { w: 'an', role: 'r-preposition', en: 'of', hi: 'के बारे में', pron: 'an', type: 'Preposition · Akk. (fest)', why: 'denken an (this chapter).' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Musiker', role: 'r-akkusativ', en: 'musician', hi: 'संगीतकार', pron: 'moo-ZEE-ker', type: 'Noun · masc.', why: 'der Musiker (this chapter).' },
      { w: 'denkt', role: 'r-verb', en: 'thinks', hi: 'सोचता है', pron: 'denkt', type: 'Verb · denken (er)' },
      { w: '.', plain: true },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'freut', role: 'r-verb', en: 'looks forward', hi: 'उत्सुक है', pron: 'froyt', type: 'Verb · sich freuen auf (+Akk.)' },
      { w: 'sich', role: 'r-reflexiv', en: 'himself', hi: 'खुद', pron: 'zikh', type: 'Reflexivpronomen' },
      { w: 'auf', role: 'r-preposition', en: 'to', hi: 'को', pron: 'owf', type: 'Preposition · Akk. (fest)', why: 'sich freuen auf (this chapter).' },
      { w: 'das', role: 'r-akkusativ', en: 'the (neut. acc.)', hi: 'यह', pron: 'das', type: 'Article · acc.' },
      { w: 'Musikfestival', role: 'r-akkusativ', en: 'music festival', hi: 'संगीत महोत्सव', pron: 'moo-ZEEK-fes-ti-val', type: 'Noun · neut.', why: 'das Musikfestival (this chapter).' },
      { w: 'nächste', role: 'r-time', en: 'next', hi: 'अगला', pron: 'NAYKS-tuh', type: 'Adjective' },
      { w: 'Woche', role: 'r-time', en: 'week', hi: 'हफ्ता', pron: 'VO-khuh', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'spricht', role: 'r-verb', en: 'speaks', hi: 'बात करता है', pron: 'shprikht', type: 'Verb · sprechen mit (+Dat.)' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition · Dat. (fest)', why: 'sprechen mit (this chapter).' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dat.' },
      { w: 'Kunstexperten', role: 'r-dativ', en: 'art expert', hi: 'कला विशेषज्ञ', pron: 'KOONST-ex-per-ten', type: 'Noun · masc.', why: 'der Kunstexperte (this chapter).' },
      { w: 'über', role: 'r-preposition', en: 'about', hi: 'बारे में', pron: 'UE-ber', type: 'Preposition · Akk.' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Roman', role: 'r-akkusativ', en: 'novel', hi: 'उपन्यास', pron: 'ro-MAHN', type: 'Noun · masc.', why: 'der Roman (this chapter).' },
      { w: ',', plain: true },
      { w: 'der', role: 'r-subject', en: 'which', hi: 'जो', pron: 'dair', type: 'Pronoun' },
      { w: 'von', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'fon', type: 'Preposition · Dat. (fest)', why: 'handeln von (this chapter).' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dat.' },
      { w: 'König', role: 'r-dativ', en: 'king', hi: 'राजा', pron: 'KOE-nikh', type: 'Noun · masc.', why: 'der König (this chapter).' },
      { w: 'handelt', role: 'r-verb', en: 'is about', hi: 'के बारे में है', pron: 'HAN-delt', type: 'Verb · handeln (er)' },
      { w: '.', plain: true }
    ],
    translation: 'In the station hall, Anna waits for an important call. She\'s interested in a career change. Next to her sits Max, who often thinks of a musician. Max is looking forward to the music festival next week. Rohan talks with an art expert about a novel that is about a king.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_030_L001', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wartest du auch auf den Zug?', en: 'Timo, are you also waiting for the train?' },
      { id: 'A2_030_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, ich warte auf den Zug nach Hamburg. Freust du dich auf das Wochenende?', en: 'Yes, I\'m waiting for the train to Hamburg. Are you looking forward to the weekend?' },
      { id: 'A2_030_L003', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Sehr! Ich interessiere mich für einen neuen Job dort.', en: 'Very much! I\'m interested in a new job there.' },
      { id: 'A2_030_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich glaube an dich, das wird gut!', en: 'I believe in you, that will go well!' }
    ],
    transcript: 'Timo, wartest du auch auf den Zug? Ja, ich warte auf den Zug nach Hamburg. Freust du dich auf das Wochenende? Sehr! Ich interessiere mich für einen neuen Job dort. Ich glaube an dich, das wird gut!',
    translation: 'Timo, are you also waiting for the train? Yes, I\'m waiting for the train to Hamburg. Are you looking forward to the weekend? Very much! I\'m interested in a new job there. I believe in you, that will go well!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wartest' },
      { w: 'du' },
      { w: 'auch' },
      { w: 'auf' },
      { w: 'den' },
      { w: 'Zug' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'warte' },
      { w: 'auf' },
      { w: 'den' },
      { w: 'Zug' },
      { w: 'nach' },
      { w: 'Hamburg' },
      { w: '.', plain: true },
      { w: 'Freust' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'auf' },
      { w: 'das' },
      { w: 'Wochenende' },
      { w: '?', plain: true },
      { w: 'Sehr' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'interessiere' },
      { w: 'mich' },
      { w: 'für' },
      { w: 'einen' },
      { w: 'neuen' },
      { w: 'Job' },
      { w: 'dort' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'glaube' },
      { w: 'an' },
      { w: 'dich' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'wird' },
      { w: 'gut' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Wofür interessiert sich Wibke?', qEn: 'What is Wibke interested in?', options: ['ein neues Auto', 'ein neuer Job', 'eine neue Wohnung', 'ein neuer Kurs'], optionsEn: ['a new car', 'a new job', 'a new flat', 'a new course'], answer: 1,
        explain: '"Ich interessiere mich für einen neuen Job dort."' },
      { q: 'Auf welchen Zug wartet Timo?', qEn: 'What train is Timo waiting for?', options: ['nach Berlin', 'nach Hamburg', 'nach München', 'nach Wien'], optionsEn: ['to Berlin', 'to Hamburg', 'to Munich', 'to Vienna'], answer: 1,
        explain: '"Ich warte auf den Zug nach Hamburg."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Worauf wartest du?", taskEn: "Your friend asks: what are you waiting for?", de: "Ich warte auf einen Anruf wegen der Stelle.", en: "I'm waiting for a call about the job." },
    { task: "Dein Kollege fragt: An was denkst du gerade?", taskEn: "Your colleague asks: what are you thinking about?", de: "Ich denke an meinen Berufswechsel.", en: "I'm thinking about changing career." },
    { task: "Dein Partner fragt: Wovon träumst du?", taskEn: "Your partner asks: what do you dream of?", de: "Ich träume von mehr Freiheit im Beruf.", en: "I dream of more freedom at work." },
    { task: "Deine Schwester fragt: Worauf freust du dich?", taskEn: "Your sister asks: what are you looking forward to?", de: "Ich freue mich auf den Austausch nächstes Jahr.", en: "I'm looking forward to the exchange next year." },
    { task: "Deine Chefin fragt: Interessieren Sie sich für die neue Aufgabe?", taskEn: "Your boss asks: are you interested in the new task?", de: "Ja, ich interessiere mich sehr für diesen Einsatz.", en: "Yes, I'm very interested in this assignment." },
    { task: "Dein Freund fragt: Worüber habt ihr gesprochen?", taskEn: "Your friend asks: what did you talk about?", de: "Wir haben über den Berufswunsch meiner Tochter gesprochen.", en: "We talked about my daughter's career plans." },
    { task: "Deine Kollegin fragt: Rechnest du mit einer Antwort?", taskEn: "Your colleague asks: are you expecting an answer?", de: "Ich rechne mit einer Meldung bis Freitag.", en: "I'm expecting word by Friday." },
    { task: "Dein Bruder fragt: Auf wen wartest du am Bahnhof?", taskEn: "Your brother asks: who are you waiting for at the station?", de: "Ich warte auf einen Musiker aus meinem Kurs.", en: "I'm waiting for a musician from my course." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short email (six sentences) about your hobbies and plans, using at least three fixed verb-preposition pairs from this chapter (e.g. sich freuen auf, sich interessieren für, sprechen mit, träumen von). Try this chapter\'s words: der Musiker, das Telefonat, der Roman.',
    starters: ['Ich interessiere mich für …', 'Ich freue mich auf …', 'Ich spreche oft mit …', 'Ich träume von …'],
    placeholder: 'Ich interessiere mich für Musik. Ich freue mich schon auf das nächste Konzert…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct preposition: "Ich warte ___ den Bus."',
      options: ['für', 'auf', 'mit'],
      answer: 1,
      explain: 'warten always pairs with auf (+Akk.), never für.'
    },
    gap: {
      sentence: ['Ich spreche ', ' meiner Lehrerin.'],
      gaps: [ { answer: 'mit', accepts: ['mit'] } ],
      explain: 'sprechen always pairs with mit (+Dativ), never zu.'
    },
    match: {
      q: 'Match each verb to its fixed preposition.',
      pairs: [
        { noun: 'warten', art: 'auf (+Akk.) — to wait for' },
        { noun: 'denken', art: 'an (+Akk.) — to think of' },
        { noun: 'sich interessieren', art: 'für (+Akk.) — to be interested in' },
        { noun: 'sprechen', art: 'mit (+Dativ) — to speak with' },
        { noun: 'träumen', art: 'von (+Dativ) — to dream of' },
        { noun: 'gehören', art: 'zu (+Dativ) — to belong to' }
      ]
    },
    builder: {
      target: 'Build: "I\'m interested in a career change."',
      bank: ['Ich', 'interessiere', 'mich', 'für', 'einen', 'Berufswechsel', '.'],
      answer: ['Ich', 'interessiere', 'mich', 'für', 'einen', 'Berufswechsel', '.'],
      roles: { 'Ich': 'r-subject', 'interessiere': 'r-verb', 'mich': 'r-reflexiv', 'für': 'r-preposition', 'Berufswechsel': 'r-akkusativ' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich denke oft ___ dich."', options: ['über', 'an', 'für'], answer: 1,
      explain: 'denken always pairs with an (+Akk.).' },
    { q: 'Complete: "Ich interessiere mich ___ Musik."', options: ['an', 'für', 'von'], answer: 1,
      explain: 'sich interessieren always pairs with für (+Akk.).' },
    { q: 'Which case follows "sprechen mit", "träumen von", and "gehören zu"?', options: ['Akkusativ', 'Dativ', 'Nominativ'], answer: 1,
      explain: 'mit, von, and zu always take the Dativ.' },
    { q: 'Which is correct?', options: ['Ich warte für den Bus.', 'Ich warte auf den Bus.', 'Ich warte mit den Bus.'], answer: 1,
      explain: 'warten always pairs with auf, never für or mit.' },
    { q: 'Which question word asks about "sich freuen auf"?', options: ['Worauf?', 'Woran?', 'Womit?'], answer: 0,
      explain: 'Worauf freust du dich? matches the auf preposition.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-preposition', html: 'Akkusativ verbs: <span class="de">warten <b>auf</b></span>, <span class="de">denken <b>an</b></span>, <span class="de">sich interessieren <b>für</b></span>, <span class="de">bitten <b>um</b></span> — and their reflexive cousins <span class="de">sich freuen auf</span>, <span class="de">sich erinnern an</span>, <span class="de">sich entscheiden für</span>, <span class="de">sich kümmern um</span>.' },
    { c: 'r-preposition', html: 'Dativ verbs: <span class="de">sprechen <b>mit</b></span>, <span class="de">träumen <b>von</b></span>, <span class="de">gehören <b>zu</b></span> — and their cousins <span class="de">reden/telefonieren/anfangen/aufhören mit</span>, <span class="de">erzählen/handeln von</span>, <span class="de">passen zu</span>.' },
    { c: 'r-question', html: 'Ask with <span class="de r-question">worauf/woran/wofür/worum</span> (things) or <span class="de r-question">mit wem/von wem</span> (people) — never swap the fixed preposition.' }
  ],
  revisionTips: [
    'Learn each verb together with its preposition as one unit — never translate the English preposition word-for-word (warten für is always wrong; it\'s warten auf).',
    'Akkusativ group: auf, an, für, um. Dativ group: mit, von, zu. Group by preposition, not by verb, to memorise faster.',
    'For things, ask with wo(r)- + preposition (worauf, woran, wofür, worum, wovon); for people, ask with the preposition + wem (mit wem, von wem).'
  ]
};

window.CHAPTER = CHAPTER;
