import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/auth-guard.service';
// components
import { CreateCustomerComponent } from './customer-wizard/customer-wizard.component';

const routes: Routes = [
  {
    path: 'customer', component: CreateCustomerComponent,
    children: [{ path: 'create', component: CreateCustomerComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomerRoutingModule { }



