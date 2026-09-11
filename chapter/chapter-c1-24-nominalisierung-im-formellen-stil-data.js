/* KLARWEG CHAPTER DATA — C1 · Chapter 24
   "Nominalisierung im formellen Stil" — verb/adjective/infinitive
   nominalization as a STYLISTIC choice: verbal vs nominal style,
   academic/scientific/administrative/legal register, avoiding
   over-nominalization. NOT basic word-formation (already
   mastered at A2/B1).
   Dialogue: Marte and Timo ONLY. */
const CHAPTER = {
  id: 'c1-24-nominalisierung-im-formellen-stil',
  phase: 'C1 · Nominalstil & Präzision',
  number: 24,
  title: 'Nominalisierung im formellen Stil',
  titleEn: 'Nominalization in formal style',
  description: 'Think of nominalization as turning actions into concepts. Instead of saying what someone does, formal German often talks about the action itself. C1 writers constantly choose between verbal style and nominal style.',
  xp: 670, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 25, title: 'Partizipien & Adjektive als Nomen', titleEn: 'Participles and adjectives as nouns' , href: 'chapter-c1-25-partizipien-und-adjektive-als-nomen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Formal German talks about the <em>action itself</em>, not who does it.',
    intro: 'After feedback from their supervisor, Marte and Timo weigh when nominal style sharpens their research paper\'s precision — the analysis of the documents, the necessity of a further audit — and when it just gets in the reader\'s way.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See verb, adjective, and infinitive nominalizations used to balance objectivity with readability'],
    scene: 'Überarbeitung einer Forschungsarbeit nach Rückmeldung der Betreuerin',
    femaleSpeakers: ['Marte'],
    dialogue: [
      { speaker: 'Marte', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Analyse', role: 'r-subject', en: 'analysis', hi: 'विश्लेषण', pron: 'a-na-LÜ-zuh', type: 'Noun · fem.', why: 'die Analyse (this chapter, nominalization of analysieren).', ex: 'die Analyse durchführen' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Unterlagen', role: 'r-dativ', en: 'documents (gen.)', hi: 'दस्तावेज़ों के', pron: 'UN-ter-lah-gen', type: 'Noun · plural genitive' },
        { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाता है', pron: 'TSY-kt', type: 'Verb · zeigen' },
        { w: 'keine', role: 'r-akkusativ', en: 'no', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Determiner' },
        { w: 'Auffälligkeiten', role: 'r-akkusativ', en: 'irregularities', hi: 'अनियमितताएं', pron: 'OWF-fe-likh-ky-ten', type: 'Noun · plural', why: 'die Auffälligkeit (recycled B2).', ex: 'keine Auffälligkeiten' },
        { w: '.', plain: true }
      ], en: 'The analysis of the documents shows no irregularities.', hi: 'Dastaavezon ka vishleshan koi anayamitata nahi dikhaata.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Durchführung', role: 'r-subject', en: 'execution', hi: 'कार्यान्वयन', pron: 'DOORKH-fü-rung', type: 'Noun · fem.', why: 'die Durchführung (this chapter, nominalization of durchführen).', ex: 'die Durchführung des Projekts' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Projekts', role: 'r-dativ', en: 'project (gen.)', hi: 'परियोजना के', pron: 'pro-YEKTS', type: 'Noun · neut. genitive' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'objektiv', role: 'r-akkusativ', en: 'objective', hi: 'वस्तुनिष्ठ', pron: 'op-yek-TEEF', type: 'Adjective', why: 'objektiv = objective (this chapter).', ex: 'objektiv bleiben' },
        { w: '.', plain: true }
      ], en: 'The execution of the project was objective.', hi: 'Pariyojana ka kaaryaanvayan vastunishth tha.' },
      { speaker: 'Marte', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Notwendigkeit', role: 'r-subject', en: 'necessity', hi: 'आवश्यकता', pron: 'noht-VEN-dikh-kite', type: 'Noun · fem.', why: 'die Notwendigkeit (this chapter, nominalization of notwendig).', ex: 'die Notwendigkeit einer Prüfung' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. gen.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · genitive' },
        { w: 'weiteren', role: 'r-dativ', en: 'further', hi: 'अगली', pron: 'VY-te-ren', type: 'Adjective · genitive' },
        { w: 'Prüfung', role: 'r-dativ', en: 'audit (gen.)', hi: 'जाँच के', pron: 'PRÜ-fung', type: 'Noun · fem. genitive' },
        { w: 'besteht', role: 'r-verb', en: 'exists', hi: 'है', pron: 'be-SHTAYT', type: 'Verb · bestehen' },
        { w: 'trotzdem', role: 'r-akkusativ', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: '.', plain: true }
      ], en: 'The necessity of a further audit nevertheless exists.', hi: 'Ek aur jaanch ki avashyakta phir bhi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Abwägen', role: 'r-subject', en: 'weighing', hi: 'तुलना करना', pron: 'AP-vay-gen', type: 'Noun · neut. (nominalisierter Infinitiv)', why: 'das Abwägen (this chapter, an infinitive nominalized as a neut. noun).', ex: 'das Abwägen der Risiken' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Risiken', role: 'r-dativ', en: 'risks (gen.)', hi: 'जोखिमों के', pron: 'ri-ZEE-ken', type: 'Noun · plural genitive' },
        { w: 'kostet', role: 'r-verb', en: 'costs', hi: 'लगता है', pron: 'KOS-tet', type: 'Verb · kosten' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The weighing of the risks costs time.', hi: 'Jokhimon ki tulna karne mein samay lagta hai.' },
      { speaker: 'Marte', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Empfehlung', role: 'r-akkusativ', en: 'recommendation', hi: 'सिफ़ारिश', pron: 'emp-FAY-lung', type: 'Noun · fem.' },
        { w: 'aussprechen', role: 'r-verb', en: 'make', hi: 'देना', pron: 'OWS-shpre-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Maybe we should nevertheless make a recommendation.', hi: 'Shayad humein phir bhi ek sifaarish deni chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'formuliere', role: 'r-verb', en: 'formulate', hi: 'व्यक्त करता हूँ', pron: 'for-mu-LEE-ruh', type: 'Verb · formulieren (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vorschlag', role: 'r-akkusativ', en: 'proposal', hi: 'सुझाव', pron: 'FOR-shlahk', type: 'Noun · masc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Agreed. I will formulate the proposal right away.', hi: 'Sahmat. Main abhi sujhaav vyakt karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think of <span class="de r-nominalisierung">Nominalisierung</span> as turning actions into concepts. Instead of saying what someone <b>does</b>, formal German often talks about <b>the action itself</b>. C1 writers constantly choose between verbal and nominal style.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is NOMINALISIERUNG IM FORMELLEN STIL at C1 level — nominalization as a STYLISTIC choice between verbal and nominal style, NOT basic word-formation mechanics (already mastered at A2/B1). Covered: verb-to-noun nominalization (analysieren → die Analyse, entwickeln → die Entwicklung, entscheiden → die Entscheidung, untersuchen → die Untersuchung, bewerten → die Bewertung); adjective-to-noun nominalization (wichtig → die Wichtigkeit, möglich → die Möglichkeit, notwendig → die Notwendigkeit, fähig → die Fähigkeit); infinitive nominalization (das Lernen, das Lesen, das Forschen, das Diskutieren, das Verstehen); the stylistic contrast between verbal style (Die Forscher analysieren die Daten) and nominal style (Die Analyse der Daten durch die Forscher); academic/scientific reliance on nominal style vs administrative/legal fixed nominal expressions (nach Abschluss der Prüfung, unter Berücksichtigung aller Aspekte) vs journalism\'s more balanced use; avoiding over-nominalization that makes texts unreadably bureaucratic. Do NOT expect or require basic infinitive formation, noun gender rules, or elementary A2/B1 nominalization mechanics — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: overusing nominalization in every sentence, making text bureaucratic and hard to read; direct English nominalization translations that sound unnatural; incorrect article/gender on nominalized forms; confusing process nouns (die Untersuchung = the investigating) with concrete nouns; avoiding nominal style entirely where academic register expects it. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag over-nominalization that harms readability; check verb/adjective/infinitive-to-noun transformations for correct article and form; check that nominal style is used where academic register expects it, and verbal style where readability calls for it. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Balance check:</b> one sentence on whether the learner balanced nominal and verbal style appropriately for the register, without over-nominalizing.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you balance nominal and verbal style like a native academic writer. Ready for the next chapter.', mid: 'Good. Re-read the Transformation Model and Formality Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: formal German shifts actions into nouns for precision, but readability still matters.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Analyse', role: 'r-verb-nomen' }, { w: 'der', role: 'plain' }, { w: 'Daten', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: formal German shifts actions into nouns to increase precision and objectivity.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Marte and Timo revise a research paper, balancing nominal and verbal style for academic precision and readability.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key nominalization expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master verb, adjective, and infinitive nominalization, and when to balance nominal vs verbal style.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific journal article and an administrative/legal text, identifying nominalizations and information density.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominalizations and formal expressions in a university lecture and government information session.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Explain research and reformulate nominal style into spoken German using appropriate register.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Transform verbal sentences into nominal style, and write a 350-word academic report balancing both styles.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill verb-to-noun, adjective-to-noun, and infinitive nominalization transformations.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 670 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Verb/adjective/infinitive nominalization drills, verbal-vs-nominal rewriting, and a full academic report writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Transformation Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir könnten das in einen nominalen Stil umformen.', text: 'Recognize when a verbal sentence should shift to nominal style' },
    { de: 'Die Analyse der Daten durch die Forscher.', text: 'Transform "analysieren" into "die Analyse" for objective, formal style' },
    { de: 'Wir sollten nicht jeden Satz so stark verdichten.', text: 'Recognize the risk of over-nominalization harming readability' },
    { de: 'Wir brauchen die Notwendigkeit einer größeren Stichprobe zu erklären.', text: 'Transform "notwendig" into "die Notwendigkeit" for academic abstraction' },
    { de: 'Das ständige Abwägen zwischen Nominal- und Verbalstil macht guten akademischen Stil aus.', text: 'Use infinitive nominalization ("das Abwägen") to describe the stylistic balancing act itself' }
  ],
  vocab: [
    { de: 'die Analyse', art: 'die', gender: 'f', plural: 'Analysen', pos: 'noun', level: 'C1', register: 'written', en: 'analysis', hi: 'विश्लेषण', ex: 'Die Analyse der Daten erfolgt durch die Forscher.', exEn: 'The analysis of the data is carried out by the researchers.', exHi: 'Data ka analysis shodhkartaon dwara kiya jaata hai.', ex2: 'Eine gründliche Analyse ist notwendig.', ex2En: 'A thorough analysis is necessary.', ex2Hi: 'Ek gehan analysis zaroori hai.' },
    { de: 'die Notwendigkeit', art: 'die', gender: 'f', plural: 'Notwendigkeiten', pos: 'noun', level: 'C1', register: 'written', en: 'necessity', hi: 'आवश्यकता', ex: 'Wir müssen die Notwendigkeit einer größeren Stichprobe erklären.', exEn: 'We must explain the necessity of a larger sample.', exHi: 'Hamein ek badi namoona ki zarurat samjhaani hai.', ex2: 'Die Notwendigkeit weiterer Forschung ist offensichtlich.', ex2En: 'The necessity of further research is evident.', ex2Hi: 'Aur shodh ki zarurat spasht hai.' },
    { de: 'das Abwägen', pos: 'noun (infinitive nominalization)', level: 'C1', register: 'written', en: 'the weighing, considering', hi: 'तौल-मोल', ex: 'Das ständige Abwägen zwischen Stilen ist wichtig.', exEn: 'The constant weighing between styles is important.', exHi: 'Styles ke beech lagaataar tolan mahatvapoorn hai.', ex2: 'Nach reiflichem Abwägen entschied sie sich dagegen.', ex2En: 'After careful consideration, she decided against it.', ex2Hi: 'Gehre tolan ke baad, usne iske khilaaf faisla kiya.' },
    { de: 'die Durchführung', art: 'die', gender: 'f', plural: 'Durchführungen', pos: 'noun', level: 'C1', register: 'written', en: 'implementation, conduct (of a study)', hi: 'क्रियान्वयन', ex: 'Die Durchführung der Studie dauerte sechs Monate.', exEn: 'The implementation of the study took six months.', exHi: 'Adhyayan ka kriyaanvayan chhe mahine tak chala.', ex2: 'Die Durchführung erfolgte unter strengen Bedingungen.', ex2En: 'The implementation took place under strict conditions.', ex2Hi: 'Kriyaanvayan sakht sthitiyon mein hua.' },
    { de: 'objektiv', pos: 'adjective', level: 'C1', register: 'written', en: 'objective', hi: 'वस्तुनिष्ठ', ex: 'Die nominale Formulierung klingt objektiver.', exEn: 'The nominal phrasing sounds more objective.', exHi: 'Nominal formulation zyaada vastuparak lagti hai.', ex2: 'Wissenschaftliche Texte sollten objektiv bleiben.', ex2En: 'Scientific texts should remain objective.', ex2Hi: 'Vaigyaanik texts ko vastuparak rehna chahiye.' }
  ],
  grammar: [
    { title: 'Warum Nominalisierung existiert', body: [ 'Action → Verb → Nominalization → Objectivity → Academic Style → Information Density. Formal German prefers nouns over verbs to sound more objective and precise.' ], hinglish: 'Nominalization ka matlab hai kaam ko naam mein badal dena \u2014 <i>untersuchen</i> se <b>die Untersuchung</b>. Isse do cheezein hoti hain: sentence formal lagta hai, aur karne wala peeche chala jaata hai. Isliye academic aur official writing mein yeh itna common hai \u2014 wahan baat kaam par hoti hai, karne wale par nahi.' },
    { title: 'Verb → Nomen', body: [ 'analysieren → die Analyse / entwickeln → die Entwicklung / entscheiden → die Entscheidung / untersuchen → die Untersuchung / bewerten → die Bewertung. Each verb becomes an abstract noun naming the action itself.' ], hinglish: 'Verb se noun banane ka sabse aam tareeka <b>-ung</b> hai \u2014 <i>entwickeln</i> se <b>die Entwicklung</b>, <i>untersuchen</i> se <b>die Untersuchung</b>. Kuch verbs <b>-e</b> ya <b>-ion</b> lete hain (<b>die Analyse</b>, <b>die Diskussion</b>). Achhi baat yeh hai ki yeh sab <b>die</b> hote hain, isliye gender ka sawaal hi nahi uthta.' },
    { title: 'Adjektiv → Nomen', body: [ 'wichtig → die Wichtigkeit / möglich → die Möglichkeit / notwendig → die Notwendigkeit / fähig → die Fähigkeit. Academic writing frequently abstracts qualities into nouns.' ], hinglish: 'Adjective se noun banane ke liye <b>-heit</b> ya <b>-keit</b> lagta hai \u2014 <i>m\u00f6glich</i> se <b>die M\u00f6glichkeit</b>, <i>notwendig</i> se <b>die Notwendigkeit</b>. Yeh bhi sab <b>die</b> hote hain. Isse tum quality ko ek cheez ki tarah baat kar sakte ho, jo academic writing mein bahut kaam aata hai.' },
    { title: 'Infinitiv-Nominalisierung', body: [ 'das Lernen, das Lesen, das Forschen, das Diskutieren, das Verstehen — capitalized infinitives used as neuter nouns, common in academic and philosophical writing.' ], hinglish: 'Koi bhi infinitive ko bada akshar likh do aur uske aage <b>das</b> laga do \u2014 woh noun ban jaata hai: <b>das Lernen</b>, <b>das Verstehen</b>. Yeh hamesha neuter hote hain, aur yahi is rule ko sabse aasaan banata hai. Sabse aam galti chhote akshar se likhna hai.' },
    { title: 'Verbaler vs Nominaler Stil', body: [ 'Die Regierung untersucht das Problem. → Die Untersuchung des Problems durch die Regierung... Verbal style is dynamic and direct; nominal style is formal, objective, and information-dense.' ], hinglish: 'Yahan dekho ki badalta kya hai. Verb noun ban gaya, uska object <b>Genitiv</b> mein chala gaya (<i>des Problems</i>), aur karne wala <b>durch</b> ke saath aa gaya. Verbal style seedha aur zinda lagta hai; nominal style formal aur objective. Dono sahi hain \u2014 farak sirf yeh hai ki text kis tarah ka hai.' },
    { title: 'Verwaltungs- & Rechtssprache (Administrative & Legal German)', body: [ 'nach Abschluss der Prüfung / bei Vorlage der Unterlagen / im Falle einer Ablehnung / zur Durchführung des Projekts / unter Berücksichtigung aller Aspekte — fixed nominal expressions typical of official writing.' ], hinglish: 'Official aur legal German inhi phrases se chalti hai. Inhe poore chunk ki tarah yaad karo \u2014 <span class="de">nach Abschluss der Pr\u00fcfung</span>, <span class="de">im Falle einer Ablehnung</span>, <span class="de">unter Ber\u00fccksichtigung aller Aspekte</span>. Dhyaan do ki har ek mein baad wala noun Genitiv mein hai. Yeh forms aur official letters mein baar-baar milenge.' },
    { title: 'Übernominalisierung vermeiden (Avoiding Over-Nominalization)', body: [ 'Overly bureaucratic German compresses every sentence into dense noun phrases, harming readability. Natural academic German balances nominal style with verbal style for clarity.' ], hinglish: 'Yahan ek asli khatra hai. Agar har sentence noun phrases se bhar do, to text padhne layak nahi rehta \u2014 Germans khud ise <i>Beamtendeutsch</i> kehte hain aur ise achha nahi maante. Ek aasaan test: agar ek sentence mein teen ya zyada Genitiv attributes ek ke baad ek aa rahe hain, to ek noun ko wapas verb bana do.' },
    {
      title: 'Genus und Genitiv',
      body: [
        'Nominalizations are predictable in two ways that matter more than any list.',
        'Their gender follows the suffix, and whatever the verb governed becomes a Genitiv attribute after the noun.'
      ],
      table: {
        head: ['Source', 'Suffix', 'Gender', 'Example'],
        rows: [
          ['verb', '-ung', 'always <b>die</b>', '<span class="de">die Entwicklung</span>'],
          ['verb', '-e / -ion', '<b>die</b>', '<span class="de">die Analyse, die Diskussion</span>'],
          ['adjective', '-heit / -keit', 'always <b>die</b>', '<span class="de">die M\u00f6glichkeit</span>'],
          ['infinitive', '\u2014 (capitalised)', 'always <b>das</b>', '<span class="de">das Lernen</span>'],
          ['verb', '-er (person)', '<b>der</b>', '<span class="de">der Forscher</span>']
        ]
      },
      note: 'The object of the verb becomes a Genitiv attribute, and the subject moves into a <b>durch</b>-phrase: <span class="de">Die Regierung untersucht das Problem</span> \u2192 <span class="de">die Untersuchung <b>des Problems</b> <b>durch die Regierung</b></span>.',
      hinglish: 'Nominalization mein do cheezein predictable hain, aur yahi sabse zyada kaam aati hain. Pehli, gender suffix se tay hota hai \u2014 <b>-ung</b>, <b>-heit</b>, <b>-keit</b> aur <b>-ion</b> wale sab <b>die</b> lete hain, aur nominalized infinitive hamesha <b>das</b> (<span class="de">das Lernen</span>). Doosri, verb ka object ab <b>Genitiv</b> mein aa jaata hai, aur karne wala <b>durch</b> ke saath: <span class="de">Die Regierung untersucht das Problem</span> se <span class="de">die Untersuchung des Problems durch die Regierung</span>. Genitiv mein masculine aur neuter par <b>-s</b> lagana mat bhoolo.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to function.' ], table: { head: ['Structure', 'Function'], rows: [ ['Verb', 'Action'], ['Nominalization', 'Objectified Action'], ['Verbal Style', 'Dynamic'], ['Nominal Style', 'Formal & Dense'], ['Academic Nominalization', 'Scientific Precision'] ] }, hinglish: 'Structure aur function ka table \u2014 pehle tay karo ki tumhe baat seedhi kehni hai ya formal aur objective, phir style chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these are mechanical \u2014 the Genitiv ending, capitalisation, and gender. The other three are about not saying the same thing twice, and about knowing when a noun chain has grown too long.' ], mistakes: [
      { wrong: 'Die Untersuchung des Problem dauert an.', right: 'Die Untersuchung des Problems dauert an.', why: 'The noun after a nominalization stands in the Genitiv, so a masculine or neuter noun adds <b>-s</b> \u2014 <i>des Problem<b>s</b></i>.' },
      { wrong: 'Das lernen einer Sprache braucht Zeit.', right: 'Das Lernen einer Sprache braucht Zeit.', why: 'A nominalized infinitive is a noun, so it is capitalised and takes <b>das</b>: <i>das Lernen</i>, <i>das Lesen</i>.' },
      { wrong: 'Der Entwicklung der Software war teuer.', right: 'Die Entwicklung der Software war teuer.', why: 'Every <b>-ung</b> noun is feminine, so it takes <b>die</b> \u2014 this pattern has no exceptions.' },
      { wrong: 'Nach Abschluss der Pr\u00fcfung erhalten Sie das Zeugnis, nach die Pr\u00fcfung abgeschlossen ist.', right: 'Nach Abschluss der Pr\u00fcfung erhalten Sie das Zeugnis.', why: 'The nominal phrase already carries the meaning \u2014 repeating it as a clause says the same thing twice.' },
      { wrong: 'Zur Durchf\u00fchrung der Untersuchung der Auswirkungen der Ma\u00dfnahmen der Regierung \u2026', right: 'Um die Auswirkungen der staatlichen Ma\u00dfnahmen zu untersuchen, \u2026', why: 'Four stacked Genitiv attributes are grammatical but unreadable. Break the chain by turning one noun back into a verb.' },
      { wrong: 'Die Regierung untersucht das Problem durch eine Untersuchung.', right: 'Die Regierung untersucht das Problem. / Die Untersuchung des Problems durch die Regierung \u2026', why: 'Pick one style. Using the verb and its own nominalization in the same clause is redundant.' }
    ], hinglish: 'Inme se teen galtiyan mechanical hain \u2014 Genitiv ki ending, capital letter, aur gender. Baaki teen ek hi baat do baar kehne ki hain, aur yeh na samajhne ki ki noun chain kab bahut lambi ho gayi.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need natural spoken communication? Verbal Style. Need academic precision? Nominalization. Need scientific objectivity? Nominal Style. Need legal or administrative language? Formal Nominalization. Need maximum readability? Balance Verbal + Nominal Style.' ], note: 'Memory trick: think of nominalization as turning actions into concepts. C1 writers constantly choose between verbal style and nominal style depending on purpose, audience, and formality.', hinglish: 'Bolchaal aur seedhi baat? Verbal style. Academic ya official writing? Nominalization. Aur likhne ke baad do cheezein check karo \u2014 Genitiv par <b>-s</b> laga hai, aur ek hi sentence mein teen se zyada Genitiv attributes to nahi jud gaye?' }
  ],
  reading: {
    title: 'Amtlicher Bescheid: Bewilligung der Wohnbauförderung',
    titleEn: 'Reading A — Official notice: housing-subsidy approval',
    tokens: [
      { w: 'Die', role: 'r-nominalstil', en: 'the (fem. nom., nominal style opener)', hi: '', type: 'Article' },
      { w: 'Auswertung', role: 'r-verb-nomen', en: 'evaluation (verb-to-noun: "auswerten" → "die Auswertung")', hi: 'मूल्यांकन (verb-to-noun)', type: 'Noun · fem. (Satzende)' },
      { w: 'Ihres', role: 'plain', en: 'of your (neut. gen.)', hi: 'आपके', type: 'Possessivartikel · Gen.' },
      { w: 'Antrags', role: 'plain', en: 'application (Satzende)', hi: 'आवेदन का (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'abgeschlossen', role: 'plain', en: 'concluded (Satzende)', hi: 'पूर्ण (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Bewilligung', role: 'r-verb-nomen', en: 'approval (verb-to-noun: "bewilligen" → "die Bewilligung")', hi: 'मंज़ूरी', type: 'Noun · fem.' },
      { w: 'erfolgt', role: 'plain', en: 'takes place', hi: 'होती है', type: 'Verb (Präsens)' },
      { w: 'unter', role: 'r-legal-nomen', en: 'under (part of fixed administrative expression)', hi: '', type: 'Präposition · Dat.' },
      { w: 'Berücksichtigung', role: 'r-legal-nomen', en: 'consideration (Satzende, fixed administrative expression, "taking into account")', hi: 'ध्यान में रखते हुए (Satzende)', type: 'Noun · fem. (Satzende)', why: '"Unter Berücksichtigung" is a fixed administrative expression meaning "taking into account" (this chapter).' },
      { w: 'Ihres', role: 'plain', en: 'of your', hi: 'आपकी', type: 'Possessivartikel · Gen.' },
      { w: 'Haushaltseinkommens', role: 'plain', en: 'household income (Satzende)', hi: 'घरेलू आय (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'sowie', role: 'plain', en: 'as well as', hi: 'साथ ही', type: 'Konjunktion' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: '', type: 'Article · Gen.' },
      { w: 'Anzahl', role: 'plain', en: 'number', hi: 'संख्या', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: '', type: 'Article · Gen.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Haushalt', role: 'plain', en: 'household (Satzende)', hi: 'घर (Satzende)', type: 'Noun · masc.' },
      { w: 'lebenden', role: 'plain', en: 'living (Satzende)', hi: 'रहने वाले (Satzende)', type: 'Partizip I · Gen.' },
      { w: 'Personen', role: 'plain', en: 'persons (Satzende)', hi: 'व्यक्तियों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Auszahlung', role: 'r-verb-nomen', en: 'disbursement (verb-to-noun: "auszahlen" → "die Auszahlung")', hi: 'भुगतान', type: 'Noun · fem.' },
      { w: 'erfolgt', role: 'plain', en: 'takes place (Satzende)', hi: 'होगा (Satzende)', type: 'Verb (Präsens)' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'Eingang', role: 'plain', en: 'receipt (Satzende)', hi: 'प्राप्ति (Satzende)', type: 'Noun · masc.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: '', type: 'Article · Gen.' },
      { w: 'unterschriebenen', role: 'plain', en: 'signed (Satzende)', hi: 'हस्ताक्षरित (Satzende)', type: 'Partizip II · Gen.' },
      { w: 'Bestätigung', role: 'plain', en: 'confirmation (Satzende)', hi: 'पुष्टि (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The evaluation of your application is concluded. The approval takes place taking into account your household income as well as the number of persons living in the household. Disbursement takes place after receipt of the signed confirmation.',
    comprehension: [
      { q: 'Woher stammt "die Auswertung"?', options: ['Verb-zu-Nomen-Nominalisierung von "auswerten"', 'Adjektiv-zu-Nomen', 'Infinitiv-Nominalisierung'], answer: 0 },
      { q: 'Welche Funktion hat "unter Berücksichtigung"?', options: ['Feste administrative Nominalphrase', 'Umgangssprachlicher Ausdruck', 'Frage'], answer: 0 },
      { q: 'Warum verwendet der Bescheid so viele Nominalisierungen?', options: ['Für sachliche, verbindliche Amtssprache', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Verwaltungstext', titleEn: 'Reading B — Administrative text',
    tokens: [
      { w: 'Nach', role: 'r-legal-nomen', en: 'after (part of fixed administrative expression)', hi: '(fixed administrative expression)', type: 'Präposition · Dat.' },
      { w: 'Abschluss', role: 'r-legal-nomen', en: 'completion (Satzende, fixed administrative expression, "after completion of")', hi: 'poora hone ke baad (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: '(iske hissa)', type: 'Article · Gen.' },
      { w: 'Prüfung', role: 'plain', en: 'examination (Satzende)', hi: 'pareeksha ke (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'erfolgt', role: 'plain', en: 'takes place', hi: 'hota hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'r-verb-nomen', en: 'the (fem. nom., verb-to-noun transformation)', hi: '(verb-to-noun transformation)', type: 'Article' },
      { w: 'Benachrichtigung', role: 'r-verb-nomen', en: 'notification (Satzende, "benachrichtigen" → "die Benachrichtigung")', hi: 'suchna (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: '(iske hissa)', type: 'Article · Gen.' },
      { w: 'Kandidaten', role: 'plain', en: 'candidates (Satzende)', hi: 'ummeedvaaron ki (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'After completion of the examination, the notification of the candidates takes place.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_024_L001', speaker: 'Marte', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, unsere Betreuerin meinte, die Analyse der Dokumente müsse noch gründlicher erfolgen.', en: 'Timo, our supervisor said the analysis of the documents needs to be more thorough.' },
      { id: 'C1_024_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehe. Und die Notwendigkeit einer weiteren Prüfung hat sie auch erwähnt, oder?', en: 'I see. And she also mentioned the necessity of a further review, right?' },
      { id: 'C1_024_L003', speaker: 'Marte', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, aber ich frage mich, ob der Nominalstil hier wirklich die Klarheit erhöht oder sie eher verschleiert.', en: 'Exactly, but I wonder whether the nominal style here really increases clarity or rather obscures it.' },
      { id: 'C1_024_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ein berechtigter Einwand — vielleicht formulieren wir manche Sätze doch wieder als Verbsätze.', en: 'A valid objection — maybe we\'ll phrase some sentences as verb clauses again after all.' }
    ],
    transcript: 'Timo, unsere Betreuerin meinte, die Analyse der Dokumente müsse noch gründlicher erfolgen. Verstehe. Und die Notwendigkeit einer weiteren Prüfung hat sie auch erwähnt, oder? Genau, aber ich frage mich, ob der Nominalstil hier wirklich die Klarheit erhöht oder sie eher verschleiert. Ein berechtigter Einwand — vielleicht formulieren wir manche Sätze doch wieder als Verbsätze.',
    translation: 'Timo, our supervisor said the analysis of the documents needs to be more thorough. I see. And she also mentioned the necessity of a further review, right? Exactly, but I wonder whether the nominal style here really increases clarity or rather obscures it. A valid objection — maybe we\'ll phrase some sentences as verb clauses again after all.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'unsere' },
      { w: 'Betreuerin' },
      { w: 'meinte' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Analyse' },
      { w: 'der' },
      { w: 'Dokumente' },
      { w: 'müsse' },
      { w: 'noch' },
      { w: 'gründlicher' },
      { w: 'erfolgen' },
      { w: '.', plain: true },
      { w: 'Verstehe' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Notwendigkeit' },
      { w: 'einer' },
      { w: 'weiteren' },
      { w: 'Prüfung' },
      { w: 'hat' },
      { w: 'sie' },
      { w: 'auch' },
      { w: 'erwähnt' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'ich' },
      { w: 'frage' },
      { w: 'mich' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'der' },
      { w: 'Nominalstil' },
      { w: 'hier' },
      { w: 'wirklich' },
      { w: 'die' },
      { w: 'Klarheit' },
      { w: 'erhöht' },
      { w: 'oder' },
      { w: 'sie' },
      { w: 'eher' },
      { w: 'verschleiert' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'berechtigter' },
      { w: 'Einwand' },
      { w: '—', plain: true },
      { w: 'vielleicht' },
      { w: 'formulieren' },
      { w: 'wir' },
      { w: 'manche' },
      { w: 'Sätze' },
      { w: 'doch' },
      { w: 'wieder' },
      { w: 'als' },
      { w: 'Verbsätze' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat der Betreuer über die Analyse gesagt?', qEn: 'What did the supervisor say about the analysis?', options: ['sie sei ausreichend', 'sie müsse gründlicher erfolgen', 'sie sei überflüssig', 'sie sei fertig'], optionsEn: ['that it is sufficient', 'that it needs to be done more thoroughly', 'that it is superfluous', 'that it is finished'], answer: 1,
        explain: '"… die Analyse der Dokumente müsse noch gründlicher erfolgen."' },
      { q: 'Was hinterfragt Marte am Nominalstil?', qEn: 'What does Marte question about the nominal style?', options: ['ob es zu teuer ist', 'ob es die Klarheit erhöht oder verschleiert', 'ob es zu lang ist', 'ob es korrekt ist'], optionsEn: ['whether it is too expensive', 'whether it increases clarity or obscures it', 'whether it is too long', 'whether it is correct'], answer: 1,
        explain: '"… ob der Nominalstil hier wirklich die Klarheit erhöht oder sie eher verschleiert."' }
    ]
  },
  speaking: [
    { task: "Die Betreuerin will die Analyse gründlicher. Gib es Timo weiter.", taskEn: "The supervisor wants the analysis more thorough. Pass it on to Timo.", de: "Die Analyse der Dokumente müsse noch gründlicher erfolgen.", en: "The analysis of the documents must be carried out more thoroughly, she said." },
    { task: "Timo fragt, wie sie die Notwendigkeit einer Prüfung begründet hat.", taskEn: "Timo asks how she justified the need for a review.", de: "Die Notwendigkeit einer weiteren Prüfung hat sie mit der Datenlage begründet.", en: "She justified the need for a further review with the state of the data." },
    { task: "Ein Gutachter fragt, womit jede Entscheidung im Projekt beginnt.", taskEn: "A reviewer asks how every decision in the project begins.", de: "Das Abwägen der Risiken steht am Anfang jeder Entscheidung.", en: "Weighing the risks comes at the start of every decision." },
    { task: "Deine Betreuerin findet den Text schwer lesbar. Antworte fachlich.", taskEn: "Your supervisor finds the text hard to read. Answer professionally.", de: "Zu viele Nominalisierungen erschweren das Lesen; ich löse zwei davon auf.", en: "Too many nominalisations make reading harder; I'll unpack two of them." },
    { task: "Ein Praktikant fragt, warum der Bericht so objektiv klingt.", taskEn: "An intern asks why the report sounds so objective.", de: "Die Durchführung erfolgte im Mai klingt objektiver als wir haben es im Mai gemacht.", en: "'The implementation took place in May' sounds more objective than 'we did it in May'." }
  ],
  writing: {
    prompt: 'TASK 1 — Transformation (150 words): Transform verbal sentences into authentic nominal style and explain why each transformation improves or weakens the text.\n\nTASK 2 — Academic report (350 words): Naturally use nominalization while maintaining readability, consciously balancing verbal style, nominal style, participial attributes, and complex noun phrases.',
    starters: ['Die Analyse der Daten durch die Forscher zeigt ein klares Muster.', 'Die Entwicklung neuer Methoden erfordert die Durchführung mehrerer Testreihen.'],
    placeholder: 'Die Notwendigkeit einer größeren Stichprobe wurde deutlich. Die Durchführung der Studie...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'What is the nominalization of "analysieren"?', options: ['die Analyse', 'die Analytik', 'der Analyst'], answer: 0, explain: '"Analysieren" (verb) becomes "die Analyse" (noun), the standard verb-to-noun nominalization.' },
    gap: { sentence: ['Wir müssen die ', ' einer größeren Stichprobe erklären.'], gaps: [ { answer: 'Notwendigkeit', accepts: ['Notwendigkeit'] } ], explain: '"Notwendig" (adjective) becomes "die Notwendigkeit" (noun) — adjective-to-noun nominalization.' },
    match: { q: 'Match each nominalization type to its example.', pairs: [ { noun: 'analysieren → die Analyse', art: 'Verb-to-noun' }, { noun: 'notwendig → die Notwendigkeit', art: 'Adjective-to-noun' }, { noun: 'abwägen → das Abwägen', art: 'Infinitive nominalization' }, { noun: 'unter Berücksichtigung aller Aspekte', art: 'Fixed administrative expression' } ] },
    builder: { target: 'Build: "The analysis of the data by the researchers." (nominal style)', bank: ['Die', 'Analyse', 'der', 'Daten', 'durch', 'die', 'Forscher', '.'], answer: ['Die', 'Analyse', 'der', 'Daten', 'durch', 'die', 'Forscher', '.'], roles: { 'Analyse': 'r-nominalstil' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Forscher machen die Analysierung der Daten durch.', right: 'Die Analyse der Daten erfolgt durch die Forscher.', explain: '"Analysierung" is not a real German noun — the correct nominalization of "analysieren" is "die Analyse".' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for nominalization?', options: ['It turns actions into concepts, shifting focus from who does something to the action itself', 'It only changes verb tense', 'It replaces all verbs with adjectives'], answer: 0, explain: 'Nominalization shifts the sentence focus from an agent doing something to the action or concept itself.' },
    { q: 'What is the nominalization of "notwendig"?', options: ['die Notwendigkeit', 'die Notwendung', 'der Notwendige'], answer: 0, explain: '"Notwendig" (adjective) becomes "die Notwendigkeit" (necessity).' },
    { q: 'What is "das Abwägen" an example of?', options: ['Infinitive nominalization', 'Verb-to-noun nominalization', 'Adjective-to-noun nominalization'], answer: 0, explain: 'Infinitives used as capitalized neuter nouns are a distinct nominalization type.' },
    { q: 'What is the risk of over-nominalization?', options: ['Making texts unreadably bureaucratic', 'Making texts too informal', 'Making texts too short'], answer: 0, explain: 'Excessive nominal style harms readability even in formal writing.' },
    { q: 'Which register relies most heavily on fixed nominal expressions?', options: ['Administrative and legal German', 'Casual conversation', 'They are all identical'], answer: 0, explain: 'Administrative/legal German uses fixed nominal phrases like "unter Berücksichtigung" and "nach Abschluss" extensively.' }
  ],
  takeaways: [
    { c: 'r-verb-nomen', html: 'Verb-to-noun nominalization (analysieren → die Analyse) shifts focus from agent to action, increasing objectivity.' },
    { c: 'r-adjektiv-nomen', html: 'Adjective-to-noun nominalization (notwendig → die Notwendigkeit) creates abstract nouns common in academic argumentation.' },
    { c: 'r-uebernominalisierung', html: 'Over-nominalization makes texts bureaucratic and hard to read — C1 writers balance nominal and verbal style deliberately.' }
  ],
  revisionTips: [
    'Take five verbal sentences and transform each into nominal style, then evaluate whether the transformation improved or weakened readability.',
    'Find a German legal or administrative text and list every fixed nominal expression (nach Abschluss, unter Berücksichtigung, im Falle einer...).',
    'Practise infinitive nominalization by writing three sentences using das Lernen, das Verstehen, or das Forschen as the grammatical subject.'
  ]
};
window.CHAPTER = CHAPTER;
