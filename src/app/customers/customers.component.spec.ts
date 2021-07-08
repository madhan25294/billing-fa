import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomersComponent } from './customers.component';
import { CommonService } from '../services/common.service';


fdescribe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let service: CommonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [CustomersComponent],
      providers: [CommonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CommonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check getusers method', () => {
    component.getUsers();
    expect(component.users).toEqual([
      {
        "custId": 110001,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "Inland Empire Division, Riverside, CA",
        "companyName": "Ticor Title Company of California"
      },
      {
        "custId": 110003,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "560 E. Hospitality Lane, San Bernardino, CA",
        "companyName": "Chicago Title Company"
      },
      {
        "custId": 110006,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "451 East Vanderbilt Way, Suite 350, San Bernardino, CA",
        "companyName": "Fidelity National Title Insurance Company"
      },
      {
        "custId": 110007,
        "accountManagerName": "Doreen Kimberly Tonarelli",
        "addressDetails": "3625 Fourteenth Street, Riverside, CA",
        "companyName": "First American Title Company"
      },
      {
        "custId": 110017,
        "accountManagerName": "Christi Cipriani",
        "addressDetails": "7065 Indiana Ave Ste 100, Riverside, CA",
        "companyName": "Stewart Title Company"
      }
    ]);
  });
});
