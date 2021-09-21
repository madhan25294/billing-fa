import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
// models
import {
  GetIndustries
} from '../../customer.model';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {
  // customer information
  customerInfoGroup: FormGroup;
  industryList: Array<GetIndustries>;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerSvc: CustomerService
  ) {
    // customer information
    this.customerInfoGroup = this.formBuilder.group({
      cmpName: ['', [Validators.required, Validators.minLength(10)]],
      accNum: ['', [Validators.required]],
      branchCode: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      active: [false, [Validators.required]],
      poNo: ['', [Validators.required]],
      taxable: [false, [Validators.required]],
      creditCard: [false, [Validators.required]],
      // contact information
      contactAttention: ['', [Validators.required]],
      contactCon: ['', [Validators.required]],
      contactPhone: ['', [Validators.required]],
      contactExt: ['', [Validators.required]],
      contactFax: ['', [Validators.required]],
      contactEmailInvoice: [false, [Validators.required]],
      contactEmail: ['', [Validators.required]],
      // secondary contact
      secondaryContact: this.formBuilder.array([
        this.formBuilder.group({
          contact: ['', [Validators.required]],
          phone: ['', [Validators.required]],
          extension: ['', [Validators.required]],
          fax: ['', [Validators.required]],
          emailInvoice: [false, [Validators.required]],
          email: ['', [Validators.required]]
        })
      ]),
      // billing address
      billingAddress: this.formBuilder.group({
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required]]
      })
    });
    this.industryList = [];
  }

  getContactControls() {
    return this.customerInfoGroup.get('secondaryContact') as FormArray;
  }

  addContact() {
    let contacts = this.customerInfoGroup.get('secondaryContact') as FormArray;
    contacts.push(this.formBuilder.group({
      contact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      extension: ['', [Validators.required]],
      fax: ['', [Validators.required]],
      emailInvoice: [false, [Validators.required]],
      email: ['', [Validators.required]],
    }));
  }

  deleteContact(ind: number) {
    let contacts = this.customerInfoGroup.get('secondaryContact') as FormArray;
    contacts.removeAt(ind);
  }

}
