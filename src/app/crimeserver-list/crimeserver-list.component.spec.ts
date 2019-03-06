import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeserverListComponent } from './crimeserver-list.component';

describe('CrimeserverListComponent', () => {
  let component: CrimeserverListComponent;
  let fixture: ComponentFixture<CrimeserverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeserverListComponent ]
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
