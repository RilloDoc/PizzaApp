import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-name-address-phonenumber',
  imports: [FormsModule],
  templateUrl: './customer-name-address-phonenumber.component.html',
  styleUrl: './customer-name-address-phonenumber.component.scss'
})
export class CustomerNameAddressPhonenumberComponent {
  @Input() CustomerName: string = '';
  @Input() CustomerAddress: string = '';
  @Input() CustomerPhoneNumber: string = '';

  @Output() customerNameChange = new EventEmitter<string | null>();
  @Output() customerAddressChange = new EventEmitter<string | null>();
  @Output() customerPhoneNumberChange = new EventEmitter<string | null>();

  onNameChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.customerNameChange.emit(inputElement.value);
    }
  }

  onAddressChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.customerAddressChange.emit(inputElement.value);
    }
  }

  onPhoneNumberChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      //check if it a phone number

      this.customerPhoneNumberChange.emit(inputElement.value);
    }
  }

  constructor() { }
  ngOnInit(): void { }
}
