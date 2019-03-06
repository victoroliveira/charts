import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrimeserverService {

  constructor(private http: HttpClient) { }

  /**
   * Get Crimeserver data
   * @returns Observable with crimeserver data
   */
  getCrimeserverData(): Observable<any> {
    return this.http.get('../../assets/json/crimeserver_list/crime_servers_list.json');
  }

}
