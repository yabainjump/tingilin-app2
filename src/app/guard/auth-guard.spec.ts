import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AuthGuard } from './auth-guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let auth: { isLoggedIn: jasmine.Spy };
  let router: { navigateByUrl: jasmine.Spy };

  beforeEach(() => {
    auth = {
      isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(true),
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
      ],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('returns true when logged in', () => {
    expect(guard.canActivate()).toBeTrue();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('redirects to login when logged out', () => {
    auth.isLoggedIn.and.returnValue(false);
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/auth/login', {
      replaceUrl: true,
    });
  });
});
