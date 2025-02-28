export class Address {
  Address: string;
  City: string;
  OrderId: number;

  constructor(address: string, city: string, orderId: number) {
    this.Address = address;
    this.City = city;
    this.OrderId = orderId;
  }

}
