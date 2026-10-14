# Project evidence and repository roadmap

The only public repository verified during this pass was
`BTCyberSecurity/brandontate-portfolio`. The project pages therefore link to
their published case-study source. No separate implementation repositories,
screenshots, benchmarks, or quantitative results are implied.

## Release sequence

| Priority | Proposed repository | First useful release | Evidence to publish |
| --- | --- | --- | --- |
| 1 | `private-ai-infrastructure` | Documented host and service setup with example configuration | Redacted service/GPU screenshots, topology, dependency checklist, benchmark conditions and observed timings |
| 2 | `infrastructure-systems-lab` | Network and storage dependency inventory plus a recovery runbook | Sanitized topology, permitted/denied traffic matrix, observed connectivity checks, timed restore exercise |
| 2a | `network-segmentation-lab` | Working OPNsense/VLAN setup with sanitized examples and operating instructions | Use `network-segmentation-validation.md` to record interface detection, allowed/denied traffic, administrative access, USB reliability, and recovery results; all tests currently pending |
| 3 | `identity-zero-trust-lab` | Role matrix and one reproducible authentication scenario | Sanitized policy exports, synthetic users, expected/observed access results, sign-in screenshots without tenant or user identifiers |
| 4 | `sentinelforge` | Synthetic event fixtures and a baseline evaluation harness | Input schema, expected labels, model/prompt versions, quality rubric, observed accuracy and failure examples |

These names are proposals. Create the repositories when there is a working,
reviewable first release; do not publish empty repositories solely to fill
portfolio links.

## Standard repository structure

```text
README.md              # problem, scope, status, prerequisites, quick start
docs/architecture.md   # system diagram, dependencies, decisions, tradeoffs
docs/runbook.md        # operation, troubleshooting, rollback, recovery
docs/results.md        # method, conditions, observed results, limitations
examples/              # example configuration and synthetic inputs
tests/                 # tests that exercise meaningful expected behavior
assets/                # authentic redacted screenshots and diagrams
.env.example           # variable names and safe sample values only
LICENSE                # choose after confirming ownership of all content
```

## Evidence checklist for each release

1. State what is implemented, in progress, and planned separately.
2. Explain one concrete problem and the decisions made to solve it.
3. Include a diagram that matches the documented configuration.
4. Capture real screenshots after performing the relevant operation. Remove
   secrets, private addresses, tenant/user identifiers, and employer data.
5. Record expected and observed test results, including a failure case and
   a recovery or rollback step.
6. Give measurements their context: hardware, versions, input, test conditions,
   sample size, and the command or procedure used. Do not infer uptime or time
   savings from a successful setup.
7. Have someone follow the instructions in a fresh environment where practical.
8. Publish a release/tag and then add its implementation link to the portfolio.

## Case-study outline

- Problem and constraints
- Scope and implementation status
- Architecture and dependencies
- Decisions and tradeoffs
- Work completed
- Evidence, test method, and observed results
- Failures, recovery, and lessons
- Next steps
- Repository, release, screenshots, and related notebook article

The portfolio's existing design and content remain the starting point. Replace
documentation-only source links with implementation links once those releases
exist, keeping the case-study link available as supporting documentation.
