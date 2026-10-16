# US Travel Story 🗺️✨

Turn the US states you've visited into an aesthetic **Instagram Story** (1080 × 1920 px, 9:16).
20 ready-made designs: a new **Sticker Atlas** with hand-drawn state stickers, a Travel Wrapped summary, a dark luxury collection, a profession collection (doctor, physician, CEO, teacher, PM, compiler engineer, stylist), a vinyl album, an MBA slide and a developer dashboard.

![Gallery](examples/gallery.jpg)

📘 **[Download the PDF lookbook](US-Travel-Story-Lookbook.pdf)**: all 20 designs at full size, with recommendations.

## ✨ No code? Use the online maker

### 👉 **[reby0318.github.io/us-travel-story](https://reby0318.github.io/us-travel-story/)**

It works like a survey, on your phone or laptop:

1. Tap the states you've been to (grouped by region, with search and "select all").
2. Pick the cities you visited. The list comes from the states you selected, and each state's best-known city is added automatically. Tap to swap, or type your own (up to 12).
3. Pick a headline, choose "since when", and add your name (optional).
4. Choose a design. The preview updates live.
5. Tap **Download my Story** to get a 1080 × 1920 PNG, ready to post. On phones it opens the share sheet, so you can save it to Photos or send it straight to Instagram.

Nothing you type is uploaded anywhere. Everything runs in your browser. **Copy link to my answers** gives you a link that reopens your exact Story later.

---

---

## Quick start for tinkerers (edit the config file)

1. **Download** this repo (green **Code** button → *Download ZIP*) and unzip it.
2. **Open `my-travel.js`** in any text editor and change it to your own info:

   ```js
   window.CONFIG = {
     name: "Me",
     title: "States I've Been To",
     since: "since I moved to the US",
     sinceShort: "since day one",
     states: ["California", "New York", "Texas"],
     cities: ["San Francisco", "Chicago", "New York"]   // west → east looks best
   };
   ```

3. **Preview:** double-click `generator/index.html`. A gallery of all designs opens, and you can click any one to see it full size.
4. **Export PNGs** (needs Google Chrome):

   ```bash
   ./scripts/render.sh          # every design → out/
   ./scripts/render.sh 58 57    # only designs 58 and 57
   ```

5. Post the PNG to your Story. It's already exactly 1080 × 1920.

> No Terminal? Open a design full size in Chrome, then press **Cmd+Opt+I → Cmd+Shift+P → "Capture full size screenshot"** with the device set to 1080 × 1920.

Want an AI to do it for you instead? Use the **[prompt kit](prompt-kit/)**.

---

## What's calculated for you

Everything comes from your `states` list, so nothing needs to be typed twice:

- states visited, percent of the US, and states still to go
- regions active (West / Southwest / Midwest / Southeast / Northeast) with per-region progress
- your **top region** and **white-space region** (used in the MBA slide notes)
- which coasts you've reached (used in the tech dashboard's JSON card)
- track count, Side A / Side B split, list columns and row spacing

## Designs

| # | Name | Vibe |
|---|------|------|
| 72 / 73 | sticker-atlas / sticker-atlas-night | **New.** Modern Americana: bold condensed type, hand-drawn state stickers around the map, green highway signs for your cities |
| 74 / 75 | skyline-atlas / skyline-atlas-night | **New.** Sticker Atlas with a line-art skyline of your cities' iconic buildings instead of highway signs |
| 58 / 63 | travel-wrapped / wrapped-noir | Summary dashboard (now playing, KPIs, map window, state grid) with stickers in the corners, light or dark |
| 59 | noir-gold | Black, gold-foil states, gold line-art skyline |
| 60 / 61 / 62 | midnight / emerald-velvet / bordeaux | Dark luxury in navy, emerald or wine |
| 65 | doctor | *Travel Health Record*: heartbeat line, vitals, scan, diagnosis and a signed prescription |
| 66 | physician | Journal article with abstract, Figure 1, Table 1 and an appendix |
| 67 | ceo | Black-and-gold *Annual Report*: markets entered, regional performance, CEO letter |
| 68 | teacher | *Geography Report Card*: grades by region, gold stars, handwritten comments |
| 69 | product-manager | Roadmap: travel goals (OKRs), market coverage, Shipped / Next / Backlog |
| 70 | compiler-engineer | Dark code editor: source file, dot-grid map, build log |
| 71 | stylist | *VOYAGE* magazine cover with region fabric swatches |
| 57 | music-album | Vinyl, album sleeve, player, Side A / B tracklist |
| 55 | mba-market-coverage | Consulting slide: KPI cards, annotated map, bar chart |
| 56 | tech-dashboard | Terminal prompt, badges, state grid, `stats.json` |

**Archived** (still render with `#v=` and `render.sh`, but no longer in the maker): 45–52 soft editorial and gold-frame designs, 64 ivory-gold.

### State stickers

Every state has a hand-drawn sticker (`generator/stickers.js`): a bison for Wyoming, the Statue of Liberty for New York, a saguaro for Arizona, a guitar for Tennessee, a lobster for Maine and so on. Designs show the stickers for **the states you visited**, placed around the map (never on it), most iconic first. Open `generator/index.html#v=999` to see all 50.

### City skylines

Every one of the 168 cities in the maker has its own line drawing of what it is actually known for (`generator/landmarks.js`), for example Salt Lake City's temple spires, Omaha's Desert Dome, the Fargo Theatre, the Gateway Arch, the Memphis Pyramid, Niagara Falls, the Alamo, Old Faithful and Mount Rushmore. State capitals use the real capitol (gold, green, white or pink dome). Cities typed in by hand get a generic skyline that never repeats next to another one. The skyline resizes to fit however many cities you pick. Open `generator/index.html#v=998&pg=0` (pages 0–8) to see them all.

## Instagram Story tips

- Every export is **1080 × 1920 px (9:16)**, the native Story size, so Instagram won't crop or blur it.
- Instagram covers about the **top 250 px** (profile bar) and **bottom 250 px** (reply box). Titles and maps sit inside that safe zone.
- To make it interactive, add Instagram's **Poll** or **Question** sticker ("Where should I go next?") in an empty corner.

## Folder layout

```
index.html            ← the no-code survey maker (GitHub Pages)
maker/thumbs/         ← design thumbnails for the maker
my-travel.js          ← edit me
generator/index.html  ← all designs (open in a browser)
generator/data/       ← US + world map shapes
scripts/render.sh     ← export PNGs with Chrome
prompt-kit/           ← copy-paste prompts for Claude / ChatGPT
examples/featured/    ← the 14 designs, rendered
examples/all-versions/← every earlier exploration (60+ styles)
```

## Credits

Map shapes come from [us-atlas](https://github.com/topojson/us-atlas) and [world-atlas](https://github.com/topojson/world-atlas), based on Census Bureau and Natural Earth data. The maps are drawn with [d3](https://d3js.org) and fonts are from Google Fonts. Landmarks are original line drawings, not logos.

Code is MIT licensed, so remix it freely. If you post one, tag it so others can find the template. 💌
