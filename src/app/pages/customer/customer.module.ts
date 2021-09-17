import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer.routing.module';
import { MaterialModule } from '../../layout/material-component.module';
// components
import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create/create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  entryComponents: [],
})
export class CustomerModule {}
