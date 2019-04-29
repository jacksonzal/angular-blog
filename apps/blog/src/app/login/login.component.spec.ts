import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from '../auth.service';

import { LoginComponent } from './login.component';
import { LoadingComponent } from '../loading/loading.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let controller: ApolloTestingController;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async(() => {
    authServiceStub = {
      isAuthenticated: new BehaviorSubject(true)
    };
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [LoginComponent, LoadingComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.get(ApolloTestingController);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
