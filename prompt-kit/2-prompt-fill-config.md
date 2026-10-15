# Prompt: write my `my-travel.js`

Paste this into any AI assistant, followed by your filled-in **[my info form](1-my-info-form.md)**.

---

```
I'm using the "US Travel Story" template. It reads one file, my-travel.js, in this exact format:

window.CONFIG = {
  name: "Me",
  title: "States I've Been To",
  since: "since I moved to the US",
  sinceShort: "since day one",
  states: ["Washington", "Oregon"],
  cities: ["Seattle", "Portland"]
};

Rules:
- states: full official US state names, spelled exactly (e.g. "North Carolina", not "NC"). No duplicates. Don't include DC or territories.
- cities: order them west to east by longitude. Use the common short name ("New York", "San Francisco").
- If I wrote abbreviations, nicknames or typos ("Cali", "NYC", "Philly", "Mass"), convert them to the correct full name.
- If I mention a city, don't add its state unless I said I visited the state. Ask me if anything is unclear.
- Keep text short enough for a phone screen: title ≤ 24 characters, sinceShort ≤ 18.

Reply with:
1. The complete my-travel.js file in one code block, ready to save.
2. A one-line summary: number of states, % of the 50, and which of the 5 regions (West, Southwest, Midwest, Southeast, Northeast) I've covered.

My info:
[PASTE YOUR FILLED-IN FORM HERE]
```

---

Then save the result as `my-travel.js` in the repo folder, open `generator/index.html`, and run `./scripts/render.sh`.
