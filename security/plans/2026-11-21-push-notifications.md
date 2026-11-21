# Push notifications (FCM, Android) — 2026-11-21

## Scope

- Plugin `@capacitor/push-notifications@8.1.3` (exact). Android permission
  `POST_NOTIFICATIONS` (Android 13+) is merged from `firebase-messaging`; no
  permission was added by hand to `AndroidManifest.xml`.
- Local native plugin `TinguilinPushConfig` (`MainActivity` / `PushConfigPlugin`)
  only reports whether `google-services.json` was present at build time
  (resource `google_app_id`). Without it, `PushNotifications.register()` would
  crash the app, so the JS side keeps push disabled. No permission, no data.
- Web build: `Capacitor.isNativePlatform()` is false, push is a no-op.

## Controls

- Deep links from push payloads are untrusted: only `/^\/tabs\/[A-Za-z0-9/_-]{0,120}$/`
  (no `//`) is navigated to, otherwise `/tabs/notifications`
  (`src/app/services/push/push-deep-link.ts`, tested).
- FCM token kept in memory only, validated against the API regex, sent only for a
  logged-in user; unregistered (API + FCM `deleteToken`) in a pre-logout hook with
  the still-valid access token. That request bypasses the refresh/logout logic of
  the interceptor (`BYPASS_AUTH_INTERCEPTOR`) so a late 401 cannot log out a new
  session.
- No OS prompt without a user action (banner "Activer" or profile button).
- Foreground toasts render title/body as text (Ionic `innerHTMLTemplatesEnabled`
  is not enabled). Console warnings carry no token or personal data.
- Preferences are enforced by the API; the client toggles are UX only.

## Before release

1. Add `android/app/google-services.json` for package `com.tinguilin.app`;
   restrict its Android API key to the package + signing SHA-1 in Google Cloud.
2. `npx cap sync android`, rebuild the APK/AAB, then test on a physical device:
   Android 13+ prompt, Android ≤ 12 (granted by default), foreground toast,
   background tap, cold-start tap, logout (token removed server-side), account
   switch on the same phone.

## Residual risks

- Real delivery, icon/colour rendering and cold-start navigation are untested
  without a Firebase project.
- iOS is not configured: `isConfigured()` returns false on iOS.
