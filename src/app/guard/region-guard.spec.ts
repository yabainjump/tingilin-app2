import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AuthStateService } from '../services/auth/auth-state.service';
import { RegionGuard } from './region-guard';

describe('RegionGuard', () => {
  let guard: RegionGuard;
  let auth: jasmine.SpyObj<AuthService>;
  let authState: jasmine.SpyObj<AuthStateService>;
  let router: jasmine.SpyObj<Router>;

  const route = {} as ActivatedRouteSnapshot;
  const state = { url: '/tabs/home' } as RouterStateSnapshot;

  beforeEach(() => {
    auth = jasmine.createSpyObj<AuthService>('AuthService', ['isLoggedIn']);
    authState = jasmine.createSpyObj<AuthStateService>('AuthStateService', [
      'ensureCurrentUser',
    ]);
    router = jasmine.createSpyObj<Router>('Router', ['createUrlTree']);

    TestBed.configureTestingModule({
      providers: [
        RegionGuard,
        { provide: AuthService, useValue: auth },
        { provide: AuthStateService, useValue: authState },
        { provide: Router, useValue: router },
      ],
    });

    guard = TestBed.inject(RegionGuard);
  });

  it('allows a user whose region is already configured', (done) => {
    authState.ensureCurrentUser.and.returnValue(
      of({ email: 'user@example.com', role: 'USER', region: 'CENTRE' }),
    );

    guard.canActivate(route, state).subscribe((result) => {
      expect(result).toBeTrue();
      expect(router.createUrlTree).not.toHaveBeenCalled();
      done();
    });
  });

  it('sends a user without a region directly to profile completion', (done) => {
    const tree = {} as UrlTree;
    authState.ensureCurrentUser.and.returnValue(
      of({ email: 'user@example.com', role: 'USER', region: null }),
    );
    router.createUrlTree.and.returnValue(tree);

    guard.canActivate(route, state).subscribe((result) => {
      expect(result).toBe(tree);
      expect(router.createUrlTree).toHaveBeenCalledWith(['/onboarding'], {
        queryParams: {
          requiredRegion: '1',
          redirect: '/tabs/home',
        },
      });
      done();
    });
  });

  it('keeps an authenticated user in the app during a transient profile error', (done) => {
    authState.ensureCurrentUser.and.returnValue(of(null));
    auth.isLoggedIn.and.returnValue(true);

    guard.canActivate(route, state).subscribe((result) => {
      expect(result).toBeTrue();
      done();
    });
  });
});
