/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 30
   "Artikelwörter als Pronomen" — definite, indefinite,
   possessive, and demonstrative article words used as pronouns
   to avoid repeating a noun. Does NOT introduce Pronomen mit
   Präpositionen, Relativpronomen, Indefinitpronomen, or B2
   reference structures.
   IMPORTANT: dialogue uses ONLY Frauke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-30 list (~90 items) — a
   community-volunteering + bakery/market theme (Bürgerversammlung,
   ehrenamtlich, Jugendgruppe, Croissant, Konfitüre…) — a natural
   fit for choosing between things without repeating the noun.
============================================================ */
const CHAPTER = {
  id: 'b1-30-artikelwoerter-als-pronomen',
  phase: 'B1 · Phase 1',
  number: 30,
  title: 'Artikelwörter als Pronomen',
  titleEn: 'Article words as pronouns',
  description: 'Avoid repeating a noun: definite, indefinite, possessive, and demonstrative article words step in as pronouns — welches Buch? Ich nehme das.',
  xp: 280,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 31, title: 'Adjektive als Nomen', titleEn: 'Adjectives as nouns' , href: 'chapter-b1-31-adjektive-als-nomen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Don\'t repeat the noun — <em>let the article do it.</em>',
    intro: 'Frauke and Timo run errands at the bakery and sign up to help at a neighbourhood event — every repeated noun replaced by an article word standing in for it: Welches meinst du? Das von letztem Jahr. Welche schmecken am besten? Die mit Schokolade.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear definite, indefinite, possessive, and demonstrative article pronouns used naturally in one conversation'
    ],
    scene: 'Beim Bäcker und bei der Bürgerversammlung',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Organisator', role: 'r-akkusativ', en: 'organizer', hi: 'आयोजक', pron: 'or-ga-ni-ZAH-tor', type: 'Noun · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Sommerprojekt', role: 'r-akkusativ', en: 'summer project', hi: 'ग्रीष्म परियोजना', pron: 'ZO-mer-pro-yekt', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'We still need an organizer for the summer project.', hi: 'Humein grishma pariyojana ke liye ek aur aayojak chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welchen', role: 'r-akkusativ', en: 'which (masc.)', hi: 'कौनसे', pron: 'VEL-khen', type: 'Pronoun · Artikelwort als Pronomen', why: 'der/die/das and welcher can stand alone as pronouns, replacing a noun already mentioned (this chapter).', ex: 'Welchen meinst du?', exEn: 'Which one do you mean?' },
        { w: 'meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Which one do you mean?', hi: 'Tumhara kaunsa matlab hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Den', role: 'r-akkusativ', en: 'the one (masc.)', hi: 'उसे', pron: 'dayn', type: 'Pronoun · Artikelwort als Pronomen', why: 'den as standalone pronoun replaces a masc. noun (this chapter).', ex: 'Den, den wir letztes Jahr hatten.', exEn: 'The one we had last year.' },
        { w: ',', plain: true },
        { w: 'den', role: 'r-akkusativ', en: 'whom', hi: 'जिसे', pron: 'dayn', type: 'Relativpronomen · accusative' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'letztes', role: 'r-akkusativ', en: 'last', hi: 'पिछले', pron: 'LETS-tes', type: 'Adjective' },
        { w: 'Jahr', role: 'r-akkusativ', en: 'year', hi: 'साल', pron: 'yahr', type: 'Noun · neut.' },
        { w: 'hatten', role: 'r-verb', en: 'had', hi: 'था', pron: 'HA-ten', type: 'Verb · haben (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'The one we had last year.', hi: 'Woh jo humaare paas pichhle saal tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ach', role: 'r-subject', en: 'oh', hi: 'अरे', pron: 'ahkh', type: 'Interjection' },
        { w: 'so', role: 'r-adverb', en: 'I see', hi: 'अच्छा', pron: 'zo', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'welche', role: 'r-akkusativ', en: 'which (pl.)', hi: 'कौनसे', pron: 'VEL-khuh', type: 'Pronoun · Artikelwort als Pronomen', why: 'welche as standalone pronoun replaces a plural noun (this chapter).', ex: 'Welche Kuchen backen wir?', exEn: 'Which cakes do we bake?' },
        { w: 'Kuchen', role: 'r-akkusativ', en: 'cakes', hi: 'केक', pron: 'KOO-khen', type: 'Noun · plural' },
        { w: 'backen', role: 'r-verb', en: 'bake', hi: 'बनाना', pron: 'BA-ken', type: 'Verb · backen (wir, Satzende)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Oh I see! And which cakes do we bake?', hi: 'Are achha! Aur hum kaunse cake banaayenge?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'whichever', hi: 'जो भी', pron: 'VEL-khuh', type: 'Pronoun · Artikelwort als Pronomen' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'besten', role: 'r-dativ', en: 'best', hi: 'अच्छे', pron: 'BES-ten', type: 'Superlative' },
        { w: 'schmecken', role: 'r-verb', en: 'taste', hi: 'स्वाद देते हैं', pron: 'SHME-ken', type: 'Verb · schmecken (Satzende)' },
        { w: '!', plain: true },
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the ones', hi: 'वे', pron: 'dee', type: 'Pronoun · Artikelwort als Pronomen' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'Schokolade', role: 'r-dativ', en: 'chocolate (dat.)', hi: 'चॉकलेट के', pron: 'sho-ko-LAH-duh', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Whichever taste the best! Maybe the ones with chocolate.', hi: 'Jo bhi sabse acha swaad de! Shayad chocolate wale.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'spende', role: 'r-verb', en: 'donate', hi: 'दान करता हूँ', pron: 'SHPEN-duh', type: 'Verb · spenden (ich)' },
        { w: 'gerne', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'GAIR-nuh', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zutaten', role: 'r-akkusativ', en: 'ingredients', hi: 'सामग्री', pron: 'TSOO-tah-ten', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Good idea! I gladly donate the ingredients.', hi: 'Achha vichaar! Main khushi se saamagri daan karta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Don\'t repeat a noun already mentioned — let the matching article word stand alone as a pronoun instead: <span class="de">Welches Buch? Ich nehme <b>das</b>.</span> <span class="de">Hast du einen Stift? Ja, ich habe <b>einen</b>.</span> <span class="de">Ist das dein Laptop? <b>Meiner</b> ist hier.</span> Definite, indefinite, possessive, and demonstrative article words can all do this.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ARTIKELWÖRTER ALS PRONOMEN (B1 level only): definite article words (der/die/das/den/dem/des) standing alone as pronouns when the noun is already known; indefinite article words (einer/eine/eines/einen/einem) as pronouns; possessive article words as pronouns (meiner/deiner/seiner/ihrer/unserer/eurer, or meins/deins for neuter); demonstrative article words (dieser/diese/dieses, jener/jene/jenes) as pronouns. ' +
    'Do NOT expect Pronomen mit Präpositionen, Relativpronomen as the main topic, Indefinitpronomen as the main topic, or B2 reference structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- An article word used as a pronoun should NOT be followed by the noun it replaces (e.g. never "diese Auto" when Auto was already named — just "dieses").\n' +
    '- Possessive pronouns match the gender/case of the noun being replaced (meiner for masc. Nom., meins for neut. Nom./Akk., meine for fem., etc.).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Repetition check:</b> one sentence on whether the learner successfully avoided repeating nouns using article pronouns.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you naturally replace nouns with the right article pronoun every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the comparison table once — especially possessive pronouns like meiner/meins — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: is the noun already known? Then don\'t repeat it.'
  },

  parserSentence: [
    { w: 'Welches', role: 'r-question' }, { w: 'Buch', role: 'plain' },
    { w: 'möchtest', role: 'plain' }, { w: 'du', role: 'r-subject' },
    { w: '?', plain: true }, { w: 'Ich', role: 'r-subject' },
    { w: 'nehme', role: 'plain' }, { w: 'das', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: don\'t repeat a known noun — use the matching article word as a pronoun.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo run errands and volunteer, letting article pronouns replace known nouns.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 90 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master definite, indefinite, possessive, and demonstrative article words as pronouns.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about volunteering, full of article pronouns.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch which article word is standing in for a noun in each spoken sentence.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare products and possessions using article pronouns naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write short texts avoiding noun repetition using article pronouns.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill article-to-pronoun transformation across all four types.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 280 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 90 chapter words — volunteering and bakery vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Article-to-pronoun drills across all four types, error correction, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete article-pronoun reference — definite, indefinite, possessive, demonstrative, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der / die / das', text: 'Use definite article words as pronouns' },
    { de: 'einer / eine / eines', text: 'Use indefinite article words as pronouns' },
    { de: 'meiner / meins', text: 'Use possessive article words as pronouns' },
    { de: 'dieser / jener', text: 'Use demonstrative article words as pronouns' },
    { de: 'nicht wiederholen', text: 'Avoid repeating a noun once it\'s already known' }
  ],

  // ---------- Vocabulary (90 items — full chapter-30 upload list) ----------
  vocab: [
    { de: 'Anspruch', art: 'der', gender: 'm', plural: 'Ansprüche', pos: 'noun', level: 'B1', en: 'entitlement, claim', hi: 'हक़', ex: 'Sie hat Anspruch auf Unterstützung.', exEn: 'She has an entitlement to support.', exHi: 'Uska samarthan par haq hai.' },
    { de: 'ehrenamtlich', pos: 'adjective', level: 'B1', en: 'voluntary', hi: 'स्वैच्छिक', ex: 'Ich bin ehrenamtlich verantwortlich für die Jugendgruppe.', exEn: 'I\'m voluntarily responsible for the youth group.', exHi: 'Main swaichchik roop se yuva samooh ke liye zimmedaar hoon.' },
    { de: 'verantwortlich', pos: 'adjective', level: 'B1', en: 'responsible (für + A.)', hi: 'ज़िम्मेदार', ex: 'Sie ist verantwortlich für die Organisation.', exEn: 'She is responsible for the organization.', exHi: 'Woh sanstha ke liye zimmedaar hai.' },
    { de: 'abmelden', pos: 'verb', level: 'B1', en: 'to sign off, deregister', hi: 'पंजीकरण रद्द करना', ex: 'Ich muss mich vom Kurs abmelden.', exEn: 'I have to sign off from the course.', exHi: 'Mujhe course se registration hatana hai.', conj: { praesens: 'meldet ab', praeteritum: 'meldete ab', perfekt: 'hat abgemeldet' } },
    { de: 'abräumen', pos: 'verb', level: 'B1', en: 'to clear', hi: 'साफ़ करना', ex: 'Wir räumen den Tisch ab.', exEn: 'We clear the table.', exHi: 'Hum table saaf karte hain.', conj: { praesens: 'räumt ab', praeteritum: 'räumte ab', perfekt: 'hat abgeräumt' } },
    { de: 'abstimmen', pos: 'verb', level: 'B1', en: 'to vote', hi: 'मतदान करना', ex: 'Wir stimmen über das Vorhaben ab.', exEn: 'We vote on the scheme.', exHi: 'Hum yojana par matdaan karte hain.', conj: { praesens: 'stimmt ab', praeteritum: 'stimmte ab', perfekt: 'hat abgestimmt' } },
    { de: 'abziehen', pos: 'verb', level: 'B1', en: 'to be deducted', hi: 'काटा जाना', ex: 'Die Kosten werden abgezogen.', exEn: 'The costs are deducted.', exHi: 'Lagat kaati jaati hai.', conj: { praesens: 'zieht ab', praeteritum: 'zog ab', perfekt: 'hat abgezogen' } },
    { de: 'alarmieren', pos: 'verb', level: 'B1', en: 'to alert', hi: 'सचेत करना', ex: 'Die Feuerwehrleute wurden alarmiert.', exEn: 'The firefighters were alerted.', exHi: 'Fire fighters ko saavdhaan kiya gaya.', conj: { praesens: 'alarmiert', praeteritum: 'alarmierte', perfekt: 'hat alarmiert' } },
    { de: 'ausbilden', pos: 'verb', level: 'B1', en: 'to train', hi: 'प्रशिक्षित करना', ex: 'Ich bilde die Kinder in Erster Hilfe aus.', exEn: 'I train the children in first aid.', exHi: 'Main bacchon ko first aid mein prashikshit karti hoon.', conj: { praesens: 'bildet aus', praeteritum: 'bildete aus', perfekt: 'hat ausgebildet' } },
    { de: 'bedürftig', pos: 'adjective', level: 'B1', en: 'needy', hi: 'ज़रूरतमंद', ex: 'Wir helfen bedürftigen Familien.', exEn: 'We help needy families.', exHi: 'Hum zarooratmand parivaaron ki madad karte hain.' },
    { de: 'bewältigen', pos: 'verb', level: 'B1', en: 'to deal with, manage', hi: 'संभालना', ex: 'Wir werden die Aufgaben bewältigen.', exEn: 'We will manage the tasks.', exHi: 'Hum karyon ko sambhaal lenge.', conj: { praesens: 'bewältigt', praeteritum: 'bewältigte', perfekt: 'hat bewältigt' } },
    { de: 'bundesweit', pos: 'adjective', level: 'B1', en: 'nationwide', hi: 'देशव्यापी', ex: 'Das Projekt ist bundesweit bekannt.', exEn: 'The project is known nationwide.', exHi: 'Project deshvyaapi roop se jaana jaata hai.' },
    { de: 'Bürgerversammlung', art: 'die', gender: 'f', plural: 'Bürgerversammlungen', pos: 'noun', level: 'B1', en: 'town meeting', hi: 'नागरिक सभा', ex: 'Gehst du zur Bürgerversammlung?', exEn: 'Are you going to the town meeting?', exHi: 'Kya tum nagrik sabha mein jaa rahe ho?' },
    { de: 'Funktion', art: 'die', gender: 'f', plural: 'Funktionen', pos: 'noun', level: 'B1', en: 'function', hi: 'कार्य', ex: 'Welche Funktion erfüllt der Verein?', exEn: 'What function does the club fulfil?', exHi: 'Club kaunsa kaam poora karta hai?' },
    { de: 'Lieferung', art: 'die', gender: 'f', plural: 'Lieferungen', pos: 'noun', level: 'B1', en: 'shipment, delivery', hi: 'डिलीवरी', ex: 'Die Lieferung kommt morgen.', exEn: 'The delivery arrives tomorrow.', exHi: 'Delivery kal aayegi.' },
    { de: 'Online-Redaktion', art: 'die', gender: 'f', plural: 'Online-Redaktionen', pos: 'noun', level: 'B1', en: 'online editors', hi: 'ऑनलाइन संपादक मंडल', ex: 'Die Online-Redaktion schreibt den Weblog.', exEn: 'The online editors write the blog.', exHi: 'Online sampaadak mandal blog likhta hai.' },
    { de: 'Organisation', art: 'die', gender: 'f', plural: 'Organisationen', pos: 'noun', level: 'B1', en: 'organization', hi: 'संगठन', ex: 'Sie ist verantwortlich für die Organisation.', exEn: 'She is responsible for the organization.', exHi: 'Woh sangathan ke liye zimmedaar hai.' },
    { de: 'Patenschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'sponsorship, godparenthood', hi: 'प्रायोजन', ex: 'Sie übernimmt eine Patenschaft für das Projekt.', exEn: 'She takes on a sponsorship for the project.', exHi: 'Woh project ke liye ek prayojan sambhaalti hai.' },
    { de: 'Stadtinformation', art: 'die', gender: 'f', plural: 'Stadtinformationen', pos: 'noun', level: 'B1', en: 'city information', hi: 'शहर जानकारी', ex: 'Das Projekt steht auf der Stadtinformation.', exEn: 'The project is listed in the city information.', exHi: 'Project shahar jaankaari mein hai.' },
    { de: 'Vertretung', art: 'die', gender: 'f', plural: 'Vertretungen', pos: 'noun', level: 'B1', en: 'delegation, representation', hi: 'प्रतिनिधित्व', ex: 'Die Vertretung des Vereins trifft sich heute.', exEn: 'The club\'s delegation is meeting today.', exHi: 'Club ka pratinidhitv aaj milta hai.' },
    { de: 'durchführen', pos: 'verb', level: 'B1', en: 'to conduct', hi: 'आयोजित करना', ex: 'Wir führen das Projekt durch.', exEn: 'We conduct the project.', exHi: 'Hum project aayojit karte hain.', conj: { praesens: 'führt durch', praeteritum: 'führte durch', perfekt: 'hat durchgeführt' } },
    { de: 'einnehmen', pos: 'verb', level: 'B1', en: 'to take in (money)', hi: 'कमाई करना', ex: 'Der Verein nimmt Geld durch Spenden ein.', exEn: 'The club takes in money through donations.', exHi: 'Club daan se paisa kamaata hai.', conj: { praesens: 'nimmt ein', praeteritum: 'nahm ein', perfekt: 'hat eingenommen' } },
    { de: 'elternfrei', pos: 'adjective', level: 'B1', en: 'parent-free', hi: 'माता-पिता रहित', ex: 'Das ist eine elternfreie Zone.', exEn: 'That\'s a parent-free zone.', exHi: 'Yeh ek maata-pita rahit zone hai.' },
    { de: 'entsorgen', pos: 'verb', level: 'B1', en: 'to dispose of', hi: 'निपटाना', ex: 'Wir müssen den Abfall entsorgen.', exEn: 'We have to dispose of the waste.', exHi: 'Humein kachra nipटाना hoga.', conj: { praesens: 'entsorgt', praeteritum: 'entsorgte', perfekt: 'hat entsorgt' } },
    { de: 'erfüllen', pos: 'verb', level: 'B1', en: 'to fulfil (eine Funktion erfüllen)', hi: 'पूरा करना', ex: 'Welche Funktion erfüllst du genau?', exEn: 'Which function do you fulfil exactly?', exHi: 'Tum theek se kaunsa kaam poora karti ho?', conj: { praesens: 'erfüllt', praeteritum: 'erfüllte', perfekt: 'hat erfüllt' } },
    { de: 'erscheinen', pos: 'verb', level: 'B1', en: 'to be released, published', hi: 'प्रकाशित होना', ex: 'Der Weblog erscheint jeden Montag.', exEn: 'The blog is published every Monday.', exHi: 'Blog har somvaar prakaashit hota hai.', conj: { praesens: 'erscheint', praeteritum: 'erschien', perfekt: 'ist erschienen' } },
    { de: 'finanzieren', pos: 'verb', level: 'B1', en: 'to finance', hi: 'वित्तपोषित करना', ex: 'Wer finanziert so ein Vorhaben?', exEn: 'Who finances such a scheme?', exHi: 'Aisi yojana ko kaun vittaposhit karta hai?', conj: { praesens: 'finanziert', praeteritum: 'finanzierte', perfekt: 'hat finanziert' } },
    { de: 'herausfinden', pos: 'verb', level: 'B1', en: 'to find out', hi: 'पता लगाना', ex: 'Wir müssen die Ursache herausfinden.', exEn: 'We have to find out the cause.', exHi: 'Humein karan pata lagaana hoga.', conj: { praesens: 'findet heraus', praeteritum: 'fand heraus', perfekt: 'hat herausgefunden' } },
    { de: 'hingehen', pos: 'verb', level: 'B1', en: 'to go (there)', hi: 'वहाँ जाना', ex: 'Gehst du zur Versammlung hin?', exEn: 'Are you going to the meeting?', exHi: 'Kya tum sabha mein jaa rahe ho?', conj: { praesens: 'geht hin', praeteritum: 'ging hin', perfekt: 'ist hingegangen' } },
    { de: 'mitorganisieren', pos: 'verb', level: 'B1', en: 'to help organise', hi: 'आयोजन में मदद करना', ex: 'Ich möchte das Sommerprojekt mitorganisieren.', exEn: 'I\'d like to help organise the summer project.', exHi: 'Main summer project ke aayojan mein madad karna chahti hoon.', conj: { praesens: 'organisiert mit', praeteritum: 'organisierte mit', perfekt: 'hat mitorganisiert' } },
    { de: 'qualitativ', pos: 'adjective', level: 'B1', en: 'qualitative', hi: 'गुणात्मक', ex: 'Das ist ein qualitativer Unterschied.', exEn: 'That\'s a qualitative difference.', exHi: 'Yeh ek gunatmak antar hai.' },
    { de: 'spenden', pos: 'verb', level: 'B1', en: 'to donate', hi: 'दान करना', ex: 'Manche spenden Geld für das Projekt.', exEn: 'Some donate money for the project.', exHi: 'Kuchh log project ke liye paisa daan karte hain.', conj: { praesens: 'spendet', praeteritum: 'spendete', perfekt: 'hat gespendet' } },
    { de: 'verbreiten', pos: 'verb', level: 'B1', en: 'to spread', hi: 'फैलाना', ex: 'Der Weblog verbreitet die Nachricht.', exEn: 'The blog spreads the news.', exHi: 'Blog khabar failaata hai.', conj: { praesens: 'verbreitet', praeteritum: 'verbreitete', perfekt: 'hat verbreitet' } },
    { de: 'würzen', pos: 'verb', level: 'B1', en: 'to season', hi: 'मसाला डालना', ex: 'Wir würzen das Hackfleisch mit Gewürzen.', exEn: 'We season the ground meat with spices.', exHi: 'Hum keema ko masalon se masaledaar banate hain.', conj: { praesens: 'würzt', praeteritum: 'würzte', perfekt: 'hat gewürzt' } },
    { de: 'zulassen', pos: 'verb', level: 'B1', en: 'to be admitted, allowed', hi: 'अनुमति देना', ex: 'Nur Vereinsmitglieder werden zugelassen.', exEn: 'Only club members are admitted.', exHi: 'Sirf club sadasya hi allow hote hain.', conj: { praesens: 'lässt zu', praeteritum: 'ließ zu', perfekt: 'hat zugelassen' } },
    { de: 'zuverlässig', pos: 'adjective', level: 'B1', en: 'reliable', hi: 'भरोसेमंद', ex: 'Wir brauchen jemanden, der zuverlässig ist.', exEn: 'We need someone who is reliable.', exHi: 'Humein kisi bharosemand ki zaroorat hai.' },
    { de: 'übrig', pos: 'adjective', level: 'B1', en: 'remaining', hi: 'बचा हुआ', ex: 'Es ist noch Konfitüre übrig.', exEn: 'There\'s still some jam remaining.', exHi: 'Abhi bhi kuchh jaam bacha hai.' },
    { de: 'Arbeitsamt', art: 'das', gender: 'n', plural: 'Arbeitsämter', pos: 'noun', level: 'B1', en: 'job centre', hi: 'रोज़गार कार्यालय', ex: 'Sie geht zum Arbeitsamt.', exEn: 'She\'s going to the job centre.', exHi: 'Woh rozgaar karyaalay jaa rahi hai.' },
    { de: 'Architekturbüro', art: 'das', gender: 'n', plural: 'Architekturbüros', pos: 'noun', level: 'B1', en: 'architecture firm', hi: 'वास्तुकला कार्यालय', ex: 'Er arbeitet in einem Architekturbüro.', exEn: 'He works at an architecture firm.', exHi: 'Woh ek architecture office mein kaam karta hai.' },
    { de: 'Croissant', art: 'das', gender: 'n', plural: 'Croissants', pos: 'noun', level: 'B1', en: 'croissant', hi: 'क्रॉइसां', ex: 'Welches Croissant möchtest du?', exEn: 'Which croissant would you like?', exHi: 'Tumhein kaunsa croissant chahiye?' },
    { de: 'Ding', art: 'das', gender: 'n', plural: 'Dinge', pos: 'noun', level: 'B1', en: 'thing', hi: 'चीज़', ex: 'Das ist ein wichtiges Ding.', exEn: 'That\'s an important thing.', exHi: 'Yeh ek mahatvapurn cheez hai.' },
    { de: 'Einwohnermeldeamt', art: 'das', gender: 'n', plural: 'Einwohnermeldeämter', pos: 'noun', level: 'B1', en: 'registration office', hi: 'निवासी पंजीकरण कार्यालय', ex: 'Er muss zum Einwohnermeldeamt.', exEn: 'He has to go to the registration office.', exHi: 'Use registration office jaana hai.' },
    { de: 'Elterncafé', art: 'das', gender: 'n', plural: 'Elterncafés', pos: 'noun', level: 'B1', en: 'parent coffee shop', hi: 'माता-पिता कैफ़े', ex: 'Das Elterncafé trifft sich freitags.', exEn: 'The parent coffee shop meets on Fridays.', exHi: 'Parent café shukravaar ko milta hai.' },
    { de: 'Gewürz', art: 'das', gender: 'n', plural: 'Gewürze', pos: 'noun', level: 'B1', en: 'spice', hi: 'मसाला', ex: 'Wir würzen das Fleisch mit Gewürzen.', exEn: 'We season the meat with spices.', exHi: 'Hum maans ko masalon se banaate hain.' },
    { de: 'Hackfleisch', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'ground meat', hi: 'कीमा', ex: 'Wir kochen mit Hackfleisch.', exEn: 'We cook with ground meat.', exHi: 'Hum keeme se khaana banaate hain.' },
    { de: 'Hochwasser', art: 'das', gender: 'n', plural: 'Hochwasser', pos: 'noun', level: 'B1', en: 'flood', hi: 'बाढ़', ex: 'Das Hochwasser hat viel Schaden verursacht.', exEn: 'The flood caused a lot of damage.', exHi: 'Baadh ne bahut nuksaan pahunchaaya.' },
    { de: 'Hörnchen', art: 'das', gender: 'n', plural: 'Hörnchen', pos: 'noun', level: 'B1', en: 'croissant', hi: 'क्रॉइसां', ex: 'Ich nehme das Hörnchen mit Konfitüre.', exEn: 'I\'ll take the croissant with jam.', exHi: 'Main jaam wala croissant lunga.' },
    { de: 'Hühnchen', art: 'das', gender: 'n', plural: 'Hühnchen', pos: 'noun', level: 'B1', en: 'chicken (dish)', hi: 'चिकन', ex: 'Wir essen Hühnchen mit Gewürzen.', exEn: 'We eat chicken with spices.', exHi: 'Hum masaledaar chicken khaate hain.' },
    { de: 'Milchprodukt', art: 'das', gender: 'n', plural: 'Milchprodukte', pos: 'noun', level: 'B1', en: 'milk product', hi: 'डेयरी उत्पाद', ex: 'Sie kauft frische Milchprodukte.', exEn: 'She buys fresh milk products.', exHi: 'Woh taaza dairy utpaad khareedti hai.' },
    { de: 'Sommerprojekt', art: 'das', gender: 'n', plural: 'Sommerprojekte', pos: 'noun', level: 'B1', en: 'summer project', hi: 'समर प्रोजेक्ट', ex: 'Ich bin die Patin für ein Sommerprojekt.', exEn: 'I\'m the godmother for a summer project.', exHi: 'Main ek summer project ki godmother hoon.' },
    { de: 'Vereinsmitglied', art: 'das', gender: 'n', plural: 'Vereinsmitglieder', pos: 'noun', level: 'B1', en: 'club member', hi: 'क्लब सदस्य', ex: 'Nur Vereinsmitglieder dürfen hinein.', exEn: 'Only club members may enter.', exHi: 'Sirf club sadasya hi andar jaa sakte hain.' },
    { de: 'Vorhaben', art: 'das', gender: 'n', plural: 'Vorhaben', pos: 'noun', level: 'B1', en: 'scheme, plan', hi: 'योजना', ex: 'Wer finanziert so ein Vorhaben?', exEn: 'Who finances such a scheme?', exHi: 'Aisi yojana ko kaun vittaposhit karta hai?' },
    { de: 'Zusammenleben', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'communal life', hi: 'सामुदायिक जीवन', ex: 'Das Zusammenleben in der Stadt ist harmonisch.', exEn: 'Communal life in the city is harmonious.', exHi: 'Shahar mein saamudaayik jeevan sauhaardapoorn hai.' },
    { de: 'Behördengang', art: 'der', gender: 'm', plural: 'Behördengänge', pos: 'noun', level: 'B1', en: 'visit to the authorities', hi: 'प्रशासनिक कार्यालय जाना', ex: 'Der Behördengang war anstrengend.', exEn: 'The visit to the authorities was tiring.', exHi: 'Prashaasanik karyaalay jaana thakaau tha.' },
    { de: 'Organisator', art: 'der', gender: 'm', plural: 'Organisatoren', pos: 'noun', level: 'B1', en: 'organiser (male)', hi: 'आयोजक', ex: 'Suchst du noch einen Organisator?', exEn: 'Are you still looking for an organiser?', exHi: 'Kya tumhein abhi bhi ek aayojak chahiye?' },
    { de: 'Pate', art: 'der', gender: 'm', plural: 'Paten', pos: 'noun', level: 'B1', en: 'godfather', hi: 'गॉडफादर', ex: 'Er ist der Pate für das Projekt.', exEn: 'He\'s the godfather for the project.', exHi: 'Woh project ka godfather hai.' },
    { de: 'Pudding', art: 'der', gender: 'm', plural: 'Puddings', pos: 'noun', level: 'B1', en: 'pudding', hi: 'पुडिंग', ex: 'Der Pudding schmeckt nach Vanille.', exEn: 'The pudding tastes of vanilla.', exHi: 'Pudding vanilla jaisa lagta hai.' },
    { de: 'Quark', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'curd, quark', hi: 'दही जैसा उत्पाद', ex: 'Ich esse gern Quark mit Obst.', exEn: 'I like eating quark with fruit.', exHi: 'Mujhe fruit ke saath quark khaana pasand hai.' },
    { de: 'Sitz', art: 'der', gender: 'm', plural: 'Sitze', pos: 'noun', level: 'B1', en: 'seat', hi: 'सीट', ex: 'Der Verein hat seinen Sitz in Berlin.', exEn: 'The club has its seat in Berlin.', exHi: 'Club ka mukhyaalay Berlin mein hai.' },
    { de: 'Weblog', art: 'der', gender: 'm', plural: 'Weblogs', pos: 'noun', level: 'B1', en: 'web blog', hi: 'वेब ब्लॉग', ex: 'Die Online-Redaktion schreibt den Weblog.', exEn: 'The online editors write the blog.', exHi: 'Online sampaadak mandal blog likhta hai.' },
    { de: 'Ketchup', art: 'der/das', gender: 'm/n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'ketchup', hi: 'केचप', ex: 'Möchtest du Ketchup zum Hühnchen?', exEn: 'Would you like ketchup with the chicken?', exHi: 'Kya tumhein chicken ke saath ketchup chahiye?' },
    { de: 'Anfrage', art: 'die', gender: 'f', plural: 'Anfragen', pos: 'noun', level: 'B1', en: 'enquiry', hi: 'पूछताछ', ex: 'Wir haben eine Anfrage bekommen.', exEn: 'We received an enquiry.', exHi: 'Humein ek poochtaachh mili.' },
    { de: 'Apfelsine', art: 'die', gender: 'f', plural: 'Apfelsinen', pos: 'noun', level: 'B1', en: 'orange', hi: 'संतरा', ex: 'Sie kauft Apfelsinen und Aprikosen.', exEn: 'She buys oranges and apricots.', exHi: 'Woh santre aur khumaani khareedti hai.' },
    { de: 'Aprikose', art: 'die', gender: 'f', plural: 'Aprikosen', pos: 'noun', level: 'B1', en: 'apricot', hi: 'खुमानी', ex: 'Die Aprikose schmeckt süß.', exEn: 'The apricot tastes sweet.', exHi: 'Khumaani meethi lagti hai.' },
    { de: 'Arbeitssuche', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'job search', hi: 'नौकरी खोज', ex: 'Die Arbeitssuche dauert oft lange.', exEn: 'The job search often takes a long time.', exHi: 'Naukri ki khoj aksar lambi hoti hai.' },
    { de: 'Ausgabestelle', art: 'die', gender: 'f', plural: 'Ausgabestellen', pos: 'noun', level: 'B1', en: 'issuing office', hi: 'वितरण केंद्र', ex: 'Die Ausgabestelle ist im Erdgeschoss.', exEn: 'The issuing office is on the ground floor.', exHi: 'Vitaran kendra ground floor par hai.' },
    { de: 'Auswahl', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'selection (eine Auswahl treffen: to make a selection)', hi: 'चयन', ex: 'Wir müssen eine Auswahl treffen.', exEn: 'We have to make a selection.', exHi: 'Humein ek chayan karna hai.' },
    { de: 'Berufsfeuerwehr', art: 'die', gender: 'f', plural: 'Berufsfeuerwehren', pos: 'noun', level: 'B1', en: 'professional fire brigade', hi: 'पेशेवर दमकल विभाग', ex: 'Die Berufsfeuerwehr kam schnell.', exEn: 'The professional fire brigade arrived quickly.', exHi: 'Peshevar damkal vibhaag jaldi aaya.' },
    { de: 'Erste Hilfe', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'first aid', hi: 'प्राथमिक चिकित्सा', ex: 'Ich bilde die Kinder in Erster Hilfe aus.', exEn: 'I train the children in first aid.', exHi: 'Main bacchon ko first aid mein prashikshit karti hoon.' },
    { de: 'Feuerwehrleute', pos: 'noun', level: 'B1', en: 'firefighters (plural)', hi: 'दमकलकर्मी', ex: 'Die Feuerwehrleute wurden alarmiert.', exEn: 'The firefighters were alerted.', exHi: 'Fire fighters ko saavdhaan kiya gaya.' },
    { de: 'Jugendgruppe', art: 'die', gender: 'f', plural: 'Jugendgruppen', pos: 'noun', level: 'B1', en: 'youth group', hi: 'युवा समूह', ex: 'Ich bin verantwortlich für die Jugendgruppe.', exEn: 'I\'m responsible for the youth group.', exHi: 'Main yuva samooh ke liye zimmedaar hoon.' },
    { de: 'Konfitüre', art: 'die', gender: 'f', plural: 'Konfitüren', pos: 'noun', level: 'B1', en: 'jam', hi: 'जैम', ex: 'Hast du auch Konfitüre dabei?', exEn: 'Do you have jam with you too?', exHi: 'Kya tumhaare paas jaam bhi hai?' },
    { de: 'Margarine', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'margarine', hi: 'मार्जरीन', ex: 'Möchtest du auch Margarine?', exEn: 'Would you like margarine too?', exHi: 'Kya tumhein margarine bhi chahiye?' },
    { de: 'Mühe', art: 'die', gender: 'f', plural: 'Mühen', pos: 'noun', level: 'B1', en: 'effort', hi: 'मेहनत', ex: 'Das kostet viel Mühe.', exEn: 'That takes a lot of effort.', exHi: 'Usmein bahut mehnat lagti hai.' },
    { de: 'Nachhilfe', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'tutoring', hi: 'ट्यूशन', ex: 'Sie gibt Nachhilfe für Mathematik.', exEn: 'She gives tutoring for maths.', exHi: 'Woh maths ke liye tuition deti hai.' },
    { de: 'Nachtzeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'nighttime', hi: 'रात का समय', ex: 'Zur Nachtzeit ist es ruhig.', exEn: 'At nighttime it\'s quiet.', exHi: 'Raat ke samay shaanti hoti hai.' },
    { de: 'Not', art: 'die', gender: 'f', plural: 'Nöte', pos: 'noun', level: 'B1', en: 'need, distress', hi: 'ज़रूरत', ex: 'Wir helfen Menschen in Not.', exEn: 'We help people in need.', exHi: 'Hum zaroormand logon ki madad karte hain.' },
    { de: 'Orange', art: 'die', gender: 'f', plural: 'Orangen', pos: 'noun', level: 'B1', en: 'orange', hi: 'संतरा', ex: 'Ich esse gern Orangen.', exEn: 'I like eating oranges.', exHi: 'Mujhe santre khaana pasand hai.' },
    { de: 'Organisatorin', art: 'die', gender: 'f', plural: 'Organisatorinnen', pos: 'noun', level: 'B1', en: 'organiser (female)', hi: 'आयोजक (महिला)', ex: 'Sie ist die Organisatorin des Projekts.', exEn: 'She is the organiser of the project.', exHi: 'Woh project ki aayojak hai.' },
    { de: 'Patin', art: 'die', gender: 'f', plural: 'Patinnen', pos: 'noun', level: 'B1', en: 'godmother', hi: 'गॉडमदर', ex: 'Ich bin die Patin für ein Sommerprojekt.', exEn: 'I\'m the godmother for a summer project.', exHi: 'Main ek summer project ki godmother hoon.' },
    { de: 'Pflaume', art: 'die', gender: 'f', plural: 'Pflaumen', pos: 'noun', level: 'B1', en: 'plum', hi: 'आलूबुखारा', ex: 'Die Pflaume schmeckt süß.', exEn: 'The plum tastes sweet.', exHi: 'Aaloobukhaara meetha lagta hai.' },
    { de: 'Schlagsahne', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'whipped cream', hi: 'व्हिप्ड क्रीम', ex: 'Der Pudding kommt mit Schlagsahne.', exEn: 'The pudding comes with whipped cream.', exHi: 'Pudding whipped cream ke saath aata hai.' },
    { de: 'Soße', art: 'die', gender: 'f', plural: 'Soßen', pos: 'noun', level: 'B1', en: 'sauce', hi: 'सॉस', ex: 'Die Soße schmeckt würzig.', exEn: 'The sauce tastes spicy.', exHi: 'Sauce masaledaar lagti hai.' },
    { de: 'Spielstadt', art: 'die', gender: 'f', plural: 'Spielstädte', pos: 'noun', level: 'B1', en: 'play city (children\'s activity project)', hi: 'प्ले सिटी', ex: 'Das Sommerprojekt heißt „Spielstadt".', exEn: 'The summer project is called "Spielstadt".', exHi: 'Summer project ka naam "Spielstadt" hai.' },
    { de: 'Straßenlampe', art: 'die', gender: 'f', plural: 'Straßenlampen', pos: 'noun', level: 'B1', en: 'street lamp', hi: 'सड़क बत्ती', ex: 'Die Straßenlampe leuchtet nachts.', exEn: 'The street lamp shines at night.', exHi: 'Sadak batti raat mein chamakti hai.' },
    { de: 'Vollmilch', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'whole milk', hi: 'पूरा दूध', ex: 'Möchtest du auch Vollmilch?', exEn: 'Would you like whole milk too?', exHi: 'Kya tumhein poora doodh bhi chahiye?' },
    { de: 'Zone', art: 'die', gender: 'f', plural: 'Zonen', pos: 'noun', level: 'B1', en: 'zone', hi: 'क्षेत्र', ex: 'Das ist eine elternfreie Zone.', exEn: 'That\'s a parent-free zone.', exHi: 'Yeh ek maata-pita rahit zone hai.' },
    { de: 'Zwetschge', pos: 'noun', level: 'B1', en: 'plum', hi: 'आलूबुखारा', ex: 'Die Zwetschge schmeckt süß.', exEn: 'The plum tastes sweet.', exHi: 'Aaloobukhaara meetha lagta hai.' },
    { de: 'Aktiv', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'active voice', hi: 'सक्रिय वाच्य', ex: 'Das Aktiv betont, wer handelt.', exEn: 'The active voice emphasizes who acts.', exHi: 'Active voice zor deta hai ki kaun karta hai.' },
    { de: 'Kontrastwort', art: 'das', gender: 'n', plural: 'Kontrastwörter', pos: 'noun', level: 'B1', en: 'contrast word', hi: 'विरोधाभासी शब्द', ex: '"Aber" ist ein Kontrastwort.', exEn: '"Aber" is a contrast word.', exHi: '"Aber" ek viroddhaabhaasi shabd hai.' },
    { de: 'Passiv', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'passive voice', hi: 'निष्क्रिय वाच्य', ex: 'Das Passiv betont, was passiert.', exEn: 'The passive voice emphasizes what happens.', exHi: 'Passive voice zor deta hai ki kya hota hai.' },
    { de: 'Kontrastakzent', art: 'der', gender: 'm', plural: 'Kontrastakzente', pos: 'noun', level: 'B1', en: 'contrast emphasis (stress pattern)', hi: 'विरोधाभासी बल', ex: 'Der Kontrastakzent liegt auf dem letzten Wort.', exEn: 'The contrast emphasis falls on the last word.', exHi: 'Vipreet zor aakhri shabd par hota hai.' },
    { de: 'Passivsatz', art: 'der', gender: 'm', plural: 'Passivsätze', pos: 'noun', level: 'B1', en: 'passive sentence', hi: 'निष्क्रिय वाक्य', ex: 'Dieser Passivsatz ist korrekt.', exEn: 'This passive sentence is correct.', exHi: 'Yeh passive vaakya sahi hai.' },
    { de: 'Brezel', art: 'die', gender: 'f', plural: 'Brezeln', pos: 'noun', level: 'B1', en: 'pretzel', hi: 'प्रेट्ज़ेल', ex: 'Die Brezel schmeckt salzig.', exEn: 'The pretzel tastes salty.', exHi: 'Pretzel namkeen lagta hai.' },
    { de: 'Partikel', art: 'die', gender: 'f', plural: 'Partikeln', pos: 'noun', level: 'B1', en: 'particle', hi: 'कण', ex: '"Doch" ist eine Partikel.', exEn: '"Doch" is a particle.', exHi: '"Doch" ek particle hai.' },
    { de: 'Passivform', art: 'die', gender: 'f', plural: 'Passivformen', pos: 'noun', level: 'B1', en: 'passive form', hi: 'निष्क्रिय रूप', ex: 'Die Passivform wird hier geübt.', exEn: 'The passive form is practised here.', exHi: 'Yahaan passive form ka abhyaas hota hai.' },
    { de: 'Semmel', art: 'die', gender: 'f', plural: 'Semmeln', pos: 'noun', level: 'B1', en: 'bread roll', hi: 'ब्रेड रोल', ex: 'Ich kaufe zwei Semmeln.', exEn: 'I buy two bread rolls.', exHi: 'Main do bread roll khareedta hoon.' },
    { de: 'gell', pos: 'adverb', level: 'B1', en: 'right (tag question, regional)', hi: 'है ना', ex: 'Das ist toll, gell?', exEn: 'That\'s great, right?', exHi: 'Yeh badhiya hai, hai na?' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Artikelwörter als Pronomen?',
      body: [ 'When a noun is already known, article words step in and replace it — no need to repeat the noun.' ],
      table: {
        head: ['With noun', 'As pronoun'],
        rows: [
          ['<span class="de">Ich nehme den roten Pullover.</span>', '<span class="de">Welchen Pullover? — Ich nehme den.</span>']
        ]
      },
      hinglish: 'Jab noun pehle se pata hai, article words uski jagah le lete hain — noun repeat karne ki zaroorat nahi.'
    },
    {
      title: 'Bestimmter Artikel als Pronomen',
      body: [ 'der, die, das, den, dem, denen — standing alone once the noun is known. Note the plural Dativ is <b>denen</b>, not den, and the Genitiv pronoun is <b>dessen/deren</b>, never des.' ],
      table: {
        head: ['Question', 'Answer with pronoun'],
        rows: [
          ['<span class="de">Welches Buch möchtest du?</span>', '<span class="de">Ich nehme das.</span>'],
          ['<span class="de">Welche Tasche gefällt dir?</span>', '<span class="de">Die gefällt mir besser.</span>']
        ]
      },
      hinglish: 'Jab noun pehle se pata ho, to <b>der/die/das/den/dem</b> akele khade ho sakte hain. Do cheezein dhyaan mein rakho \u2014 plural Dativ mein <b>denen</b> aata hai (den nahi), aur Genitiv mein <b>dessen</b> ya <b>deren</b>, kabhi <b>des</b> nahi.'
    },
    {
      title: 'Unbestimmter Artikel als Pronomen',
      body: [ 'einer, eine, eines, einen, einem — the noun disappears once it\'s clear from context.' ],
      table: {
        head: ['Question', 'Answer with pronoun'],
        rows: [
          ['<span class="de">Hast du einen Stift?</span>', '<span class="de">Ja, ich habe einen.</span>'],
          ['<span class="de">Suchst du ein Hotel?</span>', '<span class="de">Ja, ich kenne eines.</span>']
        ]
      },
      hinglish: 'einer/eine/eines/einen/einem — noun gayab ho jaata hai jab context se saaf ho.'
    },
    {
      title: 'Possessivartikel als Pronomen',
      body: [ 'meiner, deiner, seiner, ihrer, unserer, eurer (or meins/deins for neuter Nom./Akk.) — standing alone as possessive pronouns.' ],
      table: {
        head: ['Question', 'Answer with pronoun'],
        rows: [
          ['<span class="de">Ist das dein Laptop?</span>', '<span class="de">Nein, meiner ist hier.</span>'],
          ['<span class="de">Meine Wohnung ist klein.</span>', '<span class="de">Deine ist größer.</span>']
        ]
      },
      hinglish: 'meiner/deiner/seiner/ihrer/unserer/eurer (ya meins/deins) — akele khade possessive pronoun ke roop mein.'
    },
    {
      title: 'Demonstrativartikel als Pronomen',
      body: [ 'dieser/diese/dieses and jener/jene/jenes — standing alone, pointing at something already mentioned or visible.' ],
      table: {
        head: ['Question', 'Answer with pronoun'],
        rows: [
          ['<span class="de">Welches Buch möchtest du?</span>', '<span class="de">Dieses.</span>'],
          ['<span class="de">Welche Jacke gefällt dir?</span>', '<span class="de">Diese hier.</span>']
        ]
      },
      hinglish: 'dieser/diese/dieses aur jener/jene/jenes — akele khade, kisi pehle se mentioned cheez ki taraf ishaara karte hue.'
    },
    {
      title: 'Artikel vs Pronomen — Vergleich',
      body: [ 'The same word can be an article (before a noun) or a pronoun (standing alone).' ],
      table: {
        head: ['Article', 'Pronoun'],
        rows: [
          ['<span class="de">der Mann</span>', '<span class="de">der</span>'],
          ['<span class="de">eine Tasche</span>', '<span class="de">eine</span>'],
          ['<span class="de">mein Auto</span>', '<span class="de">meins</span>']
        ]
      },
      hinglish: 'Wahi shabd article (noun se pehle) ya pronoun (akele) ho sakta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from forgetting the pronoun ending, or repeating the noun unnecessarily.' ],
      mistakes: [
        { wrong: 'Ich nehme der.', right: 'Ich nehme den. (Akkusativ)', why: 'The pronoun must match the case of what it replaces — den for masculine Akkusativ.' },
        { wrong: 'Ich habe ein.', right: 'Ich habe einen. (masc. Akk.)', why: 'The indefinite pronoun needs its full ending (einen), never the bare "ein".' },
        { wrong: 'Mein ist größer.', right: 'Meiner ist größer. (masc.) / Meins ist größer. (neut.)', why: 'Possessive pronouns need their own ending — never bare "mein".' },
        { wrong: 'Ich möchte diese Auto.', right: 'Ich möchte dieses.', why: 'Once the noun (Auto) is known, don\'t repeat it — use dieses alone, matching neuter.' },
        { wrong: 'Ich nehme dene.', right: 'Ich nehme die. (fem./plural) / den. (masc.)', why: '"dene" isn\'t a real form — the correct pronoun endings are die/den/das/dem.' }
      ],
      hinglish: 'Yeh galtiyaan pronoun ending bhool jaane ya noun ko zaroorat se zyaada repeat karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Article pronouns appear constantly in Goethe B1 shopping dialogues, comparisons, and everyday conversations.' ],
      note: 'Quick check: is the noun already mentioned? Don\'t repeat it — use the matching article word (definite, indefinite, possessive, or demonstrative) as a pronoun instead.',
      hinglish: 'Goethe B1 shopping dialogues, comparisons aur roz-marra ki baatcheet mein article pronouns lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Beim Bäcker und in der Bürgerversammlung',
    titleEn: 'At the bakery and at the town meeting',
    tokens: [
      { w: 'Welches', role: 'r-question', en: 'which (neut.)', hi: 'कौन सा', type: 'Question word' },
      { w: 'Hörnchen', role: 'plain', en: 'croissant', hi: 'क्रॉइसां', type: 'Noun · neut.', why: 'das Hörnchen (this chapter).' },
      { w: 'möchten', role: 'plain', en: 'would you like (Satzende)', hi: 'चाहेंगे (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', type: 'Pronoun · formal' },
      { w: '?', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'nehme', role: 'plain', en: 'take', hi: 'लेता हूँ', type: 'Verb · nehmen' },
      { w: 'das', role: 'plain', en: 'that one (Artikelpronomen)', hi: 'वह', type: 'Artikelwort als Pronomen · Nom./Akk.', why: 'das replaces the already-mentioned "Hörnchen".' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'Konfitüre', role: 'plain', en: 'jam', hi: 'जैम', type: 'Noun · fem.', why: 'die Konfitüre (this chapter).' },
      { w: '.', plain: true },
      { w: 'Möchten', role: 'plain', en: 'would you like', hi: 'चाहेंगे', type: 'Verb · Modalverb' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', type: 'Pronoun · formal' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'Margarine', role: 'plain', en: 'margarine', hi: 'मार्जरीन', type: 'Noun · fem.', why: 'die Margarine (this chapter).' },
      { w: 'oder', role: 'plain', en: 'or', hi: 'या', type: 'Konjunktion' },
      { w: 'Quark', role: 'plain', en: 'quark (Satzende)', hi: 'दही जैसा उत्पाद (Satzende)', type: 'Noun · masc. (Satzende)', why: 'der Quark (Sg.) (this chapter).' },
      { w: '?', plain: true },
      { w: 'Nein', role: 'plain', en: 'no', hi: 'नहीं', type: 'Answer' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'habe', role: 'plain', en: 'have', hi: 'है', type: 'Verb · haben' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'some (Artikelpronomen)', hi: 'एक', type: 'Artikelwort als Pronomen · Akk.', why: 'eine replaces "Margarine" or "Konfitüre" — already known.' },
      { w: '.', plain: true },
      { w: 'Später', role: 'plain', en: 'later', hi: 'बाद में', type: 'Adverb' },
      { w: 'geht', role: 'plain', en: 'goes', hi: 'जाती है', type: 'Verb · gehen' },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'अन्ना', type: 'Name' },
      { w: 'zur', role: 'plain', en: 'to the', hi: 'में', type: 'Contraction · zu der' },
      { w: 'Bürgerversammlung', role: 'plain', en: 'town meeting', hi: 'नागरिक सभा', type: 'Noun · fem.', why: 'die Bürgerversammlung (this chapter).' },
      { w: ',', plain: true },
      { w: 'weil', role: 'r-connector', en: 'because', hi: 'क्योंकि', type: 'Konjunktion · weil', why: 'weil (recycled — Ch.2).' },
      { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'ehrenamtlich', role: 'plain', en: 'voluntarily', hi: 'स्वैच्छिक रूप से', type: 'Adjective/Adverb', why: 'ehrenamtlich (this chapter): voluntary.' },
      { w: 'verantwortlich', role: 'plain', en: 'responsible (Satzende)', hi: 'ज़िम्मेदार (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Jugendgruppe', role: 'plain', en: 'youth group (Satzende)', hi: 'युवा समूह (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Jugendgruppe (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Jemand', role: 'plain', en: 'someone', hi: 'कोई', type: 'Indefinitpronomen' },
      { w: 'fragt', role: 'plain', en: 'asks (Satzende)', hi: 'पूछता है (Satzende)', type: 'Verb · fragen (Satzende)' },
      { w: ':', plain: true },
      { w: '„Ist', role: 'plain', en: '"is', hi: '"क्या है', type: 'Verb · sein' },
      { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'dein', role: 'plain', en: 'your (masc.)', hi: 'तुम्हारा', type: 'Possessivartikel' },
      { w: 'Sitz', role: 'plain', en: 'seat', hi: 'सीट', type: 'Noun · masc.', why: 'der Sitz (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Vorstand', role: 'plain', en: 'board (Satzende)', hi: 'बोर्ड (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '?"', plain: true },
      { w: 'Anna', role: 'plain', en: 'Anna', hi: 'अन्ना', type: 'Name' },
      { w: 'antwortet', role: 'plain', en: 'answers (Satzende)', hi: 'जवाब देती है (Satzende)', type: 'Verb · antworten (Satzende)' },
      { w: ':', plain: true },
      { w: '„Nein', role: 'plain', en: '"no', hi: '"नहीं', type: 'Answer' },
      { w: ',', plain: true },
      { w: 'meiner', role: 'plain', en: 'mine (Possessivpronomen)', hi: 'मेरा', type: 'Artikelwort als Pronomen · Possessiv', why: 'meiner — possessive article word standing alone (masculine, matching "Sitz").' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'ein', role: 'plain', en: 'a (masc. nom.)', hi: 'एक', type: 'Article' },
      { w: 'anderer', role: 'plain', en: 'different (Satzende)', hi: 'अलग (Satzende)', type: 'Adjective · gemischt · Nom. (Satzende)' },
      { w: '."', plain: true }
    ],
    translation: 'Which croissant would you like? I\'ll take that one with jam. Would you like margarine or quark too? No, I already have some. Later Anna goes to the town meeting, because she\'s voluntarily responsible for the youth group. Someone asks: "Is that your seat on the board?" Anna answers: "No, mine is a different one."'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_030_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frauke, welchen Kuchen nehmen wir für die Feier? Diesen oder den daneben?', en: 'Frauke, which cake do we take for the party? This one or the one next to it?' },
      { id: 'B1_030_L002', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Den daneben, der sieht frischer aus als dieser hier.', en: 'The one next to it, it looks fresher than this one here.' },
      { id: 'B1_030_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und welche Kerzen nehmen wir? Diese roten oder die goldenen?', en: 'And which candles do we take? These red ones or the golden ones?' },
      { id: 'B1_030_L004', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die goldenen, die passen besser zu dem Kuchen.', en: 'The golden ones, they match the cake better.' }
    ],
    transcript: 'Frauke, welchen Kuchen nehmen wir für die Feier? Diesen oder den daneben? Den daneben, der sieht frischer aus als dieser hier. Und welche Kerzen nehmen wir? Diese roten oder die goldenen? Die goldenen, die passen besser zu dem Kuchen.',
    translation: 'Frauke, which cake do we take for the party? This one or the one next to it? The one next to it, it looks fresher than this one here. And which candles do we take? These red ones or the golden ones? The golden ones, they match the cake better.',
    tokens: [
      { w: 'Frauke' },
      { w: ',', plain: true },
      { w: 'welchen' },
      { w: 'Kuchen' },
      { w: 'nehmen' },
      { w: 'wir' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Feier' },
      { w: '?', plain: true },
      { w: 'Diesen' },
      { w: 'oder' },
      { w: 'den' },
      { w: 'daneben' },
      { w: '?', plain: true },
      { w: 'Den' },
      { w: 'daneben' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'sieht' },
      { w: 'frischer' },
      { w: 'aus' },
      { w: 'als' },
      { w: 'dieser' },
      { w: 'hier' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'welche' },
      { w: 'Kerzen' },
      { w: 'nehmen' },
      { w: 'wir' },
      { w: '?', plain: true },
      { w: 'Diese' },
      { w: 'roten' },
      { w: 'oder' },
      { w: 'die' },
      { w: 'goldenen' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'goldenen' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'passen' },
      { w: 'besser' },
      { w: 'zu' },
      { w: 'dem' },
      { w: 'Kuchen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welchen Kuchen bevorzugt Frauke?', qEn: 'Which cake does Frauke prefer?', options: ['diesen hier', 'den daneben', 'keinen', 'beide'], optionsEn: ['this one here', 'the one next to it', 'none', 'both'], answer: 1,
        explain: '"Den daneben, der sieht frischer aus."' },
      { q: 'Welche Kerzen wählen sie?', qEn: 'Which candles do they choose?', options: ['die roten', 'die goldenen', 'keine', 'beide'], optionsEn: ['the red ones', 'the golden ones', 'none', 'both'], answer: 1,
        explain: '"Die goldenen, die passen besser."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt, welchen Kuchen ihr nehmt.", taskEn: "Your friend asks which cake you'll take.", de: "Den daneben, der sieht frischer aus als dieser hier.", en: "The one next to it, that looks fresher than this one." },
    { task: "Sie fragt, welche Kerzen ihr nehmt.", taskEn: "She asks which candles you'll take.", de: "Diese roten, die anderen sind zu klein.", en: "These red ones, the others are too small." },
    { task: "Ein Kollege fragt, welches Angebot besser ist.", taskEn: "A colleague asks which offer is better.", de: "Dieses ist günstiger, aber jenes hält länger.", en: "This one is cheaper, but that one lasts longer." },
    { task: "Eine Nachbarin fragt, welches Handy du empfiehlst.", taskEn: "A neighbour asks which phone you recommend.", de: "Nimm dieses, meins ist auch von der Marke.", en: "Take this one, mine is the same brand too." },
    { task: "Ein Freund fragt nach eurer Organisation.", taskEn: "A friend asks about your organisation.", de: "Unsere ist ehrenamtlich, seine ist bundesweit.", en: "Ours is voluntary, his is nationwide." },
    { task: "Rollenspiel: Ihr wählt zusammen die Lieferung aus.", taskEn: "Role-play: you choose the delivery together.", de: "Nehmen wir diese oder jene? — Diese, denn die ist billiger als jene.", en: "Shall we take this one or that one? — This one, because it's cheaper than that one." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short shopping or comparison dialogue (six to eight lines) — using definite, indefinite, possessive, and demonstrative article pronouns at least once each, never repeating a noun once it\'s already been mentioned.',
    starters: ['Welches …? — Ich nehme …', 'Hast du einen/eine/ein …? — Ja, ich habe …', 'Ist das dein/deine …? — Meiner/Meine/Meins …', 'Dieses/Diese hier.'],
    placeholder: 'Welches Hörnchen möchtest du? Ich nehme das. Hast du eine Tasche? Ja, ich habe schon eine …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Welches Buch möchtest du? Ich nehme ___."',
      options: ['das', 'der', 'die'],
      answer: 0,
      explain: 'Buch is neuter, so the pronoun is das.'
    },
    gap: {
      sentence: ['Hast du einen Stift? Ja, ich habe ', '.'],
      gaps: [ { answer: 'einen', accepts: ['einen'] } ],
      explain: 'Indefinite article as pronoun: einen (masc. Akkusativ).'
    },
    match: {
      q: 'Match each article word type to its pronoun example.',
      pairs: [
        { noun: 'Bestimmter Artikel', art: 'das (Ich nehme das.)' },
        { noun: 'Unbestimmter Artikel', art: 'einen (Ich habe einen.)' },
        { noun: 'Possessivartikel', art: 'meiner (Meiner ist hier.)' },
        { noun: 'Demonstrativartikel', art: 'dieses (Ich nehme dieses.)' }
      ]
    },
    builder: {
      target: 'Build: "No, mine is here."',
      bank: ['Nein', ',', 'meiner', 'ist', 'hier', '.'],
      answer: ['Nein', ',', 'meiner', 'ist', 'hier', '.'],
      roles: { 'meiner': 'r-object' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich möchte diese Auto.',
      right: 'Ich möchte dieses.',
      explain: 'Once the noun (Auto) is already known, don\'t repeat it — use dieses alone, matching neuter.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Welche Tasche gefällt dir? ___ gefällt mir besser."', options: ['Die', 'Der', 'Das'], answer: 0,
      explain: 'Tasche is feminine, so the pronoun is die.' },
    { q: 'Complete: "Suchst du ein Hotel? Ja, ich kenne ___."', options: ['ein', 'eines', 'einen'], answer: 1,
      explain: 'Hotel is neuter, so the indefinite pronoun is eines.' },
    { q: 'Complete: "Ist das dein Auto? Nein, ___ ist dort."', options: ['mein', 'meiner', 'meins'], answer: 2,
      explain: 'Auto is neuter, so the possessive pronoun is meins.' },
    { q: 'Which sentence uses a demonstrative pronoun correctly?', options: ['Ich nehme diese Auto.', 'Ich nehme dieses.', 'Ich nehme diese.'], answer: 1,
      explain: 'Once "Auto" (neuter) is known, use dieses alone — never repeat the noun.' },
    { q: 'Which sentence contains an error?', options: ['Ich nehme das.', 'Ich habe ein.', 'Meiner ist hier.'], answer: 1,
      explain: 'The indefinite pronoun needs its full ending — it should be "Ich habe einen" (or eine/eines).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'Once a noun is already known, don\'t repeat it — replace it with the matching article word as a pronoun.' },
    { c: 'r-object', html: 'Definite (der/die/das…), indefinite (einer/eine/eines…), possessive (meiner/meins…), and demonstrative (dieser/jener…) article words can all stand alone as pronouns.' },
    { c: 'r-object', html: 'The pronoun must still match the gender and case of the noun it replaces — the ending never disappears, even though the noun does.' }
  ],
  revisionTips: [
    'Before answering a question, check: has the noun already been mentioned? If yes, don\'t repeat it.',
    'Practise the four pronoun families separately — definite, indefinite, possessive, demonstrative — until each feels automatic.',
    'Watch for possessive pronouns especially: meiner/meine/meins change with gender, just like the article they replace.'
  ]
};

window.CHAPTER = CHAPTER;
