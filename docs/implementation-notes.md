# Implementation Notes

Observations from reviewing the current serbeld.space build (Brand Manual v1.0, August 2026). None of these change the identity; they are the gap between the system as documented and the system as shipped. Where a Signal component already closes the gap, it is named.

| Finding | Impact | Fix |
| --- | --- | --- |
| Navigation links all resolve to the root hash rather than their section anchors | The primary navigation does not navigate | Point each link at its section id (`NavBar` takes `href` per link) |
| The head declares the title, description, canonical and Open Graph tags twice | The later block wins, so the social image resolves to a GitHub avatar instead of the portrait | Render the head from one source and remove the duplicate block |
| The ImageObject node appears twice under one id, once as en-CO and once as es-CO | Ambiguous structured data | Keep one node with one locale |
| The social skeleton renders four placeholders while three links exist | A visible layout shift on load | Drive the skeleton count from the data (`SocialIcons` with `loading` does this) |
| The nav toggle keeps the label "Open menu" while the menu is open | Screen reader users are told the wrong state | Toggle the label and add `aria-expanded` (`NavBar` does this) |
| Skill names use the Vtex spelling while prose uses VTEX | Inconsistent naming of the core specialism | Normalise to VTEX in Contentful |
| Theme colour is #000000 while the background is #0f0f0f | A visible seam in mobile browser chrome | Align to `color-bg` |
| The footer year is hardcoded | Dates the site once the year turns | Derive from the current date (`Footer` does this) |
| Social icons ship as icons8 PNGs | A second icon source beside Font Awesome 6 Free | Use the Font Awesome brand glyphs (`SocialIcons` default) |
| The token reference lists `--font-body: 'Lekton', sans-serif` while the typography rules call for a monospace fallback | Fallback metrics drift from Lekton | Use the monospace stack in `--font-body`, as `tokens.json` does |
