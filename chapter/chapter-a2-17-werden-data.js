/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 17
   "werden"  — Futur I, predictions, and change of state.
   Teaches ONLY werden: present-tense conjugation + three uses
   (werden + Infinitiv = future/prediction; werden + Adjektiv/Nomen
   = becoming/changing). No passive, no Konjunktiv, no Futur II.
   Vocabulary source: uploaded chapter-17 list (~21 items; everyday
   life / health / proverbs theme). Recycles Ch.11-16 (wenn,
   reflexive, Dativ-Pr\u00e4p., Wechselpr\u00e4p., Positionsverben) and
   Phase 1 (weil, dass, Perfekt, modal past, Komparativ, als/wie).
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not overridden):
   • "ausIschalten" \u2192 ausschalten (to switch off)
   • "bestens" kept as the adverb meaning "great, very well".
============================================================ */
const CHAPTER = {
  id: 'a2-17-werden',
  phase: 'A2 · Phase 2',
  number: 17,
  title: 'werden',
  titleEn: 'The verb werden',
  description: 'One small verb, three big jobs. werden + infinitive talks about the future (Ich werde morgen arbeiten) or makes a prediction (Es wird regnen). werden + adjective or noun describes becoming or changing (Ich werde m\u00fcde. Er wird Arzt.). The trick is telling werden apart from sein: sein describes a state you\u2019re already in; werden describes the change into a new one.',
  xp: 170,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 18, title: 'Ortsangaben: Pr\u00e4positionen', titleEn: 'Location Expressions' , href: 'chapter-a2-18-ortsangaben.html' },

  prevChapter: { number: 16, title: 'Goethe Mini 2', titleEn: 'Goethe Checkpoint 2', href: 'chapter-a2-16-goethe-mini-2.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A rainy afternoon, a bandaged finger, and a class full of plans for next year \u2014 the perfect stage for werden. Neele asks Timo what he will do, what he’ll become, and what the weather is turning into, and the little verb does all three jobs at once: future, prediction, change of state.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear werde, wirst, wird used for future, prediction and change'
    ],
    scene: 'Ein regnerischer Nachmittag \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Neele'],
    dialogue: [
      { speaker: 'Neele', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'wirst', role: 'r-verb', en: 'will you become', hi: 'बनोगे', pron: 'virst', type: 'Verb · werden (du)', why: 'werden as future/becoming: du wirst (this chapter).', ex: 'Was wirst du werden?', exEn: 'What will you become?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'werden', role: 'r-verb', en: 'become', hi: 'बनना', pron: 'VAIR-den', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'What will you become?', hi: 'Tum kya banoge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will become', hi: 'बनूंगा', pron: 'VAIR-duh', type: 'Verb · werden (ich)' },
        { w: 'Lehrer', role: 'r-subject', en: 'teacher', hi: 'शिक्षक', pron: 'LAY-rer', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'I will become a teacher. And you?', hi: 'Main shikshak banunga. Aur tum?' },
      { speaker: 'Neele', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will become', hi: 'बनूंगी', pron: 'VAIR-duh', type: 'Verb · werden (ich)' },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'Ärztin', role: 'r-subject', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'becomes', hi: 'बनता है', pron: 'virt', type: 'Verb · werden', why: 'es wird + adjective = the weather/state changes (this chapter).', ex: 'Es wird spät.', exEn: 'It is getting late.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Entscheidung', role: 'r-akkusativ', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I will maybe become a doctor. It is becoming time for the decision soon.', hi: 'Main shayad doctor banungi. Jald faisle ka waqt aa raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Wirst', role: 'r-verb', en: 'will you', hi: 'बनोगी', pron: 'virst', type: 'Verb · werden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nervös', role: 'r-adjective', en: 'nervous', hi: 'घबराई हुई', pron: 'ner-VÖS', type: 'Adjective', why: 'werden + adjective = to become a state (this chapter).', ex: 'Wirst du nervös?', exEn: 'Are you becoming nervous?' },
        { w: '?', plain: true }
      ], en: 'Really? Are you becoming nervous?', hi: 'Sach mein? Kya tum ghabrane lagi ho?' },
      { speaker: 'Neele', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ein', role: 'r-akkusativ', en: 'a (bit of)', hi: 'थोड़ी', pron: 'ine', type: 'Article' },
        { w: 'bisschen', role: 'r-akkusativ', en: 'bit', hi: 'थोड़ी', pron: 'BIS-khen', type: 'Determiner' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will become', hi: 'हो जाऊंगी', pron: 'VAIR-duh', type: 'Verb · werden (ich)' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'ruhiger', role: 'r-adjective', en: 'calmer', hi: 'ज़्यादा शांत', pron: 'ROO-i-ger', type: 'Adjective · Komparativ', why: 'ruhig → ruhiger (recycled Ch8).' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Zeit', role: 'r-dativ', en: 'time (dat.)', hi: 'समय के', pron: 'tsyte', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, a bit. But I will surely become calmer with time.', hi: 'Haan, thodi. Par main waqt ke saath zaroor shaant ho jaungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानता हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'wirst', role: 'r-verb', en: 'will become', hi: 'बनोगी', pron: 'virst', type: 'Verb · werden (du)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Ärztin', role: 'r-akkusativ', en: 'doctor (f)', hi: 'डॉक्टर', pron: 'AIRTS-tin', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I believe that too. You will become a good doctor.', hi: 'Main bhi maanta hoon. Tum ek achhi doctor banogi.' },
      { speaker: 'Neele', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'wirst', role: 'r-verb', en: 'will become', hi: 'बनोगे', pron: 'virst', type: 'Verb · werden (du)' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc. acc.' },
        { w: 'super', role: 'r-akkusativ', en: 'great', hi: 'बढ़िया', pron: 'ZOO-per', type: 'Adjective' },
        { w: 'Lehrer', role: 'r-akkusativ', en: 'teacher', hi: 'शिक्षक', pron: 'LAY-rer', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Thanks! You will surely become a great teacher.', hi: 'Dhanyavaad! Tum zaroor ek badhiya shikshak banoge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'beide', role: 'r-subject', en: 'both', hi: 'दोनों', pron: 'BY-duh', type: 'Pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'सही', pron: 'owf', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'richtigen', role: 'r-dativ', en: 'right', hi: 'सही', pron: 'RIKH-ti-gen', type: 'Adjective · dative' },
        { w: 'Weg', role: 'r-dativ', en: 'path (dat.)', hi: 'रास्ते', pron: 'vayk', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Thanks! Then we are both on the right path.', hi: 'Dhanyavaad! Toh hum dono sahi raste par hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'One small verb, three jobs. <span class="de r-werden">werden</span> + <strong>infinitive</strong> talks about the <strong>future</strong> (<span class="de">Ich <span class="r-werden">werde</span> morgen <span class="r-verb">arbeiten</span>.</span>) or makes a <strong>prediction</strong> (<span class="de">Es <span class="r-werden">wird</span> <span class="r-verb">regnen</span>.</span>) \u2014 the infinitive always goes to the end. <span class="de r-werden">werden</span> + <strong>adjective or noun</strong> describes <strong>becoming or changing</strong>: <span class="de">Ich <span class="r-werden">werde</span> m\u00fcde.</span> <span class="de">Er <span class="r-werden">wird</span> Arzt.</span> The key contrast: <span class="de">sein</span> names a state you\u2019re <em>already</em> in (<span class="de">Ich bin m\u00fcde</span> = I am tired); <span class="de r-werden">werden</span> names the <em>change into</em> it (<span class="de">Ich werde m\u00fcde</span> = I\u2019m getting tired).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is WERDEN: (1) werden + infinitive = future/prediction, (2) werden + adjective/noun = becoming/change of state. ' +
    'No passive, no Konjunktiv. The learner wrote about future plans / predictions / changes below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Conjugation: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.\n' +
    '- Future/prediction: werden + INFINITIVE at the end of the clause: "Ich werde morgen arbeiten." "Es wird regnen." "Du wirst es schaffen."\n' +
    '- Change of state: werden + ADJECTIVE or NOUN (no "sein" added, no article before an unmodified profession/status noun): "Ich werde m\u00fcde." "Er wird Arzt." NOT "Er wird ein Arzt" and NOT "Ich werde m\u00fcde sein" when a plain change (not a future state) is meant.\n' +
    '- Do not confuse sein (an existing state: "Ich bin m\u00fcde") with werden (the change into that state: "Ich werde m\u00fcde").\n' +
    '- werden is not doubled with a following werden for professions: "Er wird Lehrer", not "Er wird Lehrer werden".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>werden check:</b> one sentence on whether future/prediction vs. change-of-state uses were chosen correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You use werden cleanly for future, prediction and change \u2014 and never double it with sein. Next: pin down location with <span class="de">Ortsangaben: Pr\u00e4position</span>.',
    mid: 'Good. Re-read the sein-vs-werden card once (state vs. change), then continue.',
    low: 'Worth another pass \u2014 remember: werden + infinitive for future/prediction, werden + adjective/noun for becoming. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'werde', role: 'r-werden' },
    { w: 'nach', role: 'r-preposition' }, { w: 'Berlin', role: 'r-place' },
    { w: 'ziehen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one verb, three jobs: future, prediction, change.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A rainy afternoon full of plans, predictions and changes.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Frist, die Hektik, altmodisch, bestens, behalten.' },
    { id: 'grammar',    label: 'werden',     tag: 'core',
      objective: 'Master the conjugation and the three uses of werden vs. sein.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Annas plans for next year \u2014 future, prediction and change.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each use of werden in a quick weather-and-plans chat.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about your future plans, career and predictions out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write your plans for next year using all three uses of werden.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the conjugation and the future/change distinction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 170 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s everyday words \u2014 die Frist, die Hektik, der Hausmann, altmodisch, bestens \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Conjugation drills, future-vs-prediction-vs-change sorting, and a plans-for-next-year task.',
      pdfUrl: '/pdfs/homework.pdf', size: '7 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The full conjugation table, the three uses side by side, the sein-vs-werden contrast, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich werde \u2026 fahren.', text: 'Talk about the future with werden + infinitive' },
    { de: 'Es wird regnen.', text: 'Make a prediction' },
    { de: 'Ich werde m\u00fcde.', text: 'Describe a change of state (adjective)' },
    { de: 'Er wird Arzt.', text: 'Describe becoming something (noun)' },
    { de: 'Ich bin m\u00fcde \u2260 ich werde m\u00fcde', text: 'Tell sein (state) apart from werden (change)' }
  ],

  // ---------- Vocabulary (21 items) ----------
  vocab: [
    { de: 'Alkohol', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'alcohol', hi: 'शराब', ex: 'Er trinkt keinen Alkohol mehr.', exEn: 'He doesn\u2019t drink alcohol anymore.' },
    { de: 'altmodisch', pos: 'adjective', en: 'old-fashioned', hi: 'पुराने ज़माने का', ex: 'Die Kutsche wirkt altmodisch neben dem Auto.', exEn: 'The carriage seems old-fashioned next to the car.' },
    { de: 'ausschalten', pos: 'verb', en: 'to switch off (separable)', hi: 'बंद करना', ex: 'Ich werde das Licht ausschalten.', exEn: 'I\u2019m going to switch off the light.', conj: { praesens: 'schaltet aus', praeteritum: 'schaltete aus', perfekt: 'hat ausgeschaltet' } },
    { de: 'behalten', pos: 'verb', en: 'to keep', hi: 'रखना', ex: 'Ich werde den Ring behalten.', exEn: 'I\u2019m going to keep the ring.', conj: { praesens: 'beh\u00e4lt', praeteritum: 'behielt', perfekt: 'hat behalten' } },
    { de: 'bestens', pos: 'adverb', en: 'great, very well', hi: 'बहुत अच्छे से', ex: 'Es geht mir bestens, seit ich Grafiker werde.', exEn: 'I\u2019m doing great since I\u2019m becoming a graphic designer.' },
    { de: 'bluten', pos: 'verb', en: 'to bleed', hi: 'ख़ून बहना', ex: 'Mein Finger blutet, aber es wird bald besser.', exEn: 'My finger is bleeding, but it\u2019ll get better soon.', conj: { praesens: 'blutet', praeteritum: 'blutete', perfekt: 'hat geblutet' } },
    { de: 'Feuer', art: 'das', gender: 'n', plural: 'Feuer', pos: 'noun', en: 'fire', hi: 'आग', ex: 'Das Feuer wird gr\u00f6\u00dfer.', exEn: 'The fire is getting bigger.' },
    { de: 'Frist', art: 'die', gender: 'f', plural: 'Fristen', pos: 'noun', en: 'deadline', hi: 'समय सीमा', ex: 'Die Frist wird morgen enden.', exEn: 'The deadline will end tomorrow.' },
    { de: 'Gold', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'gold', hi: 'सोना', ex: 'Sie wird eine Goldmedaille bekommen.', exEn: 'She\u2019s going to get a gold medal.' },
    { de: 'Hausmann', art: 'der', gender: 'm', plural: 'Hausm\u00e4nner', pos: 'noun', en: 'homemaker (m.)', hi: 'घर संभालने वाला पुरुष', ex: 'Er wird bald Hausmann.', exEn: 'He\u2019s going to be a homemaker soon.' },
    { de: 'Hektik', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'rush, hectic pace', hi: 'हड़बड़ी', ex: 'Vor der Pr\u00fcfung wird die Hektik gro\u00df.', exEn: 'Before the exam the rush gets big.' },
    { de: 'interessieren', pos: 'verb', en: 'to be interested in (sich interessieren f\u00fcr)', hi: 'में दिलचस्पी रखना', ex: 'Ich interessiere mich f\u00fcr die Zukunft.', exEn: 'I\u2019m interested in the future.', conj: { praesens: 'interessiert sich', praeteritum: 'interessierte sich', perfekt: 'hat sich interessiert' } },
    { de: 'Kutsche', art: 'die', gender: 'f', plural: 'Kutschen', pos: 'noun', en: 'carriage', hi: 'बग्घी', ex: 'Die Kutsche wirkt altmodisch.', exEn: 'The carriage seems old-fashioned.' },
    { de: 'meist', pos: 'adverb', en: 'mostly, most of the time', hi: 'ज़्यादातर', ex: 'Es wird meist besser mit der Zeit.', exEn: 'It mostly gets better with time.' },
    { de: 'produzieren', pos: 'verb', en: 'to produce', hi: 'उत्पादन करना', ex: 'Die Firma wird mehr produzieren.', exEn: 'The company is going to produce more.', conj: { praesens: 'produziert', praeteritum: 'produzierte', perfekt: 'hat produziert' } },
    { de: 'verbringen', pos: 'verb', en: 'to spend (time)', hi: 'बिताना', ex: 'Ich werde die Ferien in Indien verbringen.', exEn: 'I\u2019m going to spend the holidays in India.', conj: { praesens: 'verbringt', praeteritum: 'verbrachte', perfekt: 'hat verbracht' } },
    { de: 'vor allem', pos: 'phrase', en: 'especially, above all', hi: 'विशेष रूप से', ex: 'Vor allem werde ich ruhiger.', exEn: 'Above all, I\u2019m getting calmer.' },
    { de: '\u00e4u\u00dfern', pos: 'verb', en: 'to express', hi: 'व्यक्त करना', ex: 'Ich werde meine Meinung \u00e4u\u00dfern.', exEn: 'I\u2019m going to express my opinion.', conj: { praesens: '\u00e4u\u00dfert', praeteritum: '\u00e4u\u00dferte', perfekt: 'hat ge\u00e4u\u00dfert' } },
    { de: 'Sprichwort', art: 'das', gender: 'n', plural: 'Sprichw\u00f6rter', pos: 'noun', en: 'proverb', hi: 'कहावत', ex: 'Ein altes Sprichwort wird nie altmodisch.', exEn: 'An old proverb never becomes old-fashioned.' },
    { de: 'Unterkunft', art: 'die', gender: 'f', plural: 'Unterk\u00fcnfte', pos: 'noun', en: 'accommodation', hi: 'आवास', ex: 'Die Unterkunft wird bald fertig.', exEn: 'The accommodation will be ready soon.' },
    { de: 'Satzh\u00e4lfte', art: 'die', gender: 'f', plural: 'Satzh\u00e4lften', pos: 'noun', en: 'half of the sentence', hi: 'वाक्य का आधा भाग', ex: 'In der zweiten Satzh\u00e4lfte steht das Verb.', exEn: 'In the second half of the sentence stands the verb.' }
  ],

  // ---------- werden (rule cards) ----------
  grammar: [
    {
      title: 'werden \u2014 the full conjugation',
      goldenRule: 'Only <b>du</b> and <b>er/sie/es</b> shift the vowel: <b>wirst</b>, <b>wird</b>.',
      memoryTrick: 'Wahi purani aadat \u2014 du aur er/sie/es mein vowel badalta hai (e\u2192i). wir/sie/Sie plain <b>werden</b> rehta hai.',
      body: [
        'werden is irregular in the present, but the pattern is small and used constantly.'
      ],
      table: {
        head: ['Person', 'Form', 'Example'],
        rows: [
          ['ich', '<span class="de r-werden">werde</span>', '<span class="de">Ich werde m\u00fcde.</span>'],
          ['du', '<span class="de r-werden">wirst</span>', '<span class="de">Du wirst es schaffen.</span>'],
          ['er/sie/es', '<span class="de r-werden">wird</span>', '<span class="de">Es wird regnen.</span>'],
          ['wir', '<span class="de r-werden">werden</span>', '<span class="de">Wir werden \u00fcben.</span>'],
          ['ihr', '<span class="de r-werden">werdet</span>', '<span class="de">Ihr werdet sicherer.</span>'],
          ['sie/Sie', '<span class="de r-werden">werden</span>', '<span class="de">Sie werden gl\u00fccklich.</span>']
        ]
      },
      note: 'The stem vowel shifts for du/er (e \u2192 i): werde \u2192 wirst \u2192 wird. wir/sie/Sie share the plain form werden.',
      hinglish: '<b>werden</b> ki conjugation yeh hai: <b>ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden</b>. Dhyaan do ki <b>du</b> aur <b>er/sie/es</b> mein vowel badal jaata hai (<b>e</b> se <b>i</b>) \u2014 yeh wahi change hai jo tumne A1 ke irregular verbs mein dekha tha.'
    },
    {
      title: 'Use 1 & 2: werden + Infinitiv (future & prediction)',
      goldenRule: '<b>werden</b> in slot 2, <b>infinitive at the very end</b>.',
      formula: [
        'Ich <b>werde</b> morgen <b>arbeiten</b>.',
        'Es <b>wird</b> heute <b>regnen</b>.',
        '     \u2191 slot 2        \u2191 end'
      ],
      memoryTrick: 'Modal verbs jaisa hi bracket hai \u2014 <b>werden</b> shuru mein, infinitive <b>ant</b> mein. Naya structure nahi, naya matlab.',
      body: [
        'werden + an infinitive at the end of the clause talks about the <strong>future</strong> or makes a <strong>prediction</strong>.'
      ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['future plan', '<span class="de">Ich <span class="r-werden">werde</span> morgen <span class="r-verb">arbeiten</span>.</span>'],
          ['future plan', '<span class="de">Wir <span class="r-werden">werden</span> nach Berlin <span class="r-verb">fahren</span>.</span>'],
          ['prediction (weather)', '<span class="de">Es <span class="r-werden">wird</span> heute <span class="r-verb">regnen</span>.</span>'],
          ['prediction (reassurance)', '<span class="de">Du <span class="r-werden">wirst</span> die Pr\u00fcfung <span class="r-verb">schaffen</span>.</span>']
        ]
      },
      note: 'The infinitive always goes to the very end \u2014 same "verb-to-the-back" habit as modal verbs.',
      hinglish: '<b>werden</b> ke saath infinitive sentence ke end mein jaata hai, aur isse future ya prediction banti hai: <b>Ich werde arbeiten</b>, <b>Es wird regnen</b>, <b>Du wirst es schaffen</b>. Pattern bilkul modal verbs jaisa hi hai.'
    },
    {
      title: 'Use 3: werden + Adjektiv/Nomen (change of state)',
      body: [
        'werden + an adjective or a noun describes <strong>becoming</strong> or <strong>changing</strong> \u2014 no infinitive needed.'
      ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['+ adjective', '<span class="de">Ich <span class="r-werden">werde</span> m\u00fcde.</span>'],
          ['+ adjective', '<span class="de">Das Wetter <span class="r-werden">wird</span> besser.</span>'],
          ['+ adjective', '<span class="de">Sie <span class="r-werden">wird</span> nervös.</span>'],
          ['+ noun (profession, no article)', '<span class="de">Er <span class="r-werden">wird</span> Arzt.</span>']
        ]
      },
      note: 'No article before an unmodified profession/status noun: <b>Er wird Arzt</b>, not "ein Arzt". And don\u2019t add "werden" twice: <b>Er wird Lehrer</b>, not "Er wird Lehrer werden".',
      hinglish: '<b>werden</b> ke saath adjective ya noun lagao to matlab hota hai badalna ya banna: <b>Ich werde m\u00fcde</b>, <b>Er wird Arzt</b>. Profession se pehle article nahi lagta. Aur <b>werden</b> ko do baar mat likho \u2014 <b>Er wird Lehrer werden</b> jaisa kuch nahi hota.'
    },
    {
      title: 'werden \u2260 sein: state vs. the change into it',
      goldenRule: '<b>sein</b> = you are already like that. <b>werden</b> = you are turning into it.',
      formula: [
        'Ich <b>bin</b> m\u00fcde.    \u2192 thaka hoon',
        'Ich <b>werde</b> m\u00fcde.  \u2192 thakne laga hoon'
      ],
      memoryTrick: 'Ek sawaal: <b>ho</b> ya <b>ho rahe ho</b>? Ho \u2192 sein. Ho rahe ho \u2192 werden. Aur profession se pehle article nahi: <b>Er wird Arzt</b>.',
      recap: [
        '<b>sein</b> names the state, <b>werden</b> names the change.',
        'No article before a profession: <span class="de">Er wird Arzt.</span>',
        'Never double it up: not <i>Er wird Lehrer werden</i>.'
      ],
      body: [
        'The single biggest trap: <span class="de">sein</span> names a state you\u2019re already in; <span class="de r-werden">werden</span> names the <em>change into</em> that state.'
      ],
      table: {
        head: ['sein (already there)', 'werden (becoming)'],
        rows: [
          ['<span class="de">Ich bin m\u00fcde.</span> (I am tired)', '<span class="de">Ich <span class="r-werden">werde</span> m\u00fcde.</span> (I\u2019m getting tired)'],
          ['<span class="de">Er ist Arzt.</span> (He is a doctor)', '<span class="de">Er <span class="r-werden">wird</span> Arzt.</span> (He\u2019s becoming a doctor)'],
          ['<span class="de">Das Wetter ist gut.</span> (The weather is good)', '<span class="de">Das Wetter <span class="r-werden">wird</span> gut.</span> (The weather\u2019s getting good)']
        ]
      },
      note: 'If you mean "will be" (a future state), you CAN say werden + adjective + sein (Ich werde morgen Abend m\u00fcde sein) \u2014 but for an ordinary change happening now, drop sein: just werden + adjective.',
      hinglish: 'sein = pehle se aise ho (Ich bin müde = thaka hoon). werden = ab aise <b>ho rahe</b> ho (Ich werde müde = thakne laga hoon). Zyada tar cases mein "sein" jodne ki zaroorat nahi.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four werden traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich bin morgen arbeiten.', right: 'Ich werde morgen arbeiten.', why: 'Future plans need werden + infinitive, not sein.' },
        { wrong: 'Ich werde müde sein.', right: 'Ich werde müde.', why: 'For an ordinary change happening now, use werden + adjective \u2014 no extra sein.' },
        { wrong: 'Ich werde gehe.', right: 'Ich werde gehen.', why: 'After werden, use the plain infinitive (gehen), not a conjugated form (gehe).' },
        { wrong: 'Er wird Lehrer werden.', right: 'Er wird Lehrer.', why: 'Don\u2019t double werden \u2014 the noun alone after werden already means "become".' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. Future ke liye <b>werden</b> ke saath infinitive aata hai, <b>sein</b> nahi. Simple badlaav batane ke liye <b>werde müde</b> kaafi hai \u2014 <b>müde sein</b> jodne ki zaroorat nahi. <b>werden</b> ke baad plain infinitive aata hai jaise <b>gehen</b>, conjugated form nahi. Aur <b>werden</b> ko do baar likhna galat hai: sirf <b>Er wird Lehrer</b>.'
    }
  ],

  // ---------- Reading passage (Annas Pl\u00e4ne f\u00fcr n\u00e4chstes Jahr, clickable) ----------
  reading: {
    title: 'Annas Pl\u00e4ne f\u00fcr n\u00e4chstes Jahr',
    titleEn: 'Anna\u2019s plans for next year',
    tokens: [
      { w: 'N\u00e4chstes', role: 'r-akkusativ', en: 'next (neut. acc.)', hi: 'अगले', pron: 'NEKH-stes', type: 'Adjective' },
      { w: 'Jahr', role: 'r-time', en: 'year', hi: 'साल', pron: 'yar', type: 'Noun \u00b7 neut.', why: 'das Jahr (recycled \u2014 A1).', ex: 'n\u00e4chstes Jahr', exEn: 'next year' },
      { w: 'werde', role: 'r-werden', en: 'am going to', hi: 'करूँगी', pron: 'VAIR-duh', type: 'Verb \u00b7 werden (ich)', why: 'werden + Infinitiv = future (this chapter).', ex: 'Ich werde umziehen.', exEn: 'I\u2019m going to move.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'nach', role: 'r-preposition', en: 'to', hi: 'को', pron: 'nahkh', type: 'Preposition \u00b7 Dativ', why: 'nach + Dativ (recycled \u2014 Dativ-Pr\u00e4p. Ch.13).', ex: 'nach M\u00fcnchen', exEn: 'to Munich' },
      { w: 'M\u00fcnchen', role: 'r-place', en: 'Munich', hi: 'म्यूनिख', pron: 'M\u00dcN-khen', type: 'Name' },
      { w: 'umziehen', role: 'r-verb', en: 'move', hi: 'जाना', pron: 'UM-tsee-en', type: 'Infinitive', why: 'infinitive at the end after werden (this chapter).', ex: 'umziehen werden', exEn: 'going to move' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'interessiere', role: 'r-verb', en: 'am interested', hi: 'दिलचस्पी रखती हूँ', pron: 'in-te-re-SEE-ruh', type: 'Verb \u00b7 sich interessieren', why: 'interessieren = to be interested (this chapter).', ex: 'Ich interessiere mich f\u00fcr Kunst.', exEn: 'I\u2019m interested in art.' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'sich interessieren \u2014 reflexive (recycled \u2014 Reflexive Ch.12).', ex: 'mich interessieren', exEn: 'to be interested' },
      { w: 'f\u00fcr', role: 'r-preposition', en: 'in', hi: 'में', pron: 'f\u00fcr', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'यह', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Kunst', role: 'r-object', en: 'art', hi: 'कला', pron: 'kunst', type: 'Noun \u00b7 fem.', why: 'die Kunst (recycled \u2014 A1).', ex: 'die Kunst', exEn: 'the art' },
      { w: ',', plain: true },
      { w: 'deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'DES-halp', type: 'Adverb', why: 'deshalb (recycled \u2014 S\u00e4tze verbinden).', ex: 'Deshalb werde ich \u2026', exEn: 'Therefore I\u2019ll \u2026' },
      { w: 'werde', role: 'r-werden', en: 'am going to', hi: 'करूँगी', pron: 'VAIR-duh', type: 'Verb \u00b7 werden (ich)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'ein', role: 'r-akkusativ', en: 'an (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Kunststudium', role: 'r-object', en: 'art degree', hi: 'कला अध्ययन', pron: 'KUNST-shtoo-dee-oom', type: 'Noun \u00b7 neut.', why: 'das Kunststudium (this chapter usage).', ex: 'ein Kunststudium beginnen', exEn: 'to start an art degree' },
      { w: 'beginnen', role: 'r-verb', en: 'begin', hi: 'शुरू करना', pron: 'buh-GI-nen', type: 'Infinitive', why: 'infinitive at the end after werden (this chapter).', ex: 'beginnen werde', exEn: 'am going to begin' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानती हूँ', pron: 'GLOW-buh', type: 'Verb \u00b7 glauben' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-dass', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction \u00b7 dass', why: 'dass \u2192 verb last (recycled \u2014 dass Ch.5).', ex: 'dass es schwierig wird', exEn: 'that it\u2019ll be difficult' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'am', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'am', type: 'Preposition' },
      { w: 'Anfang', role: 'r-place', en: 'beginning', hi: 'शुरुआत', pron: 'AN-fang', type: 'Noun \u00b7 masc.', why: 'der Anfang (recycled \u2014 A1).', ex: 'am Anfang', exEn: 'at the beginning' },
      { w: 'schwierig', role: 'r-adjective', en: 'difficult', hi: 'कठिन', pron: 'SHVEE-rikh', type: 'Adjective \u00b7 Positiv', why: 'werden + Adjektiv = change of state (this chapter).', ex: 'schwierig werden', exEn: 'to get difficult' },
      { w: 'wird', role: 'r-werden', en: 'will get', hi: 'हो जाएगा', pron: 'virt', type: 'Verb \u00b7 werden (er/es/sie)', why: 'conjugated verb last after dass (recycled \u2014 dass Ch.5).', ex: '\u2026, dass es schwierig wird.', exEn: '\u2026 that it\u2019ll get difficult.' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil Ch.4).', ex: 'weil die Hektik gro\u00df ist', exEn: 'because the rush is big' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Hektik', role: 'r-subject', en: 'rush', hi: 'हड़बड़ी', pron: 'HEK-tik', type: 'Noun \u00b7 fem.', why: 'die Hektik (this chapter).', ex: 'die Hektik', exEn: 'the rush' },
      { w: 'gro\u00df', role: 'r-adjective', en: 'big', hi: 'बड़ी', pron: 'grohs', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: '.', plain: true },
      { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'vor', role: 'r-preposition', en: 'above', hi: 'सबसे ऊपर', pron: 'for', type: 'Adverb', why: 'vor allem = above all (this chapter).', ex: 'vor allem', exEn: 'above all' },
      { w: 'allem', role: 'r-object', en: 'all', hi: 'सबसे', pron: 'A-lem', type: 'Pronoun \u00b7 dative' },
      { w: 'werde', role: 'r-werden', en: 'am going to become', hi: 'हो जाऊँगी', pron: 'VAIR-duh', type: 'Verb \u00b7 werden (ich)', why: 'werden + Adjektiv = change (this chapter).', ex: 'Ich werde ruhiger.', exEn: 'I\u2019m getting calmer.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'ruhiger', role: 'r-adjective', en: 'calmer', hi: 'ज़्यादा शांत', pron: 'ROO-i-ger', type: 'Komparativ \u00b7 ruhig', why: 'ruhig \u2192 ruhiger (recycled \u2014 Komparativ Ch.8).', ex: 'ruhiger werden', exEn: 'to get calmer' },
      { w: ',', plain: true },
      { w: 'je', role: 'r-adverb', en: 'the more', hi: 'जितना', pron: 'yay', type: 'Adverb' },
      { w: 'mehr', role: 'r-adjective', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Komparativ \u00b7 viel (irreg.)', why: 'viel \u2192 mehr (recycled \u2014 Komparativ Ch.8).', ex: 'je mehr ich \u00fcbe', exEn: 'the more I practise' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: '\u00fcbe', role: 'r-verb', en: 'practise', hi: 'अभ्यास करती हूँ', pron: '\u00dc-buh', type: 'Verb \u00b7 \u00fcben' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'r-subject', en: 'my', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun \u00b7 plural', why: 'der Freund \u2192 die Freunde (recycled \u2014 Genitiv).', ex: 'meine Freunde', exEn: 'my friends' },
      { w: 'sagen', role: 'r-verb', en: 'say', hi: 'कहते हैं', pron: 'ZAH-gen', type: 'Verb \u00b7 sagen' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'werde', role: 'r-werden', en: 'am going to become', hi: 'बन जाऊँगी', pron: 'VAIR-duh', type: 'Verb \u00b7 werden (ich)' },
      { w: 'bestimmt', role: 'r-adverb', en: 'definitely', hi: 'ज़रूर', pron: 'buh-SHTIMT', type: 'Adverb', why: 'bestimmt = definitely (recycled \u2014 A1).', ex: 'bestimmt eine gute K\u00fcnstlerin', exEn: 'definitely a good artist' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'gute', role: 'r-adjective', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
      { w: 'K\u00fcnstlerin', role: 'r-object', en: 'artist (f.)', hi: 'कलाकार', pron: 'K\u00dcNST-luh-rin', type: 'Noun \u00b7 fem.', why: 'die K\u00fcnstlerin (this chapter usage).', ex: 'eine gute K\u00fcnstlerin', exEn: 'a good artist' },
      { w: '.', plain: true }
    ],
    translation: 'Next year I\u2019m going to move to Munich. I\u2019m interested in art, so I\u2019m going to start an art degree. I believe that it will get difficult at the beginning, because the rush is big. But above all I\u2019m getting calmer, the more I practise. My friends say I\u2019m definitely going to become a good artist. \u2014 Count the werden forms: werde umziehen (future), werde beginnen (future), wird schwierig (change), werde ruhiger (change), werde eine gute K\u00fcnstlerin (becoming) \u2014 every meaning at work.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_017_L001', speaker: 'Neele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, was wirst du nächstes Jahr machen?', en: 'Timo, what will you do next year?' },
      { id: 'A2_017_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich werde wahrscheinlich in Hamburg arbeiten.', en: 'I will probably work in Hamburg.' },
      { id: 'A2_017_L003', speaker: 'Neele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wird das Wetter dort besser als hier?', en: 'And will the weather be better there than here?' },
      { id: 'A2_017_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Keine Ahnung, aber ich werde bestimmt öfter krank!', en: 'No idea, but I will definitely get sick more often!' }
    ],
    transcript: 'Timo, was wirst du nächstes Jahr machen? Ich werde wahrscheinlich in Hamburg arbeiten. Und wird das Wetter dort besser als hier? Keine Ahnung, aber ich werde bestimmt öfter krank!',
    translation: 'Timo, what will you do next year? I will probably work in Hamburg. And will the weather be better there than here? No idea, but I will definitely get sick more often!',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'wirst' },
      { w: 'du' },
      { w: 'nächstes' },
      { w: 'Jahr' },
      { w: 'machen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'werde' },
      { w: 'wahrscheinlich' },
      { w: 'in' },
      { w: 'Hamburg' },
      { w: 'arbeiten' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wird' },
      { w: 'das' },
      { w: 'Wetter' },
      { w: 'dort' },
      { w: 'besser' },
      { w: 'als' },
      { w: 'hier' },
      { w: '?', plain: true },
      { w: 'Keine' },
      { w: 'Ahnung' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'werde' },
      { w: 'bestimmt' },
      { w: 'öfter' },
      { w: 'krank' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was wird Timo nächstes Jahr wahrscheinlich machen?', qEn: 'What will Timo probably do next year?', options: ['studieren', 'in Hamburg arbeiten', 'reisen', 'heiraten'], optionsEn: ['study', 'work in Hamburg', 'travel', 'get married'], answer: 1,
        explain: '"Ich werde wahrscheinlich in Hamburg arbeiten."' },
      { q: 'Was wird er scherzhaft öfter werden?', qEn: 'What does Timo joke he will become more often?', options: ['müde', 'krank', 'reich', 'glücklich'], optionsEn: ['tired', 'ill', 'rich', 'happy'], answer: 1,
        explain: '"Ich werde bestimmt öfter krank!"' }
    ]
  },

  speaking: [
    { task: "Deine Tante fragt: Was wirst du nach dem Kurs machen?", taskEn: "Your aunt asks: what will you do after the course?", de: "Ich werde eine Stelle suchen und viel Zeit im Ausland verbringen.", en: "I'll look for a job and spend a lot of time abroad." },
    { task: "Dein Freund fragt: Wie wird das Wetter morgen?", taskEn: "Your friend asks: what will the weather be like tomorrow?", de: "Morgen wird es kalt. Vor allem am Abend.", en: "Tomorrow it'll be cold. Especially in the evening." },
    { task: "Deine Freundin fragt: Was wirst du beruflich werden?", taskEn: "Your friend asks: what will you become professionally?", de: "Ich werde Hausmann und ich werde auch weiter studieren.", en: "I'll be a stay-at-home dad and I'll also keep studying." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write six sentences about your plans for next year using all three uses of werden: (1) a future plan (werden + infinitive), (2) a prediction (werden + infinitive), (3) at least two changes of state (werden + adjective/noun \u2014 what you\u2019ll become, how you\u2019ll feel). Try this chapter\u2019s words: die Frist, die Hektik, bestens, vor allem, behalten.',
    starters: ['N\u00e4chstes Jahr werde ich \u2026', 'Ich glaube, dass \u2026 wird.', 'Vor allem werde ich \u2026', 'Ich werde \u2026 werden.'],
    placeholder: 'N\u00e4chstes Jahr werde ich umziehen. Ich glaube, dass es am Anfang schwierig wird. Vor allem werde ich \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct form: "Morgen ___ es regnen."',
      options: ['ist', 'wird', 'werde', 'werden'],
      answer: 1,
      explain: 'werden + infinitive for a prediction; er/es/sie-form = wird: Es wird regnen.'
    },
    gap: {
      // change of state (adjective) vs future (infinitive)
      sentence: ['Ich ', ' m\u00fcde, deshalb ', ' ich fr\u00fch schlafen.'],
      gaps: [ { answer: 'werde', accepts: ['werde'] }, { answer: 'werde', accepts: ['werde'] } ],
      explain: 'First werde + adjective (change); second werde + infinitive (future plan) \u2014 same conjugation, different job.'
    },
    match: {
      q: 'Match each werden form to its person.',
      pairs: [
        { noun: 'ich', art: 'werde' },
        { noun: 'du', art: 'wirst' },
        { noun: 'er/sie/es', art: 'wird' },
        { noun: 'wir', art: 'werden' },
        { noun: 'ihr', art: 'werdet' }
      ]
    },
    builder: {
      target: 'Build: "I\u2019m going to become a doctor."',
      bank: ['Ich', 'werde', 'Arzt'],
      answer: ['Ich', 'werde', 'Arzt'],
      roles: { 'Ich': 'r-subject', 'werde': 'r-werden', 'Arzt': 'r-object' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the du-form of werden?', options: ['werdst', 'wirst', 'werdet', 'wird'], answer: 1,
      explain: 'du wirst (vowel shift e\u2192i).' },
    { q: 'Which sentence talks about the future correctly?', options: ['Ich bin morgen arbeiten.', 'Ich werde morgen arbeiten.', 'Ich arbeite werden morgen.', 'Ich werde morgen arbeite.'], answer: 1,
      explain: 'werden + infinitive at the end: Ich werde morgen arbeiten.' },
    { q: 'Which describes a change of state (getting tired)?', options: ['Ich bin m\u00fcde.', 'Ich werde m\u00fcde.', 'Ich werde m\u00fcde sein.', 'Ich m\u00fcde werde.'], answer: 1,
      explain: 'A plain, current change of state = werden + adjective: Ich werde m\u00fcde.' },
    { q: 'Which is correct for becoming a profession?', options: ['Er wird ein Arzt.', 'Er wird Arzt.', 'Er wird Arzt werden.', 'Er ist werden Arzt.'], answer: 1,
      explain: 'No article before an unmodified profession noun, and no doubled werden: Er wird Arzt.' },
    { q: '"Ich bin m\u00fcde" vs. "Ich werde m\u00fcde" \u2014 what\u2019s the difference?', options: ['no difference', 'the first is a state, the second is the change into it', 'the first is future, the second is present', 'the second is more polite'], answer: 1,
      explain: 'sein names an existing state; werden names the change into that state.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-werden', html: 'One verb, three jobs: <span class="de r-werden">werden</span> + infinitive for the <b>future</b> or a <b>prediction</b>; <span class="de r-werden">werden</span> + adjective/noun for <b>becoming/changing</b>.' },
    { c: 'r-werden', html: 'Conjugation: <span class="de">ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden</span>.' },
    { c: 'r-werden', html: '<span class="de">sein</span> names a state you\u2019re already in; <span class="de r-werden">werden</span> names the <b>change into</b> it: <span class="de">Ich bin m\u00fcde</span> vs. <span class="de">Ich werde m\u00fcde</span>.' }
  ],
  revisionTips: [
    'Chant the conjugation: werde, wirst, wird, werden, werdet, werden.',
    'Future/prediction: werden + infinitive at the end. Becoming: werden + adjective/noun, no extra sein.',
    'sein = already there; werden = changing into it. Never double werden with a profession noun.'
  ]
};

window.CHAPTER = CHAPTER;
