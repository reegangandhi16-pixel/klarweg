
/* Klarweg B1 CURRICULUM validator — same shape as _validate-curriculum-a2.js but
   gates match B1's own grammar sequence. Vocab pool = ALL A1 + A2 chapters + B1 chapters up to and including current.
   Usage: validateCurriculumB1(src, idxA1, idxA2, idxB1, file, lexSet) */

const GLUE_B1 = new Set(('ich du er sie es wir ihr man mich dich sich uns euch ihnen der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'name deutsch herr frau').split(/\s+/));

const B1_GATES = [
 { label: 'Infinitiv mit zu', gate: 1, re: /\bzu\s+\w+en\b/ },
 { label: 'weil/da/obwohl (Nebensatz)', gate: 2, re: /\b(weil|da|obwohl)\b/ },
 { label: 'Konjunktiv II höfliche Bitten (könnten/würden/hätten)', gate: 3, re: /\b(könnten|würden|würde|hätten)\b/ },
 { label: 'deshalb/so dass (Folge)', gate: 4, re: /\b(deshalb|sodass|so dass)\b/ },
 { label: 'Genitiv (wegen/trotz/während)', gate: 5, re: /\b(wegen|trotz|während)\b/ },
 { label: 'Präteritum (regular/irregular past)', gate: 7, re: /\b(war|warst|waren|wart|hatte|hattest|hatten|hattet|kam|kamst|kamen|ging|gingst|gingen|sah|sahst|sahen|gab|gabst|gaben|nahm|nahmst|nahmen|fuhr|fuhrst|fuhren|blieb|bliebst|blieben)\b/ },
 { label: 'Zeitangaben Dativ/Genitiv', gate: 8, re: /\b(eines Tages|innerhalb|außerhalb)\b/ },
 { label: 'Passiv Präsens (wird + Partizip II)', gate: 10, re: /\bwird\s+\w+\s*(t|en)\b/ },
 { label: 'Relativsätze Dativ (dem/der/denen)', gate: 11, re: /,\s*(dem|der|denen)\s+\w+/ },
 { label: 'Komparativ/Superlativ vor Nomen', gate: 14, re: /\b\w+(er|ere|eren|erer|eres)\s+\w+\b.*\bals\b/ },
 { label: 'n-Deklination', gate: 15, re: /\b(den|dem)\s+\w+en\b(?=.*(Junge|Kunde|Kollege|Herr|Mensch|Student))/ },
 { label: 'Futur I (werde + Infinitiv)', gate: 16, re: /\b(werde|wirst|wird|werden|werdet)\b(?!.*\bge\w+\b)[^.!?]*\b\w*[^get]en\b[.!?]/ },
 { label: 'Nebensatz damit/um zu', gate: 17, re: /\bdamit\s+(ich|du|er|sie|es|wir|ihr|man)\b|\bum\s+\w+\s+zu\b/ },
 { label: 'Relativsätze mit Präpositionen (mit dem/für die etc.)', gate: 18, re: /,\s*(mit|für|von|über|auf)\s+(dem|der|das|den|denen)\s+\w+/ },
 { label: 'Plusquamperfekt (hatte/war + Partizip II)', gate: 20, re: /\b(hatte|hattest|hatten|war|warst|waren)\b.*\bge\w+(t|en)\b/ },
 { label: 'temporale Nebensätze (bevor/nachdem/während/seit/bis)', gate: 21, re: /\b(bevor|nachdem|seitdem)\b/ },
 { label: 'brauchen + zu-Infinitiv', gate: 22, re: /\bbraucht?\w*\s+nicht\s+zu\b/ },
 { label: 'Reflexivpronomen Akkusativ/Dativ (mir/dir as reflexive)', gate: 23, re: /\b(kaufe|wasche|putze)\s+(mir|dir)\b/ },
 { label: 'zweiteilige Konnektoren (sowohl...als auch, entweder...oder, weder...noch, je...desto)', gate: 24, re: /\b(sowohl.*als auch|entweder.*oder|weder.*noch)\b/ },
 { label: 'Passiv (alle Zeiten)', gate: 28, re: /\b(wurde|wurden)\b[^.!?]*\bge\w+(t|en)\b|\bworden\b/ },
 { label: 'Passiv mit Modalverben (muss/kann + Partizip + werden)', gate: 29, re: /\b(muss|kann|soll|darf)\s+\w+\s+werden\b/ },
 { label: 'Artikelwörter als Pronomen (der/die/das/welcher standalone)', gate: 30, re: /\b(welcher|welche|welches)\s*[.,?!]/ },
 { label: 'Adjektive als Nomen (der/die Deutsche, das Beste)', gate: 31, re: /\b(der|die)\s+(Deutsche|Kranke|Reisende|Angestellte)\b/ },
 { label: 'Relativsätze was/wo', gate: 32, re: /,\s*(was|wo)\s+\w+/ },
 { label: 'je...desto/umso', gate: 33, re: /\bje\s+\w+.*\b(desto|umso)\b/ },
 { label: 'Partizipien als Adjektive (gekochtes, lachend)', gate: 34, re: /\bge\w+(te|tes|ten|ter)\b\s+[A-ZÄÖÜ]\w+|\b\w+ende[snr]?\b\s+[A-ZÄÖÜ]\w+/ }
];

function norm_b1(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases_b1(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper_b1(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculumB1(src, idxA1, idxA2, idxB1, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chaptersB1=idxB1.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chaptersB1.find(c=>c.id===id)||chaptersB1.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in B1 index'],warnings:[]};

  const firstIntro=new Map();
  idxA1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -2000+c.num); })));
  idxA2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -1000+c.num); })));
  chaptersB1.filter(c=>c.num<=me.num).forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_b1(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w, c.num); })));
  const introOf=w=>{ let m=null; for(const b of bases_b1(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    B1_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate b1-ch'+g.gate+' > b1-ch'+me.num+')'); }});
  });

  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper_b1(t)) return;
    const w=norm_b1(t.w); if(!w) return; content++;
    if(GLUE_B1.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(b1-ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !unknown.includes(t.w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
