import { TestBed, inject } from '@angular/core/testing';

import { CrimeserverService } from './crimeserver.service';

describe('CrimeserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrimeserverService]
    });
  });

  it('should be created', inject([CrimeserverService], (service: CrimeserverService) => {
    expect(service).toBeTruthy();
  }));
});
