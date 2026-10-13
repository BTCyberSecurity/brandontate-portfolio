# brandontate-portfolio
Professional portfolio documenting IT infrastructure, cybersecurity, identity, automation, and engineering projects.

## Development

Run `npm run dev` for development, `npm run lint` for ESLint, and
`npm run build` followed by `npm run start` for a production preview.

The production build uses Webpack because Turbopack's PostCSS worker failed
to start in the audited Windows environment. The site keeps its existing
Arial typography and does not download unused Google Fonts during builds.

## SEO and navigation

Page metadata and sitemap paths are maintained in `src/lib/metadata.ts`.
Canonical URLs use `https://www.brandontate.info`, the destination observed
after the public domain redirects. Each new content route should have its
own metadata and be added to `pagePaths`. The social preview is generated
by `src/app/opengraph-image/route.tsx`.

Notebook cards link to the relevant existing article or project documentation.

## Languages

All 15 content pages are available in English, Spanish, Japanese, Russian,
Mandarin (Simplified Chinese), and Hindi:

- English: `/` and the existing unprefixed routes.
- Spanish: `/es` and `/es/...`.
- Japanese: `/ja` and `/ja/...`.
- Russian: `/ru` and `/ru/...`.
- Mandarin: `/zh` and `/zh/...`, declaring `zh-Hans`.
- Hindi: `/hi` and `/hi/...`, declaring `hi`.

The language selector retains the equivalent page when switching languages.
Internal page links retain the locale; shared assets and the English résumé
stay at their original URLs. Each document declares its own `lang`, localized
metadata, self-canonical URL, and language alternates. The sitemap includes
all 90 content URLs. Content pages remain statically generated.

The original English page files now live under `src/app/(english)`;
this route group does not change their public URLs. Separate root layouts
allow accurate HTML language attributes without browser-side translation or
request-dependent rendering. `globalNotFound` is enabled for the custom 404
across those root layouts, and invalid translated paths use localized 404s.

Translations in `src/i18n/es.json`, `ja.json`, `ru.json`, `zh.json`, and `hi.json` were drafted with
Google Translate from the public portfolio copy. `src/i18n/reviewed.ts`
contains editorial corrections for prominent copy and terminology. Brand
names and official certification names are preserved. Native-speaker review
is recommended before considering the translations professionally verified.
No translation service is called during builds or when visitors use the site.

When English wording changes, update the matching keys in all five catalogs
and any applicable editorial overrides. For a new page, add it to `pagePaths`
and the localized renderer's page registry. The locale check also scans the
English source to catch new untranslated copy.

After building, run `npm run check:locales` to validate catalogs and all 90
production page artifacts. With a production server running, append its URL:

```powershell
npm run check:locales -- http://127.0.0.1:3000
```

The URL option additionally checks actual HTTP responses, unknown routes,
and shared assets. Browser layout and keyboard testing still require a
reachable browser preview.

## Validation baseline

The October 13, 2026 audit verified production HTML for 12 content routes,
canonical URLs, skip-link targets, social metadata, sitemap, robots, and
the generated social image. Homepage HTML was approximately 109 KB raw
and 17 KB gzipped; the social image was approximately 44 KB. These are
artifact sizes, not measured network transfer sizes or Core Web Vitals.

Browser verification of the updated preview was blocked by preview network
isolation. Before release, check keyboard focus, Escape dismissal, the
skip link, menu scrolling on short screens, responsive widths, and text
contrast in a reachable production preview. Collect a Lighthouse baseline
and real-user Core Web Vitals before claiming a performance improvement.

The multilingual implementation subsequently passed lint, production build,
catalog coverage, all 48 generated page checks, and HTTP checks for those
pages, shared assets, and invalid URLs. In-app browser preview access remained
unavailable, so visual review of translated layouts is still outstanding.

## Project evidence, notebook, and performance

Each project detail page now includes a logical system/workflow diagram,
documented outcomes, implementation status, related notes, and a link to its
published case-study source. Separate implementation repositories and authentic
screenshots will be added when available; the publication sequence and evidence
checklist are in `docs/project-publishing-roadmap.md`.

`/writing` is the notebook index. Its three dedicated articles are:

- `/writing/building-private-ai`
- `/writing/mfa-fatigue` (the original security exercise, retained)
- `/writing/segmented-home-lab`

All articles have equivalent language routes, article metadata, and localized
Article structured data. New build/design notes are grounded in the existing
case studies and distinguish plans from observed results.

Live mobile and desktop Lighthouse baselines, findings, and the optional
Core Web Vitals monitoring plan are in `reports/performance/README.md`.
Raw audit HTML/JSON and screenshots are kept locally and ignored by Git.
The user-approved Vercel Speed Insights SDK is mounted in the shared layout.
Enable Speed Insights in the existing Vercel project's dashboard and deploy
to start collecting real-user performance measurements. Field results require
enough actual visits; the Lighthouse baseline is not a field assessment.
