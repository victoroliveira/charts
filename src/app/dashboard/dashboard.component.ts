import { Component, OnInit }  from '@angular/core';

import { WidgetList }         from '../widget/widget.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widgets: WidgetList = { list: [] };

  constructor() { }

  ngOnInit(): void {
    this.initWidgets();
  }

  /**
   * Initialize Widgets data
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
}
