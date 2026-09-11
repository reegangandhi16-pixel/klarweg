/* Klarweg Story-Dialogue validator (run via run_script).
   Loads a chapter data file, extracts the EXACT object the renderer reads,
   and enforces the two-speaker / voice-mapping contract. */
const FEMALE = ['anna','emma','laura','lisa','sarah','julia','lena','mia','eva','marie','clara','nina','sofia','hanna','frau','lehrerin','ärztin','kellnerin','verkäuferin','sofie','katrin','petra','klein','weber'];
const MALE   = ['max','lukas','david','ben','paul','jonas','leon','felix','tim','daniel','kai','jan','noah','simon','rohan','herr','lehrer','arzt','kellner','verkäufer','tom','sharma'];
const OLD_CAST = ['anna','max','rohan','weber','frau weber']; // pre-rewrite recurring cast

function nameGender(name){
  const l = name.toLowerCase();
  if (MALE.some(m=>l.includes(m)) && !/frau/.test(l)) return 'male';
  if (FEMALE.some(f=>l.includes(f))) return 'female';
  return 'unknown';
}
function loadChapter(src){
  const fn = new Function('window', src + '\n;return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;');
  return fn({});
}
// Returns {ok, id, errors:[], warnings:[], speakers, female}
function validateChapter(src, file){
  const errors=[], warnings=[];
  let C; try { C = loadChapter(src); } catch(e){ return {ok:false, file, errors:['parse error: '+e.message], warnings:[]}; }
  const id = C && C.id || file;
  const S = C && C.story;
  if (!S){ return {ok:false, id, file, errors:['no story object'], warnings:[]}; }
  const dlg = S.dialogue || [];
  if (!dlg.length) errors.push('empty dialogue');
  const speakers = dlg.map(l=>l.speaker);
  const distinct = [...new Set(speakers)];
  // 1. exactly two speakers
  if (distinct.length !== 2) errors.push('speaker count = '+distinct.length+' ('+distinct.join(', ')+') — must be exactly 2');
  // effective femaleSpeakers (renderer default if unset)
  const fem = S.femaleSpeakers || ['Anna','Frau Weber','Lena','Frau Klein'];
  if (!S.femaleSpeakers) warnings.push('femaleSpeakers not set — renderer falls back to default (risky)');
  // 2/3. one male + one female via renderer's genderFor logic
  const genderOf = sp => (fem.indexOf(sp) >= 0 ? 'female' : 'male');
  const voiced = distinct.map(sp=>({sp, voice: genderOf(sp), name: nameGender(sp)}));
  const nFemaleVoiced = voiced.filter(v=>v.voice==='female').length;
  const nMaleVoiced   = voiced.filter(v=>v.voice==='male').length;
  if (distinct.length===2 && !(nFemaleVoiced===1 && nMaleVoiced===1))
    errors.push('voice split not 1F/1M: '+voiced.map(v=>v.sp+'→'+v.voice).join(', '));
  // 8. audio mapping sanity: voiced gender should match the name's apparent gender
  voiced.forEach(v=>{ if (v.name!=='unknown' && v.name!==v.voice)
    errors.push('audio mapping: "'+v.sp+'" voiced '+v.voice+' but name looks '+v.name+' (fix femaleSpeakers)'); });
  // 6. femaleSpeakers must list exactly the female-voiced speaker(s) actually used; no stray/leftover names
  fem.forEach(f=>{ if (S.femaleSpeakers && distinct.indexOf(f)<0) warnings.push('femaleSpeakers lists "'+f+'" but no such speaker in dialogue'); });
  // 4/5. hidden extra speaker via per-line voice field
  dlg.forEach((l,i)=>{ if (l.voice && ['male','female'].indexOf(l.voice)<0) errors.push('line '+(i+1)+' invalid voice "'+l.voice+'"'); });
  // "no remaining references to old characters" — old cast appearing but NOT a current speaker
  const meta = [S.intro||'', S.scene||'', S.headline||''].join(' ').toLowerCase();
  OLD_CAST.forEach(n=>{ if (meta.includes(n) && !distinct.some(d=>d.toLowerCase().includes(n)))
    warnings.push('metadata mentions old character "'+n+'" who is not a current speaker'); });
  // 7. story metadata should reference the actual speakers (soft)
  distinct.forEach(sp=>{ const first=sp.split(' ').pop().toLowerCase();
    if (!meta.includes(first) && !meta.includes(sp.toLowerCase())) warnings.push('intro/scene never names speaker "'+sp+'"'); });
  // token integrity: every non-plain token needs a role + w
  let tokBad=0; dlg.forEach(l=>(l.tokens||[]).forEach(t=>{ if(!t.plain && (!t.w||!t.role)) tokBad++; }));
  if (tokBad) errors.push(tokBad+' token(s) missing w/role');
  // mangled {plain:true}: an external generator once split the property into
  // key and value, writing role:'plain' + en:String(true) and filling the rest
  // with String(undefined). Matched on the FULL five-field signature — en:'true'
  // alone is a legitimate gloss ("stimmt" = true, "falsch" = false).
  let mangled=0; dlg.forEach(l=>(l.tokens||[]).forEach(t=>{
    if (t.role==='plain' && t.en==='true' && t.hi==='undefined' && t.pron==='undefined' && t.type==='undefined') mangled++; }));
  if (mangled) errors.push(mangled+' token(s) carry the mangled {plain:true} signature (role:plain + en:"true" + undefined fields) — restore to { w, plain: true }');
  // no token FIELD may hold the literal string 'undefined' (absent properties
  // are fine; this only catches String(undefined) leaking into the data).
  const TOKEN_FIELDS=['w','role','en','hi','pron','type','ex','exEn','why','lemma','plural'];
  const undefHits=[]; dlg.forEach((l,li)=>(l.tokens||[]).forEach((t,ti)=>{
    TOKEN_FIELDS.forEach(k=>{ if (t[k]==='undefined') undefHits.push('line '+(li+1)+' token '+(ti+1)+' .'+k); }); }));
  if (undefHits.length) errors.push(undefHits.length+' token field(s) hold the literal string "undefined": '+undefHits.slice(0,6).join(', ')+(undefHits.length>6?' …':''));
  return {ok: errors.length===0, id, file, errors, warnings, speakers:distinct, femaleSpeakers:fem, lines:dlg.length};
}
