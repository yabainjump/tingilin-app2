import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { LoginPage } from './login.page';
import { AuthService } from '../../../services/auth/auth.service';
import { GoogleSignInService } from '../../../services/auth/google-sign-in.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let auth: jasmine.SpyObj<AuthService>;
  let googleSignIn: jasmine.SpyObj<GoogleSignInService>;
  let router: Router;

  beforeEach(async () => {
    auth = jasmine.createSpyObj<AuthService>('AuthService', [
      'login',
      'loginWithGoogle',
    ]);
    googleSignIn = jasmine.createSpyObj<GoogleSignInService>(
      'GoogleSignInService',
      ['signIn', 'isUserCancellation'],
    );
    googleSignIn.isUserCancellation.and.returnValue(false);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: GoogleSignInService, useValue: googleSignIn },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'test-id', raffleId: 'test-id' }),
              queryParamMap: convertToParamMap({}),
            },
            paramMap: of(convertToParamMap({ id: 'test-id', raffleId: 'test-id' })),
            queryParamMap: of(convertToParamMap({})),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exchanges the native Google ID token with the API', async () => {
    googleSignIn.signIn.and.resolveTo('google.id.token');
    auth.loginWithGoogle.and.returnValue(
      of({ access_token: 'app.access.token' }),
    );
    spyOn(router, 'navigateByUrl').and.resolveTo(true);

    await component.signInWithGoogle();

    expect(auth.loginWithGoogle).toHaveBeenCalledOnceWith('google.id.token');
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/home');
    expect(component.googleLoading).toBeFalse();
  });

  it('does not call the API when the user cancels Google sign-in', async () => {
    const cancellation = { code: 'USER_CANCELLED' };
    googleSignIn.signIn.and.rejectWith(cancellation);
    googleSignIn.isUserCancellation.and.callFake(
      (error) => error === cancellation,
    );

    await component.signInWithGoogle();

    expect(auth.loginWithGoogle).not.toHaveBeenCalled();
    expect(component.googleLoading).toBeFalse();
  });
});
