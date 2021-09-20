import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer.routing.module';
import { MaterialModule } from '../../layout/material-component.module';
// components
import { CustomerComponent } from './customer.component';
import { CustomerInfoComponent } from './create/customer-info/customer-info.component';
import { CreateCustomerComponent } from './create/create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// serives
import { CreateCustomerService } from './services/create-customer-api.service';
@NgModule({
  declarations: [
    CustomerComponent,
    CreateCustomerComponent,
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CreateCustomerService
  ],
  exports: [],
  entryComponents: [],
})
export class CustomerModule {}
