import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MainMenuComponent } from './shared/components/menu/main-menu/main-menu.component';
import {
  LangChangeEvent,
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';

describe('AppComponent', () => {
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
      ],
      declarations: [AppComponent, MenuComponent, MainMenuComponent],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService },
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cryptocurrency-exchange-simulator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cryptocurrency-exchange-simulator');
  });

  it('should render menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('inzynieria-oprogramowania-menu')
    ).toBeTruthy();
  });
});
