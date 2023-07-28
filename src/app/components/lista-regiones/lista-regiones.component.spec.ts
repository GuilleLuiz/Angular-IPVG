import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegionesComponent } from './lista-regiones.component';

describe('ListaRegionesComponent', () => {
  let component: ListaRegionesComponent;
  let fixture: ComponentFixture<ListaRegionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
