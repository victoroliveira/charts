import { Component, OnInit }            from '@angular/core';

import { WidgetList, WidgetInputData }  from '../widget/widget.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widgets: WidgetList = { list: [] };
  selectedWidget: WidgetInputData;

  constructor() { }

  /**
   * Initialize dashboard page
   * @returns {void}
   */
  ngOnInit(): void {
    this.initWidgets();
    this.setSelectedWidget(this.widgets.list[0]);
  }

  /**
   * Initialize Widgets data
   * @returns {void}
   */
  initWidgets(): void {
    this.widgets.list = [
      {title: 'BOTS', url: 'bots'},
      {title: 'CREDENTIALS', url: 'credentials'},
      {title: 'CREDIT CARDS', url: 'credit_cards'},
      {title: 'CRIMESERVERS', url: 'crime_servers'},
      {title: 'MALWARE', url: 'malware'}
    ];
  }

  /**
   * Set current widget selected
   * @param item Name and title of selected widget
   * @returns {void}
   */
  setSelectedWidget(item: WidgetInputData): void {
    this.selectedWidget = item;
  }

  /**
   * Get current widget selected
   * @returns {WidgetInputData} Name and title of selected widget
   */
  getSelectedWidget(): WidgetInputData {
    return this.selectedWidget;
  }
}
