import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountdownEnergyComponent } from './countdown-energy.component';

describe('CountdownEnergyComponent', () => {
  let component: CountdownEnergyComponent;
  let fixture: ComponentFixture<CountdownEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownEnergyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownEnergyComponent);
    component = fixture.componentInstance;
  });

  it('clamps progress and keeps the thumb inside the track', () => {
    component.progress = 150;
    expect(component.normalizedProgress).toBe(100);
    expect(component.thumbProgress).toBe(96);

    component.progress = -20;
    expect(component.normalizedProgress).toBe(0);
    expect(component.thumbProgress).toBe(4);
  });

  it('exposes an accessible countdown value', () => {
    component.label = 'Temps restant';
    component.value = '01:02:03';
    component.progress = 42;
    fixture.detectChanges();

    const meter = fixture.nativeElement.querySelector('[role="progressbar"]');
    expect(meter.getAttribute('aria-valuetext')).toBe('01:02:03');
    expect(meter.getAttribute('aria-valuenow')).toBe('42');
  });
});
