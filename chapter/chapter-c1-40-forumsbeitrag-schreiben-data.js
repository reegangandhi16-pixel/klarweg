/* KLARWEG CHAPTER DATA — C1 · Chapter 40
   "Forumsbeitrag schreiben" — interactive online forum post:
   opening, opinion, reaction to others, argumentation, reader
   engagement, closing that invites further discussion. NOT
   Stellungnahme/formal essay (already mastered) — focus is
   semi-formal, dialogic forum writing.
   Dialogue: Merle and Timo ONLY. */
const CHAPTER = {
  id: 'c1-40-forumsbeitrag-schreiben',
  phase: 'C1 · Nominalstil & Präzision',
  number: 40,
  title: 'Forumsbeitrag schreiben',
  titleEn: 'Writing a forum post',
  description: 'Imagine you\'re sitting at a round table discussion, not giving a speech. A Forumsbeitrag contributes ideas, reacts to others, asks questions, and keeps the conversation moving.',
  xp: 990, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 41, title: 'Grafikbeschreibung & Grafikauswertung', titleEn: 'Describing and evaluating graphics' , href: 'chapter-c1-41-grafikbeschreibung-und-grafikauswertung.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'A Forumsbeitrag is a <em>conversation in writing</em>, not a formal essay.',
    intro: 'Joining an online university forum on whether AI should partially replace homework, Merle opens with a friendly greeting and Timo responds to frustrated users calmly — keeping the discussion objective, like a conversation in writing.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native writers open, argue, respond, and invite further discussion in an authentic forum post'],
    scene: 'Teilnahme an einer Universitätsforum-Diskussion: Soll künstliche Intelligenz Hausaufgaben teilweise ersetzen?',
    femaleSpeakers: ['Merle'],
    dialogue: [
      { speaker: 'Merle', tokens: [
        { w: '"Hallo', role: 'r-subject', en: '"Hello', hi: 'नमस्ते', pron: 'HA-lo', type: 'Greeting (feste Wendung)', why: 'hallo zusammen = hello everyone, fixed forum-post opener (this chapter).', ex: 'Hallo zusammen, ich möchte etwas ergänzen.' },
        { w: 'zusammen"', role: 'r-subject', en: 'everyone"', hi: 'सभी को', pron: 'tsu-ZA-men', type: 'Adverb (part of fixed greeting)' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Eröffnung', role: 'r-akkusativ', en: 'opening', hi: 'शुरुआत', pron: 'er-ÖF-nung', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Beitrag', role: 'r-akkusativ', en: 'post', hi: 'पोस्ट', pron: 'BY-trahk', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: '"Hello everyone" is a good opening for the post.', hi: '"Namaste sabhi ko" post ke liye ek achhi shuruaat hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Ärger', role: 'r-akkusativ', en: 'anger', hi: 'ग़ुस्सा', pron: 'ER-ger', type: 'Noun · masc.' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Nutzer', role: 'r-dativ', en: 'users (gen.)', hi: 'उपयोगकर्ताओं के', pron: 'NUT-tser', type: 'Noun · plural genitive' },
        { w: 'nachvollziehen', role: 'r-verb', en: 'understand', hi: 'समझ सकता हूँ', pron: 'nahkh-FOL-tsee-en', type: 'Verb · infinitive (Satzende)', why: 'nachvollziehen = to understand/relate to, a slightly stronger form than verstehen (this chapter).', ex: 'den Ärger nachvollziehen' },
        { w: '.', plain: true }
      ], en: 'I can understand the anger of the users.', hi: 'Main upyogkartaon ke gusse ko samajh sakta hoon.' },
      { speaker: 'Merle', tokens: [
        { w: 'Ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'weiterer', role: 'r-subject', en: 'further', hi: 'अतिरिक्त', pron: 'VY-te-rer', type: 'Adjective', why: 'ein weiterer Aspekt = a further aspect, fixed discourse marker for adding a point (this chapter).', ex: 'Ein weiterer Aspekt ist wichtig.', exEn: 'A further aspect is important.' },
        { w: 'Aspekt', role: 'r-subject', en: 'aspect', hi: 'पहलू', pron: 'as-PEKT', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'wichtig', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'A further aspect is important.', hi: 'Ek aur pehlu zaroori hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Diskussion', role: 'r-subject', en: 'discussion', hi: 'चर्चा', pron: 'dis-ku-SYON', type: 'Noun · fem.', why: 'die Diskussion (this chapter).', ex: 'die Diskussion moderieren' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'sachlich', role: 'r-akkusativ', en: 'objective', hi: 'तटस्थ', pron: 'ZAKH-likh', type: 'Adjective' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The discussion should stay objective.', hi: 'Charcha ko tatasth rehna chahiye.' },
      { speaker: 'Merle', tokens: [
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'unsere', role: 'r-subject', en: 'our (pl.)', hi: 'हमारे', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Argumente', role: 'r-subject', en: 'arguments', hi: 'तर्क', pron: 'ar-gu-MEN-tuh', type: 'Noun · plural' },
        { w: 'nachvollziehbar', role: 'r-akkusativ', en: 'comprehensible', hi: 'समझने योग्य', pron: 'nahkh-FOL-tsee-bahr', type: 'Adjective', why: 'nachvollziehbar (recycled C1).', ex: 'nachvollziehbar sein' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: '?', plain: true }
      ], en: 'Are our arguments comprehensible for everyone?', hi: 'Kya hamaare tark sabhi ke liye samajhne yogya hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'denke', role: 'r-verb', en: 'think', hi: 'सोचता हूँ', pron: 'DEN-kuh', type: 'Verb · denken (ich)' },
        { w: 'schon', role: 'r-akkusativ', en: 'yes indeed', hi: 'हाँ ज़रूर', pron: 'shohn', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Beitrag', role: 'r-akkusativ', en: 'post', hi: 'पोस्ट', pron: 'BY-trahk', type: 'Noun · masc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: 'veröffentlichen', role: 'r-verb', en: 'publish', hi: 'प्रकाशित करना', pron: 'fer-ÖF-fent-li-khen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I think so. We can publish the post now.', hi: 'Mujhe lagta hai haan. Hum abhi post prakaashit kar sakte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine you\'re at a <span class="de r-reaktion">round table discussion</span>, not giving a speech — contribute, react, ask, and keep the conversation moving.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is FORUMSBEITRAG SCHREIBEN at C1 level — an interactive, semi-formal online forum post (opening, opinion, reaction to others, argumentation, reader engagement, closing that invites discussion), distinct from the more formal Stellungnahme genre (already mastered). Covered: forum openings (Hallo zusammen, Guten Tag zusammen, Ich habe mit großem Interesse..., Das Thema finde ich besonders spannend...); presenting opinion in a semi-formal, personal register (Ich persönlich denke..., Aus meiner Sicht..., Ich bin überzeugt, dass..., Für mich spricht vieles dafür..., Meiner Erfahrung nach...); responding respectfully to others (Ich kann den vorherigen Beitrag gut nachvollziehen, Dem stimme ich teilweise zu, Andererseits..., Ich sehe das etwas anders, Ein weiterer Aspekt ist...); reader engagement questions (Wie sehen Sie das?/Wie siehst du das?, Welche Erfahrungen haben Sie gemacht?, Mich interessiert Ihre Meinung, Ich freue mich auf Ihre Antworten); and closings that invite further discussion (Zusammenfassend..., Abschließend..., Ich freue mich auf die Diskussion, Vielen Dank für Ihre Beiträge). Do NOT expect or require the more formal Stellungnahme structure, cohesion mechanics, or collocational precision drilling as separate requirements — this chapter assumes those skills exist; do not flag their absence, but DO flag if the post reads like a formal essay rather than an interactive forum contribution. The most important things to catch: writing like a formal essay instead of an interactive forum post; being too informal for the semi-formal forum register (or too formal, sounding like a Stellungnahme); ignoring previous posters\' opinions entirely; not inviting further discussion at the end; emotional or dismissive disagreement instead of respectful engagement; weak or missing forum structure (no opening greeting, no engagement question, no closing invitation). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag missing forum-appropriate opening/closing; flag failure to acknowledge or respond to another viewpoint; flag disagreement that is dismissive rather than respectful; flag essay-like formality that ignores the interactive forum genre. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Forum-genre check:</b> one sentence on whether the text reads like an interactive round-table contribution rather than a formal essay.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your forum post reads like a genuine round-table contribution, not a formal essay. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Forumsbeitrag Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: a Forumsbeitrag is a conversation in writing, not a speech.' },
  parserSentence: [ { w: 'Hallo', role: 'r-eroeffnung' }, { w: 'zusammen', role: 'r-eroeffnung' }, { w: ',', role: 'plain' }, { w: 'ich', role: 'plain' }, { w: 'denke', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: a Forumsbeitrag is a conversation in writing, not a formal essay.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Merle and Timo build a full forum exchange on AI and homework, using opening, opinion, reaction, and engagement.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key forum-post expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master opening, opinion, respectful response, reader-engagement, and closing phrases for online forums.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a university forum discussion and a professional online community thread, identifying structure and tone.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify opinions, reactions, and invitations to discussion in an online panel and university seminar discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Express opinions spontaneously, respond to classmates, and encourage discussion using C1 speaking strategies.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve a weak forum post, and write a full 350-word Goethe C1 Forumsbeitrag.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill forum structure, reader engagement, response selection, and polite disagreement.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 990 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Forum structure, reader engagement, and polite disagreement drills, plus a full Forumsbeitrag writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Forumsbeitrag Model, Interaction Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Hallo zusammen, ich persönlich denke, KI könnte Hausaufgaben teilweise ersetzen.', text: 'Open a forum post with a semi-formal greeting and personal opinion' },
    { de: 'Ich kann deinen Beitrag gut nachvollziehen, andererseits denke ich...', text: 'Respectfully acknowledge another poster before offering a different view' },
    { de: 'Ein weiterer Aspekt ist, dass personalisiertes Feedback den Lernprozess verbessern kann.', text: 'Add a new supporting point with "ein weiterer Aspekt ist"' },
    { de: 'Wie siehst du das?', text: 'Invite reader engagement with a direct question' },
    { de: 'Ich freue mich auf weitere Beiträge!', text: 'Close a forum post while inviting continued discussion' }
  ],
  vocab: [
    { de: 'hallo zusammen', pos: 'fixed forum greeting', level: 'C1', register: 'semi-formal', en: 'hello everyone (forum opening)', hi: 'नमस्ते सबको (फोरम की शुरुआत)', ex: 'Hallo zusammen, ich persönlich denke, KI könnte Hausaufgaben teilweise ersetzen.', exEn: 'Hello everyone, I personally think AI could partially replace homework.', exHi: 'Namaste sabko, main vyaktigat roop se sochti hoon ki AI homework ki jagah le sakti hai.', ex2: 'Hallo zusammen, ich möchte gerne ein neues Thema eröffnen.', ex2En: 'Hello everyone, I would like to open a new topic.', ex2Hi: 'Namaste sabko, main ek naya vishay shuru karna chahta hoon.' },
    { de: 'nachvollziehen', pos: 'verb (trennbar, fixed "einen Beitrag gut nachvollziehen")', level: 'C1', register: 'semi-formal', en: 'to follow, understand (someone\'s reasoning)', hi: 'तर्क को समझना', ex: 'Ich kann deinen Beitrag gut nachvollziehen, andererseits denke ich...', exEn: 'I can well follow your point, on the other hand I think...', exHi: 'Main tumhari baat achhi tarah samajh sakta hoon, lekin doosri taraf main sochta hoon...', ex2: 'Ich kann diese Entscheidung nicht ganz nachvollziehen.', ex2En: 'I cannot quite follow this decision.', ex2Hi: 'Main iss faisle ko poori tarah samajh nahi paa raha hoon.', conj: { praesens: 'vollzieht nach', praeteritum: 'vollzog nach', perfekt: 'hat nachvollzogen' } },
    { de: 'ein weiterer Aspekt', pos: 'fixed collocation (adds a supporting point)', level: 'C1', register: 'both', en: 'another aspect', hi: 'एक और पहलू', ex: 'Ein weiterer Aspekt ist, dass personalisiertes Feedback den Lernprozess verbessern kann.', exEn: 'Another aspect is that personalized feedback can improve the learning process.', exHi: 'Ek aur pehlu hai ki vyaktigat feedback seekhne ki prakriya ko behtar bana sakta hai.', ex2: 'Ein weiterer Aspekt betrifft die Kosten.', ex2En: 'Another aspect concerns the costs.', ex2Hi: 'Ek aur pehlu kharch se sambandhit hai.' },
    { de: 'die Diskussion', art: 'die', gender: 'f', plural: 'Diskussionen', pos: 'noun', level: 'C1', register: 'both', en: 'discussion', hi: 'चर्चा', ex: 'Ich freue mich auf weitere Beiträge zu dieser Diskussion.', exEn: 'I look forward to further contributions to this discussion.', exHi: 'Main iss charcha mein aage ki posts ka intezaar kar raha hoon.', ex2: 'Die Diskussion im Forum war sehr konstruktiv.', ex2En: 'The discussion in the forum was very constructive.', ex2Hi: 'Forum mein charcha bahut rachanaatmak thi.' },
    { de: 'nachvollziehbar', pos: 'adjective', level: 'C1', register: 'both', en: 'understandable, comprehensible', hi: 'समझने योग्य', ex: 'Dein Standpunkt ist nachvollziehbar, aber ich sehe das etwas anders.', exEn: 'Your standpoint is understandable, but I see it a bit differently.', exHi: 'Tumhaara nazariya samajh mein aata hai, lekin main iske baare mein thoda alag sochta hoon.', ex2: 'Die Entscheidung war für alle nachvollziehbar.', ex2En: 'The decision was understandable for everyone.', ex2Hi: 'Faisla sabke liye samajhne yogya tha.' }
  ],
  grammar: [
    { title: 'Was ist ein Forumsbeitrag? (What is a Forumsbeitrag?)', body: [ 'Forum Topic → Greeting/Opening → Personal Position → Arguments → Reaction to Other Opinions → Invitation to Discussion → Closing. A Forumsbeitrag is a conversation in writing, not a formal essay.' ], hinglish: 'Forumsbeitrag ek baatcheet hai jo likhi hui hai \u2014 essay nahi. Isliye isme do cheezein zaroori hain jo Stellungnahme mein nahi hoti: doosron ki baat par reaction, aur ant mein ek sawaal jisse discussion aage badhe. Register beech ka rehta hai \u2014 na bilkul formal, na casual chat.' },
    { title: 'Einen Forumsbeitrag eröffnen (Opening a Forum Post)', body: [ 'Hallo zusammen, Guten Tag zusammen, Ich habe mit großem Interesse..., Das Thema finde ich besonders spannend..., Meiner Meinung nach... — natural, semi-formal ways to capture readers\' attention.' ], hinglish: 'Shuruaat ke liye <span class="de">Hallo zusammen</span> ya thoda formal <span class="de">Guten Tag zusammen</span> chalta hai. Ek baat yahan tay ho jaati hai \u2014 tum <b>Sie</b> use karoge ya <b>du</b>. Jo chuna, wahi poore post mein rakhna hai.' },
    { title: 'Die eigene Meinung präsentieren (Presenting Your Opinion)', body: [ 'Ich persönlich denke..., Aus meiner Sicht..., Ich bin überzeugt, dass..., Für mich spricht vieles dafür..., Meiner Erfahrung nach... — semi-formal, more personal than "meines Erachtens" used in a formal Stellungnahme.' ], hinglish: 'Yahan raay dena zyada personal lagta hai \u2014 <b>Meines Erachtens</b> is genre mein bahut bhaari lagta hai. <span class="de">Ich pers\u00f6nlich denke</span>, <span class="de">Aus meiner Sicht</span> aur <span class="de">Meiner Erfahrung nach</span> theek baithte hain. Syntax par dhyaan do \u2014 <b>Ich bin \u00fcberzeugt</b> ke baad <b>dass</b>, par <b>Aus meiner Sicht</b> ke baad seedha verb.' },
    { title: 'Auf andere reagieren (Responding to Others)', body: [ 'Ich kann den vorherigen Beitrag gut nachvollziehen, Dem stimme ich teilweise zu, Andererseits..., Ich sehe das etwas anders, Ein weiterer Aspekt ist... — respectful disagreement and acknowledgement are central to forum interaction.' ], hinglish: 'Yahi is genre ka dil hai \u2014 doosron ki baat par jawaab dena. <span class="de">Dem stimme ich teilweise zu</span> matlab thoda sehmat, aur <span class="de">Ich sehe das etwas anders</span> matlab politely asehmat. Do cheezein dhyaan mein rakho: <b>zustimmen</b> Dativ leta hai (<b>dem</b>, na ki <i>das</i>) aur uska <b>zu</b> end mein jaata hai. Aur ek hi baat mein do contrast words mat lagao \u2014 apni position saaf rakho.' },
    { title: 'Leserengagement (Reader Engagement)', body: [ 'Wie sehen Sie das?, Welche Erfahrungen haben Sie gemacht?, Mich interessiert Ihre Meinung, Ich freue mich auf Ihre Antworten — direct questions invite meaningful discussion, distinguishing a forum post from a monologue essay.' ], hinglish: 'Ant mein sawaal poochhna is genre ki pehchaan hai \u2014 bina uske post essay ban jaata hai, aur exam mein marks kat jaate hain. <span class="de">Wie sehen Sie das?</span> aur <span class="de">Welche Erfahrungen haben Sie gemacht?</span> sabse natural hain. Dhyaan do ki <span class="de">Mich interessiert Ihre Meinung</span> mein <b>mich</b> pehle aata hai aur asli subject <i>Ihre Meinung</i> hai.' },
    { title: 'Einen Forumsbeitrag abschließen (Closing a Forumsbeitrag)', body: [ 'Zusammenfassend..., Abschließend..., Ich freue mich auf die Diskussion, Vielen Dank für Ihre Beiträge — closings that explicitly invite continued conversation, unlike a final, closed Stellungnahme conclusion.' ], hinglish: 'Closing yahan Stellungnahme se alag hota hai. Wahan tum faisla dete ho aur baat band kar dete ho; yahan tum darwaza khula chhodte ho \u2014 <span class="de">Ich freue mich auf die Diskussion</span>. Isliye \u201cfinal judgement\u201d wali line yahan zaroori nahi hai.' },
    {
      title: 'Sie oder du \u2014 und die Syntax der Wendungen',
      body: [
        'Two things decide whether a Forumsbeitrag reads as authentic. First, pick <b>Sie</b> or <b>du</b> at the start and keep it to the end \u2014 a public forum in an exam is normally <b>Sie</b>.',
        'Second, these phrases split by syntax exactly as in a Stellungnahme: some take a <b>dass</b>-clause, others are adverbials that push the verb into position 2.'
      ],
      table: {
        head: ['Phrase', 'Continuation', 'Example'],
        rows: [
          ['Ich bin \u00fcberzeugt / Ich pers\u00f6nlich denke', '<b>dass</b> + verb last', '<span class="de">Ich bin \u00fcberzeugt, <b>dass</b> es funktioniert.</span>'],
          ['Aus meiner Sicht / Meiner Erfahrung nach', 'position 1 \u2192 <b>verb second</b>, no comma', '<span class="de">Meiner Erfahrung nach <b>funktioniert</b> das nicht.</span>'],
          ['Dem stimme ich teilweise zu', 'Dativ + separable <b>zu</b> last', '<span class="de">Dem stimme ich teilweise <b>zu</b>.</span>'],
          ['Ich sehe das etwas anders', '+ optional weil-clause, verb last', '<span class="de">\u2026, weil die Kosten zu hoch <b>sind</b>.</span>'],
          ['engagement question', 'verb first or W-word first', '<span class="de">Wie <b>sehen</b> Sie das?</span>']
        ]
      },
      note: 'Register scale for this genre: <b>Meines Erachtens</b> is too formal here, <i>Ich find\u2019s gut</i> too casual. <b>Aus meiner Sicht</b> and <b>Ich pers\u00f6nlich denke</b> sit exactly right.',
      hinglish: 'Do cheezein tay karti hain ki Forumsbeitrag asli lagta hai ya nahi. Pehli \u2014 shuru mein <b>Sie</b> ya <b>du</b> chuno aur ant tak wahi rakho. Exam ke public forum mein aksar <b>Sie</b> hi theek rehta hai, aur beech mein badalna is genre ki sabse dikhne wali galti hai. Doosri \u2014 yeh phrases bhi syntax se bantti hain, bilkul Stellungnahme ki tarah: <b>Ich bin \u00fcberzeugt</b> aur <b>Ich pers\u00f6nlich denke</b> ke baad <b>dass</b> aata hai, par <b>Aus meiner Sicht</b> aur <b>Meiner Erfahrung nach</b> ke baad seedha <b>verb</b> aata hai, comma ke bina. Aur register ka dhyaan rakho \u2014 <b>Meines Erachtens</b> yahan bahut formal lagta hai aur <i>Ich find\u2019s gut</i> bahut casual; <b>Aus meiner Sicht</b> theek beech mein baithta hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Section mapped to purpose.' ], table: { head: ['Section', 'Purpose'], rows: [ ['Opening', 'Introduce the topic'], ['Opinion', 'Present your position'], ['Discussion', 'Respond to others'], ['Argumentation', 'Support your ideas'], ['Reader Engagement', 'Invite responses'], ['Closing', 'Continue the discussion'] ] }, hinglish: 'Chhe section ka table \u2014 dhyaan do ki do section sirf is genre mein hain: doosron ko jawaab dena, aur reader se sawaal poochhna.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are grammatical \u2014 <b>dass</b>, verb-final after <b>weil</b>, verb-second after a fronted phrase. The other is the register break that most often gives this genre away: switching between <b>Sie</b> and <b>du</b>.' ], mistakes: [
      { wrong: 'Hallo zusammen! Ich bin \u00fcberzeugt, die Regelung ist sinnvoll.', right: 'Hallo zusammen! Ich bin \u00fcberzeugt, dass die Regelung sinnvoll ist.', why: '<b>Ich bin \u00fcberzeugt</b> takes a <b>dass</b>-clause \u2014 and the verb then goes to the end.' },
      { wrong: 'Hallo zusammen! Wie sehen Sie das? Schreib mir mal deine Meinung.', right: 'Hallo zusammen! Wie sehen Sie das? Schreiben Sie mir gern Ihre Meinung.', why: 'Pick one form of address and keep it. Switching from <b>Sie</b> to <b>du</b> inside one post is the sharpest register break in this genre.' },
      { wrong: 'Ich kann den vorherigen Beitrag gut nachvollziehen, aber ich sehe das etwas anders, jedoch stimme ich zu.', right: 'Ich kann den vorherigen Beitrag gut nachvollziehen, sehe das aber etwas anders.', why: 'Two contrast words plus an agreement cancel each other out. State one clear position \u2014 partial agreement is <b>Dem stimme ich teilweise zu</b>.' },
      { wrong: 'Welche Erfahrungen haben Sie gemacht? Ich freue mich auf Ihre Antworten und interessiert mich Ihre Meinung.', right: 'Welche Erfahrungen haben Sie gemacht? Ich freue mich auf Ihre Antworten \u2014 mich interessiert Ihre Meinung.', why: '<b>interessieren</b> needs its subject: <i>mich interessiert Ihre Meinung</i>. Note the Akkusativ <b>mich</b> comes first here.' },
      { wrong: 'Meiner Erfahrung nach, das funktioniert nicht.', right: 'Meiner Erfahrung nach funktioniert das nicht.', why: 'No comma after a position-1 adverbial \u2014 and the verb has to follow it immediately, before the subject.' },
      { wrong: 'Dem stimme ich teilweise zu, weil die Kosten sind zu hoch.', right: 'Dem stimme ich teilweise zu, weil die Kosten zu hoch sind.', why: 'After <b>weil</b> the verb goes to the very end of the clause. Note also <b>zustimmen</b> takes the Dativ \u2014 <i>dem</i>, not <i>das</i>.' }
    ], hinglish: 'Paanch galtiyan grammar ki hain \u2014 <b>dass</b>, <b>weil</b> ke baad verb end mein, aur aage wale phrase ke baad verb doosri jagah par. Aur ek register ki hai, jo is genre mein sabse zyada pakdi jaati hai: beech mein <b>Sie</b> se <b>du</b> par chala jaana.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What is the discussion topic? State your opinion. Support it with arguments. Respond to other viewpoints. Ask an open question. Encourage further discussion. Close politely.' ], note: 'Memory trick: imagine you\'re at a round table discussion, not giving a speech. If your text could naturally receive thoughtful replies, you\'ve written an authentic Forumsbeitrag.', hinglish: 'Topic samjho, apni raay do, arguments se support karo, doosron ki baat par jawaab do, ek khula sawaal poochho, aur politely khatam karo. Aur post likhne ke baad do cheezein check karo \u2014 poore text mein <b>Sie</b> ya <b>du</b> ek hi raha, aur ant mein ek sawaal hai jiska jawaab koi de sake?' }
  ],
  reading: {
    title: 'Forum: Sollten Vorlesungen grundsätzlich aufgezeichnet werden?',
    titleEn: 'Reading A — Forum: should lectures generally be recorded?',
    tokens: [
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronomen · Nom.' },
      { w: 'habe', role: 'r-eroeffnung', en: 'have (part of "ich habe mit großem Interesse gelesen" — engaged forum opening)', hi: '', type: 'Verb · haben (Präsens)' },
      { w: 'deinen', role: 'plain', en: 'your (masc. akk.)', hi: 'तुम्हारी', type: 'Possessivartikel · Akk.' },
      { w: 'Beitrag', role: 'plain', en: 'post', hi: 'पोस्ट', type: 'Noun · masc.' },
      { w: 'zur', role: 'plain', en: 'about the', hi: 'के बारे में', type: 'Contraction · zu der' },
      { w: 'Aufzeichnungspflicht', role: 'plain', en: 'recording obligation (Satzende)', hi: 'रिकॉर्डिंग बाध्यता (Satzende)', type: 'Noun · fem.' },
      { w: 'mit', role: 'r-eroeffnung', en: 'with (part of fixed opening)', hi: '', type: 'Präposition · Dat.' },
      { w: 'großem', role: 'r-eroeffnung', en: 'great (part of fixed opening)', hi: 'बड़ी (fixed opening)', type: 'Adjective · Dat.' },
      { w: 'Interesse', role: 'r-eroeffnung', en: 'interest (part of "mit großem Interesse gelesen")', hi: 'दिलचस्पी से (fixed opening)', type: 'Noun · neut. · Dat.' },
      { w: 'gelesen', role: 'r-eroeffnung', en: 'read (Satzende, "mit großem Interesse gelesen" — standard engaged forum opening)', hi: 'पढ़ा (Satzende, standard engaged forum opening)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Dem', role: 'r-reaktion', en: 'to that (part of "dem stimme ich teilweise zu" — partial agreement response)', hi: '', type: 'Demonstrativpronomen · Dat.' },
      { w: 'stimme', role: 'r-reaktion', en: 'agree (part of expression)', hi: '', type: 'Verb (Präsens)' },
      { w: 'ich', role: 'r-reaktion', en: 'I (part of expression)', hi: 'मैं (expression का हिस्सा)', type: 'Pronomen · Nom.' },
      { w: 'teilweise', role: 'r-reaktion', en: 'partially (Satzende, "dem stimme ich teilweise zu" — I partially agree with that)', hi: 'आंशिक रूप से (Satzende, "dem stimme ich teilweise zu")', type: 'Adverb (Satzende)', why: '"Dem stimme ich teilweise zu" is the standard forum phrase for expressing partial, respectful agreement (this chapter).' },
      { w: 'zu', role: 'r-reaktion', en: '(part of separable verb "zustimmen", Satzende)', hi: '(Satzende)', type: 'Partikel · trennbar (Satzende)' },
      { w: ',', plain: true },
      { w: 'allerdings', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'fürchte', role: 'plain', en: 'fear', hi: 'डर है', type: 'Verb · fürchten' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मुझे', type: 'Pronoun' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Anwesenheit', role: 'plain', en: 'attendance (Satzende)', hi: 'उपस्थिति (Satzende)', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Vorlesungen', role: 'plain', en: 'lectures (Satzende)', hi: 'व्याख्यानों (Satzende)', type: 'Noun · plural' },
      { w: 'dadurch', role: 'plain', en: 'as a result', hi: 'इसके परिणामस्वरूप', type: 'Pronominaladverb' },
      { w: 'weiter', role: 'plain', en: 'further', hi: 'और', type: 'Adverb' },
      { w: 'sinken', role: 'plain', en: 'decline (Satzende)', hi: 'गिर जाएगी (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: 'würde', role: 'plain', en: 'would (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Konjunktiv II, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'I have read your post on the recording obligation with great interest. I partially agree with that, but I fear that attendance in lectures would decline further as a result.',
    comprehension: [
      { q: 'Welche Funktion hat "ich habe mit großem Interesse gelesen"?', options: ['Einen Forumsbeitrag eröffnen', 'Ein Gegenargument einführen', 'Den Beitrag abschließen'], answer: 0 },
      { q: 'Welche Funktion hat "dem stimme ich teilweise zu"?', options: ['Auf einen anderen Beitrag respektvoll reagieren', 'Die eigene Meinung zum ersten Mal einführen', 'Zum Diskutieren einladen'], answer: 0 },
      { q: 'Ist dieser Ton eher formell (Stellungnahme) oder semi-formell (Forum)?', options: ['Semi-formell, typisch für ein Forum', 'Sehr formell, wie ein offizieller Brief', 'Völlig informell wie ein Chat'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Berufliche Online-Community-Diskussion', titleEn: 'Reading B — Professional online community discussion',
    tokens: [
      { w: 'Mich', role: 'r-engagement', en: 'me (part of "mich interessiert Ihre Meinung" — engagement phrase)', hi: '(mich interessiert Ihre Meinung, engagement phrase)', type: 'Pronomen · Akk.' },
      { w: 'interessiert', role: 'r-engagement', en: 'interests (part of expression)', hi: '(expression ka hissa)', type: 'Verb (Präsens)' },
      { w: 'Ihre', role: 'r-engagement', en: 'your (formal, fem. nom., part of expression)', hi: 'aapki (expression ka hissa)', type: 'Possessivartikel · Nom.' },
      { w: 'Meinung', role: 'r-engagement', en: 'opinion (Satzende, "mich interessiert Ihre Meinung" — standard professional-forum engagement phrase)', hi: 'raay mein dilchaspi hai (Satzende, standard engagement phrase)', type: 'Noun · fem. (Satzende)', why: '"Mich interessiert Ihre Meinung" directly invites a reader\'s response, a defining feature of forum communication.' },
      { w: 'zu', role: 'plain', en: 'about', hi: 'iske', type: 'Präposition · Dat.' },
      { w: 'diesem', role: 'plain', en: 'this (neut. dat.)', hi: 'baare mein', type: 'Demonstrativpronomen · Dat.' },
      { w: 'Ansatz', role: 'plain', en: 'approach (Satzende)', hi: '(Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'I am interested in your opinion on this approach.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_040_L001', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ein Nutzer im Forum schreibt ziemlich aufgebracht, KI mache Hausaufgaben komplett sinnlos.', en: 'Timo, a user in the forum is writing quite worked up that AI makes homework completely pointless.' },
      { id: 'C1_040_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie reagierst du am besten darauf, ohne die Diskussion eskalieren zu lassen?', en: 'How do you best respond to that without letting the discussion escalate?' },
      { id: 'C1_040_L003', speaker: 'Merle', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich greife seinen Punkt sachlich auf und frage, welche Aufgaben er konkret meint.', en: 'I take up his point objectively and ask which tasks exactly he means.' },
      { id: 'C1_040_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guter Ansatz, das hält den Ton konstruktiv statt konfrontativ.', en: 'Good approach, that keeps the tone constructive instead of confrontational.' }
    ],
    transcript: 'Timo, ein Nutzer im Forum schreibt ziemlich aufgebracht, KI mache Hausaufgaben komplett sinnlos. Wie reagierst du am besten darauf, ohne die Diskussion eskalieren zu lassen? Ich greife seinen Punkt sachlich auf und frage, welche Aufgaben er konkret meint. Guter Ansatz, das hält den Ton konstruktiv statt konfrontativ.',
    translation: 'Timo, a user in the forum is writing quite worked up that AI makes homework completely pointless. How do you best respond to that without letting the discussion escalate? I take up his point objectively and ask which tasks exactly he means. Good approach, that keeps the tone constructive instead of confrontational.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ein' },
      { w: 'Nutzer' },
      { w: 'im' },
      { w: 'Forum' },
      { w: 'schreibt' },
      { w: 'ziemlich' },
      { w: 'aufgebracht' },
      { w: ',', plain: true },
      { w: 'KI' },
      { w: 'mache' },
      { w: 'Hausaufgaben' },
      { w: 'komplett' },
      { w: 'sinnlos' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'reagierst' },
      { w: 'du' },
      { w: 'am' },
      { w: 'besten' },
      { w: 'darauf' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'die' },
      { w: 'Diskussion' },
      { w: 'eskalieren' },
      { w: 'zu' },
      { w: 'lassen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'greife' },
      { w: 'seinen' },
      { w: 'Punkt' },
      { w: 'sachlich' },
      { w: 'auf' },
      { w: 'und' },
      { w: 'frage' },
      { w: ',', plain: true },
      { w: 'welche' },
      { w: 'Aufgaben' },
      { w: 'er' },
      { w: 'konkret' },
      { w: 'meint' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Ansatz' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'hält' },
      { w: 'den' },
      { w: 'Ton' },
      { w: 'konstruktiv' },
      { w: 'statt' },
      { w: 'konfrontativ' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was behauptet der frustrierte Nutzer?', qEn: 'What does the frustrated user claim?', options: ['KI ist zu teuer', 'KI macht Hausaufgaben sinnlos', 'KI ist verboten', 'KI funktioniert nicht'], optionsEn: ['AI is too expensive', 'AI makes homework pointless', 'AI is banned', 'AI doesn\'t work'], answer: 1,
        explain: '"KI mache Hausaufgaben komplett sinnlos."' },
      { q: 'Wie will Merle antworten?', qEn: 'How does Merle plan to respond?', options: ['ihn ignorieren', 'seinen Punkt sachlich aufgreifen und nachfragen', 'ihn kritisieren', 'das Thema wechseln'], optionsEn: ['ignore him', 'take up his point factually and ask follow-up questions', 'criticise him', 'change the subject'], answer: 1,
        explain: '"Ich greife seinen Punkt sachlich auf und frage, welche Aufgaben er konkret meint."' }
    ]
  },
  speaking: [
    { task: "Ein Nutzer schreibt aufgebracht, KI mache Hausaufgaben sinnlos. Reagiere sachlich.", taskEn: "A user angrily writes AI makes homework pointless. Respond calmly.", de: "Hallo zusammen, ich kann die Sorge nachvollziehen, teile sie aber nicht ganz.", en: "Hi everyone, I can understand the concern, but I don't fully share it." },
    { task: "Eröffne deinen eigenen Beitrag im Forum.", taskEn: "Open your own post in the forum.", de: "Hallo zusammen, ich finde die Diskussion hier ziemlich einseitig.", en: "Hi everyone, I find the discussion here fairly one-sided." },
    { task: "Bring einen Punkt ein, der noch fehlt.", taskEn: "Add a point that's still missing.", de: "Ein weiterer Aspekt ist die Betreuung: dafür fehlt einfach Personal.", en: "A further aspect is supervision: there simply isn't the staff for it." },
    { task: "Sag, warum die Position der anderen verständlich ist.", taskEn: "Say why the other side's position is understandable.", de: "Der Einwand ist durchaus nachvollziehbar, gerade für Lehrende.", en: "The objection is quite understandable, especially for teachers." },
    { task: "Lade die anderen zum Antworten ein.", taskEn: "Invite the others to reply.", de: "Wie seht ihr das? Ich würde die Diskussion gern weiterführen.", en: "How do you see it? I'd like to continue the discussion." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve a weak forum post by adding better interaction, clearer structure, stronger arguments, and invitations for discussion. Explain every improvement.\n\nTASK 2 — Forumsbeitrag (350 words): Demonstrate a natural introduction, balanced opinion, responses to other viewpoints, semi-formal register, authentic C1 vocabulary, and an engaging conclusion.',
    starters: ['Hallo zusammen, ich persönlich denke, KI könnte Hausaufgaben teilweise ersetzen.', 'Ich kann den vorherigen Beitrag gut nachvollziehen, andererseits...'],
    placeholder: 'Ein weiterer Aspekt ist, dass... Wie seht ihr das? Ich freue mich auf weitere Beiträge!',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase is a standard semi-formal forum opening?', options: ['Hallo zusammen,', 'Sehr geehrte Damen und Herren,', 'Meines Erachtens'], answer: 0, explain: '"Hallo zusammen" is the standard semi-formal greeting for opening a forum post, distinct from a formal letter salutation.' },
    gap: { sentence: ['Ich kann deinen Beitrag gut ', ', andererseits denke ich...'], gaps: [ { answer: 'nachvollziehen', accepts: ['nachvollziehen'] } ], explain: '"Ich kann...gut nachvollziehen" respectfully acknowledges another poster\'s view before offering a different perspective.' },
    match: { q: 'Match each phrase to its forum function.', pairs: [ { noun: 'Hallo zusammen', art: 'Opening' }, { noun: 'Ich persönlich denke', art: 'Opinion' }, { noun: 'Wie siehst du das?', art: 'Reader engagement' }, { noun: 'Ich freue mich auf weitere Beiträge', art: 'Closing' } ] },
    builder: { target: 'Build: "Another aspect is that..." (adding a supporting point)', bank: ['Ein', 'weiterer', 'Aspekt', 'ist', ',', 'dass', '...'], answer: ['Ein', 'weiterer', 'Aspekt', 'ist', ',', 'dass', '...'], roles: { 'Ein': 'r-argumentation', 'weiterer': 'r-argumentation', 'Aspekt': 'r-argumentation' } },
    errorCorrection: { title: 'Error correction', wrong: 'KI ist gut für Hausaufgaben. Ende.', right: 'Hallo zusammen, ich persönlich denke, KI könnte Hausaufgaben sinnvoll ergänzen. Wie seht ihr das? Ich freue mich auf eure Antworten!', explain: 'A bare statement with no greeting, personal framing, engagement question, or invitation to respond is not an authentic C1 Forumsbeitrag — it lacks the full interactive structure.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for the Forumsbeitrag?', options: ['Imagine a round table discussion, not a speech — contribute, react, ask, keep the conversation moving', 'Write it exactly like a formal Stellungnahme', 'State your opinion once with no further engagement'], answer: 0, explain: 'A Forumsbeitrag is a conversation in writing, designed to invite dialogue.' },
    { q: 'What does "hallo zusammen" signal?', options: ['A semi-formal forum opening', 'A formal letter salutation', 'A closing statement'], answer: 0, explain: '"Hallo zusammen" is the standard forum-post greeting, warmer than a formal letter salutation.' },
    { q: 'What is the function of "ich kann deinen Beitrag gut nachvollziehen"?', options: ['Respectfully acknowledging another poster before offering a view', 'Closing the discussion', 'Introducing the topic for the first time'], answer: 0, explain: 'This phrase shows respectful engagement with a previous contribution.' },
    { q: 'Why must a Forumsbeitrag include a reader-engagement question?', options: ['It is a defining genre feature that invites further discussion', 'It is not actually necessary', 'To make the text longer'], answer: 0, explain: 'Without an invitation to respond, the text functions as a monologue essay rather than a forum contribution.' },
    { q: 'Which closing phrase invites continued discussion?', options: ['Ich freue mich auf weitere Beiträge', 'Sehr geehrte Damen und Herren', 'Meines Erachtens'], answer: 0, explain: '"Ich freue mich auf weitere Beiträge" explicitly signals that the conversation should continue.' }
  ],
  takeaways: [
    { c: 'r-eroeffnung', html: 'Semi-formal openings (hallo zusammen, ich habe mit großem Interesse gelesen) set a personal, engaged forum tone from the first line.' },
    { c: 'r-reaktion', html: 'Respectful response phrases (ich kann...gut nachvollziehen, dem stimme ich teilweise zu, andererseits) engage with previous posts rather than ignoring them.' },
    { c: 'r-engagement', html: 'Reader-engagement questions (wie siehst du das?, mich interessiert Ihre Meinung) and inviting closings (ich freue mich auf weitere Beiträge) keep the conversation alive.' }
  ],
  revisionTips: [
    'Take one Stellungnahme you\'ve already written and rewrite its opening and closing in forum style — add a greeting and an engagement question.',
    'Find an authentic German online forum thread and label each post with its function (opening, opinion, reaction, engagement, closing).',
    'Practise respectful disagreement by writing three different "andererseits" responses to three different opinions on the same topic.'
  ]
};
window.CHAPTER = CHAPTER;
