import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { TicketDetailsPage } from './ticket-details.page';

describe('TicketDetailsPage', () => {
  let component: TicketDetailsPage;
  let fixture: ComponentFixture<TicketDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketDetailsPage],
      imports: [
        IonicModule.forRoot(),
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

    fixture = TestBed.createComponent(TicketDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});