import { Component, OnInit, OnDestroy }         from '@angular/core';
import { Subscription }                         from 'rxjs/Subscription';

import { CrimeserverService }                   from '../crimeserver.service';
import { CrimeserverData, CrimeserverMetadata } from '../crimeserver.model';

@Component({
  selector: 'app-crimeserver-list',
  templateUrl: './crimeserver-list.component.html',
  styleUrls: ['./crimeserver-list.component.scss'],
  providers: [CrimeserverService]
})
export class CrimeserverListComponent implements OnInit, OnDestroy {
  count: number;
  data: Array<CrimeserverData>;
  metadata: CrimeserverMetadata;
  listSubscription: Subscription;

  constructor(private service: CrimeserverService) { }

  /**
   * Initialize component
   * @returns {void}
   */
  ngOnInit(): void {
    this.getData();
  }

  /**
   * Destroy component and unsubscribe
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.listSubscription.unsubscribe();
  }

  /**
   * Get Crime server data
   * @returns {void}
   */
  getData(): void {
    this.listSubscription = this.service.getCrimeserverData().subscribe((response) => {
      this.setData(response.data);
      this.setMetadata(response.meta);
    }, (error) => {
      throw {message: error};
    });
  }

  /**
   * Set list of crimeserver data
   * @param data Crimeserver data list
   * @returns {void}
   */
  setData(data: Array<CrimeserverData>): void {
    this.data = data;
  }

  /**
   * Set metadata of a crime server list
   * @param meta Crime server list metadata
   * @returns {void}
   */
  setMetadata(meta: CrimeserverMetadata): void {
    this.metadata = meta;
    this.setCount(this.metadata.pagination.count);
  }

  /**
   * Set total itens of a crime server list
   * @param count Total number of itens
   * @returns {void}
   */
  setCount(count: number): void {
    this.count = count;
  }

}
