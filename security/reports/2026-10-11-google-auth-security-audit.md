# Google Auth security audit — 2026-10-11

## Scope

- Ionic/Angular Google sign-in flow and token hand-off.
- Capacitor Android configuration and generated native project.
- Authentication token storage path and API boundary.
- Production dependency audit for the customer app.

## Results

### No reportable vulnerability remains in the scoped implementation

- Google authentication uses the maintained Capacitor 8 social-login plugin and
  Android Credential Manager. Only Google is bundled in the plugin config.
- The client forwards only the Google ID token to `POST /auth/google`; it never
  treats Google profile fields as authoritative and does not log tokens or PII.
- Application access and refresh tokens still use the existing auth service and
  encrypted native storage abstraction.
- Redirect query parameters are restricted to local absolute application paths.
- Android backup is disabled to avoid including application state in device or
  cloud backups. The generated manifest requests only `INTERNET`; feature plugin
  manifests are still merged by Gradle where required.
- No Google secret or production credential was added. OAuth Client IDs remain
  intentionally blank until configured by the operator.
- `npm audit --omit=dev` reports 0 production vulnerabilities after upgrading
  Angular to 20.3.33 and Capacitor to 8.5.3.

## Validation

- `npm run lint`: passed.
- `npm test -- --watch=false --browsers=ChromeHeadless`: 50/50 passed.
- `npm run build`: passed.
- `npx cap sync android`: passed with the Google plugin detected.
- `gradlew.bat assembleDebug` with JDK 21: passed; a debug APK was generated.

## Residual operational validation

See `security/plans/2026-10-11-google-auth-remediation.md`. A real Google
account/device test cannot run until the OAuth clients, SHA-1 fingerprints and
API environment are configured.
