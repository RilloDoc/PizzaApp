import { PizzaService } from '../../shared/services/pizza.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxAutocompleteModule, DxTextBoxModule } from 'devextreme-angular';
import { debounceTime, firstValueFrom, Subject } from 'rxjs';

@Component({
  selector: 'app-customer-name-address-phonenumber',
  standalone: true,
  imports: [FormsModule, CommonModule, DxAutocompleteModule, DxTextBoxModule],
  providers: [PizzaService],
  templateUrl: './customer-name-address-phonenumber.component.html',
  styleUrl: './customer-name-address-phonenumber.component.scss'
})
export class CustomerNameAddressPhonenumberComponent {

  autocompleteAddress: string[] = []
  autocompleteCustomerName: string[] = []
  private searchAddSubject = new Subject<string>();
  private searchCsNmSubject = new Subject<string>();
  private readonly debounceTimeMs = 100; // Set the debounce time (in milliseconds)



  @Input() CustomerName: string = '';
  @Input() CustomerAddress: string = '';
  @Input() CustomerPhoneNumber: string = '';
  @Input() CustomerCity: string = '';

  @Output() customerNameChange = new EventEmitter<string | null>();
  @Output() customerAddressChange = new EventEmitter<string | null>();
  @Output() customerPhoneNumberChange = new EventEmitter<string | null>();
  rules = { X: /[02-9]/ };
  onNameChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.customerNameChange.emit(inputElement.value);
    }
  }

  onAddressChange(event: Event): void {

    this.searchAddSubject.next(this.CustomerAddress);

    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      this.customerAddressChange.emit(inputElement.value);
    }
  }
  onCustomerNameChange(event: Event): void {

    this.searchCsNmSubject.next(this.CustomerName);

    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      this.customerNameChange.emit(inputElement.value);
    }
  }

  onPhoneNumberChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      //check if it a phone number

      this.customerPhoneNumberChange.emit(inputElement.value);
    }
  }



  updateAutocompleteAddress(newItems: string[]) {
    this.autocompleteAddress = [...newItems]; // Crea una nuova istanza dell'array
  }
  updateAutocompleteCustomerName(newItems: string[]) {
    this.autocompleteCustomerName = [...newItems]; // Crea una nuova istanza dell'array
    console.log(newItems)
  }

  ngOnInit() {
    this.searchAddSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.performAddSearch(searchValue);
    });
    this.searchCsNmSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.performCsNmSearch(searchValue);
    });
  }
  constructor(private pizzaService: PizzaService, private cdr: ChangeDetectorRef) { }

  ngOnDestroy() {
    this.searchAddSubject.complete();
  }

  async performAddSearch(searchValue: string) {
    const result: any = await firstValueFrom(this.pizzaService.SearchAddress(searchValue))
    this.updateAutocompleteAddress(result.map((address: any) => address.address));
    this.cdr.detectChanges();
  }
  async performCsNmSearch(searchValue: string) {
    const result: any = await firstValueFrom(this.pizzaService.SearchCustomerName(searchValue))
    this.updateAutocompleteCustomerName(result.map((customers: any) => customers.name));
    this.cdr.detectChanges();
  }
}
