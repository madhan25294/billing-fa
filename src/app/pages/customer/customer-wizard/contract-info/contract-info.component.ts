import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CustomerService } from '../../customer.service';
import { CustomerPubsubService } from '../../customer.pubsub.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { Subscription } from 'rxjs';
// models

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent {
  @Input() metaData: any;
  contractInfoFormGroup: FormGroup;
  @Output() myOutput:EventEmitter<string> = new EventEmitter();

  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    public customerPubsubService: CustomerPubsubService,
    private dialogService: DialogService
  ) {
    this.contractInfoFormGroup = this.formBuilder.group({
      contract: this.formBuilder.array([
      ]),
      notes: ['', [Validators.maxLength(10240)]]
    });
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

    const popupData: any = {};
          popupData.showPopup = true;
          popupData.confirmPopup = true;
          popupData.boldContent = 'Delete';
          popupData.content = 'the added contract';
          popupData.data =  {
            eventType: 'delete-contract',
            ind: ind
          };

          this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
      
            if (res.eventType && res.eventType === 'delete-contract') {
              let contracts = this.contractInfoFormGroup.get('contract') as FormArray;
              contracts.removeAt(res.ind);
            }
          });
  }

  addSow(selectedContract: any) {
    let sows = selectedContract.get('sows') as FormArray;
    sows.push(this.newSow());
  }

  deleteSow(selectedContract: any, ind: number) {
    const popupData: any = {};
          popupData.showPopup = true;
          popupData.confirmPopup = true;
          popupData.boldContent = 'Delete';
          popupData.content = 'the added sow';
          popupData.data =  {
            eventType: 'delete-sow',
            selectedContract: selectedContract,
            ind: ind
          };
          this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
      
            if (res.eventType && res.eventType === 'delete-sow') {
              let sows = res.selectedContract.get('sows') as FormArray;
              sows.removeAt(res.ind);
            }
          });
  }

  deleteAmendment(selectedAmendment: any, ind: number) {

    const popupData: any = {};
    popupData.showPopup = true;
    popupData.confirmPopup = true;
    popupData.boldContent = 'Delete';
    popupData.content = 'the added amendment';
    popupData.data =  {
      eventType: 'delete-amendment',
      selectedAmendment: selectedAmendment,
      ind: ind
    };
    this.dialogService.confirmDialog(popupData).subscribe((res: any) => {

      if (res.eventType && res.eventType === 'delete-amendment') {
        let amendment = res.selectedAmendment.get('amendmentDates') as FormArray;
        amendment.removeAt(res.ind);
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
    const popupData: any = {};
    popupData.showPopup = true;
    popupData.confirmPopup = true;
    popupData.boldContent = 'Reset';
    popupData.content = content;
    popupData.data =  {
      eventType: 'reset-in-contractinfo',
      contactToReset: selected
    };
    this.dialogService.confirmDialog(popupData).subscribe((res: any) => {

      if (res.eventType && res.eventType === 'reset-in-contractinfo') {
        res.contactToReset.reset()
      }
    });
  }

  pubToResetAmendment(selected: any, content: any) {
    const popupData: any = {};
    popupData.showPopup = true;
    popupData.confirmPopup = true;
    popupData.boldContent = 'Reset';
    popupData.content = content;
    popupData.data =  {
      eventType: 'reset-amendmentdate',
      amendmentToReset: selected
    };
    this.dialogService.confirmDialog(popupData).subscribe((res: any) => {

      if (res.eventType && res.eventType === 'reset-amendmentdate') {
        res.amendmentToReset.controls.amendmentDate.setValue('');
      }
    });
  }

  createCustomerClick() {
    if (this.contractInfoFormGroup.controls.contract['controls'].length > 0) {
      if (this.contractInfoFormGroup.valid) {

        const popupData: any = {};
        popupData.showPopup = true;
        popupData.confirmPopup = true;
        popupData.boldContent = 'Create a Customer';
        popupData.content = 'with contract';
        popupData.data =  {
          eventType: 'add-contract',
        };
        this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
    
          if (res.eventType && res.eventType === 'add-contract') {
            //this.customerPubsubService.pubToSaveCustomer()
            this.myOutput.emit("fire");
          }
        })

      } else {
        this.contractInfoFormGroup.markAllAsTouched();
        const popupData: any = {};
        popupData.errorPopup = true;
        this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
    
          
        })
      }
    } else {
      const popupData: any = {};
      popupData.showPopup = true;
      popupData.confirmPopup = true;
      popupData.boldContent = 'Create a Customer';
      popupData.content = 'without adding contract',
      popupData.data =  {
        eventType: 'add-contract',
      };
      this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
    
        if (res.eventType && res.eventType === 'add-contract') {
          //this.customerPubsubService.pubToSaveCustomer()
          this.myOutput.emit("fire");
        }
      })
    }

  }

  toggleDisableEnableAddAmendment(amendment: any) {
    return (amendment.controls.amendmentNo.value && amendment.controls.amendmentDate.value)
  }


}
