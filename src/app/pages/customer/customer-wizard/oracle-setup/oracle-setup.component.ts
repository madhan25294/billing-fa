import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
// models
import {
  CustomerType, GetSalesPerson, ProductCategory,
  Classification, ParentData, AccountManagers, CollectorData
} from '../../customer.model';

@Component({
  selector: 'app-oracle-setup',
  templateUrl: './oracle-setup.component.html',
  styleUrls: ['./oracle-setup.component.scss']
})
export class OracleSetupComponent {

  // oracle setup
  oracleSetupFormGroup: FormGroup;
  customerTypes: Array<CustomerType>;
  salesPersonsList: Array<GetSalesPerson>;
  productCategoryList: Array<ProductCategory>;
  classificationsList: Array<Classification>;
  parentCompaniesList: Array<ParentData>;
  managersList: Array<AccountManagers>
  collectorsDataList: Array<CollectorData>;

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerSvc: CustomerService
  ) {

    this.oracleSetupFormGroup = this.formBuilder.group({
      secondCtrl: ['', [Validators.required]]
    });
    this.salesPersonsList = [];
    this.customerTypes = [];
    this.productCategoryList = [];
    this.classificationsList = [];
    this.parentCompaniesList = [];
    this.managersList = [];
    this.collectorsDataList = [];
  }


}
