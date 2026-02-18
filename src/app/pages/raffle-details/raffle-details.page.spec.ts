import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaffleDetailsPage } from './raffle-details.page';

describe('RaffleDetailsPage', () => {
  let component: RaffleDetailsPage;
  let fixture: ComponentFixture<RaffleDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
