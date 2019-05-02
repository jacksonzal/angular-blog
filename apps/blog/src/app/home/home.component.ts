import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'apollo-client/util/Observable';
import { ALL_POSTS_QUERY, AllPostsQueryResponse } from './graphql';

import { Post } from '../types';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<AllPostsQueryResponse>({
        query: ALL_POSTS_QUERY,
        fetchPolicy: 'network-only'
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.allPosts;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
