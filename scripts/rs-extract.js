// Extract Reading + Speaking learner-facing German per chapter (line-based, fast)
window.__rs = async function(files, readFile){
  function seg(t,key,nx){const i=t.indexOf('\n  '+key+':');if(i<0)return '';let e=t.length;for(const k of nx){const j=t.indexOf('\n  '+k+':',i+3);if(j>0&&j<e)e=j;}return t.slice(i,e);}
  function join(ws){let s='';for(const w of ws){if(!s){s=w;continue;}
    if(/^[.,!?;:…)»”“]+$/.test(w)||/^[’']/.test(w)) s+=w;
    else if(/[(„«]$/.test(s)) s+=w;
    else s+=' '+w;}
    return s;}
  const out=[];
  for(const f of files){
    const t=await readFile('chapter/'+f);
    const cid=(t.match(/id:\s*'([^']+)'/)||[])[1]||f;
    const r=seg(t,'reading',['listening','speaking','writing','exercises','quiz','takeaways','revisionTips']);
    const sp=seg(t,'speaking',['writing','exercises','quiz','takeaways','revisionTips']);
    const rTokens=[...r.matchAll(/w:\s*'((?:[^'\\]|\\.)*)'/g)].map(m=>m[1]);
    const rTitle=(r.match(/title:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'';
    const rKeys=[...new Set([...r.matchAll(/\n\s{4}([a-zA-Z0-9]+):/g)].map(m=>m[1]))];
    const speaking=[];
    for(const m of sp.matchAll(/\{\s*task:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?de:\s*"((?:[^"\\]|\\.)*)"/g)) speaking.push({task:m[1],de:m[2]});
    if(!speaking.length) for(const m of sp.matchAll(/\{\s*task:\s*'((?:[^'\\]|\\.)*)'[\s\S]*?de:\s*'((?:[^'\\]|\\.)*)'/g)) speaking.push({task:m[1],de:m[2]});
    out.push({cid,level:cid.split('-')[0].toUpperCase(),reading:{title:rTitle,text:join(rTokens),tokens:rTokens.length,keys:rKeys},speaking});
  }
  return out;
};
