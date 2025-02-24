import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from '../order-item/order-item.component';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, OrderItemComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  gusti: string[];

  constructor() {
    this.gusti = ['Margherita', 'Americana', 'Marinara', 'Napoli'];
  }
  ngOnInit(): void {}
}
