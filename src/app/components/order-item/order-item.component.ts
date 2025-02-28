import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GustoSegmentComponent } from '../gusto-segment/gusto-segment.component';
import { Pizza } from '../../models/Pizza';
import { Gusto } from '../../models/Gusto';
import { DxAutocompleteModule, DxNumberBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ValueChangedEvent as TextValueChangedEvent } from 'devextreme/ui/text_box_types';
import { ValueChangedEvent as NumberValueChangedEvent } from 'devextreme/ui/number_box_types';

@Component({
  selector: 'app-order-item',
  imports: [CommonModule, GustoSegmentComponent, DxTextBoxModule, DxNumberBoxModule, DxAutocompleteModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent implements OnInit {
  _pizza: Pizza = new Pizza(100, [new Gusto('Margherita', 40)]);
  @Input() index: number = 9999;
  @Input() autoCompleteGusti: string[] = [];
  addtoggle: boolean = false;
  pizzaRimanente: number = 0;
  length_text_input: number = 0;
  gusto_text_input = "";
  note_text_input = "";

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

  ) {
    this.toggleAddMode();
    if (
      this.totalGustiLength(this._pizza, this.length_text_input) >
      this._pizza.lunghezza
    ) {
      alert('Lunghezza della _pizza superata');
      return;
    }
    this._pizza?.gusto.push(
      new Gusto(this.gusto_text_input, this.length_text_input, this.note_text_input)
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

  onChangeGustoValue(event: import("devextreme/ui/autocomplete").ValueChangedEvent) {
    const inputElement = event;
    if (inputElement) {
      this.gusto_text_input = (inputElement.value);
    }
  }
  onChangeNoteValue(event: TextValueChangedEvent) {
    const inputElement = event;
    if (inputElement) {
      this.note_text_input = (inputElement.value);
    }
  }
  onChangeLengthValue(event: NumberValueChangedEvent) {
    const inputElement = event;
    if (inputElement) {
      this.length_text_input = (inputElement.value);
    }
  }
  ngOnInit(): void { }
}
