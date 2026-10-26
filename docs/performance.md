# Performance

Speed is a brand attribute here, not an engineering detail. The site sells fast commerce experiences, so its own numbers are the first work sample a prospect sees.

## Techniques

| Technique | Implementation |
| --- | --- |
| Preconnect | The origin and the font host, opened early in the head |
| Fonts | Three critical woff2 files preloaded (Poppins 400, Poppins 600, Lekton 400), `font-display: optional` |
| Hero image | The portrait preloaded and marked `fetchpriority="high"`, WebP, explicit 280×280 |
| Lazy images | `loading="lazy"`, WebP, sized through the CDN |
| Critical CSS | The body opacity transition is inlined so the first paint is controlled |
| JavaScript | Deferred main bundle with chunked CSS |

## Budget

| Metric | Target | Why it matters here |
| --- | --- | --- |
| Largest Contentful Paint | Under 2.5s | The hero portrait is the LCP element on most viewports |
| Cumulative Layout Shift | Under 0.1 | Skeleton loaders must reserve the exact final size |
| Interaction to Next Paint | Under 200ms | Nav toggle and tab switches are the interactive surfaces |
| Lighthouse performance | 90 or above on mobile | It is the number a prospect can check in one click |

**Two things to watch.** A stylesheet loaded with an onload media swap can still block the first paint if the media attribute is already `all`, so verify the pattern actually defers. And the preloaded hero image and the rendered `img` src must be byte-identical, including the `www` prefix, or the browser downloads the portrait twice.

## Measurement routine

| When | What to run | Acted on if |
| --- | --- | --- |
| Every deploy | Lighthouse on mobile, throttled | Performance drops below 90 |
| Monthly | Core Web Vitals field data | Any metric leaves the good band |
| After a content change | Check the head for duplicate tags and validate the structured data | Any duplicate or warning appears |
| After a font or image change | Confirm the preload list still matches what the page requests | A preloaded asset is unused or duplicated |
