// register-mix + scene/intro name consistency scan over story dialogues
window.__dqa2 = async function(files, readFile){
function seg(t,key,nextKeys){const i=t.search(new RegExp('\\n  '+key+':'));if(i<0)return '';let end=t.length;for(const k of nextKeys){const j=t.indexOf('\n  '+k+':',i+3);if(j>0&&j<end)end=j;}return t.slice(i,end);}
const NX=['sections','vocab','grammar','resources','outcomes'];
const out=[];
for(const f of files){
  const t=await readFile('chapter/'+f);
  const id=(t.match(/id:\s*'([^']+)'/)||[])[1]||f;
  const st=seg(t,'story',NX);
  if(!st||/story:\s*null/.test(st)){out.push({id,skip:1});continue;}
  const intro=(st.match(/intro:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'';
  const scene=(st.match(/scene:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'';
  const lines=[];const re=/\{\s*speaker:\s*'([^']+)'([\s\S]*?)\n      \]/g;let m;
  while((m=re.exec(st))) lines.push({sp:m[1],de:[...m[2].matchAll(/w:\s*'((?:[^'\\]|\\.)*)'/g)].map(x=>x[1]).join(' ')});
  const sp=[...new Set(lines.map(l=>l.sp))];
  const txt=lines.map(l=>l.de).join(' ');
  const formal=/(^|\s)(Sie|Ihnen|Ihr|Ihre|Ihren|Ihrem)(\s|,)/.test(txt);
  const informal=/(^|\s)(du|dir|dich|dein|deine|deinen|deinem|Du|Dir)(\s|,)/.test(txt);
  const iss=[];
  if(formal&&informal) iss.push('register mix (Sie+du)');
  // names mentioned in scene that are not speakers
  const sceneNames=[...scene.matchAll(/\b([A-ZÄÖÜ][a-zäöüß]{2,})\b/g)].map(x=>x[1]);
  out.push({id,sp,scene,intro:intro.slice(0,90),iss,sceneNames});
}
return out;
};
