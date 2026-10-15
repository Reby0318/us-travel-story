# Style guide

All designs are **1080 × 1920 px**. Safe zone for important content: y = 250 → 1670.

## Region colors

Every design colors states by these five regions:

| Region | States |
|---|---|
| West | WA, OR, CA, NV, ID, MT, WY, UT, CO |
| Southwest | AZ, NM, TX, OK |
| Midwest | ND, SD, NE, KS, MN, IA, MO, WI, IL, IN, MI, OH |
| Southeast | KY, TN, NC, SC, GA, FL, AL, MS, LA, AR, VA, WV, MD, DE |
| Northeast | NY, PA, NJ, CT, RI, MA, VT, NH, ME |

## Palettes

| Palette | West | Southwest | Midwest | Southeast | Northeast | Paper | Ink |
|---|---|---|---|---|---|---|---|
| Soft (Wrapped, Album) | `#7fb79c` | `#eea27f` | `#efcd78` | `#e9a0b4` | `#9fb3e6` | `#f8f2ec` | `#2c2531` |
| Sky / Luxe sky | `#8cc0b4` | `#f4a983` | `#f3cf7d` | `#eea2b6` | `#9fb2e6` | `#eef4f7` | `#28344a` |
| Cream editorial | `#8fa58a` | `#d9875f` | `#e2b864` | `#d99393` | `#7f9cb5` | `#f6efe4` | `#2e2a26` |
| Sage | `#7fa39a` | `#e09a6b` | `#e8c06f` | `#d996a2` | `#8aa4c8` | `#eef0e6` | `#2c3a33` |
| Lavender | `#a7c4a9` | `#f2a98f` | `#f0cf8c` | `#e9a3c1` | `#a9a6e3` | `#f3eff7` | `#352d48` |
| Terracotta | `#c9876a` | `#b85f45` | `#e2b48f` | `#d99a7d` | `#a8735c` | `#f7efe6` | `#3b2a22` |
| Pop pink | `#2ccf9f` | `#ff8a3d` | `#ffc23c` | `#ff5fa2` | `#7b7dff` | blur | `#2b1d3a` |
| MBA | visited `#6fa79d`, top region `#e3907c`, unvisited `#ebe6df`, navy `#2b3550` ||||||
| Tech | sage greens `#cfe5d6 → #4f8f72`, accents `#7d93cf` `#d9906f` `#a58fd3` ||||||

Gold, used for luxe frames and dividers: gradient `#b8914a → #ecd59a → #c9a45c → #f3e2b0 → #b08540`.

## Type

| Role | Font |
|---|---|
| Editorial titles | Playfair Display, italic 500 |
| Sticker titles | Fraunces 900, 6 px dark outline, 6 px offset shadow |
| Body / labels | DM Sans 500–700, IBM Plex Sans |
| Data / code | IBM Plex Mono 500–600 |
| Album cover | Anton |

Eyebrow lines: ALL CAPS, letter-spacing 6–8 px, muted color.

## Layout recipes

- **Editorial:** eyebrow → title → count pill → floating map (soft drop shadow) → legend → 3-column state list → line-art skyline with sun disc.
- **Skyline on top:** sun disc and skyline → city names → diamond divider → title → map → list.
- **Wrapped:** terminal prompt → title → now-playing card → 3 KPI cards → map in a browser window → bars and 50-state grid → full-name list → status badges.
- **Album:** equalizer and eyebrow → tilted gradient sleeve with a vinyl peeking out (map on the label) → track title → progress bar (states/50) → controls → region "genre" chips → Side A / Side B tracklist.
- **MBA:** accent rule → eyebrow → title and subtitle → 4 KPI cards → annotated map ("White space", "Fully covered") → coverage bar chart → state roster → source footnote.
- **Tech:** prompt → `states_visited = N` → shields-style badges → `map.render()` window → contribution grid → `stats.json` window.

## Details that make it look designed, not generated

- One accent color per design. Let the region colors do the rest.
- Grain or noise at 5–9% opacity on flat paper backgrounds.
- Shadows: soft and low (8–16 px blur, 6–12% opacity). Never harsh black.
- Confetti only in empty areas. Never on text or the map.
- Keep labels on small Northeast states short (initials), and keep full names in the list.
