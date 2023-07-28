import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronObservadorComponent } from './patron-observador.component';

describe('PatronObservadorComponent', () => {
  let component: PatronObservadorComponent;
  let fixture: ComponentFixture<PatronObservadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronObservadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronObservadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
