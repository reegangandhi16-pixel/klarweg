/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 20
   "Plusquamperfekt" — hatte/war + Partizip II (Satzende) for an
   action that happened BEFORE another past action. Perfekt vs.
   Präteritum vs. Plusquamperfekt timeline. haben vs. sein
   (movement/change-of-state verbs). Common with nachdem, als,
   bevor.
   IMPORTANT: dialogue uses ONLY Wenke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-20 list (33 items) — a
   friendship/relationships theme (Freundschaftsgeschichte,
   Clique, Netzwerk, zusammenwohnen, aus den Augen verlieren…),
   an excellent natural fit for narrating "what had happened
   before" in a friendship's history — woven into the story and
   reading passage.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-20-plusquamperfekt',
  phase: 'B1 · Phase 1',
  number: 20,
  title: 'Plusquamperfekt',
  titleEn: 'Pluperfect (past perfect)',
  description: 'Ich hatte gegessen, bevor ich ins Kino ging. Sie war schon eingeschlafen, als ich ankam. When one past event happened before another past event, the earlier one gets hatte/war + Partizip II — the "past before the past."',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 21, title: 'Temporale Nebensätze', titleEn: 'Temporal subordinate clauses' , href: 'chapter-b1-21-temporale-nebensaetze.html' },

  prevChapter: { number: 19, title: 'Goethe Halbzeit-Test', titleEn: 'Goethe Halfway Test — the B1 midpoint checkpoint', href: 'chapter-b1-19-goethe-halbzeit-test.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>the past before the past.</em>',
    intro: 'Wenke and Timo catch up on old friends they lost touch with — she had already moved before they stopped seeing each other, he had finished his studies before he moved away too — every memory built on two layers of the past: what had already happened, and what came next.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear hatte/war + Partizip II mark the earlier of two past events'
    ],
    scene: 'Ein Abend voller Erinnerungen',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'war', role: 'r-verb', en: 'had', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Plusquamperfekt)', why: 'war/hatte + Partizip II = Plusquamperfekt, describes an event before another past event (this chapter).', ex: 'Ich war schon umgezogen.', exEn: 'I had already moved.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'umgezogen', role: 'r-verb', en: 'moved', hi: 'शिफ़्ट हो गयी', pron: 'UM-ge-tso-gen', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'davor', role: 'r-adverb', en: 'before that', hi: 'उससे पहले', pron: 'da-FOR', type: 'Adverb' },
        { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-ten', type: 'Verb · haben (Plusquamperfekt, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'mehr', role: 'r-adverb', en: 'anymore', hi: 'अब', pron: 'mair', type: 'Adverb' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I had already moved, before that we had not seen each other anymore.', hi: 'Main pehle se shift ho gayi thi, usse pehle hum ek doosre ko nahi dekh paaye the.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Plusquamperfekt)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'bemerkt', role: 'r-verb', en: 'noticed', hi: 'देखा', pron: 'be-MAIRKT', type: 'Partizip II · Satzende', why: 'bemerken = to notice (this chapter).', ex: 'Ich hatte das bemerkt.', exEn: 'I had noticed that.' },
        { w: '.', plain: true }
      ], en: 'I had also noticed that.', hi: 'Maine bhi yeh dekha tha.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-ten', type: 'Verb · haben (Plusquamperfekt)' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'aus', role: 'r-preposition', en: 'out of', hi: 'से', pron: 'ows', type: 'Preposition' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Augen', role: 'r-dativ', en: 'eyes (dat.)', hi: 'आंखों से', pron: 'OW-gen', type: 'Noun · plural dat.', why: 'aus den Augen verlieren = to lose sight of each other (fixed phrase, this chapter).', ex: 'Wir hatten uns aus den Augen verloren.', exEn: 'We had lost sight of each other.' },
        { w: 'verloren', role: 'r-verb', en: 'lost', hi: 'खो दिया', pron: 'fer-LO-ren', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'dachte', role: 'r-verb', en: 'thought', hi: 'सोचा', pron: 'DAKH-tuh', type: 'Verb · denken (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
        { w: 'an', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'an', type: 'Preposition · fixed with denken' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'We had lost sight of each other. Nevertheless I often thought about you.', hi: 'Hum ek doosre se sampark kho chuke the. Phir bhi main aksar tumhare baare mein sochti thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb · haben (Plusquamperfekt)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Studium', role: 'r-akkusativ', en: 'studies', hi: 'पढ़ाई', pron: 'SHTOO-dee-um', type: 'Noun · neut.' },
        { w: 'bereits', role: 'r-adverb', en: 'already', hi: 'पहले ही', pron: 'be-RITES', type: 'Adverb' },
        { w: 'beendet', role: 'r-verb', en: 'finished', hi: 'पूरा किया', pron: 'be-EN-det', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'zog', role: 'r-verb', en: 'moved', hi: 'चला गया', pron: 'tsohk', type: 'Verb · ziehen (Präteritum)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'weg', role: 'r-adverb', en: 'away', hi: 'दूर', pron: 'vek', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'That pleases me very much. I had already finished my studies, then I also moved away.', hi: 'Mujhe iski bahut khushi hai. Maine pehle hi padhaai poori kar li thi, phir main bhi door chala gaya.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Wollen', role: 'r-modalverb', en: 'do we want', hi: 'चाहते हैं', pron: 'VO-len', type: 'Modal · wollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'unser', role: 'r-akkusativ', en: 'our (neut.)', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive · acc.' },
        { w: 'Netzwerk', role: 'r-akkusativ', en: 'network', hi: 'नेटवर्क', pron: 'NETS-verk', type: 'Noun · neut.', why: 'das Netzwerk (this chapter).', ex: 'unser altes Netzwerk', exEn: 'our old network' },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'से', pron: 'fon', type: 'Preposition + dative' },
        { w: 'damals', role: 'r-dativ', en: 'back then', hi: 'उस समय के', pron: 'DAH-mahls', type: 'Adverb · time' },
        { w: 'wiederbeleben', role: 'r-verb', en: 'revive', hi: 'फिर से जगाना', pron: 'VEE-der-be-lay-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do we want to revive our old network from back then?', hi: 'Kya hum apne purane network ko phir se jagaana chahte hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'schön', role: 'r-subject', en: 'beautiful', hi: 'ख़ूबसूरत', pron: 'shern', type: 'Adjective' },
        { w: '!', plain: true }
      ], en: 'Yes, that would be beautiful!', hi: 'Haan, yeh khoobsurat hoga!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When you narrate two past events, the one that happened FIRST needs its own marker: <span class="de r-plusq">hatte/war + Partizip II</span>, placed at the end of the clause. <span class="de">Ich hatte gegessen, bevor ich ins Kino ging.</span> — eating happened before going to the cinema, so eating gets <span class="de">hatte gegessen</span>, and going gets the normal past (<span class="de">ging</span>). It\'s the "past before the past."'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PLUSQUAMPERFEKT (B1 level only): hatte/war (conjugated) + Partizip II at the very end of the clause, used for an action that happened BEFORE another past action (narrated in Perfekt or Präteritum). haben is used with most verbs; sein is used with movement/change-of-state verbs (gehen, kommen, fahren, einschlafen, ankommen, werden…), exactly as in Perfekt. Common trigger words: nachdem, als, bevor. ' +
    'Do NOT expect Plusquamperfekt Passive, Futur II, or other B2 narrative tense combinations — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Plusquamperfekt needs BOTH hatte/war (conjugated, Position 2) AND a Partizip II at the very end — never just one of the two, and never a bare Infinitiv there.\n' +
    '- haben vs sein follows the exact same rule as Perfekt: sein for movement (gehen, fahren, kommen) and change of state (einschlafen, aufwachen, werden, sterben); haben for everything else.\n' +
    '- Plusquamperfekt marks the EARLIER of two past events; the later event is narrated in Perfekt or Präteritum, not Plusquamperfekt — using Plusquamperfekt for both events in a sequence is a common error.\n' +
    '- With nachdem, the nachdem-clause is normally in Plusquamperfekt and the main clause in Perfekt/Präteritum (never both in Perfekt): "Nachdem ich gegessen hatte, ging ich." not "Nachdem ich gegessen habe, ging ich."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Timeline check:</b> one sentence on whether Plusquamperfekt correctly marked the EARLIER of two past events.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly identify which past event came first and mark it with hatte/war + Partizip II. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the haben vs. sein table once — especially movement verbs like gehen/fahren/kommen — then continue.',
    low: 'Worth another pass through the Grammar section — practise the timeline: which event happened FIRST? That one takes Plusquamperfekt.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'hatte', role: 'r-plusq' },
    { w: 'gegessen', role: 'r-plusq' }, { w: ',', role: 'plain' },
    { w: 'bevor', role: 'r-conjunction' }, { w: 'ich', role: 'r-subject' },
    { w: 'ging', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the earlier of two past events gets hatte/war + Partizip II.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wenke and Timo reminisce about old friends, using Plusquamperfekt throughout.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 33 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Plusquamperfekt formation, haben vs. sein, and the full tense timeline.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style friendship story, full of Plusquamperfekt.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch Plusquamperfekt in natural speech and identify which event happened first.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Narrate sequences of past events using Plusquamperfekt naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a diary entry or travel report using Plusquamperfekt naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Perfekt → Plusquamperfekt transformation and timeline ordering.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 33 chapter words — friendship and relationships vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Perfekt → Plusquamperfekt transformation drills, haben/sein practice, timeline ordering, and a story-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Plusquamperfekt reference — formation, haben vs. sein, tense timeline, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich hatte gegessen, …', text: 'Mark an earlier past event with hatte + Partizip II' },
    { de: 'Sie war gegangen, …', text: 'Mark an earlier past event with war + Partizip II' },
    { de: 'haben vs. sein', text: 'Choose the correct auxiliary, just like in Perfekt' },
    { de: 'nachdem, als, bevor', text: 'Combine Plusquamperfekt naturally with time connectors' },
    { de: 'Perfekt vs. Plusquamperfekt', text: 'Tell which past event happened first' }
  ],

  // ---------- Vocabulary (33 items — full chapter-20 upload list) ----------
  vocab: [
    { de: 'Konflikt', art: 'der', gender: 'm', plural: 'Konflikte', pos: 'noun', level: 'B1', en: 'conflict', hi: 'संघर्ष', ex: 'Der Konflikt zwischen den Freunden war schnell gelöst.', exEn: 'The conflict between the friends was quickly resolved.', exHi: 'Dosto ke beech vivaad jaldi suljha liya gaya.' },
    { de: 'Bildung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'formation', hi: 'गठन', ex: 'Die Bildung der neuen Gruppe dauerte lange.', exEn: 'The formation of the new group took a long time.', exHi: 'Nayi group ka gathan lamba samay le raha tha.' },
    { de: 'berufstätig', pos: 'adjective', level: 'B1', en: 'working', hi: 'कार्यरत', ex: 'Sie ist seit fünf Jahren berufstätig.', exEn: 'She has been working for five years.', exHi: 'Woh paanch saal se kaam kar rahi hai.' },
    { de: 'beschließen', pos: 'verb', level: 'B1', en: 'to decide', hi: 'फ़ैसला करना', ex: 'Ich hatte beschlossen, mein eigenes Unternehmen zu gründen.', exEn: 'I had decided to found my own business.', exHi: 'Maine apna vyavsaay sthaapit karne ka faisla kiya tha.', conj: { praesens: 'beschließt', praeteritum: 'beschloss', perfekt: 'hat beschlossen' } },
    { de: 'Erwartung', art: 'die', gender: 'f', plural: 'Erwartungen', pos: 'noun', level: 'B1', en: 'expectation', hi: 'अपेक्षा', ex: 'Die Erwartungen an die Freundschaft waren hoch.', exEn: 'Expectations of the friendship were high.', exHi: 'Dosti se ummeedein zyada thi.' },
    { de: 'Ewigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'ages, eternity', hi: 'युगों', ex: 'Wir hatten uns eine Ewigkeit nicht gesehen.', exEn: 'We hadn\'t seen each other for ages.', exHi: 'Humne ek-doosre ko yugon se nahi dekha tha.' },
    { de: 'eingespannt sein', pos: 'idiom', level: 'B1', en: 'to be very busy', hi: 'बहुत व्यस्त होना', ex: 'Ich war letzte Woche sehr eingespannt.', exEn: 'I was very busy last week.', exHi: 'Main pichhle hafte bahut vyast tha.' },
    { de: 'entgegen', pos: 'preposition', level: 'B1', en: 'against, contrary to (+ Dativ)', hi: 'के विपरीत', ex: 'Entgegen meiner Erwartung war er pünktlich.', exEn: 'Contrary to my expectation, he was punctual.', exHi: 'Meri ummeed ke viparit, woh samay par tha.' },
    { de: 'feststellen', pos: 'verb', level: 'B1', en: 'to realize', hi: 'महसूस करना', ex: 'Ich hatte schon immer festgestellt, dass du kräftig arbeitest.', exEn: 'I had always already realized that you work hard.', exHi: 'Mujhe pehle se hi ehsaas ho gaya tha ki tum kathin mehnat karte ho.', conj: { praesens: 'stellt fest', praeteritum: 'stellte fest', perfekt: 'hat festgestellt' } },
    { de: 'guttun', pos: 'verb', level: 'B1', en: 'to benefit, do good', hi: 'फ़ायदा करना', ex: 'Das Gespräch hatte uns beiden gutgetan.', exEn: 'The conversation had done us both good.', exHi: 'Baatcheet ne hum dono ka fayda kiya tha.', conj: { praesens: 'tut gut', praeteritum: 'tat gut', perfekt: 'hat gutgetan' } },
    { de: 'halten', pos: 'verb', level: 'B1', en: 'to hold, last (Freundschaft halten)', hi: 'बनाए रखना', ex: 'Wir hatten unsere Freundschaft trotz der Entfernung gehalten.', exEn: 'We had maintained our friendship despite the distance.', exHi: 'Humne doori ke bawajood apni dosti banaaye rakhi thi.', conj: { praesens: 'hält', praeteritum: 'hielt', perfekt: 'hat gehalten' } },
    { de: 'hervorheben', pos: 'verb', level: 'B1', en: 'to highlight', hi: 'उजागर करना', ex: 'Sie hatte diesen Punkt besonders hervorgehoben.', exEn: 'She had especially highlighted this point.', exHi: 'Usne is baat ko khaas taur par ujaagar kiya tha.', conj: { praesens: 'hebt hervor', praeteritum: 'hob hervor', perfekt: 'hat hervorgehoben' } },
    { de: 'kräftig', pos: 'adjective', level: 'B1', en: 'hard, strong', hi: 'कठिन', ex: 'Du arbeitest immer sehr kräftig.', exEn: 'You always work very hard.', exHi: 'Tum hamesha bahut kathin mehnat karte ho.' },
    { de: 'nachdem', pos: 'conjunction', level: 'B1', en: 'after', hi: 'बाद में', ex: 'Nachdem wir uns kennengelernt hatten, wurden wir Freunde.', exEn: 'After we had gotten to know each other, we became friends.', exHi: 'Ek doosre ko jaanne ke baad, hum dost ban gaye.' },
    { de: 'schätzen', pos: 'verb', level: 'B1', en: 'to value (an + D.)', hi: 'महत्व देना', ex: 'Ich schätze deine Ehrlichkeit sehr.', exEn: 'I value your honesty very much.', exHi: 'Main tumhari imandaari ki bahut kadar karta hoon.', conj: { praesens: 'schätzt', praeteritum: 'schätzte', perfekt: 'hat geschätzt' } },
    { de: 'selbe', pos: 'adjective', level: 'B1', en: 'same (im selben Haus)', hi: 'वही', ex: 'Wir hatten im selben Haus gewohnt.', exEn: 'We had lived in the same house.', exHi: 'Hum ek hi ghar mein rehte the.' },
    { de: 'verlieren', pos: 'verb', level: 'B1', en: 'to lose (aus den Augen verlieren)', hi: 'खोना', ex: 'Manche hatten sich aus den Augen verloren.', exEn: 'Some had lost touch.', exHi: 'Kuch log ek-doosre se door ho gaye the.', conj: { praesens: 'verliert', praeteritum: 'verlor', perfekt: 'hat verloren' } },
    { de: 'zusammenstoßen', pos: 'verb', level: 'B1', en: 'to crash together, collide', hi: 'टकराना', ex: 'Die Autos waren zusammengestoßen.', exEn: 'The cars had collided.', exHi: 'Gaadiyaan aapas mein takra gayi thi.', conj: { praesens: 'stößt zusammen', praeteritum: 'stieß zusammen', perfekt: 'ist zusammengestoßen' } },
    { de: 'zusammenwohnen', pos: 'verb', level: 'B1', en: 'to live together', hi: 'साथ रहना', ex: 'Wir hatten damals zusammengewohnt.', exEn: 'We had lived together back then.', exHi: 'Hum tab saath rehte the.', conj: { praesens: 'wohnt zusammen', praeteritum: 'wohnte zusammen', perfekt: 'hat zusammengewohnt' } },
    { de: 'aus den Augen verlieren', pos: 'idiom', level: 'B1', en: 'to lose touch', hi: 'नज़रों से दूर होना', ex: 'Wir hatten uns fast aus den Augen verloren.', exEn: 'We had almost lost touch.', exHi: 'Hum lagbhag ek-doosre se door ho gaye the.' },
    { de: 'beim Alten bleiben', pos: 'idiom', level: 'B1', en: 'to stay the same', hi: 'वैसा ही रहना', ex: 'Zum Glück war alles beim Alten geblieben.', exEn: 'Fortunately, everything had stayed the same.', exHi: 'Khushkismati se, sab kuch vaisa hi raha tha.' },
    { de: 'Gespräch', art: 'das', gender: 'n', plural: 'Gespräche', pos: 'noun', level: 'B1', en: 'conversation', hi: 'बातचीत', ex: 'Das Gespräch hatte uns beiden gutgetan.', exEn: 'The conversation had done us both good.', exHi: 'Baatcheet ne hum dono ka fayda kiya tha.' },
    { de: 'Netzwerk', art: 'das', gender: 'n', plural: 'Netzwerke', pos: 'noun', level: 'B1', en: 'network', hi: 'नेटवर्क', ex: 'Ich hatte inzwischen ein großes Netzwerk aufgebaut.', exEn: 'I had built up a big network in the meantime.', exHi: 'Is beech mein maine ek bada network banaya tha.' },
    { de: 'Studienplatz', art: 'der', gender: 'm', plural: 'Studienplätze', pos: 'noun', level: 'B1', en: 'place to study', hi: 'अध्ययन स्थान', ex: 'Ich hatte schon einen neuen Studienplatz gefunden.', exEn: 'I had already found a new place to study.', exHi: 'Maine pehle se hi ek naya adhyayan sthaan dhoondh liya tha.' },
    { de: 'Weg', art: 'der', gender: 'm', plural: 'Wege', pos: 'noun', level: 'B1', en: 'path', hi: 'रास्ता', ex: 'Unsere Wege hatten sich getrennt.', exEn: 'Our paths had separated.', exHi: 'Hamare raaste alag ho gaye the.' },
    { de: 'Ausgabe', art: 'die', gender: 'f', plural: 'Ausgaben', pos: 'noun', level: 'B1', en: 'edition', hi: 'संस्करण', ex: 'Die neue Ausgabe war schon erschienen.', exEn: 'The new edition had already come out.', exHi: 'Naya sanskaran pehle se hi aa chuka tha.' },
    { de: 'Clique', art: 'die', gender: 'f', plural: 'Cliquen', pos: 'noun', level: 'B1', en: 'clique', hi: 'दोस्तों का समूह', ex: 'Unsere alte Clique hatte sich lange nicht gesehen.', exEn: 'Our old clique hadn\'t seen each other for a long time.', exHi: 'Hamara purana dosto ka samooh lambe samay se nahi mila tha.' },
    { de: 'Freundschaftsgeschichte', art: 'die', gender: 'f', plural: 'Freundschaftsgeschichten', pos: 'noun', level: 'B1', en: 'friendship history', hi: 'दोस्ती की कहानी', ex: 'Unsere Freundschaftsgeschichte war lang und schön.', exEn: 'Our friendship history was long and beautiful.', exHi: 'Hamari dosti ki kahani lambi aur sundar thi.' },
    { de: 'sich verstehen', pos: 'verb', level: 'B1', en: 'to get along (mit + D.)', hi: 'साथ निभाना', ex: 'Wir hatten uns schon immer gut verstanden.', exEn: 'We had always gotten along well.', exHi: 'Hum hamesha se ek-doosre ke saath achhe se nibha rahe the.', conj: { praesens: 'versteht sich', praeteritum: 'verstand sich', perfekt: 'hat sich verstanden' } },
    { de: 'Plusquamperfekt', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'pluperfect', hi: 'भूतकालपूर्व काल', ex: 'Das Plusquamperfekt beschreibt eine frühere Vergangenheit.', exEn: 'The pluperfect describes an earlier past.', exHi: 'Bhootkaalpurva kaal ek pehle ke bhootkaal ko batata hai.' },
    { de: 'Gegenwart', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'present', hi: 'वर्तमान', ex: 'In der Gegenwart nutzen wir das Präsens.', exEn: 'In the present, we use the Präsens.', exHi: 'Vartamaan mein, hum Präsens ka upyog karte hain.' },
    { de: 'Vorvergangenheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'past perfect (colloquial term)', hi: 'भूतकाल से पहले', ex: 'Die Vorvergangenheit wird mit Plusquamperfekt ausgedrückt.', exEn: 'The pre-past is expressed with Plusquamperfekt.', exHi: 'Bhootkaal se pehle ko Plusquamperfekt se vyakt kiya jaata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Plusquamperfekt?',
      body: [ 'Plusquamperfekt describes an action that happened BEFORE another action in the past. The later action is narrated in Perfekt or Präteritum.' ],
      table: {
        head: ['Order', 'Example'],
        rows: [
          ['Earlier (Plusquamperfekt)', '<span class="de">Ich hatte gegessen,</span>'],
          ['Later (Präteritum)', '<span class="de">bevor ich ins Kino ging.</span>']
        ]
      },
      hinglish: 'Plusquamperfekt ek action batata hai jo doosre past action se PEHLE hui thi. Baad wali action Perfekt ya Präteritum mein hoti hai.'
    },
    {
      title: 'Bildung — hatte/war + Partizip II',
      body: [ 'hatte/war (conjugated, Position 2) + Partizip II at the very end of the clause — exactly the Perfekt structure, but with hatte/war instead of hat/ist.' ],
      table: {
        head: ['Subject', 'hatte/war', 'Partizip II (Satzende)'],
        rows: [
          ['Ich', 'hatte', 'gearbeitet.'],
          ['Wir', 'hatten', 'gelernt.'],
          ['Er', 'war', 'gekommen.'],
          ['Anna', 'war', 'nach Berlin gefahren.']
        ]
      },
      hinglish: 'hatte/war (conjugated, Position 2) + Partizip II clause ke bilkul end mein — bilkul Perfekt jaisa structure, bas hat/ist ki jagah hatte/war.'
    },
    {
      title: 'haben vs. sein — genau wie im Perfekt',
      body: [ 'The same rule as Perfekt: sein for movement and change-of-state verbs; haben for everything else.' ],
      table: {
        head: ['Auxiliary', 'Example'],
        rows: [
          ['haben (meiste Verben)', '<span class="de">Ich hatte gearbeitet. Sie hatte gekocht.</span>'],
          ['sein (Bewegung/Zustandswechsel)', '<span class="de">Er war gegangen. Anna war angekommen. Rohan war eingeschlafen.</span>']
        ]
      },
      hinglish: 'Perfekt jaisa hi rule: sein movement aur change-of-state verbs ke liye; haben baaki sab ke liye.'
    },
    {
      title: 'Zeitleiste: Präsens → Perfekt → Präteritum → Plusquamperfekt',
      body: [ 'See where Plusquamperfekt sits relative to every other tense you\'ve learned.' ],
      table: {
        head: ['Tense', 'Example'],
        rows: [
          ['Präsens', '<span class="de">Ich esse.</span>'],
          ['Perfekt', '<span class="de">Ich habe gegessen.</span>'],
          ['Präteritum', '<span class="de">Ich aß.</span>'],
          ['Plusquamperfekt', '<span class="de">Ich hatte gegessen.</span> (before another past event)']
        ]
      },
      hinglish: 'Dekho ki Plusquamperfekt doosre sab tenses ke comparison mein kahan aata hai jo tumne seekhe hain.'
    },
    {
      title: 'Typische B1-Situationen: nachdem, als, bevor',
      body: [ 'Plusquamperfekt appears constantly with these three connectors, marking the earlier of two past events.' ],
      table: {
        head: ['Connector', 'Example'],
        rows: [
          ['nachdem', '<span class="de">Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.</span>'],
          ['als', '<span class="de">Als ich ankam, war der Zug schon abgefahren.</span>'],
          ['bevor', '<span class="de">Sie hatte die Hausaufgaben gemacht, bevor sie fernsah.</span>']
        ]
      },
      hinglish: 'Plusquamperfekt in teen connectors ke saath lagataar aata hai, do past events mein se pehle wali ko batate hue.'
    },
    {
      title: 'Perfekt vs. Plusquamperfekt',
      body: [ 'Perfekt describes a simple past event on its own. Plusquamperfekt describes an EARLIER past event, always relative to a second past event.' ],
      table: {
        head: ['Tense', 'Example'],
        rows: [
          ['Perfekt (einfaches Ereignis)', '<span class="de">Ich habe gegessen.</span>'],
          ['Plusquamperfekt (früheres Ereignis)', '<span class="de">Ich hatte gegessen, bevor ich ins Kino ging.</span>']
        ]
      },
      hinglish: 'Perfekt ek normal past event batata hai. Plusquamperfekt ek PEHLE ka past event batata hai, hamesha doosre past event ke comparison mein.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from using a bare Partizip II without hatte/war, mixing auxiliaries, or using Plusquamperfekt for both events.' ],
      mistakes: [
        { wrong: 'Ich hatte gegangen.', right: 'Ich war gegangen.', why: 'gehen is a movement verb — it needs war, not hatte.' },
        { wrong: 'Ich war gearbeitet.', right: 'Ich hatte gearbeitet.', why: 'arbeiten is not a movement/change-of-state verb — it needs hatte, not war.' },
        { wrong: 'Ich hatte gegessen bevor ich habe gegangen.', right: 'Ich hatte gegessen, bevor ich gegangen bin.', why: 'The later event uses Perfekt (bin gegangen) or Präteritum (ging), not a mix of habe + gegangen.' },
        { wrong: 'Nachdem ich gegessen habe, ging ich.', right: 'Nachdem ich gegessen hatte, ging ich.', why: 'The nachdem-clause (the earlier event) needs Plusquamperfekt (hatte gegessen), not Perfekt.' },
        { wrong: 'Ich hatte gegessen und gehe nach Hause.', right: 'Ich hatte gegessen und ging dann nach Hause.', why: 'Mixing Plusquamperfekt with Präsens for a sequential past narration breaks the timeline — the second action should also be in the past.' }
      ],
      hinglish: 'Yeh paanch galtiyaan bina hatte/war ke bare Partizip II use karne se, galat auxiliary chunne se, ya dono events ke liye Plusquamperfekt use karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Plusquamperfekt appears in Goethe B1 stories, biographies, and accident reports whenever two past events need to be ordered.' ],
      note: 'Memory trick: Past → Earlier Past → Plusquamperfekt. Ask "which event happened FIRST?" — that one gets hatte/war + Partizip II.',
      hinglish: 'Yaad rakho: Past → Earlier Past → Plusquamperfekt. Poocho "kaun sa event PEHLE hua?" — wahi hatte/war + Partizip II leta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Die alte Freundschaft',
    titleEn: 'The old friendship',
    tokens: [
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'आन्ना', type: 'Name' },
      { w: 'hatte', role: 'r-plusq', en: 'had', hi: 'शिफ्ट हुई थी', type: 'Verb · haben (Plusquamperfekt-Hilfsverb)', why: 'Plusquamperfekt: hatte + Partizip II — an earlier past event.' },
      { w: 'ihre', role: 'plain', en: 'her (fem. acc.)', hi: 'अपनी', type: 'Possessivartikel · Akk.' },
      { w: 'Kindheit', role: 'plain', en: 'childhood', hi: 'बचपन', type: 'Noun · fem.' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dativ' },
      { w: 'kleinen', role: 'plain', en: 'small', hi: 'छोटा', type: 'Adjective · gemischt · Dat.' },
      { w: 'Stadt', role: 'plain', en: 'town', hi: 'शहर', type: 'Noun · fem.' },
      { w: 'verbracht', role: 'r-plusq', en: 'spent (Satzende)', hi: 'बिताया था (Satzende)', type: 'Verb · verbringen (Partizip II, Satzende)' },
      { w: ',', plain: true },
      { w: 'bevor', role: 'r-conjunction', en: 'before', hi: 'इससे पहले', type: 'Konjunktion · bevor' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'in', role: 'r-preposition', en: 'to', hi: 'में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Großstadt', role: 'plain', en: 'big city', hi: 'बड़ा शहर', type: 'Noun · fem.' },
      { w: 'zog', role: 'r-verb', en: 'moved (Satzende)', hi: 'शिफ्ट हुई (Satzende)', type: 'Verb · ziehen (Präteritum, Satzende)', why: 'Präteritum for narration (recycled — Ch.7).' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-conjunction', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem', why: 'nachdem (this chapter): after.' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective · gemischt · Akk.' },
      { w: 'Studienplatz', role: 'plain', en: 'place to study', hi: 'अध्ययन स्थान', type: 'Noun · masc.', why: 'der Studienplatz (this chapter).' },
      { w: 'gefunden', role: 'r-plusq', en: 'found (Satzende)', hi: 'ढूंढा था (Satzende)', type: 'Verb · finden (Partizip II, Satzende)' },
      { w: 'hatte', role: 'r-plusq', en: 'had (Satzende)', hi: 'था (Satzende)', type: 'Verb · haben (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'begann', role: 'r-verb', en: 'began (Position 2)', hi: 'शुरू हुई (Position 2)', type: 'Verb · beginnen (Präteritum, Position 2)' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'neues', role: 'plain', en: 'new', hi: 'नया', type: 'Adjective · stark · Nom.' },
      { w: 'Kapitel', role: 'plain', en: 'chapter', hi: 'अध्याय', type: 'Noun · neut.' },
      { w: 'ihres', role: 'plain', en: 'her (neut. gen.)', hi: 'उसके', type: 'Possessivartikel · Genitiv' },
      { w: 'Lebens', role: 'plain', en: 'life (gen.)', hi: 'जीवन का', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'In', role: 'r-preposition', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective · schwach · Dat.' },
      { w: 'Stadt', role: 'plain', en: 'city', hi: 'शहर', type: 'Noun · fem.' },
      { w: 'traf', role: 'r-verb', en: 'met (Satzende)', hi: 'मिली (Satzende)', type: 'Verb · treffen (Präteritum, Satzende)' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'Rohan', role: 'plain', en: 'Rohan', hi: 'रोहन', type: 'Name' },
      { w: '.', plain: true },
      { w: 'Rohan', role: 'plain', en: 'Rohan', hi: 'रोहन', type: 'Name' },
      { w: 'hatte', role: 'r-plusq', en: 'had', hi: 'बनाया था', type: 'Verb · haben (Plusquamperfekt-Hilfsverb)' },
      { w: 'zu', role: 'r-preposition', en: 'at that', hi: 'उस', type: 'Preposition · Dat.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. dat.)', hi: 'इस', type: 'Determiner · Dativ' },
      { w: 'Zeit', role: 'plain', en: 'time', hi: 'समय', type: 'Noun · fem.' },
      { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'großes', role: 'plain', en: 'big', hi: 'बड़ा', type: 'Adjective · gemischt · Akk.', why: 'Mixed declension: ein + Akkusativ neuter → -es (recycled — Ch.12).' },
      { w: 'Netzwerk', role: 'plain', en: 'network', hi: 'नेटवर्क', type: 'Noun · neut.', why: 'das Netzwerk (this chapter).' },
      { w: 'aufgebaut', role: 'r-plusq', en: 'built up (Satzende)', hi: 'बनाया था (Satzende)', type: 'Verb · aufbauen (Partizip II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Obwohl', role: 'r-conjunction', en: 'although', hi: 'हालांकि', type: 'Konjunktion · obwohl', why: 'obwohl — unexpected contrast (recycled — Ch.2).' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'sich', role: 'r-akkusativ', en: 'themselves', hi: 'एक-दूसरे को', type: 'Reflexivpronomen' },
      { w: 'nie', role: 'plain', en: 'never', hi: 'कभी नहीं', type: 'Adverb' },
      { w: 'zuvor', role: 'plain', en: 'before', hi: 'इससे पहले', type: 'Adverb' },
      { w: 'begegnet', role: 'r-verb', en: 'met (Satzende)', hi: 'मिले (Satzende)', type: 'Verb · begegnen (Partizip II, Satzende)' },
      { w: 'waren', role: 'r-verb', en: 'were (Satzende)', hi: 'थे (Satzende)', type: 'Verb · sein (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'verstanden', role: 'r-verb', en: 'got along (Satzende)', hi: 'साथ निभाया (Satzende)', type: 'Verb · sich verstehen (Präteritum, Satzende)' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'sich', role: 'r-akkusativ', en: 'themselves', hi: 'एक-दूसरे को', type: 'Reflexivpronomen' },
      { w: 'sofort', role: 'r-adverb', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'gut', role: 'plain', en: 'well', hi: 'अच्छी तरह', type: 'Adverb' },
      { w: '.', plain: true }
    ],
    translation: 'Anna had spent her childhood in a small town, before she moved to the big city. After she had found a new place to study, a new chapter of her life began. In the new city, she met Rohan. Rohan had already built up a big network at that time. Although they had never met before, they got along immediately.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_020_L001', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, du glaubst nicht, wen ich heute im Supermarkt getroffen habe!', en: 'Timo, you won\'t believe who I ran into at the supermarket today!' },
      { id: 'B1_020_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wen denn?', en: 'Who?' },
      { id: 'B1_020_L003', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Meike! Wir hatten uns seit der Schule nicht mehr gesehen, bevor wir uns heute erkannt haben.', en: 'Meike! We hadn\'t seen each other since school before we recognized each other today.' },
      { id: 'B1_020_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Unglaublich! Hattest du sie überhaupt wiedererkannt?', en: 'Unbelievable! Had you even recognized her?' },
      { id: 'B1_020_L005', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Erst nicht, aber nachdem sie gelacht hatte, war es sofort klar.', en: 'Not at first, but after she had laughed, it was immediately clear.' }
    ],
    transcript: 'Timo, du glaubst nicht, wen ich heute im Supermarkt getroffen habe! Wen denn? Meike! Wir hatten uns seit der Schule nicht mehr gesehen, bevor wir uns heute erkannt haben. Unglaublich! Hattest du sie überhaupt wiedererkannt? Erst nicht, aber nachdem sie gelacht hatte, war es sofort klar.',
    translation: 'Timo, you won\'t believe who I ran into at the supermarket today! Who? Meike! We hadn\'t seen each other since school before we recognized each other today. Unbelievable! Had you even recognized her? Not at first, but after she had laughed, it was immediately clear.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'glaubst' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'wen' },
      { w: 'ich' },
      { w: 'heute' },
      { w: 'im' },
      { w: 'Supermarkt' },
      { w: 'getroffen' },
      { w: 'habe' },
      { w: '!', plain: true },
      { w: 'Wen' },
      { w: 'denn' },
      { w: '?', plain: true },
      { w: 'Meike' },
      { w: '!', plain: true },
      { w: 'Wir' },
      { w: 'hatten' },
      { w: 'uns' },
      { w: 'seit' },
      { w: 'der' },
      { w: 'Schule' },
      { w: 'nicht' },
      { w: 'mehr' },
      { w: 'gesehen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'heute' },
      { w: 'erkannt' },
      { w: 'haben' },
      { w: '.', plain: true },
      { w: 'Unglaublich' },
      { w: '!', plain: true },
      { w: 'Hattest' },
      { w: 'du' },
      { w: 'sie' },
      { w: 'überhaupt' },
      { w: 'wiedererkannt' },
      { w: '?', plain: true },
      { w: 'Erst' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'nachdem' },
      { w: 'sie' },
      { w: 'gelacht' },
      { w: 'hatte' },
      { w: ',', plain: true },
      { w: 'war' },
      { w: 'es' },
      { w: 'sofort' },
      { w: 'klar' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wen hat Wenke getroffen?', qEn: 'Who did Wenke run into?', options: ['ihre Schwester', 'Meike', 'Timo', 'eine Fremde'], optionsEn: ['her sister', 'Meike', 'Timo', 'a stranger'], answer: 1,
        explain: '"Meike!"' },
      { q: 'Wie hat Wenke sie schließlich erkannt?', qEn: 'How did Wenke finally recognize her?', options: ['durch ihre Stimme', 'nachdem sie gelacht hatte', 'durch ihre Kleidung', 'sofort'], optionsEn: ['by her voice', 'after she had laughed', 'by her clothes', 'immediately'], answer: 1,
        explain: '"… nachdem sie gelacht hatte, war es sofort klar."' }
    ]
  },

  speaking: [
    { task: "Erzähl, wen du im Supermarkt getroffen hast.", taskEn: "Tell how you met somebody in the supermarket.", de: "Wir hatten uns seit der Schule nicht gesehen, bevor wir uns heute erkannten.", en: "We hadn't seen each other since school before we recognised each other today." },
    { task: "Ein Freund fragt, wie es zu dem Konflikt kam.", taskEn: "A friend asks how the conflict came about.", de: "Nachdem wir uns aus den Augen verloren hatten, gab es nur noch Streit.", en: "After we'd lost touch, there was nothing but arguing." },
    { task: "Deine Kollegin fragt, wie du den Studienplatz bekommen hast.", taskEn: "Your colleague asks how you got your university place.", de: "Nachdem ich mich beworben hatte, bekam ich den Studienplatz.", en: "After I'd applied, I got the place." },
    { task: "Erzähl, was du festgestellt hast, als du zurückkamst.", taskEn: "Say what you noticed when you came back.", de: "Als ich zurückkam, hatte sich alles verändert.", en: "When I came back, everything had changed." },
    { task: "Ein Freund fragt, warum du berufstätig wurdest.", taskEn: "A friend asks why you started working.", de: "Nachdem ich die Bildung abgeschlossen hatte, wurde ich sofort berufstätig.", en: "After I'd finished my education, I started working straight away." },
    { task: "Deine Freundin fragt, warum du beim Alten geblieben bist.", taskEn: "Your friend asks why you stuck with the old way.", de: "Ich hatte zu viel verloren, deshalb blieb ich beim Alten.", en: "I'd lost too much, so I stuck with the old way." },
    { task: "Rollenspiel: Ihr erzählt von einem Wiedersehen.", taskEn: "Role-play: you tell each other about a reunion.", de: "Bevor wir uns trafen, hatten wir eine Ewigkeit nicht gesprochen. Nachdem wir geredet hatten, war alles gut.", en: "Before we met, we hadn't spoken for ages. After we'd talked, everything was fine." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short story or diary entry (six to eight sentences) — a friendship, a trip, or a childhood memory — using at least five Plusquamperfekt sentences (a mix of haben and sein).',
    starters: ['Ich hatte schon …, bevor …', 'Nachdem ich … hatte, …', 'Als ich ankam, war …'],
    placeholder: 'Ich hatte gerade meine Ausbildung beendet, als ich meinen besten Freund kennenlernte …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich ___ schon gegessen, bevor ich ins Kino ging."',
      options: ['habe', 'hatte', 'war'],
      answer: 1,
      explain: 'Plusquamperfekt: hatte + Partizip II — the earlier of two past events, with haben (essen is not a movement verb).'
    },
    gap: {
      sentence: ['Er ', ' schon nach Hause gegangen, als ich ankam.'],
      gaps: [ { answer: 'war', accepts: ['war'] } ],
      explain: 'gehen is a movement verb — it takes war, not hatte, in Plusquamperfekt.'
    },
    match: {
      q: 'Match each verb type to its Plusquamperfekt auxiliary.',
      pairs: [
        { noun: 'arbeiten (kein Bewegungsverb)', art: 'hatte' },
        { noun: 'gehen (Bewegungsverb)', art: 'war' },
        { noun: 'einschlafen (Zustandswechsel)', art: 'war' },
        { noun: 'kochen (kein Bewegungsverb)', art: 'hatte' }
      ]
    },
    builder: {
      target: 'Build: "I had already found a new job, before I moved."',
      bank: ['Ich', 'hatte', 'schon', 'einen', 'neuen', 'Job', 'gefunden', ',', 'bevor', 'ich', 'umzog', '.'],
      answer: ['Ich', 'hatte', 'schon', 'einen', 'neuen', 'Job', 'gefunden', ',', 'bevor', 'ich', 'umzog', '.'],
      roles: { 'hatte': 'r-plusq', 'gefunden': 'r-plusq' }
    },
    perfektToPlusquamperfekt: {
      title: 'Transform: Perfekt → Plusquamperfekt',
      prompt: 'Rewrite as the earlier event: "Ich habe gegessen." (make it: before I went to the cinema)',
      answer: 'Ich hatte gegessen, bevor ich ins Kino ging.',
      explain: 'The eating happened before going to the cinema, so it takes Plusquamperfekt (hatte gegessen), while going to the cinema stays in Präteritum (ging).'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Nachdem ich gegessen habe, ging ich.',
      right: 'Nachdem ich gegessen hatte, ging ich.',
      explain: 'The nachdem-clause (the earlier event) needs Plusquamperfekt (hatte gegessen), not Perfekt.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Sie ___ schon nach Hause gegangen, als ich ankam."', options: ['hatte', 'war', 'habe'], answer: 1,
      explain: 'gehen is a movement verb — it takes war in Plusquamperfekt.' },
    { q: 'Complete: "Wir ___ die Arbeit schon beendet, bevor das Meeting begann."', options: ['waren', 'hatten', 'haben'], answer: 1,
      explain: 'beenden is not a movement verb — it takes hatten in Plusquamperfekt.' },
    { q: 'Which sentence correctly uses Plusquamperfekt with nachdem?', options: ['Nachdem ich gegessen habe, ging ich.', 'Nachdem ich gegessen hatte, ging ich.', 'Nachdem ich esse, ging ich.'], answer: 1,
      explain: 'The nachdem-clause (earlier event) needs Plusquamperfekt: hatte gegessen.' },
    { q: 'Which sentence contains an error?', options: ['Ich hatte gegessen, bevor ich ging.', 'Ich war gearbeitet, bevor ich schlief.', 'Er war eingeschlafen, als ich kam.'], answer: 1,
      explain: 'arbeiten is not a movement/change-of-state verb — it should be "Ich hatte gearbeitet."' },
    { q: 'Which timeline is correct?', options: ['Plusquamperfekt = earlier past, Perfekt/Präteritum = later past', 'Plusquamperfekt = later past, Perfekt = earlier past', 'Both describe the same moment'], answer: 0,
      explain: 'Plusquamperfekt always marks the EARLIER of two past events.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-plusq', html: 'Plusquamperfekt = hatte/war (conjugated) + Partizip II at the end — marking the EARLIER of two past events.' },
    { c: 'r-plusq', html: 'haben vs. sein follows the exact same rule as Perfekt: sein for movement/change-of-state verbs, haben for everything else.' },
    { c: 'r-plusq', html: 'nachdem, als, and bevor frequently pair with Plusquamperfekt — the nachdem-clause especially is almost always Plusquamperfekt.' }
  ],
  revisionTips: [
    'Whenever you narrate two past events, ask: which one happened FIRST? That one gets hatte/war + Partizip II.',
    'Practise the haben/sein choice — it\'s identical to Perfekt, so if you already know a verb\'s Perfekt auxiliary, you know its Plusquamperfekt auxiliary too.',
    'Watch nachdem-clauses especially closely: they are almost always in Plusquamperfekt, with the main clause in Perfekt or Präteritum.'
  ]
};

window.CHAPTER = CHAPTER;
