import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronObservadorArregloComponent } from './patron-observador-arreglo.component';

describe('PatronObservadorArregloComponent', () => {
  let component: PatronObservadorArregloComponent;
  let fixture: ComponentFixture<PatronObservadorArregloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronObservadorArregloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronObservadorArregloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
