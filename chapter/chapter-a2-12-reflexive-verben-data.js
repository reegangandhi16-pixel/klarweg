/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 12
   "Reflexive Verben"  (reflexive pronouns Akk/Dat; word order;
   with modals, in Perfekt, in Nebens\u00e4tze). Teaches ONLY reflexive
   verbs. No passive, no relative clauses, no B1 reflexive prepositions.
   Vocabulary source: uploaded chapter-12 list (~57 items; wedding /
   baby / emotion / daily-routine theme). Recycles Ch.11 (wenn),
   Ch.4-5 (weil/dass), Ch.6 (modal Pr\u00e4t.), Ch.7 (Dativ possessives),
   Ch.8-9 (Komparativ, als/wie) and A1.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "auslruhen" \u2192 ausruhen (sich ausruhen, to rest)
   • "an]bieten" \u2192 anbieten (to offer)
   • combining prefix "Nord-" taught in compound Norddeutschland;
     "wohl-f\u00fchlen" \u2192 sich wohlf\u00fchlen (to feel comfortable).
   • "zu - to" kept as the infinitive particle / preposition zu.
============================================================ */
const CHAPTER = {
  id: 'a2-12-reflexive-verben',
  phase: 'A2 · Phase 2',
  number: 12,
  title: 'Reflexive Verben',
  titleEn: 'Reflexive Verbs',
  description: 'Some German verbs point the action back at the doer, and they need a little mirror-word: the reflexive pronoun. Ich freue mich. Ich w\u00e4sche mich. Most take the accusative pronoun (mich, dich, sich, uns, euch), but when there\u2019s already a direct object the pronoun switches to the dative: Ich w\u00e4sche mir die H\u00e4nde. Learn the small pronoun table once and a whole family of everyday verbs \u2014 getting up, getting ready, feeling, meeting, relaxing \u2014 opens up.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 13, title: 'Pr\u00e4positionen mit Dativ', titleEn: 'Prepositions with the Dative' , href: 'chapter-a2-13-praepositionen-dativ.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Enya\u2019s sister is getting married on Saturday, and Enya and Timo are caught up in the preparation \u2014 the dress, the cards, the nerves. Everyone is getting ready, hurrying, calming down, looking forward to it. Which makes it the perfect morning for reflexive verbs: sich beeilen, sich freuen, sich anziehen, sich entspannen. Enya keeps the little pronoun \u2014 mich, dich, sich \u2014 in exactly the right place.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear sich freuen, sich beeilen, sich anziehen in real routines'
    ],
    scene: 'Der Morgen vor der Hochzeit \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Enya'],
    dialogue: [
      { speaker: 'Enya', tokens: [
        { w: 'Beeil', role: 'r-verb', en: 'hurry', hi: 'जल्दी करो', pron: 'be-EIL', type: 'Verb · sich beeilen (imperative)', why: 'sich beeilen = to hurry (reflexive), this chapter.', ex: 'Beeil dich!', exEn: 'Hurry up!' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'जल्दी', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: '!', plain: true },
        { w: 'Unser', role: 'r-subject', en: 'our', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive' },
        { w: 'Bus', role: 'r-subject', en: 'bus', hi: 'बस', pron: 'bus', type: 'Noun · masc.' },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आ रही है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'gleich', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'glykh', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Hurry up! Our bus is coming soon.', hi: 'Jaldi karo! Hamaari bus jald aa rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'ziehe', role: 'r-verb', en: 'am dressing', hi: 'कपड़े पहन रहा हूँ', pron: 'TSEE-uh', type: 'Verb · sich anziehen (ich)', lexicalUnit: 'anziehen', why: 'sich anziehen = to get dressed (reflexive), this chapter.', ex: 'Ich ziehe mich an.', exEn: 'I am getting dressed.' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'gerade', role: 'r-adverb', en: 'just now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'an', role: 'r-verb', en: '(prefix of anziehen)', hi: 'पहनना', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anziehen' },
        { w: '.', plain: true }
      ], en: 'I am getting dressed right now.', hi: 'Main abhi kapde pehen raha hoon.' },
      { speaker: 'Enya', tokens: [
        { w: 'Musst', role: 'r-modalverb', en: 'do you have to', hi: 'ज़रूरत है', pron: 'MUST', type: 'Modal · müssen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'ख़ुद को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'rasieren', role: 'r-verb', en: 'shave', hi: 'दाढ़ी बनाना', pron: 'ra-ZEE-ren', type: 'Verb · sich rasieren (Satzende)', why: 'sich rasieren = to shave (reflexive), this chapter.', ex: 'Musst du dich rasieren?', exEn: 'Do you have to shave?' },
        { w: '?', plain: true }
      ], en: 'Do you still have to shave?', hi: 'Kya tumhe abhi bhi daadhi banaani hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'rasiert', role: 'r-verb', en: 'shaved', hi: 'दाढ़ी बनाई', pron: 'ra-ZEERT', type: 'Partizip II · Satzende', why: 'sich rasieren → habe mich rasiert (recycled Perfekt).' },
        { w: '.', plain: true }
      ], en: 'No, I have already shaved.', hi: 'Nahi, maine pehle hi daadhi bana li.' },
      { speaker: 'Enya', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'am looking forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)', why: 'sich freuen auf = to look forward to (reflexive), this chapter.', ex: 'Ich freue mich auf die Party.', exEn: 'I am looking forward to the party.' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Party', role: 'r-akkusativ', en: 'party', hi: 'पार्टी', pron: 'PAR-ty', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Good! I am looking forward to the party.', hi: 'Achha! Mujhe party ka intezaar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Interessierst', role: 'r-verb', en: 'are you interested', hi: 'दिलचस्पी है', pron: 'in-te-RE-seerst', type: 'Verb · sich interessieren (du)', why: 'sich interessieren für = to be interested in (reflexive), this chapter.', ex: 'Interessierst du dich für Musik?', exEn: 'Are you interested in music?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'अपनी', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'für', role: 'r-preposition', en: 'in', hi: 'में', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: '?', plain: true }
      ], en: 'Me too. Are you interested in the music there?', hi: 'Main bhi. Kya tumhe wahaan ke sangeet mein dilchaspi hai?' },
      { speaker: 'Enya', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्साहित हूँ', pron: 'FROY-uh', type: 'Verb · sich freuen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'owf', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Tango', role: 'r-akkusativ', en: 'tango', hi: 'टैंगो', pron: 'TAN-go', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Yes! I look forward very much to the tango.', hi: 'Haan! Mujhe tango ka bahut intezaar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'beeilen', role: 'r-verb', en: 'let us hurry', hi: 'जल्दी करते हैं', pron: 'be-EI-len', type: 'Verb · sich beeilen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'ख़ुद को', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: '!', plain: true }
      ], en: 'Then let us rather hurry!', hi: 'Toh chalo jaldi karte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A <strong>reflexive verb</strong> sends its action back to the doer, so it needs a little mirror-word \u2014 the <strong>reflexive pronoun</strong>. For most reflexive verbs the pronoun is <strong>accusative</strong>: <span class="de">ich \u2192 <span class="r-reflexiv">mich</span>, du \u2192 <span class="r-reflexiv">dich</span>, er/sie/es/sie/Sie \u2192 <span class="r-reflexiv">sich</span>, wir \u2192 <span class="r-reflexiv">uns</span>, ihr \u2192 <span class="r-reflexiv">euch</span></span>. So: <span class="de">Ich freue <span class="r-reflexiv">mich</span>. Ich w\u00e4sche <span class="r-reflexiv">mich</span>.</span> But the moment the sentence already has a <strong>direct object</strong>, the pronoun switches to the <strong>dative</strong> (mir, dir): <span class="de">Ich w\u00e4sche <span class="r-reflexiv">mir</span> die H\u00e4nde.</span> Only <em>ich</em> and <em>du</em> change shape (mich/mir, dich/dir); everyone else keeps sich / uns / euch. Learn the little table once and a whole family of daily-life verbs \u2014 getting ready, feeling, meeting, relaxing \u2014 falls into place.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is REFLEXIVE VERBS (reflexive pronouns, accusative vs dative, word order, with modals, in the Perfekt, in Nebens\u00e4tze). ' +
    'No passive, no relative clauses. The learner wrote about routines/feelings/getting ready below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Accusative reflexive pronouns: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich. Dative (only ich/du differ): ich mir, du dir; the rest stay sich/uns/euch.\n' +
    '- Use the DATIVE pronoun when the clause already has a direct object: "Ich w\u00e4sche mir die H\u00e4nde." / "Ich putze mir die Z\u00e4hne." Otherwise ACCUSATIVE: "Ich w\u00e4sche mich."\n' +
    '- A reflexive verb must keep its pronoun: "Ich freue mich." (not "Ich freue."), "Ich erinnere mich." Flag a missing pronoun.\n' +
    '- Word order: pronoun right after the conjugated verb ("Ich freue mich \u2026"); after a modal the verb is infinitive at the end ("Ich muss mich beeilen"); in the Perfekt use haben + pronoun after the finite verb + Partizip last ("Ich habe mich gefreut"); in a Nebensatz the pronoun follows the subject and the verb is last ("\u2026, wenn ich mich beeile").\n' +
    '- sich treffen takes mit + dative for the person: "Ich treffe mich mit Anna." (not "Ich treffe mich Anna.").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Reflexive check:</b> one sentence on the pronoun choice (acc/dat) and its position.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You place the pronoun perfectly \u2014 mich/mir in the right spot every time. Next: lock in the always-dative prepositions in <span class="de">Pr\u00e4positionen mit Dativ</span>.',
    mid: 'Good. Re-read the acc-vs-dat card once (object present \u2192 dative), then continue.',
    low: 'Worth another pass \u2014 every reflexive verb needs its pronoun (mich, dich, sich \u2026), and it turns dative when there\u2019s already an object. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'freue', role: 'r-verb' },
    { w: 'mich', role: 'r-reflexiv' }, { w: 'auf', role: 'r-preposition' },
    { w: 'die', role: 'r-akkusativ' }, { w: 'Feier', role: 'r-object' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the mirror-word: reflexive verbs need a pronoun (mich, dich, sich \u2026).' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A wedding morning \u2014 everyone gets ready, hurries and relaxes.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the routine/emotion words: sich beeilen, sich freuen, nerv\u00f6s, das Brautpaar.' },
    { id: 'grammar',    label: 'reflexiv',   tag: 'core',
      objective: 'Master the pronoun table, acc vs dat, and word order with modals/Perfekt/wenn.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a morning routine \u2014 reflexive verb after reflexive verb.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow who does what to get ready in a quick morning chat.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe your daily routine and feelings with reflexive verbs.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write about your morning and weekend using many reflexive verbs.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the pronouns, acc-vs-dat and word order with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s routine and emotion words \u2014 sich beeilen, sich freuen, sich entspannen, nerv\u00f6s, das Brautpaar \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Reflexive-pronoun drills, acc-vs-dat sorting, word-order with modals/Perfekt/wenn, and a my-morning task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The reflexive-pronoun table, accusative vs dative, the common-verbs list, word-order cases, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich freue mich.', text: 'Use the accusative reflexive pronoun' },
    { de: 'Ich wasche mir die H\u00e4nde.', text: 'Switch to dative when there\u2019s an object' },
    { de: 'Ich muss mich beeilen.', text: 'Place the pronoun with a modal verb' },
    { de: 'Ich habe mich gefreut.', text: 'Form the Perfekt with haben' },
    { de: '\u2026, wenn ich mich beeile.', text: 'Use reflexives in a Nebensatz' }
  ],

  // ---------- Vocabulary (57 items) ----------
  vocab: [
    // ===== Reflexive verbs (core set) =====
    { de: 'sich freuen', pos: 'verb', en: 'to be glad, to look forward (auf/\u00fcber)', hi: 'खुश होना, उत्सुक होना', ex: 'Ich freue mich auf die Hochzeit.', exEn: 'I\u2019m looking forward to the wedding.', conj: { praesens: 'freut sich', praeteritum: 'freute sich', perfekt: 'hat sich gefreut' } },
    { de: 'sich interessieren', pos: 'verb', en: 'to be interested (f\u00fcr)', hi: 'दिलचस्पी होना', ex: 'Ich interessiere mich f\u00fcr Musik.', exEn: 'I\u2019m interested in music.', conj: { praesens: 'interessiert sich', praeteritum: 'interessierte sich', perfekt: 'hat sich interessiert' } },
    { de: 'sich treffen', pos: 'verb', en: 'to meet (mit)', hi: 'मिलना', ex: 'Wir treffen uns vor der Kirche.', exEn: 'We meet in front of the church.', conj: { praesens: 'trifft sich', praeteritum: 'traf sich', perfekt: 'hat sich getroffen' } },
    { de: 'sich waschen', pos: 'verb', en: 'to wash (oneself)', hi: 'धोना', ex: 'Ich wasche mich und dann die H\u00e4nde.', exEn: 'I wash myself and then my hands.', conj: { praesens: 'w\u00e4scht sich', praeteritum: 'wusch sich', perfekt: 'hat sich gewaschen' } },
    { de: 'sich anziehen', pos: 'verb', en: 'to get dressed (separable)', hi: 'कपड़े पहनना', ex: 'Meine Schwester zieht sich an.', exEn: 'My sister gets dressed.', conj: { praesens: 'zieht sich an', praeteritum: 'zog sich an', perfekt: 'hat sich angezogen' } },
    { de: 'sich setzen', pos: 'verb', en: 'to sit down', hi: 'बैठना', ex: 'Bitte setz dich!', exEn: 'Please sit down!', conj: { praesens: 'setzt sich', praeteritum: 'setzte sich', perfekt: 'hat sich gesetzt' } },
    { de: 'sich beeilen', pos: 'verb', en: 'to hurry', hi: 'जल्दी करना', ex: 'Beeil dich, der Verkehr ist schlimm!', exEn: 'Hurry up, the traffic is bad!', conj: { praesens: 'beeilt sich', praeteritum: 'beeilte sich', perfekt: 'hat sich beeilt' } },
    { de: 'sich entspannen', pos: 'verb', en: 'to relax', hi: 'आराम करना', ex: 'Nach der Arbeit entspanne ich mich.', exEn: 'After work I relax.', conj: { praesens: 'entspannt sich', praeteritum: 'entspannte sich', perfekt: 'hat sich entspannt' } },
    { de: 'sich erinnern', pos: 'verb', en: 'to remember (an + Akk.)', hi: 'याद करना', ex: 'Ich erinnere mich an diesen Tag.', exEn: 'I remember this day.', conj: { praesens: 'erinnert sich', praeteritum: 'erinnerte sich', perfekt: 'hat sich erinnert' } },
    { de: 'sich f\u00fchlen', pos: 'verb', en: 'to feel (a certain way)', hi: 'महसूस करना', ex: 'Ich f\u00fchle mich heute wunderbar.', exEn: 'I feel wonderful today.', conj: { praesens: 'f\u00fchlt sich', praeteritum: 'f\u00fchlte sich', perfekt: 'hat sich gef\u00fchlt' } },
    { de: 'sich vorstellen', pos: 'verb', en: 'to introduce oneself; to imagine (separable)', hi: 'परिचय देना; कल्पना करना', ex: 'Darf ich mich vorstellen?', exEn: 'May I introduce myself?', conj: { praesens: 'stellt sich vor', praeteritum: 'stellte sich vor', perfekt: 'hat sich vorgestellt' } },
    { de: 'sich anmelden', pos: 'verb', en: 'to register, to sign up (separable)', hi: 'पंजीकरण करना', ex: 'Ich melde mich f\u00fcr den Kurs an.', exEn: 'I sign up for the course.', conj: { praesens: 'meldet sich an', praeteritum: 'meldete sich an', perfekt: 'hat sich angemeldet' } },
    { de: 'sich entschuldigen', pos: 'verb', en: 'to apologise', hi: 'माफ़ी माँगना', ex: 'Entschuldige dich nicht, es ist okay.', exEn: 'Don\u2019t apologise, it\u2019s okay.', conj: { praesens: 'entschuldigt sich', praeteritum: 'entschuldigte sich', perfekt: 'hat sich entschuldigt' } },
    { de: 'sich k\u00fcmmern', pos: 'verb', en: 'to take care (um + Akk.)', hi: 'देखभाल करना', ex: 'Ich k\u00fcmmere mich um die Karten.', exEn: 'I\u2019ll take care of the cards.', conj: { praesens: 'k\u00fcmmert sich', praeteritum: 'k\u00fcmmerte sich', perfekt: 'hat sich gek\u00fcmmert' } },
    { de: 'sich rasieren', pos: 'verb', en: 'to shave', hi: 'दाढ़ी बनाना', ex: 'Max muss sich noch rasieren.', exEn: 'Max still has to shave.', conj: { praesens: 'rasiert sich', praeteritum: 'rasierte sich', perfekt: 'hat sich rasiert' } },
    { de: 'sich duschen', pos: 'verb', en: 'to shower', hi: 'नहाना', ex: 'Ich dusche mich am Morgen.', exEn: 'I shower in the morning.', conj: { praesens: 'duscht sich', praeteritum: 'duschte sich', perfekt: 'hat sich geduscht' } },
    { de: 'sich ausruhen', pos: 'verb', en: 'to rest (separable)', hi: 'आराम करना', ex: 'Am Wochenende ruhe ich mich aus.', exEn: 'On the weekend I rest.', conj: { praesens: 'ruht sich aus', praeteritum: 'ruhte sich aus', perfekt: 'hat sich ausgeruht' } },
    { de: 'sich erholen', pos: 'verb', en: 'to recover, to recuperate', hi: 'स्वस्थ होना', ex: 'Ich habe mich gut erholt.', exEn: 'I recovered well.', conj: { praesens: 'erholt sich', praeteritum: 'erholte sich', perfekt: 'hat sich erholt' } },
    { de: 'sich vorbereiten', pos: 'verb', en: 'to prepare (auf + Akk.) (separable)', hi: 'तैयारी करना', ex: 'Ich bereite mich auf die Pr\u00fcfung vor.', exEn: 'I prepare for the exam.', conj: { praesens: 'bereitet sich vor', praeteritum: 'bereitete sich vor', perfekt: 'hat sich vorbereitet' } },
    { de: 'sich bedanken', pos: 'verb', en: 'to say thank you (bei)', hi: 'धन्यवाद देना', ex: 'Ich m\u00f6chte mich bei euch bedanken.', exEn: 'I\u2019d like to thank you all.', conj: { praesens: 'bedankt sich', praeteritum: 'bedankte sich', perfekt: 'hat sich bedankt' } },
    { de: 'sich \u00e4rgern', pos: 'verb', en: 'to be annoyed (\u00fcber + Akk.)', hi: 'नाराज़ होना', ex: 'Ich \u00e4rgere mich \u00fcber den Verkehr.', exEn: 'I\u2019m annoyed about the traffic.', conj: { praesens: '\u00e4rgert sich', praeteritum: '\u00e4rgerte sich', perfekt: 'hat sich ge\u00e4rgert' } },
    { de: 'sich wohlf\u00fchlen', pos: 'verb', en: 'to feel comfortable (separable)', hi: 'सहज महसूस करना', ex: 'Bei euch f\u00fchle ich mich wohl.', exEn: 'I feel comfortable with you.', conj: { praesens: 'f\u00fchlt sich wohl', praeteritum: 'f\u00fchlte sich wohl', perfekt: 'hat sich wohlgef\u00fchlt' } },
    { de: 'sich unterhalten', pos: 'verb', en: 'to chat, to talk (mit)', hi: 'बातचीत करना', ex: 'Wir unterhalten uns \u00fcber die Feier.', exEn: 'We chat about the party.', conj: { praesens: 'unterh\u00e4lt sich', praeteritum: 'unterhielt sich', perfekt: 'hat sich unterhalten' } },
    { de: 'sich streiten', pos: 'verb', en: 'to argue, to quarrel', hi: 'झगड़ना', ex: 'Wir streiten uns fast nie.', exEn: 'We almost never argue.', conj: { praesens: 'streitet sich', praeteritum: 'stritt sich', perfekt: 'hat sich gestritten' } },
    { de: 'sich beruhigen', pos: 'verb', en: 'to calm down', hi: 'शांत होना', ex: 'Beruhige dich, alles ist gut!', exEn: 'Calm down, everything\u2019s fine!', conj: { praesens: 'beruhigt sich', praeteritum: 'beruhigte sich', perfekt: 'hat sich beruhigt' } },
    // ===== Non-reflexive verbs =====
    { de: 'anbieten', pos: 'verb', en: 'to offer (separable)', hi: 'पेश करना', ex: 'Darf ich dir Kaffee anbieten?', exEn: 'May I offer you coffee?', conj: { praesens: 'bietet an', praeteritum: 'bot an', perfekt: 'hat angeboten' } },
    { de: 'bewundern', pos: 'verb', en: 'to admire', hi: 'प्रशंसा करना', ex: 'Alle bewundern das Brautkleid.', exEn: 'Everyone admires the wedding dress.', conj: { praesens: 'bewundert', praeteritum: 'bewunderte', perfekt: 'hat bewundert' } },
    { de: 'erkennen', pos: 'verb', en: 'to recognize', hi: 'पहचानना', ex: 'Ich erkenne dich kaum im Anzug!', exEn: 'I hardly recognize you in a suit!', conj: { praesens: 'erkennt', praeteritum: 'erkannte', perfekt: 'hat erkannt' } },
    { de: 'fallen', pos: 'verb', en: 'to fall', hi: 'गिरना', ex: 'Pass auf, dass du nicht f\u00e4llst!', exEn: 'Watch out that you don\u2019t fall!', conj: { praesens: 'f\u00e4llt', praeteritum: 'fiel', perfekt: 'ist gefallen' } },
    { de: 'gestalten', pos: 'verb', en: 'to design, to arrange', hi: 'डिज़ाइन करना', ex: 'Wir gestalten die Glückwunschkarte selbst.', exEn: 'We design the greetings card ourselves.', conj: { praesens: 'gestaltet', praeteritum: 'gestaltete', perfekt: 'hat gestaltet' } },
    { de: 'gratulieren', pos: 'verb', en: 'to congratulate (+ Dativ)', hi: 'बधाई देना', ex: 'Wir gratulieren dem Brautpaar.', exEn: 'We congratulate the newlyweds.', conj: { praesens: 'gratuliert', praeteritum: 'gratulierte', perfekt: 'hat gratuliert' } },
    { de: 'schm\u00fccken', pos: 'verb', en: 'to decorate', hi: 'सजाना', ex: 'Wir schm\u00fccken den Saal mit Blumen.', exEn: 'We decorate the hall with flowers.', conj: { praesens: 'schm\u00fcckt', praeteritum: 'schm\u00fcckte', perfekt: 'hat geschm\u00fcckt' } },
    // ===== Wedding & family nouns =====
    { de: 'Brautpaar', art: 'das', gender: 'n', plural: 'Brautpaare', pos: 'noun', en: 'bride and groom, newlyweds', hi: 'नवविवाहित जोड़ा', ex: 'Das Brautpaar freut sich sehr.', exEn: 'The newlyweds are very happy.' },
    { de: 'Brautkleid', art: 'das', gender: 'n', plural: 'Brautkleider', pos: 'noun', en: 'wedding dress', hi: 'शादी का जोड़ा', ex: 'Das Brautkleid ist wundersch\u00f6n.', exEn: 'The wedding dress is gorgeous.' },
    { de: 'Liebe', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'love', hi: 'प्यार', ex: 'Bei einer Hochzeit geht es um die Liebe.', exEn: 'A wedding is about love.' },
    { de: 'Geburt', art: 'die', gender: 'f', plural: 'Geburten', pos: 'noun', en: 'birth', hi: 'जन्म', ex: 'Nach der Geburt braucht man Babykleidung.', exEn: 'After the birth you need baby clothes.' },
    { de: 'Babykleidung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'baby clothes', hi: 'शिशु वस्त्र', ex: 'Wir kaufen Babykleidung als Geschenk.', exEn: 'We\u2019re buying baby clothes as a gift.' },
    { de: 'Storch', art: 'der', gender: 'm', plural: 'St\u00f6rche', pos: 'noun', en: 'stork', hi: 'सारस', ex: 'Der Storch ist ein Symbol f\u00fcr die Geburt.', exEn: 'The stork is a symbol of birth.' },
    { de: 'Geburtstagsparty', art: 'die', gender: 'f', plural: 'Geburtstagspartys', pos: 'noun', en: 'birthday party', hi: 'जन्मदिन की पार्टी', ex: 'Auf der Geburtstagsparty tanzen wir.', exEn: 'At the birthday party we dance.' },
    { de: 'Gl\u00fcckwunschkarte', art: 'die', gender: 'f', plural: 'Gl\u00fcckwunschkarten', pos: 'noun', en: 'greetings card', hi: 'शुभकामना कार्ड', ex: 'Ich schreibe eine Gl\u00fcckwunschkarte.', exEn: 'I\u2019m writing a greetings card.' },
    { de: 'Absage', art: 'die', gender: 'f', plural: 'Absagen', pos: 'noun', en: 'cancellation, refusal', hi: 'रद्दीकरण', ex: 'Zum Gl\u00fcck gab es keine Absage.', exEn: 'Luckily there was no cancellation.' },
    // ===== Emotion adjectives =====
    { de: 'nerv\u00f6s', pos: 'adjective', en: 'nervous', hi: 'घबराया हुआ', ex: 'Vor der Feier bin ich nerv\u00f6s.', exEn: 'Before the party I\u2019m nervous.' },
    { de: 'gestresst', pos: 'adjective', en: 'stressed', hi: 'तनावग्रस्त', ex: 'Im Verkehr f\u00fchle ich mich gestresst.', exEn: 'In traffic I feel stressed.' },
    { de: 'genervt', pos: 'adjective', en: 'annoyed, irritated', hi: 'चिढ़ा हुआ', ex: 'Ich bin genervt, wenn der Bus zu sp\u00e4t kommt.', exEn: 'I\u2019m annoyed when the bus is late.' },
    { de: '\u00e4rgerlich', pos: 'adjective', en: 'annoying; annoyed', hi: 'नाराज़; परेशान करने वाला', ex: 'Das ist wirklich \u00e4rgerlich.', exEn: 'That\u2019s really annoying.' },
    { de: 'ungl\u00fccklich', pos: 'adjective', en: 'unhappy', hi: 'दुखी', ex: 'Niemand ist heute ungl\u00fccklich.', exEn: 'Nobody is unhappy today.' },
    { de: 'aufregend', pos: 'adjective', en: 'exciting', hi: 'रोमांचक', ex: 'Eine Hochzeit ist aufregend.', exEn: 'A wedding is exciting.' },
    { de: 'hilfsbereit', pos: 'adjective', en: 'helpful', hi: 'मददगार', ex: 'Rohan ist immer hilfsbereit.', exEn: 'Rohan is always helpful.' },
    { de: 'unsympathisch', pos: 'adjective', en: 'unlikeable, disagreeable', hi: 'अप्रिय', ex: 'Der Kellner war ein bisschen unsympathisch.', exEn: 'The waiter was a little disagreeable.' },
    { de: 'riesig', pos: 'adjective', en: 'huge, vast', hi: 'विशाल', ex: 'Der Saal ist riesig.', exEn: 'The hall is huge.' },
    { de: 'schlimm', pos: 'adjective', en: 'bad', hi: 'ख़राब', ex: 'Der Verkehr ist heute schlimm.', exEn: 'The traffic is bad today.' },
    { de: 'verspätet', pos: 'adjective', en: 'late, delayed', hi: 'देरी से', ex: 'Der Zug war verspätet.', exEn: 'The train was delayed.' },
    // ===== Small words / connectors =====
    { de: 'jeweils', pos: 'adverb', en: 'each, respectively', hi: 'प्रत्येक', ex: 'Wir bekommen jeweils eine Karte.', exEn: 'We each get a card.' },
    { de: 'nirgends', pos: 'adverb', en: 'nowhere', hi: 'कहीं नहीं', ex: 'Nirgends ist es sch\u00f6ner als hier.', exEn: 'Nowhere is nicer than here.' },
    { de: 'Gegenteil', art: 'das', gender: 'n', plural: 'Gegenteile', pos: 'noun', en: 'opposite', hi: 'विपरीत', ex: 'Das Gegenteil von traurig ist fr\u00f6hlich.', exEn: 'The opposite of sad is happy.' },
    { de: 'Zeile', art: 'die', gender: 'f', plural: 'Zeilen', pos: 'noun', en: 'line (of text)', hi: 'पंक्ति', ex: 'Schreib mir ein paar Zeilen!', exEn: 'Write me a few lines!' },
    { de: 'Sieg', art: 'der', gender: 'm', plural: 'Siege', pos: 'noun', en: 'victory', hi: 'जीत', ex: 'Nach dem Sieg feiern wir.', exEn: 'After the victory we celebrate.' },
    { de: 'zu', pos: 'preposition', en: 'to (Dativ); (with infinitive)', hi: 'को; तक', ex: 'Wir fahren zu der Kirche.', exEn: 'We drive to the church.' },
    // ===== Nouns for people / places / seasons =====
    { de: 'Fr\u00fchjahr', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'spring(time)', hi: 'वसंत', ex: 'Im Fr\u00fchjahr heiraten viele Paare.', exEn: 'In spring many couples get married.' },
    { de: 'F\u00fchrerscheinpr\u00fcfung', art: 'die', gender: 'f', plural: 'F\u00fchrerscheinpr\u00fcfungen', pos: 'noun', en: 'driving test', hi: 'ड्राइविंग टेस्ट', ex: 'Ich bereite mich auf die F\u00fchrerscheinpr\u00fcfung vor.', exEn: 'I\u2019m preparing for the driving test.' },
    { de: 'Schultag', art: 'der', gender: 'm', plural: 'Schultage', pos: 'noun', en: 'school day', hi: 'स्कूल का दिन', ex: 'Ich erinnere mich an meinen ersten Schultag.', exEn: 'I remember my first school day.' },
    { de: 'Seglerin', art: 'die', gender: 'f', plural: 'Seglerinnen', pos: 'noun', en: 'sailor (f.)', hi: 'नाविक', ex: 'Als Seglerin freut sie sich auf das Meer.', exEn: 'As a sailor she looks forward to the sea.' },
    { de: 'Segelsport', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'sailing (sport)', hi: 'नौकायन', ex: 'Max interessiert sich f\u00fcr den Segelsport.', exEn: 'Max is interested in sailing.' },
    { de: 'Musikfan', art: 'der', gender: 'm', plural: 'Musikfans', pos: 'noun', en: 'music fan', hi: 'संगीत प्रेमी', ex: 'Als Musikfan h\u00f6re ich Tango-Musik.', exEn: 'As a music fan I listen to tango music.' },
    { de: 'Tango-Musik', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'tango music', hi: 'टैंगो संगीत', ex: 'Ich interessiere mich f\u00fcr Tango-Musik.', exEn: 'I\u2019m interested in tango music.' },
    { de: 'Horrorfilm', art: 'der', gender: 'm', plural: 'Horrorfilme', pos: 'noun', en: 'horror film', hi: 'डरावनी फ़िल्म', ex: 'Bei einem Horrorfilm f\u00fchle ich mich unwohl.', exEn: 'During a horror film I feel uneasy.' },
    { de: 'Verkehr', art: 'der', gender: 'm', plural: '\u2014', pos: 'noun', en: 'traffic', hi: 'यातायात', ex: 'Der Verkehr ist heute schlimm.', exEn: 'The traffic is bad today.' },
    { de: 'reflexiv', pos: 'adjective', en: 'reflexive', hi: 'निजवाचक', ex: 'sich freuen ist ein reflexives Verb.', exEn: 'sich freuen is a reflexive verb.' },
    { de: 'Reflexivpronomen', art: 'das', gender: 'n', plural: 'Reflexivpronomen', pos: 'noun', en: 'reflexive pronoun', hi: 'निजवाचक सर्वनाम', ex: 'mich, dich, sich sind Reflexivpronomen.', exEn: 'mich, dich, sich are reflexive pronouns.' },
    { de: 'Norddeutschland', pos: 'noun', en: 'Northern Germany', hi: 'उत्तरी जर्मनी', ex: 'In Norddeutschland ist das Meer nah.', exEn: 'In Northern Germany the sea is close.' },
    { de: 'Europa', pos: 'noun', en: 'Europe', hi: 'यूरोप', ex: 'Die Regatta ist die gr\u00f6\u00dfte in Europa.', exEn: 'The regatta is the biggest in Europe.' }
  ],

  // ---------- Reflexive Verben (rule cards) ----------
  grammar: [
    {
      title: 'The reflexive pronoun table',
      goldenRule: 'Only <b>ich</b> and <b>du</b> have separate dative forms (<b>mir/dir</b>). Everyone else uses <b>sich / uns / euch</b> for both.',
      memoryTrick: 'Chaar forms already A1 se aate hain (mich, dich, uns, euch). Naya sirf <b>sich</b> hai \u2014 aur woh er/sie/es/sie/Sie sab ke liye ek hi hai.',
      body: [
        'A reflexive verb needs a pronoun that mirrors the subject. Most reflexive verbs use the <strong>accusative</strong> pronoun; only <em>ich</em> and <em>du</em> have a separate <strong>dative</strong> form.'
      ],
      table: {
        head: ['Subject', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', '<span class="de r-reflexiv">mich</span>', '<span class="de r-reflexiv">mir</span>'],
          ['du', '<span class="de r-reflexiv">dich</span>', '<span class="de r-reflexiv">dir</span>'],
          ['er/sie/es', '<span class="de r-reflexiv">sich</span>', '<span class="de r-reflexiv">sich</span>'],
          ['wir', '<span class="de r-reflexiv">uns</span>', '<span class="de r-reflexiv">uns</span>'],
          ['ihr', '<span class="de r-reflexiv">euch</span>', '<span class="de r-reflexiv">euch</span>'],
          ['sie/Sie', '<span class="de r-reflexiv">sich</span>', '<span class="de r-reflexiv">sich</span>']
        ]
      },
      note: 'Only <b>ich</b> (mich/mir) and <b>du</b> (dich/dir) change between accusative and dative. Everyone else keeps <b>sich / uns / euch</b> for both. The polite <b>Sie</b> uses <b>sich</b> \u2014 lower-case, unlike the pronoun Sie.',
      hinglish: 'Reflexive pronoun subject ka aaina hota hai \u2014 jo kaam karta hai, usi par wapas aata hai. Zyada-tar cases mein Akkusativ form use hoti hai: <b>mich, dich, sich, uns, euch</b>. Sirf <b>ich</b> aur <b>du</b> ki alag Dativ form hoti hai (<b>mir</b>, <b>dir</b>); baaki sab dono cases mein same rehte hain.'
    },
    {
      title: 'Akkusativ vs. Dativ \u2014 is there an object?',
      goldenRule: 'Already a direct object in the sentence? Then the reflexive turns <b>dative</b>.',
      formula: [
        'no object:    Ich wasche <b>mich</b>.',
        'with object:  Ich wasche <b>mir</b> die H\u00e4nde.'
      ],
      why: 'A German verb can only hand out one accusative. If <i>die H\u00e4nde</i> has already taken it, the reflexive pronoun has to settle for the dative \u2014 which fits its meaning anyway: the hands are washed <i>for</i> me.',
      memoryTrick: 'Ek sawaal: sentence mein pehle se koi cheez hai? Haan \u2192 <b>mir/dir</b>. Nahi \u2192 <b>mich/dich</b>. Aur farak sirf ich/du mein dikhta hai.',
      recap: [
        'Default is accusative: <b>mich, dich</b>.',
        'Object present (body part, thing) \u2192 dative: <b>mir, dir</b>.',
        'For er/wir/ihr nothing visibly changes.'
      ],
      body: [
        'Default is the <strong>accusative</strong> pronoun. But if the sentence already has a <strong>direct object</strong> (usually a body part or thing), the reflexive pronoun turns <strong>dative</strong>.'
      ],
      table: {
        head: ['No object \u2192 Akkusativ', 'With object \u2192 Dativ'],
        rows: [
          ['<span class="de">Ich w\u00e4sche <span class="r-reflexiv">mich</span>.</span>', '<span class="de">Ich w\u00e4sche <span class="r-reflexiv">mir</span> die H\u00e4nde.</span>'],
          ['<span class="de">Du ziehst <span class="r-reflexiv">dich</span> an.</span>', '<span class="de">Du ziehst <span class="r-reflexiv">dir</span> die Jacke an.</span>'],
          ['<span class="de">Ich putze <span class="r-reflexiv">mich</span>? \u2717</span>', '<span class="de">Ich putze <span class="r-reflexiv">mir</span> die Z\u00e4hne.</span>'],
          ['<span class="de">Sie w\u00e4scht <span class="r-reflexiv">sich</span>.</span>', '<span class="de">Sie w\u00e4scht <span class="r-reflexiv">sich</span> die Haare.</span>']
        ]
      },
      note: 'Ask: <b>is there already a direct object?</b> Yes \u2192 dative (mir/dir). No \u2192 accusative (mich/dich). For er/sie/wir/ihr the word doesn\u2019t change (sich/uns/euch), so this only <em>looks</em> different for ich and du.',
      hinglish: 'Normally Akkusativ form use hoti hai, jaise <b>Ich wasche mich</b>. Lekin agar sentence mein pehle se koi object hai \u2014 jaise <b>die H\u00e4nde</b> \u2014 to reflexive pronoun Dativ mein chala jaata hai: <b>Ich wasche mir die H\u00e4nde</b>. Yeh farak sirf <b>ich</b> aur <b>du</b> ke saath dikhta hai, kyunki baaki forms dono cases mein ek jaisi hain.'
    },
    {
      title: 'Where the pronoun goes',
      goldenRule: 'The pronoun sits right after the <b>conjugated verb</b> \u2014 and reflexive verbs always take <b>haben</b> in the Perfekt.',
      memoryTrick: 'Pronoun verb se chipka rehta hai: "Ich freue <b>mich</b>", "Ich muss <b>mich</b> beeilen". Aur Perfekt mein hamesha <b>haben</b> \u2014 kabhi sein nahi.',
      body: [
        'The reflexive pronoun sits right after the <strong>conjugated verb</strong> (or after the subject in a question / Nebensatz). The main verb behaves normally: modal \u2192 infinitive at the end, Perfekt \u2192 Partizip at the end.'
      ],
      table: {
        head: ['Case', 'Example'],
        rows: [
          ['simple', '<span class="de">Ich freue <span class="r-reflexiv">mich</span>.</span>'],
          ['with modal', '<span class="de">Ich muss <span class="r-reflexiv">mich</span> beeilen.</span>'],
          ['Perfekt (haben)', '<span class="de">Ich habe <span class="r-reflexiv">mich</span> gefreut.</span>'],
          ['Nebensatz (wenn)', '<span class="de">\u2026, wenn ich <span class="r-reflexiv">mich</span> beeile.</span>']
        ]
      },
      note: 'Reflexive verbs <b>always</b> form the Perfekt with <b>haben</b>: habe/hast/hat \u2026 mich/dich/sich \u2026 + Partizip. In a Nebensatz the pronoun follows the subject and the verb still goes to the end.',
      hinglish: 'Reflexive pronoun conjugated verb ke turant baad aata hai: <b>Ich freue mich</b>. Modal ke saath asli verb infinitive ban kar sentence ke end mein jaata hai: <b>Ich muss mich beeilen</b>. Perfekt banane ke liye reflexive verbs <b>haben</b> lete hain, <b>sein</b> nahi: <b>Ich habe mich gefreut</b>. Aur Nebensatz mein subject ke baad pronoun aata hai, aur verb end mein chala jaata hai.'
    },
    {
      title: 'Common reflexive verbs',
      body: [
        'A core set for everyday life \u2014 routines, feelings and social actions. Most take the accusative pronoun.'
      ],
      table: {
        head: ['Verb', 'Meaning', 'Example'],
        rows: [
          ['<span class="de">sich freuen</span>', 'to look forward / be glad', '<span class="de">Ich freue <span class="r-reflexiv">mich</span>.</span>'],
          ['<span class="de">sich beeilen</span>', 'to hurry', '<span class="de">Beeil <span class="r-reflexiv">dich</span>!</span>'],
          ['<span class="de">sich anziehen</span>', 'to get dressed', '<span class="de">Er zieht <span class="r-reflexiv">sich</span> an.</span>'],
          ['<span class="de">sich treffen</span>', 'to meet (mit)', '<span class="de">Wir treffen <span class="r-reflexiv">uns</span>.</span>'],
          ['<span class="de">sich f\u00fchlen</span>', 'to feel', '<span class="de">Ich f\u00fchle <span class="r-reflexiv">mich</span> gut.</span>'],
          ['<span class="de">sich erinnern</span>', 'to remember (an)', '<span class="de">Ich erinnere <span class="r-reflexiv">mich</span> an dich.</span>']
        ]
      },
      note: 'A few pair with a fixed preposition: sich freuen <b>auf/\u00fcber</b>, sich interessieren <b>f\u00fcr</b>, sich erinnern <b>an</b>, sich k\u00fcmmern <b>um</b>, sich vorbereiten <b>auf</b>. Learn the verb and its preposition together.',
      hinglish: 'Rozmarra ke reflexive verbs: sich freuen, sich beeilen, sich anziehen, sich treffen, sich f\u00fchlen, sich erinnern. Kuch fixed preposition ke saath aate hain: freuen auf, interessieren f\u00fcr, erinnern an \u2014 dono saath yaad karo.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four reflexive traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich freue auf die Feier.', right: 'Ich freue mich auf die Feier.', why: 'A reflexive verb must keep its pronoun \u2014 don\u2019t drop mich.' },
        { wrong: 'Ich wasche mich die H\u00e4nde.', right: 'Ich wasche mir die H\u00e4nde.', why: 'With a direct object (die H\u00e4nde) the pronoun is dative: mir.' },
        { wrong: 'Ich treffe mich Anna.', right: 'Ich treffe mich mit Anna.', why: 'sich treffen needs mit + dative for the person: mit Anna.' },
        { wrong: 'Ich bin mich gefreut.', right: 'Ich habe mich gefreut.', why: 'Reflexive verbs form the Perfekt with haben, not sein.' }
      ],
      hinglish: 'Char galtiyan dhyaan mein rakho. Pronoun chhodna nahi hai \u2014 <b>Ich freue mich</b>, sirf \u201cIch freue\u201d nahi. Agar object pehle se ho to Dativ chahiye: <b>mir die H\u00e4nde</b>. <b>sich treffen</b> ke saath <b>mit</b> lagta hai: <b>mit Anna</b>. Aur Perfekt <b>haben</b> se banta hai: <b>Ich habe mich gefreut</b>.'
    },
    {
      title: 'Quick decision guide',
      body: [
        'Two questions handle almost every reflexive sentence.'
      ],
      table: {
        head: ['Ask', 'Then'],
        rows: [
          ['Is the verb reflexive (sich \u2026)?', 'add the pronoun: mich/dich/sich/uns/euch'],
          ['Is there already a direct object?', 'yes \u2192 use the <b>dative</b> (mir/dir); no \u2192 <b>accusative</b>']
        ]
      },
      note: 'Then place it: right after the conjugated verb; infinitive/Partizip at the end; in a Nebensatz after the subject. Perfekt \u2192 always haben.',
      hinglish: 'Do cheezein check karo. Pehle dekho ki verb reflexive hai ya nahi \u2014 agar hai to pronoun lagana zaroori hai. Phir dekho ki sentence mein pehle se koi object hai: agar hai to Dativ (<b>mir/dir</b>), warna Akkusativ (<b>mich/dich</b>). Pronoun ko verb ke baad rakho, aur Perfekt <b>haben</b> se banao.'
    }
  ],

  // ---------- Reading passage (Mein Morgen, clickable) ----------
  reading: {
    title: 'Mein Morgen vor der Hochzeit',
    titleEn: 'My morning before the wedding',
    tokens: [
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb \u00b7 time' },
      { w: 'stehe', role: 'r-verb', en: 'get up', hi: 'उठता हूँ', pron: 'SHTAY-uh', type: 'Verb \u00b7 aufstehen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'fr\u00fch', role: 'r-time', en: 'early', hi: 'जल्दी', pron: 'fr\u00fc', type: 'Adverb' },
      { w: 'auf', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'owf', type: 'Prefix \u00b7 aufstehen', why: 'aufstehen \u2014 separable (recycled \u2014 Trennbare Verben).', ex: 'Ich stehe fr\u00fch auf.', exEn: 'I get up early.' },
      { w: '.', plain: true },
      { w: 'Zuerst', role: 'r-time', en: 'first', hi: 'सबसे पहले', pron: 'tsoo-AIRST', type: 'Adverb \u00b7 time' },
      { w: 'dusche', role: 'r-verb', en: 'shower', hi: 'नहाता हूँ', pron: 'DOO-shuh', type: 'Verb \u00b7 sich duschen', why: 'sich duschen (this chapter).', ex: 'Ich dusche mich.', exEn: 'I shower.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'no object \u2192 accusative (this chapter).', ex: 'Ich dusche mich.', exEn: 'I shower.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'w\u00e4sche', role: 'r-verb', en: 'wash', hi: 'धोता हूँ', pron: 'VE-shuh', type: 'Verb \u00b7 sich waschen', why: 'sich waschen (this chapter).', ex: 'Ich wasche mir die Haare.', exEn: 'I wash my hair.' },
      { w: 'mir', role: 'r-reflexiv', en: 'myself (dat.)', hi: 'अपने', pron: 'meer', type: 'Reflexivpronomen \u00b7 Dat.', why: 'object present (die Haare) \u2192 dative (this chapter).', ex: 'Ich wasche mir die Haare.', exEn: 'I wash my hair.' },
      { w: 'die', role: 'r-akkusativ', en: 'the (pl. acc.)', hi: 'अपने', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'Haare', role: 'r-object', en: 'hair', hi: 'बाल', pron: 'HAH-ruh', type: 'Noun \u00b7 plural', why: 'the direct object (recycled \u2014 K\u00f6rper).', ex: 'die Haare', exEn: 'the hair' },
      { w: '.', plain: true },
      { w: 'Dann', role: 'r-time', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb \u00b7 time', why: 'dann (recycled \u2014 wenn).', ex: 'Dann ziehe ich mich an.', exEn: 'Then I get dressed.' },
      { w: 'ziehe', role: 'r-verb', en: 'put on', hi: 'पहनता हूँ', pron: 'TSEE-uh', type: 'Verb \u00b7 sich anziehen', why: 'sich anziehen (this chapter).', ex: 'Ich ziehe mich an.', exEn: 'I get dressed.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: 'an', role: 'r-verb', en: '(prefix)', hi: '—', pron: 'an', type: 'Prefix \u00b7 anziehen' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'rasiere', role: 'r-verb', en: 'shave', hi: 'दाढ़ी बनाता हूँ', pron: 'ra-ZEE-ruh', type: 'Verb \u00b7 sich rasieren', why: 'sich rasieren (this chapter).', ex: 'Ich rasiere mich.', exEn: 'I shave.' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modalverb \u00b7 m\u00fcssen', why: 'reflexive with a modal (this chapter).', ex: 'Ich muss mich beeilen.', exEn: 'I have to hurry.' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: 'beeilen', role: 'r-verb', en: 'hurry', hi: 'जल्दी करना', pron: 'buh-EYE-len', type: 'Verb \u00b7 sich beeilen', why: 'infinitive at the end after the modal (this chapter).', ex: 'sich beeilen', exEn: 'to hurry' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil).', ex: 'weil der Verkehr schlimm ist', exEn: 'because the traffic is bad' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Verkehr', role: 'r-subject', en: 'traffic', hi: 'यातायात', pron: 'fair-KAIR', type: 'Noun \u00b7 masc.', why: 'der Verkehr (this chapter).', ex: 'der Verkehr', exEn: 'the traffic' },
      { w: 'schlimm', role: 'r-adjective', en: 'bad', hi: 'ख़राब', pron: 'shlim', type: 'Adjective', why: 'schlimm (this chapter).', ex: 'Der Verkehr ist schlimm.', exEn: 'The traffic is bad.' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein', why: 'conjugated verb last after weil (recycled \u2014 weil).', ex: '\u2026, weil \u2026 schlimm ist.', exEn: '\u2026 because \u2026 is bad.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'treffe', role: 'r-verb', en: 'meet', hi: 'मिलता हूँ', pron: 'TRE-fuh', type: 'Verb \u00b7 sich treffen', why: 'sich treffen mit (this chapter).', ex: 'Ich treffe mich mit Anna.', exEn: 'I meet Anna.' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition \u00b7 Dativ', why: 'sich treffen mit + Dativ (this chapter).', ex: 'mit Anna', exEn: 'with Anna' },
      { w: 'Anna', role: 'r-dativ', en: 'Anna', hi: 'अन्ना', pron: 'A-na', type: 'Name' },
      { w: 'vor', role: 'r-preposition', en: 'in front of', hi: 'के सामने', pron: 'for', type: 'Preposition' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'इस', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Kirche', role: 'r-place', en: 'church', hi: 'गिरजाघर', pron: 'KEER-khuh', type: 'Noun \u00b7 fem.', why: 'die Kirche (recycled \u2014 Ort).', ex: 'vor der Kirche', exEn: 'in front of the church' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'freue', role: 'r-verb', en: 'look forward', hi: 'उत्सुक हूँ', pron: 'FROY-uh', type: 'Verb \u00b7 sich freuen', why: 'sich freuen auf (this chapter).', ex: 'Ich freue mich auf \u2026', exEn: 'I look forward to \u2026' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'f\u00fchle', role: 'r-verb', en: 'feel', hi: 'महसूस करता हूँ', pron: 'F\u00dc-luh', type: 'Verb \u00b7 sich f\u00fchlen', why: 'sich f\u00fchlen (this chapter).', ex: 'Ich f\u00fchle mich gut.', exEn: 'I feel good.' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: 'nur', role: 'r-adverb', en: 'only', hi: 'बस', pron: 'noor', type: 'Adverb' },
      { w: 'ein', role: 'r-adverb', en: 'a little', hi: 'थोड़ा', pron: 'ine', type: 'Adverb' },
      { w: 'bisschen', role: 'r-adverb', en: 'bit', hi: 'सा', pron: 'BIS-khen', type: 'Adverb' },
      { w: 'nerv\u00f6s', role: 'r-adjective', en: 'nervous', hi: 'घबराया हुआ', pron: 'nair-V\u00d6S', type: 'Adjective', why: 'nerv\u00f6s (this chapter).', ex: 'ein bisschen nerv\u00f6s', exEn: 'a little nervous' },
      { w: '.', plain: true },
      { w: 'Gestern', role: 'r-time', en: 'yesterday', hi: 'कल', pron: 'GES-tern', type: 'Adverb \u00b7 time' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: '', pron: 'HAH-buh', type: 'Verb \u00b7 haben', why: 'reflexive Perfekt with haben (this chapter).', ex: 'Ich habe mich vorbereitet.', exEn: 'I prepared.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'pronoun after the conjugated verb (this chapter).', ex: 'Ich habe mich vorbereitet.', exEn: 'I prepared.' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
      { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयारी की', pron: 'FOR-buh-ry-tet', type: 'Partizip \u00b7 sich vorbereiten', why: 'Partizip at the end (this chapter).', ex: 'Ich habe mich vorbereitet.', exEn: 'I prepared.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'gut', role: 'r-adverb', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
      { w: 'erholt', role: 'r-verb', en: 'rested', hi: 'आराम किया', pron: 'air-HOLT', type: 'Partizip \u00b7 sich erholen', why: 'sich erholen (this chapter).', ex: 'Ich habe mich erholt.', exEn: 'I rested.' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-wenn', en: 'when', hi: 'जब', pron: 'ven', type: 'Conjunction \u00b7 wenn', why: 'fronted wenn-clause \u2192 inversion (recycled \u2014 wenn).', ex: 'Wenn ich ankomme, \u2026', exEn: 'When I arrive, \u2026' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.', why: 'in a Nebensatz: subject + pronoun, verb last (this chapter).', ex: 'wenn ich mich setze', exEn: 'when I sit down' },
      { w: 'setze', role: 'r-verb', en: 'sit down', hi: 'बैठता हूँ', pron: 'ZE-tsuh', type: 'Verb \u00b7 sich setzen', why: 'conjugated verb last after wenn (this chapter).', ex: '\u2026, wenn ich mich setze.', exEn: '\u2026 when I sit down.' },
      { w: ',', plain: true },
      { w: 'beruhige', role: 'r-verb', en: 'calm down', hi: 'शांत होता हूँ', pron: 'buh-ROO-i-guh', type: 'Verb \u00b7 sich beruhigen', why: 'inversion: verb first after the fronted wenn-clause (this chapter).', ex: '\u2026, beruhige ich mich.', exEn: '\u2026, I calm down.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद को', pron: 'mikh', type: 'Reflexivpronomen \u00b7 Akk.' },
      { w: '.', plain: true }
    ],
    translation: 'Today I get up early. First I shower and wash my hair. Then I get dressed and shave. I have to hurry, because the traffic is bad. I meet Anna in front of the church. I\u2019m looking forward to it and feel only a little nervous. Yesterday I prepared well and rested. When I sit down, I calm down. \u2014 Watch the reflexive pronouns: mostly accusative (dusche mich, ziehe mich an, freue mich), but dative when there\u2019s an object (wasche mir die Haare), and always haben in the Perfekt (habe mich vorbereitet).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_012_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Enya, wie fühlst du dich vor der Party?', en: 'Enya, how do you feel before the party?' },
      { id: 'A2_012_L002', speaker: 'Enya', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich freue mich sehr! Ich ziehe mich gerade an.', en: 'I\'m very happy! I\'m getting dressed right now.' },
      { id: 'A2_012_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Beeil dich, wir treffen uns in zehn Minuten!', en: 'Hurry up, we\'re meeting in ten minutes!' },
      { id: 'A2_012_L004', speaker: 'Enya', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Keine Sorge, ich dusche mich schnell und bin gleich fertig.', en: 'No worries, I\'ll shower quickly and be ready right away.' }
    ],
    transcript: 'Enya, wie fühlst du dich vor der Party? Ich freue mich sehr! Ich ziehe mich gerade an. Beeil dich, wir treffen uns in zehn Minuten! Keine Sorge, ich dusche mich schnell und bin gleich fertig.',
    translation: 'Enya, how do you feel before the party? I\'m very happy! I\'m getting dressed right now. Hurry up, we\'re meeting in ten minutes! No worries, I\'ll shower quickly and be ready right away.',
    tokens: [
      { w: 'Enya' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'fühlst' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'vor' },
      { w: 'der' },
      { w: 'Party' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'freue' },
      { w: 'mich' },
      { w: 'sehr' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'ziehe' },
      { w: 'mich' },
      { w: 'gerade' },
      { w: 'an' },
      { w: '.', plain: true },
      { w: 'Beeil' },
      { w: 'dich' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'treffen' },
      { w: 'uns' },
      { w: 'in' },
      { w: 'zehn' },
      { w: 'Minuten' },
      { w: '!', plain: true },
      { w: 'Keine' },
      { w: 'Sorge' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'dusche' },
      { w: 'mich' },
      { w: 'schnell' },
      { w: 'und' },
      { w: 'bin' },
      { w: 'gleich' },
      { w: 'fertig' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie fühlt sich Enya?', qEn: 'How does Enya feel?', options: ['müde', 'traurig', 'sie freut sich', 'ängstlich'], optionsEn: ['tired', 'sad', 'she is pleased', 'anxious'], answer: 2,
        explain: '"Ich freue mich sehr!"' },
      { q: 'Was macht Enya gerade?', qEn: 'What is Enya doing right now?', options: ['sie schläft', 'sie zieht sich an', 'sie isst', 'sie liest'], optionsEn: ['she is sleeping', 'she is getting dressed', 'she is eating', 'she is reading'], answer: 1,
        explain: '"Ich ziehe mich gerade an."' }
    ]
  },

  speaking: [
    { task: "Dein Partner fragt: Wie beginnt dein Tag?", taskEn: "Your partner asks: how does your day begin?", de: "Ich dusche mich, ziehe mich an und beeile mich zur Arbeit.", en: "I shower, get dressed and hurry to work." },
    { task: "Deine Freundin fragt: Worauf freust du dich?", taskEn: "Your friend asks: what are you looking forward to?", de: "Ich freue mich auf das Wochenende und interessiere mich für den Kurs.", en: "I'm looking forward to the weekend and I'm interested in the course." },
    { task: "Du kommst zu spät. Was sagst du der Lehrerin?", taskEn: "You're late. What do you say to the teacher?", de: "Ich entschuldige mich. Der Bus kam nicht.", en: "I do apologise. The bus didn't come." },
    { task: "Dein Freund fragt: Was machst du am Abend?", taskEn: "Your friend asks: what do you do in the evening?", de: "Am Abend entspanne ich mich und ruhe mich aus.", en: "In the evening I relax and rest." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write about your morning and your weekend (six sentences) using many reflexive verbs. Include at least one dative case (Ich w\u00e4sche mir \u2026), one with a modal (Ich muss mich \u2026), one in the Perfekt (Ich habe mich \u2026), and one in a wenn-clause. Try this chapter\u2019s verbs: sich duschen, sich anziehen, sich beeilen, sich freuen, sich entspannen.',
    starters: ['Am Morgen dusche ich mich \u2026', 'Ich muss mich \u2026', 'Gestern habe ich mich \u2026', 'Wenn ich Zeit habe, entspanne ich mich \u2026'],
    placeholder: 'Am Morgen stehe ich fr\u00fch auf und dusche mich. Dann ziehe ich mich an und w\u00e4sche mir die Haare \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Which sentence is correct?',
      options: [
        'Ich freue auf die Feier.',
        'Ich freue mir auf die Feier.',
        'Ich freue mich auf die Feier.',
        'Ich mich freue auf die Feier.'
      ],
      answer: 2,
      explain: 'sich freuen keeps its accusative pronoun right after the verb: Ich freue mich \u2026'
    },
    gap: {
      // accusative reflexive then dative reflexive (object present)
      sentence: ['Ich dusche ', ' und dann wasche ich ', ' die Haare.'],
      gaps: [ { answer: 'mich', accepts: ['mich'] }, { answer: 'mir', accepts: ['mir'] } ],
      explain: 'No object \u2192 accusative (mich); with the object die Haare \u2192 dative (mir).'
    },
    match: {
      q: 'Match each subject to its accusative reflexive pronoun.',
      pairs: [
        { noun: 'ich', art: 'mich' },
        { noun: 'du', art: 'dich' },
        { noun: 'er/sie/es', art: 'sich' },
        { noun: 'wir', art: 'uns' },
        { noun: 'ihr', art: 'euch' }
      ]
    },
    builder: {
      target: 'Build (with a modal): "I have to hurry."',
      bank: ['Ich', 'muss', 'mich', 'beeilen'],
      answer: ['Ich', 'muss', 'mich', 'beeilen'],
      roles: { 'Ich': 'r-subject', 'muss': 'r-modalverb', 'mich': 'r-reflexiv', 'beeilen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the accusative reflexive pronoun for "ich"?', options: ['mir', 'mich', 'sich', 'mein'], answer: 1,
      explain: 'ich \u2192 mich (accusative), mir (dative).' },
    { q: 'Complete: "Ich w\u00e4sche ___ die H\u00e4nde."', options: ['mich', 'mir', 'sich', 'mein'], answer: 1,
      explain: 'With a direct object (die H\u00e4nde) the pronoun is dative: mir.' },
    { q: 'Which is correct in the Perfekt?', options: ['Ich bin mich gefreut.', 'Ich habe mich gefreut.', 'Ich habe mir gefreut.', 'Ich mich habe gefreut.'], answer: 1,
      explain: 'Reflexive verbs use haben: Ich habe mich gefreut.' },
    { q: 'Where does the pronoun go with a modal? "Ich muss ___."', options: ['mich beeilen', 'beeilen mich', 'beeile mich', 'mich beeile'], answer: 0,
      explain: 'Pronoun after the modal, infinitive at the end: Ich muss mich beeilen.' },
    { q: '"Ich treffe ___ Anna." \u2014 what\u2019s missing?', options: ['nothing, it\u2019s correct', 'mich mit', 'mir', 'sich'], answer: 1,
      explain: 'sich treffen needs mit + dative: Ich treffe mich mit Anna.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-reflexiv', html: 'Reflexive verbs need a pronoun: <span class="de">ich <span class="r-reflexiv">mich</span>, du <span class="r-reflexiv">dich</span>, er/sie/es/sie/Sie <span class="r-reflexiv">sich</span>, wir <span class="r-reflexiv">uns</span>, ihr <span class="r-reflexiv">euch</span></span> \u2014 <span class="de">Ich freue mich.</span>' },
    { c: 'r-reflexiv', html: 'If the sentence already has a direct object, the pronoun turns <b>dative</b> (only ich/du change): <span class="de">Ich w\u00e4sche <span class="r-reflexiv">mir</span> die H\u00e4nde.</span>' },
    { c: 'r-reflexiv', html: 'Pronoun sits after the conjugated verb; with a modal the infinitive is last; the Perfekt always uses <b>haben</b>: <span class="de">Ich habe mich gefreut.</span>' }
  ],
  revisionTips: [
    'mich, dich, sich, uns, euch \u2014 only ich (mir) and du (dir) differ in the dative.',
    'Object in the sentence? \u2192 dative pronoun (mir/dir). No object? \u2192 accusative (mich/dich).',
    'Reflexive Perfekt is always haben: "Ich habe mich \u2026" \u2014 never sein.'
  ]
};

window.CHAPTER = CHAPTER;
