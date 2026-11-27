(() => {
  'use strict';

  const normalize = value => value.normalize('NFC').toLocaleLowerCase('de')
    .replace(/[,.!?;:]/g, '').trim().replace(/\s+/g, ' ');

  function button(text, handler, className) {
    const control = document.createElement('button');
    control.type = 'button';
    control.textContent = text;
    control.className = className;
    control.addEventListener('click', handler);
    return control;
  }

  document.querySelectorAll('.exercise').forEach(exercise => {
    const controls = exercise.querySelector('.exercise-controls');
    const source = exercise.querySelector('.prompt-words');
    const correct = [...exercise.querySelectorAll('.model-answers li')].map(item => normalize(item.textContent));
    const details = exercise.querySelector('details');
    const feedback = document.createElement('p');
    feedback.className = 'feedback';
    feedback.setAttribute('role', 'status');
    let readAnswer;
    let reset;

    if (exercise.dataset.mode === 'edit') {
      const label = document.createElement('label');
      label.textContent = 'Your corrected German sentence';
      const input = document.createElement('textarea');
      input.lang = 'de';
      input.rows = 2;
      label.append(input);
      controls.append(label);
      input.addEventListener('input', () => { feedback.textContent = ''; });
      readAnswer = () => input.value;
      reset = () => { input.value = ''; input.focus(); };
    } else {
      const tokens = source.textContent.split(' / ');
      const chosen = [];
      const pool = document.createElement('div');
      pool.className = 'tiles';
      pool.lang = 'de';
      const built = document.createElement('div');
      built.className = 'tiles built';
      built.lang = 'de';

      const keys = tokens.map((token, index) => button(token, () => {
        chosen.push(index);
        render();
        const next = keys.find(key => !key.disabled);
        (next || check).focus();
      }, 'tile'));
      pool.append(...keys);

      function render() {
        feedback.textContent = '';
        keys.forEach((key, index) => { key.disabled = chosen.includes(index); });
        built.replaceChildren(...chosen.map((index, position) => button(tokens[index], () => {
          chosen.splice(position, 1);
          render();
          keys[index].focus();
        }, 'tile')));
      }

      controls.append(pool, built);
      source.hidden = true;
      readAnswer = () => chosen.length === tokens.length ? chosen.map(index => tokens[index]).join(' ') : '';
      reset = () => { chosen.length = 0; render(); keys[0].focus(); };
    }

    const actions = document.createElement('div');
    actions.className = 'actions';
    const check = button('Check', () => {
      const answer = normalize(readAnswer());
      if (!answer) {
        feedback.textContent = exercise.dataset.mode === 'edit' ? 'Enter your sentence first.' : 'Use every tile before checking.';
      } else if (correct.includes(answer)) {
        feedback.textContent = 'Correct. Open the explanation to review the rule.';
      } else {
        feedback.textContent = 'This order does not match the model answers. Revise it or open the explanation to compare.';
      }
    }, 'btn primary');
    actions.append(check, button('Reset', () => {
      feedback.textContent = '';
      details.open = false;
      reset();
    }, 'btn btn-secondary'));
    controls.append(actions, feedback);
    controls.hidden = false;
  });
})();
