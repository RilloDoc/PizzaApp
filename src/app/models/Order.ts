import { Customer } from './Customers';
import { Pizza } from "./Pizza";

export class Order {
  id: number = -1;
  time: string;
  customerId: number;

  constructor(time: string, customerId: number) {
    this.time = time;
    this.customerId = customerId;
  }
}
