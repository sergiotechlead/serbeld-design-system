# TextField

A labelled input or textarea: label in Poppins 13px 500 `color-text-muted` 8px above; the field on `color-surface-2` with a 1px `color-border-strong` border, `radius-sm`, Lekton 15px, 10px × 12px padding, full width. Textareas are 100px tall and resize vertically only.

**Provide:** `label`, `id`/`name`, `type`, `required`, and `error` to show a message in `color-error` (it sets `aria-invalid` and `aria-describedby`).

**Focus:** the border becomes `color-accent`, plus the global 2px focus-visible outline. The resting border is a source value below the 3:1 non-text guideline, which is why every field keeps a visible label.

- Don't: let a placeholder stand in for a label.
