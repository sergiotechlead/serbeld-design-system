# Signal brand book

Signal is the interface system behind serbeld.space and everything that carries the name **Sergio Beleño** — Technical Lead (VTEX) | Full Stack Web Developer. It is named after Signal Blue, the one accent the whole identity is built around. The identity reads as engineering, not agency: restrained surfaces, one accent colour, no decoration that does not carry information. Confidence comes from specificity, never from adjectives.

## Brand at a glance

| Attribute | Value |
| --- | --- |
| Name | Sergio Beleño (always with the tilde) |
| Role line | Technical Lead (VTEX) \| Full Stack Web Developer |
| Domain | serbeld.space |
| Category | E-commerce engineering and headless commerce |
| Core platform | VTEX, since 2021 |
| Primary stack | React, Node.js, TypeScript, GraphQL, Contentful |
| Base | Bogotá, Colombia, working remotely |
| Languages | English and Spanish; site published in English (en-CO) |
| Personality | Precise · Technically authoritative · Approachable · Reliable · Modern · Direct |

**Positioning.** Technical Leader and Full Stack Web Developer specialised in VTEX, SEO and building impactful e-commerce experiences. Working across the full stack to deliver solutions from system architecture down to pixel level detail.

**Promise.** Fast, reliable e-commerce experiences, from architecture to pixel level detail. Every claim must be traceable to work that was actually shipped. When a claim cannot be evidenced, it does not belong on the page.

**Audience.** E-commerce teams on VTEX (show the six VTEX roles and the current one), agencies and consultancies (show Technical Lead history and clear hourly pricing), product and marketing leads (frame copy around speed, reliability, conversion), international hiring managers (show remote roles, English content, en-CO locale signals).

---

## Content fundamentals

The voice is a senior engineer explaining their work to a smart person who does not share their stack. Short sentences. Concrete nouns. Outcomes before technology.

- **Person.** First person singular on the site and in proposals ("I build…", "I'd love to hear about it"); third person in bios and boilerplate ("Sergio Beleño is…"). Address the reader as "you".
- **Tone.** Professional but approachable · confident without arrogance · clear and concise · technically precise · solution oriented · client focused.
- **Casing.** Sentence case for headings and body. Title Case for section titles and nav labels as the site sets them (About, Experience, Education & Credentials). UPPERCASE only through the `eyebrow` style and the Current badge.
- **No superlatives without proof.** The site and the manual use no emoji and no exclamation marks; keep it that way.
- **Calls to action are verb first:** Download CV · Get in touch · Schedule a call · Discuss your project · Send Message.

### Messaging pillars

| Pillar | Expression |
| --- | --- |
| Technical leadership | Technical Lead (VTEX). Leads architecture, not only implementation |
| Full stack range | End to end delivery across HTML, CSS, JavaScript, React and Node.js |
| Commerce focus | Building impactful e-commerce experiences on a named platform |
| Quality commitment | From architecture down to pixel level detail |
| Modern stack | React, Node.js, VTEX, GraphQL, Contentful |
| Results driven | Fast, reliable experiences, framed as outcomes |

### Say this, not that

| Instead of | Write |
| --- | --- |
| I can build websites | I build fast, reliable e-commerce experiences from architecture to pixel level detail |
| I know React and Node.js | I work across the full stack to deliver cutting edge solutions for transformative online experiences |
| I do VTEX development | Technical Leader and Full Stack Web Developer specialised in VTEX, SEO and impactful e-commerce experiences |
| Passionate about clean code | Name the outcome the code produced |
| Contact me for more info | Book a 30 minute call directly on my calendar |

### Approved boilerplate — use verbatim

**Short (12 words), bios and bylines**

> Technical Lead (VTEX) and Full Stack Web Developer building fast, reliable e-commerce experiences.

**Medium (40 words), profiles and proposals**

> Sergio Beleño is a Technical Leader and Full Stack Web Developer specialised in VTEX, SEO and impactful e-commerce experiences. He works across React, Node.js and headless architecture, from system design down to pixel level detail, for teams across the Americas and Europe.

**Long, about pages and capability decks**

> Sergio Beleño is a Technical Leader and Full Stack Web Developer based in Bogotá, Colombia, specialised in VTEX, SEO and building impactful e-commerce experiences. Across six roles on VTEX storefronts he has led architecture, front end delivery and platform migrations for retail and consumer brands, working remotely with teams in Europe and the Americas. He works across the full stack, HTML, CSS, JavaScript, React and Node.js, with GraphQL and Contentful in headless setups, and treats accessibility and performance as delivery requirements rather than afterthoughts.

### Writing mechanics

| Item | Standard |
| --- | --- |
| Name | Sergio Beleño, always with the tilde |
| Platform | VTEX in capitals in prose; normalise the legacy "Vtex" spelling |
| Category | e-commerce, lowercase with the hyphen |
| Language | English, en-CO locale. Spanish translations are reviewed, never machine generated |
| Numbers | Numerals for quantities and money. `$90 /USD per hour` is the canonical price format |
| Email | serbeldiaz@gmail.com is the professional address |

### What the brand is not

- Do: specialist positioning on VTEX and headless commerce; evidence first (roles, dates, platforms, outcomes); one accent colour and generous negative space; plain English a non-technical buyer can follow.
- Don't: generalist framing ("I can build websites"); superlatives with no proof; multiple accent colours or decorative gradients; stack-name dumps used as a substitute for value.

---

## Visual foundations

### Colour

One accent, three surfaces, three text weights. That constraint is the identity. The system is dark only.

- Page ground is `color-bg`; cards, nav panels and the portrait backing are `color-surface`; inputs, skill-bar tracks and wells inside a card are `color-surface-2`.
- Headings and primary copy in `color-text`; body, nav and meta in `color-text-muted`; timestamps, captions, footer and percentages in `color-text-faint`. Every one of these passes AA on all three surfaces.
- `color-accent` (Signal Blue, #6daaf5) is reserved for what the visitor can act on or must notice: primary buttons, links, the active nav item, the section index, the eyebrow, skill-bar fills, the focus outline. Every additional use lowers the value of the rest. Hover any accent surface to `color-accent-hover`; text on either is `color-text-on-accent`.
- `color-accent-dark` is for rules, large numerals and decorative fills only — it sits at exactly 4.5:1 on `color-bg`, so never body copy and never text below 18px.
- `color-accent-soft` backs badges, tags and the soft service action; `color-accent-shadow` borders the current timeline card and tags.
- Hairlines are `color-border`; hover borders, input borders and the outline button are `color-border-strong`.
- Status colours are functional and always paired with words: `color-success` for confirmation, `color-error` for validation, `color-warning` for offline and system banners, used as a fill or rule with copy in `color-text`.
- **Application ratio:** roughly 70% `color-bg`, 20% surface layers, 8% text, 2% accent. If a screen looks blue, the accent has been spent on things the visitor cannot click.

### Type

Two families carry the whole system. **Poppins** (`--font-heading`) gives the geometric, engineered voice for anything structural: headings, navigation, buttons, labels. **Lekton** (`--font-body`), a technical monospaced face, carries reading copy and signals the engineering context without a single line of decoration.

- Never mix roles: Poppins never sets a paragraph; Lekton never sets a heading or a button.
- The scale is the type styles in tokens: `hero-name` 44/600 → `section-heading` 26/600 → `hero-role` 20/500 → `card-title` 17/600 → `service-name` and `wordmark` 16/600 → `nav-link` 14/500, `button-label` 14/600, `section-index` 14/600 → `eyebrow` 13/600, `form-label` 13/500 → `meta` 12/500; reading copy in `body` 16/1.6, `tagline` 16/1.7, `body-sm` 14, `input-text` 15, `footer-text` 13.
- **Eyebrow:** uppercase, 0.1em letter spacing, `color-accent`, always directly above the heading it introduces.
- **Section index:** two digits with a leading zero, `color-accent`, 0.08em letter spacing.
- **Measure:** 60 to 75 characters; the hero tagline is capped at 520px for this reason.
- **Loading:** preconnect to the font host, preload the three critical woff2 files (Poppins 400, Poppins 600, Lekton 400), `font-display: optional`.
- **Fallbacks:** Poppins falls back to sans-serif; Lekton falls back to a monospace stack so metrics stay close.
- **The animated role line** (`TypedRole`) types itself in with a pipe cursor blinking every 1.1s. Only one element per page may use it, and it types a real title, never a rotating list of adjectives.

**Hierarchy in practice.** The hero is the reference implementation: eyebrow → name (the only h1) → role → tagline → proof (credential badges) → actions (primary then outline, 12px apart) → social (three circular icons, 12px apart). Any new landing block follows the same order: category, name, role, proof, action.

### Layout and spacing

- Everything sits on the eight-step 4px scale `space-1` … `space-8` (4, 8, 12, 16, 24, 32, 48, 72). No value outside the scale belongs in a stylesheet.
- Content is capped at `container-width` (1120px) and centred, with `space-5` gutters (`space-4` at 720px and below). The sticky nav reserves `nav-height` (72px) at the top of every viewport and is the scroll-margin offset.
- Section padding is `space-8` (72px) on desktop, `space-7` (48px) at 720px and below.
- **Section anatomy:** every section opens with `SectionHeading` — the two-digit accent index, the title in `section-heading`, and a hairline filling the remaining width, `space-3` apart and `space-6` above the content.

| Region | Desktop | Collapses to one column at |
| --- | --- | --- |
| About | 1.4fr and 1fr | 820px |
| Services | Three columns | 900px |
| Blog | Three columns | 600px, via two columns at 900px |
| Skills | Two columns | 640px |
| Contact | 1fr and 1fr | 820px |

| Breakpoint | Behaviour |
| --- | --- |
| 900px | Hero stacks in column-reverse and centres; services to one column; blog to two |
| 820px | Navigation switches to the toggle menu; about and contact to one column |
| 720px | Container padding to 16px, section padding to 48px |
| 640px | Skill bars to one column |
| 600px | Blog to one column |
| 560px | Timeline card padding reduces; footer stacks and centres |
| 480px | Buttons go full width and centre their content |

### Corners, borders, shadows

- `radius-sm` (6px) for buttons, inputs, focus outlines, the skip link; `radius-md` (10px) for cards and panels; `radius-lg` (18px) for the hero portrait and nothing else; `radius-pill` for skill bars and tags.
- Every card shares one shell: `color-surface`, a 1px `color-border` hairline, `radius-md`. Hover raises the border to `color-border-strong`. Only the blog card also lifts, by 2px.
- Cards rest on hairlines, not shadows. `shadow-sm` is a subtle lift; `shadow-md` belongs to the portrait.
- No gradients, textures, patterns or glass. The only gradient in the system is the loading skeleton's shimmer between `color-surface-2` and `color-border-strong`.

### Motion

Motion confirms an action; it never announces itself. One duration covers almost everything — 0.2s ease — and anything longer must justify itself. Only the skill bars do.

| Interaction | Property | Duration and easing |
| --- | --- | --- |
| Buttons, links, icons | colour, background, border | 0.2s ease |
| Card hover | border-color, transform | 0.2s ease |
| Skill bar fill | width | 1.1s cubic-bezier(0.16, 1, 0.3, 1) |
| Typewriter cursor | opacity | 1.1s infinite step-start |
| Mobile menu | max-height | 0.2s ease |
| Skip link | top | 0.2s ease |
| Page reveal | opacity | 0.2s ease-in |

**Hover vocabulary:** primary button background lightens to `color-accent-hover`; outline button border and label turn accent; nav link moves from muted to accent; timeline card border moves to `color-border-strong`; blog card border strengthens and lifts 2px; service action's soft background becomes solid accent; social icon border turns accent and the glyph lifts 2px.

**Reduced motion is not optional.** Under `prefers-reduced-motion: reduce` every animation and transition collapses to 0.01ms, iteration counts drop to 1 and smooth scrolling reverts to auto (bundle.css carries the guard). Any new animation is added inside that guard in the same commit.

### Focus and states

- Focus is a 2px solid `color-accent` outline at a 2px offset on `:focus-visible` — 7.96:1 on `color-bg`, 7.36:1 on `color-surface`, 6.77:1 on `color-surface-2` — so keyboard users see it and mouse users do not. Never remove it without replacing it with something as visible.
- 44px is the minimum height of every interactive element; social icons are 38px and gain their remaining area from the 12px gap around them.
- Every collection renders a skeleton of the exact final size while loading, with `aria-live="polite"` and `aria-busy="true"`. Empty states are faint text at 14px, never a blank region.

---

## Wordmark and portrait

The identity is typographic. There is no illustrative logo, and one is not introduced without revising this system. The wordmark is the name set in Poppins SemiBold 600 (`wordmark` style, `Wordmark` component), sentence case, tracking zero, tilde always preserved.

- Ink: `color-text` on `color-bg` or `color-surface`; `color-bg` (#0f0f0f) on a solid `color-accent` field. Never the accent as the wordmark's ink.
- Navigation size 16px; minimum 14px on screen, 22mm wide in print. Clear space: half the cap height on every side, from the glyph bounding box.
- Variants: **Sergio Beleño** (primary: navigation, documents, signatures) · **Sergio Beleño, Technical Lead (VTEX)** (lockup: profiles and proposal covers) · **SB** (monogram: avatars and favicons only, at 32px and below).
- Outlined SVGs in `assets/Wordmark/`: `sergio-beleno-wordmark.svg` (ink #e7e7ea), `sergio-beleno-wordmark-on-accent.svg` (ink #0f0f0f), `sergio-beleno-lockup.svg`, `sb-monogram.svg`, `sb-monogram-on-accent.svg`. Use them where live text cannot load Poppins (email signatures, slides, PDFs).
- Never add shadows, outlines, gradients or effects; never stretch, skew, rotate or outline the letterforms; never place it over a photograph without a solid backing panel.

**Portrait.** The portrait is the only photographic asset and functions as part of the mark: 280×280, `radius-lg`, a 1px hairline on `color-surface`, `shadow-md`, WebP, preloaded with `fetchpriority="high"`, alt text = name and role line. Head and shoulders, eyes on the upper third, even lighting, plain background dark enough to sit on `color-bg` without a seam. Keep one portrait across the site, LinkedIn and GitHub. No filters, vignettes or duotones; never on a light background. Its file belongs in `assets/Portrait/`.

**Social card.** A dedicated 1200×630 image showing the wordmark, the role line and the portrait on `color-bg` presents the brand correctly; a square portrait gets cropped by every platform.

---

## Iconography

- **Font Awesome 6 Free**, rendered as inline SVG (the `Icon` component), never as an icon font, so screen readers and CSS behave predictably. Do not mix icon sets.
- Icons are functional labels, never ornament. If an icon cannot be understood without its text label, the label stays.
- Sizes: 13px inside buttons, 1em elsewhere, 24px for social glyphs. Colour is `currentColor` — icons inherit the text beside them and never carry their own colour. 8px (`space-2`) between an icon and its label.
- Decorative icons get `aria-hidden="true"` and `focusable="false"`; meaningful icons need an accessible name (`label`).
- In use: `bars` (mobile nav toggle), `download` (Download CV), `arrow-right` (Get in touch), `calendar-days` (Schedule a call), `check` (capability list), `arrow-up-right-from-square` (external credential links).
- Social glyphs (`brand-instagram`, `brand-github`, `brand-linkedin`) render in `color-text-muted` so no third-party brand colour enters the palette. If an image is used instead, it is desaturated with `grayscale(1) brightness(1.6)`.

---

## Accessibility baseline

The brand claims attention to detail; accessibility is where anyone can test that claim, and on a portfolio site it is also the work sample.

| Area | Commitment |
| --- | --- |
| Contrast | All approved text pairings meet AA; most reach AAA (see the colour token notes) |
| Focus | 2px accent outline, 2px offset, on focus-visible |
| Skip link | First element in the DOM, slides to 16px from the top on focus |
| Landmarks | header, nav, main with an id, section, footer; one h1 per page; no skipped heading levels |
| Labelling | `aria-labelledby` on every section, `aria-label` on the menu toggle, `title` on interactive elements |
| Live regions | `aria-live="polite"` with `aria-busy` on skeleton loaders |
| Tabs | `role="tablist"` with `aria-selected` maintained |
| Images | Descriptive alt on content images; `aria-hidden` on decorative icons |
| Targets | 44px minimum for buttons; 38px plus surrounding gap for social icons |
| Motion | Full `prefers-reduced-motion` support |

**Known gaps kept from the source values:** `color-border-strong` input borders reach 1.56:1 against `color-bg` (below the 3:1 non-text guideline — fields rely on visible labels and the accent focus border); `color-warning` is 3.82:1 as text, so warning copy is set in `color-text`; `color-success` and `color-error` differ mainly by hue, so status always carries a word.

**Before any release:** tab through the whole page and watch the focus ring; check every new colour pairing against 4.5:1; confirm new animations sit inside the reduced-motion guard; give every new image real alt text or mark it decorative; keep one h1 and a continuous heading order. Never ship a hover-only affordance, add a positive tabindex, or let a placeholder stand in for a label.

---
