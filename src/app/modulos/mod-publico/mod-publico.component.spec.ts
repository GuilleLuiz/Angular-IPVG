import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPublicoComponent } from './mod-publico.component';

describe('ModPublicoComponent', () => {
  let component: ModPublicoComponent;
  let fixture: ComponentFixture<ModPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
