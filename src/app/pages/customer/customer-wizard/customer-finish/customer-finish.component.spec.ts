import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinishComponent } from './customer-finish.component';

describe('CustomerFinishComponent', () => {
  let component: CustomerFinishComponent;
  let fixture: ComponentFixture<CustomerFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
