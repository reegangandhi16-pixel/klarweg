/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 28
   "Nebensatz mit als / wenn" — als for a single completed past
   event, wenn for repeated actions, present situations, future
   situations, and conditions. No falls, sofern, während, nachdem,
   no B1 time clauses. This chapter teaches ONLY als vs wenn.
   Vocabulary source: uploaded chapter-28 list (~75 items; pets/
   housing/mountain-sports theme — die Kletterin, der Hochseilgarten,
   die Ferienwohnung, der Mitbewohner). Recycles A1/A2 vocabulary
   and Perfekt/Präteritum throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-27-adjektiv-unbestimmter-artikel-data.js
   exactly (flat vocab[], grammar[] rule cards, tokenized reading,
   etc.) so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "dazu-schreiben" → corrected to dazuschreiben (to add in
     writing).
   • "ein|ziehen" → corrected to einziehen (to move in).
   • "vorlkommen" → corrected to vorkommen (to happen, to occur).
   • "stark - hard" — imprecise gloss; stark plainly means "strong"
     (its well-known A1 meaning); glossed accurately here.
   • "der Wahnsinn - man" — garbled gloss → corrected to der
     Wahnsinn = madness, craziness (a noun, matching wahnsinnig
     = crazy right below it in the same list).
============================================================ */
const CHAPTER = {
  id: 'a2-28-als-wenn',
  phase: 'A2 · Phase 2',
  number: 28,
  title: 'Nebensatz mit als / wenn',
  titleEn: 'Subordinate clauses with als / wenn',
  description: 'Als ich klein war, spielte ich Fußball. — one completed event, once, in the past: als. Wenn ich Zeit habe, lese ich. — repeated, present, future, or a condition: wenn. This chapter drills exactly when each one applies, and the verb-final, inverted word order both require.',
  xp: 190,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 29, title: 'Indefinitpronomen', titleEn: 'Indefinite pronouns' , href: 'chapter-a2-29-indefinitpronomen.html' },

  prevChapter: { number: 27, title: 'Adjektiv nach unbestimmtem Artikel', titleEn: 'Adjective endings after the indefinite article', href: 'chapter-a2-27-adjektiv-unbestimmter-artikel.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Insa just moved into a new flat with a flatmate, a cat, and a mountain view — the perfect excuse to swap childhood memories (als, her cat Mausi) and daily habits (wenn, whenever her cousin visited with his dog) with Timo. One test decides which word fits: did it happen once, in the past? als. Everything else? wenn.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear als (one-time past) and wenn (repeated/present/future/condition) side by side'
    ],
    scene: 'Insas neue Wohnung — Sprachschule Berlin',
    femaleSpeakers: ['Insa'],
    dialogue: [
      { speaker: 'Insa', tokens: [
        { w: 'Als', role: 'r-conjunction', en: 'when', hi: 'जब', pron: 'als', type: 'Conjunction · als', why: 'als = when, for one single past event (this chapter).', ex: 'Als ich klein war, hatte ich ein Kätzchen.', exEn: 'When I was small, I had a kitten.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'klein', role: 'r-subject', en: 'small', hi: 'छोटी', pron: 'kline', type: 'Adjective' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum, Satzende)' },
        { w: ',', plain: true },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'थी', pron: 'HA-tuh', type: 'Verb · haben (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Kätzchen', role: 'r-akkusativ', en: 'kitten', hi: 'बिल्ली का बच्चा', pron: 'KETS-khen', type: 'Noun · neut.', why: 'das Kätzchen (this chapter).', ex: 'Ich hatte ein Kätzchen.', exEn: 'I had a kitten.' },
        { w: '.', plain: true }
      ], en: 'When I was small, I had a kitten.', hi: 'Jab main choti thi, tab mere paas ek billi ka bachcha tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसा', pron: 'vee', type: 'Question word' },
        { w: 'hieß', role: 'r-verb', en: 'was called', hi: 'नाम था', pron: 'heess', type: 'Verb · heißen (Präteritum)' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'What was it called?', hi: 'Uska naam kya tha?' },
      { speaker: 'Insa', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'hieß', role: 'r-verb', en: 'was called', hi: 'नाम था', pron: 'heess', type: 'Verb · heißen (Präteritum)' },
        { w: 'Mausi', role: 'r-subject', en: 'Mausi', hi: 'मौज़ी', pron: 'MOW-zee', type: 'Name' },
        { w: '.', plain: true },
        { w: 'Wenn', role: 'r-conjunction', en: 'whenever', hi: 'जब भी', pron: 'ven', type: 'Conjunction · wenn', why: 'wenn = whenever, for a repeated past event (this chapter).', ex: 'Wenn ich nach Hause kam, wartete Mausi.', exEn: 'Whenever I came home, Mausi was waiting.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nach', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'nahkh', type: 'Preposition + place' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'kam', role: 'r-verb', en: 'came', hi: 'आती थी', pron: 'kahm', type: 'Verb · kommen (Präteritum, Satzende)' },
        { w: ',', plain: true },
        { w: 'wartete', role: 'r-verb', en: 'waited', hi: 'इंतज़ार करती थी', pron: 'VAR-te-tuh', type: 'Verb · warten (Präteritum)' },
        { w: 'Mausi', role: 'r-subject', en: 'Mausi', hi: 'मौज़ी', pron: 'MOW-zee', type: 'Name' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'It was called Mausi. Whenever I came home, Mausi was already waiting.', hi: 'Uska naam Mausi tha. Jab bhi main ghar aati thi, Mausi pehle se intezaar kar rahi hoti thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'süß', role: 'r-adjective', en: 'sweet', hi: 'प्यारा', pron: 'züs', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Hattest', role: 'r-verb', en: 'did you have', hi: 'था', pron: 'HA-test', type: 'Verb · haben (Präteritum, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Hund', role: 'r-akkusativ', en: 'dog', hi: 'कुत्ता', pron: 'hunt', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'That is sweet! Did you also have a dog?', hi: 'Yeh pyaara hai! Kya tumhare paas kutta bhi tha?' },
      { speaker: 'Insa', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'als', role: 'r-conjunction', en: 'when', hi: 'जब', pron: 'als', type: 'Conjunction · als' },
        { w: 'meine', role: 'r-subject', en: 'my', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Cousine', role: 'r-subject', en: 'cousin', hi: 'चचेरी बहन', pron: 'koo-ZEE-nuh', type: 'Noun · fem.' },
        { w: 'kam', role: 'r-verb', en: 'came', hi: 'आई', pron: 'kahm', type: 'Verb · kommen (Präteritum, Satzende)' },
        { w: ',', plain: true },
        { w: 'brachte', role: 'r-verb', en: 'brought', hi: 'लाई', pron: 'BRAKH-tuh', type: 'Verb · bringen (Präteritum)', lexicalUnit: 'mitbringen' },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'ihren', role: 'r-akkusativ', en: 'her (masc.)', hi: 'अपना', pron: 'EE-ren', type: 'Possessive · acc.' },
        { w: 'Hund', role: 'r-akkusativ', en: 'dog', hi: 'कुत्ता', pron: 'hunt', type: 'Noun · masc.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitbringen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitbringen' },
        { w: '.', plain: true }
      ], en: 'No, but when my cousin came, she always brought her dog.', hi: 'Nahi, par jab meri chacheri behen aati thi, tab woh hamesha apna kutta laati thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wenn', role: 'r-conjunction', en: 'whenever', hi: 'जब भी', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'ihr', role: 'r-subject', en: 'you all', hi: 'तुम सब', pron: 'eer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'gespielt', role: 'r-verb', en: 'played', hi: 'खेलते थे', pron: 'ge-SHPEELT', type: 'Partizip II' },
        { w: 'habt', role: 'r-verb', en: 'have', hi: 'थे', pron: 'hapt', type: 'Verb · haben (helper)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'lustig', role: 'r-adjective', en: 'fun', hi: 'मज़ेदार', pron: 'LUS-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Whenever you all played together, that was surely fun.', hi: 'Jab bhi tum sab saath khelte the, yeh zaroor mazedaar hota tha.' },
      { speaker: 'Insa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Als', role: 'r-conjunction', en: 'when', hi: 'जब', pron: 'als', type: 'Conjunction · als' },
        { w: 'Mausi', role: 'r-subject', en: 'Mausi', hi: 'मौज़ी', pron: 'MOW-zee', type: 'Name' },
        { w: 'gestorben', role: 'r-verb', en: 'died', hi: 'मर गई', pron: 'ge-SHTOR-ben', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'थी', pron: 'ist', type: 'Verb · sein (helper, Satzende)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'traurig', role: 'r-adjective', en: 'sad', hi: 'दुखी', pron: 'TROW-rikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'When Mausi died, I was very sad.', hi: 'Jab Mausi mar gayi, tab main bahut dukhi thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'tut', role: 'r-verb', en: 'sorry', hi: 'माफ़ करना', pron: 'toot', type: 'Verb · leid tun' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'leid', role: 'r-akkusativ', en: 'sorry', hi: 'अफ़सोस', pron: 'lite', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Erinnerungen', role: 'r-subject', en: 'memories', hi: 'यादें', pron: 'er-IN-e-run-gen', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'schön', role: 'r-adjective', en: 'beautiful', hi: 'ख़ूबसूरत', pron: 'shern', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I am sorry. But your memories are beautiful.', hi: 'Mujhe afsos hai. Par tumhari yaadein khoobsurat hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Ask one question: <strong>did it happen exactly once, in the past?</strong> If yes — <span class="de r-conjunction">als</span>: <span class="de">Als ich klein war, spielte ich Fußball.</span> If it\'s repeated, present, future, or a condition — <span class="de r-wenn">wenn</span>: <span class="de">Wenn ich Zeit habe, lese ich.</span> Both send the verb to the end of their clause, and both trigger inversion in the following main clause: <span class="de">Als ich klein war, <b>wohnte</b> ich in Delhi.</span> / <span class="de">Wenn ich Zeit habe, <b>gehe</b> ich spazieren.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ALS (one completed past event) vs WENN (repeated action, present, future, or condition). ' +
    'No falls, sofern, während, nachdem, no B1 time clauses. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- als is used ONLY for a single, completed event in the past: "Als ich klein war, spielte ich Fußball." Flag als used for a repeated past habit or present/future/condition (should be wenn).\n' +
    '- wenn covers repeated actions (any time frame), present situations, future situations, and conditions: "Wenn ich Zeit habe, lese ich." Flag wenn used for a clearly one-time past event (should be als) — e.g. "Wenn ich nach Deutschland kam" should be "Als ich nach Deutschland kam".\n' +
    '- Both als and wenn send the conjugated verb to the end of their own clause, and both trigger inversion (verb before subject) in the following main clause: "Als ich klein war, wohnte ich in Delhi." / "Wenn ich Zeit habe, gehe ich spazieren."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>als vs. wenn check:</b> one sentence on whether the learner picked the right connector for the time frame.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You tell one-time past events (als) from everything else (wenn) confidently. Next: talk about people and things in general with man, jemand, niemand, etwas, nichts.',
    mid: 'Good. Re-read the als vs. wenn comparison table once, then continue.',
    low: 'Worth another pass — remember: als is only for a single completed past event; wenn covers repeated, present, future, and conditions. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Als', role: 'r-conjunction' }, { w: 'ich', role: 'r-subject' },
    { w: 'klein', role: 'r-adjective' }, { w: 'war', role: 'r-verb' },
    { w: ',', role: 'plain' }, { w: 'wohnte', role: 'r-verb' },
    { w: 'ich', role: 'r-subject' }, { w: 'in', role: 'r-place' },
    { w: 'Delhi', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one-question test: one-time past (als) vs. everything else (wenn).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A new flat, a new pet, and lots of als/wenn memories.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Mitbewohner, die Kletterin, der Hochseilgarten, damals.' },
    { id: 'grammar',    label: 'als vs. wenn', tag: 'core',
      objective: 'Master the comparison table, the timeline, verb position, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a childhood-memories story full of als and wenn.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each als/wenn use in a moving-in conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about childhood, first experiences, habits, and future plans.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a childhood memory and a daily routine using als and wenn.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill als vs. wenn selection and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s pets, housing and mountain-sports words — der Mitbewohner, das Kätzchen, der Hochseilgarten, die Ferienwohnung — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'als vs. wenn sorting drills, timeline exercises, and a childhood-memory writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full als vs. wenn comparison table, the timeline, verb-position summary, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Als ich klein war, spielte ich Fußball.', text: 'Talk about a one-time past event' },
    { de: 'Wenn ich Zeit habe, lese ich.', text: 'Talk about a repeated or present habit' },
    { de: 'Wenn ich nach Deutschland fahre, …', text: 'Talk about a future plan' },
    { de: 'Wenn es regnet, nehme ich einen Regenschirm.', text: 'State a condition' },
    { de: 'einmal + Vergangenheit? als. Alles andere? wenn.', text: 'Choose the right connector every time' }
  ],

  // ---------- Vocabulary (~75 items) ----------
  vocab: [
    { de: 'Altbau', art: 'der', gender: 'm', plural: 'Altbauten', pos: 'noun', en: 'old building', hi: 'पुरानी इमारत', ex: 'Als ich einzog, war es ein schöner Altbau.', exEn: 'When I moved in, it was a beautiful old building.' },
    { de: 'außer', pos: 'preposition', en: 'except', hi: 'सिवाय', ex: 'Wenn niemand da ist außer mir, ist es ruhig.', exEn: 'When no one is there except me, it\'s quiet.' },
    { de: 'basteln', pos: 'verb', en: 'to make sth. (crafts)', hi: 'बनाना', ex: 'Als ich klein war, bastelte ich gern.', exEn: 'When I was small, I liked doing crafts.', conj: { praesens: 'bastelt', praeteritum: 'bastelte', perfekt: 'hat gebastelt' } },
    { de: 'bauen', pos: 'verb', en: 'to build', hi: 'बनाना', ex: 'Als ich klein war, baute ich eine Wagenburg.', exEn: 'When I was small, I built a wagon fort.', conj: { praesens: 'baut', praeteritum: 'baute', perfekt: 'hat gebaut' } },
    { de: 'Bauer', art: 'der', gender: 'm', plural: 'Bauern', pos: 'noun', en: 'farmer', hi: 'किसान', ex: 'Als ich auf dem Land war, half ich einem Bauern.', exEn: 'When I was in the countryside, I helped a farmer.' },
    { de: 'besorgt', pos: 'adjective', en: 'worried', hi: 'चिंतित', ex: 'Als ich einzog, war ich sehr besorgt.', exEn: 'When I moved in, I was very worried.' },
    { de: 'Bär', art: 'der', gender: 'm', plural: 'Bären', pos: 'noun', en: 'bear', hi: 'भालू', ex: 'Als ich klein war, hatte ich einen Bären aus Stoff.', exEn: 'When I was small, I had a bear made of fabric.' },
    { de: 'damals', pos: 'adverb', en: 'back then', hi: 'उस समय', ex: 'Damals wohnte ich in Delhi.', exEn: 'Back then I lived in Delhi.' },
    { de: 'dazuschreiben', pos: 'verb', en: 'to add sth. (in writing)', hi: 'लिख कर जोड़ना', ex: 'Wenn du willst, kannst du eine Notiz dazuschreiben.', exEn: 'If you want, you can add a note in writing.', conj: { praesens: 'schreibt dazu', praeteritum: 'schrieb dazu', perfekt: 'hat dazugeschrieben' } },
    { de: 'effektiv', pos: 'adjective', en: 'effective', hi: 'प्रभावी', ex: 'Wenn man effektiv lernt, spart man Zeit.', exEn: 'If you learn effectively, you save time.' },
    { de: 'eineinhalb', pos: 'adjective', en: 'one and a half', hi: 'डेढ़', ex: 'Als ich einzog, wohnte ich eineinhalb Jahre dort.', exEn: 'When I moved in, I lived there for one and a half years.' },
    { de: 'einrichten', pos: 'verb', en: 'to furnish', hi: 'सजाना', ex: 'Als ich einzog, musste ich die Wohnung einrichten.', exEn: 'When I moved in, I had to furnish the flat.', conj: { praesens: 'richtet ein', praeteritum: 'richtete ein', perfekt: 'hat eingerichtet' } },
    { de: 'einsam', pos: 'adjective', en: 'lonely', hi: 'अकेला', ex: 'Wenn du einsam bist, ruf mich an.', exEn: 'If you\'re lonely, call me.' },
    { de: 'einziehen', pos: 'verb', en: 'to move in', hi: 'रहने आना', ex: 'Als ich einzog, war ich sehr nervös.', exEn: 'When I moved in, I was very nervous.', conj: { praesens: 'zieht ein', praeteritum: 'zog ein', perfekt: 'ist eingezogen' } },
    { de: 'entlassen', pos: 'verb', en: 'to fire', hi: 'नौकरी से निकालना', ex: 'Als der Chef ihn entließ, war er schockiert.', exEn: 'When the boss fired him, he was shocked.', conj: { praesens: 'entlässt', praeteritum: 'entließ', perfekt: 'hat entlassen' } },
    { de: 'entspannen (sich)', pos: 'verb', en: 'to relax', hi: 'आराम करना', ex: 'Wenn man sich entspannt, geht alles leichter.', exEn: 'When you relax, everything goes more easily.', conj: { praesens: 'entspannt sich', praeteritum: 'entspannte sich', perfekt: 'hat sich entspannt' } },
    { de: 'Ferienwohnung', art: 'die', gender: 'f', plural: 'Ferienwohnungen', pos: 'noun', en: 'holiday home', hi: 'छुट्टियों का घर', ex: 'Wenn wir verreisen, mieten wir eine Ferienwohnung.', exEn: 'When we go away, we rent a holiday home.' },
    { de: 'Folge', art: 'die', gender: 'f', plural: 'Folgen', pos: 'noun', en: 'consequence', hi: 'परिणाम', ex: 'Wenn man zu viel spart, hat das Folgen.', exEn: 'If you save too much, that has consequences.' },
    { de: 'Futter', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'feed', hi: 'चारा', ex: 'Wenn man ein Tier hat, muss man Futter kaufen.', exEn: 'If you have a pet, you have to buy feed.' },
    { de: 'Führer', art: 'der', gender: 'm', plural: 'Führer', pos: 'noun', en: 'guide', hi: 'गाइड', ex: 'Als wir den Berg bestiegen, half uns ein Führer.', exEn: 'When we climbed the mountain, a guide helped us.' },
    { de: 'großartig', pos: 'adjective', en: 'terrific', hi: 'शानदार', ex: 'Als ich den Hochseilgarten sah, fand ich ihn großartig.', exEn: 'When I saw the high ropes course, I found it terrific.' },
    { de: 'heizen', pos: 'verb', en: 'to heat', hi: 'गर्म करना', ex: 'Wenn es kalt ist, heizen wir die Wohnung.', exEn: 'When it\'s cold, we heat the flat.', conj: { praesens: 'heizt', praeteritum: 'heizte', perfekt: 'hat geheizt' } },
    { de: 'Helferin', art: 'die', gender: 'f', plural: 'Helferinnen', pos: 'noun', en: 'helper (f.)', hi: 'सहायक (महिला)', ex: 'Als ich einzog, half mir eine freundliche Helferin.', exEn: 'When I moved in, a friendly helper (f.) helped me.' },
    { de: 'hängen (an)', pos: 'verb', en: 'to be attached to sth.', hi: 'जुड़ा हुआ होना', ex: 'Das Kätzchen hängt sehr an seinem Poster.', exEn: 'The kitty is very attached to its poster.', conj: { praesens: 'hängt', praeteritum: 'hing', perfekt: 'hat gehangen' } },
    { de: 'Höhe', art: 'die', gender: 'f', plural: 'Höhen', pos: 'noun', en: 'altitude', hi: 'ऊंचाई', ex: 'Wenn man in großer Höhe ist, wird die Luft dünner.', exEn: 'When you\'re at high altitude, the air gets thinner.' },
    { de: 'Import', art: 'der', gender: 'm', plural: 'Importe', pos: 'noun', en: 'import', hi: 'आयात', ex: 'Der Wein ist ein tschechischer Import.', exEn: 'The wine is a Czech import.' },
    { de: 'Kanton', art: 'der', gender: 'm', plural: 'Kantone', pos: 'noun', en: 'canton', hi: 'कैंटन', ex: 'Als ich in der Schweiz war, besuchte ich einen Kanton.', exEn: 'When I was in Switzerland, I visited a canton.' },
    { de: 'Kategorie', art: 'die', gender: 'f', plural: 'Kategorien', pos: 'noun', en: 'category', hi: 'श्रेणी', ex: 'Wenn man Sport wählt, gibt es viele Kategorien.', exEn: 'When choosing a sport, there are many categories.' },
    { de: 'Kletterin', art: 'die', gender: 'f', plural: 'Kletterinnen', pos: 'noun', en: 'climber (f.)', hi: 'पर्वतारोही (महिला)', ex: 'Als ich die Kletterin traf, gab sie mir gute Tipps.', exEn: 'When I met the climber (f.), she gave me good tips.' },
    { de: 'Kondition', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'stamina', hi: 'सहनशक्ति', ex: 'Wenn man klettern will, braucht man gute Kondition.', exEn: 'If you want to climb, you need good stamina.' },
    { de: 'Kätzchen', art: 'das', gender: 'n', plural: 'Kätzchen', pos: 'noun', en: 'kitty', hi: 'बिल्ली का बच्चा', ex: 'Mein Mitbewohner hat ein Kätzchen.', exEn: 'My flatmate has a kitty.' },
    { de: 'Luxus', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'luxury', hi: 'विलासिता', ex: 'Wenn man reist, ist eine Ferienwohnung manchmal Luxus.', exEn: 'When travelling, a holiday home is sometimes a luxury.' },
    { de: 'Matte', art: 'die', gender: 'f', plural: 'Matten', pos: 'noun', en: 'mat', hi: 'चटाई', ex: 'Wenn man klettert, braucht man eine Matte.', exEn: 'When you climb, you need a mat.' },
    { de: 'Mausi', art: 'das', gender: 'n', plural: 'Mausis', pos: 'noun', en: 'little mouse (pet name)', hi: 'छोटा चूहा (प्यार का नाम)', ex: 'Als ich klein war, nannte man mich Mausi.', exEn: 'When I was small, they called me little mouse.' },
    { de: 'Mitbewohner', art: 'der', gender: 'm', plural: 'Mitbewohner', pos: 'noun', en: 'flatmate', hi: 'फ्लैटमेट', ex: 'Mein Mitbewohner hat auch ein Kätzchen.', exEn: 'My flatmate also has a kitty.' },
    { de: 'Mitleid', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'pity, compassion', hi: 'दया', ex: 'Als ich das einsame Kätzchen sah, hatte ich Mitleid.', exEn: 'When I saw the lonely kitty, I felt pity.' },
    { de: 'nebenan', pos: 'adverb', en: 'next door', hi: 'बगल में', ex: 'Wenn du einsam bist, komm nebenan vorbei.', exEn: 'If you\'re lonely, come by next door.' },
    { de: 'nie mehr', pos: 'phrase', en: 'never again', hi: 'फिर कभी नहीं', ex: 'Als das passierte, wollte ich nie mehr umziehen.', exEn: 'When that happened, I never wanted to move again.' },
    { de: 'niedrig', pos: 'adjective', en: 'low', hi: 'नीचा', ex: 'Wenn die Temperatur niedrig ist, heizen wir mehr.', exEn: 'When the temperature is low, we heat more.' },
    { de: 'per', pos: 'preposition', en: 'via', hi: 'द्वारा', ex: 'Wenn ich Fragen habe, schreibe ich per E-Mail.', exEn: 'When I have questions, I write via email.' },
    { de: 'Poster', art: 'das', gender: 'n', plural: 'Poster', pos: 'noun', en: 'poster', hi: 'पोस्टर', ex: 'Das Kätzchen hängt an seinem Poster.', exEn: 'The kitty is attached to its poster.' },
    { de: 'quer', pos: 'adverb', en: 'across', hi: 'आर-पार', ex: 'Wenn man quer durch die Stadt fährt, dauert es länger.', exEn: 'When you drive across the city, it takes longer.' },
    { de: 'Rad', art: 'das', gender: 'n', plural: 'Räder', pos: 'noun', en: 'bike', hi: 'साइकिल', ex: 'Als ich klein war, fuhr ich jeden Tag Rad.', exEn: 'When I was small, I rode my bike every day.' },
    { de: 'schaukeln', pos: 'verb', en: 'to rock', hi: 'झूलना', ex: 'Als ich klein war, schaukelte ich stundenlang.', exEn: 'When I was small, I used to rock for hours.', conj: { praesens: 'schaukelt', praeteritum: 'schaukelte', perfekt: 'hat geschaukelt' } },
    { de: 'Skistock', art: 'der', gender: 'm', plural: 'Skistöcke', pos: 'noun', en: 'ski pole', hi: 'स्की डंडा', ex: 'Als wir Ski fuhren, brach mein Skistock.', exEn: 'When we skied, my ski pole broke.' },
    { de: 'sparen', pos: 'verb', en: 'to save', hi: 'बचाना', ex: 'Wenn man effektiv sparen will, plant man voraus.', exEn: 'If you want to save effectively, you plan ahead.', conj: { praesens: 'spart', praeteritum: 'sparte', perfekt: 'hat gespart' } },
    { de: 'Sportverein', art: 'der', gender: 'm', plural: 'Sportvereine', pos: 'noun', en: 'sports club', hi: 'खेल क्लब', ex: 'Als ich zwölf war, trat ich einem Sportverein bei.', exEn: 'When I was twelve, I joined a sports club.' },
    { de: 'stark', pos: 'adjective', en: 'strong', hi: 'मज़बूत', ex: 'Wenn man klettert, muss man stark sein.', exEn: 'When you climb, you have to be strong.' },
    { de: 'stinken', pos: 'verb', en: 'to stink', hi: 'बदबू आना', ex: 'Wenn das Futter alt ist, stinkt es.', exEn: 'When the feed is old, it stinks.', conj: { praesens: 'stinkt', praeteritum: 'stank', perfekt: 'hat gestunken' } },
    { de: 'Streifen', art: 'der', gender: 'm', plural: 'Streifen', pos: 'noun', en: 'strip', hi: 'पट्टी', ex: 'Wenn man die Matte schneidet, entsteht ein Streifen.', exEn: 'When you cut the mat, a strip is created.' },
    { de: 'Strom', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'electricity', hi: 'बिजली', ex: 'Als der Strom ausfiel, war es dunkel.', exEn: 'When the electricity went out, it was dark.' },
    { de: 'ständig', pos: 'adjective', en: 'constant', hi: 'निरंतर', ex: 'Wenn man ständig Sport macht, wird man stark.', exEn: 'If you constantly do sport, you become strong.' },
    { de: 'tauchen', pos: 'verb', en: 'to dive', hi: 'गोता लगाना', ex: 'Wenn wir am Meer sind, tauchen wir gern.', exEn: 'When we\'re at the sea, we like to dive.', conj: { praesens: 'taucht', praeteritum: 'tauchte', perfekt: 'ist getaucht' } },
    { de: 'Tierarzt', art: 'der', gender: 'm', plural: 'Tierärzte', pos: 'noun', en: 'vet', hi: 'पशु चिकित्सक', ex: 'Als der Tierarzt kam, war das Kätzchen ruhig.', exEn: 'When the vet came, the kitty was calm.' },
    { de: 'tschechisch', pos: 'adjective', en: 'Czech', hi: 'चेक', ex: 'Der Wein ist ein tschechischer Import.', exEn: 'The wine is a Czech import.' },
    { de: 'verreisen', pos: 'verb', en: 'to go away, to travel', hi: 'यात्रा पर जाना', ex: 'Wenn ich verreise, will ich zu einem Hochseilgarten.', exEn: 'When I go away, I want to go to a high ropes course.', conj: { praesens: 'verreist', praeteritum: 'verreiste', perfekt: 'ist verreist' } },
    { de: 'verzichten (auf)', pos: 'verb', en: 'to give up sth.', hi: 'त्याग करना', ex: 'Wenn man spart, muss man auf Luxus verzichten.', exEn: 'If you save, you have to give up luxury.', conj: { praesens: 'verzichtet', praeteritum: 'verzichtete', perfekt: 'hat verzichtet' } },
    { de: 'vorkommen', pos: 'verb', en: 'to happen, to occur', hi: 'होना', ex: 'So etwas kommt selten vor.', exEn: 'Something like that rarely happens.', conj: { praesens: 'kommt vor', praeteritum: 'kam vor', perfekt: 'ist vorgekommen' } },
    { de: 'Wagenburg', art: 'die', gender: 'f', plural: 'Wagenburgen', pos: 'noun', en: 'wagon fort', hi: 'गाड़ियों का किला', ex: 'Als ich klein war, baute ich eine Wagenburg aus Kissen.', exEn: 'When I was small, I built a wagon fort out of cushions.' },
    { de: 'Wahnsinn', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'madness, craziness', hi: 'पागलपन', ex: 'Als der Hochseilgarten begann, dachte ich: Wahnsinn!', exEn: 'When the high ropes course began, I thought: madness!' },
    { de: 'wahnsinnig', pos: 'adjective', en: 'crazy', hi: 'पागल', ex: 'Das Kätzchen ist wahnsinnig süß.', exEn: 'The kitty is incredibly cute.' },
    { de: 'Wein', art: 'der', gender: 'm', plural: 'Weine', pos: 'noun', en: 'wine', hi: 'शराब', ex: 'Der tschechische Wein war ein Geschenk.', exEn: 'The Czech wine was a gift.' },
    { de: 'werfen', pos: 'verb', en: 'to throw', hi: 'फेंकना', ex: 'Als ich klein war, warf ich immer den Ball ins Fenster.', exEn: 'When I was small, I always threw the ball into the window.', conj: { praesens: 'wirft', praeteritum: 'warf', perfekt: 'hat geworfen' } },
    { de: 'Wohnungstür', art: 'die', gender: 'f', plural: 'Wohnungstüren', pos: 'noun', en: 'flat door', hi: 'फ्लैट का दरवाज़ा', ex: 'Als ich einzog, klemmte die Wohnungstür.', exEn: 'When I moved in, the flat door stuck.' },
    { de: 'womit', pos: 'adverb', en: 'with what', hi: 'किससे', pron: 'voh-MIT', ex: 'Womit hast du das Kätzchen gefüttert?', exEn: 'What did you feed the kitty with?' },
    { de: 'zumindest', pos: 'adverb', en: 'at least', hi: 'कम से कम', ex: 'Wenn ich schon spare, will ich zumindest reisen.', exEn: 'If I\'m already saving, I at least want to travel.' },
    { de: 'Briefkasten', art: 'der', gender: 'm', plural: 'Briefkästen', pos: 'noun', en: 'mailbox', hi: 'डाकपेटी', ex: 'Als ich einzog, hatte ich noch keinen eigenen Briefkasten.', exEn: 'When I moved in, I didn\'t yet have my own mailbox.' },
    { de: 'Fußballstar', art: 'der', gender: 'm', plural: 'Fußballstars', pos: 'noun', en: 'football star', hi: 'फ़ुटबॉल सितारा', ex: 'Als ich klein war, wollte ich ein Fußballstar werden.', exEn: 'When I was small, I wanted to become a football star.' },
    { de: 'Grenzgebiet', art: 'das', gender: 'n', plural: 'Grenzgebiete', pos: 'noun', en: 'frontier, border area', hi: 'सीमा क्षेत्र', ex: 'Wenn man ins Grenzgebiet fährt, braucht man den Ausweis.', exEn: 'When you drive into the border area, you need your ID.' },
    { de: 'Hochseilgarten', art: 'der', gender: 'm', plural: 'Hochseilgärten', pos: 'noun', en: 'high ropes course', hi: 'ऊंची रस्सी वाला पार्क', ex: 'Wenn ich verreise, will ich zu einem Hochseilgarten.', exEn: 'When I go away, I want to go to a high ropes course.' },
    { de: 'Morgenstunde', art: 'die', gender: 'f', plural: 'Morgenstunden', pos: 'noun', en: 'early morning hour', hi: 'सुबह का समय', ex: 'Wenn ich in der Morgenstunde aufstehe, bin ich effektiv.', exEn: 'When I get up in the early morning hour, I\'m effective.' },
    { de: 'Nebenkosten', art: 'die', gender: 'pl', plural: 'Nebenkosten', pos: 'noun', en: 'utilities', hi: 'अतिरिक्त खर्च', ex: 'Als ich einzog, waren die Nebenkosten hoch.', exEn: 'When I moved in, the utilities were high.' },
    { de: 'Sprecherin', art: 'die', gender: 'f', plural: 'Sprecherinnen', pos: 'noun', en: 'speaker (f.)', hi: 'वक्ता (महिला)', ex: 'Als die Sprecherin begann, wurde es still.', exEn: 'When the speaker (f.) began, it became quiet.' },
    { de: 'Surfschule', art: 'die', gender: 'f', plural: 'Surfschulen', pos: 'noun', en: 'surf school', hi: 'सर्फ़ स्कूल', ex: 'Wenn wir am Meer sind, gehen wir zur Surfschule.', exEn: 'When we\'re at the sea, we go to the surf school.' },
    { de: 'Vergangenheit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'past', hi: 'अतीत', ex: 'Als das passierte, war es schon Vergangenheit.', exEn: 'When that happened, it was already in the past.' },
    { de: 'Veränderung', art: 'die', gender: 'f', plural: 'Veränderungen', pos: 'noun', en: 'change', hi: 'बदलाव', ex: 'Als ich einzog, gab es eine große Veränderung in meinem Leben.', exEn: 'When I moved in, there was a big change in my life.' },
    { de: 'Wortfamilie', art: 'die', gender: 'f', plural: 'Wortfamilien', pos: 'noun', en: 'word family', hi: 'शब्द परिवार', ex: 'Wenn man eine Wortfamilie lernt, versteht man mehr Wörter.', exEn: 'When you learn a word family, you understand more words.' }
  ],

  // ---------- als vs. wenn (rule cards) ----------
  grammar: [
    {
      title: 'als — one completed event in the past',
      body: [
        '<span class="de r-conjunction">als</span> is used only for something that happened <strong>exactly once, in the past</strong>. Never for repeated actions, and never for the present or future.'
      ],
      table: {
        head: ['Example', 'Meaning'],
        rows: [
          ['<span class="de">Als ich klein war, spielte ich Fußball.</span>', 'a specific period in the past'],
          ['<span class="de">Als ich nach Deutschland kam, war ich sehr nervös.</span>', 'a single arrival event'],
          ['<span class="de">Als der Unterricht begann, waren alle da.</span>', 'a single starting moment']
        ]
      },
      hinglish: '<b>als</b> past mein ek hi specific time ya period ke liye use hota hai \u2014 chahe woh ek pal ho ya kuch saal (<b>Als ich Kind war</b>). Repeated action, present ya future ke liye <b>als</b> nahi aata.'
    },
    {
      title: 'wenn — repeated, present, future, or condition',
      body: [
        '<span class="de r-wenn">wenn</span> covers everything als doesn\'t: repeated actions (in any time frame), present situations, future situations, and conditions.'
      ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Repeated', '<span class="de">Wenn ich Zeit habe, lese ich.</span>'],
          ['Present situation', '<span class="de">Wenn ich krank bin, bleibe ich zu Hause.</span>'],
          ['Future', '<span class="de">Wenn ich nach Deutschland fahre, besuche ich Berlin.</span>'],
          ['Condition', '<span class="de">Wenn es regnet, nehme ich einen Regenschirm.</span>']
        ]
      },
      hinglish: '<b>wenn</b> woh sab cover karta hai jo <b>als</b> nahi karta: baar-baar hone wali situation, present, future, aur condition.'
    },
    {
      title: 'Timeline & word order',
      body: [
        'Picture a timeline: a single dot in the past is als; anything repeated, or in the present/future, or a condition, is wenn. Both send the conjugated verb to the end of their own clause, and both trigger inversion in the following main clause.'
      ],
      table: {
        head: ['Fronted clause', 'Main clause (inverted)'],
        rows: [
          ['<span class="de r-conjunction">Als</span> ich klein war,', '<b>wohnte</b> ich in Delhi.'],
          ['<span class="de r-wenn">Wenn</span> ich Zeit habe,', '<b>gehe</b> ich spazieren.']
        ]
      },
      note: 'Past one-time (a single dot on the timeline) → als. Present/Future/Habit (repeating or ongoing) → wenn.',
      hinglish: 'Timeline socho. Agar baat past ke ek specific time ki hai to <b>als</b> aayega. Aur agar cheez baar-baar hoti hai, ya baat present, future ya condition ki hai, to <b>wenn</b> aayega. Dono ke baad verb clause ke end mein jaata hai, aur agar clause pehle aaye to main clause verb se shuru hoti hai.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Wenn ich klein war, spielte ich Fußball.</span> → <span class="de">Als ich klein war, …</span> — a specific past period uses als, not wenn.',
        '<span class="de strike">Als ich Zeit habe, lese ich.</span> → <span class="de">Wenn ich Zeit habe, …</span> — a present habit uses wenn, not als.',
        '<span class="de strike">Als es morgen regnet, …</span> → <span class="de">Wenn es morgen regnet, …</span> — the future always uses wenn.',
        '<span class="de strike">Wenn ich gestern krank war, …</span> → <span class="de">Als ich gestern krank war, …</span> — a specific past day (gestern) is a one-time event, so als.'
      ],
      hinglish: 'Char galtiyan common hain. Past ke specific period ke liye <b>als</b> chahiye, <b>wenn</b> nahi. Present mein jo cheez regularly hoti hai, uske liye <b>wenn</b> aata hai. Future ke liye bhi <b>wenn</b> hi aata hai. Aur agar koi specific din past mein hai, jaise <b>gestern</b>, to <b>als</b> use karo.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'Ask yourself one question at a time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Did it happen only once in the past?', '→ <span class="de r-conjunction">als</span>'],
          ['Is it repeated?', '→ <span class="de r-wenn">wenn</span>'],
          ['Is it present?', '→ <span class="de r-wenn">wenn</span>'],
          ['Is it future?', '→ <span class="de r-wenn">wenn</span>'],
          ['Is it a condition?', '→ <span class="de r-wenn">wenn</span>']
        ]
      },
      hinglish: 'Ek sawaal poochho: baat past ke ek specific time ki hai? To <b>als</b>. Aur baaki sab cases mein \u2014 repeat, present, future ya condition \u2014 <b>wenn</b> aata hai.'
    }
  ],

  // ---------- Reading passage (Rohans neue Wohnung, clickable) ----------
  reading: {
    title: 'Rohans neue Wohnung',
    titleEn: 'Rohan\'s new flat',
    tokens: [
      { w: 'Als', role: 'r-conjunction', en: 'when', hi: 'जब', pron: 'als', type: 'Konjunktion · als', why: 'als — one-time past event (this chapter).', ex: 'Als Rohan einzog, war der Altbau noch leer.', exEn: 'When Rohan moved in, the old building was still empty.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'einzog', role: 'r-verb', en: 'moved in', hi: 'रहने आया', pron: 'INE-tsohk', type: 'Verb · einziehen, Präteritum' },
      { w: ',', plain: true },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb · sein, Präteritum' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Altbau', role: 'r-subject', en: 'old building', hi: 'पुरानी इमारत', pron: 'ALT-bow', type: 'Noun · masc.', why: 'der Altbau (this chapter).', ex: 'der Altbau war leer', exEn: 'the old building was empty' },
      { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
      { w: 'leer', role: 'r-adjective', en: 'empty', hi: 'खाली', pron: 'lair', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'musste', role: 'r-modalverb', en: 'had to', hi: 'पड़ा', pron: 'MOOS-tuh', type: 'Modalverb · müssen, Präteritum' },
      { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'AL-es', type: 'Pronoun' },
      { w: 'selbst', role: 'r-adverb', en: 'himself', hi: 'खुद', pron: 'zelpst', type: 'Adverb' },
      { w: 'einrichten', role: 'r-verb', en: 'furnish', hi: 'सजाना', pron: 'INE-rikh-ten', type: 'Verb · einrichten', why: 'einrichten (this chapter).', ex: 'die Wohnung einrichten', exEn: 'to furnish the flat' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'when(ever)', hi: 'जब भी', pron: 'ven', type: 'Konjunktion · wenn', why: 'wenn — present habit (this chapter).', ex: 'Wenn er jetzt Freunde einlädt, sind alle beeindruckt.', exEn: 'Whenever he invites friends now, everyone is impressed.' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अभी', pron: 'YETST', type: 'Adverb' },
      { w: 'Freunde', role: 'r-akkusativ', en: 'friends', hi: 'दोस्त', pron: 'FROYN-duh', type: 'Noun · plural' },
      { w: 'einlädt', role: 'r-verb', en: 'invites', hi: 'बुलाता है', pron: 'INE-layt', type: 'Verb · einladen' },
      { w: ',', plain: true },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
      { w: 'alle', role: 'r-subject', en: 'everyone', hi: 'सब', pron: 'AL-uh', type: 'Pronoun' },
      { w: 'beeindruckt', role: 'r-adjective', en: 'impressed', hi: 'प्रभावित', pron: 'buh-INE-drookt', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Sein', role: 'r-subject', en: 'his', hi: 'उसका', pron: 'zine', type: 'Possessivartikel' },
      { w: 'Mitbewohner', role: 'r-subject', en: 'flatmate', hi: 'फ्लैटमेट', pron: 'MIT-buh-voh-ner', type: 'Noun · masc.', why: 'der Mitbewohner (this chapter).', ex: 'sein Mitbewohner', exEn: 'his flatmate' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
      { w: 'ein', role: 'r-akkusativ', en: 'a', hi: 'एक', pron: 'ine', type: 'Article · acc.' },
      { w: 'Kätzchen', role: 'r-akkusativ', en: 'kitty', hi: 'बिल्ली का बच्चा', pron: 'KETS-khen', type: 'Noun · neut.', why: 'das Kätzchen (this chapter).', ex: 'ein süßes Kätzchen', exEn: 'a cute kitty' },
      { w: ',', plain: true },
      { w: 'das', role: 'r-subject', en: 'which', hi: 'जो', pron: 'das', type: 'Pronoun' },
      { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'an', role: 'r-verb', en: '(attached)', hi: '(part.)', pron: 'an', type: 'Trennbares Verb · Partikel' },
      { w: 'seinem', role: 'r-dativ', en: 'his (neut. dat.)', hi: 'उसका', pron: 'ZY-nem', type: 'Possessivartikel · Dat.' },
      { w: 'Poster', role: 'r-dativ', en: 'poster', hi: 'पोस्टर', pron: 'POH-ster', type: 'Noun · neut.', why: 'das Poster (this chapter).', ex: 'am Poster hängen', exEn: 'to hang on the poster' },
      { w: 'hängt', role: 'r-verb', en: 'hangs', hi: 'लटकता है', pron: 'HENKT', type: 'Verb · hängen' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'when(ever)', hi: 'जब भी', pron: 'ven', type: 'Konjunktion · wenn', why: 'wenn — future plan (this chapter).', ex: 'Wenn Rohan verreist, will er zu einem Hochseilgarten.', exEn: 'When Rohan goes away, he wants to go to a high ropes course.' },
      { w: 'Rohan', role: 'r-subject', en: 'Rohan', hi: 'रोहन', pron: 'ROH-han', type: 'Name' },
      { w: 'verreist', role: 'r-verb', en: 'goes away', hi: 'यात्रा पर जाता है', pron: 'fer-RYSST', type: 'Verb · verreisen', why: 'verreisen (this chapter).' },
      { w: ',', plain: true },
      { w: 'will', role: 'r-modalverb', en: 'wants to', hi: 'चाहता है', pron: 'vil', type: 'Modalverb · wollen' },
      { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun' },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: 'में', pron: 'tsoo', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'r-dativ', en: 'a (masc. dat.)', hi: 'एक', pron: 'AY-nem', type: 'Article · dative' },
      { w: 'Hochseilgarten', role: 'r-dativ', en: 'high ropes course', hi: 'ऊंची रस्सी वाला पार्क', pron: 'HOHKH-zyle-gar-ten', type: 'Noun · masc.', why: 'der Hochseilgarten (this chapter).', ex: 'zu einem Hochseilgarten fahren', exEn: 'to drive to a high ropes course' },
      { w: '.', plain: true }
    ],
    translation: 'When Rohan moved in, the old building was still empty. He had to furnish everything himself. Whenever he invites friends now, everyone is impressed. His flatmate has a kitty that hangs very attached to his poster. When Rohan goes away, he wants to go to a high ropes course. — Watch the split: als (moved in — one-time past) vs. wenn (invites friends now — repeated, and goes away — future).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_028_L001', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, als ich klein war, hatte ich eine Katze namens Mausi.', en: 'Timo, when I was little, I had a cat named Mausi.' },
      { id: 'A2_028_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Schön! Wenn mein Cousin uns besuchte, brachte er immer seinen Hund mit.', en: 'Nice! Whenever my cousin visited us, he always brought his dog along.' },
      { id: 'A2_028_L003', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und als du zum ersten Mal einen Hund gesehen hast, hattest du Angst?', en: 'And when you saw a dog for the first time, were you scared?' },
      { id: 'A2_028_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, gar nicht! Ich habe ihn sofort gemocht.', en: 'No, not at all! I liked him right away.' }
    ],
    transcript: 'Timo, als ich klein war, hatte ich eine Katze namens Mausi. Schön! Wenn mein Cousin uns besuchte, brachte er immer seinen Hund mit. Und als du zum ersten Mal einen Hund gesehen hast, hattest du Angst? Nein, gar nicht! Ich habe ihn sofort gemocht.',
    translation: 'Timo, when I was little, I had a cat named Mausi. Nice! Whenever my cousin visited us, he always brought his dog along. And when you saw a dog for the first time, were you scared? No, not at all! I liked him right away.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'als' },
      { w: 'ich' },
      { w: 'klein' },
      { w: 'war' },
      { w: ',', plain: true },
      { w: 'hatte' },
      { w: 'ich' },
      { w: 'eine' },
      { w: 'Katze' },
      { w: 'namens' },
      { w: 'Mausi' },
      { w: '.', plain: true },
      { w: 'Schön' },
      { w: '!', plain: true },
      { w: 'Wenn' },
      { w: 'mein' },
      { w: 'Cousin' },
      { w: 'uns' },
      { w: 'besuchte' },
      { w: ',', plain: true },
      { w: 'brachte' },
      { w: 'er' },
      { w: 'immer' },
      { w: 'seinen' },
      { w: 'Hund' },
      { w: 'mit' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'als' },
      { w: 'du' },
      { w: 'zum' },
      { w: 'ersten' },
      { w: 'Mal' },
      { w: 'einen' },
      { w: 'Hund' },
      { w: 'gesehen' },
      { w: 'hast' },
      { w: ',', plain: true },
      { w: 'hattest' },
      { w: 'du' },
      { w: 'Angst' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'gar' },
      { w: 'nicht' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'ihn' },
      { w: 'sofort' },
      { w: 'gemocht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hatte Insa als Kind?', qEn: 'What did Insa have as a child?', options: ['einen Hund', 'eine Katze', 'einen Vogel', 'ein Kaninchen'], optionsEn: ['a dog', 'a cat', 'a bird', 'a rabbit'], answer: 1,
        explain: '"… hatte ich eine Katze namens Mausi."' },
      { q: 'Was passierte immer, wenn Timos Cousin zu Besuch kam?', qEn: 'What happened whenever Timo\'s cousin visited?', options: ['er kam allein', 'er brachte seinen Hund mit', 'er blieb zu Hause', 'er brachte eine Katze mit'], optionsEn: ['he came alone', 'he brought his dog', 'he stayed at home', 'he brought a cat'], answer: 1,
        explain: '"Wenn mein Cousin uns besuchte, brachte er immer seinen Hund mit."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Wo hast du als Kind gewohnt?", taskEn: "Your friend asks: where did you live as a child?", de: "Als ich ein Kind war, haben wir auf einem Bauernhof gewohnt.", en: "When I was a child we lived on a farm." },
    { task: "Dein Partner fragt: Was machst du, wenn du Zeit hast?", taskEn: "Your partner asks: what do you do when you have time?", de: "Wenn ich Zeit habe, bastle ich oder entspanne ich mich.", en: "When I have time I do crafts or relax." },
    { task: "Dein Freund fragt: Wie war es, als du eingezogen bist?", taskEn: "Your friend asks: what was it like when you moved in?", de: "Als ich eingezogen bin, war die Wohnung noch leer.", en: "When I moved in, the flat was still empty." },
    { task: "Deine Nachbarin fragt: Was machst du, wenn du einsam bist?", taskEn: "Your neighbour asks: what do you do when you feel lonely?", de: "Wenn ich einsam bin, rufe ich meine Familie an.", en: "When I'm lonely I call my family." },
    { task: "Deine Freundin fragt: Wann hast du das erste Mal Deutsch gehört?", taskEn: "Your friend asks: when did you first hear German?", de: "Als ich damals in Wien war, habe ich zum ersten Mal Deutsch gehört.", en: "When I was in Vienna back then, I heard German for the first time." },
    { task: "Dein Freund fragt: Was machst du, wenn du in die Ferienwohnung fährst?", taskEn: "Your friend asks: what do you do when you go to the holiday flat?", de: "Wenn ich dort bin, richte ich alles gemütlich ein.", en: "When I'm there, I make everything cosy." },
    { task: "Deine Mutter fragt: Wie war es, als du den Bären gesehen hast?", taskEn: "Your mother asks: what was it like when you saw the bear?", de: "Als ich den Bären gesehen habe, war ich sehr besorgt.", en: "When I saw the bear I was very worried." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short text (six sentences) mixing a childhood memory (als) and your daily routine or future plans (wenn), using at least three als sentences and three wenn sentences. Try this chapter\'s words: der Mitbewohner, damals, verreisen, einziehen.',
    starters: ['Als ich klein war, …', 'Damals …', 'Wenn ich Zeit habe, …', 'Wenn ich verreise, …'],
    placeholder: 'Als ich klein war, spielte ich oft im Garten. Wenn ich heute Zeit habe, …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct connector: "___ ich klein war, spielte ich Fußball."',
      options: ['Wenn', 'Als', 'Ob'],
      answer: 1,
      explain: 'A one-time past childhood period uses als.'
    },
    gap: {
      sentence: ['', ' ich Zeit habe, gehe ich spazieren.'],
      gaps: [ { answer: 'Wenn', accepts: ['Wenn'] } ],
      explain: 'A repeated present habit uses wenn.'
    },
    match: {
      q: 'Match each sentence to als or wenn.',
      pairs: [
        { noun: 'Als ich nach Deutschland kam, war ich nervös.', art: 'als — one-time past event' },
        { noun: 'Wenn ich krank bin, bleibe ich zu Hause.', art: 'wenn — present habit' },
        { noun: 'Wenn ich nach Berlin fahre, besuche ich das Museum.', art: 'wenn — future plan' },
        { noun: 'Wenn es regnet, nehme ich einen Regenschirm.', art: 'wenn — condition' },
        { noun: 'Als der Unterricht begann, waren alle da.', art: 'als — a single starting moment' }
      ]
    },
    builder: {
      target: 'Build: "When I was small, I lived in Delhi."',
      bank: ['Als', 'ich', 'klein', 'war', ',', 'wohnte', 'ich', 'in', 'Delhi', '.'],
      answer: ['Als', 'ich', 'klein', 'war', ',', 'wohnte', 'ich', 'in', 'Delhi', '.'],
      roles: { 'Als': 'r-conjunction', 'ich': 'r-subject', 'war': 'r-verb', 'wohnte': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ ich nach Deutschland kam, war ich sehr nervös." (one-time past)', options: ['Wenn', 'Als', 'Ob'], answer: 1,
      explain: 'A single arrival in the past uses als.' },
    { q: 'Complete: "___ ich krank bin, bleibe ich zu Hause." (present habit)', options: ['Als', 'Wenn', 'Weil'], answer: 1,
      explain: 'A repeated present situation uses wenn.' },
    { q: 'Which connector is used for the future?', options: ['als', 'wenn', 'ob'], answer: 1,
      explain: 'wenn covers future situations — als is never used for the future.' },
    { q: 'Which sentence is correct?', options: ['Als es morgen regnet, bleibe ich zu Hause.', 'Wenn es morgen regnet, bleibe ich zu Hause.', 'Ob es morgen regnet, bleibe ich zu Hause.'], answer: 1,
      explain: 'The future always uses wenn.' },
    { q: 'Which sentence is correct?', options: ['Wenn ich gestern krank war, blieb ich zu Hause.', 'Als ich gestern krank war, blieb ich zu Hause.', 'Ob ich gestern krank war, blieb ich zu Hause.'], answer: 1,
      explain: 'A specific past day (gestern) is a one-time event, so als is correct.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-conjunction', html: '<span class="de r-conjunction">als</span> is used only for a <b>single, completed event in the past</b> — never for repeated actions, the present, or the future.' },
    { c: 'r-wenn', html: '<span class="de r-wenn">wenn</span> covers everything else: <b>repeated</b> actions, the <b>present</b>, the <b>future</b>, and <b>conditions</b>.' },
    { c: 'r-conjunction', html: 'Both send the verb to the end of their own clause, and both trigger <b>inversion</b> in the following main clause: <span class="de">Als ich klein war, wohnte ich in Delhi.</span>' }
  ],
  revisionTips: [
    'Did it happen only once, in the past? → als. Everything else (repeated, present, future, condition)? → wenn.',
    'A specific past day or moment (gestern, letzte Woche, als ich ankam) is still a one-time event — use als, not wenn.',
    'The future never uses als — always wenn, even for a single planned future event.'
  ]
};

window.CHAPTER = CHAPTER;
