import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { NewCustomerComponent } from './new-customer/new-customer'

const routes: Routes = [
  {
    path: 'file', component: NewCustomerComponent,
    children: [{ path: 'newcustomer', component: NewCustomerComponent, canActivate: [AuthGuard] }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FileRoutingModule { }



