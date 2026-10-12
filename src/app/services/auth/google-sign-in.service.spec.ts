import { TestBed } from '@angular/core/testing';
import { SocialLogin } from '@capgo/capacitor-social-login';
import { environment } from 'src/environments/environment';
import {
  GoogleSignInError,
  GoogleSignInService,
} from './google-sign-in.service';

describe('GoogleSignInService', () => {
  let service: GoogleSignInService;
  let originalClientId: string;
  let originalRedirectUrl: string;

  beforeEach(() => {
    originalClientId = environment.googleWebClientId;
    originalRedirectUrl = environment.googleRedirectUrl;
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSignInService);
  });

  afterEach(() => {
    environment.googleWebClientId = originalClientId;
    environment.googleRedirectUrl = originalRedirectUrl;
  });

  it('fails closed when the Web OAuth client ID is missing', async () => {
    environment.googleWebClientId = '';

    await expectAsync(service.signIn()).toBeRejectedWith(
      new GoogleSignInError('NOT_CONFIGURED'),
    );
  });

  it('returns the Google ID token produced by the native plugin', async () => {
    environment.googleWebClientId =
      'google-web-client.apps.googleusercontent.com';
    const initialize = spyOn(SocialLogin, 'initialize').and.resolveTo();
    spyOn(SocialLogin, 'login').and.resolveTo({
      provider: 'google',
      result: {
        responseType: 'online',
        idToken: 'google.id.token',
        accessToken: null,
        profile: {
          email: 'user@example.com',
          familyName: 'User',
          givenName: 'Test',
          id: 'google-user-1',
          name: 'Test User',
          imageUrl: null,
        },
      },
    });

    await expectAsync(service.signIn()).toBeResolvedTo('google.id.token');
    expect(initialize).toHaveBeenCalledOnceWith({
      google: {
        webClientId: environment.googleWebClientId,
        mode: 'online',
        redirectUrl: environment.googleRedirectUrl,
      },
    });
  });
});
