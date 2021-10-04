import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from "@angular/material/stepper";
// service
import { SnackBarService } from '../../../shared/snack-bar.service';
import { CustomerService } from '../customer.service';
import { CustomerPubsubService } from '../customer.pubsub.service';
// models

// components
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OracleSetupComponent } from './oracle-setup/oracle-setup.component';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { CustomerFinishComponent } from './customer-finish/customer-finish.component';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './customer-wizard.component.html',
  styleUrls: ['./customer-wizard.component.scss']
})
export class CreateCustomerComponent implements AfterViewInit, OnInit, OnDestroy {
  form1: FormGroup;
  @ViewChild('stepOne') customerInfoComponent: CustomerInfoComponent;
  form2: FormGroup;
  @ViewChild('stepTwo') oracleSetupComponent: OracleSetupComponent;
  form3: FormGroup;
  @ViewChild('stepThree') contractInfoComponent: ContractInfoComponent;
  form4: FormGroup;
  @ViewChild('stepFour') customerFinishComponent: CustomerFinishComponent;

  @ViewChild('stepper') stepper: MatStepper;

  customerInfoMetadata: { [key: string]: any };
  oracleSetupMetadata: { [key: string]: any };
  contractInfoMetadata: { [key: string]: any };
  finishInfoMetadata: { [key: string]: any };

  confirmPopup: { [key: string]: any };
  dialogRef: any;
  subscription:Subscription = new Subscription();
  constructor(
    private snackBService: SnackBarService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef,
    private customerPubsubService: CustomerPubsubService,
    public dialog: MatDialog,
    private dialogService:DialogService) {
    this.confirmPopup = {
      show: false,
      boldContent: '',
      content: ''
    };

    this.customerInfoMetadata = {};
    this.oracleSetupMetadata = {};
    this.contractInfoMetadata = {};
    this.finishInfoMetadata = {};

    // for customer info step
    this.customerInfoMetadata.industryList = [];

    // for oraclesetup step
    this.oracleSetupMetadata.salesPersonsList = [];
    this.oracleSetupMetadata.customerTypes = [];
    this.oracleSetupMetadata.productCategoryList = [];
    this.oracleSetupMetadata.classificationsList = [];
    this.oracleSetupMetadata.parentCompaniesList = [];
    this.oracleSetupMetadata.managersList = [];
    this.oracleSetupMetadata.collectorsDataList = [];


    // for contract info step
    this.contractInfoMetadata.agreementList = [];
    this.bindForToggleConfirmpopup();
    this.bindForStepMove();
    //this.bindToSaveCustomer();
  }

  bindForStepMove() {
    this.customerPubsubService.subToMoveStep()
      .subscribe((res: number) => {
        this.stepper.selectedIndex = res;
      })
      this.subscription.add(this.customerPubsubService.subToMoveStep().subscribe());
  }

  bindForToggleConfirmpopup() {
    //this.customerPubsubService.resetConfirmPopUp();
    this.customerPubsubService.subToShowConfirmpopup()
      .subscribe((res: any) => {
        if (res.showPopup) {
          const popupData: any = {};
          if (res.confirmPopup) {
            popupData.confirmPopup = true;
            popupData.boldContent = res.boldContent;
            popupData.content = res.content;
            popupData.data = res.data;
          }
          if (res.successPopup) {
            popupData.successPopup = true;
            popupData.boldContent = res.boldContent;
            popupData.content = res.content;
          }
          // if (res.errorPopup) {
          //   popupData.errorPopup = true;
          //   popupData.boldContent = res.boldContent;
          //   popupData.content = res.content;
          // }
          //this.openDialog(popupData);
        }
      })
      this.subscription.add(this.customerPubsubService.subToShowConfirmpopup().subscribe());
  }

  

  bindToSaveCustomer() {
    this.customerPubsubService.subToSaveCustomer()
      .subscribe((res: any) => {
        this.saveContract()
      })
      this.subscription.add(this.customerPubsubService.subToSaveCustomer().subscribe());
  }

  GetChildData(data:any){
    this.saveContract();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveContract() {
    let reqObj = {
      cCode: this.form1.controls.branchCode.value,
      company: this.form1.controls.cmpName.value,
      bAddress1: this.form1.controls.billingAddress['controls'].address1.value,
      bAddress2: this.form1.controls.billingAddress['controls'].address2.value,
      bCity: this.form1.controls.billingAddress['controls'].city.value,
      bState: this.form1.controls.billingAddress['controls'].state.value,
      bZip: this.form1.controls.billingAddress['controls'].zipcode.value,
      county: this.form2.controls.countyName.value,
      industryID: this.form1.controls.industry.value,
      isActiveFlag: this.form1.controls.active.value ? 1: 0,
      isTaxableFlag: this.form1.controls.taxable.value ? 1: 0,
      creditCardFlag: this.form1.controls.creditCard.value ? 1: 0,
      notes: this.form3.controls.notes.value,
      acctNo: this.form1.controls.accNum.value,
      oracleProfile: this.form2.controls.customerType.value,
      oracleCategory: this.form2.controls.category.value,
      oracleClassification: this.form2.controls.classification.value,
      oracleCustNo: this.form2.controls.customerNumber.value,
      oracleLocationNo: this.form2.controls.locationNumber.value,
      oracleSalesPersonID: this.form2.controls.salesPerson.value,
      companyId: this.form2.controls.company.value,
      accountManagerID: this.form2.controls.accountManager.value,
      collectorID: this.form2.controls.collector.value,
      poNo: this.form1.controls.poNo.value,
      contacts: [],
      contracts: []
    };
    // main contact
    reqObj.contacts.push({
      attn: this.form1.controls.contactAttention.value,
      contactName: this.form1.controls.contactCon.value,
      phone: this.form1.controls.contactPhone.value,
      extn: this.form1.controls.contactExt.value,
      fax: this.form1.controls.contactFax.value,
      emailInvoiceFlag: this.form1.controls.contactEmailInvoice.value ? 1: 0,
      email: this.form1.controls.contactEmail.value

    })
    if (this.form1.controls.secondaryContact.value.length > 0) {
      let contacts = this.form1.controls.secondaryContact.value;
      contacts.forEach(contact => {
        // secondary contact
        reqObj.contacts.push({
          contactName: contact.contact,
          phone: contact.phone,
          extn: contact.extension,
          fax: contact.fax,
          emailInvoiceFlag: contact.emailInvoice ? 1: 0,
          email: contact.email
        })
      });
    }
    if (this.form3.controls.contract.value.length > 0) {
      let contracts = this.form3.controls.contract.value;
      contracts.forEach(contract => {
        let contractObjToPush: any = {}
        contractObjToPush.sows = [];
        contractObjToPush.agreementID = contract.agreement;
        contractObjToPush.agreemenSStartDate = contract.startDate;
        contractObjToPush.agreemenEndtDate = contract.endDate;
        contractObjToPush.term = contract.term;
        contractObjToPush.renewalTerm = contract.renewalterm;
        contractObjToPush.notification = contract.notification;
        contractObjToPush.contractNumber = contract.contractNumber;
        contractObjToPush.unlimitedAutoRenewFlag = contract.unlimitedAutoRenew  ? 1: 0;
        contractObjToPush.contractLink = contract.contractLink;
        if (contract.sows.length > 0) {
          contract.sows.forEach(sow => {
            let sowObjToPush: any = {}
            sowObjToPush.cpi = sow.cpi  ? 1: 0;
            sowObjToPush.cpiCap = sow.cpiCap;
            sowObjToPush.sowNo = sow.sowNo;
            sowObjToPush.sowDate = sow.sowDate;
            // here it should be array (BE)
            sowObjToPush.amendmentNo = sow.amendmentDates[0].amendmentNo;
            sowObjToPush.amendmentDate = sow.amendmentDates[0].amendmentDate;
            contractObjToPush.sows.push(sowObjToPush)
          });
        }
        reqObj.contracts.push(contractObjToPush)
      });
    }
    console.log(reqObj);
    
    

      

    

    this.customerService.saveCustomer(reqObj)
      .subscribe((customerSaveResp: any) => {
        this.finishInfoMetadata.savedCustomer = this.form1.controls.cmpName.value
        this.customerPubsubService.pubToMoveStep(3);
      }, err => {
        // this.customerPubsubService.pubToShowConfirmpopup({
        //   showPopup: true,
        //   errorPopup: true,
        //   boldContent: 'Error',
        //   content: 'while creating the customer',
        // });
        const popupData: any = {};
        popupData.errorPopup = true;
        popupData.boldContent = 'Error';
        popupData.content = 'while creating the customer';
        this.dialogService.confirmDialog(popupData).subscribe((res: any) => {
    
          
        })

      })
  }

  openDialog(data: { [key: string]: any }) {
    this.dialogRef = this.dialog.open(CustomerDialogContentComponent, {
      data: {
        modelData: data,
      }
    });
    // dialogRef.afterClosed().subscribe((result) => { });
  }

  

  ngOnInit() {
    // for customer info step
    this.fetchIndustries();

    // for oraclesetup step
    this.fetchSalesPersonsList();
    this.fetchCustomerTypes();
    this.fetchProductCategories();
    this.fetchClassifications();
    this.fetchParentCompany();
    this.fetchManagersList();
    this.fetchCollectorsData();

    // for contract info step
    this.fetchAgreeementData();
  }

  ngAfterViewInit() {
    this.form1 = this.customerInfoComponent.customerInfoGroup;
    this.form2 = this.oracleSetupComponent.oracleSetupFormGroup;
    this.form3 = this.contractInfoComponent.contractInfoFormGroup;
    this.form4 = this.customerFinishComponent.customerFinishFormGroup;
    this.cdr.detectChanges();
  }

  fetchIndustries() {
    this.customerService.getIndustryList()
      .subscribe((industriesList) => {
        this.customerInfoMetadata.industryList = industriesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  fetchCustomerTypes() {
    this.customerService.getCustomerType()
      .subscribe((customerTypesList) => {
        this.oracleSetupMetadata.customerTypes = customerTypesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchSalesPersonsList() {
    this.customerService.getSalesPersons()
      .subscribe((salesPersonsList) => {
        this.oracleSetupMetadata.salesPersonsList = salesPersonsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchProductCategories() {
    this.customerService.getProductCategory()
      .subscribe((categoryList) => {
        this.oracleSetupMetadata.productCategoryList = categoryList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchClassifications() {
    this.customerService.getClassifications()
      .subscribe((classificationsList) => {
        this.oracleSetupMetadata.classificationsList = classificationsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchParentCompany() {
    this.customerService.getParentCompany()
      .subscribe((parentCompaniesList) => {
        this.oracleSetupMetadata.parentCompaniesList = parentCompaniesList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchManagersList() {
    this.customerService.getManagers()
      .subscribe((managersList) => {
        this.oracleSetupMetadata.managersList = managersList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }
  fetchCollectorsData() {
    this.customerService.getColletorData()
      .subscribe((collectorsList) => {
        this.oracleSetupMetadata.collectorsDataList = collectorsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

  fetchAgreeementData() {
    this.customerService.getAgreementData()
      .subscribe((agreementsList) => {
        this.contractInfoMetadata.agreementList = agreementsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

}

@Component({
  selector: 'app-customer-dialog-content',
  templateUrl: 'customer-wizard-model.html',
  styleUrls: ['./customer-wizard.component.scss'],
})
export class CustomerDialogContentComponent {

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { [key: string]: any },
    private customerPubsubService: CustomerPubsubService) {
  }

  confirmModelYes() {
    this.customerPubsubService.pubToShowConfirmpopup(this.data.modelData.data);
    this.dialogRef.close();
    

  }

}

