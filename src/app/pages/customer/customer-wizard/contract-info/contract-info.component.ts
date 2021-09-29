import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
import { CustomerPubsubService } from '../../customer.pubsub.service';
// models

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent {
  @Input() metaData: any;
  contractInfoFormGroup: FormGroup;

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    public customerPubsubService: CustomerPubsubService
  ) {
    this.contractInfoFormGroup = this.formBuilder.group({
      contract: this.formBuilder.array([
      ]),
      notes: ['', [Validators.maxLength(10240)]]
    });
    this.subForConfirmPopup()
  }

  newContract(): FormGroup {
    return this.formBuilder.group({
      agreement: ['', []],
      startDate: ['', []],
      endDate: ['', []],
      term: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      renewalterm: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      notification: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      contractNumber: ['', [Validators.maxLength(75)]],
      unlimitedAutoRenew: [false, []],
      contractLink: ['', []],
      // sow
      sows: this.formBuilder.array([
        this.newSow()
      ])
    });
  }

  newSow(): FormGroup {
    return this.formBuilder.group({
      cpi: [false, []],
      cpiCap: ['', [Validators.required, Validators.pattern(/^\d+\.\d{0,4}$/)]],
      sowNo: ['', [Validators.maxLength(3)]],
      sowDate: ['', []],
      amendmentDates: this.formBuilder.array([
        this.formBuilder.group({
          amendmentDate: ['', []],
          amendmentNo: ['', [Validators.maxLength(25)]]
        })
      ])
    })
  }


  addContract() {
    let contacts = this.contractInfoFormGroup.get('contract') as FormArray;
    contacts.push(this.newContract());
  }

  deleteContract(ind: number) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Delete',
      content: 'the added contract',
      data: {
        eventType: 'delete-contract',
        ind: ind
      }
    });
  }

  addSow(selectedContract: any) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.push(this.newSow());
  }

  deleteSow(selectedContract: any, ind: number) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Delete',
      content: 'the added sow',
      data: {
        eventType: 'delete-sow',
        selectedContract: selectedContract,
        ind: ind
      }
    });
  }

  deleteAmendment(selectedAmendment: any, ind: number) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Delete',
      content: 'the added amendment',
      data: {
        eventType: 'delete-amendment',
        selectedAmendment: selectedAmendment,
        ind: ind
      }
    });
  }

  addAmmendment(selectedSow: any) {
    let ammendment = selectedSow.get('amendmentDates') as FormArray;
    ammendment.push(this.formBuilder.group({
      amendmentDate: ['', [Validators.required]],
      amendmentNo: ['', [Validators.required]],
    }));
  }

  pubToReset(selected: any, content: any) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Reset',
      content: content,
      data: {
        eventType: 'reset-in-contractinfo',
        contactToReset: selected
      }
    });
  }

  pubToResetAmendment(selected: any, content: any) {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Reset',
      content: content,
      data: {
        eventType: 'reset-amendmentdate',
        amendmentToReset: selected
      }
    });
  }

  createCustomerClick() {
    this.customerPubsubService.pubToShowConfirmpopup({
      showPopup: true,
      boldContent: 'Create a Customer',
      content: 'without adding contract',
      data: {
        eventType: 'add-contract',
      }
    });
  }


  subForConfirmPopup() {
    this.customerPubsubService.subToShowConfirmpopup()
      .subscribe((res: any) => {
        if (res.eventType && res.eventType === 'reset-in-contractinfo') {
          res.contactToReset.reset()
        }
        if (res.eventType && res.eventType === 'reset-amendmentdate') {
          res.amendmentToReset.controls.amendmentDate.setValue('');
        }
        if (res.eventType && res.eventType === 'add-contract') {
          this.customerPubsubService.pubToMoveStep(3);
        }
        if (res.eventType && res.eventType === 'delete-amendment') {
          let amendment = res.selectedAmendment.get('amendmentDates') as FormArray;
          amendment.removeAt(res.ind);
        }
        if (res.eventType && res.eventType === 'delete-sow') {
          let sows = res.selectedContract.get('sows') as FormArray;
          sows.removeAt(res.ind);
        }
        if (res.eventType && res.eventType === 'delete-contract') {
          let contracts = this.contractInfoFormGroup.get('contract') as FormArray;
          contracts.removeAt(res.ind);
        }
      })
  }

  toggleDisableEnableAddAmendment(amendment: any) {
    return (amendment.controls.amendmentNo.value && amendment.controls.amendmentDate.value)
  }
}
