import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionClienteComponent } from './navegacion-cliente.component';

describe('NavegacionClienteComponent', () => {
  let component: NavegacionClienteComponent;
  let fixture: ComponentFixture<NavegacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
