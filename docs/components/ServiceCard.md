# ServiceCard

A service offer: 44px icon, name in `service-name`, a Lekton description, the price block (currency, a 30px amount, "/USD per hour" in `color-text-faint`) and a soft accent action; 32px padding, at least 300px tall.

**Provide:** `name`, `description`, `price` and `action` (label + Calendly href). The content standard requires both a price and an action. `$90 /USD per hour` is the canonical price format.

**Action hover:** the `color-accent-soft` background becomes solid `color-accent` with `color-text-on-accent`. Lay cards in `.sb-services` (three columns, one at 900px); with a single card use `.sb-services--single` to centre it, or rename the section from Pricing to the specific service, so the layout does not read as unfinished.
