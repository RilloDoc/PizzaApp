import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gusto } from '../models/Gusto';

@Component({
  selector: 'app-gusto-segment',
  imports: [CommonModule],
  templateUrl: './gusto-segment.component.html',
  styleUrl: './gusto-segment.component.scss',
})
export class GustoSegmentComponent implements OnInit {
  pizzaLength: number = 100;
  _gusto: Gusto = new Gusto('', 0);
  width: number = 50;
  backgroundColor: string;

  @Input()
  set inputGusto(value: Gusto) {
    this._gusto = value;
    if (this.pizzaLength == 0) return;
    this.width = this.calculateWidth();
  }
  @Input()
  set inputPizzaLength(value: number) {
    this.pizzaLength = value;
    if (this.pizzaLength == 0) return;
    this.width = this.calculateWidth();
  }

  constructor() {
    this.backgroundColor = this.getRandomColor();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 1000 % 16)];
    }
    return color + "77";
  }
  calculateWidth() {
    return (this._gusto.length / this.pizzaLength) * this.pizzaLength * 5;
  }
  ngOnInit(): void { }
}
