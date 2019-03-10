import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrimeserverService } from '../crimeserver.service';
import { Subscription } from 'rxjs/Subscription';
import { CrimeserverData } from '../crimeserver.model';

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

  ngOnInit() {
    this.getDetails();
  }

  ngOnDestroy() {
    this.detailsSubscription.unsubscribe();
  }

  getDetails() {
    this.detailsSubscription = this.service.getCrimeserverData().subscribe((response) => {
      this.setCurrentDetails(response.data[0]);
    }, (error) => {
      throw {message: error};
    });
  }

  setCurrentDetails(data: any) {
    this.detailsData = data;
  }
}
