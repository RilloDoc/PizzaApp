import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { Customer } from '../../models/Customers';
import { Pizza } from '../../models/Pizza';
import { Address } from '../../models/Address';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private serverIp = "192.168.203.182";
  private serverPort = "7221";

  private api = `https://${this.serverIp}:${this.serverPort}/api/Ordini/`
  constructor(private http: HttpClient) {

  }

  getAllOrders(id: string = "1") {
    return this.http.get(this.api + `GetAllOrders/`);
  }
  addOrder(order: Order) {
    return this.http.post(this.api + `AddOrder/`, order);
  }
  addCustomer(customer: Customer) {
    return this.http.post(this.api + `AddCustomer/`, customer);
  }
  addPizzas(pizze: { OrderId: number, PizzaList: Pizza[] }) {
    return this.http.post(this.api + `AddPizzas/`, pizze);
  }
  addAddress(address: Address) {
    return this.http.post(this.api + `AddAddress/`, address);
  }
  SearchAddress(address: string) {
    return this.http.get(this.api + `SearchAddresses/${address}`);
  }
  SearchCustomerName(name: string) {
    return this.http.get(this.api + `SearchCustomerName/${name}`);
  }
  GetCities() {
    return this.http.get(this.api + `GetCities`);
  }
  GetGusti() {
    return this.http.get(this.api + `GetGusti`);
  }
}
