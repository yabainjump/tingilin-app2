import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { ChangePasswordPage } from './change-password.page';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('ChangePasswordPage', () => {
  let component: ChangePasswordPage;
  let fixture: ComponentFixture<ChangePasswordPage>;
  let authSpy: jasmine.SpyObj<AuthService>;
  let navSpy: jasmine.SpyObj<NavController>;
  let toastSpy: jasmine.SpyObj<ToastController>;

  const toastPresent = jasmine.createSpy('present');

  beforeEach(async () => {
    authSpy = jasmine.createSpyObj('AuthService', ['changePassword']);
    navSpy = jasmine.createSpyObj('NavController', ['back']);
    toastSpy = jasmine.createSpyObj('ToastController', ['create']);
    toastSpy.create.and.returnValue(
      Promise.resolve({ present: toastPresent } as any),
    );

    await TestBed.configureTestingModule({
      declarations: [ChangePasswordPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: NavController, useValue: navSpy },
        { provide: ToastController, useValue: toastSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // CP1 — form invalide tant que les 3 champs ne sont pas remplis
  it('should be invalid when any field is empty', () => {
    component.form.patchValue({ currentPassword: '', newPassword: '', confirmPassword: '' });
    expect(component.form.invalid).toBeTrue();
  });

  // CP2 — erreur samePassword si nouveau == ancien
  it('should have samePassword error when newPassword equals currentPassword', () => {
    component.form.patchValue({
      currentPassword: 'Abc12345!',
      newPassword: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    });
    expect(component.form.errors?.['samePassword']).toBeTrue();
  });

  // CP3 — erreur passwordMismatch si confirm != new
  it('should have passwordMismatch error when confirmPassword does not match newPassword', () => {
    component.form.patchValue({
      currentPassword: 'OldPass1!',
      newPassword: 'NewPass1!',
      confirmPassword: 'Different1!',
    });
    expect(component.form.errors?.['passwordMismatch']).toBeTrue();
  });

  // CP4 — submit ne doit pas appeler AuthService si le formulaire est invalide
  it('should not call authService.changePassword when form is invalid', fakeAsync(async () => {
    component.form.patchValue({ currentPassword: 'x', newPassword: 'short', confirmPassword: 'short' });
    await component.submit();
    tick();
    expect(authSpy.changePassword).not.toHaveBeenCalled();
  }));

  // CP5 — succès : appel correct, toast succès, nav.back()
  it('should call changePassword with correct args, show success toast and navigate back on success', fakeAsync(async () => {
    authSpy.changePassword.and.returnValue(of({ ok: true }));
    component.form.patchValue({
      currentPassword: 'OldPass1!',
      newPassword: 'NewPass9!',
      confirmPassword: 'NewPass9!',
    });

    await component.submit();
    tick();

    expect(authSpy.changePassword).toHaveBeenCalledWith('OldPass1!', 'NewPass9!');
    expect(toastSpy.create).toHaveBeenCalledWith(
      jasmine.objectContaining({ color: 'success' }),
    );
    expect(navSpy.back).toHaveBeenCalled();
  }));

  // CP6 — erreur serveur : toast danger, currentPassword réinitialisé, pas de nav.back()
  it('should show error toast and reset currentPassword field on server error', fakeAsync(async () => {
    authSpy.changePassword.and.returnValue(
      throwError(() => ({ error: { message: 'Mot de passe actuel incorrect' } })),
    );
    component.form.patchValue({
      currentPassword: 'WrongPass1!',
      newPassword: 'NewPass9!',
      confirmPassword: 'NewPass9!',
    });

    await component.submit();
    tick();

    expect(toastSpy.create).toHaveBeenCalledWith(
      jasmine.objectContaining({ color: 'danger', message: 'Mot de passe actuel incorrect' }),
    );
    expect(navSpy.back).not.toHaveBeenCalled();
    // Le champ currentPassword doit être vidé pour forcer une nouvelle saisie
    expect(component.currentPassword.value).toBe('');
  }));

  // CP7 — newPassword doit avoir une longueur minimale de 8 chars
  it('should reject newPassword shorter than 8 characters', () => {
    component.form.patchValue({
      currentPassword: 'OldPass1!',
      newPassword: 'Short1',
      confirmPassword: 'Short1',
    });
    expect(component.newPassword.errors?.['minlength']).toBeTruthy();
  });

  // CP8 — le formulaire est valide avec 3 champs corrects et distincts
  it('should be valid with correct distinct passwords', () => {
    component.form.patchValue({
      currentPassword: 'OldPass1!',
      newPassword: 'NewPass9!',
      confirmPassword: 'NewPass9!',
    });
    expect(component.form.valid).toBeTrue();
  });
});
