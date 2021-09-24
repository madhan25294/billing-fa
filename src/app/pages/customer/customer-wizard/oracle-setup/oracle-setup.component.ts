import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
import { CustomerPubsubService } from '../../customer.pubsub.service';

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
    private customerService: CustomerService,
    public customerPubsubService: CustomerPubsubService
  ) {

    this.oracleSetupFormGroup = this.formBuilder.group({
      countyName: ['', [Validators.required, Validators.maxLength(45)]],
      salesPerson: ['', [Validators.required]],
      customerType: ['', [Validators.required]],
      category: ['', [Validators.required]],
      classification: ['', [Validators.required]],
      customerNumber: ['', []],
      locationNumber: ['', []],
      // parent
      company: ['', []],
      accountManager: ['', []],
      collector: ['', []],
    });
    this.subForConfirmPopup();
  }

  pubToReset(selected: any, content) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Reset',
      content: content,
      data: {
        eventType: 'reset-in-oraclesetup',
        contactToReset: selected
      }
    });
  }

  subForConfirmPopup() {
    this.customerPubsubService.subToShowConfirmpopup()
      .subscribe((res: any) => {
        if (res.eventType && res.eventType === 'reset-in-oraclesetup') {
          res.contactToReset.reset()
        }
      })
  }

}
