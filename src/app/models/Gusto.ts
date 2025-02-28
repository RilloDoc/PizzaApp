export class Gusto {
  name: string;
  length: number;
  note: string = '';
  constructor(name: string, length: number, note: string = '') {

    if ((length % 5 != 0 && length % 10 != 0) || length > 100 || length < 0) {
      alert('Invalid Gusto Length');
      throw new Error('Invalid Gusto Length');
    }

    this.name = name;
    this.length = length;
    this.note = note;
  }
}
