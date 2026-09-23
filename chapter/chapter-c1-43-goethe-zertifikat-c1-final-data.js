/* KLARWEG CHAPTER DATA — C1 · Chapter 43 (FINAL)
   "Goethe-Zertifikat C1 Final" — complete mastery consolidation
   across Chapters 31-42. NO new grammar or vocabulary. Marks the
   entire C1 course 100% complete with a graduation/congratulations
   section and C2 transition guidance.
   Dialogue: Wenke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-43-goethe-zertifikat-c1-final',
  phase: 'C1 · Nominalstil & Präzision',
  number: 43,
  title: 'Goethe-Zertifikat C1 Final',
  titleEn: 'Complete C1 mastery & certification readiness',
  description: 'Imagine climbing a mountain. Every previous chapter was one step higher. This final chapter is not about climbing further — it is about standing on the summit and looking back at everything you have mastered. You are no longer learning C1. You are demonstrating C1.',
  xp: 1100, time: 160, difficulty: 'Advanced',
  isRevision: true,
  isFinalChapter: true,
  courseComplete: true,
  nextChapter: { number: 1, title: 'Zeitformen der Verben', titleEn: 'Verb tenses at native level', href: 'chapter-c2-01-zeitformen-der-verben.html' },
  prevChapter: { number: 42, title: 'Goethe-Zertifikat C1 Probeprüfung', titleEn: 'Goethe-Zertifikat C1 mock examination', href: 'chapter-c1-42-goethe-zertifikat-c1-probepruefung.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'You are no longer <em>learning</em> C1. You are <em>demonstrating</em> C1.',
    intro: 'Wenke and Timo have just finished the Goethe-Zertifikat C1 exam — she\'s achieved her certification, and they reflect on the road to C2 ahead, proud of the shared journey that got them here.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'A complete final review integrating every skill from Chapters 31–42, plus a graduation and C2 transition guide'],
    scene: 'Nach der Goethe-Zertifikat C1 Prüfung: Rückblick und Zukunftspläne',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zertifizierung', role: 'r-akkusativ', en: 'certification', hi: 'प्रमाणीकरण', pron: 'tser-ti-fi-TSEE-rung', type: 'Noun · fem.', why: 'die Zertifizierung (this chapter).', ex: 'die Zertifizierung erreichen' },
        { w: 'endlich', role: 'r-akkusativ', en: 'finally', hi: 'आख़िरकार', pron: 'ENT-likh', type: 'Adverb' },
        { w: 'erreicht', role: 'r-verb', en: 'achieved', hi: 'हासिल', pron: 'er-RYKHT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I have finally achieved the certification.', hi: 'Maine aakhirkaar pramaanikaran haasil kar liya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Herzlichen', role: 'r-akkusativ', en: 'warm', hi: 'दिल से', pron: 'HERTS-li-khen', type: 'Adjective (feste Wendung)' },
        { w: 'Glückwunsch', role: 'r-akkusativ', en: 'congratulations', hi: 'मुबारक', pron: 'GLÜK-vunsh', type: 'Noun · masc. (recycled A2)' },
        { w: '!', plain: true },
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'akademische', role: 'r-akkusativ', en: 'academic', hi: 'शैक्षणिक', pron: 'a-ka-DAY-mi-shuh', type: 'Adjective', why: 'akademischer Deutschsprecher = academic German speaker, a level descriptor (this chapter).', ex: 'eine akademische Deutschsprecherin' },
        { w: 'Deutschsprecherin', role: 'r-akkusativ', en: 'German speaker (f)', hi: 'जर्मन भाषी', pron: 'DOYTSH-shpre-khe-rin', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Congratulations! You are now an academic German speaker.', hi: 'Dil se mubaarak! Tum ab ek shaikshanik German bhaashi ho.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Übergang', role: 'r-subject', en: 'transition', hi: 'संक्रमण', pron: 'Ü-ber-gank', type: 'Noun · masc.', why: 'der Übergang (this chapter).', ex: 'der Übergang zu C2' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'की ओर', pron: 'tsoo', type: 'Preposition + dative' },
        { w: 'C2', role: 'r-dativ', en: 'C2 (dat.)', hi: 'सी2', pron: 'tsay-tsvy', type: 'Level name' },
        { w: 'wird', role: 'r-verb', en: 'will', hi: 'होगी', pron: 'virt', type: 'Verb · werden' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'spannend', role: 'r-akkusativ', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The transition to C2 will surely be exciting.', hi: 'C2 ki or sankraman zaroor romaanchak hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Lebenslanges', role: 'r-akkusativ', en: 'lifelong', hi: 'जीवनभर', pron: 'LAY-benz-lan-ges', type: 'Adjective (feste Wendung)', why: 'lebenslanges Lernen = lifelong learning, a fixed compound phrase (this chapter).', ex: 'lebenslanges Lernen' },
        { w: 'Lernen', role: 'r-akkusativ', en: 'learning', hi: 'सीखना', pron: 'LAIR-nen', type: 'Noun · neut. (nominalisierter Infinitiv)' },
        { w: 'gehört', role: 'r-verb', en: 'belongs', hi: 'शामिल है', pron: 'ge-HÖRT', type: 'Verb · gehören' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'में', pron: 'tsoo', type: 'Preposition + dative' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc. dat.)', hi: 'हमारे', pron: 'UN-ze-raym', type: 'Possessive · dative' },
        { w: 'Weg', role: 'r-dativ', en: 'path (dat.)', hi: 'रास्ते में', pron: 'vayk', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Exactly. Lifelong learning belongs to our path.', hi: 'Bilkul. Jeevanbhar seekhna hamaare raaste ka hissa hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'stolz', role: 'r-akkusativ', en: 'proud', hi: 'गर्वित', pron: 'shtolts', type: 'Adjective' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'gemeinsame', role: 'r-akkusativ', en: 'shared', hi: 'साझा', pron: 'ge-MYN-za-muh', type: 'Adjective' },
        { w: 'Reise', role: 'r-akkusativ', en: 'journey', hi: 'यात्रा', pron: 'RY-zuh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I am proud of our shared journey.', hi: 'Mujhe hamaari saajha yatra par garv hai.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'You are no longer <span class="de r-mastery">learning</span> C1. You are <span class="de r-mastery">demonstrating</span> C1. This is the summit, not another step.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. This is the FINAL chapter of the entire Klarweg C1 course — GOETHE-ZERTIFIKAT C1 FINAL — a complete mastery consolidation across Chapters 31-42 (adversative language and concession, cohesion, register mastery, collocations, Zusammenfassung, Stellungnahme, Forumsbeitrag, Grafikbeschreibung, and the full mock exam). NO new grammar or vocabulary. Evaluate the learner\'s writing against the full cumulative standard of the course: correct register for the task genre, natural collocations (not literal translations), varied cohesive devices (not repetitive connectors), the correct structure for whichever of the four writing genres the text represents (Zusammenfassung: objective/no opinion; Stellungnahme: position-evidence-counter-argument-evaluation-conclusion; Forumsbeitrag: semi-formal/interactive/engagement question; Grafikbeschreibung: introduction-description-comparison-trend-hedged interpretation-conclusion), and overall C1-level fluency and precision. The most important things to catch, reflecting the course\'s cumulative common-mistake list: literal translation from English; incorrect register for the task; weak or missing argumentation structure; poor cohesion (repetitive connectors, unclear references); unnatural/calqued collocations; summaries that include personal opinion; incomplete graph interpretation (unhedged claims stated as fact); unsupported opinions with no evidence. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Identify the genre first, then apply that genre\'s specific checklist. Flag genuine register mismatches, collocation errors, missing genre structure, and unhedged interpretation. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence, naming the genre detected.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>C1 mastery check:</b> one sentence confirming whether this reads like genuine, confident C1 German — the standard for someone who has completed this entire course.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you have demonstrated genuine, confident C1 mastery across the entire course. Congratulations, and welcome to C2!', mid: 'Good. Revisit the Master Table for your weakest genre once more, then retake this final assessment.', low: 'Worth a full pass through Chapters 31–42 before attempting this final assessment again — you are very close to the summit.' },
  parserSentence: [ { w: 'Wir', role: 'plain' }, { w: 'sind', role: 'plain' }, { w: 'jetzt', role: 'r-mastery' }, { w: 'C1-Sprecher', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: you are no longer learning C1 — you are demonstrating it.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Wenke and Timo reflect on their completed C1 exam and their next chapter in Germany.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Final revision of key expressions from Chapters 31–42 — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Comprehensive final revision of every C1 structure, genre, and register from the course — no new content.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Complete four integrated revision readings: academic article, scientific report, editorial, professional communication.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Complete four authentic listening revisions: lecture, expert interview, professional meeting, public discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Complete the full Goethe C1 speaking simulation: presentation, partner discussion, follow-up interview.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Complete all four writing genres one final time: Zusammenfassung, Forumsbeitrag, Stellungnahme, Grafikbeschreibung.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete the final comprehensive mastery test across every C1 skill.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions covering the entire C1 course. Pass to bank the full 1100 XP and complete the course.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Your final C1 mastery dashboard, graduation message, and C2 transition guidance.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download the complete final revision resources for lifelong reference.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'The complete revision vocabulary from Chapters 31–42 with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'The complete final mastery test battery: reading, listening, writing, and speaking, with model answers.', pdfUrl: '/pdfs/homework.pdf', size: '24 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The Ultimate C1 Reference Sheet — every Master Table, Model, and Decision Flowchart from the whole course.', pdfUrl: '/pdfs/grammar.pdf', size: '20 pages', kind: 'Grammar' },
    { icon: '🎓', title: 'C1 Mastery Certificate', desc: 'Your Klarweg C1 completion certificate and personalized C2 transition roadmap.', pdfUrl: '/pdfs/certificate.pdf', size: '2 pages', kind: 'Certificate' }
  ],
  outcomes: [
    { de: 'Wir haben es geschafft! Abschließend lässt sich sagen: Wir sind jetzt C1-Sprecher.', text: 'Use the recurring conclusion marker to close the entire C1 journey' },
    { de: 'Meines Erachtens war die Grafikbeschreibung am einfachsten.', text: 'Revise the Stellungnahme opening phrase one final time' },
    { de: 'Für mich war die Stellungnahme schwieriger, aber ich habe die Struktur genutzt.', text: 'Revise adversative connectors and genre-specific structure together' },
    { de: 'Wir sind nicht mehr nur Lernende — wir sind jetzt akademische Deutschsprecher.', text: 'Recognize a substantivized participle (Lernende) revised from Chapter 25' },
    { de: 'Und bald beginnt unser nächstes Kapitel in Deutschland.', text: 'Look ahead to using C1 German in real academic and professional life' }
  ],
  vocab: [
    { de: 'die Mastery', pos: 'noun (informal borrowing, used in course context)', level: 'C1', register: 'informal', en: 'mastery', hi: 'निपुणता', ex: 'Diese Prüfung zeigt echte sprachliche Mastery.', exEn: 'This exam shows genuine linguistic mastery.', exHi: 'Yeh pareeksha asli bhaashaayi nipunata dikhaati hai.', ex2: 'C1-Mastery bedeutet, komplexe Texte mühelos zu verstehen.', ex2En: 'C1 mastery means understanding complex texts effortlessly.', ex2Hi: 'C1 nipunata ka matlab hai jatil texts ko bina mehnat samjhna.' },
    { de: 'die Zertifizierung', art: 'die', gender: 'f', plural: 'Zertifizierungen', pos: 'noun', level: 'C1', register: 'formal', en: 'certification', hi: 'प्रमाणन', ex: 'Die Zertifizierung bestätigt das Sprachniveau offiziell.', exEn: 'The certification officially confirms the language level.', exHi: 'Pramanan aadhikaarik roop se bhaasha star ki pushti karta hai.', ex2: 'Nach der Zertifizierung kann man sich an Universitäten bewerben.', ex2En: 'After certification, one can apply to universities.', ex2Hi: 'Pramanan ke baad, universities mein apply kiya jaa sakta hai.' },
    { de: 'akademischer Deutschsprecher', pos: 'fixed noun phrase (substantivized adjective + compound)', level: 'C1', register: 'both', en: 'academic German speaker', hi: 'शैक्षणिक जर्मन बोलने वाला', ex: 'Wir sind jetzt akademische Deutschsprecher.', exEn: 'We are now academic German speakers.', exHi: 'Hum ab academic German bolne waale hain.', ex2: 'Als akademischer Deutschsprecher kann man Vorlesungen problemlos folgen.', ex2En: 'As an academic German speaker, one can follow lectures without problems.', ex2Hi: 'Ek academic German bolne waale ke roop mein, lectures ko bina samasya follow kiya jaa sakta hai.' },
    { de: 'der Übergang', art: 'der', gender: 'm', plural: 'Übergänge', pos: 'noun', level: 'C1', register: 'written', en: 'transition', hi: 'संक्रमण', ex: 'Der Übergang von C1 zu C2 erfordert weiteres Üben.', exEn: 'The transition from C1 to C2 requires further practice.', exHi: 'C1 se C2 tak ka sankraman aur practice ki maang karta hai.', ex2: 'Dieser Übergang markiert einen wichtigen Meilenstein.', ex2En: 'This transition marks an important milestone.', ex2Hi: 'Yeh sankraman ek mahatvapoorn meel ka patthar hai.' },
    { de: 'lebenslanges Lernen', pos: 'fixed noun phrase', level: 'C1', register: 'written', en: 'lifelong learning', hi: 'आजीवन सीखना', ex: 'Sprachenlernen ist ein Beispiel für lebenslanges Lernen.', exEn: 'Language learning is an example of lifelong learning.', exHi: 'Bhaasha seekhna aajeevan seekhne ka ek udhaaran hai.', ex2: 'Lebenslanges Lernen hält den Geist beweglich.', ex2En: 'Lifelong learning keeps the mind agile.', ex2Hi: 'Aajeevan seekhna dimaag ko chust rakhta hai.' }
  ],
  grammar: [
    { title: 'Der C1-Meisterschaftsweg (The C1 Mastery Journey)', body: [ 'Foundation → Expansion → Integration → Exam Simulation → Reflection → Mastery → Certification Ready. This final chapter marks the completion of that entire journey.' ], hinglish: 'Yeh C1 ka aakhri chapter hai, aur isme naya grammar nahi aata \u2014 sirf sab kuch ek saath aata hai. Isliye ise padhne ka tareeka thoda alag hai: neeche wali aath galtiyan dekho, aur jahan bhi sochna pade, wahan us chapter par wapas jao jo explanation mein diya hai.' },
    { title: 'Revision: Die vier Schreibgenres (The Four Writing Genres, final pass)', body: [ 'Zusammenfassung (objective, no opinion), Stellungnahme (judge-like balance, justified conclusion), Forumsbeitrag (interactive, invites discussion), Grafikbeschreibung (data-analyst thinking, hedged interpretation) — review each one final time.' ], hinglish: 'Chaar genres, aur har ek ki woh cheez jo sabse zyada chhoot-ti hai. <b>Zusammenfassung</b>: poori Pr\u00e4sens mein, koi raay nahi, aur author ke hedge (<i>m\u00f6glicherweise</i>) waise hi rakho. <b>Stellungnahme</b>: counter-argument aur evaluation dono chahiye, aur opening phrase ke saath <b>dass</b> lagega ya nahi \u2014 yeh check karo. <b>Forumsbeitrag</b>: ant mein ek sawaal, aur poore post mein ek hi address form. <b>Grafikbeschreibung</b>: pehle description, phir interpretation \u2014 aur cause hamesha hedge ke saath.' },
    { title: 'Revision: Register, Kohäsion & Kollokationen', body: [ 'Six style levels and formal/informal pairs (Chapter 36); reference words and lexical cohesion (Chapter 32); verb+noun/adjective+noun collocations and near-synonym precision (Chapter 37).' ], hinglish: 'Teen cheezein ek saath. <b>Register</b> chaar features se banta hai aur chaaron poore text mein ek jaisi rehni chahiye \u2014 address, vocabulary, passive ya \u201cwir\u201d, aur connectors. <b>Kohäsion</b> mein do baatein: marker position 1 par ho to verb doosri jagah par, aur <b>dies</b> noun ko refer karta hai jabki <b>was</b> poori baat ko. Aur <b>Kollokationen</b> mein teen verbs se bacho \u2014 <i>machen</i>, <i>nehmen</i>, <i>sehen</i>.' },
    { title: 'Häufige Fehler aus dem gesamten Kurs (Common Mistakes Across the Whole Course)', body: [ 'The eight errors that most often cost C1 candidates points, each shown as the sentence a candidate actually writes. If any of these still needs thinking about, the chapter reference in the explanation tells you where to go.' ], mistakes: [
      { wrong: 'Die Regierung hat eine Entscheidung gemacht und Ma\u00dfnahmen genommen.', right: 'Die Regierung hat eine Entscheidung getroffen und Ma\u00dfnahmen ergriffen.', why: 'Ch.27 & 37: fixed support verbs \u2014 <b>Entscheidung treffen</b>, <b>Ma\u00dfnahmen ergreifen</b>. <i>machen</i> and <i>nehmen</i> are the two verbs to distrust.' },
      { wrong: 'Sehr geehrte Frau M\u00fcller, ich wollte dir kurz Bescheid geben.', right: 'Sehr geehrte Frau M\u00fcller, ich m\u00f6chte Sie kurz informieren.', why: 'Ch.36: a formal salutation commits you to <b>Sie</b> and formal vocabulary to the end \u2014 <i>dir</i> and <i>Bescheid geben</i> break both at once.' },
      { wrong: 'Meines Erachtens, dass die Regelung sinnvoll ist.', right: 'Meines Erachtens ist die Regelung sinnvoll. / Ich bin der Auffassung, dass die Regelung sinnvoll ist.', why: 'Ch.39: adverbial openings take position 1 and verb-second. Only noun-based phrases (<i>Auffassung</i>, <i>Ansicht</i>, <i>Meinung</i>) take <b>dass</b>.' },
      { wrong: 'Dar\u00fcber hinaus die Studie zeigt weitere Effekte.', right: 'Dar\u00fcber hinaus zeigt die Studie weitere Effekte.', why: 'Ch.32: a discourse marker in position 1 pushes the verb to position 2 \u2014 and no comma follows the marker.' },
      { wrong: 'Obwohl die Daten begrenzt sind, trotzdem sind die Befunde klar.', right: 'Obwohl die Daten begrenzt sind, sind die Befunde klar.', why: 'Ch.31 & 35: <b>obwohl</b> already carries the concession \u2014 adding <b>trotzdem</b> marks the same relationship twice.' },
      { wrong: 'Der Autor sagt, dass die Methode m\u00f6glicherweise wirksam ist. Die Methode ist wirksam.', right: 'Der Autor sagt, dass die Methode m\u00f6glicherweise wirksam sei.', why: 'Ch.38: never delete the author\u2019s hedge \u2014 <i>m\u00f6glicherweise</i> is part of the claim. Konjunktiv I keeps it attributed to him.' },
      { wrong: 'Der Anstieg ist eindeutig auf die Preise zur\u00fcckzuf\u00fchren.', right: 'Eine m\u00f6gliche Erkl\u00e4rung w\u00e4re, dass die Preise gestiegen sind.', why: 'Ch.41: a graphic shows WHAT changed, never WHY \u2014 so every cause has to be hedged.' },
      { wrong: 'Der Anteil betr\u00e4gt bei 45 Prozent, doppelt so hoch als 2020.', right: 'Der Anteil betr\u00e4gt 45 Prozent \u2014 doppelt so hoch wie 2020.', why: 'Ch.41: <b>betragen</b> takes the figure directly (only <i>liegen</i> takes <b>bei</b>), and equality comparisons take <b>wie</b>, never <i>als</i>.' }
    ], hinglish: 'Yeh poore course ki sabse common mistakes ka final consolidated review hai.' },
    { title: 'Finale Kompetenzskala (Final Competency Scale)', body: [ 'Developing → Independent User → Strong C1 → Exam Ready → Confident Candidate → Native-like Academic User. This chapter marks the top of that scale.' ], hinglish: 'Ek imaandaar check \u2014 sirf yeh mat dekho ki sab padh liya, balki yeh ki kaun sa hissa <b>bina soche</b> aa raha hai. Jo cheez abhi bhi rok kar sochni padti hai, wahi tumhara asli revision plan hai.' },
    { title: 'Finaler Entscheidungsbaum (Final Decision Flowchart)', body: [ 'Encounter a task → identify task type → choose appropriate register → organize ideas → use authentic vocabulary → apply C1 structures → review → submit confidently.' ], note: 'Final memory trick: imagine climbing a mountain. Every chapter was one step higher. This chapter is not about climbing further — it is about standing on the summit and looking back at everything you have mastered.', hinglish: 'Exam mein har task par yahi order chalao \u2014 pehle genre pehchaano, phir register tay karo, ideas ka dhaancha banao, phir likho. Aur likhne ke baad teen cheezein check karo: opening phrase ke saath <b>dass</b> sahi hai, poore text mein register ek jaisa raha, aur koi bhi cause hedge ke saath likha gaya hai.' }
  ],
  reading: {
    title: 'Fachartikel: Stadtgrün und mentale Gesundheit',
    titleEn: 'Reading A — Journal article: urban green spaces and mental health',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'vorliegenden', role: 'r-hedging', en: 'present (part of "die vorliegenden Ergebnisse", hedged reference to this study)', hi: '', type: 'Adjective · Nom.' },
      { w: 'Ergebnisse', role: 'plain', en: 'results (Satzende)', hi: 'नतीजे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'एक', type: 'Article · Gen.' },
      { w: 'zehnjährigen', role: 'plain', en: 'ten-year (Satzende)', hi: 'दस वर्षीय (Satzende)', type: 'Adjective · Gen.' },
      { w: 'Kohortenstudie', role: 'plain', en: 'cohort study (Satzende)', hi: 'समूह अध्ययन (Satzende)', type: 'Noun · fem.' },
      { w: 'legen', role: 'r-hedging', en: 'suggest (part of "legen nahe", hedged interpretation phrase)', hi: '', type: 'Verb (Präsens)' },
      { w: 'nahe', role: 'r-hedging', en: '(Satzende, hedged interpretation phrase)', hi: 'संकेत देते हैं (Satzende, hedged phrase)', type: 'Adjective (Satzende)', why: '"Legen nahe" hedges the claim as a careful interpretation of evidence, not an absolute fact (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'regelmäßiger', role: 'plain', en: 'regular', hi: 'नियमित', type: 'Adjective · Nom.' },
      { w: 'Zugang', role: 'plain', en: 'access', hi: 'पहुँच', type: 'Noun · masc.' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'तक', type: 'Preposition · Dat.' },
      { w: 'Grünflächen', role: 'plain', en: 'green spaces (Satzende)', hi: 'हरित क्षेत्रों (Satzende)', type: 'Noun · plural' },
      { w: 'das', role: 'plain', en: 'the (neut. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Risiko', role: 'plain', en: 'risk', hi: 'ख़तरा', type: 'Noun · neut.' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'stressbedingte', role: 'plain', en: 'stress-related', hi: 'तनाव-संबंधी', type: 'Adjective · Akk.' },
      { w: 'Erkrankungen', role: 'plain', en: 'illnesses (Satzende)', hi: 'बीमारियों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'spürbar', role: 'plain', en: 'noticeably', hi: 'महसूस होने लायक़', type: 'Adjective' },
      { w: 'senkt', role: 'plain', en: 'lowers (Satzende)', hi: 'कम करती है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Besonders', role: 'plain', en: 'especially', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'ausgeprägt', role: 'plain', en: 'pronounced (Satzende)', hi: 'स्पष्ट (Satzende)', type: 'Adjective' },
      { w: 'sei', role: 'r-konji', en: 'is (Konjunktiv I, reporting the study\'s own claim)', hi: '(Konjunktiv I)', type: 'Verb · sein (Konjunktiv I)', why: 'Konjunktiv I marks this as the study\'s own reported conclusion, not the author\'s personal claim (this chapter).' },
      { w: 'dieser', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Effekt', role: 'plain', en: 'effect (Satzende)', hi: 'प्रभाव (Satzende)', type: 'Noun · masc.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'dicht', role: 'plain', en: 'densely', hi: 'घनी', type: 'Adverb' },
      { w: 'besiedelten', role: 'plain', en: 'populated (Satzende)', hi: 'बसी हुई (Satzende)', type: 'Partizip II · Dat.' },
      { w: 'Stadtteilen', role: 'plain', en: 'city districts (Satzende)', hi: 'शहर के इलाक़ों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The present results of a ten-year cohort study suggest that regular access to green spaces noticeably lowers the risk of stress-related illnesses. This effect, the study claims, is especially pronounced in densely populated city districts.',
    comprehension: [
      { q: 'Welche Funktion hat "die vorliegenden Ergebnisse legen nahe"?', options: ['Vorsichtige, evidenzbasierte Interpretation', 'Eine absolute Tatsache', 'Eine persönliche Meinung'], answer: 0 },
      { q: 'Warum steht "sei" im Konjunktiv I?', options: ['Es kennzeichnet die berichtete Aussage der Studie, nicht die des Autors', 'Es ist die einzig mögliche Form', 'Es handelt sich um wörtliche Rede'], answer: 0 },
      { q: 'Welches Thema behandelt dieser Text?', options: ['Stadtgrün und mentale Gesundheit', 'Ein Forumsbeitrag über Reisen', 'Ein informelles Gespräch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Berufliche Kommunikation (Finale Revision, Teil 2 von 4)', titleEn: 'Reading B — Professional communication (final revision, Part 2 of 4)',
    tokens: [
      { w: 'Nach', role: 'r-mastery', en: 'after (part of "nach Abwägung beider Seiten", revised from Chapter 39)', hi: '(Ch39 se revised)', type: 'Präposition · Dat.' },
      { w: 'Abwägung', role: 'r-mastery', en: 'weighing (part of fixed evaluation phrase)', hi: '(fixed evaluation phrase)', type: 'Noun · fem. · Dat.' },
      { w: 'beider', role: 'r-mastery', en: 'both (part of fixed phrase)', hi: 'dono (fixed phrase)', type: 'Pronomen · Gen.' },
      { w: 'Seiten', role: 'r-mastery', en: 'sides (Satzende, "nach Abwägung beider Seiten")', hi: 'paksh (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'empfehlen', role: 'plain', en: 'recommend (Satzende)', hi: 'sujhaav dete hain (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'hum', type: 'Pronomen · Nom.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Umsetzung', role: 'plain', en: 'implementation (Satzende)', hi: 'karyaanvayan (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'plan ka', type: 'Article · Gen.' },
      { w: 'Plans', role: 'plain', en: 'plan (Satzende)', hi: '(Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'After weighing both sides, we recommend the implementation of the plan.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_043_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wenke, du hast es geschafft — herzlichen Glückwunsch zu deinem C1-Zertifikat!', en: 'Wenke, you did it — congratulations on your C1 certificate!' },
      { id: 'C1_043_L002', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke, ich kann es kaum glauben — der ganze Weg hierher war wirklich nicht leicht.', en: 'Thanks, I can hardly believe it — the whole road here really wasn\'t easy.' },
      { id: 'C1_043_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und jetzt steht C2 vor uns — traust du dir das schon zu?', en: 'And now C2 lies ahead of us — do you already feel ready for that?' },
      { id: 'C1_043_L004', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich gesagt, nach dieser Prüfung traue ich mir inzwischen einiges zu.', en: 'Honestly, after this exam I now feel ready for quite a lot.' }
    ],
    transcript: 'Wenke, du hast es geschafft — herzlichen Glückwunsch zu deinem C1-Zertifikat! Danke, ich kann es kaum glauben — der ganze Weg hierher war wirklich nicht leicht. Und jetzt steht C2 vor uns — traust du dir das schon zu? Ehrlich gesagt, nach dieser Prüfung traue ich mir inzwischen einiges zu.',
    translation: 'Wenke, you did it — congratulations on your C1 certificate! Thanks, I can hardly believe it — the whole road here really wasn\'t easy. And now C2 lies ahead of us — do you already feel ready for that? Honestly, after this exam I now feel ready for quite a lot.',
    tokens: [
      { w: 'Wenke' },
      { w: ',', plain: true },
      { w: 'du' },
      { w: 'hast' },
      { w: 'es' },
      { w: 'geschafft' },
      { w: '—', plain: true },
      { w: 'herzlichen' },
      { w: 'Glückwunsch' },
      { w: 'zu' },
      { w: 'deinem' },
      { w: 'C1', plain: true, noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Zertifikat' },
      { w: '!', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'kann' },
      { w: 'es' },
      { w: 'kaum' },
      { w: 'glauben' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'ganze' },
      { w: 'Weg' },
      { w: 'hierher' },
      { w: 'war' },
      { w: 'wirklich' },
      { w: 'nicht' },
      { w: 'leicht' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'jetzt' },
      { w: 'steht' },
      { w: 'C2', plain: true },
      { w: 'vor' },
      { w: 'uns' },
      { w: '—', plain: true },
      { w: 'traust' },
      { w: 'du' },
      { w: 'dir' },
      { w: 'das' },
      { w: 'schon' },
      { w: 'zu' },
      { w: '?', plain: true },
      { w: 'Ehrlich' },
      { w: 'gesagt' },
      { w: ',', plain: true },
      { w: 'nach' },
      { w: 'dieser' },
      { w: 'Prüfung' },
      { w: 'traue' },
      { w: 'ich' },
      { w: 'mir' },
      { w: 'inzwischen' },
      { w: 'einiges' },
      { w: 'zu' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Wenke gerade geschafft?', qEn: 'What has Wenke just achieved?', options: ['das C1-Zertifikat', 'das B2-Zertifikat', 'einen neuen Job', 'ein Stipendium'], optionsEn: ['the C1 certificate', 'the B2 certificate', 'a new job', 'a scholarship'], answer: 0,
        explain: '"Herzlichen Glückwunsch zu deinem C1-Zertifikat!"' },
      { q: 'Welches Niveau liegt vor ihnen?', qEn: 'What level lies ahead of them?', options: ['B2', 'C1', 'C2', 'kein weiteres Level'], optionsEn: ['B2', 'C1', 'C2', 'no further level'], answer: 2,
        explain: '"Und jetzt steht C2 vor uns."' }
    ]
  },
  speaking: [
    { task: "Wenke hat das C1-Zertifikat geschafft. Gratuliere ihr.", taskEn: "Wenke has passed her C1 certificate. Congratulate her.", de: "Herzlichen Glückwunsch zur Zertifizierung! Der Weg war wirklich nicht leicht.", en: "Congratulations on the certification! The path really wasn't easy." },
    { task: "Prüfung: Die Prüferin fragt, was sich in diesem Jahr verändert hat.", taskEn: "Exam: the examiner asks what has changed this year.", de: "Ich formuliere heute deutlich präziser und wechsle das Register bewusst.", en: "Today I phrase things far more precisely and switch register deliberately." },
    { task: "Prüfung: Deine Partnerin fragt, wie es nach dem Zertifikat weitergeht.", taskEn: "Exam: your partner asks what comes after the certificate.", de: "Für mich bedeutet Sprache lebenslanges Lernen, nicht ein Zertifikat.", en: "For me language means lifelong learning, not a certificate." },
    { task: "Prüfung: Simuliert das vollständige Prüfungsgespräch.", taskEn: "Exam: simulate the complete exam conversation.", de: "Ich präsentiere zuerst, du übernimmst die Gegenposition, dann fassen wir zusammen.", en: "I'll present first, you take the opposing view, then we'll summarise." }
  ],
  writing: {
    prompt: 'Complete all four writing genres one final time, each 250-300 words:\n\nTASK 1 — Zusammenfassung: summarize an academic text objectively.\n\nTASK 2 — Forumsbeitrag: respond to a discussion prompt semi-formally, inviting further discussion.\n\nTASK 3 — Stellungnahme: present a balanced, evidence-based opinion with a justified conclusion.\n\nTASK 4 — Grafikbeschreibung & Grafikauswertung: analyze a statistical graphic with hedged interpretation.',
    starters: ['Der vorliegende Text behandelt...', 'Meines Erachtens...', 'Hallo zusammen, ich persönlich denke...', 'Die vorliegende Grafik zeigt...'],
    placeholder: 'Wähle eine der vier Aufgaben und schreibe deine vollständige, finale Antwort hier...',
    minWords: 200
  },
  exercises: {
    mcq: { q: 'Which genre requires you to distinguish observation from hedged interpretation?', options: ['Grafikbeschreibung', 'Zusammenfassung', 'Forumsbeitrag'], answer: 0, explain: 'A Grafikbeschreibung must separate certain data description from cautious, Konjunktiv-II-hedged explanation.' },
    gap: { sentence: ['', ' lässt sich sagen: Wir sind jetzt C1-Sprecher.'], gaps: [ { answer: 'Abschließend', accepts: ['Abschließend'] } ], explain: '"Abschließend" fittingly closes the entire C1 course, having recurred across multiple writing genres.' },
    match: { q: 'Match each genre to its defining requirement (final review).', pairs: [ { noun: 'Zusammenfassung', art: 'Objective, no personal opinion' }, { noun: 'Stellungnahme', art: 'Judge-like balance, justified conclusion' }, { noun: 'Forumsbeitrag', art: 'Interactive, invites discussion' }, { noun: 'Grafikbeschreibung', art: 'Data-analyst thinking, hedged interpretation' } ] },
    builder: { target: 'Build: "We are now academic German speakers." (final course statement)', bank: ['Wir', 'sind', 'jetzt', 'akademische', 'Deutschsprecher', '.'], answer: ['Wir', 'sind', 'jetzt', 'akademische', 'Deutschsprecher', '.'], roles: { 'jetzt': 'r-mastery' } },
    errorCorrection: { title: 'Error correction (final course review)', wrong: 'Ich denke die Prüfung war gut. Ende.', right: 'Meines Erachtens verlief die Prüfung gut, da ich die Struktur jeder Aufgabe konsequent genutzt habe. Abschließend lässt sich feststellen, dass sich die Vorbereitung gelohnt hat.', explain: 'A bare, unstructured statement fails the cumulative C1 standard: formal opening, supporting reasoning, and a proper concluding phrase are all expected.' }
  },
  quiz: [
    { q: 'What is the final memory trick of the entire C1 course?', options: ['You are no longer learning C1 — you are demonstrating it', 'There is always more grammar to learn before you are ready', 'C1 mastery means memorizing every rule perfectly'], answer: 0, explain: 'This chapter marks the summit of the mountain climbed since Chapter 31 — mastery, not further learning.' },
    { q: 'Which genre requires a judge-like, balanced structure?', options: ['Stellungnahme', 'Forumsbeitrag', 'Zusammenfassung'], answer: 0, explain: 'A Stellungnahme weighs both sides like a judge before reaching a justified conclusion.' },
    { q: 'Which genre must explicitly invite further discussion?', options: ['Forumsbeitrag', 'Zusammenfassung', 'Grafikbeschreibung'], answer: 0, explain: 'A Forumsbeitrag closes with an engagement question or invitation, unlike the other genres.' },
    { q: 'What is one of the most common mistakes across the entire C1 course?', options: ['Literal translation from English', 'Using too many collocations', 'Writing too objectively in a summary'], answer: 0, explain: 'Literal translation is the single most common source of unnatural German at this level.' },
    { q: 'What comes after completing this final chapter?', options: ['Transition to C2 and real academic/professional use of German', 'Repeating Chapter 31 again', 'The course has no further direction'], answer: 0, explain: 'This chapter marks 100% course completion and includes guidance for the transition to C2.' }
  ],
  takeaways: [
    { c: 'r-mastery', html: 'Every core phrase revised in this final chapter (meines Erachtens, abschließend lässt sich sagen, nach Abwägung beider Seiten, legen nahe) has recurred across the whole C1 course — proof that a small set of authentic structures carries you through every genre.' }
  ],
  revisionTips: [
    'Write a one-page personal "C1 cheat sheet" listing your single favorite fixed phrase from each of the four writing genres.',
    'Reflect on which of the four genres (Zusammenfassung, Stellungnahme, Forumsbeitrag, Grafikbeschreibung) felt hardest for you, and revisit that specific chapter once more.',
    'Begin transitioning to authentic C1/C2 German media — read one academic article, listen to one German podcast, and write one short reflection weekly.'
  ],
  graduation: {
    title: 'Herzlichen Glückwunsch! Congratulations!',
    body: 'You have completed the entire Klarweg C1 course — every chapter from foundational grammar through advanced academic writing, argumentation, and the full Goethe-Zertifikat C1 mock examination.',
    skillsMastered: [
      'Advanced modal verbs, epistemic modality, and Konjunktiv I/II across all registers',
      'Complex nominal groups, participial attributes, and formal nominalization',
      'Adversative language, concession, and balanced academic argumentation',
      'Text cohesion, register mastery, and precise collocational vocabulary',
      'All four Goethe C1 writing genres: Zusammenfassung, Stellungnahme, Forumsbeitrag, Grafikbeschreibung',
      'A complete simulated Goethe-Zertifikat C1 examination across Lesen, Hören, Schreiben, and Sprechen'
    ],
    nextSteps: [
      'Begin the Klarweg C2 course to reach the highest level of German proficiency',
      'Register for the official Goethe-Zertifikat C1 examination with confidence',
      'Immerse yourself in authentic German media — news, podcasts, academic articles, and conversation with native speakers',
      'If studying or working in Germany, apply your Stellungnahme and academic writing skills directly to coursework and professional communication'
    ],
    motivation: 'Language mastery is not a finish line — it is a lifelong practice. Keep reading, keep listening, keep writing, and keep speaking. You have already proven you can do the hard part.'
  }
};
window.CHAPTER = CHAPTER;
