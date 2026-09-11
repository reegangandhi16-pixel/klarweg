/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 67
   "Argumentieren: Gegenargumente" — counterarguments: introducing
   opposing viewpoints, acknowledging partial agreement, polite
   refutation, weighing pros/cons, balanced discussion. Builds
   directly on Chapter 66 (Standpunkte). Recycling chapter — no
   new vocabulary. Does NOT teach C1 debate techniques, logical
   fallacies, political rhetoric, or persuasive manipulation.
   IMPORTANT: dialogue uses ONLY Katrin and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-67-argumentieren-gegenargumente',
  phase: 'B2 · Phase 7',
  number: 67,
  title: 'Argumentieren: Gegenargumente',
  titleEn: 'Arguing: counterarguments',
  description: 'Opinion → Reason → Counterargument → Response → Conclusion. Strong arguments get stronger when they address the other side fairly.',
  xp: 920,
  time: 90,
  difficulty: 'Advanced',
  nextChapter: { number: 68, title: 'Redemittel für Diskussionen', titleEn: 'Discussion phrases' , href: 'chapter-b2-68-redemittel-fuer-diskussionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Address the other side. <em>Fairly.</em>',
    intro: 'Still preparing for the same Goethe B2 exam, Timo raises a counterargument about loneliness in remote work, and Katrin concedes the point before countering with regular meetings — a stronger argument built by addressing the other side fairly.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See the full five-step balanced discussion in action'
    ],
    scene: 'Vorbereitung auf das Partnergespräch',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Gegenargument', role: 'r-akkusativ', en: 'counterargument', hi: 'प्रतिवाद', pron: 'GAY-gen-ar-goo-ment', type: 'Noun · neut.', why: 'das Gegenargument (this chapter).', ex: 'Ich habe ein Gegenargument.' },
        { w: 'nennen', role: 'r-verb', en: 'name', hi: 'बताना', pron: 'NE-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Viele', role: 'r-subject', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Mitarbeiter', role: 'r-subject', en: 'employees', hi: 'कर्मचारी', pron: 'MIT-ar-by-ter', type: 'Noun · plural' },
        { w: 'fühlen', role: 'r-verb', en: 'feel', hi: 'महसूस करते हैं', pron: 'FÜ-len', type: 'Verb · fühlen' },
        { w: 'sich', role: 'r-akkusativ', en: 'themselves', hi: 'ख़ुद को', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'einsam', role: 'r-akkusativ', en: 'lonely', hi: 'अकेला', pron: 'INE-zahm', type: 'Adjective' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Homeoffice', role: 'r-dativ', en: 'remote work (dat.)', hi: 'होम ऑफ़िस में', pron: 'HOHM-o-fis', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'I would like to name a counterargument. Many employees feel lonely in remote work.', hi: 'Main ek prativaad batana chahta hoon. Kai karmachaari homeoffice mein akela mahsoos karte hain.' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'räume', role: 'r-verb', en: 'concede', hi: 'मान लेती हूँ', pron: 'ROY-muh', type: 'Verb · einräumen (ich)', lexicalUnit: 'einräumen', why: 'einräumen = to concede/admit (this chapter).', ex: 'Ich räume ein, dass das ein Problem ist.' },
        { w: 'ein', role: 'r-verb', en: '(prefix of einräumen)', hi: '', pron: 'ine', type: 'Separable prefix', lexicalUnit: 'einräumen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'echtes', role: 'r-akkusativ', en: 'real', hi: 'वास्तविक', pron: 'E-khtes', type: 'Adjective', why: 'echt = real (this chapter).', ex: 'ein echtes Problem' },
        { w: 'Problem', role: 'r-akkusativ', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I concede that that is a real problem.', hi: 'Main maanti hoon ki yeh ek vaastavik samasya hai.' },
      { speaker: 'Timo', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'würdest', role: 'r-verb', en: 'would you', hi: 'सकोगी', pron: 'VÜR-dest', type: 'Verb · werden (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'meinen', role: 'r-akkusativ', en: 'my (masc.)', hi: 'मेरे', pron: 'MY-nen', type: 'Possessive · acc.' },
        { w: 'Einwand', role: 'r-akkusativ', en: 'objection', hi: 'आपत्ति', pron: 'INE-vant', type: 'Noun · masc.', why: 'der Einwand (this chapter).', ex: 'meinen Einwand widerlegen' },
        { w: 'widerlegen', role: 'r-verb', en: 'refute', hi: 'खंडन करना', pron: 'VEE-der-lay-gen', type: 'Verb · infinitive (Satzende)', why: 'widerlegen = to refute (this chapter).', ex: 'Kannst du das widerlegen?' },
        { w: '?', plain: true }
      ], en: 'How would you refute my objection?', hi: 'Tum meri aapatti ka khandan kaise karogi?' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'कहूंगी', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II, ich)' },
        { w: 'sagen', role: 'r-verb', en: 'say', hi: 'कहना', pron: 'ZAH-gen', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'regelmäßige', role: 'r-subject', en: 'regular', hi: 'नियमित', pron: 'RAY-gel-mai-si-guh', type: 'Adjective' },
        { w: 'Treffen', role: 'r-subject', en: 'meetings', hi: 'मुलाक़ातें', pron: 'TRE-fen', type: 'Noun · plural' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करती हैं', pron: 'HEL-fen', type: 'Verb · helfen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would say that regular meetings help.', hi: 'Main kahoongi ki niyamit mulaaqaatein madad karti hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'ausgewogener', role: 'r-subject', en: 'balanced', hi: 'संतुलित', pron: 'OWS-ge-vo-ge-ner', type: 'Adjective', why: 'ausgewogen = balanced (this chapter).', ex: 'ein ausgewogener Standpunkt' },
        { w: 'Standpunkt', role: 'r-subject', en: 'standpoint', hi: 'दृष्टिकोण', pron: 'SHTANT-punkt', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'That is a balanced standpoint.', hi: 'Yeh ek santulit drishtikon hai.' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Kompromiss', role: 'r-akkusativ', en: 'compromise', hi: 'समझौता', pron: 'kom-pro-MIS', type: 'Noun · masc.' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Thanks! I find the compromise sensible.', hi: 'Dhanyavaad! Mujhe samjhauta uchit lagta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Five steps of a balanced discussion: <span class="de r-opinion">My opinion</span> → <span class="de r-reason">My reason</span> → <span class="de r-counter">Another viewpoint</span> → <span class="de r-refute">My response</span> → <span class="de r-conclusion">Final conclusion</span>. Strong B2 discussions are balanced, respectful, and logical — never emotional.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ARGUMENTIEREN: GEGENARGUMENTE (counterarguments) at B2 level, building on Chapter 66 (Standpunkte). Full five-step structure: Opinion → Reason → Counterargument → Response → Conclusion. Introducing opposing viewpoints: Andererseits...; Allerdings...; Dennoch...; Trotzdem...; Auf der anderen Seite...; Es gibt jedoch auch die Ansicht, dass...; Manche Menschen vertreten die Meinung, dass...; Kritiker argumentieren, dass... Acknowledging: Das stimmt teilweise; Ich kann diesen Standpunkt nachvollziehen; Daran ist etwas Wahres; Das ist ein berechtigter Einwand; In diesem Punkt stimme ich zu. Weighing: Einerseits..., andererseits...; Zwar..., aber...; Auf der einen Seite..., auf der anderen Seite...; Dem stehen jedoch...gegenüber; Trotzdem überwiegen... Polite refutation: Dennoch bin ich überzeugt, dass...; Trotzdem halte ich...für sinnvoll; Allerdings spricht mehr für...; Meiner Ansicht nach überwiegen die Vorteile; Dieses Argument überzeugt mich nicht vollständig. ' +
    'Do NOT expect or require C1 debate techniques, logical fallacy analysis, political rhetoric, or persuasive manipulation — those are separate/higher-level topics; do not flag their absence. The most important thing to catch: a discussion that ignores opposing views entirely (one-sided), or connector misuse (e.g. "Zwar...sondern" instead of "Zwar...aber"; "Trotzdem aber" as a double connector). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that "zwar...aber" is used correctly (never "zwar...sondern").\n' +
    '- Check that connectors are not doubled redundantly (e.g. "Trotzdem aber", "Andererseits jedoch" used clumsily).\n' +
    '- Check that fixed expressions are grammatically correct (e.g. "In diesem Punkt stimme ich zu" needs the separable "zu" at the end).\n' +
    '- Flag a text that presents ONLY one side with no counterargument or acknowledgment as incomplete for this chapter\'s scope — a Goethe B2 discussion is expected to be balanced.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Balance check:</b> one sentence on whether the learner\'s discussion addressed a counterargument fairly before reaching its own conclusion.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you introduce counterarguments fairly and refute them respectfully. Ready for pros and cons discussion next.',
    mid: 'Good. Re-read the Counterargument Expressions table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: address the other side fairly before concluding.'
  },

  parserSentence: [
    { w: 'Andererseits', role: 'r-counter' }, { w: 'vertreten', role: 'r-counter' }, { w: 'manche', role: 'r-counter' },
    { w: 'Menschen', role: 'r-counter' }, { w: 'die', role: 'r-counter' }, { w: 'Meinung', role: 'r-counter' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: address the other side fairly before reaching your conclusion — five-step balanced discussion.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katrin and Timo prepare a Goethe B2 discussion on AI in education, introducing and answering counterarguments.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master introducing counterarguments, acknowledging them, weighing pros/cons, and refuting politely.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read an argumentative article on social media and a university discussion on remote learning.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify opinion, counterargument, response, agreement, and conclusion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present opinions, introduce counterarguments, respond politely, and reach a balanced conclusion.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a 250-word discussion essay with two counterarguments and responses, and rewrite a one-sided essay to be balanced.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill identifying counterarguments, completing debates, and choosing the best response.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 920 XP.' },
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
      desc: 'Counterargument-identification drills, balanced-discussion building, and a 250-word essay task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Counterargument Expressions table, Discussion Structure model, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Andererseits ... / Manche Menschen vertreten die Meinung, dass ... / Kritiker argumentieren, dass ...', text: 'Introduce opposing viewpoints naturally' },
    { de: 'Daran ist etwas Wahres. / Das ist ein berechtigter Einwand.', text: 'Acknowledge counterarguments respectfully' },
    { de: 'Einerseits ..., andererseits ... / Zwar ..., aber ...', text: 'Weigh advantages and disadvantages objectively' },
    { de: 'Dennoch bin ich überzeugt, dass ... / Trotzdem halte ich ... für sinnvoll.', text: 'Refute counterarguments politely without dismissing them' },
    { de: 'My opinion → my reason → another viewpoint → my response → final conclusion', text: 'Build a complete, balanced five-step discussion' }
  ],

  vocab: [
    { de: 'das Gegenargument', art: 'das', gender: 'n', plural: 'Gegenargumente', pos: 'noun', level: 'B2', register: 'written', en: 'counterargument', hi: 'प्रतिवाद', ex: 'Er brachte ein starkes Gegenargument vor.', exEn: 'He presented a strong counterargument.', exHi: 'Usne ek mazboot prativaad prastut kiya.', ex2: 'Sie haben das Gegenargument widerlegt.', ex2En: 'They\'ve refuted the counterargument.', ex2Hi: 'Unhone prativaad ka khandan kiya hai.' },
    { de: 'einräumen', pos: 'verb', level: 'B2', register: 'written', en: 'to concede, admit', hi: 'स्वीकार करना', ex: 'Sie räumt ein, dass ihr Plan Schwächen hat.', exEn: 'She concedes that her plan has weaknesses.', exHi: 'Woh sweekaar karti hai ki uske plan mein kamzoriyaan hain.', ex2: 'Sie haben den Fehler eingeräumt.', ex2En: 'They\'ve conceded the mistake.', ex2Hi: 'Unhone galti sweekaar ki hai.', conj: { praesens: 'räumt ein', praeteritum: 'räumte ein', perfekt: 'hat eingeräumt' } },
    { de: 'widerlegen', pos: 'verb', level: 'B2', register: 'written', en: 'to refute', hi: 'खंडन करना', ex: 'Es ist schwer, diese Behauptung zu widerlegen.', exEn: 'It\'s difficult to refute this claim.', exHi: 'Iss daave ka khandan karna mushkil hai.', ex2: 'Sie haben das Argument erfolgreich widerlegt.', ex2En: 'They\'ve successfully refuted the argument.', ex2Hi: 'Unhone tark ka safaltapoorvak khandan kiya hai.', conj: { praesens: 'widerlegt', praeteritum: 'widerlegte', perfekt: 'hat widerlegt' } },
    { de: 'der Einwand', art: 'der', gender: 'm', plural: 'Einwände', pos: 'noun', level: 'B2', register: 'written', en: 'objection', hi: 'आपत्ति', ex: 'Das ist ein berechtigter Einwand.', exEn: 'That is a legitimate objection.', exHi: 'Yeh ek uchit aapatti hai.', ex2: 'Sie haben mehrere Einwände geäußert.', ex2En: 'They\'ve raised several objections.', ex2Hi: 'Unhone kai aapatiyaan uthaayi hain.' },
    { de: 'ausgewogen', pos: 'adjective', level: 'B2', register: 'written', en: 'balanced', hi: 'संतुलित', ex: 'Die Diskussion war sehr ausgewogen.', exEn: 'The discussion was very balanced.', exHi: 'Charcha bahut santulit thi.', ex2: 'Sie haben eine ausgewogene Meinung vertreten.', ex2En: 'They\'ve held a balanced opinion.', ex2Hi: 'Unhone ek santulit raay rakhi hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist ein Gegenargument?',
      body: [ 'A good discussion follows: Opinion → Counterargument → Response → Conclusion. Ignoring other opinions is NOT good argumentation.' ],
      hinglish: 'Achhi discussion ka order yeh hota hai: apni raay, phir doosri taraf ki baat, phir uspar jawaab, aur ant mein nateeja. Doosre ki baat ko ignore kar dena kamzor argument banata hai \u2014 exam mein bhi iske marks kat jaate hain.'
    },
    {
      title: 'Gegenargumente einführen (introducing counterarguments)',
      body: [ 'Useful expressions with register notes.' ],
      table: {
        head: ['Expression', 'Function'],
        rows: [
          ['Andererseits ...', 'introduce another side'],
          ['Allerdings ...', 'limitation'],
          ['Dennoch ...', 'contrast + continuation'],
          ['Trotzdem ...', 'concession'],
          ['Auf der anderen Seite ...', 'opposing viewpoint'],
          ['Es gibt jedoch auch die Ansicht, dass ...', 'introducing formally'],
          ['Manche Menschen vertreten die Meinung, dass ...', 'attributing to others'],
          ['Kritiker argumentieren, dass ...', 'academic/formal attribution']
        ]
      },
      hinglish: 'Doosri taraf ki baat rakhne ke liye yeh expressions kaam aate hain. <b>Andererseits</b> aur <b>Auf der anderen Seite</b> normal discussion mein chalte hain, aur <b>Kritiker argumentieren, dass \u2026</b> ya <b>Es gibt jedoch auch die Ansicht, dass \u2026</b> formal writing mein. Dhyaan do ki inme se kai position 1 lete hain, isliye verb turant baad aayega.'
    },
    {
      title: 'Wortstellung: gefronteter Konnektor und zwar \u2026 aber',
      body: [
        'Two word-order points carry almost all the mistakes in this chapter.',
        'First: <b>Andererseits, Allerdings, Dennoch</b> and <b>Trotzdem</b> take position 1, so the verb must follow immediately \u2014 before the subject. Second: <b>zwar \u2026 aber</b> is a fixed pair, and after <i>zwar</i> the verb also comes straight away.'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['fronted connector + verb + subject', '<span class="de">Andererseits <b>ist</b> das teuer.</span>'],
          ['fronted connector + verb + subject', '<span class="de">Dennoch <b>halte</b> ich das f\u00fcr richtig.</span>'],
          ['zwar + verb \u2026 , aber + normal order', '<span class="de">Zwar <b>ist</b> es flexibel, aber es <b>fehlt</b> der Kontakt.</span>'],
          ['zwar inside the clause', '<span class="de">Das Angebot ist <b>zwar</b> teuer, aber es lohnt sich.</span>']
        ]
      },
      note: '<b>jedoch</b> is more flexible \u2014 it can open the clause (then verb second) or sit in the middle field: <span class="de">Es ist jedoch teuer.</span>',
      hinglish: 'Is chapter ki zyada-tar galtiyan do word-order points se aati hain. Pehla \u2014 <b>Andererseits, Allerdings, Dennoch</b> aur <b>Trotzdem</b> position 1 le lete hain, isliye inke turant baad verb aata hai, subject se pehle: <span class="de">Andererseits ist das teuer.</span> Doosra \u2014 <b>zwar \u2026 aber</b> ek fixed jodi hai, aur <i>zwar</i> ke baad bhi verb turant aa jaata hai. <b>zwar</b> ko clause ke beech mein bhi rakh sakte ho: <span class="de">Das Angebot ist zwar teuer, aber es lohnt sich.</span> Aur <b>jedoch</b> thoda flexible hai \u2014 woh shuru mein bhi aa sakta hai aur beech mein bhi.'
    },
    {
      title: 'Andere Meinungen anerkennen (acknowledging)',
      body: [ 'Expressions for respectful acknowledgment: Das stimmt teilweise; Ich kann diesen Standpunkt nachvollziehen; Daran ist etwas Wahres; Das ist ein berechtigter Einwand; In diesem Punkt stimme ich zu.' ],
      hinglish: 'Doosre ki baat ko maan-ne ke liye yeh phrases hain: <span class="de">Das stimmt teilweise</span>, <span class="de">Ich kann diesen Standpunkt nachvollziehen</span>, <span class="de">Das ist ein berechtigter Einwand</span>. Yeh kehne se tum apni baat nahi haarte \u2014 balki argument zyada mazboot aur mature lagta hai.'
    },
    {
      title: 'Auf Gegenargumente reagieren',
      body: [ 'Jawaab dene ka order yeh hai: pehle doosri taraf ki baat maano, phir apna jawaab do, uska reason do, ek example do, aur nateeje par pahuncho.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Zwar ist Homeoffice flexibel, aber ...', 'While homeoffice is flexible, ...']
        ]
      },
      hinglish: 'Jawaab dene ka order yeh hai: pehle doosri taraf ki baat maano, phir apna jawaab do, uska reason do, ek example do, aur nateeje par pahuncho.'
    },
    {
      title: 'Vor- und Nachteile abwägen',
      body: [ 'Structures for objectively weighing both sides: Einerseits..., andererseits...; Zwar..., aber...; Auf der einen Seite..., auf der anderen Seite...; Dem stehen jedoch...gegenüber; Trotzdem überwiegen...' ],
      hinglish: 'Dono taraf ko taulne ke liye yeh structures hain: <span class="de">Einerseits \u2026, andererseits \u2026</span>, <span class="de">Zwar \u2026, aber \u2026</span>, <span class="de">Auf der einen Seite \u2026, auf der anderen Seite \u2026</span>. Aur ant mein <span class="de">Trotzdem \u00fcberwiegen die Vorteile</span> jaisa vaakya batata hai ki tumhare hisaab se kaunsa pehlu bhaari hai.'
    },
    {
      title: 'Höfliche Widerlegung (polite refutation)',
      body: [ 'Politely khandan karne ke liye: <span class="de">Dennoch bin ich \u00fcberzeugt, dass \u2026</span>, <span class="de">Allerdings spricht mehr f\u00fcr \u2026</span>, <span class="de">Dieses Argument \u00fcberzeugt mich nicht vollst\u00e4ndig</span>. Dhyaan do ki <b>nicht vollst\u00e4ndig</b> jaise shabd baat ko narm rakhte hain \u2014 seedha \u201cfalsch\u201d kehne se baat rukhi lagti hai.' ],
      hinglish: 'Politely khandan karne ke liye: <span class="de">Dennoch bin ich \u00fcberzeugt, dass \u2026</span>, <span class="de">Allerdings spricht mehr f\u00fcr \u2026</span>, <span class="de">Dieses Argument \u00fcberzeugt mich nicht vollst\u00e4ndig</span>. Dhyaan do ki <b>nicht vollst\u00e4ndig</b> jaise shabd baat ko narm rakhte hain \u2014 seedha \u201cfalsch\u201d kehne se baat rukhi lagti hai.'
    },
    {
      title: 'Ausgewogene Diskussionen aufbauen',
      body: [ 'Structure: Standpoint → Counterargument → Evaluation → Own opinion → Conclusion. Never ignore opposing views.' ],
      hinglish: 'Poora structure yeh hai: apni raay, doosri taraf ki baat, uska imaandaar mulyankan, phir apni final raay, aur nateeja. Doosre point of view ko kabhi ignore mat karo \u2014 uspar jawaab dena hi asli argument hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from a reason that repeats the claim, forgetting V2 after a fronted connector, breaking a fixed connector pair, misplacing a separable prefix, or stacking two contrast words.' ],
      mistakes: [
        { wrong: 'Ich bin dagegen, weil ich dagegen bin.', right: 'Ich bin dagegen, weil es zu teuer ist.', why: 'A reason has to add NEW information. Repeating your position is not a justification.' },
        { wrong: 'Andererseits ich denke, dass es teuer ist.', right: 'Andererseits denke ich, dass es teuer ist.', why: '<b>Andererseits</b> fills position 1, so the finite verb has to come second \u2014 before the subject.' },
        { wrong: 'Zwar ist Homeoffice flexibel, sondern es fehlt der Kontakt.', right: 'Zwar ist Homeoffice flexibel, aber es fehlt der Kontakt.', why: '<b>zwar</b> pairs with <b>aber</b>. <i>sondern</i> is only used after a negation, to correct it.' },
        { wrong: 'Ich stimme nicht zu dir.', right: 'Ich stimme dir nicht zu.', why: 'The Dativ object comes early in the clause and the separable prefix <b>zu</b> goes last \u2014 nothing follows it.' },
        { wrong: 'Trotzdem aber halte ich das für sinnvoll.', right: 'Trotzdem halte ich das für sinnvoll.', why: 'Two contrastive connectors in a row are redundant \u2014 one already carries the contrast.' }
      ],
      hinglish: 'Yeh galtiyan paanch tarah se hoti hain \u2014 reason mein wahi baat dohra dena, fronted connector ke baad verb ko doosri jagah par na rakhna, <b>zwar</b> ke saath galat jodi lagana, separable prefix galat jagah rakhna, ya do contrast words ek saath laga dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to discuss a topic? State your opinion, present a counterargument, evaluate it fairly, respond politely, finish with your conclusion.' ],
      note: 'Memory trick: every balanced discussion has five steps — my opinion, my reason, another viewpoint, my response, final conclusion. Strong B2 discussions are balanced, respectful, and logical — not emotional.',
      hinglish: 'Kisi topic par discussion karni hai? Apni raay batao, doosri taraf ki baat rakho, use imaandaari se tolo, politely jawaab do, aur apne nateeje par khatam karo. Yaad rakho \u2014 achhi B2 discussion balanced aur logical hoti hai, emotional nahi.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Argumentativer Artikel über Social Media',
    titleEn: 'Reading A — An argumentative article discussing social media',
    tokens: [
      { w: 'Viele', role: 'plain', en: 'many', hi: 'kai', type: 'Adjective' },
      { w: 'Experten', role: 'plain', en: 'experts', hi: 'visheshagya', type: 'Noun · plural' },
      { w: 'argumentieren', role: 'r-counter', en: 'argue (fixed counterargument expression)', hi: 'tark dete hain (fixed counterargument expression)', type: 'Verb (Präsens)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'Social', role: 'plain', en: 'social', hi: 'social', type: 'Adjective' },
      { w: 'Media', role: 'plain', en: 'media', hi: 'media', type: 'Noun · neut.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Kommunikation', role: 'plain', en: 'communication', hi: 'sanchaar', type: 'Noun · fem.' },
      { w: 'erleichtert', role: 'plain', en: 'facilitates (Satzende)', hi: 'aasaan banaata hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Dem', role: 'r-weigh', en: 'to that (part of "Dem stehen...gegenüber")', hi: '(fixed expression ka hissa)', type: 'Pronomen · Dat.' },
      { w: 'stehen', role: 'r-weigh', en: 'stand (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'jedoch', role: 'r-weigh', en: 'however', hi: 'lekin', type: 'Adverb' },
      { w: 'psychische', role: 'plain', en: 'psychological', hi: 'maanasik', type: 'Adjective' },
      { w: 'Risiken', role: 'plain', en: 'risks (Satzende)', hi: 'jokhim (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'gegenüber', role: 'r-weigh', en: 'opposite (Satzende, fixed expression)', hi: 'ke saamne (Satzende, fixed expression)', type: 'Präposition · Dat. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'weiteres', role: 'plain', en: 'further', hi: 'और एक', type: 'Adjective' },
      { w: 'Gegenargument', role: 'plain', en: 'counterargument', hi: 'प्रतिवाद', type: 'Noun · neut.' },
      { w: 'betrifft', role: 'plain', en: 'concerns', hi: 'से संबंधित है', type: 'Verb · betreffen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Verbreitung', role: 'plain', en: 'spread', hi: 'प्रसार', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'Falschinformationen', role: 'plain', en: 'disinformation (Satzende)', hi: 'ग़लत सूचना (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Trotzdem', role: 'r-weigh', en: 'nevertheless', hi: 'फिर भी', type: 'Adverb' },
      { w: 'lässt', role: 'r-weigh', en: 'can (part of fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Verb · lassen' },
      { w: 'sich', role: 'r-weigh', en: 'itself', hi: '(हिस्सा)', type: 'Reflexivpronomen' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'bestreiten', role: 'r-weigh', en: 'deny (Satzende, fixed expression)', hi: 'नकारा जा सकता (Satzende)', type: 'Verb · Infinitiv', why: '"Es lässt sich nicht bestreiten, dass..." is a fixed academic concession phrase (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: 'dank', role: 'plain', en: 'thanks to', hi: 'की बदौलत', type: 'Preposition · Gen./Dat.' },
      { w: 'Social', role: 'plain', en: 'social', hi: 'सोशल', type: 'Adjective' },
      { w: 'Media', role: 'plain', en: 'media', hi: 'मीडिया', type: 'Noun · neut.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Kontakt', role: 'plain', en: 'contact (Satzende)', hi: 'संपर्क (Satzende)', type: 'Noun · masc.' },
      { w: 'bleiben', role: 'plain', en: 'stay (Satzende)', hi: 'रहते हैं (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Letztlich', role: 'plain', en: 'ultimately', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'hängt', role: 'plain', en: 'depends', hi: 'निर्भर करता है', type: 'Verb · abhängen' },
      { w: 'viel', role: 'plain', en: 'much', hi: 'बहुत कुछ', type: 'Pronoun' },
      { w: 'vom', role: 'plain', en: 'on the', hi: 'पर', type: 'Contraction · von dem' },
      { w: 'verantwortungsvollen', role: 'plain', en: 'responsible', hi: 'ज़िम्मेदार', type: 'Adjective' },
      { w: 'Umgang', role: 'plain', en: 'handling (Satzende)', hi: 'इस्तेमाल (Satzende)', type: 'Noun · masc.' },
      { w: 'jedes', role: 'plain', en: 'of every', hi: 'हर', type: 'Determiner · Genitiv' },
      { w: 'Einzelnen', role: 'plain', en: 'individual (Satzende)', hi: 'व्यक्ति के (Satzende)', type: 'Noun · masc.' },
      { w: 'ab', role: 'plain', en: '(Satzende, Präfix)', hi: '', type: 'Separable prefix · abhängen' },
      { w: '.', plain: true }
    ],
    translation: 'Many experts argue that social media facilitates communication. However, psychological risks stand opposite that. A further counterargument concerns the spread of disinformation. Nevertheless, it cannot be denied that many people stay in contact thanks to social media. Ultimately, much depends on the responsible use of every individual.',
    comprehension: [
      { q: 'Welche Funktion hat "argumentieren, dass"?', options: ['Introducing a counterargument', 'Stating a conclusion', 'Giving an example'], answer: 0 },
      { q: 'Welche Funktion hat "Dem stehen...gegenüber"?', options: ['Weighing pros and cons', 'Agreeing fully', 'Giving a reason'], answer: 0 },
      { q: 'Ist dieser Text einseitig oder ausgewogen?', options: ['Ausgewogen', 'Einseitig', 'Rein subjektiv'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Universitätsdiskussion über Fernunterricht',
    titleEn: 'Reading B — A university discussion about remote learning',
    tokens: [
      { w: 'Es', role: 'r-counter', en: 'it (part of fixed expression — introducing a viewpoint)', hi: '(fixed expression ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'gibt', role: 'r-counter', en: 'gives (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'jedoch', role: 'r-counter', en: 'however (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Adverb' },
      { w: 'auch', role: 'r-counter', en: 'also (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Adverb' },
      { w: 'die', role: 'r-counter', en: 'the (fem. akk., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Article · Akk.' },
      { w: 'Ansicht', role: 'r-counter', en: 'view (Satzende, fixed expression)', hi: 'raay (Satzende, fixed expression)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'Fernunterricht', role: 'plain', en: 'remote learning', hi: 'door shiksha', type: 'Noun · masc.' },
      { w: 'isoliert', role: 'plain', en: 'isolates (Satzende)', hi: 'alag-thalag karta hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-concede', en: 'I (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'kann', role: 'r-concede', en: 'can (part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Modalverb' },
      { w: 'diesen', role: 'r-concede', en: 'this (masc. akk., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Pronomen · Akk.' },
      { w: 'Standpunkt', role: 'r-concede', en: 'standpoint (Satzende, fixed expression)', hi: 'nazariya (Satzende, fixed expression)', type: 'Noun · masc. (Satzende)' },
      { w: 'nachvollziehen', role: 'r-concede', en: 'understand (Satzende)', hi: 'samajh sakta hoon (Satzende)', type: 'Verb · Satzende' },
      { w: '.', plain: true }
    ],
    translation: 'However, there is also the view that remote learning isolates. I can understand this standpoint.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_067_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ein Gegenargument, das mir noch einfällt: im Homeoffice fühlen sich manche ziemlich einsam.', en: 'A counterargument that just occurred to me: some people feel pretty lonely working from home.' },
      { id: 'B2_067_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zugegeben, das ist ein wichtiger Punkt, den ich nicht ignorieren sollte.', en: 'Admittedly, that\'s an important point I shouldn\'t ignore.' },
      { id: 'B2_067_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Aber wie würdest du darauf reagieren?', en: 'But how would you respond to that?' },
      { id: 'B2_067_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Man könnte regelmäßige Teamtreffen einplanen, um genau das auszugleichen.', en: 'One could schedule regular team meetings to balance out exactly that.' }
    ],
    transcript: 'Ein Gegenargument, das mir noch einfällt: im Homeoffice fühlen sich manche ziemlich einsam. Zugegeben, das ist ein wichtiger Punkt, den ich nicht ignorieren sollte. Aber wie würdest du darauf reagieren? Man könnte regelmäßige Teamtreffen einplanen, um genau das auszugleichen.',
    translation: 'A counterargument that just occurred to me: some people feel pretty lonely working from home. Admittedly, that\'s an important point I shouldn\'t ignore. But how would you respond to that? One could schedule regular team meetings to balance out exactly that.',
    tokens: [
      { w: 'Ein' },
      { w: 'Gegenargument' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'mir' },
      { w: 'noch' },
      { w: 'einfällt' },
      { w: ':', plain: true },
      { w: 'im' },
      { w: 'Homeoffice' },
      { w: 'fühlen' },
      { w: 'sich' },
      { w: 'manche' },
      { w: 'ziemlich' },
      { w: 'einsam' },
      { w: '.', plain: true },
      { w: 'Zugegeben' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'ein' },
      { w: 'wichtiger' },
      { w: 'Punkt' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'ich' },
      { w: 'nicht' },
      { w: 'ignorieren' },
      { w: 'sollte' },
      { w: '.', plain: true },
      { w: 'Aber' },
      { w: 'wie' },
      { w: 'würdest' },
      { w: 'du' },
      { w: 'darauf' },
      { w: 'reagieren' },
      { w: '?', plain: true },
      { w: 'Man' },
      { w: 'könnte' },
      { w: 'regelmäßige' },
      { w: 'Teamtreffen' },
      { w: 'einplanen' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'genau' },
      { w: 'das' },
      { w: 'auszugleichen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Gegenargument bringt Timo ein?', qEn: 'What counterargument does Timo raise?', options: ['Es kostet zu viel.', 'Manche fühlen sich einsam.', 'Es ist zu langsam.', 'Niemand mag es.'], optionsEn: ['It costs too much.', 'Some feel lonely.', 'It is too slow.', 'Nobody likes it.'], answer: 1,
        explain: '"… im Homeoffice fühlen sich manche ziemlich einsam."' },
      { q: 'Wie will Katrin das ausgleichen?', qEn: 'How does Katrin propose to balance that out?', options: ['mehr Urlaub geben', 'regelmäßige Teamtreffen einplanen', 'das Gehalt erhöhen', 'Homeoffice verbieten'], optionsEn: ['give more holiday', 'schedule regular team meetings', 'raise the salary', 'ban working from home'], answer: 1,
        explain: '"Man könnte regelmäßige Teamtreffen einplanen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege nennt die Einsamkeit im Homeoffice. Räum es ein.", taskEn: "Your colleague mentions loneliness at home. Concede it.", de: "Zugegeben, das ist ein wichtiger Punkt, den ich nicht bedacht habe.", en: "Admittedly that's an important point I hadn't considered." },
    { task: "Antworte auf den Einwand, ohne deine Position aufzugeben.", taskEn: "Answer the objection without giving up your position.", de: "Dennoch bin ich überzeugt, dass zwei Bürotage reichen.", en: "Nevertheless I'm convinced two office days are enough." },
    { task: "Deine Chefin fragt, welches Gegenargument am stärksten ist.", taskEn: "Your boss asks which counter-argument is strongest.", de: "Das stärkste Gegenargument ist der fehlende Austausch.", en: "The strongest counter-argument is the lack of exchange." },
    { task: "Eine Kollegin nennt eine falsche Zahl. Widerlege sie höflich.", taskEn: "A colleague cites a wrong figure. Refute it politely.", de: "Das lässt sich mit den Zahlen widerlegen, sie sind gestiegen.", en: "That can be refuted with the figures, they've risen." },
    { task: "Rollenspiel: Ihr führt eine ausgewogene Diskussion.", taskEn: "Role-play: you hold a balanced discussion.", de: "Einerseits sinken die Kosten, andererseits leidet das Team. — Insgesamt halte ich das Modell für ausgewogen.", en: "On the one hand costs fall, on the other the team suffers. — On balance I consider the model balanced." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Discussion essay (250 words): Present one main opinion, at least two counterarguments, responses to both, and a balanced conclusion.\n\nTASK 2 — Rewrite (8-10 sentences): Take a one-sided opinion essay and rewrite it as a balanced argumentative essay by adding counterarguments, responses, evaluation, and conclusion.',
    starters: ['Ich bin überzeugt, dass ...', 'Andererseits vertreten manche Menschen die Meinung, dass ...'],
    placeholder: 'Ich bin überzeugt, dass KI den Unterricht verbessern kann. Andererseits vertreten manche Menschen die Meinung, dass persönlicher Kontakt wichtiger ist.',
    minWords: 250
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly introduces a counterargument?',
      options: ['Andererseits vertreten manche Menschen die Meinung, dass ...', 'Andererseits ich denke, dass ...', 'Zwar ..., sondern ...'],
      answer: 0,
      explain: 'Correct V2 word order after "Andererseits", and correct fixed expression for introducing an opposing view.'
    },
    gap: {
      sentence: ['Zwar ist Homeoffice flexibel, ', ' fehlt oft der persönliche Kontakt.'],
      gaps: [ { answer: 'aber', accepts: ['aber'] } ],
      explain: '"zwar" is always paired with "aber", never "sondern".'
    },
    match: {
      q: 'Match each expression to its function.',
      pairs: [
        { noun: 'Andererseits ...', art: 'Introducing a counterargument' },
        { noun: 'Das ist ein berechtigter Einwand.', art: 'Acknowledging a counterargument' },
        { noun: 'Dennoch bin ich überzeugt, dass ...', art: 'Polite refutation' },
        { noun: 'Zusammenfassend lässt sich sagen, dass ...', art: 'Balanced conclusion' }
      ]
    },
    builder: {
      target: 'Build: "That is a legitimate objection." (acknowledging a counterargument)',
      bank: ['Das', 'ist', 'ein', 'berechtigter', 'Einwand', '.'],
      answer: ['Das', 'ist', 'ein', 'berechtigter', 'Einwand', '.'],
      roles: { 'Das': 'r-concede', 'ist': 'r-concede', 'ein': 'r-concede', 'berechtigter': 'r-concede', 'Einwand': 'r-concede' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich stimme nicht zu dir.',
      right: 'Ich stimme dir nicht zu.',
      explain: '"zustimmen" takes a dative object ("dir") before the separable prefix "zu" at the end of the clause.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is the five-step structure of a balanced discussion?', options: ['My opinion → my reason → another viewpoint → my response → final conclusion', 'Question → answer → fact → opinion → summary', 'Introduction → body → body → body → ending'], answer: 0,
      explain: 'This is the full discussion model taught in this chapter, building on the four-step argument model from Chapter 66.' },
    { q: 'Which expression introduces a counterargument academically?', options: ['Kritiker argumentieren, dass ...', 'Ich stimme völlig zu.', 'Zum Beispiel ...'], answer: 0,
      explain: '"Kritiker argumentieren, dass..." attributes an opposing view to critics, common in formal discussion.' },
    { q: 'Which expression acknowledges partial truth in a counterargument?', options: ['Daran ist etwas Wahres.', 'Das überzeugt mich nicht.', 'Ich bin völlig anderer Meinung.'], answer: 0,
      explain: '"Daran ist etwas Wahres" concedes that the counterargument has some validity.' },
    { q: 'Is "Zwar ..., sondern ..." a correct pairing?', options: ['No — "zwar" pairs with "aber", not "sondern"', 'Yes, always correct', 'Only in formal writing'], answer: 0,
      explain: '"zwar" is always paired with "aber" for balanced comparison.' },
    { q: 'Should a strong B2 discussion ignore opposing views?', options: ['No — it should address them fairly before concluding', 'Yes, focus only on your own opinion', 'Only in written essays'], answer: 0,
      explain: 'Strong arguments become stronger when they address opposing opinions fairly, not by ignoring them.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-counter', html: 'Introduce counterarguments naturally: Andererseits...; Manche Menschen vertreten die Meinung, dass...; Kritiker argumentieren, dass...' },
    { c: 'r-concede', html: 'Acknowledge before refuting: Das ist ein berechtigter Einwand; Daran ist etwas Wahres; In diesem Punkt stimme ich zu.' },
    { c: 'r-refute', html: 'Refute politely, never bluntly: Dennoch bin ich überzeugt, dass...; Trotzdem halte ich...für sinnvoll. Five steps: opinion → reason → counterargument → response → conclusion.' }
  ],
  revisionTips: [
    'For every opinion you state, practise adding a counterargument and a polite response using the five-step model.',
    'Scan a discussion article for counterargument-introducing and acknowledging expressions, and note their register.',
    'Practise weighing pros and cons on a topic using "Einerseits..., andererseits..." and "Zwar..., aber..." — never "Zwar..., sondern...".'
  ]
};

window.CHAPTER = CHAPTER;
