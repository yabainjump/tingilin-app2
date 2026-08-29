# AI Security Audit Checklist — Tinguilin Ionic App

Audit actual source and release configuration. Cite `path:line`, verify the backend control behind every sensitive flow, and never treat a route guard or hidden control as authorization.

## Coverage

- [ ] No secrets or privileged identifiers in environments, assets, bundles, source maps, native config, logs, or Git.
- [ ] Token lifecycle uses the approved storage/service path; logout clears state; 401/refresh behavior cannot loop or reuse stale tokens.
- [ ] Customer data, tickets, payments, notifications, profiles, referrals and winnings are fetched only through authenticated APIs.
- [ ] User/API content uses safe Angular binding; no sanitizer bypass, unsafe `innerHTML`, dynamic code or DOM injection.
- [ ] Payment, media, support and deep-link URLs allow only expected HTTPS hosts and schemes.
- [ ] Forms and file pickers constrain input for UX without assuming this replaces backend validation.
- [ ] Errors, toasts, analytics and console output exclude tokens, personal data and raw provider details.
- [ ] Capacitor permissions and plugins are minimal, maintained and required by a documented feature.
- [ ] Offline/PWA caches do not persist authenticated API responses or sensitive screens unexpectedly.
- [ ] Lockfile is synchronized; advisories and native dependency risks are reviewed.
- [ ] Tests cover unauthenticated navigation, token expiry, unsafe URLs, payment cancellation/failure and logout cleanup.

## Output contract

Create `security/reports/YYYY-MM-DD-security-audit.md` with severity, CWE, evidence, impact and remediation. Put work items in `security/plans/YYYY-MM-DD-remediation.md`; verify each fix with lint, tests and a production build.
