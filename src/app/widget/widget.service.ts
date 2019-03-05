import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WidgetService {

  constructor(private http: HttpClient) { }

  /**
   * Get widget data
   * @param url URL to get widget data
   * @returns Observable with widget data
   */
  getWidgetData(url: string): Observable<any> {
    return this.http.get(`../../assets/json/dashboard/widgets/${url}_count.json`);
  }

}
