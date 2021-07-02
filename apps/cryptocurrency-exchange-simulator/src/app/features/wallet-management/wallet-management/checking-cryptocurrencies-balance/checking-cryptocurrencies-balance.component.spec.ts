import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingCryptocurrenciesBalanceComponent } from './checking-cryptocurrencies-balance.component';

describe('CheckingCryptocurrenciesBalanceComponent', () => {
  let component: CheckingCryptocurrenciesBalanceComponent;
  let fixture: ComponentFixture<CheckingCryptocurrenciesBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingCryptocurrenciesBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingCryptocurrenciesBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
