# Portrait

The portrait is the only photographic asset in the identity and works as part of the mark: 280×280, `radius-lg` (18px, used nowhere else), a 1px `color-border` hairline on a `color-surface` backing, `shadow-md`.

**Provide:** `src` (WebP exported at 560×560 for high-density screens), and keep the default `alt`: the name and role line, never a description of the photograph. It is the LCP element, so it renders with `fetchpriority="high"`; preload the exact same URL (including the `www`) in the head or the browser downloads it twice. Without `src` it renders an empty, labelled frame.

**Treatment:** head and shoulders, eyes on the upper third, even soft light, against a plain background dark enough to sit on `color-bg` without a seam.

- Do: use one portrait across the site, LinkedIn and GitHub; reshoot rather than heavily retouch an old frame.
- Don't: apply filters, vignettes or duotone; crop tighter than head and shoulders; use a different photo per channel; place it on a light background.
