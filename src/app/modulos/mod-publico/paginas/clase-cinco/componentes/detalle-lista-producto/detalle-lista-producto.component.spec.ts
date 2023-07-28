import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleListaProductoComponent } from './detalle-lista-producto.component';

describe('DetalleListaProductoComponent', () => {
  let component: DetalleListaProductoComponent;
  let fixture: ComponentFixture<DetalleListaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleListaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleListaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
