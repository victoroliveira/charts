import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeserverDetailsCardComponent } from './crimeserver-details-card.component';

describe('CrimeserverDetailsCardComponent', () => {
  let component: CrimeserverDetailsCardComponent;
  let fixture: ComponentFixture<CrimeserverDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeserverDetailsCardComponent ]
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
