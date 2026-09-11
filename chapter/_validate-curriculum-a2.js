/* Klarweg A2 CURRICULUM validator — same shape as _validate-curriculum.js but
   gates match A2's own grammar sequence. Vocab pool = ALL A1 chapters + A2 chapters up to and including current.
   Usage: validateCurriculumA2(src, idxA1, idxA2, file, lexSet) */

const GLUE = new Set(('ich du er sie es wir ihr man mich dich sich uns euch ihnen der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'name deutsch herr frau').split(/\s+/));

const A2_GATES = [
 { label: 'weil-clause', gate: 4, re: /\bweil\b/ },
 { label: 'dass-clause', gate: 5, re: /\bdass\b/ },
 { label: 'Modal Präteritum (konnte/wollte/musste/durfte/sollte-past)', gate: 6, re: /\b(konnte|konntest|konnten|wollte|wolltest|wollten|musste|musstest|mussten|durfte|durftest|durften|sollte|sollten)\b/ },
 { label: 'Komparativ/Superlativ', gate: 8, re: /\b\w+er als\b|\bam \w+sten\b/ },
 { label: 'wenn-clause', gate: 11, re: /\bwenn\b/ },
 { label: 'werden (future/passive helper)', gate: 17, re: /\bwerde|wirst|wird|werden|werdet\b/ },
 { label: 'Indirect question (ob / W+verb-final)', gate: 19, re: /\bob\b/ },
 { label: 'Konjunktiv II (könnte)', gate: 22, re: /\bkönnte|könntest|könnten\b/ },
 { label: 'Konjunktiv II (sollte-advice/würde)', gate: 23, re: /\bwürde|würdest|würden\b/ },
 { label: 'deshalb/trotzdem connector', gate: 24, re: /\b(deshalb|trotzdem)\b/ },
 { label: 'Adjective declension (definite article)', gate: 26, re: /\b\w+(e|en|er|es)\s+(?=\b(Mann|Frau|Kind|Haus|Auto|Buch)\b)/ },
 { label: 'Relativsatz (der/die/das as relative pronoun mid-clause)', gate: 33, re: /,\s*(der|die|das|den|dem)\s+\w+\s+(ist|sind|hat|war|kommt)\b/ }
];

function norm(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculumA2(src, idxA1, idxA2, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chaptersA2=idxA2.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chaptersA2.find(c=>c.id===id)||chaptersA2.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in A2 index'],warnings:[]};

  // vocab pool: ALL A1 chapters + A2 chapters up to and including current
  const firstIntro=new Map();
  idxA1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -1000+c.num); })));
  chaptersA2.filter(c=>c.num<=me.num).forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w, c.num); })));
  const curVSet=new Set(me.vocab.flatMap(v=>v.split(/\s+/).map(norm)));
  const introOf=w=>{ let m=null; for(const b of bases(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    A2_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate a2-ch'+g.gate+' > a2-ch'+me.num+')'); }});
  });

  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper(t)) return;
    const w=norm(t.w); if(!w) return; content++;
    if(GLUE.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(a2-ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !unknown.includes(t.w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
