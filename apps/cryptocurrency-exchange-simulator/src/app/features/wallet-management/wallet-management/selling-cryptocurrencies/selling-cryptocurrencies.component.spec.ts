import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingCryptocurrenciesComponent } from './selling-cryptocurrencies.component';

describe('SellingCryptocurrenciesComponent', () => {
  let component: SellingCryptocurrenciesComponent;
  let fixture: ComponentFixture<SellingCryptocurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingCryptocurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
