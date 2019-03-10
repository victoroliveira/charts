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

  ngOnInit() {
    this.initValues(this.data);
  }

  ngOnChanges() {
    this.initValues(this.data);
  }

  initValues(values: CrimeserverData) {
    if (values) {
      this.url = values.attributes.crime_server_url;
      this.ip = '192.168.0.1';
      this.subtype = values.attributes.subtype_name;
      this.createDiagram();
    }
  }

  createDiagram() {
    const diagram = new go.Diagram('myDiagramDiv');
    diagram.nodeTemplate = this.initNodeStyle();
    diagram.model = this.initDiagramModel();
  }

  initNodeStyle(): any {
    const $ = go.GraphObject.make;
    const style = $(go.Node, 'Spot',
      $(go.Shape, 'Circle', new go.Binding('fill', 'color')),
      $(go.TextBlock, { margin: 3 }, new go.Binding('text', 'key'))
    );
    return style;
  }

  initDiagramModel(): any {
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
