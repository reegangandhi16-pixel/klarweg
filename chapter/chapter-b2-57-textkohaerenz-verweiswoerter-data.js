/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 57
   "Textkohärenz: Verweiswörter" — reference words (er/sie/es,
   dieser/diese/dieses, das/dies, derselbe) that point back to
   already-mentioned nouns or ideas, avoiding repetition.
   Does NOT teach full connector systems, advanced discourse
   markers, or C1 text linguistics.
   IMPORTANT: dialogue uses ONLY Meret and Timo.
   Vocabulary source: uploaded Chapter 57 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-57-textkohaerenz-verweiswoerter',
  phase: 'B2 · Phase 6',
  number: 57,
  title: 'Textkohärenz: Verweiswörter',
  titleEn: 'Text coherence: reference words',
  description: 'Der Bericht wurde veröffentlicht. Er war erfolgreich. Good German connects ideas — it doesn\'t repeat them.',
  xp: 720,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 58, title: 'Textkohärenz: Absatzlogik', titleEn: 'Text coherence: paragraph logic' , href: 'chapter-b2-58-textkohaerenz-absatzlogik.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Connect ideas. <em>Don\'t</em> repeat them.',
    intro: 'Meret shows Timo a summary she\'s written — one paragraph about the topic, in it an explanation; the next about the solution, this one — replacing repeated nouns with clear, natural reference words.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how er/sie/es, dieser/diese/dieses, and das/dies point back to what was already said'
    ],
    scene: 'Vorbereitung des Praktikumsberichts',
    femaleSpeakers: ['Meret'],
    dialogue: [
      { speaker: 'Meret', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'लिखा है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Zusammenfassung', role: 'r-akkusativ', en: 'summary', hi: 'सारांश', pron: 'tsu-ZA-men-fa-sung', type: 'Noun · fem.', why: 'die Zusammenfassung (this chapter).', ex: 'eine Zusammenfassung' },
        { w: 'geschrieben', role: 'r-verb', en: 'written', hi: 'लिखा', pron: 'ge-SHREE-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I have written a summary.', hi: 'Maine ek saaraansh likha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zeigst', role: 'r-verb', en: 'will you show', hi: 'दिखाओगी', pron: 'TSYKST', type: 'Verb · zeigen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'इसे', pron: 'zee', type: 'Pronoun · acc.', why: 'Verweiswort: sie refers back to die Zusammenfassung, avoiding repetition (this chapter).', ex: 'Zeigst du sie mir?', exEn: 'Will you show it to me?' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: '?', plain: true }
      ], en: 'Will you show it to me?', hi: 'Kya tum mujhe ise dikhaogi?' },
      { speaker: 'Meret', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'erste', role: 'r-subject', en: 'first', hi: 'पहला', pron: 'AIR-stuh', type: 'Adjective' },
        { w: 'Absatz', role: 'r-subject', en: 'paragraph', hi: 'अनुच्छेद', pron: 'AP-zats', type: 'Noun · masc.', why: 'der Absatz (this chapter).', ex: 'Der erste Absatz' },
        { w: 'behandelt', role: 'r-verb', en: 'deals with', hi: 'संबंधित है', pron: 'be-HAN-delt', type: 'Verb · behandeln' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Thema', role: 'r-akkusativ', en: 'topic', hi: 'विषय', pron: 'TAY-ma', type: 'Noun · neut.' },
        { w: '.', plain: true },
        { w: 'Darin', role: 'r-subject', en: 'in it', hi: 'उसमें', pron: 'da-RIN', type: 'Pronoun · adverbial', why: 'darin = a pronominal adverb, refers back to der Absatz (this chapter).', ex: 'Darin erkläre ich das Thema.', exEn: 'In it I explain the topic.' },
        { w: 'erkläre', role: 'r-verb', en: 'explain', hi: 'समझाती हूँ', pron: 'er-KLAI-ruh', type: 'Verb · erklären (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Thema', role: 'r-akkusativ', en: 'topic', hi: 'विषय', pron: 'TAY-ma', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes. The first paragraph deals with the topic. In it I explain the topic.', hi: 'Haan. Pehla anuchhed vishay se sambandhit hai. Usmein main vishay samjhaati hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'zweite', role: 'r-subject', en: 'second', hi: 'दूसरा', pron: 'TSVY-tuh', type: 'Adjective' },
        { w: 'Absatz', role: 'r-subject', en: 'paragraph', hi: 'अनुच्छेद', pron: 'AP-zats', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'And the second paragraph?', hi: 'Aur doosra anuchhed?' },
      { speaker: 'Meret', tokens: [
        { w: 'Dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner', why: 'dieser = a demonstrative pronoun, refers back to a previously mentioned masc. noun (this chapter).', ex: 'Dieser behandelt die Lösung.', exEn: 'This one deals with the solution.' },
        { w: 'behandelt', role: 'r-verb', en: 'deals with', hi: 'संबंधित है', pron: 'be-HAN-delt', type: 'Verb · behandeln' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Lösung', role: 'r-akkusativ', en: 'solution', hi: 'हल', pron: 'LÖ-zung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'This one deals with the solution.', hi: 'Yeh hal se sambandhit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'klar', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'klahr', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'That sounds very clear.', hi: 'Yeh bahut spasht lagta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Der Bericht wurde veröffentlicht. Der Bericht war erfolgreich.</span> ↓ <span class="de">Der Bericht wurde veröffentlicht. <span class="r-verweis">Er</span> war erfolgreich.</span> Good German connects ideas with <span class="r-verweis">Verweiswörter</span> (er/sie/es, dieser/diese/dieses, das/dies) instead of repeating the same noun.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEXTKOHÄRENZ: VERWEISWÖRTER (text coherence via reference words) at B2 level: using pronouns (er/sie/es), demonstratives (dieser/diese/dieses, derselbe), and idea-referring words (das/dies/solch-) to point back to already-mentioned nouns or entire previous statements, avoiding unnecessary repetition. Examples: "Rohan schreibt einen Bericht. Er gibt ihn morgen ab." (pronoun reference); "Die Präsentation war erfolgreich. Diese wurde später veröffentlicht." (demonstrative reference); "Viele Studenten lernen online. Das bringt viele Vorteile." (reference to an entire idea, not one noun). ' +
    'Do NOT expect or require full connector systems (deshalb, außerdem, etc. as a system), advanced discourse markers, or C1 text linguistics — those are separate topics; do not flag their absence. The key skill being tested is whether references are CLEAR (unambiguous antecedent) and whether repetition is avoided naturally — clarity always outranks avoiding repetition. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that every pronoun/demonstrative agrees in gender and number with its intended antecedent (er=masc., sie=fem./plural, es=neut.; dieser/diese/dieses match the noun\'s gender).\n' +
    '- Flag genuinely AMBIGUOUS references (e.g. "Anna spricht mit Maria. Sie ist freundlich." — unclear which woman) as the most important kind of error to catch.\n' +
    '- Do not penalise a repeated noun if the learner used it deliberately to avoid ambiguity — that is the CORRECT choice, not an error.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Coherence check:</b> one sentence on whether the learner\'s text felt connected (using references) rather than repetitive, and whether every reference was clear.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your references are clear and your writing flows naturally. Ready for connectors in running text next.',
    mid: 'Good. Re-read the Master Reference Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: clarity always outranks avoiding repetition.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Bericht', role: 'r-antecedent' }, { w: 'wurde', role: 'plain' },
    { w: 'veröffentlicht', role: 'plain' }, { w: '.', plain: true }, { w: 'Er', role: 'r-verweis' },
    { w: 'war', role: 'plain' }, { w: 'erfolgreich', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: German connects ideas with Verweiswörter instead of repeating nouns.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meret and Timo prepare a presentation and report, using clear references throughout.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master pronoun reference, demonstrative reference, idea reference, and avoiding repetition.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university project report and company newsletter full of clear Verweiswörter.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify antecedents and distinguish pronoun, demonstrative, and idea references.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present projects and summarise reports while avoiding unnecessary repetition.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a repetitive text using appropriate Verweiswörter, keeping every reference clear.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill antecedent-finding, reference-word choice, and detecting ambiguous references.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 720 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Antecedent-finding drills, rewrite-for-coherence tasks, and a formal report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Reference Table, repetition comparison, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Rohan schreibt einen Bericht. Er gibt ihn morgen ab.', text: 'Use pronoun reference (er/sie/es) to avoid repeating a noun' },
    { de: 'Die Präsentation war erfolgreich. Diese wurde veröffentlicht.', text: 'Use demonstrative reference (dieser/diese/dieses) for clearer pointing-back' },
    { de: 'Viele Studenten lernen online. Das bringt viele Vorteile.', text: 'Use das/dies to refer to an entire previous idea, not just one noun' },
    { de: 'Anna spricht mit Maria. Sie ist freundlich. ⚠ ambiguous!', text: 'Detect ambiguous references and know when to repeat the noun instead' },
    { de: 'Clarity always outranks avoiding repetition', text: 'Apply the core rule: never sacrifice clear meaning for stylistic variety' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-57 list) ----------
  vocab: [
    { de: 'Analogie', art: 'die', gender: 'f', plural: 'Analogien', pos: 'noun', level: 'B2', register: 'written', en: 'analogy', hi: 'सादृश्य', ex: 'Sie erklärte das Konzept mit einer Analogie.', exEn: 'She explained the concept with an analogy.', exHi: 'Usne concept ko ek saadrishya se samjhaaya.', ex2: 'Sie haben eine passende Analogie gefunden.', ex2En: 'They\'ve found a fitting analogy.', ex2Hi: 'Unhein ek achhi saadrishya mili hai.' },
    { de: 'anerkennend', pos: 'adjective', level: 'B2', register: 'written', en: 'appreciative', hi: 'सराहनीय', ex: 'Er nickte anerkennend.', exEn: 'He nodded appreciatively.', exHi: 'Usne saraahna se sar hilaaya.', ex2: 'Sie haben anerkennend reagiert.', ex2En: 'They\'ve reacted appreciatively.', ex2Hi: 'Unhone saraahna se pratikriya di hai.' },
    { de: 'Anprobe', art: 'die', gender: 'f', plural: 'Anproben', pos: 'noun', level: 'B2', register: 'both', en: 'fitting, trying-on', hi: 'नाप देखना', ex: 'Die Anprobe dauerte nicht lange.', exEn: 'The fitting didn\'t take long.', exHi: 'Naap dekhne mein zyaada samay nahi laga.', ex2: 'Sie haben eine Anprobe vereinbart.', ex2En: 'They\'ve arranged a fitting.', ex2Hi: 'Unhone naap ka samay tay kiya hai.' },
    { de: 'Anrufer', art: 'der/die', gender: 'm/f', plural: 'Anrufer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'caller', hi: 'कॉल करने वाला', ex: 'Der Anrufer wollte eine Auskunft.', exEn: 'The caller wanted information.', exHi: 'Call karne waale ko jaankaari chaahiye thi.', ex2: 'Sie haben mit dem Anrufer gesprochen.', ex2En: 'They\'ve spoken with the caller.', ex2Hi: 'Unhone call karne waale se baat ki hai.' },
    { de: 'Arbeitsklima', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'working atmosphere', hi: 'कार्य वातावरण', ex: 'Unser Arbeitsklima ist sehr gut.', exEn: 'Our working atmosphere is very good.', exHi: 'Hamaara kaam ka mahaul bahut achha hai.', ex2: 'Sie haben das Arbeitsklima verbessert.', ex2En: 'They\'ve improved the working atmosphere.', ex2Hi: 'Unhone kaam ka mahaul behtar banaaya hai.' },
    { de: 'ausrichten', pos: 'verb', level: 'B2', register: 'both', en: 'to align, convey', hi: 'व्यवस्थित करना, पहुँचाना', ex: 'Sie richtete die Nachricht aus.', exEn: 'She conveyed the message.', exHi: 'Usne sandesh pahunchaaya.', ex2: 'Sie haben die Strategie neu ausgerichtet.', ex2En: 'They\'ve realigned the strategy.', ex2Hi: 'Unhone strategy ko dobaara set kiya hai.', conj: { praesens: 'richtet aus', praeteritum: 'richtete aus', perfekt: 'hat ausgerichtet' } },
    { de: 'ausverkauft', pos: 'adjective', level: 'B2', register: 'both', en: 'sold out', hi: 'बिक चुका', ex: 'Die Tickets waren schon ausverkauft.', exEn: 'The tickets were already sold out.', exHi: 'Ticket pehle se bik chuke the.', ex2: 'Sie haben das ausverkaufte Konzert verpasst.', ex2En: 'They\'ve missed the sold-out concert.', ex2Hi: 'Unhone bike hue concert ko miss kiya hai.' },
    { de: 'Bammel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'spoken', en: 'jitters, fear', hi: 'घबराहट', ex: 'Sie hatte Bammel vor der Prüfung.', exEn: 'She had jitters before the exam.', exHi: 'Usne pareeksha se pehle ghabraahat mahsoos ki.', ex2: 'Sie haben ihren Bammel überwunden.', ex2En: 'They\'ve overcome their jitters.', ex2Hi: 'Unhone apni ghabraahat par kaabu paaya hai.' },
    { de: 'Benehmen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'conduct, manners', hi: 'व्यवहार', ex: 'Sein Benehmen war vorbildlich.', exEn: 'His conduct was exemplary.', exHi: 'Uska vyavahaar aadarsh tha.', ex2: 'Sie haben gutes Benehmen gezeigt.', ex2En: 'They\'ve shown good manners.', ex2Hi: 'Unhone achha vyavahaar dikhaaya hai.' },
    { de: 'Benutzerkonto', art: 'das', gender: 'n', plural: 'Benutzerkonten', pos: 'noun', level: 'B2', register: 'written', en: 'user account', hi: 'उपयोगकर्ता खाता', ex: 'Sie hat ein neues Benutzerkonto erstellt.', exEn: 'She\'s created a new user account.', exHi: 'Usne ek naya upyogkarta khaata banaaya hai.', ex2: 'Sie haben ihr Benutzerkonto gesperrt.', ex2En: 'They\'ve blocked their user account.', ex2Hi: 'Unhone apna upyogkarta khaata block kiya hai.' },
    { de: 'beschädigen', pos: 'verb', level: 'B2', register: 'both', en: 'to damage', hi: 'नुकसान पहुंचाना', ex: 'Der Sturm beschädigte das Dach.', exEn: 'The storm damaged the roof.', exHi: 'Toofaan ne chhat ko nuksaan pahunchaaya.', ex2: 'Sie haben den Bericht nicht beschädigt.', ex2En: 'They haven\'t damaged the report.', ex2Hi: 'Unhone report ko nuksaan nahi pahunchaaya hai.', conj: { praesens: 'beschädigt', praeteritum: 'beschädigte', perfekt: 'hat beschädigt' } },
    { de: 'Veränderung', art: 'die', gender: 'f', plural: 'Veränderungen', pos: 'noun', level: 'B2', register: 'written', en: 'change', hi: 'परिवर्तन', ex: 'Die Firma erlebte große Veränderungen.', exEn: 'The company experienced great changes.', exHi: 'Company ne bade parivartan dekhe.', ex2: 'Sie haben viele Veränderungen vorgenommen.', ex2En: 'They\'ve made many changes.', ex2Hi: 'Unhone kai parivartan kiye hain.' },
    { de: 'verbunden', pos: 'adjective', level: 'B2', register: 'both', en: 'connected, linked', hi: 'जुड़ा हुआ', ex: 'Die beiden Themen sind eng verbunden.', exEn: 'The two topics are closely connected.', exHi: 'Dono vishay kareebi taur par jude hain.', ex2: 'Sie fühlen sich verbunden.', ex2En: 'They feel connected.', ex2Hi: 'Woh jude hue mahsoos karte hain.' },
    { de: 'Verschlüsselung', art: 'die', gender: 'f', plural: 'Verschlüsselungen', pos: 'noun', level: 'B2', register: 'written', en: 'encryption', hi: 'एन्क्रिप्शन', ex: 'Wir sollten auch die Verschlüsselung erwähnen.', exEn: 'We should also mention encryption.', exHi: 'Humein encryption ka bhi zikr karna chaahiye.', ex2: 'Sie haben die Verschlüsselung verbessert.', ex2En: 'They\'ve improved the encryption.', ex2Hi: 'Unhone encryption behtar banaayi hai.' },
    { de: 'verwählen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to misdial', hi: 'गलत नंबर मिलाना', ex: 'Sie hatte sich verwählt.', exEn: 'She had misdialed.', exHi: 'Usne galat number milaaya tha.', ex2: 'Sie haben sich beim Anruf verwählt.', ex2En: 'They\'ve misdialed on the call.', ex2Hi: 'Unhone call karte samay galat number milaaya hai.', conj: { praesens: 'verwählt sich', praeteritum: 'verwählte sich', perfekt: 'hat sich verwählt' } },
    { de: 'vortragen', pos: 'verb', level: 'B2', register: 'written', en: 'to present, give (a talk)', hi: 'प्रस्तुत करना', ex: 'Ich werde diesen Abschnitt noch einmal vortragen.', exEn: 'I will present this section once more.', exHi: 'Main is hisse ko ek baar aur prastut karunga.', ex2: 'Sie hat den Bericht klar vorgetragen.', ex2En: 'She\'s presented the report clearly.', ex2Hi: 'Usne report ko spasht roop se prastut kiya hai.', conj: { praesens: 'trägt vor', praeteritum: 'trug vor', perfekt: 'hat vorgetragen' } },
    { de: 'Werbespot', art: 'der', gender: 'm', plural: 'Werbespots', pos: 'noun', level: 'B2', register: 'both', en: 'advertising spot, commercial', hi: 'विज्ञापन', ex: 'Der Werbespot lief im Fernsehen.', exEn: 'The commercial aired on TV.', exHi: 'Vigyaapan TV par chala.', ex2: 'Sie haben einen neuen Werbespot produziert.', ex2En: 'They\'ve produced a new commercial.', ex2Hi: 'Unhone ek naya vigyaapan banaaya hai.' },
    { de: 'Wertschätzung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'appreciation, esteem', hi: 'सम्मान, कदर', ex: 'Das zeigt unsere Wertschätzung für Datenschutz.', exEn: 'That shows our appreciation for data protection.', exHi: 'Yeh data suraksha ke liye humaari kadar dikhaata hai.', ex2: 'Sie haben ihre Wertschätzung ausgedrückt.', ex2En: 'They\'ve expressed their appreciation.', ex2Hi: 'Unhone apni kadar zaahir ki hai.' },
    { de: 'widmen', pos: 'verb', level: 'B2', register: 'written', en: 'to dedicate, devote', hi: 'समर्पित करना', ex: 'Ich will diesem Team meine Wertschätzung widmen.', exEn: 'I want to dedicate my appreciation to this team.', exHi: 'Main is team ke prati apni kadar samarpit karna chaahta hoon.', ex2: 'Sie haben dem Projekt viel Zeit gewidmet.', ex2En: 'They\'ve devoted a lot of time to the project.', ex2Hi: 'Unhone project ko bahut samay samarpit kiya hai.', conj: { praesens: 'widmet', praeteritum: 'widmete', perfekt: 'hat gewidmet' } },
    { de: 'würdigen', pos: 'verb', level: 'B2', register: 'written', en: 'to honour, appreciate', hi: 'सम्मान करना', ex: 'Sie würdigte seine Arbeit.', exEn: 'She honoured his work.', exHi: 'Usne uske kaam ka sammaan kiya.', ex2: 'Sie haben die Leistung gewürdigt.', ex2En: 'They\'ve honoured the achievement.', ex2Hi: 'Unhone uplabdhi ka sammaan kiya hai.', conj: { praesens: 'würdigt', praeteritum: 'würdigte', perfekt: 'hat gewürdigt' } },
    { de: 'Zahlungsmöglichkeit', art: 'die', gender: 'f', plural: 'Zahlungsmöglichkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'payment option', hi: 'भुगतान विकल्प', ex: 'Es gibt mehrere Zahlungsmöglichkeiten.', exEn: 'There are several payment options.', exHi: 'Kai bhugtaan vikalp hain.', ex2: 'Sie haben eine neue Zahlungsmöglichkeit eingeführt.', ex2En: 'They\'ve introduced a new payment option.', ex2Hi: 'Unhone ek naya bhugtaan vikalp shuru kiya hai.' },
    { de: 'Zusammenfassung', art: 'die', gender: 'f', plural: 'Zusammenfassungen', pos: 'noun', level: 'B2', register: 'written', en: 'summary', hi: 'सारांश', ex: 'Sie schrieb eine kurze Zusammenfassung.', exEn: 'She wrote a short summary.', exHi: 'Usne ek chhota saaraansh likha.', ex2: 'Sie haben die Zusammenfassung überarbeitet.', ex2En: 'They\'ve revised the summary.', ex2Hi: 'Unhone saaraansh mein sudhaar kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Textkohärenz?',
      body: [ 'A good text connects ideas naturally instead of repeating the same noun over and over.' ],
      table: {
        head: ['Repetitive', 'Cohesive'],
        rows: [
          ['Anna kauft ein Buch. Anna liest das Buch. Anna empfiehlt das Buch.', 'Anna kauft ein Buch. <span class="r-verweis">Sie</span> liest <span class="r-verweis">es</span>. Danach empfiehlt <span class="r-verweis">sie es</span>.']
        ]
      },
      hinglish: 'Achhe text mein ek hi noun baar-baar nahi aata \u2014 ideas ek doosre se jude rehte hain. Isliye German mein pehli baar noun aata hai, aur uske baad uski jagah chhote shabd le lete hain.'
    },
    {
      title: 'Was sind Verweiswörter?',
      body: [ 'Verweiswörter point back to something already mentioned: er, sie, es, dieser, diese, dieses, derjenige, diejenige, dasjenige, solch-, derselbe, dies, das.' ],
      hinglish: 'Verweisw\u00f6rter woh shabd hain jo pehle kahi gayi cheez ki taraf ishara karte hain \u2014 <b>er, sie, es, dieser, diese, dieses, derjenige, solch-, derselbe, dies, das</b>. Inme se roz kaam aane wale <b>er/sie/es</b> aur <b>dieser/dies/das</b> hi hain; baaki zyada formal writing mein aate hain.'
    },
    {
      title: 'Pronomen-Referenz',
      body: [ 'Personal pronouns (er/sie/es) replace a previously mentioned noun, matching its gender and number.' ],
      table: {
        head: ['With repetition', 'With pronoun reference'],
        rows: [
          ['Rohan schreibt einen Bericht. Rohan gibt den Bericht morgen ab.', 'Rohan schreibt einen Bericht. <span class="r-verweis">Er</span> gibt <span class="r-verweis">ihn</span> morgen ab.']
        ]
      },
      hinglish: 'Personal pronouns (<b>er/sie/es</b>) us noun ki jagah lete hain jo pehle aa chuka hai, aur uske gender aur number se match karte hain. Yeh sabse aam tarika hai repetition se bachne ka.'
    },
    {
      title: 'Genus, Numerus \u2014 und Kasus',
      body: [
        'A Verweiswort has to match its antecedent in gender and number, but it takes its <b>case</b> from its own new sentence. These are two separate decisions, and the case is the one learners forget.'
      ],
      table: {
        head: ['Antecedent', 'Role in the new sentence', 'Verweiswort'],
        rows: [
          ['der Bericht', 'subject', '<span class="de">Er</span> ist wichtig.'],
          ['der Bericht', 'accusative object', 'Rohan gibt <span class="de">ihn</span> ab.'],
          ['das Buch', 'accusative object', 'Anna liest <span class="de">es</span>.'],
          ['die Ergebnisse', 'subject (plural)', '<span class="de">Sie</span> waren \u00fcberzeugend.'],
          ['dem Kollegen', 'dative object', 'Ich helfe <span class="de">ihm</span>.']
        ]
      },
      note: 'So <i>der Bericht</i> becomes <b>er</b> or <b>ihn</b> depending on the job it does next \u2014 the gender stays masculine either way.',
      hinglish: 'Verweiswort ko do cheezein dekhni padti hain. Gender aur number us noun se aate hain jiski baat ho rahi hai, par <b>case</b> naye sentence se aata hai \u2014 matlab us pronoun ka apna kaam kya hai. Yahi doosri baat aksar chhoot jaati hai. Isliye <i>der Bericht</i> subject bane to <b>er</b>, aur object bane to <b>ihn</b> \u2014 gender dono mein masculine hi rehta hai.'
    },
    {
      title: 'Demonstrativ-Referenz',
      body: [ 'Demonstrative pronouns (dieser/diese/dieses) create a clearer, more emphatic reference than a plain personal pronoun.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Präsentation war erfolgreich. Diese wurde später veröffentlicht.', 'The presentation was successful. This one was published later.'],
          ['Die Ergebnisse waren überzeugend. Diese führten zu einer neuen Entscheidung.', 'The results were convincing. These led to a new decision.']
        ]
      },
      hinglish: 'Demonstrative pronouns (<b>dieser/diese/dieses</b>) se reference zyada saaf aur zyada zor wala ban jaata hai. Yeh khaas kar tab kaam aate hain jab do cheezon mein se ek ki baat karni ho \u2014 kyunki <b>er/sie/es</b> se confusion ho sakti hai.'
    },
    {
      title: 'Referenz auf Ideen',
      body: [ '"das" and "dies" often refer to an ENTIRE previous idea or statement, not a single noun.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Viele Studenten lernen online. Das bringt viele Vorteile.', 'Many students study online. That brings many advantages.'],
          ['Die Firma investiert in KI. Dies verbessert die Produktivität.', 'The company invests in AI. This improves productivity.']
        ]
      },
      hinglish: '<b>das</b> aur <b>dies</b> aksar poori pichhli baat ki taraf ishara karte hain, kisi ek noun ki nahi. Isliye yeh badalte bhi nahi \u2014 inpar gender ki ending nahi lagti, kyunki inke peeche koi ek noun hi nahi hota.'
    },
    {
      title: 'Wiederholung vermeiden',
      body: [ 'Comparing a repetitive paragraph to its cohesive rewrite shows how references improve flow.' ],
      table: {
        head: ['Bad (repetitive)', 'Better (cohesive)'],
        rows: [
          ['Der Bericht ist wichtig. Der Bericht wurde veröffentlicht. Der Bericht wurde diskutiert.', 'Der Bericht ist wichtig. Er wurde veröffentlicht. Anschließend wurde er diskutiert.']
        ]
      },
      hinglish: 'Dono paragraph saath rakh kar dekho \u2014 pehle mein noun teen baar aa raha hai aur bhaari lag raha hai, aur doosre mein pronoun aur ek connector se baat aage badh jaati hai. Writing mein yahi farak examiner ko dikhta hai.'
    },
    {
      title: 'Register',
      body: [ 'Verweiswörter are common in conversations, emails, reports, scientific articles, newspapers, presentations, and company communication. Good writers use references instead of repetition.' ],
      hinglish: 'Verweisw\u00f6rter har jagah aate hain \u2014 baatcheet, emails, reports, newspapers aur presentations mein. Achhe writers noun dohraane ki jagah reference use karte hain, par sirf tab jab reference saaf ho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'The most dangerous mistake is an AMBIGUOUS reference \u2014 where the pronoun could point to more than one antecedent. The rest come from wrong gender, wrong number, or a gendered form where an invariable one is needed.' ],
      mistakes: [
        { wrong: 'Anna spricht mit Maria. Sie ist freundlich.', right: 'Anna spricht mit Maria. Maria ist freundlich.', why: '"Sie" could mean Anna or Maria \u2014 both are feminine singular. When two antecedents compete, repeat the name instead.' },
        { wrong: 'Der Bericht wurde veröffentlicht. Der Bericht war erfolgreich.', right: 'Der Bericht wurde veröffentlicht. Er war erfolgreich.', why: 'Once the antecedent is clear, replace the repeated noun with a pronoun \u2014 repeating it sounds heavy.' },
        { wrong: 'Das Buch ist interessant. Diese ist teuer.', right: 'Das Buch ist interessant. Dieses ist teuer.', why: '"Buch" is neuter, so the demonstrative must be "dieses" \u2014 not the feminine "diese".' },
        { wrong: 'Die Firma investiert in KI. Dieses verbessert die Produktivität.', right: 'Die Firma investiert in KI. Dies verbessert die Produktivität.', why: 'To point back to a whole idea, use the invariable <b>dies</b> or <b>das</b> \u2014 not a gendered form like dieses, which would have to agree with a specific noun.' },
        { wrong: 'Die Ergebnisse waren gut. Er waren überzeugend.', right: 'Die Ergebnisse waren gut. Sie waren überzeugend.', why: '"Ergebnisse" is plural — the pronoun must be "sie" (plural), not "er" (masculine singular).' }
      ],
      hinglish: 'Sabse badi galti ambiguous reference hai \u2014 jahan pronoun do cheezon mein se kisi ki bhi taraf ishara kar sakta hai. Baaki galtiyan gender ya number galat hone se, ya gendered form wahan lagane se hoti hain jahan <b>dies</b> ya <b>das</b> chahiye tha.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to mention something again? Don\'t automatically repeat the noun — use a Verweiswort if the reference will be clear. If there are two possible antecedents, repeat the noun instead.' ],
      note: 'Memory trick: every Verweiswort asks "What am I pointing to?" If there is only ONE clear answer, the reference is correct. If there are TWO possibilities, rewrite the sentence. Clarity is more important than avoiding repetition.',
      hinglish: 'Kisi cheez ka dobara zikr karna hai? Noun ko automatically mat dohrao \u2014 agar reference saaf hai to Verweiswort use karo. Aur agar do cheezein aisi hain jinki taraf pronoun ishara kar sakta hai, to naam dohraana hi behtar hai. Clarity zyada important hai, repetition se bachna nahi.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Marketingblog: Was einen guten Werbespot ausmacht',
    titleEn: 'Marketing blog: what makes a good ad spot',
    tokens: [
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'guter', role: 'plain', en: 'good', hi: 'अच्छा', type: 'Adjective' },
      { w: 'Werbespot', role: 'plain', en: 'ad spot', hi: 'विज्ञापन क्लिप', type: 'Noun · masc.', why: 'der Werbespot (this chapter).' },
      { w: 'erzählt', role: 'plain', en: 'tells', hi: 'बताता है', type: 'Verb · erzählen' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'dreißig', role: 'plain', en: 'thirty', hi: 'तीस', type: 'Number' },
      { w: 'Sekunden', role: 'plain', en: 'seconds (Satzende)', hi: 'सेकंड (Satzende)', type: 'Noun · plural' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'kleine', role: 'plain', en: 'small', hi: 'छोटी', type: 'Adjective' },
      { w: 'Geschichte', role: 'plain', en: 'story (Satzende)', hi: 'कहानी (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-connector', en: 'this (Verweiswort)', hi: 'यह (संदर्भ शब्द)', type: 'Demonstrativpronomen (Verweiswort, rückverweisend)', why: 'diese refers back to "eine kleine Geschichte" from the previous sentence — a reference word that keeps the text coherent (this chapter).' },
      { w: 'muss', role: 'plain', en: 'must', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'echte', role: 'plain', en: 'genuine', hi: 'वास्तविक', type: 'Adjective' },
      { w: 'Wertschätzung', role: 'plain', en: 'appreciation (Satzende)', hi: 'सराहना (Satzende)', type: 'Noun · fem.', why: 'die Wertschätzung (this chapter).' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'दर्शक', type: 'Article' },
      { w: 'Zuschauer', role: 'plain', en: 'viewers (Satzende)', hi: 'दर्शकों (Satzende)', type: 'Noun · plural' },
      { w: 'zeigen', role: 'plain', en: 'show (Satzende)', hi: 'दिखाना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'bekannter', role: 'plain', en: 'well-known', hi: 'प्रसिद्ध', type: 'Adjective' },
      { w: 'Regisseur', role: 'plain', en: 'director (Satzende)', hi: 'निर्देशक (Satzende)', type: 'Noun · masc.' },
      { w: 'erklärt', role: 'plain', en: 'explains', hi: 'बताता है', type: 'Verb · erklären' },
      { w: 'dies', role: 'r-connector', en: 'this (Verweiswort)', hi: 'यह (संदर्भ शब्द)', type: 'Pronomen (Verweiswort, rückverweisend)', why: 'dies here summarises the whole previous claim about appreciation — a compact way to refer back to an entire idea (this chapter).' },
      { w: 'so', role: 'plain', en: 'as follows (Satzende)', hi: 'इस प्रकार (Satzende)', type: 'Adverb' },
      { w: ':', plain: true },
      { w: '„Ohne', role: 'plain', en: '"Without', hi: '"बिना', type: 'Preposition · Akk.' },
      { w: 'Respekt', role: 'plain', en: 'respect (Satzende)', hi: 'सम्मान (Satzende)', type: 'Noun · masc.' },
      { w: 'wirkt', role: 'plain', en: 'seems', hi: 'लगता है', type: 'Verb · wirken' },
      { w: 'jeder', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Spot', role: 'plain', en: 'spot', hi: 'क्लिप', type: 'Noun · masc.' },
      { w: 'aufdringlich', role: 'plain', en: 'intrusive (Satzende)', hi: 'दख़लंदाज़ (Satzende)', type: 'Adjective' },
      { w: '.“', plain: true },
      { w: 'Zusammenfassend', role: 'r-connector', en: 'in summary (Textverweis)', hi: 'संक्षेप में (Textverweis)', type: 'Adverb (Textverweis, resümierend)', why: 'zusammenfassend signals that a summary of the whole preceding text follows — a text-level reference word (this chapter).' },
      { w: 'lässt', role: 'plain', en: 'lets', hi: 'देती है', type: 'Verb · lassen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'sagen', role: 'plain', en: 'say (Satzende)', hi: 'कहना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ':', plain: true },
      { w: 'Story', role: 'plain', en: 'story', hi: 'कहानी', type: 'Noun · fem.' },
      { w: 'schlägt', role: 'plain', en: 'beats', hi: 'हराता है', type: 'Verb · schlagen' },
      { w: 'Werbung', role: 'plain', en: 'advertising (Satzende)', hi: 'विज्ञापन (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-connector', en: 'this', hi: 'यह', type: 'Determiner · Verweiswort', why: 'diese refers back to the whole idea just stated — a text-coherence reference word (this chapter).' },
      { w: 'Erkenntnis', role: 'plain', en: 'insight', hi: 'अंतर्दृष्टि', type: 'Noun · fem.' },
      { w: 'gilt', role: 'plain', en: 'applies', hi: 'लागू होती है', type: 'Verb · gelten' },
      { w: 'übrigens', role: 'plain', en: 'by the way', hi: 'वैसे', type: 'Adverb' },
      { w: 'längst', role: 'plain', en: 'by far', hi: 'बहुत पहले से', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Filmbranche', role: 'plain', en: 'film industry (Satzende)', hi: 'फ़िल्म उद्योग (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'gute', role: 'plain', en: 'good', hi: 'अच्छे', type: 'Adjective' },
      { w: 'Werbetexte', role: 'plain', en: 'ad copy', hi: 'विज्ञापन लेख', type: 'Noun · plural' },
      { w: 'leben', role: 'plain', en: 'live', hi: 'जीते हैं', type: 'Verb · leben' },
      { w: 'von', role: 'plain', en: 'off', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'diesem', role: 'r-connector', en: 'this (Verweiswort)', hi: 'इस (संदर्भ शब्द)', type: 'Determiner (Verweiswort, rückverweisend)', why: 'diesem points back to "Respekt" and the whole preceding argument (this chapter).' },
      { w: 'Prinzip', role: 'plain', en: 'principle (Satzende)', hi: 'सिद्धांत (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'dieses', role: 'r-connector', en: 'this (Verweiswort)', hi: 'इस (संदर्भ शब्द)', type: 'Determiner (Verweiswort, rückverweisend)' },
      { w: 'Prinzip', role: 'plain', en: 'principle', hi: 'सिद्धांत', type: 'Noun · neut.' },
      { w: 'ignoriert', role: 'plain', en: 'ignores (Satzende)', hi: 'नज़रअंदाज़ करता है (Satzende)', type: 'Verb · ignorieren (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'verliert', role: 'plain', en: 'loses', hi: 'खो देता है', type: 'Verb · verlieren' },
      { w: 'schnell', role: 'plain', en: 'quickly', hi: 'जल्दी', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Aufmerksamkeit', role: 'plain', en: 'attention (Satzende)', hi: 'ध्यान (Satzende)', type: 'Noun · fem.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Publikums', role: 'plain', en: 'audience (Satzende)', hi: 'दर्शकों (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true }
    ],
    translation: 'A good ad spot tells a small story in thirty seconds. This must show genuine appreciation for the viewers. A well-known director explains this as follows: "Without respect, every spot seems intrusive." In summary, one could say: story beats advertising. By the way, this insight has long applied to far more than just the film industry. Good ad copy, too, lives off exactly this principle. Whoever ignores this principle quickly loses the audience\u2019s attention.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_057_L001', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, kannst du meine Zusammenfassung mal lesen? Ich wiederhole ständig dieselben Wörter.', en: 'Timo, can you read my summary? I keep repeating the same words.' },
      { id: 'B2_057_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar. Statt "das Problem" könntest du hier einfach "dieses" schreiben.', en: 'Sure. Instead of "the problem" you could just write "this" here.' },
      { id: 'B2_057_L003', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und im nächsten Absatz, wo es um die Lösung geht?', en: 'And in the next paragraph, where it\'s about the solution?' },
      { id: 'B2_057_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da reicht "diese", der Leser weiß dann genau, worauf sich das bezieht.', en: 'There "this one" is enough, the reader will know exactly what that refers to.' }
    ],
    transcript: 'Timo, kannst du meine Zusammenfassung mal lesen? Ich wiederhole ständig dieselben Wörter. Klar. Statt "das Problem" könntest du hier einfach "dieses" schreiben. Und im nächsten Absatz, wo es um die Lösung geht? Da reicht "diese", der Leser weiß dann genau, worauf sich das bezieht.',
    translation: 'Timo, can you read my summary? I keep repeating the same words. Sure. Instead of "the problem" you could just write "this" here. And in the next paragraph, where it\'s about the solution? There "this one" is enough, the reader will know exactly what that refers to.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'kannst' },
      { w: 'du' },
      { w: 'meine' },
      { w: 'Zusammenfassung' },
      { w: 'mal' },
      { w: 'lesen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'wiederhole' },
      { w: 'ständig' },
      { w: 'dieselben' },
      { w: 'Wörter' },
      { w: '.', plain: true },
      { w: 'Klar' },
      { w: '.', plain: true },
      { w: 'Statt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'das' },
      { w: 'Problem' },
      { w: '"', plain: true },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'hier' },
      { w: 'einfach' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'dieses' },
      { w: '"', plain: true },
      { w: 'schreiben' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'im' },
      { w: 'nächsten' },
      { w: 'Absatz' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'es' },
      { w: 'um' },
      { w: 'die' },
      { w: 'Lösung' },
      { w: 'geht' },
      { w: '?', plain: true },
      { w: 'Da' },
      { w: 'reicht' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'diese' },
      { w: '",', plain: true },
      { w: 'der' },
      { w: 'Leser' },
      { w: 'weiß' },
      { w: 'dann' },
      { w: 'genau' },
      { w: ',', plain: true },
      { w: 'worauf' },
      { w: 'sich' },
      { w: 'das' },
      { w: 'bezieht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Problem bemerkt Meret in ihrer Zusammenfassung?', qEn: 'What problem does Meret notice in her summary?', options: ['sie ist zu kurz', 'sie wiederholt Wörter', 'sie hat Fehler', 'sie ist zu lang'], optionsEn: ['it is too short', 'she repeats words', 'it has mistakes', 'it is too long'], answer: 1,
        explain: '"Ich wiederhole ständig dieselben Wörter."' },
      { q: 'Was schlägt Timo vor, anstatt "das Problem" zu wiederholen?', qEn: 'What does Timo suggest instead of repeating "das Problem"?', options: ['"es" weglassen', '"dieses" schreiben', 'einen neuen Satz', 'ein Bild'], optionsEn: ['drop "es"', 'write "dieses"', 'a new sentence', 'a picture'], answer: 1,
        explain: '"Statt \'das Problem\' könntest du hier einfach \'dieses\' schreiben."' }
    ]
  },

  speaking: [
    { task: "Dein Kollege wiederholt in der Zusammenfassung dieselben Wörter. Rate ihm.", taskEn: "Your colleague repeats the same words in his summary. Advise him.", de: "Statt das Problem könntest du hier einfach dieses schreiben.", en: "Instead of 'the problem' you could simply write 'this one' here." },
    { task: "Er fragt, worauf sich dein Satz bezieht. Antworte klar.", taskEn: "He asks what your sentence refers to. Answer clearly.", de: "Damit meine ich die Verschlüsselung, nicht das Benutzerkonto.", en: "By that I mean the encryption, not the user account." },
    { task: "Stell dein Projekt vor, ohne den Namen zu wiederholen.", taskEn: "Present your project without repeating the name.", de: "Das Projekt läuft seit Januar. Es hat zwei Ziele, und dieses ist besonders wichtig.", en: "The project has been running since January. It has two aims, and this one is especially important." },
    { task: "Deine Chefin fragt, wer im Satz „sie ruft zurück“ eigentlich gemeint ist.", taskEn: "Your boss asks who is actually meant by 'sie ruft zurück'.", de: "Gemeint ist die Anruferin; ich schreibe das im Protokoll deutlich hin.", en: "The caller is meant; I'll write that clearly in the minutes." },
    { task: "Rollenspiel: Ihr prüft eine Präsentation auf Klarheit.", taskEn: "Role-play: you check a presentation for clarity.", de: "Hier ist unklar, wer sie ist. — Dann schreiben wir besser die Abteilung.", en: "Here it's unclear who 'she' is. — Then we'd better write 'the department'." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Take a repetitive text and rewrite it using appropriate Verweiswörter (er/sie/es, dieser/diese/dieses, das/dies), keeping every reference clear.\n\nTASK 2 — Formal report (8-10 sentences): Write a report in which ideas are linked naturally without excessive repetition — every reference word must be unambiguous.',
    starters: ['Der Bericht wurde veröffentlicht. Er ...', 'Die Firma investiert in KI. Dadurch ...'],
    placeholder: 'Der Bericht ist wichtig. Er wurde veröffentlicht. Anschließend wurde er diskutiert.',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence has an AMBIGUOUS reference?',
      options: ['Anna spricht mit Maria. Sie ist freundlich.', 'Rohan schreibt einen Bericht. Er gibt ihn morgen ab.', 'Die Ergebnisse waren gut. Sie waren überzeugend.'],
      answer: 0,
      explain: '"Sie" could refer to Anna OR Maria — both feminine. The other two sentences have only one possible antecedent.'
    },
    gap: {
      sentence: ['Der Bericht wurde veröffentlicht. ', ' war erfolgreich.'],
      gaps: [ { answer: 'Er', accepts: ['Er'] } ],
      explain: '"Er" refers back to "der Bericht" — masculine, singular.'
    },
    match: {
      q: 'Match each reference word to what it refers to.',
      pairs: [
        { noun: 'Er (→ der Bericht)', art: 'Pronoun reference to a masculine noun' },
        { noun: 'Diese (→ die Ergebnisse)', art: 'Demonstrative reference to a plural noun' },
        { noun: 'Das (→ viele Studenten lernen online)', art: 'Reference to an entire idea' },
        { noun: 'Sie (→ Anna spricht mit Maria)', art: 'Ambiguous reference' }
      ]
    },
    builder: {
      target: 'Build: "The presentation was successful. This one was published later." (demonstrative reference)',
      bank: ['Die', 'Präsentation', 'war', 'erfolgreich', '.', 'Diese', 'wurde', 'später', 'veröffentlicht', '.'],
      answer: ['Die', 'Präsentation', 'war', 'erfolgreich', '.', 'Diese', 'wurde', 'später', 'veröffentlicht', '.'],
      roles: { 'Präsentation': 'r-antecedent', 'Diese': 'r-verweis' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Buch ist interessant. Diese ist teuer.',
      right: 'Das Buch ist interessant. Dieses ist teuer.',
      explain: '"Buch" is neuter — the demonstrative must agree: "dieses", not the feminine "diese".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is a Verweiswort?', options: ['A word that points back to something already mentioned', 'A new piece of information', 'A conjugated verb form'], answer: 0,
      explain: 'Verweiswörter (er/sie/es, dieser/diese/dieses, das/dies) refer back to previously mentioned nouns or ideas.' },
    { q: 'What does "das" often refer to when it points to an entire previous sentence?', options: ['The whole previous idea, not one noun', 'Only the subject', 'Only the object'], answer: 0,
      explain: '"das" and "dies" frequently refer to an entire previous statement.' },
    { q: 'Why is "Anna spricht mit Maria. Sie ist freundlich." problematic?', options: ['The reference of "Sie" is ambiguous', 'It has a grammar error', 'It uses the wrong tense'], answer: 0,
      explain: '"Sie" could mean Anna or Maria — both feminine — making the reference unclear.' },
    { q: 'What should you do when a reference would be ambiguous?', options: ['Repeat the noun instead', 'Use a pronoun anyway', 'Delete the sentence'], answer: 0,
      explain: 'Clarity always outranks avoiding repetition — repeat the noun if needed.' },
    { q: 'Is repeating a noun sometimes the CORRECT choice?', options: ['Yes — when a pronoun would be ambiguous', 'No — always use a Verweiswort', 'Only in formal writing'], answer: 0,
      explain: 'When two possible antecedents exist, repeating the noun avoids confusion.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verweis', html: 'Good German connects ideas with Verweiswörter (er/sie/es, dieser/diese/dieses, das/dies) instead of repeating the same noun.' },
    { c: 'r-verweis', html: '"das"/"dies" often refer to an ENTIRE previous idea, not just one noun — while pronouns and demonstratives match a specific antecedent\'s gender and number.' },
    { c: 'r-ambig', html: 'Clarity always outranks avoiding repetition — if a reference could point to two things, repeat the noun instead.' }
  ],
  revisionTips: [
    'For every repetitive paragraph you write, practise replacing at least one repeated noun with a clear Verweiswort.',
    'Scan a German news article or report and draw an arrow from each pronoun/demonstrative back to its antecedent.',
    'Before using "sie" or "er", ask: could this point to more than one person or thing? If yes, repeat the noun.'
  ]
};

window.CHAPTER = CHAPTER;
