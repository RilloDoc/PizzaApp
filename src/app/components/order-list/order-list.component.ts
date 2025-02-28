import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from '../order-item/order-item.component';
import { Pizza } from '../../models/Pizza';
import { DxButtonModule, DxNumberBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, OrderItemComponent, DxNumberBoxModule, DxButtonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() pizze: Pizza[] = [];
  newPizzaLength = 0

  constructor() {
  }

  addPizzaHandler(length: number) {
    const newPizzaLength = length;

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

  onValueChanged(e: any) {
    if (e.value) {
      this.newPizzaLength = e.value;
    }
  }

  ngOnInit(): void { }
}


