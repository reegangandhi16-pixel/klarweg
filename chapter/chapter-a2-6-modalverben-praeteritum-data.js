/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 6
   "Modalverben im Pr\u00e4teritum"  (past ability / obligation /
   permission / advice / wish). Teaches ONLY the six modal
   Pr\u00e4teritum forms: konnte, musste, durfte, wollte, sollte, mochte.
   No Konjunktiv II, no passive, no Plusquamperfekt.
   Vocabulary source: uploaded chapter-06 list (~36 items;
   everyday-life / wedding / emergency theme). Recycles Ch.4-5
   (weil/dass word order), Ch.3 (Artikel), Ch.2 (Perfekt) and A1
   Modalverben (Pr\u00e4sens), Dativ, Akkusativ.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "zulsagen" \u2192 zusagen (to accept an invitation)
   • "zusammenljleben" \u2192 zusammenleben (to live together)
   • "dazugeschrieben Tc der Beispielsatz" \u2192 read as two entries:
     dazuschreiben (to add in writing) + der Beispielsatz (example
     sentence).
   • "was - something" kept as the colloquial short form of etwas.
   • "hilft weiter" listed under the infinitive weiterhelfen.
============================================================ */
const CHAPTER = {
  id: 'a2-6-modalverben-praeteritum',
  phase: 'A2 · Phase 1',
  number: 6,
  title: 'Modalverben im Pr\u00e4teritum',
  titleEn: 'Modal Verbs in the Past',
  description: 'How Germans really talk about the past. For most verbs you use the Perfekt \u2014 but for the six modal verbs, everyday German prefers the Pr\u00e4teritum: konnte, musste, durfte, wollte, sollte, mochte. Ich musste gestern arbeiten. Als Kind durfte ich nicht fernsehen. Wir wollten heiraten. One tidy pattern \u2014 a -t- in the stem, no umlaut, simple endings \u2014 and you can narrate what you could, had to, were allowed to, wanted, should and liked.',
  xp: 160,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 7, title: 'Possessivartikel im Dativ', titleEn: 'Possessives in the Dative' , href: 'chapter-a2-7-possessivartikel-dativ.html' },

  prevChapter: { number: 5, title: 'Nebensatz mit dass', titleEn: 'Subordinate Clauses with dass', href: 'chapter-a2-5-dass.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'A quiet Monday, and Anke wants to know why Timo missed the wedding — work, his boss said no — swapping stories about what everyone could, had to, and wanted to do. The modal past — konnte, musste, wollte — is how Germans actually narrate it.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear konnte, musste, durfte, wollte in natural conversation'
    ],
    scene: 'Montagmorgen \u2014 Geschichten vom Wochenende, Sprachschule Berlin',
    femaleSpeakers: ['Anke'],
    dialogue: [
      { speaker: 'Anke', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'warst', role: 'r-verb', en: 'were', hi: 'थे', pron: 'varst', type: 'Verb · sein (Präteritum, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'auf', role: 'r-preposition', en: 'at', hi: 'में', pron: 'owf', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Hochzeit', role: 'r-dativ', en: 'wedding (dat.)', hi: 'शादी में', pron: 'HOKH-tsyte', type: 'Noun · fem. dat.', why: 'die Hochzeit (this chapter).', ex: 'Warst du auf der Hochzeit?', exEn: 'Were you at the wedding?' },
        { w: '?', plain: true }
      ], en: 'Why were you not at the wedding?', hi: 'Tum shaadi mein kyun nahi the?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'konnte', role: 'r-modalverb', en: 'could', hi: 'सका', pron: 'KON-tuh', type: 'Modal · können (Präteritum, ich)', why: 'können in the past: ich konnte (this chapter).', ex: 'Ich konnte nicht kommen.', exEn: 'I could not come.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आ', pron: 'KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'musste', role: 'r-modalverb', en: 'had to', hi: 'था', pron: 'MUS-tuh', type: 'Modal · müssen (Präteritum, ich)', why: 'müssen in the past: ich musste (this chapter).', ex: 'Ich musste arbeiten.', exEn: 'I had to work.' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I could not come. I had to work.', hi: 'Main aa nahi saka. Mujhe kaam karna padha.' },
      { speaker: 'Anke', tokens: [
        { w: 'Oh', role: 'r-subject', en: 'oh', hi: 'ओह', pron: 'oh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Wolltest', role: 'r-modalverb', en: 'did you want', hi: 'चाहते थे', pron: 'VOL-test', type: 'Modal · wollen (Präteritum, du)', why: 'wollen in the past: du wolltest (this chapter).', ex: 'Wolltest du kommen?', exEn: 'Did you want to come?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'denn', role: 'r-adverb', en: 'then', hi: 'तो', pron: 'den', type: 'Particle' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Oh! Did you want to come then?', hi: 'Oh! Toh tum aana chahte the?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'बिल्कुल', pron: 'na-TÜR-likh', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wollte', role: 'r-modalverb', en: 'wanted', hi: 'चाहता था', pron: 'VOL-tuh', type: 'Modal · wollen (Präteritum, ich)' },
        { w: 'unbedingt', role: 'r-adverb', en: 'absolutely', hi: 'ज़रूर', pron: 'un-be-DINGT', type: 'Adverb', why: 'unbedingt = absolutely (this chapter).', ex: 'Ich wollte unbedingt kommen.', exEn: 'I absolutely wanted to come.' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आना', pron: 'KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Of course! I absolutely wanted to come.', hi: 'Bilkul! Main zaroor aana chahta tha.' },
      { speaker: 'Anke', tokens: [
        { w: 'Durftest', role: 'r-modalverb', en: 'were you allowed', hi: 'मिली', pron: 'DUR-test', type: 'Modal · dürfen (Präteritum, du)', why: 'dürfen in the past: du durftest (this chapter).', ex: 'Durftest du nicht frei nehmen?', exEn: 'Were you not allowed to take time off?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'frei', role: 'r-akkusativ', en: 'free (time)', hi: 'छुट्टी', pron: 'fry', type: 'Adjective' },
        { w: 'nehmen', role: 'r-verb', en: 'take', hi: 'लेना', pron: 'NAY-men', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Were you not allowed to take time off?', hi: 'Kya tumhe chhutti nahi mili?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'mein', role: 'r-subject', en: 'my', hi: 'मेरे', pron: 'mine', type: 'Possessive' },
        { w: 'Chef', role: 'r-subject', en: 'boss', hi: 'बॉस', pron: 'shef', type: 'Noun · masc.' },
        { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen (Präteritum)', why: 'sagen in the past: er sagte (this chapter).', ex: 'Er sagte nein.', exEn: 'He said no.' },
        { w: 'nein', role: 'r-akkusativ', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sollte', role: 'r-modalverb', en: 'was supposed to', hi: 'चाहिए था', pron: 'ZOL-tuh', type: 'Modal · sollen (Präteritum, ich)', why: 'sollen in the past: ich sollte (this chapter).', ex: 'Ich sollte arbeiten.', exEn: 'I was supposed to work.' },
        { w: 'an', role: 'r-preposition', en: 'on', hi: 'को', pron: 'an', type: 'Preposition + time' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc./neut. dat.)', hi: 'इस', pron: 'DEE-zem', type: 'Determiner · dative' },
        { w: 'Tag', role: 'r-dativ', en: 'day (dat.)', hi: 'दिन', pron: 'tahk', type: 'Noun · masc. dat.' },
        { w: 'arbeiten', role: 'r-verb', en: 'work', hi: 'काम करना', pron: 'AR-by-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No, my boss said no. I was supposed to work on this day.', hi: 'Nahi, mere boss ne mana kar diya. Mujhe is din kaam karna tha.' },
      { speaker: 'Anke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'schade', role: 'r-adjective', en: 'a pity', hi: 'अफ़सोस', pron: 'SHAH-duh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझती हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'That is a pity. But I understand that.', hi: 'Yeh afsos ki baat hai. Par main samajhti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसी', pron: 'vee', type: 'Question word' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb · sein (Präteritum)' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Hochzeit', role: 'r-subject', en: 'wedding', hi: 'शादी', pron: 'HOKH-tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Thanks! How was the wedding?', hi: 'Dhanyavaad! Shaadi kaisi thi?' },
      { speaker: 'Anke', tokens: [
        { w: 'Sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'romantisch', role: 'r-adjective', en: 'romantic', hi: 'रोमांटिक', pron: 'ro-MAN-tish', type: 'Adjective', why: 'romantisch = romantic (this chapter).', ex: 'Die Hochzeit war romantisch.', exEn: 'The wedding was romantic.' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (helper)' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · acc.' },
        { w: 'verpasst', role: 'r-verb', en: 'missed', hi: 'मिस किया', pron: 'fer-PASST', type: 'Partizip II · Satzende', why: 'verpassen → verpasst: ver- takes no ge- (recycled).' },
        { w: '.', plain: true }
      ], en: 'Very romantic! You really missed something.', hi: 'Bahut romantic! Tumne sach mein kuch miss kiya.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'For almost every verb, spoken German uses the Perfekt to talk about the past. The <strong>six modal verbs are the big exception</strong>: here everyone naturally reaches for the <strong>Pr\u00e4teritum</strong> (simple past). And the forms are wonderfully regular \u2014 take the modal, <strong>drop the umlaut</strong>, add a <strong>-t-</strong>, then simple endings: <span class="de r-modalverb">konnte, musste, durfte, wollte, sollte, mochte</span>. <span class="de">Ich <span class="r-modalverb">musste</span> gestern arbeiten. Als Kind <span class="r-modalverb">durfte</span> ich nicht fernsehen. Wir <span class="r-modalverb">wollten</span> heiraten.</span> No one says "ich habe gemusst" \u2014 they say <span class="de r-modalverb">ich musste</span>. Learn one small table and you can narrate what you could, had to, were allowed to, should and wanted in the past.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODAL VERBS in the PR\u00c4TERITUM (simple past): konnte, musste, durfte, wollte, sollte, mochte. ' +
    'No Konjunktiv II, no passive. The learner described what they had to / were allowed to / wanted to / could do.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- Pr\u00e4teritum modal forms (no umlaut, -t- infix): ich konnte, musste, durfte, wollte, sollte, mochte; wir/sie konnten, mussten, durften, wollten, sollten, mochten; du -test; ihr -tet; er/sie/es = ich-form (konnte, musste \u2026).\n' +
    '- ich and er/sie/es have NO ending (ich musste, er musste), NOT "musstete" or "musst".\n' +
    '- The main infinitive goes to the end: "Ich musste gestern arbeiten." In a weil/dass clause the modal goes last: "\u2026, weil ich arbeiten musste."\n' +
    '- Prefer Pr\u00e4teritum over Perfekt for modals: "ich musste", not "ich habe gemusst".\n' +
    '- mochte = liked (m\u00f6gen); do not confuse with m\u00f6chte (would like, present/polite). konnte = could/was able to.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>Modal-past check:</b> one sentence on the Pr\u00e4teritum forms and endings.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You narrate the past like a native \u2014 musste, konnte, durfte, all natural. Next: bend possessives in <span class="de">Possessivartikel im Dativ</span>.',
    mid: 'Good. Say the six forms once more (konnte, musste, durfte, wollte, sollte, mochte), then continue.',
    low: 'Worth another pass \u2014 the recipe is always the same: drop the umlaut, add -t-, simple endings. And use Pr\u00e4teritum, not "habe gemusst". Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'musste', role: 'r-modalverb' },
    { w: 'gestern', role: 'r-time' }, { w: 'einen', role: 'r-akkusativ' },
    { w: 'Techniker', role: 'r-object' }, { w: 'anrufen', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See why modals break the Perfekt habit and use the Pr\u00e4teritum.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Monday stories \u2014 a wedding, a broken heater, childhood rules.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: die Hochzeit, der Notfall, der Rat, besorgen, romantisch.' },
    { id: 'grammar',    label: 'Pr\u00e4teritum', tag: 'core',
      objective: 'Master the six forms, all persons, and Pr\u00e4sens vs Perfekt vs Pr\u00e4teritum.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read Annas childhood \u2014 full of durfte, musste, wollte, konnte.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Follow a small heating emergency told in the modal past.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Say what you had to, were allowed to, wanted and could do.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Describe yesterday or last week with the six modal past forms.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the forms, persons and Pr\u00e4teritum-vs-Perfekt with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s everyday words \u2014 die Hochzeit, der Notfall, der Rat, besorgen, romantisch, k\u00fchl \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'Modal-past conjugation drills, Pr\u00e4sens\u2192Pr\u00e4teritum, Perfekt-vs-Pr\u00e4teritum, and a what-I-had-to-do task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The six forms across all persons, the -t- / no-umlaut rule, tense comparison, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich konnte \u2026', text: 'Say what you were able to do' },
    { de: 'Ich musste \u2026', text: 'Say what you had to do' },
    { de: 'Ich durfte (nicht) \u2026', text: 'Say what you were (not) allowed to do' },
    { de: 'Ich wollte / sollte \u2026', text: 'Express past wishes and advice' },
    { de: 'ich musste \u2260 habe gemusst', text: 'Prefer the Pr\u00e4teritum for modals' }
  ],

  // ---------- Vocabulary (36 items) ----------
  vocab: [
    // ===== Events / people / places =====
    { de: 'Hochzeit', art: 'die', gender: 'f', plural: 'Hochzeiten', pos: 'noun', en: 'wedding', hi: 'शादी', ex: 'Ich wollte zu einer Hochzeit gehen.', exEn: 'I wanted to go to a wedding.' },
    { de: 'Notfall', art: 'der', gender: 'm', plural: 'Notf\u00e4lle', pos: 'noun', en: 'emergency', hi: 'आपातकाल', ex: 'Die kaputte Heizung war fast ein Notfall.', exEn: 'The broken heating was almost an emergency.' },
    { de: 'Heizung', art: 'die', gender: 'f', plural: 'Heizungen', pos: 'noun', en: 'heating, radiator', hi: 'हीटर', ex: 'Die Heizung war kaputt und die Wohnung k\u00fchl.', exEn: 'The heating was broken and the flat was cool.' },
    { de: 'Rat', art: 'der', gender: 'm', plural: 'Ratschl\u00e4ge', pos: 'noun', en: 'advice, counsel', hi: 'सलाह', ex: 'Der Rat von meiner Oma war gut.', exEn: 'The advice from my grandma was good.' },
    { de: 'Erkl\u00e4rung', art: 'die', gender: 'f', plural: 'Erkl\u00e4rungen', pos: 'noun', en: 'explanation', hi: 'व्याख्या', ex: 'Frau Weber gab eine klare Erkl\u00e4rung.', exEn: 'Frau Weber gave a clear explanation.' },
    { de: 'Angst', art: 'die', gender: 'f', plural: '\u00c4ngste', pos: 'noun', en: 'fear', hi: 'डर', ex: 'Als Kind hatte ich Angst im Dunkeln.', exEn: 'As a child I was scared in the dark.' },
    { de: 'Hausfrau', art: 'die', gender: 'f', plural: 'Hausfrauen', pos: 'noun', en: 'homemaker, housewife', hi: 'गृहिणी', ex: 'Meine Oma war Hausfrau und wollte nie aufh\u00f6ren.', exEn: 'My grandma was a homemaker and never wanted to stop.' },
    { de: 'Rentnerin', art: 'die', gender: 'f', plural: 'Rentnerinnen', pos: 'noun', en: 'pensioner (f.)', hi: 'सेवानिवृत्त महिला', ex: 'Die Rentnerin musste zum Arzt.', exEn: 'The pensioner had to go to the doctor.' },
    { de: 'Arme', art: 'der/die', gender: 'mf', plural: 'Armen', pos: 'noun', en: 'poor thing, poor one', hi: 'बेचारा/बेचारी', ex: 'Der Arme konnte die Nummer nicht finden.', exEn: 'The poor guy couldn\u2019t find the number.' },
    { de: 'Augenoptiker', art: 'der', gender: 'm', plural: 'Augenoptiker', pos: 'noun', en: 'optician (m.)', hi: 'चश्मा विशेषज्ञ', ex: 'Der Augenoptiker durfte am Samstag nicht \u00f6ffnen.', exEn: 'The optician wasn\u2019t allowed to open on Saturday.' },
    { de: 'Bankkaufmann', art: 'der', gender: 'm', plural: 'Bankkaufm\u00e4nner', pos: 'noun', en: 'bank clerk (m.)', hi: 'बैंक क्लर्क', ex: 'Als Bankkaufmann musste er Anz\u00fcge tragen.', exEn: 'As a bank clerk he had to wear suits.' },
    { de: 'Einkaufszentrum', art: 'das', gender: 'n', plural: 'Einkaufszentren', pos: 'noun', en: 'shopping centre, mall', hi: 'शॉपिंग सेंटर', ex: 'Ich musste im Einkaufszentrum etwas besorgen.', exEn: 'I had to get something at the shopping centre.' },
    { de: 'Gegenstand', art: 'der', gender: 'm', plural: 'Gegenst\u00e4nde', pos: 'noun', en: 'item, object', hi: 'वस्तु', ex: 'Welchen Gegenstand wolltest du kaufen?', exEn: 'Which item did you want to buy?' },
    { de: 'Reservierung', art: 'die', gender: 'f', plural: 'Reservierungen', pos: 'noun', en: 'reservation, booking', hi: 'आरक्षण', ex: 'Wir sollten die Reservierung best\u00e4tigen.', exEn: 'We were supposed to confirm the reservation.' },
    { de: 'Export', art: 'der', gender: 'm', plural: 'Exporte', pos: 'noun', en: 'export', hi: 'निर्यात', ex: 'Er wollte im Export arbeiten.', exEn: 'He wanted to work in export.' },
    { de: 'Apfelkuchen', art: 'der', gender: 'm', plural: 'Apfelkuchen', pos: 'noun', en: 'apple pie/cake', hi: 'सेब का केक', ex: 'Zur Hochzeit gab es Apfelkuchen.', exEn: 'At the wedding there was apple cake.' },
    { de: 'Beispielsatz', art: 'der', gender: 'm', plural: 'Beispiels\u00e4tze', pos: 'noun', en: 'example sentence', hi: 'उदाहरण वाक्य', ex: 'Schreib bitte einen Beispielsatz mit "musste".', exEn: 'Please write an example sentence with "musste".' },
    { de: 'Stichwort', art: 'das', gender: 'n', plural: 'Stichw\u00f6rter', pos: 'noun', en: 'keyword, cue', hi: 'मुख्य शब्द', ex: 'Das Stichwort ist "Pr\u00e4teritum".', exEn: 'The keyword is "Pr\u00e4teritum".' },
    // ===== Verbs =====
    { de: 'besorgen', pos: 'verb', en: 'to get, to obtain', hi: 'लाना, जुटाना', ex: 'Ich musste etwas f\u00fcr die Hochzeit besorgen.', exEn: 'I had to get something for the wedding.', conj: { praesens: 'besorgt', praeteritum: 'besorgte', perfekt: 'hat besorgt' } },
    { de: 'empfangen', pos: 'verb', en: 'to welcome, to receive', hi: 'स्वागत करना', ex: 'Die Familie wollte die G\u00e4ste herzlich empfangen.', exEn: 'The family wanted to welcome the guests warmly.', conj: { praesens: 'empf\u00e4ngt', praeteritum: 'empfing', perfekt: 'hat empfangen' } },
    { de: 'klingeln', pos: 'verb', en: 'to ring (bell)', hi: 'घंटी बजना', ex: 'Um Mitternacht klingelte das Telefon.', exEn: 'At midnight the phone rang.', conj: { praesens: 'klingelt', praeteritum: 'klingelte', perfekt: 'hat geklingelt' } },
    { de: 'liegen', pos: 'verb', en: 'to lie, to be located', hi: 'पड़ा होना', ex: 'Der Gegenstand lag auf dem Tisch.', exEn: 'The item was lying on the table.', conj: { praesens: 'liegt', praeteritum: 'lag', perfekt: 'hat gelegen' } },
    { de: 'tr\u00e4umen', pos: 'verb', en: 'to dream', hi: 'सपना देखना', ex: 'Ich tr\u00e4umte von einer romantischen Hochzeit.', exEn: 'I dreamed of a romantic wedding.', conj: { praesens: 'tr\u00e4umt', praeteritum: 'tr\u00e4umte', perfekt: 'hat getr\u00e4umt' } },
    { de: 'verletzen', pos: 'verb', en: 'to hurt, to injure', hi: 'चोट पहुँचाना', ex: 'Im Dunkeln konnte man sich leicht verletzen.', exEn: 'In the dark you could easily hurt yourself.', conj: { praesens: 'verletzt', praeteritum: 'verletzte', perfekt: 'hat verletzt' } },
    { de: 'zusagen', pos: 'verb', en: 'to accept (an invitation) (separable)', hi: 'निमंत्रण स्वीकारना', ex: 'Wir sagten f\u00fcr die Hochzeit sofort zu.', exEn: 'We accepted the wedding invitation at once.', conj: { praesens: 'sagt zu', praeteritum: 'sagte zu', perfekt: 'hat zugesagt' } },
    { de: 'zusammenleben', pos: 'verb', en: 'to live together (separable)', hi: 'साथ रहना', ex: 'Sie wollten nach der Hochzeit zusammenleben.', exEn: 'They wanted to live together after the wedding.', conj: { praesens: 'lebt zusammen', praeteritum: 'lebte zusammen', perfekt: 'hat zusammengelebt' } },
    { de: 'weiterhelfen', pos: 'verb', en: 'to help sb out (separable)', hi: 'आगे मदद करना', ex: 'Der Nachbar half mir weiter.', exEn: 'The neighbour helped me out.', conj: { praesens: 'hilft weiter', praeteritum: 'half weiter', perfekt: 'hat weitergeholfen' } },
    { de: 'dazuschreiben', pos: 'verb', en: 'to add in writing (separable)', hi: 'साथ में लिखना', ex: 'Bitte schreib das Stichwort dazu.', exEn: 'Please add the keyword.', conj: { praesens: 'schreibt dazu', praeteritum: 'schrieb dazu', perfekt: 'hat dazugeschrieben' } },
    { de: 'Acht geben', pos: 'verb', en: 'to take care, to pay attention (auf + Akk.)', hi: 'ध्यान देना', ex: 'Man musste auf die Kinder Acht geben.', exEn: 'One had to take care of the children.', conj: { praesens: 'gibt Acht', praeteritum: 'gab Acht', perfekt: 'hat Acht gegeben' } },
    { de: 'werden', pos: 'verb', en: 'will (future); to become', hi: 'होगा; बनना', ex: 'Ich wollte Bankkaufmann werden.', exEn: 'I wanted to become a bank clerk.', conj: { praesens: 'wird', praeteritum: 'wurde', perfekt: 'ist geworden' } },
    // ===== Adjectives / adverbs / small words =====
    { de: 'romantisch', pos: 'adjective', en: 'romantic', hi: 'रोमांटिक', ex: 'Die Hochzeit war sehr romantisch.', exEn: 'The wedding was very romantic.' },
    { de: 'betrunken', pos: 'adjective', en: 'drunk', hi: 'नशे में', ex: 'Ein Gast war betrunken und wollte singen.', exEn: 'A guest was drunk and wanted to sing.' },
    { de: 'k\u00fchl', pos: 'adjective', en: 'cool, chilly', hi: 'ठंडा', ex: 'Ohne Heizung war es k\u00fchl.', exEn: 'Without heating it was chilly.' },
    { de: 'sauer', pos: 'adjective', en: 'sour; annoyed', hi: 'खट्टा; नाराज़', ex: 'Der Apfelkuchen war ein bisschen sauer.', exEn: 'The apple cake was a bit sour.' },
    { de: 'was', pos: 'pronoun', en: 'something (colloquial for etwas)', hi: 'कुछ', ex: 'Ich musste noch was besorgen.', exEn: 'I still had to get something.' },
    { de: 'worauf', pos: 'adverb', en: 'what \u2026 on/for (wo + preposition)', hi: 'किस पर', ex: 'Worauf musstest du warten?', exEn: 'What did you have to wait for?' }
  ],

  // ---------- Modalverben im Pr\u00e4teritum (rule cards) ----------
  grammar: [
    {
      title: 'The recipe: drop the umlaut, add -t-',
      goldenRule: 'Umlaut hatao, <b>-t-</b> lagao, simple endings. Same recipe for all six modals.',
      formula: [
        'k\u00f6nnen  \u2192  <b>konnte</b>     (\u00f6 \u2192 o)',
        'm\u00fcssen  \u2192  <b>musste</b>     (\u00fc \u2192 u)',
        'd\u00fcrfen  \u2192  <b>durfte</b>     (\u00fc \u2192 u)',
        'm\u00f6gen   \u2192  <b>mochte</b>     (\u00f6 \u2192 o, and g \u2192 ch)'
      ],
      memoryTrick: 'Do dots gir gaye, <b>-t-</b> aa gaya. Bas <b>m\u00f6gen</b> thoda zyada badalta hai \u2014 <b>mochte</b> (g bhi ch ban jaata hai).',
      recap: [
        'Drop the umlaut, add <b>-t-</b>, add the simple endings.',
        '<b>wollen</b> and <b>sollen</b> have no umlaut to drop.',
        '<b>m\u00f6gen \u2192 mochte</b> is the one that changes most.'
      ],
      body: [
        'Every modal Pr\u00e4teritum is built the same way: take the modal, <strong>remove any umlaut</strong>, add a <strong>-t-</strong>, then the simple endings. The vowel changes are easy to see:'
      ],
      table: {
        head: ['Modal (Pr\u00e4sens)', 'Pr\u00e4teritum (ich/er)', 'Meaning'],
        rows: [
          ['<span class="de">k\u00f6nnen</span>', '<span class="de r-modalverb">konnte</span>', 'could, was able to'],
          ['<span class="de">m\u00fcssen</span>', '<span class="de r-modalverb">musste</span>', 'had to'],
          ['<span class="de">d\u00fcrfen</span>', '<span class="de r-modalverb">durfte</span>', 'was allowed to'],
          ['<span class="de">wollen</span>', '<span class="de r-modalverb">wollte</span>', 'wanted to'],
          ['<span class="de">sollen</span>', '<span class="de r-modalverb">sollte</span>', 'was supposed to / should'],
          ['<span class="de">m\u00f6gen</span>', '<span class="de r-modalverb">mochte</span>', 'liked']
        ]
      },
      note: 'Watch the vowels: <b>\u00f6\u2192o</b> (k\u00f6nnen\u2192konnte), <b>\u00fc\u2192u</b> (m\u00fcssen\u2192musste, d\u00fcrfen\u2192durfte), and m\u00f6gen loses the g too: <b>mochte</b>. wollen and sollen have no umlaut to lose.',
      hinglish: 'Recipe har modal ke liye ek hi hai: umlaut hatao, <b>-t-</b> lagao, aur phir simple endings. Isi tarah <b>k\u00f6nnen</b> se <b>konnte</b>, <b>m\u00fcssen</b> se <b>musste</b>, <b>d\u00fcrfen</b> se <b>durfte</b>, <b>wollen</b> se <b>wollte</b>, <b>sollen</b> se <b>sollte</b>, aur <b>m\u00f6gen</b> se <b>mochte</b> banta hai. Dhyaan do ki umlaut ke do dots gayab ho jaate hain.'
    },
    {
      title: 'All six persons \u2014 ich and er are twins',
      body: [
        'The endings are the same simple set for every modal. The key comfort: <strong>ich</strong> and <strong>er/sie/es</strong> take <strong>no ending at all</strong>.'
      ],
      table: {
        head: ['Person', 'm\u00fcssen', 'k\u00f6nnen', 'wollen'],
        rows: [
          ['ich', '<span class="de r-modalverb">musste</span>', '<span class="de r-modalverb">konnte</span>', '<span class="de r-modalverb">wollte</span>'],
          ['du', '<span class="de r-modalverb">musstest</span>', '<span class="de r-modalverb">konntest</span>', '<span class="de r-modalverb">wolltest</span>'],
          ['er/sie/es', '<span class="de r-modalverb">musste</span>', '<span class="de r-modalverb">konnte</span>', '<span class="de r-modalverb">wollte</span>'],
          ['wir', '<span class="de r-modalverb">mussten</span>', '<span class="de r-modalverb">konnten</span>', '<span class="de r-modalverb">wollten</span>'],
          ['ihr', '<span class="de r-modalverb">musstet</span>', '<span class="de r-modalverb">konntet</span>', '<span class="de r-modalverb">wolltet</span>'],
          ['sie/Sie', '<span class="de r-modalverb">mussten</span>', '<span class="de r-modalverb">konnten</span>', '<span class="de r-modalverb">wollten</span>']
        ]
      },
      note: 'So <span class="de">ich musste</span> and <span class="de">er musste</span> look identical \u2014 as do wir/sie/Sie (\u2013<b>en</b>). Just <b>\u2013est</b> (du) and <b>\u2013et</b> (ihr) stand out. durfte, sollte and mochte follow the very same endings.',
      hinglish: 'Endings sab modals mein ek jaisi hain. <b>ich</b> aur <b>er/sie/es</b> par koi ending nahi lagti (<b>musste</b>), <b>du</b> par <b>-est</b> (<b>musstest</b>), <b>ihr</b> par <b>-et</b> (<b>musstet</b>), aur <b>wir</b>/<b>sie</b>/<b>Sie</b> par <b>-en</b> (<b>mussten</b>). Achhi baat yeh hai ki <b>ich</b> aur <b>er</b> ki form ek jaisi hoti hai, isliye yaad rakhna aasaan hai.'
    },
    {
      title: 'Pr\u00e4sens vs. Perfekt vs. Pr\u00e4teritum',
      goldenRule: 'For modals in the past, always the <b>Pr\u00e4teritum</b> \u2014 never the Perfekt.',
      why: 'Everywhere else in spoken German you reach for the Perfekt. Modals are the exception: <i>ich habe arbeiten gemusst</i> is grammatical but nobody says it, because two verb-forms at the end make the sentence heavy.',
      memoryTrick: 'Baaki sab verbs bolte waqt Perfekt lete hain, par <b>modals ulte hain</b> \u2014 unka past sirf <b>musste, konnte, wollte</b>. "habe gemusst" bhool jao.',
      recap: [
        'Modal past = <b>Pr\u00e4teritum</b> (musste, konnte, durfte).',
        'The Perfekt of modals exists but sounds clumsy.',
        'This is the opposite of every other verb at A2.'
      ],
      body: [
        'Three tenses, one meaning \u2014 but for modals, only the Pr\u00e4teritum sounds natural in the past.'
      ],
      table: {
        head: ['Tense', 'Example', 'Natural?'],
        rows: [
          ['Pr\u00e4sens', '<span class="de">Ich muss arbeiten.</span>', 'present \u2014 fine'],
          ['Pr\u00e4teritum', '<span class="de">Ich <span class="r-modalverb">musste</span> arbeiten.</span>', '\u2713 the natural past'],
          ['Perfekt', '<span class="de">Ich habe arbeiten gemusst.</span>', '\u2717 clumsy \u2014 avoid'],
          ['Pr\u00e4teritum', '<span class="de">Wir <span class="r-modalverb">wollten</span> heiraten.</span>', '\u2713 the natural past']
        ]
      },
      note: 'The Perfekt of modals (habe gemusst / gewollt / gekonnt) technically exists, but native speakers almost never use it. For the modal past, reach straight for the <b>Pr\u00e4teritum</b>.',
      hinglish: 'Teen tenses ka matlab lagbhag ek hi hai, lekin modals ke past ke liye sirf Pr\u00e4teritum natural lagta hai. Isliye <b>Ich musste</b> bolo \u2014 <b>ich habe gemusst</b> grammar mein galat nahi hai, par bolne mein awkward lagta hai aur log use nahi karte.'
    },
    {
      title: 'What each modal says about the past',
      body: [
        'The six forms cover ability, obligation, permission, wish and advice \u2014 the whole map of the modal past.'
      ],
      table: {
        head: ['Form', 'Meaning', 'Example'],
        rows: [
          ['<span class="de r-modalverb">konnte</span>', 'ability', '<span class="de">Ich <span class="r-modalverb">konnte</span> die ganze Nacht tanzen.</span>'],
          ['<span class="de r-modalverb">musste</span>', 'obligation', '<span class="de">Ich <span class="r-modalverb">musste</span> etwas besorgen.</span>'],
          ['<span class="de r-modalverb">durfte</span>', 'permission', '<span class="de">Als Kind <span class="r-modalverb">durfte</span> ich nicht fernsehen.</span>'],
          ['<span class="de r-modalverb">wollte</span>', 'wish', '<span class="de">Wir <span class="r-modalverb">wollten</span> zusammenleben.</span>'],
          ['<span class="de r-modalverb">sollte</span>', 'advice/duty', '<span class="de">Ich <span class="r-modalverb">sollte</span> ruhig bleiben.</span>'],
          ['<span class="de r-modalverb">mochte</span>', 'liking', '<span class="de">Ich <span class="r-modalverb">mochte</span> B\u00fccher.</span>']
        ]
      },
      note: 'Careful: <b>mochte</b> (liked, m\u00f6gen) is not <b>m\u00f6chte</b> (would like \u2014 present/polite). And <b>durfte nicht</b> = wasn\u2019t allowed to; <b>musste nicht</b> = didn\u2019t have to.',
      hinglish: 'Chhe forms milkar past ka poora matlab cover kar leti hain: <b>konnte</b> ability batata hai, <b>musste</b> majboori, <b>durfte</b> permission, <b>wollte</b> chahat, <b>sollte</b> advice, aur <b>mochte</b> pasand. Ek baat dhyaan se \u2014 <b>mochte</b> (pasand tha) aur <b>m\u00f6chte</b> (chahunga) do alag cheezein hain. Aur <b>durfte nicht</b> ka matlab hai ki permission nahi thi.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four modal-past traps to avoid.' ],
      mistakes: [
        { wrong: 'Ich habe gestern arbeiten gemusst.', right: 'Ich musste gestern arbeiten.', why: 'For modals, use the Pr\u00e4teritum, not the Perfekt \u2014 "habe gemusst" sounds clumsy.' },
        { wrong: 'Ich k\u00f6nnte das nicht finden.', right: 'Ich konnte das nicht finden.', why: 'Past of k\u00f6nnen is konnte (no umlaut). k\u00f6nnte is Konjunktiv II (would be able to).' },
        { wrong: 'Ich mochte einen Kaffee.', right: 'Ich m\u00f6chte einen Kaffee.', why: 'For "I would like" use m\u00f6chte (present). mochte = liked (past of m\u00f6gen).' },
        { wrong: 'Er musstete nach Hause.', right: 'Er musste nach Hause.', why: 'ich and er/sie/es take no ending: er musste, not "musstete".' }
      ],
      hinglish: 'Char galtiyan common hain. Modals ke past ke liye Pr\u00e4teritum use karo: <b>ich musste</b>, na ki <b>habe gemusst</b>. <b>konnte</b> (past) aur <b>k\u00f6nnte</b> (Konjunktiv) ko mix na karo. <b>mochte</b> aur <b>m\u00f6chte</b> bhi alag hain. Aur <b>ich</b>/<b>er</b> par koi ending nahi lagti \u2014 <b>er musste</b> sahi hai, <b>musstete</b> nahi.'
    }
  ],

  // ---------- Reading passage (Annas Kindheit, clickable) ----------
  reading: {
    title: 'Annas Kindheit',
    titleEn: 'Anna\u2019s childhood',
    tokens: [
      { w: 'Als', role: 'r-conjunction', en: 'as a', hi: 'जब', pron: 'als', type: 'Conjunction' },
      { w: 'Kind', role: 'r-object', en: 'child', hi: 'बच्चा', pron: 'kint', type: 'Noun \u00b7 neut.' },
      { w: 'lebte', role: 'r-verb', en: 'lived', hi: 'रहती थी', pron: 'LAYP-tuh', type: 'Verb \u00b7 leben (Pr\u00e4t.)', why: 'leben \u2192 lebte, regular Pr\u00e4teritum (recycled \u2014 Pr\u00e4teritum).', ex: 'Ich lebte in Indien.', exEn: 'I lived in India.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition \u00b7 Dativ' },
      { w: 'meiner', role: 'r-dativ', en: 'my (fem. dat.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive \u00b7 dative' },
      { w: 'Oma', role: 'r-dativ', en: 'grandma', hi: 'दादी', pron: 'OH-ma', type: 'Noun \u00b7 fem.', why: 'die Oma (recycled \u2014 Familie).', ex: 'meiner Oma', exEn: 'my grandma' },
      { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ', pron: 'tsoo-ZA-men', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'Hausfrau', role: 'r-object', en: 'homemaker', hi: 'गृहिणी', pron: 'HOWS-frow', type: 'Noun \u00b7 fem.', why: 'die Hausfrau (this chapter).', ex: 'Sie war Hausfrau.', exEn: 'She was a homemaker.' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'konnte', role: 'r-modalverb', en: 'could', hi: 'सकती थी', pron: 'KON-tuh', type: 'Modalverb \u00b7 k\u00f6nnen (Pr\u00e4t.)', why: 'k\u00f6nnen \u2192 konnte (this chapter).', ex: 'Sie konnte kochen.', exEn: 'She could cook.' },
      { w: 'wunderbar', role: 'r-adverb', en: 'wonderfully', hi: 'बहुत अच्छा', pron: 'VUN-der-bar', type: 'Adverb' },
      { w: 'kochen', role: 'r-verb', en: 'cook', hi: 'खाना बनाना', pron: 'KO-khen', type: 'Infinitive', why: 'infinitive at the end (recycled \u2014 Modalverben 1).', ex: 'kochen konnte', exEn: 'could cook' },
      { w: '.', plain: true },
      { w: 'Jeden', role: 'r-akkusativ', en: 'every (masc. acc.)', hi: 'हर', pron: 'YAY-den', type: 'Determiner \u00b7 acc.', why: 'jeden Sonntag \u2014 Akkusativ time (recycled \u2014 Zeitangaben).', ex: 'jeden Sonntag', exEn: 'every Sunday' },
      { w: 'Sonntag', role: 'r-time', en: 'Sunday', hi: 'रविवार', pron: 'ZON-tahk', type: 'Noun \u00b7 masc.' },
      { w: 'gab', role: 'r-verb', en: 'there was', hi: 'मिलता था', pron: 'gahp', type: 'Verb \u00b7 geben (Pr\u00e4t.)', why: 'es gab \u2014 Pr\u00e4teritum of es gibt (recycled \u2014 Pr\u00e4teritum).', ex: 'Es gab Apfelkuchen.', exEn: 'There was apple cake.' },
      { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'Apfelkuchen', role: 'r-object', en: 'apple cake', hi: 'सेब का केक', pron: 'AP-fel-koo-khen', type: 'Noun \u00b7 masc.', why: 'der Apfelkuchen (this chapter).', ex: 'Es gab Apfelkuchen.', exEn: 'There was apple cake.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'durfte', role: 'r-modalverb', en: 'was allowed to', hi: 'इजाज़त थी', pron: 'DURF-tuh', type: 'Modalverb \u00b7 d\u00fcrfen (Pr\u00e4t.)', why: 'permission: durfte (this chapter).', ex: 'Ich durfte helfen.', exEn: 'I was allowed to help.' },
      { w: 'immer', role: 'r-adverb', en: 'always', hi: 'हमेशा', pron: 'I-mer', type: 'Adverb' },
      { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Infinitive' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'musste', role: 'r-modalverb', en: 'had to', hi: 'पड़ता था', pron: 'MUS-tuh', type: 'Modalverb \u00b7 m\u00fcssen (Pr\u00e4t.)', why: 'obligation: musste (this chapter).', ex: 'Ich musste aufr\u00e4umen.', exEn: 'I had to tidy up.' },
      { w: 'danach', role: 'r-time', en: 'afterwards', hi: 'बाद में', pron: 'da-NAHKH', type: 'Adverb \u00b7 time', why: 'danach (recycled \u2014 Zeitangaben).', ex: 'danach aufr\u00e4umen', exEn: 'tidy up afterwards' },
      { w: 'aufr\u00e4umen', role: 'r-verb', en: 'tidy up', hi: 'साफ़ करना', pron: 'OWF-roy-men', type: 'Infinitive', why: 'aufr\u00e4umen \u2014 separable, whole as infinitive at the end (recycled \u2014 Trennbare Verben).', ex: 'aufr\u00e4umen musste', exEn: 'had to tidy up' },
      { w: '.', plain: true },
      { w: 'Abends', role: 'r-time', en: 'in the evenings', hi: 'शाम को', pron: 'AH-bents', type: 'Adverb \u00b7 time' },
      { w: 'durfte', role: 'r-modalverb', en: 'was allowed to', hi: 'इजाज़त थी', pron: 'DURF-tuh', type: 'Modalverb \u00b7 d\u00fcrfen (Pr\u00e4t.)' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation', why: 'durfte nicht = wasn\u2019t allowed to (this chapter).', ex: 'durfte nicht fernsehen', exEn: 'wasn\u2019t allowed to watch TV' },
      { w: 'lange', role: 'r-adverb', en: 'long', hi: 'देर तक', pron: 'LANG-uh', type: 'Adverb' },
      { w: 'wach', role: 'r-adjective', en: 'awake', hi: 'जागना', pron: 'vakh', type: 'Adjective', why: 'wach bleiben = to stay awake (recycled \u2014 Adjektive).', ex: 'wach bleiben', exEn: 'to stay awake' },
      { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Infinitive' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-weil', en: 'because', hi: 'क्योंकि', pron: 'vile', type: 'Conjunction \u00b7 weil', why: 'weil \u2192 verb last (recycled \u2014 weil).', ex: 'weil ich Angst hatte', exEn: 'because I was scared' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition' },
      { w: 'Dunkeln', role: 'r-place', en: 'dark', hi: 'अंधेरे', pron: 'DUN-keln', type: 'Noun \u00b7 neut.' },
      { w: 'Angst', role: 'r-object', en: 'fear', hi: 'डर', pron: 'angst', type: 'Noun \u00b7 fem.', why: 'die Angst; Angst haben (this chapter).', ex: 'Angst haben', exEn: 'to be afraid' },
      { w: 'hatte', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-tuh', type: 'Verb \u00b7 haben (Pr\u00e4t.)', why: 'conjugated verb last after weil (recycled \u2014 weil).', ex: '\u2026, weil ich Angst hatte.', exEn: '\u2026 because I was scared.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'wollte', role: 'r-modalverb', en: 'wanted to', hi: 'चाहती थी', pron: 'VOL-tuh', type: 'Modalverb \u00b7 wollen (Pr\u00e4t.)', why: 'wish: wollte (this chapter).', ex: 'Ich wollte lesen.', exEn: 'I wanted to read.' },
      { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'बल्कि', pron: 'LEE-ber', type: 'Adverb', why: 'lieber (recycled \u2014 Komparativ hint).', ex: 'lieber lesen', exEn: 'rather read' },
      { w: 'lesen', role: 'r-verb', en: 'read', hi: 'पढ़ना', pron: 'LAY-zen', type: 'Infinitive' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn (recycled \u2014 S\u00e4tze verbinden).', ex: '\u2026, denn ich mochte B\u00fccher.', exEn: '\u2026, because I liked books.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mochte', role: 'r-modalverb', en: 'liked', hi: 'पसंद था', pron: 'MOKH-tuh', type: 'Modalverb \u00b7 m\u00f6gen (Pr\u00e4t.)', why: 'liking: mochte, not m\u00f6chte (this chapter).', ex: 'Ich mochte B\u00fccher.', exEn: 'I liked books.' },
      { w: 'B\u00fccher', role: 'r-object', en: 'books', hi: 'किताबें', pron: 'B\u00dc-kher', type: 'Noun \u00b7 plural' },
      { w: 'sehr', role: 'r-adverb', en: 'very much', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Sonntags', role: 'r-time', en: 'on Sundays', hi: 'रविवार को', pron: 'ZON-tahks', type: 'Adverb \u00b7 time' },
      { w: 'sollte', role: 'r-modalverb', en: 'was supposed to', hi: 'चाहिए था', pron: 'ZOL-tuh', type: 'Modalverb \u00b7 sollen (Pr\u00e4t.)', why: 'duty/advice: sollte (this chapter).', ex: 'Ich sollte beten.', exEn: 'I was supposed to pray.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
      { w: 'die', role: 'r-akkusativ', en: 'the (pl. acc.)', hi: 'यह', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'kleinen', role: 'r-adjective', en: 'little', hi: 'छोटे', pron: 'KLY-nen', type: 'Adjective' },
      { w: 'Kinder', role: 'r-object', en: 'children', hi: 'बच्चों', pron: 'KIN-der', type: 'Noun \u00b7 plural', why: 'das Kind \u2192 die Kinder (recycled \u2014 Familie).', ex: 'die Kinder', exEn: 'the children' },
      { w: 'Acht', role: 'r-verb', en: 'care', hi: 'ध्यान', pron: 'akht', type: 'Phrase \u00b7 Acht geben', why: 'auf \u2026 Acht geben = to take care of (this chapter).', ex: 'Acht geben', exEn: 'to take care' },
      { w: 'geben', role: 'r-verb', en: 'give', hi: 'देना', pron: 'GAY-ben', type: 'Infinitive', why: 'Acht geben \u2014 infinitive at the end (this chapter).', ex: 'Acht geben sollte', exEn: 'was supposed to take care' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-subject', en: 'this', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
      { w: 'Zeit', role: 'r-subject', en: 'time', hi: 'समय', pron: 'tsite', type: 'Noun \u00b7 fem.', why: 'die Zeit (recycled \u2014 Zeit).', ex: 'diese Zeit', exEn: 'this time' },
      { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'var', type: 'Verb \u00b7 sein (Pr\u00e4t.)' },
      { w: 'romantisch', role: 'r-adjective', en: 'romantic, lovely', hi: 'रोमांटिक', pron: 'ro-MAN-tish', type: 'Adjective', why: 'romantisch (this chapter).', ex: 'romantisch', exEn: 'romantic' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'sch\u00f6n', role: 'r-adjective', en: 'lovely', hi: 'सुंदर', pron: 'sh\u00f6n', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'As a child I lived together with my grandma. She was a homemaker and could cook wonderfully. Every Sunday there was apple cake. I was always allowed to help, but afterwards I had to tidy up. In the evenings I wasn\u2019t allowed to stay awake long, because I was scared in the dark. I would rather have read, because I liked books very much. On Sundays I was supposed to take care of the little children. This time was romantic and lovely. \u2014 Count the modal past forms: konnte, durfte, musste, durfte nicht, wollte, mochte, sollte \u2014 every one a simple Pr\u00e4teritum.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_006_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Anke, warum warst du nicht beim Konzert?', en: 'Anke, why weren\'t you at the concert?' },
      { id: 'A2_006_L002', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich musste arbeiten. Mein Chef wollte, dass ich bleibe.', en: 'I had to work. My boss wanted me to stay.' },
      { id: 'A2_006_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Schade! Konntest du wenigstens die Musik hören?', en: 'Too bad! Could you at least hear the music?' },
      { id: 'A2_006_L004', speaker: 'Anke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nein, aber ich durfte früher gehen.', en: 'No, but I was allowed to leave earlier.' }
    ],
    transcript: 'Anke, warum warst du nicht beim Konzert? Ich musste arbeiten. Mein Chef wollte, dass ich bleibe. Schade! Konntest du wenigstens die Musik hören? Nein, aber ich durfte früher gehen.',
    translation: 'Anke, why weren\'t you at the concert? I had to work. My boss wanted me to stay. Too bad! Could you at least hear the music? No, but I was allowed to leave earlier.',
    tokens: [
      { w: 'Anke' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'warst' },
      { w: 'du' },
      { w: 'nicht' },
      { w: 'beim' },
      { w: 'Konzert' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'musste' },
      { w: 'arbeiten' },
      { w: '.', plain: true },
      { w: 'Mein' },
      { w: 'Chef' },
      { w: 'wollte' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'ich' },
      { w: 'bleibe' },
      { w: '.', plain: true },
      { w: 'Schade' },
      { w: '!', plain: true },
      { w: 'Konntest' },
      { w: 'du' },
      { w: 'wenigstens' },
      { w: 'die' },
      { w: 'Musik' },
      { w: 'hören' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'durfte' },
      { w: 'früher' },
      { w: 'gehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum konnte Anke nicht zum Konzert gehen?', qEn: 'Why couldn\'t Anke go to the concert?', options: ['Sie war krank.', 'Sie musste arbeiten.', 'Sie hatte kein Ticket.', 'Sie wollte nicht.'], optionsEn: ['She was ill.', 'She had to work.', 'She had no ticket.', 'She didn\'t want to.'], answer: 1,
        explain: '"Ich musste arbeiten."' },
      { q: 'Was durfte Anke machen?', qEn: 'What was Anke allowed to do?', options: ['die Musik hören', 'früher gehen', 'das Konzert filmen', 'zu Hause bleiben'], optionsEn: ['listen to the music', 'leave earlier', 'film the concert', 'stay at home'], answer: 1,
        explain: '"Ich durfte früher gehen."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Warum warst du nicht auf der Hochzeit?", taskEn: "Your friend asks: why weren't you at the wedding?", de: "Ich konnte nicht kommen, denn ich hatte einen Notfall.", en: "I couldn't come, because I had an emergency." },
    { task: "Dein Nachbar fragt: Was musstest du gestern machen?", taskEn: "Your neighbour asks: what did you have to do yesterday?", de: "Ich musste die Heizung reparieren und Brot besorgen.", en: "I had to fix the heating and get bread." },
    { task: "Deine Mutter fragt: Durftest du als Kind allein einkaufen?", taskEn: "Your mother asks: were you allowed to shop alone as a child?", de: "Nein, ich durfte nicht allein ins Einkaufszentrum gehen.", en: "No, I wasn't allowed to go to the shopping centre alone." },
    { task: "Dein Freund fragt: Was wolltest du als Kind werden?", taskEn: "Your friend asks: what did you want to be as a child?", de: "Ich wollte Augenoptiker werden.", en: "I wanted to be an optician." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Describe yesterday or last week in six sentences using the modal past. Use all six forms at least once \u2014 konnte, musste, durfte, wollte, sollte, mochte \u2014 and one negative (durfte nicht or musste nicht). Try this chapter\u2019s words: die Hochzeit, der Notfall, besorgen, das Einkaufszentrum, romantisch.',
    starters: ['Gestern musste ich \u2026', 'Ich konnte \u2026', 'Als Kind durfte ich (nicht) \u2026', 'Ich wollte \u2026, aber ich sollte \u2026'],
    placeholder: 'Gestern musste ich etwas im Einkaufszentrum besorgen. Ich konnte aber nicht \u2026',
    minWords: 30
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct modal past: "Gestern ___ ich zur Hochzeit gehen." (wanted to)',
      options: ['will', 'wollte', 'wollten', 'gewollt'],
      answer: 1,
      explain: 'wollen \u2192 wollte (ich, no ending): Gestern wollte ich zur Hochzeit gehen.'
    },
    gap: {
      // supply Präteritum of müssen (ich) then dürfen-negated
      sentence: ['Ich ', ' etwas besorgen, aber ich ', ' die Nummer nicht finden.'],
      gaps: [ { answer: 'musste', accepts: ['musste'] }, { answer: 'konnte', accepts: ['konnte'] } ],
      explain: 'm\u00fcssen \u2192 musste; k\u00f6nnen \u2192 konnte (both ich-forms, no ending).'
    },
    match: {
      q: 'Match each present modal to its Pr\u00e4teritum (ich) form.',
      pairs: [
        { noun: 'k\u00f6nnen', art: 'konnte' },
        { noun: 'm\u00fcssen', art: 'musste' },
        { noun: 'd\u00fcrfen', art: 'durfte' },
        { noun: 'wollen', art: 'wollte' },
        { noun: 'sollen', art: 'sollte' },
        { noun: 'm\u00f6gen', art: 'mochte' }
      ]
    },
    builder: {
      target: 'Build: "As a child I wasn\u2019t allowed to watch TV."',
      bank: ['Als', 'Kind', 'durfte', 'ich', 'nicht', 'fernsehen'],
      answer: ['Als', 'Kind', 'durfte', 'ich', 'nicht', 'fernsehen'],
      roles: { 'Als': 'r-conjunction', 'Kind': 'r-object', 'durfte': 'r-modalverb', 'ich': 'r-subject', 'nicht': 'r-negation', 'fernsehen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the Pr\u00e4teritum (ich) of m\u00fcssen?', options: ['m\u00fcsste', 'musste', 'gemusst', 'muss'], answer: 1,
      explain: 'Drop the umlaut, add -t-: m\u00fcssen \u2192 musste.' },
    { q: 'Which sounds natural in the past?', options: ['Ich habe arbeiten gemusst.', 'Ich musste arbeiten.', 'Ich muss arbeiten gehabt.', 'Ich bin arbeiten gemusst.'], answer: 1,
      explain: 'For modals, use the Pr\u00e4teritum: Ich musste arbeiten.' },
    { q: '"Als Kind ___ ich nicht fernsehen." (wasn\u2019t allowed)', options: ['durfte', 'konnte', 'musste', 'wollte'], answer: 0,
      explain: 'Permission (not allowed) = durfte nicht.' },
    { q: 'Which ich-form has NO ending?', options: ['ich mussten', 'ich musstest', 'ich musste', 'ich musstete'], answer: 2,
      explain: 'ich and er/sie/es take no ending: ich musste, er musste.' },
    { q: 'What does "mochte" mean?', options: ['would like', 'liked', 'must', 'may'], answer: 1,
      explain: 'mochte = liked (past of m\u00f6gen). m\u00f6chte = would like (present/polite).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: 'One recipe: drop the umlaut, add <span class="de">-t-</span>, simple endings \u2014 <span class="de r-modalverb">konnte, musste, durfte, wollte, sollte, mochte</span>.' },
    { c: 'r-modalverb', html: '<span class="de">ich</span> and <span class="de">er/sie/es</span> take <b>no ending</b>: <span class="de">ich musste, er musste</span>. Just du (\u2013est) and ihr (\u2013et) stand out.' },
    { c: 'r-modalverb', html: 'For the modal past, use the <b>Pr\u00e4teritum</b>, not the Perfekt: <span class="de">ich musste</span>, never <span class="de">ich habe gemusst</span>.' }
  ],
  revisionTips: [
    'Chant the six: konnte, musste, durfte, wollte, sollte, mochte.',
    'ich = er/sie/es (no ending); du adds -est, ihr adds -et, the rest add -en.',
    'mochte (liked) is not m\u00f6chte (would like); konnte (could) is not k\u00f6nnte (would be able to).'
  ]
};

window.CHAPTER = CHAPTER;
