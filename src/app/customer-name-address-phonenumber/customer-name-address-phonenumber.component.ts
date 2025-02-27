import { PizzaService } from './../services/pizza.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, firstValueFrom, Subject } from 'rxjs';

@Component({
  selector: 'app-customer-name-address-phonenumber',
  imports: [FormsModule, CommonModule],
  providers: [PizzaService],
  templateUrl: './customer-name-address-phonenumber.component.html',
  styleUrl: './customer-name-address-phonenumber.component.scss'
})
export class CustomerNameAddressPhonenumberComponent {

  isAddressFocused: boolean = false
  autocomplete: string[] = []
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 400; // Set the debounce time (in milliseconds)



  @Input() CustomerName: string = '';
  @Input() CustomerAddress: string = '';
  @Input() CustomerPhoneNumber: string = '';
  @Input() CustomerCity: string = '';

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
    this.isAddressFocused = true

    this.searchSubject.next(this.CustomerAddress);

    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      this.customerAddressChange.emit(inputElement.value);
    }
  }
  onAutoComplete(opt: string): void {
    this.searchSubject.next(this.CustomerAddress);
    if (opt) {
      this.customerAddressChange.emit(opt);
    }
    this.isAddressFocused = false
  }

  onPhoneNumberChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      //check if it a phone number

      this.customerPhoneNumberChange.emit(inputElement.value);
    }
  }

  onFocus(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
  }
  onBlur(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isAddressFocused = false;
  }
  updateAutocomplete(newItems: string[]) {
    this.autocomplete = [...newItems]; // Crea una nuova istanza dell'array
  }

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.performSearch(searchValue);
    });
  }
  constructor(private pizzaService: PizzaService, private cdr: ChangeDetectorRef) { }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

  async performSearch(searchValue: string) {
    const result: any = await firstValueFrom(this.pizzaService.SearchAddress(searchValue))
    this.updateAutocomplete(result.map((address: any) => address.address));
    this.cdr.detectChanges();
  }
}
