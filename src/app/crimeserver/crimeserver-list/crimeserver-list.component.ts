import { Component, OnInit, OnDestroy }    from '@angular/core';
import { CrimeserverService }   from '../crimeserver.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-crimeserver-list',
  templateUrl: './crimeserver-list.component.html',
  styleUrls: ['./crimeserver-list.component.scss'],
  providers: [CrimeserverService]
})
export class CrimeserverListComponent implements OnInit, OnDestroy {
  count: number;
  data: any;
  metadata: any;
  listSubscription: Subscription;

  constructor(private service: CrimeserverService) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

  getData() {
    this.listSubscription = this.service.getCrimeserverData().subscribe((response) => {
      this.setData(response.data);
      this.setMetadata(response.meta);
    }, (error) => {
      throw {message: error};
    });
  }

  setData(data: any) {
    this.data = data;
  }

  setMetadata(meta: any) {
    this.metadata = meta;
    this.updateCount(this.metadata.pagination.count);
  }

  updateCount(count: number) {
    this.count = count;
  }

}
