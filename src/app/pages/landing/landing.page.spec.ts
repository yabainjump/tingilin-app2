import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { HomeApiService } from 'src/app/services/home/home-api.service';
import { DrawCard } from 'src/app/services/home/home.models';
import { formatCountdown, LandingPage, pickFeaturedRaffle } from './landing.page';

describe('LandingPage', () => {
  const now = Date.parse('2026-11-21T12:00:00Z');
  const card = (over: Partial<DrawCard>): DrawCard => ({
    id: 'r1',
    title: 'AirPods',
    sold: 10,
    total: 1000,
    ticketPrice: 100,
    endsAt: '2026-11-22T18:30:00Z',
    ...over,
  });

  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;
  let home: jasmine.SpyObj<HomeApiService>;

  beforeEach(async () => {
    home = jasmine.createSpyObj('HomeApiService', ['getEndingSoon']);
    home.getEndingSoon.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [LandingPage],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), RouterTestingModule],
      providers: [{ provide: HomeApiService, useValue: home }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => component.ionViewDidLeave());

  it('features a real open raffle, never a hard-coded product', () => {
    expect(
      pickFeaturedRaffle(
        [
          card({ id: 'ended', endsAt: '2026-11-21T11:00:00Z' }),
          card({ id: 'full', sold: 1000 }),
          card({ id: 'no-date', endsAt: undefined }),
          card({ id: 'ok' }),
        ],
        now,
      )?.id,
    ).toBe('ok');
    expect(pickFeaturedRaffle([], now)).toBeNull();
    expect(pickFeaturedRaffle(null, now)).toBeNull();
  });

  it('formats the countdown with days when needed', () => {
    expect(formatCountdown(3_661_000)).toBe('01:01:01');
    expect(formatCountdown(2 * 86_400_000 + 5_000)).toBe('2 j 00:00:05');
    expect(formatCountdown(-1)).toBe('00:00:00');
  });

  it('shows the live raffle with its real price and hides the block otherwise', () => {
    home.getEndingSoon.and.returnValue(of([card({ endsAt: new Date(Date.now() + 3_600_000).toISOString() })]));
    component.ionViewWillEnter();
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.pod-name')?.textContent).toContain('AirPods');
    expect(el.querySelector('.cta-price')?.textContent).toContain('100 FCFA');
    expect(el.textContent).not.toContain('iPhone 15 Pro Max');
    expect(component.countdown).toMatch(/^00:59:5\d$|^01:00:00$/);

    home.getEndingSoon.and.returnValue(throwError(() => new Error('offline')));
    component.ionViewWillEnter();
    fixture.detectChanges();
    expect(el.querySelector('.pod')).toBeNull();
  });

  it('drops the raffle once its draw time has passed', () => {
    component.featured = card({ endsAt: '2026-11-21T12:00:01Z' });
    component.tick(now);
    expect(component.countdown).toBe('00:00:01');
    component.tick(now + 2000);
    expect(component.featured).toBeNull();
  });
});
