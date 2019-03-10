import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgCircleProgressModule }           from 'ng-circle-progress';

import { CrimeserverDetailsCardComponent }  from './crimeserver-details-card.component';
import { TextEllipsisPipe }                 from '../../shared/text-ellipsis.pipe';
import { DateFormatPipe }                   from '../../shared/date-format.pipe';

describe('CrimeserverDetailsCardComponent', () => {
  let component: CrimeserverDetailsCardComponent;
  let fixture: ComponentFixture<CrimeserverDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgCircleProgressModule.forRoot() ],
      declarations: [
        CrimeserverDetailsCardComponent,
        TextEllipsisPipe,
        DateFormatPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeserverDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
