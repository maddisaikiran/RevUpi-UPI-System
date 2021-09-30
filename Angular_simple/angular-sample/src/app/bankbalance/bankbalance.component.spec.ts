import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankbalanceComponent } from './bankbalance.component';

describe('BankbalanceComponent', () => {
  let component: BankbalanceComponent;
  let fixture: ComponentFixture<BankbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
