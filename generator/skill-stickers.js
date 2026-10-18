/* Hand-drawn skill stickers — same ink + die-cut look as the state stickers, ~90×90 box centred on (0,0).
   Usage: drawSkill(g, "SQL", x, y, scale, rotationDeg, filter)  → picks an icon by keyword, falls back to a lettered badge.
          drawSkillIcon(g, "sheet", x, y, ...)                     → draw a specific icon key. */
(function(){
const O="#1f2433",W=3;let G=null;
const S=e=>e.attr("stroke",O).attr("stroke-width",W).attr("stroke-linejoin","round").attr("stroke-linecap","round");
const P=(d,f="none",ns)=>{const e=G.append("path").attr("d",d).attr("fill",f);return ns?e:S(e);};
const C=(x,y,r,f,ns)=>{const e=G.append("circle").attr("cx",x).attr("cy",y).attr("r",r).attr("fill",f);return ns?e:S(e);};
const E=(x,y,rx,ry,f,ns)=>{const e=G.append("ellipse").attr("cx",x).attr("cy",y).attr("rx",rx).attr("ry",ry).attr("fill",f);return ns?e:S(e);};
const R=(x,y,w,h,f,rx=4,ns)=>{const e=G.append("rect").attr("x",x).attr("y",y).attr("width",w).attr("height",h).attr("rx",rx).attr("fill",f);return ns?e:S(e);};
const L=(d,w=W,c=O)=>G.append("path").attr("d",d).attr("fill","none").attr("stroke",c).attr("stroke-width",w).attr("stroke-linecap","round").attr("stroke-linejoin","round");
const Tx=(x,y,t,s,c=O,f="Geist Mono, monospace",w=700)=>G.append("text").attr("x",x).attr("y",y).attr("text-anchor","middle").attr("font-family",f).attr("font-weight",w).attr("font-size",s).attr("fill",c).text(t);

const ART={
 sheet:()=>{R(-34,-38,68,76,"#f7fbf8",8);R(-34,-38,68,16,"#3f9a6b",8);L("M-34,-22 L34,-22");
  [-6,10,26].forEach(y=>L(`M-34,${y} L34,${y}`,2));L("M-12,-22 L-12,38",2);L("M12,-22 L12,38",2);
  R(-9,-3,18,10,"#bfe3cc",2,true);L("M-30,-30 l4,4 m0,-4 l-4,4",2.4,"#fff");Tx(16,-26,"fx",11,"#fff");},
 db:()=>{P("M-30,-26 L-30,28 A30,10 0 0 0 30,28 L30,-26","#7fb2e5");E(0,-26,30,10,"#b9d6f3");
  L("M-30,-6 A30,10 0 0 0 30,-6",2.4);L("M-30,12 A30,10 0 0 0 30,12",2.4);C(18,4,2.6,O,true);C(18,22,2.6,O,true);},
 chart:()=>{R(-38,-34,76,70,"#fff7ea",9);R(-26,4,12,22,"#f2a65a",2);R(-7,-10,12,36,"#e2574c",2);R(12,-22,12,48,"#5b7fd1",2);
  L("M-28,26 L30,26",2.4);L("M-26,-14 L-6,-24 L10,-18 L28,-30",2.4,"#2f8f8a");C(28,-30,3.4,"#2f8f8a");},
 code:()=>{R(-40,-32,80,64,"#20263a",9);R(-40,-32,80,14,"#343c56",9);[["#ff6b7a",-30],["#ffcb6b",-21],["#c3e88d",-12]].forEach(([c,x])=>C(x,-25,3,c,true));
  L("M-22,-2 L-32,8 L-22,18",3.4,"#82aaff");L("M22,-2 L32,8 L22,18",3.4,"#82aaff");L("M6,-6 L-6,22",3.4,"#c792ea");},
 search:()=>{C(-8,-8,24,"#dff0fb");C(-8,-8,24,"none");P("M-20,-14 A13,13 0 0 1 -6,-24","none");L("M-20,-14 A13,13 0 0 1 -6,-24",3,"#fff");
  P("M9,9 L30,30 Q34,36 28,38 L24,38 L4,15Z","#c98a4b");L("M9,9 L4,14");},
 tag:()=>{P("M-36,-8 L-8,-36 L30,-36 Q36,-36 36,-30 L36,8 L8,36 Q2,42 -4,36 L-36,4 Q-42,-2 -36,-8Z","#f6c64f");C(20,-20,6,"#fff");
  Tx(-2,12,"$",26,O,"Bricolage Grotesque, sans-serif",800);L("M20,-20 Q34,-46 4,-44",2.4);},
 megaphone:()=>{P("M-30,-10 L10,-30 L10,30 L-30,10Z","#e2574c");R(-40,-12,12,24,"#f4f1ea",3);P("M10,-30 Q20,0 10,30","#f4b5a8");
  P("M-26,10 L-20,34 L-10,34 L-14,12Z","#f4f1ea");L("M22,-14 L32,-20 M24,0 L36,0 M22,14 L32,20",2.6);},
 compass:()=>{C(0,0,36,"#f4ead8");C(0,0,27,"#fffaf1");P("M0,-22 L7,0 L0,22 L-7,0Z","#fff",true);P("M0,-22 L7,0 L-7,0Z","#e2574c");P("M0,22 L7,0 L-7,0Z","#5b6b88");
  C(0,0,3.2,O,true);Tx(0,-29,"N",10,O);R(-6,-44,12,8,"#c9a45c",3);},
 roadmap:()=>{P("M-38,-26 L-14,-34 L14,-26 L38,-34 L38,26 L14,34 L-14,26 L-38,34Z","#e8f1e4");L("M-14,-34 L-14,26 M14,-26 L14,34",2);
  L("M-28,20 Q-22,-4 -4,4 T24,-14",3,"#e2574c").attr("stroke-dasharray","5 6");P("M24,-30 C32,-30 34,-20 24,-8 C14,-20 16,-30 24,-30Z","#e2574c");C(24,-22,3,"#fff",true);},
 coins:()=>{[[18,"#d9a441"],[6,"#e8b84f"],[-6,"#f2c962"]].forEach(([y,c])=>{P(`M-26,${y} L-26,${y+10} A26,8 0 0 0 26,${y+10} L26,${y}`,c);E(0,y,26,8,c);});
  C(14,-24,18,"#f6d27a");C(14,-24,12,"none");Tx(14,-18,"$",16,O,"Bricolage Grotesque, sans-serif",800);},
 mic:()=>{R(-14,-40,28,46,"#cfd6e1",14);[-28,-18,-8].forEach(y=>L(`M-14,${y} L14,${y}`,2));L("M-24,-6 Q-24,22 0,22 Q24,22 24,-6");L("M0,22 L0,36");R(-18,34,36,7,"#5b6b88",3);},
 people:()=>{C(14,-14,13,"#f2a65a");P("M-6,34 Q-6,4 14,4 Q34,4 34,34Z","#f2a65a");C(-14,-8,14,"#8fb3ee");P("M-38,38 Q-38,8 -14,8 Q10,8 10,38Z","#8fb3ee");
  C(-18,-10,1.8,O,true);C(-9,-10,1.8,O,true);L("M-18,-3 Q-14,0 -10,-3",2);},
 deal:()=>{P("M-38,-30 L4,-30 Q10,-30 10,-24 L10,-2 Q10,4 4,4 L-18,4 L-28,14 L-28,4 L-38,4 Q-44,4 -44,-2 L-44,-24 Q-44,-30 -38,-30Z","#b9a6ee");
  P("M-2,-6 L38,-6 Q44,-6 44,0 L44,22 Q44,28 38,28 L30,28 L30,38 L20,28 L-2,28 Q-8,28 -8,22 L-8,0 Q-8,-6 -2,-6Z","#8fd3bf");L("M6,12 L12,18 L26,4",3.2);},
 bulb:()=>{P("M0,-38 C22,-38 30,-18 22,-4 C16,6 12,10 12,18 L-12,18 C-12,10 -16,6 -22,-4 C-30,-18 -22,-38 0,-38Z","#ffd65c");
  R(-12,18,24,10,"#cfd6e1",3);R(-9,28,18,8,"#cfd6e1",3);L("M-6,8 L-6,-4 L0,2 L6,-4 L6,8",2.4);L("M-34,-34 l-6,-6 M34,-34 l6,-6 M-40,-8 l-8,0 M40,-8 l8,0",2.6);},
 gear:()=>{let d="";for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?26:36,a2=a+Math.PI/16;d+=(i?"L":"M")+(Math.cos(a)*r).toFixed(1)+","+(Math.sin(a)*r).toFixed(1)+"L"+(Math.cos(a2)*r).toFixed(1)+","+(Math.sin(a2)*r).toFixed(1);}
  P(d+"Z","#9fb0c8");C(0,0,12,"#eef2f7");},
 pen:()=>{R(-34,-36,52,68,"#fffaf1",5);[-22,-12,-2,8].forEach(y=>L(`M-26,${y} L8,${y}`,2,"#a9a196"));
  P("M30,-30 L38,-22 L4,12 L-6,16 L-2,6Z","#5b7fd1");L("M26,-26 L34,-18",2.4);},
 globe:()=>{C(0,0,34,"#8fd3bf");P("M-20,-22 Q-8,-28 -4,-16 Q-12,-8 -6,0 Q-16,8 -26,0 Q-30,-12 -20,-22Z","#4fa36b");P("M8,4 Q20,0 24,10 Q18,24 6,24 Q2,14 8,4Z","#4fa36b");
  L("M-34,0 L34,0",1.8,"#2f6b5b");E(0,0,14,34,"none").attr("stroke-width",1.8).attr("stroke","#2f6b5b");},
 ribbon:()=>{P("M-16,8 L-26,40 L-14,34 L-8,44 L0,14Z","#e2574c");P("M16,8 L26,40 L14,34 L8,44 L0,14Z","#c4453c");
  let d="";for(let i=0;i<24;i++){const a=i*Math.PI/12,r=i%2?22:26;d+=(i?"L":"M")+(Math.cos(a)*r).toFixed(1)+","+(Math.sin(a)*r-10).toFixed(1);}P(d+"Z","#f2c962");C(0,-10,15,"#fff4d6");L("M-6,-10 L-2,-6 L7,-15",2.6);},
 cap:()=>{P("M0,-30 L44,-12 L0,6 L-44,-12Z","#2b3550");P("M-24,-2 L-24,18 Q0,32 24,18 L24,-2 L0,6Z","#3a4668");L("M34,-8 L34,16",2.4);C(34,20,4,"#f2c962");}
};
const KEYS=[
 ["sheet",/excel|spreadsheet|model(l)?ing|sheets/i],["db",/sql|database|data ?eng|snowflake|bigquery|warehouse/i],
 ["chart",/tableau|power ?bi|looker|dashboard|analytic|\bbi\b|visuali[sz]|statistic|a\/b|experiment/i],
 ["code",/python|\br\b|javascript|java|code|coding|program|react|html|swift|machine learning|\bml\b|\bai\b/i],
 ["search",/research|insight|discovery|interview|survey/i],["tag",/pric|revenue|monetiz/i],
 ["megaphone",/brand|marketing|social|content|campaign|seo|growth|\bpr\b|comms/i],["compass",/strateg|case|structur|consult|framework/i],
 ["roadmap",/roadmap|product|launch|agile|scrum/i],["coins",/financ|account|valuation|invest|budget|\bfp&a\b|corporate fin/i],
 ["mic",/present|public speak|pitch|storytell/i],["people",/team|leader|manag|mentor|coach|people|hiring/i],
 ["deal",/negotiat|sales|partner|stakeholder|client|customer/i],["bulb",/innovat|design|creativ|idea|ux/i],
 ["gear",/operation|process|supply|logistic|automat|\bops\b|lean|six sigma/i],["pen",/writ|communicat|copy|editing/i],
 ["globe",/international|global|language|mandarin|french|spanish|cross.?cultur/i]];
const iconFor=n=>(KEYS.find(([,re])=>re.test(n))||[null])[0];
window.SKILL_ICON_KEYS=Object.keys(ART);
window.skillIconFor=iconFor;
window.drawSkillIcon=function(par,key,x,y,s=1,rot=0,filter){const f=ART[key];if(!f)return null;
 const g=par.append("g").attr("transform",`translate(${x},${y}) rotate(${rot}) scale(${s})`);if(filter)g.attr("filter",filter);G=g;f();G=null;return g;};
window.drawSkill=function(par,name,x,y,s=1,rot=0,filter){const k=iconFor(name);if(k)return window.drawSkillIcon(par,k,x,y,s,rot,filter);
 const g=par.append("g").attr("transform",`translate(${x},${y}) rotate(${rot}) scale(${s})`);if(filter)g.attr("filter",filter);G=g;
 C(0,0,34,"#f4ead8");C(0,0,26,"none").attr("stroke-dasharray","3 4");Tx(0,10,String(name).trim().slice(0,2).toUpperCase(),26,O,"Bricolage Grotesque, sans-serif",800);G=null;return g;};
})();
