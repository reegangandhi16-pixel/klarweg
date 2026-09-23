/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 29
   "Indefinitpronomen" — jemand/niemand, etwas/nichts, alles,
   jeder/alle, manche/viele/wenige/einige. Nominativ + Akkusativ
   taught fully; Dativ (niemandem, jemandem) reviewed only.
   No irgendwelch-, sämtlich, jedermann, or B1 indefinite structures.
   Vocabulary source: uploaded chapter-29 list (30 items; Wohnen &
   Nachbarn theme — der Mieter, die Mitbewohnerin, der Bauernhof,
   die Katze). Recycles A1/A2 vocabulary throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-28-als-wenn-data.js exactly (flat
   vocab[], grammar[] rule cards, tokenized reading, etc.) so it
   runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "zurückllaufen" → corrected to zurücklaufen (to run back).
   • "vorgekommen - again.)" — garbled gloss → corrected to
     vorgekommen = happened, occurred (Partizip II of vorkommen,
     recycled from Ch.28).
   • "die Dekoration" and "dünn" and "einmalig" and "gespannt"
     mislabelled "Adverb/Other" in the source sheet — die
     Dekoration is a noun (fem.), dünn/einmalig/gespannt are
     adjectives; corrected accordingly.
   • "der Roller - Scooter" — capitalised English gloss lowercased
     for consistency.
============================================================ */
const CHAPTER = {
  id: 'a2-29-indefinitpronomen',
  phase: 'A2 · Phase 2',
  number: 29,
  title: 'Indefinitpronomen',
  titleEn: 'Indefinite pronouns',
  description: 'Jemand hat angerufen. Niemand ist zu Hause. Alles ist gut. This chapter teaches the everyday indefinite pronouns — jemand/niemand for people, etwas/nichts/alles for things, and jeder/alle/manche/viele/einige/wenige for quantities — in Nominativ and Akkusativ, with Dativ (niemandem, jemandem) reviewed only.',
  xp: 190,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 30, title: 'Verben mit Präpositionen', titleEn: 'Verbs with fixed prepositions' , href: 'chapter-a2-30-verben-praepositionen.html' },

  prevChapter: { number: 28, title: 'Nebensatz mit als / wenn', titleEn: 'Subordinate clauses with als / wenn', href: 'chapter-a2-28-als-wenn.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Nadja checks in on an empty house while Timo waters the flowers and feeds the waiting cat — and every answer reaches for an indefinite pronoun: niemand is home, nobody has given anything yet, but someone should know where the food is.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear jemand vs. niemand and etwas vs. nichts side by side'
    ],
    scene: 'Vor dem Aushang — im Wohnhaus',
    femaleSpeakers: ['Nadja'],
    dialogue: [
      { speaker: 'Nadja', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'jemand', role: 'r-subject', en: 'someone', hi: 'कोई', pron: 'YAY-mant', type: 'Pronoun · indefinite', why: 'jemand = someone (this chapter).', ex: 'Ist jemand zu Hause?', exEn: 'Is someone home?' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: '?', plain: true }
      ], en: 'Is someone home?', hi: 'Kya koi ghar par hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'niemand', role: 'r-subject', en: 'no one', hi: 'कोई नहीं', pron: 'NEE-mant', type: 'Pronoun · indefinite', why: 'niemand = no one (this chapter).', ex: 'Niemand ist zu Hause.', exEn: 'No one is home.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'da', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dah', type: 'Adverb · place' },
        { w: '.', plain: true },
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'बस', pron: 'noor', type: 'Adverb' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Katze', role: 'r-subject', en: 'cat', hi: 'बिल्ली', pron: 'KAT-suh', type: 'Noun · fem.', why: 'die Katze (this chapter).', ex: 'Die Katze wartet auf dich.', exEn: 'The cat is waiting for you.' },
        { w: 'wartet', role: 'r-verb', en: 'is waiting', hi: 'इंतज़ार कर रही है', pron: 'VAR-tet', type: 'Verb · warten' },
        { w: '.', plain: true }
      ], en: 'No, no one is there. Only the cat is waiting.', hi: 'Nahi, koi wahaan nahi hai. Sirf billi intezaar kar rahi hai.' },
      { speaker: 'Nadja', tokens: [
        { w: 'Hat', role: 'r-verb', en: 'has', hi: 'दिया', pron: 'hat', type: 'Verb · haben' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'jemand', role: 'r-subject', en: 'someone', hi: 'किसी ने', pron: 'YAY-mant', type: 'Pronoun · indefinite' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite', why: 'etwas = something (this chapter).', ex: 'Hat jemand etwas gegeben?', exEn: 'Has someone given something?' },
        { w: 'gegeben', role: 'r-verb', en: 'given', hi: 'दिया', pron: 'ge-GAY-ben', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Has someone already given something?', hi: 'Kya kisi ne pehle se kuch diya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी तक', pron: 'nokh', type: 'Adverb' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'दिया', pron: 'hat', type: 'Verb · haben' },
        { w: 'niemand', role: 'r-subject', en: 'no one', hi: 'किसी ने नहीं', pron: 'NEE-mant', type: 'Pronoun · indefinite' },
        { w: 'etwas', role: 'r-akkusativ', en: 'anything', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'gegeben', role: 'r-verb', en: 'given', hi: 'दिया', pron: 'ge-GAY-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gieße', role: 'r-verb', en: 'water', hi: 'पानी देता हूँ', pron: 'GEE-suh', type: 'Verb · gießen (ich)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Blumen', role: 'r-akkusativ', en: 'flowers', hi: 'फूल', pron: 'BLOO-men', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'No, no one has given anything yet. I am watering the flowers now.', hi: 'Nahi, abhi tak kisi ne kuch nahi diya. Main abhi phoolon ko paani deta hoon.' },
      { speaker: 'Nadja', tokens: [
        { w: 'Braucht', role: 'r-verb', en: 'does it need', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Katze', role: 'r-subject', en: 'cat', hi: 'बिल्ली', pron: 'KAT-suh', type: 'Noun · fem.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: '?', plain: true }
      ], en: 'Does the cat also need something?', hi: 'Kya billi ko bhi kuch chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'braucht', role: 'r-verb', en: 'needs', hi: 'ज़रूरत है', pron: 'BROWKHT', type: 'Verb · brauchen' },
        { w: 'Futter', role: 'r-akkusativ', en: 'food', hi: 'खाना', pron: 'FU-ter', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Weiß', role: 'r-verb', en: 'does know', hi: 'पता है', pron: 'vice', type: 'Verb · wissen' },
        { w: 'jemand', role: 'r-subject', en: 'someone', hi: 'किसी को', pron: 'YAY-mant', type: 'Pronoun · indefinite' },
        { w: ',', plain: true },
        { w: 'wo', role: 'r-question', en: 'where', hi: 'कहाँ', pron: 'vo', type: 'Question word' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Futter', role: 'r-subject', en: 'food', hi: 'खाना', pron: 'FU-ter', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Yes, she needs food. Does someone know where the food is?', hi: 'Haan, use khaana chahiye. Kya kisi ko pata hai khaana kahaan hai?' },
      { speaker: 'Nadja', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'weiß', role: 'r-verb', en: 'know', hi: 'पता है', pron: 'vice', type: 'Verb · wissen (ich)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: '.', plain: true },
        { w: 'Alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite', why: 'alles = everything (this chapter).', ex: 'Alles ist im Schrank.', exEn: 'Everything is in the cabinet.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Schrank', role: 'r-dativ', en: 'cabinet', hi: 'अलमारी में', pron: 'shrank', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes, I know it. Everything is in the cabinet.', hi: 'Haan, mujhe pata hai. Sab kuch almaari mein hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'nichts', role: 'r-subject', en: 'nothing', hi: 'कुछ नहीं', pron: 'NIKHTS', type: 'Pronoun · indefinite', why: 'nichts = nothing (this chapter).', ex: 'Hier ist nichts vergessen.', exEn: 'Nothing is forgotten here.' },
        { w: 'vergessen', role: 'r-verb', en: 'forgotten', hi: 'भूला', pron: 'fer-GE-sen', type: 'Partizip II' },
        { w: '.', plain: true }
      ], en: 'Thanks! Then nothing is forgotten here.', hi: 'Dhanyavaad! Toh yahaan kuch nahi bhoola gaya.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Five simple decisions cover almost everything you\'ll say about people, things and amounts in general. Unknown person? <span class="de r-subject">jemand</span>. No person? <span class="de r-subject">niemand</span>. Unknown thing? <span class="de r-akkusativ">etwas</span>. No thing? <span class="de r-akkusativ">nichts</span>. Everyone, one by one, or as a whole group? <span class="de r-subject">jeder</span> vs. <span class="de r-subject">alle</span>. Some, many, or few? <span class="de r-subject">einige</span> / <span class="de r-subject">viele</span> / <span class="de r-subject">wenige</span> / <span class="de r-subject">manche</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is INDEFINITPRONOMEN: jemand/niemand (people), etwas/nichts/alles (things), jeder/alle/manche/viele/einige/wenige (quantities), Nominativ and Akkusativ, with Dativ (niemandem/jemandem) reviewed only. ' +
    'No irgendwelch-, sämtlich, jedermann, no B1 indefinite structures. The learner wrote sentences below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- jemand = an unspecified person ("Jemand hat angerufen."); niemand = no person at all ("Niemand ist zu Hause."). Flag if the learner confuses them, or uses "kein jemand"/double negation like "Ich habe nichts nicht."\n' +
    '- etwas = an unspecified thing; nichts = no thing; alles = everything as a whole. Flag confusion between these.\n' +
    '- jeder (each one individually, singular verb) vs. alle (everyone as a group, plural verb): flag "Jeder sind…" (should be "Jeder ist…") or "Alle ist…" (should be "Alle sind…").\n' +
    '- viele (many) / einige (a few) / wenige (few, scarce) / manche (some, a portion) all take plural nouns and plural verbs.\n' +
    '- niemand and jemand only decline for case in formal/Dativ contexts (niemandem, jemandem) — this chapter treats Dativ as review only, so be lenient there.\n' +
    '- Flag "Ich sehe niemand." → should be "Ich sehe niemanden." (Akkusativ -en ending on niemand/jemand as a direct object).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Indefinitpronomen check:</b> one sentence on whether the learner chose the right pronoun for people/things/quantities.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You handle jemand/niemand, etwas/nichts/alles, and jeder/alle/viele/einige/wenige confidently. Next: verbs with fixed prepositions — warten auf, denken an.',
    mid: 'Good. Re-read the comparison tables once — jemand vs. niemand, jeder vs. alle — then continue.',
    low: 'Worth another pass — remember: jemand/etwas point to something unspecified; niemand/nichts deny it entirely; jeder is singular, alle is plural. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Jemand', role: 'r-subject' }, { w: 'hat', role: 'r-verb' },
    { w: 'etwas', role: 'r-akkusativ' }, { w: 'gefunden', role: 'r-verb' },
    { w: ',', role: 'plain' }, { w: 'aber', role: 'r-conjunction' },
    { w: 'niemand', role: 'r-subject' }, { w: 'weiß', role: 'r-verb' },
    { w: 'nichts', role: 'r-akkusativ' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the five decisions: people, things, and quantities in general.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A notice board, a curious cat, and a lot of neighbours to talk about.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: der Mieter, die Mitbewohnerin, der Bauernhof, die Katze.' },
    { id: 'grammar',    label: 'Indefinitpronomen', tag: 'core',
      objective: 'Master jemand/niemand, etwas/nichts/alles, jeder/alle, manche/viele/wenige/einige.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a neighbourhood story full of indefinite pronouns.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each indefinite pronoun in a moving-in conversation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Talk about people, shopping, classmates, and daily routines in general terms.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short email or story using several indefinite pronouns.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill jemand/niemand, etwas/nichts, jeder/alle, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 190 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s housing and neighbours words — der Mieter, die Mitbewohnerin, der Bauernhof, die Katze — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'jemand/niemand and etwas/nichts drills, jeder vs. alle sorting, and a short-email writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Indefinitpronomen tables (people, things, groups), fixed expressions, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Jemand hat angerufen. Niemand ist zu Hause.', text: 'Talk about an unknown person, or no person at all' },
    { de: 'Ich habe etwas gefunden. Ich weiß nichts.', text: 'Talk about an unknown thing, or no thing at all' },
    { de: 'Jeder lernt anders. Alle sind da.', text: 'Distinguish each one individually from everyone as a group' },
    { de: 'Manche Leute, viele Studenten, einige Freunde, wenige Menschen', text: 'Say some, many, a few, and few correctly' },
    { de: 'Alles klar. Alles Gute. Nichts passiert.', text: 'Use the fixed everyday expressions naturally' }
  ],

  // ---------- Vocabulary (30 items — Wohnen & Nachbarn) ----------
  vocab: [
    { de: 'Aushang', art: 'der', gender: 'm', plural: 'Aushänge', pos: 'noun', en: 'announcement, notice', hi: 'सूचना पट्ट', ex: 'Am Aushang steht etwas Neues.', exEn: 'There\'s something new on the notice board.' },
    { de: 'Bauernhof', art: 'der', gender: 'm', plural: 'Bauernhöfe', pos: 'noun', en: 'farm', hi: 'खेत', ex: 'Niemand hat den Bauernhof besucht.', exEn: 'No one visited the farm.' },
    { de: 'blitzschnell', pos: 'adjective', en: 'lightning-fast', hi: 'बहुत तेज़', ex: 'Jemand ist blitzschnell die Treppe hinuntergelaufen.', exEn: 'Someone ran down the stairs lightning-fast.' },
    { de: 'Bärchen', art: 'das', gender: 'n', plural: 'Bärchen', pos: 'noun', en: 'little bear', hi: 'छोटा भालू', ex: 'Jemand hat dem Kätzchen ein Bärchen geschenkt.', exEn: 'Someone gave the kitty a little bear.' },
    { de: 'Bäuerin', art: 'die', gender: 'f', plural: 'Bäuerinnen', pos: 'noun', en: 'farmer (f.)', hi: 'किसान (महिला)', ex: 'Wenige kennen die Bäuerin persönlich.', exEn: 'Few people know the farmer (f.) personally.' },
    { de: 'Dekoration', art: 'die', gender: 'f', plural: 'Dekorationen', pos: 'noun', en: 'decoration', hi: 'सजावट', ex: 'Alles an der Dekoration ist neu.', exEn: 'Everything about the decoration is new.' },
    { de: 'dünn', pos: 'adjective', en: 'thin', hi: 'पतला', ex: 'Manche Kerzen sind sehr dünn.', exEn: 'Some candles are very thin.' },
    { de: 'einmalig', pos: 'adjective', en: 'unique', hi: 'अद्वितीय', ex: 'Dieser Aushang ist einmalig.', exEn: 'This notice is unique.' },
    { de: 'Fläche', art: 'die', gender: 'f', plural: 'Flächen', pos: 'noun', en: 'area', hi: 'क्षेत्रफल', ex: 'Der Bauernhof hat eine große Fläche.', exEn: 'The farm has a large area.' },
    { de: 'gespannt', pos: 'adjective', en: 'curious', hi: 'उत्सुक', ex: 'Alle sind gespannt auf die Neuigkeiten.', exEn: 'Everyone is curious about the news.' },
    { de: 'gießen', pos: 'verb', en: 'to water', hi: 'पानी देना', ex: 'Jemand muss die Blumen gießen.', exEn: 'Someone has to water the flowers.', conj: { praesens: 'gießt', praeteritum: 'gоss', perfekt: 'hat gegossen' } },
    { de: 'Katze', art: 'die', gender: 'f', plural: 'Katzen', pos: 'noun', en: 'cat', hi: 'बिल्ली', ex: 'Jemand muss die Katze füttern.', exEn: 'Someone has to feed the cat.' },
    { de: 'Kerze', art: 'die', gender: 'f', plural: 'Kerzen', pos: 'noun', en: 'candle', hi: 'मोमबत्ती', ex: 'Wir stellen zusammen eine Kerze auf.', exEn: 'We set up a candle together.' },
    { de: 'Mieter', art: 'der', gender: 'm', plural: 'Mieter', pos: 'noun', en: 'tenant', hi: 'किरायेदार', ex: 'Nicht jeder Mieter kennt den Aushang.', exEn: 'Not every tenant knows the notice.' },
    { de: 'Mitbewohnerin', art: 'die', gender: 'f', plural: 'Mitbewohnerinnen', pos: 'noun', en: 'flatmate (f.)', hi: 'फ्लैटमेट (महिला)', ex: 'Meine Mitbewohnerin weiß alles über die Nachbarn.', exEn: 'My flatmate (f.) knows everything about the neighbours.' },
    { de: 'mitten', pos: 'preposition', en: 'in the middle of', hi: 'बीच में', ex: 'Der Aushang hängt mitten im Flur.', exEn: 'The notice hangs in the middle of the hallway.' },
    { de: 'Roller', art: 'der', gender: 'm', plural: 'Roller', pos: 'noun', en: 'scooter', hi: 'स्कूटर', ex: 'Jeder Mieter kann einen Roller ausleihen.', exEn: 'Every tenant can borrow a scooter.' },
    { de: 'Schaf', art: 'das', gender: 'n', plural: 'Schafe', pos: 'noun', en: 'sheep', hi: 'भेड़', ex: 'Einige Schafe stehen auf dem Bauernhof.', exEn: 'A few sheep are standing on the farm.' },
    { de: 'spiegeln', pos: 'verb', en: 'to reflect', hi: 'प्रतिबिंब दिखाना', ex: 'Etwas spiegelt sich im Fenster.', exEn: 'Something is reflected in the window.', conj: { praesens: 'spiegelt', praeteritum: 'spiegelte', perfekt: 'hat gespiegelt' } },
    { de: 'Stockwerk', art: 'das', gender: 'n', plural: 'Stockwerke', pos: 'noun', en: 'floor', hi: 'मंज़िल', ex: 'Auf jedem Stockwerk wohnt jemand anderes.', exEn: 'On every floor lives someone different.' },
    { de: 'Tiername', art: 'der', gender: 'm', plural: 'Tiernamen', pos: 'noun', en: 'animal name', hi: 'जानवर का नाम', ex: 'Manche Katzen haben einen lustigen Tiernamen.', exEn: 'Some cats have a funny animal name.' },
    { de: 'verbessern', pos: 'verb', en: 'to improve', hi: 'सुधारना', ex: 'Wir wollen etwas im Haus verbessern.', exEn: 'We want to improve something in the building.', conj: { praesens: 'verbessert', praeteritum: 'verbesserte', perfekt: 'hat verbessert' } },
    { de: 'voll', pos: 'adjective', en: 'full, complete', hi: 'पूरा', ex: 'Alles ist voll organisiert.', exEn: 'Everything is fully organised.' },
    { de: 'vorgekommen', pos: 'adjective', en: 'happened, occurred', hi: 'हुआ', ex: 'So etwas ist hier noch nie vorgekommen.', exEn: 'Something like that has never happened here before.' },
    { de: 'zum Teil', pos: 'phrase', en: 'in part', hi: 'कुछ हद तक', ex: 'Manche Mieter sind zum Teil neu im Haus.', exEn: 'Some tenants are in part new to the building.' },
    { de: 'zurücklaufen', pos: 'verb', en: 'to run back', hi: 'वापस दौड़ना', ex: 'Jemand ist schnell zurückgelaufen.', exEn: 'Someone ran back quickly.', conj: { praesens: 'läuft zurück', praeteritum: 'lief zurück', perfekt: 'ist zurückgelaufen' } },
    { de: 'Blumentopf', art: 'der', gender: 'm', plural: 'Blumentöpfe', pos: 'noun', en: 'flower pot', hi: 'गमला', ex: 'Auf jedem Blumentopf steht ein Name.', exEn: 'On every flower pot there\'s a name.' },
    { de: 'Lebenssituation', art: 'die', gender: 'f', plural: 'Lebenssituationen', pos: 'noun', en: 'life situation', hi: 'जीवन की स्थिति', ex: 'Jeder hat eine andere Lebenssituation.', exEn: 'Everyone has a different life situation.' },
    { de: 'Tierärztin', art: 'die', gender: 'f', plural: 'Tierärztinnen', pos: 'noun', en: 'vet (f.)', hi: 'पशु चिकित्सक (महिला)', ex: 'Niemand hat die Tierärztin heute gesehen.', exEn: 'No one has seen the vet (f.) today.' },
    { de: 'intensiv', pos: 'adjective', en: 'intense', hi: 'गहन', ex: 'Manche Nachbarn diskutieren intensiv.', exEn: 'Some neighbours discuss intensely.' }
  ],

  // ---------- Indefinitpronomen (rule cards) ----------
  grammar: [
    {
      title: 'People: jemand vs. niemand',
      body: [
        '<span class="de r-subject">jemand</span> = someone, an unspecified person. <span class="de r-subject">niemand</span> = no one, no person at all. Both are singular, third-person; the Akkusativ can add -en, and the Dativ adds -em (review only this chapter).'
      ],
      table: {
        head: ['Case', 'jemand', 'niemand'],
        rows: [
          ['Nominativ', '<span class="de">Jemand kommt.</span>', '<span class="de">Niemand versteht das.</span>'],
          ['Akkusativ', '<span class="de">Ich sehe jemanden.</span>', '<span class="de">Ich sehe niemanden.</span>'],
          ['Dativ (review)', '<span class="de">Mit jemandem sprechen.</span>', '<span class="de">Ich helfe niemandem.</span>']
        ]
      },
      hinglish: '<b>jemand</b> ka matlab hai \u201ckoi\u201d, jab tum nahi jaante ki kaun. <b>niemand</b> ka matlab hai \u201ckoi nahi\u201d. Akkusativ mein in dono par <b>-en</b> lag sakta hai: <b>jemanden</b>, <b>niemanden</b>.'
    },
    {
      title: 'Things: etwas, nichts, alles',
      body: [
        '<span class="de r-akkusativ">etwas</span> = something (unspecified). <span class="de r-akkusativ">nichts</span> = nothing. <span class="de r-akkusativ">alles</span> = everything, as a whole. None of the three change form for case.'
      ],
      table: {
        head: ['Word', 'Example'],
        rows: [
          ['etwas', '<span class="de">Ich habe etwas gekauft.</span>'],
          ['nichts', '<span class="de">Ich weiß nichts.</span>'],
          ['alles', '<span class="de">Alles ist gut.</span>']
        ]
      },
      note: 'etwas Neues, etwas Gutes — after etwas/nichts, an adjective is capitalised and takes -es, like a noun.',
      hinglish: '<b>etwas</b> ka matlab hai \u201ckuch\u201d, <b>nichts</b> ka \u201ckuch nahi\u201d, aur <b>alles</b> ka \u201csab kuch\u201d. In teeno ki form case ke hisaab se nahi badalti, isliye yeh aasaan hain.'
    },
    {
      title: 'Groups: jeder vs. alle',
      body: [
        '<span class="de r-subject">jeder</span> treats every member of a group individually — it takes a singular verb, like a "der-word". <span class="de r-subject">alle</span> treats the group as a whole — it takes a plural verb.'
      ],
      table: {
        head: ['Word', 'Example', 'Verb'],
        rows: [
          ['jeder', '<span class="de">Jeder lernt anders.</span>', 'singular'],
          ['alle', '<span class="de">Alle sind da.</span>', 'plural']
        ]
      },
      hinglish: '<b>jeder</b> ka matlab hai har koi, ek-ek karke \u2014 isliye iske saath singular verb aata hai. <b>alle</b> ka matlab hai sab log ek group ki tarah \u2014 isliye iske saath plural verb aata hai.'
    },
    {
      title: 'Amounts: manche, viele, einige, wenige',
      body: [
        'These four describe an unspecified quantity of people or things — all take plural nouns and plural verbs.'
      ],
      table: {
        head: ['Word', 'Meaning', 'Example'],
        rows: [
          ['manche', 'some (a portion)', '<span class="de">Manche Leute trinken keinen Kaffee.</span>'],
          ['viele', 'many', '<span class="de">Viele Studenten lernen Deutsch.</span>'],
          ['einige', 'a few', '<span class="de">Einige Freunde kommen später.</span>'],
          ['wenige', 'few (emphasising scarcity)', '<span class="de">Wenige Menschen sprechen diese Sprache.</span>']
        ]
      },
      hinglish: '<b>manche</b> ka matlab hai kuch log, ek hisse ki tarah. <b>viele</b> ka matlab bahut se, <b>einige</b> ka thode se, aur <b>wenige</b> ka bahut kam \u2014 jisme kami par zor hota hai.'
    },
    {
      title: 'Fixed expressions & common learner mistakes',
      body: [
        '<span class="de">Alles klar.</span> — All clear / got it. <span class="de">Alles Gute.</span> — All the best. <span class="de">Nichts passiert.</span> — No harm done. <span class="de">Etwas Neues.</span> — Something new.',
        '<span class="de strike">Jeder sind …</span> → <span class="de">Jeder ist …</span> — jeder always takes a singular verb.',
        '<span class="de strike">Alle ist …</span> → <span class="de">Alle sind …</span> — alle always takes a plural verb.',
        '<span class="de strike">Ich sehe niemand.</span> → <span class="de">Ich sehe niemanden.</span> — as a direct object, niemand takes the Akkusativ -en ending.',
        '<span class="de strike">Ich habe nichts nicht.</span> → <span class="de">Ich habe nichts.</span> — never double the negation.'
      ],
      hinglish: 'Kuch phrases fixed hain, inhe waise hi yaad karo: <b>Alles klar</b>, <b>Alles Gute</b>, <b>Nichts passiert</b>. Aur do galtiyan bachao \u2014 <b>jeder</b> ke saath singular verb aur <b>alle</b> ke saath plural verb aata hai, aur standard German mein double negation nahi hoti.'
    }
  ],

  // ---------- Reading passage ----------
  reading: {
    title: 'Der Aushang im Flur',
    titleEn: 'The notice in the hallway',
    tokens: [
      { w: 'Heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb' },
      { w: 'hängt', role: 'r-verb', en: 'hangs', hi: 'लटका है', pron: 'HENKT', type: 'Verb · hängen' },
      { w: 'mitten', role: 'r-place', en: 'in the middle of', hi: 'बीच में', pron: 'MI-ten', type: 'Preposition', why: 'mitten (this chapter).', ex: 'mitten im Flur', exEn: 'in the middle of the hallway' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition · Dat.' },
      { w: 'Flur', role: 'r-place', en: 'hallway', hi: 'गलियारा', pron: 'floor', type: 'Noun · masc.' },
      { w: 'ein', role: 'r-subject', en: 'a', hi: 'एक', pron: 'ine', type: 'Article' },
      { w: 'neuer', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-er', type: 'Adjective' },
      { w: 'Aushang', role: 'r-subject', en: 'notice', hi: 'सूचना पट्ट', pron: 'OWS-hang', type: 'Noun · masc.', why: 'der Aushang (this chapter).' },
      { w: '.', plain: true },
      { w: 'Jemand', role: 'r-subject', en: 'someone', hi: 'कोई', pron: 'YAY-mant', type: 'Indefinitpronomen', why: 'jemand (this chapter).', ex: 'Jemand hat den Aushang aufgehängt.', exEn: 'Someone hung up the notice.' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben' },
      { w: 'ihn', role: 'r-akkusativ', en: 'it (masc. acc.)', hi: 'इसे', pron: 'een', type: 'Pronoun' },
      { w: 'aufgehängt', role: 'r-verb', en: 'hung up', hi: 'लगाया', pron: 'OWF-guh-hengt', type: 'Partizip II · aufhängen' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Konjunktion' },
      { w: 'niemand', role: 'r-subject', en: 'no one', hi: 'कोई नहीं', pron: 'NEE-mant', type: 'Indefinitpronomen', why: 'niemand (this chapter).', ex: 'Niemand weiß, wer.', exEn: 'No one knows who.' },
      { w: 'weiß', role: 'r-verb', en: 'knows', hi: 'जानता', pron: 'vice', type: 'Verb · wissen' },
      { w: ',', plain: true },
      { w: 'wer', role: 'r-question', en: 'who', hi: 'कौन', pron: 'vair', type: 'Fragewort' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'geht', role: 'r-verb', en: 'is about', hi: 'बारे में है', pron: 'gayt', type: 'Verb · gehen' },
      { w: 'um', role: 'r-preposition', en: 'about', hi: 'बारे में', pron: 'oom', type: 'Preposition · Akk.' },
      { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Indefinitpronomen', why: 'etwas (this chapter).', ex: 'Es geht um etwas Wichtiges.', exEn: 'It\'s about something important.' },
      { w: 'Wichtiges', role: 'r-akkusativ', en: 'important', hi: 'महत्वपूर्ण', pron: 'VIKH-ti-ges', type: 'Adjektiv (nach etwas)' },
      { w: ':', plain: true },
      { w: 'jeder', role: 'r-subject', en: 'everyone (individually)', hi: 'हर कोई', pron: 'YAY-der', type: 'Indefinitpronomen', why: 'jeder — singular verb (this chapter).', ex: 'Jeder kann einen Roller ausleihen.', exEn: 'Everyone can borrow a scooter.' },
      { w: 'Mieter', role: 'r-subject', en: 'tenant', hi: 'किरायेदार', pron: 'MEE-ter', type: 'Noun · masc.', why: 'der Mieter (this chapter).' },
      { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता है', pron: 'kan', type: 'Modalverb' },
      { w: 'ab', role: 'r-time', en: 'from', hi: 'से', pron: 'ap', type: 'Adverb' },
      { w: 'sofort', role: 'r-time', en: 'now on', hi: 'अभी से', pron: 'zo-FORT', type: 'Adverb' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'AY-nen', type: 'Article · acc.' },
      { w: 'Roller', role: 'r-akkusativ', en: 'scooter', hi: 'स्कूटर', pron: 'RO-ler', type: 'Noun · masc.', why: 'der Roller (this chapter).' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition · Dat.' },
      { w: 'Stockwerk', role: 'r-place', en: 'floor', hi: 'मंज़िल', pron: 'SHTOK-verk', type: 'Noun · neut.', why: 'das Stockwerk (this chapter).' },
      { w: 'ausleihen', role: 'r-verb', en: 'borrow', hi: 'किराए पर लेना', pron: 'OWS-ly-en', type: 'Infinitiv' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'r-subject', en: 'some', hi: 'कुछ लोग', pron: 'MAN-khuh', type: 'Indefinitpronomen', why: 'manche (this chapter).', ex: 'Manche Mieter wissen es schon.', exEn: 'Some tenants already know it.' },
      { w: 'Mieter', role: 'r-subject', en: 'tenants', hi: 'किरायेदार', pron: 'MEE-ter', type: 'Noun · plural' },
      { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानते हैं', pron: 'VI-sen', type: 'Verb · wissen' },
      { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Konjunktion' },
      { w: 'viele', role: 'r-subject', en: 'many', hi: 'बहुत से', pron: 'FEE-luh', type: 'Indefinitpronomen', why: 'viele (this chapter).', ex: 'Viele Nachbarn lesen den Aushang nie.', exEn: 'Many neighbours never read the notice.' },
      { w: 'Nachbarn', role: 'r-subject', en: 'neighbours', hi: 'पड़ोसी', pron: 'NAKH-barn', type: 'Noun · plural' },
      { w: 'lesen', role: 'r-verb', en: 'read', hi: 'पढ़ते हैं', pron: 'LAY-zen', type: 'Verb · lesen' },
      { w: 'den', role: 'r-akkusativ', en: 'the (masc. acc.)', hi: 'यह', pron: 'dayn', type: 'Article · acc.' },
      { w: 'Aushang', role: 'r-akkusativ', en: 'notice', hi: 'सूचना पट्ट', pron: 'OWS-hang', type: 'Noun · masc.' },
      { w: 'nie', role: 'r-adverb', en: 'never', hi: 'कभी नहीं', pron: 'nee', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'r-subject', en: 'everyone (as a group)', hi: 'सब', pron: 'AL-uh', type: 'Indefinitpronomen', why: 'alle — plural verb (this chapter).', ex: 'Alle sind gespannt.', exEn: 'Everyone is curious.' },
      { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
      { w: 'gespannt', role: 'r-adjective', en: 'curious', hi: 'उत्सुक', pron: 'guh-SHPANT', type: 'Adjective', why: 'gespannt (this chapter).' },
      { w: '.', plain: true }
    ],
    translation: 'Today a new notice hangs in the middle of the hallway. Someone hung it up, but no one knows who. It\'s about something important: every tenant can now borrow a scooter on the floor. Some tenants already know it, but many neighbours never read the notice. Everyone is curious.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_029_L001', speaker: 'Nadja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ist jemand zu Hause?', en: 'Timo, is anyone home?' },
      { id: 'A2_029_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, niemand ist da. Aber die Katze wartet schon.', en: 'No, nobody is there. But the cat is already waiting.' },
      { id: 'A2_029_L003', speaker: 'Nadja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Hat schon jemand die Blumen gegossen?', en: 'Has anyone already watered the flowers?' },
      { id: 'A2_029_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, noch niemand. Ich mache das jetzt.', en: 'No, no one yet. I\'ll do it now.' }
    ],
    transcript: 'Timo, ist jemand zu Hause? Nein, niemand ist da. Aber die Katze wartet schon. Hat schon jemand die Blumen gegossen? Nein, noch niemand. Ich mache das jetzt.',
    translation: 'Timo, is anyone home? No, nobody is there. But the cat is already waiting. Has anyone already watered the flowers? No, no one yet. I\'ll do it now.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'jemand' },
      { w: 'zu' },
      { w: 'Hause' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'niemand' },
      { w: 'ist' },
      { w: 'da' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'die' },
      { w: 'Katze' },
      { w: 'wartet' },
      { w: 'schon' },
      { w: '.', plain: true },
      { w: 'Hat' },
      { w: 'schon' },
      { w: 'jemand' },
      { w: 'die' },
      { w: 'Blumen' },
      { w: 'gegossen' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'noch' },
      { w: 'niemand' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'mache' },
      { w: 'das' },
      { w: 'jetzt' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Ist jemand zu Hause?', qEn: 'Is anyone home?', options: ['Ja, viele Leute', 'Nein, niemand', 'Nur die Katze ist wach', 'Ja, Nadja'], optionsEn: ['Yes, many people', 'No, nobody', 'Only the cat is awake', 'Yes, Nadja'], answer: 1,
        explain: '"Nein, niemand ist da."' },
      { q: 'Hat jemand die Blumen gegossen?', qEn: 'Has anyone watered the flowers?', options: ['Ja, schon', 'Nein, noch niemand', 'Die Katze hat es getan', 'Nadja hat es getan'], optionsEn: ['Yes, quite', 'No, nobody yet', 'The cat did it', 'Nadja did it'], answer: 1,
        explain: '"Nein, noch niemand."' }
    ]
  },

  speaking: [
    { task: "Dein Mitbewohner fragt: Ist jemand zu Hause?", taskEn: "Your flatmate asks: is anybody home?", de: "Nein, niemand ist da. Alle sind arbeiten.", en: "No, nobody's here. Everybody's at work." },
    { task: "Deine Freundin fragt: Hast du etwas eingekauft?", taskEn: "Your friend asks: did you buy anything?", de: "Ich habe nichts gekauft, denn der Laden war zu.", en: "I didn't buy anything, because the shop was closed." },
    { task: "Deine Nachbarin fragt: Hat jemand die Blumen gegossen?", taskEn: "Your neighbour asks: has anybody watered the flowers?", de: "Ja, jemand hat sie gegossen. Alles ist in Ordnung.", en: "Yes, somebody watered them. Everything's fine." },
    { task: "Dein Freund fragt: Kennst du die Mieter im Haus?", taskEn: "Your friend asks: do you know the tenants in the house?", de: "Manche kenne ich, aber nicht alle.", en: "I know some, but not all of them." },
    { task: "Deine Freundin fragt: Was steht am Aushang?", taskEn: "Your friend asks: what does the notice say?", de: "Da steht etwas über das Kursfest. Jeder darf kommen.", en: "There's something about the class party. Everybody can come." },
    { task: "Dein Mitbewohner fragt: Ist noch etwas im Kühlschrank?", taskEn: "Your flatmate asks: is there anything left in the fridge?", de: "Nein, nichts mehr. Alles ist weg.", en: "No, nothing left. Everything's gone." },
    { task: "Dein Freund fragt: Hat dir jemand vom Bauernhof erzählt?", taskEn: "Your friend asks: has anybody told you about the farm?", de: "Niemand hat mir davon erzählt.", en: "Nobody told me about it." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short email (six sentences) to a friend about your new neighbourhood or building, using jemand or niemand, etwas or nichts, and jeder or alle at least once each. Try this chapter\'s words: der Mieter, die Mitbewohnerin, der Aushang.',
    starters: ['Liebe/r …, in meinem Haus …', 'Jemand hat …', 'Niemand …', 'Alle Mieter …'],
    placeholder: 'Liebe Anna, in meinem Haus ist immer etwas los. Jemand hat gestern einen Aushang aufgehängt…',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct word: "___ hat angerufen, aber ich weiß nicht, wer."',
      options: ['Niemand', 'Jemand', 'Alles'],
      answer: 1,
      explain: 'An unspecified person who did call uses jemand.'
    },
    gap: {
      sentence: ['Ich weiß ', ' davon — ich habe es nicht gesehen.'],
      gaps: [ { answer: 'nichts', accepts: ['nichts'] } ],
      explain: 'Knowing no thing at all uses nichts.'
    },
    match: {
      q: 'Match each sentence to the correct indefinite pronoun meaning.',
      pairs: [
        { noun: 'Jemand hat angerufen.', art: 'jemand — an unknown person' },
        { noun: 'Niemand ist zu Hause.', art: 'niemand — no person at all' },
        { noun: 'Ich habe etwas gefunden.', art: 'etwas — an unknown thing' },
        { noun: 'Jeder lernt anders.', art: 'jeder — each one individually' },
        { noun: 'Alle sind da.', art: 'alle — everyone as a group' }
      ]
    },
    builder: {
      target: 'Build: "Some tenants already know it, but many neighbours never read the notice."',
      bank: ['Manche', 'Mieter', 'wissen', 'es', 'schon', ',', 'aber', 'viele', 'Nachbarn', 'lesen', 'den', 'Aushang', 'nie', '.'],
      answer: ['Manche', 'Mieter', 'wissen', 'es', 'schon', ',', 'aber', 'viele', 'Nachbarn', 'lesen', 'den', 'Aushang', 'nie', '.'],
      roles: { 'Manche': 'r-subject', 'viele': 'r-subject', 'wissen': 'r-verb', 'lesen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ ist zu Hause." (no one at all)', options: ['Jemand', 'Niemand', 'Alle'], answer: 1,
      explain: 'No person at all uses niemand.' },
    { q: 'Complete: "Ich habe ___ gefunden." (something unspecified)', options: ['nichts', 'etwas', 'alles'], answer: 1,
      explain: 'An unspecified thing uses etwas.' },
    { q: 'Which is correct?', options: ['Jeder sind da.', 'Jeder ist da.', 'Jeder seid da.'], answer: 1,
      explain: 'jeder always takes a singular verb.' },
    { q: 'Which is correct?', options: ['Alle ist da.', 'Alle sind da.', 'Alle bin da.'], answer: 1,
      explain: 'alle always takes a plural verb.' },
    { q: 'Which sentence correctly uses the Akkusativ?', options: ['Ich sehe niemand.', 'Ich sehe niemanden.', 'Ich sehe niemandem.'], answer: 1,
      explain: 'As a direct object, niemand takes the Akkusativ -en ending: niemanden.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-subject', html: '<span class="de r-subject">jemand</span> / <span class="de r-subject">niemand</span> talk about an unspecified person, or no person at all — with an Akkusativ -en and a review-only Dativ -em.' },
    { c: 'r-akkusativ', html: '<span class="de r-akkusativ">etwas</span> / <span class="de r-akkusativ">nichts</span> / <span class="de r-akkusativ">alles</span> talk about an unspecified thing, no thing, or everything — none of them change for case.' },
    { c: 'r-subject', html: '<span class="de r-subject">jeder</span> (singular verb, one by one) vs. <span class="de r-subject">alle</span> (plural verb, as a group) — and <span class="de r-subject">manche/viele/einige/wenige</span> for amounts.' }
  ],
  revisionTips: [
    'Unknown person? jemand. No person? niemand. Unknown thing? etwas. No thing? nichts. Everyone individually? jeder. Everyone as a group? alle.',
    'jeder is always singular ("Jeder ist da."); alle is always plural ("Alle sind da.") — this is the single most common learner mistake.',
    'As a direct object, jemand/niemand take an Akkusativ -en: "Ich sehe niemanden." Dativ -em (niemandem, jemandem) is review only this chapter.'
  ]
};

window.CHAPTER = CHAPTER;
