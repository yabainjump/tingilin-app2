# Google Auth operational follow-up — 2026-10-11

## Required before release

1. Create a Google OAuth Web client and put the same public Client ID in both
   Angular environment files and `GOOGLE_CLIENT_ID` on the API.
2. Create Google OAuth Android clients for package `com.tinguilin.app` and each
   signing SHA-1. The current debug SHA-1 is
   `07:94:99:56:6B:8D:47:3A:B0:21:0C:01:82:A0:D8:6D:CD:4A:95:DF`; also add
   release and Play App Signing fingerprints where applicable.
3. If the consent screen is in testing mode, add the intended Google accounts as
   test users.
4. Run sign-in on a physical Android device and confirm account creation, token
   refresh, logout, cancellation, suspended-account rejection and first-login
   onboarding.
5. Re-run `npm audit --omit=dev`, lint, unit tests, production build, Capacitor
   sync and Gradle release build before publishing.
