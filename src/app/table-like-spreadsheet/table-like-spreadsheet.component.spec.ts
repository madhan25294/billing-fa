import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLikeSpreadsheetComponent } from './table-like-spreadsheet.component';

describe('TableLikeSpreadsheetComponent', () => {
  let component: TableLikeSpreadsheetComponent;
  let fixture: ComponentFixture<TableLikeSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLikeSpreadsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLikeSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
