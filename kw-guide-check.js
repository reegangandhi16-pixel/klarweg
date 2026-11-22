/* Self-check for multiple-choice practice on Klarweg guide pages.
   Markup: <form data-guide-check> with <fieldset data-answer="value"> items,
   each holding radio inputs and an optional hidden <p class="check-why">.
   Everything is scored in the browser; nothing is sent or stored. Without
   JavaScript the check button stays hidden and the answer key below each
   form remains available in a <details> element. */
(() => {
  for (const form of document.querySelectorAll('form[data-guide-check]')) {
    const items = [...form.querySelectorAll('fieldset[data-answer]')];
    const button = form.querySelector('[data-check-button]');
    const reset = form.querySelector('[data-reset-button]');
    const score = form.querySelector('.check-score');
    if (!items.length || !button || !score) continue;
    button.hidden = false;

    function clear() {
      for (const item of items) {
        item.classList.remove('is-right', 'is-wrong');
        const verdict = item.querySelector('.check-verdict');
        if (verdict) verdict.remove();
        const why = item.querySelector('.check-why');
        if (why) why.hidden = true;
      }
      score.textContent = '';
      if (reset) reset.hidden = true;
    }

    form.addEventListener('submit', event => event.preventDefault());
    button.addEventListener('click', () => {
      clear();
      let right = 0;
      let unanswered = 0;
      for (const item of items) {
        const chosen = item.querySelector('input[type=radio]:checked');
        const correct = chosen && chosen.value === item.dataset.answer;
        if (!chosen) unanswered += 1;
        if (correct) right += 1;
        item.classList.add(correct ? 'is-right' : 'is-wrong');
        const verdict = document.createElement('p');
        verdict.className = 'check-verdict';
        const answerInput = item.querySelector(`input[value="${CSS.escape(item.dataset.answer)}"]`);
        const answerText = answerInput && answerInput.parentElement ? answerInput.parentElement.textContent.trim() : item.dataset.answer;
        verdict.textContent = correct ? 'Correct.' : (chosen ? 'Not yet. Correct answer: ' : 'No answer chosen. Correct answer: ') + (correct ? '' : answerText);
        item.append(verdict);
        const why = item.querySelector('.check-why');
        if (why) {
          item.append(why);
          why.hidden = false;
        }
      }
      score.textContent = `You got ${right} of ${items.length} correct` + (unanswered ? ` (${unanswered} left blank).` : '.') +
        (right === items.length ? '' : ' Read the explanations, then retry the items you missed tomorrow.');
      if (reset) reset.hidden = false;
      score.focus();
    });
    if (reset) reset.addEventListener('click', () => {
      form.reset();
      clear();
      items[0].querySelector('input').focus();
    });
  }
})();
