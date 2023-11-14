import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginProtectGuard } from './login-protect.guard';

describe('loginProtectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginProtectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
