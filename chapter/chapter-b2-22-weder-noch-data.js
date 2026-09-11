/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 22
   "weder ... noch" — a two-part connector expressing that BOTH
   alternatives are negative ("neither ... nor"), the natural
   German alternative to "nicht ... und nicht". Contrasted with
   sowohl...als auch (Ch.21, both true) — this is the negative
   mirror. Does NOT introduce nicht nur...sondern auch or
   einerseits...andererseits (later chapters).
   IMPORTANT: dialogue uses ONLY Doris and Timo.
   Vocabulary source: uploaded chapter-22 list (55 items, user-edited
   general B2 vocabulary bank — administration/social/values themes).
============================================================ */
const CHAPTER = {
  id: 'b2-22-weder-noch',
  phase: 'B2 · Phase 1',
  number: 22,
  title: 'weder ... noch',
  titleEn: 'neither ... nor ...',
  description: 'Not "nicht Kaffee und nicht Tee" — weder...noch is the elegant, natural way Germans say both alternatives are false.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 23, title: 'nicht nur ... sondern auch', titleEn: 'not only ... but also ...' , href: 'chapter-b2-23-nicht-nur-sondern-auch.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Neither one, <em>nor the other.</em>',
    intro: 'Doris and Timo discuss a stalled administrative reform — neither the administration nor the police has reacted, neither of them has seen the property damage — dismissing both alternatives at once with weder … noch.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear weder...noch dismiss two options in one elegant stroke'
    ],
    scene: 'Die Verwaltungsreform',
    femaleSpeakers: ['Doris'],
    dialogue: [
      { speaker: 'Doris', tokens: [
        { w: 'Weder', role: 'r-conjunction', en: 'neither', hi: 'न तो', pron: 'VAY-der', type: 'Conjunction · weder … noch' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verwaltung', role: 'r-subject', en: 'administration', hi: 'प्रशासन', pron: 'fer-VAL-tung', type: 'Noun · fem.', why: 'die Verwaltung (this chapter).', ex: 'die Verwaltung' },
        { w: 'noch', role: 'r-conjunction', en: 'nor', hi: 'न ही', pron: 'nokh', type: 'Conjunction · part 2' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Polizei', role: 'r-subject', en: 'police', hi: 'पुलिस', pron: 'po-li-TSY', type: 'Noun · fem.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'की', pron: 'hat', type: 'Verb · haben' },
        { w: 'bisher', role: 'r-adverb', en: 'so far', hi: 'अब तक', pron: 'BIS-hair', type: 'Adverb' },
        { w: 'reagiert', role: 'r-verb', en: 'reacted', hi: 'प्रतिक्रिया', pron: 'ray-a-GEERT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Neither the administration nor the police has reacted so far.', hi: 'Na toh prashaasan ne na police ne ab tak koi pratikriya di hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Weder', role: 'r-conjunction', en: 'neither', hi: 'न तो', pron: 'VAY-der', type: 'Conjunction · weder … noch' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'noch', role: 'r-conjunction', en: 'nor', hi: 'न ही', pron: 'nokh', type: 'Conjunction · part 2' },
        { w: 'meine', role: 'r-subject', en: 'my (pl.)', hi: 'मेरे', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Nachbarn', role: 'r-subject', en: 'neighbors', hi: 'पड़ोसी', pron: 'NAHKH-barn', type: 'Noun · plural' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'देखा', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Sachbeschädigung', role: 'r-akkusativ', en: 'property damage', hi: 'संपत्ति क्षति', pron: 'ZAHKH-be-she-di-gung', type: 'Noun · fem.', why: 'die Sachbeschädigung (this chapter).', ex: 'die Sachbeschädigung' },
        { w: 'gesehen', role: 'r-verb', en: 'seen', hi: 'देखा', pron: 'ge-ZAY-en', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Neither I nor my neighbors have seen the property damage.', hi: 'Na maine na mere padosiyon ne sampatti kshati dekhi.' },
      { speaker: 'Doris', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'weder', role: 'r-conjunction', en: 'neither', hi: 'न तो', pron: 'VAY-der', type: 'Conjunction · weder … noch' },
        { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार', pron: 'VAR-ten', type: 'Verb · infinitive' },
        { w: 'noch', role: 'r-conjunction', en: 'nor', hi: 'न ही', pron: 'nokh', type: 'Conjunction · part 2' },
        { w: 'schweigen', role: 'r-verb', en: 'stay silent', hi: 'शांत रहना', pron: 'SHVY-gen', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'unternehmen', role: 'r-verb', en: 'undertake', hi: 'करना', pron: 'un-ter-NAY-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Maybe we should neither wait nor stay silent, but undertake something.', hi: 'Shayad humein na intezaar karna chahiye na shaant rehna, balki kuch karna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schätze', role: 'r-verb', en: 'estimate', hi: 'मानता हूँ', pron: 'SHE-tsuh', type: 'Verb · schätzen', why: 'schätzen = to estimate/value (this chapter).', ex: 'Ich schätze, das war teuer.', exEn: 'I estimate that was expensive.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Schaden', role: 'r-akkusativ', en: 'damage', hi: 'नुकसान', pron: 'SHAH-den', type: 'Noun · masc.' },
        { w: 'auf', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'mehrere', role: 'r-akkusativ', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'hundert', role: 'r-akkusativ', en: 'hundred', hi: 'सैंकड़ों', pron: 'HUN-dert', type: 'Number' },
        { w: 'Euro', role: 'r-akkusativ', en: 'euro', hi: 'यूरो', pron: 'OY-ro', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'That is true. I estimate the damage at several hundred euros.', hi: 'Yeh sahi hai. Main nuksaan sainkdon euro maanta hoon.' },
      { speaker: 'Doris', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'rufen', role: 'r-verb', en: 'let us call', hi: 'बुलाते हैं', pron: 'ROO-fen', type: 'Verb · rufen (wir)', lexicalUnit: 'anrufen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'besten', role: 'r-dativ', en: 'best', hi: 'अच्छे से', pron: 'BES-ten', type: 'Superlative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Polizei', role: 'r-akkusativ', en: 'police', hi: 'पुलिस', pron: 'po-li-TSY', type: 'Noun · fem.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Then we best call the police.', hi: 'Toh hum sabse achha police ko phone karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'rufe', role: 'r-verb', en: 'call', hi: 'बुलाता हूँ', pron: 'ROO-fuh', type: 'Verb · rufen (ich)', lexicalUnit: 'anrufen' },
        { w: 'sie', role: 'r-akkusativ', en: 'them', hi: 'उन्हें', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'gleich', role: 'r-time', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb · time' },
        { w: 'an', role: 'r-verb', en: '(prefix of anrufen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anrufen' },
        { w: '.', plain: true }
      ], en: 'Agreed! I will call them right away.', hi: 'Sahmat! Main use abhi call karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-weder">weder ... noch</span> means "neither ... nor ..." — it expresses that BOTH alternatives are negative in one elegant stroke, replacing the clunky <span class="de">nicht ... und nicht</span>. <span class="de">Anna spricht weder Deutsch noch Französisch.</span> is the natural German way; awkward repetition with "nicht" is not.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is WEDER ... NOCH (B2 level): a two-part connector meaning "neither ... nor ..." that expresses both alternatives are negative (Anna spricht weder Deutsch noch Französisch. / Rohan trinkt weder Kaffee noch Tee.). It can connect nouns, verbs, adjectives, adverbs, or prepositional phrases. It is the natural, elegant German alternative to the awkward "nicht ... und nicht", and it is the negative mirror of "sowohl ... als auch" (Ch.21, both true) — this chapter is the "neither is true" version. Common in reports, presentations, and academic writing. ' +
    'Do NOT expect nicht nur...sondern auch or einerseits...andererseits — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "weder" must be paired with "noch" — never with "oder", "und", or a second "nicht".\n' +
    '- The two connected elements should be grammatically parallel.\n' +
    '- Do not additionally add "nicht" before or after "weder ... noch" — it already carries full negation.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Positive vs negative check:</b> one sentence on whether "weder...noch" (both false) was the right choice here versus "sowohl...als auch" (both true).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "weder ... noch" to negate two elements naturally. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the weder...noch vs sowohl...als auch comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: weder + Element 1 + noch + Element 2, both negative, never combined with extra "nicht".'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'spricht', role: 'plain' },
    { w: 'weder', role: 'r-weder' }, { w: 'Deutsch', role: 'plain' }, { w: 'noch', role: 'r-weder' }, { w: 'Französisch', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: weder...noch dismisses both alternatives in one elegant stroke.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Doris and Timo discuss a public administration reform, dismissing both proposed alternatives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master weder...noch structure, what it can connect, and comparison to sowohl...als auch.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of weder...noch constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the two negated elements and the speaker\'s intention.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Express negative preferences and compare alternatives using weder...noch naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and opinion texts using weder...noch appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill nicht-und-nicht-to-weder-noch transformation, sentence building, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 420 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'nicht-und-nicht-to-weder-noch drills, sentence building, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete weder...noch reference — what it can connect, sowohl...als auch comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna spricht weder Deutsch noch Französisch.', text: 'Use weder...noch to negate two elements elegantly' },
    { de: 'Weder Anna noch Rohan kommt heute.', text: 'Front weder...noch correctly with V2 word order' },
    { de: 'sowohl...als auch (both true) vs. weder...noch (neither true)', text: 'Distinguish the positive and negative two-part connectors' },
    { de: 'nicht Kaffee und nicht Tee → weder Kaffee noch Tee', text: 'Replace clunky "nicht...und nicht" with weder...noch' },
    { de: 'Formal reports, presentations, academic writing', text: 'Use weder...noch naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-22 list) ----------
  vocab: [
    { de: 'richten', pos: 'verb', level: 'B2', en: 'to direct, aim, address, judge', hi: 'निर्देशित करना', ex: 'Sie richtet ihre Frage an den Chef.', exEn: 'She addresses her question to the boss.', exHi: 'Woh apna sawaal boss ko sambodhit karti hai.', ex2: 'Der Richter richtet über den Fall.', ex2En: 'The judge decides on the case.', ex2Hi: 'Judge maamle par faisla karta hai.', conj: { praesens: 'richtet', praeteritum: 'richtete', perfekt: 'hat gerichtet' } },
    { de: 'rufen', pos: 'verb', level: 'B2', en: 'to call, shout', hi: 'पुकारना', ex: 'Sie ruft ihren Bruder.', exEn: 'She calls her brother.', exHi: 'Woh apne bhai ko pukaarti hai.', ex2: 'Er rief laut um Hilfe.', ex2En: 'He shouted loudly for help.', ex2Hi: 'Usne zor se madad ke liye pukaara.', conj: { praesens: 'ruft', praeteritum: 'rief', perfekt: 'hat gerufen' } },
    { de: 'Sachbeschädigung', art: 'die', gender: 'f', plural: 'Sachbeschädigungen', pos: 'noun', level: 'B2', en: 'property damage, vandalism', hi: 'संपत्ति क्षति', ex: 'Er wurde wegen Sachbeschädigung angezeigt.', exEn: 'He was reported for property damage.', exHi: 'Uski sampatti kshati ke liye shikaayat ki gayi.', ex2: 'Die Sachbeschädigung kostete viel Geld.', ex2En: 'The property damage cost a lot of money.', ex2Hi: 'Sampatti kshati mein bahut paisa laga.' },
    { de: 'schätzen', pos: 'verb', level: 'B2', en: 'to value, estimate, appreciate', hi: 'महत्व देना, अनुमान लगाना', ex: 'Ich schätze deine Ehrlichkeit sehr.', exEn: 'I value your honesty a lot.', exHi: 'Main tumhaari imaandaari ki bahut kadr karta hoon.', ex2: 'Man schätzt die Kosten auf zehntausend Euro.', ex2En: 'The costs are estimated at ten thousand euros.', ex2Hi: 'Lagat das hazaar euro anumaanit hai.', conj: { praesens: 'schätzt', praeteritum: 'schätzte', perfekt: 'hat geschätzt' } },
    { de: 'scheren', pos: 'verb', level: 'B2', en: 'to shear, care (slang)', hi: 'बाल काटना, परवाह करना (बोलचाल)', ex: 'Das schert mich nicht.', exEn: 'That doesn\'t bother me.', exHi: 'Isse mujhe koi farak nahi padta.', ex2: 'Der Bauer schert die Schafe.', ex2En: 'The farmer shears the sheep.', ex2Hi: 'Kisaan bhedon ke baal katata hai.', conj: { praesens: 'schert', praeteritum: 'schor', perfekt: 'hat geschoren' } },
    { de: 'schließen', pos: 'verb', level: 'B2', en: 'to close, shut, conclude', hi: 'बंद करना, निष्कर्ष निकालना', ex: 'Sie schließt die Tür.', exEn: 'She closes the door.', exHi: 'Woh darvaaza band karti hai.', ex2: 'Daraus schließe ich, dass er recht hat.', ex2En: 'From that I conclude that he is right.', ex2Hi: 'Isse main nishkarsh nikaalta hoon ki woh sahi hai.', conj: { praesens: 'schließt', praeteritum: 'schloss', perfekt: 'hat geschlossen' } },
    { de: 'schnappen', pos: 'verb', level: 'B2', en: 'to grab, snatch', hi: 'झपटना', ex: 'Der Hund schnappte nach dem Ball.', exEn: 'The dog snatched at the ball.', exHi: 'Kutte ne ball ki taraf jhapatta.', ex2: 'Sie schnappte sich schnell die Tasche.', ex2En: 'She quickly grabbed the bag.', ex2Hi: 'Usne jaldi se bag jhapat liya.', conj: { praesens: 'schnappt', praeteritum: 'schnappte', perfekt: 'hat geschnappt' } },
    { de: 'Selbstbeherrschung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'self-control', hi: 'आत्म-नियंत्रण', ex: 'Somit stärkt die Selbstbeherrschung weder das Vertrauen noch die Zuneigung.', exEn: 'Thus, self-control strengthens neither the trust nor the affection.', exHi: 'Is prakaar, aatm-niyantran na bharosa mazboot karta hai aur na hi sneh.', ex2: 'Er zeigte bewundernswerte Selbstbeherrschung.', ex2En: 'He showed admirable self-control.', ex2Hi: 'Usne prashansaniya aatm-niyantran dikhaaya.' },
    { de: 'sodass', pos: 'grammar', level: 'B2', en: 'so that', hi: 'ताकि', ex: 'Es regnete stark, sodass wir zu Hause blieben.', exEn: 'It rained heavily, so that we stayed home.', exHi: 'Bahut baarish hui, jiske parinaamswaroop hum ghar par rahe.', ex2: 'Sie lernte viel, sodass sie die Prüfung bestand.', ex2En: 'She studied a lot, so that she passed the exam.', ex2Hi: 'Usne bahut padhaai ki, jiske parinaamswaroop usne pariksha paas ki.' },
    { de: 'somit', pos: 'adverb', level: 'B2', en: 'thus, therefore', hi: 'इस प्रकार', ex: 'Somit stärkt die Selbstbeherrschung weder das Vertrauen noch die Zuneigung.', exEn: 'Thus, self-control strengthens neither the trust nor the affection.', exHi: 'Is prakaar, aatm-niyantran na bharosa mazboot karta hai aur na hi sneh.', ex2: 'Somit ist das Problem gelöst.', ex2En: 'Thus, the problem is solved.', ex2Hi: 'Is prakaar, samasya hal ho gayi.' },
    { de: 'sondern', pos: 'grammar', level: 'B2', en: 'but, but rather', hi: 'बल्कि', ex: 'Er ist nicht faul, sondern beschäftigt.', exEn: 'He is not lazy, but rather busy.', exHi: 'Woh aalasi nahi, balki vyast hai.', ex2: 'Das ist nicht mein Fehler, sondern deiner.', ex2En: 'That is not my mistake, but yours.', ex2Hi: 'Yeh meri galti nahi, balki tumhaari hai.' },
    { de: 'spenden', pos: 'verb', level: 'B2', en: 'to donate', hi: 'दान करना', ex: 'Sie spendet regelmäßig für wohltätige Zwecke.', exEn: 'She regularly donates to charitable causes.', exHi: 'Woh niyamit roop se paropakaari kaaryon ke liye daan karti hai.', ex2: 'Wir haben Kleidung gespendet.', ex2En: 'We donated clothing.', ex2Hi: 'Humne kapade daan kiye.', conj: { praesens: 'spendet', praeteritum: 'spendete', perfekt: 'hat gespendet' } },
    { de: 'Spendenbereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'willingness to donate', hi: 'दान करने की इच्छा', ex: 'Zumal die Spendenbereitschaft sinkt, unterstützt niemand weder die Reform noch das Budget.', exEn: 'Especially since the willingness to donate declines, nobody supports either the reform or the budget.', exHi: 'Vishesh roop se kyunki daan karne ki ichha girti hai, koi bhi na toh sudhaar ka samarthan karta hai aur na hi budget ka.', ex2: 'Die Spendenbereitschaft steigt in Krisenzeiten.', ex2En: 'The willingness to donate rises in times of crisis.', ex2Hi: 'Sankat ke samay mein daan karne ki ichha badhti hai.' },
    { de: 'sprühen', pos: 'verb', level: 'B2', en: 'to spray, spritz', hi: 'छिड़कना', ex: 'Sie sprüht Wasser auf die Blumen.', exEn: 'She sprays water on the flowers.', exHi: 'Woh phoolon par paani chidakti hai.', ex2: 'Er sprühte Parfüm auf.', ex2En: 'He sprayed on perfume.', ex2Hi: 'Usne itra chidka.', conj: { praesens: 'sprüht', praeteritum: 'sprühte', perfekt: 'hat gesprüht' } },
    { de: 'stärken', pos: 'verb', level: 'B2', en: 'to strengthen', hi: 'मज़बूत करना', ex: 'Somit stärkt die Selbstbeherrschung weder das Vertrauen noch die Zuneigung.', exEn: 'Thus, self-control strengthens neither the trust nor the affection.', exHi: 'Is prakaar, aatm-niyantran na bharosa mazboot karta hai aur na hi sneh.', ex2: 'Sport stärkt das Immunsystem.', ex2En: 'Sport strengthens the immune system.', ex2Hi: 'Khel pratirakshaa pranaali ko mazboot karta hai.', conj: { praesens: 'stärkt', praeteritum: 'stärkte', perfekt: 'hat gestärkt' } },
    { de: 'stecken', pos: 'verb', level: 'B2', en: 'to stick, put, be stuck', hi: 'फंसना, डालना', ex: 'Sie steckt den Schlüssel ins Schloss.', exEn: 'She puts the key in the lock.', exHi: 'Woh chaabi taale mein daalti hai.', ex2: 'Das Auto steckt im Stau.', ex2En: 'The car is stuck in traffic.', ex2Hi: 'Gaadi traffic mein phansi hai.', conj: { praesens: 'steckt', praeteritum: 'steckte', perfekt: 'hat gesteckt' } },
    { de: 'stehen', pos: 'verb', level: 'B2', en: 'to stand, be written', hi: 'खड़ा होना, लिखा होना', ex: 'Es steht in der Zeitung.', exEn: 'It\'s written in the newspaper.', exHi: 'Yeh akhbaar mein likha hai.', ex2: 'Er steht vor der Tür.', ex2En: 'He is standing in front of the door.', ex2Hi: 'Woh darvaaze ke saamne khada hai.', conj: { praesens: 'steht', praeteritum: 'stand', perfekt: 'hat gestanden' } },
    { de: 'steigern', pos: 'verb', level: 'B2', en: 'to increase, boost', hi: 'बढ़ाना', ex: 'Die Firma steigert ihren Umsatz.', exEn: 'The company increases its revenue.', exHi: 'Company apna raajasva badhaati hai.', ex2: 'Er steigerte seine Leistung deutlich.', ex2En: 'He significantly boosted his performance.', ex2Hi: 'Usne apna pradarshan kaafi badhaaya.', conj: { praesens: 'steigert', praeteritum: 'steigerte', perfekt: 'hat gesteigert' } },
    { de: 'Suchtkrankheit', art: 'die', gender: 'f', plural: 'Suchtkrankheiten', pos: 'noun', level: 'B2', en: 'addictive illness', hi: 'व्यसन रोग', ex: 'Suchtkrankheit betrifft viele Familien.', exEn: 'Addictive illness affects many families.', exHi: 'Vyasan rog kai parivaaron ko prabhaavit karta hai.', ex2: 'Die Behandlung von Suchtkrankheit erfordert Geduld.', ex2En: 'Treatment of addictive illness requires patience.', ex2Hi: 'Vyasan rog ke ilaaj mein sahansheelta chaahiye.' },
    { de: 'treiben', pos: 'verb', level: 'B2', en: 'to drive, push, do sport', hi: 'करना (खेल), चलाना', ex: 'Sie treibt regelmäßig Sport.', exEn: 'She does sport regularly.', exHi: 'Woh niyamit roop se khel karti hai.', ex2: 'Der Wind trieb das Boot ans Ufer.', ex2En: 'The wind drove the boat to the shore.', ex2Hi: 'Hawa ne naav ko kinaare tak pahunchaaya.', conj: { praesens: 'treibt', praeteritum: 'trieb', perfekt: 'hat getrieben' } },
    { de: 'trotzdem', pos: 'adverb', level: 'B2', en: 'nevertheless, still', hi: 'फिर भी', ex: 'Trotzdem verfolgt die Regierung weder das Ziel aktiv noch gibt sie es auf.', exEn: 'Still, the government neither pursues the goal actively nor gives it up.', exHi: 'Phir bhi, sarkaar na toh lakshya ko sakriya roop se aage badhaati hai aur na hi use chhodti hai.', ex2: 'Es regnete, trotzdem gingen wir spazieren.', ex2En: 'It rained, nevertheless we went for a walk.', ex2Hi: 'Baarish ho rahi thi, phir bhi hum tehalne gaye.' },
    { de: 'übergeben', pos: 'verb', level: 'B2', en: 'to hand over', hi: 'सौंपना', ex: 'Er übergab dem Nachfolger die Firma.', exEn: 'He handed over the company to his successor.', exHi: 'Usne company apne uttaraadhikaari ko saumpi.', ex2: 'Sie übergibt die Unterlagen morgen.', ex2En: 'She will hand over the documents tomorrow.', ex2Hi: 'Woh kal kaagazaat saumpegi.', conj: { praesens: 'übergibt', praeteritum: 'übergab', perfekt: 'hat übergeben' } },
    { de: 'unterscheiden', pos: 'verb', level: 'B2', en: 'to distinguish, differentiate', hi: 'भेद करना', ex: 'Ein Aufruf zur Unterscheidung zwischen beiden Bereichen reicht weder aus noch wird es jemals genug sein.', exEn: 'A call for distinction between both areas is neither sufficient, nor will it ever be enough.', exHi: 'Dono kshetron ke beech bhed ka aahvaan na kaafi hai aur na hi kabhi kaafi hoga.', ex2: 'Man muss zwischen den beiden Optionen unterscheiden.', ex2En: 'One must distinguish between the two options.', ex2Hi: 'Dono vikalpon ke beech bhed karna zaroori hai.', conj: { praesens: 'unterscheidet', praeteritum: 'unterschied', perfekt: 'hat unterschieden' } },
    { de: 'Unterscheidung', art: 'die', gender: 'f', plural: 'Unterscheidungen', pos: 'noun', level: 'B2', en: 'distinction, differentiation', hi: 'भेद', ex: 'Ein Aufruf zur Unterscheidung zwischen beiden Bereichen reicht weder aus noch wird es jemals genug sein.', exEn: 'A call for distinction between both areas is neither sufficient, nor will it ever be enough.', exHi: 'Dono kshetron ke beech bhed ka aahvaan na kaafi hai aur na hi kabhi kaafi hoga.', ex2: 'Die Unterscheidung ist manchmal schwierig.', ex2En: 'The distinction is sometimes difficult.', ex2Hi: 'Bhed kabhi-kabhi mushkil hota hai.' },
    { de: 'Verärgerung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'annoyance, anger', hi: 'नाराज़गी', ex: 'Man kann weder die Verärgerung der Bürger noch die Vermutung von Korruption ignorieren.', exEn: 'One can ignore neither the citizens\' annoyance nor the assumption of corruption.', exHi: 'Na toh nagariko ki naarazgi aur na hi bhrashtachaar ka anumaan nazarandaaz kiya ja sakta hai.', ex2: 'Ihre Verärgerung war deutlich sichtbar.', ex2En: 'Her annoyance was clearly visible.', ex2Hi: 'Uski naarazgi spasht dikh rahi thi.' },
    { de: 'verbauen', pos: 'verb', level: 'B2', en: 'to build in, block a view', hi: 'निर्माण से रोकना', ex: 'Das neue Gebäude verbaut die Aussicht.', exEn: 'The new building blocks the view.', exHi: 'Naya building nazaara rokta hai.', ex2: 'Sie verbauten viel Geld in dem Projekt.', ex2En: 'They put a lot of money into building the project.', ex2Hi: 'Unhone project mein bahut paisa lagaaya.', conj: { praesens: 'verbaut', praeteritum: 'verbaute', perfekt: 'hat verbaut' } },
    { de: 'verbinden', pos: 'verb', level: 'B2', en: 'to connect, combine, blindfold', hi: 'जोड़ना', ex: 'Die Brücke verbindet die beiden Städte.', exEn: 'The bridge connects the two cities.', exHi: 'Pul dono shahron ko jodta hai.', ex2: 'Sie verband ihm die Augen.', ex2En: 'She blindfolded him.', ex2Hi: 'Usne uski aankhon par patti baandhi.', conj: { praesens: 'verbindet', praeteritum: 'verband', perfekt: 'hat verbunden' } },
    { de: 'Vereinbarkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'compatibility', hi: 'अनुकूलता', ex: 'Die Vereinbarkeit von Familie und Beruf ist wichtig.', exEn: 'The compatibility of family and career is important.', exHi: 'Parivaar aur karियर ki anukoolta mahatvapurn hai.', ex2: 'Die Vereinbarkeit der Interessen war schwierig.', ex2En: 'The compatibility of interests was difficult.', ex2Hi: 'Ruchiyon ki anukoolta mushkil thi.' },
    { de: 'verfolgen', pos: 'verb', level: 'B2', en: 'to pursue, follow, persecute', hi: 'पीछा करना, आगे बढ़ाना', ex: 'Trotzdem verfolgt die Regierung weder das Ziel aktiv noch gibt sie es auf.', exEn: 'Still, the government neither pursues the goal actively nor gives it up.', exHi: 'Phir bhi, sarkaar na toh lakshya ko sakriya roop se aage badhaati hai aur na hi use chhodti hai.', ex2: 'Die Polizei verfolgte den Verdächtigen.', ex2En: 'The police pursued the suspect.', ex2Hi: 'Police ne sandigdh ka peecha kiya.', conj: { praesens: 'verfolgt', praeteritum: 'verfolgte', perfekt: 'hat verfolgt' } },
    { de: 'Verfügung', art: 'die', gender: 'f', plural: 'Verfügungen', pos: 'noun', level: 'B2', en: 'disposal, availability', hi: 'उपलब्धता', ex: 'Weder der Arbeitslohn noch die Verfügung über moderne Technik stimmt.', exEn: 'Neither the wage nor the availability of modern technology is right.', exHi: 'Na mazdoori sahi hai aur na hi aadhunik takneek ki upalabdhta.', ex2: 'Die Mittel stehen zur Verfügung.', ex2En: 'The funds are available.', ex2Hi: 'Sansaadhan uplabdh hain.' },
    { de: 'verlaufen', pos: 'verb', level: 'B2', en: 'to proceed, run, get lost', hi: 'बीतना, भटक जाना', ex: 'Die Veranstaltung verlief erfolgreich.', exEn: 'The event proceeded successfully.', exHi: 'Aayojan safaltapoorvak beeta.', ex2: 'Ich habe mich in der Stadt verlaufen.', ex2En: 'I got lost in the city.', ex2Hi: 'Main shahar mein bhatak gaya.', conj: { praesens: 'verläuft', praeteritum: 'verlief', perfekt: 'ist verlaufen' } },
    { de: 'Vermutung', art: 'die', gender: 'f', plural: 'Vermutungen', pos: 'noun', level: 'B2', en: 'assumption, supposition', hi: 'अनुमान', ex: 'Man kann weder die Verärgerung der Bürger noch die Vermutung von Korruption ignorieren.', exEn: 'One can ignore neither the citizens\' annoyance nor the assumption of corruption.', exHi: 'Na toh nagariko ki naarazgi aur na hi bhrashtachaar ka anumaan nazarandaaz kiya ja sakta hai.', ex2: 'Ihre Vermutung stellte sich als richtig heraus.', ex2En: 'Her assumption turned out to be correct.', ex2Hi: 'Uska anumaan sahi nikla.' },
    { de: 'versetzen', pos: 'verb', level: 'B2', en: 'to transfer, move, put into a state', hi: 'स्थानांतरित करना', ex: 'Er wurde in eine andere Abteilung versetzt.', exEn: 'He was transferred to another department.', exHi: 'Use ek doosre vibhaag mein sthaanaantarit kiya gaya.', ex2: 'Die Nachricht versetzte alle in Aufregung.', ex2En: 'The news put everyone in excitement.', ex2Hi: 'Khabar ne sabko utsaah mein daal diya.', conj: { praesens: 'versetzt', praeteritum: 'versetzte', perfekt: 'hat versetzt' } },
    { de: 'Verwaltung', art: 'die', gender: 'f', plural: 'Verwaltungen', pos: 'noun', level: 'B2', en: 'administration', hi: 'प्रशासन', ex: 'Die Verwaltung verzichtet weder auf Transparenz noch auf Effizienz.', exEn: 'The administration forgoes neither transparency nor efficiency.', exHi: 'Prashaasan na paardarshita chhodta hai aur na hi dakshta.', ex2: 'Die Verwaltung bearbeitet die Anträge schnell.', ex2En: 'The administration processes the applications quickly.', ex2Hi: 'Prashaasan aavedanon ko tezi se prakriyaakrit karta hai.' },
    { de: 'verzichten', pos: 'verb', level: 'B2', en: 'to do without, forgo', hi: 'त्यागना', ex: 'Die Verwaltung verzichtet weder auf Transparenz noch auf Effizienz.', exEn: 'The administration forgoes neither transparency nor efficiency.', exHi: 'Prashaasan na paardarshita chhodta hai aur na hi dakshta.', ex2: 'Er verzichtete auf Zucker im Kaffee.', ex2En: 'He forwent sugar in his coffee.', ex2Hi: 'Usne coffee mein cheeni chhod di.', conj: { praesens: 'verzichtet', praeteritum: 'verzichtete', perfekt: 'hat verzichtet' } },
    { de: 'vorleben', pos: 'verb', level: 'B2', en: 'to set an example, live out', hi: 'उदाहरण प्रस्तुत करना', ex: 'Eltern sollten gute Werte vorleben.', exEn: 'Parents should live out good values as an example.', exHi: 'Maata-pita ko achhe mulyon ka udaharan prastut karna chaahiye.', ex2: 'Sie lebt Disziplin vor.', ex2En: 'She sets an example of discipline.', ex2Hi: 'Woh anushaasan ka udaharan prastut karti hai.', conj: { praesens: 'lebt vor', praeteritum: 'lebte vor', perfekt: 'hat vorgelebt' } },
    { de: 'Vorteil', art: 'der', gender: 'm', plural: 'Vorteile', pos: 'noun', level: 'B2', en: 'advantage', hi: 'लाभ', ex: 'Der Vorteil liegt weder im Preis noch in der Geschwindigkeit.', exEn: 'The advantage lies neither in the price nor in the speed.', exHi: 'Laabh na keemat mein hai aur na hi gati mein.', ex2: 'Das hat viele Vorteile.', ex2En: 'That has many advantages.', ex2Hi: 'Iske kai faayde hain.' },
    { de: 'weitergeben', pos: 'verb', level: 'B2', en: 'to pass on', hi: 'आगे बढ़ाना', ex: 'Er gibt die Information sofort weiter.', exEn: 'He passes on the information immediately.', exHi: 'Woh jaankaari turant aage badhaata hai.', ex2: 'Sie gaben ihre Erfahrung weiter.', ex2En: 'They passed on their experience.', ex2Hi: 'Unhone apna anubhav aage badhaaya.', conj: { praesens: 'gibt weiter', praeteritum: 'gab weiter', perfekt: 'hat weitergegeben' } },
    { de: 'Ziel', art: 'das', gender: 'n', plural: 'Ziele', pos: 'noun', level: 'B2', en: 'goal, aim', hi: 'लक्ष्य', ex: 'Trotzdem verfolgt die Regierung weder das Ziel aktiv noch gibt sie es auf.', exEn: 'Still, the government neither pursues the goal actively nor gives it up.', exHi: 'Phir bhi, sarkaar na toh lakshya ko sakriya roop se aage badhaati hai aur na hi use chhodti hai.', ex2: 'Ihr Ziel ist klar definiert.', ex2En: 'Her goal is clearly defined.', ex2Hi: 'Uska lakshya spasht paribhaashit hai.' },
    { de: 'zugrunde liegen', pos: 'verb', level: 'B2', en: 'to underlie, be the basis of', hi: 'आधार होना', ex: 'Zugrunde liegt diesem Problem weder Absicht noch Nachlässigkeit.', exEn: 'Neither intention nor negligence underlies this problem.', exHi: 'Is samasya ke aadhaar mein na toh irada hai aur na hi laaparvaahi.', ex2: 'Diesem Konzept liegt eine einfache Idee zugrunde.', ex2En: 'A simple idea underlies this concept.', ex2Hi: 'Is avdhaarna ke aadhaar mein ek saral vichaar hai.', conj: { praesens: 'liegt zugrunde', praeteritum: 'lag zugrunde', perfekt: 'hat zugrunde gelegen' } },
    { de: 'zumal', pos: 'grammar', level: 'B2', en: 'especially since, particularly as', hi: 'विशेष रूप से क्योंकि', ex: 'Zumal die Spendenbereitschaft sinkt, unterstützt niemand weder die Reform noch das Budget.', exEn: 'Especially since the willingness to donate declines, nobody supports either the reform or the budget.', exHi: 'Vishesh roop se kyunki daan karne ki ichha girti hai, koi bhi na toh sudhaar ka samarthan karta hai aur na hi budget ka.', ex2: 'Zumal es spät ist, sollten wir gehen.', ex2En: 'Especially since it\'s late, we should go.', ex2Hi: 'Vishesh roop se kyunki der ho chuki hai, humein jaana chaahiye.' },
    { de: 'Zuneigung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'affection', hi: 'स्नेह', ex: 'Somit stärkt die Selbstbeherrschung weder das Vertrauen noch die Zuneigung.', exEn: 'Thus, self-control strengthens neither the trust nor the affection.', exHi: 'Is prakaar, aatm-niyantran na bharosa mazboot karta hai aur na hi sneh.', ex2: 'Ihre Zuneigung war offensichtlich.', ex2En: 'Her affection was obvious.', ex2Hi: 'Uska sneh spasht tha.' },
    { de: 'zusammen', pos: 'adverb', level: 'B2', en: 'together', hi: 'साथ में', ex: 'Der Zweck der Reform zusammen mit ihrer Wirkung hängt weder mit der Verwaltung noch mit der Politik zusammen.', exEn: 'The purpose of the reform, together with its effect, is connected neither with the administration nor with politics.', exHi: 'Sudhaar ka uddeshya, uske prabhaav ke saath, na toh prashaasan se juda hai aur na hi raajniti se.', ex2: 'Wir gehen zusammen ins Kino.', ex2En: 'We go to the cinema together.', ex2Hi: 'Hum saath mein cinema jaate hain.' },
    { de: 'zusammenhängen', pos: 'verb', level: 'B2', en: 'to be connected, linked', hi: 'जुड़ा होना', ex: 'Der Zweck der Reform hängt weder mit der Verwaltung noch mit der Politik zusammen.', exEn: 'The purpose of the reform is connected neither with the administration nor with politics.', exHi: 'Sudhaar ka uddeshya na toh prashaasan se juda hai aur na hi raajniti se.', ex2: 'Die beiden Ereignisse hängen eng zusammen.', ex2En: 'The two events are closely connected.', ex2Hi: 'Dono ghatnaayein kariibi roop se judi hain.', conj: { praesens: 'hängt zusammen', praeteritum: 'hing zusammen', perfekt: 'hat zusammengehangen' } },
    { de: 'Zweck', art: 'der', gender: 'm', plural: 'Zwecke', pos: 'noun', level: 'B2', en: 'purpose, context, connection', hi: 'प्रयोजन', ex: 'Der Zweck der Reform zusammen mit ihrer Wirkung hängt weder mit der Verwaltung noch mit der Politik zusammen.', exEn: 'The purpose of the reform, together with its effect, is connected neither with the administration nor with politics.', exHi: 'Sudhaar ka uddeshya, uske prabhaav ke saath, na toh prashaasan se juda hai aur na hi raajniti se.', ex2: 'Der Zweck des Treffens war klar.', ex2En: 'The purpose of the meeting was clear.', ex2Hi: 'Baithak ka uddeshya spasht tha.' },
    { de: 'Acht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'attention, care', hi: 'ध्यान', ex: 'Gib acht auf dein Gepäck.', exEn: 'Pay attention to your luggage.', exHi: 'Apne saamaan par dhyaan do.', ex2: 'Er ließ alle Vorsicht außer Acht.', ex2En: 'He disregarded all caution.', ex2Hi: 'Usne saari saavdhaani nazarandaaz ki.' },
    { de: 'akut', pos: 'adjective', level: 'B2', en: 'acute', hi: 'तीव्र', ex: 'Das Problem ist akut geworden.', exEn: 'The problem has become acute.', exHi: 'Samasya teevra ho gayi hai.', ex2: 'Er hat akute Schmerzen.', ex2En: 'He has acute pain.', ex2Hi: 'Use teevra dard hai.' },
    { de: 'anschließen', pos: 'verb', level: 'B2', en: 'to connect, join', hi: 'जोड़ना', ex: 'Er schließt den Drucker an.', exEn: 'He connects the printer.', exHi: 'Woh printer jodta hai.', ex2: 'Sie schloss sich der Gruppe an.', ex2En: 'She joined the group.', ex2Hi: 'Woh group mein shaamil hui.', conj: { praesens: 'schließt an', praeteritum: 'schloss an', perfekt: 'hat angeschlossen' } },
    { de: 'Arbeitslohn', art: 'der', gender: 'm', plural: 'Arbeitslöhne', pos: 'noun', level: 'B2', en: 'wage, pay', hi: 'मज़दूरी', ex: 'Weder der Arbeitslohn noch die Verfügung über moderne Technik stimmt.', exEn: 'Neither the wage nor the availability of modern technology is right.', exHi: 'Na mazdoori sahi hai aur na hi aadhunik takneek ki upalabdhta.', ex2: 'Der Arbeitslohn wurde erhöht.', ex2En: 'The wage was increased.', ex2Hi: 'Mazdoori badhaayi gayi.' },
    { de: 'Ärger', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'incident, trouble', hi: 'परेशानी', ex: 'Es gab Ärger im Büro.', exEn: 'There was trouble in the office.', exHi: 'Office mein pareshaani hui.', ex2: 'Ich will keinen Ärger.', ex2En: 'I don\'t want any trouble.', ex2Hi: 'Mujhe koi pareshaani nahi chaahiye.' },
    { de: 'aufbereiten', pos: 'verb', level: 'B2', en: 'to process, treat', hi: 'संसाधित करना', ex: 'Das Wasser wird aufbereitet.', exEn: 'The water is being treated.', exHi: 'Paani ko sansaadhit kiya ja raha hai.', ex2: 'Sie bereiteten die Daten für die Präsentation auf.', ex2En: 'They processed the data for the presentation.', ex2Hi: 'Unhone presentation ke liye data sansaadhit kiya.', conj: { praesens: 'bereitet auf', praeteritum: 'bereitete auf', perfekt: 'hat aufbereitet' } },
    { de: 'Aufruf', art: 'der', gender: 'm', plural: 'Aufrufe', pos: 'noun', level: 'B2', en: 'call, appeal', hi: 'आह्वान', ex: 'Ein Aufruf zur Unterscheidung zwischen beiden Bereichen reicht weder aus noch wird es jemals genug sein.', exEn: 'A call for distinction between both areas is neither sufficient, nor will it ever be enough.', exHi: 'Dono kshetron ke beech bhed ka aahvaan na kaafi hai aur na hi kabhi kaafi hoga.', ex2: 'Der Aufruf zur Solidarität war erfolgreich.', ex2En: 'The call for solidarity was successful.', ex2Hi: 'Ekjutata ka aahvaan safal raha.' },
    { de: 'Auftakt', art: 'der', gender: 'm', plural: 'Auftakte', pos: 'noun', level: 'B2', en: 'opening, start', hi: 'शुरुआत', ex: 'Der Auftakt zur Konferenz war beeindruckend.', exEn: 'The opening of the conference was impressive.', exHi: 'Sammelan ki shuruaat prabhaavshaali thi.', ex2: 'Das Konzert bildete den Auftakt des Festivals.', ex2En: 'The concert formed the opening of the festival.', ex2Hi: 'Concert ne festival ki shuruaat ki.' },
    { de: 'ausreichen', pos: 'verb', level: 'B2', en: 'to suffice, be enough', hi: 'पर्याप्त होना', ex: 'Ein Aufruf zur Unterscheidung zwischen beiden Bereichen reicht weder aus noch wird es jemals genug sein.', exEn: 'A call for distinction between both areas is neither sufficient, nor will it ever be enough.', exHi: 'Dono kshetron ke beech bhed ka aahvaan na kaafi hai aur na hi kabhi kaafi hoga.', ex2: 'Das Geld reicht nicht aus.', ex2En: 'The money is not enough.', ex2Hi: 'Paisa kaafi nahi hai.', conj: { praesens: 'reicht aus', praeteritum: 'reichte aus', perfekt: 'hat ausgereicht' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "weder ... noch"?',
      body: [ '"weder ... noch" means "neither ... nor". It expresses that BOTH alternatives are negative.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna spricht weder Deutsch noch Französisch.</span>'],
          ['<span class="de">Rohan trinkt weder Kaffee noch Tee.</span>']
        ]
      },
      hinglish: '"weder ... noch" ka matlab hai "na yeh, na woh". Matlab dono cheezein negative hain \u2014 ek bhi sach nahi hai.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Pattern seedha hai: <b>weder</b> ke baad pehli cheez, phir <b>noch</b>, phir doosri cheez. Dono hisse jodi mein aate hain.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Ich mag weder Pizza noch Sushi.</span>'],
          ['<span class="de">Anna arbeitet weder im Büro noch zu Hause.</span>']
        ]
      },
      hinglish: 'Pattern seedha hai: <b>weder</b> ke baad pehli cheez, phir <b>noch</b>, phir doosri cheez. Dono hisse jodi mein aate hain.'
    },
    {
      title: 'Was kann es verbinden?',
      body: [ '"weder ... noch" can connect nouns, verbs, adjectives, adverbs, or prepositional phrases.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Nouns', 'weder Kaffee noch Tee'],
          ['Verbs', 'weder lesen noch schreiben'],
          ['Adjectives', 'weder müde noch krank'],
          ['Adverbs', 'weder heute noch morgen'],
          ['Prepositional phrases', 'weder in Berlin noch in Hamburg']
        ]
      },
      hinglish: 'Isse tum kai tarah ki cheezein jod sakte ho \u2014 nouns, verbs, adjectives, adverbs ya poore prepositional phrases. Bas dono taraf ek hi tarah ka element aana chahiye.'
    },
    {
      title: '"weder ... noch" vs "sowohl ... als auch"',
      body: [ 'These are opposite: one confirms both, the other denies both.' ],
      table: {
        head: ['sowohl ... als auch (both true)', 'weder ... noch (neither true)'],
        rows: [
          ['<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span>', '<span class="de">Anna spricht weder Deutsch noch Englisch.</span>']
        ]
      },
      hinglish: 'Yeh dono ek doosre ke ulat hain. <b>sowohl ... als auch</b> kehta hai ki dono sach hain, aur <b>weder ... noch</b> kehta hai ki dono mein se koi bhi sach nahi.'
    },
    {
      title: '"weder ... noch" vs "nicht ... und nicht"',
      body: [ 'You can build the same meaning with "nicht \u2026 und nicht", and it is not ungrammatical \u2014 it just sounds heavy and repetitive. In practice Germans reach for "weder \u2026 noch", especially in writing.' ],
      table: {
        head: ['Grammatical but clunky', 'Natural German'],
        rows: [
          ['<span class="strike de">Ich trinke nicht Kaffee und nicht Tee.</span>', '<span class="de">Ich trinke weder Kaffee noch Tee.</span>']
        ]
      },
      hinglish: '"nicht \u2026 und nicht" se bhi wahi matlab ban jaata hai, aur woh galat nahi hai \u2014 bas bhaari aur repetitive lagta hai. Isliye German mein log aksar <b>weder \u2026 noch</b> hi use karte hain, khaas kar likhne mein.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show weder...noch in business and education contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das Unternehmen investiert weder in Werbung noch in Forschung.</span>'],
          ['<span class="de">Die Bibliothek ist weder am Samstag noch am Sonntag geöffnet.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki yeh structure asli mein kahan aata hai \u2014 business reports aur roz-marra ke formal notices mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"weder ... noch" is common in newspaper articles, reports, presentations, workplace communication, and academic writing. It makes writing more concise and elegant.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from combining "weder" with "und" or "oder", or adding an extra "nicht".' ],
      mistakes: [
        { wrong: 'Weder Doris und Timo kommt.', right: 'Weder Doris noch Timo kommt.', why: '"weder" is always completed by "noch" \u2014 it cannot be paired with "und".' },
        { wrong: 'Ich trinke weder Kaffee und Tee.', right: 'Ich trinke weder Kaffee noch Tee.', why: 'Same rule inside a full sentence: the second half must be "noch", not "und".' },
        { wrong: 'Ich mag weder Kaffee oder Tee.', right: 'Ich mag weder Kaffee noch Tee.', why: '"weder" pairs only with "noch", never "oder".' },
        { wrong: 'Anna spricht weder Deutsch auch Englisch.', right: 'Anna spricht weder Deutsch noch Englisch.', why: 'The second half of the connector is "noch", not "auch" (that belongs to "sowohl ... als auch").' },
        { wrong: 'Ich bin nicht weder müde noch krank.', right: 'Ich bin weder müde noch krank.', why: '"weder ... noch" already carries full negation — never add an extra "nicht".' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 <b>noch</b> ki jagah <b>und</b> ya <b>oder</b> laga dena, ya phir ek extra <b>nicht</b> jod dena. Yaad rakho ki <b>weder ... noch</b> khud hi poora negation kar deta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"weder ... noch" appears frequently in Goethe B2 writing to negate two alternatives elegantly.' ],
      note: 'Memory trick: weder = first negative, noch = second negative, neither A nor B. Need to say both are true? Use sowohl...als auch. Need to say neither is true? Use weder...noch.',
      hinglish: 'Goethe B2 ki writing mein yeh kaam aata hai, kyunki ek hi saaf structure mein dono cheezon ko negate kar dete ho.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Jahresbericht: Hilfe bei Suchtkrankheiten',
    titleEn: 'Annual report: help with addiction illnesses',
    tokens: [
      { w: 'Unsere', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Beratungsstelle', role: 'plain', en: 'counselling centre', hi: 'परामर्श केंद्र', type: 'Noun · fem.' },
      { w: 'hilft', role: 'plain', en: 'helps', hi: 'मदद करता है', type: 'Verb · helfen' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोगों', type: 'Noun · plural' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Suchtkrankheiten', role: 'plain', en: 'addiction illnesses (Satzende)', hi: 'लत की बीमारियों (Satzende)', type: 'Noun · plural', why: 'die Suchtkrankheit (this chapter).' },
      { w: '.', plain: true },
      { w: 'Weder', role: 'r-connector', en: 'neither', hi: 'न', type: 'Konjunktion · weder … noch', why: 'weder … noch = neither … nor: negates two elements at once (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Verwaltung', role: 'plain', en: 'administration', hi: 'प्रशासन', type: 'Noun · fem.', why: 'die Verwaltung (this chapter).' },
      { w: 'noch', role: 'r-connector', en: 'nor', hi: 'न ही', type: 'Konjunktion · weder … noch' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Stadt', role: 'plain', en: 'city (Satzende)', hi: 'शहर (Satzende)', type: 'Noun · fem.' },
      { w: 'finanziert', role: 'plain', en: 'finances', hi: 'वित्तपोषित करता है', type: 'Verb · finanzieren' },
      { w: 'unsere', role: 'plain', en: 'our', hi: 'हमारे', type: 'Possessivartikel' },
      { w: 'Arbeit', role: 'plain', en: 'work (Satzende)', hi: 'काम (Satzende)', type: 'Noun · fem.' },
      { w: 'vollständig', role: 'plain', en: 'fully (Satzende)', hi: 'पूरी तरह (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: 'इसलिए', type: 'Adverb' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Spendenbereitschaft', role: 'plain', en: 'willingness to donate (Satzende)', hi: 'दान देने की इच्छा (Satzende)', type: 'Noun · fem.', why: 'die Spendenbereitschaft (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Bevölkerung', role: 'plain', en: 'population', hi: 'जनसंख्या के', type: 'Noun · fem.' },
      { w: 'angewiesen', role: 'plain', en: 'dependent (Satzende)', hi: 'निर्भर (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'unseren', role: 'plain', en: 'our', hi: 'हमारे', type: 'Possessivartikel · Dat.' },
      { w: 'Kursen', role: 'plain', en: 'courses (Satzende)', hi: 'पाठ्यक्रमों (Satzende)', type: 'Noun · plural' },
      { w: 'trainieren', role: 'plain', en: 'train', hi: 'प्रशिक्षित करते हैं', type: 'Verb · trainieren' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Teilnehmer', role: 'plain', en: 'participants', hi: 'प्रतिभागी', type: 'Noun · plural' },
      { w: 'vor', role: 'plain', en: 'above', hi: 'सबसे', type: 'Preposition' },
      { w: 'allem', role: 'plain', en: 'all', hi: 'ऊपर', type: 'Pronoun' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Selbstbeherrschung', role: 'plain', en: 'self-control (Satzende)', hi: 'आत्म-नियंत्रण (Satzende)', type: 'Noun · fem.', why: 'die Selbstbeherrschung (this chapter).' },
      { w: '.', plain: true },
      { w: 'Weder', role: 'r-connector', en: 'neither', hi: 'न', type: 'Konjunktion · weder … noch (Satzanfang)' },
      { w: 'Rückfälle', role: 'plain', en: 'relapses', hi: 'पुनरावर्तन', type: 'Noun · plural' },
      { w: 'noch', role: 'r-connector', en: 'nor', hi: 'न ही', type: 'Konjunktion · weder … noch' },
      { w: 'gelegentliche', role: 'plain', en: 'occasional', hi: 'कभी-कभार', type: 'Adjective' },
      { w: 'Rückschläge', role: 'plain', en: 'setbacks (Satzende, invertierte Wortstellung)', hi: 'असफलताएँ (Satzende)', type: 'Noun · plural', why: 'When weder … noch opens the sentence, the finite verb follows immediately in position 2 (inverted word order).' },
      { w: 'entmutigen', role: 'plain', en: 'discourage', hi: 'हतोत्साहित करते हैं', type: 'Verb · entmutigen (Position 2)' },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारी', type: 'Possessivartikel' },
      { w: 'Team', role: 'plain', en: 'team (Satzende)', hi: 'टीम (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Weder', role: 'r-connector', en: 'neither', hi: 'न तो', type: 'Konjunktion · weder … noch', why: 'weder … noch negates two things at once (this chapter).' },
      { w: 'ausreichend', role: 'plain', en: 'sufficient', hi: 'पर्याप्त', type: 'Adjective' },
      { w: 'Personal', role: 'plain', en: 'staff', hi: 'कर्मचारी', type: 'Noun · neut.' },
      { w: 'noch', role: 'r-connector', en: 'nor', hi: 'न ही', type: 'Konjunktion' },
      { w: 'genügend', role: 'plain', en: 'enough', hi: 'पर्याप्त', type: 'Adjective' },
      { w: 'Spendengelder', role: 'plain', en: 'donation funds', hi: 'दान राशि', type: 'Noun · plural' },
      { w: 'stehen', role: 'plain', en: 'are available', hi: 'उपलब्ध हैं', type: 'Verb · zur Verfügung stehen' },
      { w: 'uns', role: 'plain', en: 'to us', hi: 'हमारे लिए', type: 'Pronoun · Dat.' },
      { w: 'derzeit', role: 'plain', en: 'currently', hi: 'फ़िलहाल', type: 'Adverb' },
      { w: 'zur', role: 'plain', en: 'at', hi: 'के लिए', type: 'Contraction · zu der' },
      { w: 'Verfügung', role: 'plain', en: 'disposal (Satzende)', hi: 'उपलब्धता (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'doch', role: 'plain', en: 'yet', hi: 'फिर भी', type: 'Adverb' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'geben', role: 'plain', en: 'give', hi: 'हार', type: 'Verb · aufgeben' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'auf', role: 'plain', en: 'up (Satzende)', hi: 'नहीं मानते (Satzende)', type: 'Separable prefix · aufgeben' },
      { w: '.', plain: true }
    ],
    translation: 'Our counselling centre helps people with addiction illnesses. Neither the administration nor the city fully finances our work. We are therefore dependent on the population\u2019s willingness to donate. In our courses, participants train above all their self-control. Neither relapses nor occasional setbacks discourage our team. Neither sufficient staff nor enough donation funds are currently available to us, yet we do not give up.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_022_L001', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hat die Verwaltung endlich auf unsere Beschwerde reagiert?', en: 'Timo, has the administration finally responded to our complaint?' },
      { id: 'B2_022_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, weder die Verwaltung noch die Polizei hat sich gemeldet.', en: 'No, neither the administration nor the police has responded.' },
      { id: 'B2_022_L003', speaker: 'Doris', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und den Schaden am Zaun hat auch niemand angesehen?', en: 'And has nobody looked at the damage to the fence either?' },
      { id: 'B2_022_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Weder sie noch wir haben ihn bisher gesehen — das ganze Verfahren steht still.', en: 'Neither they nor we have seen it so far — the whole process is stalled.' }
    ],
    transcript: 'Timo, hat die Verwaltung endlich auf unsere Beschwerde reagiert? Nein, weder die Verwaltung noch die Polizei hat sich gemeldet. Und den Schaden am Zaun hat auch niemand angesehen? Weder sie noch wir haben ihn bisher gesehen — das ganze Verfahren steht still.',
    translation: 'Timo, has the administration finally responded to our complaint? No, neither the administration nor the police has responded. And has nobody looked at the damage to the fence either? Neither they nor we have seen it so far — the whole process is stalled.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hat' },
      { w: 'die' },
      { w: 'Verwaltung' },
      { w: 'endlich' },
      { w: 'auf' },
      { w: 'unsere' },
      { w: 'Beschwerde' },
      { w: 'reagiert' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'weder' },
      { w: 'die' },
      { w: 'Verwaltung' },
      { w: 'noch' },
      { w: 'die' },
      { w: 'Polizei' },
      { w: 'hat' },
      { w: 'sich' },
      { w: 'gemeldet' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'den' },
      { w: 'Schaden' },
      { w: 'am' },
      { w: 'Zaun' },
      { w: 'hat' },
      { w: 'auch' },
      { w: 'niemand' },
      { w: 'angesehen' },
      { w: '?', plain: true },
      { w: 'Weder' },
      { w: 'sie' },
      { w: 'noch' },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'ihn' },
      { w: 'bisher' },
      { w: 'gesehen' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'ganze' },
      { w: 'Verfahren' },
      { w: 'steht' },
      { w: 'still' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer hat auf die Beschwerde reagiert?', qEn: 'Who has responded to the complaint?', options: ['die Verwaltung', 'die Polizei', 'weder die Verwaltung noch die Polizei', 'beide'], optionsEn: ['the administration', 'the police', 'neither the administration nor the police', 'both'], answer: 2,
        explain: '"Weder die Verwaltung noch die Polizei hat sich gemeldet."' },
      { q: 'Hat jemand den Schaden am Zaun gesehen?', qEn: 'Has anyone seen the fence damage?', options: ['ja, beide', 'nur die Polizei', 'weder sie noch wir', 'nur Doris'], optionsEn: ['yes, both', 'only the police', 'neither they nor we', 'only Doris'], answer: 2,
        explain: '"Weder sie noch wir haben ihn bisher gesehen."' }
    ]
  },

  speaking: [
    { task: "Ein Kollege fragt, ob die Verwaltung reagiert hat.", taskEn: "A colleague asks whether the administration responded.", de: "Nein, weder die Verwaltung noch die Polizei hat sich gemeldet.", en: "No, neither the administration nor the police got in touch." },
    { task: "Er fragt nach dem Schaden am Zaun.", taskEn: "He asks about the damage to the fence.", de: "Der Schaden wurde weder gemeldet noch bezahlt.", en: "The damage was neither reported nor paid for." },
    { task: "Deine Chefin fragt, ob du den Vorschlag gut findest.", taskEn: "Your boss asks whether you think the proposal is good.", de: "Ich finde ihn weder gut noch schlecht, nur unvollständig.", en: "I find it neither good nor bad, just incomplete." },
    { task: "Eine Bekannte fragt, was du am Wochenende willst.", taskEn: "An acquaintance asks what you want at the weekend.", de: "Ich möchte weder ausgehen noch arbeiten, nur schlafen.", en: "I want neither to go out nor to work, just to sleep." },
    { task: "Ein Nachbar fragt, ob jemand gespendet hat.", taskEn: "A neighbour asks whether anybody donated.", de: "Weder die Firma noch die Bank hat gespendet.", en: "Neither the company nor the bank donated." },
    { task: "Rollenspiel: Ihr beschwert euch über die Sachbeschädigung.", taskEn: "Role-play: you complain about the vandalism.", de: "Es wurde weder aufgeräumt noch repariert. — Und weder wir noch die Nachbarn wurden informiert.", en: "It was neither cleared up nor repaired. — And neither we nor the neighbours were informed." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or opinion text (six to eight sentences) about a topic of your choice — using "weder ... noch" at least three times, connecting different types of elements (nouns, verbs, adjectives, or prepositional phrases).',
    starters: ['… verzichtet weder auf … noch auf …', 'Weder … noch … stimmt.'],
    placeholder: 'Die Verwaltung verzichtet weder auf Transparenz noch auf Effizienz …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "weder ... noch" correctly?',
      options: ['Anna spricht weder Deutsch noch Englisch.', 'Anna spricht weder Deutsch und Englisch.', 'Anna spricht weder Deutsch oder Englisch.'],
      answer: 0,
      explain: '"weder" must be paired with the full phrase "noch" — never "und" or "oder".'
    },
    gap: {
      sentence: ['Ich mag weder Pizza ', ' Sushi.'],
      gaps: [ { answer: 'noch', accepts: ['noch'] } ],
      explain: '"noch" is the fixed second half of the connector.'
    },
    match: {
      q: 'Match each connector to its meaning.',
      pairs: [
        { noun: 'sowohl ... als auch', art: 'both are true' },
        { noun: 'weder ... noch', art: 'neither is true' }
      ]
    },
    builder: {
      target: 'Build: "Rohan drinks neither coffee nor tea."',
      bank: ['Rohan', 'trinkt', 'weder', 'Kaffee', 'noch', 'Tee', '.'],
      answer: ['Rohan', 'trinkt', 'weder', 'Kaffee', 'noch', 'Tee', '.'],
      roles: { 'weder': 'r-weder', 'noch': 'r-weder' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin nicht weder müde noch krank.',
      right: 'Ich bin weder müde noch krank.',
      explain: '"weder ... noch" already carries full negation — never add an extra "nicht".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "weder ... noch" mean?', options: ['neither ... nor ...', 'both ... and ...', 'either ... or ...'], answer: 0,
      explain: '"weder ... noch" means "neither ... nor ..." — both alternatives are negative.' },
    { q: 'Which sentence is correct?', options: ['Weder Anna noch Rohan kommt.', 'Weder Doris und Timo kommen.', 'Weder Anna oder Rohan kommt.'], answer: 0,
      explain: 'The full, correct phrase is "weder ... noch" — never combined with "und" or "oder".' },
    { q: 'Which is the natural German alternative to "nicht Kaffee und nicht Tee"?', options: ['weder Kaffee noch Tee', 'sowohl Kaffee als auch Tee', 'nicht nur Kaffee sondern auch Tee'], answer: 0,
      explain: '"weder ... noch" is the elegant, natural German way to express double negation.' },
    { q: 'Which is the negative mirror of "sowohl ... als auch"?', options: ['weder ... noch', 'nicht nur ... sondern auch', 'einerseits ... andererseits'], answer: 0,
      explain: '"weder ... noch" negates both elements, while "sowohl ... als auch" confirms both.' },
    { q: 'Which sentence contains an error?', options: ['Anna spricht weder Deutsch noch Englisch.', 'Anna spricht weder Deutsch auch Englisch.', 'Ich mag weder Pizza noch Sushi.'], answer: 1,
      explain: 'The second half of the connector is "noch", not "auch" — it should be "weder Deutsch noch Englisch".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-weder', html: '"weder ... noch" means "neither ... nor ..." — it expresses that BOTH alternatives are negative, in one elegant stroke.' },
    { c: 'r-weder', html: 'It replaces the clunky, repetitive "nicht ... und nicht" — Germans strongly prefer "weder ... noch".' },
    { c: 'r-weder', html: 'It is the negative mirror of "sowohl ... als auch" (Ch.21) — never add an extra "nicht" alongside it.' }
  ],
  revisionTips: [
    'Practise rewriting awkward "nicht ... und nicht" sentences with "weder ... noch".',
    'Always check that both connected elements are grammatically parallel.',
    'Compare "sowohl ... als auch" and "weder ... noch" on the same base sentence to feel the opposite meanings.'
  ]
};

window.CHAPTER = CHAPTER;
