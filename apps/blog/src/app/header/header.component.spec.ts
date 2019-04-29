import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async(() => {
    authServiceStub = {
      isAuthenticated: new BehaviorSubject(true)
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
