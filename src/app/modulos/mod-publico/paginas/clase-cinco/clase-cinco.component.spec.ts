import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseCincoComponent } from './clase-cinco.component';

describe('ClaseCincoComponent', () => {
  let component: ClaseCincoComponent;
  let fixture: ComponentFixture<ClaseCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
