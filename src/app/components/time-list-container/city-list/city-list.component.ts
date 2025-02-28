import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import notify from 'devextreme/ui/notify';
import { PizzaService } from '../../../shared/services/pizza.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-city-list',
  imports: [CommonModule, FormsModule, DxSelectBoxModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss', '../app.time_list.scss'],
})
export class CityListComponent implements OnInit {
  cities: string[];
  @Input() selectedCity: string = '';

  @Output() cityChange = new EventEmitter<string | null>();

  onCityChange({ value }: DxSelectBoxTypes.ValueChangedEvent) {
    this.cityChange.emit(value)
  }


  constructor(private pizzaService: PizzaService) {
    this.cities = ['MP', 'Piana', 'AMB', 'Pontida'];
    this.getCities();
  }
  ngOnInit(): void {

  }

  async getCities() {
    var result: any = await firstValueFrom(this.pizzaService.GetCities())
    this.cities = result.map((a: any) => a.city)
  }
}
