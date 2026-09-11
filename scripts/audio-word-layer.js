/* Klarweg — clickable-word (word-popup) audio layer resolver.
   The popup exposes exactly two kinds of audio control (chapter-app.js):

     .wp-audio       one per popup. data-audio-text = the DISPLAYED surface form.
                     Click → speakWordFemale(t.w): resolveHeadword(surface) against
                     the CHAPTER's own vocab index, then KW_speak(headword,
                     {gender:'female'}). Long-press only changes playbackRate, so
                     Slow / Very-slow need no extra asset.
     .wp-mini-audio  one per paradigm cell (Comparison / Conjugation / Number /
                     Declension). Click → Audio.speak(cleanForm) with NO gender,
                     i.e. the text-keyed manifest, default voice.
                     cleanForm = form.replace(/^(am|ist|hat)\s+/, '')

   Paradigm cells come from the resolved token: t.compare, t.conj, t.plural, plus
   two closed sets hard-coded in chapter-app.js (article + personal-pronoun
   declension). This module reproduces those cells from the SAME authored data
   the runtime resolver uses: chapter/global-lexicon.js
   (KW_GLOBAL_LEXICON + KW_INFLECTIONS). */
(function (root) {
  'use strict';

  const DEFINITE_ARTICLE_TABLE = {
    m: { Nominativ: 'der', Akkusativ: 'den', Dativ: 'dem', Genitiv: 'des' },
    f: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'der', Genitiv: 'der' },
    n: { Nominativ: 'das', Akkusativ: 'das', Dativ: 'dem', Genitiv: 'des' },
    pl: { Nominativ: 'die', Akkusativ: 'die', Dativ: 'den', Genitiv: 'der' }
  };
  const INDEF_ARTICLE_TABLE = {
    m: { Nominativ: 'ein', Akkusativ: 'einen', Dativ: 'einem', Genitiv: 'eines' },
    f: { Nominativ: 'eine', Akkusativ: 'eine', Dativ: 'einer', Genitiv: 'einer' },
    n: { Nominativ: 'ein', Akkusativ: 'ein', Dativ: 'einem', Genitiv: 'eines' }
  };
  const PRONOUN_DECLENSION = {
    ich: { Nominativ: 'ich', Akkusativ: 'mich', Dativ: 'mir' },
    du: { Nominativ: 'du', Akkusativ: 'dich', Dativ: 'dir' },
    er: { Nominativ: 'er', Akkusativ: 'ihn', Dativ: 'ihm' },
    es: { Nominativ: 'es', Akkusativ: 'es', Dativ: 'ihm' },
    wir: { Nominativ: 'wir', Akkusativ: 'uns', Dativ: 'uns' }
  };

  function normWord(w) {
    return String(w || '').toLowerCase()
      .replace(/[.,!?;:„“”‚‘’»«()¿¡…—–]/g, '')
      .replace(/^['’-]+|['’-]+$/g, '')
      .trim();
  }
  const clean = f => String(f || '').replace(/^(am|ist|hat)\s+/, '').trim();

  /* forms(surface, LEX, INF) -> { lexeme, type, paradigm, forms[] } */
  function forms(surface, LEX, INF) {
    const key = normWord(surface);
    let lex = LEX[key] || null, via = lex ? 'lexeme' : null;
    if (!lex && INF[key]) { lex = LEX[normWord(INF[key])] || null; via = lex ? 'inflection' : null; }
    const out = { surface, lexemeKey: lex ? normWord(lex.w) : null, via, type: lex ? (lex.type || null) : null, paradigm: null, forms: [] };
    const type = String((lex && lex.type) || '').toLowerCase();

    if (lex && lex.compare) {
      out.paradigm = 'Comparison';
      [lex.compare.positive || lex.w, lex.compare.comparative, lex.compare.superlative]
        .filter(Boolean).forEach(f => out.forms.push(clean(f)));
    }
    if (lex && lex.conj) {
      out.paradigm = out.paradigm ? out.paradigm + '+Conjugation' : 'Conjugation';
      out.forms.push(clean(lex.w));                       // Infinitive
      const pr = lex.conj.praesens;
      if (pr && typeof pr === 'object') {
        ['ich', 'du', 'er', 'wir', 'ihr', 'sie'].forEach(p => { if (pr[p]) out.forms.push(clean(pr[p])); });
      } else if (pr) out.forms.push(clean(pr));
      if (lex.conj.praeteritum) out.forms.push(clean(lex.conj.praeteritum));
      if (lex.conj.perfekt) out.forms.push(clean(lex.conj.perfekt));
    }
    if (lex && lex.plural && lex.plural !== '—' && type.indexOf('noun') !== -1) {
      out.paradigm = out.paradigm ? out.paradigm + '+Number' : 'Number';
      out.forms.push(clean(lex.w), clean(lex.plural));
    }
    // closed sets — driven by the surface itself, exactly as the popup does.
    // Any surface that appears anywhere in the article tables gets its family's
    // full row (the popup disambiguates the family from the token's authored
    // type; every family it can pick is a real audio target either way).
    const fam = (tbl) => Object.keys(tbl).filter(g => Object.values(tbl[g]).map(normWord).indexOf(key) !== -1);
    const defFams = fam(DEFINITE_ARTICLE_TABLE), indefFams = fam(INDEF_ARTICLE_TABLE);
    if (defFams.length || indefFams.length) {
      out.paradigm = out.paradigm ? out.paradigm + '+Declension' : 'Declension';
      defFams.forEach(g => Object.values(DEFINITE_ARTICLE_TABLE[g]).forEach(f => out.forms.push(clean(f))));
      if (!defFams.length) indefFams.forEach(g => Object.values(INDEF_ARTICLE_TABLE[g]).forEach(f => out.forms.push(clean(f))));
    }
    // Personal pronouns: the popup keys the table on the LEMMA, so any form in
    // a row (mir → ich) brings that whole row.
    Object.keys(PRONOUN_DECLENSION).forEach(lemma => {
      const row = PRONOUN_DECLENSION[lemma];
      if (Object.values(row).map(normWord).indexOf(key) === -1) return;
      out.paradigm = out.paradigm ? out.paradigm + '+Declension' : 'Declension';
      Object.values(row).forEach(f => out.forms.push(clean(f)));
    });
    out.forms = [...new Set(out.forms.filter(Boolean))];
    return out;
  }

  root.KW_WORD_LAYER = { forms, normWord, clean, DEFINITE_ARTICLE_TABLE, INDEF_ARTICLE_TABLE, PRONOUN_DECLENSION };
})(typeof globalThis !== 'undefined' ? globalThis : this);
