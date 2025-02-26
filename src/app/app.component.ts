import { Customer } from './models/Customers';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderListComponent, } from './order-list/order-list.component';
import { CityListComponent } from './time-list-container/city-list/city-list.component';
import { TimeListComponent } from './time-list-container/time-list/time-list.component';

import { PizzaService } from './services/pizza.service';
import { FormsModule } from '@angular/forms';
import { Pizza } from './models/Pizza';
import { Order } from './models/Order';
import { CustomerNameAddressPhonenumberComponent } from "./customer-name-address-phonenumber/customer-name-address-phonenumber.component";
import { firstValueFrom, Observable } from 'rxjs';
import { Address } from './models/Address';
@Component({
  selector: 'app-root',
  imports: [
    OrderListComponent,
    CityListComponent,
    TimeListComponent,
    HttpClientModule,
    FormsModule,
    CustomerNameAddressPhonenumberComponent
  ],
  providers: [PizzaService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'PizzaApp';
  Pizze: Pizza[] = [];
  CustomerName: string = '';
  CustomerAddress: string = '';
  CustomerCity: string = '';
  CustomerTime: string = '';
  CustomerPhoneNumber: string = '';

  onCustomerNameChange(updatedName: string | null): void {
    this.CustomerName = !!updatedName ? updatedName : '';
  }

  onCustomerAddressChange(updatedAddress: string | null): void {
    this.CustomerAddress = !!updatedAddress ? updatedAddress : '';
  }

  onCustomerCityChange(updatedCity: string | null): void {
    this.CustomerCity = !!updatedCity ? updatedCity : '';
  }

  onCustomerTimeChange(updatedTime: string | null): void {
    this.CustomerTime = !!updatedTime ? updatedTime : '';
  }

  onCustomerPhoneNumberChange(updatedPhoneNumber: string | null): void {

    const phoneNumberRegex = /^[0-9]{10}$/;

    if (!updatedPhoneNumber || !phoneNumberRegex.test(updatedPhoneNumber)) this.CustomerPhoneNumber = updatedPhoneNumber?.replace(/[^0-9]/g, '') ?? '';
    else
      this.CustomerPhoneNumber = !!updatedPhoneNumber ? updatedPhoneNumber : '';
  }

  checkForm() {
    // Verify strings are not empty
    if (!this.CustomerName || !this.CustomerAddress || !this.CustomerCity || !this.CustomerTime || !this.CustomerPhoneNumber) {
      return false;
    }
    if (this.CustomerPhoneNumber.length !== 10 && !/^\d{10}$/.test(this.CustomerPhoneNumber)) {
      return false;
    }
    this.CustomerName = this.CustomerName.toLowerCase();
    this.CustomerAddress = this.CustomerAddress.toLowerCase();
    this.CustomerCity = this.CustomerCity.toLowerCase();
    this.CustomerTime = this.CustomerTime.toLowerCase();
    this.CustomerPhoneNumber = this.CustomerPhoneNumber.toLowerCase();

    return true
  }

  constructor(private pizzaService: PizzaService) { }
  async orderPizza(): Promise<void> {

    if (!this.checkForm()) {
      alert('Please fill in all the fields correctly');
      return;

    }
    console.log('Ordering pizza...');
    console.log(this.CustomerPhoneNumber);

    const customer = new Customer(this.CustomerName, this.CustomerPhoneNumber, this.CustomerAddress, this.CustomerCity,);
    // this.pizzaService.addCustomer(customer).subscribe((data: Partial<Customer>) => {
    //   if (data.id !== undefined) {
    //     customer.id = data.id;  // Aggiorna l'ID del cliente

    //   }
    //   console.log("Updated Customer: ", customer);
    // });
    // Make the code more readable
    const customerResponse = await firstValueFrom(this.pizzaService.addCustomer(customer) as Observable<Customer>);
    if (!customerResponse) {
      throw new Error('Customer not created');
    }
    customer.id = customerResponse.id;

    const order = new Order(this.CustomerTime, customer.id);
    const orderResponse = await firstValueFrom(this.pizzaService.addOrder(order) as Observable<Order>);
    if (!orderResponse) {
      throw new Error('Order not created');
    }
    order.id = orderResponse.id;
    const address = new Address(this.CustomerAddress, this.CustomerCity, order.id);
    const addressResponse = await firstValueFrom(this.pizzaService.addAddress(address) as Observable<Address>);

    if (!addressResponse) {
      throw new Error('Address not created');
    }

    const pizzaResponse = await firstValueFrom(this.pizzaService.addPizzas({ OrderId: order.id, PizzaList: this.Pizze }) as Observable<Pizza[]>);

    if (!pizzaResponse) {
      throw new Error('Pizzas not created');
    }

    console.log('Order placed successfully');
    console.log(customer, order, pizzaResponse);

    //refresh page
    window.location.reload();

  }

  ngOnInit(): void {
    this.pizzaService.getAllOrders().subscribe((data) => { });
  }

}
