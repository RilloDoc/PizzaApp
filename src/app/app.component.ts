import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { CityListComponent } from './time-list-container/city-list/city-list.component';
import { TimeListComponent } from './time-list-container/time-list/time-list.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';

@Component({
  selector: 'app-root',
  imports: [
    OrderListComponent,
    CityListComponent,
    TimeListComponent,
    CustomerAddressComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PizzaApp';

  addPizzaHandler(){
    console.log('Adding pizza...');
  }

}
