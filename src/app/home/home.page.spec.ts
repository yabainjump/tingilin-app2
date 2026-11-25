import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { HomePage } from './home.page';
import { DrawCard } from '../services/home/home.models';
import { NetworkStatusService } from '../services/offline/network-status.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
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

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('no draws message', () => {
    let offline: boolean;

    beforeEach(() => {
      offline = false;
      spyOn(TestBed.inject(NetworkStatusService), 'isOffline').and.callFake(() => offline);
      component.featured = null;
      component.heroCards = [];
      component.liveRows = [];
    });

    it('appears only after 15 s when online with no draws', () => {
      expect(component.showNoDraws).toBeFalse();
      component.noDrawsGraceElapsed = true;
      expect(component.showNoDraws).toBeTrue();
    });

    it('is never shown offline (the offline block is used instead)', () => {
      component.noDrawsGraceElapsed = true;
      offline = true;
      expect(component.showNoDraws).toBeFalse();
    });

    it('disappears as soon as a draw exists', () => {
      component.noDrawsGraceElapsed = true;
      component.liveRows = [{ id: 'r1' } as DrawCard];
      expect(component.showNoDraws).toBeFalse();
    });

    it('starts the 15 s countdown on entering the page', () => {
      jasmine.clock().install();
      try {
        (component as any).noDrawsTimer = undefined;
        (component as any).armNoDrawsTimer();
        jasmine.clock().tick(14_999);
        expect(component.noDrawsGraceElapsed).toBeFalse();
        jasmine.clock().tick(1);
        expect(component.noDrawsGraceElapsed).toBeTrue();
      } finally {
        jasmine.clock().uninstall();
      }
    });

    it('refresh button reloads draws and clears its spinner when done', () => {
      let done: (() => void) | undefined;
      spyOn(component, 'loadDraws').and.callFake((_r, cb) => (done = cb));
      spyOn(component, 'loadHeader');
      spyOn(component, 'loadCategories');

      component.refreshNoDraws();
      expect(component.refreshingDraws).toBeTrue();
      expect(component.loadDraws).toHaveBeenCalledWith('refresh', jasmine.any(Function), false);

      component.refreshNoDraws();
      expect(component.loadDraws).toHaveBeenCalledTimes(1);

      done?.();
      expect(component.refreshingDraws).toBeFalse();
    });
  });

  it('shows the daily nudges for 10 s, fading out at the end', () => {
    jasmine.clock().install();
    try {
      component.startDailyNudges();
      expect(component.showDailyNudges).toBeTrue();
      expect(component.dailyNudgesLeaving).toBeFalse();

      jasmine.clock().tick(9_600);
      expect(component.dailyNudgesLeaving).toBeTrue();
      expect(component.showDailyNudges).toBeTrue();

      jasmine.clock().tick(400);
      expect(component.showDailyNudges).toBeFalse();
    } finally {
      jasmine.clock().uninstall();
    }
  });
});
