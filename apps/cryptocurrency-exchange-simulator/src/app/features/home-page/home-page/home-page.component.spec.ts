import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EventEmitter } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyComponent } from './currency-list/currency/currency.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  const mockTranslateService: {
    [P in keyof TranslateService]?: jest.Mock<unknown, unknown[]>;
  } = {
    addLangs: jest.fn(),
    setDefaultLang: jest.fn(),
    get: jest.fn((key) => of(key)),
    getLangs: jest.fn(),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      declarations: [
        HomePageComponent,
        BannerComponent,
        CurrencyListComponent,
        CurrencyComponent,
      ],
    }).compileComponents();

    Object.defineProperty(mockTranslateService, 'onTranslationChange', {
      get: jest.fn(() => new EventEmitter()),
      set: jest.fn(),
    });
    Object.defineProperty(mockTranslateService, 'onLangChange', {
      get: jest.fn(() => new EventEmitter()),
      set: jest.fn(),
    });
    Object.defineProperty(mockTranslateService, 'onDefaultLangChange', {
      get: jest.fn(() => new EventEmitter()),
      set: jest.fn(),
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two child components', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const banner = compiled?.querySelector('inzynieria-oprogramowania-banner');
    const currencyList = compiled?.querySelector(
      'inzynieria-oprogramowania-currency-list'
    );
    expect(banner).toBeTruthy();
    expect(currencyList).toBeTruthy();
  });
});
