import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBatchComponent } from './customer-batch.component';

describe('CustomerBatchComponent', () => {
  let component: CustomerBatchComponent;
  let fixture: ComponentFixture<CustomerBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
