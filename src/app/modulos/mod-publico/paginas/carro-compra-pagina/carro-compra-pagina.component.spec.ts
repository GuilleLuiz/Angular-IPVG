import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCompraPaginaComponent } from './carro-compra-pagina.component';

describe('CarroCompraPaginaComponent', () => {
  let component: CarroCompraPaginaComponent;
  let fixture: ComponentFixture<CarroCompraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCompraPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCompraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
