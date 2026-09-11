/* Klarweg — German word tokenizer. SINGLE SOURCE OF TRUTH for splitting text
   into German-word candidates for dictionary lookup. Every renderer in
   chapter-app.js uses this — never duplicate the character class elsewhere.
   Extend HERE (new accented loanword letters, orthographic rules) and every
   renderer/consumer picks it up at once. Loaded before chapter-app.js. */
window.KW_GERMAN_WORD_CHARS = "A-Za-zÄÖÜäöüßéèêëàâîïôûùçÉÈ";
window.KW_germanWordRegex = function germanWordRegex() {
  // Regex objects with the 'g' flag carry mutable lastIndex state, so each
  // call site gets its own fresh instance rather than sharing one.
  var c = window.KW_GERMAN_WORD_CHARS;
  return new RegExp('[' + c + '][' + c + "'\u2019-]*", 'g');
};
