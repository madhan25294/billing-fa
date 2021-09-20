import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CreateCustomerService } from '../../services/create-customer-api.service';
// models
import {
  GetIndustries, CustomerType, GetSalesPerson, ProductCategory,
  Classification, ParentData, AccountManagers, CollectorData
} from '../../models/create-customer.model';
// components
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { OracleSetupComponent } from '../oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from '../contract-info/contract-info.component';
import { CustomerFinishComponent } from '../customer-finish/customer-finish.component';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit, AfterViewInit {
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
    private createCustomerSvc: CreateCustomerService,
    private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.form1 = this.customerInfoComponent.customerInfoGroup;
    this.form2 = this.oracleSetupComponent.oracleSetupFormGroup;
    this.form3 = this.contractInfoComponent.contractInfoFormGroup;
    this.form4 = this.customerFinishComponent.customerFinishFormGroup;
    this.cdr.detectChanges();
  }

  ngOnInit() {

  }

}
