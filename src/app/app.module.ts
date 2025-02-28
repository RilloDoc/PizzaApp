import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { OrderFormComponent } from './pages/order-form/order-form.component';


import { OrderListComponent, } from '../app/components/order-list/order-list.component';
import { CityListComponent } from '../app/components/time-list-container/city-list/city-list.component';
import { TimeListComponent } from '../app/components/time-list-container/time-list/time-list.component';
import { CustomerNameAddressPhonenumberComponent } from "../app/components/customer-name-address-phonenumber/customer-name-address-phonenumber.component";
import { PizzaService } from './shared/services/pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { DxAutocompleteModule, DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    OrderListComponent,
    CityListComponent,
    TimeListComponent,
    CustomerNameAddressPhonenumberComponent,
    HttpClientModule,
    DxAutocompleteModule,
    DxButtonModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
