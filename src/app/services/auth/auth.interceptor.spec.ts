import {
  HttpContext,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { firstValueFrom, of, throwError } from 'rxjs';
import { AuthInterceptor, BYPASS_AUTH_INTERCEPTOR } from './auth.interceptor';
import { AuthService } from './auth.service';

describe('AuthInterceptor', () => {
  it('does not attach a stale access token or refresh before Google login', async () => {
    const auth = jasmine.createSpyObj<AuthService>('AuthService', [
      'getAccessToken',
      'hasRefreshSession',
      'getRefreshToken',
      'refresh',
      'setTokens',
      'logout',
    ]);
    auth.getAccessToken.and.returnValue('stale.access.token');
    auth.hasRefreshSession.and.returnValue(true);

    const handle = jasmine
      .createSpy('handle')
      .and.returnValue(of(new HttpResponse({ status: 200 })));
    const next = { handle } as unknown as HttpHandler;
    const interceptor = new AuthInterceptor(auth);
    const request = new HttpRequest(
      'POST',
      'https://api.example.com/api/v1/auth/google',
      { idToken: 'google-id-token' },
    );

    await firstValueFrom(interceptor.intercept(request, next));

    const forwardedRequest = handle.calls.mostRecent().args[0] as HttpRequest<unknown>;
    expect(forwardedRequest.headers.has('Authorization')).toBeFalse();
    expect(auth.refresh).not.toHaveBeenCalled();
  });

  it('leaves bypassed requests alone: no token swap, no refresh, no logout on 401', async () => {
    const auth = jasmine.createSpyObj<AuthService>('AuthService', [
      'getAccessToken',
      'hasRefreshSession',
      'getRefreshToken',
      'refresh',
      'setTokens',
      'logout',
    ]);
    auth.getAccessToken.and.returnValue(null);
    auth.hasRefreshSession.and.returnValue(true);
    const handle = jasmine
      .createSpy('handle')
      .and.returnValue(throwError(() => new HttpErrorResponse({ status: 401 })));
    const interceptor = new AuthInterceptor(auth);
    const request = new HttpRequest(
      'POST',
      'https://api.example.com/api/v1/notifications/devices/unregister',
      { token: 'x' },
      {
        headers: new HttpHeaders({ Authorization: 'Bearer old.access.token' }),
        context: new HttpContext().set(BYPASS_AUTH_INTERCEPTOR, true),
      },
    );

    await expectAsync(
      firstValueFrom(interceptor.intercept(request, { handle } as unknown as HttpHandler)),
    ).toBeRejected();

    const forwarded = handle.calls.mostRecent().args[0] as HttpRequest<unknown>;
    expect(forwarded.headers.get('Authorization')).toBe('Bearer old.access.token');
    expect(auth.refresh).not.toHaveBeenCalled();
    expect(auth.logout).not.toHaveBeenCalled();
  });
});
