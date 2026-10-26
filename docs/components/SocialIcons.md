# SocialIcons

The social cluster: 38px circles on `color-surface` with a `color-border` hairline, always in the order Instagram, GitHub, LinkedIn, appearing in the hero (12px gap) and the footer (16px gap).

**Provide:** `links` with `network` and `href`. Glyphs are the Font Awesome 6 Free brand icons in `color-text-muted`, so no third-party brand colour enters the palette; pass `src` to use an image instead, which is rendered at 24px and desaturated with `grayscale(1) brightness(1.6)`. While data loads, pass `loading`: it renders one skeleton per link (or `count`) with `aria-live="polite"` and `aria-busy="true"`, so the layout never shifts.

**Hover:** the border turns `color-accent` and the glyph lifts 2px. Each target is 38px and gains its remaining touch area from the 12px gap around it.

- Do: keep the same cluster in the hero and footer.
- Don't: render more skeletons than links, or let a brand colour through.
