import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDetalleAveComponent } from './carga-detalle-ave.component';

describe('CargaDetalleAveComponent', () => {
  let component: CargaDetalleAveComponent;
  let fixture: ComponentFixture<CargaDetalleAveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaDetalleAveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDetalleAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
