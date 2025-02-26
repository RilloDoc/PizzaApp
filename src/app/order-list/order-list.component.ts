import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from '../order-item/order-item.component';
import { Pizza } from '../models/Pizza';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, OrderItemComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() pizze: Pizza[] = [];

  constructor() {
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
    return;
  }
  removePizzaHandler(index: number) {
    this.pizze.splice(index, 1);
  }

  ngOnInit(): void { }
}


