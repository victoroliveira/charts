import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient }                       from '@angular/common/http';

import { WidgetComponent }                  from './widget.component';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  const httpClientStub = {
    get: jasmine.createSpy('get')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponent ],
      providers: [
        {provide: HttpClient, useValue: httpClientStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
