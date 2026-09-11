/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 66
   "Argumentieren: Standpunkte" — stating, supporting, agreeing
   with, and politely disagreeing with opinions. Structure:
   Opinion + Reason + Example + Conclusion. Integrates
   Wissenschaftssprache, Funktionsverbgefüge, Verweiswörter,
   Absatzlogik, and Konjunktiv I where natural. Recycling
   chapter — no new vocabulary. Does NOT teach advanced
   rhetoric, logical fallacies, C1 debate strategies, or
   persuasion psychology.
   IMPORTANT: dialogue uses ONLY Katrin and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-66-argumentieren-standpunkte',
  phase: 'B2 · Phase 7',
  number: 66,
  title: 'Argumentieren: Standpunkte',
  titleEn: 'Arguing: expressing viewpoints',
  description: 'Opinion + Reason + Example + Conclusion = a strong B2 argument. Agree, disagree politely, stay logical.',
  xp: 900,
  time: 85,
  difficulty: 'Advanced',
  nextChapter: { number: 67, title: 'Argumentieren: Gegenargumente', titleEn: 'Arguing: counterarguments' , href: 'chapter-b2-67-argumentieren-gegenargumente.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Opinion. <em>Reason.</em> Example. Conclusion.',
    intro: 'Preparing for a Goethe B2 speaking exam on artificial intelligence in education, Katrin argues that remote work saves time, and Timo pushes back — opinion, reason, agreement, and polite disagreement, in careful order.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See how a strong B2 argument is built, step by step'
    ],
    scene: 'Vorbereitung auf das Partnergespräch',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Katrin', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vertrete', role: 'r-verb', en: 'represent', hi: 'मानती हूँ', pron: 'fer-TRAY-tuh', type: 'Verb · vertreten (ich)', why: 'einen Standpunkt vertreten = to hold a viewpoint (this chapter).', ex: 'Ich vertrete den Standpunkt, dass Homeoffice gut ist.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Standpunkt', role: 'r-akkusativ', en: 'viewpoint', hi: 'दृष्टिकोण', pron: 'SHTANT-punkt', type: 'Noun · masc.', why: 'der Standpunkt (this chapter).', ex: 'der Standpunkt' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'Homeoffice', role: 'r-subject', en: 'remote work', hi: 'होम ऑफ़िस', pron: 'HOHM-o-fis', type: 'Noun · neut.' },
        { w: 'gut', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I represent the viewpoint that remote work is good.', hi: 'Main yeh drishtikon maanti hoon ki homeoffice achha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'begründen', role: 'r-verb', en: 'justify', hi: 'कारण बताना', pron: 'be-GRÜN-den', type: 'Verb · infinitive (Satzende)', why: 'begründen = to justify (this chapter).', ex: 'Kannst du das begründen?' },
        { w: '?', plain: true }
      ], en: 'Can you justify that?', hi: 'Kya tum iska kaaran bata sakti ho?' },
      { speaker: 'Katrin', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'Ansicht', role: 'r-dativ', en: 'opinion (gen.)', hi: 'राय के', pron: 'AN-zikht', type: 'Noun · fem. genitive', why: 'die Ansicht (this chapter, meiner Ansicht nach = in my opinion).', ex: 'meiner Ansicht nach' },
        { w: 'nach', role: 'r-preposition', en: 'according to', hi: 'अनुसार', pron: 'nahkh', type: 'Preposition' },
        { w: 'sparen', role: 'r-verb', en: 'save', hi: 'बचाते हैं', pron: 'SHPAH-ren', type: 'Verb · sparen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Yes. In my opinion we save a lot of time.', hi: 'Haan. Meri raay mein hum bahut samay bachaate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Stimmst', role: 'r-verb', en: 'do you agree', hi: 'सहमत हो', pron: 'SHTIMST', type: 'Verb · zustimmen (du)', lexicalUnit: 'zustimmen' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix', lexicalUnit: 'zustimmen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nachteile', role: 'r-subject', en: 'disadvantages', hi: 'नुकसान', pron: 'NAHKH-ty-luh', type: 'Noun · plural' },
        { w: 'überwiegen', role: 'r-verb', en: 'outweigh', hi: 'ज़्यादा हैं', pron: 'ü-ber-VEE-gen', type: 'Verb · überwiegen (Satzende)', why: 'überwiegen = to outweigh/predominate (this chapter).', ex: 'die Nachteile überwiegen' },
        { w: '?', plain: true }
      ], en: 'Do you also agree that the disadvantages outweigh?', hi: 'Kya tum bhi sahmat ho ki nuksaan zyaada hain?' },
      { speaker: 'Katrin', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'stimme', role: 'r-verb', en: 'agree', hi: 'सहमत', pron: 'SHTI-muh', type: 'Verb · zustimmen (ich)', lexicalUnit: 'zustimmen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix · Satzende', lexicalUnit: 'zustimmen' },
        { w: '.', plain: true }
      ], en: 'No, I do not agree with that.', hi: 'Nahi, main isse sahmat nahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'diskutieren', role: 'r-verb', en: 'let us discuss', hi: 'चर्चा करते हैं', pron: 'dis-koo-TEE-ren', type: 'Verb · diskutieren (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'weiter', role: 'r-akkusativ', en: 'further', hi: 'आगे', pron: 'VY-ter', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then let us discuss further.', hi: 'Achha, toh hum aage charcha karte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Every strong argument follows one pattern: <span class="de r-opinion">Opinion</span> + <span class="de r-reason">Reason</span> + <span class="de r-example">Example</span> + <span class="de r-conclusion">Conclusion</span>. Agree and disagree politely — never abruptly.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ARGUMENTIEREN: STANDPUNKTE (expressing and defending opinions) at B2 level: the argument structure is Opinion (Ich bin der Meinung, dass...; Meiner Meinung nach...; Meines Erachtens...; Aus meiner Sicht...; Ich vertrete die Ansicht, dass...) + Reason (weil, da, denn, nämlich, aus diesem Grund, deshalb, daher) + Example (zum Beispiel) + Conclusion (deshalb, daher komme ich zu dem Schluss, dass...). Agreement: Ich stimme dir zu; Da hast du recht; Das sehe ich genauso; Dem kann ich zustimmen; Ich teile diese Ansicht. Polite disagreement: Ich sehe das anders; Ich bin anderer Meinung; Dem kann ich nicht ganz zustimmen; Das überzeugt mich nicht; Einerseits..., andererseits...; Allerdings...; Dennoch... ' +
    'Do NOT expect or require advanced rhetoric, logical fallacy analysis, C1 debate strategies, or persuasion psychology — those are separate/higher-level topics; do not flag their absence. The most important thing to catch: opinions stated WITHOUT a supporting reason (incomplete argument), or disagreement expressed too bluntly/rudely instead of politely. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that every opinion statement is followed by a reason (weil/da/denn) — flag "Ich denke, dass X ist gut" alone as incomplete if no reason follows anywhere nearby.\n' +
    '- Check that fixed expressions are grammatically correct (e.g. "Ich bin der Meinung, dass" needs Genitiv "der", "Meiner Meinung nach" needs Dativ "meiner").\n' +
    '- Check that disagreement is phrased politely (Ich sehe das anders / Ich bin anderer Meinung), not bluntly (Das ist falsch / Du hast unrecht) unless the register clearly calls for bluntness.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Argument structure check:</b> one sentence on whether the learner\'s argument followed Opinion + Reason + Example + Conclusion, and whether disagreement (if any) was polite.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you build complete, logical arguments and disagree politely. Ready for pros and cons discussion next.',
    mid: 'Good. Re-read the Building an Argument table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: Opinion + Reason + Example + Conclusion = a strong B2 argument.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-opinion' }, { w: 'bin', role: 'r-opinion' }, { w: 'der', role: 'r-opinion' },
    { w: 'Meinung', role: 'r-opinion' }, { w: ',', plain: true }, { w: 'dass', role: 'plain' }, { w: 'KI', role: 'plain' }, { w: 'Vorteile', role: 'plain' }, { w: 'bietet', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Opinion + Reason + Example + Conclusion = a strong B2 argument.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katrin and Timo prepare for a Goethe B2 speaking exam, building and defending arguments about AI in education.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master expressing opinions, giving reasons, agreeing, disagreeing politely, and balanced argumentation.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an argumentative article on remote work and a university essay on AI in education.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify opinion, supporting reason, agreement, disagreement, and final conclusion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Express opinions, agree politely, disagree respectfully, and reach a conclusion.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a 220-word opinion essay and a discussion essay with opposing viewpoints and your own conclusion.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill opinion matching, building logical arguments, and agree-or-disagree exercises.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 900 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Opinion-expression drills, agree/disagree practice, and a 220-word opinion essay task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Opinion Expressions table, Building an Argument model, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich bin der Meinung, dass ... / Meiner Meinung nach ...', text: 'Express opinions clearly using neutral and formal expressions' },
    { de: 'weil ... / zum Beispiel ...', text: 'Support opinions with a reason and a concrete example' },
    { de: 'Ich stimme dir zu. / Da hast du recht.', text: 'Agree naturally and appropriately' },
    { de: 'Ich sehe das anders. / Allerdings ... / Andererseits ...', text: 'Disagree politely without being confrontational' },
    { de: 'Deshalb komme ich zu dem Schluss, dass ...', text: 'Build a complete, balanced argument ending in a logical conclusion' }
  ],

  vocab: [
    { de: 'der Standpunkt', art: 'der', gender: 'm', plural: 'Standpunkte', pos: 'noun', level: 'B2', register: 'both', en: 'standpoint, position', hi: 'दृष्टिकोण', ex: 'Ihr Standpunkt ist gut begründet.', exEn: 'Her standpoint is well justified.', exHi: 'Uska drishtikon achhi tarah se justified hai.', ex2: 'Sie haben ihren Standpunkt geändert.', ex2En: 'They\'ve changed their standpoint.', ex2Hi: 'Unhone apna drishtikon badla hai.' },
    { de: 'begründen', pos: 'verb', level: 'B2', register: 'both', en: 'to justify, give reasons for', hi: 'औचित्य साबित करना', ex: 'Er begründet seine Meinung mit einem Beispiel.', exEn: 'He justifies his opinion with an example.', exHi: 'Woh apni raay ko ek udaharan se justify karta hai.', ex2: 'Sie haben ihre Entscheidung ausführlich begründet.', ex2En: 'They\'ve justified their decision in detail.', ex2Hi: 'Unhone apne faisle ko vistaar se justify kiya hai.', conj: { praesens: 'begründet', praeteritum: 'begründete', perfekt: 'hat begründet' } },
    { de: 'zustimmen', pos: 'verb', level: 'B2', register: 'both', en: 'to agree', hi: 'सहमत होना', ex: 'Ich stimme dir in diesem Punkt zu.', exEn: 'I agree with you on this point.', exHi: 'Main iss point par tumse sehmat hoon.', ex2: 'Sie haben dem Vorschlag zugestimmt.', ex2En: 'They\'ve agreed to the proposal.', ex2Hi: 'Unhone prastaav se sehmati di hai.', conj: { praesens: 'stimmt zu', praeteritum: 'stimmte zu', perfekt: 'hat zugestimmt' } },
    { de: 'die Ansicht', art: 'die', gender: 'f', plural: 'Ansichten', pos: 'noun', level: 'B2', register: 'written', en: 'view, opinion', hi: 'राय', ex: 'Ich vertrete die Ansicht, dass Bildung wichtig ist.', exEn: 'I hold the view that education is important.', exHi: 'Meri raay hai ki shiksha mahatvapurn hai.', ex2: 'Sie haben ihre Ansicht klar dargelegt.', ex2En: 'They\'ve clearly presented their view.', ex2Hi: 'Unhone apni raay spasht roop se prastut ki hai.' },
    { de: 'überwiegen', pos: 'verb', level: 'B2', register: 'written', en: 'to outweigh, predominate', hi: 'भारी पड़ना', ex: 'Die Vorteile überwiegen die Nachteile.', exEn: 'The advantages outweigh the disadvantages.', exHi: 'Labh haani par bhaari padte hain.', ex2: 'Sie haben festgestellt, dass die Risiken überwiegen.', ex2En: 'They\'ve determined that the risks outweigh.', ex2Hi: 'Unhone paaya hai ki jokhim bhaari padte hain.', conj: { praesens: 'überwiegt', praeteritum: 'überwog', perfekt: 'hat überwogen' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Standpunkt?',
      body: [ 'A Standpunkt is your opinion, supported by reasons, examples, and a conclusion.' ],
      table: {
        head: ['Structure', 'Function'],
        rows: [
          ['<span class="de r-opinion">Ich bin der Meinung, dass Online-Unterricht viele Vorteile bietet.</span>', 'Opinion'],
          ['(reason, example follow)', 'Reason → Example → Conclusion']
        ]
      },
      hinglish: 'Standpunkt matlab tumhari raay \u2014 par akeli raay kaafi nahi hoti. Uske saath reason, ek example aur ek conclusion hona chahiye. Goethe B2 ki writing aur speaking mein yahi chaar cheezein check hoti hain.'
    },
    {
      title: 'Meinungen ausdrücken',
      body: [ 'Common expressions for stating opinions, with different registers.' ],
      table: {
        head: ['Expression', 'Register'],
        rows: [
          ['Ich bin der Meinung, dass ...', 'Neutral'],
          ['Meiner Meinung nach ...', 'Neutral'],
          ['Meines Erachtens ...', 'Formal'],
          ['Ich denke, dass ...', 'Neutral'],
          ['Ich glaube, dass ...', 'Neutral'],
          ['Aus meiner Sicht ...', 'Formal'],
          ['Ich vertrete die Ansicht, dass ...', 'Academic/Formal']
        ]
      },
      hinglish: 'Raay batane ke kai tarike hain, aur register alag-alag hai. <b>Ich denke</b> aur <b>Meiner Meinung nach</b> rozmarra mein chalte hain, aur <b>Meines Erachtens</b> ya <b>Ich vertrete die Ansicht</b> formal writing mein. Exam mein ek hi expression baar-baar mat dohrao \u2014 badal-badal kar use karo.'
    },
    {
      title: 'Wortstellung bei Meinungs\u00e4u\u00dferungen',
      body: [
        'These expressions split into two groups, and they behave differently. Some open a <b>dass</b>-clause, so the verb goes to the END. Others fill position 1 themselves, so the verb comes SECOND \u2014 before the subject.'
      ],
      table: {
        head: ['Expression', 'What follows', 'Example'],
        rows: [
          ['Ich bin der Meinung,', 'dass-clause, verb last', '<span class="de">Ich bin der Meinung, dass Homeoffice sinnvoll <b>ist</b>.</span>'],
          ['Ich denke / glaube,', 'dass-clause, verb last', '<span class="de">Ich denke, dass es funktionieren <b>wird</b>.</span>'],
          ['Meiner Meinung nach', 'position 1, verb second', '<span class="de">Meiner Meinung nach <b>sollte</b> man das \u00e4ndern.</span>'],
          ['Meines Erachtens', 'position 1, verb second', '<span class="de">Meines Erachtens <b>ist</b> das zu teuer.</span>'],
          ['Aus meiner Sicht', 'position 1, verb second', '<span class="de">Aus meiner Sicht <b>gibt</b> es bessere L\u00f6sungen.</span>']
        ]
      },
      note: 'Watch the fixed forms: <b>der Meinung sein</b> keeps its article, and <b>meiner Meinung nach</b> puts <i>nach</i> AFTER the noun. Neither can be shortened.',
      hinglish: 'In expressions ke do group hain aur dono ka word order alag hai. Kuch <b>dass</b>-clause kholte hain, isliye unme verb sentence ke end mein jaata hai: <span class="de">Ich bin der Meinung, dass Homeoffice sinnvoll ist.</span> Aur kuch khud position 1 le lete hain, isliye unke turant baad verb aata hai, subject se pehle: <span class="de">Meiner Meinung nach sollte man das \u00e4ndern.</span> Do fixed forms dhyaan se yaad rakho \u2014 <b>der Meinung sein</b> mein article hamesha rehta hai, aur <b>meiner Meinung nach</b> mein <i>nach</i> noun ke <b>baad</b> aata hai.'
    },
    {
      title: 'Gründe angeben',
      body: [ 'Useful reason expressions: weil, da, denn, nämlich, aus diesem Grund, deshalb, daher. Students should always support opinions with reasons.' ],
      hinglish: 'Reason dene ke liye yeh shabd kaam aate hain: <b>weil, da, denn, n\u00e4mlich, aus diesem Grund, deshalb, daher</b>. Dhyaan rakho ki <b>weil</b> aur <b>da</b> verb ko clause ke end mein bhejte hain, jabki <b>denn</b>, <b>deshalb</b> aur <b>daher</b> ke saath normal order rehta hai. Raay hamesha reason ke saath do \u2014 bina reason ke argument adhoora hai.'
    },
    {
      title: 'Argumente unterstützen',
      body: [ 'The full argument-building model: Opinion → Reason → Example → Result.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Meiner Meinung nach sollte Homeoffice häufiger angeboten werden, weil ...', 'In my opinion, homeoffice should be offered more often, because ...'],
          ['Zum Beispiel ...', 'For example ...'],
          ['Deshalb ...', 'Therefore ...']
        ]
      },
      hinglish: 'Poora model yeh hai: pehle apni raay, phir uska reason, phir ek example, aur ant mein nateeja. Yeh chaar step har writing task mein kaam aate hain.'
    },
    {
      title: 'Zustimmen (agreeing)',
      body: [ 'Expressions for agreement: Ich stimme dir zu; Da hast du recht; Das sehe ich genauso; Dem kann ich zustimmen; Ich teile diese Ansicht.' ],
      hinglish: 'Sehmat hone ke liye yeh expressions hain: <span class="de">Ich stimme dir zu</span>, <span class="de">Da hast du recht</span>, <span class="de">Das sehe ich genauso</span>, <span class="de">Ich teile diese Ansicht</span>. Dhyaan do ki <b>zustimmen</b> Dativ leta hai (<i>dir</i>, <i>Ihnen</i>) aur uska <b>zu</b> end mein jaata hai.'
    },
    {
      title: 'Höflich widersprechen (disagreeing politely)',
      body: [ 'Expressions for polite disagreement: Ich sehe das anders; Ich bin anderer Meinung; Dem kann ich nicht ganz zustimmen; Das überzeugt mich nicht; Einerseits..., andererseits...; Allerdings...; Dennoch...' ],
      hinglish: 'Asehmati politely batane ke liye: <span class="de">Ich sehe das anders</span>, <span class="de">Ich bin anderer Meinung</span>, <span class="de">Dem kann ich nicht ganz zustimmen</span>. German mein seedha \u201cNein, das ist falsch\u201d kehna rukha lagta hai \u2014 isliye <b>nicht ganz</b> jaise shabd jod dene se baat narm ho jaati hai.'
    },
    {
      title: 'Ausgewogene Argumentation',
      body: [ 'Structure: Standpoint → Counterargument → Response → Conclusion. Good arguments acknowledge other perspectives.' ],
      hinglish: 'Balanced argument ka structure yeh hai: apni raay, phir doosri taraf ki baat, phir uspar jawaab, aur ant mein nateeja. Doosre point of view ko maan lena kamzori nahi hai \u2014 isse argument aur mazboot lagta hai, aur exam mein iske marks bhi milte hain.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from skipping the claim itself, dropping a fixed article, giving a reason that repeats the claim, or leaving a verb or clause incomplete.' ],
      mistakes: [
        { wrong: 'Ich denke, weil Homeoffice flexibel ist.', right: 'Ich denke, dass Homeoffice sinnvoll ist, weil es flexibel ist.', why: 'State the claim first in a dass-clause, then give the reason with weil. Jumping straight to weil leaves the opinion itself unsaid.' },
        { wrong: 'Ich bin Meinung, dass das richtig ist.', right: 'Ich bin der Meinung, dass das richtig ist.', why: 'This is a fixed expression and the article cannot be dropped: <b>der Meinung sein</b>.' },
        { wrong: 'Das ist schlecht, weil es schlecht ist.', right: 'Das ist schlecht, weil es hohe Kosten verursacht.', why: 'A reason has to add NEW information. Repeating the claim in other words explains nothing.' },
        { wrong: 'Ich stimme nicht.', right: 'Ich stimme dir nicht zu. / Ich sehe das anders.', why: '<b>zustimmen</b> needs a Dativ object (dir) and its separable prefix <b>zu</b> at the end of the clause.' },
        { wrong: 'Ich denke, das ist richtig, weil.', right: 'Ich denke, dass das richtig ist, weil es Zeit spart.', why: 'A weil-clause cannot be left hanging \u2014 it needs its own subject, its reason and a verb at the end.' }
      ],
      hinglish: 'Yeh galtiyan chaar wajah se hoti hain \u2014 apni baat kahe bina seedha reason par kood jaana, fixed expression ka article gira dena, reason mein wahi baat dohra dena, ya clause adhoora chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to express an opinion? State your standpoint, give a reason, provide an example, consider another viewpoint, finish with a logical conclusion.' ],
      note: 'Memory trick: every strong argument answers four questions — What do I think? Why do I think that? Can I prove it with an example? What is my conclusion? Opinion + Reason + Example + Conclusion = Strong B2 Argument.',
      hinglish: 'Raay deni hai? Pehle apna standpoint batao, phir reason do, phir ek example, phir doosri taraf ki baat par bhi nazar daalo, aur ek saaf nateeje ke saath khatam karo. Yeh chaar sawaal yaad rakho \u2014 main kya sochta hoon, kyun, iska proof kya hai, aur nateeja kya nikla.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Argumentativer Artikel über Homeoffice',
    titleEn: 'Reading A — An argumentative article discussing remote work',
    tokens: [
      { w: 'Viele', role: 'plain', en: 'many', hi: 'kai', type: 'Adjective' },
      { w: 'Experten', role: 'plain', en: 'experts', hi: 'visheshagya', type: 'Noun · plural' },
      { w: 'vertreten', role: 'r-opinion', en: 'hold (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'die', role: 'r-opinion', en: 'the (fem. akk., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Article · Akk.' },
      { w: 'Ansicht', role: 'r-opinion', en: 'view (Satzende, fixed expression)', hi: 'raay (Satzende, fixed expression)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'Homeoffice', role: 'plain', en: 'homeoffice', hi: 'homeoffice', type: 'Noun · neut.' },
      { w: 'produktiver', role: 'plain', en: 'more productive', hi: 'zyaada utpaadak', type: 'Adjective' },
      { w: 'macht', role: 'plain', en: 'makes (Satzende)', hi: 'banaata hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Allerdings', role: 'r-disagree', en: 'however (softening connector)', hi: 'lekin (softening connector)', type: 'Adverb' },
      { w: 'fehlt', role: 'plain', en: 'lacks', hi: 'kami hoti hai', type: 'Verb (Präsens)' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'aksar', type: 'Adverb' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'persönliche', role: 'plain', en: 'personal', hi: 'vyaktigat', type: 'Adjective' },
      { w: 'Austausch', role: 'plain', en: 'exchange (Satzende)', hi: 'aadaan-pradaan (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'betont', role: 'plain', en: 'emphasizes', hi: 'ज़ोर देती है', type: 'Verb · betonen' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'aktuelle', role: 'plain', en: 'current', hi: 'हालिया', type: 'Adjective' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Angestellte', role: 'plain', en: 'employees', hi: 'कर्मचारी', type: 'Noun · plural' },
      { w: 'flexiblere', role: 'plain', en: 'more flexible', hi: 'अधिक लचीले', type: 'Adjective · Komparativ' },
      { w: 'Arbeitszeiten', role: 'plain', en: 'working hours (Satzende)', hi: 'कार्य समय (Satzende)', type: 'Noun · plural' },
      { w: 'bevorzugen', role: 'plain', en: 'prefer (Satzende)', hi: 'पसंद करते हैं (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Aus', role: 'r-opinion', en: 'from (part of fixed opinion expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Präposition · Dat.' },
      { w: 'meiner', role: 'r-opinion', en: 'my (fem. dat., part of fixed expression)', hi: '(हिस्सा)', type: 'Possessivartikel' },
      { w: 'Sicht', role: 'r-opinion', en: 'view (Satzende, fixed expression)', hi: 'नज़रिये से (Satzende)', type: 'Noun · fem.', why: '"Aus meiner Sicht" is a standard formal way to introduce a personal opinion (this chapter).' },
      { w: 'überwiegen', role: 'plain', en: 'outweigh', hi: 'भारी पड़ते हैं', type: 'Verb · überwiegen' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Vorteile', role: 'plain', en: 'advantages (Satzende)', hi: 'फ़ायदे (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'sofern', role: 'plain', en: 'provided that', hi: 'बशर्ते', type: 'Konjunktion' },
      { w: 'Unternehmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'klare', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective' },
      { w: 'Regeln', role: 'plain', en: 'rules (Satzende)', hi: 'नियम (Satzende)', type: 'Noun · plural' },
      { w: 'schaffen', role: 'plain', en: 'create (Satzende)', hi: 'बनाएँ (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Many experts hold the view that homeoffice makes work more productive. However, personal exchange is often lacking. Moreover, a current study emphasizes that many employees prefer more flexible working hours. In my view, the advantages outweigh the disadvantages, provided companies create clear rules.',
    comprehension: [
      { q: 'Welche Funktion hat "vertreten die Ansicht"?', options: ['Opinion expression', 'Reason', 'Disagreement'], answer: 0 },
      { q: 'Welche Funktion hat "Allerdings" hier?', options: ['Softening disagreement / introducing a counterpoint', 'Introducing an opinion', 'Introducing an example'], answer: 0 },
      { q: 'Ist dieser Text einseitig oder ausgewogen?', options: ['Ausgewogen (zeigt beide Seiten)', 'Einseitig', 'Rein subjektiv'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Universitätsessay über KI in der Bildung',
    titleEn: 'Reading B — A university essay about artificial intelligence in education',
    tokens: [
      { w: 'Meines', role: 'r-opinion', en: 'my (neut. gen., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Possessivartikel · Gen.' },
      { w: 'Erachtens', role: 'r-opinion', en: 'estimation (Satzende, fixed expression — formal)', hi: 'andaaz se (Satzende, fixed expression — formal)', type: 'Noun · neut. (Satzende)' },
      { w: 'sollten', role: 'plain', en: 'should', hi: 'chaahiye', type: 'Modalverb (Konjunktiv II)' },
      { w: 'Universitäten', role: 'plain', en: 'universities', hi: 'universities', type: 'Noun · plural' },
      { w: 'KI', role: 'plain', en: 'AI', hi: 'AI', type: 'Noun · fem.' },
      { w: 'verantwortungsvoll', role: 'plain', en: 'responsibly', hi: 'zimmedaari se', type: 'Adjective' },
      { w: 'einsetzen', role: 'plain', en: 'use (Satzende)', hi: 'use karna chaahiye (Satzende)', type: 'Verb · Satzende' },
      { w: '.', plain: true },
      { w: 'Dem', role: 'r-agree', en: '(part of fixed agreement expression)', hi: '(fixed agreement expression ka hissa)', type: 'Pronomen · Dat.' },
      { w: 'kann', role: 'r-agree', en: 'can (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Modalverb' },
      { w: 'man', role: 'r-agree', en: 'one (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'zustimmen', role: 'r-agree', en: 'agree (Satzende, fixed expression)', hi: 'sehmat ho sakte hain (Satzende, fixed expression)', type: 'Verb · Satzende' },
      { w: ',', plain: true },
      { w: 'da', role: 'plain', en: 'since', hi: 'kyunki', type: 'Konjunktion' },
      { w: 'Transparenz', role: 'plain', en: 'transparency', hi: 'paardarshita', type: 'Noun · fem.' },
      { w: 'Vertrauen', role: 'plain', en: 'trust (Satzende)', hi: 'vishvaas (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'schafft', role: 'plain', en: 'creates (Satzende)', hi: 'banaati hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In my estimation, universities should use AI responsibly. One can agree with that, since transparency creates trust.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_066_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meiner Meinung nach spart Homeoffice enorm viel Zeit — kein Pendeln mehr.', en: 'Timo, in my opinion home office saves an enormous amount of time — no more commuting.' },
      { id: 'B2_066_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das stimmt zwar, aber dabei übersiehst du, dass viele zu Hause schlechter konzentriert arbeiten.', en: 'That\'s true, but you\'re overlooking that many people concentrate worse at home.' },
      { id: 'B2_066_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ein fairer Punkt. Trotzdem überwiegen für mich die Vorteile.', en: 'A fair point. Still, for me the advantages outweigh it.' },
      { id: 'B2_066_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielleicht kommt es einfach auf die Person an.', en: 'Maybe it just depends on the person.' }
    ],
    transcript: 'Timo, meiner Meinung nach spart Homeoffice enorm viel Zeit — kein Pendeln mehr. Das stimmt zwar, aber dabei übersiehst du, dass viele zu Hause schlechter konzentriert arbeiten. Ein fairer Punkt. Trotzdem überwiegen für mich die Vorteile. Vielleicht kommt es einfach auf die Person an.',
    translation: 'Timo, in my opinion home office saves an enormous amount of time — no more commuting. That\'s true, but you\'re overlooking that many people concentrate worse at home. A fair point. Still, for me the advantages outweigh it. Maybe it just depends on the person.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meiner' },
      { w: 'Meinung' },
      { w: 'nach' },
      { w: 'spart' },
      { w: 'Homeoffice' },
      { w: 'enorm' },
      { w: 'viel' },
      { w: 'Zeit' },
      { w: '—', plain: true },
      { w: 'kein' },
      { w: 'Pendeln' },
      { w: 'mehr' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'stimmt' },
      { w: 'zwar' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'dabei' },
      { w: 'übersiehst' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'viele' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: 'schlechter' },
      { w: 'konzentriert' },
      { w: 'arbeiten' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'fairer' },
      { w: 'Punkt' },
      { w: '.', plain: true },
      { w: 'Trotzdem' },
      { w: 'überwiegen' },
      { w: 'für' },
      { w: 'mich' },
      { w: 'die' },
      { w: 'Vorteile' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: 'kommt' },
      { w: 'es' },
      { w: 'einfach' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Person' },
      { w: 'an' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was spart Homeoffice laut Katrin?', qEn: 'What does Katrin argue home office saves?', options: ['Geld', 'Zeit', 'Energie', 'Papier'], optionsEn: ['money', 'time', 'energy', 'paper'], answer: 1,
        explain: '"… Homeoffice spart enorm viel Zeit."' },
      { q: 'Welchen Gegenpunkt bringt Timo ein?', qEn: 'What counterpoint does Timo raise?', options: ['Es ist zu teuer.', 'Viele konzentrieren sich zu Hause schlechter.', 'Es ist unsicher.', 'Es gefällt niemandem.'], optionsEn: ['It is too expensive.', 'Many concentrate worse at home.', 'It is uncertain.', 'Nobody likes it.'], answer: 1,
        explain: '"… viele zu Hause schlechter konzentriert arbeiten."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege lobt Homeoffice wegen des Pendelns. Antworte.", taskEn: "Your colleague praises working from home because of commuting. Answer.", de: "Das stimmt zwar, aber dabei übersiehst du die Ablenkung zu Hause.", en: "That's true, but you're overlooking the distractions at home." },
    { task: "Er fragt nach deiner Ansicht zum Homeoffice.", taskEn: "He asks your view on working from home.", de: "Meiner Ansicht nach überwiegen die Vorteile, weil ich konzentrierter arbeite.", en: "In my view the advantages outweigh, because I work more focused." },
    { task: "Eine Kollegin stimmt dir zu. Bestätige sie.", taskEn: "A colleague agrees with you. Confirm her.", de: "Da stimme ich dir zu, so sehe ich das auch.", en: "I agree with you there, that's how I see it too." },
    { task: "Deine Chefin fragt, wie du deinen Standpunkt begründest.", taskEn: "Your boss asks how you justify your position.", de: "Ich begründe das mit den Zahlen aus dem letzten Quartal.", en: "I justify it with the figures from the last quarter." },
    { task: "Rollenspiel: Ihr diskutiert Homeoffice im Team.", taskEn: "Role-play: you discuss working from home in the team.", de: "Ich bin dafür, weil wir Zeit sparen. — Ich sehe das anders, mir fehlt der Kontakt.", en: "I'm in favour because we save time. — I see it differently, I miss the contact." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Opinion essay (220 words): Write an essay with a clear standpoint, supporting reasons, examples, and a balanced conclusion.\n\nTASK 2 — Discussion essay (8-10 sentences): Present one main opinion, one opposing opinion, and your own conclusion, using logical paragraph structure.',
    starters: ['Ich bin der Meinung, dass ...', 'Meiner Meinung nach ...'],
    placeholder: 'Ich bin der Meinung, dass KI Vorteile bietet, weil sie personalisiertes Lernen ermöglicht. Zum Beispiel ...',
    minWords: 220
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence politely disagrees?',
      options: ['Ich sehe das anders.', 'Du hast unrecht.', 'Das ist falsch.'],
      answer: 0,
      explain: '"Ich sehe das anders" disagrees respectfully; the other two are too blunt for polite B2 discussion.'
    },
    gap: {
      sentence: ['Ich bin der ', ', dass KI Vorteile bietet.'],
      gaps: [ { answer: 'Meinung', accepts: ['Meinung'] } ],
      explain: '"Ich bin der Meinung, dass..." is the standard fixed opinion expression (Genitiv article "der").'
    },
    match: {
      q: 'Match each expression to its function.',
      pairs: [
        { noun: 'Meiner Meinung nach ...', art: 'Opinion' },
        { noun: 'weil ...', art: 'Reason' },
        { noun: 'Zum Beispiel ...', art: 'Example' },
        { noun: 'Deshalb komme ich zu dem Schluss ...', art: 'Conclusion' }
      ]
    },
    builder: {
      target: 'Build: "I am of the opinion that AI offers advantages." (opinion expression)',
      bank: ['Ich', 'bin', 'der', 'Meinung', ',', 'dass', 'KI', 'Vorteile', 'bietet', '.'],
      answer: ['Ich', 'bin', 'der', 'Meinung', ',', 'dass', 'KI', 'Vorteile', 'bietet', '.'],
      roles: { 'Ich': 'r-opinion', 'bin': 'r-opinion', 'der': 'r-opinion', 'Meinung': 'r-opinion' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin Meinung, dass KI gut ist.',
      right: 'Ich bin der Meinung, dass KI gut ist.',
      explain: '"Meinung" needs the Genitiv article "der" in this fixed expression.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the four-step structure of a strong B2 argument?', options: ['Opinion + Reason + Example + Conclusion', 'Question + Answer + Fact + Opinion', 'Introduction + Body + Body + Ending'], answer: 0,
      explain: 'This is the core argument-building model taught in this chapter.' },
    { q: 'Which expression states an opinion formally?', options: ['Meines Erachtens ...', 'Ich denke ...', 'Ich glaube ...'], answer: 0,
      explain: '"Meines Erachtens" is the most formal opinion expression among these options.' },
    { q: 'Which expression politely disagrees?', options: ['Ich sehe das anders.', 'Ich stimme dir zu.', 'Da hast du recht.'], answer: 0,
      explain: 'The other two options express agreement, not disagreement.' },
    { q: 'Is "Ich denke, weil ..." a complete argument?', options: ['No — it is missing the "dass" clause stating the claim', 'Yes, perfectly complete', 'Only in spoken German'], answer: 0,
      explain: 'An opinion needs "Ich denke, dass X, weil Y" — not "weil" immediately after "denke".' },
    { q: 'What should a balanced argument acknowledge?', options: ['Other perspectives / counterarguments', 'Only the speaker\'s own view', 'Nothing — just state facts'], answer: 0,
      explain: 'Good arguments consider Standpoint → Counterargument → Response → Conclusion.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-opinion', html: 'Opinion + Reason + Example + Conclusion = a strong B2 argument. Ich bin der Meinung, dass...; weil...; zum Beispiel...; deshalb komme ich zu dem Schluss, dass...' },
    { c: 'r-agree', html: 'Agree naturally (Ich stimme dir zu; Da hast du recht) and disagree politely (Ich sehe das anders; Allerdings...; Andererseits...) — never bluntly.' },
    { c: 'r-conclusion', html: 'A balanced argument acknowledges the other perspective before reaching its own logical conclusion.' }
  ],
  revisionTips: [
    'For every opinion you express, practise adding a reason, an example, and a conclusion using the four-step model.',
    'Scan a discussion article for opinion, agreement, and disagreement expressions, and note their register (neutral, formal, academic).',
    'Practise disagreeing politely with a statement using at least three different softening expressions (Allerdings, Andererseits, Ich sehe das anders).'
  ]
};

window.CHAPTER = CHAPTER;
