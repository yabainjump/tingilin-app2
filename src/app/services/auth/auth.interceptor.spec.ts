import {
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { AuthInterceptor } from './auth.interceptor';
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
});
