import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// service
import { SnackBarService } from '../../../shared/snack-bar.service';
import { CustomerService } from '../customer.service';
// models

// components
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OracleSetupComponent } from './oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { CustomerFinishComponent } from './customer-finish/customer-finish.component';
@Component({
  selector: 'app-create-customer',
  templateUrl: './customer-wizard.html',
  styleUrls: ['./customer-wizard.scss']
})
export class CreateCustomerComponent implements AfterViewInit {
  form1: FormGroup;
  @ViewChild('stepOne') customerInfoComponent: CustomerInfoComponent;
  form2: FormGroup;
  @ViewChild('stepTwo') oracleSetupComponent: OracleSetupComponent;
  form3: FormGroup;
  @ViewChild('stepThree') contractInfoComponent: ContractInfoComponent;
  form4: FormGroup;
  @ViewChild('stepFour') customerFinishComponent: CustomerFinishComponent;


  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerSvc: CustomerService,
    private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.form1 = this.customerInfoComponent.customerInfoGroup;
    this.form2 = this.oracleSetupComponent.oracleSetupFormGroup;
    this.form3 = this.contractInfoComponent.contractInfoFormGroup;
    this.form4 = this.customerFinishComponent.customerFinishFormGroup;
    this.cdr.detectChanges();
  }

}
