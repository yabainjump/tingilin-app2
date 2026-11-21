import { PUSH_FALLBACK_ROUTE, isValidPushToken, safePushRoute } from './push-deep-link';

describe('safePushRoute', () => {
  it('keeps expected internal /tabs routes', () => {
    for (const ok of [
      '/tabs/raffle-details/65f1c0ffee1234567890abcd',
      '/tabs/ticket-details/abc_DEF-123',
      '/tabs/home',
      '/tabs/winners',
      '  /tabs/notifications  ',
    ]) {
      expect(safePushRoute(ok)).toBe(ok.trim());
    }
  });

  it('falls back to the notifications list for anything else', () => {
    for (const bad of [
      'https://evil.example/tabs/home',
      'http://localhost/tabs/home',
      'javascript:alert(1)',
      '//evil.example/tabs/home',
      '/tabs/../admin',
      '/tabs/..%2Fadmin',
      '/tabs//evil.example',
      '/tabs\\evil',
      '/tabs/home?redirect=https://evil',
      '/tabs/home#x',
      '/admin/users',
      '/tabs',
      'tabs/home',
      '/tabs/' + 'a'.repeat(121),
      '',
      null,
      undefined,
      42,
      { deepLink: '/tabs/home' },
    ]) {
      expect(safePushRoute(bad)).withContext(String(bad)).toBe(PUSH_FALLBACK_ROUTE);
    }
  });
});

describe('isValidPushToken', () => {
  it('accepts FCM-shaped tokens and rejects the rest', () => {
    expect(isValidPushToken('fcm:' + 'A1_-'.repeat(10))).toBeTrue();
    expect(isValidPushToken('short')).toBeFalse();
    expect(isValidPushToken('x'.repeat(40) + ' ')).toBeFalse();
    expect(isValidPushToken('x'.repeat(4097))).toBeFalse();
    expect(isValidPushToken(undefined)).toBeFalse();
  });
});
