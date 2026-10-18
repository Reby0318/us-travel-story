/* ===== Career Recap · designs 90–93 (data: my-career.js) =====
   #v=90 skill tree · 91 MBA capability portfolio · 92 tech profile · 93 PM career roadmap
   Add &fmt=li for the 1080×1350 LinkedIn size (default is the 1080×1920 Story). */
const LVL=["","Learning","Working","Proficient","Advanced","Expert"];
function careerCtx(){
 const li=/[#&]fmt=li\b/.test(location.hash),H=li?1350:1920;
 if(li){svg.attr("height",H).attr("viewBox",`0 0 1080 ${H}`);document.documentElement.style.height=document.body.style.height=H+"px";}
 const C=Object.assign({name:"Me",role:"",target:"",org:"",period:"",headline:"Career Recap",skills:[],certs:[],projects:[],milestones:[],goals:{}},window.CAREER||{});
 const skills=C.skills.map(s=>Object.assign({group:"Skills",level:3},s,{level:Math.max(1,Math.min(5,+s.level||3))}));
 const groups=[];skills.forEach(s=>{if(!groups.includes(s.group))groups.push(s.group);});
 const by=g=>skills.filter(s=>s.group===g).sort((a,b)=>b.level-a.level);
 const gAvg=g=>{const a=by(g);return a.reduce((t,s)=>t+s.level,0)/Math.max(a.length,1);};
 const ranked=groups.slice().sort((a,b)=>gAvg(b)-gAvg(a)||by(b).length-by(a).length);
 const avg=skills.reduce((t,s)=>t+s.level,0)/Math.max(skills.length,1);
 const adv=skills.filter(s=>s.level>=4).length;
 const nm=C.name&&C.name!=="Me"?C.name:"";
 const ms=C.milestones.filter(m=>/^\d{4}-\d{2}/.test(m.date)).sort((a,b)=>a.date<b.date?-1:1);
 return {li,H,C,skills,groups,by,gAvg,top:ranked[0]||"",low:ranked[ranked.length-1]||"",avg,adv,nm,ms,
  initials:(nm||"Me").split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase()};}
/* proficiency marks */
function pips(g,x,y,lv,on,off,r=3.6,gap=11){for(let i=0;i<5;i++)g.append("circle").attr("cx",x+i*gap).attr("cy",y).attr("r",r).attr("fill",i<lv?on:off);}
function harvey(g,x,y,r,lv,ink,paper){const p=(lv-1)/4;g.append("circle").attr("cx",x).attr("cy",y).attr("r",r).attr("fill",paper).attr("stroke",ink).attr("stroke-width",1.8);
 if(p>=1)g.append("circle").attr("cx",x).attr("cy",y).attr("r",r).attr("fill",ink);
 else if(p>0)g.append("path").attr("d",d3.arc()({innerRadius:0,outerRadius:r,startAngle:0,endAngle:2*Math.PI*p})).attr("transform",`translate(${x},${y})`).attr("fill",ink);}
/* lay blocks top→bottom between y0 and y1; leftover space becomes even gaps (capped) */
function stackBlocks(blocks,y0,y1,minGap=22,maxGap=40){const tot=blocks.reduce((t,b)=>t+b.h,0);
 const gap=Math.max(minGap,Math.min(maxGap,(y1-y0-tot)/Math.max(blocks.length-1,1)));let y=y0;blocks.forEach(b=>{b.draw(y,b.h);y+=b.h+gap;});return y;}
function months(ms,min=6){if(!ms.length)return [];const toN=d=>+d.slice(0,4)*12+(+d.slice(5,7)-1);let a=toN(ms[0].date),b=toN(ms[ms.length-1].date);
 while(b-a+1<min){b++;if(b-a+1<min)a--;}const out=[];for(let n=a;n<=b;n++)out.push({n,y:Math.floor(n/12),m:n%12});return {list:out,toN};}
const MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const kebab=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

/* 90 · Skill Tree — editorial */
function v90(){const K=careerCtx(),{C,H,li}=K;
 const P={bg:"#f3eee5",ink:"#1d1b18",muted:"#857c70",line:"#d9cfbf",amber:"#c2562f"},GC=["#5f8f74","#4f74a8","#c2562f","#8a6a9c","#b08a3e"];
 bg(P.bg);noise(.05);const F=stickerFilter(5);
 edTop(P,`${(C.headline||"CAREER RECAP").toUpperCase()}  ·  ${C.period}  ·  ${C.org.toUpperCase()}`,K.skills.length,"Skill","Tree",`skills  ·  ${K.groups.length} branches  ·  ${C.certs.length} credentials`);
 drawSkillIcon(svg,"cap",968,232,1.05,10,F);
 edStats(P,370,[["NOW",C.role||"—",C.org||" "],["NEXT",C.target||"—","target role",true],["ADVANCED+",`${K.adv} of ${K.skills.length}`,"level 4–5"],["PROOF",`${C.projects.length}`,`projects · ${C.certs.length} certs`]]);
 const bot=li?1190:1350,groupY=bot-200,leafBot=groupY-92,leafTop=596,G=Math.max(K.groups.length,1),colW=936/G,g=svg.append("g");
 const rootX=540,maxK=Math.max(1,...K.groups.map(gr=>K.by(gr).length)),rowH=Math.min(150,(leafBot-leafTop)/Math.max(maxK-1,1));
 K.groups.forEach((gr,i)=>{const col=GC[i%GC.length],gx=72+colW*(i+.5),list=K.by(gr),k=list.length,dotX=72+i*colW+22;
  const y0=leafBot-(k-1)*rowH;
  // branch: root → sticker, vine: sticker → leaves
  g.append("path").attr("d",`M${rootX},${bot} C${rootX},${bot-60} ${gx},${groupY+150} ${gx},${groupY+104}`).attr("fill","none").attr("stroke",P.ink).attr("stroke-width",2.2).attr("opacity",.75);
  g.append("path").attr("d",`M${gx},${groupY-38} C${gx},${leafBot+40} ${dotX},${leafBot+50} ${dotX},${leafBot} L${dotX},${y0}`).attr("fill","none").attr("stroke",col).attr("stroke-width",2.4);
  list.forEach((s,j)=>{const y=y0+j*rowH,r=4+s.level*1.7;
   g.append("circle").attr("cx",dotX).attr("cy",y).attr("r",r).attr("fill",col).attr("stroke",P.bg).attr("stroke-width",3);
   fitT(T(g,dotX+20,y+2,s.name,{f:PLEX,w:600,s:19,c:P.ink}),colW-50,19);
   pips(g,dotX+24,y+20,s.level,col,"#e2d9cb",3.2,10);T(g,dotX+80,y+24,LVL[s.level].toUpperCase(),{f:MONO,w:500,s:10.5,ls:1.4,c:P.muted});});
  drawSkill(g,list[0]?list[0].name:gr,gx,groupY,.74,(i%2?6:-6),F);
  fitT(T(g,gx,groupY+66,gr,{f:SERIF2,i:true,w:400,s:34,c:P.ink,a:"middle"}),colW-20,34);
  T(g,gx,groupY+90,`${k} skill${k===1?"":"s"} · avg ${K.gAvg(gr).toFixed(1)}`,{f:MONO,w:500,s:13,ls:.6,c:P.muted,a:"middle"});});
 g.append("circle").attr("cx",rootX).attr("cy",bot).attr("r",7).attr("fill",P.ink);
 T(svg,rootX,bot+34,`${(K.nm||"ME").toUpperCase()}  ·  ${C.role.toUpperCase()}  →  ${C.target.toUpperCase()}`,{f:MONO,w:500,s:14,ls:2,c:P.muted,a:"middle"});
 if(!li){const y0=1440;
  [[72,"Credentials"],[572,"Proof of work"]].forEach(([x,h])=>{T(svg,x,y0,h,{f:SERIF2,i:true,w:400,s:38,c:P.ink});svg.append("line").attr("x1",x).attr("x2",x+436).attr("y1",y0+18).attr("y2",y0+18).attr("stroke",P.line).attr("stroke-width",1.2);});
  C.certs.slice(0,4).forEach((c,i)=>{const y=y0+70+i*90;drawSkillIcon(svg,"ribbon",96,y,.46,(i%2?6:-6),F);
   fitT(T(svg,136,y-2,c.name,{f:PLEX,w:600,s:20,c:P.ink}),370,20);T(svg,136,y+24,`${c.issuer||""}${c.year?"  ·  "+c.year:""}`,{f:MONO,w:500,s:14,c:P.muted});});
  C.projects.slice(0,4).forEach((p,i)=>{const y=y0+70+i*90;T(svg,572,y-2,String(i+1).padStart(2,"0"),{f:MONO,w:600,s:14,c:P.amber});
   fitT(T(svg,606,y-2,p.name,{f:PLEX,w:600,s:20,c:P.ink}),400,20);fitT(T(svg,606,y+24,p.result||"",{f:PLEX,w:400,s:16,c:P.muted}),400,16);});}
 T(svg,72,H-54,"Self-assessed proficiency  ·  1 Learning → 5 Expert",{f:MONO,w:500,s:14,c:P.muted});T(svg,1008,H-54,"01",{f:MONO,w:600,s:16,c:P.ink,a:"end"});
}

/* 91 · MBA — capability portfolio (consulting slide) */
function v91(){const K=careerCtx(),{C,H,li}=K;
 const NAVY="#2b3550",TEAL="#6fa79d",CORAL="#e3907c",MUT="#6b7a90",BG="#f7f4ef",P={muted:MUT,line:"#dcd6cc",amber:CORAL,ink:NAVY};
 bg(BG);const sh=shadow(0,6,14,NAVY,.06),F=stickerFilter(5);
 svg.append("rect").attr("width",1080).attr("height",10).attr("fill",NAVY);svg.append("rect").attr("y",10).attr("width",360).attr("height",6).attr("fill",TEAL);
 edTop(P,`CAPABILITY PORTFOLIO  ·  ${C.period}`,K.skills.length,"Capability","Portfolio",`skills  ·  ${K.groups.length} practice areas  ·  ${C.certs.length} credentials`);
 edStats(P,404,[["CURRENT",C.role||"—",C.org||" "],["TARGET",C.target||"—","next role"],["AVG LEVEL",`${K.avg.toFixed(1)} / 5`,`${K.adv} at Advanced+`],["STRONGEST",K.top||"—",`avg ${K.top?K.gAvg(K.top).toFixed(1):"—"}`,true]]);
 // balance groups into two columns
 const cols=[[],[]],ch=[0,0];K.groups.forEach(g=>{const h=1+K.by(g).length,c=ch[0]<=ch[1]?0:1;cols[c].push(g);ch[c]+=h;});
 const RH=li?32:35,matH=96+Math.max(ch[0],ch[1])*RH;
 const matrix={h:matH,draw:y=>{const g=svg.append("g");cardBox(g,72,y,936,matH,{sh});
  T(g,100,y+44,"Skill matrix",{f:SANS,w:700,s:26,c:NAVY});T(g,980,y+44,"◔ ◑ ◕ ●  proficiency 1–5",{f:MONO,s:14,c:MUT,a:"end"});
  cols.forEach((cl,ci)=>{let yy=y+86;const x=100+ci*460;cl.forEach((gr,gi)=>{const col=[TEAL,CORAL,"#8b9ac9","#c9a45c"][K.groups.indexOf(gr)%4];
   g.append("rect").attr("x",x).attr("y",yy-13).attr("width",6).attr("height",16).attr("rx",2).attr("fill",col);T(g,x+16,yy,gr.toUpperCase(),{f:MONO,w:600,s:13,ls:2,c:NAVY});
   g.append("line").attr("x1",x).attr("x2",x+420).attr("y1",yy+10).attr("y2",yy+10).attr("stroke","#e3e8ef");yy+=RH;
   K.by(gr).forEach(s=>{fitT(T(g,x+16,yy,s.name,{f:PLEX,w:500,s:18,c:NAVY}),250,18);T(g,x+370,yy,LVL[s.level],{f:MONO,s:13,c:MUT,a:"end"});harvey(g,x+400,yy-6,10,s.level,NAVY,"#fff");yy+=RH;});});});}};
 const sowhat={h:150,draw:y=>{svg.append("rect").attr("x",72).attr("y",y).attr("width",936).attr("height",150).attr("rx",18).attr("fill",NAVY);
  T(svg,100,y+44,"SO WHAT",{f:MONO,w:600,s:14,ls:3,c:TEAL});
  wrapT(svg,100,y+86,`Strongest in ${K.top} (avg ${K.gAvg(K.top).toFixed(1)}); building depth in ${K.low}. Ready for ${C.target||"the next role"}.`,860,{f:SERIF2,i:true,w:400,s:30,c:"#fff"},36);}};
 const np=li?2:Math.min(4,C.projects.length),engH=78+np*78;
 const eng={h:engH,draw:y=>{const g=svg.append("g");cardBox(g,72,y,936,engH,{sh});
  T(g,100,y+44,"Engagements & impact",{f:SANS,w:700,s:26,c:NAVY});T(g,980,y+44,`n = ${C.projects.length}`,{f:MONO,s:15,c:MUT,a:"end"});
  C.projects.slice(0,np).forEach((p,i)=>{const yy=y+80+i*78;g.append("line").attr("x1",100).attr("x2",980).attr("y1",yy).attr("y2",yy).attr("stroke","#e3e8ef");
   T(g,100,yy+32,String(i+1).padStart(2,"0"),{f:MONO,w:600,s:15,c:CORAL});fitT(T(g,140,yy+32,p.name,{f:PLEX,w:600,s:20,c:NAVY}),420,20);
   fitT(T(g,140,yy+58,p.result||"",{f:PLEX,s:16,c:MUT}),560,16);
   let tx=980;(p.tags||[]).slice(0,2).reverse().forEach(t=>{const tt=T(g,tx-12,yy+38,t,{f:MONO,w:500,s:13,c:NAVY,a:"end"}),w=tt.node().getComputedTextLength();
    g.insert("rect","text").attr("x",tx-w-24).attr("y",yy+18).attr("width",w+24).attr("height",28).attr("rx",14).attr("fill","#eef3f1");tx-=w+34;});});}};
 const cred={h:150,draw:y=>{const g=svg.append("g");cardBox(g,72,y,936,150,{sh});T(g,100,y+44,"Credentials",{f:SANS,w:700,s:26,c:NAVY});
  const n=Math.min(3,C.certs.length),w=880/Math.max(n,1);C.certs.slice(0,n).forEach((c,i)=>{const x=100+i*w;drawSkillIcon(g,"ribbon",x+24,y+100,.44,-6,F);
   fitT(T(g,x+58,y+96,c.name,{f:PLEX,w:600,s:17,c:NAVY}),w-74,17);T(g,x+58,y+120,`${c.issuer||""}${c.year?" · "+c.year:""}`,{f:MONO,s:13,c:MUT});});}};
 stackBlocks(li?[matrix,eng]:[matrix,sowhat,eng,cred],590,H-90);
 T(svg,72,H-54,"Source: self-assessment. Harvey balls show proficiency, 1 Learning → 5 Expert.",{f:MONO,s:14,c:MUT});T(svg,1008,H-54,"01",{f:MONO,w:600,s:16,c:NAVY,a:"end"});
 drawSkill(svg,K.by(K.top)[0]?K.by(K.top)[0].name:"strategy",968,236,1.0,8,F);
}

/* 92 · Tech — developer profile */
function v92(){const K=careerCtx(),{C,H,li}=K;
 const INK="#17223a",MUT="#5d6a82",AMB="#c9761a",LN="#cfd6e1",P2={surf:"#ffffff",line:LN,sh:shadow(0,8,18,"#0b1220",.07)},GC=["#2f8f8a","#2b4c8c","#c9761a","#6b85c9","#c4553d"];
 dotBg("#eef1f5",LN);const F=stickerFilter(5),handle=kebab(K.nm||"me");
 edTop({muted:MUT,line:LN,amber:AMB,ink:INK},`~/CAREER  ·  MAIN  ✓  ·  ${C.period}`,K.skills.length,"skills","merged.",`${C.certs.length} badges  ·  ${C.projects.length} pinned  ·  ${K.groups.length} languages`);
 shields(344,[["build","passing","#2f8f8a"],["skills",`${K.skills.length}`,"#2b4c8c"],["advanced+",`${K.adv}`,"#6b85c9"],["next",kebab(C.target||"role"),AMB]],72);
 const prof={h:224,draw:y=>{card(72,y,936,224,P2);svg.append("circle").attr("cx",168).attr("cy",y+112).attr("r",64).attr("fill","#e6ecf5").attr("stroke",LN).attr("stroke-width",2);
  T(svg,168,y+132,K.initials,{f:DISP,w:800,s:52,c:INK,a:"middle"});
  fitT(T(svg,262,y+70,K.nm||C.role||"Me",{f:PLEX,w:700,s:32,c:INK}),560,32);T(svg,262,y+102,`@${handle}  ·  ${C.org}`,{f:MONO,s:16,c:MUT});
  T(svg,262,y+146,"README.md",{f:MONO,w:600,s:14,c:AMB});
  wrapT(svg,262,y+176,`${C.role} shipping toward ${C.target}. ${C.period}.`,700,{f:PLEX,s:19,c:INK},26);}};
 const wt=K.groups.map((g,i)=>[g,K.by(g).reduce((t,s)=>t+s.level,0),GC[i%GC.length]]),tot=Math.max(wt.reduce((t,w)=>t+w[1],0),1);
 const langH=96+Math.ceil(wt.length/2)*42;
 const lang={h:langH,draw:y=>{card(72,y,936,langH,P2);T(svg,98,y+44,"Languages",{f:PLEX,w:700,s:22,c:INK});T(svg,982,y+44,"weighted by level",{f:MONO,s:14,c:MUT,a:"end"});
  let bx=98;wt.forEach(([g,v,c])=>{const w=884*v/tot;svg.append("rect").attr("x",bx).attr("y",y+62).attr("width",Math.max(w-3,1)).attr("height",12).attr("fill",c);bx+=w;});
  wt.forEach(([g,v,c],i)=>{const x=98+(i%2)*450,yy=y+112+Math.floor(i/2)*42;svg.append("circle").attr("cx",x+7).attr("cy",yy-6).attr("r",7).attr("fill",c);
   T(svg,x+24,yy,g,{f:PLEX,w:600,s:19,c:INK});T(svg,x+410,yy,`${(v/tot*100).toFixed(1)}%`,{f:MONO,s:15,c:MUT,a:"end"});});}};
 const np=Math.min(4,C.projects.length),pinH=64+Math.ceil(np/2)*168;
 const pin={h:pinH,draw:y=>{T(svg,76,y+30,"Pinned",{f:PLEX,w:700,s:22,c:INK});const s2=K.skills.slice().sort((a,b)=>b.level-a.level)[1];if(s2)drawSkill(svg,s2.name,990,y+12,.7,-8,F);
  C.projects.slice(0,np).forEach((p,i)=>{const x=72+(i%2)*478,yy=y+50+Math.floor(i/2)*168,w=458;card(x,yy,w,152,P2,12);
   drawSkillIcon(svg,"code",x+30,yy+36,.24,0);fitT(T(svg,x+54,yy+42,kebab(p.name),{f:MONO,w:600,s:18,c:"#2b4c8c"}),w-140,18);
   svg.append("rect").attr("x",x+w-84).attr("y",yy+24).attr("width",62).attr("height",26).attr("rx",13).attr("fill","none").attr("stroke",LN);T(svg,x+w-53,yy+42,"Public",{f:PLEX,w:600,s:13,c:MUT,a:"middle"});
   wrapT(svg,x+24,yy+80,p.result||"",w-48,{f:PLEX,s:16,c:MUT},22);
   let tx=x+24;(p.tags||[]).slice(0,2).forEach(t=>{const gi=Math.max(0,K.groups.indexOf((K.skills.find(s=>s.name===t)||{}).group));svg.append("circle").attr("cx",tx+6).attr("cy",yy+130).attr("r",6).attr("fill",GC[gi%GC.length]);
    const tt=T(svg,tx+18,yy+135,t,{f:PLEX,s:14,c:MUT});tx+=tt.node().getComputedTextLength()+40;});});}};
 const M=months(K.ms,12),actH=150+Math.min(K.ms.length,6)*30;
 const act={h:actH,draw:y=>{card(72,y,936,actH,P2);T(svg,98,y+44,"Contribution activity",{f:PLEX,w:700,s:22,c:INK});T(svg,982,y+44,`${K.ms.length} milestones`,{f:MONO,w:600,s:15,c:AMB,a:"end"});
  if(!M.list)return;const n=M.list.length,cw=(884-(n-1)*6)/n;M.list.forEach((mo,i)=>{const hits=K.ms.filter(m=>M.toN(m.date)===mo.n).length,x=98+i*(cw+6);
   svg.append("rect").attr("x",x).attr("y",y+62).attr("width",cw).attr("height",22).attr("rx",4).attr("fill",hits>1?"#1f6b5f":hits?"#2f8f8a":"#edf0f4");
   if(n<=14||i%2===0)T(svg,x+cw/2,y+102,MON[mo.m].slice(0,n>14?1:3),{f:MONO,s:12,c:MUT,a:"middle"});});
  K.ms.slice(-6).reverse().forEach((m,i)=>{const yy=y+140+i*30,tt=T(svg,98,yy,"",{f:MONO,s:16,c:INK}).attr("xml:space","preserve");
   tt.append("tspan").attr("fill",AMB).text(hex7(m.label)+" ");tt.append("tspan").attr("fill",MUT).text(m.date+"  ");tt.append("tspan").attr("fill",INK).text(m.label);});}};
 const badges={h:168,draw:y=>{card(72,y,936,168,P2);T(svg,98,y+44,"Achievements",{f:PLEX,w:700,s:22,c:INK});
  const n=Math.min(3,C.certs.length),w=884/Math.max(n,1);C.certs.slice(0,n).forEach((c,i)=>{const x=98+i*w;svg.append("circle").attr("cx",x+34).attr("cy",y+110).attr("r",32).attr("fill","#f4f6f9").attr("stroke",LN);
   drawSkillIcon(svg,"ribbon",x+34,y+114,.5,0);fitT(T(svg,x+80,y+106,c.name,{f:PLEX,w:600,s:16,c:INK}),w-96,16);T(svg,x+80,y+128,`${c.issuer||""}${c.year?" · "+c.year:""}`,{f:MONO,s:13,c:MUT});});}};
 stackBlocks(li?[prof,pin,lang]:[prof,lang,pin,act,badges],392,H-60,20,40);
 {const sk=K.skills.slice().sort((a,b)=>b.level-a.level)[0];if(sk)drawSkill(svg,sk.name,1004,196,.9,8,F);}
}

/* 93 · PM — career roadmap */
function v93(){const K=careerCtx(),{C,H,li}=K;
 const INK="#17223a",MUT="#5d6a82",AMB="#c9761a",GRN="#2f8f8a",BLU="#2b4c8c",LN="#cfd6e1",P2={surf:"#ffffff",line:LN,sh:shadow(0,8,18,"#0b1220",.07)};
 dotBg("#eef1f5",LN);const F=stickerFilter(5),gl=Object.assign({certs:C.certs.length||1,projects:C.projects.length||1},C.goals||{});
 edTop({muted:MUT,line:LN,amber:AMB,ink:INK},`PRODUCT  ·  CAREER ROADMAP  ·  OWNER ${(K.nm||"ME").toUpperCase()}`,C.projects.length,"Career","Roadmap",`projects shipped  ·  ● on track  ·  next: ${C.target}`);
 card(72,346,300,200,P2);const rcx=222,rcy=446,RR=70;svg.append("circle").attr("cx",rcx).attr("cy",rcy).attr("r",RR).attr("fill","none").attr("stroke","#e6eaf0").attr("stroke-width",16);
 svg.append("path").attr("d",d3.arc()({innerRadius:RR-8,outerRadius:RR+8,startAngle:0,endAngle:2*Math.PI*K.avg/5,cornerRadius:8})).attr("transform",`translate(${rcx},${rcy})`).attr("fill",AMB);
 T(svg,rcx,rcy+10,K.avg.toFixed(1),{f:DISP,w:800,s:50,c:INK,a:"middle"});T(svg,rcx,rcy+34,"avg / 5",{f:MONO,s:13,c:MUT,a:"middle"});
 card(392,346,616,200,P2);fitT(T(svg,418,388,`OKR · Ready for ${C.target}`,{f:PLEX,w:700,s:21,c:INK}),560,21);
 [["KR1  Skills at Advanced+",K.adv/Math.max(K.skills.length,1),`${K.adv}/${K.skills.length}`],["KR2  Credentials earned",C.certs.length/gl.certs,`${C.certs.length}/${gl.certs}`],["KR3  Projects shipped",C.projects.length/gl.projects,`${C.projects.length}/${gl.projects}`]].forEach(([k,p,v],i)=>{const y=432+i*40;p=Math.min(1,p);
  T(svg,418,y+4,k,{f:PLEX,w:500,s:16,c:INK});svg.append("rect").attr("x",660).attr("y",y-8).attr("width",260).attr("height",12).attr("rx",6).attr("fill","#e6eaf0");
  svg.append("rect").attr("x",660).attr("y",y-8).attr("width",Math.max(12,260*p)).attr("height",12).attr("rx",6).attr("fill",p>=1?GRN:BLU);T(svg,982,y+4,v,{f:MONO,w:500,s:15,c:MUT,a:"end"});});
 const M=months(K.ms,6),tlH=li?250:290;
 const tl={h:tlH,draw:y=>{card(72,y,936,tlH,P2);T(svg,98,y+42,"Timeline",{f:PLEX,w:700,s:20,c:INK});T(svg,982,y+42,C.period,{f:MONO,s:15,c:MUT,a:"end"});
  if(!M.list)return;const n=M.list.length,x0=110,x1=970,xs=i=>x0+(x1-x0)*(i/(Math.max(n-1,1))),ly=y+tlH/2+18;
  svg.append("line").attr("x1",x0).attr("x2",x1).attr("y1",ly).attr("y2",ly).attr("stroke",LN).attr("stroke-width",3);
  M.list.forEach((mo,i)=>{if(n<=13||i%2===0)T(svg,xs(i),ly+(tlH/2-30),`${MON[mo.m]}${mo.m===0||i===0?" ’"+String(mo.y).slice(2):""}`,{f:MONO,s:12,c:MUT,a:"middle"});
   svg.append("line").attr("x1",xs(i)).attr("x2",xs(i)).attr("y1",ly-5).attr("y2",ly+5).attr("stroke",LN).attr("stroke-width",2);});
  K.ms.forEach((m,i)=>{const x=xs(M.list.findIndex(mo=>mo.n===M.toN(m.date))),up=i%2===0,arm=up?-(tlH/2-78):(tlH/2-86),done=i<K.ms.length-1;
   svg.append("line").attr("x1",x).attr("x2",x).attr("y1",ly).attr("y2",ly+arm).attr("stroke",done?GRN:AMB).attr("stroke-width",1.6).attr("stroke-dasharray","3 4");
   svg.append("circle").attr("cx",x).attr("cy",ly).attr("r",8).attr("fill",done?GRN:AMB).attr("stroke","#fff").attr("stroke-width",3);
   const a=x<200?"start":x>880?"end":"middle";fitT(T(svg,x,ly+arm+(up?-8:18),m.label,{f:PLEX,w:600,s:15,c:INK,a}),190,15);});}};
 const epH=64+K.groups.length*40;
 const ep={h:epH,draw:y=>{card(72,y,936,epH,P2);T(svg,98,y+42,"Epics",{f:PLEX,w:700,s:20,c:INK});T(svg,982,y+42,"skill groups · avg level",{f:MONO,s:15,c:MUT,a:"end"});
  K.groups.forEach((g,i)=>{const yy=y+64+i*40,a=K.gAvg(g),c=[GRN,BLU,AMB,"#6b85c9","#c4553d"][i%5];svg.append("rect").attr("x",98).attr("y",yy).attr("width",10).attr("height",26).attr("rx",3).attr("fill",c);
   fitT(T(svg,118,yy+19,`EPIC · ${g}`,{f:PLEX,w:600,s:17,c:INK}),200,17);svg.append("rect").attr("x",330).attr("y",yy+7).attr("width",440).attr("height",12).attr("rx",6).attr("fill","#e6eaf0");
   svg.append("rect").attr("x",330).attr("y",yy+7).attr("width",440*a/5).attr("height",12).attr("rx",6).attr("fill",c);
   const [lab,bgc,fg]=a>=4?["Ready","#e2f1ee",GRN]:a>=3?["Building","#e4e9f6",BLU]:["Discovery","#eef0f3",MUT];svg.append("rect").attr("x",850).attr("y",yy+1).attr("width",132).attr("height",26).attr("rx",13).attr("fill",bgc);T(svg,916,yy+19,`${lab} ${a.toFixed(1)}`,{f:PLEX,w:600,s:13,c:fg,a:"middle"});});}};
 const kb={h:li?420:520,draw:(KY,KH)=>{const lv=K.skills.filter(s=>s.level<=3).sort((a,b)=>a.level-b.level);
  [[72,456,"Shipped",GRN,C.projects.length],[544,220,"Leveling up",AMB,lv.length],[780,228,"Next",BLU,1]].forEach(([x,w,h,c,n])=>{svg.append("rect").attr("x",x).attr("y",KY).attr("width",w).attr("height",KH).attr("rx",14).attr("fill","#e6eaf0");
   svg.append("circle").attr("cx",x+22).attr("cy",KY+32).attr("r",7).attr("fill",c);T(svg,x+38,KY+39,h,{f:PLEX,w:700,s:19,c:INK});T(svg,x+w-16,KY+39,`${n}`,{f:MONO,w:600,s:16,c:MUT,a:"end"});});
  const ph=Math.min(li?110:150,(KH-72)/Math.max(C.projects.length,1));C.projects.forEach((p,i)=>{const y=KY+60+i*ph;svg.append("rect").attr("x",84).attr("y",y).attr("width",432).attr("height",ph-10).attr("rx",8).attr("fill","#fff").attr("stroke","#d6dce6");
   svg.append("rect").attr("x",84).attr("y",y).attr("width",5).attr("height",ph-10).attr("rx",2).attr("fill",GRN);fitT(T(svg,104,y+30,p.name,{f:PLEX,w:600,s:17,c:INK}),396,17);
   if(ph>=70)fitT(T(svg,104,y+56,p.result||"",{f:PLEX,s:14,c:MUT}),396,14);
   if(ph>=120){let tx=104;(p.tags||[]).slice(0,2).forEach(t=>{const rc=svg.append("rect").attr("x",tx).attr("y",y+ph-48).attr("height",26).attr("rx",13).attr("fill","#eef3f1"),tt=T(svg,tx+12,y+ph-30,t,{f:MONO,w:500,s:12,c:INK}),w=tt.node().getComputedTextLength();rc.attr("width",w+24);tx+=w+34;});}});
  const lh=Math.min(li?66:96,(KH-72)/Math.max(lv.length,1));lv.slice(0,Math.floor((KH-72)/lh)).forEach((s,i)=>{const y=KY+60+i*lh;svg.append("rect").attr("x",556).attr("y",y).attr("width",196).attr("height",lh-8).attr("rx",8).attr("fill","#fff").attr("stroke","#d6dce6");
   fitT(T(svg,570,y+26,s.name,{f:PLEX,w:600,s:15,c:INK}),170,15);if(lh>=52)pips(svg,574,y+44,s.level,AMB,"#e6eaf0",3.4,11);if(lh>=80)T(svg,570,y+70,`${LVL[s.level]} → ${LVL[s.level+1]}`,{f:MONO,s:12,c:MUT});});
  svg.append("rect").attr("x",792).attr("y",KY+60).attr("width",204).attr("height",210).attr("rx",8).attr("fill","#fff").attr("stroke","#d6dce6");T(svg,808,KY+92,"Next role",{f:PLEX,w:700,s:16,c:INK});
  wrapT(svg,808,KY+120,C.target||"TBD",176,{f:SERIF2,i:true,w:400,s:28,c:INK},30);drawSkill(svg,C.target||"strategy",894,KY+220,.52,-6,F);
  const ry=KY+290,ch=Math.min(li?0:96,(KY+KH-12-ry)/Math.max(C.certs.length,1));if(ch>=60){T(svg,808,ry+4,"UNLOCKED",{f:MONO,w:600,s:12,ls:2,c:MUT});
   C.certs.forEach((c,i)=>{const y=ry+20+i*ch;svg.append("rect").attr("x",792).attr("y",y).attr("width",204).attr("height",ch-10).attr("rx",8).attr("fill","#fff").attr("stroke","#d6dce6");
    drawSkillIcon(svg,"ribbon",818,y+(ch-10)/2+2,.3,0);fitT(T(svg,840,y+(ch-10)/2-2,c.name,{f:PLEX,w:600,s:14,c:INK}),146,14);T(svg,840,y+(ch-10)/2+18,`${c.issuer||""}${c.year?" · "+c.year:""}`,{f:MONO,s:11,c:MUT});});}}};
 const y1=H-40;if(li){stackBlocks([tl,kb],572,y1,22,26);}else{const kH=y1-572-tlH-epH-52;kb.h=kH;stackBlocks([tl,ep,kb],572,y1,26,26);}
 drawSkillIcon(svg,"roadmap",968,232,1.0,8,F);
}

/* #v=996 · skill sticker sheet */
function vSheetSkills(){bg("#eef1f5");const F=stickerFilter(5),keys=window.SKILL_ICON_KEYS;
 T(svg,540,90,`SKILL STICKERS · ${keys.length}`,{f:"Big Shoulders Display",w:800,s:44,c:"#17223a",a:"middle"});
 keys.forEach((k,i)=>{const c=i%4,r=Math.floor(i/4),x=150+c*260,y=230+r*300;drawSkillIcon(svg,k,x,y,1.5,0,F);T(svg,x,y+110,k,{f:MONO,w:500,s:20,c:"#5d6a82",a:"middle"});});}
