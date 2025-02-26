export class Customer {
  id: number;
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: String;

  constructor(Name: string, PhoneNumber: string, Address: string, City: string) {

    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
    this.Address = Address;
    this.City = City;
    this.id = -1;
  }
}
