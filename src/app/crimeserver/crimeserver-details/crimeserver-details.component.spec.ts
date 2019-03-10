import { async, ComponentFixture, TestBed }   from '@angular/core/testing';
import { TranslateModule }                    from '@ngx-translate/core';
import { NgCircleProgressModule }             from 'ng-circle-progress';
import { HttpClient }                         from '@angular/common/http';

import { CrimeserverDetailsComponent }        from './crimeserver-details.component';
import { CrimeserverDetailsCardComponent }    from '../crimeserver-details-card/crimeserver-details-card.component';
import { CrimeserverDetailsDiagramComponent } from '../crimeserver-details-diagram/crimeserver-details-diagram.component';
import { TextEllipsisPipe }                   from '../../shared/text-ellipsis.pipe';
import { DateFormatPipe }                     from '../../shared/date-format.pipe';

describe('CrimeserverDetailsComponent', () => {
  let component: CrimeserverDetailsComponent;
  let fixture: ComponentFixture<CrimeserverDetailsComponent>;

  const httpClientStub = {
    get: jasmine.createSpy('get')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NgCircleProgressModule.forRoot()
      ],
      declarations: [
        CrimeserverDetailsComponent,
        CrimeserverDetailsCardComponent,
        CrimeserverDetailsDiagramComponent,
        DateFormatPipe,
        TextEllipsisPipe
      ],
      providers: [
        {provide: HttpClient, useValue: httpClientStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeserverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
