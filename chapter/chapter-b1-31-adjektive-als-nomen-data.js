/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 31
   "Adjektive als Nomen" (nominalized adjectives) — der Alte,
   die Deutsche, das Gute, der/die Abgeordnete. Does NOT
   introduce Nominalisierung von Verben, whole-sentence
   nominalization, or B2 academic nominalization.
   IMPORTANT: dialogue uses ONLY Meike and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-31 list (39 items) — a
   politics/civics/democracy theme (Bundestag, Bundeskanzler,
   Demokratie, Gleichberechtigung, Abgeordnete, Migrant…) — an
   excellent natural fit, since German civics vocabulary is full
   of nominalized adjectives: der/die Abgeordnete, der/die
   Blinde, der Deutsche, die Minderheit.
============================================================ */
const CHAPTER = {
  id: 'b1-31-adjektive-als-nomen',
  phase: 'B1 · Phase 1',
  number: 31,
  title: 'Adjektive als Nomen',
  titleEn: 'Adjectives as nouns',
  description: 'When a noun is omitted, the adjective itself becomes the noun — capitalized, but still declined like an adjective: der Alte, die Deutsche, das Gute, der/die Abgeordnete.',
  xp: 290,
  time: 55,
  difficulty: 'Intermediate',
  nextChapter: { number: 32, title: 'Relativsätze mit was & wo', titleEn: 'Relative clauses with was & wo' , href: 'chapter-b1-32-relativsaetze-was-wo.html' },

  prevChapter: { number: 30, title: 'Artikelwörter als Pronomen', titleEn: 'Article words as pronouns', href: 'chapter-b1-30-artikelwoerter-als-pronomen.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The adjective <em>becomes the noun.</em>',
    intro: 'Meike and Timo watch election coverage and talk about their community — every adjective turning into a person: der Abgeordnete speaks about justice, die Deutsche fights for free speech, der Fremde runs for parliament.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear nominalized adjectives used naturally in one conversation'
    ],
    scene: 'Die Bundestagswahl im Fernsehen',
    femaleSpeakers: ['Meike'],
    dialogue: [
      { speaker: 'Meike', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Kandidatin', role: 'r-subject', en: 'candidate (f)', hi: 'उम्मीदवार', pron: 'kan-di-DAH-tin', type: 'Noun · fem. (adjective-as-noun)', why: 'nominalized adjective takes noun-like capitalization but adjective endings (this chapter).', ex: 'die Kandidatin', exEn: 'the candidate' },
        { w: 'spricht', role: 'r-verb', en: 'speaks', hi: 'बात करती है', pron: 'shprikht', type: 'Verb · sprechen' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'Gerechtigkeit', role: 'r-akkusativ', en: 'justice', hi: 'न्याय', pron: 'ge-REKH-tikh-kite', type: 'Noun · fem.', why: 'die Gerechtigkeit (this chapter).', ex: 'Gerechtigkeit ist wichtig.', exEn: 'Justice is important.' },
        { w: '.', plain: true }
      ], en: 'The candidate speaks today about justice.', hi: 'Ummeedwaar aaj nyaay ke baare mein baat karti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Abgeordnete', role: 'r-subject', en: 'member of parliament', hi: 'सांसद', pron: 'ap-ge-ORT-ne-tuh', type: 'Noun · masc. (adjective-as-noun)', why: 'der Abgeordnete (this chapter).', ex: 'der Abgeordnete spricht', exEn: 'the MP speaks' },
        { w: 'spricht', role: 'r-verb', en: 'speaks', hi: 'बात करता है', pron: 'shprikht', type: 'Verb · sprechen' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'Gleichberechtigung', role: 'r-akkusativ', en: 'equality', hi: 'समानता', pron: 'GLYKH-be-rekh-ti-gung', type: 'Noun · fem.', why: 'die Gleichberechtigung (this chapter).', ex: 'Gleichberechtigung für alle.', exEn: 'Equality for all.' },
        { w: '.', plain: true }
      ], en: 'And the MP speaks about equality.', hi: 'Aur saansad samaanta ke baare mein baat karta hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wichtig', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Demokratie', role: 'r-akkusativ', en: 'democracy', hi: 'लोकतंत्र', pron: 'day-mo-kra-TEE', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I find that important for democracy.', hi: 'Mujhe lagta hai yeh loktantra ke liye zaroori hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Kennst', role: 'r-verb', en: 'do you know', hi: 'जानती हो', pron: 'KENST', type: 'Verb · kennen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Migrantin', role: 'r-akkusativ', en: 'migrant (f)', hi: 'प्रवासी', pron: 'mi-GRAN-tin', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'who', hi: 'जो', pron: 'dee', type: 'Relativpronomen · nominative' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Bundestag', role: 'r-akkusativ', en: 'parliament', hi: 'संसद', pron: 'BUN-des-tahk', type: 'Noun · masc.' },
        { w: 'kandidiert', role: 'r-verb', en: 'runs', hi: 'चुनाव लड़ रही है', pron: 'kan-di-DEERT', type: 'Verb · kandidieren (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you know a migrant who is running for parliament?', hi: 'Kya tum ek pravaasi ko jaanti ho jo sansad ke liye chunaav lad rahi hai?' },
      { speaker: 'Meike', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'she', hi: 'वह', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'kämpft', role: 'r-verb', en: 'fights', hi: 'लड़ती है', pron: 'KEMPFT', type: 'Verb · kämpfen' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Meinungsfreiheit', role: 'r-akkusativ', en: 'freedom of speech', hi: 'अभिव्यक्ति की स्वतंत्रता', pron: 'MY-nungs-fry-hite', type: 'Noun · fem.', why: 'die Meinungsfreiheit (this chapter).', ex: 'Sie kämpft für Meinungsfreiheit.', exEn: 'She fights for freedom of speech.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Integration', role: 'r-akkusativ', en: 'integration', hi: 'एकीकरण', pron: 'in-te-gra-TSYON', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Yes, she fights for freedom of speech and integration.', hi: 'Haan, woh abhivyakti ki swatantrata aur ekikaran ke liye ladti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'mutige', role: 'r-akkusativ', en: 'brave', hi: 'साहसी', pron: 'MOO-ti-guh', type: 'Adjective' },
        { w: 'Kandidatin', role: 'r-akkusativ', en: 'candidate', hi: 'उम्मीदवार', pron: 'kan-di-DAH-tin', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'That is a brave candidate.', hi: 'Yeh ek saahasi ummeedwaar hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'When the noun is dropped, the adjective steps in and becomes the noun itself — capitalized, but still following adjective-ending rules: <span class="de">der <b>Alte</b></span> wohnt allein. <span class="de">Ein <b>Bekannter</b></span> hat angerufen. <span class="de">Der/die <b>Abgeordnete</b></span> spricht heute im Bundestag. The noun is gone; the adjective ending carries all the information.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVE ALS NOMEN (B1 level only, nominalized adjectives): an adjective standing in for an omitted noun, always capitalized, and still declined exactly like a regular adjective (weak after der/die/das, mixed after ein/kein/mein, strong with no article). Common examples: der/die Alte, der/die Deutsche, der/die Bekannte, der/die Fremde, der/die Kranke, der Arbeitslose, der Arme, der Reiche, das Gute, das Wichtigste, die Jugendlichen, der/die Abgeordnete, der/die Blinde. ' +
    'Do NOT expect verb nominalization, whole-sentence nominalization, or B2 academic nominalization — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Nominalized adjectives must always be capitalized (der Alte, never der alte, when standing alone as a noun).\n' +
    '- The ending still follows normal adjective declension rules (weak/mixed/strong) — it does NOT become a fixed noun ending.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Capitalization check:</b> one sentence on whether every nominalized adjective was correctly capitalized.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly capitalize and decline nominalized adjectives every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the declension table once — especially capitalization — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: is the noun missing? Then the adjective becomes the noun, capitalized.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Alte', role: 'plain' },
    { w: 'wohnt', role: 'plain' }, { w: 'allein', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the adjective replaces the noun, capitalized but still declined like an adjective.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meike and Timo watch election coverage full of nominalized adjectives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 39 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master formation, declension, and capitalization of nominalized adjectives.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about civic life, full of nominalized adjectives.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch nominalized adjectives in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe people and social groups using nominalized adjectives naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write short texts using nominalized adjectives correctly capitalized and declined.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill adjective-to-noun transformation, capitalization, and declension.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 290 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 39 chapter words — politics and civics vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Adjective-to-noun drills, capitalization practice, declension, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete nominalized-adjective reference — declension table, common Goethe examples, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'der Alte', text: 'Form nominalized adjectives from ordinary adjectives' },
    { de: 'das Wichtigste', text: 'Nominalize superlatives correctly (always neuter)' },
    { de: 'der/die Abgeordnete', text: 'Recognize common Goethe B1 nominalized adjectives' },
    { de: 'Großschreibung', text: 'Always capitalize a nominalized adjective' },
    { de: 'Deklination', text: 'Decline nominalized adjectives exactly like ordinary adjectives' }
  ],

  // ---------- Vocabulary (39 items — full chapter-31 upload list) ----------
  vocab: [
    { de: 'Recht', art: 'das', gender: 'n', plural: 'Rechte', pos: 'noun', level: 'B1', en: 'law, right', hi: 'अधिकार', ex: 'Jeder Arme soll die gleichen Rechte haben.', exEn: 'Every poor person should have the same rights.', exHi: 'Har gareeb vyakti ko samaan adhikaar hone chahiye.' },
    { de: 'Vorurteil', art: 'das', gender: 'n', plural: 'Vorurteile', pos: 'noun', level: 'B1', en: 'prejudice', hi: 'पूर्वाग्रह', ex: 'Sie kämpft gegen Vorurteile.', exEn: 'She fights against prejudices.', exHi: 'Woh poorvaagrah ke khilaaf ladti hai.' },
    { de: 'Respekt', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'respect', hi: 'सम्मान', ex: 'Respekt ist wichtig für die Demokratie.', exEn: 'Respect is important for democracy.', exHi: 'Loktantra ke liye samman mahatvapurn hai.' },
    { de: 'Wert', art: 'der', gender: 'm', plural: 'Werte', pos: 'noun', level: 'B1', en: 'value', hi: 'मूल्य', ex: 'Ehrlichkeit ist ihr wichtigster Wert.', exEn: 'Honesty is her most important value.', exHi: 'Imaandaari uska sabse mahatvapurn mulya hai.' },
    { de: 'Arbeitsstelle', art: 'die', gender: 'f', plural: 'Arbeitsstellen', pos: 'noun', level: 'B1', en: 'job', hi: 'नौकरी', ex: 'Der Arbeitslose sucht eine neue Arbeitsstelle.', exEn: 'The unemployed person is looking for a new job.', exHi: 'Berozgaar vyakti ek nayi naukri dhoondh raha hai.' },
    { de: 'Demokratie', art: 'die', gender: 'f', plural: 'Demokratien', pos: 'noun', level: 'B1', en: 'democracy', hi: 'लोकतंत्र', ex: 'Viele Deutsche engagieren sich für Demokratie.', exEn: 'Many Germans get involved for democracy.', exHi: 'Kai German log loktantra ke liye sakriya hote hain.' },
    { de: 'Ehrlichkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'honesty', hi: 'ईमानदारी', ex: 'Ehrlichkeit ist ihr wichtigster Wert.', exEn: 'Honesty is her most important value.', exHi: 'Imaandaari uska sabse mahatvapurn mulya hai.' },
    { de: 'Erziehung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'upbringing', hi: 'परवरिश', ex: 'Gute Erziehung braucht Zeit.', exEn: 'Good upbringing needs time.', exHi: 'Achhi parvarish ke liye samay chahiye.' },
    { de: 'Gerechtigkeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'justice', hi: 'न्याय', ex: 'Sie spricht oft über Gerechtigkeit.', exEn: 'She often talks about justice.', exHi: 'Woh aksar nyaay ke baare mein baat karti hai.' },
    { de: 'Gleichberechtigung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'equality', hi: 'समान अधिकार', ex: 'Vollständige Gleichberechtigung braucht Zeit.', exEn: 'Complete equality needs time.', exHi: 'Poorn samaan adhikaar ke liye samay chahiye.' },
    { de: 'Integration', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'integration', hi: 'एकीकरण', ex: 'Er arbeitet in der Integration.', exEn: 'He works in integration.', exHi: 'Woh ekikaran mein kaam karta hai.' },
    { de: 'Meinungsfreiheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'freedom of opinion', hi: 'विचार की स्वतंत्रता', ex: 'Das Wichtigste für mich ist die Meinungsfreiheit.', exEn: 'The most important thing for me is freedom of opinion.', exHi: 'Mere liye sabse mahatvapurn baat vichaar ki swatantrata hai.' },
    { de: 'Minderheit', art: 'die', gender: 'f', plural: 'Minderheiten', pos: 'noun', level: 'B1', en: 'minority', hi: 'अल्पसंख्यक', ex: 'Sie sichert die Rechte der Minderheiten.', exEn: 'She secures the rights of minorities.', exHi: 'Woh alpasankhyakon ke adhikaaron ko surakshit karti hai.' },
    { de: 'Regierung', art: 'die', gender: 'f', plural: 'Regierungen', pos: 'noun', level: 'B1', en: 'government', hi: 'सरकार', ex: 'Die Regierung diskutiert neue Gesetze.', exEn: 'The government discusses new laws.', exHi: 'Sarkaar naye kaanoon par charcha karti hai.' },
    { de: 'blind', pos: 'adjective', level: 'B1', en: 'blind', hi: 'अंधा', ex: 'Mein Nachbar ist blind.', exEn: 'My neighbour is blind.', exHi: 'Mera padosi andha hai.' },
    { de: 'Bedürfnis', art: 'das', gender: 'n', plural: 'Bedürfnisse', pos: 'noun', level: 'B1', en: 'need', hi: 'आवश्यकता', ex: 'Jeder hat ein Bedürfnis nach Respekt.', exEn: 'Everyone has a need for respect.', exHi: 'Har kisi ko samman ki zaroorat hoti hai.' },
    { de: 'Hilfsbereitschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'helpfulness', hi: 'सहायता की भावना', ex: 'Die Jugendlichen zeigen viel Hilfsbereitschaft.', exEn: 'Young people show a lot of helpfulness.', exHi: 'Yuva log bahut sahaayta ki bhaavna dikhaate hain.' },
    { de: 'körperlich', pos: 'adjective', level: 'B1', en: 'physical', hi: 'शारीरिक', ex: 'Die körperliche Arbeit ist anstrengend.', exEn: 'The physical work is exhausting.', exHi: 'Shaareerik kaam thakau hai.' },
    { de: 'sichern', pos: 'verb', level: 'B1', en: 'to secure', hi: 'सुरक्षित करना', ex: 'Sie sichert die Rechte der Minderheiten.', exEn: 'She secures the rights of minorities.', exHi: 'Woh alpasankhyakon ke adhikaaron ko surakshit karti hai.', conj: { praesens: 'sichert', praeteritum: 'sicherte', perfekt: 'hat gesichert' } },
    { de: 'verlassen', pos: 'verb', level: 'B1', en: 'to leave', hi: 'छोड़ना', ex: 'Viele Migranten verlassen ihre Heimat.', exEn: 'Many migrants leave their homeland.', exHi: 'Kai pravaasi apna vatan chhod dete hain.', conj: { praesens: 'verlässt', praeteritum: 'verließ', perfekt: 'hat verlassen' } },
    { de: 'vollständig', pos: 'adjective', level: 'B1', en: 'complete', hi: 'पूर्ण', ex: 'Vollständige Gleichberechtigung braucht Zeit.', exEn: 'Complete equality needs time.', exHi: 'Poorn samaan adhikaar ke liye samay chahiye.' },
    { de: 'Amt', art: 'das', gender: 'n', plural: 'Ämter', pos: 'noun', level: 'B1', en: 'office (position)', hi: 'पद', ex: 'Sie übernimmt ein wichtiges Amt.', exEn: 'She takes on an important office.', exHi: 'Woh ek mahatvapurn pad sambhaalti hai.' },
    { de: 'Bundeskanzler', art: 'der', gender: 'm', plural: 'Bundeskanzler', pos: 'noun', level: 'B1', en: 'chancellor (male)', hi: 'चांसलर', ex: 'Der Bundeskanzler spricht im Bundestag.', exEn: 'The chancellor speaks in the Bundestag.', exHi: 'Chancellor Bundestag mein bolte hain.' },
    { de: 'Bundestag', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'Bundestag (German parliament)', hi: 'बुंडेस्टाग', ex: 'Der Bundeskanzler spricht im Bundestag.', exEn: 'The chancellor speaks in the Bundestag.', exHi: 'Chancellor Bundestag mein bolte hain.' },
    { de: 'Kandidat', art: 'der', gender: 'm', plural: 'Kandidaten', pos: 'noun', level: 'B1', en: 'candidate (male)', hi: 'उम्मीदवार', ex: 'Ein Kandidat sagte, jeder Arme soll Rechte haben.', exEn: 'A candidate said every poor person should have rights.', exHi: 'Ek ummeedvaar ne kaha ki har gareeb vyakti ko adhikaar hone chahiye.' },
    { de: 'Migrant', art: 'der', gender: 'm', plural: 'Migranten', pos: 'noun', level: 'B1', en: 'migrant (male)', hi: 'प्रवासी', ex: 'Ein Bekannter von mir ist Migrant.', exEn: 'An acquaintance of mine is a migrant.', exHi: 'Mera ek parichit pravaasi hai.' },
    { de: 'Minister', art: 'der', gender: 'm', plural: 'Minister', pos: 'noun', level: 'B1', en: 'minister (male)', hi: 'मंत्री', ex: 'Kennst du diesen Minister?', exEn: 'Do you know this minister?', exHi: 'Kya tum is mantri ko jaante ho?' },
    { de: 'Abgeordnete', art: 'der/die', gender: 'm/f', plural: 'Abgeordneten', pos: 'noun', level: 'B1', en: 'MP, congress(wo)man (nominalized adjective)', hi: 'सांसद', ex: 'Der Abgeordnete neben ihm sieht müde aus.', exEn: 'The MP next to him looks tired.', exHi: 'Uske bagal wala saansad thaka hua dikhta hai.' },
    { de: 'Blinde', art: 'der/die', gender: 'm/f', plural: 'Blinden', pos: 'noun', level: 'B1', en: 'blind person (nominalized adjective)', hi: 'नेत्रहीन व्यक्ति', ex: 'Der Blinde geht jeden Morgen allein spazieren.', exEn: 'The blind man goes for a walk alone every morning.', exHi: 'Netrheen vyakti har subah akele tehalne jaata hai.' },
    { de: 'Aufnahme', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'inclusion, admission', hi: 'समावेश', ex: 'Die Aufnahme neuer Migranten läuft gut.', exEn: 'The inclusion of new migrants is going well.', exHi: 'Naye pravaasiyon ka samaavesh achha chal raha hai.' },
    { de: 'Bundeskanzlerin', art: 'die', gender: 'f', plural: 'Bundeskanzlerinnen', pos: 'noun', level: 'B1', en: 'chancellor (female)', hi: 'चांसलर (महिला)', ex: 'Die Bundeskanzlerin spricht heute.', exEn: 'The chancellor speaks today.', exHi: 'Chancellor (mahila) aaj bolengi.' },
    { de: 'Fairness', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'fairness', hi: 'निष्पक्षता', ex: 'Das ist wahre Fairness.', exEn: 'That\'s true fairness.', exHi: 'Yeh sachchi nishpakshta hai.' },
    { de: 'Flucht', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'escape, flight', hi: 'पलायन', ex: 'Die Flucht war gefährlich.', exEn: 'The flight was dangerous.', exHi: 'Palaayan khatarnaak tha.' },
    { de: 'Kandidatin', art: 'die', gender: 'f', plural: 'Kandidatinnen', pos: 'noun', level: 'B1', en: 'candidate (female)', hi: 'उम्मीदवार (महिला)', ex: 'Diese Kandidatin spricht oft über Gerechtigkeit.', exEn: 'This candidate often talks about justice.', exHi: 'Yeh ummeedvaar aksar nyaay ke baare mein baat karti hai.' },
    { de: 'Migrantin', art: 'die', gender: 'f', plural: 'Migrantinnen', pos: 'noun', level: 'B1', en: 'migrant (female)', hi: 'प्रवासी (महिला)', ex: 'Die Migrantin arbeitet in der Integration.', exEn: 'The migrant works in integration.', exHi: 'Pravaasi (mahila) ekikaran mein kaam karti hai.' },
    { de: 'Ministerin', art: 'die', gender: 'f', plural: 'Ministerinnen', pos: 'noun', level: 'B1', en: 'minister (female)', hi: 'मंत्री (महिला)', ex: 'Die Ministerin neben ihm kenne ich.', exEn: 'The minister next to him I know.', exHi: 'Uske bagal wali mantri ko main jaanta hoon.' },
    { de: 'Zivilcourage', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'moral courage', hi: 'नैतिक साहस', ex: 'Das braucht viel Zivilcourage.', exEn: 'That requires a lot of moral courage.', exHi: 'Iske liye bahut naitik saahas chahiye.' },
    { de: 'humorvoll', pos: 'adjective', level: 'B1', en: 'funny, humorous', hi: 'हास्यप्रिय', ex: 'Der Kandidat ist sehr humorvoll.', exEn: 'The candidate is very funny.', exHi: 'Ummeedvaar bahut haasyapriya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Adjektiv als Nomen?',
      body: [ 'When the noun after an adjective is omitted, the adjective itself becomes the noun — but keeps its adjective ending.' ],
      table: {
        head: ['With noun', 'Nominalized'],
        rows: [
          ['<span class="de">der alte Mann</span>', '<span class="de">der Alte</span>']
        ]
      },
      note: 'The adjective is now capitalized, declines like an adjective, and functions as a noun.',
      hinglish: 'Jab adjective ke baad ka noun hata diya jaata hai, adjective khud noun ban jaata hai — lekin apni adjective ending rakhta hai.'
    },
    {
      title: 'Formation',
      body: [ 'Article + Adjective ending = nominalized adjective. The ending never changes to a fixed noun ending.' ],
      table: {
        head: ['Noun phrase', 'Nominalized'],
        rows: [
          ['<span class="de">der kleine Junge</span> → <span class="de">der Kleine</span>', 'masc.'],
          ['<span class="de">die alte Frau</span> → <span class="de">die Alte</span>', 'fem.'],
          ['<span class="de">das kleine Kind</span> → <span class="de">das Kleine</span>', 'neut.']
        ]
      },
      hinglish: 'Article + adjective ending = nominalized adjective. Ending kabhi fixed noun ending nahi banti.'
    },
    {
      title: 'Deklination — vollständige Tabelle',
      body: [ 'A nominalized adjective declines exactly like any other adjective — weak, mixed, or strong, depending on what precedes it.' ],
      table: {
        head: ['Case', 'Masculine (der Alte)', 'Feminine (die Alte)'],
        rows: [
          ['Nominativ', 'der Alte', 'die Alte'],
          ['Akkusativ', 'den Alten', 'die Alte'],
          ['Dativ', 'dem Alten', 'der Alten'],
          ['Genitiv', 'des Alten', 'der Alten']
        ]
      },
      hinglish: 'Nominalized adjective bilkul kisi bhi adjective ki tarah decline hota hai — weak, mixed, ya strong.'
    },
    {
      title: 'Die häufigsten B1-Nominalisierungen',
      body: [ 'These nominalized adjectives appear constantly in Goethe B1 texts about society and civics.' ],
      table: {
        head: ['Nominalized adjective', 'Meaning'],
        rows: [
          ['der/die Deutsche', 'the German (person)'],
          ['der/die Bekannte', 'the acquaintance'],
          ['der/die Fremde', 'the stranger'],
          ['der/die Kranke', 'the sick person'],
          ['der Arbeitslose', 'the unemployed person'],
          ['der Arme / der Reiche', 'the poor / rich person'],
          ['das Gute / das Böse', 'the good / the bad'],
          ['der/die Abgeordnete', 'the MP'],
          ['der/die Blinde', 'the blind person'],
          ['die Jugendlichen', 'the young people']
        ]
      },
      hinglish: 'Yeh nominalized adjectives Goethe B1 society aur civics ke texts mein lagataar aate hain.'
    },
    {
      title: 'Adjektiv vs Adjektiv als Nomen',
      body: [ 'Compare the ordinary adjective usage against the nominalized form, side by side.' ],
      table: {
        head: ['Adjective', 'Nominalized'],
        rows: [
          ['<span class="de">Der alte Mann.</span>', '<span class="de">Der Alte.</span>'],
          ['<span class="de">Eine kranke Frau.</span>', '<span class="de">Eine Kranke.</span>'],
          ['<span class="de">Ein deutscher Student.</span>', '<span class="de">Ein Deutscher.</span>']
        ]
      },
      hinglish: 'Ordinary adjective usage ko nominalized form se compare karo.'
    },
    {
      title: 'Großschreibung (Capitalization)',
      body: [ 'A nominalized adjective is ALWAYS capitalized, exactly like any other noun.' ],
      table: {
        head: ['Normal adjective', 'Nominalized adjective'],
        rows: [
          ['<span class="de">klein</span>', '<span class="de">der Kleine</span>']
        ]
      },
      hinglish: 'Nominalized adjective HAMESHA capitalize hota hai, kisi bhi doosre noun ki tarah.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from forgetting capitalization, or dropping the adjective ending.' ],
      mistakes: [
        { wrong: 'der alte', right: 'der Alte', why: 'A nominalized adjective is always capitalized.' },
        { wrong: 'Der alte wohnt hier.', right: 'Der Alte wohnt hier.', why: 'Same rule — capitalize the nominalized adjective.' },
        { wrong: 'der gute ist wichtig.', right: 'Das Gute ist wichtig.', why: 'Abstract nominalized adjectives (the good/the important) are neuter and capitalized: Das Gute.' },
        { wrong: 'Der Deutsche Mann.', right: 'Der deutsche Mann. / Der Deutsche.', why: 'When the noun (Mann) is still present, the adjective stays lowercase — only capitalize when the noun is dropped.' },
        { wrong: 'die kranke braucht Hilfe.', right: 'Die Kranke braucht Hilfe.', why: 'A nominalized adjective is always capitalized.' }
      ],
      hinglish: 'Yeh galtiyaan capitalization bhool jaane ya adjective ending chhod dene se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Nominalized adjectives appear constantly in Goethe B1 texts about society, health, and civics.' ],
      note: 'Quick check: is the noun missing? Then the adjective becomes the noun — capitalize it, and decline it exactly like an adjective (weak/mixed/strong, matching the article).',
      hinglish: 'Goethe B1 society, health aur civics ke texts mein nominalized adjectives lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Ein Tag im Bundestag',
    titleEn: 'A day at the Bundestag',
    tokens: [
      { w: 'Heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'spricht', role: 'plain', en: 'speaks', hi: 'बोलते हैं', type: 'Verb · sprechen' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'वह', type: 'Article' },
      { w: 'Bundeskanzler', role: 'plain', en: 'chancellor', hi: 'चांसलर', type: 'Noun · masc.', why: 'der Bundeskanzler (this chapter).' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'Gleichberechtigung', role: 'plain', en: 'equality (Satzende)', hi: 'समान अधिकार (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Gleichberechtigung (Sg.) (this chapter).' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'वह', type: 'Article' },
      { w: 'Abgeordnete', role: 'plain', en: 'the MP (nominalized adjective)', hi: 'सांसद', type: 'Adjektiv als Nomen · Nom.', why: 'der/die Abgeordnete (this chapter).' },
      { w: 'neben', role: 'plain', en: 'next to', hi: 'बगल में', type: 'Preposition · Dat.' },
      { w: 'ihm', role: 'plain', en: 'him', hi: 'उसके', type: 'Pronoun · Dativ' },
      { w: 'notiert', role: 'plain', en: 'notes down', hi: 'नोट करता है', type: 'Verb · notieren' },
      { w: 'jedes', role: 'plain', en: 'every (neut. acc.)', hi: 'हर', type: 'Determiner · Akk.' },
      { w: 'Wort', role: 'plain', en: 'word (Satzende)', hi: 'शब्द (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', type: 'Pronoun' },
      { w: 'Wichtigste', role: 'plain', en: 'the most important thing (nominalized adjective)', hi: 'सबसे महत्वपूर्ण बात', type: 'Adjektiv als Nomen · Nom.', why: 'das Wichtigste — nominalized superlative, always neuter.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Regierung', role: 'plain', en: 'government (Satzende)', hi: 'सरकार (Satzende)', type: 'Noun · fem. (Satzende)', why: 'die Regierung (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Integration', role: 'plain', en: 'integration', hi: 'एकीकरण', type: 'Noun · fem.', why: 'die Integration (Sg.) (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'Migranten', role: 'plain', en: 'migrants (Satzende)', hi: 'प्रवासियों (Satzende)', type: 'Noun · plural (Satzende)', why: 'der Migrant (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc. nom.)', hi: 'एक', type: 'Article' },
      { w: 'Bekannter', role: 'plain', en: 'an acquaintance (nominalized adjective)', hi: 'परिचित', type: 'Adjektiv als Nomen · Nom. (gemischt)', why: 'ein Bekannter (this chapter).' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'mir', role: 'r-dativ', en: 'mine', hi: 'मेरा', type: 'Pronoun · Dativ' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'selbst', role: 'plain', en: 'himself', hi: 'खुद', type: 'Pronoun' },
      { w: 'Migrant', role: 'plain', en: 'migrant (Satzende)', hi: 'प्रवासी (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Konjunktion' },
      { w: 'kennt', role: 'plain', en: 'knows', hi: 'जानता है', type: 'Verb · kennen' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'यह', type: 'Article' },
      { w: 'Schwierigkeiten', role: 'plain', en: 'difficulties (Satzende)', hi: 'कठिनाइयों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'vieler', role: 'plain', en: 'of many (plural gen.)', hi: 'कई', type: 'Adjective · stark · Genitiv' },
      { w: 'Fremder', role: 'plain', en: 'strangers (nominalized adjective, Satzende)', hi: 'अजनबियों (Satzende)', type: 'Adjektiv als Nomen · Gen. Pl. (Satzende)', why: 'der/die Fremde, strong Genitiv plural ending.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Jugendlichen', role: 'plain', en: 'young people (nominalized adjective)', hi: 'युवा लोग', type: 'Adjektiv als Nomen · Nom. Pl.', why: 'die Jugendlichen (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Publikum', role: 'plain', en: 'audience (Satzende)', hi: 'दर्शकों में (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'hören', role: 'plain', en: 'listen (Satzende)', hi: 'सुनते हैं (Satzende)', type: 'Verb · hören (Satzende)' },
      { w: 'aufmerksam', role: 'plain', en: 'attentively (Satzende)', hi: 'ध्यान से (Satzende)', type: 'Adverb (Satzende)' },
      { w: 'zu', role: 'plain', en: '(zuhören)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true }
    ],
    translation: 'Today the chancellor speaks about equality. The MP next to him notes down every word. The most important thing for the government is the integration of migrants. An acquaintance of mine is himself a migrant and knows the difficulties of many strangers. The young people in the audience listen attentively.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_031_L001', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hast du den Neuen im Büro schon kennengelernt?', en: 'Timo, have you met the new guy in the office yet?' },
      { id: 'B1_031_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, der Deutsche aus der Marketingabteilung, oder?', en: 'Yes, the German from the marketing department, right?' },
      { id: 'B1_031_L003', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau. Angeblich ist er sehr direkt, fast ein bisschen zu ehrlich für manche.', en: 'Exactly. Apparently he\'s very direct, almost a bit too honest for some.' },
      { id: 'B1_031_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das Ehrliche mag ich eigentlich. Ich finde, davon gibt es zu wenig.', en: 'I actually like that honesty. I think there\'s too little of it.' }
    ],
    transcript: 'Timo, hast du den Neuen im Büro schon kennengelernt? Ja, der Deutsche aus der Marketingabteilung, oder? Genau. Angeblich ist er sehr direkt, fast ein bisschen zu ehrlich für manche. Das Ehrliche mag ich eigentlich. Ich finde, davon gibt es zu wenig.',
    translation: 'Timo, have you met the new guy in the office yet? Yes, the German from the marketing department, right? Exactly. Apparently he\'s very direct, almost a bit too honest for some. I actually like that honesty. I think there\'s too little of it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'den' },
      { w: 'Neuen' },
      { w: 'im' },
      { w: 'Büro' },
      { w: 'schon' },
      { w: 'kennengelernt' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Deutsche' },
      { w: 'aus' },
      { w: 'der' },
      { w: 'Marketingabteilung' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: '.', plain: true },
      { w: 'Angeblich' },
      { w: 'ist' },
      { w: 'er' },
      { w: 'sehr' },
      { w: 'direkt' },
      { w: ',', plain: true },
      { w: 'fast' },
      { w: 'ein' },
      { w: 'bisschen' },
      { w: 'zu' },
      { w: 'ehrlich' },
      { w: 'für' },
      { w: 'manche' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'Ehrliche' },
      { w: 'mag' },
      { w: 'ich' },
      { w: 'eigentlich' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'finde' },
      { w: ',', plain: true },
      { w: 'davon' },
      { w: 'gibt' },
      { w: 'es' },
      { w: 'zu' },
      { w: 'wenig' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wer ist "der Neue"?', qEn: 'Who is "der Neue"?', options: ['ein Kunde', 'der neue Kollege', 'ein Familienmitglied', 'ein Nachbar'], optionsEn: ['a customer', 'the new colleague', 'a family member', 'a neighbour'], answer: 1,
        explain: '"Hast du den Neuen im Büro schon kennengelernt?"' },
      { q: 'Was gefällt Timo, wie er sagt?', qEn: 'What does Timo say he likes?', options: ['seine Kleidung', 'das Ehrliche', 'seine Sprache', 'seinen Humor'], optionsEn: ['his clothes', 'the honest thing', 'his language', 'his humour'], answer: 1,
        explain: '"Das Ehrliche mag ich eigentlich."' }
    ]
  },

  speaking: [
    { task: "Dein Freund fragt nach dem Neuen im Büro.", taskEn: "Your friend asks about the new man in the office.", de: "Der Neue kommt aus dem Marketing und ist sehr direkt.", en: "The new guy is from marketing and is very direct." },
    { task: "Eine Kollegin fragt, was Ehrlichkeit für dich bedeutet.", taskEn: "A colleague asks what honesty means to you.", de: "Der Ehrliche hat es schwer, aber er hat Respekt.", en: "An honest person has it hard, but has respect." },
    { task: "Ein Bekannter fragt, wem das Amt hilft.", taskEn: "An acquaintance asks who the authority helps.", de: "Das Amt hilft den Bedürftigen und den Kranken.", en: "The authority helps those in need and the sick." },
    { task: "Deine Freundin fragt nach Vorurteilen in der Stadt.", taskEn: "Your friend asks about prejudice in the city.", de: "Die Minderheit erlebt oft Vorurteile, aber viele helfen.", en: "The minority often faces prejudice, but many people help." },
    { task: "Ein Kollege fragt, was für die Integration wichtig ist.", taskEn: "A colleague asks what's important for integration.", de: "Wichtig ist, dass die Neuen eine Arbeitsstelle finden.", en: "It's important that newcomers find a job." },
    { task: "Rollenspiel: Ihr sprecht über Gerechtigkeit im Betrieb.", taskEn: "Role-play: you talk about fairness at work.", de: "Die Jüngeren verdienen weniger. — Und die Älteren haben mehr Rechte.", en: "The younger ones earn less. — And the older ones have more rights." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion or newspaper-style text (six to eight sentences) about society or civic life — using at least four different nominalized adjectives (e.g. der Alte, die Deutsche, der Arbeitslose, das Wichtigste, der/die Abgeordnete), all correctly capitalized and declined.',
    starters: ['Der/Die … ist …', 'Das Wichtigste ist …', 'Viele Deutsche …', 'Ein Bekannter/Eine Bekannte …'],
    placeholder: 'Der Abgeordnete spricht heute über Gleichberechtigung. Das Wichtigste für die Regierung ist …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ wohnt allein." (der alte Mann → nominalized)',
      options: ['Der alte', 'Der Alte', 'Der alter'],
      answer: 1,
      explain: 'Nominalized adjectives are always capitalized: der Alte.'
    },
    gap: {
      sentence: ['Das ', ' daran ist die Ehrlichkeit.'],
      gaps: [ { answer: 'Gute', accepts: ['Gute'] } ],
      explain: 'Abstract nominalized adjectives like "das Gute" are neuter and capitalized.'
    },
    match: {
      q: 'Match each nominalized adjective to its meaning.',
      pairs: [
        { noun: 'der/die Abgeordnete', art: 'the MP' },
        { noun: 'der/die Blinde', art: 'the blind person' },
        { noun: 'der Arbeitslose', art: 'the unemployed person' },
        { noun: 'die Jugendlichen', art: 'the young people' }
      ]
    },
    builder: {
      target: 'Build: "The old man lives alone."',
      bank: ['Der', 'Alte', 'wohnt', 'allein', '.'],
      answer: ['Der', 'Alte', 'wohnt', 'allein', '.'],
      roles: { 'Alte': 'r-object' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'die kranke braucht Hilfe.',
      right: 'Die Kranke braucht Hilfe.',
      explain: 'A nominalized adjective is always capitalized — die Kranke, not die kranke.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ Kranke braucht einen Arzt."', options: ['die', 'Die', 'der'], answer: 1,
      explain: 'Both the sentence-initial capital AND the noun-status require "Die Kranke".' },
    { q: 'Complete: "Ein ___ hat angerufen." (der Bekannte → mixed declension)', options: ['Bekannter', 'Bekannte', 'Bekannten'], answer: 0,
      explain: 'Mixed declension: ein + Nominativ masculine → -er, so "ein Bekannter".' },
    { q: 'Which sentence is correctly capitalized?', options: ['Der alte wohnt hier.', 'Der Alte wohnt hier.', 'der Alte wohnt hier.'], answer: 1,
      explain: 'Nominalized adjectives are always capitalized, and sentences start with a capital letter.' },
    { q: 'Complete: "___ Wichtigste ist die Meinungsfreiheit."', options: ['Der', 'Die', 'Das'], answer: 2,
      explain: 'Nominalized superlatives like "das Wichtigste" are always neuter.' },
    { q: 'Which sentence contains an error?', options: ['Die Deutschen reisen gern.', 'Der Deutsche Mann.', 'Ein Deutscher hat angerufen.'], answer: 1,
      explain: 'When the noun (Mann) is still present, the adjective stays lowercase — it should be "Der deutsche Mann."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'When a noun is omitted, the adjective steps in and becomes the noun — always capitalized.' },
    { c: 'r-object', html: 'A nominalized adjective still declines exactly like an ordinary adjective — weak, mixed, or strong, matching what precedes it.' },
    { c: 'r-object', html: 'Common Goethe B1 examples: der/die Deutsche, der/die Bekannte, der/die Fremde, der/die Kranke, der Arbeitslose, der Arme/Reiche, das Gute, das Wichtigste, der/die Abgeordnete, der/die Blinde, die Jugendlichen.' }
  ],
  revisionTips: [
    'Before writing an adjective, ask: is the noun still there? If not, capitalize the adjective — it\'s now the noun.',
    'Practise the four-case declension table for one nominalized adjective (der Alte) until it\'s automatic, then apply the same pattern to any other.',
    'Watch especially for superlatives like "das Wichtigste" and "das Beste" — always neuter, always capitalized.'
  ]
};

window.CHAPTER = CHAPTER;
