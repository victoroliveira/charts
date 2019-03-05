import { Component, OnInit, Input, OnDestroy }  from '@angular/core';
import { Subscription }                         from 'rxjs/Subscription';

import { WidgetInputData, WidgetData }          from './widget.model';
import { WidgetService }                        from './widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [WidgetService]
})
export class WidgetComponent implements OnInit, OnDestroy {
  @Input() inputData: WidgetInputData;
  responseData: WidgetData;
  widgetSubscription: Subscription;

  constructor(private service: WidgetService) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.widgetSubscription.unsubscribe();
  }

  getData() {
    this.widgetSubscription = this.service.getWidgetData(this.inputData.url).subscribe((response) => {
      console.log(response);
      this.responseData = response.data[0];
    }, (error) => {
      throw {message: error};
    });
  }

}
