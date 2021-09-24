import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer.routing.module';
import { MaterialModule } from '../../layout/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { CustomerInfoComponent } from './customer-wizard/customer-info/customer-info.component';
import { OracleSetupComponent } from './customer-wizard/oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from './customer-wizard/contract-info/contract-info.component';
import { CustomerFinishComponent } from './customer-wizard/customer-finish/customer-finish.component';
import { CreateCustomerComponent } from './customer-wizard/customer-wizard.component';
// serives
import { CustomerService } from './customer.service';
import { CustomerPubsubService } from './customer.pubsub.service';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomerInfoComponent,
    OracleSetupComponent,
    ContractInfoComponent,
    CustomerFinishComponent
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
    CustomerService,
    CustomerPubsubService
  ],
  exports: [],
  entryComponents: [],
})
export class CustomerModule {}
