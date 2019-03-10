import { Component, OnInit, Input, OnChanges }  from '@angular/core';
import * as go                                  from 'gojs';

import { CrimeserverData }                      from '../crimeserver.model';

@Component({
  selector: 'app-crimeserver-details-diagram',
  templateUrl: './crimeserver-details-diagram.component.html',
  styleUrls: ['./crimeserver-details-diagram.component.scss']
})
export class CrimeserverDetailsDiagramComponent implements OnInit, OnChanges {
  @Input() data: CrimeserverData;
  private url: string;
  private ip: string;
  private subtype: string;

  constructor() { }

  /**
   * Initialize component
   * @returns {void}
   */
  ngOnInit(): void {
    this.initValues(this.data);
  }

  /**
   * Capture component on changes event
   * @returns {void}
   */
  ngOnChanges(): void {
    this.initValues(this.data);
  }

  /**
   * Initialize diagram nodes value
   * @param values Values of current crimeserver data
   * @returns {void}
   */
  initValues(values: CrimeserverData): void {
    if (values) {
      this.url = values.attributes.crime_server_url;
      this.ip = '192.168.0.1';
      this.subtype = values.attributes.subtype_name;
      this.createDiagram();
    }
  }

  /**
   * Create Diagram instance
   * @returns {void}
   */
  createDiagram(): void {
    const diagram = new go.Diagram('myDiagramDiv');
    diagram.nodeTemplate = this.initNodeStyle();
    diagram.model = this.initDiagramModel();
  }

  /**
   * Initialize nodes style
   * @returns {go.Part} Instance of node style object
   */
  initNodeStyle(): go.Part {
    const $ = go.GraphObject.make;
    const style = $(go.Node, 'Spot',
      $(go.Shape, 'Circle', new go.Binding('fill', 'color')),
      $(go.TextBlock, { margin: 3 }, new go.Binding('text', 'key'))
    );
    return style;
  }

  /**
   * Initialize data and relationship to show on diagram
   * @returns {go.GraphLinksModel} Nodes and relationships
   */
  initDiagramModel(): go.GraphLinksModel {
    return new go.GraphLinksModel(
      [
        { key: this.url, color: 'lightblue' },
        { key: this.ip, color: 'orange' },
        { key: this.subtype, color: 'lightgreen' },
      ],
      [
        { from: this.url, to: this.ip },
        { from: this.ip, to: this.url },
        { from: this.url, to: this.subtype },
      ]
    );
  }
}
