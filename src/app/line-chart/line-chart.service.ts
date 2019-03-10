import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LineChartService {

  constructor(private http: HttpClient) { }

  /**
   * Get graph data
   * @param url URL to get graph data
   * @returns {Observable} Observable with graph data
   */
  getGraphData(url: string): Observable<any> {
    return this.http.get(`../../assets/json/dashboard/main_graph/${url}_graph.json`);
  }

}
