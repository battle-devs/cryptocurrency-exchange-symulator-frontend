import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingAccountBalanceComponent } from './checking-account-balance.component';

describe('CheckingAccountBalanceComponent', () => {
  let component: CheckingAccountBalanceComponent;
  let fixture: ComponentFixture<CheckingAccountBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingAccountBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
