# SkillBar

A labelled proficiency bar: the name and proficiency word in Poppins 14px 500 on the left, the percentage in `color-text-faint` on the right, over an 8px `color-surface-2` track, fully rounded, with a flat `color-accent` fill that animates its width over 1.1s `cubic-bezier(0.16, 1, 0.3, 1)` when scrolled into view.

**Provide:** `name`, `level` and `percentage`, which must agree: Advanced 90, Intermediate 78–85, Familiar 70. Never publish 100. Lay bars out in `.sb-skill-grid` (two columns, 24px gap, one column at 640px), highest confidence first.

- Do: write VTEX in capitals (the legacy "Vtex" spelling is normalised).
- Don't: fill with a gradient, or invent a percentage for a technology used once.
