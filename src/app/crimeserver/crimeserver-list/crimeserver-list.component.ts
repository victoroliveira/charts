import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crimeserver-list',
  templateUrl: './crimeserver-list.component.html',
  styleUrls: ['./crimeserver-list.component.scss']
})
export class CrimeserverListComponent implements OnInit {
  count: number;
  constructor() { }

  ngOnInit() {
    this.count = 3;
  }

}
