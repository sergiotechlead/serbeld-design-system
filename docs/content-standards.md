# Content Standards

Site content is data, not decoration. Every entry follows the same shape so new items slot in without design intervention.

## Experience entries

Format: role, company, location with the working mode in brackets, year range. The most recent entry carries the Current badge and the `color-accent-shadow` border (`TimelineCard` with `current`). One entry per role, so a promotion inside a company produces two entries.

| Years | Role | Company | Mode |
| --- | --- | --- | --- |
| 2025 to present | Consultant / Engineer | Valtech | Remote |
| 2023 to 2025 | Full-stack Developer (VTEX) | Rena Ware International | Remote |
| 2022 to 2023 | Technical Lead (VTEX) | Brandlive CO | Hybrid |
| 2022 | Senior Front End Developer (VTEX) | Brandlive CO | Hybrid |
| 2021 to 2022 | Web Developer (VTEX) | THM The Heating Movement | Remote |
| 2021 | Web Developer (VTEX) | Puppis | Hybrid |

Education and credentials use the same card, switched by `Tabs`: Education, Certifications, VTEX Training. Current education entries: Zeugnisbewertung: Mechatronikingenieur (ZAB, Bonn, 2025) and Mechatronics Engineer, University of Pamplona, 2015 to 2020.

## Skills

Each skill carries a name, a proficiency word in brackets and a percentage. The bracketed word is what a reader trusts, the bar is what they scan, so the two must agree. Advanced sits at 90, Intermediate between 78 and 85, Familiar at 70. Never publish 100.

| Advanced, 90 | Intermediate, 78 to 85 | Familiar, 70 |
| --- | --- | --- |
| VTEX, HTML and CSS, Contentful | TypeScript 85, React 85, JavaScript 85, GraphQL 85, Next.js 82, Node.js 80, PostgreSQL 78 | Python 70 |

## Services and pricing

| Field | Current value |
| --- | --- |
| Service | Contentful Development |
| Price | $90 /USD per hour |
| Action | Discuss your project, linking to the 30 minute Calendly slot |
| Description | Content modelling, migrations from WordPress and legacy CMSs, GraphQL layers, reusable component libraries in React and Next.js |

The grid is built for three cards. A single card is centred (`.sb-services--single`) or the section heading changes from Pricing to the specific service, so the layout does not read as unfinished.

## Facts block

| Label | Value | Maintenance |
| --- | --- | --- |
| Residence | Bogotá, Colombia | Update on relocation |
| Freelance | Available | Switch to Selective or Booked as capacity changes |
| Specialty | VTEX Architecture | Stable |
| Focus | React · Node.js | Stable |

**Ageing content.** A hardcoded age in years is wrong within twelve months and quietly dates the whole site. Either remove it or derive it from a birth date field in Contentful.

## Adding a new entry

- Do: add the role, company, location and mode before publishing; upload a square logo and let the Images API resize it; move the Current badge to the newest entry only; write the alt text as a sentence a screen reader can use; keep the proficiency word and the percentage in agreement.
- Don't: publish an entry with a missing logo or date; leave two entries marked as current; round a skill up to 100; invent a percentage for a technology used once; add a service card without a price and an action.
