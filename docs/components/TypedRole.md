# TypedRole

The role line that types itself in under the hero name, with a pipe cursor blinking once every 1.1s (step-start), in Poppins 20px 500 `color-text-muted`; it reserves 28px so the line below never moves.

**Provide:** `text`, a real title. Screen readers get the full text at once; the typed characters are `aria-hidden`. Under `prefers-reduced-motion` it renders complete. `speed` defaults to 80ms per character (the manual does not fix one).

- Don't: use it twice on a page, or feed it a rotating list of adjectives.
