# Tinguilin App Constitution

## Core Principles

### I. User Trust Comes First (NON-NEGOTIABLE)
Payment, ticket, raffle, winner, balance, and account screens MUST show truthful server-confirmed state. The client MUST NOT invent success, infer ownership, or silently hide provider errors. Every critical action needs a clear loading, success, failure, retry, and offline state.

### II. Accessible, Consistent Mobile UX
New UI MUST use the shared design tokens and reusable components, support French and English, respect safe areas, and work from 320px phones through tablets. Interactive controls MUST have accessible names, visible focus, adequate contrast, and at least 44px touch targets. Reduced-motion preferences MUST be respected.

### III. The Client Is Never a Security Boundary
Authorization, prices, balances, raffle state, ticket allocation, and payment confirmation remain server-owned. Tokens MUST use the approved secure-storage abstraction; secrets and provider credentials MUST never ship in the bundle. User-controlled text and URLs MUST be treated as untrusted and no sensitive data may be logged.

### IV. Resilient and Performant by Design
Routes MUST remain lazy-loaded where appropriate, lists MUST avoid wasteful rendering, subscriptions MUST be cleaned up, and media MUST be sized responsibly. Network failure, stale cache, reconnect, duplicate taps, and resumed mobile sessions MUST be considered in the spec and plan. The initial experience must remain usable on ordinary mobile connections.

### V. Tested Features, Not Decorative Demos
Features MUST be complete across templates, TypeScript, services, translations, error states, and navigation. `npm run build`, `npm run lint`, and ChromeHeadless tests MUST pass before merge. New stateful behavior needs unit tests; payment and authentication journeys need integration-level verification against the API contract.

## Technical Constraints

- Stack: Ionic 8, Angular 20, Capacitor 8, strict TypeScript, RxJS, and REST/Socket.IO services.
- UI work MUST prefer shared components and variables over page-specific copies.
- All user-facing text MUST use translation keys in both `fr.json` and `en.json`.
- Forms MUST validate before submission and expose actionable inline feedback.
- API model changes require a linked backend contract change; client-side `any` is not a substitute for a contract.
- New dependencies require a size, maintenance, license, and vulnerability assessment.
- Web and native behavior MUST both be considered for camera, storage, deep links, connectivity, and status bars.

## Spec-Driven Delivery

1. Use `$speckit-specify` for outcomes, user stories, edge cases, accessibility, offline behavior, and measurable acceptance criteria.
2. Use `$speckit-clarify` before planning ambiguous journeys or cross-platform behavior.
3. Use `$speckit-plan` for component boundaries, API contracts, state flow, translations, responsive behavior, tests, rollout, and rollback.
4. Use `$speckit-tasks`, then `$speckit-analyze`, before implementation.
5. Use `$speckit-implement` and `$speckit-converge` until code, UX, tests, and artifacts agree.
6. A feature requiring backend or admin changes MUST link to companion specs or tasks in those repositories.

## Governance

This constitution governs generated artifacts and implementation in `tingilin-app`. Amendments require a rationale, review of affected specs/templates, and a version bump. Accessibility, payment truthfulness, secure token handling, and server authority cannot be relaxed by an implementation task.

**Version**: 1.0.0 | **Ratified**: 2026-08-29 | **Last Amended**: 2026-08-29
