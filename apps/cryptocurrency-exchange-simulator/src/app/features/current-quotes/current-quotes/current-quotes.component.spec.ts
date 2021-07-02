import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQuotesComponent } from './current-quotes.component';

describe('CurrentQuotesComponent', () => {
  let component: CurrentQuotesComponent;
  let fixture: ComponentFixture<CurrentQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
