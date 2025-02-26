import { Gusto } from "./Gusto";

export class Pizza {
  lunghezza: number;
  gusto: Gusto[];
  constructor(length: number, gusti: Gusto[] = []) {
    if (length % 10 != 0 || length > 100 || length <= 0) {
      alert('Invalid Gusto Length');
      throw new Error('Invalid Gusto Length');
    }

    this.lunghezza = length;
    this.gusto = gusti;
  }
}
export interface GustoDetails {
  length: number;
  note: string;
  price: number;
}

export interface PizzaDetails {
  lunghezza: number;
  gusto: GustoDetails[];
}


