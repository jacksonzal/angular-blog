import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountComponent } from './account.component';
import { LoadingComponent } from '../loading/loading.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule, RouterTestingModule],
      declarations: [AccountComponent, LoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.get(ApolloTestingController);
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
