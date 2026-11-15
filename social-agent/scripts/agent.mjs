import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const WEBSITE='https://klarweg.in';
const now=()=>new Date(process.env.SOCIAL_NOW||Date.now());
const read=(name, fallback)=>{try{return JSON.parse(fs.readFileSync(path.join(ROOT,name),'utf8'));}catch(e){if(e.code==='ENOENT')return fallback;throw e;}};
const save=(name,obj)=>fs.writeFileSync(path.join(ROOT,name),JSON.stringify(obj,null,2)+'\n');
export const withWebsite=(caption)=>{
  const s=String(caption||'').trim();
  return s.includes(WEBSITE)?s:[s,'🌐 '+WEBSITE].filter(Boolean).join('\n\n');
};
export const validateUrl=(url)=>{
  if(!url)throw new Error('Public media URL required');
  const u=new URL(url);
  if(u.protocol!=='https:'||!u.hostname||u.hostname==='localhost'||u.hostname.endsWith('.local')||u.searchParams.has('Expires')||u.searchParams.has('X-Amz-Expires'))throw new Error('Image needs durable HTTPS URL');
  if(!/\.(png|jpg|jpeg)$/i.test(u.pathname))throw new Error('Media must be a stable PNG/JPEG URL');
  return url;
};
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
async function post(url,fields,token){
  const body=new URLSearchParams({...fields,access_token:token});
  const res=await fetch(url,{method:'POST',body,signal:AbortSignal.timeout(45000)});
  const data=await res.json().catch(()=>({error:{message:'HTTP '+res.status}}));
  if(!res.ok||data.error)throw new Error('Platform refused action ('+res.status+'): '+(data.error?.message||'unknown error'));
  return data;
}
async function publishFacebook(item){
  const token=process.env.FACEBOOK_PAGE_TOKEN;
  const page=process.env.FACEBOOK_PAGE_ID;
  if(!token||!page)throw new Error('Facebook token and Page ID are not configured');
  return post('https://graph.facebook.com/v27.0/'+encodeURIComponent(page)+'/photos',{
    url:validateUrl(item.image_url),message:withWebsite(item.caption),published:'true'
  },token);
}
async function publishThreads(item){
  const token=process.env.THREADS_ACCESS_TOKEN;
  if(!token)throw new Error('Threads token is not configured');
  const text=withWebsite(item.text);
  if(text.length>500)throw new Error('Threads caption too long: '+text.length);
  const type=item.image_url?'IMAGE':'TEXT';
  const payload={media_type:type,text};
  if(type==='IMAGE')payload.image_url=validateUrl(item.image_url);
  const created=await post('https://graph.threads.net/v1.0/me/threads',payload,token);
  if(!created.id)throw new Error('Threads container ID missing');
  if(type==='IMAGE'){
    // Threads media is asynchronous. Confirm FINISHED before the irreversible publish call.
    let ready=false;
    for(let attempt=0;attempt<10;attempt++){
      await sleep(5000);
      const r=await fetch('https://graph.threads.net/v1.0/'+encodeURIComponent(created.id)+'?fields=status',{
        headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(15000)});
      const state=await r.json().catch(()=>({}));
      if(!r.ok||state.error)throw new Error('Threads container status check failed: '+(state.error?.message||r.status));
      if(state.status==='FINISHED'){ready=true;break;}
      if(state.status==='ERROR'||state.status==='EXPIRED')throw new Error('Threads container '+state.status);
    }
    if(!ready)throw new Error('Threads image container was not ready after 50 seconds; requires manual review');
  }
  const result=await post('https://graph.threads.net/v1.0/me/threads_publish',{creation_id:created.id},token);
  return {id:result.id,container_id:created.id};
}
async function createInstagramIssue(postItem,item){
  if(!Array.isArray(item.slides)||item.slides.length!==4)throw new Error('Instagram needs four approved slide URLs');
  item.slides.forEach(validateUrl);
  const token=process.env.GITHUB_TOKEN;
  const repo=process.env.GITHUB_REPOSITORY;
  if(!token||!repo)throw new Error('GitHub token/repository unavailable');
  const body='**Manual Instagram carousel — not published by agent**\n\nTopic: '+postItem.topic+
    '\n\nSlides, in order:\n'+item.slides.map((s,i)=>String(i+1)+'. '+s).join('\n')+
    '\n\n**Caption:**\n\n'+withWebsite(item.caption)+
    '\n\nOpen Instagram, select these 4 slides, add commercially permitted music, review, and publish. Paste the live URL and close this issue.';
  const res=await fetch('https://api.github.com/repos/'+repo+'/issues',{method:'POST',headers:{
    'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','Content-Type':'application/json','X-GitHub-Api-Version':'2022-11-28'
  },body:JSON.stringify({title:'Instagram manual: '+postItem.topic+' ('+postItem.id+')',body}),signal:AbortSignal.timeout(30000)});
  const data=await res.json();
  if(!res.ok)throw new Error('Cannot create Instagram issue: '+res.status);
  return {url:data.html_url,issue:data.number,manual:true};
}
export function dueJobs(queue,ledger,clock=now()){
  const jobs=[];
  for(const p of queue.posts||[]){
    if(p.status!=='approved')continue;
    for(const platform of ['facebook','instagram','threads']){
      const item=p[platform];if(!item?.approved||!item.scheduled_at)continue;
      const key=p.id+':'+platform;
      if(ledger[key])continue;
      const time=Date.parse(item.scheduled_at);
      if(!Number.isFinite(time)||!/[zZ]|[+-]\d\d:\d\d$/.test(item.scheduled_at))throw new Error('Bad timezone schedule for '+key);
      const age=clock.getTime()-time;
      if(age<0||age>36*60*60*1000)continue;
      jobs.push({key,post:p,platform,item});
    }
  }
  return jobs;
}
export async function run({dryRun=true}={}){
  const queue=read('queue.json',{posts:[]});const ledger=read('ledger.json',{});
  const jobs=dueJobs(queue,ledger);
  if(!jobs.length){console.log('No approved, due, unpublished jobs.');return;}
  for(const job of jobs){
    const {key,post:postItem,platform,item}=job;
    console.log((dryRun?'DRY RUN':'RUN')+': '+key+' @ '+item.scheduled_at);
    if(dryRun){console.log('  Caption with site link: '+withWebsite(item.caption||item.text).slice(0,100).replace(/\n/g,' '));continue;}
    ledger[key]={state:'attempted',at:now().toISOString()};save('ledger.json',ledger);
    try{
      const result=platform==='facebook'?await publishFacebook(item):platform==='threads'?await publishThreads(item):await createInstagramIssue(postItem,item);
      ledger[key]={state:platform==='instagram'?'manual_ready':'published',at:now().toISOString(),result};
      save('ledger.json',ledger);console.log('SUCCESS: '+key+' '+JSON.stringify(result));
    }catch(e){
      ledger[key]={...ledger[key],state:'needs_manual_review',error:String(e.message).slice(0,350)};
      save('ledger.json',ledger);console.error('NEEDS MANUAL REVIEW: '+key+': '+e.message);
    }
  }
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  run({dryRun:process.env.SOCIAL_PUBLISH_ENABLED!=='true'||process.argv.includes('--dry-run')}).catch(e=>{console.error(e.message);process.exitCode=1;});
}
