import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error-interceptor';
import { AuthService } from './services/auth.service';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(new ErrorInterceptor(service)).toBeTruthy();
  });
});
