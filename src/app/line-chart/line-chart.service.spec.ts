import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed }                                        from '@angular/core/testing';

import { LineChartService }                               from './line-chart.service';

describe('LineChartService', () => {
  let httpTestingController: HttpTestingController;
  let service: LineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LineChartService]
    });

    service = TestBed.get(LineChartService);
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
    service.getGraphData(widget).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });
    const URL = `../../assets/json/dashboard/main_graph/${widget}_graph.json`;
    const req = httpTestingController.expectOne(URL);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyResponse);
  });
});
