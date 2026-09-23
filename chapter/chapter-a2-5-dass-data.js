/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 5
   "Nebensatz mit dass"  (reporting thoughts, opinions, facts &
   feelings — dass sends the verb to the end). Teaches ONLY dass
   (no obwohl / ob / damit-as-conjunction / sodass / relative clauses).
   Vocabulary source: uploaded chapter-05 word list (~110 items;
   media/film + digital + school/apprenticeship theme).
   Recycles Ch.4 (weil word order), Ch.3 (Artikel), Ch.2 (Perfekt),
   Ch.1 (Name+s) and A1: Modalverben, Meinung, Akkusativ, Dativ.
   NOTE: content only — existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "der Komporativ - comporative" → der Komparativ (comparative)
   • "das Repair-Cafg" → das Repair-Café
   • "zulstimmen - to agree" → zustimmen
   • "das Kabel - cabel" → cable (EN spelling fixed)
   • "an sein - to" → an sein = to be on (device/light)
   • "die Aktion - action" kept as campaign/promotion (Aktion),
     distinct from der Actionfilm.
============================================================ */
const CHAPTER = {
  id: 'a2-5-dass',
  phase: 'A2 · Phase 1',
  number: 5,
  title: 'Nebensatz mit dass',
  titleEn: 'Subordinate Clauses with dass',
  description: 'The second half of the Nebensatz story. Where weil gives reasons, dass reports what you think, know, hope or feel: Ich glaube, dass Deutsch wichtig ist. The word order is exactly the same rule you just learned \u2014 the conjugated verb goes to the end \u2014 so this chapter builds directly on Chapter 4. Master seven everyday verbs (glauben, denken, meinen, wissen, hoffen, finden, sagen) and you can voice an opinion about anything.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 6, title: 'Modalverben im Pr\u00e4teritum', titleEn: 'Modal Verbs in the Past' , href: 'chapter-a2-6-modalverben-praeteritum.html' },

  prevChapter: { number: 4, title: 'Nebensatz mit weil', titleEn: 'Subordinate Clauses with weil', href: 'chapter-a2-4-weil.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'It\'s film-and-media week, and Marek has started a blog about German films that Frauke isn\'t sure she trusts. Every "I think…", "I hope…", "I know…" hides the same engine: the word dass, with the verb sliding to the end — just like weil last week.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear dass report opinions, facts and feelings'
    ],
    scene: 'Medienwoche im A2-Kurs \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानती हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)', why: 'glauben + dass: to believe that (this chapter).', ex: 'Ich glaube, dass das stimmt.', exEn: 'I believe that this is true.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass', why: 'dass sends the verb to the end of the clause (this chapter).', ex: 'Ich glaube, dass das stimmt.', exEn: 'I believe that this is true.' },
        { w: 'dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner' },
        { w: 'Blog', role: 'r-subject', en: 'blog', hi: 'ब्लॉग', pron: 'blok', type: 'Noun · masc.' },
        { w: 'gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I believe that this blog is good.', hi: 'Main maanti hoon ki yeh blog achha hai.' },
      { speaker: 'Marek', side: 'right', tokens: [
        { w: 'Wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Reaction' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'meine', role: 'r-verb', en: 'think', hi: 'सोचता हूँ', pron: 'MY-nuh', type: 'Verb · meinen (ich)', why: 'meinen + dass: to think that (this chapter).', ex: 'Ich meine, dass er nicht ehrlich ist.', exEn: 'I think that he is not honest.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'ehrlich', role: 'r-adjective', en: 'honest', hi: 'ईमानदार', pron: 'AIR-likh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Really? I think that he is not honest.', hi: 'Sach mein? Mera manna hai ki woh ईmaandaar nahi hai.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'sagst', role: 'r-verb', en: 'do you say', hi: 'कहते हो', pron: 'zahkst', type: 'Verb · sagen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '?', plain: true }
      ], en: 'Why do you say that?', hi: 'Tum yeh kyun kehte ho?' },
      { speaker: 'Marek', side: 'right', tokens: [
        { w: 'Weil', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'vyle', type: 'Conjunction · weil' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'IM-mer', type: 'Adverb' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Dinge', role: 'r-akkusativ', en: 'things', hi: 'बातें', pron: 'DING-uh', type: 'Noun · plural' },
        { w: 'schreibt', role: 'r-verb', en: 'writes', hi: 'लिखता है', pron: 'SHRYPT', type: 'Verb · schreiben (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hoffe', role: 'r-verb', en: 'hope', hi: 'आशा है', pron: 'HO-fuh', type: 'Verb · hoffen (ich)', why: 'hoffen + dass: to hope that (this chapter).', ex: 'Ich hoffe, dass du mir glaubst.', exEn: 'I hope that you believe me.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'glaubst', role: 'r-verb', en: 'believe', hi: 'मानती हो', pron: 'GLOWPST', type: 'Verb · glauben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Because he always only writes good things. I hope that you believe me.', hi: 'Kyunki woh hamesha sirf achhi baatein likhta hai. Mujhe umeed hai ki tum mujh par vishwas karogi.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase', why: 'recht haben = to be right (this chapter).', ex: 'Du hast recht.', exEn: 'You are right.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'checke', role: 'r-verb', en: 'will check', hi: 'जांचूंगी', pron: 'CHE-kuh', type: 'Verb · checken (ich)', why: 'checken = to check (this chapter).', ex: 'Ich checke das noch mal.', exEn: 'I will check that again.' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'noch', role: 'r-adverb', en: 'once', hi: 'फिर', pron: 'nokh', type: 'Adverb' },
        { w: 'mal', role: 'r-adverb', en: 'more', hi: 'से', pron: 'mahl', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Hmm. Maybe you are right. I will check that once more.', hi: 'Hmm. Shayad tum sahi ho. Main isse phir se jaanchungi.' },
      { speaker: 'Marek', side: 'right', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानता हूँ', pron: 'GLOW-buh', type: 'Verb · glauben (ich)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sicher', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'ZI-kher', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good idea! I believe that we will surely be sure then.', hi: 'Achha vichaar! Mera manna hai ki tab hum zaroor niश्chit hoyenge.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'machen', role: 'r-verb', en: 'let us do', hi: 'करते हैं', pron: 'MA-khen', type: 'Verb · machen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, let us do that together.', hi: 'Haan, yeh hum saath karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Last chapter, <span class="de r-weil">weil</span> gave reasons. This chapter, <span class="de r-dass">dass</span> reports what goes on in your head \u2014 opinions, knowledge, hopes, feelings. And the word-order rule is <strong>identical</strong>: after <span class="de r-dass">dass</span>, the conjugated verb slides to the <strong>end</strong> of the clause. Compare: <span class="de">Ich glaube das.</span> \u2192 <span class="de">Ich glaube, <span class="r-dass">dass</span> Deutsch wichtig <span class="r-verb">ist</span>.</span> A comma always sits before <span class="de r-dass">dass</span>. Seven everyday verbs open these clauses \u2014 <span class="de">glauben, denken, meinen, wissen, hoffen, finden, sagen</span> \u2014 and with them you can say what you think about films, news, family, plans, anything. Because it shares the weil rule, you already know 90% of it.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is the SUBORDINATE CLAUSE WITH dass (reporting opinions, facts, feelings). ONLY dass \u2014 do not suggest ob, obwohl, damit, sodass or relative clauses. ' +
    'The learner wrote opinions / dass-sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- After dass, the CONJUGATED verb goes to the very END of that clause: "Ich glaube, dass Deutsch wichtig ist." (ist last), "Ich hoffe, dass es nicht zu lang wird." (wird last).\n' +
    '- A comma always precedes dass.\n' +
    '- With a modal or in the Perfekt, the conjugated verb is truly last, AFTER the infinitive/participle: "\u2026, dass ich schreiben muss." / "\u2026, dass sie gekommen ist."\n' +
    '- The opening verbs are glauben, denken, meinen, wissen, hoffen, finden, sagen (+ sicher sein). The main clause keeps normal order: "Ich denke, dass \u2026".\n' +
    '- Do NOT confuse dass (conjunction, "that") with das (article/pronoun, "the/that/which"). "Ich glaube, dass \u2026" needs double-s dass.\n' +
    '- Do not rewrite dass as weil; do not move the verb back to position 2 inside the dass-clause. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>dass check:</b> one sentence on whether the verb landed at the end and dass (not das) was used.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You report opinions like a pro \u2014 verb at the end every time. Next: talk about the past with <span class="de">Modalverben im Pr\u00e4teritum</span>.',
    mid: 'Good. Watch the dass vs das trap once more, then continue.',
    low: 'Worth another pass \u2014 same rule as weil: after dass, the conjugated verb goes LAST. And it\u2019s dass (double s), not das. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'glaube', role: 'r-verb' },
    { w: 'dass', role: 'r-dass' }, { w: 'Deutsch', role: 'r-subject' },
    { w: 'wichtig', role: 'r-adjective' }, { w: 'ist', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See that dass follows the exact weil rule \u2014 verb to the end.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Media week \u2014 everyone reports an opinion with dass.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the media/school words: der Kanal, das Feedback, der Steckbrief, das Gymnasium, dass.' },
    { id: 'grammar',    label: 'dass',       tag: 'core',
      objective: 'Master the seven opening verbs, verb-final order, the comma, and dass vs das.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Maxs film-blog profile \u2014 dass after dass.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each opinion in a consultation about school and apprenticeships.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you think, hope and know with Ich glaube/denke/hoffe/wei\u00df, dass \u2026' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Complete and build your own dass-sentences.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb-final order, dass vs das and clause-joining with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s media, film and school words \u2014 der Kanal, der Steckbrief, das Gymnasium, die Lehre \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'dass word-order drills, dass vs das, opinion-building, and a write-your-own-review task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The dass word order, the seven opening verbs, the comma, dass vs das, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich glaube, dass \u2026', text: 'Report an opinion with dass' },
    { de: 'Ich wei\u00df, dass \u2026', text: 'State a fact you know' },
    { de: 'Ich hoffe, dass \u2026', text: 'Express a hope or wish' },
    { de: '\u2026, dass Deutsch wichtig ist.', text: 'Send the conjugated verb to the end' },
    { de: 'dass \u2260 das', text: 'Tell the conjunction from the article' }
  ],

  // ---------- Vocabulary (~110 items) ----------
  vocab: [
    // ===== The keyword & opinion verbs =====
    { de: 'dass', pos: 'conjunction', en: 'that (sends verb to the end)', hi: 'कि', ex: 'Ich glaube, dass Deutsch wichtig ist.', exEn: 'I believe that German is important.' },
    { de: 'glauben', pos: 'verb', en: 'to believe, to think', hi: 'मानना', ex: 'Ich glaube, dass Filme gute Lehrer sind.', exEn: 'I believe that films are good teachers.', conj: { praesens: 'glaubt', praeteritum: 'glaubte', perfekt: 'hat geglaubt' } },
    { de: 'meinen', pos: 'verb', en: 'to mean, to be of the opinion', hi: 'राय रखना', ex: 'Ich meine, dass wir teilen sollten.', exEn: 'I reckon that we should share.', conj: { praesens: 'meint', praeteritum: 'meinte', perfekt: 'hat gemeint' } },
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', ex: 'Ich hoffe, dass es nicht zu lang wird.', exEn: 'I hope that it won\u2019t get too long.', conj: { praesens: 'hofft', praeteritum: 'hoffte', perfekt: 'hat gehofft' } },
    { de: 'zustimmen', pos: 'verb', en: 'to agree (separable)', hi: 'सहमत होना', ex: 'Ich stimme dir zu, dass Feedback wichtig ist.', exEn: 'I agree with you that feedback is important.', conj: { praesens: 'stimmt zu', praeteritum: 'stimmte zu', perfekt: 'hat zugestimmt' } },
    // ===== Blogging / digital / media =====
    { de: 'bloggen', pos: 'verb', en: 'to blog', hi: 'ब्लॉग लिखना', ex: 'Max bloggt \u00fcber deutsche Filme.', exEn: 'Max blogs about German films.', conj: { praesens: 'bloggt', praeteritum: 'bloggte', perfekt: 'hat gebloggt' } },
    { de: 'hochladen', pos: 'verb', en: 'to upload (separable)', hi: 'अपलोड करना', ex: 'Ich lade jeden Tag ein Video hoch.', exEn: 'I upload a video every day.', conj: { praesens: 'l\u00e4dt hoch', praeteritum: 'lud hoch', perfekt: 'hat hochgeladen' } },
    { de: 'runterladen', pos: 'verb', en: 'to download (separable)', hi: 'डाउनलोड करना', ex: 'Ich lade das E-Book runter.', exEn: 'I download the e-book.', conj: { praesens: 'l\u00e4dt runter', praeteritum: 'lud runter', perfekt: 'hat runtergeladen' } },
    { de: 'l\u00f6schen', pos: 'verb', en: 'to delete', hi: 'हटाना', ex: 'Ich l\u00f6sche den dummen Kommentar.', exEn: 'I delete the stupid comment.', conj: { praesens: 'l\u00f6scht', praeteritum: 'l\u00f6schte', perfekt: 'hat gel\u00f6scht' } },
    { de: 'teilen', pos: 'verb', en: 'to share', hi: 'साझा करना', ex: 'Wir teilen unsere Texte im Forum.', exEn: 'We share our texts in the forum.', conj: { praesens: 'teilt', praeteritum: 'teilte', perfekt: 'hat geteilt' } },
    { de: 'checken', pos: 'verb', en: 'to check', hi: 'जाँचना', ex: 'Ich checke die Kommentare am Morgen.', exEn: 'I check the comments in the morning.', conj: { praesens: 'checkt', praeteritum: 'checkte', perfekt: 'hat gecheckt' } },
    { de: 'bearbeiten', pos: 'verb', en: 'to edit', hi: 'संपादित करना', ex: 'Ich bearbeite das Video am Tablet.', exEn: 'I edit the video on the tablet.', conj: { praesens: 'bearbeitet', praeteritum: 'bearbeitete', perfekt: 'hat bearbeitet' } },
    { de: 'weitergeben', pos: 'verb', en: 'to pass on (separable)', hi: 'आगे देना', ex: 'Ich gebe den Link an Anna weiter.', exEn: 'I pass the link on to Anna.', conj: { praesens: 'gibt weiter', praeteritum: 'gab weiter', perfekt: 'hat weitergegeben' } },
    { de: 'Kanal', art: 'der', gender: 'm', plural: 'Kan\u00e4le', pos: 'noun', en: 'channel', hi: 'चैनल', ex: 'Ich denke, dass mein Kanal wichtig ist.', exEn: 'I think my channel is important.' },
    { de: 'Like', art: 'der', gender: 'm', plural: 'Likes', pos: 'noun', en: 'like', hi: 'लाइक', ex: 'Ein Like ist sch\u00f6n, aber ein Kommentar ist besser.', exEn: 'A like is nice, but a comment is better.' },
    { de: 'Link', art: 'der', gender: 'm', plural: 'Links', pos: 'noun', en: 'link', hi: 'लिंक', ex: 'Ich gebe dir den Link weiter.', exEn: 'I\u2019ll pass the link on to you.' },
    { de: 'Feedback', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'feedback', hi: 'प्रतिक्रिया', ex: 'Ich sage immer, dass Feedback wichtig ist.', exEn: 'I always say that feedback is important.' },
    { de: 'Forum', art: 'das', gender: 'n', plural: 'Foren', pos: 'noun', en: 'forum, (discussion) panel', hi: 'मंच', ex: 'Im Forum bleibt man h\u00f6flich.', exEn: 'In the forum one stays polite.' },
    { de: 'Blog', art: 'der', gender: 'm', plural: 'Blogs', pos: 'noun', en: 'blog', hi: 'ब्लॉग', ex: 'Sein Blog ist ziemlich witzig.', exEn: 'His blog is quite funny.' },
    { de: 'E-Book', art: 'das', gender: 'n', plural: 'E-Books', pos: 'noun', en: 'e-book', hi: 'ई-बुक', ex: 'Ich lade ein E-Book runter.', exEn: 'I download an e-book.' },
    { de: 'Tablet', art: 'das', gender: 'n', plural: 'Tablets', pos: 'noun', en: 'tablet', hi: 'टैबलेट', ex: 'Ich lese den Krimi auf dem Tablet.', exEn: 'I read the crime novel on the tablet.' },
    { de: 'Smartwatch', art: 'die', gender: 'f', plural: 'Smartwatches', pos: 'noun', en: 'smartwatch', hi: 'स्मार्टवॉच', ex: 'Meine Smartwatch checkt die Zeit.', exEn: 'My smartwatch checks the time.' },
    { de: 'Kabel', art: 'das', gender: 'n', plural: 'Kabel', pos: 'noun', en: 'cable', hi: 'तार, केबल', ex: 'Das Kabel ist kaputt, ich brauche ein neues.', exEn: 'The cable is broken; I need a new one.' },
    { de: 'Band', art: 'das', gender: 'n', plural: 'B\u00e4nder', pos: 'noun', en: 'ribbon, tape', hi: 'रिबन, फ़ीता', ex: 'Das Band am Geschenk ist rot.', exEn: 'The ribbon on the gift is red.' },
    { de: 'Trick', art: 'der', gender: 'm', plural: 'Tricks', pos: 'noun', en: 'trick', hi: 'तरकीब', ex: 'Seht ihr den Trick mit dem Verb?', exEn: 'Do you see the trick with the verb?' },
    { de: 'Aktion', art: 'die', gender: 'f', plural: 'Aktionen', pos: 'noun', en: 'campaign, promotion, action', hi: 'अभियान', ex: 'Die Aktion im Forum war ein Erfolg.', exEn: 'The campaign in the forum was a success.' },
    // ===== Film / stories =====
    { de: 'Actionfilm', art: 'der', gender: 'm', plural: 'Actionfilme', pos: 'noun', en: 'action film', hi: 'एक्शन फ़िल्म', ex: 'Ich finde, dass der Actionfilm zu laut ist.', exEn: 'I think the action film is too loud.' },
    { de: 'Krimi', art: 'der', gender: 'm', plural: 'Krimis', pos: 'noun', en: 'crime novel/film', hi: 'अपराध कथा', ex: 'Der Krimi ist spannend bis zur Mitternacht.', exEn: 'The crime story is exciting until midnight.' },
    { de: 'Thriller', art: 'der', gender: 'm', plural: 'Thriller', pos: 'noun', en: 'thriller', hi: 'थ्रिलर', ex: 'Ich glaube, dass der Thriller furchtbar spannend ist.', exEn: 'I think the thriller is terribly exciting.' },
    { de: 'Stummfilm', art: 'der', gender: 'm', plural: 'Stummfilme', pos: 'noun', en: 'silent film', hi: 'मूक फ़िल्म', ex: 'Der Stummfilm war ziemlich witzig.', exEn: 'The silent film was quite funny.' },
    { de: 'Hauptperson', art: 'die', gender: 'f', plural: 'Hauptpersonen', pos: 'noun', en: 'main character, protagonist', hi: 'मुख्य पात्र', ex: 'Die Hauptperson ist am Ende tot.', exEn: 'The main character is dead at the end.' },
    { de: 'Filmbeschreibung', art: 'die', gender: 'f', plural: 'Filmbeschreibungen', pos: 'noun', en: 'film description', hi: 'फ़िल्म विवरण', ex: 'Die Filmbeschreibung ist kurz und klar.', exEn: 'The film description is short and clear.' },
    { de: 'Shooting', art: 'das', gender: 'n', plural: 'Shootings', pos: 'noun', en: '(photo/film) shooting', hi: 'शूटिंग', ex: 'Das Shooting im Wald war spannend.', exEn: 'The shoot in the forest was exciting.' },
    // ===== School types & school life =====
    { de: 'Gymnasium', art: 'das', gender: 'n', plural: 'Gymnasien', pos: 'noun', en: 'grammar school (academic)', hi: 'अकादमिक स्कूल', ex: 'Anna glaubt, dass das Gymnasium schwer ist.', exEn: 'Anna thinks that grammar school is hard.' },
    { de: 'Realschule', art: 'die', gender: 'f', plural: 'Realschulen', pos: 'noun', en: 'secondary modern school', hi: 'माध्यमिक स्कूल', ex: 'Nach der Realschule beginnt die Lehre.', exEn: 'After secondary school the apprenticeship begins.' },
    { de: 'Fachoberschule', art: 'die', gender: 'f', plural: 'Fachoberschulen', pos: 'noun', en: 'higher vocational school', hi: 'व्यावसायिक स्कूल', ex: 'Die Fachoberschule bietet viele Kurse an.', exEn: 'The vocational school offers many courses.' },
    { de: 'Zeugnis', art: 'das', gender: 'n', plural: 'Zeugnisse', pos: 'noun', en: 'report card, certificate', hi: 'रिपोर्ट कार्ड', ex: 'Ich hoffe, dass mein Zeugnis gut ist.', exEn: 'I hope that my report card is good.' },
    { de: 'Stundenplan', art: 'der', gender: 'm', plural: 'Stundenpl\u00e4ne', pos: 'noun', en: 'timetable, schedule', hi: 'समय-सारणी', ex: 'Der Stundenplan steht auf der Schulplattform.', exEn: 'The timetable is on the school platform.' },
    { de: 'Schulkleidung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'school clothing/uniform', hi: 'स्कूल पोशाक', ex: 'In Deutschland gibt es meist keine Schulkleidung.', exEn: 'In Germany there\u2019s usually no school uniform.' },
    { de: 'Sommerferien', art: 'die', gender: 'pl', plural: 'Sommerferien', pos: 'noun', en: 'summer holidays', hi: 'गर्मी की छुट्टियाँ', ex: 'Ich freue mich, dass die Sommerferien bald kommen.', exEn: 'I\u2019m glad that the summer holidays are coming soon.' },
    { de: 'Sprechstunde', art: 'die', gender: 'f', plural: 'Sprechstunden', pos: 'noun', en: 'office/consultation hours', hi: 'परामर्श का समय', ex: 'Die Sprechstunde der Kursleiterin ist am Montag.', exEn: 'The course director\u2019s office hours are on Monday.' },
    { de: 'Einf\u00fchrung', art: 'die', gender: 'f', plural: 'Einf\u00fchrungen', pos: 'noun', en: 'introduction', hi: 'परिचय', ex: 'Die Einf\u00fchrung in das Thema war kurz.', exEn: 'The introduction to the topic was short.' },
    { de: 'Steckbrief', art: 'der', gender: 'm', plural: 'Steckbriefe', pos: 'noun', en: 'profile, fact sheet', hi: 'परिचय-पत्र', ex: 'Ich wei\u00df, dass ich einen Steckbrief schreiben muss.', exEn: 'I know that I have to write a profile.' },
    // ===== School subjects & fields =====
    { de: 'Mathe', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'maths (informal)', hi: 'गणित', ex: 'Ich glaube, dass Mathe nicht dumm ist.', exEn: 'I think that maths isn\u2019t stupid.' },
    { de: 'Geografie', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'geography', hi: 'भूगोल', ex: 'In Geografie lernen wir \u00fcber L\u00e4nder.', exEn: 'In geography we learn about countries.' },
    { de: 'Wirtschaft', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'economics, economy', hi: 'अर्थशास्त्र', ex: 'Wirtschaft finde ich ziemlich spannend.', exEn: 'I find economics quite exciting.' },
    { de: 'Jura', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'law (study)', hi: 'क़ानून', ex: 'Sie meint, dass Jura schwer ist.', exEn: 'She reckons that law is hard.' },
    { de: 'Sprachwissenschaft', art: 'die', gender: 'f', plural: 'Sprachwissenschaften', pos: 'noun', en: 'linguistics', hi: 'भाषा विज्ञान', ex: 'Ich studiere Sprachwissenschaft.', exEn: 'I study linguistics.' },
    { de: 'Komparativ', art: 'der', gender: 'm', plural: 'Komparative', pos: 'noun', en: 'comparative (gr\u00f6\u00dfer, besser)', hi: 'तुलनात्मक रूप', ex: 'Besser ist der Komparativ von gut.', exEn: '"Besser" is the comparative of "gut".' },
    { de: 'Anfangsbuchstabe', art: 'der', gender: 'm', plural: 'Anfangsbuchstaben', pos: 'noun', en: 'first letter, initial', hi: 'पहला अक्षर', ex: 'Der Anfangsbuchstabe von "dass" ist ein d.', exEn: 'The first letter of "dass" is a d.' },
    { de: 'Formulierung', art: 'die', gender: 'f', plural: 'Formulierungen', pos: 'noun', en: 'phrasing, wording', hi: 'शब्द-रचना', ex: 'Die Formulierung im Steckbrief ist wichtig.', exEn: 'The phrasing in the profile is important.' },
    // ===== Apprenticeship / study roles =====
    { de: 'Lehre', art: 'die', gender: 'f', plural: 'Lehren', pos: 'noun', en: 'apprenticeship, training', hi: 'प्रशिक्षण', ex: 'Er hofft, dass die Lehre bald beginnt.', exEn: 'He hopes that the apprenticeship starts soon.' },
    { de: 'Auszubildende', art: 'der/die', gender: 'mf', plural: 'Auszubildenden', pos: 'noun', en: 'apprentice, trainee', hi: 'प्रशिक्षु', ex: 'Der Auszubildende begleitet den Chef.', exEn: 'The apprentice accompanies the boss.' },
    { de: 'Studierende', art: 'der/die', gender: 'mf', plural: 'Studierenden', pos: 'noun', en: 'student (uni)', hi: 'विद्यार्थी', ex: 'Die Studierende geht in die Vorlesung.', exEn: 'The student goes to the lecture.' },
    { de: 'Lehrende', art: 'der/die', gender: 'mf', plural: 'Lehrenden', pos: 'noun', en: 'teacher, instructor', hi: 'शिक्षक', ex: 'Die Lehrende gibt gutes Feedback.', exEn: 'The instructor gives good feedback.' },
    { de: 'Pr\u00fcfende', art: 'der/die', gender: 'mf', plural: 'Pr\u00fcfenden', pos: 'noun', en: 'examiner', hi: 'परीक्षक', ex: 'Der Pr\u00fcfende stellt eine m\u00fcndliche Frage.', exEn: 'The examiner asks an oral question.' },
    { de: 'Kursleiterin', art: 'die', gender: 'f', plural: 'Kursleiterinnen', pos: 'noun', en: 'course director (f.)', hi: 'कोर्स निदेशक', ex: 'Wisst ihr, dass unsere Kursleiterin aus Tschechien kommt?', exEn: 'Do you know that our course director is from the Czech Republic?' },
    { de: 'Lernhelferin', art: 'die', gender: 'f', plural: 'Lernhelferinnen', pos: 'noun', en: 'learning tutor (f.)', hi: 'सीखने में सहायक', ex: 'Die Lernhelferin begleitet die Kinder.', exEn: 'The tutor accompanies the children.' },
    { de: 'Englischlehrerin', art: 'die', gender: 'f', plural: 'Englischlehrerinnen', pos: 'noun', en: 'English teacher (f.)', hi: 'अंग्रेज़ी शिक्षिका', ex: 'Meine Englischlehrerin spricht fl\u00fcssig Deutsch.', exEn: 'My English teacher speaks fluent German.' },
    { de: 'Grafikerin', art: 'die', gender: 'f', plural: 'Grafikerinnen', pos: 'noun', en: 'graphic designer (f.)', hi: 'ग्राफ़िक डिज़ाइनर', ex: 'Die Grafikerin bearbeitet das Bild.', exEn: 'The graphic designer edits the picture.' },
    { de: 'Geb\u00e4rdendolmetscherin', art: 'die', gender: 'f', plural: 'Geb\u00e4rdendolmetscherinnen', pos: 'noun', en: 'sign-language interpreter (f.)', hi: 'सांकेतिक भाषा दुभाषिया', ex: 'Die Geb\u00e4rdendolmetscherin begleitet die Seniorin.', exEn: 'The sign-language interpreter accompanies the senior.' },
    { de: 'Au-pair', art: 'das', gender: 'n', plural: 'Au-pairs', pos: 'noun', en: 'au pair', hi: 'ऑ-पेयर', ex: 'Als Au-pair jobbt sie in einer Familie.', exEn: 'As an au pair she temps in a family.' },
    // ===== Work / projects =====
    { de: 'Auftrag', art: 'der', gender: 'm', plural: 'Auftr\u00e4ge', pos: 'noun', en: 'order, commission, assignment', hi: 'काम, आदेश', ex: 'Die Grafikerin hat einen neuen Auftrag.', exEn: 'The graphic designer has a new commission.' },
    { de: 'F\u00f6rderung', art: 'die', gender: 'f', plural: 'F\u00f6rderungen', pos: 'noun', en: 'funding, support', hi: 'वित्तीय सहायता', ex: 'Das Projekt bekommt eine F\u00f6rderung.', exEn: 'The project gets funding.' },
    { de: 'Repair-Caf\u00e9', art: 'das', gender: 'n', plural: 'Repair-Caf\u00e9s', pos: 'noun', en: 'repair caf\u00e9', hi: 'रिपेयर कैफ़े', ex: 'Im Repair-Caf\u00e9 reparieren wir alte Kabel.', exEn: 'At the repair caf\u00e9 we fix old cables.' },
    { de: 'begleiten', pos: 'verb', en: 'to accompany', hi: 'साथ जाना', ex: 'Die Lernhelferin begleitet die Seniorin.', exEn: 'The tutor accompanies the senior.', conj: { praesens: 'begleitet', praeteritum: 'begleitete', perfekt: 'hat begleitet' } },
    { de: 'bieten', pos: 'verb', en: 'to offer', hi: 'देना, पेश करना', ex: 'Die Schule bietet viele Kurse.', exEn: 'The school offers many courses.', conj: { praesens: 'bietet', praeteritum: 'bot', perfekt: 'hat geboten' } },
    { de: 'ansprechen', pos: 'verb', en: 'to address, to speak to (separable)', hi: 'बात करना', ex: 'Ich spreche die Kursleiterin an.', exEn: 'I speak to the course director.', conj: { praesens: 'spricht an', praeteritum: 'sprach an', perfekt: 'hat angesprochen' } },
    { de: 'einplanen', pos: 'verb', en: 'to plan in, to include (separable)', hi: 'योजना में शामिल करना', ex: 'Ich plane genug Zeit f\u00fcr die Vorbereitung ein.', exEn: 'I plan in enough time for preparation.', conj: { praesens: 'plant ein', praeteritum: 'plante ein', perfekt: 'hat eingeplant' } },
    { de: 'gr\u00fcnden', pos: 'verb', en: 'to found, to set up', hi: 'स्थापित करना', ex: 'Wir gr\u00fcnden ein Forum f\u00fcr Filme.', exEn: 'We set up a forum for films.', conj: { praesens: 'gr\u00fcndet', praeteritum: 'gr\u00fcndete', perfekt: 'hat gegr\u00fcndet' } },
    { de: 'jobben', pos: 'verb', en: 'to do a casual job, to temp', hi: 'अस्थायी काम करना', ex: 'Ich jobbe tags\u00fcber in einem Caf\u00e9.', exEn: 'I temp during the day in a caf\u00e9.', conj: { praesens: 'jobbt', praeteritum: 'jobbte', perfekt: 'hat gejobbt' } },
    { de: 'gewinnen', pos: 'verb', en: 'to win', hi: 'जीतना', ex: 'Ich hoffe, dass unser Blog einen Preis gewinnt.', exEn: 'I hope our blog wins a prize.', conj: { praesens: 'gewinnt', praeteritum: 'gewann', perfekt: 'hat gewonnen' } },
    { de: 'kommunizieren', pos: 'verb', en: 'to communicate', hi: 'संवाद करना', ex: 'Wir kommunizieren \u00fcber das Forum.', exEn: 'We communicate through the forum.', conj: { praesens: 'kommuniziert', praeteritum: 'kommunizierte', perfekt: 'hat kommuniziert' } },
    { de: 'rasen', pos: 'verb', en: 'to race, to speed', hi: 'तेज़ भागना', ex: 'Im Actionfilm rasen die Autos.', exEn: 'In the action film the cars race.', conj: { praesens: 'rast', praeteritum: 'raste', perfekt: 'ist gerast' } },
    { de: 'existieren', pos: 'verb', en: 'to exist', hi: 'अस्तित्व में होना', ex: 'Ich glaube, dass gute Ideen \u00fcberall existieren.', exEn: 'I believe that good ideas exist everywhere.', conj: { praesens: 'existiert', praeteritum: 'existierte', perfekt: 'hat existiert' } },
    { de: '\u00fcberraschen', pos: 'verb', en: 'to surprise', hi: 'चौंकाना', ex: 'Das \u00dcberraschen mit einem Kommentar ist sch\u00f6n.', exEn: 'Surprising someone with a comment is nice.', conj: { praesens: '\u00fcberrascht', praeteritum: '\u00fcberraschte', perfekt: 'hat \u00fcberrascht' } },
    { de: '\u00fcberrascht sein', pos: 'phrase', en: 'to be surprised', hi: 'हैरान होना', ex: 'Ich bin \u00fcberrascht, dass sie aus Tschechien kommt.', exEn: 'I\u2019m surprised that she\u2019s from the Czech Republic.' },
    { de: 'weiterwissen', pos: 'verb', en: 'to know how to go on (separable)', hi: 'आगे का पता होना', ex: 'Ich frage die Lehrende, wenn ich nicht weiterwei\u00df.', exEn: 'I ask the instructor when I don\u2019t know how to go on.', conj: { praesens: 'wei\u00df weiter', praeteritum: 'wusste weiter', perfekt: 'hat weitergewusst' } },
    // ===== People / places / life =====
    { de: 'Seniorin', art: 'die', gender: 'f', plural: 'Seniorinnen', pos: 'noun', en: 'senior, elderly lady', hi: 'बुज़ुर्ग महिला', ex: 'Die Seniorin bloggt \u00fcber ihre Kindheit.', exEn: 'The senior lady blogs about her childhood.' },
    { de: 'Zuh\u00f6rerin', art: 'die', gender: 'f', plural: 'Zuh\u00f6rerinnen', pos: 'noun', en: 'listener, audience member (f.)', hi: 'श्रोता', ex: 'Eine Zuh\u00f6rerin stellt eine Frage.', exEn: 'A listener asks a question.' },
    { de: 'Gespr\u00e4chspartner', art: 'der', gender: 'm', plural: 'Gespr\u00e4chspartner', pos: 'noun', en: 'conversation partner, interlocutor', hi: 'वार्ताकार', ex: 'Mein Gespr\u00e4chspartner spricht fl\u00fcssig.', exEn: 'My conversation partner speaks fluently.' },
    { de: 'Kindheit', art: 'die', gender: 'f', plural: 'Kindheiten', pos: 'noun', en: 'childhood', hi: 'बचपन', ex: 'Die Seniorin erz\u00e4hlt von ihrer Kindheit.', exEn: 'The senior lady talks about her childhood.' },
    { de: 'Weltreise', art: 'die', gender: 'f', plural: 'Weltreisen', pos: 'noun', en: 'trip around the world', hi: 'विश्व यात्रा', ex: 'Ich hoffe, dass ich eine Weltreise mache.', exEn: 'I hope that I\u2019ll take a trip around the world.' },
    { de: 'Wald', art: 'der', gender: 'm', plural: 'W\u00e4lder', pos: 'noun', en: 'forest', hi: 'जंगल', ex: 'Das Shooting war im Wald.', exEn: 'The shoot was in the forest.' },
    { de: 'Phase', art: 'die', gender: 'f', plural: 'Phasen', pos: 'noun', en: 'phase, stage', hi: 'चरण', ex: 'Die erste Phase der Lehre ist leicht.', exEn: 'The first phase of the apprenticeship is easy.' },
    { de: 'Runde', art: 'die', gender: 'f', plural: 'Runden', pos: 'noun', en: 'round', hi: 'दौर', ex: 'In der letzten Runde gewinnt sie.', exEn: 'In the last round she wins.' },
    { de: 'Sorge', art: 'die', gender: 'f', plural: 'Sorgen', pos: 'noun', en: 'worry', hi: 'चिंता', ex: 'Ich hoffe, dass du keine Sorge hast.', exEn: 'I hope that you have no worries.' },
    { de: 'Erholung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'rest, recovery', hi: 'आराम', ex: 'Die Sommerferien sind gut f\u00fcr die Erholung.', exEn: 'The summer holidays are good for rest.' },
    { de: 'Mitternacht', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'midnight', hi: 'आधी रात', ex: 'Der Thriller l\u00e4uft bis Mitternacht.', exEn: 'The thriller runs until midnight.' },
    { de: 'Tschechien', gender: 'n', pos: 'noun', en: 'Czech Republic', hi: 'चेक गणराज्य', ex: 'Unsere Kursleiterin kommt aus Tschechien.', exEn: 'Our course director is from the Czech Republic.' },
    // ===== Adjectives / adverbs / small words =====
    { de: 'dumm', pos: 'adjective', en: 'stupid, silly', hi: 'बेवकूफ़', ex: 'Ein dummer Kommentar ist peinlich.', exEn: 'A stupid comment is embarrassing.' },
    { de: 'intelligent', pos: 'adjective', en: 'intelligent', hi: 'बुद्धिमान', ex: 'Ich finde, dass die Hauptperson intelligent ist.', exEn: 'I think the main character is intelligent.' },
    { de: 'peinlich', pos: 'adjective', en: 'embarrassing', hi: 'शर्मनाक', ex: 'Das war wirklich peinlich.', exEn: 'That was really embarrassing.' },
    { de: 'furchtbar', pos: 'adjective', en: 'terrible; terribly', hi: 'भयानक', ex: 'Der Actionfilm war furchtbar laut.', exEn: 'The action film was terribly loud.' },
    { de: 'witzig', pos: 'adjective', en: 'funny', hi: 'मज़ेदार', ex: 'Der Stummfilm ist ziemlich witzig.', exEn: 'The silent film is quite funny.' },
    { de: 'prima', pos: 'adjective', en: 'great, fine', hi: 'बढ़िया', ex: 'Prima, dass du kommst!', exEn: 'Great that you\u2019re coming!' },
    { de: 'real', pos: 'adjective', en: 'real', hi: 'वास्तविक', ex: 'Die Geschichte ist fast real.', exEn: 'The story is almost real.' },
    { de: 'tot', pos: 'adjective', en: 'dead', hi: 'मृत', ex: 'Die Hauptperson ist am Ende tot.', exEn: 'The main character is dead at the end.' },
    { de: 'fett', pos: 'adjective', en: 'fat; bold (type)', hi: 'मोटा', ex: 'Der Anfangsbuchstabe ist fett gedruckt.', exEn: 'The first letter is printed in bold.' },
    { de: 'fl\u00fcssig', pos: 'adjective', en: 'fluent; liquid', hi: 'धाराप्रवाह; तरल', ex: 'Mein Gespr\u00e4chspartner spricht fl\u00fcssig Deutsch.', exEn: 'My conversation partner speaks fluent German.' },
    { de: 'm\u00fcndlich', pos: 'adjective', en: 'oral, spoken', hi: 'मौखिक', ex: 'Die m\u00fcndliche Pr\u00fcfung ist am Freitag.', exEn: 'The oral exam is on Friday.' },
    { de: 'sozial', pos: 'adjective', en: 'social', hi: 'सामाजिक', ex: 'Soziale Berufe gefallen mir.', exEn: 'I like social professions.' },
    { de: 'ziemlich', pos: 'adverb', en: 'quite, rather', hi: 'काफ़ी', ex: 'Der Film war ziemlich spannend.', exEn: 'The film was quite exciting.' },
    { de: 'genauso', pos: 'adverb', en: 'just as, exactly the same', hi: 'बिल्कुल वैसे ही', ex: 'dass funktioniert genauso wie weil.', exEn: 'dass works exactly like weil.' },
    { de: 'unbedingt', pos: 'adverb', en: 'absolutely, definitely', hi: 'ज़रूर', ex: 'Ihr solltet unbedingt \u00fcben.', exEn: 'You should definitely practise.' },
    { de: 'wahrscheinlich', pos: 'adverb', en: 'probably', hi: 'शायद', ex: 'Wahrscheinlich kommt sie sp\u00e4ter.', exEn: 'She\u2019s probably coming later.' },
    { de: '\u00fcberhaupt', pos: 'adverb', en: 'at all', hi: 'बिल्कुल भी', ex: 'Das ist \u00fcberhaupt nicht dumm.', exEn: 'That\u2019s not stupid at all.' },
    { de: 'voneinander', pos: 'adverb', en: 'from one another', hi: 'एक-दूसरे से', ex: 'Wir lernen voneinander.', exEn: 'We learn from each other.' },
    { de: 'tags\u00fcber', pos: 'adverb', en: 'during the day', hi: 'दिन में', ex: 'Tags\u00fcber jobbe ich, abends blogge ich.', exEn: 'During the day I temp, in the evening I blog.' },
    { de: 'erst mal', pos: 'phrase', en: 'first (of all)', hi: 'सबसे पहले', ex: 'Erst mal checke ich die Kommentare.', exEn: 'First I check the comments.' },
    { de: 'zuletzt', pos: 'adverb', en: 'lastly, last time', hi: 'आख़िर में', ex: 'Zuletzt teile ich den Link.', exEn: 'Lastly I share the link.' },
    { de: 'weiter', pos: 'adverb', en: 'further, on', hi: 'आगे', ex: 'Wir machen weiter mit dem Steckbrief.', exEn: 'We carry on with the profile.' },
    { de: 'paar', pos: 'determiner', en: 'a couple, a few (ein paar)', hi: 'कुछ', ex: 'Ich schreibe ein paar S\u00e4tze mit dass.', exEn: 'I write a couple of sentences with dass.' },
    { de: 'damit', pos: 'adverb', en: 'with it / that', hi: 'उसके साथ', ex: 'Ich habe ein Tablet und arbeite damit.', exEn: 'I have a tablet and work with it.' },
    { de: 'an sein', pos: 'phrase', en: 'to be on (device/light)', hi: 'चालू होना', ex: 'Die Smartwatch ist immer an.', exEn: 'The smartwatch is always on.' },
    { de: 'gehen um', pos: 'phrase', en: 'to be about', hi: 'के बारे में होना', ex: 'Heute geht es um Medien.', exEn: 'Today it\u2019s about media.' }
  ],

  // ---------- dass (rule cards → accordion) ----------
  grammar: [
    {
      title: 'dass follows the weil rule \u2014 verb to the end',
      goldenRule: 'Same move as <b>weil</b>: comma, then <b>dass</b>, then the verb at the end.',
      memoryTrick: 'Agar <b>weil</b> aata hai to <b>dass</b> already aa gaya \u2014 word order bilkul same hai, sirf matlab badla hai.',
      body: [
        'You already know this word order from <span class="de r-weil">weil</span>. Add <span class="de r-dass">dass</span> to report a thought, and the clause becomes a <strong>Nebensatz</strong>: the <strong>conjugated verb goes to the end</strong>. A comma always comes before dass.'
      ],
      table: {
        head: ['Main clause', '+ dass-clause (verb LAST)'],
        rows: [
          ['<span class="de">Ich glaube das.</span>', '<span class="de">Ich glaube, <span class="r-dass">dass</span> Deutsch wichtig <span class="r-verb">ist</span>.</span>'],
          ['<span class="de">Ich wei\u00df es.</span>', '<span class="de">Ich wei\u00df, <span class="r-dass">dass</span> ich einen Steckbrief schreiben <span class="r-verb">muss</span>.</span>'],
          ['<span class="de">Ich hoffe es.</span>', '<span class="de">Ich hoffe, <span class="r-dass">dass</span> es nicht zu lang <span class="r-verb">wird</span>.</span>'],
          ['<span class="de">Ich finde das.</span>', '<span class="de">Ich finde, <span class="r-dass">dass</span> der Film witzig <span class="r-verb">war</span>.</span>']
        ]
      },
      note: 'Same picture as last week: the verb is <b>pushed to the wall</b> at the end of the dass-clause. If you can do weil, you can already do dass.',
      hinglish: 'Rule bilkul <b>weil</b> jaisa hai: <b>dass</b> lagate hi us clause ka verb sentence ke end mein chala jaata hai, aur <b>dass</b> se pehle comma aata hai. Matlab agar tumhe <b>weil</b> aata hai, to <b>dass</b> bhi already aa gaya.'
    },
    {
      title: 'The seven opening verbs',
      goldenRule: 'Verbs of thinking and saying open a <b>dass</b>-clause: glauben, denken, meinen, wissen, hoffen, finden, sagen.',
      memoryTrick: 'Jo kuch dimaag mein ya muh mein hota hai \u2014 sochna, maanna, jaanna, kehna \u2014 uske baad <b>dass</b> aata hai.',
      body: [
        'These everyday verbs report what happens in your head or mouth \u2014 each is naturally followed by <span class="de r-dass">dass</span>.'
      ],
      table: {
        head: ['Verb', 'Use', 'Example'],
        rows: [
          ['<span class="de">glauben</span>', 'belief', '<span class="de">Ich glaube, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">denken</span>', 'thought', '<span class="de">Ich denke, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">meinen</span>', 'opinion', '<span class="de">Ich meine, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">wissen</span>', 'a known fact', '<span class="de">Ich wei\u00df, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">hoffen</span>', 'a hope', '<span class="de">Ich hoffe, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">finden</span>', 'judgement', '<span class="de">Ich finde, <span class="r-dass">dass</span> \u2026</span>'],
          ['<span class="de">sagen</span>', 'reported speech', '<span class="de">Ich sage, <span class="r-dass">dass</span> \u2026</span>']
        ]
      },
      note: 'One more everyday opener is <b>sicher sein</b>: <span class="de">Ich bin sicher, dass \u2026</span>. All of them push the verb to the end of the following clause.',
      hinglish: 'Saat verbs aksar <b>dass</b> ke saath aate hain: <b>glauben, denken, meinen, wissen, hoffen, finden</b> aur <b>sagen</b>. Yeh sab wahi cheezein hain jo dimaag mein sochte ho ya muh se kehte ho. In sab ke baad wale clause mein verb sentence ke end mein jaata hai.'
    },
    {
      title: 'dass in the Perfekt and with modals',
      body: [
        'When the clause already has two verb parts, the <strong>conjugated</strong> one goes truly last \u2014 after the participle or infinitive. Exactly like weil.'
      ],
      table: {
        head: ['Type', 'dass-clause', 'What ends the clause'],
        rows: [
          ['modal', '<span class="de">\u2026, <span class="r-dass">dass</span> ich einen Steckbrief schreiben <span class="r-verb">muss</span>.</span>', 'muss (after the infinitive)'],
          ['modal', '<span class="de">\u2026, <span class="r-dass">dass</span> wir Texte teilen <span class="r-verb">sollten</span>.</span>', 'sollten (after the infinitive)'],
          ['Perfekt', '<span class="de">\u2026, <span class="r-dass">dass</span> sie mich \u00fcberrascht <span class="r-verb">hat</span>.</span>', 'hat (after the participle)'],
          ['Perfekt (sein)', '<span class="de">\u2026, <span class="r-dass">dass</span> sie aus Prag gekommen <span class="r-verb">ist</span>.</span>', 'ist (after the participle)']
        ]
      },
      note: 'The little helper (muss, hat, ist, sollten) is the <b>last</b> word of the clause. Same move you drilled with weil last chapter.',
      hinglish: 'Agar clause mein modal ya Perfekt hai, to conjugated verb (<b>muss</b>, <b>hat</b>, <b>ist</b>) sabse end mein aata hai \u2014 Infinitiv ya Partizip ke baad: <b>\u2026, dass ich schreiben muss</b>. Yeh bilkul <b>weil</b> jaisa hi behave karta hai.'
    },
    {
      title: 'dass or das? The one-second test',
      goldenRule: 'Can you swap it for <b>dieses</b> or <b>welches</b>? Then it is <b>das</b>. If not, it is <b>dass</b>.',
      formula: [
        'das Buch      \u2192 <b>dieses</b> Buch \u2713   so: das',
        'Ich glaube, dass \u2026  \u2192 dieses \u2717   so: dass'
      ],
      memoryTrick: 'Comma ke baad "that" ke matlab mein <b>dass</b> (do s). Article ya "yeh/woh" ke matlab mein <b>das</b> (ek s). Test: <b>dieses</b> laga ke dekho.',
      recap: [
        '<b>dass</b> = conjunction "that", always after a comma.',
        '<b>das</b> = article / pronoun / relative \u2014 swappable with <b>dieses</b>.',
        'One second, one test: try <b>dieses</b>.'
      ],
      body: [
        'They sound the same but do different jobs. <span class="de r-dass">dass</span> (double s) is a conjunction meaning <em>that</em> and always follows a comma. <span class="de r-article">das</span> (single s) is an article/pronoun meaning <em>the/that/which</em>.'
      ],
      table: {
        head: ['Word', 'Job', 'Test', 'Example'],
        rows: [
          ['<span class="de r-dass">dass</span>', 'conjunction \u201cthat\u201d', 'can\u2019t swap for dieses/welches', '<span class="de">Ich glaube, <span class="r-dass">dass</span> es gut ist.</span>'],
          ['<span class="de r-article">das</span>', 'article \u201cthe\u201d', 'swap with dieses \u2713', '<span class="de"><span class="r-article">das</span> Buch \u2192 dieses Buch</span>'],
          ['<span class="de r-article">das</span>', 'pronoun \u201cthat\u201d', 'swap with dieses \u2713', '<span class="de">Ich glaube <span class="r-article">das</span>.</span> (= dieses)'],
          ['<span class="de r-article">das</span>', 'relative \u201cwhich\u201d', 'swap with welches \u2713', '<span class="de">das Auto, <span class="r-article">das</span> hier steht</span>']
        ]
      },
      note: 'Quick test: if you can replace the word with <b>dieses</b> or <b>welches</b>, it\u2019s <b>das</b>. If not \u2014 if it just glues two clauses \u2014 it\u2019s <b>dass</b>.',
      hinglish: '<b>dass</b> (do s) conjunction hai, matlab \u201cki\u201d, aur yeh comma ke baad aata hai. <b>das</b> (ek s) article ya pronoun hai, matlab \u201cthe\u201d ya \u201cyeh\u201d. Test simple hai: agar tum us jagah <b>dieses</b> ya <b>welches</b> rakh sakte ho, to <b>das</b> sahi hai; warna <b>dass</b>.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four dass traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich glaube, dass Deutsch ist wichtig.', right: 'Ich glaube, dass Deutsch wichtig ist.', why: 'The conjugated verb must go to the END of the dass-clause, not position 2.' },
        { wrong: 'Ich glaube dass es gut ist.', right: 'Ich glaube, dass es gut ist.', why: 'Always put a comma before dass.' },
        { wrong: 'Ich glaube, das Deutsch wichtig ist.', right: 'Ich glaube, dass Deutsch wichtig ist.', why: 'The conjunction is dass (double s), not the article das.' },
        { wrong: 'Ich hoffe, dass ich habe genug Zeit.', right: 'Ich hoffe, dass ich genug Zeit habe.', why: 'In the Perfekt/with the verb, the conjugated form goes last: \u2026 Zeit habe.' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. Verb ko end mein rakhna hai: <b>dass Deutsch wichtig ist</b>. <b>dass</b> se pehle comma lagana hai. Conjunction ke liye <b>dass</b> (do s) chahiye, article wala <b>das</b> nahi. Aur Perfekt ya modal ho to conjugated verb end mein aayega: <b>dass ich Zeit habe</b>.'
    }
  ],

  // ---------- Reading passage (Maxs Blog-Steckbrief, clickable) ----------
  reading: {
    title: 'Mein Film-Blog',
    titleEn: 'My film blog',
    tokens: [
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'hei\u00dfe', role: 'r-verb', en: 'am called', hi: 'नाम है', pron: 'HY-suh', type: 'Verb \u00b7 hei\u00dfen' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'blogge', role: 'r-verb', en: 'blog', hi: 'ब्लॉग लिखता हूँ', pron: 'BLO-guh', type: 'Verb \u00b7 bloggen', why: 'bloggen (this chapter).', ex: 'Ich blogge \u00fcber Filme.', exEn: 'I blog about films.' },
      { w: '\u00fcber', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: '\u00dc-ber', type: 'Preposition' },
      { w: 'Filme', role: 'r-object', en: 'films', hi: 'फ़िल्में', pron: 'FIL-muh', type: 'Noun \u00b7 plural' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'glaube', role: 'r-verb', en: 'believe', hi: 'मानता हूँ', pron: 'GLOW-buh', type: 'Verb \u00b7 glauben', why: 'glauben + dass (this chapter).', ex: 'Ich glaube, dass \u2026', exEn: 'I believe that \u2026' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-dass', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction \u00b7 dass', why: 'dass \u2192 verb last (this chapter).', ex: 'dass ein Krimi spannend ist', exEn: 'that a crime story is exciting' },
      { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'guter', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-ter', type: 'Adjective' },
      { w: 'Krimi', role: 'r-subject', en: 'crime story', hi: 'अपराध कथा', pron: 'KREE-mee', type: 'Noun \u00b7 masc.', why: 'der Krimi (this chapter).', ex: 'ein guter Krimi', exEn: 'a good crime story' },
      { w: 'bis', role: 'r-preposition', en: 'until', hi: 'तक', pron: 'bis', type: 'Preposition' },
      { w: 'Mitternacht', role: 'r-time', en: 'midnight', hi: 'आधी रात', pron: 'MI-ter-nakht', type: 'Noun \u00b7 fem.', why: 'die Mitternacht (this chapter).', ex: 'bis Mitternacht', exEn: 'until midnight' },
      { w: 'spannend', role: 'r-adjective', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective', why: 'spannend (recycled \u2014 weil).', ex: 'spannend sein', exEn: 'to be exciting' },
      { w: 'bleibt', role: 'r-verb', en: 'stays', hi: 'रहता है', pron: 'blipt', type: 'Verb \u00b7 bleiben', why: 'conjugated verb last in the dass-clause (this chapter).', ex: '\u2026, dass ein Krimi spannend bleibt.', exEn: '\u2026 that a crime story stays exciting.' },
      { w: '.', plain: true },
      { w: 'Actionfilme', role: 'r-subject', en: 'action films', hi: 'एक्शन फ़िल्में', pron: 'EK-shen-fil-muh', type: 'Noun \u00b7 plural', why: 'der Actionfilm (this chapter).', ex: 'Actionfilme', exEn: 'action films' },
      { w: 'finde', role: 'r-verb', en: 'find', hi: 'लगते हैं', pron: 'FIN-duh', type: 'Verb \u00b7 finden' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'oft', role: 'r-adverb', en: 'often', hi: 'अक्सर', pron: 'oft', type: 'Adverb' },
      { w: 'furchtbar', role: 'r-adverb', en: 'terribly', hi: 'भयानक', pron: 'FURKHT-bar', type: 'Adverb', why: 'furchtbar (this chapter).', ex: 'furchtbar laut', exEn: 'terribly loud' },
      { w: 'laut', role: 'r-adjective', en: 'loud', hi: 'शोर भरा', pron: 'lowt', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil recycled from Ch.4 \u2014 verb last (recycled \u2014 weil).', ex: 'weil die Autos rasen', exEn: 'because the cars race' },
      { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Autos', role: 'r-subject', en: 'cars', hi: 'गाड़ियाँ', pron: 'OW-tos', type: 'Noun \u00b7 plural', why: 'das Auto \u2192 die Autos (recycled \u2014 Verkehr).', ex: 'die Autos', exEn: 'the cars' },
      { w: 'nur', role: 'r-adverb', en: 'only', hi: 'सिर्फ़', pron: 'noor', type: 'Adverb' },
      { w: 'rasen', role: 'r-verb', en: 'race', hi: 'तेज़ भागती हैं', pron: 'RAH-zen', type: 'Verb \u00b7 rasen', why: 'rasen (this chapter); verb last after weil (recycled \u2014 weil).', ex: '\u2026, weil die Autos rasen.', exEn: '\u2026 because the cars race.' },
      { w: '.', plain: true },
      { w: 'Zuletzt', role: 'r-time', en: 'lastly', hi: 'आख़िर में', pron: 'tsoo-LETST', type: 'Adverb \u00b7 time', why: 'zuletzt (this chapter).', ex: 'Zuletzt \u2026', exEn: 'Lastly \u2026' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'देखी', pron: 'HAH-buh', type: 'Verb \u00b7 haben' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'INE-en', type: 'Article \u00b7 acc.' },
      { w: 'Stummfilm', role: 'r-object', en: 'silent film', hi: 'मूक फ़िल्म', pron: 'SHTUM-film', type: 'Noun \u00b7 masc.', why: 'der Stummfilm (this chapter).', ex: 'einen Stummfilm', exEn: 'a silent film' },
      { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखी', pron: 'guh-ZAY-en', type: 'Partizip II \u00b7 sehen', why: 'Perfekt (recycled \u2014 Perfekt Wdh.).', ex: 'Ich habe ihn gesehen.', exEn: 'I saw it.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: '\u00fcberrascht', role: 'r-adjective', en: 'surprised', hi: 'हैरान', pron: '\u00fc-ber-RASHT', type: 'Adjective', why: '\u00fcberrascht sein (this chapter).', ex: 'Ich war \u00fcberrascht.', exEn: 'I was surprised.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-dass', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction \u00b7 dass' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Hauptperson', role: 'r-subject', en: 'main character', hi: 'मुख्य पात्र', pron: 'HOWPT-per-zohn', type: 'Noun \u00b7 fem.', why: 'die Hauptperson (this chapter).', ex: 'die Hauptperson', exEn: 'the protagonist' },
      { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb', why: 'so + adjective (recycled \u2014 weil).', ex: 'so intelligent', exEn: 'so intelligent' },
      { w: 'intelligent', role: 'r-adjective', en: 'intelligent', hi: 'बुद्धिमान', pron: 'in-te-li-GENT', type: 'Adjective', why: 'intelligent (this chapter).', ex: 'so intelligent', exEn: 'so intelligent' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)', why: 'conjugated verb last in the dass-clause (this chapter).', ex: '\u2026, dass die Hauptperson intelligent war.', exEn: '\u2026 that the protagonist was intelligent.' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition \u00b7 Wechsel' },
      { w: 'meinem', role: 'r-dativ', en: 'my (dat.)', hi: 'मेरे', pron: 'MY-nem', type: 'Possessive \u00b7 dative' },
      { w: 'Kanal', role: 'r-place', en: 'channel', hi: 'चैनल', pron: 'ka-NAHL', type: 'Noun \u00b7 masc.', why: 'der Kanal (this chapter).', ex: 'auf meinem Kanal', exEn: 'on my channel' },
      { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखता हूँ', pron: 'SHRY-buh', type: 'Verb \u00b7 schreiben' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'zu', role: 'r-preposition', en: 'for', hi: 'हर के लिए', pron: 'tsoo', type: 'Preposition \u00b7 Dativ' },
      { w: 'jedem', role: 'r-dativ', en: 'every (masc. dat.)', hi: 'हर', pron: 'YAY-dem', type: 'Determiner \u00b7 dative' },
      { w: 'Film', role: 'r-object', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun \u00b7 masc.' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'kurze', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'KUR-tsuh', type: 'Adjective' },
      { w: 'Filmbeschreibung', role: 'r-object', en: 'film description', hi: 'फ़िल्म विवरण', pron: 'FILM-buh-shry-bung', type: 'Noun \u00b7 fem.', why: 'die Filmbeschreibung (this chapter).', ex: 'eine Filmbeschreibung', exEn: 'a film description' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'hoffe', role: 'r-verb', en: 'hope', hi: 'उम्मीद है', pron: 'HO-fuh', type: 'Verb \u00b7 hoffen', why: 'hoffen + dass (this chapter).', ex: 'Ich hoffe, dass \u2026', exEn: 'I hope that \u2026' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-dass', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction \u00b7 dass' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb \u00b7 time' },
      { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
      { w: 'Feedback', role: 'r-object', en: 'feedback', hi: 'प्रतिक्रिया', pron: 'FEED-bek', type: 'Noun \u00b7 neut.', why: 'das Feedback (this chapter).', ex: 'mehr Feedback', exEn: 'more feedback' },
      { w: 'bekomme', role: 'r-verb', en: 'get', hi: 'पाऊँ', pron: 'buh-KO-muh', type: 'Verb \u00b7 bekommen', why: 'conjugated verb last in the dass-clause (this chapter).', ex: '\u2026, dass ich Feedback bekomme.', exEn: '\u2026 that I get feedback.' },
      { w: '.', plain: true }
    ],
    translation: 'My name is Max and I blog about films. I believe that a good crime story stays exciting until midnight. I often find action films terribly loud, because the cars only race. Lastly I watched a silent film. I was surprised that the main character was so intelligent. On my channel I write a short film description for every film. I hope that I\u2019ll soon get more feedback. \u2014 Count the clauses: dass \u2026 bleibt, weil \u2026 rasen, dass \u2026 war, dass \u2026 bekomme \u2014 the conjugated verb ends every one.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_005_L001', speaker: 'Marek', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frauke, glaubst du, dass das neue Café gut ist?', en: 'Frauke, do you think the new café is good?' },
      { id: 'A2_005_L002', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich denke, dass der Kaffee dort sehr gut ist. Aber ich weiß nicht, dass es günstig ist.', en: 'I think the coffee there is very good. But I don\'t know if it\'s cheap.' },
      { id: 'A2_005_L003', speaker: 'Marek', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich hoffe, dass wir einen Tisch bekommen!', en: 'I hope we get a table!' }
    ],
    transcript: 'Frauke, glaubst du, dass das neue Café gut ist? Ich denke, dass der Kaffee dort sehr gut ist. Aber ich weiß nicht, dass es günstig ist. Ich hoffe, dass wir einen Tisch bekommen!',
    translation: 'Frauke, do you think the new café is good? I think the coffee there is very good. But I don\'t know if it\'s cheap. I hope we get a table!',
    tokens: [
      { w: 'Frauke' },
      { w: ',', plain: true },
      { w: 'glaubst' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'das' },
      { w: 'neue' },
      { w: 'Café' },
      { w: 'gut' },
      { w: 'ist' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'denke' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'der' },
      { w: 'Kaffee' },
      { w: 'dort' },
      { w: 'sehr' },
      { w: 'gut' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'ich' },
      { w: 'weiß' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'es' },
      { w: 'günstig' },
      { w: 'ist' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'hoffe' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'einen' },
      { w: 'Tisch' },
      { w: 'bekommen' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was denkt Frauke über den Kaffee?', qEn: 'What does Frauke think about the coffee?', options: ['dass er schlecht ist', 'dass er sehr gut ist', 'dass er kalt ist', 'dass er teuer ist'], optionsEn: ['that it is bad', 'that it is very good', 'that it is cold', 'that it is expensive'], answer: 1,
        explain: '"Ich denke, dass der Kaffee dort sehr gut ist."' },
      { q: 'Worauf hofft Marek?', qEn: 'What is Marek hoping for?', options: ['ein Rabatt', 'ein Tisch', 'ein Geschenk', 'eine Rechnung'], optionsEn: ['a discount', 'a table', 'a present', 'an invoice'], answer: 1,
        explain: '"Ich hoffe, dass wir einen Tisch bekommen!"' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt, was du von dem Forum hältst.", taskEn: "Your friend asks what you think of the forum.", de: "Ich glaube, dass das Forum sehr nützlich ist.", en: "I think the forum is very useful." },
    { task: "Deine Freundin will ein Video hochladen. Was hoffst du?", taskEn: "Your friend wants to upload a video. What do you hope?", de: "Ich hoffe, dass sie viel Feedback bekommt.", en: "I hope she gets a lot of feedback." },
    { task: "Dein Kollege fragt: Weißt du, wie man den Link teilt?", taskEn: "Your colleague asks: do you know how to share the link?", de: "Ich weiß, dass man den Link einfach teilen kann.", en: "I know you can simply share the link." },
    { task: "Dein Bruder will die Fotos löschen. Was meinst du?", taskEn: "Your brother wants to delete the photos. What do you think?", de: "Ich meine, dass wir die Fotos nicht löschen sollen.", en: "I think we shouldn't delete the photos." },
    { task: "Deine Freundin fragt, ob du dem Blog zustimmst.", taskEn: "Your friend asks whether you agree with the blog.", de: "Ich denke, dass der Blog recht hat.", en: "I think the blog is right." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write six dass-sentences that report your own opinions and hopes (conjugated verb at the end). Use at least four different opening verbs (glauben, denken, meinen, wissen, hoffen, finden, sagen), and try this chapter\u2019s words: der Kanal, das Feedback, der Krimi, spannend, das Gymnasium, die Lehre. Include one sentence in the Perfekt (\u2026, dass ich \u2026 habe/bin) and one that clearly needs dass (not das).',
    starters: ['Ich glaube, dass \u2026', 'Ich finde, dass \u2026', 'Ich hoffe, dass \u2026', 'Ich wei\u00df, dass \u2026'],
    placeholder: 'Ich glaube, dass Deutsch wichtig ist. Ich finde, dass ein guter Krimi spannend bleibt \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Ich glaube, dass Deutsch ist wichtig.',
        'Ich glaube, dass Deutsch wichtig ist.',
        'Ich glaube, das Deutsch wichtig ist.',
        'Ich glaube dass Deutsch wichtig ist.'
      ],
      answer: 1,
      explain: 'Comma before dass (double s), and the conjugated verb (ist) goes to the very end.'
    },
    gap: {
      // learner supplies "dass" then the verb that lands at the end
      sentence: ['Ich hoffe, ', ' ich bald mehr Feedback ', '.'],
      gaps: [ { answer: 'dass', accepts: ['dass'] }, { answer: 'bekomme', accepts: ['bekomme'] } ],
      explain: 'dass opens the clause; the conjugated verb (bekomme) stands at the end.'
    },
    match: {
      q: 'Match each opening verb to a natural dass-clause.',
      pairs: [
        { noun: 'Ich glaube,', art: 'dass Filme gute Lehrer sind.' },
        { noun: 'Ich hoffe,', art: 'dass es nicht zu lang wird.' },
        { noun: 'Ich wei\u00df,', art: 'dass ich einen Steckbrief schreiben muss.' },
        { noun: 'Ich finde,', art: 'dass der Stummfilm witzig war.' },
        { noun: 'Ich bin \u00fcberrascht,', art: 'dass sie aus Tschechien kommt.' }
      ]
    },
    builder: {
      target: 'Build the dass-clause: "\u2026 that German is important."',
      bank: ['dass', 'Deutsch', 'wichtig', 'ist'],
      answer: ['dass', 'Deutsch', 'wichtig', 'ist'],
      roles: { 'dass': 'r-dass', 'Deutsch': 'r-subject', 'wichtig': 'r-adjective', 'ist': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What happens to the verb after dass?', options: ['it stays in position 2', 'it moves to the very end', 'it disappears', 'it comes first'], answer: 1,
      explain: 'After dass, the conjugated verb goes to the end of the clause \u2014 the same rule as weil.' },
    { q: 'Which is correct?', options: ['Ich denke dass es gut ist.', 'Ich denke, dass es gut ist.', 'Ich denke, das es gut ist.', 'Ich denke, dass es ist gut.'], answer: 1,
      explain: 'Comma before dass (double s), verb (ist) at the end.' },
    { q: 'dass or das? "Ich wei\u00df, ___ du recht hast."', options: ['das', 'dass', 'daß nur mit \u00df', 'beides'], answer: 1,
      explain: 'It joins two clauses and can\u2019t be swapped for dieses \u2192 conjunction dass.' },
    { q: 'Complete (modal): "Ich wei\u00df, dass ich einen Steckbrief schreiben ___."', options: ['muss', 'musst', 'ich muss', 'muss ich'], answer: 0,
      explain: 'The conjugated modal (muss) is the last word, after the infinitive: \u2026 schreiben muss.' },
    { q: 'Which verb does NOT typically open a dass-clause of opinion?', options: ['glauben', 'denken', 'rasen', 'meinen'], answer: 2,
      explain: 'rasen (to race/speed) reports movement, not an opinion; glauben/denken/meinen do.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dass', html: 'Add <span class="de r-dass">dass</span> to report a thought, and the <span class="de r-verb">conjugated verb</span> slides to the end \u2014 <span class="de">Ich glaube, dass Deutsch wichtig <b>ist</b>.</span> Same rule as weil.' },
    { c: 'r-dass', html: 'Seven opening verbs: <span class="de">glauben, denken, meinen, wissen, hoffen, finden, sagen</span> \u2014 plus a comma before dass, every time.' },
    { c: 'r-article', html: 'It\u2019s <span class="de r-dass">dass</span> (double s, the conjunction), not <span class="de r-article">das</span> (the article). If you can swap it for <b>dieses</b>, it\u2019s das.' }
  ],
  revisionTips: [
    'Same picture as weil: after dass, the verb is pushed to the wall at the end.',
    'Memorise the seven openers as a chant: glauben, denken, meinen, wissen, hoffen, finden, sagen.',
    'dass vs das: if dieses/welches fits, it\u2019s das (one s). If it just glues clauses, it\u2019s dass (two s).'
  ]
};

window.CHAPTER = CHAPTER;
