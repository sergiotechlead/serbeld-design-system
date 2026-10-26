# Icon

Font Awesome 6 Free glyphs rendered as inline SVG that inherit `currentColor`; icons are functional labels, never ornament.

**Provide:** `name` (one of `Signal.icons`), optional `size`, and `label` only when the icon carries meaning on its own (it then becomes `role="img"`). Decorative icons render `aria-hidden="true"` and `focusable="false"`.

**Sizes:** 13px inside buttons and links, 1em elsewhere, 24px for social glyphs. Never above 24px inside body copy.

**Shipped glyphs:** `bars` (mobile nav toggle), `download` (Download CV), `arrow-right` (Get in touch), `calendar-days` (Schedule a call), `check` (capability list), `arrow-up-right-from-square` (external credential link), `brand-instagram`, `brand-github`, `brand-linkedin` (social cluster).

- Do: pair every icon with a text label in buttons; let it inherit the colour of the text beside it; keep 8px (`space-2`) between icon and label.
- Don't: give an icon its own colour, mix icon families, or use an icon alone for a critical action.
- Additions come from Font Awesome 6 Free only; add the path to the bundle's icon map and an SVG to `assets/Icons/`.
