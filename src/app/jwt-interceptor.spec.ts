import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt-interceptor';
import { AuthService } from './services/auth.service';

describe('JwtInterceptor', () => {
  it('should create an instance', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    const service: AuthService = TestBed.get(AuthService);
    expect(new JwtInterceptor(service)).toBeTruthy();
  });
});
