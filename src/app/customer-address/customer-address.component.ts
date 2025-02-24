import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-address',
  imports: [CommonModule],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.scss',
})
export class CustomerAddressComponent implements OnInit {
  ngOnInit(): void {}
}
