/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 11
   "Nebensatz mit wenn"  (conditions, habits & future events; verb
   to the end; inversion after a fronted wenn-clause). Teaches ONLY
   wenn. No als (past), no obwohl, no falls.
   Vocabulary source: uploaded chapter-11 list (~57 items;
   graduation / celebration / emotion / farewell theme). Recycles
   Ch.4-5 (weil/dass word order), Ch.6 (modal Pr\u00e4t.), Ch.7 (Dativ
   possessives), Ch.8-9 (Komparativ, als/wie) and A1.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "ausltauschen" \u2192 austauschen (to exchange)
   • "weglfahren" \u2192 wegfahren (to leave / drive off)
   • "die Schult\u00fcte - etwa: candy cone" kept as die Schult\u00fcte, the
     German first-day-of-school cone of sweets (glossed clearly).
   • "stehen - to be" glossed as stehen = to stand; (auf der Karte)
     stehen = to be written / say.
============================================================ */
const CHAPTER = {
  id: 'a2-11-wenn',
  phase: 'A2 · Phase 2',
  number: 11,
  title: 'Nebensatz mit wenn',
  titleEn: 'Subordinate Clauses with wenn',
  description: 'One little word covers three everyday jobs: a condition (if), a repeated action (whenever) and a future plan (when). And it behaves exactly like weil and dass \u2014 wenn sends the conjugated verb to the end of its clause. Wenn ich Zeit habe, lerne ich Deutsch. Put the wenn-clause first and the main clause flips its verb to the front: verb, comma, verb. Learn one move and you can talk about conditions, habits and plans.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 12, title: 'Reflexive Verben', titleEn: 'Reflexive Verbs' , href: 'chapter-a2-12-reflexive-verben.html' },

  prevChapter: { number: 10, title: 'Goethe Mini 1', titleEn: 'Goethe Checkpoint 1', href: 'chapter-a2-10-goethe-mini-1.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'It\u2019s the last week before a long break \u2014 Lina is leaving, and Wiebke and Timo are planning a small farewell party for her. Every plan hangs on a condition: if it rains, if the weather holds, if there is time for a thank-you card. That makes it the perfect stage for wenn, the word that carries "if", "whenever" and "when" all at once \u2014 and it keeps the verb at the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear wenn as if, whenever and when \u2014 verb always last'
    ],
    scene: 'Abschiedsplanung vor den Ferien \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Wiebke'],
    dialogue: [
      { speaker: 'Wiebke', tokens: [
        { w: 'Wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn', why: 'wenn sends the verb to the end of the clause (this chapter).', ex: 'Wenn es regnet, feiern wir drinnen.', exEn: 'If it rains, we celebrate inside.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'regnet', role: 'r-verb', en: 'rains', hi: 'बारिश होती है', pron: 'RAYK-net', type: 'Verb · regnen (Satzende)' },
        { w: ',', plain: true },
        { w: 'feiern', role: 'r-verb', en: 'do we celebrate', hi: 'जश्न मनाते हैं', pron: 'FY-ern', type: 'Verb · feiern (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'drinnen', role: 'r-place', en: 'inside', hi: 'अंदर', pron: 'DRI-nen', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'If it rains, do we celebrate inside then?', hi: 'Agar baarish hoti hai, toh hum andar jashn manaayenge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'regnet', role: 'r-verb', en: 'rains', hi: 'बारिश होती है', pron: 'RAYK-net', type: 'Verb · regnen (Satzende)' },
        { w: ',', plain: true },
        { w: 'gehen', role: 'r-verb', en: 'do we go', hi: 'जाते हैं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Wohnheim', role: 'r-akkusativ', en: 'dorm', hi: 'छात्रावास', pron: 'VOHN-hym', type: 'Noun · neut.', why: 'das Wohnheim (this chapter).', ex: 'Wir gehen ins Wohnheim.', exEn: 'We go to the dorm.' },
        { w: '.', plain: true }
      ], en: 'Yes, if it rains, we go to the dorm.', hi: 'Haan, agar baarish hoti hai, toh hum chhatravaas jaate hain.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'schön', role: 'r-adjective', en: 'nice', hi: 'अच्छा', pron: 'shern', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'feiern', role: 'r-verb', en: 'do we celebrate', hi: 'जश्न मनाते हैं', pron: 'FY-ern', type: 'Verb · feiern (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'draußen', role: 'r-place', en: 'outside', hi: 'बाहर', pron: 'DROW-sen', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'Good. And if it is nice, do we celebrate outside?', hi: 'Achha. Aur agar mausam achha hai, toh hum bahar jashn manaayenge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'so', role: 'r-adverb', en: 'so', hi: 'इतना', pron: 'zo', type: 'Adverb' },
        { w: 'traurig', role: 'r-adjective', en: 'sad', hi: 'दुखी', pron: 'TROW-rikh', type: 'Adjective', why: 'traurig = sad (this chapter).', ex: 'Ich bin traurig.', exEn: 'I am sad.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'Lina', role: 'r-subject', en: 'Lina', hi: 'लीना', pron: 'LEE-na', type: 'Name · person' },
        { w: 'wegfährt', role: 'r-verb', en: 'is leaving', hi: 'जा रही है', pron: 'VAYK-fairt', type: 'Verb · wegfahren (Satzende)', why: 'wegfahren = to go away/depart (this chapter).', ex: 'Lina fährt weg.', exEn: 'Lina is going away.' },
        { w: '.', plain: true }
      ], en: 'Exactly! I am so sad that Lina is leaving.', hi: 'Bilkul! Main itna dukhi hoon ki Lina ja rahi hai.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'stolz', role: 'r-adjective', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective', why: 'stolz = proud (this chapter).', ex: 'Ich bin stolz auf sie.', exEn: 'I am proud of her.' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'sie', role: 'r-akkusativ', en: 'her', hi: 'उस पर', pron: 'zee', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'Me too. But I am also proud of her.', hi: 'Main bhi. Par mujhe uspar garv bhi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'machen', role: 'r-verb', en: 'let us make', hi: 'बनाते हैं', pron: 'MA-khen', type: 'Verb · machen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Dankeskarte', role: 'r-akkusativ', en: 'thank-you card', hi: 'धन्यवाद कार्ड', pron: 'DAN-kes-kar-tuh', type: 'Noun · fem.', why: 'die Dankeskarte (this chapter).', ex: 'Wir machen eine Dankeskarte.', exEn: 'We make a thank-you card.' },
        { w: '.', plain: true }
      ], en: 'If we have time, let us make a thank-you card.', hi: 'Agar humaare paas time hai, toh ek dhanyavaad card banaate hain.' },
      { speaker: 'Wiebke', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'tausend', role: 'r-akkusativ', en: 'a thousand', hi: 'हज़ार', pron: 'TOW-zent', type: 'Number' },
        { w: 'Dank', role: 'r-akkusativ', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Noun · masc.', why: 'tausend Dank = a thousand thanks (fixed phrase, this chapter).', ex: 'Tausend Dank, Lina!', exEn: 'A thousand thanks, Lina!' },
        { w: 'hinein', role: 'r-place', en: 'inside', hi: 'अंदर', pron: 'hi-NINE', type: 'Adverb · place' },
        { w: '.', plain: true }
      ], en: 'Good idea! I will write a thousand thanks inside.', hi: 'Achha vichaar! Main andar hazaar dhanyavaad likhungi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'will bring', hi: 'लाता हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)', lexicalUnit: 'mitbringen' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Feuerwerk', role: 'r-akkusativ', en: 'fireworks', hi: 'आतिशबाज़ी', pron: 'FOY-er-vairk', type: 'Noun · neut.', why: 'das Feuerwerk (this chapter).', ex: 'Ich bringe das Feuerwerk.', exEn: 'I bring the fireworks.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitbringen)', hi: 'साथ', pron: 'mit', type: 'Separable prefix · Satzende', lexicalUnit: 'mitbringen' },
        { w: '.', plain: true }
      ], en: 'I will bring the fireworks.', hi: 'Main aatishbaazi laata hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'You already send the verb to the end after <span class="de r-weil">weil</span> and <span class="de r-dass">dass</span>. <span class="de r-wenn">wenn</span> works exactly the same way \u2014 and it does three everyday jobs at once. As a <strong>condition</strong> it means <em>if</em>: <span class="de">Wenn ich Zeit habe, lerne ich Deutsch.</span> For a <strong>repeated action</strong> it means <em>whenever</em>: <span class="de">Immer wenn es regnet, bleiben wir zu Hause.</span> For a <strong>future event</strong> it means <em>when</em> (with the present tense): <span class="de">Ich rufe dich an, wenn ich ankomme.</span> In every case the conjugated verb goes to the <strong>end</strong> of the wenn-clause. And if you put the wenn-clause <strong>first</strong>, the main clause flips its verb to the front \u2014 verb, comma, verb: <span class="de">Wenn ich frei <span class="r-verb">habe</span>, <span class="r-verb">gehe</span> ich spazieren.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is the SUBORDINATE CLAUSE with wenn (condition = if / habit = whenever / future = when). ONLY wenn \u2014 do not suggest als, falls or obwohl. ' +
    'The learner wrote conditions/plans/routines below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- After wenn, the CONJUGATED verb goes to the very END of that clause: "Wenn ich Zeit habe, \u2026" (habe last), "\u2026, wenn ich ankomme." (ankomme last).\n' +
    '- A comma separates the two clauses.\n' +
    '- If the wenn-clause comes FIRST, the main clause begins with its verb (inversion): "Wenn es regnet, bleiben wir zu Hause." (verb, comma, verb). If the main clause comes first, normal order: "Ich bleibe zu Hause, wenn es regnet."\n' +
    '- German uses the PRESENT tense for future after wenn: "Ich rufe dich an, wenn ich ankomme." Do not add "werden" inside the wenn-clause.\n' +
    '- wenn = condition/whenever/future; weil = reason; dass = statement/report. Do not swap them.\n' +
    '- A short spoken answer may drop the main clause ("Wenn ich Zeit habe."). Do not treat separable verbs as errors: the prefix rejoins at the end (ankommen \u2192 ankomme). If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>wenn check:</b> one sentence on verb-final order and (if used) the inversion after a fronted wenn-clause.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You place the verb at the end and flip the main clause like a native \u2014 wenn is yours. Next: turn actions back on yourself with <span class="de">Reflexive Verben</span>.',
    mid: 'Good. Re-read the weil/dass/wenn table once, and the inversion card (verb, comma, verb), then continue.',
    low: 'Worth another pass \u2014 wenn = if / whenever / when, and the verb always goes last. If the wenn-clause is first, the main clause starts with its verb. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Wenn', role: 'r-wenn' }, { w: 'ich', role: 'r-subject' },
    { w: 'Zeit', role: 'r-object' }, { w: 'habe', role: 'r-verb' },
    { w: 'lerne', role: 'r-verb' }, { w: 'ich', role: 'r-subject' },
    { w: 'Deutsch', role: 'r-object' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See wenn do three jobs \u2014 if, whenever, when \u2014 verb always last.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Planning Wiebke\u2019s farewell \u2014 every plan hangs on a wenn.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the celebration/emotion words: die Feier, das Gef\u00fchl, stolz, aufgeregt, wegfahren.' },
    { id: 'grammar',    label: 'wenn',       tag: 'core',
      objective: 'Master verb-final order, inversion, future-with-present, and weil/dass/wenn.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a party invitation \u2014 conditions and plans in every line.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each condition in a quick plan-making conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Answer "Was machst du, wenn \u2026?" out loud with full wenn-sentences.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write conditions, routines and plans with wenn (and inversion).' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill verb-final order, inversion and weil-vs-dass-vs-wenn.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s celebration and emotion words \u2014 die Feier, das Gef\u00fchl, die Laune, stolz, aufgeregt, wegfahren \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'wenn word-order drills, inversion practice, weil/dass/wenn sorting, and a plans-and-routines task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The three meanings of wenn, verb-final order, the inversion rule, the weil/dass/wenn table, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wenn ich Zeit habe, \u2026', text: 'Set a condition (if) with wenn' },
    { de: 'Immer wenn \u2026', text: 'Describe a repeated action (whenever)' },
    { de: '\u2026, wenn ich ankomme.', text: 'Talk about the future with the present' },
    { de: 'Wenn \u2026, gehe ich \u2026', text: 'Flip the main clause after a fronted wenn' },
    { de: 'weil / dass / wenn', text: 'Choose reason, statement or condition' }
  ],

  // ---------- Vocabulary (57 items) ----------
  vocab: [
    // ===== Celebration & farewell =====
    { de: 'Feier', art: 'die', gender: 'f', plural: 'Feiern', pos: 'noun', en: 'party, celebration', hi: 'समारोह', ex: 'Wenn alle dabei sind, wird die Feier sch\u00f6n.', exEn: 'If everyone is there, the party will be lovely.' },
    { de: 'Abschied', art: 'der', gender: 'm', plural: 'Abschiede', pos: 'noun', en: 'farewell, goodbye', hi: 'विदाई', ex: 'Der Abschied ist immer schwer.', exEn: 'The farewell is always hard.' },
    { de: 'Feuerwerk', art: 'das', gender: 'n', plural: 'Feuerwerke', pos: 'noun', en: 'fireworks', hi: 'आतिशबाज़ी', ex: 'Wenn es dunkel wird, gibt es ein Feuerwerk.', exEn: 'When it gets dark, there\u2019s a fireworks display.' },
    { de: 'Karte', art: 'die', gender: 'f', plural: 'Karten', pos: 'noun', en: 'card', hi: 'कार्ड', ex: 'Auf der Karte steht \u201eAlles Gute\u201c.', exEn: 'On the card it says "All the best".' },
    { de: 'Dankeskarte', art: 'die', gender: 'f', plural: 'Dankeskarten', pos: 'noun', en: 'thank-you card', hi: 'धन्यवाद कार्ड', ex: 'Ich schreibe eine Dankeskarte, wenn ich Zeit habe.', exEn: 'I\u2019ll write a thank-you card when I have time.' },
    { de: 'Geb\u00e4ck', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'pastries, baked goods', hi: 'पेस्ट्री', ex: 'Wenn wir feiern, backe ich Geb\u00e4ck.', exEn: 'When we celebrate, I bake pastries.' },
    { de: 'Medaille', art: 'die', gender: 'f', plural: 'Medaillen', pos: 'noun', en: 'medal', hi: 'पदक', ex: 'Wenn er gewinnt, bekommt er eine Medaille.', exEn: 'If he wins, he gets a medal.' },
    { de: 'Ring', art: 'der', gender: 'm', plural: 'Ringe', pos: 'noun', en: 'ring', hi: 'अंगूठी', ex: 'Der Ring war ein Geschenk von meiner Oma.', exEn: 'The ring was a gift from my grandma.' },
    { de: 'Schult\u00fcte', art: 'die', gender: 'f', plural: 'Schult\u00fcten', pos: 'noun', en: 'school cone (first-day cone of sweets)', hi: 'स्कूल शंकु (मिठाई का)', ex: 'Am ersten Schultag bekommt jedes Kind eine Schult\u00fcte.', exEn: 'On the first school day every child gets a school cone.' },
    { de: 'Schulranzen', art: 'der', gender: 'm', plural: 'Schulranzen', pos: 'noun', en: 'school bag, satchel', hi: 'स्कूल बैग', ex: 'Der neue Schulranzen ist gr\u00f6\u00dfer als der alte.', exEn: 'The new school bag is bigger than the old one.' },
    // ===== Emotions & feelings =====
    { de: 'Gef\u00fchl', art: 'das', gender: 'n', plural: 'Gef\u00fchle', pos: 'noun', en: 'feeling', hi: 'एहसास', ex: 'Wenn ich Abschied nehme, sind die Gef\u00fchle stark.', exEn: 'When I say goodbye, the feelings are strong.' },
    { de: 'Emotion', art: 'die', gender: 'f', plural: 'Emotionen', pos: 'noun', en: 'emotion', hi: 'भावना', ex: 'Bei einer Feier zeigt man viele Emotionen.', exEn: 'At a party you show many emotions.' },
    { de: 'Freude', art: 'die', gender: 'f', plural: 'Freuden', pos: 'noun', en: 'joy', hi: 'खुशी', ex: 'Wenn du kommst, ist die Freude gro\u00df.', exEn: 'When you come, the joy is great.' },
    { de: 'Bedauern', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'regret', hi: 'खेद', ex: 'Mit Bedauern sage ich Tsch\u00fcss.', exEn: 'With regret I say goodbye.' },
    { de: 'Laune', art: 'die', gender: 'f', plural: 'Launen', pos: 'noun', en: 'mood', hi: 'मनोदशा', ex: 'Wenn die Sonne scheint, ist meine Laune super.', exEn: 'When the sun shines, my mood is great.' },
    { de: 'Ahnung', art: 'die', gender: 'f', plural: 'Ahnungen', pos: 'noun', en: 'idea, clue', hi: 'अंदाज़ा', ex: 'Ich habe keine Ahnung, wenn du so fragst.', exEn: 'I have no idea when you ask like that.' },
    { de: 'aufgeregt', pos: 'adjective', en: 'excited, nervous', hi: 'उत्साहित', ex: 'Ich bin aufgeregt, wenn ich daran denke.', exEn: 'I\u2019m excited when I think about it.' },
    { de: 'stolz', pos: 'adjective', en: 'proud', hi: 'गर्वित', ex: 'Wenn ich bestehe, bin ich stolz.', exEn: 'When I pass, I\u2019m proud.' },
    { de: 'traurig', pos: 'adjective', en: 'sad', hi: 'उदास', ex: 'Wenn du wegf\u00e4hrst, bin ich traurig.', exEn: 'When you leave, I\u2019m sad.' },
    { de: 'emotional', pos: 'adjective', en: 'emotional', hi: 'भावुक', ex: 'Ein Abschied ist immer emotional.', exEn: 'A farewell is always emotional.' },
    { de: 'unangenehm', pos: 'adjective', en: 'uncomfortable, unpleasant', hi: 'असहज', ex: 'Wenn niemand redet, ist es unangenehm.', exEn: 'When nobody talks, it\u2019s uncomfortable.' },
    { de: 'fremd', pos: 'adjective', en: 'foreign, alien, strange', hi: 'अनजान', ex: 'Am Anfang war alles fremd.', exEn: 'At the beginning everything felt strange.' },
    { de: 'wahr', pos: 'adjective', en: 'true', hi: 'सच', ex: 'Wenn das wahr ist, freue ich mich.', exEn: 'If that\u2019s true, I\u2019m glad.' },
    { de: 'ordentlich', pos: 'adjective', en: 'tidy', hi: 'व्यवस्थित', ex: 'Wenn ich Zeit habe, ist mein Zimmer ordentlich.', exEn: 'When I have time, my room is tidy.' },
    { de: 'unordentlich', pos: 'adjective', en: 'messy, untidy', hi: 'अव्यवस्थित', ex: 'Nach der Feier ist alles unordentlich.', exEn: 'After the party everything is messy.' },
    { de: 'unwichtig', pos: 'adjective', en: 'unimportant', hi: 'महत्वहीन', ex: 'Das Geschenk ist unwichtig, wenn du kommst.', exEn: 'The gift is unimportant if you come.' },
    // ===== Small words / connectors =====
    { de: 'dann', pos: 'adverb', en: 'then', hi: 'तब', ex: 'Wenn es regnet, dann bleiben wir zu Hause.', exEn: 'If it rains, then we\u2019ll stay home.' },
    { de: 'au\u00dferdem', pos: 'adverb', en: 'besides, moreover', hi: 'इसके अलावा', ex: 'Au\u00dferdem bringe ich Musik mit, wenn wir feiern.', exEn: 'Besides, I\u2019ll bring music when we celebrate.' },
    { de: 'inzwischen', pos: 'adverb', en: 'meanwhile, by now', hi: 'इस बीच', ex: 'Inzwischen kenne ich alle im Kurs.', exEn: 'By now I know everyone in the course.' },
    { de: 'niemand', pos: 'pronoun', en: 'nobody', hi: 'कोई नहीं', ex: 'Wenn niemand kommt, ist die Feier traurig.', exEn: 'If nobody comes, the party is sad.' },
    { de: 'kostenlos', pos: 'adjective', en: 'free (of charge)', hi: 'मुफ़्त', ex: 'Der Eintritt ist kostenlos, wenn du eine Karte hast.', exEn: 'Entry is free if you have a card.' },
    { de: 'weltweit', pos: 'adjective', en: 'worldwide, global', hi: 'विश्वव्यापी', ex: 'Die Regatta ist weltweit bekannt.', exEn: 'The regatta is known worldwide.' },
    { de: 'alles Gute', pos: 'phrase', en: 'all the best', hi: 'शुभकामनाएँ', ex: 'Alles Gute, wenn du wegf\u00e4hrst!', exEn: 'All the best when you leave!' },
    { de: 'tausend Dank', pos: 'phrase', en: 'thanks a million', hi: 'हज़ार धन्यवाद', ex: 'Tausend Dank f\u00fcr die Karte!', exEn: 'Thanks a million for the card!' },
    { de: 'dabei sein', pos: 'phrase', en: 'to be present, to be there', hi: 'मौजूद होना', ex: 'Wenn alle dabei sind, wird es sch\u00f6n.', exEn: 'If everyone is there, it\u2019ll be lovely.' },
    // ===== Verbs =====
    { de: 'wegfahren', pos: 'verb', en: 'to leave, to drive off (separable)', hi: 'चला जाना', ex: 'Wenn Max wegf\u00e4hrt, feiern wir.', exEn: 'When Max leaves, we celebrate.', conj: { praesens: 'f\u00e4hrt weg', praeteritum: 'fuhr weg', perfekt: 'ist weggefahren' } },
    { de: 'bestehen', pos: 'verb', en: 'to pass (an exam)', hi: 'पास होना', ex: 'Wenn ich lerne, bestehe ich die Pr\u00fcfung.', exEn: 'If I study, I\u2019ll pass the exam.', conj: { praesens: 'besteht', praeteritum: 'bestand', perfekt: 'hat bestanden' } },
    { de: 'hoffen', pos: 'verb', en: 'to hope', hi: 'उम्मीद करना', ex: 'Ich hoffe, dass du dabei bist.', exEn: 'I hope that you\u2019re there.', conj: { praesens: 'hofft', praeteritum: 'hoffte', perfekt: 'hat gehofft' } },
    { de: 'entscheiden', pos: 'verb', en: 'to decide', hi: 'निर्णय लेना', ex: 'Wenn du willst, entscheiden wir zusammen.', exEn: 'If you want, we\u2019ll decide together.', conj: { praesens: 'entscheidet', praeteritum: 'entschied', perfekt: 'hat entschieden' } },
    { de: 'unterrichten', pos: 'verb', en: 'to teach', hi: 'पढ़ाना', ex: 'Frau Weber unterrichtet, wenn wir Fragen haben.', exEn: 'Frau Weber teaches whenever we have questions.', conj: { praesens: 'unterrichtet', praeteritum: 'unterrichtete', perfekt: 'hat unterrichtet' } },
    { de: 'gew\u00f6hnen', pos: 'verb', en: 'to get used to (sich gew\u00f6hnen an)', hi: 'अभ्यस्त होना', ex: 'Man gew\u00f6hnt sich daran, wenn man oft \u00fcbt.', exEn: 'You get used to it when you practise often.', conj: { praesens: 'gew\u00f6hnt', praeteritum: 'gew\u00f6hnte', perfekt: 'hat gew\u00f6hnt' } },
    { de: 'langweilen', pos: 'verb', en: 'to be bored (sich langweilen)', hi: 'ऊबना', ex: 'Wenn niemand da ist, langweile ich mich.', exEn: 'When nobody\u2019s there, I get bored.', conj: { praesens: 'langweilt', praeteritum: 'langweilte', perfekt: 'hat gelangweilt' } },
    { de: 'austauschen', pos: 'verb', en: 'to exchange (separable)', hi: 'आदान-प्रदान करना', ex: 'Wir tauschen Nummern aus, wenn wir uns treffen.', exEn: 'We exchange numbers when we meet.', conj: { praesens: 'tauscht aus', praeteritum: 'tauschte aus', perfekt: 'hat ausgetauscht' } },
    { de: 'aussprechen', pos: 'verb', en: 'to express; to pronounce (separable)', hi: 'व्यक्त करना', ex: 'Wenn ich traurig bin, spreche ich es aus.', exEn: 'When I\u2019m sad, I say it out loud.', conj: { praesens: 'spricht aus', praeteritum: 'sprach aus', perfekt: 'hat ausgesprochen' } },
    { de: 'strukturieren', pos: 'verb', en: 'to structure (something)', hi: 'व्यवस्थित करना', ex: 'Wenn ich lerne, strukturiere ich meine Notizen.', exEn: 'When I study, I structure my notes.', conj: { praesens: 'strukturiert', praeteritum: 'strukturierte', perfekt: 'hat strukturiert' } },
    { de: 'stehen', pos: 'verb', en: 'to stand; (auf der Karte) to be written', hi: 'खड़ा होना; लिखा होना', ex: 'Was steht auf der Einladung?', exEn: 'What does the invitation say?', conj: { praesens: 'steht', praeteritum: 'stand', perfekt: 'hat gestanden' } },
    // ===== People / places / things =====
    { de: 'Club', art: 'der', gender: 'm', plural: 'Clubs', pos: 'noun', en: 'club', hi: 'क्लब', ex: 'Wenn wir Zeit haben, gehen wir in den Club.', exEn: 'When we have time, we go to the club.' },
    { de: 'Segler', art: 'der', gender: 'm', plural: 'Segler', pos: 'noun', en: 'sailor', hi: 'नाविक', ex: 'Als Segler f\u00e4hrt Max zu einer Regatta.', exEn: 'As a sailor, Max travels to a regatta.' },
    { de: 'Segelregatta', art: 'die', gender: 'f', plural: 'Segelregatten', pos: 'noun', en: 'sailing regatta', hi: 'नौका दौड़', ex: 'Die Segelregatta ist weltweit bekannt.', exEn: 'The sailing regatta is known worldwide.' },
    { de: 'Nation', art: 'die', gender: 'f', plural: 'Nationen', pos: 'noun', en: 'nation', hi: 'राष्ट्र', ex: 'Bei der Regatta treffen sich viele Nationen.', exEn: 'At the regatta many nations meet.' },
    { de: 'Tango', art: 'der', gender: 'm', plural: 'Tangos', pos: 'noun', en: 'tango', hi: 'टैंगो', ex: 'Wenn Musik spielt, tanze ich Tango.', exEn: 'When music plays, I dance tango.' },
    { de: 'Wohnheim', art: 'das', gender: 'n', plural: 'Wohnheime', pos: 'noun', en: 'dormitory, hall of residence', hi: 'छात्रावास', ex: 'Ich wohne im Wohnheim, wenn ich studiere.', exEn: 'I live in the dorm when I study.' },
    { de: 'W\u00e4hrung', art: 'die', gender: 'f', plural: 'W\u00e4hrungen', pos: 'noun', en: 'currency', hi: 'मुद्रा', ex: 'Wenn du reist, brauchst du eine andere W\u00e4hrung.', exEn: 'When you travel, you need a different currency.' },
    { de: 'F\u00fchrerschein', art: 'der', gender: 'm', plural: 'F\u00fchrerscheine', pos: 'noun', en: 'driver\u2019s licence', hi: 'ड्राइविंग लाइसेंस', ex: 'Wenn ich achtzehn bin, mache ich den F\u00fchrerschein.', exEn: 'When I\u2019m eighteen, I\u2019ll get my driver\u2019s licence.' },
    { de: 'Hauptthema', art: 'das', gender: 'n', plural: 'Hauptthemen', pos: 'noun', en: 'main topic', hi: 'मुख्य विषय', ex: 'Das Hauptthema heute ist \u201ewenn\u201c.', exEn: 'The main topic today is "wenn".' },
    { de: 'Argentinien', pos: 'noun', en: 'Argentina', hi: 'अर्जेंटीना', ex: 'Wenn Max ankommt, ist er in Argentinien.', exEn: 'When Max arrives, he\u2019s in Argentina.' },
    { de: 'Indonesien', pos: 'noun', en: 'Indonesia', hi: 'इंडोनेशिया', ex: 'Wenn ich reise, m\u00f6chte ich nach Indonesien.', exEn: 'When I travel, I\u2019d like to go to Indonesia.' }
  ],

  // ---------- wenn (rule cards) ----------
  grammar: [
    {
      title: 'wenn does three jobs \u2014 verb still last',
      goldenRule: 'One word, three jobs \u2014 <b>if</b>, <b>whenever</b>, <b>when</b>. In all three the verb goes <b>last</b>.',
      formula: [
        'condition:  <b>Wenn</b> ich Zeit <b>habe</b>, \u2026',
        'whenever:   <b>Immer wenn</b> es <b>regnet</b>, \u2026',
        'future:     \u2026, <b>wenn</b> ich <b>ankomme</b>.   (present tense!)'
      ],
      memoryTrick: 'Teen matlab, ek word order. Aur future ke liye bhi <b>present</b> tense chalta hai \u2014 English "when I arrive" jaisa, <b>werden</b> ki zaroorat nahi.',
      recap: [
        '<b>wenn</b> = if / whenever / when \u2014 verb always last.',
        'Add <b>immer</b> for "whenever".',
        'For the future, keep the <b>present</b> tense inside the clause.'
      ],
      body: [
        'Like <span class="de r-weil">weil</span> and <span class="de r-dass">dass</span>, <span class="de r-wenn">wenn</span> opens a Nebensatz and sends the <strong>conjugated verb to the end</strong>. One word, three everyday meanings:'
      ],
      table: {
        head: ['Meaning', 'Example', 'English'],
        rows: [
          ['condition (if)', '<span class="de">Wenn ich Zeit <span class="r-verb">habe</span>, lerne ich Deutsch.</span>', 'If I have time \u2026'],
          ['repeated (whenever)', '<span class="de">Immer wenn es <span class="r-verb">regnet</span>, bleiben wir zu Hause.</span>', 'Whenever it rains \u2026'],
          ['future (when)', '<span class="de">Ich rufe dich an, wenn ich <span class="r-verb">ankomme</span>.</span>', 'when I arrive'],
          ['condition (if)', '<span class="de">Wenn du <span class="r-verb">willst</span>, gehen wir spazieren.</span>', 'If you want \u2026']
        ]
      },
      note: 'For a repeated action, add <b>immer</b>: <b>immer wenn</b> = whenever. For the future, German keeps the <b>present tense</b> inside the wenn-clause \u2014 no werden needed.',
      hinglish: '<b>wenn</b> ke 3 common uses hain: condition, baar-baar hone wali situation (<b>immer wenn</b> = jab bhi), aur future. Teeno cases mein verb sentence ke end mein aata hai. Future ke liye bhi Pr\u00e4sens use kar sakte ho \u2014 <b>werden</b> zaroori nahi hai.'
    },
    {
      title: 'Fronted wenn-clause \u2192 inversion (verb, comma, verb)',
      goldenRule: 'Put the whole wenn-clause in slot 1, and the main clause must start with its <b>verb</b>.',
      formula: [
        '<b>Wenn</b> ich Zeit <b>habe</b>, <b>lerne</b> ich Deutsch.',
        '                     \u2191 verb    \u2191 verb'
      ],
      memoryTrick: 'Comma ke dono taraf ek-ek verb milte hain: <b>habe, lerne</b>. Yeh do verb ka jodi hi signal hai ki inversion sahi hua.',
      body: [
        'You can put the wenn-clause <strong>first</strong>. Then the whole wenn-clause fills position 1, so the main clause must start with its <strong>verb</strong>. The result is two verbs meeting at the comma.'
      ],
      table: {
        head: ['Order', 'Sentence'],
        rows: [
          ['main first', '<span class="de">Ich lerne Deutsch, wenn ich Zeit <span class="r-verb">habe</span>.</span>'],
          ['wenn first', '<span class="de">Wenn ich Zeit <span class="r-verb">habe</span>, <span class="r-verb">lerne</span> ich Deutsch.</span>'],
          ['main first', '<span class="de">Wir bleiben zu Hause, wenn es <span class="r-verb">regnet</span>.</span>'],
          ['wenn first', '<span class="de">Wenn es <span class="r-verb">regnet</span>, <span class="r-verb">bleiben</span> wir zu Hause.</span>']
        ]
      },
      note: 'Listen for the pattern <b>\u2026 Verb, Verb \u2026</b> across the comma: <span class="de">habe, lerne</span> / <span class="de">regnet, bleiben</span>. That double-verb is the sign you did the inversion right.',
      hinglish: 'Jab tum <b>wenn</b>-clause ko aage rakhte ho, to poori clause position 1 le leti hai \u2014 isliye main clause ko apne verb se shuru karna padta hai. Iska result yeh hota hai ki comma ke dono taraf ek-ek verb aa jaata hai: <b>habe, lerne</b>. Agar tumhe yeh do verb dikh rahe hain, to inversion sahi hua hai.'
    },
    {
      title: 'weil vs. dass vs. wenn',
      body: [
        'All three send the verb to the end \u2014 they differ only in <strong>meaning</strong>. Pick by what you want to say.'
      ],
      table: {
        head: ['Word', 'Job', 'Example'],
        rows: [
          ['<span class="de r-weil">weil</span>', 'reason (because)', '<span class="de">Ich bleibe, weil ich m\u00fcde <span class="r-verb">bin</span>.</span>'],
          ['<span class="de r-dass">dass</span>', 'statement (that)', '<span class="de">Ich glaube, dass es <span class="r-verb">regnet</span>.</span>'],
          ['<span class="de r-wenn">wenn</span>', 'condition / whenever / when', '<span class="de">Ich bleibe, wenn es <span class="r-verb">regnet</span>.</span>']
        ]
      },
      note: 'Quick guide: <b>Reason? \u2192 weil. Statement? \u2192 dass. Condition or "whenever"? \u2192 wenn.</b> The verb goes last in all three.',
      hinglish: 'Teeno connectors verb ko sentence ke end mein bhej dete hain \u2014 farak sirf matlab ka hai. <b>weil</b> reason batata hai, <b>dass</b> koi baat ya information report karta hai, aur <b>wenn</b> condition ya \u201cjab bhi\u201d wali situation batata hai. Isliye pehle yeh socho ki tum kya kehna chahte ho, phir connector chuno.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four wenn traps to avoid.' ],
      mistakes: [
        { wrong: 'Wenn ich habe Zeit, \u2026', right: 'Wenn ich Zeit habe, \u2026', why: 'The conjugated verb (habe) must go to the END of the wenn-clause.' },
        { wrong: 'Wenn ich komme, ich rufe dich an.', right: 'Wenn ich komme, rufe ich dich an.', why: 'After a fronted wenn-clause, the main clause starts with the verb (inversion): rufe ich.' },
        { wrong: 'Ich bleibe zu Hause, weil es regnet. (meaning "if")', right: 'Ich bleibe zu Hause, wenn es regnet.', why: 'For a condition use wenn, not weil. weil = reason, wenn = condition.' },
        { wrong: 'Wenn ich werde ankommen, rufe ich an.', right: 'Wenn ich ankomme, rufe ich an.', why: 'German uses the present tense for the future inside a wenn-clause \u2014 no werden.' }
      ],
      hinglish: 'Char galtiyan aksar hoti hain. Pehli, verb ko end mein rakhna bhool jaana \u2014 sahi hai <b>wenn ich Zeit habe</b>. Doosri, jab <b>wenn</b>-clause pehle aata hai to main clause verb se shuru hona chahiye: <b>rufe ich dich an</b>. Teesri, condition ke liye <b>wenn</b> chahiye, <b>weil</b> nahi. Aur chauthi, future ke liye bhi Pr\u00e4sens hi chalta hai \u2014 <b>wenn ich ankomme</b>, <b>werden</b> ke saath nahi.'
    },
    {
      title: 'Decision guide',
      body: [
        'Two questions choose your word and your order.'
      ],
      table: {
        head: ['Ask', 'Then'],
        rows: [
          ['Reason \u2192 weil \u00b7 statement \u2192 dass \u2192 condition/whenever \u2192 <b>wenn</b>', 'send the verb to the END'],
          ['Is the wenn-clause first?', 'yes \u2192 main clause starts with its <b>verb</b> (\u2026 Verb, Verb \u2026)']
        ]
      },
      note: 'Say it before you speak: <b>Condition or "whenever"? \u2192 wenn, verb last.</b> And if wenn comes first, <b>flip the main clause</b>.',
      hinglish: 'Do cheezein check karo. Pehle matlab dekho \u2014 reason ke liye <b>weil</b>, koi baat batane ke liye <b>dass</b>, aur condition ke liye <b>wenn</b>; teeno mein verb sentence ke end mein jaata hai. Uske baad dekho ki <b>wenn</b>-clause pehle hai ya nahi \u2014 agar pehle hai to main clause verb se shuru karna hoga.'
    }
  ],

  // ---------- Reading passage (Eine Einladung, clickable) ----------
  reading: {
    title: 'Eine Einladung',
    titleEn: 'An invitation',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Adjective', why: 'Liebe \u2026 (recycled \u2014 Briefe).', ex: 'Liebe Freunde,', exEn: 'Dear friends,' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्तों', pron: 'FROYN-duh', type: 'Noun \u00b7 plural', why: 'der Freund \u2192 die Freunde (recycled \u2014 Familie).', ex: 'Liebe Freunde', exEn: 'Dear friends' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-wenn', en: 'when', hi: 'जब', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'fronted wenn-clause \u2192 inversion (this chapter).', ex: 'Wenn Max wegf\u00e4hrt, \u2026', exEn: 'When Max leaves, \u2026' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition \u00b7 time' },
      { w: 'Freitag', role: 'r-time', en: 'Friday', hi: 'शुक्रवार', pron: 'FRY-tahk', type: 'Noun \u00b7 masc.', why: 'der Freitag (recycled \u2014 Wochentage).', ex: 'am Freitag', exEn: 'on Friday' },
      { w: 'wegf\u00e4hrt', role: 'r-verb', en: 'leaves', hi: 'चला जाता है', pron: 'VEK-fairt', type: 'Verb \u00b7 wegfahren', why: 'verb last in the wenn-clause (this chapter).', ex: 'wenn er wegf\u00e4hrt', exEn: 'when he leaves' },
      { w: ',', plain: true },
      { w: 'machen', role: 'r-verb', en: 'have', hi: 'करते हैं', pron: 'MA-khen', type: 'Verb \u00b7 machen', why: 'inversion: verb first after the fronted wenn-clause (this chapter).', ex: '\u2026, machen wir eine Feier.', exEn: '\u2026, we\u2019re having a party.' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'INE-uh', type: 'Article \u00b7 acc.' },
      { w: 'Feier', role: 'r-object', en: 'party', hi: 'समारोह', pron: 'FY-er', type: 'Noun \u00b7 fem.', why: 'die Feier (this chapter).', ex: 'eine Feier', exEn: 'a party' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'condition; verb last (this chapter).', ex: 'Wenn du Zeit hast, \u2026', exEn: 'If you have time, \u2026' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'Zeit', role: 'r-object', en: 'time', hi: 'समय', pron: 'tsite', type: 'Noun \u00b7 fem.', why: 'die Zeit (recycled \u2014 Zeit).', ex: 'Zeit haben', exEn: 'to have time' },
      { w: 'hast', role: 'r-verb', en: 'have', hi: 'हो', pron: 'hast', type: 'Verb \u00b7 haben', why: 'conjugated verb last (this chapter).', ex: '\u2026, wenn du Zeit hast.', exEn: '\u2026 if you have time.' },
      { w: ',', plain: true },
      { w: 'komm', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'kom', type: 'Imperativ \u00b7 kommen', why: 'inversion \u2014 here an imperative fills position 1 (this chapter).', ex: 'komm bitte', exEn: 'please come' },
      { w: 'bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Adverb' },
      { w: 'in', role: 'r-preposition', en: 'to', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'इस', pron: 'dayn', type: 'Article \u00b7 acc.' },
      { w: 'Club', role: 'r-object', en: 'club', hi: 'क्लब', pron: 'klup', type: 'Noun \u00b7 masc.', why: 'der Club (this chapter).', ex: 'in den Club', exEn: 'to the club' },
      { w: '.', plain: true },
      { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Eintritt', role: 'r-subject', en: 'entry', hi: 'प्रवेश', pron: 'INE-trit', type: 'Noun \u00b7 masc.', why: 'der Eintritt (recycled \u2014 Freizeit).', ex: 'der Eintritt', exEn: 'the entry' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'kostenlos', role: 'r-adjective', en: 'free', hi: 'मुफ़्त', pron: 'KOS-ten-lohs', type: 'Adjective', why: 'kostenlos (this chapter).', ex: 'Der Eintritt ist kostenlos.', exEn: 'Entry is free.' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'r-wenn', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'condition; verb last (this chapter).', ex: 'wenn du diese Karte zeigst', exEn: 'if you show this card' },
      { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun' },
      { w: 'diese', role: 'r-akkusativ', en: 'this (fem. acc.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner \u00b7 acc.' },
      { w: 'Karte', role: 'r-object', en: 'card', hi: 'कार्ड', pron: 'KAR-tuh', type: 'Noun \u00b7 fem.', why: 'die Karte (this chapter).', ex: 'diese Karte', exEn: 'this card' },
      { w: 'zeigst', role: 'r-verb', en: 'show', hi: 'दिखाते हो', pron: 'tsykst', type: 'Verb \u00b7 zeigen', why: 'conjugated verb last (this chapter).', ex: '\u2026, wenn du die Karte zeigst.', exEn: '\u2026 if you show the card.' },
      { w: '.', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अन्ना', pron: 'A-na', type: 'Name' },
      { w: 'backt', role: 'r-verb', en: 'bakes', hi: 'बनाती है', pron: 'bakt', type: 'Verb \u00b7 backen', why: 'backen (recycled \u2014 Essen).', ex: 'Anna backt Geb\u00e4ck.', exEn: 'Anna bakes pastries.' },
      { w: 'Geb\u00e4ck', role: 'r-object', en: 'pastries', hi: 'पेस्ट्री', pron: 'guh-BEK', type: 'Noun \u00b7 neut.', why: 'das Geb\u00e4ck (this chapter).', ex: 'Geb\u00e4ck backen', exEn: 'to bake pastries' },
      { w: ',', plain: true },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'wenn', role: 'r-wenn', en: 'when', hi: 'जब', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'future event; verb last (this chapter).', ex: 'wenn es dunkel wird', exEn: 'when it gets dark' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'dunkel', role: 'r-adjective', en: 'dark', hi: 'अंधेरा', pron: 'DUN-kel', type: 'Adjective', why: 'dunkel (recycled \u2014 Adjektive).', ex: 'Es wird dunkel.', exEn: 'It gets dark.' },
      { w: 'wird', role: 'r-verb', en: 'gets', hi: 'हो जाता है', pron: 'virt', type: 'Verb \u00b7 werden', why: 'conjugated verb last in the wenn-clause (this chapter).', ex: '\u2026, wenn es dunkel wird.', exEn: '\u2026 when it gets dark.' },
      { w: ',', plain: true },
      { w: 'gibt', role: 'r-verb', en: 'there is', hi: 'होती है', pron: 'gipt', type: 'Verb \u00b7 geben', why: 'inversion: verb first after the fronted wenn-clause (this chapter).', ex: '\u2026, gibt es ein Feuerwerk.', exEn: '\u2026, there\u2019s a fireworks display.' },
      { w: 'es', role: 'r-subject', en: 'there', hi: '', pron: 'es', type: 'Pronoun' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'Feuerwerk', role: 'r-object', en: 'fireworks', hi: 'आतिशबाज़ी', pron: 'FOY-er-vairk', type: 'Noun \u00b7 neut.', why: 'das Feuerwerk (this chapter).', ex: 'ein Feuerwerk', exEn: 'a fireworks display' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb \u00b7 sein' },
      { w: 'aufgeregt', role: 'r-adjective', en: 'excited', hi: 'उत्साहित', pron: 'OWF-guh-raykt', type: 'Adjective', why: 'aufgeregt (this chapter).', ex: 'Wir sind aufgeregt.', exEn: 'We\u2019re excited.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'ein', role: 'r-adverb', en: 'a little', hi: 'थोड़ा', pron: 'ine', type: 'Adverb' },
      { w: 'bisschen', role: 'r-adverb', en: 'bit', hi: 'सा', pron: 'BIS-khen', type: 'Adverb' },
      { w: 'traurig', role: 'r-adjective', en: 'sad', hi: 'उदास', pron: 'TROW-rikh', type: 'Adjective', why: 'traurig (this chapter).', ex: 'ein bisschen traurig', exEn: 'a little sad' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil gives the reason; verb last (recycled \u2014 weil).', ex: 'weil Max wegf\u00e4hrt', exEn: 'because Max is leaving' },
      { w: 'Max', role: 'r-subject', en: 'Max', hi: 'मैक्स', pron: 'maks', type: 'Name' },
      { w: 'so', role: 'r-vergleich', en: 'so', hi: 'इतनी', pron: 'zo', type: 'Adverb', why: 'so weit weg (recycled \u2014 als/wie).', ex: 'so weit', exEn: 'so far' },
      { w: 'weit', role: 'r-adjective', en: 'far', hi: 'दूर', pron: 'vite', type: 'Adjective' },
      { w: 'wegf\u00e4hrt', role: 'r-verb', en: 'is going away', hi: 'चला जाता है', pron: 'VEK-fairt', type: 'Verb \u00b7 wegfahren', why: 'conjugated verb last after weil (recycled \u2014 weil).', ex: '\u2026, weil Max wegf\u00e4hrt.', exEn: '\u2026 because Max is leaving.' },
      { w: '.', plain: true },
      { w: 'Tausend', role: 'r-akkusativ', en: 'thousand', hi: 'हज़ार', pron: 'TOW-zent', type: 'Number', why: 'tausend Dank (this chapter).', ex: 'Tausend Dank!', exEn: 'Thanks a million!' },
      { w: 'Dank', role: 'r-object', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Noun \u00b7 masc.', why: 'tausend Dank (this chapter).', ex: 'Tausend Dank!', exEn: 'Thanks a million!' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'alles', role: 'r-subject', en: 'all', hi: 'सब', pron: 'A-les', type: 'Pronoun', why: 'alles Gute (this chapter).', ex: 'Alles Gute!', exEn: 'All the best!' },
      { w: 'Gute', role: 'r-object', en: 'the best', hi: 'शुभकामनाएँ', pron: 'GOO-tuh', type: 'Noun \u00b7 neut.', why: 'alles Gute (this chapter).', ex: 'Alles Gute!', exEn: 'All the best!' },
      { w: '!', plain: true }
    ],
    translation: 'Dear friends, when Max leaves on Friday, we\u2019re having a party. If you have time, please come to the club. Entry is free if you show this card. Anna bakes pastries, and when it gets dark, there\u2019s a fireworks display. We\u2019re excited and a little sad, because Max is going so far away. Thanks a million and all the best! \u2014 Watch the wenn-clauses: three fronted ones trigger inversion (Wenn \u2026 wegf\u00e4hrt, machen wir \u2026; wenn es dunkel wird, gibt es \u2026), and the verb lands at the end every time.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_011_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wiebke, was machst du, wenn die Ferien beginnen?', en: 'Wiebke, what do you do when the holidays start?' },
      { id: 'A2_011_L002', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wenn ich frei habe, fahre ich immer zu meiner Familie.', en: 'When I have free time, I always go to my family.' },
      { id: 'A2_011_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wenn es regnet?', en: 'And if it rains?' },
      { id: 'A2_011_L004', speaker: 'Wiebke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann bleiben wir zu Hause und spielen Karten.', en: 'Then we stay home and play cards.' }
    ],
    transcript: 'Wiebke, was machst du, wenn die Ferien beginnen? Wenn ich frei habe, fahre ich immer zu meiner Familie. Und wenn es regnet? Dann bleiben wir zu Hause und spielen Karten.',
    translation: 'Wiebke, what do you do when the holidays start? When I have free time, I always go to my family. And if it rains? Then we stay home and play cards.',
    tokens: [
      { w: 'Wiebke' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'machst' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'die' },
      { w: 'Ferien' },
      { w: 'beginnen' },
      { w: '?', plain: true },
      { w: 'Wenn' },
      { w: 'ich' },
      { w: 'frei' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'fahre' },
      { w: 'ich' },
      { w: 'immer' },
      { w: 'zu' },
      { w: 'meiner' },
      { w: 'Familie' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wenn' },
      { w: 'es' },
      { w: 'regnet' },
      { w: '?', plain: true },
      { w: 'Dann' },
      { w: 'bleiben' },
      { w: 'wir' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: 'und' },
      { w: 'spielen' },
      { w: 'Karten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Wiebke, wenn sie frei hat?', qEn: 'What does Wiebke do when she has free time?', options: ['sie lernt', 'sie fährt zu ihrer Familie', 'sie arbeitet', 'sie kocht'], optionsEn: ['she is studying', 'she is going to her family', 'she is working', 'she is cooking'], answer: 1,
        explain: '"Wenn ich frei habe, fahre ich immer zu meiner Familie."' },
      { q: 'Was machen sie, wenn es regnet?', qEn: 'What do they do if it rains?', options: ['sie fahren', 'sie bleiben zu Hause', 'sie gehen schwimmen', 'sie kaufen ein'], optionsEn: ['they are driving', 'they stay at home', 'they go swimming', 'they are shopping'], answer: 1,
        explain: '"Dann bleiben wir zu Hause und spielen Karten."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Was machst du, wenn du traurig bist?", taskEn: "Your friend asks: what do you do when you're sad?", de: "Wenn ich traurig bin, rufe ich meine Schwester an.", en: "When I'm sad, I call my sister." },
    { task: "Dein Partner fragt: Was machst du, wenn du eine Einladung bekommst?", taskEn: "Your partner asks: what do you do when you get an invitation?", de: "Wenn ich eine Einladung bekomme, schreibe ich eine Dankeskarte.", en: "When I get an invitation, I write a thank-you card." },
    { task: "Dein Freund fragt: Wie fühlst du dich, wenn es Feuerwerk gibt?", taskEn: "Your friend asks: how do you feel when there are fireworks?", de: "Wenn es Feuerwerk gibt, bin ich aufgeregt und stolz.", en: "When there are fireworks, I feel excited and proud." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short paragraph (six sentences) about your plans and routines using wenn. Include at least two fronted wenn-clauses with inversion (Wenn \u2026, [verb] ich \u2026), one "immer wenn" (whenever), and one future plan in the present tense. Try this chapter\u2019s words: die Feier, das Gef\u00fchl, aufgeregt, wegfahren, kostenlos.',
    starters: ['Wenn ich Zeit habe, \u2026', 'Immer wenn \u2026', 'Ich rufe dich an, wenn \u2026', 'Wenn das Wetter gut ist, \u2026'],
    placeholder: 'Wenn das Wochenende kommt, gehe ich spazieren. Immer wenn wir feiern, \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Wenn ich habe Zeit, lerne ich Deutsch.',
        'Wenn ich Zeit habe, ich lerne Deutsch.',
        'Wenn ich Zeit habe, lerne ich Deutsch.',
        'Wenn ich Zeit habe lerne ich Deutsch.'
      ],
      answer: 2,
      explain: 'Verb last in the wenn-clause (habe), comma, then the main clause starts with its verb (lerne ich).'
    },
    gap: {
      // supply "wenn" then the verb that lands at the end
      sentence: ['Ich rufe dich an, ', ' ich in Berlin ', '.'],
      gaps: [ { answer: 'wenn', accepts: ['wenn'] }, { answer: 'ankomme', accepts: ['ankomme', 'bin'] } ],
      explain: 'wenn opens the clause; the conjugated verb (ankomme) goes to the end.'
    },
    match: {
      q: 'Match each conjunction to its job.',
      pairs: [
        { noun: 'weil', art: 'Grund (reason)' },
        { noun: 'dass', art: 'Aussage (statement)' },
        { noun: 'wenn', art: 'Bedingung (condition)' },
        { noun: 'immer wenn', art: 'Gewohnheit (whenever)' },
        { noun: 'wenn (+ Pr\u00e4sens)', art: 'Zukunft (future)' }
      ]
    },
    builder: {
      target: 'Build (wenn-clause first, with inversion): "If it rains, we stay home."',
      bank: ['Wenn', 'es', 'regnet', 'bleiben', 'wir', 'zu', 'Hause'],
      answer: ['Wenn', 'es', 'regnet', 'bleiben', 'wir', 'zu', 'Hause'],
      roles: { 'Wenn': 'r-wenn', 'es': 'r-subject', 'regnet': 'r-verb', 'bleiben': 'r-verb', 'wir': 'r-subject', 'zu': 'r-preposition', 'Hause': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Where does the verb go in a wenn-clause?', options: ['in position 2', 'at the very end', 'in position 1', 'after the comma'], answer: 1,
      explain: 'Like weil and dass, wenn sends the conjugated verb to the end.' },
    { q: 'Complete: "Wenn es regnet, ___ wir zu Hause."', options: ['wir bleiben', 'bleiben wir', 'wir bleiben zu', 'bleiben zu wir'], answer: 1,
      explain: 'After a fronted wenn-clause the main clause starts with the verb: bleiben wir.' },
    { q: 'How do you say the future after wenn?', options: ['with werden in the wenn-clause', 'with the present tense', 'with the Perfekt', 'with the Pr\u00e4teritum'], answer: 1,
      explain: 'German uses the present: "Ich rufe an, wenn ich ankomme." \u2014 no werden.' },
    { q: 'Which word means a condition (if)?', options: ['weil', 'dass', 'wenn', 'denn'], answer: 2,
      explain: 'wenn = condition/whenever/when. weil = reason, dass = statement.' },
    { q: 'Which is correct for "whenever"?', options: ['nur wenn', 'immer wenn', 'wenn immer nicht', 'wenn dass'], answer: 1,
      explain: 'immer wenn = whenever (a repeated action).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-wenn', html: '<span class="de r-wenn">wenn</span> does three jobs \u2014 condition (if), repeated action (whenever), future (when) \u2014 and sends the <span class="de r-verb">verb</span> to the end: <span class="de">Wenn ich Zeit habe, \u2026</span>' },
    { c: 'r-wenn', html: 'Put the wenn-clause <b>first</b> and the main clause starts with its verb (inversion): <span class="de">Wenn es regnet, <b>bleiben</b> wir zu Hause.</span> \u2014 verb, comma, verb.' },
    { c: 'r-wenn', html: 'Choose by meaning: <b>reason \u2192 weil, statement \u2192 dass, condition/whenever \u2192 wenn</b>. For the future, keep the present tense \u2014 no werden.' }
  ],
  revisionTips: [
    'wenn = if / whenever / when \u2014 and the verb always goes last.',
    'wenn-clause first \u2192 flip the main clause: listen for "\u2026 Verb, Verb \u2026" across the comma.',
    'Reason? weil. Statement? dass. Condition? wenn. Future stays in the present tense.'
  ]
};

window.CHAPTER = CHAPTER;
