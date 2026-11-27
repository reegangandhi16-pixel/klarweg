(() => {
  'use strict';
  const byId = suffix => document.getElementById('articles-' + suffix);
  const words = Array.from(document.querySelectorAll('#articles-words tbody tr'), row => {
    const [singular, plural, meaning] = Array.from(row.cells, cell => cell.textContent);
    return { singular, plural, meaning, article: singular.split(' ')[0], noun: singular.slice(4) };
  });
  const choices = Array.from(document.querySelectorAll('[data-article]'));
  const next = byId('next');
  let round = [];
  let missed = [];
  let position = 0;

  function begin(pool) {
    round = [...pool];
    for (let i = round.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [round[i], round[j]] = [round[j], round[i]];
    }
    missed = [];
    position = 0;
    byId('results').hidden = true;
    byId('quiz').hidden = false;
    showWord();
  }

  function showWord() {
    byId('progress').textContent = 'Word ' + (position + 1) + ' of ' + round.length;
    byId('noun').textContent = round[position].noun;
    byId('feedback').textContent = '';
    byId('meaning').textContent = '';
    next.hidden = true;
    choices.forEach(choice => { choice.disabled = false; });
    byId('noun').focus();
  }

  choices.forEach(choice => choice.addEventListener('click', () => {
    if (!next.hidden) return;
    const word = round[position];
    const correct = choice.dataset.article === word.article;
    if (!correct) missed.push(word);
    byId('feedback').textContent = (correct ? 'Correct. ' : 'Correct answer: ') + word.singular + '. Plural: ' + word.plural + '.';
    byId('meaning').textContent = word.meaning;
    next.textContent = position + 1 === round.length ? 'See my score' : 'Next word';
    next.hidden = false;
    next.focus();
    choices.forEach(button => { button.disabled = true; });
  }));

  next.addEventListener('click', () => {
    if (next.hidden) return;
    position++;
    if (position < round.length) {
      showWord();
      return;
    }
    next.hidden = true;
    byId('quiz').hidden = true;
    byId('results').hidden = false;
    byId('score').textContent = (round.length - missed.length) + ' of ' + round.length + ' correct.';
    byId('retry').hidden = missed.length === 0;
    byId('result-title').focus();
  });

  byId('retry').addEventListener('click', () => { if (missed.length) begin(missed); });
  byId('restart').addEventListener('click', () => begin(words));
  byId('start').addEventListener('click', () => begin(words));
  byId('start').hidden = false;
})();
