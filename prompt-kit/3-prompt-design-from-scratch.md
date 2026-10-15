# Prompt: design my Story from scratch

For people who don't want to touch the repo at all. This works best with an assistant that can write and render HTML or SVG, such as Claude with Artifacts or ChatGPT with Canvas.
Attach a screenshot from `examples/featured/` of the style you like.

---

```
Design an Instagram Story image of the US states I've visited.

FORMAT
- Exactly 1080 × 1920 px (9:16). Build it as a single self-contained HTML/SVG page so I can screenshot or export it.
- Keep titles and the map out of the top 250 px and bottom 250 px (Instagram covers those areas).
- Use a real, accurate US map: the contiguous 48 states from us-atlas TopoJSON
  (https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json) drawn with d3-geo, with Canada and Mexico in a muted tone.
  Do not hand-draw or approximate state shapes.

CONTENT
- Headline: [TITLE]
- Small eyebrow line above it: "THE UNITED STATES"
- Count badge: "[N] of 50 states"
- Map: visited states filled with color by region (West, Southwest, Midwest, Southeast, Northeast); unvisited states in a quiet neutral.
  Put two-letter state codes on every state (white on visited, soft grey on unvisited).
- A short legend of the 5 regions.
- A list of my visited states with full names, alphabetical, in 2–4 columns, each with a small dot in its region color.
- A thin line-art city skyline with these cities in this order, each with its recognizable landmark, and the city names in small caps underneath (two lines if more than 6):
  [CITIES]
- Light, festive confetti and sparkles, kept away from the text.
- Time phrase used once, subtly: "[SINCE]"

STYLE: [pick one, or describe your own]
- Soft editorial: warm cream paper with grain, an italic serif title (Playfair Display), DM Sans body,
  palette sage #8fa58a, apricot #d9875f, butter #e2b864, rose #d99393, dusty blue #7f9cb5, ink #2e2a26.
- Luxe: sky-to-champagne gradient, a thin double gold frame (#c9a45c gradient) with diamond corners, linen texture, gold dividers.
- Pop / Instagram: blurred pink-peach-lilac color blobs, a chunky sticker title (Fraunces 900 with a dark outline and drop shadow),
  bright mint/tangerine/sunshine/hot-pink/violet regions, white glossy pills for the state list.
- Travel Wrapped: a year-in-review dashboard. Frosted-glass cards on a soft gradient; a "Now playing" card,
  3 KPI cards (coverage %, regions x/5, top region %), the map in a browser-window frame,
  a coverage-by-region bar chart, a 50-state grid with visited states lit up, and the full-name list.

QUALITY BAR
- Nothing overlaps or runs off the canvas. Check the longest state names ("North Carolina", "Pennsylvania").
- Generous spacing, aligned edges, at most 2 font families plus 1 accent font.
- Calculate the stats from my list. Don't make up numbers.
- After you build it, look at it critically, fix anything cramped, and then show me the final version.

MY INFO
- States: [STATES]
- Cities: [CITIES]
- Name: [NAME]
- Color mood: [MOOD]
```
