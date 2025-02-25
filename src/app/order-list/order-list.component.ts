import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from '../order-item/order-item.component';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, OrderItemComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  pizze: Pizza[] = [];

  constructor() {
    this.pizze = [
      new Pizza(100, [new Gusto('Margherita', 40), new Gusto('Wurstel', 60)]),
    ];
  }

  addPizzaHandler(length: HTMLInputElement) {
    const newPizzaLength = length.valueAsNumber;

    if (
      newPizzaLength % 10 != 0 ||
      newPizzaLength > 100 ||
      newPizzaLength < 0
    ) {
      alert('Invalid Input');
      return;
    }

    let pizza = new Pizza(newPizzaLength);
    this.pizze.push(pizza);
    console.log(this.pizze);
    return;
  }
  removePizzaHandler(index: number) {
    console.log('Removing pizza...');
    this.pizze.splice(index, 1);
  }

  ngOnInit(): void {}
}

export class Pizza {
  length: number;
  gusti: Gusto[];
  constructor(length:number, gusti: Gusto[] = []) {
    if (length % 10 != 0 || length > 100 || length <= 0)
      {
        alert('Invalid Gusto Length');
       throw new Error('Invalid Gusto Length');
      }

    this.length = length;
    this.gusti = gusti;
  }
}
export class Gusto {
  name: string;
  length: number;
  note: string = '';
  constructor(name: string, length: number, note: string = '') {

    if (length % 10 != 0 || length > 100 || length < 0)
      {
        alert('Invalid Gusto Length');
       throw new Error('Invalid Gusto Length');
      }

    this.name = name;
    this.length = length;
    this.note = note;
  }
}
