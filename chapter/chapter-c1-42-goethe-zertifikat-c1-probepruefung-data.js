/* KLARWEG CHAPTER DATA — C1 · Chapter 42
   "Goethe-Zertifikat C1 Probeprüfung" — full mock examination
   integrating Chapters 31-41: adversative language, cohesion,
   collocations, Zusammenfassung, Stellungnahme, Forumsbeitrag,
   Grafikbeschreibung. NO new grammar or vocabulary — pure
   revision, integration, and exam-readiness assessment.
   Dialogue: Ines and Timo ONLY. */
const CHAPTER = {
  id: 'c1-42-goethe-zertifikat-c1-probepruefung',
  phase: 'C1 · Nominalstil & Präzision',
  number: 42,
  title: 'Goethe-Zertifikat C1 Probeprüfung',
  titleEn: 'Goethe-Zertifikat C1 mock examination',
  description: 'Imagine you\'re already at the Goethe exam. Don\'t think "I have to remember everything." Think "I\'ve already learned everything — now I simply demonstrate what I know."',
  xp: 1050, time: 150, difficulty: 'Advanced',
  nextChapter: { number: 43, title: 'Goethe-Zertifikat C1 Final', titleEn: 'Complete C1 mastery & certification readiness' , href: 'chapter-c1-43-goethe-zertifikat-c1-final.html' },
  prevChapter: { number: 41, title: 'Grafikbeschreibung & Grafikauswertung', titleEn: 'Describing and evaluating graphics', href: 'chapter-c1-41-grafikbeschreibung-und-grafikauswertung.html' },
  heroAnimationPath: null,
  isRevision: true,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'You\'ve already learned everything — now simply <em>demonstrate</em> it.',
    intro: 'At the Goethe Institute for their C1 exam, Ines admits her exam anxiety despite intensive preparation, and Timo walks her through how the evaluation runs — naturally recycling every skill from the chapters before.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'A full mock exam covering Lesen, Hören, Schreiben, and Sprechen at authentic Goethe C1 difficulty'],
    scene: 'Am Goethe-Institut: Anmeldung, Wartezeit und die C1-Prüfung',
    femaleSpeakers: ['Ines'],
    dialogue: [
      { speaker: 'Ines', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Vorbereitung', role: 'r-subject', en: 'preparation', hi: 'तैयारी', pron: 'FOR-be-ry-tung', type: 'Noun · fem.', why: 'die Vorbereitung (this chapter).', ex: 'meine Vorbereitung' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'intensiv', role: 'r-akkusativ', en: 'intensive', hi: 'गहन', pron: 'in-ten-ZEEF', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'Prüfungsangst', role: 'r-akkusativ', en: 'exam anxiety', hi: 'परीक्षा का डर', pron: 'PRÜ-fungs-ankst', type: 'Noun · fem.', why: 'die Prüfungsangst (this chapter).', ex: 'Prüfungsangst haben' },
        { w: '.', plain: true }
      ], en: 'My preparation was intensive, nevertheless I have exam anxiety.', hi: 'Meri taiyaari gahan thi, phir bhi mujhe pariksha ka dar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'nachvollziehen', role: 'r-verb', en: 'understand', hi: 'समझ सकता हूँ', pron: 'nahkh-FOL-tsee-en', type: 'Verb · infinitive (Satzende)', why: 'nachvollziehen (recycled C1).', ex: 'das nachvollziehen' },
        { w: '.', plain: true }
      ], en: 'I can understand that.', hi: 'Main yeh samajh sakta hoon.' },
      { speaker: 'Ines', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'läuft', role: 'r-verb', en: 'runs', hi: 'होती है', pron: 'LOYFT', type: 'Verb · laufen', lexicalUnit: 'ablaufen' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Bewertung', role: 'r-subject', en: 'evaluation', hi: 'मूल्यांकन', pron: 'be-VAIR-tung', type: 'Noun · fem.', why: 'die Bewertung (this chapter).', ex: 'die Bewertung der Prüfung' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Prüfung', role: 'r-dativ', en: 'exam (gen.)', hi: 'परीक्षा के', pron: 'PRÜ-fung', type: 'Noun · fem. genitive' },
        { w: 'ab', role: 'r-verb', en: '(prefix of ablaufen)', hi: '', pron: 'ap', type: 'Separable prefix · Satzende', lexicalUnit: 'ablaufen' },
        { w: '?', plain: true }
      ], en: 'How does the evaluation of the exam run?', hi: 'Pariksha ka moolyaankan kaise hota hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsoo-AIRST', type: 'Adverb' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'schriftliche', role: 'r-subject', en: 'written', hi: 'लिखित', pron: 'SHRIFT-li-khuh', type: 'Adjective' },
        { w: 'Modul', role: 'r-subject', en: 'module', hi: 'मॉड्यूल', pron: 'mo-DOOL', type: 'Noun · neut.' },
        { w: 'bewertet', role: 'r-verb', en: 'evaluated', hi: 'मूल्यांकित', pron: 'be-VAIR-tet', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'mündliche', role: 'r-subject', en: 'oral', hi: 'मौखिक', pron: 'MÜNT-li-khuh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'First the written module is evaluated, after that the oral one.', hi: 'Pehle likhit module ka moolyaankan hota hai, uske baad maukhik ka.' },
      { speaker: 'Ines', tokens: [
        { w: 'Abschließend', role: 'r-akkusativ', en: 'in conclusion', hi: 'निष्कर्ष के रूप में', pron: 'AP-shlee-sent', type: 'Adverb (recycled C1)' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective', why: 'zuversichtlich (recycled C1).', ex: 'zuversichtlich sein' },
        { w: '.', plain: true }
      ], en: 'In conclusion I am confident.', hi: 'Nishkarsh ke roop mein, main aashvast hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'schaffen', role: 'r-verb', en: 'will manage', hi: 'कर लेंगे', pron: 'SHA-fen', type: 'Verb · schaffen (wir)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: '!', plain: true }
      ], en: 'We will manage this together!', hi: 'Hum yeh saath mein kar lenge!' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine you\'re already at the exam. You\'ve already learned everything — now simply <span class="de r-revision">demonstrate</span> what you know.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. This is GOETHE-ZERTIFIKAT C1 PROBEPRÜFUNG — a full mock-exam revision chapter integrating everything from Chapters 31-41: adversative connectors and concession (Ch31, 35), text cohesion (Ch32), collocations and meaning nuances (Ch37), register mastery (Ch36), summary writing (Ch38), Stellungnahme (Ch39), Forumsbeitrag (Ch40), and Grafikbeschreibung (Ch41). NO new grammar or vocabulary is introduced in this chapter — evaluate the learner\'s writing purely against the standards already established in those chapters. Depending on which task the learner is attempting, apply the relevant standard: for a Zusammenfassung, check objective paraphrasing without added opinion; for a Stellungnahme, check the position-evidence-counter-argument-evaluation-conclusion structure; for a Forumsbeitrag, check the semi-formal opening-opinion-reaction-engagement-closing structure; for a Grafikbeschreibung, check introduction-description-comparison-trend-interpretation-conclusion and that observation is separated from hedged interpretation. Across all tasks, check for correct collocations, appropriate register consistency, and good text cohesion (varied, non-repetitive connectors and references). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: First identify which genre the text most resembles (Zusammenfassung/Stellungnahme/Forumsbeitrag/Grafikbeschreibung), then apply that genre\'s specific structural checklist from the chapters above. Flag genuine collocation errors, register inconsistency, and missing genre-appropriate structure. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence, naming the genre you detected.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Exam-readiness check:</b> one sentence on whether this text would meet Goethe C1 standards for its genre.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you demonstrate genuine Goethe C1 exam readiness across every skill from Chapters 31–41. Ready for the next chapter.', mid: 'Good. Re-read the weakest section\'s Master Table once, then retake the relevant mock task.', low: 'Worth revisiting Chapters 31–41 individually before attempting the full mock exam again — remember: you\'ve already learned everything, now demonstrate it.' },
  parserSentence: [ { w: 'Meines', role: 'r-revision' }, { w: 'Erachtens', role: 'r-revision' }, { w: 'sind', role: 'plain' }, { w: 'wir', role: 'plain' }, { w: 'bereit', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: you\'ve already learned everything — now simply demonstrate it under exam conditions.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Ines and Timo arrive at the Goethe Institute, reviewing strategies from every chapter since 31 before the exam.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Revise the chapter\'s key expressions from Chapters 31–41 — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Revise adversative language, cohesion, collocations, register, and the four writing genres — no new content.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Complete four authentic Goethe C1 reading sections: academic article, newspaper commentary, scientific report, professional communication.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Complete four listening sections: university lecture, radio interview, expert discussion, professional presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Complete the full Goethe C1 speaking exam: presentation, partner discussion, follow-up questions.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Complete all three Goethe C1 writing tasks: Zusammenfassung, Stellungnahme/Forumsbeitrag, and Grafikbeschreibung.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete the full mock-exam exercise battery: reading, listening, writing, and speaking review sections.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions covering Chapters 31–41. Pass to bank the full 1050 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your complete Goethe C1 readiness dashboard and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download the full mock-exam resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All revision words from Chapters 31–41 with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'The complete mock-exam battery: reading, listening, writing, and speaking tasks with model answers.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'A consolidated revision handbook covering every Master Table and Model from Chapters 31–41.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Ich bin etwas nervös, aber ich habe mich gut vorbereitet.', text: 'Revise adversative connectors (Chapter 31) in a natural exam-day context' },
    { de: 'Meines Erachtens haben wir genug geübt.', text: 'Revise the Stellungnahme opening phrase (Chapter 39)' },
    { de: 'Ein weiterer Aspekt: bei der Grafikbeschreibung sollten wir immer zuerst die Hauptidee nennen.', text: 'Revise Grafikbeschreibung structure (Chapter 41) via Forumsbeitrag phrasing (Chapter 40)' },
    { de: 'Für den Forumsbeitrag sollten wir nicht vergessen, eine Frage zu stellen.', text: 'Revise the reader-engagement requirement of a Forumsbeitrag (Chapter 40)' },
    { de: 'Abschließend lässt sich sagen: Wir sind bereit!', text: 'Revise the recurring conclusion phrase used across multiple writing genres' }
  ],
  vocab: [
    { de: 'die Vorbereitung', art: 'die', gender: 'f', plural: 'Vorbereitungen', pos: 'noun', level: 'C1', register: 'both', en: 'preparation', hi: 'तैयारी', ex: 'Eine gründliche Vorbereitung ist für die Prüfung entscheidend.', exEn: 'Thorough preparation is decisive for the exam.', exHi: 'Pareeksha ke liye achhi taiyaari zaroori hai.', ex2: 'Meine Vorbereitung hat sich gelohnt.', ex2En: 'My preparation paid off.', ex2Hi: 'Meri taiyaari kaam aayi.' },
    { de: 'die Bewertung', art: 'die', gender: 'f', plural: 'Bewertungen', pos: 'noun', level: 'C1', register: 'both', en: 'assessment, evaluation', hi: 'मूल्यांकन', ex: 'Die Bewertung erfolgt nach offiziellen Kriterien.', exEn: 'The assessment is conducted according to official criteria.', exHi: 'Mulyaankan aadhikaarik criteria ke anusaar hota hai.', ex2: 'Die mündliche Bewertung dauert etwa 15 Minuten.', ex2En: 'The oral assessment takes about 15 minutes.', ex2Hi: 'Mauka mulyaankan lagbhag 15 minute leta hai.' },
    { de: 'nachvollziehen', pos: 'verb (revision, Chapter 40)', level: 'C1', register: 'semi-formal', en: 'to follow, understand', hi: 'समझ पाना', ex: 'Ich kann deine Argumentation gut nachvollziehen.', exEn: 'I can follow your argumentation well.', exHi: 'Main tumhaari daleel achhi tarah samajh sakta hoon.', ex2: 'Die Bewertungskriterien sind klar nachvollziehbar.', ex2En: 'The assessment criteria are clearly comprehensible.', ex2Hi: 'Mulyaankan criteria spasht roop se samajh mein aate hain.' },
    { de: 'abschließend', pos: 'adverb (revision, recurring across Ch34/39/41)', level: 'C1', register: 'written', en: 'in conclusion, finally', hi: 'अंत में', ex: 'Abschließend lässt sich sagen: Wir sind bereit.', exEn: 'In conclusion, one can say: we are ready.', exHi: 'Ant mein, kaha jaa sakta hai: hum taiyaar hain.', ex2: 'Abschließend möchte ich mich für Ihre Zeit bedanken.', ex2En: 'In conclusion, I would like to thank you for your time.', ex2Hi: 'Ant mein, main aapke samay ke liye dhanyavaad karna chahta hoon.' },
    { de: 'die Prüfungsangst', art: 'die', gender: 'f', pos: 'noun', level: 'C1', register: 'informal', en: 'exam anxiety', hi: 'परीक्षा की चिंता', ex: 'Ich habe etwas Prüfungsangst, aber ich habe mich gut vorbereitet.', exEn: 'I have some exam anxiety, but I have prepared well.', exHi: 'Mujhe thodi pareeksha ki chinta hai, lekin maine achhi taiyaari ki hai.', ex2: 'Regelmäßiges Üben reduziert die Prüfungsangst.', ex2En: 'Regular practice reduces exam anxiety.', ex2Hi: 'Niyamit practice pareeksha ki chinta kam karti hai.' }
  ],
  grammar: [
    { title: 'Revision: Gegensätze & Konzession (Chapters 31 & 35)', body: [ 'Review adversative connectors (aber, jedoch, hingegen), concession (zwar...allerdings, obwohl), and balanced evaluation (nach Abwägung beider Seiten) before the exam. No new content — this is pure consolidation.' ], hinglish: 'Sabse zaroori baat word order hai, matlab nahi. <b>aber</b> aur <b>sondern</b> conjunctions hain \u2014 normal order chalta hai. <b>jedoch, dennoch, hingegen, allerdings</b> adverbs hain \u2014 position 1 par aayein to verb turant baad. Aur <b>obwohl, obgleich, auch wenn</b> subordinating hain \u2014 verb clause ke end mein. Ek pakki baat: contrast do baar mat lagao (<i>obwohl \u2026 trotzdem</i> galat hai).' },
    { title: 'Revision: Kohärenz & Textverknüpfung (Chapter 32)', body: [ 'Review reference words (dies, jene, dabei, dafür) and lexical cohesion, avoiding repetition while maintaining topic continuity across paragraphs.' ], hinglish: 'Do mechanical baatein check karo. Marker position 1 par ho to verb doosri jagah par aata hai aur uske baad comma nahi lagta. Aur reference mein \u2014 <b>dies</b> kisi <b>noun</b> ko refer karta hai, jabki <b>was</b> poori pichli baat ko. Aur <b>da(r)-</b> forms sirf cheezon ke liye hain, logon ke liye nahi.' },
    { title: 'Revision: Kollokationen & Bedeutungsnuancen (Chapter 37)', body: [ 'Review verb+noun and adjective+noun collocations (eine Entscheidung treffen, Maßnahmen ergreifen, fundierte Kenntnisse) and near-synonym precision (sehen/beobachten/betrachten).' ], hinglish: 'Yaad rakhne ka sabse tez tareeka \u2014 teen verbs se bacho: <i>machen</i>, <i>nehmen</i>, <i>sehen</i>. Inki jagah aata hai <span class="de">Entscheidung <b>treffen</b></span>, <span class="de">Ma\u00dfnahmen <b>ergreifen</b></span>, <span class="de">Kritik <b>\u00fcben</b></span>, <span class="de">Einfluss <b>aus\u00fcben</b></span>, <span class="de">Verantwortung <b>\u00fcbernehmen</b></span>, aur academic writing mein <span class="de">es wurde <b>festgestellt</b></span>. Adjective bhi fix hota hai: <b>scharfe</b> Kritik, <b>fundierte</b> Kenntnisse.' },
    { title: 'Revision: Register & Stilebenen (Chapter 36)', body: [ 'Review the six style levels and formal/informal vocabulary pairs (benötigen/brauchen, erhalten/bekommen) — matching register to each exam task is essential.' ], hinglish: 'Register chaar cheezon se banta hai, aur chaaron poore text mein ek jaisi rehni chahiye: address (<b>du</b> ya <b>Sie</b>), vocabulary (<b>brauchen</b> ya <b>ben\u00f6tigen</b>), karne wala (<i>wir haben untersucht</i> ya passive <i>es wurde untersucht</i>), aur connectors (<i>also</i> ya <b>dar\u00fcber hinaus</b>). Aur yaad rakho \u2014 zyada formal hona bhi galti hai.' },
    { title: 'Revision: Die vier Schreibformen (Chapters 38–41)', body: [ 'Zusammenfassung: objective, paraphrased, no opinion. Stellungnahme: position → evidence → counter-argument → evaluation → conclusion. Forumsbeitrag: semi-formal, interactive, invites discussion. Grafikbeschreibung: introduction → description → comparison → trend → hedged interpretation → conclusion.' ], hinglish: 'Chaar genres, aur har ek ki ek khaas cheez jo aksar chhoot jaati hai. <b>Zusammenfassung</b>: poori Pr\u00e4sens mein, koi raay nahi, aur author ke hedge (<i>m\u00f6glicherweise</i>) mat hatao. <b>Stellungnahme</b>: counter-argument aur evaluation dono aane chahiye, warna adhoora lagta hai. <b>Forumsbeitrag</b>: ant mein ek sawaal, aur poore post mein ek hi address form. <b>Grafikbeschreibung</b>: cause hamesha hedge ke saath, aur data verbs ke saath sahi preposition.' },
    { title: 'Meister-Tabelle: Genre-Auswahl', body: [ 'Task type mapped to its defining structural requirement.' ], table: { head: ['Genre', 'Key Requirement'], rows: [ ['Zusammenfassung', 'Objective, no personal opinion'], ['Stellungnahme', 'Judge-like balance, justified conclusion'], ['Forumsbeitrag', 'Interactive, invites discussion'], ['Grafikbeschreibung', 'Data-analyst thinking, hedged interpretation'] ] }, hinglish: 'Chaar genres ka table \u2014 exam mein pehla kaam yeh pehchaanna hai ki kaunsa genre chahiye, kyunki structure usi se tay hota hai.' },
    { title: 'Typische Fehler in der Prüfung (exam-day mistakes)', body: [ 'One error from each of the six chapters this checkpoint covers, in the form it actually takes in exam writing. If any still needs thinking about, that is the chapter to revisit.' ], mistakes: [
      { wrong: 'Meines Erachtens, dass die Regelung sinnvoll ist.', right: 'Meines Erachtens ist die Regelung sinnvoll. / Ich bin der Auffassung, dass die Regelung sinnvoll ist.', why: 'Ch.39: adverbial openings take position 1 and verb-second \u2014 only noun-based phrases (<i>Auffassung</i>, <i>Ansicht</i>) take <b>dass</b>.' },
      { wrong: 'Die Regierung hat Ma\u00dfnahmen genommen und Kritik gemacht.', right: 'Die Regierung hat Ma\u00dfnahmen ergriffen und Kritik ge\u00fcbt.', why: 'Ch.37: fixed collocations \u2014 <b>Ma\u00dfnahmen ergreifen</b>, <b>Kritik \u00fcben</b>. <i>machen</i> and <i>nehmen</i> almost never work here.' },
      { wrong: 'Der Anstieg ist eindeutig auf die Preise zur\u00fcckzuf\u00fchren.', right: 'Eine m\u00f6gliche Erkl\u00e4rung w\u00e4re, dass die Preise gestiegen sind.', why: 'Ch.41: a graphic shows WHAT changed, not WHY \u2014 so every cause needs hedging with Konjunktiv II.' },
      { wrong: 'Sehr geehrte Frau M\u00fcller, ich wollte dir kurz Bescheid geben.', right: 'Sehr geehrte Frau M\u00fcller, ich m\u00f6chte Sie kurz informieren.', why: 'Ch.36: a formal salutation commits you to <b>Sie</b> and formal vocabulary \u2014 <i>dir</i> and <i>Bescheid geben</i> break both.' },
      { wrong: 'Obwohl die Daten begrenzt sind, trotzdem sind die Befunde klar.', right: 'Obwohl die Daten begrenzt sind, sind die Befunde klar.', why: 'Ch.31 and 35: <b>obwohl</b> already carries the concession \u2014 adding <b>trotzdem</b> marks it twice.' },
      { wrong: 'Dar\u00fcber hinaus die Studie zeigt weitere Effekte.', right: 'Dar\u00fcber hinaus zeigt die Studie weitere Effekte.', why: 'Ch.32: a discourse marker in position 1 pushes the verb to position 2 \u2014 the subject follows it.' }
    ], hinglish: 'Chhe chapters se ek-ek galti \u2014 aur wahi roop jisme woh exam ki writing mein aati hai. Agar inme se kisi par sochna pad raha hai, to wahi chapter dobara dekh lo.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'For every reading/listening task: identify purpose, manage time, select evidence, answer carefully, review, continue. Repeat this cycle for every module.' ], note: 'Memory trick: imagine you\'re already at the exam. You\'ve already learned everything — now simply demonstrate what you know.', hinglish: 'Har task mein wahi cycle chalao \u2014 purpose samjho, time baanto, saboot chuno, dhyaan se jawaab do, ek baar check karo, aur aage badho. Yahan naya kuch nahi hai; sab kuch pehle padha ja chuka hai, aur yeh chapter sirf dikhata hai ki woh apne aap aa raha hai ya nahi.' }
  ],
  reading: {
    title: 'Fachartikel: Digitale Lernmethoden auf dem Prüfstand',
    titleEn: 'Reading A — Journal article: digital learning methods under scrutiny',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Forschungsergebnisse', role: 'plain', en: 'research findings (Satzende)', hi: 'शोध निष्कर्ष (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'एक', type: 'Article · Gen.' },
      { w: 'aktuellen', role: 'plain', en: 'current', hi: 'हालिया', type: 'Adjective · Gen.' },
      { w: 'Metastudie', role: 'plain', en: 'meta-study (Satzende)', hi: 'मेटा-अध्ययन (Satzende)', type: 'Noun · fem.' },
      { w: 'legen', role: 'r-hedging', en: 'suggest (part of "die Ergebnisse legen nahe" — hedged interpretation phrase)', hi: '', type: 'Verb (Präsens)' },
      { w: 'nahe', role: 'r-hedging', en: '(Satzende, "legen nahe" — standard hedged-interpretation phrase)', hi: 'संकेत देते हैं (Satzende, hedged-interpretation phrase)', type: 'Adjective (Satzende)', why: '"Legen nahe" is the standard academic hedging phrase for a cautious, evidence-based conclusion (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'digitale', role: 'plain', en: 'digital', hi: 'डिजिटल', type: 'Adjective · Nom.' },
      { w: 'Lernmethoden', role: 'plain', en: 'learning methods (Satzende)', hi: 'सीखने के तरीक़े (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'unter', role: 'plain', en: 'under', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'bestimmten', role: 'plain', en: 'certain', hi: 'कुछ', type: 'Adjective · Dat.' },
      { w: 'Bedingungen', role: 'plain', en: 'conditions (Satzende)', hi: 'शर्तों (Satzende)', type: 'Noun · plural' },
      { w: 'effektiver', role: 'plain', en: 'more effective (Satzende)', hi: 'ज़्यादा प्रभावशाली (Satzende)', type: 'Adjective · Komparativ (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: 'als', role: 'plain', en: 'than', hi: 'की तुलना में', type: 'Konjunktion' },
      { w: 'klassischer', role: 'plain', en: 'classic (Satzende)', hi: 'पारंपरिक (Satzende)', type: 'Adjective · Nom.' },
      { w: 'Frontalunterricht', role: 'plain', en: 'lecture-style teaching (Satzende)', hi: 'व्याख्यान शैली में शिक्षण (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Entscheidend', role: 'plain', en: 'decisive', hi: 'निर्णायक', type: 'Adjective' },
      { w: 'sei', role: 'r-konji', en: 'is (Konjunktiv I, reporting the study\'s own claim)', hi: '(Konjunktiv I)', type: 'Verb · sein (Konjunktiv I)', why: 'Konjunktiv I distances the author from the study\'s claim, signalling this is the study\'s own conclusion, not an established fact (this chapter).' },
      { w: 'dabei', role: 'plain', en: 'in this regard', hi: 'इसमें', type: 'Adverb' },
      { w: 'vor', role: 'plain', en: 'above all', hi: 'सबसे ज़्यादा', type: 'Adverbiale' },
      { w: 'allem', role: 'plain', en: '(Satzende, part of "vor allem")', hi: '', type: 'Pronomen (Satzende)' },
      { w: 'das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'unmittelbare', role: 'plain', en: 'immediate', hi: 'तत्काल', type: 'Adjective' },
      { w: 'Feedback', role: 'plain', en: 'feedback (Satzende)', hi: 'प्रतिक्रिया (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The research findings of a current meta-study suggest that digital learning methods are more effective under certain conditions than classic lecture-style teaching. Decisive in this regard, the study claims, is above all the immediate feedback.',
    comprehension: [
      { q: 'Welche Funktion hat "legen nahe"?', options: ['Vorsichtige, evidenzbasierte Interpretation', 'Eine absolute Tatsache', 'Eine persönliche Meinung ohne Beleg'], answer: 0 },
      { q: 'Warum steht "sei" im Konjunktiv I?', options: ['Es distanziert den Autor von der Behauptung der Studie', 'Es ist die einzig mögliche Form', 'Es handelt sich um wörtliche Rede'], answer: 0 },
      { q: 'Welche Textsorte prüft am ehesten diese Art von Sprache?', options: ['Akademischer Fachartikel', 'Forumsbeitrag', 'Persönliche Erzählung'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar (Teil 2 von 4)', titleEn: 'Reading B — Newspaper commentary (Part 2 of 4)',
    tokens: [
      { w: 'Zwar', role: 'r-gegensatz', en: 'admittedly (revision from Chapter 31/35, "zwar...allerdings")', hi: '(Ch31/35 se revision)', type: 'Adverb' },
      { w: 'bestehen', role: 'plain', en: 'exist', hi: 'hain', type: 'Verb (Präsens)' },
      { w: 'Vorteile', role: 'plain', en: 'advantages (Satzende)', hi: 'faayde (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'allerdings', role: 'r-gegensatz', en: 'however (Satzende, completes the revision "zwar...allerdings" pair)', hi: 'lekin (Satzende, "zwar...allerdings" ka doosra hissa)', type: 'Adverb (Satzende)' },
      { w: 'überwiegen', role: 'plain', en: 'outweigh (Satzende)', hi: 'zyaada hain (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'kamiyaan', type: 'Article' },
      { w: 'Nachteile', role: 'plain', en: 'disadvantages (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Admittedly there are advantages, however the disadvantages outweigh them.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_042_L001', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe wirklich Prüfungsangst, obwohl ich mich so intensiv vorbereitet habe.', en: 'Timo, I really have exam anxiety, even though I\'ve prepared so intensively.' },
      { id: 'C1_042_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das kenne ich gut. Weißt du eigentlich schon genau, wie die Bewertung abläuft?', en: 'I know that well. Do you actually already know exactly how the evaluation works?' },
      { id: 'C1_042_L003', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Nur ungefähr — kannst du mir erklären, worauf die Prüfer besonders achten?', en: 'Only roughly — can you explain to me what the examiners pay particular attention to?' },
      { id: 'C1_042_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, vor allem auf Kohärenz und einen angemessenen Wortschatz, nicht nur auf Grammatik.', en: 'Sure, above all coherence and appropriate vocabulary, not just grammar.' }
    ],
    transcript: 'Timo, ich habe wirklich Prüfungsangst, obwohl ich mich so intensiv vorbereitet habe. Das kenne ich gut. Weißt du eigentlich schon genau, wie die Bewertung abläuft? Nur ungefähr — kannst du mir erklären, worauf die Prüfer besonders achten? Klar, vor allem auf Kohärenz und einen angemessenen Wortschatz, nicht nur auf Grammatik.',
    translation: 'Timo, I really have exam anxiety, even though I\'ve prepared so intensively. I know that well. Do you actually already know exactly how the evaluation works? Only roughly — can you explain to me what the examiners pay particular attention to? Sure, above all coherence and appropriate vocabulary, not just grammar.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'wirklich' },
      { w: 'Prüfungsangst' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'so' },
      { w: 'intensiv' },
      { w: 'vorbereitet' },
      { w: 'habe' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'kenne' },
      { w: 'ich' },
      { w: 'gut' },
      { w: '.', plain: true },
      { w: 'Weißt' },
      { w: 'du' },
      { w: 'eigentlich' },
      { w: 'schon' },
      { w: 'genau' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'die' },
      { w: 'Bewertung' },
      { w: 'abläuft' },
      { w: '?', plain: true },
      { w: 'Nur' },
      { w: 'ungefähr' },
      { w: '—', plain: true },
      { w: 'kannst' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'erklären' },
      { w: ',', plain: true },
      { w: 'worauf' },
      { w: 'die' },
      { w: 'Prüfer' },
      { w: 'besonders' },
      { w: 'achten' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'vor' },
      { w: 'allem' },
      { w: 'auf' },
      { w: 'Kohärenz' },
      { w: 'und' },
      { w: 'einen' },
      { w: 'angemessenen' },
      { w: 'Wortschatz' },
      { w: ',', plain: true },
      { w: 'nicht' },
      { w: 'nur' },
      { w: 'auf' },
      { w: 'Grammatik' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Ines trotz ihrer Vorbereitung?', qEn: 'What does Ines have, despite her preparation?', options: ['keine Angst', 'Prüfungsangst', 'zu viel Selbstvertrauen', 'keine Motivation'], optionsEn: ['no fear', 'exam nerves', 'too much self-confidence', 'no motivation'], answer: 1,
        explain: '"Ich habe wirklich Prüfungsangst, obwohl ich mich so intensiv vorbereitet habe."' },
      { q: 'Worauf achten die Prüfer laut Timo besonders?', qEn: 'What do examiners pay particular attention to, according to Timo?', options: ['nur Grammatik', 'Kohärenz und angemessenen Wortschatz', 'die Aussprache allein', 'die Kleidung'], optionsEn: ['only grammar', 'coherence and appropriate vocabulary', 'the pronunciation alone', 'the clothes'], answer: 1,
        explain: '"Vor allem auf Kohärenz und einen angemessenen Wortschatz, nicht nur auf Grammatik."' }
    ]
  },
  speaking: [
    { task: "Probeprüfung, Teil 1: Präsentiere ein Thema aus deiner Vorbereitung.", taskEn: "Mock exam, Part 1: present a topic from your preparation.", de: "Ich spreche über meine Vorbereitung; abschließend nenne ich zwei Strategien gegen Prüfungsangst.", en: "I'll speak about my preparation; finally I'll name two strategies against exam nerves." },
    { task: "Teil 2: Dein Partner hat Prüfungsangst. Diskutiert, was wirklich hilft.", taskEn: "Part 2: your partner has exam nerves. Discuss what really helps.", de: "Ich kann deine Prüfungsangst gut nachvollziehen; eine feste Vorbereitung hilft mehr als lange Nächte.", en: "I can well understand your exam nerves; steady preparation helps more than long nights." },
    { task: "Teil 3: Die Prüferin fragt, ob du die Bewertung verstanden hast.", taskEn: "Part 3: the examiner asks whether you've understood the assessment.", de: "Ja, die Bewertung achtet vor allem auf Kohärenz und Wortschatz, nicht nur auf Grammatik.", en: "Yes, the assessment looks above all at coherence and vocabulary, not only grammar." },
    { task: "Rollenspiel: Ihr simuliert die vollständige Prüfung.", taskEn: "Role-play: you simulate the complete exam.", de: "Ich präsentiere zuerst, du stellst zwei Rückfragen, und abschließend besprechen wir die Bewertung.", en: "I'll present first, you ask two follow-up questions, and finally we'll discuss the assessment." }
  ],
  writing: {
    prompt: 'TASK A — Zusammenfassung (180-220 words): Summarize an academic text objectively, without personal opinion.\n\nTASK B — Choose ONE: Stellungnahme (350-400 words, using the position-evidence-counter-argument-evaluation-conclusion structure) OR Forumsbeitrag (350-400 words, semi-formal and interactive).\n\nTASK C — Grafikbeschreibung & Grafikauswertung (350-400 words): Analyze a statistical graphic using introduction, description, comparison, trend, hedged interpretation, and conclusion.',
    starters: ['Der vorliegende Text behandelt...', 'Meines Erachtens...', 'Die vorliegende Grafik zeigt...'],
    placeholder: 'Wähle eine Aufgabe (A, B oder C) und schreibe deine vollständige Antwort hier...',
    minWords: 180
  },
  exercises: {
    mcq: { q: 'Which writing genre requires you to distinguish observation from hedged interpretation?', options: ['Grafikbeschreibung', 'Zusammenfassung', 'Forumsbeitrag'], answer: 0, explain: 'A Grafikbeschreibung must separate what the data shows (certain) from why it might be so (hedged with Konjunktiv II).' },
    gap: { sentence: ['', ' lässt sich sagen: Wir sind bereit.'], gaps: [ { answer: 'Abschließend', accepts: ['Abschließend'] } ], explain: '"Abschließend" is the recurring C1 conclusion marker across multiple writing genres.' },
    match: { q: 'Match each writing genre to its defining requirement.', pairs: [ { noun: 'Zusammenfassung', art: 'Objective, no personal opinion' }, { noun: 'Stellungnahme', art: 'Judge-like balance, justified conclusion' }, { noun: 'Forumsbeitrag', art: 'Interactive, invites discussion' }, { noun: 'Grafikbeschreibung', art: 'Data-analyst thinking, hedged interpretation' } ] },
    builder: { target: 'Build: "In my view, we have practiced enough." (Stellungnahme opening, revision)', bank: ['Meines', 'Erachtens', 'haben', 'wir', 'genug', 'geübt', '.'], answer: ['Meines', 'Erachtens', 'haben', 'wir', 'genug', 'geübt', '.'], roles: { 'Meines': 'r-revision', 'Erachtens': 'r-revision' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Grafik zeigt Zahlen. Das ist alles gut.', right: 'Die vorliegende Grafik zeigt die Entwicklung der Studierendenzahlen. Im Vergleich zum Vorjahr steigt die Zahl kontinuierlich. Eine mögliche Erklärung wäre...', explain: 'A bare, vague statement with no data description, comparison, or hedged interpretation fails the Grafikbeschreibung standard established in Chapter 41.' }
  },
  quiz: [
    { q: 'What is the memory trick for this mock exam chapter?', options: ['You\'ve already learned everything — now simply demonstrate it', 'You need to learn everything new for this exam', 'Grammar accuracy matters more than genre structure'], answer: 0, explain: 'This is a pure revision and integration chapter — no new content.' },
    { q: 'Which genre requires a judge-like, balanced structure?', options: ['Stellungnahme', 'Forumsbeitrag', 'Zusammenfassung'], answer: 0, explain: 'A Stellungnahme weighs both sides like a judge before reaching a justified conclusion.' },
    { q: 'Which genre must explicitly invite further discussion?', options: ['Forumsbeitrag', 'Zusammenfassung', 'Grafikbeschreibung'], answer: 0, explain: 'A Forumsbeitrag closes with an engagement question or invitation, unlike the other genres.' },
    { q: 'What should a Zusammenfassung avoid?', options: ['Personal opinion', 'Objective language', 'Paraphrasing'], answer: 0, explain: 'A summary communicates the author\'s ideas, not the writer\'s opinion.' },
    { q: 'Why is time management emphasized in this mock exam?', options: ['A rushed final section costs more points than an imperfect earlier one', 'Time management is not actually important', 'Only the writing section has a time limit'], answer: 0, explain: 'Following a time-management guide across every module prevents losing points to an unfinished final task.' }
  ],
  takeaways: [
    { c: 'r-revision', html: 'This chapter recycles fixed phrases and structures from Chapters 31–41 — no new grammar or vocabulary, only integration and exam-readiness practice.' },
    { c: 'r-gegensatz', html: 'Adversative and concessive language (aber, zwar...allerdings) from Chapters 31/35 remains essential across every writing genre.' }
  ],
  revisionTips: [
    'Time yourself completing one full mock task (Lesen, Hören, Schreiben, or Sprechen) under realistic exam conditions.',
    'For each of the four writing genres (Zusammenfassung, Stellungnahme, Forumsbeitrag, Grafikbeschreibung), write down its one defining structural requirement from memory.',
    'Review your weakest section from the Performance Analytics, then revisit that specific chapter (31–41) before retaking this mock exam.'
  ]
};
window.CHAPTER = CHAPTER;
