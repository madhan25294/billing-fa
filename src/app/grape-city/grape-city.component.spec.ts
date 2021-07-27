import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapeCityComponent } from './grape-city.component';

describe('GrapeCityComponent', () => {
  let component: GrapeCityComponent;
  let fixture: ComponentFixture<GrapeCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapeCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapeCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
