import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBalanceResetComponent } from './account-balance-reset.component';

describe('AccountBalanceResetComponent', () => {
  let component: AccountBalanceResetComponent;
  let fixture: ComponentFixture<AccountBalanceResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBalanceResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBalanceResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
