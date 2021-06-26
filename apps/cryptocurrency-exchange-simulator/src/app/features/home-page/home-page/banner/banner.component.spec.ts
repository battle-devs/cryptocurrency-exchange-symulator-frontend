import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventEmitter } from '@angular/core';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
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
      declarations: [BannerComponent],
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
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    const element = compiled?.querySelector('.title');
    expect(element.textContent).toBe('Learn how to invest');
  });
});
