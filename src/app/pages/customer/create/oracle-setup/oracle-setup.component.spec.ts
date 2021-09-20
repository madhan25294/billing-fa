import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleSetupComponent } from './oracle-setup.component';

describe('OracleSetupComponent', () => {
  let component: OracleSetupComponent;
  let fixture: ComponentFixture<OracleSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracleSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
