/* KLARWEG CHAPTER DATA — C1 · Chapter 27
   "Funktionsverbgefüge im akademischen Deutsch" — light verb
   constructions where the noun carries meaning, the verb carries
   grammar (analysieren → eine Analyse durchführen). Stylistic
   preference in academic/scientific/administrative German.
   NOT new vocabulary — students already know these verbs/nouns.
   Dialogue: Wenke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-27-funktionsverbgefuege-im-akademischen-deutsch',
  phase: 'C1 · Nominalstil & Präzision',
  number: 27,
  title: 'Funktionsverbgefüge im akademischen Deutsch',
  titleEn: 'Light verb constructions in academic German',
  description: 'Think of a Funktionsverbgefüge as a team: the noun carries the meaning, the verb carries the grammar. "Analysieren" becomes "eine Analyse durchführen" — the action stays the same, but the expression becomes more formal and objective.',
  xp: 730, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 28, title: 'Goethe Mini 4', titleEn: 'Checkpoint: Chapters 24–27' , href: 'chapter-c1-28-goethe-mini-4.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'The noun carries the <em>meaning</em>; the verb carries the <em>grammar</em>.',
    intro: 'Before an international conference, Wenke and Timo weigh a hiring decision — the candidate\'s contribution, his research\'s role, his experience abroad — trading plain verbs for the noun-plus-light-verb constructions academic German prefers.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Funktionsverbgefüge used naturally to create formal, objective academic style'],
    scene: 'Überarbeitung eines Forschungsartikels vor einer internationalen Konferenz',
    femaleSpeakers: ['Wenke'],
    dialogue: [
      { speaker: 'Wenke', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Entscheidung', role: 'r-akkusativ', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: 'treffen', role: 'r-verb', en: 'make', hi: 'लेना', pron: 'TRE-fen', type: 'Verb · infinitive (Satzende)', why: 'eine Entscheidung treffen = to make a decision, Funktionsverbgefüge (recycled B1).', ex: 'eine Entscheidung treffen' },
        { w: '.', plain: true }
      ], en: 'We must make a decision today.', hi: 'Humein aaj ek faisla lena hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kandidat', role: 'r-subject', en: 'candidate', hi: 'उम्मीदवार', pron: 'kan-di-DAHT', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'दिया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RITES', type: 'Adverb' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'wichtigen', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-ti-gen', type: 'Adjective' },
        { w: 'Beitrag', role: 'r-akkusativ', en: 'contribution', hi: 'योगदान', pron: 'BY-trahk', type: 'Noun · masc.' },
        { w: 'geleistet', role: 'r-verb', en: 'made', hi: 'दिया', pron: 'ge-LY-stet', type: 'Partizip II · Satzende', why: 'einen Beitrag leisten = to make a contribution, Funktionsverbgefüge (this chapter).', ex: 'einen Beitrag leisten' },
        { w: '.', plain: true }
      ], en: 'The candidate has already made an important contribution.', hi: 'Ummeedwaar ne pehle se ek zaroori yogdaan diya hai.' },
      { speaker: 'Wenke', tokens: [
        { w: 'Seine', role: 'r-subject', en: 'his (fem.)', hi: 'उसकी', pron: 'ZY-nuh', type: 'Possessive' },
        { w: 'Forschung', role: 'r-subject', en: 'research', hi: 'शोध', pron: 'FOR-shung', type: 'Noun · fem.' },
        { w: 'spielt', role: 'r-verb', en: 'plays', hi: 'निभाती है', pron: 'SHPEELT', type: 'Verb · spielen' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'große', role: 'r-akkusativ', en: 'big', hi: 'बड़ी', pron: 'GROH-suh', type: 'Adjective' },
        { w: 'Rolle', role: 'r-akkusativ', en: 'role', hi: 'भूमिका', pron: 'RO-luh', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'Entscheidung', role: 'r-akkusativ', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'His research plays a big role for our decision.', hi: 'Uski shodh humaare faisle ke liye badi bhoomika nibhaati hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'seine', role: 'r-akkusativ', en: 'his (fem.)', hi: 'उसकी', pron: 'ZY-nuh', type: 'Possessive · acc.' },
        { w: 'Erfahrung', role: 'r-akkusativ', en: 'experience', hi: 'अनुभव', pron: 'er-FAH-rung', type: 'Noun · fem.' },
        { w: 'im', role: 'r-preposition', en: 'abroad', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Ausland', role: 'r-dativ', en: 'abroad (dat.)', hi: 'विदेश में', pron: 'OWS-lant', type: 'Noun · neut. dat.' },
        { w: 'in', role: 'r-preposition', en: 'into', hi: 'में', pron: 'in', type: 'Preposition (part of in Betracht ziehen)' },
        { w: 'Betracht', role: 'r-akkusativ', en: 'consideration', hi: 'विचार', pron: 'be-TRAKHT', type: 'Noun · masc.', why: 'in Betracht ziehen = to take into consideration, Funktionsverbgefüge (recycled B2).', ex: 'in Betracht ziehen' },
        { w: 'ziehen', role: 'r-verb', en: 'take', hi: 'में लेना', pron: 'TSEE-en', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Should we also take his experience abroad into consideration?', hi: 'Kya humein uske videsh ke anubhav ko bhi vichaar mein lena chahiye?' },
      { speaker: 'Wenke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'उसने', pron: 'air', type: 'Pronoun · subject' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'ली है', pron: 'hat', type: 'Verb · haben' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Verantwortung', role: 'r-akkusativ', en: 'responsibility', hi: 'ज़िम्मेदारी', pron: 'fer-ANT-vor-tung', type: 'Noun · fem.' },
        { w: 'übernommen', role: 'r-verb', en: 'taken on', hi: 'ली', pron: 'ü-ber-NO-men', type: 'Partizip II · Satzende', why: 'Verantwortung übernehmen = to take on responsibility, Funktionsverbgefüge (this chapter).', ex: 'Verantwortung übernehmen' },
        { w: '.', plain: true }
      ], en: 'Yes. He has taken on much responsibility.', hi: 'Haan. Usne bahut zimmedaari li hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'आपस में', pron: 'uns', type: 'Reflexive pronoun' },
        { w: 'einig', role: 'r-akkusativ', en: 'agreed', hi: 'सहमत', pron: 'EYE-nikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Then we are agreed.', hi: 'Toh hum aapas mein sahmat hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think of a <span class="de r-fvg">Funktionsverbgefüge</span> as a team: the <b>noun carries the meaning</b>, the <b>verb carries the grammar</b>. "Analysieren" becomes "eine Analyse durchführen" — the action stays the same, but the expression becomes more formal and objective.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is FUNKTIONSVERBGEFÜGE IM AKADEMISCHEN DEUTSCH at C1 level — light verb constructions where a noun carries the main meaning and a "support verb" mainly supplies grammar, NOT new vocabulary (students already know the underlying verbs and nouns). Covered: simple-verb-to-Funktionsverbgefüge pairs (entscheiden → eine Entscheidung treffen; analysieren → eine Analyse durchführen; diskutieren → eine Diskussion führen; untersuchen → eine Untersuchung durchführen; beurteilen → eine Beurteilung vornehmen; beeinflussen → Einfluss nehmen); fixed academic Funktionsverbgefüge (eine Rolle spielen, in Betracht ziehen, zur Verfügung stehen, Einfluss nehmen, zur Anwendung kommen, zur Diskussion stehen, Verantwortung übernehmen, Maßnahmen ergreifen, Ergebnisse erzielen, Kritik üben, in Verbindung stehen, einen Beitrag leisten); scientific (eine Hypothese aufstellen, eine Schlussfolgerung ziehen), administrative (einen Antrag stellen, eine Genehmigung erteilen), journalistic (Druck ausüben, Verhandlungen aufnehmen), and professional (Kontakt aufnehmen, eine Präsentation halten) register variants; the stylistic principle that Funktionsverbgefüge suit formal written registers but sound stiff/overused in casual conversation. Do NOT expect or require basic verb conjugation or introduce genuinely new vocabulary — this chapter assumes the underlying words are known; do not flag their absence. The most important things to catch: literal English translation of light verb constructions that sounds unnatural in German; overusing simple verbs where formal register expects a Funktionsverbgefüge (or vice versa — overusing Funktionsverbgefüge in casual writing); choosing the wrong support verb for a given noun (incorrect collocation, e.g. "eine Entscheidung machen" instead of "treffen"); register mismatches (using administrative/scientific Funktionsverbgefüge in casual conversation). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag incorrect support-verb collocations (wrong pairing of noun + verb in a Funktionsverbgefüge); flag literal/unnatural translations from English; check that register (academic/scientific/administrative vs conversational) matches the chosen structures. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Register check:</b> one sentence on whether the learner\'s balance of simple verbs and Funktionsverbgefüge matched the intended formal/academic register.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you use Funktionsverbgefüge naturally to create formal, objective academic style. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Transformation Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: the noun carries the meaning, the verb carries the grammar.' },
  parserSentence: [ { w: 'eine', role: 'r-fvg' }, { w: 'Analyse', role: 'r-fvg' }, { w: 'durchführen', role: 'r-fvg' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: in a Funktionsverbgefüge, the noun carries the meaning and the verb carries the grammar.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Wenke and Timo revise a research paper, replacing simple verbs with authentic academic Funktionsverbgefüge.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key Funktionsverbgefüge — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master common academic, scientific, administrative, and journalistic Funktionsverbgefüge and their collocations.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific journal article and an administrative/newspaper text, identifying Funktionsverbgefüge.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify Funktionsverbgefüge and academic collocations in a university lecture and research meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present research and discuss academic topics using authentic Funktionsverbgefüge naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace simple verbs with Funktionsverbgefüge, and write a 350-word academic article using them naturally.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill verb-to-Funktionsverbgefüge transformation, collocation selection, and register selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 730 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Verb-to-Funktionsverbgefüge drills, collocation selection, and a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Transformation Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir sollten "analysieren" durch eine Analyse durchführen ersetzen.', text: 'Recognize and form the verb-to-Funktionsverbgefüge transformation' },
    { de: 'Statt "entscheiden" könnten wir eine Entscheidung treffen schreiben.', text: 'Use the correct support verb "treffen" for "Entscheidung"' },
    { de: 'Der Faktor spielt dabei eine entscheidende Rolle.', text: 'Use the fixed academic Funktionsverbgefüge "eine Rolle spielen"' },
    { de: 'Wir sollten alternative Methoden in Betracht ziehen.', text: 'Use "in Betracht ziehen" to mean "consider"' },
    { de: 'Die Verantwortlichen sollten Verantwortung für die Umsetzung übernehmen.', text: 'Use "Verantwortung übernehmen" for formal, objective responsibility-taking' }
  ],
  vocab: [
    { de: 'eine Entscheidung treffen', pos: 'Funktionsverbgefüge', level: 'C1', register: 'both', en: 'to make a decision', hi: 'निर्णय लेना', ex: 'Wir müssen bald eine Entscheidung treffen.', exEn: 'We must make a decision soon.', exHi: 'Hamein jald hi faisla lena hoga.', ex2: 'Die Kommission hat eine wichtige Entscheidung getroffen.', ex2En: 'The commission has made an important decision.', ex2Hi: 'Commission ne ek mahatvapoorn faisla liya hai.' },
    { de: 'eine Rolle spielen', pos: 'Funktionsverbgefüge', level: 'C1', register: 'both', en: 'to play a role, be relevant', hi: 'भूमिका निभाना', ex: 'Der Faktor spielt dabei eine entscheidende Rolle.', exEn: 'The factor plays a decisive role in this.', exHi: 'Iss mein karak ek nirNaayak bhoomikaa nibhaata hai.', ex2: 'Geld spielt in dieser Entscheidung keine Rolle.', ex2En: 'Money plays no role in this decision.', ex2Hi: 'Iss faisle mein paisa koi bhoomikaa nahi nibhaata.' },
    { de: 'in Betracht ziehen', pos: 'Funktionsverbgefüge', level: 'C1', register: 'written', en: 'to consider, take into account', hi: 'विचार में लेना', ex: 'Wir sollten alternative Methoden in Betracht ziehen.', exEn: 'We should take alternative methods into consideration.', exHi: 'Hamein vaikalpik vidhiyon ko vichaar mein lena chahiye.', ex2: 'Diese Option wurde nicht in Betracht gezogen.', ex2En: 'This option was not taken into consideration.', ex2Hi: 'Iss option ko vichaar mein nahi liya gaya.' },
    { de: 'einen Beitrag leisten', pos: 'Funktionsverbgefüge', level: 'C1', register: 'written', en: 'to make a contribution', hi: 'योगदान देना', ex: 'Die Studie leistet einen wichtigen Beitrag zur Forschung.', exEn: 'The study makes an important contribution to research.', exHi: 'Adhyayan shodh mein ek mahatvapoorn yogdaan deta hai.', ex2: 'Jeder Einzelne kann einen Beitrag leisten.', ex2En: 'Every individual can make a contribution.', ex2Hi: 'Har vyakti yogdaan de sakta hai.' },
    { de: 'Verantwortung übernehmen', pos: 'Funktionsverbgefüge', level: 'C1', register: 'both', en: 'to take responsibility', hi: 'ज़िम्मेदारी लेना', ex: 'Die Verantwortlichen sollten Verantwortung für die Umsetzung übernehmen.', exEn: 'Those responsible should take responsibility for the implementation.', exHi: 'Zimmedaar logon ko kriyaanvayan ke liye zimmedaari leni chahiye.', ex2: 'Er hat die volle Verantwortung übernommen.', ex2En: 'He has taken full responsibility.', ex2Hi: 'Usne poori zimmedaari le li hai.' }
  ],
  grammar: [
    { title: 'Was ist ein Funktionsverbgefüge?', body: [ 'Simple Verb → Verb + Noun → Funktionsverbgefüge → Academic Style → Objective Language. The noun carries the main meaning, while the verb mainly serves a grammatical function.' ], hinglish: 'Funktionsverbgef\u00fcge ek jodi hoti hai jisme kaam baant liya jaata hai \u2014 <b>noun</b> asli matlab rakhta hai aur <b>verb</b> sirf grammar sambhaalta hai. Isliye <span class="de">eine Entscheidung treffen</span> mein matlab <i>Entscheidung</i> mein hai, <i>treffen</i> mein nahi. Yahi wajah hai ki verb ko badla nahi jaa sakta \u2014 woh us noun ke saath fix hai.' },
    { title: 'Einfaches Verb vs Funktionsverbgefüge', body: [ 'entscheiden → eine Entscheidung treffen / analysieren → eine Analyse durchführen / diskutieren → eine Diskussion führen / untersuchen → eine Untersuchung durchführen / beurteilen → eine Beurteilung vornehmen. Native speakers prefer the Funktionsverbgefüge in formal written register.' ], hinglish: 'Har simple verb ka ek formal roop hota hai \u2014 <i>entscheiden</i> se <span class="de">eine Entscheidung treffen</span>. Matlab wahi rehta hai, bas text zyada formal aur objective lagta hai. Dhyaan do ki har noun apna alag verb leta hai: <b>Entscheidung</b> ke saath <b>treffen</b>, <b>Analyse</b> ke saath <b>durchf\u00fchren</b>, <b>Diskussion</b> ke saath <b>f\u00fchren</b>.' },
    { title: 'Wichtigste akademische Funktionsverbgefüge', body: [ 'eine Rolle spielen, in Betracht ziehen, zur Verfügung stehen, Einfluss nehmen, zur Anwendung kommen, zur Diskussion stehen, Verantwortung übernehmen, Maßnahmen ergreifen, Ergebnisse erzielen, Kritik üben, in Verbindung stehen, einen Beitrag leisten — each has a fixed, specific support verb that cannot be substituted freely.' ], hinglish: 'Yeh barah C1 mein sabse zyada aate hain, isliye inhe poore chunk ki tarah yaad karo \u2014 noun, verb aur preposition, teeno saath. <span class="de">eine Rolle spielen</span>, <span class="de">in Betracht ziehen</span>, <span class="de">zur Verf\u00fcgung stehen</span>, <span class="de">Verantwortung \u00fcbernehmen</span>, <span class="de">Ma\u00dfnahmen ergreifen</span>, <span class="de">Kritik \u00fcben</span>, <span class="de">einen Beitrag leisten</span>. Alag-alag yaad karoge to jodi galat ban jaayegi.' },
    { title: 'Wissenschaftssprache (Scientific German)', body: [ 'eine Datenauswertung durchführen, eine Hypothese aufstellen, eine Beobachtung machen, eine Schlussfolgerung ziehen, eine Bewertung vornehmen, eine Untersuchung durchführen — scientific writing strongly prefers these constructions for objectivity.' ], hinglish: 'Scientific writing mein yeh units baar-baar aati hain. Dhyaan do ki yahan har noun ka verb alag hai \u2014 <span class="de">eine Hypothese <b>aufstellen</b></span>, <span class="de">eine Schlussfolgerung <b>ziehen</b></span>, <span class="de">eine Bewertung <b>vornehmen</b></span>. Aur ek exception yaad rakho: <span class="de">eine Beobachtung <b>machen</b></span> mein <i>machen</i> sach mein sahi hai \u2014 yeh un gine-chune cases mein se ek hai.' },
    { title: 'Verwaltungssprache (Administrative German)', body: [ 'einen Antrag stellen, eine Genehmigung erteilen, eine Mitteilung machen, eine Prüfung durchführen, eine Entscheidung treffen, Maßnahmen ergreifen — the standard bureaucratic vocabulary of official documents.' ], hinglish: 'Official documents inhi phrases se bhare hote hain. Ek baat dhyaan dene layak hai \u2014 kaun kya karta hai yeh bhi fix hai: aap <span class="de">einen Antrag <b>stellen</b></span> karte ho, aur authority <span class="de">eine Genehmigung <b>erteilen</b></span> karti hai. Yeh jodi ulti nahi ho sakti.' },
    { title: 'Journalismus & Berufliche Kommunikation', body: [ 'News aur office ki apni units hain. Journalism mein <span class="de">Kritik \u00fcben</span>, <span class="de">Druck aus\u00fcben</span>, <span class="de">Verhandlungen aufnehmen</span>. Aur office mein <span class="de">Kontakt aufnehmen</span>, <span class="de">eine Pr\u00e4sentation halten</span>, <span class="de">eine Vereinbarung treffen</span>. Dhyaan do ki <b>aufnehmen</b> baar-baar aata hai jab kuch <b>shuru</b> kiya jaa raha ho.' ], hinglish: 'News aur office ki apni units hain. Journalism mein <span class="de">Kritik \u00fcben</span>, <span class="de">Druck aus\u00fcben</span>, <span class="de">Verhandlungen aufnehmen</span>. Aur office mein <span class="de">Kontakt aufnehmen</span>, <span class="de">eine Pr\u00e4sentation halten</span>, <span class="de">eine Vereinbarung treffen</span>. Dhyaan do ki <b>aufnehmen</b> baar-baar aata hai jab kuch <b>shuru</b> kiya jaa raha ho.' },
    {
      title: 'Welches St\u00fctzverb \u2014 und wo steht es?',
      body: [
        'The support verbs are not random: a few of them cover most Funktionsverbgef\u00fcge, and each has a rough meaning. Learning them in groups is far quicker than learning fifty separate collocations.',
        'Note also that many of these units contain a fixed preposition, and it cannot be changed.'
      ],
      table: {
        head: ['Support verb', 'Rough sense', 'Typical partners'],
        rows: [
          ['<b>treffen</b>', 'reach, settle', '<span class="de">eine Entscheidung / eine Vereinbarung / Ma\u00dfnahmen</span>'],
          ['<b>durchf\u00fchren</b>', 'carry out', '<span class="de">eine Analyse / eine Untersuchung / eine Pr\u00fcfung</span>'],
          ['<b>stellen</b>', 'put forward', '<span class="de">einen Antrag / eine Frage / eine Forderung</span>'],
          ['<b>ergreifen</b>', 'take action', '<span class="de">Ma\u00dfnahmen / die Initiative</span>'],
          ['<b>\u00fcben</b> / <b>leisten</b>', 'exert, contribute', '<span class="de">Kritik \u00fcben / einen Beitrag leisten</span>'],
          ['<b>ziehen</b>', 'draw', '<span class="de">eine Schlussfolgerung / in Betracht ziehen</span>']
        ]
      },
      note: 'Watch the fixed prepositions: <b>in</b> Betracht ziehen, <b>zur</b> Verf\u00fcgung stehen, <b>zur</b> Diskussion stehen, <b>in</b> Verbindung stehen. These are part of the unit \u2014 change the preposition and the phrase stops working.',
      hinglish: 'Support verbs random nahi hain \u2014 kuch hi verbs zyada-tar Funktionsverbgef\u00fcge cover kar lete hain, aur har ek ka apna matlab hai. Isliye pachaas alag-alag collocations ratne se behtar hai inhe group mein yaad karna. <b>treffen</b> matlab kisi nateeje par pahunchna (<span class="de">eine Entscheidung treffen</span>), <b>durchf\u00fchren</b> matlab koi kaam poora karna (<span class="de">eine Analyse durchf\u00fchren</span>), <b>stellen</b> matlab kuch saamne rakhna (<span class="de">einen Antrag stellen</span>), aur <b>ergreifen</b> matlab kadam uthana (<span class="de">Ma\u00dfnahmen ergreifen</span>). Aur ek baat khaas \u2014 kai units mein preposition bhi fix hai: <b>in</b> Betracht ziehen, <b>zur</b> Verf\u00fcgung stehen. Use badla to phrase kaam karna band kar deta hai. Aur sabse aam galti? Har jagah <i>machen</i> laga dena \u2014 woh in units mein lagbhag kabhi nahi aata.'
    },
    { title: 'Meister-Tabelle', body: [ 'Simple verb mapped to Funktionsverbgefüge and typical register.' ], table: { head: ['Simple Verb', 'Funktionsverbgefüge'], rows: [ ['entscheiden', 'eine Entscheidung treffen (Academic)'], ['analysieren', 'eine Analyse durchführen (Scientific)'], ['diskutieren', 'eine Diskussion führen (Formal)'], ['untersuchen', 'eine Untersuchung durchführen (Research)'], ['beurteilen', 'eine Beurteilung vornehmen (Administrative)'], ['beeinflussen', 'Einfluss nehmen (Academic)'] ] }, hinglish: 'Simple verb, uska Funktionsverbgef\u00fcge aur register ka table \u2014 isse dekh kar tay karo ki tumhare text mein kaunsa roop theek baithega.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are the same error: reaching for <i>machen</i> instead of the fixed support verb. The sixth swaps a preposition that belongs to the unit.' ], mistakes: [
      { wrong: 'Wir haben eine Entscheidung gemacht.', right: 'Wir haben eine Entscheidung getroffen.', why: 'English \u201cmake a decision\u201d does not transfer \u2014 <b>Entscheidung</b> pairs only with <b>treffen</b>.' },
      { wrong: 'Die Forscher haben eine Analyse gemacht.', right: 'Die Forscher haben eine Analyse durchgef\u00fchrt.', why: '<b>Analyse</b>, <b>Untersuchung</b> and <b>Studie</b> all take <b>durchf\u00fchren</b>. <i>machen</i> is the default learners reach for, and it is almost always wrong here.' },
      { wrong: 'Das spielt eine wichtige Rolle f\u00fcr die Sicherheit \u2014 es nimmt gro\u00dfen Einfluss darauf.', right: 'Das spielt eine wichtige Rolle f\u00fcr die Sicherheit \u2014 es hat gro\u00dfen Einfluss darauf.', why: '<b>Einfluss</b> takes <b>nehmen</b> only with <i>auf</i> (<span class="de">Einfluss auf etwas nehmen</span>). With <i>darauf</i> already present, the natural verb is <b>haben</b>.' },
      { wrong: 'Wir m\u00fcssen Ma\u00dfnahmen machen.', right: 'Wir m\u00fcssen Ma\u00dfnahmen ergreifen.', why: '<b>Ma\u00dfnahmen</b> pairs with <b>ergreifen</b> \u2014 in official texts also <b>treffen</b>, but never <i>machen</i>.' },
      { wrong: 'Das Thema steht in Betracht.', right: 'Das Thema steht zur Diskussion. / Wir ziehen das Thema in Betracht.', why: '<b>in Betracht</b> goes with <b>ziehen</b>, and <b>zur Diskussion</b> with <b>stehen</b>. The preposition is part of the fixed unit and cannot be swapped.' },
      { wrong: 'Der Antrag wurde von der Beh\u00f6rde gestellt und dann eine Genehmigung gemacht.', right: 'Der Antrag wurde gestellt und eine Genehmigung erteilt.', why: 'A <b>Genehmigung</b> is <b>erteilt</b>, never <i>gemacht</i>. Note also that the applicant stellt the Antrag while the authority erteilt the Genehmigung.' }
    ], hinglish: 'Paanch galtiyan ek hi jad se aati hain \u2014 fix support verb ki jagah <i>machen</i> laga dena. Aur chhathi mein unit ka apna preposition badal diya gaya hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need natural spoken German? Simple Verb. Need formal written German? Funktionsverbgefüge. Need objective scientific writing? Funktionsverbgefüge + Nominal Style. Need concise communication? Choose the simplest natural structure.' ], note: 'Memory trick: think of a Funktionsverbgefüge as a team — the noun carries the meaning, the verb carries the grammar. Whenever you read a scientific article, ask: "could this simple verb have been replaced by a Funktionsverbgefüge?"', hinglish: 'Bolchaal? Simple verb \u2014 wahan yeh units bhaari lagti hain. Formal ya academic writing? Funktionsverbgef\u00fcge. Aur likhne se pehle ek sawaal poochho: kya mujhe is noun ka <b>sahi</b> verb yaad hai? Agar shak ho to simple verb hi likh do \u2014 galat jodi se woh behtar hai.' }
  ],
  reading: {
    title: 'Forschungsbericht: Stadtklima im Fokus',
    titleEn: 'Reading A — Research report: urban climate in focus',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers (Satzende)', hi: 'शोधकर्ता (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'haben', role: 'plain', en: 'have', hi: 'ने', type: 'Verb · haben (Präsens)' },
      { w: 'eine', role: 'r-fvg', en: 'a (fem. akk., part of Funktionsverbgefüge)', hi: '', type: 'Article · Akk.' },
      { w: 'umfassende', role: 'plain', en: 'comprehensive', hi: 'व्यापक', type: 'Adjective · Akk.' },
      { w: 'Untersuchung', role: 'r-fvg', en: 'investigation (part of Funktionsverbgefüge)', hi: 'जाँच', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'into', hi: 'के बारे में', type: 'Preposition · Dat.' },
      { w: 'städtischen', role: 'plain', en: 'urban', hi: 'शहरी', type: 'Adjective · Dat.' },
      { w: 'Hitzeinseln', role: 'plain', en: 'heat islands (Satzende)', hi: 'ऊष्मा द्वीपों (Satzende)', type: 'Noun · plural' },
      { w: 'durchgeführt', role: 'r-fvg', en: 'carried out (Satzende, "eine Untersuchung durchführen")', hi: 'सम्पन्न की (Satzende, Funktionsverbgefüge)', type: 'Partizip II (Satzende)', why: '"Eine Untersuchung durchführen" is a fixed noun+verb pair (Funktionsverbgefüge) meaning simply "to investigate" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'stehen', role: 'r-fvg', en: 'stand (part of "in Verbindung stehen mit", fixed Funktionsverbgefüge)', hi: '', type: 'Verb (Präsens)' },
      { w: 'in', role: 'r-fvg', en: 'in (part of fixed expression)', hi: '', type: 'Präposition · Dat.' },
      { w: 'engem', role: 'plain', en: 'close (Satzende)', hi: 'क़रीबी (Satzende)', type: 'Adjective · Dat.' },
      { w: 'Zusammenhang', role: 'r-fvg', en: 'connection (Satzende, "im Zusammenhang stehen" — to be connected)', hi: 'सम्बन्ध में (Satzende, Funktionsverbgefüge)', type: 'Noun · masc. (Satzende)' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Präposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Versiegelung', role: 'plain', en: 'sealing (Satzende)', hi: 'सीलिंग (Satzende)', type: 'Noun · fem.' },
      { w: 'innerstädtischer', role: 'plain', en: 'inner-city', hi: 'शहर के भीतरी', type: 'Adjective · Gen.' },
      { w: 'Flächen', role: 'plain', en: 'surfaces (Satzende)', hi: 'सतहों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The researchers have carried out a comprehensive investigation into urban heat islands. The results are closely connected with the sealing of inner-city surfaces.',
    comprehension: [
      { q: 'Welches Funktionsverbgefüge ersetzt "untersuchten"?', options: ['eine Untersuchung durchführen', 'in Betracht ziehen', 'eine Rolle spielen'], answer: 0 },
      { q: 'Welches Funktionsverbgefüge bedeutet "verbunden sein mit"?', options: ['in Verbindung stehen mit', 'Verantwortung übernehmen', 'zur Verfügung stehen'], answer: 0 },
      { q: 'Warum bevorzugt der Forschungsbericht diese Konstruktionen?', options: ['Formale, objektive akademische Sprache', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Verwaltungstext', titleEn: 'Reading B — Administrative text',
    tokens: [
      { w: 'Antragsteller', role: 'plain', en: 'applicants (Satzende)', hi: 'aavedak (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'müssen', role: 'plain', en: 'must', hi: 'chahiye', type: 'Modalverb (Präsens)' },
      { w: 'einen', role: 'r-fvg', en: 'a (masc. akk., part of Funktionsverbgefüge)', hi: '(Funktionsverbgefüge ka hissa)', type: 'Article · Akk.' },
      { w: 'Antrag', role: 'r-fvg', en: 'application (part of Funktionsverbgefüge)', hi: 'application (Funktionsverbgefüge)', type: 'Noun · masc.' },
      { w: 'stellen', role: 'r-fvg', en: 'submit (Satzende, "einen Antrag stellen" — to submit an application)', hi: 'jama karna chahiye (Satzende, Funktionsverbgefüge)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Behörde', role: 'plain', en: 'authority (Satzende)', hi: 'adhikaari (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'erteilt', role: 'r-fvg', en: 'grants (part of "eine Genehmigung erteilen", fixed Funktionsverbgefüge)', hi: '(fixed Funktionsverbgefüge)', type: 'Verb (Präsens)' },
      { w: 'daraufhin', role: 'plain', en: 'thereupon', hi: 'iske baad', type: 'Adverb' },
      { w: 'eine', role: 'r-fvg', en: 'a (fem. akk., part of fixed expression)', hi: '(fixed expression ka hissa)', type: 'Article · Akk.' },
      { w: 'Genehmigung', role: 'r-fvg', en: 'permit (Satzende, "eine Genehmigung erteilen" — to grant a permit)', hi: 'anumati (Satzende, Funktionsverbgefüge)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Applicants must submit an application. The authority then grants a permit.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_027_L001', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie bewerten wir seinen Beitrag zum Projekt vor der Konferenz?', en: 'Timo, how do we assess his contribution to the project before the conference?' },
      { id: 'C1_027_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Seine Forschung spielt sicher eine wichtige Rolle, und seine Auslandserfahrung fällt auch ins Gewicht.', en: 'His research certainly plays an important role, and his experience abroad also carries weight.' },
      { id: 'C1_027_L003', speaker: 'Wenke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Trotzdem sollten wir eine Entscheidung erst treffen, wenn wir alle Unterlagen zur Kenntnis genommen haben.', en: 'Still, we should only make a decision once we\'ve taken note of all the documents.' },
      { id: 'C1_027_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Einverstanden, dann nehmen wir uns morgen noch einmal Zeit dafür.', en: 'Agreed, then we\'ll take time for that again tomorrow.' }
    ],
    transcript: 'Timo, wie bewerten wir seinen Beitrag zum Projekt vor der Konferenz? Seine Forschung spielt sicher eine wichtige Rolle, und seine Auslandserfahrung fällt auch ins Gewicht. Trotzdem sollten wir eine Entscheidung erst treffen, wenn wir alle Unterlagen zur Kenntnis genommen haben. Einverstanden, dann nehmen wir uns morgen noch einmal Zeit dafür.',
    translation: 'Timo, how do we assess his contribution to the project before the conference? His research certainly plays an important role, and his experience abroad also carries weight. Still, we should only make a decision once we\'ve taken note of all the documents. Agreed, then we\'ll take time for that again tomorrow.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'bewerten' },
      { w: 'wir' },
      { w: 'seinen' },
      { w: 'Beitrag' },
      { w: 'zum' },
      { w: 'Projekt' },
      { w: 'vor' },
      { w: 'der' },
      { w: 'Konferenz' },
      { w: '?', plain: true },
      { w: 'Seine' },
      { w: 'Forschung' },
      { w: 'spielt' },
      { w: 'sicher' },
      { w: 'eine' },
      { w: 'wichtige' },
      { w: 'Rolle' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'seine' },
      { w: 'Auslandserfahrung' },
      { w: 'fällt' },
      { w: 'auch' },
      { w: 'ins' },
      { w: 'Gewicht' },
      { w: '.', plain: true },
      { w: 'Trotzdem' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'eine' },
      { w: 'Entscheidung' },
      { w: 'erst' },
      { w: 'treffen' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'wir' },
      { w: 'alle' },
      { w: 'Unterlagen' },
      { w: 'zur' },
      { w: 'Kenntnis' },
      { w: 'genommen' },
      { w: 'haben' },
      { w: '.', plain: true },
      { w: 'Einverstanden' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'nehmen' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'morgen' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'Zeit' },
      { w: 'dafür' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was spielt laut Timo eine wichtige Rolle?', qEn: 'What does Timo say plays an important role?', options: ['sein Alter', 'seine Forschung', 'sein Gehalt', 'sein Wohnort'], optionsEn: ['his age', 'his research', 'his salary', 'where he lives'], answer: 1,
        explain: '"Seine Forschung spielt sicher eine wichtige Rolle."' },
      { q: 'Was wollen sie vor der Entscheidung machen?', qEn: 'What do they agree to do before deciding?', options: ['sofort entscheiden', 'alle Unterlagen zur Kenntnis nehmen', 'ihn anrufen', 'die Konferenz verschieben'], optionsEn: ['decide immediately', 'take note of all the documents', 'call him', 'postpone the conference'], answer: 1,
        explain: '"… eine Entscheidung erst treffen, wenn wir alle Unterlagen zur Kenntnis genommen haben."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie ihr seinen Beitrag zum Projekt bewertet.", taskEn: "Timo asks how you rate his contribution to the project.", de: "Seine Forschung spielt eine wichtige Rolle, und er hat einen echten Beitrag geleistet.", en: "His research plays an important role, and he has made a real contribution." },
    { task: "Berichte im Protokoll, was das Gremium beschlossen hat.", taskEn: "Report in the minutes what the committee decided.", de: "Das Gremium hat eine Entscheidung getroffen.", en: "The committee has made a decision." },
    { task: "Nenne im Antrag eine Option, die ihr prüft.", taskEn: "Name an option you're examining in the proposal.", de: "Wir ziehen eine Ausweitung auf zwei Regionen in Betracht.", en: "We're considering an extension to two regions." },
    { task: "Kläre im Konsortium die Zuständigkeit.", taskEn: "Clarify responsibility in the consortium.", de: "Unser Institut übernimmt die Verantwortung für die Datenpflege.", en: "Our institute takes responsibility for data maintenance." },
    { task: "Ein Praktikant schreibt „wir entscheiden morgen“. Sag es förmlich.", taskEn: "An intern writes 'we'll decide tomorrow'. Say it formally.", de: "Wir treffen morgen eine Entscheidung.", en: "We will make a decision tomorrow." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Replace simple verbs with appropriate Funktionsverbgefüge, and explain why each replacement improves (or does not improve) the style.\n\nTASK 2 — Academic article (350 words): Use a wide variety of authentic Funktionsverbgefüge while maintaining natural readability, combining nominal style, participial attributes, and passive alternatives where appropriate.',
    starters: ['Die Forscher haben eine umfassende Untersuchung durchgeführt.', 'Der Faktor spielt dabei eine entscheidende Rolle.'],
    placeholder: 'Wir sollten alternative Methoden in Betracht ziehen. Der Bericht leistet einen wichtigen Beitrag zur Forschung...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'What is the correct Funktionsverbgefüge for "entscheiden"?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung führen'], answer: 0, explain: '"Treffen" is the fixed support verb for "Entscheidung" — not "machen" or "führen".' },
    gap: { sentence: ['Wir sollten alternative Methoden in Betracht ', '.'], gaps: [ { answer: 'ziehen', accepts: ['ziehen'] } ], explain: '"In Betracht ziehen" is the fixed Funktionsverbgefüge meaning "to consider".' },
    match: { q: 'Match each Funktionsverbgefüge to its meaning.', pairs: [ { noun: 'eine Rolle spielen', art: 'to be relevant/important' }, { noun: 'in Betracht ziehen', art: 'to consider' }, { noun: 'Verantwortung übernehmen', art: 'to take responsibility' }, { noun: 'einen Beitrag leisten', art: 'to make a contribution' } ] },
    builder: { target: 'Build: "The factor plays a decisive role in this." (fixed Funktionsverbgefüge)', bank: ['Der', 'Faktor', 'spielt', 'dabei', 'eine', 'entscheidende', 'Rolle', '.'], answer: ['Der', 'Faktor', 'spielt', 'dabei', 'eine', 'entscheidende', 'Rolle', '.'], roles: { 'spielt': 'r-fvg', 'Rolle': 'r-fvg' } },
    errorCorrection: { title: 'Error correction', wrong: 'Wir haben eine Entscheidung gemacht.', right: 'Wir haben eine Entscheidung getroffen.', explain: '"Entscheidung" collocates only with "treffen", not "machen" — support verbs are fixed, not interchangeable.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for Funktionsverbgefüge?', options: ['The noun carries the meaning, the verb carries the grammar', 'They are completely new vocabulary', 'They only appear in spoken German'], answer: 0, explain: 'The action stays the same as the simple verb, but the expression becomes more formal.' },
    { q: 'What is the Funktionsverbgefüge for "analysieren"?', options: ['eine Analyse durchführen', 'eine Analyse machen', 'eine Analyse haben'], answer: 0, explain: '"Durchführen" is the fixed support verb for "Analyse".' },
    { q: 'What does "in Betracht ziehen" mean?', options: ['to consider', 'to decide', 'to criticize'], answer: 0, explain: '"In Betracht ziehen" is a fixed Funktionsverbgefüge meaning "to consider" or "take into account".' },
    { q: 'In which register are Funktionsverbgefüge most common?', options: ['Academic/scientific/administrative writing', 'Casual conversation', 'They are equally common everywhere'], answer: 0, explain: 'Funktionsverbgefüge create formal, objective style typical of written registers.' },
    { q: 'What mistake should learners avoid with Funktionsverbgefüge?', options: ['Choosing the wrong support verb (incorrect collocation)', 'Using too many simple verbs in conversation', 'Avoiding them completely in writing'], answer: 0, explain: 'Each Funktionsverbgefüge has one fixed support verb — substituting another creates an unnatural collocation.' }
  ],
  takeaways: [
    { c: 'r-fvg', html: 'Funktionsverbgefüge (eine Entscheidung treffen, eine Analyse durchführen) shift meaning into the noun, using the verb only for grammar — the hallmark of formal academic style.' },
    { c: 'r-fvg', html: 'Fixed academic expressions (eine Rolle spielen, in Betracht ziehen, Verantwortung übernehmen) must be memorized as whole collocations, not built word-by-word.' },
    { c: 'r-fvg', html: 'Register matters: prefer simple verbs in conversation, Funktionsverbgefüge in academic, scientific, and administrative writing.' }
  ],
  revisionTips: [
    'Take five simple verbs (entscheiden, analysieren, diskutieren, untersuchen, beurteilen) and write their Funktionsverbgefüge from memory.',
    'Find a German academic abstract and underline every Funktionsverbgefüge you can identify.',
    'Practise choosing the correct support verb by writing five sentences using different fixed academic Funktionsverbgefüge from this chapter.'
  ]
};
window.CHAPTER = CHAPTER;
