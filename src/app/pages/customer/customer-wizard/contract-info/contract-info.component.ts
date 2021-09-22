import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
// models

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent {
  @Input() metaData: any;
  contractInfoFormGroup: FormGroup

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.contractInfoFormGroup = this.formBuilder.group({
      // firstCtrl: ['', [Validators.required]]
    });
  }

}
