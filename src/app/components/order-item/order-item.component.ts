import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GustoSegmentComponent } from '../gusto-segment/gusto-segment.component';
import { Pizza } from '../../models/Pizza';
import { Gusto } from '../../models/Gusto';

@Component({
  selector: 'app-order-item',
  imports: [CommonModule, GustoSegmentComponent],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent implements OnInit {
  _pizza: Pizza = new Pizza(100, [new Gusto('Margherita', 40)]);
  @Input() index: number = 9999;
  addtoggle: boolean = false;
  pizzaRimanente: number = 0;

  @Input()
  set inputPizza(value: Pizza) {
    this._pizza = value;
    this.calculatePizzaRimanente(); // Calcola il valore non appena l'input cambia
  }

  constructor() { }

  toggleAddMode(i: boolean = false) {
    this.addtoggle = this.addtoggle ? false : true;
    this.pizzaRimanente =
      this._pizza.lunghezza - this.totalGustiLength(this._pizza);
  }

  addGusto(
    name: HTMLInputElement,
    length: HTMLInputElement,
    note: HTMLInputElement | null = null
  ) {
    this.toggleAddMode();
    if (
      this.totalGustiLength(this._pizza, length.valueAsNumber) >
      this._pizza.lunghezza
    ) {
      alert('Lunghezza della _pizza superata');
      return;
    }
    this._pizza?.gusto.push(
      new Gusto(name.value, length.valueAsNumber, note?.value)
    );
    this.calculatePizzaRimanente();
  }
  removeGusto(index: number) {
    this._pizza.gusto.splice(index, 1);
    this.calculatePizzaRimanente();

  }

  totalGustiLength(_pizza: Pizza, newGusto = 0): number {
    const totalGustiLength =
      _pizza.gusto.reduce((sum, gusto) => sum + gusto.length, 0) + newGusto;
    return totalGustiLength;
  }

  calculatePizzaRimanente() {
    this.pizzaRimanente =
      this._pizza.lunghezza - this.totalGustiLength(this._pizza);
  }
  ngOnInit(): void { }
}
