# Vibe-check for Tinguilin Ionic App

This directory adapts [benavlabs/vibe-check](https://github.com/benavlabs/vibe-check) at commit `8894f172c24224a7aaf87e723fc0b88c319f8963` to Ionic, Angular, Capacitor, and Tinguilin's customer flows.

Use `../../AGENTS.md` during implementation, `AI-CHECKLIST.md` during code review, and `manual-checklist.md` on a release build. Reports and remediation plans belong in `../reports/` and `../plans/`.

Client controls cannot secure backend authorization or payment integrity. Audit corresponding API routes in `tingilin-api` for every sensitive client flow.

The upstream project is MIT licensed; see `UPSTREAM-LICENSE`.
