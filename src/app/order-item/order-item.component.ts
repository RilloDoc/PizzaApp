import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item',
  imports: [],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent implements OnInit {
  @Input() gusto: string | undefined;
  constructor() {}
  ngOnInit(): void {}
}
