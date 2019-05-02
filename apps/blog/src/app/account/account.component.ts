import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'apollo-client/util/Observable';
import {
  ACCOUNT_QUERY,
  DELETE_POST_MUTATION,
  AccountQueryResponse
} from './graphql';

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

  constructor(private router: Router, private apollo: Apollo) {}

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

  editPost(id: string) {
    this.router.navigate([`/edit/${id}`]);
  }

  deletePost(id: string) {
    this.loading = true;

    this.apollo
      .mutate({
        mutation: DELETE_POST_MUTATION,
        variables: {
          id
        },
        update: store => {
          const data: AccountQueryResponse = store.readQuery({
            query: ACCOUNT_QUERY,
            variables: { id: localStorage.getItem(GC_USER_ID) }
          });

          const newPosts = data.User.posts.filter(post => post.id !== id);

          const user = { ...data.User, posts: newPosts };
          this.user = user;

          store.writeQuery({
            query: ACCOUNT_QUERY,
            variables: { id: localStorage.getItem(GC_USER_ID) },
            data: { ...data, User: user }
          });
        },
        refetchQueries: [
          {
            query: ACCOUNT_QUERY,
            variables: { id: localStorage.getItem(GC_USER_ID) }
          }
        ]
      })
      .subscribe(
        () => {
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
