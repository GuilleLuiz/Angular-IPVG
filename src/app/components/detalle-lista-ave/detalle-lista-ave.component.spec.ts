import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleListaAveComponent } from './detalle-lista-ave.component';

describe('DetalleListaAveComponent', () => {
  let component: DetalleListaAveComponent;
  let fixture: ComponentFixture<DetalleListaAveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleListaAveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleListaAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
