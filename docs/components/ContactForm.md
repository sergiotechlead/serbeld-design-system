# ContactForm

The "Send a message" card: Name, Email and Message (all required) and a submit button in `color-accent` with `color-text-on-accent`, Poppins 14px 600, 12px × 18px padding, hovering to `color-accent-hover`.

**Provide:** `onSubmit(data)` returning a promise; the form shows a `role="status"` line in `color-success` or `color-error` with words, never colour alone. Pair it with a Card offering "Schedule a call" in a two-column `.sb-about`-style grid (1fr 1fr, one column at 820px).

- Do: keep the submit label verb-first ("Send Message").
