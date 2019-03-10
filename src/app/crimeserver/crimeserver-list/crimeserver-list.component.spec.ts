import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule }                  from '@ngx-translate/core';
import { RouterTestingModule }              from '@angular/router/testing';
import { PaginationModule }                 from 'ngx-bootstrap/pagination';
import { HttpClient }                       from '@angular/common/http';

import { CrimeserverListComponent }         from './crimeserver-list.component';
import { DateFormatPipe }                   from '../../shared/date-format.pipe';
import { TextEllipsisPipe }                 from '../../shared/text-ellipsis.pipe';

describe('CrimeserverListComponent', () => {
  let component: CrimeserverListComponent;
  let fixture: ComponentFixture<CrimeserverListComponent>;

  const httpClientStub = {
    get: jasmine.createSpy('get')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        PaginationModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        CrimeserverListComponent,
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
    fixture = TestBed.createComponent(CrimeserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
