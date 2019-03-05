import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import * as am4core                           from '@amcharts/amcharts4/core';
import * as am4charts                         from '@amcharts/amcharts4/charts';
import am4themes_animated                     from '@amcharts/amcharts4/themes/animated';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnDestroy {
  private chart: am4charts.XYChart;
  response: any;

  constructor(private zone: NgZone, private http: HttpClient) {}

  ngOnInit() {
    this.initTheme();
    this.getData();
  }

  initTheme() {
    am4core.useTheme(am4themes_animated);
  }

  getData() {
    this.http.get(`../../assets/json/dashboard/main_graph/malware_graph.json`).subscribe(response => {
      this.response = response;
      console.log(this.response);
      const dt = [];
      for (let i = 0; i < this.response.data.length; i++) {
        console.log(this.response.data[i]);
        dt.push({
          date: this.response.data[i].attributes.date,
          value: this.response.data[i].attributes.count
        });
      }

      this.chart.data = dt;
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      console.log('CREATE CHART');
      const chart = am4core.create('chartdiv', am4charts.XYChart);

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      dateAxis.dataFields.category = 'date';
      dateAxis.renderer.minGridDistance = 50;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.stroke = am4core.color('#5cc0c0');
      series.dataFields.valueY = 'value';
      series.dataFields.categoryX = 'date';

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
