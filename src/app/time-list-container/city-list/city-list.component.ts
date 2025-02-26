import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss', '../app.time_list.scss'],
})
export class CityListComponent implements OnInit {
  cities: string[];
  @Input() selectedCity: string = '';

  @Output() cityChange = new EventEmitter<string | null>();

  onCityChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement;
    if (inputElement) {
      this.cityChange.emit(inputElement.value);
    }
  }

  constructor() {
    this.cities = ['MP', 'Piana', 'AMB', 'Pontida'];
  }
  ngOnInit(): void { }
}
