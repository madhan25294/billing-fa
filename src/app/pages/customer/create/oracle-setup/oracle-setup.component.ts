import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// service
import { SnackBarService } from '../../../../shared/snack-bar.service';
import { CreateCustomerService } from '../../services/create-customer-api.service';
// models
import {
  GetIndustries, CustomerType, GetSalesPerson, ProductCategory,
  Classification, ParentData, AccountManagers, CollectorData
} from '../../models/create-customer.model';

@Component({
  selector: 'app-oracle-setup',
  templateUrl: './oracle-setup.component.html',
  styleUrls: ['./oracle-setup.component.scss']
})
export class OracleSetupComponent implements OnInit {

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
    private createCustomerSvc: CreateCustomerService
  ) {
    // oracle setup
    this.oracleSetupFormGroup = this.formBuilder.group({
      secondCtrl: ['', [Validators.required]]
    });
    this.salesPersonsList = [];
    this.fetchSalesPersonsList();
    this.customerTypes = [];
    this.fetchCustomerTypes();
    this.productCategoryList = [];
    this.fetchProductCategories();
    this.classificationsList = [];
    this.fetchClassifications();
    this.parentCompaniesList = [];
    this.fetchParentCompany();
    this.managersList = [];
    this.fetchManagersList();
    this.collectorsDataList = [];
    this.fetchCollectorsData();
  }

  ngOnInit(): void {
  }

  // orcale setup
  fetchCustomerTypes() {
    this.customerTypes = [
      {
        "id": 1,
        "profile": "AIS NY"
      },
      {
        "id": 2,
        "profile": "Data Trace"
      },
      {
        "id": 7,
        "profile": "Data Trace NAZCA"
      },
      {
        "id": 8,
        "profile": "Data Trace NW"
      },
      {
        "id": 3,
        "profile": "Data Tree EQ"
      },
      {
        "id": 4,
        "profile": "NAZCA"
      },
      {
        "id": 10,
        "profile": "SIS Monthly"
      },
      {
        "id": 9,
        "profile": "SIS No Cycle"
      },
      {
        "id": 5,
        "profile": "Texas Tax POC"
      },
      {
        "id": 6,
        "profile": "Texas Tax Regular"
      }
    ]
    // this.createCustomerSvc.getCustomerType()
    //   .subscribe((customerTypesList) => {
    //     this.customerTypes = customerTypesList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchSalesPersonsList() {
    this.salesPersonsList = [
      {
        "id": 121,
        "name": "Armstrong, Michael J (13428)"
      },
      {
        "id": 126,
        "name": "Backs, Justin D (13259)"
      },
      {
        "id": 179,
        "name": "Backs, Justin D (10673)"
      },
      {
        "id": 166,
        "name": "Bellomo, Ben-Jon V (13670)"
      },
      {
        "id": 91,
        "name": "Berty, Christopher A (10691)"
      },
      {
        "id": 145,
        "name": "Blount, Chad N (13107)"
      },
      {
        "id": 92,
        "name": "Brown, Kelly L (10691)"
      },
      {
        "id": 167,
        "name": "Brown, Raymond E (13670)"
      },
      {
        "id": 189,
        "name": "Bryant, Eric (13107)"
      },
      {
        "id": 157,
        "name": "Burns, Margaret (13936)"
      },
      {
        "id": 93,
        "name": "Burns, Brenda A (11399)"
      },
      {
        "id": 106,
        "name": "Charnell, Corlen R (13477)"
      },
      {
        "id": 137,
        "name": "Charnell, Corlen R (13441)"
      },
      {
        "id": 139,
        "name": "Charnell, Corlen R (13477)"
      },
      {
        "id": 128,
        "name": "Charnell, Corlen R (10673)"
      },
      {
        "id": 120,
        "name": "Charnell, Corlen R (13431)"
      },
      {
        "id": 190,
        "name": "Cherpas, Natasha N (10690)"
      },
      {
        "id": 103,
        "name": "Chinn, Darren T (13477)"
      },
      {
        "id": 138,
        "name": "Chmura, Bradley K (10690)"
      },
      {
        "id": 175,
        "name": "Choy, Scott (13441)"
      },
      {
        "id": 134,
        "name": "Cipriani, Christi (13428)"
      },
      {
        "id": 3,
        "name": "Cipriani, Christi (10673)"
      },
      {
        "id": 150,
        "name": "Connors, Michael P (14700)"
      },
      {
        "id": 169,
        "name": "Cooper Jr, William J (14700)"
      },
      {
        "id": 158,
        "name": "Creely, Michelle (13936)"
      },
      {
        "id": 188,
        "name": "Crowley, Thomas P (13259)"
      },
      {
        "id": 135,
        "name": "Dawson, Joshua C (13428)"
      },
      {
        "id": 123,
        "name": "Dawson, Joshua C (13477)"
      },
      {
        "id": 33,
        "name": "DTT Sales Rep, ignore (10673)"
      },
      {
        "id": 181,
        "name": "Dudas, Connor (14454)"
      },
      {
        "id": 74,
        "name": "Ford, Ernest E (11399)"
      },
      {
        "id": 109,
        "name": "Francoeur, Paul J (13477)"
      },
      {
        "id": 133,
        "name": "Francoeur, Paul J (13428)"
      },
      {
        "id": 140,
        "name": "Frazier, Michael R (13259)"
      },
      {
        "id": 98,
        "name": "Fujimura, Kyle S (10690)"
      },
      {
        "id": 99,
        "name": "Fujimura, Kyle S (10673)"
      },
      {
        "id": 187,
        "name": "Gellasch, James C (13259)"
      },
      {
        "id": 94,
        "name": "Gill, Brandell F (10691)"
      },
      {
        "id": 34,
        "name": "Girgenti, Giovanni (10672)"
      },
      {
        "id": 44,
        "name": "Glevenyak, Joseph A (11399)"
      },
      {
        "id": 147,
        "name": "Goldstein, Steven (13936)"
      },
      {
        "id": 117,
        "name": "Guzak, Lauren (13107)"
      },
      {
        "id": 156,
        "name": "Hering, Gary (13936)"
      },
      {
        "id": 152,
        "name": "Holder, Richard J (13936)"
      },
      {
        "id": 110,
        "name": "Holder, Edward M (11399)"
      },
      {
        "id": 111,
        "name": "Holder, Edward M (10794)"
      },
      {
        "id": 149,
        "name": "Hopper, Lyman A (13936)"
      },
      {
        "id": 154,
        "name": "House, SIS (13936)"
      },
      {
        "id": 28,
        "name": "Johnson, Mark B (10673)"
      },
      {
        "id": 30,
        "name": "Karraa, Robert (10673)"
      },
      {
        "id": 164,
        "name": "Karraa, Robert (10688)"
      },
      {
        "id": 116,
        "name": "Kendall, Steve (10690)"
      },
      {
        "id": 119,
        "name": "Kendall, Steven D (13441)"
      },
      {
        "id": 177,
        "name": "Keniry, Nigel (13259)"
      },
      {
        "id": 148,
        "name": "Kennerley, Michael A (14701)"
      },
      {
        "id": 96,
        "name": "Kent, Charles E (10691)"
      },
      {
        "id": 46,
        "name": "Key, Matthew J (10690)"
      },
      {
        "id": 102,
        "name": "Key, Matthew J (10673)"
      },
      {
        "id": 178,
        "name": "Key, Matthew J (13107)"
      },
      {
        "id": 105,
        "name": "Keysor, Brian M (13107)"
      },
      {
        "id": 172,
        "name": "Klein, Jeremy (14268)"
      },
      {
        "id": 182,
        "name": "Klein, Jeremy (13936)"
      },
      {
        "id": 180,
        "name": "Koopman, Jacqueline C (13107)"
      },
      {
        "id": 170,
        "name": "Krisanda, Jennifer S (13936)"
      },
      {
        "id": 168,
        "name": "Krisanda, Jennifer S (13477)"
      },
      {
        "id": 71,
        "name": "Lapin, Eric M (10691)"
      },
      {
        "id": 122,
        "name": "Learn, Raymond M (13477)"
      },
      {
        "id": 127,
        "name": "Learn, Raymond M (10673)"
      },
      {
        "id": 153,
        "name": "Lisotto, Victor (13936)"
      },
      {
        "id": 142,
        "name": "Martin, Jennifer (13477)"
      },
      {
        "id": 144,
        "name": "McAlister, Andrew S (10690)"
      },
      {
        "id": 173,
        "name": "McAlister, Andrew S (14454)"
      },
      {
        "id": 186,
        "name": "McGee, James (13670)"
      },
      {
        "id": 129,
        "name": "Meyers, Ryan A (10673)"
      },
      {
        "id": 114,
        "name": "Meyers, Ryan A (10690)"
      },
      {
        "id": 97,
        "name": "Mora, Crystal A (10690)"
      },
      {
        "id": 146,
        "name": "O'Brien, Kenneth P (14700)"
      },
      {
        "id": 171,
        "name": "O'Hara, Philip (13936)"
      },
      {
        "id": 26,
        "name": "Pendleton, Robert W (10672)"
      },
      {
        "id": 100,
        "name": "Perndocaj, Albert (10674)"
      },
      {
        "id": 15,
        "name": "Redden, Donna L (10672)"
      },
      {
        "id": 136,
        "name": "Redden, Donna L (13428)"
      },
      {
        "id": 27,
        "name": "Renker, Terri L (11399)"
      },
      {
        "id": 108,
        "name": "Reyes, Daniel F (13477)"
      },
      {
        "id": 132,
        "name": "Reyes, Daniel F (13428)"
      },
      {
        "id": 118,
        "name": "Romano, Anthony N (13441)"
      },
      {
        "id": 16,
        "name": "Romano, Anthony N (12873)"
      },
      {
        "id": 160,
        "name": "Romano, Anthony N (13428)"
      },
      {
        "id": 42,
        "name": "Roper, Kathryn M (10794)"
      },
      {
        "id": 112,
        "name": "Roush, Lynne M (13477)"
      },
      {
        "id": 162,
        "name": "Ryals, Matthew T (13670)"
      },
      {
        "id": 161,
        "name": "Sanchez, Micah C (10690)"
      },
      {
        "id": 151,
        "name": "Savad, Amelia A (13936)"
      },
      {
        "id": 155,
        "name": "Smartz, John M (13107)"
      },
      {
        "id": 63,
        "name": "Stechmann, Jeffrey N (11399)"
      },
      {
        "id": 163,
        "name": "Stokes, David (13670)"
      },
      {
        "id": 174,
        "name": "Tanos, Justin A (14454)"
      },
      {
        "id": 36,
        "name": "Tonarelli, Doreen Kimberly (10673)"
      },
      {
        "id": 131,
        "name": "Tonarelli, Doreen Kimberly (13428)"
      },
      {
        "id": 115,
        "name": "Tretter, Joshua D (13259)"
      },
      {
        "id": 113,
        "name": "Veronneau, Chanelle M (14454)"
      },
      {
        "id": 176,
        "name": "Washburn, Marcella M (13259)"
      },
      {
        "id": 141,
        "name": "Wendt, Vanessa A (10690)"
      },
      {
        "id": 130,
        "name": "White, Tyler J (13107)"
      },
      {
        "id": 165,
        "name": "Wilson, Tracie (13107)"
      },
      {
        "id": 13,
        "name": "Winton, Tracy M (10673)"
      },
      {
        "id": 143,
        "name": "Wrathall, Tanya D. (13259)"
      }
    ]
    // this.createCustomerSvc.getSalesPersons()
    //   .subscribe((salesPersonsList) => {
    //     this.salesPersonsList = salesPersonsList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchProductCategories() {
    this.productCategoryList = [
      {
        "id": 1,
        "category": "AIS NY - INVOICE"
      },
      {
        "id": 2,
        "category": "AIS NY - PMT PLAN"
      },
      {
        "id": 3,
        "category": "DATA TRACE - INVOICE"
      },
      {
        "id": 4,
        "category": "DATA TRACE - PMT PLAN"
      },
      {
        "id": 5,
        "category": "DATA TREE - EQ INV"
      },
      {
        "id": 6,
        "category": "DATA TREE - EQ PMT PLAN"
      },
      {
        "id": 7,
        "category": "NAZCA - CC"
      },
      {
        "id": 8,
        "category": "NAZCA - INVOICE"
      },
      {
        "id": 11,
        "category": "SIS INVOICE"
      },
      {
        "id": 9,
        "category": "TEXAS TAX POC"
      },
      {
        "id": 10,
        "category": "TEXAS TAX REGULAR"
      }
    ]
    // this.createCustomerSvc.getProductCategory()
    //   .subscribe((categoryList) => {
    //     this.productCategoryList = categoryList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchClassifications() {
    this.classificationsList = [
      {
        "id": 1,
        "name": "External"
      },
      {
        "id": 2,
        "name": "Internal"
      }
    ]
    // this.createCustomerSvc.getClassifications()
    //   .subscribe((classificationsList) => {
    //     this.classificationsList = classificationsList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchParentCompany() {
    this.parentCompaniesList = [
      {
        "parentId": 1,
        "company": "1st Denver Title"
      },
      {
        "parentId": 2,
        "company": "2222 Abstract Company"
      },
      {
        "parentId": 3,
        "company": "24 Hour Record Retriever & Abstract"
      },
      {
        "parentId": 4,
        "company": "3 Point Asset Management"
      },
      {
        "parentId": 5,
        "company": "A & J Title Searching Co Inc"
      }
    ]
    // this.createCustomerSvc.getParentCompany()
    //   .subscribe((parentCompaniesList) => {
    //     this.parentCompaniesList = parentCompaniesList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchManagersList() {
    this.managersList = [
      {
        "id": 2,
        "name": "Brightman, Jennifer"
      },
      {
        "id": 3,
        "name": "Glass, Laura C"
      },
      {
        "id": 1,
        "name": "Gray, Jamie"
      },
      {
        "id": 4,
        "name": "Unassigned - FSV,ignore"
      }
    ];
    // this.createCustomerSvc.getManagers()
    //   .subscribe((managersList) => {
    //     this.managersList = managersList;
    //   }, (err: any) => {
    //     this.snackBService.error(err.error, '');
    //   })
  }
  fetchCollectorsData() {
    this.collectorsDataList = [
      {
        "collectorId": 1,
        "collectorName": "Elijah, Terrell"
      },
      {
        "collectorId": 6,
        "collectorName": "Kotansky, Karen"
      },
      {
        "collectorId": 4,
        "collectorName": "Leonard, Antoinette"
      },
      {
        "collectorId": 3,
        "collectorName": "Maleski, Sheila"
      },
      {
        "collectorId": 5,
        "collectorName": "Sapre, Minal"
      },
      {
        "collectorId": 2,
        "collectorName": "Volcy, Sandra"
      }
    ]
    this.createCustomerSvc.getColletorData()
      .subscribe((collectorsList) => {
        this.collectorsDataList = collectorsList;
      }, (err: any) => {
        this.snackBService.error(err.error, '');
      })
  }

}
