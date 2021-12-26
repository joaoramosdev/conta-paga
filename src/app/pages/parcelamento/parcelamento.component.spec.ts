import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelamentoComponent } from './parcelamento.component';

describe('ParcelamentoComponent', () => {
  let component: ParcelamentoComponent;
  let fixture: ComponentFixture<ParcelamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
