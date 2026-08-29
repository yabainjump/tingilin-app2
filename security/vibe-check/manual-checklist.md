# Manual Release Checklist — Ionic App

- [ ] Production bundle contains only public configuration; bundle/source-map inspection finds no secrets or tokens.
- [ ] API calls use HTTPS and only the production API host; payment redirects use approved Digikuntz hosts.
- [ ] Logout and account reset remove locally persisted authentication and sensitive cached data.
- [ ] Expired/revoked sessions fail closed and return to login without refresh loops.
- [ ] Malicious deep links, `javascript:` URLs and untrusted media/payment hosts are rejected.
- [ ] Android/iOS permissions match documented features and no debug backup/logging setting ships.
- [ ] Notifications and app-switcher previews do not expose sensitive payment or identity data.
- [ ] PWA/service-worker caches contain no authenticated API responses.
- [ ] Release dependency/advisory scan has no unaccepted critical/high findings.
