import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed }                                        from '@angular/core/testing';

import { WidgetService }                                  from './widget.service';

describe('WidgetService', () => {
  let httpTestingController: HttpTestingController;
  let service: WidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WidgetService]
    });

    service = TestBed.get(WidgetService);
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
    const widget = 'bots';
    service.getWidgetData(widget).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });
    const URL = `../../assets/json/dashboard/widgets/${widget}_count.json`;
    const req = httpTestingController.expectOne(URL);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyResponse);
  });
});
