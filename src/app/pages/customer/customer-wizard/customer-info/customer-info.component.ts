import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
import { CustomerPubsubService } from '../../customer.pubsub.service';
import { validateEmailList } from '../../customer.custom.validator';
// models
import {
  PostaCodeData
} from '../../customer.model';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  @Input() metaData: any;
  customerInfoGroup: FormGroup;
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    public customerPubsubService: CustomerPubsubService
  ) {
    // customer information
    this.customerInfoGroup = this.formBuilder.group({
      cmpName: ['', [Validators.required, Validators.maxLength(100)]],
      accNum: ['', []],
      branchCode: ['', [Validators.maxLength(15), Validators.pattern("0{0,10}([1-9][0-9]*)?")]],
      industry: ['', []],
      active: [false, []],
      poNo: ['', [Validators.maxLength(42), Validators.pattern("0{0,10}([1-9][0-9]*)?")]],
      taxable: [false, []],
      creditCard: [false, []],
      // contact information
      contactAttention: ['', [Validators.maxLength(55)]],
      contactCon: ['', [Validators.maxLength(20)]],
      contactPhone: ['', [Validators.maxLength(12), Validators.pattern("0{0,10}([1-9][0-9]*)?")]],
      contactExt: ['', [Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      contactFax: ['', [Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      contactEmailInvoice: [false, []],
      contactEmail: ['', [Validators.maxLength(99), validateEmailList]],
      // secondary contact
      secondaryContact: this.formBuilder.array([

      ]),
      // billing address
      billingAddress: this.formBuilder.group({
        address1: ['', [Validators.required, Validators.maxLength(55)]],
        address2: ['', [Validators.maxLength(55)]],
        city: ['', [Validators.required, Validators.maxLength(30)]],
        state: ['', [Validators.required, Validators.maxLength(2)]],
        zipcode: ['', [Validators.required, Validators.maxLength(10)]]
      })
    });
    this.subForConfirmPopup();
  }

  ngOnInit() {
    this.onZipcodeType();
  }

  getContactControls() {
    return this.customerInfoGroup.get('secondaryContact') as FormArray;
  }

  addContact() {
    let contacts = this.customerInfoGroup.get('secondaryContact') as FormArray;
    contacts.push(this.formBuilder.group({
      contact: ['', [Validators.required, Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.maxLength(12), Validators.pattern("0{0,10}([1-9][0-9]*)?")]],
      extension: ['', [Validators.maxLength(5)]],
      fax: ['', [Validators.maxLength(12)]],
      emailInvoice: [false, []],
      email: ['', [Validators.required, Validators.maxLength(99)]],
    }));
  }

  deleteContact(ind: number) {
    let contacts = this.customerInfoGroup.get('secondaryContact') as FormArray;
    contacts.removeAt(ind);
  }

  onZipcodeType() {
    this.customerInfoGroup['controls'].billingAddress.get('zipcode').valueChanges
      .pipe(debounceTime(500))
      .subscribe((val: string) => {
        this.customerService.getPostalCodeData(val)
          .subscribe((zipcodeResp: any) => {
            if (zipcodeResp && zipcodeResp.city) {
              this.customerInfoGroup['controls'].billingAddress['controls'].city.setValue(zipcodeResp.city)
            } else {
              this.customerInfoGroup['controls'].billingAddress['controls'].city.setValue("")
            }
            if (zipcodeResp && zipcodeResp.state) {
              this.customerInfoGroup['controls'].billingAddress['controls'].state.setValue(zipcodeResp.state)
            } else {
              this.customerInfoGroup['controls'].billingAddress['controls'].state.setValue("")
            }
          }, (err: any) => {
            this.customerInfoGroup['controls'].billingAddress['controls'].state.setValue("")
            this.customerInfoGroup['controls'].billingAddress['controls'].city.setValue("")
          })
      });
  }

  pubToDelete(ind: any) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Delete',
      content: 'the contact',
      data: {
        eventType: 'delete-contact',
        ind: ind
      }
    });
  }

  pubToReset(selectedContact: any, content) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Reset',
      content: content,
      data: {
        eventType: 'reset-in-contactinfo',
        contactToReset: selectedContact
      }
    });
  }

  subForConfirmPopup() {
    this.customerPubsubService.subToShowConfirmpopup()
      .subscribe((res: any) => {
        if (res.eventType && res.eventType === 'delete-contact') {
          this.deleteContact(res.ind)
        }
        if (res.eventType && res.eventType === 'reset-in-contactinfo') {
          res.contactToReset.reset()
        }
      })
  }

  toogleEnableDisableAddContact() {
    if (this.customerInfoGroup.get('secondaryContact')['controls'].length > 0) {
      return (this.customerInfoGroup.controls.contactAttention.value &&
        this.customerInfoGroup.controls.contactCon.value && this.customerInfoGroup.controls.contactPhone.value &&
        this.customerInfoGroup.controls.contactEmail.value && this.customerInfoGroup.get('secondaryContact')['controls'][this.customerInfoGroup.get('secondaryContact')['controls'].length - 1].valid)
    } else {
      return (this.customerInfoGroup.controls.contactAttention.value &&
        this.customerInfoGroup.controls.contactCon.value && this.customerInfoGroup.controls.contactPhone.value &&
        this.customerInfoGroup.controls.contactEmail.value)
    }

  }

  toogleEnableDisableResetSecondaryContact(selectedContact: any) {
    return (selectedContact.controls.contact.value || selectedContact.controls.phone.value ||
      selectedContact.controls.extension.value || selectedContact.controls.fax.value ||
      selectedContact.controls.email.value)
  }

  

}
