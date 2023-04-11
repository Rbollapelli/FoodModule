import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOrderDetailsCompComponent } from './cust-order-details-comp.component';

describe('CustOrderDetailsCompComponent', () => {
  let component: CustOrderDetailsCompComponent;
  let fixture: ComponentFixture<CustOrderDetailsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustOrderDetailsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustOrderDetailsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
