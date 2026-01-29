import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordSentPage } from './forgot-password-sent.page';

describe('ForgotPasswordSentPage', () => {
  let component: ForgotPasswordSentPage;
  let fixture: ComponentFixture<ForgotPasswordSentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordSentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
