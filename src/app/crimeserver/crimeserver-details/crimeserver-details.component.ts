import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrimeserverService }           from '../crimeserver.service';
import { Subscription }                 from 'rxjs/Subscription';
import { CrimeserverData }              from '../crimeserver.model';

@Component({
  selector: 'app-crimeserver-details',
  templateUrl: './crimeserver-details.component.html',
  styleUrls: ['./crimeserver-details.component.scss'],
  providers: [CrimeserverService]
})
export class CrimeserverDetailsComponent implements OnInit, OnDestroy {
  detailsSubscription: Subscription;
  detailsData: CrimeserverData;

  constructor(private service: CrimeserverService) { }

  /**
   * Get Crime server details on init
   * @returns {void}
  */
  ngOnInit(): void {
    this.getDetails();
  }

  /**
   * Destroy component
   * Unsubscribe details
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.detailsSubscription.unsubscribe();
  }

  /**
   * Get crime server data list
   * @returns {void}
   */
  getDetails(): void {
    this.detailsSubscription = this.service.getCrimeserverData().subscribe((response) => {
      // Set always first entry as current to mock data
      this.setCurrentDetails(response.data[0]);
    }, (error) => {
      throw {message: error};
    });
  }

  /**
   * Set current crime server data
   * @param data Crimeserver data
   * @returns {void}
   */
  setCurrentDetails(data: CrimeserverData): void {
    this.detailsData = data;
  }
}
