/* KLARWEG CHAPTER DATA — C2 · Chapter 16
   "Nominalisierte Adjektive und Partizipien" (C2) — native-level
   mastery of nominalized adjectives/participles for abstraction,
   institutional precision, and information density. NOT adjective
   declension, capitalization, or basic nominalization mechanics
   (already mastered A2/B2, C1 Ch22, C2 Ch15). Uploaded vocab list
   supplied only 2 explicit words (der Abgeordnete, der Angeklagte);
   vocabulary section supplements with the brief's own worked examples
   (die Betroffenen, die Studierenden, das Wesentliche, etc.) to give
   full register coverage. Dialogue: Ilse and Timo ONLY. */
const CHAPTER = {
  id: 'c2-16-nominalisierte-adjektive-und-partizipien',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 16,
  title: 'Nominalisierte Adjektive und Partizipien',
  titleEn: 'Nominalised adjectives and participles',
  description: 'Adjectives are labels attached to people. Nominalization removes the person and keeps only the label. Instead of "people who are injured," German simply says die Verletzten.',
  xp: 1600, time: 145, difficulty: 'Mastery',
  nextChapter: { number: 17, title: 'Adjektivdeklination auf C2-Niveau', titleEn: 'Adjective declension at native level' , href: 'chapter-c2-17-adjektivdeklination-auf-c2-niveau.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Keep the <em>label</em>, drop the person.',
    intro: 'Editing a government policy paper in a courtroom setting, Ilse counts the interviewees and injured people already waiting, and Timo asks who\'s responsible for the protocol — nominalized adjectives and participles keeping the label, dropping the person.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers nominalize adjectives and participles to talk about concepts and categories instead of individuals'],
    scene: 'Überarbeitung eines Regierungspolitikpapiers',
    femaleSpeakers: ['Ilse'],
    dialogue: [
      { speaker: 'Ilse', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Angeklagte', role: 'r-subject', en: 'defendant', hi: 'अभियुक्त', pron: 'AN-ge-klahk-tuh', type: 'Noun · masc. (nominalisiertes Partizip)', why: 'der Angeklagte = the (male) defendant, a Partizip II used as a noun (recycled C1).', ex: 'der Angeklagte' },
        { w: 'wartet', role: 'r-verb', en: 'waits', hi: 'इंतज़ार कर रहा है', pron: 'VAR-tet', type: 'Verb · warten' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RITES', type: 'Adverb' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Gerichtssaal', role: 'r-dativ', en: 'courtroom (dat.)', hi: 'अदालत में', pron: 'ge-RIKHTS-zahl', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'The defendant is already waiting in the courtroom.', hi: 'Abhiyukt pehle se adaalat mein intezaar kar raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'viele', role: 'r-subject', en: 'many', hi: 'कितने', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Betroffene', role: 'r-subject', en: 'affected people', hi: 'प्रभावित लोग', pron: 'be-TRO-fe-nuh', type: 'Noun · plural (nominalisiertes Partizip)', why: 'die Betroffenen = the affected people, a Partizip II used as a noun (this chapter).', ex: 'die Betroffenen' },
        { w: 'gibt', role: 'r-verb', en: 'are there', hi: 'हैं', pron: 'geept', type: 'Verb · geben' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Fall', role: 'r-dativ', en: 'case (dat.)', hi: 'मामले में', pron: 'fal', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'How many affected people are there in this case?', hi: 'Is maamle mein kitne prabhavit log hain?' },
      { speaker: 'Ilse', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'हैं', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'drei', role: 'r-akkusativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Befragte', role: 'r-akkusativ', en: 'interviewees', hi: 'साक्षात्कृत लोग', pron: 'be-FRAHK-tuh', type: 'Noun · plural (nominalisiertes Partizip)', why: 'die Befragten = the interviewees, a Partizip II used as a noun (this chapter).', ex: 'die Befragten' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number' },
        { w: 'Verletzte', role: 'r-akkusativ', en: 'injured people', hi: 'घायल लोग', pron: 'fer-LETS-tuh', type: 'Noun · plural (nominalisiertes Partizip, recycled C1)' },
        { w: '.', plain: true }
      ], en: 'We have three interviewees and two injured people.', hi: 'Hamaare paas teen saakshaatkrit log aur do ghaayal log hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wer', role: 'r-subject', en: 'who', hi: 'कौन', pron: 'vair', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Protokoll', role: 'r-akkusativ', en: 'protocol', hi: 'प्रोटोकॉल', pron: 'pro-to-KOL', type: 'Noun · neut.' },
        { w: 'verantwortlich', role: 'r-akkusativ', en: 'responsible', hi: 'ज़िम्मेदार', pron: 'fer-ANT-vort-likh', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Who is responsible for the protocol?', hi: 'Prottokol ke liye kaun zimmedaar hai?' },
      { speaker: 'Ilse', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Verantwortlichen', role: 'r-subject', en: 'responsible parties', hi: 'ज़िम्मेदार लोग', pron: 'fer-ANT-vort-li-khen', type: 'Noun · plural (nominalisiertes Adjektiv)', why: 'die Verantwortlichen = the responsible parties, a nominalized adjective (this chapter).', ex: 'die Verantwortlichen' },
        { w: 'sitzen', role: 'r-verb', en: 'sit', hi: 'बैठे हैं', pron: 'ZIT-sen', type: 'Verb · sitzen' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RITES', type: 'Adverb' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition + dative' },
        { w: 'ihren', role: 'r-dativ', en: 'their (pl. dat.)', hi: 'अपनी', pron: 'EE-ren', type: 'Possessive · dative' },
        { w: 'Plätzen', role: 'r-dativ', en: 'seats (dat.)', hi: 'सीटों पर', pron: 'PLET-sen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'The responsible parties are already sitting on their seats.', hi: 'Zimmedaar log pehle se apni seaton par baithe hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Was', role: 'r-subject', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमारे लिए', pron: 'uns', type: 'Pronoun · acc.' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Entscheidende', role: 'r-subject', en: 'decisive point', hi: 'निर्णायक बात', pron: 'ent-SHY-den-duh', type: 'Noun · neut. (nominalisiertes Partizip)', why: 'das Entscheidende = the decisive point/what matters most, a Partizip I used as a noun (this chapter).', ex: 'das Entscheidende' }
      ], en: 'Good. What is the decisive point for us?', hi: 'Achha. Hamaare liye nirnaayak baat kya hai?' },
      { speaker: 'Ilse', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Wesentliche', role: 'r-subject', en: 'essential thing', hi: 'मुख्य बात', pron: 'VAY-zent-li-khuh', type: 'Noun · neut. (nominalisiertes Adjektiv, recycled C1)' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Beweislage', role: 'r-subject', en: 'evidence situation', hi: 'साक्ष्य स्थिति', pron: 'be-VYSE-lah-guh', type: 'Noun · fem.' },
        { w: 'klar', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'klahr', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The essential thing is that the evidence situation is clear.', hi: 'Mukhya baat yeh hai ki saakshya sthiti spasht hai.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Adjectives are <span class="de r-etikett-metapher">labels</span> attached to people — nominalization removes the person and keeps only the label.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is NOMINALISIERTE ADJEKTIVE UND PARTIZIPIEN at C2 level — native-level mastery of nominalized adjectives and participles for ABSTRACTION, INSTITUTIONAL PRECISION, and information density, NOT adjective declension, capitalization rules, or basic nominalization mechanics (already fully mastered A2/B2, C1 Ch22, C2 Ch15). Covered: the description → concept → category → institutional language → abstract thinking model, comparing "die armen Menschen" (descriptive) with "die Armen" (nominalized adjective, human category) and "die Bedürftigen" (nominalized participle, more abstract/formal); the distinction between human reference (der Verletzte, die Studierenden), abstract reference (das Wesentliche, das Entscheidende), and institutional categories; academic nominalizations (die Befragten, die Beteiligten, die Verantwortlichen, das Wesentliche); scientific participant-labeling (die Versuchspersonen, die Getesteten, die Untersuchten, die Betroffenen); legal/administrative terminology (die Angeklagten, die Beschuldigten, die Berechtigten, die Verpflichteten, der Abgeordnete); journalism (die Verletzten, die Vermissten, die Festgenommenen); and the stylistic progression from "die Menschen, die betroffen sind" → "die Betroffenen" → "die unmittelbar Betroffenen" → "die am stärksten Betroffenen". The most important things to catch: translating English literally instead of using authentic German nominalized forms; overusing nominalization until the text becomes cold or overly abstract for its context; confusing human reference (der/die + adjective, referring to people) with abstract/neuter reference (das + adjective, referring to concepts); using an institutional nominalization in casual writing, or a casual descriptive phrase in legal/administrative writing; redundant wording that combines a nominalized form with the very clause it replaces (e.g. "die Betroffenen, die betroffen sind"). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag literal English-to-German translation instead of authentic nominalization; flag nominalization overuse in contexts that call for warmer, more personal language; flag confusion between human (der/die) and abstract (das) nominalized reference; flag register-mismatched nominalized forms; flag redundant wording. Do NOT flag basic adjective ending/declension errors as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around abstraction/register). If none: <li>No errors — well done.</li> 3) <p><b>Label check:</b> one sentence on whether the learner keeps just the "label" (concept) where appropriate, rather than over-describing with full clauses.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you nominalize deliberately, keeping the label where it earns its place. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Abstraction Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: adjectives are labels attached to people, and nominalization keeps only the label.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Betroffenen', role: 'r-nominalisiertes-adjektiv' }, { w: 'erhalten', role: 'plain' }, { w: 'finanzielle', role: 'plain' }, { w: 'Unterstützung', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: adjectives are labels attached to people; nominalization keeps only the label.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Ilse and Timo edit a policy paper, nominalizing descriptive clauses for institutional style.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn key C2 nominalized adjectives/participles (der Abgeordnete, der Angeklagte, die Betroffenen, das Wesentliche, etc.) — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master human vs. abstract reference, and register-based nominalization across academic, scientific, legal, and journalistic German.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic research article, government regulation, and editorial for nominalization style.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominalizations, abstraction, and institutional language in a lecture, briefing, and news report.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice explaining abstract concepts and reformulating descriptive expressions at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite descriptive clauses, edit for abstraction, and write a 600-word policy paper.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill nominalization transformation, human vs. abstract reference, and register selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1600 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter nominalized adjectives and participles with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Nominalization transformation, register selection, and information compression drills, plus the full 600-word policy paper task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Abstraction Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'die Betroffenen', text: 'Nominalize a participle to replace a full descriptive clause' },
    { de: 'der Abgeordnete', text: 'Use a nominalized adjective for an institutional human category' },
    { de: 'der Angeklagte', text: 'Use legal nominalized terminology precisely' },
    { de: 'das Wesentliche', text: 'Distinguish abstract (das) reference from human (der/die) reference' },
    { de: 'Das Etikett, nicht die Person.', text: 'Understand the chapter\'s core "label" metaphor for nominalization' }
  ],
  vocab: [
    { de: 'der Abgeordnete', art: 'der', gender: 'm', plural: 'Abgeordneten', pos: 'nominalized adjective (human reference)', level: 'C2', register: 'political/legal', en: 'the (elected) representative, member of parliament', hi: 'निर्वाचित प्रतिनिधि, सांसद', synonyms: 'der Parlamentarier', antonyms: null, ex: 'Der Abgeordnete stimmte gegen den Gesetzentwurf.', exEn: 'The representative voted against the bill.', exHi: 'Sansad ne bill ke khilaaf vote diya.', ex2: 'Mehrere Abgeordnete forderten eine Debatte im Plenum.', ex2En: 'Several representatives demanded a debate in the plenary.', ex2Hi: 'Kai sansadon ne plenary mein behes ki maang ki.' },
    { de: 'der Angeklagte', art: 'der', gender: 'm', plural: 'Angeklagten', pos: 'nominalized participle (Partizip II, legal human reference)', level: 'C2', register: 'legal', en: 'the accused, the defendant', hi: 'आरोपी', synonyms: 'der Beschuldigte', antonyms: null, ex: 'Der Angeklagte plädierte auf nicht schuldig.', exEn: 'The accused pleaded not guilty.', exHi: 'Aaropi ne khud ko dosh se inkaar kiya.', ex2: 'Die Rechte des Angeklagten müssen jederzeit gewahrt bleiben.', ex2En: 'The rights of the accused must be protected at all times.', ex2Hi: 'Aaropi ke adhikaaron ki har samay raksha honi chahiye.' },
    { de: 'die Betroffenen', art: 'die', gender: 'pl', pos: 'nominalized participle (Partizip II, plural)', level: 'C2', register: 'academic/administrative/journalism', en: 'those affected', hi: 'प्रभावित लोग', synonyms: 'die Geschädigten', antonyms: null, ex: 'Die Betroffenen erhalten finanzielle Unterstützung.', exEn: 'Those affected receive financial support.', exHi: 'Prabhaavit logon ko aarthik sahaayata milti hai.', ex2: 'Die am stärksten Betroffenen wurden zuerst evakuiert.', ex2En: 'Those most affected were evacuated first.', ex2Hi: 'Sabse zyaada prabhaavit logon ko pehle evacuate kiya gaya.' },
    { de: 'die Studierenden', art: 'die', gender: 'pl', pos: 'nominalized participle (Partizip I, plural, gender-neutral)', level: 'C2', register: 'academic', en: 'the students (gender-neutral)', hi: 'विद्यार्थी (लिंग-तटस्थ)', synonyms: 'die Studenten', antonyms: null, ex: 'Die Studierenden reichten ihre Arbeiten fristgerecht ein.', exEn: 'The students submitted their papers on time.', exHi: 'Vidyaarthiyon ne apne kaam samay par jama kiye.', ex2: 'Ein Großteil der Studierenden nahm an der Umfrage teil.', ex2En: 'A large proportion of the students participated in the survey.', ex2Hi: 'Vidyaarthiyon ke ek bade hisse ne survey mein bhaag liya.' },
    { de: 'das Wesentliche', art: 'das', gender: 'n', pos: 'nominalized adjective (abstract/neuter reference)', level: 'C2', register: 'academic/formal', en: 'the essential (thing/point)', hi: 'सार, मूल तत्व', synonyms: 'der Kern', antonyms: 'das Nebensächliche', ex: 'Der Bericht konzentriert sich auf das Wesentliche.', exEn: 'The report focuses on the essential.', exHi: 'Report saar par focus karti hai.', ex2: 'Sie fasste das Wesentliche in wenigen Sätzen zusammen.', ex2En: 'She summarized the essential in a few sentences.', ex2Hi: 'Usne saar ko kuch vaakyon mein saaraansh kiya.' },
    { de: 'das Entscheidende', art: 'das', gender: 'n', pos: 'nominalized adjective (abstract/neuter reference)', level: 'C2', register: 'academic/formal', en: 'the decisive (thing/factor)', hi: 'निर्णायक तत्व', synonyms: 'der ausschlaggebende Faktor', antonyms: null, ex: 'Das Entscheidende ist die Qualität der Daten.', exEn: 'The decisive thing is the quality of the data.', exHi: 'Nirnayak tatva data ki quality hai.', ex2: 'Das Entscheidende an diesem Ansatz ist seine Flexibilität.', ex2En: 'The decisive thing about this approach is its flexibility.', ex2Hi: 'Is approach ka nirnayak tatva uski flexibility hai.' },
    { de: 'die Befragten', art: 'die', gender: 'pl', pos: 'nominalized participle (Partizip II, plural, scientific/academic)', level: 'C2', register: 'academic/scientific', en: 'the (survey) respondents', hi: 'सर्वेक्षण में शामिल लोग', synonyms: 'die Teilnehmenden', antonyms: null, ex: 'Die Mehrheit der Befragten stimmte der Aussage zu.', exEn: 'The majority of respondents agreed with the statement.', exHi: 'Zyaadaatar respondents ne is statement se sahmati jataayi.', ex2: 'Die Befragten wurden anonym behandelt.', ex2En: 'The respondents were treated anonymously.', ex2Hi: 'Respondents ko anonymous roop se treat kiya gaya.' },
    { de: 'die Beteiligten', art: 'die', gender: 'pl', pos: 'nominalized participle (Partizip II, plural)', level: 'C2', register: 'academic/legal/professional', en: 'those involved, the parties involved', hi: 'शामिल पक्ष', synonyms: 'die Parteien', antonyms: null, ex: 'Alle Beteiligten wurden über die Entscheidung informiert.', exEn: 'All parties involved were informed about the decision.', exHi: 'Sabhi shaamil pakshon ko faisle ke baare mein bataaya gaya.', ex2: 'Die Beteiligten einigten sich auf einen Kompromiss.', ex2En: 'The parties involved agreed on a compromise.', ex2Hi: 'Shaamil pakshon ne ek samjhauta kar liya.' },
    { de: 'die Verantwortlichen', art: 'die', gender: 'pl', pos: 'nominalized adjective (plural, human category)', level: 'C2', register: 'academic/legal/journalism', en: 'those responsible', hi: 'ज़िम्मेदार लोग', synonyms: 'die Zuständigen', antonyms: null, ex: 'Die Verantwortlichen müssen sich der Kritik stellen.', exEn: 'Those responsible must face the criticism.', exHi: 'Zimmedaar logon ko aalochana ka saamna karna hoga.', ex2: 'Die Verantwortlichen wurden zur Rechenschaft gezogen.', ex2En: 'Those responsible were held accountable.', ex2Hi: 'Zimmedaar logon ko jawaabdeh thehraaya gaya.' },
    { de: 'die Verletzten', art: 'die', gender: 'pl', pos: 'nominalized adjective (plural, journalism/medical)', level: 'C2', register: 'journalism/medical', en: 'the injured', hi: 'घायल लोग', synonyms: 'die Verwundeten', antonyms: null, ex: 'Die Verletzten wurden ins Krankenhaus gebracht.', exEn: 'The injured were taken to the hospital.', exHi: 'Ghaayal logon ko hospital le jaaya gaya.', ex2: 'Nach dem Unfall gab es mehrere Verletzte.', ex2En: 'After the accident there were several injured.', ex2Hi: 'Durghatna ke baad kai ghaayal log the.' },
    { de: 'die Festgenommenen', art: 'die', gender: 'pl', pos: 'nominalized participle (Partizip II, plural, journalism/legal)', level: 'C2', register: 'journalism/legal', en: 'those arrested', hi: 'गिरफ्तार किए गए लोग', synonyms: 'die Verhafteten', antonyms: null, ex: 'Die Festgenommenen wurden zur Vernehmung gebracht.', exEn: 'Those arrested were taken for questioning.', exHi: 'Giraftaar kiye gaye logon ko poochtaachh ke liye le jaaya gaya.', ex2: 'Unter den Festgenommenen befand sich auch ein Minderjähriger.', ex2En: 'Among those arrested was also a minor.', ex2Hi: 'Giraftaar logon mein ek naabaalik bhi tha.' },
    { de: 'der/die Berechtigte', art: 'der/die', gender: 'm/f', plural: 'Berechtigten', pos: 'nominalized adjective (legal/administrative)', level: 'C2', register: 'legal/administrative', en: 'the entitled/authorized person', hi: 'अधिकृत व्यक्ति', synonyms: null, antonyms: 'der/die Unberechtigte', ex: 'Nur der Berechtigte darf die Zahlung entgegennehmen.', exEn: 'Only the authorized person may accept the payment.', exHi: 'Sirf adhikrit vyakti hi payment le sakta hai.', ex2: 'Die Berechtigten müssen sich innerhalb von vier Wochen melden.', ex2En: 'Those entitled must register within four weeks.', ex2Hi: 'Adhikrit logon ko chaar hafton ke andar register karna hoga.' },
    { de: 'der/die Verpflichtete', art: 'der/die', gender: 'm/f', plural: 'Verpflichteten', pos: 'nominalized participle (Partizip II, legal/administrative)', level: 'C2', register: 'legal/administrative', en: 'the obligated party', hi: 'बाध्य व्यक्ति', synonyms: null, antonyms: null, ex: 'Der Verpflichtete muss die Frist strikt einhalten.', exEn: 'The obligated party must strictly observe the deadline.', exHi: 'Baadhya vyakti ko deadline ka saktee se paalan karna hoga.', ex2: 'Die Verpflichteten wurden schriftlich informiert.', ex2En: 'The obligated parties were informed in writing.', ex2Hi: 'Baadhya logon ko likhit roop se soochit kiya gaya.' },
    { de: 'die Versuchspersonen', art: 'die', gender: 'pl', pos: 'compound noun (scientific participant label)', level: 'C2', register: 'scientific', en: 'the (experiment) test subjects', hi: 'प्रयोग विषय', synonyms: 'die Probanden', antonyms: null, ex: 'Die Versuchspersonen wurden zufällig zwei Gruppen zugeteilt.', exEn: 'The test subjects were randomly assigned to two groups.', exHi: 'Test subjects ko randomly do groups mein baanta gaya.', ex2: 'Alle Versuchspersonen gaben ihre Einwilligung.', ex2En: 'All test subjects gave their consent.', ex2Hi: 'Sabhi test subjects ne apni sahmati di.' }
  ],
  grammar: [
    { title: 'Warum Nominalisieren? (Why Nominalize?)', body: [ 'Description → Concept → Category → Institutional Language → Abstract Thinking. "die armen Menschen" (descriptive) → "die Armen" (nominalized adjective, human category) → "die Bedürftigen" (nominalized participle, more abstract/formal).' ], hinglish: 'Description → Concept → Category → Institutional Language → Abstract Thinking. "die armen Menschen" (descriptive) → "die Armen" (nominalized adjective) → "die Bedürftigen" (aur abstract/formal).' },
    { title: 'Menschliche vs. Abstrakte Referenz (Human vs. Abstract Reference)', body: [ 'der Verletzte (a specific injured man), die Studierenden (students, human plural) vs. das Bekannte / das Entscheidende (abstract concepts, neuter "das" reference — not people).' ], hinglish: 'der Verletzte (ek specific ghaayal aadmi), die Studierenden (students, human plural) vs. das Bekannte / das Entscheidende (abstract concepts, neuter "das" reference — log nahi).' },
    { title: 'Register-spezifische Nominalisierung (Register-Specific Nominalization)', body: [ 'Yeh forms har register mein bahut aati hain, aur news padhte waqt to har roz milengi \u2014 <span class="de">die Verletzten</span>, <span class="de">die Vermissten</span>, <span class="de">die Festgenommenen</span>. Dhyaan do ki inme se zyada-tar <b>Partizip II</b> se bane hain, kyunki yeh un logon ki baat karte hain jinke <b>saath</b> kuch hua. Aur <span class="de">die Studierenden</span> jaise Partizip I wale forms un logon ke liye hain jo khud kuch kar rahe hain.' ], hinglish: 'Yeh forms har register mein bahut aati hain, aur news padhte waqt to har roz milengi \u2014 <span class="de">die Verletzten</span>, <span class="de">die Vermissten</span>, <span class="de">die Festgenommenen</span>. Dhyaan do ki inme se zyada-tar <b>Partizip II</b> se bane hain, kyunki yeh un logon ki baat karte hain jinke <b>saath</b> kuch hua. Aur <span class="de">die Studierenden</span> jaise Partizip I wale forms un logon ke liye hain jo khud kuch kar rahe hain.' },
    { title: 'Nominalisierung vs. Vollständige Sätze (Nominalization vs. Full Clauses)', body: [ 'die Menschen, die betroffen sind → die Betroffenen → die unmittelbar Betroffenen → die am stärksten Betroffenen. Each step increases abstraction and formality while preserving precision.' ], hinglish: 'Ek hi baat chaar tarah se kahi jaa sakti hai, aur har step chhota aur zyada formal hota jaata hai. Dhyaan dene layak baat yeh hai ki nominalized form par bhi modifiers lag sakte hain \u2014 <span class="de">die unmittelbar Betroffenen</span>, <span class="de">die am st\u00e4rksten Betroffenen</span> \u2014 aur woh uske <b>aage</b> aate hain, bilkul normal adjective ki tarah.' },
    {
      title: 'Die Endung \u00e4ndert sich weiter',
      body: [
        'This is the point that decides whether the form is right, and the chapter never states it: a nominalized adjective is capitalised like a noun, but it keeps declining like an adjective.',
        'So the ending changes with gender, case and \u2014 crucially \u2014 with the kind of word in front of it.'
      ],
      table: {
        head: ['Article', 'masc.', 'fem. / plural'],
        rows: [
          ['der / die (weak)', '<span class="de">der Betroffen<b>e</b></span>', '<span class="de">die Betroffen<b>en</b></span>'],
          ['ein (mixed)', '<span class="de">ein Betroffen<b>er</b></span>', '<span class="de">eine Betroffen<b>e</b></span>'],
          ['no article (strong)', '<span class="de">Betroffen<b>er</b></span>', '<span class="de">Betroffen<b>e</b></span>'],
          ['after viele / einige', '\u2014', '<span class="de">viele Betroffen<b>e</b></span>'],
          ['Dativ', '<span class="de">dem Betroffen<b>en</b></span>', '<span class="de">den Betroffen<b>en</b></span>'],
          ['abstract with das', '<span class="de">das Wesentlich<b>e</b></span>', 'after etwas/nichts \u2192 <span class="de">nichts Neu<b>es</b></span>']
        ]
      },
      note: 'Two traps: after <b>etwas</b> and <b>nichts</b> the ending is <b>-es</b> (<i>etwas Gutes</i>, <i>nichts Neues</i>), and if a noun follows, the word is still an adjective and stays lower case \u2014 <i>der angeklagte Mann</i> but <i>der Angeklagte</i>.',
      hinglish: 'Yahi woh point hai jo tay karta hai ki form sahi hai ya nahi \u2014 aur chapter ise kabhi batata nahi. Nominalized adjective <b>noun ki tarah capital</b> hota hai, par <b>adjective ki tarah decline</b> hota rehta hai. Matlab uski ending gender, case aur \u2014 sabse zyada \u2014 aage wale shabd ke hisaab se badalti hai. <span class="de">der Betroffene</span>, par <span class="de">ein Betroffen<b>er</b></span>, aur Dativ mein <span class="de">dem Betroffen<b>en</b></span>. Do trap alag se yaad rakho: <b>viele</b> ya <b>einige</b> ke baad plural mein <b>-e</b> aata hai (<span class="de">viele Betroffene</span>), aur <b>etwas</b> ya <b>nichts</b> ke baad <b>-es</b> (<span class="de">nichts Neues</span>). Aur agar aage noun aa raha hai, to woh shabd abhi bhi adjective hai \u2014 chhote akshar se: <span class="de">der angeklagte Mann</span>, par <span class="de">der Angeklagte</span>.'
    },
    {
      title: 'Die Endung \u00e4ndert sich weiter',
      body: [
        'This is the point that decides whether the form is right: a nominalized adjective is capitalised like a noun, but it keeps declining like an adjective.',
        'So the ending changes with gender, case and \u2014 crucially \u2014 with the kind of word in front of it.'
      ],
      table: {
        head: ['Article', 'masc.', 'fem. / plural'],
        rows: [
          ['der / die (weak)', '<span class="de">der Betroffen<b>e</b></span>', '<span class="de">die Betroffen<b>en</b></span>'],
          ['ein (mixed)', '<span class="de">ein Betroffen<b>er</b></span>', '<span class="de">eine Betroffen<b>e</b></span>'],
          ['no article (strong)', '<span class="de">Betroffen<b>er</b></span>', '<span class="de">Betroffen<b>e</b></span>'],
          ['after viele / einige', '\u2014', '<span class="de">viele Betroffen<b>e</b></span>'],
          ['Dativ', '<span class="de">dem Betroffen<b>en</b></span>', '<span class="de">den Betroffen<b>en</b></span>'],
          ['abstract with das', '<span class="de">das Wesentlich<b>e</b></span>', 'after etwas/nichts \u2192 <span class="de">nichts Neu<b>es</b></span>']
        ]
      },
      note: 'Two traps: after <b>etwas</b> and <b>nichts</b> the ending is <b>-es</b> (<i>etwas Gutes</i>, <i>nichts Neues</i>), and if a noun follows, the word is still an adjective and stays lower case \u2014 <i>der angeklagte Mann</i> but <i>der Angeklagte</i>.',
      hinglish: 'Yahi woh point hai jo tay karta hai ki form sahi hai ya nahi. Nominalized adjective <b>noun ki tarah capital</b> hota hai, par <b>adjective ki tarah decline</b> hota rehta hai. Matlab uski ending gender, case aur \u2014 sabse zyada \u2014 aage wale shabd ke hisaab se badalti hai. <span class="de">der Betroffene</span>, par <span class="de">ein Betroffen<b>er</b></span>, aur Dativ mein <span class="de">dem Betroffen<b>en</b></span>. Do trap alag se yaad rakho: <b>viele</b> ya <b>einige</b> ke baad plural mein <b>-e</b> aata hai, aur <b>etwas</b> ya <b>nichts</b> ke baad <b>-es</b> (<span class="de">nichts Neues</span>). Aur agar aage noun aa raha hai to woh shabd abhi bhi adjective hai \u2014 chhote akshar se: <span class="de">der angeklagte Mann</span>, par <span class="de">der Angeklagte</span>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to its main function and preferred register.' ], table: { head: ['Structure', 'Main Function', 'Preferred Register'], rows: [ ['Nominalized Adjective', 'Human Category', 'General, Journalism'], ['Nominalized Partizip I', 'Ongoing Role', 'Academic'], ['Nominalized Partizip II', 'Resulting Status', 'Legal'], ['Abstract Nominalization', 'Concept Formation', 'Academic'], ['Institutional Nominalization', 'Administrative Precision', 'Law & Government'] ] }, hinglish: 'Structure, function aur register ka table \u2014 par form chunne ke baad ending zaroor check karo, kyunki asli galtiyan wahin hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'All six are about the same thing: these words are nouns in function but adjectives in form. Capitalise them, give them an article \u2014 and keep declining them.' ], mistakes: [
      { wrong: 'Die betroffenen wurden informiert.', right: 'Die Betroffenen wurden informiert.', why: 'Once the adjective takes over the noun\u2019s job it IS a noun \u2014 so it is capitalised.' },
      { wrong: 'Ein Verletzter kam ins Krankenhaus; dem Verletzte geht es besser.', right: 'Ein Verletzter kam ins Krankenhaus; dem Verletzten geht es besser.', why: 'The ending still changes with the case \u2014 after <i>dem</i> the weak ending is <b>-en</b>.' },
      { wrong: 'Wesentliche ist die Genauigkeit.', right: 'Das Wesentliche ist die Genauigkeit.', why: 'An abstract nominalization needs its article: <b>das</b> Wesentliche, <b>das</b> Entscheidende.' },
      { wrong: 'Viele Betroffenen haben sich gemeldet.', right: 'Viele Betroffene haben sich gemeldet.', why: 'After <i>viele</i> the strong plural ending is <b>-e</b>, not <b>-en</b> \u2014 <i>viele</i> is not a definite article.' },
      { wrong: 'Es wurde nichts Neue festgestellt.', right: 'Es wurde nichts Neues festgestellt.', why: 'After <b>etwas</b> and <b>nichts</b> the strong neuter ending <b>-es</b> applies \u2014 <i>etwas Gutes</i>, <i>nichts Neues</i>.' },
      { wrong: 'Der Angeklagte Mann schwieg.', right: 'Der angeklagte Mann schwieg. / Der Angeklagte schwieg.', why: 'If a noun follows, the word is still an adjective \u2014 lower case. Capitalise it only when it REPLACES the noun.' }
    ], hinglish: 'Chhe ki chhe galtiyan ek hi baat se aati hain \u2014 yeh shabd kaam noun ka karte hain par form adjective wali rakhte hain. Isliye teen cheezein saath chahiye: capital letter, article, aur sahi ending.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to describe a person? Need a category? Need abstraction? Need institutional precision? Choose the most appropriate nominalized form.' ], note: 'Memory trick: imagine adjectives are labels attached to people. Nominalization removes the person and keeps only the label. Instead of talking about people who are injured, German simply speaks about die Verletzten. Instead of what is important, it speaks about das Wesentliche. Native speakers often think in categories and concepts, not long descriptions.', hinglish: 'Pehle tay karo \u2014 baat kisi insaan ki hai (<b>der/die</b>) ya kisi abstract cheez ki (<b>das</b>)? Aur woh insaan khud kuch kar raha hai (Partizip I) ya uske saath kuch hua (Partizip II)? Uske baad likhne se pehle teen cheezein check karo: capital letter, article, aur article ke hisaab se ending.' }
  ],
  reading: {
    title: 'Meinungsforschung: Mehrheit befürwortet Tempolimit',
    titleEn: 'Reading A — Opinion poll: majority favours speed limit',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Mehrheit', role: 'plain', en: 'majority', hi: 'बहुसंख्या', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'के', type: 'Article' },
      { w: 'Befragten', role: 'r-nominalisiertes-adjektiv', en: 'respondents (nominalized Partizip II, scientific/academic register, Satzende)', hi: 'उत्तरदाताओं (Satzende, nominalized participle)', type: 'Nominalisiertes Partizip II (Satzende)', why: '"die Befragten" nominalizes "die Menschen, die befragt wurden" into a compact scientific/academic label.' },
      { w: 'stimmte', role: 'plain', en: 'agreed', hi: 'सहमत हुए', type: 'Verb (Präteritum)' },
      { w: 'der', role: 'plain', en: 'with the (fem. dat.)', hi: 'इस', type: 'Article' },
      { w: 'Forderung', role: 'plain', en: 'demand (Satzende)', hi: 'माँग (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'zu', role: 'plain', en: 'to (Satzende)', hi: '(Satzende)', type: 'Präposition (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-abstrakte-nominalisierung', en: 'the (neut. nom., abstract reference, not a person)', hi: '(abstract reference)', type: 'Article' },
      { w: 'Entscheidende', role: 'r-abstrakte-nominalisierung', en: 'decisive thing (Satzende, nominalized adjective, abstract concept)', hi: 'निर्णायक बात (Satzende, abstract concept)', type: 'Nominalisiertes Adjektiv · neut. (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb (Präsens)' },
      { w: 'dabei', role: 'plain', en: 'in this regard', hi: 'इसमें', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'erwartete', role: 'plain', en: 'expected', hi: 'अपेक्षित', type: 'Adjective' },
      { w: 'CO2-Ersparnis', role: 'plain', en: 'CO2 saving (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The majority of respondents agreed with the demand. Decisive here is the expected CO2 saving.',
    comprehension: [
      { q: 'Was für eine Konstruktion ist "die Befragten"?', options: ['Ein nominalisiertes Partizip II mit menschlicher Referenz', 'Ein abstraktes Nomen ohne menschliche Referenz', 'Ein Diskursmarker'], answer: 0 },
      { q: 'Ist "das Entscheidende" menschliche oder abstrakte Referenz?', options: ['Abstrakte Referenz (neutrum, kein Mensch)', 'Menschliche Referenz', 'Beides gleichzeitig'], answer: 0 },
      { q: 'Warum wird "die Befragten" statt "die Menschen, die befragt wurden" verwendet?', options: ['Für stilistische Kompaktheit im wissenschaftlichen Register', 'Weil die volle Form grammatisch falsch wäre', 'Aus Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungsverordnung', titleEn: 'Reading B — Government regulation',
    tokens: [
      { w: 'Der', role: 'r-nominalisiertes-adjektiv', en: 'the (masc. nom., legal nominalized human reference)', hi: '(legal nominalized reference)', type: 'Article' },
      { w: 'Angeklagte', role: 'r-nominalisiertes-adjektiv', en: 'accused (Satzende, nominalized Partizip II, legal register)', hi: '(Satzende, legal register)', type: 'Nominalisiertes Partizip II (Satzende)' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'hai', type: 'Verb (Präsens)' },
      { w: 'das', role: 'plain', en: 'the (neut. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Recht', role: 'plain', en: 'right', hi: 'adhikaar', type: 'Noun · neut. · Akk.' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'ka', type: 'Präposition · Akk.' },
      { w: 'eine', role: 'plain', en: 'a (fem. akk.)', hi: 'ek', type: 'Article' },
      { w: 'faire', role: 'plain', en: 'fair', hi: 'nishpaksh', type: 'Adjective · Akk.' },
      { w: 'Verhandlung', role: 'plain', en: 'trial (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The accused has the right to a fair trial.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_016_L001', speaker: 'Ilse', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie viele Betroffene warten schon vor dem Saal?', en: 'Timo, how many affected parties are already waiting outside the hall?' },
      { id: 'C2_016_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Etwa zwanzig, dazu einige Verletzte, die der Sanitätsdienst betreut.', en: 'About twenty, plus some injured people the medical service is looking after.' },
      { id: 'C2_016_L003', speaker: 'Ilse', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und wer ist eigentlich für das Protokoll heute verantwortlich?', en: 'And who is actually responsible for the record today?' },
      { id: 'C2_016_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Die Zuständige vom Gericht, sie sitzt schon bereit am vorderen Tisch.', en: 'The person in charge from the court, she\'s already sitting ready at the front table.' }
    ],
    transcript: 'Timo, wie viele Betroffene warten schon vor dem Saal? Etwa zwanzig, dazu einige Verletzte, die der Sanitätsdienst betreut. Und wer ist eigentlich für das Protokoll heute verantwortlich? Die Zuständige vom Gericht, sie sitzt schon bereit am vorderen Tisch.',
    translation: 'Timo, how many affected parties are already waiting outside the hall? About twenty, plus some injured people the medical service is looking after. And who is actually responsible for the record today? The person in charge from the court, she\'s already sitting ready at the front table.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'viele' },
      { w: 'Betroffene' },
      { w: 'warten' },
      { w: 'schon' },
      { w: 'vor' },
      { w: 'dem' },
      { w: 'Saal' },
      { w: '?', plain: true },
      { w: 'Etwa' },
      { w: 'zwanzig' },
      { w: ',', plain: true },
      { w: 'dazu' },
      { w: 'einige' },
      { w: 'Verletzte' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'der' },
      { w: 'Sanitätsdienst' },
      { w: 'betreut' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wer' },
      { w: 'ist' },
      { w: 'eigentlich' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Protokoll' },
      { w: 'heute' },
      { w: 'verantwortlich' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'Zuständige' },
      { w: 'vom' },
      { w: 'Gericht' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'sitzt' },
      { w: 'schon' },
      { w: 'bereit' },
      { w: 'am' },
      { w: 'vorderen' },
      { w: 'Tisch' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie viele Betroffene warten?', qEn: 'How many affected parties are waiting?', options: ['zehn', 'zwanzig', 'dreißig', 'keine'], optionsEn: ['ten', 'twenty', 'thirty', 'none'], answer: 1,
        explain: '"Etwa zwanzig, dazu einige Verletzte."' },
      { q: 'Wer ist für das Protokoll zuständig?', qEn: 'Who is responsible for the record?', options: ['Ilse', 'Timo', 'die Zuständige vom Gericht', 'niemand'], optionsEn: ['Ilse', 'Timo', 'the official from the court', 'nobody'], answer: 2,
        explain: '"Die Zuständige vom Gericht, sie sitzt schon bereit."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie viele Betroffene vor dem Saal warten.", taskEn: "Timo asks how many affected people are waiting outside the hall.", de: "Etwa zwanzig, dazu einige Verletzte, die der Sanitätsdienst betreut.", en: "About twenty, plus several injured people being looked after by the medics." },
    { task: "Timo fragt, wer für das Protokoll zuständig ist.", taskEn: "Timo asks who is responsible for the minutes.", de: "Die Verantwortlichen im Ministerium führen das Protokoll.", en: "Those responsible in the ministry keep the minutes." },
    { task: "Ein Journalist fragt, wen die Reform am stärksten trifft.", taskEn: "A journalist asks who the reform hits hardest.", de: "Am stärksten trifft sie die Alleinerziehenden und die Langzeitarbeitslosen.", en: "It hits single parents and the long-term unemployed hardest." },
    { task: "Im Gerichtssaal fragt dich eine Praktikantin, wer gerade spricht.", taskEn: "In the courtroom a trainee asks you who is speaking.", de: "Das ist der Angeklagte; die Sachverständige spricht erst nach der Pause.", en: "That's the defendant; the expert witness only speaks after the break." },
    { task: "Ein Student setzt überall „das“ ein. Zeig ihm den Unterschied im Bericht.", taskEn: "A student uses 'das' everywhere. Show him the difference in the report.", de: "Bei Personen steht der Angeklagte, bei Abstraktem das Entscheidende.", en: "With persons it's 'der Angeklagte', with abstractions 'das Entscheidende'." }
  ],
  writing: {
    prompt: 'TASK 1 — Nominalization upgrade (150 words): Rewrite descriptive clauses using nominalized adjectives and participles. Explain every stylistic improvement.\n\nTASK 2 — Academic/legal editing (150 words): Edit an academic or legal text by increasing abstraction through appropriate nominalization. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 policy paper naturally integrating nominalized adjectives and participles across academic, legal, scientific, and administrative registers.',
    starters: ['Die Betroffenen...', 'Der Abgeordnete kündigte an...', 'Das Wesentliche an dieser Maßnahme ist...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über nominalisierte Adjektive und Partizipien...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which most precisely nominalizes "die Menschen, die betroffen sind"?', options: ['die Betroffenen', 'die betroffenen Leute', 'die Betroffenheit'], answer: 0, explain: '"die Betroffenen" (nominalized Partizip II) compactly replaces the full relative clause while keeping human reference.' },
    gap: { sentence: ['', ' ist die Konsistenz der Ergebnisse.'], gaps: [ { answer: 'Das Wesentliche', accepts: ['Das Wesentliche'] } ], explain: '"Das Wesentliche" (neuter, abstract nominalized adjective) refers to a concept, not a person.' },
    match: { q: 'Match each nominalized form to its typical register.', pairs: [ { noun: 'der Angeklagte', art: 'Legal' }, { noun: 'die Versuchspersonen', art: 'Scientific' }, { noun: 'die Befragten', art: 'Academic' }, { noun: 'die Verletzten', art: 'Journalism' } ] },
    builder: { target: 'Build: "Those affected receive financial support." (nominalized participle)', bank: ['Die', 'Betroffenen', 'erhalten', 'finanzielle', 'Unterstützung', '.'], answer: ['Die', 'Betroffenen', 'erhalten', 'finanzielle', 'Unterstützung', '.'], roles: { 'Betroffenen': 'r-nominalisiertes-adjektiv' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Betroffenen, die betroffen sind, erhalten Unterstützung von den Menschen, die verantwortlich sind.', right: 'Die Betroffenen erhalten Unterstützung von den Verantwortlichen.', explain: 'The original is redundant (combining nominalized forms with their own descriptive clauses); the correction keeps only the elegant nominalized labels.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for nominalization in this chapter?', options: ['Adjectives are labels attached to people; nominalization removes the person and keeps only the label', 'Nominalization always makes a sentence longer', 'Nominalized forms are only used in casual conversation'], answer: 0, explain: '"die Verletzten" keeps the label (injured) and drops the explicit description of people.' },
    { q: 'What is the key difference between "die Studierenden" and "das Wesentliche"?', options: ['"die Studierenden" is human reference; "das Wesentliche" is abstract/conceptual reference', 'They mean exactly the same thing', '"das Wesentliche" refers to people, "die Studierenden" does not'], answer: 0, explain: 'der/die nominalized forms typically refer to people; das nominalized forms typically refer to abstract concepts.' },
    { q: 'Which register most strongly favors nominalized human categories like "der Angeklagte" or "der Abgeordnete"?', options: ['Legal/political/administrative', 'Casual conversation', 'Literary poetry'], answer: 0, explain: 'Legal, political, and administrative German rely heavily on nominalized institutional terminology.' },
    { q: 'What is a classic C2-level mistake with nominalization?', options: ['Combining a nominalized form with the exact clause it replaces (redundancy)', 'Never using any nominalized forms', 'Using too few institutional terms'], answer: 0, explain: '"die Betroffenen, die betroffen sind" is redundant — the nominalization already carries the full meaning.' },
    { q: 'Why might a writer avoid overusing nominalization in a warm, personal text?', options: ['Nominalization can sound cold or overly abstract where specificity or warmth is needed', 'Because nominalization is grammatically incorrect', 'Because nominalized forms cannot be declined'], answer: 0, explain: 'C2 mastery means choosing nominalization deliberately, not defaulting to it everywhere.' }
  ],
  takeaways: [
    { c: 'r-etikett-metapher', html: 'Adjectives are labels attached to people — nominalization removes the person and keeps only the label (die Verletzten, not "die Menschen, die verletzt sind").' },
    { c: 'r-nominalisiertes-adjektiv', html: 'Nominalized adjectives/participles with der/die refer to human categories (der Angeklagte, die Betroffenen, die Studierenden).' },
    { c: 'r-abstrakte-nominalisierung', html: 'Nominalized adjectives with das refer to abstract concepts, not people (das Wesentliche, das Entscheidende).' },
    { c: 'r-nominalisiertes-adjektiv', html: 'Register shapes which nominalized forms are used: legal (der Angeklagte), scientific (die Versuchspersonen), academic (die Befragten), journalism (die Verletzten).' }
  ],
  revisionTips: [
    'Take three descriptive relative clauses about people and nominalize each into a compact der/die form.',
    'Read one legal or government text and label every nominalized adjective/participle as human (der/die) or abstract (das) reference.',
    'Write one paragraph about a policy topic using at least four different nominalized forms across academic, legal, and journalistic register.'
  ]
};
window.CHAPTER = CHAPTER;
