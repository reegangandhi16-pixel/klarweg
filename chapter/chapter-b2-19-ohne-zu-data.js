/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 19
   "ohne ... zu" — an action that does NOT accompany the main
   action, same subject required (contrasted briefly with "ohne
   dass" for different subjects). Builds on Infinitiv mit zu.
   Does NOT introduce anstatt...zu, um...zu, or full ohne-dass
   grammar (later chapters).
   IMPORTANT: dialogue uses ONLY Steffi and Timo.
   Vocabulary source: uploaded chapter-19 list (55 items, user-edited
   general B2 vocabulary bank — career/job-application themes).
============================================================ */
const CHAPTER = {
  id: 'b2-19-ohne-zu',
  phase: 'B2 · Phase 1',
  number: 19,
  title: 'ohne ... zu',
  titleEn: 'without ... -ing',
  description: 'Something happened — and one thing conspicuously did not. ohne...zu names exactly what was skipped, same subject required.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 20, title: '(an)statt ... zu', titleEn: 'instead of ... -ing' , href: 'chapter-b2-20-anstatt-zu.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'What <em>didn\'t</em> happen.',
    intro: 'Steffi is annoyed that Timo planned a team event without asking her, deciding without thinking it through — every sentence naming exactly what got skipped along the way with ohne … zu.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear ohne...zu name a missing accompanying action, same subject throughout'
    ],
    scene: 'Der Stellenwechsel',
    femaleSpeakers: ['Steffi'],
    dialogue: [
      { speaker: 'Steffi', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'hast', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Teamevent', role: 'r-akkusativ', en: 'team event', hi: 'टीम इवेंट', pron: 'TEEM-i-vent', type: 'Noun · neut.' },
        { w: 'geplant', role: 'r-verb', en: 'planned', hi: 'योजना बनाई', pron: 'ge-PLAHNT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'ohne', role: 'r-conjunction', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Conjunction · ohne … zu', why: 'ohne + zu-Infinitiv = without (doing something), this chapter.', ex: 'Du hast geplant, ohne mich zu fragen.', exEn: 'You planned without asking me.' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझसे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'fragen', role: 'r-verb', en: 'ask', hi: 'पूछना', pron: 'FRAH-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'You planned the team event without asking me.', hi: 'Tumne mujhse poochhe bina team event ki yojana banaayi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Entschuldigung', role: 'r-subject', en: 'sorry', hi: 'माफ़ करना', pron: 'ent-SHUL-di-gung', type: 'Politeness' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'entschieden', role: 'r-verb', en: 'decided', hi: 'फ़ैसला', pron: 'ent-SHEE-den', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'ohne', role: 'r-conjunction', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Conjunction · ohne … zu' },
        { w: 'nachzudenken', role: 'r-verb', en: 'thinking', hi: 'सोचे', pron: 'NAHKH-tsu-den-ken', type: 'Verb · infinitive (Satzende)', why: 'zu goes inside separable verbs: nach-zu-denken (this chapter).', ex: 'Ich habe entschieden, ohne nachzudenken.', exEn: 'I decided without thinking.' },
        { w: '.', plain: true }
      ], en: 'Sorry! I decided that without thinking.', hi: 'Maaf karna! Maine yeh soche bina faisla kiya.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'kannst', role: 'r-modalverb', en: 'can you', hi: 'सकते हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'machen', role: 'r-verb', en: 'do', hi: 'करना', pron: 'MA-khen', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'ohne', role: 'r-conjunction', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Conjunction · ohne … zu' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Team', role: 'r-akkusativ', en: 'team', hi: 'टीम', pron: 'teem', type: 'Noun · neut.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'informieren', role: 'r-verb', en: 'inform', hi: 'सूचित करना', pron: 'in-for-MEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'How can you do that without informing the team?', hi: 'Tum team ko soochit kiye bina yeh kaise kar sakte ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'सही', pron: 'hast', type: 'Verb · haben' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'सुधारूंगा', pron: 'VAIR-duh', type: 'Verb · werden' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'wieder', role: 'r-adverb', en: 'again', hi: 'फिर से', pron: 'VEE-der', type: 'Adverb' },
        { w: 'tun', role: 'r-verb', en: 'do', hi: 'करना', pron: 'toon', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'ohne', role: 'r-conjunction', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Conjunction · ohne … zu' },
        { w: 'euch', role: 'r-akkusativ', en: 'you all', hi: 'तुम सबको', pron: 'oykh', type: 'Pronoun · acc.' },
        { w: 'einzubeziehen', role: 'r-verb', en: 'including', hi: 'शामिल किए', pron: 'INE-tsu-be-tsee-en', type: 'Verb · infinitive (Satzende)', why: 'einbeziehen = to include, separable (this chapter).', ex: 'ohne euch einzubeziehen', exEn: 'without including you all' },
        { w: '.', plain: true }
      ], en: 'You are right. I will not do that again without including you all.', hi: 'Tum sahi ho. Main tum sab ko shaamil kiye bina yeh phir se nahi karunga.' },
      { speaker: 'Steffi', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'Team', role: 'r-akkusativ', en: 'team', hi: 'टीम', pron: 'teem', type: 'Noun · neut.' },
        { w: 'nächstes', role: 'r-akkusativ', en: 'next', hi: 'अगली', pron: 'NEKS-tes', type: 'Adjective' },
        { w: 'Mal', role: 'r-akkusativ', en: 'time', hi: 'बार', pron: 'mahl', type: 'Noun · neut.' },
        { w: 'einbeziehen', role: 'r-verb', en: 'include', hi: 'शामिल करना', pron: 'INE-be-tsee-en', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'ohne', role: 'r-conjunction', en: 'without', hi: 'के बिना', pron: 'O-nuh', type: 'Conjunction · ohne … zu' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'zögern', role: 'r-verb', en: 'hesitating', hi: 'देरी किए', pron: 'TSÖ-gern', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Good. Can we include the team next time without hesitating?', hi: 'Achha. Kya hum agli baar bina deri kiye team ko shaamil kar sakte hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'बनाता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'I gladly make that happen.', hi: 'Main khushi se yeh karunga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-ohnezu">ohne ... zu</span> names an action that did NOT accompany the main action — the SAME subject does both. <span class="de">Anna ging nach Hause, ohne sich zu verabschieden.</span> When the subjects differ, use "ohne dass" instead: <span class="de">Anna geht, ohne dass Rohan etwas sagt.</span>'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is OHNE ... ZU (B2 level): expresses an action that does NOT happen alongside the main action, using an infinitive-with-zu construction (Anna ging nach Hause, ohne sich zu verabschieden. / Rohan bestand die Prüfung, ohne viel zu lernen.). CRITICAL RULE: the subject of both actions must be the SAME. If the subjects differ, "ohne dass" + a full subordinate clause is required instead (Anna geht, ohne dass Rohan etwas sagt.) — this chapter only briefly compares "ohne dass", it does not teach its full grammar. Builds on "Infinitiv mit zu" from B1. ' +
    'Do NOT expect anstatt...zu, um...zu, or deep ohne-dass grammar — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "ohne ... zu" requires the same subject in both clauses — if the learner tries to name a different subject inside the ohne-clause, flag it and suggest "ohne dass" instead.\n' +
    '- "zu" must be placed correctly before the infinitive (or between prefix and stem for separable verbs: ohne einzustellen).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Same-subject check:</b> one sentence on whether the learner correctly kept the same subject in each ohne...zu construction.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use ohne...zu with same-subject constructions and proper zu-placement. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the same-subject rule once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: ohne...zu only works when the SAME subject does both actions.'
  },

  parserSentence: [
    { w: 'Anna', role: 'plain' }, { w: 'ging', role: 'plain' },
    { w: ',', plain: true }, { w: 'ohne', role: 'r-ohnezu' }, { w: 'sich', role: 'plain' }, { w: 'zu', role: 'plain' }, { w: 'verabschieden', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: ohne...zu names a missing action, same subject required.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Steffi and Timo compare notes on a job change, noticing what got skipped.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master ohne...zu word order, the same-subject rule, and comparison to ohne dass.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of ohne...zu constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the main action, the omitted action, and same-subject constructions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe actions and travel experiences using ohne...zu naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and emails using ohne...zu appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill same-subject vs different-subject, sentence building, and error correction.' },
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
      desc: 'Same-subject drills, ohne...zu vs ohne dass classification, sentence building, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete ohne...zu reference — word order, same-subject rule, ohne dass comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna ging, ohne sich zu verabschieden.', text: 'Use ohne...zu to name a missing accompanying action' },
    { de: 'Rohan bestand die Prüfung, ohne viel zu lernen.', text: 'Place zu correctly before the infinitive' },
    { de: 'Same subject required', text: 'Know when ohne...zu is grammatically possible' },
    { de: 'ohne...zu vs. ohne dass', text: 'Distinguish same-subject from different-subject constructions' },
    { de: 'Formal reports, newspapers, presentations', text: 'Use ohne...zu naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-19 list) ----------
  vocab: [
    { de: 'Rohwarenlager', art: 'das', gender: 'n', plural: 'Rohwarenlager', pos: 'noun', level: 'B2', en: 'raw-goods warehouse', hi: 'कच्चे माल का गोदाम', ex: 'Der Unternehmer gestaltete das Rohwarenlager um, ohne zusätzliche Kosten zu verursachen.', exEn: 'The entrepreneur redesigned the raw-goods warehouse without causing additional costs.', exHi: 'Udyami ne kacche maal ke godaam ko dobaara design kiya, atirikt lagat utpann kiye bina.', ex2: 'Das Rohwarenlager ist voll ausgelastet.', ex2En: 'The raw-goods warehouse is at full capacity.', ex2Hi: 'Kacche maal ka godaam poori kshamata par hai.' },
    { de: 'Rolle', art: 'die', gender: 'f', plural: 'Rollen', pos: 'noun', level: 'B2', en: 'role, roll', hi: 'भूमिका', ex: 'Sie spielt eine wichtige Rolle im Team.', exEn: 'She plays an important role in the team.', exHi: 'Woh team mein mahatvapurn bhoomika nibhaati hai.', ex2: 'Die Rolle wurde neu besetzt.', ex2En: 'The role was recast.', ex2Hi: 'Bhoomika naye vyakti ko di gayi.' },
    { de: 'Säge', art: 'die', gender: 'f', plural: 'Sägen', pos: 'noun', level: 'B2', en: 'saw', hi: 'आरी', ex: 'Er benutzt eine elektrische Säge.', exEn: 'He uses an electric saw.', exHi: 'Woh ek electric aari ka upyog karta hai.', ex2: 'Die Säge ist scharf.', ex2En: 'The saw is sharp.', ex2Hi: 'Aari teekhi hai.' },
    { de: 'Schlussformel', art: 'die', gender: 'f', plural: 'Schlussformeln', pos: 'noun', level: 'B2', en: 'closing formula', hi: 'समापन सूत्र', ex: 'Der Bewerbungstrainer schrieb das Bewerbungsschreiben um, ohne die Schlussformel zu ändern.', exEn: 'The application coach rewrote the letter of application, without changing the closing formula.', exHi: 'Aavedan prashikshak ne aavedan patra ko dobaara likha, samaapan sootra badle bina.', ex2: 'Die Schlussformel lautet "Mit freundlichen Grüßen".', ex2En: 'The closing formula is "Kind regards".', ex2Hi: 'Samaapan sootra "Mit freundlichen Grüßen" hai.' },
    { de: 'Schneider/in', art: 'der/die', gender: 'm/f', plural: 'Schneider/innen', pos: 'noun', level: 'B2', en: 'tailor', hi: 'दर्ज़ी', ex: 'Der Schneider näht den Anzug.', exEn: 'The tailor sews the suit.', exHi: 'Darzi suit siyta hai.', ex2: 'Die Schneiderin arbeitet sehr präzise.', ex2En: 'The tailor works very precisely.', ex2Hi: 'Darzi bahut satikta se kaam karti hai.' },
    { de: 'selbstbewusst', pos: 'adjective', level: 'B2', en: 'self-confident', hi: 'आत्मविश्वासी', ex: 'Sie ist sehr selbstbewusst und verhandelte das Gehalt, ohne verzweifelt zu wirken.', exEn: 'She is very self-confident and negotiated the salary without seeming desperate.', exHi: 'Woh bahut aatmavishvaasi hai aur usne hataash dikhe bina vetan par baatcheet ki.', ex2: 'Ein selbstbewusster Auftritt hilft im Vorstellungsgespräch.', ex2En: 'A self-confident appearance helps in the job interview.', ex2Hi: 'Interview mein aatmavishvaasi vyavahaar madad karta hai.' },
    { de: 'seriös', pos: 'adjective', level: 'B2', en: 'reputable, serious', hi: 'विश्वसनीय', ex: 'Das Unternehmen wirkt sehr seriös.', exEn: 'The company seems very reputable.', exHi: 'Company bahut vishvasaniya lagti hai.', ex2: 'Er machte einen seriösen Eindruck.', ex2En: 'He made a reputable impression.', ex2Hi: 'Usne ek vishvasaniya chhaap chhodi.' },
    { de: 'Shampoo', art: 'das', gender: 'n', plural: 'Shampoos', pos: 'noun', level: 'B2', en: 'shampoo', hi: 'शैम्पू', ex: 'Sie kauft ein neues Shampoo.', exEn: 'She buys a new shampoo.', exHi: 'Woh naya shampoo khareedti hai.', ex2: 'Das Shampoo riecht nach Zitrone.', ex2En: 'The shampoo smells like lemon.', ex2Hi: 'Shampoo mein neembu ki khushboo hai.' },
    { de: 'sozial', pos: 'adjective', level: 'B2', en: 'social', hi: 'सामाजिक', ex: 'Soziale Kompetenz ist im Beruf wichtig.', exEn: 'Social competence is important in the profession.', exHi: 'Peshe mein saamaajik yogyata mahatvapurn hai.', ex2: 'Er engagiert sich sozial.', ex2En: 'He is socially engaged.', ex2Hi: 'Woh saamaajik roop se sakriya hai.' },
    { de: 'Spalte', art: 'die', gender: 'f', plural: 'Spalten', pos: 'noun', level: 'B2', en: 'column, crack', hi: 'स्तंभ, दरार', ex: 'Er füllt die Spalte im Formular aus.', exEn: 'He fills in the column in the form.', exHi: 'Woh form mein stambh bharta hai.', ex2: 'Eine Spalte zog sich durch den Fels.', ex2En: 'A crack ran through the rock.', ex2Hi: 'Ek daraar chattaan se hokar gayi.' },
    { de: 'Start-up', art: 'das', gender: 'n', plural: 'Start-ups', pos: 'noun', level: 'B2', en: 'start-up', hi: 'स्टार्ट-अप', ex: 'Das Start-up wuchs, ohne einen Investor zu brauchen.', exEn: 'The start-up grew without needing an investor.', exHi: 'Start-up nivesak ki zaroorat ke bina badha.', ex2: 'Viele Start-ups scheitern in den ersten Jahren.', ex2En: 'Many start-ups fail in the first years.', ex2Hi: 'Kai start-ups pehle saalon mein असफल ho jaate hain.' },
    { de: 'Stellenanzeige', art: 'die', gender: 'f', plural: 'Stellenanzeigen', pos: 'noun', level: 'B2', en: 'job advertisement', hi: 'नौकरी विज्ञापन', ex: 'Ich las die Stellenanzeige, ohne die Anforderungen zu verstehen.', exEn: 'I read the job advertisement without understanding the requirements.', exHi: 'Maine naukri vigyaapan padhi, aavashyaktaayein samjhe bina.', ex2: 'Die Stellenanzeige wurde online veröffentlicht.', ex2En: 'The job advertisement was published online.', ex2Hi: 'Naukri vigyaapan online prakaashit hua.' },
    { de: 'Stellenwechsel', art: 'der', gender: 'm', plural: 'Stellenwechsel', pos: 'noun', level: 'B2', en: 'job change', hi: 'नौकरी परिवर्तन', ex: 'Ich habe den Stellenwechsel gewagt, ohne lange nachzudenken.', exEn: 'I dared the job change without thinking long.', exHi: 'Maine bina zyaada der socche naukri parivartan ki himmat ki.', ex2: 'Ein Stellenwechsel kann bereichernd sein.', ex2En: 'A job change can be enriching.', ex2Hi: 'Naukri parivartan samriddh kar sakta hai.' },
    { de: 'Stuntschule', art: 'die', gender: 'f', plural: 'Stuntschulen', pos: 'noun', level: 'B2', en: 'stunt school', hi: 'स्टंट स्कूल', ex: 'Er besuchte eine Stuntschule.', exEn: 'He attended a stunt school.', exHi: 'Woh ek stunt school gaya.', ex2: 'Die Stuntschule bietet Kurse für Anfänger.', ex2En: 'The stunt school offers courses for beginners.', ex2Hi: 'Stunt school beginners ke liye courses deta hai.' },
    { de: 'Teamevent', art: 'das', gender: 'n', plural: 'Teamevents', pos: 'noun', level: 'B2', en: 'team event', hi: 'टीम आयोजन', ex: 'Das Teamevent war ein voller Erfolg.', exEn: 'The team event was a full success.', exHi: 'Team aayojan poori tarah safal raha.', ex2: 'Wir planen ein Teamevent für nächsten Monat.', ex2En: 'We are planning a team event for next month.', ex2Hi: 'Hum agle mahine ke liye ek team aayojan yojana bana rahe hain.' },
    { de: 'teamfähig', pos: 'adjective', level: 'B2', en: 'able to work in a team', hi: 'टीम में काम करने योग्य', ex: 'Sie ist sehr teamfähig.', exEn: 'She is very able to work in a team.', exHi: 'Woh team mein kaam karne mein bahut saksham hai.', ex2: 'Teamfähigkeit wird in der Stellenanzeige gefordert.', ex2En: 'Team ability is required in the job advertisement.', ex2Hi: 'Naukri vigyaapan mein team ki yogyata maangi jaati hai.' },
    { de: 'Teamgeist', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'team spirit', hi: 'टीम भावना', ex: 'Der Teamgeist im Büro ist sehr gut.', exEn: 'The team spirit in the office is very good.', exHi: 'Office mein team ki bhaavna bahut achhi hai.', ex2: 'Teamgeist entsteht durch gemeinsame Erfolge.', ex2En: 'Team spirit arises from shared successes.', ex2Hi: 'Team ki bhaavna saanjhi safalta se banti hai.' },
    { de: 'Textilbereich', art: 'der', gender: 'm', plural: 'Textilbereiche', pos: 'noun', level: 'B2', en: 'textile sector', hi: 'वस्त्र क्षेत्र', ex: 'Sie arbeitet im Textilbereich.', exEn: 'She works in the textile sector.', exHi: 'Woh vastra kshetra mein kaam karti hai.', ex2: 'Der Textilbereich wächst stark in Asien.', ex2En: 'The textile sector is growing strongly in Asia.', ex2Hi: 'Asia mein vastra kshetra tezi se badh raha hai.' },
    { de: 'Textilie', art: 'die', gender: 'f', plural: 'Textilien', pos: 'noun', level: 'B2', en: 'textile, fabric', hi: 'वस्त्र', ex: 'Die Textilien wurden importiert.', exEn: 'The textiles were imported.', exHi: 'Vastra aayaat kiye gaye the.', ex2: 'Diese Textilie ist sehr weich.', ex2En: 'This fabric is very soft.', ex2Hi: 'Yeh vastra bahut mulaayam hai.' },
    { de: 'überlastet', pos: 'adjective', level: 'B2', en: 'overloaded, overworked', hi: 'अत्यधिक भारित', ex: 'Sie fühlt sich überlastet.', exEn: 'She feels overworked.', exHi: 'Use atyadhik bhaarit mehsoos hota hai.', ex2: 'Das System ist überlastet.', ex2En: 'The system is overloaded.', ex2Hi: 'System atyadhik bhaarit hai.' },
    { de: 'übersichtlich', pos: 'adjective', level: 'B2', en: 'clear, well-organised', hi: 'स्पष्ट, सुव्यवस्थित', ex: 'Der Bericht ist sehr übersichtlich.', exEn: 'The report is very well-organised.', exHi: 'Report bahut suvyavasthit hai.', ex2: 'Die Webseite ist übersichtlich gestaltet.', ex2En: 'The website is clearly designed.', ex2Hi: 'Website spasht roop se design ki gayi hai.' },
    { de: 'Umfang', art: 'der', gender: 'm', plural: 'Umfänge', pos: 'noun', level: 'B2', en: 'extent, scope', hi: 'सीमा, दायरा', ex: 'Der Umfang der Aufgabe ist groß.', exEn: 'The scope of the task is large.', exHi: 'Kaam ka daayra bada hai.', ex2: 'Der Umfang des Projekts wurde reduziert.', ex2En: 'The scope of the project was reduced.', ex2Hi: 'Project ka daayra kam kar diya gaya.' },
    { de: 'umfangreich', pos: 'adjective', level: 'B2', en: 'extensive, comprehensive', hi: 'व्यापक', ex: 'Der Bericht ist sehr umfangreich.', exEn: 'The report is very extensive.', exHi: 'Report bahut vyaapak hai.', ex2: 'Die Recherche war umfangreich.', ex2En: 'The research was comprehensive.', ex2Hi: 'Shodh vyaapak thi.' },
    { de: 'umgestalten', pos: 'verb', level: 'B2', en: 'to redesign, remodel', hi: 'दोबारा डिज़ाइन करना', ex: 'Der Unternehmer gestaltete das Rohwarenlager um, ohne zusätzliche Kosten zu verursachen.', exEn: 'The entrepreneur redesigned the raw-goods warehouse without causing additional costs.', exHi: 'Udyami ne kacche maal ke godaam ko dobaara design kiya, atirikt lagat utpann kiye bina.', ex2: 'Sie gestalten das Büro komplett um.', ex2En: 'They are completely redesigning the office.', ex2Hi: 'Woh office ko poori tarah dobaara design kar rahe hain.', conj: { praesens: 'gestaltet um', praeteritum: 'gestaltete um', perfekt: 'hat umgestaltet' } },
    { de: 'Umkreis', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'vicinity, radius', hi: 'आसपास का क्षेत्र', ex: 'Im Umkreis von zehn Kilometern gibt es keine Schule.', exEn: 'Within a radius of ten kilometres there is no school.', exHi: 'Das kilometre ke daayre mein koi school nahi hai.', ex2: 'Wir suchen im Umkreis nach einer Wohnung.', ex2En: 'We are searching in the vicinity for a flat.', ex2Hi: 'Hum aas-paas ke ilaake mein flat dhoondh rahe hain.' },
    { de: 'ungeliebt', pos: 'adjective', level: 'B2', en: 'unloved', hi: 'अप्रिय', ex: 'Das war eine ungeliebte Aufgabe.', exEn: 'That was an unloved task.', exHi: 'Yeh ek apriya kaam tha.', ex2: 'Er fühlte sich ungeliebt.', ex2En: 'He felt unloved.', ex2Hi: 'Use apriya mehsoos hua.' },
    { de: 'Unternehmen', art: 'das', gender: 'n', plural: 'Unternehmen', pos: 'noun', level: 'B2', en: 'company, enterprise', hi: 'कंपनी', ex: 'Das Unternehmen wächst stetig.', exEn: 'The company is growing steadily.', exHi: 'Company lagataar badh rahi hai.', ex2: 'Das Unternehmen wurde vor zehn Jahren gegründet.', ex2En: 'The company was founded ten years ago.', ex2Hi: 'Company das saal pehle sthaapit hui thi.' },
    { de: 'Unternehmer/in', art: 'der/die', gender: 'm/f', plural: 'Unternehmer/innen', pos: 'noun', level: 'B2', en: 'entrepreneur', hi: 'उद्यमी', ex: 'Der Unternehmer gestaltete das Rohwarenlager um, ohne zusätzliche Kosten zu verursachen.', exEn: 'The entrepreneur redesigned the raw-goods warehouse without causing additional costs.', exHi: 'Udyami ne kacche maal ke godaam ko dobaara design kiya, atirikt lagat utpann kiye bina.', ex2: 'Sie ist eine erfolgreiche Unternehmerin.', ex2En: 'She is a successful entrepreneur.', ex2Hi: 'Woh ek safal udyami hai.' },
    { de: 'Vergnügen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'pleasure', hi: 'आनंद', ex: 'Es war mir ein Vergnügen.', exEn: 'It was a pleasure for me.', exHi: 'Yeh mere liye aanand tha.', ex2: 'Reisen bereitet ihm großes Vergnügen.', ex2En: 'Travelling gives him great pleasure.', ex2Hi: 'Yatra karna use bahut aanand deta hai.' },
    { de: 'verhandlungssicher', pos: 'adjective', level: 'B2', en: 'fluent in negotiation', hi: 'बातचीत में दक्ष', ex: 'Sie spricht verhandlungssicheres Englisch.', exEn: 'She speaks negotiation-fluent English.', exHi: 'Woh baatcheet mein dakshta se angrezi bolti hai.', ex2: 'Verhandlungssichere Sprachkenntnisse werden gefordert.', ex2En: 'Negotiation-fluent language skills are required.', ex2Hi: 'Baatcheet mein dakshta waali bhaasha kaushal maangi jaati hai.' },
    { de: 'verlässlich', pos: 'adjective', level: 'B2', en: 'reliable', hi: 'भरोसेमंद', ex: 'Er ist ein verlässlicher Kollege.', exEn: 'He is a reliable colleague.', exHi: 'Woh ek bharosemand sahakarmi hai.', ex2: 'Die Information war nicht verlässlich.', ex2En: 'The information wasn\'t reliable.', ex2Hi: 'Jaankaari bharosemand nahi thi.' },
    { de: 'vernünftig', pos: 'adjective', level: 'B2', en: 'reasonable, sensible', hi: 'तर्कसंगत', ex: 'Das ist ein vernünftiger Vorschlag.', exEn: 'That is a reasonable suggestion.', exHi: 'Yeh ek tarksangat sujhaav hai.', ex2: 'Sei vernünftig und denk nach.', ex2En: 'Be sensible and think it through.', ex2Hi: 'Samajhdaar bano aur socho.' },
    { de: 'verzweifelt', pos: 'adjective', level: 'B2', en: 'desperate, despairing', hi: 'हताश', ex: 'Sie verhandelte das Gehalt, ohne verzweifelt zu wirken.', exEn: 'She negotiated the salary without seeming desperate.', exHi: 'Usne hataash dikhe bina vetan par baatcheet ki.', ex2: 'Er sah verzweifelt aus.', ex2En: 'He looked desperate.', ex2Hi: 'Woh hataash dikh raha tha.' },
    { de: 'voraussichtlich', pos: 'adjective', level: 'B2', en: 'presumably, expected', hi: 'संभावित रूप से', ex: 'Das Projekt ist voraussichtlich im Juni fertig.', exEn: 'The project is expected to be finished in June.', exHi: 'Project June mein poora hone ki sambhaavna hai.', ex2: 'Voraussichtlich wird es morgen regnen.', ex2En: 'It is presumably going to rain tomorrow.', ex2Hi: 'Kal baarish hone ki sambhaavna hai.' },
    { de: 'Vorgesetzte/r', art: 'der/die', gender: 'm/f', plural: 'Vorgesetzte', pos: 'noun', level: 'B2', en: 'superior, boss', hi: 'वरिष्ठ अधिकारी', ex: 'Der Geschäftsführer entschied, ohne den Vorgesetzten zu fragen.', exEn: 'The managing director decided without asking the superior.', exHi: 'Prabandh nideshak ne varisth adhikaari se poochhe bina faisla kiya.', ex2: 'Mein Vorgesetzter ist sehr fair.', ex2En: 'My superior is very fair.', ex2Hi: 'Mera varisth adhikaari bahut nishpaksh hai.' },
    { de: 'Vorliebe', art: 'die', gender: 'f', plural: 'Vorlieben', pos: 'noun', level: 'B2', en: 'preference, fondness', hi: 'पसंद', ex: 'Meine Vorliebe für diesen Job wuchs, ohne dass jemand mich überzeugte.', exEn: 'My preference for this job grew, without anyone convincing me.', exHi: 'Is naukri ke prati meri pasand badhi, bina kisi ne mujhe manaaye.', ex2: 'Sie hat eine Vorliebe für italienisches Essen.', ex2En: 'She has a fondness for Italian food.', ex2Hi: 'Use Italian khaana pasand hai.' },
    { de: 'Wechsel', art: 'der', gender: 'm', plural: 'Wechsel', pos: 'noun', level: 'B2', en: 'change, exchange', hi: 'परिवर्तन', ex: 'Der Wechsel des Jobs war eine gute Entscheidung.', exEn: 'The job change was a good decision.', exHi: 'Naukri ka parivartan ek achha faisla tha.', ex2: 'Ein Wechsel der Strategie war nötig.', ex2En: 'A change of strategy was necessary.', ex2Hi: 'Rananeeti mein parivartan zaroori tha.' },
    { de: 'Wette', art: 'die', gender: 'f', plural: 'Wetten', pos: 'noun', level: 'B2', en: 'bet, wager', hi: 'शर्त', ex: 'Er gewann die Wette.', exEn: 'He won the bet.', exHi: 'Usne shart jeet li.', ex2: 'Das war eine riskante Wette.', ex2En: 'That was a risky bet.', ex2Hi: 'Yeh ek jokhim bhari shart thi.' },
    { de: 'wirkungsvoll', pos: 'adjective', level: 'B2', en: 'effective', hi: 'प्रभावी', ex: 'Die Kampagne war sehr wirkungsvoll.', exEn: 'The campaign was very effective.', exHi: 'Abhiyaan bahut prabhaavi tha.', ex2: 'Ein wirkungsvoller Vortrag überzeugt das Publikum.', ex2En: 'An effective presentation convinces the audience.', ex2Hi: 'Ek prabhaavi prastuti darshakon ko convince karti hai.' },
    { de: 'wirtschaftlich', pos: 'adjective', level: 'B2', en: 'economic', hi: 'आर्थिक', ex: 'Die wirtschaftliche Lage ist schwierig.', exEn: 'The economic situation is difficult.', exHi: 'Aarthik sthiti mushkil hai.', ex2: 'Wirtschaftliches Wachstum ist wichtig.', ex2En: 'Economic growth is important.', ex2Hi: 'Aarthik vikaas mahatvapurn hai.' },
    { de: 'Zeitvertreib', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'pastime', hi: 'समय बिताने का साधन', ex: 'Lesen ist ihr liebster Zeitvertreib.', exEn: 'Reading is her favourite pastime.', exHi: 'Padhna uska pasandeeda samay bitaane ka saadhan hai.', ex2: 'Ein guter Zeitvertreib entspannt den Geist.', ex2En: 'A good pastime relaxes the mind.', ex2Hi: 'Ek achha samay bitaane ka saadhan dimaag ko aaraam deta hai.' },
    { de: 'zielorientiert', pos: 'adjective', level: 'B2', en: 'goal-oriented', hi: 'लक्ष्य-उन्मुख', ex: 'Sie arbeitet sehr zielorientiert.', exEn: 'She works in a very goal-oriented way.', exHi: 'Woh bahut lakshya-unmukh tareeke se kaam karti hai.', ex2: 'Zielorientiertes Denken hilft beim Erfolg.', ex2En: 'Goal-oriented thinking helps with success.', ex2Hi: 'Lakshya-unmukh soch safalta mein madad karti hai.' },
    { de: 'Auslandsaufenthalt', art: 'der', gender: 'm', plural: 'Auslandsaufenthalte', pos: 'noun', level: 'B2', en: 'stay abroad', hi: 'विदेश प्रवास', ex: 'Ein Auslandsaufenthalt verbessert die Sprachkenntnisse.', exEn: 'A stay abroad improves language skills.', exHi: 'Videsh prawaas bhaasha kaushal ko behtar banaata hai.', ex2: 'Ihr Auslandsaufenthalt dauerte sechs Monate.', ex2En: 'Her stay abroad lasted six months.', ex2Hi: 'Uska videsh prawaas chhe mahine chala.' },
    { de: 'Auslandssemester', art: 'das', gender: 'n', plural: 'Auslandssemester', pos: 'noun', level: 'B2', en: 'semester abroad', hi: 'विदेश में सेमेस्टर', ex: 'Sie plant ein Auslandssemester in Frankreich.', exEn: 'She is planning a semester abroad in France.', exHi: 'Woh France mein ek semester abroad ki yojana bana rahi hai.', ex2: 'Das Auslandssemester war eine wertvolle Erfahrung.', ex2En: 'The semester abroad was a valuable experience.', ex2Hi: 'Videsh mein semester ek mulyavan anubhav tha.' },
    { de: 'Bewerbungsbrief', art: 'der', gender: 'm', plural: 'Bewerbungsbriefe', pos: 'noun', level: 'B2', en: 'application letter', hi: 'आवेदन पत्र', ex: 'Er schrieb einen überzeugenden Bewerbungsbrief.', exEn: 'He wrote a convincing application letter.', exHi: 'Usne ek prabhaavshaali aavedan patra likha.', ex2: 'Der Bewerbungsbrief sollte kurz sein.', ex2En: 'The application letter should be short.', ex2Hi: 'Aavedan patra chhota hona chahiye.' },
    { de: 'Bewerbungsschreiben', art: 'das', gender: 'n', plural: 'Bewerbungsschreiben', pos: 'noun', level: 'B2', en: 'letter of application', hi: 'आवेदन पत्र', ex: 'Der Bewerbungstrainer schrieb das Bewerbungsschreiben um, ohne die Schlussformel zu ändern.', exEn: 'The application coach rewrote the letter of application, without changing the closing formula.', exHi: 'Aavedan prashikshak ne aavedan patra ko dobaara likha, samaapan sootra badle bina.', ex2: 'Ein gutes Bewerbungsschreiben ist entscheidend.', ex2En: 'A good letter of application is crucial.', ex2Hi: 'Ek achha aavedan patra mahatvapurn hai.' },
    { de: 'Bewerbungstrainer/in', art: 'der/die', gender: 'm/f', plural: 'Bewerbungstrainer/innen', pos: 'noun', level: 'B2', en: 'application coach', hi: 'आवेदन प्रशिक्षक', ex: 'Der Bewerbungstrainer schrieb das Bewerbungsschreiben um, ohne die Schlussformel zu ändern.', exEn: 'The application coach rewrote the letter of application, without changing the closing formula.', exHi: 'Aavedan prashikshak ne aavedan patra ko dobaara likha, samaapan sootra badle bina.', ex2: 'Die Bewerbungstrainerin gibt hilfreiche Tipps.', ex2En: 'The application coach gives helpful tips.', ex2Hi: 'Aavedan prashikshak upyogi sujhaav deti hai.' },
    { de: 'Biobaumwolltasche', art: 'die', gender: 'f', plural: 'Biobaumwolltaschen', pos: 'noun', level: 'B2', en: 'organic cotton bag', hi: 'जैविक कपास बैग', ex: 'Sie trägt eine Biobaumwolltasche.', exEn: 'She carries an organic cotton bag.', exHi: 'Woh ek jaivik kapaas bag le jaati hai.', ex2: 'Die Biobaumwolltasche ist umweltfreundlich.', ex2En: 'The organic cotton bag is environmentally friendly.', ex2Hi: 'Jaivik kapaas bag paryaavaran anukool hai.' },
    { de: 'Eventmanagement', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'event management', hi: 'आयोजन प्रबंधन', ex: 'Sie studiert Eventmanagement.', exEn: 'She studies event management.', exHi: 'Woh event management padhti hai.', ex2: 'Eventmanagement erfordert gute Organisation.', ex2En: 'Event management requires good organization.', ex2Hi: 'Event management mein achhe sangathan ki zaroorat hoti hai.' },
    { de: 'Eventmanager/in', art: 'der/die', gender: 'm/f', plural: 'Eventmanager/innen', pos: 'noun', level: 'B2', en: 'event manager', hi: 'आयोजन प्रबंधक', ex: 'Der Eventmanager plant die ganze Feier.', exEn: 'The event manager plans the whole celebration.', exHi: 'Event manager poori celebration ki yojana banaata hai.', ex2: 'Die Eventmanagerin hat viel Erfahrung.', ex2En: 'The event manager has a lot of experience.', ex2Hi: 'Event manager ke paas bahut anubhav hai.' },
    { de: 'Fingerspitzengefühl', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'tact, sensitivity', hi: 'व्यवहार कुशलता', ex: 'Diese Situation erfordert Fingerspitzengefühl.', exEn: 'This situation requires tact.', exHi: 'Is sthiti mein vyavahaar kushalta chahiye.', ex2: 'Sie handelte mit viel Fingerspitzengefühl.', ex2En: 'She acted with a lot of sensitivity.', ex2Hi: 'Usne bahut vyavahaar kushalta se kaam liya.' },
    { de: 'Gerechtigkeitssinn', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'sense of justice', hi: 'न्याय की भावना', ex: 'Er hat einen starken Gerechtigkeitssinn.', exEn: 'He has a strong sense of justice.', exHi: 'Uska nyaay ki bhaavna majboot hai.', ex2: 'Ihr Gerechtigkeitssinn beeindruckte alle.', ex2En: 'Her sense of justice impressed everyone.', ex2Hi: 'Uski nyaay ki bhaavna ne sabko prabhaavit kiya.' },
    { de: 'Geschäftsführer/in', art: 'der/die', gender: 'm/f', plural: 'Geschäftsführer/innen', pos: 'noun', level: 'B2', en: 'managing director', hi: 'प्रबंध निदेशक', ex: 'Der Geschäftsführer entschied, ohne den Vorgesetzten zu fragen.', exEn: 'The managing director decided without asking the superior.', exHi: 'Prabandh nideshak ne varisth adhikaari se poochhe bina faisla kiya.', ex2: 'Die Geschäftsführerin leitet das Unternehmen erfolgreich.', ex2En: 'The managing director leads the company successfully.', ex2Hi: 'Prabandh nideshak company ka safaltapoorvak netritva karti hai.' },
    { de: 'Grillmeister/in', art: 'der/die', gender: 'm/f', plural: 'Grillmeister/innen', pos: 'noun', level: 'B2', en: 'barbecue master', hi: 'बारबेक्यू मास्टर', ex: 'Er ist der Grillmeister der Familie.', exEn: 'He is the barbecue master of the family.', exHi: 'Woh parivaar ka barbecue master hai.', ex2: 'Die Grillmeisterin bereitet leckere Gerichte zu.', ex2En: 'The barbecue master prepares tasty dishes.', ex2Hi: 'Barbecue master swaadisht vyanjan taiyaar karti hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "ohne ... zu"?',
      body: [ '"ohne ... zu" means "without doing something." It answers: what happened WITHOUT another action?' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna ging nach Hause, ohne sich zu verabschieden.</span>'],
          ['<span class="de">Rohan bestand die Prüfung, ohne viel zu lernen.</span>']
        ]
      },
      hinglish: '"ohne ... zu" ka matlab hai "kuch kiye bina". Yeh batata hai ki kaam ho gaya, par ek doosra action kiye bina.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Main clause, comma, "ohne" + the omitted action as an infinitive with "zu" at the end.' ],
      table: {
        head: ['Main Clause', 'ohne ... zu'],
        rows: [
          ['Ich gehe schlafen,', 'ohne fernzusehen.'],
          ['Anna verließ das Büro,', 'ohne etwas zu sagen.'],
          ['Wir fuhren nach Berlin,', 'ohne einen Plan zu haben.']
        ]
      },
      hinglish: 'Pehle main clause aata hai, phir comma, phir "ohne", aur jo kaam nahi hua woh infinitive ban kar "zu" ke saath sentence ke end mein aata hai.'
    },
    {
      title: 'Same-Subject-Regel',
      body: [ 'The <b>ohne \u2026 zu</b> infinitive has no subject of its own, so it borrows the subject of the main clause \u2014 both actions belong to the same person. Careful: an object inside the clause is perfectly fine. <span class="de">Anna geht, ohne Rohan etwas zu sagen</span> is correct German, because <i>Rohan</i> is the person being told, not the one doing the leaving. Only a second <b>subject</b> forces you to switch to <b>ohne dass</b>.' ],
      table: {
        head: ['Correct', 'Incorrect'],
        rows: [
          ['<span class="de">Anna geht, ohne etwas zu sagen.</span> (Anna does both actions)', '<span class="strike de">Anna geht, ohne Rohan etwas sagt.</span> (a second subject cannot take a finite verb here)']
        ]
      },
      hinglish: '<b>ohne \u2026 zu</b> wale infinitive ka apna subject nahi hota, isliye woh main clause ka subject use karta hai \u2014 matlab dono kaam ek hi banda karta hai. Ek baat dhyaan mein rakho: clause ke andar object aa sakta hai. <span class="de">Anna geht, ohne Rohan etwas zu sagen</span> bilkul sahi hai, kyunki Rohan ko bataya jaa raha hai \u2014 jaa Anna hi rahi hai. Sirf doosra <b>subject</b> aaye to <b>ohne dass</b> par jaana padta hai.'
    },
    {
      title: '"ohne ... zu" vs "ohne dass"',
      body: [ 'When subjects differ, use "ohne dass" + a full subordinate clause instead — this chapter only compares it briefly.' ],
      table: {
        head: ['Same Subject', 'Different Subjects'],
        rows: [
          ['<span class="de">Anna geht, ohne etwas zu sagen.</span>', '<span class="de">Anna geht, ohne dass Rohan etwas sagt.</span>']
        ]
      },
      hinglish: 'Jab dono clauses ke subject alag ho jaayein, to "ohne dass" ke saath poora subordinate clause lagta hai. Yahan ise sirf compare ke liye dikhaya gaya hai.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show ohne...zu in workplace and university contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Viele Studenten bestehen die Prüfung, ohne einen Vorbereitungskurs zu besuchen.</span>'],
          ['<span class="de">Die Firma entwickelte das Projekt, ohne zusätzliche Mitarbeiter einzustellen.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki ohne...zu asli mein kahan aata hai \u2014 office aur university ki formal writing mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"ohne ... zu" is common in newspaper articles, reports, workplace communication, and presentations — a concise alternative to a full subordinate clause.' ]
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from adding a subject inside the ohne-clause, wrong zu-placement, or dropping zu entirely.' ],
      mistakes: [
        { wrong: 'Ich gehe, ohne ich zu sprechen.', right: 'Ich gehe, ohne zu sprechen.', why: 'No separate subject appears inside "ohne ... zu" — the subject is always the same as the main clause.' },
        { wrong: 'Anna arbeitet ohne zu sie lernen.', right: 'Anna arbeitet, ohne zu lernen.', why: 'No subject pronoun goes inside the infinitive construction — just "ohne zu + Infinitiv".' },
        { wrong: 'Wir gingen nach Hause ohne etwas sagen.', right: 'Wir gingen nach Hause, ohne etwas zu sagen.', why: '"zu" is required directly before the infinitive — "sagen" needs "zu sagen".' },
        { wrong: 'Anna ging nach Hause, ohne dass zu sagen.', right: 'Anna ging nach Hause, ohne etwas zu sagen.', why: 'Do not mix "ohne dass" and "ohne ... zu" in the same construction — choose one pattern.' },
        { wrong: 'Ich bestand die Prüfung, ohne lernen.', right: 'Ich bestand die Prüfung, ohne zu lernen.', why: '"zu" cannot be omitted before the infinitive.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 clause ke andar subject daal dena, "zu" ko galat jagah rakhna, ya "zu" hi chhod dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"ohne ... zu" appears frequently in Goethe B2 writing tasks as a concise, elegant alternative to subordinate clauses.' ],
      note: 'Memory trick: ohne = WITHOUT + zu + Infinitive, same subject. Same subject? Use ohne...zu. Different subjects? Use ohne dass.',
      hinglish: '"ohne ... zu" Goethe B2 ki writing mein aksar kaam aata hai, kyunki isse poore subordinate clause ke bajaay ek chhota aur saaf structure ban jaata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Karriereblog: 5 Fehler, die Bewerber machen, ohne es zu merken',
    titleEn: 'Career blog: 5 mistakes applicants make without noticing',
    tokens: [
      { w: 'Viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Bewerber', role: 'plain', en: 'applicants', hi: 'आवेदक', type: 'Noun · plural' },
      { w: 'schicken', role: 'plain', en: 'send', hi: 'भेजते हैं', type: 'Verb · schicken' },
      { w: 'ihr', role: 'plain', en: 'their', hi: 'अपना', type: 'Possessivartikel' },
      { w: 'Bewerbungsschreiben', role: 'plain', en: 'application letter', hi: 'आवेदन पत्र', type: 'Noun · neut.', why: 'das Bewerbungsschreiben (this chapter).' },
      { w: 'ab', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · abschicken' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu', why: 'ohne … zu + Infinitiv: describes an action done without an accompanying action (this chapter).' },
      { w: 'es', role: 'plain', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'zweites', role: 'plain', en: 'second', hi: 'दूसरी', type: 'Adjective' },
      { w: 'Mal', role: 'plain', en: 'time', hi: 'बार', type: 'Noun · neut.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'lesen', role: 'plain', en: 'read (Satzende)', hi: 'पढ़ना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'another', hi: 'एक', type: 'Article' },
      { w: 'häufiger', role: 'plain', en: 'frequent', hi: 'सामान्य', type: 'Adjective' },
      { w: 'Fehler', role: 'plain', en: 'mistake', hi: 'ग़लती', type: 'Noun · masc.' },
      { w: ':', plain: true },
      { w: 'Bewerber', role: 'plain', en: 'applicants', hi: 'आवेदक', type: 'Noun · plural' },
      { w: 'beschreiben', role: 'plain', en: 'describe', hi: 'वर्णन करते हैं', type: 'Verb · beschreiben' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'teamfähig', role: 'plain', en: 'team-oriented (Satzende)', hi: 'टीम-उन्मुख (Satzende)', type: 'Adjective', why: 'teamfähig (this chapter).' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'konkretes', role: 'plain', en: 'concrete', hi: 'ठोस', type: 'Adjective' },
      { w: 'Beispiel', role: 'plain', en: 'example', hi: 'उदाहरण', type: 'Noun · neut.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'nennen', role: 'plain', en: 'name (Satzende)', hi: 'बताना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'bewerben', role: 'plain', en: 'apply', hi: 'आवेदन करते हैं', type: 'Verb · sich bewerben' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद' , type: 'Reflexivpronomen' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'bei', role: 'plain', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Start-up', role: 'plain', en: 'start-up (Satzende)', hi: 'स्टार्टअप (Satzende)', type: 'Noun · neut.', why: 'das Start-up (this chapter).' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'vorher', role: 'plain', en: 'beforehand', hi: 'पहले से', type: 'Adverb' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'dessen', role: 'plain', en: 'its', hi: 'उसकी', type: 'Possessivartikel · Genitiv' },
      { w: 'Produkte', role: 'plain', en: 'products', hi: 'उत्पाद', type: 'Noun · plural' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'informieren', role: 'plain', en: 'inform (Satzende)', hi: 'जानकारी लेना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Auslandssemester', role: 'plain', en: 'semester abroad (Satzende)', hi: 'विदेश में सेमेस्टर (Satzende)', type: 'Noun · neut.', why: 'das Auslandssemester (this chapter).' },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'man', role: 'plain', en: 'one', hi: 'कोई' , type: 'Pronoun' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'schweigen', role: 'plain', en: 'stay silent (Satzende)', hi: 'चुप रहना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'dort', role: 'plain', en: 'there', hi: 'वहाँ', type: 'Adverb' },
      { w: 'gewonnene', role: 'plain', en: 'gained', hi: 'प्राप्त की गई', type: 'Adjective (Partizip)' },
      { w: 'Erfahrung', role: 'plain', en: 'experience (Satzende)', hi: 'अनुभव (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'erwähnen', role: 'plain', en: 'mention (Satzende)', hi: 'उल्लेख करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'schließlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: ':', plain: true },
      { w: 'Niemand', role: 'plain', en: 'no one', hi: 'कोई नहीं', type: 'Pronoun' },
      { w: 'sollte', role: 'plain', en: 'should', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Vorstellungsgespräch', role: 'plain', en: 'job interview', hi: 'साक्षात्कार', type: 'Noun · neut.' },
      { w: 'verlassen', role: 'plain', en: 'leave (Satzende)', hi: 'छोड़ना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu' },
      { w: 'zumindest', role: 'plain', en: 'at least', hi: 'कम से कम', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'eigene', role: 'plain', en: 'own', hi: 'अपना', type: 'Adjective' },
      { w: 'Frage', role: 'plain', en: 'question (Satzende)', hi: 'सवाल (Satzende)', type: 'Noun · fem.' },
      { w: 'gestellt', role: 'plain', en: 'asked (Satzende)', hi: 'पूछा (Satzende)', type: 'Verb · Partizip II' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'होना (Satzende)', type: 'Verb · haben (Infinitiv Perfekt, Satzende)' },
      { w: '.', plain: true },
      { w: 'Wer', role: 'plain', en: 'whoever', hi: 'जो कोई', type: 'Pronoun · indefinite' },
      { w: 'sich', role: 'plain', en: 'themselves', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'stattdessen', role: 'plain', en: 'instead', hi: 'इसके बजाय', type: 'Adverb' },
      { w: 'gut', role: 'plain', en: 'well', hi: 'अच्छी तरह', type: 'Adverb' },
      { w: 'vorbereitet', role: 'plain', en: 'prepares (Satzende)', hi: 'तैयार करता है (Satzende)', type: 'Verb · sich vorbereiten' },
      { w: ',', plain: true },
      { w: 'kann', role: 'plain', en: 'can', hi: 'सकता है', type: 'Verb · Modalverb' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'एक', type: 'Article' },
      { w: 'Gespräch', role: 'plain', en: 'conversation', hi: 'बातचीत', type: 'Noun · neut.' },
      { w: 'führen', role: 'plain', en: 'lead', hi: 'चलाना', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'ohne', role: 'r-connector', en: 'without', hi: 'बिना', type: 'Konjunktion · ohne … zu', why: 'ohne … zu + Infinitiv: an action that does not happen (this chapter).' },
      { w: 'nervös', role: 'plain', en: 'nervous', hi: 'घबराया हुआ', type: 'Adjective' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'wirken', role: 'plain', en: 'appear (Satzende)', hi: 'दिखना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'Many applicants send off their application letter without reading it a second time. Another common mistake: applicants describe themselves as team-oriented without naming a concrete example. Some even apply to a start-up without informing themselves beforehand about its products. After a semester abroad, one should moreover not stay silent without mentioning the experience gained there. And finally: no one should leave a job interview without at least having asked their own question. Whoever prepares well instead can lead a conversation without appearing nervous.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_019_L001', speaker: 'Steffi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, du hast das Teamevent geplant, ohne mich zu fragen!', en: 'Timo, you planned the team event without asking me!' },
      { id: 'B2_019_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich weiß, das war falsch von mir. Ich hab entschieden, ohne wirklich nachzudenken.', en: 'I know, that was wrong of me. I decided without really thinking it through.' },
      { id: 'B2_019_L003', speaker: 'Steffi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und jetzt passt der Termin niemandem, ohne dass wir das vorher gecheckt haben.', en: 'And now the date doesn\'t work for anyone, without us having checked that beforehand.' },
      { id: 'B2_019_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Tut mir leid. Lass uns das nächste Mal nicht wieder ohne Absprache machen.', en: 'I\'m sorry. Let\'s not do it without discussing it next time.' }
    ],
    transcript: 'Timo, du hast das Teamevent geplant, ohne mich zu fragen! Ich weiß, das war falsch von mir. Ich hab entschieden, ohne wirklich nachzudenken. Und jetzt passt der Termin niemandem, ohne dass wir das vorher gecheckt haben. Tut mir leid. Lass uns das nächste Mal nicht wieder ohne Absprache machen.',
    translation: 'Timo, you planned the team event without asking me! I know, that was wrong of me. I decided without really thinking it through. And now the date doesn\'t work for anyone, without us having checked that beforehand. I\'m sorry. Let\'s not do it without discussing it next time.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'hast' },
      { w: 'das' },
      { w: 'Teamevent' },
      { w: 'geplant' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'mich' },
      { w: 'zu' },
      { w: 'fragen' },
      { w: '!', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'war' },
      { w: 'falsch' },
      { w: 'von' },
      { w: 'mir' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'hab' },
      { w: 'entschieden' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'wirklich' },
      { w: 'nachzudenken' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'jetzt' },
      { w: 'passt' },
      { w: 'der' },
      { w: 'Termin' },
      { w: 'niemandem' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'vorher' },
      { w: 'gecheckt' },
      { w: 'haben' },
      { w: '.', plain: true },
      { w: 'Tut' },
      { w: 'mir' },
      { w: 'leid' },
      { w: '.', plain: true },
      { w: 'Lass' },
      { w: 'uns' },
      { w: 'das' },
      { w: 'nächste' },
      { w: 'Mal' },
      { w: 'nicht' },
      { w: 'wieder' },
      { w: 'ohne' },
      { w: 'Absprache' },
      { w: 'machen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Timo geplant, ohne Steffi zu fragen?', qEn: 'What did Timo do without asking Steffi?', options: ['ein Budget planen', 'ein Teamevent planen', 'einen Kollegen einstellen', 'einen Urlaub buchen'], optionsEn: ['plan a budget', 'plan a team event', 'hire a colleague', 'book a holiday'], answer: 1,
        explain: '"Du hast das Teamevent geplant, ohne mich zu fragen!"' },
      { q: 'Was gibt Timo zu?', qEn: 'What does Timo admit?', options: ['Er hat gut nachgedacht.', 'Er hat entschieden, ohne nachzudenken.', 'Er wusste alles genau.', 'Er hat nichts falsch gemacht.'], optionsEn: ['He thought it through carefully.', 'He decided without thinking.', 'He knew everything precisely.', 'He did nothing wrong.'], answer: 1,
        explain: '"Ich hab entschieden, ohne wirklich nachzudenken."' }
    ]
  },

  speaking: [
    { task: "Dein Kollege hat das Teamevent ohne dich geplant. Sprich ihn an.", taskEn: "Your colleague planned the team event without you. Raise it.", de: "Du hast das Teamevent geplant, ohne mich zu fragen.", en: "You planned the team event without asking me." },
    { task: "Er entschuldigt sich. Sag, wie du das siehst.", taskEn: "He apologises. Say how you see it.", de: "Du hast entschieden, ohne wirklich nachzudenken.", en: "You decided without really thinking it through." },
    { task: "Deine Chefin fragt, wie die Stellenanzeige entstanden ist.", taskEn: "Your boss asks how the job ad came about.", de: "Man hat sie veröffentlicht, ohne mit dem Team zu sprechen.", en: "It was published without anyone consulting the team." },
    { task: "Ein Kollege fragt, wie du den Stellenwechsel gemacht hast.", taskEn: "A colleague asks how you managed the job change.", de: "Ich habe gewechselt, ohne lange zu zögern.", en: "I changed jobs without hesitating long." },
    { task: "Ein Freund fragt, wie du selbstbewusst aufgetreten bist.", taskEn: "A friend asks how you came across so confidently.", de: "Ich habe geantwortet, ohne nervös zu werden.", en: "I answered without getting nervous." },
    { task: "Rollenspiel: Ihr klärt das Missverständnis im Team.", taskEn: "Role-play: you clear up the misunderstanding in the team.", de: "Ich habe gehandelt, ohne dich einzubeziehen. — Und ich war sauer, ohne es zu sagen.", en: "I acted without involving you. — And I was annoyed without saying so." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short workplace report or travel account (six to eight sentences) about a decision or experience — using "ohne ... zu" at least three times, always making sure the subject of the omitted action matches the subject of the main clause.',
    starters: ['Ich habe …, ohne … zu …', 'Sie/Er entschied, ohne … zu …'],
    placeholder: 'Ich habe den Stellenwechsel gewagt, ohne lange nachzudenken …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which rule applies to "ohne ... zu"?',
      options: ['The subject of both actions must be the same', 'The subjects can be different', 'No subject is needed at all'],
      answer: 0,
      explain: '"ohne ... zu" requires the SAME subject in both clauses.'
    },
    gap: {
      sentence: ['Anna ging nach Hause, ohne sich ', ' verabschieden.'],
      gaps: [ { answer: 'zu', accepts: ['zu'] } ],
      explain: '"zu" is required directly before the infinitive.'
    },
    match: {
      q: 'Match each situation to the correct construction.',
      pairs: [
        { noun: 'Same subject', art: 'ohne ... zu' },
        { noun: 'Different subjects', art: 'ohne dass' }
      ]
    },
    builder: {
      target: 'Build: "Rohan passed the exam without studying much."',
      bank: ['Rohan', 'bestand', 'die', 'Prüfung', ',', 'ohne', 'viel', 'zu', 'lernen', '.'],
      answer: ['Rohan', 'bestand', 'die', 'Prüfung', ',', 'ohne', 'viel', 'zu', 'lernen', '.'],
      roles: { 'ohne': 'r-ohnezu' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Anna ging nach Hause, ohne Rohan etwas zu sagen.',
      right: 'Anna ging nach Hause, ohne dass Rohan etwas sagte.',
      explain: 'The subject inside the ohne-clause ("Rohan") differs from the main clause subject ("Anna") — use "ohne dass" instead.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What rule must "ohne ... zu" follow?', options: ['Same subject in both clauses', 'Different subjects', 'No subject required'], answer: 0,
      explain: '"ohne ... zu" only works when the SAME subject performs both actions.' },
    { q: 'Where does "zu" go in "ohne ... zu"?', options: ['Directly before the infinitive', 'At the very end', 'Right after "ohne"'], answer: 0,
      explain: '"zu" goes directly before the infinitive: "ohne etwas zu sagen".' },
    { q: 'Which construction is used for different subjects?', options: ['ohne dass', 'ohne ... zu', 'indem'], answer: 0,
      explain: 'When the subjects differ, "ohne dass" + a full clause replaces "ohne ... zu".' },
    { q: 'Which sentence is correct?', options: ['Anna geht, ohne etwas zu sagen.', 'Anna geht, ohne Rohan etwas zu sagen.', 'Anna geht, ohne ich zu sprechen.'], answer: 0,
      explain: 'The subject of "sagen" here is Anna — the same subject as the main clause, which is correct for "ohne ... zu".' },
    { q: 'Which sentence contains an error?', options: ['Wir fuhren nach Berlin, ohne einen Plan zu haben.', 'Ich bestand die Prüfung, ohne lernen.', 'Ich gehe schlafen, ohne fernzusehen.'], answer: 1,
      explain: '"zu" cannot be omitted before the infinitive — it should be "ohne zu lernen".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-ohnezu', html: '"ohne ... zu" names an action that did NOT accompany the main action — the SAME subject does both.' },
    { c: 'r-ohnezu', html: '"zu" always goes directly before the infinitive at the end of the ohne-clause.' },
    { c: 'r-ohnezu', html: 'When the subjects differ, use "ohne dass" + a full subordinate clause instead — never mix the two patterns.' }
  ],
  revisionTips: [
    'Before using "ohne ... zu", check: does the SAME subject perform both actions? If not, switch to "ohne dass".',
    'Practise placing "zu" correctly, especially with separable verbs (ohne einzustellen, ohne fernzusehen).',
    'Use "ohne ... zu" as a concise alternative to a full subordinate clause when writing formally.'
  ]
};

window.CHAPTER = CHAPTER;
