(() => {
  'use strict';

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const questions = [
    ['Ich ___ aus Indien.', ['kommst', 'komme', 'kommen'], 1, 'With ich, the present-tense form of kommen is komme.'],
    ['Ich kaufe ___ Apfel.', ['eine', 'einen', 'ein'], 1, 'Apfel is masculine and is the direct object of kaufe, so use einen.'],
    ['Wann öffnet das Geschäft am Samstag?', ['Um neun Uhr', 'Um zwölf Uhr', 'Um achtzehn Uhr'], 0, 'Samstags means on Saturdays. The first time in the Saturday schedule is the opening time.', 'Mo.–Fr. 9–18 Uhr. Samstags 9–12 Uhr. Sonntags geschlossen.'],
    ['Gestern ___ wir mit dem Zug nach Köln gefahren.', ['sind', 'werden', 'haben'], 0, 'Fahren uses sein in the perfect when it describes movement to a destination. With wir, use sind.'],
    ['Kannst du ___ bitte helfen?', ['ich', 'mir', 'mich'], 1, 'Helfen takes the dative. Mir is the dative form of ich.'],
    ['Was soll Lea tun, wenn sie den Termin nicht wahrnehmen kann?', ['Die Praxis anrufen', 'Am Mittwoch vorbeikommen', 'Eine neue Karte kaufen'], 0, 'Falls introduces the condition. If Lea cannot come, the note asks her to call.', 'Ihr Termin ist am Donnerstag um 16 Uhr. Falls Sie nicht kommen können, rufen Sie uns bitte vorher an.'],
    ['Ich bleibe zu Hause, weil ich morgen früh arbeiten ___.', ['muss', 'müssen', 'muss ich'], 0, 'Weil moves the conjugated verb to the end. Use muss with ich.'],
    ['Das ist die Kollegin, mit ___ ich das Projekt geplant habe.', ['der', 'deren', 'die'], 0, 'Mit takes the dative. The dative feminine relative pronoun is der.'],
    ['Was ändert sich am Workshop?', ['Der Beginn', 'Die Teilnahmegebühr', 'Der Ort'], 2, 'The venue moves to room 204. The starting time remains the same.', 'Der Workshop findet wegen eines Wasserschadens in Raum 204 statt. Er beginnt wie geplant um zehn Uhr. Die Teilnahme bleibt kostenlos.'],
    ['Die Bearbeitung beginnt, ___ alle Unterlagen vorliegen.', ['indem', 'sobald', 'anstatt'], 1, 'Sobald means as soon as. Having all the documents triggers processing.'],
    ['Welche Aussage gibt den Inhalt am besten wieder?', ['Der Radweg ist bereits fertig.', 'Der Stadtrat hat den Radweg beschlossen.', 'Die Entscheidung über den Radweg steht noch aus.'], 2, 'Ein Vorschlag and noch entscheiden show that there is no final decision yet.', 'Die Verwaltung hat einen neuen Radweg vorgeschlagen. Ob er tatsächlich gebaut wird, muss der Stadtrat noch entscheiden.'],
    ['Die Frist wurde verlängert, ___ auch kleinere Betriebe einen Antrag stellen können.', ['damit', 'anstatt dass', 'indem'], 0, 'Damit introduces the intended purpose of the extension.'],
    ['Welche Aussage folgt aus dem Text?', ['Eine Bestätigung der These steht noch aus.', 'Die Verfasserinnen ziehen die These zurück.', 'Die Messwerte widersprechen der These.'], 0, 'A compatible result is not the same as sufficient evidence. The authors call for more research.', 'Die Messwerte sind zwar mit der These vereinbar, reichen jedoch für eine Bestätigung nicht aus. Die Verfasserinnen halten deshalb weitere Untersuchungen für erforderlich.'],
    ['Welche Formulierung gibt die Aussage indirekt wieder?', ['Die Zeugin sagte, sie hätte nichts gesehen, wenn sie dort gewesen wäre.', 'Die Zeugin sagte, sie habe nichts gesehen.', 'Die Zeugin sagte, dass sie nichts sähe, falls sie dort wäre.'], 1, 'Habe gesehen uses Konjunktiv I to report a past statement without endorsing it.', 'Die Zeugin sagte: „Ich habe nichts gesehen.“'],
    ['Was bedeutet „Der Nutzen ist insofern begrenzt, als die Ergebnisse nur für Großstädte gelten“?', ['Der Nutzen wächst mit der Zahl der untersuchten Großstädte.', 'Die eingeschränkte Übertragbarkeit begrenzt den Nutzen.', 'Die Ergebnisse sind für Großstädte kaum brauchbar.'], 1, 'Insofern … als specifies the respect in which a claim applies. Here, the limited scope explains the limited usefulness.'],
    ['Was legt die Wortwahl nahe?', ['Das Protokoll hält fest, dass jeder Vorschlag ausdrücklich gebilligt wurde.', 'Der Ausschuss bedauert, dass es so wenige Einwände gab.', 'Der Ausschuss behandelt das Ausbleiben von Einwänden als stärkeres Signal, als es tatsächlich ist.'], 2, 'Kurzerhand and das Protokoll gibt diese Lesart kaum her signal skepticism about treating silence as agreement.', 'Der Ausschuss deutete das Schweigen der Beteiligten kurzerhand als Zustimmung. Das Protokoll gibt diese Lesart allerdings kaum her.'],
    ['Was räumt die Rezensentin ein?', ['Das Buch schließt tatsächlich eine Forschungslücke.', 'Die These ist zu ausführlich belegt.', 'Das Buch wirft eine gute Frage auf, beantwortet sie aber nicht überzeugend.'], 2, 'Die Fragestellung ist reizvoll is a concession. Lässt sich schwerlich behaupten casts doubt on the book’s claimed achievement.', 'Die Fragestellung ist reizvoll. Dass das Buch die damit eröffnete Lücke tatsächlich schließt, lässt sich allerdings schwerlich behaupten.'],
    ['Was meint der Autor mit „dem Papier nach“?', ['Die Mitglieder sind laut Satzung unabhängig, können es praktisch aber nur eingeschränkt sein.', 'Die Mitglieder sind inzwischen unabhängig, obwohl die Satzung das Gegenteil vorsieht.', 'Die Satzung untersagt jede Zusammenarbeit mit dem Vorstand.'], 0, 'Dem Papier nach contrasts the formal rule with what the appointment process permits in practice.', 'Dem Papier nach ist das Gremium unabhängig. Da der Vorstand sämtliche Mitglieder beruft und jederzeit abberufen kann, bleibt von dieser Unabhängigkeit im Zweifel wenig übrig.'],
  ];

  const byId = id => document.getElementById(id);
  const start = byId('start-test');
  const quiz = byId('quiz');
  const result = byId('result');
  const heading = byId('question-heading');
  const options = byId('options');
  const form = byId('answer-form');
  const answers = Array(questions.length).fill(null);
  const groupSize = questions.length / levels.length;
  let position = 0;

  function showQuestion(focusHeading = true) {
    const [prompt, choices, , , passage] = questions[position];
    heading.textContent = 'Question ' + (position + 1) + ' of ' + questions.length;
    const progress = byId('progress');
    progress.max = questions.length;
    progress.value = position + 1;
    byId('prompt').textContent = prompt;
    byId('passage').textContent = passage || '';
    byId('passage').hidden = !passage;
    options.replaceChildren();
    [...choices, 'I’m not sure'].forEach((choice, index) => {
      const label = document.createElement('label');
      label.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.required = true;
      input.checked = answers[position] === index;
      const caption = document.createElement('span');
      caption.lang = index < choices.length ? 'de' : 'en';
      caption.textContent = choice;
      label.append(input, caption);
      options.append(label);
    });
    byId('back').hidden = position === 0;
    byId('next').textContent = position === questions.length - 1 ? 'See my result' : 'Next question';
    if (focusHeading) heading.focus();
  }

  function showResult() {
    const scores = levels.map(() => 0);
    const scoreList = byId('scores');
    const review = byId('review');
    scoreList.replaceChildren();
    review.replaceChildren();
    questions.forEach(([prompt, choices, correct, explanation, passage], index) => {
      const band = Math.floor(index / groupSize);
      const answer = answers[index];
      const wasCorrect = answer === correct;
      if (wasCorrect) scores[band]++;
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = 'Question ' + (index + 1) + ' · ' + levels[band] + ' · ' +
        (wasCorrect ? 'Correct' : answer === choices.length ? 'Not sure' : 'Review');
      details.append(summary);
      if (passage) appendParagraph(details, passage, 'de');
      appendParagraph(details, prompt, 'de');
      appendParagraph(details, 'Your answer: ' + (choices[answer] || 'I’m not sure'));
      const correctAnswer = appendParagraph(details, 'Correct answer: ');
      const phrase = document.createElement('span');
      phrase.lang = 'de';
      phrase.textContent = choices[correct];
      correctAnswer.append(phrase);
      appendParagraph(details, explanation);
      review.append(details);
    });
    scores.forEach((score, index) => {
      const item = document.createElement('li');
      item.textContent = levels[index] + ' · ' + score + '/' + groupSize;
      scoreList.append(item);
    });
    const firstGap = scores.findIndex(score => score < 2);
    const level = levels[firstGap === -1 ? levels.length - 1 : firstGap];
    const total = scores.reduce((sum, score) => sum + score, 0);
    const resultHeading = byId('result-heading');
    resultHeading.textContent = (firstGap === -1 ? 'Next step: explore ' : 'Suggested starting level: ') + level;
    byId('result-summary').textContent = total + '/' + questions.length + ' correct. ' +
      (firstGap === -1 ? 'You reached the target in every question group. Try a C2 lesson to see how it feels.' :
        'Start with ' + level + ' material to work on the first group that needs more practice.');
    const courseLink = byId('course-link');
    courseLink.href = level.toLowerCase() + (location.pathname.endsWith('.html') || location.protocol === 'file:' ? '.html' : '');
    courseLink.textContent = 'Explore the ' + level + ' course';
    quiz.hidden = true;
    result.hidden = false;
    resultHeading.focus();
  }

  function appendParagraph(parent, content, lang) {
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    if (lang) paragraph.lang = lang;
    parent.append(paragraph);
    return paragraph;
  }

  function begin() {
    position = 0;
    answers.fill(null);
    result.hidden = true;
    quiz.hidden = false;
    showQuestion();
  }

  start.addEventListener('click', begin);
  byId('retake').addEventListener('click', begin);
  byId('back').addEventListener('click', () => {
    position--;
    showQuestion();
  });
  form.addEventListener('change', event => {
    if (event.target.name === 'answer') answers[position] = Number(event.target.value);
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (answers[position] === null) return;
    if (position === questions.length - 1) {
      showResult();
      return;
    }
    position++;
    showQuestion();
  });
  start.hidden = false;
})();
