import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {
  CREATE_USER_MUTATION,
  CreateUserMutationResponse,
  SIGNIN_USER_MUTATION,
  SigninUserMutationResponse
} from './graphql';
import { ApolloQueryResult, ApolloError } from 'apollo-client';

import { GC_AUTH_TOKEN, GC_USER_ID } from '../constants';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = true; // switch between Login and SignUp
  authForm: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apollo: Apollo
  ) {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    if (!this.login) {
      this.authForm.addControl(
        'name',
        new FormControl('', [Validators.required])
      );
    }
  }

  confirm() {
    this.isLoading = true;
    console.log(this.authForm);
    if (this.login) {
      this.apollo
        .mutate({
          mutation: SIGNIN_USER_MUTATION,
          variables: {
            email: this.authForm.value.email,
            password: this.authForm.value.password
          }
        })
        .subscribe(
          (result: ApolloQueryResult<SigninUserMutationResponse>) => {
            this.onSuccess(result);
          },
          error => {
            this.onError(error);
          }
        );
    } else {
      this.apollo
        .mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            name: this.authForm.value.name,
            email: this.authForm.value.email,
            password: this.authForm.value.password
          }
        })
        .subscribe(
          (result: ApolloQueryResult<CreateUserMutationResponse>) => {
            this.onSuccess(result);
          },
          error => {
            this.onError(error);
          }
        );
    }
  }

  onSuccess(
    result: ApolloQueryResult<
      SigninUserMutationResponse | CreateUserMutationResponse
    >
  ) {
    this.isLoading = false;

    const id = result.data.authenticateUser.id;
    const token = result.data.authenticateUser.token;
    this.saveUserData(id, token);

    this.router.navigate(['/']);
  }

  onError(error: ApolloError) {
    this.isLoading = false;

    alert(error);
  }

  saveUserData(id: string, token: string) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }
}
