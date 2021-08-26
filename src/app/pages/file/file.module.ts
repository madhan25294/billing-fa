import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// routing module
import { FileRoutingModule } from './file.routing.module';
// components
import { NewCustomerComponent } from './new-customer/new-customer';

// material modules
import { MaterialModule } from '../../layout/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [NewCustomerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FileRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  entryComponents: [NewCustomerComponent],
})
export class FileModule {}
