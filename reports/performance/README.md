# Performance baseline — October 13, 2026

The current production homepage at `https://www.brandontate.info/` was tested
with Lighthouse 13.5.0 using headless Chrome. These are individual lab runs,
not a real-user Core Web Vitals assessment or a guarantee of future scores.

| Measure | Live mobile | Live desktop |
| --- | ---: | ---: |
| Performance score | 100 | 97 |
| Accessibility score | 96 | 96 |
| Best practices score | 100 | 100 |
| SEO score | 100 | 100 |
| Largest Contentful Paint | 1.8 s | 1.2 s |
| Total Blocking Time | 30 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

Raw HTML and JSON reports are retained locally as `live-mobile.report.*` and
`live-desktop.report.*`. They are ignored by Git to avoid committing generated
screenshots, traces, and large reports with the application source.

## Findings and response

- The live report found insufficient contrast in muted text and several small
  status labels. Foreground shades were darkened within the existing palette.
- Several accessible link names omitted the visible “Explore Project” or
  “Read Entry” labels. The links now combine their visible labels with their
  associated heading via `aria-labelledby`; the logo name includes “BT”.
- Lighthouse estimated 51 KiB of unused JavaScript and 12 KiB of legacy
  JavaScript on mobile. These are diagnostic estimates from framework code,
  not measured savings. No framework rewrite or speculative bundling change
  was made to chase a score that already reached 100 in the mobile run.
- Server-rendered content and diagrams add no new browser-side visualization
  dependency. Article routes remain statically generated in all four languages.

## Core Web Vitals and monitoring

Lighthouse provides lab LCP and CLS and uses Total Blocking Time as a lab
responsiveness signal. It does not establish production INP or the 75th
percentile of real-user LCP, INP, and CLS. No field data was collected in this
pass, so the site's real-user Core Web Vitals status is unknown.

The user explicitly approved Vercel Speed Insights after automatic approval
review initially rejected the SDK installation without authorization for
persistent visitor telemetry. The SDK is integrated in the shared layout;
visitor-performance measurements will be sent to Vercel after deployment when
Speed Insights is enabled in the existing project. Remaining setup:

1. Enable Speed Insights in the existing Vercel project, within the user's
   chosen plan and budget, and deploy.
2. Review LCP, INP, and CLS at the 75th percentile by device and page once
   enough real visits have been collected.

## Updated preview and controlled comparison

The previous committed homepage (`b30dc5d`) and updated homepage were tested
serially in the same local production runtime using the default simulated
mobile throttling. A separate temporary copy was used for the previous build.

| Measure | Previous local version | Updated local version |
| --- | ---: | ---: |
| Performance score | 76 | 76 |
| Accessibility score | 96 | 100 |
| Simulated LCP | 7.2 s | 7.2 s |
| Observed LCP before simulation | 1.232 s | 1.166 s |
| Total Blocking Time | 20 ms | 30 ms |
| Cumulative Layout Shift | 0 | 0 |

This comparison found no measured performance regression under those conditions.
The matching local results differ substantially from the live CDN baseline;
the new deployment must be tested on its actual production URL before claiming
an improved production score. A representative new Japanese article also scored
100 for accessibility in the local mobile audit.

Local best-practices scores were 96 because the existing Vercel Analytics
script URL returned 404 outside Vercel hosting. The live baseline returned 100
for best practices. The local environment does not reproduce Vercel's hosting
or delivery path.

These preview audits precede the newly approved Speed Insights integration;
the production build and page checks are repeated with the SDK present, and
the deployed SDK's performance should be included in the next live audit.
Next.js was also patched to 16.3.8 after production advisories surfaced during
installation. `docs/dependency-status.md` records the audit result and the
remaining development-tool advisory chain.

The final local mobile audit with Speed Insights and Next.js 16.3.8 present
scored 76 performance, 100 accessibility, 96 best practices, and 100 SEO.
Simulated LCP was 7.4 s, TBT 30 ms, and CLS 0. The two local console errors
were the unavailable Vercel Analytics and Speed Insights script endpoints.
The final build, lint, production dependency audit, and all 60 served-page
checks passed. Raw results are saved as `final-local-mobile.report.*`.

## Reproduce the lab audit

```powershell
$env:CHROME_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
npm exec --yes --package=lighthouse -- lighthouse https://www.brandontate.info/ --quiet --chrome-flags="--headless --no-first-run" --output=json --output=html --output-path=reports/performance/live-mobile
npm exec --yes --package=lighthouse -- lighthouse https://www.brandontate.info/ --quiet --preset=desktop --chrome-flags="--headless --no-first-run" --output=json --output=html --output-path=reports/performance/live-desktop
```

Run audits serially, use the same browser/version and throttling settings for
comparisons, and retain the conditions with the report. Recheck the deployed
version after publication; local preview results cannot prove production
performance after a new deployment.

References: [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/overview),
[Web Vitals](https://web.dev/articles/vitals),
[Vercel Speed Insights setup](https://vercel.com/docs/speed-insights/quickstart).
