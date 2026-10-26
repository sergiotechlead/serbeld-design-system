# Content Model

Content is delivered from Contentful and rendered by React. Editors publish without a developer, which is only true while the model below stays authoritative.

| Content type | Fields | Renders as |
| --- | --- | --- |
| Experience | name, company, location, date, image | `TimelineCard` in the Experience section |
| Education and credential | name, institute, location, date, image | `TimelineCard` under the credentials `Tabs` |
| Skill | name, percentage | `SkillBar` |
| Capability item | item | `CheckList` ("Also working with") |
| Service | serviceName, serviceDescription, serviceIcon, price, buttonText | `ServiceCard` |
| Social link | url, icon | `SocialIcons` in the hero and footer |
| Asset | file | CV download and images |

## Editing conventions

| Convention | Detail |
| --- | --- |
| Live-edit attributes | `data-contentful-field-id` and `data-contentful-entry-id` are rendered on every bound element and must be preserved when markup changes |
| Images | Requested through the Contentful Images API with explicit `w`, `h`, `fm=webp` and `fit=fill` parameters |
| Loading states | Every collection renders a skeleton of the exact final dimensions, with `aria-live="polite"` and `aria-busy="true"` |
| Empty states | Faint text (`color-text-faint`) at 14px, never a blank region |
| Ordering | Experience runs newest first. Skills run highest confidence first |
