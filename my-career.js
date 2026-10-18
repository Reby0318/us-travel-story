/* ============================================================
 *  MY CAREER — edit this file, then open generator/index.html#v=90
 *  (designs 90–93; add &fmt=li for the 1080×1350 LinkedIn size)
 *  - skills.level: 1 Learning · 2 Working · 3 Proficient · 4 Advanced · 5 Expert
 *  - skills.group: up to 4 groups look best (they become the tree's branches)
 *  - projects.result: one measurable line. Don't post confidential employer numbers.
 *  The values below are placeholders — replace them with your own.
 * ============================================================ */
window.CAREER = {
  name:"Me",
  role:"MBA Candidate",                         // who you are now
  target:"Product & Strategy",                  // what you're aiming for
  org:"Business School",
  period:"2025–2026",
  headline:"Career Recap",
  skills:[
    {name:"Excel modeling",   group:"Analytics", level:5},
    {name:"SQL",              group:"Analytics", level:4},
    {name:"Tableau",          group:"Analytics", level:4},
    {name:"Python",           group:"Analytics", level:3},
    {name:"Market research",  group:"Marketing", level:4},
    {name:"Pricing",          group:"Marketing", level:3},
    {name:"Brand strategy",   group:"Marketing", level:3},
    {name:"Financial analysis",group:"Strategy", level:4},
    {name:"Case structuring", group:"Strategy",  level:4},
    {name:"Product roadmaps", group:"Strategy",  level:3},
    {name:"Presenting",       group:"Leadership",level:5},
    {name:"Team leadership",  group:"Leadership",level:4},
    {name:"Negotiation",      group:"Leadership",level:3}
  ],
  certs:[
    {name:"Tableau Desktop Specialist", issuer:"Tableau",  year:"2026"},
    {name:"Google Data Analytics",      issuer:"Google",   year:"2025"},
    {name:"Financial Modeling (FMVA)",  issuer:"CFI",      year:"2025"}
  ],
  projects:[
    {name:"Retail BI dashboard",       result:"Cut weekly reporting from 6 h to 30 min", tags:["Tableau","SQL"]},
    {name:"Go-to-market plan",         result:"Top 3 of 40 teams, case competition",    tags:["Market research"]},
    {name:"Pricing study for a startup",result:"Recommended tier lifted trial→paid 8%",  tags:["Pricing","Excel modeling"]},
    {name:"Consulting practicum",      result:"Board adopted 2 of 3 recommendations",   tags:["Case structuring"]}
  ],
  goals:{certs:4, projects:5},                 // targets for the PM roadmap's OKR bars
  milestones:[
    {date:"2025-09", label:"Started MBA"},
    {date:"2025-10", label:"Google Data Analytics"},
    {date:"2025-12", label:"FMVA certified"},
    {date:"2026-02", label:"Case competition — top 3"},
    {date:"2026-03", label:"Tableau certified"},
    {date:"2026-05", label:"Summer internship"},
    {date:"2026-09", label:"Consulting practicum"}
  ]
};
