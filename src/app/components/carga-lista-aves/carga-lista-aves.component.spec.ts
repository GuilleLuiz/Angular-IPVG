import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaListaAvesComponent } from './carga-lista-aves.component';

describe('CargaListaAvesComponent', () => {
  let component: CargaListaAvesComponent;
  let fixture: ComponentFixture<CargaListaAvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaListaAvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaListaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
