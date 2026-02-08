import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRafflePage } from './create-raffle.page';

describe('CreateRafflePage', () => {
  let component: CreateRafflePage;
  let fixture: ComponentFixture<CreateRafflePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRafflePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
