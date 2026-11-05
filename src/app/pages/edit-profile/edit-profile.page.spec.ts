import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { EditProfilePage } from './edit-profile.page';
import { ProfileApiService } from 'src/app/services/profile/profile-api.service';

describe('EditProfilePage', () => {
  let component: EditProfilePage;
  let fixture: ComponentFixture<EditProfilePage>;
  let profileApiSpy: jasmine.SpyObj<ProfileApiService>;
  let navSpy: jasmine.SpyObj<NavController>;
  let toastSpy: jasmine.SpyObj<ToastController>;

  const mockUser = {
    id: 'u1',
    firstName: 'Jean',
    lastName: 'Dupont',
    phone: '6912345678',
    email: 'jean@example.com',
  };

  beforeEach(async () => {
    profileApiSpy = jasmine.createSpyObj('ProfileApiService', [
      'me',
      'updateMe',
      'uploadAvatar',
    ]);
    profileApiSpy.me.and.returnValue(of(mockUser));
    profileApiSpy.updateMe.and.returnValue(of(mockUser));
    profileApiSpy.uploadAvatar.and.returnValue(of(mockUser));

    navSpy = jasmine.createSpyObj('NavController', ['back', 'navigateForward']);
    toastSpy = jasmine.createSpyObj('ToastController', ['create']);
    toastSpy.create.and.returnValue(
      Promise.resolve({ present: jasmine.createSpy('present') } as any),
    );

    await TestBed.configureTestingModule({
      declarations: [EditProfilePage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ProfileApiService, useValue: profileApiSpy },
        { provide: NavController, useValue: navSpy },
        { provide: ToastController, useValue: toastSpy },
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

    fixture = TestBed.createComponent(EditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // EP1: uploadAvatar is called before updateMe when an avatar file is set
  it('should call uploadAvatar before updateMe when avatarFile is set', fakeAsync(async () => {
    // Seed the form with valid values
    component.form.patchValue({
      firstName: 'Jean',
      lastName: 'Dupont',
      phone: '6912345678',
    });

    // Simulate a file being selected
    const fakeFile = new File(['data'], 'avatar.jpg', { type: 'image/jpeg' });
    (component as any).avatarFileToSave = fakeFile;

    const callOrder: string[] = [];
    profileApiSpy.uploadAvatar.and.callFake((file: File) => {
      expect(file).toBe(fakeFile);
      callOrder.push('uploadAvatar');
      return of(mockUser);
    });
    profileApiSpy.updateMe.and.callFake(() => {
      callOrder.push('updateMe');
      return of(mockUser);
    });

    await component.save();
    tick();

    expect(callOrder[0]).toBe('uploadAvatar');
    expect(callOrder[1]).toBe('updateMe');
  }));

  // EP2a: updateMe is called with { firstName, lastName, phone } and nav.back() on success
  it('should call updateMe with form values and navigate back on success', fakeAsync(async () => {
    component.form.patchValue({
      firstName: 'Alice',
      lastName: 'Martin',
      phone: '6900000001',
    });

    // No avatar file
    (component as any).avatarFileToSave = null;

    await component.save();
    tick();

    expect(profileApiSpy.uploadAvatar).not.toHaveBeenCalled();
    expect(profileApiSpy.updateMe).toHaveBeenCalledWith({
      firstName: 'Alice',
      lastName: 'Martin',
      phone: '6900000001',
    });
    expect(navSpy.back).toHaveBeenCalled();
  }));

  // EP2b: error toast is shown when updateMe fails with status 400
  it('should show error toast when updateMe fails', fakeAsync(async () => {
    component.form.patchValue({
      firstName: 'Alice',
      lastName: 'Martin',
      phone: '6900000001',
    });
    (component as any).avatarFileToSave = null;

    profileApiSpy.updateMe.and.returnValue(
      throwError(() => ({ status: 400, error: { message: 'Bad request' } })),
    );

    await component.save();
    tick();

    expect(toastSpy.create).toHaveBeenCalledWith(
      jasmine.objectContaining({ message: 'Bad request' }),
    );
    expect(navSpy.back).not.toHaveBeenCalled();
  }));
});
