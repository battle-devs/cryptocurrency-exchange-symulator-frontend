import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingCryptocurrenciesComponent } from './buying-cryptocurrencies.component';

describe('BuyingCryptocurrenciesComponent', () => {
  let component: BuyingCryptocurrenciesComponent;
  let fixture: ComponentFixture<BuyingCryptocurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingCryptocurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
