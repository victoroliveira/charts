import { Component, OnInit, Input } from '@angular/core';
import { CrimeserverData } from '../crimeserver.model';

@Component({
  selector: 'app-crimeserver-details-card',
  templateUrl: './crimeserver-details-card.component.html',
  styleUrls: ['./crimeserver-details-card.component.scss']
})
export class CrimeserverDetailsCardComponent implements OnInit {
  @Input() data: CrimeserverData;

  constructor() { }

  ngOnInit() {
  }

}
