import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'apollo-client/util/Observable';
import { POST_QUERY, PostQueryResponse } from './graphql';

import { Post } from '../types';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  loading = false;
  formatDate = format;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    const variables = { id: this.route.snapshot.paramMap.get('id') };
    this.querySubscription = this.apollo
      .watchQuery<PostQueryResponse>({
        query: POST_QUERY,
        variables
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data);
        this.loading = loading;
        this.post = data.Post;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
