import { TestBed } from '@angular/core/testing';
import { Subject, of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthStateService, MeDto } from './auth-state.service';

describe('AuthStateService', () => {
  let service: AuthStateService;
  let auth: jasmine.SpyObj<AuthService>;
  let sessionReset: Subject<void>;

  beforeEach(() => {
    sessionReset = new Subject<void>();
    auth = jasmine.createSpyObj<AuthService>(
      'AuthService',
      ['getToken', 'me', 'logout', 'updateRegion'],
      { sessionReset$: sessionReset.asObservable() },
    );

    TestBed.configureTestingModule({
      providers: [
        AuthStateService,
        { provide: AuthService, useValue: auth },
      ],
    });
    service = TestBed.inject(AuthStateService);
  });

  it('loads and caches the current user profile', (done) => {
    const user: MeDto = {
      email: 'user@example.com',
      role: 'USER',
      region: 'CENTRE',
    };
    auth.me.and.returnValue(of(user));

    service.ensureCurrentUser().subscribe((result) => {
      expect(result).toEqual(user);
      expect(service.me).toEqual(user);

      service.ensureCurrentUser().subscribe(() => {
        expect(auth.me).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });

  it('logs out when loading the profile returns 401', (done) => {
    auth.me.and.returnValue(throwError(() => ({ status: 401 })));

    service.ensureCurrentUser().subscribe((result) => {
      expect(result).toBeNull();
      expect(auth.logout).toHaveBeenCalled();
      done();
    });
  });

  it('clears a cached profile when the session changes', (done) => {
    auth.me.and.returnValue(
      of({ email: 'first@example.com', role: 'USER', region: 'OUEST' }),
    );

    service.ensureCurrentUser().subscribe(() => {
      sessionReset.next();
      expect(service.me).toBeNull();
      done();
    });
  });

  it('ignores a profile response that belongs to the previous session', (done) => {
    const oldRequest = new Subject<MeDto>();
    const newUser: MeDto = {
      email: 'second@example.com',
      role: 'USER',
      region: 'LITTORAL',
    };
    auth.me.and.returnValues(oldRequest.asObservable(), of(newUser));

    service.ensureCurrentUser().subscribe((result) => {
      expect(result).toBeNull();
      expect(service.me).toEqual(newUser);
      done();
    });

    sessionReset.next();
    service.ensureCurrentUser().subscribe();
    oldRequest.next({
      email: 'first@example.com',
      role: 'USER',
      region: 'CENTRE',
    });
    oldRequest.complete();
  });
});
