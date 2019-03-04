import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  /**
   * Get widget data
   * @param widget Name of widget to get data
   * @returns Observable with widget data
   */
  getWidgetData(widget: string): Observable<any> {
    return this.http.get(`../../assets/json/dashboard/widgets/${widget}_count.json`);
  }
}
