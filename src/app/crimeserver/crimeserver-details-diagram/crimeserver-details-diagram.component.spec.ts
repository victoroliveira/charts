import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeserverDetailsDiagramComponent } from './crimeserver-details-diagram.component';

describe('CrimeserverDetailsDiagramComponent', () => {
  let component: CrimeserverDetailsDiagramComponent;
  let fixture: ComponentFixture<CrimeserverDetailsDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeserverDetailsDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeserverDetailsDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
