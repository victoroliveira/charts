import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, inject }                                from '@angular/core/testing';

import { CrimeserverService }                             from './crimeserver.service';

describe('CrimeserverService', () => {
  let httpTestingController: HttpTestingController;
  let service: CrimeserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrimeserverService]
    });

    service = TestBed.get(CrimeserverService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get', () => {
    const dummyResponse = {};

    service.getCrimeserverData().subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });
    const URL = `../../assets/json/crimeserver_list/crime_servers_list.json`;
    const req = httpTestingController.expectOne(URL);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyResponse);
  });
});
