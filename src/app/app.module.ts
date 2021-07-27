import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// services
import { CommonService } from './services/common.service';
import { PubsubService } from './services/pub-sub.service';
import { CustomersComponent } from './customers/customers.component';
// pipes
import { FilterName } from '../app/pipes/namesearch.pipe';
import { OnlynumberDirective } from '../app/pipes/numberOnly.directive';
import { GeneralInvoiceComponent } from './general-invoice/general-invoice.component';
import { TableLikeSpreadsheetComponent } from './table-like-spreadsheet/table-like-spreadsheet.component';
// custom modules
import { HotTableModule } from '@handsontable/angular';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { GrapeCityComponent } from './grape-city/grape-city.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomersComponent,
    FilterName,
    OnlynumberDirective,
    GeneralInvoiceComponent,
    TableLikeSpreadsheetComponent,
    GrapeCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HotTableModule.forRoot(),
    SpreadSheetsModule
  ],
  providers: [
    PubsubService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
