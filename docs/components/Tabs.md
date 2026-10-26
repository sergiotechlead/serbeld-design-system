# Tabs

A `role="tablist"` row that switches the credentials list between Education, Certifications and VTEX Training, with `aria-selected` kept in sync and arrow-key, Home and End navigation.

**Provide:** `tabs` (`id`, `label`, optional `panelId` for `aria-controls`), and either `value` + `onChange` or `defaultValue`. Give the panel `role="tabpanel"` and `aria-labelledby="sb-tab-<id>"`.

**Spec:** the manual does not draw tabs, so they are assembled from existing tokens only: Poppins 14px 500 in `color-text-muted`, 44px tall, `radius-sm`, `color-border` hairline; selected = `color-accent` text on `color-accent-soft` with a `color-accent-shadow` border.

- Do: keep the label text as the state carrier, not colour alone.
- Don't: use tabs for primary navigation between pages.
