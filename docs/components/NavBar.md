# NavBar

The sticky site header: 72px (`nav-height`), `color-bg` with a 1px `color-border` bottom rule, the wordmark at 16px on the left and Poppins 14px 500 links in `color-text-muted` that turn `color-accent` on hover and when active.

**Provide:** `links` in the fixed order About, Experience, Skills, Services, Contact, Blog, each pointing at its section id (`#about`, not the root hash). Mark the current one `active`.

**Mobile (820px and below):** a 44px toggle with the `bars` icon opens the menu on a `max-height` transition; links go full width with 16px × 24px padding and a bottom border. The toggle's `aria-label` switches between "Open menu" and "Close menu" and it carries `aria-expanded`.

- Do: set `scroll-padding-top: var(--nav-height)` so anchors land below the bar (bundle.css does this).
- Don't: add a second accent element to the bar; the active link is the only one.
