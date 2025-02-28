import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNameAddressPhonenumberComponent } from './customer-name-address-phonenumber.component';

describe('CustomerNameAddressPhonenumberComponent', () => {
  let component: CustomerNameAddressPhonenumberComponent;
  let fixture: ComponentFixture<CustomerNameAddressPhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerNameAddressPhonenumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNameAddressPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
