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

  /**
   * Get data on init component
   */
  ngOnInit(): void {
    this.getData();
  }

  /**
   * Unsubscribe widget data on destroy
   */
  ngOnDestroy(): void {
    this.widgetSubscription.unsubscribe();
  }

  /**
   * Request Widget data from URL
   */
  getData(): void {
    this.widgetSubscription = this.service.getWidgetData(this.inputData.url).subscribe((response) => {
      this.responseData = response.data[0];
    }, (error) => {
      throw {message: error};
    });
  }

}
