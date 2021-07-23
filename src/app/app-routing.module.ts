import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { GeneralInvoiceComponent } from './general-invoice/general-invoice.component';
import { CustomerBatchComponent } from './customer-batch/customer-batch.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'invoice', component: GeneralInvoiceComponent },
  { path: 'customerbatch', component: CustomerBatchComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
