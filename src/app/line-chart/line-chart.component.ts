import {Component, OnInit, NgZone, OnDestroy,
        AfterViewInit, Input, OnChanges, SimpleChanges}   from '@angular/core';
import * as am4core                                       from '@amcharts/amcharts4/core';
import * as am4charts                                     from '@amcharts/amcharts4/charts';
import am4themes_animated                                 from '@amcharts/amcharts4/themes/animated';
import { Subscription }                                   from 'rxjs/Subscription';

import { LineChartService }                               from './line-chart.service';
import { ChartInputData, ChartData }                      from './line-chart.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [LineChartService]
})
export class LineChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() inputData: ChartInputData;
  private chart: am4charts.XYChart;
  chartSubscription: Subscription;

  constructor(private zone: NgZone, private service: LineChartService) {}

  /**
   * Get chart data when initialize component
   * @returns {void}
   */
  ngOnInit(): void {
    this.getData(this.inputData.url);
  }

  /**
   * Request chart data on changes
   * @param changes Data of new input chart
   * @returns {void}
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputData.currentValue !== changes.inputData.previousValue) {
      this.getData(changes.inputData.currentValue.url);
    }
  }

  /**
   * Perform chart creation after component initialization
   * @returns {void}
   */
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  /**
   * Dispose chart and unsubscriptions on component destroy
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
    this.chartSubscription.unsubscribe();
  }

  /**
   * Create Line Chart
   * @returns {void}
   */
  createChart(): void {
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Set chart theme
    am4core.useTheme(am4themes_animated);

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';
    categoryAxis.renderer.labels.template.dx = - 50;
    categoryAxis.renderer.labels.template.rotation = 310;
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.grid.template.hide();

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.stroke = am4core.color('#5cc0c0');
    series.fillOpacity = 0.5;
    series.tensionX = 0.8;
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'date';
    series.tooltip.pointerOrientation = 'vertical';

    // Create Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = categoryAxis;

    this.chart = chart;
  }

  /**
   * Get chart data
   * @param url Url to get chart data
   * @returns {void}
   */
  getData(url: string): void {
    this.chartSubscription = this.service.getGraphData(url).subscribe(response => {
      this.setData(response);
    }, (error) => {
      throw {message: error};
    });
  }

  /**
   * Set Axis X and Y data to correspondent chart data
   * @param list List of ChartData
   * @returns {void}
   */
  setData(list: ChartData): void {
    const data = [];
    for (let i = 0; i < list.data.length; i++) {
      data.push({
        date: list.data[i].attributes.date,
        value: list.data[i].attributes.count
      });
    }

    this.chart.data = data;
  }
}
