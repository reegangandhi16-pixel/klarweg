(() => {
  const buttons = [...document.querySelectorAll('[data-speak]')];
  const status = document.getElementById('listening-status');
  const speech = window.speechSynthesis;
  if (!buttons.length || !status || !speech || !window.SpeechSynthesisUtterance) return;

  let germanVoice;
  let playing;

  function updateVoice() {
    germanVoice = speech.getVoices().find(voice => voice.lang.toLowerCase().startsWith('de') && voice.localService);
    for (const button of buttons) button.hidden = !germanVoice;
    status.textContent = germanVoice
      ? 'Play a clip, then write your answer before opening the transcript.'
      : 'No on-device German voice is available. Ask a practice partner to read the transcripts aloud.';
  }

  function reset(button, clip) {
    if (playing !== clip) return;
    playing = undefined;
    button.textContent = button.dataset.playLabel;
  }

  for (const button of buttons) {
    button.dataset.playLabel = button.textContent;
    button.addEventListener('click', () => {
      if (!germanVoice) return;
      const transcript = document.getElementById(button.dataset.speak);
      if (!transcript) return;
      const prior = playing;
      if (prior) {
        reset(prior.button, prior);
        speech.cancel();
        if (prior.button === button) return;
      }

      const utterance = new SpeechSynthesisUtterance(transcript.textContent);
      utterance.lang = germanVoice.lang;
      utterance.voice = germanVoice;
      utterance.rate = 0.88;
      const clip = { button, utterance };
      playing = clip;
      button.textContent = 'Stop ' + button.dataset.playLabel.slice(5);
      utterance.onend = () => reset(button, clip);
      utterance.onerror = () => {
        if (playing !== clip) return;
        reset(button, clip);
        status.textContent = 'Playback was unavailable. Open the transcript or try a different browser.';
      };
      speech.speak(utterance);
    });
  }
  speech.addEventListener('voiceschanged', updateVoice);
  updateVoice();
})();
