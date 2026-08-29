# Tinguilin Ionic App Security Rules

These rules adapt benavlabs/vibe-check to the Tinguilin Ionic/Angular customer application. They apply to every generated or reviewed change.

## Non-negotiable controls

- Browser and mobile bundles are public. Never place Digikuntz keys, JWT secrets, database credentials, privileged API keys, or private configuration in environments, TypeScript, templates, assets, native config, or source maps.
- The API is the only authority for identity, role, price, balance, ticket ownership, raffle eligibility, payment status, and winnings. Client guards and validation improve UX but never replace server controls.
- Use the existing authenticated API service/interceptor and approved secure storage abstraction. Do not introduce raw `localStorage`/`sessionStorage` for tokens or log tokens and personal data.
- Render user and API content with Angular binding. Do not use `innerHTML`, direct DOM HTML injection, dynamic script execution, or sanitizer bypasses without a documented and tested security design.
- Validate and normalize deep links, external URLs, media URLs, and payment redirects. Allow only expected HTTPS schemes and trusted hosts; never navigate to provider data blindly.
- Do not expose sensitive data in notifications, analytics, crash logs, console output, screenshots, or translated error messages.
- File selection must enforce UX size/type constraints, while treating the backend as the final validator.
- Keep Capacitor permissions minimal and document any new camera, storage, location, or network capability.
- Commit and use `package-lock.json`; review advisories and native-plugin maintenance before upgrades.

## Required verification

For security-sensitive changes, run `security/vibe-check/AI-CHECKLIST.md`, add regression tests, then run `npm run lint`, `npm test -- --watch=false`, and `npm run build`. Record unresolved risks under `security/plans/`.
