/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 46
   "Unpersönliches Passiv" — a passive with NO subject at all:
   (es) + werden + Partizip II, used when WHO acts is irrelevant.
   "es" occupies Position 1 only when nothing else does.
   Does NOT teach bekommen-Passiv, haben+zu, sein+zu.
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
   Vocabulary source: uploaded Chapter 46 list (62 items).
============================================================ */
const CHAPTER = {
  id: 'b2-46-unpersoenliches-passiv',
  phase: 'B2 · Phase 5',
  number: 46,
  title: 'Unpersönliches Passiv',
  titleEn: 'Impersonal passive',
  description: 'Hier wird nicht geraucht — a passive with no subject, only the action.',
  xp: 540,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 47, title: 'bekommen-/kriegen-Passiv', titleEn: 'The recipient passive' , href: 'chapter-b2-47-bekommen-kriegen-passiv.html' },

  prevChapter: { number: 45, title: 'Passiversatz: sich lassen', titleEn: 'Passive alternative: sich lassen', href: 'chapter-b2-45-passiversatz-sich-lassen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'No subject. Only <em>the action</em>.',
    intro: 'Touring a lively trade fair, Frauke and Timo notice how much discussing, laughing, and presenting is going on at every stand — a passive with no subject at all, just the action itself: hier wird diskutiert, hier wird fotografiert.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear when "es" appears in Position 1 — and when it vanishes'
    ],
    scene: 'Auf der Messe',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Auf', role: 'r-preposition', en: 'at', hi: 'में', pron: 'owf', type: 'Preposition + place' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Messe', role: 'r-dativ', en: 'fair (dat.)', hi: 'मेले में', pron: 'ME-suh', type: 'Noun · fem. dat.' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (unpersönliches Passiv)', why: 'es wird + Partizip II = impersonal passive, no real subject, describes a general activity (this chapter).', ex: 'Es wird viel diskutiert.', exEn: 'There is a lot of discussing going on.' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'diskutiert', role: 'r-verb', en: 'discussed', hi: 'चर्चा', pron: 'dis-koo-TEERT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'At the fair there is a lot of discussing going on.', hi: 'Mele mein bahut charcha ho rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · unpersönliches Passiv' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'हो रहा है', pron: 'virt', type: 'Verb · werden' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'gelacht', role: 'r-verb', en: 'laughed', hi: 'हंसना', pron: 'ge-LAKHT', type: 'Partizip II', why: 'lachen → gelacht (recycled, this chapter as impersonal passive).', ex: 'Es wird viel gelacht.', exEn: 'There is a lot of laughing.' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, and there is also a lot of laughing going on.', hi: 'Haan, aur bahut hansi bhi ho rahi hai.' },
      { speaker: 'Frauke', tokens: [
        { w: 'An', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'an', type: 'Preposition + place' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Stand', role: 'r-dativ', en: 'stand (dat.)', hi: 'स्टॉल पर', pron: 'shtant', type: 'Noun · masc. dat.' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden' },
        { w: 'gerade', role: 'r-adverb', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'präsentiert', role: 'r-verb', en: 'presented', hi: 'प्रस्तुत', pron: 'pre-zen-TEERT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'At this stand something is being presented right now.', hi: 'Is stall par abhi kuch pesh kiya ja raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden' },
        { w: 'dort', role: 'r-place', en: 'there', hi: 'वहाँ', pron: 'dort', type: 'Adverb · place' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'fotografiert', role: 'r-verb', en: 'photographed', hi: 'फ़ोटो लिया', pron: 'fo-to-gra-FEERT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Is photographing also being done there?', hi: 'Kya wahaan photo bhi liya ja raha hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'ganzen', role: 'r-akkusativ', en: 'whole', hi: 'पूरे', pron: 'GAN-tsen', type: 'Adjective' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden' },
        { w: 'fotografiert', role: 'r-verb', en: 'photographed', hi: 'फ़ोटो लिया', pron: 'fo-to-gra-FEERT', type: 'Partizip II · Satzende' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'gefilmt', role: 'r-verb', en: 'filmed', hi: 'फ़िल्माया', pron: 'ge-FILMT', type: 'Partizip II', why: 'filmen → gefilmt (this chapter).', ex: 'Es wird gefilmt.', exEn: 'It is being filmed.' },
        { w: '.', plain: true }
      ], en: 'Yes, the whole day photographing and filming is being done.', hi: 'Haan, poore din photo aur filming ki ja rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'nach', role: 'r-preposition', en: 'like', hi: 'जैसा', pron: 'nahkh', type: 'Preposition' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'lebhaften', role: 'r-dativ', en: 'lively', hi: 'जीवंत', pron: 'LAYP-haf-ten', type: 'Adjective · dative' },
        { w: 'Atmosphäre', role: 'r-dativ', en: 'atmosphere (dat.)', hi: 'माहौल', pron: 'at-mo-SFAI-ruh', type: 'Noun · fem. dat.', why: 'die Atmosphäre (this chapter).', ex: 'eine lebhafte Atmosphäre' },
        { w: '!', plain: true }
      ], en: 'That sounds like a lively atmosphere!', hi: 'Yeh jeevant maahaul jaisa lagta hai!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Sometimes WHO acts is completely irrelevant. <span class="de r-impersonal">Es wird gearbeitet.</span> — "es" fills Position 1 only when nothing else does. <span class="de r-impersonal">Hier wird gearbeitet.</span> — the moment "hier" occupies Position 1, "es" simply disappears.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is UNPERSÖNLICHES PASSIV (impersonal passive) at B2 level: (es) + werden + Partizip II, used when WHO performs the action is completely unimportant — only the activity matters. Example: "Es wird gearbeitet" (people are working) or, once another element fills Position 1, "Hier wird gearbeitet" / "Heute wird gearbeitet" (the placeholder "es" disappears). Never add an agent with "von" in this construction — that would contradict the impersonal meaning. ' +
    'Do NOT expect or require bekommen-Passiv, haben+zu, or sein+zu — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "es" appears ONLY when nothing else occupies Position 1 (e.g. "Es wird gearbeitet" is correct; "Heute wird es gearbeitet" is wrong — "es" must disappear once "Heute" takes Position 1).\n' +
    '- Check that the impersonal passive does not name an agent with "von" (e.g. "Es wird von vielen Menschen gearbeitet" contradicts the point of this construction, even if grammatically parseable) — flag it as unnatural for this chapter\'s scope.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>"es" placement check:</b> one sentence on whether the learner correctly dropped "es" whenever another element filled Position 1.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you know exactly when "es" belongs in Position 1, and when it vanishes. Ready for the bekommen-passive next.',
    mid: 'Good. Re-read Part 4 ("es" or No "es"?) once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: "es" only ever sits in Position 1, and only when nothing else is there.'
  },

  parserSentence: [
    { w: 'Es', role: 'r-impersonal' }, { w: 'wird', role: 'r-impersonal' }, { w: 'hier', role: 'plain' },
    { w: 'gearbeitet', role: 'r-impersonal' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: a passive with no subject at all, only the action.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo tour a trade fair and hospital noticing rules where who acts is irrelevant.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 62 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Unpersönliches Passiv, the role of "es", and when it disappears.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read company rules and a university brochure full of Unpersönliches Passiv.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify normal passive vs impersonal passive, and whether "es" is required.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give announcements and describe workplace rules using Unpersönliches Passiv naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write notices and public announcements using Unpersönliches Passiv appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill inserting/removing "es" and correcting word order.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 540 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 62 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: '"es" insertion/removal drills, word-order practice, and a notice-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full comparison table, word-order diagram, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Es wird gearbeitet.', text: 'Form Unpersönliches Passiv when no subject exists' },
    { de: 'Heute wird gearbeitet.', text: 'Know exactly when "es" disappears from Position 1' },
    { de: 'Hier wird nicht geraucht.', text: 'Give rules and announcements naturally' },
    { de: 'Talking about WHO? vs THE ACTION?', text: 'Distinguish normal passive from impersonal passive instantly' },
    { de: 'Common in signs, notices, and announcements', text: 'Recognize the register where Unpersönliches Passiv thrives' }
  ],

  // ---------- Vocabulary (62 items — uploaded chapter-46 list) ----------
  vocab: [
    { de: 'einleuchtend', pos: 'adjective', level: 'B2', register: 'both', en: 'plausible, convincing', hi: 'तर्कसंगत', ex: 'Das ist einleuchtend.', exEn: 'That is plausible.', exHi: 'Yeh tarkasangat hai.', ex2: 'Sie fanden das Argument einleuchtend.', ex2En: 'They found the argument convincing.', ex2Hi: 'Unhein tark tarkasangat laga.' },
    { de: 'einpflanzen', pos: 'verb', level: 'B2', register: 'written', en: 'to implant, plant', hi: 'रोपना', ex: 'Der Arzt pflanzte einen Chip ein.', exEn: 'The doctor implanted a chip.', exHi: 'Doctor ne ek chip lagaayi.', ex2: 'Sie haben einen Baum eingepflanzt.', ex2En: 'They\'ve planted a tree.', ex2Hi: 'Unhone ek ped lagaaya hai.', conj: { praesens: 'pflanzt ein', praeteritum: 'pflanzte ein', perfekt: 'hat eingepflanzt' } },
    { de: 'Empathie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'empathy', hi: 'सहानुभूति', ex: 'Sie zeigte viel Empathie.', exEn: 'She showed a lot of empathy.', exHi: 'Usne bahut sahaanubhooti dikhaayi.', ex2: 'Sie haben Empathie gelernt.', ex2En: 'They\'ve learned empathy.', ex2Hi: 'Unhone sahaanubhooti seekhi hai.' },
    { de: 'energiesparend', pos: 'adjective', level: 'B2', register: 'written', en: 'energy-saving', hi: 'ऊर्जा बचाने वाला', ex: 'Der Lichtsensor ist energiesparend.', exEn: 'The light sensor is energy-saving.', exHi: 'Prakaash sanvedak oorja bachaane wala hai.', ex2: 'Sie haben energiesparende Geräte gekauft.', ex2En: 'They\'ve bought energy-saving devices.', ex2Hi: 'Unhone oorja bachaane wale upkaran khareede hain.' },
    { de: 'entfliehen', pos: 'verb', level: 'B2', register: 'written', en: 'to flee, escape', hi: 'भाग जाना', ex: 'Der Hai entfloh dem Netz.', exEn: 'The shark escaped the net.', exHi: 'Shark jaal se bhaag gaya.', ex2: 'Sie sind der Gefahr entflohen.', ex2En: 'They\'ve escaped the danger.', ex2Hi: 'Woh khatre se bach gaye hain.', conj: { praesens: 'entflieht', praeteritum: 'entfloh', perfekt: 'ist entflohen' } },
    { de: 'erkennbar', pos: 'adjective', level: 'B2', register: 'both', en: 'recognisable, discernible', hi: 'पहचानने योग्य', ex: 'Das Muster ist erkennbar.', exEn: 'The pattern is recognisable.', exHi: 'Pattern pehchaanne yogya hai.', ex2: 'Sie haben eine erkennbare Verbesserung erzielt.', ex2En: 'They\'ve achieved a discernible improvement.', ex2Hi: 'Unhone ek pehchaanne yogya sudhaar prapt kiya hai.' },
    { de: 'Fischer/in', art: 'der/die', gender: 'm/f', plural: 'Fischer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'fisher', hi: 'मछुआरा', ex: 'Der Fischer fing viele Fische.', exEn: 'The fisher caught many fish.', exHi: 'Machhuaare ne kai machhliyaan pakadi.', ex2: 'Sie haben mit Fischern gesprochen.', ex2En: 'They\'ve spoken with fishers.', ex2Hi: 'Unhone machhuaaron se baat ki hai.' },
    { de: 'Forumsbeitrag', art: 'der', gender: 'm', plural: 'Forumsbeiträge', pos: 'noun', level: 'B2', register: 'written', en: 'forum post', hi: 'फोरम पोस्ट', ex: 'Der Forumsbeitrag war hilfreich.', exEn: 'The forum post was helpful.', exHi: 'Forum post madadgaar tha.', ex2: 'Sie haben einen Forumsbeitrag geschrieben.', ex2En: 'They\'ve written a forum post.', ex2Hi: 'Unhone ek forum post likhi hai.' },
    { de: 'Glaserlehre', art: 'die', gender: 'f', plural: 'Glaserlehren', pos: 'noun', level: 'B2', register: 'written', en: 'glazier apprenticeship', hi: 'कांच शिल्प प्रशिक्षण', ex: 'Er begann eine Glaserlehre.', exEn: 'He began a glazier apprenticeship.', exHi: 'Usne ek kaanch shilp prashikshan shuru kiya.', ex2: 'Sie haben die Glaserlehre abgeschlossen.', ex2En: 'They\'ve completed the glazier apprenticeship.', ex2Hi: 'Unhone kaanch shilp prashikshan poora kiya hai.' },
    { de: 'Hai', art: 'der', gender: 'm', plural: 'Haie', pos: 'noun', level: 'B2', register: 'both', en: 'shark', hi: 'शार्क', ex: 'Der Hai entfloh dem Netz.', exEn: 'The shark escaped the net.', exHi: 'Shark jaal se bhaag gaya.', ex2: 'Sie haben einen Hai gesehen.', ex2En: 'They\'ve seen a shark.', ex2Hi: 'Unhone ek shark dekhi hai.' },
    { de: 'Hauptthema', art: 'das', gender: 'n', plural: 'Hauptthemen', pos: 'noun', level: 'B2', register: 'written', en: 'main topic', hi: 'मुख्य विषय', ex: 'Das Hauptthema war Technologie.', exEn: 'The main topic was technology.', exHi: 'Mukhya vishay technology tha.', ex2: 'Sie haben das Hauptthema definiert.', ex2En: 'They\'ve defined the main topic.', ex2Hi: 'Unhone mukhya vishay paribhaashit kiya hai.' },
    { de: 'Hausarzt', art: 'der', gender: 'm', plural: 'Hausärzte', pos: 'noun', level: 'B2', register: 'both', en: 'family doctor, GP', hi: 'फैमिली डॉक्टर', ex: 'Beim Hausarzt wird immer der Puls gemessen.', exEn: 'At the family doctor\'s, the pulse is always measured.', exHi: 'Family doctor ke paas, hamesha naadi maapi jaati hai.', ex2: 'Sie haben einen neuen Hausarzt gefunden.', ex2En: 'They\'ve found a new family doctor.', ex2Hi: 'Unhein ek naya family doctor mila hai.' },
    { de: 'hinterherhinken', pos: 'verb', level: 'B2', register: 'both', en: 'to lag behind', hi: 'पीछे रह जाना', ex: 'Die Firma hinkt der Konkurrenz hinterher.', exEn: 'The company lags behind the competition.', exHi: 'Company pratispardha se peeche hai.', ex2: 'Sie haben lange hinterhergehinkt.', ex2En: 'They\'ve lagged behind for a long time.', ex2Hi: 'Woh lambe samay se peeche the.', conj: { praesens: 'hinkt hinterher', praeteritum: 'hinkte hinterher', perfekt: 'hat hinterhergehinkt' } },
    { de: 'Hörspiel', art: 'das', gender: 'n', plural: 'Hörspiele', pos: 'noun', level: 'B2', register: 'written', en: 'radio play', hi: 'रेडियो नाटक', ex: 'Sie hörten ein spannendes Hörspiel.', exEn: 'They listened to an exciting radio play.', exHi: 'Unhone ek rochak radio naatak suna.', ex2: 'Er hat ein Hörspiel produziert.', ex2En: 'He\'s produced a radio play.', ex2Hi: 'Usne ek radio naatak banaaya hai.' },
    { de: 'Hosentasche', art: 'die', gender: 'f', plural: 'Hosentaschen', pos: 'noun', level: 'B2', register: 'both', en: 'trouser pocket', hi: 'पैंट की जेब', ex: 'Er hatte das Handy in der Hosentasche.', exEn: 'He had the phone in his trouser pocket.', exHi: 'Uske paas phone pant ki jeb mein tha.', ex2: 'Sie haben die Schlüssel in der Hosentasche gefunden.', ex2En: 'They\'ve found the keys in the trouser pocket.', ex2Hi: 'Unhein chaabi pant ki jeb mein mili hai.' },
    { de: 'Immunsystem', art: 'das', gender: 'n', plural: 'Immunsysteme', pos: 'noun', level: 'B2', register: 'written', en: 'immune system', hi: 'प्रतिरक्षा प्रणाली', ex: 'Ihr Immunsystem war stark.', exEn: 'Her immune system was strong.', exHi: 'Uski pratiraksha pranaali majboot thi.', ex2: 'Sie haben das Immunsystem gestärkt.', ex2En: 'They\'ve strengthened the immune system.', ex2Hi: 'Unhone pratiraksha pranaali majboot ki hai.' },
    { de: 'infolge', pos: 'preposition', level: 'B2', register: 'written', en: 'as a result of, due to', hi: 'के परिणामस्वरूप', ex: 'Infolge des Notrufs wird sofort reagiert.', exEn: 'As a result of the emergency call, there\'s an immediate reaction.', exHi: 'Aapaatkaalin call ke parinaam swaroop, turant pratikriya di jaati hai.', ex2: 'Infolge des Streiks fielen Züge aus.', ex2En: 'As a result of the strike, trains were cancelled.', ex2Hi: 'Hadtaal ke parinaam swaroop, trains radd hui.' },
    { de: 'IT-Bereich', art: 'der', gender: 'm', plural: 'IT-Bereiche', pos: 'noun', level: 'B2', register: 'written', en: 'IT sector', hi: 'आईटी क्षेत्र', ex: 'Sie arbeitet im IT-Bereich.', exEn: 'She works in the IT sector.', exHi: 'Woh IT kshetra mein kaam karti hai.', ex2: 'Der IT-Bereich wächst schnell.', ex2En: 'The IT sector is growing fast.', ex2Hi: 'IT kshetra tezi se badh raha hai.' },
    { de: 'Klick', art: 'der', gender: 'm', plural: 'Klicks', pos: 'noun', level: 'B2', register: 'spoken', en: 'click', hi: 'क्लिक', ex: 'Mit einem Klick lässt sich alles ändern.', exEn: 'Everything can be changed with a click.', exHi: 'Ek click se sab kuch badla ja sakta hai.', ex2: 'Sie haben tausend Klicks erhalten.', ex2En: 'They\'ve received a thousand clicks.', ex2Hi: 'Unhein hazaar clicks mile hain.' },
    { de: 'Kontaktlinse', art: 'die', gender: 'f', plural: 'Kontaktlinsen', pos: 'noun', level: 'B2', register: 'both', en: 'contact lens', hi: 'कॉन्टैक्ट लेंस', ex: 'Sie trägt Kontaktlinsen.', exEn: 'She wears contact lenses.', exHi: 'Woh contact lenses pehnti hai.', ex2: 'Er hat neue Kontaktlinsen gekauft.', ex2En: 'He\'s bought new contact lenses.', ex2Hi: 'Usne naye contact lenses khareede hain.' },
    { de: 'Körperdaten', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'body data, measurements', hi: 'शरीर का डेटा', ex: 'Werden die Körperdaten auch notiert?', exEn: 'Is the body data noted down too?', exHi: 'Kya shareer ka data bhi note kiya jaata hai?', ex2: 'Sie haben die Körperdaten analysiert.', ex2En: 'They\'ve analysed the body data.', ex2Hi: 'Unhone shareer ke data ka vishleshan kiya hai.' },
    { de: 'Körpergröße', art: 'die', gender: 'f', plural: 'Körpergrößen', pos: 'noun', level: 'B2', register: 'both', en: 'height, body size', hi: 'शरीर की ऊंचाई', ex: 'Die Körpergröße wurde gemessen.', exEn: 'The height was measured.', exHi: 'Shareer ki oonchai maapi gayi.', ex2: 'Sie haben ihre Körpergröße notiert.', ex2En: 'They\'ve noted their height.', ex2Hi: 'Unhone apni oonchai note ki hai.' },
    { de: 'kostengünstig', pos: 'adjective', level: 'B2', register: 'written', en: 'cost-effective, cheap', hi: 'किफायती', ex: 'Es wird auch kostengünstig produziert.', exEn: 'It\'s also produced cost-effectively.', exHi: 'Ise kifaayati dhang se bhi banaaya jaata hai.', ex2: 'Sie haben eine kostengünstige Lösung gefunden.', ex2En: 'They\'ve found a cost-effective solution.', ex2Hi: 'Unhein ek kifaayati samaadhaan mila hai.' },
    { de: 'Krankenakte', art: 'die', gender: 'f', plural: 'Krankenakten', pos: 'noun', level: 'B2', register: 'written', en: 'medical record', hi: 'मेडिकल रिकॉर्ड', ex: 'In der Krankenakte wird alles dokumentiert.', exEn: 'In the medical record, everything is documented.', exHi: 'Medical record mein sab kuch dastaavezikrit kiya jaata hai.', ex2: 'Sie haben die Krankenakte aktualisiert.', ex2En: 'They\'ve updated the medical record.', ex2Hi: 'Unhone medical record update kiya hai.' },
    { de: 'Krankenkasse', art: 'die', gender: 'f', plural: 'Krankenkassen', pos: 'noun', level: 'B2', register: 'written', en: 'health insurer', hi: 'स्वास्थ्य बीमा कंपनी', ex: 'Die Krankenkasse wird auch informiert.', exEn: 'The health insurer is also informed.', exHi: 'Swasthya beema company ko bhi soochit kiya jaata hai.', ex2: 'Sie haben die Krankenkasse gewechselt.', ex2En: 'They\'ve changed health insurer.', ex2Hi: 'Unhone swasthya beema company badli hai.' },
    { de: 'kursiv', pos: 'adjective', level: 'B2', register: 'written', en: 'italic', hi: 'तिरछा', ex: 'Der Titel ist kursiv gedruckt.', exEn: 'The title is printed in italic.', exHi: 'Shirshak tirchhe mein chhapa hai.', ex2: 'Sie haben wichtige Wörter kursiv markiert.', ex2En: 'They\'ve marked important words in italic.', ex2Hi: 'Unhone mahatvapurn shabdon ko tirchhe mein chihnit kiya hai.' },
    { de: 'Lichtsensor', art: 'der', gender: 'm', plural: 'Lichtsensoren', pos: 'noun', level: 'B2', register: 'written', en: 'light sensor', hi: 'प्रकाश संवेदक', ex: 'Der Lichtsensor ist jetzt energiesparend.', exEn: 'The light sensor is now energy-saving.', exHi: 'Prakaash sanvedak ab oorja bachaane wala hai.', ex2: 'Sie haben einen neuen Lichtsensor installiert.', ex2En: 'They\'ve installed a new light sensor.', ex2Hi: 'Unhone ek naya prakaash sanvedak install kiya hai.' },
    { de: 'manipulieren', pos: 'verb', level: 'B2', register: 'written', en: 'to manipulate', hi: 'हेरफेर करना', ex: 'Es wird nicht manipuliert.', exEn: 'Nothing is manipulated.', exHi: 'Kuch bhi herafer nahi kiya jaata.', ex2: 'Sie haben die Daten manipuliert.', ex2En: 'They\'ve manipulated the data.', ex2Hi: 'Unhone data mein herafer kiya hai.', conj: { praesens: 'manipuliert', praeteritum: 'manipulierte', perfekt: 'hat manipuliert' } },
    { de: 'mechanisch', pos: 'adjective', level: 'B2', register: 'both', en: 'mechanical', hi: 'यांत्रिक', ex: 'Die Reaktionszeit ist mechanisch.', exEn: 'The reaction time is mechanical.', exHi: 'Pratikriya samay yaantrik hai.', ex2: 'Sie haben ein mechanisches Gerät benutzt.', ex2En: 'They\'ve used a mechanical device.', ex2Hi: 'Unhone ek yaantrik upkaran ka upyog kiya hai.' },
    { de: 'Meerestiefe', art: 'die', gender: 'f', plural: 'Meerestiefen', pos: 'noun', level: 'B2', register: 'written', en: 'sea depth', hi: 'समुद्र की गहराई', ex: 'Die Meerestiefe wurde gemessen.', exEn: 'The sea depth was measured.', exHi: 'Samudra ki gehraai maapi gayi.', ex2: 'Sie haben die Meerestiefe erforscht.', ex2En: 'They\'ve researched the sea depth.', ex2Hi: 'Unhone samudra ki gehraai par shodh kiya hai.' },
    { de: 'Meerestier', art: 'das', gender: 'n', plural: 'Meerestiere', pos: 'noun', level: 'B2', register: 'written', en: 'sea creature', hi: 'समुद्री जीव', ex: 'Das Meerestier war selten.', exEn: 'The sea creature was rare.', exHi: 'Samudri jeev durlabh tha.', ex2: 'Sie haben viele Meerestiere beobachtet.', ex2En: 'They\'ve observed many sea creatures.', ex2Hi: 'Unhone kai samudri jeevon ko dekha hai.' },
    { de: 'Menschenleben', art: 'das', gender: 'n', plural: 'Menschenleben', pos: 'noun', level: 'B2', register: 'written', en: 'human life', hi: 'मानव जीवन', ex: 'Ein Menschenleben ist kostbar.', exEn: 'A human life is precious.', exHi: 'Ek maanav jeevan beshkeemti hai.', ex2: 'Sie haben viele Menschenleben gerettet.', ex2En: 'They\'ve saved many human lives.', ex2Hi: 'Unhone kai maanav jeevan bachaaye hain.' },
    { de: 'Messegelände', art: 'das', gender: 'n', plural: 'Messegelände', pos: 'noun', level: 'B2', register: 'written', en: 'trade-fair grounds', hi: 'मेला मैदान', ex: 'Auf dem Messegelände wird rasant gebaut.', exEn: 'At the trade-fair grounds, building happens rapidly.', exHi: 'Mela maidaan mein tezi se banaaya ja raha hai.', ex2: 'Sie haben das Messegelände besucht.', ex2En: 'They\'ve visited the trade-fair grounds.', ex2Hi: 'Unhone mela maidaan ka daura kiya hai.' },
    { de: 'Messehalle', art: 'die', gender: 'f', plural: 'Messehallen', pos: 'noun', level: 'B2', register: 'written', en: 'trade-fair hall', hi: 'मेला हॉल', ex: 'In der Messehalle wird nicht geraucht.', exEn: 'In the trade-fair hall, there\'s no smoking.', exHi: 'Mela hall mein dhoomrapaan nahi hota.', ex2: 'Sie haben die Messehalle dekoriert.', ex2En: 'They\'ve decorated the trade-fair hall.', ex2Hi: 'Unhone mela hall saja diya hai.' },
    { de: 'Messgerät', art: 'das', gender: 'n', plural: 'Messgeräte', pos: 'noun', level: 'B2', register: 'written', en: 'measuring device', hi: 'मापन यंत्र', ex: 'Das Messgerät war präzise.', exEn: 'The measuring device was precise.', exHi: 'Maapan yantra sateek tha.', ex2: 'Sie haben ein neues Messgerät gekauft.', ex2En: 'They\'ve bought a new measuring device.', ex2Hi: 'Unhone ek naya maapan yantra khareeda hai.' },
    { de: 'Mitinhaber/in', art: 'der/die', gender: 'm/f', plural: 'Mitinhaber/innen', pos: 'noun', level: 'B2', register: 'written', en: 'co-owner', hi: 'सह-मालिक', ex: 'Sie ist Mitinhaberin der Firma.', exEn: 'She is co-owner of the company.', exHi: 'Woh company ki sah-maalik hai.', ex2: 'Er hat einen Mitinhaber gefunden.', ex2En: 'He\'s found a co-owner.', ex2Hi: 'Usne ek sah-maalik dhoondh liya hai.' },
    { de: 'Mitschüler/in', art: 'der/die', gender: 'm/f', plural: 'Mitschüler/innen', pos: 'noun', level: 'B2', register: 'both', en: 'fellow pupil', hi: 'सहपाठी', ex: 'Ihre Mitschülerin half ihr.', exEn: 'Her fellow pupil helped her.', exHi: 'Uski sahpaathi ne uski madad ki.', ex2: 'Sie haben mit ihren Mitschülern gelernt.', ex2En: 'They\'ve studied with their fellow pupils.', ex2Hi: 'Unhone apne sahpaathiyon ke saath padhaai ki hai.' },
    { de: 'Moderator/in', art: 'der/die', gender: 'm/f', plural: 'Moderatoren/Moderatorinnen', pos: 'noun', level: 'B2', register: 'both', en: 'presenter, moderator', hi: 'प्रस्तुतकर्ता', ex: 'Der Moderator stellte die Frage.', exEn: 'The presenter asked the question.', exHi: 'Prastutkarta ne sawaal poocha.', ex2: 'Sie haben eine neue Moderatorin engagiert.', ex2En: 'They\'ve engaged a new presenter.', ex2Hi: 'Unhone ek nayi prastutkarta niyukt ki hai.' },
    { de: 'Notruf', art: 'der', gender: 'm', plural: 'Notrufe', pos: 'noun', level: 'B2', register: 'written', en: 'emergency call', hi: 'आपातकालीन कॉल', ex: 'Infolge des Notrufs wird sofort reagiert.', exEn: 'As a result of the emergency call, there\'s an immediate reaction.', exHi: 'Aapaatkaalin call ke parinaam swaroop, turant pratikriya di jaati hai.', ex2: 'Sie haben einen Notruf abgesetzt.', ex2En: 'They\'ve made an emergency call.', ex2Hi: 'Unhone ek aapaatkaalin call kiya hai.' },
    { de: 'Oberarm', art: 'der', gender: 'm', plural: 'Oberarme', pos: 'noun', level: 'B2', register: 'written', en: 'upper arm', hi: 'ऊपरी बांह', ex: 'Der Chip wurde im Oberarm eingepflanzt.', exEn: 'The chip was implanted in the upper arm.', exHi: 'Chip oopri baanh mein lagaayi gayi.', ex2: 'Sie haben sich am Oberarm verletzt.', ex2En: 'They\'ve injured their upper arm.', ex2Hi: 'Unhone apni oopri baanh mein chot lagaayi hai.' },
    { de: 'Optiker/in', art: 'der/die', gender: 'm/f', plural: 'Optiker/innen', pos: 'noun', level: 'B2', register: 'both', en: 'optician', hi: 'चश्मे की दुकान', ex: 'Beim Optiker wird nur gemessen.', exEn: 'At the optician\'s, only measuring happens.', exHi: 'Optician ke paas, sirf naapaa jaata hai.', ex2: 'Sie haben einen Optiker besucht.', ex2En: 'They\'ve visited an optician.', ex2Hi: 'Unhone ek optician ka daura kiya hai.' },
    { de: 'optimieren', pos: 'verb', level: 'B2', register: 'written', en: 'to optimise', hi: 'अनुकूलित करना', ex: 'Es wird optimiert.', exEn: 'It\'s being optimised.', exHi: 'Isko anukoolit kiya jaa raha hai.', ex2: 'Sie haben den Prozess optimiert.', ex2En: 'They\'ve optimised the process.', ex2Hi: 'Unhone prakriya anukoolit ki hai.', conj: { praesens: 'optimiert', praeteritum: 'optimierte', perfekt: 'hat optimiert' } },
    { de: 'Patent', art: 'das', gender: 'n', plural: 'Patente', pos: 'noun', level: 'B2', register: 'written', en: 'patent', hi: 'पेटेंट', ex: 'Hier wird über ein neues Patent diskutiert.', exEn: 'Here a new patent is also being discussed.', exHi: 'Yahaan ek naye patent par bhi charcha ho rahi hai.', ex2: 'Sie haben ein Patent angemeldet.', ex2En: 'They\'ve filed a patent.', ex2Hi: 'Unhone ek patent daakhil kiya hai.' },
    { de: 'Platte', art: 'die', gender: 'f', plural: 'Platten', pos: 'noun', level: 'B2', register: 'both', en: 'plate, record, slab', hi: 'प्लेट, रिकॉर्ड', ex: 'Die Platte war schwer.', exEn: 'The slab was heavy.', exHi: 'Slab bhaari tha.', ex2: 'Sie haben eine alte Platte gefunden.', ex2En: 'They\'ve found an old record.', ex2Hi: 'Unhein ek puraana record mila hai.' },
    { de: 'Privatauto', art: 'das', gender: 'n', plural: 'Privatautos', pos: 'noun', level: 'B2', register: 'both', en: 'private car', hi: 'निजी कार', ex: 'Sie fuhren mit dem Privatauto.', exEn: 'They drove with the private car.', exHi: 'Woh niji car se gaye.', ex2: 'Er hat ein neues Privatauto gekauft.', ex2En: 'He\'s bought a new private car.', ex2Hi: 'Usne ek nayi niji car khareedi hai.' },
    { de: 'Puls', art: 'der', gender: 'm', plural: 'Pulse', pos: 'noun', level: 'B2', register: 'both', en: 'pulse', hi: 'नाड़ी', ex: 'Beim Hausarzt wird immer der Puls gemessen.', exEn: 'At the family doctor\'s, the pulse is always measured.', exHi: 'Family doctor ke paas, hamesha naadi maapi jaati hai.', ex2: 'Ihr Puls war schnell.', ex2En: 'Her pulse was fast.', ex2Hi: 'Uski naadi tez thi.' },
    { de: 'Qualle', art: 'die', gender: 'f', plural: 'Quallen', pos: 'noun', level: 'B2', register: 'both', en: 'jellyfish', hi: 'जेलीफ़िश', ex: 'Die Qualle schwamm langsam.', exEn: 'The jellyfish swam slowly.', exHi: 'Jellyfish dheere tairi.', ex2: 'Sie haben viele Quallen gesehen.', ex2En: 'They\'ve seen many jellyfish.', ex2Hi: 'Unhone kai jellyfish dekhi hain.' },
    { de: 'rasant', pos: 'adjective', level: 'B2', register: 'both', en: 'rapid, fast', hi: 'तेज़ी से', ex: 'Auf dem Messegelände wird rasant gebaut.', exEn: 'At the trade-fair grounds, building happens rapidly.', exHi: 'Mela maidaan mein tezi se banaaya ja raha hai.', ex2: 'Die Technologie entwickelt sich rasant.', ex2En: 'The technology is developing rapidly.', ex2Hi: 'Technology tezi se vikasit ho rahi hai.' },
    { de: 'Rauchen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'smoking', hi: 'धूम्रपान', ex: 'Rauchen ist hier verboten.', exEn: 'Smoking is forbidden here.', exHi: 'Yahaan dhoomrapaan mana hai.', ex2: 'Sie haben mit dem Rauchen aufgehört.', ex2En: 'They\'ve stopped smoking.', ex2Hi: 'Unhone dhoomrapaan chhod diya hai.' },
    { de: 'Reaktionszeit', art: 'die', gender: 'f', plural: 'Reaktionszeiten', pos: 'noun', level: 'B2', register: 'written', en: 'reaction time', hi: 'प्रतिक्रिया समय', ex: 'Die Reaktionszeit ist mechanisch.', exEn: 'The reaction time is mechanical.', exHi: 'Pratikriya samay yaantrik hai.', ex2: 'Sie haben die Reaktionszeit verbessert.', ex2En: 'They\'ve improved the reaction time.', ex2Hi: 'Unhone pratikriya samay behtar banaaya hai.' },
    { de: 'Robotertyp', art: 'der', gender: 'm', plural: 'Robotertypen', pos: 'noun', level: 'B2', register: 'written', en: 'type of robot', hi: 'रोबोट का प्रकार', ex: 'Am Stand wird ein neuer Robotertyp vorgestellt.', exEn: 'At the stand, a new type of robot is being presented.', exHi: 'Stand par ek naya robot prakaar prastut kiya ja raha hai.', ex2: 'Sie haben einen neuen Robotertyp entwickelt.', ex2En: 'They\'ve developed a new type of robot.', ex2Hi: 'Unhone ek naya robot prakaar vikasit kiya hai.' },
    { de: 'rosig', pos: 'adjective', level: 'B2', register: 'both', en: 'rosy', hi: 'गुलाबी', ex: 'Die Zukunft sah rosig aus.', exEn: 'The future looked rosy.', exHi: 'Bhavishya gulaabi lag raha tha.', ex2: 'Sie haben rosige Wangen.', ex2En: 'They have rosy cheeks.', ex2Hi: 'Unke gaal gulaabi hain.' },
    { de: 'sagenhaft', pos: 'adjective', level: 'B2', register: 'both', en: 'fabulous, legendary', hi: 'शानदार', ex: 'Sagenhaft. Hier wird auch diskutiert.', exEn: 'Fabulous. Here it\'s also discussed.', exHi: 'Shaandaar. Yahaan charcha bhi ho rahi hai.', ex2: 'Sie haben eine sagenhafte Reise gemacht.', ex2En: 'They\'ve had a fabulous trip.', ex2Hi: 'Unhone ek shaandaar yatra ki hai.' },
    { de: 'Sauerstoff', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'oxygen', hi: 'ऑक्सीजन', ex: 'Der Sauerstoff war knapp.', exEn: 'The oxygen was scarce.', exHi: 'Oxygen kam thi.', ex2: 'Sie haben Sauerstoff bereitgestellt.', ex2En: 'They\'ve provided oxygen.', ex2Hi: 'Unhone oxygen upalabdh karaayi hai.' },
    { de: 'Schwarm', art: 'der', gender: 'm', plural: 'Schwärme', pos: 'noun', level: 'B2', register: 'both', en: 'swarm, crush', hi: 'झुंड', ex: 'Ein Schwarm Fische schwamm vorbei.', exEn: 'A swarm of fish swam past.', exHi: 'Machhliyon ka jhund guzra.', ex2: 'Sie haben einen Schwarm beobachtet.', ex2En: 'They\'ve observed a swarm.', ex2Hi: 'Unhone ek jhund dekha hai.' },
    { de: 'Schwimmer/in', art: 'der/die', gender: 'm/f', plural: 'Schwimmer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'swimmer', hi: 'तैराक', ex: 'Der Schwimmer war schnell.', exEn: 'The swimmer was fast.', exHi: 'Tairaak tez tha.', ex2: 'Sie haben mit Schwimmern trainiert.', ex2En: 'They\'ve trained with swimmers.', ex2Hi: 'Unhone tairaakon ke saath training ki hai.' },
    { de: 'simpel', pos: 'adjective', level: 'B2', register: 'both', en: 'simple', hi: 'सरल', ex: 'Simpel und erkennbar.', exEn: 'Simple and recognisable.', exHi: 'Saral aur pehchaanne yogya.', ex2: 'Sie haben eine simple Lösung gefunden.', ex2En: 'They\'ve found a simple solution.', ex2Hi: 'Unhein ek saral samaadhaan mila hai.' },
    { de: 'Snack', art: 'der', gender: 'm', plural: 'Snacks', pos: 'noun', level: 'B2', register: 'spoken', en: 'snack', hi: 'नाश्ता', ex: 'Sie kaufte einen Snack.', exEn: 'She bought a snack.', exHi: 'Usne ek snack khareeda.', ex2: 'Sie haben Snacks mitgebracht.', ex2En: 'They\'ve brought snacks.', ex2Hi: 'Woh snacks laaye hain.' },
    { de: 'Sonnencreme', art: 'die', gender: 'f', plural: 'Sonnencremes', pos: 'noun', level: 'B2', register: 'both', en: 'suncream', hi: 'सनक्रीम', ex: 'Sie trug Sonnencreme auf.', exEn: 'She applied suncream.', exHi: 'Usne suncream lagaayi.', ex2: 'Sie haben Sonnencreme gekauft.', ex2En: 'They\'ve bought suncream.', ex2Hi: 'Unhone suncream khareedi hai.' },
    { de: 'sowieso', pos: 'adverb', level: 'B2', register: 'both', en: 'anyway, in any case', hi: 'वैसे भी', ex: 'Es wird sowieso streng kontrolliert.', exEn: 'It\'s strictly controlled anyway.', exHi: 'Vaise bhi sakhti se niyantrit kiya jaata hai.', ex2: 'Sie kommen sowieso zu spät.', ex2En: 'They\'re coming late anyway.', ex2Hi: 'Woh vaise bhi der se aa rahe hain.' },
    { de: 'Sportpensum', art: 'das', gender: 'n', plural: 'Sportpensen', pos: 'noun', level: 'B2', register: 'written', en: 'exercise quota, sports workload', hi: 'व्यायाम कोटा', ex: 'Ihr Sportpensum war hoch.', exEn: 'Her exercise quota was high.', exHi: 'Uska vyaayaam kota zyaada tha.', ex2: 'Sie haben ihr Sportpensum reduziert.', ex2En: 'They\'ve reduced their exercise quota.', ex2Hi: 'Unhone apna vyaayaam kota kam kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Unpersönliches Passiv?',
      body: [ 'Sometimes there is NO object that can become the subject. German still forms a passive sentence — the speaker does NOT care WHO performs the action; only the activity matters.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['<span class="de r-impersonal">Hier wird gearbeitet.</span>', 'People are working here.'],
          ['<span class="de r-impersonal">Heute wird viel gelacht.</span>', 'People are laughing a lot today.']
        ]
      },
      hinglish: 'Kabhi-kabhi sentence mein koi aisa object hi nahi hota jo passive mein subject ban sake. German phir bhi passive bana leta hai \u2014 kyunki yahan yeh batana hi nahi hota ki kaam <b>kaun</b> kar raha hai, sirf kaam ki baat hoti hai.'
    },
    {
      title: 'Struktur: (es) + werden + Partizip II',
      body: [ 'Es wird gearbeitet — "es" occupies Position 1 by default. Once another element (heute, hier, im Büro) occupies Position 1, "es" simply disappears.' ],
      table: {
        head: ['Sentence position', 'Example'],
        rows: [
          ['Sentence beginning', '<span class="de r-impersonal">Es wird gearbeitet.</span>'],
          ['After another element', '<span class="de r-impersonal">Heute wird gearbeitet.</span>'],
          ['After another element', '<span class="de r-impersonal">Im Büro wird gearbeitet.</span>'],
          ['After another element', '<span class="de r-impersonal">Hier wird nicht geraucht.</span>']
        ]
      },
      hinglish: '<b>es</b> sirf Position 1 bharne ke liye aata hai. Jaise hi koi doosri cheez (heute, hier, im B\u00fcro) Position 1 le leti hai, <b>es</b> gayab ho jaata hai \u2014 dono ek saath nahi rehte.'
    },
    {
      title: 'Wann verwenden wir es?',
      body: [ 'Use Unpersönliches Passiv when the person is unknown, the person is irrelevant, or you\'re giving rules, announcements, or describing activities.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Es wird getanzt.', 'People are dancing.'],
          ['Hier wird Deutsch gesprochen.', 'German is spoken here.'],
          ['Im Restaurant wird nicht geraucht.', 'There\'s no smoking in the restaurant.'],
          ['Heute wird bis 18 Uhr gearbeitet.', 'Work happens until 6pm today.'],
          ['Jetzt wird Mittag gegessen.', 'Lunch is being eaten now.']
        ]
      },
      hinglish: 'Ise tab use karo jab karne wala pata na ho, ya uska pata hona zaroori na ho. Isliye yeh rules, announcements aur kisi jagah ki activity batane ke liye sabse zyada aata hai \u2014 jaise notice board par.'
    },
    {
      title: '"es" oder kein "es"?',
      body: [ 'Es wird gefeiert (✅). Heute wird gefeiert (✅). Im Hotel wird Englisch gesprochen (✅). But: Heute wird es gefeiert (❌) — "es" cannot coexist with another Position 1 element.' ],
      hinglish: 'Ek hi rule yaad rakho \u2014 Position 1 par ya <b>es</b> aayega, ya koi doosri cheez. Dono ek saath kabhi nahi aate.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These examples reflect authentic Goethe B2 workplace, academic, and environmental situations.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Im Unternehmen wird digital gearbeitet.', 'At the company, work is done digitally.'],
          ['Während der Konferenz wird Englisch gesprochen.', 'During the conference, English is spoken.'],
          ['An der Universität wird intensiv geforscht.', 'At the university, research is done intensively.'],
          ['Hier wird nachhaltig produziert.', 'Here, sustainable production happens.'],
          ['In Deutschland wird viel recycelt.', 'In Germany, a lot is recycled.']
        ]
      },
      hinglish: 'Yeh examples wahi hain jo Goethe B2 ke office, university aur environment wale texts mein asli mein aate hain.'
    },
    {
      title: 'Unterschied zum normalen Passiv',
      body: [ 'Normal passive has a real subject that could receive an agent. Unpersönliches Passiv has no subject at all — only the action remains.' ],
      table: {
        head: ['Normal Passive', 'Unpersönliches Passiv'],
        rows: [ ['Der Bericht wird geschrieben. (subject exists)', '<span class="de r-impersonal">Es wird geschrieben.</span> (no subject, only action)'] ]
      },
      hinglish: 'Normal passive mein ek asli subject hota hai \u2014 koi cheez jispar kaam hua. Unpers\u00f6nliches Passiv mein woh subject hi nahi hota, sirf kaam bachta hai.'
    },
    {
      title: 'Register',
      body: [ 'Unpersönliches Passiv appears constantly in announcements, signs, newspapers, reports, academic German, business German, and public notices.' ],
      hinglish: 'Yeh structure announcements, signs, newspapers aur public notices mein bahut aata hai \u2014 wahan karne wale ka naam batane ki zaroorat hi nahi hoti.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from misplacing "es", forgetting it must vanish, or adding an unnecessary agent.' ],
      mistakes: [
        { wrong: 'Es wird gearbeitet hier.', right: 'Es wird hier gearbeitet. / Hier wird gearbeitet.', why: 'Nothing may follow the Partizip II \u2014 it closes the clause. So "hier" belongs in the middle, or it can take Position 1 instead (and then "es" drops).' },
        { wrong: 'Hier wird es gearbeitet.', right: 'Hier wird gearbeitet.', why: '"es" must disappear once "hier" occupies Position 1 — the two cannot coexist.' },
        { wrong: 'Es wird Deutsch sprechen.', right: 'Es wird Deutsch gesprochen.', why: 'The passive needs Partizip II ("gesprochen"), not the bare infinitive.' },
        { wrong: 'Heute gearbeitet wird.', right: 'Heute wird gearbeitet.', why: 'The finite verb "wird" must stay in Position 2, immediately after "Heute".' },
        { wrong: 'Es wird gearbeitet von vielen Menschen.', right: 'Es wird gearbeitet. / Es wird von vielen Menschen gearbeitet.', why: 'Again nothing follows the Partizip II. And in practice you would simply leave the agent out \u2014 the whole point of this structure is that WHO does it does not matter.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki <b>es</b> ko wahan rakh diya jaata hai jahan pehle se koi cheez Position 1 par hai, ya Partizip II ke baad kuch aur jod diya jaata hai. Yaad rakho \u2014 Partizip II sentence band kar deta hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Is there a subject? Use normal passive. Talking only about the action, with no WHO at all? Use Unpersönliches Passiv, and remember: "es" only ever sits in Position 1.' ],
      note: 'Memory trick: talking about WHO? → normal passive. Talking only about THE ACTION? → Unpersönliches Passiv.',
      hinglish: 'Khud se poochho \u2014 kya koi cheez hai jispar kaam ho raha hai? Haan to normal passive. Aur agar sirf kaam ki baat hai, koi karne wala ya cheez nahi, to Unpers\u00f6nliches Passiv. Aur yaad rakho: <b>es</b> sirf Position 1 par baithta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Ratgeber: So läuft eine Krankmeldung bei der Krankenkasse ab',
    titleEn: 'Guide: how a sick note works with the health insurer',
    tokens: [
      { w: 'Bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Erkältung', role: 'plain', en: 'cold (illness) (Satzende)', hi: 'ज़ुकाम (Satzende)', type: 'Noun · fem.' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'की जाती है (अवैयक्तिक Passiv)', type: 'Verb · werden (unpersönliches Passiv)', why: 'Impersonal passive: no real subject exists — the focus is purely on the action, not who does it (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Regel', role: 'plain', en: 'rule (Satzende)', hi: 'नियम (Satzende)', type: 'Noun · fem.' },
      { w: 'zunächst', role: 'plain', en: 'first', hi: 'सबसे पहले', type: 'Adverb' },
      { w: 'beim', role: 'plain', en: 'at the', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Hausarzt', role: 'plain', en: 'family doctor (Satzende)', hi: 'पारिवारिक चिकित्सक (Satzende)', type: 'Noun · masc.', why: 'der Hausarzt (this chapter).' },
      { w: 'angerufen', role: 'r-verb', en: 'called (Satzende, unpersönliches Passiv)', hi: 'फ़ोन किया जाता है (Satzende)', type: 'Verb · Partizip II (unpersönliches Passiv, Satzende)', why: 'There is no direct object here — "angerufen" alone forms the impersonal passive with an implicit "es" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Danach', role: 'plain', en: 'after that', hi: 'उसके बाद', type: 'Adverb' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'की जाती है', type: 'Verb · werden (unpersönliches Passiv)' },
      { w: 'meist', role: 'plain', en: 'usually', hi: 'ज़्यादातर', type: 'Adverb' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'को', type: 'Contraction · an dem' },
      { w: 'Telefon', role: 'plain', en: 'phone (Satzende)', hi: 'फ़ोन (Satzende)', type: 'Noun · neut.' },
      { w: 'gewartet', role: 'r-verb', en: 'waited (Satzende, unpersönliches Passiv)', hi: 'इंतज़ार किया जाता है (Satzende)', type: 'Verb · Partizip II (unpersönliches Passiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Krankenkasse', role: 'plain', en: 'health insurer (Satzende)', hi: 'स्वास्थ्य बीमा कंपनी (Satzende)', type: 'Noun · fem.', why: 'die Krankenkasse (this chapter).' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'की जाती है', type: 'Verb · werden (unpersönliches Passiv)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Krankmeldung', role: 'plain', en: 'sick note (Satzende)', hi: 'बीमारी की सूचना (Satzende)', type: 'Noun · fem.' },
      { w: 'digital', role: 'plain', en: 'digitally', hi: 'डिजिटल रूप से', type: 'Adjective' },
      { w: 'eingereicht', role: 'r-verb', en: 'submitted (Satzende, gewöhnliches Passiv)', hi: 'जमा की जाती है (Satzende)', type: 'Verb · Partizip II (Vorgangspassiv, mit direktem Objekt)', why: 'Here a real object (die Krankmeldung) exists, so this is an ordinary passive, unlike the impersonal passive above.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Notfall', role: 'plain', en: 'emergency (Satzende)', hi: 'आपातकाल (Satzende)', type: 'Noun · masc.' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'की जाती है', type: 'Verb · werden (unpersönliches Passiv)' },
      { w: 'sofort', role: 'plain', en: 'immediately', hi: 'तुरंत', type: 'Adverb' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Notruf', role: 'plain', en: 'emergency number (Satzende)', hi: 'आपातकालीन नंबर (Satzende)', type: 'Noun · masc.', why: 'der Notruf (this chapter).' },
      { w: 'gewählt', role: 'r-verb', en: 'dialled (Satzende)', hi: 'डायल किया जाता है (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Anschließend', role: 'plain', en: 'afterwards', hi: 'उसके बाद', type: 'Adverb' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'जाता है', type: 'Verb · werden (Passiv, unpersönlich)', why: 'Unpersönliches Passiv: no subject at all, just the action itself (this chapter).' },
      { w: 'häufig', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'noch', role: 'plain', en: 'once', hi: 'एक बार', type: 'Adverb' },
      { w: 'einmal', role: 'plain', en: 'more (Satzende)', hi: 'फिर से (Satzende)', type: 'Adverb' },
      { w: 'nachgefragt', role: 'r-verb', en: 'asked again (Satzende)', hi: 'पूछा जाता है (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'bevor', role: 'plain', en: 'before', hi: 'से पहले', type: 'Konjunktion' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Behandlung', role: 'plain', en: 'treatment (Satzende)', hi: 'इलाज (Satzende)', type: 'Noun · fem.' },
      { w: 'entschieden', role: 'r-verb', en: 'decided (Satzende)', hi: 'फ़ैसला किया जाता है (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'wird', role: 'r-verb', en: 'is (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Passiv, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'vorab', role: 'plain', en: 'beforehand', hi: 'पहले से', type: 'Adverb' },
      { w: 'informiert', role: 'plain', en: 'informs (Satzende)', hi: 'सूचित करता है (Satzende)', type: 'Verb · sich informieren (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'spart', role: 'plain', en: 'saves', hi: 'बचाता है', type: 'Verb · sparen' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'wertvolle', role: 'plain', en: 'valuable', hi: 'बहुमूल्य', type: 'Adjective' },
      { w: 'Zeit', role: 'plain', en: 'time (Satzende)', hi: 'समय (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'größeren', role: 'plain', en: 'larger', hi: 'बड़े', type: 'Adjective · Dat.' },
      { w: 'Praxen', role: 'plain', en: 'practices (Satzende)', hi: 'क्लिनिकों (Satzende)', type: 'Noun · plural' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'जाता है', type: 'Verb · werden (Passiv, unpersönlich)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'meist', role: 'plain', en: 'mostly', hi: 'ज़्यादातर', type: 'Adverb' },
      { w: 'online', role: 'plain', en: 'online (Satzende)', hi: 'ऑनलाइन (Satzende)', type: 'Adjective' },
      { w: 'terminiert', role: 'r-verb', en: 'scheduled (Satzende, unpersönliches Passiv)', hi: 'समय तय किया जाता है (Satzende)', type: 'Verb · Partizip II (Passiv, unpersönlich, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Land', role: 'plain', en: 'countryside (Satzende)', hi: 'ग्रामीण इलाक़े (Satzende)', type: 'Noun · neut.' },
      { w: 'hingegen', role: 'plain', en: 'however', hi: 'दूसरी ओर', type: 'Adverb' },
      { w: 'wird', role: 'r-verb', en: 'is (unpersönliches Passiv)', hi: 'जाता है', type: 'Verb · werden (Passiv, unpersönlich)' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'am', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · an dem' },
      { w: 'Telefon', role: 'plain', en: 'telephone (Satzende)', hi: 'फ़ोन (Satzende)', type: 'Noun · neut.' },
      { w: 'gewartet', role: 'r-verb', en: 'waited (Satzende, unpersönliches Passiv)', hi: 'इंतज़ार किया जाता है (Satzende)', type: 'Verb · Partizip II (Passiv, unpersönlich, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'vorher', role: 'plain', en: 'beforehand', hi: 'पहले से', type: 'Adverb' },
      { w: 'informiert', role: 'plain', en: 'informs (Satzende)', hi: 'सूचित करता है (Satzende)', type: 'Verb · sich informieren (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'spart', role: 'plain', en: 'saves', hi: 'बचाता है', type: 'Verb · sparen' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'wertvolle', role: 'plain', en: 'valuable', hi: 'बहुमूल्य', type: 'Adjective' },
      { w: 'Zeit', role: 'plain', en: 'time (Satzende)', hi: 'समय (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'With a cold, one usually first calls the family doctor. After that, one usually waits on the phone. At the health insurer, the sick note is submitted digitally. In an emergency, the emergency number is dialled immediately. Afterwards, there is often another round of questions before the treatment is decided on. In larger practices, appointments are by now mostly scheduled online. In the countryside, however, one still often waits on the phone. Whoever informs themselves beforehand often saves valuable time in the end.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_046_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hör dir das an — hier wird an jedem Stand diskutiert und präsentiert.', en: 'Timo, listen to this — at every stand there\'s discussing and presenting going on.' },
      { id: 'B2_046_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, und dort drüben wird sogar fotografiert und gefilmt.', en: 'True, and over there they\'re even photographing and filming.' },
      { id: 'B2_046_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Es wird viel gelacht, das gefällt mir an dieser Messe.', en: 'There\'s a lot of laughing going on, I like that about this fair.' },
      { id: 'B2_046_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, hier wird nie nur verkauft — es wird auch richtig gefeiert.', en: 'Exactly, here it\'s never just about selling — there\'s real celebrating too.' }
    ],
    transcript: 'Timo, hör dir das an — hier wird an jedem Stand diskutiert und präsentiert. Stimmt, und dort drüben wird sogar fotografiert und gefilmt. Es wird viel gelacht, das gefällt mir an dieser Messe. Genau, hier wird nie nur verkauft — es wird auch richtig gefeiert.',
    translation: 'Timo, listen to this — at every stand there\'s discussing and presenting going on. True, and over there they\'re even photographing and filming. There\'s a lot of laughing going on, I like that about this fair. Exactly, here it\'s never just about selling — there\'s real celebrating too.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hör' },
      { w: 'dir' },
      { w: 'das' },
      { w: 'an' },
      { w: '—', plain: true },
      { w: 'hier' },
      { w: 'wird' },
      { w: 'an' },
      { w: 'jedem' },
      { w: 'Stand' },
      { w: 'diskutiert' },
      { w: 'und' },
      { w: 'präsentiert' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'dort' },
      { w: 'drüben' },
      { w: 'wird' },
      { w: 'sogar' },
      { w: 'fotografiert' },
      { w: 'und' },
      { w: 'gefilmt' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'wird' },
      { w: 'viel' },
      { w: 'gelacht' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'gefällt' },
      { w: 'mir' },
      { w: 'an' },
      { w: 'dieser' },
      { w: 'Messe' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'hier' },
      { w: 'wird' },
      { w: 'nie' },
      { w: 'nur' },
      { w: 'verkauft' },
      { w: '—', plain: true },
      { w: 'es' },
      { w: 'wird' },
      { w: 'auch' },
      { w: 'richtig' },
      { w: 'gefeiert' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was passiert an jedem Stand?', qEn: 'What is happening at every stand?', options: ['es wird geschlafen', 'es wird diskutiert und präsentiert', 'es wird gegessen', 'nichts'], optionsEn: ['there is sleeping', 'there is discussion and presenting', 'there is eating', 'nothing'], answer: 1,
        explain: '"Hier wird an jedem Stand diskutiert und präsentiert."' },
      { q: 'Was gefällt Frauke an der Messe?', qEn: 'What does Frauke like about the fair?', options: ['die Preise', 'dass viel gelacht wird', 'die Größe', 'das Essen'], optionsEn: ['the prices', 'that there is a lot of laughter', 'the size', 'the food'], answer: 1,
        explain: '"Es wird viel gelacht, das gefällt mir an dieser Messe."' }
    ]
  },

  speaking: [
    { task: "Ihr seid auf der Messe. Beschreibe die Stimmung.", taskEn: "You're at the trade fair. Describe the atmosphere.", de: "Hier wird an jedem Stand diskutiert und präsentiert.", en: "At every stand here there's discussing and presenting going on." },
    { task: "Dein Kollege zeigt auf die andere Halle. Antworte.", taskEn: "Your colleague points to the other hall. Answer.", de: "Dort drüben wird sogar fotografiert und gefilmt.", en: "Over there they're even taking photos and filming." },
    { task: "Ein neuer Kollege fragt nach den Regeln im Labor.", taskEn: "A new colleague asks about the rules in the lab.", de: "Hier wird nicht gegessen und nicht telefoniert.", en: "There's no eating and no phoning here." },
    { task: "Mach vor der Führung eine Ansage.", taskEn: "Make an announcement before the tour.", de: "Es wird jetzt zusammengegangen, und im Saal wird leise gesprochen.", en: "We'll go together now, and in the hall please speak quietly." },
    { task: "Rollenspiel: Ihr berichtet vom Messebesuch.", taskEn: "Role-play: you report on the trade fair visit.", de: "Es wurde von morgens bis abends präsentiert. — Und am Stand wurde ständig gefragt.", en: "There was presenting from morning to evening. — And at the stand there were constant questions." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Public notice (6-8 sentences): Write workplace or trade-fair rules using Unpersönliches Passiv naturally (e.g. Hier wird nicht ..., Es wird ...).\n\nTASK 2 — University information brochure (6-8 sentences): Describe general activities at a university without naming who performs them.',
    starters: ['Hier wird ...', 'Es wird ...'],
    placeholder: 'Im Büro wird nicht geraucht. Heute wird bis 18 Uhr gearbeitet. Es wird streng kontrolliert.',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly uses Unpersönliches Passiv?',
      options: ['Hier wird gearbeitet.', 'Heute wird es gearbeitet.', 'Es wird gearbeitet von vielen Menschen.'],
      answer: 0,
      explain: '"Hier" fills Position 1, so "es" correctly disappears. Option 2 wrongly keeps "es" alongside "Heute"; option 3 adds an unnecessary agent, defeating the purpose of this construction.'
    },
    gap: {
      sentence: ['Heute ', ' gearbeitet.'],
      gaps: [ { answer: 'wird', accepts: ['wird'] } ],
      explain: 'The finite verb "wird" must stay in Position 2, right after "Heute" — no "es" appears here since "Heute" already occupies Position 1.'
    },
    match: {
      q: 'Match each sentence to whether "es" is required or must disappear.',
      pairs: [
        { noun: 'Es wird gearbeitet.', art: '"es" required (Position 1)' },
        { noun: 'Heute wird gearbeitet.', art: '"es" disappears (Heute fills Position 1)' },
        { noun: 'Hier wird nicht geraucht.', art: '"es" disappears (Hier fills Position 1)' },
        { noun: 'Es wird getanzt.', art: '"es" required (Position 1)' }
      ]
    },
    builder: {
      target: 'Build: "There\'s no smoking in the trade-fair hall." (Unpersönliches Passiv, no "es")',
      bank: ['In', 'der', 'Messehalle', 'wird', 'nicht', 'geraucht', '.'],
      answer: ['In', 'der', 'Messehalle', 'wird', 'nicht', 'geraucht', '.'],
      roles: { 'wird': 'r-impersonal', 'geraucht': 'r-impersonal' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Hier wird es gearbeitet.',
      right: 'Hier wird gearbeitet.',
      explain: '"es" cannot coexist with another element in Position 1 — since "Hier" already fills it, "es" must disappear.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does Unpersönliches Passiv express?', options: ['An action with no subject at all — only the activity matters', 'A finished state', 'A strong assumption'], answer: 0,
      explain: 'Unpersönliches Passiv is used when WHO performs the action is completely irrelevant.' },
    { q: 'When does "es" appear in Unpersönliches Passiv?', options: ['Only when nothing else occupies Position 1', 'Always, in every sentence', 'Only in questions'], answer: 0,
      explain: '"es" is a pure placeholder for Position 1 — it disappears the moment another element (heute, hier, im Büro) takes that spot.' },
    { q: 'Which sentence is correct?', options: ['Heute wird gearbeitet.', 'Heute wird es gearbeitet.', 'Es heute wird gearbeitet.'], answer: 0,
      explain: '"Heute" occupies Position 1, so "es" must be dropped entirely.' },
    { q: 'Can Unpersönliches Passiv name an agent with "von"?', options: ['No — that would defeat its purpose', 'Yes, always', 'Only in formal writing'], answer: 0,
      explain: 'This construction exists precisely because WHO acts is irrelevant — adding "von vielen Menschen" contradicts that.' },
    { q: '"Hier wird nicht geraucht" means:', options: ['There\'s no smoking here (a general rule, no specific person)', 'Someone specific is not smoking here', 'Smoking will happen here soon'], answer: 0,
      explain: 'This is a classic impersonal-passive rule/announcement — describing an activity in general, without naming anyone.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-impersonal', html: 'Unpersönliches Passiv ((es) + werden + Partizip II) describes an action with NO subject at all — WHO acts is completely irrelevant.' },
    { c: 'r-impersonal', html: '"es" is a pure Position-1 placeholder: Es wird gearbeitet, but Heute wird gearbeitet / Hier wird gearbeitet — "es" vanishes the moment another element takes Position 1.' },
    { c: 'r-impersonal', html: 'Never add an agent with "von" in this construction — that would contradict its entire point. It thrives in signs, rules, and public announcements.' }
  ],
  revisionTips: [
    'For every rule or announcement you know in English, practise building its German Unpersönliches Passiv version.',
    'Scan a public sign or notice for "wird" + Partizip II with no subject — check whether "es" appears or another element fills Position 1.',
    'Ask yourself before every passive sentence: is there a real subject, or does only the action matter? That answers normal passive vs Unpersönliches Passiv.'
  ]
};

window.CHAPTER = CHAPTER;
