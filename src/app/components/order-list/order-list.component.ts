import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from '../order-item/order-item.component';
import { Pizza } from '../../models/Pizza';
import { DxButtonModule, DxNumberBoxModule } from 'devextreme-angular';
import { firstValueFrom } from 'rxjs';
import { PizzaService } from '../../shared/services/pizza.service';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, OrderItemComponent, DxNumberBoxModule, DxButtonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() pizze: Pizza[] = [];
  newPizzaLength = 0
  autocompleteGusti: string[] = []


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

  updateautocompleteGusti(newItems: string[]) {
    this.autocompleteGusti = [...newItems]; // Crea una nuova istanza dell'array
  }



  constructor(private pizzaService: PizzaService) { this.performAddSearch() }
  ngOnInit(): void { }

  async performAddSearch() {
    const result: any = await firstValueFrom(this.pizzaService.GetGusti())
    this.updateautocompleteGusti(result.map((gusti: any) => gusti));
  }
}


