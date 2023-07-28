import { TestBed } from '@angular/core/testing';

import { GuardClienteGuard } from './guard-cliente.guard';

describe('GuardClienteGuard', () => {
  let guard: GuardClienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardClienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
