# Search and Metadata

The metadata is part of the brand because it is what most people see first, in a search result or a shared link. It must match the site exactly.

## Canonical strings

| Field | Value |
| --- | --- |
| Title | Sergio Beleño - Technical Lead (VTEX) \| Full Stack Web Developer |
| Description | Sergio Beleño, a Technical Leader & Full Stack Web Developer specializing in VTEX, SEO and creating impactful e-commerce experiences. |
| Canonical | https://www.serbeld.space |
| Locale | en_CO for Open Graph, en-CO for structured data |
| Twitter handle | @serbeld |
| Theme colour | `color-bg` (#0f0f0f) |

## Social card

Card type is `summary_large_image`, which crops at roughly 1.91:1. A square portrait is cropped by every platform, so use a dedicated 1200×630 card showing the wordmark, the role line and the portrait on `color-bg`.

## Structured data graph

| Node | Purpose |
| --- | --- |
| Person | Identity anchor, with sameAs pointing at LinkedIn and GitHub |
| ImageObject | Profile picture at 220×220, referenced by the Person node |
| WebSite | Site-level entity, published by the Person |
| WebPage | Page entity, about the Person, part of the WebSite |

Every `@id` in the graph resolves to exactly one node and one language. Duplicated ids, or the same id declared in two locales, invite search engines to pick for you. Validate with the Rich Results Test after any change to the head.

## Handle consistency

| Channel | Handle | Status |
| --- | --- | --- |
| LinkedIn | in/serbeld | Matches the domain |
| Twitter | @serbeld | Matches the domain |
| GitHub | sergiotechlead | Differs from the domain |
| Instagram | sergio.techlead | Differs from the domain |

Two handle families are in circulation. Pick one as primary and add the other as a redirect or display name, so a search for either lands on the same person.

## Page-level rules

| Element | Rule |
| --- | --- |
| Title | Page subject first, then the name. Under 60 characters |
| Description | One sentence, 150 to 160 characters, written for a human rather than a crawler |
| Canonical | Self-referencing on every page, absolute, with the www host |
| Open Graph image | Per page where one exists, otherwise the site card, 1200×630 |
| Headings | One h1 that matches the page subject, then h2 in document order |
| Structured data | Article or BlogPosting for posts, linked to the same Person node |
| Internal links | Every post links back to a relevant section of the home page |
