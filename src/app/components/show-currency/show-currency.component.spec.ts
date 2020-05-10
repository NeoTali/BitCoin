import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrencyComponent } from './show-currency.component';

describe('ShowCurrencyComponent', () => {
  let component: ShowCurrencyComponent;
  let fixture: ComponentFixture<ShowCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
