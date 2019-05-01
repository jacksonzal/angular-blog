import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'apollo-client/util/Observable';
import { ACCOUNT_QUERY, AccountQueryResponse } from './graphql';

import { User } from '../types';

import { format } from 'date-fns';

import { GC_USER_ID } from '../constants';

@Component({
  selector: 'blog-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private querySubscription: Subscription;
  loading = false;
  user: User;
  formatDate = format;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<AccountQueryResponse>({
        query: ACCOUNT_QUERY,
        variables: { id: localStorage.getItem(GC_USER_ID) }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.user = data.User;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
