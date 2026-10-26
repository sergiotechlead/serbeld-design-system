# Button

Two variants only: `primary` (Signal Blue fill, `color-text-on-accent` label) for the one action a view is for, and `outline` (`color-border-strong` border, `color-text` label) for everything beside it.

**Provide:** a verb-first label as `children` ("Download CV", "Get in touch", "Schedule a call"), optional `icon` (13px, 8px before the label), and `href` to render a link (`external` adds `target="_blank" rel="noreferrer"`). Add a `title` that says what happens, as the site does ("Download Sergio's CV as a PDF file").

**Spec:** Poppins 14px 600, padding 12px 22px, `radius-sm`, minimum 130×44px. Hover: primary background moves to `color-accent-hover`; outline border and label turn `color-accent`; 0.2s ease. At 480px and below buttons go full width. Pair them in a `.sb-btn-row` (12px gap), primary first.

- Do: keep the 44px minimum height on every interactive element; one primary per view.
- Don't: ship a hover-only affordance with no focus equivalent; the global 2px `color-accent` outline at 2px offset must stay visible.
