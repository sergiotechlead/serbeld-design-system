# Wordmark

The identity is typographic: the name set in Poppins SemiBold 600, sentence case, tracking zero, with the tilde on the second n always preserved.

**Provide:** `variant` — `primary` ("Sergio Beleño": navigation, documents, signatures), `lockup` (name over "Technical Lead (VTEX)": profiles and proposal covers), `monogram` ("SB": avatars and favicons only, at 32px and below). `size` in px is clamped to 14px, below which the tilde loses definition. `onAccent` switches the ink to `color-text-on-accent` for a Signal Blue field.

**Placement:** only on `color-bg`, `color-surface` or a solid `color-accent` field. Clear space is half the cap height on every side, measured from the glyph bounding box. Minimum print size 22mm wide. Outlined SVGs of every variant live in `assets/Wordmark/`.

- Do: set it at full opacity; keep the tilde in every locale; respect clear space next to client logos.
- Don't: recolour it in the accent, add shadows, outlines, gradients or effects, stretch, skew or rotate it, or place it over a photograph without a solid backing panel. Never all caps or all lowercase.
