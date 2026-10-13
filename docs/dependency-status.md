# Dependency validation — October 13, 2026

The approved Speed Insights installation exposed advisories in existing
dependencies. Compatible fixes were applied before the final build:

- Next.js and `eslint-config-next`: 16.3.5 → 16.3.8.
- Sharp: 0.35.5 in the lockfile.
- `source-map-js`: 1.2.2 in the lockfile.

`npm audit --omit=dev` reports **zero production vulnerabilities** after those
updates. The build, lint, and localized-page checks are repeated with the new
versions and the Speed Insights SDK present.

Five high-severity development-tool entries remain in the chain
`braces → micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next`.
They represent the same underlying glob-pattern denial-of-service advisory.
The reported forced fix would downgrade `eslint-config-next` to 14.2.35;
that breaking mismatch with Next.js 16 was not applied. Track the upstream
tooling fix and keep lint inputs limited to the trusted project source.

References:

- [Next.js ImageResponse advisory](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j)
- [Sharp advisory](https://github.com/advisories/GHSA-wq5f-xc86-pv6w)
- [source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)
- [braces development-tool advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
