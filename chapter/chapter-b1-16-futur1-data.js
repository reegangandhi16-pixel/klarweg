/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 16
   "Futur I" — werden + Infinitiv (Satzende) for future plans,
   predictions, promises, and present-moment assumptions
   (Vermutung). Präsens vs Futur I contrast included.
   IMPORTANT: dialogue uses ONLY Emke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-16 list (139 items) — a
   future-technology / smart-home / songwriting theme
   (Sprachassistent, Smart Home, Drohne, Fingerabdruck, Chip,
   Alarmanlage, Songwriter, Melodie…) — an excellent natural fit
   for predictions about the future, woven into the story and
   reading passage.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-16-futur1',
  phase: 'B1 · Phase 1',
  number: 16,
  title: 'Futur I',
  titleEn: 'Future tense I',
  description: 'werden + Infinitiv (Satzende). Ich werde dir helfen. Morgen wird es regnen. Er wird jetzt zu Hause sein. One structure, four jobs: future plans, predictions, promises, and assumptions about right now.',
  xp: 250,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 17, title: 'Nebensätze mit damit & um ... zu', titleEn: 'Purpose clauses: damit & um ... zu' , href: 'chapter-b1-17-nebensatz-damit-um-zu.html' },

  prevChapter: { number: 15, title: 'N-Deklination', titleEn: 'N-declension (weak masculine nouns)', href: 'chapter-b1-15-n-deklination.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one future.</em>',
    intro: 'On Silvesterabend, Emke and Timo plan their year ahead — a smart home, blinds and lights controlled from a phone, a budget kept modest — using Futur I for plans, predictions, promises and assumptions about what\'s coming.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear werden + Infinitiv used for four different jobs in one conversation'
    ],
    scene: 'Silvesterabend — Emke und Timo planen das neue Jahr',
    femaleSpeakers: ['Emke'],
    dialogue: [
      { speaker: 'Emke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'ख़रीदूंगी', pron: 'VAIR-duh', type: 'Verb · werden (Futur I, ich)', why: 'werden + Infinitiv = Futur I (this chapter).', ex: 'Ich werde ein Smart Home kaufen.', exEn: 'I will buy a smart home.' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Smart', role: 'r-akkusativ', en: 'smart', hi: 'स्मार्ट', pron: 'smart', type: 'Adjective' },
        { w: 'Home', role: 'r-akkusativ', en: 'home', hi: 'होम', pron: 'hohm', type: 'Noun · neut.' },
        { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदना', pron: 'KOW-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I will soon buy myself a smart home.', hi: 'Main jald khud ke liye ek smart home khareedungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'wirst', role: 'r-verb', en: 'will you', hi: 'करोगी', pron: 'VIRST', type: 'Verb · werden (Futur I, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'damit', role: 'r-akkusativ', en: 'with it', hi: 'उससे', pron: 'da-MIT', type: 'Adverb' },
        { w: 'steuern', role: 'r-verb', en: 'control', hi: 'नियंत्रित करना', pron: 'SHTOY-ern', type: 'Verb · infinitive (Satzende)', why: 'steuern = to control (this chapter).', ex: 'Was wirst du steuern?', exEn: 'What will you control?' },
        { w: '?', plain: true }
      ], en: 'What will you control with it?', hi: 'Tum usse kya niyantrit karogi?' },
      { speaker: 'Emke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'करूंगी', pron: 'VAIR-duh', type: 'Verb · werden (Futur I, ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Jalousie', role: 'r-akkusativ', en: 'blind', hi: 'पर्दा', pron: 'zha-loo-ZEE', type: 'Noun · fem.', why: 'die Jalousie (this chapter).', ex: 'Ich werde die Jalousie steuern.', exEn: 'I will control the blind.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Licht', role: 'r-akkusativ', en: 'light', hi: 'रोशनी', pron: 'likht', type: 'Noun · neut.' },
        { w: 'steuern', role: 'r-verb', en: 'control', hi: 'नियंत्रित करना', pron: 'SHTOY-ern', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I will control the blind and the light.', hi: 'Main parda aur roshni niyantrit karungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I, es)' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'teuer', role: 'r-subject', en: 'expensive', hi: 'महंगा', pron: 'TOY-er', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Will that be expensive?', hi: 'Kya yeh mehanga hoga?' },
      { speaker: 'Emke', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'दूंगी', pron: 'VAIR-duh', type: 'Verb · werden (Futur I, ich)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'ज़्यादा', pron: 'feel', type: 'Adverb' },
        { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.' },
        { w: 'ausgeben', role: 'r-verb', en: 'spend', hi: 'ख़र्च करना', pron: 'OWS-gay-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, I will not spend much money.', hi: 'Nahi, main zyada paisa kharch nahi karungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Werden', role: 'r-verb', en: 'will', hi: 'होंगे', pron: 'VAIR-den', type: 'Verb · werden (Futur I, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतने', pron: 'zo', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition + place' },
        { w: 'meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरे', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'Wohnung', role: 'r-dativ', en: 'apartment (dat.)', hi: 'अपार्टमेंट में', pron: 'VO-nung', type: 'Noun · fem. dat.' },
        { w: 'installieren', role: 'r-verb', en: 'install', hi: 'लगाना', pron: 'in-sta-LEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Will we also install something like that in my apartment?', hi: 'Kya hum mere apartment mein bhi aisa kuch install karenge?' },
      { speaker: 'Emke', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगा', pron: 'virt', type: 'Verb · werden (Futur I, es)' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'funktionieren', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'funk-tsyo-NEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Sure! That will surely work well.', hi: 'Bilkul! Yeh zaroor achhe se kaam karega.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Futur I is one structure — <span class="de r-futur">werden</span> (conjugated, Position 2) + <b>Infinitiv</b> (Satzende) — doing four different jobs: a <b>future plan</b> (<span class="de">Ich werde nächstes Jahr studieren.</span>), a <b>prediction</b> (<span class="de">Morgen wird es regnen.</span>), a <b>promise</b> (<span class="de">Ich werde dir helfen.</span>), or an <b>assumption about right now</b> (<span class="de">Er wird jetzt zu Hause sein.</span>). Präsens works for plain future plans too — Futur I adds emphasis or certainty.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is FUTUR I (B1 level only): werden (conjugated: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden) + Infinitiv at the very end of the clause, used for (1) future plans, (2) predictions, (3) promises, and (4) present-moment assumptions (Vermutung). Präsens is equally correct for plain future plans — Futur I is chosen for emphasis, clarity, or when the four uses above call for it. ' +
    'Do NOT expect Futur II, passive Futur, Konjunktiv Futur, or other B2 future structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- werden must agree with its subject: ich werde, du wirst, er/sie/es wird, wir/sie/Sie werden, ihr werdet.\n' +
    '- The lexical verb MUST be a bare Infinitiv at the very end of the clause — never a conjugated verb, never a Partizip II: "Ich werde morgen arbeiten" not "Ich werde morgen arbeite" or "Ich werde morgen gearbeitet."\n' +
    '- Only ONE verb form goes at the end — modal + infinitive combinations inside Futur I are out of scope for this chapter; if the learner attempts "Ich werde kommen können," treat it as an advanced structure, not an error to focus on unless clearly broken.\n' +
    '- Time expressions and other adverbs sit in the MIDDLE FIELD, between werden and the final infinitive — never after the infinitive: "Ich werde morgen nach Berlin fahren" not "Ich werde nach Berlin fahren morgen."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Futur I check:</b> one sentence on whether werden agreed with its subject and the infinitive correctly stayed at the end.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you use werden + Infinitiv confidently for plans, predictions, promises, and assumptions. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the four-uses table once — especially the assumption (Vermutung) use, which surprises many learners — then continue.',
    low: 'Worth another pass through the Grammar section — practise placing the infinitive at the very end, with time words in the middle, for five different sentences.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'werde', role: 'r-futur' },
    { w: 'dir', role: 'plain' }, { w: 'morgen', role: 'plain' },
    { w: 'helfen', role: 'r-futur' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: werden + Infinitiv does four different jobs.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Emke and Timo talk about smart-home plans, predictions, and New Year\'s resolutions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 139 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master werden conjugation, Futur I formation, and its four uses.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage predicting future technology, full of Futur I.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Futur I in natural speech and identify which of the four uses applies.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about future plans, predictions, promises, and dreams using Futur I.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write future plans or a prediction using Futur I naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Präsens→Futur I transformation and correct infinitive placement.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 139 chapter words — future-technology and smart-home vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '22 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Präsens→Futur I transformation drills, werden-conjugation practice, error correction, and a predictions-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Futur I reference — werden conjugation, formation chart, the four uses, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich werde studieren.', text: 'Talk about future plans with Futur I' },
    { de: 'Morgen wird es regnen.', text: 'Make predictions with Futur I' },
    { de: 'Ich werde dir helfen.', text: 'Make promises with Futur I' },
    { de: 'Er wird zu Hause sein.', text: 'Express assumptions about the present' },
    { de: 'Präsens vs. Futur I', text: 'Choose between the two naturally' }
  ],

  // ---------- Vocabulary (139 items — full chapter-16 upload list) ----------
  vocab: [
    { de: 'Anlass', art: 'der', gender: 'm', plural: 'Anlässe', pos: 'noun', level: 'B1', en: 'reason, occasion', hi: 'कारण', ex: 'Was ist der Anlass für die Feier?', exEn: 'What\'s the occasion for the celebration?', exHi: 'Utsav ka kaaran kya hai?' },
    { de: 'Praktikant', art: 'der', gender: 'm', plural: 'Praktikanten', pos: 'noun', level: 'B1', en: 'intern', hi: 'प्रशिक्षु', ex: 'Der Praktikant wird bald übernommen.', exEn: 'The intern will soon be hired permanently.', exHi: 'Prashikshu ko jaldi hi sthaayi kiya jaayega.' },
    { de: 'Mobilität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'mobility', hi: 'गतिशीलता', ex: 'Die Mobilität wird sich stark ändern.', exEn: 'Mobility will change a lot.', exHi: 'Gatishilta mein bahut badlaav aayega.' },
    { de: 'Prognose', art: 'die', gender: 'f', plural: 'Prognosen', pos: 'noun', level: 'B1', en: 'prognosis, forecast', hi: 'पूर्वानुमान', ex: 'Die Prognose für morgen ist gut.', exEn: 'Tomorrow\'s forecast is good.', exHi: 'Kal ka poorvanumaan achha hai.' },
    { de: 'Technologie', art: 'die', gender: 'f', plural: 'Technologien', pos: 'noun', level: 'B1', en: 'technology', hi: 'तकनीक', ex: 'Wegen der neuen Technologie wird sich vieles ändern.', exEn: 'Because of new technology, a lot will change.', exHi: 'Nayi takneek ki wajah se bahut kuch badlega.' },
    { de: 'Wahrheit', art: 'die', gender: 'f', plural: 'Wahrheiten', pos: 'noun', level: 'B1', en: 'truth', hi: 'सच्चाई', ex: 'Er wird die Wahrheit sagen.', exEn: 'He will tell the truth.', exHi: 'Woh sach bolega.' },
    { de: 'von … aus', pos: 'preposition', level: 'B1', en: 'from', hi: 'से', ex: 'Von hier aus wird man alles sehen.', exEn: 'From here, you\'ll see everything.', exHi: 'Yahan se, sab kuch dikhega.' },
    { de: 'anpassen', pos: 'verb', level: 'B1', en: 'to adjust (an + A.)', hi: 'समायोजित करना', ex: 'Wir werden uns an die neue Technologie anpassen.', exEn: 'We will adjust to the new technology.', exHi: 'Hum nayi takneek ke anusaar khud ko samayojit karenge.', conj: { praesens: 'passt an', praeteritum: 'passte an', perfekt: 'hat angepasst' } },
    { de: 'befragen', pos: 'verb', level: 'B1', en: 'to question', hi: 'पूछताछ करना', ex: 'Der Reporter wird den Experten befragen.', exEn: 'The reporter will question the expert.', exHi: 'Reporter visheshagya se poochtaachh karega.', conj: { praesens: 'befragt', praeteritum: 'befragte', perfekt: 'hat befragt' } },
    { de: 'bemerken', pos: 'verb', level: 'B1', en: 'to notice', hi: 'ध्यान देना', ex: 'Sie wird den Unterschied sofort bemerken.', exEn: 'She will notice the difference immediately.', exHi: 'Woh turant antar dekh legi.', conj: { praesens: 'bemerkt', praeteritum: 'bemerkte', perfekt: 'hat bemerkt' } },
    { de: 'benötigen', pos: 'verb', level: 'B1', en: 'to need', hi: 'ज़रूरत होना', ex: 'Wir werden mehr Zeit benötigen.', exEn: 'We will need more time.', exHi: 'Humein zyada samay ki zaroorat hogi.', conj: { praesens: 'benötigt', praeteritum: 'benötigte', perfekt: 'hat benötigt' } },
    { de: 'bereits', pos: 'adverb', level: 'B1', en: 'already', hi: 'पहले से', ex: 'Das Projekt wird bereits nächste Woche starten.', exEn: 'The project will already start next week.', exHi: 'Project agle hafte se hi shuru ho jaayega.' },
    { de: 'berühren', pos: 'verb', level: 'B1', en: 'to touch', hi: 'छूना', ex: 'Die Rede wird viele Menschen berühren.', exEn: 'The speech will touch many people.', exHi: 'Bhaashan kai logon ko chhu jaayega.', conj: { praesens: 'berührt', praeteritum: 'berührte', perfekt: 'hat berührt' } },
    { de: 'bewerten', pos: 'verb', level: 'B1', en: 'to evaluate', hi: 'मूल्यांकन करना', ex: 'Die Jury wird den Song bewerten.', exEn: 'The jury will evaluate the song.', exHi: 'Jury gaane ka mulyaankan karegi.', conj: { praesens: 'bewertet', praeteritum: 'bewertete', perfekt: 'hat bewertet' } },
    { de: 'bezeichnen', pos: 'verb', level: 'B1', en: 'to mean, denote', hi: 'इंगित करना', ex: 'Dieser Begriff wird etwas anderes bezeichnen.', exEn: 'This term will denote something else.', exHi: 'Yeh shabd kuch aur hi ishaara karega.', conj: { praesens: 'bezeichnet', praeteritum: 'bezeichnete', perfekt: 'hat bezeichnet' } },
    { de: 'dahin', pos: 'adverb', level: 'B1', en: 'there', hi: 'वहाँ', ex: 'Wir werden dahin fahren.', exEn: 'We will go there.', exHi: 'Hum wahan jaayenge.' },
    { de: 'Musikinstrument', art: 'das', gender: 'n', plural: 'Musikinstrumente', pos: 'noun', level: 'B1', en: 'musical instrument', hi: 'संगीत वाद्ययंत्र', ex: 'Ich werde mit dem Musikinstrument üben.', exEn: 'I\'ll practise with the musical instrument.', exHi: 'Main sangeet vaadyayantra ke saath abhyaas karoongi.' },
    { de: 'dauernd', pos: 'adjective', level: 'B1', en: 'constant', hi: 'लगातार', ex: 'Er wird dauernd zu spät kommen.', exEn: 'He\'ll constantly be late.', exHi: 'Woh lagataar der se aayega.' },
    { de: 'Internationalismus', art: 'der', gender: 'm', plural: 'Internationalismen', pos: 'noun', level: 'B1', en: 'internationalism', hi: 'अंतर्राष्ट्रीयवाद', ex: '"Hotel" ist ein Internationalismus.', exEn: '"Hotel" is an internationalism.', exHi: '"Hotel" ek antarrashtriyavaad shabd hai.' },
    { de: 'Auszeichnung', art: 'die', gender: 'f', plural: 'Auszeichnungen', pos: 'noun', level: 'B1', en: 'award', hi: 'पुरस्कार', ex: 'Sie wird die Auszeichnung gewinnen.', exEn: 'She will win the award.', exHi: 'Woh puraskaar jeetegi.' },
    { de: 'Nutzung', art: 'die', gender: 'f', plural: 'Nutzungen', pos: 'noun', level: 'B1', en: 'usage', hi: 'उपयोग', ex: 'Die Nutzung wird einfacher werden.', exEn: 'Usage will become simpler.', exHi: 'Upyog aasaan ho jaayega.' },
    { de: 'Vorstellung', art: 'die', gender: 'f', plural: 'Vorstellungen', pos: 'noun', level: 'B1', en: 'idea, suggestion', hi: 'विचार', ex: 'Meine Vorstellung wird sich bald ändern.', exEn: 'My idea will soon change.', exHi: 'Mera vichaar jaldi badlega.' },
    { de: 'einfach so', pos: 'idiom', level: 'B1', en: 'just like that', hi: 'बस ऐसे ही', ex: 'Das wird nicht einfach so passieren.', exEn: 'That won\'t just happen like that.', exHi: 'Yeh bas aise hi nahi hoga.' },
    { de: 'einschalten', pos: 'verb', level: 'B1', en: 'to switch on', hi: 'चालू करना', ex: 'Ich werde den Fernseher einschalten.', exEn: 'I\'ll switch on the TV.', exHi: 'Main TV chalu karoongi.', conj: { praesens: 'schaltet ein', praeteritum: 'schaltete ein', perfekt: 'hat eingeschaltet' } },
    { de: 'entsprechen', pos: 'verb', level: 'B1', en: 'to correspond', hi: 'अनुरूप होना', ex: 'Das wird den Erwartungen entsprechen.', exEn: 'That will correspond to expectations.', exHi: 'Yeh ummeedon ke anuroop hoga.', conj: { praesens: 'entspricht', praeteritum: 'entsprach', perfekt: 'hat entsprochen' } },
    { de: 'eventuell', pos: 'adjective', level: 'B1', en: 'potential, possibly', hi: 'संभावित', ex: 'Wir werden eventuell später kommen.', exEn: 'We might possibly come later.', exHi: 'Hum shayad baad mein aayenge.' },
    { de: 'fassen', pos: 'verb', level: 'B1', en: 'to make (einen Vorsatz fassen: to make a resolution)', hi: 'बनाना (संकल्प)', ex: 'Ich werde einen guten Vorsatz fassen.', exEn: 'I\'ll make a good resolution.', exHi: 'Main ek achha sankalp banaoongi.', conj: { praesens: 'fasst', praeteritum: 'fasste', perfekt: 'hat gefasst' } },
    { de: 'frisch', pos: 'adjective', level: 'B1', en: 'fresh (frische Luft: fresh air)', hi: 'ताज़ा', ex: 'Wir werden frische Luft brauchen.', exEn: 'We\'ll need fresh air.', exHi: 'Humein taazi hawa chahiye hogi.' },
    { de: 'gelingen', pos: 'verb', level: 'B1', en: 'to succeed', hi: 'सफल होना', ex: 'Wenn es mir gelingt, wird die Melodie sich einprägen.', exEn: 'If I succeed, the melody will stick.', exHi: 'Agar main safal hua, to dhun yaad rah jaayegi.', conj: { praesens: 'gelingt', praeteritum: 'gelang', perfekt: 'ist gelungen' } },
    { de: 'geschehen', pos: 'verb', level: 'B1', en: 'to happen', hi: 'होना', ex: 'Was wird als Nächstes geschehen?', exEn: 'What will happen next?', exHi: 'Aage kya hoga?', conj: { praesens: 'geschieht', praeteritum: 'geschah', perfekt: 'ist geschehen' } },
    { de: 'Hightech', pos: 'noun', level: 'B1', en: 'high tech', hi: 'हाई-टेक', ex: 'Hightech wird unseren Alltag verändern.', exEn: 'High tech will change our everyday life.', exHi: 'Hai-tech hamare rozmarra ke jeevan ko badal dega.' },
    { de: 'hinsehen', pos: 'verb', level: 'B1', en: 'to look', hi: 'देखना', ex: 'Wenn du genau hinsiehst, wirst du den Chip erkennen.', exEn: 'If you look closely, you\'ll recognize the chip.', exHi: 'Agar tum dhyaan se dekhoge, to chip pehchaan loge.', conj: { praesens: 'sieht hin', praeteritum: 'sah hin', perfekt: 'hat hingesehen' } },
    { de: 'in der Lage sein', pos: 'idiom', level: 'B1', en: 'to be able to', hi: 'सक्षम होना', ex: 'Der Roboter wird in der Lage sein, selbst zu lernen.', exEn: 'The robot will be able to learn by itself.', exHi: 'Robot khud seekhne mein saksham hoga.' },
    { de: 'irgendwann', pos: 'adverb', level: 'B1', en: 'sometime', hi: 'कभी न कभी', ex: 'Irgendwann werden wir alle Drohnen nutzen.', exEn: 'Sometime, we\'ll all use drones.', exHi: 'Kabhi na kabhi, hum sab drone ka istemaal karenge.' },
    { de: 'kommen', pos: 'verb', level: 'B1', en: 'to come (zu Besuch kommen: to come for a visit)', hi: 'मिलने आना', ex: 'Sie wird nächste Woche zu Besuch kommen.', exEn: 'She\'ll come for a visit next week.', exHi: 'Woh agle hafte milne aayegi.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'konkret', pos: 'adjective', level: 'B1', en: 'concrete', hi: 'ठोस', ex: 'Wir werden einen konkreten Plan machen.', exEn: 'We\'ll make a concrete plan.', exHi: 'Hum ek thos yojana banayenge.' },
    { de: 'machen', pos: 'verb', level: 'B1', en: 'to make, turn into (zu + D.)', hi: 'बनाना', ex: 'Das wird die Stadt zu einem Vorbild machen.', exEn: 'That will make the city a model.', exHi: 'Yeh sheher ko ek udaharan bana dega.', conj: { praesens: 'macht', praeteritum: 'machte', perfekt: 'hat gemacht' } },
    { de: 'mitsingen', pos: 'verb', level: 'B1', en: 'to sing along', hi: 'साथ गाना', ex: 'Alle werden mitsingen.', exEn: 'Everyone will sing along.', exHi: 'Sab saath mein gaayenge.', conj: { praesens: 'singt mit', praeteritum: 'sang mit', perfekt: 'hat mitgesungen' } },
    { de: 'nachdenken', pos: 'verb', level: 'B1', en: 'to think (about)', hi: 'सोच-विचार करना', ex: 'Ich werde darüber nachdenken.', exEn: 'I\'ll think about it.', exHi: 'Main uske baare mein sochoongi.', conj: { praesens: 'denkt nach', praeteritum: 'dachte nach', perfekt: 'hat nachgedacht' } },
    { de: 'realisieren', pos: 'verb', level: 'B1', en: 'to realize', hi: 'साकार करना', ex: 'Er wird sein Projekt endlich realisieren.', exEn: 'He\'ll finally realize his project.', exHi: 'Woh aakhirkaar apna project saakaar karega.', conj: { praesens: 'realisiert', praeteritum: 'realisierte', perfekt: 'hat realisiert' } },
    { de: 'sich leisten', pos: 'verb', level: 'B1', en: 'to afford', hi: 'ख़र्च उठा सकना', ex: 'Wir werden uns das neue Smart Home leisten können.', exEn: 'We\'ll be able to afford the new smart home.', exHi: 'Hum naya smart home afford kar sakenge.', conj: { praesens: 'leistet sich', praeteritum: 'leistete sich', perfekt: 'hat sich geleistet' } },
    { de: 'sich vornehmen', pos: 'verb', level: 'B1', en: 'to plan to do sth', hi: 'ठान लेना', ex: 'Was wirst du dir für nächstes Jahr vornehmen?', exEn: 'What will you resolve to do next year?', exHi: 'Tum agle saal ke liye kya thaanoge?', conj: { praesens: 'nimmt sich vor', praeteritum: 'nahm sich vor', perfekt: 'hat sich vorgenommen' } },
    { de: 'sicher', pos: 'adjective', level: 'B1', en: 'safe, certain', hi: 'सुरक्षित / निश्चित', ex: 'Das neue System wird sicherer sein.', exEn: 'The new system will be safer.', exHi: 'Naya system zyada surakshit hoga.' },
    { de: 'Silvester', pos: 'noun', level: 'B1', en: 'New Year\'s Eve', hi: 'नया साल', ex: 'An Silvester werden wir feiern.', exEn: 'On New Year\'s Eve, we\'ll celebrate.', exHi: 'Naye saal ki shaam ko, hum jashn manaayenge.' },
    { de: 'smart', pos: 'adjective', level: 'B1', en: 'smart', hi: 'स्मार्ट', ex: 'Unser Haus wird bald smart sein.', exEn: 'Our house will soon be smart.', exHi: 'Hamara ghar jaldi smart ho jaayega.' },
    { de: 'sparsam', pos: 'adjective', level: 'B1', en: 'frugal, economical', hi: 'मितव्ययी', ex: 'Das neue Auto wird sparsamer sein.', exEn: 'The new car will be more economical.', exHi: 'Nayi car zyada mitavyayi hogi.' },
    { de: 'steuern', pos: 'verb', level: 'B1', en: 'to control', hi: 'नियंत्रित करना', ex: 'Ich werde die Jalousien automatisch steuern.', exEn: 'I\'ll control the shutters automatically.', exHi: 'Main jaalidaar khidkiyon ko automatically control karoongi.', conj: { praesens: 'steuert', praeteritum: 'steuerte', perfekt: 'hat gesteuert' } },
    { de: 'Süßes', pos: 'noun', level: 'B1', en: 'sweets, something sweet', hi: 'मीठा', ex: 'Zu Silvester wird es Süßes geben.', exEn: 'At New Year\'s Eve, there will be sweets.', exHi: 'Naye saal ki shaam ko, meetha milega.' },
    { de: 'trotz', pos: 'preposition', level: 'B1', en: 'despite (+ Genitiv)', hi: 'के बावजूद', ex: 'Trotz des Regens werden wir feiern.', exEn: 'Despite the rain, we\'ll celebrate.', exHi: 'Baarish ke bawajood, hum jashn manaayenge.' },
    { de: 'verständlich', pos: 'adjective', level: 'B1', en: 'understandable', hi: 'समझने योग्य', ex: 'Die Erklärung wird verständlich sein.', exEn: 'The explanation will be understandable.', exHi: 'Vyakhya samajh mein aayegi.' },
    { de: 'von Hand', pos: 'idiom', level: 'B1', en: 'by hand', hi: 'हाथ से', ex: 'Er wird das Instrument von Hand bauen.', exEn: 'He\'ll build the instrument by hand.', exHi: 'Woh vaadyayantra haath se banayega.' },
    { de: 'wegen', pos: 'preposition', level: 'B1', en: 'because of (+ Genitiv)', hi: 'की वजह से', ex: 'Wegen der neuen Technologie wird sich vieles ändern.', exEn: 'Because of new technology, a lot will change.', exHi: 'Nayi takneek ki wajah se bahut kuch badlega.' },
    { de: 'werden', pos: 'verb', level: 'B1', en: 'will (Futur-Hilfsverb)', hi: 'होगा (भविष्य सहायक क्रिया)', ex: 'Was wird sich ändern?', exEn: 'What will change?', exHi: 'Kya badlega?', conj: { praesens: 'wird', praeteritum: 'wurde', perfekt: 'ist geworden' } },
    { de: 'wessen', pos: 'pronoun', level: 'B1', en: 'whose', hi: 'किसका', ex: 'Wessen Idee wird gewinnen?', exEn: 'Whose idea will win?', exHi: 'Kiska vichaar jeetega?' },
    { de: 'zu Besuch kommen', pos: 'idiom', level: 'B1', en: 'to come for a visit', hi: 'मिलने आना', ex: 'Sie wird nächste Woche zu Besuch kommen.', exEn: 'She\'ll come for a visit next week.', exHi: 'Woh agle hafte milne aayegi.' },
    { de: 'übernehmen', pos: 'verb', level: 'B1', en: 'to take on', hi: 'संभालना', ex: 'Der Praktikant wird bald übernommen.', exEn: 'The intern will soon be hired permanently.', exHi: 'Prashikshu ko jaldi hi sthaayi kiya jaayega.', conj: { praesens: 'übernimmt', praeteritum: 'übernahm', perfekt: 'hat übernommen' } },
    { de: 'Hauptproblem', art: 'das', gender: 'n', plural: 'Hauptprobleme', pos: 'noun', level: 'B1', en: 'main problem', hi: 'मुख्य समस्या', ex: 'Das Hauptproblem wird der Preis sein.', exEn: 'The main problem will be the price.', exHi: 'Mukhya samasya keemat hogi.' },
    { de: 'Lastenfahrrad', art: 'das', gender: 'n', plural: 'Lastenfahrräder', pos: 'noun', level: 'B1', en: 'freight bicycle', hi: 'भारवाहक साइकिल', ex: 'Er wird ein Lastenfahrrad kaufen.', exEn: 'He\'ll buy a freight bicycle.', exHi: 'Woh ek bhaarvaahak cycle khareedega.' },
    { de: 'Magazin', art: 'das', gender: 'n', plural: 'Magazine', pos: 'noun', level: 'B1', en: 'magazine', hi: 'पत्रिका', ex: 'Das Magazin wird bald erscheinen.', exEn: 'The magazine will come out soon.', exHi: 'Patrika jaldi hi prakashit hogi.' },
    { de: 'Piano', art: 'das', gender: 'n', plural: 'Pianos', pos: 'noun', level: 'B1', en: 'piano', hi: 'पियानो', ex: 'Ich werde das Piano lernen.', exEn: 'I\'ll learn the piano.', exHi: 'Main piano seekhoongi.' },
    { de: 'Schlagzeug', art: 'das', gender: 'n', plural: 'Schlagzeuge', pos: 'noun', level: 'B1', en: 'drums', hi: 'ड्रम', ex: 'Er wird das Schlagzeug spielen.', exEn: 'He\'ll play the drums.', exHi: 'Woh drum bajayega.' },
    { de: 'Smart Home', art: 'das', gender: 'n', plural: 'Smart Homes', pos: 'noun', level: 'B1', en: 'smart home', hi: 'स्मार्ट होम', ex: 'Nächstes Jahr werde ich ein Smart Home einrichten.', exEn: 'Next year, I\'ll set up a smart home.', exHi: 'Agle saal, main smart home set up karoongi.' },
    { de: 'Zitat', art: 'das', gender: 'n', plural: 'Zitate', pos: 'noun', level: 'B1', en: 'quote', hi: 'उद्धरण', ex: 'Das Zitat wird oft verwendet.', exEn: 'The quote is often used.', exHi: 'Yeh udaharan aksar upyog hota hai.' },
    { de: 'Affe', art: 'der', gender: 'm', plural: 'Affen', pos: 'noun', level: 'B1', en: 'monkey', hi: 'बंदर', ex: 'Der Affe wird bald ins Gehege zurückkehren.', exEn: 'The monkey will soon return to the enclosure.', exHi: 'Bandar jaldi hi baare mein wapas jaayega.' },
    { de: 'Bass', art: 'der', gender: 'm', plural: 'Bässe', pos: 'noun', level: 'B1', en: 'bass', hi: 'बास', ex: 'Er wird den Bass spielen.', exEn: 'He\'ll play the bass.', exHi: 'Woh bass bajayega.' },
    { de: 'Chip', art: 'der', gender: 'm', plural: 'Chips', pos: 'noun', level: 'B1', en: 'chip', hi: 'चिप', ex: 'Der Chip wird sehr klein sein.', exEn: 'The chip will be very small.', exHi: 'Chip bahut chhota hoga.' },
    { de: 'Coversong', art: 'der', gender: 'm', plural: 'Coversongs', pos: 'noun', level: 'B1', en: 'cover song', hi: 'कवर गीत', ex: 'Sie wird einen Coversong singen.', exEn: 'She\'ll sing a cover song.', exHi: 'Woh ek cover gaana gaayegi.' },
    { de: 'Daten-Chip', art: 'der', gender: 'm', plural: 'Daten-Chips', pos: 'noun', level: 'B1', en: 'data chip', hi: 'डेटा चिप', ex: 'Der Daten-Chip wird alles speichern.', exEn: 'The data chip will store everything.', exHi: 'Data chip sab kuch save karega.' },
    { de: 'Doktorand', art: 'der', gender: 'm', plural: 'Doktoranden', pos: 'noun', level: 'B1', en: 'PhD student', hi: 'पीएचडी छात्र', ex: 'Der Doktorand wird seine Arbeit bald abschließen.', exEn: 'The PhD student will soon finish his work.', exHi: 'PhD chhatra jaldi hi apna kaam poora karega.' },
    { de: 'Einbruch', art: 'der', gender: 'm', plural: 'Einbrüche', pos: 'noun', level: 'B1', en: 'break-in', hi: 'सेंधमारी', ex: 'Die Alarmanlage wird den Einbruch verhindern.', exEn: 'The alarm system will prevent the break-in.', exHi: 'Alarm system sendhamaari ko rokega.' },
    { de: 'Elefant', art: 'der', gender: 'm', plural: 'Elefanten', pos: 'noun', level: 'B1', en: 'elephant', hi: 'हाथी', ex: 'Der Elefant wird bald ankommen.', exEn: 'The elephant will arrive soon.', exHi: 'Haathi jaldi hi pahunchega.' },
    { de: 'Fingerabdruck', art: 'der', gender: 'm', plural: 'Fingerabdrücke', pos: 'noun', level: 'B1', en: 'fingerprint', hi: 'उंगलियों के निशान', ex: 'Die Tür wird sich per Fingerabdruck öffnen.', exEn: 'The door will open via fingerprint.', exHi: 'Darwaaza fingerprint se khulega.' },
    { de: 'Funkkopfhörer', art: 'der', gender: 'm', plural: 'Funkkopfhörer', pos: 'noun', level: 'B1', en: 'wireless headphones', hi: 'वायरलेस हेडफ़ोन', ex: 'Ich werde neue Funkkopfhörer kaufen.', exEn: 'I\'ll buy new wireless headphones.', exHi: 'Main naye wireless headphones khareedoongi.' },
    { de: 'Leser', art: 'der', gender: 'm', plural: 'Leser', pos: 'noun', level: 'B1', en: 'reader', hi: 'पाठक', ex: 'Der Leser wird das Magazin lieben.', exEn: 'The reader will love the magazine.', exHi: 'Paathak patrika ko pasand karega.' },
    { de: 'Löwe', art: 'der', gender: 'm', plural: 'Löwen', pos: 'noun', level: 'B1', en: 'lion', hi: 'शेर', ex: 'Der Löwe wird bald brüllen.', exEn: 'The lion will soon roar.', exHi: 'Sher jaldi hi dahadega.' },
    { de: 'Mars', pos: 'noun', level: 'B1', en: 'Mars', hi: 'मंगल ग्रह', ex: 'Menschen werden bald den Mars besuchen.', exEn: 'Humans will soon visit Mars.', exHi: 'Log jaldi hi Mangal grah jaayenge.' },
    { de: 'Monitor', art: 'der', gender: 'm', plural: 'Monitore', pos: 'noun', level: 'B1', en: 'monitor', hi: 'मॉनिटर', ex: 'Der neue Monitor wird größer sein.', exEn: 'The new monitor will be bigger.', exHi: 'Naya monitor bada hoga.' },
    { de: 'Neubau', art: 'der', gender: 'm', plural: 'Neubauten', pos: 'noun', level: 'B1', en: 'new building', hi: 'नया भवन', ex: 'Der Neubau wird nächstes Jahr fertig.', exEn: 'The new building will be finished next year.', exHi: 'Naya bhavan agle saal poora hoga.' },
    { de: 'Passagier', art: 'der', gender: 'm', plural: 'Passagiere', pos: 'noun', level: 'B1', en: 'passenger', hi: 'यात्री', ex: 'Der Passagier wird pünktlich ankommen.', exEn: 'The passenger will arrive on time.', exHi: 'Yatri samay par pahunchega.' },
    { de: 'Planet', art: 'der', gender: 'm', plural: 'Planeten', pos: 'noun', level: 'B1', en: 'planet', hi: 'ग्रह', ex: 'Der Planet wird immer wärmer.', exEn: 'The planet keeps getting warmer.', exHi: 'Grah lagataar garm ho raha hai.' },
    { de: 'Preis', art: 'der', gender: 'm', plural: 'Preise', pos: 'noun', level: 'B1', en: 'prize, price', hi: 'पुरस्कार / क़ीमत', ex: 'Sie wird den Preis gewinnen.', exEn: 'She\'ll win the prize.', exHi: 'Woh puraskaar jeetegi.' },
    { de: 'Pädagoge', art: 'der', gender: 'm', plural: 'Pädagogen', pos: 'noun', level: 'B1', en: 'educator', hi: 'शिक्षाशास्त्री', ex: 'Der Pädagoge wird das neue Konzept vorstellen.', exEn: 'The educator will present the new concept.', exHi: 'Shikshashaastri naya concept prastut karega.' },
    { de: 'Rhythmus', art: 'der', gender: 'm', plural: 'Rhythmen', pos: 'noun', level: 'B1', en: 'rhythm', hi: 'ताल', ex: 'Der Rhythmus wird sich einprägen.', exEn: 'The rhythm will stick in your mind.', exHi: 'Taal yaad rah jaayega.' },
    { de: 'Slogan', art: 'der', gender: 'm', plural: 'Slogans', pos: 'noun', level: 'B1', en: 'slogan', hi: 'नारा', ex: 'Der neue Slogan wird kurz sein.', exEn: 'The new slogan will be short.', exHi: 'Naya naara chhota hoga.' },
    { de: 'Song', art: 'der', gender: 'm', plural: 'Songs', pos: 'noun', level: 'B1', en: 'song', hi: 'गीत', ex: 'Wirst du wieder einen eigenen Song schreiben?', exEn: 'Will you write your own song again?', exHi: 'Kya tum phir se apna gaana likhoge?' },
    { de: 'Songtitel', art: 'der', gender: 'm', plural: 'Songtitel', pos: 'noun', level: 'B1', en: 'song title', hi: 'गीत का शीर्षक', ex: 'Der Songtitel wird kitschig sein.', exEn: 'The song title will be cheesy.', exHi: 'Gaane ka title bhaavuk hoga.' },
    { de: 'Songwriter', art: 'der', gender: 'm', plural: 'Songwriter', pos: 'noun', level: 'B1', en: 'songwriter', hi: 'गीतकार', ex: 'Der Songwriter wird ein neues Album veröffentlichen.', exEn: 'The songwriter will release a new album.', exHi: 'Geetakaar naya album jaari karega.' },
    { de: 'Sprachassistent', art: 'der', gender: 'm', plural: 'Sprachassistenten', pos: 'noun', level: 'B1', en: 'voice assistant', hi: 'वॉइस असिस्टेंट', ex: 'Wird ein Sprachassistent auch dabei sein?', exEn: 'Will a voice assistant also be included?', exHi: 'Kya voice assistant bhi shaamil hoga?' },
    { de: 'Steh-Sitz-Tisch', art: 'der', gender: 'm', plural: 'Steh-Sitz-Tische', pos: 'noun', level: 'B1', en: 'stand-sit desk', hi: 'खड़े-बैठे मेज़', ex: 'Ich werde einen Steh-Sitz-Tisch kaufen.', exEn: 'I\'ll buy a stand-sit desk.', exHi: 'Main khade-baithe wali table khareedoongi.' },
    { de: 'Stern', art: 'der', gender: 'm', plural: 'Sterne', pos: 'noun', level: 'B1', en: 'star', hi: 'तारा', ex: 'Der Stern wird heute Nacht hell leuchten.', exEn: 'The star will shine brightly tonight.', exHi: 'Aaj raat taara chamkega.' },
    { de: 'Tagesablauf', art: 'der', gender: 'm', plural: 'Tagesabläufe', pos: 'noun', level: 'B1', en: 'daily routine', hi: 'दिनचर्या', ex: 'Mein Tagesablauf wird sich ändern.', exEn: 'My daily routine will change.', exHi: 'Meri dincharya badlegi.' },
    { de: 'Transport', art: 'der', gender: 'm', plural: 'Transporte', pos: 'noun', level: 'B1', en: 'transport', hi: 'परिवहन', ex: 'Der Transport wird per Drohne erfolgen.', exEn: 'Transport will happen via drone.', exHi: 'Parivahan drone ke zariye hoga.' },
    { de: 'Türöffner', art: 'der', gender: 'm', plural: 'Türöffner', pos: 'noun', level: 'B1', en: 'door opener', hi: 'दरवाज़ा खोलने वाला यंत्र', ex: 'Der Türöffner wird per Fingerabdruck funktionieren.', exEn: 'The door opener will work via fingerprint.', exHi: 'Darwaaza kholne wala yantra fingerprint se kaam karega.' },
    { de: 'Vorsatz', art: 'der', gender: 'm', plural: 'Vorsätze', pos: 'noun', level: 'B1', en: 'resolution', hi: 'संकल्प', ex: 'Ich habe einen Vorsatz für Silvester gefasst.', exEn: 'I\'ve made a New Year\'s resolution.', exHi: 'Maine naye saal ke liye ek sankalp banaya hai.' },
    { de: 'Alarmanlage', art: 'die', gender: 'f', plural: 'Alarmanlagen', pos: 'noun', level: 'B1', en: 'alarm system', hi: 'अलार्म प्रणाली', ex: 'Die Alarmanlage wird jeden Einbruch melden.', exEn: 'The alarm system will report every break-in.', exHi: 'Alarm system har sendhamaari ki soochana degi.' },
    { de: 'Ausnahme', art: 'die', gender: 'f', plural: 'Ausnahmen', pos: 'noun', level: 'B1', en: 'exception', hi: 'अपवाद', ex: 'Das wird eine Ausnahme bleiben.', exEn: 'That will remain an exception.', exHi: 'Yeh ek apavaad hi rahega.' },
    { de: 'Ausrede', art: 'die', gender: 'f', plural: 'Ausreden', pos: 'noun', level: 'B1', en: 'excuse', hi: 'बहाना', ex: 'Er wird sicher eine Ausrede finden.', exEn: 'He\'ll surely find an excuse.', exHi: 'Woh zaroor ek bahaana dhoondh lega.' },
    { de: 'Bildunterschrift', art: 'die', gender: 'f', plural: 'Bildunterschriften', pos: 'noun', level: 'B1', en: 'picture caption', hi: 'चित्र का शीर्षक', ex: 'Die Bildunterschrift wird kurz sein.', exEn: 'The picture caption will be short.', exHi: 'Chitra ka shirshak chota hoga.' },
    { de: 'Biografie', art: 'die', gender: 'f', plural: 'Biografien', pos: 'noun', level: 'B1', en: 'biography', hi: 'जीवनी', ex: 'Er wird seine Biografie veröffentlichen.', exEn: 'He\'ll publish his biography.', exHi: 'Woh apni jeevani prakaashit karega.' },
    { de: 'Casting-Show', art: 'die', gender: 'f', plural: 'Casting-Shows', pos: 'noun', level: 'B1', en: 'casting show', hi: 'कास्टिंग शो', ex: 'Sie wird an der Casting-Show teilnehmen.', exEn: 'She\'ll take part in the casting show.', exHi: 'Woh casting show mein bhaag legi.' },
    { de: 'Charts', pos: 'noun', level: 'B1', en: 'charts', hi: 'चार्ट', ex: 'Der Song wird die Charts erreichen.', exEn: 'The song will reach the charts.', exHi: 'Gaana charts tak pahunchega.' },
    { de: 'Doktorandin', art: 'die', gender: 'f', plural: 'Doktorandinnen', pos: 'noun', level: 'B1', en: 'PhD student (female)', hi: 'पीएचडी छात्रा', ex: 'Die Doktorandin wird bald promovieren.', exEn: 'The PhD student will soon graduate.', exHi: 'PhD chhatra jaldi hi degree paayegi.' },
    { de: 'Drohne', art: 'die', gender: 'f', plural: 'Drohnen', pos: 'noun', level: 'B1', en: 'drone', hi: 'ड्रोन', ex: 'Drohnen werden kleine Pakete transportieren.', exEn: 'Drones will transport small packages.', exHi: 'Drone chhote packages pahunchayenge.' },
    { de: 'Einkaufsliste', art: 'die', gender: 'f', plural: 'Einkaufslisten', pos: 'noun', level: 'B1', en: 'shopping list', hi: 'खरीदारी सूची', ex: 'Ich werde eine Einkaufsliste schreiben.', exEn: 'I\'ll write a shopping list.', exHi: 'Main ek khareedaari soochi likhoongi.' },
    { de: 'Flöte', art: 'die', gender: 'f', plural: 'Flöten', pos: 'noun', level: 'B1', en: 'flute', hi: 'बांसुरी', ex: 'Sie wird die Flöte spielen.', exEn: 'She\'ll play the flute.', exHi: 'Woh baansuri bajayegi.' },
    { de: 'Gefahr', art: 'die', gender: 'f', plural: 'Gefahren', pos: 'noun', level: 'B1', en: 'danger', hi: 'ख़तरा', ex: 'Die Alarmanlage wird die Gefahr melden.', exEn: 'The alarm system will report the danger.', exHi: 'Alarm system khatre ki soochna degi.' },
    { de: 'Haustür', art: 'die', gender: 'f', plural: 'Haustüren', pos: 'noun', level: 'B1', en: 'front door', hi: 'मुख्य दरवाज़ा', ex: 'Die Haustür wird sich automatisch öffnen.', exEn: 'The front door will open automatically.', exHi: 'Mukhya darwaaza automatically khulega.' },
    { de: 'Haut', art: 'die', gender: 'f', plural: 'Häute', pos: 'noun', level: 'B1', en: 'skin', hi: 'त्वचा', ex: 'Der Chip wird unter der Haut sitzen.', exEn: 'The chip will sit under the skin.', exHi: 'Chip tvacha ke neeche hoga.' },
    { de: 'Hürde', art: 'die', gender: 'f', plural: 'Hürden', pos: 'noun', level: 'B1', en: 'hurdle', hi: 'बाधा', ex: 'Das wird eine große Hürde sein.', exEn: 'That will be a big hurdle.', exHi: 'Yeh ek badi baadha hogi.' },
    { de: 'Jalousie', art: 'die', gender: 'f', plural: 'Jalousien', pos: 'noun', level: 'B1', en: 'shutter', hi: 'जालीदार खिड़की', ex: 'Ich werde die Jalousien automatisch steuern.', exEn: 'I\'ll control the shutters automatically.', exHi: 'Main jaalidaar khidkiyon ko automatically control karoongi.' },
    { de: 'Jury', art: 'die', gender: 'f', plural: 'Jurys', pos: 'noun', level: 'B1', en: 'jury', hi: 'जूरी', ex: 'Die Jury wird den Song bewerten.', exEn: 'The jury will evaluate the song.', exHi: 'Jury gaane ka mulyaankan karegi.' },
    { de: 'Leserin', art: 'die', gender: 'f', plural: 'Leserinnen', pos: 'noun', level: 'B1', en: 'reader (female)', hi: 'पाठिका', ex: 'Die Leserin wird das Magazin lieben.', exEn: 'The reader will love the magazine.', exHi: 'Paathika patrika ko pasand karegi.' },
    { de: 'Liedzeile', art: 'die', gender: 'f', plural: 'Liedzeilen', pos: 'noun', level: 'B1', en: 'lyric line', hi: 'गीत की पंक्ति', ex: 'Diese Liedzeile wird berühmt werden.', exEn: 'This lyric line will become famous.', exHi: 'Yeh geet ki pankti mashhoor ho jaayegi.' },
    { de: 'Melodie', art: 'die', gender: 'f', plural: 'Melodien', pos: 'noun', level: 'B1', en: 'melody', hi: 'धुन', ex: 'Die Melodie wird sich sofort einprägen.', exEn: 'The melody will stick immediately.', exHi: 'Dhun turant yaad rah jaayegi.' },
    { de: 'Passagierin', art: 'die', gender: 'f', plural: 'Passagierinnen', pos: 'noun', level: 'B1', en: 'passenger (female)', hi: 'यात्री (महिला)', ex: 'Die Passagierin wird pünktlich ankommen.', exEn: 'The passenger will arrive on time.', exHi: 'Yatri samay par pahunchegi.' },
    { de: 'Praktikantin', art: 'die', gender: 'f', plural: 'Praktikantinnen', pos: 'noun', level: 'B1', en: 'intern (female)', hi: 'प्रशिक्षु (महिला)', ex: 'Die Praktikantin wird bald übernommen.', exEn: 'The intern will soon be hired permanently.', exHi: 'Prashikshu ko jaldi hi sthaayi kiya jaayega.' },
    { de: 'Pädagogin', art: 'die', gender: 'f', plural: 'Pädagoginnen', pos: 'noun', level: 'B1', en: 'educator (female)', hi: 'शिक्षाशास्त्री (महिला)', ex: 'Die Pädagogin wird das neue Konzept vorstellen.', exEn: 'The educator will present the new concept.', exHi: 'Shikshashaastri naya concept prastut karegi.' },
    { de: 'Songwriterin', art: 'die', gender: 'f', plural: 'Songwriterinnen', pos: 'noun', level: 'B1', en: 'songwriter (female)', hi: 'गीतकार (महिला)', ex: 'Die Songwriterin wird ein neues Album veröffentlichen.', exEn: 'The songwriter will release a new album.', exHi: 'Geetakaar naya album jaari karegi.' },
    { de: 'Sorge', art: 'die', gender: 'f', plural: 'Sorgen', pos: 'noun', level: 'B1', en: 'worry', hi: 'चिंता', ex: 'Meine Sorge wird bald verschwinden.', exEn: 'My worry will soon disappear.', exHi: 'Meri chinta jaldi khatm ho jaayegi.' },
    { de: 'Taste', art: 'die', gender: 'f', plural: 'Tasten', pos: 'noun', level: 'B1', en: 'key (of an instrument/keyboard)', hi: 'कुंजी', ex: 'Er wird jede Taste am Piano üben.', exEn: 'He\'ll practise every key on the piano.', exHi: 'Woh piano ki har key ka abhyaas karega.' },
    { de: 'Tiefe', art: 'die', gender: 'f', plural: 'Tiefen', pos: 'noun', level: 'B1', en: 'depth', hi: 'गहराई', ex: 'Die Tiefe des Sees wird beeindruckend sein.', exEn: 'The lake\'s depth will be impressive.', exHi: 'Jheel ki gehraai prabhaavshaali hogi.' },
    { de: 'Videonachricht', art: 'die', gender: 'f', plural: 'Videonachrichten', pos: 'noun', level: 'B1', en: 'video message', hi: 'वीडियो संदेश', ex: 'Ich werde dir eine Videonachricht schicken.', exEn: 'I\'ll send you a video message.', exHi: 'Main tumhein ek video message bhejoongi.' },
    { de: 'Violine', art: 'die', gender: 'f', plural: 'Violinen', pos: 'noun', level: 'B1', en: 'violin', hi: 'वायलिन', ex: 'Sie wird die Violine lernen.', exEn: 'She\'ll learn the violin.', exHi: 'Woh violin seekhegi.' },
    { de: 'Vorfreude', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'anticipation', hi: 'प्रत्याशा', ex: 'Die Vorfreude auf Silvester wird groß sein.', exEn: 'The anticipation for New Year\'s Eve will be great.', exHi: 'Naye saal ki pratyaasha badi hogi.' },
    { de: 'Wand', art: 'die', gender: 'f', plural: 'Wände', pos: 'noun', level: 'B1', en: 'wall', hi: 'दीवार', ex: 'Der Monitor wird an der Wand hängen.', exEn: 'The monitor will hang on the wall.', exHi: 'Monitor deewaar par latka hoga.' },
    { de: 'Wohnanlage', art: 'die', gender: 'f', plural: 'Wohnanlagen', pos: 'noun', level: 'B1', en: 'residential complex', hi: 'आवासीय परिसर', ex: 'Die neue Wohnanlage wird modern sein.', exEn: 'The new residential complex will be modern.', exHi: 'Naya aavaasiya parisar aadhunik hoga.' },
    { de: 'Zentrale', art: 'die', gender: 'f', plural: 'Zentralen', pos: 'noun', level: 'B1', en: 'headquarters', hi: 'मुख्यालय', ex: 'Die Zentrale wird alle Daten sammeln.', exEn: 'Headquarters will collect all the data.', exHi: 'Mukhyaalay saara data ekatrit karega.' },
    { de: 'gleichzeitig', pos: 'adjective', level: 'B1', en: 'simultaneous', hi: 'एक साथ', ex: 'Beide Systeme werden gleichzeitig laufen.', exEn: 'Both systems will run simultaneously.', exHi: 'Dono system ek saath chalenge.' },
    { de: 'kitschig', pos: 'adjective', level: 'B1', en: 'cheesy', hi: 'भावुक', ex: 'Der Songtitel wird etwas kitschig sein.', exEn: 'The song title will be a bit cheesy.', exHi: 'Gaane ka title thoda bhaavuk hoga.' },
    { de: 'schweben', pos: 'verb', level: 'B1', en: 'to float', hi: 'तैरना (हवा में)', ex: 'Die Drohne wird über dem Garten schweben.', exEn: 'The drone will float above the garden.', exHi: 'Drone bagiche ke upar tairega.', conj: { praesens: 'schwebt', praeteritum: 'schwebte', perfekt: 'hat geschwebt' } },
    { de: 'stapeln', pos: 'verb', level: 'B1', en: 'to stack', hi: 'ढेर लगाना', ex: 'Er wird die Kisten stapeln.', exEn: 'He\'ll stack the boxes.', exHi: 'Woh dabbon ka dher lagayega.', conj: { praesens: 'stapelt', praeteritum: 'stapelte', perfekt: 'hat gestapelt' } },
    { de: 'staubsaugen', pos: 'verb', level: 'B1', en: 'to vacuum', hi: 'वैक्यूम करना', ex: 'Der Roboter wird jeden Tag staubsaugen.', exEn: 'The robot will vacuum every day.', exHi: 'Robot har din vacuum karega.', conj: { praesens: 'staubsaugt', praeteritum: 'staubsaugte', perfekt: 'hat gestaubsaugt' } },
    { de: 'Futur', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'future (tense)', hi: 'भविष्य काल', ex: 'Das Futur beschreibt kommende Ereignisse.', exEn: 'The future tense describes upcoming events.', exHi: 'Bhavishya kaal aane wali ghatanaon ko batata hai.' },
    { de: 'Bezeichnung', art: 'die', gender: 'f', plural: 'Bezeichnungen', pos: 'noun', level: 'B1', en: 'term', hi: 'शब्दावली', ex: 'Diese Bezeichnung wird bald üblich sein.', exEn: 'This term will soon become common.', exHi: 'Yeh shabdaawali jaldi aam ho jaayegi.' },
    { de: 'n-Deklination', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'N-declension', hi: 'N-विभक्ति', ex: 'Die n-Deklination haben wir letztes Kapitel gelernt.', exEn: 'We learned the N-declension last chapter.', exHi: 'Humne pichhle chapter mein N-vibhakti seekhi.' },
    { de: 'Umschreibung', art: 'die', gender: 'f', plural: 'Umschreibungen', pos: 'noun', level: 'B1', en: 'paraphrase', hi: 'व्याख्या', ex: 'Die Umschreibung wird verständlicher sein.', exEn: 'The paraphrase will be more understandable.', exHi: 'Vyakhya zyada samajh mein aayegi.' },
    { de: 'Vokallänge', art: 'die', gender: 'f', plural: 'Vokallängen', pos: 'noun', level: 'B1', en: 'vowel length', hi: 'स्वर की लंबाई', ex: 'Die Vokallänge wird die Bedeutung ändern.', exEn: 'The vowel length will change the meaning.', exHi: 'Swar ki lambaai matlab badal degi.' },
    { de: 'grad', pos: 'adverb', level: 'B1', en: 'at the moment (colloquial: gerade)', hi: 'अभी', ex: 'Ich bin grad beschäftigt.', exEn: 'I\'m busy at the moment.', exHi: 'Main abhi vyast hoon.' },
    { de: 'selber', pos: 'pronoun', level: 'B1', en: 'self, oneself', hi: 'खुद', ex: 'Ich werde das selber machen.', exEn: 'I\'ll do that myself.', exHi: 'Main woh khud karoongi.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Futur I?',
      body: [ 'werden (conjugated, Position 2) + Infinitiv (at the very end of the clause).' ],
      table: {
        head: ['Subject', 'werden', '…', 'Infinitiv (Satzende)'],
        rows: [
          ['Ich', 'werde', 'morgen', 'arbeiten.'],
          ['Wir', 'werden', 'nach Deutschland', 'fahren.'],
          ['Sie (sing.)', 'wird', 'später', 'anrufen.']
        ]
      },
      hinglish: 'Futur I banana simple hai: <b>werden</b> ko conjugate karke Position 2 par rakho, aur asli verb Infinitiv ki tarah sentence ke end mein bhej do. Yeh wahi bracket hai jo tumne modals ke saath dekha tha.'
    },
    {
      title: 'Konjugation von werden',
      body: [ 'werden must agree with its subject, just like any other verb.' ],
      table: {
        head: ['Pronoun', 'werden'],
        rows: [
          ['ich', 'werde'], ['du', 'wirst'], ['er/sie/es', 'wird'],
          ['wir', 'werden'], ['ihr', 'werdet'], ['sie/Sie', 'werden']
        ]
      },
      hinglish: 'Yahan <b>werden</b> hi ek aisa verb hai jo conjugate hota hai, isliye use subject ke saath match karna zaroori hai \u2014 bilkul kisi bhi normal verb ki tarah.'
    },
    {
      title: 'Die vier Verwendungen von Futur I',
      body: [ 'One structure, four different jobs — recognizing which one is being used helps you understand the sentence quickly.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['1. Zukunftsplan (future plan)', '<span class="de">Ich werde nächstes Jahr studieren.</span>'],
          ['2. Vorhersage (prediction)', '<span class="de">Morgen wird es regnen.</span>'],
          ['3. Versprechen (promise)', '<span class="de">Ich werde dir helfen.</span>'],
          ['4. Vermutung (assumption, present)', '<span class="de">Er wird jetzt zu Hause sein.</span>']
        ]
      },
      hinglish: 'Ek structure, chaar alag kaam — pehchaan lo ki kaun sa use ho raha hai — isse sentence jaldi samajh aata hai.'
    },
    {
      title: 'Präsens vs. Futur I',
      body: [ 'Both are grammatically correct for future plans. Präsens is the everyday spoken choice; Futur I adds emphasis, certainty, or clarity — and is required for pure predictions/assumptions about things with no time marker.' ],
      table: {
        head: ['Präsens', 'Futur I'],
        rows: [
          ['<span class="de">Ich fahre morgen nach Berlin.</span>', '<span class="de">Ich werde morgen nach Berlin fahren.</span>'],
          ['<span class="de">Ich lerne Deutsch.</span>', '<span class="de">Ich werde Deutsch lernen.</span>']
        ]
      },
      hinglish: 'Future plans ke liye dono sahi hain. Rozmarra bolchaal mein log aksar Präsens hi use karte hain, khaas kar jab saath mein koi time word ho (<span class="de">Ich fahre morgen nach Berlin</span>). <b>Futur I</b> tab aata hai jab tum emphasis ya certainty dena chahte ho, ya jab sirf prediction ya assumption bata rahe ho.'
    },
    {
      title: 'Wortstellung (word order)',
      body: [ 'Time expressions and other middle-field elements sit BETWEEN werden and the final infinitive — never after the infinitive.' ],
      table: {
        head: ['Correct', 'Incorrect'],
        rows: [
          ['<span class="de">Ich werde morgen nach Berlin fahren.</span>', '<span class="de strike">Ich werde nach Berlin fahren morgen.</span>']
        ]
      },
      hinglish: 'Time expressions aur baaki saari cheezein <b>werden</b> aur end wale Infinitiv ke beech mein aati hain. Infinitiv ke baad kuch nahi aata — woh sentence ka aakhri word hota hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from conjugating the second verb, using a Partizip II instead of an Infinitiv, misplacing the infinitive, stacking two conjugated verbs, or forgetting subject-verb agreement.' ],
      mistakes: [
        { wrong: 'Ich werde gehe.', right: 'Ich werde gehen.', why: 'The second verb must be a bare Infinitiv, never conjugated.' },
        { wrong: 'Ich werde gegangen.', right: 'Ich werde gehen.', why: 'The second verb must be an Infinitiv, never a Partizip II — that would confuse Futur I with Perfekt/Passiv.' },
        { wrong: 'Ich werde nach Berlin fahren morgen.', right: 'Ich werde morgen nach Berlin fahren.', why: 'Time expressions belong in the middle field, before the final infinitive.' },
        { wrong: 'Ich werde kann kommen.', right: 'Ich werde kommen können.', why: 'Two conjugated verbs can never stand together. Futur I has exactly ONE conjugated verb (werden) and the rest as infinitives at the end. This double-infinitive form is beyond B1 — just avoid the mistake for now.' },
        { wrong: 'Ich wird arbeiten.', right: 'Ich werde arbeiten.', why: 'werden must agree with its subject — ich takes werde, not wird (which is for er/sie/es).' }
      ],
      hinglish: 'Yeh paanch galtiyaan doosre verb ko conjugate karne se, Partizip II use karne se, infinitive ko galat jagah rakhne se, ya subject-verb agreement bhoolne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Futur I appears constantly in Goethe B1 listening and reading about weather forecasts, career plans, and technology predictions.' ],
      note: 'Memory trick: werden + Infinitiv = Future. Talking about tomorrow with a time word? Präsens or Futur I both work. Making a pure prediction, promise, or assumption? Reach for Futur I.',
      hinglish: 'Futur I Goethe B1 ke listening aur reading mein baar-baar aata hai — weather forecast, career plans aur technology ke baare mein predictions.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die Zukunft der Technologie',
    titleEn: 'The future of technology',
    tokens: [
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'neuen', role: 'r-adjective', en: 'new', hi: 'नई', type: 'Adjective · schwach · Gen.', why: 'Weak declension: Genitiv → -en (recycled — Ch.12).' },
      { w: 'Technologie', role: 'plain', en: 'technology', hi: 'तकनीक', type: 'Noun · fem.', why: 'die Technologie (this chapter).' },
      { w: 'wird', role: 'r-futur', en: 'will', hi: 'बदलेगा', type: 'Verb · werden (Futur I)' },
      { w: 'unser', role: 'plain', en: 'our (masc. nom.)', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Tagesablauf', role: 'plain', en: 'daily routine', hi: 'दिनचर्या', type: 'Noun · masc.', why: 'der Tagesablauf (this chapter).' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'stark', role: 'r-adjective', en: 'strongly', hi: 'बहुत ज़्यादा', type: 'Adverb' },
      { w: 'verändern', role: 'r-futur', en: 'to change (Satzende)', hi: 'बदलना', type: 'Infinitiv (Satzende)', why: 'Futur I as PREDICTION.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Sprachassistent', role: 'plain', en: 'voice assistant', hi: 'वॉइस असिस्टेंट', type: 'Noun · masc.', why: 'der Sprachassistent (this chapter).' },
      { w: 'wird', role: 'r-futur', en: 'will', hi: 'नियंत्रित करेगा', type: 'Verb · werden (Futur I)' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Jalousien', role: 'plain', en: 'shutters', hi: 'जालीदार खिड़की', type: 'Noun · plural', why: 'die Jalousie (this chapter).' },
      { w: 'automatisch', role: 'r-adverb', en: 'automatically', hi: 'स्वचालित रूप से', type: 'Adverb' },
      { w: 'steuern', role: 'r-futur', en: 'to control (Satzende)', hi: 'नियंत्रित करना', type: 'Infinitiv (Satzende)', why: 'steuern (this chapter): to control.' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Haustür', role: 'plain', en: 'front door', hi: 'मुख्य दरवाज़ा', type: 'Noun · fem.', why: 'die Haustür (this chapter).' },
      { w: 'wird', role: 'r-futur', en: 'will', hi: 'खुलेगा', type: 'Verb · werden (Futur I)' },
      { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'खुद', type: 'Reflexivpronomen' },
      { w: 'per', role: 'r-preposition', en: 'via', hi: 'द्वारा', type: 'Preposition' },
      { w: 'Fingerabdruck', role: 'plain', en: 'fingerprint', hi: 'उंगलियों के निशान', type: 'Noun · masc.', why: 'der Fingerabdruck (this chapter).' },
      { w: 'öffnen', role: 'r-futur', en: 'to open (Satzende)', hi: 'खुलना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Indefinitpronomen' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: 'Sorge', role: 'plain', en: 'worry', hi: 'चिंता', type: 'Noun · fem.', why: 'die Sorge (this chapter).' },
      { w: 'haben', role: 'r-verb', en: 'have (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: ',', plain: true },
      { w: 'wird', role: 'r-futur', en: 'will', hi: 'रहेगा', type: 'Verb · werden (Futur I)' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'neue', role: 'r-adjective', en: 'new', hi: 'नया', type: 'Adjective · schwach · Nom.', why: 'Weak declension: das + Nominativ neuter → -e.' },
      { w: 'System', role: 'plain', en: 'system', hi: 'प्रणाली', type: 'Noun · neut.' },
      { w: 'sicherer', role: 'r-comparative', en: 'safer', hi: 'ज़्यादा सुरक्षित', type: 'Komparativ (Prädikat)', why: 'Comparative in predicate position — no ending needed here (recycled — Ch.14).' },
      { w: 'sein', role: 'r-futur', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-conjunction', en: 'that\'s why', hi: 'इसलिए', type: 'Konnektor · deshalb', why: 'deshalb — plain result, verb immediately after it (recycled — Ch.4).' },
      { w: 'werden', role: 'r-futur', en: 'will (Position 2)', hi: 'खरीदेंगे (Position 2)', type: 'Verb · werden (Futur I, Position 2)' },
      { w: 'immer', role: 'r-adverb', en: 'ever', hi: 'हमेशा', type: 'Adverb' },
      { w: 'mehr', role: 'r-comparative', en: 'more', hi: 'ज़्यादा', type: 'Komparativ (unveränderlich)', why: 'viel → mehr — irregular comparative, never declines (recycled — Ch.14).' },
      { w: 'Familien', role: 'plain', en: 'families', hi: 'परिवार', type: 'Noun · plural' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Smart', role: 'plain', en: 'smart', hi: 'स्मार्ट', type: 'Adjective', why: 'smart (this chapter).' },
      { w: 'Home', role: 'plain', en: 'home', hi: 'घर', type: 'Noun · neut.', why: 'das Smart Home (this chapter).' },
      { w: 'kaufen', role: 'r-futur', en: 'to buy (Satzende)', hi: 'ख़रीदना', type: 'Infinitiv (Satzende)', why: 'Futur I as FUTURE PLAN.' },
      { w: '.', plain: true }
    ],
    translation: 'Because of new technology, our daily routine will change a lot. A voice assistant will control the shutters automatically, and the front door will open via fingerprint. Although some people have worries, the new system will be safer. That\'s why more and more families will buy a smart home.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_016_L001', speaker: 'Emke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich wette, wir werden nächstes Jahr endlich diesen Urlaub machen.', en: 'Timo, I bet we\'ll finally take that vacation next year.' },
      { id: 'B1_016_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das glaube ich erst, wenn ich die Flugtickets sehe!', en: 'I\'ll believe it when I see the plane tickets!' },
      { id: 'B1_016_L003', speaker: 'Emke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Okay, ich werde sie diese Woche noch buchen. Versprochen.', en: 'Okay, I\'ll book them this week. Promise.' },
      { id: 'B1_016_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann wird das ja wirklich passieren. Ich freue mich schon!', en: 'Then it will really happen. I\'m already excited!' }
    ],
    transcript: 'Timo, ich wette, wir werden nächstes Jahr endlich diesen Urlaub machen. Das glaube ich erst, wenn ich die Flugtickets sehe! Okay, ich werde sie diese Woche noch buchen. Versprochen. Dann wird das ja wirklich passieren. Ich freue mich schon!',
    translation: 'Timo, I bet we\'ll finally take that vacation next year. I\'ll believe it when I see the plane tickets! Okay, I\'ll book them this week. Promise. Then it will really happen. I\'m already excited!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'wette' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'werden' },
      { w: 'nächstes' },
      { w: 'Jahr' },
      { w: 'endlich' },
      { w: 'diesen' },
      { w: 'Urlaub' },
      { w: 'machen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'glaube' },
      { w: 'ich' },
      { w: 'erst' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Flugtickets' },
      { w: 'sehe' },
      { w: '!', plain: true },
      { w: 'Okay' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'werde' },
      { w: 'sie' },
      { w: 'diese' },
      { w: 'Woche' },
      { w: 'noch' },
      { w: 'buchen' },
      { w: '.', plain: true },
      { w: 'Versprochen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'wird' },
      { w: 'das' },
      { w: 'ja' },
      { w: 'wirklich' },
      { w: 'passieren' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'freue' },
      { w: 'mich' },
      { w: 'schon' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was wird nach Emkes Wetteinsatz nächstes Jahr passieren?', qEn: 'What does Emke bet will happen next year?', options: ['ein Umzug', 'der Urlaub', 'eine Hochzeit', 'ein neuer Job'], optionsEn: ['a move', 'the holiday', 'a wedding', 'a new job'], answer: 1,
        explain: '"… wir werden nächstes Jahr endlich diesen Urlaub machen."' },
      { q: 'Wann wird Emke die Tickets buchen?', qEn: 'When will Emke book the tickets?', options: ['nächsten Monat', 'diese Woche', 'nächstes Jahr', 'nie'], optionsEn: ['next month', 'this week', 'next year', 'never'], answer: 1,
        explain: '"Ich werde sie diese Woche noch buchen."' }
    ]
  },

  speaking: [
    { task: "Dein Freund glaubt nicht, dass ihr den Urlaub macht. Versprich es.", taskEn: "Your friend doubts you'll take the holiday. Promise it.", de: "Ich werde die Flugtickets diese Woche buchen. Versprochen!", en: "I'll book the flight tickets this week. I promise!" },
    { task: "Eine Kollegin fragt, was du nächstes Jahr machen wirst.", taskEn: "A colleague asks what you'll do next year.", de: "Ich werde ein Praktikum machen und danach ein Musikinstrument lernen.", en: "I'll do an internship and after that learn a musical instrument." },
    { task: "Ein Freund fragt, wie sich Mobilität entwickeln wird.", taskEn: "A friend asks how mobility will develop.", de: "Die Technologie wird sich anpassen, und wir werden weniger Autos benötigen.", en: "The technology will adapt, and we'll need fewer cars." },
    { task: "Deine Mutter fragt, wann du sie besuchen wirst.", taskEn: "Your mother asks when you'll visit her.", de: "Ich werde im Sommer kommen und zwei Wochen bleiben.", en: "I'll come in the summer and stay two weeks." },
    { task: "Ein Praktikant fragt, was er lernen wird.", taskEn: "An intern asks what he'll learn.", de: "Du wirst die Prognosen bewerten und Kunden befragen.", en: "You'll assess the forecasts and survey customers." },
    { task: "Deine Freundin fragt nach deinem größten Traum.", taskEn: "Your friend asks about your biggest dream.", de: "Eines Tages werde ich eine Auszeichnung bekommen.", en: "One day I'll win an award." },
    { task: "Rollenspiel: Ihr macht Pläne für nächstes Jahr.", taskEn: "Role-play: you make plans for next year.", de: "Wir werden endlich reisen. — Das glaube ich erst, wenn ich die Tickets sehe!", en: "We'll finally travel. — I'll believe that when I see the tickets!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short text (six to eight sentences) — future plans, a prediction about technology, or New Year\'s resolutions — using at least five Futur I sentences (plans, predictions, promises, or assumptions).',
    starters: ['Nächstes Jahr werde ich …', 'Ich glaube, es wird …', 'Ich werde dir versprechen, …'],
    placeholder: 'Nächstes Jahr werde ich ein Smart Home einrichten. Die Technologie wird …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich ___ morgen arbeiten." (Futur I)',
      options: ['werde', 'wird', 'werden'],
      answer: 0,
      explain: 'ich takes werde in Futur I.'
    },
    gap: {
      sentence: ['Morgen ', ' es regnen.'],
      gaps: [ { answer: 'wird', accepts: ['wird'] } ],
      explain: 'es takes wird in Futur I.'
    },
    match: {
      q: 'Match each sentence to its Futur I use.',
      pairs: [
        { noun: 'Ich werde nächstes Jahr studieren.', art: 'Zukunftsplan' },
        { noun: 'Morgen wird es regnen.', art: 'Vorhersage' },
        { noun: 'Ich werde dir helfen.', art: 'Versprechen' },
        { noun: 'Er wird jetzt zu Hause sein.', art: 'Vermutung' }
      ]
    },
    builder: {
      target: 'Build: "I will help you tomorrow."',
      bank: ['Ich', 'werde', 'dir', 'morgen', 'helfen', '.'],
      answer: ['Ich', 'werde', 'dir', 'morgen', 'helfen', '.'],
      roles: { 'werde': 'r-futur', 'helfen': 'r-futur' }
    },
    praesensToFutur: {
      title: 'Transform: Präsens → Futur I',
      prompt: 'Rewrite in Futur I: "Ich lerne Deutsch."',
      answer: 'Ich werde Deutsch lernen.',
      explain: 'werden (ich werde) + Infinitiv (lernen) at the end.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich werde nach Berlin fahren morgen.',
      right: 'Ich werde morgen nach Berlin fahren.',
      explain: 'Time expressions belong in the middle field, before the final infinitive.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Wir ___ nach Deutschland fahren."', options: ['werden', 'werde', 'wird'], answer: 0,
      explain: 'wir takes werden in Futur I.' },
    { q: 'Which sentence is a PROMISE?', options: ['Morgen wird es regnen.', 'Ich werde dir helfen.', 'Er wird zu Hause sein.'], answer: 1,
      explain: '"Ich werde dir helfen" is a promise.' },
    { q: 'Which sentence is an ASSUMPTION about the present?', options: ['Ich werde morgen arbeiten.', 'Er wird jetzt zu Hause sein.', 'Wir werden bald umziehen.'], answer: 1,
      explain: '"Er wird jetzt zu Hause sein" — Vermutung, using jetzt (now) with Futur I.' },
    { q: 'Which is the correct word order?', options: ['Ich werde nach Berlin fahren morgen.', 'Ich werde morgen nach Berlin fahren.', 'Ich morgen werde nach Berlin fahren.'], answer: 1,
      explain: 'Time expressions sit between werden and the final infinitive.' },
    { q: 'Which sentence contains an error?', options: ['Ich werde morgen arbeiten.', 'Ich werde gegangen.', 'Wir werden bald umziehen.'], answer: 1,
      explain: 'The second verb must be a bare Infinitiv, never a Partizip II — it should be "Ich werde gehen."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-futur', html: 'Futur I = werden (conjugated, Position 2) + Infinitiv (Satzende) — one structure for four jobs: plans, predictions, promises, and present-moment assumptions.' },
    { c: 'r-futur', html: 'Präsens and Futur I are both correct for future plans — Futur I adds emphasis, certainty, or clarity.' },
    { c: 'r-futur', html: 'Time expressions and other middle-field words sit between werden and the final infinitive — never after it.' }
  ],
  revisionTips: [
    'Whenever you build a Futur I sentence, check the ending first: is it a bare Infinitiv, not conjugated and not a Partizip II?',
    'Practise identifying which of the four uses (plan/prediction/promise/assumption) applies — it helps you understand native speech faster.',
    'Remember werden agreement: ich werde, du wirst, er/sie/es wird, wir/sie/Sie werden, ihr werdet.'
  ]
};

window.CHAPTER = CHAPTER;
