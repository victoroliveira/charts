import { Component, OnInit, OnDestroy }  from '@angular/core';
import { forkJoin }           from 'rxjs/observable/forkJoin';

import { DashboardService }   from './dashboard.service';
import { Widget }             from '../interfaces/widget.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit, OnDestroy {
  widgetsOptions = ['bots', 'credentials', 'credit_cards', 'crime_servers', 'malware'];
  widgetsList: Array<Widget> = [];
  widgetSubscriptor: Subscription;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getWidgets();
    console.log(this.widgetsList);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.widgetSubscriptor.unsubscribe();
  }

  getWidgets() {
    const widgetObservables = this.createRequestsArray();

    this.widgetSubscriptor = forkJoin(widgetObservables).subscribe((data) => {
      for (const widget of data) {
        console.log(data);
        this.addWidget(widget);
      }
    });

  }

  createRequestsArray() {
    const requests = [];
    for (const option of this.widgetsOptions) {
      requests.push(this.service.getWidgetData(option).map((res => res)));
    }
    return requests;
  }


  addWidget(data: any) {
    this.widgetsList.push(data.data[0]);
  }
}
