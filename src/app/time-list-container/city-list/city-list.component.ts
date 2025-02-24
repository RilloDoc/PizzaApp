import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  imports: [CommonModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss', '../app.time_list.scss'],
})
export class CityListComponent implements OnInit {
  cities: string[];

  constructor() {
    this.cities = ['MP', 'Piana', 'AMB', 'Pontida'];
  }
  ngOnInit(): void {}
}
