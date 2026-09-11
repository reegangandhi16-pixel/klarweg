
/* Klarweg B2 CURRICULUM validator — same shape as _validate-curriculum-b1.js but
   gates match B2's own grammar sequence. Vocab pool = ALL A1+A2+B1 chapters + B2 chapters up to and including current.
   Usage: validateCurriculumB2(src, idxA1, idxA2, idxB1, idxB2, file, lexSet) */

const GLUE_B2 = new Set(('ich du er sie es wir ihr man mich dich sich uns euch ihnen der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'name deutsch herr frau').split(/\s+/));

const B2_GATES = [
 { label: 'Konzessivsätze (obgleich/obschon/wenngleich)', gate: 15, re: /\b(obgleich|obschon|wenngleich)\b/ },
 { label: 'Konsekutivsätze (sodass/infolgedessen)', gate: 16, re: /\b(sodass|infolgedessen)\b/ },
 { label: 'Modalsätze (indem)', gate: 17, re: /\bindem\b/ },
 { label: 'Modalsätze (dadurch dass)', gate: 18, re: /\bdadurch,?\s*dass\b/ },
 { label: 'ohne...zu', gate: 19, re: /\bohne\s+(zu\s+\w+en|[\w\s]+\bzu\b\s*\w+en)\b/ },
 { label: 'anstatt...zu', gate: 20, re: /\b(anstatt|statt)\s+(zu\s+\w+en|[\w\s]+\bzu\b\s*\w+en)\b/ },
 { label: 'sowohl...als auch', gate: 21, re: /\bsowohl\b.*\bals auch\b/ },
 { label: 'weder...noch', gate: 22, re: /\bweder\b.*\bnoch\b/ },
 { label: 'nicht nur...sondern auch', gate: 23, re: /\bnicht nur\b.*\bsondern auch\b/ },
 { label: 'einerseits...andererseits', gate: 24, re: /\beinerseits\b.*\bandererseits\b/ },
 { label: 'Konjunktiv II Vergangenheit (hätte/wäre + Partizip)', gate: 31, re: /\b(hätte|hättest|hätten|wäre|wärest|wären)\b[^.!?]*\bge\w+(t|en)\b/ },
 { label: 'Konjunktiv II Vermutungen (dürfte/müsste/könnte + sein)', gate: 32, re: /\b(dürfte|müsste)\b/ },
 { label: 'irreale Vergleiche (als ob/als wenn + Konjunktiv II)', gate: 33, re: /\bals\s+(ob|wenn)\b/ },
 { label: 'Temporalsätze während/seitdem', gate: 34, re: /\b(während|seitdem)\b/ },
 { label: 'Temporalsätze bevor/nachdem', gate: 35, re: /\b(bevor|nachdem)\b/ },
 { label: 'Relativsätze Genitiv (dessen/deren)', gate: 37, re: /\b(dessen|deren)\b/ },
 { label: 'verschachtelte Relativsätze (zwei Relativpronomen in einem Satz)', gate: 38, re: /,\s*(der|die|das|den|dem|deren|dessen)\b[^,]*,\s*(der|die|das|den|dem|deren|dessen)\b/ },
 { label: 'Relativsätze wer/der (verallgemeinernd)', gate: 39, re: /\bwer\b[^.!?]*,\s*der\b/ },
 { label: 'Zustandspassiv (sein + Partizip II als Zustand)', gate: 44, re: /\b(ist|sind|war|waren)\s+\w*ge\w+(t|en)\b(?!\s+worden)/ },
 { label: 'Passiversatz sich lassen', gate: 45, re: /\blässt?\s+sich\b|\bließ(e|en)?\s+sich\b/ },
 { label: 'unpersönliches Passiv (es wird ... + Partizip)', gate: 46, re: /\bes\s+wird\s+\w*\s*ge\w+(t|en)\b/ },
 { label: 'bekommen/kriegen-Passiv', gate: 47, re: /\b(bekomme|bekommst|bekommt|bekommen|kriege|kriegst|kriegt|kriegen)\b[^.!?]*\bge\w+(t|en)\b/ },
 { label: 'Modalitätsersatz haben/sein + zu + Infinitiv', gate: 48, re: /\b(habe|hast|hat|haben|ist|sind)\s+zu\s+\w+en\b/ },
 { label: 'Nominalisierung (Verb→Nomen, die/der ...ung/...heit/...keit as subject of formal sentence)', gate: 50, re: /\b(Erhöhung|Verringerung|Feststellung|Untersuchung|Betrachtung|Beobachtung)\b/ },
 { label: 'erweiterte Partizipialattribute (der/die/das + long adjective phrase + Partizip + Nomen)', gate: 51, re: /\b(der|die|das)\s+\w+\s+ge\w+(te|ten|nes|ner)\s+[A-ZÄÖÜ]\w+|\b(der|die|das)\s+\w+\s+\w+end(e|en|em|er|es)\s+[A-ZÄÖÜ]\w+/ },
 { label: 'Funktionsverbgefüge (in Anspruch nehmen, zur Verfügung stellen etc.)', gate: 54, re: /\b(in\s+\w+\s+nehmen|zur\s+Verfügung\s+stellen|zum\s+Ausdruck\s+bringen|in\s+Kraft\s+treten)\b/ },
 { label: 'Modalpartikeln doch/ja (emphasis particles)', gate: 55, re: /\b(doch mal|ja auch|doch wohl)\b/ },
 { label: 'Modalpartikeln eben/halt', gate: 56, re: /\b(eben|halt)\b(?=.*\b(ist|sind|war|hat|muss)\b)/ },
 { label: 'Konjunktiv I Formen (er/sie/es -e ending, reported speech)', gate: 59, re: /\b(sei)\b|\b(könne|wolle|müsse|solle|dürfe)\b|(?<!ich\s)\bwerde\b(?!\s+ich)/ },
 { label: 'indirekte Rede (Konjunktiv I with dass/reporting verb)', gate: 60, re: /\b(sagte|meinte|berichtete|erklärte),?\s*(dass)?\s*(er|sie|es)\s+\w+e\b/ },
 { label: 'Präpositionen mit Genitiv (angesichts/aufgrund/anhand/mangels)', gate: 64, re: /\b(angesichts|aufgrund|anhand|mangels|hinsichtlich|infolge)\b/ }
];

function norm_b2(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases_b2(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper_b2(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculumB2(src, idxA1, idxA2, idxB1, idxB2, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chaptersB2=idxB2.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chaptersB2.find(c=>c.id===id)||chaptersB2.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in B2 index'],warnings:[]};

  const firstIntro=new Map();
  idxA1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -3000+c.num); })));
  idxA2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -2000+c.num); })));
  idxB1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -1000+c.num); })));
  chaptersB2.filter(c=>c.num<=me.num).forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b2(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w, c.num); })));
  const introOf=w=>{ let m=null; for(const b of bases_b2(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    B2_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate b2-ch'+g.gate+' > b2-ch'+me.num+')'); }});
  });

  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper_b2(t)) return;
    const w=norm_b2(t.w); if(!w) return; content++;
    if(GLUE_B2.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(b2-ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !unknown.includes(t.w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
