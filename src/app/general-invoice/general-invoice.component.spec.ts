import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoiceComponent } from './general-invoice.component';

describe('GeneralInvoiceComponent', () => {
  let component: GeneralInvoiceComponent;
  let fixture: ComponentFixture<GeneralInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
