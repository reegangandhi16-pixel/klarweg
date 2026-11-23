import {test} from 'node:test';
import assert from 'node:assert/strict';
import {WEBSITE,withWebsite,validateUrl,dueJobs} from './agent.mjs';
test('append canonical website to every caption',()=>{
  assert.equal(withWebsite('Hello'),'Hello\n\n🌐 '+WEBSITE);
  assert.equal(withWebsite('Hello '+WEBSITE),'Hello '+WEBSITE);
});
test('reject expiring or invalid media',()=>{
  for(const url of ['http://example.com/a.png','https://example.com/a.jpg?Expires=42','file:///a.png','https://example.com/a.svg'])assert.throws(()=>validateUrl(url));
  assert.equal(validateUrl('https://static.example.com/photo.jpg'),'https://static.example.com/photo.jpg');
});
test('only approved, due, not previously attempted',()=>{
  const q={posts:[{id:'a',status:'approved',facebook:{approved:true,scheduled_at:'2026-11-17T13:00:00+05:30'},threads:{approved:true,scheduled_at:'2026-11-19T20:15:00+05:30'}}]};
  const at=new Date('2026-11-17T14:00:00+05:30');
  assert.deepEqual(dueJobs(q,{},at).map(x=>x.key),['a:facebook']);
  assert.deepEqual(dueJobs(q,{'a:facebook':{state:'attempted'}},at),[]);
  q.posts[0].status='draft';assert.equal(dueJobs(q,{},at).length,0);
});

test('six four-hour IST slots process independently across midnight',()=>{
  const slots=['2026-11-17T04:00:00+05:30','2026-11-17T08:00:00+05:30','2026-11-17T12:00:00+05:30','2026-11-17T16:00:00+05:30','2026-11-17T20:00:00+05:30','2026-11-18T00:00:00+05:30'];
  const posts=slots.map((time,i)=>({id:'slot-'+(i+1),status:'approved',facebook:{approved:true,scheduled_at:time}}));
  for(let i=0;i<slots.length;i++){
    const clock=new Date(new Date(slots[i]).getTime()+60*1000);
    const ledger=Object.fromEntries(slots.slice(0,i).map((_,j)=>['slot-'+(j+1)+':facebook',{state:'published'}]));
    assert.deepEqual(dueJobs({posts},ledger,clock).map(x=>x.key),['slot-'+(i+1)+':facebook']);
  }
});
