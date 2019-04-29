import { TestBed, async, inject } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {
      isAuthenticated: new BehaviorSubject(true)
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceStub }
      ]
    });
  });

  it('should', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
