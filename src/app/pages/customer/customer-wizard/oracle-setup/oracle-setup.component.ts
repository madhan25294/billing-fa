import { Component, Input } from '@angular/core';
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
  @Input() metaData: any;
  oracleSetupFormGroup: FormGroup;

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {

    this.oracleSetupFormGroup = this.formBuilder.group({
      countyName: ['', [Validators.required]],
      salesPerson: ['', [Validators.required]],
      customerType: ['', [Validators.required]],
      category: ['', [Validators.required]],
      classification: ['', [Validators.required]],
      customerNumber: ['', [Validators.required]],
      locationNumber: ['', [Validators.required]],
      // parent
      company: ['', [Validators.required]],
      accountManager: ['', [Validators.required]],
      collector: ['', [Validators.required]],
    });
  }


}
