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
import { TableComponent } from './table/table.component';
import { DataImportComponent } from './data-import/data-import.component';
// custom modules
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

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
    TableComponent,
    DataImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [
    PubsubService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
