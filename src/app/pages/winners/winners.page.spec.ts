import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnersPage } from './winners.page';

describe('WinnersPage', () => {
  let component: WinnersPage;
  let fixture: ComponentFixture<WinnersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
