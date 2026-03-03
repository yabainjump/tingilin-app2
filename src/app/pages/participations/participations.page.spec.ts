import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipationsPage } from './participations.page';

describe('ParticipationsPage', () => {
  let component: ParticipationsPage;
  let fixture: ComponentFixture<ParticipationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
