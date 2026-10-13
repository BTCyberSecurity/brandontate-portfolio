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
by `src/app/opengraph-image.tsx`.

Translations without existing content are marked as coming soon. Notebook
cards link to the relevant existing article or project documentation.

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
