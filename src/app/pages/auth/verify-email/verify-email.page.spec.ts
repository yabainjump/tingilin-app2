import { fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { VerifyEmailPage } from './verify-email.page';

describe('VerifyEmailPage', () => {
  const goodToken = 'A'.repeat(43);

  const setup = (opts: { token: string | null; loggedIn: boolean; fail?: boolean }) => {
    const router = jasmine.createSpyObj('Router', ['navigate']);
    router.navigate.and.returnValue(Promise.resolve(true));
    const auth = jasmine.createSpyObj('AuthService', ['verifyEmail', 'isLoggedIn']);
    auth.isLoggedIn.and.returnValue(opts.loggedIn);
    auth.verifyEmail.and.returnValue(
      opts.fail ? throwError(() => ({ status: 400 })) : of({ ok: true, emailVerified: true }),
    );
    const authState = jasmine.createSpyObj('AuthStateService', ['refreshMe']);
    const route = {
      snapshot: { queryParamMap: { get: () => opts.token } },
    };
    const page = new VerifyEmailPage(route as any, router, auth, authState);
    return { page, router, auth, authState };
  };

  it('confirms the email then lands on the home page when logged in', fakeAsync(() => {
    const { page, router, auth, authState } = setup({ token: goodToken, loggedIn: true });
    void page.ngOnInit();
    flushMicrotasks();

    expect(auth.verifyEmail).toHaveBeenCalledWith(goodToken);
    expect(page.state).toBe('SUCCESS');
    expect(authState.refreshMe).toHaveBeenCalled();

    tick(VerifyEmailPage.REDIRECT_DELAY_MS);
    flushMicrotasks();
    expect(router.navigate).toHaveBeenCalledWith(['/tabs/home'], { replaceUrl: true });
  }));

  it('sends a logged-out visitor to login, which then returns to the home page', fakeAsync(() => {
    const { page, router } = setup({ token: goodToken, loggedIn: false });
    void page.ngOnInit();
    flushMicrotasks();
    tick(VerifyEmailPage.REDIRECT_DELAY_MS);
    flushMicrotasks();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login'], {
      replaceUrl: true,
      queryParams: { redirect: '/tabs/home' },
    });
  }));

  it('removes the token from the address bar', fakeAsync(() => {
    const { page, router } = setup({ token: goodToken, loggedIn: true });
    void page.ngOnInit();
    flushMicrotasks();
    expect(router.navigate.calls.first().args[1]).toEqual(
      jasmine.objectContaining({ queryParams: {}, replaceUrl: true }),
    );
    page.ngOnDestroy();
  }));

  it('does not call the API for a malformed link', fakeAsync(() => {
    const { page, auth } = setup({ token: '<script>', loggedIn: true });
    void page.ngOnInit();
    flushMicrotasks();
    expect(auth.verifyEmail).not.toHaveBeenCalled();
    expect(page.state).toBe('INVALID');
  }));

  it('explains an expired link without redirecting by itself', fakeAsync(() => {
    const { page, router } = setup({ token: goodToken, loggedIn: true, fail: true });
    void page.ngOnInit();
    flushMicrotasks();
    tick(5000);
    expect(page.state).toBe('INVALID');
    expect(router.navigate).toHaveBeenCalledTimes(1); // seulement le nettoyage de l'URL
  }));
});
