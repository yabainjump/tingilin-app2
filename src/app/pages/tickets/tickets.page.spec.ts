import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsPage } from './tickets.page';

describe('TicketsPage', () => {
  let component: TicketsPage;
  let fixture: ComponentFixture<TicketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
