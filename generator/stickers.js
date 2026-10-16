/* Hand-drawn style state stickers — one per state, drawn in a ~90×90 box centred on (0,0).
   Usage: drawSticker(g, "Wyoming", x, y, scale, rotationDeg)
   Each sticker gets a white die-cut border + soft shadow (sticker look). */
(function(){
const O="#1f2433";            // outline ink
const W=3;                    // outline width
let G=null;                   // current group
const S=(e)=>e.attr("stroke",O).attr("stroke-width",W).attr("stroke-linejoin","round").attr("stroke-linecap","round");
const P=(d,f="none",noStroke)=>{const e=G.append("path").attr("d",d).attr("fill",f);return noStroke?e:S(e);};
const C=(x,y,r,f,noStroke)=>{const e=G.append("circle").attr("cx",x).attr("cy",y).attr("r",r).attr("fill",f);return noStroke?e:S(e);};
const E=(x,y,rx,ry,f,rot=0,noStroke)=>{const e=G.append("ellipse").attr("cx",x).attr("cy",y).attr("rx",rx).attr("ry",ry).attr("fill",f).attr("transform",rot?`rotate(${rot},${x},${y})`:null);return noStroke?e:S(e);};
const R=(x,y,w,h,f,rx=3,noStroke)=>{const e=G.append("rect").attr("x",x).attr("y",y).attr("width",w).attr("height",h).attr("rx",rx).attr("fill",f);return noStroke?e:S(e);};
const L=(d,w=W,c=O)=>G.append("path").attr("d",d).attr("fill","none").attr("stroke",c).attr("stroke-width",w).attr("stroke-linecap","round").attr("stroke-linejoin","round");
const Tx=(x,y,t,s,c=O,w=800)=>G.append("text").attr("x",x).attr("y",y).attr("text-anchor","middle").attr("font-family","Big Shoulders Display, DM Sans, sans-serif").attr("font-weight",w).attr("font-size",s).attr("fill",c).text(t);
const eye=(x,y,r=2.6)=>C(x,y,r,O,true);

const ART={
 "Alabama":()=>{ // rocket
  P("M0,-42 C14,-28 16,-6 12,18 L-12,18 C-16,-6 -14,-28 0,-42Z","#eef2f7");C(0,-12,7,"#7fb2e5");
  P("M-12,6 L-24,24 L-12,22Z","#e2574c");P("M12,6 L24,24 L12,22Z","#e2574c");P("M-8,18 L0,40 L8,18Z","#f6b73c");},
 "Alaska":()=>{ // aurora mountains
  R(-40,-36,80,72,"#24345c",12);L("M-34,-18 Q-10,-30 6,-16 T38,-20",5,"#7ee0b5");L("M-34,-6 Q-6,-16 10,-4 T38,-8",3,"#b9a2ff");
  P("M-40,36 L-14,0 L2,16 L16,-4 L40,36Z","#e8eef6");P("M-20,8 L-14,0 L-8,8Z","#ffffff");},
 "Arizona":()=>{ // saguaro
  P("M-8,40 L-8,-30 Q-8,-40 0,-40 Q8,-40 8,-30 L8,40Z","#4fa36b");P("M-8,6 L-20,6 Q-26,6 -26,0 L-26,-16 Q-26,-22 -21,-22 Q-16,-22 -16,-16 L-16,-4 L-8,-4","#4fa36b");
  P("M8,-4 L20,-4 Q26,-4 26,-10 L26,-24 Q26,-30 21,-30 Q16,-30 16,-24 L16,-14 L8,-14","#4fa36b");C(0,-41,4,"#ff7a8a");L("M-3,-26 L-3,30",1.5,"#2f6b45");L("M3,-26 L3,30",1.5,"#2f6b45");},
 "Arkansas":()=>{ // diamond
  P("M-34,-12 L-20,-30 L20,-30 L34,-12 L0,34Z","#cfe9f7");L("M-34,-12 L34,-12 M-20,-30 L-8,-12 L0,34 L8,-12 L20,-30 M-8,-12 L0,-30 L8,-12");
  P("M-28,-34 l3,-7 3,7 7,3 -7,3 -3,7 -3,-7 -7,-3Z","#ffffff",true);},
 "California":()=>{ // palm + sunset
  C(0,8,32,"#f7b267");P("M-32,8 A32,32 0 0 0 32,8Z","#f4845f",true);L("M-32,8 A32,32 0 0 0 32,8");
  L("M4,40 Q2,8 10,-22",6,O);L("M4,40 Q2,8 10,-22",3,"#8a5a3b");
  [[-30,-30],[30,-34],[-26,-6],[36,-12],[8,-46]].forEach(([dx,dy])=>P(`M10,-22 Q${10+dx/2},${-22+dy/2-8} ${10+dx},${-22+dy}`,"none").attr("stroke","#3f8f5a").attr("stroke-width",7));},
 "Colorado":()=>{ // peak
  P("M-42,34 L-10,-26 L4,-6 L16,-22 L42,34Z","#6b86c9");P("M-20,-8 L-10,-26 L0,-12 L-6,-6 L-12,-12Z","#ffffff");P("M10,-14 L16,-22 L24,-8 L18,-10Z","#ffffff");C(28,-30,8,"#f6c64a");},
 "Connecticut":()=>{ // sailboat
  P("M-34,18 L34,18 L24,32 L-24,32Z","#c4553d");L("M0,18 L0,-40");P("M2,-38 L30,12 L2,12Z","#ffffff");P("M-2,-30 L-26,12 L-2,12Z","#9fc3e8");L("M-40,38 Q-30,32 -20,38 T0,38 T20,38 T40,38",3,"#3c79b8");},
 "Delaware":()=>{ // first-state badge
  C(0,-6,30,"#2b4c8c");C(0,-6,22,"#f6c64a");Tx(0,4,"1st",24,O);P("M-16,18 L-22,40 L-10,34 L-4,42 L0,22Z","#c4553d");P("M16,18 L22,40 L10,34 L4,42 L0,22Z","#c4553d");},
 "Florida":()=>{ // flamingo
  E(4,-4,22,14,"#ff8fa3",-10);P("M-14,-10 Q-26,-30 -18,-40 Q-10,-46 -6,-38","none").attr("stroke","#ff8fa3").attr("stroke-width",7);L("M-14,-10 Q-26,-30 -18,-40 Q-10,-46 -6,-38",2.2);
  P("M-6,-38 L4,-36 L-2,-30Z","#1f2433");L("M2,10 L0,40 M10,8 L14,24 L6,30",3);E(14,-6,10,6,"#ffb3c0",-20);},
 "Georgia":()=>{ // peach
  C(0,6,32,"#ffad72");P("M0,-24 Q-6,8 0,38","none").attr("stroke","#f07f4f").attr("stroke-width",3);E(-14,-32,16,8,"#5aa469",-25);L("M0,-26 L2,-36",3);},
 "Hawaii":()=>{ // hibiscus
  for(let i=0;i<5;i++){const a=i*72-90;G.append("ellipse").attr("cx",0).attr("cy",-20).attr("rx",15).attr("ry",22).attr("fill","#ff5d73").attr("stroke",O).attr("stroke-width",W).attr("transform",`rotate(${a+90})`);}
  C(0,0,8,"#ffd166");L("M0,0 L18,-22",3);C(18,-22,3.5,"#ffd166");},
 "Idaho":()=>{ // potato
  P("M-34,6 C-36,-22 -6,-30 14,-24 C38,-18 40,10 26,22 C10,36 -32,34 -34,6Z","#c99a63");[[-16,-8],[6,-12],[20,6],[-4,14],[-22,14]].forEach(([x,y])=>C(x,y,2.2,"#8a6338",true));},
 "Illinois":()=>{ // deep dish slice
  P("M-36,-20 L36,-20 L0,40Z","#f6c64a");P("M-36,-20 L36,-20 L34,-30 L-34,-30Z","#d99a4e");[[-14,-8],[10,-10],[0,10],[-4,-14]].forEach(([x,y])=>C(x,y,6,"#d7493b"));},
 "Indiana":()=>{ // race car
  P("M-40,10 L-30,-6 L-6,-8 L4,-22 L18,-22 L22,-8 L40,-4 L40,12Z","#e2574c");R(-4,-20,14,10,"#9fc3e8",2);C(-22,14,10,O,true);C(24,14,10,O,true);C(-22,14,4,"#d0d6de",true);C(24,14,4,"#d0d6de",true);Tx(-10,6,"1",14,"#ffffff");},
 "Iowa":()=>{ // corn
  E(0,-2,16,32,"#f6c64a");for(let r=-24;r<26;r+=8)L(`M-12,${r} L12,${r}`,1.5,"#c9962d");P("M-4,30 Q-34,6 -26,-30 Q-14,0 -2,22Z","#6fb36b");P("M4,30 Q34,6 26,-30 Q14,0 2,22Z","#5aa469");},
 "Kansas":()=>{ // sunflower
  for(let i=0;i<12;i++)G.append("ellipse").attr("cx",0).attr("cy",-24).attr("rx",7).attr("ry",14).attr("fill","#f6c64a").attr("stroke",O).attr("stroke-width",2.4).attr("transform",`rotate(${i*30})`);C(0,0,16,"#7a4b2a");[[-5,-4],[4,-6],[0,4],[6,4],[-6,5]].forEach(([x,y])=>C(x,y,1.8,"#3b2414",true));},
 "Kentucky":()=>{ // horseshoe
  P("M-26,34 L-26,-4 A26,26 0 0 1 26,-4 L26,34 L12,34 L12,-4 A12,12 0 0 0 -12,-4 L-12,34Z","#b9c2cf");[[-19,24],[-19,8],[19,24],[19,8],[-13,-16],[13,-16]].forEach(([x,y])=>C(x,y,2.5,O,true));},
 "Louisiana":()=>{ // trumpet
  P("M-36,-6 L10,-6 L10,6 L-36,6Z","#f2c14e");P("M10,-6 L36,-22 L36,22 L10,6Z","#f2c14e");R(-20,-18,6,14,"#f2c14e",2);R(-8,-18,6,14,"#f2c14e",2);R(4,-18,6,14,"#f2c14e",2);R(-44,-4,8,8,"#d9a52f",2);
  [[-32,-28],[-14,-34],[4,-30]].forEach(([x,y],i)=>Tx(x,y,"♪",18,"#7b4fc9",700));},
 "Maine":()=>{ // lobster
  E(0,6,12,24,"#e2574c");P("M-10,-14 Q-28,-24 -30,-38 Q-20,-34 -14,-24","#e2574c");P("M10,-14 Q28,-24 30,-38 Q20,-34 14,-24","#e2574c");
  E(-28,-40,8,6,"#e2574c",-30);E(28,-40,8,6,"#e2574c",30);P("M-8,28 L-14,40 L14,40 L8,28Z","#e2574c");eye(-4,-14);eye(4,-14);for(let y=0;y<24;y+=8)L(`M-10,${y} L10,${y}`,1.5);},
 "Maryland":()=>{ // blue crab
  E(0,4,30,18,"#4d8fcc");for(const s of[-1,1]){L(`M${s*26},10 L${s*40},20`);L(`M${s*24},16 L${s*36},30`);P(`M${s*20},-6 L${s*30},-26 L${s*38},-20`,"none");E(s*36,-26,8,6,"#e2574c");}eye(-6,-6,3);eye(6,-6,3);},
 "Massachusetts":()=>{ // whale tail
  L("M-42,32 Q-30,26 -18,32 T6,32 T30,32 T44,30",3,"#3c79b8");
  P("M-5,30 C-5,16 -3,6 -3,0 C-15,-4 -31,-10 -39,-27 C-23,-24 -11,-17 0,-9 C11,-17 23,-24 39,-27 C31,-10 15,-4 3,0 C3,6 5,16 5,30Z","#4a6fa5");
  L("M-30,-20 Q-16,-12 -4,-6",1.6,"#8fb0d9");},
 "Michigan":()=>{ // cherries
  L("M-12,8 Q-8,-24 10,-36",3);L("M14,4 Q12,-20 10,-36",3);E(16,-38,12,6,"#5aa469",-20);C(-14,16,16,"#d7263d");C(16,12,15,"#d7263d");C(-20,10,4,"#ff8a9a",true);C(10,6,4,"#ff8a9a",true);},
 "Minnesota":()=>{ // snowflake
  C(0,0,40,"#cfe3f7");for(let i=0;i<6;i++){G.append("path").attr("d","M0,0 L0,-30 M0,-18 L-8,-26 M0,-18 L8,-26").attr("fill","none").attr("stroke","#2b4c8c").attr("stroke-width",4).attr("stroke-linecap","round").attr("transform",`rotate(${i*60})`);}},
 "Mississippi":()=>{ // riverboat
  R(-34,-2,68,18,"#ffffff");R(-24,-18,46,16,"#ffffff");R(-12,-38,8,20,"#2b2f3a");R(4,-38,8,20,"#2b2f3a");C(30,16,12,"#c4553d");L("M-40,28 Q-30,22 -20,28 T0,28 T20,28 T40,28",3,"#3c79b8");},
 "Missouri":()=>{ // gateway arch
  P("M-34,36 Q-30,-40 0,-40 Q30,-40 34,36 L24,36 Q22,-26 0,-28 Q-22,-26 -24,36Z","#d0d6de");L("M-44,38 L44,38",3);},
 "Montana":()=>{ // bear head
  C(-22,-22,11,"#7a4b2a");C(22,-22,11,"#7a4b2a");C(0,4,32,"#8b5a33");E(0,16,14,10,"#d9b48a");E(0,10,6,4,O,0,true);eye(-12,-4,3.2);eye(12,-4,3.2);L("M0,14 L0,20 M-5,22 Q0,25 5,22",2.2);},
 "Nebraska":()=>{ // covered wagon
  P("M-34,6 L-28,-26 Q0,-44 28,-26 L34,6Z","#f4ead7");L("M-14,-34 L-12,6 M14,-34 L12,6",2);R(-38,6,76,12,"#8a5a3b");C(-22,24,12,"#c99a63");C(22,24,12,"#c99a63");C(-22,24,3,O,true);C(22,24,3,O,true);},
 "Nevada":()=>{ // dice
  R(-36,-20,38,38,"#ffffff",8);R(2,-30,36,36,"#e2574c",8);[[-26,-10],[-8,8],[-17,-1]].forEach(([x,y])=>C(x,y,3.6,O,true));[[11,-21],[29,-21],[11,-3],[29,-3]].forEach(([x,y])=>C(x,y,3.4,"#ffffff",true));},
 "New Hampshire":()=>{ // maple leaf
  P("M0,-40 L8,-22 L22,-28 L18,-10 L36,-8 L26,4 L32,12 L10,12 L8,28 L0,22 L-8,28 L-10,12 L-32,12 L-26,4 L-36,-8 L-18,-10 L-22,-28 L-8,-22Z","#e86a33");L("M0,22 L0,42",3);},
 "New Jersey":()=>{ // ferris wheel
  C(0,-6,32,"none");for(let i=0;i<8;i++){const a=i*Math.PI/4;L(`M0,-6 L${32*Math.cos(a)},${-6+32*Math.sin(a)}`,2);C(32*Math.cos(a),-6+32*Math.sin(a),5,["#e2574c","#f6c64a","#4d8fcc","#5aa469"][i%4]);}
  C(0,-6,5,"#ffffff");L("M-14,40 L0,-6 L14,40 M-24,40 L24,40",3);},
 "New Mexico":()=>{ // chile
  P("M-8,-26 C18,-26 30,6 24,30 C20,42 10,38 10,26 C10,8 0,-10 -14,-14 C-22,-16 -20,-26 -8,-26Z","#d7263d");P("M-10,-26 Q-16,-38 -6,-42 Q-2,-36 -4,-28Z","#5aa469");C(8,-14,4,"#ff8a9a",true);},
 "New York":()=>{ // Statue of Liberty
  P("M-16,40 L-12,4 Q-14,-10 -6,-14 L6,-14 Q14,-10 12,4 L16,40Z","#7cc4b0");C(0,-22,11,"#7cc4b0");
  for(let i=-2;i<=2;i++)P(`M${i*6},-32 L${i*9},-46 L${i*6+3},-32Z`,"#7cc4b0");L("M8,-12 L22,-34",5);L("M8,-12 L22,-34",2,"#7cc4b0");
  P("M17,-36 L27,-36 L25,-40 L19,-40Z","#7cc4b0");P("M22,-40 Q16,-50 22,-56 Q28,-50 22,-40Z","#f6c64a");R(-12,6,10,14,"#5aa496",2);eye(-4,-22,2);eye(4,-22,2);},
 "North Carolina":()=>{ // striped lighthouse
  P("M-14,36 L-8,-22 L8,-22 L14,36Z","#ffffff");for(let k=0;k<4;k++){const y1=-22+k*15,y2=y1+7;G.append("path").attr("d",`M${-8-(y1+22)*6/58},${y1} L${8+(y1+22)*6/58},${y1-6} L${8+(y2+22)*6/58},${y2-6} L${-8-(y2+22)*6/58},${y2}Z`).attr("fill",O);}
  S(G.append("path").attr("d","M-14,36 L-8,-22 L8,-22 L14,36Z").attr("fill","none"));R(-10,-34,20,12,"#f6c64a",2);P("M-12,-34 L0,-44 L12,-34Z","#c4553d");L("M-24,-30 L-36,-36 M24,-30 L36,-36",2.4,"#f6c64a");},
 "North Dakota":()=>{ // wheat
  for(const s of[-1,0,1]){L(`M${s*10},40 Q${s*6},0 ${s*14},-20`,3,"#9a7a2c");for(let k=0;k<4;k++)E(s*14-(s?s*2:0)*k/2,-20+k*10-6,5,9,"#f2c14e",s*20);}},
 "Ohio":()=>{ // buckeye
  C(0,4,32,"#6b3b1f");E(-6,-4,16,12,"#d9b48a",-20);P("M-10,-28 Q0,-44 12,-36 Q4,-30 0,-28Z","#5aa469");C(10,14,4,"#a8683e",true);},
 "Oklahoma":()=>{ // tornado
  for(let i=0;i<5;i++){const w=40-i*7,y=-34+i*15;E(i*3,y,w,7,i%2?"#c9d3e3":"#aebad0");}L("M10,34 Q4,40 0,44",3);},
 "Oregon":()=>{ // pine
  P("M0,-42 L18,-14 L8,-14 L24,10 L10,10 L28,32 L-28,32 L-10,10 L-24,10 L-8,-14 L-18,-14Z","#3f8f5a");R(-5,32,10,10,"#8a5a3b",2);for(const [x,y] of [[-30,-30],[30,-24],[-34,0],[34,4]])L(`M${x},${y} l-3,8`,2.2,"#5fa4dd");},
 "Pennsylvania":()=>{ // Liberty Bell
  R(-6,-42,12,8,"#8a5a3b",2);P("M-22,-30 Q-24,-34 -18,-34 L18,-34 Q24,-34 22,-30 Q26,0 34,22 L-34,22 Q-26,0 -22,-30Z","#b88a4d");R(-38,20,76,8,"#9a6f38",4);L("M4,-24 L-2,-10 L6,2 L0,14",2.4);C(0,32,6,"#7a5326");},
 "Rhode Island":()=>{ // anchor
  C(0,-30,8,"none");L("M0,-22 L0,36 M-18,-8 L18,-8 M-32,10 Q-26,34 0,36 Q26,34 32,10",6,O);L("M0,-22 L0,36 M-18,-8 L18,-8 M-32,10 Q-26,34 0,36 Q26,34 32,10",3,"#4d8fcc");P("M-36,4 L-32,14 L-26,6Z","#4d8fcc");P("M36,4 L32,14 L26,6Z","#4d8fcc");},
 "South Carolina":()=>{ // palmetto + crescent
  R(-40,-40,80,80,"#2b4c8c",12);P("M-24,-30 A14,14 0 1 0 -10,-12 A11,11 0 1 1 -24,-30Z","#ffffff",true);L("M10,34 L8,-6",5,"#ffffff");
  for(const a of[-60,-30,0,30,60])G.append("path").attr("d","M8,-6 Q8,-22 8,-28").attr("stroke","#ffffff").attr("stroke-width",5).attr("stroke-linecap","round").attr("transform",`rotate(${a},8,-6)`);},
 "South Dakota":()=>{ // Rushmore
  P("M-40,36 L-40,-10 Q-30,-34 -10,-30 Q6,-40 22,-28 Q40,-22 40,0 L40,36Z","#b9a58d");[[-26,-8],[-8,-12],[8,-8],[24,-2]].forEach(([x,y])=>{E(x,y,7,10,"#d6c7b3");eye(x-2.5,y-2,1.4);eye(x+2.5,y-2,1.4);});},
 "Tennessee":()=>{ // guitar
  E(-4,18,20,18,"#d98c3a");E(-2,-4,14,13,"#d98c3a");C(-3,10,6,O,true);R(-4,-46,7,40,"#7a4b2a",2);R(-7,-54,13,10,"#7a4b2a",3);L("M-6,24 L2,24",3);[-2,1].forEach(x=>L(`M${x},-44 L${x},24`,1,"#f3e3c3"));},
 "Texas":()=>{ // cowboy boot
  P("M-16,-40 L14,-40 L16,10 Q30,12 38,20 Q40,30 30,32 L-14,32 Q-20,32 -20,24Z","#a0522d");P("M-22,32 L-14,32 L-14,40 L-22,40Z","#5c2f17");R(-18,-40,34,10,"#c87a44",2);P("M-6,-20 l3,-7 3,7 7,3 -7,3 -3,7 -3,-7 -7,-3Z","#f6c64a",true);},
 "Utah":()=>{ // Delicate Arch
  P("M-34,38 L-30,-6 Q-26,-38 0,-40 Q26,-38 30,-6 L34,38 L20,38 Q20,-14 0,-18 Q-20,-14 -20,38Z","#d4693a");L("M-44,40 L44,40",3);C(26,-36,6,"#f6c64a");},
 "Vermont":()=>{ // maple syrup jug
  P("M-22,-18 Q-26,-10 -26,0 L-26,32 Q-26,38 -20,38 L20,38 Q26,38 26,32 L26,0 Q26,-10 22,-18Z","#c97a33");R(-10,-34,20,16,"#c97a33",3);R(-12,-42,24,8,"#e2574c",3);
  P("M16,-14 Q36,-10 30,10 Q26,18 18,14","none");R(-16,4,32,20,"#f4ead7",3);Tx(0,20,"SYRUP",9,O);},
 "Virginia":()=>{ // lovers heart
  P("M0,34 C-40,6 -34,-32 -10,-30 C-2,-30 0,-22 0,-20 C0,-22 2,-30 10,-30 C34,-32 40,6 0,34Z","#e2574c");Tx(0,4,"LOVE",14,"#ffffff");},
 "Washington":()=>{ // coffee cup
  P("M-26,-16 L26,-16 L20,34 L-20,34Z","#f4ead7");R(-30,-26,60,12,"#ffffff",4);R(-22,0,44,16,"#3f8f5a",2);C(0,8,6,"#ffffff",true);
  L("M-8,-36 Q-14,-44 -6,-50 M6,-34 Q0,-42 8,-48",2.4,"#9aa7b8");},
 "West Virginia":()=>{ // canoe
  P("M-44,4 Q0,26 44,4 Q30,-2 0,-2 Q-30,-2 -44,4Z","#c4553d");L("M-18,-34 L14,14",4,"#8a5a3b");E(16,18,6,10,"#8a5a3b",-32);L("M-44,26 Q-30,20 -16,26 T12,26 T40,26",3,"#3c79b8");},
 "Wisconsin":()=>{ // cheese
  P("M-38,10 L22,-26 L40,-10 L40,26 L-38,26Z","#f6c64a");P("M-38,10 L40,-10","none");L("M-38,10 L40,-10");[[0,10,6],[22,4,4],[-18,18,4],[28,18,3]].forEach(([x,y,r])=>C(x,y,r,"#e0a72c"));},
 "Wyoming":()=>{ // bison
  P("M-38,8 Q-40,-18 -20,-26 Q-4,-36 14,-24 Q30,-22 36,-6 Q40,10 32,18 L-30,18 Q-38,16 -38,8Z","#7a4b2a");E(-26,-8,14,16,"#5c3519");
  P("M-34,-20 Q-40,-28 -34,-32","none");L("M-34,-18 Q-42,-26 -36,-32",3);eye(-28,-8,2.6);R(-28,16,8,18,"#5c3519",3);R(-8,16,8,18,"#5c3519",3);R(12,16,8,18,"#5c3519",3);R(26,16,8,16,"#5c3519",3);}
};
window.STICKER_STATES=Object.keys(ART);
window.drawSticker=function(par,state,x,y,s=1,rot=0,filter){
  const f=ART[state];if(!f)return null;
  const g=par.append("g").attr("transform",`translate(${x},${y}) rotate(${rot}) scale(${s})`);
  if(filter)g.attr("filter",filter);
  G=g;f();G=null;return g;};
/* priority: iconic stickers first when there are more visited states than slots */
window.STICKER_PRIORITY=["New York","Wyoming","California","Texas","Arizona","Tennessee","Florida","Nevada","Utah","Hawaii","Alaska","Louisiana","Illinois","Washington","Colorado","Pennsylvania","Montana","Maine","Massachusetts","Missouri","South Dakota","Wisconsin","Kentucky","Georgia","New Mexico","Oregon","Michigan","Iowa","Indiana","North Carolina","Nebraska","Kansas","Idaho","Ohio","Oklahoma","Arkansas","Maryland","Vermont","New Hampshire","New Jersey","Virginia","West Virginia","Minnesota","Mississippi","Alabama","Connecticut","Rhode Island","South Carolina","North Dakota","Delaware"];
})();
