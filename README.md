# Signal

**Signal** is the interface system behind [serbeld.space](https://www.serbeld.space) and everything that carries the name **Sergio Beleño** — Technical Lead (VTEX) | Full Stack Web Developer. It is named after Signal Blue (`#6daaf5`), the one accent the whole identity is built around.

The identity reads as engineering, not agency: restrained dark surfaces, one accent colour, two typefaces (Poppins for structure, Lekton for reading), and no decoration that does not carry information. Source: *Sergio Beleño Brand Manual v1.0* (August 2026) and the serbeld.space build.

## What is in this repository

```
signal-design-system/
├── tokens/
│   ├── tokens.json          ← source of truth: colours, type styles, spacing, radius, shadows, layout
│   ├── tokens.css           ← the same tokens as CSS custom properties + type classes + @font-face
│   └── tokens.dtcg.json     ← W3C Design Tokens export (Tokens Studio, Figma variables, Style Dictionary)
├── src/
│   ├── components/          ← React 18 + TypeScript source, grouped as the system is
│   │   ├── Icon.tsx         ·  Icon
│   │   ├── brand.tsx        ·  Wordmark, Portrait
│   │   ├── actions.tsx      ·  Button, SkipLink
│   │   ├── navigation.tsx   ·  NavBar, Tabs, SocialIcons, Footer
│   │   ├── content.tsx      ·  SectionHeading, TypedRole, Hero, Tag, FactList, CheckList, SkillBar
│   │   ├── cards.tsx        ·  Card, TimelineCard, ServiceCard, BlogCard
│   │   ├── forms.tsx        ·  TextField, ContactForm
│   │   └── documents.tsx    ·  Callout, DoDont (manuals and proposals, not the site)
│   ├── styles/signal.css    ← component styles (sb- class prefix), built only from the tokens
│   ├── icons.ts             ← Font Awesome 6 Free glyphs used by the brand
│   └── index.ts
├── dist/                    ← prebuilt: signal.esm.js, signal.js (window.Signal), signal.css, types/
├── docs/
│   ├── brand-book.md        ← voice, colour, type, layout, motion, wordmark, portrait, icons, accessibility
│   ├── components/*.md      ← one usage guideline per component
│   ├── content-standards.md · search-and-metadata.md · performance.md · content-model.md · implementation-notes.md
├── examples/
│   ├── index.html           ← every component, live
│   └── home.html            ← the serbeld.space home page built only from Signal components
├── assets/
│   ├── wordmark/            ← outlined wordmark, lockup and SB monogram SVGs
│   ├── icons/               ← the Font Awesome SVGs
│   └── portrait/            ← portrait spec (add profile_sergio_beleno.webp here)
├── fonts/                   ← Poppins 300–600, Lekton 400/700/italic (woff2, SIL OFL 1.1)
└── figma/Signal-Design-System.fig  ← Figma file: variables, components, foundations, home template
```

## Quick start

### Plain HTML (classic scripts)

```html
<link rel="stylesheet" href="dist/signal.css">            <!-- tokens + fonts + component styles -->
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="dist/signal.js"></script>                     <!-- components on window.Signal -->
<script>
  const h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(Signal.Button, { icon: 'download', href: '/cv.pdf' }, 'Download CV')
  );
</script>
```

### React / Next.js

```tsx
import '@serbeld/signal/tokens.css';
import '@serbeld/signal/signal.css';
import { Hero, SectionHeading, TimelineCard } from '@serbeld/signal';

<SectionHeading index={2} id="experience-heading">Experience</SectionHeading>
<TimelineCard current date="2025 - Present" title="Consultant / Engineer" company="Valtech" location="Bogotá, Colombia (Remote)" />
```

### Just the tokens

`tokens/tokens.css` declares every token under its codebase name — `--color-accent`, `--color-bg`, `--space-5`, `--radius-md`, `--font-heading`, `--font-body`… — so serbeld.space can consume it directly.

### Develop

```sh
npm install
npm run typecheck
npm run build        # dist/signal.esm.js, dist/signal.js, dist/signal.css, dist/types
```

Open `examples/index.html` or `examples/home.html` in a browser to see the components.

## The rules that matter most

- **One accent.** `color-accent` (Signal Blue) only for what the visitor can act on or must notice. Roughly 70% `color-bg`, 20% surfaces, 8% text, 2% accent. If a screen looks blue, the accent has been spent on things the visitor cannot click.
- **Dark only.** Every surface is `color-bg`, `color-surface` or `color-surface-2`; the wordmark and portrait are specified for dark grounds.
- **Never mix type roles.** Poppins sets headings, navigation, buttons and labels; Lekton sets paragraphs and meta. Poppins never sets a paragraph; Lekton never sets a heading or a button.
- **Eight spacing steps on a 4px base** (`space-1` … `space-8` = 4, 8, 12, 16, 24, 32, 48, 72). Nothing outside the scale.
- **Three radii, each with one job:** `radius-sm` 6px (buttons, inputs), `radius-md` 10px (cards), `radius-lg` 18px (the portrait only).
- **Motion confirms, never announces:** 0.2s ease for everything except the 1.1s skill-bar fill; full `prefers-reduced-motion` support.
- **Accessibility is part of the identity:** AA text everywhere, a 2px accent focus ring at 2px offset, 44px minimum targets, one h1 per page.
- **Voice:** a senior engineer explaining their work to a smart person who does not share their stack. Short sentences, concrete nouns, outcomes before technology. Verb-first calls to action.

The full brand book is in [`docs/brand-book.md`](docs/brand-book.md).

## Known gaps

- The portrait (`profile_sergio_beleno.webp`) and credential badge images are not in the repository yet; `Portrait` renders a labelled empty frame until a `src` is passed.
- Three source colour pairings fall below WCAG guidelines and are kept exactly, with notes in `tokens.json`: `color-warning` as text (3.82:1), `color-border-strong` input borders (1.56:1, non-text), and `color-accent-dark` on `color-surface` (4.16:1, large text only).
- The Figma file has no Figma text styles (the 17 styles are specimens on its Foundations page); it was written with OpenPencil's `.fig` writer and should be checked on first import.

## Credits

See [`NOTICE.md`](NOTICE.md) for font and icon licences.
