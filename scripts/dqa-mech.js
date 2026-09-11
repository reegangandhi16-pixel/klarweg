// Mechanical dialogue QA pass (story + listening) — used by audit/dqa-mech-*.json
window.__dqaFn = async function(files, readFile){
const dev=/[\u0900-\u097F]/, edit=/(TODO|FIXME|\[\[|XXX|\bTBD\b)/;
const out=[];
function seg(t,key,nextKeys){
  const i=t.search(new RegExp('\\n  '+key+':'));
  if(i<0) return '';
  let end=t.length;
  for(const k of nextKeys){const j=t.indexOf('\n  '+k+':',i+3);if(j>0&&j<end)end=j;}
  return t.slice(i,end);
}
for(const f of files){
  const t=await readFile('chapter/'+f);
  const id=(t.match(/id:\s*'([^']+)'/)||[])[1]||f;
  const st=seg(t,'story',['sections','vocab','grammar','resources','outcomes']);
  const ls=seg(t,'listening',['speaking','writing','exercises','quiz','takeaways','revisionTips']);
  const intro=(st.match(/intro:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'';
  const scene=(st.match(/scene:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'';
  const fem=[...(st.match(/femaleSpeakers:\s*\[([^\]]*)\]/)||['',''])[1].matchAll(/'([^']+)'/g)].map(m=>m[1]);
  const lines=[];
  const re=/\{\s*speaker:\s*'([^']+)'([\s\S]*?)\n      \]/g;let m;
  while((m=re.exec(st))){
    const ws=[...m[2].matchAll(/w:\s*'((?:[^'\\]|\\.)*)'/g)].map(x=>x[1]);
    lines.push({sp:m[1],de:ws.join(' ')});
  }
  const lsLines=[...ls.matchAll(/speaker:\s*'([^']+)',\s*gender:\s*'([^']+)'[^\n]*?de:\s*'((?:[^'\\]|\\.)*)'/g)].map(x=>({sp:x[1],g:x[2],de:x[3]}));
  const sp=[...new Set(lines.map(l=>l.sp))];
  const lsp=[...new Set(lsLines.map(l=>l.sp))];
  const iss=[];
  if(sp.length!==2) iss.push(`story speakers=${sp.length} (${sp.join('/')})`);
  const femIn=sp.filter(s=>fem.includes(s));
  if(sp.length===2&&femIn.length!==1) iss.push(`gender split bad: fem=[${fem.join(',')}] sp=[${sp.join(',')}]`);
  const stale=fem.filter(s=>!sp.includes(s));
  if(stale.length) iss.push('stale femaleSpeakers: '+stale.join(','));
  const notInIntro=sp.filter(s=>intro&&!intro.includes(s));
  if(notInIntro.length) iss.push('not in intro: '+notInIntro.join(','));
  if(!scene) iss.push('no scene');
  if(lines.length<6) iss.push('story lines='+lines.length);
  if(!ls) iss.push('no listening section');
  else{
    if(lsp.length!==2) iss.push(`listening speakers=${lsp.length} (${lsp.join('/')})`);
    const gs=[...new Set(lsLines.map(l=>l.g))];
    if(lsp.length===2&&!(gs.includes('male')&&gs.includes('female'))) iss.push('listening gender not m+f: '+gs.join(','));
    const diff=lsp.filter(s=>!sp.includes(s));
    if(diff.length) iss.push('listening speakers differ from story: '+diff.join(','));
    if(lsLines.length<4) iss.push('listening lines='+lsLines.length);
  }
  const all=[...lines.map(l=>l.de),...lsLines.map(l=>l.de)].join(' ');
  if(dev.test(all)) iss.push('Devanagari in German');
  if(edit.test(all)) iss.push('editorial marker');
  const last=lines.length?lines[lines.length-1].de.trim():'';
  if(last&&/\?$/.test(last)) iss.push('story ends on question');
  const lslast=lsLines.length?lsLines[lsLines.length-1].de.trim():'';
  if(lslast&&/\?$/.test(lslast)) iss.push('listening ends on question');
  out.push({id,f,sp,fem,lsp,n:lines.length,ln:lsLines.length,iss});
}
return out;
};
