import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Customer } from '../models/Customers';
import { Pizza } from '../models/Pizza';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) {

  }

  getAllOrders(id: string = "1") {
    return this.http.get(`https://localhost:7221/api/Ordini/GetAllOrders/`)
  }
  addOrder(order: Order) {
    return this.http.post(`https://localhost:7221/api/Ordini/AddOrder/`, order)
  }
  addCustomer(customer: Customer) {
    return this.http.post(`https://localhost:7221/api/Ordini/AddCustomer/`, customer)
  }
  addPizzas(pizze: { OrderId: number, PizzaList: Pizza[] }) {
    return this.http.post(`https://localhost:7221/api/Ordini/AddPizzas/`, pizze)
  }
  addAddress(address: Address) {
    return this.http.post(`https://localhost:7221/api/Ordini/AddAddress/`, address)
  }

}
