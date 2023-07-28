import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarroComponent } from './lista-carro.component';

describe('ListaCarroComponent', () => {
  let component: ListaCarroComponent;
  let fixture: ComponentFixture<ListaCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
