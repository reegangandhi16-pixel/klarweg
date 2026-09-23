/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 65
   "Wissenschaftssprache" — academic German: objective, precise,
   evidence-based register for universities, research, reports.
   Integrates Funktionsverbgefüge, Nominalisierung,
   Partizipialattribute, Komplexe Nominalgruppen, Konjunktiv I,
   and Genitiv prepositions inside academic texts. Recycling
   chapter — no new vocabulary. Does NOT teach citation systems,
   footnotes, APA/MLA, or research methodology (C1 scope).
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-65-wissenschaftssprache',
  phase: 'B2 · Phase 7',
  number: 65,
  title: 'Wissenschaftssprache',
  titleEn: 'Academic German',
  description: 'Never write "I think...". Instead write "Die Ergebnisse zeigen, dass...". Objective. Precise. Evidence-based.',
  xp: 880,
  time: 85,
  difficulty: 'Advanced',
  nextChapter: { number: 66, title: 'Argumentieren: Standpunkte', titleEn: 'Arguing: expressing viewpoints' , href: 'chapter-b2-66-argumentieren-standpunkte.html' },

  prevChapter: { number: 64, title: 'Präpositionen mit Genitiv', titleEn: 'Prepositions with Genitiv', href: 'chapter-b2-64-praepositionen-mit-genitiv.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Never "I think." <em>Always</em> "the data show."',
    intro: 'Frauke and Timo prepare a university research presentation, replacing every "I think" with objective, evidence-based academic German: die Ergebnisse zeigen, dass … Precise, and never personal.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See how academic German replaces opinion with evidence'
    ],
    scene: 'Vorbereitung der Forschungspräsentation',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Untersuchung', role: 'r-subject', en: 'investigation', hi: 'जांच', pron: 'UN-ter-zoo-khung', type: 'Noun · fem.', why: 'die Untersuchung (recycled B2 Ch50).', ex: 'die Untersuchung' },
        { w: 'bestätigt', role: 'r-verb', en: 'confirms', hi: 'पुष्टि करती है', pron: 'be-SHTAY-tikt', type: 'Verb · bestätigen' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Hypothese', role: 'r-akkusativ', en: 'hypothesis', hi: 'परिकल्पना', pron: 'hü-po-TAY-zuh', type: 'Noun · fem.', why: 'die Hypothese (this chapter).', ex: 'die Hypothese' },
        { w: '.', plain: true }
      ], en: 'Our investigation confirms the hypothesis.', hi: 'Hamaari jaanch parikalpna ki pushti karti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'objektiv', role: 'r-akkusativ', en: 'objectively', hi: 'वस्तुनिष्ठ रूप से', pron: 'op-yek-TEEF', type: 'Adverb', why: 'objektiv = objectively (this chapter).', ex: 'objektiv feststellen' },
        { w: 'feststellen', role: 'r-verb', en: 'determine', hi: 'निर्धारित करना', pron: 'FEST-shte-len', type: 'Verb · infinitive (Satzende)', why: 'feststellen = to determine/establish (recycled B2 Ch50).', ex: 'feststellen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Effekt', role: 'r-subject', en: 'effect', hi: 'प्रभाव', pron: 'e-FEKT', type: 'Noun · masc.' },
        { w: 'real', role: 'r-akkusativ', en: 'real', hi: 'वास्तविक', pron: 'ray-AHL', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can we objectively determine that the effect is real?', hi: 'Kya hum vastunishth roop se nirdhaarit kar sakte hain ki prabhaav vaastavik hai?' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Erkenntnisse', role: 'r-subject', en: 'findings', hi: 'निष्कर्ष', pron: 'er-KENT-ni-suh', type: 'Noun · plural', why: 'die Erkenntnis (this chapter).', ex: 'die Erkenntnisse' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'eindeutig', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'INE-doy-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, the findings are clear.', hi: 'Haan, nishkarsh spasht hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Ergebnisse', role: 'r-akkusativ', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'veröffentlichen', role: 'r-verb', en: 'publish', hi: 'प्रकाशित करना', pron: 'fer-Ö-fent-li-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Then we can publish the results.', hi: 'Phir hum parinaam prakaashit kar sakte hain.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'Arbeit', role: 'r-akkusativ', en: 'work', hi: 'काम', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Exactly! I am proud of our work.', hi: 'Bilkul! Mujhe hamaare kaam par garv hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Never write <span class="de r-subjective">"Ich finde..."</span>. Instead write <span class="de r-academic">"Die Ergebnisse zeigen, dass..."</span>. Academic German is objective, precise, and evidence-based — not emotional or conversational.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is WISSENSCHAFTSSPRACHE (academic German) at B2 level: objective, precise, evidence-based register using fixed expressions — die Untersuchung zeigt, dass...; die Ergebnisse weisen darauf hin, dass...; daraus ergibt sich...; es lässt sich feststellen, dass...; es kann beobachtet werden, dass...; die Analyse ergibt...; die Studie kommt zu dem Ergebnis, dass...; die Daten zeigen...; im Mittelpunkt steht...; im Folgenden wird... This chapter integrates Funktionsverbgefüge, Nominalisierung, Partizipialattribute, Komplexe Nominalgruppen, Konjunktiv I, and Genitiv prepositions inside academic texts. ' +
    'Do NOT expect or require citation systems, footnotes, APA/MLA, or research methodology — those are C1 topics; do not flag their absence. The most important thing to catch: subjective phrasing ("Ich finde", "Ich glaube", "Das ist super/toll/cool", "Ich denke") used where objective, evidence-based language is expected. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag any subjective/emotional phrasing ("Ich finde", "Ich glaube", "super", "toll", "cool", "mega gut") as the most important issue — suggest an objective academic alternative.\n' +
    '- Check that academic fixed expressions are grammatically correct (correct case, correct verb form, correct "dass" clause word order).\n' +
    '- Check that Genitiv prepositions, Funktionsverbgefüge, and nominal structures (if used) are correctly formed, per their own established rules.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Objectivity check:</b> one sentence on whether the learner\'s text stayed objective and evidence-based rather than subjective/emotional.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you write objectively, avoid subjective phrasing, and use fixed academic expressions correctly. Ready for academic text structure next.',
    mid: 'Good. Re-read the Characteristics of Academic German table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: never "I think", always "the results show".'
  },

  parserSentence: [
    { w: 'Die', role: 'r-academic' }, { w: 'Ergebnisse', role: 'r-academic' }, { w: 'zeigen', role: 'r-academic' },
    { w: ',', plain: true }, { w: 'dass', role: 'plain' }, { w: 'die', role: 'plain' }, { w: 'Temperatur', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: academic German replaces personal opinion with objective, evidence-based expressions.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo prepare a research presentation, rewriting subjective phrasing academically.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the characteristics of academic German and the most common fixed academic expressions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific article on environmental research and a university research report.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify main findings, evidence, academic expressions, and objective conclusions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present research, summarize studies, and describe results using objective academic German.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite an informal article academically and write a 250-word research summary.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill academic-vs-everyday language, objective rewriting, and register selection.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 880 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Academic-expression drills, objective-rewriting practice, and a 250-word research summary task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Characteristics table, common academic expressions, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Die Untersuchung zeigt, dass ... / Die Ergebnisse weisen darauf hin, dass ...', text: 'Present findings objectively using fixed academic expressions' },
    { de: 'Daraus ergibt sich ... / Es lässt sich feststellen, dass ...', text: 'Draw logical, evidence-based conclusions' },
    { de: 'Ich finde, die Studie ist toll. ❌ → Die Ergebnisse erscheinen vielversprechend. ✓', text: 'Replace subjective, emotional phrasing with objective language' },
    { de: 'Im Folgenden wird ... / Im Mittelpunkt steht ...', text: 'Structure academic texts with fixed organizational phrases' },
    { de: 'Funktionsverbgefüge + Genitiv prepositions + Nominalstil, integrated', text: 'Combine previously learned B2 structures naturally in academic writing' }
  ],

  vocab: [
    { de: 'die Untersuchung', art: 'die', gender: 'f', plural: 'Untersuchungen', pos: 'noun', level: 'B2', register: 'written', en: 'investigation, study', hi: 'जांच / अध्ययन', ex: 'Die Untersuchung zeigt eindeutige Ergebnisse.', exEn: 'The investigation shows clear results.', exHi: 'Jaanch spasht parinaam dikhaati hai.', ex2: 'Sie haben eine neue Untersuchung durchgeführt.', ex2En: 'They\'ve conducted a new investigation.', ex2Hi: 'Unhone ek nayi jaanch ki hai.' },
    { de: 'feststellen', pos: 'verb', level: 'B2', register: 'written', en: 'to establish, determine', hi: 'निर्धारित करना', ex: 'Es lässt sich feststellen, dass die Methode wirksam ist.', exEn: 'It can be established that the method is effective.', exHi: 'Yeh nirdhaarit kiya jaa sakta hai ki vidhi prabhaavi hai.', ex2: 'Sie haben einen klaren Unterschied festgestellt.', ex2En: 'They\'ve established a clear difference.', ex2Hi: 'Unhone ek spasht antar nirdhaarit kiya hai.', conj: { praesens: 'stellt fest', praeteritum: 'stellte fest', perfekt: 'hat festgestellt' } },
    { de: 'die Erkenntnis', art: 'die', gender: 'f', plural: 'Erkenntnisse', pos: 'noun', level: 'B2', register: 'written', en: 'finding, insight', hi: 'खोज / अंतर्दृष्टि', ex: 'Die neue Erkenntnis überrascht viele Wissenschaftler.', exEn: 'The new finding surprises many scientists.', exHi: 'Nayi khoj kai vaigyaanikon ko aashcharyachakit karti hai.', ex2: 'Sie haben wichtige Erkenntnisse gewonnen.', ex2En: 'They\'ve gained important insights.', ex2Hi: 'Unhone mahatvapurn antardrishti prapt ki hai.' },
    { de: 'objektiv', pos: 'adjective', level: 'B2', register: 'written', en: 'objective', hi: 'निष्पक्ष', ex: 'Ein objektiver Bericht vermeidet persönliche Meinungen.', exEn: 'An objective report avoids personal opinions.', exHi: 'Ek nishpaksh report vyaktigat raay se bachati hai.', ex2: 'Sie haben die Daten objektiv analysiert.', ex2En: 'They\'ve analysed the data objectively.', ex2Hi: 'Unhone data ka nishpaksh vishleshan kiya hai.' },
    { de: 'die Hypothese', art: 'die', gender: 'f', plural: 'Hypothesen', pos: 'noun', level: 'B2', register: 'written', en: 'hypothesis', hi: 'परिकल्पना', ex: 'Die Hypothese wurde durch die Studie bestätigt.', exEn: 'The hypothesis was confirmed by the study.', exHi: 'Parikalpanaa adhyayan dwaara pushti ki gayi.', ex2: 'Sie haben eine neue Hypothese aufgestellt.', ex2En: 'They\'ve formulated a new hypothesis.', ex2Hi: 'Unhone ek nayi parikalpanaa banaayi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Wissenschaftssprache?',
      body: [ 'Academic language is used in universities, research, reports, scientific articles, presentations, theses, and studies. Its purpose: present information clearly, objectively, logically, and precisely.' ],
      hinglish: 'Academic language universities, research, reports aur theses mein use hoti hai. Iska maksad simple hai \u2014 jaankaari saaf, objective aur precise tarike se rakhna, bina apni raay milaye.'
    },
    {
      title: 'Merkmale des Akademischen Deutsch',
      body: [ 'Academic German is objective, precise, neutral, evidence-based, logical, and formal. It avoids emotional language, exaggeration, slang, and personal judgments.' ],
      table: {
        head: ['Everyday German', 'Wissenschaftssprache'],
        rows: [
          ['personal', 'objective'],
          ['emotional', 'neutral'],
          ['simple', 'precise'],
          ['conversational', 'formal'],
          ['opinion-based', 'evidence-based']
        ]
      },
      hinglish: 'Academic German objective, precise aur neutral hoti hai, aur har baat evidence par tiki hoti hai. Isme emotional shabd, exaggeration, slang aur apni raay nahi aati \u2014 isliye <i>toll</i>, <i>super</i> aur <i>cool</i> jaise shabd yahan kaam nahi karte.'
    },
    {
      title: 'Typische akademische Ausdrücke',
      body: [ 'These fixed expressions are the backbone of academic German writing and speaking.' ],
      table: {
        head: ['Expression', 'Function'],
        rows: [
          ['die Untersuchung zeigt, dass ...', 'presenting findings'],
          ['die Ergebnisse weisen darauf hin, dass ...', 'interpreting evidence'],
          ['daraus ergibt sich ...', 'drawing conclusions'],
          ['es lässt sich feststellen, dass ...', 'objective observation'],
          ['es kann beobachtet werden, dass ...', 'objective observation'],
          ['die Analyse ergibt ...', 'presenting analysis'],
          ['die Studie kommt zu dem Ergebnis, dass ...', 'presenting analysis'],
          ['die Daten zeigen ...', 'presenting findings'],
          ['im Mittelpunkt steht ...', 'structuring a text'],
          ['im Folgenden wird ...', 'structuring a text']
        ]
      },
      hinglish: 'Yeh fixed expressions academic German ki reedh hain. Inhe poore chunk ki tarah yaad kar lo \u2014 phir writing mein seedha use kar sakte ho, aur har baar naya sentence banane ki zaroorat nahi padegi.'
    },
    {
      title: 'Objektiv vs Alltagssprache',
      body: [ 'Compare everyday and academic phrasing of the same idea — the meaning stays but the register shifts entirely.' ],
      table: {
        head: ['Everyday', 'Academic'],
        rows: [
          ['Die Idee ist super.', 'Die Ergebnisse erscheinen vielversprechend.'],
          ['Das funktioniert gut.', 'Die Methode erweist sich als effektiv.']
        ]
      },
      hinglish: 'Ek hi baat ko dono tarike se dekho — matlab wahi rehta hai, bas register badal jaata hai. Dhyaan do ki academic version mein subject bhi badal jaata hai: <i>die Idee</i> ki jagah <b>die Ergebnisse</b> aa jaate hain.'
    },
    {
      title: 'Das Subjekt wechselt: nicht "ich", sondern die Sache',
      body: [
        'Look closely at every academic example above and you will see the same move: the subject is never a person. Instead of <i>ich</i>, the sentence starts with the study, the data, the results or the analysis \u2014 and the verb reports what THEY do.',
        'This one shift does most of the work of sounding academic, because it removes the writer from the sentence without any complicated vocabulary.'
      ],
      table: {
        head: ['Person as subject', 'Thing as subject'],
        rows: [
          ['<span class="de">Ich habe festgestellt, dass \u2026</span>', '<span class="de">Die Untersuchung zeigt, dass \u2026</span>'],
          ['<span class="de">Ich glaube, dass \u2026</span>', '<span class="de">Die Daten weisen darauf hin, dass \u2026</span>'],
          ['<span class="de">Wir haben das analysiert.</span>', '<span class="de">Die Analyse ergibt \u2026</span>'],
          ['<span class="de">Man kann sehen, dass \u2026</span>', '<span class="de">Es l\u00e4sst sich feststellen, dass \u2026</span>']
        ]
      },
      note: 'The passive and <b>sich lassen</b> (Chapters 44\u201346) do the same job \u2014 they let you report a finding without naming who found it.',
      hinglish: 'Upar ke har academic example mein ek hi cheez ho rahi hai \u2014 subject koi insaan nahi hai. <i>ich</i> ki jagah sentence <b>die Studie</b>, <b>die Daten</b>, <b>die Ergebnisse</b> ya <b>die Analyse</b> se shuru hota hai, aur verb yeh batata hai ki <b>woh</b> kya dikha rahe hain. Bas yahi ek badlav zyada-tar kaam kar deta hai, kyunki isse writer sentence se hat jaata hai \u2014 aur iske liye koi mushkil vocabulary nahi chahiye. Passive aur <b>sich lassen</b> (Chapter 44\u201346) bhi yahi kaam karte hain.'
    },
    {
      title: 'Ergebnisse beschreiben',
      body: [ 'Useful structures for describing results: die Ergebnisse zeigen..., die Analyse verdeutlicht..., die Daten lassen erkennen..., es konnte festgestellt werden..., die Untersuchung bestätigt...' ],
      hinglish: 'Results describe karne ke liye useful structures: die Ergebnisse zeigen..., die Analyse verdeutlicht..., die Daten lassen erkennen..., es konnte festgestellt werden..., die Untersuchung bestätigt...'
    },
    {
      title: 'Daten und Trends beschreiben',
      body: [ 'Nominal and formal alternatives (from earlier chapters) describe data changes precisely.' ],
      table: {
        head: ['Simple statement', 'Academic alternative'],
        rows: [
          ['Die Zahl der Teilnehmer stieg.', 'Es lässt sich ein Anstieg feststellen.'],
          ['Der Umsatz sank.', 'Die Daten weisen auf einen Rückgang hin.']
        ]
      },
      hinglish: 'Data ke badlav batane ke liye Nominalstil (Chapter 50) kaam aata hai \u2014 <span class="de">Die Zahl stieg</span> ki jagah <span class="de">Es l\u00e4sst sich ein Anstieg feststellen</span>. Isse baat zyada formal aur measured lagti hai.'
    },
    {
      title: 'Register',
      body: [ 'Academic language appears in university lectures, seminar papers, scientific journals, reports, research presentations, bachelor\'s theses, and company analyses.' ],
      hinglish: 'Academic language university lectures, seminar papers, scientific journals, reports, research presentations, bachelor\'s theses, aur company analyses mein aati hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'All five make the same mistake in different ways: the writer appears in the sentence, or the wording evaluates instead of reporting. Notice that each correction moves the subject from a person to a thing.' ],
      mistakes: [
        { wrong: 'Ich finde, die Studie ist toll.', right: 'Die Ergebnisse erscheinen vielversprechend.', why: 'Academic writing avoids personal opinion — replace with an objective, evidence-based expression.' },
        { wrong: 'Die Ergebnisse sind mega gut.', right: 'Die Ergebnisse zeigen eine deutliche Verbesserung.', why: '"mega gut" is colloquial slang — academic writing requires precise, formal vocabulary.' },
        { wrong: 'Die Forschung ist cool.', right: 'Die Forschung liefert wichtige Erkenntnisse.', why: '"cool" is far too casual for academic register.' },
        { wrong: 'Ich glaube, die Daten stimmen.', right: 'Die Daten bestätigen die Hypothese.', why: '"Ich glaube" expresses unsupported belief — academic claims must be evidence-based.' },
        { wrong: 'Das Experiment war super.', right: 'Das Experiment lieferte aussagekräftige Ergebnisse.', why: '"super" is vague and emotional — academic writing requires precise, specific description.' }
      ],
      hinglish: 'Paanchon galtiyan ek hi jad se aati hain \u2014 ya to writer khud sentence mein aa jaata hai, ya shabd report karne ki jagah judgement dene lagte hain. Har correction mein dekho: subject insaan se hatkar cheez par chala jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Writing an academic text? Avoid personal opinion. Use objective expressions. Support statements with evidence. Use formal register. Write logically.' ],
      note: 'Memory trick: academic German asks four questions — What do the data show? What is the evidence? What can be concluded? How can this be expressed objectively? Never write "I think..." — always write "Die Ergebnisse zeigen, dass...".',
      hinglish: 'Academic text likh rahe ho? Apni raay bahar rakho, objective expressions use karo, har baat ko evidence se jodo, aur register formal rakho. Sabse tez trick yeh hai \u2014 <i>Ich denke</i> ki jagah <span class="de">Die Ergebnisse zeigen, dass \u2026</span> likho.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftlicher Artikel über Umweltforschung',
    titleEn: 'Reading A — A scientific article about environmental research',
    tokens: [
      { w: 'Die', role: 'r-academic', en: 'the (fem. nom., academic expression)', hi: '(academic expression ka hissa)', type: 'Article' },
      { w: 'Analyse', role: 'r-academic', en: 'analysis (academic expression)', hi: 'vishleshan (academic expression)', type: 'Noun · fem.' },
      { w: 'ergibt', role: 'r-academic', en: 'yields (Satzende, academic expression)', hi: 'deta hai (Satzende, academic expression)', type: 'Verb (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'CO2-Ausstoß', role: 'plain', en: 'CO2 emissions', hi: 'CO2 utsarjan', type: 'Noun · masc.' },
      { w: 'zugenommen', role: 'plain', en: 'increased (Satzende)', hi: 'badha hai (Satzende)', type: 'Partizip II (Satzende)' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'hai (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-academic', en: 'in the (academic text-organizing expression)', hi: '(academic text-organizing expression)', type: 'Präposition (Kontraktion)' },
      { w: 'Mittelpunkt', role: 'r-academic', en: 'center/focus (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Noun · masc.' },
      { w: 'steht', role: 'r-academic', en: 'stands (Satzende, part of fixed expression)', hi: 'hai (Satzende, fixed expression ka hissa)', type: 'Verb (Präsens, Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Frage', role: 'plain', en: 'question (Satzende)', hi: 'sawaal (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'nach', role: 'plain', en: 'about', hi: 'ke baare mein', type: 'Präposition · Dat.' },
      { w: 'geeigneten', role: 'plain', en: 'suitable', hi: 'upyukt', type: 'Adjective · Dat.' },
      { w: 'Maßnahmen', role: 'plain', en: 'measures (Satzende)', hi: 'upaayon ke (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-academic', en: 'with (academic fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Präposition (Kontraktion)' },
      { w: 'Hinblick', role: 'r-academic', en: 'view (part of fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Noun · masc.' },
      { w: 'auf', role: 'r-academic', en: 'on (Satzende, fixed expression)', hi: '(Satzende)', type: 'Preposition · Akk.' },
      { w: 'zukünftige', role: 'plain', en: 'future', hi: 'भविष्य के', type: 'Adjective' },
      { w: 'Untersuchungen', role: 'plain', en: 'investigations (Satzende)', hi: 'अध्ययन (Satzende)', type: 'Noun · plural' },
      { w: 'empfiehlt', role: 'plain', en: 'recommends', hi: 'सुझाती है', type: 'Verb · empfehlen' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'weitere', role: 'plain', en: 'further (Satzende)', hi: 'अतिरिक्त (Satzende)', type: 'Adjective' },
      { w: 'Messungen', role: 'plain', en: 'measurements (Satzende)', hi: 'माप (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Zusammenfassend', role: 'r-academic', en: 'in summary (academic connector)', hi: 'संक्षेप में', type: 'Adverb · academic', why: 'Zusammenfassend lässt sich sagen: a standard academic closing formula (this chapter).' },
      { w: 'lässt', role: 'r-academic', en: 'can (part of fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Verb · lassen' },
      { w: 'sich', role: 'r-academic', en: 'itself', hi: '(हिस्सा)', type: 'Reflexivpronomen' },
      { w: 'sagen', role: 'r-academic', en: 'say (Satzende, fixed expression)', hi: 'कहा जा सकता है (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'schnelles', role: 'plain', en: 'quick', hi: 'त्वरित', type: 'Adjective' },
      { w: 'Handeln', role: 'plain', en: 'action', hi: 'कार्रवाई', type: 'Noun · neut.' },
      { w: 'nötig', role: 'plain', en: 'necessary (Satzende)', hi: 'आवश्यक (Satzende)', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein' },
      { w: '.', plain: true },
      { w: 'Weiterführende', role: 'r-academic', en: 'further, follow-up', hi: 'आगे की', type: 'Adjective · academic' },
      { w: 'Studien', role: 'plain', en: 'studies', hi: 'अध्ययन', type: 'Noun · plural' },
      { w: 'sollen', role: 'plain', en: 'are meant to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'इस', type: 'Determiner' },
      { w: 'Hypothese', role: 'plain', en: 'hypothesis (Satzende)', hi: 'परिकल्पना (Satzende)', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'kommenden', role: 'plain', en: 'coming', hi: 'आने वाले', type: 'Adjective' },
      { w: 'Jahr', role: 'plain', en: 'year (Satzende)', hi: 'साल (Satzende)', type: 'Noun · neut.' },
      { w: 'überprüfen', role: 'plain', en: 'examine (Satzende)', hi: 'जाँचना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'The analysis yields that CO2 emissions have increased. At the center is the question of suitable measures. With a view to future investigations, the team recommends further measurements. In summary, one can say that quick action is necessary. Follow-up studies are meant to examine this hypothesis in the coming year.',
    comprehension: [
      { q: 'Welches akademische Ausdruck wird hier verwendet, um die Analyse vorzustellen?', options: ['Die Analyse ergibt, dass...', 'Ich finde, dass...', 'Die Analyse ist cool.'], answer: 0 },
      { q: 'Was bedeutet "im Mittelpunkt steht"?', options: ['A fixed expression for structuring the focus of a text', 'A subjective opinion', 'A colloquial phrase'], answer: 0 },
      { q: 'Ist dieser Text objektiv oder subjektiv formuliert?', options: ['Objektiv', 'Subjektiv', 'Emotional'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Universitärer Forschungsbericht',
    titleEn: 'Reading B — A university research report',
    tokens: [
      { w: 'Es', role: 'r-academic', en: 'it (academic expression)', hi: '(academic expression ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'lässt', role: 'r-academic', en: 'lets (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Verb · lassen (Präsens)' },
      { w: 'sich', role: 'r-academic', en: 'itself (reflexive)', hi: '(fixed expression ka hissa)', type: 'Reflexivpronomen · Akk.' },
      { w: 'feststellen', role: 'r-academic', en: 'determine (Satzende)', hi: 'nirdhaarit karna (Satzende)', type: 'Verb · Satzende' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Teilnahmequote', role: 'plain', en: 'participation rate', hi: 'bhaagidaari dar', type: 'Noun · fem.' },
      { w: 'gestiegen', role: 'plain', en: 'risen (Satzende)', hi: 'badhi hai (Satzende)', type: 'Partizip II (Satzende)' },
      { w: 'ist', role: 'plain', en: 'has (Satzende)', hi: 'hai (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'shodh', type: 'Noun · fem.' },
      { w: 'kommt', role: 'r-academic', en: 'comes (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'zu', role: 'r-academic', en: 'to (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Präposition · Dat.' },
      { w: 'dem', role: 'r-academic', en: 'the (neut. dat., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Article · Dat.' },
      { w: 'Ergebnis', role: 'r-academic', en: 'result (Satzende, part of fixed expression)', hi: 'parinaam (Satzende, fixed expression ka hissa)', type: 'Noun · neut. (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'neue', role: 'plain', en: 'new', hi: 'nayi', type: 'Adjective' },
      { w: 'Programme', role: 'plain', en: 'programs (Satzende)', hi: 'programs (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'wirksam', role: 'plain', en: 'effective (Satzende)', hi: 'prabhaavshaali (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'hain (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It can be determined that the participation rate has risen. The study comes to the conclusion that new programs are effective.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_065_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, in deinem Absatz steht "Ich glaube, dass die Methode funktioniert." Das ist zu persönlich für die Präsentation.', en: 'Timo, in your paragraph it says "I believe the method works." That\'s too personal for the presentation.' },
      { id: 'B2_065_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt. Wie würdest du das formulieren?', en: 'True. How would you phrase that?' },
      { id: 'B2_065_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die Ergebnisse zeigen, dass die Methode unter den gegebenen Bedingungen zuverlässig funktioniert.', en: 'The results show that the method works reliably under the given conditions.' },
      { id: 'B2_065_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Viel überzeugender. Ich ändere das gleich im ganzen Dokument.', en: 'Much more convincing. I\'ll change that throughout the document right away.' }
    ],
    transcript: 'Timo, in deinem Absatz steht "Ich glaube, dass die Methode funktioniert." Das ist zu persönlich für die Präsentation. Stimmt. Wie würdest du das formulieren? Die Ergebnisse zeigen, dass die Methode unter den gegebenen Bedingungen zuverlässig funktioniert. Viel überzeugender. Ich ändere das gleich im ganzen Dokument.',
    translation: 'Timo, in your paragraph it says "I believe the method works." That\'s too personal for the presentation. True. How would you phrase that? The results show that the method works reliably under the given conditions. Much more convincing. I\'ll change that throughout the document right away.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'in' },
      { w: 'deinem' },
      { w: 'Absatz' },
      { w: 'steht' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Ich' },
      { w: 'glaube' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'die' },
      { w: 'Methode' },
      { w: 'funktioniert' },
      { w: '."', plain: true },
      { w: 'Das' },
      { w: 'ist' },
      { w: 'zu' },
      { w: 'persönlich' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Präsentation' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'würdest' },
      { w: 'du' },
      { w: 'das' },
      { w: 'formulieren' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Ergebnisse' },
      { w: 'zeigen' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'die' },
      { w: 'Methode' },
      { w: 'unter' },
      { w: 'den' },
      { w: 'gegebenen' },
      { w: 'Bedingungen' },
      { w: 'zuverlässig' },
      { w: 'funktioniert' },
      { w: '.', plain: true },
      { w: 'Viel' },
      { w: 'überzeugender' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'ändere' },
      { w: 'das' },
      { w: 'gleich' },
      { w: 'im' },
      { w: 'ganzen' },
      { w: 'Dokument' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist an Timos ursprünglichem Satz problematisch?', qEn: 'What is wrong with Timo\'s original sentence?', options: ['Es ist grammatisch falsch.', 'Es klingt zu persönlich.', 'Es ist zu kurz.', 'Es fehlt ein Verb.'], optionsEn: ['It is grammatically wrong.', 'It sounds too personal.', 'It is too short.', 'A verb is missing.'], answer: 1,
        explain: '"Das ist zu persönlich für die Präsentation."' },
      { q: 'Wie formuliert Frauke ihn um?', qEn: 'How does Frauke rephrase it?', options: ['Ich glaube, es funktioniert.', 'Die Ergebnisse zeigen, dass die Methode zuverlässig funktioniert.', 'Man kann sagen, es funktioniert vielleicht.', 'Es funktioniert bestimmt.'], optionsEn: ['I think it works.', 'The results show that the method works reliably.', 'One could say it might work.', 'It will definitely work.'], answer: 1,
        explain: '"Die Ergebnisse zeigen, dass die Methode … zuverlässig funktioniert."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege schreibt „ich glaube, dass die Methode funktioniert“. Formuliere um.", taskEn: "Your colleague writes “I believe the method works”. Rephrase it.", de: "Die Untersuchung zeigt, dass die Methode funktioniert.", en: "The study shows that the method works." },
    { task: "Er fragt, wie er seine Hypothese vorsichtig formuliert.", taskEn: "He asks how to phrase his hypothesis cautiously.", de: "Die Hypothese deutet darauf hin, dass der Effekt gering ist.", en: "The hypothesis indicates that the effect is small." },
    { task: "Stell im Seminar deine Erkenntnis objektiv vor.", taskEn: "Present your finding objectively in the seminar.", de: "Es lässt sich feststellen, dass die Werte seit 2020 sinken.", en: "It can be established that the values have been falling since 2020." },
    { task: "Deine Betreuerin fragt, was noch nötig ist.", taskEn: "Your supervisor asks what else is needed.", de: "Weitere Untersuchungen sind erforderlich, um das zu belegen.", en: "Further research is required to substantiate this." },
    { task: "Rollenspiel: Ihr probt die Forschungspräsentation.", taskEn: "Role-play: you rehearse the research presentation.", de: "Im Folgenden wird die Methode dargestellt. — Anschließend werden die Grenzen diskutiert.", en: "In what follows the method is presented. — Then the limitations are discussed." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (6-8 sentences): Rewrite an informal article into academic German, replacing subjective language, emotional expressions, and informal vocabulary with academic equivalents.\n\nTASK 2 — Research summary (250 words): Write a summary including objective language, academic expressions, nominal structures, evidence-based conclusions, and logical paragraph structure.',
    starters: ['Die Untersuchung zeigt, dass ...', 'Daraus ergibt sich, dass ...'],
    placeholder: 'Die Untersuchung zeigt, dass die Temperatur gestiegen ist. Daraus ergibt sich, dass weitere Forschung notwendig ist.',
    minWords: 250
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence is appropriate for academic writing?',
      options: ['Die Ergebnisse erscheinen vielversprechend.', 'Ich finde, die Studie ist toll.', 'Die Ergebnisse sind mega gut.'],
      answer: 0,
      explain: '"Die Ergebnisse erscheinen vielversprechend" is objective and evidence-based; the other two are subjective/informal.'
    },
    gap: {
      sentence: ['Die Untersuchung ', ', dass die Temperatur gestiegen ist.'],
      gaps: [ { answer: 'zeigt', accepts: ['zeigt'] } ],
      explain: '"Die Untersuchung zeigt, dass..." is the standard academic expression for presenting findings.'
    },
    match: {
      q: 'Match each academic expression to its function.',
      pairs: [
        { noun: 'die Untersuchung zeigt, dass ...', art: 'Presenting findings' },
        { noun: 'daraus ergibt sich ...', art: 'Drawing conclusions' },
        { noun: 'es lässt sich feststellen, dass ...', art: 'Objective observation' },
        { noun: 'im Folgenden wird ...', art: 'Structuring a text' }
      ]
    },
    builder: {
      target: 'Build: "The results show that the temperature has risen." (academic expression)',
      bank: ['Die', 'Ergebnisse', 'zeigen', ',', 'dass', 'die', 'Temperatur', 'gestiegen', 'ist', '.'],
      answer: ['Die', 'Ergebnisse', 'zeigen', ',', 'dass', 'die', 'Temperatur', 'gestiegen', 'ist', '.'],
      roles: { 'Die': 'r-academic', 'Ergebnisse': 'r-academic', 'zeigen': 'r-academic' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich finde, die Studie ist toll.',
      right: 'Die Ergebnisse erscheinen vielversprechend.',
      explain: 'Academic writing avoids personal opinion — replace subjective phrasing with an objective, evidence-based expression.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What are the key characteristics of Wissenschaftssprache?', options: ['Objective, precise, neutral, evidence-based', 'Emotional, personal, casual', 'Exaggerated and opinion-based'], answer: 0,
      explain: 'Academic German is objective, precise, neutral, evidence-based, logical, and formal.' },
    { q: 'Which expression is used for presenting findings?', options: ['Die Untersuchung zeigt, dass ...', 'Ich finde, dass ...', 'Das ist super.'], answer: 0,
      explain: '"Die Untersuchung zeigt, dass..." is a fixed academic expression for objectively presenting findings.' },
    { q: 'Which expression is used for drawing conclusions?', options: ['Daraus ergibt sich ...', 'Ich glaube ...', 'Das ist toll.'], answer: 0,
      explain: '"Daraus ergibt sich..." draws a logical conclusion from evidence.' },
    { q: 'Is "Ich finde, die Studie ist toll" appropriate for academic writing?', options: ['No — it is subjective and informal', 'Yes — perfectly academic', 'Only in a thesis introduction'], answer: 0,
      explain: 'This phrasing is subjective and colloquial — academic writing requires objective, evidence-based expressions.' },
    { q: 'What should replace "Ich denke/glaube" in academic writing?', options: ['Objective expressions like "Die Ergebnisse zeigen, dass..."', 'Nothing — it is fine as is', 'A stronger personal opinion'], answer: 0,
      explain: 'Academic German never presents personal opinion as the basis for a claim — it relies on evidence.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-academic', html: 'Academic German is objective, precise, neutral, and evidence-based — never emotional, exaggerated, or opinion-based.' },
    { c: 'r-academic', html: 'Fixed expressions (die Untersuchung zeigt, dass...; daraus ergibt sich...; es lässt sich feststellen, dass...) replace subjective phrasing.' },
    { c: 'r-subjective', html: 'Never write "Ich finde" or "Ich glaube" in academic writing — always write "Die Ergebnisse zeigen, dass...".' }
  ],
  revisionTips: [
    'For every subjective sentence you write casually, practise rewriting it with an objective academic expression.',
    'Scan a university report or scientific article for fixed academic expressions and note their function (findings, conclusion, observation, structure).',
    'Before writing any academic sentence, ask: what do the data show? What is the evidence? How can this be expressed objectively?'
  ]
};

window.CHAPTER = CHAPTER;
