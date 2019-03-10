import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeserverDetailsComponent } from './crimeserver-details.component';

describe('CrimeserverDetailsComponent', () => {
  let component: CrimeserverDetailsComponent;
  let fixture: ComponentFixture<CrimeserverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeserverDetailsComponent ]
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
